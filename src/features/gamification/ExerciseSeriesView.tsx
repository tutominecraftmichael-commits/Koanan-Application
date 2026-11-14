/**
 * ICÔNE D'EXERCICES : séries de 10 QCM au hasard sur les mini-leçons déjà faites (jusqu'à 5 matières).
 * - Gratuit : chaque série coûte 5 ⚡ (25 ⚡ au maximum, recharge progressive, plein en 23 h) ;
 *   Pro et Plus : énergie illimitée.
 * - XP : 15, puis le double à chaque série enchaînée (30, 60, 120 au maximum) ; −1 XP par faute.
 * Chargé à la demande (les cours sont lourds).
 */
import React, { useEffect, useMemo, useState } from 'react';
import { AlertCircle, CheckCircle2, Infinity as InfinityIcon, Star, X, Zap } from 'lucide-react';
import type { GamificationState } from '../../types';
import type { CurriculumGradeLevel } from '../../lib/curriculum/types';
import { MathRenderer, VisualSchemaRenderer } from '../../components/common/MathRenderer';
import { KonanMascot } from '../../components/common/KonanMascot';
import { soundFX } from '../../lib/audioEffects';
import { getCurriculumChapters, normalizeGradeForLookup } from '../../lib/curriculum/curriculumRegistry';
import { getStudentProgressMap } from '../../lib/curriculum/studentProgressService';
import { shuffleExerciseOptions } from '../../lib/curriculum/optionShuffle';
import { buildExerciseSeries, masteredPointsBySubject, type SeriesQuestion } from '../../lib/gamification/exerciseSeriesPool';
import {
  ENERGY_COST, ENERGY_MAX, ENERGY_UNIT_MS, SERIES_LENGTH, energyNow, hasUnlimitedEnergy, nextSeriesBaseXp,
} from '../../lib/gamification/gamification';

export interface ExerciseSeriesViewProps {
  userId: string;
  gradeLevel: CurriculumGradeLevel | null;
  gamification?: GamificationState;
  planTier?: string;
  /** Dépense l'énergie d'une série ; false si pas assez d'énergie. */
  onSpend: () => boolean;
  /** Fin de série : renvoie les XP gagnés. */
  onFinish: (mistakes: number, startedAt: Date, total: number) => number;
  onClose: () => void;
  onUpgrade: () => void;
}

type Phase = 'intro' | 'question' | 'end';

const fmtWait = (ms: number) => {
  const min = Math.max(1, Math.ceil(ms / 60000));
  const h = Math.floor(min / 60);
  const m = min % 60;
  return h ? `${h} h ${String(m).padStart(2, '0')}` : `${m} min`;
};

const EnergyBar: React.FC<{ energy: number; unlimited: boolean }> = ({ energy, unlimited }) => (
  <div className="flex items-center gap-2">
    <div className="flex gap-1" aria-hidden="true">
      {Array.from({ length: ENERGY_MAX / ENERGY_COST }).map((_, i) => {
        const filled = unlimited || energy >= (i + 1) * ENERGY_COST;
        return (
          <span key={i} className={`w-7 h-7 rounded-lg flex items-center justify-center border-2 ${filled ? 'bg-amber-400 border-amber-500 shadow-[0_2px_0_#b45309]' : 'bg-slate-100 border-slate-200 dark:bg-slate-800 dark:border-slate-700'}`}>
            <Zap className={`w-4 h-4 ${filled ? 'text-white fill-white' : 'text-slate-400 dark:text-slate-500'}`} />
          </span>
        );
      })}
    </div>
    <span className="text-sm font-black text-slate-900 dark:text-white tabular-nums flex items-center gap-1">
      {unlimited ? <><InfinityIcon className="w-4 h-4" /> ⚡</> : `${energy} / ${ENERGY_MAX} ⚡`}
    </span>
  </div>
);

