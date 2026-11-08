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
    planRequired: 'free',
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
    planRequired: 'free',
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

import { FREE_METHODS, PRO_METHODS, isMethodAllowedForTier } from './subscriptionPlans';

export const FREE_PACING_IDS = FREE_METHODS;
export const PRO_PACING_IDS = PRO_METHODS;

export function isPacingAllowedForPlan(id: StudyPacing | string, planTier: 'free' | 'pro' | 'plus' = 'free'): boolean {
  return isMethodAllowedForTier(id, planTier);
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

/* ------------------------------------------------------------------------------------------------
 * RECOMMANDATION DE KONAN (réservée à KONAN PRO)
 *
 * Principe : on ne regarde pas seulement l'heure de fin des cours, on reconstruit les vrais
 * créneaux où l'élève peut étudier, jour par jour, puis on choisit la combinaison qui y tient.
 *
 * Créneaux d'étude reconstruits pour chaque jour de cours :
 *  - le matin avant le 1er cours (si le cours commence à 9h ou plus tard) ;
 *  - les trous entre deux cours (10 min retirées de chaque côté pour les déplacements) ;
 *  - l'après-midi : 1 h de récupération après le dernier cours (trajet, repas), jusqu'à 18h30 ;
 *  - le soir : de 19h30 (ou plus tard) jusqu'à 21h30, heure limite pour protéger le sommeil.
 * Un créneau est « frais » s'il n'arrive pas après une grosse journée (6 h de cours ou plus,
 * ou fin des cours à 17h ou plus tard) : après une telle journée, l'attention tient mal plus de 25-30 min.
 *
 * Bases scientifiques utilisées (sans jargon pour l'élève) :
 *  - effet d'espacement : revoir un cours plusieurs fois espacées (J+1, J+3, J+7) fait mieux retenir ;
 *  - effet de test : se tester de mémoire fait plus retenir que relire ;
 *  - les notions difficiles demandent du temps continu quand l'esprit est frais (blocs longs) ;
 *  - fatigue après une longue journée : séances courtes avec vraie pause ;
 *  - sommeil : arrêter vers 21h30 aide la mémoire à fixer ce qui a été appris.
 * ---------------------------------------------------------------------------------------------- */

const DAY_NAMES = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
const DAYTIME_END = 18 * 60 + 30; // 18h30
const EVENING_START = 19 * 60 + 30; // 19h30
const SLEEP_LIMIT = 21 * 60 + 30; // 21h30

export interface StudyWindow {
  day: number;
  dayName: string;
  start: number; // minutes depuis minuit
  end: number;
  minutes: number;
  moment: 'matin' | 'trou' | 'apres-midi' | 'soir';
  fresh: boolean;
}

export interface WeekStudyProfile {
  daysWithClasses: number;
  weeklyClassMinutes: number;
  windows: StudyWindow[];
  longFreshDaytime: StudyWindow[]; // >= 90 min, en journée, esprit frais
  mediumFreshDaytime: StudyWindow[]; // 45 à 89 min, en journée, esprit frais
  shortGaps: StudyWindow[]; // 25 à 44 min entre deux cours
  tiredEvenings: { day: number; dayName: string; classEnd: number; classMinutes: number }[];
  freeWeekendDays: string[]; // Samedi / Dimanche sans cours
  freeWeekdays: string[]; // Lundi à Vendredi sans cours
}

const toMin = (t: string): number => {
  const [h, m] = (t || '').split(':');
  const hh = parseInt(h, 10);
  const mm = parseInt(m, 10);
  return (isNaN(hh) ? 0 : hh) * 60 + (isNaN(mm) ? 0 : mm);
};

/** 13h, 17h30 */
export const formatHour = (min: number): string => {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m === 0 ? `${h}h` : `${h}h${m.toString().padStart(2, '0')}`;
};

/** Reconstruit, jour par jour, les créneaux où l'élève peut réellement étudier. */
export function buildWeekStudyProfile(
  classSlots: { startTime: string; endTime: string; dayOfWeek: number }[] = []
): WeekStudyProfile {
  const slots = Array.isArray(classSlots)
    ? classSlots.filter(s => s && s.startTime && s.endTime && typeof s.dayOfWeek === 'number' && s.dayOfWeek >= 0 && s.dayOfWeek <= 6)
    : [];

  const windows: StudyWindow[] = [];
  const tiredEvenings: WeekStudyProfile['tiredEvenings'] = [];
  const freeWeekendDays: string[] = [];
  const freeWeekdays: string[] = [];
  let daysWithClasses = 0;
  let weeklyClassMinutes = 0;

  const push = (day: number, start: number, end: number, moment: StudyWindow['moment'], fresh: boolean) => {
    const minutes = end - start;
    // Un trou entre deux cours sert dès 10 min (fiche, questions rapides) ; ailleurs, 25 min minimum
    if (minutes >= (moment === 'trou' ? 10 : 25)) windows.push({ day, dayName: DAY_NAMES[day], start, end, minutes, moment, fresh });
  };

  for (let day = 0; day < 7; day++) {
    const intervals = slots
      .filter(s => s.dayOfWeek === day)
      .map(s => ({ start: toMin(s.startTime), end: toMin(s.endTime) }))
      .filter(i => i.end > i.start)
      .sort((a, b) => a.start - b.start);

    if (intervals.length === 0) {
      if (day >= 5) {
        freeWeekendDays.push(DAY_NAMES[day]);
      } else {
        freeWeekdays.push(DAY_NAMES[day]);
        // Jour de semaine sans cours : deux grands blocs frais (matin et après-midi)
        push(day, 8 * 60, 12 * 60, 'matin', true);
        push(day, 15 * 60, DAYTIME_END, 'apres-midi', true);
      }
      continue;
    }

    // Fusion des cours qui se chevauchent ou se touchent
    const merged: { start: number; end: number }[] = [];
    for (const cur of intervals) {
      const prev = merged[merged.length - 1];
      if (prev && cur.start <= prev.end) prev.end = Math.max(prev.end, cur.end);
      else merged.push({ ...cur });
    }

    daysWithClasses++;
    const classMinutes = merged.reduce((acc, i) => acc + (i.end - i.start), 0);
    weeklyClassMinutes += classMinutes;
    const firstStart = merged[0].start;
    const lastEnd = merged[merged.length - 1].end;
    const heavyDay = classMinutes >= 360 || lastEnd >= 17 * 60;

    // Matin avant le premier cours
    if (firstStart >= 9 * 60) push(day, 7 * 60 + 30, firstStart - 15, 'matin', true);

    // Trous entre les cours (5 min de déplacement de chaque côté ; 45 min de repas si le trou tombe à midi)
    for (let i = 0; i < merged.length - 1; i++) {
      let start = merged[i].end + 5;
      const end = merged[i + 1].start - 5;
      if (start >= 11 * 60 + 30 && start <= 13 * 60 + 30) start += 45;
      push(day, start, end, 'trou', true);
    }

    // Après-midi (après 1 h de récupération) puis soir
    const afterClass = lastEnd + 60;
    if (afterClass < DAYTIME_END) {
      push(day, afterClass, DAYTIME_END, 'apres-midi', classMinutes < 360);
      push(day, EVENING_START, SLEEP_LIMIT, 'soir', !heavyDay);
    } else {
      push(day, Math.max(afterClass, EVENING_START), SLEEP_LIMIT, 'soir', !heavyDay);
    }
    if (heavyDay) tiredEvenings.push({ day, dayName: DAY_NAMES[day], classEnd: lastEnd, classMinutes });
  }

  const daytime = windows.filter(w => w.moment !== 'soir' && w.fresh);
  return {
    daysWithClasses,
    weeklyClassMinutes,
    windows,
    longFreshDaytime: daytime.filter(w => w.minutes >= 90),
    mediumFreshDaytime: daytime.filter(w => w.minutes >= 45 && w.minutes < 90),
    shortGaps: windows.filter(w => w.moment === 'trou' && w.minutes < 45),
    tiredEvenings,
    freeWeekendDays,
    freeWeekdays,
  };
}

const listWindows = (ws: StudyWindow[], max = 3): string => {
  const shown = ws.slice(0, max).map(w => `${w.dayName} ${formatHour(w.start)}-${formatHour(w.end)}`);
  const rest = ws.length - shown.length;
  return shown.join(', ') + (rest > 0 ? ` (+${rest})` : '');
};

const listDays = (names: string[]): string => {
  if (names.length <= 1) return names.join('');
  return `${names.slice(0, -1).join(', ')} et ${names[names.length - 1]}`;
};

/**
 * Recommandation de KONAN : choisit la combinaison de 2 méthodes la mieux adaptée aux vrais
 * créneaux libres de l'élève, et l'explique en quelques lignes claires.
 */
export function recommendPacingStrategies(
  subjectsCount: number = 0,
  classSlots: { startTime: string; endTime: string; dayOfWeek: number }[] = [],
  _totalWeeklyClassHours?: number
): PacingRecommendation {
  const metrics = analyzeScheduleDaytimeMetrics(classSlots, subjectsCount);
  const profile = buildWeekStudyProfile(classSlots);
  const base = {
    lateDaysCount: metrics.lateDaysCount,
    earlyDaysCount: metrics.earlyDaysCount,
    totalDaytimeFreeHours: metrics.totalDaytimeFreeHours,
    majorFreeBlocksCount: metrics.majorFreeBlocksCount,
    hasSignificantDaytimeFreeTime: metrics.hasSignificantDaytimeFreeTime,
  };

  // Pas encore d'emploi du temps : recommandation de départ, sans prétendre l'avoir analysé
  if (profile.daysWithClasses === 0) {
    return {
      ...base,
      primaryId: 'pomodoro',
      recommendedIds: ['pomodoro', 'active_recall_spaced'],
      notRecommendedIds: [],
      contextTag: 'Emploi du temps à ajouter',
      rationale:
        "KONAN n'a pas encore votre emploi du temps : ajoutez-le pour une recommandation adaptée à vos créneaux.\n\n" +
        'En attendant : Pomodoro + Active Recall\n' +
        '• Pomodoro : 25 min de travail, 5 min de pause.\n' +
        '• Active Recall : fermez le cours et récitez-le de mémoire, puis revoyez-le le lendemain et 3 jours après.',
    };
  }

  const { longFreshDaytime: long, mediumFreshDaytime: medium, shortGaps, tiredEvenings } = profile;
  const freshDaytimeMinutes = [...long, ...medium].reduce((a, w) => a + w.minutes, 0);
  // Créneaux de journée utilisables même s'ils arrivent après une grosse journée
  const tiredDaytime = profile.windows.filter(w => w.moment !== 'soir' && !w.fresh && w.minutes >= 45);
  const usableDaytimeMinutes = freshDaytimeMinutes + tiredDaytime.reduce((a, w) => a + w.minutes, 0);
  const classHours = Math.round(profile.weeklyClassMinutes / 6) / 10;

  // 1. Ce que KONAN a vu (faits chiffrés tirés de l'emploi du temps)
  const facts: string[] = [];
  facts.push(`${classHours.toString().replace('.', ',')} h de cours sur ${profile.daysWithClasses} jour(s).`);
  if (long.length > 0) {
    facts.push(`${long.length} long(s) créneau(x) libre(s) en journée (1 h 30 ou plus) : ${listWindows(long)}.`);
  } else if (medium.length > 0) {
    facts.push(`Pas de créneau de 1 h 30 en journée ; ${medium.length} créneau(x) moyen(s) : ${listWindows(medium)}.`);
  } else if (tiredDaytime.length > 0) {
    facts.push(`Du temps libre en fin d'après-midi, mais après 6 h de cours ou plus : ${listWindows(tiredDaytime)}.`);
  } else {
    facts.push('Presque pas de temps libre en journée : vos révisions se feront surtout le soir.');
  }
  if (shortGaps.length > 0) {
    facts.push(`${shortGaps.length} petit(s) trou(s) de moins de 45 min entre les cours.`);
  }
  if (tiredEvenings.length > 0) {
    const label = (t: WeekStudyProfile['tiredEvenings'][number]) =>
      t.classEnd >= 17 * 60 ? `${t.dayName} (fin ${formatHour(t.classEnd)})` : `${t.dayName} (${formatHour(t.classMinutes).replace('h', ' h ').trim()} de cours)`;
    facts.push(
      `Soir(s) fatigant(s) : ${tiredEvenings.slice(0, 4).map(label).join(', ')}${tiredEvenings.length > 4 ? '…' : ''}.`
    );
  }
  if (profile.freeWeekdays.length > 0) facts.push(`Jour(s) sans cours en semaine : ${listDays(profile.freeWeekdays)}.`);

  // Révision espacée : où placer la révision de la semaine
  const weeklyReviewDay = profile.freeWeekendDays.includes('samedi')
    ? 'samedi matin'
    : profile.freeWeekendDays.includes('dimanche')
    ? 'dimanche'
    : 'votre jour le plus léger';
  const spacingLine = `Espacement : revoyez chaque cours le soir même ou le lendemain, puis 3 jours après, puis ${weeklyReviewDay} (révision de la semaine).`;

  const tiredDaysStr = listDays(tiredEvenings.map(t => t.dayName));
  const many = subjectsCount >= 8;
  const interleaving = many ? `\nAvec ${subjectsCount} matières : 2 matières différentes par séance, jamais une seule toute la soirée.` : '';

  let primaryId: StudyPacing;
  let recommendedIds: StudyPacing[];
  let notRecommendedIds: StudyPacing[] = [];
  let contextTag: string;
  let plan: string[];
  let why: string;

  if (long.length >= 2) {
    // Assez de longs créneaux frais pour avancer en profondeur
    primaryId = 'time_blocking';
    recommendedIds = ['time_blocking', 'active_recall_spaced'];
    contextTag = `${long.length} longs créneaux libres • ${tiredEvenings.length} soir(s) chargé(s)`;
    plan = [
      `• Time Blocking sur ${listWindows(long, 3)} : 75 min sur une seule matière difficile (nouveau chapitre, exercices), puis 15 min de pause.`,
      `• Active Recall les autres jours${tiredEvenings.length > 0 ? ` (surtout ${tiredDaysStr})` : ''} : 30 à 45 min à vous tester de mémoire, sans relire.`,
    ];
    why = "Vos longs créneaux arrivent quand votre esprit est frais : c'est le bon moment pour comprendre les notions difficiles. Les autres jours servent à les revoir de façon espacée, ce qui les fixe dans la mémoire.";
  } else if (long.length + medium.length >= 3) {
    // Créneaux moyens réguliers : le format 45 min de l'Active Recall y tient parfaitement
    primaryId = 'active_recall_spaced';
    const second: StudyPacing = tiredEvenings.length >= 2 ? 'pomodoro' : 'feynman';
    recommendedIds = ['active_recall_spaced', second];
    notRecommendedIds = long.length === 0 ? ['time_blocking'] : [];
    contextTag = `${long.length + medium.length} créneaux de 45 min ou plus • ${tiredEvenings.length} soir(s) chargé(s)`;
    plan = [
      `• Active Recall sur ${listWindows([...long, ...medium], 3)} : 45 min à vous tester de mémoire (questions, récitation), 15 min de pause.`,
      second === 'pomodoro'
        ? `• Pomodoro les soirs chargés (${tiredDaysStr}) : 25 min puis 5 min de pause, pas plus de 2 tours.`
        : '• Feynman pour chaque nouveau chapitre : expliquez-le à voix haute avec des mots simples ; là où vous bloquez, c’est à retravailler.',
    ];
    why =
      second === 'pomodoro'
        ? 'Vos créneaux font surtout 45 min à 1 h : la bonne durée pour se tester. Les soirs après une longue journée, l’attention baisse vite, d’où des séances courtes.'
        : 'Vos créneaux font surtout 45 min à 1 h et vos soirs restent légers : assez pour se tester et bien comprendre chaque chapitre.';
  } else if (shortGaps.length >= 3 && usableDaytimeMinutes < 180) {
    // Journée hachée : beaucoup de petits trous, peu de vrais créneaux
    primaryId = 'pomodoro';
    recommendedIds = ['pomodoro', 'two_minutes_rule'];
    notRecommendedIds = ['time_blocking'];
    contextTag = `${shortGaps.length} petits trous entre les cours • peu de longs créneaux`;
    plan = [
      `• Règle des 2 minutes dans les petits trous entre les cours : relire une fiche, répondre à 5 questions, sans attendre.`,
      `• Pomodoro le soir : 25 min puis 5 min de pause, 2 à 3 tours maximum${tiredEvenings.length > 0 ? ' (2 tours seulement les soirs fatigants)' : ''}.`,
    ];
    why = 'Vos journées sont coupées en petits morceaux : de courtes révisions répétées dans la journée valent mieux qu’une longue séance que vous n’aurez pas le temps de faire.';
  } else {
    // Révisions surtout le soir, souvent après de longues journées
    primaryId = 'pomodoro';
    recommendedIds = ['pomodoro', 'active_recall_spaced'];
    notRecommendedIds = ['time_blocking'];
    contextTag = `Révisions surtout le soir • ${tiredEvenings.length} soir(s) chargé(s)`;
    plan = [
      tiredDaytime.length > 0
        ? `• Pomodoro en fin d'après-midi (${listWindows(tiredDaytime, 2)}) et le soir : 25 min puis 5 min de pause, 2 à 3 tours, arrêt à 21h30.`
        : '• Pomodoro le soir : 25 min puis 5 min de pause, 2 à 3 tours, arrêt à 21h30.',
      '• Active Recall dans chaque tour : cahier fermé, récitez ou répondez à des questions, puis vérifiez.',
    ];
    why = 'Après une longue journée de cours, l’attention tient environ 25 min : des séances courtes où vous vous testez retiennent bien plus que 2 h de relecture fatiguée.';
  }

  const SHORT_NAMES: Record<string, string> = {
    pomodoro: 'Pomodoro',
    active_recall_spaced: 'Active Recall (révision espacée)',
    feynman: 'Feynman',
    time_blocking: 'Time Blocking',
    two_minutes_rule: 'Règle des 2 minutes',
  };
  const methodsTitle = recommendedIds.map(id => SHORT_NAMES[id] || getPacingStrategy(id).title).join(' + ');
  const rationale = [
    'Ce que KONAN a vu :',
    ...facts.map(f => `• ${f}`),
    '',
    `Recommandation : ${methodsTitle}`,
    ...plan,
    spacingLine + interleaving,
    '',
    `Pourquoi : ${why}`,
  ].join('\n');

  return {
    ...base,
    hasSignificantDaytimeFreeTime: long.length >= 2 || freshDaytimeMinutes >= 360,
    primaryId,
    recommendedIds,
    notRecommendedIds,
    contextTag,
    rationale,
  };
}