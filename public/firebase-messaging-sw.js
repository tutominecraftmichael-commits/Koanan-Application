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

    const title =
      payload?.notification?.title ||
      payload?.data?.title ||
      "KONAN ✦ Rappel d'étude";

    const body =
      payload?.notification?.body ||
      payload?.data?.body ||
      "C'est l'heure de ta séance de révision. Viens travailler et valider ton créneau !";

    const notificationOptions = {
      body,
      icon: "/logo-konan.png",
      badge: "/logo-konan.png",
      tag: payload?.data?.tag || "konan-study-reminder",
      data: {
        url: payload?.data?.url || "/",
        sessionId: payload?.data?.sessionId,
        ...payload?.data,
      },
    };

    return self.registration.showNotification(title, notificationOptions);
  });
}

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
