'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "4718194b4e4912dd01aeeb545fd8bc2a",
"app.html": "e2ca29929154329880b19ca008f971a8",
"/": "e2ca29929154329880b19ca008f971a8",
"netlify.toml": "7e95ea2ac7e4feb0ce10455cd94464ae",
"main.dart.js": "8650129d0f974be272e9059c4843850a",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "79f39a3a8ecac4adeb1f6cc2ca4ad1a6",
"icons/icon-192.png": "d6e83fcfa629494bb0ce599c090987ab",
"icons/Icon-maskable-192.png": "d6e83fcfa629494bb0ce599c090987ab",
"icons/Icon-maskable-512.png": "4eee3130d5bdf27e55a7ece472adfb0b",
"icons/icon-512.png": "4eee3130d5bdf27e55a7ece472adfb0b",
"manifest.json": "c138c194fca21fd2b49678d7b0890c97",
"assets/AssetManifest.json": "c52355d60ee0b4535ef7e0196fe452dc",
"assets/NOTICES": "8fc2562c5a2db56566a90f134f43de52",
"assets/FontManifest.json": "135d2f113bd6753343c1a93f287d84ed",
"assets/AssetManifest.bin.json": "3360c3c1d480440cfb6c00ee123c87c4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/dash_chat_2/assets/placeholder.png": "ce1fece6c831b69b75c6c25a60b5b0f3",
"assets/packages/dash_chat_2/assets/profile_placeholder.png": "77f5794e2eb49f7989b8f85e92cfa4e0",
"assets/packages/record_web/assets/js/record.worklet.js": "356bcfeddb8a625e3e2ba43ddf1cc13e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6a25b402e72b193a280ad664e3cffc7d",
"assets/fonts/MaterialIcons-Regular.otf": "d3af80c6e067c1dec6a2a09dae4939f5",
"assets/assets/AilaHeader.png": "05f7a8cb29071c781eadd4e1c4a9d252",
"assets/assets/filesAnimation.json": "d99c88be48c78122807fcacf6e9004eb",
"assets/assets/AllTools.png": "f693dc59621a869b944413435279f2c6",
"assets/assets/Stop.png": "ab4a356bd7b0382566514ba184315152",
"assets/assets/funtriangle.json": "2d154c6b780735980e1cb00394130c0b",
"assets/assets/InternetAnimation.json": "89714f5460e69a25614bd077fb45c63b",
"assets/assets/WashDrop.png": "e4289cc65dd2efd1c4e4c1bd52dc00f6",
"assets/assets/ArrowRight.png": "a97b29be8b9eb55cb677e8b34edf3757",
"assets/assets/Cinema.png": "65734f7bb91647393eefae38598b5af2",
"assets/assets/Website.png": "dd4b39ad684b9abd0a5046881e37e5a4",
"assets/assets/Anything.json": "b0cbe6aaf072e882fb62dd9051ecc207",
"assets/assets/Speak.png": "701572adf070c45411bd5d7b5ac84d96",
"assets/assets/Clear.png": "98e14529ac9469fb0df4d84f574353c3",
"assets/assets/Account.png": "4e35465abe89b3a23779d204793bbc7e",
"assets/assets/UploadFiles.png": "77b774d61f7a0c1d823413a33eca420f",
"assets/assets/AilaIcon.png": "db4561d7ebb29187c0678518686ce4b7",
"assets/assets/AppBar.png": "dfcab7c52ec8829a6f3d3eb8e6c5f916",
"assets/assets/DropLogo.png": "da18688c203629ac0e26c343a8c471b8",
"assets/assets/Weather.png": "4dc8014edb976cc56a8c463f62522509",
"assets/assets/Header.png": "42547b60013f1ac129f4ec0756cdf5a2",
"assets/assets/OnboardingAnimation.json": "762d2f8d7cd3e522ed8c0dd58a3bdd24",
"assets/assets/UploadAnimation.json": "1a48284b82afa9d47023eadf092ceefc",
"assets/assets/AppBarStatic.png": "a0e21fcd3b305485efb015b0c50ab2cf",
"assets/assets/Youtube.png": "8235478c13259a04af301ec83c5e5121",
"assets/assets/fonts/RidleyGroteskRegular.ttf": "32c79a7ff9b61e91d8fd2674657fe2cb",
"assets/assets/fonts/RidleyGroteskMedium.ttf": "1ee712a561445efefe8af0a53e7a3069",
"assets/assets/fonts/RidleyGroteskBold.ttf": "66ae001ab729e9988ede1104fb56a364",
"assets/assets/BurgerBack.png": "938f95c4c2471c03b55fa16db3992d53",
"assets/assets/Text.png": "e75c11fbc1c7523460cc3c58c40b3351",
"assets/assets/AppBar.gif": "6f1eca6ea72f439e8588842dd2b77d91",
"assets/assets/ProcessingFile.json": "3a858a35493ab430e376fc5f66bf7c55",
"AilaLogo.png": "68cadceefeb52f6a8694ed22685ce5ab",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"app.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
