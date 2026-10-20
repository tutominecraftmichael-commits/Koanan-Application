import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatMinutesToHours(minutes: number): string {
  if (!minutes || minutes <= 0) return '0h';
  const hours = Math.floor(minutes / 60);
  const remainingMins = Math.round(minutes % 60);
  if (hours === 0) return `${remainingMins} min`;
  if (remainingMins === 0) return `${hours}h`;
  return `${hours}h${remainingMins.toString().padStart(2, '0')}`;
}

export function parseTimeToMinutes(timeStr: string, isStartTime = false): number {
  if (!timeStr || !timeStr.includes(':')) return 0;
  const [h, m] = timeStr.split(':').map(Number);
  if (!isStartTime && (h === 24 || h === 0) && m === 0 && (timeStr === '24:00' || timeStr === '00:00' || timeStr === '0:00')) {
    return 1440;
  }
  return (h || 0) * 60 + (m || 0);
}

export function minutesToTimeString(minutes: number): string {
  if (minutes === 1440 || minutes === 0) {
    return '00:00';
  }
  const h = Math.floor(minutes / 60) % 24;
  const m = minutes % 60;
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 9) + Date.now().toString(36).substring(4);
}

export function getDaysRemainingFrom(targetDateStr?: string, fromDate: Date = new Date()): number | null {
  if (!targetDateStr) return null;
  const parts = targetDateStr.split('-');
  if (parts.length < 3) return null;
  const targetYear = parseInt(parts[0], 10);
  const targetMonth = parseInt(parts[1], 10) - 1;
  const targetDay = parseInt(parts[2], 10);
  if (isNaN(targetYear) || isNaN(targetMonth) || isNaN(targetDay)) return null;

  // Calcul calendaire strict à minuit local pour éviter tout décalage d'heures ou de fuseau
  const target = new Date(targetYear, targetMonth, targetDay, 0, 0, 0, 0);
  const from = new Date(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate(), 0, 0, 0, 0);

  const diffMs = target.getTime() - from.getTime();
  return Math.round(diffMs / (1000 * 60 * 60 * 24));
}

export function getDaysRemaining(targetDateStr?: string): number | null {
  return getDaysRemainingFrom(targetDateStr, new Date());
}

/**
 * Calcule dynamiquement le compte à rebours réel (J-X) pour une session d'étude.
 * Garantit une suite logique décroissante (J-5 le dimanche, J-4 le lundi, J-3 le mardi, etc.)
 * en prenant en compte le jour de la session par rapport à la date du jour.
 */
export function getSessionExamCountdown(
  sessionDayOfWeek: number,
  examDate?: string,
  referenceDate: Date = new Date()
): { daysRemaining: number | null; label: string | null } {
  if (!examDate) return { daysRemaining: null, label: null };

  const daysFromToday = getDaysRemainingFrom(examDate, referenceDate);
  if (daysFromToday === null) return { daysRemaining: null, label: null };

  // Jour actuel de la semaine (0 = Lundi, ... 6 = Dimanche)
  const currentDayOfWeek = (referenceDate.getDay() + 6) % 7;

  // Nombre de jours séparant la session de la date d'aujourd'hui dans le cycle hebdomadaire courant/à venir (0 à 6)
  const daysAhead = (sessionDayOfWeek - currentDayOfWeek + 7) % 7;

  // Le compte à rebours au moment où se déroulera cette session
  const sessionDaysRemaining = daysFromToday - daysAhead;

  if (sessionDaysRemaining < 0) {
    return { daysRemaining: sessionDaysRemaining, label: null }; // Épreuve passée
  }

  if (sessionDaysRemaining === 0) {
    return { daysRemaining: 0, label: 'Jour J' };
  }

  return { daysRemaining: sessionDaysRemaining, label: `J-${sessionDaysRemaining}` };
}

/**
 * Formats a notification ISO date string into both exact time and relative instant.
 * Example: "À l'instant (22:45)", "Il y a 3 min (22:42)", "Aujourd'hui à 14:30"
 */
