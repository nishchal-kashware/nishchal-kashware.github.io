'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f63910dd23e28020ccf041f4d8f2c15c",
"index.html": "69a82e7688b58a243adc69df4e61971f",
"/": "69a82e7688b58a243adc69df4e61971f",
"main.dart.js": "64d5875cfc0e461c066274abccd2ef95",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cb440f3a7454ede58f8e47f134f3d451",
"assets/AssetManifest.json": "39847f173af422a21c17144354d1b212",
"assets/NOTICES": "08cf723a082b2c6dccfb120c05b9eda1",
"assets/FontManifest.json": "7e02b0747ec1adf5ab741417e90c9ad4",
"assets/AssetManifest.bin.json": "86b6201360ac29c0fbbea4ff55a1b3d9",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "4647829c7e37bb7846dc2f8a6faf3a1b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "b5c7c36f5ca1b41f1ab2118fcd4a7875",
"assets/fonts/Gilroy_Medium.ttf": "c83281ae1ca703d0741a770ee7e7c091",
"assets/fonts/Gilroy_Thin.ttf": "437d0d08a241c1d07517909f70c8ef11",
"assets/fonts/Gilroy_Bold.ttf": "b381c2abd2972024a6a7e3d882208d9b",
"assets/fonts/Gilroy_Black.ttf": "b8a3b3a91be25a0030d694a34e152217",
"assets/fonts/Gilroy_SemiBold.ttf": "a5cf732b15078843b237bd58f3ed44cd",
"assets/fonts/Gilroy_Regular.ttf": "31ff7c1a62a300dbbf9656b4ba14a0d5",
"assets/fonts/Gilroy_ExtraBold.ttf": "b487bfc69e2a1cb0578fe2a910da8b2b",
"assets/fonts/Gilroy_Light.ttf": "4b236c6cb4c59d66b80dde6f9c614ebd",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/fonts/Gilroy_Heavy.ttf": "4ca59e027759f400aecadf4c1fde8599",
"assets/fonts/Gilroy_UltraLight.ttf": "f5bd9c00f2cc7353bfc80031dd5d9394",
"assets/assets/neon_svg.svg": "d54a710358d9d12d507e268cbdde88f1",
"assets/assets/ic_share.svg": "afd9150f98b408a89658fac946278710",
"assets/assets/reward_detail_overlay.svg": "501bfa6e34c87de3d26638c46eb2c044",
"assets/assets/banner_drinks.png": "316ce56b8b79215d87f0670c80d6781c",
"assets/assets/reward_drink.png": "b9c75cf535b34af176edaf74cc8e21fb",
"assets/assets/reward_status_pending.png": "b0ffd0ccb0ab3eec55dbbebd982634a2",
"assets/assets/no_ledger_anim.json": "48c8d113ee741f0ee2caa26dfd098042",
"assets/assets/ic_redeem_anim.svg": "44ad61dd6be7a040d57a75e541e2b74e",
"assets/assets/confetti.json": "fcc5146904ece2beaf407b15b841de2e",
"assets/assets/ic_read_more.png": "03b415983763acf4fb719d7612a2a328",
"assets/assets/ic_ticket_svg.svg": "2d6feeef35e093b9e9536a3faa26c0a3",
"assets/assets/arrow_circular_down.svg": "e125be86a9e4fd20ca4462ca55a942b4",
"assets/assets/banner_hotels.png": "01a46bacf89f5c152d9e438431cac385",
"assets/assets/banner_salon.png": "434b0e467c0306a53c43d7156243d45e",
"assets/assets/banner_entertain.png": "3998877015f00903fc706ba25acd10cf",
"assets/assets/reward_3d_mesh.png": "423cf7574ea27196607916a5b47cd658",
"assets/assets/ic_logo_default.png": "e28700caf74097ad247494d5affefbfd",
"assets/assets/bg_bottom_reward.png": "3997ec42e5a452f1b7efbae96689f50a",
"assets/assets/reward_hotel.png": "6478e2ccf00dd95a59b744034d746215",
"assets/assets/ic_attachment.svg": "7490d6765036bd6cd475c3d29057a377",
"assets/assets/ic_more.png": "670ab00df7701fc6e4f7a2079af4d6ae",
"assets/assets/banner_wellness.png": "490121d4c90501ae5f02d49752630107",
"assets/assets/ic_category_generic.png": "3bafdc4325a4b1bb39f2643655b4abc0",
"assets/assets/banner_shopping.png": "5b0bfac4fd11a45817f0ec56276b9b57",
"assets/assets/ic_rewards.svg": "19f46ee11b9c90c4fdeee75dae185138",
"assets/assets/ic_raise_ticket_success.png": "2263f9ce191c4adcb76e56783e9b27a1",
"assets/assets/ic_no_coins.png": "bd7633d7ac82aac9ebdd7a381d78c2a0",
"assets/assets/reward_status_failed.png": "53af471a73ef70857987c4791fed7ec1",
"assets/assets/ic_help.svg": "679a482382b806e44e2ca323d55d44a2",
"assets/assets/reward_coin_mini.png": "90903bcfebf4a7f7d1cea7422864d143",
"assets/assets/reward_shopping.png": "4adead34da4ec4c619005537013a83f3",
"assets/assets/white_line_loader.json": "518eb80239a7c2822c6d7df1ef92612f",
"assets/assets/ic_generic_banner.png": "8f7dfd5b4b2f8969ab694b062ae82c08",
"assets/assets/ic_reward_category.svg": "85cf9e90d11ef32d400e4886b0a85562",
"assets/assets/ic_arrow_circular.png": "69f5fc954edf3574066794cfb747e561",
"assets/assets/ic_help_dashboard.svg": "6cc367431aab2d7abb595c235040c705",
"assets/assets/reward_travel.png": "c1cc3b40e4102c5d0f6f1fc70974a3af",
"assets/assets/reward_salon.png": "9f02d706270099c265a619c689fb42ca",
"assets/assets/reward_food.png": "6be66725b4f7540afb486344b8b386cf",
"assets/assets/banner_travel.png": "ed49d6487cee83f1ca149a22578807de",
"assets/assets/ic_copy.svg": "4f5b149662518f7ac97ad2af06f750b0",
"assets/assets/reward_coin.svg": "d8336cc0717fa78b3206eba64a6f39d2",
"assets/assets/reward_clock.png": "ed919b2fb991d220934305997bf46bf2",
"assets/assets/reward_wellness.png": "352b9c025824b4e3b6b5900c304e231d",
"assets/assets/reward_detail_overlay1.svg": "c3b852dbcac24e00b4d7d876cfd20ca5",
"assets/assets/no_data.png": "ce77b011a78ef598d673a7fc609bdf92",
"assets/assets/reward_entertainment.png": "607f3511d49dbf0b0435deba976f68ff",
"assets/assets/banner_food.png": "3ad1f5da155219a1f6f55c6988d7fbc6",
"assets/assets/ic_banner_shadow.svg": "ee728f308b617faa5e4de35cb9749405",
"assets/assets/ic_cashback.svg": "ea127eaf1ee0d85d8352a9e414a57684",
"assets/assets/no_offers.json": "48c8d113ee741f0ee2caa26dfd098042",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
