/**
 * KONAN AI - Route API Serverless pour Déclenchement Automatique des Notifications Push
 * Endpoint : /api/cron-notifications (Vercel Serverless Function & Cron)
 * 
 * RÈGLES STRICTES :
 * 1. Utilisateurs Gratuit : ZÉRO notification.
 * 2. Utilisateurs Pro / Plus :
 *    a) Séance dans 1 à 7 minutes -> Rappel Web Push haute priorité (alerte pré-session).
 *    b) Séance ratée (> 15 min) -> Rattrapage immédiat dans le futur (créneau libre > maintenant)
 *       + Notification Push immédiate de report.
 * 3. Examen déjà passé -> Expiration silencieuse, 0 rattrapage, 0 notification.
 * 4. Mode Test Privé (?test=MON_EMAIL) -> Envoie un test UNIQUEMENT au compte de l'utilisateur,
 *    sans toucher aucun élève, avec diagnostic complet en retour JSON.
 * 5. Conservation stricte des templates officiels existants du Compagnon Konan.
 */

import fs from 'fs';
import path from 'path';
import webpush from 'web-push';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { getMessaging } from 'firebase-admin/messaging';
import { getAuth } from 'firebase-admin/auth';

function loadLocalEnvIfPresent() {
  const envFiles = ['.env.local', '.env'];
  for (const file of envFiles) {
    try {
      const fullPath = path.resolve(process.cwd(), file);
      if (fs.existsSync(fullPath)) {
        const content = fs.readFileSync(fullPath, 'utf8');
        content.split('\n').forEach((line) => {
          const trimmed = line.trim();
          if (trimmed && !trimmed.startsWith('#')) {
            const eqIdx = trimmed.indexOf('=');
            if (eqIdx > 0) {
              const k = trimmed.slice(0, eqIdx).trim();
              const v = trimmed.slice(eqIdx + 1).trim().replace(/^['"]|['"]$/g, '');
              if (!process.env[k]) {
                process.env[k] = v;
              }
            }
          }
        });
      }
    } catch {}
  }
}

// Initialisation sécurisée de Firebase Admin (Compatible Node ESM et Vercel Serverless)
function getFirebaseServices() {
  loadLocalEnvIfPresent();
  const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!serviceAccountKey) {
    return {
      error: 'MISSING_SERVICE_ACCOUNT_KEY',
      details: "La variable d'environnement FIREBASE_SERVICE_ACCOUNT_KEY n'est pas configurée dans Vercel."
    };
  }

  let app;
  if (getApps().length === 0) {
    try {
      const raw = serviceAccountKey.trim();
      const parsed = raw.startsWith('{')
        ? JSON.parse(raw)
        : JSON.parse(Buffer.from(raw, 'base64').toString('utf-8'));
      app = initializeApp({
        credential: cert(parsed),
        projectId: parsed.project_id || process.env.VITE_FIREBASE_PROJECT_ID || 'konanai-ed046',
      });
    } catch (e) {
      return {
        error: 'INVALID_SERVICE_ACCOUNT_KEY',
        details: `Erreur lors de l'analyse du JSON de la clé : ${e.message}`
      };
    }
  } else {
    app = getApps()[0];
  }

  const db = getFirestore(app);
  let messaging = null;
  try {
    messaging = getMessaging(app);
  } catch (mErr) {
    console.warn('[cron-notifications] Firebase Messaging optionnel non initialisé :', mErr.message);
  }

  const auth = getAuth(app);
  return { db, messaging, auth, app };
}

// Configuration des clés VAPID Web Push
const VAPID_PUBLIC_KEY =
  process.env.VAPID_PUBLIC_KEY ||
  process.env.VITE_VAPID_PUBLIC_KEY ||
  'BCCK7MYVcGKEJajUGbH_g-5hXdyE81jUbfFhvoFrlaBIu1jAzX1eGGhhCF7LoloWxWsgwklkz6txOobnfxYIpZc';

const VAPID_PRIVATE_KEY =
  process.env.VAPID_PRIVATE_KEY ||
  'RPg92tF_70AeHG2oO76Twm8fO8nHDEtXUV8X3sp1mhw';

const VAPID_SUBJECT =
  process.env.VAPID_SUBJECT ||
  'mailto:contact@konan-ai.com';

try {
  webpush.setVapidDetails(VAPID_SUBJECT, VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY);
} catch (vapidErr) {
  console.warn('[cron-notifications] Configuration VAPID notice :', vapidErr.message);
}

// ---------------------------------------------------------------------------
// TEMPLATES OFFICIELS EXISTANTS DU COMPAGNON KONAN (Strictement conservés)
// ---------------------------------------------------------------------------
const BEFORE_SESSION_MSGS = [
  (sub, dur = 25) => `C’est l’heure de poser le téléphone deux secondes. Prends ton cahier de ${sub}, ${dur} minutes bien concentré et on en parle plus. Je compte sur toi ! 👊📚`,
  (sub) => `Petit rappel entre nous : ta session de ${sub} démarre dans 5 minutes. Fais ça proprement pour ta propre fierté, ne traîne pas. ✨`,
  (sub) => `Tu te souviens pourquoi on s’est lancés là-dedans ? ${sub} commence tout de suite. Lève-toi, bois un peu d’eau et installe-toi. 🤍`,
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

function pickMsg(arr, sub, dur = 25) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx](sub, dur);
}

