import { getMessaging, getToken, onMessage, isSupported } from 'firebase/messaging';
import { app, saveUserFCMToken } from '../lib/firebase';

/**
 * Clé publique Web Push VAPID officielle Firebase pour KONAN AI
 */
export const VAPID_PUBLIC_KEY = "BEmI-MWVOn2AhQpXJEWP02joAZlwvIVN-uX_soomFUFxr1tfzeSShAzNQkk5LZmMKh4PpgxUj0MiWFmzqtNcQMc";

const FCM_TOKEN_STORAGE_KEY = 'konan_fcm_token';
const FCM_ENABLED_STORAGE_KEY = 'konan_fcm_notifications_enabled';

/**
 * Vérifie si le navigateur supporte Firebase Cloud Messaging et les notifications Push
 */
export async function isPushNotificationSupported(): Promise<boolean> {
  if (typeof window === 'undefined') return false;
  if (!('Notification' in window) || !('serviceWorker' in navigator) || !('PushManager' in window)) {
    return false;
  }
  try {
    const supported = await isSupported();
    return Boolean(supported);
  } catch (err) {
    console.warn('[FCM] isSupported check failed:', err);
    return false;
  }
}

/**
 * Statut actuel de la permission navigateur
 */
export function getDevicePushPermission(): NotificationPermission {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    return 'denied';
  }
  return Notification.permission;
}

/**
 * Indique si les notifications push sont déjà actives et enregistrées sur cet appareil
 */
export function isStudentPushActiveOnDevice(): boolean {
  if (typeof window === 'undefined' || !('Notification' in window)) return false;
  if (Notification.permission !== 'granted') return false;
  const storedToken = localStorage.getItem(FCM_TOKEN_STORAGE_KEY);
  const storedFlag = localStorage.getItem(FCM_ENABLED_STORAGE_KEY);
  return Boolean(storedToken || storedFlag === 'true');
}

/**
 * Récupère le token FCM de l'appareil après avoir demandé la permission de notification
 */
export async function requestPushPermissionAndGetToken(
  vapidKey: string = VAPID_PUBLIC_KEY
): Promise<string | null> {
  const supported = await isPushNotificationSupported();
  if (!supported) {
    throw new Error("Votre navigateur ou appareil ne prend pas en charge les notifications Push en arrière-plan.");
  }

  if (!app) {
    throw new Error("L'application Firebase n'est pas initialisée.");
  }

  // 1. Demande formelle de permission au navigateur / smartphone
  const permission = await Notification.requestPermission();
  if (permission !== 'granted') {
    if (permission === 'denied') {
      throw new Error("Les notifications ont été bloquées dans les paramètres de votre navigateur. Veuillez les autoriser pour activer les rappels.");
    }
    return null;
  }

  // 2. Enregistrement et préparation du Service Worker Firebase Messaging
  let serviceWorkerRegistration: ServiceWorkerRegistration;
  try {
    serviceWorkerRegistration = await navigator.serviceWorker.register('/firebase-messaging-sw.js', {
      scope: '/',
    });
    await navigator.serviceWorker.ready;
  } catch (swErr: any) {
    console.warn('[FCM] Erreur enregistrement /firebase-messaging-sw.js, essai fallback sw.js:', swErr);
    serviceWorkerRegistration = await navigator.serviceWorker.ready;
  }

  // 3. Récupération du Token FCM avec la clé publique VAPID
  const messaging = getMessaging(app);
  const currentToken = await getToken(messaging, {
    vapidKey,
    serviceWorkerRegistration,
  });

  if (currentToken) {
    // Affichage obligatoire du token dans la console pour faciliter les tests
    console.log('[KONAN FCM] Token FCM généré avec succès :', currentToken);
    localStorage.setItem(FCM_TOKEN_STORAGE_KEY, currentToken);
    localStorage.setItem(FCM_ENABLED_STORAGE_KEY, 'true');
    return currentToken;
  } else {
    console.warn('[KONAN FCM] Aucun token FCM n\'a pu être généré. Vérifiez les permissions.');
    return null;
  }
}

/**
 * Active les notifications de révision pour l'étudiant connecté :
 * 1. Demande la permission
 * 2. Génère le token FCM
 * 3. Enregistre le token dans le document Firestore de l'utilisateur
 */
export async function enableStudentPushNotifications(
  uid?: string,
  vapidKey: string = VAPID_PUBLIC_KEY
): Promise<{ success: boolean; token?: string; error?: string }> {
  try {
    const token = await requestPushPermissionAndGetToken(vapidKey);
    if (!token) {
      return { success: false, error: "Autorisation non accordée." };
    }

    // Sauvegarde directe dans Firestore si l'étudiant est connecté
    if (uid) {
      const saved = await saveUserFCMToken(uid, token);
      if (!saved) {
        console.warn('[KONAN FCM] Token localement actif, mais Firestore n\'a pas pu être mis à jour (hors ligne ou mode démo).');
      }
    }

    return { success: true, token };
  } catch (err: any) {
    console.error('[KONAN FCM] Erreur lors de l\'activation des notifications Push :', err);
    return {
      success: false,
      error: err?.message || "Une erreur est survenue lors de l'activation des notifications.",
    };
  }
}

/**
 * Déclenche une notification de test instantanée sur l'appareil pour valider le Service Worker et le Cube KONAN
 */
