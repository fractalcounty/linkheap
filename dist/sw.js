if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const c=e=>r(e,o),u={module:{uri:o},exports:t,require:c};s[o]=Promise.all(i.map((e=>u[e]||c(e)))).then((e=>(n(...e),t)))}}define(["./workbox-1ab968a5"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/webfonts/webfonts.css",revision:"ae820e208a3f2ce08fd1b20e2dba418b"},{url:"index.html",revision:"3caa35e1b004dbbd7d964f542eda001c"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"resources/index-BLJQwSVI.css",revision:null},{url:"resources/index-C5shYZuU.js",revision:null},{url:"assets/manifest.json",revision:"f5b0ac379ed9ce719ed11055da786cb2"}],{}),e.cleanupOutdatedCaches()}));
