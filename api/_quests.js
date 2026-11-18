/**
 * OR (GOLD) & QUÊTES D'XP EN DUO ENTRE AMIS (hebdomadaires, synchronisées avec la Ligue).
 *
 * - Monnaie virtuelle Or (gold) sur users/{uid} : 100 Or attribués automatiquement à tout nouveau
 *   compte ou compte existant n'ayant pas encore le champ `gold`.
 * - Quêtes hebdomadaires en duo dans friend_quests/{questId} :
 *   - Double consentement obligatoire (« C'est parti » des deux amis) : tant que `status === 'pending'`,
 *     aucun XP n'est comptabilisé. Si l'ami refuse, la proposition passe en `declined` sans pénalité.
 *   - Cycle synchronisé avec la Ligue (lundi 00:00 UTC → dimanche 23:59 UTC).
 *   - Gel de Ligue : si un ami a une réputation <= 80 %, ses XP sont gelés (0) et n'avancent pas la quête.
 *   - Objectif atteint avant `expiresAt` → `status: 'completed'`, chaque ami peut réclamer +50 Or.
 *   - Temps expiré → `status: 'expired'`, 0 Or, nouvelle quête possible la semaine suivante.
 *   - Relance sociale (« Encourager / Relancer ») : notification cloche + push téléphone.
 */
import { FieldValue } from 'firebase-admin/firestore';
import { isFrozen, leagueCol, weekEndMs, weekIdOf } from './_leagueRules.js';
import { publicCards, uidOfKonanId } from './_friends.js';
import { sendPushToUser } from './_pushSend.js';

export const INITIAL_GOLD = 100;
export const QUEST_TARGET_XP = 1000;
export const QUEST_REWARD_GOLD = 50;
export const NUDGE_COOLDOWN_MS = 2 * 60 * 60 * 1000; // 2 heures entre deux relances serveur
const MAX_NOTICES = 20;
const NOTICE_TTL_MS = 14 * 24 * 60 * 60 * 1000;

const questsCol = (db) => leagueCol(db, 'friend_quests');
const inboxCol = (db) => leagueCol(db, 'quest_inbox');
const fsCol = (db) => leagueCol(db, 'friendships');

/**
 * Retourne le solde d'Or d'un élève.
 * Migration automatique : si `users/{uid}.gold` n'existe pas encore, attribue 100 Or dans Firestore.
 */
export async function ensureUserGold(db, uid) {
  if (!uid) return INITIAL_GOLD;
  const ref = db.collection('users').doc(uid);
  const snap = await ref.get();
  const data = snap.exists ? snap.data() : null;
  if (data && typeof data.gold === 'number' && Number.isFinite(data.gold)) {
    return Math.max(0, Math.floor(data.gold));
  }
  await ref.set({ gold: INITIAL_GOLD }, { merge: true });
  return INITIAL_GOLD;
}

/** Ajoute une notification de quête dans la cloche de l'élève (`quest_inbox/{uid}`). */
async function pushQuestNotice(db, targetUid, notice) {
  if (!targetUid) return;
  const ref = inboxCol(db).doc(targetUid);
  await db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    const prev = snap.exists && Array.isArray(snap.data()?.notices) ? snap.data().notices : [];
    const filtered = prev.filter((n) => n && n.id !== notice.id);
    tx.set(ref, { uid: targetUid, notices: [notice, ...filtered].slice(0, MAX_NOTICES) }, { merge: true });
  });
}

/** Supprime une notification d'invitation de quête déjà traitée (acceptée, refusée ou annulée). */
async function removeInviteNotice(db, targetUid, questId) {
  if (!targetUid || !questId) return;
  const ref = inboxCol(db).doc(targetUid);
  await db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    if (!snap.exists) return;
    const prev = Array.isArray(snap.data()?.notices) ? snap.data().notices : [];
    const next = prev.filter((n) => !(n?.kind === 'quest_invite' && n?.questId === questId));
    if (next.length !== prev.length) tx.set(ref, { uid: targetUid, notices: next }, { merge: true });
  }).catch(() => {});
}

