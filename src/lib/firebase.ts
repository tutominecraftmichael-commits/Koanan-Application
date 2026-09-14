import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
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

const STORAGE_CONFIG_KEY = 'konan_ai_custom_firebase_config';

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

export function isFirebaseConfigured(): boolean {
  return true;
}

export const app = getFirebaseApp();
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

/**
 * Real Google Sign-in with Popup via Firebase Authentication
 */
export async function signInWithGoogleReal(): Promise<{
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}> {
  if (!auth) {
    throw new Error('CONFIG_MISSING: Firebase n\'est pas encore configuré avec vos clés de projet. Veuillez renseigner votre configuration Firebase.');
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

    if (
      error.message?.includes('api-keys-are-not-supported') ||
      error.code === 'auth/api-keys-are-not-supported-by-this-api' ||
      error.code === 'auth/invalid-api-key'
    ) {
      try {
        localStorage.removeItem(STORAGE_CONFIG_KEY);
      } catch {}
      throw new Error('API_KEY_RESTRICTED');
    }

    if (error.code === 'auth/popup-closed-by-user') {
      throw new Error('La fenêtre de connexion Google a été fermée avant la validation.');
    }
    if (error.code === 'auth/unauthorized-domain') {
      throw new Error('UNAUTHORIZED_DOMAIN');
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
