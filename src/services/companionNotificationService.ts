import { SubscriptionForbiddenError } from '../lib/subscriptionGuard';
import type { PlanTier, StudySession, Subject } from '../types';

/**
 * Service de Notifications Téléphone pour KONAN AI
 * 
 * Compagnon d'études de l'étudiant :
 * Grand frère dévoué, meilleur ami et allié bienveillant qui croit profondément en lui,
 * mise tout sur sa réussite, et refuse qu'il gâche son avenir par paresse.
 * 
 * RÈGLES STRICTES :
 * 1. Zéro jargon robotique ("Alerte", "Algorithme", "Tâche #12", "Notification complice").
 * 2. Titre épuré : "KONAN" ou "KONAN ✦ {matiere}", aucun préfixe de catégorie.
 * 3. Icone et Badge : Silhouette du CUBE KONAN (/cube-icon.png et /cube-badge.png).
 * 4. Règle absolue du rattrapage : tout ce qui est manqué doit être rattrapé LE JOUR MÊME avant minuit. Aucun report au lendemain.
 */

// ============================================================================
// TEMPLATES OFFICIELS KONAN (Directives Utilisateur Strictes)
// ============================================================================

// 1. Avant la séance (5 minutes avant)
export const BEFORE_SESSION_TEMPLATES = [
  (sub: string) => `C’est l’heure de poser le téléphone deux secondes. Prends ton cahier de ${sub}, 30 minutes bien concentré et on en parle plus. Je compte sur toi ! 👊📚`,
  (sub: string) => `Petit rappel entre nous : ta session de ${sub} démarre dans 5 minutes. Fais ça proprement pour ta propre fierté, ne traîne pas. ✨`,
  (sub: string) => `Tu te souviens pourquoi on s’est lancés là-dedans ? ${sub} commence tout de suite. Lève-toi, bois un peu d’eau et installe-toi. 🤍`,
];

// 2. Premier créneau sauté (manqué ou oublié)
export const FIRST_MISSED_TEMPLATES = [
  (sub: string) => `Tu es où comme ça ? Tu devais être sur ${sub}. Ne commence pas à glisser sur les réseaux, viens faire au moins l'essentiel maintenant. 👀`,
  (sub: string) => `Je te vois, tu fuis le cours de ${sub} ? 😂 Reviens t'asseoir 20 minutes, ne laisse pas la paresse gagner la journée.`,
  (_sub: string) => `Pardon, ne commence pas à négliger. On avait dit qu'on assurait aujourd'hui. Ouvre ton cours tout de suite, il est encore temps ! ⏳`,
];

// 3. Plusieurs créneaux manqués dans la journée (3 ou 4 sautés)
export const MULTIPLE_MISSED_TEMPLATES = [
  (_sub: string) => `Franchement, tu penses que les résultats vont tomber du ciel ? Tu as laissé 4 créneaux passer aujourd'hui ! C'est ce soir qu'on rattrape ça ou c'est mort pour de bon. Lève-toi et va bosser, fais-moi honneur ! 😤`,
  (_sub: string) => `Tu as sauté presque toute ta journée. Tu crois que c'est un jeu ? Demain c'est un autre jour, ce qui est perdu aujourd'hui ne reviendra pas. Assieds-toi ce soir et sauve ce qui peut l'être ! 🤦‍♂️`,
  (sub: string) => `Tu me déçois un peu là. Tout le monde compte sur toi, Je m'inquiète pour ta reussite, et toi tu laisses ${sub} en l'air ? Rebranche-toi tout de suite, il reste encore quelques heures avant ce soir pour rattraper le coup. 🛑`,
];

// 4. Le rattrapage du soir (Dernière chance avant minuit)
export const EVENING_LAST_CHANCE_TEMPLATES = [
  (_sub: string) => `Écoute-moi bien : minuit arrive. Ce que tu n’as pas étudié aujourd’hui, c’est classé sans suite, pas de report sur demain. Prends 30 minutes chrono maintenant pour sauver l'honneur de ta journée. ⏰🔥`,
  (sub: string) => `Dernier appel de la soirée. Tu as raté des séances plus tôt, mais tu peux encore te coucher la tête haute si tu rattrapes ${sub} maintenant. Montre-moi ce que tu as dans le ventre ! 💪`,
];

/**
 * Sélecteur pseudo-aléatoire stable ou indexé pour les messages
 */
function pickTemplate(templates: ((sub: string) => string)[], sub: string, index?: number): string {
  if (typeof index === 'number' && index >= 0) {
    const fn = templates[index % templates.length];
    return fn(sub);
  }
  const randomFn = templates[Math.floor(Math.random() * templates.length)];
  return randomFn(sub);
}

export function getUpcoming5mMessage(subject: string, index?: number): string {
  return pickTemplate(BEFORE_SESSION_TEMPLATES, subject, index);
}

export function getFirstMissedMessage(subject: string, index?: number): string {
  return pickTemplate(FIRST_MISSED_TEMPLATES, subject, index);
}

export function getMultipleMissedMessage(subject: string, index?: number): string {
  return pickTemplate(MULTIPLE_MISSED_TEMPLATES, subject, index);
}

export function getEveningLastChanceMessage(subject: string, index?: number): string {
  return pickTemplate(EVENING_LAST_CHANCE_TEMPLATES, subject, index);
}

/**
 * Génère le message du Compagnon selon le contexte (nombre de créneaux manqués, soirée)
 */
