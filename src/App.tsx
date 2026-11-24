import React, { useState, useEffect, useRef, useMemo, useCallback, Suspense, startTransition } from 'react';
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

import { generateOptimizedStudyPlan, mergePreservingCompletedSessions, synchronizeSessionsWithExamCountdowns, setPlannerWorkload, replanFromToday, sanitizePollutedScheduleState, PLANNER_VERSION } from './services/plannerAlgorithm';
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
import { EMPTY_SUBJECT_KONAN_MESSAGE } from './lib/contentNotices';
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
import { KonanVoiceTestPanel } from './features/notifications/KonanReminderBanner';
import { NotificationActivationCard } from './features/notifications/NotificationActivationCard';
import { syncPushPlan, cancelSessionAlerts, markSessionStarted } from './services/pushQueueService';
import { autoRegisterWebPush, detachDeviceFromAccount } from './services/webPushService';

// Layout
import { Navbar, type OwnerNotificationItem, type PaymentNotice } from './components/layout/Navbar';
import { SettingsModal } from './components/layout/SettingsModal';
import { ProFeatureModal } from './components/common/ProFeatureModal';
import { WaitlistModal } from './components/common/WaitlistModal';
import { GoogleCalendarSyncModal } from './components/common/GoogleCalendarSyncModal';
import { PrivacyPolicyModal } from './components/common/PrivacyPolicyModal';
import { PwaInstallPromptModal } from './components/common/PwaInstallPromptModal';
import { sanitizeUserProfileUpdate } from './lib/subscriptionGuard';
import { UltimateCompletionCelebrationModal } from './components/celebration/UltimateCompletionCelebrationModal';
import { checkAndPerformWeeklyRollover } from './services/weeklyRecapService';
import { awardCompletedSessions, spendEnergy, finishSeries, loseSeries, clearPendingEvents, gamificationOf, energyNow, hasUnlimitedEnergy, lessonXp } from './lib/gamification/gamification';
import { callLeague, type LeagueBoard } from './services/leagueApi';
import {
  clearFriendNotices,
  fetchAvatarState,
  fetchFriends,
  fetchQuestState,
  friendErrorMessage,
  questErrorMessage,
  respondFriendQuest,
  respondFriendRequest,
  type FriendsState,
  type QuestState,
} from './services/friendsApi';
import type { AvatarConfig } from './lib/avatar/avatarCatalog';
import type { EditorTab } from './features/avatar/AvatarEditorModal';
import { ProfilePage, PublicProfileSheet } from './features/profile/ProfilePage';
import { fetchStudyGoal, fetchSubscription, saveStudyGoal as saveStudyGoalApi, subscriptionErrorText, type StudyGoal, type SubscriptionInfo } from './services/subscriptionApi';
import { studyGoalInfo } from './lib/studyGoals';
import { getTutorStatus, type TutorContext, type TutorStatus } from './services/tutorApi';
import { LeaguePage } from './features/gamification/LeagueView';
import { nextNameChangeAt } from '../api/_nameRules.js';
import { leagueAvatarOf } from './lib/gamification/leagueAvatar';
import { getDisplayAvatar } from './lib/avatar';
import { XpBurst } from './features/gamification/XpBurst';
import { ExerciseFab } from './features/gamification/ExerciseFab';
import { TutorFab } from './features/tutor/TutorFab';
import { SeriesErrorBoundary } from './features/gamification/SeriesErrorBoundary';
import { SuperProActivationModal } from './components/pro/SuperProActivationModal';
import { KonanPlusActivationModal } from './components/plus/KonanPlusActivationModal';
import { KonanPlusGroupModal } from './components/plus/KonanPlusGroupModal';


// Views
// Le tableau de bord est chargé tout de suite ; les autres pages se chargent à la demande
// (l'appli démarre ainsi avec ~1 Mo au lieu de ~10 Mo de code). Les cours guidés (≈ 7 Mo)
// ne sont téléchargés qu'à l'ouverture d'une séance.
import { DashboardOverview } from './features/dashboard/DashboardOverview';
import { DuolingoOnboarding } from './features/onboarding/DuolingoOnboarding'; // premier écran de tous : chargé tout de suite
import { ViewLoader, ViewErrorBoundary, lazyView, prefetchViews } from './components/common/ViewLoader';
import { tryResolveGradeLevel, canonicalGradeLevel, shouldLaunchInteractiveTutor, matchSubjectToStemCurriculum, studentClassLabel } from './lib/curriculum/curriculumMatcher';
import { isExamPrepOpenFor } from './lib/featureFlags';
import { normalizeCountry } from './lib/country';
import { setCurriculumCountry } from './lib/curriculum/subjectVisibility';
import { PAYMENTS_OPEN, PRO_NO_COURSES_NOTICE } from './lib/subscriptionPlans';
import { gradeHasCourses, gradeInLeague } from './lib/gamification/leagueGrades';
import { clearAdminSession } from './lib/adminAuth';
import { isLocalAdminEnvironment } from './lib/adminAccess';

const loadAuthPage = () => import('./features/auth/AuthPage').then(m => m.AuthPage);
const loadPdfUploadView = () => import('./features/schedule/PdfUploadView').then(m => m.PdfUploadView);
const loadScheduleManager = () => import('./features/schedule/ScheduleManager').then(m => m.ScheduleManager);
const loadSubjectManager = () => import('./features/subjects/SubjectManager').then(m => m.SubjectManager);
const loadPlannerView = () => import('./features/planner/PlannerView').then(m => m.PlannerView);
const loadAnalyticsDashboard = () => import('./features/analytics/AnalyticsDashboard').then(m => m.AnalyticsDashboard);
const loadFocusMode = () => import('./features/focus/FocusMode').then(m => m.FocusMode);
const loadMiniGamesHubView = () => import('./features/gamification/MiniGamesHubView').then((m) => m.MiniGamesHubView);
const MiniGamesHubView = lazyView(loadMiniGamesHubView);
const AvatarEditorModal = lazyView(() => import('./features/avatar/AvatarEditorModal').then((m) => m.AvatarEditorModal));
const SubscriptionView = lazyView(() => import('./features/pro/SubscriptionView').then((m) => m.SubscriptionView));
const TutorChat = lazyView(() => import('./features/tutor/TutorChat').then((m) => m.TutorChat));
const PlansSheet = lazyView(() => import('./features/pro/PlansSheet').then((m) => m.PlansSheet));
const HomeworkPhotoView = lazyView(() => import('./features/plus/HomeworkPhotoView').then((m) => m.HomeworkPhotoView));
const StudyGoalSheet = lazyView(() => import('./features/plus/StudyGoalSheet').then((m) => m.StudyGoalSheet));
const AuthPage = lazyView(loadAuthPage);
const PdfUploadView = lazyView(loadPdfUploadView);
const ScheduleManager = lazyView(loadScheduleManager);
const SubjectManager = lazyView(loadSubjectManager);
const PlannerView = lazyView(loadPlannerView);
const AnalyticsDashboard = lazyView(loadAnalyticsDashboard);
const FocusMode = lazyView(loadFocusMode);
const PresetModal = lazyView(() => import('./features/onboarding/PresetModal').then(m => m.PresetModal));
const ProWizardView = lazyView(() => import('./features/pro/ProWizardView').then(m => m.ProWizardView));
const AdminDashboard = lazyView(() => import('./features/admin/AdminDashboard').then(m => m.AdminDashboard));
const InteractiveTutorView = lazyView(() => import('./features/tutor/InteractiveTutorView').then(m => m.InteractiveTutorView));
const ExamQcmView = lazyView(() => import('./features/exam/ExamQcmView').then(m => m.ExamQcmView));
const ExamSujetView = lazyView(() => import('./features/exam/ExamSujetView').then(m => m.ExamSujetView));
import type { StemSubjectId, CurriculumGradeLevel } from './lib/curriculum/types';
import { formatExactDurationFrench } from './lib/exam/examPrepRules';

