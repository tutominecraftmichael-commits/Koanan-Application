import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  Clock,
  ShieldCheck, 
  GraduationCap,
  Bell,
  Crown,
  Check,
  CheckCircle2,
  X,
  XCircle
} from 'lucide-react';
import type { ActiveAppView, UserAccount, PlusInvitationNotification } from '../../types';
import type { FriendCard, FriendNotice, FriendQuest, QuestNotice } from '../../services/friendsApi';
import { GoldCoinIcon } from '../../features/gamification/GoldCoin';
import { AnimatedAvatar } from '../../features/avatar/AnimatedAvatar';
import type { AvatarConfig } from '../../lib/avatar/avatarCatalog';
import { Badge } from '../ui/Badge';
import { KonanCube } from '../common/KonanCube';
import { useLanguage, t } from '../../lib/i18n';
import { formatNotificationTime } from '../../lib/utils';
import { soundFX } from '../../lib/audioEffects';
import { verifyAdminPassword, adminLoginErrorMessage } from '../../lib/adminAuth';
import { AdminGoogleLoginButton } from '../common/AdminGoogleLoginButton';
import { 
  AnimatedDashboardIcon,
  AnimatedSubjectsIcon,
  AnimatedAnalyticsIcon,
  AnimatedScheduleIcon,
  AnimatedPlannerIcon
} from '../common/AnimatedNavIcons';
import { BarChart3, BookOpen, Infinity as InfinityIcon, List, Trophy, Zap } from 'lucide-react';

export interface OwnerNotificationItem {
  id: string;
  type: 'accepted' | 'declined';
  name: string;
  konanId?: string;
  timestamp?: string;
}

/** Réponse de l'administrateur à un paiement KONAN Pro (Wave / Orange Money). */
export interface PaymentNotice {
  id: string;
  status: 'confirmed' | 'rejected';
  amount: number;
  ref: string;
  at: string;
  endsAt?: string | null;
  message?: string | null;
}

/** Message « paiement accepté / refusé » dans l'onglet des notifications (texte clair, mode jour et nuit). */
const PaymentNoticeItem: React.FC<{ notice: PaymentNotice; onOpen?: () => void }> = ({ notice, onOpen }) => {
  const ok = notice.status === 'confirmed';
  const amount = `${Number(notice.amount || 0).toLocaleString('fr-FR').replace(/ | /g, ' ')} FCFA`;
  const until = notice.endsAt ? new Date(notice.endsAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' }) : '';
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`w-full p-3 rounded-xl border flex items-start gap-2.5 shadow-sm text-left transition-all ${
        ok
          ? 'bg-emerald-50/80 border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-500/30'
          : 'bg-rose-50/80 border-rose-200 dark:bg-rose-950/40 dark:border-rose-500/30'
      }`}
    >
      <span className={`p-1.5 rounded-lg shrink-0 mt-0.5 ${ok ? 'bg-emerald-100 dark:bg-emerald-500/20' : 'bg-rose-100 dark:bg-rose-500/20'}`}>
        {ok ? <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />}
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center justify-between gap-1">
          <span className={`text-[9px] font-black uppercase tracking-wider ${ok ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-700 dark:text-rose-400'}`}>
            {ok ? 'Paiement accepté' : 'Paiement refusé'}
          </span>
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 shrink-0">{formatNotificationTime(notice.at)}</span>
        </span>
        <span className="block text-xs font-bold text-slate-900 dark:text-white leading-snug mt-1">
          {ok
            ? `Ton paiement de ${amount} a été vérifié. Tu es KONAN Pro${until ? ` jusqu’au ${until}` : ''} !`
            : `Ton paiement de ${amount} (n° ${notice.ref}) n’a pas été validé. KONAN Pro est retiré.`}
        </span>
        {!ok && notice.message && (
          <span className="block text-[11px] text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">{notice.message}</span>
        )}
      </span>
    </button>
  );
};

/**
 * Message d'ami dans la cloche (2026-11-17) : demande reçue (Accepter / Refuser directement ici),
 * demande acceptée ou refusée par l'autre. Toucher le nom ouvre « Mes amis ».
 */
const FriendNoticeItem: React.FC<{ notice: FriendNotice; onRespond?: (konanId: string, accept: boolean) => Promise<void>; onOpen?: () => void }> = ({ notice, onRespond, onOpen }) => {
  const [busy, setBusy] = useState(false);
  const who = notice.from.name || 'Un élève';
  const whoWithId = notice.from.konanId ? `${who} (${notice.from.konanId})` : who;
  const tone = notice.kind === 'declined'
    ? 'bg-rose-50/80 border-rose-200 dark:bg-rose-950/40 dark:border-rose-500/30'
    : notice.kind === 'accepted'
      ? 'bg-emerald-50/80 border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-500/30'
      : 'bg-sky-50/80 border-sky-200 dark:bg-sky-950/40 dark:border-sky-500/30';
  const label = notice.kind === 'request' ? 'Demande d’ami' : notice.kind === 'accepted' ? 'Demande acceptée' : 'Demande refusée';
  const text = notice.kind === 'request'
    ? `${whoWithId} veut devenir ton ami sur KONAN.`
    : notice.kind === 'accepted' ? `${whoWithId} a accepté ta demande : vous êtes amis !` : `${whoWithId} n’a pas accepté ta demande d’ami.`;
  const pending = notice.kind === 'request' && notice.from.relation === 'incoming';
  return (
    <div className={`w-full p-3 rounded-xl border flex items-start gap-2.5 shadow-sm text-left ${tone}`}>
      <button type="button" onClick={onOpen} className="shrink-0 cursor-pointer" aria-label={`Voir ${who}`}>
        <AnimatedAvatar config={notice.from.avatarConfig} seed={notice.from.konanId || who} size={34} alt={who} />
      </button>
      <span className="min-w-0 flex-1">
        <span className="flex items-center justify-between gap-1">
          <span className="text-[9px] font-black uppercase tracking-wider text-slate-600 dark:text-slate-300">{label}</span>
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 shrink-0">{formatNotificationTime(new Date(notice.at).toISOString())}</span>
        </span>
        <span className="block text-xs font-bold text-slate-900 dark:text-white leading-snug mt-1">{text}</span>
        {pending && onRespond && (
          <span className="flex gap-2 mt-2.5">
            <button
              type="button"
              disabled={busy}
              onClick={async (e) => {
                e.stopPropagation();
                e.preventDefault();
                setBusy(true);
                await onRespond(notice.from.konanId, true);
                setBusy(false);
              }}
              className="flex-1 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black cursor-pointer disabled:opacity-50 inline-flex items-center justify-center gap-1 shadow-sm"
            >
              <Check className="w-3.5 h-3.5" />
              <span>{busy ? 'En cours…' : 'Accepter'}</span>
            </button>
            <button
              type="button"
              disabled={busy}
              onClick={async (e) => {
                e.stopPropagation();
                e.preventDefault();
                setBusy(true);
                await onRespond(notice.from.konanId, false);
                setBusy(false);
              }}
              className="py-2 px-3 rounded-xl bg-white hover:bg-rose-50 text-slate-700 hover:text-rose-700 border border-slate-300 dark:bg-white/[0.06] dark:text-slate-200 dark:border-white/15 text-xs font-black cursor-pointer disabled:opacity-50 inline-flex items-center justify-center gap-1"
            >
              <X className="w-3.5 h-3.5" />
              <span>Refuser</span>
            </button>
          </span>
        )}
      </span>
    </div>
  );
};

