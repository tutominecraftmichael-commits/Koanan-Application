/**
 * LIGUE KONAN — règles (sans accès réseau : testables à blanc).
 *
 * - Semaine de ligue : du lundi 00:00 au dimanche 23:59 (heure d'Abidjan = UTC).
 * - Groupes de 30 élèves de même division (classes et pays mélangés).
 * - Fin de semaine : les 10 premiers montent (Perle : ils restent en Perle), les 5 derniers descendent
 *   (pas plus bas que Bronze) ; en Perle, tous ceux qui ne sont pas dans les 10 premiers redescendent.
 *   Pour monter, il faut avoir gagné au moins 1 XP dans la semaine.
 * - Réputation de plus de 80 % obligatoire : en dessous, l'élève ne participe plus et ne voit plus le
 *   classement ; sa division est gelée et il revient la semaine suivante s'il repasse au-dessus de 80 %.
 *
 * Anti-triche : les XP sont recalculés et bornés par le serveur (montants autorisés, durée minimale
 * d'une série, énergie des comptes Gratuit, plafonds par jour). Un gain impossible est refusé.
 */

import { checkStudentName } from './_nameRules.js';

export const DIVISIONS = [
  { id: 1, name: 'Bronze', color: '#92400E' },
  { id: 2, name: 'Argent', color: '#64748B' },
  { id: 3, name: 'Gold', color: '#CA8A04' },
  { id: 4, name: 'Diamant', color: '#2563EB' },
  { id: 5, name: 'Perle', color: '#DB2777' },
];
export const GROUP_SIZE = 30;
export const PROMOTE_COUNT = 10;
export const DEMOTE_COUNT = 5;
export const MIN_REPUTATION = 80; // il faut STRICTEMENT plus de 80 %

// Mêmes valeurs que src/lib/gamification/gamification.ts
export const LESSON_XP = [35, 50, 90, 140];
export const SERIES_LEVELS = [
  { level: 1, xp: 15, questions: 10, seconds: 300 },
  { level: 2, xp: 30, questions: 15, seconds: 420 },
  { level: 3, xp: 60, questions: 20, seconds: 510 },
  { level: 4, xp: 120, questions: 30, seconds: 600 },
];
export const ENERGY_MAX = 25;
export const ENERGY_COST = 5;
export const ENERGY_UNIT_MS = (23 * 60 * 60 * 1000) / ENERGY_MAX;
const MIN_SECONDS_PER_QUESTION = 2;
const MAX_LESSONS_PER_DAY = 12;
const MAX_SERIES_PER_DAY = 80;
const DAY_MS = 24 * 60 * 60 * 1000;
const WEEK_MS = 7 * DAY_MS;

// ---------------------------------------------------------------------------
// Semaines
// ---------------------------------------------------------------------------
/** Lundi 00:00 UTC de la semaine contenant `ms`. */
export function weekStartMs(ms) {
  const d = new Date(ms);
  const day = (d.getUTCDay() + 6) % 7; // lundi = 0
  return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()) - day * DAY_MS;
}
/** Identifiant de semaine : date du lundi « AAAA-MM-JJ ». */
export function weekIdOf(ms) {
  return new Date(weekStartMs(ms)).toISOString().slice(0, 10);
}
export function weekEndMs(ms) {
  return weekStartMs(ms) + WEEK_MS;
}
export function previousWeekId(ms) {
  return weekIdOf(weekStartMs(ms) - DAY_MS);
}
const dayKeyOf = (ms) => new Date(ms).toISOString().slice(0, 10);

export function isEligible(reputation) {
  return Number(reputation) > MIN_REPUTATION;
}
export function clampDivision(d) {
  return Math.max(1, Math.min(DIVISIONS.length, Math.round(Number(d) || 1)));
}

// ---------------------------------------------------------------------------
// Validation des gains d'XP
// ---------------------------------------------------------------------------
function lessonTierXp(minutes) {
  const m = Number(minutes) || 25;
  if (m < 35) return 35;
  if (m < 60) return 50;
  if (m < 98) return 90;
  return 140;
}

function energyNow(player, nowMs) {
  if (!Number.isFinite(player.energy) || !player.energyAt) return ENERGY_MAX;
  const units = Math.max(0, Math.floor((nowMs - player.energyAt) / ENERGY_UNIT_MS));
  return Math.min(ENERGY_MAX, player.energy + units);
}

/**
 * Applique une liste d'événements d'XP envoyés par l'appli à l'état serveur du joueur.
 * Renvoie le nouvel état, les identifiants acceptés et refusés (avec la raison).
 * `player` : { weekId, weekXp, totalXp, dayKey, dayLessons, daySeries, lastSeriesEndAt, energy, energyAt, seenIds[] }
 */
