import React, { useEffect } from 'react';
import { Star } from 'lucide-react';
import { KonanMascot } from '../../components/common/KonanMascot';
import { soundFX } from '../../lib/audioEffects';

/**
 * Célébration « +50 XP » : KONAN saute de joie et annonce les XP gagnés, puis tout disparaît seul.
 * Un toucher la ferme tout de suite.
 */
const LINES = [
  'Bien joué ! Je t’ajoute {xp} XP.',
  'Séance terminée : {xp} XP pour toi !',
  'Voilà {xp} XP de plus. Continue comme ça !',
  'Je suis fier de toi : +{xp} XP.',
];

const CSS = `
@keyframes konan-xp-in { 0% { transform: translateY(24px) scale(.7); opacity: 0 } 60% { transform: translateY(-6px) scale(1.06); opacity: 1 } 100% { transform: translateY(0) scale(1) } }
@keyframes konan-xp-out { to { transform: translateY(-16px); opacity: 0 } }
@keyframes konan-xp-pop { 0% { transform: scale(.4) } 70% { transform: scale(1.18) } 100% { transform: scale(1) } }
.konan-xp-card { animation: konan-xp-in .5s cubic-bezier(.34,1.56,.64,1) both, konan-xp-out .35s ease-in 2.9s forwards; }
.konan-xp-num { animation: konan-xp-pop .55s cubic-bezier(.34,1.56,.64,1) .15s both; }
@media (prefers-reduced-motion: reduce) { .konan-xp-card, .konan-xp-num { animation: none } }
`;

export const XpBurst: React.FC<{ amount: number; burstId: number; onDone: () => void }> = ({ amount, burstId, onDone }) => {
  useEffect(() => {
    const sound = setTimeout(() => { try { soundFX.playSuccessChime(); } catch { /* son facultatif */ } }, 350);
    const close = setTimeout(onDone, 3300);
    return () => { clearTimeout(sound); clearTimeout(close); };
  }, [burstId, onDone]);

  const line = LINES[burstId % LINES.length].replace('{xp}', String(amount));

  return (
    <div className="fixed inset-x-0 top-20 z-[90] flex justify-center px-4 pointer-events-none" role="status" aria-live="polite">
      <style>{CSS}</style>
      <button
        type="button"
        onClick={onDone}
        className="konan-xp-card pointer-events-auto flex items-center gap-3 rounded-2xl border-2 border-amber-300 dark:border-amber-400/60 bg-white dark:bg-slate-900 px-4 py-3 shadow-xl cursor-pointer"
      >
        <KonanMascot pose="jump" size={64} />
        <div className="text-left">
          <div className="konan-xp-num flex items-center gap-1.5">
            <Star className="w-6 h-6 text-amber-500 fill-amber-400" />
            <span className="text-2xl font-black text-amber-600 dark:text-amber-300 tabular-nums">+{amount} XP</span>
          </div>
          <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{line}</p>
        </div>
      </button>
    </div>
  );
};
