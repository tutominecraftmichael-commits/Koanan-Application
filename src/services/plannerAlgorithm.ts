import type {
  Subject,
  ClassSlot,
  StudyPreferences,
  StudySession,
  SessionType,
  DayOfWeek
} from '../types';
import { parseTimeToMinutes, minutesToTimeString, generateId, getDaysRemaining, getDaysRemainingFrom, isNonAcademicSubject, stripWeekAnnotations, normalizeSubjectKey } from '../lib/utils';
import { getPacingStrategy } from '../lib/pacingStrategies';
import { isExamPrepOpenFor, withoutPausedExamPrep } from '../lib/featureFlags';
import { EXAM_PREP_DURATIONS, EXAM_PREP_HORIZON_DAYS, examPrepModeFor, examPrepSessionText } from '../lib/exam/examPrepRules';
import { validateBackendPermissions } from '../lib/subscriptionGuard';
import { goalPlanningFactor } from '../lib/goalPlanning';
import type { PlanTier } from '../types';

interface TimeRange {
  start: number; // minutes from 00:00
  end: number;
}

interface AvailableSlot {
  dayOfWeek: DayOfWeek;
  start: number;
  end: number;
  duration: number; // minutes
}

/**
 * Où en est l'élève dans les cours KONAN d'une matière (calculé à part, voir subjectWorkload.ts) :
 * - hasCourse : KONAN a des mini-leçons pour cette matière et cette classe ;
 * - newLessonsLeft : mini-leçons pas encore faites ;
 * - lastStudiedDaysAgo : il y a combien de jours la matière a été travaillée (null : jamais).
 */
export interface SubjectWorkload {
  hasCourse: boolean;
  newLessonsLeft: number;
  lastStudiedDaysAgo?: number | null;
}
export type SubjectWorkloadMap = Record<string, SubjectWorkload>; // clé : identifiant de la matière de l'élève

/**
 * Progression connue de l'élève, tenue à jour par l'application (App.tsx) : tous les endroits qui refont le
 * planning (changement de semaine, matières, préférences…) en profitent sans rien changer chez eux.
 */
let currentWorkload: SubjectWorkloadMap = {};
export function setPlannerWorkload(map: SubjectWorkloadMap | null | undefined): void {
  currentWorkload = map || {};
}
export function getPlannerWorkload(): SubjectWorkloadMap {
  return currentWorkload;
}

/** Version des règles du planning : un planning fait avec une version plus ancienne est refait une fois. */
export const PLANNER_VERSION = 3;

/**
 * Nettoie et fusionne automatiquement les matières et créneaux fixes pollués par des suffixes
 * multi-semaines (ex: "Macroéconomie 3 — semaines 1", "Macroéconomie 3 — semaines 4", etc.)
 * ou des doublons de matières, afin qu'une même discipline n'apparaisse qu'une seule fois.
 */
export function sanitizePollutedScheduleState(
  rawSubjects: Subject[],
  rawClassSlots: ClassSlot[],
  rawStudySessions: StudySession[] = []
): {
  subjects: Subject[];
  classSlots: ClassSlot[];
  studySessions: StudySession[];
  idMap: Map<string, string>;
  hadPollution: boolean;
} {
  let hadPollution = false;
  const canonicalByKey = new Map<string, Subject>();
  const idMap = new Map<string, string>();

  for (const sub of rawSubjects || []) {
    const cleanName = stripWeekAnnotations(sub.name || '');
    if (cleanName !== (sub.name || '').trim()) {
      hadPollution = true;
    }
    if (!cleanName || isNonAcademicSubject(cleanName)) {
      hadPollution = true;
      continue;
    }
    const key = normalizeSubjectKey(cleanName);
    if (!key) {
      hadPollution = true;
      continue;
    }
    const existing = canonicalByKey.get(key);
    if (existing) {
      hadPollution = true;
      idMap.set(sub.id, existing.id);
      if ((sub.coefficient || 0) > (existing.coefficient || 0)) {
        existing.coefficient = sub.coefficient;
      }
      if ((sub.difficulty || 0) > (existing.difficulty || 0)) {
        existing.difficulty = sub.difficulty;
      }
      if (!existing.examDate && sub.examDate) {
        existing.examDate = sub.examDate;
        existing.examType = sub.examType;
        existing.examTime = sub.examTime;
        existing.examChapterIds = sub.examChapterIds;
      }
      if ((!existing.topics || existing.topics.length === 0) && sub.topics && sub.topics.length > 0) {
        existing.topics = sub.topics;
      }
      if (!existing.code && sub.code) {
        existing.code = sub.code;
      }
    } else {
      const canonicalSub: Subject = {
        ...sub,
        name: cleanName,
      };
      canonicalByKey.set(key, canonicalSub);
      idMap.set(sub.id, canonicalSub.id);
    }
  }

  const cleanSubjects = Array.from(canonicalByKey.values());
  const validSubjectIds = new Set(cleanSubjects.map(s => s.id));

  // Nettoyage et déduplication des créneaux de cours fixes (Source de Vérité)
  const cleanClassSlots: ClassSlot[] = [];
  for (const slot of rawClassSlots || []) {
    const mappedSubId = idMap.get(slot.subjectId) || slot.subjectId;
    if (!validSubjectIds.has(mappedSubId)) {
      hadPollution = true;
      continue;
    }
    if (mappedSubId !== slot.subjectId) {
      hadPollution = true;
    }
    const curStart = parseTimeToMinutes(slot.startTime);
    const curEnd = parseTimeToMinutes(slot.endTime);

    const duplicate = cleanClassSlots.find(existing => {
      if (existing.dayOfWeek !== slot.dayOfWeek || existing.subjectId !== mappedSubId) return false;
      const extStart = parseTimeToMinutes(existing.startTime);
      const extEnd = parseTimeToMinutes(existing.endTime);
      return Math.abs(curStart - extStart) <= 15 && Math.abs(curEnd - extEnd) <= 15;
    });

    if (duplicate) {
      hadPollution = true;
      if (!duplicate.room && slot.room) duplicate.room = slot.room;
      if (!duplicate.professor && slot.professor) duplicate.professor = slot.professor;
      continue;
    }

    cleanClassSlots.push({
      ...slot,
      subjectId: mappedSubId,
    });
  }

  // Nettoyage des sessions d'étude existantes
  const cleanStudySessions: StudySession[] = [];
  for (const sess of rawStudySessions || []) {
    const mappedSubId = idMap.get(sess.subjectId) || sess.subjectId;
    if (sess.subjectId && !validSubjectIds.has(mappedSubId)) {
      hadPollution = true;
      continue;
    }
    const cleanTitle = stripWeekAnnotations(sess.title || '');
    if (cleanTitle !== (sess.title || '').trim() || mappedSubId !== sess.subjectId) {
      hadPollution = true;
    }
    cleanStudySessions.push({
      ...sess,
      subjectId: mappedSubId,
      title: cleanTitle,
    });
  }

  return {
    subjects: cleanSubjects,
    classSlots: cleanClassSlots,
    studySessions: cleanStudySessions,
    idMap,
    hadPollution,
  };
}