/** Formate un document `friend_quests` pour le client (sans exposer les UID Firebase internes). */
function serializeQuest(doc, viewerUid, partnerFrozen = false) {
  const isA = doc.userA?.uid === viewerUid;
  const me = isA ? doc.userA : doc.userB;
  const partner = isA ? doc.userB : doc.userA;
  const claimedBy = Array.isArray(doc.rewardClaimedBy) ? doc.rewardClaimedBy : [];
  const lastNudgeAt = Number(doc.lastNudgeBy?.[viewerUid]) || 0;
  return {
    id: doc.id,
    weekId: doc.weekId,
    status: doc.status,
    targetXp: Number(doc.targetXp) || QUEST_TARGET_XP,
    rewardGold: Number(doc.rewardGold) || QUEST_REWARD_GOLD,
    expiresAt: Number(doc.expiresAt) || 0,
    createdAt: Number(doc.createdAt) || 0,
    completedAt: doc.completedAt ? Number(doc.completedAt) : null,
    myRole: isA ? 'A' : 'B',
    me: {
      konanId: me?.konanId || '',
      name: me?.name || 'Toi',
      avatar: me?.avatar || '',
      accepted: Boolean(me?.accepted),
      xpContributed: Number(me?.xpContributed) || 0,
    },
    partner: {
      konanId: partner?.konanId || '',
      name: partner?.name || 'Ton ami',
      avatar: partner?.avatar || '',
      accepted: Boolean(partner?.accepted),
      xpContributed: Number(partner?.xpContributed) || 0,
      frozen: Boolean(partnerFrozen),
    },
    claimedByMe: claimedBy.includes(viewerUid),
    partnerClaimed: Boolean(partner?.uid && claimedBy.includes(partner.uid)),
    lastNudgeAt,
  };
}

/**
 * Expire automatiquement toute quête `pending` ou `active` dont `expiresAt <= nowMs`.
 * Retourne la liste à jour des documents de l'utilisateur.
 */
async function loadAndExpireUserQuests(db, uid, nowMs) {
  const snap = await questsCol(db).where('participants', 'array-contains', uid).get();
  const docs = [];
  const expireBatch = [];
  for (const d of snap.docs) {
    const data = { id: d.id, ...d.data() };
    if ((data.status === 'pending' || data.status === 'active') && Number(data.expiresAt) <= nowMs) {
      data.status = 'expired';
      data.updatedAt = nowMs;
      expireBatch.push(d.ref.update({ status: 'expired', updatedAt: nowMs }).catch(() => {}));
    }
    docs.push(data);
  }
  if (expireBatch.length) await Promise.all(expireBatch);
  docs.sort((a, b) => (Number(b.updatedAt || b.createdAt) || 0) - (Number(a.updatedAt || a.createdAt) || 0));
  return docs;
}

/** Vérifie si un utilisateur a déjà une quête active ou terminée pour la semaine donnée. */
async function hasActiveOrCompletedQuestForWeek(db, uid, weekId, nowMs) {
  const docs = await loadAndExpireUserQuests(db, uid, nowMs);
  return docs.some((q) => q.weekId === weekId && (q.status === 'active' || q.status === 'completed'));
}

/**
 * État complet des quêtes hebdomadaires et du solde d'Or pour l'utilisateur connecté.
 */
