import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap } from 'lucide-react';
import type { AppState } from './services/storage';
import { 
  loadAppState, 
  saveAppState, 
  loadUserState,
  saveUserState,
  loadDemoState,
  createEmptyUserState,
  createInitialStateFromPreset,
  getActiveSession,
  setActiveSession,
  exportStateToJson,
  importStateFromJson 
} from './services/storage';
import { generateOptimizedStudyPlan } from './services/plannerAlgorithm';
import { harmonizeAndDeduplicateSlots } from './services/pdfParserService';
import { onFirebaseAuthStateChange, signOutReal } from './lib/firebase';
import type { 
  ActiveAppView, 
  Subject, 
  ClassSlot, 
  StudySession, 
  StudyPreferences, 
  StudyLog,
  UserAccount,
  Chronotype
} from './types';
import { DAYS_OF_WEEK } from './types';
import { soundFX } from './lib/audioEffects';

// Layout
import { Navbar } from './components/layout/Navbar';
import { SettingsModal } from './components/layout/SettingsModal';
import { BlueFlameStreakModal } from './features/streak/BlueFlameStreakModal';

// Views
import { LandingHero } from './features/landing/LandingHero';
import { AuthPage } from './features/auth/AuthPage';
import { PdfUploadView } from './features/schedule/PdfUploadView';
import { DashboardOverview } from './features/dashboard/DashboardOverview';
import { ScheduleManager } from './features/schedule/ScheduleManager';
import { SubjectManager } from './features/subjects/SubjectManager';
import { PlannerView } from './features/planner/PlannerView';
import { FocusMode } from './features/focus/FocusMode';
import { AnalyticsDashboard } from './features/analytics/AnalyticsDashboard';
import { PresetModal } from './features/onboarding/PresetModal';