/**
 * Famille cognitive d'une matière pour favoriser l'alternance (Interleaving neurologique) :
 * - 'quant' : Maths, Algèbre, Analyse, Microéconomie, Macroéconomie, Comptabilité, Finance, Statistique, Physique
 * - 'tech'  : Algorithmique, Réseaux, Informatique, SVT, Chimie
 * - 'verbal': Droit, Management, OGE, Marketing, Français, Philosophie, Histoire-Géo, Anglais, Communication
 */
function getCognitiveDomain(name: string): 'quant' | 'tech' | 'verbal' {
  const lower = name.toLowerCase();
  if (/(math|algebr|analys|micro|macro|econom|compta|financ|stat|physiq|logiq)/i.test(lower)) {
    return 'quant';
  }
  if (/(algo|reseau|réseau|info|web|system|systèm|programm|svt|chimie|biolog)/i.test(lower)) {
    return 'tech';
  }
  return 'verbal';
}

/**
 * Révisions espacées d'une matière dont toutes les mini-leçons sont faites, selon la méthode choisie :
 * - Rappel actif & révision espacée : 3 révisions, de plus en plus espacées (J+1, J+3, J+7) ;
 * - autres méthodes : 2 révisions par semaine, à 2 ou 3 jours d'écart.
 */
export function reviewRhythmFor(pacing?: string): { perWeek: number; gaps: number[] } {
  return pacing === 'active_recall_spaced' ? { perWeek: 3, gaps: [1, 2, 4] } : { perWeek: 2, gaps: [2, 3] };
}

/** Mini-leçons faites pendant une séance de cette durée (mêmes repères que les séances guidées). */
function lessonsPerSession(minutes: number): number {
  if (minutes >= 75) return 6;
  if (minutes >= 45) return 4;
  return 3;
}

