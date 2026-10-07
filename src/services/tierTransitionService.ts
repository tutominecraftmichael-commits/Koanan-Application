import type { PlanTier, Subject, StudySession } from '../types';
import type { AppState } from './storage';
import { FREE_METHODS, isProMethod } from '../lib/subscriptionPlans';
import { deregisterPlusUser, registerPlusUser } from './storage';
import { generateOptimizedStudyPlan } from './plannerAlgorithm';

export interface TierTransitionResult {
  nextState: AppState;
  previousTier: PlanTier;
  targetTier: PlanTier;
  dissolvedFeatures: string[];
}

/**
 * Nettoie et dissout immédiatement toutes les fonctionnalités exclusives d'un modèle précédent
 * lorsque l'utilisateur quitte ou bascule vers un nouveau modèle d'abonnement.
 * 
 * Règles métier strictes :
 * - De Pro (ou Plus) vers Gratuit :
 *   - Dissolution des méthodes Pro (Feynman, Time Blocking) -> repli automatique sur Pomodoro ou méthode gratuite.
 *   - Dissolution du multi-méthodes (limité strictement à 1 seule méthode gratuite).
 *   - Dissolution complète de toutes les préparations de devoirs et examens de l'emploi du temps.
 *   - Suppression des dates de devoirs/épreuves sur les matières (examDate, examType, examTime).
 *   - Régénération complète de l'emploi du temps en modèle 100% Gratuit.
 *   - Dissolution des objectifs académiques et invitations de groupe.
 * - De Plus vers Pro :
 *   - Dissolution des fonctionnalités exclusives à Plus : groupe 5 membres, invitations, objectifs académiques.
 *   - Conservation des fonctionnalités Pro : méthodes Feynman, Time Blocking, examens et devoirs.
 */
