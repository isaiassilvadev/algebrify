const CACHE_NAME = "algebrando-v1";

const urlsToCache = [
  "/",
  "/index.html",

  "/Pages/afim.html",
  "/Pages/quadrada.html",
  "/Pages/porcentagem.html",
  "/Pages/area.html",

  "/Styles/global.css",
  "/Styles/afim.css",
  "/Styles/quadrada.css",
  "/Styles/porcentagem.css",
  "/Styles/area.css",

  "/scripts/main.js",
  "/scripts/afim.js",
  "/scripts/quadrada.js",
  "/scripts/porcentagem.js",
  "/scripts/area.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
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
