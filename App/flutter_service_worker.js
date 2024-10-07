'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "32ba12bf59ea331e9129dafec151b181",
"version.json": "4a48ed09b2b0353453dd07c7efc415d3",
"index.html": "74a4fccff5565babe4769786057543b3",
"/": "74a4fccff5565babe4769786057543b3",
"main.dart.js": "50360147e45c7e96ac88d5e4aafc0154",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "a28077fb0620298fe0d78c6627af39e2",
"icons/favicon.ico": "558c1126983e412da17a6d9a024a2625",
"icons/apple-touch-icon.png": "7f48f7e6a604593daa4fe68b3ed5880b",
"icons/icon-192.png": "564a3051710df03c3c2d3233ee426349",
"icons/Icon-maskable-192.png": "20c2a3ee4df167403da6704f2793afc7",
"icons/Icon-maskable-512.png": "a28077fb0620298fe0d78c6627af39e2",
"icons/icon-512.png": "32346893ec142edac55486b5c1a45a9d",
"manifest.json": "b02a710b0de26404f05ef58957ba7312",
"assets/shorebird.yaml": "5a9d74009084930628efceddf8c7307d",
"assets/AssetManifest.json": "ea750e65d76be3c168258bb2841ae33f",
"assets/NOTICES": "f8c196e5a415669158afb2b98219192c",
"assets/FontManifest.json": "135d2f113bd6753343c1a93f287d84ed",
"assets/AssetManifest.bin.json": "143d8be3b8aba2770e761091bc349927",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "0be23c9cd0f0e97bc76cc6c5d6d956f0",
"assets/packages/speedometer_chart/assets/pointer.svg": "c2f3bd10483ee3f93f828f1bc90185d3",
"assets/packages/speedometer_chart/assets/arc_tick_2.svg": "aaf86d5813cdaeaf7154b07f2dd75837",
"assets/packages/speedometer_chart/assets/arc.svg": "f6372b785f71d8b428b802fa9ded9174",
"assets/packages/speedometer_chart/assets/arc_tick_1.svg": "9f0c1da01cbe2b6119cc3f6b97eed2b6",
"assets/packages/dash_chat_2/assets/placeholder.png": "ce1fece6c831b69b75c6c25a60b5b0f3",
"assets/packages/dash_chat_2/assets/profile_placeholder.png": "77f5794e2eb49f7989b8f85e92cfa4e0",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d3ae06fe5f3192d3b15ae8c0ad40cd1c",
"assets/fonts/MaterialIcons-Regular.otf": "09248a050efd5dcb346a26cc6a4b09f1",
"assets/assets/WashDropHead.png": "6712114ac704a958635a1293fd084848",
"assets/assets/Speedometer.png": "035b5ed8563bae90ca9b371ce9eab63b",
"assets/assets/DropGame.json": "e918e537bfb0e312384581da3ef70bb3",
"assets/assets/3DCar.png": "67f5f8ec27774677b213840f69a7d37d",
"assets/assets/WDAppointment.json": "1dc8a105c30329d7f7e48cf6defc4386",
"assets/assets/Onboarding1.png": "48608a129bdb769f3e009c8ba3796cc1",
"assets/assets/arrow_right.png": "3fa6296d8a76128ca26712868afb45a8",
"assets/assets/Onboarding3.png": "24bd5338f508d0b9be7bb191eda4b985",
"assets/assets/EgyptFlag.png": "0fedfea839ac07061a7df8ef1e4a7579",
"assets/assets/AilaBlueLogo.png": "e4871d21283213de5600f224041e3bbb",
"assets/assets/Onboarding2.png": "c12c6760abdad1aa8377b72c5d579137",
"assets/assets/cashy.png": "7f3cce80370099f8443dc4312594979c",
"assets/assets/School.png": "53233181e0eeb4c809bcafc3b8750c2a",
"assets/assets/CarWashDone.json": "c685cd5fa24309f41b1cd8126d95f034",
"assets/assets/Onboarding4.png": "5fe3b8d35f48b769e19e8fcc75f25ae6",
"assets/assets/OTAnimation.json": "474c1022352b4f012d556628f61b7fd5",
"assets/assets/Ticket.png": "882075547b20908491ed4dce736f7cf9",
"assets/assets/Visa.png": "3798b09b5b7d3721d663d5d8fd04681f",
"assets/assets/SignalBlue.json": "8d317f107bffeb47f4534c823ee2618d",
"assets/assets/Home.png": "b0a6ef8763ba27dca0b78dee36f92aa0",
"assets/assets/Exterior.png": "067bc4ca5f144c467d77458584897c23",
"assets/assets/GarageClosed.png": "fc8633223c4094c965a68be17c044865",
"assets/assets/CarWashProgress.json": "bb64b616f121c21b76f489b652eff84f",
"assets/assets/ImagePlaceholder.png": "370fa560f6e01d2b5111d1821d538ced",
"assets/assets/S3.png": "352d0ceda3038d2fdaedfb7df351fe35",
"assets/assets/WashDrop%2520Button%2520Final%2520Edition.json": "d5040563fc9c5b55e4e8d0bb20268ab2",
"assets/assets/CarAnimation.json": "8f0483c1c41f639731e6b3ea5553a9c9",
"assets/assets/S2.png": "ba1e91d5588bdfd16a19b7b91a7a68ad",
"assets/assets/DHeaderWeb.png": "c4cc82e79f1e93b2dcd307cbcabb331f",
"assets/assets/Drop_Logo_White.png": "f5d1065a6a3f58270d61097ff9884409",
"assets/assets/DHeader.png": "3882970193139abb9d9ef957a712550e",
"assets/assets/Splash.png": "f116c057f7918e48f67f38cf1caf7277",
"assets/assets/EgyptPlates.png": "6d669902d55e3cfe967b6df3e9b35368",
"assets/assets/Header.png": "9ef063772670f15e29a9854ff7e86819",
"assets/assets/Office.png": "92a532b1625ed10396ab5de43c384427",
"assets/assets/POS.png": "e226a52bfac65c5da1d9a4b807651b16",
"assets/assets/ReservationConfirmation.json": "b437c488dc1b697c60b827b21347044a",
"assets/assets/Phone.png": "92447388c9389a4eb74c1358cf969866",
"assets/assets/SpeedDetectionSound.mp3": "581e767c085fee092e6627cfd490ed71",
"assets/assets/SplashAnimation.gif": "8e781dd1cceae30f4fafbac2aa135c8f",
"assets/assets/BurgerBackBlue.png": "9a5765b8ecf38fe24292b039bff73793",
"assets/assets/DropPump.png": "583e859de8ba0849ea57eff24ebd6807",
"assets/assets/WDHeaderWeb.png": "e0ccc08ce162456e571440ab26575f74",
"assets/assets/WDHeader.png": "60152fcb03411457556956bbf7135638",
"assets/assets/fonts/RidleyGroteskRegular.ttf": "32c79a7ff9b61e91d8fd2674657fe2cb",
"assets/assets/fonts/RidleyGroteskMedium.ttf": "1ee712a561445efefe8af0a53e7a3069",
"assets/assets/fonts/RidleyGroteskBold.ttf": "66ae001ab729e9988ede1104fb56a364",
"assets/assets/BurgerBack.png": "938f95c4c2471c03b55fa16db3992d53",
"assets/assets/Burger.png": "323aaea4fbd6bad75478a0714a865ca2",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
