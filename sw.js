const CACHE="cake-shop-ceec6a4f97db";
const FILES=["./","./assets/idle-B4Eb121u.webp","./assets/index-BWe3ul0h.css","./assets/index-DsX3RZqn.js","./icon-192.png","./icon-512.png","./icon.svg","./index.html","./manifest.webmanifest"];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('cake-shop-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;e.respondWith(caches.open(CACHE).then(c=>c.match(e.request,{ignoreVary:true})).then(c=>c||fetch(e.request).catch(()=>{if(e.request.mode==='navigate')return caches.open(CACHE).then(c=>c.match(new URL('./',self.registration.scope),{ignoreVary:true}));return Response.error();})));});
