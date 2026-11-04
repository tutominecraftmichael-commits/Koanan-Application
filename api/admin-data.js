/**
 * KONAN AI - Route API Administrateur Temps Réel (Console de Contrôle Locale & Privée)
 * Endpoint : /api/admin-data
 * 
 * RÈGLES DE SÉCURITÉ :
 * 1. Accès par COMPTE ADMINISTRATEUR INDIVIDUEL : jeton d'identité Firebase (Authorization: Bearer <ID token>)
 *    d'un compte connecté par Google, portant l'autorisation « admin » (custom claim posé par
 *    scripts/set-admin-claim.mjs), connecté depuis moins de 12 h. La validation en deux étapes du compte
 *    Google sert de double authentification.
 *    Transition : tant que la variable ADMIN_PASSWORD existe, l'ancien mot de passe partagé reste accepté.
 *    Supprimer ADMIN_PASSWORD de Vercel le désactive définitivement. « ?verify=1 » vérifie seulement.
 * 2. Invisible et inaccessible aux élèves.
 * 3. Lecture Firestore via Firebase Admin SDK pour agréger en direct les statistiques
 *    et la liste complète des utilisateurs (149+ comptes réels).
 */

import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { loadLocalEnvIfPresent, secretsMatch, providedSecret } from './_env.js';
import { verifyAdminIdToken } from './_firebaseToken.js';

function getFirebaseAdmin() {
  loadLocalEnvIfPresent();
  const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!serviceAccountKey) {
    return { error: 'MISSING_SERVICE_ACCOUNT_KEY' };
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
      return { error: `INVALID_SERVICE_ACCOUNT_KEY: ${e.message}` };
    }
  } else {
    app = getApps()[0];
  }

  const db = getFirestore(app);
  return { db, app };
}

