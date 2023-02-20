'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2b77cf781008f7e6f4b7d9dbc267c2c8",
"index.html": "409c001ce3ee5f121fa7a3df3a5c3ca8",
"/": "409c001ce3ee5f121fa7a3df3a5c3ca8",
"main.dart.js": "631b3aaf5acc94292ab6866863f5efdc",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "47de55f4347e0a5dd1dca3e8b0a5f2f9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/dantopia-icon-192.png": "47de55f4347e0a5dd1dca3e8b0a5f2f9",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c2a931c104c583f857b41bc710e5ef4b",
"assets/AssetManifest.json": "df1c178ae6eb596833e657b57ff038a3",
"assets/NOTICES": "646e729edd96769bfb00a5991081ec75",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/Astronaut.png": "4402e90795a11cbe59c9e454f447f833",
"assets/assets/images/DanTong-portrait-bg-removed.png": "4a81a7346cb457f278208c3c30e49e38",
"assets/assets/images/body-galaxy-bg.jpg": "62c5afbe12820e0f245fa35812083cb5",
"assets/assets/images/achievements/Patent%2520in%2520Korea.jpeg": "9740495c2a4e8b31279176af541d3b84",
"assets/assets/images/achievements/Gremsy-logo.png": "747d52097feb7f9bc355cd8410b1a71f",
"assets/assets/images/achievements/Kodimo-Block%2520Assemble-IP.JPG": "450e71c4e827280cc3fc2b2785d99f50",
"assets/assets/images/achievements/t3-two-axis.png": "5da9a32506b2d09bf7c37a312f8b9479",
"assets/assets/images/achievements/patent-01.jpg": "5ce44eb25415090397403f85372dfb91",
"assets/assets/images/achievements/kodimo-logo-slogan-eng.png": "013fef334211e85ba21c772278552ba5",
"assets/assets/images/achievements/Monte-playset-en.png": "37f6db3ba7fd2d3fea477a99975dbf50",
"assets/assets/images/achievements/Monte-playset-en.jpg": "c5e6f5a9c6a919256e64567f48dae085",
"assets/assets/images/galaxy-bg.jpg": "e68489bbbb42f3c65f675d0e13c55a5a",
"assets/assets/images/Astronaut.svg": "b3c36070e40b535fc3657fe23410d83a",
"assets/assets/images/home_section_bg_space.jpg": "11a43b6c92858f82bcff3c24a784b158",
"assets/assets/images/innovative-idea-bg.jpg": "c87029a6f31886f704efae139dcba086",
"assets/assets/images/business-landing-page.jpg": "80d77ef6334ef83a15312b4fa3465b66",
"assets/assets/images/white%2520space.svg": "124e63504e53df8522160fc19ec15b08",
"assets/assets/images/services/app-dev-service.svg": "a7114dcb71f44b67c5f8aa66c693c02d",
"assets/assets/images/services/business-dev-service.png": "d907b827005e695a756da1704570e799",
"assets/assets/images/services/business-dev-service.jpg": "a7f88a6872807fd772e610b465aa4a24",
"assets/assets/images/services/innovation-service.png": "f86e5a0c76f2dcb98a596c980210c847",
"assets/assets/images/services/innovation-service.jpg": "fcfbc1807b929f365f499a67d2dc2007",
"assets/assets/images/services/innovation-service.svg": "a34249205f5a657edd277961b0961c34",
"assets/assets/images/services/business-dev-service.svg": "e7bd84e62d428c5a3ed5f83cb6911750",
"assets/assets/images/services/app-dev-service.jpg": "744976c807d93a6e5b5c72cc37ffa544",
"assets/assets/images/services/app-dev-service.png": "dd8a7db9007b8b261f662006f823d5e6",
"assets/assets/brand/dantopia-favicon.png": "86abcb0906d5972ef3941be453d4efb5",
"assets/assets/brand/dantopia-logo-rounded@2x.png": "e7f49488b7385b90a7e174adba312e09",
"assets/assets/brand/dantopia-logo-rounded.svg": "6cc0f5f1e348da8b7c8e64443d8b5651",
"assets/assets/brand/dantopia-logo.png": "e7f49488b7385b90a7e174adba312e09",
"assets/assets/brand/dantopia-logo-mobile.png": "86abcb0906d5972ef3941be453d4efb5",
"assets/assets/brand/dantopia-logo-mobile.jpg": "74a9d9ff0cbeb70c9e6a8af1aace081e",
"assets/assets/brand/dantopia-logo-mobile.svg": "0d9f3721e2d92b63b037956fce5091f1",
"assets/assets/brand/dantopia-logo@1x.jpg": "fdfa297cc0dd568517dafb1ec637172b",
"assets/assets/brand/twitter.svg": "ace42bd81958cc28195cf5b4f359588b",
"assets/assets/brand/dantopia-favicon-192.png": "47de55f4347e0a5dd1dca3e8b0a5f2f9",
"assets/assets/brand/favicon.svg": "0d9f3721e2d92b63b037956fce5091f1",
"assets/assets/brand/dantopia-logo.svg": "96647bf1e6def456a5162d1e984ddde2",
"assets/assets/gif/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
