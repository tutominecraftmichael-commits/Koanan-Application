import { SubscriptionForbiddenError } from '../lib/subscriptionGuard';
import type { PlanTier, StudySession, Subject } from '../types';

/**
 * Service de Notifications Téléphone pour KONAN AI
 * 
 * Envoie des messages directs et motivants sur le téléphone de l'étudiant
 * dès qu'une séance est manquée et reportée.
 * 
 * RÈGLES CRUCIALES :
 * 1. Les notifications sont envoyées au TÉLÉPHONE (via l'API Web Notification du système),
 *    et NON affichées sous forme de pop-up encombrante dans l'interface de l'application.
 * 2. L'application demande l'autorisation à l'utilisateur pour autoriser les alertes sur son mobile.
 * 3. AUCUN message n'est envoyé dans l'agenda / calendrier Google.
 */

/**
 * Génère le texte de notification punchy et gradué selon le nombre de séances manquées aujourd'hui :
 * - 1ère fois : déculpabilisant, mentionne l'heure ratée et la nouvelle heure
 * - 2e fois : ton plus ferme "Ça fait la 2e fois que tu ne viens pas bosser !"
 * - 3e fois+ : "L'algorithme surchauffe à force de recalculer les rattrapages ! 🔥"
 */
export function generateDuolingoCompanionMessage(
  missedCount: number,
  missedSubject: string,
  _nextSubject: string,
  newTime: string,
  originalTime?: string
): string {
  if (missedCount <= 1) {
    const origText = originalTime ? ` (prévue à ${originalTime})` : '';
    return `Tu as oublié de faire ${missedSubject}${origText}, mais c'est pas grave ! Je la replace à ${newTime}. Viens faire la séance ! 🎯`;
  }
  if (missedCount === 2) {
    return `Ça fait la 2e fois que tu ne viens pas bosser ! Tu attends quoi pour venir ? ${missedSubject} replacée à ${newTime}. ⚡`;
  }
  // 3e fois ou plus : surchauffe
  return `L'algorithme surchauffe à force de recalculer les rattrapages ! 🔥 Qu'est-ce que tu attends pour venir bosser ?! (${missedSubject} replacée à ${newTime})`;
}

/**
 * Indique si le navigateur / téléphone supporte l'API des notifications.
 */
export function isPhoneNotificationSupported(): boolean {
  return typeof window !== 'undefined' && 'Notification' in window;
}

/**
 * Récupère le statut actuel de permission de notification ('granted', 'denied', 'default').
 */
export function getPhoneNotificationPermission(): NotificationPermission {
  if (!isPhoneNotificationSupported()) return 'denied';
  return Notification.permission;
}

/**
 * Demande formellement l'autorisation à l'utilisateur pour recevoir les notifications sur son téléphone.
 */
export async function requestPhoneNotificationPermission(): Promise<NotificationPermission> {
  if (!isPhoneNotificationSupported()) return 'denied';
  try {
    const permission = await Notification.requestPermission();
    return permission;
  } catch (err) {
    console.warn('Erreur demande permission notification téléphone:', err);
    return 'denied';
  }
}

/**
 * Envoie la notification directement au téléphone de l'utilisateur.
 * Elle apparaît dans le volet de notification / l'écran de verrouillage du smartphone.
 */
export function sendPhoneNotification(title: string, body: string, tag: string = 'konan-study-alert'): void {
  if (!isPhoneNotificationSupported()) return;

  // Nettoyage strict : envoi direct de la notification sans étiquette redondante "Notification complice :"
  const cleanTitle = (title || 'Konan AI')
    .replace(/^Notification\s*complice\s*[:\-–—]?\s*/i, '')
    .replace(/^Notification\s*[:\-–—]?\s*/i, '')
    .trim() || 'Konan AI';

  const cleanBody = (body || '')
    .replace(/^Notification\s*complice\s*[:\-–—]?\s*/i, '')
    .replace(/^Notification\s*[:\-–—]?\s*/i, '')
    .trim();

  if (Notification.permission === 'granted') {
    try {
      if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        navigator.serviceWorker.ready.then(reg => {
          reg.showNotification(cleanTitle, {
            body: cleanBody,
            icon: '/logo-konan.png',
            badge: '/logo-konan.png',
            vibrate: [300, 150, 300],
            tag,
            renotify: true,
          } as NotificationOptions);
        }).catch(() => {
          new Notification(cleanTitle, {
            body: cleanBody,
            icon: '/logo-konan.png',
            badge: '/logo-konan.png',
            tag,
          });
        });
      } else {
        new Notification(cleanTitle, {
          body: cleanBody,
          icon: '/logo-konan.png',
          badge: '/logo-konan.png',
          tag,
        });
      }
    } catch (err) {
      console.warn('Erreur envoi notification téléphone:', err);
    }
  }
}

/**
 * Templates de messages punchy et motivants avec emojis (Audio utilisateur 1 & 2)
 */
export const UPCOMING_REMINDER_TEMPLATES = [
  (sub: string) => `Ta séance de ${sub} débute dans 45 minutes, viens ! 📚`,
  (sub: string, time?: string) => `Ta séance de ${sub} débute dans quelques minutes${time ? ` (à ${time})` : ''}, viens ! 📚`,
];

