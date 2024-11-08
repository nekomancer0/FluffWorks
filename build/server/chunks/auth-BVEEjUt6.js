import { eq } from 'drizzle-orm';
import { sha256 } from '@oslojs/crypto/sha2';
import { encodeHexLowerCase, encodeBase32LowerCaseNoPadding } from '@oslojs/encoding';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { d as private_env } from './shared-server-DbzQewHu.js';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import dayjs from 'dayjs';

if (!private_env.DATABASE_URL) throw new Error("DATABASE_URL is not set");
const client = new Database(private_env.DATABASE_URL);
const db = drizzle(client);
const user = sqliteTable("user", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  username: text("username").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  admin: integer("admin").default(0)
});
const product = sqliteTable("product", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  image: text("image").notNull(),
  description: text("description").notNull(),
  price: text("price").notNull()
});
const update = sqliteTable("update", {
  id: text("id").primaryKey(),
  date: text("date").notNull().$defaultFn(() => {
    let parsing = dayjs(Date.now());
    let date = parsing.date();
    let strDate = `${date}`;
    if (strDate.endsWith("1")) strDate += "st";
    else if (strDate.endsWith("2")) strDate += "nd";
    else if (strDate.endsWith("3")) strDate += "rd";
    else {
      strDate += "th";
    }
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let month = months[parsing.month()];
    let year = parsing.year();
    return `${strDate} ${month} ${year}`;
  }),
  text: text("text").notNull()
});
const session = sqliteTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull().references(() => user.id),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull()
});
const DAY_IN_MS = 1e3 * 60 * 60 * 24;
const sessionCookieName = "auth-session";
function generateSessionToken() {
  const bytes = crypto.getRandomValues(new Uint8Array(20));
  const token = encodeBase32LowerCaseNoPadding(bytes);
  return token;
}
async function createSession(userId) {
  const token = generateSessionToken();
  const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
  const session$1 = {
    id: sessionId,
    userId,
    expiresAt: new Date(Date.now() + DAY_IN_MS * 30)
  };
  await db.insert(session).values(session$1);
  return session$1;
}
async function invalidateSession(sessionId) {
  await db.delete(session).where(eq(session.id, sessionId));
}
async function validateSession(sessionId) {
  const [result] = await db.select({
    // Adjust user table here to tweak returned data
    user: { id: user.id, username: user.username },
    session
  }).from(session).innerJoin(user, eq(session.userId, user.id)).where(eq(session.id, sessionId));
  if (!result) {
    return { session: null, user: null };
  }
  const { session: session$1, user: user$1 } = result;
  const sessionExpired = Date.now() >= session$1.expiresAt.getTime();
  if (sessionExpired) {
    await db.delete(session).where(eq(session.id, session$1.id));
    return { session: null, user: null };
  }
  const renewSession = Date.now() >= session$1.expiresAt.getTime() - DAY_IN_MS * 15;
  if (renewSession) {
    session$1.expiresAt = new Date(Date.now() + DAY_IN_MS * 30);
    await db.update(session).set({ expiresAt: session$1.expiresAt }).where(eq(session.id, session$1.id));
  }
  return { session: session$1, user: user$1 };
}

export { user as a, createSession as c, db as d, invalidateSession as i, product as p, sessionCookieName as s, update as u, validateSession as v };
//# sourceMappingURL=auth-BVEEjUt6.js.map
