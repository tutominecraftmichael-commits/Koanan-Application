/**
 * LIGUE — fin de semaine (appelée à chaque passage du cron des notifications, chaque minute).
 * Quand une nouvelle semaine commence :
 *  1. chaque groupe de la semaine finie est classé : montées et descentes de division, résultat mémorisé
 *     pour l'élève. Reprise sûre : un groupe déjà traité est marqué « closed » ;
 *  2. (2026-11-23, choix du fondateur) les élèves qui ont joué la semaine finie (au moins 1 XP : donc tous ceux
 *     qui montent) sont placés TOUT DE SUITE dans des groupes de leur nouvelle division, sans attendre qu'ils se
 *     connectent. Avant, un élève n'apparaissait dans sa nouvelle division qu'après avoir ouvert l'appli.
 *     Ceux qui n'ont rien fait la semaine finie sont placés quand ils reviennent (pas de groupes remplis d'absents).
 */
import { clampDivision, computeMovements, GROUP_SIZE, isParticipant, leagueCol, previousWeekId, weekIdOf } from './_leagueRules.js';

const MAX_GROUPS_PER_RUN = 150;
const BATCH_OPS = 400; // Firestore : 500 écritures au plus par lot
const PLACING_STALE_MS = 5 * 60 * 1000;

export async function rolloverLeague(db, nowMs = Date.now()) {
  const current = weekIdOf(nowMs);
  const metaRef = leagueCol(db, 'league_meta').doc('state');

  // 1. Une nouvelle semaine ? (une seule fois, même si deux passages du cron se croisent)
  const closingWeeks = await db.runTransaction(async (tx) => {
    const snap = await tx.get(metaRef);
    const meta = snap.exists ? snap.data() : null;
    if (!meta) {
      tx.set(metaRef, { lastRolledWeek: current, closing: [], placedWeek: current, startedAt: new Date(nowMs).toISOString() });
      return [];
    }
    const closing = Array.isArray(meta.closing) ? meta.closing : [];
    if (meta.lastRolledWeek !== current) {
      const next = [...new Set([...closing, meta.lastRolledWeek])];
      tx.update(metaRef, { lastRolledWeek: current, closing: next });
      return next;
    }
    return closing;
  });

  // 2. Classement des groupes des semaines terminées
  let groupsDone = 0;
  const stats = { groups: 0, up: 0, down: 0, stay: 0 };
  for (const week of closingWeeks) {
    const groups = (await leagueCol(db, 'league_groups').where('weekId', '==', week).get()).docs
      .filter((g) => !g.get('closed'));
    for (const g of groups) {
      if (groupsDone >= MAX_GROUPS_PER_RUN) return { ...stats, unfinished: true };
      const division = Number(g.get('division')) || 1;
      const members = (g.get('members') || []).slice(0, 60);
      const snaps = members.length ? await db.getAll(...members.map((uid) => leagueCol(db, 'league_players').doc(uid))) : [];
      const participants = snaps
        .filter((s) => s.exists && s.get('weekId') === week && isParticipant(s.data()))
        .map((s) => ({ uid: s.id, weekXp: Number(s.get('weekXp')) || 0, xpReachedAt: Number(s.get('xpReachedAt')) || 0 }));
      const moves = computeMovements(participants, division);
      const batch = db.batch();
      for (const p of participants) {
        const m = moves.get(p.uid);
        stats[m.movement] += 1;
        batch.update(leagueCol(db, 'league_players').doc(p.uid), {
          division: m.toDivision,
          groupId: null,
          lastResult: { weekId: week, rank: m.rank, size: participants.length, movement: m.movement, fromDivision: division, toDivision: m.toDivision, weekXp: p.weekXp },
        });
      }
      batch.update(g.ref, { closed: true, closedAt: new Date(nowMs).toISOString() });
      await batch.commit();
      groupsDone += 1;
      stats.groups += 1;
    }
    // Semaine entièrement traitée : on la retire de la liste
    await metaRef.update({ closing: (await metaRef.get()).get('closing').filter((w) => w !== week) });
  }

  // 3. Les élèves actifs de la semaine finie entrent tout de suite dans leur (nouvelle) division
  const placement = await placeActivePlayersOnce(db, metaRef, current, nowMs);
  if (!closingWeeks.length && !placement) return null;
  return placement ? { ...stats, ...placement } : stats;
}

