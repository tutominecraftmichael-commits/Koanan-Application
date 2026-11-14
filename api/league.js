/**
 * KONAN AI - Ligue (classement hebdomadaire par divisions).
 * Endpoint : POST /api/league   (en-tête Authorization: Bearer <jeton Firebase de l'élève>)
 *
 * Corps JSON : { events: [ { id, kind: 'lesson'|'series', amount, at, durationMinutes | level, questions, mistakes, seconds } ],
 *                reputation, displayName, classLabel }
 * Réponse    : { success, accepted: [id], rejected: [{ id, reason }], board }
 *
 * Le serveur recompte et borne chaque gain d'XP (api/_leagueRules.js) : c'est LUI qui fait foi pour le
 * classement. Les collections league_* ne sont lisibles et modifiables que par le serveur.
 * Classement : nom de l'élève (profil, vérifié), classe, XP ; nom jaune pour Pro, multicolore pour Plus.
 */
import { getDb, send, readBody, isAllowedOrigin, str } from './_examCommon.js';
import { loadLocalEnvIfPresent } from './_env.js';
import { verifyFirebaseIdToken } from './_firebaseToken.js';
import {
  DIVISIONS, GROUP_SIZE, PROMOTE_COUNT, DEMOTE_COUNT, applyXpEvents, clampDivision, guardReputation, isEligible,
  publicName, rankPlayers, weekEndMs, weekIdOf,
} from './_leagueRules.js';

/** Place l'élève dans un groupe ouvert de sa division (ou en crée un) pour la semaine en cours. */
async function assignGroup(db, uid, weekId, division) {
  return db.runTransaction(async (tx) => {
    // Déjà placé par une autre requête au même moment : on garde ce groupe
    const me = await tx.get(db.collection('league_players').doc(uid));
    if (me.exists && me.get('groupId') && me.get('weekId') === weekId) return me.get('groupId');
    const open = await tx.get(
      db.collection('league_groups').where('weekId', '==', weekId).where('division', '==', division).where('open', '==', true).limit(1),
    );
    let ref;
    let members;
    if (open.empty) {
      ref = db.collection('league_groups').doc(`${weekId}_d${division}_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`);
      members = [uid];
      tx.set(ref, { weekId, division, members, size: 1, open: true, createdAt: new Date().toISOString() });
    } else {
      ref = open.docs[0].ref;
      members = [...new Set([...(open.docs[0].get('members') || []), uid])];
      tx.update(ref, { members, size: members.length, open: members.length < GROUP_SIZE });
    }
    tx.update(db.collection('league_players').doc(uid), { groupId: ref.id });
    return ref.id;
  });
}

/** Classement du groupe de l'élève (prénom + initiale, classe, XP de la semaine). */
async function buildBoard(db, player, nowMs) {
  const division = clampDivision(player.division);
  const base = {
    eligible: isEligible(player.reputation),
    reputation: player.reputation,
    division,
    divisionName: DIVISIONS[division - 1].name,
    weekId: weekIdOf(nowMs),
    endsAt: weekEndMs(nowMs),
    weekXp: player.weekXp || 0,
    promoteCount: division === DIVISIONS.length ? 0 : PROMOTE_COUNT,
    keepCount: division === DIVISIONS.length ? PROMOTE_COUNT : 0,
    demoteCount: division === 1 ? 0 : division === DIVISIONS.length ? null : DEMOTE_COUNT,
    lastResult: player.lastResult || null,
    rows: [],
  };
  if (!base.eligible || !player.groupId) return base;
  const group = await db.collection('league_groups').doc(player.groupId).get();
  const members = group.exists ? (group.get('members') || []) : [];
  const snaps = members.length ? await db.getAll(...members.map((uid) => db.collection('league_players').doc(uid))) : [];
  const weekId = base.weekId;
  const players = snaps
    .filter((s) => s.exists && s.get('weekId') === weekId && isEligible(s.get('reputation')))
    .map((s) => ({
      uid: s.id, weekXp: Number(s.get('weekXp')) || 0, xpReachedAt: Number(s.get('xpReachedAt')) || 0,
      name: s.get('displayName'), classLabel: s.get('classLabel'), tier: ['pro', 'plus'].includes(s.get('planTier')) ? s.get('planTier') : 'free',
    }));
  base.rows = rankPlayers(players).map((p, i) => ({
    rank: i + 1, name: p.name || 'Élève KONAN', classLabel: p.classLabel || '', xp: p.weekXp, me: p.uid === player.uid, tier: p.tier,
  }));
  return base;
}

/** Fonctions internes exposées pour les tests à blanc (base Firestore simulée). */
export const __test = { assignGroup, buildBoard };

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return send(res, 405, { success: false, error: 'METHOD_NOT_ALLOWED' });
  }
  if (!isAllowedOrigin(req)) return send(res, 403, { success: false, error: 'FORBIDDEN_ORIGIN' });
  loadLocalEnvIfPresent();
  const authHeader = String(req.headers.authorization || '');
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7).trim() : '';
  let uid;
  try {
    uid = (await verifyFirebaseIdToken(token)).sub;
  } catch (e) {
    return send(res, 401, { success: false, error: e?.message === 'TOKEN_EXPIRED' ? 'TOKEN_EXPIRED' : 'UNAUTHORIZED' });
  }
  let body;
  try {
    body = await readBody(req, 200_000);
  } catch (e) {
    return send(res, e?.code === 413 ? 413 : 400, { success: false, error: 'BAD_BODY' });
  }

  try {
    const db = await getDb();
    const nowMs = Date.now();
    const weekId = weekIdOf(nowMs);
    const playerRef = db.collection('league_players').doc(uid);
    const userSnap = await db.collection('users').doc(uid).get();
    const rawTier = String(userSnap.get('planTier') || userSnap.get('userAccount.planTier') || 'free').toLowerCase();
    const planTier = rawTier === 'pro' || rawTier === 'plus' ? rawTier : 'free';
    const name = str(body.displayName, 60) || userSnap.get('studentName') || '';

    // 1. Gains d'XP recomptés par le serveur, réputation bornée
    const result = await db.runTransaction(async (tx) => {
      const snap = await tx.get(playerRef);
      const prev = snap.exists ? snap.data() : { uid, division: 1, reputation: 100 };
      if (prev.weekId && prev.weekId !== weekId) prev.groupId = null; // nouvelle semaine : nouveau groupe
      const applied = applyXpEvents(prev, body.events, { nowMs, planTier });
      const reputation = body.reputation === undefined ? (prev.reputation ?? 100) : guardReputation(prev.reputation, body.reputation, applied.lessonsCounted);
      const next = {
        ...applied.player,
        uid,
        division: clampDivision(prev.division),
        reputation,
        displayName: publicName(name),
        classLabel: str(body.classLabel, 20),
        planTier,
        updatedAt: new Date(nowMs).toISOString(),
      };
      tx.set(playerRef, next);
      return { next, accepted: applied.accepted, rejected: applied.rejected };
    });

    // 2. Place dans un groupe (seulement au-dessus de 80 % de réputation)
    let player = result.next;
    if (isEligible(player.reputation) && !player.groupId) {
      const groupId = await assignGroup(db, uid, weekId, clampDivision(player.division));
      player = { ...player, groupId };
    }

    return send(res, 200, { success: true, accepted: result.accepted, rejected: result.rejected, board: await buildBoard(db, player, nowMs) });
  } catch (err) {
    console.error('[league]', err?.message || err);
    return send(res, 500, { success: false, error: String(err?.message || 'SERVER_ERROR').slice(0, 120) });
  }
}
