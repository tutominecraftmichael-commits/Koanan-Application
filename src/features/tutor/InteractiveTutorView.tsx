// ============================================================================
// KONAN Interactive Tutor - Programme Officiel CI (Maths, Physique-Chimie, SVT)
// ============================================================================
import React, { useState, useEffect, useMemo } from 'react';
import {
  X,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  RotateCcw,
  Award,
  Calculator,
  Atom,
  Dna,
  Zap,
  Check,
  Target,
  Brain,
  FileCheck2,
  Lightbulb
} from 'lucide-react';
import type {
  CurriculumChapter,
  CurriculumGradeLevel,
  CurriculumPoint,
  InteractiveExercise,
  PointFormula,
  PointVisualSchema,
  StemSubjectId,
  TutorPointSessionItem,
  TutorSessionPayload
} from '../../lib/curriculum/types';
import { STEM_SUBJECTS } from '../../lib/curriculum/types';
import { getCurriculumChapters } from '../../lib/curriculum/curriculumRegistry';
import {
  buildTutorSessionPayload,
  getStudentProgressMap,
  initializeSubjectPosition,
  recordCompletedTutorSession
} from '../../lib/curriculum/studentProgressService';
import { soundFX } from '../../lib/audioEffects';
import { KonanCube } from '../../components/common/KonanCube';
import { MathRenderer, MathFormula, VisualSchemaRenderer } from '../../components/common/MathRenderer';

export interface InteractiveTutorViewProps {
  userId: string;
  subjectTitle: string;
  gradeLevel: CurriculumGradeLevel;
  stemSubjectId: StemSubjectId;
  studySessionId?: string;
  durationMinutes?: number;
  onExit: () => void;
  onSessionCompleted: (sessionId?: string, earnedPoints?: number) => void;
}

type LessonPhase =
  | 'intro' // Écran d'introduction animé avant de commencer la leçon (Étape 0)
  | 'learning' // Cours continu progressif + Test de compréhension immédiat à chaque étape (1/8 à 8/8)
  | 'catchup' // Boucle de rattrapage (Rappel du cours ciblé + Question manquée) pour atteindre 8/8
  | 'point_celebration' // Validation d'une mini-leçon à 8/8
  | 'session_celebration'; // Victoire globale de la séance d'EDT (toutes mini-leçons à 8/8)

interface ProgressiveCourseSlice {
  stepBadge: string;
  stepTitle: string;
  paragraphs: string[];
  formulas: PointFormula[];
  keyRule?: string;
  visualSchema?: PointVisualSchema;
  workedExamplePart?: {
    title: string;
    statement: string;
    steps: { index: number; text: string }[];
    conclusion?: string;
  };
}

/**
 * Découpe intelligemment le cours d'une mini-leçon en 8 séquences pédagogiques progressives
 * afin que chaque étape (1/8 à 8/8) associe un bloc de cours ciblé et son test de compréhension immédiat.
 */
