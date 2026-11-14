import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ShieldCheck, Star } from 'lucide-react';
import type { GamificationState } from '../../types';
import { gamificationOf, LEAGUE_MIN_REPUTATION, reputationLevel } from '../../lib/gamification/gamification';

/**
 * Carte « XP et Réputation » en haut du tableau de bord.
 * XP : total gagné en terminant ses séances. Réputation : discipline (séances faites ou manquées) ;
 * au-dessus de 80 %, l'élève pourra entrer dans la ligue (étape 3).
 */
const TONE = {
  good: { bar: 'bg-emerald-500', text: 'text-emerald-700 dark:text-emerald-300', chip: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300' },
  warn: { bar: 'bg-amber-500', text: 'text-amber-700 dark:text-amber-300', chip: 'bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300' },
  bad: { bar: 'bg-rose-500', text: 'text-rose-700 dark:text-rose-300', chip: 'bg-rose-100 text-rose-800 dark:bg-rose-500/15 dark:text-rose-300' },
} as const;

const formatXp = (n: number) => n.toLocaleString('fr-FR');

export const XpReputationCard: React.FC<{ gamification?: GamificationState }> = ({ gamification }) => {
  const g = gamificationOf(gamification);
  const [open, setOpen] = useState(false);
  const level = reputationLevel(g.reputation);
  const tone = TONE[level.tone];
  const inLeague = g.reputation > LEAGUE_MIN_REPUTATION;

  return (
    <div className="rounded-2xl border-2 border-slate-200 dark:border-slate-700/70 bg-white dark:bg-slate-900/70 p-3.5 sm:p-4 shadow-sm">
      <div className="grid grid-cols-2 gap-3">
        {/* XP */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-amber-400 shadow-[0_3px_0_0_#b45309] flex items-center justify-center shrink-0">
            <Star className="w-5 h-5 text-white fill-white" />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">XP</p>
            <p className="text-xl font-black text-slate-900 dark:text-white leading-tight tabular-nums">{formatXp(g.xp)}</p>
          </div>
        </div>
        {/* Réputation */}
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className={`w-4 h-4 shrink-0 ${tone.text}`} />
            <p className="text-[11px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Réputation</p>
            <p className={`ml-auto text-base font-black tabular-nums ${tone.text}`}>{g.reputation} %</p>
          </div>
          <div className="relative mt-1.5 h-3 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
            <div className={`h-full rounded-full ${tone.bar} transition-all duration-700`} style={{ width: `${g.reputation}%` }} />
            {/* Repère de la ligue : 80 % */}
            <div className="absolute top-0 bottom-0 w-0.5 bg-slate-900/60 dark:bg-white/70" style={{ left: `${LEAGUE_MIN_REPUTATION}%` }} />
          </div>
          <p className={`mt-1 text-[11px] font-bold ${tone.text}`}>{level.label}</p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-3 w-full flex items-center justify-between gap-2 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white cursor-pointer"
      >
        <span className={`px-2 py-0.5 rounded-full text-[11px] font-extrabold whitespace-nowrap ${tone.chip}`}>
          {inLeague ? 'Ligue ouverte' : 'Ligue : plus de 80 %'}
        </span>
        <span className="flex items-center gap-1 whitespace-nowrap">Comment ça marche ? {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}</span>
      </button>

      {open && (
        <div className="mt-3 space-y-3 text-xs text-slate-700 dark:text-slate-300 leading-snug">
          <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-3 space-y-1">
            <p className="font-extrabold text-slate-900 dark:text-white">Je te donne des XP à chaque séance terminée</p>
            <p>25 min : <b>+35 XP</b> · 45 min : <b>+50 XP</b> · 75 min : <b>+90 XP</b> · 2 h : <b>+140 XP</b></p>
          </div>
          <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-3 space-y-1">
            <p className="font-extrabold text-slate-900 dark:text-white">Ta réputation, c’est ta discipline</p>
            <p>Séance faite : <b>+1 %</b>. Séance manquée et pas rattrapée avant minuit : <b>−5 %</b>.</p>
            <p>Au-dessus de 80 %, tu pourras entrer dans la ligue et affronter d’autres élèves.</p>
          </div>
          {g.history.length > 0 && (
            <div>
              <p className="font-extrabold text-slate-900 dark:text-white mb-1">Derniers gains et pertes</p>
              <ul className="space-y-1">
                {g.history.slice(0, 6).map((e, i) => (
                  <li key={`${e.at}-${i}`} className="flex items-center justify-between gap-2">
                    <span className="truncate">{e.reason}</span>
                    <span className={`shrink-0 font-black tabular-nums ${e.amount >= 0 ? 'text-emerald-700 dark:text-emerald-300' : 'text-rose-700 dark:text-rose-300'}`}>
                      {e.amount >= 0 ? '+' : '−'}{Math.abs(e.amount)}{e.kind === 'xp' ? ' XP' : ' %'}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
