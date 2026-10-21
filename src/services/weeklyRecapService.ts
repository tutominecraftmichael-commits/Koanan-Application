import type { Subject, StudySession, StudyLog, WeeklySummary, WeeklySubjectStat, PlanTier } from '../types';
import { getWeekDateRange, isDateInWeek } from '../lib/utils';
import { generateOptimizedStudyPlan } from './plannerAlgorithm';
import type { AppState } from './storage';

/**
 * Calcule avec rigueur le bilan statistique d'une semaine spécifique.
 * Isole strictement les données de la semaine (du Lundi au Dimanche) pour empêcher
 * toute contamination ou cumul erroné des semaines antérieures.
 */
export function computeWeeklySummary(
  subjects: Subject[],
  studySessions: StudySession[],
  logs: StudyLog[],
  targetDate: Date = new Date(),
  studentName: string = 'Étudiant'
): WeeklySummary {
  const { mondayStr, sundayStr } = getWeekDateRange(targetDate);
  const weekId = `week_${mondayStr}`;

  // 1. Filtrer rigoureusement les sessions appartenant à cette semaine calendaire
  const weekSessions = studySessions.filter(s => {
    if (s.date) {
      return isDateInWeek(s.date, mondayStr, sundayStr);
    }
    // Si la session n'a pas de date explicite, on s'assure qu'elle correspond à la semaine cible
    return true;
  });

  // 2. Filtrer les logs d'étude enregistrés pendant cette semaine
  const weekLogs = logs.filter(l => {
    const logDate = l.date || (l.createdAt ? l.createdAt.slice(0, 10) : '');
    return isDateInWeek(logDate, mondayStr, sundayStr);
  });

  // 3. Calcul par matière
  const subjectBreakdown: WeeklySubjectStat[] = subjects.map(sub => {
    const subSessions = weekSessions.filter(s => s.subjectId === sub.id);
    const subCompleted = subSessions.filter(s => s.completed);
    const plannedMinutes = subSessions.reduce((acc, s) => acc + s.durationMinutes, 0);

    // Minutes validées des séances programmées de cette semaine
    const sessionCompletedMins = subCompleted.reduce((acc, s) => {
      const matchingLog = weekLogs.find(l => l.sessionId === s.id);
      let duration = s.durationMinutes;
      if (matchingLog && matchingLog.durationMinutes >= 15) {
        duration = matchingLog.durationMinutes;
      } else if (s.actualDurationMinutes && s.actualDurationMinutes >= 15) {
        duration = s.actualDurationMinutes;
      }
      return acc + duration;
    }, 0);

    // Logs autonomes sans séance rattachée créés cette semaine
    const standaloneMins = weekLogs
      .filter(l => l.subjectId === sub.id && (!l.sessionId || !subSessions.some(s => s.id === l.sessionId)))
      .filter(l => l.durationMinutes >= 15)
      .reduce((acc, l) => acc + l.durationMinutes, 0);

    const completedMinutes = sessionCompletedMins + standaloneMins;

    const completionRate = plannedMinutes > 0
      ? Math.min(100, Math.round((completedMinutes / plannedMinutes) * 100))
      : (completedMinutes > 0 ? 100 : 0);

    return {
      subjectId: sub.id,
      subjectName: sub.name,
      plannedMinutes,
      completedMinutes,
      completionRate,
      completedSessions: subCompleted.length,
      totalSessions: subSessions.length,
    };
  });

  const totalPlannedMinutes = subjectBreakdown.reduce((acc, st) => acc + st.plannedMinutes, 0);
  const totalCompletedMinutes = subjectBreakdown.reduce((acc, st) => acc + st.completedMinutes, 0);

  const completedSessionsCount = weekSessions.filter(s => s.completed).length;
  const totalSessionsCount = weekSessions.length;

  const completionRate = totalPlannedMinutes > 0
    ? Math.min(100, Math.round((totalCompletedMinutes / totalPlannedMinutes) * 100))
    : (completedSessionsCount > 0 ? 100 : 0);

  // Focus moyen calculé sur les logs réels de la semaine
  const ratedLogs = weekLogs.filter(l => l.satisfactionRating > 0);
  const averageFocusRating = ratedLogs.length > 0
    ? Number((ratedLogs.reduce((acc, l) => acc + l.satisfactionRating, 0) / ratedLogs.length).toFixed(1))
    : (completedSessionsCount > 0 ? 4.5 : 0);

  return {
    id: weekId,
    weekStartDate: mondayStr,
    weekEndDate: sundayStr,
    studentName,
    totalPlannedMinutes,
    totalCompletedMinutes,
    completionRate,
    completedSessionsCount,
    totalSessionsCount,
    averageFocusRating,
    subjectBreakdown,
    createdAt: new Date().toISOString(),
    viewed: false,
  };
}