export async function getQuestState(db, uid, nowMs = Date.now()) {
  const weekId = weekIdOf(nowMs);
  const weekEndsAt = weekEndMs(nowMs);
  const [gold, docs, lpSnap, inboxSnap] = await Promise.all([
    ensureUserGold(db, uid),
    loadAndExpireUserQuests(db, uid, nowMs),
    leagueCol(db, 'league_players').doc(uid).get(),
    inboxCol(db).doc(uid).get(),
  ]);

  const lp = lpSnap.exists ? lpSnap.data() : null;
  const frozen = lp ? isFrozen(lp) : false;
  const reputation = lp && Number.isFinite(lp.reputation) ? Number(lp.reputation) : 100;

  // Quête en cours (active ou terminée cette semaine) ou quête terminée la semaine dernière avec récompense non encore réclamée
  const currentWeekActive = docs.find((q) => q.weekId === weekId && (q.status === 'active' || q.status === 'completed')) || null;
  const unclaimedPast = !currentWeekActive
    ? docs.find((q) => q.status === 'completed' && !(Array.isArray(q.rewardClaimedBy) && q.rewardClaimedBy.includes(uid))) || null
    : null;
  const activeRaw = currentWeekActive || unclaimedPast;

  const outgoingRaw = !currentWeekActive
    ? docs.find((q) => q.weekId === weekId && q.status === 'pending' && q.userA?.uid === uid) || null
    : null;
  const incomingRaw = !currentWeekActive
    ? docs.filter((q) => q.weekId === weekId && q.status === 'pending' && q.userB?.uid === uid)
    : [];
  const expiredRaw = !activeRaw && !outgoingRaw && incomingRaw.length === 0
    ? docs.find((q) => q.status === 'expired' && nowMs - (Number(q.expiresAt) || 0) <= 7 * 24 * 60 * 60 * 1000) || null
    : null;

  // Vérifier si le binôme de la quête active a sa ligue gelée
  let partnerFrozen = false;
  if (activeRaw) {
    const partnerUid = activeRaw.userA?.uid === uid ? activeRaw.userB?.uid : activeRaw.userA?.uid;
    if (partnerUid) {
      const pSnap = await leagueCol(db, 'league_players').doc(partnerUid).get();
      if (pSnap.exists) partnerFrozen = isFrozen(pSnap.data());
    }
  }

  // Notifications de quête récentes (avec état frais pour les invitations en attente)
  const pendingIncomingIds = new Set(incomingRaw.map((q) => q.id));
  const rawNotices = inboxSnap.exists && Array.isArray(inboxSnap.data()?.notices) ? inboxSnap.data().notices : [];
  const questNotices = rawNotices
    .filter((n) => n && n.id && nowMs - (Number(n.at) || 0) <= NOTICE_TTL_MS)
    .map((n) => ({
      id: n.id,
      kind: n.kind,
      questId: n.questId || '',
      at: Number(n.at) || nowMs,
      fromName: n.fromName || 'Un ami',
      fromKonanId: n.fromKonanId || '',
      fromAvatar: n.fromAvatar || '',
      message: n.message || '',
      targetXp: Number(n.targetXp) || QUEST_TARGET_XP,
      rewardGold: Number(n.rewardGold) || QUEST_REWARD_GOLD,
      pending: n.kind === 'quest_invite' && pendingIncomingIds.has(n.questId),
    }));

  return {
    gold,
    weekId,
    weekEndsAt,
    isFrozen: frozen,
    reputation,
    activeQuest: activeRaw ? serializeQuest(activeRaw, uid, partnerFrozen) : null,
    outgoingQuest: outgoingRaw ? serializeQuest(outgoingRaw, uid, false) : null,
    incomingQuests: incomingRaw.map((q) => serializeQuest(q, uid, false)),
    expiredQuest: expiredRaw ? serializeQuest(expiredRaw, uid, false) : null,
    questNotices,
  };
}

/**
 * Propose une quête d'XP hebdomadaire à un ami (« C'est parti » de l'utilisateur A).
 * Si l'ami B avait déjà envoyé une proposition cette semaine, les deux ont cliqué sur « C'est parti » :
 * la quête passe immédiatement en `active` !
 */
