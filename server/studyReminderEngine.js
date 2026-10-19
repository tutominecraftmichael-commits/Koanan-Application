/**
 * KONAN AI - Moteur Backend de Vérification Conditionnelle et d'Envoi Push FCM
 * 
 * Ce module parcourt les profils étudiants dans Cloud Firestore, vérifie les plannings
 * de révision du jour et déclenche automatiquement les notifications push adaptées :
 * 1. Rappel 15 minutes avant le début de la séance
 * 2. Alerte en cas de retard / créneau non validé après l'heure prévue
 * 
 * RÈGLES STRICTES :
 * - Aucune mention de système de points ou d'XP.
 * - Aucun emoji de glace.
 * - Identité visuelle : Logo "logo-konan.png" et Cube KONAN.
 * - Nettoyage automatique des tokens FCM invalides ou expirés dans Firestore.
 */

import admin from 'firebase-admin';

/**
 * Initialise Firebase Admin SDK de manière résiliente.
 * Supporte :
 * 1. Clé de compte de service via GOOGLE_APPLICATION_CREDENTIALS ou FIREBASE_SERVICE_ACCOUNT_KEY
 * 2. Variables d'environnement standard ou Application Default Credentials
 * 3. Initialisation par défaut avec Project ID 'konanai-ed046'
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

  // Initialisation standard Firebase
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

    // Détection des tokens expirés ou invalides (désinstallation de la PWA, token révoqué, etc.)
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
 * 
 * Parcours les utilisateurs dans Firestore, analyse leurs créneaux du jour et envoie :
 * - 15 min avant : rappel de séance
 * - En retard / non validé après l'heure : alerte de planning
 */
export async function runStudyRemindersCheck() {
  const app = initFirebaseAdmin();
  const db = admin.firestore(app);

  const now = new Date();
  // En Côte d'Ivoire / UTC ou selon timezone locale
  const todayStr = now.toISOString().slice(0, 10);
  
  // 0 = Lundi, 1 = Mardi, ... 6 = Dimanche (convention KONAN)
  const currentDayOfWeek = now.getDay() === 0 ? 6 : now.getDay() - 1;
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  console.log(`[KONAN Backend] Démarrage du scan autonome des révisions : ${todayStr} à ${now.getHours()}h${String(now.getMinutes()).padStart(2, '0')} (Jour ${currentDayOfWeek})...`);

  const usersSnapshot = await db.collection('users').get();
  console.log(`[KONAN Backend] ${usersSnapshot.size} profils trouvés dans Firestore.`);

  const stats = {
    totalUsers: usersSnapshot.size,
    usersWithToken: 0,
    upcomingRemindersSent: 0,
    overdueAlertsSent: 0,
    tokensCleaned: 0,
    errors: 0,
  };

  for (const doc of usersSnapshot.docs) {
    const userData = doc.data() || {};
    const userId = doc.id;
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
      // Correspondance par dayOfWeek (0 à 6) ou par date explicite (YYYY-MM-DD)
      if (slot.date && slot.date === todayStr) return true;
      if (slot.dayOfWeek !== undefined && Number(slot.dayOfWeek) === currentDayOfWeek) return true;
      return false;
    });

    if (todaysSlots.length === 0) {
      continue;
    }

    // Map des notifications déjà envoyées pour cet utilisateur pour éviter les doublons
    const notifiedMap = userData.notifiedStudyReminders || {};
    const updatesToSave = {};

    for (const slot of todaysSlots) {
      const slotId = slot.id || `${slot.dayOfWeek}_${slot.startTime}_${slot.subjectId || 'slot'}`;
      
      // Extraction dynamique des informations du créneau demandées :
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
      const diffToStart = startMin - currentMinutes;

      // -------------------------------------------------------------
      // CONDITION 1 : RAPPEL 15 MINUTES AVANT LE DÉBUT DE LA SÉANCE
      // -------------------------------------------------------------
      // Si la séance commence dans 0 à 15 minutes et n'est pas déjà validée
      const upcomingKey = `${todayStr}_${slotId}_upcoming_15m`;
      if (isPending && diffToStart >= 0 && diffToStart <= 15 && !notifiedMap[upcomingKey]) {
        const title = "KONAN ✦ Rappel de séance";
        const body = `Prépare ton bloc-notes ! Ta session de ${resolvedSubjectName} commence à ${formattedStartTime}. Le Cube t'attend pour valider ton créneau.`;

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
          },
        });

        if (result.success) {
          stats.upcomingRemindersSent += 1;
          updatesToSave[`notifiedStudyReminders.${upcomingKey}`] = new Date().toISOString();
        } else if (result.cleaned) {
          stats.tokensCleaned += 1;
          break; // Token invalide, inutile de tester d'autres créneaux pour ce user
        } else {
          stats.errors += 1;
        }
      }

      // -------------------------------------------------------------
      // CONDITION 2 : EN CAS DE RETARD / CRÉNEAU NON VALIDÉ APRÈS L'HEURE
      // -------------------------------------------------------------
      // Si l'heure prévue est dépassée (l'heure de début est passée ou l'heure de fin est passée),
      // et que le créneau est toujours "pending" (non validé) avant minuit
      const overdueKey = `${todayStr}_${slotId}_overdue_alert`;
      const isPastStartTime = currentMinutes > startMin + 5; // dépassé d'au moins 5 min
      const isPastEndTime = endMin > 0 ? currentMinutes >= endMin : currentMinutes >= startMin + 30;

      if (isPending && (isPastStartTime || isPastEndTime) && !notifiedMap[overdueKey]) {
        const title = "KONAN ✦ Alerte planning";
        const body = formattedEndTime 
          ? `Ton algorithme s'impatiente ! Ta séance de ${resolvedSubjectName} prévue de ${formattedStartTime} à ${formattedEndTime} est toujours en attente. Ne laisse pas le retard s'accumuler ! Viens valider ton créneau avant minuit !`
          : `Ton algorithme s'impatiente ! Ta séance de ${resolvedSubjectName} prévue à ${formattedStartTime} est toujours en attente. Ne laisse pas le retard s'accumuler ! Viens valider ton créneau avant minuit !`;

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
          },
        });

        if (result.success) {
          stats.overdueAlertsSent += 1;
          updatesToSave[`notifiedStudyReminders.${overdueKey}`] = new Date().toISOString();
        } else if (result.cleaned) {
          stats.tokensCleaned += 1;
          break; // Token invalide
        } else {
          stats.errors += 1;
        }
      }
    }

    // Sauvegarder les clés de notifications envoyées pour éviter tout spam
    if (Object.keys(updatesToSave).length > 0) {
      try {
        await db.collection('users').doc(userId).update(updatesToSave);
      } catch (err) {
        console.warn(`[KONAN Backend] Erreur lors de la mise à jour des rappels envoyés pour ${userId} :`, err.message);
      }
    }
  }

  console.log(`[KONAN Backend] Scan terminé avec succès. Résumé :`, stats);
  return stats;
}
