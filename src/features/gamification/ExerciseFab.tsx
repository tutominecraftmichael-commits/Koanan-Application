import React, { useEffect, useState } from 'react';
import { Dumbbell } from 'lucide-react';
import type { GamificationState } from '../../types';
import { ENERGY_COST, energyNow, hasUnlimitedEnergy } from '../../lib/gamification/gamification';

/**
 * Icône ronde d'exercices (en bas à droite, au-dessus de la barre de navigation sur téléphone).
 * L'énergie ⚡ n'est plus affichée dessus : elle est en haut à droite de l'écran.
 * L'icône devient grise quand l'énergie ne suffit plus pour une série (Gratuit).
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
      aria-label="Exercices : séries de questions chronométrées"
      className={`fixed right-4 sm:right-6 bottom-[calc(5.5rem+env(safe-area-inset-bottom))] lg:bottom-8 z-40 w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-105 active:translate-y-1 ${
        empty
          ? 'bg-slate-300 dark:bg-slate-700 shadow-[0_4px_0_#64748b]'
          : 'bg-gradient-to-br from-amber-400 to-orange-500 shadow-[0_5px_0_#C2410C,0_10px_24px_rgba(234,88,12,0.35)]'
      }`}
    >
      <Dumbbell className="w-8 h-8 text-white" strokeWidth={2.5} />
    </button>
  );
};
