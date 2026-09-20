import type { StudySession, Subject } from '../types';
import { getPacingStrategy } from '../lib/pacingStrategies';

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
 * pacing method, and a clear reminder note.
 */
export function generateGoogleCalendarUrl(
  session: StudySession,
  subject: Subject
): string {
  const startDate = parseSessionDateTime(session.date, session.startTime);
  const endDate = parseSessionDateTime(session.date, session.endTime);

  const startUtc = formatIcsDate(startDate);
  const endUtc = formatIcsDate(endDate);

  const pacing = getPacingStrategy(session.pacingMethod || 'pomodoro');

  const title = `[KONAN] Révision : ${subject.name} (${pacing.title})`;

  const objectivesText = (session.objectives && session.objectives.length > 0)
    ? '\n🎯 Checkpoints & Objectifs :\n' + session.objectives.map(o => `  • ${o}`).join('\n')
    : '';

  const details = [
    `🔔 RAPPEL INTELLIGENT KONAN AI (Alerte 15 min avant)`,
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
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/**
 * Generates a full .ics (iCalendar) calendar containing all study sessions.
 * Each session is equipped with an RFC 5545 VALARM configured to trigger
 * exactly 15 minutes before (-PT15M) on smartphones (Android/iOS) and Google Agenda.
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
    'PRODID:-//Konan AI//Emploi du Temps et Revisions v2.0//FR',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    `X-WR-CALNAME:Konan AI - Planning Révisions (${escapeIcsText(studentName)})`,
    'X-WR-TIMEZONE:UTC',
    'X-WR-CALDESC:Planning de révisions optimisé par Konan AI avec alertes push 15 min avant chaque session.',
  ];

  sessions.forEach((session) => {
    const subject = subjects.find(s => s.id === session.subjectId) || {
      id: session.subjectId,
      name: 'Matière académique',
      coefficient: 5,
      difficulty: 3,
      color: '#6366F1',
    };

    const startDate = parseSessionDateTime(session.date, session.startTime);
    const endDate = parseSessionDateTime(session.date, session.endTime);

    const dtStart = formatIcsDate(startDate);
    const dtEnd = formatIcsDate(endDate);

    const pacing = getPacingStrategy(session.pacingMethod || 'pomodoro');
    const summary = `[KONAN] Révision : ${subject.name} - ${session.title}`;

    const description = [
      `🔔 RAPPEL INTELLIGENT KONAN AI (Alerte 15 min)`,
      `Matière : ${subject.name} (Coeff ${subject.coefficient})`,
      `Méthode : ${pacing.title}`,
      session.objectives && session.objectives.length > 0
        ? `Objectifs :\n${session.objectives.map(o => '- ' + o).join('\n')}`
        : '',
      `Plateforme : Konan AI Application`
    ].filter(Boolean).join('\n\n');

    icsLines.push(
      'BEGIN:VEVENT',
      `UID:konan-${session.id}-${dtStart}@konan-ai.app`,
      `DTSTAMP:${nowUtc}`,
      `DTSTART:${dtStart}`,
      `DTEND:${dtEnd}`,
      `SUMMARY:${escapeIcsText(summary)}`,
      `DESCRIPTION:${escapeIcsText(description)}`,
      `LOCATION:Espace d'étude Konan AI`,
      'STATUS:CONFIRMED',
      // VALARM: RAPPEL 15 MINUTES AVANT LA SESSION SUR SMARTPHONE & GOOGLE AGENDA
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
 * instantly activating the 15-minute reminders on the user's phone.
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
  link.setAttribute('download', `Konan_AI_Planning_Revisions_Google_Agenda.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
