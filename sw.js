if(!self.define){let e,i={};const r=(r,d)=>(r=new URL(r+".js",d).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(d,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const c=e=>r(e,n),a={module:{uri:n},exports:o,require:c};i[n]=Promise.all(d.map((e=>a[e]||c(e)))).then((e=>(s(...e),o)))}}define(["./workbox-27547b5f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"estilos.css",revision:"2e57e8e1eadb29dd8eaa44a5fcb0c0d7"},{url:"icono.png",revision:"64da3f458b489aa89a4460b597b85c3a"},{url:"img/animal.jpg",revision:"66ef8865fc71ad2d3f1e4b9e0a86bc31"},{url:"img/hobby.jpg",revision:"b95511c38eaa28b706494b666f4bf950"},{url:"img/pat.jpg",revision:"8aba44377ac75a86b5bc04ad5dea5d4e"},{url:"img/persona.jpg",revision:"64f2303500e1d3fbbf1618d4d2d71d04"},{url:"img/utsem.jpg",revision:"d52cf076bc7f0e21ad32cb32e3a815dd"},{url:"index.html",revision:"dcd5435ee4d51d7dd0a8df7a55ffe1d0"},{url:"manifest.json",revision:"f24c787627c4894130bacc3ca7dce7bb"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map