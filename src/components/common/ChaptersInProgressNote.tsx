import React from 'react';
import { RefreshCw } from 'lucide-react';
import { CHAPTERS_IN_PROGRESS_MESSAGE } from '../../lib/contentNotices';

/**
 * Petite carte d'information, discrète et non cliquable, placée tout en bas d'une liste de chapitres :
 * elle prévient que d'autres chapitres du programme officiel arrivent après vérification.
 */
export const ChaptersInProgressNote: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div
    role="note"
    className={`flex items-start gap-2.5 px-3 py-2.5 rounded-xl border border-dashed border-slate-300 bg-slate-50 text-slate-600 dark:border-slate-700 dark:bg-slate-800/40 dark:text-slate-300 select-none ${className}`}
  >
    <RefreshCw className="w-4 h-4 mt-0.5 shrink-0 text-sky-600 dark:text-sky-400" aria-hidden="true" />
    <p className="text-[11px] sm:text-xs leading-relaxed">{CHAPTERS_IN_PROGRESS_MESSAGE}</p>
  </div>
);
