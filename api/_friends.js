/**
 * AMIS (2026-11-17), comme sur Duolingo :
 * - on ajoute un ami avec son ID KONAN (« KN-123456 ») : il reçoit une demande (cloche + notification sur
 *   son téléphone, même appli fermée), il accepte ou refuse, et celui qui a demandé reçoit la réponse ;
 * - fiche publique d'un élève (depuis la ligue ou la liste d'amis) : photo, nom, ID, XP au total,
 *   nombre d'amis, abonnement ; rien d'autre ;
 * - confidentialité : recevoir ou non des demandes, profil visible par tous ou par mes amis seulement.
 * Données : friendships/{uid} (écrites par le serveur seulement ; les règles Firestore refusent tout accès direct).
 */
import { leagueCol, publicName, cleanAvatar, DIVISIONS, clampDivision } from './_leagueRules.js';
import { sendPushToUser } from './_pushSend.js';

export const MAX_FRIENDS = 200;
export const MAX_PENDING = 50;
export const MAX_REQUESTS_PER_DAY = 20;
const MAX_NOTICES = 30;

const dayKeyOf = (ms) => new Date(ms).toISOString().slice(0, 10);

/** « kn 123456 », « 123456 », « KN-123456 » → « KN-123456 » ; sinon ''. */
export function normalizeKonanId(raw) {
  const m = String(raw || '').trim().toUpperCase().replace(/\s+/g, '').match(/^(?:KN-?)?(\d{6})$/);
  return m ? `KN-${m[1]}` : '';
}

/** ID KONAN déterministe à partir de l'identifiant du compte (secours si le champ n'était pas encore enregistré). */
export function konanIdFromUid(uid) {
  const s = String(uid || '');
  if (!s) return '';
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) - h) + s.charCodeAt(i);
    h |= 0;
  }
  return `KN-${Math.abs(h) % 900000 + 100000}`;
}

const emptyDoc = (uid) => ({ uid, friends: [], incoming: [], outgoing: [], notices: [], allowRequests: true, profileVisibility: 'all' });
const fsCol = (db) => leagueCol(db, 'friendships');

/** Fiche d'amitié d'un élève (vide s'il n'en a pas encore). */
async function readDoc(tx, db, uid) {
  const snap = await (tx ? tx.get(fsCol(db).doc(uid)) : fsCol(db).doc(uid).get());
  return snap.exists ? { ...emptyDoc(uid), ...snap.data() } : emptyDoc(uid);
}

/** Élève dont c'est l'ID KONAN (compte ou fiche de ligue), ou null. */
export async function uidOfKonanId(db, konanId) {
  const id = normalizeKonanId(konanId);
  if (!id) return null;
  const users = db.collection('users');
  let snap = await users.where('konanId', '==', id).limit(2).get();
  if (snap.empty) snap = await users.where('userAccount.konanId', '==', id).limit(2).get();
  if (snap.empty) snap = await leagueCol(db, 'league_players').where('konanId', '==', id).limit(2).get();
  return snap.size === 1 ? snap.docs[0].id : null;
}

/** Infos publiques de plusieurs élèves : nom, photo, ID, formule, XP au total, division, nombre d'amis. */
export async function publicCards(db, uids) {
  const ids = [...new Set(uids.filter(Boolean))].slice(0, 300);
  const out = new Map();
  if (!ids.length) return out;
  const [league, users, friendDocs] = await Promise.all([
    db.getAll(...ids.map((u) => leagueCol(db, 'league_players').doc(u))),
    db.getAll(...ids.map((u) => db.collection('users').doc(u)), { fieldMask: ['konanId', 'studentName', 'planTier', 'userAccount.konanId', 'userAccount.name', 'userAccount.avatar', 'userAccount.customAvatar', 'userAccount.planTier'] }),
    db.getAll(...ids.map((u) => fsCol(db).doc(u))),
  ]);
  ids.forEach((uid, i) => {
    const lp = league[i].exists ? league[i].data() : {};
    const us = users[i].exists ? users[i].data() : {};
    const fr = friendDocs[i].exists ? friendDocs[i].data() : {};
    const tierRaw = String(lp.planTier || us.planTier || us.userAccount?.planTier || 'free').toLowerCase();
    out.set(uid, {
      uid,
      konanId: normalizeKonanId(us.konanId || us.userAccount?.konanId || lp.konanId) || konanIdFromUid(uid),
      name: lp.displayName || publicName(us.studentName || us.userAccount?.name || ''),
      avatar: cleanAvatar(lp.avatar || us.userAccount?.customAvatar || us.userAccount?.avatar || ''),
      tier: tierRaw === 'pro' || tierRaw === 'plus' ? tierRaw : 'free',
      totalXp: Number(lp.totalXp) || 0,
      division: lp.division ? DIVISIONS[clampDivision(lp.division) - 1].name : null,
      friendsCount: Array.isArray(fr.friends) ? fr.friends.length : 0,
      profileVisibility: fr.profileVisibility === 'friends' ? 'friends' : 'all',
      allowRequests: fr.allowRequests !== false,
    });
  });
  return out;
}

