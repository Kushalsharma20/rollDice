'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f30608e564294d8562b3e0d010cdda1e",
"index.html": "aae7d1f786d7743ce13c8679b784b165",
"/": "aae7d1f786d7743ce13c8679b784b165",
"main.dart.js": "82c3e0c3098bf31f1d63b86a78bceab2",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f9d55db704988cb739ab72447590be71",
".git/config": "419cd8b48569e358125ab616ba166455",
".git/objects/61/2c7ebdc984f7bd7d79213023ded5993cfeaa8c": "dc0658ff5fcb03d2559e607a4cadba00",
".git/objects/0d/c747bfdc62173eb6aeacd559e71d1bc89bc8ee": "4d373e5777900a631342c4d48634befc",
".git/objects/59/2bc9596fce468a34150a20c9561bb2485b9344": "d4843fe0db456128ebe727dd6d835d90",
".git/objects/0c/fc0d6cd28d0118e81f61b49b4f80e7bca00a63": "dff600dc702a0cae3a39fd528b8a7fd9",
".git/objects/3b/4c859d8bb404d5a6cf078a71a67a75967d11d3": "a476b96439dbea16ccb57bf6f52f08bc",
".git/objects/3b/f3e574ed955ce7adbc9ffe330491035fea92a2": "e1f47124e6d0965e957908b26c9bda76",
".git/objects/3b/479e22f671a7d3317de856ee06ee1807ba009c": "95639179fed756f7b6ff388670754bfc",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/9e/96c63bac59fa4847ae87c294661ba81a8edee2": "5e5a9ff5fd81a2b1c37da7ae2e72e9fb",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/58/a4247a82fc416f38c451fd9b1b5599b722d332": "da029327c38ea85d9cc8d9b32facd923",
".git/objects/0b/43769be059fa63a4e71ea88f5758808ed60f5a": "d0987173d95dbdfb95225d0e085edb00",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/b5/b79a1681e703c4750a49a99218f3ef0ff8a4a5": "1c2e477be897f9dafa8ce5a8e8da295a",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/80d2d729503cc4bde755785db40f8dbbe25b62": "2fc4b755bd9214375292c9cf5017505a",
".git/objects/b4/711e87490e1a1a54a32ca47935c04fdf27d6f6": "23186f3d8ada92b0e7cc4d6fd7585a49",
".git/objects/b4/50669ff21f5c627c07613e384ad52928512022": "9a690dd5435127987960c25b1352d7d2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/18fac93f87ae93aec898f9716c5af1769868a3": "f85cc53d36c1e5fe05a0e7d533ee6118",
".git/objects/e3/41d1ced4202f431a6db33c1f99829ebfd5712a": "5c54df7cefdb0408b00ee0502abd2a61",
".git/objects/ca/a757dd9be056dab65729630a60148915a12a77": "cf1887bbdb38262e0a6e2c4b0850cb62",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/20/a63ab45a861f122652453d3fd6c6d8f8952947": "8dcad0ed9534b6eb7014793ab40aa335",
".git/objects/42/12e7e6e41ee11b04f5fe5f66a3b550c821a350": "a5f649ce331293f761d1fd91c9849315",
".git/objects/89/f3b91042e733a424d6d889075b9f2b86bfaea4": "dd84f00293da6afb8a4d180702577b4c",
".git/objects/1f/081e0ff56dfb994fbb526ba90af7334ea3b111": "a99f626ba102c20b6c2593b5482290c7",
".git/objects/73/19a6fe73ac1173f79bbd71f05aed559d340ecc": "1a87fb238e343862a12aff4f38f351eb",
".git/objects/1a/1487d88ec76fce722149f631224c01c4ec318a": "e7585ebc7022e95cb5f98fed9f11a794",
".git/objects/17/386caace900da47491682acab8a58380e75872": "e2e44f8b9af257e9441975f5f9afd83e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/88/7184c176c7bb53fd808c7b022c312979e7e97f": "131fdfb3af3bdd7bca6b9b8764bc603e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/b8/690efca7ef16d55cd3b9083af04f066abb8498": "69d1543501a1c9da8a62cf1b6fe42dc3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/2c464d9a288c414364e49877559b74916ec965": "9699cbc9ebc26ba73d12f9646400f034",
".git/objects/cd/20fb07100cd33fbe7e3d21dc8a6cfe99fb130f": "ee9853a6fbd3425aa7963405edd1df89",
".git/objects/f6/4d76d9a95df19f4a52c19d875d1ff1ac1e7973": "058b8f720603da25de199c3a1751351d",
".git/objects/e7/def95d3f44c82086f6e74d93fc0aadac7c454a": "28a34a73fd3e94b3fd53733dfaf2ed0e",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/f8/9a5f5930f45794237fee72231056d785138add": "d879fd27876326ea2f28c8ee22ca4b1f",
".git/objects/e0/36f5b8a34f4c4b2766792479935e4f21cda6f2": "b9158d9b5a3d66fdcdd0ce59e7bfe934",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/84/9f56f476e58ee1cfb183c849d641b64a9f15d0": "e908494ea2857870b80d60cfe83358e9",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/82/47f8e34fe3f78d5e1f683a410c52e76ced6598": "da300b4368bd74c7292705d2d774339d",
".git/objects/40/09c209dece9f2013171f39c57ad01b3a3625db": "0bcc204fb3271e537cee1c5a0063295e",
".git/objects/40/62b6417f168d53695af9bd07a5c7b7fab9b28b": "70667f1b422e1042c0c3e2c562d86947",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "401803a1d5b69737f1000e98405bb835",
".git/logs/refs/heads/main": "28e61e1288b1551dbf1b9668eed6cd5f",
".git/logs/refs/remotes/origin/main": "2c8d8ce139d7c98fc9aed30761862739",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "61eeff3a7cbf2f29a691a06df2b6cede",
".git/refs/remotes/origin/main": "61eeff3a7cbf2f29a691a06df2b6cede",
".git/index": "6c8b95850c8e90d03ccf2d39fb536dfb",
".git/COMMIT_EDITMSG": "6d2fd4056babc68a3df3615c6361a522",
".git/FETCH_HEAD": "e81d9247bb917f0954368496c59c6b04",
"assets/images/dice-six-faces-6.png": "8fed178c6f572c3ec1a3750f30d5fbab",
"assets/images/dice-six-faces-4.png": "7df2bf9d0d34e8617200f1d724eb82fc",
"assets/images/dice-six-faces-5.png": "f8bca4ffa03f2d74f7cd9d6b8fc25061",
"assets/images/dice-six-faces-1.png": "beb910b062de9c71d55663251027b139",
"assets/images/dice-six-faces-2.png": "827062339b434deac680e70093cc2a6d",
"assets/images/dice-six-faces-3.png": "b84487dc024344a5616d60ad07a96a28",
"assets/AssetManifest.json": "c52a6594888387af8430b3722b228ed2",
"assets/NOTICES": "65927a9256022709295bd07d61a17fc5",
"assets/FontManifest.json": "a3cd6d3714d3b0d9f19c158cf3fdd184",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "ddc6cb6e17c3efc380ac253c6c7d0c94",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/fonts/Pacifico-Regular.ttf": "85bb2d0ec4a0da159de42e89089ccc0b",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
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
