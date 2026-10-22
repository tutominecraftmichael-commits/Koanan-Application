/**
 * KONAN AI - Moteur Backend de Vérification Conditionnelle et d'Envoi Push FCM
 * 
 * Ce module parcourt les profils étudiants dans Cloud Firestore, vérifie les plannings
 * de révision du jour et déclenche automatiquement les notifications push adaptées :
 * 1. Rappel 5 minutes avant le début de la séance (matière, heure exacte, date)
 * 2. Séance de rattrapage replacée aujourd'hui (matière, heure, date, rattrapage explicite)
 * 3. Alerte urgente "KONAN énervé / interros en approche" si le matin ou la journée est délaissée
 * 4. Alerte en cas de retard / créneau non validé après l'heure prévue
 * 
 * RÈGLES STRICTES :
 * - Notification réservée aux abonnés PRO et PLUS (les utilisateurs gratuits n'ont pas accès).
 * - Aucune mention de "série" ou de "streak" (il n'y a pas de série).
 * - Aucune mention de système de points ou d'XP.
 * - Aucun emoji de glace.
 * - Identité visuelle : Logo "logo-konan.png" et Cube KONAN.
 * - Nettoyage automatique des tokens FCM invalides ou expirés dans Firestore.
 */

import admin from 'firebase-admin';

/**
 * Initialise Firebase Admin SDK de manière résiliente.
 */
export function initFirebaseAdmin() {
  if (admin.apps.length > 0) {
    return admin.app();
  }

  const projectId = process.env.VITE_FIREBASE_PROJECT_ID || process.env.FIREBASE_PROJECT_ID || 'konanai-ed046';

  if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
    try {
      const raw = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
      const parsed = typeof raw === 'string' && raw.trim().startsWith('{') 
        ? JSON.parse(raw) 
        : JSON.parse(Buffer.from(raw, 'base64').toString('utf-8'));
      return admin.initializeApp({
        credential: admin.credential.cert(parsed),
        projectId: parsed.project_id || projectId,
      });
    } catch (err) {
      console.warn('[KONAN Backend] Impossible de parser FIREBASE_SERVICE_ACCOUNT_KEY, repli sur configuration standard :', err.message);
    }
  }

  try {
    return admin.initializeApp({
      projectId,
    });
  } catch (err) {
    console.error('[KONAN Backend] Erreur lors de l\'initialisation de Firebase Admin :', err);
    throw err;
  }
}

/**
 * Convertit une chaîne horaire ("18:30", "18h30", "8:00") en minutes depuis minuit.
 */
export function parseTimeToMinutes(timeStr) {
  if (!timeStr) return -1;
  const match = String(timeStr).trim().match(/(\d{1,2})[:hH](\d{2})/);
  if (match) {
    return parseInt(match[1], 10) * 60 + parseInt(match[2], 10);
  }
  const parts = String(timeStr).split(':');
  if (parts.length >= 2) {
    const h = parseInt(parts[0], 10);
    const m = parseInt(parts[1], 10);
    if (!isNaN(h) && !isNaN(m)) {
      return h * 60 + m;
    }
  }
  return -1;
}

/**
 * Formate l'heure pour l'affichage dans le corps du message (ex: "18h30").
 */
export function formatTimeDisplay(timeStr) {
  if (!timeStr) return '';
  const trimmed = String(timeStr).trim();
  if (trimmed.includes('h') || trimmed.includes('H')) {
    return trimmed;
  }
  const parts = trimmed.split(':');
  if (parts.length >= 2) {
    return `${parts[0]}h${parts[1].padStart(2, '0')}`;
  }
  return trimmed;
}

/**
 * Nettoie le titre brut d'une séance pour en extraire le nom lisible.
 */
