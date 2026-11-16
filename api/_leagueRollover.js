/**
 * LIGUE — fin de semaine (appelée à chaque passage du cron des notifications, chaque minute).
 * Quand une nouvelle semaine commence, chaque groupe de la semaine finie est classé : montées et
 * descentes de division, résultat mémorisé pour l'élève. Les élèves à 80 % de réputation ou moins sont
 * classés comme les autres, mais leur division reste gelée (ni montée ni descente). Reprise sûre : un groupe déjà traité est marqué « closed ».
 */
import { computeMovements, isFrozen, isParticipant, leagueCol, weekIdOf } from './_leagueRules.js';

const MAX_GROUPS_PER_RUN = 150;

export async function rolloverLeague(db, nowMs = Date.now()) {
  const current = weekIdOf(nowMs);
  const metaRef = leagueCol(db, 'league_meta').doc('state');

  // 1. Une nouvelle semaine ? (une seule fois, même si deux passages du cron se croisent)
  const closingWeeks = await db.runTransaction(async (tx) => {
    const snap = await tx.get(metaRef);
    const meta = snap.exists ? snap.data() : null;
    if (!meta) {
      tx.set(metaRef, { lastRolledWeek: current, closing: [], startedAt: new Date(nowMs).toISOString() });
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
  if (!closingWeeks.length) return null;

  // 2. Classement des groupes des semaines terminées
  let groupsDone = 0;
  const stats = { groups: 0, up: 0, down: 0, stay: 0, frozen: 0 };
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
        .map((s) => ({ uid: s.id, weekXp: Number(s.get('weekXp')) || 0, xpReachedAt: Number(s.get('xpReachedAt')) || 0, frozen: isFrozen(s.data()) }));
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
  return stats;
}
