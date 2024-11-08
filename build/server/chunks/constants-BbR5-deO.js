import './exports-DE4n1uap.js';

let _onSetLanguageTag;
const sourceLanguageTag = "fr";
const availableLanguageTags = (
  /** @type {const} */
  ["en", "fr"]
);
let languageTag = () => sourceLanguageTag;
const setLanguageTag = (tag) => {
  if (typeof tag === "function") {
    languageTag = enforceLanguageTag(tag);
  } else {
    languageTag = enforceLanguageTag(() => tag);
  }
  if (_onSetLanguageTag !== void 0) {
    _onSetLanguageTag(languageTag());
  }
};
function enforceLanguageTag(unsafeLanguageTag) {
  return () => {
    const tag = unsafeLanguageTag();
    if (!isAvailableLanguageTag(tag)) {
      throw new Error(`languageTag() didn't return a valid language tag. Check your setLanguageTag call`);
    }
    return tag;
  };
}
const onSetLanguageTag = (fn) => {
  _onSetLanguageTag = fn;
};
function isAvailableLanguageTag(thing) {
  return availableLanguageTags.includes(thing);
}
const runtime = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  availableLanguageTags,
  isAvailableLanguageTag,
  get languageTag() {
    return languageTag;
  },
  onSetLanguageTag,
  setLanguageTag,
  sourceLanguageTag
}, Symbol.toStringTag, { value: "Module" }));
function get(key, parse = JSON.parse) {
  try {
    return parse(sessionStorage[key]);
  } catch {
  }
}
const SNAPSHOT_KEY = "sveltekit:snapshot";
const SCROLL_KEY = "sveltekit:scroll";
get(SCROLL_KEY) ?? {};
get(SNAPSHOT_KEY) ?? {};
const NO_TRANSLATE_ATTRIBUTE = "data-no-translate";
const LANG_COOKIE_NAME = "paraglide_lang";

export { LANG_COOKIE_NAME as L, NO_TRANSLATE_ATTRIBUTE as N, languageTag as l, runtime as r };
//# sourceMappingURL=constants-BbR5-deO.js.map
