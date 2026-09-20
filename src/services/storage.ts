import type { Subject, ClassSlot, StudyPreferences, StudySession, StudyLog, UserAccount, UserStreak, PlanTier } from '../types';
import { ACADEMIC_PRESETS, DEFAULT_PREFERENCES } from '../lib/presets';
import { generateId } from '../lib/utils';
import { generateOptimizedStudyPlan } from './plannerAlgorithm';

const LEGACY_STORAGE_KEY = 'konan_ai_academic_state_v1';
const USER_STORAGE_PREFIX = 'konan_ai_user_';
const DEMO_STORAGE_KEY = 'konan_ai_demo_state_v1';
const ACTIVE_SESSION_KEY = 'konan_ai_active_session_v1';

export interface AppState {
  studentName: string;
  academicLevel: string;
  userAccount?: UserAccount;
  subjects: Subject[];
  classSlots: ClassSlot[];
  preferences: StudyPreferences;
  studySessions: StudySession[];
  logs: StudyLog[];
  completedOnboarding: boolean;
  isDemoMode?: boolean;
  streak?: UserStreak;
  planTier?: PlanTier;
  cycleCompletedDate?: string; // YYYY-MM-DD
}

/**
 * Creates an empty, pristine state for a newly registered real user.
 * ZERO demo classes, ZERO demo subjects, ZERO demo logs.
 */
export function createEmptyUserState(
  user: UserAccount, 
  preferencesOverrides?: Partial<StudyPreferences>
): AppState {
  const preferences: StudyPreferences = {
    ...DEFAULT_PREFERENCES,
    studentName: user.name,
    academicLevel: user.academicLevel || 'Licence Universitaire',
    ...preferencesOverrides,
  };

  return {
    studentName: user.name,
    academicLevel: user.academicLevel || 'Licence Universitaire',
    userAccount: {
      ...user,
      isDemo: false,
      isLoggedIn: true,
      planTier: user.planTier || 'free',
    },
    subjects: [],
    classSlots: [],
    preferences,
    studySessions: [],
    logs: [],
    completedOnboarding: false,
    isDemoMode: false,
    planTier: user.planTier || 'free',
    streak: {
      currentStreak: 0,
      bestStreak: 0,
      completedDates: [],
      freezesAvailable: 3,
      freezeDates: [],
    },
  };
}

/**
 * Creates the simulated demo state based on the pre-filled preset (Alexandre Étudiant).
 */
export function createInitialStateFromPreset(presetId: string = 'cs-engineering'): AppState {
  const preset = ACADEMIC_PRESETS.find(p => p.id === presetId) || ACADEMIC_PRESETS[0];

  const subjects: Subject[] = preset.subjects.map(s => ({
    ...s,
    id: generateId(),
  }));

  const classSlots: ClassSlot[] = preset.defaultClasses.map(c => ({
    id: generateId(),
    subjectId: subjects[c.subjectIndex]?.id || subjects[0].id,
    dayOfWeek: c.dayOfWeek,
    startTime: c.startTime,
    endTime: c.endTime,
    type: c.type,
    room: c.room,
  }));

  const preferences: StudyPreferences = {
    ...DEFAULT_PREFERENCES,
    studentName: 'Alexandre Étudiant',
    academicLevel: preset.level,
  };

  const studySessions = generateOptimizedStudyPlan(subjects, classSlots, preferences);

  const logs: StudyLog[] = [];

  return {
    studentName: preferences.studentName,
    academicLevel: preset.level,
    planTier: 'pro',
    userAccount: {
      name: 'Alexandre Étudiant (Compte Démo)',
      email: 'alexandre.universite@etudiant.univ.fr',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
      googleId: 'google-demo',
      academicLevel: preset.level,
      isLoggedIn: true,
      isDemo: true,
      planTier: 'pro',
      lastSyncedAt: new Date().toISOString(),
    },
    subjects,
    classSlots,
    preferences,
    studySessions,
    logs,
    completedOnboarding: true,
    isDemoMode: true,
    streak: {
      currentStreak: 0,
      bestStreak: 0,
      completedDates: [],
      freezesAvailable: 3,
      freezeDates: [],
    },
  };
}