function buildProgressiveCourseSlice(point: CurriculumPoint, stepIndex: number): ProgressiveCourseSlice {
  const rawParagraphs = point.conceptExplanation
    .split(/\n\s*\n/)
    .map(p => p.trim())
    .filter(Boolean);

  const paragraphs = rawParagraphs.length > 0 ? rawParagraphs : [point.conceptExplanation];
  const formulas = point.formulas || [];
  const ex = point.workedExample;
  const methodSteps = ex?.methodSteps || [];
  const halfStepIndex = Math.max(1, Math.ceil(methodSteps.length / 2));

  switch (stepIndex) {
    case 0:
      // Étape 1/8 : Introduction & Notion Fondamentale
      return {
        stepBadge: 'Cours • Étape 1/8 : Notion Fondamentale',
        stepTitle: `Comprendre l'essentiel : ${point.title}`,
        paragraphs: [point.summary, paragraphs[0]].filter(Boolean),
        formulas: formulas.slice(0, 1),
        visualSchema: point.visualSchema,
      };

    case 1:
      // Étape 2/8 : Mécanisme & Règles Opératoires
      return {
        stepBadge: 'Cours • Étape 2/8 : Propriétés & Règles du Cours',
        stepTitle: 'Mécanisme et principes d’application',
        paragraphs: [paragraphs[1] || paragraphs[0]],
        formulas: formulas.length > 1 ? [formulas[1]] : formulas.slice(0, 1),
        visualSchema: point.visualSchema,
      };

    case 2:
      // Étape 3/8 : Approfondissement & Formules Clés
      return {
        stepBadge: 'Cours • Étape 3/8 : Approfondissement Technique',
        stepTitle: 'Maîtriser les transformations et cas particuliers',
        paragraphs: paragraphs.length > 2 ? paragraphs.slice(2) : [paragraphs[paragraphs.length - 1]],
        formulas: formulas.length > 2 ? formulas.slice(2) : formulas,
        visualSchema: point.visualSchema,
      };

    case 3:
      // Étape 4/8 : Réflexe d'Examen National & Pièges à Éviter
      return {
        stepBadge: 'Cours • Étape 4/8 : Réflexe d’Examen & Pièges',
        stepTitle: 'La règle d’or pour ne perdre aucun point au devoir',
        paragraphs: [
          'Lors des devoirs surveillés et examens nationaux (BEPC / BAC), la majorité des erreurs proviennent d’une application mécanique sans vérifier les conditions du cours.',
        ],
        formulas: formulas,
        keyRule: point.keyRule,
        visualSchema: point.visualSchema,
      };

    case 4:
      // Étape 5/8 : Exemple Concret Résolu — Partie 1 (Analyse de l'énoncé & Mise en place)
      return {
        stepBadge: 'Cours • Étape 5/8 : Exemple Résolu (Analyse & Démarrage)',
        stepTitle: ex ? `${ex.title} — 1ère partie` : 'Mise en situation concrète',
        paragraphs: [
          'Observons maintenant comment appliquer rigoureusement le cours sur un exercice type examen. Commençons par analyser l’énoncé et poser les premières étapes de résolution :',
        ],
        formulas: formulas.slice(0, 1),
        visualSchema: ex?.visualSchema || point.visualSchema,
        workedExamplePart: ex
          ? {
            title: ex.title,
            statement: ex.statement,
            steps: methodSteps.slice(0, halfStepIndex).map((t, i) => ({ index: i + 1, text: t })),
          }
          : undefined,
      };

    case 5:
      // Étape 6/8 : Exemple Concret Résolu — Partie 2 (Développement & Conclusion)
      return {
        stepBadge: 'Cours • Étape 6/8 : Exemple Résolu (Calcul & Conclusion)',
        stepTitle: ex ? `${ex.title} — Résolution finale` : 'Aboutissement et rédaction',
        paragraphs: [
          'Poursuivons la résolution pas-à-pas jusqu’à la conclusion finale telle qu’elle est exigée sur ta copie d’examen :',
        ],
        formulas: [],
        visualSchema: ex?.visualSchema || point.visualSchema,
        workedExamplePart: ex
          ? {
            title: ex.title,
            statement: ex.statement,
            steps: methodSteps.slice(halfStepIndex).map((t, i) => ({ index: halfStepIndex + i + 1, text: t })),
            conclusion: ex.conclusion,
          }
          : undefined,
      };

    case 6:
      // Étape 7/8 : Méthode Complète de Résolution Guidée
      return {
        stepBadge: 'Cours • Étape 7/8 : Méthode de Rédaction Complète',
        stepTitle: 'Le protocole méthodologique complet à retenir',
        paragraphs: [
          'Avant de résoudre ce cas d’entraînement autonome, garde sous les yeux l’enchaînement complet de la méthode :',
        ],
        formulas: formulas.slice(-1),
        keyRule: point.keyRule,
        visualSchema: point.visualSchema,
        workedExamplePart: ex
          ? {
            title: 'Récapitulatif de la démarche modèle',
            statement: ex.statement,
            steps: methodSteps.map((t, i) => ({ index: i + 1, text: t })),
            conclusion: ex.conclusion,
          }
          : undefined,
      };

    default:
      // Étape 8/8 : Fiche Synthèse Express & Défi Final de Maîtrise
      return {
        stepBadge: 'Cours • Étape 8/8 : Synthèse Générale & Défi Final',
        stepTitle: `Synthèse Express : ${point.title}`,
        paragraphs: [point.summary],
        formulas: formulas,
        keyRule: point.keyRule,
        visualSchema: point.visualSchema,
      };
  }
}

