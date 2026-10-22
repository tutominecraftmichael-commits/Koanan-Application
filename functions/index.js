/**
 * KONAN AI - Firebase Cloud Functions (v2)
 * 
 * Fonctions Cloud Serverless pour l'automatisation complète des rappels d'étude (FCM) :
 * 1. checkStudySessionsAndSendReminders : Tâche planifiée automatique (toutes les 1 minute)
 * 2. triggerStudyRemindersHttp : Endpoint HTTP sécurisé pour déclenchement manuel ou via webhook
 * 
 * RÈGLES STRICTES :
 * - Notification réservée aux abonnés PRO et PLUS (les utilisateurs gratuits n'ont pas accès).
 * - Rappel envoyé 5 minutes avant la session (strictement 5m, jamais après le début).
 * - Notifications de rattrapage structurées :
 *   a) Immédiate dès que la séance est reportée : "Ta séance de {matiere} a été reportée à {newTime}..."
 *   b) 5 minutes avant le créneau de rattrapage
 *   c) Rattrapage oublié (> 15 min de retard)
 * - Aucune mention de "série" ou de "streak" (il n'y a pas de série).
 * - Aucune mention de système de points ou d'XP.
 * - Zéro jargon robotique.
 * - Identité visuelle : Silhouette du CUBE KONAN avec lettre K (/cube-icon.png et /cube-badge.png).
 */

import { onSchedule } from 'firebase-functions/v2/scheduler';
import { onRequest } from 'firebase-functions/v2/https';
import admin from 'firebase-admin';

if (admin.apps.length === 0) {
  admin.initializeApp();
}

const db = admin.firestore();

function parseTimeToMinutes(timeStr) {
  if (!timeStr) return -1;
  const match = String(timeStr).trim().match(/(\d{1,2})[:hH](\d{2})/);
  if (match) {
    return parseInt(match[1], 10) * 60 + parseInt(match[2], 10);
  }
  const parts = String(timeStr).split(':');
  if (parts.length >= 2) {
    const h = parseInt(parts[0], 10);
    const m = parseInt(parts[1], 10);
    if (!isNaN(h) && !isNaN(m)) return h * 60 + m;
  }
  return -1;
}

function formatTimeDisplay(timeStr) {
  if (!timeStr) return '';
  const trimmed = String(timeStr).trim();
  if (trimmed.includes('h') || trimmed.includes('H')) return trimmed;
  const parts = trimmed.split(':');
  if (parts.length >= 2) return `${parts[0]}h${parts[1].padStart(2, '0')}`;
  return trimmed;
}

