import{l as h,a as b,t as _}from"./disclose-version.CJevfRbn.js";import{F as x,N as i,K as d,O as r,M as P,J as N}from"./entry.DjYp6XJk.js";import{s as v}from"./render.B9D5Ke_p.js";import{i as T,s as e}from"./session.BzRBxy-y.js";import{p as $}from"./props.CTV0YdEt.js";const j=()=>"We are not selling anything at the moment...",q=()=>"Nous ne vendons rien pour le moment...",K=(c={},s={})=>({en:j,fr:q})[s.languageTag??h()]();var w=_('<div class="product svelte-1fdcupd"><div class="inline svelte-1fdcupd"><img width="200" class="svelte-1fdcupd"> <div class="svelte-1fdcupd"><p> </p></div></div> <p><b>Prix</b> </p> <button class="snipcart-add-item svelte-1fdcupd" data-item-url="/">Ajouter au panier</button></div>');function L(c,s){x(s,!1);let t=$(s,"product",24,()=>({id:"unique-product-id",name:"Nom du produit",price:"Prix",image:"URL de l'image",description:"Description du produit"}));T();var o=w(),p=i(o),n=i(p),u=d(n,2),l=i(u),g=i(l,!0);r(l),r(u),r(p);var m=d(p,2),f=d(i(m));r(m);var a=d(m,2);r(o),P(()=>{e(n,"src",t().image),e(n,"alt",t().name),v(g,t().description),v(f,` : $${t().price??""}`),e(a,"data-item-id",t().id),e(a,"data-item-price",t().price),e(a,"data-item-name",t().name),e(a,"data-item-description",t().description),e(a,"data-item-image",t().image)}),b(c,o),N()}export{L as P,K as n};