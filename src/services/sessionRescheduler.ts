import type { 
  StudySession, 
  ClassSlot, 
  StudyPreferences, 
  DayOfWeek 
} from '../types';
import { parseTimeToMinutes, minutesToTimeString, isNonAcademicSubject } from '../lib/utils';

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
 * Sanctuarisation : Nettoie les sessions réaménagées d'anciens jours
 * et purge systématiquement toute session parasite non académique (EPS, sport, devoirs, etc.).
 */
export function cleanupStaleRescheduledSessions(
  sessions: StudySession[],
  currentDateStr: string = getTodayDateString(),
  activeSubjects?: Array<{ id: string; name: string }>
): { sessions: StudySession[]; restoredCount: number } {
  let restoredCount = 0;
  const activeSubjectIds = activeSubjects ? new Set(activeSubjects.map(s => s.id)) : null;

  const validSessions = sessions.filter(session => {
    // Purger les sessions pour des matières non révisables (EPS, Sport, etc.)
    if (isNonAcademicSubject(session.title)) return false;
    // Purger les sessions orphelines dont la matière n'existe pas dans l'emploi du temps actif
    if (activeSubjectIds && session.subjectId && !activeSubjectIds.has(session.subjectId)) {
      return false;
    }
    // Purger toute session orpheline dont l'horaire dépasse minuit 00:00
    const sStart = parseTimeToMinutes(session.startTime);
    const sEnd = parseTimeToMinutes(session.endTime);
    if ((sStart >= 1440 || sEnd > 1440) && !session.originalStartTime) {
      return false;
    }
    return true;
  });

  const cleaned = validSessions.map(session => {
    // Rétablir à l'horaire d'origine toute session qui aurait été replacée après minuit 00:00
    const sStart = parseTimeToMinutes(session.startTime);
    const sEnd = parseTimeToMinutes(session.endTime);
    if ((sStart >= 1440 || sEnd > 1440) && session.originalStartTime) {
      restoredCount++;
      return {
        ...session,
        startTime: session.originalStartTime,
        endTime: session.originalEndTime || session.endTime,
        isRescheduledToday: false,
        originalStartTime: undefined,
        originalEndTime: undefined,
        rescheduledDate: undefined,
        rescheduledReason: undefined,
      };
    }

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
 * Checks if an uncompleted study session's scheduled time has elapsed
 */
export function isSessionElapsed(session: StudySession, currentMinute: number): boolean {
  if (session.completed) return false;
  const endMin = parseTimeToMinutes(session.endTime);
  return currentMinute >= endMin;
}

/**
 * Cherche le premier créneau libre viable aujourd'hui après l'heure courante.
 * Évite les cours (avec sas de 35 min après), les pauses méridiennes, les créneaux bloqués
 * et les autres sessions de révision planifiées plus tard.
 * Si le créneau complet ne rentre pas, cherche la plus grande plage libre viable (>= 30 min).
 */
export function findNextFreeSlotToday(
  dayOfWeek: DayOfWeek,
  currentMinute: number,
  durationMinutes: number,
  classes: ClassSlot[],
  preferences: StudyPreferences,
  otherTodaySessions: StudySession[]
): { startTime: string; endTime: string; durationMinutes: number } | null {
  // Démarre 5 à 10 minutes après l'heure actuelle, arrondi aux 15 min supérieures
  const searchStartMin = roundUpTo15(Math.max(currentMinute + 5, 0));

  // RÈGLE STRICTE DE RATTRAPAGE (Rectifiée par Christ Boni) :
  // Le rattrapage est STRICTEMENT intra-journée (même jour uniquement, aucun report au lendemain).
  // Les séances non effectuées plus tôt sont replacées en fin d'après-midi ou soirée avec heure limite à MINUIT 00:00 (1440 min).
  // À partir de minuit 00:00, si la séance n'a pas pu être rattrapée, c'est fini, on passe au lendemain sans dette.
  // Toutes les matières déjà faites aujourd'hui sont rigoureusement comptées.
  const dayEndMin = 1440; // 00:00 (Minuit pile, fin absolue de journée)

  // S'il ne reste même pas 30 minutes avant minuit 00:00 (1440 min)
  if (searchStartMin + 30 > dayEndMin) {
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
    // On ne bloque que les sessions prévues dans le futur par rapport à searchStartMin
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

  // Helper pour scanner un intervalle disponible
  const findSlotForTargetDuration = (targetDuration: number) => {
    let currentPointer = searchStartMin;

    for (const busy of mergedBusy) {
      if (busy.end <= currentPointer) continue;

      if (busy.start > currentPointer) {
        const availableDuration = busy.start - currentPointer;
        if (availableDuration >= targetDuration) {
          const slotStart = currentPointer;
          const slotEnd = slotStart + targetDuration;
          // RÈGLE ABSOLUE : Le créneau doit être STRICTEMENT dans le futur (dateDebut > maintenant)
          if (slotStart <= currentMinute) {
            currentPointer = Math.max(currentPointer, currentMinute + 5);
            continue;
          }
          return {
            startTime: minutesToTimeString(slotStart),
            endTime: minutesToTimeString(slotEnd),
            durationMinutes: targetDuration,
          };
        }
      }
      currentPointer = Math.max(currentPointer, busy.end);
      if (currentPointer + targetDuration > dayEndMin) {
        return null;
      }
    }

    if (currentPointer + targetDuration <= dayEndMin) {
      const slotStart = currentPointer;
      const slotEnd = slotStart + targetDuration;
      // RÈGLE ABSOLUE : Le créneau doit être STRICTEMENT dans le futur (dateDebut > maintenant)
      if (slotStart <= currentMinute) {
        return null;
      }
      // Sécurité absolue : aucun créneau ne démarre à/après 23h30 ni ne dépasse 23h30
      if (slotStart >= dayEndMin || slotEnd > dayEndMin) {
        return null;
      }
      return {
        startTime: minutesToTimeString(slotStart),
        endTime: minutesToTimeString(slotEnd),
        durationMinutes: targetDuration,
      };
    }

    return null;
  };

  // 1ère tentative : essayer de placer la totalité de la durée demandée
  const fullSlot = findSlotForTargetDuration(durationMinutes);
  if (fullSlot) return fullSlot;

  // 2ème tentative (si la soirée est contrainte) :
  // Si c'est un devoir (45 min), STRICTEMENT AUCUNE RÉDUCTION en dessous de 45 min !
  if (durationMinutes === 45) {
    return null;
  }

  for (let adjusted = durationMinutes - 15; adjusted >= 30; adjusted -= 15) {
    const candidate = findSlotForTargetDuration(adjusted);
    if (candidate) return candidate;
  }

  return null;
}

/**
 * Moteur d'Adaptabilité Dynamique & Rattrapage Intelligent en Cas d'Oubli :
 * 
 * 1. Restaure d'abord toute session réaménagée d'un jour précédent (sanctuarisation de la maquette).
 * 2. Identifie toutes les sessions non complétées d'aujourd'hui dont l'heure est dépassée.
 * 3. Cherche un créneau libre plus tard dans la journée (ex: 18h, 20h ou 21h) pour CHACUNE séquentiellement.
 * 4. Déplace chaque session pour aujourd'hui avec métadonnées d'origine et durée garantie.
 * 5. Si aucun créneau n'est disponible ou si la journée se termine : oublie sans dette accumulée.
 */
export function evaluateDailyCatchup(
  sessions: StudySession[],
  classes: ClassSlot[],
  preferences: StudyPreferences,
  currentDate: Date = new Date(),
  subjects: Array<{ id: string; name: string; examDate?: string; examTime?: string; examType?: string }> = []
): RescheduleResult {
  const todayDayOfWeek = getTodayDayOfWeek(currentDate);
  const todayDateStr = getTodayDateString(currentDate);
  const currentMinute = currentDate.getHours() * 60 + currentDate.getMinutes();

  // Étape 1 : Nettoyer les réaménagements des jours passés et purger toute session orpheline / non académique
  const { sessions: cleanedSessions, restoredCount } = cleanupStaleRescheduledSessions(
    sessions,
    todayDateStr,
    subjects
  );

  let rescheduledCount = 0;
  const rescheduledSessions: StudySession[] = [];
  const updatedSessions = [...cleanedSessions];

  // Sessions prévues pour le jour actuel :
  // Priorité absolue aux préparations d'examen et devoirs surveillés (DS) pour leur garantir les meilleurs créneaux du soir
  const todaysSessions = updatedSessions
    .filter(s => s.dayOfWeek === todayDayOfWeek)
    .sort((a, b) => {
      const aIsExam = Boolean(a.isExamPrep || a.type === 'exam_simulation');
      const bIsExam = Boolean(b.isExamPrep || b.type === 'exam_simulation');
      if (aIsExam && !bIsExam) return -1;
      if (!aIsExam && bIsExam) return 1;
      return a.startTime.localeCompare(b.startTime);
    });

  // Traiter toutes les sessions non complétées dont l'heure de fin est dépassée
  for (const session of todaysSessions) {
    // Si la session est déjà terminée ou expirée, rien à adapter
    if (session.completed || session.isExpired) continue;

    // RÈGLE STRICTE KONAN AI :
    // 1. Ne JAMAIS rattraper une matière non académique (ex: EPS, Sport, devoirs, permanence)
    if (isNonAcademicSubject(session.title)) continue;

    // 2. Ne JAMAIS rattraper une matière qui n'existe pas dans l'emploi du temps actif de l'étudiant !
    const matchingSubject = subjects.find(sub => sub.id === session.subjectId);
    if (session.subjectId && !matchingSubject) {
      continue;
    }
    if (matchingSubject && isNonAcademicSubject(matchingSubject.name)) {
      continue;
    }

    // 3. RÈGLE CRITIQUE (Examen / Devoir passé) :
    // Si la date d'examen ou date de fin est dépassée (maintenant >= dateExamen),
    // marquer la session en expirée/terminée, NE GÉNÉRER AUCUN RATTRAPAGE ET AUCUNE NOTIFICATION.
    const targetExamDate = matchingSubject?.examDate || session.examDate;
    if (targetExamDate) {
      const [year, month, day] = targetExamDate.split('-').map(Number);
      let examHour = 23;
      let examMinute = 59;
      const targetExamTime = matchingSubject?.examTime || session.examTime;
      if (targetExamTime) {
        const [eh, em] = targetExamTime.split(':').map(Number);
        if (!isNaN(eh)) examHour = eh;
        if (!isNaN(em)) examMinute = em;
      }
      const examDateTime = new Date(year, (month || 1) - 1, day || 1, examHour, examMinute, 0);
      if (currentDate.getTime() >= examDateTime.getTime()) {
        const sIndex = updatedSessions.findIndex(s => s.id === session.id);
        if (sIndex !== -1) {
          updatedSessions[sIndex] = {
            ...updatedSessions[sIndex],
            isExpired: true,
            completed: true, // Archivée silencieusement sans notification
          };
        }
        continue;
      }
    }

    // 4. Une séance ne peut être replacée qu'une seule fois dans la même journée.
    if (session.isRescheduledToday) continue;

    const sessionEndMin = parseTimeToMinutes(session.endTime);
    const sessionStartMin = parseTimeToMinutes(session.startTime);

    // Détection immédiate : si l'heure de fin est dépassée, ou si l'heure de début + 15 min est passée sans validation
    const isMissed = (currentMinute >= sessionEndMin) || (currentMinute >= sessionStartMin + 15);

    if (isMissed) {
      // Trouver les autres sessions d'aujourd'hui pour éviter tout conflit (incluant celles déjà replacées)
      const otherSessions = updatedSessions.filter(
        s => s.dayOfWeek === todayDayOfWeek && s.id !== session.id
      );

      // Pour les devoirs : TOUJOURS 45 minutes même au jour 1 !
      const isDevoir = session.examType === 'devoir' || 
        matchingSubject?.examType === 'devoir' || 
        /\b(devoir|ds)\b/i.test(session.title) || 
        (matchingSubject && /\b(devoir|ds)\b/i.test(matchingSubject.name));
      const targetDuration = isDevoir ? 45 : session.durationMinutes;

      const freeSlot = findNextFreeSlotToday(
        todayDayOfWeek,
        currentMinute,
        targetDuration,
        classes,
        preferences,
        otherSessions
      );

      // RÈGLE ABSOLUE : Le créneau de rattrapage doit être STRICTEMENT dans le futur (dateDebut > maintenant)
      if (freeSlot && parseTimeToMinutes(freeSlot.startTime) > currentMinute) {
        // Enregistrer l'horaire d'origine uniquement si la session n'avait pas déjà été déplacée
        const originalStart = session.originalStartTime || session.startTime;
        const originalEnd = session.originalEndTime || session.endTime;
        const subjectName = matchingSubject?.name || session.title;
        const isExamSession = Boolean(session.isExamPrep || session.type === 'exam_simulation' || isDevoir);

        const sessionIndex = updatedSessions.findIndex(s => s.id === session.id);
        if (sessionIndex !== -1) {
          const adaptedSession: StudySession = {
            ...updatedSessions[sessionIndex],
            startTime: freeSlot.startTime,
            endTime: freeSlot.endTime,
            durationMinutes: freeSlot.durationMinutes,
            isRescheduledToday: true,
            originalStartTime: originalStart,
            originalEndTime: originalEnd,
            rescheduledDate: todayDateStr,
            // Réinitialisation des verrous de notification pour le nouveau créneau futur
            rappelEnvoye: false,
            notifRattrapageEnvoyee: false,
            rescheduledReason: isExamSession
              ? `🎯 Préparation ${subjectName} • Ratée à ${originalStart} ➔ Replacée à ${freeSlot.startTime} (fin max à minuit 00:00)`
              : `Séance de ${subjectName} • Ratée à ${originalStart} ➔ Replacée à ${freeSlot.startTime} (fin max à minuit 00:00)`,
          };

          updatedSessions[sessionIndex] = adaptedSession;
          rescheduledSessions.push(adaptedSession);
          rescheduledCount++;
        }
      } else {
        // RÈGLE SUPRÊME : À partir de minuit 00:00, si la séance n'a pas été rattrapée,
        // on passe au lendemain sans dette. Toutes les matières déjà faites sont comptées,
        // et la séance restante est simplement oubliée.
      }
    }
  }

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
