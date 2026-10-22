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
 * 3. Icone et Badge : Silhouette et face du CUBE KONAN avec la lettre K (/cube-icon.png et /cube-badge.png).
 * 4. Durées dynamiques : les minutes indiquées reflètent la durée réelle de la session (ex: 25m, 45m).
 * 5. Timing strict : l'alerte pré-session part STRICTEMENT 5 minutes avant (jamais après le début).
 * 6. Règle absolue du rattrapage : tout ce qui est manqué doit être rattrapé LE JOUR MÊME avant minuit. Aucun report au lendemain.
 */

// ============================================================================
// TEMPLATES OFFICIELS KONAN (Directives Utilisateur Strictes)
// ============================================================================

// 1. Avant la séance (5 minutes avant)
export const BEFORE_SESSION_TEMPLATES = [
  (sub: string, dur: number = 25) => `C’est l’heure de poser le téléphone deux secondes. Prends ton cahier de ${sub}, ${dur} minutes bien concentré et on en parle plus. Je compte sur toi ! 👊📚`,
  (sub: string, _dur: number = 25) => `Petit rappel entre nous : ta session de ${sub} démarre dans 5 minutes. Fais ça proprement pour ta propre fierté, ne traîne pas. ✨`,
  (sub: string, _dur: number = 25) => `Tu te souviens pourquoi on s’est lancés là-dedans ? ${sub} commence tout de suite. Lève-toi, bois un peu d’eau et installe-toi. 🤍`,
];

// 2. Premier créneau sauté (manqué ou oublié)
export const FIRST_MISSED_TEMPLATES = [
  (sub: string, _dur: number = 25) => `Tu es où comme ça ? Tu devais être sur ${sub}. Ne commence pas à glisser sur les réseaux, viens faire au moins l'essentiel maintenant. 👀`,
  (sub: string, dur: number = 25) => `Je te vois, tu fuis le cours de ${sub} ? 😂 Reviens t'asseoir ${dur} minutes, ne laisse pas la paresse gagner la journée.`,
  (_sub: string, _dur: number = 25) => `Pardon, ne commence pas à négliger. On avait dit qu'on assurait aujourd'hui. Ouvre ton cours tout de suite, il est encore temps ! ⏳`,
];

// 3. Plusieurs créneaux manqués dans la journée (3 ou 4 sautés)
export const MULTIPLE_MISSED_TEMPLATES = [
  (_sub: string, _dur: number = 25) => `Franchement, tu penses que les résultats vont tomber du ciel ? Tu as laissé 4 créneaux passer aujourd'hui ! C'est ce soir qu'on rattrape ça ou c'est mort pour de bon. Lève-toi et va bosser, fais-moi honneur ! 😤`,
  (_sub: string, _dur: number = 25) => `Tu as sauté presque toute ta journée. Tu crois que c'est un jeu ? Demain c'est un autre jour, ce qui est perdu aujourd'hui ne reviendra pas. Assieds-toi ce soir et sauve ce qui peut l'être ! 🤦‍♂️`,
  (sub: string, _dur: number = 25) => `Tu me déçois un peu là. Tout le monde compte sur toi, Je m'inquiète pour ta reussite, et toi tu laisses ${sub} en l'air ? Rebranche-toi tout de suite, il reste encore quelques heures avant ce soir pour rattraper le coup. 🛑`,
];

// 4. Le rattrapage du soir (Dernière chance avant minuit)
export const EVENING_LAST_CHANCE_TEMPLATES = [
  (_sub: string, dur: number = 25) => `Écoute-moi bien : minuit arrive. Ce que tu n’as pas étudié aujourd’hui, c’est classé sans suite, pas de report sur demain. Prends ${dur} minutes chrono maintenant pour sauver l'honneur de ta journée. ⏰🔥`,
  (sub: string, _dur: number = 25) => `Dernier appel de la soirée. Tu as raté des séances plus tôt, mais tu peux encore te coucher la tête haute si tu rattrapes ${sub} maintenant. Montre-moi ce que tu as dans le ventre ! 💪`,
];

