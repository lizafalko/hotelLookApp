"use strict";var precacheConfig=[["/hotelLookApp/index.html","8ae358ffa7bdec44a536a6f968891535"],["/hotelLookApp/static/css/main.d5de09bc.chunk.css","16ff541fa58e656b300227e766beafbe"],["/hotelLookApp/static/js/1.e808f207.chunk.js","ac2a50e4c9c154cfccd7808243271931"],["/hotelLookApp/static/js/main.9ac2433f.chunk.js","50e30bd80e62a025939872797258312c"],["/hotelLookApp/static/js/runtime~main.a7b6a6ae.js","8cf3027a35eb3f8d3ca1e42b30bbfe33"],["/hotelLookApp/static/media/DINPro-CondBold.481d38e7.otf","481d38e7ec5bb0a63bf63224798b9949"],["/hotelLookApp/static/media/DinWebNarrowDemi.d9a270b8.ttf","d9a270b80ea38bc8af8c83585f94e00e"],["/hotelLookApp/static/media/icon01.1ba9828d.svg","1ba9828dd688a4d26c1a3c2a06e28f13"],["/hotelLookApp/static/media/icon02.d4a098c0.svg","d4a098c086346bc0c3c355f51cdad817"],["/hotelLookApp/static/media/icon03.d578b2f4.svg","d578b2f424fb2f08d84cf7d5a14f8b7b"],["/hotelLookApp/static/media/icon04.eecf9a5d.svg","eecf9a5ddb9e7e8c7771d915ba1d43b4"],["/hotelLookApp/static/media/icon05.25f243a8.svg","25f243a871a2abbfeed179a45ab3bbcc"],["/hotelLookApp/static/media/icon06.6ea74d01.svg","6ea74d0188de8aea0bcc860d9bdee008"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/hotelLookApp/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});