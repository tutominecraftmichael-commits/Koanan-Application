import type { StudySession, Subject } from '../types';
import { DAYS_OF_WEEK } from '../types';
import { getPacingStrategy } from '../lib/pacingStrategies';

export const RFC_DAYS = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'] as const;

/**
 * Format a Date object into iCalendar UTC timestamp string: YYYYMMDDTHHmmSSZ
 */
function formatIcsDate(date: Date): string {
  const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
  return (
    date.getUTCFullYear().toString() +
    pad(date.getUTCMonth() + 1) +
    pad(date.getUTCDate()) +
    'T' +
    pad(date.getUTCHours()) +
    pad(date.getUTCMinutes()) +
    pad(date.getUTCSeconds()) +
    'Z'
  );
}

/**
 * Parses session date (YYYY-MM-DD) and time (HH:mm) into a local Date object.
 */
function parseSessionDateTime(dateStr: string, timeStr: string): Date {
  const [year, month, day] = dateStr.split('-').map(Number);
  const [hours, minutes] = timeStr.split(':').map(Number);
  return new Date(year, (month || 1) - 1, day || 1, hours || 0, minutes || 0, 0);
}

/**
 * Computes the exact upcoming Date for a given DayOfWeek (0 = Lundi ... 6 = Dimanche)
 * starting from today. If today is that day, starts from today.
 */
export function getUpcomingDateForDay(dayOfWeek: number): Date {
  const now = new Date();
  const currentDayOfWeek = (now.getDay() + 6) % 7; // Convert JS Sunday=0 to Monday=0
  let diff = dayOfWeek - currentDayOfWeek;
  if (diff < 0) {
    diff += 7; // Next occurrence
  }
  return new Date(now.getFullYear(), now.getMonth(), now.getDate() + diff);
}

/**
 * Escapes characters for iCalendar text format according to RFC 5545
 */
function escapeIcsText(str: string): string {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n');
}

/**
 * Generates a 1-Click Google Calendar Web URL for a specific study session.
 * Preconfigures the event with title, description, objectives checklist,
 * pacing method, weekly recurrence for that day, and a clear 15-min reminder note.
 */
