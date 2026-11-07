/**
 * KONAN AI - Service Web Push Standard (W3C Push API + VAPID)
 * 
 * Permet l'envoi de notifications push fiables même lorsque l'application
 * est TOTALEMENT FERMÉE et le téléphone en veille.
 * Enregistrement 100% silencieux et automatique en arrière-plan pour tous les élèves connectés (Gratuit, Pro, Plus).
 */

import { auth, db } from '../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';

// Clé PUBLIQUE VAPID (publique par nature). La clé privée correspondante n'existe que côté serveur.
// Rotation du 2026-11-03 : l'ancienne paire était exposée dans le dépôt public.
export const VAPID_PUBLIC_KEY =
  import.meta.env.VITE_VAPID_PUBLIC_KEY ||
  'BFMUUoknQ9de4CCl1wew4j3SGHtMDBRpk9DhE1vAH3OewLXF8m43FhO26yq1X5eeOZ97jNvbScN_41u10gxy4PY';

/** Vrai si l'abonnement existant a été créé avec une autre clé publique (ex. avant une rotation). */
function subscriptionUsesOtherKey(subscription: PushSubscription, currentKey: Uint8Array): boolean {
  const used = subscription.options?.applicationServerKey;
  if (!used) return false; // navigateur qui n'expose pas la clé : on garde l'abonnement
  const usedBytes = new Uint8Array(used);
  if (usedBytes.length !== currentKey.length) return true;
  return usedBytes.some((b, i) => b !== currentKey[i]);
}

/**
 * Convertit une clé VAPID base64url en Uint8Array pour l'API PushManager
 */
function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const buffer = new ArrayBuffer(rawData.length);
  const outputArray = new Uint8Array(buffer);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

/**
 * Vérifie si le navigateur ou le smartphone supporte l'API Push native
 */
export function isWebPushSupported(): boolean {
  return (
    typeof window !== 'undefined' &&
    'serviceWorker' in navigator &&
    'PushManager' in window &&
    'Notification' in window
  );
}

/**
 * Récupère le statut actuel de permission
 */
export function getWebPushPermission(): NotificationPermission {
  if (!isWebPushSupported()) return 'denied';
  return Notification.permission;
}

/**
 * Abonne le téléphone aux notifications Web Push en arrière-plan
 * et enregistre la souscription dans Firestore (tous les élèves connectés)
 */
/** Clé courte et stable d'un abonnement (sert de nom de champ dans Firestore). */
function endpointKey(endpoint: string): string {
  let h = 5381;
  for (let i = 0; i < endpoint.length; i++) h = ((h * 33) ^ endpoint.charCodeAt(i)) >>> 0;
  return `d${h.toString(36)}`;
}

type SubscribeOptions = { planTier?: string; onSubscribed?: () => void };

export async function subscribeToWebPush(
  uidParam?: string,
  emailParam?: string,
  options: SubscribeOptions = {}
): Promise<{ success: boolean; error?: string }> {
  if (!isWebPushSupported()) {
    return { success: false, error: 'Web Push non supporté sur cet appareil' };
  }

  try {
    // 1. Déterminer l'UID Firestore réel de l'utilisateur
    const effectiveUid =
      auth?.currentUser?.uid ||
      (uidParam && !uidParam.includes('@') ? uidParam : null) ||
      (typeof localStorage !== 'undefined' ? localStorage.getItem('konan_active_uid') : null) ||
      uidParam;

    if (!effectiveUid) {
      console.warn('[KONAN WebPush] Aucun UID utilisateur disponible pour enregistrer la souscription');
      return { success: false, error: 'UID manquant' };
    }

    // 2. Vérification / demande de permission
    let permission = Notification.permission;
    if (permission === 'default') {
      try {
        permission = await Notification.requestPermission();
      } catch (pErr) {
        console.warn('[KONAN WebPush] Erreur requestPermission:', pErr);
      }
    }

    if (permission !== 'granted') {
      return { success: false, error: 'Permission refusée par l\'utilisateur' };
    }

    // 3. S'assurer que le Service Worker est bien enregistré (et à jour)
    let registration = await navigator.serviceWorker.getRegistration('/');
    if (!registration) {
      registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js', { scope: '/' });
    } else {
      registration.update().catch(() => {});
    }
    await navigator.serviceWorker.ready;

    // 4. Obtenir ou créer la souscription Push avec la clé publique VAPID
    const serverKey = urlBase64ToUint8Array(VAPID_PUBLIC_KEY);
    let subscription = await registration.pushManager.getSubscription();
    // Abonnement créé avec une ancienne clé (rotation) : le serveur ne pourrait plus l'utiliser -> on le renouvelle
    if (subscription && subscriptionUsesOtherKey(subscription, serverKey)) {
      try {
        await subscription.unsubscribe();
      } catch {
        // échec de désabonnement : on tente quand même un nouvel abonnement
      }
      subscription = null;
    }
    if (!subscription) {
      subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: serverKey as BufferSource,
      });
    }

    const subJson = subscription.toJSON();
    console.log('[KONAN WebPush] Souscription Push active pour', effectiveUid, subJson.endpoint?.slice(0, 35));

    // 5. Enregistrer dans Firestore pour le compte de l'élève
    if (db) {
      const userRef = doc(db, 'users', effectiveUid);
      const userEmail =
        auth?.currentUser?.email ||
        emailParam ||
        (uidParam && uidParam.includes('@') ? uidParam : undefined);

      const payload: Record<string, any> = {
        webPushSubscription: subJson,
        pushNotificationsEnabled: true,
        notificationsEnabled: true,
        webPushUpdatedAt: new Date().toISOString(),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'Africa/Abidjan',
        timezoneOffsetMinutes: new Date().getTimezoneOffset(),
      };
      if (userEmail) {
        payload.email = userEmail.toLowerCase().trim();
      }

      await setDoc(userRef, payload, { merge: true });
      console.log(`[KONAN WebPush] Souscription sauvegardée dans Firestore pour ${effectiveUid}`);

      // Fiche « appareils » lue par le serveur d'envoi : un abonnement par appareil (téléphone, ordinateur…)
      try {
        const deviceQueueRef = doc(db, 'push_queue', `device_${effectiveUid}`);
        await setDoc(
          deviceQueueRef,
          {
            userId: effectiveUid,
            email: userEmail ? userEmail.toLowerCase().trim() : '',
            subscriptions: {
              [endpointKey(subJson.endpoint || '')]: {
                subscription: subJson,
                updatedAt: new Date().toISOString(),
                device: navigator.userAgent.slice(0, 120),
              },
            },
            planTier: options.planTier || 'free',
            notificationsEnabled: true,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'Africa/Abidjan',
            sendAt: 9999999999999, // jamais « à échéance » : cette fiche n'est pas une notification
            sessionId: 'device_sub',
            type: 'device_sub',
            updatedAt: new Date().toISOString(),
          },
          { merge: true }
        );
      } catch (qErr) {
        console.warn('[KONAN WebPush] Notice enregistrement queue device:', qErr);
      }
    }

    options.onSubscribed?.();
    return { success: true };
  } catch (err: any) {
    console.error('[KONAN WebPush] Erreur abonnement push :', err);
    return { success: false, error: err?.message || 'Erreur lors de l\'abonnement push' };
  }
}