export function generateOptimizedStudyPlan(
  subjects: Subject[],
  classes: ClassSlot[],
  preferences: StudyPreferences,
  userOrTier?: PlanTier | { tier?: PlanTier; planTier?: PlanTier; isPro?: boolean },
  options: { workload?: SubjectWorkloadMap; now?: Date } = {}
): StudySession[] {
  const workload = options.workload ?? currentWorkload;
  // 0. Sanctuarisation anti-doublons : purge les suffixes "— semaines X" et fusionne les matières identiques
  const sanitized = sanitizePollutedScheduleState(subjects, classes);
  subjects = sanitized.subjects;
  classes = sanitized.classSlots;

  // Préparation aux devoirs/examens ouverte seulement pour certaines classes (2nde A, 2nde C) :
  // ailleurs, les dates d'épreuve sont ignorées
  const examGrade = preferences.gradeLevel || preferences.academicLevel;
  subjects = withoutPausedExamPrep(subjects, examGrade, preferences.country);

  // RÈGLE STRICTE : Exclure systématiquement toute matière non révisable (EPS, Sport, Coaching, devoirs, permanence)
  const revisableSubjects = subjects.filter(sub => !isNonAcademicSubject(sub.name));
  if (revisableSubjects.length === 0) return [];

  // Contrôle de sécurité strict Backend / Serveur : vérifie les permissions de palier
  const userContext = typeof userOrTier === 'string'
    ? { planTier: userOrTier }
    : userOrTier;

  const resolvedTier: PlanTier = (userContext?.planTier || (userContext as any)?.tier) ?? 'free';
  // Fonction devoirs/examens : réservée à Pro/Plus, et ouverte seulement pour certaines classes
  const isExamFeatureAllowed = (resolvedTier === 'pro' || resolvedTier === 'plus') && isExamPrepOpenFor(examGrade, preferences.country);

  let effectivePreferences = preferences;
  if (userContext) {
    try {
      validateBackendPermissions(userContext, 'GENERATE_SCHEDULE', { preferences });
    } catch {
      // Repli sécurisé vers une méthode autorisée sans jamais faire crasher l'UI React
      effectivePreferences = {
        ...preferences,
        pacing: 'pomodoro',
        combinedPacings: ['pomodoro']
      };
    }
  }

  // Si le modèle est Gratuit (Free) : dissolution stricte des méthodes Pro et du multi-méthodes
  if (resolvedTier === 'free') {
    const isPro = effectivePreferences.pacing === 'feynman' || effectivePreferences.pacing === 'time_blocking';
    const safePacing = isPro ? 'pomodoro' : effectivePreferences.pacing;
    effectivePreferences = {
      ...effectivePreferences,
      pacing: safePacing,
      focusBlockDuration: safePacing === 'pomodoro' ? 25 : effectivePreferences.focusBlockDuration || 25,
      breakBlockDuration: safePacing === 'pomodoro' ? 5 : effectivePreferences.breakBlockDuration || 5,
      combinedPacings: [safePacing],
    };
  }

  // Pacing strategy definition (Pomodoro, Active Recall & Spaced, Feynman, Time Blocking, 2-Minutes Rule)
  const pacingStrategy = getPacingStrategy(effectivePreferences.pacing);
  const sessionBlock = effectivePreferences.focusBlockDuration || pacingStrategy.focusBlockDuration;
  const breakBlock = effectivePreferences.breakBlockDuration || pacingStrategy.breakBlockDuration;

  // Cartographie des cours fixes par matière (volume horaire hebdomadaire & jours d'enseignement)
  // Permet la synchronisation neurologique J+0 (consolidation synaptique) et J-1 (anticipation de cours/TD)
  const weeklyClassMinsBySubject = new Map<string, number>();
  const taughtDaysBySubject = new Map<string, Set<DayOfWeek>>();
  const classMinsByDay: Record<DayOfWeek, number> = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

  for (const c of classes) {
    const dur = Math.max(0, parseTimeToMinutes(c.endTime) - parseTimeToMinutes(c.startTime));
    classMinsByDay[c.dayOfWeek] = (classMinsByDay[c.dayOfWeek] || 0) + dur;
    if (c.subjectId) {
      weeklyClassMinsBySubject.set(c.subjectId, (weeklyClassMinsBySubject.get(c.subjectId) || 0) + dur);
      if (!taughtDaysBySubject.has(c.subjectId)) {
        taughtDaysBySubject.set(c.subjectId, new Set());
      }
      taughtDaysBySubject.get(c.subjectId)!.add(c.dayOfWeek);
    }
  }

  // 1. Calcul des scores neuro-académiques pondérés pour chaque matière
  const subjectScores = revisableSubjects.map(sub => {
    let examUrgencyFactor = 1.0;
    if (isExamFeatureAllowed && sub.examDate && sub.examType) {
      const daysUntilExam = getDaysRemaining(sub.examDate);
      if (daysUntilExam !== null) {
        if (daysUntilExam < 0) {
          examUrgencyFactor = 1.0;
        } else if (daysUntilExam <= 3) {
          examUrgencyFactor = 1.45;
        } else if (daysUntilExam <= 7) {
          examUrgencyFactor = 1.3;
        } else if (daysUntilExam <= 14) {
          examUrgencyFactor = 1.15;
        } else if (daysUntilExam <= 30) {
          examUrgencyFactor = 1.08;
        }
      }
    }

    // Prise en compte du volume horaire réel de la matière dans l'emploi du temps (fréquence des séances)
    const weeklyClassHours = (weeklyClassMinsBySubject.get(sub.id) || 120) / 60;
    const volumeFactor = Math.min(1.35, Math.max(0.85, 0.8 + (weeklyClassHours / 10)));

    // Formule combinant difficulté cognitive, coefficient, volume horaire et urgence d'évaluation
    // KONAN Plus (planning réglé sur l'objectif) : plus de séances là où l'écart note actuelle → note visée est grand.
    // Sans moyenne actuelle renseignée (currentGrade), le facteur vaut 1 : rien ne change.
    const goalFactor = goalPlanningFactor(sub.currentGrade, sub.targetGrade);
    const rawScore = (Math.pow(sub.difficulty, 1.3) * Math.pow(sub.coefficient, 1.2) * volumeFactor) * examUrgencyFactor * goalFactor;
    const w = workload[sub.id];
    const mode: 'new' | 'review' | 'free' = w?.hasCourse ? (w.newLessonsLeft > 0 ? 'new' : 'review') : 'free';
    return {
      subject: sub,
      normKey: normalizeSubjectKey(sub.name),
      domain: getCognitiveDomain(sub.name),
      taughtDays: taughtDaysBySubject.get(sub.id) || new Set<DayOfWeek>(),
      score: rawScore,
      goalFactor,
      targetSessions: 1, // Minimum 1 session garantie par matière pour être prêt sur tout le programme
      scheduledCount: 0,
      lastScheduledDay: -999,
      topicIndex: 0,
      mode,
      newLessonsLeft: w?.newLessonsLeft ?? 0,
      lastStudiedDaysAgo: w?.lastStudiedDaysAgo ?? null,
      /** Premier jour (en jours à partir d'aujourd'hui) où la matière peut revenir */
      nextAllowedAhead: 0,
      minGap: 1,
    };
  });

  const totalScore = subjectScores.reduce((acc, curr) => acc + curr.score, 0);

  // Déterminer les jours d'étude actifs
  const daysToSchedule: DayOfWeek[] = preferences.weekendStudyEnabled
    ? [0, 1, 2, 3, 4, 5, 6]
    : [0, 1, 2, 3, 4];

  // Objectif maximal de sessions par jour (plafond théorique sur journée libre)
  const targetSessionsPerDay = Math.min(
    preferences.maxSessionsPerDay || 4,
    Math.max(1, Math.round(preferences.targetDailyStudyMinutes / sessionBlock))
  );

  // Calcul réaliste de la capacité hebdomadaire selon la charge de cours de chaque jour (Anti-Burnout)
  const computeDayMaxSessions = (day: DayOfWeek): { maxSessions: number; maxMinutes: number } => {
    const classMins = classMinsByDay[day] || 0;
    // Journée lourde (>= 5h de cours, ex: 7h30-17h00 à l'université ou au lycée) :
    // Le cortex préfrontal a déjà absorbé 5h à 7h30 d'enseignement.
    // On limite à 1 bloc long (75m) ou 2 blocs moyens/courts (25-45m) pour consolider sans burn-out.
    if (classMins >= 300) {
      return {
        maxSessions: sessionBlock >= 60 ? 1 : Math.min(2, targetSessionsPerDay),
        maxMinutes: sessionBlock >= 60 ? 75 : 90,
      };
    }
    // Journée modérée (2h30 à 5h de cours, ex: demi-journée libre type Mercredi après-midi) :
    if (classMins >= 150) {
      return {
        maxSessions: sessionBlock >= 60 ? Math.min(2, targetSessionsPerDay) : Math.min(3, targetSessionsPerDay),
        maxMinutes: 150,
      };
    }
    // Journée libre ou très légère (< 2h30 de cours, ex: Samedi, Dimanche ou jour off) :
    return {
      maxSessions: Math.min(targetSessionsPerDay, sessionBlock >= 60 ? 3 : 4),
      maxMinutes: 225,
    };
  };

  const realisticWeeklyCapacity = daysToSchedule.reduce<number>((sum, d) => sum + computeDayMaxSessions(d).maxSessions, 0);
  const totalSessionsTarget = Math.max(revisableSubjects.length, realisticWeeklyCapacity);

  // Répartition proportionnelle et équilibrée des sessions cibles par matière :
  // - Chaque matière obtient au moins 1 séance (couverture à 100% pour éviter toute impasse aux évaluations) ;
  // - Aucune matière ne peut monopoliser la semaine (plafond à 3 séances/semaine si >= 5 matières) ;
  // - Jamais plus d'une séance de la même matière le même jour (sauf si l'étudiant n'a que 1 ou 2 matières).
  const review = reviewRhythmFor(effectivePreferences.pacing);
  const perSession = lessonsPerSession(sessionBlock);
  const onePerDay = revisableSubjects.length >= 3;
  const maxPerSubjectPerWeek = revisableSubjects.length >= 6 ? 3 : revisableSubjects.length >= 4 ? 4 : daysToSchedule.length;

  subjectScores.forEach(item => {
    const ratio = totalScore > 0 ? item.score / totalScore : 1 / revisableSubjects.length;
    const computed = Math.round(ratio * totalSessionsTarget);
    // KONAN Plus : une matière très en retard sur sa note visée (×1,5 et plus) peut avoir UNE séance de plus
    // par semaine ; une matière déjà au-dessus de sa note visée garde le minimum utile (2 au plus)
    const cap = item.goalFactor >= 1.5 ? maxPerSubjectPerWeek + 1 : item.goalFactor < 1 ? Math.min(2, maxPerSubjectPerWeek) : maxPerSubjectPerWeek;
    let target = Math.max(1, Math.min(cap, computed));
    if (item.mode === 'review') target = Math.min(target, review.perWeek);
    else if (item.mode === 'new') target = Math.min(target, Math.ceil(item.newLessonsLeft / perSession) + 1);
    if (onePerDay) target = Math.min(target, daysToSchedule.length);
    item.targetSessions = Math.max(1, target);
    // Écart minimal entre deux séances de la même matière (espacement d'Ebbinghaus : J+2 ou J+3)
    item.minGap = item.mode === 'review'
      ? review.gaps[0]
      : item.targetSessions <= 1
        ? 3
        : Math.max(2, Math.min(3, Math.floor(daysToSchedule.length / item.targetSessions)));
    if (item.mode === 'review' && item.lastStudiedDaysAgo !== null) {
      item.nextAllowedAhead = Math.max(0, review.gaps[0] - item.lastStudiedDaysAgo);
    }
  });

  // 2. Détection précise des créneaux libres par jour
  const dailyFreeSlots: Record<DayOfWeek, AvailableSlot[]> = {
    0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: []
  };

  daysToSchedule.forEach(day => {
    let dayStartMin = 480; // 08:00
    let dayEndMin = 1350;  // 22:30

    if (preferences.chronotype === 'morning') {
      dayStartMin = 420; // 07:00
      dayEndMin = 1290;  // 21:30
    } else if (preferences.chronotype === 'evening' || preferences.chronotype === 'night') {
      dayStartMin = 510; // 08:30
      dayEndMin = 1380;  // 23:00
    }

    if (day === 5 || day === 6) {
      dayStartMin = Math.max(dayStartMin, 540); // 09:00
      dayEndMin = Math.min(dayEndMin, 1320);     // 22:00
    }

    // RÈGLE STRICTE ANTI-SURMENAGE & PRÉSERVATION DE LA LUCIDITÉ (Validée par Christ Boni) :
    // Aucun créneau d'étude ni aucun rattrapage ne peut être généré à ou après 23h30 (1410 min).
    // Toute séance doit impérativement se terminer au plus tard à 23h30.
    dayEndMin = Math.min(dayEndMin, 1410);

    const busyIntervals: TimeRange[] = [];

    // Cours réels de l'emploi du temps (Source de Vérité) : sas de transition garanti (10 min avant, au moins 35 min après pour rentrer, se doucher, goûter sans étiquette superflue)
    classes
      .filter(c => c.dayOfWeek === day)
      .forEach(c => {
        const start = parseTimeToMinutes(c.startTime);
        const end = parseTimeToMinutes(c.endTime);
        busyIntervals.push({
          start: Math.max(0, start - 10),
          end: end + 35, // Au moins 35 minutes de sas incompressible après les cours
        });
      });

    // Protection physiologique de la pause méridienne (12:15 à 13:45) en semaine
    if (day <= 4) {
      busyIntervals.push({
        start: 735, // 12:15
        end: 825,   // 13:45
      });
    }

    // Créneaux personnels bloqués par l'étudiant
    (preferences.blockedSlots || [])
      .filter(b => b.dayOfWeek === day)
      .forEach(b => {
        busyIntervals.push({
          start: parseTimeToMinutes(b.startTime),
          end: parseTimeToMinutes(b.endTime)
        });
      });

    busyIntervals.sort((a, b) => a.start - b.start);

    // Fusion des créneaux occupés pour éviter tout chevauchement
    const mergedBusy: TimeRange[] = [];
    busyIntervals.forEach(curr => {
      if (mergedBusy.length === 0) {
        mergedBusy.push({ ...curr });
      } else {
        const prev = mergedBusy[mergedBusy.length - 1];
        if (curr.start <= prev.end) {
          prev.end = Math.max(prev.end, curr.end);
        } else {
          mergedBusy.push({ ...curr });
        }
      }
    });

    let currentPointer = dayStartMin;
    mergedBusy.forEach(busy => {
      if (busy.start > currentPointer) {
        const slotDuration = busy.start - currentPointer;
        if (slotDuration >= sessionBlock) {
          dailyFreeSlots[day].push({
            dayOfWeek: day,
            start: currentPointer,
            end: busy.start,
            duration: slotDuration,
          });
        }
      }
      currentPointer = Math.max(currentPointer, busy.end);
    });

    if (currentPointer < dayEndMin) {
      const slotDuration = dayEndMin - currentPointer;
      if (slotDuration >= sessionBlock) {
        dailyFreeSlots[day].push({
          dayOfWeek: day,
          start: currentPointer,
          end: dayEndMin,
          duration: slotDuration,
        });
      }
    }
  });

  // 3. Calcul de la date et de l'heure de référence
  const referenceDate = options.now ? new Date(options.now) : new Date();
  const currentDayIndex = (referenceDate.getDay() + 6) % 7; // 0 = Lundi, 6 = Dimanche
  const currentTimeMinutes = referenceDate.getHours() * 60 + referenceDate.getMinutes();

  const sessionTypeCycle: SessionType[] = [
    'spaced_review',
    'exercises',
    'deep_summary',
    'flashcards',
    'exercises',
    'consolidation'
  ];

  const generatedSessions: StudySession[] = [];
  const subjectPool = [...subjectScores];

  // 4. Planification jour par jour, dans l'ordre réel des jours à venir (aujourd'hui, demain…) :
  //    l'écart entre deux séances d'une même matière se compte en vrais jours.
  const chronologicalDays = [...daysToSchedule].sort((a, b) => ((a - currentDayIndex + 7) % 7) - ((b - currentDayIndex + 7) % 7));
  for (const day of chronologicalDays) {
    const rawSlots = dailyFreeSlots[day];
    if (!rawSlots || rawSlots.length === 0) continue;
    const ahead = (day - currentDayIndex + 7) % 7; // 0 = aujourd'hui

    // RÈGLE CRITIQUE ANTI-FAUX-RATTRAPAGE :
    // Pour aujourd'hui (ahead === 0), ne JAMAIS générer de nouvelles séances dans le passé (avant l'heure actuelle + 15 min),
    // sinon le moteur de rattrapage les considère immédiatement comme « manquées à 12:35 / 14:05 / 15:35 » et les empile toutes le soir !
    const minStartToday = ahead === 0 ? Math.ceil((currentTimeMinutes + 15) / 15) * 15 : 0;
    const slots = rawSlots
      .map(s => {
        if (ahead !== 0) return s;
        const clampedStart = Math.max(s.start, minStartToday);
        return {
          ...s,
          start: clampedStart,
          duration: Math.max(0, s.end - clampedStart),
        };
      })
      .filter(s => s.duration >= Math.min(25, sessionBlock));

    if (slots.length === 0) continue;

    // Budget cognitif adaptatif du jour selon la charge réelle de cours fixes (Anti-Burnout)
    const dayLimits = computeDayMaxSessions(day);
    let dayMaxSessions = dayLimits.maxSessions;
    let dayMaxMinutes = dayLimits.maxMinutes;
    // Si l'élève génère son planning le soir même (>= 18h30), on limite ce premier soir à 1 séance ciblée
    if (ahead === 0 && currentTimeMinutes >= 1110) {
      dayMaxSessions = Math.min(dayMaxSessions, 1);
      dayMaxMinutes = Math.min(dayMaxMinutes, 75);
    }

    // Priorisation intelligente des créneaux libres :
    // 1. Exploiter en priorité les vraies fenêtres libres en journée (08h30-17h30, ex: après-midi sans cours ou week-end)
    //    pour libérer les soirées et protéger le sommeil.
    // 2. Respecter le chronotype sans jamais empiler toute la charge après 20h30.
    const sortedSlots = [...slots].sort((a, b) => {
      if (preferences.chronotype === 'morning') {
        const aIsMorning = a.start < 780 ? 1 : 0;
        const bIsMorning = b.start < 780 ? 1 : 0;
        if (aIsMorning !== bIsMorning) return bIsMorning - aIsMorning;
      } else if (preferences.chronotype === 'evening' || preferences.chronotype === 'night') {
        // Favoriser la fin d'après-midi / début de soirée (16h30 - 20h30), mais préférer la journée à la nuit tardive (> 21h)
        const scoreWindow = (start: number) => (start >= 990 && start <= 1230 ? 2 : start < 990 ? 1 : 0);
        const diff = scoreWindow(b.start) - scoreWindow(a.start);
        if (diff !== 0) return diff;
      }
      return a.start - b.start;
    });

    // Calcul propre et net de la date locale sans décalage pour ce jour de la semaine
    const daysAhead = (day - currentDayIndex + 7) % 7;
    const sessionDate = new Date(referenceDate);
    sessionDate.setDate(referenceDate.getDate() + daysAhead);
    sessionDate.setHours(12, 0, 0, 0);
    const yyyy = sessionDate.getFullYear();
    const mm = String(sessionDate.getMonth() + 1).padStart(2, '0');
    const dd = String(sessionDate.getDate()).padStart(2, '0');
    const dateString = `${yyyy}-${mm}-${dd}`;

    let daySessionsCount = 0;
    let dayScheduledMinutes = 0;
    const scheduledSubjectsToday = new Set<string>();
    const scheduledNormKeysToday = new Set<string>();
    let lastSubjectToday: string | null = null;
    let lastDomainToday: 'quant' | 'tech' | 'verbal' | null = null;
    let lastEnergyToday: 'high' | 'medium' | 'low' | null = null;

    const tomorrowDay = ((day + 1) % 7) as DayOfWeek;
    const yesterdayDay = ((day + 6) % 7) as DayOfWeek;

    for (const slot of sortedSlots) {
      if (daySessionsCount >= dayMaxSessions || dayScheduledMinutes >= dayMaxMinutes) break;

      let slotCurrentStart = slot.start;
      let sessionsInThisSlot = 0;
      // Sur une journée avec plusieurs créneaux libres (ex. matin ET après-midi le week-end),
      // ne pas empiler plus de 2 séances d'affilée dans le même bloc continu.
      const maxPerContinuousSlot = sortedSlots.length >= 2 ? 2 : dayMaxSessions;

      while (
        slotCurrentStart + 20 <= slot.end &&
        daySessionsCount < dayMaxSessions &&
        dayScheduledMinutes < dayMaxMinutes &&
        sessionsInThisSlot < maxPerContinuousSlot
      ) {
        // Plafond horaire de fin de soirée en semaine chargée : après une journée de >= 5h de cours,
        // on n'entame pas une nouvelle séance de routine après 21h45 (1305 min) pour préserver le sommeil profond.
        if ((classMinsByDay[day] || 0) >= 300 && slotCurrentStart >= 1305) break;

        const isPrepToday = (item: (typeof subjectPool)[number]) => isExamFeatureAllowed
          && Boolean(item.subject.examDate && item.subject.examType)
          && examPrepModeFor(getDaysRemainingFrom(item.subject.examDate, sessionDate), item.subject) !== null;

        const canPlace = (item: (typeof subjectPool)[number], allowSecondToday: boolean): boolean => {
          const daysToExam = getDaysRemainingFrom(item.subject.examDate, sessionDate);
          if (daysToExam === 0) {
            const examMin = item.subject.examTime ? parseTimeToMinutes(item.subject.examTime) : 720;
            if (slotCurrentStart >= examMin) return false;
          }
          const prep = isPrepToday(item);
          const alreadyScheduledToday = scheduledSubjectsToday.has(item.subject.id) || scheduledNormKeysToday.has(item.normKey);
          if (alreadyScheduledToday) {
            // RÈGLE ABSOLUE DE DIVERSITÉ COGNITIVE :
            // Jamais deux fois la même matière le même jour (sauf si l'étudiant n'a que 1 ou 2 matières au total,
            // et même dans ce cas jamais deux séances consécutives).
            if (!allowSecondToday || prep || item.mode === 'review' || lastSubjectToday === item.subject.id) return false;
            return item.mode === 'free' || item.scheduledCount < item.targetSessions;
          }
          if (prep) return true;
          if (item.mode !== 'free' && item.scheduledCount >= item.targetSessions) return false;
          return ahead >= item.nextAllowedAhead;
        };

        // Score neurocognitif contextuel pour CE jour précis (Consolidation J+0/J+1, Anticipation J-1, Interleaving)
        const computeNeuroDayScore = (item: (typeof subjectPool)[number]): number => {
          let bonus = item.score;
          // 1. Anticipation J-1 : la matière a cours ou TD demain -> être prêt pour toute interrogation surprise
          if (item.taughtDays.has(tomorrowDay)) {
            bonus += 18;
          }
          // 2. Consolidation synaptique J+0 / J+1 (courbe d'Ebbinghaus : encodage dans les 24h suivant le cours)
          if (item.taughtDays.has(day) || item.taughtDays.has(yesterdayDay)) {
            bonus += 12;
          }
          // 3. Alternance cognitive (Interleaving de Bjork) : après une séance à haute charge ou quantitative,
          //    favoriser un domaine cognitif complémentaire ou une charge modérée pour éviter la saturation préfrontale.
          if (lastDomainToday && item.domain !== lastDomainToday) {
            bonus += 10;
          }
          if (lastEnergyToday === 'high' && item.subject.difficulty <= 3) {
            bonus += 8;
          }
          return bonus;
        };

        let bestCandidate = subjectPool
          .filter(item => canPlace(item, false))
          .sort((a, b) => {
            const aDaysToExam = getDaysRemainingFrom(a.subject.examDate, sessionDate);
            const bDaysToExam = getDaysRemainingFrom(b.subject.examDate, sessionDate);

            const aHasExam = Boolean(a.subject.examDate && a.subject.examType);
            const bHasExam = Boolean(b.subject.examDate && b.subject.examType);
            const aPrep = isExamFeatureAllowed && aHasExam && examPrepModeFor(aDaysToExam, a.subject) !== null;
            const bPrep = isExamFeatureAllowed && bHasExam && examPrepModeFor(bDaysToExam, b.subject) !== null;
            if (aPrep && !bPrep) return -1;
            if (!aPrep && bPrep) return 1;
            if (aPrep && bPrep && aDaysToExam !== bDaysToExam) return aDaysToExam! - bDaysToExam!;

            // Priorité aux épreuves imminentes (J-1 ou J-2)
            const aIsImminent = aDaysToExam !== null && aDaysToExam >= 0 && aDaysToExam <= 2;
            const bIsImminent = bDaysToExam !== null && bDaysToExam >= 0 && bDaysToExam <= 2;
            if (aIsImminent && !bIsImminent) return -1;
            if (!aIsImminent && bIsImminent) return 1;
            if (aIsImminent && bIsImminent && aDaysToExam !== bDaysToExam) {
              return aDaysToExam! - bDaysToExam!;
            }

            // RÈGLE FONDAMENTALE : Couverture de TOUTES les matières (aucune impasse).
            // Toute matière à 0 séance planifiée passe avant une matière ayant déjà >= 1 séance.
            const aHasZero = a.scheduledCount === 0;
            const bHasZero = b.scheduledCount === 0;
            if (aHasZero && !bHasZero) return -1;
            if (!aHasZero && bHasZero) return 1;

            // Espacement minimal entre deux séances d'une même matière
            const aDistance = ahead - a.lastScheduledDay;
            const bDistance = ahead - b.lastScheduledDay;
            const aWellSpaced = aDistance >= 2;
            const bWellSpaced = bDistance >= 2;
            if (aWellSpaced && !bWellSpaced) return -1;
            if (!aWellSpaced && bWellSpaced) return 1;

            // Déficit par rapport à la cible hebdomadaire
            const aDeficit = a.targetSessions - a.scheduledCount;
            const bDeficit = b.targetSessions - b.scheduledCount;
            if (aDeficit !== bDeficit) return bDeficit - aDeficit;

            // Épreuves prévues dans les 14 jours
            const aIsExamSoon = aDaysToExam !== null && aDaysToExam >= 0 && aDaysToExam <= 14;
            const bIsExamSoon = bDaysToExam !== null && bDaysToExam >= 0 && bDaysToExam <= 14;
            if (aIsExamSoon && !bIsExamSoon) return -1;
            if (!aIsExamSoon && bIsExamSoon) return 1;

            // Pertinence neurocognitive pour CE jour (Anticipation J-1, Consolidation J+0/J+1, Interleaving)
            const neuroDiff = computeNeuroDayScore(b) - computeNeuroDayScore(a);
            if (Math.abs(neuroDiff) > 0.5) return neuroDiff;

            if (aDistance !== bDistance) return bDistance - aDistance;
            return b.score - a.score;
          })[0];

        // Si toutes les matières ont atteint leur quota initial mais qu'il reste un créneau sur une journée légère,
        // choisir une matière non encore étudiée aujourd'hui et bien espacée (sans jamais répéter la même matière le même jour).
        if (!bestCandidate && onePerDay) {
          bestCandidate = subjectPool
            .filter(item =>
              !scheduledSubjectsToday.has(item.subject.id) &&
              !scheduledNormKeysToday.has(item.normKey) &&
              item.mode !== 'review' &&
              ahead - item.lastScheduledDay >= 2
            )
            // KONAN Plus : les créneaux en plus vont d'abord aux matières en retard sur leur note visée
            // (facteur d'objectif ; sans plan d'objectif, il vaut 1 partout et l'ordre habituel reste le même)
            .sort((a, b) => (Math.abs(b.goalFactor - a.goalFactor) > 0.01 ? b.goalFactor - a.goalFactor : 0)
              || (a.scheduledCount - b.scheduledCount) || (computeNeuroDayScore(b) - computeNeuroDayScore(a)))[0];
        }

        // Une ou deux matières seulement au total dans tout le cursus : 2e séance permise si non consécutive
        if (!bestCandidate && !onePerDay) {
          bestCandidate = subjectPool
            .filter(item => canPlace(item, true))
            .sort((a, b) => {
              const aDeficit = a.targetSessions - a.scheduledCount;
              const bDeficit = b.targetSessions - b.scheduledCount;
              if (aDeficit !== bDeficit) return bDeficit - aDeficit;
              return b.score - a.score;
            })[0];
        }

        // Rien d'utile à placer ici : le créneau reste libre (jamais de remplissage artificiel)
        if (!bestCandidate) break;

        const subject = bestCandidate.subject;
        const topicName = subject.topics && subject.topics.length > 0
          ? subject.topics[bestCandidate.topicIndex % subject.topics.length]
          : 'Chapitre clé & Fondamentaux';

        // Matière terminée : séance de révision espacée (KONAN reprend d'abord les leçons les plus ratées)
        const isSpacedReview = bestCandidate.mode === 'review';
        const sessionType: SessionType = isSpacedReview ? 'spaced_review' : sessionTypeCycle[bestCandidate.scheduledCount % sessionTypeCycle.length];
        // Évaluation active uniquement si la date ET le type d'évaluation ont été explicitement saisis
        const hasExamScheduled = Boolean(subject.examDate && subject.examType);
        const daysUntilExamOnDate = (isExamFeatureAllowed && hasExamScheduled)
          ? getDaysRemainingFrom(subject.examDate, sessionDate)
          : null;
        // Type de séance de préparation pour CE jour (30 questions, sujet de 2 h ou chrono 75 min), sinon null
        const examMode = (isExamFeatureAllowed && hasExamScheduled)
          ? examPrepModeFor(daysUntilExamOnDate, subject)
          : null;
        const isExamApproaching = examMode !== null;

        // Stratégie d'espacement active pour cette session (Mono-méthode ou Combinaison Triple KONAN PRO)
        let sessionPacing = pacingStrategy;
        let sessionDuration = sessionBlock;
        let sessionBreak = breakBlock;

        if (isExamFeatureAllowed && effectivePreferences.combinedPacings && effectivePreferences.combinedPacings.length > 1) {
          const chosen = effectivePreferences.combinedPacings.slice(0, 3).map(id => getPacingStrategy(id));
          const hasFeynman = chosen.find(p => p.id === 'feynman');
          const hasTimeBlocking = chosen.find(p => p.id === 'time_blocking');
          const hasActiveRecall = chosen.find(p => p.id === 'active_recall_spaced');
          const hasPomodoro = chosen.find(p => p.id === 'pomodoro');
          const hasTwoMin = chosen.find(p => p.id === 'two_minutes_rule');

          // Allocation cognitive intelligente :
          // 1. Fin de soirée (>= 20h00) ou après une première séance lourde -> Micro-session Pomodoro / 2-Min / Rappel actif
          if ((slotCurrentStart >= 1200 || lastEnergyToday === 'high') && (hasPomodoro || hasTwoMin || hasActiveRecall)) {
            sessionPacing = hasPomodoro || hasActiveRecall || hasTwoMin!;
          }
          // 2. Matière très difficile (diff >= 4) ou examen proche (<= 10 jours) -> Feynman si présente
          else if ((subject.difficulty >= 4 || (daysUntilExamOnDate !== null && daysUntilExamOnDate >= 0 && daysUntilExamOnDate <= 10)) && hasFeynman) {
            sessionPacing = hasFeynman;
          }
          // 3. Matière à fort coefficient (>= 5) avec créneau large en journée ou début de soirée -> Time Blocking si présent
          else if (slot.end - slotCurrentStart >= 75 && slotCurrentStart < 1200 && subject.coefficient >= 5 && hasTimeBlocking) {
            sessionPacing = hasTimeBlocking;
          }
          // 4. Session de révision espacée ou auto-test -> Active Recall si présent
          else if (hasActiveRecall && (sessionType === 'spaced_review' || sessionType === 'flashcards')) {
            sessionPacing = hasActiveRecall;
          }
          // 5. Sinon, alternance harmonieuse équilibrée entre les méthodes choisies
          else {
            sessionPacing = chosen[(bestCandidate.scheduledCount + daySessionsCount) % chosen.length];
          }

          sessionDuration = sessionPacing.focusBlockDuration;
          sessionBreak = sessionPacing.breakBlockDuration;
        }

        // Protection neurologique de fin de soirée : après 20h30 (1230 min), un bloc de 75 min est
        // ramené à 45 min pour éviter l'épuisement nocturne et préserver la qualité du sommeil.
        if (!examMode && slotCurrentStart >= 1230 && sessionDuration > 45) {
          sessionDuration = 45;
          sessionBreak = Math.max(10, sessionBreak);
        }

        // Durée d'une séance de préparation : 30 questions (repère 45 min), sujet complet (2 h), chrono (75 min)
        if (examMode) {
          sessionDuration = EXAM_PREP_DURATIONS[examMode];
          sessionBreak = Math.max(sessionBreak, 10);
        }

        // Contexte pédagogique précis de la séance (Consolidation J+0, Anticipation J-1, Entraînement)
        const pedagogicalGoal = bestCandidate.taughtDays.has(tomorrowDay)
          ? 'Anticipation cours & TD de demain'
          : bestCandidate.taughtDays.has(day)
            ? 'Consolidation à chaud du cours du jour'
            : topicName;

        // Titres et descriptions contextualisés selon la méthode d'étude retenue
        let sessionTitle = '';
        let sessionDescription = '';
        let sessionObjectives: string[] = [];

        const displaySubjectName = subject.name;

        if (sessionPacing.id === 'pomodoro') {
          sessionTitle = `Pomodoro (25m) : ${displaySubjectName} - ${pedagogicalGoal}`;
          sessionDescription = `Micro-session Pomodoro de 25 min à fond, coupure nette de 5 min de pause pour éviter la fatigue cérébrale.`;
          sessionObjectives = [
            '25 min à fond sans interruption ni distraction',
            `Terminer un micro-objectif précis sur ${topicName}`,
            'Pause obligatoire de 5 min sans écran pour reposer le cerveau',
          ];
        } else if (sessionPacing.id === 'feynman') {
          sessionTitle = `Technique de Feynman : ${displaySubjectName} - ${pedagogicalGoal}`;
          sessionDescription = `Expliquer simplement pour comprendre à fond : vulgarisation avec des mots simples comme pour un enfant de 10 ans.`;
          sessionObjectives = [
            'Expliquer le cours avec des mots tellement simples qu’un enfant de 10 ans comprendrait',
            'Repérer immédiatement le mot ou la formule précise qui pose blocage',
            'Reprendre le cours pour clarifier et éliminer définitivement ce point d’achoppement',
          ];
        } else if (sessionPacing.id === 'time_blocking') {
          sessionTitle = `Time Blocking (${sessionDuration}m) : ${displaySubjectName} - ${pedagogicalGoal}`;
          sessionDescription = `Plage horaire fixe et sanctuarisée dédiée à 100% à ${displaySubjectName} (${pedagogicalGoal}).`;
          sessionObjectives = [
            'Remplir ce bloc horaire sanctuarisé sans changer de sujet',
            `Attaquer directement sans délai le programme clé : ${topicName}`,
            'Résolution continue des exercices et validation des acquis du bloc',
          ];
        } else if (sessionPacing.id === 'two_minutes_rule') {
          sessionTitle = `Règle des 2 Min & Sprint : ${displaySubjectName} - ${pedagogicalGoal}`;
          sessionDescription = `Vaincre la flemme immédiatement : amorçage de 2 minutes pour lancer le mouvement sans friction.`;
          sessionObjectives = [
            'Amorçage de 2 minutes chrono : ouvrir le document et préparer les fiches',
            'Démarrage mental : "Je m\'y mets juste 2 minutes" pour détruire l\'inertie',
            `Prolonger le flux de travail sur ${topicName} pendant 25 minutes`,
          ];
        } else {
          // active_recall_spaced
          sessionTitle = `${displaySubjectName} - ${pedagogicalGoal}`;
          sessionDescription = `Ne pas juste relire, mais se tester de tête. Espacement dans le temps pour sceller l'information en mémoire longue.`;
          sessionObjectives = [
            'Fermer le cours et essayer de s’en souvenir de tête',
            `Auto-évaluation active sur ${topicName} (questions sans notes)`,
            'Noter les points d’erreur et reprogrammer un rappel à J+2',
          ];
        }

        const startMin = slotCurrentStart;
        // RÈGLE STRICTE DE LUCIDITÉ : aucun créneau ne peut commencer à ou après 23h30 (1410 min)
        if (startMin >= 1410) break;

        const effectiveSlotEnd = Math.min(slot.end, 1410);
        const availableInSlot = effectiveSlotEnd - startMin;
        if (availableInSlot < 20) break;

        const actualDuration = Math.min(sessionDuration, availableInSlot);
        const endMin = startMin + actualDuration;
        // RÈGLE STRICTE : La séance ne peut déborder après 23h30
        if (endMin > 1410) break;

        const examLabel = subject.examType === 'devoir' ? 'Devoir' : subject.examType === 'rattrapage' ? 'Rattrapage' : 'Examen';

        let priority: 'urgent' | 'high' | 'medium' | 'maintenance' = 'medium';
        if (isExamApproaching && daysUntilExamOnDate !== null && daysUntilExamOnDate <= 7) {
          priority = 'urgent';
        } else if (subject.difficulty >= 4 || subject.coefficient >= 5) {
          priority = 'high';
        } else if (subject.difficulty <= 2) {
          priority = 'maintenance';
        }

        const energy: 'high' | 'medium' | 'low' =
          subject.difficulty >= 4 ? 'high' : subject.difficulty === 3 ? 'medium' : 'low';

        let finalTitle = sessionTitle;
        let finalDesc = sessionDescription;
        let finalObjectives = sessionObjectives;

        if (examMode && daysUntilExamOnDate !== null) {
          const text = examPrepSessionText(examMode, displaySubjectName, examLabel, daysUntilExamOnDate);
          finalTitle = text.title;
          finalDesc = text.description;
          finalObjectives = text.objectives;
        } else if (isSpacedReview) {
          finalTitle = `Révision espacée : ${displaySubjectName}`;
          finalDesc = `Tu as terminé les mini-leçons de ${displaySubjectName}. KONAN te fait réviser au bon moment pour ne rien oublier, en commençant par les leçons où tu as fait le plus d’erreurs.`;
          finalObjectives = [
            'Reprendre de tête les leçons déjà vues',
            'Refaire les questions ratées jusqu’à les réussir',
            `Garder ${displaySubjectName} en mémoire jusqu’au jour du devoir`,
          ];
        }

        generatedSessions.push({
          id: generateId(),
          subjectId: subject.id,
          dayOfWeek: day,
          date: dateString,
          createdAt: new Date().toISOString(),
          startTime: minutesToTimeString(startMin),
          endTime: minutesToTimeString(endMin),
          durationMinutes: actualDuration,
          pacingMethod: sessionPacing.id,
          type: isExamApproaching ? 'exam_simulation' : sessionType,
          title: finalTitle,
          description: finalDesc,
          objectives: finalObjectives,
          priority,
          energyRequired: energy,
          completed: false,
          isExamPrep: isExamApproaching,
          examDaysRemaining: isExamApproaching ? daysUntilExamOnDate ?? undefined : undefined,
          examType: isExamFeatureAllowed ? (subject.examType || 'examen') : undefined,
          examPrepMode: examMode ?? undefined,
          examChapterIds: examMode && examMode !== 'chrono75' ? subject.examChapterIds : undefined,
        });

        // Mise à jour des compteurs et de l'état neurocognitif journalier
        daySessionsCount++;
        sessionsInThisSlot++;
        dayScheduledMinutes += actualDuration;
        scheduledSubjectsToday.add(subject.id);
        scheduledNormKeysToday.add(bestCandidate.normKey);
        lastSubjectToday = subject.id;
        lastDomainToday = bestCandidate.domain;
        lastEnergyToday = energy;
        bestCandidate.scheduledCount++;
        bestCandidate.lastScheduledDay = ahead; // en jours à partir d'aujourd'hui
        bestCandidate.topicIndex++;
        // Prochain jour possible : écart de la révision espacée (de plus en plus long), sinon étalement régulier
        bestCandidate.nextAllowedAhead = ahead + (isSpacedReview
          ? review.gaps[Math.min(bestCandidate.scheduledCount, review.gaps.length - 1)]
          : bestCandidate.minGap);

        // Avancement du créneau horaire avec la pause spécifique
        slotCurrentStart += (actualDuration + sessionBreak);
      }
    }
  }

  // RÈGLE DE SÉCURITÉ ABSOLUE : Exclusion définitive de tout créneau débutant à/après 23h30 ou finissant après 23h30
  const strictlyLucidSessions = generatedSessions.filter(s => {
    const sStart = parseTimeToMinutes(s.startTime);
    const sEnd = parseTimeToMinutes(s.endTime);
    return sStart < 1410 && sEnd <= 1410;
  });

  // Tri final chronologique irréprochable : d'abord par jour (0 à 6), puis par heure de début
  return strictlyLucidSessions.sort((a, b) => {
    if (a.dayOfWeek !== b.dayOfWeek) return a.dayOfWeek - b.dayOfWeek;
    return parseTimeToMinutes(a.startTime) - parseTimeToMinutes(b.startTime);
  });
}

