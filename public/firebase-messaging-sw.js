/* eslint-disable no-undef */
// Service Worker de KONAN : notifications push (Web Push standard + clés VAPID) ET fonctionnement hors ligne.
//
// Il ne charge plus Firebase Messaging : l'ancien script (importé depuis www.gstatic.com) abonnait le
// téléphone avec une AUTRE clé que celle du serveur, ce qui cassait l'abonnement à chaque ouverture,
// et pouvait faire échouer l'installation du Service Worker hors connexion. Le nom du fichier est
// conservé pour que les téléphones déjà inscrits reçoivent cette version automatiquement.
//
// Hors ligne (2026-11-25) : l'interface est gardée dès l'installation, et chaque morceau de l'application
// (pages, cours guidés, QCM : ce sont des fichiers /assets/… dont le nom change à chaque modification)
// est gardé au moment où il est chargé. Un cours ouvert une fois reste donc disponible sans Internet.
// Les fichiers /assets/ ne changent jamais de contenu : ils sont gardés d'une version à l'autre.

const SW_VERSION = 'v-2026-11-25-01';
const SHELL_CACHE = 'konan-shell-v1';   // page d'accueil, icônes, petits fichiers fixes (rafraîchis à chaque version)
const ASSETS_CACHE = 'konan-assets-v1'; // morceaux de l'application et cours (nom unique par contenu)
const KEEP_CACHES = [SHELL_CACHE, ASSETS_CACHE];
const MAX_ASSETS = 400; // au-delà, les plus anciens morceaux sont oubliés
const SHELL_FILES = [
  '/', '/manifest.json', '/konan-splash.js', '/favicon.svg', '/favicon.png',
  '/icons/konan-icon-192.png', '/icons/konan-icon-512.png', '/icons/apple-touch-icon.png',
];
// Même clé publique que l'application (src/services/webPushService.ts)
const VAPID_PUBLIC_KEY = 'BFMUUoknQ9de4CCl1wew4j3SGHtMDBRpk9DhE1vAH3OewLXF8m43FhO26yq1X5eeOZ97jNvbScN_41u10gxy4PY';

function vapidKeyBytes() {
  const padding = '='.repeat((4 - (VAPID_PUBLIC_KEY.length % 4)) % 4);
  const raw = atob((VAPID_PUBLIC_KEY + padding).replace(/-/g, '+').replace(/_/g, '/'));
  return Uint8Array.from(raw, (c) => c.charCodeAt(0));
}

// Le navigateur renouvelle parfois l'abonnement push de lui-même (expiration, mise à jour de Chrome).
// Sans ce relais, l'ancien abonnement meurt côté serveur et les notifications s'arrêtent jusqu'à la
// prochaine ouverture de KONAN. Ici, le nouvel abonnement est transmis au serveur aussitôt, appli fermée.
self.addEventListener('pushsubscriptionchange', (event) => {
  event.waitUntil((async () => {
    const oldEndpoint = event.oldSubscription?.endpoint;
    if (!oldEndpoint) return; // sans l'ancien abonnement, l'application se réinscrira à sa prochaine ouverture
    let sub = event.newSubscription;
    if (!sub) {
      sub = await self.registration.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: vapidKeyBytes() });
    }
    await fetch('/api/push-sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'resubscribe', oldEndpoint, subscription: sub.toJSON() }),
    });
  })().catch(() => {}));
});

/** Réponse qu'on peut garder : réussie, et jamais la page HTML que Vercel renvoie pour un fichier absent. */
function cacheable(response, expectHtml = false) {
  if (!response || !response.ok || response.type === 'opaque') return false;
  const type = response.headers.get('content-type') || '';
  return expectHtml ? type.includes('text/html') : !type.includes('text/html');
}

