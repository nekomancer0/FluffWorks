import{c as v,b as N,aD as M,h as f,al as P,D as E,f as T,a as h,g as o,A as b,l as R,aE as x,aF as j,d as C,j as y,k as L,p as A,aG as k,H as G,r as U,ah as W,u as Y,aH as S,aI as q,W as z,T as B}from"./entry.DjYp6XJk.js";let s;function Z(){s=void 0}function $(e){let n=null,a=f;var t;if(f){for(n=o,s===void 0&&(s=b(document.head));s!==null&&(s.nodeType!==8||s.data!==P);)s=E(s);s===null?T(!1):s=h(E(s))}f||(t=document.head.appendChild(v()));try{N(()=>e(t),M)}finally{a&&(T(!0),s=o,h(n))}}function V(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function c(e,n){var a=R;a.nodes_start===null&&(a.nodes_start=e,a.nodes_end=n)}function ee(e,n){var a=(n&x)!==0,t=(n&j)!==0,u,i=!e.startsWith("<!>");return()=>{if(f)return c(o,null),o;u===void 0&&(u=V(i?e:"<!>"+e),a||(u=b(u)));var r=t?document.importNode(u,!0):u.cloneNode(!0);if(a){var l=b(r),d=r.lastChild;c(l,d)}else c(r,r);return r}}function ne(e=""){if(!f){var n=v(e+"");return c(n,n),n}var a=o;return a.nodeType!==3&&(a.before(a=v()),h(a)),c(a,a),a}function ae(){if(f)return c(o,null),o;var e=document.createDocumentFragment(),n=document.createComment(""),a=v();return e.append(n,a),c(n,a),e}function te(e,n){if(f){R.nodes_end=o,C();return}e!==null&&e.before(n)}function re(e,n,a,t=null,u=!1){f&&C();var i=e,r=null,l=null,d=null,H=u?k:0;N(()=>{if(d===(d=!!n()))return;let p=!1;if(f){const I=i.data===G;d===I&&(i=U(),h(i),T(!1),p=!0)}d?(r?y(r):r=L(()=>a(i)),l&&A(l,()=>{l=null})):(l?y(l):t&&(l=L(()=>t(i))),r&&A(r,()=>{r=null})),p&&T(!0)},H),f&&(i=o)}let _=!1;function se(e,n,a){const t=a[n]??(a[n]={store:null,source:Y(void 0),unsubscribe:S});if(t.store!==e)if(t.unsubscribe(),t.store=e??null,e==null)t.source.v=void 0,t.unsubscribe=S;else{var u=!0;t.unsubscribe=q(e,i=>{u?t.source.v=i:B(t.source,i)}),u=!1}return z(t.source)}function ue(){const e={};return W(()=>{for(var n in e)e[n].unsubscribe()}),e}function ie(e){var n=_;try{return _=!1,[e(),_]}finally{_=n}}let m;const D="fr",F=["en","fr"];let g=()=>D;const J=e=>{typeof e=="function"?g=w(e):g=w(()=>e),m!==void 0&&m(g())};function w(e){return()=>{const n=e();if(!O(n))throw new Error("languageTag() didn't return a valid language tag. Check your setLanguageTag call");return n}}const K=e=>{m=e};function O(e){return F.includes(e)}const fe=Object.freeze(Object.defineProperty({__proto__:null,availableLanguageTags:F,isAvailableLanguageTag:O,get languageTag(){return g},onSetLanguageTag:K,setLanguageTag:J,sourceLanguageTag:D},Symbol.toStringTag,{value:"Module"})),Q="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Q);export{te as a,se as b,ie as c,c as d,V as e,ae as f,ne as g,$ as h,re as i,fe as j,g as l,Z as r,ue as s,ee as t};