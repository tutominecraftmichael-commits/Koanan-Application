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
 * Retrieves the Firebase configuration from environment variables or default project config.
 */
export function getFirebaseConfig(): FirebaseConfig {
  const env = import.meta.env;
  if (env.VITE_FIREBASE_API_KEY && env.VITE_FIREBASE_AUTH_DOMAIN && env.VITE_FIREBASE_PROJECT_ID) {
    return {
      apiKey: env.VITE_FIREBASE_API_KEY,
      authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET || DEFAULT_FIREBASE_CONFIG.storageBucket,
      messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID || DEFAULT_FIREBASE_CONFIG.messagingSenderId,
      appId: env.VITE_FIREBASE_APP_ID || DEFAULT_FIREBASE_CONFIG.appId,
    };
  }

  return DEFAULT_FIREBASE_CONFIG;
}

/**
 * Initializes or retrieves the Firebase app instance safely.
 */
function getFirebaseApp() {
  const config = getFirebaseConfig();

  if (getApps().length > 0) {
    return getApp();
  }

  return initializeApp(config);
}

import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  onSnapshot 
} from 'firebase/firestore';

export function isFirebaseConfigured(): boolean {
  return true;
}

export const app = getFirebaseApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export interface RealAuthUser {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
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

    return {
      uid: user.uid,
      displayName: finalName,
      email: user.email,
      photoURL: finalAvatar,
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
    throw new Error(error.message || 'Impossible d\'envoyer l\'email de réinitialisation.');
  }
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

/**
 * Persists user state directly to Cloud Firestore so all devices (PC, mobile, tablet)
 * share the exact same schedule, subjects, and study plans.
 */
export async function syncUserStateToCloud(uid: string, data: any): Promise<void> {
  if (!db || !uid) return;
  try {
    const userRef = doc(db, 'users', uid);
    // Sanitize data (remove undefined fields that Firestore doesn't like)
    const sanitized = JSON.parse(JSON.stringify(data));
    const currentHash = JSON.stringify(sanitized);
    if (lastSyncedHashByUid[uid] === currentHash) {
      return;
    }
    lastSyncedHashByUid[uid] = currentHash;
    await setDoc(userRef, {
      ...sanitized,
      lastSyncedAt: new Date().toISOString()
    }, { merge: true });
  } catch (err) {
    console.warn('Firestore sync failed (offline or permissions):', err);
  }
}

/**
 * Loads the user state from Cloud Firestore.
 */
export async function loadUserStateFromCloud(uid: string): Promise<any | null> {
  if (!db || !uid) return null;
  try {
    const userRef = doc(db, 'users', uid);
    const snapPromise = getDoc(userRef);
    const timeoutPromise = new Promise<null>((resolve) => setTimeout(() => resolve(null), 2500));
    const snap: any = await Promise.race([snapPromise, timeoutPromise]);
    if (snap && typeof snap.exists === 'function' && snap.exists()) {
      return snap.data();
    }
  } catch (err) {
    console.warn('Firestore load failed (offline or permissions):', err);
  }
  return null;
}

/**
 * Listens in real-time to Cloud Firestore user state updates across all connected devices.
 */
export function listenToUserCloudState(uid: string, onUpdate: (data: any) => void): () => void {
  if (!db || !uid) return () => {};
  try {
    const userRef = doc(db, 'users', uid);
    return onSnapshot(userRef, (snap) => {
      if (snap.exists()) {
        onUpdate(snap.data());
      }
    }, (err) => {
      console.warn('Firestore snapshot listener warning:', err);
    });
  } catch (err) {
    console.warn('Failed to attach Firestore listener:', err);
    return () => {};
  }
}

