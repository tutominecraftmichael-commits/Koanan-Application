/**
 * Amis (2026-11-17) : demandes par ID KONAN, réponses, fiche publique, confidentialité.
 * Tout passe par le serveur (/api/league, actions « amis ») : il vérifie l'élève connecté et écrit seul.
 */
import { auth } from '../lib/firebase';

export interface FriendCard {
  konanId: string;
  name: string;
  avatar?: string;
  relation: 'self' | 'friend' | 'outgoing' | 'incoming' | 'none';
  /** Profil réservé aux amis : seuls le nom, la photo et l'ID sont visibles */
  limited?: boolean;
  totalXp?: number;
  friendsCount?: number;
  tier?: 'free' | 'pro' | 'plus';
  division?: string | null;
  canRequest?: boolean;
  at?: number;
}
export interface FriendNotice { id: string; kind: 'request' | 'accepted' | 'declined'; at: number; from: FriendCard }
export interface FriendsState {
  me: { konanId: string; friendsCount: number; totalXp: number };
  friends: FriendCard[];
  incoming: FriendCard[];
  outgoing: FriendCard[];
  notices: FriendNotice[];
  privacy: { allowRequests: boolean; profileVisibility: 'all' | 'friends' };
}

const LOCAL_PRIVACY_KEY = 'konan_friend_privacy';

export function readLocalFriendPrivacy(): FriendsState['privacy'] {
  try {
    const raw = localStorage.getItem(LOCAL_PRIVACY_KEY);
    if (!raw) return { allowRequests: true, profileVisibility: 'all' };
    const parsed = JSON.parse(raw);
    return {
      allowRequests: parsed?.allowRequests !== false,
      profileVisibility: parsed?.profileVisibility === 'friends' ? 'friends' : 'all',
    };
  } catch {
    return { allowRequests: true, profileVisibility: 'all' };
  }
}

export function writeLocalFriendPrivacy(patch: Partial<FriendsState['privacy']>): FriendsState['privacy'] {
  const next: FriendsState['privacy'] = {
    ...readLocalFriendPrivacy(),
    ...(patch.allowRequests !== undefined ? { allowRequests: Boolean(patch.allowRequests) } : {}),
    ...(patch.profileVisibility !== undefined ? { profileVisibility: patch.profileVisibility === 'friends' ? 'friends' : 'all' } : {}),
  };
  try {
    localStorage.setItem(LOCAL_PRIVACY_KEY, JSON.stringify(next));
  } catch {
    /* ignore storage error */
  }
  return next;
}

/** Messages clairs pour chaque refus du serveur. */
export const FRIEND_ERRORS: Record<string, string> = {
  NOT_FOUND: 'Aucun élève avec cet ID. Vérifie les 6 chiffres (ex. KN-123456).',
  SELF: 'C’est ton propre ID !',
  ALREADY_FRIENDS: 'Vous êtes déjà amis.',
  ALREADY_SENT: 'Ta demande est déjà envoyée : attends sa réponse.',
  REQUESTS_CLOSED: 'Cet élève ne reçoit pas de demandes d’ami.',
  DAILY_LIMIT: 'Tu as envoyé beaucoup de demandes aujourd’hui. Réessaie demain.',
  TOO_MANY_PENDING: 'Trop de demandes en attente pour l’instant.',
  TOO_MANY_FRIENDS: 'La liste d’amis est pleine (200 amis au plus).',
  NO_REQUEST: 'Cette demande n’existe plus.',
};
export const friendErrorMessage = (code?: string) => FRIEND_ERRORS[code || ''] || 'Les amis ne répondent pas pour le moment. Réessaie dans un instant.';

export type FriendApiResult<T> =
  | { ok: true; data: T; error?: string }
  | { ok: false; data?: undefined; error: string };

async function call<T>(body: Record<string, unknown>): Promise<FriendApiResult<T>> {
  const user = auth?.currentUser;
  if (!user) return { ok: false, error: 'UNAUTHORIZED' };
  const attempt = async (refresh: boolean) => {
    const token = await user.getIdToken(refresh);
    const res = await fetch('/api/league', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(body),
    });
    let json: any = {};
    try { json = await res.json(); } catch { /* réponse vide */ }
    return { res, json };
  };
  try {
    let { res, json } = await attempt(false);
    if (res.status === 401) ({ res, json } = await attempt(true));
    if (res.ok && json?.success) return { ok: true, data: json as T };
    return { ok: false, error: String(json?.error || `HTTP ${res.status}`) };
  } catch {
    return { ok: false, error: 'NETWORK' };
  }
}

export async function fetchFriends(): Promise<FriendApiResult<FriendsState>> {
  const r = await call<Partial<FriendsState>>({ action: 'friends' });
  const localPriv = readLocalFriendPrivacy();
  if (!r.ok) return r;
  const raw = r.data || {};
  const privacy: FriendsState['privacy'] = raw.privacy && typeof raw.privacy === 'object'
    ? writeLocalFriendPrivacy({
        allowRequests: raw.privacy.allowRequests !== false,
        profileVisibility: raw.privacy.profileVisibility === 'friends' ? 'friends' : 'all',
      })
    : localPriv;
  return {
    ok: true,
    data: {
      me: {
        konanId: raw.me?.konanId || '',
        friendsCount: Number(raw.me?.friendsCount) || 0,
        totalXp: Number(raw.me?.totalXp) || 0,
      },
      friends: Array.isArray(raw.friends) ? raw.friends : [],
      incoming: Array.isArray(raw.incoming) ? raw.incoming : [],
      outgoing: Array.isArray(raw.outgoing) ? raw.outgoing : [],
      notices: Array.isArray(raw.notices) ? raw.notices : [],
      privacy,
    },
  };
}

export const fetchPublicProfile = (konanId: string) => call<{ profile: FriendCard }>({ action: 'profile', konanId });
export const sendFriendRequest = (konanId: string) => call<{ status: 'sent' | 'friends' }>({ action: 'friend_request', konanId });
export const respondFriendRequest = (konanId: string, accept: boolean) => call<{ status: string }>({ action: 'friend_respond', konanId, accept });
export const removeFriend = (konanId: string) => call<{ status: string }>({ action: 'friend_remove', konanId });

export async function saveFriendPrivacy(privacy: Partial<FriendsState['privacy']>): Promise<FriendApiResult<{ status: string; privacy: FriendsState['privacy'] }>> {
  const savedLocal = writeLocalFriendPrivacy(privacy);
  await call<{ status: string }>({ action: 'privacy', ...savedLocal }).catch(() => null);
  return { ok: true, data: { status: 'saved', privacy: savedLocal } };
}