export function transitionUserState(
  currentState: AppState, 
  targetTier: PlanTier
): TierTransitionResult {
  const previousTier: PlanTier = currentState.planTier || currentState.userAccount?.planTier || 'free';
  const dissolvedFeatures: string[] = [];

  const myId = currentState.userAccount?.konanId || currentState.konanId;
  const myEmail = currentState.userAccount?.email;

  // 1. Clonage de l'état avec mise à jour du palier
  const nextState: AppState = {
    ...currentState,
    planTier: targetTier,
    userAccount: currentState.userAccount ? {
      ...currentState.userAccount,
      planTier: targetTier,
    } : undefined,
  };

  // =========================================================================
  // CAS 1 : TRANSITION VERS LE MODÈLE GRATUIT (FREE)
  // =========================================================================
  if (targetTier === 'free') {
    // A. Dissolution du statut Konan Plus & du groupe partagé
    if (previousTier === 'plus' || currentState.isGroupGuest || currentState.userAccount?.isGroupGuest) {
      nextState.isGroupGuest = false;
      if (nextState.userAccount) {
        nextState.userAccount.isGroupGuest = false;
        nextState.userAccount.invitedBy = undefined;
      }
      nextState.academicGoal = undefined;
      if (nextState.userAccount) nextState.userAccount.academicGoal = undefined;
      nextState.invitedEmails = [];
      nextState.invitedIds = [];
      if (nextState.userAccount) {
        nextState.userAccount.invitedEmails = [];
        nextState.userAccount.invitedIds = [];
      }
      if (myId) deregisterPlusUser(myId);
      if (myEmail) deregisterPlusUser(myEmail);
      dissolvedFeatures.push('Groupe partagé (5 membres) & invitations dissoutes');
      dissolvedFeatures.push('Objectifs académiques d’élite dissous');
    }

    // B. Dissolution des méthodes d'espacement PRO (Feynman, Time Blocking)
    let nextPacing = currentState.preferences.pacing;
    if (isProMethod(nextPacing) || !FREE_METHODS.includes(nextPacing as any)) {
      nextPacing = 'pomodoro';
      dissolvedFeatures.push(`Méthode Pro "${currentState.preferences.pacing}" dissoute (remplacée par Pomodoro)`);
    }

    // C. Dissolution du multi-méthodes (en gratuit : max 1 seule méthode)
    const combined = currentState.preferences.combinedPacings || [];
    if (combined.length > 1) {
      dissolvedFeatures.push(`Combinaison multiple (${combined.length} méthodes) dissoute -> limitée à 1 seule méthode`);
    }

    nextState.preferences = {
      ...currentState.preferences,
      pacing: nextPacing,
      combinedPacings: [nextPacing],
      focusBlockDuration: nextPacing === 'pomodoro' ? 25 : currentState.preferences.focusBlockDuration || 25,
      breakBlockDuration: nextPacing === 'pomodoro' ? 5 : currentState.preferences.breakBlockDuration || 5,
    };

    // D. Dissolution de toutes les dates de devoirs et examens
    let hadExamsOrDevoirs = false;
    nextState.subjects = (currentState.subjects || []).map((sub: Subject) => {
      if (sub.examDate || sub.examType || sub.examTime) {
        hadExamsOrDevoirs = true;
      }
      return {
        ...sub,
        examDate: undefined,
        examType: undefined,
        examTime: undefined,
      };
    });
    if (hadExamsOrDevoirs) {
      dissolvedFeatures.push('Dates de devoirs surveillés & examens supprimées des matières');
    }

    // E. Coaching & rappels PRO dissous
    if (nextState.coachingSessionsRemaining) nextState.coachingSessionsRemaining = 0;
    if (nextState.userAccount?.coachingSessionsRemaining) nextState.userAccount.coachingSessionsRemaining = 0;

    // F. Reconfiguration intégrale de l'emploi du temps en modèle Gratuit pur
    if (nextState.subjects.length > 0 && nextState.classSlots.length > 0) {
      nextState.studySessions = generateOptimizedStudyPlan(
        nextState.subjects,
        nextState.classSlots,
        nextState.preferences,
        'free'
      );
      dissolvedFeatures.push('Emploi du temps recalculé purement en modèle Gratuit (tout devoir et méthode Pro éliminés)');
    } else {
      // Filtrage chirurgical des sessions existantes
      nextState.studySessions = (currentState.studySessions || [])
        .filter((session: StudySession) => {
          // Tout devoir ou examen à préparer s'en va
          if (session.isExamPrep || session.type === 'exam_simulation') return false;
          const lowerTitle = (session.title || '').toLowerCase();
          if (lowerTitle.includes('devoir') || lowerTitle.includes('examen') || lowerTitle.includes('épreuve') || lowerTitle.includes('rattrapage')) {
            return false;
          }
          return true;
        })
        .map((session: StudySession) => {
          // Toute méthode Pro est convertie en Pomodoro
          if (isProMethod(session.pacingMethod || '')) {
            const subject = nextState.subjects.find((s: Subject) => s.id === session.subjectId);
            const subName = subject?.name || 'Matière';
            return {
              ...session,
              pacingMethod: 'pomodoro',
              durationMinutes: 25,
              title: `Pomodoro (25m) : ${subName}`,
              description: 'Micro-session Pomodoro de 25 min à fond, coupure nette de 5 min.',
              objectives: [
                '25 min à fond sans distraction',
                'Pause obligatoire de 5 min pour reposer le cerveau',
              ],
            };
          }
          return session;
        });
      dissolvedFeatures.push('Sessions de révision de devoirs surveillés purgées de l’emploi du temps');
    }
  }

  // =========================================================================
  // CAS 2 : TRANSITION DE PLUS VERS PRO
  // =========================================================================
  else if (targetTier === 'pro') {
    if (previousTier === 'plus' || currentState.isGroupGuest || currentState.userAccount?.isGroupGuest) {
      // Dissolution exclusive des avantages PLUS
      nextState.isGroupGuest = false;
      if (nextState.userAccount) {
        nextState.userAccount.isGroupGuest = false;
        nextState.userAccount.invitedBy = undefined;
      }
      nextState.academicGoal = undefined;
      if (nextState.userAccount) nextState.userAccount.academicGoal = undefined;
      nextState.invitedEmails = [];
      nextState.invitedIds = [];
      if (nextState.userAccount) {
        nextState.userAccount.invitedEmails = [];
        nextState.userAccount.invitedIds = [];
      }
      if (myId) deregisterPlusUser(myId);
      if (myEmail) deregisterPlusUser(myEmail);
      dissolvedFeatures.push('Groupe partagé (5 membres) & invitations dissoutes (exclusives à Konan Plus)');
      dissolvedFeatures.push('Objectif académique d’élite dissous');
    }

    // Régénération de l'emploi du temps avec les privilèges PRO maintenus (Feynman, Time Blocking, Devoirs)
    if (nextState.subjects.length > 0 && nextState.classSlots.length > 0) {
      nextState.studySessions = generateOptimizedStudyPlan(
        nextState.subjects,
        nextState.classSlots,
        nextState.preferences,
        'pro'
      );
    }
  }

  // =========================================================================
  // CAS 3 : TRANSITION VERS PLUS
  // =========================================================================
  else if (targetTier === 'plus') {
    if (myId) registerPlusUser(myId);
    if (myEmail) registerPlusUser(myEmail);
    if (nextState.subjects.length > 0 && nextState.classSlots.length > 0) {
      nextState.studySessions = generateOptimizedStudyPlan(
        nextState.subjects,
        nextState.classSlots,
        nextState.preferences,
        'plus'
      );
    }
  }

  return {
    nextState,
    previousTier,
    targetTier,
    dissolvedFeatures,
  };
}
