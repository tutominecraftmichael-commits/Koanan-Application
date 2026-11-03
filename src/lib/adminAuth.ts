/**
 * Connexion à la console administrateur.
 * Le mot de passe n'est JAMAIS présent dans le code de l'application : il est vérifié par le serveur
 * (/api/admin-data, variable secrète ADMIN_PASSWORD). En cas de succès, il est gardé pour la session
 * afin d'authentifier les appels suivants de la console.
 */
export type AdminLoginResult = 'ok' | 'wrong_password' | 'not_configured' | 'network_error';

export async function verifyAdminPassword(password: string): Promise<AdminLoginResult> {
  const entered = password.trim();
  if (!entered) return 'wrong_password';
  try {
    const res = await fetch('/api/admin-data?verify=1', {
      headers: { Authorization: `Bearer ${entered}` },
      cache: 'no-store',
    });
    if (res.status === 503) return 'not_configured';
    if (!res.ok) return 'wrong_password';
    try {
      sessionStorage.setItem('konan_admin_authenticated', 'true');
      sessionStorage.setItem('konan_admin_token', entered);
    } catch {
      // stockage indisponible (navigation privée) : la console redemandera le mot de passe
    }
    return 'ok';
  } catch {
    return 'network_error';
  }
}

export function adminLoginErrorMessage(result: AdminLoginResult): string {
  switch (result) {
    case 'not_configured':
      return 'Console admin non configurée sur le serveur (variable ADMIN_PASSWORD manquante).';
    case 'network_error':
      return 'Impossible de joindre le serveur. Vérifiez votre connexion puis réessayez.';
    default:
      return 'Mot de passe administrateur incorrect.';
  }
}
