import { d as dev } from './index4-Bf3qr8N6.js';
import { s as sessionCookieName, v as validateSession } from './auth-BVEEjUt6.js';
import { i as i18n } from './i18n-BEhmAphf.js';
import './node-B2gHlHjM.js';
import 'drizzle-orm';
import '@oslojs/crypto/sha2';
import '@oslojs/encoding';
import 'drizzle-orm/better-sqlite3';
import 'better-sqlite3';
import './shared-server-DbzQewHu.js';
import 'drizzle-orm/sqlite-core';
import 'dayjs';
import './constants-BbR5-deO.js';
import './exports-DE4n1uap.js';
import './paths-CYDIOyak.js';
import './stores-p15bWgiW.js';

function sequence(...handlers) {
  const length = handlers.length;
  if (!length) return ({ event, resolve }) => resolve(event);
  return ({ event, resolve }) => {
    return apply_handle(0, event, {});
    function apply_handle(i, event2, parent_options) {
      const handle2 = handlers[i];
      return handle2({
        event: event2,
        resolve: (event3, options) => {
          const transformPageChunk = async ({ html, done }) => {
            if (options?.transformPageChunk) {
              html = await options.transformPageChunk({ html, done }) ?? "";
            }
            if (parent_options?.transformPageChunk) {
              html = await parent_options.transformPageChunk({ html, done }) ?? "";
            }
            return html;
          };
          const filterSerializedResponseHeaders = parent_options?.filterSerializedResponseHeaders ?? options?.filterSerializedResponseHeaders;
          const preload = parent_options?.preload ?? options?.preload;
          return i < length - 1 ? apply_handle(i + 1, event3, {
            transformPageChunk,
            filterSerializedResponseHeaders,
            preload
          }) : resolve(event3, { transformPageChunk, filterSerializedResponseHeaders, preload });
        }
      });
    }
  };
}
const handleParaglide = i18n.handle();
const handleAuth = async ({ event, resolve }) => {
  const sessionId = event.cookies.get(sessionCookieName);
  if (!sessionId) {
    event.locals.user = null;
    event.locals.session = null;
    return resolve(event);
  }
  const { session, user } = await validateSession(sessionId);
  if (session) {
    event.cookies.set(sessionCookieName, session.id, {
      path: "/",
      sameSite: "lax",
      httpOnly: true,
      expires: session.expiresAt,
      secure: !dev
    });
  } else {
    event.cookies.delete(sessionCookieName, { path: "/" });
  }
  event.locals.user = user;
  event.locals.session = session;
  return resolve(event);
};
const handle = sequence(handleParaglide, handleAuth);
const handleError = ({ event, message, status, error }) => {
  return {
    message,
    user: event.locals.user
  };
};

export { handle, handleError };
//# sourceMappingURL=hooks.server-BCw4nWhu.js.map
