const APP_SHELL_CACHE = 'app-shell';
const POST_DATA_CACHE = 'post-cache';
const ROOT_URL = 'http://localhost:3000';
const API_URL = 'http://localhost:8081/graphql';
const APP_SHELL_FILES = [
    '/',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css',
    '/static/js/main.734146e8.js',
    '/static/js/main.734146e8.js.map',
    '/manifest.json',
    '/assets/pictures/thomaspsl.png'
];

self.addEventListener('install', function (event) {
    console.log("Installing...");

    // Pre-caching 
    event.waitUntil(
        caches.open(APP_SHELL_CACHE).then(function (cache) {
            cache.addAll(APP_SHELL_FILES);
        })  
    );

});

self.addEventListener('activate', function (event) {
    console.log("Activating...");
});

// Cache only strategy
function getFromCache(cacheName, request) {
    return caches.open(cacheName).then(function (cache){
        return cache.match(request).then(function (cacheResponse) {
            if (cacheResponse){
                console.log("Returned from cache " + request.url);
                return cacheResponse;
            } else {
                console.error("Couldn't fetch " + request.url + " from pre-cache");
            }
        })
    });
}

// ...
function getFromCacheOrNetwork(cacheName, request, onError = null) {
    return caches.open(cacheName).then(function (cache){
        return cache.match(request).then(function (cacheResponse) {
            if (cacheResponse){
                console.log("Returned from cache " + request.url);
                return cacheResponse;
            } else {
                console.log("Returned from network " + request.url);
                return fetch(request).then(function (response){
                    cache.put(request.url, response.clone());
                    return response;
                }).catch(function (error){
                    console.log("Error fetching " + request.url, error);
                    if(onError){
                        return onError();
                    }
                });
            }
        })
    });
}

self.addEventListener('fetch', function (event) {
    // Intern cache of shell app
    if(APP_SHELL_FILES.includes(event.request.url.replace(ROOT_URL, ''))) {
        event.respondWith(getFromCache(APP_SHELL_CACHE, event.request));
    } 
    // Intern cache of backdata
    else if(event.request.url.startsWith(API_URL)){
        event.respondWith(getFromCacheOrNetwork(POST_DATA_CACHE, event.request));
    } 
    // Try fetch the data
    else{
        event.respondWith(fetch(event.request));
    }
});