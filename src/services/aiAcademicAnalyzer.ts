import type { 
  Subject, 
  ClassSlot, 
  StudyPreferences, 
  StudySession, 
  ExtractedPdfSchedule, 
  Chronotype, 
  StudyPacing,
  PlanTier
} from '../types';
import { generateOptimizedStudyPlan } from './plannerAlgorithm';
import { DEFAULT_PREFERENCES } from '../lib/presets';
import { getPacingStrategy, analyzeScheduleDaytimeMetrics } from '../lib/pacingStrategies';

export interface AcademicAnalysisReport {
  overallWorkloadScore: number; // 0 to 100
  workloadCategory: string;
  burnoutRiskIndex: 'Faible (Optimal)' | 'Modéré (Vigilance)' | 'Élevé (Surcharge critique)';
  burnoutRiskVariant: 'emerald' | 'amber' | 'rose';
  burnoutDetails: string;
  prioritySubjects: { name: string; coeff: number; difficulty: number; reason: string }[];
  weeklyClassHours: number;
  weeklyRecommendedStudyHours: number;
  optimalDailyStudyMinutes: number;
  studyStrategy: string;
  pacingTechniqueLabel: string;
  recommendations: string[];
}

/**
 * Parses "HH:MM" string to minutes from midnight
 */
function timeToMinutes(timeStr: string): number {
  if (!timeStr) return 0;
  const [h, m] = timeStr.split(':').map(Number);
  return (h || 0) * 60 + (m || 0);
}

/**
 * Analyzes extracted schedule data and computes neurocognitive workload metrics,
 * balanced score, burnout risk and technique-adapted study recommendations.
 */
