import { verify } from '@node-rs/argon2';
import { r as redirect, f as fail } from './shared-server-DbzQewHu.js';
import { eq } from 'drizzle-orm';
import { d as dev } from './index4-Bf3qr8N6.js';
import { d as db, a as user, c as createSession, s as sessionCookieName } from './auth-BVEEjUt6.js';
import './node-B2gHlHjM.js';
import '@oslojs/crypto/sha2';
import '@oslojs/encoding';
import 'drizzle-orm/better-sqlite3';
import 'better-sqlite3';
import 'drizzle-orm/sqlite-core';
import 'dayjs';

const load = async (event) => {
  if (event.locals.user) {
    return redirect(302, "/");
  }
  return {};
};
const actions = {
  login: async (event) => {
    const formData = await event.request.formData();
    const username = formData.get("username");
    const password = formData.get("password");
    if (!validateUsername(username)) {
      return fail(400, { message: "Invalid username" });
    }
    if (!validatePassword(password)) {
      return fail(400, { message: "Invalid password" });
    }
    const results = await db.select().from(user).where(eq(user.username, username));
    const existingUser = results.at(0);
    if (!existingUser) {
      return fail(400, { message: "Incorrect username or password" });
    }
    const validPassword = await verify(existingUser.passwordHash, password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1
    });
    if (!validPassword) {
      return fail(400, { message: "Incorrect username or password" });
    }
    const session = await createSession(existingUser.id);
    event.cookies.set(sessionCookieName, session.id, {
      path: "/",
      sameSite: "lax",
      httpOnly: true,
      expires: session.expiresAt,
      secure: !dev
    });
    return redirect(302, "/");
  }
};
function validateUsername(username) {
  return typeof username === "string" && username.length >= 3 && username.length <= 31 && !!username;
}
function validatePassword(password) {
  return typeof password === "string" && password.length >= 6 && password.length <= 255;
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CmaR3O0E.js')).default;
const server_id = "src/routes/login/+page.server.ts";
const imports = ["_app/immutable/nodes/5.D3vfAt92.js","_app/immutable/chunks/disclose-version.CJevfRbn.js","_app/immutable/chunks/entry.DjYp6XJk.js","_app/immutable/chunks/render.B9D5Ke_p.js","_app/immutable/chunks/forms.agMnjhND.js","_app/immutable/chunks/session.BzRBxy-y.js","_app/immutable/chunks/Navbar.CUJ93B9b.js"];
const stylesheets = ["_app/immutable/assets/5.CfeZZ-4y.css","_app/immutable/assets/Navbar.DQBA4KHv.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=5-Ch0-C7_Y.js.map