// 5. Séance de rattrapage reportée (dès que le créneau est déplacé à une nouvelle heure)
export const RESCHEDULED_SESSION_TEMPLATES = [
  (sub: string, newTime: string, _dur: number = 25) => `Ta séance de ${sub} a été reportée à ${newTime}. Viens rattraper ton retard aujourd'hui avant minuit, on ne lâche rien ! ⏳👊`,
  (sub: string, newTime: string, _dur: number = 25) => `Tu as sauté ta session de ${sub} ? Je ne te laisse pas abandonner : je l'ai replacée à ${newTime}. Sois au rendez-vous ce soir ! 👊`,
  (sub: string, newTime: string, dur: number = 25) => `Pardon, ne commence pas à négliger. Ta séance de ${sub} t'attend à ${newTime} pour ${dur} minutes bien concentré. Assure ta journée ! ✨`,
];

// 6. Rappel 5 minutes avant la séance de rattrapage
export const CATCHUP_5M_TEMPLATES = [
  (sub: string, newTime: string, dur: number = 25) => `C’est l’heure de ton rattrapage de ${sub} ! Ça commence dans 5 minutes (à ${newTime}). ${dur} minutes et l'honneur est sauf ! 👊📚`,
  (sub: string, newTime: string, _dur: number = 25) => `Petit rappel pour ton rattrapage : ta session de ${sub} démarre dans 5 minutes (à ${newTime}). Ne traîne pas, montre ce que tu as dans le ventre ! ✨`,
];

// 7. Rattrapage oublié / manqué après l'heure
export const CATCHUP_MISSED_TEMPLATES = [
  (sub: string, newTime: string, _dur: number = 25) => `Tu as oublié ton rattrapage de ${sub} à ${newTime} ? Minuit approche, ne laisse pas la paresse gagner la journée. Ouvre ton cours tout de suite ! ⏳`,
  (sub: string, _newTime: string, dur: number = 25) => `Je te vois, tu fuis encore le rattrapage de ${sub} ? 😂 Viens t'asseoir ${dur} minutes, il est encore temps avant minuit ! 👀`,
];

/**
 * Sélecteur pseudo-aléatoire stable ou indexé pour les messages avec durée dynamique
 */
function pickTemplate(
  templates: ((sub: string, dur: number) => string)[],
  sub: string,
  duration: number = 25,
  index?: number
): string {
  if (typeof index === 'number' && index >= 0) {
    const fn = templates[index % templates.length];
    return fn(sub, duration);
  }
  const randomFn = templates[Math.floor(Math.random() * templates.length)];
  return randomFn(sub, duration);
}

function pickTimeTemplate(
  templates: ((sub: string, time: string, dur: number) => string)[],
  sub: string,
  timeStr: string,
  duration: number = 25,
  index?: number
): string {
  if (typeof index === 'number' && index >= 0) {
    const fn = templates[index % templates.length];
    return fn(sub, timeStr, duration);
  }
  const randomFn = templates[Math.floor(Math.random() * templates.length)];
  return randomFn(sub, timeStr, duration);
}

export function getUpcoming5mMessage(subject: string, duration: number = 25, index?: number): string {
  return pickTemplate(BEFORE_SESSION_TEMPLATES, subject, duration, index);
}

export function getFirstMissedMessage(subject: string, duration: number = 25, index?: number): string {
  return pickTemplate(FIRST_MISSED_TEMPLATES, subject, duration, index);
}

export function getMultipleMissedMessage(subject: string, duration: number = 25, index?: number): string {
  return pickTemplate(MULTIPLE_MISSED_TEMPLATES, subject, duration, index);
}

export function getEveningLastChanceMessage(subject: string, duration: number = 25, index?: number): string {
  return pickTemplate(EVENING_LAST_CHANCE_TEMPLATES, subject, duration, index);
}

export function getRescheduledSessionMessage(subject: string, newTime: string, duration: number = 25, index?: number): string {
  return pickTimeTemplate(RESCHEDULED_SESSION_TEMPLATES, subject, newTime, duration, index);
}

export function getCatchup5mMessage(subject: string, newTime: string, duration: number = 25, index?: number): string {
  return pickTimeTemplate(CATCHUP_5M_TEMPLATES, subject, newTime, duration, index);
}