export function generateAcademicAnalysisReport(
  schedule: ExtractedPdfSchedule,
  chronotype: Chronotype = 'evening',
  pacing: StudyPacing = 'active_recall_spaced'
): AcademicAnalysisReport {
  const { subjects, slots, totalWeeklyClassHours } = schedule;

  // 1. Average Subject Difficulty (1 to 5)
  const avgDifficulty = subjects.length > 0 
    ? subjects.reduce((sum, s) => sum + s.difficulty, 0) / subjects.length 
    : 3;

  // 2. Schedule Timing & Daytime Availability Analysis
  const daytimeMetrics = analyzeScheduleDaytimeMetrics(
    slots.map(s => ({
      startTime: s.startTime,
      endTime: s.endTime,
      dayOfWeek: s.dayOfWeek
    })),
    subjects.length
  );

  const lateDaysCount = daytimeMetrics.lateDaysCount;
  let maxDailyClassMinutes = 0;

  const dayClassMinutes: Record<number, number> = {};
  slots.forEach(slot => {
    const endMin = timeToMinutes(slot.endTime);
    const startMin = timeToMinutes(slot.startTime);
    const duration = Math.max(0, endMin - startMin);
    dayClassMinutes[slot.dayOfWeek] = (dayClassMinutes[slot.dayOfWeek] || 0) + duration;
  });

  Object.values(dayClassMinutes).forEach(mins => {
    if (mins > maxDailyClassMinutes) {
      maxDailyClassMinutes = mins;
    }
  });

  // Recommended daily study target in minutes
  const recommendedDailyMinutes = Math.min(
    240,
    Math.max(45, Math.round((totalWeeklyClassHours * 0.75 * 60) / 6))
  );

  // 3. Priority Subjects calculation
  const prioritySubjects = subjects
    .filter(s => s.coefficient >= 3 || s.difficulty >= 3)
    .sort((a, b) => (b.coefficient * b.difficulty) - (a.coefficient * a.difficulty))
    .slice(0, 3)
    .map(s => ({
      name: s.name,
      coeff: s.coefficient,
      difficulty: s.difficulty,
      reason: s.coefficient >= 6 
        ? `Majeure du cursus (Coeff ${s.coefficient}) nécessitant 2 sessions de consolidation par semaine.`
        : `Charge conceptuelle élevée (${s.difficulty}/5) nécessitant de la répétition espacée.`,
    }));

  // 4. Burnout Risk Index (Multi-Factorial Neurocognitive Analysis)
  // Factors: Total class hours + late finishes + daytime free time + difficulty + peak intensity + pacing match
  let burnoutRiskScore = 0;

  // Hours factor
  if (totalWeeklyClassHours >= 34) burnoutRiskScore += 3.5;
  else if (totalWeeklyClassHours >= 26) burnoutRiskScore += 2;
  else if (totalWeeklyClassHours >= 18) burnoutRiskScore += 1;

  // Late days factor (finish >= 17h30)
  // Prise en compte du temps libre en journée : si l'étudiant dispose de plages diurnes conséquentes,
  // la charge mentale est largement tempérée.
  if (lateDaysCount >= 4) {
    burnoutRiskScore += daytimeMetrics.hasSignificantDaytimeFreeTime ? 1.5 : 3;
  } else if (lateDaysCount >= 3) {
    burnoutRiskScore += daytimeMetrics.hasSignificantDaytimeFreeTime ? 1 : 2;
  } else if (lateDaysCount >= 2) {
    burnoutRiskScore += daytimeMetrics.hasSignificantDaytimeFreeTime ? 0.5 : 1;
  }

  // Difficulty factor
  if (avgDifficulty >= 4.0) burnoutRiskScore += 2;
  else if (avgDifficulty >= 3.4) burnoutRiskScore += 1;

  // Peak day factor (more than 6h30 in one day)
  if (maxDailyClassMinutes >= 390) burnoutRiskScore += 1.5;

  // Technique fitness with daytime schedule:
  if (pacing === 'time_blocking') {
    if (daytimeMetrics.isContinuousDense) {
      burnoutRiskScore += 1; // Journées denses sans pauses diurnes + 75m le soir
    } else if (daytimeMetrics.hasSignificantDaytimeFreeTime) {
      burnoutRiskScore = Math.max(0, burnoutRiskScore - 0.5); // Idéalement calé sur les créneaux libres en journée
    }
  }
  if ((lateDaysCount >= 3 || daytimeMetrics.isContinuousDense) && (pacing === 'pomodoro' || pacing === 'two_minutes_rule')) {
    burnoutRiskScore = Math.max(0, burnoutRiskScore - 0.5);
  }

  let burnoutRiskIndex: 'Faible (Optimal)' | 'Modéré (Vigilance)' | 'Élevé (Surcharge critique)';
  let burnoutRiskVariant: 'emerald' | 'amber' | 'rose';
  let burnoutDetails: string;

  if (burnoutRiskScore >= 6) {
    burnoutRiskIndex = 'Élevé (Surcharge critique)';
    burnoutRiskVariant = 'rose';
    burnoutDetails = `Risque élevé détecté : volume hebdomadaire important (${totalWeeklyClassHours}h), journées continues avec peu de temps libre diurne (${daytimeMetrics.totalDaytimeFreeHours}h), et charge conceptuelle soutenue (${avgDifficulty.toFixed(1)}/5). Une modération impérative des sessions nocturnes est requise.`;
  } else if (burnoutRiskScore >= 3.5) {
    burnoutRiskIndex = 'Modéré (Vigilance)';
    burnoutRiskVariant = 'amber';
    burnoutDetails = daytimeMetrics.hasSignificantDaytimeFreeTime
      ? `Rythme maîtrisé : cours étalés mais ${daytimeMetrics.totalDaytimeFreeHours}h de temps libre diurne disponibles (${daytimeMetrics.majorFreeBlocksCount} grands créneaux ≥ 1h30). Exploitez ces fenêtres pour réviser sans surcharger vos soirées.`
      : `Risque modéré sous contrôle : rythme hebdomadaire demandeur (${totalWeeklyClassHours}h, ${lateDaysCount} cours tardifs). La décompression de 35 min après les cours est indispensable pour préserver la mémoire de travail.`;
  } else {
    burnoutRiskIndex = 'Faible (Optimal)';
    burnoutRiskVariant = 'emerald';
    burnoutDetails = `Rythme sain et équilibré : dispersion temporelle fluide (${totalWeeklyClassHours}h de cours, ${daytimeMetrics.totalDaytimeFreeHours}h de temps libre diurne), créneaux de récupération neurologique suffisants.`;
  }

  // 5. Indice d'Équilibre Global (0 à 100)
  // Dynamic formula combining workload, daytime free windows, late finishes, difficulty, and pacing synergy
  let balanceScore = 96;

  // Penalty for high class volume
  if (totalWeeklyClassHours > 28) {
    balanceScore -= (totalWeeklyClassHours - 28) * 1.5;
  } else if (totalWeeklyClassHours < 12) {
    balanceScore += 2;
  }

  // Penalty for late days (allégée si l'étudiant a du temps libre en journée)
  const latePenaltyCoeff = daytimeMetrics.hasSignificantDaytimeFreeTime ? 0.5 : 1;
  if (lateDaysCount >= 4) {
    balanceScore -= 12 * latePenaltyCoeff;
  } else if (lateDaysCount >= 3) {
    balanceScore -= 8 * latePenaltyCoeff;
  } else if (lateDaysCount >= 2) {
    balanceScore -= 4 * latePenaltyCoeff;
  }

  // Penalty for extreme cognitive load
  if (avgDifficulty > 3.2) {
    balanceScore -= Math.round((avgDifficulty - 3.2) * 8);
  }

  // Penalty for high subject dispersion (> 6 subjects)
  if (subjects.length > 6) {
    balanceScore -= (subjects.length - 6) * 1.5;
  }

  // Technique synergy bonus or penalty:
  if (pacing === 'time_blocking') {
    if (daytimeMetrics.hasSignificantDaytimeFreeTime) {
      balanceScore += 5; // Synergie forte : exploitation des créneaux libres en journée
    } else if (daytimeMetrics.isContinuousDense) {
      balanceScore -= 6; // Discordance : blocs de 75m le soir après journées sans pause
    }
  } else if (pacing === 'pomodoro' || pacing === 'two_minutes_rule') {
    if (daytimeMetrics.isContinuousDense || daytimeMetrics.isFragmentedGaps) {
      balanceScore += 5; // Idéal pour journées compactes ou pauses courtes
    }
  } else if (pacing === 'active_recall_spaced' || pacing === 'feynman') {
    if (daytimeMetrics.hasSignificantDaytimeFreeTime || lateDaysCount <= 1) {
      balanceScore += 4;
    }
  }

  // Clamp balance score realistically between 48 and 96
  const overallWorkloadScore = Math.min(96, Math.max(48, Math.round(balanceScore)));

  let workloadCategory = 'Équilibre Optimal';
  if (overallWorkloadScore < 60) workloadCategory = 'Surcharge Cognitive';
  else if (overallWorkloadScore < 75) workloadCategory = 'Tension Modérée';
  else if (overallWorkloadScore < 85) workloadCategory = 'Bon Équilibre';

  // 6. Chronotype label
  const chronotypeLabel = chronotype === 'morning' 
    ? 'Matin (07h-12h)' 
    : chronotype === 'afternoon' 
    ? 'Après-midi (14h-18h)' 
    : chronotype === 'evening' 
    ? 'Soirée (18h-22h)' 
    : 'Nuit (21h-01h)';

  // 7. Dynamic Recommendations Adapted to the Selected Technique (pacing)
  const pacingStrategy = getPacingStrategy(pacing);
  const recommendations: string[] = [];

  // Pacing technique specific recommendation
  switch (pacing) {
    case 'pomodoro':
      recommendations.push(
        `🍅 Technique Pomodoro (25 min travail / 5 min pause) : Idéale pour contourner la fatigue mentale après les cours. Réalisez 2 à 3 micro-sessions avec une pause longue de 15 min après chaque bloc.`
      );
      if (daytimeMetrics.hasSignificantDaytimeFreeTime) {
        recommendations.push(
          `⚡ Utilisation en journée : Vous disposez d'environ ${daytimeMetrics.totalDaytimeFreeHours}h de temps libre diurne. Profitez de ces créneaux pour caler des cycles Pomodoro complets avec un focus calme.`
        );
      } else if (lateDaysCount >= 3 || daytimeMetrics.isContinuousDense) {
        recommendations.push(
          `⏰ Soirées après cours denses (fin ≥ 17h30) : Limitez-vous à 2 cycles Pomodoro (50 min nettes) sur vos matières majeures, sans forcer un troisième cycle afin d'éviter la saturation.`
        );
      } else {
        recommendations.push(
          `⚡ Journées allégées : Profitez de vos après-midis plus libres pour enchaîner 4 cycles Pomodoro complets avec un focus intense.`
        );
      }
      break;

    case 'active_recall_spaced':
    case 'spaced_repetition':
    case 'active_recall':
      recommendations.push(
        `🧠 Active Recall & Répétition Espacée : Bannissez la relecture passive. Testez-vous activement de mémoire (flashcards ou interrogation à livre fermé) le soir même (J+0), puis à J+3 et J+7.`
      );
      recommendations.push(
        `🎯 Priorisation mnésique : Appliquez les cycles de rappel espacé en priorité absolue sur vos ${prioritySubjects.length} matières majeures (${prioritySubjects.map(p => p.name).join(', ')}).`
      );
      break;

    case 'feynman':
      recommendations.push(
        `💡 Technique de Feynman (Compréhension Fondamentale) : Reformulez chaque théorème ou notion complexe avec des termes tellement simples qu'un enfant de 10 ans pourrait vous comprendre.`
      );
      recommendations.push(
        `📝 Détection des lacunes : Dès qu'une hésitation survient lors de votre explication orale ou écrite, retournez immédiatement cibler le paragraphe précis du cours.`
      );
      break;

    case 'time_blocking':
      recommendations.push(
        `🧱 Time Blocking (Immersion Profonde 75 min) : Blocs fermés et sanctuarisés pour vos matières denses. Téléphone en mode avion et notifications coupées.`
      );
      if (daytimeMetrics.hasSignificantDaytimeFreeTime) {
        recommendations.push(
          `⚡ Exploitation optimale des créneaux libres : Vous bénéficiez d'environ ${daytimeMetrics.totalDaytimeFreeHours}h de temps libre en journée (${daytimeMetrics.majorFreeBlocksCount} grands créneaux ≥ 1h30 ou demi-journées). Sanctuarisez ces plages diurnes sur le campus ou à la bibliothèque pour vos sessions Time Blocking de 75 min, afin de vous libérer totalement vos soirées.`
        );
      } else if (lateDaysCount >= 2 || daytimeMetrics.isContinuousDense) {
        recommendations.push(
          `⚠️ Vigilance fatigue : Vos journées s'enchaînent de manière très continue jusqu'à 17h30+. Évitez d'imposer des blocs lourds de 75 min le soir : préférez le week-end ou vos demi-journées de repos.`
        );
      }
      break;

    case 'two_minutes_rule':
      recommendations.push(
        `⚡ Règle des 2 Minutes (Anti-Procrastination) : Démarrez chaque session en traitant immédiatement une micro-tâche de moins de 2 minutes (relire le sommaire, préparer ses fiches) pour vaincre l'inertie.`
      );
      recommendations.push(
        `🚀 Démarrage sans friction : Idéal pour amorcer le travail même après une longue journée de cours sans sensation de fardeau psychologique.`
      );
      break;

    default:
      recommendations.push(
        `📚 Méthode ${pacingStrategy.title} : Rythme de travail de ${pacingStrategy.focusBlockDuration} min avec pause de ${pacingStrategy.breakBlockDuration} min.`
      );
      break;
  }

  // Decompression buffer rule (35 min post-course transition)
  recommendations.push(
    `☕ SAS de Décompression de 35 min : Après la fin des cours, accordez-vous impérativement 35 minutes de transition (trajet, douche, collation) avant d'entamer votre première session d'étude.`
  );

  // Chronotype alignment recommendation
  recommendations.push(
    `⚡ Alignement Circadien : Vos pics d'assimilation cognitive sont synchronisés sur votre profil ${chronotypeLabel}.`
  );

  return {
    overallWorkloadScore,
    workloadCategory,
    burnoutRiskIndex,
    burnoutRiskVariant,
    burnoutDetails,
    prioritySubjects,
    weeklyClassHours: totalWeeklyClassHours,
    weeklyRecommendedStudyHours: schedule.recommendedStudyHours,
    optimalDailyStudyMinutes: recommendedDailyMinutes,
    studyStrategy: pacingStrategy.title,
    pacingTechniqueLabel: pacingStrategy.title,
    recommendations,
  };
}

