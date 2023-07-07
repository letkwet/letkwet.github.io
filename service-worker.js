const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), o = [
  e + "/internal/immutable/entry/app.7b185f15.js",
  e + "/internal/immutable/nodes/0.75da259c.js",
  e + "/internal/immutable/nodes/1.d45417f9.js",
  e + "/internal/immutable/assets/2.3edaff30.css",
  e + "/internal/immutable/nodes/2.1e4efc08.js",
  e + "/internal/immutable/chunks/index.d95b2dc9.js",
  e + "/internal/immutable/chunks/paths.239a89f7.js",
  e + "/internal/immutable/chunks/scheduler.6ae58f8a.js",
  e + "/internal/immutable/chunks/singletons.7ef23821.js",
  e + "/internal/immutable/entry/start.da9eb01e.js"
], r = [
  e + "/letkwet.ico",
  e + "/letkwet.svg",
  e + "/songs.json"
], u = "1688722704026", i = `cache-${u}`, l = [
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
