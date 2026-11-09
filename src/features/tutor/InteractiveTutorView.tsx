// ============================================================================
// KONAN Interactive Tutor - Programme Officiel CI (Maths, Physique-Chimie, SVT)
// ============================================================================
import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Award,
  Check,
  Target,
  Brain,
  BookOpen,
  HelpCircle,
  RotateCcw,
  RefreshCw,
  Zap,
  FlaskConical,
  Calculator,
  Shapes,
  Landmark,
  Globe
} from 'lucide-react';
import type {
  CurriculumChapter,
  CurriculumGradeLevel,
  CurriculumPoint,
  InteractiveExercise,
  PointFormula,
  PointVisualSchema,
  StemSubjectId,
  StemSubCategory,
  StepKind,
  TutorPointSessionItem,
  TutorSessionPayload
} from '../../lib/curriculum/types';
import { STEM_SUBJECTS } from '../../lib/curriculum/types';
import {
  buildTutorSessionPayload,
  initializeSubCategoryPosition,
  recordCompletedTutorSession,
  markSessionAlternation,
  getSubCategoryName,
  getSubCategoryQuestion,
  getChapterSubCategory,
  getActiveSubCategoryForSession,
  defaultSubCategoryFor,
  saveResumeBookmark,
  readResumeBookmark
} from '../../lib/curriculum/studentProgressService';
import type { ResumeBookmark } from '../../lib/curriculum/types';
import { KonanMascot } from '../../components/common/KonanMascot';
import { getCurriculumChapters } from '../../lib/curriculum/curriculumRegistry';
import { shuffleExerciseOptions } from '../../lib/curriculum/optionShuffle';
import { soundFX } from '../../lib/audioEffects';
import { KonanCube } from '../../components/common/KonanCube';
import { findReviewExercise, forgetReview, getDueReviews, recordReviewAnswer } from '../../lib/curriculum/reviewMemory';
import { useKonanCoach, KonanCoachBubble } from './konanCoach';
import { FeynmanChallenge } from './FeynmanChallenge';
import { pullLearning, startLearningSync } from '../../lib/curriculum/learningCloudSync';
import { MathRenderer, VisualSchemaRenderer, SmartKeyFormulaBox } from '../../components/common/MathRenderer';

export interface InteractiveTutorViewProps {
  userId: string;
  subjectTitle: string;
  gradeLevel: CurriculumGradeLevel;
  stemSubjectId: StemSubjectId;
  studySessionId?: string;
  durationMinutes?: number;
  /** Méthode de la séance (planning) : change le déroulé du cours (ex. Rappel actif). */
  pacingMethod?: string;
  onExit: () => void;
  onSessionCompleted: (sessionId?: string) => void;
}

/** Questions « à revoir aujourd'hui » (révision espacée), posées au début de la séance. */
interface WarmupItem {
  exercise: InteractiveExercise;
  stepIndex: number;
  point: CurriculumPoint;
  chapterId: string;
}

type LessonPhase =
  | 'feynman' // Feynman : « Explique-le simplement » (oral ou écrit) après la mini-leçon
  | 'time_up' // Pomodoro : temps de travail écoulé → pause, puis matière suivante
  | 'warmup' // Révision du jour : questions dues (révision espacée), de mémoire, avant la leçon
  | 'recall' // Rappel actif : 3 questions de la mini-leçon, de mémoire, fiche cachée
  | 'intro' // Écran d'introduction animé de la mini-leçon (Présentation, Enjeu Bac/BEPC, Objectifs)
  | 'learning' // Défilement continu : Cours progressif + Test de compréhension immédiat
  | 'catchup' // Boucle de rattrapage (Rappel du cours ciblé + Question manquée) pour atteindre 100%
  | 'point_celebration' // Validation d'une mini-leçon
  | 'session_celebration'; // Victoire globale de la séance d'EDT

interface ProgressiveCourseSlice {
  stepBadge: string;
  stepIndex: number;
  totalSteps: number;
  stepTitle: string;
  paragraphText?: string;
  exerciseStatement?: string;
  formula?: PointFormula;
  konanTip?: string;
  keyRule?: string;
  visualSchema?: PointVisualSchema;
  stepKind?: StepKind;
}

/** Code couleur pédagogique des cartes de cours (validé sur la maquette). */
const STEP_KIND_STYLE: Record<StepKind, { label: string; card: string; chip: string }> = {
  definition: {
    label: 'Définition',
    card: 'bg-blue-50/70 dark:bg-blue-950/30 border-blue-300 dark:border-blue-700/70',
    chip: 'bg-blue-600 text-white dark:bg-blue-500',
  },
  propriete: {
    label: 'Propriété / formule',
    card: 'bg-violet-50/70 dark:bg-violet-950/30 border-violet-300 dark:border-violet-700/70',
    chip: 'bg-violet-600 text-white dark:bg-violet-500',
  },
  methode: {
    label: 'Méthode',
    card: 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-700/70',
    chip: 'bg-emerald-600 text-white dark:bg-emerald-500',
  },
  piege: {
    label: "Piège d'examen",
    card: 'bg-orange-50/70 dark:bg-orange-950/30 border-orange-300 dark:border-orange-700/70',
    chip: 'bg-orange-600 text-white dark:bg-orange-500',
  },
  exemple: {
    label: 'Exemple',
    card: 'bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-700',
    chip: 'bg-slate-600 text-white dark:bg-slate-500',
  },
};

/**
 * Composant de paragraphe pédagogique :
 * - Notions clés et termes scientifiques en GRAS BLEU (ex: Système pseudo-isolé, Mitose, Chloroplaste)
 * - Lois fondamentales, théorèmes et principes en CARTE DOUCE VIOLETTE
 * - Puces structurées, aérées, zéro mur de texte
 */
const PedagogicalParagraph: React.FC<{ text: string }> = ({ text }) => {
  if (!text) return null;

  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);

  return (
    <div className="space-y-3 text-xs sm:text-sm leading-relaxed">
      {lines.map((line, lIdx) => {
        // Détection de titre numéroté (ex: "1. Vitesse moyenne :")
        const isNumberedTitle = /^[1-4]\.\s+/.test(line);
        if (isNumberedTitle) {
          const num = line.match(/^[1-4]/)?.[0] || '1';
          const titleContent = line.replace(/^[1-4]\.\s+/, '');
          return (
            <div
              key={lIdx}
              className="text-sm sm:text-base font-black text-slate-900 dark:text-white pt-1 flex items-center gap-2"
            >
              <span className="w-6 h-6 rounded-lg bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 flex items-center justify-center text-xs font-black shrink-0">
                {num}
              </span>
              <span><MathRenderer text={titleContent} /></span>
            </div>
          );
        }

        // Détection d'une loi fondamentale, d'un théorème ou du principe d'inertie (CODE COULEUR VIOLET OBLIGATOIRE)
        const isFundamentalLaw = /(?:1ère|2ème|3ème)\s+loi|principe d'inertie|théorème|loi fondamentale|loi de newton|condition d'équilibre/i.test(line);
        if (isFundamentalLaw) {
          return (
            <div
              key={lIdx}
              className="p-3.5 my-2 rounded-2xl bg-purple-50/90 dark:bg-purple-950/40 border-2 border-purple-200 dark:border-purple-800/60 text-purple-950 dark:text-purple-100 font-medium shadow-2xs space-y-1.5"
            >
              <div className="flex items-center gap-1.5 text-purple-700 dark:text-purple-300 text-[11px] font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>Loi Fondamentale & Propriété Clé</span>
              </div>
              <div className="leading-relaxed">
                <MathRenderer text={line.startsWith('-') ? line.slice(1).trim() : line} />
              </div>
            </div>
          );
        }

        // Détection de définition ou notion clé (CODE COULEUR BLEU OBLIGATOIRE)
        if (line.startsWith('-') || line.startsWith('•')) {
          const cleanLine = line.replace(/^[-•]\s*/, '');
          const colonIdx = cleanLine.indexOf(':');

          if (colonIdx > 0 && colonIdx < 55) {
            const term = cleanLine.slice(0, colonIdx).trim();
            const definition = cleanLine.slice(colonIdx + 1).trim();

            return (
              <div key={lIdx} className="flex items-start gap-2 text-slate-700 dark:text-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2" />
                <div className="leading-relaxed font-medium">
                  <span className="text-blue-600 dark:text-blue-400 font-extrabold mr-1.5">
                    <MathRenderer text={term} /> :
                  </span>
                  <MathRenderer text={definition} />
                </div>
              </div>
            );
          }

          return (
            <div key={lIdx} className="flex items-start gap-2 text-slate-700 dark:text-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-2" />
              <div className="leading-relaxed font-medium">
                <MathRenderer text={cleanLine} />
              </div>
            </div>
          );
        }

        // Paragraphe classique
        return (
          <p key={lIdx} className="text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
            <MathRenderer text={line} />
          </p>
        );
      })}
    </div>
  );
};

/**
 * Découpe la leçon en 8 écrans progressifs (Style Duolingo) avec liaison 1-POUR-1 ABSOLUE :
 * - Chaque étape i dispose de SA PROPRE fiche de cours dédiée, de sa formule/règle et de son QCM.
 * - Le bloc de cours du haut change OBLIGATOIREMENT à chaque étape (zéro paragraphe figé).
 */
/**
 * Titre coupé par « … » ou « ... » : on le complète avec la phrase entière de la question quand elle
 * commence pareil, sinon on retire simplement les points de suspension. Jamais de phrase coupée à l'écran.
 */
function completeTruncatedTitle(title?: string, fullText?: string): string | undefined {
  if (!title) return title;
  const t = title.trim();
  if (!/(\.\.\.|…)$/.test(t)) return t;
  const base = t.replace(/\s*(\.\.\.|…)$/, '').trim();
  const full = (fullText || '').replace(/\s+/g, ' ').trim();
  if (full && full.toLowerCase().startsWith(base.toLowerCase().slice(0, Math.max(10, base.length - 3)))) return full;
  return base;
}

