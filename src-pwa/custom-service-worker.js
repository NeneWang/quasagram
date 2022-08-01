/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */

/*
 dependencies
*/

import {precacheAndRoute} from 'workbox-precaching';
import {registerRoute} from 'workbox-routing';
import {StaleWhileRevalidate} from 'workbox-strategies';

registerRoute(
  ({url}) => url.pathname.startsWith('/images/avatars/'),
  new StaleWhileRevalidate()
);


precacheAndRoute(self.__WB_MANIFEST);


// console.log("Custom Service Worker")


