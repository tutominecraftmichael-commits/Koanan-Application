/**
 * Appels à /api/push-sync : le serveur KONAN enregistre l'appareil et les alertes de l'élève
 * (après vérification de son jeton de connexion Firebase). Le téléphone n'écrit plus directement
 * dans Firestore, ce qui évite les refus « permission-denied » des règles de la console.
 */
import { auth } from '../lib/firebase';

export type PushSyncResult = { success: boolean; error?: string; written?: number; deleted?: number };

const ERROR_LABELS: Record<string, string> = {
  UNAUTHORIZED: 'connexion au compte non reconnue, reconnecte-toi',
  TOKEN_EXPIRED: 'connexion expirée, réessaie',
  BAD_SUBSCRIPTION: 'abonnement du navigateur invalide',
  FORBIDDEN_ORIGIN: 'appel refusé',
  MISSING_SERVICE_ACCOUNT_KEY: 'serveur mal configuré (clé Firebase manquante)',
};

export async function callPushSync(body: Record<string, unknown>): Promise<PushSyncResult> {
  const user = auth?.currentUser;
  if (!user) return { success: false, error: 'connexion au compte pas encore prête' };
  const attempt = async (forceRefresh: boolean) => {
    const token = await user.getIdToken(forceRefresh);
    const res = await fetch('/api/push-sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(body),
    });
    let json: any = {};
    try { json = await res.json(); } catch { /* réponse vide */ }
    return { ok: res.ok && json?.success, status: res.status, json };
  };
  try {
    let r = await attempt(false);
    if (!r.ok && (r.json?.error === 'TOKEN_EXPIRED' || r.status === 401)) r = await attempt(true);
    if (r.ok) return { success: true, written: r.json.written, deleted: r.json.deleted };
    const code = String(r.json?.error || `HTTP ${r.status}`);
    return { success: false, error: ERROR_LABELS[code] || code };
  } catch (err: any) {
    return { success: false, error: err?.message?.includes('fetch') ? 'pas de connexion Internet' : String(err?.message || err) };
  }
}
