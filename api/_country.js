/**
 * Pays de l'élève côté serveur (choix du fondateur, 2026-11-22) : les élèves des autres pays utilisent tout
 * KONAN, mais l'IA ne doit JAMAIS leur parler de la Côte d'Ivoire (ni DRENA, ni MENA, ni programme ivoirien).
 * Pays vide = ancien compte = Côte d'Ivoire.
 */
export function isOutsideCI(country) {
  const c = String(country || '').trim().toUpperCase();
  return /^[A-Z]{2}$/.test(c) && c !== 'CI';
}

/** Règle ajoutée aux consignes de l'IA pour un élève hors Côte d'Ivoire. */
export const NEUTRAL_COUNTRY_RULE =
  "IMPORTANT : l'élève n'est PAS en Côte d'Ivoire. N'écris JAMAIS « Côte d'Ivoire », « ivoirien(ne) », « Abidjan », "
  + '« DRENA », « MENA », « DPFC », ni le nom d’une ville, d’une région, d’une institution ou d’une personnalité ivoirienne. '
  + 'Prends des situations neutres d’Afrique francophone (un lycée, un marché, une ville, une coopérative, un village…), '
  + 'avec des prénoms africains courants et des montants en francs CFA.';

/**
 * Consignes écrites pour la Côte d'Ivoire → version neutre (élève d'un autre pays).
 * Ne touche à rien pour un élève ivoirien.
 */
export function neutralizeForCountry(text, country) {
  if (!isOutsideCI(country)) return text;
  return String(text || '')
    .replace(/\b(?:de la|de) Côte d[’']Ivoire\b/g, 'd’Afrique de l’Ouest')
    .replace(/\ben Côte d[’']Ivoire\b/g, 'en Afrique de l’Ouest')
    .replace(/\bla Côte d[’']Ivoire\b/g, 'l’Afrique de l’Ouest')
    .replace(/\bCôte d[’']Ivoire\b/g, 'Afrique de l’Ouest')
    .replace(/\bivoirien(ne)?(s)?\b/gi, (_m, f = '', s = '') => `africain${f ? 'e' : ''}${s}`)
    .replace(/\b(?:DRENA|MENA|DPFC)\b[^,.;:)]*/g, 'format officiel')
    .replace(/\bAbidjan\b/g, 'la capitale');
}
