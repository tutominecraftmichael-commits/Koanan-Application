import React from 'react';
import { AlertTriangle, Users } from 'lucide-react';
import type { StructuredTimetableResult } from '../../services/geminiExtractionService';

export interface ExtractionReviewBarProps {
  /** Résultat de la lecture de l'emploi du temps (classes trouvées, classe retenue, alertes). */
  result: StructuredTimetableResult | null;
  /** Classe actuellement affichée dans l'éditeur. */
  activeClass: string;
  /** L'élève choisit une autre classe du document. */
  onSelectClass: (name: string, text: string) => void;
}

/**
 * Après l'import d'un emploi du temps :
 * - si le document contient plusieurs classes, l'élève choisit la sienne (sans relancer l'IA) ;
 * - les points à vérifier (cours qui se chevauchent…) sont affichés clairement.
 */
export const ExtractionReviewBar: React.FC<ExtractionReviewBarProps> = ({ result, activeClass, onSelectClass }) => {
  if (!result) return null;
  const classes = result.classes || [];
  // L'alerte « plusieurs classes » est remplacée par le choix ci-dessous
  const warnings = (result.warnings || []).filter((w) => !(classes.length > 1 && /contient \d+ classes/.test(w)));
  if (classes.length <= 1 && warnings.length === 0) return null;

  return (
    <div className="space-y-2.5">
      {classes.length > 1 && (
        <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-3.5 dark:border-indigo-500/30 dark:bg-indigo-500/10">
          <p className="flex items-center gap-2 text-xs font-bold text-indigo-900 dark:text-indigo-200">
            <Users className="h-4 w-4 shrink-0 text-indigo-600 dark:text-indigo-300" />
            Ce document contient {classes.length} classes. Laquelle est la tienne ?
          </p>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {classes.map((c) => {
              const selected = c.name === activeClass;
              return (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => onSelectClass(c.name, c.text)}
                  aria-pressed={selected}
                  className={`cursor-pointer rounded-xl border px-3 py-1.5 text-xs font-semibold transition-colors ${
                    selected
                      ? 'border-indigo-600 bg-indigo-600 text-white dark:border-indigo-400 dark:bg-indigo-500'
                      : 'border-indigo-200 bg-white text-indigo-800 hover:border-indigo-400 dark:border-indigo-500/30 dark:bg-slate-900/60 dark:text-indigo-200 dark:hover:border-indigo-400'
                  }`}
                >
                  {c.name}
                  <span className={`ml-1.5 font-normal ${selected ? 'text-indigo-100' : 'text-slate-500 dark:text-slate-400'}`}>
                    {c.slotCount} cours · {c.subjectCount} matières
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
      {warnings.length > 0 && (
        <div role="status" className="rounded-2xl border border-amber-300 bg-amber-50 p-3.5 dark:border-amber-500/30 dark:bg-amber-500/10">
          <p className="flex items-center gap-2 text-xs font-bold text-amber-900 dark:text-amber-200">
            <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-300" />
            À vérifier avant de valider
          </p>
          <ul className="mt-1.5 list-disc space-y-1 pl-5 text-xs text-amber-900 dark:text-amber-100">
            {warnings.map((w, i) => (
              <li key={i}>{w}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
