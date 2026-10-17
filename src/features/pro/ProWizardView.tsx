import React, { useState, useMemo, useEffect } from 'react';
import type { AppState } from '../../services/storage';
import type { 
  Subject, 
  StudyPreferences, 
  StudySession, 
  StudyPacing, 
  ActiveAppView,
  EvaluationType,
  DayOfWeek 
} from '../../types';
import { DAYS_OF_WEEK } from '../../types';
import { PACING_STRATEGIES, recommendPacingStrategies, getPacingStrategy } from '../../lib/pacingStrategies';
import { generateOptimizedStudyPlan } from '../../services/plannerAlgorithm';
import { downloadStudyPlanICS, getGoogleCalendarImportUrl } from '../../services/googleCalendarService';
import { getDaysRemaining, generateId } from '../../lib/utils';
import { soundFX } from '../../lib/audioEffects';
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Calendar, 
  Download, 
  ExternalLink, 
  Clock, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  Zap,
  ShieldCheck,
  Flame,
  BookOpen,
  Filter,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Button } from '../../components/ui/Button';

export interface ProWizardViewProps {
  state: AppState;
  onUpdateState: (nextState: AppState) => void;
  onNavigate: (view: ActiveAppView) => void;
  showToast: (message: string) => void;
}

/**
 * Palette de couleurs et thèmes visuels dynamiques pour chaque méthode cognitive
 */
function getStrategyTheme(id: StudyPacing) {
  switch (id) {
    case 'feynman':
      return {
        accent: 'purple',
        badgeBg: 'bg-purple-500/15 border-purple-500/40 text-purple-700 dark:text-purple-300',
        activeGlow: 'from-purple-500/15 via-indigo-500/10 to-transparent border-purple-500 ring-2 ring-purple-500/30 shadow-lg shadow-purple-500/15',
        checkBg: 'bg-purple-600 text-white',
        borderAccent: 'border-purple-500/50',
      };
    case 'time_blocking':
      return {
        accent: 'indigo',
        badgeBg: 'bg-indigo-500/15 border-indigo-500/40 text-indigo-700 dark:text-indigo-300',
        activeGlow: 'from-indigo-500/15 via-cyan-500/10 to-transparent border-indigo-500 ring-2 ring-indigo-500/30 shadow-lg shadow-indigo-500/15',
        checkBg: 'bg-indigo-600 text-white',
        borderAccent: 'border-indigo-500/50',
      };
    case 'pomodoro':
      return {
        accent: 'amber',
        badgeBg: 'bg-amber-500/15 border-amber-500/40 text-amber-700 dark:text-amber-300',
        activeGlow: 'from-amber-500/15 via-orange-500/10 to-transparent border-amber-500 ring-2 ring-amber-500/30 shadow-lg shadow-amber-500/15',
        checkBg: 'bg-amber-500 text-slate-950 font-black',
        borderAccent: 'border-amber-500/50',
      };
    case 'active_recall_spaced':
      return {
        accent: 'cyan',
        badgeBg: 'bg-cyan-500/15 border-cyan-500/40 text-cyan-700 dark:text-cyan-300',
        activeGlow: 'from-cyan-500/15 via-blue-500/10 to-transparent border-cyan-500 ring-2 ring-cyan-500/30 shadow-lg shadow-cyan-500/15',
        checkBg: 'bg-cyan-600 text-white',
        borderAccent: 'border-cyan-500/50',
      };
    case 'two_minutes_rule':
    default:
      return {
        accent: 'emerald',
        badgeBg: 'bg-emerald-500/15 border-emerald-500/40 text-emerald-700 dark:text-emerald-300',
        activeGlow: 'from-emerald-500/15 via-teal-500/10 to-transparent border-emerald-500 ring-2 ring-emerald-500/30 shadow-lg shadow-emerald-500/15',
        checkBg: 'bg-emerald-600 text-white',
        borderAccent: 'border-emerald-500/50',
      };
  }
}

