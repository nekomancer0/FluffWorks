import { U as ensure_array_like, X as escape_html, T as bind_props, n as pop, p as push } from './exports-DE4n1uap.js';
import { N as Navbar } from './Navbar-CgwJb2VC.js';
import { P as Product, n as nomerch } from './Product-Bs6ckMyS.js';
import { l as languageTag } from './constants-BbR5-deO.js';
import './node-B2gHlHjM.js';
import './session-BNzW1WO2.js';

const the_merch$2 = /* @__NO_SIDE_EFFECTS__ */ () => `THE MERCH`;
const the_merch$1 = /* @__NO_SIDE_EFFECTS__ */ () => `LE MERCH`;
const the_merch = /* @__NO_SIDE_EFFECTS__ */ (params = {}, options = {}) => {
  return {
    en: the_merch$2,
    fr: the_merch$1
  }[options.languageTag ?? languageTag()]();
};
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  const each_array = ensure_array_like(data.products);
  Navbar($$payload);
  $$payload.out += `<!----> <div class="container svelte-1mza6au"><div class="recent_merch svelte-1mza6au"><h1 class="svelte-1mza6au">${escape_html(/* @__PURE__ */ the_merch())}</h1> <div class="merchs svelte-1mza6au">`;
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
//# sourceMappingURL=_page.svelte-B7LP7C4S.js.map
