import React, { useState, useEffect, useRef, useMemo } from 'react';
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
  setActiveSession,
  exportStateToJson,
  importStateFromJson,
  fetchAndMergeCloudState,
  getPendingInvitationsForUser,
  getPlusInvitations,
  updateInvitationStatus,
  deregisterPlusUser,
  mergeInvitationsFromCloud,
  invitationBroadcastChannel
} from './services/storage';
import { KonanEntranceSplash } from './components/common/KonanEntranceSplash';

import { generateOptimizedStudyPlan, mergePreservingCompletedSessions, synchronizeSessionsWithExamCountdowns } from './services/plannerAlgorithm';
import { transitionUserState } from './services/tierTransitionService';
import { harmonizeAndDeduplicateSlots } from './services/pdfParserService';
import {
  onFirebaseAuthStateChange, 
  signOutReal, 
  checkGoogleRedirectResult,
  fetchCloudInvitationsForUser,
  syncUserStateToCloud,
  loadUserStateFromCloud,
  auth
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
  PlusInvitationNotification,
  PlanTier
} from './types';
import { generateId, isNonAcademicSubject } from './lib/utils';
import { Sparkles, X, ShieldCheck } from 'lucide-react';
import { soundFX } from './lib/audioEffects';

// Layout
import { Navbar, type OwnerNotificationItem } from './components/layout/Navbar';
import { SettingsModal } from './components/layout/SettingsModal';
import { ProFeatureModal } from './components/common/ProFeatureModal';
import { WaitlistModal } from './components/common/WaitlistModal';
import { GoogleCalendarSyncModal } from './components/common/GoogleCalendarSyncModal';
import { PrivacyPolicyModal } from './components/common/PrivacyPolicyModal';
import { PwaInstallPromptModal } from './components/common/PwaInstallPromptModal';
import { sanitizeUserProfileUpdate } from './lib/subscriptionGuard';
import { UltimateCompletionCelebrationModal } from './components/celebration/UltimateCompletionCelebrationModal';
import { checkAndPerformWeeklyRollover } from './services/weeklyRecapService';
import { SuperProActivationModal } from './components/pro/SuperProActivationModal';
import { KonanPlusActivationModal } from './components/plus/KonanPlusActivationModal';
import { KonanPlusGroupModal } from './components/plus/KonanPlusGroupModal';
import { AcademicGoalSelectorModal } from './components/plus/AcademicGoalSelectorModal';


// Views
import { AuthPage } from './features/auth/AuthPage';
import { PdfUploadView } from './features/schedule/PdfUploadView';
import { DashboardOverview } from './features/dashboard/DashboardOverview';
import { ScheduleManager } from './features/schedule/ScheduleManager';
import { SubjectManager } from './features/subjects/SubjectManager';
import { PlannerView } from './features/planner/PlannerView';
import { AnalyticsDashboard } from './features/analytics/AnalyticsDashboard';
import { FocusMode } from './features/focus/FocusMode';
import { PresetModal } from './features/onboarding/PresetModal';
import { DuolingoOnboarding } from './features/onboarding/DuolingoOnboarding';
import { ProWizardView } from './features/pro/ProWizardView';
import { AdminDashboard } from './features/admin/AdminDashboard';

