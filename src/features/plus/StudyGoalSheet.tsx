import React, { useEffect, useState } from 'react';
import { Check, Gem, Loader2, Target, X } from 'lucide-react';
import { KonanPlush } from '../../components/common/KonanPlush';
import { STUDY_GOALS, studyGoalInfo, type StudyGoal } from '../../lib/studyGoals';

/**
 * KONAN Plus — « Mon objectif » : 12 de moyenne, mention (16) ou major.
 * KONE montre tout de suite comment il parlera avec l'objectif choisi (bulle + geste de la peluche).
 * Style des fiches haut de gamme (PlansSheet) : lisible en mode jour d'abord, puis dark:.
 */
interface Props {
  currentGoal: StudyGoal | '';
  /** Enregistre l'objectif sur le serveur ; renvoie un message d'erreur, ou null si c'est bon */
  onSave: (goal: StudyGoal) => Promise<string | null>;
  onClose: () => void;
  studentName?: string;
  /** Ouvre « Mon plan pour l'objectif » (planning réglé sur l'objectif) */
  onOpenPlan?: () => void;
}

// Couleur d'accent de chaque objectif (pastille de la note visée)
const ACCENT: Record<StudyGoal, string> = {
  target_12: 'bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-emerald-400/10 dark:text-emerald-300 dark:ring-emerald-400/30',
  target_16: 'bg-sky-50 text-sky-700 ring-sky-200 dark:bg-sky-400/10 dark:text-sky-300 dark:ring-sky-400/30',
  major_promotion: 'bg-amber-50 text-amber-700 ring-amber-200 dark:bg-amber-400/10 dark:text-amber-300 dark:ring-amber-400/30',
};