/**
 * Fusionne un nouveau plan généré avec les sessions existantes en préservant
 * STRICTEMENT toutes les séances déjà validées par l'étudiant (completed: true).
 * Interdiction absolue de réinitialiser le travail déjà accompli.
 */
export function mergePreservingCompletedSessions(
  existingSessions: StudySession[],
  freshPlan: StudySession[]
): StudySession[] {
  if (!existingSessions || existingSessions.length === 0) {
    return freshPlan;
  }

  const completedSessions = existingSessions.filter(s => s.completed);
  if (completedSessions.length === 0) {
    return freshPlan;
  }

  // 1. Indexer les séances complétées par ID et par clé Matière-Jour
  const completedById = new Map<string, StudySession>();
  const completedByKey = new Map<string, StudySession>();

  completedSessions.forEach(s => {
    completedById.set(s.id, s);
    const key = `${s.subjectId || s.title}-${s.dayOfWeek}`;
    if (!completedByKey.has(key)) {
      completedByKey.set(key, s);
    }
  });

  const matchedCompletedIds = new Set<string>();

  // 2. Mettre à jour les séances du nouveau plan en conservant les données de validation
  const mergedPlan = freshPlan.map(fresh => {
    // Correspondance par ID
    const byId = completedById.get(fresh.id);
    if (byId) {
      matchedCompletedIds.add(byId.id);
      return {
        ...fresh,
        completed: true,
        completedAt: byId.completedAt,
        actualDurationMinutes: byId.actualDurationMinutes || fresh.durationMinutes,
        rating: byId.rating,
      };
    }

    // Correspondance par Matière et Jour
    const key = `${fresh.subjectId || fresh.title}-${fresh.dayOfWeek}`;
    const byKey = completedByKey.get(key);
    if (byKey && !matchedCompletedIds.has(byKey.id)) {
      matchedCompletedIds.add(byKey.id);
      return {
        ...fresh,
        completed: true,
        completedAt: byKey.completedAt,
        actualDurationMinutes: byKey.actualDurationMinutes || fresh.durationMinutes,
        rating: byKey.rating,
      };
    }

    return fresh;
  });

  // 3. Conserver toute séance validée qui n'aurait pas trouvé de correspondance directe
  const unmatchedCompleted = completedSessions.filter(s => !matchedCompletedIds.has(s.id));

  return [...mergedPlan, ...unmatchedCompleted].sort((a, b) => {
    if (a.dayOfWeek !== b.dayOfWeek) return a.dayOfWeek - b.dayOfWeek;
    return parseTimeToMinutes(a.startTime) - parseTimeToMinutes(b.startTime);
  });
}

