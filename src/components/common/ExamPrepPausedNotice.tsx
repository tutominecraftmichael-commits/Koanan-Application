import React from 'react';
import { Wrench } from 'lucide-react';
import { EXAM_PREP_PAUSED_MESSAGE, EXAM_PREP_PAUSED_TITLE } from '../../lib/featureFlags';

/**
 * Message affiché à la place de la configuration des devoirs et examens pendant leur mise à jour.
 * - compact : une ligne, pour une carte de matière ;
 * - normal : encadré avec titre et explication.
 */
export const ExamPrepPausedNotice: React.FC<{ compact?: boolean; className?: string }> = ({ compact = false, className = '' }) => {
  if (compact) {
    return (
      <div
        role="status"
        className={`w-full flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-[11px] font-semibold ${className}`}
      >
        <Wrench className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
        <span>Devoirs et examens : indisponible (mise à jour)</span>
      </div>
    );
  }
  return (
    <div
      role="status"
      className={`p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-start gap-3 text-xs ${className}`}
    >
      <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
        <Wrench className="w-4 h-4" aria-hidden="true" />
      </div>
      <div className="space-y-0.5 min-w-0">
        <p className="font-extrabold text-slate-900 dark:text-white">{EXAM_PREP_PAUSED_TITLE}</p>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{EXAM_PREP_PAUSED_MESSAGE}</p>
      </div>
    </div>
  );
};
