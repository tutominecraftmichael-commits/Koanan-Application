import type { StudyPacing, PlanTier } from '../types';

/**
 * Paliers d'abonnements officiels pour KOUNAN SaaS
 */
export type { PlanTier };

/**
 * Méthodes autorisées en version GRATUITE (Tier: 'free')
 * - Technique Pomodoro
 * - Règle des deux minutes
 * - Active Recall (Rappel actif)
 * - Spaced Repetition (Répétition espacée)
 * (+ 'active_recall_spaced' pour rétro-compatibilité)
 */
export const FREE_METHODS: readonly StudyPacing[] = [
  'pomodoro',
  'two_minutes_rule',
  'active_recall',
  'spaced_repetition',
  'active_recall_spaced',
] as const;

/**
 * Méthodes exclusives à la version PRO (Tier: 'pro')
 * - Technique de Feynman
 * - Time Blocking
 */
export const PRO_METHODS: readonly StudyPacing[] = [
  'feynman',
  'time_blocking',
] as const;

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
  'feynman',
  'time_blocking',
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
    tagline: 'Offre Découverte Offerte • Puissance Maximale',
    priceLabel: 'Offert',
    periodLabel: 'Période Découverte',
    priceAmount: 0,
    maxPdfImports: 99,
    maxConcurrentMethods: 3,
    allowedMethods: [...FREE_METHODS, ...PRO_METHODS],
    isPurchaseActive: true, // Pro offert pendant la période promotionnelle
    paymentProviders: [],
  },
  plus: {
    id: 'plus',
    name: 'KONAN PLUS',
    tagline: 'Formule actuellement désactivée — Tous les comptes sont en Gratuit',
    priceLabel: '2 500 F',
    periodLabel: 'CFA / mois (Désactivé)',
    priceAmount: 2500,
    maxPdfImports: 3,
    maxConcurrentMethods: 1,
    allowedMethods: FREE_METHODS,
    isPurchaseActive: false, // Compte Plus désactivé
    paymentProviders: [],
  },
};

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
