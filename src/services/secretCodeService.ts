/**
 * Service de gestion et vérification du Code Secret d'accès à KONAN PRO.
 * Code officiel : EXAM2026
 */

export const KONAN_PRO_SECRET_CODE = 'EXAM2026';
export const SECRET_STORAGE_KEY = 'konan_pro_secret_unlocked_token';

/**
 * Vérifie si le client actuel possède une autorisation valide par code secret.
 */
export function isProSecretUnlocked(): boolean {
  try {
    const stored = localStorage.getItem(SECRET_STORAGE_KEY);
    return stored === KONAN_PRO_SECRET_CODE;
  } catch {
    return false;
  }
}

/**
 * Valide le code secret saisi par l'étudiant.
 * Insensible à la casse et insensible aux espaces superflus.
 */
export function verifyAndUnlockProSecret(inputCode: string): boolean {
  if (!inputCode || typeof inputCode !== 'string') return false;
  const clean = inputCode.trim().toUpperCase();
  if (clean === KONAN_PRO_SECRET_CODE) {
    try {
      localStorage.setItem(SECRET_STORAGE_KEY, KONAN_PRO_SECRET_CODE);
    } catch {}
    return true;
  }
  return false;
}

/**
 * Révoque l'autorisation du code secret et force le retour au modèle Gratuit.
 */
export function revokeProSecret(): void {
  try {
    localStorage.removeItem(SECRET_STORAGE_KEY);
  } catch {}
}