function pickTimeMsg(arr, sub, time, dur = 25) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx](sub, time, dur);
}

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

function minutesToTimeString(minutes) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

/**
 * Envoie une notification Push au téléphone (via Web Push standard ou FCM)
 */
async function dispatchPushToUser({ userId, webPushSub, fcmToken, title, body, tag, dataPayload, db, messaging }) {
  let webPushSuccess = false;
  let lastError = null;
  let lastStatusCode = null;

  const payload = {
    title,
    body,
    icon: '/cube-icon.png',
    badge: '/cube-badge.png',
    tag: tag || 'konan-study',
    data: dataPayload || { url: '/' },
  };

  // 1. Envoi prioritaire via Web Push natif standard (W3C Push API)
  if (webPushSub && webPushSub.endpoint) {
    try {
      await webpush.sendNotification(webPushSub, JSON.stringify(payload), {
        urgency: 'high',
        TTL: 86400,
      });
      webPushSuccess = true;
    } catch (wpErr) {
      lastError = wpErr.message;
      lastStatusCode = wpErr.statusCode;
      console.warn(`[WebPush] Erreur envoi pour ${userId} :`, wpErr.statusCode || wpErr.message);
      if (db && (wpErr.statusCode === 404 || wpErr.statusCode === 410)) {
        // Souscription expirée ou désinstallée sur l'appareil
        await db.collection('users').doc(userId).update({
          webPushSubscription: FieldValue.delete(),
          pushNotificationsEnabled: false,
        }).catch(() => {});
      }
    }
  }

  // 2. Envoi complémentaire via FCM si disponible
  let fcmSuccess = false;
  if (fcmToken && !webPushSuccess && messaging) {
    try {
      const message = {
        token: fcmToken,
        notification: { title, body },
        android: {
          priority: 'high',
          notification: { sound: 'default', priority: 'high' },
        },
        webpush: {
          headers: { Urgency: 'high' },
          notification: {
            icon: '/cube-icon.png',
            badge: '/cube-badge.png',
            sound: 'default',
            tag: tag || 'konan-study',
          },
        },
        data: { url: '/', ...(dataPayload || {}) },
      };
      await messaging.send(message);
      fcmSuccess = true;
    } catch (fcmErr) {
      lastError = lastError || fcmErr.message;
      console.warn(`[FCM] Erreur envoi pour ${userId} :`, fcmErr.message);
    }
  }

  return {
    success: webPushSuccess || fcmSuccess,
    webPushSuccess,
    fcmSuccess,
    statusCode: lastStatusCode,
    error: lastError,
  };
}