/** Interface de base : la page d'accueil, ses fichiers de démarrage (JS et CSS) et les icônes. */
async function precacheShell() {
  const shell = await caches.open(SHELL_CACHE);
  const assets = await caches.open(ASSETS_CACHE);
  await Promise.all(SHELL_FILES.map(async (path) => {
    try {
      const res = await fetch(path, { cache: 'no-cache' });
      if (cacheable(res, path === '/')) await shell.put(path === '/' ? '/index.html' : path, res.clone());
      if (path === '/' && res.ok) {
        // Les fichiers de démarrage cités par la page d'accueil (noms uniques /assets/…)
        const html = await res.text();
        const files = [...new Set(html.match(/\/assets\/[^"'\s)]+\.(?:js|css)/g) || [])];
        await Promise.all(files.map(async (file) => {
          try {
            const r = await fetch(file);
            if (cacheable(r)) await assets.put(file, r);
          } catch { /* sera gardé à sa première utilisation */ }
        }));
      }
    } catch { /* hors ligne pendant l'installation : gardé plus tard */ }
  }));
}

/** Garde au plus MAX_ASSETS morceaux (les plus anciens partent d'abord). */
async function trimAssets() {
  const cache = await caches.open(ASSETS_CACHE);
  const keys = await cache.keys();
  for (let i = 0; i < keys.length - MAX_ASSETS; i++) await cache.delete(keys[i]);
}

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(precacheShell().catch(() => {}));
});

self.addEventListener('activate', (event) => {
  // On garde les cours et morceaux déjà enregistrés ; seuls les anciens caches inconnus sont supprimés
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(names.filter((name) => !KEEP_CACHES.includes(name)).map((name) => caches.delete(name))))
      .then(() => trimAssets())
      .catch(() => {})
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
  // Toujours une vraie notification du téléphone (jamais de message affiché dans l'application)
  event.waitUntil((async () => {
    await self.registration.showNotification(msg.title, {
      body: msg.body,
      icon: msg.icon || '/icons/konan-notif-192.png',
      badge: msg.badge || '/icons/konan-badge-96.png',
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

// Règles : la page → réseau d'abord (copie gardée pour le hors ligne) ; /assets/ (application, cours,
// QCM) → copie gardée d'abord, sinon réseau puis gardée ; /api/ (KONE, serveur) jamais intercepté ;
// les autres sites (polices Google, Firebase) jamais interceptés : la politique de sécurité du site
// (connect-src) interdirait au Service Worker de télécharger les polices. Hors ligne, le téléphone
// affiche simplement sa police système.
self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);

  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith('/api/') || url.pathname.startsWith('/__/')) return;

  if (url.pathname === '/version.json' || url.pathname.endsWith('sw.js')) {
    event.respondWith(fetch(request, { cache: 'no-store' }));
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const res = await fetch(request, { cache: 'no-cache' });
        if (cacheable(res, true)) {
          const copy = res.clone();
          caches.open(SHELL_CACHE).then((c) => c.put('/index.html', copy)).catch(() => {});
        }
        return res;
      } catch {
        const cached = (await caches.match('/index.html', { ignoreVary: true })) || (await caches.match(request, { ignoreVary: true }));
        return cached || new Response(
          '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>KONAN</title>'
          + '<body style="font-family:sans-serif;background:#091427;color:#fff;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;text-align:center;padding:24px">'
          + '<div><h1 style="font-size:20px">Pas d’Internet</h1><p style="opacity:.8">Ouvre KONAN une première fois avec une connexion : ensuite, tes cours restent disponibles hors ligne.</p></div></body>',
          { headers: { 'Content-Type': 'text/html; charset=utf-8' } },
        );
      }
    })());
    return;
  }

  if (url.pathname.startsWith('/assets/')) {
    event.respondWith((async () => {
      const cache = await caches.open(ASSETS_CACHE);
      // ignoreVary : le contenu d'un fichier /assets/ ne dépend jamais des en-têtes de la demande
      const cached = await cache.match(request, { ignoreVary: true });
      if (cached) return cached;
      const res = await fetch(request);
      if (cacheable(res)) cache.put(request, res.clone()).catch(() => {});
      return res;
    })());
    return;
  }

  // Autres fichiers du site (icônes, images, sons) : réseau d'abord, copie gardée pour le hors ligne
  event.respondWith((async () => {
    try {
      const res = await fetch(request);
      if (cacheable(res)) {
        const copy = res.clone();
        caches.open(SHELL_CACHE).then((c) => c.put(request, copy)).catch(() => {});
      }
      return res;
    } catch {
      return (await caches.match(request, { ignoreVary: true })) || Response.error();
    }
  })());
});
