import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithRedirect,
  getRedirectResult,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
  sendEmailVerification,
  signOut as firebaseSignOut, 
  onAuthStateChanged,
  type User as FirebaseUser
} from 'firebase/auth';

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket?: string;
  messagingSenderId?: string;
  appId: string;
}

export const DEFAULT_FIREBASE_CONFIG: FirebaseConfig = {
  apiKey: "AIzaSyA4Azn3VXwTC2xdAsCm1yMKq0QEoDalzg4",
  authDomain: "konanai-ed046.firebaseapp.com",
  projectId: "konanai-ed046",
  storageBucket: "konanai-ed046.firebasestorage.app",
  messagingSenderId: "928627074050",
  appId: "1:928627074050:web:a5bc9ace090ba9347df31b",
};

/**
 * Retrieves the Firebase configuration strictly from environment variables or project fallback.
 */
export function getFirebaseConfig(): FirebaseConfig {
  const env = import.meta.env;
  return {
    apiKey: env.VITE_FIREBASE_API_KEY || DEFAULT_FIREBASE_CONFIG.apiKey,
    authDomain: env.VITE_FIREBASE_AUTH_DOMAIN || DEFAULT_FIREBASE_CONFIG.authDomain,
    projectId: env.VITE_FIREBASE_PROJECT_ID || DEFAULT_FIREBASE_CONFIG.projectId,
    storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET || DEFAULT_FIREBASE_CONFIG.storageBucket,
    messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID || DEFAULT_FIREBASE_CONFIG.messagingSenderId,
    appId: env.VITE_FIREBASE_APP_ID || DEFAULT_FIREBASE_CONFIG.appId,
  };
}

/**
 * Checks if Firebase configuration environment variables are present and valid.
 */
export function isFirebaseConfigured(): boolean {
  const config = getFirebaseConfig();
  return Boolean(config.apiKey && config.projectId && config.authDomain);
}

import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc,
  deleteDoc,
  collection,
  onSnapshot,
  query,
  where,
  getDocs,
  getDocsFromServer,
  type QuerySnapshot,
  type DocumentData
} from 'firebase/firestore';

/** Normalizes an identifier (Konan ID or email) for invitation matching. */
function normalizeInviteTarget(value: string | undefined | null): string {
  return (value || '').trim().toLowerCase();
}

/** Alphanumeric-only variant (tolerates dashes/spaces typed in Konan IDs). */
function alphaInviteTarget(value: string | undefined | null): string {
  return normalizeInviteTarget(value).replace(/[^a-z0-9@.]/g, '');
}

/**
 * Initializes or retrieves the Firebase app instance safely without throwing unhandled top-level errors.
 */
function getFirebaseApp() {
  try {
    if (getApps().length > 0) {
      return getApp();
    }
    const config = getFirebaseConfig();
    if (config.apiKey && config.projectId) {
      return initializeApp(config);
    }
  } catch (err) {
    console.warn('[Firebase] Safe initialization warning:', err);
  }
  return null;
}

const safeApp = getFirebaseApp();
export const app = safeApp;
export const auth = safeApp ? getAuth(safeApp) : null;
export const db = safeApp ? getFirestore(safeApp) : null;
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// CIRCUIT BREAKER FIRESTORE : Protection anti-quota épuisé et anti-crash
let isFirestoreQuotaExhausted = false;
let quotaExhaustedTimestamp = 0;
const QUOTA_COOLDOWN_MS = 15 * 60 * 1000; // 15 min de pause si quota atteint

export function isFirestoreQuotaBlocked(): boolean {
  if (!isFirestoreQuotaExhausted) return false;
  if (Date.now() - quotaExhaustedTimestamp > QUOTA_COOLDOWN_MS) {
    isFirestoreQuotaExhausted = false;
    return false;
  }
  return true;
}

