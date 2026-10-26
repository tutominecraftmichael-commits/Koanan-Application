/**
 * KONAN AI - Route API Serverless pour Déclenchement Automatique des Notifications Push
 * Endpoint : /api/cron-notifications (Vercel Serverless Function & Cron)
 * 
 * RÈGLES STRICTES :
 * 1. Utilisateurs Gratuit : ZÉRO notification.
 * 2. Utilisateurs Pro / Plus :
 *    a) Séance dans 5 minutes -> Rappel Web Push haute priorité.
 *    b) Séance ratée (> 15 min) -> Rattrapage immédiat dans le futur (dateDebut > maintenant)
 *       + Notification Push immédiate de report.
 * 3. Examen déjà passé -> Expiration silencieuse, 0 rattrapage, 0 notification.
 * 4. Aucun texte inventé : utilisation stricte des templates officiels existants.
 */

import fs from 'fs';
import path from 'path';
import webpush from 'web-push';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { getMessaging } from 'firebase-admin/messaging';

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

  return { db, messaging, app };
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
  let fcmSuccess = false;

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
      console.warn(`[WebPush] Erreur envoi pour ${userId} :`, wpErr.statusCode || wpErr.message);
      if (db && (wpErr.statusCode === 404 || wpErr.statusCode === 410)) {
        // Souscription expirée ou désinstallée
        await db.collection('users').doc(userId).update({
          webPushSubscription: FieldValue.delete(),
        }).catch(() => {});
      }
    }
  }

  // 2. Envoi complémentaire via FCM si disponible
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
      console.warn(`[FCM] Erreur envoi pour ${userId} :`, fcmErr.message);
    }
  }

  return webPushSuccess || fcmSuccess;
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
 * Handler HTTP principal Vercel Serverless
 */
