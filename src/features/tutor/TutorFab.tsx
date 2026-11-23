import React, { useEffect, useRef, useState } from 'react';
import { KonanPlush } from '../../components/common/KonanPlush';

const SIZE = 84;
const HINT_KEY = 'konan_plush_hint_day';

/**
 * Bouton flottant « Je ne comprends pas » : la peluche KONAN animée, en bas à droite
 * (les mini-jeux sont en bas à gauche). Halo qui respire, bulle « ? » de temps en temps,
 * « boing » au toucher, et une fois par jour la bulle « Tu bloques ? Je t'explique ! ».
 * Fichier léger : la discussion (et KaTeX) ne se charge qu'à l'ouverture.
 */
export const TutorFab: React.FC<{ onOpen: () => void }> = ({ onOpen }) => {
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

  return (
    <div className="fixed right-3 sm:right-6 bottom-[calc(5.25rem+env(safe-area-inset-bottom))] lg:bottom-8 z-40 flex items-center gap-2 pointer-events-none">
      {hint && (
        <button
          type="button"
          onClick={open}
          className="kp-hint pointer-events-auto max-w-[11rem] px-3.5 py-2 rounded-2xl rounded-br-md bg-white dark:bg-slate-900 border-2 border-sky-200 dark:border-sky-400/50 text-[13px] font-extrabold text-slate-900 dark:text-white shadow-lg cursor-pointer text-left leading-snug"
        >
          Tu bloques ? <span className="text-sky-700 dark:text-sky-300">Je t’explique !</span>
        </button>
      )}
      <button
        type="button"
        onClick={open}
        aria-label="Je ne comprends pas : discuter avec KONAN"
        title="Je ne comprends pas ? KONAN t’explique"
        className="pointer-events-auto relative rounded-full cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400/60"
        style={{ width: SIZE, height: SIZE }}
      >
        <span className="kp-halo" />
        <KonanPlush variant="bust" size={SIZE} enter waves preload="idle" boing={boing} className="kp--ringed">
          <span className="kp-ask bg-white dark:bg-slate-900 text-sky-700 dark:text-sky-300 border-2 border-sky-300 dark:border-sky-400/60 shadow-md z-10">?</span>
        </KonanPlush>
      </button>
    </div>
  );
};
