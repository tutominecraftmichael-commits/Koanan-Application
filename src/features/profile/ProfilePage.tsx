/**
 * PAGE PROFIL (2026-11-17), comme sur Duolingo : toucher sa photo ouvre son profil (photo, nom, classe, ID,
 * XP au total, amis, abonnement), avec les accès : mode jour / nuit, formules, ajouter des amis, mes amis,
 * confidentialité, paramètres. La fiche publique d'un élève (ligue, liste d'amis) est ici aussi.
 */
import React, { useCallback, useEffect, useState } from 'react';
import { ArrowLeft, Check, ChevronRight, Copy, CreditCard, Moon, Search, Settings, Shield, Sun, UserCheck, UserPlus, Users, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import {
  fetchPublicProfile, friendErrorMessage, removeFriend, respondFriendRequest, saveFriendPrivacy, sendFriendRequest,
  type FriendCard, type FriendsState,
} from '../../services/friendsApi';

const AVATAR_COLORS = ['#1E3A5F', '#3B1F4A', '#1F4A3A', '#4A3A1F', '#1F3A4A', '#3A1F2A'];
const tierLabel = (t?: string) => (t === 'pro' ? 'KONAN Pro' : t === 'plus' ? 'KONAN Plus' : 'Gratuit');
const fr = (n?: number) => (n ?? 0).toLocaleString('fr-FR');

export const Avatar: React.FC<{ name: string; src?: string; size?: number; ring?: string }> = ({ name, src, size = 44, ring = '' }) => (src ? (
  <img src={src} alt="" referrerPolicy="no-referrer" className={`rounded-full object-cover shrink-0 ${ring}`} style={{ width: size, height: size }} />
) : (
  <span className={`rounded-full flex items-center justify-center font-extrabold text-white shrink-0 ${ring}`} style={{ width: size, height: size, fontSize: size * 0.4, background: AVATAR_COLORS[[...(name || '?')].reduce((h, c) => h + c.charCodeAt(0), 0) % AVATAR_COLORS.length] }}>
    {(name || '?').slice(0, 1).toUpperCase()}
  </span>
));

/** ID KONAN avec bouton « copier » (pour le donner à un ami). */
const KonanIdChip: React.FC<{ id: string }> = ({ id }) => {
  const [copied, setCopied] = useState(false);
  if (!id) return null;
  return (
    <button
      type="button"
      onClick={() => { navigator.clipboard?.writeText(id).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500); }).catch(() => {}); }}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/10 text-[12px] font-bold text-slate-700 dark:text-slate-200 cursor-pointer"
      aria-label={`Copier mon ID ${id}`}
    >
      ID <span className="font-mono">{id}</span> {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 opacity-70" />}
    </button>
  );
};

const Stat: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="flex-1 min-w-0 p-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/[0.08] text-center">
    <p className="m-0 text-[17px] font-extrabold tabular-nums text-slate-900 dark:text-white truncate">{value}</p>
    <p className="m-0 text-[11px] text-slate-600 dark:text-slate-400">{label}</p>
  </div>
);

