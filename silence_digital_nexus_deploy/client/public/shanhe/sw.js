'use strict';
const CACHE = 'shanhe-v1';
const ROOT = self.registration.scope;
const ASSETS = ['manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'apple-touch-icon.png'];
const urlOf = path => new URL(path, ROOT).href;
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(['./', ...ASSETS].map(path => new Request(urlOf(path), { cache: 'reload' })));
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name => name.indexOf('shanhe-') === 0 && name !== CACHE).map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const request = event.request, url = new URL(request.url), scope = new URL(ROOT);
  if (request.method !== 'GET' || url.origin !== scope.origin || url.pathname.indexOf('/shanhe/') !== 0 || url.pathname.indexOf(scope.pathname) !== 0) return;
  const page = request.mode === 'navigate' || url.pathname === scope.pathname + 'index.html' || url.pathname === scope.pathname;
  const asset = ASSETS.some(path => url.pathname === new URL(urlOf(path)).pathname);
  if (!page && !asset) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    if (asset) {
      const saved = await cache.match(request, { ignoreSearch: true });
      if (saved) return saved;
    }
    try {
      // 导航绕过 HTTP 缓存；?v= 与 #embed 的离线回退统一用目录首页。
      const response = await fetch(request, page ? { cache: 'no-store' } : undefined);
      if (response.ok) {
        try { await cache.put(page ? ROOT : urlOf(url.pathname.slice(scope.pathname.length)), response.clone()); } catch (err) { /* 存储满了仍显示网络页。 */ }
        return response;
      }
      const saved = page && await cache.match(ROOT, { ignoreSearch: true });
      return saved || response;
    } catch (err) {
      const saved = await cache.match(page ? ROOT : request, { ignoreSearch: true });
      if (saved) return saved;
      throw err;
    }
  })());
});