/**
 * Réorganise la semaine À PARTIR D'AUJOURD'HUI (progression qui change, ancien planning à refaire) :
 * - les jours passés restent tels quels (faits ou manqués : la réputation les a déjà comptés) ;
 * - les séances déjà faites aujourd'hui restent, et le nouveau planning n'en remet pas par-dessus
 *   (même matière ou même heure) ;
 * - les séances pas encore faites d'aujourd'hui et des jours suivants sont remplacées par le nouveau planning.
 */
export function replanFromToday(existing: StudySession[], fresh: StudySession[], now: Date = new Date()): StudySession[] {
  const ymd = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  const today = ymd(now);
  const kept = (existing || []).filter((s) => (s.date ? s.date < today : false) || (s.date === today && s.completed));
  const doneToday = kept.filter((s) => s.date === today);
  const overlaps = (a: StudySession, b: StudySession) =>
    parseTimeToMinutes(a.startTime) < parseTimeToMinutes(b.endTime) && parseTimeToMinutes(b.startTime) < parseTimeToMinutes(a.endTime);
  const next = (fresh || []).filter((f) => {
    if (!f.date || f.date < today) return false;
    if (f.date !== today) return true;
    if (f.startTime && parseTimeToMinutes(f.startTime) < now.getHours() * 60 + now.getMinutes()) return false; // heure déjà passée
    return !doneToday.some((d) => d.subjectId === f.subjectId || overlaps(d, f));
  });
  return [...kept, ...next].sort((a, b) => (a.date || '').localeCompare(b.date || '') || parseTimeToMinutes(a.startTime) - parseTimeToMinutes(b.startTime));
}

