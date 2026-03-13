const CACHE_NAME = "algebrando-v1";

const arquivos = [

  "/",
  "/index.html",

  "/Pages/afim.html",
  "/Pages/porcentagem.html",
  "/Pages/quadrada.html",
  "/Pages/area.html",

  "/Styles/global.css",
  "/Styles/afim.css",
  "/Styles/porcentagem.css",
  "/Styles/quadrada.css",
  "/Styles/area.css",

  "/scripts/main.js",
  "/scripts/afim.js",
  "/scripts/porcentagem.js",
  "/scripts/quadrada.js",
  "/scripts/area.js"

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