export function getCatchupMissedMessage(subject: string, newTime: string, duration: number = 25, index?: number): string {
  return pickTimeTemplate(CATCHUP_MISSED_TEMPLATES, subject, newTime, duration, index);
}

/**
 * Génère le message du Compagnon selon le contexte (nombre de créneaux manqués, soirée, durée réelle)
 */
export function generateKonanCompanionMessage(
  missedCount: number,
  missedSubject: string,
  isEvening: boolean = false,
  duration: number = 25
): string {
  if (isEvening && missedCount > 0) {
    return getEveningLastChanceMessage(missedSubject, duration);
  }
  if (missedCount >= 3) {
    return getMultipleMissedMessage(missedSubject, duration);
  }
  if (missedCount >= 1) {
    return getFirstMissedMessage(missedSubject, duration);
  }
  return getUpcoming5mMessage(missedSubject, duration);
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
 * Elle apparaît dans le volet de notification / l'écran de verrouillage du smartphone avec le CUBE KONAN (et lettre K).
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
  durationMinutes: number = 25,
  userTier: PlanTier = 'free'
): boolean {
  if (userTier === 'free') {
    throw new SubscriptionForbiddenError(
      'Les notifications de rappel d’étude sont réservées aux membres Pro',
      'pro'
    );
  }

  const message = getUpcoming5mMessage(subjectName, durationMinutes);
  sendPhoneNotification(
    `KONAN ✦ ${subjectName}`,
    message,
    `study-reminder-5m-${subjectName}`
  );
  return true;
}

export const sendStudyReminder30mNotification = sendStudyReminder5mNotification;

/**
 * Envoie immédiatement une notification informant l'étudiant que sa séance
 * non faite a été reportée / décalée pour rattrapage plus tard dans la journée.
 * STRICTEMENT RÉSERVÉ AUX MEMBRES PRO / PLUS.
 */
export function sendSessionRescheduledNotification(
  subjectName: string,
  newStartTime: string,
  _originalStartTime?: string,
  durationMinutes: number = 25,
  userTier: PlanTier = 'free'
): boolean {
  if (userTier === 'free') {
    return false;
  }

  const message = getRescheduledSessionMessage(subjectName, newStartTime, durationMinutes);
  sendPhoneNotification(
    `KONAN ✦ ${subjectName}`,
    message,
    `study-rescheduled-${subjectName}-${newStartTime}`
  );
  return true;
}

/**
 * Transmet au Service Worker la liste exacte des séances du jour (normales et rattrapages)
 * pour qu'il déclenche les alertes 5 minutes avant même si l'application est en arrière-plan.
 */
export function syncRemindersWithServiceWorker(
  sessions: StudySession[],
  subjects: Subject[],
  userTier: PlanTier = 'free'
): void {
  if (userTier === 'free' || typeof window === 'undefined' || !('serviceWorker' in navigator)) return;
  if (!navigator.serviceWorker.controller) return;

  const now = new Date();
  const currentDayOfWeek = now.getDay() === 0 ? 6 : now.getDay() - 1;
  const todaysSessions = sessions.filter(s => s.dayOfWeek === currentDayOfWeek && !s.completed);

  const reminders = todaysSessions.map(session => {
    const [h, m] = session.startTime.split(':').map(Number);
    const sessionDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m, 0, 0);
    // Strictement 5 minutes avant le début de la séance :
    const targetTimestamp = sessionDate.getTime() - 5 * 60 * 1000;
    const subject = subjects.find(s => s.id === session.subjectId);
    const subjectName = subject?.name || session.title || 'tes cours';
    const duration = session.durationMinutes || 25;
    const isCatchup = Boolean(session.isRescheduledToday || session.rescheduledReason);

    const title = isCatchup ? `KONAN ✦ Rattrapage ${subjectName}` : `KONAN ✦ ${subjectName}`;
    const body = isCatchup 
      ? getCatchup5mMessage(subjectName, session.startTime, duration)
      : getUpcoming5mMessage(subjectName, duration);

    return {
      id: `${session.id}_5m`,
      sessionId: session.id,
      targetTimestamp,
      title,
      body,
      tag: isCatchup ? `catchup-alert-5m-${session.id}` : `study-alert-5m-${session.id}`,
    };
  }).filter(r => r.targetTimestamp > Date.now());

  if (reminders.length > 0) {
    try {
      navigator.serviceWorker.controller.postMessage({
        type: 'SCHEDULE_UPCOMING_REMINDERS',
        reminders,
      });
    } catch (err) {
      console.warn('[Reminders] Erreur postMessage au Service Worker :', err);
    }
  }
}

