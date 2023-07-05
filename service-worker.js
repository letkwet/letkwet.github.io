const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), r = [
  e + "/internal/immutable/entry/app.203eee05.js",
  e + "/internal/immutable/nodes/0.75da259c.js",
  e + "/internal/immutable/nodes/1.cea9196b.js",
  e + "/internal/immutable/assets/2.3edaff30.css",
  e + "/internal/immutable/nodes/2.4b5a7408.js",
  e + "/internal/immutable/chunks/index.d95b2dc9.js",
  e + "/internal/immutable/chunks/paths.799a6e74.js",
  e + "/internal/immutable/chunks/scheduler.6ae58f8a.js",
  e + "/internal/immutable/chunks/singletons.f25c0e2f.js",
  e + "/internal/immutable/entry/start.149478dd.js"
], o = [
  e + "/letkwet.ico",
  e + "/letkwet.svg",
  e + "/songs.json"
], u = "1688536943472", i = `cache-${u}`, l = [
  ...r,
  // the app itself
  ...o
  // everything in `static`
];
self.addEventListener("install", (t) => {
  async function a() {
    await (await caches.open(i)).addAll(l);
  }
  t.waitUntil(a());
});
self.addEventListener("activate", (t) => {
  async function a() {
    for (const s of await caches.keys())
      s !== i && await caches.delete(s);
  }
  t.waitUntil(a());
});
self.addEventListener("fetch", (t) => {
  if (t.request.method !== "GET")
    return;
  async function a() {
    const s = new URL(t.request.url), n = await caches.open(i);
    if (l.includes(s.pathname))
      return n.match(t.request);
    try {
      const c = await fetch(t.request);
      return c.status === 200 && n.put(t.request, c.clone()), c;
    } catch {
      return n.match(t.request);
    }
  }
  t.respondWith(a());
});
