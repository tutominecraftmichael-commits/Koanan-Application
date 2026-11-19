/**
 * ICÔNE D'EXERCICES : séries de QCM chronométrées sur les chapitres que l'élève travaille (jusqu'à 5 matières).
 * - Verrou : il faut avoir terminé au moins une mini-leçon dans une matière pour qu'elle soit interrogée.
 * - Gratuit : chaque série coûte 5 ⚡ (25 ⚡ au maximum, recharge progressive, plein en 23 h) ;
 *   Pro et Plus : énergie illimitée.
 * - Niveaux enchaînés : 15 XP (10 questions, 5 min) → 30 XP (15, 7 min) → 60 XP (20, 8 min 30) → 120 XP (30, 10 min).
 *   La pénalité par faute double aussi : 1, 2, 4 puis 8 XP.
 * - Temps écoulé ou abandon : série perdue, rien de gagné, retour au niveau 1 ; recommencer coûte 5 ⚡.
 *
 * Fluidité : le compte à rebours est un petit composant à part (il ne redessine jamais la question),
 * et la question n'est redessinée que quand l'élève touche une réponse.
 */
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AlertCircle, ArrowLeft, CheckCircle2, Infinity as InfinityIcon, Star, Timer, X, Zap } from 'lucide-react';
import type { GamificationState } from '../../types';
import type { CurriculumGradeLevel } from '../../lib/curriculum/types';
import { MathRenderer, VisualSchemaRenderer } from '../../components/common/MathRenderer';
import { KonanMascot } from '../../components/common/KonanMascot';
import { soundFX } from '../../lib/audioEffects';
import { getCurriculumChapters, isCurriculumLoadedFor, loadCurriculumFor, normalizeGradeForLookup } from '../../lib/curriculum/curriculumRegistry';
import { getChapterSubCategory, getStudentProgressMap } from '../../lib/curriculum/studentProgressService';
import { getReviewMap } from '../../lib/curriculum/reviewMemory';
import { shuffleExerciseOptions } from '../../lib/curriculum/optionShuffle';
import { buildExerciseSeries, studiedChapters, unlockedSubjects, type SeriesQuestion } from '../../lib/gamification/exerciseSeriesPool';
import {
  ENERGY_COST, ENERGY_MAX, ENERGY_UNIT_MS, SERIES_LEVELS, energyNow, hasUnlimitedEnergy, mistakePenalty, nextSeriesBaseXp,
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
  /** Retour vers la liste des Mini-Jeux (si ouvert depuis le hub) */
  onBackToHub?: () => void;
  onUpgrade: () => void;
}

type Phase = 'intro' | 'question' | 'end' | 'lost';

const fmtWait = (ms: number) => {
  const min = Math.max(1, Math.ceil(ms / 60000));
  const h = Math.floor(min / 60);
  const m = min % 60;
  return h ? `${h} h ${String(m).padStart(2, '0')}` : `${m} min`;
};
const fmtClock = (ms: number) => {
  const s = Math.max(0, Math.ceil(ms / 1000));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
};
const fmtDuration = (sec: number) => (sec % 60 ? `${Math.floor(sec / 60)} min ${sec % 60}` : `${sec / 60} min`);

/** Appréciation honnête selon le pourcentage de bonnes réponses. */
function verdict(pct: number): { label: string; tone: string } {
  if (pct >= 90) return { label: 'Excellent', tone: 'text-emerald-700 dark:text-emerald-300' };
  if (pct >= 70) return { label: 'Bien', tone: 'text-emerald-700 dark:text-emerald-300' };
  if (pct >= 50) return { label: 'Moyen : revois les questions ratées', tone: 'text-amber-700 dark:text-amber-300' };
  return { label: 'Insuffisant : reprends ces chapitres avant de recommencer', tone: 'text-rose-700 dark:text-rose-300' };
}

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

/** Compte à rebours autonome : seul lui se redessine chaque seconde. */
const Countdown: React.FC<{ deadline: number }> = memo(({ deadline }) => {
  const [left, setLeft] = useState(() => deadline - Date.now());
  useEffect(() => {
    setLeft(deadline - Date.now());
    const t = setInterval(() => setLeft(deadline - Date.now()), 1000);
    return () => clearInterval(t);
  }, [deadline]);
  const hurry = left <= 30 * 1000;
  return (
    <span className={`flex items-center gap-1 px-2 py-1 rounded-lg text-sm font-black tabular-nums ${hurry ? 'bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300' : 'text-slate-700 dark:text-slate-200'}`}>
      <Timer className="w-4 h-4" />{fmtClock(left)}
    </span>
  );
});