/**
 * Cherche le prochain créneau libre aujourd'hui dans le futur strict (dateDebut > maintenant)
 */
function findNextFreeSlotToday(currentMinute, durationMinutes, sessions, classes = []) {
  const searchStartMin = Math.ceil(Math.max(currentMinute + 5, 0) / 15) * 15;
  const dayEndMin = 1440; // Minuit 00:00

  if (searchStartMin + durationMinutes > dayEndMin) {
    return null;
  }

  const busyIntervals = [];

  // Bloquer les cours réels
  classes.forEach((c) => {
    const s = parseTimeToMinutes(c.startTime);
    const e = parseTimeToMinutes(c.endTime);
    if (s >= 0 && e >= 0) {
      busyIntervals.push({ start: Math.max(0, s - 10), end: e + 25 });
    }
  });

  // Bloquer les autres sessions d'étude prévues aujourd'hui
  sessions.forEach((s) => {
    const start = parseTimeToMinutes(s.startTime);
    const end = parseTimeToMinutes(s.endTime);
    if (start >= 0 && end > searchStartMin) {
      busyIntervals.push({ start: Math.max(0, start - 5), end: end + 10 });
    }
  });

  busyIntervals.sort((a, b) => a.start - b.start);

  let currentPointer = searchStartMin;
  for (const busy of busyIntervals) {
    if (busy.end <= currentPointer) continue;
    if (busy.start > currentPointer) {
      const avail = busy.start - currentPointer;
      if (avail >= durationMinutes) {
        if (currentPointer > currentMinute) {
          return {
            startTime: minutesToTimeString(currentPointer),
            endTime: minutesToTimeString(currentPointer + durationMinutes),
            durationMinutes,
          };
        }
      }
    }
    currentPointer = Math.max(currentPointer, busy.end);
    if (currentPointer + durationMinutes > dayEndMin) return null;
  }

  if (currentPointer + durationMinutes <= dayEndMin && currentPointer > currentMinute) {
    return {
      startTime: minutesToTimeString(currentPointer),
      endTime: minutesToTimeString(currentPointer + durationMinutes),
      durationMinutes,
    };
  }

  return null;
}

