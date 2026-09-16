import type { 
  StudySession, 
  ClassSlot, 
  StudyPreferences, 
  DayOfWeek 
} from '../types';
import { parseTimeToMinutes, minutesToTimeString } from '../lib/utils';

export interface RescheduleResult {
  updatedSessions: StudySession[];
  rescheduledCount: number;
  rescheduledSessions: StudySession[];
  restoredCount: number;
}

/**
 * Returns DayOfWeek (0 = Lundi ... 6 = Dimanche)
 */
export function getTodayDayOfWeek(date: Date = new Date()): DayOfWeek {
  return ((date.getDay() + 6) % 7) as DayOfWeek;
}

/**
 * Returns date in YYYY-MM-DD local format
 */
export function getTodayDateString(date: Date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Rounds a minute timestamp up to the next multiple of 15 (e.g. 842 -> 855)
 */
function roundUpTo15(minutes: number): number {
  return Math.ceil(minutes / 15) * 15;
}

/**
 * Sanctuarisation : Nettoie les sessions réaménagées d'anciens jours.
 * Si une session a été déplacée pour rattrapage hier ou la semaine passée,
 * elle est automatiquement restaurée à ses horaires récurrents initiaux.
 */
export function cleanupStaleRescheduledSessions(
  sessions: StudySession[],
  currentDateStr: string = getTodayDateString()
): { sessions: StudySession[]; restoredCount: number } {
  let restoredCount = 0;

  const cleaned = sessions.map(session => {
    if (session.isRescheduledToday && session.rescheduledDate && session.rescheduledDate !== currentDateStr) {
      restoredCount++;
      return {
        ...session,
        startTime: session.originalStartTime || session.startTime,
        endTime: session.originalEndTime || session.endTime,
        isRescheduledToday: false,
        originalStartTime: undefined,
        originalEndTime: undefined,
        rescheduledDate: undefined,
        rescheduledReason: undefined,
      };
    }
    return session;
  });

  return { sessions: cleaned, restoredCount };
}

interface TimeInterval {
  start: number; // minutes from 00:00
  end: number;
}

/**
 * Cherche le premier créneau libre viable aujourd'hui après l'heure courante.
 * Évite les cours (avec sas de 35 min après), les pauses méridiennes, les créneaux bloqués
 * et les autres sessions de révision planifiées plus tard.
 */
export function findNextFreeSlotToday(
  dayOfWeek: DayOfWeek,
  currentMinute: number,
  durationMinutes: number,
  classes: ClassSlot[],
  preferences: StudyPreferences,
  otherTodaySessions: StudySession[]
): { startTime: string; endTime: string } | null {
  // Démarre au moins 10 minutes après l'heure actuelle, arrondi aux 15 min supérieures
  const searchStartMin = roundUpTo15(Math.max(currentMinute + 10, 0));

  // Heure maximale de fin d'étude le soir :
  // Jusqu'à 23h00 (1380 min) pour permettre un rattrapage en soirée (ex: 20h-21h30 ou 21h-22h30)
  let dayEndMin = 1380; // 23:00
  if (preferences.chronotype === 'morning') {
    dayEndMin = 1320; // 22:00
  }

  // S'il ne reste plus assez de temps aujourd'hui
  if (searchStartMin + durationMinutes > dayEndMin) {
    return null;
  }

  const busyIntervals: TimeInterval[] = [];

  // 1. Cours réels de l'étudiant aujourd'hui avec sas de décompression (10 min avant, 35 min après)
  classes
    .filter(c => c.dayOfWeek === dayOfWeek)
    .forEach(c => {
      const start = parseTimeToMinutes(c.startTime);
      const end = parseTimeToMinutes(c.endTime);
      busyIntervals.push({
        start: Math.max(0, start - 10),
        end: end + 35,
      });
    });

  // 2. Pause méridienne (12:15 à 13:45) en semaine
  if (dayOfWeek <= 4) {
    busyIntervals.push({
      start: 735, // 12:15
      end: 825,   // 13:45
    });
  }

  // 3. Créneaux personnels bloqués par l'étudiant
  (preferences.blockedSlots || [])
    .filter(b => b.dayOfWeek === dayOfWeek)
    .forEach(b => {
      busyIntervals.push({
        start: parseTimeToMinutes(b.startTime),
        end: parseTimeToMinutes(b.endTime),
      });
    });

  // 4. Autres sessions d'étude prévues aujourd'hui qui ne sont pas la session en cours de déplacement
  otherTodaySessions.forEach(other => {
    const start = parseTimeToMinutes(other.startTime);
    const end = parseTimeToMinutes(other.endTime);
    // On ne bloque que les sessions prévues dans le futur ou toujours valides
    if (end > searchStartMin) {
      busyIntervals.push({
        start: Math.max(0, start - 5),
        end: end + 10, // 10 min de pause après chaque session
      });
    }
  });

  // Trier et fusionner les intervalles occupés
  busyIntervals.sort((a, b) => a.start - b.start);
  const mergedBusy: TimeInterval[] = [];
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

  // Balayage des créneaux libres à partir de searchStartMin
  let currentPointer = searchStartMin;

  for (const busy of mergedBusy) {
    if (busy.end <= currentPointer) continue;

    if (busy.start > currentPointer) {
      const availableDuration = busy.start - currentPointer;
      if (availableDuration >= durationMinutes) {
        const slotStart = currentPointer;
        const slotEnd = slotStart + durationMinutes;
        return {
          startTime: minutesToTimeString(slotStart),
          endTime: minutesToTimeString(slotEnd),
        };
      }
    }
    currentPointer = Math.max(currentPointer, busy.end);
    if (currentPointer + durationMinutes > dayEndMin) {
      return null;
    }
  }

  // Après le dernier créneau occupé
  if (currentPointer + durationMinutes <= dayEndMin) {
    const slotStart = currentPointer;
    const slotEnd = slotStart + durationMinutes;
    return {
      startTime: minutesToTimeString(slotStart),
      endTime: minutesToTimeString(slotEnd),
    };
  }

  return null;
}

/**
 * Moteur d'Adaptabilité Dynamique & Rattrapage Intelligent en Cas d'Oubli :
 * 
 * 1. Restaure d'abord toute session réaménagée d'un jour précédent (sanctuarisation de la maquette).
 * 2. Identifie les sessions non complétées d'aujourd'hui dont l'heure de fin est dépassée.
 * 3. Cherche un créneau libre plus tard dans la journée (ex: 18h, 20h ou 21h).
 * 4. Déplace la session pour aujourd'hui avec métadonnées d'origine.
 * 5. Si aucun créneau n'est disponible ou si la journée se termine : oublie sans dette accumulée.
 */
export function evaluateDailyCatchup(
  sessions: StudySession[],
  classes: ClassSlot[],
  preferences: StudyPreferences,
  currentDate: Date = new Date()
): RescheduleResult {
  const todayDayOfWeek = getTodayDayOfWeek(currentDate);
  const todayDateStr = getTodayDateString(currentDate);
  const currentMinute = currentDate.getHours() * 60 + currentDate.getMinutes();

  // Étape 1 : Nettoyer les réaménagements des jours passés
  const { sessions: cleanedSessions, restoredCount } = cleanupStaleRescheduledSessions(
    sessions,
    todayDateStr
  );

  let rescheduledCount = 0;
  const rescheduledSessions: StudySession[] = [];
  const updatedSessions = [...cleanedSessions];

  // Sessions prévues pour le jour actuel
  const todaysSessions = updatedSessions.filter(s => s.dayOfWeek === todayDayOfWeek);

  todaysSessions.forEach(session => {
    // Si la session est déjà terminée, rien à adapter
    if (session.completed) return;

    const sessionEndMin = parseTimeToMinutes(session.endTime);

    // Détection : l'heure de fin de la session est dépassée !
    // (ex: session 08h00 - 10h00, et il est actuellement 10h01 ou plus)
    if (currentMinute > sessionEndMin) {
      // Trouver les autres sessions d'aujourd'hui pour éviter tout conflit
      const otherSessions = updatedSessions.filter(
        s => s.dayOfWeek === todayDayOfWeek && s.id !== session.id
      );

      const freeSlot = findNextFreeSlotToday(
        todayDayOfWeek,
        currentMinute,
        session.durationMinutes,
        classes,
        preferences,
        otherSessions
      );

      if (freeSlot) {
        // Enregistrer l'horaire d'origine uniquement si la session n'avait pas déjà été déplacée
        const originalStart = session.originalStartTime || session.startTime;
        const originalEnd = session.originalEndTime || session.endTime;

        const sessionIndex = updatedSessions.findIndex(s => s.id === session.id);
        if (sessionIndex !== -1) {
          const adaptedSession: StudySession = {
            ...updatedSessions[sessionIndex],
            startTime: freeSlot.startTime,
            endTime: freeSlot.endTime,
            isRescheduledToday: true,
            originalStartTime: originalStart,
            originalEndTime: originalEnd,
            rescheduledDate: todayDateStr,
            rescheduledReason: `Créneau de ${originalStart} dépassé. Replacée automatiquement à ${freeSlot.startTime} ce soir pour rattrapage.`,
          };

          updatedSessions[sessionIndex] = adaptedSession;
          rescheduledSessions.push(adaptedSession);
          rescheduledCount++;
        }
      } else {
        // Aucun créneau disponible aujourd'hui ou fin de journée atteinte :
        // Règle demandée : "maintenant si malgré adaptation il ne revise pas oublie"
        // On ne fait pas de décalage vers demain, aucune dette infinie.
      }
    }
  });

  return {
    updatedSessions,
    rescheduledCount,
    rescheduledSessions,
    restoredCount,
  };
}

/**
 * Permet à l'étudiant de rétablir manuellement le planning standard du jour s'il le souhaite.
 */
export function resetDailyRescheduling(sessions: StudySession[]): StudySession[] {
  return sessions.map(session => {
    if (session.isRescheduledToday) {
      return {
        ...session,
        startTime: session.originalStartTime || session.startTime,
        endTime: session.originalEndTime || session.endTime,
        isRescheduledToday: false,
        originalStartTime: undefined,
        originalEndTime: undefined,
        rescheduledDate: undefined,
        rescheduledReason: undefined,
      };
    }
    return session;
  });
}