export const StudyGoalSheet: React.FC<Props> = ({ currentGoal, onSave, onClose, studentName, onOpenPlan }) => {
  const [selected, setSelected] = useState<StudyGoal>(currentGoal || 'target_16');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const info = studyGoalInfo(selected) || STUDY_GOALS[1];
  const unchanged = selected === currentGoal;
  const firstName = String(studentName || '').trim().split(/\s+/)[0];

  // Échap ferme la fiche (sauf pendant l'enregistrement)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape' && !saving) onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, saving]);

  const save = async () => {
    if (saving || unchanged) return;
    setSaving(true);
    setError(null);
    const err = await onSave(selected);
    setSaving(false);
    if (err) setError(err);
    else onClose();
  };

  return (
    <div className="fixed inset-0 z-[95] bg-slate-950/60 backdrop-blur-sm flex items-end sm:items-center justify-center sm:p-4" role="dialog" aria-modal="true" aria-label="Mon objectif">
      <div className="w-full sm:max-w-lg max-h-[95vh] overflow-y-auto rounded-t-[28px] sm:rounded-[28px] bg-white dark:bg-[#0B0F17] border border-slate-200 dark:border-white/10 shadow-2xl">
        {/* En-tête : KONE et ce qu'il dira */}
        <div className="relative px-5 sm:px-7 pt-6 pb-4">
          <button onClick={onClose} disabled={saving} className="absolute right-3 top-3 p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5 disabled:opacity-40" aria-label="Fermer">
            <X className="w-5 h-5" />
          </button>
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-700 dark:text-amber-300/90 inline-flex items-center gap-1.5">
            <Gem className="w-3.5 h-3.5" /> KONAN Plus
          </p>
          <h2 className="mt-1.5 text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white">
            {firstName ? `${firstName}, quel est ton objectif ?` : 'Quel est ton objectif ?'}
          </h2>
          <p className="mt-1 text-[13px] text-slate-600 dark:text-slate-400 pr-6">
            KONE et KONAN s’adaptent à ton ambition : leur façon de te parler, leur exigence et tes devoirs.
          </p>

          <div className="mt-4 flex items-end gap-3">
            <KonanPlush variant="body" size={92} mood={info.mood} preload="all" className="shrink-0 -mb-1" />
            <div key={info.id} className="relative flex-1 min-w-0 mb-3 rounded-2xl rounded-bl-md px-4 py-3 bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 animate-in fade-in slide-in-from-bottom-1 duration-300">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">KONE te dira</p>
              <p className="mt-0.5 text-[13.5px] font-semibold leading-snug text-slate-900 dark:text-slate-100">« {info.koneSays} »</p>
            </div>
          </div>
        </div>

        {/* Les 3 objectifs */}
        <div className="px-4 sm:px-7 pb-2 space-y-2.5" role="radiogroup" aria-label="Objectifs">
          {STUDY_GOALS.map((g) => {
            const on = g.id === selected;
            return (
              <button
                key={g.id}
                type="button"
                role="radio"
                aria-checked={on}
                onClick={() => { setSelected(g.id); setError(null); }}
                className={`w-full text-left rounded-2xl border p-3.5 sm:p-4 transition-all cursor-pointer active:scale-[0.99] ${
                  on
                    ? 'border-slate-900 dark:border-amber-300/70 bg-white dark:bg-white/[0.04] shadow-[0_2px_0_0_rgba(15,23,42,0.9)] dark:shadow-none'
                    : 'border-slate-200 dark:border-white/10 bg-white dark:bg-transparent hover:border-slate-300 dark:hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-12 h-12 rounded-xl ring-1 flex items-center justify-center shrink-0 font-black tabular-nums text-lg tracking-tight ${ACCENT[g.id]}`}>
                    {g.target}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[14px] font-black text-slate-900 dark:text-white">{g.title}</span>
                    <span className="block text-[12px] text-slate-600 dark:text-slate-400">{g.subtitle}</span>
                  </span>
                  <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                    on ? 'bg-[#0F172A] border-[#0F172A] dark:bg-amber-300 dark:border-amber-300' : 'border-slate-300 dark:border-white/20'
                  }`}>
                    {on && <Check className="w-3.5 h-3.5 stroke-[3] text-white dark:text-slate-950" />}
                  </span>
                </div>
                {on && (
                  <ul className="mt-3 pt-3 border-t border-slate-100 dark:border-white/5 space-y-1.5 animate-in fade-in duration-200">
                    {g.changes.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-[12.5px] text-slate-700 dark:text-slate-300 leading-snug">
                        <Target className="w-3.5 h-3.5 mt-0.5 shrink-0 text-amber-600 dark:text-amber-300" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </button>
            );
          })}
        </div>

        {/* Validation */}
        <div className="px-4 sm:px-7 pt-3 pb-6 space-y-2.5">
          {error && (
            <p className="rounded-xl px-3.5 py-2.5 text-[12.5px] font-semibold text-rose-800 bg-rose-50 border border-rose-200 dark:text-rose-200 dark:bg-rose-500/10 dark:border-rose-500/30" role="alert">
              {error}
            </p>
          )}
          <button
            type="button"
            onClick={save}
            disabled={saving || unchanged}
            className={`w-full py-3.5 rounded-2xl text-sm font-black tracking-wide transition-colors inline-flex items-center justify-center gap-2 disabled:cursor-default ${
              unchanged
                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-400/10 dark:text-emerald-200 dark:border-emerald-400/30'
                : 'bg-[#0F172A] text-white hover:bg-[#1E293B] dark:bg-amber-300 dark:text-slate-950 dark:hover:bg-amber-200 disabled:opacity-70 shadow-sm'
            }`}
          >
            {saving ? <><Loader2 className="w-4 h-4 animate-spin" /> Enregistrement…</> : unchanged ? <><Check className="w-4 h-4" /> C’est ton objectif</> : 'Valider mon objectif'}
          </button>
          {/* Objectif déjà enregistré : régler le planning dessus (moyennes actuelles → notes visées) */}
          {unchanged && currentGoal && onOpenPlan && (
            <button type="button" onClick={onOpenPlan} className="w-full py-3 rounded-2xl text-sm font-black border-2 border-slate-900 text-slate-900 hover:bg-slate-50 dark:border-amber-300/60 dark:text-amber-200 dark:hover:bg-amber-400/10 inline-flex items-center justify-center gap-2 cursor-pointer">
              <Target className="w-4 h-4" /> Régler mon planning sur cet objectif
            </button>
          )}
          <p className="text-center text-[11.5px] text-slate-500 dark:text-slate-400 leading-snug">
            Tes notes restent calculées avec le barème officiel. Tu peux changer d’objectif quand tu veux.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudyGoalSheet;