export function reportFirestoreError(err: any): void {
  const msg = err?.message || String(err || '');
  const code = err?.code || '';
  if (code === 'resource-exhausted' || msg.includes('resource-exhausted') || msg.includes('Quota exceeded')) {
    if (!isFirestoreQuotaExhausted) {
      console.warn('[KONAN Firebase] Quota Cloud Firestore temporairement atteint. Protection activée : utilisation sécurisée du stockage local sans coupure.');
    }
    isFirestoreQuotaExhausted = true;
    quotaExhaustedTimestamp = Date.now();
  }
}

export interface RealAuthUser {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  emailVerified?: boolean;
}

/**
 * Helper to detect mobile browsers where popups might be blocked or undesirable
 */
export function isMobileBrowser(): boolean {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return false;
  return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
}

/**
 * Real Google Sign-in with Popup via Firebase Authentication
 */
export async function signInWithGoogleReal(): Promise<RealAuthUser> {
  if (!auth) {
    throw new Error('CONFIG_MISSING: Firebase n\'est pas encore configuré.');
  }

  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    return {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    };
  } catch (error: any) {
    console.error('Firebase Google Sign-In Error:', error);

    if (error.code === 'auth/popup-closed-by-user') {
      throw new Error('La fenêtre de connexion Google a été fermée avant la validation.');
    }
    if (error.code === 'auth/unauthorized-domain') {
      const err = new Error('UNAUTHORIZED_DOMAIN');
      (err as any).code = 'auth/unauthorized-domain';
      throw err;
    }
    if (error.code === 'auth/popup-blocked') {
      const err = new Error('POPUP_BLOCKED');
      (err as any).code = 'auth/popup-blocked';
      throw err;
    }
    if (error.code === 'auth/cancelled-popup-request') {
      throw new Error('Requête annulée suite à une ouverture concurrente.');
    }
    if (error.code === 'auth/network-request-failed') {
      throw new Error('Erreur de réseau : vérifiez votre connexion Internet.');
    }

    throw new Error(error.message || 'Une erreur est survenue lors de la connexion Google.');
  }
}

/**
 * Real Google Sign-in via Redirect (ideal for Mobile Safari / Chrome Mobile)
 */
export async function signInWithGoogleRedirectReal(): Promise<void> {
  if (!auth) {
    throw new Error('CONFIG_MISSING: Firebase n\'est pas configuré.');
  }

  try {
    await signInWithRedirect(auth, googleProvider);
  } catch (error: any) {
    console.error('Firebase Google Redirect Error:', error);
    if (error.code === 'auth/unauthorized-domain') {
      const err = new Error('UNAUTHORIZED_DOMAIN');
      (err as any).code = 'auth/unauthorized-domain';
      throw err;
    }
    throw new Error(error.message || 'Une erreur est survenue lors de la redirection Google.');
  }
}

/**
 * Check redirect result when app reloads after a Google redirect
 */
export async function checkGoogleRedirectResult(): Promise<RealAuthUser | null> {
  if (!auth) return null;
  try {
    const result = await getRedirectResult(auth);
    if (result && result.user) {
      return {
        uid: result.user.uid,
        displayName: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
      };
    }
    return null;
  } catch (error: any) {
    console.error('Firebase Redirect Result Error:', error);
    if (error.code === 'auth/unauthorized-domain') {
      const err = new Error('UNAUTHORIZED_DOMAIN');
      (err as any).code = 'auth/unauthorized-domain';
      throw err;
    }
    return null;
  }
}

/**
 * Real Firebase Sign-In with Email & Password
 */