/**
 * Builds full domain state from extracted PDF schedule and user preferences.
 */
export function buildStateFromExtractedSchedule(
  schedule: ExtractedPdfSchedule,
  studentName: string,
  chronotype: Chronotype = 'evening',
  pacing: StudyPacing = 'active_recall_spaced',
  combinedPacings?: StudyPacing[],
  tier: PlanTier = 'free'
): {
  subjects: Subject[];
  classSlots: ClassSlot[];
  preferences: StudyPreferences;
  studySessions: StudySession[];
} {
  const subjects: Subject[] = schedule.subjects.map(s => ({
    id: s.id,
    name: s.name,
    code: s.code,
    color: s.color,
    coefficient: s.coefficient,
    difficulty: s.difficulty,
    targetGrade: s.targetGrade,
    examDate: s.examDate,
    topics: s.topics,
  }));

  const classSlots: ClassSlot[] = schedule.slots.map(s => ({
    id: s.id,
    subjectId: s.subjectId,
    dayOfWeek: s.dayOfWeek,
    startTime: s.startTime,
    endTime: s.endTime,
    type: s.type,
    room: s.room,
    professor: s.professor,
  }));

  const recommendedDailyMinutes = Math.min(
    240,
    Math.max(60, Math.round((schedule.totalWeeklyClassHours * 0.75 * 60) / 6))
  );

  const pacingStrategy = getPacingStrategy(pacing);

  const preferences: StudyPreferences = {
    ...DEFAULT_PREFERENCES,
    studentName: studentName || 'Étudiant KONAN',
    academicLevel: schedule.academicTrack,
    targetDailyStudyMinutes: recommendedDailyMinutes,
    chronotype,
    pacing: pacingStrategy.id,
    combinedPacings: combinedPacings && combinedPacings.length > 0 ? combinedPacings : [pacingStrategy.id],
    focusBlockDuration: pacingStrategy.focusBlockDuration,
    breakBlockDuration: pacingStrategy.breakBlockDuration,
    weekendStudyEnabled: true,
  };

  const studySessions = generateOptimizedStudyPlan(subjects, classSlots, preferences, tier);

  return {
    subjects,
    classSlots,
    preferences,
    studySessions,
  };
}