/** Ce qu'un élève voit d'un autre (fiche publique), selon le lien entre eux et les réglages de l'autre. */
function cardFor(card, relation) {
  const base = { konanId: card.konanId, name: card.name, avatar: card.avatar, relation };
  // Profil réservé aux amis : un inconnu ne voit que le nom, la photo et l'ID
  if (card.profileVisibility === 'friends' && relation !== 'friend' && relation !== 'self') return { ...base, limited: true, canRequest: card.allowRequests && relation === 'none' };
  return { ...base, totalXp: card.totalXp, friendsCount: card.friendsCount, tier: card.tier, division: card.division, canRequest: card.allowRequests && relation === 'none' };
}

const relationOf = (me, otherUid) => (me.uid === otherUid ? 'self'
  : me.friends.includes(otherUid) ? 'friend'
    : me.outgoing.some((o) => o.to === otherUid) ? 'outgoing'
      : me.incoming.some((o) => o.from === otherUid) ? 'incoming' : 'none');

/** Tout l'état « amis » de l'élève : amis, demandes reçues et envoyées, messages, réglages. */
export async function friendsState(db, uid) {
  const me = await readDoc(null, db, uid);
  const cards = await publicCards(db, [uid, ...me.friends, ...me.incoming.map((x) => x.from), ...me.outgoing.map((x) => x.to), ...me.notices.map((n) => n.from)]);
  const card = (u, relation) => (cards.get(u) ? cardFor(cards.get(u), relation) : null);
  return {
    me: { konanId: cards.get(uid)?.konanId || '', friendsCount: me.friends.length, totalXp: cards.get(uid)?.totalXp || 0 },
    friends: me.friends.map((u) => card(u, 'friend')).filter(Boolean),
    incoming: me.incoming.map((x) => ({ ...card(x.from, 'incoming'), at: x.at })).filter((x) => x.konanId),
    outgoing: me.outgoing.map((x) => ({ ...card(x.to, 'outgoing'), at: x.at })).filter((x) => x.konanId),
    notices: me.notices.map((n) => ({ id: n.id, kind: n.kind, at: n.at, from: card(n.from, relationOf(me, n.from)) })).filter((n) => n.from),
    privacy: { allowRequests: me.allowRequests !== false, profileVisibility: me.profileVisibility === 'friends' ? 'friends' : 'all' },
  };
}

/** Fiche publique d'un élève (par son ID KONAN). */
export async function publicProfile(db, uid, konanId) {
  const target = await uidOfKonanId(db, konanId);
  if (!target) return { error: 'NOT_FOUND' };
  const [me, cards] = await Promise.all([readDoc(null, db, uid), publicCards(db, [target])]);
  return { profile: cardFor(cards.get(target), relationOf(me, target)) };
}

const pushNotice = (doc, notice) => ({ ...doc, notices: [notice, ...(doc.notices || [])].slice(0, MAX_NOTICES) });

/** Demande d'ami par ID KONAN (si l'autre m'avait déjà demandé : nous devenons amis tout de suite). */
export async function sendFriendRequest(db, uid, konanId, nowMs = Date.now()) {
  const target = await uidOfKonanId(db, konanId);
  if (!target) return { error: 'NOT_FOUND' };
  if (target === uid) return { error: 'SELF' };
  const result = await db.runTransaction(async (tx) => {
    const [me, other] = await Promise.all([readDoc(tx, db, uid), readDoc(tx, db, target)]);
    if (me.friends.includes(target)) return { error: 'ALREADY_FRIENDS' };
    if (me.outgoing.some((o) => o.to === target)) return { error: 'ALREADY_SENT' };
    // L'autre m'avait déjà envoyé une demande : on devient amis directement
    if (me.incoming.some((o) => o.from === target)) {
      if (me.friends.length >= MAX_FRIENDS || other.friends.length >= MAX_FRIENDS) return { error: 'TOO_MANY_FRIENDS' };
      tx.set(fsCol(db).doc(uid), { ...me, friends: [...me.friends, target], incoming: me.incoming.filter((o) => o.from !== target) });
      tx.set(fsCol(db).doc(target), pushNotice({ ...other, friends: [...other.friends, uid], outgoing: other.outgoing.filter((o) => o.to !== uid) }, { id: `accepted_${uid}_${nowMs}`, kind: 'accepted', from: uid, at: nowMs }));
      return { status: 'friends', notify: 'accepted' };
    }
    if (other.allowRequests === false) return { error: 'REQUESTS_CLOSED' };
    const today = dayKeyOf(nowMs);
    const sentToday = me.dayKey === today ? Number(me.dayRequests) || 0 : 0;
    if (sentToday >= MAX_REQUESTS_PER_DAY) return { error: 'DAILY_LIMIT' };
    if (me.outgoing.length >= MAX_PENDING || other.incoming.length >= MAX_PENDING) return { error: 'TOO_MANY_PENDING' };
    tx.set(fsCol(db).doc(uid), { ...me, outgoing: [...me.outgoing, { to: target, at: nowMs }], dayKey: today, dayRequests: sentToday + 1 });
    tx.set(fsCol(db).doc(target), pushNotice({ ...other, incoming: [...other.incoming, { from: uid, at: nowMs }] }, { id: `request_${uid}_${nowMs}`, kind: 'request', from: uid, at: nowMs }));
    return { status: 'sent', notify: 'request' };
  });
  if (result.error) return result;
  const me = (await publicCards(db, [uid])).get(uid);
  const who = me?.name || 'Un élève';
  await sendPushToUser(db, target, result.notify === 'request'
    ? { title: 'Nouvelle demande d’ami', body: `${who} veut devenir ton ami sur KONAN. Ouvre la cloche pour répondre.`, tag: 'konan-friend-request' }
    : { title: 'Nouvel ami sur KONAN', body: `${who} et toi êtes maintenant amis !`, tag: 'konan-friend-accepted' });
  return { status: result.status };
}

