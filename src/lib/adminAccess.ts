/**
 * ACCÈS À LA CONSOLE ADMINISTRATEUR : UNIQUEMENT EN LOCAL
 *
 * Les élèves ne doivent jamais voir de bouton « Administrateur » sur le site en ligne.
 * La console n'est proposée que sur l'ordinateur de développement :
 * - pendant `npm run dev` (mode développement de Vite) ;
 * - ou quand l'application est ouverte sur localhost / 127.0.0.1 / un nom en .local (ex. `npm run preview`).
 * Les données admin restent de toute façon protégées côté serveur (compte Google autorisé).
 */
export function isLocalAdminEnvironment(): boolean {
  if (import.meta.env?.DEV) return true;
  if (typeof window === 'undefined') return false;
  const host = window.location.hostname;
  return host === 'localhost' || host === '127.0.0.1' || host === '[::1]' || host.endsWith('.local');
}
