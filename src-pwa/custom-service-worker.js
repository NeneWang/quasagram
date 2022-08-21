/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */

/*
  dependencies
*/

import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { StaleWhileRevalidate } from 'workbox-strategies'
import { CacheFirst } from 'workbox-strategies'
import { ExpirationPlugin } from 'workbox-expiration'
import { CacheableResponsePlugin } from 'workbox-cacheable-response'
import { NetworkFirst } from 'workbox-strategies';
import { Queue } from 'workbox-background-sync';


/*
config
*/



precacheAndRoute(self.__WB_MANIFEST);


let backgroundSyncSupported = 'sync' in self.registration ? true : false
console.log('backgroundSyncSupported: ', backgroundSyncSupported)
let createPostQueue = null

if (backgroundSyncSupported) {

  createPostQueue = new Queue('createPostQueue');
}


/*
caching strategies
*/

registerRoute(
  ({ url }) => url.host.startsWith('fonts.g'),
  new CacheFirst({
    cacheName: 'google-fonts',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 30,
      }),
      new CacheableResponsePlugin({
        statuses: [0, 200]
      }),
    ],
  })
);


registerRoute(
  ({ url }) => url.pathname.startsWith('/posts'),
  new NetworkFirst()
);

registerRoute(
  ({ url }) => url.href.startsWith('http'),
  new StaleWhileRevalidate()
);

if (backgroundSyncSupported) {

  self.addEventListener('fetch', event => {


    if (event.requeust.url.endsWith('/createPost')) {


      // Add in your own criteria here to return early if this
      // isn't a request that should use background sync.
      // if (event.request.method !== 'POST') {
      //   return;
      // }

      const bgSyncLogic = async () => {
        try {
          const response = await fetch(event.request.clone());
          console.log("Clonning Sync")
          return response;
        } catch (error) {
          console.log("Pushing Reuqest")
          await createPostQueue.pushRequest({ request: event.request });
          return error;
        }
      };

      event.respondWith(bgSyncLogic());
    };

  });
}