export function generateGoogleCalendarUrl(
  session: StudySession,
  subject: Subject
): string {
  const baseDate = getUpcomingDateForDay(session.dayOfWeek);
  const yyyy = baseDate.getFullYear();
  const mm = String(baseDate.getMonth() + 1).padStart(2, '0');
  const dd = String(baseDate.getDate()).padStart(2, '0');
  const formattedDate = `${yyyy}-${mm}-${dd}`;

  const startDate = parseSessionDateTime(formattedDate, session.startTime);
  const endDate = parseSessionDateTime(formattedDate, session.endTime);

  const startUtc = formatIcsDate(startDate);
  const endUtc = formatIcsDate(endDate);

  const pacing = getPacingStrategy(session.pacingMethod || 'pomodoro');
  const dayLabel = DAYS_OF_WEEK.find(d => d.id === session.dayOfWeek)?.label || 'Jour';
  const byDay = RFC_DAYS[session.dayOfWeek] || 'MO';

  const title = `[KONAN] ${dayLabel} : ${subject.name} (${pacing.title})`;

  const objectivesText = (session.objectives && session.objectives.length > 0)
    ? '\n🎯 Checkpoints & Objectifs :\n' + session.objectives.map(o => `  • ${o}`).join('\n')
    : '';

  const details = [
    `🔔 RAPPEL INTELLIGENT KONAN AI (Alerte 15 min avant)`,
    `📅 Répétition Quotidienne : Chaque ${dayLabel} à ${session.startTime}`,
    `📚 Matière : ${subject.name} (Coeff : ${subject.coefficient})`,
    `🧠 Stratégie d'Espacement : ${pacing.title} — ${pacing.tagline}`,
    `⏱️ Durée de travail : ${session.durationMinutes} minutes`,
    objectivesText,
    `\n💡 Astuce Konan : Activez le mode Ne pas déranger et préparez vos fiches de cours.`
  ].filter(Boolean).join('\n');

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${startUtc}/${endUtc}`,
    details: details,
    location: `Espace d'étude Konan AI`,
    recur: `RRULE:FREQ=WEEKLY;BYDAY=${byDay}`,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/**
 * Returns the direct Google Agenda settings page where users can import their .ics in 1 click.
 */
export function getGoogleCalendarImportUrl(): string {
  return 'https://calendar.google.com/calendar/u/0/r/settings/export';
}

/**
 * Generates a full .ics (iCalendar) calendar containing all study sessions for ALL days of the week.
 * Every single session is configured with:
 * 1. RRULE:FREQ=WEEKLY;BYDAY=XX to repeat automatically every week indefinitely.
 * 2. RFC 5545 VALARM to trigger a native phone alert 15 minutes before (-PT15M).
 */
export function generateStudyPlanICS(
  sessions: StudySession[],
  subjects: Subject[],
  studentName: string = 'Étudiant'
): string {
  const nowUtc = formatIcsDate(new Date());

  let icsLines: string[] = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Konan AI//Emploi du Temps et Revisions Quotidiennes v2.0//FR',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    `X-WR-CALNAME:Konan AI - Révisions Quotidiennes (${escapeIcsText(studentName)})`,
    'X-WR-TIMEZONE:UTC',
    'X-WR-CALDESC:Planning de révisions répétitif quotidien optimisé par Konan AI avec alertes push 15 min avant chaque session pour tous les jours de la semaine.',
  ];

  sessions.forEach((session) => {
    const subject = subjects.find(s => s.id === session.subjectId) || {
      id: session.subjectId,
      name: 'Matière académique',
      coefficient: 5,
      difficulty: 3,
      color: '#6366F1',
    };

    // Base date anchored to the upcoming occurrence of this session's day of week
    const baseDate = getUpcomingDateForDay(session.dayOfWeek);
    const yyyy = baseDate.getFullYear();
    const mm = String(baseDate.getMonth() + 1).padStart(2, '0');
    const dd = String(baseDate.getDate()).padStart(2, '0');
    const sessionDateStr = `${yyyy}-${mm}-${dd}`;

    const startDate = parseSessionDateTime(sessionDateStr, session.startTime);
    const endDate = parseSessionDateTime(sessionDateStr, session.endTime);

    const dtStart = formatIcsDate(startDate);
    const dtEnd = formatIcsDate(endDate);

    const pacing = getPacingStrategy(session.pacingMethod || 'pomodoro');
    const dayLabel = DAYS_OF_WEEK.find(d => d.id === session.dayOfWeek)?.label || 'Jour';
    const byDay = RFC_DAYS[session.dayOfWeek] || 'MO';
    const summary = `[KONAN] ${dayLabel} : ${subject.name} - ${session.title}`;

    const description = [
      `🔔 RAPPEL INTELLIGENT KONAN AI (Alerte 15 min)`,
      `📅 Répétition automatique : Chaque ${dayLabel} de ${session.startTime} à ${session.endTime}`,
      `📚 Matière : ${subject.name} (Coeff ${subject.coefficient})`,
      `🧠 Méthode d'espacement : ${pacing.title}`,
      `⏱️ Durée : ${session.durationMinutes} min`,
      session.objectives && session.objectives.length > 0
        ? `\n🎯 Objectifs ciblés :\n${session.objectives.map(o => '- ' + o).join('\n')}`
        : '',
      `\n🚀 Plateforme : Konan AI Application — https://konan-ai.app`
    ].filter(Boolean).join('\n');

    icsLines.push(
      'BEGIN:VEVENT',
      `UID:konan-recur-${session.id}-${byDay}@konan-ai.app`,
      `DTSTAMP:${nowUtc}`,
      `DTSTART:${dtStart}`,
      `DTEND:${dtEnd}`,
      `RRULE:FREQ=WEEKLY;BYDAY=${byDay}`, // Répétition automatique chaque semaine pour ce jour
      `SUMMARY:${escapeIcsText(summary)}`,
      `DESCRIPTION:${escapeIcsText(description)}`,
      `LOCATION:Espace d'étude Konan AI`,
      'STATUS:CONFIRMED',
      // VALARM: RAPPEL 15 MINUTES AVANT CHAQUE SESSION SUR SMARTPHONE & GOOGLE AGENDA
      'BEGIN:VALARM',
      'TRIGGER:-PT15M',
      'ACTION:DISPLAY',
      `DESCRIPTION:${escapeIcsText(`Rappel Konan AI : Votre révision de ${subject.name} débute dans 15 minutes !`)}`,
      'END:VALARM',
      'END:VEVENT'
    );
  });

  icsLines.push('END:VCALENDAR');
  return icsLines.join('\r\n');
}

/**
 * Downloads the full study plan as an .ics calendar file.
 * The file can be opened directly on Android, iPhone, Google Calendar, Outlook,
 * instantly activating the 15-minute reminders on the user's phone for ALL days of the week.
 */
export function downloadStudyPlanICS(
  sessions: StudySession[],
  subjects: Subject[],
  studentName: string = 'Étudiant'
): void {
  const icsContent = generateStudyPlanICS(sessions, subjects, studentName);
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `Konan_AI_Planning_Revisions_Google_Agenda_Tous_Les_Jours.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
