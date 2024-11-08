import { l as languageTag } from './constants-BbR5-deO.js';
import { P as fallback, V as attr, X as escape_html, T as bind_props, n as pop, p as push } from './exports-DE4n1uap.js';

const nomerch$2 = /* @__NO_SIDE_EFFECTS__ */ () => `We are not selling anything at the moment...`;
const nomerch$1 = /* @__NO_SIDE_EFFECTS__ */ () => `Nous ne vendons rien pour le moment...`;
const nomerch = /* @__NO_SIDE_EFFECTS__ */ (params = {}, options = {}) => {
  return {
    en: nomerch$2,
    fr: nomerch$1
  }[options.languageTag ?? languageTag()]();
};
function Product($$payload, $$props) {
  push();
  let product = fallback(
    $$props["product"],
    () => ({
      id: "unique-product-id",
      name: "Nom du produit",
      price: "Prix",
      image: "URL de l'image",
      description: "Description du produit"
    }),
    true
  );
  $$payload.out += `<div class="product svelte-1fdcupd"><div class="inline svelte-1fdcupd"><img${attr("src", product.image)}${attr("alt", product.name)} width="200" class="svelte-1fdcupd"> <div class="svelte-1fdcupd"><p>${escape_html(product.description)}</p></div></div> <p><b>Prix</b> : $${escape_html(product.price)}</p> <button class="snipcart-add-item svelte-1fdcupd"${attr("data-item-id", product.id)}${attr("data-item-price", product.price)} data-item-url="/"${attr("data-item-name", product.name)}${attr("data-item-description", product.description)}${attr("data-item-image", product.image)}>Ajouter au panier</button></div>`;
  bind_props($$props, { product });
  pop();
}

export { Product as P, nomerch as n };
//# sourceMappingURL=Product-Bs6ckMyS.js.map
