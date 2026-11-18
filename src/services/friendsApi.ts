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
export const sendFriendRequest = (konanId: string) => call<{ status: 'sent' | 'friends'; profile?: FriendCard }>({ action: 'friend_request', konanId });
export const respondFriendRequest = (konanId: string, accept: boolean) => call<{ status: string }>({ action: 'friend_respond', konanId, accept });
export const removeFriend = (konanId: string) => call<{ status: string }>({ action: 'friend_remove', konanId });

export async function saveFriendPrivacy(privacy: Partial<FriendsState['privacy']>): Promise<FriendApiResult<{ status: string; privacy: FriendsState['privacy'] }>> {
  const savedLocal = writeLocalFriendPrivacy(privacy);
  await call<{ status: string }>({ action: 'privacy', ...savedLocal }).catch(() => null);
  return { ok: true, data: { status: 'saved', privacy: savedLocal } };
}

// ============================================================================
// OR (GOLD) & QUÊTES D'XP EN DUO ENTRE AMIS (HEBDOMADAIRES)
// ============================================================================

export type FriendQuestStatus = 'pending' | 'active' | 'completed' | 'expired' | 'declined';

export interface FriendQuestParticipant {
  konanId: string;
  name: string;
  avatar?: string;
  accepted: boolean;
  xpContributed: number;
  frozen?: boolean;
}

export interface FriendQuest {
  id: string;
  weekId: string;
  status: FriendQuestStatus;
  targetXp: number;
  rewardGold: number;
  expiresAt: number;
  createdAt: number;
  completedAt: number | null;
  myRole: 'A' | 'B';
  me: FriendQuestParticipant;
  partner: FriendQuestParticipant;
  claimedByMe: boolean;
  partnerClaimed: boolean;
  lastNudgeAt: number;
}

export interface QuestNotice {
  id: string;
  kind: 'quest_invite' | 'quest_accepted' | 'quest_declined' | 'quest_completed' | 'quest_nudge';
  questId: string;
  at: number;
  fromName: string;
  fromKonanId: string;
  fromAvatar?: string;
  message: string;
  targetXp: number;
  rewardGold: number;
  pending: boolean;
}

export interface QuestState {
  gold: number;
  weekId: string;
  weekEndsAt: number;
  isFrozen: boolean;
  reputation: number;
  activeQuest: FriendQuest | null;
  outgoingQuest: FriendQuest | null;
  incomingQuests: FriendQuest[];
  expiredQuest: FriendQuest | null;
  questNotices: QuestNotice[];
}

export const QUEST_ERRORS: Record<string, string> = {
  NOT_FOUND: 'Impossible de trouver cette quête ou cet ami.',
  SELF: 'Tu ne peux pas faire une quête en duo avec toi-même.',
  NOT_FRIENDS: 'Vous devez d’abord être amis pour lancer une quête ensemble.',
  ALREADY_IN_QUEST: 'Tu participes déjà à une quête en duo cette semaine.',
  PARTNER_BUSY: 'Cet ami participe déjà à une quête en duo cette semaine.',
  ALREADY_PROPOSED: 'Tu as déjà envoyé une proposition à cet ami cette semaine.',
  OUTGOING_EXISTS: 'Tu as déjà une proposition en attente. Annule-la d’abord pour choisir un autre ami.',
  QUEST_NOT_PENDING: 'Cette invitation n’est plus en attente.',
  QUEST_EXPIRED: 'La semaine de cette quête est déjà terminée.',
  QUEST_NOT_ACTIVE: 'Cette quête n’est pas active.',
  NOT_COMPLETED: 'L’objectif d’XP n’est pas encore atteint.',
  ALREADY_CLAIMED: 'Tu as déjà réclamé ton Or pour cette quête.',
  NUDGE_COOLDOWN: 'Tu as déjà relancé ton ami récemment. Tu peux quand même lui envoyer un message WhatsApp !',
  FORBIDDEN: 'Tu n’as pas accès à cette action.',
};

export const questErrorMessage = (code?: string) =>
  QUEST_ERRORS[code || ''] || 'Impossible de joindre le serveur des quêtes pour le moment. Réessaie dans un instant.';

export async function fetchQuestState(): Promise<FriendApiResult<QuestState>> {
  const r = await call<Partial<QuestState>>({ action: 'quest_state' });
  if (!r.ok) return r;
  const raw = r.data || {};
  return {
    ok: true,
    data: {
      gold: typeof raw.gold === 'number' && Number.isFinite(raw.gold) ? raw.gold : 100,
      weekId: String(raw.weekId || ''),
      weekEndsAt: Number(raw.weekEndsAt) || 0,
      isFrozen: Boolean(raw.isFrozen),
      reputation: typeof raw.reputation === 'number' ? raw.reputation : 100,
      activeQuest: raw.activeQuest || null,
      outgoingQuest: raw.outgoingQuest || null,
      incomingQuests: Array.isArray(raw.incomingQuests) ? raw.incomingQuests : [],
      expiredQuest: raw.expiredQuest || null,
      questNotices: Array.isArray(raw.questNotices) ? raw.questNotices : [],
    },
  };
}

export const proposeFriendQuest = (friendKonanId: string) =>
  call<{ status: 'pending' | 'active'; quest?: FriendQuest }>({ action: 'quest_propose', friendKonanId });

export const respondFriendQuest = (questId: string, accept: boolean) =>
  call<{ status: 'active' | 'declined'; quest?: FriendQuest }>({ action: 'quest_respond', questId, accept });

export const cancelFriendQuest = (questId: string) =>
  call<{ status: string }>({ action: 'quest_cancel', questId });

export const claimFriendQuestReward = (questId: string) =>
  call<{ gold: number; rewardGold: number; quest?: FriendQuest }>({ action: 'quest_claim', questId });

export const nudgeFriendQuestPartner = (questId: string) =>
  call<{ status: string; message: string; lastNudgeAt: number }>({ action: 'quest_nudge', questId });
