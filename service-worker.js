self.addEventListener('install', (event) => {
  console.log('Service Worker instalado')
})

self.addEventListener('fetch', (event) => {
  // intercepta requisições
})

const CACHE_NAME = "algebrando-cache-v1";

const arquivos = [
  "/",
  "/index.html",
  "/Styles/global.css",
  "/scripts/main.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(arquivos);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
