/**
 * KONAN AI - Ligue (classement hebdomadaire par divisions).
 * Endpoint : POST /api/league   (en-tête Authorization: Bearer <jeton Firebase de l'élève>)
 *
 * Corps JSON : { events: [ { id, kind: 'lesson'|'series', amount, at, durationMinutes | level, questions, mistakes, seconds } ],
 *                reputation, displayName, classLabel, gradeLevel, avatar }
 * Réponse    : { success, accepted: [id], rejected: [{ id, reason }], board }
 *
 * Le serveur recompte et borne chaque gain d'XP (api/_leagueRules.js) : c'est LUI qui fait foi pour le
 * classement. Les collections league_* ne sont lisibles et modifiables que par le serveur.
 * Classement : photo, nom de l'élève (vérifié, changeable une fois tous les 3 mois), classe, XP ;
 * nom jaune pour Pro, multicolore pour Plus. Réservé aux classes qui ont des cours (pas LMD ni BTS).
 */
import { getDb, send, readBody, isAllowedOrigin, str } from './_examCommon.js';
import { loadLocalEnvIfPresent } from './_env.js';
import { verifyFirebaseIdToken } from './_firebaseToken.js';
import { nextNameChangeAt } from './_nameRules.js';
import { serverPlanTier } from './_subscriptionStore.js';
import {
  DIVISIONS, GROUP_SIZE, PROMOTE_COUNT, DEMOTE_COUNT, applyXpEvents, clampDivision, cleanAvatar, gradeInLeague,
  settleServerReputation, isFrozen, isParticipant, leagueCol, publicName, rankPlayers, weekEndMs, weekIdOf,
} from './_leagueRules.js';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const isContention = (e) => e?.code === 10 || /ABORTED|contention|too much contention/i.test(String(e?.message || ''));

/**
 * Place l'élève dans un groupe ouvert de sa division (ou en crée un) pour la semaine en cours.
 * Beaucoup d'élèves peuvent se connecter au même moment (lundi matin) : on choisit au hasard parmi
 * les groupes ouverts pour ne pas tous écrire dans le même, et on réessaie après une courte attente
 * si Firestore refuse une écriture simultanée.
 */
async function assignGroup(db, uid, weekId, division) {
  const attempt = () => db.runTransaction(async (tx) => {
    // Déjà placé par une autre requête au même moment : on garde ce groupe
    const me = await tx.get(leagueCol(db, 'league_players').doc(uid));
    if (me.exists && me.get('groupId') && me.get('weekId') === weekId) return me.get('groupId');
    const open = await tx.get(
      leagueCol(db, 'league_groups').where('weekId', '==', weekId).where('division', '==', division).where('open', '==', true).limit(5),
    );
    // Groupes ouverts avec de la place, le plus rempli en premier tiré plus souvent (on finit de remplir)
    const candidates = open.docs.filter((d) => (d.get('members') || []).length < GROUP_SIZE);
    let ref;
    let members;
    if (!candidates.length) {
      ref = leagueCol(db, 'league_groups').doc(`${weekId}_d${division}_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`);
      members = [uid];
      tx.set(ref, { weekId, division, members, size: 1, open: true, createdAt: new Date().toISOString() });
    } else {
      const pick = candidates[Math.floor(Math.random() * candidates.length)];
      ref = pick.ref;
      members = [...new Set([...(pick.get('members') || []), uid])];
      tx.update(ref, { members, size: members.length, open: members.length < GROUP_SIZE });
    }
    tx.update(leagueCol(db, 'league_players').doc(uid), { groupId: ref.id });
    return ref.id;
  }, { maxAttempts: 8 });

  for (let i = 0; ; i++) {
    try {
      return await attempt();
    } catch (e) {
      if (!isContention(e) || i >= 5) throw e;
      await sleep(80 + Math.random() * 400 * (i + 1));
    }
  }
}

