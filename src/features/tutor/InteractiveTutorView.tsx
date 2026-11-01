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
  Check,
  Target,
  Brain,
  BookOpen,
  HelpCircle,
  RotateCcw,
  RefreshCw
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
  getSubCategoryQuestion,
  getChapterSubCategory,
  getActiveSubCategoryForSession
} from '../../lib/curriculum/studentProgressService';
import { getCurriculumChapters } from '../../lib/curriculum/curriculumRegistry';
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
  stepIndex: number;
  totalSteps: number;
  stepTitle: string;
  paragraphText?: string;
  exerciseStatement?: string;
  formula?: PointFormula;
  konanTip?: string;
  keyRule?: string;
  visualSchema?: PointVisualSchema;
}

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
 * Découpe la leçon en 10 écrans progressifs (Style Duolingo) :
 * - Écrans 1 à 6 : Cours approfondi (Définition, Mécanisme, Formule décortiquée, Cas particuliers, Rédaction, Pièges)
 * - Écrans 7 à 10 : Exercice d'application guidé en 4 questions cohérentes (Énoncé réel au sommet, sans boîte verte discordante)
 */
function buildProgressiveCourseSlice(point: CurriculumPoint, stepIndex: number): ProgressiveCourseSlice {
  const totalSteps = point.exercises?.length || 10;
  const rawParagraphs = point.conceptExplanation
    .split(/\n\s*\n/)
    .map(p => p.trim())
    .filter(Boolean);

  const paragraphs = rawParagraphs.length > 0 ? rawParagraphs : [point.conceptExplanation];
  const formulas = point.formulas || [];

  const stepThemes = [
    'Introduction & Définition du concept',
    'Mécanisme, loi fondamentale & Propriétés',
    'Formule officielle décortiquée & Unités SI',
    'Cas particuliers, variantes & Validité',
    'Méthode de rédaction type devoir',
    'Réflexe d\'évaluation & Piège classique à éviter',
  ];

  if (stepIndex < 6 && stepIndex < totalSteps - 4) {
    // Écrans 1 à 6 : Mini-carte de cours avec code couleur Bleu / Violet
    const theme = stepThemes[stepIndex] || `Notion clé ${stepIndex + 1}`;
    const pText = paragraphs[stepIndex % paragraphs.length] || point.summary;
    const form = formulas[stepIndex % formulas.length] || (formulas.length > 0 ? formulas[0] : undefined);
    const tip = stepIndex === 5 && point.keyRule
      ? `Piège classique d'examen : ${point.keyRule}`
      : stepIndex >= 2 && point.keyRule
      ? `L'Astuce du Prof Konan : ${point.keyRule}`
      : undefined;

    return {
      stepBadge: `Étape ${stepIndex + 1}/${totalSteps} · ${theme}`,
      stepIndex,
      totalSteps,
      stepTitle: point.title,
      paragraphText: pText,
      formula: form,
      konanTip: tip,
      keyRule: stepIndex === 3 ? point.keyRule : undefined,
      visualSchema: stepIndex === 1 ? point.visualSchema : undefined,
    };
  }

  // Écrans 7 à 10 : Exercice d'application guidé en 4 questions (Données réelles au sommet, zéro boîte verte discordante)
  const questionNum = (stepIndex - Math.max(0, totalSteps - 4)) + 1; // 1, 2, 3, 4
  const ex = point.workedExample;
  const exStatement = ex?.statement || point.summary;
  const currentStepHint = ex?.methodSteps?.[questionNum - 1] || `Question ${questionNum}/4 de résolution avec les données réelles de l'énoncé.`;
  const form = formulas[questionNum % formulas.length] || (formulas.length > 0 ? formulas[0] : undefined);

  return {
    stepBadge: `Étape ${stepIndex + 1}/${totalSteps} · Exercice d'application (Question ${questionNum}/4)`,
    stepIndex,
    totalSteps,
    stepTitle: point.title,
    exerciseStatement: exStatement,
    paragraphText: currentStepHint,
    formula: form,
    konanTip: questionNum === 4 ? ex?.conclusion : undefined,
  };
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
  const [activeSubCategory, setActiveSubCategory] = useState<StemSubCategory>(() => {
    const computed = getActiveSubCategoryForSession(userId, stemSubjectId);
    return computed || (stemSubjectId === 'physique_chimie' ? 'physique' : stemSubjectId === 'maths' ? 'numerique' : 'svt');
  });

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
  const [showExitConfirmModal, setShowExitConfirmModal] = useState<boolean>(false);

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
    }
  };

  useEffect(() => {
    refreshSessionPayload();
  }, [userId, stemSubjectId, gradeLevel, subjectTitle, durationMinutes]);

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

  // Permet d'ouvrir le sélecteur de chapitre à tout moment depuis la séance
  const handleOpenChapterSelector = () => {
    try { soundFX.playClick(); } catch {}
    const allChaps = getCurriculumChapters(stemSubjectId, gradeLevel);
    const filtered = allChaps
      .filter((c) => getChapterSubCategory(c) === activeSubCategory)
      .sort((a, b) => a.order - b.order);
    setAvailableSubChapters(filtered);
    setSubCategoryQuestionText(getSubCategoryQuestion(activeSubCategory));
    setSelectedChapter(null);
    setShowChapterSelector(true);
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
      // STRICTEMENT AUCUNE MUSIQUE NI SON SUR UNE FAUTE (silence complet garanti)
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
    try {
      soundFX.playVictoryJingle();
    } catch {}
    setPhase('point_celebration');
  };

  // Passer à la mini-leçon suivante ou célébrer la fin de séance
  const handleContinueToNextLesson = () => {
    try {
      soundFX.playClick();
    } catch {}
    if (activeItemIndex < items.length - 1) {
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

  // Célébration globale et enregistrement avec alternance
  const handleSessionCelebration = () => {
    try {
      soundFX.playGrandCheer();
    } catch {}
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
                {stemSubjectId === 'physique_chimie'
                  ? 'Par quel volet souhaites-tu commencer aujourd’hui ?'
                  : 'Par quel domaine mathématique souhaites-tu commencer aujourd’hui ?'}
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
                    ⚡
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
                    🧪
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
                    🔢
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
                    📐
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

            {sessionPayload && sessionPayload.itemsToReview.length > 0 && (
              <button
                type="button"
                onClick={() => setShowChapterSelector(false)}
                className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-700 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0 mt-1"
                title="Fermer et reprendre la séance"
              >
                <X className="w-4 h-4" />
              </button>
            )}
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
                  Alternance obligatoire (Zéro négociation)
                </div>
                <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-white leading-snug">
                  {alternanceBannerText || `La dernière séance tu as travaillé l'autre volet, aujourd'hui place à la ${subCategoryLabel} !`}
                </p>
              </div>
            </div>
          ) : (
            (stemSubjectId === 'physique_chimie' || stemSubjectId === 'maths') && sessionPayload && (
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                  Changer de volet :
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
                        <span className="text-2xl select-none">🧪</span>
                        <div className="min-w-0">
                          <div className="text-xs sm:text-sm font-black">Chimie</div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">Atomes, Réactions...</div>
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
                        <span className="text-2xl select-none">⚡</span>
                        <div className="min-w-0">
                          <div className="text-xs sm:text-sm font-black">Physique</div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">Mécanique, Électricité...</div>
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
                        <span className="text-2xl select-none">🔢</span>
                        <div className="min-w-0">
                          <div className="text-xs sm:text-sm font-black">Numérique</div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">Calculs, Fonctions...</div>
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
                        <span className="text-2xl select-none">📐</span>
                        <div className="min-w-0">
                          <div className="text-xs sm:text-sm font-black">Géométrie</div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">Vecteurs, Droites...</div>
                        </div>
                      </button>
                    </>
                  )}
                </div>
              </div>
            )
          )}

          {/* Indicateur de sélection en cours */}
          {selectedChapter ? (
            <div className="px-3.5 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700/60 flex items-center justify-between text-xs text-emerald-800 dark:text-emerald-300">
              <span className="font-bold flex items-center gap-1.5 truncate">
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
                  <span className="text-xs sm:text-sm font-bold truncate">
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
            <button
              type="button"
              onClick={handleOpenChapterSelector}
              className="text-[10px] font-bold px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors cursor-pointer ml-1"
              title="Changer de chapitre"
            >
              Changer
            </button>
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
              try { soundFX.playCheckmarkPop(); } catch {}
              setSelectedOptionIndex(null);
              setIsAnswerChecked(false);
              setIsAnswerCorrect(false);
              setPhase('learning');
              setExerciseIndex(0);
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-white font-black text-sm sm:text-base tracking-wide uppercase shadow-[0_5px_0_#065f46] hover:shadow-[0_2px_0_#065f46] active:translate-y-1 transition-all cursor-pointer flex items-center justify-center gap-3 mx-auto animate-bounce hover:animate-none"
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

  const totalSteps = pointExercises.length || 10;

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

        {/* Segments d'étapes visuels Style Duolingo */}
        <div className="flex-1 min-w-0 flex items-center gap-1 sm:gap-1.5">
          {Array.from({ length: totalSteps }).map((_, sIdx) => {
            const isMastered = masteredIndices.includes(sIdx);
            const isCurrent = sIdx === activeStepIndex;

            let segClass = 'bg-slate-200 dark:bg-slate-800';
            if (isMastered) {
              segClass = 'bg-emerald-500 shadow-xs shadow-emerald-500/30';
            } else if (isCurrent) {
              segClass = 'bg-indigo-500 ring-2 ring-indigo-500/30 animate-pulse';
            }

            return (
              <div
                key={sIdx}
                className={`h-2 sm:h-2.5 flex-1 rounded-full transition-all duration-300 ${segClass}`}
                title={`Étape ${sIdx + 1}/${totalSteps}`}
              />
            );
          })}
        </div>

        {/* Badge de score X/totalSteps */}
        <div className="shrink-0 px-2.5 py-1 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-black">
          {masteredIndices.length} / {totalSteps}
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
            {subjectTitle} • {subCategoryLabel} • Ch. {currentItem.chapterOrder} • Mini-Leçon {currentItem.pointIndexInChapter + 1}/{currentItem.totalPointsInChapter}
          </span>
          <button
            type="button"
            onClick={handleOpenChapterSelector}
            className="text-[10px] font-bold px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors cursor-pointer shrink-0"
            title="Changer de chapitre"
          >
            Changer
          </button>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {phase === 'catchup' && (
            <span className="px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-[10px] font-black uppercase tracking-wider flex items-center gap-1 animate-pulse">
              <RotateCcw className="w-3 h-3" />
              <span>Rattrapage</span>
            </span>
          )}

          <div className="flex items-center gap-1.5 font-bold text-indigo-600 dark:text-indigo-400">
            <Target className="w-3.5 h-3.5" />
            <span>Étape {activeStepIndex + 1}/{totalSteps}</span>
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* MODE DUOLINGO : 1 SEUL POINT DE COURS -> 1 QCM -> SUIVANT           */}
      {/* =================================================================== */}
      {(phase === 'learning' || phase === 'catchup') && activeExercise && activeCourseSlice && (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-200">
          {/* PARTIE 1 : LA CARTE DE COURS PROGRESSIVE (1 POINT À LA FOIS OU ÉNONCÉ D'EXERCICE) */}
          <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-indigo-100 dark:border-slate-800 space-y-4 shadow-sm">
            <div className="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                <BookOpen className="w-4 h-4 shrink-0" />
                <span className="text-[11px] font-black uppercase tracking-wider">
                  {activeCourseSlice.stepBadge} • {currentPoint.title}
                </span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">
                Étape {activeStepIndex + 1} / {totalSteps}
              </span>
            </div>

            {/* Énoncé concret de l'exercice d'application (aux étapes de résolution guidée) */}
            {activeCourseSlice.exerciseStatement && (
              <div className="p-3.5 sm:p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-800/40 space-y-1.5">
                <div className="text-xs font-black uppercase tracking-wider text-indigo-900 dark:text-indigo-300 flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>Énoncé de l'exercice d'application (Données réelles)</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-semibold leading-relaxed pt-1">
                  <MathRenderer text={activeCourseSlice.exerciseStatement} />
                </div>
              </div>
            )}

            {/* Contenu structuré avec le code couleur pédagogique Bleu / Violet */}
            {activeCourseSlice.paragraphText && (
              <PedagogicalParagraph text={activeCourseSlice.paragraphText} />
            )}

            {/* Formule ou Propriété Clé associée à ce point précis */}
            {activeCourseSlice.formula && (
              <div className="p-3.5 sm:p-4 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/40 border-2 border-indigo-200 dark:border-indigo-500/30 space-y-2">
                <div className="flex items-center gap-1.5 text-indigo-900 dark:text-indigo-300 text-[11px] font-black uppercase tracking-wider">
                  <SubjectIcon className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>Formule & Propriété Clé (Notation Officielle) : <MathRenderer text={activeCourseSlice.formula.name} /></span>
                </div>
                <div className="w-full text-center py-2.5 px-3 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-slate-800 text-xs sm:text-sm font-black text-indigo-700 dark:text-indigo-300 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  <MathFormula latex={activeCourseSlice.formula.formula} display={true} />
                </div>
                {activeCourseSlice.formula.note && (
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    <MathRenderer text={activeCourseSlice.formula.note} />
                  </p>
                )}
              </div>
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

          {/* PARTIE 2 : LE TEST DE COMPRÉHENSION IMMÉDIAT (ADAPTÉ STRICTEMENT À L'ÉTAPE) */}
          <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                <Target className="w-4 h-4" />
                <span>
                  {activeStepIndex < totalSteps - 4
                    ? `QCM ${activeStepIndex + 1}/${totalSteps} · Compréhension du cours`
                    : `QCM ${activeStepIndex + 1}/${totalSteps} · Exercice d'application (Question ${activeStepIndex - (totalSteps - 5)}/4)`}
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
                      ? 'bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-white shadow-[0_5px_0_#065f46] hover:shadow-[0_2px_0_#065f46]'
                      : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-[0_5px_0_#b45309] hover:shadow-[0_2px_0_#b45309]'
                  }`}
                >
                  <span>
                    {phase === 'catchup'
                      ? (isAnswerCorrect ? "Continuer le rattrapage 🚀" : "Question suivante ➡️")
                      : isAnswerCorrect
                        ? (activeStepIndex === 7 ? "Terminer et valider la mini-leçon 🏆" : "Continuer vers l'Étape suivante 🚀")
                        : (activeStepIndex === 7 ? "Passer à la boucle de rattrapage 🔁" : "J'ai compris, étape suivante ➡️")}
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
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs sm:text-sm tracking-wide uppercase shadow-[0_4px_0_#065f46] active:translate-y-1 transition-all cursor-pointer flex items-center justify-center gap-2 mx-auto"
            >
              <span className="flex items-center gap-2">
                {activeItemIndex < items.length - 1
                  ? `Passer à la mini-leçon suivante (${activeItemIndex + 2}/${items.length})`
                  : 'Terminer la séance d’étude 🏆'}
                {activeItemIndex < items.length - 1 && <ArrowRight className="w-4 h-4" />}
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
