import{S as x,P as M,Q as Z,v as y,R as $,T as b,U as l,V as N,W as g,l as L,X as j,Y as K,i as V,Z as z,_ as G,$ as H,a0 as Q,a1 as U,a2 as W,a3 as X,a4 as Y,a5 as J,a6 as k,a7 as p,a8 as q,a9 as ee,aa as re,ab as ae,ac as te,u as ne}from"./entry.DjYp6XJk.js";import{c as ie}from"./disclose-version.CJevfRbn.js";function E(i,v=null,o){if(typeof i!="object"||i===null||x in i)return i;const P=K(i);if(P!==M&&P!==Z)return i;var f=new Map,c=V(i),R=y(0);c&&f.set("length",y(i.length));var m;return new Proxy(i,{defineProperty(n,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&$();var a=f.get(e);return a===void 0?(a=y(r.value),f.set(e,a)):b(a,E(r.value,m)),!0},deleteProperty(n,e){var r=f.get(e);if(r===void 0)e in n&&f.set(e,y(l));else{if(c&&typeof e=="string"){var a=f.get("length"),t=Number(e);Number.isInteger(t)&&t<a.v&&b(a,t)}b(r,l),C(R)}return!0},get(n,e,r){var d;if(e===x)return i;var a=f.get(e),t=e in n;if(a===void 0&&(!t||(d=N(n,e))!=null&&d.writable)&&(a=y(E(t?n[e]:l,m)),f.set(e,a)),a!==void 0){var u=g(a);return u===l?void 0:u}return Reflect.get(n,e,r)},getOwnPropertyDescriptor(n,e){var r=Reflect.getOwnPropertyDescriptor(n,e);if(r&&"value"in r){var a=f.get(e);a&&(r.value=g(a))}else if(r===void 0){var t=f.get(e),u=t==null?void 0:t.v;if(t!==void 0&&u!==l)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return r},has(n,e){var u;if(e===x)return!0;var r=f.get(e),a=r!==void 0&&r.v!==l||Reflect.has(n,e);if(r!==void 0||L!==null&&(!a||(u=N(n,e))!=null&&u.writable)){r===void 0&&(r=y(a?E(n[e],m):l),f.set(e,r));var t=g(r);if(t===l)return!1}return a},set(n,e,r,a){var S;var t=f.get(e),u=e in n;if(c&&e==="length")for(var d=r;d<t.v;d+=1){var _=f.get(d+"");_!==void 0?b(_,l):d in n&&(_=y(l),f.set(d+"",_))}t===void 0?(!u||(S=N(n,e))!=null&&S.writable)&&(t=y(void 0),b(t,E(r,m)),f.set(e,t)):(u=t.v!==l,b(t,E(r,m)));var w=Reflect.getOwnPropertyDescriptor(n,e);if(w!=null&&w.set&&w.set.call(a,r),!u){if(c&&typeof e=="string"){var T=f.get("length"),I=Number(e);Number.isInteger(I)&&I>=T.v&&b(T,I+1)}C(R)}return!0},ownKeys(n){g(R);var e=Reflect.ownKeys(n).filter(t=>{var u=f.get(t);return u===void 0||u.v!==l});for(var[r,a]of f)a.v!==l&&!(r in n)&&e.push(r);return e},setPrototypeOf(){j()}})}function C(i,v=1){b(i,i.v+v)}function F(i){for(var v=L,o=L;v!==null&&!(v.f&(W|X));)v=v.parent;try{return Y(v),i()}finally{Y(o)}}function se(i,v,o,P){var B;var f=(o&J)!==0,c=(o&k)!==0,R=(o&p)!==0,m=(o&te)!==0,n=!1,e;R?[e,n]=ie(()=>i[v]):e=i[v];var r=(B=N(i,v))==null?void 0:B.set,a=P,t=!0,u=!1,d=()=>(u=!0,t&&(t=!1,m?a=U(P):a=P),a);e===void 0&&P!==void 0&&(r&&c&&z(),e=d(),r&&r(e));var _;if(c)_=()=>{var s=i[v];return s===void 0?d():(t=!0,u=!1,s)};else{var w=F(()=>(f?q:ee)(()=>i[v]));w.f|=G,_=()=>{var s=g(w);return s!==void 0&&(a=void 0),s===void 0?a:s}}if(!(o&H))return _;if(r){var T=i.$$legacy;return function(s,h){return arguments.length>0?((!c||!h||T||n)&&r(h?_():s),s):_()}}var I=!1,S=!1,A=ne(e),O=F(()=>q(()=>{var s=_(),h=g(A),D=re;return I||s===void 0&&D.f&ae?(I=!1,S=!0,h):(S=!1,A.v=s)}));return f||(O.equals=Q),function(s,h){if(arguments.length>0){const D=h?g(O):c&&R?E(s):s;return O.equals(D)||(I=!0,b(A,D),u&&a!==void 0&&(a=D),U(()=>g(O))),s}return g(O)}}export{E as a,se as p};