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
  },
];

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

export interface PacingRecommendation {
  recommendedIds: StudyPacing[];
  primaryId: StudyPacing;
  notRecommendedIds: StudyPacing[];
  rationale: string;
  contextTag: string;
  lateDaysCount: number;
  earlyDaysCount: number;
}

/**
 * Evaluates schedule density, finishing times per day across the entire week,
 * and subject count to recommend the 1 or 2 most suited pacing strategies.
 *
 * Rules:
 * - If >= 3 days finish late (>= 17h/17h30) -> Recommends Pomodoro (25m) & 2-Minutes Rule, discommends Time Blocking (75m).
 * - If >= 3 or 4 days finish early (<= 14h30) -> Recommends Time Blocking (75m), Active Recall (45m), & Feynman (45m).
 * - Multi-subject high load (>= 9 subjects) -> Recommends micro-sessions.
 */
export function recommendPacingStrategies(
  subjectsCount: number = 0,
  classSlots: { startTime: string; endTime: string; dayOfWeek: number }[] = [],
  _totalWeeklyClassHours?: number
): PacingRecommendation {
  const safeSlots = Array.isArray(classSlots) 
    ? classSlots.filter(s => s && s.endTime && typeof s.dayOfWeek === 'number') 
    : [];

  const weekdayNames = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const dailyLatestEndMins: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  const dailyLatestFormatted: Record<number, string> = { 0: '', 1: '', 2: '', 3: '', 4: '', 5: '' };

  safeSlots.forEach(slot => {
    if (slot.dayOfWeek >= 0 && slot.dayOfWeek <= 5) {
      const parts = slot.endTime.split(':');
      if (parts.length >= 2) {
        const mins = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
        if (!isNaN(mins) && mins > dailyLatestEndMins[slot.dayOfWeek]) {
          dailyLatestEndMins[slot.dayOfWeek] = mins;
          dailyLatestFormatted[slot.dayOfWeek] = slot.endTime;
        }
      }
    }
  });

  const lateDays: { day: number; name: string; time: string }[] = [];
  const earlyDays: { day: number; name: string; time: string }[] = [];
  let daysWithClasses = 0;

  // Évalue du lundi au vendredi (et samedi si cours détectés)
  const maxDay = dailyLatestEndMins[5] > 0 ? 5 : 4;
  for (let day = 0; day <= maxDay; day++) {
    const endMins = dailyLatestEndMins[day];
    if (endMins > 0) {
      daysWithClasses++;
      if (endMins >= 1020) { // 17:00 ou plus tard (ex: 17:30 = 1050)
        lateDays.push({ day, name: weekdayNames[day], time: dailyLatestFormatted[day] });
      } else if (endMins <= 870) { // 14:30 ou plus tôt (ex: 12:00, 13:30, 14:00)
        earlyDays.push({ day, name: weekdayNames[day], time: dailyLatestFormatted[day] });
      }
    }
  }

  const lateDaysCount = lateDays.length;
  const earlyDaysCount = earlyDays.length;

  // CAS 0 : Grille sans cours enregistrés ou nouveau départ
  if (daysWithClasses === 0) {
    return {
      primaryId: 'active_recall_spaced',
      recommendedIds: ['active_recall_spaced', 'pomodoro'],
      notRecommendedIds: [],
      lateDaysCount: 0,
      earlyDaysCount: 0,
      contextTag: `Configuration initiale • ${subjectsCount} matières`,
      rationale: `Définissez votre méthode d'étude de prédilection. Vous pourrez alterner entre micro-sessions rythmées (Pomodoro), auto-évaluation active (Active Recall) ou blocs d'immersion (Time Blocking).`,
    };
  }

  // CAS 1 : 3 jours ou plus se terminent très tard dans la semaine (>= 17h/17h30)
  if (lateDaysCount >= 3) {
    const lateDaysStr = lateDays.map(d => `${d.name} (${d.time})`).join(', ');
    return {
      primaryId: 'pomodoro',
      recommendedIds: ['pomodoro', 'two_minutes_rule'],
      notRecommendedIds: ['time_blocking'],
      lateDaysCount,
      earlyDaysCount,
      contextTag: `Rythme intense (${lateDaysCount} jours finissent tard) • ${subjectsCount} matières`,
      rationale: `Dans votre semaine, ${lateDaysCount} journées se terminent très tard (${lateDaysStr}). Avec la fatigue de la journée et ${subjectsCount} matières à gérer, s'imposer des blocs longs de 75 min (Time Blocking) risque d'entraîner saturation mentale et découragement. Nous vous recommandons les micro-sessions de 25 min (La Technique Pomodoro et La Règle des 2 Minutes) pour alterner vos révisions en douceur sans fatigue excessive.`,
    };
  }

  // CAS 2 : 3 ou 4 jours finissent vite / tôt (<= 14h30)
  if (earlyDaysCount >= 3) {
    const earlyDaysStr = earlyDays.map(d => `${d.name} (${d.time})`).join(', ');
    return {
      primaryId: 'time_blocking',
      recommendedIds: ['time_blocking', 'active_recall_spaced', 'feynman'],
      notRecommendedIds: [],
      lateDaysCount,
      earlyDaysCount,
      contextTag: `Après-midis dégagés (${earlyDaysCount} jours finissent tôt) • ${subjectsCount} matières`,
      rationale: `Excellente configuration : ${earlyDaysCount} journées de cours se terminent rapidement (${earlyDaysStr}). Vous disposez de grandes après-midis libres. Nous vous recommandons le Time Blocking (75 min) pour plonger en profondeur sans interruption dans vos matières majeures, combiné à l'Active Recall et à la Technique de Feynman pour tester votre compréhension à fond.`,
    };
  }

  // CAS 3 : Volume élevé de matières (>= 9 matières)
  if (subjectsCount >= 9) {
    return {
      primaryId: 'pomodoro',
      recommendedIds: ['pomodoro', 'two_minutes_rule'],
      notRecommendedIds: ['time_blocking'],
      lateDaysCount,
      earlyDaysCount,
      contextTag: `Large volume (${subjectsCount} matières) • Micro-sessions conseillées`,
      rationale: `Avec ${subjectsCount} matières distinctes, le risque est d'en délaisser certaines. Des micro-sessions régulières de 25 min (Pomodoro & Règle des 2 Minutes) vous permettent de balayer tout le programme chaque semaine avec agilité.`,
    };
  }

  // CAS 4 : Semaine équilibrée standard
  return {
    primaryId: 'active_recall_spaced',
    recommendedIds: ['active_recall_spaced', 'pomodoro', 'feynman'],
    notRecommendedIds: [],
    lateDaysCount,
    earlyDaysCount,
    contextTag: `Semaine équilibrée • ${subjectsCount} matières`,
    rationale: `Pour votre emploi du temps régulier, l'Active Recall & Spaced Repetition (45 min) offre le meilleur ancrage mémoriel pour les examens, complété par la Technique de Feynman pour surmonter les points difficiles.`,
  };
}
