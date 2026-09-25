/**
 * Service de Notifications Compagnon Complice (Style Duolingo) - KONAN AI
 * 
 * Envoie des messages courts, directs, bienveillants et motivants lorsque l'utilisateur
 * manque une session d'étude. 
 * 
 * RÈGLE ABSOLUE : Les messages ne sont JAMAIS envoyés dans Google Agenda / Agenda.
 * Ils sont gérés exclusivement in-app et via l'API Web Notification du navigateur.
 */

export interface DuolingoNudgePayload {
  id: string;
  missedCount: number;
  missedSubject: string;
  nextSubject: string;
  rescheduledTime: string;
  message: string;
  isUrgent: boolean;
  nextSessionId?: string;
  timestamp: number;
}

// Templates pour 1 session manquée (ton complice, zéro culpabilité, compagnon d'étude)
const SINGLE_MISSED_TEMPLATES: Array<(missedSubject: string, nextSubject: string, newTime: string) => string> = [
  // Le rappel pratique :
  (_missed, nextSubject, newTime) =>
    `⏰ Tu n'as pas pu faire ta séance ? Je l'ai décalée pour toi à ${newTime}. Fais au moins 10 minutes sur ${nextSubject} pour rester dans le bain ! 🚀`,

  // L'encouragement simple :
  (_missed, nextSubject, newTime) =>
    `📚 Zéro pression : j'ai réajusté ton créneau à ${newTime}. Prends 5 petites minutes pour survoler ${nextSubject} avec moi ! 💙`,

  // Le réflexe d'étude :
  (missedSubject, nextSubject, newTime) =>
    `🔔 Ta session de ${missedSubject} a sauté, mais je l'ai déjà replacée à ${newTime}. Viens valider ${nextSubject} avant la fin de la journée ! 🎯`,

  // Le coup de pouce anti-flemme :
  (_missed, nextSubject, _newTime) =>
    `👀 Je garde ton planning à jour, pas de souci ! Fais juste un petit exercice sur ${nextSubject} et on est bons pour aujourd'hui. 👊`,

  // Variante bonus complice :
  (missedSubject, nextSubject, newTime) =>
    `⚡ Pas d'inquiétude pour ${missedSubject}, c'est reporté à ${newTime} ! Fais un mini-sprint de 5 min sur ${nextSubject} pour garder le rythme ! ✨`,
];

// Templates pour 2 sessions ou plus manquées (ton plus motivateur, brise-l'inertie, protection de la flamme)
const MULTI_MISSED_TEMPLATES: Array<(missedSubject: string, nextSubject: string, newTime: string, count: number) => string> = [
  // L'appel au sursaut d'énergie :
  (_missed, nextSubject, newTime, count) =>
    `🔥 Déjà ${count} séances manquées aujourd'hui : on ne laisse pas le retard s'accumuler ! Ton créneau t'attend à ${newTime}. Fais au moins 15 minutes sur ${nextSubject} maintenant pour protéger ta flamme d'assiduité ! 💪`,

  // Le réveil du champion :
  (_missed, nextSubject, newTime, count) =>
    `🚨 Attention champion : ${count} sessions ont sauté aujourd'hui. Je les ai replacées à ${newTime}, mais c'est le moment de réagir ! Viens valider ${nextSubject} pour reprendre le contrôle immédiat. Tu en es capable ! ⚡`,

  // Le bouclier anti-décrochage :
  (missedSubject, nextSubject, newTime, _count) =>
    `🛡️ Alerte assiduité : ${missedSubject} et ta session précédente ont glissé à ${newTime}. Ne laisse pas la flemme décider pour toi : donne 15 minutes sur ${nextSubject} et finis ta journée avec fierté ! 🎯`,

  // Le coup de boost décisif :
  (_missed, nextSubject, newTime, _count) =>
    `💥 Stop à la flemme ! Les séances ont été reportées à ${newTime}. Viens faire une session express sur ${nextSubject} dès maintenant : prouve-toi que rien ne peut casser ta discipline ! 👊`,

  // Le déclic gagnant :
  (_missed, nextSubject, newTime, count) =>
    `🌟 ${count} séances reportées à ${newTime} ! C'est exactement là que les meilleurs font la différence : 10 à 15 minutes sur ${nextSubject} pour relancer la machine ! 🚀`,
];

let lastTemplateIndex = -1;

/**
 * Génère un message complice style Duolingo adapté au nombre de séances manquées.
 */
export function generateDuolingoCompanionMessage(
  missedCount: number,
  missedSubject: string,
  nextSubject: string,
  newTime: string
): string {
  const isMulti = missedCount >= 2;
  const templates = isMulti ? MULTI_MISSED_TEMPLATES : SINGLE_MISSED_TEMPLATES;

  // Sélection aléatoire non répétitive
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
 * Joue un carillon doux et motivant style Duolingo via l'API Web Audio native.
 * Fonctionne 100% hors-ligne, sans asset audio externe, sans risque d'erreur 404.
 */
export function playDuolingoChime(isUrgent: boolean = false): void {
  if (typeof window === 'undefined') return;

  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }

    const now = ctx.currentTime;
    // Notes douces : Do5 (523Hz), Mi5 (659Hz), Sol5 (784Hz) ou Do5 - Sol5 - Do6 si motivateur
    const frequencies = isUrgent 
      ? [523.25, 659.25, 783.99, 1046.50] 
      : [523.25, 659.25, 783.99];

    frequencies.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.09);

      const startTime = now + idx * 0.09;
      const duration = isUrgent ? 0.35 : 0.4;

      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(0.12, startTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + duration);
    });
  } catch {
    // Si l'audio n'est pas encore autorisé par interaction utilisateur, échec silencieux
  }
}

/**
 * Déclenche une notification système native du navigateur (Web Notification)
 * UNIQUEMENT si l'utilisateur a accordé l'autorisation.
 * AUCUN événement n'est créé dans Google Calendar.
 */
export function triggerNativeWebNotification(title: string, body: string): void {
  if (typeof window === 'undefined' || !('Notification' in window)) return;

  if (Notification.permission === 'granted') {
    try {
      new Notification(title, {
        body,
        icon: '/icon-192.png',
        badge: '/icon-192.png',
        tag: 'konan-companion-duolingo-nudge',
      });
    } catch {
      // Ignorer silencieusement si bloqué en arrière-plan
    }
  }
}