/** Bouton d'action d'une fiche (ajouter, accepter, refuser, retirer…) selon le lien avec l'élève. */
const RelationActions: React.FC<{ card: FriendCard; onChanged: () => void; compact?: boolean }> = ({ card, onChanged, compact = false }) => {
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState('');
  const run = async (fn: () => Promise<{ ok: boolean; error?: string }>, done: string) => {
    setBusy(true);
    setMsg('');
    const r = await fn();
    setBusy(false);
    setMsg(r.ok ? done : friendErrorMessage(r.error));
    if (r.ok) onChanged();
  };
  const btn = `inline-flex items-center justify-center gap-1.5 ${compact ? 'h-9 px-3 text-[13px]' : 'h-11 px-4 text-sm'} rounded-xl font-extrabold cursor-pointer disabled:opacity-50`;
  return (
    <div className="space-y-1.5">
      <div className="flex flex-wrap gap-2">
        {card.relation === 'none' && card.canRequest && (
          <button type="button" disabled={busy} onClick={() => run(() => sendFriendRequest(card.konanId), 'Demande envoyée !')} className={`${btn} bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-950`}>
            <UserPlus className="w-4 h-4" /> Ajouter en ami
          </button>
        )}
        {card.relation === 'none' && !card.canRequest && <span className="text-xs text-slate-500 dark:text-slate-400">Cet élève ne reçoit pas de demandes d’ami.</span>}
        {card.relation === 'outgoing' && (
          <button type="button" disabled={busy} onClick={() => run(() => removeFriend(card.konanId), 'Demande annulée.')} className={`${btn} bg-slate-100 text-slate-700 dark:bg-white/[0.06] dark:text-slate-200`}>
            Demande envoyée · Annuler
          </button>
        )}
        {card.relation === 'incoming' && (
          <>
            <button type="button" disabled={busy} onClick={() => run(() => respondFriendRequest(card.konanId, true), 'Vous êtes amis !')} className={`${btn} bg-emerald-600 text-white`}>
              <Check className="w-4 h-4" /> Accepter
            </button>
            <button type="button" disabled={busy} onClick={() => run(() => respondFriendRequest(card.konanId, false), 'Demande refusée.')} className={`${btn} bg-slate-100 text-slate-700 dark:bg-white/[0.06] dark:text-slate-200`}>
              <X className="w-4 h-4" /> Refuser
            </button>
          </>
        )}
        {card.relation === 'friend' && (
          <>
            <span className={`${btn} bg-emerald-50 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-300 cursor-default`}><UserCheck className="w-4 h-4" /> Ami</span>
            <button type="button" disabled={busy} onClick={() => { if (window.confirm(`Retirer ${card.name} de tes amis ?`)) run(() => removeFriend(card.konanId), 'Retiré de tes amis.'); }} className={`${btn} bg-slate-100 text-slate-700 dark:bg-white/[0.06] dark:text-slate-200`}>
              Retirer
            </button>
          </>
        )}
      </div>
      {msg && <p className="m-0 text-xs font-bold text-slate-600 dark:text-slate-300">{msg}</p>}
    </div>
  );
};

/** Fiche publique d'un élève : photo, nom, ID, XP au total, nombre d'amis, abonnement (rien d'autre). */
export const PublicProfileSheet: React.FC<{ konanId: string; onClose: () => void; onChanged?: () => void }> = ({ konanId, onClose, onChanged }) => {
  const [card, setCard] = useState<FriendCard | null>(null);
  const [error, setError] = useState('');
  const load = useCallback(async () => {
    const r = await fetchPublicProfile(konanId);
    if (r.ok) setCard(r.data.profile); else setError(friendErrorMessage(r.error));
  }, [konanId]);
  useEffect(() => {
    let alive = true;
    fetchPublicProfile(konanId).then((r) => {
      if (!alive) return;
      if (r.ok) setCard(r.data.profile); else setError(friendErrorMessage(r.error));
    });
    return () => { alive = false; };
  }, [konanId]);
  return (
    <div className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center bg-slate-950/60 backdrop-blur-sm p-0 sm:p-4" onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-label="Profil de l’élève" className="w-full sm:max-w-sm rounded-t-3xl sm:rounded-3xl bg-slate-50 dark:bg-[#0F1626] border border-slate-200 dark:border-white/10 p-5 pb-8 space-y-4" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-end">
          <button type="button" onClick={onClose} aria-label="Fermer" className="w-9 h-9 rounded-full bg-slate-200/70 dark:bg-white/[0.06] flex items-center justify-center cursor-pointer"><X className="w-4 h-4" /></button>
        </div>
        {!card ? (
          <p className="text-center text-sm text-slate-600 dark:text-slate-300 py-6">{error || 'Je charge le profil…'}</p>
        ) : (
          <>
            <div className="flex flex-col items-center gap-2 text-center">
              <Avatar name={card.name} src={card.avatar} size={84} ring="ring-4 ring-sky-400/40" />
              <h2 className={`m-0 text-[22px] font-extrabold ${card.tier === 'pro' && !card.limited ? 'gold-shimmer-text' : 'text-slate-900 dark:text-white'}`}>{card.name}</h2>
              <KonanIdChip id={card.konanId} />
            </div>
            {card.limited ? (
              <p className="text-center text-sm text-slate-600 dark:text-slate-300">Ce profil est réservé à ses amis.</p>
            ) : (
              <div className="flex gap-2">
                <Stat value={fr(card.totalXp)} label="XP au total" />
                <Stat value={fr(card.friendsCount)} label={card.friendsCount === 1 ? 'ami' : 'amis'} />
                <Stat value={tierLabel(card.tier)} label="abonnement" />
              </div>
            )}
            {card.relation !== 'self' && <RelationActions card={card} onChanged={() => { load(); onChanged?.(); }} />}
          </>
        )}
      </div>
    </div>
  );
};

/** Une ligne de la liste (élève + boutons). Toucher la ligne ouvre sa fiche. */
const PersonRow: React.FC<{ card: FriendCard; onOpen: () => void; onChanged: () => void; hint?: string }> = ({ card, onOpen, onChanged, hint }) => (
  <li className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/[0.08] space-y-2.5">
    <button type="button" onClick={onOpen} className="w-full flex items-center gap-3 text-left cursor-pointer">
      <Avatar name={card.name} src={card.avatar} size={40} />
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-extrabold text-slate-900 dark:text-white">{card.name}</span>
        <span className="block text-[11px] font-mono text-slate-500 dark:text-slate-400">{card.konanId}{hint ? ` · ${hint}` : ''}</span>
      </span>
      <ChevronRight className="w-4 h-4 text-slate-400" />
    </button>
    <RelationActions card={card} onChanged={onChanged} compact />
  </li>
);

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="m-0 px-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{children}</p>
);

