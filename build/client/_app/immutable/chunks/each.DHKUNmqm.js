import{c as j,b as ee,E as K,h as w,a as k,d as ae,i as re,e as P,H as ne,r as U,f as M,g as N,j as Q,k as W,p as fe,I as b,q as le,l as X,m as L,n as F,o as O,t as ie,u as ue,v as G,w as se,x as te,y as ve,z as de,A as _e,B as oe,C as ce,D as he}from"./entry.DjYp6XJk.js";let y=null;function Te(i,e){return e}function Ee(i,e,a,t){for(var v=[],d=e.length,u=0;u<d;u++)se(e[u].e,v,!0);var p=d>0&&v.length===0&&a!==null;if(p){var E=a.parentNode;te(E),E.append(a),t.clear(),C(i,e[0].prev,e[d-1].next)}ve(v,()=>{for(var h=0;h<d;h++){var o=e[h];p||(t.delete(o.k),C(i,o.prev,o.next)),de(o.e,!p)}})}function xe(i,e,a,t,v,d=null){var u=i,p={flags:e,items:new Map,first:null},E=(e&K)!==0;if(E){var h=i;u=w?k(_e(h)):h.appendChild(j())}w&&ae();var o=null,n=!1;ee(()=>{var _=a(),l=re(_)?_:_==null?[]:P(_),s=l.length;if(n&&s===0)return;n=s===0;let c=!1;if(w){var I=u.data===ne;I!==(s===0)&&(u=U(),k(u),M(!1),c=!0)}if(w){for(var T=null,A,r=0;r<s;r++){if(N.nodeType===8&&N.data===oe){u=N,c=!0,M(!1);break}var f=l[r],g=t(f,r);A=Z(N,p,T,null,f,g,r,v,e),p.items.set(g,A),T=A}s>0&&k(U())}w||pe(l,p,u,v,e,t),d!==null&&(s===0?o?Q(o):o=W(()=>d(u)):o!==null&&fe(o,()=>{o=null})),c&&M(!0),a()}),w&&(u=N)}function pe(i,e,a,t,v,d){var q,B,V,Y;var u=(v&ce)!==0,p=(v&(L|O))!==0,E=i.length,h=e.items,o=e.first,n=o,_,l=null,s,c=[],I=[],T,A,r,f;if(u)for(f=0;f<E;f+=1)T=i[f],A=d(T,f),r=h.get(A),r!==void 0&&((q=r.a)==null||q.measure(),(s??(s=new Set)).add(r));for(f=0;f<E;f+=1){if(T=i[f],A=d(T,f),r=h.get(A),r===void 0){var g=n?n.e.nodes_start:a;l=Z(g,e,l,l===null?e.first:l.next,T,A,f,t,v),h.set(A,l),c=[],I=[],n=l.next;continue}if(p&&Ae(r,T,f,v),r.e.f&b&&(Q(r.e),u&&((B=r.a)==null||B.unfix(),(s??(s=new Set)).delete(r))),r!==n){if(_!==void 0&&_.has(r)){if(c.length<I.length){var D=I[0],x;l=D.prev;var m=c[0],R=c[c.length-1];for(x=0;x<c.length;x+=1)J(c[x],D,a);for(x=0;x<I.length;x+=1)_.delete(I[x]);C(e,m.prev,R.next),C(e,l,m),C(e,R,D),n=D,l=R,f-=1,c=[],I=[]}else _.delete(r),J(r,n,a),C(e,r.prev,r.next),C(e,r,l===null?e.first:l.next),C(e,l,r),l=r;continue}for(c=[],I=[];n!==null&&n.k!==A;)n.e.f&b||(_??(_=new Set)).add(n),I.push(n),n=n.next;if(n===null)continue;r=n}c.push(r),l=r,n=r.next}if(n!==null||_!==void 0){for(var H=_===void 0?[]:P(_);n!==null;)n.e.f&b||H.push(n),n=n.next;var S=H.length;if(S>0){var $=v&K&&E===0?a:null;if(u){for(f=0;f<S;f+=1)(V=H[f].a)==null||V.measure();for(f=0;f<S;f+=1)(Y=H[f].a)==null||Y.fix()}Ee(e,H,$,h)}}u&&le(()=>{var z;if(s!==void 0)for(r of s)(z=r.a)==null||z.apply()}),X.first=e.first&&e.first.e,X.last=l&&l.e}function Ae(i,e,a,t){t&L&&F(i.v,e),t&O?F(i.i,a):i.i=a}function Z(i,e,a,t,v,d,u,p,E){var h=y;try{var o=(E&L)!==0,n=(E&ie)===0,_=o?n?ue(v):G(v):v,l=E&O?G(u):u,s={i:l,v:_,k:d,a:null,e:null,prev:a,next:t};return y=s,s.e=W(()=>p(i,_,l),w),s.e.prev=a&&a.e,s.e.next=t&&t.e,a===null?e.first=s:(a.next=s,a.e.next=s.e),t!==null&&(t.prev=s,t.e.prev=s.e),s}finally{y=h}}function J(i,e,a){for(var t=i.next?i.next.e.nodes_start:a,v=e?e.e.nodes_start:a,d=i.e.nodes_start;d!==t;){var u=he(d);v.before(d),d=u}}function C(i,e,a){e===null?i.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}export{xe as e,Te as i};