export function applyXpEvents(player0, events, { nowMs, planTier }) {
  const player = {
    weekXp: 0, totalXp: 0, dayLessons: 0, daySeries: 0, seenIds: [], lastSeriesEndAt: 0,
    ...player0,
  };
  const weekId = weekIdOf(nowMs);
  if (player.weekId !== weekId) {
    player.weekId = weekId;
    player.weekXp = 0;
  }
  const seen = new Set(player.seenIds || []);
  const accepted = [];
  const rejected = [];
  let lessonsCounted = 0;
  let xpGained = 0;
  const unlimited = planTier === 'pro' || planTier === 'plus';
  const sorted = [...(Array.isArray(events) ? events : [])]
    .filter((e) => e && typeof e === 'object')
    .slice(0, 200)
    .sort((a, b) => Number(a.at) - Number(b.at));

  for (const e of sorted) {
    const id = String(e.id || '').slice(0, 120);
    const at = Number(e.at);
    const reject = (reason) => rejected.push({ id, reason });
    if (!id) { reject('sans identifiant'); continue; }
    if (seen.has(id)) { accepted.push(id); continue; } // déjà compté : on confirme sans recompter
    if (!Number.isFinite(at) || at > nowMs + 5 * 60 * 1000) { reject('date invalide'); continue; }
    if (weekIdOf(at) !== weekId) { seen.add(id); accepted.push(id); continue; } // semaine passée : ne compte plus pour la ligue

    const day = dayKeyOf(at);
    if (player.dayKey !== day) { player.dayKey = day; player.dayLessons = 0; player.daySeries = 0; }

    let xp = 0;
    if (e.kind === 'lesson') {
      const expected = lessonTierXp(e.durationMinutes);
      if (Number(e.amount) !== expected) { reject('XP de séance incorrects'); continue; }
      if (player.dayLessons >= MAX_LESSONS_PER_DAY) { reject('trop de séances dans la journée'); continue; }
      player.dayLessons += 1;
      lessonsCounted += 1;
      xp = expected;
    } else if (e.kind === 'series') {
      const lvl = SERIES_LEVELS.find((l) => l.level === Number(e.level));
      const questions = Math.round(Number(e.questions));
      const mistakes = Math.round(Number(e.mistakes));
      const seconds = Number(e.seconds);
      if (!lvl || !Number.isFinite(questions) || questions < 1 || questions > lvl.questions) { reject('niveau ou questions invalides'); continue; }
      if (!Number.isFinite(mistakes) || mistakes < 0 || mistakes > questions) { reject('fautes invalides'); continue; }
      const maxSeconds = Math.ceil((lvl.seconds * questions) / lvl.questions) + 5;
      if (!Number.isFinite(seconds) || seconds < questions * MIN_SECONDS_PER_QUESTION || seconds > maxSeconds) { reject('durée impossible'); continue; }
      const startedAt = at - seconds * 1000;
      if (startedAt < Number(player.lastSeriesEndAt || 0) - 1000) { reject('séries qui se chevauchent'); continue; }
      const penalty = lvl.xp / SERIES_LEVELS[0].xp;
      const expected = Math.max(0, lvl.xp - mistakes * penalty);
      if (Number(e.amount) !== expected) { reject('XP de série incorrects'); continue; }
      if (player.daySeries >= MAX_SERIES_PER_DAY) { reject('trop de séries dans la journée'); continue; }
      if (!unlimited) {
        const energy = energyNow(player, startedAt);
        if (energy < ENERGY_COST) { reject('plus d’énergie'); continue; }
        const base = Number.isFinite(player.energy) && player.energyAt && energy < ENERGY_MAX
          ? player.energyAt + Math.floor((startedAt - player.energyAt) / ENERGY_UNIT_MS) * ENERGY_UNIT_MS
          : startedAt;
        player.energy = energy - ENERGY_COST;
        player.energyAt = base;
      }
      player.daySeries += 1;
      player.lastSeriesEndAt = at;
      xp = expected;
    } else {
      reject('type inconnu');
      continue;
    }
    seen.add(id);
    accepted.push(id);
    player.weekXp += xp;
    player.totalXp += xp;
    xpGained += xp;
  }
  player.seenIds = [...seen].slice(-300);
  if (xpGained > 0) player.xpReachedAt = nowMs;
  return { player, accepted, rejected, lessonsCounted, xpGained };
}

/**
 * Réputation envoyée par l'appli : une baisse est toujours acceptée ; une hausse est limitée à
 * +1 % par séance acceptée depuis le dernier envoi (on ne peut pas « remonter » sans travailler).
 */
export function guardReputation(previous, claimed, lessonsAccepted) {
  const prev = Number.isFinite(previous) ? previous : 100;
  const c = Math.max(0, Math.min(100, Math.round(Number(claimed))));
  if (!Number.isFinite(c)) return prev;
  if (c <= prev) return c;
  return Math.min(c, prev + Math.max(0, lessonsAccepted));
}

// ---------------------------------------------------------------------------
// Classement et fin de semaine
// ---------------------------------------------------------------------------
/** Classe les joueurs (participants seulement) : plus d'XP d'abord, à égalité celui arrivé le premier. */
export function rankPlayers(players) {
  return [...players].sort((a, b) => (b.weekXp || 0) - (a.weekXp || 0) || (a.xpReachedAt || 0) - (b.xpReachedAt || 0) || String(a.uid).localeCompare(String(b.uid)));
}

/**
 * Montées et descentes d'un groupe à la fin de la semaine.
 * @returns Map uid -> { rank, toDivision, movement: 'up' | 'down' | 'stay' }
 */
export function computeMovements(players, division) {
  const ranked = rankPlayers(players);
  const size = ranked.length;
  const out = new Map();
  ranked.forEach((p, i) => {
    const rank = i + 1;
    const top = rank <= PROMOTE_COUNT;
    let to = division;
    if (division === DIVISIONS.length) {
      // Perle : les 10 premiers gardent leur place, tous les autres redescendent
      if (!top) to = division - 1;
    } else if (top && (p.weekXp || 0) > 0) {
      to = division + 1;
    } else if (!top && rank > size - DEMOTE_COUNT && division > 1) {
      to = division - 1;
    }
    out.set(p.uid, { rank, toDivision: to, movement: to > division ? 'up' : to < division ? 'down' : 'stay' });
  });
  return out;
}

/**
 * Nom affiché dans le classement : le nom de l'élève tel qu'il l'a écrit dans son profil (choix du
 * fondateur, 2026-11-14), s'il est correct ; sinon (insulte, numéro, lien…) « Élève KONAN ». Jamais l'e-mail.
 */
export function publicName(name) {
  const check = checkStudentName(name);
  return check.ok ? check.name : 'Élève KONAN';
}