export async function proposeFriendQuest(db, uid, friendKonanId, nowMs = Date.now()) {
  const targetUid = await uidOfKonanId(db, friendKonanId);
  if (!targetUid) return { error: 'NOT_FOUND' };
  if (targetUid === uid) return { error: 'SELF' };

  const fsSnap = await fsCol(db).doc(uid).get();
  const friends = fsSnap.exists && Array.isArray(fsSnap.data()?.friends) ? fsSnap.data().friends : [];
  if (!friends.includes(targetUid)) return { error: 'NOT_FRIENDS' };

  const weekId = weekIdOf(nowMs);
  const expiresAt = weekEndMs(nowMs);

  const [myQuests, targetQuests] = await Promise.all([
    loadAndExpireUserQuests(db, uid, nowMs),
    loadAndExpireUserQuests(db, targetUid, nowMs),
  ]);

  if (myQuests.some((q) => q.weekId === weekId && (q.status === 'active' || q.status === 'completed'))) {
    return { error: 'ALREADY_IN_QUEST' };
  }
  if (targetQuests.some((q) => q.weekId === weekId && (q.status === 'active' || q.status === 'completed'))) {
    return { error: 'PARTNER_BUSY' };
  }

  // L'ami avait déjà proposé cette semaine → double consentement immédiat !
  const reversePending = myQuests.find(
    (q) => q.weekId === weekId && q.status === 'pending' && q.userA?.uid === targetUid && q.userB?.uid === uid,
  );
  if (reversePending) {
    return respondFriendQuest(db, uid, reversePending.id, true, nowMs);
  }

  // Déjà une proposition envoyée cette semaine ?
  const existingOutgoing = myQuests.find(
    (q) => q.weekId === weekId && q.status === 'pending' && q.userA?.uid === uid,
  );
  if (existingOutgoing) {
    if (existingOutgoing.userB?.uid === targetUid) return { error: 'ALREADY_PROPOSED' };
    return { error: 'OUTGOING_EXISTS' };
  }

  const cards = await publicCards(db, [uid, targetUid]);
  const meCard = cards.get(uid);
  const targetCard = cards.get(targetUid);
  const questId = `${weekId}_${uid.slice(0, 12)}_${targetUid.slice(0, 12)}_${nowMs.toString(36)}`;

  const doc = {
    id: questId,
    weekId,
    participants: [uid, targetUid],
    userA: {
      uid,
      konanId: meCard?.konanId || '',
      name: meCard?.name || 'Élève KONAN',
      avatar: meCard?.avatar || '',
      accepted: true,
      xpContributed: 0,
    },
    userB: {
      uid: targetUid,
      konanId: targetCard?.konanId || '',
      name: targetCard?.name || 'Élève KONAN',
      avatar: targetCard?.avatar || '',
      accepted: false,
      xpContributed: 0,
    },
    targetXp: QUEST_TARGET_XP,
    rewardGold: QUEST_REWARD_GOLD,
    status: 'pending',
    rewardClaimedBy: [],
    createdAt: nowMs,
    updatedAt: nowMs,
    expiresAt,
    completedAt: null,
    lastNudgeBy: {},
  };

  await questsCol(db).doc(questId).set(doc);

  const who = doc.userA.name;
  await pushQuestNotice(db, targetUid, {
    id: `qinv_${questId}`,
    kind: 'quest_invite',
    questId,
    at: nowMs,
    fromName: who,
    fromKonanId: doc.userA.konanId,
    fromAvatar: doc.userA.avatar,
    targetXp: QUEST_TARGET_XP,
    rewardGold: QUEST_REWARD_GOLD,
    message: `${who} te propose une quête en duo : récoltez ${QUEST_TARGET_XP.toLocaleString('fr-FR')} XP ensemble cette semaine pour gagner +${QUEST_REWARD_GOLD} Or chacun !`,
  });

  await sendPushToUser(db, targetUid, {
    title: 'Quête en duo proposée !',
    body: `${who} t’invite à récolter ${QUEST_TARGET_XP} XP ensemble (+${QUEST_REWARD_GOLD} Or chacun). Clique sur « C’est parti » dans KONAN !`,
    tag: `konan-quest-invite-${questId}`,
  });

  return { status: 'pending', quest: serializeQuest(doc, uid, false) };
}

/**
 * Réponse de l'utilisateur B à une proposition de quête :
 * - `accept === true` (« C'est parti ») → passe la quête en `active` (double consentement atteint).
 * - `accept === false` (« Refuser ») → passe la quête en `declined` sans pénalité.
 */
