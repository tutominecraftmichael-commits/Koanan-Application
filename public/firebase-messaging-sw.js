/* eslint-disable no-undef */
// Service Worker Firebase Cloud Messaging (FCM) en arrière-plan pour KONAN AI
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
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
      vibrate: [300, 150, 300],
      renotify: true,
      data: {
        url: payload?.data?.url || "/",
        sessionId: payload?.data?.sessionId,
        ...payload?.data,
      },
    };

    return self.registration.showNotification(title, notificationOptions);
  });
}

// Map des timers de rappels locaux planifiés (déclenchés 5 min avant même en arrière-plan)
const scheduledTimers = new Map();

self.addEventListener('message', (event) => {
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

// Événement fetch pour l'installabilité PWA sur tous les navigateurs (Chrome, Samsung Internet, Safari, Edge)
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
