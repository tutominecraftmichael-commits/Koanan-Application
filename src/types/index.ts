export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 = Lundi, 1 = Mardi, ... 6 = Dimanche

export const DAYS_OF_WEEK = [
  { id: 0, label: 'Lundi', short: 'Lun' },
  { id: 1, label: 'Mardi', short: 'Mar' },
  { id: 2, label: 'Mercredi', short: 'Mer' },
  { id: 3, label: 'Jeudi', short: 'Jeu' },
  { id: 4, label: 'Vendredi', short: 'Ven' },
  { id: 5, label: 'Samedi', short: 'Sam' },
  { id: 6, label: 'Dimanche', short: 'Dim' },
] as const;

export type CourseType = 'lecture' | 'tutorial' | 'lab' | 'exam' | 'project' | 'other';

export const COURSE_TYPE_LABELS: Record<CourseType, { label: string; badge: string }> = {
  lecture: { label: 'Cours Magistral (CM)', badge: 'CM' },
  tutorial: { label: 'Travaux Dirigés (TD)', badge: 'TD' },
  lab: { label: 'Travaux Pratiques (TP)', badge: 'TP' },
  exam: { label: 'Partiel / Examen', badge: 'EXAM' },
  project: { label: 'Projet de groupe', badge: 'PROJET' },
  other: { label: 'Autre engagement', badge: 'AUTRE' },
};

export type EvaluationType = 'examen' | 'devoir' | 'rattrapage';

export interface Subject {
  id: string;
  name: string;
  code?: string;
  color: string;
  coefficient: number; // 1 to 10
  difficulty: 1 | 2 | 3 | 4 | 5; // 1 = très facile, 5 = très complexe
  targetGrade: number; // e.g. 16/20
  currentGrade?: number;
  examDate?: string; // YYYY-MM-DD
  examType?: EvaluationType; // Examen final vs Devoir Surveillé (DS) vs Rattrapage
  examTime?: string; // e.g. "08:30"
  topics?: string[];
}

export interface ClassSlot {
  id: string;
  subjectId: string;
  dayOfWeek: DayOfWeek;
  startTime: string; // "08:30"
  endTime: string; // "10:30"
  type: CourseType;
  room?: string;
  professor?: string;
}

export type Chronotype = 'morning' | 'afternoon' | 'evening' | 'night';
export type StudyPacing = 
  | 'pomodoro' 
  | 'active_recall_spaced' 
  | 'feynman' 
  | 'time_blocking' 
  | 'two_minutes_rule'
  | 'spaced_repetition'
  | 'active_recall'
  | 'balanced';

export interface BlockedTimeSlot {
  id: string;
  label: string;
  dayOfWeek: DayOfWeek;
  startTime: string;
  endTime: string;
}

export interface StudyPreferences {
  studentName: string;
  academicLevel: string;
  targetDailyStudyMinutes: number;
  chronotype: Chronotype;
  pacing: StudyPacing;
  combinedPacings?: StudyPacing[]; // Option KONAN PRO : jusqu'à 3 méthodes combinées simultanément
  focusBlockDuration: number;
  breakBlockDuration: number;
  weekendStudyEnabled: boolean;
  maxSessionsPerDay: number;
  blockedSlots: BlockedTimeSlot[];
}

export type SessionType = 
  | 'spaced_review' 
  | 'exercises' 
  | 'deep_summary' 
  | 'flashcards' 
  | 'exam_simulation' 
  | 'consolidation';

export interface StudySession {
  id: string;
  subjectId: string;
  dayOfWeek: DayOfWeek;
  date: string;
  startTime: string;
  endTime: string;
  durationMinutes: number;
  type: SessionType;
  title: string;
  description: string;
  objectives: string[];
  priority: 'urgent' | 'high' | 'medium' | 'maintenance';
  energyRequired: 'high' | 'medium' | 'low';
  completed: boolean;
  completedAt?: string;
  actualDurationMinutes?: number;
  rating?: 1 | 2 | 3 | 4 | 5;
  reflectionNotes?: string;
  pacingMethod?: StudyPacing; // Méthode spécifique appliquée à cette séance (ex: 'feynman', 'time_blocking', 'pomodoro')
  // Dynamic Exam / Devoir adaptation fields
  isExamPrep?: boolean;
  examDaysRemaining?: number;
  examType?: EvaluationType;
  // Adaptive daily catch-up fields (ephemeral for today only)
  isRescheduledToday?: boolean;
  originalStartTime?: string;
  originalEndTime?: string;
  rescheduledDate?: string; // YYYY-MM-DD
  rescheduledReason?: string;
}

export interface StudyLog {
  id: string;
  sessionId?: string;
  subjectId: string;
  date: string;
  durationMinutes: number;
  satisfactionRating: 1 | 2 | 3 | 4 | 5;
  summary: string;
  createdAt: string;
}

export type PlanTier = 'free' | 'pro' | 'plus';

export interface UserAccount {
  name: string;
  email: string;
  avatar: string;
  googleId: string;
  academicLevel: string;
  phoneNumber?: string;
  countryCode?: string;
  isLoggedIn: boolean;
  isDemo?: boolean;
  planTier?: PlanTier;
  lastSyncedAt: string;
}

export interface UserStreak {
  currentStreak: number;
  bestStreak: number;
  lastCelebratedDate?: string; // YYYY-MM-DD
  completedDates: string[]; // ["2026-09-13", ...]
  freezesAvailable: number; // max 3
  freezeDates: string[]; // dates when a freeze was used to protect flame
  lastFreezeUsedAt?: string; // ISO timestamp when a freeze was last consumed
}

export type ActiveAppView = 
  | 'landing' 
  | 'auth'
  | 'upload-schedule'
  | 'dashboard' 
  | 'schedule' 
  | 'subjects' 
  | 'planner' 
  | 'analytics';

export type AiAnalysisStep = 
  | 'idle'
  | 'reading_pdf'
  | 'extracting_grid'
  | 'semantic_weighting'
  | 'optimizing_study_plan'
  | 'completed';

export interface ExtractedSubjectCandidate {
  id: string;
  name: string;
  code?: string;
  color: string;
  coefficient: number;
  difficulty: 1 | 2 | 3 | 4 | 5;
  targetGrade: number;
  examDate?: string;
  topics?: string[];
}

export interface ExtractedClassCandidate {
  id: string;
  subjectId: string;
  subjectName: string;
  dayOfWeek: DayOfWeek;
  startTime: string;
  endTime: string;
  type: CourseType;
  room?: string;
  professor?: string;
}

export interface ExtractedPdfSchedule {
  fileName: string;
  fileSize: number;
  academicTrack: string;
  detectedConfidence: number; // 0 to 100%
  subjects: ExtractedSubjectCandidate[];
  slots: ExtractedClassCandidate[];
  totalWeeklyClassHours: number;
  recommendedStudyHours: number;
  summaryNote: string;
  rawText?: string;
}