/**
 * Loads the state for a specific authenticated user.
 */
export function loadUserState(uid: string, fallbackUser?: UserAccount): AppState {
  try {
    const raw = localStorage.getItem(`${USER_STORAGE_PREFIX}${uid}`);
    if (raw) {
      const parsed = JSON.parse(raw);
      const planTier = parsed.planTier || parsed.userAccount?.planTier || 'free';
      const hasCompleted = Array.isArray(parsed.studySessions) && parsed.studySessions.some((s: StudySession) => s.completed);
      return {
        ...parsed,
        logs: hasCompleted ? (parsed.logs || []) : [],
        planTier,
        userAccount: parsed.userAccount ? {
          ...parsed.userAccount,
          planTier,
        } : undefined,
        isDemoMode: false,
      };
    }
  } catch (err) {
    console.warn(`Failed to load state for user ${uid}, creating empty state`, err);
  }

  const user = fallbackUser || {
    name: 'Étudiant',
    email: '',
    avatar: '',
    googleId: uid,
    academicLevel: 'Licence Universitaire',
    isLoggedIn: true,
    isDemo: false,
    lastSyncedAt: new Date().toISOString(),
  };

  const emptyState = createEmptyUserState(user);
  try {
    localStorage.setItem(`${USER_STORAGE_PREFIX}${uid}`, JSON.stringify(emptyState));
  } catch {}
  return emptyState;
}

import { syncUserStateToCloud, loadUserStateFromCloud } from '../lib/firebase';

/**
 * Saves a real user's private state to localStorage and syncs to Cloud Firestore
 * so all devices (PC, mobile, tablet) share the exact same timetable and subjects.
 */
export function saveUserState(uid: string, state: AppState): void {
  try {
    localStorage.setItem(`${USER_STORAGE_PREFIX}${uid}`, JSON.stringify(state));
  } catch (err) {
    console.error(`Failed to persist user state for ${uid}`, err);
  }

  // Cross-device Cloud Sync
  if (!state.isDemoMode && uid && uid !== 'google-demo') {
    syncUserStateToCloud(uid, {
      studentName: state.studentName,
      academicLevel: state.academicLevel,
      planTier: state.planTier || 'free',
      subjects: state.subjects,
      classSlots: state.classSlots,
      preferences: state.preferences,
      studySessions: state.studySessions,
      logs: state.logs,
      completedOnboarding: state.completedOnboarding,
      userAccount: state.userAccount,
    }).catch(() => {});
  }
}

/**
 * Fetches user data from Cloud Firestore and merges into local state.
 * Enables seamless multi-device synchronization (Wave8, any smartphone, tablet, or PC).
 */
