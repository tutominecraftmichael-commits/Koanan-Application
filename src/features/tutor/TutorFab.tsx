import React, { useEffect, useRef, useState } from 'react';
import { KonanPlush } from '../../components/common/KonanPlush';
import { clampKoneBattery, getKoneMoodTier, KONE_BATTERY_DEFAULT } from '../../lib/gamification/koneBattery';

const SIZE = 84;
const HINT_KEY = 'konan_plush_hint_day';

/**
 * Bouton flottant « Je ne comprends pas » : la peluche KONE animée, en bas à droite
 * (les mini-jeux sont en bas à gauche). S'adapte en temps réel à la batterie et à l'humeur de KONÉ.
 */
export const TutorFab: React.FC<{ onOpen: () => void; battery?: number }> = ({ onOpen, battery = KONE_BATTERY_DEFAULT }) => {
  const pct = clampKoneBattery(battery, KONE_BATTERY_DEFAULT);
  const tier = getKoneMoodTier(pct);
  const [boing, setBoing] = useState(0);
  const [hint, setHint] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    let seen = '';
    try { seen = localStorage.getItem(HINT_KEY) || ''; } catch { /* stockage bloqué */ }
    if (seen === today) return;
    const show = setTimeout(() => {
      setHint(true);
      try { localStorage.setItem(HINT_KEY, today); } catch { /* sans effet */ }
    }, 1500);
    const hide = setTimeout(() => setHint(false), 7500);
    return () => { clearTimeout(show); clearTimeout(hide); };
  }, []);
  useEffect(() => () => clearTimeout(timer.current), []);

  const open = () => {
    setBoing((n) => n + 1);
    setHint(false);
    clearTimeout(timer.current);
    timer.current = setTimeout(onOpen, 260);
  };

  const haloColor =
    tier === 'strike' ? 'rgba(153, 27, 27, 0.48)'
      : tier === 'angry' ? 'rgba(239, 68, 68, 0.45)'
        : tier === 'annoyed' ? 'rgba(249, 115, 22, 0.42)'
          : undefined;

  return (
    <div className="fixed right-3 sm:right-6 bottom-[calc(5.25rem+env(safe-area-inset-bottom))] lg:bottom-8 z-40 flex items-center gap-2 pointer-events-none">
      {hint && (
        <button
          type="button"
          onClick={open}
          className="kp-hint pointer-events-auto max-w-[11.5rem] px-3.5 py-2 rounded-2xl rounded-br-md bg-white dark:bg-slate-900 border-2 border-sky-200 dark:border-sky-400/50 text-[13px] font-extrabold text-slate-900 dark:text-white shadow-lg cursor-pointer text-left leading-snug"
        >
          {tier === 'strike' ? (
            <>KONÉ est <span className="text-red-700 dark:text-red-400">en grève (0 %)</span></>
          ) : tier === 'angry' ? (
            <>KONÉ est <span className="text-red-600 dark:text-red-400">très fâché ({pct} %)</span></>
          ) : (
            <>Tu bloques ? <span className="text-sky-700 dark:text-sky-300">Je t’explique !</span></>
          )}
        </button>
      )}
      <button
        type="button"
        onClick={open}
        aria-label={`Je ne comprends pas : discuter avec KONÉ (batterie ${pct} %)`}
        title={tier === 'strike' ? 'KONÉ est en grève (0 %) — fais une mini-leçon pour le calmer' : `Je ne comprends pas ? KONÉ t’explique (${pct} %)`}
        className="pointer-events-auto relative rounded-full cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400/60"
        style={{ width: SIZE, height: SIZE }}
      >
        <span className="kp-halo" style={haloColor ? { background: haloColor } : undefined} />
        <KonanPlush variant="bust" size={SIZE} battery={pct} enter waves={tier === 'happy'} preload="idle" boing={boing} className="kp--ringed">
          {tier !== 'strike' && (
            <span className={`kp-ask bg-white dark:bg-slate-900 border-2 shadow-md z-10 ${
              tier === 'angry'
                ? 'text-red-600 dark:text-red-300 border-red-300 dark:border-red-400/60'
                : tier === 'annoyed'
                  ? 'text-orange-600 dark:text-orange-300 border-orange-300 dark:border-orange-400/60'
                  : 'text-sky-700 dark:text-sky-300 border-sky-300 dark:border-sky-400/60'
            }`}>
              {tier === 'angry' ? '!' : '?'}
            </span>
          )}
        </KonanPlush>
      </button>
    </div>
  );
};
