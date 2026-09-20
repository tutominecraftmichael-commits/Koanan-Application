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
import { 
  onFirebaseAuthStateChange, 
  signOutReal, 
  listenToUserCloudState 
} from './lib/firebase';
import { evaluateDailyCatchup, resetDailyRescheduling } from './services/sessionRescheduler';
import type { 
  ActiveAppView, 
  Subject, 
  ClassSlot, 
  StudySession, 
  StudyLog,
  StudyPreferences, 
  UserAccount,
  Chronotype
} from './types';
import { generateId } from './lib/utils';
import { Sparkles, X } from 'lucide-react';
import { soundFX } from './lib/audioEffects';

// Layout
import { Navbar } from './components/layout/Navbar';
import { SettingsModal } from './components/layout/SettingsModal';
import { ProFeatureModal } from './components/common/ProFeatureModal';
import { GoogleCalendarSyncModal } from './components/common/GoogleCalendarSyncModal';
import { UltimateCompletionCelebrationModal } from './components/celebration/UltimateCompletionCelebrationModal';
import { downloadStudyPlanICS } from './services/googleCalendarService';

// Views
import { LandingHero } from './features/landing/LandingHero';
import { AuthPage } from './features/auth/AuthPage';
import { PdfUploadView } from './features/schedule/PdfUploadView';
import { DashboardOverview } from './features/dashboard/DashboardOverview';
import { ScheduleManager } from './features/schedule/ScheduleManager';
import { SubjectManager } from './features/subjects/SubjectManager';
import { PlannerView } from './features/planner/PlannerView';
import { AnalyticsDashboard } from './features/analytics/AnalyticsDashboard';
import { PresetModal } from './features/onboarding/PresetModal';