export async function respondFriendQuest(db, uid, questId, accept, nowMs = Date.now()) {
  if (!questId) return { error: 'NOT_FOUND' };
  const ref = questsCol(db).doc(questId);
  const snap = await ref.get();
  if (!snap.exists) return { error: 'NOT_FOUND' };
  const quest = { id: snap.id, ...snap.data() };

  if (quest.userB?.uid !== uid) return { error: 'FORBIDDEN' };
  if (quest.status !== 'pending') return { error: 'QUEST_NOT_PENDING' };
  if (Number(quest.expiresAt) <= nowMs) {
    await ref.update({ status: 'expired', updatedAt: nowMs }).catch(() => {});
    return { error: 'QUEST_EXPIRED' };
  }

  const userAUid = quest.userA?.uid;
  const partnerName = quest.userB?.name || 'Ton ami';

  if (!accept) {
    await ref.update({ status: 'declined', updatedAt: nowMs });
    await removeInviteNotice(db, uid, questId);
    if (userAUid) {
      await pushQuestNotice(db, userAUid, {
        id: `qdec_${questId}_${nowMs}`,
        kind: 'quest_declined',
        questId,
        at: nowMs,
        fromName: partnerName,
        fromKonanId: quest.userB?.konanId || '',
        fromAvatar: quest.userB?.avatar || '',
        message: `${partnerName} n’est pas disponible pour la quête cette semaine. Tu peux proposer à un autre ami !`,
      });
      await sendPushToUser(db, userAUid, {
        title: 'Quête en duo déclinée',
        body: `${partnerName} n’est pas disponible pour la quête cette semaine.`,
        tag: `konan-quest-declined-${questId}`,
      });
    }
    return { status: 'declined' };
  }

  // Vérifier qu'aucun des deux n'a déjà une autre quête active ou terminée cette semaine
  const [meBusy, partnerBusy] = await Promise.all([
    hasActiveOrCompletedQuestForWeek(db, uid, quest.weekId, nowMs),
    userAUid ? hasActiveOrCompletedQuestForWeek(db, userAUid, quest.weekId, nowMs) : Promise.resolve(false),
  ]);
  if (meBusy) return { error: 'ALREADY_IN_QUEST' };
  if (partnerBusy) return { error: 'PARTNER_BUSY' };

  const updated = await db.runTransaction(async (tx) => {
    const fresh = await tx.get(ref);
    if (!fresh.exists) return { error: 'NOT_FOUND' };
    const data = { id: fresh.id, ...fresh.data() };
    if (data.status !== 'pending') return { error: 'QUEST_NOT_PENDING' };
    const next = {
      ...data,
      status: 'active',
      acceptedAt: nowMs,
      updatedAt: nowMs,
      userB: { ...data.userB, accepted: true },
    };
    tx.set(ref, next);
    return { quest: next };
  });
  if (updated.error) return updated;

  await removeInviteNotice(db, uid, questId);

  // Annuler les autres invitations en attente des deux joueurs pour cette semaine (1 seul binôme actif par semaine)
  const [myOtherSnap, partnerOtherSnap] = await Promise.all([
    questsCol(db).where('participants', 'array-contains', uid).get(),
    userAUid ? questsCol(db).where('participants', 'array-contains', userAUid).get() : Promise.resolve({ docs: [] }),
  ]);
  const toCancel = new Map();
  for (const d of [...myOtherSnap.docs, ...partnerOtherSnap.docs]) {
    if (d.id === questId) continue;
    const q = d.data();
    if (q.weekId === quest.weekId && q.status === 'pending') toCancel.set(d.id, { ref: d.ref, data: q });
  }
  await Promise.all(
    [...toCancel.values()].map(async ({ ref: r, data: q }) => {
      await r.update({ status: 'declined', updatedAt: nowMs }).catch(() => {});
      if (q.userB?.uid) await removeInviteNotice(db, q.userB.uid, r.id);
    }),
  );

  if (userAUid) {
    await pushQuestNotice(db, userAUid, {
      id: `qacc_${questId}`,
      kind: 'quest_accepted',
      questId,
      at: nowMs,
      fromName: partnerName,
      fromKonanId: quest.userB?.konanId || '',
      fromAvatar: quest.userB?.avatar || '',
      targetXp: Number(quest.targetXp) || QUEST_TARGET_XP,
      rewardGold: Number(quest.rewardGold) || QUEST_REWARD_GOLD,
      message: `${partnerName} a cliqué sur « C’est parti » ! Votre quête de ${QUEST_TARGET_XP.toLocaleString('fr-FR')} XP est lancée.`,
    });
    await sendPushToUser(db, userAUid, {
      title: 'C’est parti ! Quête en duo lancée',
      body: `${partnerName} a accepté ta quête ! Récoltez ${QUEST_TARGET_XP} XP ensemble pour gagner +${QUEST_REWARD_GOLD} Or chacun.`,
      tag: `konan-quest-active-${questId}`,
    });
  }

  return { status: 'active', quest: serializeQuest(updated.quest, uid, false) };
}

/** Annule une proposition envoyée par l'utilisateur A tant qu'elle est en attente (`pending`). */
export async function cancelFriendQuest(db, uid, questId, nowMs = Date.now()) {
  if (!questId) return { error: 'NOT_FOUND' };
  const ref = questsCol(db).doc(questId);
  const snap = await ref.get();
  if (!snap.exists) return { error: 'NOT_FOUND' };
  const quest = snap.data();
  if (quest.userA?.uid !== uid) return { error: 'FORBIDDEN' };
  if (quest.status !== 'pending') return { error: 'QUEST_NOT_PENDING' };
  await ref.update({ status: 'declined', updatedAt: nowMs });
  if (quest.userB?.uid) await removeInviteNotice(db, quest.userB.uid, questId);
  return { status: 'cancelled' };
}

