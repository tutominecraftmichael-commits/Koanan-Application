import type { 
  Subject, 
  ClassSlot, 
  StudyPreferences, 
  StudySession, 
  SessionType, 
  DayOfWeek 
} from '../types';
import { parseTimeToMinutes, minutesToTimeString, generateId, getDaysRemaining } from '../lib/utils';
import { getPacingStrategy } from '../lib/pacingStrategies';

interface TimeRange {
  start: number; // minutes from 00:00
  end: number;
}

interface AvailableSlot {
  dayOfWeek: DayOfWeek;
  start: number;
  end: number;
  duration: number; // minutes
}

export function generateOptimizedStudyPlan(
  subjects: Subject[],
  classes: ClassSlot[],
  preferences: StudyPreferences
): StudySession[] {
  if (subjects.length === 0) return [];

  // Pacing strategy definition (Pomodoro, Active Recall & Spaced, Feynman, Time Blocking, 2-Minutes Rule)
  const pacingStrategy = getPacingStrategy(preferences.pacing);
  const sessionBlock = preferences.focusBlockDuration || pacingStrategy.focusBlockDuration;
  const breakBlock = preferences.breakBlockDuration || pacingStrategy.breakBlockDuration;

  // 1. Calcul des scores académiques pondérés pour chaque matière
  const subjectScores = subjects.map(sub => {
    const daysUntilExam = getDaysRemaining(sub.examDate);
    let examUrgencyFactor = 1.0;
    if (daysUntilExam !== null) {
      if (daysUntilExam <= 7) examUrgencyFactor = 2.4;
      else if (daysUntilExam <= 14) examUrgencyFactor = 1.8;
      else if (daysUntilExam <= 30) examUrgencyFactor = 1.4;
      else examUrgencyFactor = 1.1;
    }

    // Formule basée sur la difficulté cognitive, le coefficient et l'urgence des examens
    const rawScore = (Math.pow(sub.difficulty, 1.35) * Math.pow(sub.coefficient, 1.25)) * examUrgencyFactor;
    return {
      subject: sub,
      score: rawScore,
      targetSessions: 1, // Minimum 1 session garantie par matière
      scheduledCount: 0,
      lastScheduledDay: -999,
      topicIndex: 0,
    };
  });

  const totalScore = subjectScores.reduce((acc, curr) => acc + curr.score, 0);

  // Déterminer les jours d'étude actifs
  const daysToSchedule: DayOfWeek[] = preferences.weekendStudyEnabled 
    ? [0, 1, 2, 3, 4, 5, 6] 
    : [0, 1, 2, 3, 4];

  // Objectif de sessions par jour
  const targetSessionsPerDay = Math.min(
    preferences.maxSessionsPerDay || 4,
    Math.max(1, Math.round(preferences.targetDailyStudyMinutes / sessionBlock))
  );

  const totalSessionsTarget = targetSessionsPerDay * daysToSchedule.length;

  // Répartition proportionnelle des sessions cibles par matière
  subjectScores.forEach(item => {
    const ratio = totalScore > 0 ? item.score / totalScore : 1 / subjects.length;
    const computed = Math.round(ratio * totalSessionsTarget);
    item.targetSessions = Math.max(1, computed);
  });

  // 2. Détection précise des créneaux libres par jour
  const dailyFreeSlots: Record<DayOfWeek, AvailableSlot[]> = {
    0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: []
  };

  daysToSchedule.forEach(day => {
    let dayStartMin = 480; // 08:00
    let dayEndMin = 1350;  // 22:30

    if (preferences.chronotype === 'morning') {
      dayStartMin = 420; // 07:00
      dayEndMin = 1290;  // 21:30
    } else if (preferences.chronotype === 'evening' || preferences.chronotype === 'night') {
      dayStartMin = 510; // 08:30
      dayEndMin = 1380;  // 23:00
    }

    if (day === 5 || day === 6) {
      dayStartMin = Math.max(dayStartMin, 540); // 09:00
      dayEndMin = Math.min(dayEndMin, 1320);     // 22:00
    }

    const busyIntervals: TimeRange[] = [];

    // Cours réels de l'emploi du temps (Source de Vérité) : sas de transition garanti (10 min avant, au moins 35 min après pour rentrer, se doucher, goûter sans étiquette superflue)
    classes
      .filter(c => c.dayOfWeek === day)
      .forEach(c => {
        const start = parseTimeToMinutes(c.startTime);
        const end = parseTimeToMinutes(c.endTime);
        busyIntervals.push({
          start: Math.max(0, start - 10),
          end: end + 35, // Au moins 35 minutes de sas incompressible après les cours
        });
      });

    // Protection physiologique de la pause méridienne (12:15 à 13:45) en semaine
    if (day <= 4) {
      busyIntervals.push({
        start: 735, // 12:15
        end: 825,   // 13:45
      });
    }

    // Créneaux personnels bloqués par l'étudiant
    (preferences.blockedSlots || [])
      .filter(b => b.dayOfWeek === day)
      .forEach(b => {
        busyIntervals.push({
          start: parseTimeToMinutes(b.startTime),
          end: parseTimeToMinutes(b.endTime)
        });
      });

    busyIntervals.sort((a, b) => a.start - b.start);

    // Fusion des créneaux occupés pour éviter tout chevauchement
    const mergedBusy: TimeRange[] = [];
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

    let currentPointer = dayStartMin;
    mergedBusy.forEach(busy => {
      if (busy.start > currentPointer) {
        const slotDuration = busy.start - currentPointer;
        if (slotDuration >= sessionBlock) {
          dailyFreeSlots[day].push({
            dayOfWeek: day,
            start: currentPointer,
            end: busy.start,
            duration: slotDuration,
          });
        }
      }
      currentPointer = Math.max(currentPointer, busy.end);
    });

    if (currentPointer < dayEndMin) {
      const slotDuration = dayEndMin - currentPointer;
      if (slotDuration >= sessionBlock) {
        dailyFreeSlots[day].push({
          dayOfWeek: day,
          start: currentPointer,
          end: dayEndMin,
          duration: slotDuration,
        });
      }
    }
  });

  // 3. Calcul de la date de référence (Lundi de la semaine courante ancré à midi pour éliminer tout décalage de fuseau horaire)
  const referenceDate = new Date();
  const currentDayIndex = (referenceDate.getDay() + 6) % 7; // 0 = Lundi, 6 = Dimanche
  const mondayDate = new Date(referenceDate);
  mondayDate.setDate(referenceDate.getDate() - currentDayIndex);
  mondayDate.setHours(12, 0, 0, 0);

  const sessionTypeCycle: SessionType[] = [
    'spaced_review',
    'exercises',
    'deep_summary',
    'flashcards',
    'exam_simulation',
    'consolidation'
  ];

  const generatedSessions: StudySession[] = [];
  const subjectPool = [...subjectScores];

  // 4. Planification intelligente jour par jour : GARANTIE DE COUVERTURE COMPLÈTE & ALTERNANCE
  for (const day of daysToSchedule) {
    const slots = dailyFreeSlots[day];
    if (!slots || slots.length === 0) continue;

    // Si l'étudiant est du soir, ordonner les créneaux libres pour favoriser la fin d'après-midi / soirée
    const sortedSlots = [...slots].sort((a, b) => {
      if (preferences.chronotype === 'evening' || preferences.chronotype === 'night') {
        const aIsEvening = a.start >= 1020 ? 1 : 0; // >= 17h
        const bIsEvening = b.start >= 1020 ? 1 : 0;
        if (aIsEvening !== bIsEvening) return bIsEvening - aIsEvening;
      } else if (preferences.chronotype === 'morning') {
        const aIsMorning = a.start < 780 ? 1 : 0; // < 13h
        const bIsMorning = b.start < 780 ? 1 : 0;
        if (aIsMorning !== bIsMorning) return bIsMorning - aIsMorning;
      }
      return a.start - b.start;
    });

    let daySessionsCount = 0;
    const scheduledSubjectsToday = new Set<string>();

    for (const slot of sortedSlots) {
      if (daySessionsCount >= targetSessionsPerDay) break;

      let slotCurrentStart = slot.start;

      while (slotCurrentStart + sessionBlock <= slot.end && daySessionsCount < targetSessionsPerDay) {
        // Sélection optimale de la matière :
        // 1. Priorité aux matières NON encore étudiées aujourd'hui (diversité cognitive)
        // 2. Priorité aux matières ayant le plus de retard sur leur quota (targetSessions - scheduledCount)
        // 3. Priorité à l'espacement dans le temps (Spaced Repetition : distance depuis la dernière session)
        // 4. Poids académique
        let bestCandidate = subjectPool
          .filter(item => !scheduledSubjectsToday.has(item.subject.id))
          .sort((a, b) => {
            const aDeficit = a.targetSessions - a.scheduledCount;
            const bDeficit = b.targetSessions - b.scheduledCount;
            if (aDeficit !== bDeficit) return bDeficit - aDeficit;

            const aDistance = day - a.lastScheduledDay;
            const bDistance = day - b.lastScheduledDay;
            if (aDistance !== bDistance) return bDistance - aDistance;

            return b.score - a.score;
          })[0];

        // Si toutes les matières ont déjà été étudiées aujourd'hui, autoriser une 2e session pour la matière majeure
        if (!bestCandidate) {
          bestCandidate = subjectPool.sort((a, b) => {
            const aDeficit = a.targetSessions - a.scheduledCount;
            const bDeficit = b.targetSessions - b.scheduledCount;
            if (aDeficit !== bDeficit) return bDeficit - aDeficit;
            return b.score - a.score;
          })[0];
        }

        if (!bestCandidate) break;

        const subject = bestCandidate.subject;
        const topicName = subject.topics && subject.topics.length > 0
          ? subject.topics[bestCandidate.topicIndex % subject.topics.length]
          : 'Chapitre clé & Fondamentaux';

        const sessionType = sessionTypeCycle[bestCandidate.scheduledCount % sessionTypeCycle.length];
        const daysUntilExam = getDaysRemaining(subject.examDate);

        // Stratégie d'espacement active pour cette session (Mono-méthode ou Combinaison Triple KONAN PRO)
        let sessionPacing = pacingStrategy;
        let sessionDuration = sessionBlock;
        let sessionBreak = breakBlock;

        if (preferences.combinedPacings && preferences.combinedPacings.length > 1) {
          const chosen = preferences.combinedPacings.slice(0, 3).map(id => getPacingStrategy(id));
          const hasFeynman = chosen.find(p => p.id === 'feynman');
          const hasTimeBlocking = chosen.find(p => p.id === 'time_blocking');
          const hasActiveRecall = chosen.find(p => p.id === 'active_recall_spaced');
          const hasPomodoro = chosen.find(p => p.id === 'pomodoro');
          const hasTwoMin = chosen.find(p => p.id === 'two_minutes_rule');

          // Allocation cognitive intelligente :
          // 1. Matière très difficile (diff >= 4) ou examen proche (<= 10 jours) -> Feynman si présente (assimilation profonde)
          if ((subject.difficulty >= 4 || (daysUntilExam !== null && daysUntilExam <= 10)) && hasFeynman) {
            sessionPacing = hasFeynman;
          }
          // 2. Matière à fort coefficient (>= 5) avec créneau large -> Time Blocking si présent
          else if (slot.end - slotCurrentStart >= 75 && subject.coefficient >= 5 && hasTimeBlocking) {
            sessionPacing = hasTimeBlocking;
          }
          // 3. Fin d'après-midi / soirée (>= 18h) -> Micro-sessions Pomodoro ou 2-Minutes si présentes
          else if (slotCurrentStart >= 1080 && (hasPomodoro || hasTwoMin)) {
            sessionPacing = hasPomodoro || hasTwoMin!;
          }
          // 4. Session de révision espacée ou auto-test -> Active Recall si présent
          else if (hasActiveRecall && (sessionType === 'spaced_review' || sessionType === 'flashcards')) {
            sessionPacing = hasActiveRecall;
          }
          // 5. Sinon, alternance harmonieuse équilibrée entre les méthodes choisies
          else {
            sessionPacing = chosen[bestCandidate.scheduledCount % chosen.length];
          }

          sessionDuration = sessionPacing.focusBlockDuration;
          sessionBreak = sessionPacing.breakBlockDuration;
        }

        // Titres et descriptions contextualisés selon la méthode d'étude retenue
        let sessionTitle = '';
        let sessionDescription = '';
        let sessionObjectives: string[] = [];

        const displaySubjectName = subject.name;

        if (sessionPacing.id === 'pomodoro') {
          sessionTitle = `Pomodoro (25m) : ${displaySubjectName} - ${topicName}`;
          sessionDescription = `Micro-session Pomodoro de 25 min à fond, coupure nette de 5 min de pause pour éviter la fatigue cérébrale.`;
          sessionObjectives = [
            '25 min à fond sans interruption ni distraction',
            `Terminer un micro-objectif précis sur ${topicName}`,
            'Pause obligatoire de 5 min sans écran pour reposer le cerveau',
          ];
        } else if (sessionPacing.id === 'feynman') {
          sessionTitle = `Technique de Feynman : ${displaySubjectName} - ${topicName}`;
          sessionDescription = `Expliquer simplement pour comprendre à fond : vulgarisation avec des mots simples comme pour un enfant de 10 ans.`;
          sessionObjectives = [
            'Expliquer le cours avec des mots tellement simples qu’un enfant de 10 ans comprendrait',
            'Repérer immédiatement le mot ou la formule précise qui pose blocage',
            'Reprendre le cours pour clarifier et éliminer définitivement ce point d’achoppement',
          ];
        } else if (sessionPacing.id === 'time_blocking') {
          sessionTitle = `Time Blocking (${sessionDuration}m) : ${displaySubjectName}`;
          sessionDescription = `Plage horaire fixe et obligatoire dédiée à 100% à cette matière. Plus besoin d'hésiter en ouvrant votre sac.`;
          sessionObjectives = [
            'Remplir ce bloc horaire sanctuarisé sans changer de sujet',
            `Attaquer directement sans délai le programme clé : ${topicName}`,
            'Résolution continue des exercices et validation des acquis du bloc',
          ];
        } else if (sessionPacing.id === 'two_minutes_rule') {
          sessionTitle = `Règle des 2 Min & Sprint : ${displaySubjectName}`;
          sessionDescription = `Vaincre la flemme immédiatement : amorçage de 2 minutes pour lancer le mouvement sans friction.`;
          sessionObjectives = [
            'Amorçage de 2 minutes chrono : ouvrir le document et préparer les fiches',
            'Démarrage mental : "Je m\'y mets juste 2 minutes" pour détruire l\'inertie',
            `Prolonger le flux de travail sur ${topicName} pendant 25 minutes`,
          ];
        } else {
          // active_recall_spaced
          sessionTitle = `Active Recall & Espacement : ${displaySubjectName} - ${topicName}`;
          sessionDescription = `Ne pas juste relire, mais se tester de tête. Espacement dans le temps pour sceller l'information en mémoire longue.`;
          sessionObjectives = [
            'Fermer le cours et essayer de s’en souvenir de tête',
            `Auto-évaluation active sur ${topicName} (questions sans notes)`,
            'Noter les points d’erreur et reprogrammer un rappel à J+2',
          ];
        }

        // Calcul propre et net de la date locale sans décalage
        const sessionDate = new Date(mondayDate);
        sessionDate.setDate(mondayDate.getDate() + day);
        const yyyy = sessionDate.getFullYear();
        const mm = String(sessionDate.getMonth() + 1).padStart(2, '0');
        const dd = String(sessionDate.getDate()).padStart(2, '0');
        const dateString = `${yyyy}-${mm}-${dd}`;

        const startMin = slotCurrentStart;
        const endMin = Math.min(startMin + sessionDuration, slot.end);
        const actualDuration = endMin - startMin;

        let priority: 'urgent' | 'high' | 'medium' | 'maintenance' = 'medium';
        if (daysUntilExam !== null && daysUntilExam <= 7) priority = 'urgent';
        else if (subject.difficulty >= 4 || subject.coefficient >= 5) priority = 'high';
        else if (subject.difficulty <= 2) priority = 'maintenance';

        const energy: 'high' | 'medium' | 'low' = 
          subject.difficulty >= 4 ? 'high' : subject.difficulty === 3 ? 'medium' : 'low';

        generatedSessions.push({
          id: generateId(),
          subjectId: subject.id,
          dayOfWeek: day,
          date: dateString,
          startTime: minutesToTimeString(startMin),
          endTime: minutesToTimeString(endMin),
          durationMinutes: actualDuration,
          pacingMethod: sessionPacing.id,
          type: sessionType,
          title: sessionTitle,
          description: sessionDescription,
          objectives: sessionObjectives,
          priority,
          energyRequired: energy,
          completed: false,
        });

        // Mise à jour des compteurs
        daySessionsCount++;
        scheduledSubjectsToday.add(subject.id);
        bestCandidate.scheduledCount++;
        bestCandidate.lastScheduledDay = day;
        bestCandidate.topicIndex++;

        // Avancement du créneau horaire avec la pause spécifique
        slotCurrentStart += (actualDuration + sessionBreak);
      }
    }
  }

  // Tri final chronologique irréprochable : d'abord par jour (0 à 6), puis par heure de début
  return generatedSessions.sort((a, b) => {
    if (a.dayOfWeek !== b.dayOfWeek) return a.dayOfWeek - b.dayOfWeek;
    return parseTimeToMinutes(a.startTime) - parseTimeToMinutes(b.startTime);
  });
}