/** Réponse à une demande reçue : accepter (amis) ou refuser ; celui qui a demandé reçoit la réponse. */
export async function respondFriendRequest(db, uid, konanId, accept, nowMs = Date.now()) {
  const from = await uidOfKonanId(db, konanId);
  if (!from) return { error: 'NOT_FOUND' };
  const result = await db.runTransaction(async (tx) => {
    const [me, other] = await Promise.all([readDoc(tx, db, uid), readDoc(tx, db, from)]);
    if (!me.incoming.some((o) => o.from === from)) return { error: 'NO_REQUEST' };
    if (accept && (me.friends.length >= MAX_FRIENDS || other.friends.length >= MAX_FRIENDS)) return { error: 'TOO_MANY_FRIENDS' };
    const meNext = {
      ...me,
      incoming: me.incoming.filter((o) => o.from !== from),
      friends: accept ? [...new Set([...me.friends, from])] : me.friends,
      // La demande traitée disparaît de ma cloche
      notices: me.notices.filter((n) => !(n.kind === 'request' && n.from === from)),
    };
    const otherNext = pushNotice({
      ...other,
      outgoing: other.outgoing.filter((o) => o.to !== uid),
      friends: accept ? [...new Set([...other.friends, uid])] : other.friends,
    }, { id: `${accept ? 'accepted' : 'declined'}_${uid}_${nowMs}`, kind: accept ? 'accepted' : 'declined', from: uid, at: nowMs });
    tx.set(fsCol(db).doc(uid), meNext);
    tx.set(fsCol(db).doc(from), otherNext);
    return { status: accept ? 'friends' : 'declined' };
  });
  if (result.error) return result;
  const me = (await publicCards(db, [uid])).get(uid);
  const who = me?.name || 'Un élève';
  await sendPushToUser(db, from, accept
    ? { title: 'Demande d’ami acceptée', body: `${who} a accepté ta demande : vous êtes maintenant amis !`, tag: 'konan-friend-accepted' }
    : { title: 'Demande d’ami refusée', body: `${who} n’a pas accepté ta demande d’ami.`, tag: 'konan-friend-declined' });
  return result;
}

/** Retirer un ami (des deux côtés, sans message), ou annuler une demande envoyée. */
export async function removeFriend(db, uid, konanId) {
  const other = await uidOfKonanId(db, konanId);
  if (!other) return { error: 'NOT_FOUND' };
  await db.runTransaction(async (tx) => {
    const [me, them] = await Promise.all([readDoc(tx, db, uid), readDoc(tx, db, other)]);
    tx.set(fsCol(db).doc(uid), { ...me, friends: me.friends.filter((u) => u !== other), outgoing: me.outgoing.filter((o) => o.to !== other) });
    tx.set(fsCol(db).doc(other), {
      ...them,
      friends: them.friends.filter((u) => u !== uid),
      incoming: them.incoming.filter((o) => o.from !== uid),
      notices: them.notices.filter((n) => !(n.kind === 'request' && n.from === uid)),
    });
  });
  return { status: 'removed' };
}

/** Réglages de confidentialité : recevoir des demandes, profil visible par tous ou par mes amis seulement. */
export async function savePrivacy(db, uid, { allowRequests, profileVisibility }) {
  const ref = fsCol(db).doc(uid);
  await db.runTransaction(async (tx) => {
    const me = await readDoc(tx, db, uid);
    tx.set(ref, {
      ...me,
      allowRequests: allowRequests === undefined ? me.allowRequests !== false : allowRequests === true,
      profileVisibility: profileVisibility === 'friends' ? 'friends' : profileVisibility === 'all' ? 'all' : (me.profileVisibility || 'all'),
    });
  });
  return { status: 'saved' };
}