/**
 * Envoie un rappel d'étude programmé avant la session (45 min ou 5 min avant).
 * STRICTEMENT RÉSERVÉ AUX MEMBRES PRO.
 * Rejette avec SubscriptionForbiddenError si appelé avec un tier 'free'.
 */
export function sendStudyReminder30mNotification(
  subjectName: string,
  sessionTime: string,
  userTier: PlanTier = 'free'
): boolean {
  if (userTier === 'free') {
    throw new SubscriptionForbiddenError(
      'Les notifications de rappel d’étude sont réservées aux membres Pro',
      'pro'
    );
  }

  sendPhoneNotification(
    subjectName,
    `Ta séance de ${subjectName} débute dans 45 minutes (à ${sessionTime}), viens ! 📚`,
    `study-reminder-${subjectName}`
  );
  return true;
}

export const sendStudyReminder5mNotification = sendStudyReminder30mNotification;

/**
 * Vérifie les créneaux d'étude du jour et déclenche automatiquement
 * des rappels punchy directement sur le téléphone / navigateur
 * pour les membres PRO / PLUS (45 minutes et 5 minutes avant la session).
 */
export function checkAndDispatchStudyReminders(
  sessions: StudySession[],
  subjects: Subject[],
  userTier: PlanTier = 'free'
): void {
  if (userTier === 'free' || !isPhoneNotificationSupported()) return;
  if (!sessions || sessions.length === 0) return;

  const now = new Date();
  const currentDayOfWeek = now.getDay() === 0 ? 6 : now.getDay() - 1; // 0=Lundi..6=Dimanche
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const dateKey = now.toISOString().slice(0, 10);

  // Storage key pour ne jamais notifier 2 fois la même alerte
  const notifiedStorageKey = `konan_notified_reminders_${dateKey}`;
  let notifiedIds: string[] = [];
  try {
    const raw = sessionStorage.getItem(notifiedStorageKey);
    if (raw) notifiedIds = JSON.parse(raw);
  } catch {}

  const todaysSessions = sessions.filter(s => s.dayOfWeek === currentDayOfWeek && !s.completed);

  todaysSessions.forEach(session => {
    // Calcul de l'heure de début en minutes
    const [h, m] = session.startTime.split(':').map(Number);
    const sessionStartMinutes = h * 60 + (m || 0);
    const diffMinutes = sessionStartMinutes - currentMinutes;

    const subject = subjects.find(sub => sub.id === session.subjectId);
    const subjectName = subject?.name || session.title || 'tes cours';

    // 1. Alerte 45 minutes avant le début de la séance (Instruction vocale exacte)
    const alert45mId = `${session.id}_45m`;
    if (diffMinutes > 40 && diffMinutes <= 45 && !notifiedIds.includes(alert45mId)) {
      sendPhoneNotification(
        subjectName,
        `Ta séance de ${subjectName} débute dans 45 minutes, viens ! 📚`,
        `study-alert-45m-${session.id}`
      );
      notifiedIds.push(alert45mId);
      try {
        sessionStorage.setItem(notifiedStorageKey, JSON.stringify(notifiedIds));
      } catch {}
    }

    // 2. Alerte 5 minutes avant ou au démarrage
    const alert5mId = `${session.id}_5m`;
    if (((diffMinutes > 0 && diffMinutes <= 5) || (diffMinutes <= 0 && diffMinutes >= -5)) && !notifiedIds.includes(alert5mId)) {
      sendPhoneNotification(
        subjectName,
        `Ta séance de ${subjectName} débute dans 5 minutes, viens ! 📚`,
        `study-alert-5m-${session.id}`
      );
      notifiedIds.push(alert5mId);
      try {
        sessionStorage.setItem(notifiedStorageKey, JSON.stringify(notifiedIds));
      } catch {}
    }
  });

  // -------------------------------------------------------------
  // BILAN HEBDOMADAIRE (Lundi à minuit 00:00) - Règle utilisateur Audio 3
  // "lundi à minuit 00:00 que tu envoies le bilan. Tu lui envoies une notification pour lui dire :
  // 'Ton bilan de la semaine passée est là ! Viens voir ta progression et tes statistiques. 📊'"
  // -------------------------------------------------------------
  const isMonday = currentDayOfWeek === 0; // 0 = Lundi
  const isMidnightStart = currentMinutes <= 30; // 00:00 à 00:30
  const mondayRecapKey = `konan_weekly_recap_sent_${dateKey}`;

  if (isMonday && isMidnightStart) {
    let alreadySent = false;
    try {
      alreadySent = Boolean(localStorage.getItem(mondayRecapKey));
    } catch {}

    if (!alreadySent) {
      sendPhoneNotification(
        '📊 Bilan hebdomadaire disponible !',
        'Ton bilan de la semaine passée est là ! Viens voir ta progression et tes statistiques. 📊',
        `weekly-recap-${dateKey}`
      );
      try {
        localStorage.setItem(mondayRecapKey, 'true');
      } catch {}
    }
  }
}