/**
 * Enregistrement silencieux et automatique du téléphone en arrière-plan
 * Dès qu'un élève connecté ouvre l'application.
 */
let firstClickArmed = false;
let lastSilentSyncAt = 0;
/**
 * Abonnement automatique du téléphone aux rappels de révision, pour TOUS les élèves (Gratuit, Pro, Plus).
 */
export async function autoRegisterWebPush(
  planTier?: string,
  uidParam?: string,
  emailParam?: string,
  onSubscribed?: () => void
): Promise<void> {
  if (!isWebPushSupported()) return;

  const effectivePlan = String(planTier || 'free').toLowerCase().trim() || 'free';
  const options: SubscribeOptions = { planTier: effectivePlan, onSubscribed };

  // Permission déjà accordée : abonnement silencieux (au plus une fois toutes les 10 minutes)
  if (Notification.permission === 'granted') {
    if (Date.now() - lastSilentSyncAt < 10 * 60 * 1000) {
      onSubscribed?.();
      return;
    }
    lastSilentSyncAt = Date.now();
    subscribeToWebPush(uidParam, emailParam, options).catch((err) => {
      console.warn('[AutoWebPush] Erreur synchro silencieuse:', err);
    });
    return;
  }

  // Permission jamais demandée : Chrome exige un geste de l'élève. On la demande donc au tout premier
  // toucher ou clic dans l'application (aucun menu à ouvrir, aucune étape en plus).
  if (Notification.permission === 'default' && !firstClickArmed) {
    firstClickArmed = true;
    const triggerSilentRequest = () => {
      window.removeEventListener('click', triggerSilentRequest, true);
      window.removeEventListener('touchend', triggerSilentRequest, true);
      subscribeToWebPush(uidParam, emailParam, options).catch(() => {});
    };

    window.addEventListener('click', triggerSilentRequest, { once: true, capture: true });
    window.addEventListener('touchend', triggerSilentRequest, { once: true, capture: true });
  }
}

/**
 * Désabonne le téléphone des notifications Web Push
 * (appelé automatiquement si l'utilisateur repasse en Gratuit)
 */
export async function unsubscribeFromWebPush(uid?: string): Promise<void> {
  if (!isWebPushSupported()) return;

  try {
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.getSubscription();
    if (subscription) {
      await subscription.unsubscribe();
      console.log('[KONAN WebPush] Désabonnement Push effectué sur le périphérique');
    }

    const effectiveUid =
      auth?.currentUser?.uid ||
      (uid && !uid.includes('@') ? uid : null) ||
      (typeof localStorage !== 'undefined' ? localStorage.getItem('konan_active_uid') : null) ||
      uid;

    if (effectiveUid && db) {
      const userRef = doc(db, 'users', effectiveUid);
      await setDoc(
        userRef,
        {
          webPushSubscription: null,
          pushNotificationsEnabled: false,
          webPushUnsubscribedAt: new Date().toISOString(),
        },
        { merge: true }
      );
      console.log(`[KONAN WebPush] Souscription retirée de Firestore pour ${effectiveUid}`);
    }
  } catch (err) {
    console.warn('[KONAN WebPush] Erreur désabonnement push :', err);
  }
}
