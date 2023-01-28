const l = [
  "/_app/immutable/assets/_page-46b8cf66.css",
  "/_app/immutable/chunks/1-36bbe4a7.js",
  "/_app/immutable/chunks/0-eaa10265.js",
  "/_app/immutable/chunks/2-d284350c.js",
  "/_app/immutable/chunks/singletons-e24ed815.js",
  "/_app/immutable/components/error.svelte-641b5a22.js",
  "/_app/immutable/components/layout.svelte-229c5288.js",
  "/_app/immutable/chunks/index-b2019f8f.js",
  "/_app/immutable/start-697a1527.js",
  "/_app/immutable/components/pages/_page.svelte-e4c58566.js"
], u = [
  "/letkwet.ico",
  "/letkwet.svg"
], o = "1674918066806", n = `cache-${o}`, i = [
  ...l,
  // the app itself
  ...u
  // everything in `static`
];
self.addEventListener("install", (e) => {
  async function t() {
    await (await caches.open(n)).addAll(i);
  }
  e.waitUntil(t());
});
self.addEventListener("activate", (e) => {
  async function t() {
    for (const a of await caches.keys())
      a !== n && await caches.delete(a);
  }
  e.waitUntil(t());
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET")
    return;
  async function t() {
    const a = new URL(e.request.url), s = await caches.open(n);
    if (i.includes(a.pathname))
      return s.match(e.request);
    try {
      const c = await fetch(e.request);
      return c.status === 200 && s.put(e.request, c.clone()), c;
    } catch {
      return s.match(e.request);
    }
  }
  e.respondWith(t());
});
