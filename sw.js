// Rise Edge Academy - keeps the app shell so it can be installed and opens fast.
// Network first: new versions of app.js / index.html are always picked up when online.
const C='rise-design-v17',SC='rise-share',A=['./','index.html','app.js','design.css','design.js','config.js','logo.jpg','manifest.webmanifest','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting()).catch(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C&&x!=SC).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request,u=new URL(r.url);
// Android "Share" -> Rise Edge: keep the shared files, then open the app on the send screen
if(r.method=='POST'&&u.origin==location.origin&&u.pathname.endsWith('/share-target')){e.respondWith((async()=>{try{await caches.delete(SC);const fd=await r.formData(),c=await caches.open(SC);let i=0;for(const v of fd.getAll('files'))if(v&&typeof v!='string')await c.put(self.registration.scope+'sf'+(i++),new Response(v,{headers:{'Content-Type':v.type||'application/octet-stream','X-Name':encodeURIComponent(v.name||'file')}}))}catch(x){}return Response.redirect(self.registration.scope+'?share=1',303)})());return}
if(r.method!='GET'||u.origin!=location.origin)return;
e.respondWith(fetch(r,{cache:'no-cache'}).then(x=>{if(x.ok){const y=x.clone();caches.open(C).then(c=>c.put(r,y))}return x}).catch(()=>caches.match(r).then(m=>m||caches.match('index.html'))))});