function buildProgressiveCourseSlice(
  point: CurriculumPoint,
  stepIndex: number,
  exercise?: InteractiveExercise
): ProgressiveCourseSlice {
  // Nombre d'étapes de la mini-leçon (5 à 8 dans le nouveau format, 8 dans l'ancien)
  const totalSteps = point.structuredSteps?.length || point.exercises?.length || 8;

  // 1. Priorité absolue : Fiche de cours structurée dédiée à cette étape (Liaison 1-pour-1)
  if (point.structuredSteps && point.structuredSteps[stepIndex]) {
    const step = point.structuredSteps[stepIndex];
    // Certains titres d'étape ont été enregistrés coupés (« Un automobiliste roule sur… ») : on remet la phrase entière
    const stepTitle = completeTruncatedTitle(step.stepTitle, step.exercise?.prompt) || point.title.replace(/mini-leçon\s*\d+\/\d+\s*:\s*/i, '');
    return {
      stepBadge: `Étape ${stepIndex + 1}/${totalSteps} · ${stepTitle}`,
      stepKind: step.stepKind,
      stepIndex,
      totalSteps,
      stepTitle: stepTitle || point.title,
      paragraphText: step.paragraphText,
      formula: step.formula,
      keyRule: step.keyRule,
      konanTip: step.konanTip,
      // Figure dédiée à la question de cette étape en priorité, sinon celle de l'étape
      visualSchema: exercise?.courseVisualSchema ?? step.visualSchema,
    };
  }

  // 2. Fallback intelligent ancré 1-pour-1 sur l'exercice actif (zéro répétition, zéro cours figé)
  if (exercise) {
    const cleanPrompt = exercise.prompt.replace(/\?$/, '').trim();
    const explanation = (exercise.explanation || '').trim();
    const cleanExplanation = explanation.replace(/^Bonne réponse\s*:\s*[^.]+\.\s*/i, '').trim();

    // Titre complet (jamais coupé par « … ») : l'affichage passe à la ligne si besoin
    const fallbackTitle = cleanPrompt;
    const formulas = point.formulas || [];
    const dedicatedFormula = formulas[stepIndex] || (formulas.length > 0 ? formulas[stepIndex % formulas.length] : undefined);

    const paragraph = cleanExplanation.length > 15
      ? `• Notion clé de l'étape : ${cleanPrompt}\n• Explication officielle : ${cleanExplanation}\n• Règle essentielle : Appliquer avec rigueur la méthode du cours pour répondre avec certitude.`
      : (point.conceptExplanation ? point.conceptExplanation.split(/\n\s*\n/)[stepIndex % Math.max(1, point.conceptExplanation.split(/\n\s*\n/).length)] : point.summary);

    return {
      stepBadge: `Étape ${stepIndex + 1}/${totalSteps} · ${fallbackTitle}`,
      stepIndex,
      totalSteps,
      stepTitle: fallbackTitle,
      paragraphText: paragraph,
      formula: dedicatedFormula,
      konanTip: `L'Astuce du Professeur Konan : ${cleanExplanation.split('.')[0] || point.keyRule || "Bien lire chaque proposition avant de valider !"}`,
      keyRule: point.keyRule,
      visualSchema: exercise.courseVisualSchema ?? (stepIndex === 1 ? point.visualSchema : undefined),
    };
  }

  const cleanPointTitle = point.title.replace(/mini-leçon\s*\d+\/\d+\s*:\s*/i, '');
  return {
    stepBadge: `Étape ${stepIndex + 1}/${totalSteps} · ${cleanPointTitle}`,
    stepIndex,
    totalSteps,
    stepTitle: cleanPointTitle,
    paragraphText: point.conceptExplanation || point.summary,
    formula: point.formulas && point.formulas.length > 0 ? point.formulas[0] : undefined,
    keyRule: point.keyRule,
  };
}

