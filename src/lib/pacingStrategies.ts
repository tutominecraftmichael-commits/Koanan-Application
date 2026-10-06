import type { StudyPacing } from '../types';

export interface PacingStrategyInfo {
  id: StudyPacing;
  number: number;
  title: string;
  shortSummary: string; // "En bref : ..."
  explanation: string;  // "L'explication / L'idée : ..."
  badge: string;
  focusBlockDuration: number;
  breakBlockDuration: number;
  tagline: string;
  color: string;
  borderColor: string;
  bgColor: string;
  textColor: string;
  planRequired: 'free' | 'pro';
}

export const PACING_STRATEGIES: PacingStrategyInfo[] = [
  {
    id: 'pomodoro',
    number: 1,
    title: 'La Technique Pomodoro',
    shortSummary: 'Travailler par micro-sessions.',
    explanation: 'Vous restez à fond pendant 25 minutes, puis vous coupez tout pendant 5 minutes de pause. Cela évite au cerveau de fatiguer.',
    badge: '25 min focus • 5 min pause',
    focusBlockDuration: 25,
    breakBlockDuration: 5,
    tagline: 'Micro-sessions rythmées & zéro fatigue mentale',
    color: 'from-rose-500 to-amber-500',
    borderColor: 'border-rose-500/40',
    bgColor: 'bg-rose-950/20',
    textColor: 'text-rose-400',
    planRequired: 'free',
  },
  {
    id: 'active_recall_spaced',
    number: 2,
    title: "L'Active Recall & Spaced Repetition",
    shortSummary: 'Ne pas juste relire, mais se tester.',
    explanation: 'Fermez votre cours et essayez de vous en souvenir de tête, puis recommencez ce test quelques jours plus tard. C’est le meilleur moyen de bloquer l’info dans la mémoire.',
    badge: '45 min focus • Espacement J+1/J+2',
    focusBlockDuration: 45,
    breakBlockDuration: 15,
    tagline: 'Auto-évaluation active & ancrage mémoire long terme',
    color: 'from-cyan-500 to-blue-500',
    borderColor: 'border-cyan-500/40',
    bgColor: 'bg-cyan-950/20',
    textColor: 'text-cyan-400',
    planRequired: 'free',
  },
  {
    id: 'feynman',
    number: 3,
    title: 'La Technique de Feynman',
    shortSummary: 'Expliquer simplement pour comprendre à fond.',
    explanation: 'Essayez d’expliquer votre cours avec des mots tellement simples qu’un enfant de 10 ans pourrait vous comprendre. Si vous bloquez sur un mot ou une idée, c’est la preuve exacte du passage que vous devez retravailler.',
    badge: '45 min focus • 10 min pause',
    focusBlockDuration: 45,
    breakBlockDuration: 10,
    tagline: 'Vulgarisation, reformulation & élimination des blocages',
    color: 'from-purple-500 to-indigo-500',
    borderColor: 'border-purple-500/40',
    bgColor: 'bg-purple-950/20',
    textColor: 'text-purple-400',
    planRequired: 'pro',
  },
  {
    id: 'time_blocking',
    number: 4,
    title: 'Le Time Blocking',
    shortSummary: 'Découper sa semaine en blocs horaires.',
    explanation: 'Remplissez votre calendrier à l’avance avec des plages horaires fixes et obligatoires dédiées à une seule matière (ex: Mardi 14h-16h : Économie). Plus besoin de réfléchir par quoi commencer en ouvrant votre sac.',
    badge: '75 min focus • 15 min pause',
    focusBlockDuration: 75,
    breakBlockDuration: 15,
    tagline: 'Grands blocs continus & immersion mono-matière',
    color: 'from-indigo-500 to-cyan-500',
    borderColor: 'border-indigo-500/40',
    bgColor: 'bg-indigo-950/20',
    textColor: 'text-indigo-400',
    planRequired: 'pro',
  },
  {
    id: 'two_minutes_rule',
    number: 5,
    title: 'La Règle des 2 Minutes',
    shortSummary: 'Vaincre la flemme immédiatement.',
    explanation: 'Si une tâche liée aux études prend moins de 2 minutes (ouvrir un logiciel de cours, ranger ses fiches), faites-la tout de suite. Pour les gros devoirs, dites-vous : "Je m’y mets juste 2 minutes", car le plus dur, c’est simplement de lancer le mouvement.',
    badge: '25 min focus • Amorçage direct',
    focusBlockDuration: 25,
    breakBlockDuration: 5,
    tagline: 'Action immédiate & destruction de la procrastination',
    color: 'from-emerald-500 to-teal-500',
    borderColor: 'border-emerald-500/40',
    bgColor: 'bg-emerald-950/20',
    textColor: 'text-emerald-400',
    planRequired: 'free',
  },
];

