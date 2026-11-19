import React, { useMemo, useState } from 'react';
import {
  BellRing,
  Check,
  Clock,
  Copy,
  Gift,
  MessageCircle,
  Send,
  UserPlus,
  Users,
  X,
} from 'lucide-react';
import type { FriendCard, FriendQuest, QuestState, QuestTierId } from '../../services/friendsApi';
import {
  cancelFriendQuest,
  claimFriendQuestReward,
  nudgeFriendQuestPartner,
  proposeFriendQuest,
  QUEST_DURATION_DAYS,
  QUEST_TIERS,
  questErrorMessage,
  respondFriendQuest,
} from '../../services/friendsApi';
import { soundFX } from '../../lib/audioEffects';
import { timeLeftLabel } from './LeagueView';
import { GoldCoinIcon } from './GoldCoin';
import { Snowflake } from './Ice';
import { AnimatedAvatar } from '../avatar/AnimatedAvatar';
import type { AvatarConfig } from '../../lib/avatar/avatarCatalog';

const fr = (n: number) => Math.max(0, Math.round(n)).toLocaleString('fr-FR');

const QuestAvatar: React.FC<{ name: string; avatarConfig?: AvatarConfig | null; seed?: string; size?: number; ring?: string }> = ({
  name,
  avatarConfig,
  seed,
  size = 40,
  ring = '',
}) => (
  <AnimatedAvatar
    config={avatarConfig}
    seed={seed || name}
    size={size}
    className={ring}
    alt={`Personnage de ${name}`}
  />
);

function buildShareMessage(quest: FriendQuest): string {
  const total = quest.me.xpContributed + quest.partner.xpContributed;
  const remaining = Math.max(0, quest.targetXp - total);
  const name = quest.partner.name || 'ami';
  if (quest.status === 'pending') {
    return `Eh ${name}, clique sur « C'est parti » pour lancer notre quête de ${fr(quest.targetXp)} XP (${QUEST_DURATION_DAYS} jours) sur KONAN et gagner +${quest.rewardGold} pièces d'or chacun ! ⚡🔥`;
  }
  return `Eh ${name}, il nous manque ${fr(remaining)} XP pour gagner nos +${quest.rewardGold} pièces d'or sur KONAN ! À toi de jouer ⚡🔥`;
}

export interface FriendQuestCardProps {
  questState: QuestState | null;
  friends: FriendCard[];
  loading?: boolean;
  /** True si la ligue de l'élève est gelée (réputation <= 80 %) */
  isFrozen?: boolean;
  reputation?: number;
  onRefresh: () => Promise<void> | void;
  onGoldUpdated?: (gold: number) => void;
  onOpenFriends?: () => void;
  onToast?: (message: string) => void;
}