/**
 * Vérifie les créneaux d'étude du jour et déclenche automatiquement
 * les notifications selon une COORDINATION STRICTE :
 * 1. Si toutes les séances sont déjà validées (completed: true) ou cycle terminé aujourd'hui : SILENCE TOTAL (0 notification).
 * 2. Au MAXIMUM 1 SEULE NOTIFICATION par vérification (aucun flood ni notifications multiples simultanées).
 * 3. Hiérarchie ordonnée :
 *    - Priorité 1 : Séance débutant dans exactement 5 minutes (strictement 4-6 min avant, jamais après début).
 *    - Priorité 2 : Rattrapage du soir (dernière chance avant minuit, 21h00 à 23h50).
 *    - Priorité 3 : Alerte plusieurs créneaux manqués dans la journée (>= 3 séances sautées).
 *    - Priorité 4 : Alerte créneau sauté (au plus 1 seule alerte, pas de cumul).
 * 4. Cooldown anti-spam de 15 minutes entre deux notifications de retard.
 */
export function checkAndDispatchStudyReminders(
  sessions: StudySession[],
  subjects: Subject[],
  userTier: PlanTier = 'free',
  cycleCompletedDate?: string
): void {
  if (userTier === 'free' || !isPhoneNotificationSupported()) return;
  if (!sessions || sessions.length === 0) return;

  const now = new Date();
  const todayStr = now.toISOString().slice(0, 10);

  // RÈGLE ABSOLUE : Si le cycle d'étude a été complété aujourd'hui,
  // SILENCE TOTAL ! L'étudiant a déjà validé ses révisions.
  if (cycleCompletedDate === todayStr) {
    return;
  }

  const currentDayOfWeek = now.getDay() === 0 ? 6 : now.getDay() - 1; // 0=Lundi..6=Dimanche
  const todaysSessions = sessions.filter(s => s.dayOfWeek === currentDayOfWeek);
  if (todaysSessions.length === 0) return;

  // Si toutes les séances du jour sont validées (completed: true), AUCUNE notification !
  const uncompletedToday = todaysSessions.filter(s => !s.completed);
  if (uncompletedToday.length === 0) {
    return;
  }

  // Armer le Service Worker en arrière-plan avec les créneaux non complétés
  syncRemindersWithServiceWorker(sessions, subjects, userTier);

  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const dateKey = todayStr;

  // Clé anti-doublon et anti-flood
  const notifiedStorageKey = `konan_notified_reminders_${dateKey}`;
  let notifiedIds: string[] = [];
  try {
    const raw = sessionStorage.getItem(notifiedStorageKey);
    if (raw) notifiedIds = JSON.parse(raw);
  } catch {}

  const markNotified = (id: string) => {
    notifiedIds.push(id);
    try {
      sessionStorage.setItem(notifiedStorageKey, JSON.stringify(notifiedIds));
      sessionStorage.setItem('konan_last_reminder_time', String(Date.now()));
    } catch {}
  };

  const lastReminderTime = Number(sessionStorage.getItem('konan_last_reminder_time') || '0');
  const isCooldownActive = Date.now() - lastReminderTime < 15 * 60 * 1000;

  // =========================================================================
  // HIÉRARCHIE DE COORDINATION STRICTE : AU MAXIMUM 1 SEULE NOTIFICATION
  // =========================================================================

  // ÉTAPE 1 (PRIORITÉ ABSOLUE) : Séance débutant dans exactement 5 minutes (diffMinutes entre 4 et 6)
  for (const session of uncompletedToday) {
    const [h, m] = session.startTime.split(':').map(Number);
    const sessionStartMinutes = h * 60 + (m || 0);
    const diffMinutes = sessionStartMinutes - currentMinutes;

    if (diffMinutes >= 4 && diffMinutes <= 6) {
      const alert5mId = `${session.id}_5m_${session.startTime}`;
      if (!notifiedIds.includes(alert5mId)) {
        const subject = subjects.find(sub => sub.id === session.subjectId);
        const subjectName = subject?.name || session.title || 'tes cours';
        const duration = session.durationMinutes || 25;
        const isCatchup = Boolean(session.isRescheduledToday || session.rescheduledReason);

        const title = isCatchup ? `KONAN ✦ Rattrapage ${subjectName}` : `KONAN ✦ ${subjectName}`;
        const body = isCatchup 
          ? getCatchup5mMessage(subjectName, session.startTime, duration)
          : getUpcoming5mMessage(subjectName, duration);

        sendPhoneNotification(title, body, `study-alert-5m-${session.id}`);
        markNotified(alert5mId);
        return; // ARRÊT STRICT : 1 seule notification coordonnée !
      }
    }
  }

  // Si le cooldown anti-spam est actif, ne pas envoyer d'alerte de retard supplémentaire
  if (isCooldownActive) {
    return;
  }

  // ÉTAPE 2 : Rattrapage du soir (Dernière chance avant minuit, 21h00 à 23h50)
  const isEvening = currentMinutes >= 1260 && currentMinutes < 1435;
  const eveningAlertKey = `evening_last_chance_${dateKey}`;
  if (isEvening && uncompletedToday.length > 0 && !notifiedIds.includes(eveningAlertKey)) {
    const firstSession = uncompletedToday[0];
    const firstSubject = subjects.find(sub => sub.id === firstSession.subjectId)?.name || firstSession.title || 'tes cours';
    const duration = firstSession.durationMinutes || 25;
    const body = getEveningLastChanceMessage(firstSubject, duration);
    sendPhoneNotification('KONAN', body, `study-evening-last-chance-${dateKey}`);
    markNotified(eveningAlertKey);
    return; // ARRÊT STRICT : 1 seule notification coordonnée !
  }

  // ÉTAPE 3 : Alertes créneaux multiples manqués dans la journée (>= 3 séances sautées)
  const pastPendingToday = uncompletedToday.filter(session => {
    const [h, m] = session.startTime.split(':').map(Number);
    const startMin = h * 60 + (m || 0);
    return currentMinutes > startMin + 15;
  });
  const missedCount = pastPendingToday.length;

  const multipleMissedKey = `multiple_missed_${dateKey}`;
  if (missedCount >= 3 && !isEvening && !notifiedIds.includes(multipleMissedKey)) {
    const firstSession = pastPendingToday[0];
    const firstSubject = subjects.find(sub => sub.id === firstSession.subjectId)?.name || firstSession.title || 'tes cours';
    const body = getMultipleMissedMessage(firstSubject);
    sendPhoneNotification(`KONAN ✦ ${firstSubject}`, body, `study-multiple-missed-${dateKey}`);
    markNotified(multipleMissedKey);
    return; // ARRÊT STRICT : 1 seule notification coordonnée !
  }

  // ÉTAPE 4 : Alerte unique pour le créneau sauté le plus récent (au maximum 1 alerte, pas de cumul)
  if (missedCount > 0 && missedCount < 3 && !isEvening) {
    for (const session of pastPendingToday) {
      const isCatchup = Boolean(session.isRescheduledToday || session.rescheduledReason);
      const missedKey = isCatchup 
        ? `${session.id}_catchup_missed_${session.startTime}`
        : `${session.id}_first_missed`;

      if (!notifiedIds.includes(missedKey)) {
        const subject = subjects.find(sub => sub.id === session.subjectId);
        const subjectName = subject?.name || session.title || 'tes cours';
        const duration = session.durationMinutes || 25;

        const title = isCatchup ? `KONAN ✦ Rattrapage ${subjectName}` : `KONAN ✦ ${subjectName}`;
        const body = isCatchup
          ? getCatchupMissedMessage(subjectName, session.startTime, duration)
          : getFirstMissedMessage(subjectName, duration);

        sendPhoneNotification(title, body, `study-missed-${session.id}`);
        markNotified(missedKey);
        return; // ARRÊT STRICT : 1 seule notification coordonnée !
      }
    }
  }
}
