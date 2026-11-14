/**
 * Nom d'élève acceptable ? (profil, classement de la ligue vu par d'autres élèves, souvent mineurs)
 * Utilisé par l'appli (Paramètres → Profil) ET par le serveur de la ligue : même règle des deux côtés.
 *
 * Refusés : insultes et mots vulgaires (français, nouchi courant, anglais), numéros de téléphone,
 * e-mails, liens, chiffres, caractères spéciaux, nom trop court ou trop long, lettre répétée à l'infini.
 */

// Mots interdits (comparés mot par mot, sans accents ni majuscules : « Constant » n'est pas « con »)
const BANNED = new Set([
  // français
  'con', 'conne', 'connard', 'connasse', 'salope', 'salaud', 'pute', 'putain', 'pd', 'pede', 'tapette', 'encule', 'enculee',
  'enculer', 'merde', 'bite', 'couille', 'couilles', 'chatte', 'nique', 'niquer', 'ntm', 'fdp', 'batard', 'batarde', 'enfoire',
  'enfoiree', 'bordel', 'cul', 'zizi', 'teub', 'pouffiasse', 'catin', 'trouduc', 'branleur', 'branleuse', 'sexe', 'sexy',
  'porno', 'porn', 'xxx', 'nazi', 'hitler', 'negre', 'negresse', 'bougnoule', 'youpin',
  // nouchi et expressions locales injurieuses
  'gnamokode', 'gnamokodeh',
  // anglais
  // (« Dick » est aussi un vrai prénom : non bloqué)
  'fuck', 'fucker', 'fucking', 'shit', 'bitch', 'pussy', 'asshole', 'cunt', 'whore', 'slut', 'nigger', 'nigga', 'bastard',
]);

/** Après un changement de nom, l'élève doit attendre 3 mois avant le suivant (choix du fondateur, 2026-11-14). */
export const NAME_CHANGE_COOLDOWN_DAYS = 90;
const DAY_MS = 24 * 60 * 60 * 1000;

/** Date (ms) à partir de laquelle l'élève pourra de nouveau changer son nom, ou null s'il le peut déjà. */
export function nextNameChangeAt(lastChangeIso, nowMs = Date.now()) {
  const last = Date.parse(lastChangeIso || '');
  if (!Number.isFinite(last)) return null;
  const next = last + NAME_CHANGE_COOLDOWN_DAYS * DAY_MS;
  return next > nowMs ? next : null;
}

const strip = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

/** @returns {{ ok: true, name: string } | { ok: false, reason: string }} */
export function checkStudentName(raw) {
  const name = String(raw || '').replace(/\s+/g, ' ').trim();
  if (name.length < 2) return { ok: false, reason: 'Ton nom est trop court.' };
  if (name.length > 40) return { ok: false, reason: 'Ton nom est trop long (40 caractères au maximum).' };
  if (/@|https?:|www\.|\.(com|ci|fr|net|org)\b/i.test(name)) return { ok: false, reason: 'Pas d’adresse e-mail ni de lien dans ton nom.' };
  if (/\d/.test(name)) return { ok: false, reason: 'Pas de chiffres ni de numéro de téléphone dans ton nom.' };
  if (!/^[\p{L}][\p{L}\p{M} '’.-]*$/u.test(name)) return { ok: false, reason: 'Utilise seulement des lettres, des espaces, des tirets ou des apostrophes.' };
  if ((name.match(/\p{L}/gu) || []).length < 2) return { ok: false, reason: 'Ton nom doit contenir au moins deux lettres.' };
  if (/(\p{L})\1{3,}/iu.test(name)) return { ok: false, reason: 'Écris ton vrai nom (pas de lettre répétée).' };
  const words = strip(name).split(/[\s'’.-]+/).filter(Boolean);
  if (words.some((w) => BANNED.has(w))) return { ok: false, reason: 'Ce nom contient un mot inapproprié. Écris ton vrai nom.' };
  // Mot interdit collé (« sale_con », « fuckyou ») : seulement les mots longs, pour ne pas toucher aux vrais noms
  const joined = words.join('');
  for (const bad of BANNED) if (bad.length >= 5 && joined.includes(bad)) return { ok: false, reason: 'Ce nom contient un mot inapproprié. Écris ton vrai nom.' };
  return { ok: true, name };
}
