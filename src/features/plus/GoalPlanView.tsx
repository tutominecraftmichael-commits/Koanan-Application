import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, CalendarCheck, Check, Clock, Gem, Info, Target } from 'lucide-react';
import type { Subject } from '../../types';
import { isNonAcademicSubject } from '../../lib/utils';
import { GOAL_DAILY_MINUTES, cleanGrade, planForGoal, type GoalPriority } from '../../lib/goalPlanning';
import { studyGoalInfo, type StudyGoal } from '../../lib/studyGoals';
import { KonanPlush } from '../../components/common/KonanPlush';

/**
 * KONAN Plus — « Mon plan pour l'objectif » : l'élève donne ses moyennes actuelles, KONAN calcule sa moyenne
 * générale, ce qui manque pour l'objectif, et OÙ gagner ces points (coefficients, marge de progrès).
 * « Régler mon planning » enregistre les moyennes et les notes visées dans les matières ; le planning donne
 * alors plus de séances aux matières qui rapportent le plus de points.
 */
interface Props {
  goal: StudyGoal | '';
  subjects: Subject[];
  dailyMinutes: number;
  onChangeGoal: () => void;
  /** Enregistre (matières avec moyennes et notes visées, temps par jour à appliquer ou null) et recalcule le planning */
  onApply: (subjects: Subject[], dailyMinutes: number | null) => void;
  onExit: () => void;
}

const fr = (n: number) => String(Math.round(n * 100) / 100).replace('.', ',');
/** Écart et moyenne visée : un chiffre après la virgule suffit (« 6,1 points », « 17,3 ») */
const fr1 = (n: number) => String(Math.round(n * 10) / 10).replace('.', ',');
const duration = (min: number) => (min < 60 ? `${min} min` : `${Math.floor(min / 60)} h${min % 60 ? ` ${String(min % 60).padStart(2, '0')}` : ''}`);

