import{d as n,_ as o,o as f,c as g,n as E,g as k,u as s}from"./entry.838e6bc8.js";const P={__name:"nuxt-error-page",props:{error:Object},setup(c){const{error:t}=c;(t.stack||"").split(`
`).splice(1).map(e=>({text:e.replace("webpack:/","").replace(".vue",".js").trim(),internal:e.includes("node_modules")&&!e.includes(".cache")||e.includes("internal")||e.includes("new Promise")})).map(e=>`<span class="stack${e.internal?" internal":""}">${e.text}</span>`).join(`
`);const r=Number(t.statusCode||500),a=r===404,u=t.statusMessage??(a?"Page Not Found":"Internal Server Error"),i=t.message||t.toString(),p=void 0,_=n(()=>o(()=>import("./error-404.cec0ea1f.js"),["./error-404.cec0ea1f.js","./entry.838e6bc8.js","./entry.53932362.css","./composables.73fa4e91.js","./error-404.cddbfb62.css"],import.meta.url).then(e=>e.default||e)),d=n(()=>o(()=>import("./error-500.6edf19d5.js"),["./error-500.6edf19d5.js","./composables.73fa4e91.js","./entry.838e6bc8.js","./entry.53932362.css","./error-500.dc5710d1.css"],import.meta.url).then(e=>e.default||e)),l=a?_:d;return(e,m)=>(f(),g(s(l),E(k({statusCode:s(r),statusMessage:s(u),description:s(i),stack:s(p)})),null,16))}},x=P;export{x as default};