/**
 * Incrémente automatiquement `xpContributed` dans la quête `active` de la semaine en cours
 * lorsqu'un élève gagne des XP valides (NON gelés).
 * Utilise `FieldValue.increment(xpEarned)` dans Firestore et bascule en `completed` dès que l'objectif est atteint.
 */
export async function recordQuestXp(db, uid, xpEarned, nowMs = Date.now()) {
  const xp = Math.floor(Number(xpEarned) || 0);
  if (!uid || xp <= 0) return null;
  const weekId = weekIdOf(nowMs);
  const snap = await questsCol(db).where('participants', 'array-contains', uid).get();
  const activeDoc = snap.docs.find((d) => {
    const q = d.data();
    return q.weekId === weekId && q.status === 'active' && Number(q.expiresAt) > nowMs;
  });
  if (!activeDoc) return null;

  const ref = activeDoc.ref;
  const txResult = await db.runTransaction(async (tx) => {
    const fresh = await tx.get(ref);
    if (!fresh.exists) return null;
    const q = { id: fresh.id, ...fresh.data() };
    if (q.status !== 'active' || Number(q.expiresAt) <= nowMs) return null;

    const isA = q.userA?.uid === uid;
    const isB = q.userB?.uid === uid;
    if (!isA && !isB) return null;

    const fieldPath = isA ? 'userA.xpContributed' : 'userB.xpContributed';
    const currentTotal = (Number(q.userA?.xpContributed) || 0) + (Number(q.userB?.xpContributed) || 0);
    const nextTotal = currentTotal + xp;
    const targetXp = Number(q.targetXp) || QUEST_TARGET_XP;
    const justCompleted = nextTotal >= targetXp;

    const patch = {
      [fieldPath]: FieldValue.increment(xp),
      updatedAt: nowMs,
    };
    if (justCompleted) {
      patch.status = 'completed';
      patch.completedAt = nowMs;
    }
    tx.update(ref, patch);
    return { quest: q, justCompleted, nextTotal, targetXp };
  });

  if (txResult?.justCompleted) {
    const q = txResult.quest;
    const reward = Number(q.rewardGold) || QUEST_REWARD_GOLD;
    const targets = [
      { uid: q.userA?.uid, partner: q.userB?.name || 'ton ami', partnerId: q.userB?.konanId || '', partnerAvatar: q.userB?.avatar || '' },
      { uid: q.userB?.uid, partner: q.userA?.name || 'ton ami', partnerId: q.userA?.konanId || '', partnerAvatar: q.userA?.avatar || '' },
    ].filter((t) => Boolean(t.uid));

    await Promise.all(targets.map(async (t) => {
      await pushQuestNotice(db, t.uid, {
        id: `qdone_${q.id}`,
        kind: 'quest_completed',
        questId: q.id,
        at: nowMs,
        fromName: t.partner,
        fromKonanId: t.partnerId,
        fromAvatar: t.partnerAvatar,
        targetXp: txResult.targetXp,
        rewardGold: reward,
        message: `Bravo ! Toi et ${t.partner} avez atteint ${txResult.targetXp.toLocaleString('fr-FR')} XP ! Réclame tes +${reward} Or.`,
      });
      await sendPushToUser(db, t.uid, {
        title: `Quête terminée ! +${reward} Or à réclamer`,
        body: `Objectif de ${txResult.targetXp} XP atteint avec ${t.partner} ! Ouvre KONAN pour récupérer ton Or.`,
        tag: `konan-quest-done-${q.id}`,
      });
    }));
  }

  return txResult;
}

/**
 * Réclame la récompense en Or (+50 Or) d'une quête terminée (`status === 'completed'`).
 * Atomique : impossible de réclamer deux fois.
 */