export const InteractiveTutorView: React.FC<InteractiveTutorViewProps> = ({
  userId,
  subjectTitle,
  gradeLevel,
  stemSubjectId,
  studySessionId,
  durationMinutes = 25,
  pacingMethod,
  onExit,
  onSessionCompleted,
}) => {
  // Rappel actif : se tester de mémoire (question avant la fiche, rappel en fin de mini-leçon)
  const isActiveRecall = pacingMethod === 'active_recall_spaced' || pacingMethod === 'active_recall' || pacingMethod === 'spaced_repetition';
  // Pomodoro : la séance dure le temps prévu au planning (25 min de VRAI travail), puis 5 min de pause.
  // Time Blocking : même principe sur un long bloc d'une seule matière (75 min), puis 15 min de pause.
  const isPomodoro = pacingMethod === 'pomodoro';
  const isTimeBlocking = pacingMethod === 'time_blocking' || pacingMethod === 'deep_work';
  const workLimitSec = isPomodoro || isTimeBlocking ? Math.max(1, durationMinutes || (isTimeBlocking ? 75 : 25)) * 60 : null;
  const POMODORO_PAUSE_SEC = (isTimeBlocking ? 15 : 5) * 60;
  // Feynman : après chaque mini-leçon, l'élève explique la notion avec ses mots (à l'oral ou par écrit)
  const isFeynman = pacingMethod === 'feynman';
  // Règle des 2 minutes : on démarre tout de suite, sans écran d'accueil ; après 2 minutes, « Tu continues ? »
  const isTwoMinutes = pacingMethod === 'two_minutes_rule';
  // 1. Sous-catégorie active calculée selon la règle d'alternance officielle ivoirienne
  // (Physique-Chimie -> Chimie ↔ Physique, Maths -> Géométrie ↔ Numérique)
  const [activeSubCategory, setActiveSubCategory] = useState<StemSubCategory>(() => {
    const computed = getActiveSubCategoryForSession(userId, stemSubjectId, gradeLevel);
    return computed || defaultSubCategoryFor(stemSubjectId);
  });

  // Aucun cours authentique publié pour cette classe et cette matière
  const [noContentAvailable, setNoContentAvailable] = useState<boolean>(false);

  // États pour le choix du premier volet (Règle 1) et l'alternance obligatoire (Règle 2)
  const [needsVoletChoice, setNeedsVoletChoice] = useState<boolean>(false);
  const [isSecondSessionAlternance, setIsSecondSessionAlternance] = useState<boolean>(false);
  const [alternanceBannerText, setAlternanceBannerText] = useState<string>('');

  // État du diagnostic de positionnement initial pour cette sous-catégorie
  const [showChapterSelector, setShowChapterSelector] = useState<boolean>(false);
  const [availableSubChapters, setAvailableSubChapters] = useState<CurriculumChapter[]>([]);
  const [subCategoryQuestionText, setSubCategoryQuestionText] = useState<string>('');

  // Sélection active dans la modale
  const [selectedChapter, setSelectedChapter] = useState<CurriculumChapter | null>(null);

  // Payload de la session en cours
  const [sessionPayload, setSessionPayload] = useState<TutorSessionPayload | null>(null);

  // Index de la mini-leçon active parmi le quota de la session (0..itemsToReview.length - 1)
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);

  // Phase au sein de la mini-leçon active
  const [phase, setPhase] = useState<LessonPhase>('intro');

  // Index de l'étape active (0..7 pour les 8 étapes du cours)
  const [exerciseIndex, setExerciseIndex] = useState<number>(0);

  // Options sélectionnées et état de validation
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState<boolean>(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false);
  // Affichage de la justification à la demande (bouton "Pourquoi ?") sur bonne réponse
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  // Indices des étapes manquées au premier passage (pour la boucle de rattrapage)
  const [missedIndices, setMissedIndices] = useState<number[]>([]);

  // Indices des exercices validés avec succès (la barre avance STRICTEMENT lors d'une bonne réponse)
  const [masteredIndices, setMasteredIndices] = useState<number[]>([]);

  // File d'attente pour la boucle de rattrapage
  const [catchupQueue, setCatchupQueue] = useState<number[]>([]);
  const [currentCatchupQueueIndex, setCurrentCatchupQueueIndex] = useState<number>(0);

  // Statistiques globales de la séance
  const [totalFirstTryCorrect, setTotalFirstTryCorrect] = useState<number>(0);
  const [totalExercisesAnswered, setTotalExercisesAnswered] = useState<number>(0);

  // Compteurs déjà enregistrés (la progression est sauvegardée après CHAQUE mini-leçon validée)
  const recordedCountsRef = useRef<{ answered: number; correct: number }>({ answered: 0, correct: 0 });
  // Mini-leçons déjà enregistrées comme validées pendant cette séance (jamais deux fois)
  const recordedPointIdsRef = useRef<Set<string>>(new Set());

  // Révision espacée : questions « à revoir aujourd'hui » posées avant la leçon
  const [warmupItems, setWarmupItems] = useState<WarmupItem[]>([]);
  const [warmupIndex, setWarmupIndex] = useState<number>(0);
  // Rappel actif : étapes de la mini-leçon reposées de mémoire à la fin
  const [recallSteps, setRecallSteps] = useState<number[]>([]);
  const [recallIndex, setRecallIndex] = useState<number>(0);
  // Pomodoro : secondes de vrai travail (le chrono s'arrête si l'élève quitte l'appli ou ne fait plus rien)
  const [workSeconds, setWorkSeconds] = useState<number>(0);
  // Le compte à rebours ne démarre qu'au clic sur « Commencer la leçon » (pas pendant l'accueil ni la révision du jour)
  const [timerStarted, setTimerStarted] = useState<boolean>(false);
  const [pauseLeft, setPauseLeft] = useState<number>(POMODORO_PAUSE_SEC);
  const [timeUpCounted, setTimeUpCounted] = useState<boolean>(true);
  // Marque-page de reprise (séance précédente arrêtée au milieu d'une mini-leçon)
  const resumeRef = useRef<ResumeBookmark | null>(null);
  // Règle des 2 minutes : secondes écoulées depuis le démarrage, et question « Tu continues ? »
  const [kickSeconds, setKickSeconds] = useState<number>(0);
  const [showKickPrompt, setShowKickPrompt] = useState<boolean>(false);
  const kickDoneRef = useRef<boolean>(false);

  /**
   * Prépare la révision du jour : les questions dues dans ce volet (3 pour 25 min, 4 pour 45 min, 5 au-delà),
   * les ratées d'abord. Les questions des mini-leçons de la séance du jour sont laissées de côté :
   * l'élève va les retravailler juste après, inutile de les poser deux fois.
   */
  const loadWarmup = (subCat: StemSubCategory, sessionPointIds: Set<string>): WarmupItem[] => {
    try {
      const limit = durationMinutes >= 60 ? 5 : durationMinutes >= 40 ? 4 : 3;
      const due = getDueReviews(userId, stemSubjectId, gradeLevel, subCat, 50)
        .filter((entry) => !sessionPointIds.has(entry.pointId));
      if (!due.length) return [];
      const chapters = getCurriculumChapters(stemSubjectId, gradeLevel);
      const out: WarmupItem[] = [];
      for (const entry of due) {
        if (out.length >= limit) break;
        const found = findReviewExercise(chapters, entry);
        if (!found) { forgetReview(userId, entry.exerciseId); continue; }
        out.push({ exercise: found.exercise, stepIndex: found.stepIndex, point: found.point, chapterId: found.chapter.id });
      }
      return out;
    } catch {
      return [];
    }
  };

  // Charger ou recharger le payload de session avec la sous-catégorie active
  const refreshSessionPayload = (subCatToUse?: StemSubCategory) => {
    const res = buildTutorSessionPayload(
      userId,
      stemSubjectId,
      subjectTitle,
      gradeLevel,
      durationMinutes,
      subCatToUse
    );

    setNoContentAvailable(res.noContentAvailable);
    if (res.noContentAvailable) {
      setNeedsVoletChoice(false);
      setShowChapterSelector(false);
      setActiveSubCategory(res.subCategory);
      return;
    }

    setNeedsVoletChoice(res.needsVoletChoice);
    setIsSecondSessionAlternance(res.isSecondSessionAlternance);
    setAlternanceBannerText(res.alternanceBannerText || '');
    setAvailableSubChapters(res.availableChapters);
    setSubCategoryQuestionText(res.subCategoryQuestion);
    setActiveSubCategory(res.subCategory);

    if (res.needsVoletChoice) {
      setShowChapterSelector(false);
      return;
    }

    if (res.needsPositioning) {
      setShowChapterSelector(true);
      return;
    }

    if (res.payload && res.payload.itemsToReview.length > 0) {
      setShowChapterSelector(false);
      setSessionPayload(res.payload);
      setActiveItemIndex(0);
      // Marque-page : la séance précédente de CE volet s'était arrêtée au milieu de cette mini-leçon ?
      const bookmark = readResumeBookmark(userId, stemSubjectId, gradeLevel, res.subCategory);
      if (bookmark && res.payload.itemsToReview[0]?.point.id === bookmark.pointId) {
        resumeRef.current = bookmark;
      } else {
        resumeRef.current = null;
        if (bookmark) saveResumeBookmark(userId, stemSubjectId, gradeLevel, res.subCategory, null);
      }
      if (isTwoMinutes) {
        // Règle des 2 minutes : on se lance tout de suite dans la leçon (la révision du jour attendra)
        setWarmupItems([]);
        kickDoneRef.current = false;
        startLearningAt(0, res.payload.itemsToReview[0]?.point);
        return;
      }
      // Révision espacée : les questions dues passent en premier, puis la leçon du jour
      const warmup = loadWarmup(res.subCategory, new Set(res.payload.itemsToReview.map((i) => i.point.id)));
      setWarmupItems(warmup);
      setWarmupIndex(0);
      setPhase(warmup.length > 0 ? 'warmup' : 'intro');
      setExerciseIndex(0);
      setSelectedOptionIndex(null);
      setIsAnswerChecked(false);
      setIsAnswerCorrect(false);
      setShowExplanation(false);
      setMissedIndices([]);
      setMasteredIndices([]);
      setCatchupQueue([]);
      setCurrentCatchupQueueIndex(0);
    }
  };

  /**
   * Lance les étapes d'une mini-leçon. Si un marque-page existe pour ce point (séance précédente coupée
   * par la fin du temps), on reprend à l'étape exacte, avec les étapes déjà réussies conservées.
   */
  const startLearningAt = (fallbackIndex: number, point?: CurriculumPoint) => {
    setTimerStarted(true);
    setSelectedOptionIndex(null);
    setIsAnswerChecked(false);
    setIsAnswerCorrect(false);
    setShowExplanation(false);
    const bm = resumeRef.current;
    if (bm && point && point.id === bm.pointId) {
      const total = point.exercises?.length || point.structuredSteps?.length || 0;
      setMasteredIndices(bm.mastered);
      setMissedIndices(bm.missed);
      if (bm.exerciseIndex >= total) {
        const queue = bm.missed.filter((i) => !bm.mastered.includes(i));
        if (queue.length > 0) {
          setCatchupQueue(queue);
          setCurrentCatchupQueueIndex(0);
          setPhase('catchup');
          return;
        }
      }
      setExerciseIndex(Math.min(bm.exerciseIndex, Math.max(0, total - 1)));
      setPhase('learning');
      return;
    }
    setExerciseIndex(fallbackIndex);
    setPhase('learning');
  };

  // Progression copiée dans le compte : on la récupère d'abord (autre téléphone, réinstallation…), 3,5 s au plus
  const [cloudReady, setCloudReady] = useState<boolean>(false);
  useEffect(() => {
    let alive = true;
    startLearningSync();
    pullLearning(userId).finally(() => { if (alive) setCloudReady(true); });
    return () => { alive = false; };
  }, [userId]);

  useEffect(() => {
    if (!cloudReady) return;
    refreshSessionPayload();
  }, [cloudReady, userId, stemSubjectId, gradeLevel, subjectTitle, durationMinutes]);

  // Permet à l'élève de changer d'onglet (ex: Chimie <-> Physique ou Géométrie <-> Numérique) SANS fermer le sélecteur
  const handleSwitchSubCategoryInSelector = (newSubCat: StemSubCategory) => {
    try { soundFX.playClick(); } catch {}
    setActiveSubCategory(newSubCat);
    setSelectedChapter(null);
    const allChaps = getCurriculumChapters(stemSubjectId, gradeLevel);
    const filtered = allChaps
      .filter((c) => getChapterSubCategory(c) === newSubCat)
      .sort((a, b) => a.order - b.order);
    setAvailableSubChapters(filtered);
    setSubCategoryQuestionText(getSubCategoryQuestion(newSubCat));
  };

  // Validation du diagnostic initial pour cette sous-catégorie
  const handleConfirmInitialChapter = (chapterId: string) => {
    try { soundFX.playCheckmarkPop(); } catch {}
    initializeSubCategoryPosition(userId, stemSubjectId, activeSubCategory, gradeLevel, chapterId);
    setShowChapterSelector(false);
    refreshSessionPayload(activeSubCategory);
  };

  const subjectMeta = STEM_SUBJECTS[stemSubjectId];
  const items = sessionPayload?.itemsToReview || [];
  const currentItem: TutorPointSessionItem | undefined = items[activeItemIndex];
  const currentPoint = currentItem?.point;

  // Récupérer les 8 exercices du point
  const pointExercises: InteractiveExercise[] = useMemo(() => {
    if (!currentPoint) return [];
    if (Array.isArray(currentPoint.exercises) && currentPoint.exercises.length > 0) {
      return currentPoint.exercises;
    }
    if (currentPoint.exercise) {
      return [currentPoint.exercise];
    }
    return [];
  }, [currentPoint]);

  const warmupItem: WarmupItem | undefined = phase === 'warmup' ? warmupItems[warmupIndex] : undefined;

  // Index effectif de l'étape en cours
  const activeStepIndex: number = useMemo(() => {
    if (phase === 'catchup') {
      return catchupQueue[currentCatchupQueueIndex] ?? 0;
    }
    if (phase === 'recall') return recallSteps[recallIndex] ?? 0;
    if (phase === 'warmup') return warmupItem?.stepIndex ?? 0;
    return exerciseIndex;
  }, [phase, exerciseIndex, catchupQueue, currentCatchupQueueIndex, recallSteps, recallIndex, warmupItem]);

  // Exercice de compréhension associé à l'étape active
  const activeExercise: InteractiveExercise | undefined = useMemo(() => {
    if (phase === 'warmup') {
      return warmupItem ? shuffleExerciseOptions(warmupItem.exercise) : undefined;
    }
    if (phase === 'recall') {
      // Même question, mais propositions dans un autre ordre (on ne retient pas la position, on retient la notion)
      const exercise = pointExercises[activeStepIndex];
      if (!exercise) return undefined;
      return { ...shuffleExerciseOptions({ ...exercise, id: `${exercise.id}::rappel` }), id: exercise.id };
    }
    if (phase === 'learning' || phase === 'catchup') {
      const exercise = pointExercises[activeStepIndex];
      // Ordre des propositions mélangé (la bonne réponse n'est plus toujours en A)
      return exercise ? shuffleExerciseOptions(exercise) : undefined;
    }
    return undefined;
  }, [phase, activeStepIndex, pointExercises, warmupItem]);

  // Portion du cours progressif associée à l'étape active
  const activeCourseSlice: ProgressiveCourseSlice | null = useMemo(() => {
    if (phase === 'warmup') {
      return warmupItem ? buildProgressiveCourseSlice(warmupItem.point, warmupItem.stepIndex, activeExercise) : null;
    }
    if (!currentPoint) return null;
    return buildProgressiveCourseSlice(currentPoint, activeStepIndex, activeExercise);
  }, [phase, warmupItem, currentPoint, activeStepIndex, activeExercise]);

  /**
   * Question posée DE MÉMOIRE (fiche cachée tant que l'élève n'a pas répondu ; montrée en cas d'erreur) :
   * révision du jour, rappel de fin de mini-leçon, et en Rappel actif : rattrapage et mini-leçons déjà vues.
   */
  const retrievalMode = phase === 'warmup' || phase === 'recall'
    || (isActiveRecall && (phase === 'catchup' || Boolean(currentItem?.isReview)));
  const showCourseCard = !retrievalMode || (isAnswerChecked && !isAnswerCorrect);

  // KONAN réagit au comportement de l'élève pendant les questions
  const questionPhase = phase === 'learning' || phase === 'catchup' || phase === 'warmup' || phase === 'recall';
  const coach = useKonanCoach(questionPhase);
  const { questionShown } = coach;
  useEffect(() => {
    if (questionPhase && activeExercise) questionShown();
  }, [questionPhase, activeExercise?.id, activeStepIndex, warmupIndex, recallIndex, questionShown]);

  const subCategoryLabel = getSubCategoryName(activeSubCategory);

  // =========================================================================
  // ACTIONS PÉDAGOGIQUES
  // =========================================================================

  // Sélection d'une option de réponse (mise à jour d'état immédiate garantie à 100%)
  const handleSelectOption = (idx: number) => {
    if (isAnswerChecked) return;
    setSelectedOptionIndex(idx);
    try {
      soundFX.playClick();
    } catch {
      // Safe fail : le son ne doit jamais bloquer la sélection
    }
  };

  // Vérification de la réponse
  const handleVerifyAnswer = () => {
    if (selectedOptionIndex === null || !activeExercise) return;

    const isCorrect = Number(selectedOptionIndex) === Number(activeExercise.correctAnswerIndex);
    setIsAnswerChecked(true);
    setIsAnswerCorrect(isCorrect);
    setTotalExercisesAnswered(prev => prev + 1);
    coach.answered(isCorrect);

    // Révision espacée : KONAN retient le résultat pour faire revenir la question au bon moment
    // (premier essai seulement : une réussite après correction ne prouve pas qu'on sait)
    try {
      if (phase === 'warmup' && warmupItem) {
        recordReviewAnswer(userId, { subject: stemSubjectId, grade: gradeLevel, subCategory: activeSubCategory, chapterId: warmupItem.chapterId, pointId: warmupItem.point.id }, warmupItem.exercise.id, isCorrect);
      } else if ((phase === 'learning' || phase === 'recall') && currentItem && currentPoint) {
        recordReviewAnswer(userId, { subject: stemSubjectId, grade: gradeLevel, subCategory: activeSubCategory, chapterId: currentItem.chapterId, pointId: currentPoint.id }, activeExercise.id, isCorrect);
      }
    } catch {
      // la mémoire de révision ne doit jamais bloquer la leçon
    }

    if (isCorrect) {
      setMasteredIndices(prev => prev.includes(activeStepIndex) ? prev : [...prev, activeStepIndex]);
      if (phase === 'learning') {
        setTotalFirstTryCorrect(prev => prev + 1);
      }
      try {
        soundFX.playCorrect();
      } catch {
        // Safe fail
      }
    } else {
      // Petit son « raté » (doux, descendant) pour que l'élève sache tout de suite que ce n'est pas la bonne réponse
      try {
        soundFX.playWrong();
      } catch {
        // Safe fail
      }
      // La barre de progression ne doit pas augmenter : aucun ajout dans masteredIndices
      if (phase === 'learning' && !missedIndices.includes(activeStepIndex)) {
        setMissedIndices(prev => [...prev, activeStepIndex]);
      }
    }
  };

  // Passer à l'étape suivante après lecture de l'explication et de la réaction de Konan
  const handleContinueAfterFeedback = () => {
    try {
      soundFX.playClick();
    } catch {}
    setSelectedOptionIndex(null);
    setIsAnswerChecked(false);
    setIsAnswerCorrect(false);
    setShowExplanation(false);

    if (phase === 'warmup') {
      if (warmupIndex < warmupItems.length - 1) setWarmupIndex(prev => prev + 1);
      else setPhase('intro');
      return;
    }
    if (phase === 'recall') {
      if (recallIndex < recallSteps.length - 1) setRecallIndex(prev => prev + 1);
      else handleMiniLessonValidated();
      return;
    }

    if (phase === 'learning') {
      if (exerciseIndex < pointExercises.length - 1) {
        setExerciseIndex(prev => prev + 1);
      } else {
        if (missedIndices.length > 0) {
          setPhase('catchup');
          setCatchupQueue([...missedIndices]);
          setCurrentCatchupQueueIndex(0);
        } else {
          finishMiniLesson();
        }
      }
    } else if (phase === 'catchup') {
      if (isAnswerCorrect) {
        const nextQueue = catchupQueue.filter((_, i) => i !== currentCatchupQueueIndex);
        setCatchupQueue(nextQueue);
        if (nextQueue.length === 0) {
          finishMiniLesson();
        } else {
          setCurrentCatchupQueueIndex(0);
        }
      } else {
        setCurrentCatchupQueueIndex(prev => (prev + 1) % catchupQueue.length);
      }
    }
  };

  /**
   * Fin des étapes d'une mini-leçon. En Rappel actif, l'élève se teste d'abord de mémoire sur 3 questions
   * de la leçon (fiche cachée), en commençant par celles qu'il avait ratées.
   */
  const finishMiniLesson = () => {
    if (isActiveRecall && pointExercises.length >= 3) {
      const missedFirst = [...missedIndices];
      const others = pointExercises.map((_, i) => i).filter((i) => !missedFirst.includes(i));
      // Ordre stable mais varié selon la leçon (pas toujours les 3 premières étapes)
      const seed = (currentPoint?.id || '').split('').reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);
      others.sort((a, b) => ((a * 7 + seed) % 11) - ((b * 7 + seed) % 11));
      const steps = [...missedFirst, ...others].slice(0, 3);
      setRecallSteps(steps);
      setRecallIndex(0);
      setPhase('recall');
      return;
    }
    if (isFeynman) {
      // La mini-leçon est acquise (enregistrée tout de suite), puis l'élève l'explique avec ses mots
      try { soundFX.playVictoryJingle(); } catch {}
      recordPointDone();
      setPhase('feynman');
      return;
    }
    handleMiniLessonValidated();
  };

  // Validation d'une mini-leçon à 8/8 : sauvegarde IMMÉDIATE de la progression
  // (rien n'est perdu si l'élève quitte avant la fin de la séance)
  const handleMiniLessonValidated = () => {
    try {
      soundFX.playVictoryJingle();
    } catch {}
    recordPointDone();
    setPhase('point_celebration');
  };

  /** Enregistre la mini-leçon en cours comme validée (progression + fin du marque-page). */
  const recordPointDone = () => {
    // Le marque-page de cette mini-leçon (posé à la fin du temps ou en quittant) n'a plus lieu d'être
    if (currentPoint) {
      const saved = readResumeBookmark(userId, stemSubjectId, gradeLevel, activeSubCategory);
      if ((resumeRef.current && resumeRef.current.pointId === currentPoint.id) || saved?.pointId === currentPoint.id) {
        resumeRef.current = null;
        saveResumeBookmark(userId, stemSubjectId, gradeLevel, activeSubCategory, null);
      }
    }
    if (currentItem && !recordedPointIdsRef.current.has(currentItem.point.id)) {
      recordedPointIdsRef.current.add(currentItem.point.id);
      recordCompletedTutorSession(
        userId,
        stemSubjectId,
        gradeLevel,
        activeSubCategory,
        [currentItem],
        totalExercisesAnswered - recordedCountsRef.current.answered,
        totalFirstTryCorrect - recordedCountsRef.current.correct
      );
      recordedCountsRef.current = { answered: totalExercisesAnswered, correct: totalFirstTryCorrect };
    }
  };

  /**
   * Pomodoro : les mini-leçons prévues sont finies mais le temps de travail ne l'est pas.
   * On ajoute la suite du programme (même volet), pour travailler jusqu'au bout des 25 minutes.
   */
  const extendSessionIfTimeLeft = (): boolean => {
    if (!workLimitSec || workSeconds >= workLimitSec || !sessionPayload) return false;
    try {
      const known = new Set(sessionPayload.itemsToReview.map((i) => i.point.id));
      const more = buildTutorSessionPayload(userId, stemSubjectId, subjectTitle, gradeLevel, durationMinutes, activeSubCategory, known);
      const fresh = (more.payload?.itemsToReview || []).filter((i) => !known.has(i.point.id));
      if (!fresh.length) return false;
      setSessionPayload({ ...sessionPayload, itemsToReview: [...sessionPayload.itemsToReview, ...fresh] });
      return true;
    } catch {
      return false;
    }
  };

  // Passer à la mini-leçon suivante ou célébrer la fin de séance
  const handleContinueToNextLesson = () => {
    try {
      soundFX.playClick();
    } catch {}
    if (activeItemIndex < items.length - 1 || extendSessionIfTimeLeft()) {
      setActiveItemIndex(prev => prev + 1);
      setPhase('intro');
      setExerciseIndex(0);
      setSelectedOptionIndex(null);
      setIsAnswerChecked(false);
      setIsAnswerCorrect(false);
      setShowExplanation(false);
      setMissedIndices([]);
      setMasteredIndices([]);
      setCatchupQueue([]);
      setCurrentCatchupQueueIndex(0);
    } else {
      handleSessionCelebration();
    }
  };

  // Célébration globale (la progression a déjà été enregistrée mini-leçon par mini-leçon).
  // L'alternance n'avance qu'ici, quand la séance est entièrement terminée.
  const handleSessionCelebration = () => {
    try {
      soundFX.playGrandCheer();
    } catch {}
    markSessionAlternation(userId, stemSubjectId, gradeLevel, activeSubCategory);
    alternationDoneRef.current = true;
    setPhase('session_celebration');
  };

  // L'élève quitte en pleine séance (menu, bouton retour, appli fermée) : on garde sa place.
  //  - marque-page à la question exacte (rattrapée à la prochaine séance de ce volet, puis on continue) ;
  //  - s'il a vraiment travaillé (5 réponses ou plus), la prochaine séance passe à l'autre volet,
  //    exactement comme à la fin du temps.
  const alternationDoneRef = useRef<boolean>(false);
  const leaveRef = useRef<(final: boolean) => void>(() => {});
  leaveRef.current = (final: boolean) => {
    try {
      saveWhereStopped();
      if (final && !alternationDoneRef.current && totalExercisesAnswered >= 5) {
        alternationDoneRef.current = true;
        markSessionAlternation(userId, stemSubjectId, gradeLevel, activeSubCategory);
      }
    } catch {
      // quitter ne doit jamais planter
    }
  };
  useEffect(() => {
    const onHide = () => { if (document.visibilityState === 'hidden') leaveRef.current(false); };
    const onPageHide = () => leaveRef.current(false);
    document.addEventListener('visibilitychange', onHide);
    window.addEventListener('pagehide', onPageHide);
    return () => {
      document.removeEventListener('visibilitychange', onHide);
      window.removeEventListener('pagehide', onPageHide);
    };
  }, []);
  // Démontage du cours (retour au tableau de bord, autre page) = l'élève a quitté la séance
  useEffect(() => () => leaveRef.current(true), []);

  // Fermeture finale et validation dans l'emploi du temps
  const handleFinishAndExit = () => {
    onSessionCompleted(studySessionId);
  };

  // =========================================================================
  // POMODORO : chrono de VRAI travail, fin de séance, pause
  // =========================================================================
  const timedPhase = phase === 'warmup' || phase === 'intro' || phase === 'learning' || phase === 'catchup' || phase === 'recall' || phase === 'point_celebration' || phase === 'feynman';
  const { isIdle: coachIdle } = coach;
  useEffect(() => {
    if (!workLimitSec || !timedPhase || !timerStarted) return;
    const timer = setInterval(() => {
      // Le chrono ne compte pas quand l'élève a quitté l'appli ou ne fait plus rien
      if (document.visibilityState === 'hidden' || coachIdle) return;
      setWorkSeconds((s) => s + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [workLimitSec, timedPhase, coachIdle, timerStarted]);

  /**
   * Mémorise l'endroit exact où l'élève s'arrête au milieu d'une mini-leçon (marque-page) :
   * à la séance suivante de ce volet, il reprend à cette question, puis continue avec les points suivants.
   * Si toutes les étapes étaient faites (rappel de fin de leçon), la mini-leçon compte comme validée.
   */
  const saveWhereStopped = () => {
    if ((phase === 'learning' || phase === 'catchup') && currentPoint) {
      const nextIndex = phase === 'learning' ? exerciseIndex + (isAnswerChecked ? 1 : 0) : pointExercises.length;
      const mastered = isAnswerChecked && isAnswerCorrect && !masteredIndices.includes(activeStepIndex) ? [...masteredIndices, activeStepIndex] : masteredIndices;
      const missed = isAnswerChecked && !isAnswerCorrect && phase === 'learning' && !missedIndices.includes(activeStepIndex) ? [...missedIndices, activeStepIndex] : missedIndices;
      // Rien de répondu dans cette mini-leçon : pas besoin de marque-page, elle reprendra au début
      if (nextIndex === 0 && mastered.length === 0 && missed.length === 0) return;
      // Toutes les étapes faites et toutes les erreurs rattrapées : la mini-leçon est validée
      if (nextIndex >= pointExercises.length && missed.every((i) => mastered.includes(i))) {
        recordPointDone();
        return;
      }
      saveResumeBookmark(userId, stemSubjectId, gradeLevel, activeSubCategory, {
        pointId: currentPoint.id, exerciseIndex: nextIndex, mastered, missed, savedAt: new Date().toISOString(),
      });
    } else if (phase === 'recall') {
      recordPointDone(); // toutes les étapes étaient faites : la mini-leçon compte
    }
  };

  /** Fin des 25 minutes : marque-page si on est au milieu d'une mini-leçon, alternance, puis pause. */
  const handleTimeUp = () => {
    try {
      saveWhereStopped();
      // Alternance : la prochaine séance de cette matière passera à l'autre volet,
      // seulement si la séance compte (sinon on reste sur ce volet, comme l'écran l'annonce)
      if (totalExercisesAnswered >= 5) markSessionAlternation(userId, stemSubjectId, gradeLevel, activeSubCategory);
      alternationDoneRef.current = true;
    } catch {
      // la fin de séance ne doit jamais bloquer
    }
    // Séance validée seulement si l'élève a vraiment travaillé (au moins 5 réponses)
    setTimeUpCounted(totalExercisesAnswered >= 5);
    setPauseLeft(POMODORO_PAUSE_SEC);
    try { soundFX.playVictoryJingle(); } catch {}
    setPhase('time_up');
  };

  useEffect(() => {
    if (workLimitSec && timedPhase && workSeconds >= workLimitSec) handleTimeUp();
  }, [workSeconds]);

  // Compte à rebours de la pause
  useEffect(() => {
    if (phase !== 'time_up' || !timeUpCounted) return;
    const timer = setInterval(() => setPauseLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(timer);
  }, [phase, timeUpCounted]);

  // =========================================================================
  // RÈGLE DES 2 MINUTES : après 2 minutes (ou 3 réponses), KONAN demande « Tu continues ? »
  // =========================================================================
  useEffect(() => {
    if (!isTwoMinutes || kickDoneRef.current || !questionPhase) return;
    const timer = setInterval(() => {
      if (document.visibilityState === 'hidden') return;
      setKickSeconds((s) => s + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [isTwoMinutes, questionPhase]);

  useEffect(() => {
    if (!isTwoMinutes || kickDoneRef.current) return;
    if (kickSeconds >= 120 || (totalExercisesAnswered >= 3 && !isAnswerChecked)) {
      kickDoneRef.current = true;
      setShowKickPrompt(true);
      try { soundFX.playCheckmarkPop(); } catch {}
    }
  }, [kickSeconds, totalExercisesAnswered, isAnswerChecked, isTwoMinutes]);

  /** Mode concentration (Time Blocking) : plein écran tant que dure le bloc, quitté à la pause. */
  const enterFocusMode = () => {
    try {
      const el = document.documentElement as HTMLElement & { webkitRequestFullscreen?: () => void };
      if (document.fullscreenElement) return;
      if (el.requestFullscreen) el.requestFullscreen().catch(() => {});
      else el.webkitRequestFullscreen?.();
    } catch {
      // plein écran refusé (iPhone, certains navigateurs) : la séance continue normalement
    }
  };
  const leaveFocusMode = () => {
    try { if (document.fullscreenElement) document.exitFullscreen().catch(() => {}); } catch { /* rien */ }
  };
  useEffect(() => {
    if (phase === 'time_up' || phase === 'session_celebration') leaveFocusMode();
  }, [phase]);
  useEffect(() => () => leaveFocusMode(), []);

  const fmtClock = (sec: number) => `${Math.floor(Math.max(0, sec) / 60)}:${String(Math.max(0, sec) % 60).padStart(2, '0')}`;
  const isTwoVoletLabel = (label: string) => ['Physique', 'Chimie', 'Géométrie', 'Numérique', 'Histoire', 'Géographie'].includes(label);

  /** Chrono Pomodoro affiché en haut (temps de travail restant). */
  const pomodoroPill = workLimitSec ? (
    <span
      className={`shrink-0 whitespace-nowrap px-2.5 py-1 rounded-xl text-xs font-black font-mono tabular-nums border ${coachIdle ? 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-500' : 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300'}`}
      title={!timerStarted ? 'Le chrono démarre quand tu commences la leçon' : coachIdle ? 'Chrono en pause : tu ne travailles plus' : 'Temps de travail restant'}
    >
      ⏱ {fmtClock(workLimitSec - workSeconds)}{coachIdle ? ' · pause' : ''}
    </span>
  ) : null;

  /** Règle des 2 minutes : « Tu t'es lancé ! Tu continues ? » */
  const kickPrompt = showKickPrompt ? (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-950/50 p-4" role="dialog" aria-modal="true">
      <div className="w-full max-w-sm rounded-3xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-700 p-5 text-center space-y-4 animate-in slide-in-from-bottom-6 duration-300">
        <div className="flex justify-center"><KonanMascot pose="jump" size={120} /></div>
        <div className="space-y-1">
          <h3 className="text-lg font-black text-slate-900 dark:text-white">Bravo, tu t’es lancé !</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">Le plus dur, c’était de commencer. Et c’est fait. Tu continues ?</p>
        </div>
        <div className="grid gap-2">
          <button type="button" onClick={() => setShowKickPrompt(false)} className="w-full py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-black uppercase shadow-[0_4px_0_#15803D] active:translate-y-1 cursor-pointer">
            Je continue
          </button>
          <button type="button" onClick={onExit} className="w-full py-2.5 rounded-2xl text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
            J’arrête là pour l’instant
          </button>
        </div>
      </div>
    </div>
  ) : null;

  // =========================================================================
  // VUE -1 : COURS EN PRÉPARATION (aucun cours authentique pour cette classe)
  // Jamais de bascule vers le cours d'une autre classe.
  // =========================================================================
  if (noContentAvailable) {
    return (
      <div className="max-w-md mx-auto py-12 px-4 text-center space-y-5">
        <div className="flex justify-center">
          <KonanCube size={64} showStars={false} glow={true} />
        </div>
        <div className="space-y-2">
          <span className="inline-block text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-700 dark:text-indigo-300">
            {subjectTitle}
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
            Cours en préparation
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Le cours guidé officiel de <strong>{subjectTitle}</strong> pour ta classe arrive très bientôt.
            En attendant, révise cette séance avec tes notes de cours.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            try { soundFX.playClick(); } catch {}
            onExit();
          }}
          className="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm transition-colors cursor-pointer shadow-sm"
        >
          Retour au tableau de bord
        </button>
      </div>
    );
  }

  // =========================================================================
  // VUE 0 : RÈGLE 1 — CHOIX DU PREMIER VOLET (NOUVEL ÉLÈVE)
  // =========================================================================
  if (needsVoletChoice) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
        <div className="max-w-xl w-full bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 animate-in zoom-in-95 duration-200 my-auto">
          {/* En-tête */}
          <div className="flex items-center gap-4">
            <div className="shrink-0">
              <KonanCube size={56} showStars={true} glow={true} />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-700 dark:text-indigo-300">
                {subjectTitle} • Première séance
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight mt-1">
                {stemSubjectId === 'maths'
                  ? 'Par quel domaine mathématique souhaites-tu commencer aujourd’hui ?'
                  : 'Par quel volet souhaites-tu commencer aujourd’hui ?'}
              </h2>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            En Côte d’Ivoire, le programme officiel de <strong>{subjectTitle}</strong> comporte deux volets complémentaires.
            Choisis librement par lequel tu démarres : Konan alternera ensuite automatiquement à chaque séance !
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {stemSubjectId === 'physique_chimie' ? (
              <>
                <button
                  type="button"
                  onClick={() => {
                    try { soundFX.playClick(); } catch {}
                    refreshSessionPayload('physique');
                  }}
                  className="p-5 rounded-2xl border-2 border-indigo-200 dark:border-indigo-800/80 bg-white dark:bg-slate-800/60 hover:border-indigo-500 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/40 transition-all cursor-pointer text-left space-y-2 group hover:scale-[1.02] shadow-sm"
                >
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      Physique
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                      Mécanique, forces, mouvements et circuits électriques.
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    try { soundFX.playClick(); } catch {}
                    refreshSessionPayload('chimie');
                  }}
                  className="p-5 rounded-2xl border-2 border-indigo-200 dark:border-indigo-800/80 bg-white dark:bg-slate-800/60 hover:border-indigo-500 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/40 transition-all cursor-pointer text-left space-y-2 group hover:scale-[1.02] shadow-sm"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    <FlaskConical className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      Chimie
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                      Atomes, solutions aqueuses, ions et réactions acido-basiques.
                    </p>
                  </div>
                </button>
              </>
            ) : stemSubjectId === 'histoire_geo' ? (
              <>
                <button
                  type="button"
                  onClick={() => {
                    try { soundFX.playClick(); } catch {}
                    refreshSessionPayload('histoire');
                  }}
                  className="p-5 rounded-2xl border-2 border-indigo-200 dark:border-indigo-800/80 bg-white dark:bg-slate-800/60 hover:border-indigo-500 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/40 transition-all cursor-pointer text-left space-y-2 group hover:scale-[1.02] shadow-sm"
                >
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    <Landmark className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      Histoire
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                      Décolonisation, construction de l'Afrique, croyances et valeurs.
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    try { soundFX.playClick(); } catch {}
                    refreshSessionPayload('geographie');
                  }}
                  className="p-5 rounded-2xl border-2 border-indigo-200 dark:border-indigo-800/80 bg-white dark:bg-slate-800/60 hover:border-indigo-500 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/40 transition-all cursor-pointer text-left space-y-2 group hover:scale-[1.02] shadow-sm"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    <Globe className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      Géographie
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                      Économie ivoirienne, Corée du Sud, CEDEAO et coopération.
                    </p>
                  </div>
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => {
                    try { soundFX.playClick(); } catch {}
                    refreshSessionPayload('numerique');
                  }}
                  className="p-5 rounded-2xl border-2 border-indigo-200 dark:border-indigo-800/80 bg-white dark:bg-slate-800/60 hover:border-indigo-500 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/40 transition-all cursor-pointer text-left space-y-2 group hover:scale-[1.02] shadow-sm"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    <Calculator className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      Domaine Numérique
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                      Calculs, ensembles, équations, inéquations et fonctions.
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    try { soundFX.playClick(); } catch {}
                    refreshSessionPayload('geometrie');
                  }}
                  className="p-5 rounded-2xl border-2 border-indigo-200 dark:border-indigo-800/80 bg-white dark:bg-slate-800/60 hover:border-indigo-500 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/40 transition-all cursor-pointer text-left space-y-2 group hover:scale-[1.02] shadow-sm"
                >
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/15 text-purple-600 dark:text-purple-400 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    <Shapes className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      Géométrie
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                      Vecteurs, repérage, produit scalaire et transformations.
                    </p>
                  </div>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VUE 1 : DIAGNOSTIC INITIAL (OÙ EN ÊTES-VOUS DANS CETTE SOUS-DISCIPLINE ?)
  // =========================================================================
  if (showChapterSelector) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
        <div className="max-w-xl w-full bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5 animate-in zoom-in-95 duration-200 my-auto">
          {/* En-tête */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="shrink-0">
                <KonanCube size={54} showStars={false} glow={true} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-700 dark:text-indigo-300">
                    {subjectTitle} • {subCategoryLabel}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    {availableSubChapters.length} chapitres officiels
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-tight mt-1">
                  {subCategoryQuestionText || `À quel chapitre êtes-vous arrivés en ${subCategoryLabel} ?`}
                </h2>
              </div>
            </div>

            {/* L'utilisateur ne doit pas quitter tant qu'il n'a pas validé sa session */}
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Pour synchroniser vos révisions avec votre professeur en <strong>{subCategoryLabel}</strong>, sélectionnez votre chapitre actuel.
            Konan alternera automatiquement ensuite vos séances pour couvrir harmonieusement tout le programme.
          </p>

          {/* Bannière d'alternance obligatoire (Règle 2) */}
          {isSecondSessionAlternance ? (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/60 dark:to-purple-950/50 border-2 border-indigo-300 dark:border-indigo-700 flex items-center gap-3.5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <RefreshCw className="w-5 h-5 animate-spin-slow" />
              </div>
              <div className="space-y-0.5">
                <div className="text-[11px] font-black uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                  Alternance obligatoire
                </div>
                <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-white leading-snug">
                  {alternanceBannerText || `La dernière séance tu as travaillé l'autre volet, aujourd'hui place à la ${subCategoryLabel} !`}
                </p>
              </div>
            </div>
          ) : needsVoletChoice && (stemSubjectId === 'physique_chimie' || stemSubjectId === 'maths') ? (
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                Sélectionne ton volet de démarrage :
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                {stemSubjectId === 'physique_chimie' ? (
                  <>
                    <button
                      type="button"
                      onClick={() => {
                        if (activeSubCategory !== 'chimie') {
                          handleSwitchSubCategoryInSelector('chimie');
                        }
                      }}
                      className={`p-3 rounded-2xl border-2 text-left transition-all cursor-pointer flex items-center gap-3 ${
                        activeSubCategory === 'chimie'
                          ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/60 shadow-md ring-2 ring-indigo-500/20 text-indigo-950 dark:text-white'
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                      }`}
                    >
                      <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                        <FlaskConical className="w-5 h-5 stroke-[2.5]" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-black">Chimie</div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 break-words min-w-0">Atomes et réactions</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        if (activeSubCategory !== 'physique') {
                          handleSwitchSubCategoryInSelector('physique');
                        }
                      }}
                      className={`p-3 rounded-2xl border-2 text-left transition-all cursor-pointer flex items-center gap-3 ${
                        activeSubCategory === 'physique'
                          ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/60 shadow-md ring-2 ring-indigo-500/20 text-indigo-950 dark:text-white'
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                      }`}
                    >
                      <div className="w-9 h-9 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                        <Zap className="w-5 h-5 stroke-[2.5]" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-black">Physique</div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 break-words min-w-0">Mécanique et électricité</div>
                      </div>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => {
                        if (activeSubCategory !== 'numerique') {
                          handleSwitchSubCategoryInSelector('numerique');
                        }
                      }}
                      className={`p-3 rounded-2xl border-2 text-left transition-all cursor-pointer flex items-center gap-3 ${
                        activeSubCategory === 'numerique'
                          ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/60 shadow-md ring-2 ring-indigo-500/20 text-indigo-950 dark:text-white'
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                      }`}
                    >
                      <div className="w-9 h-9 rounded-xl bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                        <Calculator className="w-5 h-5 stroke-[2.5]" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-black">Numérique</div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 break-words min-w-0">Calculs et fonctions</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        if (activeSubCategory !== 'geometrie') {
                          handleSwitchSubCategoryInSelector('geometrie');
                        }
                      }}
                      className={`p-3 rounded-2xl border-2 text-left transition-all cursor-pointer flex items-center gap-3 ${
                        activeSubCategory === 'geometrie'
                          ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/60 shadow-md ring-2 ring-indigo-500/20 text-indigo-950 dark:text-white'
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                      }`}
                    >
                      <div className="w-9 h-9 rounded-xl bg-purple-500/15 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                        <Shapes className="w-5 h-5 stroke-[2.5]" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-black">Géométrie</div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 break-words min-w-0">Vecteurs et droites</div>
                      </div>
                    </button>
                  </>
                )}
              </div>
            </div>
          ) : null}

          {/* Indicateur de sélection en cours */}
          {selectedChapter ? (
            <div className="px-3.5 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700/60 flex items-center justify-between text-xs text-emerald-800 dark:text-emerald-300">
              <span className="font-bold flex items-center gap-1.5 break-words min-w-0">
                <CheckCircle2 size={15} className="shrink-0 text-emerald-600 dark:text-emerald-400" />
                Chapitre sélectionné : {selectedChapter.title.startsWith('Leçon') ? selectedChapter.title : `Ch. ${selectedChapter.order} — ${selectedChapter.title}`}
              </span>
              <span className="text-[10px] font-mono shrink-0 ml-2 font-bold px-1.5 py-0.5 rounded bg-emerald-500/20">
                {selectedChapter.officialVolumeHours || 12}h
              </span>
            </div>
          ) : (
            <div className="px-3.5 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700/60 flex items-center gap-2 text-xs text-amber-800 dark:text-amber-300">
              <Sparkles size={14} className="shrink-0 text-amber-600 dark:text-amber-400" />
              <span>Clique sur ton chapitre actuel en {subCategoryLabel} pour démarrer.</span>
            </div>
          )}

          {/* Liste dynamique et défilable des chapitres */}
          <div className="space-y-2 max-h-[46vh] overflow-y-auto pr-1">
            {availableSubChapters.length === 0 ? (
              <div className="text-center py-6 text-xs text-slate-400">
                Chargement des chapitres officiels de {subCategoryLabel}...
              </div>
            ) : (
              availableSubChapters.map((ch) => (
                <button
                  key={ch.id}
                  type="button"
                  onClick={() => { soundFX.playCheckmarkPop(); setSelectedChapter(ch); }}
                  className={`w-full text-left p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    selectedChapter?.id === ch.id
                      ? 'bg-indigo-50 dark:bg-indigo-950/80 border-indigo-600 dark:border-indigo-400 text-indigo-900 dark:text-indigo-200 shadow-sm ring-2 ring-indigo-500/20'
                      : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-indigo-300 dark:hover:border-slate-600'
                  }`}
                >
                  <span className="text-xs sm:text-sm font-bold break-words min-w-0">
                    {ch.title.startsWith('Leçon') ? ch.title : `Ch. ${ch.order} — ${ch.title}`}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 shrink-0 font-semibold">{ch.officialVolumeHours || 10}h</span>
                </button>
              ))
            )}
          </div>

          {/* Boutons d'action */}
          <div className="pt-2 flex items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={() => {
                if (sessionPayload && sessionPayload.itemsToReview.length > 0) {
                  setShowChapterSelector(false);
                } else {
                  onExit();
                }
              }}
              className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Annuler
            </button>
            <button
              type="button"
              disabled={selectedChapter === null}
              onClick={() => selectedChapter && handleConfirmInitialChapter(selectedChapter.id)}
              className={`px-6 py-2.5 rounded-xl font-black text-xs transition-all flex items-center gap-2 ${
                selectedChapter !== null
                  ? 'bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 text-white shadow-lg shadow-indigo-600/30 hover:from-indigo-500 hover:to-blue-500 cursor-pointer active:scale-95'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed border border-slate-300 dark:border-slate-700'
              }`}
            >
              <span>{selectedChapter !== null ? 'Démarrer mes révisions' : 'Sélectionne un chapitre'}</span>
              {selectedChapter !== null && <ArrowRight className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VUE 2 : CÉLÉBRATION GLOBALE DE FIN DE SÉANCE D'EDT
  // =========================================================================
  // =========================================================================
  // FEYNMAN : « EXPLIQUE-LE SIMPLEMENT » APRÈS LA MINI-LEÇON
  // =========================================================================
  if (phase === 'feynman' && currentPoint) {
    const reference = [currentPoint.summary, currentPoint.keyRule, (currentPoint as { conceptExplanation?: string }).conceptExplanation]
      .filter(Boolean).join(' ').slice(0, 1500);
    return (
      <div className="max-w-2xl mx-auto py-6 px-4 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-400 break-words min-w-0">
            {subjectTitle} • {subCategoryLabel} • Mini-leçon {activeItemIndex + 1}/{items.length}
          </span>
          {pomodoroPill}
        </div>
        <FeynmanChallenge
          notion={currentPoint.title}
          reference={reference}
          classe={gradeLevel.replace(/_/g, ' ')}
          onDone={() => setPhase('point_celebration')}
        />
      </div>
    );
  }

  // =========================================================================
  // POMODORO : TEMPS DE TRAVAIL ÉCOULÉ → PAUSE, PUIS MATIÈRE SUIVANTE
  // =========================================================================
  if (phase === 'time_up') {
    const workedMin = Math.round(workSeconds / 60);
    return (
      <div className="max-w-md mx-auto py-10 px-4 text-center space-y-5 animate-in zoom-in-95 duration-300">
        <div className="flex justify-center">
          <KonanMascot pose={timeUpCounted ? 'pause' : 'sad'} size={150} />
        </div>
        {timeUpCounted ? (
          <>
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">{workedMin} minute{workedMin > 1 ? 's' : ''} de vrai travail !</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Pause ! {POMODORO_PAUSE_SEC / 60} minutes, bois de l’eau et repose tes yeux.
                {(isTwoVoletLabel(subCategoryLabel)) ? ` La prochaine fois, on passera à l’autre volet ; et quand ${subCategoryLabel} reviendra, tu reprendras exactement là où tu t’es arrêté.` : ' La prochaine fois, tu reprendras exactement là où tu t’es arrêté.'}
              </p>
            </div>
            <div className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-sky-50 dark:bg-sky-950/50 border-2 border-sky-200 dark:border-sky-800 text-3xl font-black font-mono text-sky-700 dark:text-sky-300 tabular-nums">
              {fmtClock(pauseLeft)}
            </div>
            <button
              type="button"
              onClick={handleFinishAndExit}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black uppercase tracking-wide shadow-[0_5px_0_#065f46] active:translate-y-1 cursor-pointer"
            >
              {pauseLeft > 0 ? 'Terminer la séance' : 'Pause terminée : matière suivante'}
            </button>
          </>
        ) : (
          <>
            <div className="space-y-2">
              <h2 className="text-xl font-black text-slate-900 dark:text-white">On a à peine commencé…</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Cette séance ne compte pas, mais demain on se rattrape ensemble ? Tu reprendras là où tu t’es arrêté.
              </p>
            </div>
            <button
              type="button"
              onClick={onExit}
              className="w-full py-4 rounded-2xl bg-slate-800 dark:bg-slate-700 text-white font-black uppercase tracking-wide cursor-pointer"
            >
              Retour au tableau de bord
            </button>
          </>
        )}
      </div>
    );
  }

  if (phase === 'session_celebration') {
    return (
      <div className="max-w-2xl mx-auto py-6 sm:py-10 px-4 space-y-6 text-center animate-in zoom-in-95 duration-300">
        <div className="relative inline-block">
          <div className="absolute -inset-4 rounded-full bg-emerald-500/20 blur-xl animate-pulse" />
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-2xl shadow-emerald-500/40 relative">
            <Award className="w-10 h-10 sm:w-12 sm:h-12 stroke-[2.5]" />
          </div>
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30 text-xs font-black uppercase tracking-wider">
            <Check className="w-4 h-4 stroke-[3]" />
            <span>Quota 100% validé • {subCategoryLabel}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Séance de {subCategoryLabel} Maîtrisée !
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-relaxed">
            Tu as validé avec succès l'intégralité des <strong>{items.length} mini-leçons</strong> avec le score d'excellence requis.
            {isTwoVoletLabel(subCategoryLabel)
              ? 'Lors de ta prochaine séance, Konan passera automatiquement à l’autre volet de ton programme !'
              : 'Lors de ta prochaine séance, tu continueras exactement là où tu t’es arrêté !'}
          </p>
        </div>

        {/* Récapitulatif des points maîtrisés */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-left space-y-3 shadow-sm">
          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Points clés validés aujourd'hui ({items.length}) :
          </span>
          <div className="space-y-2">
            {items.map((item, idx) => (
              <div
                key={item.point.id || idx}
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 text-xs"
              >
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="font-extrabold text-slate-800 dark:text-slate-200 break-words min-w-0">
                    {item.point.title}
                  </span>
                </div>
                <span className="font-mono font-black text-emerald-600 dark:text-emerald-400 shrink-0 pl-2">
                  100%
                </span>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={handleFinishAndExit}
          className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-white font-black text-sm sm:text-base tracking-wide uppercase shadow-[0_5px_0_#065f46] hover:shadow-[0_2px_0_#065f46] dark:shadow-[0_0_25px_rgba(16,185,129,0.4)] active:translate-y-1 transition-all cursor-pointer flex items-center justify-center gap-2 mx-auto"
        >
          <span>Valider et Enregistrer dans mon planning</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    );
  }

  // =========================================================================
  // VUE 3 : ÉCRAN D'INTRODUCTION ANIMÉ DE LA MINI-LEÇON (ÉTAPE 0)
  // =========================================================================
  if (phase === 'intro' && currentItem && currentPoint) {
    const numQuestions = currentPoint.exercises?.length || 8;
    const objectives = [
      `Comprendre le contexte réel et la définition simple de : ${currentPoint.title}`,
      currentPoint.formulas && currentPoint.formulas.length > 0
        ? `Manipuler la formule officielle : ${currentPoint.formulas[0].name}`
        : `Identifier les principes d’application et la démarche rigoureuse`,
      currentPoint.keyRule
        ? `Retenir le réflexe d'examen : ${currentPoint.keyRule}`
        : `Éviter les erreurs classiques et pièges fréquents signalés aux examens`,
      `Réussir les ${numQuestions} étapes progressives pour valider cette leçon avec un score de ${numQuestions}/${numQuestions}`
    ];

    return (
      <div className="max-w-2xl mx-auto py-6 sm:py-10 px-4 space-y-6 text-center animate-in zoom-in-95 duration-300">
        {/* Top bar avec alternance */}
        <div className="flex flex-col items-center gap-2 pb-3 border-b border-slate-200/80 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ backgroundColor: subjectMeta.color }}
            />
            <span className="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-400">
              {subjectTitle} • {subCategoryLabel} • Leçon {activeItemIndex + 1}/{items.length}
            </span>
          </div>
          {/* Chrono sur sa propre ligne : toujours visible en entier */}
          {pomodoroPill}
        </div>

        {/* Reprise : la séance précédente de ce volet s'était arrêtée au milieu de cette mini-leçon */}
        {resumeRef.current && resumeRef.current.pointId === currentPoint.id && (
          <div className="p-3 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-sm font-bold text-sky-900 dark:text-sky-100">
            Tu reprends là où tu t’étais arrêté : étape {Math.min(resumeRef.current.exerciseIndex + 1, numQuestions)} sur {numQuestions}.
          </div>
        )}

        {/* Pomodoro / Time Blocking : la règle du jeu en une ligne */}
        {workLimitSec && activeItemIndex === 0 && (
          <div className="p-3.5 rounded-2xl bg-rose-50/80 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/60 text-left text-xs sm:text-sm text-rose-900 dark:text-rose-100 font-semibold leading-relaxed">
            <strong>{isTimeBlocking ? 'Séance Time Blocking :' : 'Séance Pomodoro :'}</strong> {Math.round(workLimitSec / 60)} minutes de vrai travail
            {isTimeBlocking ? ' sur cette seule matière, sans changer de sujet' : ''}, puis {POMODORO_PAUSE_SEC / 60} minutes de pause.
            Le chrono démarre quand tu cliques sur « Commencer la leçon », et il s’arrête si tu quittes l’appli ou si tu ne fais plus rien.
          </div>
        )}

        {/* Feynman : la règle du jeu en une ligne */}
        {isFeynman && activeItemIndex === 0 && (
          <div className="p-3.5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 text-left text-xs sm:text-sm text-amber-900 dark:text-amber-100 font-semibold leading-relaxed">
            <strong>Séance Feynman :</strong> à la fin de chaque leçon, tu l’expliques avec tes mots, à l’oral ou par écrit. KONAN te dit si c’est juste, clair et simple.
          </div>
        )}

        {/* Mascotte KonanCube animée */}
        <div className="relative inline-block my-2">
          <div className="absolute -inset-4 rounded-full bg-indigo-500/20 blur-xl animate-pulse" />
          <div className="relative transform hover:scale-105 transition-transform duration-300 cursor-pointer">
            <KonanCube size={72} showStars={true} glow={true} />
          </div>
        </div>

        {/* Titres */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
            <span>Ch. {currentItem.chapterOrder} : {currentItem.chapterTitle}</span>
          </div>
          {currentItem.isReview && (
            <p className="text-xs sm:text-sm font-bold text-amber-700 dark:text-amber-300">
              Révision : tu as déjà vu cette leçon. Je la remets pour que tu la retiennes (en priorité celles où tu as fait des erreurs).
            </p>
          )}
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            {currentPoint.title}
          </h1>
        </div>

        {/* Méthode de la séance, expliquée en une ligne */}
        {isActiveRecall && (
          <div className="p-3.5 rounded-2xl bg-violet-50/80 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-700/60 text-left flex items-start gap-3">
            <Brain className="w-5 h-5 text-violet-600 dark:text-violet-300 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-violet-900 dark:text-violet-100 font-semibold leading-relaxed">
              <strong>Séance Rappel actif :</strong> quand une notion a déjà été vue, je te pose la question avant de te montrer la fiche.
              Et à la fin de la leçon, tu te testes de mémoire sur 3 questions.
            </p>
          </div>
        )}

        {/* Enjeu pour devoirs et examens */}
        <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/60 text-left space-y-2 shadow-xs">
          <div className="flex items-center gap-2 text-indigo-900 dark:text-indigo-200 font-black text-xs sm:text-sm">
            <Target className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
            <span>Pourquoi cette notion est essentielle pour tes devoirs & examens ?</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Cette notion est un classique incontournable au programme officiel et aux examens nationaux (BEPC / BAC).
            La comprendre en profondeur dès aujourd'hui te permet de poser la démarche attendue par les correcteurs et d'obtenir tous les points dès la première lecture de ton sujet.
          </p>
        </div>

        {/* Objectifs clés */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-left space-y-3 shadow-xs">
          <span className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <Brain className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Ce que tu vas maîtriser dans cette séance (Objectifs clés) :</span>
          </span>
          <ul className="space-y-2.5">
            {objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                {/* Phrase complète, formules dessinées (jamais de « $ » ni de « … ») */}
                <span className="min-w-0 break-words"><MathRenderer text={obj} /></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bouton d'action rebondissant */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => {
              try { soundFX.playCheckmarkPop(); } catch {}
              // Time Blocking : mode concentration, l'écran entier est consacré à la matière
              if (isTimeBlocking && activeItemIndex === 0) enterFocusMode();
              startLearningAt(0, currentPoint);
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-white font-black text-sm sm:text-base tracking-wide uppercase shadow-[0_5px_0_#065f46] hover:shadow-[0_2px_0_#065f46] active:translate-y-1 transition-all cursor-pointer flex items-center justify-center gap-3 mx-auto relative overflow-hidden konan-btn-shine"
          >
            <span>C'est parti ! Commencer la leçon</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VUE 4 : INTERFACE DE MINI-LEÇON ACTIVE (COURS CONTINU + TEST IMMÉDIAT)
  // =========================================================================
  if (!currentItem || !currentPoint) {
    return (
      <div className="max-w-md mx-auto py-16 text-center space-y-4">
        <KonanCube size={60} showStars={false} glow={true} />
        <p className="text-sm font-bold text-slate-600 dark:text-slate-300">
          Chargement du programme officiel de {subCategoryLabel}...
        </p>
      </div>
    );
  }

  const totalSteps = pointExercises.length || 8;
  // Barre de progression : la révision du jour et le rappel de mémoire ont leur propre compteur
  const answeredNow = isAnswerChecked ? 1 : 0;
  const barDone = phase === 'warmup' ? warmupIndex + answeredNow : phase === 'recall' ? recallIndex + answeredNow : masteredIndices.length;
  const barTotal = phase === 'warmup' ? Math.max(1, warmupItems.length) : phase === 'recall' ? Math.max(1, recallSteps.length) : totalSteps;
  const isLastQuestionOfPhase = phase === 'warmup' ? warmupIndex >= warmupItems.length - 1 : phase === 'recall' ? recallIndex >= recallSteps.length - 1 : false;

  return (
    <div className="max-w-3xl mx-auto py-4 sm:py-6 px-3 sm:px-6 space-y-4">
      {/* KONAN réagit (inactivité, réponses au hasard, série de bonnes réponses…) */}
      <KonanCoachBubble message={coach.message} onDismiss={coach.dismiss} onAction={coach.imHere} />
      {kickPrompt}
      {/* 1. BARRE DE PROGRESSION STYLE DUOLINGO (TOP) : toute la largeur, bien visible sur téléphone */}
      <div className="space-y-2 w-full pb-1">
        <div className="flex items-center gap-2.5 w-full">
          {/* Barre de progression continue Style Duolingo (Couleur Bleue) */}
          <div className="flex-1 min-w-0 h-4 sm:h-5 bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden border border-slate-300 dark:border-slate-800/80 p-0.5 shadow-inner">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 dark:from-blue-500 dark:via-indigo-500 dark:to-cyan-400 transition-all duration-500 ease-out relative shadow-sm"
              style={{ width: `${Math.min(100, Math.max(0, (barDone / barTotal) * 100))}%` }}
            >
              <div className="absolute top-0.5 left-2 right-2 h-1 bg-white/35 rounded-full" />
            </div>
          </div>

          {/* Badge de score X/totalSteps */}
          <div className="shrink-0 px-2.5 py-1 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-black font-mono tabular-nums">
            {barDone} / {barTotal}
          </div>
        </div>
        {/* Chrono (Pomodoro / Time Blocking) sur sa propre ligne : jamais caché ni coupé */}
        {pomodoroPill && <div className="flex justify-end">{pomodoroPill}</div>}
      </div>

      {/* 2. FIL D'ARIANE / CONTEXTE DE LA LEÇON */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1 pb-1 border-b border-slate-100 dark:border-slate-800/60">
        <div className="flex items-center gap-2 break-words min-w-0">
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0"
            style={{ backgroundColor: subjectMeta.color }}
          />
          <span className="font-extrabold uppercase tracking-wide text-slate-700 dark:text-slate-300 break-words min-w-0">
            {phase === 'warmup'
              ? `${subjectTitle} • ${subCategoryLabel} • Révision du jour`
              : `${subjectTitle} • ${subCategoryLabel} • Ch. ${currentItem.chapterOrder} • Mini-leçon ${activeItemIndex + 1} sur ${items.length} de la séance`}
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {(phase === 'warmup' || phase === 'recall') && (
            <span className="px-2 py-0.5 rounded-full bg-violet-500/15 border border-violet-500/30 text-violet-700 dark:text-violet-300 text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
              <Brain className="w-3 h-3" />
              <span>{phase === 'warmup' ? 'Révision espacée' : 'Rappel de mémoire'}</span>
            </span>
          )}
          {phase === 'catchup' && (
            <span className="px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-[10px] font-black uppercase tracking-wider flex items-center gap-1 animate-pulse">
              <RotateCcw className="w-3 h-3" />
              <span>Rattrapage</span>
            </span>
          )}

          {phase !== 'warmup' && phase !== 'recall' && (
            <div className="flex items-center gap-1.5 font-bold text-indigo-600 dark:text-indigo-400">
              <Target className="w-3.5 h-3.5" />
              <span>Étape {activeStepIndex + 1}/{totalSteps} · {totalSteps}/{totalSteps} requis</span>
            </div>
          )}
        </div>
      </div>

      {/* =================================================================== */}
      {/* MODE DUOLINGO : 1 SEUL POINT DE COURS -> 1 QCM -> SUIVANT           */}
      {/* =================================================================== */}
      {questionPhase && activeExercise && activeCourseSlice && (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-200">
          {/* Question DE MÉMOIRE : la fiche reste cachée tant que l'élève n'a pas répondu */}
          {retrievalMode && !isAnswerChecked && (
            <div className="p-3.5 rounded-2xl bg-violet-50/80 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-700/60 flex items-center gap-3">
              <Brain className="w-5 h-5 text-violet-600 dark:text-violet-300 shrink-0" />
              <p className="text-xs sm:text-sm font-bold text-violet-900 dark:text-violet-100 leading-snug">
                {phase === 'warmup'
                  ? 'Révision du jour : une question déjà vue revient. Réponds de mémoire, sans regarder le cours.'
                  : phase === 'recall'
                  ? 'Rappel de mémoire : sans regarder la fiche, montre ce que tu as retenu de cette leçon.'
                  : 'De mémoire d’abord : réponds sans la fiche. Elle s’affichera si tu te trompes.'}
              </p>
            </div>
          )}

          {/* PARTIE 1 : LA CARTE DE COURS PROGRESSIVE (1 POINT À LA FOIS OU ÉNONCÉ D'EXERCICE) */}
          {showCourseCard && (
          <div className={`p-4 sm:p-6 rounded-2xl border-2 space-y-4 shadow-sm ${
            activeCourseSlice.stepKind
              ? STEP_KIND_STYLE[activeCourseSlice.stepKind].card
              : 'bg-white dark:bg-slate-900 border-indigo-100 dark:border-slate-800'
          }`}>
            <div className="flex items-center justify-between gap-2 border-b border-slate-200/70 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 min-w-0">
                {activeCourseSlice.stepKind ? (
                  <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0 ${STEP_KIND_STYLE[activeCourseSlice.stepKind].chip}`}>
                    {STEP_KIND_STYLE[activeCourseSlice.stepKind].label}
                  </span>
                ) : (
                  <BookOpen className="w-4 h-4 shrink-0" />
                )}
                <span className="text-[11px] font-black uppercase tracking-wider break-words min-w-0">
                  {retrievalMode ? `Rappel du cours · ${activeCourseSlice.stepBadge}` : activeCourseSlice.stepBadge}
                </span>
              </div>
              {!retrievalMode && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">
                  Étape {activeStepIndex + 1} / {totalSteps}
                </span>
              )}
            </div>

            {/* Contenu structuré avec le code couleur pédagogique Bleu / Violet (Liaison 1-pour-1 avec le QCM) */}
            {activeCourseSlice.paragraphText && (
              <PedagogicalParagraph text={activeCourseSlice.paragraphText} />
            )}

            {/* Formule ou Propriété Clé associée à ce point précis */}
            {activeCourseSlice.formula && (
              <SmartKeyFormulaBox
                name={activeCourseSlice.formula.name}
                formula={activeCourseSlice.formula.formula}
                note={activeCourseSlice.formula.note}
              />
            )}

            {/* Support Visuel / Schéma si présent */}
            {activeCourseSlice.visualSchema && (
              <VisualSchemaRenderer schema={activeCourseSlice.visualSchema} />
            )}

            {/* Astuce Konan si présente */}
            {activeCourseSlice.konanTip && (
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-indigo-50/90 to-cyan-50/70 dark:from-indigo-950/40 dark:to-cyan-950/20 border border-indigo-200/80 dark:border-indigo-500/30 flex items-start gap-3 shadow-2xs">
                <div className="shrink-0 pt-0.5">
                  <KonanCube size={40} showStars={true} glow={true} />
                </div>
                <div className="space-y-1 min-w-0 flex-1">
                  <span className="text-[11px] font-black uppercase tracking-wider text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-amber-500 fill-amber-500" />
                    <span>L'Astuce du Professeur Konan</span>
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
                    <MathRenderer text={activeCourseSlice.konanTip} />
                  </p>
                </div>
              </div>
            )}
          </div>
          )}

          {/* PARTIE 2 : LE TEST DE COMPRÉHENSION IMMÉDIAT (ADAPTÉ STRICTEMENT À L'ÉTAPE) */}
          <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                <Target className="w-4 h-4" />
                <span>
                  {phase === 'warmup'
                    ? `Révision ${warmupIndex + 1}/${warmupItems.length} · De mémoire`
                    : phase === 'recall'
                    ? `Rappel ${recallIndex + 1}/${recallSteps.length} · De mémoire`
                    : activeCourseSlice.stepBadge
                    ? `${activeCourseSlice.stepBadge} · Test de compréhension`
                    : `QCM ${activeStepIndex + 1}/${totalSteps} · Compréhension`}
                </span>
              </span>

              {phase === 'catchup' && (
                <span className="px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5 animate-pulse">
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Rattrapage</span>
                </span>
              )}
            </div>

            {/* Énoncé de la question */}
            <div className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white leading-relaxed">
              <MathRenderer text={activeExercise.prompt} />
            </div>

            {/* Support Visuel de la question si présent */}
            {activeExercise.visualSchema && (
              <VisualSchemaRenderer schema={activeExercise.visualSchema} />
            )}

            {/* Options QCM / Vrai-Faux */}
            {activeExercise.options && activeExercise.options.length > 0 && (
              <div className="grid gap-2.5">
                {activeExercise.options.map((opt, oIdx) => {
                  const isSelected = selectedOptionIndex === oIdx;
                  const letter = String.fromCharCode(65 + oIdx);

                  let btnStyle = 'bg-white dark:bg-slate-900/90 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-indigo-400 dark:hover:border-indigo-500 shadow-2xs';

                  if (isSelected && !isAnswerChecked) {
                    btnStyle = 'bg-indigo-50 dark:bg-indigo-950/70 border-indigo-600 dark:border-indigo-400 text-indigo-900 dark:text-indigo-200 shadow-sm ring-2 ring-indigo-500/20';
                  }

                  if (isAnswerChecked) {
                    if (oIdx === activeExercise.correctAnswerIndex) {
                      btnStyle = 'bg-emerald-50 dark:bg-emerald-950/70 border-emerald-500 text-emerald-900 dark:text-emerald-200 ring-2 ring-emerald-500/30';
                    } else if (isSelected && !isAnswerCorrect) {
                      btnStyle = 'bg-rose-50 dark:bg-rose-950/70 border-rose-500 text-rose-900 dark:text-rose-200 ring-2 ring-rose-500/30';
                    } else {
                      btnStyle = 'opacity-40 border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-slate-500';
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      type="button"
                      disabled={isAnswerChecked}
                      onClick={() => handleSelectOption(oIdx)}
                      className={`w-full p-3.5 sm:p-4 rounded-xl border-2 text-left font-semibold text-xs sm:text-sm flex items-start justify-between gap-3 transition-all cursor-pointer disabled:cursor-default select-none touch-manipulation active:scale-[0.99] ${btnStyle}`}
                    >
                      <div className="flex items-start gap-3 min-w-0 pointer-events-none">
                        <span
                          className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center shrink-0 mt-0.5 ${
                            isSelected
                              ? 'bg-indigo-600 text-white'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                          }`}
                        >
                          {letter}
                        </span>
                        <div className="leading-snug pt-0.5 pointer-events-none">
                          <MathRenderer text={opt} />
                        </div>
                      </div>

                      {isAnswerChecked && oIdx === activeExercise.correctAnswerIndex && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 pointer-events-none" />
                      )}
                      {isAnswerChecked && isSelected && !isAnswerCorrect && (
                        <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 pointer-events-none" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {/* RÉACTION ENTHOUSIASTE ET BULLE DE DIALOGUE DE LA MASCOTTE KONAN */}
            {isAnswerChecked && (
              <div
                className={`p-4 sm:p-5 rounded-2xl border-2 space-y-3 animate-in zoom-in-95 duration-200 ${
                  isAnswerCorrect
                    ? 'bg-emerald-50/90 dark:bg-emerald-950/50 border-emerald-500 shadow-md shadow-emerald-500/10'
                    : 'bg-amber-50/90 dark:bg-amber-950/40 border-amber-500 shadow-md shadow-amber-500/10'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div className="shrink-0 pt-0.5">
                    <KonanCube size={50} showStars={isAnswerCorrect} glow={true} />
                  </div>
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      {isAnswerCorrect ? (
                        <div className="w-full flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 stroke-[2.5]" />
                            <span className="text-sm sm:text-base font-black text-emerald-900 dark:text-emerald-200">
                              Bravo !
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setShowExplanation(prev => !prev)}
                            className="px-3 py-1 rounded-xl text-xs font-bold border border-emerald-300 dark:border-emerald-700/80 bg-white dark:bg-slate-900 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-slate-800 transition-colors cursor-pointer flex items-center gap-1.5 shadow-2xs"
                          >
                            <HelpCircle className="w-3.5 h-3.5" />
                            <span>{showExplanation ? 'Masquer' : 'Pourquoi ?'}</span>
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 stroke-[2.5]" />
                            <span className="text-xs sm:text-sm font-black text-amber-900 dark:text-amber-200">
                              Ce n'est pas la bonne réponse. Regarde la correction :
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Justification : affichée directement si faute, ou à la demande si succès */}
                    {(!isAnswerCorrect || showExplanation) && (
                      <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium bg-white/80 dark:bg-slate-900/80 p-3 rounded-xl border border-slate-200/60 dark:border-slate-800 space-y-1.5 animate-in fade-in duration-150">
                        {!isAnswerCorrect && activeExercise.options && activeExercise.correctAnswerIndex !== undefined && (
                          <p className="font-bold text-emerald-700 dark:text-emerald-400">
                            Bonne réponse : <MathRenderer text={activeExercise.options[activeExercise.correctAnswerIndex]} />
                          </p>
                        )}
                        <MathRenderer text={activeExercise.explanation} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Bouton d'Action Duolingo */}
            <div className="pt-2">
              {!isAnswerChecked ? (
                <button
                  type="button"
                  disabled={selectedOptionIndex === null}
                  onClick={handleVerifyAnswer}
                  className={`w-full py-4 px-6 rounded-2xl font-black text-sm sm:text-base tracking-wide uppercase transition-all flex items-center justify-center gap-2 select-none ${
                    selectedOptionIndex !== null
                      ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_5px_0_#3730A3] active:translate-y-1 cursor-pointer'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 border border-slate-300 dark:border-slate-700 cursor-not-allowed opacity-60'
                  }`}
                >
                  <span>
                    {selectedOptionIndex === null
                      ? 'Sélectionne une réponse ci-dessus'
                      : 'Vérifier ma compréhension'}
                  </span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleContinueAfterFeedback}
                  className={`w-full py-4 px-6 rounded-2xl font-black text-sm sm:text-base tracking-wide uppercase transition-all cursor-pointer flex items-center justify-center gap-2 select-none active:translate-y-1 ${
                    isAnswerCorrect
                      ? 'bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-white shadow-[0_5px_0_#065f46] hover:shadow-[0_2px_0_#065f46] dark:shadow-[0_0_20px_rgba(16,185,129,0.35)]'
                      : 'bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 text-white border border-amber-300/60 dark:border-amber-400/50 shadow-[0_5px_0_#d97706] hover:shadow-[0_2px_0_#d97706] dark:shadow-[0_0_20px_rgba(245,158,11,0.35)] dark:hover:shadow-[0_0_25px_rgba(245,158,11,0.5)]'
                  }`}
                >
                  <span>
                    {phase === 'warmup' || phase === 'recall'
                      ? (isLastQuestionOfPhase
                        ? (phase === 'warmup' ? 'Passer à la leçon du jour' : 'Terminer la mini-leçon')
                        : 'Question suivante')
                      : phase === 'catchup'
                      ? (isAnswerCorrect ? "Continuer le rattrapage" : "Question suivante")
                      : isAnswerCorrect
                        ? (activeStepIndex === totalSteps - 1 ? "Terminer et valider la mini-leçon" : "Continuer vers l'étape suivante")
                        : (activeStepIndex === totalSteps - 1 ? "Passer à la boucle de rattrapage" : "J'ai compris, étape suivante")}
                  </span>
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* CÉLÉBRATION D'UNE MINI-LEÇON VALIDÉE À 8/8                          */}
      {/* =================================================================== */}
      {phase === 'point_celebration' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border-2 border-emerald-400 dark:border-emerald-500/40 text-center space-y-5 animate-in zoom-in-95 duration-200 shadow-xl">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
            <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
          </div>

          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs font-black uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Leçon validée avec succès</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {currentPoint?.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
              Parfait ! Tu as validé l'ensemble des exercices de cette notion clé. Tes connaissances sont solides et prêtes pour les devoirs et interrogations de classe.
            </p>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={handleContinueToNextLesson}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-white font-black text-xs sm:text-sm tracking-wide uppercase shadow-[0_5px_0_#065f46] hover:shadow-[0_2px_0_#065f46] dark:shadow-[0_0_20px_rgba(16,185,129,0.35)] active:translate-y-1 transition-all cursor-pointer flex items-center justify-center gap-2 mx-auto"
            >
              <span className="flex items-center gap-2">
                {activeItemIndex < items.length - 1
                  ? `Passer à la mini-leçon suivante (${activeItemIndex + 2}/${items.length})`
                  : 'Terminer la séance d’étude'}
                {activeItemIndex < items.length - 1 && <ArrowRight className="w-4 h-4 stroke-[2.5]" />}
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