export function App() {
  const [state, setState] = useState<AppState>(() => loadAppState());

  // Règle absolue : L'utilisateur arrive TOUJOURS sur l'interface d'accueil (landing) en tant que visiteur non connecté.
  // Jamais de compte connecté d'office, jamais de saut instantané vers le tableau de bord.
  const [activeView, setActiveViewState] = useState<ActiveAppView>('landing');
  // Vrai tant qu'on ne sait pas encore si l'élève est déjà connecté (Firebase restaure la session)
  const [authPending, setAuthPending] = useState<boolean>(true);
  // Changement de page en « transition » : la page actuelle reste affichée (avec ses animations)
  // jusqu'à ce que la suivante soit prête, sans écran de chargement intermédiaire.
  const setActiveView = useCallback((view: ActiveAppView) => {
    startTransition(() => setActiveViewState(view));
  }, []);
  const [focusSession, setFocusSession] = useState<StudySession | null>(null);
  const [activeTutorSession, setActiveTutorSession] = useState<{
    subjectTitle: string;
    stemSubjectId: StemSubjectId;
    gradeLevel: CurriculumGradeLevel;
    studySessionId?: string;
    durationMinutes?: number;
    pacingMethod?: string;
  } | null>(null);
  // Séance de préparation au devoir : 30 questions ou sujet complet de 2 h
  const [activeExamSession, setActiveExamSession] = useState<{
    mode: 'qcm30' | 'sujet2h';
    session: StudySession;
    subjectName: string;
    stemSubjectId: StemSubjectId;
    gradeLevel: CurriculumGradeLevel;
  } | null>(null);
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
  // Page Profil (2026-11-17, comme Duolingo) et fiche d'un élève (ligue, amis)
  const [profileScreen, setProfileScreen] = useState<null | 'menu' | 'friends' | 'privacy'>(null);
  const [playerCardId, setPlayerCardId] = useState<string | null>(null);
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
  const pendingProWizardRef = useRef<boolean>(false);

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
        }).catch(() => { });
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
            }).catch(() => { });
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
  // Abonnement payé : le SERVEUR dit si l'élève est Pro (paiement Wave / Orange Money). Tant que le paiement
  // n'est pas activé sur le serveur (KONAN_PAYMENTS), rien ne change : formule enregistrée dans l'application.
  const [subscriptionInfo, setSubscriptionInfo] = useState<SubscriptionInfo | null>(null);
  const paidMode = Boolean(subscriptionInfo?.config.enabled && subscriptionInfo.status);
  const serverTier: PlanTier | null = paidMode ? (subscriptionInfo!.status!.tier as PlanTier) : null;
  // Tous les pays ont accès à KONAN, Pro compris (choix du fondateur, 2026-11-22 au soir) : seule différence,
  // pas d'Histoire-Géographie du lycée hors Côte d'Ivoire (voir setCurriculumCountry plus bas).
  const effectivePlanTier = useMemo<PlanTier>(() => {
    if (serverTier) return serverTier;
    return state.planTier || state.userAccount?.planTier || 'free';
  }, [serverTier, state.planTier, state.userAccount?.planTier]);

  // Unified display name
  const effectiveStudentName = (state.userAccount?.isLoggedIn && state.userAccount?.name)
    ? state.userAccount.name
    : (state.studentName || 'Étudiant');
  // Vraie classe de l'élève (choisie à l'inscription), jamais la valeur par défaut « Licence Universitaire »
  const isDefaultLevel = /^licence universitaire$/i.test(String(state.academicLevel || '').trim());
  // UNE seule source pour la classe, partout (planning, cours, devoirs, ligue) : la classe des préférences
  // est celle qui suit les changements (import d'emploi du temps, autre appareil) ; le compte en garde une
  // copie qui peut être ancienne. Avant, certains écrans lisaient l'une et d'autres l'autre.
  const studentGradeRaw = state.preferences?.gradeLevel || state.userAccount?.gradeLevel || (isDefaultLevel ? undefined : state.academicLevel);
  // Pays de l'élève (lib/country). Sans pays = ancien compte = Côte d'Ivoire.
  const studentCountry = normalizeCountry(state.preferences?.country || state.userAccount?.country) || undefined;
  // Hors Côte d'Ivoire : pas d'Histoire-Géographie du lycée (réglage du catalogue des cours, avant tout affichage)
  setCurriculumCountry(studentCountry);
  // KONAN Pro est vendu à TOUTES les classes et dans tous les pays (choix du fondateur, 2026-11-22 au soir).
  // Les classes qui n'ont pas encore les cours guidés ni les devoirs sont prévenues AVANT de payer
  // (PRO_NO_COURSES_NOTICE + case « J'ai compris »). On ne parle jamais du « programme ivoirien » à l'élève.
  const proSellableForClass = true;
  const classHasCourses = isExamPrepOpenFor(studentGradeRaw, studentCountry);
  const proNoCoursesNotice = !classHasCourses ? PRO_NO_COURSES_NOTICE : undefined;
  const PRO_NOT_FOR_CLASS_TEXT = 'KONAN Pro n’est pas encore disponible pour toi.';
  const effectiveClassLabel = studentClassLabel(
    studentGradeRaw,
    isDefaultLevel ? undefined : state.academicLevel,
  ) || '';
  // Ancien compte dont seule la fiche du compte connaît la classe : on la recopie dans les préférences,
  // que lit le planificateur (sinon il ne voyait pas la classe et ne préparait aucun devoir)
  useEffect(() => {
    if (state.preferences?.gradeLevel || !state.userAccount?.gradeLevel) return;
    setState((prev) => {
      if (prev.preferences?.gradeLevel || !prev.userAccount?.gradeLevel) return prev;
      const next = { ...prev, preferences: { ...prev.preferences, gradeLevel: prev.userAccount.gradeLevel } };
      if (next.userAccount?.googleId && !next.isDemoMode) saveUserState(next.userAccount.googleId, next);
      return next;
    });
  }, [state.preferences?.gradeLevel, state.userAccount?.gradeLevel]);

  // Copie du cloud arrivée ? (séances faites sur un AUTRE appareil). Tant qu'elle n'est pas là, on ne compte
  // ni la réputation ni le changement de semaine : sinon des séances faites ailleurs comptaient « manquées »
  // (bug du 2026-11-16 : réputation en chute à la fin de la semaine alors que tout était fait).
  const [cloudReady, setCloudReady] = useState(false);
  // Pas de réponse du cloud après 3 essais (hors ligne) : la nouvelle semaine s'affiche quand même,
  // mais la réputation n'est pas touchée (elle sera comptée à la prochaine ouverture avec Internet)
  const [cloudGaveUp, setCloudGaveUp] = useState(false);
  const cloudReadyRef = useRef(false);
  cloudReadyRef.current = cloudReady;
  const latestStateRef = useRef(state);
  latestStateRef.current = state;
  const needsCloud = Boolean(state.userAccount?.isLoggedIn && !state.isDemoMode);

  // PLANNING ADAPTÉ À LA PROGRESSION (2026-11-16) : le planning sait, pour chaque matière avec des cours KONAN,
  // combien de mini-leçons il reste. Matière terminée → révisions espacées (selon la méthode) au lieu de tous
  // les jours. Calculé au démarrage (progression du compte comprise), puis après chaque séance terminée.
  // Quand une matière vient d'être terminée, ou que le planning a été fait avec d'anciennes règles,
  // la semaine est réorganisée à partir d'aujourd'hui (ce qui est fait reste fait).
  const [workloadReady, setWorkloadReady] = useState(false);
  const plannerUid = state.userAccount?.googleId || '';
  const completedCount = state.studySessions.filter((s) => s.completed).length;
  const subjectsKey = state.subjects.map((s) => `${s.id}:${s.name}`).join('|');
  const tierForPlanRef = useRef<PlanTier>('free');
  tierForPlanRef.current = effectivePlanTier;
  useEffect(() => {
    if (needsCloud && !cloudReady && !cloudGaveUp) return;
    if (!plannerUid) { setWorkloadReady(true); return; }
    let cancelled = false;
    (async () => {
      try {
        const { pullLearning } = await import('./lib/curriculum/learningCloudSync');
        if (!workloadReady) await pullLearning(plannerUid).catch(() => false); // progression des autres appareils
        const { computeSubjectWorkloads, workloadSignature } = await import('./lib/curriculum/subjectWorkload');
        const st = latestStateRef.current;
        const map = await computeSubjectWorkloads(plannerUid, studentGradeRaw, st.subjects);
        if (cancelled) return;
        setPlannerWorkload(map);
        const sigKey = `konan_planner_sig_${plannerUid}`;
        const verKey = `konan_planner_version_${plannerUid}`;
        let prevSig = '';
        let prevVer = 0;
        try { prevSig = localStorage.getItem(sigKey) || ''; prevVer = Number(localStorage.getItem(verKey) || 0); } catch { /* rien */ }
        const sig = workloadSignature(map);
        // Une matière vient de passer de « leçons à faire » à « tout est fait » ?
        const before = new Map(prevSig.split('|').filter(Boolean).map((x) => { const i = x.lastIndexOf(':'); return [x.slice(0, i), x.slice(i + 1)] as const; }));
        const justFinished = Object.keys(map).filter((id) => map[id].newLessonsLeft === 0 && before.get(id) === 'new');
        const outdatedPlan = prevVer < PLANNER_VERSION;
        const pollutionCheck = sanitizePollutedScheduleState(st.subjects, st.classSlots, st.studySessions);
        try { localStorage.setItem(sigKey, sig); localStorage.setItem(verKey, String(PLANNER_VERSION)); } catch { /* rien */ }
        if ((outdatedPlan || justFinished.length || pollutionCheck.hadPollution) && st.subjects.length && st.classSlots.length && st.currentWeekMonday) {
          setState((prev) => {
            const clean = sanitizePollutedScheduleState(prev.subjects, prev.classSlots, prev.studySessions);
            const fresh = generateOptimizedStudyPlan(clean.subjects, clean.classSlots, prev.preferences, tierForPlanRef.current);
            const next: AppState = {
              ...prev,
              subjects: clean.subjects,
              classSlots: clean.classSlots,
              studySessions: replanFromToday(clean.studySessions, fresh),
            };
            if (next.userAccount?.googleId && !next.isDemoMode) saveUserState(next.userAccount.googleId, next);
            return next;
          });
          // Ancien planning refait en silence ; matière terminée : on prévient l'élève
          const names = justFinished.map((id) => st.subjects.find((s) => s.id === id)?.name).filter(Boolean);
          if (names.length) showToast(`Bravo, tu as terminé les mini-leçons de ${names.join(', ')} ! J’ai réorganisé ta semaine : place aux révisions espacées.`, 7000);
        }
      } catch (err) {
        console.warn('Progression pour le planning indisponible :', err);
      } finally {
        if (!cancelled) setWorkloadReady(true);
      }
    })();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plannerUid, cloudReady, cloudGaveUp, needsCloud, completedCount, subjectsKey, studentGradeRaw]);

  // Bascule automatique de semaine (rollover d'agenda) sans pop-up de bilan
  useEffect(() => {
    if (needsCloud && !cloudReady && !cloudGaveUp) return;
    // La nouvelle semaine est faite avec la progression de l'élève (sinon une matière terminée revenait tous les jours)
    if (!workloadReady) return;
    const rollover = checkAndPerformWeeklyRollover(state);
    if (rollover.hasRollover) {
      const cleanNextState = { ...rollover.nextState, pendingWeeklyRecap: null };
      setState(cleanNextState);
      saveAppState(cleanNextState);
      if (state.userAccount?.googleId) {
        saveUserState(state.userAccount.googleId, cleanNextState);
      }
    }
  }, [state.studySessions.length, state.currentWeekMonday, cloudReady, cloudGaveUp, needsCloud, workloadReady]);

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
  const _triggerAutoGoogleCalendarSync = (
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
  void _triggerAutoGoogleCalendarSync;

  const fileInputRef = useRef<HTMLInputElement>(null);
  const lastRescheduledSignature = useRef<string>('');
  const hasGreetedAuthRef = useRef<string>('');
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Remonter automatiquement en haut de la page à chaque changement de vue
  useEffect(() => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    } catch {
      // Ignore
    }
  }, [activeView]);

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

        // Préparation aux devoirs (Pro, 2nde A / 2nde C) : chaque jour, la séance prend le bon type
        // (30 questions, sujet de 2 h, chrono 75 min) selon le nombre de jours avant l'épreuve
        // Formule réelle : celle du serveur quand le paiement est ouvert (jamais un « pro » resté dans l'appli)
        const tierNow = paidModeRef.current.serverTier || prev.planTier;
        const isProTier = tierNow === 'pro' || tierNow === 'plus';
        const finalSessions = synchronizeSessionsWithExamCountdowns(
          updatedSessions,
          validSubjects,
          isProTier ? (prev.preferences?.gradeLevel || prev.preferences?.academicLevel || prev.academicLevel) : null,
          prev.preferences?.country || prev.userAccount?.country
        );
        const hasSessionDurationChange = finalSessions.some(
          (s, idx) => s.durationMinutes !== baseSessions[idx]?.durationMinutes || s.endTime !== baseSessions[idx]?.endTime
            || s.examPrepMode !== baseSessions[idx]?.examPrepMode || s.title !== baseSessions[idx]?.title
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
    // Relancé dès que le planning change (ex. données rechargées depuis le cloud), pas seulement toutes les 30 s
  }, [state.studySessions, state.classSlots, activeView]);

  // =========================================================================
  // NOTIFICATIONS DE RÉVISION : pour TOUS les élèves connectés (Gratuit, Pro et Plus).
  // Activées d'office, aucun réglage à aller chercher :
  // 1) abonnement du téléphone (permission demandée au premier toucher si elle ne l'a jamais été) ;
  // 2) dépôt des alertes des 7 prochains jours dans push_queue, une fois l'appareil abonné.
  // =========================================================================
  useEffect(() => {
    const effectivePlan = state.userAccount?.planTier || state.planTier || 'free';
    const uid = state.userAccount?.googleId || state.userAccount?.email;
    const email = state.userAccount?.email;

    if (state.userAccount?.isLoggedIn && uid && !state.isDemoMode) {
      const planInput = {
        studySessions: state.studySessions,
        subjects: state.subjects,
        classSlots: state.classSlots,
        preferences: state.preferences,
        cycleCompletedDate: state.cycleCompletedDate,
      };
      const syncAlerts = () => {
        // Identifiant Firebase réel (les règles Firestore l'exigent pour écrire dans push_queue)
        const authUid = auth?.currentUser?.uid || (uid.includes('@') ? '' : uid);
        if (!authUid) return;
        syncPushPlan(authUid, planInput).catch(() => { });
      };
      const register = () => {
        autoRegisterWebPush(effectivePlan, uid, email, syncAlerts).catch(() => { });
      };
      const timer = setTimeout(register, 1500); // regroupe les changements rapprochés du planning
      // Tant que l'appareil n'est pas enregistré, on retente au retour dans l'appli et toutes les 2 minutes
      const retry = setInterval(register, 2 * 60 * 1000);
      const onVisible = () => { if (document.visibilityState === 'visible') register(); };
      document.addEventListener('visibilitychange', onVisible);
      return () => {
        clearTimeout(timer);
        clearInterval(retry);
        document.removeEventListener('visibilitychange', onVisible);
      };
    }
  }, [
    state.userAccount?.planTier,
    state.planTier,
    state.userAccount?.googleId,
    state.userAccount?.email,
    state.userAccount?.isLoggedIn,
    state.isDemoMode,
    state.studySessions,
    state.subjects,
    state.classSlots,
    state.preferences,
    state.cycleCompletedDate,
  ]);

  // =========================================================================
  // GAMIFICATION : XP à chaque séance terminée (réputation supprimée le 2026-11-22)
  // =========================================================================
  const [xpBurst, setXpBurst] = useState<{ amount: number; id: number } | null>(null);
  const closeXpBurst = useCallback(() => setXpBurst(null), []);
  const gamificationEnabled = Boolean(state.userAccount?.isLoggedIn && !state.isDemoMode);

  // Séance terminée (tuteur, chronomètre, devoir ou validation) : XP gagnés, une seule fois par séance
  useEffect(() => {
    if (!gamificationEnabled) return;
    const preview = awardCompletedSessions(state.gamification, state.studySessions);
    // Séance comptée même à 0 XP (trop d'erreurs) : on l'enregistre pour la ligue, sans animation
    if (!preview.sessions.length) return;
    setState((prev) => {
      const r = awardCompletedSessions(prev.gamification, prev.studySessions);
      if (!r.sessions.length) return prev;
      const next = { ...prev, gamification: r.gamification };
      if (next.userAccount?.googleId) saveUserState(next.userAccount.googleId, next);
      return next;
    });
    if (preview.gained > 0) setXpBurst({ amount: preview.gained, id: Date.now() });
  }, [state.studySessions, gamificationEnabled]);

  // Icône d'exercices (étape 2) : séries de 10 QCM, énergie ⚡ pour les comptes Gratuit
  const [isExerciseOpen, setIsExerciseOpen] = useState(false);
  const exercisePlan = effectivePlanTier;
  const updateGamification = (compute: (prev: AppState) => AppState['gamification'] | null) => {
    setState((prev) => {
      const g = compute(prev);
      if (!g) return prev;
      const next = { ...prev, gamification: g };
      if (next.userAccount?.googleId && !next.isDemoMode) saveUserState(next.userAccount.googleId, next);
      return next;
    });
  };
  const handleSpendEnergy = (): boolean => {
    if (!spendEnergy(state.gamification, exercisePlan)) return false;
    updateGamification((prev) => spendEnergy(prev.gamification, exercisePlan));
    return true;
  };
  const handleFinishSeries = (mistakes: number, startedAt: Date, total: number): number => {
    const now = new Date();
    const preview = finishSeries(state.gamification, mistakes, startedAt, now, total);
    updateGamification((prev) => finishSeries(prev.gamification, mistakes, startedAt, now, total).gamification);
    return preview.gained;
  };
  const handleLoseSeries = useCallback((reason: string) => {
    updateGamification((prev) => loseSeries(prev.gamification, reason));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Ligue (étape 3) : les gains d'XP sont envoyés au serveur, qui les vérifie et renvoie le classement
  const [leagueBoard, setLeagueBoard] = useState<LeagueBoard | null>(null);
  const [leagueOffline, setLeagueOffline] = useState(false);
  const [leagueError, setLeagueError] = useState('');
  const [leagueResultSeen, setLeagueResultSeen] = useState<string>(() => {
    try { return localStorage.getItem('konan_league_result_seen') || ''; } catch { return ''; }
  });
  const gamificationRef = useRef(state.gamification);
  gamificationRef.current = state.gamification;
  const leagueBusy = useRef(false);
  const leagueGrade = tryResolveGradeLevel(studentGradeRaw);
  // Cours guidés et entraînement : Seconde à Terminale ; ligue : ces classes plus LMD et BTS (au chronomètre)
  const gradeHasGuidedCourses = gradeHasCourses(leagueGrade);
  const gradeIsInLeague = gradeInLeague(leagueGrade);
  const leagueAvatarSrc = getDisplayAvatar(state.userAccount);
  const syncLeague = useCallback(async () => {
    if (!gamificationEnabled || leagueBusy.current || !auth?.currentUser) return;
    leagueBusy.current = true;
    try {
      const g = gamificationOf(gamificationRef.current);
      const r = await callLeague({
        events: g.pendingEvents || [],
        displayName: effectiveStudentName,
        classLabel: effectiveClassLabel,
        // Classe reconnue (seconde_c, terminale_d…) : sans cours (LMD, BTS), pas de ligue
        gradeLevel: leagueGrade || '',
        avatar: await leagueAvatarOf(leagueAvatarSrc),
      });
      setLeagueOffline(!r.success);
      setLeagueError(r.success ? '' : String(r.error || ''));
      if (!r.success) return;
      if (r.board) setLeagueBoard(r.board);
      if (typeof r.gold === 'number') setUserGold(r.gold);
      // Gains refusés par le serveur : avant, ils disparaissaient sans un mot (« mes XP ne comptent pas »)
      const refused = r.rejected || [];
      if (refused.length) {
        console.warn('[ligue] gains refusés :', refused);
        showToast(`${refused.length > 1 ? `${refused.length} gains d’XP n’ont` : 'Un gain d’XP n’a'} pas été compté${refused.length > 1 ? 's' : ''} dans la ligue (${refused[0].reason}).`, 7000);
      }
      const done = [...(r.accepted || []), ...refused.map((x) => x.id)];
      if (done.length) updateGamification((prev) => clearPendingEvents(prev.gamification, done));
      if ((r.accepted || []).length > 0) reloadQuestsRef.current();
    } finally {
      leagueBusy.current = false;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gamificationEnabled, effectiveStudentName, effectiveClassLabel, leagueGrade, leagueAvatarSrc]);

  // À l'ouverture, au retour dans l'appli, toutes les 2 minutes et après chaque nouveau gain d'XP
  const pendingCount = state.gamification?.pendingEvents?.length || 0;
  useEffect(() => {
    if (!gamificationEnabled) return;
    const first = setTimeout(syncLeague, pendingCount ? 1500 : 3000);
    const every = setInterval(syncLeague, 2 * 60 * 1000);
    const onVisible = () => { if (document.visibilityState === 'visible') syncLeague(); };
    document.addEventListener('visibilitychange', onVisible);
    return () => {
      clearTimeout(first);
      clearInterval(every);
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, [gamificationEnabled, syncLeague, pendingCount]);

  // Abonnement payé (étape 4) : voir subscriptionInfo / paidMode / serverTier plus haut.
  const [subscriptionLoading, setSubscriptionLoading] = useState(false);
  const [subscriptionError, setSubscriptionError] = useState('');
  const [isSubscriptionOpen, setIsSubscriptionOpen] = useState(false);
  const [isPlansOpen, setIsPlansOpen] = useState(false);
  const [subscriptionPeriod, setSubscriptionPeriod] = useState<'mois' | 'semestre'>('mois');
  const subscriptionAccount = state.userAccount?.isLoggedIn && !state.isDemoMode
    ? (state.userAccount.googleId || auth?.currentUser?.uid || '')
    : '';

  // Mode « Je ne comprends pas » (professeur particulier, KONAN Pro payant). Le serveur dit s'il est allumé
  // (KONAN_TUTOR=on), si l'élève y a droit et combien de messages il lui reste aujourd'hui.
  const [tutorStatus, setTutorStatus] = useState<TutorStatus | null>(null);
  const [tutorOpen, setTutorOpen] = useState<{ context?: TutorContext } | null>(null);
  const subscriptionTierKey = `${subscriptionInfo?.status?.tier || ''}|${subscriptionInfo?.status?.endsAt || ''}`;
  useEffect(() => {
    if (!subscriptionAccount) { setTutorStatus(null); return; }
    let alive = true;
    getTutorStatus().then((s) => { if (alive) setTutorStatus(s); });
    return () => { alive = false; };
  }, [subscriptionAccount, subscriptionTierKey]);
  // Réservé aux abonnés KONAN Pro (rappel du fondateur, 2026-11-23) : un élève Gratuit ne voit ni la peluche,
  // ni les boutons « Je ne comprends pas » (le serveur refuse aussi tout élève sans abonnement payé).
  const tutorAvailable = Boolean(tutorStatus?.enabled && tutorStatus.paid);

  // Amis (2026-11-17) : état complet (amis, demandes reçues/envoyées, notifications cloche, confidentialité)
  const [friendsData, setFriendsData] = useState<FriendsState | null>(null);
  const [friendsError, setFriendsError] = useState('');
  // Or (Gold), Quêtes d'XP en duo & Avatars animés personnalisables
  const [questState, setQuestState] = useState<QuestState | null>(null);
  const [_questLoading, setQuestLoading] = useState(false);
  const [userGold, setUserGold] = useState<number>(() => (typeof state.gold === 'number' && Number.isFinite(state.gold) ? state.gold : 100));
  const [avatarConfig, setAvatarConfig] = useState<AvatarConfig | null>(() => state.avatarConfig || null);
  const [unlockedItems, setUnlockedItems] = useState<string[]>(() => (Array.isArray(state.unlockedItems) ? state.unlockedItems : []));
  const [hasCustomizedAvatar, setHasCustomizedAvatar] = useState<boolean>(() => Boolean(state.avatarConfig));
  const [serverAvatarIsPro, setServerAvatarIsPro] = useState<boolean | null>(null);
  const [avatarEditorTab, setAvatarEditorTab] = useState<EditorTab | null>(null);
  const effectiveAvatarIsPro = serverAvatarIsPro !== null ? serverAvatarIsPro : (effectivePlanTier === 'pro' || effectivePlanTier === 'plus');
  const displayAvatarConfig = useMemo<AvatarConfig | null>(() => {
    if (!avatarConfig) return null;
    if (avatarConfig.outfit === 'outfit_pro_gold' && !effectiveAvatarIsPro) {
      return { ...avatarConfig, outfit: 'outfit_tee_blue' };
    }
    return avatarConfig;
  }, [avatarConfig, effectiveAvatarIsPro]);

  useEffect(() => {
    if (!questState && typeof state.gold === 'number' && Number.isFinite(state.gold)) {
      setUserGold(state.gold);
    }
  }, [state.gold, questState]);

  const reloadAvatar = useCallback(async () => {
    if (!subscriptionAccount || !auth?.currentUser) return;
    const r = await fetchAvatarState();
    if (r.ok) {
      setAvatarConfig(r.data.avatarConfig || null);
      setHasCustomizedAvatar(Boolean(r.data.hasCustomized && r.data.avatarConfig));
      setUnlockedItems(Array.isArray(r.data.unlockedItems) ? r.data.unlockedItems : []);
      setServerAvatarIsPro(Boolean(r.data.isPro));
      if (typeof r.data.gold === 'number' && Number.isFinite(r.data.gold)) {
        setUserGold(r.data.gold);
      }
    }
  }, [subscriptionAccount]);

  const openAvatarEditor = useCallback((tab: EditorTab = 'skin') => {
    setAvatarEditorTab(tab);
    if (subscriptionAccount && auth?.currentUser) {
      reloadAvatar();
    }
  }, [subscriptionAccount, reloadAvatar]);

  const reloadFriends = useCallback(async () => {
    if (!subscriptionAccount) return;
    const r = await fetchFriends();
    if (r.ok) {
      setFriendsData(r.data);
      setFriendsError('');
    } else if (r.error !== 'UNAUTHORIZED') {
      setFriendsError(friendErrorMessage(r.error));
    }
  }, [subscriptionAccount]);

  const reloadQuests = useCallback(async () => {
    if (!subscriptionAccount) return;
    setQuestLoading(true);
    const r = await fetchQuestState();
    setQuestLoading(false);
    if (r.ok) {
      setQuestState(r.data);
      if (typeof r.data.gold === 'number' && Number.isFinite(r.data.gold)) {
        setUserGold(r.data.gold);
      }
    }
  }, [subscriptionAccount]);
  const reloadQuestsRef = useRef(reloadQuests);
  reloadQuestsRef.current = reloadQuests;
  const handleRefreshLeagueAndQuests = useCallback(() => {
    syncLeague();
    reloadQuests();
  }, [syncLeague, reloadQuests]);

  const handleRespondQuest = useCallback(async (questId: string, accept: boolean) => {
    const r = await respondFriendQuest(questId, accept);
    if (r.ok) {
      await reloadQuests();
      showToast(accept ? 'C’est parti ! Ta quête avec ton ami est lancée pour 6 jours.' : 'Invitation de quête refusée sans pénalité.');
    } else {
      showToast(questErrorMessage(r.error));
    }
  }, [reloadQuests]);

  const handleRespondFriend = useCallback(async (konanId: string, accept: boolean) => {
    const r = await respondFriendRequest(konanId, accept);
    if (r.ok) {
      await reloadFriends();
      showToast(accept ? 'Demande acceptée : vous êtes maintenant amis !' : 'Demande d’ami refusée.');
    } else {
      showToast(friendErrorMessage(r.error));
    }
  }, [reloadFriends]);

  const handleClearFriendNotices = useCallback(async () => {
    const r = await clearFriendNotices();
    if (r.ok) {
      await reloadFriends();
    }
  }, [reloadFriends]);

  useEffect(() => {
    if (!subscriptionAccount) {
      setFriendsData(null);
      setFriendsError('');
      setQuestState(null);
      setUserGold(100);
      setAvatarConfig(null);
      setUnlockedItems([]);
      setHasCustomizedAvatar(false);
      setServerAvatarIsPro(null);
      return;
    }
    let alive = true;
    const refreshSocial = () => {
      if (!alive) return;
      reloadFriends();
      reloadQuests();
    };
    // Déclenche dès que la session Firebase est restaurée (corrige les délais réseau au démarrage)
    const unsubAuth = auth
      ? auth.onAuthStateChanged((user) => {
          if (user && alive) {
            refreshSocial();
            reloadAvatar();
          }
        })
      : null;
    const first = setTimeout(() => {
      refreshSocial();
      reloadAvatar();
    }, 800);
    const every = setInterval(() => {
      if (document.visibilityState === 'visible') refreshSocial();
    }, 45 * 1000);
    const onVisible = () => { if (document.visibilityState === 'visible') refreshSocial(); };
    window.addEventListener('focus', refreshSocial);
    window.addEventListener('online', refreshSocial);
    document.addEventListener('visibilitychange', onVisible);
    return () => {
      alive = false;
      unsubAuth?.();
      clearTimeout(first);
      clearInterval(every);
      window.removeEventListener('focus', refreshSocial);
      window.removeEventListener('online', refreshSocial);
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, [subscriptionAccount, reloadFriends, reloadQuests, reloadAvatar]);
  // Paiement manuel en vérification, ou paiement SasPay commencé : on revérifie souvent
  const subscriptionPending = Boolean(subscriptionInfo?.status?.pending || subscriptionInfo?.status?.saspayPending);
  // Retour de la page de paiement SasPay (return_url « /?paiement=saspay ») : on ouvre la fiche d'abonnement,
  // dont la lecture fait vérifier le paiement par le serveur auprès de SasPay (Pro seulement si SUCCESS)
  const saspayReturnRef = useRef<boolean>((() => {
    try { return new URLSearchParams(window.location.search).get('paiement') === 'saspay'; } catch { return false; }
  })());
  const refreshSubscription = useCallback(async () => {
    if (!subscriptionAccount || !auth?.currentUser) return;
    setSubscriptionLoading(true);
    const r = await fetchSubscription();
    setSubscriptionLoading(false);
    if (r.success) {
      setSubscriptionInfo(r.info);
      setSubscriptionError('');
    } else {
      setSubscriptionError('error' in r ? r.error : '');
    }
  }, [subscriptionAccount]);
  useEffect(() => {
    if (!subscriptionAccount) {
      setSubscriptionInfo(null);
      return;
    }
    if (saspayReturnRef.current) {
      saspayReturnRef.current = false;
      try {
        const url = new URL(window.location.href);
        url.searchParams.delete('paiement');
        window.history.replaceState(window.history.state, '', url.pathname + url.search + url.hash);
      } catch { /* adresse laissée telle quelle */ }
      setIsSubscriptionOpen(true);
    }
    const first = setTimeout(refreshSubscription, 1500);
    // Paiement en attente : on regarde chaque minute si le paiement a été confirmé (message dans l'onglet notifications)
    const every = setInterval(refreshSubscription, subscriptionPending ? 60 * 1000 : 10 * 60 * 1000);
    const onVisible = () => { if (document.visibilityState === 'visible') refreshSubscription(); };
    document.addEventListener('visibilitychange', onVisible);
    return () => {
      clearTimeout(first);
      clearInterval(every);
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, [subscriptionAccount, refreshSubscription, subscriptionPending]);
  // Onglet des notifications : réponse de l'administrateur à chaque paiement (accepté ou refusé), 30 jours
  const paymentNotices = useMemo<PaymentNotice[]>(() => {
    const st = subscriptionInfo?.status;
    if (!st) return [];
    const limit = Date.now() - 30 * 24 * 3600 * 1000;
    return st.history
      .filter((p) => (p.status === 'confirmed' || p.status === 'rejected') && p.checkedAt && Date.parse(p.checkedAt) > limit)
      .slice(0, 5)
      .map((p) => ({
        id: `pay_${p.id}_${p.status}`,
        status: p.status as 'confirmed' | 'rejected',
        amount: p.amount,
        ref: p.ref,
        at: p.checkedAt as string,
        endsAt: p.status === 'confirmed' ? st.endsAt : null,
        message: p.rejectMessage,
      }));
  }, [subscriptionInfo]);
  // Compte administrateur (autorisation « admin » posée par scripts/set-admin-claim.mjs, connexion Google) :
  // la console s'ouvre aussi EN LIGNE, pour confirmer les paiements depuis le téléphone
  const [isAdminAccount, setIsAdminAccount] = useState(false);
  useEffect(() => {
    let alive = true;
    const user = auth?.currentUser;
    if (!subscriptionAccount || !user) { setIsAdminAccount(false); return; }
    user.getIdTokenResult().then((r) => {
      if (alive) setIsAdminAccount(r.claims?.admin === true && r.signInProvider === 'google.com');
    }).catch(() => { if (alive) setIsAdminAccount(false); });
    return () => { alive = false; };
  }, [subscriptionAccount]);
  const canOpenAdmin = isLocalAdminEnvironment() || isAdminAccount;
  // KONAN Plus (ou compte administrateur : tout est ouvert) : objectif de l'élève, gardé par le serveur
  const plusAccess = effectivePlanTier === 'plus' || isAdminAccount;
  const [studyGoal, setStudyGoal] = useState<StudyGoal | ''>('');
  useEffect(() => {
    if (!plusAccess || !subscriptionAccount) { setStudyGoal(''); return; }
    let alive = true;
    fetchStudyGoal().then((r) => { if (alive && r.success) setStudyGoal(r.goal); }).catch(() => {});
    return () => { alive = false; };
  }, [plusAccess, subscriptionAccount]);
  const paidModeRef = useRef({ paidMode, serverTier });
  paidModeRef.current = { paidMode, serverTier };
  // Quand la formule du SERVEUR change (fin d'abonnement, paiement refusé, paiement accepté), on l'applique
  // UNE fois. Ne dépend PAS de state.planTier : la fusion avec le cloud garde « pro » si une des copies le dit,
  // et réagir à chaque changement faisait une boucle (Gratuit → planning recalculé → Pro → …) qui figeait l'appli.
  // L'affichage, lui, suit toujours le serveur (effectivePlanTier).
  const appliedServerTierRef = useRef('');
  useEffect(() => {
    if (!paidMode || !serverTier || !subscriptionAccount) return;
    const key = `${subscriptionAccount}:${serverTier}`;
    if (appliedServerTierRef.current === key) return;
    appliedServerTierRef.current = key;
    const storeKey = `konan_server_tier_applied_${subscriptionAccount}`;
    let alreadyApplied = false;
    try { alreadyApplied = localStorage.getItem(storeKey) === serverTier; } catch { /* stockage indisponible */ }
    const current = state.planTier || state.userAccount?.planTier || 'free';
    if (current === serverTier) {
      try { localStorage.setItem(storeKey, serverTier); } catch { /* sans effet */ }
      return;
    }
    if (serverTier === 'free' && !alreadyApplied) {
      // Première fois : on retire proprement les avantages Pro (méthodes Pro, devoirs) et on recalcule le planning
      const { nextState } = transitionUserState(state, 'free');
      nextState.planTier = 'free';
      if (nextState.userAccount) {
        nextState.userAccount.planTier = 'free';
        nextState.userAccount.isGroupGuest = false;
      }
      nextState.isGroupGuest = false;
      setState(nextState);
      if (nextState.userAccount?.googleId && !nextState.isDemoMode) saveUserState(nextState.userAccount.googleId, nextState);
      const rejected = subscriptionInfo?.status?.lastRejected;
      showToast(rejected && subscriptionInfo?.status?.history[0]?.id === rejected.id
        ? 'Ton paiement n’a pas été validé : KONAN Pro est retiré de ton compte.'
        : 'KONAN Pro n’est plus actif sur ton compte (fin de l’offre gratuite ou de ton abonnement). Abonne-toi (2 500 F par mois) pour retrouver tes avantages Pro.');
    } else {
      // Déjà appliqué, ou passage à Pro : simple mise à jour de la formule, sans recalcul du planning
      setState((prev) => {
        if ((prev.planTier || 'free') === serverTier) return prev;
        const next: AppState = {
          ...prev,
          planTier: serverTier,
          userAccount: prev.userAccount ? { ...prev.userAccount, planTier: serverTier } : undefined,
        };
        if (next.userAccount?.googleId && !next.isDemoMode) saveUserState(next.userAccount.googleId, next);
        return next;
      });
    }
    try { localStorage.setItem(storeKey, serverTier); } catch { /* sans effet */ }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paidMode, serverTier, subscriptionAccount]);

  // Fluidité : dès l'ouverture, on précharge en silence toutes les pages courantes (≈ 300 Ko au total),
  // pour qu'elles s'ouvrent instantanément. Seuls les cours guidés (trop lourds) attendent la séance.
  useEffect(() => {
    prefetchViews([
      loadAuthPage, loadPlannerView, loadScheduleManager,
      loadSubjectManager, loadFocusMode, loadAnalyticsDashboard, loadPdfUploadView,
    ]);
  }, []);

  // Dépôt immédiat des alertes de la semaine (après activation des notifications par l'élève)
  const syncAlertsNow = useCallback(() => {
    const authUid = auth?.currentUser?.uid;
    if (!authUid || state.isDemoMode) return;
    syncPushPlan(authUid, {
      studySessions: state.studySessions,
      subjects: state.subjects,
      classSlots: state.classSlots,
      preferences: state.preferences,
      cycleCompletedDate: state.cycleCompletedDate,
    }).catch(() => { });
  }, [state.isDemoMode, state.studySessions, state.subjects, state.classSlots, state.preferences, state.cycleCompletedDate]);

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
      } catch (err: any) {
        console.warn('Vérification redirection Google mobile:', err?.code || err);
        // Compte Google inexistant (connexion) ou déjà inscrit (inscription) : on l'explique à l'élève
        if (err?.code === 'auth/user-not-found' || err?.code === 'auth/email-already-in-use') {
          showToast(err.message, 8000);
        }
      }
    };

    checkMobileRedirectAuth();

    // Écoute des changements d'état d'authentification Firebase :
    const unsubscribeAuth = onFirebaseAuthStateChange(async (firebaseUser) => {
      if (!isMounted) return;
      // Élève déjà connecté : il ira directement au tableau de bord (on garde l'accueil caché jusque-là).
      // Une fois l'accueil affiché, on ne le cache plus jamais (sinon un nouveau perdrait son parcours).
      setAuthPending((pending) => pending && Boolean(firebaseUser));
      if (sessionStorage.getItem('konan_onboarding_in_progress') === 'true') {
        setAuthPending(false);
        return;
      }
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
      } else if (firebaseUser && !cloudReadyRef.current && latestStateRef.current.userAccount?.googleId === firebaseUser.uid) {
        // Élève déjà connecté qui rouvre KONAN : on récupère d'abord la copie du cloud (séances faites sur un
        // autre appareil), PUIS la réputation et le changement de semaine sont comptés.
        // Réseau coupé ou trop lent : on réessaie (20 s, puis 1 min) ; sans réponse, rien n'est compté
        // pendant cette ouverture (les jours seront comptés à la prochaine, rien n'est perdu).
        const uid = firebaseUser.uid;
        const syncFromCloud = (attempt: number) => {
          const report: { cloudReached?: boolean } = {};
          fetchAndMergeCloudState(uid, latestStateRef.current, report)
            .then((merged) => {
              if (!isMounted || cloudReadyRef.current) return;
              if (!report.cloudReached) {
                if (attempt < 2) setTimeout(() => syncFromCloud(attempt + 1), attempt === 0 ? 20_000 : 60_000);
                else setCloudGaveUp(true);
                return;
              }
              setState((prev) => (prev.userAccount?.googleId === uid ? merged : prev));
              setCloudReady(true);
            })
            .catch((err) => console.warn('Synchronisation cloud au démarrage impossible :', err));
        };
        syncFromCloud(0);
      }
      setAuthPending(false);
    });
    // Au plus 4 s d'attente : sans réponse de Firebase (hors ligne…), on affiche l'accueil
    const authTimeout = setTimeout(() => setAuthPending(false), 4000);

    return () => {
      isMounted = false;
      clearTimeout(authTimeout);
      unsubscribeAuth();
    };
  }, []);

  // Écran d'ouverture « KONAN » (index.html) : retiré dès que l'accueil ou le tableau de bord est prêt
  useEffect(() => {
    if (!authPending || activeView !== 'landing') (window as Window & { __konanHideSplash?: () => void }).__konanHideSplash?.();
  }, [authPending, activeView]);

  const showToast = (msg: string, duration = 5000) => {
    // Purge absolue de tous les émojis pour une interface sobre, élégante et professionnelle
    const cleanMsg = msg
      .replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1FA00}-\u{1FAFF}\u{1F000}-\u{1F02F}\u{1F0A0}-\u{1F0FF}]/gu, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
    setToastMessage(cleanMsg);
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
      // Console administrateur : seulement sur l'ordinateur de développement, jamais sur le site en ligne
      if (canOpenAdmin) setActiveView('admin');
      return;
    }

    if (state.isDemoMode && view === 'upload-schedule') {
      showToast('En mode démo, l’importation d’emploi du temps est désactivée : votre EDT est déjà prédéfini à l’avance. Connectez-vous pour importer le vôtre (jusqu’à 3 imports gratuits).');
      return;
    }

    // Formule KONAN PRO : Connexion impérative obligatoire (aucun accès anonyme ou démo non authentifié)
    if (view === 'pro-wizard') {
      if (!state.userAccount?.isLoggedIn || state.isDemoMode) {
        showToast('Connexion requise : Vous devez impérativement être connecté avec votre compte Google pour passer à KONAN PRO.');
        setActiveView('auth');
        return;
      }
    }

    const isAuthenticated = Boolean(state.userAccount?.isLoggedIn || state.isDemoMode);
    if (!isAuthenticated && view !== 'landing' && view !== 'auth') {
      showToast('Connexion requise : Veuillez vous connecter avec Google pour accéder à l’application.');
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

    // Élève qui revient (données déjà sur le téléphone) : son tableau de bord s'affiche tout de suite,
    // sans attendre Internet ; la synchronisation avec le cloud se fait juste derrière.
    if (userState.completedOnboarding && !pendingProWizardRef.current) {
      setState(userState);
      setActiveView('dashboard');
    }

    // 1. Synchronisation Cloud PRIORITAIRE AVANT toute écriture sur Firestore :
    // Récupérer et fusionner immédiatement les matières, devoirs et sessions stockés sur Cloud Firestore
    let finalUserState = userState;
    try {
      const report: { cloudReached?: boolean } = {};
      const mergedFromCloud = await fetchAndMergeCloudState(profile.googleId, userState, report);
      if (mergedFromCloud && (mergedFromCloud.subjects?.length > 0 || mergedFromCloud.completedOnboarding)) {
        finalUserState = mergedFromCloud;
      }
      // Copie du cloud reçue (ou compte tout neuf, sans copie) : la réputation et le changement de semaine
      // peuvent maintenant être comptés
      if (report.cloudReached || !userState.completedOnboarding) setCloudReady(true);
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
      showToast(`Bonne Arrivée ! ${finalName} — Code Konan : ${studentKonanId} (KONAN PRO actif)`);
    } else if (resolvedTier === 'plus') {
      showToast(`Bonne Arrivée ! ${finalName} — Code Konan : ${studentKonanId} (KONAN PLUS actif)`);
    } else {
      showToast(`Bonne Arrivée ! ${finalName} — Votre Code Konan : ${studentKonanId}`);
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

    // Déblocage de l'accès à l'application :
    // Un utilisateur qui a déjà un compte (même s'il est Pro ou Plus) arrive DIRECTEMENT dans son tableau de bord.
    // Seul un utilisateur qui vient de cliquer explicitement sur la carte d'accompagnement Pro ou Plus lance le guide EDT Pro.
    if (pendingProWizardRef.current && (resolvedTier === 'pro' || resolvedTier === 'plus')) {
      pendingProWizardRef.current = false;
      setActiveView('pro-wizard');
    } else {
      pendingProWizardRef.current = false;
      setActiveView('dashboard');
    }
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
    // La classe déjà enregistrée l'emporte : le profil Google n'a qu'une valeur par défaut (« Licence Universitaire »)
    userState.academicLevel = userState.academicLevel || profile.academicLevel;
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
      // La photo choisie par l'élève survit à chaque reconnexion (Google ne la remplace pas)
      customAvatar: userState.userAccount?.customAvatar,
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

    //  TANT QUE L'UTILISATEUR N'A PAS ACCEPTÉ :
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

    // Formule KONAN PRO ou KONAN PLUS : Ouverture du Guide EDT Pro pas à pas avec Konan
    if (planId === 'pro' || planId === 'plus') {
      if (!state.userAccount?.isLoggedIn || state.isDemoMode) {
        showToast('Connexion requise : Vous devez impérativement être connecté avec votre compte pour configurer votre EDT Pro avec Konan.');
        setActiveView('auth');
        return;
      }
      // Mode payant : Pro s'obtient en payant (Plus reste en liste d'attente) ; déjà payé → guide EDT Pro
      if (paidMode) {
        if (planId === 'plus') {
          showToast('KONAN Plus arrive bientôt. KONAN Pro est déjà disponible.');
          setIsSubscriptionOpen(true);
          return;
        }
        if (serverTier !== 'pro') {
          if (!proSellableForClass) { showToast(PRO_NOT_FOR_CLASS_TEXT); return; }
          setIsSubscriptionOpen(true);
          return;
        }
        setActiveView('pro-wizard');
        return;
      }
      // Paiement ouvert dans l'appli mais réponse du serveur pas encore là (ou KONAN_PAYMENTS pas encore
      // allumé) : on n'offre plus Pro gratuitement, on ouvre la fiche de paiement (chargement / « bientôt »)
      if (PAYMENTS_OPEN) {
        if (!proSellableForClass) { showToast(PRO_NOT_FOR_CLASS_TEXT); return; }
        setIsSubscriptionOpen(true);
        return;
      }
      setState(prev => ({
        ...prev,
        planTier: planId,
        userAccount: prev.userAccount ? {
          ...prev.userAccount,
          planTier: planId,
        } : undefined,
      }));
      setActiveView('pro-wizard');
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

    showToast(`Modèle KONAN Gratuit actif pour votre compte.`);
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
    showToast(`Groupe KONAN PLUS : ${ids.length}/4 IDs rattachés avec succès.`);
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
    showToast(`Groupe KONAN PLUS mis à jour (${emails.length}/4 membres actifs).`);
  };

  /**
   * KONAN Plus : objectif de l'élève (12, mention, major). Gardé par le SERVEUR (study_goals) : KONE, les
   * corrections, les sujets et les notifications adaptent leur ton. L'ancienne copie dans le compte de
   * l'appli était effacée à chaque sauvegarde : elle n'est plus utilisée.
   * @returns un message d'erreur, ou null si l'objectif est enregistré
   */
  const handleSelectAcademicGoal = async (goal: AcademicGoal): Promise<string | null> => {
    if (!plusAccess) {
      setWaitlistModalInfo({
        isOpen: true,
        featureTitle: 'Ton objectif avec KONAN Plus',
        featureDescription: 'Choisis ton objectif (12 de moyenne, une mention ou major) : KONE et KONAN adaptent leur façon de te parler, leur exigence et tes devoirs. C’est l’une des forces de KONAN Plus.',
        requiredTier: 'plus',
      });
      return 'KONAN Plus est nécessaire pour choisir un objectif.';
    }
    const r = await saveStudyGoalApi(goal);
    if (r.success === false) {
      return r.error === 'PLUS_REQUIRED'
        ? 'Ton abonnement KONAN Plus n’est pas actif.'
        : subscriptionErrorText(r.error);
    }
    setStudyGoal(r.goal);
    const info = studyGoalInfo(r.goal);
    showToast(info ? `Objectif enregistré : ${info.title.toLowerCase()}. KONE s’adapte !` : 'Objectif enregistré.');
    return null;
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
      showToast(` Bienvenue sur KONAN AI ! Votre compte Google est maintenant enregistré et sécurisé.`);
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
    showToast(` Vos préférences de confidentialité ont été mises à jour.`);
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

    // Déconnexion Firebase Auth immédiate (ce téléphone quitte aussi ce compte pour les notifications)
    await detachDeviceFromAccount().catch(() => { });
    await signOutReal();
    setActiveSession(null);

    // Supprimer le stockage local résiduel pour ce compte
    if (declinedUid && declinedUid !== 'guest' && declinedUid !== 'google-demo') {
      try {
        localStorage.removeItem(`konan_user_${declinedUid}`);
      } catch { }
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

    // En mode gratuit (démo), limiter à 1 seule méthode active à la fois
    if (demo.preferences?.combinedPacings && demo.preferences.combinedPacings.length > 1) {
      demo.preferences.combinedPacings = [demo.preferences.pacing || 'pomodoro'];
    }

    setActiveSession({
      isDemo: true,
      name: demo.userAccount?.name || 'Alexandre Étudiant (Compte Démo)',
      email: demo.userAccount?.email || 'alexandre.universite@etudiant.univ.fr',
    });

    setState(demo);
    showToast(` Mode Démo activé (${demo.academicLevel}). Modèle Gratuit (Free) actif.`);
    setActiveView('dashboard');
  };

  /**
   * Logout handler:
   * Disconnects Firebase / Demo and resets to clean unauthenticated Guest state (ZERO demo courses).
   */
  const handleLogout = async () => {
    hasGreetedAuthRef.current = '';
    setCloudReady(false);
    setCloudGaveUp(false);
    lastRescheduledSignature.current = '';
    if (state.userAccount?.googleId && !state.isDemoMode) {
      try {
        await saveUserState(state.userAccount.googleId, state);
      } catch (err) {
        console.warn('Erreur de synchronisation cloud avant déconnexion:', err);
      }
    }
    // Ce téléphone ne doit plus recevoir les notifications de ce compte
    await detachDeviceFromAccount().catch(() => { });
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
    launchProWizard?: boolean;
  }) => {
    if (state.isDemoMode) {
      showToast('️ En mode démo, l’emploi du temps est prédéfini à l’avance et ne peut pas pas être modifié par importation.');
      return;
    }

    pendingProWizardRef.current = Boolean(payload.launchProWizard);

    try {
      sessionStorage.removeItem('konan_pending_onboarding_payload');
    } catch {
      // Ignorer
    }

    const cleanPayload = sanitizePollutedScheduleState(
      payload.subjects,
      payload.classSlots,
      payload.studySessions
    );
    const sanitizedSessions = cleanPayload.hadPollution
      ? generateOptimizedStudyPlan(
          cleanPayload.subjects,
          cleanPayload.classSlots,
          payload.preferences,
          payload.planTier || state.planTier || state.userAccount?.planTier || 'free'
        )
      : cleanPayload.studySessions;

    // Mettre aussi à jour pendingAuth si la modale de confidentialité est ouverte lors d'une première inscription
    setPendingAuth(prevPending => {
      if (!prevPending) return null;
      const effectiveTier = payload.planTier || prevPending.initialState.planTier || 'free';
      const nextPdfCount = (prevPending.initialState.pdfImportsCount || 0) + 1;
      const mergedInitial: AppState = {
        ...prevPending.initialState,
        academicLevel: payload.preferences.academicLevel || prevPending.initialState.academicLevel,
        planTier: effectiveTier,
        subjects: cleanPayload.subjects,
        classSlots: cleanPayload.classSlots,
        preferences: payload.preferences,
        studySessions: sanitizedSessions,
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
      const effectiveAcademicLevel = payload.preferences.academicLevel || prev.academicLevel;
      const effectiveGradeLevel = payload.preferences.gradeLevel || prev.preferences?.gradeLevel || prev.userAccount?.gradeLevel;
      // Pays : celui de l'accueil, sinon celui déjà enregistré (un nouvel import d'emploi du temps ne l'efface pas)
      const effectiveCountry = normalizeCountry(payload.preferences.country || prev.preferences?.country || prev.userAccount?.country) || undefined;
      const updated: AppState = {
        ...prev,
        academicLevel: effectiveAcademicLevel,
        planTier: effectiveTier,
        subjects: cleanPayload.subjects,
        classSlots: cleanPayload.classSlots,
        preferences: {
          ...payload.preferences,
          academicLevel: effectiveAcademicLevel,
          gradeLevel: effectiveGradeLevel,
          country: effectiveCountry,
        },
        studySessions: sanitizedSessions,
        logs: [],
        pdfImportsCount: nextPdfCount,
        userAccount: prev.userAccount ? {
          ...prev.userAccount,
          academicLevel: effectiveAcademicLevel,
          gradeLevel: effectiveGradeLevel,
          country: effectiveCountry,
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

    //  Uniquement si l'utilisateur vient de cliquer explicitement sur le modèle KONAN PRO ou KONAN PLUS, lancer le guide EDT Pro
    if (payload.launchProWizard && (payload.planTier === 'pro' || payload.planTier === 'plus')) {
      // Mode payant sans abonnement : on propose de payer au lieu d'ouvrir le guide Pro
      if (paidModeRef.current.paidMode && paidModeRef.current.serverTier !== 'pro') {
        setActiveView('dashboard');
        if (!isExamPrepOpenFor(payload.preferences?.gradeLevel || studentGradeRaw, payload.preferences?.country || studentCountry)) {
          showToast('Emploi du temps enregistré ! ' + PRO_NOT_FOR_CLASS_TEXT);
          return;
        }
        showToast('Emploi du temps enregistré ! Pour KONAN Pro, choisis ta formule.');
        setIsSubscriptionOpen(true);
        return;
      }
      showToast('Bienvenue dans le Guide EDT Pro avec Konan !');
      setActiveView('pro-wizard');
      return;
    }

    showToast('Emploi du temps synchronisé & planning d’étude optimisé généré !');
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
    countryCode?: string;
    country?: string;
  }) => {
    // Sécurité backend : assainit formellement le payload et empêche la modification frauduleuse de tier/isPro
    const safeData = sanitizeUserProfileUpdate(updated as any);
    // Pays (liste fermée) : changer de pays ne touche pas aux autres réglages
    const nextCountry = normalizeCountry(updated.country) || undefined;

    // Changement de nom : un seul tous les 3 mois (le classement de la ligue reste stable)
    const currentName = (state.userAccount?.name || state.studentName || '').trim();
    const nameChanged = Boolean(currentName) && safeData.name.trim() !== currentName;
    const blockedUntil = nameChanged ? nextNameChangeAt(state.nameChangedAt) : null;
    if (blockedUntil) {
      safeData.name = currentName;
      showToast(`Tu as déjà changé ton nom récemment. Prochain changement possible le ${new Date(blockedUntil).toLocaleDateString('fr-FR')}.`, 6000);
    }

    const resolvedProfileGrade = tryResolveGradeLevel(safeData.academicLevel);

    setState(prev => {
      const nextGrade = resolvedProfileGrade || prev.preferences?.gradeLevel || prev.userAccount?.gradeLevel;
      const nextUserAccount: UserAccount = prev.userAccount ? {
        ...prev.userAccount,
        name: safeData.name,
        academicLevel: safeData.academicLevel,
        gradeLevel: nextGrade,
        phoneNumber: safeData.phoneNumber,
        countryCode: safeData.countryCode,
        country: nextCountry || prev.userAccount.country,
        lastSyncedAt: new Date().toISOString(),
      } : {
        isLoggedIn: false,
        name: safeData.name,
        email: '',
        avatar: '',
        googleId: '',
        academicLevel: safeData.academicLevel,
        gradeLevel: nextGrade,
        lastSyncedAt: new Date().toISOString(),
      };

      const next: AppState = {
        ...prev,
        studentName: safeData.name,
        academicLevel: safeData.academicLevel,
        // Date de la modification : à la reconnexion (ou sur un autre téléphone), c'est cette version qui gagne
        profileUpdatedAt: new Date().toISOString(),
        nameChangedAt: nameChanged && !blockedUntil ? new Date().toISOString() : prev.nameChangedAt,
        userAccount: nextUserAccount,
        preferences: {
          ...prev.preferences,
          studentName: safeData.name,
          academicLevel: safeData.academicLevel,
          gradeLevel: nextGrade,
          country: nextCountry || prev.preferences?.country || prev.userAccount?.country,
        }
      };

      saveAppState(next);

      if (prev.userAccount?.googleId && !prev.isDemoMode) {
        saveUserState(prev.userAccount.googleId, next);
      }

      return next;
    });

    if (!blockedUntil) showToast(`Nom et filière enregistrés : ${safeData.name} (${updated.academicLevel})`);
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
    showToast('Votre planning d’étude a été réorganisé avec succès !');
  };

  const handleToggleSessionComplete = (sessionId: string, bypassDayCheck: boolean = false, mistakes?: number, noXp?: boolean) => {
    const target = state.studySessions.find(s => s.id === sessionId);
    if (!target) return;

    const currentDayIndex = (new Date().getDay() + 6) % 7;
    const dayNames = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    const currentDayName = dayNames[currentDayIndex];
    const targetDayName = dayNames[target.dayOfWeek] || 'ce jour';

    // Anti-cheat verification: Only allow validating today's study sessions or rescheduled sessions
    if (!bypassDayCheck && !target.isRescheduledToday && target.dayOfWeek !== currentDayIndex) {
      soundFX.playNotificationPing();
      showToast(`Anti-triche : Vous pouvez uniquement valider les révisions prévues pour aujourd'hui (${currentDayName}). Cette séance est prévue pour ${targetDayName}.`, 5000);
      return;
    }

    // Règle stricte : Une séance validée ne peut JAMAIS être annulée
    if (target.completed) {
      soundFX.playNotificationPing();
      showToast('Cette séance d\'étude est déjà validée et enregistrée.', 4000);
      return;
    }

    soundFX.playCheckmarkPop();
    const willBeCompleted = true;
    const updatedSessions = state.studySessions.map(s =>
      s.id === sessionId
        ? {
          ...s,
          completed: willBeCompleted,
          completedAt: willBeCompleted ? new Date().toISOString() : undefined,
          actualDurationMinutes: willBeCompleted ? (s.actualDurationMinutes || s.durationMinutes) : undefined,
          // Erreurs de la séance (cours guidé, 30 questions) : chacune retire 1 XP
          ...(mistakes !== undefined ? { mistakes: Math.max(0, Math.round(mistakes)) } : {}),
          // Devoir rendu hors temps (plus de 2 h + 15 min) : séance faite, mais sans XP ni points de ligue
          ...(willBeCompleted && noXp ? { noXp: true } : {}),
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
      // Séance faite : plus aucune relance pour elle aujourd'hui
      const currentUid = auth?.currentUser?.uid || state.userAccount?.googleId;
      if (currentUid && !state.isDemoMode) {
        cancelSessionAlerts(currentUid, target.id).catch(() => { });
      }

      const daySessions = updatedSessions.filter(s => s.dayOfWeek === target.dayOfWeek);
      const isDayFullyComplete = daySessions.length > 0 && daySessions.every(s => s.completed);
      const totalSessions = updatedSessions.length;
      const completedSessions = updatedSessions.filter(s => s.completed).length;
      const willAllBeCompleted = totalSessions > 0 && completedSessions === totalSessions;

      if (willAllBeCompleted) {
        setIsUltimateCelebrationOpen(true);
        showToast(`Félicitations ! Tu as validé 100% de tes objectifs et l'ensemble de tes heures de révision !`, 6000);
      } else if (isDayFullyComplete) {
        soundFX.playCelebrationFanfare();
        showToast(`Félicitations ! Toutes les révisions prévues pour aujourd'hui sont validées avec succès !`, 6000);
      } else {
        soundFX.playCelebrationFanfare();
        showToast(`Félicitations ! Tu as validé la leçon "${target.title}" avec succès !`, 5000);
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
  const handleStartFocusSession = async (session: StudySession) => {
    const currentDayIndex = (new Date().getDay() + 6) % 7;
    const dayNames = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    const currentDayName = dayNames[currentDayIndex];
    const targetDayName = dayNames[session.dayOfWeek] || 'ce jour';

    // Anti-cheat verification: Only allow launching today's study sessions (or rescheduled sessions)
    if (!session.isRescheduledToday && session.dayOfWeek !== currentDayIndex) {
      soundFX.playNotificationPing();
      showToast(`Anti-triche : Vous pouvez uniquement lancer le chronomètre pour les révisions d'aujourd'hui (${currentDayName}). Cette séance est prévue pour ${targetDayName}.`, 5000);
      return;
    }

    // L'élève ouvre sa séance : KONAN annule les relances « retard », « manquée » et « rattrapage »
    {
      const currentUid = auth?.currentUser?.uid || state.userAccount?.googleId;
      if (currentUid && !state.isDemoMode) {
        cancelSessionAlerts(currentUid, session.id).catch(() => { });
      } else {
        markSessionStarted(session.id);
      }
    }

    // VÉRIFICATION CORRESPONDANCE PROGRAMME OFFICIEL (MATHS, PHYSIQUE-CHIMIE, SVT)
    const sub = state.subjects.find(s => s.id === session.subjectId);
    const subjectName = sub?.name || session.title;
    // Classe STRICTE (jamais devinée), ramenée à sa forme officielle (« 1ère A » → 1re A1, « Tle A » → Tle A1)
    const resolvedGrade = canonicalGradeLevel(tryResolveGradeLevel(studentGradeRaw));
    const stemMatchForTutor = matchSubjectToStemCurriculum(subjectName, resolvedGrade);

    // Devoirs et examens = KONAN Pro : un élève Gratuit (par exemple dont l'abonnement est fini) ne lance jamais
    // une préparation de devoir ; on lui montre l'offre au lieu d'une erreur du serveur
    if (session.isExamPrep && effectivePlanTier !== 'pro' && effectivePlanTier !== 'plus') {
      showToast('La préparation aux devoirs fait partie de KONAN Pro.', 4000);
      setIsPlansOpen(true);
      return;
    }

    // PRÉPARATION AU DEVOIR : 30 questions, sujet complet de 2 h, ou chronomètre de 75 min (matière sans cours)
    if (session.isExamPrep && session.examPrepMode) {
      // Les chapitres de la matière (choix le plus récent de l'élève) passent avant ceux recopiés dans la séance
      const chapterIds = sub?.examChapterIds?.length ? sub.examChapterIds : session.examChapterIds;
      const examSession: StudySession = { ...session, examChapterIds: chapterIds };
      const examKey = (sub?.examSubjectKey || stemMatchForTutor.stemSubjectId) as StemSubjectId | undefined;
      const examMode = session.examPrepMode;
      const wantsCourse = examMode !== 'chrono75';
      if (examMode !== 'chrono75' && resolvedGrade && examKey && chapterIds?.length) {
        setActiveExamSession({ mode: examMode, session: examSession, subjectName, stemSubjectId: examKey, gradeLevel: resolvedGrade });
        setActiveView('exam');
        soundFX.playCheckmarkPop();
        return;
      }
      if (wantsCourse) {
        // Avant : bascule SILENCIEUSE sur le chronomètre, l'élève ne comprenait pas pourquoi il n'avait pas son sujet
        const examLabel = sub?.examType === 'devoir' ? 'devoir' : 'examen';
        if (resolvedGrade && examKey && !chapterIds?.length) {
          showToast(`Choisis les chapitres de ton ${examLabel} de ${subjectName} (bouton « Modifier » de la matière) : KONAN pourra alors préparer ton sujet et tes questions.`, 9000);
          setActiveView('subjects');
          return;
        }
        showToast(!resolvedGrade
          ? 'Indique ta classe exacte avec sa série (ex : 1ère D) en réimportant ton emploi du temps pour recevoir tes sujets de devoir. En attendant : révision chronométrée.'
          : `KONAN ne reconnaît pas la matière « ${subjectName} » parmi ses cours. En attendant : révision chronométrée.`, 9000);
      }
      // Révision sur le cahier, chronométrée 75 min
      setFocusSession({ ...examSession, durationMinutes: 75 });
      setActiveView('focus');
      soundFX.playCheckmarkPop();
      return;
    }

    // Les cours guidés ne sont chargés qu'ici, au lancement d'une séance de matière à cours
    const wantsTutor = Boolean(resolvedGrade && stemMatchForTutor.stemSubjectId && shouldLaunchInteractiveTutor(subjectName, resolvedGrade));
    let hasChapters = false;
    if (wantsTutor) {
      try {
        const { hasCurriculumChapters, loadCurriculumFor } = await import('./lib/curriculum/curriculumRegistry');
        await loadCurriculumFor(resolvedGrade, [stemMatchForTutor.stemSubjectId!]); // seulement cette matière, à ce niveau
        hasChapters = hasCurriculumChapters(stemMatchForTutor.stemSubjectId!, resolvedGrade!);
      } catch {
        showToast('Connexion trop faible pour charger le cours guidé. Séance lancée en mode chronomètre.', 6000);
        setFocusSession(session);
        setActiveView('focus');
        return;
      }
    }

    if (stemMatchForTutor.isStemSubject && !resolvedGrade) {
      showToast("Indique ta classe exacte avec sa série (ex : Tle D, 1ère A1) en réimportant ton emploi du temps pour débloquer les cours guidés. Séance lancée en mode chronomètre.", 7000);
    } else if (wantsTutor && !hasChapters) {
      showToast(`${subjectName} : ${EMPTY_SUBJECT_KONAN_MESSAGE}`, 7000);
    } else if (resolvedGrade && shouldLaunchInteractiveTutor(subjectName, resolvedGrade)) {
      const stemMatch = stemMatchForTutor;
      if (stemMatch.isStemSubject && stemMatch.stemSubjectId) {
        setActiveTutorSession({
          subjectTitle: subjectName,
          stemSubjectId: stemMatch.stemSubjectId,
          gradeLevel: resolvedGrade,
          studySessionId: session.id,
          durationMinutes: session.durationMinutes || 25,
          // Méthode de la séance (planning), ou méthode choisie par l'élève : elle change le déroulé du cours
          pacingMethod: session.pacingMethod || state.preferences?.pacing,
        });
        setActiveView('tutor');
        soundFX.playCheckmarkPop();
        return;
      }
    }

    setFocusSession(session);
    setActiveView('focus');
    soundFX.playCheckmarkPop();
  };

  /**
   * Callback de complétion du Tuteur Interactif Duolingo / Séries de préparation examen :
   * Valide la séance, incrémente les statistiques et affiche la célébration avec le temps exact réalisé.
   */
  const handleCompleteTutorSession = (studySessionId?: string, durationSec?: number, mistakes?: number, noXp?: boolean) => {
    if (studySessionId) {
      handleToggleSessionComplete(studySessionId, true, mistakes, noXp);
    }
    setActiveTutorSession(null);
    setActiveView('dashboard');
    if (noXp) {
      showToast('Devoir validé. Rendu hors temps : pas de XP cette fois. Garde un œil sur le chrono la prochaine fois !', 7000);
      return;
    }
    const timeInfo = durationSec ? ` en exactement ${formatExactDurationFrench(durationSec)}` : '';
    showToast(`Félicitations ! Séance validée avec succès${timeInfo} dans ton tuteur interactif KONAN !`, 7000);
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
      showToast(`Félicitations ! Tu as validé 100% de tes objectifs et l'ensemble de tes heures de révision !`, 6000);
    } else if (isDayFullyComplete) {
      showToast(`Félicitations ! Toutes les révisions prévues pour aujourd'hui sont validées avec succès !`, 6000);
    } else {
      showToast(`Félicitations ! Séance "${target.title}" validée avec succès dans le chronomètre Focus !`, 5000);
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
    showToast(`Félicitations ! Toutes les barres de progression sont à zéro. Reposez-vous bien, à demain !`, 6000);
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
    showToast('Révisions réactivées pour aujourd’hui !');
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
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0A0F1C] text-[#0F172A] dark:text-slate-100 flex flex-col selection:bg-sky-300 selection:text-slate-950 w-full max-w-full overflow-x-hidden transition-colors duration-300">

      {/* Hidden file input for JSON configuration backup imports */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImportFile}
        accept=".json"
        className="hidden"
      />

      {/* Persistent Navbar (Masquée sur la console Administrateur, sur l'accueil Onboarding immersif et pendant la leçon du Tuteur / Mode Focus) */}
      {activeView !== 'admin' && activeView !== 'landing' && activeView !== 'tutor' && activeView !== 'focus' && (
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
          onOpenProfile={(state.userAccount?.isLoggedIn || state.isDemoMode) ? () => setProfileScreen('menu') : undefined}
          friendNotices={friendsData?.notices || []}
          incomingFriends={friendsData?.incoming || []}
          onRespondFriend={handleRespondFriend}
          onClearFriendNotices={handleClearFriendNotices}
          onOpenFriends={() => setProfileScreen('friends')}
          gold={state.userAccount?.isLoggedIn ? userGold : null}
          onOpenShop={() => openAvatarEditor('outfit')}
          avatarConfig={displayAvatarConfig}
          hasCustomizedAvatar={hasCustomizedAvatar}
          questNotices={questState?.questNotices || []}
          incomingQuests={questState?.incomingQuests || []}
          onRespondQuest={handleRespondQuest}
          onOpenQuest={() => setActiveView('league')}
          onRefreshNotifications={() => { reloadFriends(); reloadQuests(); }}
          // LMD, BTS : pas de cours, donc pas d'entraînement ni d'énergie (ils gagnent leurs XP au chronomètre)
          energy={gamificationEnabled && gradeHasGuidedCourses ? {
            value: energyNow(state.gamification).energy,
            unlimited: hasUnlimitedEnergy(exercisePlan),
          } : null}
          onOpenExercises={() => setIsExerciseOpen(true)}
          totalStudySessions={state.studySessions?.length || 0}
          completedSessions={state.studySessions ? state.studySessions.filter(s => s.completed).length : 0}
          pendingInvitations={pendingInvitations}
          ownerNotifications={ownerFeedbackNotifications}
          paymentNotices={paymentNotices}
          onOpenPaymentNotice={() => setIsSubscriptionOpen(true)}
          onAcceptInvitation={handleAcceptInvitation}
          onDeclineInvitation={handleDeclineInvitation}
        />
      )}

      {/* Bouton Flottant d'Accès Rapide Admin si session admin active */}
      {activeView !== 'admin' && activeView !== 'tutor' && isLocalAdminEnvironment() && typeof window !== 'undefined' && sessionStorage.getItem('konan_admin_authenticated') === 'true' && (
        <button
          onClick={() => setActiveView('admin')}
          className="fixed bottom-5 right-5 z-50 px-3.5 py-2.5 rounded-2xl bg-gradient-to-r from-purple-600 to-sky-400 text-white font-bold text-xs shadow-2xl shadow-purple-600/40 border border-purple-400/40 flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95 transition-all"
        >
          <ShieldCheck className="w-4 h-4 text-purple-300" />
          <span>Console Admin</span>
        </button>
      )}

      {/* Main View Container */}
      <main className={`flex-1 w-full mx-auto overflow-x-hidden ${activeView === 'landing' || activeView === 'admin' || activeView === 'tutor'
        ? 'max-w-full p-0'
        : 'max-w-7xl px-3 sm:px-6 lg:px-8 py-4 sm:py-8 pb-24 lg:pb-8'
        }`}>
        <ViewErrorBoundary resetKey={activeView}>
        <Suspense fallback={<ViewLoader />}>

        {/* Real-time Administrator Console */}
        {activeView === 'admin' && canOpenAdmin && (
          <AdminDashboard
            onSwitchToStudentView={() => setActiveView('dashboard')}
            onExitAdmin={() => {
              clearAdminSession();
              setActiveView('landing');
            }}
          />
        )}

        {/* Parcours d'Onboarding Immersif & Animé Style Duolingo (Page d'accueil épurée) */}
        {activeView === 'landing' && authPending && !state.userAccount?.isLoggedIn && <ViewLoader />}
        {activeView === 'landing' && !authPending && (
          <DuolingoOnboarding
            currentUser={state.userAccount?.isLoggedIn ? state.userAccount : null}
            onOpenLogin={() => setActiveView('auth')}
            onOpenAdmin={canOpenAdmin ? () => setActiveView('admin') : undefined}
            onLoginSuccess={(user) => {
              handleLoginSuccess(user);
            }}
            onComplete={({ subjects, classSlots, preferences, studySessions, planTier, openSubscription }) => {
              handleApplyExtractedSchedule({
                subjects,
                classSlots,
                preferences,
                studySessions,
                planTier,
              });
              // Pro choisi à l'accueil alors que le paiement est ouvert : fiche de paiement (Pro n'est plus offert)
              if (openSubscription) setIsSubscriptionOpen(true);
            }}
          />
        )}

        {/* Dedicated Google Auth Page */}
        {activeView === 'auth' && (
          <AuthPage
            onLoginSuccess={handleLoginSuccess}
            onEnterDemoMode={handleEnterDemoMode}
            onBackToLanding={() => setActiveView('landing')}
            onOpenAdmin={canOpenAdmin ? () => setActiveView('admin') : undefined}
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
              initialAcademicLevel={state.userAccount?.academicLevel || state.academicLevel}
              initialGradeLevel={(state.userAccount?.gradeLevel || state.preferences?.gradeLevel) as any}
              onApplyExtractedSchedule={handleApplyExtractedSchedule}
              onCancel={() => setActiveView('dashboard')}
              onViewPricing={handleViewPricing}
              onUpgradeToPro={() => handleSelectPlan('pro')}
            />
          ) : state.isDemoMode ? (
            <div className="text-center py-16 space-y-4 glass-panel max-w-md mx-auto p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl">
              <div className="w-14 h-14 rounded-2xl bg-sky-400/20 text-sky-700 flex items-center justify-center mx-auto shadow-lg shadow-sky-400/10 dark:text-sky-300">
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
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-400 hover:from-blue-500 hover:to-sky-400 text-white font-bold text-xs transition-colors cursor-pointer shadow-md shadow-blue-600/20"
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
                className="px-5 py-2.5 rounded-xl bg-sky-400 text-slate-950 font-bold text-xs cursor-pointer"
              >
                Se connecter avec Google
              </button>
            </div>
          )
        )}

        {/* Dashboard: STRICTLY PROTECTED */}
        {activeView === 'dashboard' && (
          (state.userAccount?.isLoggedIn || state.isDemoMode) ? (
            <>
            {state.userAccount?.isLoggedIn && !state.isDemoMode && (
              <div className="mb-4">
                <NotificationActivationCard
                  uid={state.userAccount?.googleId}
                  email={state.userAccount?.email}
                  planTier={effectivePlanTier}
                  onActivated={syncAlertsNow}
                />
              </div>
            )}
            <DashboardOverview
              studentName={effectiveStudentName}
              academicLevel={effectiveClassLabel}
              avatarConfig={displayAvatarConfig}
              hasCustomizedAvatar={hasCustomizedAvatar}
              onOpenAvatarEditor={() => openAvatarEditor('skin')}
              subjects={state.subjects}
              classSlots={state.classSlots}
              studySessions={state.studySessions}
              preferences={state.preferences}
              isDemoMode={state.isDemoMode}
              planTier={effectivePlanTier}
              onNavigate={handleNavigate}
              onViewPricing={handleViewPricing}
              onUpgradeToPro={() => handleSelectPlan('pro')}
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
              onOpenPhotoCorrection={plusAccess && subscriptionAccount ? () => setActiveView('devoir-photo') : undefined}
              // Tuile de la maquette : ligue (rang + division, élèves admis dans la ligue)
              leagueSummary={gamificationEnabled && gradeIsInLeague
                ? { rank: leagueBoard?.rows.find((r) => r.me)?.rank ?? null, divisionName: leagueBoard?.divisionName || 'Bronze' }
                : null}
            />
            </>
          ) : (
            <div className="text-center py-16 space-y-4">
              <p className="text-lg text-white font-bold">Veuillez vous connecter pour accéder à votre tableau de bord.</p>
              <button
                onClick={() => setActiveView('auth')}
                className="px-5 py-2.5 rounded-xl bg-sky-400 text-slate-950 font-bold text-xs"
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
              academicLevel={effectiveClassLabel}
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
                className="px-5 py-2.5 rounded-xl bg-sky-400 text-slate-950 font-bold text-xs"
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
              gradeLevel={studentGradeRaw}
              country={studentCountry}
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
                className="px-5 py-2.5 rounded-xl bg-sky-400 text-slate-950 font-bold text-xs"
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
                className="px-5 py-2.5 rounded-xl bg-sky-400 text-slate-950 font-bold text-xs"
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
              // XP affichés à la fin du chronomètre (LMD et BTS gagnent ainsi leurs XP de ligue)
              xpReward={gamificationEnabled && focusSession ? lessonXp(focusSession.durationMinutes) : undefined}
            />
          ) : (
            <div className="text-center py-16 space-y-4">
              <p className="text-lg text-white font-bold">Connexion requise pour accéder au chronomètre Focus.</p>
              <button
                onClick={() => setActiveView('auth')}
                className="px-5 py-2.5 rounded-xl bg-sky-400 text-slate-950 font-bold text-xs"
              >
                Se connecter avec Google
              </button>
            </div>
          )
        )}

        {/* Tuteur Interactif Duolingo (Maths, Physique-Chimie, SVT - Programme Officiel CI) */}
        {activeView === 'tutor' && activeTutorSession && (
          <InteractiveTutorView
            userId={state.userAccount?.googleId || 'local_student'}
            subjectTitle={activeTutorSession.subjectTitle}
            gradeLevel={activeTutorSession.gradeLevel}
            stemSubjectId={activeTutorSession.stemSubjectId}
            studySessionId={activeTutorSession.studySessionId}
            durationMinutes={activeTutorSession.durationMinutes}
            pacingMethod={activeTutorSession.pacingMethod}
            onExit={() => {
              setActiveTutorSession(null);
              setActiveView('dashboard');
            }}
            onSessionCompleted={(sessionId, stats) => {
              handleCompleteTutorSession(sessionId, undefined, stats?.mistakes);
            }}
            // KONAN Pro : « Explique à KONAN » (Feynman) après chaque mini-leçon ; il faut un compte connecté (serveur)
            canExplain={(effectivePlanTier === 'pro' || effectivePlanTier === 'plus') && Boolean(state.userAccount?.isLoggedIn) && !state.isDemoMode}
            // « Je ne comprends pas » dans la leçon : KONAN part de cette notion et de ce que dit le cours
            onNotUnderstood={tutorAvailable ? (context) => setTutorOpen({ context }) : undefined}
          />
        )}

        {/* Préparation au devoir : série de 30 questions ou sujet complet de 2 h */}
        {activeView === 'exam' && activeExamSession && (
          activeExamSession.mode === 'qcm30' ? (
            <ExamQcmView
              userId={state.userAccount?.googleId || 'local_student'}
              session={activeExamSession.session}
              subjectName={activeExamSession.subjectName}
              stemSubjectId={activeExamSession.stemSubjectId}
              gradeLevel={activeExamSession.gradeLevel}
              onExit={() => {
                setActiveExamSession(null);
                setActiveView('dashboard');
              }}
              onComplete={(sessionId, durationSec, mistakes) => {
                setActiveExamSession(null);
                handleCompleteTutorSession(sessionId, durationSec, mistakes);
              }}
              onNotUnderstood={tutorAvailable ? (context) => setTutorOpen({ context }) : undefined}
            />
          ) : (
            <ExamSujetView
              userId={state.userAccount?.googleId || 'local_student'}
              session={activeExamSession.session}
              subjectName={activeExamSession.subjectName}
              stemSubjectId={activeExamSession.stemSubjectId}
              gradeLevel={activeExamSession.gradeLevel}
              onExit={() => {
                setActiveExamSession(null);
                setActiveView('dashboard');
              }}
              onComplete={(sessionId: string, opts?: { noXp?: boolean }) => {
                setActiveExamSession(null);
                handleCompleteTutorSession(sessionId, undefined, undefined, opts?.noXp);
              }}
              // « Je ne comprends pas mon erreur » : KONAN explique la question ratée du devoir
              onNotUnderstood={tutorAvailable ? (context) => setTutorOpen({ context }) : undefined}
            />
          )
        )}

        {/* KONAN Plus : corriger un devoir du professeur en photo (énoncé + copie) */}
        {activeView === 'devoir-photo' && plusAccess && subscriptionAccount && (
          <HomeworkPhotoView
            userId={subscriptionAccount}
            classe={effectiveClassLabel || ''}
            country={studentCountry || undefined}
            subjects={(state.subjects || []).map((s) => s.name)}
            onExit={() => setActiveView('dashboard')}
            onNotUnderstood={tutorAvailable ? (context) => setTutorOpen({ context }) : undefined}
          />
        )}

        {/* Ligue (onglet trophée) */}
        {activeView === 'league' && gamificationEnabled && (
          <LeaguePage
            board={leagueBoard}
            hasCourses={gradeIsInLeague}
            offline={leagueOffline}
            errorText={leagueError}
            resultSeen={leagueResultSeen}
            onDismissResult={(id) => {
              setLeagueResultSeen(id);
              try { localStorage.setItem('konan_league_result_seen', id); } catch { /* sans effet */ }
            }}
            onRefresh={handleRefreshLeagueAndQuests}
            onOpenPlayer={setPlayerCardId}
          />
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
                className="px-5 py-2.5 rounded-xl bg-sky-400 text-slate-950 font-bold text-xs"
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
        </Suspense>
        </ViewErrorBoundary>
      </main>

      {/* Bouton flottant jaune des Mini-Jeux KONAN (XP à gogo, etc., avec charges ⚡) */}
      {gamificationEnabled && gradeHasGuidedCourses && !isExerciseOpen && ['dashboard', 'planner', 'subjects', 'schedule', 'analytics', 'league'].includes(activeView) && (
        <ExerciseFab gamification={state.gamification} planTier={exercisePlan} onOpen={() => setIsExerciseOpen(true)} />
      )}
      {/* Peluche KONAN « Je ne comprends pas » : en bas à droite (les mini-jeux sont en bas à gauche) */}
      {tutorAvailable && !tutorOpen && !isExerciseOpen && ['dashboard', 'planner', 'subjects', 'schedule', 'analytics', 'league'].includes(activeView) && (
        <TutorFab onOpen={() => setTutorOpen({})} />
      )}
      {tutorOpen && tutorStatus && subscriptionAccount && (
        <Suspense fallback={null}>
          <TutorChat
            uid={subscriptionAccount}
            classe={effectiveClassLabel || ''}
            prenom={String(effectiveStudentName || '').trim().split(/\s+/)[0] === 'Étudiant' ? undefined : String(effectiveStudentName || '').trim().split(/\s+/)[0]}
            context={tutorOpen.context}
            paid={tutorStatus.paid}
            remaining={tutorStatus.remaining}
            limit={tutorStatus.limit}
            voiceRemaining={tutorStatus.voiceRemaining}
            goalLabel={studyGoalInfo(studyGoal)?.short}
            onRemainingChange={(n) => setTutorStatus((s) => (s ? { ...s, remaining: n } : s))}
            onVoiceRemainingChange={(n) => setTutorStatus((s) => (s ? { ...s, voiceRemaining: n } : s))}
            plus={tutorStatus.plus}
            photoRemaining={tutorStatus.plus ? tutorStatus.photoRemaining : null}
            onPhotoRemainingChange={(n) => setTutorStatus((s) => (s ? { ...s, photoRemaining: n } : s))}
            onSubscribe={proSellableForClass ? () => { setTutorOpen(null); setIsSubscriptionOpen(true); } : undefined}
            onClose={() => setTutorOpen(null)}
          />
        </Suspense>
      )}
      {isExerciseOpen && (
        <SeriesErrorBoundary onClose={() => setIsExerciseOpen(false)}>
        <Suspense fallback={<div className="fixed inset-0 z-[80] bg-slate-50 dark:bg-[#0A0F1C] flex items-center justify-center"><ViewLoader /></div>}>
          <MiniGamesHubView
            userId={state.userAccount?.googleId || 'local_student'}
            gradeLevel={canonicalGradeLevel(tryResolveGradeLevel(studentGradeRaw))}
            gamification={state.gamification}
            planTier={exercisePlan}
            onSpend={handleSpendEnergy}
            onFinish={handleFinishSeries}
            onLose={handleLoseSeries}
            onClose={() => setIsExerciseOpen(false)}
            onUpgrade={() => { setIsExerciseOpen(false); handleViewPricing(); }}
          />
        </Suspense>
        </SeriesErrorBoundary>
      )}

      {/* Academic Track Presets Modal (ONLY FOR DEMO MODE) */}
      {state.isDemoMode && (
        <Suspense fallback={null}>
          <PresetModal
            isOpen={isPresetModalOpen}
            onClose={() => setIsPresetModalOpen(false)}
            onSelectPreset={handleSelectPreset}
            currentLevel={state.academicLevel}
          />
        </Suspense>
      )}

      {/* Page Profil façon Duolingo (avatar animé, XP, amis, boutique de skins, mode jour/nuit, confidentialité, paramètres) */}
      {profileScreen && (
        <ProfilePage
          initialScreen={profileScreen}
          onClose={() => setProfileScreen(null)}
          name={effectiveStudentName}
          avatarConfig={displayAvatarConfig}
          hasCustomizedAvatar={hasCustomizedAvatar}
          onOpenAvatarEditor={(tab) => openAvatarEditor(tab || 'skin')}
          classLabel={effectiveClassLabel}
          konanId={friendsData?.me?.konanId || state.userAccount?.konanId || state.konanId || ''}
          planTier={effectivePlanTier}
          totalXp={gamificationEnabled ? Math.max(gamificationOf(state.gamification).xp, leagueBoard?.totalXp ?? 0, friendsData?.me?.totalXp ?? 0) : (friendsData?.me?.totalXp ?? 0)}
          divisionName={leagueBoard?.divisionName || null}
          friends={friendsData}
          friendsError={friendsError}
          leaguePeers={(leagueBoard?.rows || []).filter((r) => !r.me && Boolean(r.konanId)).map((r) => ({
            konanId: r.konanId!,
            name: r.name,
            avatar: r.avatar,
            avatarConfig: r.avatarConfig || null,
            classLabel: r.classLabel,
            xp: r.xp,
            tier: r.tier,
          }))}
          onReloadFriends={reloadFriends}
          onOpenPlans={() => setIsPlansOpen(true)}
          onOpenSettings={() => setIsSettingsOpen(true)}
          onOpenPrivacyPolicy={() => setIsPrivacyModalOpen(true)}
          gold={userGold}
          onOpenShop={() => openAvatarEditor('outfit')}
        />
      )}

      {/* Éditeur de personnage animé & Boutique de skins (Pièces d'or) */}
      {avatarEditorTab !== null && (
        <Suspense fallback={null}>
          <AvatarEditorModal
            initialConfig={displayAvatarConfig}
            unlockedItems={unlockedItems}
            gold={userGold}
            isPro={effectiveAvatarIsPro}
            userSeed={friendsData?.me?.konanId || state.userAccount?.konanId || state.konanId || effectiveStudentName}
            initialTab={avatarEditorTab}
            onClose={() => setAvatarEditorTab(null)}
            onSaved={(cfg) => {
              setAvatarConfig(cfg);
              setHasCustomizedAvatar(true);
              setState((prev) => {
                const next: AppState = { ...prev, avatarConfig: cfg };
                saveAppState(next);
                if (prev.userAccount?.googleId && !prev.isDemoMode) {
                  saveUserState(prev.userAccount.googleId, next);
                }
                return next;
              });
              syncLeague();
              reloadFriends();
              reloadQuests();
            }}
            onPurchased={(nextGold, nextUnlocked) => {
              setUserGold(nextGold);
              setUnlockedItems(nextUnlocked);
            }}
            onOpenQuests={() => {
              setProfileScreen(null);
              setActiveView('league');
            }}
            onOpenPlans={() => {
              setProfileScreen(null);
              setIsPlansOpen(true);
            }}
            onToast={showToast}
          />
        </Suspense>
      )}

      {/* Fiche publique d'un élève (ouverte en cliquant sur un joueur dans la Ligue) */}
      {playerCardId && (
        <PublicProfileSheet
          konanId={playerCardId}
          onClose={() => setPlayerCardId(null)}
          onChanged={reloadFriends}
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
        onLogout={() => { setProfileScreen(null); handleLogout(); }}

        onUpdateProfile={handleUpdateProfile}
        country={studentCountry}
        nameChangedAt={state.nameChangedAt}
        // Total de tous les XP : le plus grand entre le téléphone et le serveur de la ligue (tous appareils confondus)
        totalXp={gamificationEnabled ? Math.max(gamificationOf(state.gamification).xp, leagueBoard?.totalXp ?? 0) : undefined}
        avatarConfig={displayAvatarConfig}
        hasCustomizedAvatar={hasCustomizedAvatar}
        onOpenAvatarEditor={() => {
          setIsSettingsOpen(false);
          openAvatarEditor('skin');
        }}
        onExportData={handleExportData}
        onImportData={() => fileInputRef.current?.click()}
        onResetData={() => { setProfileScreen(null); handleResetData(); }}
        onSelectPlan={(p) => { setProfileScreen(null); handleSelectPlan(p); }}
        onUpgradeToPro={() => { setProfileScreen(null); handleSelectPlan('pro'); }}
        onOpenPlans={() => setIsPlansOpen(true)}
        onOpenAdmin={isAdminAccount ? () => { setProfileScreen(null); setIsSettingsOpen(false); setActiveView('admin'); } : undefined}
        subscriptionEndsAt={paidMode ? subscriptionInfo?.status?.endsAt : null}
        invitedEmails={state.userAccount?.invitedEmails || []}
        academicGoal={studyGoal || undefined}
        showGoal={plusAccess}
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
          if (!plusAccess) {
            setWaitlistModalInfo({
              isOpen: true,
              featureTitle: 'Ton objectif avec KONAN Plus',
              featureDescription: 'Choisis ton objectif (12 de moyenne, une mention ou major) : KONE et KONAN adaptent leur façon de te parler, leur exigence et tes devoirs. C’est l’une des forces de KONAN Plus.',
              requiredTier: 'plus',
            });
            return;
          }
          setIsSettingsOpen(false);
          setIsAcademicGoalModalOpen(true);
        }}
        onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)}
      />

      {/* Fiche des formules (Paramètres → « Voir les formules ») */}
      {isPlansOpen && (
        <Suspense fallback={null}>
          <PlansSheet
            currentTier={effectivePlanTier}
            endsAt={paidMode ? subscriptionInfo?.status?.endsAt : null}
            provisional={Boolean(paidMode && subscriptionInfo?.status?.provisional)}
            grace={Boolean(paidMode && subscriptionInfo?.status?.grace)}
            canRenew={paidMode}
            proAvailable={proSellableForClass}
            unavailableText={PRO_NOT_FOR_CLASS_TEXT}
            noticeText={proNoCoursesNotice}
            onClose={() => setIsPlansOpen(false)}
            onChoosePro={(period) => {
              setIsPlansOpen(false);
              setSubscriptionPeriod(period);
              // Paiement ouvert : formulaire Wave / Orange Money (souscrire ou prolonger) ; sinon ancien parcours
              if (paidMode) setIsSubscriptionOpen(true);
              else handleSelectPlan('pro');
            }}
            onJoinPlus={() => {
              setIsPlansOpen(false);
              setWaitlistModalInfo({
                isOpen: true,
                featureTitle: 'KONAN Plus',
                featureDescription: 'Planning réglé sur ton objectif et pack groupe de 5 comptes. Laisse ton contact : tu seras parmi les premiers prévenus à l’ouverture.',
                requiredTier: 'plus',
              });
            }}
          />
        </Suspense>
      )}

      {/* Abonnement KONAN Pro (paiement Wave / Orange Money) */}
      {isSubscriptionOpen && (
        <Suspense fallback={null}>
          <SubscriptionView
            initialPeriod={subscriptionPeriod}
            gradeLevel={tryResolveGradeLevel(studentGradeRaw) || ''}
            country={studentCountry || 'CI'}
            noCoursesNotice={proNoCoursesNotice}
            info={subscriptionInfo}
            loading={subscriptionLoading}
            loadError={subscriptionError}
            onClose={() => setIsSubscriptionOpen(false)}
            onRefresh={refreshSubscription}
            onUpdated={(info) => {
              setSubscriptionInfo(info);
              if (info.status?.tier === 'pro') {
                setState((prev) => {
                  const next: AppState = { ...prev, planTier: 'pro', userAccount: prev.userAccount ? { ...prev.userAccount, planTier: 'pro' } : undefined };
                  if (next.userAccount?.googleId && !next.isDemoMode) saveUserState(next.userAccount.googleId, next);
                  return next;
                });
                setIsSubscriptionOpen(false);
                showToast(info.status.provisional ? 'Bienvenue dans KONAN Pro ! Ton paiement sera vérifié.' : 'Paiement confirmé : bienvenue dans KONAN Pro !');
                setActiveView('pro-wizard');
              }
            }}
          />
        </Suspense>
      )}

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

      {/*  Royal Step-by-Step Celebration & Onboarding Modal for KONAN PLUS */}
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

      {/*  KONAN PLUS: 4 COMPTES INVITÉS / GROUPE MODAL */}
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

      {/* KONAN Plus : « Mon objectif » (12, mention, major) — KONE adapte son ton */}
      {isAcademicGoalModalOpen && plusAccess && (
        <Suspense fallback={null}>
          <StudyGoalSheet
            currentGoal={studyGoal}
            onSave={handleSelectAcademicGoal}
            onClose={() => setIsAcademicGoalModalOpen(false)}
            studentName={effectiveStudentName}
          />
        </Suspense>
      )}

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



      {/* ️ PRIVACY & FIREBASE CLOUD DATA PROTECTION MODAL (Mandatory on 1st login) */}
      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => {
          if (pendingAuth) {
            handleDeclinePrivacyPolicy();
          } else {
            setIsPrivacyModalOpen(false);
          }
        }}
        onAccept={pendingAuth || !state.privacyPolicyAccepted ? handleAcceptPrivacyPolicy : () => setIsPrivacyModalOpen(false)}
        onDecline={pendingAuth || !state.privacyPolicyAccepted ? handleDeclinePrivacyPolicy : () => setIsPrivacyModalOpen(false)}
        isGatekeeper={Boolean(pendingAuth || (state.userAccount?.isLoggedIn && !state.privacyPolicyAccepted))}
        studentName={pendingAuth?.profile.name || effectiveStudentName}
        studentEmail={pendingAuth?.profile.email || state.userAccount?.email}
      />

      {/* Rappels KONAN : uniquement en notification du téléphone (rien dans l'appli). Bouton de test en développement. */}
      {import.meta.env.DEV && <KonanVoiceTestPanel appState={state} />}

      {/* Célébration des XP gagnés à la fin d'une séance */}
      {xpBurst && <XpBurst amount={xpBurst.amount} burstId={xpBurst.id} onDone={closeXpBurst} />}

      {/* Floating Notification Toast (Full multi-line sentence, zero truncation, crystal clear in light and dark mode) */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] sm:bottom-6 right-3 sm:right-6 z-[120] bg-white dark:bg-slate-900 border-2 border-sky-200 dark:border-sky-400/50 text-slate-900 dark:text-white px-4 py-3 rounded-2xl shadow-xl shadow-slate-950/15 dark:shadow-2xl dark:shadow-slate-950/70 text-xs sm:text-sm font-semibold flex items-start gap-3 animate-in slide-in-from-bottom-5 duration-200 max-w-[94vw] sm:max-w-md w-auto backdrop-blur-md"
        >
          <div className="p-1.5 rounded-xl bg-sky-50 dark:bg-sky-500/20 text-sky-700 dark:text-sky-300 shrink-0 mt-0.5 border border-sky-200 dark:border-sky-500/30">
            <Sparkles className="w-4 h-4 text-sky-700 dark:text-sky-300" />
          </div>
          <div className="flex-1 min-w-0 pr-1">
            <p className="text-slate-900 dark:text-white text-xs sm:text-sm font-bold leading-relaxed break-words whitespace-normal">
              {toastMessage}
            </p>
          </div>
          <button
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-slate-800 dark:hover:text-white p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0 -mr-1 -mt-1 cursor-pointer"
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

      {/*  PWA Universal Mobile & Desktop Install Prompt (jamais pendant un cours : rien ne doit distraire l'élève) */}
      {activeView !== 'tutor' && <PwaInstallPromptModal />}
    </div>

  );
}
export default App;