export async function claimQuestReward(db, uid, questId, nowMs = Date.now()) {
  if (!questId) return { error: 'NOT_FOUND' };
  const questRef = questsCol(db).doc(questId);
  const userRef = db.collection('users').doc(uid);

  const result = await db.runTransaction(async (tx) => {
    const [qSnap, uSnap] = await Promise.all([tx.get(questRef), tx.get(userRef)]);
    if (!qSnap.exists) return { error: 'NOT_FOUND' };
    const q = { id: qSnap.id, ...qSnap.data() };
    if (q.userA?.uid !== uid && q.userB?.uid !== uid) return { error: 'FORBIDDEN' };
    if (q.status !== 'completed') return { error: 'NOT_COMPLETED' };

    const claimed = Array.isArray(q.rewardClaimedBy) ? q.rewardClaimedBy : [];
    if (claimed.includes(uid)) return { error: 'ALREADY_CLAIMED' };

    const reward = Number(q.rewardGold) || QUEST_REWARD_GOLD;
    const hasNumericGold = uSnap.exists && typeof uSnap.data()?.gold === 'number' && Number.isFinite(uSnap.data().gold);
    const currentGold = hasNumericGold ? Math.max(0, Math.floor(uSnap.data().gold)) : INITIAL_GOLD;
    const nextGold = currentGold + reward;

    const nextClaimed = [...claimed, uid];
    tx.update(questRef, { rewardClaimedBy: nextClaimed, updatedAt: nowMs });
    if (hasNumericGold) {
      tx.set(userRef, { gold: FieldValue.increment(reward) }, { merge: true });
    } else {
      tx.set(userRef, { gold: nextGold }, { merge: true });
    }

    return {
      gold: nextGold,
      rewardGold: reward,
      quest: { ...q, rewardClaimedBy: nextClaimed, updatedAt: nowMs },
    };
  });

  if (result.error) return result;
  return {
    gold: result.gold,
    rewardGold: result.rewardGold,
    quest: serializeQuest(result.quest, uid, false),
  };
}

/**
 * Relance sociale (« Encourager / Relancer ») : envoie une notification in-app + push à l'ami.
 */
export async function nudgeQuestPartner(db, uid, questId, nowMs = Date.now()) {
  if (!questId) return { error: 'NOT_FOUND' };
  const ref = questsCol(db).doc(questId);
  const snap = await ref.get();
  if (!snap.exists) return { error: 'NOT_FOUND' };
  const q = { id: snap.id, ...snap.data() };

  const isA = q.userA?.uid === uid;
  const isB = q.userB?.uid === uid;
  if (!isA && !isB) return { error: 'FORBIDDEN' };
  if (q.status !== 'active' && q.status !== 'pending') return { error: 'QUEST_NOT_ACTIVE' };
  if (Number(q.expiresAt) <= nowMs) return { error: 'QUEST_EXPIRED' };

  const lastAt = Number(q.lastNudgeBy?.[uid]) || 0;
  if (nowMs - lastAt < NUDGE_COOLDOWN_MS) {
    return { error: 'NUDGE_COOLDOWN', retryAfterMs: NUDGE_COOLDOWN_MS - (nowMs - lastAt) };
  }

  const me = isA ? q.userA : q.userB;
  const partner = isA ? q.userB : q.userA;
  const partnerUid = partner?.uid;
  if (!partnerUid) return { error: 'NOT_FOUND' };

  const targetXp = Number(q.targetXp) || QUEST_TARGET_XP;
  const reward = Number(q.rewardGold) || QUEST_REWARD_GOLD;
  const totalXp = (Number(q.userA?.xpContributed) || 0) + (Number(q.userB?.xpContributed) || 0);
  const remainingXp = Math.max(0, targetXp - totalXp);
  const senderName = me?.name || 'Ton ami';
  const partnerName = partner?.name || 'ami';

  const message = q.status === 'pending'
    ? `Eh ${partnerName}, clique sur « C’est parti » pour lancer notre quête de ${targetXp.toLocaleString('fr-FR')} XP sur KONAN et gagner +${reward} Or chacun ! ⚡🔥`
    : `Eh ${partnerName}, il nous manque ${remainingXp.toLocaleString('fr-FR')} XP pour gagner notre Or sur KONAN cette semaine ! À toi de jouer ⚡🔥`;

  await ref.update({ [`lastNudgeBy.${uid}`]: nowMs, updatedAt: nowMs });

  await pushQuestNotice(db, partnerUid, {
    id: `qnudge_${questId}_${nowMs}`,
    kind: 'quest_nudge',
    questId,
    at: nowMs,
    fromName: senderName,
    fromKonanId: me?.konanId || '',
    fromAvatar: me?.avatar || '',
    targetXp,
    rewardGold: reward,
    message,
  });

  await sendPushToUser(db, partnerUid, {
    title: `${senderName} t’encourage sur KONAN !`,
    body: message,
    tag: `konan-quest-nudge-${questId}`,
  });

  return { status: 'nudged', message, lastNudgeAt: nowMs };
}