export async function fetchAndMergeCloudState(uid: string, currentState: AppState): Promise<AppState> {
  if (!uid || uid === 'google-demo') return currentState;
  try {
    const cloudData = await loadUserStateFromCloud(uid);

    const hasCloudSubjects = Array.isArray(cloudData?.subjects) && cloudData.subjects.length > 0;
    const hasLocalSubjects = Array.isArray(currentState.subjects) && currentState.subjects.length > 0;

    // Case 1: Cloud already has subjects saved from another device (e.g. Wave8, other phone or PC)
    if (hasCloudSubjects) {
      const mergedSubjects: Subject[] = cloudData.subjects;
      const mergedClassSlots: ClassSlot[] = Array.isArray(cloudData.classSlots) ? cloudData.classSlots : currentState.classSlots;
      const mergedPreferences: StudyPreferences = cloudData.preferences
        ? { ...currentState.preferences, ...cloudData.preferences }
        : currentState.preferences;

      let mergedStudySessions: StudySession[] = Array.isArray(cloudData.studySessions) && cloudData.studySessions.length > 0
        ? cloudData.studySessions
        : currentState.studySessions;

      // If study sessions are empty on cloud, generate them from the subjects and slots!
      if ((!mergedStudySessions || mergedStudySessions.length === 0) && mergedSubjects.length > 0) {
        mergedStudySessions = generateOptimizedStudyPlan(mergedSubjects, mergedClassSlots, mergedPreferences);
      }

      const merged: AppState = {
        ...currentState,
        studentName: cloudData.studentName || currentState.studentName,
        academicLevel: cloudData.academicLevel || currentState.academicLevel,
        planTier: cloudData.planTier || currentState.planTier || 'free',
        completedOnboarding: cloudData.completedOnboarding ?? true,
        subjects: mergedSubjects,
        classSlots: mergedClassSlots,
        preferences: mergedPreferences,
        studySessions: mergedStudySessions,
        logs: Array.isArray(cloudData.logs) ? cloudData.logs : currentState.logs,
        cycleCompletedDate: cloudData.cycleCompletedDate !== undefined ? cloudData.cycleCompletedDate : currentState.cycleCompletedDate,
        userAccount: currentState.userAccount ? {
          ...currentState.userAccount,
          planTier: cloudData.planTier || currentState.planTier || 'free',
          name: cloudData.studentName || currentState.userAccount.name,
        } : undefined,
      };

      try {
        localStorage.setItem(`${USER_STORAGE_PREFIX}${uid}`, JSON.stringify(merged));
      } catch {}

      return merged;
    }

    // Case 2: Cloud has no subjects, but THIS device (e.g. the phone that created the planning) has subjects
    if (!hasCloudSubjects && hasLocalSubjects) {
      console.log(`[Sync] Pushing timetable from current device to Cloud Firestore for user ${uid}`);
      saveUserState(uid, currentState);
      return currentState;
    }

    // Case 3: Cloud has profile meta
    if (cloudData && (cloudData.studentName || cloudData.academicLevel || cloudData.planTier)) {
      const merged: AppState = {
        ...currentState,
        studentName: cloudData.studentName || currentState.studentName,
        academicLevel: cloudData.academicLevel || currentState.academicLevel,
        planTier: cloudData.planTier || currentState.planTier || 'free',
        userAccount: currentState.userAccount ? {
          ...currentState.userAccount,
          planTier: cloudData.planTier || currentState.planTier || 'free',
          name: cloudData.studentName || currentState.userAccount.name,
        } : undefined,
      };
      try {
        localStorage.setItem(`${USER_STORAGE_PREFIX}${uid}`, JSON.stringify(merged));
      } catch {}
      return merged;
    }
  } catch (err) {
    console.warn('Could not merge cloud state:', err);
  }
  return currentState;
}

/**
 * Loads Demo state.
 */
export function loadDemoState(): AppState {
  try {
    const raw = localStorage.getItem(DEMO_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.subjects && parsed.subjects.length > 0) {
        const hasCompleted = Array.isArray(parsed.studySessions) && parsed.studySessions.some((s: StudySession) => s.completed);
        return { 
          ...parsed, 
          logs: hasCompleted ? (parsed.logs || []) : [],
          isDemoMode: true 
        };
      }
    }
  } catch (err) {
    console.warn('Failed to load demo state, falling back to fresh demo preset', err);
  }
  return createInitialStateFromPreset('cs-engineering');
}

/**
 * Saves Demo state.
 */
