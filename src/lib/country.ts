/**
 * Pays de l'élève (choix du fondateur, 2026-11-22).
 *
 * Les cours, les QCM et les devoirs de KONAN suivent le PROGRAMME IVOIRIEN. Un élève d'un autre pays peut
 * utiliser KONAN (planning, méthodes, ligue) en Gratuit, mais KONAN Pro et la préparation aux devoirs
 * sont réservés à la Côte d'Ivoire : ailleurs, les matières et les sujets ne correspondraient pas.
 *
 * Un compte créé avant cette question n'a pas de pays : il est considéré comme ivoirien (tous les
 * élèves inscrits jusque-là suivaient le programme ivoirien). L'élève peut corriger dans les Paramètres.
 */

export const PROGRAM_COUNTRY = 'CI';
export const OTHER_COUNTRY = 'XX';

export interface CountryOption { code: string; name: string; flag: string }

/** Côte d'Ivoire en premier, puis les pays les plus proches, puis « Autre pays ». */
export const COUNTRIES: CountryOption[] = [
  { code: 'CI', name: 'Côte d’Ivoire', flag: '🇨🇮' },
  { code: 'BF', name: 'Burkina Faso', flag: '🇧🇫' },
  { code: 'ML', name: 'Mali', flag: '🇲🇱' },
  { code: 'GN', name: 'Guinée', flag: '🇬🇳' },
  { code: 'SN', name: 'Sénégal', flag: '🇸🇳' },
  { code: 'TG', name: 'Togo', flag: '🇹🇬' },
  { code: 'BJ', name: 'Bénin', flag: '🇧🇯' },
  { code: 'NE', name: 'Niger', flag: '🇳🇪' },
  { code: 'GH', name: 'Ghana', flag: '🇬🇭' },
  { code: 'LR', name: 'Liberia', flag: '🇱🇷' },
  { code: 'NG', name: 'Nigeria', flag: '🇳🇬' },
  { code: 'CM', name: 'Cameroun', flag: '🇨🇲' },
  { code: 'GA', name: 'Gabon', flag: '🇬🇦' },
  { code: 'CG', name: 'Congo', flag: '🇨🇬' },
  { code: 'CD', name: 'RD Congo', flag: '🇨🇩' },
  { code: 'TD', name: 'Tchad', flag: '🇹🇩' },
  { code: 'CF', name: 'Centrafrique', flag: '🇨🇫' },
  { code: 'MA', name: 'Maroc', flag: '🇲🇦' },
  { code: 'TN', name: 'Tunisie', flag: '🇹🇳' },
  { code: 'DZ', name: 'Algérie', flag: '🇩🇿' },
  { code: 'FR', name: 'France', flag: '🇫🇷' },
  { code: 'BE', name: 'Belgique', flag: '🇧🇪' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: OTHER_COUNTRY, name: 'Autre pays', flag: '🌍' },
];

export function normalizeCountry(raw?: string | null): string {
  const code = String(raw || '').trim().toUpperCase();
  return COUNTRIES.some((c) => c.code === code) ? code : '';
}

export function countryName(raw?: string | null): string {
  const code = normalizeCountry(raw);
  return COUNTRIES.find((c) => c.code === code)?.name || '';
}

/** L'élève suit-il le programme ivoirien ? (pas de pays enregistré = ancien compte = Côte d'Ivoire) */
export function followsIvorianProgram(raw?: string | null): boolean {
  const code = normalizeCountry(raw);
  return !code || code === PROGRAM_COUNTRY;
}

export const OUTSIDE_PROGRAM_TEXT =
  'Les cours et les devoirs de KONAN suivent le programme de Côte d’Ivoire. Dans ton pays, tu peux utiliser KONAN gratuitement pour organiser tes révisions (planning, méthodes, ligue). KONAN Pro est réservé à la Côte d’Ivoire pour l’instant.';
