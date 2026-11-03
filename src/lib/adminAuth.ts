/**
 * Connexion à la console administrateur.
 *
 * Méthode principale : COMPTE ADMINISTRATEUR INDIVIDUEL. L'administrateur se connecte avec son compte
 * Google (protégé par la validation en deux étapes de Google) ; le serveur vérifie son jeton d'identité
 * Firebase et l'autorisation « admin » posée sur ce compte (scripts/set-admin-claim.mjs).
 *
 * Transition : l'ancien mot de passe partagé reste accepté par le serveur tant que la variable
 * ADMIN_PASSWORD existe sur Vercel. Il n'est jamais présent dans le code de l'application.
 */
import { GoogleAuthProvider, reauthenticateWithPopup, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from './firebase';

export type AdminLoginResult =
  | 'ok'
  | 'wrong_password'
  | 'not_admin'
  | 'google_required'
  | 'reauth_required'
  | 'google_cancelled'
  | 'not_configured'
  | 'network_error';

const MODE_KEY = 'konan_admin_mode'; // 'google' | 'password'
const TOKEN_KEY = 'konan_admin_token'; // uniquement en mode mot de passe (transition)
const FLAG_KEY = 'konan_admin_authenticated';

function setSession(mode: 'google' | 'password', password?: string) {
  try {
    sessionStorage.setItem(FLAG_KEY, 'true');
    sessionStorage.setItem(MODE_KEY, mode);
    if (mode === 'password' && password) sessionStorage.setItem(TOKEN_KEY, password);
    else sessionStorage.removeItem(TOKEN_KEY);
  } catch {
    // stockage indisponible (navigation privée) : la console redemandera la connexion
  }
}

export function clearAdminSession() {
  try {
    sessionStorage.removeItem(FLAG_KEY);
    sessionStorage.removeItem(MODE_KEY);
    sessionStorage.removeItem(TOKEN_KEY);
  } catch {
    // rien à nettoyer
  }
}

async function askServer(credential: string): Promise<AdminLoginResult> {
  try {
    const res = await fetch('/api/admin-data?verify=1', {
      headers: { Authorization: `Bearer ${credential}` },
      cache: 'no-store',
    });
    if (res.ok) return 'ok';
    let error = '';
    try {
      error = (await res.json())?.error || '';
    } catch {
      // réponse non JSON
    }
    if (res.status === 503) return 'not_configured';
    if (error === 'NOT_ADMIN') return 'not_admin';
    if (error === 'GOOGLE_REQUIRED') return 'google_required';
    if (error === 'REAUTH_REQUIRED' || error === 'TOKEN_EXPIRED') return 'reauth_required';
    return 'wrong_password';
  } catch {
    return 'network_error';
  }
}

function isGoogleUser() {
  return Boolean(auth?.currentUser?.providerData.some((p) => p.providerId === GoogleAuthProvider.PROVIDER_ID));
}

/** Connexion administrateur avec le compte Google (méthode principale). */
export async function loginAdminWithGoogle(): Promise<AdminLoginResult> {
  if (!auth) return 'not_configured';
  try {
    if (!isGoogleUser()) await signInWithPopup(auth, googleProvider);
    let token = await auth.currentUser!.getIdToken(true); // true : récupère l'autorisation « admin » à jour
    let result = await askServer(token);
    if (result === 'reauth_required' && auth.currentUser) {
      // Dernière connexion Google trop ancienne : on la refait (Google redemande la validation en deux étapes)
      await reauthenticateWithPopup(auth.currentUser, googleProvider);
      token = await auth.currentUser.getIdToken(true);
      result = await askServer(token);
    }
    if (result === 'ok') setSession('google');
    return result;
  } catch (err: any) {
    const code = String(err?.code || '');
    if (code.includes('popup-closed') || code.includes('cancelled-popup') || code.includes('popup-blocked')) return 'google_cancelled';
    if (code.includes('network')) return 'network_error';
    return 'google_cancelled';
  }
}

/** Transition : ancien mot de passe partagé (accepté tant que ADMIN_PASSWORD existe sur le serveur). */
export async function verifyAdminPassword(password: string): Promise<AdminLoginResult> {
  const entered = password.trim();
  if (!entered) return 'wrong_password';
  const result = await askServer(entered);
  if (result === 'ok') setSession('password', entered);
  return result;
}

/** En-tête d'autorisation pour les appels de la console (jeton Google frais, ou mot de passe de transition). */
export async function getAdminAuthorizationHeader(): Promise<string | null> {
  let mode = '';
  try {
    mode = sessionStorage.getItem(MODE_KEY) || '';
  } catch {
    // stockage indisponible
  }
  if (mode === 'google' && auth?.currentUser) {
    return `Bearer ${await auth.currentUser.getIdToken()}`;
  }
  try {
    const legacy = sessionStorage.getItem(TOKEN_KEY);
    if (legacy) return `Bearer ${legacy}`;
  } catch {
    // stockage indisponible
  }
  return null;
}

export function adminLoginErrorMessage(result: AdminLoginResult): string {
  switch (result) {
    case 'not_admin':
      return "Ce compte Google n'a pas l'accès administrateur.";
    case 'google_required':
      return "L'accès administrateur exige une connexion avec Google.";
    case 'reauth_required':
      return 'Reconnectez-vous avec Google pour confirmer votre identité.';
    case 'google_cancelled':
      return 'Connexion Google annulée ou fenêtre bloquée. Autorisez les fenêtres pop-up puis réessayez.';
    case 'not_configured':
      return 'Console admin non configurée sur le serveur.';
    case 'network_error':
      return 'Impossible de joindre le serveur. Vérifiez votre connexion puis réessayez.';
    default:
      return 'Mot de passe administrateur incorrect.';
  }
}
