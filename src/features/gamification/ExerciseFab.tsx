import React, { useEffect, useState } from 'react';
import { Gamepad2 } from 'lucide-react';
import type { GamificationState } from '../../types';
import { ENERGY_COST, energyNow, hasUnlimitedEnergy } from '../../lib/gamification/gamification';

/**
 * Bouton flottant jaune des Mini-Jeux KONAN (en bas à droite, au-dessus de la barre de navigation sur téléphone).
 * Ouvre le hub des mini-jeux (dont « XP à gogo »), où chaque mini-jeu indique son coût en charges (⚡).
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
      title="Mini-Jeux KONAN"
      aria-label="Ouvrir les mini-jeux KONAN"
      className={`fixed right-4 sm:right-6 bottom-[calc(5.5rem+env(safe-area-inset-bottom))] lg:bottom-8 z-40 w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-105 active:translate-y-1 ${
        empty
          ? 'bg-slate-300 dark:bg-slate-700 shadow-[0_4px_0_#64748b]'
          : 'bg-gradient-to-br from-amber-400 to-orange-500 shadow-[0_5px_0_#C2410C,0_10px_24px_rgba(234,88,12,0.35)]'
      }`}
    >
      <Gamepad2 className="w-8 h-8 text-white" strokeWidth={2.4} />
    </button>
  );
};
