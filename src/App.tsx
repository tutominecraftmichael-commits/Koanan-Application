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
  getActiveSession,
  setActiveSession,
  exportStateToJson,
  importStateFromJson,
  fetchAndMergeCloudState,
  getPendingInvitationsForUser,
  getPlusInvitations,
  updateInvitationStatus,
  registerPlusUser,
  deregisterPlusUser,
  isTargetAlreadyPlus,
  mergeInvitationsFromCloud,
  invitationBroadcastChannel
} from './services/storage';
import { KonanEntranceSplash } from './components/common/KonanEntranceSplash';

import { generateOptimizedStudyPlan } from './services/plannerAlgorithm';
import { harmonizeAndDeduplicateSlots } from './services/pdfParserService';
import { 
  auth,
  onFirebaseAuthStateChange, 
  signOutReal, 
  listenToUserCloudState,
  listenToCloudInvitationsForUser,
  fetchCloudInvitationsForUser,
  listenToAllCloudInvitations,
  fetchAllCloudInvitations,
  syncUserStateToCloud,
  loadUserStateFromCloud
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
import { Navbar, type OwnerNotificationItem } from './components/layout/Navbar';
import { SettingsModal } from './components/layout/SettingsModal';
import { ProFeatureModal } from './components/common/ProFeatureModal';
import { GoogleCalendarSyncModal } from './components/common/GoogleCalendarSyncModal';
import { PrivacyPolicyModal } from './components/common/PrivacyPolicyModal';
import { UltimateCompletionCelebrationModal } from './components/celebration/UltimateCompletionCelebrationModal';
import { SuperProActivationModal } from './components/pro/SuperProActivationModal';
import { KonanPlusActivationModal } from './components/plus/KonanPlusActivationModal';
import { KonanPlusGroupModal } from './components/plus/KonanPlusGroupModal';
import { AcademicGoalSelectorModal } from './components/plus/AcademicGoalSelectorModal';
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
import { FocusMode } from './features/focus/FocusMode';
import { PresetModal } from './features/onboarding/PresetModal';

export function App() {
  const [state, setState] = useState<AppState>(() => loadAppState());
  const pendingPrivacyModalRef = useRef<boolean>(false);

  const [activeView, setActiveView] = useState<ActiveAppView>(() => {
    const session = getActiveSession();
    const isConnected = Boolean(session && !session.isDemo && session.uid);
    if (isConnected) {
      return 'dashboard';
    }
    return 'landing';
  });
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

    // CRITICAL: Real-time universal Firestore listener (instant delivery on ANY device, 0 refresh required)
    const unsubscribeAll = listenToAllCloudInvitations(applyCloud);

    // Also targeted listener as redundant channel
    const identifiers = [myId, myEmail].filter(Boolean) as string[];
    const unsubscribeTargeted = listenToCloudInvitationsForUser(identifiers, applyCloud);

    // Safety net: periodic direct server fetch (covers sleeping mobile browsers, VPN switches)
    let fetching = false;
    const pullFromServer = async () => {
      if (fetching) return;
      fetching = true;
      try {
        const allCloud = await fetchAllCloudInvitations();
        if (Array.isArray(allCloud) && allCloud.length > 0) {
          applyCloud(allCloud);
        } else if (identifiers.length > 0) {
          applyCloud(await fetchCloudInvitationsForUser(identifiers));
        }
      } catch (err) {
        console.warn('Invitation server fetch failed:', err);
      } finally {
        fetching = false;
      }
    };
    pullFromServer();
    const pollTimer = window.setInterval(() => {
      if (document.visibilityState === 'visible') pullFromServer();
    }, 60000);

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
      if (document.visibilityState === 'visible') pullFromServer();
    };
    window.addEventListener('storage', handleStorage);
    window.addEventListener('focus', handleWake);
    window.addEventListener('online', handleWake);
    document.addEventListener('visibilitychange', handleWake);

    return () => {
      disposed = true;
      unsubscribeAll();
      unsubscribeTargeted();
      window.clearInterval(pollTimer);
      invitationBroadcastChannel?.removeEventListener('message', handleBcMessage);
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('focus', handleWake);
      window.removeEventListener('online', handleWake);
      document.removeEventListener('visibilitychange', handleWake);
    };
  }, [state.userAccount?.konanId, state.konanId, state.userAccount?.email]);

  // Unified, resilient single source of truth for plan tier
  // Konan Plus étant actuellement fermé/indisponible, tout compte Plus bascule directement vers Pro
  const effectivePlanTier: 'free' | 'pro' | 'plus' = useMemo(() => {
    // 1. Explicit choice in state
    if (state.planTier === 'plus' || state.planTier === 'pro') return 'pro';
    if (state.planTier === 'free') return 'free';

    // 2. Explicit choice in userAccount takes secondary priority
    if (state.userAccount?.planTier === 'plus' || state.userAccount?.planTier === 'pro') return 'pro';
    if (state.userAccount?.planTier === 'free') return 'free';

    // 3. Plus group guest
    if (state.isGroupGuest || state.userAccount?.isGroupGuest) return 'pro';

    // 4. Registry check only if not explicitly free/pro
    const myId = state.userAccount?.konanId || state.konanId;
    const myEmail = state.userAccount?.email;
    if ((myId && isTargetAlreadyPlus(myId)) || (myEmail && isTargetAlreadyPlus(myEmail))) {
      return 'pro';
    }

    return 'free';
  }, [state.planTier, state.userAccount?.planTier, state.isGroupGuest, state.userAccount?.isGroupGuest, state.userAccount?.konanId, state.konanId, state.userAccount?.email]);


  // Unified display name
  const effectiveStudentName = (state.userAccount?.isLoggedIn && state.userAccount?.name)
    ? state.userAccount.name
    : (state.studentName || 'Étudiant');

  // Eradicate any "Free" vs "Plus" discrepancy by keeping state and userAccount strictly in sync
  useEffect(() => {
    if (state.planTier !== effectivePlanTier || (state.userAccount && state.userAccount.planTier !== effectivePlanTier)) {
      setState(prev => ({
        ...prev,
        planTier: effectivePlanTier,
        userAccount: prev.userAccount ? {
          ...prev.userAccount,
          planTier: effectivePlanTier,
        } : undefined,
      }));
    }
  }, [effectivePlanTier, state.planTier, state.userAccount?.planTier]);

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

    // 3. Register user as Plus in registry
    registerPlusUser(guestKonanId, guestEmail);

    // 4. Immediately transition student to Plus
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
      } : {
        isLoggedIn: true,
        name: prev.studentName || 'Étudiant Invité',
        email: guestEmail,
        googleId: 'guest-' + (guestKonanId || invitation.id),
        konanId: guestKonanId,
        avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(prev.studentName || 'Guest')}`,
        academicLevel: prev.academicLevel || 'Licence Universitaire',
        planTier: 'plus' as const,
        isGroupGuest: true,
        invitedBy: {
          name: invitation.senderName,
          konanId: invitation.senderKonanId,
          email: invitation.senderEmail,
        },
        lastSyncedAt: new Date().toISOString(),
      };

      const nextState: AppState = {
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

      saveAppState(nextState);
      return nextState;
    });

    // 5. Update cloud user state if logged in
    const currentUid = auth?.currentUser?.uid || state.userAccount?.googleId;
    if (currentUid && currentUid !== 'google-demo') {
      syncUserStateToCloud(currentUid, {
        planTier: 'plus',
        studentName: guestName,
        konanId: guestKonanId,
        userAccount: {
          planTier: 'plus',
          isGroupGuest: true,
          invitedBy: {
            name: invitation.senderName,
            konanId: invitation.senderKonanId,
            email: invitation.senderEmail,
          },
        }
      }).catch(console.warn);
    }

    soundFX.playCelebrationFanfare();
    setToastMessage(`🎉 Félicitations ! Vous bénéficiez désormais de KONAN PLUS grâce au groupe de ${invitation.senderName}. Accès complet débloqué.`);
    setIsPlusActivationModalOpen(true);
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
        // L'utilisateur est authentifié avec Firebase : toujours activer la session réelle
        setActiveSession({
          uid: firebaseUser.uid,
          isDemo: false,
          name: firebaseUser.displayName || 'Étudiant',
          email: firebaseUser.email || '',
          avatar: firebaseUser.photoURL || '',
          academicLevel: 'Licence Universitaire',
        });

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

          // 1. Accès direct & instantané au tableau de bord (0 latence sur mobile & PC)
          setActiveView(prev => (prev === 'auth' || prev === 'landing' || prev === 'upload-schedule' ? 'dashboard' : prev));

          const greetingName = loaded.studentName || firebaseUser.displayName || 'Étudiant';
          if (hasGreetedAuthRef.current !== firebaseUser.uid) {
            hasGreetedAuthRef.current = firebaseUser.uid;
            showToast(`✨ Bonne Arrivée ! ${greetingName}`);
          }

          // 2. Vérification de la politique de confidentialité (non-bloquante pour la navigation)
          const hasLocalAccepted = Boolean(loaded.privacyPolicyAccepted || loaded.userAccount?.privacyPolicyAccepted);
          if (!hasLocalAccepted) {
            loadUserStateFromCloud(firebaseUser.uid).then(cloudData => {
              if (cloudData?.privacyPolicyAccepted) {
                setState(prev => ({
                  ...prev,
                  privacyPolicyAccepted: true,
                  privacyPolicyAcceptedAt: cloudData.privacyPolicyAcceptedAt,
                  userAccount: prev.userAccount ? {
                    ...prev.userAccount,
                    privacyPolicyAccepted: true,
                    privacyPolicyAcceptedAt: cloudData.privacyPolicyAcceptedAt,
                  } : undefined,
                }));
              } else {
                setIsPrivacyModalOpen(true);
              }
            }).catch(() => {
              setIsPrivacyModalOpen(true);
            });
          }

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

    const hasAcceptedPrivacy = Boolean(userState.privacyPolicyAccepted || userState.userAccount?.privacyPolicyAccepted);

    if (hasAcceptedPrivacy) {
      setActiveView('dashboard');
    } else {
      loadUserStateFromCloud(profile.googleId).then(cloudData => {
        if (cloudData?.privacyPolicyAccepted) {
          setState(prev => ({
            ...prev,
            privacyPolicyAccepted: true,
            privacyPolicyAcceptedAt: cloudData.privacyPolicyAcceptedAt,
            userAccount: prev.userAccount ? {
              ...prev.userAccount,
              privacyPolicyAccepted: true,
              privacyPolicyAcceptedAt: cloudData.privacyPolicyAcceptedAt,
            } : undefined,
          }));
          setActiveView('dashboard');
        } else {
          setIsPrivacyModalOpen(true);
        }
      }).catch(() => {
        setIsPrivacyModalOpen(true);
      });
    }

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
      const myId = state.userAccount?.konanId || state.konanId;
      const myEmail = state.userAccount?.email;

      if (planId === 'free') {
        deregisterPlusUser(myId);
        deregisterPlusUser(myEmail);

        const updated: AppState = {
          ...state,
          planTier: 'free',
          isGroupGuest: false,
          userAccount: state.userAccount ? {
            ...state.userAccount,
            planTier: 'free',
            isGroupGuest: false,
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
        deregisterPlusUser(myId);
        deregisterPlusUser(myEmail);

        const updated: AppState = {
          ...state,
          planTier: 'pro',
          isGroupGuest: false,
          userAccount: state.userAccount ? {
            ...state.userAccount,
            planTier: 'pro',
            isGroupGuest: false,
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

        soundFX.playCheckmarkPop();

        showToast('⭐ Félicitations ! Le modèle KONAN PRO est activé ! Synchronisation Google Agenda automatique déclenchée pour tous les jours.');
        if (activeView === 'landing' || activeView === 'auth') {
          setActiveView('dashboard');
        }
      } else if (planId === 'plus') {
        const studentKonanId = state.userAccount?.konanId || state.konanId || generateKonanId(state.userAccount?.googleId || state.userAccount?.email);
        registerPlusUser(studentKonanId, state.userAccount?.email);

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
   * Acceptance of the Privacy Policy & Firebase Cloud Data Security Agreement
   */
  const handleAcceptPrivacyPolicy = () => {
    const timestamp = new Date().toISOString();
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
    showToast(`✨ Bienvenue sur KONAN AI ! Vos données sont sécurisées sur Firebase.`);
    setActiveView('dashboard');
  };

  /**
   * Decline the Privacy Policy:
   * Mandatory gatekeeper requires disconnecting and returning to landing.
   */
  const handleDeclinePrivacyPolicy = async () => {
    setIsPrivacyModalOpen(false);
    await signOutReal();
    setActiveSession(null);
    setState(loadDemoState());
    showToast("⚠️ L'acceptation de la politique de confidentialité est obligatoire pour utiliser KONAN AI.", 6000);
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
      showToast('👑 Mode Démo KONAN PLUS : Accès complet aux 4 comptes, objectifs et musiques alpha !');
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
        studentName={effectiveStudentName}
        academicLevel={state.academicLevel}
        userAccount={state.userAccount}
        planTier={effectivePlanTier}
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
        ownerNotifications={ownerFeedbackNotifications}
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
            currentPlan={effectivePlanTier}
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
              studentName={effectiveStudentName}
              planTier={effectivePlanTier}
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
        onOpenGroupModal={() => setIsPlusGroupModalOpen(true)}
        onOpenGoalModal={() => setIsAcademicGoalModalOpen(true)}
        onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)}
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
        onClose={() => setIsPrivacyModalOpen(false)}
        onAccept={handleAcceptPrivacyPolicy}
        onDecline={handleDeclinePrivacyPolicy}
        isGatekeeper={Boolean(state.userAccount?.isLoggedIn && !state.privacyPolicyAccepted)}
        studentName={effectiveStudentName}
        studentEmail={state.userAccount?.email}
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

      {/* 🚀 Cinematic 3D Entrance Animation */}
      <KonanEntranceSplash 
        onComplete={() => {
          const session = getActiveSession();
          const isConnected = Boolean(session && !session.isDemo && session.uid) 
            || Boolean(state.userAccount?.isLoggedIn && !state.isDemoMode)
            || Boolean(auth?.currentUser);
          
          if (isConnected) {
            setActiveView(prev => (prev === 'landing' || prev === 'auth' ? 'dashboard' : prev));
          }
          if (pendingPrivacyModalRef.current) {
            setIsPrivacyModalOpen(true);
            pendingPrivacyModalRef.current = false;
          }
        }} 
      />

    </div>

  );
}
export default App;