export function App() {
  const [state, setState] = useState<AppState>(() => loadAppState());
  const pendingPrivacyModalRef = useRef<boolean>(false);

  // Règle absolue : L'utilisateur arrive TOUJOURS sur l'interface d'accueil (landing) en tant que visiteur non connecté.
  // Jamais de compte connecté d'office, jamais de saut instantané vers le tableau de bord.
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
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [pendingAuth, setPendingAuth] = useState<{
    profile: UserAccount;
    preferences?: { chronotype: Chronotype };
    initialState: AppState;
  } | null>(null);
  const [waitlistModalInfo, setWaitlistModalInfo] = useState<{
    isOpen: boolean;
    featureTitle: string;
    featureDescription?: string;
    requiredTier: 'pro' | 'plus';
  }>({
    isOpen: false,
    featureTitle: '',
    requiredTier: 'pro',
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [pendingInvitations, setPendingInvitations] = useState<PlusInvitationNotification[]>([]);
  const [allInvitations, setAllInvitations] = useState<PlusInvitationNotification[]>(() => getPlusInvitations());

  const knownInvitationIdsRef = useRef<Set<string>>(new Set());

  // 1. Real-time universal synchronization of all invitations (Firestore Cloud + BroadcastChannel + LocalStorage)
  useEffect(() => {
    let disposed = false;

    // Updates the bell list; a discreet ping only for invitations never seen before (no pop-up)
    const refreshPending = () => {
      if (disposed) return;
      const myId = state.userAccount?.konanId || state.konanId;
      const myEmail = state.userAccount?.email;
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
      if (cloudInvites.length > 0) {
        mergeInvitationsFromCloud(cloudInvites);
        setAllInvitations(getPlusInvitations());
      }
      refreshPending();
    };

    // Initial check from local storage (no ping for invitations already known on load)
    const myId = state.userAccount?.konanId || state.konanId;
    const myEmail = state.userAccount?.email;
    const initialInvites = getPendingInvitationsForUser(myId, myEmail);
    initialInvites.forEach(inv => knownInvitationIdsRef.current.add(inv.id));
    setPendingInvitations(initialInvites);

    // Targeted cloud synchronization strictly for logged in users (one-shot getDocs fetch, no onSnapshot loops)
    let pollTimer: number | undefined;

    if (state.userAccount?.isLoggedIn && !state.isDemoMode) {
      const identifiers = [myId, myEmail].filter(Boolean) as string[];
      if (identifiers.length > 0) {
        // Direct initial fetch once upon mount / auth
        fetchCloudInvitationsForUser(identifiers).then(cloudInvites => {
          if (Array.isArray(cloudInvites) && cloudInvites.length > 0) {
            applyCloud(cloudInvites);
          }
        }).catch(() => {});
      }
    }

    // Cross-tab BroadcastChannel listener
    const handleBcMessage = (event: MessageEvent) => {
      if (event.data?.type === 'INVITATION_SAVED' || event.data?.type === 'STATUS_UPDATED') {
        setAllInvitations(getPlusInvitations());
        refreshPending();
      }
    };
    invitationBroadcastChannel?.addEventListener('message', handleBcMessage);

    // Storage event (other tab) → local refresh; focus / visibility / reconnect → server pull
    const handleStorage = () => {
      setAllInvitations(getPlusInvitations());
      refreshPending();
    };
    const handleWake = () => {
      if (document.visibilityState === 'visible') {
        refreshPending();
        if (state.userAccount?.isLoggedIn && !state.isDemoMode) {
          const identifiers = [myId, myEmail].filter(Boolean) as string[];
          if (identifiers.length > 0) {
            fetchCloudInvitationsForUser(identifiers).then(cloudInvites => {
              if (Array.isArray(cloudInvites) && cloudInvites.length > 0) {
                applyCloud(cloudInvites);
              }
            }).catch(() => {});
          }
        }
      }
    };
    window.addEventListener('storage', handleStorage);
    window.addEventListener('focus', handleWake);
    window.addEventListener('online', handleWake);
    document.addEventListener('visibilitychange', handleWake);

    return () => {
      disposed = true;
      if (pollTimer) window.clearInterval(pollTimer);
      invitationBroadcastChannel?.removeEventListener('message', handleBcMessage);
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('focus', handleWake);
      window.removeEventListener('online', handleWake);
      document.removeEventListener('visibilitychange', handleWake);
    };
  }, [state.userAccount?.konanId, state.konanId, state.userAccount?.email]);

  // Source unique de vérité pour le palier actif (supporte le palier 'pro' et 'free')
  const effectivePlanTier = useMemo<PlanTier>(() => {
    return state.planTier || state.userAccount?.planTier || 'free';
  }, [state.planTier, state.userAccount?.planTier]);

  // Unified display name
  const effectiveStudentName = (state.userAccount?.isLoggedIn && state.userAccount?.name)
    ? state.userAccount.name
    : (state.studentName || 'Étudiant');

  // Bascule automatique de semaine (rollover d'agenda) sans pop-up de bilan
  useEffect(() => {
    const rollover = checkAndPerformWeeklyRollover(state);
    if (rollover.hasRollover) {
      const cleanNextState = { ...rollover.nextState, pendingWeeklyRecap: null };
      setState(cleanNextState);
      saveAppState(cleanNextState);
      if (state.userAccount?.googleId) {
        saveUserState(state.userAccount.googleId, cleanNextState);
      }
    }
  }, [state.studySessions.length, state.currentWeekMonday]);

  // Repli vers Gratuit UNIQUEMENT pour les comptes qui tenteraient d'activer 'plus' (qui reste en liste d'attente)
  useEffect(() => {
    if (state.planTier === 'plus' || state.userAccount?.planTier === 'plus' || state.isGroupGuest || state.userAccount?.isGroupGuest) {
      const { nextState } = transitionUserState(state, 'free');
      nextState.planTier = 'free';
      if (nextState.userAccount) {
        nextState.userAccount.planTier = 'free';
        nextState.userAccount.isGroupGuest = false;
      }
      nextState.isGroupGuest = false;
      setState(nextState);
      if (nextState.userAccount?.googleId && !nextState.isDemoMode) {
        saveUserState(nextState.userAccount.googleId, nextState);
      }
    }
  }, [state.planTier, state.userAccount?.planTier, state.isGroupGuest, state.userAccount?.isGroupGuest]);

  const isGroupOwner = (effectivePlanTier as string) === 'plus' && !state.isGroupGuest && !state.userAccount?.isGroupGuest;
  const currentOwnerKonanId = (state.userAccount?.konanId || state.konanId || '').trim().toUpperCase();
  const currentOwnerEmail = (state.userAccount?.email || '').trim().toLowerCase();

  // Feedback notifications for the owner (strictly purged after 24 hours, with exact timestamps)
  const ownerFeedbackNotifications = useMemo<OwnerNotificationItem[]>(() => {
    if (!isGroupOwner) return [];
    const now = Date.now();
    const TTL_24H = 24 * 60 * 60 * 1000;
    return allInvitations
      .filter(inv => {
        const sId = (inv.senderKonanId || '').trim().toUpperCase();
        const sEmail = (inv.senderEmail || '').trim().toLowerCase();
        const matchesOwner = (currentOwnerKonanId && sId === currentOwnerKonanId) || (currentOwnerEmail && sEmail === currentOwnerEmail);
        const matchesStatus = matchesOwner && (inv.status === 'accepted' || inv.status === 'declined');
        if (!matchesStatus) return false;

        // Disappear after 24 hours
        const time = inv.updatedAt || inv.acceptedAt || inv.createdAt;
        if (!time) return true;
        const t = new Date(time).getTime();
        return !isNaN(t) && (now - t) <= TTL_24H;
      })
      .map(inv => {
        const isAcc = inv.status === 'accepted';
        const displayName = inv.acceptedByName || inv.targetName || (inv.targetKonanIdOrEmail.startsWith('KN-') ? `Étudiant ${inv.targetKonanIdOrEmail}` : inv.targetKonanIdOrEmail);
        const displayId = inv.acceptedByKonanId || (inv.targetKonanIdOrEmail.startsWith('KN-') ? inv.targetKonanIdOrEmail : undefined);
        const time = inv.updatedAt || inv.acceptedAt || inv.createdAt;
        return {
          id: `${isAcc ? 'acc' : 'dec'}-${inv.id}`,
          type: isAcc ? 'accepted' as const : 'declined' as const,
          name: displayName,
          konanId: displayId,
          timestamp: time,
        };
      })
      .sort((a, b) => new Date(b.timestamp || 0).getTime() - new Date(a.timestamp || 0).getTime());
  }, [allInvitations, isGroupOwner, currentOwnerKonanId, currentOwnerEmail]);

  // When an invitation is declined, automatically clear the target from invitedIds / invitedEmails so the slot is immediately freed
  useEffect(() => {
    if (!isGroupOwner) return;
    const ownerCleanId = currentOwnerKonanId;
    const declinedInvites = allInvitations.filter(inv => {
      const sId = (inv.senderKonanId || '').trim().toUpperCase();
      return sId === ownerCleanId && inv.status === 'declined';
    });

    if (declinedInvites.length === 0) return;

    const declinedTargets = new Set(
      declinedInvites.flatMap(inv => [
        (inv.targetKonanIdOrEmail || '').trim().toLowerCase(),
        (inv.acceptedByKonanId || '').trim().toLowerCase(),
      ]).filter(Boolean)
    );

    const currentInvitedIds = state.userAccount?.invitedIds || state.invitedIds || [];
    const currentInvitedEmails = state.userAccount?.invitedEmails || state.invitedEmails || [];

    const hasDeclinedId = currentInvitedIds.some(id => declinedTargets.has(id.trim().toLowerCase()));
    const hasDeclinedEmail = currentInvitedEmails.some(em => declinedTargets.has(em.trim().toLowerCase()));

    if (hasDeclinedId || hasDeclinedEmail) {
      const nextIds = currentInvitedIds.filter(id => !declinedTargets.has(id.trim().toLowerCase()));
      const nextEmails = currentInvitedEmails.filter(em => !declinedTargets.has(em.trim().toLowerCase()));
      setState(prev => ({
        ...prev,
        invitedIds: nextIds,
        invitedEmails: nextEmails,
        userAccount: prev.userAccount ? {
          ...prev.userAccount,
          invitedIds: nextIds,
          invitedEmails: nextEmails,
        } : undefined,
      }));
    }
  }, [allInvitations, isGroupOwner, currentOwnerKonanId]);

  const handleAcceptInvitation = (invitation: PlusInvitationNotification) => {
    const guestName = state.userAccount?.name || state.studentName || 'Étudiant';
    const guestKonanId = state.userAccount?.konanId || state.konanId || generateKonanId(state.userAccount?.googleId);
    const guestEmail = state.userAccount?.email || '';

    // 1. Instantly update UI states (0ms lag)
    setPendingInvitations(prev => prev.filter(i => i.id !== invitation.id));
    setAllInvitations(prev => prev.map(i => i.id === invitation.id ? {
      ...i,
      status: 'accepted' as const,
      acceptedByName: guestName,
      acceptedByKonanId: guestKonanId,
      acceptedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    } : i));

    // 2. Update status to 'accepted' with metadata in Firestore & localStorage
    updateInvitationStatus(invitation.id, 'accepted', {
      acceptedByName: guestName,
      acceptedByKonanId: guestKonanId,
    });

    // 3. Plus registry désactivé : tout le monde est en Gratuit
    deregisterPlusUser(guestKonanId);
    if (guestEmail) deregisterPlusUser(guestEmail);

    soundFX.playCheckmarkPop();
    setToastMessage(`Invitation acceptée. Note : Les comptes PRO et PLUS sont actuellement désactivés, vous êtes sur le modèle Gratuit.`);
  };

  const handleDeclineInvitation = (invitation: PlusInvitationNotification) => {
    const guestName = state.userAccount?.name || state.studentName || 'Étudiant';
    const guestKonanId = state.userAccount?.konanId || state.konanId || '';

    // 1. Instantly update UI states (0ms lag)
    setPendingInvitations(prev => prev.filter(i => i.id !== invitation.id));
    setAllInvitations(prev => prev.map(i => i.id === invitation.id ? {
      ...i,
      status: 'declined' as const,
      acceptedByName: guestName,
      acceptedByKonanId: guestKonanId,
      updatedAt: new Date().toISOString(),
    } : i));

    // 2. Update status to 'declined' with metadata in Firestore & localStorage
    updateInvitationStatus(invitation.id, 'declined', {
      acceptedByName: guestName,
      acceptedByKonanId: guestKonanId,
    });

    soundFX.playNotificationPing();
    setToastMessage(`Invitation de ${invitation.senderName} refusée.`);
  };

  /**
   * Automatic Google Calendar & 15-min reminder sync for ALL days of the week:
   * Downloads the recurring .ics file and opens the interactive Google Agenda sync modal.
   */
  const triggerAutoGoogleCalendarSync = (
    _sessions: StudySession[],
    _subjects: Subject[],
    _studentName: string,
    reason: 'pro_activated' | 'plan_applied'
  ) => {
    // Ne télécharge plus automatiquement le fichier .ics en douce : ouvre uniquement le modal interactif
    setGoogleCalendarReason(reason);
    setIsGoogleCalendarModalOpen(true);
    soundFX.playSuccessChime();
  };

  const fileInputRef = useRef<HTMLInputElement>(null);
  const lastRescheduledSignature = useRef<string>('');
  const hasGreetedAuthRef = useRef<string>('');
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Persist state whenever it changes (debounced by 800ms to eliminate thrashing and performance lag)
  useEffect(() => {
    const timer = setTimeout(() => {
      saveAppState(state);
    }, 800);
    return () => clearTimeout(timer);
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

        // RÈGLE STRICTE : Purger immédiatement les matières et sessions non académiques parasites (EPS, Sport, devoirs, etc.)
        const hasInvalidSubject = prev.subjects.some(s => isNonAcademicSubject(s.name));
        const validSubjects = hasInvalidSubject 
          ? prev.subjects.filter(s => !isNonAcademicSubject(s.name))
          : prev.subjects;
        const validSubjectIds = new Set(validSubjects.map(s => s.id));

        const hasInvalidSlots = prev.classSlots?.some(c => !c.subjectId || !validSubjectIds.has(c.subjectId));
        const cleanedSlots = hasInvalidSlots
          ? prev.classSlots.filter(c => c.subjectId && validSubjectIds.has(c.subjectId))
          : prev.classSlots;

        const hasInvalidSession = prev.studySessions.some(
          s => isNonAcademicSubject(s.title) || (s.subjectId && !validSubjectIds.has(s.subjectId))
        );
        const baseSessions = hasInvalidSession
          ? prev.studySessions.filter(s => !isNonAcademicSubject(s.title) && (!s.subjectId || validSubjectIds.has(s.subjectId)))
          : prev.studySessions;

        // If weekly cycle was completed today, student has finished all tasks: wait until tomorrow
        const todayStr = new Date().toISOString().slice(0, 10);
        if (prev.cycleCompletedDate === todayStr) {
          if (hasInvalidSubject || hasInvalidSession || hasInvalidSlots) {
            return {
              ...prev,
              subjects: validSubjects,
              classSlots: cleanedSlots,
              studySessions: baseSessions,
            };
          }
          return prev;
        }

        const { updatedSessions, rescheduledCount, restoredCount } = evaluateDailyCatchup(
          baseSessions,
          cleanedSlots,
          prev.preferences,
          new Date(),
          validSubjects
        );

        // Auto-synchronisation des durées pour les devoirs / épreuves imminentes (ex: 45 min) sans clic utilisateur
        const finalSessions = synchronizeSessionsWithExamCountdowns(updatedSessions, validSubjects);
        const hasSessionDurationChange = finalSessions.some(
          (s, idx) => s.durationMinutes !== baseSessions[idx]?.durationMinutes || s.endTime !== baseSessions[idx]?.endTime
        );

        if (rescheduledCount > 0 || restoredCount > 0 || hasSessionDurationChange || hasInvalidSubject || hasInvalidSession || hasInvalidSlots) {
          // Mise à jour silencieuse de l'emploi du temps sans spammer l'utilisateur à l'ouverture
          const nextState: AppState = {
            ...prev,
            subjects: validSubjects,
            classSlots: cleanedSlots,
            studySessions: finalSessions,
          };

          if (prev.userAccount?.googleId && !prev.isDemoMode) {
            saveUserState(prev.userAccount.googleId, nextState);
          }

          return nextState;
        }

        return prev;
      });
    };

    // Run check on mount and view transitions
    performCatchupCheck();

    // Check periodically every 30 seconds for immediate catch-up
    const interval = setInterval(performCatchupCheck, 30000);

    // Re-check on window/tab focus (e.g. user unlocks mobile phone or refocuses browser tab)
    const handleFocus = () => performCatchupCheck();
    window.addEventListener('focus', handleFocus);

    return () => {
      clearInterval(interval);
      window.removeEventListener('focus', handleFocus);
    };
  }, [state.studySessions.length, state.classSlots.length, activeView]);

  // =========================================================================
  // ÉTAPE 1 : CONDITION SIMPLE GRATUIT VS PRO (Web Push Arrière-Plan)
  // 1. Gratuit : ZÉRO notification, désabonnement immédiat.
  // 2. Pro / Plus : Activation automatique des notifications Web Push.
  // =========================================================================
  useEffect(() => {
    const effectivePlan = state.userAccount?.planTier || state.planTier || 'free';
    const uid = state.userAccount?.googleId || state.userAccount?.email;
    const email = state.userAccount?.email;

    if (effectivePlan === 'free') {
      // Utilisateur en mode Gratuit : ZÉRO notification (ni fermée, ni ouverte)
      if (uid) {
        import('./services/webPushService').then(({ unsubscribeFromWebPush }) => {
          unsubscribeFromWebPush(uid).catch(() => {});
        });
      }
      return;
    }

    // Utilisateur en mode Pro ou Plus : activation automatique Web Push silencieuse
    if (effectivePlan === 'pro' || effectivePlan === 'plus') {
      import('./services/webPushService').then(({ autoRegisterWebPushIfPro }) => {
        autoRegisterWebPushIfPro(effectivePlan, uid, email).catch(() => {});
      });

      // Synchroniser également le token FCM si supporté
      if (uid) {
        import('./services/fcmNotificationService').then(({ enableStudentPushNotifications }) => {
          enableStudentPushNotifications(uid).catch(() => {});
        });

        // Synchroniser automatiquement les enveloppes du jour dans la file push_queue
        import('./services/pushQueueService').then(({ syncTodaySessionsToPushQueue }) => {
          syncTodaySessionsToPushQueue(uid, email || '', state.studySessions, state.subjects).catch(() => {});
        });
      }
    }
  }, [
    state.userAccount?.planTier,
    state.planTier,
    state.userAccount?.googleId,
    state.userAccount?.email,
    state.studySessions,
    state.subjects,
  ]);

  // Gestion d'authentification mobile et synchronisation au démarrage
  useEffect(() => {
    let isMounted = true;

    const checkMobileRedirectAuth = async () => {
      try {
        const redirectedUser = await checkGoogleRedirectResult();
        if (redirectedUser && isMounted) {
          const profile: UserAccount = {
            name: redirectedUser.displayName || 'Étudiant',
            email: redirectedUser.email || '',
            avatar: redirectedUser.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(redirectedUser.displayName || 'User')}`,
            googleId: redirectedUser.uid,
            konanId: generateKonanId(redirectedUser.uid || redirectedUser.email || undefined),
            academicLevel: 'Licence Universitaire',
            isLoggedIn: true,
            isDemo: false,
            lastSyncedAt: new Date().toISOString(),
          };
          await handleLoginSuccess(profile);
          setActiveView('dashboard');
        }
      } catch (err) {
        console.warn('Vérification redirection Google mobile:', err);
      }
    };

    checkMobileRedirectAuth();

    // Écoute des changements d'état d'authentification Firebase :
    const unsubscribeAuth = onFirebaseAuthStateChange(async (firebaseUser) => {
      if (!isMounted) return;
      if (firebaseUser && (!state.userAccount?.isLoggedIn || state.isDemoMode)) {
        const profile: UserAccount = {
          name: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'Étudiant',
          email: firebaseUser.email || '',
          avatar: firebaseUser.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(firebaseUser.displayName || firebaseUser.email || 'User')}`,
          googleId: firebaseUser.uid,
          konanId: generateKonanId(firebaseUser.uid || firebaseUser.email || undefined),
          academicLevel: 'Licence Universitaire',
          isLoggedIn: true,
          isDemo: false,
          lastSyncedAt: new Date().toISOString(),
        };
        await handleLoginSuccess(profile);
      }
    });

    return () => {
      isMounted = false;
      unsubscribeAuth();
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
    if (view === 'admin') {
      setActiveView('admin');
      return;
    }

    if (state.isDemoMode && view === 'upload-schedule') {
      showToast('ℹ️ En mode démo, l’importation d’emploi du temps est désactivée : votre EDT est déjà prédéfini à l’avance. Connectez-vous pour importer le vôtre (jusqu’à 3 imports gratuits).');
      return;
    }

    // Formule KONAN PRO : Connexion impérative obligatoire (aucun accès anonyme ou démo non authentifié)
    if (view === 'pro-wizard') {
      if (!state.userAccount?.isLoggedIn || state.isDemoMode) {
        showToast('🔒 Connexion requise : Vous devez impérativement être connecté avec votre compte Google pour passer à KONAN PRO.');
        setActiveView('auth');
        return;
      }
    }

    const isAuthenticated = Boolean(state.userAccount?.isLoggedIn || state.isDemoMode);
    if (!isAuthenticated && view !== 'landing' && view !== 'auth') {
      showToast('🔒 Connexion requise : Veuillez vous connecter avec Google pour accéder à l’application.');
      setActiveView('auth');
      return;
    }

    setActiveView(view);
  };

  /**
   * Finalisation de la connexion après acceptation expresse de la politique de confidentialité :
   * - Enregistrement du compte Google dans la base de données Cloud Firestore
   * - Déblocage de la session active et navigation vers le tableau de bord
   */
  const finalizeUserLogin = async (
    profile: UserAccount,
    userState: AppState,
    effectivePlan: 'free' | 'pro' | 'plus',
    finalName: string,
    studentKonanId: string
  ) => {
    setActiveSession({
      uid: profile.googleId,
      isDemo: false,
      name: finalName,
      email: profile.email,
      avatar: profile.avatar,
      academicLevel: profile.academicLevel,
    });

    // 1. Synchronisation Cloud PRIORITAIRE AVANT toute écriture sur Firestore :
    // Récupérer et fusionner immédiatement les matières, devoirs et sessions stockés sur Cloud Firestore
    let finalUserState = userState;
    try {
      const mergedFromCloud = await fetchAndMergeCloudState(profile.googleId, userState);
      if (mergedFromCloud && (mergedFromCloud.subjects?.length > 0 || mergedFromCloud.completedOnboarding)) {
        finalUserState = mergedFromCloud;
      }
    } catch (err) {
      console.warn('Erreur synchronisation cloud initiale:', err);
    }

    setState(finalUserState);

    // 2. Enregistrement sécurisé local et dans la base de données Firestore avec l'état fusionné
    await saveUserState(profile.googleId, finalUserState);

    // Message de bienvenue avec Code Konan permanent
    hasGreetedAuthRef.current = profile.googleId;
    const resolvedTier = finalUserState.planTier || effectivePlan;
    if (resolvedTier === 'pro') {
      showToast(`⭐ Bonne Arrivée ! ${finalName} — Code Konan : ${studentKonanId} (KONAN PRO actif)`);
    } else if (resolvedTier === 'plus') {
      showToast(`👑 Bonne Arrivée ! ${finalName} — Code Konan : ${studentKonanId} (KONAN PLUS actif)`);
    } else {
      showToast(`✨ Bonne Arrivée ! ${finalName} — Votre Code Konan : ${studentKonanId}`);
    }

    // Célébration lors de la toute première connexion
    const firstLoginKey = `konan_welcomed_v1_${profile.googleId}`;
    const isFirstTimeLogin = !localStorage.getItem(firstLoginKey) && !finalUserState.completedOnboarding;
    if (isFirstTimeLogin) {
      localStorage.setItem(firstLoginKey, 'true');
      soundFX.playVictoryCelebration();
      if (resolvedTier === 'plus') {
        setIsPlusActivationModalOpen(true);
      } else if (resolvedTier === 'pro') {
        setIsSuperProModalOpen(true);
      }
    }

    // Déblocage de l'accès à l'application
    setActiveView('dashboard');
  };

  /**
   * Real Google / Custom Profile Login:
   * Pour la première connexion, tant que l'utilisateur n'a pas accepté la politique de confidentialité,
   * son compte Google n'est JAMAIS enregistré dans Firestore et il n'accède pas à l'application.
   */
  const handleLoginSuccess = async (profile: UserAccount, preferences?: { chronotype: Chronotype }) => {
    let userState = loadUserState(profile.googleId, profile);
    const finalName = userState.studentName || profile.name || 'Étudiant';

    if (preferences?.chronotype) {
      userState.preferences.chronotype = preferences.chronotype;
    }
    userState.academicLevel = profile.academicLevel || userState.academicLevel;
    userState.studentName = finalName;

    // Si l'utilisateur vient de terminer le parcours d'onboarding avec extraction d'EDT, fusionner immédiatement ses cours et matières
    let onboardingPlanTier: 'free' | 'pro' | 'plus' | undefined;
    try {
      const rawPendingOnboarding = sessionStorage.getItem('konan_pending_onboarding_payload');
      if (rawPendingOnboarding) {
        const parsedOnboarding = JSON.parse(rawPendingOnboarding);
        if (parsedOnboarding && Array.isArray(parsedOnboarding.subjects) && parsedOnboarding.subjects.length > 0) {
          userState.subjects = parsedOnboarding.subjects;
          userState.classSlots = parsedOnboarding.classSlots || [];
          userState.studySessions = parsedOnboarding.studySessions || [];
          if (parsedOnboarding.preferences) {
            userState.preferences = {
              ...userState.preferences,
              ...parsedOnboarding.preferences,
              studentName: finalName,
            };
            userState.academicLevel =
              parsedOnboarding.preferences.academicLevel ||
              parsedOnboarding.preferences.academicTrack ||
              userState.academicLevel;
          }
          userState.completedOnboarding = true;
          userState.pdfImportsCount = Math.max(1, userState.pdfImportsCount || 0);
          onboardingPlanTier = parsedOnboarding.planTier;
        }
        sessionStorage.removeItem('konan_pending_onboarding_payload');
      }
    } catch (err) {
      console.warn('Notice lecture payload onboarding:', err);
    }

    const pendingPlan = (localStorage.getItem('konan_pending_plan') as 'free' | 'pro' | 'plus' | null);
    const effectivePlan = onboardingPlanTier || pendingPlan || userState.planTier || profile.planTier || 'free';
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
      pdfImportsCount: userState.pdfImportsCount,
    };
    userState.isDemoMode = false;

    // Sauvegarder immédiatement l'état local pour que tout rafraîchissement conserve l'emploi du temps extrait
    if (userState.completedOnboarding && userState.subjects.length > 0) {
      await saveUserState(profile.googleId, userState);
    }

    // Vérifier si cet utilisateur a DÉJÀ accepté les règles de confidentialité précédemment
    let hasAcceptedPrivacy = Boolean(userState.privacyPolicyAccepted || userState.userAccount?.privacyPolicyAccepted);

    if (!hasAcceptedPrivacy) {
      try {
        const cloudData = await loadUserStateFromCloud(profile.googleId);
        if (cloudData?.privacyPolicyAccepted) {
          hasAcceptedPrivacy = true;
          userState.privacyPolicyAccepted = true;
          userState.privacyPolicyAcceptedAt = cloudData.privacyPolicyAcceptedAt;
          if (userState.userAccount) {
            userState.userAccount.privacyPolicyAccepted = true;
            userState.userAccount.privacyPolicyAcceptedAt = cloudData.privacyPolicyAcceptedAt;
          }
        }
      } catch (err) {
        console.warn('Vérification cloud privacy:', err);
      }
    }

    // 🔒 TANT QUE L'UTILISATEUR N'A PAS ACCEPTÉ :
    // - Son compte Google et son email ne sont PAS enregistrés dans la base de données
    // - Aucun accès au dashboard
    // - Affichage immédiat de l'affiche de confidentialité
    if (!hasAcceptedPrivacy) {
      setPendingAuth({
        profile,
        preferences,
        initialState: userState,
      });
      setIsPrivacyModalOpen(true);
      return;
    }

    // UTILISATEUR AYANT DÉJÀ ACCEPTÉ (reconnexion) : Accès direct et synchronisation
    await finalizeUserLogin(profile, userState, effectivePlan, finalName, studentKonanId);
  };

  /**
   * Plan selection from Landing Hero / Pricing / Modals / Settings:
   * Dissout immédiatement toutes les fonctionnalités exclusives lors du passage à un modèle inférieur (ex: Pro -> Free, Plus -> Pro)
   */
  const handleSelectPlan = (planId: 'free' | 'pro' | 'plus') => {
    setIsProModalOpen(false);

    // Formule KONAN PRO : Connexion impérative obligatoire
    if (planId === 'pro') {
      if (!state.userAccount?.isLoggedIn || state.isDemoMode) {
        showToast('🔒 Connexion requise : Vous devez impérativement être connecté avec votre compte Google pour passer à KONAN PRO.');
        setActiveView('auth');
        return;
      }
      setActiveView('pro-wizard');
      return;
    }

    // Formule KONAN PLUS : Disponible bientôt
    if (planId === 'plus') {
      setWaitlistModalInfo({
        isOpen: true,
        featureTitle: 'Formule KONAN PLUS (Disponible bientôt)',
        featureDescription: 'La formule KONAN PLUS sera disponible très prochainement avec le pack groupe et les ambiances audio. Vous disposez actuellement d\'un accès complet aux fonctionnalités de révision.',
        requiredTier: 'plus',
      });
      return;
    }

    // Modèle Gratuit :
    const { nextState } = transitionUserState(state, 'free');
    nextState.planTier = 'free';
    if (nextState.userAccount) {
      nextState.userAccount.planTier = 'free';
      nextState.userAccount.isGroupGuest = false;
    }
    nextState.isGroupGuest = false;

    if (nextState.userAccount?.googleId && !nextState.isDemoMode) {
      saveUserState(nextState.userAccount.googleId, nextState);
    }
    setState(nextState);

    showToast(`✨ Modèle KONAN Gratuit actif pour votre compte.`);
    if (activeView === 'landing' || activeView === 'auth') {
      setActiveView('dashboard');
    }
  };

  /**
   * Konan Plus: Manage invited student IDs
   */
  const handleUpdateInvitedIds = (ids: string[]) => {
    if (effectivePlanTier !== 'plus') {
      setWaitlistModalInfo({
        isOpen: true,
        featureTitle: 'Groupe & Partage (4 comptes inclus)',
        featureDescription: 'Inviter jusqu\'à 4 camarades avec leurs propres comptes fait partie de l\'expérience KONAN PLUS.',
        requiredTier: 'plus',
      });
      return;
    }

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
    if (effectivePlanTier !== 'plus') {
      setWaitlistModalInfo({
        isOpen: true,
        featureTitle: 'Groupe & Partage (4 comptes inclus)',
        featureDescription: 'Inviter jusqu\'à 4 camarades avec leurs propres comptes fait partie de l\'expérience KONAN PLUS.',
        requiredTier: 'plus',
      });
      return;
    }

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
    if (effectivePlanTier !== 'plus') {
      setWaitlistModalInfo({
        isOpen: true,
        featureTitle: 'Objectifs Académiques (Major de promotion)',
        featureDescription: 'Le conditionnement intelligent du planning selon vos objectifs (12, 16 ou Major) est réservé à KONAN PLUS.',
        requiredTier: 'plus',
      });
      return;
    }
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
   * Acceptance of the Privacy Policy & Firebase Cloud Data Security Agreement:
   * C'EST ICI QU'ON ENREGISTRE EN BASE DE DONNÉES ET QU'ON DÉBLOQUE L'ACCÈS À L'APPLICATION !
   */
  const handleAcceptPrivacyPolicy = async () => {
    const timestamp = new Date().toISOString();

    if (pendingAuth) {
      const { profile, initialState } = pendingAuth;
      const finalName = initialState.studentName || profile.name || 'Étudiant';
      const studentKonanId = initialState.konanId || profile.konanId || generateKonanId(profile.googleId || profile.email);
      const effectivePlan = initialState.planTier || profile.planTier || 'free';

      const acceptedUserState: AppState = {
        ...initialState,
        privacyPolicyAccepted: true,
        privacyPolicyAcceptedAt: timestamp,
        userAccount: initialState.userAccount ? {
          ...initialState.userAccount,
          privacyPolicyAccepted: true,
          privacyPolicyAcceptedAt: timestamp,
          lastSyncedAt: timestamp,
        } : {
          ...profile,
          privacyPolicyAccepted: true,
          privacyPolicyAcceptedAt: timestamp,
          lastSyncedAt: timestamp,
        },
      };

      setIsPrivacyModalOpen(false);
      setPendingAuth(null);

      // Enregistre en base de données et ouvre l'accès à l'application
      await finalizeUserLogin(profile, acceptedUserState, effectivePlan, finalName, studentKonanId);
      soundFX.playVictoryCelebration();
      showToast(`✨ Bienvenue sur KONAN AI ! Votre compte Google est maintenant enregistré et sécurisé.`);
      return;
    }

    const currentUid = state.userAccount?.googleId;
    setState(prev => {
      const nextUserAccount: UserAccount | undefined = prev.userAccount ? {
        ...prev.userAccount,
        privacyPolicyAccepted: true,
        privacyPolicyAcceptedAt: timestamp,
        lastSyncedAt: timestamp,
      } : undefined;

      const nextState: AppState = {
        ...prev,
        privacyPolicyAccepted: true,
        privacyPolicyAcceptedAt: timestamp,
        userAccount: nextUserAccount,
      };

      if (currentUid && !prev.isDemoMode) {
        saveUserState(currentUid, nextState);
        syncUserStateToCloud(currentUid, {
          privacyPolicyAccepted: true,
          privacyPolicyAcceptedAt: timestamp,
        }).catch(console.warn);
      }
      return nextState;
    });

    setIsPrivacyModalOpen(false);
    soundFX.playVictoryCelebration();
    showToast(`✨ Vos préférences de confidentialité ont été mises à jour.`);
  };

  /**
   * Refus de la politique de confidentialité :
   * Tant que non accepté : compte Google et email JAMAIS enregistrés dans Firestore.
   * Déconnexion complète, nettoyage et retour à l'écran d'accueil.
   */
  const handleDeclinePrivacyPolicy = async () => {
    const declinedUid = pendingAuth?.profile.googleId || state.userAccount?.googleId;
    setIsPrivacyModalOpen(false);
    setPendingAuth(null);

    // Déconnexion Firebase Auth immédiate
    await signOutReal();
    setActiveSession(null);

    // Supprimer le stockage local résiduel pour ce compte
    if (declinedUid && declinedUid !== 'guest' && declinedUid !== 'google-demo') {
      try {
        localStorage.removeItem(`konan_user_${declinedUid}`);
      } catch {}
    }

    let deviceStudentId = '';
    try {
      deviceStudentId = localStorage.getItem('konan_device_student_id') || generateKonanId();
    } catch {
      deviceStudentId = generateKonanId();
    }

    const guestUser: UserAccount = {
      name: 'Étudiant',
      email: '',
      avatar: '',
      googleId: 'guest',
      academicLevel: 'Licence Universitaire',
      planTier: 'free',
      isDemo: false,
      isLoggedIn: false,
      lastSyncedAt: new Date().toISOString(),
      konanId: deviceStudentId,
    };

    setState({
      ...createEmptyUserState(guestUser),
      konanId: deviceStudentId,
      isDemoMode: false,
    });
    showToast("ℹ️ L'acceptation de la politique de confidentialité est requise pour créer votre compte et accéder à l'application.", 6000);
    setActiveView('landing');
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
   * Explicit Demo Mode:
   * Activated UNIQUELY when the user explicitly clicks "Mode Démo" or a sample preset.
   * Never auto-selected.
   */
  const handleEnterDemoMode = (presetId?: string) => {
    const targetPresetId = typeof presetId === 'string' && presetId ? presetId : 'cs-engineering';
    const demo = createInitialStateFromPreset(targetPresetId);
    demo.planTier = 'free';
    if (demo.userAccount) {
      demo.userAccount.planTier = 'free';
    }

    // Si la méthode préférée était pro (feynman ou time_blocking), basculer sur pomodoro
    if (demo.preferences?.pacing === 'feynman' || demo.preferences?.pacing === 'time_blocking') {
      demo.preferences.pacing = 'pomodoro';
      demo.preferences.combinedPacings = ['pomodoro'];
    }

    setActiveSession({
      isDemo: true,
      name: demo.userAccount?.name || 'Alexandre Étudiant (Compte Démo)',
      email: demo.userAccount?.email || 'alexandre.universite@etudiant.univ.fr',
    });

    setState(demo);
    showToast(`🎓 Mode Démo activé (${demo.academicLevel}). Modèle Gratuit (Free) actif.`);
    setActiveView('dashboard');
  };

  /**
   * Logout handler:
   * Disconnects Firebase / Demo and resets to clean unauthenticated Guest state (ZERO demo courses).
   */
  const handleLogout = async () => {
    hasGreetedAuthRef.current = '';
    lastRescheduledSignature.current = '';
    if (state.userAccount?.googleId && !state.isDemoMode) {
      try {
        await saveUserState(state.userAccount.googleId, state);
      } catch (err) {
        console.warn('Erreur de synchronisation cloud avant déconnexion:', err);
      }
    }
    await signOutReal();
    setActiveSession(null);

    let deviceStudentId = '';
    try {
      deviceStudentId = localStorage.getItem('konan_device_student_id') || '';
      if (!deviceStudentId) {
        deviceStudentId = generateKonanId();
        localStorage.setItem('konan_device_student_id', deviceStudentId);
      }
    } catch {
      deviceStudentId = generateKonanId();
    }

    const guestUser: UserAccount = {
      name: 'Étudiant',
      email: '',
      avatar: '',
      googleId: 'guest',
      academicLevel: 'Licence Universitaire',
      planTier: 'free',
      isDemo: false,
      isLoggedIn: false,
      lastSyncedAt: new Date().toISOString(),
      konanId: deviceStudentId,
    };

    const emptyGuestState: AppState = {
      ...createEmptyUserState(guestUser),
      konanId: deviceStudentId,
      isDemoMode: false,
    };

    setState(emptyGuestState);

    showToast('Session terminée.');
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
    planTier?: 'free' | 'pro' | 'plus';
  }) => {
    if (state.isDemoMode) {
      showToast('⚠️ En mode démo, l’emploi du temps est prédéfini à l’avance et ne peut pas être modifié par importation.');
      return;
    }

    try {
      sessionStorage.removeItem('konan_pending_onboarding_payload');
    } catch {
      // Ignorer
    }

    // Mettre aussi à jour pendingAuth si la modale de confidentialité est ouverte lors d'une première inscription
    setPendingAuth(prevPending => {
      if (!prevPending) return null;
      const effectiveTier = payload.planTier || prevPending.initialState.planTier || 'free';
      const nextPdfCount = (prevPending.initialState.pdfImportsCount || 0) + 1;
      const mergedInitial: AppState = {
        ...prevPending.initialState,
        academicLevel: payload.preferences.academicLevel || prevPending.initialState.academicLevel,
        planTier: effectiveTier,
        subjects: payload.subjects,
        classSlots: payload.classSlots,
        preferences: payload.preferences,
        studySessions: payload.studySessions,
        pdfImportsCount: nextPdfCount,
        completedOnboarding: true,
        userAccount: prevPending.initialState.userAccount
          ? {
              ...prevPending.initialState.userAccount,
              planTier: effectiveTier,
              pdfImportsCount: nextPdfCount,
            }
          : undefined,
      };
      return {
        ...prevPending,
        initialState: mergedInitial,
      };
    });

    setState(prev => {
      const nextPdfCount = (prev.pdfImportsCount || prev.userAccount?.pdfImportsCount || 0) + 1;
      const effectiveTier = payload.planTier || prev.planTier || prev.userAccount?.planTier || 'free';
      const updated: AppState = {
        ...prev,
        academicLevel: payload.preferences.academicLevel || prev.academicLevel,
        planTier: effectiveTier,
        subjects: payload.subjects,
        classSlots: payload.classSlots,
        preferences: payload.preferences,
        studySessions: payload.studySessions,
        logs: [],
        pdfImportsCount: nextPdfCount,
        userAccount: prev.userAccount ? {
          ...prev.userAccount,
          planTier: effectiveTier,
          pdfImportsCount: nextPdfCount,
        } : undefined,
        completedOnboarding: true,
      };

      if (prev.userAccount?.googleId && !prev.isDemoMode) {
        saveUserState(prev.userAccount.googleId, updated);
      }
      return updated;
    });

    // 🌟 If on KONAN PRO, automatically trigger Google Agenda sync for all days
    const isPro = (payload.planTier || state.planTier || state.userAccount?.planTier) === 'pro' || (payload.planTier || state.planTier || state.userAccount?.planTier) === 'plus';
    if (isPro && payload.studySessions.length > 0) {
      triggerAutoGoogleCalendarSync(
        payload.studySessions,
        payload.subjects,
        state.studentName || state.userAccount?.name || 'Étudiant',
        'plan_applied'
      );
    }

    showToast('🎉 Emploi du temps synchronisé & planning d’étude optimisé généré !');
    setActiveView('dashboard');
  };

  const handleUpdateSubjects = (newSubjects: Subject[]) => {
    const validSubjectIds = new Set(newSubjects.map(s => s.id));
    const cleanedSlots = state.classSlots.filter(c => !c.subjectId || validSubjectIds.has(c.subjectId));
    const updatedPlan = generateOptimizedStudyPlan(newSubjects, cleanedSlots, state.preferences, effectivePlanTier);
    setState(prev => {
      const mergedSessions = mergePreservingCompletedSessions(prev.studySessions, updatedPlan);
      const nextState: AppState = {
        ...prev,
        subjects: newSubjects,
        classSlots: cleanedSlots,
        studySessions: mergedSessions,
        logs: prev.logs.filter(l => !l.subjectId || validSubjectIds.has(l.subjectId)),
      };
      if (prev.userAccount?.googleId && !prev.isDemoMode) {
        saveUserState(prev.userAccount.googleId, nextState);
      }
      return nextState;
    });
    showToast('Matières mises à jour et planning recalculé !');
  };

  const handleUpdateClassSlots = (newSlots: ClassSlot[]) => {
    const harmonized = harmonizeAndDeduplicateSlots(newSlots);
    const updatedPlan = generateOptimizedStudyPlan(state.subjects, harmonized, state.preferences, effectivePlanTier);
    setState(prev => {
      const mergedSessions = mergePreservingCompletedSessions(prev.studySessions, updatedPlan);
      const nextState: AppState = {
        ...prev,
        classSlots: harmonized,
        studySessions: mergedSessions,
      };
      if (prev.userAccount?.googleId && !prev.isDemoMode) {
        saveUserState(prev.userAccount.googleId, nextState);
      }
      return nextState;
    });
    showToast("Emploi du temps mis à jour avec succès !");
  };

  const handleUpdatePreferences = (newPrefs: StudyPreferences) => {
    const updatedPlan = generateOptimizedStudyPlan(state.subjects, state.classSlots, newPrefs, effectivePlanTier);
    setState(prev => {
      const mergedSessions = mergePreservingCompletedSessions(prev.studySessions, updatedPlan);
      const nextState: AppState = {
        ...prev,
        preferences: newPrefs,
        studySessions: mergedSessions,
      };
      if (prev.userAccount?.googleId && !prev.isDemoMode) {
        saveUserState(prev.userAccount.googleId, nextState);
      }
      return nextState;
    });
    showToast("Préférences d'étude enregistrées !");
  };

  const handleUpdateProfile = (updated: { 
    name: string; 
    academicLevel: string; 
    phoneNumber?: string; 
    countryCode?: string 
  }) => {
    // Sécurité backend : assainit formellement le payload et empêche la modification frauduleuse de tier/isPro
    const safeData = sanitizeUserProfileUpdate(updated as any);

    setState(prev => {
      const nextUserAccount: UserAccount = prev.userAccount ? {
        ...prev.userAccount,
        name: safeData.name,
        academicLevel: safeData.academicLevel,
        phoneNumber: safeData.phoneNumber,
        countryCode: safeData.countryCode,
        lastSyncedAt: new Date().toISOString(),
      } : {
        isLoggedIn: false,
        name: safeData.name,
        email: '',
        avatar: '',
        googleId: '',
        academicLevel: safeData.academicLevel,
        lastSyncedAt: new Date().toISOString(),
      };

      const next: AppState = {
        ...prev,
        studentName: safeData.name,
        academicLevel: safeData.academicLevel,
        userAccount: nextUserAccount,
        preferences: {
          ...prev.preferences,
          studentName: safeData.name,
          academicLevel: safeData.academicLevel,
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
    setState(prev => {
      const freshPlan = generateOptimizedStudyPlan(prev.subjects, prev.classSlots, prev.preferences, effectivePlanTier);
      const mergedSessions = mergePreservingCompletedSessions(prev.studySessions, freshPlan);
      const nextState: AppState = {
        ...prev,
        studySessions: mergedSessions,
      };
      if (prev.userAccount?.googleId && !prev.isDemoMode) {
        saveUserState(prev.userAccount.googleId, nextState);
      }
      return nextState;
    });
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
        ? { 
            ...s, 
            completed: willBeCompleted, 
            completedAt: willBeCompleted ? new Date().toISOString() : undefined,
            actualDurationMinutes: willBeCompleted ? (s.actualDurationMinutes || s.durationMinutes) : undefined,
          } 
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
      // Supprimer immédiatement l'enveloppe catchup dans push_queue
      const currentUid = state.userAccount?.googleId || auth?.currentUser?.uid;
      if (currentUid && (effectivePlanTier === 'pro' || effectivePlanTier === 'plus')) {
        import('./services/pushQueueService').then(({ removeSessionCatchupFromQueue }) => {
          removeSessionCatchupFromQueue(currentUid, target.id);
        }).catch(() => {});
      }

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
        ? { 
            ...s, 
            completed: true, 
            completedAt: new Date().toISOString(),
            actualDurationMinutes: log.durationMinutes,
          } 
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
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#070B13] text-[#0F172A] dark:text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white w-full max-w-full overflow-x-hidden transition-colors duration-300">
      
      {/* Hidden file input for JSON configuration backup imports */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImportFile}
        accept=".json"
        className="hidden"
      />

      {/* Persistent Navbar (Masquée sur la console Administrateur et sur l'accueil Onboarding immersif) */}
      {activeView !== 'admin' && activeView !== 'landing' && (
        <Navbar
          activeView={activeView}
          onNavigate={handleNavigate}
          onViewPricing={handleViewPricing}
          onUpgradeToPro={() => handleSelectPlan('pro')}
          studentName={effectiveStudentName}
          academicLevel={state.academicLevel}
          userAccount={state.userAccount}
          planTier={effectivePlanTier}
          konanId={state.konanId || state.userAccount?.konanId}
          isDemoMode={state.isDemoMode}
          onEnterDemoMode={() => handleEnterDemoMode('cs-engineering')}
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
          ownerNotifications={ownerFeedbackNotifications}
          onAcceptInvitation={handleAcceptInvitation}
          onDeclineInvitation={handleDeclineInvitation}
        />
      )}

      {/* Bouton Flottant d'Accès Rapide Admin si session admin active */}
      {activeView !== 'admin' && typeof window !== 'undefined' && sessionStorage.getItem('konan_admin_authenticated') === 'true' && (
        <button
          onClick={() => setActiveView('admin')}
          className="fixed bottom-5 right-5 z-50 px-3.5 py-2.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs shadow-2xl shadow-purple-600/40 border border-purple-400/40 flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95 transition-all"
        >
          <ShieldCheck className="w-4 h-4 text-purple-300" />
          <span>Console Admin (Direct)</span>
        </button>
      )}

      {/* Main View Container */}
      <main className={`flex-1 w-full mx-auto overflow-x-hidden ${
        activeView === 'landing' || activeView === 'admin'
          ? 'max-w-full p-0'
          : 'max-w-7xl px-3 sm:px-6 lg:px-8 py-4 sm:py-8 pb-24 lg:pb-8'
      }`}>
        
        {/* Real-time Administrator Console (Strictement Privée & Locale) */}
        {activeView === 'admin' && (
          <AdminDashboard
            onSwitchToStudentView={() => setActiveView('dashboard')}
            onExitAdmin={() => {
              try {
                sessionStorage.removeItem('konan_admin_authenticated');
                sessionStorage.removeItem('konan_admin_token');
              } catch {}
              setActiveView('landing');
            }}
          />
        )}

        {/* Parcours d'Onboarding Immersif & Animé Style Duolingo (Page d'accueil épurée) */}
        {activeView === 'landing' && (
          <DuolingoOnboarding
            currentUser={state.userAccount?.isLoggedIn ? state.userAccount : null}
            onOpenLogin={() => setActiveView('auth')}
            onLoginSuccess={(user) => {
              handleLoginSuccess(user);
            }}
            onComplete={({ subjects, classSlots, preferences, studySessions, planTier }) => {
              handleApplyExtractedSchedule({
                subjects,
                classSlots,
                preferences,
                studySessions,
                planTier,
              });
            }}
          />
        )}

        {/* Dedicated Google Auth Page */}
        {activeView === 'auth' && (
          <AuthPage
            onLoginSuccess={handleLoginSuccess}
            onEnterDemoMode={handleEnterDemoMode}
            onBackToLanding={() => setActiveView('landing')}
            onOpenAdmin={() => setActiveView('admin')}
            currentProfile={state.userAccount}
          />
        )}

        {/* Timetable Upload & AI Analysis Engine: STRICTLY PROTECTED */}
        {activeView === 'upload-schedule' && (
          (state.userAccount?.isLoggedIn && !state.isDemoMode) ? (
            <PdfUploadView
              studentName={effectiveStudentName}
              planTier={effectivePlanTier}
              pdfImportsCount={state.pdfImportsCount || state.userAccount?.pdfImportsCount || 0}
              userEmail={state.userAccount?.email}
              userId={state.userAccount?.googleId}
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
                <h3 className="text-lg font-bold text-white">Mode Démo : Emploi du Temps Prédéfini</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  En mode démo, l'emploi du temps est <strong>déjà prédéfini à l'avance</strong> et l'importation est désactivée. Pour importer votre propre emploi du temps (<strong className="text-sky-300">jusqu'à 3 imports gratuits</strong>), connectez-vous avec votre compte Google.
                </p>
              </div>
              <div className="flex flex-col gap-2.5 pt-3">
                <button
                  onClick={() => setActiveView('auth')}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs transition-colors cursor-pointer shadow-md shadow-blue-600/20"
                >
                  Se connecter avec Google (3 imports gratuits)
                </button>
                <button
                  onClick={() => setActiveView('schedule')}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors cursor-pointer"
                >
                  Consulter mon emploi du temps démo prédéfini
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
              studentName={effectiveStudentName}
              academicLevel={state.academicLevel}
              subjects={state.subjects}
              classSlots={state.classSlots}
              studySessions={state.studySessions}
              preferences={state.preferences}
              isDemoMode={state.isDemoMode}
              planTier={effectivePlanTier}
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
              onOpenGroupModal={() => setIsPlusGroupModalOpen(true)}
              onOpenGoalModal={() => setIsAcademicGoalModalOpen(true)}
              isGroupGuest={state.isGroupGuest || state.userAccount?.isGroupGuest}
              invitedBy={state.invitedBy || state.userAccount?.invitedBy}
              userUid={state.userAccount?.googleId}
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
              studentName={effectiveStudentName}
              academicLevel={state.academicLevel}
              subjects={state.subjects}
              classSlots={state.classSlots}
              studySessions={state.studySessions}
              preferences={state.preferences}
              isDemoMode={state.isDemoMode}
              planTier={effectivePlanTier}
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
              planTier={effectivePlanTier}
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
              planTier={effectivePlanTier}
              onRegeneratePlan={handleRegeneratePlan}
              onToggleSessionComplete={handleToggleSessionComplete}
              onStartFocusSession={handleStartFocusSession}
              onAddCustomSession={handleAddCustomSession}
              onUpdatePreferences={handleUpdatePreferences}
              onViewPricing={handleViewPricing}
              onUpgradeToPro={() => handleSelectPlan('pro')}
              cycleCompletedDate={state.cycleCompletedDate}
              onStartNewCycleEarly={handleStartNewCycleEarly}
              studentName={state.studentName || state.userAccount?.name || 'Étudiant'}
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
              weeklySummaries={state.weeklySummaries}
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

        {/* Pro Onboarding Wizard: Dedicated Page */}
        {activeView === 'pro-wizard' && (
          <ProWizardView
            state={state}
            onUpdateState={(nextState) => {
              if (nextState.userAccount?.googleId && !nextState.isDemoMode) {
                saveUserState(nextState.userAccount.googleId, nextState);
              }
              setState(nextState);
            }}
            onNavigate={handleNavigate}
            showToast={showToast}
          />
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
        studentName={effectiveStudentName}
        academicLevel={state.academicLevel}
        planTier={effectivePlanTier}
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
        onOpenGroupModal={() => {
          if (effectivePlanTier !== 'plus') {
            setWaitlistModalInfo({
              isOpen: true,
              featureTitle: 'Groupe & Partage (4 comptes inclus)',
              featureDescription: 'Inviter jusqu\'à 4 camarades avec leurs propres comptes fait partie de l\'expérience KONAN PLUS.',
              requiredTier: 'plus',
            });
            return;
          }
          setIsPlusGroupModalOpen(true);
        }}
        onOpenGoalModal={() => {
          if (effectivePlanTier !== 'plus') {
            setWaitlistModalInfo({
              isOpen: true,
              featureTitle: 'Objectifs Académiques (Major de promotion)',
              featureDescription: 'Le conditionnement intelligent du planning selon vos objectifs (12, 16 ou Major) est réservé à KONAN PLUS.',
              requiredTier: 'plus',
            });
            return;
          }
          setIsAcademicGoalModalOpen(true);
        }}
        onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)}
      />

      {/* Pro Upgrade Modal */}
      <ProFeatureModal
        isOpen={isProModalOpen}
        onClose={() => setIsProModalOpen(false)}
        onViewPricing={handleViewPricing}
        onUpgradeToPro={() => handleSelectPlan('pro')}
        userEmail={state.userAccount?.email}
        userId={state.userAccount?.googleId}
      />

      {/* Modale Waitlist d'accès verrouillé (Wave & Orange Money) */}
      <WaitlistModal
        isOpen={waitlistModalInfo.isOpen}
        onClose={() => setWaitlistModalInfo(prev => ({ ...prev, isOpen: false }))}
        featureTitle={waitlistModalInfo.featureTitle}
        featureDescription={waitlistModalInfo.featureDescription}
        requiredTier={waitlistModalInfo.requiredTier}
        userEmail={state.userAccount?.email}
        userId={state.userAccount?.googleId}
      />

      {/* Duolingo Super-style Celebration Modal for KONAN PRO */}
      <SuperProActivationModal
        isOpen={isSuperProModalOpen}
        onClose={() => setIsSuperProModalOpen(false)}
        studentName={effectiveStudentName}
      />

      {/* 👑 Royal Step-by-Step Celebration & Onboarding Modal for KONAN PLUS */}
      <KonanPlusActivationModal
        isOpen={isPlusActivationModalOpen}
        onClose={() => setIsPlusActivationModalOpen(false)}
        studentName={effectiveStudentName}
        konanId={state.userAccount?.konanId || state.konanId || 'KN-849201'}
        invitedIds={state.userAccount?.invitedIds || state.invitedIds || []}
        invitedEmails={state.userAccount?.invitedEmails || state.invitedEmails || []}
        onUpdateInvitedIds={handleUpdateInvitedIds}
        onUpdateInvitedEmails={handleUpdateInvitedEmails}
        academicGoal={state.userAccount?.academicGoal || 'target_16'}
        onSelectAcademicGoal={handleSelectAcademicGoal}
        onOpenGroupModal={() => setIsPlusGroupModalOpen(true)}
        onOpenGoalModal={() => setIsAcademicGoalModalOpen(true)}
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
        studentName={effectiveStudentName}
        isGroupGuest={state.isGroupGuest || state.userAccount?.isGroupGuest}
        invitedBy={state.invitedBy || state.userAccount?.invitedBy}
      />

      {/* 👑 KONAN PLUS: 3 OBJECTIFS SCOLAIRES MODAL */}
      <AcademicGoalSelectorModal
        isOpen={isAcademicGoalModalOpen}
        onClose={() => setIsAcademicGoalModalOpen(false)}
        currentGoal={state.userAccount?.academicGoal || 'target_16'}
        onSelectGoal={handleSelectAcademicGoal}
        studentName={effectiveStudentName}
      />

      {/* Google Calendar Sync Modal (ALL DAYS) */}
      <GoogleCalendarSyncModal
        isOpen={isGoogleCalendarModalOpen}
        onClose={() => setIsGoogleCalendarModalOpen(false)}
        sessions={state.studySessions}
        subjects={state.subjects}
        studentName={effectiveStudentName}
        planTier={effectivePlanTier}
        autoOpenedReason={googleCalendarReason}
        onUpgradeToPro={() => handleSelectPlan('pro')}
        onViewPricing={handleViewPricing}
      />

      {/* Ultimate 100% Completion Celebration Modal */}
      <UltimateCompletionCelebrationModal
        isOpen={isUltimateCelebrationOpen}
        onClose={handleContinueNewCycle}
        onContinue={handleContinueNewCycle}
        studentName={effectiveStudentName}
        totalPlannedMinutes={state.studySessions.reduce((acc, s) => acc + s.durationMinutes, 0)}
        totalSessionsCount={state.studySessions.length}
      />



      {/* 🛡️ PRIVACY & FIREBASE CLOUD DATA PROTECTION MODAL (Mandatory on 1st login) */}
      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => {
          if (pendingAuth) {
            handleDeclinePrivacyPolicy();
          } else {
            setIsPrivacyModalOpen(false);
          }
        }}
        onAccept={handleAcceptPrivacyPolicy}
        onDecline={handleDeclinePrivacyPolicy}
        isGatekeeper={Boolean(pendingAuth || (state.userAccount?.isLoggedIn && !state.privacyPolicyAccepted))}
        studentName={pendingAuth?.profile.name || effectiveStudentName}
        studentEmail={pendingAuth?.profile.email || state.userAccount?.email}
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

      {/* Footer: affiché UNIQUEMENT sur la page d'accueil (première page) */}
      {activeView === 'landing' && (
        <footer className="border-t border-slate-200 dark:border-slate-900 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] text-center text-xs text-slate-500 dark:text-slate-400 bg-white/60 dark:bg-slate-950/60 mt-auto px-4 space-y-1">
          <p>KONAN - Anti-Burnout & Product Engineering d'Excellence</p>
          <p className="text-slate-600 dark:text-slate-300 font-medium">Conçu et développé par Christ Michaël Boni</p>
        </footer>
      )}

      {/* 🚀 Cinematic 3D Entrance Animation */}
      <KonanEntranceSplash 
        onComplete={() => {
          // L'animation d'entrée ne force JAMAIS la redirection vers le dashboard :
          // L'utilisateur reste sur sa vue actuelle (notamment l'interface d'accueil 'landing').
          if (pendingPrivacyModalRef.current) {
            setIsPrivacyModalOpen(true);
            pendingPrivacyModalRef.current = false;
          }
        }} 
      />

      {/* 📱 PWA Universal Mobile & Desktop Install Prompt */}
      <PwaInstallPromptModal />
    </div>

  );
}
export default App;
