import{y as l,V as m,M as q,s as k,W as x}from"./scheduler.6ae58f8a.js";const c=[];function z(e,o){return{subscribe:A(e,o).subscribe}}function A(e,o=l){let r;const n=new Set;function u(t){if(k(e,t)&&(e=t,r)){const i=!c.length;for(const s of n)s[1](),c.push(s,e);if(i){for(let s=0;s<c.length;s+=2)c[s][0](c[s+1]);c.length=0}}}function b(t){u(t(e))}function f(t,i=l){const s=[t,i];return n.add(s),n.size===1&&(r=o(u,b)||l),t(e),()=>{n.delete(s),n.size===0&&r&&(r(),r=null)}}return{set:u,update:b,subscribe:f}}function E(e,o,r){const n=!Array.isArray(e),u=n?[e]:e;if(!u.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=o.length<2;return z(r,(f,t)=>{let i=!1;const s=[];let d=0,p=l;const g=()=>{if(d)return;p();const a=o(n?s[0]:s,f,t);b?f(a):p=x(a)?a:l},w=u.map((a,_)=>m(a,v=>{s[_]=v,d&=~(1<<_),i&&g()},()=>{d|=1<<_}));return i=!0,g(),function(){q(w),p(),i=!1}})}var h;const T=((h=globalThis.__sveltekit_1vwiu5t)==null?void 0:h.base)??"";var y;const M=((y=globalThis.__sveltekit_1vwiu5t)==null?void 0:y.assets)??T;export{M as a,T as b,E as d,z as r,A as w};
