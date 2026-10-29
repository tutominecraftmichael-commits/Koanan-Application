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
  Award,
  Calculator,
  Atom,
  Dna,
  Zap,
  Check,
  Target,
  Brain,
  FileCheck2,
  BookOpen,
  ArrowLeftRight
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
  TutorPointSessionItem,
  TutorSessionPayload
} from '../../lib/curriculum/types';
import { STEM_SUBJECTS } from '../../lib/curriculum/types';
import {
  buildTutorSessionPayload,
  initializeSubCategoryPosition,
  recordCompletedTutorSession,
  getSubCategoryName,
  getActiveSubCategoryForSession
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
  onSessionCompleted: (sessionId?: string, earnedXp?: number) => void;
}

type LessonPhase =
  | 'intro' // Écran d'introduction animé de la mini-leçon (Présentation, Enjeu Bac/BEPC, Objectifs)
  | 'learning' // Défilement continu : Cours progressif (1/8 à 8/8) + Test de compréhension immédiat
  | 'catchup' // Boucle de rattrapage (Rappel du cours ciblé + Question manquée) pour atteindre 8/8
  | 'point_celebration' // Validation d'une mini-leçon à 8/8
  | 'session_celebration'; // Victoire globale de la séance d'EDT (toutes mini-leçons à 8/8)

interface ProgressiveCourseSlice {
  stepBadge: string;
  stepTitle: string;
  contextAndDefinition?: string;
  paragraphs: string[];
  konanTip?: string;
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
 * Découpe pédagogique progressive en 8 séquences d'apprentissage :
 * Considère que l'élève part de zéro et lui explique le "pourquoi" et le "comment"
 * avec des mots simples, une définition claire, l'astuce de Konan et des formules KaTeX.
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
      // Étape 1/8 : Contexte & Définition claire (Partir de zéro)
      return {
        stepBadge: 'Cours • Étape 1/8 : Contexte & Définition (Partir de Zéro)',
        stepTitle: `De quoi parle-t-on ? Définition concrète de : ${point.title}`,
        contextAndDefinition: `Imagine que tu découvres cette notion pour la toute première fois. Avant toute formule ou calcul complexe, il faut poser le décor : ${point.summary}.`,
        paragraphs: [
          paragraphs[0] || point.summary,
          'Prends le temps de bien assimiler le vocabulaire officiel : chaque terme a un sens précis. Identifie toujours ce que l’on cherche à observer ou à mesurer avant de passer aux calculs.',
        ],
        konanTip: 'L’Astuce du Prof Konan : Ne retiens jamais de formule sans comprendre les mots ! Définis d’abord chaque notion avec tes propres termes, comme si tu l’expliquais à un ami.',
        formulas: formulas.slice(0, 1),
        visualSchema: point.visualSchema,
      };

    case 1:
      // Étape 2/8 : Mécanisme & Principes Réels
      return {
        stepBadge: 'Cours • Étape 2/8 : Comment ça fonctionne dans la réalité ?',
        stepTitle: 'Le mécanisme pas-à-pas et les conditions réelles',
        contextAndDefinition: 'Maintenant que le mot est clair, voyons comment le phénomène fonctionne concrètement :',
        paragraphs: [
          paragraphs[1] || paragraphs[0] || 'Dans cette situation, les grandeurs évoluent selon des règles et des conditions physiques ou mathématiques strictes.',
          'Observe attentivement les facteurs d’influence : qu’est-ce qui accélère, ralentit, augmente ou diminue la grandeur étudiée ?',
        ],
        konanTip: 'L’Astuce du Prof Konan : Pose-toi toujours la question : « Si je modifie ce paramètre, quel est l’impact direct sur le résultat ? » C’est ce raisonnement logique qui garantit la note maximale.',
        formulas: formulas.length > 1 ? [formulas[1]] : formulas.slice(0, 1),
        visualSchema: point.visualSchema,
      };