export function App() {
  const [state, setState] = useState<AppState>(() => loadAppState());
  const [activeView, setActiveView] = useState<ActiveAppView>('landing');
  const [focusSession, setFocusSession] = useState<StudySession | null>(null);
  const [isPresetModalOpen, setIsPresetModalOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [streakModalData, setStreakModalData] = useState<{
    isOpen: boolean;
    streakCount: number;
    bestStreak?: number;
    dayName?: string;
    completedSubjects: string[];
    isCelebration: boolean;
    isFlameActive?: boolean;
    rendezvousMessage?: string;
  }>({
    isOpen: false,
    streakCount: 0,
    bestStreak: 0,
    completedSubjects: [],
    isCelebration: false,
    isFlameActive: false,
    rendezvousMessage: 'Rendez-vous demain !',
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Persist state whenever it changes
  useEffect(() => {
    saveAppState(state);
  }, [state]);

  // Listen to Firebase auth state changes on mount
  useEffect(() => {
    const unsubscribe = onFirebaseAuthStateChange((firebaseUser) => {
      if (firebaseUser) {
        // User is logged into Firebase
        const session = getActiveSession();
        if (!session?.isDemo) {
          const loaded = loadUserState(firebaseUser.uid, {
            name: firebaseUser.displayName || 'Étudiant',
            email: firebaseUser.email || '',
            avatar: firebaseUser.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(firebaseUser.displayName || 'User')}`,
            googleId: firebaseUser.uid,
            academicLevel: 'Licence Universitaire',
            isLoggedIn: true,
            isDemo: false,
            lastSyncedAt: new Date().toISOString(),
          });
          setState(loaded);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  /**
   * Safe Navigation with Strict Auth Gate:
   * Non-connected users cannot access working views or import without authenticating!
   */
  const handleNavigate = (view: ActiveAppView) => {
    if (state.isDemoMode && view === 'upload-schedule') {
      showToast('ℹ️ En mode démo, l’importation personnalisée est désactivée. Utilisez les exemples d’EDT démo.');
      return;
    }

    const isAuth = state.userAccount?.isLoggedIn || state.isDemoMode;

    if (!isAuth && view !== 'landing' && view !== 'auth') {
      showToast('🔒 Connexion requise : Veuillez vous connecter avec Google pour accéder à l’application.');
      setActiveView('auth');
      return;
    }

    setActiveView(view);
  };

  /**
   * Real Google / Custom Profile Login Success:
   * Strictly isolates real user data (ZERO demo courses, clean workspace)
   */
  const handleLoginSuccess = (profile: UserAccount, preferences?: { chronotype: Chronotype }) => {
    setActiveSession({
      uid: profile.googleId,
      isDemo: false,
      name: profile.name,
      email: profile.email,
      avatar: profile.avatar,
      academicLevel: profile.academicLevel,
    });

    const userState = loadUserState(profile.googleId, profile);
    
    // Apply chronotype preference if specified
    if (preferences?.chronotype) {
      userState.preferences.chronotype = preferences.chronotype;
    }
    userState.academicLevel = profile.academicLevel || userState.academicLevel;
    userState.studentName = profile.name;
    userState.userAccount = {
      ...profile,
      isLoggedIn: true,
      isDemo: false,
    };
    userState.isDemoMode = false;

    saveUserState(profile.googleId, userState);
    setState(userState);

    showToast(`✨ Bienvenue ${profile.name} ! Importez votre emploi du temps.`);
    setActiveView('upload-schedule');
  };

  /**
   * Explicit Demo Mode (Alexandre Étudiant):
   * Strictly segregated and only place where changing presets/filières is allowed.
   */
  const handleEnterDemoMode = () => {
    const demo = loadDemoState();
    setActiveSession({
      isDemo: true,
      name: 'Alexandre Étudiant (Compte Démo)',
      email: 'alexandre.universite@etudiant.univ.fr',
    });

    setState(demo);
    showToast('🎓 Mode Démo activé (Alexandre Étudiant). Les modèles de filières sont disponibles.');
    setActiveView('dashboard');
  };

  /**
   * Logout handler:
   * Disconnects Firebase and resets to unauthenticated Guest state.
   */
  const handleLogout = async () => {
    await signOutReal();
    setActiveSession(null);

    const guestPreset = createInitialStateFromPreset('cs-engineering');
    setState({
      ...guestPreset,
      userAccount: {
        ...guestPreset.userAccount!,
        isLoggedIn: false,
      },
      isDemoMode: false,
    });

    showToast('Compte déconnecté.');
    setActiveView('landing');
  };

  /**
   * Timetable applied: generates study plan and transitions to planner
   */
  const handleApplyExtractedSchedule = (payload: {
    subjects: Subject[];
    classSlots: ClassSlot[];
    preferences: StudyPreferences;
    studySessions: StudySession[];
  }) => {
    setState(prev => {
      const updated: AppState = {
        ...prev,
        academicLevel: payload.preferences.academicLevel,
        subjects: payload.subjects,
        classSlots: payload.classSlots,
        preferences: payload.preferences,
        studySessions: payload.studySessions,
        logs: [],
        completedOnboarding: true,
      };
      return updated;
    });

    showToast('🎉 Emploi du temps synchronisé & planning d’étude optimisé généré !');
    setActiveView('planner');
  };

  const handleUpdateSubjects = (newSubjects: Subject[]) => {
    const updatedPlan = generateOptimizedStudyPlan(newSubjects, state.classSlots, state.preferences);
    setState(prev => ({
      ...prev,
      subjects: newSubjects,
      studySessions: updatedPlan,
    }));
    showToast('Matières mises à jour et planning recalculé !');
  };

  const handleUpdateClassSlots = (newSlots: ClassSlot[]) => {
    const harmonized = harmonizeAndDeduplicateSlots(newSlots);
    const updatedPlan = generateOptimizedStudyPlan(state.subjects, harmonized, state.preferences);
    setState(prev => ({
      ...prev,
      classSlots: harmonized,
      studySessions: updatedPlan,
    }));
    showToast("Emploi du temps mis à jour avec succès !");
  };

  const handleUpdatePreferences = (newPrefs: StudyPreferences) => {
    const updatedPlan = generateOptimizedStudyPlan(state.subjects, state.classSlots, newPrefs);
    setState(prev => ({
      ...prev,
      preferences: newPrefs,
      studySessions: updatedPlan,
    }));
    showToast("Préférences d'étude enregistrées !");
  };

  const handleUpdateProfile = (updated: { 
    name: string; 
    academicLevel: string; 
    phoneNumber?: string; 
    countryCode?: string 
  }) => {
    setState(prev => {
      const nextUserAccount = prev.userAccount ? {
        ...prev.userAccount,
        name: updated.name,
        academicLevel: updated.academicLevel,
        phoneNumber: updated.phoneNumber,
        countryCode: updated.countryCode,
        lastSyncedAt: new Date().toISOString(),
      } : undefined;

      const next = {
        ...prev,
        studentName: updated.name,
        academicLevel: updated.academicLevel,
        userAccount: nextUserAccount,
        preferences: {
          ...prev.preferences,
          studentName: updated.name,
          academicLevel: updated.academicLevel,
        }
      };

      if (prev.userAccount?.googleId && !prev.isDemoMode) {
        saveUserState(prev.userAccount.googleId, next);
      }

      return next;
    });

    showToast('✅ Profil mis à jour avec succès !');
  };

  const handleRegeneratePlan = () => {
    const freshPlan = generateOptimizedStudyPlan(state.subjects, state.classSlots, state.preferences);
    setState(prev => ({
      ...prev,
      studySessions: freshPlan,
    }));
    showToast('✨ Votre planning d’étude a été réorganisé avec succès !');
  };

  const checkAndTriggerStreakCelebration = (
    updatedSessions: StudySession[],
    targetSession: StudySession
  ): boolean => {
    // Check if all sessions for that day of week are now completed
    const daySessions = updatedSessions.filter(s => s.dayOfWeek === targetSession.dayOfWeek);
    const isDayFullyComplete = daySessions.length > 0 && daySessions.every(s => s.completed);

    if (isDayFullyComplete) {
      const dayLabel = DAYS_OF_WEEK.find(d => d.id === targetSession.dayOfWeek)?.label || 'Aujourd’hui';
      const todayDateStr = new Date().toISOString().split('T')[0];
      const sessionDateStr = targetSession.date || todayDateStr;

      const currentStreak = state.streak?.currentStreak || 0;
      const bestStreak = state.streak?.bestStreak || 0;
      const completedDates = state.streak?.completedDates || [];
      const alreadyCelebrated = completedDates.includes(sessionDateStr);

      const newStreak = alreadyCelebrated ? Math.max(1, currentStreak) : currentStreak + 1;
      const newBest = Math.max(bestStreak, newStreak);
      const newCompletedDates = alreadyCelebrated ? completedDates : [...completedDates, sessionDateStr];

      // Retrieve unique subject names completed for this day
      const subjectNames = Array.from(new Set(
        daySessions.map(s => {
          const sub = state.subjects.find(m => m.id === s.subjectId);
          return sub ? sub.name : s.title;
        })
      ));

      // Calculate next scheduled revision day (e.g. "Rendez-vous Lundi !" if finishing Saturday)
      const daysWithSessions = Array.from(new Set(state.studySessions.map(s => s.dayOfWeek)));
      let rendezvousMsg = 'Rendez-vous demain !';
      if (daysWithSessions.length > 0) {
        for (let offset = 1; offset <= 7; offset++) {
          const candidateDay = ((targetSession.dayOfWeek + offset) % 7);
          if (daysWithSessions.includes(candidateDay as any)) {
            const nextDayObj = DAYS_OF_WEEK.find(d => d.id === candidateDay);
            if (offset === 1) {
              rendezvousMsg = `Rendez-vous demain (${nextDayObj?.label}) !`;
            } else {
              rendezvousMsg = `Rendez-vous ${nextDayObj?.label} !`;
            }
            break;
          }
        }
      }

      // Check 72h streak freeze recharge
      let currentFreezes = state.streak?.freezesAvailable ?? 3;
      let lastFreezeAt = state.streak?.lastFreezeUsedAt;
      if (lastFreezeAt && currentFreezes < 3) {
        const elapsedHours = (Date.now() - new Date(lastFreezeAt).getTime()) / (1000 * 3600);
        const restored = Math.floor(elapsedHours / 72);
        if (restored > 0) {
          currentFreezes = Math.min(3, currentFreezes + restored);
          if (currentFreezes >= 3) {
            lastFreezeAt = undefined;
          }
        }
      }

      setState(prev => ({
        ...prev,
        studySessions: updatedSessions,
        streak: {
          currentStreak: newStreak,
          bestStreak: newBest,
          lastCelebratedDate: sessionDateStr,
          completedDates: newCompletedDates,
          freezesAvailable: currentFreezes,
          freezeDates: prev.streak?.freezeDates || [],
          lastFreezeUsedAt: lastFreezeAt,
        }
      }));

      setStreakModalData({
        isOpen: true,
        streakCount: newStreak,
        bestStreak: newBest,
        dayName: dayLabel,
        completedSubjects: subjectNames,
        isCelebration: true,
        rendezvousMessage: rendezvousMsg,
      });

      return true;
    }
    return false;
  };

  const handleToggleSessionComplete = (sessionId: string) => {
    const target = state.studySessions.find(s => s.id === sessionId);
    if (!target) return;

    soundFX.playCheckmarkPop();
    const willBeCompleted = !target.completed;
    const updatedSessions = state.studySessions.map(s => 
      s.id === sessionId 
        ? { ...s, completed: willBeCompleted, completedAt: willBeCompleted ? new Date().toISOString() : undefined } 
        : s
    );

    if (willBeCompleted) {
      const celebrated = checkAndTriggerStreakCelebration(updatedSessions, target);
      if (celebrated) return;
    }

    setState(prev => ({
      ...prev,
      studySessions: updatedSessions,
    }));
  };

  const handleOpenStreakModal = () => {
    const currentDayIndex = (new Date().getDay() + 6) % 7;
    const currentDayLabel = DAYS_OF_WEEK.find(d => d.id === currentDayIndex)?.label || 'Aujourd’hui';
    const todaysSessions = state.studySessions.filter(s => s.dayOfWeek === currentDayIndex);
    const completedToday = todaysSessions.filter(s => s.completed);
    const subjectNames = Array.from(new Set(
      completedToday.map(s => {
        const sub = state.subjects.find(m => m.id === s.subjectId);
        return sub ? sub.name : s.title;
      })
    ));

    // Calculate rendezvous next study day
    const daysWithSessions = Array.from(new Set(state.studySessions.map(s => s.dayOfWeek)));
    let rendezvousMsg = 'Rendez-vous demain !';
    if (daysWithSessions.length > 0) {
      for (let offset = 1; offset <= 7; offset++) {
        const candidateDay = ((currentDayIndex + offset) % 7);
        if (daysWithSessions.includes(candidateDay as any)) {
          const nextDayObj = DAYS_OF_WEEK.find(d => d.id === candidateDay);
          if (offset === 1) {
            rendezvousMsg = `Rendez-vous demain (${nextDayObj?.label}) !`;
          } else {
            rendezvousMsg = `Rendez-vous ${nextDayObj?.label} !`;
          }
          break;
        }
      }
    }

    const isTodayComplete = todaysSessions.length > 0 && completedToday.length === todaysSessions.length;

    setStreakModalData({
      isOpen: true,
      streakCount: state.streak?.currentStreak || 0,
      bestStreak: state.streak?.bestStreak || 0,
      dayName: currentDayLabel,
      completedSubjects: subjectNames,
      isCelebration: false,
      isFlameActive: isTodayComplete,
      rendezvousMessage: rendezvousMsg,
    });
  };

  const handleAddCustomSession = (session: StudySession) => {
    setState(prev => ({
      ...prev,
      studySessions: [...prev.studySessions, session],
    }));
    showToast('Nouvelle session ajoutée au planning !');
  };

  const handleStartFocusSession = (session: StudySession) => {
    setFocusSession(session);
    setActiveView('focus');
  };

  const handleCompleteFocusSession = (sessionId: string, log: StudyLog) => {
    const target = state.studySessions.find(s => s.id === sessionId);
    const updatedSessions = state.studySessions.map(s => 
      s.id === sessionId ? { ...s, completed: true, completedAt: new Date().toISOString() } : s
    );

    if (target) {
      const celebrated = checkAndTriggerStreakCelebration(updatedSessions, target);
      if (celebrated) {
        setState(prev => ({
          ...prev,
          logs: [log, ...prev.logs],
        }));
        showToast('🎉 Bravo ! Session terminée et Flamme Bleue allumée !');
        return;
      }
    }

    setState(prev => ({
      ...prev,
      studySessions: updatedSessions,
      logs: [log, ...prev.logs],
    }));
    showToast('🎉 Bravo ! Session enregistrée dans vos analytics.');
  };

  /**
   * Only allowed in Demo mode!
   */
  const handleSelectPreset = (presetId: string) => {
    if (!state.isDemoMode) {
      showToast('Le changement de filière prédéfinie est réservé au mode démo.');
      return;
    }
    const freshState = createInitialStateFromPreset(presetId);
    setState(freshState);
    showToast(`Modèle "${freshState.academicLevel}" chargé avec succès !`);
  };

  const handleExportData = () => {
    const dataStr = exportStateToJson(state);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `konan-ai-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Export de vos données réussi !');
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const imported = importStateFromJson(content);
      if (imported) {
        setState(imported);
        showToast('Configuration importée avec succès !');
      } else {
        alert("Fichier JSON invalide pour l'import KONAN.");
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleResetData = () => {
    if (confirm("Réinitialiser vos données actuelles aux paramètres par défaut ?")) {
      if (state.isDemoMode) {
        const initial = loadDemoState();
        setState(initial);
      } else if (state.userAccount) {
        const clean = createEmptyUserState(state.userAccount);
        setState(clean);
      }
      showToast('Espace réinitialisé.');
    }
  };

  return (
    <div className="min-h-screen bg-[#090E17] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      
      {/* Hidden file input for JSON configuration backup imports */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImportFile}
        accept=".json"
        className="hidden"
      />

      {/* Persistent Navbar */}
      <Navbar
        activeView={activeView}
        onNavigate={handleNavigate}
        studentName={state.studentName}
        academicLevel={state.academicLevel}
        userAccount={state.userAccount}
        isDemoMode={state.isDemoMode}
        onOpenPresetModal={() => {
          if (state.isDemoMode) {
            setIsPresetModalOpen(true);
          }
        }}
        onExportData={handleExportData}
        onImportData={() => fileInputRef.current?.click()}
        onResetData={handleResetData}
        onLogout={handleLogout}
        onOpenSettings={() => setIsSettingsOpen(true)}
        totalStudySessions={state.studySessions.length}
        completedSessions={state.studySessions.filter(s => s.completed).length}
      />

      {/* Main View Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8">
        
        {/* Landing Page */}
        {activeView === 'landing' && (
          <LandingHero
            onStartApp={() => {
              if (state.userAccount?.isLoggedIn) {
                setActiveView('upload-schedule');
              } else {
                setActiveView('auth');
              }
            }}
            onSelectPreset={handleEnterDemoMode}
          />
        )}

        {/* Dedicated Google Auth Page */}
        {activeView === 'auth' && (
          <AuthPage
            onLoginSuccess={handleLoginSuccess}
            onEnterDemoMode={handleEnterDemoMode}
            onBackToLanding={() => setActiveView('landing')}
            currentProfile={state.userAccount}
          />
        )}

        {/* Timetable Upload & AI Analysis Engine: STRICTLY PROTECTED */}
        {activeView === 'upload-schedule' && (
          (state.userAccount?.isLoggedIn && !state.isDemoMode) ? (
            <PdfUploadView
              studentName={state.studentName}
              onApplyExtractedSchedule={handleApplyExtractedSchedule}
              onCancel={() => setActiveView('dashboard')}
            />
          ) : state.isDemoMode ? (
            <div className="text-center py-16 space-y-4 glass-panel max-w-md mx-auto p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto shadow-lg shadow-indigo-500/10">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-white">Mode Démo : Importation Désactivée</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  L'importation de fichiers et documents est réservée aux comptes connectés. En mode démo, vous pouvez charger et tester les différents modèles d'EDT prédéfinis.
                </p>
              </div>
              <div className="flex flex-col gap-2.5 pt-3">
                <button
                  onClick={() => setIsPresetModalOpen(true)}
                  className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-colors cursor-pointer shadow-md shadow-indigo-600/20"
                >
                  Charger un exemple d'EDT Démo
                </button>
                <button
                  onClick={() => setActiveView('auth')}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors cursor-pointer"
                >
                  Se connecter pour importer mon propre EDT
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 space-y-4">
              <p className="text-lg text-white font-bold">Connexion requise pour importer votre emploi du temps.</p>
              <button
                onClick={() => setActiveView('auth')}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs cursor-pointer"
              >
                Se connecter avec Google
              </button>
            </div>
          )
        )}

        {/* Dashboard: STRICTLY PROTECTED */}
        {activeView === 'dashboard' && (
          (state.userAccount?.isLoggedIn || state.isDemoMode) ? (
            <DashboardOverview
              studentName={state.studentName}
              academicLevel={state.academicLevel}
              subjects={state.subjects}
              classSlots={state.classSlots}
              studySessions={state.studySessions}
              preferences={state.preferences}
              isDemoMode={state.isDemoMode}
              onNavigate={handleNavigate}
              onStartFocus={handleStartFocusSession}
              onToggleSessionComplete={handleToggleSessionComplete}
              streak={state.streak}
              onOpenStreakModal={handleOpenStreakModal}
              onOpenPresetModal={() => {
                if (state.isDemoMode) setIsPresetModalOpen(true);
              }}
            />
          ) : (
            <div className="text-center py-16 space-y-4">
              <p className="text-lg text-white font-bold">Veuillez vous connecter pour accéder à votre tableau de bord.</p>
              <button
                onClick={() => setActiveView('auth')}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs"
              >
                Se connecter avec Google
              </button>
            </div>
          )
        )}

        {/* Schedule: STRICTLY PROTECTED */}
        {activeView === 'schedule' && (
          (state.userAccount?.isLoggedIn || state.isDemoMode) ? (
            <ScheduleManager
              studentName={state.studentName}
              academicLevel={state.academicLevel}
              subjects={state.subjects}
              classSlots={state.classSlots}
              studySessions={state.studySessions}
              preferences={state.preferences}
              isDemoMode={state.isDemoMode}
              onUpdateClassSlots={handleUpdateClassSlots}
              onUpdateSubjects={handleUpdateSubjects}
              onUpdatePreferences={handleUpdatePreferences}
              onTriggerPlanner={() => setActiveView('planner')}
              onStartFocusSession={handleStartFocusSession}
              onNavigate={handleNavigate}
              onOpenPresetModal={() => {
                if (state.isDemoMode) setIsPresetModalOpen(true);
              }}
            />
          ) : (
            <div className="text-center py-16 space-y-4">
              <p className="text-lg text-white font-bold">Connexion requise pour consulter votre emploi du temps.</p>
              <button
                onClick={() => setActiveView('auth')}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs"
              >
                Se connecter avec Google
              </button>
            </div>
          )
        )}

        {/* Subjects: STRICTLY PROTECTED */}
        {activeView === 'subjects' && (
          (state.userAccount?.isLoggedIn || state.isDemoMode) ? (
            <SubjectManager
              subjects={state.subjects}
              isDemoMode={state.isDemoMode}
              onUpdateSubjects={handleUpdateSubjects}
              onTriggerPlanner={() => setActiveView('planner')}
              onOpenPresetModal={() => {
                if (state.isDemoMode) setIsPresetModalOpen(true);
              }}
            />
          ) : (
            <div className="text-center py-16 space-y-4">
              <p className="text-lg text-white font-bold">Connexion requise pour gérer vos matières.</p>
              <button
                onClick={() => setActiveView('auth')}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs"
              >
                Se connecter avec Google
              </button>
            </div>
          )
        )}

        {/* Planner: STRICTLY PROTECTED */}
        {activeView === 'planner' && (
          (state.userAccount?.isLoggedIn || state.isDemoMode) ? (
            <PlannerView
              subjects={state.subjects}
              classSlots={state.classSlots}
              studySessions={state.studySessions}
              preferences={state.preferences}
              onRegeneratePlan={handleRegeneratePlan}
              onToggleSessionComplete={handleToggleSessionComplete}
              onStartFocusSession={handleStartFocusSession}
              onAddCustomSession={handleAddCustomSession}
              onUpdatePreferences={handleUpdatePreferences}
            />
          ) : (
            <div className="text-center py-16 space-y-4">
              <p className="text-lg text-white font-bold">Connexion requise pour accéder à votre planning personnalisé.</p>
              <button
                onClick={() => setActiveView('auth')}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs"
              >
                Se connecter avec Google
              </button>
            </div>
          )
        )}

        {/* Focus Mode: STRICTLY PROTECTED */}
        {activeView === 'focus' && (
          (state.userAccount?.isLoggedIn || state.isDemoMode) ? (
            <FocusMode
              session={focusSession || state.studySessions[0] || null}
              subjects={state.subjects}
              onCompleteSession={handleCompleteFocusSession}
              onExit={() => setActiveView('planner')}
            />
          ) : (
            <div className="text-center py-16 space-y-4">
              <p className="text-lg text-white font-bold">Connexion requise pour lancer une session focus.</p>
              <button
                onClick={() => setActiveView('auth')}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs"
              >
                Se connecter avec Google
              </button>
            </div>
          )
        )}

        {/* Analytics: STRICTLY PROTECTED */}
        {activeView === 'analytics' && (
          (state.userAccount?.isLoggedIn || state.isDemoMode) ? (
            <AnalyticsDashboard
              subjects={state.subjects}
              studySessions={state.studySessions}
              logs={state.logs}
              preferences={state.preferences}
            />
          ) : (
            <div className="text-center py-16 space-y-4">
              <p className="text-lg text-white font-bold">Connexion requise pour consulter vos analytics de progression.</p>
              <button
                onClick={() => setActiveView('auth')}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs"
              >
                Se connecter avec Google
              </button>
            </div>
          )
        )}
      </main>

      {/* Academic Track Presets Modal (ONLY FOR DEMO MODE) */}
      {state.isDemoMode && (
        <PresetModal
          isOpen={isPresetModalOpen}
          onClose={() => setIsPresetModalOpen(false)}
          onSelectPreset={handleSelectPreset}
          currentLevel={state.academicLevel}
        />
      )}

      {/* User Settings & Profile Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        userAccount={state.userAccount}
        studentName={state.studentName}
        academicLevel={state.academicLevel}
        isDemoMode={state.isDemoMode}
        onLogout={handleLogout}
        onUpdateProfile={handleUpdateProfile}
        onExportData={handleExportData}
        onImportData={() => fileInputRef.current?.click()}
        onResetData={handleResetData}
      />

      {/* Duolingo-style Blue Flame Streak Celebration & Status Modal */}
      <BlueFlameStreakModal
        isOpen={streakModalData.isOpen}
        onClose={() => setStreakModalData(prev => ({ ...prev, isOpen: false }))}
        streakCount={streakModalData.streakCount}
        bestStreak={streakModalData.bestStreak}
        studentName={state.studentName}
        dayName={streakModalData.dayName}
        completedSubjects={streakModalData.completedSubjects}
        isCelebration={streakModalData.isCelebration}
        isFlameActive={streakModalData.isCelebration || (streakModalData.isFlameActive ?? false)}
        rendezvousMessage={streakModalData.rendezvousMessage}
        freezesAvailable={state.streak?.freezesAvailable ?? 3}
        completedDates={state.streak?.completedDates || []}
        freezeDates={state.streak?.freezeDates || []}
      />

      {/* Floating Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] sm:bottom-6 right-4 sm:right-6 z-50 bg-slate-900 border border-blue-500/50 text-white px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-2xl shadow-2xl shadow-blue-950/40 text-xs font-semibold flex items-center gap-2 animate-in slide-in-from-bottom-5 duration-200 max-w-[90vw]">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping shrink-0" />
          <span className="truncate">{toastMessage}</span>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-900 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] text-center text-xs text-slate-400 bg-slate-950/60 mt-auto px-4">
        <p>KONAN — Copilote Académique & Product Engineering d'Excellence</p>
      </footer>

    </div>
  );
}
export default App;
