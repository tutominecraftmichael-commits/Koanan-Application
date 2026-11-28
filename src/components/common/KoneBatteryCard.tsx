import React, { useState } from 'react';
import { BatteryCharging, Lock, MessageCircle, Sparkles, Zap } from 'lucide-react';
import { KonanPlush } from './KonanPlush';
import {
  clampKoneBattery,
  getKoneMoodInfo,
  KONE_BATTERY_DEFAULT,
  type KoneMoodTier,
} from '../../lib/gamification/koneBattery';
import type { PlanTier } from '../../types';

export interface KoneBatteryCardProps {
  battery?: number;
  studentName?: string;
  planTier?: PlanTier;
  /** Lance immédiatement une mini-leçon ou un mini-jeu pour recharger KONÉ (+25 %) */
  onRechargeKone?: () => void;
  /** Ouvre la discussion avec KONÉ (comptes Pro / Plus, ou affiche l'aperçu Pro) */
  onOpenChat?: () => void;
}

const TIER_THEME: Record<KoneMoodTier, {
  card: string;
  badge: string;
  barFill: string;
  barTrack: string;
  bubble: string;
  percentText: string;
  ctaRecharge: string;
}> = {
  happy: {
    card: 'bg-white dark:bg-slate-900 border-sky-200/90 dark:border-sky-500/25',
    badge: 'bg-sky-100 text-sky-800 border-sky-200 dark:bg-sky-500/15 dark:text-sky-200 dark:border-sky-400/30',
    barFill: 'bg-gradient-to-r from-sky-500 to-blue-500',
    barTrack: 'bg-sky-100 dark:bg-slate-800',
    bubble: 'bg-sky-50/90 dark:bg-sky-950/40 border-sky-200/80 dark:border-sky-500/25 text-slate-800 dark:text-slate-100',
    percentText: 'text-sky-700 dark:text-sky-300',
    ctaRecharge: 'bg-sky-600 hover:bg-sky-500 text-white',
  },
  annoyed: {
    card: 'bg-white dark:bg-slate-900 border-orange-300/90 dark:border-orange-500/35',
    badge: 'bg-orange-100 text-orange-900 border-orange-300 dark:bg-orange-500/15 dark:text-orange-200 dark:border-orange-400/35',
    barFill: 'bg-gradient-to-r from-amber-500 to-orange-500',
    barTrack: 'bg-orange-100 dark:bg-slate-800',
    bubble: 'bg-orange-50/90 dark:bg-orange-950/35 border-orange-200 dark:border-orange-500/30 text-slate-800 dark:text-orange-50',
    percentText: 'text-orange-700 dark:text-orange-300',
    ctaRecharge: 'bg-orange-500 hover:bg-orange-600 text-white',
  },
  angry: {
    card: 'bg-white dark:bg-slate-900 border-red-400 dark:border-red-500/50 shadow-sm shadow-red-500/10',
    badge: 'bg-red-100 text-red-900 border-red-300 dark:bg-red-500/20 dark:text-red-200 dark:border-red-400/45 animate-pulse',
    barFill: 'bg-gradient-to-r from-red-500 to-rose-600',
    barTrack: 'bg-red-100 dark:bg-slate-800',
    bubble: 'bg-red-50 dark:bg-red-950/45 border-red-300 dark:border-red-500/40 text-red-950 dark:text-red-100',
    percentText: 'text-red-700 dark:text-red-300',
    ctaRecharge: 'bg-red-600 hover:bg-red-500 text-white',
  },
  strike: {
    card: 'bg-red-950/[0.04] dark:bg-[#1C090C] border-red-800/60 dark:border-red-800/70 shadow-sm shadow-red-950/20',
    badge: 'bg-red-900 text-red-50 border-red-700 dark:bg-red-900/90 dark:text-red-100 dark:border-red-700',
    barFill: 'bg-red-900',
    barTrack: 'bg-red-200/60 dark:bg-red-950/80',
    bubble: 'bg-red-100/80 dark:bg-red-950/70 border-red-800/40 dark:border-red-800/70 text-red-950 dark:text-red-100',
    percentText: 'text-red-900 dark:text-red-300',
    ctaRecharge: 'bg-gradient-to-r from-red-800 to-rose-700 hover:from-red-700 hover:to-rose-600 text-white',
  },
};

