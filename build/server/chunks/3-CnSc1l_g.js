import { d as db, u as update, p as product, i as invalidateSession, s as sessionCookieName } from './auth-BVEEjUt6.js';
import { f as fail } from './shared-server-DbzQewHu.js';
import 'drizzle-orm';
import '@oslojs/crypto/sha2';
import '@oslojs/encoding';
import 'drizzle-orm/better-sqlite3';
import 'better-sqlite3';
import 'drizzle-orm/sqlite-core';
import 'dayjs';

const load = async (event) => {
  let updates = await db.select().from(update);
  let products = await db.select().from(product);
  return { user: event.locals.user || null, updates, products };
};
const actions = {
  logout: async (event) => {
    if (!event.locals.session) {
      return fail(401);
    }
    await invalidateSession(event.locals.session.id);
    event.cookies.delete(sessionCookieName, { path: "/" });
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C9G_piGo.js')).default;
const server_id = "src/routes/about/+page.server.ts";
const imports = ["_app/immutable/nodes/3.CHzaMyYT.js","_app/immutable/chunks/disclose-version.CJevfRbn.js","_app/immutable/chunks/entry.DjYp6XJk.js","_app/immutable/chunks/index.Bobqm6hf.js","_app/immutable/chunks/each.DHKUNmqm.js","_app/immutable/chunks/session.BzRBxy-y.js","_app/immutable/chunks/props.CTV0YdEt.js","_app/immutable/chunks/stores.JE59PA96.js","_app/immutable/chunks/Navbar.CUJ93B9b.js","_app/immutable/chunks/render.B9D5Ke_p.js"];
const stylesheets = ["_app/immutable/assets/3.kwrQ7d8s.css","_app/immutable/assets/Navbar.DQBA4KHv.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=3-CnSc1l_g.js.map
