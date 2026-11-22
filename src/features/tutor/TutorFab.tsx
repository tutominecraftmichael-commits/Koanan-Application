import React from 'react';
import { HelpCircle } from 'lucide-react';

/**
 * Bouton flottant « Je ne comprends pas » (en bas à droite, au-dessus du bouton des mini-jeux quand il est là).
 * Fichier séparé : la discussion (et KaTeX) ne se charge qu'à l'ouverture.
 */
// PROVISOIRE : remplacé par la peluche KONAN animée dès que le fondateur envoie l'icône officielle.
export const TutorFab: React.FC<{ onOpen: () => void }> = ({ onOpen }) => (
  <button
    type="button"
    onClick={onOpen}
    title="Je ne comprends pas : KONAN t’explique"
    className="fixed right-4 sm:right-6 bottom-[calc(5.5rem+env(safe-area-inset-bottom))] lg:bottom-8 z-40 h-12 pl-3 pr-4 rounded-full flex items-center gap-2 cursor-pointer transition-transform hover:scale-105 active:translate-y-0.5 bg-white dark:bg-slate-900 border-2 border-sky-300 dark:border-sky-400/60 text-sky-800 dark:text-sky-200 text-sm font-extrabold shadow-[0_4px_0_#7dd3fc,0_10px_24px_rgba(2,132,199,0.18)] dark:shadow-[0_4px_0_#0369a1,0_10px_24px_rgba(0,0,0,0.4)]"
  >
    <HelpCircle className="w-5 h-5" strokeWidth={2.4} />
    Je ne comprends pas
  </button>
);
