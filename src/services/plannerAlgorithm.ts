import type { 
  Subject, 
  ClassSlot, 
  StudyPreferences, 
  StudySession, 
  SessionType, 
  DayOfWeek 
} from '../types';
import { parseTimeToMinutes, minutesToTimeString, generateId, getDaysRemaining, getDaysRemainingFrom, isNonAcademicSubject } from '../lib/utils';
import { getPacingStrategy } from '../lib/pacingStrategies';
import { isExamPrepOpenFor, withoutPausedExamPrep } from '../lib/featureFlags';
import { EXAM_PREP_DURATIONS, EXAM_PREP_HORIZON_DAYS, examPrepModeFor, examPrepSessionText } from '../lib/exam/examPrepRules';
import { validateBackendPermissions } from '../lib/subscriptionGuard';
import type { PlanTier } from '../types';

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
  preferences: StudyPreferences,
  userOrTier?: PlanTier | { tier?: PlanTier; planTier?: PlanTier; isPro?: boolean }
): StudySession[] {
  // Préparation aux devoirs/examens ouverte seulement pour certaines classes (2nde A, 2nde C) :
  // ailleurs, les dates d'épreuve sont ignorées
  const examGrade = preferences.gradeLevel || preferences.academicLevel;
  subjects = withoutPausedExamPrep(subjects, examGrade);

  // RÈGLE STRICTE : Exclure systématiquement toute matière non révisable (EPS, Sport, devoirs, permanence)
  const revisableSubjects = subjects.filter(sub => !isNonAcademicSubject(sub.name));
  if (revisableSubjects.length === 0) return [];

  // Contrôle de sécurité strict Backend / Serveur : vérifie les permissions de palier
  const userContext = typeof userOrTier === 'string' 
    ? { planTier: userOrTier } 
    : userOrTier;
  
  const resolvedTier: PlanTier = (userContext?.planTier || (userContext as any)?.tier) ?? 'free';
  // Fonction devoirs/examens : réservée à Pro/Plus, et ouverte seulement pour certaines classes
  const isExamFeatureAllowed = (resolvedTier === 'pro' || resolvedTier === 'plus') && isExamPrepOpenFor(examGrade);

  let effectivePreferences = preferences;
  if (userContext) {
    try {
      validateBackendPermissions(userContext, 'GENERATE_SCHEDULE', { preferences });
    } catch {
      // Repli sécurisé vers une méthode autorisée sans jamais faire crasher l'UI React
      effectivePreferences = {
        ...preferences,
        pacing: 'pomodoro',
        combinedPacings: ['pomodoro']
      };
    }
  }

  // Si le modèle est Gratuit (Free) : dissolution stricte des méthodes Pro et du multi-méthodes
  if (resolvedTier === 'free') {
    const isPro = effectivePreferences.pacing === 'feynman' || effectivePreferences.pacing === 'time_blocking';
    const safePacing = isPro ? 'pomodoro' : effectivePreferences.pacing;
    effectivePreferences = {
      ...effectivePreferences,
      pacing: safePacing,
      focusBlockDuration: safePacing === 'pomodoro' ? 25 : effectivePreferences.focusBlockDuration || 25,
      breakBlockDuration: safePacing === 'pomodoro' ? 5 : effectivePreferences.breakBlockDuration || 5,
      combinedPacings: [safePacing],
    };
  }

  // Pacing strategy definition (Pomodoro, Active Recall & Spaced, Feynman, Time Blocking, 2-Minutes Rule)
  const pacingStrategy = getPacingStrategy(effectivePreferences.pacing);
  const sessionBlock = effectivePreferences.focusBlockDuration || pacingStrategy.focusBlockDuration;
  const breakBlock = effectivePreferences.breakBlockDuration || pacingStrategy.breakBlockDuration;

  // 1. Calcul des scores académiques pondérés pour chaque matière
  const subjectScores = revisableSubjects.map(sub => {
    let examUrgencyFactor = 1.0;
    // L'adaptation et la sur-pondération aux examens/devoirs est EXCLUSIVE aux modèles PRO & PLUS
    if (isExamFeatureAllowed) {
      const daysUntilExam = getDaysRemaining(sub.examDate);
      if (daysUntilExam !== null) {
        if (daysUntilExam < 0) {
          examUrgencyFactor = 0.7; // Épreuve déjà passée : ne pas surcharger la semaine
        } else if (daysUntilExam <= 3) {
          examUrgencyFactor = 1.45; // Urgence J-3 : surpondération équilibrée
        } else if (daysUntilExam <= 7) {
          examUrgencyFactor = 1.3; // Semaine d'épreuve J-7
        } else if (daysUntilExam <= 14) {
          examUrgencyFactor = 1.15; // Quinzaine pré-examen J-14
        } else if (daysUntilExam <= 30) {
          examUrgencyFactor = 1.08;
        }
      }
    }

    // Formule basée sur la difficulté cognitive, le coefficient et l'urgence des examens/devoirs (si Pro/Plus)
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
    const ratio = totalScore > 0 ? item.score / totalScore : 1 / revisableSubjects.length;
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

    // RÈGLE STRICTE ANTI-SURMENAGE & PRÉSERVATION DE LA LUCIDITÉ (Validée par Christ Boni) :
    // Aucun créneau d'étude ni aucun rattrapage ne peut être généré à ou après 23h30 (1410 min).
    // Toute séance doit impérativement se terminer au plus tard à 23h30.
    dayEndMin = Math.min(dayEndMin, 1410);

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

    // Calcul propre et net de la date locale sans décalage pour ce jour de la semaine
    // En calculant daysAhead (0 à 6 jours d'avance à partir d'aujourd'hui), la suite logique
    // des jours est rigoureusement respectée : Dimanche = J-5, Lundi = J-4, Mardi = J-3, etc.
    const daysAhead = (day - currentDayIndex + 7) % 7;
    const sessionDate = new Date(referenceDate);
    sessionDate.setDate(referenceDate.getDate() + daysAhead);
    sessionDate.setHours(12, 0, 0, 0);
    const yyyy = sessionDate.getFullYear();
    const mm = String(sessionDate.getMonth() + 1).padStart(2, '0');
    const dd = String(sessionDate.getDate()).padStart(2, '0');
    const dateString = `${yyyy}-${mm}-${dd}`;

    let daySessionsCount = 0;
    const scheduledSubjectsToday = new Set<string>();

    for (const slot of sortedSlots) {
      if (daySessionsCount >= targetSessionsPerDay) break;

      let slotCurrentStart = slot.start;

      while (slotCurrentStart + 20 <= slot.end && daySessionsCount < targetSessionsPerDay) {
        // Sélection optimale de la matière :
        // 1. Éviter d'étudier deux fois la même matière le même jour (diversité cognitive)
        // 2. RÈGLE STRICTE : INTERDICTION ABSOLUE de réviser une matière dont l'épreuve est déjà passée (daysToExam < 0) !
        // 3. Priorité absolue aux épreuves imminentes (J-1 ou J-2) pour réviser avant l'épreuve
        // 4. Si c'est le jour J de l'épreuve, ne pas réviser après l'heure de l'épreuve
        let bestCandidate = subjectPool
          .filter(item => {
            if (scheduledSubjectsToday.has(item.subject.id)) return false;

            const daysToExam = getDaysRemainingFrom(item.subject.examDate, sessionDate);
            // Épreuve passée par rapport à ce jour : STRICTEMENT INTERDIT de réviser pour une épreuve déjà passée !
            if (daysToExam !== null && daysToExam < 0) {
              return false;
            }

            // Jour J de l'épreuve : si l'heure d'épreuve est passée, l'étudiant a déjà composé !
            if (daysToExam === 0) {
              if (item.subject.examTime) {
                const examMin = parseTimeToMinutes(item.subject.examTime);
                if (slotCurrentStart >= examMin) return false;
              } else {
                // Par défaut, si pas d'heure précisée, considérer que l'épreuve a eu lieu en matinée (12h)
                if (slotCurrentStart >= 720) return false;
              }
            }

            return true;
          })
          .sort((a, b) => {
            const aDaysToExam = getDaysRemainingFrom(a.subject.examDate, sessionDate);
            const bDaysToExam = getDaysRemainingFrom(b.subject.examDate, sessionDate);

            // Préparation au devoir (J-14 à J-1) : une séance CHAQUE jour pour la matière concernée,
            // la plus proche de son épreuve d'abord (sujets de 2 h obligatoires de J-3 à J-1)
            const aPrep = isExamFeatureAllowed && examPrepModeFor(aDaysToExam, a.subject) !== null;
            const bPrep = isExamFeatureAllowed && examPrepModeFor(bDaysToExam, b.subject) !== null;
            if (aPrep && !bPrep) return -1;
            if (!aPrep && bPrep) return 1;
            if (aPrep && bPrep && aDaysToExam !== bDaysToExam) return aDaysToExam! - bDaysToExam!;

            // Priorité absolue aux épreuves imminentes (J-1 ou J-2) par rapport à CE jour
            const aIsImminent = aDaysToExam !== null && aDaysToExam >= 0 && aDaysToExam <= 2;
            const bIsImminent = bDaysToExam !== null && bDaysToExam >= 0 && bDaysToExam <= 2;
            if (aIsImminent && !bIsImminent) return -1;
            if (!aIsImminent && bIsImminent) return 1;
            if (aIsImminent && bIsImminent && aDaysToExam !== bDaysToExam) {
              return aDaysToExam! - bDaysToExam!;
            }

            // RÈGLE FONDAMENTALE : Les devoirs et examens ne doivent JAMAIS supprimer ou empêcher les autres matières !
            // Une matière n'ayant encore aucune session (scheduledCount === 0) est prioritaire sur les matières déjà planifiées
            const aHasZero = a.scheduledCount === 0;
            const bHasZero = b.scheduledCount === 0;
            if (aHasZero && !bHasZero) return -1;
            if (!aHasZero && bHasZero) return 1;

            // Priorité de déficit de quota hebdomadaire :
            const aDeficit = a.targetSessions - a.scheduledCount;
            const bDeficit = b.targetSessions - b.scheduledCount;
            if (aDeficit !== bDeficit) return bDeficit - aDeficit;

            // Épreuves prévues dans les 14 jours (boost de révision sans écraser le quota des autres)
            const aIsExamSoon = aDaysToExam !== null && aDaysToExam >= 0 && aDaysToExam <= 14;
            const bIsExamSoon = bDaysToExam !== null && bDaysToExam >= 0 && bDaysToExam <= 14;
            if (aIsExamSoon && !bIsExamSoon) return -1;
            if (!aIsExamSoon && bIsExamSoon) return 1;

            const aDistance = day - a.lastScheduledDay;
            const bDistance = day - b.lastScheduledDay;
            if (aDistance !== bDistance) return bDistance - aDistance;

            return b.score - a.score;
          })[0];

        // Si toutes les matières ont déjà été étudiées aujourd'hui, autoriser une 2e session pour une matière majeure ENCORE ACTIVE
        if (!bestCandidate) {
          bestCandidate = subjectPool
            .filter(item => {
              if (isExamFeatureAllowed) {
                const daysToExam = getDaysRemainingFrom(item.subject.examDate, sessionDate);
                // RÈGLE STRICTE : INTERDICTION ABSOLUE de réviser une matière dont l'épreuve est déjà passée
                if (daysToExam !== null && daysToExam < 0) {
                  return false;
                }
                // Ne jamais réviser après l'épreuve le jour J
                if (daysToExam === 0) {
                  if (item.subject.examTime) {
                    return slotCurrentStart < parseTimeToMinutes(item.subject.examTime);
                  }
                  return slotCurrentStart < 720;
                }
                // Préparation au devoir : UNE séance par jour (jamais deux sujets de 2 h le même jour)
                if (scheduledSubjectsToday.has(item.subject.id) && examPrepModeFor(daysToExam, item.subject) !== null) {
                  return false;
                }
              }
              return true;
            })
            .sort((a, b) => {
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
        const daysUntilExamOnDate = isExamFeatureAllowed ? getDaysRemainingFrom(subject.examDate, sessionDate) : null;
        // Type de séance de préparation pour CE jour (30 questions, sujet de 2 h ou chrono 75 min), sinon null
        const examMode = isExamFeatureAllowed ? examPrepModeFor(daysUntilExamOnDate, subject) : null;
        const isExamApproaching = examMode !== null;

        // Stratégie d'espacement active pour cette session (Mono-méthode ou Combinaison Triple KONAN PRO)
        let sessionPacing = pacingStrategy;
        let sessionDuration = sessionBlock;
        let sessionBreak = breakBlock;

        if (isExamFeatureAllowed && effectivePreferences.combinedPacings && effectivePreferences.combinedPacings.length > 1) {
          const chosen = effectivePreferences.combinedPacings.slice(0, 3).map(id => getPacingStrategy(id));
          const hasFeynman = chosen.find(p => p.id === 'feynman');
          const hasTimeBlocking = chosen.find(p => p.id === 'time_blocking');
          const hasActiveRecall = chosen.find(p => p.id === 'active_recall_spaced');
          const hasPomodoro = chosen.find(p => p.id === 'pomodoro');
          const hasTwoMin = chosen.find(p => p.id === 'two_minutes_rule');

          // Allocation cognitive intelligente :
          // 1. Matière très difficile (diff >= 4) ou examen proche (<= 10 jours) -> Feynman si présente (assimilation profonde)
          if ((subject.difficulty >= 4 || (daysUntilExamOnDate !== null && daysUntilExamOnDate >= 0 && daysUntilExamOnDate <= 10)) && hasFeynman) {
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

        // Durée d'une séance de préparation : 30 questions (repère 45 min), sujet complet (2 h), chrono (75 min)
        if (examMode) {
          sessionDuration = EXAM_PREP_DURATIONS[examMode];
          sessionBreak = Math.max(sessionBreak, 10);
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
          sessionTitle = `${displaySubjectName} - ${topicName}`;
          sessionDescription = `Ne pas juste relire, mais se tester de tête. Espacement dans le temps pour sceller l'information en mémoire longue.`;
          sessionObjectives = [
            'Fermer le cours et essayer de s’en souvenir de tête',
            `Auto-évaluation active sur ${topicName} (questions sans notes)`,
            'Noter les points d’erreur et reprogrammer un rappel à J+2',
          ];
        }

        const startMin = slotCurrentStart;
        // RÈGLE STRICTE DE LUCIDITÉ : aucun créneau ne peut commencer à ou après 23h30 (1410 min)
        if (startMin >= 1410) break;

        const effectiveSlotEnd = Math.min(slot.end, 1410);
        const availableInSlot = effectiveSlotEnd - startMin;
        if (availableInSlot < 20) break;

        const actualDuration = Math.min(sessionDuration, availableInSlot);
        const endMin = startMin + actualDuration;
        // RÈGLE STRICTE : La séance ne peut déborder après 23h30
        if (endMin > 1410) break;

        const examLabel = subject.examType === 'devoir' ? 'Devoir' : subject.examType === 'rattrapage' ? 'Rattrapage' : 'Examen';

        let priority: 'urgent' | 'high' | 'medium' | 'maintenance' = 'medium';
        if (isExamApproaching && daysUntilExamOnDate !== null && daysUntilExamOnDate <= 7) {
          priority = 'urgent';
        } else if (subject.difficulty >= 4 || subject.coefficient >= 5) {
          priority = 'high';
        } else if (subject.difficulty <= 2) {
          priority = 'maintenance';
        }

        const energy: 'high' | 'medium' | 'low' = 
          subject.difficulty >= 4 ? 'high' : subject.difficulty === 3 ? 'medium' : 'low';

        let finalTitle = sessionTitle;
        let finalDesc = sessionDescription;
        let finalObjectives = sessionObjectives;

        if (examMode && daysUntilExamOnDate !== null) {
          const text = examPrepSessionText(examMode, displaySubjectName, examLabel, daysUntilExamOnDate);
          finalTitle = text.title;
          finalDesc = text.description;
          finalObjectives = text.objectives;
        }

        generatedSessions.push({
          id: generateId(),
          subjectId: subject.id,
          dayOfWeek: day,
          date: dateString,
          startTime: minutesToTimeString(startMin),
          endTime: minutesToTimeString(endMin),
          durationMinutes: actualDuration,
          pacingMethod: sessionPacing.id,
          type: isExamApproaching ? 'exam_simulation' : sessionType,
          title: finalTitle,
          description: finalDesc,
          objectives: finalObjectives,
          priority,
          energyRequired: energy,
          completed: false,
          isExamPrep: isExamApproaching,
          examDaysRemaining: isExamApproaching ? daysUntilExamOnDate ?? undefined : undefined,
          examType: isExamFeatureAllowed ? (subject.examType || 'examen') : undefined,
          examPrepMode: examMode ?? undefined,
          examChapterIds: examMode && examMode !== 'chrono75' ? subject.examChapterIds : undefined,
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

  // RÈGLE DE SÉCURITÉ ABSOLUE : Exclusion définitive de tout créneau débutant à/après 23h30 ou finissant après 23h30
  const strictlyLucidSessions = generatedSessions.filter(s => {
    const sStart = parseTimeToMinutes(s.startTime);
    const sEnd = parseTimeToMinutes(s.endTime);
    return sStart < 1410 && sEnd <= 1410;
  });

  // Tri final chronologique irréprochable : d'abord par jour (0 à 6), puis par heure de début
  return strictlyLucidSessions.sort((a, b) => {
    if (a.dayOfWeek !== b.dayOfWeek) return a.dayOfWeek - b.dayOfWeek;
    return parseTimeToMinutes(a.startTime) - parseTimeToMinutes(b.startTime);
  });
}

/**
 * Fusionne un nouveau plan généré avec les sessions existantes en préservant
 * STRICTEMENT toutes les séances déjà validées par l'étudiant (completed: true).
 * Interdiction absolue de réinitialiser le travail déjà accompli.
 */
export function mergePreservingCompletedSessions(
  existingSessions: StudySession[],
  freshPlan: StudySession[]
): StudySession[] {
  if (!existingSessions || existingSessions.length === 0) {
    return freshPlan;
  }

  const completedSessions = existingSessions.filter(s => s.completed);
  if (completedSessions.length === 0) {
    return freshPlan;
  }

  // 1. Indexer les séances complétées par ID et par clé Matière-Jour
  const completedById = new Map<string, StudySession>();
  const completedByKey = new Map<string, StudySession>();
  
  completedSessions.forEach(s => {
    completedById.set(s.id, s);
    const key = `${s.subjectId || s.title}-${s.dayOfWeek}`;
    if (!completedByKey.has(key)) {
      completedByKey.set(key, s);
    }
  });

  const matchedCompletedIds = new Set<string>();

  // 2. Mettre à jour les séances du nouveau plan en conservant les données de validation
  const mergedPlan = freshPlan.map(fresh => {
    // Correspondance par ID
    const byId = completedById.get(fresh.id);
    if (byId) {
      matchedCompletedIds.add(byId.id);
      return {
        ...fresh,
        completed: true,
        completedAt: byId.completedAt,
        actualDurationMinutes: byId.actualDurationMinutes || fresh.durationMinutes,
        rating: byId.rating,
      };
    }

    // Correspondance par Matière et Jour
    const key = `${fresh.subjectId || fresh.title}-${fresh.dayOfWeek}`;
    const byKey = completedByKey.get(key);
    if (byKey && !matchedCompletedIds.has(byKey.id)) {
      matchedCompletedIds.add(byKey.id);
      return {
        ...fresh,
        completed: true,
        completedAt: byKey.completedAt,
        actualDurationMinutes: byKey.actualDurationMinutes || fresh.durationMinutes,
        rating: byKey.rating,
      };
    }

    return fresh;
  });

  // 3. Conserver toute séance validée qui n'aurait pas trouvé de correspondance directe
  const unmatchedCompleted = completedSessions.filter(s => !matchedCompletedIds.has(s.id));

  return [...mergedPlan, ...unmatchedCompleted].sort((a, b) => {
    if (a.dayOfWeek !== b.dayOfWeek) return a.dayOfWeek - b.dayOfWeek;
    return parseTimeToMinutes(a.startTime) - parseTimeToMinutes(b.startTime);
  });
}

/**
 * Synchronise automatiquement les séances non complétées avec les échéances d'examens/devoirs actuelles
 * (ex: mise à jour automatique à 45m si un devoir approche à J-2 sans réinitialiser les séances faites).
 */
export function synchronizeSessionsWithExamCountdowns(
  sessions: StudySession[],
  subjects: Subject[],
  rawGrade?: string | null
): StudySession[] {
  if (!sessions || sessions.length === 0) return [];
  // Préparation aux devoirs ouverte seulement pour certaines classes (2nde A, 2nde C)
  if (!isExamPrepOpenFor(rawGrade)) return sessions;
  const subjectsMap = new Map(subjects.map(s => [s.id, s]));

  const referenceDate = new Date();
  const currentDayIndex = (referenceDate.getDay() + 6) % 7;

  // Une seule séance de préparation par jour et par matière (jamais deux sujets de 2 h le même jour)
  const prepDays = new Set<string>();

  return sessions.map(session => {
    if (session.completed) return session; // Ne JAMAIS altérer une session déjà validée

    const subject = subjectsMap.get(session.subjectId);
    if (!subject || !subject.examDate) return session;
    const dayKey = `${session.dayOfWeek}|${session.subjectId}`;
    if (prepDays.has(dayKey)) return session;

    const daysAhead = (session.dayOfWeek - currentDayIndex + 7) % 7;
    const sessionDate = new Date(referenceDate);
    sessionDate.setDate(referenceDate.getDate() + daysAhead);

    const daysToExam = getDaysRemainingFrom(subject.examDate, sessionDate);
    const mode = examPrepModeFor(daysToExam, subject);
    if (!mode || daysToExam === null || daysToExam > EXAM_PREP_HORIZON_DAYS) return session;
    prepDays.add(dayKey);

    // Même jour, même type de séance et mêmes chapitres : rien à changer
    const sameChapters = JSON.stringify(session.examChapterIds || []) === JSON.stringify(mode === 'chrono75' ? [] : subject.examChapterIds || []);
    if (session.examPrepMode === mode && session.examDaysRemaining === daysToExam && sameChapters) return session;

    const targetDuration = EXAM_PREP_DURATIONS[mode];
    const startMin = parseTimeToMinutes(session.startTime);
    const newEndMin = Math.min(1410, startMin + targetDuration);
    const examLabel = subject.examType === 'devoir' ? 'Devoir' : subject.examType === 'rattrapage' ? 'Rattrapage' : 'Examen';
    const text = examPrepSessionText(mode, subject.name, examLabel, daysToExam);
    return {
      ...session,
      durationMinutes: newEndMin - startMin,
      endTime: minutesToTimeString(newEndMin),
      type: 'exam_simulation',
      title: text.title,
      description: text.description,
      objectives: text.objectives,
      isExamPrep: true,
      examDaysRemaining: daysToExam,
      examType: subject.examType || 'examen',
      examPrepMode: mode,
      examChapterIds: mode === 'chrono75' ? undefined : subject.examChapterIds,
    };
  });
}
