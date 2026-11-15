import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ShieldCheck, Star } from 'lucide-react';
import type { GamificationState } from '../../types';
import { gamificationOf, LEAGUE_MIN_REPUTATION, reputationLevel } from '../../lib/gamification/gamification';

/**
 * Bandeau XP + réputation, en haut de la page Ligue (onglet trophée).
 * XP : total gagné (séances terminées, séries d'exercices). Réputation : petite pastille discrète
 * (discipline) ; au-dessus de 80 %, l'élève participe à la ligue.
 */
const TONE = {
  good: 'bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/30',
  warn: 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/30',
  bad: 'bg-rose-50 text-rose-800 border-rose-200 dark:bg-rose-500/10 dark:text-rose-300 dark:border-rose-500/30',
} as const;

const formatXp = (n: number) => n.toLocaleString('fr-FR');

export const XpReputationCard: React.FC<{ gamification?: GamificationState; weekXp?: number }> = ({ gamification, weekXp }) => {
  const g = gamificationOf(gamification);
  const [open, setOpen] = useState(false);
  const level = reputationLevel(g.reputation);

  return (
    <div className="rounded-2xl border-2 border-slate-200 dark:border-slate-700/70 bg-white dark:bg-slate-900/70 px-3.5 py-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-amber-400 shadow-[0_3px_0_0_#b45309] flex items-center justify-center shrink-0">
          <Star className="w-5 h-5 text-white fill-white" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-lg font-black text-slate-900 dark:text-white leading-tight tabular-nums whitespace-nowrap">{formatXp(g.xp)} XP</p>
          <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 whitespace-nowrap">
            {weekXp !== undefined ? `dont ${formatXp(weekXp)} cette semaine` : 'au total'}
          </p>
        </div>
        {/* Réputation : pastille discrète */}
        <span
          className={`shrink-0 inline-flex items-center gap-1 px-2 py-1 rounded-full border text-xs font-black tabular-nums whitespace-nowrap ${TONE[level.tone]}`}
          title={`Réputation : ${level.label}`}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          {g.reputation}&nbsp;%
        </span>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-2 w-full flex items-center justify-end gap-1 text-xs font-bold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white cursor-pointer whitespace-nowrap"
      >
        Comment ça marche ? {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>

      {open && (
        <div className="mt-2 space-y-2.5 text-xs text-slate-700 dark:text-slate-300 leading-snug">
          <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-3 space-y-1">
            <p className="font-extrabold text-slate-900 dark:text-white">Gagner des XP</p>
            <p>Séance terminée : 25 min <b>+35</b> · 45 min <b>+50</b> · 75 min <b>+90</b> · 2 h <b>+140</b>.</p>
            <p>Séries d’exercices (icône ronde) : 15, 30, 60 puis 120 XP si tu les enchaînes.</p>
          </div>
          <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-3 space-y-1">
            <p className="font-extrabold text-slate-900 dark:text-white">Ta réputation ({g.reputation} % : {level.label.toLowerCase()})</p>
            <p>Séance faite : <b>+1 %</b>. Séance manquée et pas rattrapée avant minuit : <b>−5 %</b>.</p>
            <p>Il faut plus de {LEAGUE_MIN_REPUTATION} % pour participer à la ligue.</p>
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
