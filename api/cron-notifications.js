/**
 * KONAN AI - Route API Serverless pour Déclenchement Automatique des Notifications Push
 * Endpoint : /api/cron-notifications (Vercel Serverless Function & Cron)
 * 
 * ARCHITECTURE "FILE D'ATTENTE" (push_queue) :
 * 1. ZÉRO CRASH 500 : Entouré d'un try/catch global renvoyant toujours un JSON 200 propre.
 * 2. ZÉRO SCAN DE LA COLLECTION USERS : Le cron ne lit JAMAIS les 149 utilisateurs.
 *    Il exécute UNE SEULE requête légère sur `push_queue` où sendAt <= Date.now() (limitée à 50).
 * 3. DÉPILAGE AUTOMATIQUE : Chaque enveloppe traitée est envoyée puis immédiatement supprimée.
 * 4. MODE TEST PRIVÉ : ?test=konanapp369@gmail.com envoie une alerte directe à l'abonnement enregistré dans push_queue.
 */

import fs from 'fs';
import path from 'path';
import webpush from 'web-push';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
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

// Initialisation sécurisée de Firebase Admin
function getFirebaseServices() {
  loadLocalEnvIfPresent();
  const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!serviceAccountKey) {
    return {
      error: 'MISSING_SERVICE_ACCOUNT_KEY',
      details: "La variable FIREBASE_SERVICE_ACCOUNT_KEY n'est pas configurée dans Vercel."
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
        details: `Erreur d'analyse du JSON de la clé : ${e.message}`
      };
    }
  } else {
    app = getApps()[0];
  }

  const db = getFirestore(app);
  let auth = null;
  try {
    auth = getAuth(app);
  } catch {}

  return { db, auth, app };
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
  console.warn('[cron-notifications] Notice VAPID :', vapidErr.message);
}