export async function signInWithEmailReal(
  email: string, 
  password: string
): Promise<RealAuthUser> {
  if (!auth) {
    throw new Error('CONFIG_MISSING: Firebase n\'est pas configuré.');
  }

  try {
    const result = await signInWithEmailAndPassword(auth, email.trim(), password);
    const user = result.user;
    return {
      uid: user.uid,
      displayName: user.displayName || user.email?.split('@')[0] || 'Étudiant',
      email: user.email,
      photoURL: user.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(user.email || 'User')}`,
    };
  } catch (error: any) {
    console.error('Firebase Email Sign-In Error:', error);

    if (
      error.code === 'auth/user-not-found' || 
      error.code === 'auth/wrong-password' || 
      error.code === 'auth/invalid-credential'
    ) {
      throw new Error('Email ou mot de passe incorrect. Vérifiez vos identifiants ou créez un compte.');
    }
    if (error.code === 'auth/invalid-email') {
      throw new Error('Adresse email invalide.');
    }
    if (error.code === 'auth/user-disabled') {
      throw new Error('Ce compte étudiant a été désactivé.');
    }
    if (error.code === 'auth/too-many-requests') {
      throw new Error('Trop de tentatives infructueuses. Veuillez patienter un instant avant de réessayer.');
    }
    if (error.code === 'auth/network-request-failed') {
      throw new Error('Erreur de réseau : vérifiez votre connexion Internet.');
    }

    throw new Error(error.message || 'Erreur lors de la connexion par email.');
  }
}

/**
 * Real Firebase Sign-Up (Account Creation) with Email & Password
 */
export async function signUpWithEmailReal(
  email: string, 
  password: string, 
  displayName?: string
): Promise<RealAuthUser> {
  if (!auth) {
    throw new Error('CONFIG_MISSING: Firebase n\'est pas configuré.');
  }

  try {
    const result = await createUserWithEmailAndPassword(auth, email.trim(), password);
    const user = result.user;

    const finalName = displayName?.trim() || email.split('@')[0] || 'Étudiant';
    const finalAvatar = `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(finalName)}`;

    try {
      await updateProfile(user, {
        displayName: finalName,
        photoURL: finalAvatar,
      });
    } catch (profileErr) {
      console.warn('Could not update initial profile fields:', profileErr);
    }

    // Automatically send verification email upon registration
    try {
      await sendEmailVerification(user);
    } catch (emailVerifErr) {
      console.warn('Could not send initial email verification:', emailVerifErr);
    }

    return {
      uid: user.uid,
      displayName: finalName,
      email: user.email,
      photoURL: finalAvatar,
      emailVerified: user.emailVerified,
    };
  } catch (error: any) {
    console.error('Firebase Email Sign-Up Error:', error);

    if (error.code === 'auth/email-already-in-use') {
      throw new Error('Cette adresse email est déjà enregistrée. Connectez-vous directement avec votre mot de passe.');
    }
    if (error.code === 'auth/weak-password') {
      throw new Error('Le mot de passe doit comporter au moins 6 caractères.');
    }
    if (error.code === 'auth/invalid-email') {
      throw new Error('Format d\'adresse email invalide.');
    }
    if (error.code === 'auth/operation-not-allowed') {
      throw new Error('Le fournisseur Email/Mot de passe n\'a pas encore été activé dans votre console Firebase.');
    }
    if (error.code === 'auth/network-request-failed') {
      throw new Error('Erreur de réseau : vérifiez votre connexion Internet.');
    }

    throw new Error(error.message || 'Erreur lors de la création de votre compte.');
  }
}

/**
 * Real Firebase Password Reset Email
 */
export async function resetPasswordReal(email: string): Promise<void> {
  if (!auth) {
    throw new Error('CONFIG_MISSING: Firebase n\'est pas configuré.');
  }

  try {
    await sendPasswordResetEmail(auth, email.trim());
  } catch (error: any) {
    console.error('Firebase Password Reset Error:', error);
    if (error.code === 'auth/user-not-found') {
      throw new Error('Aucun compte n\'est associé à cette adresse email.');
    }
    if (error.code === 'auth/invalid-email') {
      throw new Error('Adresse email invalide.');
    }
    if (error.code === 'auth/too-many-requests') {
      throw new Error('Trop de demandes récentes. Veuillez patienter quelques minutes avant de renouveler la réinitialisation.');
    }
    throw new Error(error.message || 'Impossible d\'envoyer l\'email de réinitialisation.');
  }
}

/**
 * Resends email verification to the currently logged in user
 */
export async function sendVerificationEmailToCurrentUser(): Promise<void> {
  if (!auth?.currentUser) {
    throw new Error('Aucun utilisateur connecté.');
  }
  await sendEmailVerification(auth.currentUser);
}

/**
 * Sign out user from Firebase
 */
export async function signOutReal(): Promise<void> {
  if (!auth) return;
  try {
    await firebaseSignOut(auth);
  } catch (error) {
    console.error('Firebase Sign-Out Error:', error);
  }
}

/**
 * Listen to real Firebase auth state changes
 */
export function onFirebaseAuthStateChange(callback: (user: FirebaseUser | null) => void): () => void {
  if (!auth) {
    callback(null);
    return () => {};
  }
  return onAuthStateChanged(auth, callback);
}

let lastSyncedHashByUid: Record<string, string> = {};

export type CloudSyncStatus = 'connected' | 'needs_activation' | 'offline' | 'checking';

export interface CloudStatusInfo {
  status: CloudSyncStatus;
  message?: string;
  consoleUrl: string;
  lastCheckedAt?: string;
}

export const FIREBASE_CONSOLE_FIRESTORE_URL = 'https://console.firebase.google.com/project/konanai-ed046/firestore';

/**
 * Checks the real-time operational status of Cloud Firestore on project konanai-ed046.
 * Distinguishes between:
 * - 'connected': Firestore database is created and ready for multi-device sync.
 * - 'needs_activation': Cloud Firestore API is disabled or database not created in Firebase Console.
 * - 'offline': Device has no active Internet connection.
 */
export async function checkCloudSyncStatus(uid?: string): Promise<CloudStatusInfo> {
  if (!db) {
    return {
      status: 'needs_activation',
      message: 'Firestore non initialisé.',
      consoleUrl: FIREBASE_CONSOLE_FIRESTORE_URL,
      lastCheckedAt: new Date().toISOString(),
    };
  }

  const targetUid = uid || auth?.currentUser?.uid || 'health-check-probe';

  try {
    const probeRef = doc(db, 'users', targetUid);
    const snapPromise = getDoc(probeRef);
    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error('TIMEOUT_OFFLINE')), 6000)
    );
    await Promise.race([snapPromise, timeoutPromise]);

    return {
      status: 'connected',
      message: 'Cloud Firestore opérationnel. Synchronisation multi-appareils active.',
      consoleUrl: FIREBASE_CONSOLE_FIRESTORE_URL,
      lastCheckedAt: new Date().toISOString(),
    };
  } catch (err: any) {
    const errMsg = String(err?.message || '');
    const errCode = String(err?.code || '');

    if (
      errMsg.includes('Cloud Firestore API has not been used') ||
      errMsg.includes('disabled') ||
      errCode === 'permission-denied'
    ) {
      return {
        status: 'needs_activation',
        message: 'Base Cloud Firestore non créée dans la Console Firebase. Cliquez pour l’activer en 1 clic.',
        consoleUrl: FIREBASE_CONSOLE_FIRESTORE_URL,
        lastCheckedAt: new Date().toISOString(),
      };
    }

    if (errMsg === 'TIMEOUT_OFFLINE' || errCode === 'unavailable' || !navigator.onLine) {
      return {
        status: 'offline',
        message: 'Connexion Internet instable ou hors ligne.',
        consoleUrl: FIREBASE_CONSOLE_FIRESTORE_URL,
        lastCheckedAt: new Date().toISOString(),
      };
    }

    return {
      status: 'needs_activation',
      message: errMsg || 'Accès Cloud Firestore en attente de configuration.',
      consoleUrl: FIREBASE_CONSOLE_FIRESTORE_URL,
      lastCheckedAt: new Date().toISOString(),
    };
  }
}

/**
 * Persists user state directly to Cloud Firestore so all devices (PC, mobile, tablet)
 * share the exact same schedule, subjects, and study plans.
 */
export async function syncUserStateToCloud(uid: string, data: any): Promise<{ success: boolean; error?: string }> {
  if (!db || !uid || isFirestoreQuotaBlocked()) return { success: false, error: 'Database or UID missing or quota protected' };

  try {
    const userRef = doc(db, 'users', uid);
    // Sanitize data (remove undefined fields that Firestore doesn't like)
    const sanitized = JSON.parse(JSON.stringify(data));

    // Guard: Prevent a freshly opened unhydrated device from wiping existing cloud subjects
    if (!sanitized.subjects || sanitized.subjects.length === 0) {
      const existing = await loadUserStateFromCloud(uid);
      if (existing && existing.subjects && existing.subjects.length > 0) {
        console.warn('Prevented accidental overwrite of cloud state by empty local state');
        return { success: false, error: 'BLOCKED_OVERWRITE_PROTECTION' };
      }
    }

    const currentHash = JSON.stringify(sanitized);
    if (lastSyncedHashByUid[uid] === currentHash) {
      return { success: true };
    }

    await setDoc(userRef, {
      ...sanitized,
      lastSyncedAt: new Date().toISOString()
    }, { merge: true });

    // CRITICAL FIX: Only update hash after successful setDoc to allow retries on temporary failures
    lastSyncedHashByUid[uid] = currentHash;
    return { success: true };
  } catch (err: any) {
    reportFirestoreError(err);
    console.warn('Firestore sync failed (offline or permissions):', err?.message || err);
    return { success: false, error: err?.message || 'SYNC_ERROR' };
  }
}

/**
 * Loads the user state from Cloud Firestore with a resilient timeout.
 */
export async function loadUserStateFromCloud(uid: string): Promise<any | null> {
  if (!db || !uid || isFirestoreQuotaBlocked()) return null;
  try {
    const userRef = doc(db, 'users', uid);
    const snapPromise = getDoc(userRef);
    // 8-second resilient timeout for mobile networks
    const timeoutPromise = new Promise<null>((resolve) => setTimeout(() => resolve(null), 8000));
    const snap: any = await Promise.race([snapPromise, timeoutPromise]);
    if (snap && typeof snap.exists === 'function' && snap.exists()) {
      return snap.data();
    }
  } catch (err) {
    reportFirestoreError(err);
    console.warn('Firestore load failed (offline or permissions):', err);
  }
  return null;
}

/**
 * Listens in real-time to Cloud Firestore user state updates across all connected devices.
 */
export function listenToUserCloudState(
  uid: string, 
  onUpdate: (data: any) => void,
  onError?: (err: any) => void
): () => void {
  if (!db || !uid || isFirestoreQuotaBlocked()) return () => {};
  try {
    const userRef = doc(db, 'users', uid);
    return onSnapshot(userRef, (snap) => {
      // 🛑 CRITICAL: Ignore local pending writes to break the infinite echo loop!
      if (snap.metadata.hasPendingWrites) {
        return;
      }
      if (snap.exists()) {
        onUpdate(snap.data());
      }
    }, (err) => {
      reportFirestoreError(err);
      console.warn('Firestore snapshot listener warning:', err);
      if (onError) onError(err);
    });
  } catch (err) {
    reportFirestoreError(err);
    console.warn('Failed to attach Firestore listener:', err);
    return () => {};
  }
}

/**
 * Persists an invitation to Cloud Firestore for cross-device real-time sync.
 */
export async function syncCloudPlusInvitation(invitation: any): Promise<boolean> {
  if (!db || !invitation?.id) return false;
  try {
    const currentUid = auth?.currentUser?.uid || '';
    const currentEmail = auth?.currentUser?.email || '';
    const invRef = doc(db, 'plus_invitations', invitation.id);
    await setDoc(invRef, {
      ...invitation,
      id: invitation.id,
      senderUid: invitation.senderUid || currentUid,
      senderEmail: invitation.senderEmail || currentEmail,
      targetNormalized: normalizeInviteTarget(invitation.targetKonanIdOrEmail),
      targetAlpha: alphaInviteTarget(invitation.targetKonanIdOrEmail),
      targetUpper: (invitation.targetKonanIdOrEmail || '').trim().toUpperCase(),
      updatedAt: new Date().toISOString()
    }, { merge: true });
    return true;
  } catch (err) {
    console.warn('Failed to sync invitation to Cloud Firestore:', err);
    return false;
  }
}

/**
 * Updates status of an invitation in Cloud Firestore.
 */
export async function updateCloudInvitationStatus(
  id: string, 
  status: 'accepted' | 'declined',
  metadata?: { acceptedByName?: string; acceptedByKonanId?: string }
): Promise<boolean> {
  if (!db || !id) return false;
  try {
    const invRef = doc(db, 'plus_invitations', id);
    const payload: any = {
      status,
      updatedAt: new Date().toISOString()
    };
    if (metadata?.acceptedByName) payload.acceptedByName = metadata.acceptedByName;
    if (metadata?.acceptedByKonanId) payload.acceptedByKonanId = metadata.acceptedByKonanId;

    try {
      await updateDoc(invRef, payload);
      return true;
    } catch {
      try {
        await setDoc(invRef, payload, { merge: true });
        return true;
      } catch (detailErr) {
        // Safe fallback: if security rules only allow status + updatedAt, perform minimal update
        console.warn('Detailed cloud status update failed, falling back to minimal status:', detailErr);
        await updateDoc(invRef, {
          status,
          updatedAt: new Date().toISOString()
        }).catch(async () => {
          await setDoc(invRef, {
            status,
            updatedAt: new Date().toISOString()
          }, { merge: true });
        });
        return true;
      }
    }
  } catch (err) {
    console.warn('Failed to update invitation status in Cloud Firestore:', err);
    return false;
  }
}

/**
 * Deletes or revokes an invitation from Cloud Firestore so removed members lose access.
 */
export async function deleteCloudPlusInvitation(id: string): Promise<boolean> {
  if (!db || !id) return false;
  try {
    const invRef = doc(db, 'plus_invitations', id);
    // 1. First set status to 'declined' so any real-time listener immediately knows they are removed
    await setDoc(invRef, {
      status: 'declined',
      updatedAt: new Date().toISOString()
    }, { merge: true });

    // 2. Also try deleteDoc
    try {
      await deleteDoc(invRef);
    } catch {
      // If Firestore rules only permit status update, status: declined is already active
    }
    return true;
  } catch (err) {
    console.warn('Failed to delete invitation in Cloud Firestore:', err);
    return false;
  }
}

/**
 * Builds server-side filtered queries matching a student's Konan ID / email.
 * Legacy docs (no targetAlpha) are still matched through targetNormalized.
 */
function buildInvitationQueries(identifiers: string[]) {
  if (!db) return [];
  const cleanIds = Array.from(new Set(identifiers.map(normalizeInviteTarget).filter(Boolean))).slice(0, 30);
  const alphaIds = Array.from(new Set(identifiers.map(alphaInviteTarget).filter(Boolean))).slice(0, 30);
  if (cleanIds.length === 0) return [];
  const colRef = collection(db, 'plus_invitations');
  // Server-side filtering: only this student's invitations travel over the network.
  return [
    query(colRef, where('targetNormalized', 'in', cleanIds)),
    ...(alphaIds.length > 0 ? [query(colRef, where('targetAlpha', 'in', alphaIds))] : []),
  ];
}

function collectSnapshotDocs(snapshot: QuerySnapshot<DocumentData>, into: Map<string, any>) {
  snapshot.forEach(docSnap => {
    const data = docSnap.data();
    into.set(data.id || docSnap.id, { ...data, id: data.id || docSnap.id });
  });
}

/**
 * Listens in real-time to Cloud Firestore for invitations matching this student's IDs or email.
 * Uses targeted server-side queries so delivery is near-instant regardless of collection size.
 */
export function listenToCloudInvitationsForUser(
  identifiers: string[], 
  onUpdate: (invitations: any[]) => void
): () => void {
  if (isFirestoreQuotaBlocked()) return () => {};
  const queries = buildInvitationQueries(identifiers);
  if (queries.length === 0) return () => {};

  const perQuery: Map<string, any>[] = queries.map(() => new Map());
  const emit = () => {
    const merged = new Map<string, any>();
    perQuery.forEach(m => m.forEach((v, k) => merged.set(k, v)));
    onUpdate(Array.from(merged.values()));
  };

  const unsubscribers = queries.map((q, idx) => {
    try {
      return onSnapshot(q, (snapshot) => {
        perQuery[idx] = new Map();
        collectSnapshotDocs(snapshot, perQuery[idx]);
        emit();
      }, (err) => {
        reportFirestoreError(err);
        console.warn('Real-time cloud invitations listener error:', err);
      });
    } catch (err) {
      reportFirestoreError(err);
      console.warn('Failed to attach real-time cloud invitations listener:', err);
      return () => {};
    }
  });

  return () => unsubscribers.forEach(unsub => unsub());
}

/**
 * One-shot fetch straight from the server (bypasses local cache).
 * Safety net when the real-time channel is stalled (VPN, sleeping tab, mobile network).
 */
export async function fetchCloudInvitationsForUser(identifiers: string[]): Promise<any[]> {
  if (isFirestoreQuotaBlocked()) return [];
  const queries = buildInvitationQueries(identifiers);
  if (queries.length === 0) return [];
  const merged = new Map<string, any>();
  try {
    const results = await Promise.allSettled(queries.map(q => getDocsFromServer(q)));
    results.forEach(r => {
      if (r.status === 'fulfilled') collectSnapshotDocs(r.value, merged);
      else if (r.status === 'rejected') reportFirestoreError(r.reason);
    });
  } catch (err) {
    reportFirestoreError(err);
  }
  return Array.from(merged.values());
}

/**
 * Listens in real-time to owner's cloud invitations so the sender can see status changes (accepted/declined)
 * without exposing or querying invitations of other students.
 */
export function listenToOwnerCloudInvitations(
  ownerKonanIdOrUid: string, 
  onUpdate: (invitations: any[]) => void
): () => void {
  if (!db || isFirestoreQuotaBlocked() || !ownerKonanIdOrUid) return () => {};
  try {
    const colRef = collection(db, 'plus_invitations');
    const currentUid = auth?.currentUser?.uid || '';
    
    // Requête ciblée : uniquement les invitations appartenant à l'expéditeur (anti-fuite de données)
    const q = currentUid 
      ? query(colRef, where('senderUid', '==', currentUid))
      : query(colRef, where('senderKonanId', '==', ownerKonanIdOrUid.trim().toUpperCase()));

    return onSnapshot(q, (snapshot) => {
      const all: any[] = [];
      snapshot.forEach(docSnap => {
        const data = docSnap.data();
        all.push({ ...data, id: data.id || docSnap.id });
      });
      onUpdate(all);
    }, (err) => {
      reportFirestoreError(err);
      console.warn('Real-time owner cloud invitations listener error:', err);
    });
  } catch (err) {
    reportFirestoreError(err);
    console.warn('Failed to attach owner cloud invitations listener:', err);
    return () => {};
  }
}

/**
 * Backward compatibility wrapper : délègue vers la requête protégée par utilisateur.
 */
export function listenToAllCloudInvitations(onUpdate: (invitations: any[]) => void): () => void {
  const currentUid = auth?.currentUser?.uid || '';
  if (!currentUid) return () => {};
  return listenToOwnerCloudInvitations(currentUid, onUpdate);
}

/**
 * Direct fast fetch of invitations from Cloud Firestore restricted to the current authenticated user.
 */
export async function fetchAllCloudInvitations(): Promise<any[]> {
  const currentUid = auth?.currentUser?.uid;
  if (!db || isFirestoreQuotaBlocked() || !currentUid) return [];
  try {
    const colRef = collection(db, 'plus_invitations');
    const q = query(colRef, where('senderUid', '==', currentUid));
    const fetchPromise = getDocs(q);
    const timeoutPromise = new Promise<null>((resolve) => setTimeout(() => resolve(null), 3500));
    const snap: any = await Promise.race([fetchPromise, timeoutPromise]);
    if (!snap) return [];

    const all: any[] = [];
    snap.forEach((docSnap: any) => {
      const data = docSnap.data();
      all.push({ ...data, id: data.id || docSnap.id });
    });
    return all;
  } catch (err) {
    reportFirestoreError(err);
    console.warn('fetchAllCloudInvitations error:', err);
    return [];
  }
}