export function App() {
  const [state, setState] = useState<AppState>(() => loadAppState());
  const [activeView, setActiveView] = useState<ActiveAppView>('landing');
  const [isPresetModalOpen, setIsPresetModalOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isProModalOpen, setIsProModalOpen] = useState(false);
  const [isGoogleCalendarModalOpen, setIsGoogleCalendarModalOpen] = useState(false);
  const [googleCalendarReason, setGoogleCalendarReason] = useState<'pro_activated' | 'plan_applied' | null>(null);
  const [isUltimateCelebrationOpen, setIsUltimateCelebrationOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  /**
   * Automatic Google Calendar & 15-min reminder sync for ALL days of the week:
   * Downloads the recurring .ics file and opens the interactive Google Agenda sync modal.
   */
  const triggerAutoGoogleCalendarSync = (
    sessions: StudySession[],
    subjects: Subject[],
    studentName: string,
    reason: 'pro_activated' | 'plan_applied'
  ) => {
    if (sessions && sessions.length > 0) {
      try {
        downloadStudyPlanICS(sessions, subjects, studentName);
      } catch (err) {
        console.warn('ICS auto-download error:', err);
      }
    }
    setGoogleCalendarReason(reason);
    setIsGoogleCalendarModalOpen(true);
    soundFX.playSuccessChime();
  };

  const fileInputRef = useRef<HTMLInputElement>(null);
  const lastRescheduledSignature = useRef<string>('');
  const hasGreetedAuthRef = useRef<string>('');
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

        // If weekly cycle was completed today, student has finished all tasks: wait until tomorrow
        const todayStr = new Date().toISOString().slice(0, 10);
        if (prev.cycleCompletedDate === todayStr) return prev;

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

          // 1. Instant greeting and redirection to dashboard (0ms latency, never wait for network)
          const greetingName = loaded.studentName || firebaseUser.displayName || 'Étudiant';
          if (hasGreetedAuthRef.current !== firebaseUser.uid) {
            hasGreetedAuthRef.current = firebaseUser.uid;
            showToast(`✨ Bonne Arrivée ! ${greetingName}`);
          }
          setActiveView(prev => (prev === 'auth' || prev === 'landing' || prev === 'upload-schedule' ? 'dashboard' : prev));

          // 2. Cross-device sync in background: non-blocking
          fetchAndMergeCloudState(firebaseUser.uid, loaded).then(synced => {
            if (synced && (synced.subjects.length > 0 || synced.completedOnboarding)) {
              setState(synced);
            }
          }).catch(console.warn);

          // 3. Real-time multi-device synchronization
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
                  subjects: (cloudData.subjects && cloudData.subjects.length > 0) ? cloudData.subjects : prev.subjects,
                  classSlots: (cloudData.classSlots && cloudData.classSlots.length > 0) ? cloudData.classSlots : prev.classSlots,
                  preferences: cloudData.preferences ? { ...prev.preferences, ...cloudData.preferences } : prev.preferences,
                  studySessions: (cloudData.studySessions && cloudData.studySessions.length > 0) ? cloudData.studySessions : prev.studySessions,
                  logs: cloudData.logs || prev.logs,
                  cycleCompletedDate: cloudData.cycleCompletedDate !== undefined ? cloudData.cycleCompletedDate : prev.cycleCompletedDate,
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

  const showToast = (msg: string, duration = 5000) => {
    setToastMessage(msg);
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage(null);
    }, duration);
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

    const pendingPlan = (localStorage.getItem('konan_pending_plan') as 'free' | 'pro' | 'plus' | null);
    const effectivePlan = pendingPlan || userState.planTier || profile.planTier || 'free';
    if (pendingPlan) {
      localStorage.removeItem('konan_pending_plan');
    }

    userState.planTier = effectivePlan;
    userState.userAccount = {
      ...profile,
      planTier: effectivePlan,
      name: finalName,
      isLoggedIn: true,
      isDemo: false,
    };
    userState.isDemoMode = false;

    // Only push to cloud immediately if local device already has subjects
    if (userState.subjects && userState.subjects.length > 0) {
      saveUserState(profile.googleId, userState);
    }
    setState(userState);

    // 1. Instant greeting and direct redirection to dashboard (0ms latency, no blocking)
    hasGreetedAuthRef.current = profile.googleId;
    if (effectivePlan === 'pro') {
      showToast(`⭐ Bonne Arrivée ! ${finalName} — Votre modèle KONAN PRO est actif.`);
    } else if (effectivePlan === 'plus') {
      showToast(`👑 Bonne Arrivée ! ${finalName} — Votre modèle KONAN PLUS est actif.`);
    } else {
      showToast(`✨ Bonne Arrivée ! ${finalName}`);
    }

    // If PRO or PLUS was chosen/pending and sessions exist, automatically sync Google Agenda for all days
    if ((effectivePlan === 'pro' || effectivePlan === 'plus') && userState.studySessions && userState.studySessions.length > 0) {
      triggerAutoGoogleCalendarSync(
        userState.studySessions,
        userState.subjects,
        finalName,
        'pro_activated'
      );
    }

    setActiveView('dashboard');

    // 2. Background cross-device sync: merges cloud state without delaying navigation
    fetchAndMergeCloudState(profile.googleId, userState)
      .then(mergedFromCloud => {
        if (mergedFromCloud && (mergedFromCloud.subjects?.length > 0 || mergedFromCloud.completedOnboarding)) {
          saveUserState(profile.googleId, mergedFromCloud);
          setState(mergedFromCloud);
          if ((effectivePlan === 'pro' || effectivePlan === 'plus') && (!userState.studySessions || userState.studySessions.length === 0) && mergedFromCloud.studySessions?.length > 0) {
            triggerAutoGoogleCalendarSync(
              mergedFromCloud.studySessions,
              mergedFromCloud.subjects,
              finalName,
              'pro_activated'
            );
          }
        }
      })
      .catch(console.warn);
  };

  /**
   * Plan selection from Landing Hero / Pricing / Modals:
   * Directly activates the chosen model on the student account.
   */
  const handleSelectPlan = (planId: 'free' | 'pro' | 'plus') => {
    setIsProModalOpen(false);

    if (state.userAccount?.isLoggedIn || state.isDemoMode) {
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

        showToast('✨ Vous êtes sur le modèle KONAN Gratuit (Free).');
        if (activeView === 'landing' || activeView === 'auth') {
          setActiveView('dashboard');
        }
      } else if (planId === 'pro') {
        const updated: AppState = {
          ...state,
          planTier: 'pro',
          userAccount: state.userAccount ? {
            ...state.userAccount,
            planTier: 'pro',
          } : undefined,
        };

        if (state.userAccount?.googleId && !state.isDemoMode) {
          saveUserState(state.userAccount.googleId, updated);
        }
        setState(updated);

        // 🌟 AUTOMATIC SYNC TO GOOGLE AGENDA FOR ALL DAYS WITH 15-MIN PHONE ALERTS
        triggerAutoGoogleCalendarSync(
          state.studySessions,
          state.subjects,
          state.studentName || state.userAccount?.name || 'Étudiant',
          'pro_activated'
        );

        showToast('⭐ Félicitations ! Le modèle KONAN PRO est activé ! Synchronisation Google Agenda automatique déclenchée pour TOUS LES JOURS (Alertes 15 min).');
        if (activeView === 'landing' || activeView === 'auth') {
          setActiveView('dashboard');
        }
      } else if (planId === 'plus') {
        const updated: AppState = {
          ...state,
          planTier: 'plus',
          userAccount: state.userAccount ? {
            ...state.userAccount,
            planTier: 'plus',
          } : undefined,
        };

        if (state.userAccount?.googleId && !state.isDemoMode) {
          saveUserState(state.userAccount.googleId, updated);
        }
        setState(updated);

        // 🌟 AUTOMATIC SYNC TO GOOGLE AGENDA FOR ALL DAYS WITH 15-MIN PHONE ALERTS
        triggerAutoGoogleCalendarSync(
          state.studySessions,
          state.subjects,
          state.studentName || state.userAccount?.name || 'Étudiant',
          'pro_activated'
        );

        showToast('👑 Félicitations ! Le modèle KONAN PLUS est activé ! Coaching VIP & Synchronisation Google Agenda pour tous les jours.');
        if (activeView === 'landing' || activeView === 'auth') {
          setActiveView('dashboard');
        }
      }
    } else {
      localStorage.setItem('konan_pending_plan', planId);
      showToast(`⭐ Connectez-vous avec Google ou démarrez la démo pour activer le modèle ${planId === 'pro' ? 'KONAN PRO' : planId === 'plus' ? 'KONAN PLUS' : 'KONAN Gratuit'}.`);
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
    const pendingPlan = (localStorage.getItem('konan_pending_plan') as 'free' | 'pro' | 'plus' | null);
    if (pendingPlan) {
      demo.planTier = pendingPlan;
      if (demo.userAccount) {
        demo.userAccount.planTier = pendingPlan;
      }
      localStorage.removeItem('konan_pending_plan');
    }

    setActiveSession({
      isDemo: true,
      name: 'Alexandre Étudiant (Compte Démo)',
      email: 'alexandre.universite@etudiant.univ.fr',
    });

    setState(demo);
    if (demo.planTier === 'pro' || demo.planTier === 'plus') {
      triggerAutoGoogleCalendarSync(
        demo.studySessions,
        demo.subjects,
        'Alexandre Étudiant',
        'pro_activated'
      );
      showToast('⭐ Mode Démo KONAN PRO : Synchronisation Google Agenda automatique déclenchée pour TOUS LES JOURS (Alertes 15 min) !');
    } else {
      showToast('🎓 Mode Démo activé (Alexandre Étudiant). Les modèles de filières sont disponibles.');
    }
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

    // 🌟 If on KONAN PRO, automatically trigger Google Agenda sync for all days
    const isPro = state.planTier === 'pro' || state.userAccount?.planTier === 'pro' || state.planTier === 'plus' || state.userAccount?.planTier === 'plus';
    if (isPro && payload.studySessions.length > 0) {
      triggerAutoGoogleCalendarSync(
        payload.studySessions,
        payload.subjects,
        state.studentName || state.userAccount?.name || 'Étudiant',
        'plan_applied'
      );
    }

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

    const currentDayIndex = (new Date().getDay() + 6) % 7;
    const dayNames = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    const currentDayName = dayNames[currentDayIndex];
    const targetDayName = dayNames[target.dayOfWeek] || 'ce jour';

    // Anti-cheat verification: Only allow validating today's study sessions
    if (target.dayOfWeek !== currentDayIndex) {
      soundFX.playNotificationPing();
      showToast(`🔒 Anti-triche : Vous pouvez uniquement valider les révisions prévues pour aujourd'hui (${currentDayName}). Cette séance est prévue pour ${targetDayName}.`, 5000);
      return;
    }

    soundFX.playCheckmarkPop();
    const willBeCompleted = !target.completed;
    const updatedSessions = state.studySessions.map(s => 
      s.id === sessionId 
        ? { ...s, completed: willBeCompleted, completedAt: willBeCompleted ? new Date().toISOString() : undefined } 
        : s
    );

    const newLog: StudyLog = {
      id: generateId(),
      sessionId: target.id,
      subjectId: target.subjectId,
      date: new Date().toISOString().slice(0, 10),
      durationMinutes: target.durationMinutes,
      satisfactionRating: 5,
      summary: `Session de ${target.durationMinutes} min validée : ${target.title}`,
      createdAt: new Date().toISOString(),
    };

    if (willBeCompleted) {
      const daySessions = updatedSessions.filter(s => s.dayOfWeek === target.dayOfWeek);
      const isDayFullyComplete = daySessions.length > 0 && daySessions.every(s => s.completed);
      const totalSessions = updatedSessions.length;
      const completedSessions = updatedSessions.filter(s => s.completed).length;
      const willAllBeCompleted = totalSessions > 0 && completedSessions === totalSessions;

      if (willAllBeCompleted) {
        setIsUltimateCelebrationOpen(true);
        showToast(`🏆 Félicitations ! Tu as validé 100% de tes objectifs et l'ensemble de tes heures de révision !`, 6000);
      } else if (isDayFullyComplete) {
        soundFX.playCelebrationFanfare();
        showToast(`🎉 Félicitations ! Toutes les révisions prévues pour aujourd'hui sont validées avec succès !`, 6000);
      } else {
        soundFX.playCelebrationFanfare();
        showToast(`🎉 Félicitations ! Tu as validé la leçon "${target.title}" avec succès !`, 5000);
      }
    }

    setState(prev => {
      const filteredLogs = prev.logs.filter(l => l.sessionId !== target.id);
      const nextLogs = willBeCompleted ? [newLog, ...filteredLogs] : filteredLogs;
      const totalCompleted = updatedSessions.filter(s => s.completed).length;

      const nextState: AppState = {
        ...prev,
        studySessions: updatedSessions,
        logs: totalCompleted === 0 ? [] : nextLogs,
      };

      if (prev.userAccount?.googleId && !prev.isDemoMode) {
        saveUserState(prev.userAccount.googleId, nextState);
      }

      return nextState;
    });
  };

  const handleContinueNewCycle = () => {
    const todayStr = new Date().toISOString().slice(0, 10);

    setState(prev => {
      // All sessions are reset to completed: false so all progress bars strictly drop to 0%
      const updatedSessions = prev.studySessions.map(s => ({
        ...s,
        completed: false,
        completedAt: undefined,
        actualDurationMinutes: undefined,
        isRescheduledToday: false,
        rescheduledDate: undefined,
        originalStartTime: undefined,
        originalEndTime: undefined,
      }));

      const nextState: AppState = {
        ...prev,
        studySessions: updatedSessions,
        logs: [], // Reset logs so subject and global progress bars drop strictly to 0%
        cycleCompletedDate: todayStr,
      };

      if (prev.userAccount?.googleId && !prev.isDemoMode) {
        saveUserState(prev.userAccount.googleId, nextState);
      }

      return nextState;
    });

    setIsUltimateCelebrationOpen(false);
    showToast(`🌟 Félicitations ! Toutes les barres de progression sont à zéro. Reposez-vous bien, à demain !`, 6000);
  };

  const handleStartNewCycleEarly = () => {
    setState(prev => {
      const nextState: AppState = {
        ...prev,
        cycleCompletedDate: undefined,
      };
      if (prev.userAccount?.googleId && !prev.isDemoMode) {
        saveUserState(prev.userAccount.googleId, nextState);
      }
      return nextState;
    });
    showToast('🚀 Révisions réactivées pour aujourd’hui !');
  };

  const handleAddCustomSession = (session: StudySession) => {
    setState(prev => ({
      ...prev,
      studySessions: [...prev.studySessions, session],
    }));
    showToast('Nouvelle session ajoutée au planning !');
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
            onStartApp={() => setActiveView('auth')}
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
              onUpgradeToPro={() => handleSelectPlan('pro')}
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
              onUpgradeToPro={() => handleSelectPlan('pro')}
              onToggleSessionComplete={handleToggleSessionComplete}
              onOpenPresetModal={() => {
                if (state.isDemoMode) setIsPresetModalOpen(true);
              }}
              onResetDailyCatchup={handleResetDailyCatchup}
              cycleCompletedDate={state.cycleCompletedDate}
              onStartNewCycleEarly={handleStartNewCycleEarly}
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
              onNavigate={handleNavigate}
              onViewPricing={handleViewPricing}
              onUpgradeToPro={() => handleSelectPlan('pro')}
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
              onUpgradeToPro={() => handleSelectPlan('pro')}
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
              onAddCustomSession={handleAddCustomSession}
              onUpdatePreferences={handleUpdatePreferences}
              onViewPricing={handleViewPricing}
              onUpgradeToPro={() => handleSelectPlan('pro')}
              onResetDailyCatchup={handleResetDailyCatchup}
              cycleCompletedDate={state.cycleCompletedDate}
              onStartNewCycleEarly={handleStartNewCycleEarly}
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
        onSelectPlan={handleSelectPlan}
        onUpgradeToPro={() => handleSelectPlan('pro')}
      />

      {/* Pro Upgrade Modal */}
      <ProFeatureModal
        isOpen={isProModalOpen}
        onClose={() => setIsProModalOpen(false)}
        onViewPricing={handleViewPricing}
        onUpgradeToPro={() => handleSelectPlan('pro')}
      />

      {/* Google Calendar Sync Modal (ALL DAYS + 15-MIN PHONE ALERTS) */}
      <GoogleCalendarSyncModal
        isOpen={isGoogleCalendarModalOpen}
        onClose={() => setIsGoogleCalendarModalOpen(false)}
        sessions={state.studySessions}
        subjects={state.subjects}
        studentName={state.studentName || state.userAccount?.name || 'Étudiant'}
        planTier={state.planTier || state.userAccount?.planTier || 'free'}
        autoOpenedReason={googleCalendarReason}
        onUpgradeToPro={() => handleSelectPlan('pro')}
        onViewPricing={handleViewPricing}
      />

      {/* Ultimate 100% Completion Celebration Modal */}
      <UltimateCompletionCelebrationModal
        isOpen={isUltimateCelebrationOpen}
        onClose={handleContinueNewCycle}
        onContinue={handleContinueNewCycle}
        studentName={state.studentName || state.userAccount?.name || 'Étudiant'}
        totalPlannedMinutes={state.studySessions.reduce((acc, s) => acc + s.durationMinutes, 0)}
        totalSessionsCount={state.studySessions.length}
      />

      {/* Floating Notification Toast (Full multi-line sentence, zero truncation) */}
      {toastMessage && (
        <div 
          role="status"
          aria-live="polite"
          className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] sm:bottom-6 right-3 sm:right-6 z-50 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-950 border border-sky-400/50 text-white px-4 py-3 rounded-2xl shadow-2xl shadow-indigo-950/70 text-xs sm:text-sm font-semibold flex items-start gap-3 animate-in slide-in-from-bottom-5 duration-200 max-w-[94vw] sm:max-w-md w-auto backdrop-blur-md"
        >
          <div className="p-1.5 rounded-xl bg-sky-500/20 text-sky-300 shrink-0 mt-0.5 border border-sky-500/30">
            <Sparkles className="w-4 h-4 text-sky-300" />
          </div>
          <div className="flex-1 min-w-0 pr-1">
            <p className="text-white text-xs sm:text-sm font-medium leading-relaxed break-words whitespace-normal">
              {toastMessage}
            </p>
          </div>
          <button
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors shrink-0 -mr-1 -mt-1 cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-4 h-4" />
          </button>
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
