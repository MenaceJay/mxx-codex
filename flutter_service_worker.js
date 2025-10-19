'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "de679ce3e4df65f290ca13a50ab56617",
"assets/AssetManifest.bin.json": "2a40c700cbbeb645ba34ae27eb4c7e2d",
"assets/AssetManifest.json": "52eebc919644231f132dba4e95815e5e",
"assets/data/abilities.csv": "a7012e2f6f7f377c63d3a501111bc8c7",
"assets/data/adversaries.csv": "5a8ae904141a74f83d157ff1b901b01c",
"assets/data/ancestries.csv": "aa1c8e2987e4682777ccd60915c3527e",
"assets/data/armor.csv": "bd0fb63a55e6356e03049aa90a339473",
"assets/data/classes.csv": "4e8deaeaa70a07f66c31ad7631e6208b",
"assets/data/communities.csv": "be7162a8a8e43e572c4af29b453d6509",
"assets/data/consumables.csv": "9ea40846655570975156f92d76ed6ceb",
"assets/data/domains.csv": "442c39616a0ae4d5a26325fcf0643e91",
"assets/data/environments.csv": "0b2f9020e6eb325febada632faf0c92d",
"assets/data/items.csv": "c0a26fea8dd9b9f033c2dc408b3e300e",
"assets/data/subclasses.csv": "f074e580235107f622dd969c9b21b5c1",
"assets/data/weapons.csv": "245ca7fd0784fb5c6ba8e2036afc39ec",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "8d07a6980eeafcb3df908bca797b8c08",
"assets/icons/armors/cloak.svg": "2e5f63f1fd033e12755929545163b71f",
"assets/icons/armors/heavy.svg": "40e895d4e281fcca73f7123ad83aa160",
"assets/icons/armors/light.svg": "34f11cdffd16c308f6e08e8d3cff763d",
"assets/icons/armors/medium.svg": "8d5e07b7e33c16685b92572d4d048f0f",
"assets/icons/armors/rune.svg": "c1e80825d505351b9693516ac78c1134",
"assets/icons/armors/soft.svg": "4b73b0a0d93dcab74763be0093ece9e3",
"assets/icons/domains/arcana.svg": "1b67e1d47ca839dd243a76f2c7486a75",
"assets/icons/domains/blade.svg": "ef4b1fe9b8ad674e43b363b4d375c51d",
"assets/icons/domains/bone.svg": "421b7e0e4c9acef875e7b93db71152d7",
"assets/icons/domains/codex.svg": "2e8c4d712ae8bb9bc2977688826e17f0",
"assets/icons/domains/grace.svg": "11e0a9df2d14f8e602cfc680c7f88c96",
"assets/icons/domains/midnight.svg": "f16a7575f91812f2a61e24e9a6f10b6a",
"assets/icons/domains/sage.svg": "57c8000f932f3cd99daf2ea1ec061c64",
"assets/icons/domains/splendor.svg": "4d8e87a5b4756f35b21bc56e5295c4b8",
"assets/icons/domains/valor.svg": "33ae7441774a3ceb9f0eb5516bcb623e",
"assets/icons/gold/bag.svg": "b1ab59be4cbf9bf1394af58181cc22ec",
"assets/icons/gold/chest.svg": "849b9b4ba213766162ae5c7c5d0f86f9",
"assets/icons/gold/coin.svg": "1e21b41dd9227c1bd4917629f1930760",
"assets/icons/gold/handful.svg": "eecf4abc988b4570450d5a38248b765b",
"assets/icons/items/genericItem.svg": "dda98bc2c2e432cbe37c81a1cf1c2b08",
"assets/icons/items/potion.svg": "f53d01b9cdc44df38ee724f4941871d5",
"assets/icons/items/spellbook.svg": "2e6cc6134982907c8d86da256c62c9e4",
"assets/icons/resources/armor.svg": "2ba10c3196362a0723bda620a3aebfd5",
"assets/icons/resources/armorMarked.svg": "e798f7bab8f359a389f958c61b2318dc",
"assets/icons/resources/hope.svg": "7d318ab70efb6f10a80c109e823192c0",
"assets/icons/resources/hopeSpent.svg": "14db6c9778366c9300cb5157282c0a01",
"assets/icons/resources/hp.svg": "8d50152b6987c1061bce527163225ff1",
"assets/icons/resources/hpMarked.svg": "4d01f447077f6b709a8211e7fa213c45",
"assets/icons/resources/stress.svg": "78fa52d0d84471b3102c04574eded296",
"assets/icons/resources/stressMarked.svg": "a4e3721067a75e7bb36bd0993da1f134",
"assets/icons/stats/evasion.svg": "075c0e27194fd48cea8eb6dc6b601086",
"assets/icons/stats/majorThreshold.svg": "c77c3d496130665c577eb9d84232721d",
"assets/icons/stats/severeThreshold.svg": "2cfec713eec3a04fabffd9c941beed3f",
"assets/icons/stats/thresholds.svg": "77473c753e036dcc583aeb9b47ec48fa",
"assets/icons/traits/agility.svg": "d8450018e2ba3aacaa5cf36ded01d80e",
"assets/icons/traits/finesse.svg": "346e52ea04c5ae20ed528332de6cd04e",
"assets/icons/traits/instinct.svg": "e1aed2218c8bfe24baafb7b1a0fc4800",
"assets/icons/traits/knowledge.svg": "f2d93663aeb93019d7f384b9193c53f4",
"assets/icons/traits/presence.svg": "0d1d926a580f85af96952f658daa2e5f",
"assets/icons/traits/strength.svg": "266fffa36294c51dab3ab6426c6568a0",
"assets/icons/ui/clear.svg": "3b6d96d47ac2cd95e167cee2c31b7300",
"assets/icons/ui/edit.svg": "faab2ae5ed0507d9dc2919bf96826628",
"assets/icons/ui/handl.svg": "1ceb315c311bbab55465c484ca6f3714",
"assets/icons/ui/handr.svg": "afd47713d0c7d4e6100aef44d956c6cf",
"assets/icons/ui/mark.svg": "c124d39f54a4e301652c99a9067d1ef0",
"assets/icons/ui/noequip.svg": "b83f01639c30c6ac52451ccfacabcd9d",
"assets/icons/ui/random.svg": "10983031e43c05162b2d605f77733798",
"assets/icons/ui/randomise.svg": "3552f03e35d7263343a80bd3ded8c5da",
"assets/icons/ui/switch-weapon.svg": "22b6faf2487a4d8de01c9e8eeb4f8b4c",
"assets/icons/ui/trade.svg": "7f1efb797020eeead719587018962b26",
"assets/icons/weapons/axe.svg": "aa631f793e446ed0931c71b6b7d596ac",
"assets/icons/weapons/blunderbuss.svg": "11c2e6a5e01a4d44dea5884b5a26792f",
"assets/icons/weapons/bow.svg": "c9109c06d84fba7ee166afa7eb4d2008",
"assets/icons/weapons/crossbow.svg": "b6f2b4e608d2b732bac394f534cfcebe",
"assets/icons/weapons/dagger.svg": "cad65f44e0b3da86c4e85fcb02da397a",
"assets/icons/weapons/fist.svg": "4783fa070ad5004787ebeeffaf2e6628",
"assets/icons/weapons/halberd.svg": "e7468a95a7f0701d3585c8a8e53c1601",
"assets/icons/weapons/hammer.svg": "d34ce95fdee7769d3c59c1493a21d9df",
"assets/icons/weapons/sacrificial-dagger.svg": "1c09aee36c6bcce703a9a6a55b497312",
"assets/icons/weapons/scythe.svg": "fc7a86d5a83895e6906f8dbd4213c88a",
"assets/icons/weapons/shield.svg": "7e373b2ab26d2c8a0168c89b3ab39975",
"assets/icons/weapons/spear.svg": "55da0af2dc4a8d724df87503c9c772c1",
"assets/icons/weapons/staff-m.svg": "fb8fc30f6665aac0fb0c0158ae390302",
"assets/icons/weapons/staff-p.svg": "e33658b702f34492b27c76413575450a",
"assets/icons/weapons/sword-array.svg": "1cb61ff8a5485689f295204087260a18",
"assets/icons/weapons/sword.svg": "19110111c76967dcbea8070a6d8eefd3",
"assets/icons/weapons/unstable-orb.svg": "1026655aedac553968901c774ff77544",
"assets/icons/weapons/wand.svg": "921fadab515ef26d432136247005e8a9",
"assets/icons/weapons/whip.svg": "e834b095d7dc7d85bc200285479bfc39",
"assets/icons/weapons/winged-pendant.svg": "07fac48e3a624d884ac3955aa6f3ed66",
"assets/images/communities/highborne.jpg": "474be83dfb7a278813db17901f6fe7f7",
"assets/images/communities/loreborne.jpg": "3049c4a204f9e6aafa72c1335dce5525",
"assets/images/communities/orderborne.jpg": "7b6a7552ba637bdae3feff3f5d349a93",
"assets/images/communities/orderborne_original.jpg": "f5914920deb09cdbc0cdd4d41ee20a12",
"assets/images/communities/ridgeborne.jpg": "0891fc93823e3ed76c24187e9aadfed3",
"assets/images/communities/seaborne.jpg": "2f4ea47c78874f4314f64e514ac5487e",
"assets/images/communities/slyborne.jpg": "16dd7c789da303048dc9d27e74029f40",
"assets/images/communities/underborne.jpg": "ea667f73f4e7bbbee772272c2fb62bb0",
"assets/images/communities/wanderborne.jpg": "808965aa3a88333d87aa8f9271c6ff89",
"assets/images/communities/wanderborne_original.jpg": "f23ee62f6554cdda7af1598a98252438",
"assets/images/communities/wildborne.jpg": "ed29c526d5cf7e810e2e7f557810e7fa",
"assets/NOTICES": "0432b29f33b69d81497119aaed49218c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "7ebff3d2885e25c79975aeaf1b168496",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "72a05f82c171a228f431282ba54e30b0",
"/": "72a05f82c171a228f431282ba54e30b0",
"main.dart.js": "dafca30e04182abab8f927cde874a9f1",
"manifest.json": "d46d7e607d72f8cd4a0fc0903a84063f",
"version.json": "a08ea1901a449f9defe3e2d644e2053d"};
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
