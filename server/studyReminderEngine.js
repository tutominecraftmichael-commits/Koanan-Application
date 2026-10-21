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
        icon: '/logo-konan.png',
        badge: '/logo-konan.png',
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
    // CAS SPÉCIAL : BILAN HEBDOMADAIRE (Lundi à minuit 00:00) - Règle utilisateur Audio 3
    // "lundi à minuit 00:00 que tu envoies le bilan. Tu lui envoies un message, une notification pour lui dire :
    // 'Ton bilan de la semaine passée est là ! Viens voir ta progression et tes statistiques. 📊'"
    // -------------------------------------------------------------
    const isMondayMidnight = currentDayOfWeek === 0 && currentMinutes <= 30; // Lundi entre 00:00 et 00:30
    const mondayRecapKey = `${todayStr}_weekly_recap_monday_00h00`;
    if (isMondayMidnight && !notifiedMap[mondayRecapKey]) {
      const title = `📊 Bilan hebdomadaire disponible !`;
      const body = `Ton bilan de la semaine passée est là ! Viens voir ta progression et tes statistiques. 📊`;

      const result = await sendPushNotificationWithCleanup({
        db,
        userId,
        fcmToken,
        title,
        body,
        tag: `konan-weekly-recap-${todayStr}`,
        dataPayload: {
          url: '/?view=weekly_recap',
          type: 'weekly_recap',
          date: todayStr,
        },
      });

      if (result.success) {
        updatesToSave[`notifiedStudyReminders.${mondayRecapKey}`] = new Date().toISOString();
      }
    }

    // -------------------------------------------------------------
    // CAS SPÉCIAL : SURCHAUFFE ALGORITHME (3 séances délaissées ou plus)
    // "L'algorithme surchauffe à force de recalculer les rattrapages ! 🔥 Qu'est-ce que tu attends pour venir bosser ?!"
    // -------------------------------------------------------------
    const completedCountToday = todaysSlots.filter((s) => s && s.completed === true).length;
    const pastPendingSlotsToday = todaysSlots.filter((s) => {
      if (!s || s.completed === true) return false;
      const startMin = parseTimeToMinutes(s.startTime);
      return startMin > 0 && currentMinutes > startMin + 15;
    });

    const isAlgorithmOverheating = 
      completedCountToday === 0 && 
      pastPendingSlotsToday.length >= 2 && 
      currentMinutes >= 720; // À partir de 12h00 si tout a été manqué

    const emergencyInterroKey = `${todayStr}_urgent_interro_neglect`;
    if (isAlgorithmOverheating && !notifiedMap[emergencyInterroKey]) {
      const firstNeglected = pastPendingSlotsToday[0];
      const mainSubjectName = 
        firstNeglected.subjectName || 
        subjectsMap.get(firstNeglected.subjectId) || 
        cleanRawSubjectTitle(firstNeglected.title) || 
        'tes cours';

      const title = `KONAN ✦ Surchauffe de l'algorithme ! 🔥`;
      const body = `L'algorithme surchauffe à force de recalculer les rattrapages ! 🔥 Qu'est-ce que tu attends pour venir bosser ta séance de ${mainSubjectName} ?!`;

      const result = await sendPushNotificationWithCleanup({
        db,
        userId,
        fcmToken,
        title,
        body,
        tag: `konan-emergency-interro-${todayStr}`,
        dataPayload: {
          url: '/',
          type: 'emergency_interro_neglect',
          subjectName: mainSubjectName,
          date: todayStr,
        },
      });

      if (result.success) {
        stats.urgentInterroAlertsSent += 1;
        updatesToSave[`notifiedStudyReminders.${emergencyInterroKey}`] = new Date().toISOString();
      } else if (result.cleaned) {
        stats.tokensCleaned += 1;
        continue;
      }
    }

    for (const slot of todaysSlots) {
      const slotId = slot.id || `${slot.dayOfWeek}_${slot.startTime}_${slot.subjectId || 'slot'}`;
      
      // Extraction dynamique des informations exactes :
      // - slot.subjectName
      // - slot.startTime (ex: "18h30")
      // - slot.endTime (ex: "19h15")
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
      const isCatchup = Boolean(slot.isRescheduledToday || slot.rescheduledReason || slot.isCatchup);
      const diffToStart = startMin - currentMinutes;

      // -------------------------------------------------------------
      // CAS 1 : SÉANCE DE RATTRAPAGE PROGRAMMÉE AUJOURD'HUI (Audio 1 & 2)
      // Gradué : 1er oubli, 2e oubli, 3e oubli (surchauffe de l'algorithme)
      // -------------------------------------------------------------
      const catchupKey = `${todayStr}_${slotId}_catchup_alert`;
      if (isCatchup && isPending && diffToStart <= 10 && diffToStart >= -15 && !notifiedMap[catchupKey]) {
        const originalTimeStr = slot.originalStartTime ? formatTimeDisplay(slot.originalStartTime) : '';
        const missIndex = pastPendingSlotsToday.length;

        let title = `KONAN ✦ Rattrapage — ${resolvedSubjectName}`;
        let body = '';

        if (missIndex <= 1) {
          body = originalTimeStr
            ? `Tu as oublié de faire ${resolvedSubjectName} (prévue à ${originalTimeStr}), mais c'est pas grave ! Je la replace à ${formattedStartTime}. Viens faire la séance ! 🎯`
            : `Tu as oublié de faire ${resolvedSubjectName}, mais c'est pas grave ! Je la replace à ${formattedStartTime}. Viens faire la séance ! 🎯`;
        } else if (missIndex === 2) {
          title = `KONAN ✦ Deuxième rappel — ${resolvedSubjectName}`;
          body = `Ça fait la 2e fois que tu ne viens pas bosser ! Tu attends quoi pour venir ? ${resolvedSubjectName} replacée à ${formattedStartTime}. ⚡`;
        } else {
          title = `KONAN ✦ Surchauffe de l'algorithme ! 🔥`;
          body = `L'algorithme surchauffe à force de recalculer les rattrapages ! 🔥 Qu'est-ce que tu attends pour venir bosser ?! (${resolvedSubjectName} à ${formattedStartTime})`;
        }

        const result = await sendPushNotificationWithCleanup({
          db,
          userId,
          fcmToken,
          title,
          body,
          tag: `konan-catchup-${slotId}`,
          dataPayload: {
            url: '/',
            type: 'catchup_session',
            sessionId: slotId,
            subjectName: resolvedSubjectName,
            startTime: formattedStartTime,
            endTime: formattedEndTime,
            date: todayStr,
          },
        });

        if (result.success) {
          stats.catchupAlertsSent += 1;
          updatesToSave[`notifiedStudyReminders.${catchupKey}`] = new Date().toISOString();
          continue; // Rattrapage notifié, passer au créneau suivant
        } else if (result.cleaned) {
          stats.tokensCleaned += 1;
          break;
        } else {
          stats.errors += 1;
        }
      }

      // Si le rattrapage a été dépassé (oubli de rattrapage avant minuit 00:00)
      const catchupForgottenKey = `${todayStr}_${slotId}_catchup_forgotten`;
      if (isCatchup && isPending && currentMinutes > startMin + 15 && !notifiedMap[catchupForgottenKey]) {
        const title = `KONAN ✦ Surchauffe de l'algorithme ! 🔥`;
        const body = `L'algorithme surchauffe à force de recalculer les rattrapages ! 🔥 Qu'est-ce que tu attends pour venir bosser ta séance de ${resolvedSubjectName} replacée à ${formattedStartTime} ? Viens avant minuit 00:00 !`;

        const result = await sendPushNotificationWithCleanup({
          db,
          userId,
          fcmToken,
          title,
          body,
          tag: `konan-catchup-forgotten-${slotId}`,
          dataPayload: {
            url: '/',
            type: 'catchup_forgotten',
            sessionId: slotId,
            subjectName: resolvedSubjectName,
            startTime: formattedStartTime,
            endTime: formattedEndTime,
            date: todayStr,
          },
        });

        if (result.success) {
          stats.catchupAlertsSent += 1;
          updatesToSave[`notifiedStudyReminders.${catchupForgottenKey}`] = new Date().toISOString();
          continue;
        } else if (result.cleaned) {
          stats.tokensCleaned += 1;
          break;
        }
      }

      // -------------------------------------------------------------
      // CAS 2 : RAPPEL 45 MINUTES ET 5 MINUTES AVANT LA SÉANCE (Audio 1 & 2)
      // "Ta séance de [Matière] débute dans 45 minutes, viens ! 📚"
      // -------------------------------------------------------------
      const upcoming45mKey = `${todayStr}_${slotId}_upcoming_45m`;
      if (!isCatchup && isPending && diffToStart > 40 && diffToStart <= 45 && !notifiedMap[upcoming45mKey]) {
        const title = `KONAN ✦ ${resolvedSubjectName}`;
        const body = `Ta séance de ${resolvedSubjectName} débute dans 45 minutes, viens ! 📚`;

        const result = await sendPushNotificationWithCleanup({
          db,
          userId,
          fcmToken,
          title,
          body,
          tag: `konan-upcoming-45m-${slotId}`,
          dataPayload: {
            url: '/',
            type: 'upcoming_session_45m',
            sessionId: slotId,
            subjectName: resolvedSubjectName,
            startTime: formattedStartTime,
            date: todayStr,
          },
        });

        if (result.success) {
          stats.upcomingRemindersSent += 1;
          updatesToSave[`notifiedStudyReminders.${upcoming45mKey}`] = new Date().toISOString();
        } else if (result.cleaned) {
          stats.tokensCleaned += 1;
          break;
        }
      }

      const upcoming5mKey = `${todayStr}_${slotId}_upcoming_5m`;
      if (!isCatchup && isPending && diffToStart >= 0 && diffToStart <= 5 && !notifiedMap[upcoming5mKey]) {
        const title = `KONAN ✦ ${resolvedSubjectName}`;
        const body = `Ta séance de ${resolvedSubjectName} débute dans 5 minutes, viens ! 📚`;

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
      // CAS 3 : RETARD / CRÉNEAU NON VALIDÉ APRÈS L'HEURE PRÉVUE
      // Fin max à minuit 00:00
      // -------------------------------------------------------------
      const overdueKey = `${todayStr}_${slotId}_overdue_alert`;
      const isPastStartTime = currentMinutes > startMin + 5;
      const isPastEndTime = endMin > 0 ? currentMinutes >= endMin : currentMinutes >= startMin + 30;

      if (!isCatchup && isPending && (isPastStartTime || isPastEndTime) && !notifiedMap[overdueKey]) {
        const title = `KONAN ✦ Alerte planning — ${resolvedSubjectName}`;
        const body = `Ton algorithme s'impatiente ! Ta séance de ${resolvedSubjectName} prévue à ${formattedStartTime} est toujours en attente. Ne laisse pas le retard s'accumuler ! Viens valider ton créneau avant minuit 00:00 ! ⚡`;

        const result = await sendPushNotificationWithCleanup({
          db,
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
            date: todayStr,
          },
        });

        if (result.success) {
          stats.overdueAlertsSent += 1;
          updatesToSave[`notifiedStudyReminders.${overdueKey}`] = new Date().toISOString();
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
