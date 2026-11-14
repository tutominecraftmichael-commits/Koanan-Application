/**
 * ICÔNE D'EXERCICES : séries de QCM chronométrées sur les chapitres que l'élève travaille (jusqu'à 5 matières).
 * - Verrou : il faut avoir terminé au moins une mini-leçon dans une matière pour qu'elle soit interrogée.
 * - Gratuit : chaque série coûte 5 ⚡ (25 ⚡ au maximum, recharge progressive, plein en 23 h) ;
 *   Pro et Plus : énergie illimitée.
 * - Niveaux enchaînés : 15 XP (10 questions, 5 min) → 30 XP (15, 7 min) → 60 XP (20, 8 min 30) → 120 XP (30, 10 min).
 * - Temps écoulé ou abandon : série perdue, rien de gagné, retour au niveau 1 ; recommencer coûte 5 ⚡.
 * - −1 XP par faute.
 * Chargé à la demande (les cours sont lourds).
 */
import React, { useEffect, useMemo, useState } from 'react';
import { AlertCircle, CheckCircle2, Infinity as InfinityIcon, Star, Timer, X, Zap } from 'lucide-react';
import type { GamificationState } from '../../types';
import type { CurriculumGradeLevel } from '../../lib/curriculum/types';
import { MathRenderer, VisualSchemaRenderer } from '../../components/common/MathRenderer';
import { KonanMascot } from '../../components/common/KonanMascot';
import { soundFX } from '../../lib/audioEffects';
import { getCurriculumChapters, normalizeGradeForLookup } from '../../lib/curriculum/curriculumRegistry';
import { getChapterSubCategory, getStudentProgressMap } from '../../lib/curriculum/studentProgressService';
import { getReviewMap } from '../../lib/curriculum/reviewMemory';
import { shuffleExerciseOptions } from '../../lib/curriculum/optionShuffle';
import { buildExerciseSeries, studiedChapters, type SeriesQuestion } from '../../lib/gamification/exerciseSeriesPool';
import {
  ENERGY_COST, ENERGY_MAX, ENERGY_UNIT_MS, energyNow, hasUnlimitedEnergy, nextSeriesBaseXp,
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
  /** Série perdue (temps écoulé ou abandon) : rien de gagné, retour au niveau 1. */
  onLose: (reason: string) => void;
  onClose: () => void;
  onUpgrade: () => void;
}

type Phase = 'intro' | 'question' | 'end' | 'lost';

const fmtClock = (ms: number) => {
  const s = Math.max(0, Math.ceil(ms / 1000));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
};
const fmtDuration = (sec: number) => (sec % 60 ? `${Math.floor(sec / 60)} min ${sec % 60}` : `${sec / 60} min`);

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

