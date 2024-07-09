'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "45c29781341ae0ce40634f8efe405c23",
"version.json": "b1f702c13c506856e1dc839e8a6c1c02",
"index.html": "74a4fccff5565babe4769786057543b3",
"/": "74a4fccff5565babe4769786057543b3",
"main.dart.js": "ae0104bd1d388aa702365ba458379f31",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "a28077fb0620298fe0d78c6627af39e2",
"icons/favicon.ico": "558c1126983e412da17a6d9a024a2625",
"icons/apple-touch-icon.png": "7f48f7e6a604593daa4fe68b3ed5880b",
"icons/icon-192.png": "564a3051710df03c3c2d3233ee426349",
"icons/Icon-maskable-192.png": "20c2a3ee4df167403da6704f2793afc7",
"icons/Icon-maskable-512.png": "a28077fb0620298fe0d78c6627af39e2",
"icons/icon-512.png": "32346893ec142edac55486b5c1a45a9d",
"manifest.json": "b02a710b0de26404f05ef58957ba7312",
"assets/AssetManifest.json": "854d24f72572ef69b66ad129518fcb5a",
"assets/NOTICES": "362c45348c083c24b6d75b01b99ddda4",
"assets/FontManifest.json": "135d2f113bd6753343c1a93f287d84ed",
"assets/AssetManifest.bin.json": "76fae64c2520c212a49aae889ebe23c6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/dash_chat_2/assets/placeholder.png": "ce1fece6c831b69b75c6c25a60b5b0f3",
"assets/packages/dash_chat_2/assets/profile_placeholder.png": "77f5794e2eb49f7989b8f85e92cfa4e0",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b15a55df47de3416143d303b1ef62fd6",
"assets/fonts/MaterialIcons-Regular.otf": "b8a80a1b628fe66a0e7fc5406db38cdf",
"assets/assets/WashDropHead.png": "6712114ac704a958635a1293fd084848",
"assets/assets/SplashScreen.json": "5e611ec33ab089200010fe172dee00b9",
"assets/assets/AilaHeader.png": "e256117300c31d70eff9cf347878bb23",
"assets/assets/3DCar.png": "9af4ce09cf15242699960f7bc60038f5",
"assets/assets/Onboarding1.png": "0959821a4fcf0d89fedfc433dadb1eba",
"assets/assets/LocationAnimation.gif": "43dc43f07061cdd1a2963737864cfa93",
"assets/assets/arrow_right.png": "3fa6296d8a76128ca26712868afb45a8",
"assets/assets/Onboarding3.png": "1183e157c73959303a6d8ccf818782d0",
"assets/assets/AilaBlueLogo.png": "f84913d0c1bce9981fe875255ff81743",
"assets/assets/Onboarding2.png": "7fa811d74f57a073f61904038cf87334",
"assets/assets/cashy.png": "bc93b9e26aaaaea676c29f961f8df61a",
"assets/assets/CarWashDone.json": "c685cd5fa24309f41b1cd8126d95f034",
"assets/assets/Onboarding4.png": "22c8956fbf16eb3d34538d32da216812",
"assets/assets/Tricycle%2520Final%2520Edition.json": "5a59ab3d731d588b5ae9f2ee52b3cca1",
"assets/assets/Ticket.png": "87ed186f4aa7d57b547bce10777a33f2",
"assets/assets/Plate.gif": "3e6a5310120b130e64509243b165833a",
"assets/assets/Visa.png": "8b4ce6565bc02017bd362ab38fa136f0",
"assets/assets/SignalBlue.json": "8d317f107bffeb47f4534c823ee2618d",
"assets/assets/CarWashProgress.json": "bb64b616f121c21b76f489b652eff84f",
"assets/assets/S3.png": "c046e647121f496873dc419de76cde41",
"assets/assets/DropLogoChat.png": "d4ad802054dc593cb893611f13a2b287",
"assets/assets/WashDrop%2520Button%2520Final%2520Edition.json": "d5040563fc9c5b55e4e8d0bb20268ab2",
"assets/assets/WDUnit.png": "ad4452c21051d83738684caf762e6927",
"assets/assets/CarAnimation.json": "8f0483c1c41f639731e6b3ea5553a9c9",
"assets/assets/S2.png": "d913bac06807fc6440ea4a42c4f0b3cc",
"assets/assets/Exploring.png": "8b45e1a8e03a7fbfdf6755adb562afd9",
"assets/assets/DHeaderWeb.png": "2549e6a60e4511f4cff6eff8f5d2cf6b",
"assets/assets/DHeader.png": "42547b60013f1ac129f4ec0756cdf5a2",
"assets/assets/Splash.png": "f116c057f7918e48f67f38cf1caf7277",
"assets/assets/EgyptPlates.png": "e81793609325e31b15f964bc5aae1fec",
"assets/assets/Header.png": "f9a7539b9e0ba936d7695c6c6092fd6f",
"assets/assets/POS.png": "dc3f0c3e816ff9e8a4d37e59b875b60d",
"assets/assets/Phone.png": "92447388c9389a4eb74c1358cf969866",
"assets/assets/SplashAnimation.gif": "064e3da71372ceba06b04fe317190f82",
"assets/assets/SignalWhite.json": "dd0ea4b730f1326f9ea9956be132896d",
"assets/assets/CoverageGIF.gif": "18f6c9925b6ff7494c459be3387c29a8",
"assets/assets/BurgerBackBlue.png": "9a5765b8ecf38fe24292b039bff73793",
"assets/assets/WDHeaderWeb.png": "a46358ee71d941d86df5a03fcdfeeb46",
"assets/assets/AppBarLocked.gif": "4b3c770cd276f64aa8a0d9b3103bb5bc",
"assets/assets/EarlyAccessCar.png": "0bf87ee8cec49ee00a192ae28db1e852",
"assets/assets/WDHeader.png": "cff4e7c27af9db6d2c9a731c2d0960b8",
"assets/assets/fonts/RidleyGroteskRegular.ttf": "32c79a7ff9b61e91d8fd2674657fe2cb",
"assets/assets/fonts/RidleyGroteskMedium.ttf": "1ee712a561445efefe8af0a53e7a3069",
"assets/assets/fonts/RidleyGroteskBold.ttf": "66ae001ab729e9988ede1104fb56a364",
"assets/assets/MeetingRoom1.html": "1fdd3112680acfd2a85da1735b060502",
"assets/assets/BurgerBack.png": "938f95c4c2471c03b55fa16db3992d53",
"assets/assets/Burger.png": "323aaea4fbd6bad75478a0714a865ca2",
"assets/assets/DropBag.gif": "9fc6dde044703d8dedf14701510477b1",
"assets/assets/AppointmentState.gif": "1fd53993886e98d90c12f14fe1cdf11e",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
