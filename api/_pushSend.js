/**
 * Notification immédiate sur les téléphones d'un élève (2026-11-17 : demandes d'ami), même appli fermée.
 * Mêmes appareils et mêmes clés que les rappels de séances (push_queue/device_{uid}, clés VAPID).
 * Jamais bloquant : sans appareil inscrit ou sans clés, rien n'est envoyé et rien ne casse.
 */
let webpush = null;
let vapidReady = null;

async function readyWebPush() {
  if (vapidReady !== null) return vapidReady;
  try {
    webpush = (await import('web-push')).default;
    const publicKey = String(process.env.VAPID_PUBLIC_KEY || process.env.VITE_VAPID_PUBLIC_KEY || '').trim();
    const privateKey = String(process.env.VAPID_PRIVATE_KEY || '').trim();
    const subject = String(process.env.VAPID_SUBJECT || 'mailto:contact@konan-ai.com').trim();
    if (!publicKey || !privateKey) return (vapidReady = false);
    webpush.setVapidDetails(subject, publicKey, privateKey);
    return (vapidReady = true);
  } catch {
    return (vapidReady = false);
  }
}

/** Abonnements push de l'élève (un par appareil), sans doublon. */
export function subscriptionsOfDevice(deviceData) {
  const out = [];
  const seen = new Set();
  const add = (sub) => {
    if (!sub?.endpoint || !sub?.keys?.p256dh || !sub?.keys?.auth || seen.has(sub.endpoint)) return;
    seen.add(sub.endpoint);
    out.push({ endpoint: sub.endpoint, keys: sub.keys });
  };
  const map = deviceData?.subscriptions;
  if (map && typeof map === 'object') for (const entry of Object.values(map)) add(entry?.subscription);
  add(deviceData?.subscription);
  return out;
}

/** Envoie { title, body, tag } sur tous les appareils de l'élève. Renvoie le nombre d'appareils atteints. */
export async function sendPushToUser(db, uid, { title, body, tag, url = '/' }) {
  try {
    if (!(await readyWebPush())) return 0;
    const snap = await db.collection('push_queue').doc(`device_${uid}`).get();
    const subs = snap.exists ? subscriptionsOfDevice(snap.data()) : [];
    if (!subs.length) return 0;
    const payload = JSON.stringify({
      title, body, tag,
      icon: '/icons/konan-notif-192.png',
      badge: '/icons/konan-badge-96.png',
      data: { url, kind: tag },
    });
    let delivered = 0;
    await Promise.all(subs.map(async (subscription) => {
      try {
        await webpush.sendNotification(subscription, payload, { TTL: 3600, urgency: 'normal' });
        delivered += 1;
      } catch {
        // appareil désinscrit ou hors ligne : le message reste dans la cloche de l'appli
      }
    }));
    return delivered;
  } catch {
    return 0;
  }
}
