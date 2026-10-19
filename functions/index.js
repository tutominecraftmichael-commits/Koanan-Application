/**
 * KONAN AI - Firebase Cloud Functions (v2)
 * 
 * Fonctions Cloud Serverless pour l'automatisation complète des rappels d'étude (FCM) :
 * 1. checkStudySessionsAndSendReminders : Tâche planifiée automatique (toutes les 15 minutes)
 * 2. triggerStudyRemindersHttp : Endpoint HTTP sécurisé pour déclenchement manuel ou via webhook
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

function isSessionPending(session) {
  if (!session) return false;
  if (session.completed === true) return false;
  if (session.status === 'completed' || session.status === 'done') return false;
  return true;
}

async function sendPushWithCleanup({ userId, fcmToken, title, body, dataPayload, tag }) {
  const message = {
    token: fcmToken,
    notification: { title, body },
    webpush: {
      notification: {
        icon: '/logo-konan.png',
        badge: '/logo-konan.png',
        tag: tag || 'konan-study',
        vibrate: [200, 100, 200],
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
 * Logique partagée de scan et notification
 */
async function processAllStudentReminders() {
  const now = new Date();
  const todayStr = now.toISOString().slice(0, 10);
  const currentDayOfWeek = now.getDay() === 0 ? 6 : now.getDay() - 1;
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const usersSnapshot = await db.collection('users').get();
  const stats = {
    scannedUsers: usersSnapshot.size,
    upcomingSent: 0,
    overdueSent: 0,
    cleanedTokens: 0,
    errors: 0,
  };

  for (const doc of usersSnapshot.docs) {
    const userData = doc.data() || {};
    const userId = doc.id;
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

    const notifiedMap = userData.notifiedStudyReminders || {};
    const updatesToSave = {};

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
      const endMin = parseTimeToMinutes(slot.endTime);

      if (startMin < 0) continue;

      const isPending = isSessionPending(slot);
      const diffToStart = startMin - currentMinutes;

      // 1. Rappel 15 min avant
      const upcomingKey = `${todayStr}_${slotId}_upcoming_15m`;
      if (isPending && diffToStart >= 0 && diffToStart <= 15 && !notifiedMap[upcomingKey]) {
        const title = "KONAN ✦ Rappel de séance";
        const body = `Prépare ton bloc-notes ! Ta session de ${resolvedSubjectName} commence à ${formattedStartTime}. Le Cube t'attend pour valider ton créneau.`;

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
          },
        });

        if (res.success) {
          stats.upcomingSent += 1;
          updatesToSave[`notifiedStudyReminders.${upcomingKey}`] = new Date().toISOString();
        } else if (res.cleaned) {
          stats.cleanedTokens += 1;
          break;
        } else {
          stats.errors += 1;
        }
      }

      // 2. Alerte en retard / non validé après l'heure
      const overdueKey = `${todayStr}_${slotId}_overdue_alert`;
      const isPastStartTime = currentMinutes > startMin + 5;
      const isPastEndTime = endMin > 0 ? currentMinutes >= endMin : currentMinutes >= startMin + 30;

      if (isPending && (isPastStartTime || isPastEndTime) && !notifiedMap[overdueKey]) {
        const title = "KONAN ✦ Alerte planning";
        const body = formattedEndTime
          ? `Ton algorithme s'impatiente ! Ta séance de ${resolvedSubjectName} prévue de ${formattedStartTime} à ${formattedEndTime} est toujours en attente. Ne laisse pas le retard s'accumuler ! Viens valider ton créneau avant minuit !`
          : `Ton algorithme s'impatiente ! Ta séance de ${resolvedSubjectName} prévue à ${formattedStartTime} est toujours en attente. Ne laisse pas le retard s'accumuler ! Viens valider ton créneau avant minuit !`;

        const res = await sendPushWithCleanup({
          userId,
          fcmToken,
          title,
          body,
          tag: `konan-overdue-${slotId}`,
          dataPayload: {
            url: '/',
            type: 'overdue_session',
            sessionId: slotId,
            subjectName: resolvedSubjectName,
            startTime: formattedStartTime,
            endTime: formattedEndTime,
          },
        });

        if (res.success) {
          stats.overdueSent += 1;
          updatesToSave[`notifiedStudyReminders.${overdueKey}`] = new Date().toISOString();
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
 * 1. Tâche planifiée automatique (toutes les 15 minutes)
 */
export const checkStudySessionsAndSendReminders = onSchedule(
  {
    schedule: 'every 15 minutes',
    timeZone: 'Africa/Abidjan',
    retryCount: 1,
  },
  async () => {
    console.log('[KONAN Cloud Function] Exécution planifiée du scan des séances...');
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
