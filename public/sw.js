if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let n={};const d=e=>a(e,t),r={module:{uri:t},exports:n,require:d};s[t]=Promise.all(c.map((e=>r[e]||d(e)))).then((e=>(i(...e),n)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/235-b29a2be085c12920.js",revision:"b29a2be085c12920"},{url:"/_next/static/chunks/61-7af0b2c24e38ade0.js",revision:"7af0b2c24e38ade0"},{url:"/_next/static/chunks/675-acf662a00c334d1a.js",revision:"acf662a00c334d1a"},{url:"/_next/static/chunks/880-5caafbf8f49f31ae.js",revision:"5caafbf8f49f31ae"},{url:"/_next/static/chunks/939-267df1d0b0a465b0.js",revision:"267df1d0b0a465b0"},{url:"/_next/static/chunks/cb355538-84042ff4d81b029a.js",revision:"84042ff4d81b029a"},{url:"/_next/static/chunks/ea88be26.a93629ffacf7f8cb.js",revision:"a93629ffacf7f8cb"},{url:"/_next/static/chunks/framework-cd0d740fc564686f.js",revision:"cd0d740fc564686f"},{url:"/_next/static/chunks/main-0c5eeb2d86eab4c8.js",revision:"0c5eeb2d86eab4c8"},{url:"/_next/static/chunks/pages/_app-3bef0ac8ea5272a9.js",revision:"3bef0ac8ea5272a9"},{url:"/_next/static/chunks/pages/_error-f16efdb67263f024.js",revision:"f16efdb67263f024"},{url:"/_next/static/chunks/pages/about-d2e6a1ddc5ca2a28.js",revision:"d2e6a1ddc5ca2a28"},{url:"/_next/static/chunks/pages/collection/festas-viert-fd9c84dd78ce002f.js",revision:"fd9c84dd78ce002f"},{url:"/_next/static/chunks/pages/collection/festas-viert/product/%5BentryId%5D-ad6800fa1b78af75.js",revision:"ad6800fa1b78af75"},{url:"/_next/static/chunks/pages/collection/noivas-viert-653591aa73cd0a67.js",revision:"653591aa73cd0a67"},{url:"/_next/static/chunks/pages/collection/noivas-viert/product/%5BentryId%5D-4789508437ea0e02.js",revision:"4789508437ea0e02"},{url:"/_next/static/chunks/pages/index-86f07e726a3320b1.js",revision:"86f07e726a3320b1"},{url:"/_next/static/chunks/pages/loading-ee663c5dbd4ea009.js",revision:"ee663c5dbd4ea009"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-8470bd66507e67e8.js",revision:"8470bd66507e67e8"},{url:"/_next/static/css/3b427c3bab73eeeb.css",revision:"3b427c3bab73eeeb"},{url:"/_next/static/css/60d0183d50100c6f.css",revision:"60d0183d50100c6f"},{url:"/_next/static/css/79ed2782d27e7cb5.css",revision:"79ed2782d27e7cb5"},{url:"/_next/static/css/89f3b47554e20c83.css",revision:"89f3b47554e20c83"},{url:"/_next/static/css/921f90db4534c9cf.css",revision:"921f90db4534c9cf"},{url:"/_next/static/css/c022fce0beb76c21.css",revision:"c022fce0beb76c21"},{url:"/_next/static/dsXf_SIMamfnsW8NIIdOL/_buildManifest.js",revision:"1de026fd33248a8c6b5f2b38b2894099"},{url:"/_next/static/dsXf_SIMamfnsW8NIIdOL/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/30f1b3b1ca830e2b-s.woff2",revision:"b32ce5d3f76bd62e7fe2b44c583f8703"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/5af6d26e4fcbab17-s.p.otf",revision:"b280cb24027a4f742889d7278d8475c5"},{url:"/_next/static/media/634216363f5c73c1-s.woff2",revision:"4a1bf14c88bdef173c2a39c5c60e65ce"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/88325a2c1fede2f4-s.woff2",revision:"93131c3ec4fe9782c2c40a708db9b0b6"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/aec774cbe1963439-s.woff2",revision:"37f8885214448afc8f3b3678db525598"},{url:"/_next/static/media/afff02beaef1b318-s.p.woff2",revision:"9327b949c90585739745cda84e362b37"},{url:"/_next/static/media/d83fe381bb17eb77-s.woff2",revision:"215b11e73137fdb7d9a773e0211c29d6"},{url:"/_next/static/media/dc9f1afbf2bff7af-s.p.woff2",revision:"4e2bf41a8261e4c621c352692e9a71b4"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/_next/static/media/e1c529c04de64b40-s.p.woff2",revision:"e88b1871ed8eef59b7df05a91a6f2157"},{url:"/android-chrome-192x192.png",revision:"a070238fc707ccad239c37ff664713be"},{url:"/android-chrome-512x512.png",revision:"f020a51ba5fb5cb0db68afd6137dc2ee"},{url:"/apple-touch-icon.png",revision:"3bd167ae286328dd3f859266a6dedb9b"},{url:"/assets/about/Viert_sob-medida_page-0001.webp",revision:"ddc67d0dccd55b2d3c812cf5033e245d"},{url:"/assets/about/Viert_sob-medida_page-0002.webp",revision:"26c2b0d4ab500476920d29c6964ee3ce"},{url:"/assets/about/Viert_sob-medida_page-0003.webp",revision:"fa4b8848a6ea2566f83723b261250bb3"},{url:"/assets/about/Viert_sob-medida_page-0004.webp",revision:"007f32aeb2eba62579c905e669bdb0a4"},{url:"/assets/about/Viert_sob-medida_page-0005.webp",revision:"e7e34d2bddb5f55341dce21151a7528b"},{url:"/assets/about/Viert_sob-medida_page-0006.webp",revision:"8557401cf215e19164bc2c5e0ea8cdcd"},{url:"/assets/about/Viert_sob-medida_page-0007.webp",revision:"e217e0fa3ccbc3f2cc98aaacd6a114d8"},{url:"/assets/about/Viert_sob-medida_page-0008.webp",revision:"398d7331fb883fe829c20edb6305a4c2"},{url:"/assets/about/Viert_sob-medida_page-0009.webp",revision:"dd07a30ead9c28b3f84f330262f03243"},{url:"/assets/backgrounds/black/00.webp",revision:"255ea1da37aeb8de0d5b2beab04c1b1d"},{url:"/assets/backgrounds/black/01.webp",revision:"c3879b688ced17dfc1eeaa2183509b03"},{url:"/assets/backgrounds/gray/00.webp",revision:"a27cdc8ab9939a68671933f6cafcf288"},{url:"/assets/backgrounds/gray/01.webp",revision:"9fb34246d502f1f366665abcf530d9eb"},{url:"/assets/backgrounds/mixed/00.webp",revision:"5798bb86ed89825d99d720cde5f87604"},{url:"/assets/backgrounds/mixed/01.webp",revision:"21c22183e2881a56c00439e8eca8cdec"},{url:"/assets/backgrounds/teste.avif",revision:"53e07ef41f7927da61bfc224f7a6ae9f"},{url:"/assets/backgrounds/yellow/00.webp",revision:"d35afa58f1ca7b47b710a36f4a112789"},{url:"/assets/backgrounds/yellow/01.webp",revision:"dbfa2786fbc2c672973c618343807a3e"},{url:"/assets/brand/logo-dark.svg",revision:"605b9d1a100a419f72b783bf6f29144a"},{url:"/assets/brand/logo.svg",revision:"7d67267d92b587955ffcccb603f7cd03"},{url:"/assets/images/atelier_viert_1.webp",revision:"956ec55775f87c00097cfc40485d131d"},{url:"/assets/images/atelier_viert_2.webp",revision:"f7c50fad7fcc2144d1c3c683c021b464"},{url:"/assets/images/brown-dress.webp",revision:"4fb4d4d9ab9ff22d81615338d943e349"},{url:"/assets/images/festas-viert.webp",revision:"aeb3c1ca15e73dd6f1e70dc150fa2223"},{url:"/assets/images/first-footer-image.webp",revision:"e3ae05fe611b3f3828818709d29cdccf"},{url:"/assets/images/gray-image.webp",revision:"f3ebfc863ba69fdb5f24cc812fb109df"},{url:"/assets/images/green-dress.webp",revision:"17292e09d4a8aee3fad7918d9781d377"},{url:"/assets/images/last-footer-photo.webp",revision:"a4f3df663a460fa396bca17d73916181"},{url:"/assets/images/last-photo-before-footer.webp",revision:"b6456037df9dd0e752877d3b41e2e608"},{url:"/assets/images/noivas-viert.webp",revision:"90622ad503f74bbe609ca01b9d1742f8"},{url:"/assets/images/noivas_viert.webp",revision:"5efd13f324acba40a7741340abcdffef"},{url:"/assets/images/second-image-footer.webp",revision:"7669e3cc60e0fb92b82adb64b8eea6fc"},{url:"/assets/images/shadow-image.webp",revision:"6cc88f5b01ddb91fb82f344d9445f252"},{url:"/assets/images/third-footer-image.webp",revision:"d2f9871261d62a01f0bc3d5b17307ccd"},{url:"/assets/images/women-white-dress.webp",revision:"bc3079cd78886431328c1ddcce21fedd"},{url:"/assets/lottie/mouse.json",revision:"98331f9bbb0ca2754e27617c200b21c5"},{url:"/browserconfig.xml",revision:"68c9044fa4a08749efb85bb2a4edaede"},{url:"/favicon-16x16.png",revision:"7d20ba147fa81e70602b9d6b341c034f"},{url:"/favicon-32x32.png",revision:"7d20ba147fa81e70602b9d6b341c034f"},{url:"/favicon.ico",revision:"a0c4cb18acf8944936ad565e4b8c1e79"},{url:"/gtm.script.js",revision:"8c3912fc1b522ec4f01c0d5e960c787c"},{url:"/handtalk.script.js",revision:"820120ebe19762584cf395c0f43eaab6"},{url:"/hotjar.script.js",revision:"aca2fdb71c40c6f41dc336c133e4f64d"},{url:"/mstile-150x150.png",revision:"225f11362a8da3e8c31f915b08caa72b"},{url:"/og.webp",revision:"3c1db4277a0e71894799235c33a55005"},{url:"/robots.txt",revision:"6fdf09f8c8c4278a639720087fb77751"},{url:"/site.webmanifest",revision:"9467f835caf9ee1a0b4c98656aff8b37"},{url:"/sitemap-0.xml",revision:"e00c894fd9ae3892d93991cde34ede2a"},{url:"/sitemap.xml",revision:"c535e5ad9fdf8e3b75224a8d8c12911a"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