export function saveDemoState(state: AppState): void {
  try {
    localStorage.setItem(DEMO_STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error('Failed to save demo state', err);
  }
}

/**
 * Active Session management (keeps track of who is logged in or if demo is active)
 */
export interface ActiveSession {
  uid?: string;
  isDemo: boolean;
  email?: string;
  name?: string;
  avatar?: string;
  academicLevel?: string;
}

export function getActiveSession(): ActiveSession | null {
  try {
    const raw = localStorage.getItem(ACTIVE_SESSION_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.warn('Error reading active session', e);
  }
  return null;
}

export function setActiveSession(session: ActiveSession | null): void {
  try {
    if (session) {
      localStorage.setItem(ACTIVE_SESSION_KEY, JSON.stringify(session));
    } else {
      localStorage.removeItem(ACTIVE_SESSION_KEY);
    }
  } catch (e) {
    console.error('Error writing active session', e);
  }
}

/**
 * Backward compatibility functions
 */
export function loadAppState(): AppState {
  const session = getActiveSession();
  if (session && !session.isDemo && session.uid) {
    return loadUserState(session.uid);
  }
  if (session && session.isDemo) {
    return loadDemoState();
  }

  // If no session exists, the app is in unauthenticated Guest state
  const demo = loadDemoState();
  return {
    ...demo,
    userAccount: {
      ...demo.userAccount!,
      isLoggedIn: false,
    },
    isDemoMode: false,
  };
}

export function saveAppState(state: AppState): void {
  if (state.userAccount?.isLoggedIn && !state.isDemoMode && state.userAccount.googleId) {
    saveUserState(state.userAccount.googleId, state);
  } else if (state.isDemoMode) {
    saveDemoState(state);
  } else {
    try {
      localStorage.setItem(LEGACY_STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Could not save legacy state', e);
    }
  }
}

export function exportStateToJson(state: AppState): string {
  return JSON.stringify(state, null, 2);
}

export function importStateFromJson(jsonString: string): AppState | null {
  try {
    const parsed = JSON.parse(jsonString);
    if (parsed.subjects && Array.isArray(parsed.subjects)) {
      saveAppState(parsed);
      return parsed;
    }
  } catch (err) {
    console.error('Invalid JSON structure for import', err);
  }
  return null;
}

/**
 * Generates an instant, portable cross-device transfer code (Mobile ➔ PC).
 * Enables instantaneous sync without waiting for cloud database provisioning.
 */
export function generateSyncCode(state: AppState): string {
  try {
    const payload = {
      v: 1,
      t: new Date().toISOString(),
      studentName: state.studentName,
      academicLevel: state.academicLevel,
      planTier: state.planTier || 'free',
      subjects: state.subjects || [],
      classSlots: state.classSlots || [],
      preferences: state.preferences || DEFAULT_PREFERENCES,
      studySessions: state.studySessions || [],
      logs: state.logs || [],
      completedOnboarding: state.completedOnboarding,
    };
    const json = JSON.stringify(payload);
    // Safe UTF-8 Base64 encoding
    const base64 = btoa(
      encodeURIComponent(json).replace(/%([0-9A-F]{2})/g, (_, p1) =>
        String.fromCharCode(parseInt(p1, 16))
      )
    );
    return `KONAN-SYNC-${base64}`;
  } catch (err) {
    console.error('Failed to generate sync code:', err);
    return '';
  }
}

/**
 * Imports an instant sync code generated from another device (e.g. phone)
 * and reconstructs the complete student environment on this device (e.g. PC).
 */
export function importSyncCode(rawInput: string, currentAccount?: UserAccount): AppState | null {
  try {
    const input = rawInput.trim();
    let data: any = null;

    if (input.startsWith('KONAN-SYNC-')) {
      const base64 = input.replace(/^KONAN-SYNC-/, '');
      const decoded = decodeURIComponent(
        Array.prototype.map
          .call(atob(base64), (c: string) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      data = JSON.parse(decoded);
    } else if (input.startsWith('{')) {
      // Fallback: direct JSON paste
      data = JSON.parse(input);
    }

    if (!data || !Array.isArray(data.subjects)) {
      return null;
    }

    const importedState: AppState = {
      studentName: data.studentName || currentAccount?.name || 'Étudiant',
      academicLevel: data.academicLevel || currentAccount?.academicLevel || 'Licence Universitaire',
      planTier: data.planTier || currentAccount?.planTier || 'free',
      subjects: data.subjects || [],
      classSlots: data.classSlots || [],
      preferences: data.preferences || DEFAULT_PREFERENCES,
      studySessions: data.studySessions || [],
      logs: data.logs || [],
      completedOnboarding: data.completedOnboarding ?? (data.subjects.length > 0),
      isDemoMode: false,
      userAccount: currentAccount
        ? {
            ...currentAccount,
            name: data.studentName || currentAccount.name,
            academicLevel: data.academicLevel || currentAccount.academicLevel,
            planTier: data.planTier || currentAccount.planTier || 'free',
          }
        : undefined,
    };

    return importedState;
  } catch (err) {
    console.error('Failed to import sync code:', err);
    return null;
  }
}