const MenuItem: React.FC<{ icon: React.ReactNode; label: string; detail?: React.ReactNode; onClick: () => void }> = ({ icon, label, detail, onClick }) => (
  <button type="button" onClick={onClick} className="w-full flex items-center gap-3 px-4 py-3.5 text-left cursor-pointer hover:bg-slate-50 dark:hover:bg-white/[0.03]">
    <span className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/[0.06] flex items-center justify-center text-slate-700 dark:text-slate-200 shrink-0">{icon}</span>
    <span className="flex-1 text-[15px] font-bold text-slate-900 dark:text-white">{label}</span>
    {detail}
    <ChevronRight className="w-4 h-4 text-slate-400" />
  </button>
);

export interface ProfilePageProps {
  onClose: () => void;
  name: string;
  avatar?: string;
  classLabel?: string;
  konanId: string;
  planTier: 'free' | 'pro' | 'plus';
  totalXp?: number;
  divisionName?: string | null;
  friends: FriendsState | null;
  friendsError?: string;
  onReloadFriends: () => void;
  onOpenPlans: () => void;
  onOpenSettings: () => void;
  onOpenPrivacyPolicy: () => void;
  /** Ouvrir directement un écran (ex. « Ajouter des amis » depuis la cloche) */
  initialScreen?: 'menu' | 'friends' | 'privacy';
}

