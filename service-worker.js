const c = [
  "/letkwet.github.io/internal/immutable/assets/_page-46b8cf66.css",
  "/letkwet.github.io/internal/immutable/chunks/singletons-bfa7c017.js",
  "/letkwet.github.io/internal/immutable/chunks/0-eaa10265.js",
  "/letkwet.github.io/internal/immutable/chunks/1-11380396.js",
  "/letkwet.github.io/internal/immutable/components/layout.svelte-229c5288.js",
  "/letkwet.github.io/internal/immutable/chunks/shared-23917130.js",
  "/letkwet.github.io/internal/immutable/components/error.svelte-35715d80.js",
  "/letkwet.github.io/internal/immutable/chunks/2-1e8f59d7.js",
  "/letkwet.github.io/internal/immutable/chunks/index-b2019f8f.js",
  "/letkwet.github.io/internal/immutable/start-68ef40e2.js",
  "/letkwet.github.io/internal/immutable/components/pages/_page.svelte-4b5e4694.js"
], u = [
  "/letkwet.github.io/letkwet.ico",
  "/letkwet.github.io/letkwet.svg"
], o = "1674919638107", n = `cache-${o}`, l = [
  ...c,
  // the app itself
  ...u
  // everything in `static`
];
self.addEventListener("install", (t) => {
  async function e() {
    await (await caches.open(n)).addAll(l);
  }
  t.waitUntil(e());
});
self.addEventListener("activate", (t) => {
  async function e() {
    for (const i of await caches.keys())
      i !== n && await caches.delete(i);
  }
  t.waitUntil(e());
});
self.addEventListener("fetch", (t) => {
  if (t.request.method !== "GET")
    return;
  async function e() {
    const i = new URL(t.request.url), s = await caches.open(n);
    if (l.includes(i.pathname))
      return s.match(t.request);
    try {
      const a = await fetch(t.request);
      return a.status === 200 && s.put(t.request, a.clone()), a;
    } catch {
      return s.match(t.request);
    }
  }
  t.respondWith(e());
});