export const FREE_PACING_IDS: StudyPacing[] = ['pomodoro', 'active_recall_spaced', 'two_minutes_rule'];
export const PRO_PACING_IDS: StudyPacing[] = ['feynman', 'time_blocking'];

export function isPacingAllowedForPlan(id: StudyPacing | string, planTier: 'free' | 'pro' | 'plus' = 'free'): boolean {
  if (planTier === 'pro' || planTier === 'plus') return true;
  return FREE_PACING_IDS.includes(id as StudyPacing);
}

export function getPacingStrategy(id: StudyPacing | string): PacingStrategyInfo {
  // Normalize legacy values
  if (id === 'spaced_repetition' || id === 'active_recall' || id === 'balanced') {
    return PACING_STRATEGIES[1]; // active_recall_spaced
  }
  if (id === 'deep_work') {
    return PACING_STRATEGIES[3]; // time_blocking
  }
  const match = PACING_STRATEGIES.find(p => p.id === id);
  return match || PACING_STRATEGIES[1]; // default to active_recall_spaced
}

export interface ScheduleDaytimeMetrics {
  daysWithClasses: number;
  totalWeeklyClassMinutes: number;
  totalWeeklyClassHours: number;
  lateDaysCount: number; // fins >= 17:00
  earlyDaysCount: number; // fins <= 14:30
  lateDays: { day: number; name: string; time: string }[];
  earlyDays: { day: number; name: string; time: string }[];
  
  // Analyse fine du temps libre en journée (entre 08h00 et 18h00)
  totalDaytimeFreeMinutes: number;
  totalDaytimeFreeHours: number;
  majorDaytimeGaps: { day: number; name: string; start: string; end: string; durationMin: number }[];
  majorFreeBlocksCount: number; // Trous >= 90 min + demi-journées libres (matin/après-midi) + jours sans cours
  largeDaytimeBlocksCount: number; // Blocs continus >= 120 min (2h+)
  hasSignificantDaytimeFreeTime: boolean; // >= 10h de libre en journée ou >= 2 grands blocs de libre >= 90m
  isContinuousDense: boolean; // Journées compactes sans trous significatifs (< 45m de pause)
  isFragmentedGaps: boolean; // Petits trous courts (30-60m) sans grands blocs continus
  freeDaysCount: number; // Jours de la semaine ouvrée sans aucun cours
}

export interface PacingRecommendation {
  recommendedIds: StudyPacing[];
  primaryId: StudyPacing;
  notRecommendedIds: StudyPacing[];
  rationale: string;
  contextTag: string;
  lateDaysCount: number;
  earlyDaysCount: number;
  totalDaytimeFreeHours?: number;
  majorFreeBlocksCount?: number;
  hasSignificantDaytimeFreeTime?: boolean;
}

/**
 * Analyse fine de la grille horaire de l'étudiant :
 * Évalue non seulement l'heure de fin des cours (tôt vs tard),
 * mais aussi et surtout le volume de temps libre disponible en journée
 * (trous entre les cours, matinées/après-midis libres, jours off).
 */