export const ExerciseSeriesView: React.FC<ExerciseSeriesViewProps> = ({ userId, gradeLevel, gamification, planTier, onSpend, onFinish, onClose, onUpgrade }) => {
  const unlimited = hasUnlimitedEnergy(planTier);
  const [now, setNow] = useState(() => Date.now());
  const [phase, setPhase] = useState<Phase>('intro');
  const [series, setSeries] = useState<SeriesQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [mistakes, setMistakes] = useState(0);
  const [startedAt, setStartedAt] = useState<Date>(() => new Date());
  const [gained, setGained] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 30 * 1000);
    return () => clearInterval(t);
  }, []);

  const energy = energyNow(gamification, new Date(now));
  const nextXp = nextSeriesBaseXp(gamification, new Date(now));
  const canPlay = unlimited || energy.energy >= ENERGY_COST;
  // Temps avant d'avoir de nouveau 5 ⚡ (une série)
  const waitMs = !canPlay && energy.nextUnitAt
    ? energy.nextUnitAt + (ENERGY_COST - energy.energy - 1) * ENERGY_UNIT_MS - now
    : 0;

  // Questions possibles : mini-leçons déjà faites, pour la classe de l'élève
  const available = useMemo(() => {
    if (!gradeLevel) return 0;
    const mastered = masteredPointsBySubject(getStudentProgressMap(userId), normalizeGradeForLookup(gradeLevel));
    return buildExerciseSeries(mastered, gradeLevel, getCurriculumChapters).length;
  }, [userId, gradeLevel, phase]);

  const start = () => {
    if (!gradeLevel) return;
    const mastered = masteredPointsBySubject(getStudentProgressMap(userId), normalizeGradeForLookup(gradeLevel));
    const built = buildExerciseSeries(mastered, gradeLevel, getCurriculumChapters)
      .map((q) => ({ ...q, exercise: shuffleExerciseOptions(q.exercise) }));
    if (!built.length) return;
    if (!onSpend()) return;
    setSeries(built);
    setIndex(0);
    setSelected(null);
    setChecked(false);
    setMistakes(0);
    setStartedAt(new Date());
    setPhase('question');
    try { soundFX.playCheckmarkPop(); } catch { /* son facultatif */ }
  };

  const q = series[index];
  const isCorrect = checked && q && selected === q.exercise.correctAnswerIndex;

  const verify = () => {
    if (selected === null || !q) return;
    setChecked(true);
    if (selected === q.exercise.correctAnswerIndex) {
      try { soundFX.playCorrect(); } catch { /* son */ }
    } else {
      setMistakes((m) => m + 1);
      try { soundFX.playWrong(); } catch { /* son */ }
    }
  };

  const next = () => {
    if (index + 1 < series.length) {
      setIndex(index + 1);
      setSelected(null);
      setChecked(false);
      return;
    }
    const xp = onFinish(mistakes, startedAt, series.length);
    setGained(xp);
    setPhase('end');
    try { soundFX.playVictoryJingle(); } catch { /* son */ }
  };

  const quit = () => {
    if (phase === 'question' && !window.confirm('Quitter la série ? L’énergie dépensée ne sera pas rendue et tu ne gagneras pas d’XP.')) return;
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[80] bg-slate-50 dark:bg-[#070B13] overflow-y-auto">
      <div className="max-w-xl mx-auto px-4 py-4 sm:py-6 space-y-4 min-h-full flex flex-col">
        {/* En-tête */}
        <div className="flex items-center gap-3">
          <button type="button" onClick={quit} aria-label="Fermer" className="p-2 -ml-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-200 dark:hover:text-white dark:hover:bg-slate-800 cursor-pointer">
            <X className="w-6 h-6" />
          </button>
          {phase === 'question' ? (
            <div className="flex-1 h-4 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-500" style={{ width: `${((index + (checked ? 1 : 0)) / series.length) * 100}%` }} />
            </div>
          ) : (
            <p className="flex-1 text-base font-black text-slate-900 dark:text-white">Exercices</p>
          )}
          {!unlimited && (
            <span className="flex items-center gap-1 text-sm font-black text-amber-600 dark:text-amber-300 tabular-nums">
              <Zap className="w-4 h-4 fill-current" />{energy.energy}
            </span>
          )}
        </div>

        {/* Accueil de la série */}
        {phase === 'intro' && (
          <div className="flex-1 flex flex-col items-center text-center gap-4 pt-2">
            <KonanMascot pose={available ? 'wave' : 'encourage'} size={130} />
            {!gradeLevel || !available ? (
              <>
                <h2 className="text-xl font-black text-slate-900 dark:text-white">Fais d’abord une leçon avec moi</h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm">
                  Mes exercices portent seulement sur les mini-leçons que tu as déjà terminées. Lance une séance de cours, puis reviens ici !
                </p>
                <button type="button" onClick={onClose} className="w-full max-w-sm py-4 rounded-2xl bg-sky-500 text-white font-black uppercase tracking-wide shadow-[0_4px_0_#0284C7] active:translate-y-1 active:shadow-none cursor-pointer">
                  D’accord
                </button>
              </>
            ) : (
              <>
                <h2 className="text-xl font-black text-slate-900 dark:text-white">{Math.min(SERIES_LENGTH, available)} questions au hasard</h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm">
                  Je mélange les leçons que tu as déjà faites, jusqu’à 5 matières. Chaque faute te coûte 1 XP.
                </p>
                <div className="w-full max-w-sm rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4 space-y-3 text-left">
                  <EnergyBar energy={energy.energy} unlimited={unlimited} />
                  <p className="flex items-center gap-2 text-sm font-bold text-slate-800 dark:text-slate-200">
                    <Star className="w-5 h-5 shrink-0 text-amber-500 fill-amber-400" />
                    <span className="flex-1">Cette série rapporte jusqu’à <span className="text-amber-600 dark:text-amber-300 font-black whitespace-nowrap">{nextXp.base} XP</span></span>
                    {nextXp.chainIndex > 0 && <span className="shrink-0 px-2 py-0.5 rounded-full text-[11px] font-black bg-orange-100 text-orange-800 dark:bg-orange-500/15 dark:text-orange-300">×{2 ** Math.min(nextXp.chainIndex, 3)} enchaînée</span>}
                  </p>
                  {!unlimited && <p className="text-xs text-slate-500 dark:text-slate-400">Une série coûte {ENERGY_COST} ⚡. Enchaîne les séries (moins de 30 min entre deux) pour doubler les XP : 15, 30, 60, puis 120.</p>}
                </div>
                {canPlay ? (
                  <button type="button" onClick={start} className="w-full max-w-sm py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-white font-black uppercase tracking-wide shadow-[0_4px_0_#C2410C] active:translate-y-1 active:shadow-none cursor-pointer flex items-center justify-center gap-2">
                    Commencer {!unlimited && <span className="flex items-center gap-0.5 text-sm">(−{ENERGY_COST} <Zap className="w-4 h-4 fill-current" />)</span>}
                  </button>
                ) : (
                  <div className="w-full max-w-sm space-y-3">
                    <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      Plus assez d’énergie. Prochaine série dans <span className="text-amber-600 dark:text-amber-300 font-black">{fmtWait(waitMs)}</span>
                      {energy.fullAt ? <> · plein dans {fmtWait(energy.fullAt - now)}</> : null}.
                    </p>
                    <button type="button" onClick={onUpgrade} className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-black uppercase tracking-wide shadow-[0_4px_0_#4338CA] active:translate-y-1 active:shadow-none cursor-pointer">
                      Énergie illimitée avec KONAN Pro
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* Question */}
        {phase === 'question' && q && (
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-[11px] font-black uppercase tracking-wider text-sky-600 dark:text-sky-400">
              {q.subjectName} · {q.chapterTitle}
            </p>
            <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
              <MathRenderer text={q.exercise.prompt} />
            </div>
            {q.exercise.visualSchema && <VisualSchemaRenderer schema={q.exercise.visualSchema} />}
            <div className="grid gap-2.5">
              {(q.exercise.options || []).map((opt, oIdx) => {
                const isSel = selected === oIdx;
                let style = 'bg-white dark:bg-slate-900/90 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-amber-400';
                if (isSel && !checked) style = 'bg-amber-50 dark:bg-amber-950/50 border-amber-500 text-amber-900 dark:text-amber-100 ring-2 ring-amber-500/20';
                if (checked) {
                  if (oIdx === q.exercise.correctAnswerIndex) style = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-100';
                  else if (isSel) style = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-900 dark:text-rose-100';
                  else style = 'opacity-40 border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-slate-500';
                }
                return (
                  <button
                    key={oIdx}
                    type="button"
                    disabled={checked}
                    onClick={() => { setSelected(oIdx); try { soundFX.playClick(); } catch { /* son */ } }}
                    className={`w-full p-3.5 rounded-xl border-2 text-left text-sm font-semibold flex items-start justify-between gap-3 transition-all cursor-pointer disabled:cursor-default ${style}`}
                  >
                    <span className="flex items-start gap-3 min-w-0">
                      <span className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center shrink-0 ${isSel ? 'bg-amber-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      <span className="leading-snug pt-0.5 min-w-0"><MathRenderer text={opt} /></span>
                    </span>
                    {checked && oIdx === q.exercise.correctAnswerIndex && <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />}
                    {checked && isSel && oIdx !== q.exercise.correctAnswerIndex && <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />}
                  </button>
                );
              })}
            </div>
            {checked && (
              <div className={`p-4 rounded-2xl border-2 text-sm space-y-1 ${isCorrect ? 'bg-emerald-50 border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/30' : 'bg-rose-50 border-rose-200 dark:bg-rose-500/10 dark:border-rose-500/30'}`}>
                <p className={`font-black ${isCorrect ? 'text-emerald-800 dark:text-emerald-200' : 'text-rose-800 dark:text-rose-200'}`}>
                  {isCorrect ? 'Juste !' : 'Pas tout à fait (−1 XP).'}
                </p>
                {q.exercise.explanation && <div className="text-slate-700 dark:text-slate-200"><MathRenderer text={q.exercise.explanation} /></div>}
              </div>
            )}
            <div className="mt-auto sticky bottom-0 pt-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-gradient-to-t from-slate-50 via-slate-50 dark:from-[#070B13] dark:via-[#070B13] to-transparent">
              {!checked ? (
                <button type="button" disabled={selected === null} onClick={verify} className="w-full py-4 rounded-2xl bg-amber-500 text-white font-black uppercase tracking-wide shadow-[0_4px_0_#B45309] active:translate-y-1 active:shadow-none disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer">
                  Vérifier
                </button>
              ) : (
                <button type="button" onClick={next} className={`w-full py-4 rounded-2xl text-white font-black uppercase tracking-wide active:translate-y-1 active:shadow-none cursor-pointer ${isCorrect ? 'bg-emerald-500 shadow-[0_4px_0_#047857]' : 'bg-rose-500 shadow-[0_4px_0_#BE123C]'}`}>
                  {index + 1 < series.length ? 'Continuer' : 'Voir mon résultat'}
                </button>
              )}
            </div>
          </div>
        )}

        {/* Résultat */}
        {phase === 'end' && (
          <div className="flex-1 flex flex-col items-center text-center gap-4 pt-2">
            <KonanMascot pose={mistakes <= 2 ? 'jump' : 'encourage'} size={140} />
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              {series.length - mistakes} / {series.length} {mistakes === 0 ? '— parfait !' : mistakes <= 2 ? '— très bien !' : '— continue, tu progresses !'}
            </h2>
            <div className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-amber-50 dark:bg-amber-500/10 border-2 border-amber-300 dark:border-amber-400/40">
              <Star className="w-7 h-7 text-amber-500 fill-amber-400" />
              <span className="text-3xl font-black text-amber-600 dark:text-amber-300 tabular-nums">+{gained} XP</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm">
              Enchaîne une autre série dans les 30 minutes : je double tes XP (jusqu’à 120 par série).
            </p>
            <div className="w-full max-w-sm space-y-2.5">
              <button type="button" onClick={() => setPhase('intro')} className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-white font-black uppercase tracking-wide shadow-[0_4px_0_#C2410C] active:translate-y-1 active:shadow-none cursor-pointer">
                Encore une série
              </button>
              <button type="button" onClick={onClose} className="w-full py-3.5 rounded-2xl border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-black uppercase tracking-wide cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800">
                Terminer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExerciseSeriesView;
