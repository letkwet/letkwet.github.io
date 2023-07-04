const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), r = [
  e + "/internal/immutable/entry/app.6e427f90.js",
  e + "/internal/immutable/assets/0.76b0c738.css",
  e + "/internal/immutable/nodes/0.660d6910.js",
  e + "/internal/immutable/nodes/1.0a7e994f.js",
  e + "/internal/immutable/nodes/2.4170e81c.js",
  e + "/internal/immutable/assets/ChordModal.c6928825.css",
  e + "/internal/immutable/chunks/ChordModal.svelte_svelte_type_style_lang.69c02d9f.js",
  e + "/internal/immutable/chunks/index.1e60aee8.js",
  e + "/internal/immutable/chunks/paths.17fd9db3.js",
  e + "/internal/immutable/chunks/scheduler.e86c4733.js",
  e + "/internal/immutable/chunks/singletons.94d84c50.js",
  e + "/internal/immutable/entry/start.819940cc.js"
], o = [
  e + "/letkwet.ico",
  e + "/letkwet.svg",
  e + "/songs.json"
], u = "1688488913894", i = `cache-${u}`, l = [
  ...r,
  // the app itself
  ...o
  // everything in `static`
];
self.addEventListener("install", (t) => {
  async function s() {
    await (await caches.open(i)).addAll(l);
  }
  t.waitUntil(s());
});
self.addEventListener("activate", (t) => {
  async function s() {
    for (const n of await caches.keys())
      n !== i && await caches.delete(n);
  }
  t.waitUntil(s());
});
self.addEventListener("fetch", (t) => {
  if (t.request.method !== "GET")
    return;
  async function s() {
    const n = new URL(t.request.url), a = await caches.open(i);
    if (l.includes(n.pathname))
      return a.match(t.request);
    try {
      const c = await fetch(t.request);
      return c.status === 200 && a.put(t.request, c.clone()), c;
    } catch {
      return a.match(t.request);
    }
  }
  t.respondWith(s());
});
