const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), o = [
  e + "/internal/immutable/entry/app.f11dc075.js",
  e + "/internal/immutable/nodes/0.5d5ef107.js",
  e + "/internal/immutable/nodes/1.ac7825c8.js",
  e + "/internal/immutable/assets/2.20071936.css",
  e + "/internal/immutable/nodes/2.2f560b86.js",
  e + "/internal/immutable/chunks/index.847c3200.js",
  e + "/internal/immutable/chunks/paths.e60ec5d3.js",
  e + "/internal/immutable/chunks/scheduler.7215518b.js",
  e + "/internal/immutable/chunks/singletons.6131c33c.js",
  e + "/internal/immutable/entry/start.3e79dc01.js"
], r = [
  e + "/letkwet.ico",
  e + "/letkwet.svg",
  e + "/songs.json"
], u = "1701278535499", i = `cache-${u}`, l = [
  ...o,
  // the app itself
  ...r
  // everything in `static`
];
self.addEventListener("install", (t) => {
  async function n() {
    await (await caches.open(i)).addAll(l);
  }
  t.waitUntil(n());
});
self.addEventListener("activate", (t) => {
  async function n() {
    for (const s of await caches.keys())
      s !== i && await caches.delete(s);
  }
  t.waitUntil(n());
});
self.addEventListener("fetch", (t) => {
  if (t.request.method !== "GET")
    return;
  async function n() {
    const s = new URL(t.request.url), a = await caches.open(i);
    if (console.log(s.pathname), !s.pathname.includes("songs.json") && l.includes(s.pathname))
      return a.match(t.request);
    try {
      const c = await fetch(t.request);
      return c.status === 200 && a.put(t.request, c.clone()), c;
    } catch {
      return a.match(t.request);
    }
  }
  t.respondWith(n());
});
