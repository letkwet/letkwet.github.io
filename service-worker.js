const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), o = [
  e + "/internal/immutable/entry/app.78e0799b.js",
  e + "/internal/immutable/nodes/0.ee9d3fc1.js",
  e + "/internal/immutable/nodes/1.ed0ff4db.js",
  e + "/internal/immutable/assets/2.72972c6e.css",
  e + "/internal/immutable/nodes/2.c2230394.js",
  e + "/internal/immutable/chunks/index.4dfd544e.js",
  e + "/internal/immutable/chunks/paths.59e3d48c.js",
  e + "/internal/immutable/chunks/scheduler.1d0e75b3.js",
  e + "/internal/immutable/chunks/singletons.03d3b0ce.js",
  e + "/internal/immutable/entry/start.e92f3352.js"
], r = [
  e + "/letkwet.ico",
  e + "/letkwet.svg",
  e + "/songs.json"
], u = "1702919298823", i = `cache-${u}`, l = [
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
