import { n as pop, O as store_get, P as fallback, Q as head, R as slot, S as unsubscribe_stores, T as bind_props, p as push, U as ensure_array_like, V as attr, W as get } from './exports-DE4n1uap.js';
import { n as normaliseBase$1, i as i18n, p as parseRoute, s as serializeRoute, g as getHrefBetween } from './i18n-BEhmAphf.js';
import { p as page } from './stores-p15bWgiW.js';
import { b as base } from './paths-CYDIOyak.js';
import './constants-BbR5-deO.js';
import { u as user, s as setParaglideContext } from './session-BNzW1WO2.js';
import { S as Svelte_seo } from './index3-BnqSF9ie.js';
import './node-B2gHlHjM.js';

function isExternal(url, currentUrl, base2) {
  const absoluteBase = new URL(base2 ?? "/", currentUrl).pathname;
  return url.origin !== currentUrl.origin || !url.pathname.startsWith(absoluteBase);
}
function AlternateLinks($$payload, $$props) {
  push();
  var $$store_subs;
  let localisedPath, canonicalPath, alternateLinks;
  const absoluteBase = normaliseBase$1(base, new URL(store_get($$store_subs ??= {}, "$page", page).url)) || "/";
  let availableLanguageTags = $$props["availableLanguageTags"];
  let strategy = $$props["strategy"];
  let currentLang = $$props["currentLang"];
  const getAlternateLinks = (canonicalPath2, strategy2) => {
    const links = [];
    for (const lang of availableLanguageTags) {
      const localisedPath2 = strategy2.getLocalisedPath(canonicalPath2, lang);
      const fullPath = serializeRoute(localisedPath2, absoluteBase, void 0);
      const link = new URL(fullPath, new URL(store_get($$store_subs ??= {}, "$page", page).url)).href;
      links.push(link);
    }
    return links;
  };
  localisedPath = parseRoute(store_get($$store_subs ??= {}, "$page", page).url.pathname, absoluteBase)[0];
  canonicalPath = strategy.getCanonicalPath(localisedPath, currentLang);
  alternateLinks = getAlternateLinks(canonicalPath, strategy);
  if (availableLanguageTags.length >= 1) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(alternateLinks);
    $$payload.out += `<!--[-->`;
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let href = each_array[i];
      $$payload.out += `<link rel="alternate"${attr("hreflang", availableLanguageTags[i])}${attr("href", href)}>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { availableLanguageTags, strategy, currentLang });
  pop();
}
function ParaglideJS($$payload, $$props) {
  push();
  var $$store_subs;
  let lang;
  const absoluteBase = normaliseBase$1(base, new URL(store_get($$store_subs ??= {}, "$page", page).url)) || "/";
  let languageTag = fallback($$props["languageTag"], () => void 0, true);
  let i18n2 = $$props["i18n"];
  function translateHref(href, hreflang) {
    try {
      const localisedCurrentUrl = new URL(get(page).url);
      const [localisedCurrentPath, suffix] = parseRoute(localisedCurrentUrl.pathname, absoluteBase);
      const canonicalCurrentPath = i18n2.strategy.getCanonicalPath(localisedCurrentPath, lang);
      const canonicalCurrentUrl = new URL(localisedCurrentUrl);
      canonicalCurrentUrl.pathname = serializeRoute(canonicalCurrentPath, absoluteBase, suffix);
      const original_to = new URL(href, new URL(canonicalCurrentUrl));
      if (isExternal(original_to, localisedCurrentUrl, absoluteBase) || i18n2.config.exclude(original_to.pathname)) return href;
      const targetLanguage = hreflang ?? lang;
      const [canonicalPath, dataSuffix] = parseRoute(original_to.pathname, absoluteBase);
      const translatedPath = i18n2.strategy.getLocalisedPath(canonicalPath, targetLanguage);
      const to = new URL(original_to);
      to.pathname = serializeRoute(translatedPath, absoluteBase, dataSuffix);
      return getHrefBetween(localisedCurrentUrl, to);
    } catch (error) {
      return href;
    }
  }
  setParaglideContext({ translateHref });
  lang = languageTag ?? i18n2.getLanguageFromUrl(store_get($$store_subs ??= {}, "$page", page).url);
  head($$payload, ($$payload2) => {
    if (i18n2.config.seo.noAlternateLinks !== true && !i18n2.config.exclude(store_get($$store_subs ??= {}, "$page", page).url.pathname)) {
      $$payload2.out += "<!--[-->";
      AlternateLinks($$payload2, {
        availableLanguageTags: i18n2.config.runtime.availableLanguageTags,
        strategy: i18n2.strategy,
        currentLang: lang
      });
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]-->`;
  });
  $$payload.out += `<!---->`;
  {
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "default", {});
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!---->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { languageTag, i18n: i18n2 });
  pop();
}
function _layout($$payload, $$props) {
  push();
  let { children, data } = $$props;
  user.set(data.locals.user);
  $$payload.out += `<!---->`;
  {
    Svelte_seo($$payload, {
      title: "FluffWorks | Website",
      description: "Work in progress FluffWorks Website",
      keywords: "fluffworks website furry company kemono furries fluffy fantasy video games game videos society board utility dev development web site services projects service project kemonomimi uwu owo",
      openGraph: {
        images: [{ url: "/logo.png" }],
        title: "FluffWorks | Website",
        description: "Work in progress FluffWorks Website",
        site_name: "FluffWorks"
      },
      applicationName: "FluffWorks",
      twitter: {
        card: "app",
        creator: "FluffWorks",
        description: "Work in progress FluffWorks Website",
        image: "/logo.png",
        title: "FluffWorks | Website"
      }
    });
  }
  $$payload.out += `<!----> `;
  ParaglideJS($$payload, {
    i18n,
    children: ($$payload2) => {
      children($$payload2);
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
  pop();
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-COlI_DTb.js.map