    case 2:
      // Étape 3/8 : Notations Officielles & Formules Clés (KaTeX)
      return {
        stepBadge: 'Cours • Étape 3/8 : Les Grandeurs & Formules Officielles',
        stepTitle: 'Comment les scientifiques mesurent et calculent cette grandeur',
        paragraphs: [
          ...(paragraphs.length > 3 ? paragraphs.slice(2) : [paragraphs[2] || paragraphs[1] || paragraphs[0]]),
          'Chaque grandeur possède son symbole officiel, sa relation mathématique et son unité obligatoire dans le Système International.',
        ],
        konanTip: 'L’Astuce du Prof Konan : Attention aux unités ! Une formule parfaitement appliquée avec une mauvaise conversion (ex: secondes au lieu de minutes, ou litres au lieu de m³) te fait perdre la moitié des points d’un devoir.',
        formulas: formulas,
        visualSchema: point.visualSchema,
      };

    case 3:
      // Étape 4/8 : Le Réflexe d'Examen National (Pièges & Règle d'Or)
      return {
        stepBadge: 'Cours • Étape 4/8 : Le Réflexe d’Examen (Pièges & Règle d’Or)',
        stepTitle: 'Le piège classique où 80% des élèves perdent des points',
        paragraphs: [
          point.keyRule
            ? point.keyRule
            : 'Aux examens nationaux (BEPC et BAC), la majorité des erreurs viennent d’une confusion fréquente ou d’un oubli de condition préalable.',
          'Prends l’habitude de vérifier cette condition avant de te lancer dans les calculs.',
        ],
        keyRule: point.keyRule,
        konanTip: 'L’Astuce du Prof Konan : C’est la question piège préférée des inspecteurs et correcteurs nationaux ! Garde toujours ce réflexe en tête dès la lecture de l’énoncé.',
        formulas: formulas.slice(0, 2),
        visualSchema: point.visualSchema,
      };

    case 4:
      // Étape 5/8 : Exemple Résolu Pas-à-Pas (Analyse de l'énoncé)
      return {
        stepBadge: 'Cours • Étape 5/8 : Exemple Résolu — Déchiffrer l’Énoncé',
        stepTitle: ex ? `${ex.title} — Repérer les données utiles` : 'Méthode d’analyse d’un sujet d’examen',
        paragraphs: [
          'Un bon élève ne calcule pas au hasard : il commence par lister les données fournies par le sujet et identifie clairement l’inconnue recherchée.',
        ],
        workedExamplePart: ex
          ? {
            title: ex.title,
            statement: ex.statement,
            steps: methodSteps.slice(0, halfStepIndex).map((t, i) => ({ index: i + 1, text: t })),
          }
          : undefined,
        konanTip: 'L’Astuce du Prof Konan : Sur ton brouillon, surligne les valeurs chiffrées avec leurs unités. Écris toujours « Données : » puis « On cherche : » avant d’écrire la formule.',
        formulas: formulas.slice(0, 1),
        visualSchema: ex?.visualSchema || point.visualSchema,
      };

    case 5:
      // Étape 6/8 : Exemple Résolu Pas-à-Pas (Calcul & Rédaction)
      return {
        stepBadge: 'Cours • Étape 6/8 : Exemple Résolu — Calcul & Rédaction Modèle',
        stepTitle: ex ? `${ex.title} — Rédaction et application numérique` : 'L’art de rédiger une solution parfaite',
        paragraphs: [
          'Voici comment rédiger rigoureusement sur ta copie d’examen pour obtenir tous les points du barème officiel :',
        ],
        workedExamplePart: ex
          ? {
            title: ex.title,
            statement: ex.statement,
            steps: methodSteps.slice(halfStepIndex).map((t, i) => ({ index: halfStepIndex + i + 1, text: t })),
            conclusion: ex.conclusion,
          }
          : undefined,
        konanTip: 'L’Astuce du Prof Konan : Règle d’or : pose d’abord la formule littérale avec les lettres, puis remplace par les chiffres. Ne fais jamais l’inverse !',
        formulas: [],
        visualSchema: ex?.visualSchema || point.visualSchema,
      };

