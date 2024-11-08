import { Q as head, V as attr, Z as stringify, X as escape_html, O as store_get, S as unsubscribe_stores, n as pop, p as push } from './exports-DE4n1uap.js';
import { g as getTranslationFunctions, u as user } from './session-BNzW1WO2.js';
import { l as languageTag } from './constants-BbR5-deO.js';

const welcome$2 = /* @__NO_SIDE_EFFECTS__ */ (params) => `Welcome ${params.name}`;
const welcome$1 = /* @__NO_SIDE_EFFECTS__ */ (params) => `Bienvenue ${params.name}`;
const welcome = /* @__NO_SIDE_EFFECTS__ */ (params, options = {}) => {
  return {
    en: welcome$2,
    fr: welcome$1
  }[options.languageTag ?? languageTag()](params);
};
const projects$2 = /* @__NO_SIDE_EFFECTS__ */ () => `Projects`;
const projects$1 = /* @__NO_SIDE_EFFECTS__ */ () => `Projets`;
const projects = /* @__NO_SIDE_EFFECTS__ */ (params = {}, options = {}) => {
  return {
    en: projects$2,
    fr: projects$1
  }[options.languageTag ?? languageTag()]();
};
const about$2 = /* @__NO_SIDE_EFFECTS__ */ () => `About`;
const about$1 = /* @__NO_SIDE_EFFECTS__ */ () => `A propos`;
const about = /* @__NO_SIDE_EFFECTS__ */ (params = {}, options = {}) => {
  return {
    en: about$2,
    fr: about$1
  }[options.languageTag ?? languageTag()]();
};
function Footer($$payload) {
  $$payload.out += `<footer class="svelte-1a76bmg"><p>Copyright © 2024-2025 all rights reserved</p></footer>`;
}
function Navbar($$payload, $$props) {
  push();
  var $$store_subs;
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>FluffWorks</title>`;
  });
  $$payload.out += `<img src="/background.png" alt="" class="bg svelte-u912gq"> <nav class="svelte-u912gq"><div class="logo svelte-u912gq"><img src="/logo.png" alt="FluffWorks Logo" class="svelte-u912gq"></div> <button class="hamburger svelte-u912gq">☰</button> <div${attr("class", `links svelte-u912gq ${stringify([""].filter(Boolean).join(" "))}`)}><a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/merch`, void 0))} class="svelte-u912gq">Merch</a> <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/projects`, void 0))} class="svelte-u912gq">${escape_html(/* @__PURE__ */ projects())}</a> <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/about`, void 0))} class="svelte-u912gq">${escape_html(/* @__PURE__ */ about())}</a> <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/contact`, void 0))} class="svelte-u912gq">Contact</a> `;
  if (!store_get($$store_subs ??= {}, "$user", user)) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/login`, void 0))} class="svelte-u912gq">Login</a> <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/register`, void 0))} class="svelte-u912gq">Register</a>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (store_get($$store_subs ??= {}, "$user", user)) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p>${escape_html(/* @__PURE__ */ welcome({
      name: store_get($$store_subs ??= {}, "$user", user).username
    }))}</p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <a class="snipcart-checkout svelte-u912gq"${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`#`, void 0))}><span>🛒</span> <span class="snipcart-items-count svelte-u912gq"></span></a></div></nav> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { Navbar as N };
//# sourceMappingURL=Navbar-CgwJb2VC.js.map