export const FriendQuestCard: React.FC<FriendQuestCardProps> = ({
  questState,
  friends,
  loading = false,
  isFrozen,
  reputation,
  onRefresh,
  onGoldUpdated,
  onOpenFriends,
  onToast,
}) => {
  const [selectedFriendId, setSelectedFriendId] = useState<string>('');
  const [selectedTierId, setSelectedTierId] = useState<QuestTierId>('silver');
  const [busyAction, setBusyAction] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ tone: 'ok' | 'err'; text: string } | null>(null);
  const [shareOpenForId, setShareOpenForId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [dismissedExpiredId, setDismissedExpiredId] = useState<string>('');

  const selectedTier = useMemo(
    () => QUEST_TIERS.find((t) => t.id === selectedTierId) || QUEST_TIERS[1],
    [selectedTierId],
  );

  const effectiveFrozen = isFrozen ?? questState?.isFrozen ?? false;
  const effectiveReputation = reputation ?? questState?.reputation ?? 100;

  const chosenFriend = useMemo(() => {
    if (friends.length === 1) return friends[0];
    return friends.find((f) => f.konanId === selectedFriendId) || friends[0] || null;
  }, [friends, selectedFriendId]);

  const activeQuest = questState?.activeQuest || null;
  const outgoingQuest = questState?.outgoingQuest || null;
  const incomingQuests = questState?.incomingQuests || [];
  const expiredQuest =
    questState?.expiredQuest && questState.expiredQuest.id !== dismissedExpiredId
      ? questState.expiredQuest
      : null;

  const handlePropose = async (konanId: string) => {
    if (!konanId || busyAction) return;
    setBusyAction(`propose_${konanId}`);
    setFeedback(null);
    const r = await proposeFriendQuest(konanId, selectedTier.id);
    setBusyAction(null);
    if (r.ok) {
      soundFX.playCheckmarkPop();
      const msg =
        r.data.status === 'active'
          ? `Double accord ! Votre quête est lancée pour ${QUEST_DURATION_DAYS} jours.`
          : 'Proposition envoyée ! Le chrono de 6 jours démarrera dès que ton ami cliquera sur « C’est parti ».';
      setFeedback({ tone: 'ok', text: msg });
      onToast?.(msg);
      await onRefresh();
    } else {
      setFeedback({ tone: 'err', text: questErrorMessage(r.error) });
    }
  };

  const handleRespond = async (questId: string, accept: boolean) => {
    if (!questId || busyAction) return;
    setBusyAction(`respond_${questId}_${accept}`);
    setFeedback(null);
    const r = await respondFriendQuest(questId, accept);
    setBusyAction(null);
    if (r.ok) {
      if (accept) soundFX.playCelebrationFanfare();
      const msg = accept
        ? `C’est parti ! Votre quête est lancée pour ${QUEST_DURATION_DAYS} jours.`
        : 'Invitation déclinée sans pénalité.';
      setFeedback({ tone: 'ok', text: msg });
      onToast?.(msg);
      await onRefresh();
    } else {
      setFeedback({ tone: 'err', text: questErrorMessage(r.error) });
    }
  };

  const handleCancel = async (questId: string) => {
    if (!questId || busyAction) return;
    setBusyAction(`cancel_${questId}`);
    setFeedback(null);
    const r = await cancelFriendQuest(questId);
    setBusyAction(null);
    if (r.ok) {
      setFeedback({ tone: 'ok', text: 'Proposition annulée. Tu peux inviter un autre ami.' });
      await onRefresh();
    } else {
      setFeedback({ tone: 'err', text: questErrorMessage(r.error) });
    }
  };

  const handleClaim = async (questId: string) => {
    if (!questId || busyAction) return;
    setBusyAction(`claim_${questId}`);
    setFeedback(null);
    const r = await claimFriendQuestReward(questId);
    setBusyAction(null);
    if (r.ok) {
      soundFX.playVictoryCelebration();
      onGoldUpdated?.(r.data.gold);
      const msg = `Bravo ! +${r.data.rewardGold} pièces d’or ajoutées à ton compte (${fr(r.data.gold)} pièces d’or au total).`;
      setFeedback({ tone: 'ok', text: msg });
      onToast?.(msg);
      await onRefresh();
    } else {
      setFeedback({ tone: 'err', text: questErrorMessage(r.error) });
    }
  };

  const handleNudge = async (quest: FriendQuest) => {
    if (busyAction) return;
    setBusyAction(`nudge_${quest.id}`);
    setFeedback(null);
    const r = await nudgeFriendQuestPartner(quest.id);
    setBusyAction(null);
    setShareOpenForId(quest.id);
    if (r.ok) {
      soundFX.playCheckmarkPop();
      const msg = `Relance envoyée à ${quest.partner.name} ! Tu peux aussi lui écrire sur WhatsApp.`;
      setFeedback({ tone: 'ok', text: msg });
      onToast?.(msg);
      await onRefresh();
    } else {
      setFeedback({ tone: 'err', text: questErrorMessage(r.error) });
    }
  };

  const handleCopyShare = (quest: FriendQuest) => {
    const text = buildShareMessage(quest);
    navigator.clipboard
      ?.writeText(text)
      .then(() => {
        setCopiedId(quest.id);
        setTimeout(() => setCopiedId(null), 2000);
        onToast?.('Message d’encouragement copié !');
      })
      .catch(() => {});
  };

  const openWhatsAppShare = (quest: FriendQuest) => {
    const text = encodeURIComponent(buildShareMessage(quest));
    window.open(`https://wa.me/?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  // Rendu de la barre de progression bicolore divisée (Toi à gauche en bleu, Ton ami à droite en orange)
  const renderActiveOrCompletedQuest = (quest: FriendQuest) => {
    const myXp = quest.me.xpContributed;
    const partnerXp = quest.partner.xpContributed;
    const totalXp = myXp + partnerXp;
    const targetXp = Math.max(1, quest.targetXp);
    const clampedTotal = Math.min(totalXp, targetXp);
    const overallPct = Math.min(100, Math.round((totalXp / targetXp) * 100));

    // Largeurs exactes en % de l'objectif (ne dépasse jamais 100% visuellement)
    let myPct = (myXp / targetXp) * 100;
    let partnerPct = (partnerXp / targetXp) * 100;
    if (myPct + partnerPct > 100 && totalXp > 0) {
      myPct = (myXp / totalXp) * 100;
      partnerPct = (partnerXp / totalXp) * 100;
    }

    const isCompleted = quest.status === 'completed';
    const remainingXp = Math.max(0, targetXp - totalXp);

    return (
      <div className="space-y-4">
        {/* En-tête : compte à rebours + récompense sur la 1re ligne, titre en pleine largeur en dessous */}
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            {(isCompleted || quest.expiresAt > 0) ? (
              isCompleted ? (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-300">
                  <Check className="w-3 h-3" />
                  Quête réussie !
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-600 dark:text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Termine dans <b className="text-slate-800 dark:text-slate-200">{timeLeftLabel(quest.expiresAt)}</b></span>
                </span>
              )
            ) : <span />}

            <div className="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-amber-50 dark:bg-amber-500/15 border border-amber-200 dark:border-amber-400/35">
              <GoldCoinIcon size={17} />
              <span className="text-xs font-black tabular-nums text-amber-700 dark:text-amber-300 whitespace-nowrap">
                +{quest.rewardGold} pièces d’or
              </span>
            </div>
          </div>

          <h3 className="m-0 text-base sm:text-[17px] font-black text-slate-900 dark:text-white leading-snug">
            Récoltez {fr(targetXp)} XP ensemble en {QUEST_DURATION_DAYS} jours
          </h3>
        </div>

        {/* Binôme + bouton Encourager / Relancer (empilé proprement sur mobile, côte à côte sur grand écran) */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-white/[0.07]">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex -space-x-2 shrink-0">
              <QuestAvatar name={quest.me.name} avatarConfig={quest.me.avatarConfig} seed={quest.me.konanId || quest.me.name} size={40} ring="ring-2 ring-sky-400" />
              <QuestAvatar name={quest.partner.name} avatarConfig={quest.partner.avatarConfig} seed={quest.partner.konanId || quest.partner.name} size={40} ring="ring-2 ring-amber-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="m-0 text-sm font-extrabold text-slate-900 dark:text-white truncate">
                Toi &amp; {quest.partner.name}
              </p>
              <p className="m-0 text-xs text-slate-500 dark:text-slate-400 leading-snug">
                {isCompleted
                  ? 'Objectif atteint ensemble !'
                  : `Encore ${fr(remainingXp)} XP à récolter`}
              </p>
            </div>
          </div>

          {!isCompleted && (
            <button
              type="button"
              disabled={busyAction === `nudge_${quest.id}`}
              onClick={() => handleNudge(quest)}
              className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-700 dark:text-amber-300 border border-amber-400/35 text-xs font-extrabold cursor-pointer transition-all active:scale-95 disabled:opacity-50"
            >
              <BellRing className="w-3.5 h-3.5 shrink-0" />
              <span>{busyAction === `nudge_${quest.id}` ? 'Envoi…' : 'Encourager / Relancer'}</span>
            </button>
          )}
        </div>

        {/* Partage rapide WhatsApp / Copier après relance (ou à la demande) */}
        {!isCompleted && shareOpenForId === quest.id && (
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-white/10 space-y-2.5 animate-in fade-in slide-in-from-top-1 duration-150">
            <p className="m-0 text-xs text-slate-700 dark:text-slate-300 italic leading-relaxed">
              « {buildShareMessage(quest)} »
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => openWhatsAppShare(quest)}
                className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-1.5 h-9 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold cursor-pointer transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Partager sur WhatsApp</span>
              </button>
              <button
                type="button"
                onClick={() => handleCopyShare(quest)}
                className="inline-flex items-center justify-center gap-1.5 h-9 px-3 rounded-xl bg-white dark:bg-white/[0.08] border border-slate-300 dark:border-white/15 text-slate-700 dark:text-slate-200 text-xs font-extrabold cursor-pointer transition-colors"
              >
                {copiedId === quest.id ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedId === quest.id ? 'Copié !' : 'Copier'}</span>
              </button>
            </div>
          </div>
        )}

        {/* Note Gel de Ligue : les XP comptent bien pour la quête, mais pas dans le classement de la ligue */}
        {!isCompleted && effectiveFrozen && (
          <div className="p-3 rounded-2xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-300 dark:border-cyan-400/35 flex items-start gap-2.5 text-xs text-cyan-950 dark:text-cyan-100">
            <Snowflake size={18} className="shrink-0 mt-0.5 text-cyan-600 dark:text-cyan-300" />
            <span>
              <b>Ta ligue est gelée ({effectiveReputation} %) :</b> tes XP de leçons et d’entraînement <b>comptent bien pour la quête en duo</b>, mais ils ne comptent pas dans le classement de la ligue tant que ta réputation reste à 80 % ou moins.
            </span>
          </div>
        )}

        {/* Barre de progression visuelle divisée en deux (Bleu = Toi | Orange = Ton ami) */}
        <div className="space-y-2">
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-xs font-extrabold text-slate-700 dark:text-slate-300">Progression commune</span>
            <span className="text-sm font-black tabular-nums text-slate-900 dark:text-white">
              {fr(clampedTotal)} / {fr(targetXp)} XP{' '}
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">({overallPct} %)</span>
            </span>
          </div>

          <div
            className="h-4 w-full rounded-full bg-slate-200 dark:bg-slate-800/90 overflow-hidden flex p-0.5 gap-0.5 shadow-inner"
            role="progressbar"
            aria-label="Progression de la quête en duo"
            aria-valuemin={0}
            aria-valuemax={targetXp}
            aria-valuenow={clampedTotal}
          >
            {myPct > 0 && (
              <div
                className="h-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 transition-all duration-700 ease-out shadow-[0_0_10px_rgba(56,189,248,0.45)]"
                style={{ width: `${myPct}%` }}
                title={`Toi : ${fr(myXp)} XP`}
              />
            )}
            {partnerPct > 0 && (
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-700 ease-out shadow-[0_0_10px_rgba(245,158,11,0.45)]"
                style={{ width: `${partnerPct}%` }}
                title={`${quest.partner.name} : ${fr(partnerXp)} XP`}
              />
            )}
          </div>

          <div className="grid grid-cols-2 gap-2 pt-0.5">
            <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-sky-50/90 dark:bg-sky-500/10 border border-sky-200/80 dark:border-sky-400/25">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500 shrink-0" />
              <span className="text-xs font-bold text-slate-700 dark:text-slate-200 truncate">
                Toi : <b className="tabular-nums text-sky-700 dark:text-sky-300">{fr(myXp)} XP</b>
              </span>
            </div>
            <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-amber-50/90 dark:bg-amber-500/10 border border-amber-200/80 dark:border-amber-400/25">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shrink-0" />
              <span className="text-xs font-bold text-slate-700 dark:text-slate-200 truncate">
                {quest.partner.name} : <b className="tabular-nums text-amber-700 dark:text-amber-300">{fr(partnerXp)} XP</b>
              </span>
            </div>
          </div>
        </div>

        {/* Réclamation de la récompense en Or si la quête est terminée */}
        {isCompleted && (
          <div className="pt-1">
            {quest.claimedByMe ? (
              <div className="w-full min-h-[2.75rem] px-3 py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-300 dark:border-emerald-500/35 text-emerald-800 dark:text-emerald-300 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 text-center leading-snug">
                <Check className="w-4 h-4 shrink-0" />
                <span>+{quest.rewardGold} pièces d’or réclamées ! Prochaine quête disponible après la fin des {QUEST_DURATION_DAYS} jours</span>
              </div>
            ) : (
              <button
                type="button"
                disabled={busyAction === `claim_${quest.id}`}
                onClick={() => handleClaim(quest.id)}
                className="w-full h-12 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/30 cursor-pointer transition-all active:scale-[0.98] disabled:opacity-60"
              >
                <Gift className="w-4 h-4" />
                <GoldCoinIcon size={18} />
                <span>{busyAction === `claim_${quest.id}` ? 'Attribution…' : `Réclamer mes +${quest.rewardGold} pièces d’or`}</span>
              </button>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <section
      aria-label="Quête d’XP entre amis"
      className="rounded-[22px] bg-white dark:bg-[#0F1626] border border-slate-200 dark:border-white/10 p-4 sm:p-5 shadow-sm dark:shadow-xl dark:shadow-slate-950/40 space-y-4"
    >
      {/* 1. QUÊTE ACTIVE OU TERMINÉE */}
      {activeQuest ? (
        renderActiveOrCompletedQuest(activeQuest)
      ) : (
        <div className="space-y-4">
          {/* En-tête commun hors quête active */}
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-amber-600 dark:text-[#F5C451]">
                <Users className="w-3.5 h-3.5 shrink-0" />
                Quête entre amis · {QUEST_DURATION_DAYS} jours
              </span>
              <div className="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-amber-50 dark:bg-amber-500/15 border border-amber-200 dark:border-amber-400/30">
                <GoldCoinIcon size={16} />
                <span className="text-xs font-black text-amber-700 dark:text-amber-300 whitespace-nowrap">+{selectedTier.rewardGold} pièces d’or</span>
              </div>
            </div>
            <h3 className="m-0 text-base sm:text-lg font-black text-slate-900 dark:text-white leading-snug">
              Récoltez {fr(selectedTier.targetXp)} XP ensemble en {QUEST_DURATION_DAYS} jours
            </h3>
          </div>

          {/* Quête précédente expirée */}
          {expiredQuest && (
            <div className="p-3 rounded-2xl bg-slate-100/90 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 flex items-start justify-between gap-2 text-xs text-slate-600 dark:text-slate-300">
              <span>
                La quête précédente avec <b>{expiredQuest.partner.name}</b> a expiré à{' '}
                <b>{fr(expiredQuest.me.xpContributed + expiredQuest.partner.xpContributed)} / {fr(expiredQuest.targetXp)} XP</b>{' '}
                (aucune pièce d’or attribuée). Lance une nouvelle quête de {QUEST_DURATION_DAYS} jours !
              </span>
              <button
                type="button"
                onClick={() => setDismissedExpiredId(expiredQuest.id)}
                aria-label="Fermer"
                className="p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-white/10 cursor-pointer shrink-0"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* 2. INVITATIONS REÇUES (DOUBLE CONSENTEMENT : C'EST PARTI / REFUSER) */}
          {incomingQuests.length > 0 && (
            <div className="space-y-2.5">
              {incomingQuests.map((inv) => (
                <div
                  key={inv.id}
                  className="p-3.5 rounded-2xl bg-sky-50/90 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-400/30 space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <QuestAvatar name={inv.partner.name} avatarConfig={inv.partner.avatarConfig} seed={inv.partner.konanId || inv.partner.name} size={42} ring="ring-2 ring-sky-400/60" />
                    <div className="min-w-0 flex-1">
                      <p className="m-0 text-sm font-extrabold text-slate-900 dark:text-white leading-snug">
                        {inv.partner.name} te propose une quête en duo !
                      </p>
                      <p className="m-0 text-xs text-slate-600 dark:text-slate-300">
                        Objectif : <b>{fr(inv.targetXp)} XP</b> ensemble → <b>+{inv.rewardGold} pièces d’or chacun</b>. Tes XP ne comptent qu’une fois acceptée.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      disabled={Boolean(busyAction)}
                      onClick={() => handleRespond(inv.id, true)}
                      className="flex-1 h-10 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 shadow-sm cursor-pointer transition-all active:scale-[0.98] disabled:opacity-50"
                    >
                      <Check className="w-4 h-4" />
                      <span>{busyAction === `respond_${inv.id}_true` ? 'Lancement…' : 'C’est parti !'}</span>
                    </button>
                    <button
                      type="button"
                      disabled={Boolean(busyAction)}
                      onClick={() => handleRespond(inv.id, false)}
                      className="h-10 px-4 rounded-xl bg-white hover:bg-rose-50 text-slate-700 hover:text-rose-700 border border-slate-300 dark:bg-white/[0.06] dark:hover:bg-rose-500/15 dark:text-slate-200 dark:border-white/15 font-extrabold text-xs sm:text-sm inline-flex items-center justify-center gap-1 cursor-pointer transition-colors disabled:opacity-50"
                    >
                      <X className="w-4 h-4" />
                      <span>Refuser</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 3. PROPOSITION ENVOYÉE EN ATTENTE (STATUS PENDING — XP NON COMPTABILISÉS) */}
          {outgoingQuest ? (
            <div className="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-400/30 space-y-3">
              <div className="flex items-center justify-between gap-2.5">
                <div className="flex items-center gap-2.5 min-w-0">
                  <QuestAvatar name={outgoingQuest.partner.name} avatarConfig={outgoingQuest.partner.avatarConfig} seed={outgoingQuest.partner.konanId || outgoingQuest.partner.name} size={40} ring="ring-2 ring-amber-400/60" />
                  <div className="min-w-0">
                    <p className="m-0 text-sm font-extrabold text-slate-900 dark:text-white truncate">
                      En attente de {outgoingQuest.partner.name}
                    </p>
                    <p className="m-0 text-xs text-slate-600 dark:text-slate-300">
                      La quête démarrera dès qu’il/elle cliquera sur <b>« C’est parti »</b> (les XP ne comptent pas encore).
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  disabled={Boolean(busyAction)}
                  onClick={() => handleNudge(outgoingQuest)}
                  className="flex-1 min-w-[140px] h-9 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs inline-flex items-center justify-center gap-1.5 cursor-pointer transition-colors disabled:opacity-50"
                >
                  <BellRing className="w-3.5 h-3.5" />
                  <span>{busyAction === `nudge_${outgoingQuest.id}` ? 'Relance…' : 'Encourager / Relancer'}</span>
                </button>
                <button
                  type="button"
                  disabled={Boolean(busyAction)}
                  onClick={() => handleCancel(outgoingQuest.id)}
                  className="h-9 px-3.5 rounded-xl bg-white dark:bg-white/[0.06] border border-slate-300 dark:border-white/15 text-slate-700 dark:text-slate-200 font-bold text-xs cursor-pointer hover:border-rose-300 dark:hover:border-rose-400/40 transition-colors disabled:opacity-50"
                >
                  Annuler
                </button>
              </div>
              {shareOpenForId === outgoingQuest.id && (
                <div className="flex flex-wrap gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => openWhatsAppShare(outgoingQuest)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 h-9 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Relancer sur WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCopyShare(outgoingQuest)}
                    className="inline-flex items-center justify-center gap-1.5 h-9 px-3 rounded-xl bg-white dark:bg-white/[0.08] border border-slate-300 dark:border-white/15 text-slate-700 dark:text-slate-200 text-xs font-extrabold cursor-pointer"
                  >
                    {copiedId === outgoingQuest.id ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === outgoingQuest.id ? 'Copié !' : 'Copier'}</span>
                  </button>
                </div>
              )}
            </div>
          ) : loading && !questState ? (
            <div className="py-4 text-center text-xs font-bold text-slate-500 dark:text-slate-400">
              Chargement de ta quête de la semaine…
            </div>
          ) : friends.length === 0 ? (
            /* 4. AUCUN AMI ENCORE */
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-0.5">
                <p className="m-0 text-sm font-extrabold text-slate-900 dark:text-white">
                  Ajoute un ami pour lancer une quête
                </p>
                <p className="m-0 text-xs text-slate-600 dark:text-slate-400">
                  Entre son ID KONAN pour l’ajouter, puis lancez votre défi de {QUEST_DURATION_DAYS} jours pour gagner 100 à 500 pièces d’or chacun.
                </p>
              </div>
              {onOpenFriends && (
                <button
                  type="button"
                  onClick={onOpenFriends}
                  className="shrink-0 h-10 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white dark:bg-sky-400 dark:hover:bg-sky-300 dark:text-slate-950 font-extrabold text-xs inline-flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Ajouter un ami</span>
                </button>
              )}
            </div>
          ) : (
            <div className="space-y-3">
              {/* Sélecteur de palier de quête : 100 à 500 Or selon l'objectif d'XP (toujours 6 jours) */}
              <div className="space-y-1.5">
                <p className="m-0 text-xs font-bold text-slate-600 dark:text-slate-400">
                  Choisis la difficulté et la récompense (durée : {QUEST_DURATION_DAYS} jours dès l’accord) :
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {QUEST_TIERS.map((tier) => {
                    const active = selectedTier.id === tier.id;
                    return (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setSelectedTierId(tier.id)}
                        className={`p-2.5 rounded-xl border text-left cursor-pointer transition-all ${
                          active
                            ? 'bg-amber-50 border-amber-400 dark:bg-amber-500/15 dark:border-amber-400 ring-1 ring-amber-400/50'
                            : 'bg-slate-50 border-slate-200 hover:border-slate-300 dark:bg-slate-950/50 dark:border-white/[0.08] dark:hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-[11px] font-extrabold text-slate-900 dark:text-white">{tier.label}</span>
                          <span className="inline-flex items-center gap-0.5 text-[11px] font-black tabular-nums text-amber-700 dark:text-amber-300">
                            <GoldCoinIcon size={13} />
                            {tier.rewardGold}
                          </span>
                        </div>
                        <p className="m-0 mt-0.5 text-[10px] font-bold text-slate-500 dark:text-slate-400 tabular-nums">
                          {fr(tier.targetXp)} XP · {QUEST_DURATION_DAYS} j
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {friends.length === 1 ? (
                /* 5. EXACTEMENT 1 AMI : PROPOSITION DIRECTE « C'EST PARTI » */
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <QuestAvatar name={friends[0].name} avatarConfig={friends[0].avatarConfig} seed={friends[0].konanId || friends[0].name} size={42} ring="ring-2 ring-sky-400/40" />
                    <div className="min-w-0">
                      <p className="m-0 text-sm font-extrabold text-slate-900 dark:text-white truncate">
                        Faire la quête avec {friends[0].name} ?
                      </p>
                      <p className="m-0 text-xs text-slate-500 dark:text-slate-400">
                        Ton ami devra aussi cliquer sur « C’est parti » pour lancer les {QUEST_DURATION_DAYS} jours.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    disabled={Boolean(busyAction)}
                    onClick={() => handlePropose(friends[0].konanId)}
                    className="shrink-0 h-10 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white dark:bg-sky-400 dark:hover:bg-sky-300 dark:text-slate-950 font-black text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 shadow-sm cursor-pointer transition-all active:scale-95 disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{busyAction ? 'Envoi…' : 'C’est parti'}</span>
                  </button>
                </div>
              ) : (
                /* 6. 2 AMIS OU PLUS : SÉLECTEUR DE BINÔME */
                <div className="space-y-3">
                  <p className="m-0 text-xs font-bold text-slate-600 dark:text-slate-400">
                    Choisis 1 ami avec qui lancer la quête (accord mutuel requis) :
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-44 overflow-y-auto pr-0.5">
                    {friends.map((f) => {
                      const selected = chosenFriend?.konanId === f.konanId;
                      return (
                        <button
                          key={f.konanId}
                          type="button"
                          onClick={() => setSelectedFriendId(f.konanId)}
                          className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-left cursor-pointer transition-all ${
                            selected
                              ? 'bg-sky-50 border-sky-400 dark:bg-sky-500/15 dark:border-sky-400 ring-1 ring-sky-400/50'
                              : 'bg-slate-50 border-slate-200 hover:border-slate-300 dark:bg-slate-950/50 dark:border-white/[0.08] dark:hover:border-white/20'
                          }`}
                        >
                          <QuestAvatar name={f.name} avatarConfig={f.avatarConfig} seed={f.konanId || f.name} size={36} />
                          <div className="min-w-0 flex-1">
                            <p className="m-0 text-xs font-extrabold text-slate-900 dark:text-white truncate">{f.name}</p>
                            <p className="m-0 text-[10px] font-mono text-slate-500 dark:text-slate-400">{f.konanId}</p>
                          </div>
                          {selected && (
                            <span className="w-5 h-5 rounded-full bg-sky-500 text-white flex items-center justify-center shrink-0">
                              <Check className="w-3 h-3" />
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                  {chosenFriend && (
                    <button
                      type="button"
                      disabled={Boolean(busyAction)}
                      onClick={() => handlePropose(chosenFriend.konanId)}
                      className="w-full min-h-[2.75rem] px-3 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white dark:bg-sky-400 dark:hover:bg-sky-300 dark:text-slate-950 font-black text-xs sm:text-sm inline-flex items-center justify-center gap-2 text-center leading-snug shadow-sm cursor-pointer transition-all active:scale-[0.98] disabled:opacity-50"
                    >
                      <Send className="w-4 h-4 shrink-0" />
                      <span>
                        {busyAction ? 'Envoi de la proposition…' : `C’est parti avec ${chosenFriend.name} (+${selectedTier.rewardGold} pièces d’or)`}
                      </span>
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {feedback && (
        <p
          className={`m-0 text-xs font-bold leading-snug ${
            feedback.tone === 'ok' ? 'text-emerald-700 dark:text-emerald-300' : 'text-rose-700 dark:text-rose-300'
          }`}
        >
          {feedback.text}
        </p>
      )}
    </section>
  );
};