export const ExerciseSeriesView: React.FC<ExerciseSeriesViewProps> = ({ userId, gradeLevel, gamification, planTier, onSpend, onFinish, onLose, onClose, onUpgrade }) => {
  const unlimited = hasUnlimitedEnergy(planTier);
  const [now, setNow] = useState(() => Date.now());
  const [phase, setPhase] = useState<Phase>('intro');
  const [series, setSeries] = useState<SeriesQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [mistakes, setMistakes] = useState(0);
  const [startedAt, setStartedAt] = useState<Date>(() => new Date());
  const [deadline, setDeadline] = useState(0);
  const [gained, setGained] = useState(0);
  const [playedLevel, setPlayedLevel] = useState(1);

  // Horloge : chaque seconde pendant une série (compte à rebours), toutes les 30 s sinon
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), phase === 'question' ? 250 : 30 * 1000);
    return () => clearInterval(t);
  }, [phase]);

  // Temps écoulé avant la fin : série perdue
  useEffect(() => {
    if (phase !== 'question' || !deadline || now < deadline) return;
    onLose('Série perdue : temps écoulé');
    setPhase('lost');
    try { soundFX.playWrong(); } catch { /* son */ }
  }, [phase, now, deadline, onLose]);

  const energy = energyNow(gamification, new Date(now));
  const nextXp = nextSeriesBaseXp(gamification, new Date(now));
  const canPlay = unlimited || energy.energy >= ENERGY_COST;
  // Temps avant d'avoir de nouveau 5 ⚡ (une série)
  const waitMs = !canPlay && energy.nextUnitAt
    ? energy.nextUnitAt + (ENERGY_COST - energy.energy - 1) * ENERGY_UNIT_MS - now
    : 0;

  // Chapitres interrogés (verrou : au moins une mini-leçon faite dans la matière)
  const scope = useMemo(() => {
    if (!gradeLevel) return new Map();
    return studiedChapters(
      getStudentProgressMap(userId),
      normalizeGradeForLookup(gradeLevel),
      (subjectId) => getCurriculumChapters(subjectId, gradeLevel),
      (chapter) => getChapterSubCategory(chapter),
    );
  }, [userId, gradeLevel, phase]);
  const level = nextXp.level;
  const levelIndex = level.level - 1;
  const subjectsUnlocked = scope.size;

  const start = () => {
    if (!gradeLevel || !subjectsUnlocked) return;
    const wrongIds = new Set(Object.values(getReviewMap(userId)).filter((e) => e.lastResult === 'ko').map((e) => e.exerciseId));
    const built = buildExerciseSeries(scope, gradeLevel, getCurriculumChapters, { count: level.questions, levelIndex, wrongIds })
      .map((q) => ({ ...q, exercise: shuffleExerciseOptions(q.exercise) }));
    if (!built.length) return;
    if (!onSpend()) return;
    // Série plus courte que prévu (programme encore court) : temps réduit d'autant
    const seconds = Math.ceil((level.seconds * built.length) / level.questions);
    const begin = Date.now();
    setSeries(built);
    setIndex(0);
    setSelected(null);
    setChecked(false);
    setMistakes(0);
    setStartedAt(new Date(begin));
    setDeadline(begin + seconds * 1000);
    setNow(begin);
    setPlayedLevel(level.level);
    setPhase('question');
    try { soundFX.playCheckmarkPop(); } catch { /* son facultatif */ }
  };
  const timeLeft = deadline - now;
  const hurry = phase === 'question' && timeLeft <= 30 * 1000;

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
    if (Date.now() >= deadline) return; // le chrono a déjà sonné : la série est perdue
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
    if (phase === 'question') {
      if (!window.confirm('Quitter la série ? Elle sera perdue : pas d’XP, l’énergie n’est pas rendue et tu repars au niveau 1.')) return;
      onLose('Série abandonnée');
    }
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
          {phase === 'question' ? (
            <span className={`flex items-center gap-1 px-2 py-1 rounded-lg text-sm font-black tabular-nums ${hurry ? 'bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300 animate-pulse' : 'text-slate-700 dark:text-slate-200'}`}>
              <Timer className="w-4 h-4" />{fmtClock(timeLeft)}
            </span>
          ) : !unlimited && (
            <span className="flex items-center gap-1 text-sm font-black text-amber-600 dark:text-amber-300 tabular-nums">
              <Zap className="w-4 h-4 fill-current" />{energy.energy}
            </span>
          )}
        </div>

        {/* Accueil de la série */}
        {phase === 'intro' && (
          <div className="flex-1 flex flex-col items-center text-center gap-4 pt-2">
            <KonanMascot pose={subjectsUnlocked ? 'wave' : 'encourage'} size={130} />
            {!gradeLevel || !subjectsUnlocked ? (
              <>
                <h2 className="text-xl font-black text-slate-900 dark:text-white">Fais d’abord une mini-leçon avec moi</h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm">
                  Pour savoir sur quoi t’interroger, j’ai besoin de savoir où tu en es. Termine au moins une mini-leçon dans une matière : ensuite, je te pose des questions sur ton chapitre en cours et ceux d’avant.
                </p>
                <button type="button" onClick={onClose} className="w-full max-w-sm py-4 rounded-2xl bg-sky-500 text-white font-black uppercase tracking-wide shadow-[0_4px_0_#0284C7] active:translate-y-1 active:shadow-none cursor-pointer">
                  D’accord
                </button>
              </>
            ) : (
              <>
                <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-orange-100 text-orange-800 dark:bg-orange-500/15 dark:text-orange-300">
                  Niveau {level.level} sur 4
                </span>
                <h2 className="text-xl font-black text-slate-900 dark:text-white">{level.questions} questions en {fmtDuration(level.seconds)}</h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm">
                  Sur tes chapitres en cours et ceux d’avant, jusqu’à 5 matières. Si le temps est écoulé, c’est perdu : pas d’XP. Chaque faute coûte 1 XP.
                </p>
                <div className="w-full max-w-sm rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4 space-y-3 text-left">
                  <EnergyBar energy={energy.energy} unlimited={unlimited} />
                  <p className="flex items-center gap-2 text-sm font-bold text-slate-800 dark:text-slate-200">
                    <Star className="w-5 h-5 shrink-0 text-amber-500 fill-amber-400" />
                    <span className="flex-1">Cette série rapporte jusqu’à <span className="text-amber-600 dark:text-amber-300 font-black whitespace-nowrap">{nextXp.base} XP</span></span>
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Réussis et enchaîne (moins de 30 min entre deux) pour monter de niveau : 15 XP (10 questions, 5 min), 30 XP (15, 7 min), 60 XP (20, 8 min 30), 120 XP (30, 10 min). Plus tu montes, plus c’est dur.
                    {!unlimited && ` Une série coûte ${ENERGY_COST} ⚡.`}
                  </p>
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
              {playedLevel < 4
                ? `Enchaîne dans les 30 minutes : niveau ${playedLevel + 1}, encore plus dur, pour le double d’XP !`
                : 'Tu es au niveau maximum : chaque série enchaînée rapporte jusqu’à 120 XP.'}
            </p>
            <div className="w-full max-w-sm space-y-2.5">
              <button type="button" onClick={() => setPhase('intro')} className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-white font-black uppercase tracking-wide shadow-[0_4px_0_#C2410C] active:translate-y-1 active:shadow-none cursor-pointer">
                Série suivante
              </button>
              <button type="button" onClick={onClose} className="w-full py-3.5 rounded-2xl border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-black uppercase tracking-wide cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800">
                Terminer
              </button>
            </div>
          </div>
        )}

        {/* Temps écoulé : série perdue */}
        {phase === 'lost' && (
          <div className="flex-1 flex flex-col items-center text-center gap-4 pt-2">
            <KonanMascot pose="sad_watch" size={140} />
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">Temps écoulé, c’est perdu !</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm">
              Tu as répondu à {index + (checked ? 1 : 0)} question{index + (checked ? 1 : 0) > 1 ? 's' : ''} sur {series.length}. Pas d’XP cette fois, et tu repars au niveau 1.
              Si tu recommences, c’est une nouvelle série depuis le début{unlimited ? '' : `, pour ${ENERGY_COST} ⚡`}.
            </p>
            <div className="w-full max-w-sm space-y-2.5">
              <button type="button" onClick={() => setPhase('intro')} className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-white font-black uppercase tracking-wide shadow-[0_4px_0_#C2410C] active:translate-y-1 active:shadow-none cursor-pointer">
                Recommencer à zéro
              </button>
              <button type="button" onClick={onClose} className="w-full py-3.5 rounded-2xl border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-black uppercase tracking-wide cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800">
                Fermer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExerciseSeriesView;