export function analyzeScheduleDaytimeMetrics(
  classSlots: { startTime: string; endTime: string; dayOfWeek: number }[] = [],
  _subjectsCount: number = 0
): ScheduleDaytimeMetrics {
  const safeSlots = Array.isArray(classSlots) 
    ? classSlots.filter(s => s && s.startTime && s.endTime && typeof s.dayOfWeek === 'number') 
    : [];

  const weekdayNames = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const hasSaturday = safeSlots.some(s => s.dayOfWeek === 5);
  const evaluatedDaysCount = hasSaturday ? 6 : 5;

  const lateDays: { day: number; name: string; time: string }[] = [];
  const earlyDays: { day: number; name: string; time: string }[] = [];
  const majorDaytimeGaps: { day: number; name: string; start: string; end: string; durationMin: number }[] = [];

  let daysWithClasses = 0;
  let freeDaysCount = 0;
  let totalWeeklyClassMinutes = 0;
  let totalDaytimeFreeMinutes = 0;
  let majorFreeBlocksCount = 0;
  let largeDaytimeBlocksCount = 0;
  let fragmentedGapsCount = 0;
  let denseContinuousDaysCount = 0;

  const parseTimeMin = (timeStr: string): number => {
    const parts = timeStr.split(':');
    if (parts.length < 2) return 0;
    const h = parseInt(parts[0], 10);
    const m = parseInt(parts[1], 10);
    return (isNaN(h) ? 0 : h) * 60 + (isNaN(m) ? 0 : m);
  };

  const formatMinToTime = (min: number): string => {
    const h = Math.floor(min / 60);
    const m = min % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
  };

  for (let day = 0; day < evaluatedDaysCount; day++) {
    const daySlots = safeSlots.filter(s => s.dayOfWeek === day);

    // Journée sans aucun cours
    if (daySlots.length === 0) {
      freeDaysCount++;
      // Dans la plage 08h00 - 18h00 (600 min), toute la journée est libre
      totalDaytimeFreeMinutes += 600;
      majorFreeBlocksCount += 1;
      largeDaytimeBlocksCount += 1;
      continue;
    }

    daysWithClasses++;

    // Extraire et fusionner les intervalles pour obtenir les cours continus réels
    const rawIntervals = daySlots.map(s => ({
      start: parseTimeMin(s.startTime),
      end: parseTimeMin(s.endTime)
    })).filter(i => i.end > i.start).sort((a, b) => a.start - b.start);

    if (rawIntervals.length === 0) {
      continue;
    }

    const mergedIntervals: { start: number; end: number }[] = [];
    rawIntervals.forEach(cur => {
      if (mergedIntervals.length === 0) {
        mergedIntervals.push({ ...cur });
      } else {
        const prev = mergedIntervals[mergedIntervals.length - 1];
        if (cur.start <= prev.end) {
          prev.end = Math.max(prev.end, cur.end);
        } else {
          mergedIntervals.push({ ...cur });
        }
      }
    });

    // Durée totale des cours de la journée
    let dayClassMins = 0;
    mergedIntervals.forEach(inv => {
      const dur = inv.end - inv.start;
      dayClassMins += dur;
      totalWeeklyClassMinutes += dur;
    });

    const dayStartMin = mergedIntervals[0].start;
    const dayEndMin = mergedIntervals[mergedIntervals.length - 1].end;

    // Détection fin tardive ou fin tôt
    if (dayEndMin >= 1020) { // >= 17:00
      lateDays.push({ day, name: weekdayNames[day], time: formatMinToTime(dayEndMin) });
    } else if (dayEndMin <= 870) { // <= 14:30
      earlyDays.push({ day, name: weekdayNames[day], time: formatMinToTime(dayEndMin) });
    }

    // 1. Matinée libre avant le 1er cours (entre 08h00 [480m] et dayStartMin)
    if (dayStartMin > 480) {
      const morningFree = Math.min(600, dayStartMin - 480);
      if (morningFree >= 45) {
        totalDaytimeFreeMinutes += morningFree;
        if (morningFree >= 90) majorFreeBlocksCount++;
        if (morningFree >= 120) largeDaytimeBlocksCount++;
      }
    }

    // 2. Après-midi libre après le dernier cours (entre dayEndMin et 18h00 [1080m])
    if (dayEndMin < 1080) {
      const afternoonFree = Math.min(600, 1080 - dayEndMin);
      if (afternoonFree >= 45) {
        totalDaytimeFreeMinutes += afternoonFree;
        if (afternoonFree >= 90) majorFreeBlocksCount++;
        if (afternoonFree >= 120) largeDaytimeBlocksCount++;
      }
    }

    // 3. Trous et fenêtres libres entre deux cours de la journée
    let dayGapsCount = 0;
    for (let i = 0; i < mergedIntervals.length - 1; i++) {
      const gapMin = mergedIntervals[i + 1].start - mergedIntervals[i].end;
      if (gapMin >= 45) {
        totalDaytimeFreeMinutes += gapMin;
        dayGapsCount++;
        if (gapMin >= 90) {
          majorFreeBlocksCount++;
          majorDaytimeGaps.push({
            day,
            name: weekdayNames[day],
            start: formatMinToTime(mergedIntervals[i].end),
            end: formatMinToTime(mergedIntervals[i + 1].start),
            durationMin: gapMin
          });
          if (gapMin >= 120) largeDaytimeBlocksCount++;
        } else {
          fragmentedGapsCount++;
        }
      }
    }

    // Détection journée continue compacte (cours étalés sur plus de 5h avec moins de 45m de pause)
    if (dayEndMin - dayStartMin >= 300 && dayGapsCount === 0) {
      denseContinuousDaysCount++;
    }
  }

  const totalDaytimeFreeHours = Math.round((totalDaytimeFreeMinutes / 60) * 10) / 10;
  const totalWeeklyClassHours = Math.round((totalWeeklyClassMinutes / 60) * 10) / 10;

  // L'étudiant a beaucoup de temps libre en journée si :
  // - au moins 10h de libre en journée dans la semaine,
  // - OU au moins 2 grands blocs de libre (trous >= 90 min ou demi-journées libres),
  // - OU au moins 1 journée complète sans cours.
  const hasSignificantDaytimeFreeTime = totalDaytimeFreeHours >= 10 || majorFreeBlocksCount >= 2 || freeDaysCount >= 1;
  const isContinuousDense = daysWithClasses >= 3 && denseContinuousDaysCount >= 2 && majorFreeBlocksCount === 0;
  const isFragmentedGaps = fragmentedGapsCount >= 3 && majorFreeBlocksCount === 0;

  return {
    daysWithClasses,
    totalWeeklyClassMinutes,
    totalWeeklyClassHours,
    lateDaysCount: lateDays.length,
    earlyDaysCount: earlyDays.length,
    lateDays,
    earlyDays,
    totalDaytimeFreeMinutes,
    totalDaytimeFreeHours,
    majorDaytimeGaps,
    majorFreeBlocksCount,
    largeDaytimeBlocksCount,
    hasSignificantDaytimeFreeTime,
    isContinuousDense,
    isFragmentedGaps,
    freeDaysCount
  };
}