export const InteractiveTutorView: React.FC<InteractiveTutorViewProps> = ({
  userId,
  subjectTitle,
  gradeLevel,
  stemSubjectId,
  studySessionId,
  durationMinutes = 25,
  onExit,
  onSessionCompleted,
}) => {
  // 1. Détecter si le chapitre actuel est déjà positionné
  const progressMap = useMemo(() => getStudentProgressMap(userId), [userId]);
  const subjectProgress = progressMap[stemSubjectId];

  const availableChapters = useMemo(() => {
    const list = getCurriculumChapters(stemSubjectId, gradeLevel);
    return list && list.length > 0 ? list : getCurriculumChapters('maths', 'terminale_d');
  }, [stemSubjectId, gradeLevel]);

  // Si aucun chapitre positionné, ouvrir le diagnostic de positionnement
  const [showChapterSelector, setShowChapterSelector] = useState<boolean>(() => {
    return !subjectProgress || !subjectProgress.positioningCompleted || !subjectProgress.currentChapterId;
  });

  // Sélection initiale active façon Duolingo (null par défaut)
  const [selectedChapter, setSelectedChapter] = useState<CurriculumChapter | null>(null);

  // Payload de la session en cours
  const [sessionPayload, setSessionPayload] = useState<TutorSessionPayload | null>(null);

  // Index de la mini-leçon active parmi le quota de la session (0..itemsToReview.length - 1)
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);

  // Phase au sein de la mini-leçon active (démarre sur l'écran d'introduction animé avant l'étape 1/8)
  const [phase, setPhase] = useState<LessonPhase>('intro');

  // Index de l'étape/exercice actif dans la phase 'learning' (0..7 pour les 8 étapes)
  const [exerciseIndex, setExerciseIndex] = useState<number>(0);

  // Options sélectionnées et état de validation pour le test de compréhension en cours
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState<boolean>(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false);

  // Indices des étapes manquées au premier passage (pour la boucle de rattrapage)
  const [missedIndices, setMissedIndices] = useState<number[]>([]);

  // File d'attente pour la boucle de rattrapage
  const [catchupQueue, setCatchupQueue] = useState<number[]>([]);
  const [currentCatchupQueueIndex, setCurrentCatchupQueueIndex] = useState<number>(0);

  // Statistiques globales de la séance
  const [totalFirstTryCorrect, setTotalFirstTryCorrect] = useState<number>(0);
  const [totalExercisesAnswered, setTotalExercisesAnswered] = useState<number>(0);
  const [showExitConfirmModal, setShowExitConfirmModal] = useState<boolean>(false);

  // Charger ou recharger le payload de session
  const refreshSessionPayload = () => {
    const res = buildTutorSessionPayload(userId, stemSubjectId, subjectTitle, gradeLevel, durationMinutes);
    if (res.needsPositioning) {
      setShowChapterSelector(true);
      return;
    }
    if (res.payload && res.payload.itemsToReview.length > 0) {
      setSessionPayload(res.payload);
      setActiveItemIndex(0);
      setPhase('intro');
      setExerciseIndex(0);
      setSelectedOptionIndex(null);
      setIsAnswerChecked(false);
      setIsAnswerCorrect(false);
      setMissedIndices([]);
      setCatchupQueue([]);
      setCurrentCatchupQueueIndex(0);
    }
  };

  useEffect(() => {
    if (!showChapterSelector) {
      refreshSessionPayload();
    }
  }, [showChapterSelector, userId, stemSubjectId, gradeLevel, subjectTitle, durationMinutes]);

  // Validation du diagnostic initial (positionnement de chapitre)
  const handleConfirmInitialChapter = (chapterId: string) => {
    soundFX.playCheckmarkPop();
    initializeSubjectPosition(userId, stemSubjectId, gradeLevel, chapterId);
    setShowChapterSelector(false);
    refreshSessionPayload();
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

  // Index effectif de l'étape en cours (soit progression normale 0..7, soit l'étape ciblée en rattrapage)
  const activeStepIndex: number = useMemo(() => {
    if (phase === 'catchup') {
      return catchupQueue[currentCatchupQueueIndex] ?? 0;
    }
    return exerciseIndex;
  }, [phase, exerciseIndex, catchupQueue, currentCatchupQueueIndex]);

  // Exercice de compréhension associé à l'étape active
  const activeExercise: InteractiveExercise | undefined = useMemo(() => {
    if (phase === 'learning' || phase === 'catchup') {
      return pointExercises[activeStepIndex];
    }
    return undefined;
  }, [phase, activeStepIndex, pointExercises]);

  // Portion du cours progressif associée à l'étape active
  const activeCourseSlice: ProgressiveCourseSlice | null = useMemo(() => {
    if (!currentPoint) return null;
    return buildProgressiveCourseSlice(currentPoint, activeStepIndex);
  }, [currentPoint, activeStepIndex]);

  // Icône dynamique de matière
  const SubjectIcon = useMemo(() => {
    if (stemSubjectId === 'maths') return Calculator;
    if (stemSubjectId === 'physique_chimie') return Atom;
    return Dna;
  }, [stemSubjectId]);

  // =========================================================================
  // ACTIONS PÉDAGOGIQUES
  // =========================================================================

  // 1. Valider la réponse choisie par l'élève (Règle : Pas de "Réessayer" immédiat si faux)
  const handleVerifyAnswer = () => {
    if (!activeExercise || selectedOptionIndex === null || isAnswerChecked) return;

    const isCorrect = selectedOptionIndex === activeExercise.correctAnswerIndex;
    setIsAnswerChecked(true);
    setIsAnswerCorrect(isCorrect);
    setTotalExercisesAnswered(prev => prev + 1);

    if (phase === 'learning') {
      if (isCorrect) {
        soundFX.playCheckmarkPop();
        setTotalFirstTryCorrect(prev => prev + 1);
      } else {
        soundFX.playStudyAlertAlarm();
        // Enregistrer l'étape manquée pour la boucle de rattrapage en fin de mini-leçon
        if (!missedIndices.includes(exerciseIndex)) {
          setMissedIndices(prev => [...prev, exerciseIndex]);
        }
      }
    } else if (phase === 'catchup') {
      if (isCorrect) {
        soundFX.playCheckmarkPop();
      } else {
        soundFX.playStudyAlertAlarm();
      }
    }
  };

  // 2. Bouton "Continuer" après avoir pris connaissance de la correction détaillée
  const handleContinueAfterFeedback = () => {
    soundFX.playStreakIgniteChime();
    setSelectedOptionIndex(null);
    setIsAnswerChecked(false);
    setIsAnswerCorrect(false);

    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // --- PHASE D'APPRENTISSAGE CONTINU (ÉTAPES 1 À 8) ---
    if (phase === 'learning') {
      const totalAvailable = pointExercises.length || 8;
      if (exerciseIndex < totalAvailable - 1) {
        // Avancer à la séquence de cours + test suivante
        setExerciseIndex(prev => prev + 1);
        return;
      }

      // Fin des 8 étapes du premier passage : Vérifier si des erreurs ont été commises
      if (missedIndices.length > 0) {
        // Enclencher la boucle de rattrapage obligatoire pour atteindre 8/8
        setCatchupQueue([...missedIndices]);
        setCurrentCatchupQueueIndex(0);
        setPhase('catchup');
        return;
      }

      // Parfait ! 8/8 du premier coup !
      handleMiniLessonValidated();
      return;
    }

    // --- PHASE BOUCLE DE RATTRAPAGE ---
    if (phase === 'catchup') {
      if (isAnswerCorrect) {
        // L'étape de rattrapage a été comprise et réussie : la retirer de la file
        const nextQueue = catchupQueue.filter((_, idx) => idx !== currentCatchupQueueIndex);
        setCatchupQueue(nextQueue);

        if (nextQueue.length === 0) {
          // Toutes les erreurs ont été rattrapées et maîtrisées : 8/8 validé !
          handleMiniLessonValidated();
          return;
        }

        // Il reste d'autres étapes à rattraper
        setCurrentCatchupQueueIndex(0);
      } else {
        // L'élève a encore échoué au rattrapage : la question reste dans la file jusqu'à maîtrise complète
        setCurrentCatchupQueueIndex(prev => (prev + 1) % catchupQueue.length);
      }
    }
  };

  // 3. Validation officielle de la mini-leçon à 8/8
  const handleMiniLessonValidated = () => {
    soundFX.playSuccessChime();
    setPhase('point_celebration');
  };

  // 4. Passer à la mini-leçon suivante du quota OU Célébrer la fin de séance
  const handleAdvanceToNextLessonOrFinish = () => {
    soundFX.playCheckmarkPop();

    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (items.length > 0 && activeItemIndex < items.length - 1) {
      // Transition accueillante vers l'écran d'introduction de la mini-leçon suivante
      setActiveItemIndex(prev => prev + 1);
      setPhase('intro');
      setExerciseIndex(0);
      setSelectedOptionIndex(null);
      setIsAnswerChecked(false);
      setIsAnswerCorrect(false);
      setMissedIndices([]);
      setCatchupQueue([]);
      setCurrentCatchupQueueIndex(0);
      return;
    }

    // Toutes les mini-leçons du quota ont été validées à 8/8 !
    soundFX.playVictoryCelebration();
    setPhase('session_celebration');

    // Enregistrer la progression dans le service
    recordCompletedTutorSession(
      userId,
      stemSubjectId,
      items,
      totalFirstTryCorrect,
      totalExercisesAnswered
    );
  };

  // 5. Fermeture finale et validation dans l'emploi du temps
  const handleFinishAndExit = () => {
    const earnedXp = Math.max(50, items.length * 20);
    onSessionCompleted(studySessionId, earnedXp);
  };

  // =========================================================================
  // VUE 1 : DIAGNOSTIC INITIAL (OÙ EN ÊTES-VOUS EN CLASSE ?)
  // =========================================================================
  if (showChapterSelector) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
        <div className="max-w-xl w-full bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5 animate-in zoom-in-95 duration-200 my-auto">
          {/* En-tête */}
          <div className="flex items-center gap-4">
            <div className="shrink-0">
              <KonanCube size={54} showStars={false} glow={true} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-700 dark:text-indigo-300">
                  {subjectTitle}
                </span>
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                  {availableChapters.length} chapitres officiels
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-tight mt-1">
                À quel chapitre êtes-vous arrivés en classe ?
              </h2>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Pour que tes révisions soient 100% synchronisées avec ton professeur, clique sur ton chapitre actuel.
            KONAN commencera directement ici et poursuivra ensuite le programme officiel sans coupure.
          </p>

          {/* Indicateur de sélection en cours */}
          {selectedChapter ? (
            <div className="px-3.5 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700/60 flex items-center justify-between text-xs text-emerald-800 dark:text-emerald-300">
              <span className="font-bold flex items-center gap-1.5 truncate">
                <CheckCircle2 size={15} className="shrink-0 text-emerald-600 dark:text-emerald-400" />
                Chapitre sélectionné : Ch. {selectedChapter.order} — {selectedChapter.title}
              </span>
              <span className="text-[10px] font-mono shrink-0 ml-2 font-bold px-1.5 py-0.5 rounded bg-emerald-500/20">
                {selectedChapter.officialVolumeHours || 12}h
              </span>
            </div>
          ) : (
            <div className="px-3.5 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700/60 flex items-center gap-2 text-xs text-amber-800 dark:text-amber-300">
              <Sparkles size={14} className="shrink-0 text-amber-600 dark:text-amber-400" />
              <span>Clique sur un chapitre ci-dessous pour choisir ton point de départ.</span>
            </div>
          )}

          {/* Liste dynamique et défilable des chapitres (< 15 lignes de code) */}
          <div className="space-y-2 max-h-[48vh] overflow-y-auto pr-1">
            {availableChapters.length === 0 ? (
              <div className="text-center py-6 text-xs text-slate-400">Chargement des chapitres officiels...</div>
            ) : (
              availableChapters.map((ch) => (
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
                  <span className="text-xs sm:text-sm font-bold truncate">Ch. {ch.order} — {ch.title}</span>
                  <span className="text-[11px] font-mono text-slate-400 shrink-0 font-semibold">{ch.officialVolumeHours || 10}h</span>
                </button>
              ))
            )}
          </div>

          {/* Pied de page et Boutons d'action */}
          <div className="pt-2 flex items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={onExit}
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
              <span>{selectedChapter !== null ? 'Démarrer mes révisions ➔' : 'Sélectionne un chapitre'}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

// =========================================================================
// VUE 2 : CÉLÉBRATION GLOBALE DE FIN DE SÉANCE D'EDT
// =========================================================================
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
          <span>Quota de séance 100% validé (8/8 partout)</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Séance de {subjectTitle} Maîtrisée !
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-relaxed">
          Tu as validé avec succès l'intégralité des <strong>{items.length} mini-leçons</strong> avec le score d'excellence requis de <strong>8/8</strong>. Tes acquis sont maintenant gravés dans ta mémoire à long terme !
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
                <span className="font-extrabold text-slate-800 dark:text-slate-200 truncate">
                  {item.point.title}
                </span>
              </div>
              <span className="font-mono font-black text-emerald-600 dark:text-emerald-400 shrink-0 pl-2">
                8/8 ✓
              </span>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={handleFinishAndExit}
        className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-sm sm:text-base tracking-wide uppercase shadow-[0_5px_0_#065f46] active:translate-y-1 transition-all cursor-pointer flex items-center justify-center gap-2 mx-auto"
      >
        <span>Valider et Enregistrer dans mon planning 🚀</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}

// =========================================================================
// VUE 3 : ÉCRAN D'INTRODUCTION ANIMÉ DE LA MINI-LEÇON (ÉTAPE 0)
// =========================================================================
if (phase === 'intro' && currentItem && currentPoint) {
  const objectives = [
    `Comprendre les définitions fondamentales et propriétés clés de ${currentPoint.title}`,
    currentPoint.formulas && currentPoint.formulas.length > 0
      ? `Maîtriser et appliquer la formule : ${currentPoint.formulas[0].name}`
      : `Identifier les conditions d'application et la démarche rigoureuse`,
    currentPoint.keyRule
      ? `Retenir le réflexe d'examen : ${currentPoint.keyRule.slice(0, 85)}...`
      : `Éviter les erreurs classiques et pièges fréquents signalés aux examens`,
    `Réussir les 8 exercices de compréhension pour sécuriser la note maximale (8/8)`
  ];

  return (
    <div className="max-w-2xl mx-auto py-6 sm:py-10 px-4 space-y-6 text-center animate-in zoom-in-95 duration-300">
      {/* Top bar avec bouton quitter */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-slate-800">
        <button
          type="button"
          onClick={() => setShowExitConfirmModal(true)}
          className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          title="Quitter la séance"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0"
            style={{ backgroundColor: subjectMeta.color }}
          />
          <span className="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-400">
            {subjectTitle} • Leçon {activeItemIndex + 1}/{items.length}
          </span>
        </div>
      </div>

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
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          {currentPoint.title}
        </h1>
      </div>

      {/* Enjeu pour devoirs et examens */}
      <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/60 text-left space-y-2 shadow-xs">
        <div className="flex items-center gap-2 text-indigo-900 dark:text-indigo-200 font-black text-xs sm:text-sm">
          <Target className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
          <span>Pourquoi cette notion est essentielle pour tes devoirs & examens ?</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          Cette notion est un classique incontournable au programme officiel et aux examens nationaux (BEPC / BAC). La maîtriser aujourd'hui te permet de poser la démarche attendue par les correcteurs et d'obtenir tous les points dès la première lecture de ton sujet.
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
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bouton d'action rebondissant */}
      <div className="pt-2">
        <button
          type="button"
          onClick={() => {
            soundFX.playCheckmarkPop();
            setPhase('learning');
            setExerciseIndex(0);
          }}
          className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-white font-black text-sm sm:text-base tracking-wide uppercase shadow-[0_5px_0_#065f46] hover:shadow-[0_2px_0_#065f46] active:translate-y-1 transition-all cursor-pointer flex items-center justify-center gap-3 mx-auto animate-bounce hover:animate-none"
        >
          <span>C'est parti ! Commencer la leçon →</span>
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
        Chargement du programme officiel...
      </p>
    </div>
  );
}

const totalLessonPoints = items.length;
const currentItemNumber = activeItemIndex + 1;
const totalSteps = pointExercises.length || 8;
const progressPercent = phase === 'catchup'
  ? Math.min(100, Math.max(12, ((catchupQueue.length - currentCatchupQueueIndex) / (catchupQueue.length || 1)) * 100))
  : Math.min(100, Math.max(8, ((exerciseIndex + (isAnswerChecked && isAnswerCorrect ? 1 : 0)) / totalSteps) * 100));

return (
  <div className="max-w-3xl mx-auto py-4 sm:py-6 px-3 sm:px-6 space-y-4">
    {/* 1. BARRE DE PROGRESSION STYLE DUOLINGO (TOP) */}
    <div className="flex items-center gap-3 w-full pb-1">
      <button
        type="button"
        onClick={() => setShowExitConfirmModal(true)}
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-xs cursor-pointer shrink-0"
        title="Quitter la séance"
      >
        <X className="w-5 h-5 stroke-[2.5]" />
      </button>

      {/* Barre de progression fluide style Duolingo avec reflet brillant */}
      <div className="flex-1 min-w-0">
        <div className="relative w-full h-3.5 sm:h-4 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden p-0.5 shadow-inner">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 transition-all duration-500 ease-out relative shadow-sm"
            style={{ width: `${progressPercent}%` }}
          >
            {/* Reflet brillant 3D façon Duolingo */}
            <div className="absolute top-0.5 inset-x-1.5 h-1 bg-white/40 rounded-full pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Badge élégant d'étape / rattrapage */}
      <div className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs font-black text-slate-800 dark:text-slate-200 font-mono shadow-xs">
        <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
        <span>
          {phase === 'catchup'
            ? `Rattrapage ${currentCatchupQueueIndex + 1}/${catchupQueue.length}`
            : `Étape ${exerciseIndex + 1}/${totalSteps}`}
        </span>
      </div>
    </div>

    {/* 2. FIL D'ARIANE / CONTEXTE DE LA LEÇON */}
    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1 pb-1 border-b border-slate-100 dark:border-slate-800/60">
      <div className="flex items-center gap-2 truncate">
        <span
          className="w-2.5 h-2.5 rounded-full shrink-0"
          style={{ backgroundColor: subjectMeta.color }}
        />
        <span className="font-extrabold uppercase tracking-wide text-slate-700 dark:text-slate-300 truncate">
          {subjectTitle} • Ch. {currentItem.chapterOrder} : {currentItem.chapterTitle}
        </span>
      </div>
      <div className="flex items-center gap-1.5 shrink-0 font-bold text-indigo-600 dark:text-indigo-400">
        <Target className="w-3.5 h-3.5" />
        <span>Mini-leçon {currentItemNumber}/{totalLessonPoints}</span>
      </div>
    </div>

    {/* =================================================================== */}
    {/* COURS CONTINU + TEST DE COMPRÉHENSION IMMÉDIAT (ÉTAPES 1/8 À 8/8)   */}
    {/* =================================================================== */}
    {(phase === 'learning' || phase === 'catchup') && activeExercise && activeCourseSlice && (
      <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-200">
        {/* Bandeau de Rattrapage si en phase 'catchup' */}
        {phase === 'catchup' && (
          <div className="p-3.5 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-500/30 flex items-center gap-2.5 text-xs font-bold text-amber-900 dark:text-amber-200">
            <RotateCcw className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
            <span>
              🎯 <strong>Rattrapage obligatoire (Objectif 8/8)</strong> : Relis attentivement le point de cours ci-dessous puis réponds au test de compréhension pour valider cette notion !
            </span>
          </div>
        )}

        {/* PARTIE A : LE BLOC DE COURS PROGRESSIF DE L'ÉTAPE */}
        <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-indigo-100 dark:border-slate-800 space-y-4 shadow-sm">
          <div className="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
              <Sparkles className="w-4 h-4 shrink-0" />
              <span className="text-[11px] font-black uppercase tracking-wider">
                {activeCourseSlice.stepBadge}
              </span>
            </div>
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">
              Cours + Test {activeStepIndex + 1}/8
            </span>
          </div>

          <h2 className="text-base sm:text-xl font-black text-slate-900 dark:text-white leading-snug">
            <MathRenderer text={activeCourseSlice.stepTitle} />
          </h2>

          {/* Support Visuel / Schéma Géométrique ou Tableau Structuré */}
          {activeCourseSlice.visualSchema && (
            <VisualSchemaRenderer schema={activeCourseSlice.visualSchema} />
          )}

          {/* Paragraphes d'explication du cours pour cette étape */}
          <div className="space-y-2.5">
            {activeCourseSlice.paragraphs.map((para, pIdx) => (
              <div
                key={pIdx}
                className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium"
              >
                <MathRenderer text={para} />
              </div>
            ))}
          </div>

          {/* Formules ou Propriétés mises en évidence à cette étape (Rendu KaTeX académique) */}
          {activeCourseSlice.formulas.length > 0 && (
            <div className="p-3.5 sm:p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-500/30 space-y-2.5">
              <div className="flex items-center gap-1.5 text-indigo-900 dark:text-indigo-300 text-[11px] font-black uppercase tracking-wider">
                <SubjectIcon className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>Formule & Propriété Clé (Notation Officielle)</span>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {activeCourseSlice.formulas.map((form, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-indigo-100 dark:border-slate-800 space-y-1.5 shadow-2xs"
                  >
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 block">
                      <MathRenderer text={form.name} />
                    </span>
                    <div className="text-xs sm:text-sm font-black text-indigo-700 dark:text-indigo-300 overflow-x-auto py-1">
                      <MathFormula latex={form.formula} display={true} />
                    </div>
                    {form.note && (
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">
                        <MathRenderer text={form.note} />
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Exemple Résolu Pas-à-Pas (intégré aux étapes 5, 6 et 7) */}
          {activeCourseSlice.workedExamplePart && (
            <div className="p-3.5 sm:p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/25 border border-emerald-200 dark:border-emerald-500/30 space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 text-[11px] font-black uppercase tracking-wider">
                <FileCheck2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span><MathRenderer text={activeCourseSlice.workedExamplePart.title} /></span>
              </div>

              <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-emerald-100 dark:border-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200">
                <span className="font-black text-emerald-700 dark:text-emerald-400 mr-1.5">Énoncé :</span>
                <MathRenderer text={activeCourseSlice.workedExamplePart.statement} />
              </div>

              <div className="space-y-2">
                {activeCourseSlice.workedExamplePart.steps.map((st) => (
                  <div
                    key={st.index}
                    className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300"
                  >
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-black text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                      {st.index}
                    </span>
                    <div className="leading-relaxed font-medium">
                      <MathRenderer text={st.text} />
                    </div>
                  </div>
                ))}
              </div>

              {activeCourseSlice.workedExamplePart.conclusion && (
                <div className="pt-2 border-t border-emerald-200/70 dark:border-slate-800 flex items-start gap-2 text-xs font-bold text-emerald-900 dark:text-emerald-300">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5 stroke-[3]" />
                  <span>Conclusion : <MathRenderer text={activeCourseSlice.workedExamplePart.conclusion} /></span>
                </div>
              )}
            </div>
          )}

          {/* Règle d'or / Réflexe d'Examen */}
          {activeCourseSlice.keyRule && (
            <div className="p-3.5 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-500/30 flex items-start gap-2.5">
              <Zap className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-900 dark:text-amber-300 block">
                  Réflexe d'Examen National
                </span>
                <p className="text-xs font-bold text-amber-950 dark:text-amber-200 leading-relaxed">
                  <MathRenderer text={activeCourseSlice.keyRule} />
                </p>
              </div>
            </div>
          )}
        </div>

        {/* PARTIE B : TEST DE COMPRÉHENSION IMMÉDIAT SUR CE BLOC DE COURS */}
        <div className="p-4 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 space-y-4 shadow-xs">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
              <Brain className="w-4 h-4 shrink-0" />
              <span className="text-xs font-black uppercase tracking-wider">
                Test de Compréhension Immédiat ({activeStepIndex + 1}/8)
              </span>
            </div>
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
              <span>Applique ce que tu viens de lire</span>
            </span>
          </div>

          <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white leading-relaxed">
            <MathRenderer text={activeExercise.prompt} />
          </h3>

          {/* Support Visuel attaché à l'exercice si applicable */}
          {activeExercise.visualSchema && (
            <VisualSchemaRenderer schema={activeExercise.visualSchema} />
          )}

          {activeExercise.codeSnippet && (
            <div className="p-3 rounded-xl bg-slate-950 font-mono text-xs sm:text-sm text-cyan-300 overflow-x-auto border border-slate-800">
              {activeExercise.codeSnippet}
            </div>
          )}

          {/* Options de réponse */}
          {activeExercise.options && activeExercise.options.length > 0 && (
            <div className="space-y-2.5 pt-1">
              {activeExercise.options.map((opt, oIdx) => {
                const isSelected = selectedOptionIndex === oIdx;
                let optionStyle =
                  'bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-indigo-400';

                if (isAnswerChecked) {
                  if (oIdx === activeExercise.correctAnswerIndex) {
                    optionStyle =
                      'bg-emerald-50 dark:bg-emerald-950/60 border-2 border-emerald-500 text-emerald-950 dark:text-emerald-200';
                  } else if (isSelected && !isAnswerCorrect) {
                    optionStyle =
                      'bg-rose-50 dark:bg-rose-950/60 border-2 border-rose-500 text-rose-950 dark:text-rose-200';
                  } else {
                    optionStyle =
                      'bg-slate-100/70 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 text-slate-400 dark:text-slate-500 opacity-60';
                  }
                } else if (isSelected) {
                  optionStyle =
                    'bg-indigo-50 dark:bg-indigo-950/50 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-950 dark:text-white shadow-xs';
                }

                return (
                  <button
                    key={oIdx}
                    type="button"
                    disabled={isAnswerChecked}
                    onClick={() => setSelectedOptionIndex(oIdx)}
                    className={`w-full p-3.5 sm:p-4 rounded-2xl text-left font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-between gap-3 ${optionStyle}`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-black flex items-center justify-center shrink-0">
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      <div className="leading-relaxed">
                        <MathRenderer text={opt} />
                      </div>
                    </div>

                    {isAnswerChecked && oIdx === activeExercise.correctAnswerIndex && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    )}
                    {isAnswerChecked && isSelected && !isAnswerCorrect && (
                      <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* Feedback et Correction Détaillée (Règle stricte : Pas de réessai immédiat, explication complète) */}
          {isAnswerChecked && (
            <div
              className={`p-4 rounded-2xl border-2 space-y-2 animate-in fade-in duration-200 ${isAnswerCorrect
                ? 'bg-emerald-50/90 dark:bg-emerald-950/50 border-emerald-500'
                : 'bg-rose-50/90 dark:bg-rose-950/50 border-rose-500'
                }`}
            >
              <div className="flex items-center gap-2">
                {isAnswerCorrect ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 stroke-[2.5]" />
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-900 dark:text-emerald-300">
                      Parfait ! Notion bien comprise
                    </span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 stroke-[2.5]" />
                    <span className="text-xs font-black uppercase tracking-wider text-rose-900 dark:text-rose-300">
                      Correction Détaillée (Tu la revalideras en fin de leçon pour atteindre 8/8) :
                    </span>
                  </>
                )}
              </div>

              <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                <MathRenderer text={activeExercise.explanation} />
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
                className="w-full py-4 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white font-black text-sm sm:text-base tracking-wide uppercase shadow-[0_5px_0_#3730A3] active:translate-y-1 transition-all cursor-pointer disabled:cursor-not-allowed"
              >
                Vérifier ma compréhension
              </button>
            ) : (
              <button
                type="button"
                onClick={handleContinueAfterFeedback}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-sm sm:text-base tracking-wide uppercase shadow-[0_5px_0_#065f46] active:translate-y-1 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>
                  {phase === 'catchup'
                    ? 'Continuer le rattrapage'
                    : exerciseIndex < (pointExercises.length || 8) - 1
                      ? `Continuer le cours (Étape ${exerciseIndex + 2}/8)`
                      : missedIndices.length > 0
                        ? 'Passer au rattrapage des erreurs (Objectif 8/8)'
                        : 'Valider la mini-leçon (8/8)'}
                </span>
                <ArrowRight className="w-5 h-5" />
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
          <span className="text-xs font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Mini-leçon {currentItemNumber}/{totalLessonPoints} validée avec succès !
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
            Maîtrise Complète : 8 / 8 🎯
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
            Tu as étudié tout le cours et validé chaque test de compréhension sur <strong>« {currentPoint.title} »</strong>.
            {activeItemIndex < items.length - 1
              ? ' Poursuivons immédiatement avec la mini-leçon suivante de ta séance.'
              : ' Félicitations ! Toutes les mini-leçons prévues pour ce créneau sont validées.'}
          </p>
        </div>

        <button
          type="button"
          onClick={handleAdvanceToNextLessonOrFinish}
          className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-sm sm:text-base tracking-wide uppercase shadow-[0_5px_0_#065f46] active:translate-y-1 transition-all cursor-pointer flex items-center justify-center gap-2 mx-auto"
        >
          <span>
            {activeItemIndex < items.length - 1
              ? 'Passer à la mini-leçon suivante ➔'
              : 'Voir le bilan final de ma séance ➔'}
          </span>
        </button>
      </div>
    )}

    {/* MODALE DE CONFIRMATION AVANT DE QUITTER EN PLEINE SÉANCE */}
    {showExitConfirmModal && (
      <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 text-center space-y-4 shadow-2xl animate-in zoom-in-95 duration-200">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-lg font-black text-slate-900 dark:text-white">
              Interrompre la séance de tutorat ?
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Ta progression pour cette séance ne sera pas validée dans ton planning tant que toutes les mini-leçons n'ont pas atteint le score obligatoire de <strong>8/8</strong>.
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => setShowExitConfirmModal(false)}
              className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs cursor-pointer"
            >
              Continuer le cours
            </button>
            <button
              type="button"
              onClick={onExit}
              className="px-4 py-2.5 rounded-xl bg-rose-600 text-white font-bold text-xs cursor-pointer shadow-md shadow-rose-600/20"
            >
              Quitter quand même
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
);
};
