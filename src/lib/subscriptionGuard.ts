import type { PlanTier, StudyPacing, StudyPreferences } from '../types';
import { 
  isProMethod, 
  canImportPdfSchedule 
} from './subscriptionPlans';

/**
 * Erreur HTTP 403 standardisée pour les barrières d'accès (Paywalls)
 */
export class SubscriptionForbiddenError extends Error {
  public statusCode: number = 403;
  public requiredTier: 'pro' | 'plus';

  constructor(
    message: string = 'Fonctionnalité réservée aux membres Pro',
    requiredTier: 'pro' | 'plus' = 'pro'
  ) {
    super(message);
    this.name = 'SubscriptionForbiddenError';
    this.requiredTier = requiredTier;
    Object.setPrototypeOf(this, SubscriptionForbiddenError.prototype);
  }
}

/**
 * Normalisation du rôle/tier d'un utilisateur
 */
export function resolveUserTier(user?: {
  tier?: PlanTier | string;
  planTier?: PlanTier | string;
  isPro?: boolean;
} | null): PlanTier {
  if (!user) return 'free';
  if (user.tier === 'plus' || user.planTier === 'plus') return 'plus';
  if (user.tier === 'pro' || user.planTier === 'pro' || user.isPro === true) return 'pro';
  return 'free';
}

/* =========================================================================
   1. VALIDATIONS CÔTÉ CLIENT (UI GUARDS & FEEDBACK)
   ========================================================================= */

export interface AccessCheckResult {
  allowed: boolean;
  reason?: string;
  requiredTier: 'pro' | 'plus';
}

/**
 * Vérifie si l'utilisateur a le droit de choisir une méthode d'apprentissage
 */
export function checkMethodAccess(
  method: StudyPacing | string, 
  userTier: PlanTier = 'free'
): AccessCheckResult {
  if (userTier === 'pro' || userTier === 'plus') {
    return { allowed: true, requiredTier: 'pro' };
  }

  if (isProMethod(method)) {
    return {
      allowed: false,
      reason: `La méthode "${method}" est exclusive au modèle KONAN PRO.`,
      requiredTier: 'pro',
    };
  }

  return { allowed: true, requiredTier: 'pro' };
}

/**
 * Vérifie si l'utilisateur a le droit de combiner plusieurs méthodes (max 1 en gratuit, jusqu'à 3 en Pro)
 */
export function checkMultiMethodAccess(
  selectedCount: number,
  userTier: PlanTier = 'free'
): AccessCheckResult {
  if (userTier === 'pro' || userTier === 'plus') {
    if (selectedCount > 3) {
      return {
        allowed: false,
        reason: 'Vous pouvez combiner au maximum 3 méthodes simultanément.',
        requiredTier: 'pro',
      };
    }
    return { allowed: true, requiredTier: 'pro' };
  }

  if (selectedCount > 1) {
    return {
      allowed: false,
      reason: 'La combinaison de plusieurs méthodes simultanées est réservée aux membres Pro.',
      requiredTier: 'pro',
    };
  }

  return { allowed: true, requiredTier: 'pro' };
}

/**
 * Vérifie si l'importation de l'emploi du temps via PDF est autorisée (1 fois en Gratuit)
 */
export function checkPdfImportAccess(
  currentImportCount: number = 0,
  userTier: PlanTier = 'free'
): AccessCheckResult {
  if (canImportPdfSchedule(userTier, currentImportCount)) {
    return { allowed: true, requiredTier: 'pro' };
  }

  return {
    allowed: false,
    reason: "La formule Gratuite est limitée à 1 import d'emploi du temps. Passez à KONAN PRO pour un usage illimité.",
    requiredTier: 'pro',
  };
}

/**
 * Vérifie l'accès à une fonctionnalité spécifique (notifs, musiques, objectifs, parrainage)
 */
export function checkFeatureAccess(
  feature: 'reminders_30m' | 'academic_goals' | 'focus_soundtracks' | 'group_invitations' | 'smart_coefficients',
  userTier: PlanTier = 'free'
): AccessCheckResult {
  const tier = userTier;

  switch (feature) {
    case 'reminders_30m':
    case 'smart_coefficients':
      if (tier === 'pro' || tier === 'plus') return { allowed: true, requiredTier: 'pro' };
      return {
        allowed: false,
        reason: 'Cette fonctionnalité est réservée aux membres Pro.',
        requiredTier: 'pro',
      };

    case 'academic_goals':
    case 'focus_soundtracks':
    case 'group_invitations':
      if (tier === 'plus') return { allowed: true, requiredTier: 'plus' };
      return {
        allowed: false,
        reason: 'Cette fonctionnalité est exclusive aux membres KONAN PLUS.',
        requiredTier: 'plus',
      };

    default:
      return { allowed: true, requiredTier: 'pro' };
  }
}

/* =========================================================================
   2. VALIDATIONS CÔTÉ SERVEUR / BACKEND & MIDDLEWARE
   ========================================================================= */

