/**
 * KONAN AI - Route API Administrateur Temps Réel (Console de Contrôle Locale & Privée)
 * Endpoint : /api/admin-data
 * 
 * RÈGLES DE SÉCURITÉ :
 * 1. Accès strictement protégé par mot de passe (NEXT_PUBLIC_ADMIN_PASSWORD).
 * 2. Invisible et inaccessible aux élèves.
 * 3. Lecture Firestore via Firebase Admin SDK pour agréger en direct les statistiques
 *    et la liste complète des utilisateurs (149+ comptes réels).
 */

import fs from 'fs';
import path from 'path';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

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
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status ? res.status(200).end() : res.end();
  }

  const sendJson = (status, data) => {
    if (res.status && typeof res.status === 'function') {
      return res.status(status).json(data);
    }
    res.statusCode = status;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
  };

  // 1. VÉRIFICATION DU MOT DE PASSE ADMINISTRATEUR
  loadLocalEnvIfPresent();
  const expectedPassword = (
    process.env.NEXT_PUBLIC_ADMIN_PASSWORD ||
    process.env.VITE_ADMIN_PASSWORD ||
    process.env.ADMIN_PASSWORD ||
    ''
  ).trim();

  const authHeader = req.headers.authorization || req.headers.Authorization || '';
  let providedPassword = '';
  if (authHeader.startsWith('Bearer ')) {
    providedPassword = authHeader.slice(7).trim();
  } else if (req.query && req.query.password) {
    providedPassword = String(req.query.password).trim();
  }

  if (!expectedPassword) {
    return sendJson(403, {
      success: false,
      error: 'ADMIN_PASSWORD_NOT_CONFIGURED',
      message: 'La variable NEXT_PUBLIC_ADMIN_PASSWORD n\'est pas encore configurée dans votre fichier .env.local.',
    });
  }

  if (!providedPassword || providedPassword !== expectedPassword) {
    return sendJson(401, {
      success: false,
      error: 'UNAUTHORIZED',
      message: 'Mot de passe administrateur incorrect ou manquant.',
    });
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

    return sendJson(200, {
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
    });
  } catch (err) {
    console.error('[admin-data] Erreur lecture Firestore :', err);
    return sendJson(500, {
      success: false,
      error: 'FIRESTORE_ERROR',
      message: err.message,
    });
  }
}