    case 6:
      // Étape 7/8 : Protocole de Rédaction Complet & Cas Pratique
      return {
        stepBadge: 'Cours • Étape 7/8 : Protocole de Rédaction Complet',
        stepTitle: 'Le canevas complet à reproduire le jour du devoir',
        paragraphs: [
          'Récapitulatif de la méthode modèle à appliquer en autonomie sur ce nouveau cas pratique :',
        ],
        workedExamplePart: ex
          ? {
            title: 'Démarche complète modèle',
            statement: ex.statement,
            steps: methodSteps.map((t, i) => ({ index: i + 1, text: t })),
            conclusion: ex.conclusion,
          }
          : undefined,
        keyRule: point.keyRule,
        konanTip: 'L’Astuce du Prof Konan : Même si tu doutes sur un calcul numérique, écris toujours ta formule et ta démarche : le barème officiel accorde souvent 70% des points au raisonnement littéral !',
        formulas: formulas.slice(-1),
        visualSchema: point.visualSchema,
      };

    default:
      // Étape 8/8 : Fiche Synthèse Express & Défi Final de Maîtrise
      return {
        stepBadge: 'Cours • Étape 8/8 : Synthèse Express & Défi de Maîtrise (8/8)',
        stepTitle: `Synthèse de Maîtrise : ${point.title}`,
        paragraphs: [
          point.summary,
          'Félicitations pour ton parcours sur cette notion ! Réponds à cette dernière question pour valider définitivement ton 8/8 et couronner la mini-leçon.',
        ],
        keyRule: point.keyRule,
        konanTip: 'L’Astuce du Prof Konan : Tu es à une seule réponse du 8/8 parfait ! Lis bien l’énoncé une dernière fois, tu as toutes les armes pour réussir.',
        formulas: formulas,
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
  // 1. Sous-catégorie active calculée selon la règle d'alternance officielle ivoirienne
  // (Physique-Chimie -> Chimie ↔ Physique, Maths -> Géométrie ↔ Numérique)
  const [activeSubCategory, setActiveSubCategory] = useState<StemSubCategory>(() =>
    getActiveSubCategoryForSession(userId, stemSubjectId)
  );

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
  const [showExitConfirmModal, setShowExitConfirmModal] = useState<boolean>(false);

  // Charger ou recharger le payload de session avec la sous-catégorie active
  const refreshSessionPayload = (subCatToUse: StemSubCategory = activeSubCategory) => {
    const res = buildTutorSessionPayload(
      userId,
      stemSubjectId,
      subjectTitle,
      gradeLevel,
      durationMinutes,
      subCatToUse
    );

    setAvailableSubChapters(res.availableChapters);
    setSubCategoryQuestionText(res.subCategoryQuestion);

    if (res.needsPositioning) {
      setShowChapterSelector(true);
      return;
    }

    if (res.payload && res.payload.itemsToReview.length > 0) {
      setShowChapterSelector(false);
      setSessionPayload(res.payload);
      setActiveItemIndex(0);
      setPhase('intro');
      setExerciseIndex(0);
      setSelectedOptionIndex(null);
      setIsAnswerChecked(false);
      setIsAnswerCorrect(false);
      setMissedIndices([]);
      setMasteredIndices([]);
      setCatchupQueue([]);
      setCurrentCatchupQueueIndex(0);
    }
  };

  useEffect(() => {
    refreshSessionPayload(activeSubCategory);
  }, [userId, stemSubjectId, gradeLevel, subjectTitle, durationMinutes, activeSubCategory]);

  // Basculer manuellement entre les deux sous-disciplines si l'élève le souhaite
  const handleToggleSubCategory = () => {
    let nextSub: StemSubCategory = activeSubCategory;
    if (stemSubjectId === 'physique_chimie') {
      nextSub = activeSubCategory === 'chimie' ? 'physique' : 'chimie';
    } else if (stemSubjectId === 'maths') {
      nextSub = activeSubCategory === 'geometrie' ? 'numerique' : 'geometrie';
    }
    setActiveSubCategory(nextSub);
    setSelectedChapter(null);
    refreshSessionPayload(nextSub);
  };

  // Validation du diagnostic initial pour cette sous-catégorie
  const handleConfirmInitialChapter = (chapterId: string) => {
    soundFX.playCheckmarkPop();
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

  // Index effectif de l'étape en cours
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

  const subCategoryLabel = getSubCategoryName(activeSubCategory);

  // =========================================================================
  // ACTIONS PÉDAGOGIQUES
  // =========================================================================

  // Sélection d'une option de réponse
  const handleSelectOption = (idx: number) => {
    if (isAnswerChecked) return;
    soundFX.playClick();
    setSelectedOptionIndex(idx);
  };

  // Vérification de la réponse
  const handleVerifyAnswer = () => {
    if (selectedOptionIndex === null || !activeExercise) return;

    const isCorrect = selectedOptionIndex === activeExercise.correctAnswerIndex;
    setIsAnswerChecked(true);
    setIsAnswerCorrect(isCorrect);
    setTotalExercisesAnswered(prev => prev + 1);

    if (isCorrect) {
      soundFX.playCorrect();
      setMasteredIndices(prev => prev.includes(activeStepIndex) ? prev : [...prev, activeStepIndex]);
      if (phase === 'learning') {
        setTotalFirstTryCorrect(prev => prev + 1);
      }
    } else {
      // STRICTEMENT AUCUNE MUSIQUE NI SON SUR UNE FAUTE (silence complet)
      soundFX.playWrong();
      // La barre de progression ne doit pas augmenter : aucun ajout dans masteredIndices
      if (phase === 'learning' && !missedIndices.includes(activeStepIndex)) {
        setMissedIndices(prev => [...prev, activeStepIndex]);
      }
    }
  };

  // Passer à l'étape suivante après lecture de l'explication et de la réaction de Konan
  const handleContinueAfterFeedback = () => {
    soundFX.playClick();
    setSelectedOptionIndex(null);
    setIsAnswerChecked(false);
    setIsAnswerCorrect(false);

    if (phase === 'learning') {
      if (exerciseIndex < pointExercises.length - 1) {
        setExerciseIndex(prev => prev + 1);
      } else {
        if (missedIndices.length > 0) {
          setPhase('catchup');
          setCatchupQueue([...missedIndices]);
          setCurrentCatchupQueueIndex(0);
        } else {
          handleMiniLessonValidated();
        }
      }
    } else if (phase === 'catchup') {
      if (isAnswerCorrect) {
        const nextQueue = catchupQueue.filter((_, i) => i !== currentCatchupQueueIndex);
        setCatchupQueue(nextQueue);
        if (nextQueue.length === 0) {
          handleMiniLessonValidated();
        } else {
          setCurrentCatchupQueueIndex(0);
        }
      } else {
        setCurrentCatchupQueueIndex(prev => (prev + 1) % catchupQueue.length);
      }
    }
  };

  // Validation d'une mini-leçon à 8/8
  const handleMiniLessonValidated = () => {
    soundFX.playVictoryJingle();
    setPhase('point_celebration');
  };

  // Passer à la mini-leçon suivante ou célébrer la fin de séance
  const handleContinueToNextLesson = () => {
    soundFX.playClick();
    if (activeItemIndex < items.length - 1) {
      setActiveItemIndex(prev => prev + 1);
      setPhase('intro');
      setExerciseIndex(0);
      setSelectedOptionIndex(null);
      setIsAnswerChecked(false);
      setIsAnswerCorrect(false);
      setMissedIndices([]);
      setMasteredIndices([]);
      setCatchupQueue([]);
      setCurrentCatchupQueueIndex(0);
    } else {
      handleSessionCelebration();
    }
  };

  // Célébration globale et enregistrement avec alternance
  const handleSessionCelebration = () => {
    soundFX.playGrandCheer();
    setPhase('session_celebration');

    recordCompletedTutorSession(
      userId,
      stemSubjectId,
      activeSubCategory,
      items,
      totalExercisesAnswered,
      totalFirstTryCorrect
    );
  };

  // Fermeture finale et validation dans l'emploi du temps
  const handleFinishAndExit = () => {
    const earnedXp = Math.max(50, items.length * 20);
    onSessionCompleted(studySessionId, earnedXp);
  };

  // =========================================================================
  // VUE 1 : DIAGNOSTIC INITIAL (OÙ EN ÊTES-VOUS DANS CETTE SOUS-DISCIPLINE ?)
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

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Pour synchroniser vos révisions avec votre professeur en <strong>{subCategoryLabel}</strong>, sélectionnez votre chapitre actuel.
            Konan alternera automatiquement ensuite vos séances pour couvrir harmonieusement tout le programme.
          </p>

          {/* Bouton de bascule de sous-matière si nécessaire */}
          {(stemSubjectId === 'physique_chimie' || stemSubjectId === 'maths') && (
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-xs">
              <span className="text-slate-600 dark:text-slate-300 font-medium">
                Partie sélectionnée : <strong>{subCategoryLabel}</strong>
              </span>
              <button
                type="button"
                onClick={handleToggleSubCategory}
                className="flex items-center gap-1.5 font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
              >
                <ArrowLeftRight className="w-3.5 h-3.5" />
                <span>
                  Basculer en {activeSubCategory === 'chimie' ? 'Physique' : activeSubCategory === 'physique' ? 'Chimie' : activeSubCategory === 'geometrie' ? 'Numérique' : 'Géométrie'}
                </span>
              </button>
            </div>
          )}

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
                  <span className="text-xs sm:text-sm font-bold truncate">Ch. {ch.order} — {ch.title}</span>
                  <span className="text-[11px] font-mono text-slate-400 shrink-0 font-semibold">{ch.officialVolumeHours || 10}h</span>
                </button>
              ))
            )}
          </div>

          {/* Boutons d'action */}
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
            <span>Quota 100% validé • {subCategoryLabel} (8/8 partout)</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Séance de {subCategoryLabel} Maîtrisée !
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-relaxed">
            Tu as validé avec succès l'intégralité des <strong>{items.length} mini-leçons</strong> avec le score d'excellence requis de <strong>8/8</strong>.
            Lors de ta prochaine séance, Konan alternera automatiquement pour aborder la seconde partie de ton programme !
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
      `Comprendre le contexte réel et la définition simple de : ${currentPoint.title}`,
      currentPoint.formulas && currentPoint.formulas.length > 0
        ? `Manipuler la formule officielle : ${currentPoint.formulas[0].name}`
        : `Identifier les principes d’application et la démarche rigoureuse`,
      currentPoint.keyRule
        ? `Retenir le réflexe d'examen : ${currentPoint.keyRule.slice(0, 85)}...`
        : `Éviter les erreurs classiques et pièges fréquents signalés aux examens`,
      `Réussir les 8 exercices de compréhension pour sécuriser la note maximale (8/8)`
    ];

    return (
      <div className="max-w-2xl mx-auto py-6 sm:py-10 px-4 space-y-6 text-center animate-in zoom-in-95 duration-300">
        {/* Top bar avec bouton quitter et alternance */}
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
              {subjectTitle} • {subCategoryLabel} • Leçon {activeItemIndex + 1}/{items.length}
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
          Chargement du programme officiel de {subCategoryLabel}...
        </p>
      </div>
    );
  }

  const totalLessonPoints = items.length;
  const currentItemNumber = activeItemIndex + 1;
  const totalSteps = pointExercises.length || 1;
  // La barre de progression augmente UNIQUEMENT sur une bonne réponse (strictement gelée en cas de faute)
  const progressPercent = Math.min(100, Math.round((masteredIndices.length / totalSteps) * 100));

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

        {/* Barre de progression fluide avec reflet brillant */}
        <div className="flex-1 min-w-0">
          <div className="relative w-full h-3.5 sm:h-4 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden p-0.5 shadow-inner">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 transition-all duration-500 ease-out relative shadow-sm"
              style={{ width: `${progressPercent}%` }}
            >
              <div className="absolute top-0.5 inset-x-1.5 h-1 bg-white/40 rounded-full pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Compteur de progression */}
        <div className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs font-black text-slate-800 dark:text-slate-200 font-mono shadow-xs">
          <span>
            {phase === 'catchup'
              ? `Reprise ${currentCatchupQueueIndex + 1}/${catchupQueue.length}`
              : `Question ${activeStepIndex + 1}/${totalSteps}`}
          </span>
        </div>
      </div>

      {/* 2. FIL D'ARIANE / CONTEXTE DE LA LEÇON & BOUTON D'ALTERNANCE */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1 pb-1 border-b border-slate-100 dark:border-slate-800/60">
        <div className="flex items-center gap-2 truncate">
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0"
            style={{ backgroundColor: subjectMeta.color }}
          />
          <span className="font-extrabold uppercase tracking-wide text-slate-700 dark:text-slate-300 truncate">
            {subjectTitle} • {subCategoryLabel} • Ch. {currentItem.chapterOrder}
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {/* Bouton de bascule manuelle rapide */}
          {(stemSubjectId === 'physique_chimie' || stemSubjectId === 'maths') && (
            <button
              type="button"
              onClick={handleToggleSubCategory}
              className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
              title="Alterner la sous-matière"
            >
              <ArrowLeftRight className="w-3 h-3" />
              <span>
                {activeSubCategory === 'chimie' ? 'Passer en Physique' : activeSubCategory === 'physique' ? 'Passer en Chimie' : activeSubCategory === 'geometrie' ? 'Passer en Numérique' : 'Passer en Géométrie'}
              </span>
            </button>
          )}

          <div className="flex items-center gap-1.5 font-bold text-indigo-600 dark:text-indigo-400">
            <Target className="w-3.5 h-3.5" />
            <span>Mini-leçon {currentItemNumber}/{totalLessonPoints}</span>
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* COURS CONTINU + APPLICATION IMMÉDIATE                              */}
      {/* =================================================================== */}
      {(phase === 'learning' || phase === 'catchup') && activeExercise && activeCourseSlice && (
        <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-200">
          {/* PARTIE A : LE BLOC DE COURS PROGRESSIF DE L'ÉTAPE */}
          <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-indigo-100 dark:border-slate-800 space-y-4 shadow-sm">
            <div className="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                <BookOpen className="w-4 h-4 shrink-0" />
                <span className="text-[11px] font-black uppercase tracking-wider">
                  {activeCourseSlice.stepBadge}
                </span>
              </div>
            </div>

            <h2 className="text-base sm:text-xl font-black text-slate-900 dark:text-white leading-snug">
              <MathRenderer text={activeCourseSlice.stepTitle} />
            </h2>

            {/* 1. Contexte & Définition claire (Partir de zéro) */}
            {activeCourseSlice.contextAndDefinition && (
              <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-800/40 space-y-1.5">
                <div className="flex items-center gap-1.5 text-blue-900 dark:text-blue-300 text-[11px] font-black uppercase tracking-wider">
                  <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>D'où on part ? (Comprendre sans formule)</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                  <MathRenderer text={activeCourseSlice.contextAndDefinition} />
                </p>
              </div>
            )}

            {/* Support Visuel / Schéma Géométrique ou Tableau Structuré */}
            {activeCourseSlice.visualSchema && (
              <VisualSchemaRenderer schema={activeCourseSlice.visualSchema} />
            )}

            {/* 2. Paragraphes d'explication du cours détaillés pas-à-pas */}
            <div className="space-y-2.5">
              {activeCourseSlice.paragraphs.map((para, pIdx) => (
                <div
                  key={pIdx}
                  className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium whitespace-pre-line"
                >
                  <MathRenderer text={para} />
                </div>
              ))}
            </div>

            {/* 3. Mascotte KONAN : Bulle de dialogue interactive avec l'Astuce du Professeur */}
            {activeCourseSlice.konanTip && (
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-indigo-50/90 to-cyan-50/70 dark:from-indigo-950/40 dark:to-cyan-950/20 border border-indigo-200/80 dark:border-indigo-500/30 flex items-start gap-3 shadow-2xs">
                <div className="shrink-0 pt-0.5">
                  <KonanCube size={42} showStars={true} glow={true} />
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

            {/* 4. Formules ou Propriétés mises en évidence (Rendu KaTeX académique, zéro tiret bas) */}
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

            {/* 5. Exemple Résolu Pas-à-Pas */}
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

            {/* 6. Règle d'or / Réflexe d'Examen */}
            {activeCourseSlice.keyRule && (
              <div className="p-3.5 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-500/30 flex items-start gap-2.5">
                <Zap className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-[11px] font-black uppercase tracking-wider text-amber-800 dark:text-amber-300 block">
                    Réflexe d'Examen National (BEPC / BAC)
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                    <MathRenderer text={activeCourseSlice.keyRule} />
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* PARTIE B : LE TEST DE COMPRÉHENSION IMMÉDIAT (ADAPTÉ À L'ÉTAPE) */}
          <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                <Target className="w-4 h-4" />
                <span>Test de compréhension immédiat</span>
              </span>
              <span className="font-mono font-bold text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
                Question {activeStepIndex + 1}/{totalSteps}
              </span>
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
                      className={`w-full p-3.5 sm:p-4 rounded-xl border-2 text-left font-semibold text-xs sm:text-sm flex items-start justify-between gap-3 transition-all cursor-pointer disabled:cursor-default ${btnStyle}`}
                    >
                      <div className="flex items-start gap-3 min-w-0">
                        <span
                          className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center shrink-0 mt-0.5 ${
                            isSelected
                              ? 'bg-indigo-600 text-white'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                          }`}
                        >
                          {letter}
                        </span>
                        <div className="leading-snug pt-0.5">
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
                        <>
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 stroke-[2.5]" />
                          <span className="text-xs sm:text-sm font-black text-emerald-900 dark:text-emerald-200">
                            Bravo ! Tu as bien trouvé, félicitations ! Continue comme ça ! 🎉
                          </span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 stroke-[2.5]" />
                          <span className="text-xs sm:text-sm font-black text-amber-900 dark:text-amber-200">
                            Ce n'est pas tout à fait ça ! Regarde bien l'explication détaillée ci-dessous, tu vas vite comprendre pour la reprise à la fin :
                          </span>
                        </>
                      )}
                    </div>

                    <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium bg-white/70 dark:bg-slate-900/70 p-3 rounded-xl border border-slate-200/60 dark:border-slate-800">
                      <MathRenderer text={activeExercise.explanation} />
                    </div>
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
                      ? 'Question suivante ➔'
                      : exerciseIndex < totalSteps - 1
                        ? `Question suivante (${exerciseIndex + 2}/${totalSteps}) ➔`
                        : missedIndices.length > 0
                          ? 'Reprendre les questions non comprises ➔'
                          : 'Terminer la leçon ➔'}
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
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs sm:text-sm tracking-wide uppercase shadow-[0_4px_0_#065f46] active:translate-y-1 transition-all cursor-pointer flex items-center justify-center gap-2 mx-auto"
            >
              <span>
                {activeItemIndex < items.length - 1
                  ? `Passer à la mini-leçon suivante (${activeItemIndex + 2}/${items.length}) ➔`
                  : 'Terminer la séance d’étude 🏆'}
              </span>
            </button>
          </div>
        </div>
      )}

      {/* MODALE DE CONFIRMATION AVANT DE QUITTER */}
      {showExitConfirmModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4 animate-in zoom-in-95 duration-150">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>

            <div className="text-center space-y-1">
              <h3 className="text-lg font-black text-slate-900 dark:text-white">
                Voulez-vous quitter cette séance ?
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Votre progression sur cette mini-leçon ne sera pas enregistrée si vous quittez avant d’avoir validé les 8 questions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setShowExitConfirmModal(false)}
                className="py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Continuer à réviser
              </button>
              <button
                type="button"
                onClick={onExit}
                className="py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition-colors cursor-pointer"
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