/** Classement du groupe de l'élève (photo, nom, classe, XP de la semaine). */
async function buildBoard(db, player, nowMs) {
  const division = clampDivision(player.division);
  const base = {
    // Le classement se voit toujours ; sous 80 % de réputation, seule la division est gelée
    eligible: isParticipant(player),
    reason: player.hasCourses === false ? 'no_courses' : null,
    frozen: isParticipant(player) && isFrozen(player),
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
  const group = await leagueCol(db, 'league_groups').doc(player.groupId).get();
  const members = group.exists ? (group.get('members') || []) : [];
  const snaps = members.length ? await db.getAll(...members.map((uid) => leagueCol(db, 'league_players').doc(uid))) : [];
  const weekId = base.weekId;
  const players = snaps
    .filter((s) => s.exists && s.get('weekId') === weekId && isParticipant(s.data()))
    .map((s) => ({
      uid: s.id, weekXp: Number(s.get('weekXp')) || 0, xpReachedAt: Number(s.get('xpReachedAt')) || 0,
      name: s.get('displayName'), classLabel: s.get('classLabel'), avatar: s.get('avatar') || '',
      tier: ['pro', 'plus'].includes(s.get('planTier')) ? s.get('planTier') : 'free',
    }));
  base.rows = rankPlayers(players).map((p, i) => ({
    rank: i + 1, name: p.name || 'Élève KONAN', classLabel: p.classLabel || '', avatar: p.avatar, xp: p.weekXp, me: p.uid === player.uid, tier: p.tier,
  }));
  return base;
}

/**
 * Cœur de la ligue pour un élève : XP vérifiés, réputation bornée, nom (3 mois entre deux changements),
 * photo, classe, puis place dans un groupe et classement. `user` = fiche users/{uid} (formule, classe).
 */
export async function syncPlayer(db, uid, body, user, nowMs = Date.now(), opts = {}) {
  const weekId = weekIdOf(nowMs);
  const playerRef = leagueCol(db, 'league_players').doc(uid);
  // Formule réelle donnée par le serveur (abonnement payé) ; sinon ancienne formule enregistrée par l'application
  const rawTier = String(opts.planTier || user?.planTier || user?.userAccount?.planTier || 'free').toLowerCase();
  const planTier = rawTier === 'pro' || rawTier === 'plus' ? rawTier : 'free';
  const grade = str(body.gradeLevel, 40) || user?.preferences?.gradeLevel || user?.userAccount?.gradeLevel || '';
  const wantedName = publicName(str(body.displayName, 60) || user?.studentName || '');

  const result = await db.runTransaction(async (tx) => {
    const snap = await tx.get(playerRef);
    const prev = snap.exists ? snap.data() : { uid, division: 1, reputation: 100 };
    if (prev.weekId && prev.weekId !== weekId) prev.groupId = null; // nouvelle semaine : nouveau groupe
    const applied = applyXpEvents(prev, body.events, { nowMs, planTier });
    // Réputation : chaque séance ou série vérifiée donne un crédit de hausse, gardé pour plus tard
    // (l'appli compte parfois le +1 % d'une séance le lendemain). Première fois après la correction : reprise telle quelle.
    const rep = settleServerReputation(prev.reputation, body.reputation, prev.repCredits, applied.repCredits, snap.exists && !prev.repV2);
    const reputation = rep.reputation;
    // Nom : changement accepté seulement 3 mois après le précédent
    let displayName = prev.displayName || wantedName;
    let nameChangedAt = prev.nameChangedAt || null;
    if (prev.displayName && wantedName !== prev.displayName && !nextNameChangeAt(prev.nameChangedAt, nowMs)) {
      displayName = wantedName;
      nameChangedAt = new Date(nowMs).toISOString();
    }
    const avatar = body.avatar === undefined ? (prev.avatar || '') : cleanAvatar(body.avatar);
    const next = {
      ...applied.player,
      uid,
      division: clampDivision(prev.division),
      reputation,
      repCredits: rep.credits,
      // Reprise unique faite seulement quand l'appli a envoyé sa réputation
      repV2: Boolean(prev.repV2 || body.reputation !== undefined || !snap.exists),
      displayName,
      nameChangedAt,
      avatar,
      classLabel: str(body.classLabel, 20),
      gradeLevel: grade,
      hasCourses: gradeInLeague(grade), // « admis dans la ligue » (LMD et BTS compris)
      planTier,
      updatedAt: new Date(nowMs).toISOString(),
    };
    tx.set(playerRef, next);
    return { next, accepted: applied.accepted, rejected: applied.rejected };
  });

  // Place dans un groupe : toute classe admise dans la ligue (quelle que soit la réputation)
  let player = result.next;
  if (isParticipant(player) && !player.groupId) {
    try {
      const groupId = await assignGroup(db, uid, weekId, clampDivision(player.division));
      player = { ...player, groupId };
    } catch (e) {
      // Trop d'élèves au même instant : pas d'erreur pour l'élève, il sera placé à la prochaine synchronisation
      if (!isContention(e)) throw e;
    }
  }
  return { accepted: result.accepted, rejected: result.rejected, board: await buildBoard(db, player, nowMs) };
}

/** Fonctions internes exposées pour les tests (base simulée ou collections de test). */
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
    const userSnap = await db.collection('users').doc(uid).get();
    const userData = userSnap.exists ? userSnap.data() : {};
    // Énergie illimitée et nom en couleur : seulement pour un abonnement réellement payé (vérifié par le serveur)
    const planTier = await serverPlanTier(db, uid, userData);
    const out = await syncPlayer(db, uid, body || {}, userData, Date.now(), { planTier });
    return send(res, 200, { success: true, ...out });
  } catch (err) {
    console.error('[league]', err?.message || err);
    return send(res, 500, { success: false, error: String(err?.message || 'SERVER_ERROR').slice(0, 120) });
  }
}