/**
 * Synchronise automatiquement les séances non complétées avec les échéances d'examens/devoirs actuelles
 * (ex: mise à jour automatique à 45m si un devoir approche à J-2 sans réinitialiser les séances faites).
 */
export function synchronizeSessionsWithExamCountdowns(
  sessions: StudySession[],
  subjects: Subject[],
  rawGrade?: string | null,
  country?: string | null
): StudySession[] {
  if (!sessions || sessions.length === 0) return [];
  // Préparation aux devoirs ouverte seulement pour certaines classes, et seulement en Côte d'Ivoire
  if (!isExamPrepOpenFor(rawGrade, country)) return sessions;
  const subjectsMap = new Map(subjects.map(s => [s.id, s]));

  const referenceDate = new Date();
  const currentDayIndex = (referenceDate.getDay() + 6) % 7;

  // Une seule séance de préparation par jour et par matière (jamais deux sujets de 2 h le même jour)
  const prepDays = new Set<string>();

  return sessions.map(session => {
    if (session.completed) return session; // Ne JAMAIS altérer une session déjà validée

    const subject = subjectsMap.get(session.subjectId);
    if (!subject || !subject.examDate || !subject.examType) return session;
    const dayKey = `${session.dayOfWeek}|${session.subjectId}`;
    if (prepDays.has(dayKey)) return session;

    const daysAhead = (session.dayOfWeek - currentDayIndex + 7) % 7;
    const sessionDate = new Date(referenceDate);
    sessionDate.setDate(referenceDate.getDate() + daysAhead);

    const daysToExam = getDaysRemainingFrom(subject.examDate, sessionDate);
    const mode = examPrepModeFor(daysToExam, subject);
    if (!mode || daysToExam === null || daysToExam > EXAM_PREP_HORIZON_DAYS) return session;
    prepDays.add(dayKey);

    // Même jour, même type de séance et mêmes chapitres : rien à changer
    const sameChapters = JSON.stringify(session.examChapterIds || []) === JSON.stringify(mode === 'chrono75' ? [] : subject.examChapterIds || []);
    if (session.examPrepMode === mode && session.examDaysRemaining === daysToExam && sameChapters) return session;

    const targetDuration = EXAM_PREP_DURATIONS[mode];
    const startMin = parseTimeToMinutes(session.startTime);
    const newEndMin = Math.min(1410, startMin + targetDuration);
    const examLabel = subject.examType === 'devoir' ? 'Devoir' : subject.examType === 'rattrapage' ? 'Rattrapage' : 'Examen';
    const text = examPrepSessionText(mode, subject.name, examLabel, daysToExam);
    return {
      ...session,
      durationMinutes: newEndMin - startMin,
      endTime: minutesToTimeString(newEndMin),
      type: 'exam_simulation',
      title: text.title,
      description: text.description,
      objectives: text.objectives,
      isExamPrep: true,
      examDaysRemaining: daysToExam,
      examType: subject.examType || 'examen',
      examPrepMode: mode,
      examChapterIds: mode === 'chrono75' ? undefined : subject.examChapterIds,
    };
  });
}