/** Notification de quête en duo dans la cloche : invitation (« C'est parti ! » / « Refuser »), relance, réussite. */
const QuestNoticeItem: React.FC<{
  notice: QuestNotice;
  onRespond?: (questId: string, accept: boolean) => Promise<void>;
  onOpen?: () => void;
}> = ({ notice, onRespond, onOpen }) => {
  const [busy, setBusy] = useState(false);
  const who = notice.fromName || 'Un ami';
  const tone =
    notice.kind === 'quest_declined'
      ? 'bg-rose-50/80 border-rose-200 dark:bg-rose-950/40 dark:border-rose-500/30'
      : notice.kind === 'quest_completed' || notice.kind === 'quest_accepted'
        ? 'bg-emerald-50/80 border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-500/30'
        : notice.kind === 'quest_nudge'
          ? 'bg-amber-50/80 border-amber-200 dark:bg-amber-950/40 dark:border-amber-500/30'
          : 'bg-sky-50/80 border-sky-200 dark:bg-sky-950/40 dark:border-sky-500/30';
  const label =
    notice.kind === 'quest_invite'
      ? 'Invitation · Quête en duo'
      : notice.kind === 'quest_accepted'
        ? 'Quête lancée !'
        : notice.kind === 'quest_declined'
          ? 'Quête déclinée'
          : notice.kind === 'quest_completed'
            ? `Quête réussie · +${notice.rewardGold} pièces d’or`
            : 'Encouragement · Quête';

  return (
    <div className={`w-full p-3 rounded-xl border flex items-start gap-2.5 shadow-sm text-left ${tone}`}>
      <button type="button" onClick={onOpen} className="shrink-0 cursor-pointer" aria-label={`Ouvrir la quête avec ${who}`}>
        <AnimatedAvatar seed={notice.fromKonanId || who} size={34} alt={who} />
      </button>
      <span className="min-w-0 flex-1">
        <span className="flex items-center justify-between gap-1">
          <span className="text-[9px] font-black uppercase tracking-wider text-slate-600 dark:text-slate-300">{label}</span>
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 shrink-0">
            {formatNotificationTime(new Date(notice.at).toISOString())}
          </span>
        </span>
        <button type="button" onClick={onOpen} className="block text-left w-full text-xs font-bold text-slate-900 dark:text-white leading-snug mt-1 cursor-pointer">
          {notice.message}
        </button>
        {notice.pending && onRespond && (
          <span className="flex gap-2 mt-2.5">
            <button
              type="button"
              disabled={busy}
              onClick={async (e) => {
                e.stopPropagation();
                e.preventDefault();
                setBusy(true);
                await onRespond(notice.questId, true);
                setBusy(false);
              }}
              className="flex-1 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black cursor-pointer disabled:opacity-50 inline-flex items-center justify-center gap-1 shadow-sm"
            >
              <Check className="w-3.5 h-3.5" />
              <span>{busy ? 'Lancement…' : 'C’est parti !'}</span>
            </button>
            <button
              type="button"
              disabled={busy}
              onClick={async (e) => {
                e.stopPropagation();
                e.preventDefault();
                setBusy(true);
                await onRespond(notice.questId, false);
                setBusy(false);
              }}
              className="py-2 px-3 rounded-xl bg-white hover:bg-rose-50 text-slate-700 hover:text-rose-700 border border-slate-300 dark:bg-white/[0.06] dark:text-slate-200 dark:border-white/15 text-xs font-black cursor-pointer disabled:opacity-50 inline-flex items-center justify-center gap-1"
            >
              <X className="w-3.5 h-3.5" />
              <span>Refuser</span>
            </button>
          </span>
        )}
      </span>
    </div>
  );
};

export interface NavbarProps {
  activeView: ActiveAppView;
  onNavigate: (view: ActiveAppView) => void;
  studentName: string;
  academicLevel: string;
  userAccount?: UserAccount;
  konanId?: string;
  planTier?: 'free' | 'pro' | 'plus';
  onOpenPresetModal: () => void;
  onExportData: () => void;
  onImportData: () => void;
  onResetData: () => void;
  onLogout?: () => void;
  onOpenSettings?: () => void;
  totalStudySessions: number;
  completedSessions: number;
  isDemoMode?: boolean;
  onEnterDemoMode?: () => void;
  onViewPricing?: () => void;
  onUpgradeToPro?: () => void;
  pendingInvitations?: PlusInvitationNotification[];
  acceptedNotifications?: { id: string; name: string; konanId?: string; timestamp?: string }[];
  ownerNotifications?: OwnerNotificationItem[];
  /** Paiements KONAN Pro acceptés ou refusés par l'administrateur */
  paymentNotices?: PaymentNotice[];
  onOpenPaymentNotice?: () => void;
  /** Amis : demandes reçues et réponses (cloche), réponse directe, page Profil */
  friendNotices?: FriendNotice[];
  incomingFriends?: FriendCard[];
  onRespondFriend?: (konanId: string, accept: boolean) => Promise<void>;
  onClearFriendNotices?: () => Promise<void>;
  onOpenFriends?: () => void;
  onOpenProfile?: () => void;
  /** Avatar animé personnalisé de l'élève */
  avatarConfig?: AvatarConfig | null;
  hasCustomizedAvatar?: boolean;
  /** Monnaie virtuelle Or (Gold) + notifications de quêtes en duo */
  gold?: number | null;
  onOpenShop?: () => void;
  questNotices?: QuestNotice[];
  incomingQuests?: FriendQuest[];
  onRespondQuest?: (questId: string, accept: boolean) => Promise<void>;
  onOpenQuest?: () => void;
  /** Actualise immédiatement les notifications (amis + quêtes) à l'ouverture de la cloche */
  onRefreshNotifications?: () => void;
  onAcceptInvitation?: (invitation: PlusInvitationNotification) => void;
  onDeclineInvitation?: (invitation: PlusInvitationNotification) => void;
  /** Énergie ⚡ affichée en haut à droite (null : pas d'icône d'exercices pour cet élève) */
  energy?: { value: number; unlimited: boolean } | null;
  onOpenExercises?: () => void;
}

/** Icône KONAN (le cube) pour l'onglet Accueil de la barre du bas. */
const KonanTabIcon: React.FC<{ isActive?: boolean; className?: string }> = ({ isActive }) => (
  // Le cube de la maquette (charte Excellence) : trois faces, sans contour
  <svg width={isActive ? 26 : 24} height={isActive ? 26 : 24} viewBox="0 0 120 120" aria-hidden="true" style={{ opacity: isActive ? 1 : 0.75 }}>
    <polygon points="60,14 104,38 60,62 16,38" fill="#BAE6FD" />
    <polygon points="16,38 60,62 60,110 16,86" fill="#38BDF8" />
    <polygon points="60,62 104,38 104,86 60,110" fill="#0284C7" />
  </svg>
);
const lucideTab = (Icon: React.FC<{ className?: string; strokeWidth?: number }>) =>
  ({ className }: { isActive?: boolean; className?: string }) => <Icon className={className} strokeWidth={2.2} />;
const PlanningTabIcon = lucideTab(List);
const SubjectsTabIcon = lucideTab(BookOpen);
const StatsTabIcon = lucideTab(BarChart3);
const LeagueTabIcon = lucideTab(Trophy);
const ScheduleTabIcon = lucideTab(Clock);

