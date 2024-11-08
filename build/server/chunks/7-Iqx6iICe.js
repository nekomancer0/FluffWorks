import { hash } from '@node-rs/argon2';
import { generateRandomString } from '@oslojs/crypto/random';
import { r as redirect, f as fail } from './shared-server-DbzQewHu.js';
import { d as dev } from './index4-Bf3qr8N6.js';
import { d as db, a as user, c as createSession, s as sessionCookieName } from './auth-BVEEjUt6.js';
import './node-B2gHlHjM.js';
import 'drizzle-orm';
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
  register: async (event) => {
    const formData = await event.request.formData();
    console.log(formData);
    const username = formData.get("username");
    const password = formData.get("password");
    const email = formData.get("email");
    if (!validateUsername(username)) {
      return fail(400, { message: "Invalid username" });
    }
    if (!validatePassword(password)) {
      return fail(400, { message: "Invalid password" });
    }
    if (!validateEmail(email)) {
      return fail(400, { message: "Invalid email" });
    }
    const userId = generateUserId();
    const passwordHash = await hash(password, {
      // recommended minimum parameters
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1
    });
    try {
      await db.insert(user).values({ id: userId, username, passwordHash, email });
      const session = await createSession(userId);
      event.cookies.set(sessionCookieName, session.id, {
        path: "/",
        sameSite: "lax",
        httpOnly: true,
        expires: session.expiresAt,
        secure: !dev
      });
    } catch (e) {
      return fail(500, { message: "An error has occurred" });
    }
    return redirect(302, "/");
  }
};
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_";
function generateUserId(length = 21) {
  return generateRandomString({ read: (bytes) => crypto.getRandomValues(bytes) }, alphabet, length);
}
function validateUsername(username) {
  return typeof username === "string" && username.length >= 3 && username.length <= 31 && !!username;
}
function validateEmail(email) {
  return typeof email === "string" && email.length >= 3 && email.length <= 31 && !!email;
}
function validatePassword(password) {
  return typeof password === "string" && password.length >= 6 && password.length <= 255;
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DkludGwu.js')).default;
const server_id = "src/routes/register/+page.server.ts";
const imports = ["_app/immutable/nodes/7.DgwwoxyW.js","_app/immutable/chunks/disclose-version.CJevfRbn.js","_app/immutable/chunks/entry.DjYp6XJk.js","_app/immutable/chunks/render.B9D5Ke_p.js","_app/immutable/chunks/forms.agMnjhND.js","_app/immutable/chunks/session.BzRBxy-y.js","_app/immutable/chunks/Navbar.CUJ93B9b.js"];
const stylesheets = ["_app/immutable/assets/5.CfeZZ-4y.css","_app/immutable/assets/Navbar.DQBA4KHv.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=7-Iqx6iICe.js.map