export const ProfilePage: React.FC<ProfilePageProps> = (props) => {
  const { onClose, name, avatar, classLabel, konanId, planTier, totalXp, divisionName, friends, friendsError, onReloadFriends, onOpenPlans, onOpenSettings, onOpenPrivacyPolicy } = props;
  const { toggleTheme, isLight } = useTheme();
  const [screen, setScreen] = useState<'menu' | 'friends' | 'privacy'>(props.initialScreen || 'menu');
  const [openCard, setOpenCard] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [searchCard, setSearchCard] = useState<FriendCard | null>(null);
  const [searchMsg, setSearchMsg] = useState('');
  const [searching, setSearching] = useState(false);
  const [privacySaving, setPrivacySaving] = useState(false);

  useEffect(() => { onReloadFriends(); }, [onReloadFriends]);

  const doSearch = async () => {
    setSearching(true);
    setSearchMsg('');
    setSearchCard(null);
    const r = await fetchPublicProfile(search);
    setSearching(false);
    if (r.ok) setSearchCard(r.data.profile); else setSearchMsg(friendErrorMessage(r.error));
  };
  const changed = () => { onReloadFriends(); if (searchCard) fetchPublicProfile(searchCard.konanId).then((r) => r.ok && setSearchCard(r.data.profile)); };
  const friendsCount = friends?.me.friendsCount ?? 0;
  const incomingCount = friends?.incoming.length ?? 0;

  return (
    <div className="fixed inset-0 z-[80] bg-slate-50 dark:bg-[#0A0F1C] overflow-y-auto">
      <div className="max-w-xl mx-auto px-4 pt-4 pb-24 space-y-5">
        {/* Barre du haut */}
        <div className="flex items-center justify-between">
          <button type="button" onClick={() => (screen === 'menu' ? onClose() : setScreen('menu'))} aria-label="Retour" className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center cursor-pointer">
            <ArrowLeft className="w-5 h-5 text-slate-700 dark:text-slate-200" />
          </button>
          <span className="text-[15px] font-extrabold text-slate-900 dark:text-white">{screen === 'menu' ? 'Mon profil' : screen === 'friends' ? 'Mes amis' : 'Confidentialité'}</span>
          <span className="w-10" />
        </div>

        {screen === 'menu' && (
          <>
            <div className="flex flex-col items-center gap-2 text-center">
              <Avatar name={name} src={avatar} size={96} ring="ring-4 ring-sky-400/40" />
              <h1 className={`m-0 text-[24px] font-extrabold ${planTier !== 'free' ? 'gold-shimmer-text' : 'text-slate-900 dark:text-white'}`}>{name}</h1>
              {classLabel && <p className="m-0 text-[13px] text-slate-600 dark:text-slate-400">{classLabel}</p>}
              <KonanIdChip id={konanId} />
            </div>
            <div className="flex gap-2">
              <Stat value={fr(totalXp)} label="XP au total" />
              <Stat value={fr(friendsCount)} label={friendsCount === 1 ? 'ami' : 'amis'} />
              <Stat value={tierLabel(planTier)} label={divisionName ? `ligue ${divisionName}` : 'abonnement'} />
            </div>
            <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/[0.08] divide-y divide-slate-100 dark:divide-white/[0.06] overflow-hidden">
              <MenuItem
                icon={isLight ? <Moon className="w-[18px] h-[18px]" /> : <Sun className="w-[18px] h-[18px]" />}
                label="Mode Jour / Mode Nuit"
                detail={<span className="text-xs font-bold text-sky-600 dark:text-sky-400">{isLight ? 'Mode Jour' : 'Mode Nuit'}</span>}
                onClick={toggleTheme}
              />
              <MenuItem
                icon={<CreditCard className="w-[18px] h-[18px]" />}
                label="Modèle de paiement"
                detail={<span className="text-xs font-bold text-amber-700 dark:text-[#F5C451]">{tierLabel(planTier)}</span>}
                onClick={onOpenPlans}
              />
              <MenuItem
                icon={<UserPlus className="w-[18px] h-[18px]" />}
                label="Ajouter des amis"
                detail={incomingCount ? <span className="px-2 py-0.5 rounded-full bg-rose-500 text-white text-[11px] font-black">{incomingCount}</span> : <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">{konanId}</span>}
                onClick={() => setScreen('friends')}
              />
              <MenuItem
                icon={<Users className="w-[18px] h-[18px]" />}
                label="Mes amis"
                detail={<span className="text-xs font-bold text-slate-500 dark:text-slate-400">{friendsCount} {friendsCount === 1 ? 'ami' : 'amis'}</span>}
                onClick={() => setScreen('friends')}
              />
              <MenuItem
                icon={<Shield className="w-[18px] h-[18px]" />}
                label="Confidentialité"
                detail={<span className="text-xs font-bold text-slate-500 dark:text-slate-400">{friendsCount} {friendsCount === 1 ? 'ami' : 'amis'}</span>}
                onClick={() => setScreen('privacy')}
              />
              <MenuItem icon={<Settings className="w-[18px] h-[18px]" />} label="Paramètres" onClick={onOpenSettings} />
            </div>
          </>
        )}

        {screen === 'friends' && (
          <div className="space-y-5">
            {/* Ajouter par ID */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/[0.08] space-y-3">
              <p className="m-0 text-sm font-extrabold text-slate-900 dark:text-white">Ajouter un ami avec son ID</p>
              <p className="m-0 text-xs text-slate-600 dark:text-slate-400">Demande-lui son ID KONAN (dans son profil). Le tien : <span className="font-mono font-bold">{konanId || '—'}</span></p>
              <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); if (search.trim()) doSearch(); }}>
                <label className="sr-only" htmlFor="konan-friend-id">ID KONAN de ton ami</label>
                <input
                  id="konan-friend-id"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="KN-123456"
                  inputMode="text"
                  autoCapitalize="characters"
                  className="flex-1 min-w-0 h-11 px-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-300 dark:border-white/15 text-[15px] font-mono font-bold text-slate-900 dark:text-white placeholder:text-slate-400"
                />
                <button type="submit" disabled={searching || !search.trim()} className="h-11 px-4 rounded-xl bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-950 font-extrabold text-sm cursor-pointer disabled:opacity-50 inline-flex items-center gap-1.5">
                  <Search className="w-4 h-4" /> Chercher
                </button>
              </form>
              {searchMsg && <p className="m-0 text-xs font-bold text-rose-700 dark:text-rose-300">{searchMsg}</p>}
              {searchCard && (
                <ul className="m-0 p-0 list-none">
                  <PersonRow card={searchCard} onOpen={() => setOpenCard(searchCard.konanId)} onChanged={changed} />
                </ul>
              )}
            </div>

            {friendsError && !friends && <p className="text-sm text-slate-600 dark:text-slate-300">{friendsError}</p>}

            {(friends?.incoming.length ?? 0) > 0 && (
              <div className="space-y-2">
                <SectionTitle>Demandes reçues</SectionTitle>
                <ul className="m-0 p-0 list-none space-y-2">
                  {friends!.incoming.map((c) => <PersonRow key={c.konanId} card={c} hint="veut devenir ton ami" onOpen={() => setOpenCard(c.konanId)} onChanged={changed} />)}
                </ul>
              </div>
            )}

            <div className="space-y-2">
              <SectionTitle>Mes amis ({friendsCount})</SectionTitle>
              {friends && friends.friends.length === 0 && <p className="m-0 px-1 text-sm text-slate-600 dark:text-slate-400">Pas encore d’amis : ajoute tes camarades avec leur ID.</p>}
              <ul className="m-0 p-0 list-none space-y-2">
                {friends?.friends.map((c) => <PersonRow key={c.konanId} card={c} hint={`${fr(c.totalXp)} XP · ${tierLabel(c.tier)}`} onOpen={() => setOpenCard(c.konanId)} onChanged={changed} />)}
              </ul>
            </div>

            {(friends?.outgoing.length ?? 0) > 0 && (
              <div className="space-y-2">
                <SectionTitle>Demandes envoyées</SectionTitle>
                <ul className="m-0 p-0 list-none space-y-2">
                  {friends!.outgoing.map((c) => <PersonRow key={c.konanId} card={c} hint="en attente de sa réponse" onOpen={() => setOpenCard(c.konanId)} onChanged={changed} />)}
                </ul>
              </div>
            )}
          </div>
        )}

        {screen === 'privacy' && (
          <div className="space-y-4">
            {/* Carte indiquant le nombre d'amis dans la Confidentialité */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/[0.08] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </span>
                <div>
                  <p className="m-0 text-xs font-bold text-slate-500 dark:text-slate-400">Nombre d’amis connectés</p>
                  <p className="m-0 text-lg font-extrabold text-slate-900 dark:text-white tabular-nums">
                    {fr(friendsCount)} {friendsCount === 1 ? 'ami' : 'amis'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setScreen('friends')}
                className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-white/[0.06] text-xs font-extrabold text-slate-700 dark:text-slate-200 cursor-pointer"
              >
                Voir mes amis
              </button>
            </div>
            <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/[0.08] divide-y divide-slate-100 dark:divide-white/[0.06]">
              <label className="flex items-center gap-3 px-4 py-4 cursor-pointer">
                <span className="flex-1">
                  <span className="block text-[15px] font-bold text-slate-900 dark:text-white">Recevoir des demandes d’ami</span>
                  <span className="block text-xs text-slate-600 dark:text-slate-400">Si c’est désactivé, personne ne peut t’ajouter.</span>
                </span>
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-sky-500"
                  disabled={privacySaving || !friends}
                  checked={friends?.privacy.allowRequests ?? true}
                  onChange={async (e) => { setPrivacySaving(true); await saveFriendPrivacy({ allowRequests: e.target.checked }); setPrivacySaving(false); onReloadFriends(); }}
                />
              </label>
              <div className="px-4 py-4 space-y-2.5">
                <span className="block text-[15px] font-bold text-slate-900 dark:text-white">Qui peut voir mon profil (XP, amis, abonnement)</span>
                <div className="grid grid-cols-2 gap-2">
                  {([['all', 'Tout le monde'], ['friends', 'Mes amis seulement']] as const).map(([value, label]) => {
                    const active = (friends?.privacy.profileVisibility ?? 'all') === value;
                    return (
                      <button
                        key={value}
                        type="button"
                        disabled={privacySaving || !friends}
                        onClick={async () => { setPrivacySaving(true); await saveFriendPrivacy({ profileVisibility: value }); setPrivacySaving(false); onReloadFriends(); }}
                        className={`h-11 rounded-xl text-sm font-extrabold cursor-pointer border ${active ? 'bg-sky-500 text-white border-sky-500 dark:bg-sky-400 dark:text-slate-950 dark:border-sky-400' : 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-white/[0.04] dark:text-slate-200 dark:border-white/10'}`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
                <span className="block text-xs text-slate-600 dark:text-slate-400">Dans tous les cas, les autres voient ton nom, ta photo et ton ID dans la ligue.</span>
              </div>
            </div>
            <button type="button" onClick={onOpenPrivacyPolicy} className="w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/[0.08] cursor-pointer text-left">
              <Shield className="w-5 h-5 text-slate-600 dark:text-slate-300" />
              <span className="flex-1 text-[15px] font-bold text-slate-900 dark:text-white">Politique de confidentialité</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        )}
      </div>

      {openCard && <PublicProfileSheet konanId={openCard} onClose={() => setOpenCard(null)} onChanged={changed} />}
    </div>
  );
};
