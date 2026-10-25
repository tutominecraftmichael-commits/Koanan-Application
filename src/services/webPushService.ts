/**
 * KONAN AI - Service Web Push Standard (W3C Push API + VAPID)
 * 
 * Permet l'envoi de notifications push fiables même lorsque l'application
 * est TOTALEMENT FERMÉE et le téléphone en veille.
 */

import { db } from '../lib/firebase';
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
export async function subscribeToWebPush(uid?: string): Promise<{ success: boolean; error?: string }> {
  if (!isWebPushSupported()) {
    return { success: false, error: 'Web Push non supporté sur cet appareil' };
  }

  try {
    // 1. Demande de permission si pas encore accordée
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      return { success: false, error: 'Permission refusée par l\'utilisateur' };
    }

    // 2. Récupérer l'enregistrement du Service Worker
    const registration = await navigator.serviceWorker.ready;

    // 3. Obtenir ou créer la souscription Push avec la clé publique VAPID
    let subscription = await registration.pushManager.getSubscription();
    if (!subscription) {
      subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY) as BufferSource,
      });
    }

    const subJson = subscription.toJSON();
    console.log('[KONAN WebPush] Souscription Push active :', subJson);

    // 4. Enregistrer dans Firestore pour le compte Pro
    if (uid && db) {
      const userRef = doc(db, 'users', uid);
      await setDoc(
        userRef,
        {
          webPushSubscription: subJson,
          pushNotificationsEnabled: true,
          webPushUpdatedAt: new Date().toISOString(),
        },
        { merge: true }
      );
      console.log(`[KONAN WebPush] Souscription sauvegardée dans Firestore pour ${uid}`);
    }

    return { success: true };
  } catch (err: any) {
    console.error('[KONAN WebPush] Erreur abonnement push :', err);
    return { success: false, error: err?.message || 'Erreur lors de l\'abonnement push' };
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

    if (uid && db) {
      const userRef = doc(db, 'users', uid);
      await setDoc(
        userRef,
        {
          webPushSubscription: null,
          pushNotificationsEnabled: false,
          webPushUnsubscribedAt: new Date().toISOString(),
        },
        { merge: true }
      );
      console.log(`[KONAN WebPush] Souscription retirée de Firestore pour ${uid}`);
    }
  } catch (err) {
    console.warn('[KONAN WebPush] Erreur désabonnement push :', err);
  }
}
