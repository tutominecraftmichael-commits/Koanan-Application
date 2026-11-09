import type { StudyPacing, PlanTier } from '../types';

/**
 * Paliers d'abonnements officiels pour KOUNAN SaaS
 */
export type { PlanTier };

/**
 * Méthodes de la version GRATUITE (Tier: 'free') : 1 seule active à la fois.
 */
export const FREE_METHODS: readonly StudyPacing[] = [
  'pomodoro',
  'two_minutes_rule',
  'active_recall',
  'spaced_repetition',
  'active_recall_spaced',
] as const;

/**
 * Méthodes réservées à KONAN PRO : Feynman à l'oral (3 vocaux par jour) et Time Blocking (mode concentration).
 * La combinaison de méthodes (jusqu'à 3) est aussi réservée au Pro.
 */
export const PRO_METHODS: readonly StudyPacing[] = ['feynman', 'time_blocking'] as const;

/**
 * Fonctionnalités exclusives à la version PLUS (Tier: 'plus')
 * - Sélection de l'objectif académique (Major, Mention, etc.)
 * - Pistes sonores d'étude et relaxation (ondes alpha, lofi)
 * - Système de parrainage / invitation de camarades (jusqu'à 4 invités)
 */
export const PLUS_FEATURES = [
  'academic_goals',
  'focus_soundtracks',
  'group_invitations',
] as const;

export type PlusFeature = typeof PLUS_FEATURES[number];

/**
 * Fonctionnalités exclusives à la version PRO (Tier: 'pro')
 */
export const PRO_FEATURES = [
  'combined_methods',
  'coefficients_recommendation',
  'study_reminders_30m',
  'unlimited_pdf_imports',
] as const;

export type ProFeature = typeof PRO_FEATURES[number];

export interface PlanDetails {
  id: PlanTier;
  name: string;
  tagline: string;
  priceLabel: string;
  periodLabel: string;
  priceAmount: number;
  maxPdfImports: number;
  maxConcurrentMethods: number;
  allowedMethods: readonly StudyPacing[];
  isPurchaseActive: boolean; // Actuellement désactivé pour Pro & Plus (Mobile Money en intégration)
  paymentProviders: string[];
}

export const PLAN_DETAILS: Record<PlanTier, PlanDetails> = {
  free: {
    id: 'free',
    name: 'KONAN Gratuit',
    tagline: 'Autonomie académique essentielle',
    priceLabel: '0 F',
    periodLabel: 'Gratuit à vie',
    priceAmount: 0,
    maxPdfImports: 3, // Limité à 3 imports / générations pour le modèle Gratuit
    maxConcurrentMethods: 1, // 1 seule méthode à la fois
    allowedMethods: FREE_METHODS,
    isPurchaseActive: true,
    paymentProviders: [],
  },
  pro: {
    id: 'pro',
    name: 'KONAN PRO',
    tagline: '1 200 F CFA / mois • 2 350 F CFA / semestre • Offert pendant le lancement',
    priceLabel: '1 200 F',
    periodLabel: 'CFA / mois (Version PRO ouverte)',
    priceAmount: 1200,
    maxPdfImports: 99,
    maxConcurrentMethods: 3,
    allowedMethods: [...FREE_METHODS, ...PRO_METHODS],
    isPurchaseActive: true, // Pro offert pendant la période de lancement
    paymentProviders: [],
  },
  plus: {
    id: 'plus',
    name: 'KONAN PLUS',
    tagline: '2 500 F CFA / mois • 5 000 F CFA / semestre • Disponible bientôt',
    priceLabel: '2 500 F',
    periodLabel: 'CFA / mois (Disponible bientôt)',
    priceAmount: 2500,
    maxPdfImports: 3,
    maxConcurrentMethods: 1,
    allowedMethods: FREE_METHODS,
    isPurchaseActive: false, // Compte Plus disponible bientôt
    paymentProviders: [],
  },
};

// ============================================================================
// GRILLE AFFICHÉE AUX ÉLÈVES (inscription + page d'accueil) — source unique
// Prix en F CFA. Les descriptions décrivent ce que l'application fait VRAIMENT aujourd'hui.
// ============================================================================

export type BillingPeriod = 'monthly' | 'semester';

/** Un semestre = 6 mois. */
export const SEMESTER_MONTHS = 6;

export interface DisplayPlanFeature {
  title: string;
  detail?: string;
}