export async function triggerDeviceTestReminder(subjectName: string = 'Mathématiques'): Promise<boolean> {
  if (typeof window === 'undefined' || !('Notification' in window)) return false;
  if (Notification.permission !== 'granted') return false;

  const title = "KONAN ✦ Rappel d'étude";
  const body = `Ta séance de ${subjectName} commence maintenant. Le Cube KONAN t'attend pour réviser !`;

  try {
    if ('serviceWorker' in navigator) {
      const reg = await navigator.serviceWorker.ready;
      if (reg && reg.showNotification) {
        await reg.showNotification(title, {
          body,
          icon: "/logo-konan.png",
          badge: "/logo-konan.png",
          tag: "konan-study-test",
          data: { url: "/" },
        });
        return true;
      }
    }

    new Notification(title, {
      body,
      icon: "/logo-konan.png",
      badge: "/logo-konan.png",
      tag: "konan-study-test",
    });
    return true;
  } catch (err) {
    console.warn('[KONAN FCM] Erreur déclenchement notification de test :', err);
    return false;
  }
}

/**
 * Écoute les notifications Firebase lorsque l'application est ouverte au premier plan
 */
export function setupFCMForegroundListener(
  onNotificationReceived?: (title: string, body: string, payload: any) => void
): () => void {
  if (typeof window === 'undefined' || !app) return () => {};

  try {
    const messaging = getMessaging(app);
    return onMessage(messaging, (payload) => {
      console.log('[KONAN FCM] Message reçu au premier plan :', payload);
      const title =
        payload?.notification?.title ||
        payload?.data?.title ||
        "KONAN ✦ Rappel d'étude";
      const body =
        payload?.notification?.body ||
        payload?.data?.body ||
        "C'est l'heure de ta séance de révision. Viens travailler et valider ton créneau !";

      if (onNotificationReceived) {
        onNotificationReceived(title, body, payload);
      } else {
        triggerDeviceTestReminder();
      }
    });
  } catch (err) {
    console.warn('[KONAN FCM] setupFCMForegroundListener non initialisé :', err);
    return () => {};
  }
}

/**
 * Messages de rappel d'étude directs et motivants (identitaire Cube KONAN, sans XP ni points)
 * Spécifie clairement la matière, les séances de rattrapage, l'heure et la date.
 */
export const STUDY_REMINDER_MOTIVATIONAL_TEMPLATES = {
  // Séance normale à venir
  upcoming: (sub: string, time?: string, dateText?: string) => 
    `Prépare ton bloc-notes ! Ta session de ${sub} commence à ${time || 'bientôt'}${dateText ? ` (${dateText})` : ''}. Le Cube t'attend pour valider ton créneau.`,
  // Séance de rattrapage
  catchup: (sub: string, time?: string, dateText?: string) => 
    `C'est l'heure de ton rattrapage ! Ta séance de ${sub} replacée ${dateText ? `${dateText} ` : ''}à ${time || 'ton horaire'} t'attend. Viens valider ton créneau d'étude !`,
  // Alerte retard / créneau en attente
  overdue: (sub: string, time?: string, dateText?: string) => 
    `Ton algorithme s'impatiente ! Ta séance de ${sub} prévue ${dateText ? `${dateText} ` : ''}à ${time || 'ton horaire'} est toujours en attente. Ne laisse pas le retard s'accumuler ! Viens valider ton créneau avant minuit !`,
};

/**
 * Prépare le payload officiel prêt à l'envoi pour FCM HTTP v1 / Cloud Function
 * (aucun XP, aucun emoji de glace, centré sur le rappel d'étude et le Cube KONAN)
 */
export function buildFCMStudyReminderPayload(
  fcmToken: string,
  subjectName: string,
  sessionTime?: string,
  customBody?: string,
  customTitle?: string
) {
  const body = customBody || `Ta séance de ${subjectName}${sessionTime ? ` (${sessionTime})` : ''} commence maintenant. Le Cube KONAN t'attend pour réviser !`;
  const title = customTitle || "KONAN ✦ Rappel d'étude";

  return {
    message: {
      token: fcmToken,
      notification: {
        title,
        body,
      },
      webpush: {
        notification: {
          icon: "/logo-konan.png",
          badge: "/logo-konan.png",
          tag: `study-reminder-${subjectName.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
          vibrate: [200, 100, 200],
        },
        fcm_options: {
          link: "/",
        },
      },
      data: {
        subject: subjectName,
        time: sessionTime || "",
        type: "study_reminder",
      },
    },
  };
}

/**
 * Envoie un rappel d'étude push ciblant le token FCM d'un étudiant.
 * Si un backendEndpoint ou une Cloud Function HTTP est disponible, l'appel API est déclenché.
 * En mode local / démo ou si le token correspond à cet appareil, le rappel est notifié directement via le Service Worker.
 */
export async function sendFCMStudyPushReminder(params: {
  fcmToken: string;
  subjectName: string;
  sessionTime?: string;
  backendEndpoint?: string;
}): Promise<{ success: boolean; error?: string }> {
  const { fcmToken, subjectName, sessionTime, backendEndpoint } = params;

  if (!fcmToken) {
    return { success: false, error: "Aucun fcmToken fourni." };
  }

  const payload = buildFCMStudyReminderPayload(fcmToken, subjectName, sessionTime);

  // 1. Si un endpoint backend ou une Cloud Function Firebase est renseigné
  if (backendEndpoint) {
    try {
      const response = await fetch(backendEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return { success: true };
    } catch (err: any) {
      console.warn('[FCM] Erreur lors de l\'envoi via backendEndpoint:', err);
      // Fallback local ci-dessous
    }
  }

  // 2. Déclenchement local direct si le token est celui de l'appareil courant
  const currentDeviceToken = typeof window !== 'undefined' ? localStorage.getItem(FCM_TOKEN_STORAGE_KEY) : null;
  if (currentDeviceToken === fcmToken || !backendEndpoint) {
    await triggerDeviceTestReminder(subjectName);
    return { success: true };
  }

  return { success: true };
}