/**
 * Handler HTTP principal Vercel Serverless & Cron
 */
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const startTime = Date.now();
  const now = new Date();

  // Détection du paramètre test dans la requête (?test=MON_EMAIL)
  const urlObj = new URL(req.url, 'http://localhost');
  const testEmail = String(req.query?.test || urlObj.searchParams.get('test') || '').toLowerCase().trim();

  try {
    const fb = getFirebaseServices();
    if (fb.error) {
      return res.status(200).json({
        success: false,
        endpointActive: true,
        service: 'KONAN AI Push Notifications & Catchup Cron',
        diagnostic: 'MISSING_SERVICE_ACCOUNT_KEY',
        notice: fb.details,
        instruction: "Pour connecter ce cron à Firestore et envoyer les notifications push, configurez la variable FIREBASE_SERVICE_ACCOUNT_KEY dans les variables d'environnement Vercel.",
        timestamp: now.toISOString(),
      });
    }

    const { db, messaging } = fb;

    // =========================================================================
    // CAS 1 : MODE TEST PRIVÉ POUR MON TÉLÉPHONE (?test=MON_EMAIL)
    // Zéro dérangement pour les élèves : cible UNIQUEMENT mon compte
    // =========================================================================
    if (testEmail) {
      console.log(`[cron-notifications] Mode Test Privé demandé pour ${testEmail}`);

      let targetDoc = null;
      let authUser = null;
      let quotaExceeded = false;

      // 1. Recherche instantanée via Firebase Auth (quota séparé de Firestore)
      try {
        authUser = await fb.auth.getUserByEmail(testEmail);
      } catch (authErr) {
        console.log(`[cron-notifications] Firebase Auth lookup notice:`, authErr.message);
      }

      // 2. Recherche directe par UID (le plus rapide et le plus précis)
      if (authUser && authUser.uid) {
        try {
          const docSnap = await db.collection('users').doc(authUser.uid).get();
          if (docSnap.exists) {
            targetDoc = docSnap;
          }
        } catch (fErr) {
          if (String(fErr.message).includes('Quota exceeded') || String(fErr.message).includes('RESOURCE_EXHAUSTED')) {
            quotaExceeded = true;
          }
        }
      }

      // 3. Recherche par champ direct 'email' si non trouvé par UID
      if (!targetDoc && !quotaExceeded) {
        try {
          const snap = await db.collection('users').where('email', '==', testEmail).limit(1).get();
          if (!snap.empty) targetDoc = snap.docs[0];
        } catch (fErr) {
          if (String(fErr.message).includes('Quota exceeded') || String(fErr.message).includes('RESOURCE_EXHAUSTED')) {
            quotaExceeded = true;
          }
        }
      }

      // 4. Recherche par champ imbriqué 'userAccount.email'
      if (!targetDoc && !quotaExceeded) {
        try {
          const snap = await db.collection('users').where('userAccount.email', '==', testEmail).limit(1).get();
          if (!snap.empty) targetDoc = snap.docs[0];
        } catch (fErr) {
          if (String(fErr.message).includes('Quota exceeded') || String(fErr.message).includes('RESOURCE_EXHAUSTED')) {
            quotaExceeded = true;
          }
        }
      }

      // 5. Recherche de secours par ID de document
      if (!targetDoc && !quotaExceeded) {
        try {
          const byIdSnap = await db.collection('users').doc(testEmail).get();
          if (byIdSnap.exists) targetDoc = byIdSnap;
        } catch (fErr) {
          if (String(fErr.message).includes('Quota exceeded') || String(fErr.message).includes('RESOURCE_EXHAUSTED')) {
            quotaExceeded = true;
          }
        }
      }

      if (quotaExceeded) {
        return res.status(200).json({
          success: false,
          testMode: true,
          targetEmail: testEmail,
          userId: authUser?.uid || null,
          displayName: authUser?.displayName || null,
          diagnostic: 'FIRESTORE_QUOTA_EXCEEDED',
          message: `Le compte "${testEmail}" existe bien (UID: ${authUser?.uid || 'Inconnu'}), mais Google Cloud a temporairement bloqué les lectures Firestore (Quota journalier gratuit de 50 000 lectures atteint).`,
          explanation: "Ce blocage survient sur le forfait gratuit 'Spark' de Firebase dès que 50 000 lectures sont atteintes dans la journée. Les requêtes reprennent automatiquement à minuit UTC, ou instantanément en activant le forfait 'Blaze' (paiement à l'usage, 0$ pour un usage normal).",
          timestamp: now.toISOString(),
        });
      }

      if (!targetDoc) {
        return res.status(200).json({
          success: false,
          testMode: true,
          targetEmail: testEmail,
          diagnostic: 'USER_NOT_FOUND',
          message: `Aucun compte élève trouvé avec l'adresse "${testEmail}" dans Firestore.`,
          solution: "Vérifie l'adresse email exacte de ton compte connecté dans l'application Konan.",
          timestamp: now.toISOString(),
        });
      }

      const userData = targetDoc.data() || {};
      const userId = targetDoc.id;
      const planTier = String(userData.planTier || userData.userAccount?.planTier || userData.tier || 'free').toLowerCase().trim();
      const isProOrPlus = planTier === 'pro' || planTier === 'plus';

      if (!isProOrPlus) {
        return res.status(200).json({
          success: false,
          testMode: true,
          targetEmail: testEmail,
          userId,
          planTier,
          diagnostic: 'USER_IS_FREE',
          message: `Le compte "${testEmail}" est actuellement en formule 'Gratuit'. Les notifications push et les rattrapages automatiques sont strictement réservés aux formules Pro / Plus.`,
          solution: "Bascule ton compte en mode Pro dans l'application pour activer les notifications.",
          timestamp: now.toISOString(),
        });
      }

      const webPushSub = userData.webPushSubscription;
      const fcmToken = userData.fcmToken || userData.userAccount?.fcmToken;

      if (!webPushSub && !fcmToken) {
        return res.status(200).json({
          success: false,
          testMode: true,
          targetEmail: testEmail,
          userId,
          planTier,
          diagnostic: 'NO_PUSH_SUBSCRIPTION',
          message: `Ton téléphone n'a pas encore enregistré sa souscription Web Push dans Firestore.`,
          solution: "Ouvre l'application sur ton smartphone connecté à ce compte Pro : l'abonnement Web Push s'enregistre automatiquement et silencieusement en arrière-plan.",
          timestamp: now.toISOString(),
        });
      }

      // Envoi immédiat du test push
      const testTitle = 'KONAN ✦ Test Direct Téléphone';
      const testBody = "Test de connexion 100% réussi ! Ton téléphone est parfaitement connecté et prêt à sonner pour tes séances d'étude et tes rattrapages. 👊📚";

      const dispatchResult = await dispatchPushToUser({
        userId,
        webPushSub,
        fcmToken,
        title: testTitle,
        body: testBody,
        tag: `konan-test-${Date.now()}`,
        dataPayload: { url: '/', isTest: true },
        db,
        messaging,
      });

      if (dispatchResult.success) {
        return res.status(200).json({
          success: true,
          testMode: true,
          targetEmail: testEmail,
          userId,
          planTier,
          diagnostic: 'PUSH_DELIVERED',
          message: 'Notification de test envoyée avec succès à ton téléphone ! Regarde ton écran.',
          subscriptionDetails: {
            endpoint: webPushSub?.endpoint ? `${webPushSub.endpoint.slice(0, 45)}...` : null,
            keysConfigured: Boolean(webPushSub?.keys?.p256dh && webPushSub?.keys?.auth),
            updatedAt: userData.webPushUpdatedAt || null,
            timezone: userData.timezone || 'UTC',
          },
          studySessionsCount: Array.isArray(userData.studySessions) ? userData.studySessions.length : 0,
          timestamp: now.toISOString(),
        });
      } else {
        return res.status(200).json({
          success: false,
          testMode: true,
          targetEmail: testEmail,
          userId,
          planTier,
          diagnostic: 'PUSH_SEND_FAILED',
          httpStatus: dispatchResult.statusCode,
          errorDetails: dispatchResult.error,
          message: "Échec de l'envoi de la notification vers le service de messagerie du smartphone.",
          solution: dispatchResult.statusCode === 410 || dispatchResult.statusCode === 404
            ? "L'ancienne souscription de ton téléphone a expiré. Réouvre simplement l'application sur ton téléphone pour renouveler la clé."
            : "Vérifie les permissions de notifications dans les paramètres de ton navigateur sur smartphone.",
          timestamp: now.toISOString(),
        });
      }
    }

    // =========================================================================
    // CAS 2 : EXÉCUTION DU CRON PÉRIODIQUE (Toutes les minutes)
    // Détecte les séances entre 1 et 7 minutes et les séances ratées
    // =========================================================================
    const stats = {
      usersScanned: 0,
      proUsers: 0,
      remindersSent5m: 0,
      catchupsTriggered: 0,
      examsExpired: 0,
      errors: 0,
    };

    // Requête ciblée pour préserver le quota Firestore (uniquement les appareils avec push actif)
    let usersSnapshot;
    try {
      usersSnapshot = await db.collection('users').where('pushNotificationsEnabled', '==', true).get();
      if (usersSnapshot.size === 0) {
        usersSnapshot = await db.collection('users').get();
      }
    } catch {
      usersSnapshot = await db.collection('users').get();
    }

    stats.usersScanned = usersSnapshot.size;

    for (const userDoc of usersSnapshot.docs) {
      const userData = userDoc.data() || {};
      const userId = userDoc.id;

      // 1. Filtrage Pro / Plus strict
      const planTier = String(userData.planTier || userData.userAccount?.planTier || userData.tier || 'free').toLowerCase().trim();
      if (planTier !== 'pro' && planTier !== 'plus') {
        continue;
      }

      stats.proUsers += 1;

      const webPushSub = userData.webPushSubscription;
      const fcmToken = userData.fcmToken || userData.userAccount?.fcmToken;
      if (!webPushSub && !fcmToken) {
        continue;
      }

      // 2. Détermination du fuseau horaire de l'étudiant
      let userDate = now;
      if (userData.timezone) {
        try {
          userDate = new Date(now.toLocaleString('en-US', { timeZone: userData.timezone }));
        } catch {}
      } else if (typeof userData.timezoneOffsetMinutes === 'number') {
        userDate = new Date(now.getTime() - userData.timezoneOffsetMinutes * 60000);
      }

      const userTodayStr = userDate.toISOString().slice(0, 10);
      const userDayOfWeek = userDate.getDay() === 0 ? 6 : userDate.getDay() - 1; // 0=Lundi..6=Dimanche
      const userMinutes = userDate.getHours() * 60 + userDate.getMinutes();

      // Si le cycle est validé aujourd'hui, repos complet
      const isCycleDone = userData.cycleCompletedDate === userTodayStr || userData.userAccount?.cycleCompletedDate === userTodayStr;
      if (isCycleDone) continue;

      const subjects = Array.isArray(userData.subjects) ? userData.subjects : [];
      let studySessions = Array.isArray(userData.studySessions) ? [...userData.studySessions] : [];
      const classSlots = Array.isArray(userData.classSlots) ? userData.classSlots : [];

      if (studySessions.length === 0) continue;

      let hasSessionUpdates = false;

      for (let i = 0; i < studySessions.length; i++) {
        const session = { ...studySessions[i] };

        // La séance concerne aujourd'hui si : date exacte correspondante OU jour de la semaine
        const isScheduledToday = (session.date && session.date === userTodayStr) || (session.dayOfWeek === userDayOfWeek);
        if (!isScheduledToday) continue;
        if (session.completed) continue;

        const subject = subjects.find((s) => s.id === session.subjectId);
        const subjectName = subject?.name || session.title || 'tes révisions';
        const duration = session.durationMinutes || 25;

        // RÈGLE 1 : PAS DE RATTRAPAGE SI L'EXAMEN EST DÉJÀ PASSÉ
        const examDateStr = subject?.examDate || session.examDate;
        if (examDateStr) {
          const [ey, em, ed] = examDateStr.split('-').map(Number);
          let eh = 23;
          let emin = 59;
          const examTimeStr = subject?.examTime || session.examTime;
          if (examTimeStr) {
            const [th, tm] = examTimeStr.split(':').map(Number);
            if (!isNaN(th)) eh = th;
            if (!isNaN(tm)) emin = tm;
          }
          const examDateTime = new Date(ey, (em || 1) - 1, ed || 1, eh, emin, 0);
          if (userDate.getTime() >= examDateTime.getTime()) {
            session.isExpired = true;
            session.completed = true;
            studySessions[i] = session;
            hasSessionUpdates = true;
            stats.examsExpired += 1;
            continue;
          }
        }

        if (session.isExpired) continue;

        const sessionStartMin = parseTimeToMinutes(session.startTime);
        if (sessionStartMin < 0) continue;

        const diffMinutes = sessionStartMin - userMinutes;
        const isCatchup = Boolean(session.isRescheduledToday || session.rescheduledReason);

        // RÈGLE 2 : DÉTECTION ENTRE 1 ET 7 MINUTES (Rappel 5 min)
        const alreadyNotifiedToday = session.lastReminderDate === userTodayStr || (session.rappelEnvoye && session.rappelDate === userTodayStr);
        if (!alreadyNotifiedToday && diffMinutes >= 1 && diffMinutes <= 7) {
          const title = isCatchup ? `KONAN ✦ Rattrapage ${subjectName}` : `KONAN ✦ ${subjectName}`;
          const body = isCatchup
            ? pickTimeMsg(CATCHUP_5M_MSGS, subjectName, session.startTime, duration)
            : pickMsg(BEFORE_SESSION_MSGS, subjectName, duration);

          const result = await dispatchPushToUser({
            userId,
            webPushSub,
            fcmToken,
            title,
            body,
            tag: `konan-5m-${session.id}`,
            dataPayload: { url: '/', sessionId: session.id },
            db,
            messaging,
          });

          if (result.success) {
            session.lastReminderDate = userTodayStr;
            session.rappelDate = userTodayStr;
            session.rappelEnvoye = true;
            session.notifEnvoyee = true;
            studySessions[i] = session;
            hasSessionUpdates = true;
            stats.remindersSent5m += 1;
          }
        }

        // RÈGLE 3 : SÉANCE RATÉE (> 15 MIN DE RETARD) -> RATTRAPAGE DANS LE FUTUR
        const alreadyRescheduledToday = session.isRescheduledToday && session.rescheduledDate === userTodayStr;
        const isMissed = !alreadyRescheduledToday && userMinutes > sessionStartMin + 15;

        if (isMissed) {
          const targetDuration = session.durationMinutes || 25;
          const otherSessions = studySessions.filter((s, idx) => idx !== i && ((s.date && s.date === userTodayStr) || s.dayOfWeek === userDayOfWeek));

          const freeSlot = findNextFreeSlotToday(userMinutes, targetDuration, otherSessions, classSlots);

          // Le créneau DOIT STRICTEMENT être dans le futur (dateDebut > maintenant)
          if (freeSlot && parseTimeToMinutes(freeSlot.startTime) > userMinutes) {
            const originalStart = session.originalStartTime || session.startTime;
            session.originalStartTime = originalStart;
            session.originalEndTime = session.endTime;
            session.startTime = freeSlot.startTime;
            session.endTime = freeSlot.endTime;
            session.durationMinutes = freeSlot.durationMinutes;
            session.isRescheduledToday = true;
            session.rescheduledDate = userTodayStr;
            session.rappelEnvoye = false;
            session.notifEnvoyee = false;
            session.lastReminderDate = null;
            session.notifRattrapageEnvoyee = true;
            session.rescheduledReason = `Séance de ${subjectName} • Ratée à ${originalStart} ➔ Replacée à ${freeSlot.startTime}`;

            const title = `KONAN ✦ ${subjectName}`;
            const body = pickTimeMsg(RESCHEDULED_SESSION_MSGS, subjectName, freeSlot.startTime, targetDuration);

            await dispatchPushToUser({
              userId,
              webPushSub,
              fcmToken,
              title,
              body,
              tag: `konan-rescheduled-${session.id}`,
              dataPayload: { url: '/', sessionId: session.id, newTime: freeSlot.startTime },
              db,
              messaging,
            });

            studySessions[i] = session;
            hasSessionUpdates = true;
            stats.catchupsTriggered += 1;
          }
        }
      }

      // Sauvegarde des séances modifiées directement dans Firestore
      if (hasSessionUpdates) {
        await db.collection('users').doc(userId).update({
          studySessions,
          lastServerCheckAt: new Date().toISOString(),
        }).catch((err) => {
          console.error(`[cron-notifications] Erreur mise à jour sessions pour ${userId} :`, err);
        });
      }
    }

    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    return res.status(200).json({
      success: true,
      timestamp: now.toISOString(),
      executionDurationSeconds: parseFloat(duration),
      stats,
    });
  } catch (err) {
    console.error('[cron-notifications] Erreur globale :', err);
    const msg = String(err?.message || 'Erreur interne du serveur');
    const isQuotaErr = msg.includes('Quota exceeded') || msg.includes('RESOURCE_EXHAUSTED');

    return res.status(200).json({
      success: false,
      error: isQuotaErr
        ? "RESOURCE_EXHAUSTED: Le quota gratuit Firestore quotidien (50 000 lectures) a été temporairement atteint. Les alertes reprendront dès la réinitialisation automatique à minuit UTC."
        : msg,
      details: msg,
      timestamp: now.toISOString(),
      cronJobReady: true,
    });
  }
}
