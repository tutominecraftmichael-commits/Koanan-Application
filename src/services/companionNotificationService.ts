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
export function sendPhoneNotification(title: string, body: string): void {
  if (!isPhoneNotificationSupported()) return;

  if (Notification.permission === 'granted') {
    try {
      if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        navigator.serviceWorker.ready.then(reg => {
          reg.showNotification(title, {
            body,
            icon: '/icon-192.png',
            badge: '/icon-192.png',
            vibrate: [200, 100, 200],
            tag: 'konan-rescheduled-session',
            renotify: true,
          } as NotificationOptions);
        }).catch(() => {
          new Notification(title, {
            body,
            icon: '/icon-192.png',
            badge: '/icon-192.png',
            tag: 'konan-rescheduled-session',
          });
        });
      } else {
        new Notification(title, {
          body,
          icon: '/icon-192.png',
          badge: '/icon-192.png',
          tag: 'konan-rescheduled-session',
        });
      }
    } catch (err) {
      console.warn('Erreur envoi notification téléphone:', err);
    }
  }
}