/** Question et réponses : redessinées seulement quand l'élève choisit ou vérifie. */
const QuestionCard: React.FC<{ q: SeriesQuestion; selected: number | null; checked: boolean; onSelect: (i: number) => void }> = memo(({ q, selected, checked, onSelect }) => (
  <>
    <div className="space-y-0.5">
      <p className="text-[11px] font-black uppercase tracking-wider text-sky-600 dark:text-sky-400">{q.subjectName} · {q.chapterTitle}</p>
      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Notion : {q.pointTitle}</p>
    </div>
    <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
      <MathRenderer text={q.exercise.prompt} />
    </div>
    {q.exercise.visualSchema && <VisualSchemaRenderer schema={q.exercise.visualSchema} />}
    <div className="grid gap-2.5">
      {(q.exercise.options || []).map((opt, oIdx) => {
        const isSel = selected === oIdx;
        let style = 'bg-white dark:bg-slate-900/90 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 active:border-amber-400';
        if (isSel && !checked) style = 'bg-amber-50 dark:bg-amber-950/50 border-amber-500 text-amber-900 dark:text-amber-100';
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
            onClick={() => onSelect(oIdx)}
            className={`w-full p-3.5 rounded-xl border-2 text-left text-sm font-semibold flex items-start justify-between gap-3 cursor-pointer disabled:cursor-default touch-manipulation ${style}`}
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
  </>
));

export const ExerciseSeriesView: React.FC<ExerciseSeriesViewProps> = ({ userId, gradeLevel, gamification, planTier, onSpend, onFinish, onLose, onClose, onBackToHub, onUpgrade }) => {
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
  const [played, setPlayed] = useState({ level: 1, penalty: 1 });
  const phaseRef = useRef<Phase>('intro');
  phaseRef.current = phase;

  // Horloge lente de l'écran d'accueil (énergie qui se recharge) ; rien pendant une série
  useEffect(() => {
    if (phase === 'question') return;
    const t = setInterval(() => setNow(Date.now()), 30 * 1000);
    return () => clearInterval(t);
  }, [phase]);

  // Temps écoulé avant la fin : série perdue (un seul minuteur, pas de rendu à chaque seconde)
  useEffect(() => {
    if (phase !== 'question' || !deadline) return;
    const t = setTimeout(() => {
      if (phaseRef.current !== 'question') return;
      onLose('Série perdue : temps écoulé');
      setPhase('lost');
      try { soundFX.playWrong(); } catch { /* son */ }
    }, Math.max(0, deadline - Date.now()));
    return () => clearTimeout(t);
  }, [phase, deadline, onLose]);

  const energy = energyNow(gamification, new Date(now));
  const nextXp = nextSeriesBaseXp(gamification, new Date(now));
  const level = nextXp.level;
  const penalty = mistakePenalty(nextXp.chainIndex);
  const canPlay = unlimited || energy.energy >= ENERGY_COST;
  // Temps avant d'avoir de nouveau 5 ⚡ (une série)
  const waitMs = !canPlay && energy.nextUnitAt ? energy.nextUnitAt + (ENERGY_COST - energy.energy - 1) * ENERGY_UNIT_MS - now : 0;

  // Cours chargés : seulement les matières déverrouillées, au niveau de l'élève (une seule fois)
  const wantedSubjects = useMemo(
    () => (gradeLevel ? unlockedSubjects(getStudentProgressMap(userId), normalizeGradeForLookup(gradeLevel)) : []),
    [userId, gradeLevel],
  );
  const [coursesReady, setCoursesReady] = useState(() => !wantedSubjects.length || isCurriculumLoadedFor(gradeLevel, wantedSubjects));
  const [coursesError, setCoursesError] = useState(false);
  const loadCourses = useCallback(() => {
    setCoursesError(false);
    return loadCurriculumFor(gradeLevel, wantedSubjects).then(() => setCoursesReady(true)).catch(() => setCoursesError(true));
  }, [gradeLevel, wantedSubjects]);
  useEffect(() => {
    if (!coursesReady) loadCourses();
  }, [coursesReady, loadCourses]);

  // Chapitres interrogés (verrou : au moins une mini-leçon faite dans la matière), calculés une fois
  const scope = useMemo(() => {
    if (!gradeLevel || !coursesReady) return new Map();
    try {
      return studiedChapters(
        getStudentProgressMap(userId),
        normalizeGradeForLookup(gradeLevel),
        (subjectId) => getCurriculumChapters(subjectId, gradeLevel),
        (chapter) => getChapterSubCategory(chapter),
      );
    } catch {
      return new Map();
    }
  }, [userId, gradeLevel, coursesReady]);
  const subjectsUnlocked = scope.size;

  const start = () => {
    if (!gradeLevel || !subjectsUnlocked) return;
    let built: SeriesQuestion[] = [];
    try {
      const wrongIds = new Set(Object.values(getReviewMap(userId)).filter((e) => e.lastResult === 'ko').map((e) => e.exerciseId));
      built = buildExerciseSeries(scope, gradeLevel, getCurriculumChapters, { count: level.questions, levelIndex: level.level - 1, wrongIds })
        .map((q) => ({ ...q, exercise: shuffleExerciseOptions(q.exercise) }));
    } catch {
      built = [];
    }
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
    setPlayed({ level: level.level, penalty });
    setPhase('question');
  };

  const q = series[index];
  const isCorrect = checked && q && selected === q.exercise.correctAnswerIndex;

  const onSelect = useCallback((i: number) => setSelected(i), []);

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
      if (!window.confirm('Quitter la partie de XP à gogo ? Elle sera perdue : pas d’XP, les charges ne sont pas rendues et tu repars au niveau 1.')) return;
      onLose('Série abandonnée');
    }
    if (phase === 'intro' && onBackToHub) {
      onBackToHub();
      return;
    }
    onClose();
  };

  const pct = series.length ? Math.round(((series.length - mistakes) / series.length) * 100) : 0;
  const v = verdict(pct);
  const answered = index + (checked ? 1 : 0);

  return (
    <div className="fixed inset-0 z-[80] bg-slate-50 dark:bg-[#070B13] overflow-y-auto overscroll-contain">
      <div className="max-w-xl mx-auto px-4 py-4 sm:py-6 space-y-4 min-h-full flex flex-col">
        {/* En-tête */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={quit}
            aria-label={phase === 'intro' && onBackToHub ? 'Retour aux mini-jeux' : 'Fermer'}
            className="p-2 -ml-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-200 dark:hover:text-white dark:hover:bg-slate-800 cursor-pointer"
          >
            {phase === 'intro' && onBackToHub ? <ArrowLeft className="w-6 h-6" /> : <X className="w-6 h-6" />}
          </button>
          {phase === 'question' ? (
            <>
              <div className="flex-1 h-4 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500" style={{ width: `${(answered / series.length) * 100}%` }} />
              </div>
              <Countdown deadline={deadline} />
            </>
          ) : (
            <>
              <p className="flex-1 text-base font-black text-slate-900 dark:text-white">XP à gogo</p>
              {!unlimited && (
                <span className="flex items-center gap-1 text-sm font-black text-amber-600 dark:text-amber-300 tabular-nums">
                  <Zap className="w-4 h-4 fill-current" />{energy.energy}
                </span>
              )}
            </>
          )}
        </div>

        {/* Chargement des cours du niveau (première ouverture seulement) */}
        {phase === 'intro' && gradeLevel && !coursesReady && (
          <div className="flex-1 flex flex-col items-center justify-center text-center gap-3 py-16">
            {coursesError ? (
              <>
                <p className="text-base font-black text-slate-900 dark:text-white">Connexion trop faible pour charger tes cours</p>
                <button type="button" onClick={() => { loadCourses(); }} className="px-5 py-3 rounded-2xl bg-sky-500 text-white font-black uppercase tracking-wide cursor-pointer">
                  Réessayer
                </button>
              </>
            ) : (
              <>
                <div className="w-10 h-10 rounded-full border-4 border-amber-200 border-t-amber-500 animate-spin" aria-hidden="true" />
                <p className="text-sm font-bold text-slate-600 dark:text-slate-300">Je prépare tes questions…</p>
              </>
            )}
          </div>
        )}

        {/* Accueil de la série */}
        {phase === 'intro' && (!gradeLevel || coursesReady) && (
          <div className="flex-1 flex flex-col items-center text-center gap-4 pt-2">
            <KonanMascot pose={subjectsUnlocked ? 'wave' : 'encourage'} size={120} />
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
                  Niveau {level.level} sur {SERIES_LEVELS.length}
                </span>
                <h2 className="text-xl font-black text-slate-900 dark:text-white">{level.questions} questions en {fmtDuration(level.seconds)}</h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm">
                  Sur tes chapitres en cours et ceux d’avant, jusqu’à 5 matières. Si le temps est écoulé, c’est perdu : pas d’XP.
                </p>
                <div className="w-full max-w-sm rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4 space-y-3 text-left">
                  <EnergyBar energy={energy.energy} unlimited={unlimited} />
                  <p className="flex items-center gap-2 text-sm font-bold text-slate-800 dark:text-slate-200">
                    <Star className="w-5 h-5 shrink-0 text-amber-500 fill-amber-400" />
                    <span className="flex-1">Jusqu’à <span className="text-amber-600 dark:text-amber-300 font-black">{nextXp.base} XP</span> · chaque faute : <span className="text-rose-700 dark:text-rose-300 font-black whitespace-nowrap">−{penalty} XP</span></span>
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Réussis et enchaîne (moins de 30 min entre deux) pour monter de niveau : plus de questions, plus dures, plus d’XP… et des fautes qui coûtent plus cher.
                    {!unlimited && ` Une série coûte ${ENERGY_COST} ⚡.`}
                  </p>
                </div>
                {canPlay ? (
                  <button type="button" onClick={start} className="w-full max-w-sm py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-white font-black uppercase tracking-wide shadow-[0_4px_0_#C2410C] active:translate-y-1 active:shadow-none cursor-pointer flex items-center justify-center gap-2 touch-manipulation">
                    Commencer {!unlimited && <span className="flex items-center gap-0.5 text-sm">(−{ENERGY_COST} <Zap className="w-4 h-4 fill-current" />)</span>}
                  </button>
                ) : (
                  <div className="w-full max-w-sm space-y-3">
                    <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      Plus assez d’énergie. Prochaine série dans <span className="text-amber-600 dark:text-amber-300 font-black">{fmtWait(waitMs)}</span>
                      {energy.fullAt ? <> · plein dans {fmtWait(energy.fullAt - now)}</> : null}.
                    </p>
                    <button type="button" onClick={onUpgrade} className="w-full py-4 rounded-2xl bg-gradient-to-r from-sky-400 to-violet-500 text-white font-black uppercase tracking-wide shadow-[0_4px_0_#0369A1] active:translate-y-1 active:shadow-none cursor-pointer">
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
            <QuestionCard q={q} selected={selected} checked={checked} onSelect={onSelect} />
            {checked && (
              <div className={`p-4 rounded-2xl border-2 text-sm space-y-1 ${isCorrect ? 'bg-emerald-50 border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/30' : 'bg-rose-50 border-rose-200 dark:bg-rose-500/10 dark:border-rose-500/30'}`}>
                <p className={`font-black ${isCorrect ? 'text-emerald-800 dark:text-emerald-200' : 'text-rose-800 dark:text-rose-200'}`}>
                  {isCorrect ? 'Juste !' : `Faux (−${played.penalty} XP).`}
                </p>
                {q.exercise.explanation && <div className="text-slate-700 dark:text-slate-200"><MathRenderer text={q.exercise.explanation} /></div>}
              </div>
            )}
            <div className="mt-auto sticky bottom-0 pt-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-slate-50 dark:bg-[#070B13]">
              {!checked ? (
                <button type="button" disabled={selected === null} onClick={verify} className="w-full py-4 rounded-2xl bg-amber-500 text-white font-black uppercase tracking-wide shadow-[0_4px_0_#B45309] active:translate-y-1 active:shadow-none disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer touch-manipulation">
                  Vérifier
                </button>
              ) : (
                <button type="button" onClick={next} className={`w-full py-4 rounded-2xl text-white font-black uppercase tracking-wide active:translate-y-1 active:shadow-none cursor-pointer touch-manipulation ${isCorrect ? 'bg-emerald-500 shadow-[0_4px_0_#047857]' : 'bg-rose-500 shadow-[0_4px_0_#BE123C]'}`}>
                  {index + 1 < series.length ? 'Continuer' : 'Voir mon résultat'}
                </button>
              )}
            </div>
          </div>
        )}

        {/* Résultat */}
        {phase === 'end' && (
          <div className="flex-1 flex flex-col items-center text-center gap-4 pt-6">
            <p className="text-sm font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Niveau {played.level} · {series.length - mistakes} bonnes réponses sur {series.length}</p>
            <p className="text-6xl font-black text-slate-900 dark:text-white tabular-nums">{pct} %</p>
            <p className={`text-base font-black ${v.tone}`}>{v.label}</p>
            <div className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-amber-50 dark:bg-amber-500/10 border-2 border-amber-300 dark:border-amber-400/40">
              <Star className="w-7 h-7 text-amber-500 fill-amber-400" />
              <span className="text-3xl font-black text-amber-600 dark:text-amber-300 tabular-nums">+{gained} XP</span>
            </div>
            {mistakes > 0 && (
              <p className="text-xs text-slate-500 dark:text-slate-400">{mistakes} faute{mistakes > 1 ? 's' : ''} × {played.penalty} XP retiré{mistakes * played.penalty > 1 ? 's' : ''}</p>
            )}
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm">
              {played.level < SERIES_LEVELS.length
                ? `Enchaîne dans les 30 minutes : niveau ${played.level + 1}, plus dur, pour le double d’XP. Attention, les fautes coûteront aussi le double.`
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
          <div className="flex-1 flex flex-col items-center text-center gap-4 pt-6">
            <p className="text-sm font-black uppercase tracking-wider text-rose-700 dark:text-rose-300">Temps écoulé</p>
            <p className="text-3xl font-black text-slate-900 dark:text-white">Série perdue</p>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm">
              {answered} question{answered > 1 ? 's' : ''} sur {series.length} en {fmtDuration(Math.round((deadline - startedAt.getTime()) / 1000))}. Pas d’XP, et tu repars au niveau 1.
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