export default async function handler(req, res) {
  // En-têtes CORS pour autoriser l'appel depuis navigateur, cron externe ou dashboard
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const startTime = Date.now();
  const now = new Date();
  const todayStr = now.toISOString().slice(0, 10);
  const currentDayOfWeek = now.getDay() === 0 ? 6 : now.getDay() - 1; // 0=Lundi..6=Dimanche
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const stats = {
    usersScanned: 0,
    proUsers: 0,
    remindersSent5m: 0,
    catchupsTriggered: 0,
    examsExpired: 0,
    errors: 0,
  };

  try {
    const fb = getFirebaseServices();
    if (fb.error) {
      return res.status(200).json({
        success: true,
        endpointActive: true,
        service: 'KONAN AI Push Notifications & Catchup Cron',
        mode: 'Diagnostic / Prêt',
        notice: fb.details,
        instruction: "Pour connecter ce cron à votre base de données Firestore et déclencher les notifications push en arrière-plan, ajoutez la variable FIREBASE_SERVICE_ACCOUNT_KEY dans Vercel (Project Settings > Environment Variables).",
        timestamp: now.toISOString(),
        stats,
      });
    }

    const { db, messaging } = fb;
    const usersSnapshot = await db.collection('users').get();
    stats.usersScanned = usersSnapshot.size;

    for (const userDoc of usersSnapshot.docs) {
      const userData = userDoc.data() || {};
      const userId = userDoc.id;

      // ÉTAPE 1 : CONDITION SIMPLE GRATUIT VS PRO
      // Si l'utilisateur est Gratuit : il ne reçoit AUCUNE notification !
      const planTier = String(
        userData.planTier ||
        userData.userAccount?.planTier ||
        userData.tier ||
        'free'
      ).toLowerCase().trim();

      const isProOrPlus = planTier === 'pro' || planTier === 'plus';
      if (!isProOrPlus) {
        continue; // Silence absolu pour Gratuit
      }

      stats.proUsers += 1;

      const webPushSub = userData.webPushSubscription;
      const fcmToken = userData.fcmToken || userData.userAccount?.fcmToken;

      // Si l'utilisateur n'a aucun abonnement push actif, passer
      if (!webPushSub && !fcmToken) {
        continue;
      }

      // Si le cycle est validé aujourd'hui, silence complet
      const isCycleDone =
        userData.cycleCompletedDate === todayStr ||
        userData.userAccount?.cycleCompletedDate === todayStr;
      if (isCycleDone) {
        continue;
      }

      const subjects = Array.isArray(userData.subjects) ? userData.subjects : [];
      let studySessions = Array.isArray(userData.studySessions) ? [...userData.studySessions] : [];
      const classSlots = Array.isArray(userData.classSlots) ? userData.classSlots : [];

      if (studySessions.length === 0) continue;

      let hasSessionUpdates = false;

      // Filtrer les séances prévues aujourd'hui
      for (let i = 0; i < studySessions.length; i++) {
        const session = { ...studySessions[i] };
        if (session.dayOfWeek !== currentDayOfWeek) continue;
        if (session.completed) continue;

        const subject = subjects.find((s) => s.id === session.subjectId);
        const subjectName = subject?.name || session.title || 'tes révisions';
        const duration = session.durationMinutes || 25;

        // -------------------------------------------------------------------
        // RÈGLE 1 : PAS DE RATTRAPAGE SI L'EXAMEN EST DÉJÀ PASSÉ
        // -------------------------------------------------------------------
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
          if (now.getTime() >= examDateTime.getTime()) {
            session.isExpired = true;
            session.completed = true;
            studySessions[i] = session;
            hasSessionUpdates = true;
            stats.examsExpired += 1;
            continue; // Expirée silencieusement : 0 notif, 0 rattrapage !
          }
        }

        if (session.isExpired) continue;

        const sessionStartMin = parseTimeToMinutes(session.startTime);
        if (sessionStartMin < 0) continue;

        const diffMinutes = sessionStartMin - currentMinutes;
        const isCatchup = Boolean(session.isRescheduledToday || session.rescheduledReason);

        // -------------------------------------------------------------------
        // RÈGLE 2 : RAPPEL À 5 MINUTES DE LA SÉANCE (Normale ou Rattrapage)
        // -------------------------------------------------------------------
        const alreadyNotified = Boolean(session.notifEnvoyee || session.rappelEnvoye);
        if (!alreadyNotified && diffMinutes >= 4 && diffMinutes <= 6) {
          const title = isCatchup ? `KONAN ✦ Rattrapage ${subjectName}` : `KONAN ✦ ${subjectName}`;
          const body = isCatchup
            ? pickTimeMsg(CATCHUP_5M_MSGS, subjectName, session.startTime, duration)
            : pickMsg(BEFORE_SESSION_MSGS, subjectName, duration);

          const sent = await dispatchPushToUser({
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

          if (sent) {
            session.rappelEnvoye = true;
            session.notifEnvoyee = true;
            studySessions[i] = session;
            hasSessionUpdates = true;
            stats.remindersSent5m += 1;
          }
        }

        // -------------------------------------------------------------------
        // RÈGLE 3 : SÉANCE RATÉE (> 15 MIN DE RETARD) -> RATTRAPAGE IMMÉDIAT
        // -------------------------------------------------------------------
        const isMissed = !session.isRescheduledToday && currentMinutes > sessionStartMin + 15;
        if (isMissed) {
          const targetDuration = session.durationMinutes || 25;
          const otherSessions = studySessions.filter((s, idx) => idx !== i && s.dayOfWeek === currentDayOfWeek);

          const freeSlot = findNextFreeSlotToday(currentMinutes, targetDuration, otherSessions, classSlots);

          // Le créneau DOIT STRICTEMENT être dans le futur (dateDebut > maintenant)
          if (freeSlot && parseTimeToMinutes(freeSlot.startTime) > currentMinutes) {
            const originalStart = session.originalStartTime || session.startTime;
            session.originalStartTime = originalStart;
            session.originalEndTime = session.endTime;
            session.startTime = freeSlot.startTime;
            session.endTime = freeSlot.endTime;
            session.durationMinutes = freeSlot.durationMinutes;
            session.isRescheduledToday = true;
            session.rescheduledDate = todayStr;
            // Réinitialisation des indicateurs pour le nouveau créneau futur
            session.rappelEnvoye = false;
            session.notifEnvoyee = false;
            session.notifRattrapageEnvoyee = true;
            session.rescheduledReason = `Séance de ${subjectName} • Ratée à ${originalStart} ➔ Replacée à ${freeSlot.startTime}`;

            // Envoi immédiat de la notification de report existante
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
    const isCredErr = msg.includes('Could not load the default credentials') || msg.includes('NO_ADC_FOUND');
    return res.status(200).json({
      success: false,
      error: isCredErr
        ? "Action requise : Ajoutez la variable d'environnement FIREBASE_SERVICE_ACCOUNT_KEY dans les paramètres Vercel pour autoriser la lecture et l'écriture Firestore hors Google Cloud."
        : msg,
      details: msg,
      timestamp: now.toISOString(),
      cronJobReady: true,
    });
  }
}
