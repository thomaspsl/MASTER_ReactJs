const APP_SHELL_CACHE = 'app-shell';
const POKE_DATA_CACHE = 'poke-cache';
const POKE_DATA_SPRITE = 'poke-sprite';
const ROOT_URL = 'http://localhost:3000';
const ICON_SPRITE = '/assets/pictures/pokedex.png';
const PLACEHOLDER_SPRITE = '/assets/pictures/pokeball.png';
const APP_SHELL_FILES = [
    '/',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css',
    '/static/css/main.e6c13ad2.css',
    '/static/css/main.e6c13ad2.css.map',
    '/static/js/main.1accf93b.js',
    '/static/js/main.1accf93b.js.map',
    '/manifest.json',
    ICON_SPRITE,
    PLACEHOLDER_SPRITE
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
function getPlaceHolder() {
    return caches.open(APP_SHELL_CACHE).then(function (cache) {
        return cache.match(PLACEHOLDER_SPRITE);
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
    // Intern cache of pokeapi
    else if(event.request.url.startsWith('https://pokeapi.co/api/')){
        event.respondWith(getFromCacheOrNetwork(POKE_DATA_CACHE, event.request));
    } 
    // Intern cache of pokesprite
    else if(event.request.url.startsWith('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/')){
        event.respondWith(getFromCacheOrNetwork(POKE_DATA_SPRITE, event.request, getPlaceHolder));
    } 
    // Try fetch the data
    else{
        event.respondWith(fetch(event.request));
    }
});