import{l as x,s as $,a as k,t as F,b as N}from"../chunks/disclose-version.CJevfRbn.js";import{F as T,G as E,M as r,J as A,K as o,N as n,O as i}from"../chunks/entry.DjYp6XJk.js";import{s as m}from"../chunks/render.B9D5Ke_p.js";import{g as G,i as J,s as K}from"../chunks/session.BzRBxy-y.js";import{p as M}from"../chunks/stores.JE59PA96.js";import{N as O}from"../chunks/Navbar.CUJ93B9b.js";const R=t=>`Error ${t.status}`,j=t=>`Erreur ${t.status}`,q=(t,a={})=>({en:R,fr:j})[a.languageTag??x()](t);var w=F(`<!> <main class="svelte-13ievh3"><h1 class="mb-4
		text-4xl
		font-bold
		leading-none
		tracking-tight
		md:text-5xl
		lg:text-6xl"> </h1> <p> </p> <a class="svelte-13ievh3">Retour à l'accueil</a></main>`,1);function L(t,a){T(a,!1);const c=$(),l=()=>N(M,"$page",c),v=G(),[f,y]=v;J();var p=w(),u=E(p);O(u,{});var _=o(u,2),e=n(_),d=n(e,!0);r(()=>m(d,q({status:l().status}))),i(e);var s=o(e,2),b=n(s,!0);i(s);var h=o(s,2);r(()=>K(h,"href",f("/",void 0))),i(_),r(()=>{var g;return m(b,(g=l().error)==null?void 0:g.message)}),k(t,p),A()}export{L as component};