export interface DisplayPlan {
  id: PlanTier;
  name: string;
  tagline: string;
  /** Prix par période de paiement (F CFA). */
  prices: Record<BillingPeriod, number>;
  /** Palier dont celui-ci reprend tout (affiché « Tout X, plus : »). */
  includesLabel: string;
  features: DisplayPlanFeature[];
  /** Note courte sous le prix (offre de lancement, disponibilité…). */
  note?: string;
  available: boolean;
  recommended?: boolean;
}

export const DISPLAY_PLANS: DisplayPlan[] = [
  {
    id: 'free',
    name: 'KONAN Gratuit',
    tagline: 'Pour bien démarrer',
    prices: { monthly: 0, semester: 0 },
    includesLabel: 'Inclus :',
    available: true,
    features: [
      { title: 'Ton emploi du temps importé', detail: 'PDF, photo ou texte : 3 imports.' },
      { title: 'Ton planning de révision', detail: 'Créé pour ta classe, avec tes matières et coefficients.' },
      { title: 'Cours guidés du programme officiel', detail: 'Mini-leçons et QCM, rattrapage de tes erreurs.' },
      { title: 'KONAN retient tes erreurs', detail: 'Il te les repose au bon moment (révision espacée).' },
      { title: 'Rappels de séance sur ton téléphone' },
      { title: '1 méthode à la fois', detail: 'Pomodoro, Rappel actif ou Règle des 2 minutes.' },
    ],
  },
  {
    id: 'pro',
    name: 'KONAN PRO',
    tagline: 'Pour progresser vite',
    prices: { monthly: 1200, semester: 2350 },
    includesLabel: 'Tout le Gratuit, plus :',
    note: 'Offert pendant le lancement',
    available: true,
    recommended: true,
    features: [
      { title: 'Méthode Feynman à l’oral', detail: 'Explique ta leçon à voix haute, KONAN te corrige : 3 vocaux par jour.' },
      { title: 'Time Blocking', detail: 'De longs blocs en mode concentration, sans distraction.' },
      { title: 'Jusqu’à 3 méthodes combinées', detail: 'Dans le même planning, selon tes matières.' },
      { title: 'La recommandation de KONAN', detail: 'La meilleure méthode selon ton temps libre.' },
      { title: 'Planning configuré avec KONAN, pas à pas' },
      { title: 'Imports d’emploi du temps illimités' },
      { title: 'Export vers Google Agenda' },
    ],
  },
  {
    id: 'plus',
    name: 'KONAN PLUS',
    tagline: 'Pour viser l’excellence',
    prices: { monthly: 2500, semester: 5000 },
    includesLabel: 'Tout le Pro, plus :',
    note: 'Bientôt disponible',
    available: false,
    features: [
      { title: 'Planning réglé sur ton objectif', detail: '12 de moyenne, une mention ou major de promo.' },
      { title: 'Pack groupe', detail: 'Invite jusqu’à 4 camarades (5 comptes).' },
      { title: 'Musiques de concentration', detail: 'Ondes alpha, lofi, bruit blanc.' },
    ],
  },
];

/** « 1 200 » : séparateur des milliers à la française. */
export function formatFcfa(amount: number): string {
  return amount.toLocaleString('fr-FR').replace(/ | /g, ' ');
}

/**
 * Vérifie si une méthode d'apprentissage fait partie du palier Gratuit
 */
export function isFreeMethod(method: StudyPacing | string): boolean {
  return FREE_METHODS.includes(method as StudyPacing);
}

/**
 * Vérifie si une méthode est exclusive au palier Pro
 */
export function isProMethod(method: StudyPacing | string): boolean {
  return PRO_METHODS.includes(method as StudyPacing);
}

/**
 * Vérifie si une méthode d'apprentissage est autorisée pour un palier donné
 * En PRO ou PLUS, toutes les méthodes sont autorisées.
 */
export function isMethodAllowedForTier(method: StudyPacing | string, tier: PlanTier = 'free'): boolean {
  if (tier === 'pro' || tier === 'plus') {
    return true;
  }
  return isFreeMethod(method);
}

/**
 * Vérifie si l'utilisateur peut importer un nouvel emploi du temps PDF
 * Illimité en Pro/Plus, limité aux quotas du modèle Gratuit en Free.
 */
export function canImportPdfSchedule(tier: PlanTier = 'free', currentImportCount: number = 0): boolean {
  if (tier === 'pro' || tier === 'plus') return true;
  return currentImportCount < PLAN_DETAILS.free.maxPdfImports;
}

/**
 * Nombre maximal de méthodes combinables pour un palier (jusqu'à 3 en Pro/Plus, 1 en Free)
 */
export function getMaxMethodsForTier(tier: PlanTier = 'free'): number {
  if (tier === 'pro' || tier === 'plus') return 3;
  return 1;
}
