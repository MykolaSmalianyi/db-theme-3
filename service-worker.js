/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "53814a9700ecd7785b8967e5156e8f5c"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.31f44569.css",
    "revision": "d159c751eddd91833c17e08bda817451"
  },
  {
    "url": "assets/img/1.da3f3d19.png",
    "revision": "da3f3d1914d087db45d118e0e2812710"
  },
  {
    "url": "assets/img/2_1.29284979.png",
    "revision": "292849798826bddc30e922217d092778"
  },
  {
    "url": "assets/img/2_2.cf613738.png",
    "revision": "cf613738a5f34df1607d309e81e6a365"
  },
  {
    "url": "assets/img/3_1.0a25ed0a.png",
    "revision": "0a25ed0a51fab232ca0de5cfe6dcc827"
  },
  {
    "url": "assets/img/3_2.004eac5e.png",
    "revision": "004eac5e40f1504e71e0d852439406f7"
  },
  {
    "url": "assets/img/4_1.76b15ed6.png",
    "revision": "76b15ed61007249c3cdf9700c9a0e286"
  },
  {
    "url": "assets/img/5_1.5fc06b2f.png",
    "revision": "5fc06b2f19b77cb829eb719466fae2a0"
  },
  {
    "url": "assets/img/5_2.115e5960.png",
    "revision": "115e596094d158b6ce0398a02b16d903"
  },
  {
    "url": "assets/img/6_1.e605c4cb.png",
    "revision": "e605c4cb3b2fd585f918f12b5ae538b5"
  },
  {
    "url": "assets/img/6_2.e653c48c.png",
    "revision": "e653c48c8cf6f8cd7cedee0476fba3ba"
  },
  {
    "url": "assets/img/7_1.124e5474.png",
    "revision": "124e54744367e468bce8afbf82d0ee0b"
  },
  {
    "url": "assets/img/7_2.3e118392.png",
    "revision": "3e118392ccdeb3cc2f674a297782cb90"
  },
  {
    "url": "assets/img/for_lab4.7dc22bd2.jpg",
    "revision": "7dc22bd2d5a66c9835712d68d2d46ec8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.01d8e812.js",
    "revision": "135383e37e9f4f687ab1f33ca46b6cea"
  },
  {
    "url": "assets/js/11.c19e1be6.js",
    "revision": "125d74e2158cb76e3eaff1b6ef5cbdb2"
  },
  {
    "url": "assets/js/12.cd56407f.js",
    "revision": "95fa4098449e58a4b502ff1b664685ca"
  },
  {
    "url": "assets/js/13.9f0df2f9.js",
    "revision": "e0c12976601c0bcd571d07872e741667"
  },
  {
    "url": "assets/js/14.3c9a1a20.js",
    "revision": "aafe6b3f342dce116fd6ca2853988bd1"
  },
  {
    "url": "assets/js/15.bb3b1c21.js",
    "revision": "c9ffaa61b8d5f7b0bebc04c72183c5a3"
  },
  {
    "url": "assets/js/16.2fced209.js",
    "revision": "fe8adbff18dfc792c791261569b12c9b"
  },
  {
    "url": "assets/js/17.65c77eeb.js",
    "revision": "ca4ad8024b276a90bffce0b490fa5d39"
  },
  {
    "url": "assets/js/18.ccad545d.js",
    "revision": "ec9e257e4f8a40e33d5d7ad93db89f52"
  },
  {
    "url": "assets/js/19.a9e7a08d.js",
    "revision": "a199a47435ebf403897674351193c22c"
  },
  {
    "url": "assets/js/2.5e351171.js",
    "revision": "34d33f2dd73983bbfa074236a61708eb"
  },
  {
    "url": "assets/js/20.ea7eee7d.js",
    "revision": "a61c209906dbebc4dd8406fe7a707aa0"
  },
  {
    "url": "assets/js/21.6e1cafc6.js",
    "revision": "35820bacd71933759951e22d1db3de2a"
  },
  {
    "url": "assets/js/22.86c3cb2a.js",
    "revision": "0f4d45a892d2216a33a1e99c96f78387"
  },
  {
    "url": "assets/js/23.8307f72c.js",
    "revision": "b87dc4536097fa37feb27820cdcb64d3"
  },
  {
    "url": "assets/js/24.88a12b4b.js",
    "revision": "4bf2fae2a3ebde73fcae6d706663c60a"
  },
  {
    "url": "assets/js/26.33977650.js",
    "revision": "5d37626a175e8b6345685c8ce2e57b08"
  },
  {
    "url": "assets/js/3.ebbdf1c7.js",
    "revision": "38c5ef36b7165a18ed82de46828837c8"
  },
  {
    "url": "assets/js/4.247dc7a9.js",
    "revision": "d72745ba9d2b49a9b4f809d9f9eec987"
  },
  {
    "url": "assets/js/5.3bd163c8.js",
    "revision": "6d82c535d3855b481baa112c0eeab35c"
  },
  {
    "url": "assets/js/6.026c5087.js",
    "revision": "eacf175154cd8bc659e21ed28d3c8a7e"
  },
  {
    "url": "assets/js/7.849c140b.js",
    "revision": "16f06387c9ccf8f5720a01ef73a6316a"
  },
  {
    "url": "assets/js/8.f94a77aa.js",
    "revision": "c67ee96e4e89b2817cd5d24dfc1ed23e"
  },
  {
    "url": "assets/js/9.b7641df8.js",
    "revision": "e6b7802eb2f7d7c8abab04cf4e047a83"
  },
  {
    "url": "assets/js/app.fe6efd33.js",
    "revision": "41b877b03459a8c865378016b41bca9d"
  },
  {
    "url": "conclusion/index.html",
    "revision": "e058227cf30d7886826a6e82e877a6f1"
  },
  {
    "url": "design/index.html",
    "revision": "a9e8e316b6444dd732d7e2e34e9019a1"
  },
  {
    "url": "index.html",
    "revision": "97f4fe025402ac4bdc896cba5dd10086"
  },
  {
    "url": "intro/index.html",
    "revision": "5bb92477a8f0f14e4c8b740a709590e4"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "f7e995b11dffb710016221f0b28b021a"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "1096b0f12c60f8d8dfa3b90eaecb47ce"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "a198e04a94ba40b4b223fd459bdd9df5"
  },
  {
    "url": "software/index.html",
    "revision": "3e72276a4fccb155497d25569923f5b4"
  },
  {
    "url": "test/index.html",
    "revision": "6c53f03d4fdb03183714b974d1fa591c"
  },
  {
    "url": "use cases/index.html",
    "revision": "9fc480c23243b46b39516a30d839a175"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
