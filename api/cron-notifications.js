/**
 * KONAN AI - Route API Serverless pour Déclenchement Automatique des Notifications Push
 * Endpoint : /api/cron-notifications (Vercel Serverless Function & Cron)
 * 
 * ARCHITECTURE "FILE D'ATTENTE" (push_queue) :
 * 1. ZÉRO CRASH 500 : Entouré d'un try/catch global renvoyant toujours un JSON 200 propre.
 * 2. ZÉRO SCAN DE LA COLLECTION USERS : Le cron ne lit JAMAIS les 149 utilisateurs.
 *    Il exécute UNE SEULE requête légère sur `push_queue` où sendAt <= Date.now() (limitée à 50).
 * 3. DÉPILAGE AUTOMATIQUE : Chaque enveloppe traitée est envoyée puis immédiatement supprimée.
 * 4. MODE TEST PRIVÉ : ?test=<email> envoie une alerte directe à l'abonnement enregistré dans push_queue.
 * 5. ACCÈS PROTÉGÉ : toute requête (traitement de la file ET mode test) doit fournir le secret CRON_SECRET
 *    dans l'en-tête « X-Cron-Secret » (ou « Authorization: Bearer … »). Clés VAPID lues uniquement
 *    depuis les variables d'environnement (VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY, VAPID_SUBJECT).
 */

import { loadLocalEnvIfPresent, secretsMatch, providedSecret } from './_env.js';

// Bibliothèques lourdes chargées SEULEMENT après la vérification du secret (voir loadHeavyModules) :
// un appel non autorisé ne les charge jamais, et un échec de chargement renvoie un diagnostic clair.
// NB : firebase-admin/auth n'est PAS utilisé : sur Vercel (Node 22), sa dépendance jwks-rsa -> jose (ESM)
// ne se charge pas (« require() of ES Module … not supported »). La recherche d'un compte par email
// se fait directement dans Firestore (collection users, champ email).
let webpush, initializeApp, getApps, cert, getFirestore;
let modulesLoaded = false;

async function loadHeavyModules() {
  if (modulesLoaded) return;
  // Chargement « tout ou rien » : les variables ne sont renseignées que si TOUT s'est chargé
  const [wp, appMod, fsMod] = await Promise.all([
    import('web-push'),
    import('firebase-admin/app'),
    import('firebase-admin/firestore'),
  ]);
  webpush = wp.default;
  ({ initializeApp, getApps, cert } = appMod);
  ({ getFirestore } = fsMod);
  modulesLoaded = true;
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
  return { db, app };
}

/**
 * Clés VAPID Web Push : UNIQUEMENT dans les variables serveur (Vercel), jamais dans le code.
 * Renvoie un message d'erreur si elles manquent (le serveur refuse alors d'envoyer).
 */
function configureVapid() {
  const publicKey = String(process.env.VAPID_PUBLIC_KEY || process.env.VITE_VAPID_PUBLIC_KEY || '').trim();
  const privateKey = String(process.env.VAPID_PRIVATE_KEY || '').trim();
  const subject = String(process.env.VAPID_SUBJECT || 'mailto:contact@konan-ai.com').trim();
  if (!publicKey || !privateKey) return 'VAPID_NOT_CONFIGURED';
  try {
    webpush.setVapidDetails(subject, publicKey, privateKey);
    return null;
  } catch {
    return 'VAPID_INVALID';
  }
}

export default async function handler(req, res) {
  // Compatibilité avec le serveur de développement Vite (réponse Node brute, sans res.status / res.json)
  if (typeof res.status !== 'function') {
    res.status = (code) => { res.statusCode = code; return res; };
    res.json = (data) => { res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify(data)); return res; };
  }
  // Pas d'en-tête CORS : ce point d'accès est appelé de serveur à serveur (cron-job.org), jamais par un navigateur.
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ success: false, error: 'METHOD_NOT_ALLOWED' });
  }

  // CONTRÔLE D'ACCÈS : secret partagé CRON_SECRET, envoyé par cron-job.org dans l'en-tête « X-Cron-Secret »
  // (ou « Authorization: Bearer … »). S'applique aussi au mode ?test=. Sans secret configuré : refus.
  loadLocalEnvIfPresent();
  const expectedSecret = String(process.env.CRON_SECRET || '').trim();
  if (!expectedSecret) {
    return res.status(503).json({ success: false, error: 'CRON_NOT_CONFIGURED' });
  }
  if (!secretsMatch(providedSecret(req, 'x-cron-secret'), expectedSecret)) {
    return res.status(401).json({ success: false, error: 'UNAUTHORIZED' });
  }

  // Appel autorisé : chargement des bibliothèques (message précis si l'une ne peut pas se charger,
  // ex. version de Node trop ancienne sur le serveur)
  try {
    await loadHeavyModules();
  } catch (loadErr) {
    console.error('[cron-notifications] Chargement des modules impossible :', loadErr);
    return res.status(500).json({
      success: false,
      error: 'MODULE_LOAD_FAILED',
      detail: String(loadErr?.message || loadErr).slice(0, 200),
      node: process.version,
    });
  }

  const vapidError = configureVapid();
  if (vapidError) {
    return res.status(503).json({ success: false, error: vapidError });
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

    const { db } = fb;

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

      // 2. Si non trouvé dans push_queue, recherche du compte par son email dans Firestore (collection users)
      if (!subscription) {
        try {
          const userSnap = await db.collection('users').where('email', '==', testEmail).limit(1).get();
          const userId = userSnap.empty ? null : userSnap.docs[0].id;
          if (userId) {
            const devDoc = await db.collection('push_queue').doc(`device_${userId}`).get();
            if (devDoc.exists && devDoc.data()?.subscription?.endpoint) {
              subscription = devDoc.data().subscription;
              targetSource = `push_queue device_${userId}`;
            } else {
              // Secours : souscription enregistrée sur le document de l'utilisateur
              const userData = userSnap.docs[0].data();
              if (userData?.webPushSubscription?.endpoint) {
                subscription = userData.webPushSubscription;
                targetSource = `users/${userId} (synchronisé vers push_queue)`;
                // Sauvegarde immédiate dans push_queue pour les futurs tests
                await db.collection('push_queue').doc(`device_${userId}`).set({
                  userId,
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