export function formatNotificationTime(isoString?: string): string {
  try {
    const now = new Date();
    const date = isoString ? new Date(isoString) : now;
    const targetDate = isNaN(date.getTime()) ? now : date;

    const hours = targetDate.getHours().toString().padStart(2, '0');
    const minutes = targetDate.getMinutes().toString().padStart(2, '0');
    const timeFormatted = `${hours}:${minutes}`;

    const diffMs = Math.max(0, now.getTime() - targetDate.getTime());
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHours = Math.floor(diffMin / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffSec < 60) {
      return `À l'instant (${timeFormatted})`;
    }
    if (diffMin < 60) {
      return `Il y a ${diffMin} min (${timeFormatted})`;
    }
    if (diffHours < 24 && targetDate.getDate() === now.getDate() && targetDate.getMonth() === now.getMonth() && targetDate.getFullYear() === now.getFullYear()) {
      return `Aujourd'hui à ${timeFormatted}`;
    }
    if (diffDays === 1 || (diffHours < 48 && targetDate.getDate() === now.getDate() - 1)) {
      return `Hier à ${timeFormatted}`;
    }
    const day = targetDate.getDate().toString().padStart(2, '0');
    const month = (targetDate.getMonth() + 1).toString().padStart(2, '0');
    return `Le ${day}/${month} à ${timeFormatted}`;
  } catch {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `À l'instant (${hours}:${minutes})`;
  }
}

/**
 * Extrait la véritable discipline académique d'un intitulé composite.
 * Exemples :
 * - "Devoir de Mathématiques" -> "Mathématiques"
 * - "DS Physique-Chimie" -> "Physique-Chimie"
 * - "Examen d'Informatique" -> "Informatique"
 * - "Partiel Algèbre" -> "Algèbre"
 * - "Devoir" ou "Examen de semestre impair" (sans matière) -> "" (vide, à ignorer)
 */
