import CacheHelper from './utils/cache-helper';

const assetsToCache = [
  './',
  './icons/android-icon-192x192-seochecker-manifest-7314.png',
  './icons/apple-icon-180x180-seochecker-manifest-7314.png',
  './icons/apple-icon-152x152-seochecker-manifest-7314.png',
  './icons/apple-icon-144x144-seochecker-manifest-7314.png',
  './icons/apple-icon-120x120-seochecker-manifest-7314.png',
  './icons/apple-icon-114x114-seochecker-manifest-7314.png',
  './icons/favicon-96x96-seochecker-manifest-7314.png',
  './icons/apple-icon-76x76-seochecker-manifest-7314.png',
  './icons/apple-icon-72x72-seochecker-manifest-7314.png',
  './icons/apple-icon-60x60-seochecker-manifest-7314.png',
  './icons/apple-icon-57x57-seochecker-manifest-7314.png',
  './icons/favicon-32x32-seochecker-manifest-7314.png',
  './icons/favicon-16x16-seochecker-manifest-7314.png',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];
self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
