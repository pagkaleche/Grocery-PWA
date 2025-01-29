const CACHE_NAME = 'to-do-pwa-cache-v1';
const FILES_TO_CACHE = [
    '/WebDevTrends/',
    '/WebDevTrends/index.html',
    '/WebDevTrends/style.css',
    '/WebDevTrends/app.js',
    '/WebDevTrends/manifest.json',
    '/WebDevTrends/icons/icon-128.png',
    '/WebDevTrends/icons/icon-512.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(FILES_TO_CACHE))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});