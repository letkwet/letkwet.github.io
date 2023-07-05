const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), o = [
  e + "/internal/immutable/entry/app.ecc02e42.js",
  e + "/internal/immutable/nodes/0.75da259c.js",
  e + "/internal/immutable/nodes/1.97bc8a8d.js",
  e + "/internal/immutable/assets/2.3edaff30.css",
  e + "/internal/immutable/nodes/2.15a8c26d.js",
  e + "/internal/immutable/chunks/index.d95b2dc9.js",
  e + "/internal/immutable/chunks/paths.a98c476e.js",
  e + "/internal/immutable/chunks/scheduler.6ae58f8a.js",
  e + "/internal/immutable/chunks/singletons.22e443b9.js",
  e + "/internal/immutable/entry/start.9ffb4fe9.js"
], r = [
  e + "/letkwet.ico",
  e + "/letkwet.svg",
  e + "/songs.json"
], u = "1688567835277", i = `cache-${u}`, l = [
  ...o,
  // the app itself
  ...r
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
    if (console.log(s.pathname), !s.pathname.includes("songs.json") && l.includes(s.pathname))
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