export const ProWizardView: React.FC<ProWizardViewProps> = ({
  state,
  onUpdateState,
  onNavigate,
  showToast,
}) => {
  // Stepper : 1 = Méthodes, 2 = Devoirs/Examens, 3 = Réorganisation, 4 = Google Agenda
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);

  // État Étape 2 : Matières & Devoirs / Examens (initialisé d'abord)
  const [subjectsList, setSubjectsList] = useState<Subject[]>(() => {
    if (state.subjects && state.subjects.length > 0) {
      return state.subjects.map(s => ({ ...s }));
    }
    return [
      {
        id: generateId(),
        name: 'Mathématiques Appliquées',
        code: 'MATH',
        coefficient: 6,
        difficulty: 4,
        targetGrade: 16,
        color: '#6366F1',
        examType: 'devoir' as EvaluationType,
        examDate: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      },
      {
        id: generateId(),
        name: 'Économie & Gestion',
        code: 'ECO',
        coefficient: 4,
        difficulty: 3,
        targetGrade: 15,
        color: '#0EA5E9',
      },
      {
        id: generateId(),
        name: 'Informatique & Algorithmique',
        code: 'INFO',
        coefficient: 5,
        difficulty: 3,
        targetGrade: 17,
        color: '#10B981',
      },
    ];
  });

  // Synchronisation dynamique si les matières sont chargées depuis le Cloud
  useEffect(() => {
    if (state.subjects && state.subjects.length > 0) {
      setSubjectsList(prev => {
        return state.subjects.map(s => {
          const existing = prev.find(p => p.id === s.id);
          if (existing && (existing.examDate || existing.examType)) {
            return {
              ...s,
              examDate: existing.examDate || s.examDate,
              examType: existing.examType || s.examType,
              examTime: existing.examTime || s.examTime,
            };
          }
          return { ...s };
        });
      });
    }
  }, [state.subjects]);

  // Recommandation intelligente KONAN selon la charge et l'emploi du temps
  const aiRecommendation = useMemo(() => {
    return recommendPacingStrategies(subjectsList.length, state.classSlots || []);
  }, [subjectsList.length, state.classSlots]);

  // État Étape 1 : Méthodes cognitives
  const [selectedPrimaryPacing, setSelectedPrimaryPacing] = useState<StudyPacing>(() => {
    return state.preferences.pacing || aiRecommendation.primaryId || 'pomodoro';
  });
  const [selectedCombinedPacings, setSelectedCombinedPacings] = useState<StudyPacing[]>(() => {
    const existing = state.preferences.combinedPacings;
    if (existing && existing.length > 0) return existing;
    return aiRecommendation.recommendedIds && aiRecommendation.recommendedIds.length > 0
      ? aiRecommendation.recommendedIds
      : [aiRecommendation.primaryId || 'pomodoro'];
  });

  // État ajout rapide de matière
  const [isAddingSubject, setIsAddingSubject] = useState(false);
  const [newSubjectName, setNewSubjectName] = useState('');
  const [newSubjectCoeff, setNewSubjectCoeff] = useState(4);
  const [newSubjectDifficulty, setNewSubjectDifficulty] = useState<1 | 2 | 3 | 4 | 5>(3);

  // État Étape 3 : Réorganisation algorithmique
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationProgress, setOptimizationProgress] = useState(0);
  const [optimizationStepLabel, setOptimizationStepLabel] = useState('');
  const [reorganizedSessions, setReorganizedSessions] = useState<StudySession[] | null>(null);
  const [selectedDayFilter, setSelectedDayFilter] = useState<DayOfWeek | 'all'>('all');

  // État Étape 4 : Téléchargement des rappels
  const [hasDownloadedIcs, setHasDownloadedIcs] = useState(false);
  const [hasOpenedGoogleCalendar, setHasOpenedGoogleCalendar] = useState(false);

  // État Accordéon pour les matières en Étape 2 (par défaut la première matière est ouverte)
  const [expandedSubjectId, setExpandedSubjectId] = useState<string | null>(() => subjectsList[0]?.id || null);

  // Gestion des méthodes en Étape 1
  const handleTogglePacing = (pacingId: StudyPacing) => {
    soundFX.playCheckmarkPop();
    if (selectedCombinedPacings.includes(pacingId)) {
      if (selectedCombinedPacings.length === 1) {
        showToast('Vous devez conserver au moins 1 méthode active.');
        return;
      }
      const updated = selectedCombinedPacings.filter(p => p !== pacingId);
      setSelectedCombinedPacings(updated);
      if (selectedPrimaryPacing === pacingId) {
        setSelectedPrimaryPacing(updated[0]);
      }
    } else {
      if (selectedCombinedPacings.length >= 3) {
        showToast('Konan Pro vous permet de combiner jusqu’à 3 méthodes simultanément.');
        return;
      }
      const updated = [...selectedCombinedPacings, pacingId];
      setSelectedCombinedPacings(updated);
      if (selectedCombinedPacings.length === 0) {
        setSelectedPrimaryPacing(pacingId);
      }
    }
  };

  const handleApplyAiRecommendation = () => {
    soundFX.playCheckmarkPop();
    const primary = aiRecommendation.primaryId;
    const targetPacings = aiRecommendation.recommendedIds && aiRecommendation.recommendedIds.length > 0
      ? aiRecommendation.recommendedIds
      : [primary];
    setSelectedPrimaryPacing(primary);
    setSelectedCombinedPacings(targetPacings);
    showToast(`Recommandation KONAN appliquée : ${targetPacings.map(id => getPacingStrategy(id).title.replace('La Technique de ', '').replace('La Technique ', '').replace("L'", '')).join(' + ')}`);
  };

  // Gestion des matières en Étape 2 avec persistance IMMÉDIATE (localStorage & Firestore)
  const handleUpdateSubject = (id: string, updates: Partial<Subject>) => {
    setSubjectsList(prev => {
      const nextSubjects = prev.map(s => s.id === id ? { ...s, ...updates } : s);
      const nextAppState: AppState = {
        ...state,
        planTier: 'pro',
        userAccount: state.userAccount ? {
          ...state.userAccount,
          planTier: 'pro',
        } : undefined,
        subjects: nextSubjects,
      };
      onUpdateState(nextAppState);
      return nextSubjects;
    });
  };

  const handleDeleteSubject = (id: string) => {
    if (subjectsList.length <= 1) {
      showToast('Conservez au moins 1 matière dans votre programme.');
      return;
    }
    soundFX.playCheckmarkPop();
    setSubjectsList(prev => {
      const nextSubjects = prev.filter(s => s.id !== id);
      const nextAppState: AppState = {
        ...state,
        planTier: 'pro',
        userAccount: state.userAccount ? {
          ...state.userAccount,
          planTier: 'pro',
        } : undefined,
        subjects: nextSubjects,
      };
      onUpdateState(nextAppState);
      return nextSubjects;
    });
  };

  const handleCreateSubject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSubjectName.trim()) return;
    const colors = ['#6366F1', '#0EA5E9', '#10B981', '#F59E0B', '#EC4899', '#8B5CF6'];
    const newSub: Subject = {
      id: generateId(),
      name: newSubjectName.trim(),
      coefficient: newSubjectCoeff,
      difficulty: newSubjectDifficulty,
      targetGrade: 15,
      color: colors[subjectsList.length % colors.length],
    };
    setSubjectsList(prev => {
      const nextSubjects = [...prev, newSub];
      const nextAppState: AppState = {
        ...state,
        planTier: 'pro',
        userAccount: state.userAccount ? {
          ...state.userAccount,
          planTier: 'pro',
        } : undefined,
        subjects: nextSubjects,
      };
      onUpdateState(nextAppState);
      return nextSubjects;
    });
    setNewSubjectName('');
    setIsAddingSubject(false);
    soundFX.playCheckmarkPop();
    showToast(`Matière "${newSub.name}" ajoutée.`);
  };

  // Déclenchement de la réorganisation algorithmique en Étape 3
  const handleRunReorganization = async () => {
    setIsOptimizing(true);
    setOptimizationProgress(15);
    soundFX.playCheckmarkPop();

    // 1. Simulation visuelle progressive pour feedback utilisateur vivant et interactif
    setOptimizationStepLabel('Analyse des coefficients et niveaux d’exigence...');
    await new Promise(r => setTimeout(r, 380));
    setOptimizationProgress(38);

    setOptimizationStepLabel('Préservation intégrale du socle de toutes vos matières...');
    await new Promise(r => setTimeout(r, 380));
    setOptimizationProgress(68);

    setOptimizationStepLabel('Surpondération ciblée des devoirs et échéances d’examens...');
    await new Promise(r => setTimeout(r, 380));
    setOptimizationProgress(88);

    setOptimizationStepLabel('Calibrage des blocs cognitifs et équilibrage hebdomadaire...');
    await new Promise(r => setTimeout(r, 300));
    setOptimizationProgress(100);

    // Préparation des préférences mises à jour
    const updatedPreferences: StudyPreferences = {
      ...state.preferences,
      pacing: selectedPrimaryPacing,
      combinedPacings: selectedCombinedPacings,
      focusBlockDuration: getPacingStrategy(selectedPrimaryPacing).focusBlockDuration,
      breakBlockDuration: getPacingStrategy(selectedPrimaryPacing).breakBlockDuration,
    };

    // Calcul de l'emploi du temps avec le palier PRO actif
    const newSessions = generateOptimizedStudyPlan(
      subjectsList,
      state.classSlots || [],
      updatedPreferences,
      'pro'
    );

    setReorganizedSessions(newSessions);
    setIsOptimizing(false);
    // REMPLACEMENT EXPLICITE : Pas d'applaudissements / fanfare, pop discret
    soundFX.playCheckmarkPop();
    showToast(`⚡ Emploi du temps réorganisé avec succès (${newSessions.length} séances planifiées) !`);
  };

  // Téléchargement du fichier de rappels .ics
  const handleDownloadReminders = () => {
    const sessionsToExport = reorganizedSessions || state.studySessions || [];
    if (sessionsToExport.length === 0) {
      showToast('Veuillez d’abord générer vos séances à l’étape précédente.');
      return;
    }
    downloadStudyPlanICS(
      sessionsToExport,
      subjectsList,
      state.preferences.studentName || 'Étudiant'
    );
    setHasDownloadedIcs(true);
    soundFX.playCheckmarkPop();
    showToast('Fichier de rappels (.ics) téléchargé avec succès !');
  };

  // Ouverture de Google Agenda
  const handleOpenGoogleCalendar = () => {
    window.open(getGoogleCalendarImportUrl(), '_blank', 'noopener,noreferrer');
    setHasOpenedGoogleCalendar(true);
    soundFX.playCheckmarkPop();
  };

  // Finalisation et enregistrement du palier Pro
  const handleCompleteWizard = () => {
    const sessionsToApply = reorganizedSessions || state.studySessions || [];
    const updatedPreferences: StudyPreferences = {
      ...state.preferences,
      pacing: selectedPrimaryPacing,
      combinedPacings: selectedCombinedPacings,
      focusBlockDuration: getPacingStrategy(selectedPrimaryPacing).focusBlockDuration,
      breakBlockDuration: getPacingStrategy(selectedPrimaryPacing).breakBlockDuration,
    };

    const nextState: AppState = {
      ...state,
      planTier: 'pro',
      userAccount: state.userAccount ? {
        ...state.userAccount,
        planTier: 'pro',
      } : undefined,
      preferences: updatedPreferences,
      subjects: subjectsList,
      studySessions: sessionsToApply,
    };

    onUpdateState(nextState);
    // REMPLACEMENT EXPLICITE : Pas d'applaudissements / fanfare
    soundFX.playCheckmarkPop();
    showToast('🚀 Configuration KONAN PRO enregistrée avec succès !');
    onNavigate('dashboard');
  };

  // Sessions filtrées pour l'aperçu
  const filteredSessions = useMemo(() => {
    if (!reorganizedSessions) return [];
    if (selectedDayFilter === 'all') return reorganizedSessions;
    return reorganizedSessions.filter(s => s.dayOfWeek === selectedDayFilter);
  }, [reorganizedSessions, selectedDayFilter]);

  // Statistiques de la réorganisation
  const totalHours = useMemo(() => {
    if (!reorganizedSessions) return 0;
    return Math.round(reorganizedSessions.reduce((acc, s) => acc + s.durationMinutes, 0) / 60);
  }, [reorganizedSessions]);

  const examPrepCount = useMemo(() => {
    if (!reorganizedSessions) return 0;
    return reorganizedSessions.filter(s => s.isExamPrep).length;
  }, [reorganizedSessions]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070B13] text-slate-900 dark:text-slate-100 transition-colors py-6 sm:py-8 px-3 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* =========================================================================
            HEADER COMPACT : BADGE PRO & QUITTER SUR UNE LIGNE, TITRE RESPONSIVE
            ========================================================================= */}
        <div className="space-y-3 border-b border-slate-200 dark:border-slate-800 pb-4 sm:pb-6">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 border border-amber-300 shadow-xs inline-flex items-center">
                PRO
              </span>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                Version PRO ouverte
              </span>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('dashboard')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Quitter le parcours</span>
            </button>
          </div>

          <div>
            <h1 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Configuration de votre Emploi du Temps Pro
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Personnalisez vos méthodes cognitives, vos devoirs et vos examens. L'algorithme réorganise votre semaine en optimisant chaque matière.
            </p>
          </div>
        </div>

        {/* =========================================================================
            BARRE DE PROGRESSION ANIMÉE FLUIDE
            ========================================================================= */}
        <div className="space-y-2">
          <div className="w-full bg-slate-200/80 dark:bg-slate-800/80 h-2 rounded-full overflow-hidden shadow-inner relative">
            <div 
              className="h-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 transition-all duration-500 ease-out rounded-full shadow-sm shadow-amber-400/50"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 dark:text-slate-400 px-1">
            <span>Étape {currentStep} sur 4</span>
          </div>
        </div>

        {/* =========================================================================
            STEPPER DES 4 ÉTAPES : CERCLE CENTRÉ AU-DESSUS DU TEXTE (ZÉRO TRONCATURE)
            ========================================================================= */}
        <div className="grid grid-cols-4 gap-1.5 sm:gap-2.5">
          {[
            { step: 1, label: 'Méthodes' },
            { step: 2, label: 'Devoirs' },
            { step: 3, label: 'Planning' },
            { step: 4, label: 'Agenda' },
          ].map(s => {
            const isActive = currentStep === s.step;
            const isCompleted = currentStep > s.step;

            return (
              <button
                key={s.step}
                type="button"
                onClick={() => {
                  if (s.step < currentStep || reorganizedSessions) {
                    soundFX.playCheckmarkPop();
                    setCurrentStep(s.step as any);
                  }
                }}
                disabled={s.step > currentStep && !reorganizedSessions}
                className={`py-2 px-1 sm:py-3 sm:px-2 rounded-xl sm:rounded-2xl border flex flex-col items-center justify-center text-center transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-br from-amber-500/10 via-yellow-500/5 to-transparent border-amber-400 dark:border-amber-400/80 shadow-md shadow-amber-500/10 ring-2 ring-amber-400/30 text-slate-900 dark:text-white'
                    : isCompleted
                    ? 'bg-emerald-500/10 dark:bg-emerald-950/20 border-emerald-500/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/15'
                    : 'bg-white/40 dark:bg-slate-900/30 border-slate-200/60 dark:border-slate-800/60 text-slate-400 opacity-60 cursor-not-allowed'
                }`}
              >
                <span className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full text-[10px] sm:text-xs font-bold flex items-center justify-center mb-1 shrink-0 transition-transform ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 font-black shadow-xs scale-105'
                    : isCompleted
                    ? 'bg-emerald-500 text-white shadow-xs'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                }`}>
                  {isCompleted ? <Check className="w-3 h-3 stroke-[3]" /> : s.step}
                </span>
                <span className={`text-[11px] sm:text-xs leading-tight whitespace-normal text-center ${
                  isActive ? 'font-bold text-slate-900 dark:text-white' : 'font-medium'
                }`}>
                  {s.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* =========================================================================
            ÉTAPE 1 : CHOIX DES MÉTHODES COGNITIVES (HAUTE INTERACTIVITÉ & COULEURS)
            ========================================================================= */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Banner Recommandation Pédagogique - Épuré, Lumineux & Sans Répétition */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-slate-900/5 dark:to-transparent border border-indigo-500/30 dark:border-indigo-500/40 shadow-sm space-y-3.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 w-fit">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                  Recommandation de Konan
                </span>

                <button
                  type="button"
                  onClick={handleApplyAiRecommendation}
                  className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs transition-all shadow-md shadow-indigo-600/20 active:scale-95 cursor-pointer shrink-0 inline-flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4 stroke-[2.5]" />
                  <span>✓ Appliquer le conseil</span>
                </button>
              </div>

              {/* Méthodes conseillées sous forme de badges lumineux côte à côte */}
              <div className="space-y-1.5">
                <span className="text-xs font-extrabold text-slate-900 dark:text-white block">
                  {aiRecommendation.recommendedIds.length > 1 ? 'Méthodes conseillées :' : 'Méthode conseillée :'}
                </span>
                <div className="flex flex-wrap gap-2">
                  {aiRecommendation.recommendedIds.map(id => (
                    <span 
                      key={id} 
                      className="text-xs font-bold px-3 py-1 rounded-lg bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-cyan-300 border border-indigo-300/60 dark:border-indigo-500/40 shadow-xs flex items-center gap-1.5"
                    >
                      <span className="text-amber-400">★</span>
                      <span>{getPacingStrategy(id).title}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Bloc unique Diagnostic de votre emploi du temps */}
              <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed bg-white/60 dark:bg-slate-950/40 p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800/80 space-y-1">
                <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span>📊 Diagnostic de votre emploi du temps</span>
                </div>
                <p className="whitespace-pre-line text-slate-600 dark:text-slate-300">
                  {aiRecommendation.rationale}
                </p>
              </div>
            </div>

            {/* Sélecteur de méthodes interactif avec thèmes colorés */}
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2 text-xs">
                <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 min-w-0">
                  <BookOpen className="w-4 h-4 text-amber-500 shrink-0" />
                  <span className="truncate">Sélectionnez jusqu'à 3 méthodes simultanées (Avantage Pro) :</span>
                </span>
                <span className="whitespace-nowrap px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 shrink-0 font-mono">
                  {selectedCombinedPacings.length} / 3 actives
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {PACING_STRATEGIES.map((strategy) => {
                  const isSelected = selectedCombinedPacings.includes(strategy.id);
                  const isPrimary = selectedPrimaryPacing === strategy.id;
                  const isProExclusive = strategy.planRequired === 'pro';
                  const theme = getStrategyTheme(strategy.id);

                  return (
                    <div
                      key={strategy.id}
                      onClick={() => handleTogglePacing(strategy.id)}
                      className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer relative flex flex-col justify-between gap-3 hover:-translate-y-0.5 ${
                        isSelected
                          ? `bg-white dark:bg-slate-900/90 ${theme.activeGlow}`
                          : 'bg-white/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs'
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <div className="space-y-1 min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-1.5">
                              <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">
                                {strategy.title}
                              </h4>
                              {isProExclusive && (
                                <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 border border-amber-300 shadow-xs shrink-0">
                                  PRO
                                </span>
                              )}
                            </div>
                            <span className={`inline-block text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border ${theme.badgeBg}`}>
                              {strategy.badge}
                            </span>
                          </div>

                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-transform mt-0.5 ${
                            isSelected
                              ? `${theme.checkBg} border-transparent scale-110 shadow-xs`
                              : 'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800'
                          }`}>
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </div>

                        <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                          {strategy.explanation}
                        </p>
                      </div>

                      {isSelected && (
                        <div className="flex items-center justify-between pt-2.5 border-t border-slate-100 dark:border-slate-800/80 text-[11px]">
                          <span className="font-extrabold text-slate-600 dark:text-slate-300 flex items-center gap-1">
                            {isPrimary ? (
                              <span className="text-amber-500 flex items-center gap-1 font-black">
                                ★ Méthode principale
                              </span>
                            ) : (
                              'Méthode d’appui'
                            )}
                          </span>
                          {!isPrimary && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedPrimaryPacing(strategy.id);
                                soundFX.playCheckmarkPop();
                              }}
                              className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline cursor-pointer"
                            >
                              Définir comme principale
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bouton de validation Étape 1 */}
            <div className="flex justify-end pt-4">
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  soundFX.playCheckmarkPop();
                  setCurrentStep(2);
                }}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="font-bold text-xs sm:text-sm px-6 shadow-md"
              >
                Continuer vers Devoirs & Examens
              </Button>
            </div>
          </div>
        )}

        {/* =========================================================================
            ÉTAPE 2 : DEVOIRS, EXAMENS & PRIORITÉS PAR MATIÈRE
            ========================================================================= */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Bannière Aucune matière n'est supprimée */}
            <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500/10 via-cyan-500/5 to-transparent border border-emerald-500/30 dark:border-emerald-500/40 shadow-xs flex items-start gap-3 text-xs">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="space-y-0.5 min-w-0">
                <h4 className="font-extrabold text-slate-900 dark:text-white">
                  Aucune matière n'est supprimée
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px] sm:text-xs">
                  L'intelligence de Konan intensifie les révisions pour vos devoirs et examens, tout en maintenant les créneaux réguliers de vos autres matières.
                </p>
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                Renseignez vos échéances de devoirs et examens
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Ajustez les coefficients et la difficulté. Pour les matières avec épreuves, cochez la case pour programmer la date.
              </p>
            </div>

            {/* Liste des matières en accordéon intelligent */}
            <div className="space-y-2.5">
              {subjectsList.map((subject) => {
                const hasExam = Boolean(subject.examDate);
                const daysRemaining = subject.examDate ? getDaysRemaining(subject.examDate) : null;
                const activeId = expandedSubjectId !== null ? expandedSubjectId : (subjectsList[0]?.id || null);
                const isExpanded = activeId === subject.id;

                return (
                  <div
                    key={subject.id}
                    className={`rounded-2xl bg-white dark:bg-slate-900/90 border transition-all duration-200 overflow-hidden shadow-xs ${
                      isExpanded 
                        ? 'border-slate-300 dark:border-slate-700 ring-1 ring-amber-500/20' 
                        : 'border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                    style={{ borderLeftColor: subject.color || '#6366F1', borderLeftWidth: '4px' }}
                  >
                    {/* Header compact cliquable (Accordéon) */}
                    <div
                      onClick={() => {
                        soundFX.playCheckmarkPop();
                        setExpandedSubjectId(isExpanded ? null : subject.id);
                      }}
                      className="p-3 sm:p-3.5 flex items-center justify-between gap-2.5 cursor-pointer select-none hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
                    >
                      <div className="flex items-center gap-2.5 min-w-0 flex-1">
                        <div
                          className="w-3.5 h-3.5 rounded-full shrink-0 shadow-xs"
                          style={{ backgroundColor: subject.color || '#6366F1' }}
                        />
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white break-words">
                              {subject.name}
                            </h4>
                            {hasExam && daysRemaining !== null && (
                              <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/40 inline-flex items-center gap-1 shrink-0">
                                <Flame className="w-2.5 h-2.5" />
                                J-{daysRemaining}
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] sm:text-[11px] text-slate-500 font-mono block">
                            Coeff {subject.coefficient} • Difficulté {subject.difficulty}/5
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteSubject(subject.id);
                          }}
                          className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors cursor-pointer rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                          title="Supprimer cette matière"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <div className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-amber-500" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-slate-400" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Contenu Déplié de la matière */}
                    {isExpanded && (
                      <div className="p-3.5 sm:p-4 pt-0 space-y-4 border-t border-slate-100 dark:border-slate-800/80 animate-in fade-in duration-200">
                        {/* Paramètres de la matière : Coeff & Difficulté */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                          <div className="space-y-1">
                            <div className="flex justify-between items-center text-[11px]">
                              <label className="font-bold text-slate-700 dark:text-slate-300">
                                Coefficient de la matière
                              </label>
                              <span className="font-mono font-extrabold px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                                Coeff {subject.coefficient}
                              </span>
                            </div>
                            <input
                              type="range"
                              min="1"
                              max="10"
                              value={subject.coefficient}
                              onChange={(e) => handleUpdateSubject(subject.id, { coefficient: Number(e.target.value) })}
                              className="w-full accent-amber-500 cursor-pointer"
                            />
                            <div className="flex justify-between text-[10px] font-mono text-slate-400">
                              <span>1 (Optionnel)</span>
                              <span>10 (Majeure)</span>
                            </div>
                          </div>

                          <div className="space-y-1">
                            <div className="flex justify-between items-center text-[11px]">
                              <label className="font-bold text-slate-700 dark:text-slate-300">
                                Difficulté perçue
                              </label>
                              <span className="font-mono font-extrabold px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                                {subject.difficulty} / 5
                              </span>
                            </div>
                            <input
                              type="range"
                              min="1"
                              max="5"
                              value={subject.difficulty}
                              onChange={(e) => handleUpdateSubject(subject.id, { difficulty: Number(e.target.value) as any })}
                              className="w-full accent-amber-500 cursor-pointer"
                            />
                            <div className="flex justify-between text-[10px] font-mono text-slate-400">
                              <span>Facile</span>
                              <span>Moyen</span>
                              <span>Complexe</span>
                            </div>
                          </div>
                        </div>

                        {/* Bloc Devoir / Examen programmé */}
                        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/60 space-y-3">
                          <div className="flex items-center justify-between">
                            <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 cursor-pointer select-none">
                              <input
                                type="checkbox"
                                checked={hasExam}
                                onChange={(e) => {
                                  soundFX.playCheckmarkPop();
                                  if (e.target.checked) {
                                    const defaultDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
                                    handleUpdateSubject(subject.id, {
                                      examDate: defaultDate,
                                      examType: 'devoir',
                                    });
                                  } else {
                                    handleUpdateSubject(subject.id, {
                                      examDate: undefined,
                                      examType: undefined,
                                    });
                                  }
                                }}
                                className="w-4 h-4 rounded accent-amber-500 cursor-pointer"
                              />
                              <span>Préparer un devoir surveillé ou un examen pour cette matière</span>
                            </label>
                          </div>

                          {hasExam && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 animate-in fade-in duration-200">
                              <div>
                                <span className="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-1">
                                  Type d'échéance :
                                </span>
                                <select
                                  value={subject.examType || 'devoir'}
                                  onChange={(e) => handleUpdateSubject(subject.id, { examType: e.target.value as EvaluationType })}
                                  className="w-full px-2.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-800 dark:text-slate-200"
                                >
                                  <option value="devoir">Devoir Surveillé (DS) / Contrôle continu</option>
                                  <option value="examen">Examen Final / Partiel</option>
                                  <option value="rattrapage">Session de Rattrapage</option>
                                </select>
                              </div>

                              <div>
                                <span className="block text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-1">
                                  Date de l'épreuve :
                                </span>
                                <input
                                  type="date"
                                  value={subject.examDate || ''}
                                  min={new Date().toISOString().split('T')[0]}
                                  onChange={(e) => handleUpdateSubject(subject.id, { examDate: e.target.value })}
                                  className="w-full px-2.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-800 dark:text-slate-200 font-mono"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Ajouter une nouvelle matière */}
            {isAddingSubject ? (
              <form onSubmit={handleCreateSubject} className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 space-y-3 shadow-md animate-in fade-in duration-200">
                <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">
                  Ajouter une nouvelle matière
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                  <div className="sm:col-span-2">
                    <input
                      type="text"
                      placeholder="Nom de la matière (ex: Droit des Affaires)"
                      value={newSubjectName}
                      onChange={(e) => setNewSubjectName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-xs font-medium"
                      autoFocus
                    />
                  </div>
                  <div>
                    <select
                      value={newSubjectCoeff}
                      onChange={(e) => setNewSubjectCoeff(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-xs font-medium"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(c => (
                        <option key={c} value={c}>Coefficient {c}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <select
                      value={newSubjectDifficulty}
                      onChange={(e) => setNewSubjectDifficulty(Number(e.target.value) as any)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-xs font-medium"
                    >
                      <option value={1}>Difficulté 1/5</option>
                      <option value={2}>Difficulté 2/5</option>
                      <option value={3}>Difficulté 3/5</option>
                      <option value={4}>Difficulté 4/5</option>
                      <option value={5}>Difficulté 5/5</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setIsAddingSubject(false)}
                    className="px-3 py-1.5 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 cursor-pointer"
                  >
                    Annuler
                  </button>
                  <Button type="submit" size="sm" variant="primary">
                    Enregistrer la matière
                  </Button>
                </div>
              </form>
            ) : (
              <button
                type="button"
                onClick={() => setIsAddingSubject(true)}
                className="w-full py-3.5 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-amber-400 dark:hover:border-amber-400 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 flex items-center justify-center gap-2 transition-all cursor-pointer bg-white/40 dark:bg-slate-900/40"
              >
                <Plus className="w-4 h-4" />
                <span>Ajouter une matière au programme</span>
              </button>
            )}

            {/* Navigation Étape 2 */}
            <div className="flex items-center justify-between pt-4">
              <Button
                variant="secondary"
                size="md"
                onClick={() => setCurrentStep(1)}
                leftIcon={<ArrowLeft className="w-4 h-4" />}
                className="font-bold text-xs"
              >
                Retour aux méthodes
              </Button>

              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  soundFX.playCheckmarkPop();
                  onUpdateState({
                    ...state,
                    planTier: 'pro',
                    userAccount: state.userAccount ? {
                      ...state.userAccount,
                      planTier: 'pro',
                    } : undefined,
                    subjects: subjectsList,
                  });
                  setCurrentStep(3);
                }}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="font-bold text-xs sm:text-sm px-6 shadow-md"
              >
                Passer à la Réorganisation
              </Button>
            </div>
          </div>
        )}

        {/* =========================================================================
            ÉTAPE 3 : RÉORGANISATION ALGORITHMIQUE (RADAR ANIMÉ & APERÇU INTERACTIF)
            ========================================================================= */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6 text-center shadow-sm relative overflow-hidden">
              
              {isOptimizing ? (
                <div className="space-y-6 py-6 animate-in fade-in duration-200">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-950 flex items-center justify-center shadow-md shadow-amber-400/20">
                    <Zap className="w-7 h-7" />
                  </div>

                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                      Organisation de votre semaine en cours...
                    </h3>
                    <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 min-h-[1.5rem]">
                      {optimizationStepLabel}
                    </p>
                  </div>

                  <div className="w-full max-w-md mx-auto bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 transition-all duration-300 rounded-full"
                      style={{ width: `${optimizationProgress}%` }}
                    />
                  </div>
                </div>
              ) : (
                <>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-400 via-yellow-400 to-amber-500 text-slate-950 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/20">
                    <Zap className="w-7 h-7" />
                  </div>

                  <div className="space-y-1.5 max-w-lg mx-auto">
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                      Réorganisation algorithmique de votre semaine
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      L'intelligence de Konan redistribue vos sessions d'étude en intégrant vos coefficients, vos dates d'échéances et la méthode <strong>{getPacingStrategy(selectedPrimaryPacing).title}</strong>, avec un équilibre optimal pour chaque matière.
                    </p>
                  </div>

                  {/* Résumé des critères configurés */}
                  <div className="grid grid-cols-3 gap-2.5 max-w-lg mx-auto text-center">
                    <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/60 flex flex-col items-center justify-center">
                      <span className="text-xl font-bold text-slate-900 dark:text-white font-mono">
                        {subjectsList.length}
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        Matières
                      </span>
                    </div>
                    <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/60 flex flex-col items-center justify-center">
                      <span className="text-xl font-bold text-amber-500 dark:text-amber-400 font-mono">
                        {subjectsList.filter(s => s.examDate).length}
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        Échéances
                      </span>
                    </div>
                    <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/60 flex flex-col items-center justify-center">
                      <span className="text-xl font-bold text-emerald-500 dark:text-emerald-400 font-mono">
                        {selectedCombinedPacings.length}
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        Méthode active
                      </span>
                    </div>
                  </div>

                  {/* Bouton de réorganisation */}
                  <div className="pt-2 flex justify-center">
                    <button
                      type="button"
                      onClick={handleRunReorganization}
                      className="w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-2xl font-black text-xs sm:text-sm bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 border border-amber-300 shadow-lg shadow-amber-500/20 hover:from-amber-300 hover:to-yellow-300 active:scale-95 transition-all cursor-pointer inline-flex items-center justify-center gap-2"
                    >
                      <Zap className="w-4 h-4 fill-slate-950 shrink-0" />
                      <span>{reorganizedSessions ? 'Relancer la réorganisation' : '⚡ Réorganiser mon emploi du temps avec Konan Pro'}</span>
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Aperçu interactif du planning généré */}
            {reorganizedSessions && (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                {/* Cartes de statistiques clés */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-700 dark:text-indigo-300">
                    <span className="text-[10px] font-bold uppercase tracking-wider block">Séances</span>
                    <span className="text-base sm:text-lg font-black">{reorganizedSessions.length} sessions</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300">
                    <span className="text-[10px] font-bold uppercase tracking-wider block">Volume Total</span>
                    <span className="text-base sm:text-lg font-black">{totalHours}h / semaine</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300">
                    <span className="text-[10px] font-bold uppercase tracking-wider block">Boosters Examen</span>
                    <span className="text-base sm:text-lg font-black">{examPrepCount} créneaux prioritaires</span>
                  </div>
                </div>

                {/* Filtre par jour */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1">
                  <span className="text-xs font-bold text-slate-500 flex items-center gap-1 pr-1">
                    <Filter className="w-3.5 h-3.5" />
                    Filtrer :
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedDayFilter('all')}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      selectedDayFilter === 'all'
                        ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                    }`}
                  >
                    Toute la semaine ({reorganizedSessions.length})
                  </button>
                  {DAYS_OF_WEEK.map(d => {
                    const count = reorganizedSessions.filter(s => s.dayOfWeek === d.id).length;
                    if (count === 0) return null;
                    return (
                      <button
                        key={d.id}
                        type="button"
                        onClick={() => setSelectedDayFilter(d.id)}
                        className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 ${
                          selectedDayFilter === d.id
                            ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xs'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                        }`}
                      >
                        {d.short} ({count})
                      </button>
                    );
                  })}
                </div>

                {/* Grille des séances réorganisées */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[50vh] overflow-y-auto pr-1">
                  {filteredSessions.map(s => {
                    const sub = subjectsList.find(sub => sub.id === s.subjectId);
                    const dayLabel = DAYS_OF_WEEK.find(d => d.id === s.dayOfWeek)?.label || s.dayOfWeek;

                    return (
                      <div
                        key={s.id}
                        className="p-3.5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-2 shadow-xs transition-all hover:border-slate-300 dark:hover:border-slate-700"
                        style={{ borderLeftColor: sub?.color || '#6366F1', borderLeftWidth: '4px' }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                            {dayLabel}
                          </span>
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                            {s.startTime}
                          </span>
                        </div>

                        <div>
                          <h5 className="text-xs font-extrabold text-slate-900 dark:text-white truncate">
                            {sub?.name || s.title}
                          </h5>
                          <div className="flex items-center gap-1.5 text-[10px] text-slate-500 mt-0.5">
                            <Clock className="w-3 h-3" />
                            <span>{s.durationMinutes} min de concentration</span>
                          </div>
                        </div>

                        <div className="pt-1 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80">
                          {s.isExamPrep ? (
                            <span className="text-[9px] font-black uppercase tracking-wider text-rose-600 dark:text-rose-400 flex items-center gap-1 bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 rounded-md border border-rose-300 dark:border-rose-500/40">
                              <Flame className="w-3 h-3" />
                              Booster Examen
                            </span>
                          ) : (
                            <span className="text-[9px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-800/60 px-2 py-0.5 rounded-md">
                              Programme
                            </span>
                          )}

                          <span className="text-[9px] font-mono text-slate-400">
                            {getPacingStrategy(selectedPrimaryPacing).title.split(' ')[0]}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Validation vers Étape 4 */}
                <div className="flex justify-end pt-2">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => {
                      soundFX.playCheckmarkPop();
                      onUpdateState({
                        ...state,
                        planTier: 'pro',
                        userAccount: state.userAccount ? {
                          ...state.userAccount,
                          planTier: 'pro',
                        } : undefined,
                        subjects: subjectsList,
                        studySessions: reorganizedSessions || state.studySessions,
                      });
                      setCurrentStep(4);
                    }}
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                    className="font-bold text-xs sm:text-sm px-6 shadow-md"
                  >
                    Valider et passer à la synchronisation Google Agenda
                  </Button>
                </div>
              </div>
            )}

            {/* Navigation arrière si non encore réorganisé */}
            {!reorganizedSessions && (
              <div className="flex justify-start pt-2">
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => setCurrentStep(2)}
                  leftIcon={<ArrowLeft className="w-4 h-4" />}
                  className="font-bold text-xs"
                >
                  Retour aux devoirs & examens
                </Button>
              </div>
            )}
          </div>
        )}

        {/* =========================================================================
            ÉTAPE 4 : TÉLÉCHARGEMENT DES RAPPELS & GOOGLE AGENDA
            ========================================================================= */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm">
              <div className="space-y-2 text-center max-w-xl mx-auto">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-400 via-yellow-400 to-amber-500 text-slate-950 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/20">
                  <Calendar className="w-7 h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                  Téléchargement des rappels & Synchronisation Google Agenda
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Pour garantir votre assiduité et ne jamais oublier une séance de travail, téléchargez vos alertes programmées et activez-les sur votre téléphone.
                </p>
              </div>

              {/* Fiche d'information sur les rappels */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-2 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <span>Rappels sonores intégrés avant chaque session :</span>
                </div>
                <ul className="space-y-1.5 pl-6 list-disc">
                  <li><strong>Alerte 30 minutes avant :</strong> Vous avertit pour préparer vos cours et organiser votre espace de travail.</li>
                  <li><strong>Alerte 10 minutes avant :</strong> Décompte final pour couper les distractions et vous installer.</li>
                  <li><strong>Répétition hebdomadaire perpétuelle :</strong> S'applique automatiquement à tous les jours de la semaine (Lundi à Dimanche).</li>
                </ul>
              </div>

              {/* Les 2 étapes de synchronisation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 1. Télécharger le fichier .ics */}
                <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 space-y-4 flex flex-col justify-between hover:border-amber-400/60 transition-all">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                      Étape 1 Obligatoire
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      Télécharger les rappels (.ics)
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Génère le fichier calendrier universel avec l'ensemble des notifications sonores configurées.
                    </p>
                  </div>

                  <Button
                    variant={hasDownloadedIcs ? "secondary" : "primary"}
                    size="md"
                    onClick={handleDownloadReminders}
                    leftIcon={hasDownloadedIcs ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Download className="w-4 h-4" />}
                    className="w-full font-bold text-xs py-3"
                  >
                    {hasDownloadedIcs ? 'Rappels téléchargés (Re-télécharger)' : '1. Télécharger les rappels (.ics)'}
                  </Button>
                </div>

                {/* 2. Ouvrir Google Agenda */}
                <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 space-y-4 flex flex-col justify-between hover:border-indigo-400/60 transition-all">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                      Étape 2
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      Importer dans Google Agenda
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Ouvre directement l'interface d'importation Google Agenda pour glisser-déposer le fichier téléchargé.
                    </p>
                  </div>

                  <Button
                    variant="secondary"
                    size="md"
                    onClick={handleOpenGoogleCalendar}
                    rightIcon={<ExternalLink className="w-4 h-4" />}
                    className="w-full font-bold text-xs py-3"
                  >
                    {hasOpenedGoogleCalendar ? 'Page d’import ouverte' : '2. Ouvrir Google Agenda'}
                  </Button>
                </div>
              </div>

              {/* Bouton de finalisation global */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => setCurrentStep(3)}
                  leftIcon={<ArrowLeft className="w-4 h-4" />}
                  className="font-bold text-xs w-full sm:w-auto"
                >
                  Modifier le planning
                </Button>

                <button
                  type="button"
                  onClick={handleCompleteWizard}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-2xl font-black text-xs sm:text-sm bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 border border-amber-300 shadow-lg shadow-amber-500/25 hover:from-amber-300 hover:to-yellow-300 active:scale-95 transition-all cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Terminer et accéder à mon espace Konan Pro</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
