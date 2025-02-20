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

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    const url = new URL(event.request.url);

    if (url.origin.includes('firestore.googleapis.com') || url.origin.includes('identitytoolkit.googleapis.com')) {
        return;
    }

    event.respondWith(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.match(event.request).then((cachedResponse) => {
                const fetchPromise = fetch(event.request).then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        cache.put(event.request, networkResponse.clone());
                    }
                    return networkResponse;
                }).catch(() => cachedResponse); 
                return cachedResponse || fetchPromise;
            });
        })
    );
});
// self.addEventListener('install', (event) => {
//     event.waitUntil(
//         caches.open(CACHE_NAME)
//             .then((cache) => cache.addAll(FILES_TO_CACHE))
//     );
// });

// self.addEventListener('fetch', (event) => {
//     event.respondWith(
//         caches.match(event.request)
//             .then((response) => response || fetch(event.request))
//     );
// });