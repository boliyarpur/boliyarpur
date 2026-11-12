/* Network-first cache: always prefer current GitHub Pages files. */
const CACHE="boliyapur-community-v4";
const CORE=["./","./index.html","./pages.css","./community.css","./future.css","./future.js","./professional.css","./feature-pack.css","./feature-pack.js","./community-portal.js","./manifest.webmanifest","./logo.svg"];
self.addEventListener("install",event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener("activate",event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",event=>{
 const req=event.request;if(req.method!=="GET")return;
 const url=new URL(req.url);if(url.origin!==self.location.origin)return;
 event.respondWith(fetch(req).then(response=>{
   if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(req,copy));}
   return response;
 }).catch(()=>caches.match(req).then(cached=>cached||caches.match("./index.html"))));
});