/**
 * Évalue la grille horaire de manière multi-factorielle :
 * 1. Présence de temps libre en journée (trous entre les cours, demi-journées libres, jours off)
 * 2. Heures de fin de cours (fin précoce vs tardive)
 * 3. Charge continue vs espacée
 * 4. Nombre de matières
 */
export function recommendPacingStrategies(
  subjectsCount: number = 0,
  classSlots: { startTime: string; endTime: string; dayOfWeek: number }[] = [],
  _totalWeeklyClassHours?: number
): PacingRecommendation {
  const metrics = analyzeScheduleDaytimeMetrics(classSlots, subjectsCount);
  const {
    daysWithClasses,
    lateDaysCount,
    earlyDaysCount,
    lateDays,
    earlyDays,
    totalDaytimeFreeHours,
    majorFreeBlocksCount,
    hasSignificantDaytimeFreeTime,
    isContinuousDense,
    isFragmentedGaps,
    freeDaysCount
  } = metrics;

  // CAS 0 : Grille sans cours enregistrés ou nouveau départ
  if (daysWithClasses === 0) {
    return {
      primaryId: 'active_recall_spaced',
      recommendedIds: ['active_recall_spaced', 'pomodoro'],
      notRecommendedIds: [],
      lateDaysCount: 0,
      earlyDaysCount: 0,
      totalDaytimeFreeHours: 0,
      majorFreeBlocksCount: 0,
      hasSignificantDaytimeFreeTime: false,
      contextTag: `Configuration initiale • ${subjectsCount} matières`,
      rationale: `Définissez votre méthode d'étude de prédilection. Vous pourrez alterner entre micro-sessions rythmées (Pomodoro), auto-évaluation active (Active Recall) ou blocs d'immersion (Time Blocking).`,
    };
  }

  // CAS 1 : BEAUCOUP DE TEMPS LIBRE EN JOURNÉE (Trous importants, matinées/après-midis libres, jours off)
  // L'IA ne s'arrête pas à l'heure de fin tardive : si l'étudiant a de grands blocs libres en journée,
  // le Time Blocking et l'Active Recall sont fortement conseillés pour rentabiliser ces créneaux diurnes !
  if (hasSignificantDaytimeFreeTime) {
    // Sous-cas 1A : Certaines journées finissent tard MAIS avec de gros trous/temps libre en journée
    if (lateDaysCount >= 2) {
      const lateDaysStr = lateDays.map(d => `${d.name} (${d.time})`).join(', ');
      return {
        primaryId: 'time_blocking',
        recommendedIds: ['time_blocking', 'active_recall_spaced', 'feynman'],
        notRecommendedIds: [],
        lateDaysCount,
        earlyDaysCount,
        totalDaytimeFreeHours,
        majorFreeBlocksCount,
        hasSignificantDaytimeFreeTime: true,
        contextTag: `Fin tardive mais ${totalDaytimeFreeHours}h libres en journée (${majorFreeBlocksCount} créneaux ≥ 1h30) • Time Blocking optimal`,
        rationale: `Bien que vos cours s'étirent tard certains jours (${lateDaysStr}), vous disposez d'environ ${totalDaytimeFreeHours}h de temps libre pendant la journée réparties sur ${majorFreeBlocksCount} grands créneaux (trous de plus d'1h30 entre vos cours ou demi-journées libres). C'est le contexte idéal pour le Time Blocking (75 min) : vous exploitez ces plages de liberté en journée sur le campus ou à la bibliothèque pour avancer en profondeur, sans devoir travailler épuisé tard le soir. Nous vous conseillons de le combiner avec l'Active Recall (45 min).`,
      };
    }

    // Sous-cas 1B : Journées finissant tôt ou grille très aérée
    const earlyDaysStr = earlyDays.length > 0 ? earlyDays.map(d => `${d.name} (${d.time})`).join(', ') : '';
    const detailsDays = earlyDaysStr ? ` (${earlyDaysStr})` : freeDaysCount > 0 ? ` (${freeDaysCount} jour(s) sans cours)` : '';

    return {
      primaryId: 'time_blocking',
      recommendedIds: ['time_blocking', 'active_recall_spaced', 'feynman'],
      notRecommendedIds: [],
      lateDaysCount,
      earlyDaysCount,
      totalDaytimeFreeHours,
      majorFreeBlocksCount,
      hasSignificantDaytimeFreeTime: true,
      contextTag: `Grandes plages libres en journée (${totalDaytimeFreeHours}h libres • ${majorFreeBlocksCount} créneaux ≥ 1h30) • Immersion profonde`,
      rationale: `Excellente configuration : votre semaine comporte environ ${totalDaytimeFreeHours}h de temps libre diurne et ${majorFreeBlocksCount} grandes plages dégagées${detailsDays}. Le Time Blocking (75 min) est la méthode reine pour vous immerger sans coupure dans vos matières majeures, complété par l'Active Recall (45 min) et la Technique de Feynman pour tester votre compréhension à fond.`,
    };
  }

  // CAS 2 : JOURNÉES DENSES EN CONTINU SANS TEMPS LIBRE EN JOURNÉE (Cours non-stop jusqu'à 17h/18h)
  // Ici seulement, l'absence de pause en journée combinée à une fin tardive justifie d'éviter le Time Blocking le soir.
  if (lateDaysCount >= 3 || isContinuousDense) {
    const lateDaysStr = lateDays.map(d => `${d.name} (${d.time})`).join(', ');
    return {
      primaryId: 'pomodoro',
      recommendedIds: ['pomodoro', 'two_minutes_rule'],
      notRecommendedIds: ['time_blocking'],
      lateDaysCount,
      earlyDaysCount,
      totalDaytimeFreeHours,
      majorFreeBlocksCount,
      hasSignificantDaytimeFreeTime: false,
      contextTag: `Rythme dense en continu (très peu de pauses en journée, cours jusqu'à 17h30) • Micro-sessions`,
      rationale: `Vos cours s'enchaînent de manière compacte avec très peu de pauses en journée (${totalDaytimeFreeHours}h de respiration diurne seulement) et se terminent tard (${lateDaysStr}). Après de longues heures d'attention ininterrompue, s'imposer des blocs lourds de 75 min (Time Blocking) le soir risque d'engendrer de la saturation mentale. Nous vous recommandons les micro-sessions de 25 min (Pomodoro & Règle des 2 Minutes) pour alterner vos révisions en douceur sans fatigue excessive.`,
    };
  }

  // CAS 3 : JOURNÉES MORCELÉES (PETITS CRÉNEAUX LIBRES < 60 min)
  if (isFragmentedGaps) {
    return {
      primaryId: 'pomodoro',
      recommendedIds: ['pomodoro', 'two_minutes_rule', 'active_recall_spaced'],
      notRecommendedIds: ['time_blocking'],
      lateDaysCount,
      earlyDaysCount,
      totalDaytimeFreeHours,
      majorFreeBlocksCount,
      hasSignificantDaytimeFreeTime: false,
      contextTag: `Journées morcelées (${totalDaytimeFreeHours}h libres en petits créneaux de 30-60 min) • Micro-sessions agiles`,
      rationale: `Votre emploi du temps comprend des respirations en journée, mais réparties en petits intervalles de moins d'une heure entre deux salles. Les micro-sessions de 25 min (Pomodoro) et la Règle des 2 Minutes sont parfaitement calibrées pour rentabiliser ces pauses sans stress.`,
    };
  }

  // CAS 4 : VOLUME ÉLEVÉ DE MATIÈRES (>= 9 matières)
  if (subjectsCount >= 9) {
    return {
      primaryId: 'pomodoro',
      recommendedIds: ['pomodoro', 'two_minutes_rule', 'active_recall_spaced'],
      notRecommendedIds: ['time_blocking'],
      lateDaysCount,
      earlyDaysCount,
      totalDaytimeFreeHours,
      majorFreeBlocksCount,
      hasSignificantDaytimeFreeTime: false,
      contextTag: `Large volume (${subjectsCount} matières) • Micro-sessions agiles`,
      rationale: `Avec ${subjectsCount} matières distinctes, le risque est d'en délaisser certaines. Des micro-sessions régulières de 25 min (Pomodoro & Règle des 2 Minutes) vous permettent de balayer tout le programme chaque semaine avec agilité.`,
    };
  }

  // CAS 5 : SEMAINE ÉQUILIBRÉE STANDARD
  return {
    primaryId: 'active_recall_spaced',
    recommendedIds: ['active_recall_spaced', 'pomodoro', 'feynman'],
    notRecommendedIds: [],
    lateDaysCount,
    earlyDaysCount,
    totalDaytimeFreeHours,
    majorFreeBlocksCount,
    hasSignificantDaytimeFreeTime: totalDaytimeFreeHours >= 8,
    contextTag: `Semaine équilibrée (${totalDaytimeFreeHours}h libres en journée) • ${subjectsCount} matières`,
    rationale: `Pour votre emploi du temps régulier avec environ ${totalDaytimeFreeHours}h de respiration en journée, l'Active Recall & Spaced Repetition (45 min) offre le meilleur ancrage mémoriel pour les examens, complété par la Technique de Feynman pour surmonter les points difficiles.`,
  };
}
