import React, { useEffect, useState } from 'react';
import { Dumbbell, Infinity as InfinityIcon, Zap } from 'lucide-react';
import type { GamificationState } from '../../types';
import { ENERGY_COST, energyNow, hasUnlimitedEnergy } from '../../lib/gamification/gamification';

/**
 * Icône ronde d'exercices (en bas à droite, au-dessus de la barre de navigation sur téléphone).
 * La pastille montre l'énergie ⚡ restante (∞ pour Pro et Plus).
 */
export const ExerciseFab: React.FC<{ gamification?: GamificationState; planTier?: string; onOpen: () => void }> = ({ gamification, planTier, onOpen }) => {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 60 * 1000);
    return () => clearInterval(t);
  }, []);
  const unlimited = hasUnlimitedEnergy(planTier);
  const { energy } = energyNow(gamification, new Date(now));
  const empty = !unlimited && energy < ENERGY_COST;

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Exercices : 10 questions au hasard. Énergie ${unlimited ? 'illimitée' : `${energy} sur 25`}`}
      className={`fixed right-4 sm:right-6 bottom-[calc(5.5rem+env(safe-area-inset-bottom))] lg:bottom-8 z-40 w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-105 active:translate-y-1 ${
        empty
          ? 'bg-slate-300 dark:bg-slate-700 shadow-[0_4px_0_#64748b]'
          : 'bg-gradient-to-br from-amber-400 to-orange-500 shadow-[0_5px_0_#C2410C,0_10px_24px_rgba(234,88,12,0.35)]'
      }`}
    >
      <Dumbbell className="w-8 h-8 text-white" strokeWidth={2.5} />
      <span className="absolute -top-1 -right-1 min-w-[2.1rem] h-6 px-1.5 rounded-full bg-white dark:bg-slate-900 border-2 border-amber-400 flex items-center justify-center gap-0.5 text-[11px] font-black text-amber-700 dark:text-amber-300 tabular-nums">
        {unlimited ? <InfinityIcon className="w-3.5 h-3.5" /> : energy}
        <Zap className="w-3 h-3 fill-current" />
      </span>
    </button>
  );
};