function cleanRawSubjectTitle(title) {
  if (!title) return '';
  return String(title)
    .replace(/^(?:Active Recall & Espacement|Règle des 2 Min & Sprint|Time Blocking Dédié|Technique Feynman & Vulgarisation|Pomodoro & Deep Work)\s*:\s*/i, '')
    .replace(/\s*\(J-\d+\)\s*/gi, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function sanitizeNotificationTitle(title) {
  const cleaned = (title || 'KONAN')
    .replace(/^(?:Notification\s*complice|Notification\s*énervée|Parent\s*énervé|Alerte|Notification)\s*[:\-–—]?\s*/i, '')
    .trim();
  return cleaned || 'KONAN';
}

function isSessionPending(session) {
  if (!session) return false;
  if (session.completed === true) return false;
  if (session.status === 'completed' || session.status === 'done') return false;
  return true;
}

async function sendPushWithCleanup({ userId, fcmToken, title, body, dataPayload, tag }) {
  const cleanTitle = sanitizeNotificationTitle(title);
  const cleanBody = (body || '')
    .replace(/^(?:Notification\s*complice|Notification\s*énervée|Parent\s*énervé|Alerte|Notification)\s*[:\-–—]?\s*/i, '')
    .trim();

  const message = {
    token: fcmToken,
    notification: { title: cleanTitle, body: cleanBody },
    webpush: {
      notification: {
        icon: '/cube-icon.png',
        badge: '/cube-badge.png',
        tag: tag || 'konan-study',
        vibrate: [300, 150, 300],
      },
      fcm_options: { link: dataPayload?.url || '/' },
    },
    data: { url: '/', ...(dataPayload || {}) },
  };

  try {
    const messageId = await admin.messaging().send(message);
    return { success: true, messageId };
  } catch (error) {
    const errorCode = error.code || '';
    const errorMsg = String(error.message || '');
    const isTokenInvalid =
      errorCode === 'messaging/invalid-registration-token' ||
      errorCode === 'messaging/registration-token-not-registered' ||
      errorCode === 'messaging/invalid-argument' ||
      errorMsg.includes('registration-token-not-registered') ||
      errorMsg.includes('invalid-registration-token');

    if (isTokenInvalid && userId) {
      console.warn(`[KONAN Cloud Function] Nettoyage du token invalide pour ${userId}`);
      try {
        await db.collection('users').doc(userId).update({
          fcmToken: admin.firestore.FieldValue.delete(),
          fcmTokenInvalidatedAt: admin.firestore.FieldValue.serverTimestamp(),
          fcmTokenInvalidReason: errorCode || 'EXPIRED_OR_INVALID',
        });
      } catch (cleanErr) {
        console.error('Erreur nettoyage token:', cleanErr);
      }
    }

    return { success: false, error: errorCode || errorMsg, cleaned: isTokenInvalid };
  }
}

/**
 * Logique partagée de scan et notification (toutes les 1 minute)
 */
async function processAllStudentReminders() {
  const now = new Date();
  const todayStr = now.toISOString().slice(0, 10);
  const currentDayOfWeek = now.getDay() === 0 ? 6 : now.getDay() - 1;
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const usersSnapshot = await db.collection('users').get();
  const stats = {
    scannedUsers: usersSnapshot.size,
    eligibleSubscribers: 0,
    upcomingSent: 0,
    catchupSent: 0,
    rescheduledNoticesSent: 0,
    urgentInterroAlertsSent: 0,
    overdueSent: 0,
    cleanedTokens: 0,
    errors: 0,
  };

  // -------------------------------------------------------------
  // TEMPLATES OFFICIELS DU COMPAGNON KONAN (Règles strictes Christ Boni)
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
    () => `Franchement, tu penses que les résultats vont tomber du ciel ? Tu as laissé plusieurs créneaux passer aujourd'hui ! C'est ce soir qu'on rattrape ça ou c'est mort pour de bon. Lève-toi et va bosser, fais-moi honneur ! 😤`,
    () => `Tu as sauté presque toute ta journée. Tu crois que c'est un jeu ? Demain c'est un autre jour, ce qui est perdu aujourd'hui ne reviendra pas. Assieds-toi ce soir et sauve ce qui peut l'être ! 🤦‍♂️`,
    (sub) => `Tu me déçois un peu là. Tout le monde compte sur toi, Je m'inquiète pour ta reussite, et toi tu laisses ${sub} en l'air ? Rebranche-toi tout de suite, il reste encore quelques heures avant ce soir pour rattraper le coup. 🛑`,
  ];

  const EVENING_LAST_CHANCE_MSGS = [
    (_sub, dur = 25) => `Écoute-moi bien : minuit arrive. Ce que tu n’as pas étudié aujourd’hui, c’est classé sans suite, pas de report sur demain. Prends ${dur} minutes chrono maintenant pour sauver l'honneur de ta journée. ⏰🔥`,
    (sub) => `Dernier appel de la soirée. Tu as raté des séances plus tôt, mais tu peux encore te coucher la tête haute si tu rattrapes ${sub} maintenant. Montre-moi ce que tu as dans le ventre ! 💪`,
  ];

  const RESCHEDULED_SESSION_MSGS = [
    (sub, time) => `Ta séance de ${sub} a été reportée à ${time}. Viens rattraper ton retard aujourd'hui avant minuit, on ne lâche rien ! ⏳👊`,
    (sub, time) => `Tu as sauté ta session de ${sub} ? Je ne te laisse pas abandonner : je l'ai replacée à ${time}. Sois au rendez-vous ce soir ! 👊`,
    (sub, time, dur = 25) => `Pardon, ne commence pas à négliger. Ta séance de ${sub} t'attend à ${time} pour ${dur} minutes bien concentré. Assure ta journée ! ✨`,
  ];

  const CATCHUP_5M_MSGS = [
    (sub, time, dur = 25) => `C’est l’heure de ton rattrapage de ${sub} ! Ça commence dans 5 minutes (à ${time}). ${dur} minutes et l'honneur est sauf ! 👊📚`,
    (sub, time) => `Petit rappel pour ton rattrapage : ta session de ${sub} démarre dans 5 minutes (à ${time}). Ne traîne pas, montre ce que tu as dans le ventre ! ✨`,
  ];

  const CATCHUP_MISSED_MSGS = [
    (sub, time) => `Tu as oublié ton rattrapage de ${sub} à ${time} ? Minuit approche, ne laisse pas la paresse gagner la journée. Ouvre ton cours tout de suite ! ⏳`,
    (sub, _time, dur = 25) => `Je te vois, tu fuis encore le rattrapage de ${sub} ? 😂 Viens t'asseoir ${dur} minutes, il est encore temps avant minuit ! 👀`,
  ];

  const pickMsg = (arr, sub, dur = 25) => {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx](sub, dur);
  };

  const pickTimeMsg = (arr, sub, time, dur = 25) => {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx](sub, time, dur);
  };

  for (const doc of usersSnapshot.docs) {
    const userData = doc.data() || {};
    const userId = doc.id;

    // RÈGLE MÉTIER STRICTE :
    // Seuls les abonnés PRO et PLUS ont droit aux notifications
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
    if (!fcmToken) continue;

    const subjectsList = Array.isArray(userData.subjects) ? userData.subjects : [];
    const subjectsMap = new Map();
    subjectsList.forEach((s) => s?.id && subjectsMap.set(s.id, s.name || s.title));

    const rawSessions = Array.isArray(userData.studySessions)
      ? userData.studySessions
      : Array.isArray(userData.slots)
      ? userData.slots
      : [];

    const todaysSlots = rawSessions.filter((slot) => {
      if (!slot) return false;
      if (slot.date && slot.date === todayStr) return true;
      if (slot.dayOfWeek !== undefined && Number(slot.dayOfWeek) === currentDayOfWeek) return true;
      return false;
    });

    if (todaysSlots.length === 0) continue;

    // RÈGLE ABSOLUE : Si toutes les séances du jour sont validées ou cycle terminé aujourd'hui :
    const isCycleDone = userData.cycleCompletedDate === todayStr || userData.userAccount?.cycleCompletedDate === todayStr;
    const allCompletedToday = todaysSlots.every((s) => s && (s.completed === true || s.status === 'completed' || s.status === 'done'));
    if (isCycleDone || allCompletedToday) {
      continue; // SILENCE TOTAL ! L'étudiant a déjà tout validé !
    }

    const notifiedMap = userData.notifiedStudyReminders || {};
    const updatesToSave = {};

    const pastPendingSlotsToday = todaysSlots.filter((s) => {
      if (!s || s.completed === true) return false;
      const startMin = parseTimeToMinutes(s.startTime);
      return startMin > 0 && currentMinutes > startMin + 15;
    });

    const missedCount = pastPendingSlotsToday.length;
    const isEveningTime = currentMinutes >= 1260 && currentMinutes < 1435; // 21h00 à 23h55

    // 1. Rattrapage du soir : Dernière chance avant minuit (21h00 - 23h50)
    const eveningLastChanceKey = `${todayStr}_evening_last_chance`;
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

      const result = await sendPushWithCleanup({
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
        stats.catchupSent += 1;
        updatesToSave[`notifiedStudyReminders.${eveningLastChanceKey}`] = new Date().toISOString();
      } else if (result.cleaned) {
        stats.cleanedTokens += 1;
        continue;
      }
    }

    // 2. Plusieurs créneaux manqués dans la journée (>= 3 séances sautées)
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

      const result = await sendPushWithCleanup({
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
        stats.cleanedTokens += 1;
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
      const duration = slot.durationMinutes || 25;

      // -------------------------------------------------------------
      // CAS A : NOTIFICATION IMMÉDIATE DÈS QUE LA SÉANCE EST REPORTÉE
      // -------------------------------------------------------------
      const rescheduledNoticeKey = `${todayStr}_${slotId}_rescheduled_notice_${slot.startTime}`;
      if (isCatchup && !notifiedMap[rescheduledNoticeKey]) {
        const title = `KONAN ✦ ${resolvedSubjectName}`;
        const body = pickTimeMsg(RESCHEDULED_SESSION_MSGS, resolvedSubjectName, formattedStartTime, duration);

        const result = await sendPushWithCleanup({
          userId,
          fcmToken,
          title,
          body,
          tag: `konan-rescheduled-${slotId}`,
          dataPayload: {
            url: '/',
            type: 'session_rescheduled',
            sessionId: slotId,
            subjectName: resolvedSubjectName,
            newStartTime: formattedStartTime,
            date: todayStr,
          },
        });

        if (result.success) {
          stats.rescheduledNoticesSent += 1;
          updatesToSave[`notifiedStudyReminders.${rescheduledNoticeKey}`] = new Date().toISOString();
        } else if (result.cleaned) {
          stats.cleanedTokens += 1;
          break;
        }
      }

      // -------------------------------------------------------------
      // CAS B : 5 MINUTES AVANT LE RATTRAPAGE
      // -------------------------------------------------------------
      const catchup5mKey = `${todayStr}_${slotId}_catchup_5m_${slot.startTime}`;
      if (isCatchup && isPending && diffToStart >= 4 && diffToStart <= 6 && !notifiedMap[catchup5mKey]) {
        const title = `KONAN ✦ Rattrapage ${resolvedSubjectName}`;
        const body = pickTimeMsg(CATCHUP_5M_MSGS, resolvedSubjectName, formattedStartTime, duration);

        const res = await sendPushWithCleanup({
          userId,
          fcmToken,
          title,
          body,
          tag: `konan-catchup-5m-${slotId}`,
          dataPayload: {
            url: '/',
            type: 'catchup_upcoming_5m',
            sessionId: slotId,
            subjectName: resolvedSubjectName,
            startTime: formattedStartTime,
            date: todayStr,
          },
        });

        if (res.success) {
          stats.catchupSent += 1;
          updatesToSave[`notifiedStudyReminders.${catchup5mKey}`] = new Date().toISOString();
          continue;
        } else if (res.cleaned) {
          stats.cleanedTokens += 1;
          break;
        }
      }

      // -------------------------------------------------------------
      // CAS C : RATTRAPAGE OUBLIÉ (> 15 MIN DE RETARD)
      // -------------------------------------------------------------
      const catchupMissedKey = `${todayStr}_${slotId}_catchup_missed_${slot.startTime}`;
      if (isCatchup && isPending && currentMinutes > startMin + 15 && !notifiedMap[catchupMissedKey]) {
        const title = `KONAN ✦ Rattrapage ${resolvedSubjectName}`;
        const body = pickTimeMsg(CATCHUP_MISSED_MSGS, resolvedSubjectName, formattedStartTime, duration);

        const res = await sendPushWithCleanup({
          userId,
          fcmToken,
          title,
          body,
          tag: `konan-catchup-missed-${slotId}`,
          dataPayload: {
            url: '/',
            type: 'catchup_missed',
            sessionId: slotId,
            subjectName: resolvedSubjectName,
            startTime: formattedStartTime,
            date: todayStr,
          },
        });

        if (res.success) {
          stats.catchupSent += 1;
          updatesToSave[`notifiedStudyReminders.${catchupMissedKey}`] = new Date().toISOString();
          continue;
        } else if (res.cleaned) {
          stats.cleanedTokens += 1;
          break;
        }
      }

      // -------------------------------------------------------------
      // CAS D : SÉANCE NORMALE — STRICTEMENT 5 MINUTES AVANT
      // -------------------------------------------------------------
      const upcoming5mKey = `${todayStr}_${slotId}_upcoming_5m`;
      if (!isCatchup && isPending && diffToStart >= 4 && diffToStart <= 6 && !notifiedMap[upcoming5mKey]) {
        const title = `KONAN ✦ ${resolvedSubjectName}`;
        const body = pickMsg(BEFORE_SESSION_MSGS, resolvedSubjectName, duration);

        const res = await sendPushWithCleanup({
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

        if (res.success) {
          stats.upcomingSent += 1;
          updatesToSave[`notifiedStudyReminders.${upcoming5mKey}`] = new Date().toISOString();
        } else if (res.cleaned) {
          stats.cleanedTokens += 1;
          break;
        } else {
          stats.errors += 1;
        }
      }

      // -------------------------------------------------------------
      // CAS E : PREMIER CRÉNEAU SAUTÉ (MANQUÉ OU OUBLIÉ)
      // -------------------------------------------------------------
      const firstMissedKey = `${todayStr}_${slotId}_first_missed`;
      const isPastStartTime = currentMinutes > startMin + 15;
      if (!isCatchup && isPending && isPastStartTime && missedCount < 3 && !notifiedMap[firstMissedKey]) {
        const title = `KONAN ✦ ${resolvedSubjectName}`;
        const body = pickMsg(FIRST_MISSED_MSGS, resolvedSubjectName, duration);

        const res = await sendPushWithCleanup({
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

        if (res.success) {
          stats.overdueSent += 1;
          updatesToSave[`notifiedStudyReminders.${firstMissedKey}`] = new Date().toISOString();
        } else if (res.cleaned) {
          stats.cleanedTokens += 1;
          break;
        } else {
          stats.errors += 1;
        }
      }
    }

    if (Object.keys(updatesToSave).length > 0) {
      await db.collection('users').doc(userId).update(updatesToSave);
    }
  }

  return stats;
}

/**
 * 1. Tâche planifiée automatique (toutes les 1 minute pour réactivité exacte)
 */
export const checkStudySessionsAndSendReminders = onSchedule(
  {
    schedule: 'every 1 minutes',
    timeZone: 'Africa/Abidjan',
    retryCount: 1,
  },
  async () => {
    console.log('[KONAN Cloud Function] Exécution planifiée du scan des séances (1 min)...');
    const stats = await processAllStudentReminders();
    console.log('[KONAN Cloud Function] Scan terminé :', stats);
  }
);

/**
 * 2. Endpoint HTTP pour déclenchement manuel ou webhook
 */
export const triggerStudyRemindersHttp = onRequest(
  { cors: true },
  async (req, res) => {
    try {
      const stats = await processAllStudentReminders();
      res.status(200).json({ success: true, timestamp: new Date().toISOString(), stats });
    } catch (err) {
      console.error('[KONAN Cloud Function] Erreur trigger HTTP :', err);
      res.status(500).json({ success: false, error: err.message });
    }
  }
);
