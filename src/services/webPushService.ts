/**
 * KONAN AI - Service Web Push Standard (W3C Push API + VAPID)
 * 
 * Permet l'envoi de notifications push fiables même lorsque l'application
 * est TOTALEMENT FERMÉE et le téléphone en veille.
 * Enregistrement 100% silencieux et automatique en arrière-plan pour les abonnés Pro.
 */

import { auth, db } from '../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';

export const VAPID_PUBLIC_KEY =
  import.meta.env.VITE_VAPID_PUBLIC_KEY ||
  'BCCK7MYVcGKEJajUGbH_g-5hXdyE81jUbfFhvoFrlaBIu1jAzX1eGGhhCF7LoloWxWsgwklkz6txOobnfxYIpZc';

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
 * et enregistre la souscription dans Firestore (réservé aux abonnés Pro / Plus)
 */
export async function subscribeToWebPush(
  uidParam?: string,
  emailParam?: string
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

    // 3. S'assurer que le Service Worker est bien enregistré
    let registration = await navigator.serviceWorker.getRegistration('/');
    if (!registration) {
      registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js', { scope: '/' });
    }
    await navigator.serviceWorker.ready;

    // 4. Obtenir ou créer la souscription Push avec la clé publique VAPID
    let subscription = await registration.pushManager.getSubscription();
    if (!subscription) {
      subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY) as BufferSource,
      });
    }

    const subJson = subscription.toJSON();
    console.log('[KONAN WebPush] Souscription Push active pour', effectiveUid, subJson.endpoint?.slice(0, 35));

    // 5. Enregistrer dans Firestore pour le compte Pro
    if (db) {
      const userRef = doc(db, 'users', effectiveUid);
      const userEmail =
        auth?.currentUser?.email ||
        emailParam ||
        (uidParam && uidParam.includes('@') ? uidParam : undefined);

      const payload: Record<string, any> = {
        webPushSubscription: subJson,
        pushNotificationsEnabled: true,
        webPushUpdatedAt: new Date().toISOString(),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'Africa/Abidjan',
        timezoneOffsetMinutes: new Date().getTimezoneOffset(),
      };
      if (userEmail) {
        payload.email = userEmail.toLowerCase().trim();
      }

      await setDoc(userRef, payload, { merge: true });
      console.log(`[KONAN WebPush] Souscription sauvegardée dans Firestore pour ${effectiveUid}`);
    }

    return { success: true };
  } catch (err: any) {
    console.error('[KONAN WebPush] Erreur abonnement push :', err);
    return { success: false, error: err?.message || 'Erreur lors de l\'abonnement push' };
  }
}

/**
 * Enregistrement silencieux et automatique du téléphone en arrière-plan
 * Dès qu'un utilisateur en mode Pro ouvre l'application.
 */
let autoSubscribed = false;
export async function autoRegisterWebPushIfPro(
  planTier?: string,
  uidParam?: string,
  emailParam?: string
): Promise<void> {
  if (!isWebPushSupported()) return;

  const effectivePlan = String(planTier || '').toLowerCase().trim();
  if (effectivePlan !== 'pro' && effectivePlan !== 'plus') {
    return;
  }

  // Si la permission est déjà accordée, synchroniser immédiatement sans déranger l'élève
  if (Notification.permission === 'granted') {
    subscribeToWebPush(uidParam, emailParam).catch((err) => {
      console.warn('[AutoWebPush] Erreur synchro silencieuse:', err);
    });
    return;
  }

  // Si la permission est encore en 'default', demander une seule fois lors de la première interaction naturelle de l'élève
  if (Notification.permission === 'default' && !autoSubscribed) {
    autoSubscribed = true;
    const triggerSilentRequest = () => {
      window.removeEventListener('click', triggerSilentRequest);
      window.removeEventListener('touchstart', triggerSilentRequest);
      subscribeToWebPush(uidParam, emailParam).catch(() => {});
    };

    window.addEventListener('click', triggerSilentRequest, { once: true });
    window.addEventListener('touchstart', triggerSilentRequest, { once: true });
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
