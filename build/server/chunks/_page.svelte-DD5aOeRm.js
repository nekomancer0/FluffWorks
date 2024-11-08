import { U as ensure_array_like, X as escape_html, T as bind_props, n as pop, p as push } from './exports-DE4n1uap.js';
import { N as Navbar } from './Navbar-CgwJb2VC.js';
import { P as Product, n as nomerch } from './Product-Bs6ckMyS.js';
import { l as languageTag } from './constants-BbR5-deO.js';
import './node-B2gHlHjM.js';
import './session-BNzW1WO2.js';

const updates$2 = /* @__NO_SIDE_EFFECTS__ */ () => `UPDATES`;
const updates$1 = /* @__NO_SIDE_EFFECTS__ */ () => `MISES A JOUR`;
const updates = /* @__NO_SIDE_EFFECTS__ */ (params = {}, options = {}) => {
  return {
    en: updates$2,
    fr: updates$1
  }[options.languageTag ?? languageTag()]();
};
const recent_merch$2 = /* @__NO_SIDE_EFFECTS__ */ () => `RECENT MERCH`;
const recent_merch$1 = /* @__NO_SIDE_EFFECTS__ */ () => `RECENTES MERCH`;
const recent_merch = /* @__NO_SIDE_EFFECTS__ */ (params = {}, options = {}) => {
  return {
    en: recent_merch$2,
    fr: recent_merch$1
  }[options.languageTag ?? languageTag()]();
};
function Updates($$payload, $$props) {
  push();
  let updates$12 = $$props["updates"];
  const each_array = ensure_array_like(updates$12);
  $$payload.out += `<main class="svelte-1ubauoj"><h1 class="svelte-1ubauoj">${escape_html(/* @__PURE__ */ updates())}</h1> <img src="/line.png" alt="" class="line svelte-1ubauoj"> <div class="updates svelte-1ubauoj"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let update = each_array[$$index];
    $$payload.out += `<div class="update svelte-1ubauoj"><h2>${escape_html(update.date)}</h2> <p class="svelte-1ubauoj">${escape_html(update.text)}</p></div>`;
  }
  $$payload.out += `<!--]--></div></main>`;
  bind_props($$props, { updates: updates$12 });
  pop();
}
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  const each_array = ensure_array_like(data.products.slice(0, 4));
  Navbar($$payload);
  $$payload.out += `<!----> <div class="container svelte-1d1tbrk">`;
  Updates($$payload, { updates: data.updates });
  $$payload.out += `<!----> <div class="recent_merch svelte-1d1tbrk"><h1 class="svelte-1d1tbrk">${escape_html(/* @__PURE__ */ recent_merch())}</h1> <div class="merchs svelte-1d1tbrk">`;
  if (data.products.length === 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p class="nothing_text">${escape_html(nomerch())}</p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let product = each_array[$$index];
    Product($$payload, {
      product: {
        description: product.description,
        name: product.name,
        id: product.id,
        image: product.image,
        price: product.price
      }
    });
  }
  $$payload.out += `<!--]--></div></div></div>`;
  bind_props($$props, { data });
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DD5aOeRm.js.map
