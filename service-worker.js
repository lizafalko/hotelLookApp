"use strict";var precacheConfig=[["/hotelLookApp/index.html","bad555f5ffb1f9046d607b307e748c12"],["/hotelLookApp/static/css/main.2a9f0045.chunk.css","ed1907df06847d86da2e9a6855911ce8"],["/hotelLookApp/static/js/1.75c17f17.chunk.js","2804c6d438351f8bcc59c20b55bb496a"],["/hotelLookApp/static/js/main.fb9b9dad.chunk.js","f8d1942f67e718befb2bddbee7ba7083"],["/hotelLookApp/static/js/runtime~main.a7b6a6ae.js","8cf3027a35eb3f8d3ca1e42b30bbfe33"],["/hotelLookApp/static/media/DINPro-CondBold.481d38e7.otf","481d38e7ec5bb0a63bf63224798b9949"],["/hotelLookApp/static/media/DinWebNarrowDemi.d9a270b8.ttf","d9a270b80ea38bc8af8c83585f94e00e"],["/hotelLookApp/static/media/MarketPlace.e05ed295.svg","e05ed2954dbed1dbe8fc8e74983c7dbf"],["/hotelLookApp/static/media/Shape.5b6455ba.svg","5b6455ba7a1730a352c4a6d9df60d499"],["/hotelLookApp/static/media/icon01.1ba9828d.svg","1ba9828dd688a4d26c1a3c2a06e28f13"],["/hotelLookApp/static/media/icon02.d4a098c0.svg","d4a098c086346bc0c3c355f51cdad817"],["/hotelLookApp/static/media/icon03.d578b2f4.svg","d578b2f424fb2f08d84cf7d5a14f8b7b"],["/hotelLookApp/static/media/icon04.eecf9a5d.svg","eecf9a5ddb9e7e8c7771d915ba1d43b4"],["/hotelLookApp/static/media/icon05.25f243a8.svg","25f243a871a2abbfeed179a45ab3bbcc"],["/hotelLookApp/static/media/icon06.6ea74d01.svg","6ea74d0188de8aea0bcc860d9bdee008"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/hotelLookApp/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});