export function extractRealAcademicDiscipline(rawName: string): string {
  if (!rawName) return '';
  let cleaned = rawName.trim();

  // Nettoyer les préfixes d'évaluation
  cleaned = cleaned
    .replace(/^(?:devoir\s+surveill[eé]\s*(?:de|d'|du|des)?|devoir\s*(?:de|d'|du|des)?|ds\s*(?:de|d'|du|des)?|dst\s*(?:de|d'|du|des)?|examen\s+final\s*(?:de|d'|du|des)?|examen\s+semestriel\s*(?:de|d'|du|des)?|examen\s*(?:de|d'|du|des)?|partiel\s*(?:de|d'|du|des)?|partiels\s*(?:de|d'|du|des)?|contr[oô]le\s+continu\s*(?:de|d'|du|des)?|contr[oô]le\s*(?:de|d'|du|des)?|interro(?:gation)?\s*(?:de|d'|du|des)?|session\s*(?:de|d'|du|des)?|épreuve\s*(?:de|d'|du|des)?|epreuve\s*(?:de|d'|du|des)?)\s*/i, '')
    .trim();

  // Si après nettoyage il ne reste rien ou juste un terme générique d'examen, retourner vide
  if (isNonAcademicSubject(cleaned)) {
    return '';
  }

  return cleaned;
}

/**
 * Détermine avec une précision absolue si un intitulé correspond à un événement non académique
 * ou non disciplinaire qui ne doit JAMAIS constituer une matière d'étude :
 * - Types d'épreuves orphelines : "devoir", "examen", "examen de semestre impair", "ds", "partiel", etc.
 * - Pauses & interruptions : "récréation", "pause", "pause déjeuner", "repas", "midi", etc.
 * - Créneaux administratifs ou libres : "permanence", "étude surveillée", "vie de classe", "tutorat", etc.
 */
export function isNonAcademicSubject(name?: string): boolean {
  if (!name) return true;
  const n = name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Retire les accents pour une comparaison infaillible
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (!n || n.length < 2) return true;

  // 1. Pauses, repas et récréations
  if (
    n === 'recreation' ||
    n === 'recre' ||
    n === 'pause' ||
    n === 'pauses' ||
    n === 'repas' ||
    n === 'midi' ||
    n === 'pause midi' ||
    n === 'pause dejeuner' ||
    n === 'pause cafe' ||
    n === 'interclasse' ||
    n === 'dejeuner' ||
    n === 'diner' ||
    n.startsWith('recreation') ||
    n.startsWith('pause ') ||
    n.includes('pause dejeuner') ||
    n.includes('pause midi')
  ) {
    return true;
  }

  // 2. Types d'évaluations et examens génériques sans matière rattachée
  if (
    n === 'devoir' ||
    n === 'devoirs' ||
    n === 'devoir surveille' ||
    n === 'ds' ||
    n === 'dst' ||
    n === 'interro' ||
    n === 'interrogation' ||
    n === 'controle' ||
    n === 'controle continu' ||
    n === 'cc' ||
    n === 'examen' ||
    n === 'examens' ||
    n === 'partiel' ||
    n === 'partiels' ||
    n === 'rattrapage' ||
    n === 'rattrapages' ||
    n === 'session d examen' ||
    n === 'session d examens' ||
    n === 'session de rattrapage' ||
    n === 'epreuve' ||
    n === 'epreuves' ||
    n === 'evaluation' ||
    n === 'evaluations' ||
    n === 'bac blanc' ||
    n === 'brevet blanc' ||
    n === 'concours blanc' ||
    // "examen de semestre impair", "examen de semestre pair", "examen semestriel", etc.
    /^examen\s+de\s+semestre(?:\s+(?:impair|pair|[0-9]+))?$/i.test(n) ||
    /^examens?\s+(?:semestriels?|terminaux|finaux|blancs?)$/i.test(n) ||
    /^session\s+d?\s*examens?$/i.test(n) ||
    /^devoirs?\s+surveill[eé]s?$/i.test(n)
  ) {
    return true;
  }

  // 3. Créneaux administratifs, permanences, vie scolaire et temps libre
  if (
    n === 'permanence' ||
    n === 'perm' ||
    n === 'etude' ||
    n === 'etude surveillee' ||
    n === 'etude dirigee' ||
    n === 'etude libre' ||
    n === 'tutorat' ||
    n === 'tutorat pedagogique' ||
    n === 'vie de classe' ||
    n === 'heure de vie' ||
    n === 'conseil de classe' ||
    n === 'assemblee' ||
    n === 'accueil' ||
    n === 'rentree' ||
    n === 'temps libre' ||
    n === 'creneau libre' ||
    n === 'libre' ||
    n === 'autonomie' ||
    n === 'travail personnel' ||
    n === 'travail en autonomie' ||
    n === 'ferie' ||
    n === 'vacances' ||
    n === 'fermeture' ||
    n === 'conges'
  ) {
    return true;
  }

  // 4. Mots génériques parasites qui ne sont pas des matières
  if (
    n === 'cours' ||
    n === 'matiere' ||
    n === 'discipline' ||
    n === 'horaire' ||
    n === 'horaires' ||
    n === 'emploi du temps' ||
    n === 'planning' ||
    n === 'agenda' ||
    n === 'divers' ||
    n === 'autre'
  ) {
    return true;
  }

  return false;
}

/**
 * Calcule l'intervalle strict de la semaine (du Lundi 00:00 au Dimanche 23:59:59).
 */
export function getWeekDateRange(refDate: Date = new Date()): {
  mondayStr: string;
  sundayStr: string;
  weekLabel: string;
  mondayDate: Date;
  sundayDate: Date;
} {
  const date = new Date(refDate);
  const dayIndex = (date.getDay() + 6) % 7; // 0 = Lundi, 6 = Dimanche
  
  const monday = new Date(date);
  monday.setDate(date.getDate() - dayIndex);
  monday.setHours(0, 0, 0, 0);

  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  sunday.setHours(23, 59, 59, 999);

  const mondayStr = monday.toISOString().slice(0, 10);
  const sundayStr = sunday.toISOString().slice(0, 10);

  const startDay = monday.getDate().toString().padStart(2, '0');
  const startMonth = (monday.getMonth() + 1).toString().padStart(2, '0');
  const endDay = sunday.getDate().toString().padStart(2, '0');
  const endMonth = (sunday.getMonth() + 1).toString().padStart(2, '0');

  return {
    mondayStr,
    sundayStr,
    weekLabel: `Du ${startDay}/${startMonth} au ${endDay}/${endMonth}`,
    mondayDate: monday,
    sundayDate: sunday,
  };
}

/**
 * Vérifie si une date (YYYY-MM-DD ou ISO) se situe dans la plage d'une semaine donnée.
 */
export function isDateInWeek(dateStr?: string, mondayStr?: string, sundayStr?: string): boolean {
  if (!dateStr || !mondayStr || !sundayStr) return false;
  const cleanDate = dateStr.slice(0, 10);
  return cleanDate >= mondayStr && cleanDate <= sundayStr;
}
