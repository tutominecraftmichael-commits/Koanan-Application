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
  importStateFromJson,
  fetchAndMergeCloudState
} from './services/storage';
import { generateOptimizedStudyPlan } from './services/plannerAlgorithm';
import { harmonizeAndDeduplicateSlots } from './services/pdfParserService';
import { onFirebaseAuthStateChange, signOutReal, listenToUserCloudState } from './lib/firebase';
import { evaluateDailyCatchup, resetDailyRescheduling } from './services/sessionRescheduler';
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
import { soundFX } from './lib/audioEffects';

// Layout
import { Navbar } from './components/layout/Navbar';
import { SettingsModal } from './components/layout/SettingsModal';
import { ProFeatureModal } from './components/common/ProFeatureModal';

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
  const [isProModalOpen, setIsProModalOpen] = useState(false);
  const [proModalFeature, setProModalFeature] = useState<{ title: string; desc: string } | undefined>(undefined);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const lastRescheduledSignature = useRef<string>('');
  const hasGreetedAuthRef = useRef<string>('');

  // Persist state whenever it changes
  useEffect(() => {
    saveAppState(state);
  }, [state]);

  // Dynamic Real-Time Adaptability: Detect missed sessions of today and reschedule for evening catch-up
  useEffect(() => {
    // Never run catch-up checks if user is logged out or guest
    if (!state.userAccount?.isLoggedIn && !state.isDemoMode) return;
    if (!state.studySessions || state.studySessions.length === 0) return;

    const performCatchupCheck = () => {
      setState(prev => {
        // Strict guard: Never trigger reorganization toasts when user is logged out
        if (!prev.userAccount?.isLoggedIn && !prev.isDemoMode) return prev;
        if (!prev.studySessions || prev.studySessions.length === 0) return prev;

        const { updatedSessions, rescheduledCount, restoredCount, rescheduledSessions } = evaluateDailyCatchup(
          prev.studySessions,
          prev.classSlots,
          prev.preferences
        );

        if (rescheduledCount > 0) {
          const signature = rescheduledSessions.map(s => `${s.id}-${s.startTime}`).sort().join('|');
          if (signature !== lastRescheduledSignature.current) {
            lastRescheduledSignature.current = signature;
            const detailMsg = rescheduledSessions.length === 1
              ? `🔄 Planning réorganisé : "${rescheduledSessions[0].title}" a été replacée à ${rescheduledSessions[0].startTime} ce soir pour rattrapage.`
              : `🔄 Planning réorganisé : ${rescheduledSessions.length} sessions non validées replacées ce soir pour rattrapage.`;
            showToast(detailMsg);
          }
          return {
            ...prev,
            studySessions: updatedSessions,
          };
        }

        if (restoredCount > 0) {
          lastRescheduledSignature.current = '';
          return {
            ...prev,
            studySessions: updatedSessions,
          };
        }

        return prev;
      });
    };

    // Run check on mount and view transitions
    performCatchupCheck();

    // Check periodically every 60 seconds
    const interval = setInterval(performCatchupCheck, 60000);

    // Re-check on window/tab focus (e.g. user unlocks mobile phone or refocuses browser tab)
    const handleFocus = () => performCatchupCheck();
    window.addEventListener('focus', handleFocus);

    return () => {
      clearInterval(interval);
      window.removeEventListener('focus', handleFocus);
    };
  }, [state.studySessions.length, state.classSlots.length, activeView]);

  const handleResetDailyCatchup = () => {
    setState(prev => {
      const restored = resetDailyRescheduling(prev.studySessions);
      return {
        ...prev,
        studySessions: restored,
      };
    });
    showToast('🔄 Planning standard d’aujourd’hui rétabli.');
  };

  // Listen to Firebase auth state changes on mount and sync with Cloud Firestore
  useEffect(() => {
    let unsubscribeCloudListener: (() => void) | null = null;

    const unsubscribeAuth = onFirebaseAuthStateChange(async (firebaseUser) => {
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

          // 1. Cross-device sync: fetch latest Firestore cloud state
          const synced = await fetchAndMergeCloudState(firebaseUser.uid, loaded);
          setState(synced);

          // Greeting upon reconnect: ensure the user reliably sees "Bon retour [Nom] !"
          const greetingName = synced.studentName || loaded.studentName || firebaseUser.displayName || 'Étudiant';
          if (hasGreetedAuthRef.current !== firebaseUser.uid) {
            hasGreetedAuthRef.current = firebaseUser.uid;
            showToast(`✨ Bon retour ${greetingName} !`);
            setActiveView(prev => (prev === 'auth' ? 'dashboard' : prev));
          }

          // 2. Real-time multi-device synchronization
          if (unsubscribeCloudListener) unsubscribeCloudListener();
          unsubscribeCloudListener = listenToUserCloudState(firebaseUser.uid, (cloudData) => {
            if (cloudData) {
              setState(prev => {
                if (prev.isDemoMode) return prev;
                return {
                  ...prev,
                  studentName: cloudData.studentName || prev.studentName,
                  academicLevel: cloudData.academicLevel || prev.academicLevel,
                  planTier: cloudData.planTier || prev.planTier || 'free',
                  completedOnboarding: cloudData.completedOnboarding ?? prev.completedOnboarding,
                  subjects: cloudData.subjects || prev.subjects,
                  classSlots: cloudData.classSlots || prev.classSlots,
                  preferences: cloudData.preferences ? { ...prev.preferences, ...cloudData.preferences } : prev.preferences,
                  studySessions: cloudData.studySessions || prev.studySessions,
                  logs: cloudData.logs || prev.logs,
                  userAccount: prev.userAccount ? {
                    ...prev.userAccount,
                    planTier: cloudData.planTier || prev.planTier || 'free',
                    name: cloudData.studentName || prev.userAccount.name,
                  } : undefined,
                };
              });
            }
          });
        }
      } else {
        if (unsubscribeCloudListener) {
          unsubscribeCloudListener();
          unsubscribeCloudListener = null;
        }
      }
    });

    return () => {
      unsubscribeAuth();
      if (unsubscribeCloudListener) unsubscribeCloudListener();
    };
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
  const handleLoginSuccess = async (profile: UserAccount, preferences?: { chronotype: Chronotype }) => {
    let userState = loadUserState(profile.googleId, profile);
    
    // Retain previously saved student name if customized, or use profile.name
    const finalName = userState.studentName || profile.name || 'Étudiant';

    setActiveSession({
      uid: profile.googleId,
      isDemo: false,
      name: finalName,
      email: profile.email,
      avatar: profile.avatar,
      academicLevel: profile.academicLevel,
    });

    // Apply chronotype preference if specified
    if (preferences?.chronotype) {
      userState.preferences.chronotype = preferences.chronotype;
    }
    userState.academicLevel = profile.academicLevel || userState.academicLevel;
    userState.studentName = finalName;
    userState.userAccount = {
      ...profile,
      name: finalName,
      isLoggedIn: true,
      isDemo: false,
    };
    userState.isDemoMode = false;

    // Cross-device sync: merge any data saved from other devices (e.g. mobile or PC)
    const mergedFromCloud = await fetchAndMergeCloudState(profile.googleId, userState);
    userState = mergedFromCloud;

    saveUserState(profile.googleId, userState);
    setState(userState);

    // Always display the requested "Bon retour" message upon reconnecting
    hasGreetedAuthRef.current = profile.googleId;
    showToast(`✨ Bon retour ${finalName} !`);

    if (userState.completedOnboarding || userState.subjects.length > 0) {
      setActiveView('dashboard');
    } else {
      setActiveView('upload-schedule');
    }
  };

  /**
   * Plan selection from Landing Hero / Pricing:
   * When connected user selects "free", directly access free features.
   */
  const handleSelectPlan = (planId: 'free' | 'pro' | 'plus') => {
    if (state.userAccount?.isLoggedIn) {
      if (planId === 'free') {
        const updated: AppState = {
          ...state,
          planTier: 'free',
          userAccount: state.userAccount ? {
            ...state.userAccount,
            planTier: 'free',
          } : undefined,
        };

        if (state.preferences.pacing === 'feynman' || state.preferences.pacing === 'time_blocking') {
          updated.preferences = {
            ...state.preferences,
            pacing: 'pomodoro',
            focusBlockDuration: 25,
            breakBlockDuration: 5,
          };
        }

        if (state.userAccount?.googleId && !state.isDemoMode) {
          saveUserState(state.userAccount.googleId, updated);
        }
        setState(updated);

        showToast('✨ Vous êtes sur KONAN (Modèle Gratuit - Free) !');
        if (state.completedOnboarding || state.subjects.length > 0) {
          setActiveView('dashboard');
        } else {
          setActiveView('upload-schedule');
        }
      } else {
        setProModalFeature({
          title: planId === 'pro' ? 'Formule KONAN PRO' : 'Formule KONAN PLUS',
          desc: planId === 'pro'
            ? 'Passez à KONAN PRO (1 200 F CFA / mois) pour débloquer les méthodes Feynman et Time Blocking, le suivi automatique des dates d’examen et les rappels intelligents Google Agenda.'
            : 'Passez à KONAN PLUS (2 500 F CFA / mois) pour bénéficier du coaching VIP Konan, du calibrage par objectif scolaire (12, 16 ou Major) et des tête-à-tête bimensuels.'
        });
        setIsProModalOpen(true);
      }
    } else {
      setActiveView('auth');
    }
  };

  /**
   * Instant and complete redirection to the pricing section:
   * Closes any modals, switches to 'landing', and smoothly scrolls down to '#pricing'
   */
  const handleViewPricing = () => {
    setIsProModalOpen(false);
    if (activeView !== 'landing') {
      setActiveView('landing');
    }
    setTimeout(() => {
      const pricingEl = document.getElementById('pricing') || document.querySelector('[data-section="pricing"]');
      if (pricingEl) {
        pricingEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 80);
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
    hasGreetedAuthRef.current = '';
    lastRescheduledSignature.current = '';
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
      const daySessions = updatedSessions.filter(s => s.dayOfWeek === target.dayOfWeek);
      const isDayFullyComplete = daySessions.length > 0 && daySessions.every(s => s.completed);
      if (isDayFullyComplete) {
        soundFX.playCelebrationFanfare();
        showToast('🎉 Bravo ! Toutes les révisions prévues aujourd’hui sont terminées !');
      }
    }

    setState(prev => ({
      ...prev,
      studySessions: updatedSessions,
    }));
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
    const updatedSessions = state.studySessions.map(s => 
      s.id === sessionId ? { ...s, completed: true, completedAt: new Date().toISOString() } : s
    );

    soundFX.playCelebrationFanfare();

    setState(prev => ({
      ...prev,
      studySessions: updatedSessions,
      logs: [log, ...prev.logs],
    }));
    showToast('🎉 Bravo ! Session de focus terminée avec succès !');
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
        onViewPricing={handleViewPricing}
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
      <main className={`flex-1 w-full mx-auto overflow-x-hidden ${
        activeView === 'landing'
          ? 'max-w-full p-0'
          : 'max-w-7xl px-3 sm:px-6 lg:px-8 py-4 sm:py-8'
      }`}>
        
        {/* Landing Page */}
        {activeView === 'landing' && (
          <LandingHero
            isLoggedIn={Boolean(state.userAccount?.isLoggedIn)}
            currentPlan={state.planTier || state.userAccount?.planTier || 'free'}
            onSelectPlan={handleSelectPlan}
            onStartApp={() => {
              if (state.userAccount?.isLoggedIn) {
                if (state.completedOnboarding || state.subjects.length > 0) {
                  setActiveView('dashboard');
                } else {
                  setActiveView('upload-schedule');
                }
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
              planTier={state.planTier || state.userAccount?.planTier || 'free'}
              onApplyExtractedSchedule={handleApplyExtractedSchedule}
              onCancel={() => setActiveView('dashboard')}
              onViewPricing={handleViewPricing}
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
              planTier={state.planTier || state.userAccount?.planTier || 'free'}
              onNavigate={handleNavigate}
              onViewPricing={handleViewPricing}
              onStartFocus={handleStartFocusSession}
              onToggleSessionComplete={handleToggleSessionComplete}
              onOpenPresetModal={() => {
                if (state.isDemoMode) setIsPresetModalOpen(true);
              }}
              onResetDailyCatchup={handleResetDailyCatchup}
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
              planTier={state.planTier || state.userAccount?.planTier || 'free'}
              onUpdateClassSlots={handleUpdateClassSlots}
              onUpdateSubjects={handleUpdateSubjects}
              onUpdatePreferences={handleUpdatePreferences}
              onTriggerPlanner={() => setActiveView('planner')}
              onStartFocusSession={handleStartFocusSession}
              onNavigate={handleNavigate}
              onViewPricing={handleViewPricing}
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
              planTier={state.planTier || state.userAccount?.planTier || 'free'}
              onUpdateSubjects={handleUpdateSubjects}
              onTriggerPlanner={() => setActiveView('planner')}
              onViewPricing={handleViewPricing}
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
              planTier={state.planTier || state.userAccount?.planTier || 'free'}
              onRegeneratePlan={handleRegeneratePlan}
              onToggleSessionComplete={handleToggleSessionComplete}
              onStartFocusSession={handleStartFocusSession}
              onAddCustomSession={handleAddCustomSession}
              onUpdatePreferences={handleUpdatePreferences}
              onViewPricing={handleViewPricing}
              onResetDailyCatchup={handleResetDailyCatchup}
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

      {/* Pro Upgrade Modal */}
      <ProFeatureModal
        isOpen={isProModalOpen}
        onClose={() => setIsProModalOpen(false)}
        featureTitle={proModalFeature?.title}
        featureDescription={proModalFeature?.desc}
        onViewPricing={handleViewPricing}
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
