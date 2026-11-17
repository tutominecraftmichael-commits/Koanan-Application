/**
 * Appels à /api/league : envoie les gains d'XP (vérifiés et recomptés par le serveur) et reçoit le
 * classement de la semaine. Le serveur fait foi : une triche sur le téléphone ne change pas le classement.
 */
import { auth } from '../lib/firebase';
import type { LeagueEvent } from '../types';

export interface LeagueRow { rank: number; name: string; classLabel: string; avatar?: string; xp: number; me: boolean; tier?: 'free' | 'pro' | 'plus' }
export interface LeagueBoard {
  eligible: boolean;
  /** Pourquoi l'élève n'est pas dans la ligue : réputation trop basse ou classe sans cours (LMD, BTS…) */
  reason?: 'reputation' | 'no_courses' | null;
  /** Réputation de 80 % ou moins : classement visible, mais division gelée (ni montée ni descente) */
  frozen?: boolean;
  reputation: number;
  division: number;
  divisionName: string;
  weekId: string;
  endsAt: number;
  weekXp: number;
  /** Total de tous les XP gagnés (toutes semaines et divisions, gel compris), pour le profil. */
  totalXp?: number;
  promoteCount: number;
  keepCount: number;
  demoteCount: number | null;
  lastResult: { weekId: string; rank: number; size: number; movement: 'up' | 'down' | 'stay' | 'frozen'; fromDivision: number; toDivision: number; weekXp: number } | null;
  rows: LeagueRow[];
}
export interface LeagueSyncResult {
  success: boolean;
  error?: string;
  accepted?: string[];
  rejected?: Array<{ id: string; reason: string }>;
  board?: LeagueBoard;
}

export async function callLeague(body: { events: LeagueEvent[]; reputation?: number; displayName?: string; classLabel?: string; gradeLevel?: string; avatar?: string }): Promise<LeagueSyncResult> {
  const user = auth?.currentUser;
  if (!user) return { success: false, error: 'connexion au compte pas encore prête' };
  const attempt = async (forceRefresh: boolean) => {
    const token = await user.getIdToken(forceRefresh);
    const res = await fetch('/api/league', {
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
    if (r.ok) return { success: true, accepted: r.json.accepted, rejected: r.json.rejected, board: r.json.board };
    return { success: false, error: String(r.json?.error || `HTTP ${r.status}`) };
  } catch (err: any) {
    return { success: false, error: err?.message?.includes('fetch') ? 'pas de connexion Internet' : String(err?.message || err) };
  }
}

export const DIVISION_STYLES: Record<number, { name: string; badge: string; ring: string; text: string }> = {
  1: { name: 'Bronze', badge: 'bg-amber-800', ring: 'ring-amber-700/40', text: 'text-amber-800 dark:text-amber-400' },
  2: { name: 'Argent', badge: 'bg-slate-400', ring: 'ring-slate-400/50', text: 'text-slate-600 dark:text-slate-300' },
  3: { name: 'Gold', badge: 'bg-yellow-500', ring: 'ring-yellow-500/50', text: 'text-yellow-700 dark:text-yellow-300' },
  4: { name: 'Diamant', badge: 'bg-blue-600', ring: 'ring-blue-500/50', text: 'text-blue-700 dark:text-blue-300' },
  5: { name: 'Perle', badge: 'bg-pink-500', ring: 'ring-pink-500/50', text: 'text-pink-700 dark:text-pink-300' },
};
