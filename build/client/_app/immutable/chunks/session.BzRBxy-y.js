import{h as N,at as y,Y as _,au as E,av as T,aw as u,aq as h,a1 as L,ax as x,ay as g,W as l,az as C,a8 as I,aA as O,aB as G,aC as v}from"./entry.DjYp6XJk.js";function Y(t,s,r,n){var a=t.__attributes??(t.__attributes={});N&&(a[s]=t.getAttribute(s),s==="src"||s==="srcset"||s==="href"&&t.nodeName==="LINK")||a[s]!==(a[s]=r)&&(s==="style"&&"__styles"in t&&(t.__styles={}),s==="loading"&&(t[y]=r),r==null?t.removeAttribute(s):typeof r!="string"&&w(t).includes(s)?t[s]=r:t.setAttribute(s,r))}var p=new Map;function w(t){var s=p.get(t.nodeName);if(s)return s;p.set(t.nodeName,s=[]);for(var r,n=_(t),a=Element.prototype;a!==n;){r=E(n);for(var o in r)r[o].set&&s.push(o);n=_(n)}return s}function k(t=!1){const s=h,r=s.l.u;if(!r)return;let n=()=>C(s.s);if(t){let a=0,o={};const i=I(()=>{let f=!1;const e=s.s;for(const c in e)e[c]!==o[c]&&(o[c]=e[c],f=!0);return f&&a++,a});n=()=>l(i)}r.b.length&&T(()=>{d(s,n),g(r.b)}),u(()=>{const a=L(()=>r.m.map(x));return()=>{for(const o of a)typeof o=="function"&&o()}}),r.a.length&&u(()=>{d(s,n),g(r.a)})}function d(t,s){if(t.l.s)for(const r of t.l.s)l(r);s()}const b="data-no-translate",B="paraglide:lang",D="paraglide_lang",A={},K=()=>G(A),M=t=>{O(A,t)};function P(){const t=K();function s(n,a){return typeof n!="string"||!t?n:t.translateHref(n,a)}function r(n,a){if(n[b])return n;for(const{attribute_name:o,lang_attribute_name:i}of a)if(o in n){const f=n[o],e=i?n[i]:void 0;n[o]=s(f,typeof e=="string"?e:void 0)}return n}return[s,r]}const H=v(null);export{D as L,M as a,B as b,P as g,k as i,Y as s,H as u};