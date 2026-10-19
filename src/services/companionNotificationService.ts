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

// Templates pour 1 session manquée (ton complice, déculpabilisant)
const SINGLE_MISSED_TEMPLATES: Array<(missedSubject: string, nextSubject: string, newTime: string) => string> = [
  // Le rappel pratique :
  (_missed, nextSubject, newTime) =>
    `⏰ Tu n'as pas pu faire ta séance ? Je l'ai décalée pour toi à ${newTime}. Fais au moins 10 minutes sur ${nextSubject} pour rester dans le bain ! 🚀`,

  // L'encouragement simple :
  (_missed, nextSubject, newTime) =>
    `📚 Zéro pression : j'ai réajusté ton créneau à ${newTime}. Prends 5 petites minutes pour survoler ${nextSubject} avec moi ! 💙`,

  // Le réflexe d'étude :
  (_missed, nextSubject, newTime) =>
    `🔔 Ta session précédente a sauté, mais je l'ai déjà replacée à ${newTime}. Viens valider ${nextSubject} avant la fin de la journée ! 🎯`,

  // Le coup de pouce anti-flemme :
  (_missed, nextSubject, _newTime) =>
    `👀 Je garde ton planning à jour, pas de souci ! Fais juste un petit exercice sur ${nextSubject} et on est bons pour aujourd'hui. 👊`,
];

// Templates pour 2 sessions ou plus manquées (ton motivateur renforcé, coup de boost)
const MULTI_MISSED_TEMPLATES: Array<(missedSubject: string, nextSubject: string, newTime: string, count: number) => string> = [
  // Le sursaut de motivation :
  (_missed, nextSubject, newTime, count) =>
    `🔥 Déjà ${count} séances manquées aujourd'hui : on ne laisse pas le retard s'accumuler ! Ton créneau t'attend à ${newTime}. Fais au moins 15 minutes sur ${nextSubject} maintenant pour protéger ta flamme d'assiduité ! 💪`,

  // L'appel à l'action :
  (_missed, nextSubject, newTime, count) =>
    `🚨 Attention champion : ${count} sessions ont sauté aujourd'hui. Je les ai replacées à ${newTime}, mais c'est le moment de réagir ! Viens valider ${nextSubject} pour reprendre le contrôle immédiat. Tu en es capable ! ⚡`,

  // Le pacte anti-décrochage :
  (_missed, nextSubject, newTime, _count) =>
    `🛡️ Deuxième alerte du jour : ne laisse pas la flemme décider pour toi ! Planning réajusté à ${newTime}. Donne 15 minutes sur ${nextSubject} et finis ta journée avec fierté ! 🎯`,

  // L'énergie combative :
  (_missed, nextSubject, newTime, _count) =>
    `💥 Stop à la flemme ! 2 séances reportées à ${newTime}. Viens faire une session express sur ${nextSubject} dès maintenant : prouve-toi que rien ne peut casser ta discipline ! 👊`,
];

let lastTemplateIndex = -1;

/**
 * Génère le texte de la notification envoyé au téléphone.
 */
export function generateDuolingoCompanionMessage(
  missedCount: number,
  missedSubject: string,
  nextSubject: string,
  newTime: string
): string {
  const isMulti = missedCount >= 2;
  const templates = isMulti ? MULTI_MISSED_TEMPLATES : SINGLE_MISSED_TEMPLATES;

  let nextIndex: number;
  do {
    nextIndex = Math.floor(Math.random() * templates.length);
  } while (templates.length > 1 && nextIndex === lastTemplateIndex);
  lastTemplateIndex = nextIndex;

  if (isMulti) {
    return MULTI_MISSED_TEMPLATES[nextIndex](missedSubject, nextSubject, newTime, missedCount);
  }
  return SINGLE_MISSED_TEMPLATES[nextIndex](missedSubject, nextSubject, newTime);
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
 * Templates de messages motivants inspirés de Duolingo pour les rappels de sessions d'étude
 */
const UPCOMING_REMINDER_TEMPLATES = [
  (sub: string, time: string) => `🎓 C'est l'heure de briller ! Ta séance de ${sub} commence à ${time}. 25 minutes de focus et c'est validé ! ⚡`,
  (sub: string, time: string) => `🔥 Protège ta série ! Ta révision de ${sub} démarre à ${time}. Fais un pas de plus vers la réussite ! 👊`,
  (sub: string, time: string) => `📚 Ne laisse pas le retard s'accumuler : ${sub} commence bientôt (${time}). Viens te surpasser ! 🎯`,
  (sub: string, time: string) => `⚡ Créneau de ${sub} à ${time}. Prépare tes fiches pour une session productive ! 💙`,
  (sub: string, time: string) => `🚀 Mode champion activé ! Session de ${sub} à ${time}. Chaque minute investie rapporte le jour de l'examen ! 💪`,
];

/**
 * Envoie un rappel d'étude programmé avant la session.
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
    `Votre séance commence à ${sessionTime}. Préparez vos cours en toute sérénité ! 🎯`,
    `study-reminder-${subjectName}`
  );
  return true;
}

/**
 * Vérifie les créneaux d'étude du jour et déclenche automatiquement
 * des rappels motivants style Duolingo directement sur le téléphone / navigateur
 * pour les membres PRO / PLUS.
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

  // Storage key pour ne jamais notifier 2 fois la même séance le même jour
  const notifiedStorageKey = `konan_notified_reminders_${dateKey}`;
  let notifiedIds: string[] = [];
  try {
    const raw = sessionStorage.getItem(notifiedStorageKey);
    if (raw) notifiedIds = JSON.parse(raw);
  } catch {}

  const todaysSessions = sessions.filter(s => s.dayOfWeek === currentDayOfWeek && !s.completed);

  todaysSessions.forEach(session => {
    if (notifiedIds.includes(session.id)) return;

    // Calcul de l'heure de début en minutes
    const [h, m] = session.startTime.split(':').map(Number);
    const sessionStartMinutes = h * 60 + (m || 0);
    const diffMinutes = sessionStartMinutes - currentMinutes;

    // Alerte 10 à 15 minutes avant le début de la séance, ou à l'heure exacte (0 à -5 min)
    if ((diffMinutes > 0 && diffMinutes <= 15) || (diffMinutes <= 0 && diffMinutes >= -5)) {
      const subject = subjects.find(sub => sub.id === session.subjectId);
      const subjectName = subject?.name || session.title || 'tes révisions';

      const template = UPCOMING_REMINDER_TEMPLATES[Math.floor(Math.random() * UPCOMING_REMINDER_TEMPLATES.length)];
      const message = template(subjectName, session.startTime);

      sendPhoneNotification(
        subjectName,
        message,
        `study-alert-${session.id}`
      );

      notifiedIds.push(session.id);
      try {
        sessionStorage.setItem(notifiedStorageKey, JSON.stringify(notifiedIds));
      } catch {}
    }
  });
}