/**
 * Place une seule fois par semaine (verrou dans league_meta/state, repris s'il a plus de 5 min) les élèves actifs
 * de la semaine précédente. Renvoie { placed, newGroups } ou null si rien à faire.
 */
async function placeActivePlayersOnce(db, metaRef, current, nowMs) {
  const claimed = await db.runTransaction(async (tx) => {
    const snap = await tx.get(metaRef);
    const meta = snap.exists ? snap.data() : null;
    if (!meta || meta.lastRolledWeek !== current) return false;
    if ((meta.closing || []).length) return false; // classement pas encore fini : on attend
    if (meta.placedWeek === current) return false;
    const placingAt = Date.parse(meta.placingAt || '');
    if (meta.placingWeek === current && Number.isFinite(placingAt) && nowMs - placingAt < PLACING_STALE_MS) return false;
    tx.update(metaRef, { placingWeek: current, placingAt: new Date(nowMs).toISOString() });
    return true;
  });
  if (!claimed) return null;
  const result = await placeActivePlayers(db, previousWeekId(nowMs), current, nowMs);
  await metaRef.update({ placedWeek: current, placingWeek: null, placingAt: null });
  return result;
}

/** Mélange (Fisher-Yates) : les groupes mélangent classes et pays. */
function shuffle(list, rand = Math.random) {
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

/**
 * Élèves classés la semaine `closedWeek` avec au moins 1 XP → groupes de `currentWeek` dans leur division
 * (déjà mise à jour par le classement). Groupes équilibrés (31 élèves → 16 + 15), ouverts tant qu'ils ne sont
 * pas pleins : les élèves qui se connectent ensuite les complètent. Un élève déjà placé cette semaine (il s'est
 * connecté avant) n'est pas touché.
 */
export async function placeActivePlayers(db, closedWeek, currentWeek, nowMs = Date.now(), rand = Math.random) {
  const snap = await leagueCol(db, 'league_players').where('lastResult.weekId', '==', closedWeek).get();
  const byDivision = new Map();
  for (const s of snap.docs) {
    const p = s.data();
    if (!isParticipant(p)) continue;
    if (!(Number(p.lastResult?.weekXp) > 0)) continue;
    if (p.weekId === currentWeek && p.groupId) continue;
    const division = clampDivision(p.division);
    if (!byDivision.has(division)) byDivision.set(division, []);
    byDivision.get(division).push(s.id);
  }

  let placed = 0;
  let newGroups = 0;
  let batch = db.batch();
  let ops = 0;
  const flush = async (force = false) => {
    if (ops && (force || ops >= BATCH_OPS)) {
      await batch.commit();
      batch = db.batch();
      ops = 0;
    }
  };
  for (const [division, uids] of [...byDivision.entries()].sort(([a], [b]) => a - b)) {
    shuffle(uids, rand);
    const count = Math.ceil(uids.length / GROUP_SIZE);
    for (let g = 0; g < count; g++) {
      const members = uids.filter((_uid, i) => i % count === g);
      const ref = leagueCol(db, 'league_groups').doc(`${currentWeek}_d${division}_auto${g}_${Math.floor(rand() * 1e9).toString(36)}`);
      batch.set(ref, {
        weekId: currentWeek, division, members, size: members.length, open: members.length < GROUP_SIZE,
        createdAt: new Date(nowMs).toISOString(), autoPlaced: true,
      });
      ops += 1;
      for (const uid of members) {
        // Nouvelle semaine : 0 XP, visible tout de suite dans le classement de sa division
        batch.update(leagueCol(db, 'league_players').doc(uid), { weekId: currentWeek, weekXp: 0, xpReachedAt: 0, groupId: ref.id });
        ops += 1;
        placed += 1;
        await flush();
      }
      newGroups += 1;
    }
  }
  await flush(true);
  return { placed, newGroups };
}