export function generateKonanCompanionMessage(
  missedCount: number,
  missedSubject: string,
  isEvening: boolean = false
): string {
  if (isEvening && missedCount > 0) {
    return getEveningLastChanceMessage(missedSubject);
  }
  if (missedCount >= 3) {
    return getMultipleMissedMessage(missedSubject);
  }
  if (missedCount >= 1) {
    return getFirstMissedMessage(missedSubject);
  }
  return getUpcoming5mMessage(missedSubject);
}

// Rétrocompatibilité
export const generateDuolingoCompanionMessage = (
  missedCount: number,
  missedSubject: string,
  _nextSubject?: string,
  _newTime?: string,
  _originalTime?: string
): string => {
  return generateKonanCompanionMessage(missedCount, missedSubject);
};

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
 * Nettoie le titre d'une notification pour supprimer tout préfixe de catégorie ou robotique
 */
export function sanitizeNotificationTitle(title: string): string {
  const cleaned = (title || 'KONAN')
    .replace(/^(?:Notification\s*complice|Notification\s*énervée|Parent\s*énervé|Alerte|Notification)\s*[:\-–—]?\s*/i, '')
    .trim();
  return cleaned || 'KONAN';
}

/**
 * Envoie la notification directement au téléphone de l'utilisateur.
 * Elle apparaît dans le volet de notification / l'écran de verrouillage du smartphone avec le CUBE KONAN.
 */
export function sendPhoneNotification(title: string, body: string, tag: string = 'konan-study-alert'): void {
  if (!isPhoneNotificationSupported()) return;

  const cleanTitle = sanitizeNotificationTitle(title);
  const cleanBody = (body || '')
    .replace(/^(?:Notification\s*complice|Notification\s*énervée|Parent\s*énervé|Alerte|Notification)\s*[:\-–—]?\s*/i, '')
    .trim();

  if (Notification.permission === 'granted') {
    try {
      const options: any = {
        body: cleanBody,
        icon: '/cube-icon.png',
        badge: '/cube-badge.png',
        vibrate: [300, 150, 300],
        tag,
        renotify: true,
      };

      if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        navigator.serviceWorker.ready.then(reg => {
          reg.showNotification(cleanTitle, options);
        }).catch(() => {
          new Notification(cleanTitle, options);
        });
      } else {
        new Notification(cleanTitle, options);
      }
    } catch (err) {
      console.warn('Erreur envoi notification téléphone:', err);
    }
  }
}

/**
 * Envoie un rappel d'étude 5 minutes avant la séance.
 * STRICTEMENT RÉSERVÉ AUX MEMBRES PRO / PLUS.
 */
export function sendStudyReminder5mNotification(
  subjectName: string,
  _sessionTime?: string,
  userTier: PlanTier = 'free'
): boolean {
  if (userTier === 'free') {
    throw new SubscriptionForbiddenError(
      'Les notifications de rappel d’étude sont réservées aux membres Pro',
      'pro'
    );
  }

  const message = getUpcoming5mMessage(subjectName);
  sendPhoneNotification(
    `KONAN ✦ ${subjectName}`,
    message,
    `study-reminder-5m-${subjectName}`
  );
  return true;
}

export const sendStudyReminder30mNotification = sendStudyReminder5mNotification;

/**
 * Vérifie les créneaux d'étude du jour et déclenche automatiquement
 * les notifications selon les circonstances réelles :
 * 1. 5 minutes avant chaque session
 * 2. Rattrapage du soir (dernière chance avant minuit) entre 21h00 et 23h59
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

  const todaysSessions = sessions.filter(s => s.dayOfWeek === currentDayOfWeek);
  const uncompletedToday = todaysSessions.filter(s => !s.completed);

  // 1. Rappel 5 minutes avant la séance
  uncompletedToday.forEach(session => {
    const [h, m] = session.startTime.split(':').map(Number);
    const sessionStartMinutes = h * 60 + (m || 0);
    const diffMinutes = sessionStartMinutes - currentMinutes;

    const subject = subjects.find(sub => sub.id === session.subjectId);
    const subjectName = subject?.name || session.title || 'tes cours';

    const alert5mId = `${session.id}_5m`;
    if (((diffMinutes > 0 && diffMinutes <= 5) || (diffMinutes <= 0 && diffMinutes >= -5)) && !notifiedIds.includes(alert5mId)) {
      const body = getUpcoming5mMessage(subjectName);
      sendPhoneNotification(
        `KONAN ✦ ${subjectName}`,
        body,
        `study-alert-5m-${session.id}`
      );
      notifiedIds.push(alert5mId);
      try {
        sessionStorage.setItem(notifiedStorageKey, JSON.stringify(notifiedIds));
      } catch {}
    }
  });

  // 2. Rattrapage du soir : Dernière chance avant minuit (21h00 à 23h50)
  // Règle stricte : ce qui n'est pas étudié aujourd'hui est classé sans suite, pas de report sur demain
  const eveningAlertKey = `evening_last_chance_${dateKey}`;
  if (currentMinutes >= 1260 && currentMinutes < 1435 && uncompletedToday.length > 0 && !notifiedIds.includes(eveningAlertKey)) {
    const firstSubject = subjects.find(sub => sub.id === uncompletedToday[0].subjectId)?.name || uncompletedToday[0].title || 'tes cours';
    const body = getEveningLastChanceMessage(firstSubject);
    sendPhoneNotification(
      'KONAN',
      body,
      `study-evening-last-chance-${dateKey}`
    );
    notifiedIds.push(eveningAlertKey);
    try {
      sessionStorage.setItem(notifiedStorageKey, JSON.stringify(notifiedIds));
    } catch {}
  }
}