export const KoneBatteryCard: React.FC<KoneBatteryCardProps> = ({
  battery = KONE_BATTERY_DEFAULT,
  studentName,
  planTier = 'free',
  onRechargeKone,
  onOpenChat,
}) => {
  const pct = clampKoneBattery(battery, KONE_BATTERY_DEFAULT);
  const firstName = String(studentName || '').trim().split(/\s+/)[0];
  const cleanFirstName = firstName && firstName !== 'Étudiant' ? firstName : undefined;
  const info = getKoneMoodInfo(pct, cleanFirstName);
  const theme = TIER_THEME[info.tier];

  const [boing, setBoing] = useState(0);
  const [bubbleIndex, setBubbleIndex] = useState(0);

  const activeBubble = info.bubbles[bubbleIndex % info.bubbles.length];
  const isPaid = planTier === 'pro' || planTier === 'plus';

  const handleTapPlush = () => {
    setBoing((n) => n + 1);
    if (info.bubbles.length > 1) {
      setBubbleIndex((i) => (i + 1) % info.bubbles.length);
    }
  };

  return (
    <div className={`p-4 sm:p-5 rounded-[22px] border transition-colors ${theme.card} space-y-3.5`}>
      <div className="flex items-start gap-3.5">
        {/* Mascotte KONÉ interactive */}
        <button
          type="button"
          onClick={handleTapPlush}
          title="Toucher KONÉ"
          aria-label={`KONÉ est ${info.label.toLowerCase()} (${pct} % de batterie)`}
          className="shrink-0 rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        >
          <KonanPlush
            variant="bust"
            size={72}
            battery={pct}
            waves={info.tier === 'happy'}
            enter
            preload="idle"
            boing={boing}
            className="kp--ringed"
          />
        </button>

        {/* En-tête + Barre de batterie */}
        <div className="min-w-0 flex-1 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-black text-slate-900 dark:text-white tracking-tight">
                KONÉ
              </span>
              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-extrabold border ${theme.badge}`}>
                {info.tier === 'strike' && <Lock className="w-3 h-3" />}
                {info.label}
              </span>
            </div>

            <span className={`inline-flex items-center gap-1 text-sm font-black tabular-nums ${theme.percentText}`}>
              <Zap className="w-3.5 h-3.5 fill-current" />
              {pct} %
            </span>
          </div>

          {/* Barre de batterie avec embout de pile */}
          <div className="flex items-center gap-1" role="progressbar" aria-label="Batterie de KONÉ" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct}>
            <div className={`relative flex-1 h-3 rounded-full overflow-hidden border border-black/5 dark:border-white/10 ${theme.barTrack}`}>
              <div
                className={`h-full rounded-full transition-all duration-500 ${theme.barFill}`}
                style={{ width: `${pct === 0 ? 0 : Math.max(pct, 4)}%` }}
              />
            </div>
            <span className="w-1.5 h-2 rounded-r-sm bg-slate-300 dark:bg-slate-700 shrink-0" aria-hidden="true" />
          </div>

          {/* Bulle de texte pré-écrite selon l'humeur (visible pour Gratuit, Pro et Plus) */}
          <div className={`px-3.5 py-2.5 rounded-2xl rounded-tl-md border text-[13px] leading-snug font-medium ${theme.bubble}`}>
            {activeBubble}
          </div>
        </div>
      </div>

      {/* Actions selon l'état de la batterie et la formule */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5">
        <span className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
          Séance ratée : −30 % · Mini-leçon / mini-jeu : +25 %
        </span>

        <div className="flex flex-wrap items-center gap-2 ml-auto">
          {pct < 100 && onRechargeKone && (
            <button
              type="button"
              onClick={onRechargeKone}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold shadow-xs transition-all cursor-pointer active:scale-95 ${theme.ctaRecharge}`}
            >
              <BatteryCharging className="w-4 h-4" />
              <span>{pct === 0 ? 'Calmer KONÉ (+25 %)' : 'Recharger (+25 %)'}</span>
            </button>
          )}

          {isPaid && onOpenChat && (
            <button
              type="button"
              onClick={onOpenChat}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold border transition-colors cursor-pointer ${
                pct === 0
                  ? 'border-red-800/40 dark:border-red-800/70 text-red-900 dark:text-red-200 bg-red-50/70 dark:bg-red-950/50 hover:bg-red-100/70 dark:hover:bg-red-950/80'
                  : 'border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {pct === 0 ? <Lock className="w-3.5 h-3.5" /> : <MessageCircle className="w-3.5 h-3.5" />}
              <span>{pct === 0 ? 'Chat en grève' : 'Parler à KONÉ'}</span>
            </button>
          )}

          {!isPaid && pct >= 50 && onRechargeKone && (
            <button
              type="button"
              onClick={onRechargeKone}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border border-sky-200 dark:border-sky-500/30 text-sky-700 dark:text-sky-300 bg-sky-50/60 dark:bg-sky-500/10 hover:bg-sky-100/70 dark:hover:bg-sky-500/20 transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Mini-leçon / Mini-jeu</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