export default async function handler(req, res) {
  // Pas d'en-tête CORS : la console n'est appelée que par le site lui-même (même origine).
  res.setHeader('Cache-Control', 'no-store');

  const sendJson = (status, data) => {
    if (res.status && typeof res.status === 'function') {
      return res.status(status).json(data);
    }
    res.statusCode = status;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
  };

  // 1. IDENTIFICATION DE L'ADMINISTRATEUR (jamais via l'adresse, qui finit dans les journaux)
  loadLocalEnvIfPresent();
  const credential = providedSecret(req);
  if (credential.split('.').length === 3) {
    // a) Compte administrateur individuel : jeton d'identité Firebase (connexion Google + autorisation admin)
    const check = await verifyAdminIdToken(credential);
    if (!check.ok) {
      return sendJson(check.status, { success: false, error: check.error, message: check.message });
    }
  } else {
    // b) Transition : ancien mot de passe partagé, accepté SEULEMENT si ADMIN_PASSWORD est encore défini
    const expectedPassword = String(process.env.ADMIN_PASSWORD || '').trim();
    if (!expectedPassword || !secretsMatch(credential, expectedPassword)) {
      return sendJson(401, {
        success: false,
        error: 'UNAUTHORIZED',
        message: expectedPassword
          ? 'Mot de passe administrateur incorrect ou manquant.'
          : 'Connectez-vous avec votre compte Google administrateur.',
      });
    }
  }

  // « ?verify=1 » : simple vérification du mot de passe (écran de connexion), sans charger les données
  const requestUrl = new URL(req.url || '/', 'http://localhost');
  if (requestUrl.searchParams.get('verify') === '1') {
    return sendJson(200, { success: true, authenticated: true });
  }

  // 2. CONNEXION FIRESTORE
  const fb = getFirebaseAdmin();
  if (fb.error) {
    return sendJson(200, {
      success: false,
      authenticated: true,
      error: fb.error,
      message: 'Authentification réussie ! Pour charger les 149+ comptes réels en direct depuis Firestore, ajoutez la variable FIREBASE_SERVICE_ACCOUNT_KEY dans votre fichier .env.local.',
      stats: {
        totalUsers: 0,
        freeUsers: 0,
        proUsers: 0,
        plusUsers: 0,
        pushActiveUsers: 0,
        totalSubjects: 0,
        totalClasses: 0,
        usersWithSchedule: 0,
        totalStudySessions: 0,
        completedStudySessions: 0,
        rescheduledStudySessions: 0,
        pendingStudySessions: 0,
      },
      users: [],
    });
  }

  const { db } = fb;

  // Cache en mémoire pour préserver le quota Firestore (valable 60 secondes sauf si ?force=true)
  const urlObj = new URL(req.url, 'http://localhost');
  const isForce = urlObj.searchParams.get('force') === 'true' || req.query?.force === 'true';

  if (!global.__ADMIN_DATA_CACHE__) {
    global.__ADMIN_DATA_CACHE__ = { data: null, timestamp: 0 };
  }

  if (!isForce && global.__ADMIN_DATA_CACHE__.data && (Date.now() - global.__ADMIN_DATA_CACHE__.timestamp < 60000)) {
    return sendJson(200, {
      ...global.__ADMIN_DATA_CACHE__.data,
      cached: true,
      cacheAgeSeconds: Math.floor((Date.now() - global.__ADMIN_DATA_CACHE__.timestamp) / 1000),
    });
  }

  try {
    const usersSnapshot = await db.collection('users').get();
    const users = [];

    let countFree = 0;
    let countPro = 0;
    let countPlus = 0;
    let countPushActive = 0;
    let countWithSchedule = 0;

    let totalSubjects = 0;
    let totalClasses = 0;
    let totalStudySessions = 0;
    let completedStudySessions = 0;
    let rescheduledStudySessions = 0;

    usersSnapshot.forEach((doc) => {
      const data = doc.data() || {};
      const rawTier = String(
        data.planTier ||
        data.userAccount?.planTier ||
        data.tier ||
        'free'
      ).toLowerCase().trim();

      const planTier = rawTier === 'pro' ? 'pro' : rawTier === 'plus' ? 'plus' : 'free';

      if (planTier === 'pro') countPro++;
      else if (planTier === 'plus') countPlus++;
      else countFree++;

      const isPush = Boolean(
        data.webPushSubscription?.endpoint ||
        data.fcmToken ||
        data.userAccount?.fcmToken
      );
      if (isPush) countPushActive++;

      const subjects = Array.isArray(data.subjects) ? data.subjects : [];
      const classSlots = Array.isArray(data.classSlots) ? data.classSlots : [];
      const studySessions = Array.isArray(data.studySessions) ? data.studySessions : [];

      if (subjects.length > 0 || classSlots.length > 0) {
        countWithSchedule++;
      }

      totalSubjects += subjects.length;
      totalClasses += classSlots.length;
      totalStudySessions += studySessions.length;

      let userCompletedCount = 0;
      let userRescheduledCount = 0;

      studySessions.forEach((s) => {
        if (s.completed) {
          userCompletedCount++;
          completedStudySessions++;
        }
        if (s.isRescheduledToday || s.rescheduledReason) {
          userRescheduledCount++;
          rescheduledStudySessions++;
        }
      });

      const rawName =
        data.userAccount?.name ||
        data.name ||
        data.displayName ||
        (data.email ? data.email.split('@')[0] : 'Étudiant');

      const rawEmail =
        data.userAccount?.email ||
        data.email ||
        `compte-${doc.id.slice(0, 6)}@etudiant.konan`;

      const lastActive =
        data.lastSyncedAt ||
        data.lastServerCheckAt ||
        data.updatedAt ||
        data.createdAt ||
        null;

      users.push({
        id: doc.id,
        name: rawName,
        email: rawEmail,
        avatar: data.userAccount?.avatar || data.avatar || null,
        konanId: data.userAccount?.konanId || data.konanId || doc.id.slice(0, 8),
        planTier,
        pushEnabled: isPush,
        subjectsCount: subjects.length,
        classesCount: classSlots.length,
        sessionsCount: studySessions.length,
        completedSessionsCount: userCompletedCount,
        rescheduledSessionsCount: userRescheduledCount,
        lastActive,
        createdAt: data.createdAt || null,
      });
    });

    // Tri par défaut : dernière activité la plus récente
    users.sort((a, b) => {
      const timeA = a.lastActive ? new Date(a.lastActive).getTime() : 0;
      const timeB = b.lastActive ? new Date(b.lastActive).getTime() : 0;
      return timeB - timeA;
    });

    const resultPayload = {
      success: true,
      authenticated: true,
      timestamp: new Date().toISOString(),
      stats: {
        totalUsers: users.length,
        freeUsers: countFree,
        proUsers: countPro,
        plusUsers: countPlus,
        pushActiveUsers: countPushActive,
        totalSubjects,
        totalClasses,
        usersWithSchedule: countWithSchedule,
        totalStudySessions,
        completedStudySessions,
        rescheduledStudySessions,
        pendingStudySessions: Math.max(0, totalStudySessions - completedStudySessions),
      },
      users,
    };

    global.__ADMIN_DATA_CACHE__ = {
      data: resultPayload,
      timestamp: Date.now(),
    };

    return sendJson(200, resultPayload);
  } catch (err) {
    console.error('[admin-data] Erreur lecture Firestore :', err);
    const msg = String(err?.message || '');
    const isQuota = msg.includes('Quota exceeded') || msg.includes('RESOURCE_EXHAUSTED');

    if (global.__ADMIN_DATA_CACHE__?.data) {
      return sendJson(200, {
        ...global.__ADMIN_DATA_CACHE__.data,
        cached: true,
        notice: isQuota ? 'Quota Firestore temporairement atteint : affichage des dernières données en cache.' : undefined,
      });
    }

    return sendJson(200, {
      success: false,
      error: isQuota ? 'RESOURCE_EXHAUSTED' : 'FIRESTORE_ERROR',
      message: isQuota
        ? 'Le quota Firestore quotidien gratuit (50 000 lectures) a été temporairement atteint. Les données se réinitialisent automatiquement à minuit UTC.'
        : err.message,
      stats: {
        totalUsers: 0,
        freeUsers: 0,
        proUsers: 0,
        plusUsers: 0,
        pushActiveUsers: 0,
        totalSubjects: 0,
        totalClasses: 0,
        usersWithSchedule: 0,
        totalStudySessions: 0,
        completedStudySessions: 0,
        rescheduledStudySessions: 0,
        pendingStudySessions: 0,
      },
      users: [],
    });
  }
}
