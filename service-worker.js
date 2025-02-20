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
        caches.open(CACHE_NAME).then(async (cache) => {
            try {
                await cache.addAll(FILES_TO_CACHE);
                console.log('Service Worker: Files cached successfully.');
            } catch (error) {
                console.error('Service Worker: Failed to cache files', error);
            }
        })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log(`Service Worker: Deleting old cache - ${cache}`);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Dynamic Content Caching: Cache Firestore or other API responses
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Exclude Firestore and Firebase Auth requests from being cached
    if (url.origin.includes('firestore.googleapis.com') || url.origin.includes('identitytoolkit.googleapis.com')) {
        return;  // Don't cache Firebase requests
    }

    // Handle dynamic content caching
    event.respondWith(
        caches.open(CACHE_NAME).then((cache) => {
            // Try network first (fetch)
            return fetch(event.request).then((networkResponse) => {
                // If the request is successful, cache it for future use
                if (networkResponse && networkResponse.status === 200) {
                    cache.put(event.request, networkResponse.clone());
                }
                return networkResponse;
            }).catch(() => {
                // If the network is unavailable, try to serve the cached response
                return cache.match(event.request).then((cachedResponse) => {
                    // If there's no cache, return a fallback response
                    return cachedResponse || new Response('No data available', { status: 503 });
                });
            });
        })
    );
});