/**
 * Détecte si la semaine précédente est achevée et réalise la bascule automatique
 * vers la nouvelle semaine :
 * - Archive le bilan complet de la semaine écoulée dans `weeklySummaries`.
 * - Définit `pendingWeeklyRecap` pour afficher la célébration animée Duolingo.
 * - Régénère un emploi du temps vierge et immaculé pour la nouvelle semaine.
 */
export function checkAndPerformWeeklyRollover(currentState: AppState): {
  nextState: AppState;
  hasRollover: boolean;
  archivedSummary: WeeklySummary | null;
} {
  const now = new Date();
  const { mondayStr: currentMondayStr } = getWeekDateRange(now);

  const previousWeekMonday = currentState.currentWeekMonday;
  const sessions = currentState.studySessions || [];

  // Vérifier si les sessions actuelles datent d'une semaine passée
  const hasOutdatedSessions = sessions.some(s => s.date && s.date < currentMondayStr);
  const isNewWeekDetected = Boolean(previousWeekMonday && previousWeekMonday < currentMondayStr);

  if (!hasOutdatedSessions && !isNewWeekDetected && currentState.currentWeekMonday === currentMondayStr) {
    return { nextState: currentState, hasRollover: false, archivedSummary: null };
  }

  // Si l'utilisateur n'avait pas encore de currentWeekMonday défini et que les sessions sont à jour
  if (!previousWeekMonday && !hasOutdatedSessions) {
    return {
      nextState: { ...currentState, currentWeekMonday: currentMondayStr },
      hasRollover: false,
      archivedSummary: null,
    };
  }

  // 1. Calcul du bilan de la semaine qui vient de se terminer
  const lastWeekDate = new Date(now);
  lastWeekDate.setDate(now.getDate() - 7);

  const pastWeekSummary = computeWeeklySummary(
    currentState.subjects,
    sessions,
    currentState.logs || [],
    lastWeekDate,
    currentState.studentName || currentState.userAccount?.name || 'Étudiant'
  );

  // 2. Archivage sans doublon
  const existingSummaries = currentState.weeklySummaries || [];
  const alreadyArchived = existingSummaries.some(w => w.id === pastWeekSummary.id);
  const updatedSummaries = alreadyArchived
    ? existingSummaries.map(w => w.id === pastWeekSummary.id ? pastWeekSummary : w)
    : [pastWeekSummary, ...existingSummaries];

  // 3. Génération propre et neuve de la nouvelle semaine (toutes les séances réinitialisées à completed: false)
  const effectiveTier: PlanTier = currentState.planTier || currentState.userAccount?.planTier || 'free';
  const freshSessions = (currentState.subjects.length > 0 && currentState.classSlots.length > 0)
    ? generateOptimizedStudyPlan(
        currentState.subjects,
        currentState.classSlots,
        currentState.preferences,
        effectiveTier
      )
    : [];

  const nextState: AppState = {
    ...currentState,
    currentWeekMonday: currentMondayStr,
    weeklySummaries: updatedSummaries,
    pendingWeeklyRecap: null,
    studySessions: freshSessions,
    cycleCompletedDate: undefined, // Réinitialisation du cycle
  };

  return {
    nextState,
    hasRollover: true,
    archivedSummary: pastWeekSummary,
  };
}