const SEEN_NOTIFICATIONS_KEY = 'konan_seen_notification_ids';

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  onNavigate,
  studentName,
  academicLevel: _academicLevel,
  userAccount,
  konanId: _konanId,
  planTier,
  onOpenPresetModal: _onOpenPresetModal,
  onExportData: _onExportData,
  onImportData: _onImportData,
  onResetData: _onResetData,
  onLogout: _onLogout,
  onOpenSettings,
  totalStudySessions: _totalStudySessions,
  completedSessions: _completedSessions,
  isDemoMode = false,
  onEnterDemoMode,
  onViewPricing,
  onUpgradeToPro: _onUpgradeToPro,
  pendingInvitations = [],
  acceptedNotifications = [],
  ownerNotifications,
  paymentNotices = [],
  onOpenPaymentNotice,
  friendNotices = [],
  incomingFriends = [],
  onRespondFriend,
  onClearFriendNotices,
  onOpenFriends,
  onOpenProfile,
  avatarConfig = null,
  hasCustomizedAvatar = false,
  gold = null,
  onOpenShop,
  questNotices = [],
  incomingQuests = [],
  onRespondQuest,
  onOpenQuest,
  onRefreshNotifications,
  onAcceptInvitation,
  onDeclineInvitation,
  energy = null,
  onOpenExercises,
}) => {
  const [lang] = useLanguage();
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState<boolean>(false);
  const [adminPasswordInput, setAdminPasswordInput] = useState<string>('');
  const [adminError, setAdminError] = useState<string | null>(null);

  // Le mot de passe est vérifié par le serveur (jamais présent dans le code de l'application)
  const handleAdminSubmit = async () => {
    const result = await verifyAdminPassword(adminPasswordInput);
    if (result === 'ok') {
      setShowAdminModal(false);
      setAdminPasswordInput('');
      setAdminError(null);
      onNavigate('admin');
    } else {
      setAdminError(adminLoginErrorMessage(result));
    }
  };
  const [isBellRinging, setIsBellRinging] = useState(false);
  const notificationsMenuRef = useRef<HTMLDivElement>(null);
  const mobileNotificationsMenuRef = useRef<HTMLDivElement>(null);

  // Single source of truth for current active tier in Navbar
  const effectivePlan: 'free' | 'pro' | 'plus' = planTier || userAccount?.planTier || 'free';

  // Notifications strictly disappear after 24 hours (24h TTL)
  const activePendingInvitations = React.useMemo(() => {
    const now = Date.now();
    const TTL_24H = 24 * 60 * 60 * 1000;
    return pendingInvitations.filter(inv => {
      const time = inv.updatedAt || inv.acceptedAt || inv.createdAt;
      if (!time) return true;
      const t = new Date(time).getTime();
      return !isNaN(t) && (now - t) <= TTL_24H;
    });
  }, [pendingInvitations]);

  // Normalize all owner notifications and strictly purge those older than 24 hours
  const normalizedOwnerNotifications: OwnerNotificationItem[] = React.useMemo(() => {
    const raw = (ownerNotifications && ownerNotifications.length > 0)
      ? ownerNotifications
      : (acceptedNotifications || []).map(a => ({
          id: a.id,
          type: 'accepted' as const,
          name: a.name,
          konanId: a.konanId,
          timestamp: a.timestamp,
        }));

    const now = Date.now();
    const TTL_24H = 24 * 60 * 60 * 1000;
    return raw.filter(item => {
      if (!item.timestamp) return true;
      const t = new Date(item.timestamp).getTime();
      return !isNaN(t) && (now - t) <= TTL_24H;
    });
  }, [ownerNotifications, acceptedNotifications]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const insideDesktop = notificationsMenuRef.current?.contains(target);
      const insideMobile = mobileNotificationsMenuRef.current?.contains(target);
      if (!insideDesktop && !insideMobile) {
        setIsNotificationsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Read/unread tracking for the bell (persisted so the red dot survives reloads)
  const [seenNotificationIds, setSeenNotificationIds] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem(SEEN_NOTIFICATIONS_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return new Set(Array.isArray(parsed) ? parsed : []);
    } catch {
      return new Set();
    }
  });

  // Fusion garantie : toute quête entrante et toute demande d'ami entrante a ses boutons Accepter / Refuser dans la cloche
  const effectiveQuestNotices = React.useMemo<QuestNotice[]>(() => {
    const pendingQuestIds = new Set(incomingQuests.map((q) => q.id));
    const list = questNotices.map((n) => ({
      ...n,
      pending: n.pending || ((n.kind === 'quest_invite' || n.kind === 'quest_nudge') && pendingQuestIds.has(n.questId)),
    }));
    const covered = new Set(list.filter((n) => n.pending).map((n) => n.questId));
    for (const inv of incomingQuests) {
      if (covered.has(inv.id)) continue;
      list.unshift({
        id: `qinv_${inv.id}`,
        kind: 'quest_invite',
        questId: inv.id,
        at: inv.createdAt || Date.now(),
        fromName: inv.partner.name || 'Un ami',
        fromKonanId: inv.partner.konanId || '',
        fromAvatar: inv.partner.avatar || '',
        targetXp: inv.targetXp,
        rewardGold: inv.rewardGold,
        message: `${inv.partner.name} te propose une quête de 6 jours : récoltez ${inv.targetXp.toLocaleString('fr-FR')} XP ensemble pour gagner +${inv.rewardGold} pièces d’or chacun !`,
        pending: true,
      });
    }
    return list;
  }, [questNotices, incomingQuests]);

  const effectiveFriendNotices = React.useMemo<FriendNotice[]>(() => {
    const incomingIds = new Set(incomingFriends.map((f) => f.konanId));
    const list = friendNotices.map((n) => (
      n.kind === 'request' && incomingIds.has(n.from.konanId)
        ? { ...n, from: { ...n.from, relation: 'incoming' as const } }
        : n
    ));
    const covered = new Set(list.filter((n) => n.kind === 'request' && n.from.relation === 'incoming').map((n) => n.from.konanId));
    for (const f of incomingFriends) {
      if (!f.konanId || covered.has(f.konanId)) continue;
      list.unshift({
        id: `request_inc_${f.konanId}`,
        kind: 'request',
        at: f.at || Date.now(),
        from: { ...f, relation: 'incoming' },
      });
    }
    return list;
  }, [friendNotices, incomingFriends]);

  const totalPendingCount = activePendingInvitations.length + incomingQuests.length + incomingFriends.length;
  const hasClearableFriendNotices = effectiveFriendNotices.some((n) => !(n.kind === 'request' && n.from.relation === 'incoming'));

  // Les demandes en attente (amis, quêtes, invitations) gardent toujours le point rouge actif tant qu'elles ne sont pas traitées.
  const hasUnreadNotifications = totalPendingCount > 0
    || normalizedOwnerNotifications.some(notif => notif?.id && !seenNotificationIds.has(notif.id))
    || paymentNotices.some(n => n?.id && !seenNotificationIds.has(n.id))
    || effectiveFriendNotices.some(n => n?.id && !(n.kind === 'request' && n.from.relation === 'incoming') && !seenNotificationIds.has(n.id))
    || effectiveQuestNotices.some(n => n?.id && !n.pending && !seenNotificationIds.has(n.id));

  // Message non lu : la cloche bouge toute seule (toutes les 4 s) jusqu'à ce que l'élève ouvre l'onglet
  useEffect(() => {
    if (!hasUnreadNotifications || isNotificationsOpen) return;
    const ring = () => {
      setIsBellRinging(true);
      window.setTimeout(() => setIsBellRinging(false), 800);
    };
    const first = window.setTimeout(ring, 600);
    const every = window.setInterval(ring, 4000);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(every);
    };
  }, [hasUnreadNotifications, isNotificationsOpen]);

  // Opening the panel marks informational (non-pending) notifications as read
  useEffect(() => {
    if (!isNotificationsOpen) return;
    const toMark: string[] = [];
    normalizedOwnerNotifications.forEach(notif => notif?.id && !seenNotificationIds.has(notif.id) && toMark.push(notif.id));
    paymentNotices.forEach(n => n?.id && !seenNotificationIds.has(n.id) && toMark.push(n.id));
    effectiveFriendNotices.forEach(n => n?.id && !(n.kind === 'request' && n.from.relation === 'incoming') && !seenNotificationIds.has(n.id) && toMark.push(n.id));
    effectiveQuestNotices.forEach(n => n?.id && !n.pending && !seenNotificationIds.has(n.id) && toMark.push(n.id));
    if (!toMark.length) return;
    setSeenNotificationIds(prev => {
      const next = new Set(prev);
      toMark.forEach(id => next.add(id));
      try {
        localStorage.setItem(SEEN_NOTIFICATIONS_KEY, JSON.stringify(Array.from(next).slice(-200)));
      } catch {
        /* storage full or unavailable: dot simply won't persist */
      }
      return next;
    });
  }, [isNotificationsOpen, seenNotificationIds, normalizedOwnerNotifications, paymentNotices, effectiveFriendNotices, effectiveQuestNotices]);

  const navItems = [
    { id: 'dashboard' as ActiveAppView, label: t('navDashboard', lang), component: AnimatedDashboardIcon, icon: AnimatedDashboardIcon },
    { id: 'schedule' as ActiveAppView, label: t('navSchedule', lang), component: AnimatedScheduleIcon, icon: AnimatedScheduleIcon },
    { id: 'subjects' as ActiveAppView, label: lang === 'fr' ? 'Matières' : 'Subjects', component: AnimatedSubjectsIcon, icon: AnimatedSubjectsIcon },
    { id: 'planner' as ActiveAppView, label: lang === 'fr' ? 'Planning' : 'Study Plan', component: AnimatedPlannerIcon, icon: AnimatedPlannerIcon },
    { id: 'analytics' as ActiveAppView, label: t('navAnalytics', lang), component: AnimatedAnalyticsIcon, icon: AnimatedAnalyticsIcon },
    { id: 'league' as ActiveAppView, label: 'Ligue', component: LeagueTabIcon, icon: LeagueTabIcon },
  ];

  // Barre du bas (téléphone), dans l'ordre du croquis : Planning, KONAN (accueil), Matières, Stats, Ligue, Emploi du temps
  const mobileItems: Array<{ id: ActiveAppView; label: string; icon: React.FC<{ isActive?: boolean; className?: string }> }> = [
    { id: 'planner', label: 'Planning', icon: PlanningTabIcon },
    { id: 'dashboard', label: 'Accueil', icon: KonanTabIcon },
    { id: 'subjects', label: 'Matières', icon: SubjectsTabIcon },
    { id: 'analytics', label: 'Stats', icon: StatsTabIcon },
    { id: 'league', label: 'Ligue', icon: LeagueTabIcon },
    { id: 'schedule', label: 'EDT', icon: ScheduleTabIcon },
  ];
  const isAppView = activeView !== 'landing' && activeView !== 'auth' && activeView !== 'pro-wizard';

  const displayName = userAccount?.isLoggedIn ? userAccount.name : studentName;

  return (
    <>
      <header className={`sticky top-0 z-40 w-full transition-all pt-safe ${
      activeView === 'landing' 
        ? 'bg-[#F9FAFB]/90 dark:bg-[#0A0E1A]/85 backdrop-blur-xl lg:border-b lg:border-slate-200/80 lg:dark:border-white/[0.08]' 
        : 'lg:border-b lg:border-slate-200/80 lg:dark:border-slate-800/80 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl'
    }`}>
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8">
        
        {/* Main Navbar Top Row */}
        <div className="flex items-center justify-between h-14 sm:h-[68px] gap-1.5 sm:gap-4">
          
          {/* Téléphone, dans l'appli : avatar animé en haut à gauche (ouvre le profil et la personnalisation) */}
          {isAppView && userAccount?.isLoggedIn && (
            <button
              type="button"
              onClick={() => { soundFX.playCheckmarkPop(); (onOpenProfile || onOpenSettings)?.(); }}
              aria-label="Mon profil"
              className="lg:hidden shrink-0 rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <AnimatedAvatar
                config={avatarConfig}
                seed={_konanId || displayName}
                size={36}
                className="ring-2 ring-sky-400/70 shadow-sm"
                showCustomizeBadge={!hasCustomizedAvatar}
                alt="Mon personnage"
              />
            </button>
          )}

          {/* Logo & Brand (sur téléphone, remplacé par la photo de profil une fois dans l'appli) */}
          <div className={`items-center shrink-0 min-w-0 ${isAppView && userAccount?.isLoggedIn ? 'hidden lg:flex' : 'flex'}`}>
            <button
              onClick={() => onNavigate('landing')}
              className="flex items-center gap-2 sm:gap-3 group text-left cursor-pointer focus:outline-none shrink-0"
              title="Retour à l'accueil KONAN"
            >
              {activeView === 'landing' ? (
                <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0 drop-shadow-[0_0_15px_rgba(56,189,248,0.45)] group-hover:scale-105 transition-transform duration-300">
                  <KonanCube size={38} showStars={false} glow={true} />
                </div>
              ) : (
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full p-[1.5px] bg-gradient-to-tr from-sky-400 via-blue-500 to-sky-400 shadow-md shadow-sky-500/25 group-hover:scale-105 transition-transform duration-200 shrink-0 flex items-center justify-center overflow-hidden">
                  <img
                    src="/konan-logo.png"
                    alt="Logo Officiel KONAN"
                    className="w-full h-full object-contain rounded-full bg-[#091427]"
                  />
                </div>
              )}
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-sm sm:text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                    KONAN
                  </span>
                  <Badge variant="cyan" size="sm" className="hidden sm:inline-flex text-[10px] px-1.5 py-0">v1.0</Badge>
                </div>
                <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 hidden md:block truncate">Compagnon Académique</p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links - Centered, shrink-0, perfectly spaced */}
          {activeView !== 'landing' && activeView !== 'auth' && activeView !== 'pro-wizard' && (
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-slate-100 dark:bg-slate-900/90 p-1 rounded-xl border border-slate-200 dark:border-slate-800/80 shrink-0 mx-2 shadow-xs">
              {navItems.map((item) => {
                const IconComponent = item.component;
                const isActive = activeView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      soundFX.playCheckmarkPop();
                      if (!userAccount?.isLoggedIn && !isDemoMode) {
                        onNavigate('auth');
                      } else {
                        onNavigate(item.id);
                      }
                    }}
                    className={`group flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer shrink-0 whitespace-nowrap active:scale-95 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 to-sky-400 text-white shadow-md shadow-blue-600/40 ring-1 ring-blue-400/40'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/80 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800/80'
                    }`}
                  >
                    <IconComponent
                      isActive={isActive}
                      className={`w-4 h-4 shrink-0 transition-transform duration-300 ease-out ${
                        isActive 
                          ? 'scale-110 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]' 
                          : 'group-hover:text-blue-500 dark:group-hover:text-blue-300'
                      }`}
                    />
                    <span className="transition-colors duration-200">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          )}

          {/* Right Action Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Solde d'Or (Gold) permanent dans la barre supérieure */}
            {isAppView && typeof gold === 'number' && (
              <button
                type="button"
                onClick={() => { soundFX.playCheckmarkPop(); onOpenShop?.(); }}
                aria-label={`Ton solde : ${gold.toLocaleString('fr-FR')} pièces d'or. Ouvrir l'aperçu Boutique`}
                title="Tes pièces d'or (Boutique bientôt disponible)"
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-amber-50 border border-amber-300/80 text-amber-800 hover:bg-amber-100/80 dark:bg-amber-500/15 dark:border-amber-400/35 dark:text-amber-300 dark:hover:bg-amber-500/25 text-xs sm:text-sm font-black tabular-nums cursor-pointer active:scale-95 transition-all"
              >
                <GoldCoinIcon size={16} />
                <span>{gold.toLocaleString('fr-FR')}</span>
              </button>
            )}

            {/* Énergie ⚡ des exercices (le mode jour / nuit est désormais dans les Paramètres) */}
            {isAppView && energy && (
              <button
                type="button"
                onClick={() => onOpenExercises?.()}
                aria-label={`Charges : ${energy.unlimited ? 'illimitées' : `${energy.value} sur 25`}. Ouvrir les mini-jeux`}
                className="flex items-center gap-0.5 px-2.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 dark:bg-amber-500/10 dark:border-amber-400/30 dark:text-amber-300 text-sm font-black tabular-nums cursor-pointer active:scale-95"
              >
                <Zap className="w-4 h-4 fill-current" />
                {energy.unlimited ? <InfinityIcon className="w-4 h-4" strokeWidth={2.6} /> : energy.value}
              </button>
            )}

            {activeView !== 'landing' && activeView !== 'auth' ? (
              <>
                {/* Les paramètres sont désormais accessibles depuis la page Profil (façon Duolingo) */}

                {/*  Notifications & Invitations Tab */}
                <div className="relative" ref={notificationsMenuRef}>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsNotificationsOpen(prev => {
                        const next = !prev;
                        if (next) onRefreshNotifications?.();
                        return next;
                      });
                      setIsBellRinging(true);
                      setTimeout(() => setIsBellRinging(false), 800);
                    }}
                    onTouchStart={() => {
                      setIsBellRinging(true);
                      setTimeout(() => setIsBellRinging(false), 800);
                    }}
                    className="group relative p-1.5 sm:p-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer flex items-center justify-center bg-slate-100 text-slate-700 border-slate-200 hover:text-slate-900 hover:border-slate-300 dark:bg-slate-900/80 dark:text-slate-300 dark:border-slate-800 dark:hover:text-white dark:hover:border-slate-700 active:scale-95 shrink-0"
                    title={hasUnreadNotifications ? 'Nouvelles notifications non lues' : 'Notifications'}
                    aria-label={hasUnreadNotifications ? 'Notifications (non lues)' : 'Notifications'}
                  >
                    <Bell className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform ${isBellRinging ? 'animate-bell-ring text-amber-500' : 'group-hover:animate-bell-ring group-hover:text-amber-500 dark:group-hover:text-amber-300'}`} />
                    {hasUnreadNotifications && (
                      <span className="absolute top-0.5 right-0.5 flex h-2 w-2 sm:h-2.5 sm:w-2.5" aria-hidden="true">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-60 animate-ping" />
                        <span className="relative inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-rose-500 ring-2 ring-white dark:ring-slate-950" />
                      </span>
                    )}
                  </button>

                  {/* Desktop Dropdown Menu for Notifications */}
                  {isNotificationsOpen && (
                    <div className="hidden sm:block absolute right-0 top-full mt-2 w-96 rounded-2xl bg-white border border-slate-200 shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2 space-y-2.5 dark:bg-slate-900 dark:border-slate-800">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 text-xs">
                        <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                          <Bell className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                          Notifications & Invitations
                        </span>
                        <div className="flex items-center gap-2">
                          {hasClearableFriendNotices && onClearFriendNotices && (
                            <button
                              type="button"
                              onClick={() => { onClearFriendNotices(); }}
                              className="text-[10px] font-bold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white cursor-pointer transition-colors"
                            >
                              Effacer les lues
                            </button>
                          )}
                          {totalPendingCount > 0 && (
                            <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 dark:text-amber-300 dark:bg-amber-500/20 dark:border-amber-500/30 px-2 py-0.5 rounded-full">
                              {totalPendingCount} en attente
                            </span>
                          )}
                        </div>
                      </div>

                      {activePendingInvitations.length === 0 && normalizedOwnerNotifications.length === 0 && paymentNotices.length === 0 && effectiveFriendNotices.length === 0 && effectiveQuestNotices.length === 0 ? (
                        <div className="py-6 text-center text-xs text-slate-500 dark:text-slate-400">
                          <Bell className="w-6 h-6 mx-auto text-slate-400 dark:text-slate-600 mb-2 opacity-50" />
                          <p>Aucune notification pour le moment.</p>
                        </div>
                      ) : (
                        <div className="space-y-2 max-h-80 overflow-y-auto custom-scrollbar">
                          {/* Quêtes d'XP en duo : invitations, relances, réussites */}
                          {effectiveQuestNotices.map((n) => (
                            <QuestNoticeItem key={n.id} notice={n} onRespond={onRespondQuest} onOpen={() => { setIsNotificationsOpen(false); onOpenQuest?.(); }} />
                          ))}
                          {/* Paiements KONAN Pro acceptés ou refusés */}
                          {/* Amis : demandes reçues, acceptées ou refusées */}
                          {effectiveFriendNotices.map((n) => (
                            <FriendNoticeItem key={n.id} notice={n} onRespond={onRespondFriend} onOpen={() => { setIsNotificationsOpen(false); onOpenFriends?.(); }} />
                          ))}
                          {paymentNotices.map((n) => (
                            <PaymentNoticeItem key={n.id} notice={n} onOpen={() => { setIsNotificationsOpen(false); onOpenPaymentNotice?.(); }} />
                          ))}
                          {/* Owner Notifications (Accepted or Declined) */}
                          {normalizedOwnerNotifications.map((notif) => {
                            const isAcc = notif.type === 'accepted';
                            const timeFormatted = formatNotificationTime(notif.timestamp);

                            return (
                              <div 
                                key={notif.id}
                                className={`p-3 rounded-xl border flex items-start gap-2.5 shadow-sm text-left animate-in fade-in transition-all ${
                                  isAcc
                                    ? 'bg-emerald-50/80 border-emerald-200 dark:bg-gradient-to-br dark:from-emerald-950/40 dark:via-slate-950 dark:to-slate-950/30 dark:border-emerald-500/30'
                                    : 'bg-rose-50/80 border-rose-200 dark:bg-gradient-to-br dark:from-rose-950/40 dark:via-slate-950 dark:to-slate-900 dark:border-rose-500/30'
                                }`}
                              >
                                <div className={`p-1.5 rounded-lg shrink-0 mt-0.5 ${
                                  isAcc ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300' : 'bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300'
                                }`}>
                                  {isAcc ? <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />}
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="flex items-center justify-between gap-1">
                                    <span className={`text-[9px] font-black uppercase tracking-wider ${
                                      isAcc ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-700 dark:text-rose-400'
                                    }`}>
                                      {isAcc ? 'Invitation Acceptée' : 'Invitation Refusée'}
                                    </span>
                                    <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[10px] font-bold shrink-0 shadow-xs ${
                                      isAcc ? 'bg-emerald-100 border-emerald-300 text-emerald-800 dark:bg-emerald-500/20 dark:border-emerald-500/40 dark:text-emerald-300' : 'bg-rose-100 border-rose-300 text-rose-800 dark:bg-rose-500/20 dark:border-rose-500/40 dark:text-rose-300'
                                    }`}>
                                      <Clock className={`w-3 h-3 ${isAcc ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`} />
                                      <span>{timeFormatted}</span>
                                    </div>
                                  </div>
                                  <p className="text-xs font-bold text-slate-900 dark:text-white leading-snug mt-1">
                                    L'utilisateur : <span className={`font-bold ${isAcc ? 'text-emerald-700 dark:text-emerald-300' : 'text-rose-700 dark:text-rose-300'}`}>{notif.name}</span>{' '}
                                    {notif.konanId && <span className="font-mono text-amber-700 dark:text-amber-300 font-bold">[{notif.konanId}]</span>}{' '}
                                    {isAcc ? 'a accepté votre invitation' : 'a refusé votre invitation'}
                                  </p>
                                  <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                                    {isAcc 
                                      ? 'Ce membre a rejoint votre groupe KONAN PLUS.' 
                                      : 'Cette place est de nouveau libre dans votre groupe d\'étude (4 comptes inclus).'}
                                  </p>
                                </div>
                              </div>
                            );
                          })}

                          {/* Guest Pending Invitations */}
                          {activePendingInvitations.map((inv) => {
                            const timeFormatted = formatNotificationTime(inv.createdAt);

                            return (
                              <div 
                                key={inv.id}
                                className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-300/80 space-y-2.5 shadow-md text-left dark:bg-gradient-to-br dark:from-amber-500/10 dark:via-slate-950 dark:to-slate-950/30 dark:border-amber-500/40"
                              >
                                <div className="flex items-start gap-2.5">
                                  <div className="p-2 rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300 shrink-0">
                                    <Crown className="w-4 h-4" />
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <div className="flex items-center justify-between gap-1">
                                      <span className="text-[9px] font-black uppercase tracking-wider text-amber-800 dark:text-amber-400">
                                        Invitation Officielle
                                      </span>
                                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100 border border-amber-300 text-amber-800 dark:bg-amber-500/20 dark:border-amber-500/40 dark:text-amber-300 text-[11px] font-bold shrink-0 shadow-xs">
                                        <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                                        <span>{timeFormatted}</span>
                                      </div>
                                    </div>
                                    <p className="text-xs font-bold text-slate-900 dark:text-white leading-snug mt-1">
                                      Vous avez reçu une invitation de la part de{' '}
                                      <span className="text-amber-700 dark:text-amber-300 font-bold">{inv.senderName}</span>.
                                    </p>
                                    <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                                      Acceptez pour activer immédiatement votre accès complet et gratuit à KONAN PLUS.
                                    </p>
                                  </div>
                                </div>

                                <div className="flex items-center gap-2 pt-1">
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      e.preventDefault();
                                      onAcceptInvitation?.(inv);
                                      setIsNotificationsOpen(false);
                                    }}
                                    className="flex-1 py-2 px-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-emerald-950/40 cursor-pointer active:scale-95"
                                  >
                                    <Check className="w-3.5 h-3.5" />
                                    <span>Accepter l'invitation</span>
                                  </button>
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      e.preventDefault();
                                      onDeclineInvitation?.(inv);
                                      setIsNotificationsOpen(false);
                                    }}
                                    className="py-2 px-3.5 rounded-xl bg-slate-100 hover:bg-rose-50 hover:text-rose-700 border border-slate-300 hover:border-rose-300 text-slate-700 dark:bg-slate-800 dark:hover:bg-rose-950/50 dark:hover:text-rose-300 dark:border-slate-700 dark:hover:border-rose-500/40 dark:text-slate-300 font-semibold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95"
                                  >
                                    <X className="w-3.5 h-3.5" />
                                    <span>Refuser</span>
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Mobile Portal Dropdown Menu for Notifications (Immune to header overflow & clipping) */}
                  {isNotificationsOpen && typeof document !== 'undefined' && createPortal(
                    <div className="fixed inset-0 z-[99999] sm:hidden flex flex-col items-center justify-start pt-16 px-3">
                      {/* Semi-transparent backdrop */}
                      <div 
                        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150"
                        onClick={() => setIsNotificationsOpen(false)}
                        aria-hidden="true"
                      />
                      
                      {/* Centered Modal Card on Mobile */}
                      <div 
                        ref={mobileNotificationsMenuRef}
                        className="relative w-full max-w-sm rounded-2xl bg-white border border-slate-200 shadow-2xl p-4 z-10 animate-in fade-in zoom-in-95 duration-150 space-y-3 dark:bg-slate-900 dark:border-slate-700/80"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 text-xs">
                          <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <Bell className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                            Notifications & Invitations
                          </span>
                          <div className="flex items-center gap-2">
                            {hasClearableFriendNotices && onClearFriendNotices && (
                              <button
                                type="button"
                                onClick={() => { onClearFriendNotices(); }}
                                className="text-[10px] font-bold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white cursor-pointer transition-colors"
                              >
                                Effacer
                              </button>
                            )}
                            {totalPendingCount > 0 && (
                              <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 dark:text-amber-300 dark:bg-amber-500/20 dark:border-amber-500/30 px-2 py-0.5 rounded-full">
                                {totalPendingCount} en attente
                              </span>
                            )}
                            <button
                              type="button"
                              onClick={() => setIsNotificationsOpen(false)}
                              className="p-1 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800 transition-colors cursor-pointer"
                              aria-label="Fermer"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {activePendingInvitations.length === 0 && normalizedOwnerNotifications.length === 0 && paymentNotices.length === 0 && effectiveFriendNotices.length === 0 && effectiveQuestNotices.length === 0 ? (
                          <div className="py-6 text-center text-xs text-slate-500 dark:text-slate-400">
                            <Bell className="w-7 h-7 mx-auto text-slate-400 dark:text-slate-600 mb-2 opacity-50" />
                            <p>Aucune notification pour le moment.</p>
                          </div>
                        ) : (
                          <div className="space-y-2.5 max-h-[60vh] overflow-y-auto custom-scrollbar">
                            {/* Quêtes d'XP en duo : invitations, relances, réussites */}
                            {effectiveQuestNotices.map((n) => (
                              <QuestNoticeItem key={`mob-${n.id}`} notice={n} onRespond={onRespondQuest} onOpen={() => { setIsNotificationsOpen(false); onOpenQuest?.(); }} />
                            ))}
                            {/* Paiements KONAN Pro acceptés ou refusés */}
                          {/* Amis : demandes reçues, acceptées ou refusées */}
                          {effectiveFriendNotices.map((n) => (
                            <FriendNoticeItem key={n.id} notice={n} onRespond={onRespondFriend} onOpen={() => { setIsNotificationsOpen(false); onOpenFriends?.(); }} />
                          ))}
                          {paymentNotices.map((n) => (
                            <PaymentNoticeItem key={n.id} notice={n} onOpen={() => { setIsNotificationsOpen(false); onOpenPaymentNotice?.(); }} />
                          ))}
                          {/* Owner Notifications (Accepted or Declined) */}
                            {normalizedOwnerNotifications.map((notif) => {
                              const isAcc = notif.type === 'accepted';
                              const timeFormatted = formatNotificationTime(notif.timestamp);

                              return (
                                <div 
                                  key={`mob-${notif.id}`}
                                  className={`p-3 rounded-xl border flex items-start gap-2.5 shadow-sm text-left animate-in fade-in transition-all ${
                                    isAcc
                                      ? 'bg-emerald-50/80 border-emerald-200 dark:bg-gradient-to-br dark:from-emerald-950/40 dark:via-slate-950 dark:to-slate-950/30 dark:border-emerald-500/30'
                                      : 'bg-rose-50/80 border-rose-200 dark:bg-gradient-to-br dark:from-rose-950/40 dark:via-slate-950 dark:to-slate-900 dark:border-rose-500/30'
                                  }`}
                                >
                                  <div className={`p-1.5 rounded-lg shrink-0 mt-0.5 ${
                                    isAcc ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300' : 'bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300'
                                  }`}>
                                    {isAcc ? <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />}
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <div className="flex items-center justify-between gap-1">
                                      <span className={`text-[9px] font-black uppercase tracking-wider ${
                                        isAcc ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-700 dark:text-rose-400'
                                      }`}>
                                        {isAcc ? 'Invitation Acceptée' : 'Invitation Refusée'}
                                      </span>
                                      <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[10px] font-bold shrink-0 shadow-xs ${
                                        isAcc ? 'bg-emerald-100 border-emerald-300 text-emerald-800 dark:bg-emerald-500/20 dark:border-emerald-500/40 dark:text-emerald-300' : 'bg-rose-100 border-rose-300 text-rose-800 dark:bg-rose-500/20 dark:border-rose-500/40 dark:text-rose-300'
                                      }`}>
                                        <Clock className={`w-3 h-3 ${isAcc ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`} />
                                        <span>{timeFormatted}</span>
                                      </div>
                                    </div>
                                    <p className="text-xs font-bold text-slate-900 dark:text-white leading-snug mt-1">
                                      L'utilisateur : <span className={`font-bold ${isAcc ? 'text-emerald-700 dark:text-emerald-300' : 'text-rose-700 dark:text-rose-300'}`}>{notif.name}</span>{' '}
                                      {notif.konanId && <span className="font-mono text-amber-700 dark:text-amber-300 font-bold">[{notif.konanId}]</span>}{' '}
                                      {isAcc ? 'a accepté votre invitation' : 'a refusé votre invitation'}
                                    </p>
                                    <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                                      {isAcc 
                                        ? 'Ce membre a rejoint votre groupe KONAN PLUS.' 
                                        : 'Cette place est de nouveau libre dans votre groupe d\'étude (4 comptes inclus).'}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}

                            {/* Guest Pending Invitations */}
                            {activePendingInvitations.map((inv) => {
                              const timeFormatted = formatNotificationTime(inv.createdAt);

                              return (
                                <div 
                                  key={`mob-${inv.id}`}
                                  className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-300/80 space-y-2.5 shadow-md text-left dark:bg-gradient-to-br dark:from-amber-500/10 dark:via-slate-950 dark:to-slate-950/30 dark:border-amber-500/40"
                                >
                                  <div className="flex items-start gap-2.5">
                                    <div className="p-2 rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300 shrink-0">
                                      <Crown className="w-4 h-4" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                      <div className="flex items-center justify-between gap-1">
                                        <span className="text-[9px] font-black uppercase tracking-wider text-amber-800 dark:text-amber-400">
                                          Invitation Officielle
                                        </span>
                                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100 border border-amber-300 text-amber-800 dark:bg-amber-500/20 dark:border-amber-500/40 dark:text-amber-300 text-[11px] font-bold shrink-0 shadow-xs">
                                          <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                                          <span>{timeFormatted}</span>
                                        </div>
                                      </div>
                                      <p className="text-xs font-bold text-slate-900 dark:text-white leading-snug mt-1">
                                        Vous avez reçu une invitation de la part de{' '}
                                        <span className="text-amber-700 dark:text-amber-300 font-bold">{inv.senderName}</span>.
                                      </p>
                                      <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                                        Acceptez pour activer immédiatement votre accès complet et gratuit à KONAN PLUS.
                                      </p>
                                    </div>
                                  </div>

                                  <div className="flex items-center gap-2 pt-1">
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        e.preventDefault();
                                        onAcceptInvitation?.(inv);
                                        setIsNotificationsOpen(false);
                                      }}
                                      className="flex-1 py-2 px-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-emerald-950/40 cursor-pointer active:scale-95"
                                    >
                                      <Check className="w-4 h-4" />
                                      <span>Accepter l'invitation</span>
                                    </button>
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        e.preventDefault();
                                        onDeclineInvitation?.(inv);
                                        setIsNotificationsOpen(false);
                                      }}
                                      className="py-2 px-3.5 rounded-xl bg-slate-100 hover:bg-rose-50 hover:text-rose-700 border border-slate-300 hover:border-rose-300 text-slate-700 dark:bg-slate-800 dark:hover:bg-rose-950/50 dark:hover:text-rose-300 dark:border-slate-700 dark:hover:border-rose-500/40 dark:text-slate-300 font-semibold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95"
                                    >
                                      <X className="w-4 h-4" />
                                      <span>Refuser</span>
                                    </button>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>,
                    document.body
                  )}
                </div>

                {/* User / Google Profile Pill -> opens Settings Modal on click (Masqué sur mobile pour éviter le doublon avec la barre inférieure) */}
                {userAccount && userAccount.isLoggedIn ? (
                  <div className="flex items-center gap-1 sm:gap-2 pl-1 sm:pl-2 border-l border-slate-200 dark:border-slate-800/80 shrink-0">
                    <div
                      onClick={onOpenProfile || onOpenSettings}
                      title="Voir mon profil"
                      className="hidden lg:flex items-center gap-1 sm:gap-2 hover:opacity-90 transition-opacity cursor-pointer text-left shrink-0"
                    >
                      <AnimatedAvatar
                        config={avatarConfig}
                        seed={_konanId || displayName}
                        size={34}
                        className="ring-1 ring-sky-400/50 shadow-xs shrink-0"
                        showCustomizeBadge={!hasCustomizedAvatar}
                        alt={displayName}
                      />
                      <div className="hidden xl:block">
                        <p className={`text-xs font-bold leading-tight truncate max-w-[120px] ${
                          effectivePlan === 'plus'
                            ? 'plus-multicolor-shimmer-text font-black'
                            : effectivePlan === 'pro'
                            ? 'gold-shimmer-text font-black'
                            : 'text-slate-900 dark:text-white'
                        }`}>{displayName}</p>
                        <p className="text-[10px] text-cyan-600 dark:text-cyan-400 font-mono truncate max-w-[120px]">
                          {userAccount.isDemo ? t('demoAccount', lang) : userAccount.email || 'Connecté'}
                        </p>
                      </div>
                    </div>

                    {/* Badge de version : Gratuit (statique), Pro ou Plus (cliquable vers tarifs) */}
                    {effectivePlan === 'plus' ? (
                      <button 
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onViewPricing) onViewPricing();
                          else onNavigate('landing');
                        }}
                        className="inline-flex items-center gap-1 px-1.5 sm:px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider shrink-0 shadow-xs border bg-gradient-to-r from-amber-500/20 via-sky-400/20 to-cyan-500/20 text-amber-700 dark:text-amber-300 border-amber-500/40 hover:scale-105 active:scale-95 transition-transform cursor-pointer"
                        title="Modèle KONAN PLUS Actif - Cliquez pour voir les formules"
                      >
                        <Crown className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-500 dark:text-amber-400 shrink-0" />
                        <span>PLUS</span>
                      </button>
                    ) : effectivePlan === 'pro' ? (
                      <span 
                        className="inline-flex items-center gap-1 px-1.5 sm:px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider shrink-0 shadow-sm border bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 border-amber-300/80 cursor-default select-none"
                        title="KONAN Pro actif"
                      >
                        <span>PRO</span>
                      </span>
                    ) : (
                      <div className="flex items-center gap-1 shrink-0">
                        {(isDemoMode || userAccount?.isDemo) && (
                          <span
                            className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider shrink-0 shadow-xs border bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30 cursor-default select-none"
                            title="Mode Démo Actif"
                          >
                            <GraduationCap className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-500 dark:text-amber-400 shrink-0" />
                            <span>Démo</span>
                          </span>
                        )}
                        {/* Élève Gratuit : aucun badge à côté de la cloche (demande du 2026-11-16) */}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => onNavigate('auth')}
                    className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 dark:bg-slate-900 dark:border-sky-400/40 dark:hover:border-sky-400 dark:text-white text-[11px] sm:text-xs font-semibold shadow-sm cursor-pointer shrink-0 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0">
                      <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z" />
                      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.27 21.37 7.35 24 12 24z" />
                      <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.97 0 12s.46 3.84 1.26 5.42l4.02-3.15z" />
                      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.27 2.63 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
                    </svg>
                    <span>Connexion</span>
                  </button>
                )}
              </>
            ) : (
              /* Landing page actions */
              <div className="flex items-center gap-2 shrink-0">
                {userAccount && userAccount.isLoggedIn && !isDemoMode ? (
                  <button
                    type="button"
                    onClick={() => onNavigate('dashboard')}
                    className="flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200 dark:bg-white/[0.08] dark:hover:bg-white/[0.15] dark:text-white dark:border-white/10 backdrop-blur-md text-xs sm:text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
                  >
                    <span>Mon Espace</span>
                    <span className="text-blue-600 dark:text-sky-300">→</span>
                  </button>
                ) : (
                  <>
                    {onEnterDemoMode && (
                      <button
                        type="button"
                        onClick={onEnterDemoMode}
                        className="hidden xs:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] dark:text-slate-300 dark:hover:text-white dark:border-white/10 backdrop-blur-md text-xs font-medium transition-all cursor-pointer"
                      >
                        <GraduationCap className="w-3.5 h-3.5 text-sky-700 dark:text-sky-400 shrink-0" />
                        <span>Démo</span>
                      </button>
                    )}
                    {/* Bouton discret "Connexion ->" */}
                    <button
                      type="button"
                      onClick={() => onNavigate('auth')}
                      className="flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 dark:bg-white/[0.08] dark:hover:bg-white/[0.15] dark:text-white dark:border-white/15 backdrop-blur-md text-xs sm:text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
                    >
                      <span>Connexion</span>
                      <span className="text-sky-700 dark:text-sky-300">→</span>
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

        </div>

      </div>
    </header>

    {/* Fixed Bottom Navigation Bar on Mobile (Fini les éléments coupés et zéro bordure noire) */}
    {activeView !== 'landing' && activeView !== 'auth' && activeView !== 'pro-wizard' && (
      <nav 
        role="navigation"
        aria-label="Navigation principale mobile"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#0D1322] border-t border-slate-200 dark:border-white/[0.07] px-2 pb-safe"
      >
        {/* Barre du bas de la maquette : icône + libellé, l'onglet actif dans sa couleur (Planning bleu, Accueil blanc, Ligue or) */}
        <div className="grid grid-cols-6 items-center max-w-md mx-auto h-[68px]">
          {mobileItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            const activeColor = item.id === 'league'
              ? 'text-amber-700 dark:text-[#F5C451]'
              : item.id === 'dashboard'
                ? 'text-slate-900 dark:text-white'
                : 'text-sky-700 dark:text-[#38BDF8]';
            return (
              <button
                key={`bottom-${item.id}`}
                type="button"
                aria-current={isActive ? 'page' : undefined}
                onClick={() => {
                  soundFX.playCheckmarkPop();
                  if (!userAccount?.isLoggedIn && !isDemoMode) {
                    onNavigate('auth');
                  } else {
                    onNavigate(item.id);
                  }
                }}
                className={`flex flex-col items-center justify-center gap-[3px] w-full h-full cursor-pointer transition-colors ${
                  isActive ? `${activeColor} font-extrabold` : 'text-slate-500 dark:text-[#8B96A8] font-bold hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                <Icon isActive={isActive} className="w-[22px] h-[22px]" />
                <span className="text-[10px] leading-none tracking-tight truncate max-w-full">{item.label}</span>
              </button>
            );
          })}
          {/* La photo de profil est maintenant en haut à gauche (plus d'onglet Profil en bas) */}
        </div>
      </nav>
    )}

      {/* Modal d'authentification administrateur */}
      {showAdminModal && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-sm rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-black text-slate-900 dark:text-white">
                <ShieldCheck className="w-4 h-4 text-purple-500" />
                <span>Console Administrateur</span>
              </div>
              <button
                type="button"
                onClick={() => setShowAdminModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Connectez-vous avec votre compte Google administrateur pour accéder aux statistiques et à la gestion de KONAN.
            </p>
            {adminError && (
              <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 text-xs font-semibold">
                {adminError}
              </div>
            )}
            <AdminGoogleLoginButton
              onSuccess={() => {
                setShowAdminModal(false);
                setAdminPasswordInput('');
                setAdminError(null);
                onNavigate('admin');
              }}
              onError={setAdminError}
            />
            <input
              type="password"
              value={adminPasswordInput}
              onChange={(e) => setAdminPasswordInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleAdminSubmit();
              }}
              placeholder="Mot de passe temporaire"
              aria-label="Mot de passe administrateur temporaire"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-xs font-mono text-slate-900 dark:text-white focus:outline-none focus:border-purple-500"
            />
            <div className="flex items-center justify-end gap-2 pt-1">
              <button
                type="button"
                onClick={() => setShowAdminModal(false)}
                className="px-3 py-2 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-800 dark:hover:text-white cursor-pointer"
              >
                Annuler
              </button>
              <button
                type="button"
                onClick={handleAdminSubmit}
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold cursor-pointer transition-colors shadow-xs"
              >
                Accéder
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
  </>
);
};
