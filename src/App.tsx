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
  fetchAndMergeCloudState,
  getPendingInvitationsForUser,
  updateInvitationStatus,
  registerPlusUser,
  mergeInvitationsFromCloud,
  invitationBroadcastChannel
} from './services/storage';
import { generateOptimizedStudyPlan } from './services/plannerAlgorithm';
import { harmonizeAndDeduplicateSlots } from './services/pdfParserService';
import { 
  onFirebaseAuthStateChange, 
  signOutReal, 
  listenToUserCloudState,
  listenToCloudInvitationsForUser,
  fetchCloudInvitationsForUser,
  listenToAllCloudInvitations
} from './lib/firebase';
import { generateKonanId } from './lib/konanId';
import { evaluateDailyCatchup } from './services/sessionRescheduler';
import type { 
  ActiveAppView, 
  Subject, 
  ClassSlot, 
  StudySession, 
  StudyLog,
  StudyPreferences, 
  UserAccount,
  Chronotype,
  AcademicGoal,
  PlusInvitationNotification
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
import { SuperProActivationModal } from './components/pro/SuperProActivationModal';
import { KonanPlusActivationModal } from './components/plus/KonanPlusActivationModal';
import { KonanPlusGroupModal } from './components/plus/KonanPlusGroupModal';
import { AcademicGoalSelectorModal } from './components/plus/AcademicGoalSelectorModal';
import { CoachKonanOneOnOneModal } from './components/plus/CoachKonanOneOnOneModal';
import { downloadStudyPlanICS } from './services/googleCalendarService';
import { 
  generateDuolingoCompanionMessage, 
  sendPhoneNotification 
} from './services/companionNotificationService';
import { getTodayDayOfWeek, getTodayDateString } from './services/sessionRescheduler';

// Views
import { LandingHero } from './features/landing/LandingHero';
import { AuthPage } from './features/auth/AuthPage';
import { PdfUploadView } from './features/schedule/PdfUploadView';
import { DashboardOverview } from './features/dashboard/DashboardOverview';
import { ScheduleManager } from './features/schedule/ScheduleManager';
import { SubjectManager } from './features/subjects/SubjectManager';
import { PlannerView } from './features/planner/PlannerView';
import { AnalyticsDashboard } from './features/analytics/AnalyticsDashboard';
import { FocusMode } from './features/focus/FocusMode';
import { PresetModal } from './features/onboarding/PresetModal';

export function App() {
  const [state, setState] = useState<AppState>(() => loadAppState());
  const [activeView, setActiveView] = useState<ActiveAppView>('landing');
  const [focusSession, setFocusSession] = useState<StudySession | null>(null);
  const [isPresetModalOpen, setIsPresetModalOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isProModalOpen, setIsProModalOpen] = useState(false);
  const [isSuperProModalOpen, setIsSuperProModalOpen] = useState(false);
  const [isGoogleCalendarModalOpen, setIsGoogleCalendarModalOpen] = useState(false);
  const [googleCalendarReason, setGoogleCalendarReason] = useState<'pro_activated' | 'plan_applied' | null>(null);
  const [isUltimateCelebrationOpen, setIsUltimateCelebrationOpen] = useState(false);
  const [isPlusActivationModalOpen, setIsPlusActivationModalOpen] = useState(false);
  const [isPlusGroupModalOpen, setIsPlusGroupModalOpen] = useState(false);
  const [isAcademicGoalModalOpen, setIsAcademicGoalModalOpen] = useState(false);
  const [isCoachingModalOpen, setIsCoachingModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [pendingInvitations, setPendingInvitations] = useState<PlusInvitationNotification[]>([]);

  const knownInvitationIdsRef = useRef<Set<string>>(new Set());

  // 1. Real-time synchronization of pending invitations (Firestore Cloud + BroadcastChannel + LocalStorage)
  useEffect(() => {
    const myId = state.userAccount?.konanId || state.konanId;
    const myEmail = state.userAccount?.email;
    const identifiers = [myId, myEmail].filter(Boolean) as string[];
    let disposed = false;

    // Updates the bell list; a discreet ping only for invitations never seen before (no pop-up)
    const refreshPending = () => {
      if (disposed) return;
      const myPending = getPendingInvitationsForUser(myId, myEmail);
      const fresh = myPending.filter(inv => !knownInvitationIdsRef.current.has(inv.id));
      myPending.forEach(inv => knownInvitationIdsRef.current.add(inv.id));
      setPendingInvitations(myPending);
      if (fresh.length > 0) {
        soundFX.playNotificationPing();
      }
    };

    const applyCloud = (cloudInvites: any[]) => {
      if (disposed || !Array.isArray(cloudInvites)) return;
      if (cloudInvites.length > 0) mergeInvitationsFromCloud(cloudInvites);
      refreshPending();
    };

    // Initial check from local storage (no ping for invitations already known on load)
    const initialInvites = getPendingInvitationsForUser(myId, myEmail);
    initialInvites.forEach(inv => knownInvitationIdsRef.current.add(inv.id));
    setPendingInvitations(initialInvites);

    // Real-time targeted Firestore listener (instant delivery on any device)
    const unsubscribeCloud = listenToCloudInvitationsForUser(identifiers, applyCloud);

    // Safety net: direct server fetch (covers stalled realtime channel: VPN, sleep, mobile)
    let fetching = false;
    const pullFromServer = async () => {
      if (fetching || identifiers.length === 0) return;
      fetching = true;
      try {
        applyCloud(await fetchCloudInvitationsForUser(identifiers));
      } catch (err) {
        console.warn('Invitation server fetch failed:', err);
      } finally {
        fetching = false;
      }
    };
    pullFromServer();
    const pollTimer = window.setInterval(() => {
      if (document.visibilityState === 'visible') pullFromServer();
    }, 5000);

    // Cross-tab BroadcastChannel listener
    const handleBcMessage = (event: MessageEvent) => {
      if (event.data?.type === 'INVITATION_SAVED' || event.data?.type === 'STATUS_UPDATED') {
        refreshPending();
      }
    };
    invitationBroadcastChannel?.addEventListener('message', handleBcMessage);

    // Storage event (other tab) → local refresh; focus / visibility / reconnect → server pull
    const handleStorage = () => refreshPending();
    const handleWake = () => {
      if (document.visibilityState === 'visible') pullFromServer();
    };
    window.addEventListener('storage', handleStorage);
    window.addEventListener('focus', handleWake);
    window.addEventListener('online', handleWake);
    document.addEventListener('visibilitychange', handleWake);

    return () => {
      disposed = true;
      unsubscribeCloud();
      window.clearInterval(pollTimer);
      invitationBroadcastChannel?.removeEventListener('message', handleBcMessage);
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('focus', handleWake);
      window.removeEventListener('online', handleWake);
      document.removeEventListener('visibilitychange', handleWake);
    };
  }, [state.userAccount?.konanId, state.konanId, state.userAccount?.email]);

  // 2. If current user is group owner (Plus tier), listen to ALL cloud invitations
  // so when an invited friend clicks "Accepter" on their phone, the owner immediately gets updated
  useEffect(() => {
    const isOwner = (state.planTier === 'plus' || state.userAccount?.planTier === 'plus') && !state.isGroupGuest;
    if (!isOwner) return;

    const unsubscribe = listenToAllCloudInvitations((allCloudInvites) => {
      if (Array.isArray(allCloudInvites) && allCloudInvites.length > 0) {
        mergeInvitationsFromCloud(allCloudInvites);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [state.planTier, state.userAccount?.planTier, state.isGroupGuest]);

  const handleAcceptInvitation = (invitation: PlusInvitationNotification) => {
    updateInvitationStatus(invitation.id, 'accepted');
    registerPlusUser(state.konanId || state.userAccount?.konanId, state.userAccount?.email);

    setState(prev => {
      const nextAccount = prev.userAccount ? {
        ...prev.userAccount,
        planTier: 'plus' as const,
        isGroupGuest: true,
        invitedBy: {
          name: invitation.senderName,
          konanId: invitation.senderKonanId,
          email: invitation.senderEmail,
        },
      } : undefined;

      return {
        ...prev,
        planTier: 'plus' as const,
        isGroupGuest: true,
        invitedBy: {
          name: invitation.senderName,
          konanId: invitation.senderKonanId,
          email: invitation.senderEmail,
        },
        userAccount: nextAccount,
      };
    });

    setPendingInvitations(prev => prev.filter(i => i.id !== invitation.id));
    soundFX.playCelebrationFanfare();
    setToastMessage(`🎉 Félicitations ! Vous avez rejoint le groupe KONAN PLUS de ${invitation.senderName}. Accès complet débloqué.`);
    setIsPlusActivationModalOpen(true);
  };

  const handleDeclineInvitation = (invitation: PlusInvitationNotification) => {
    updateInvitationStatus(invitation.id, 'declined');
    setPendingInvitations(prev => prev.filter(i => i.id !== invitation.id));
    soundFX.playNotificationPing();
    setToastMessage(`Invitation de ${invitation.senderName} refusée.`);
  };

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
          prev.preferences,
          new Date(),
          prev.subjects
        );

        if (rescheduledCount > 0) {
          const signature = rescheduledSessions.map(s => `${s.id}-${s.startTime}`).sort().join('|');
          if (signature !== lastRescheduledSignature.current) {
            lastRescheduledSignature.current = signature;

            const todayDateStr = getTodayDateString();
            const todayDayOfWeek = getTodayDayOfWeek();

            // Total des séances en rattrapage aujourd'hui
            const missedTodaySessions = updatedSessions.filter(
              s => s.isRescheduledToday && s.rescheduledDate === todayDateStr
            );
            const missedCount = missedTodaySessions.length;

            // Matière manquée
            const lastMissed = rescheduledSessions[rescheduledSessions.length - 1];
            const missedSub = prev.subjects.find(s => s.id === lastMissed.subjectId);
            const missedSubName = missedSub?.name || lastMissed.title;

            // Prochaine séance aujourd'hui
            const upcomingTodaySessions = updatedSessions
              .filter(s => s.dayOfWeek === todayDayOfWeek && !s.completed)
              .sort((a, b) => a.startTime.localeCompare(b.startTime));

            const nextSession = upcomingTodaySessions[0] || lastMissed;
            const nextSub = prev.subjects.find(s => s.id === nextSession.subjectId);
            const nextSubName = nextSub?.name || nextSession.title;
            const newTime = lastMissed.startTime;

            // Génération du message complice style Duolingo (ton motivateur si >= 2 sessions)
            const companionMessage = generateDuolingoCompanionMessage(
              missedCount,
              missedSubName,
              nextSubName,
              newTime
            );

            // Notification envoyée exclusivement au TÉLÉPHONE (aucun pop-up in-app, hors agenda)
            const notifTitle = missedCount >= 2
              ? `🔥 KONAN • Alerte motivation (${missedCount} séances reportées)`
              : '🦉 KONAN • Rappel complice';
            sendPhoneNotification(notifTitle, companionMessage);
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
                    invitedEmails: cloudData.invitedEmails || prev.userAccount.invitedEmails,
                    academicGoal: cloudData.academicGoal || prev.userAccount.academicGoal,
                    coachingSessionsRemaining: cloudData.coachingSessionsRemaining !== undefined ? cloudData.coachingSessionsRemaining : prev.userAccount.coachingSessionsRemaining,
                    lastCoachingDate: cloudData.lastCoachingDate || prev.userAccount.lastCoachingDate,
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

    const studentKonanId = profile.konanId || userState.konanId || userState.userAccount?.konanId || generateKonanId(profile.googleId || profile.email);

    userState.planTier = effectivePlan;
    userState.konanId = studentKonanId;
    userState.userAccount = {
      ...profile,
      konanId: studentKonanId,
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

    // 1. Instant greeting with permanent unique Konan Code (always visible for all users)
    hasGreetedAuthRef.current = profile.googleId;
    if (effectivePlan === 'pro') {
      showToast(`⭐ Bonne Arrivée ! ${finalName} — Code Konan : ${studentKonanId} (KONAN PRO actif)`);
    } else if (effectivePlan === 'plus') {
      showToast(`👑 Bonne Arrivée ! ${finalName} — Code Konan : ${studentKonanId} (KONAN PLUS actif)`);
    } else {
      showToast(`✨ Bonne Arrivée ! ${finalName} — Votre Code Konan : ${studentKonanId}`);
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

    // 🌟 L'animation & guide s'affichent uniquement lors de la PREMIÈRE connexion de l'utilisateur
    const firstLoginKey = `konan_welcomed_v1_${profile.googleId}`;
    const isFirstTimeLogin = !localStorage.getItem(firstLoginKey) && !userState.completedOnboarding;
    if (isFirstTimeLogin) {
      localStorage.setItem(firstLoginKey, 'true');
      soundFX.playVictoryCelebration();
      if (effectivePlan === 'plus') {
        setIsPlusActivationModalOpen(true);
      } else if (effectivePlan === 'pro') {
        setIsSuperProModalOpen(true);
      }
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

        // 🌟 AUTOMATIC SYNC TO GOOGLE AGENDA FOR ALL DAYS
        if (state.studySessions && state.studySessions.length > 0) {
          try {
            downloadStudyPlanICS(
              state.studySessions,
              state.subjects,
              state.studentName || state.userAccount?.name || 'Étudiant'
            );
          } catch (err) {
            console.warn('ICS auto-download error:', err);
          }
        }

        // Pas d'animation au moment du paiement de l'abonnement (audio 1)
        soundFX.playCheckmarkPop();

        showToast('⭐ Félicitations ! Le modèle KONAN PRO est activé ! Synchronisation Google Agenda automatique déclenchée pour tous les jours.');
        if (activeView === 'landing' || activeView === 'auth') {
          setActiveView('dashboard');
        }
      } else if (planId === 'plus') {
        const studentKonanId = state.userAccount?.konanId || state.konanId || generateKonanId(state.userAccount?.googleId || state.userAccount?.email);
        const updated: AppState = {
          ...state,
          planTier: 'plus',
          konanId: studentKonanId,
          invitedIds: state.userAccount?.invitedIds || state.invitedIds || [],
          invitedEmails: state.userAccount?.invitedEmails || state.invitedEmails || [],
          userAccount: state.userAccount ? {
            ...state.userAccount,
            planTier: 'plus',
            konanId: studentKonanId,
            academicGoal: state.userAccount.academicGoal || 'target_16',
            coachingSessionsRemaining: state.userAccount.coachingSessionsRemaining ?? 2,
            invitedIds: state.userAccount.invitedIds || state.invitedIds || [],
            invitedEmails: state.userAccount.invitedEmails || state.invitedEmails || [],
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

        // Pas d'animation au moment du paiement de l'abonnement (audio 1)
        soundFX.playCheckmarkPop();

        showToast('👑 Félicitations ! Le modèle KONAN PLUS est activé ! Invitez jusqu\'à 4 amis (4 comptes inclus) & profitez de l\'expérience complète.');
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
   * Konan Plus: Manage invited student IDs
   */
  const handleUpdateInvitedIds = (ids: string[]) => {
    setState(prev => {
      const nextUserAccount: UserAccount = prev.userAccount ? {
        ...prev.userAccount,
        invitedIds: ids,
        lastSyncedAt: new Date().toISOString(),
      } : {
        isLoggedIn: false,
        name: prev.studentName || 'Étudiant',
        email: '',
        avatar: '',
        googleId: '',
        academicLevel: prev.academicLevel,
        planTier: 'plus',
        invitedIds: ids,
        lastSyncedAt: new Date().toISOString(),
      };

      const next: AppState = {
        ...prev,
        invitedIds: ids,
        userAccount: nextUserAccount,
      };

      if (prev.userAccount?.googleId && !prev.isDemoMode) {
        saveUserState(prev.userAccount.googleId, next);
      }
      return next;
    });
    showToast(`👥 Groupe KONAN PLUS : ${ids.length}/4 IDs rattachés avec succès.`);
  };

  /**
   * Konan Plus: Manage 4 invited accounts (by email or ID)
   */
  const handleUpdateInvitedEmails = (emails: string[]) => {
    setState(prev => {
      const nextUserAccount: UserAccount = prev.userAccount ? {
        ...prev.userAccount,
        invitedEmails: emails,
        lastSyncedAt: new Date().toISOString(),
      } : {
        isLoggedIn: false,
        name: prev.studentName || 'Étudiant',
        email: '',
        avatar: '',
        googleId: '',
        academicLevel: prev.academicLevel,
        planTier: 'plus',
        invitedEmails: emails,
        lastSyncedAt: new Date().toISOString(),
      };

      const next: AppState = {
        ...prev,
        invitedEmails: emails,
        userAccount: nextUserAccount,
      };

      if (prev.userAccount?.googleId && !prev.isDemoMode) {
        saveUserState(prev.userAccount.googleId, next);
      }
      return next;
    });
    showToast(`👥 Groupe KONAN PLUS mis à jour (${emails.length}/4 membres actifs).`);
  };

  /**
   * Konan Plus: Change 1 of the 3 Academic Goals
   */
  const handleSelectAcademicGoal = (goal: AcademicGoal) => {
    setState(prev => {
      const nextUserAccount: UserAccount = prev.userAccount ? {
        ...prev.userAccount,
        academicGoal: goal,
        lastSyncedAt: new Date().toISOString(),
      } : {
        isLoggedIn: false,
        name: prev.studentName || 'Étudiant',
        email: '',
        avatar: '',
        googleId: '',
        academicLevel: prev.academicLevel,
        planTier: 'plus',
        academicGoal: goal,
        lastSyncedAt: new Date().toISOString(),
      };

      const next: AppState = {
        ...prev,
        userAccount: nextUserAccount,
      };

      if (prev.userAccount?.googleId && !prev.isDemoMode) {
        saveUserState(prev.userAccount.googleId, next);
      }
      return next;
    });

    const goalLabels: Record<AcademicGoal, string> = {
      target_12: 'Validation Sereine (12/20)',
      target_16: 'Mention Très Bien (16/20)',
      major_promotion: 'Major de Promotion (Excellence)',
    };
    showToast(`🎯 Objectif académique activé : ${goalLabels[goal]} !`);
  };

  /**
   * Konan Plus: Consume 1 coaching session (2/week)
   */
  const handleConsumeCoachingSession = () => {
    setState(prev => {
      const currentRemaining = prev.userAccount?.coachingSessionsRemaining ?? 2;
      const nextRemaining = Math.max(0, currentRemaining - 1);
      const nextUserAccount: UserAccount = prev.userAccount ? {
        ...prev.userAccount,
        coachingSessionsRemaining: nextRemaining,
        lastCoachingDate: new Date().toISOString(),
        lastSyncedAt: new Date().toISOString(),
      } : {
        isLoggedIn: false,
        name: prev.studentName || 'Étudiant',
        email: '',
        avatar: '',
        googleId: '',
        academicLevel: prev.academicLevel,
        planTier: 'plus',
        coachingSessionsRemaining: nextRemaining,
        lastCoachingDate: new Date().toISOString(),
        lastSyncedAt: new Date().toISOString(),
      };

      const next: AppState = {
        ...prev,
        userAccount: nextUserAccount,
      };

      if (prev.userAccount?.googleId && !prev.isDemoMode) {
        saveUserState(prev.userAccount.googleId, next);
      }
      return next;
    });
    showToast('🦉 Tête-à-tête validé ! Votre diagnostic et vos conseils sont appliqués.');
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
    if (demo.planTier === 'plus') {
      if (demo.studySessions && demo.studySessions.length > 0) {
        try {
          downloadStudyPlanICS(
            demo.studySessions,
            demo.subjects,
            'Alexandre Étudiant'
          );
        } catch (err) {
          console.warn('ICS auto-download error:', err);
        }
      }
      setIsPlusActivationModalOpen(true);
      soundFX.playVictoryCelebration();
      showToast('👑 Mode Démo KONAN PLUS : Accès complet aux 4 comptes, objectifs et coach Konan !');
    } else if (demo.planTier === 'pro') {
      if (demo.studySessions && demo.studySessions.length > 0) {
        try {
          downloadStudyPlanICS(
            demo.studySessions,
            demo.subjects,
            'Alexandre Étudiant'
          );
        } catch (err) {
          console.warn('ICS auto-download error:', err);
        }
      }
      setIsSuperProModalOpen(true);
      soundFX.playVictoryCelebration();
      showToast('⭐ Mode Démo KONAN PRO : Synchronisation Google Agenda automatique déclenchée pour tous les jours !');
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
      const nextUserAccount: UserAccount = prev.userAccount ? {
        ...prev.userAccount,
        name: updated.name,
        academicLevel: updated.academicLevel,
        phoneNumber: updated.phoneNumber,
        countryCode: updated.countryCode,
        lastSyncedAt: new Date().toISOString(),
      } : {
        isLoggedIn: false,
        name: updated.name,
        email: '',
        avatar: '',
        googleId: '',
        academicLevel: updated.academicLevel,
        lastSyncedAt: new Date().toISOString(),
      };

      const next: AppState = {
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

      saveAppState(next);

      if (prev.userAccount?.googleId && !prev.isDemoMode) {
        saveUserState(prev.userAccount.googleId, next);
      }

      return next;
    });

    showToast(`✅ Nom et filière enregistrés : ${updated.name} (${updated.academicLevel})`);
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

  /**
   * Focus Chronometer Handler :
   * Directly redirects the user to the interactive focus chronometer
   * upon clicking "Valider la séance" / "Valider".
   */
  const handleStartFocusSession = (session: StudySession) => {
    const currentDayIndex = (new Date().getDay() + 6) % 7;
    const dayNames = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    const currentDayName = dayNames[currentDayIndex];
    const targetDayName = dayNames[session.dayOfWeek] || 'ce jour';

    // Anti-cheat verification: Only allow launching today's study sessions
    if (session.dayOfWeek !== currentDayIndex) {
      soundFX.playNotificationPing();
      showToast(`🔒 Anti-triche : Vous pouvez uniquement lancer le chronomètre pour les révisions d'aujourd'hui (${currentDayName}). Cette séance est prévue pour ${targetDayName}.`, 5000);
      return;
    }

    setFocusSession(session);
    setActiveView('focus');
    soundFX.playCheckmarkPop();
  };

  /**
   * Completion callback from the FocusMode chronometer:
   * Marks the session complete, records the study log, updates streak & celebrations.
   */
  const handleCompleteFocusSession = (sessionId: string, log: StudyLog) => {
    const target = state.studySessions.find(s => s.id === sessionId);
    if (!target) return;

    soundFX.playCelebrationFanfare();
    const updatedSessions = state.studySessions.map(s => 
      s.id === sessionId 
        ? { ...s, completed: true, completedAt: new Date().toISOString() } 
        : s
    );

    const daySessions = updatedSessions.filter(s => s.dayOfWeek === target.dayOfWeek);
    const isDayFullyComplete = daySessions.length > 0 && daySessions.every(s => s.completed);
    const totalSessions = updatedSessions.length;
    const completedSessions = updatedSessions.filter(s => s.completed).length;
    const willAllBeCompleted = totalSessions > 0 && completedSessions === totalSessions;

    if (willAllBeCompleted) {
      setIsUltimateCelebrationOpen(true);
      showToast(`🏆 Félicitations ! Tu as validé 100% de tes objectifs et l'ensemble de tes heures de révision !`, 6000);
    } else if (isDayFullyComplete) {
      showToast(`🎉 Félicitations ! Toutes les révisions prévues pour aujourd'hui sont validées avec succès !`, 6000);
    } else {
      showToast(`🎉 Félicitations ! Séance "${target.title}" validée avec succès dans le chronomètre Focus !`, 5000);
    }

    setState(prev => {
      const filteredLogs = prev.logs.filter(l => l.sessionId !== target.id);
      const nextLogs = [log, ...filteredLogs];

      const nextState: AppState = {
        ...prev,
        studySessions: updatedSessions,
        logs: nextLogs,
      };

      if (prev.userAccount?.googleId && !prev.isDemoMode) {
        saveUserState(prev.userAccount.googleId, nextState);
      }

      return nextState;
    });

    setFocusSession(null);
    setActiveView('dashboard');
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
    <div className="min-h-screen bg-[#090E17] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white w-full max-w-full overflow-x-hidden">
      
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
        konanId={state.konanId || state.userAccount?.konanId}
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
        totalStudySessions={state.studySessions?.length || 0}
        completedSessions={state.studySessions ? state.studySessions.filter(s => s.completed).length : 0}
        pendingInvitations={pendingInvitations}
        onAcceptInvitation={handleAcceptInvitation}
        onDeclineInvitation={handleDeclineInvitation}
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
              onStartFocusSession={handleStartFocusSession}
              onOpenPresetModal={() => {
                if (state.isDemoMode) setIsPresetModalOpen(true);
              }}
              cycleCompletedDate={state.cycleCompletedDate}
              onStartNewCycleEarly={handleStartNewCycleEarly}
              konanId={state.userAccount?.konanId || state.konanId || 'KN-849201'}
              invitedIds={state.userAccount?.invitedIds || state.invitedIds || []}
              invitedEmails={state.userAccount?.invitedEmails || state.invitedEmails || []}
              academicGoal={state.userAccount?.academicGoal || 'target_16'}
              coachingSessionsRemaining={state.userAccount?.coachingSessionsRemaining ?? 2}
              onOpenGroupModal={() => setIsPlusGroupModalOpen(true)}
              onOpenGoalModal={() => setIsAcademicGoalModalOpen(true)}
              onOpenCoachingModal={() => setIsCoachingModalOpen(true)}
              isGroupGuest={state.isGroupGuest || state.userAccount?.isGroupGuest}
              invitedBy={state.invitedBy || state.userAccount?.invitedBy}
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
              onStartFocusSession={handleStartFocusSession}
              onAddCustomSession={handleAddCustomSession}
              onUpdatePreferences={handleUpdatePreferences}
              onViewPricing={handleViewPricing}
              onUpgradeToPro={() => handleSelectPlan('pro')}
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

        {/* Focus Mode Chronometer: STRICTLY INTEGRATED */}
        {activeView === 'focus' && (
          (state.userAccount?.isLoggedIn || state.isDemoMode) ? (
            <FocusMode
              session={focusSession}
              subjects={state.subjects}
              onCompleteSession={handleCompleteFocusSession}
              onExit={() => {
                setFocusSession(null);
                setActiveView('dashboard');
              }}
              backLabel="Retour au tableau de bord"
            />
          ) : (
            <div className="text-center py-16 space-y-4">
              <p className="text-lg text-white font-bold">Connexion requise pour accéder au chronomètre Focus.</p>
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
        invitedEmails={state.userAccount?.invitedEmails || []}
        academicGoal={state.userAccount?.academicGoal || 'target_16'}
        coachingSessionsRemaining={state.userAccount?.coachingSessionsRemaining ?? 2}
        onOpenGroupModal={() => setIsPlusGroupModalOpen(true)}
        onOpenGoalModal={() => setIsAcademicGoalModalOpen(true)}
        onOpenCoachingModal={() => setIsCoachingModalOpen(true)}
      />

      {/* Pro Upgrade Modal */}
      <ProFeatureModal
        isOpen={isProModalOpen}
        onClose={() => setIsProModalOpen(false)}
        onViewPricing={handleViewPricing}
        onUpgradeToPro={() => handleSelectPlan('pro')}
      />

      {/* Duolingo Super-style Celebration Modal for KONAN PRO */}
      <SuperProActivationModal
        isOpen={isSuperProModalOpen}
        onClose={() => setIsSuperProModalOpen(false)}
        studentName={state.studentName || state.userAccount?.name || 'Étudiant'}
      />

      {/* 👑 Royal Step-by-Step Celebration & Onboarding Modal for KONAN PLUS */}
      <KonanPlusActivationModal
        isOpen={isPlusActivationModalOpen}
        onClose={() => setIsPlusActivationModalOpen(false)}
        studentName={state.studentName || state.userAccount?.name || 'Étudiant'}
        konanId={state.userAccount?.konanId || state.konanId || 'KN-849201'}
        invitedIds={state.userAccount?.invitedIds || state.invitedIds || []}
        invitedEmails={state.userAccount?.invitedEmails || state.invitedEmails || []}
        onUpdateInvitedIds={handleUpdateInvitedIds}
        onUpdateInvitedEmails={handleUpdateInvitedEmails}
        academicGoal={state.userAccount?.academicGoal || 'target_16'}
        onSelectAcademicGoal={handleSelectAcademicGoal}
        coachingSessionsRemaining={state.userAccount?.coachingSessionsRemaining ?? 2}
        onOpenGroupModal={() => setIsPlusGroupModalOpen(true)}
        onOpenGoalModal={() => setIsAcademicGoalModalOpen(true)}
        onOpenCoachingModal={() => setIsCoachingModalOpen(true)}
        isGroupGuest={state.isGroupGuest || state.userAccount?.isGroupGuest}
        invitedBy={state.invitedBy || state.userAccount?.invitedBy}
      />

      {/* 👑 KONAN PLUS: 4 COMPTES INVITÉS / GROUPE MODAL */}
      <KonanPlusGroupModal
        isOpen={isPlusGroupModalOpen}
        onClose={() => setIsPlusGroupModalOpen(false)}
        invitedEmails={state.userAccount?.invitedEmails || state.invitedEmails || []}
        invitedIds={state.userAccount?.invitedIds || state.invitedIds || []}
        onUpdateInvitedEmails={handleUpdateInvitedEmails}
        onUpdateInvitedIds={handleUpdateInvitedIds}
        ownerKonanId={state.userAccount?.konanId || state.konanId || 'KN-849201'}
        ownerEmail={state.userAccount?.email}
        maxAccounts={4}
        studentName={state.studentName || state.userAccount?.name || 'Étudiant'}
        isGroupGuest={state.isGroupGuest || state.userAccount?.isGroupGuest}
        invitedBy={state.invitedBy || state.userAccount?.invitedBy}
      />

      {/* 👑 KONAN PLUS: 3 OBJECTIFS SCOLAIRES MODAL */}
      <AcademicGoalSelectorModal
        isOpen={isAcademicGoalModalOpen}
        onClose={() => setIsAcademicGoalModalOpen(false)}
        currentGoal={state.userAccount?.academicGoal || 'target_16'}
        onSelectGoal={handleSelectAcademicGoal}
        studentName={state.studentName || state.userAccount?.name || 'Étudiant'}
      />

      {/* 👑 KONAN PLUS: TÊTE-À-TÊTE COACH KONAN (15 MIN) MODAL */}
      <CoachKonanOneOnOneModal
        isOpen={isCoachingModalOpen}
        onClose={() => setIsCoachingModalOpen(false)}
        studentName={state.studentName || state.userAccount?.name || 'Étudiant'}
        academicLevel={state.academicLevel}
        academicGoal={state.userAccount?.academicGoal || 'target_16'}
        subjects={state.subjects}
        studySessions={state.studySessions}
        coachingSessionsRemaining={state.userAccount?.coachingSessionsRemaining ?? 2}
        onConsumeSession={handleConsumeCoachingSession}
      />

      {/* Google Calendar Sync Modal (ALL DAYS) */}
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
