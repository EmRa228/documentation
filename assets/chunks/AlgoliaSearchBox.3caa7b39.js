import{j as v}from"./index.d76f8212.js";import{d as w,u as y,b as x,w as h,e as b,f as P,o as j,c as k,g as C}from"../app.ef097145.js";const R={class:"algolia-search-box",id:"docsearch"},F=w({props:{options:null,multilang:{type:Boolean}},setup(g){var d;const n=g,r=C(),i=y(),c=x();h(()=>n.options,t=>{_(t)}),b(()=>{p(n.options)});function m(t){return t.button===1||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey}function l(t){const{pathname:e,hash:a}=new URL(t);return e+a}function _(t){r&&r.vnode.el&&(r.vnode.el.innerHTML='<div class="algolia-search-box" id="docsearch"></div>',p(t))}const{lang:u}=P(),s=n.multilang?["lang:"+u.value]:[];(d=n.options.searchParameters)!=null&&d.facetFilters&&s.push(...n.options.searchParameters.facetFilters),h(u,(t,e)=>{const a=s.findIndex(o=>o==="lang:"+e);a>-1&&s.splice(a,1,"lang:"+t)});function p(t){v(Object.assign({},t,{container:"#docsearch",searchParameters:Object.assign({},t.searchParameters,{facetFilters:s}),navigator:{navigate:({itemUrl:e})=>{const{pathname:a}=new URL(window.location.origin+e);i.path===a?window.location.assign(window.location.origin+e):c.go(e)}},transformItems:e=>e.map(a=>Object.assign({},a,{url:l(a.url)})),hitComponent:({hit:e,children:a})=>{const o=e.url.startsWith("http")?l(e.url):e.url;return{type:"a",ref:void 0,constructor:void 0,key:void 0,props:{href:e.url,onClick:f=>{m(f)||i.path!==o&&(i.path!==o&&f.preventDefault(),c.go(o))},children:a},__v:null}}}))}return(t,e)=>(j(),k("div",R))}});export{F as default};
