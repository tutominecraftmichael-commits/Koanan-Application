/**
 * KONAN AI - Service Web Push Standard (W3C Push API + VAPID)
 * 
 * Permet l'envoi de notifications push fiables même lorsque l'application
 * est TOTALEMENT FERMÉE et le téléphone en veille.
 * Enregistrement 100% silencieux et automatique en arrière-plan pour tous les élèves connectés (Gratuit, Pro, Plus).
 */

import { auth, db } from '../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { callPushSync } from './pushApi';

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

export type PushDeviceStatus =
  | 'active'          // abonné : les notifications arrivent même appli fermée
  | 'ask'             // permission jamais demandée (ou abonnement à refaire) : bouton « Activer »
  | 'blocked'         // bloquées dans les réglages du navigateur
  | 'ios-install'     // iPhone / iPad : il faut d'abord ajouter KONAN à l'écran d'accueil
  | 'unsupported';    // navigateur sans notifications push

// Preuve locale que le serveur a enregistré l'abonnement de cet appareil (renouvelée chaque jour)
const REGISTERED_KEY = 'konan_push_registered';
const REREGISTER_MS = 24 * 60 * 60 * 1000;
function isRegisteredOnServer(endpoint: string): boolean {
  try {
    const raw = JSON.parse(localStorage.getItem(REGISTERED_KEY) || 'null');
    return Boolean(raw && raw.key === endpointKey(endpoint) && raw.uid === auth?.currentUser?.uid && Date.now() - raw.at < REREGISTER_MS);
  } catch {
    return false;
  }
}
function markRegisteredOnServer(endpoint: string, uid: string) {
  try {
    localStorage.setItem(REGISTERED_KEY, JSON.stringify({ key: endpointKey(endpoint), uid, at: Date.now() }));
  } catch {
    // stockage indisponible : on réenregistrera simplement à la prochaine ouverture
  }
}

/** Attend que Firebase ait restauré la connexion de l'élève (au plus 8 s). */
async function waitForAuth(): Promise<void> {
  if (!auth || auth.currentUser) return;
  await Promise.race([
    auth.authStateReady().catch(() => {}),
    new Promise((r) => setTimeout(r, 8000)),
  ]);
}

/** État des notifications sur CET appareil (sans rien demander à l'élève). */
export async function getPushDeviceStatus(): Promise<PushDeviceStatus> {
  if (typeof window === 'undefined') return 'unsupported';
  const ua = navigator.userAgent || '';
  const isIOS = /iPhone|iPad|iPod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const standalone = window.matchMedia?.('(display-mode: standalone)').matches || (navigator as any).standalone === true;
  if (!isWebPushSupported()) return isIOS && !standalone ? 'ios-install' : 'unsupported';
  if (Notification.permission === 'denied') return 'blocked';
  if (Notification.permission !== 'granted') return 'ask';
  try {
    const reg = await navigator.serviceWorker.getRegistration('/');
    const sub = await reg?.pushManager.getSubscription();
    if (!sub) return 'ask';
    if (subscriptionUsesOtherKey(sub, urlBase64ToUint8Array(VAPID_PUBLIC_KEY))) return 'ask';
    // « Actif » seulement si le serveur a bien reçu CET abonnement (un abonnement local seul ne sert à rien)
    return isRegisteredOnServer(sub.endpoint) ? 'active' : 'ask';
  } catch {
    return 'ask';
  }
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
      return { success: false, error: permission === 'denied' ? 'Notifications bloquées dans le navigateur' : 'Autorisation pas encore donnée' };
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

    // 5. Enregistrement de l'appareil PAR LE SERVEUR KONAN (/api/push-sync, après vérification du compte)
    await waitForAuth();
    if (!auth?.currentUser) return { success: false, error: 'Connexion au compte pas encore prête, réessaie dans quelques secondes' };
    const userEmail =
      auth.currentUser.email ||
      emailParam ||
      (uidParam && uidParam.includes('@') ? uidParam : undefined);
    const registered = await callPushSync({
      action: 'register',
      subscription: subJson,
      planTier: options.planTier || 'free',
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'Africa/Abidjan',
      email: userEmail ? userEmail.toLowerCase().trim() : '',
      device: navigator.userAgent.slice(0, 120),
    });
    if (!registered.success) {
      return { success: false, error: `Enregistrement de l’appareil impossible (${registered.error})` };
    }
    markRegisteredOnServer(subJson.endpoint || '', auth?.currentUser?.uid || effectiveUid);
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
let silentAttemptRunning = false;
let lastSilentFailureAt = 0;
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

  // Permission déjà accordée : si le serveur a déjà cet appareil (enregistré il y a moins de 24 h), on dépose
  // juste les alertes ; sinon on (ré)enregistre l'appareil en silence. Un échec est retenté 1 minute plus tard.
  if (Notification.permission === 'granted') {
    if ((await getPushDeviceStatus()) === 'active') {
      onSubscribed?.();
      return;
    }
    if (silentAttemptRunning || Date.now() - lastSilentFailureAt < 60 * 1000) return;
    silentAttemptRunning = true;
    try {
      const result = await subscribeToWebPush(uidParam, emailParam, options);
      if (!result.success) {
        lastSilentFailureAt = Date.now();
        console.warn('[AutoWebPush] Enregistrement de l’appareil impossible :', result.error);
      }
    } finally {
      silentAttemptRunning = false;
    }
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