export type BackendAction = 
  | 'GENERATE_SCHEDULE'
  | 'IMPORT_PDF_SCHEDULE'
  | 'SEND_REMINDER'
  | 'SET_ACADEMIC_GOAL'
  | 'PLAY_FOCUS_AUDIO'
  | 'MANAGE_INVITATIONS'
  | 'UPDATE_USER_PROFILE';

export interface UserContext {
  id?: string;
  email?: string;
  tier?: PlanTier | string;
  planTier?: PlanTier | string;
  isPro?: boolean;
}

/**
 * Middleware et fonction centrale de sécurité backend :
 * Vérifie les rôles et permissions réelles avant d'exécuter une requête ou fonction métier.
 * 
 * En cas de tentative de fraude (ex: envoi de payload Feynman en étant 'free'),
 * lève une exception SubscriptionForbiddenError (HTTP 403 Forbidden).
 */
export function validateBackendPermissions(
  user: UserContext | null | undefined,
  action: BackendAction,
  payload?: any
): void {
  const actualTier = resolveUserTier(user);

  switch (action) {
    case 'GENERATE_SCHEDULE': {
      // 1. Contrôle des méthodes fournies dans le payload
      const preferences: StudyPreferences | undefined = payload?.preferences || payload;
      if (preferences) {
        const pacing = preferences.pacing;
        const combined = preferences.combinedPacings || [];

        // Règle stricte : si payload contient Feynman ou Time Blocking avec un statut 'free' -> 403
        const hasProMethod = 
          isProMethod(pacing) || 
          combined.some(m => isProMethod(m));

        if (actualTier === 'free' && hasProMethod) {
          throw new SubscriptionForbiddenError(
            'Fonctionnalité réservée aux membres Pro',
            'pro'
          );
        }

        // Règle stricte : combinaison > 1 méthode réservée aux membres Pro
        if (actualTier === 'free' && combined.length > 1) {
          throw new SubscriptionForbiddenError(
            'Fonctionnalité réservée aux membres Pro',
            'pro'
          );
        }
      }
      break;
    }

    case 'IMPORT_PDF_SCHEDULE': {
      const currentCount = Number(payload?.currentImportCount ?? 0);
      if (actualTier === 'free' && currentCount >= 1) {
        throw new SubscriptionForbiddenError(
          "Limite atteinte : l'importation multiple d'emploi du temps est réservée aux membres Pro",
          'pro'
        );
      }
      break;
    }

    case 'SEND_REMINDER': {
      if (actualTier === 'free') {
        throw new SubscriptionForbiddenError(
          'Les notifications de rappel d’étude 30 minutes avant la session sont réservées aux membres Pro',
          'pro'
        );
      }
      break;
    }

    case 'SET_ACADEMIC_GOAL': {
      if (actualTier !== 'plus') {
        throw new SubscriptionForbiddenError(
          'La configuration d’objectifs académiques est réservée aux membres Konan Plus',
          'plus'
        );
      }
      break;
    }

    case 'PLAY_FOCUS_AUDIO': {
      if (actualTier !== 'plus') {
        throw new SubscriptionForbiddenError(
          'L’accès aux pistes audio de concentration et relaxation est réservé aux membres Konan Plus',
          'plus'
        );
      }
      break;
    }

    case 'MANAGE_INVITATIONS': {
      if (actualTier !== 'plus') {
        throw new SubscriptionForbiddenError(
          'Le système d’invitations et gestion de groupe est réservé aux membres Konan Plus',
          'plus'
        );
      }
      break;
    }

    case 'UPDATE_USER_PROFILE': {
      // Bloque formellement toute tentative de modification de son propre tier/isPro
      if (payload && typeof payload === 'object') {
        if ('tier' in payload || 'planTier' in payload || 'isPro' in payload) {
          throw new SubscriptionForbiddenError(
            'Interdiction de modifier directement son niveau d’abonnement via la mise à jour de profil',
            'pro'
          );
        }
      }
      break;
    }
  }
}

/**
 * Assainit un objet de mise à jour de profil avant persistance en base de données.
 * Supprime systématiquement tout champ relatif au plan ou privilège d'accès.
 */
export function sanitizeUserProfileUpdate<T extends Record<string, any>>(data: T): Omit<T, 'tier' | 'planTier' | 'isPro' | 'role'> {
  const sanitized = { ...data };
  delete sanitized.tier;
  delete sanitized.planTier;
  delete sanitized.isPro;
  delete sanitized.role;
  return sanitized;
}

/**
 * Adaptateur de Middleware pour API Node.js / Express / Next.js
 */
export function createSubscriptionMiddleware(action: BackendAction) {
  return (req: any, res: any, next: (err?: any) => void) => {
    try {
      const user = req.user || req.session?.user;
      const payload = req.body;
      validateBackendPermissions(user, action, payload);
      next();
    } catch (err: any) {
      if (err instanceof SubscriptionForbiddenError) {
        return res.status(403).json({
          status: 403,
          error: 'Forbidden',
          message: err.message,
          requiredTier: err.requiredTier,
        });
      }
      next(err);
    }
  };
}
