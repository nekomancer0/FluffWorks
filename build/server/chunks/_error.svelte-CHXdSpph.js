import { X as escape_html, O as store_get, V as attr, S as unsubscribe_stores, n as pop, p as push } from './exports-DE4n1uap.js';
import { g as getTranslationFunctions } from './session-BNzW1WO2.js';
import { p as page } from './stores-p15bWgiW.js';
import { N as Navbar } from './Navbar-CgwJb2VC.js';
import { l as languageTag } from './constants-BbR5-deO.js';
import './node-B2gHlHjM.js';

const error$2 = /* @__NO_SIDE_EFFECTS__ */ (params) => `Error ${params.status}`;
const error$1 = /* @__NO_SIDE_EFFECTS__ */ (params) => `Erreur ${params.status}`;
const error = /* @__NO_SIDE_EFFECTS__ */ (params, options = {}) => {
  return {
    en: error$2,
    fr: error$1
  }[options.languageTag ?? languageTag()](params);
};
function _error($$payload, $$props) {
  push();
  var $$store_subs;
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  Navbar($$payload);
  $$payload.out += `<!----> <main class="svelte-13ievh3"><h1 class="mb-4 text-4xl font-bold leading-none tracking-tight md:text-5xl lg:text-6xl">${escape_html(/* @__PURE__ */ error({
    status: store_get($$store_subs ??= {}, "$page", page).status
  }))}</h1> <p>${escape_html(store_get($$store_subs ??= {}, "$page", page).error?.message)}</p> <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/`, void 0))} class="svelte-13ievh3">Retour à l'accueil</a></main>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _error as default };
//# sourceMappingURL=_error.svelte-CHXdSpph.js.map