const PRIORITY: Record<GoalPriority, { label: string; chip: string }> = {
  priorite: { label: 'Priorité', chip: 'bg-rose-100 text-rose-800 border-rose-200 dark:bg-rose-500/15 dark:text-rose-200 dark:border-rose-500/30' },
  renforcer: { label: 'À renforcer', chip: 'bg-amber-100 text-amber-900 border-amber-200 dark:bg-amber-400/15 dark:text-amber-200 dark:border-amber-400/30' },
  maintien: { label: 'Garder le niveau', chip: 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-200 dark:border-emerald-500/30' },
};

export const GoalPlanView: React.FC<Props> = ({ goal, subjects, dailyMinutes, onChangeGoal, onApply, onExit }) => {
  const info = studyGoalInfo(goal);
  const studied = useMemo(() => subjects.filter((s) => !isNonAcademicSubject(s.name) && s.coefficient > 0), [subjects]);
  const [grades, setGrades] = useState<Record<string, string>>(() =>
    Object.fromEntries(studied.map((s) => [s.id, s.currentGrade != null ? String(s.currentGrade).replace('.', ',') : ''])));
  const recommended = goal ? GOAL_DAILY_MINUTES[goal] : 0;
  const [useRhythm, setUseRhythm] = useState(true);

  const plan = useMemo(() => (info
    ? planForGoal(studied.map((s) => ({ id: s.id, name: s.name, coefficient: s.coefficient, current: cleanGrade(grades[s.id]) })), info.targetValue)
    : null), [info, studied, grades]);
  const invalid = studied.filter((s) => grades[s.id]?.trim() && cleanGrade(grades[s.id]) === null).map((s) => s.name);
  const filled = studied.filter((s) => cleanGrade(grades[s.id]) !== null).length;

  const apply = () => {
    if (!plan || invalid.length) return;
    const byId = new Map(plan.rows.map((r) => [r.id, r]));
    const next = subjects.map((s) => {
      const r = byId.get(s.id);
      if (!r) return s;
      const current = cleanGrade(grades[s.id]);
      return { ...s, currentGrade: current ?? undefined, targetGrade: r.suggested };
    });
    onApply(next, recommended > dailyMinutes && useRhythm ? recommended : null);
  };

  const Header = (
    <div className="flex items-center gap-3">
      <button type="button" onClick={onExit} aria-label="Retour" className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
        <ArrowLeft className="w-5 h-5" />
      </button>
      <div className="min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-amber-700 dark:text-amber-300 inline-flex items-center gap-1"><Gem className="w-3 h-3" /> KONAN Plus</p>
        <h1 className="text-lg font-black text-slate-900 dark:text-white leading-tight">Mon plan pour l’objectif</h1>
      </div>
    </div>
  );

  if (!info || !plan) {
    return (
      <div className="max-w-2xl mx-auto py-4 sm:py-6 px-4 space-y-5">
        {Header}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 text-center space-y-3">
          <div className="flex justify-center"><KonanPlush variant="body" size={110} mood="think" /></div>
          <p className="text-[15px] font-black text-slate-900 dark:text-white">Choisis d’abord ton objectif</p>
          <p className="text-sm text-slate-600 dark:text-slate-300">12 de moyenne, une mention ou major : KONAN calcule ensuite où gagner tes points.</p>
          <button type="button" onClick={onChangeGoal} className="w-full py-3.5 rounded-2xl font-black text-sm bg-[#0F172A] text-white hover:bg-[#1E293B] dark:bg-amber-300 dark:text-slate-950 dark:hover:bg-amber-200 cursor-pointer">Choisir mon objectif</button>
        </div>
      </div>
    );
  }

  const target = info.targetValue;
  const avg = plan.currentAverage;
  const progress = avg === null ? 0 : Math.min(100, (avg / target) * 100);

  return (
    <div className="max-w-2xl mx-auto py-4 sm:py-6 px-4 space-y-4">
      {Header}

      {/* Objectif et moyenne générale */}
      <section className="p-4 sm:p-5 rounded-3xl bg-white dark:bg-[#0B0F17] border border-slate-200 dark:border-white/10 space-y-3.5">
        <div className="flex items-center gap-3">
          <span className="w-12 h-12 rounded-xl bg-amber-50 ring-1 ring-amber-200 text-amber-700 dark:bg-amber-400/10 dark:ring-amber-400/30 dark:text-amber-300 flex items-center justify-center font-black text-lg tabular-nums shrink-0">{info.target}</span>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300/90">Mon objectif</p>
            <p className="text-[15px] font-black text-slate-900 dark:text-white">{info.title}</p>
          </div>
          <button type="button" onClick={onChangeGoal} className="text-[12px] font-bold text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white cursor-pointer shrink-0">Changer</button>
        </div>
        {avg !== null ? (
          <div className="space-y-2">
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Ta moyenne générale</span>
              <span className="text-sm font-black tabular-nums text-slate-900 dark:text-white">{fr(avg)} <span className="text-slate-500 dark:text-slate-400">→ {fr(target)}</span></span>
            </div>
            <div className="h-2.5 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden" role="progressbar" aria-valuemin={0} aria-valuemax={target} aria-valuenow={avg} aria-label="Moyenne actuelle par rapport à l’objectif">
              <div className={`h-full rounded-full transition-all duration-500 ${plan.gap === 0 ? 'bg-emerald-500' : 'bg-amber-500'}`} style={{ width: `${progress}%` }} />
            </div>
            <p className="text-[13px] font-semibold text-slate-700 dark:text-slate-300">
              {plan.gap === 0
                ? 'Objectif déjà atteint : KONAN t’aide à garder ce niveau partout.'
                : plan.reachable
                  ? `Il te manque ${fr1(plan.gap)} point${plan.gap >= 2 ? 's' : ''} de moyenne. Voici où les gagner le plus facilement.`
                  : `Il te manque ${fr1(plan.gap)} points : c’est beaucoup pour une seule période. En progressant au maximum, tu peux viser ${fr1(plan.projectedAverage ?? avg)} : c’est déjà énorme, et l’objectif suivra.`}
            </p>
          </div>
        ) : (
          <p className="text-[13px] text-slate-600 dark:text-slate-400">Écris tes moyennes ci-dessous : KONAN calcule ta moyenne générale et ce qu’il te manque.</p>
        )}
      </section>

      {/* Moyennes actuelles et notes visées */}
      <section className="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 space-y-3">
        <div>
          <h2 className="text-[15px] font-black text-slate-900 dark:text-white">Où gagner tes points</h2>
          <p className="text-[12.5px] text-slate-600 dark:text-slate-400">Écris ta moyenne actuelle (dernier trimestre ou derniers devoirs). Laisse vide si tu ne sais pas.</p>
        </div>
        <ul className="divide-y divide-slate-100 dark:divide-slate-800">
          {plan.rows.map((r) => {
            const s = studied.find((x) => x.id === r.id)!;
            const bad = Boolean(grades[r.id]?.trim()) && cleanGrade(grades[r.id]) === null;
            const pr = PRIORITY[r.priority];
            return (
              <li key={r.id} className="py-3 flex items-center gap-3">
                <div className="min-w-0 flex-1">
                  <p className="text-[14px] font-black text-slate-900 dark:text-white truncate">{s.name}</p>
                  <p className="text-[11.5px] text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span>Coef {r.coefficient}</span>
                    {r.current !== null && <span className={`px-1.5 py-px rounded-md border text-[10.5px] font-black ${pr.chip}`}>{pr.label}</span>}
                    {r.gainOnAverage > 0 && <span className="font-bold text-slate-700 dark:text-slate-300">+{fr(r.gainOnAverage)} sur ta moyenne</span>}
                  </p>
                </div>
                <label className="sr-only" htmlFor={`grade-${r.id}`}>Moyenne actuelle en {s.name}</label>
                <input
                  id={`grade-${r.id}`}
                  inputMode="decimal"
                  value={grades[r.id] ?? ''}
                  onChange={(e) => setGrades((g) => ({ ...g, [r.id]: e.target.value.replace(/[^\d,.]/g, '').slice(0, 5) }))}
                  placeholder="—"
                  className={`w-16 h-10 text-center rounded-xl border-2 text-sm font-black tabular-nums bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none ${bad ? 'border-rose-400' : 'border-slate-200 dark:border-slate-700 focus:border-sky-400'}`}
                />
                <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
                <span className={`w-14 h-10 rounded-xl flex items-center justify-center text-sm font-black tabular-nums shrink-0 ${r.current !== null && r.suggested > r.current ? 'bg-amber-50 text-amber-800 ring-1 ring-amber-200 dark:bg-amber-400/10 dark:text-amber-200 dark:ring-amber-400/30' : 'bg-slate-50 text-slate-700 ring-1 ring-slate-200 dark:bg-white/5 dark:text-slate-200 dark:ring-white/10'}`} title="Note visée">
                  {fr(r.suggested)}
                </span>
              </li>
            );
          })}
        </ul>
        {invalid.length > 0 && <p className="text-[12.5px] font-semibold text-rose-700 dark:text-rose-300" role="alert">Une moyenne s’écrit entre 0 et 20 (ex. 12,5) : vérifie {invalid.join(', ')}.</p>}
        <p className="text-[11.5px] text-slate-500 dark:text-slate-400 flex items-start gap-1.5"><Info className="w-3.5 h-3.5 mt-0.5 shrink-0" /> KONAN vise d’abord les matières à fort coefficient où tu as de la marge : un point gagné y rapporte plus. Jamais plus de 6 points de progrès par matière.</p>
      </section>

      {/* Rythme conseillé */}
      <section className="p-4 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 space-y-2">
        <h2 className="text-[15px] font-black text-slate-900 dark:text-white inline-flex items-center gap-2"><Clock className="w-4 h-4 text-sky-600 dark:text-sky-300" /> Ton rythme</h2>
        {recommended > dailyMinutes ? (
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" checked={useRhythm} onChange={(e) => setUseRhythm(e.target.checked)} className="mt-1 w-4 h-4 accent-sky-600" />
            <span className="text-[13px] text-slate-700 dark:text-slate-300">Pour cet objectif, KONAN conseille <strong>{duration(recommended)} de révision par jour</strong> (tu as réglé {duration(dailyMinutes)}). Passer à {duration(recommended)}.</span>
          </label>
        ) : (
          <p className="text-[13px] text-slate-700 dark:text-slate-300 flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-emerald-600 shrink-0" /> Ton rythme ({duration(dailyMinutes)} par jour) suffit pour cet objectif : KONAN change seulement la répartition des séances.</p>
        )}
      </section>

      <button type="button" onClick={apply} disabled={invalid.length > 0} className="w-full py-4 rounded-2xl font-black text-[15px] bg-[#0F172A] text-white hover:bg-[#1E293B] dark:bg-amber-300 dark:text-slate-950 dark:hover:bg-amber-200 disabled:opacity-40 inline-flex items-center justify-center gap-2 cursor-pointer shadow-sm">
        <CalendarCheck className="w-4 h-4" /> Régler mon planning sur cet objectif
      </button>
      <p className="text-center text-[11.5px] text-slate-500 dark:text-slate-400 inline-flex items-center justify-center gap-1 w-full">
        <Target className="w-3.5 h-3.5" /> {filled ? 'Plus de séances là où tu gagnes le plus de points. Tes séances déjà faites sont gardées.' : 'Sans moyennes, KONAN garde la répartition habituelle (coefficients).'}
      </p>
    </div>
  );
};

export default GoalPlanView;