export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const startTime = Date.now();
  const now = new Date();

  // Extraction des paramètres
  let testEmail = '';
  try {
    const urlObj = new URL(req.url, 'http://localhost');
    testEmail = String(req.query?.test || urlObj.searchParams.get('test') || '').toLowerCase().trim();
  } catch {}

  try {
    const fb = getFirebaseServices();
    if (fb.error) {
      return res.status(200).json({
        success: false,
        endpointActive: true,
        service: 'KONAN AI Push Queue Worker',
        diagnostic: fb.error,
        notice: fb.details,
        timestamp: now.toISOString(),
      });
    }

    const { db, auth } = fb;

    // =========================================================================
    // CAS 1 : MODE TEST PRIVÉ (?test=mon_email)
    // =========================================================================
    if (testEmail) {
      console.log(`[cron-notifications] Mode Test demandé pour : ${testEmail}`);

      let subscription = null;
      let targetSource = '';

      // 1. Recherche directe dans push_queue par champ email
      try {
        const queueSnap = await db.collection('push_queue')
          .where('email', '==', testEmail)
          .limit(1)
          .get();

        if (!queueSnap.empty) {
          const envelope = queueSnap.docs[0].data();
          if (envelope.subscription && envelope.subscription.endpoint) {
            subscription = envelope.subscription;
            targetSource = `push_queue (doc: ${queueSnap.docs[0].id})`;
          }
        }
      } catch (qErr) {
        console.warn('[cron-notifications] Notice lecture test push_queue :', qErr.message);
      }

      // 2. Si non trouvé dans push_queue, recherche par Auth UID pour retrouver le device
      if (!subscription && auth) {
        try {
          const authUser = await auth.getUserByEmail(testEmail);
          if (authUser && authUser.uid) {
            const devDoc = await db.collection('push_queue').doc(`device_${authUser.uid}`).get();
            if (devDoc.exists && devDoc.data()?.subscription?.endpoint) {
              subscription = devDoc.data().subscription;
              targetSource = `push_queue device_${authUser.uid}`;
            } else {
              // Secours : lecture unique du document users pour récupérer la souscription
              const userDoc = await db.collection('users').doc(authUser.uid).get();
              if (userDoc.exists && userDoc.data()?.webPushSubscription?.endpoint) {
                subscription = userDoc.data().webPushSubscription;
                targetSource = `users/${authUser.uid} (synchronisé vers push_queue)`;
                // Sauvegarde immédiate dans push_queue pour les futurs tests
                await db.collection('push_queue').doc(`device_${authUser.uid}`).set({
                  userId: authUser.uid,
                  email: testEmail,
                  subscription,
                  sendAt: 9999999999999,
                  title: 'Device Registration',
                  body: 'Abonnement enregistré',
                  sessionId: 'device_sub',
                  type: 'device_sub',
                  updatedAt: new Date().toISOString(),
                }, { merge: true });
              }
            }
          }
        } catch (authErr) {
          console.warn('[cron-notifications] Notice recherche secours Auth :', authErr.message);
        }
      }

      if (!subscription || !subscription.endpoint) {
        return res.status(200).json({
          success: false,
          testMode: true,
          targetEmail: testEmail,
          diagnostic: 'NO_SUBSCRIPTION_IN_QUEUE',
          message: `Aucun abonnement Web Push n'a été trouvé dans push_queue pour "${testEmail}".`,
          instruction: "Ouvre l'application sur ton smartphone connecté à ce compte pour que ton navigateur enregistre automatiquement l'appareil.",
          timestamp: now.toISOString(),
        });
      }

      // Envoi du test
      const testPayload = JSON.stringify({
        title: '🔔 Test Push KONAN AI',
        body: 'Test réussi ! Ton téléphone sonne et reçoit les alertes en direct.',
        icon: '/icons/icon-192x192.png',
        badge: '/icons/badge-72x72.png',
        tag: 'konan-test-alert',
        data: {
          url: '/',
          test: true,
          timestamp: Date.now(),
        },
      });

      try {
        await webpush.sendNotification(subscription, testPayload, {
          TTL: 3600,
          urgency: 'high',
        });

        return res.status(200).json({
          success: true,
          testMode: true,
          targetEmail: testEmail,
          source: targetSource,
          diagnostic: 'PUSH_DELIVERED',
          message: 'Notification de test envoyée avec succès sur ton téléphone !',
          timestamp: now.toISOString(),
        });
      } catch (pushErr) {
        console.error('[cron-notifications] Erreur envoi push test :', pushErr);
        return res.status(200).json({
          success: false,
          testMode: true,
          targetEmail: testEmail,
          diagnostic: 'PUSH_SEND_FAILED',
          httpStatus: pushErr.statusCode,
          error: pushErr.message,
          solution: pushErr.statusCode === 410 || pushErr.statusCode === 404
            ? "L'ancienne souscription de ton téléphone a expiré. Réouvre l'application sur ton smartphone pour la renouveler."
            : "Vérifie les permissions de notifications dans les paramètres de ton navigateur sur smartphone.",
          timestamp: now.toISOString(),
        });
      }
    }

    // =========================================================================
    // CAS 2 : TRAITEMENT DE LA FILE D'ATTENTE PUSH (push_queue)
    // Une seule requête Firestore sur push_queue (ZÉRO scan des 149 utilisateurs)
    // =========================================================================
    const nowMs = Date.now();
    const queueSnap = await db.collection('push_queue')
      .where('sendAt', '<=', nowMs)
      .limit(50)
      .get();

    const stats = {
      envelopesFound: queueSnap.size,
      sent: 0,
      deleted: 0,
      errors: 0,
    };

    for (const docSnap of queueSnap.docs) {
      const envelope = docSnap.data();
      const docId = docSnap.id;

      // Ignorer les appareils enregistrés avec un sendAt dans le futur lointain
      if (typeof envelope.sendAt === 'number' && envelope.sendAt > nowMs) {
        continue;
      }

      if (envelope.subscription && envelope.subscription.endpoint) {
        const payload = JSON.stringify({
          title: envelope.title || 'KONAN AI',
          body: envelope.body || 'C’est l’heure de ta révision ! Viens te concentrer 👊📚',
          icon: '/icons/icon-192x192.png',
          badge: '/icons/badge-72x72.png',
          tag: `konan-${envelope.sessionId || 'alert'}-${envelope.type || 'reminder'}`,
          data: {
            url: '/',
            sessionId: envelope.sessionId,
            type: envelope.type,
            timestamp: nowMs,
          },
        });

        try {
          await webpush.sendNotification(envelope.subscription, payload, {
            TTL: 3600,
            urgency: 'high',
          });
          stats.sent += 1;
        } catch (pushErr) {
          console.warn(`[cron-notifications] Push échoué pour doc ${docId} :`, pushErr.message);
          stats.errors += 1;
        }
      }

      // Supprimer immédiatement l'enveloppe traitée de la file d'attente
      try {
        await db.collection('push_queue').doc(docId).delete();
        stats.deleted += 1;
      } catch (delErr) {
        console.error(`[cron-notifications] Erreur suppression doc ${docId} :`, delErr.message);
      }
    }

    const durationSeconds = ((Date.now() - startTime) / 1000).toFixed(2);
    return res.status(200).json({
      success: true,
      service: 'KONAN AI Push Queue Worker',
      durationSeconds: parseFloat(durationSeconds),
      stats,
      timestamp: now.toISOString(),
    });

  } catch (err) {
    console.error('[cron-notifications] Erreur globale rattrapée (protection 500) :', err);
    const msg = String(err?.message || 'Erreur interne');
    const isQuota = msg.includes('Quota exceeded') || msg.includes('RESOURCE_EXHAUSTED');

    return res.status(200).json({
      success: false,
      diagnostic: isQuota ? 'FIRESTORE_QUOTA_EXCEEDED' : 'GLOBAL_ERROR_CAUGHT',
      error: isQuota
        ? "Le quota gratuit Firestore quotidien a été temporairement dépassé. Les envois reprendront dès le reset automatique à 00:00 UTC."
        : msg,
      timestamp: now.toISOString(),
      cronJobReady: true,
    });
  }
}
