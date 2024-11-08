import { P as fallback, Q as head, T as bind_props, n as pop, p as push, X as escape_html, V as attr, U as ensure_array_like, Z as stringify, R as slot } from './exports-DE4n1uap.js';

function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function Open_graph($$payload, $$props) {
  push();
  let openGraph = fallback($$props["openGraph"], void 0);
  if (openGraph) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(Object.entries(openGraph));
    $$payload.out += `<!--[-->`;
    for (let $$index_13 = 0, $$length = each_array.length; $$index_13 < $$length; $$index_13++) {
      let [key, value] = each_array[$$index_13];
      const _type = typeof value;
      if (_type !== "object") {
        $$payload.out += "<!--[-->";
        const transform = key.replace(/([a-z])([A-Z])/g, "$1:$2").toLowerCase();
        $$payload.out += `<meta${attr("property", `og:${stringify(transform)}`)}${attr("content", value)}>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--> `;
      if (_type === "object") {
        $$payload.out += "<!--[-->";
        if (key === "images") {
          $$payload.out += "<!--[-->";
          const each_array_1 = ensure_array_like(openGraph.images ?? []);
          $$payload.out += `<!--[-->`;
          for (let $$index_1 = 0, $$length2 = each_array_1.length; $$index_1 < $$length2; $$index_1++) {
            let image = each_array_1[$$index_1];
            const each_array_2 = ensure_array_like(Object.entries(image));
            $$payload.out += `<!--[-->`;
            for (let $$index = 0, $$length3 = each_array_2.length; $$index < $$length3; $$index++) {
              let [key2, value2] = each_array_2[$$index];
              $$payload.out += `<meta${attr("property", `og:image:${stringify(key2)}`)}${attr("content", value2.toString())}>`;
            }
            $$payload.out += `<!--]-->`;
          }
          $$payload.out += `<!--]-->`;
        } else {
          $$payload.out += "<!--[!-->";
          if (key === "videos") {
            $$payload.out += "<!--[-->";
            const each_array_3 = ensure_array_like(openGraph.videos ?? []);
            $$payload.out += `<!--[-->`;
            for (let $$index_3 = 0, $$length2 = each_array_3.length; $$index_3 < $$length2; $$index_3++) {
              let video = each_array_3[$$index_3];
              const each_array_4 = ensure_array_like(Object.entries(video));
              $$payload.out += `<!--[-->`;
              for (let $$index_2 = 0, $$length3 = each_array_4.length; $$index_2 < $$length3; $$index_2++) {
                let [key2, value2] = each_array_4[$$index_2];
                if (key2 === "url") {
                  $$payload.out += "<!--[-->";
                  $$payload.out += `<meta property="og:video"${attr("content", value2.toString())}>`;
                } else {
                  $$payload.out += "<!--[!-->";
                  $$payload.out += `<meta${attr("property", `og:video:${stringify(key2)}`)}${attr("content", value2.toString())}>`;
                }
                $$payload.out += `<!--]-->`;
              }
              $$payload.out += `<!--]-->`;
            }
            $$payload.out += `<!--]-->`;
          } else {
            $$payload.out += "<!--[!-->";
            if (key === "localeAlternate") {
              $$payload.out += "<!--[-->";
              const each_array_5 = ensure_array_like(openGraph.localeAlternate ?? []);
              $$payload.out += `<!--[-->`;
              for (let $$index_4 = 0, $$length2 = each_array_5.length; $$index_4 < $$length2; $$index_4++) {
                let alternate = each_array_5[$$index_4];
                $$payload.out += `<meta property="og:locale:alternate"${attr("content", alternate)}>`;
              }
              $$payload.out += `<!--]-->`;
            } else {
              $$payload.out += "<!--[!-->";
              if (key === "music") {
                $$payload.out += "<!--[-->";
                const each_array_6 = ensure_array_like(Object.entries(openGraph.music ?? {}));
                $$payload.out += `<!--[-->`;
                for (let $$index_5 = 0, $$length2 = each_array_6.length; $$index_5 < $$length2; $$index_5++) {
                  let [key2, value2] = each_array_6[$$index_5];
                  const transform = key2.replace(/([a-z])([A-Z])/g, "$1:$2").toLowerCase();
                  $$payload.out += `<meta${attr("property", `music:${stringify(transform)}`)}${attr("content", value2.toString())}>`;
                }
                $$payload.out += `<!--]-->`;
              } else {
                $$payload.out += "<!--[!-->";
                if (key === "movie") {
                  $$payload.out += "<!--[-->";
                  const each_array_7 = ensure_array_like(Object.entries(openGraph.movie ?? {}));
                  $$payload.out += `<!--[-->`;
                  for (let $$index_7 = 0, $$length2 = each_array_7.length; $$index_7 < $$length2; $$index_7++) {
                    let [key2, value2] = each_array_7[$$index_7];
                    if (typeof value2 === "object") {
                      $$payload.out += "<!--[-->";
                      const each_array_8 = ensure_array_like(value2);
                      $$payload.out += `<!--[-->`;
                      for (let $$index_6 = 0, $$length3 = each_array_8.length; $$index_6 < $$length3; $$index_6++) {
                        let propValue = each_array_8[$$index_6];
                        $$payload.out += `<meta${attr("property", `video:${stringify(key2)}`)}${attr("content", propValue)}>`;
                      }
                      $$payload.out += `<!--]-->`;
                    } else {
                      $$payload.out += "<!--[!-->";
                      const transform = key2.replace(/([a-z])([A-Z])/g, "$1:$2").toLowerCase();
                      $$payload.out += `<meta${attr("property", `video:${stringify(transform)}`)}${attr("content", value2.toString())}>`;
                    }
                    $$payload.out += `<!--]-->`;
                  }
                  $$payload.out += `<!--]-->`;
                } else {
                  $$payload.out += "<!--[!-->";
                  if (key === "article") {
                    $$payload.out += "<!--[-->";
                    const each_array_9 = ensure_array_like(Object.entries(openGraph.article ?? {}));
                    $$payload.out += `<!--[-->`;
                    for (let $$index_9 = 0, $$length2 = each_array_9.length; $$index_9 < $$length2; $$index_9++) {
                      let [key2, value2] = each_array_9[$$index_9];
                      if (typeof value2 === "object") {
                        $$payload.out += "<!--[-->";
                        const each_array_10 = ensure_array_like(value2);
                        $$payload.out += `<!--[-->`;
                        for (let $$index_8 = 0, $$length3 = each_array_10.length; $$index_8 < $$length3; $$index_8++) {
                          let propValue = each_array_10[$$index_8];
                          $$payload.out += `<meta${attr("property", `article:${stringify(key2)}`)}${attr("content", propValue)}>`;
                        }
                        $$payload.out += `<!--]-->`;
                      } else {
                        $$payload.out += "<!--[!-->";
                        const transform = key2.replace(/([a-z])([A-Z])/g, "$1:$2").toLowerCase();
                        $$payload.out += `<meta${attr("property", `article:${stringify(transform)}`)}${attr("content", value2.toString())}>`;
                      }
                      $$payload.out += `<!--]-->`;
                    }
                    $$payload.out += `<!--]-->`;
                  } else {
                    $$payload.out += "<!--[!-->";
                    if (key === "book") {
                      $$payload.out += "<!--[-->";
                      const each_array_11 = ensure_array_like(Object.entries(openGraph.book ?? {}));
                      $$payload.out += `<!--[-->`;
                      for (let $$index_11 = 0, $$length2 = each_array_11.length; $$index_11 < $$length2; $$index_11++) {
                        let [key2, value2] = each_array_11[$$index_11];
                        if (typeof value2 === "object") {
                          $$payload.out += "<!--[-->";
                          const each_array_12 = ensure_array_like(value2);
                          $$payload.out += `<!--[-->`;
                          for (let $$index_10 = 0, $$length3 = each_array_12.length; $$index_10 < $$length3; $$index_10++) {
                            let propValue = each_array_12[$$index_10];
                            $$payload.out += `<meta${attr("property", `book:${stringify(key2)}`)}${attr("content", propValue)}>`;
                          }
                          $$payload.out += `<!--]-->`;
                        } else {
                          $$payload.out += "<!--[!-->";
                          const transform = key2.replace(/([a-z])([A-Z])/g, "$1:$2").toLowerCase();
                          $$payload.out += `<meta${attr("property", `book:${stringify(transform)}`)}${attr("content", value2.toString())}>`;
                        }
                        $$payload.out += `<!--]-->`;
                      }
                      $$payload.out += `<!--]-->`;
                    } else {
                      $$payload.out += "<!--[!-->";
                      if (key === "profile") {
                        $$payload.out += "<!--[-->";
                        const each_array_13 = ensure_array_like(Object.entries(openGraph.profile ?? {}));
                        $$payload.out += `<!--[-->`;
                        for (let $$index_12 = 0, $$length2 = each_array_13.length; $$index_12 < $$length2; $$index_12++) {
                          let [key2, value2] = each_array_13[$$index_12];
                          const transform = key2.replace(/([a-z])([A-Z])/g, "$1:$2").toLowerCase();
                          $$payload.out += `<meta${attr("property", `profile:${stringify(transform)}`)}${attr("content", value2)}>`;
                        }
                        $$payload.out += `<!--]-->`;
                      } else {
                        $$payload.out += "<!--[!-->";
                      }
                      $$payload.out += `<!--]-->`;
                    }
                    $$payload.out += `<!--]-->`;
                  }
                  $$payload.out += `<!--]-->`;
                }
                $$payload.out += `<!--]-->`;
              }
              $$payload.out += `<!--]-->`;
            }
            $$payload.out += `<!--]-->`;
          }
          $$payload.out += `<!--]-->`;
        }
        $$payload.out += `<!--]-->`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { openGraph });
  pop();
}
function Svelte_seo($$payload, $$props) {
  push();
  let title = fallback($$props["title"], void 0);
  let description = fallback($$props["description"], void 0);
  let keywords = fallback($$props["keywords"], void 0);
  let base = fallback($$props["base"], void 0);
  let applicationName = fallback($$props["applicationName"], void 0);
  let themeColor = fallback($$props["themeColor"], void 0);
  let nofollow = fallback($$props["nofollow"], false);
  let noindex = fallback($$props["noindex"], false);
  let nositelinkssearchbox = fallback($$props["nositelinkssearchbox"], false);
  let notranslate = fallback($$props["notranslate"], false);
  let canonical = fallback($$props["canonical"], void 0);
  let amp = fallback($$props["amp"], void 0);
  let manifest = fallback($$props["manifest"], void 0);
  let languageAlternates = fallback($$props["languageAlternates"], void 0);
  let twitter = fallback($$props["twitter"], void 0);
  let openGraph = fallback($$props["openGraph"], void 0);
  let facebook = fallback($$props["facebook"], void 0);
  let jsonLd = fallback($$props["jsonLd"], void 0);
  head($$payload, ($$payload2) => {
    if (title) {
      $$payload2.out += "<!--[-->";
      $$payload2.title = `<title>${escape_html(title)}</title>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (description) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta name="description"${attr("content", description)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (canonical) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<link rel="canonical"${attr("href", canonical)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (keywords) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta name="keywords"${attr("content", keywords)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (amp) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<link rel="amphtml"${attr("href", amp)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (manifest) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<link rel="manifest"${attr("href", manifest)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (applicationName) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta name="application-name"${attr("content", applicationName)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (languageAlternates) {
      $$payload2.out += "<!--[-->";
      const each_array = ensure_array_like(languageAlternates);
      $$payload2.out += `<!--[-->`;
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let { href, hreflang } = each_array[$$index];
        $$payload2.out += `<link rel="alternate"${attr("href", href)}${attr("hreflang", hreflang)}>`;
      }
      $$payload2.out += `<!--]-->`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (themeColor) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta name="theme-color"${attr("content", themeColor)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (base) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<base${attr("href", base)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (facebook?.appId) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta property="fb:app_id"${attr("content", facebook.appId)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> <meta name="robots"${attr("content", `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}`)}> <meta name="googlebot"${attr("content", `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}`)}> `;
    if (nositelinkssearchbox) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta name="google" content="nositelinkssearchbox">`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (notranslate) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta name="google" content="notranslate">`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (twitter) {
      $$payload2.out += "<!--[-->";
      const each_array_1 = ensure_array_like(Object.entries(twitter));
      $$payload2.out += `<!--[-->`;
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let [key, value] = each_array_1[$$index_1];
        const transformed = key.replace(/([a-z])([A-Z])/g, "$1:$2").toLowerCase();
        $$payload2.out += `<meta${attr("name", `twitter:${stringify(transformed)}`)}${attr("content", value)}>`;
      }
      $$payload2.out += `<!--]-->`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (openGraph) {
      $$payload2.out += "<!--[-->";
      Open_graph($$payload2, { openGraph });
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (jsonLd) {
      $$payload2.out += "<!--[-->";
      const data = Object.assign({ "@context": "https://schema.org" }, jsonLd);
      $$payload2.out += `${html(`<script type="application/ld+json">${JSON.stringify(data) + "<"}/script>`)}`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> <!---->`;
    slot($$payload2, $$props, "default", {});
    $$payload2.out += `<!---->`;
  });
  bind_props($$props, {
    title,
    description,
    keywords,
    base,
    applicationName,
    themeColor,
    nofollow,
    noindex,
    nositelinkssearchbox,
    notranslate,
    canonical,
    amp,
    manifest,
    languageAlternates,
    twitter,
    openGraph,
    facebook,
    jsonLd
  });
  pop();
}

export { Svelte_seo as S };
//# sourceMappingURL=index3-BnqSF9ie.js.map
