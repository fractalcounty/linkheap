if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const c=e=>r(e,o),l={module:{uri:o},exports:t,require:c};s[o]=Promise.all(i.map((e=>l[e]||c(e)))).then((e=>(n(...e),t)))}}define(["./workbox-1ab968a5"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/webfonts/webfonts.css",revision:"ae820e208a3f2ce08fd1b20e2dba418b"},{url:"index.html",revision:"01f243691259c94cc02303d5d61d228a"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"resources/index-C6o8gmja.css",revision:null},{url:"resources/index-F0fO1pAK.js",revision:null},{url:"assets/manifest.json",revision:"10571823b7142a86ace65e10be8970af"}],{}),e.cleanupOutdatedCaches()}));