export function cleanRawSubjectTitle(title) {
  if (!title) return '';
  return String(title)
    .replace(/^(?:Active Recall & Espacement|Règle des 2 Min & Sprint|Time Blocking Dédié|Technique Feynman & Vulgarisation|Pomodoro & Deep Work)\s*:\s*/i, '')
    .replace(/\s*\(J-\d+\)\s*/gi, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

/**
 * Vérifie si un créneau est considéré comme non validé / en attente.
 */
export function isSessionPending(session) {
  if (!session) return false;
  if (session.completed === true) return false;
  if (session.status === 'completed' || session.status === 'done') return false;
  return true;
}

/**
 * Envoie une notification push FCM via admin.messaging().send()
 * Gère le nettoyage automatique du token s'il est invalide ou expiré.
 */
export async function sendPushNotificationWithCleanup({
  db,
  userId,
  fcmToken,
  title,
  body,
  dataPayload = {},
  tag = 'konan-study-notification',
}) {
  if (!fcmToken) {
    return { success: false, reason: 'NO_TOKEN' };
  }

  const message = {
    token: fcmToken,
    notification: {
      title,
      body,
    },
    webpush: {
      notification: {
        icon: '/cube-icon.png',
        badge: '/cube-badge.png',
        tag,
        vibrate: [200, 100, 200],
      },
      fcm_options: {
        link: dataPayload.url || '/',
      },
    },
    data: {
      url: dataPayload.url || '/',
      ...dataPayload,
    },
  };

  try {
    const response = await admin.messaging().send(message);
    console.log(`[KONAN FCM] Notification envoyée avec succès à l'étudiant (${userId}) : ${title}`);
    return { success: true, messageId: response };
  } catch (error) {
    console.error(`[KONAN FCM] Échec de l'envoi pour l'utilisateur ${userId} :`, error.message);

    const errorCode = error.code || '';
    const errorMsg = String(error.message || '');

    const isTokenInvalid = 
      errorCode === 'messaging/invalid-registration-token' ||
      errorCode === 'messaging/registration-token-not-registered' ||
      errorCode === 'messaging/invalid-argument' ||
      errorMsg.includes('registration-token-not-registered') ||
      errorMsg.includes('invalid-registration-token') ||
      errorMsg.includes('not a valid FCM registration token');

    if (isTokenInvalid && db && userId) {
      console.warn(`[KONAN FCM] Nettoyage automatique du token FCM invalide pour l'utilisateur ${userId} (raison: ${errorCode || 'EXPIRED_OR_INVALID'}).`);
      try {
        await db.collection('users').doc(userId).update({
          fcmToken: admin.firestore.FieldValue.delete(),
          fcmTokenInvalidatedAt: admin.firestore.FieldValue.serverTimestamp(),
          fcmTokenInvalidReason: errorCode || 'INVALID_REGISTRATION_TOKEN',
        });
      } catch (cleanErr) {
        console.error(`[KONAN FCM] Erreur lors du nettoyage du token dans Firestore :`, cleanErr.message);
      }
    }

    return { success: false, error: errorCode || errorMsg, cleaned: isTokenInvalid };
  }
}

/**
 * Fonction centrale de vérification conditionnelle et d'envoi autonome
 */
export async function runStudyRemindersCheck() {
  const app = initFirebaseAdmin();
  const db = admin.firestore(app);

  const now = new Date();
  const todayStr = now.toISOString().slice(0, 10);
  
  // 0 = Lundi, 1 = Mardi, ... 6 = Dimanche (convention KONAN)
  const currentDayOfWeek = now.getDay() === 0 ? 6 : now.getDay() - 1;
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const dayNames = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  const dayName = dayNames[currentDayOfWeek];
  const dateFormatted = now.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' });
  const fullDateText = `aujourd'hui (${dayName} ${dateFormatted})`;

  console.log(`[KONAN Backend] Scan autonome : ${fullDateText} à ${now.getHours()}h${String(now.getMinutes()).padStart(2, '0')}...`);

  const usersSnapshot = await db.collection('users').get();
  console.log(`[KONAN Backend] ${usersSnapshot.size} profils trouvés dans Firestore.`);

  const stats = {
    totalUsers: usersSnapshot.size,
    eligibleSubscribers: 0,
    usersWithToken: 0,
    upcomingRemindersSent: 0,
    catchupAlertsSent: 0,
    urgentInterroAlertsSent: 0,
    overdueAlertsSent: 0,
    tokensCleaned: 0,
    errors: 0,
  };

  for (const doc of usersSnapshot.docs) {
    const userData = doc.data() || {};
    const userId = doc.id;

    // RÈGLE MÉTIER STRICTE :
    // "S'il est sur Plus, il a le droit d'avoir les notifications, Pro il a le droit, mais gratuit n'a pas le droit."
    const userTier = String(
      userData.planTier || 
      userData.tier || 
      userData.userAccount?.planTier || 
      (userData.isPro ? 'pro' : userData.isPlus ? 'plus' : 'free')
    ).toLowerCase().trim();

    const isSubscribedToReminders = userTier === 'pro' || userTier === 'plus';
    if (!isSubscribedToReminders) {
      continue;
    }

    stats.eligibleSubscribers += 1;

    const fcmToken = userData.fcmToken || userData.userAccount?.fcmToken;
    if (!fcmToken) {
      continue;
    }

    stats.usersWithToken += 1;

    // Récupération des matières pour résolution dynamique du nom
    const subjectsList = Array.isArray(userData.subjects) ? userData.subjects : [];
    const subjectsMap = new Map();
    subjectsList.forEach((sub) => {
      if (sub && sub.id) {
        subjectsMap.set(sub.id, sub.name || sub.title);
      }
    });

    // Récupération de tous les créneaux d'étude du jour
    const rawSessions = Array.isArray(userData.studySessions)
      ? userData.studySessions
      : Array.isArray(userData.slots)
      ? userData.slots
      : Array.isArray(userData.classSlots)
      ? userData.classSlots
      : [];

    if (rawSessions.length === 0) {
      continue;
    }

    // Filtrer les créneaux qui concernent AUJOURD'HUI
    const todaysSlots = rawSessions.filter((slot) => {
      if (!slot) return false;
      if (slot.date && slot.date === todayStr) return true;
      if (slot.dayOfWeek !== undefined && Number(slot.dayOfWeek) === currentDayOfWeek) return true;
      return false;
    });

    if (todaysSlots.length === 0) {
      continue;
    }

    const notifiedMap = userData.notifiedStudyReminders || {};
    const updatesToSave = {};

    // -------------------------------------------------------------
    // TEMPLATES OFFICIELS KONAN (Compagnon d'études de l'étudiant)
    // -------------------------------------------------------------
    // -------------------------------------------------------------
    // TEMPLATES OFFICIELS KONAN (Compagnon d'études de l'étudiant)
    // -------------------------------------------------------------
    const BEFORE_SESSION_MSGS = [
      (sub, dur = 25) => `C’est l’heure de poser le téléphone deux secondes. Prends ton cahier de ${sub}, ${dur} minutes bien concentré et on en parle plus. Je compte sur toi ! 👊📚`,
      (sub) => `Petit rappel entre nous : ta session de ${sub} démarre dans 5 minutes. Fais ça proprement pour ta propre fierté, ne traîne pas. ✨`,
      (sub) => `Tu te souviens pourquoi on s’est lancés là-dedans ? ${sub} commence tout de suite. Lève-toi, bois un peu d’eau et installe-toi. 🤍`,
    ];

    const FIRST_MISSED_MSGS = [
      (sub) => `Tu es où comme ça ? Tu devais être sur ${sub}. Ne commence pas à glisser sur les réseaux, viens faire au moins l'essentiel maintenant. 👀`,
      (sub, dur = 25) => `Je te vois, tu fuis le cours de ${sub} ? 😂 Reviens t'asseoir ${dur} minutes, ne laisse pas la paresse gagner la journée.`,
      () => `Pardon, ne commence pas à négliger. On avait dit qu'on assurait aujourd'hui. Ouvre ton cours tout de suite, il est encore temps ! ⏳`,
    ];

    const MULTIPLE_MISSED_MSGS = [
      () => `Franchement, tu penses que les résultats vont tomber du ciel ? Tu as laissé 4 créneaux passer aujourd'hui ! C'est ce soir qu'on rattrape ça ou c'est mort pour de bon. Lève-toi et va bosser, fais-moi honneur ! 😤`,
      () => `Tu as sauté presque toute ta journée. Tu crois que c'est un jeu ? Demain c'est un autre jour, ce qui est perdu aujourd'hui ne reviendra pas. Assieds-toi ce soir et sauve ce qui peut l'être ! 🤦‍♂️`,
      (sub) => `Tu me déçois un peu là. Tout le monde compte sur toi, Je m'inquiète pour ta reussite, et toi tu laisses ${sub} en l'air ? Rebranche-toi tout de suite, il reste encore quelques heures avant ce soir pour rattraper le coup. 🛑`,
    ];

    const EVENING_LAST_CHANCE_MSGS = [
      (_sub, dur = 25) => `Écoute-moi bien : minuit arrive. Ce que tu n’as pas étudié aujourd’hui, c’est classé sans suite, pas de report sur demain. Prends ${dur} minutes chrono maintenant pour sauver l'honneur de ta journée. ⏰🔥`,
      (sub) => `Dernier appel de la soirée. Tu as raté des séances plus tôt, mais tu peux encore te coucher la tête haute si tu rattrapes ${sub} maintenant. Montre-moi ce que tu as dans le ventre ! 💪`,
    ];

    const pickMsg = (arr, sub, dur = 25) => {
      const idx = Math.floor(Math.random() * arr.length);
      return arr[idx](sub, dur);
    };

    // Analyse des créneaux passés non complétés aujourd'hui
    const pastPendingSlotsToday = todaysSlots.filter((s) => {
      if (!s || s.completed === true) return false;
      const startMin = parseTimeToMinutes(s.startTime);
      return startMin > 0 && currentMinutes > startMin + 15;
    });

    const missedCount = pastPendingSlotsToday.length;

    // -------------------------------------------------------------
    // CIRCONSTANCE 4 : LE RATTRAPAGE DU SOIR (Dernière chance avant minuit)
    // Entre 21h00 et 23h50 : si des créneaux restent non validés
    // -------------------------------------------------------------
    const eveningLastChanceKey = `${todayStr}_evening_last_chance`;
    const isEveningTime = currentMinutes >= 1260 && currentMinutes < 1435; // 21h00 à 23h55
    if (isEveningTime && missedCount > 0 && !notifiedMap[eveningLastChanceKey]) {
      const firstNeglected = pastPendingSlotsToday[0];
      const mainSubjectName = 
        firstNeglected.subjectName || 
        subjectsMap.get(firstNeglected.subjectId) || 
        cleanRawSubjectTitle(firstNeglected.title) || 
        'tes cours';
      const duration = firstNeglected.durationMinutes || 25;

      const title = 'KONAN';
      const body = pickMsg(EVENING_LAST_CHANCE_MSGS, mainSubjectName, duration);

      const result = await sendPushNotificationWithCleanup({
        db,
        userId,
        fcmToken,
        title,
        body,
        tag: `konan-evening-last-chance-${todayStr}`,
        dataPayload: {
          url: '/',
          type: 'evening_last_chance',
          subjectName: mainSubjectName,
          date: todayStr,
        },
      });

      if (result.success) {
        stats.catchupAlertsSent += 1;
        updatesToSave[`notifiedStudyReminders.${eveningLastChanceKey}`] = new Date().toISOString();
      } else if (result.cleaned) {
        stats.tokensCleaned += 1;
        continue;
      }
    }

    // -------------------------------------------------------------
    // CIRCONSTANCE 3 : PLUSIEURS CRÉNEAUX MANQUÉS DANS LA JOURNÉE (3 ou 4 sautés)
    // -------------------------------------------------------------
    const multipleMissedKey = `${todayStr}_multiple_missed_alert`;
    if (missedCount >= 3 && !isEveningTime && !notifiedMap[multipleMissedKey]) {
      const firstNeglected = pastPendingSlotsToday[0];
      const mainSubjectName = 
        firstNeglected.subjectName || 
        subjectsMap.get(firstNeglected.subjectId) || 
        cleanRawSubjectTitle(firstNeglected.title) || 
        'tes cours';

      const title = `KONAN ✦ ${mainSubjectName}`;
      const body = pickMsg(MULTIPLE_MISSED_MSGS, mainSubjectName);

      const result = await sendPushNotificationWithCleanup({
        db,
        userId,
        fcmToken,
        title,
        body,
        tag: `konan-multiple-missed-${todayStr}`,
        dataPayload: {
          url: '/',
          type: 'multiple_missed_sessions',
          subjectName: mainSubjectName,
          date: todayStr,
        },
      });

      if (result.success) {
        stats.urgentInterroAlertsSent += 1;
        updatesToSave[`notifiedStudyReminders.${multipleMissedKey}`] = new Date().toISOString();
      } else if (result.cleaned) {
        stats.tokensCleaned += 1;
        continue;
      }
    }

    for (const slot of todaysSlots) {
      const slotId = slot.id || `${slot.dayOfWeek}_${slot.startTime}_${slot.subjectId || 'slot'}`;
      
      const resolvedSubjectName = 
        slot.subjectName || 
        subjectsMap.get(slot.subjectId) || 
        cleanRawSubjectTitle(slot.title) || 
        'Révision';

      const formattedStartTime = formatTimeDisplay(slot.startTime || '18:00');
      const formattedEndTime = formatTimeDisplay(slot.endTime || '');

      const startMin = parseTimeToMinutes(slot.startTime);
      if (startMin < 0) continue;

      const isPending = isSessionPending(slot);
      const isCatchup = Boolean(slot.isRescheduledToday || slot.rescheduledReason || slot.isCatchup);
      const diffToStart = startMin - currentMinutes;

      // -------------------------------------------------------------
      // CIRCONSTANCE 1 : AVANT LA SÉANCE (STRICTEMENT 5 MINUTES AVANT)
      // Audio 3 : envoyer strictement 5 min avant, JAMAIS après le début
      // -------------------------------------------------------------
      const upcoming5mKey = `${todayStr}_${slotId}_upcoming_5m`;
      const duration = slot.durationMinutes || 25;
      if (!isCatchup && isPending && diffToStart >= 4 && diffToStart <= 6 && !notifiedMap[upcoming5mKey]) {
        const title = `KONAN ✦ ${resolvedSubjectName}`;
        const body = pickMsg(BEFORE_SESSION_MSGS, resolvedSubjectName, duration);

        const result = await sendPushNotificationWithCleanup({
          db,
          userId,
          fcmToken,
          title,
          body,
          tag: `konan-upcoming-${slotId}`,
          dataPayload: {
            url: '/',
            type: 'upcoming_session',
            sessionId: slotId,
            subjectName: resolvedSubjectName,
            startTime: formattedStartTime,
            endTime: formattedEndTime,
            date: todayStr,
          },
        });

        if (result.success) {
          stats.upcomingRemindersSent += 1;
          updatesToSave[`notifiedStudyReminders.${upcoming5mKey}`] = new Date().toISOString();
        } else if (result.cleaned) {
          stats.tokensCleaned += 1;
          break;
        } else {
          stats.errors += 1;
        }
      }

      // -------------------------------------------------------------
      // CIRCONSTANCE 2 : PREMIER CRÉNEAU SAUTÉ (MANQUÉ OU OUBLIÉ)
      // -------------------------------------------------------------
      const firstMissedKey = `${todayStr}_${slotId}_first_missed`;
      const isPastStartTime = currentMinutes > startMin + 15;
      if (isPending && isPastStartTime && missedCount < 3 && !notifiedMap[firstMissedKey]) {
        const title = `KONAN ✦ ${resolvedSubjectName}`;
        const body = pickMsg(FIRST_MISSED_MSGS, resolvedSubjectName, duration);

        const result = await sendPushNotificationWithCleanup({
          db,
          userId,
          fcmToken,
          title,
          body,
          tag: `konan-missed-${slotId}`,
          dataPayload: {
            url: '/',
            type: 'missed_session',
            sessionId: slotId,
            subjectName: resolvedSubjectName,
            startTime: formattedStartTime,
            endTime: formattedEndTime,
            date: todayStr,
          },
        });

        if (result.success) {
          stats.overdueAlertsSent += 1;
          updatesToSave[`notifiedStudyReminders.${firstMissedKey}`] = new Date().toISOString();
        } else if (result.cleaned) {
          stats.tokensCleaned += 1;
          break;
        } else {
          stats.errors += 1;
        }
      }
    }

    // Sauvegarde anti-doublon dans Firestore
    if (Object.keys(updatesToSave).length > 0) {
      try {
        await db.collection('users').doc(userId).update(updatesToSave);
      } catch (err) {
        console.warn(`[KONAN Backend] Erreur mise à jour anti-doublons pour ${userId} :`, err.message);
      }
    }
  }

  console.log(`[KONAN Backend] Scan terminé avec succès. Résumé :`, stats);
  return stats;
}
