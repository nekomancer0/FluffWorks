import { X as escape_html, V as attr, T as bind_props, n as pop, p as push } from './exports-DE4n1uap.js';
import { g as getTranslationFunctions } from './session-BNzW1WO2.js';
import { N as Navbar } from './Navbar-CgwJb2VC.js';
import { l as languageTag } from './constants-BbR5-deO.js';
import { S as Svelte_seo } from './index3-BnqSF9ie.js';
import './node-B2gHlHjM.js';

const contact_us$2 = /* @__NO_SIDE_EFFECTS__ */ () => `CONTACT US`;
const contact_us$1 = /* @__NO_SIDE_EFFECTS__ */ () => `NOUS CONTACTER`;
const contact_us = /* @__NO_SIDE_EFFECTS__ */ (params = {}, options = {}) => {
  return {
    en: contact_us$2,
    fr: contact_us$1
  }[options.languageTag ?? languageTag()]();
};
const join_us$2 = /* @__NO_SIDE_EFFECTS__ */ () => `JOIN US`;
const join_us$1 = /* @__NO_SIDE_EFFECTS__ */ () => `NOUS REJOINDRE`;
const join_us = /* @__NO_SIDE_EFFECTS__ */ (params = {}, options = {}) => {
  return {
    en: join_us$2,
    fr: join_us$1
  }[options.languageTag ?? languageTag()]();
};
const socials$2 = /* @__NO_SIDE_EFFECTS__ */ () => `SOCIALS`;
const socials$1 = /* @__NO_SIDE_EFFECTS__ */ () => `RESEAUX`;
const socials = /* @__NO_SIDE_EFFECTS__ */ (params = {}, options = {}) => {
  return {
    en: socials$2,
    fr: socials$1
  }[options.languageTag ?? languageTag()]();
};
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  $$payload.out += `<!---->`;
  {
    Svelte_seo($$payload, {
      title: "FluffWorks | Contact",
      description: "Contact FluffWorks",
      keywords: "fluffworks website furry company kemono furries fluffy fantasy video games game videos society board utility dev development web site services projects service project kemonomimi uwu owo",
      openGraph: {
        images: [{ url: "/logo.png" }],
        title: "FluffWorks | Contact",
        description: "Contact FluffWorks",
        site_name: "FluffWorks"
      },
      applicationName: "FluffWorks",
      twitter: {
        card: "app",
        creator: "FluffWorks",
        description: "Contact FluffWorks",
        image: "/logo.png",
        title: "FluffWorks | Contact"
      }
    });
  }
  $$payload.out += `<!----> `;
  Navbar($$payload);
  $$payload.out += `<!----> <div class="container svelte-seyklt"><div class="inline svelte-seyklt"><div class="block svelte-seyklt"><div class="contact-us box svelte-seyklt"><h1 class="svelte-seyklt">${escape_html(/* @__PURE__ */ contact_us())}</h1> <div class="center svelte-seyklt"><p><b>E-mail</b>: contact@fluffworks.quest</p> <p><b>Phone</b>: +33 00 00 00 00 00</p></div></div> <div class="join-us box svelte-seyklt"><h1 class="svelte-seyklt">${escape_html(/* @__PURE__ */ join_us())}</h1> <div class="center svelte-seyklt"><p><b>Jobs</b>: jobs@fluffworks.quest</p> <p><b>Phone</b>: +33 00 00 00 00 00</p></div></div></div> <div class="socials svelte-seyklt"><h1 class="svelte-seyklt">${escape_html(/* @__PURE__ */ socials())}</h1> <div class="icons svelte-seyklt"><a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`https://discord.gg/RAKqUDkgaJ`, void 0))} target="_blank"><img src="/discord.svg" alt="" class="svelte-seyklt"></a> <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`https://www.linkedin.com/company/fluffworks/`, void 0))} target="_blank"><img src="/linkedin.svg" alt="" class="svelte-seyklt"></a> <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`https://www.youtube.com/@fluffworks-yt`, void 0))} target="_blank"><img src="/youtube.svg" alt="" class="svelte-seyklt"></a></div></div></div></div>`;
  bind_props($$props, { data });
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DaYRoou1.js.map
