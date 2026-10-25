/* eslint-disable no-undef */
// Service Worker Firebase Cloud Messaging (FCM) en arrière-plan pour KONAN AI
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

// Version du Service Worker pour forcer la mise à jour sur smartphone et PWA installée
const SW_VERSION = 'v-2026-10-25-05';

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          console.log('[KONAN SW] Nettoyage ancien cache:', cacheName);
          return caches.delete(cacheName);
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Configuration Firebase automatique du projet KONAN
const firebaseConfig = {
  apiKey: "AIzaSyA4Azn3VXwTC2xdAsCm1yMKq0QEoDalzg4",
  authDomain: "konanai-ed046.firebaseapp.com",
  projectId: "konanai-ed046",
  storageBucket: "konanai-ed046.firebasestorage.app",
  messagingSenderId: "928627074050",
  appId: "1:928627074050:web:a5bc9ace090ba9347df31b",
};

firebase.initializeApp(firebaseConfig);

let messaging = null;
try {
  messaging = firebase.messaging();
} catch (err) {
  console.warn('[firebase-messaging-sw.js] Messaging non supporté ou erreur init:', err);
}

if (messaging) {
  messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Notification en arrière-plan reçue :', payload);

    const rawTitle =
      payload?.notification?.title ||
      payload?.data?.title ||
      "KONAN";

    const title = String(rawTitle)
      .replace(/^(?:Notification\s*complice|Notification\s*énervée|Parent\s*énervé|Alerte|Notification)\s*[:\-–—]?\s*/i, '')
      .trim() || "KONAN";

    const body =
      payload?.notification?.body ||
      payload?.data?.body ||
      "C’est l’heure de poser le téléphone deux secondes. Viens te concentrer, je compte sur toi ! 👊📚";

    const notificationOptions = {
      body,
      icon: "/cube-icon.png",
      badge: "/cube-badge.png",
      tag: payload?.data?.tag || "konan-study-reminder",
      vibrate: [500, 250, 500, 250, 500],
      renotify: true,
      sound: "default",
      requireInteraction: true,
      priority: "high",
      data: {
        url: payload?.data?.url || "/",
        sessionId: payload?.data?.sessionId,
        ...payload?.data,
      },
    };

    return self.registration.showNotification(title, notificationOptions);
  });
}

// Écouteur Web Push natif standard (W3C Push API) pour réveiller le téléphone
// même quand l'application est totalement fermée et que l'écran est verrouillé
self.addEventListener('push', (event) => {
  let title = 'KONAN';
  let body = 'C’est l’heure de poser le téléphone deux secondes. Viens te concentrer, je compte sur toi ! 👊📚';
  let tag = 'konan-study-alert';
  let customData = { url: '/' };

  if (event.data) {
    try {
      const data = event.data.json();
      title = data.title || data.notification?.title || data.data?.title || 'KONAN';
      body = data.body || data.notification?.body || data.data?.body || body;
      tag = data.tag || data.data?.tag || 'konan-study-alert';
      customData = data.data || { url: data.url || '/' };
    } catch (e) {
      body = event.data.text() || body;
    }
  }

  const cleanTitle = String(title)
    .replace(/^(?:Notification\s*complice|Notification\s*énervée|Parent\s*énervé|Alerte|Notification)\s*[:\-–—]?\s*/i, '')
    .trim() || 'KONAN';
  const cleanBody = String(body)
    .replace(/^(?:Notification\s*complice|Notification\s*énervée|Parent\s*énervé|Alerte|Notification)\s*[:\-–—]?\s*/i, '')
    .trim();

  const options = {
    body: cleanBody,
    icon: '/cube-icon.png',
    badge: '/cube-badge.png',
    vibrate: [500, 250, 500, 250, 500],
    sound: 'default',
    tag,
    renotify: true,
    requireInteraction: true,
    priority: 'high',
    data: customData,
  };

  event.waitUntil(self.registration.showNotification(cleanTitle, options));
});

// Map des timers de rappels locaux planifiés (déclenchés 5 min avant même en arrière-plan)
const scheduledTimers = new Map();

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
    return;
  }

  if (event.data && event.data.type === 'SCHEDULE_UPCOMING_REMINDERS') {
    const reminders = event.data.reminders;
    if (!Array.isArray(reminders)) return;

    // Nettoyer les anciens timers
    for (const [, timer] of scheduledTimers.entries()) {
      clearTimeout(timer);
    }
    scheduledTimers.clear();

    const now = Date.now();
    reminders.forEach((rem) => {
      // rem.targetTimestamp est l'horodatage exact correspondant à (startTime - 5 minutes)
      const delay = rem.targetTimestamp - now;
      if (delay > 0 && delay < 24 * 3600 * 1000) {
        const notifOptions = {
          body: rem.body,
          icon: '/cube-icon.png',
          badge: '/cube-badge.png',
          tag: rem.tag || 'konan-study-reminder',
          vibrate: [300, 150, 300],
          renotify: true,
          data: { url: '/', sessionId: rem.sessionId, ...(rem.data || {}) },
        };

        // Si le navigateur / smartphone supporte Notification Triggers au niveau de l'OS :
        if ('showTrigger' in Notification.prototype && typeof TimestampTrigger !== 'undefined') {
          try {
            notifOptions.showTrigger = new TimestampTrigger(rem.targetTimestamp);
            self.registration.showNotification(rem.title || 'KONAN', notifOptions);
            return;
          } catch (triggerErr) {
            console.warn('[firebase-messaging-sw.js] Notification Triggers non disponible, repli sur timer actif :', triggerErr);
          }
        }

        const timerId = setTimeout(() => {
          self.registration.showNotification(rem.title || 'KONAN', notifOptions);
          scheduledTimers.delete(rem.id);
        }, delay);
        scheduledTimers.set(rem.id, timerId);
      }
    });
    console.log(`[firebase-messaging-sw.js] ${scheduledTimers.size} rappels d'étude (5 min avant) armés avec succès.`);
  }
});

// Clic sur la notification : ouvre ou focus directement l'application KONAN
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = event.notification.data?.url || '/';

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          if ('navigate' in client && targetUrl && targetUrl !== '/') {
            client.navigate(targetUrl);
          }
          return client.focus();
        }
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow(targetUrl);
      }
    })
  );
});

// Événement fetch : Réseau en priorité absolue pour le HTML et version.json
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // version.json et le Service Worker doivent TOUJOURS être cherchés sur le réseau sans aucun cache
  if (url.pathname === '/version.json' || url.pathname.includes('firebase-messaging-sw.js') || url.pathname.includes('sw.js')) {
    event.respondWith(fetch(event.request, { cache: 'no-store' }));
    return;
  }

  // Pour les pages (HTML / Navigation PWA), toujours le réseau en priorité pour charger les dernières mises à jour
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request, { cache: 'no-cache' })
        .catch(() => caches.match(event.request).then((res) => res || caches.match('/index.html')))
    );
    return;
  }

  // Pour les autres requêtes (assets hachés, images), réseau d'abord avec repli cache si hors ligne
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
