/* eslint-disable no-undef */
// Service Worker de KONAN : réception des notifications push (Web Push standard + clés VAPID).
//
// Il ne charge plus Firebase Messaging : l'ancien script (importé depuis www.gstatic.com) abonnait le
// téléphone avec une AUTRE clé que celle du serveur, ce qui cassait l'abonnement à chaque ouverture,
// et pouvait faire échouer l'installation du Service Worker hors connexion. Le nom du fichier est
// conservé pour que les téléphones déjà inscrits reçoivent cette version automatiquement.

const SW_VERSION = 'v-2026-11-07-01';

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(names.map((name) => caches.delete(name))))
      .then(() => self.clients.claim())
  );
});

function readPush(event) {
  const fallback = {
    title: 'KONAN',
    body: 'C’est l’heure de ta révision. Viens, je t’attends.',
    tag: 'konan-study-alert',
    data: { url: '/' },
  };
  if (!event.data) return fallback;
  try {
    const raw = event.data.json();
    return {
      title: raw.title || raw.notification?.title || fallback.title,
      body: raw.body || raw.notification?.body || fallback.body,
      tag: raw.tag || raw.data?.tag || fallback.tag,
      icon: raw.icon,
      badge: raw.badge,
      data: { url: '/', ...(raw.data || {}) },
    };
  } catch {
    return { ...fallback, body: event.data.text() || fallback.body };
  }
}

self.addEventListener('push', (event) => {
  const msg = readPush(event);
  event.waitUntil((async () => {
    // L'élève a l'application ouverte devant lui : la bannière KONAN s'affiche dans l'appli,
    // pas besoin d'une notification système en double.
    const windows = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    const visible = windows.find((c) => c.visibilityState === 'visible' && c.focused);
    if (visible) {
      visible.postMessage({ type: 'KONAN_PUSH', title: msg.title, body: msg.body, data: msg.data });
      return;
    }
    await self.registration.showNotification(msg.title, {
      body: msg.body,
      icon: msg.icon || '/cube-icon.png',
      badge: msg.badge || '/cube-badge.png',
      tag: msg.tag,
      renotify: true,
      vibrate: [300, 150, 300],
      data: msg.data,
    });
  })());
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
  if (event.data && event.data.type === 'KONAN_SW_VERSION') event.source?.postMessage({ type: 'KONAN_SW_VERSION', version: SW_VERSION });
});

// Clic sur la notification : ouvre KONAN (ou remet l'onglet au premier plan)
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = event.notification.data?.url || '/';
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.startsWith(self.location.origin) && 'focus' in client) return client.focus();
      }
      return self.clients.openWindow ? self.clients.openWindow(targetUrl) : undefined;
    })
  );
});

// Réseau d'abord pour la page et version.json ; on n'intercepte jamais les autres sites
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith('/api/')) return;

  if (url.pathname === '/version.json' || url.pathname.endsWith('sw.js')) {
    event.respondWith(fetch(event.request, { cache: 'no-store' }));
    return;
  }
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request, { cache: 'no-cache' })
        .catch(() => caches.match(event.request).then((res) => res || caches.match('/index.html')))
    );
    return;
  }
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
