/**
 * KONAN AI - Préparation des alertes de révision (file `push_queue`).
 *
 * L'application calcule À L'AVANCE, pour les 7 prochains jours, les 4 alertes possibles de chaque séance :
 *   - avant      : 5 minutes avant le début ;
 *   - retard     : 15 minutes après le début, si la séance n'a pas été ouverte ;
 *   - manquee    : à l'heure de fin, si la séance n'a pas été faite (avec l'heure du rattrapage) ;
 *   - rattrapage : 5 minutes avant le créneau de rattrapage prévu le soir.
 * Elle dépose une « enveloppe » par alerte dans Firestore (sans texte). Le serveur (/api/cron-notifications),
 * appelé chaque minute, relit la fiche de l'élève à l'heure dite, fait écrire le message par KONAN et l'envoie.
 * Ainsi l'élève est prévenu même s'il n'ouvre pas l'application de la semaine.
 *
 * Économie Firestore : seules les enveloppes nouvelles ou modifiées sont écrites (mémoire locale de la
 * dernière synchronisation), et une enveloppe devenue inutile est supprimée.
 */

import { doc, deleteDoc, writeBatch } from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { ClassSlot, StudyPreferences, StudySession, Subject } from '../types';
import { evaluateDailyCatchup, getTodayDateString } from './sessionRescheduler';
import { ALERT_KINDS, type KonanAlertKind, type KonanSituation } from '../../api/_konanVoice.js';

export interface PlannedAlert {
  /** Identifiant du document push_queue */
  id: string;
  /** Clé de l'alerte, identique côté serveur : `${sessionId}_${date}_${kind}` */
  key: string;
  kind: KonanAlertKind;
  situation: KonanSituation;
  sendAt: number;
  sessionId: string;
  date: string;
  subjectId: string;
  subjectName: string;
  startTime: string;
  endTime: string;
  durationMinutes: number;
  rattrapageA: string | null;
  isRattrapage: boolean;
}

export interface AlertPlanInput {
  studySessions: StudySession[];
  subjects: Subject[];
  classSlots: ClassSlot[];
  preferences: StudyPreferences;
  cycleCompletedDate?: string;
}

const MINUTE = 60 * 1000;
const PLAN_CACHE_PREFIX = 'konan_push_plan_v2_';
const STARTED_PREFIX = 'konan_started_sessions_';

function atLocal(ymd: string, hhmm: string): number {
  const [y, m, d] = ymd.split('-').map(Number);
  const [h, mi] = String(hhmm || '00:00').split(':').map(Number);
  return new Date(y, (m || 1) - 1, d || 1, h || 0, mi || 0, 0, 0).getTime();
}

function addDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

// ---------------------------------------------------------------------------
// Séances ouvertes aujourd'hui (plus de relance « retard » ni « manquée » pour elles)
// ---------------------------------------------------------------------------
export function getStartedSessionIds(ymd: string): Set<string> {
  try {
    const raw = localStorage.getItem(`${STARTED_PREFIX}${ymd}`);
    return new Set(raw ? (JSON.parse(raw) as string[]) : []);
  } catch {
    return new Set();
  }
}

export function markSessionStarted(sessionId: string, now: Date = new Date()): void {
  const ymd = getTodayDateString(now);
  try {
    const ids = getStartedSessionIds(ymd);
    ids.add(sessionId);
    localStorage.setItem(`${STARTED_PREFIX}${ymd}`, JSON.stringify([...ids]));
    // Nettoyage des jours précédents
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const k = localStorage.key(i);
      if (k && k.startsWith(STARTED_PREFIX) && k !== `${STARTED_PREFIX}${ymd}`) localStorage.removeItem(k);
    }
  } catch {
    // stockage indisponible : le serveur relira de toute façon la séance avant d'envoyer
  }
}

// ---------------------------------------------------------------------------
// Calcul des alertes
// ---------------------------------------------------------------------------
/**
 * Heure du rattrapage que l'application choisirait si la séance était manquée :
 * on rejoue le moteur de rattrapage du soir à « début + 16 minutes » ce jour-là.
 */
function predictCatchupTime(input: AlertPlanInput, session: StudySession, ymd: string, originalStart: string, originalEnd: string): string | null {
  try {
    const simulatedNow = new Date(atLocal(ymd, originalStart) + 16 * MINUTE);
    const sessions = input.studySessions.map((s) => (s.id === session.id
      ? { ...s, startTime: originalStart, endTime: originalEnd, isRescheduledToday: false, originalStartTime: undefined, originalEndTime: undefined, rescheduledDate: undefined }
      : s));
    const result = evaluateDailyCatchup(sessions, input.classSlots, input.preferences, simulatedNow, input.subjects);
    const moved = result.updatedSessions.find((s) => s.id === session.id);
    return moved?.isRescheduledToday ? moved.startTime : null;
  } catch {
    return null;
  }
}

/**
 * Toutes les alertes prévues de `now` à `now + days`, dont l'heure d'envoi est >= minSendAt.
 */
export function planAlerts(
  input: AlertPlanInput,
  uid: string,
  now: Date = new Date(),
  options: { days?: number; minSendAt?: number } = {},
): PlannedAlert[] {
  const days = options.days ?? 7;
  const minSendAt = options.minSendAt ?? now.getTime();
  const subjects = input.subjects || [];
  const out: PlannedAlert[] = [];

  for (let d = 0; d < days; d++) {
    const day = addDays(now, d);
    const ymd = getTodayDateString(day);
    const dow = (day.getDay() + 6) % 7;
    if (input.cycleCompletedDate === ymd) continue; // programme du jour terminé : on laisse l'élève tranquille
    const started = d === 0 ? getStartedSessionIds(ymd) : new Set<string>();

    for (const s of input.studySessions || []) {
      if (!s || s.dayOfWeek !== dow || s.completed || s.isExpired) continue;
      const subjectName = subjects.find((x) => x.id === s.subjectId)?.name || s.title || 'Révision';
      const rescheduledThatDay = Boolean(s.isRescheduledToday && s.rescheduledDate === ymd);
      const originalStart = s.isRescheduledToday ? (s.originalStartTime || s.startTime) : s.startTime;
      const originalEnd = s.isRescheduledToday ? (s.originalEndTime || s.endTime) : s.endTime;
      const startAt = atLocal(ymd, originalStart);
      const endAt = atLocal(ymd, originalEnd);
      const wasStarted = started.has(s.id);

      const base = {
        sessionId: s.id, date: ymd, subjectId: s.subjectId, subjectName,
        startTime: originalStart, endTime: originalEnd, durationMinutes: s.durationMinutes || 25,
      };
      const push = (kind: KonanAlertKind, sendAt: number, extra: Partial<PlannedAlert> = {}) => {
        if (sendAt < minSendAt) return;
        const key = `${s.id}_${ymd}_${kind}`;
        out.push({
          id: `${uid}_${s.id}_${ymd.replace(/-/g, '')}_${kind}`,
          key, kind, situation: ALERT_KINDS[kind].situation, sendAt,
          rattrapageA: null, isRattrapage: false, ...base, ...extra,
        });
      };

      if (!rescheduledThatDay) push('avant', startAt - 5 * MINUTE);
      if (wasStarted) continue;

      const needsCatchup = endAt >= minSendAt || startAt + 15 * MINUTE >= minSendAt || rescheduledThatDay;
      const catchup = !needsCatchup ? null
        : rescheduledThatDay ? s.startTime : predictCatchupTime(input, s, ymd, originalStart, originalEnd);

      push('retard', startAt + 15 * MINUTE, { rattrapageA: catchup });
      // « Séance manquée » à l'heure de fin, sauf si le rattrapage commence avant cette heure-là
      // (le message de retard a alors déjà donné l'heure du rattrapage)
      const catchupAt = catchup ? atLocal(ymd, catchup) : null;
      if (endAt - startAt > 20 * MINUTE && (catchupAt === null || catchupAt > endAt)) {
        push('manquee', endAt, { rattrapageA: catchup });
      }
      if (catchup) push('rattrapage', atLocal(ymd, catchup) - 5 * MINUTE, { rattrapageA: catchup, isRattrapage: true });
    }
  }
  return out.sort((a, b) => a.sendAt - b.sendAt);
}

// ---------------------------------------------------------------------------
// Synchronisation avec Firestore
// ---------------------------------------------------------------------------
type PlanCache = { docs: Record<string, { h: string; sendAt: number }> };

function readCache(uid: string): PlanCache {
  try {
    const raw = localStorage.getItem(`${PLAN_CACHE_PREFIX}${uid}`);
    const parsed = raw ? JSON.parse(raw) : null;
    return parsed && typeof parsed.docs === 'object' ? parsed : { docs: {} };
  } catch {
    return { docs: {} };
  }
}

function writeCache(uid: string, cache: PlanCache): void {
  try {
    localStorage.setItem(`${PLAN_CACHE_PREFIX}${uid}`, JSON.stringify(cache));
  } catch {
    // stockage plein : la prochaine synchronisation réécrira simplement les enveloppes
  }
}

function hashOf(text: string): string {
  let h = 5381;
  for (let i = 0; i < text.length; i++) h = ((h * 33) ^ text.charCodeAt(i)) >>> 0;
  return h.toString(36);
}

function envelopeOf(uid: string, a: PlannedAlert) {
  return {
    userId: uid,
    v: 2,
    kind: a.kind,
    situation: a.situation,
    sendAt: a.sendAt,
    sessionId: a.sessionId,
    date: a.date,
    subjectId: a.subjectId,
    subjectName: a.subjectName,
    startTime: a.startTime,
    durationMinutes: a.durationMinutes,
    rattrapageA: a.rattrapageA,
    isRattrapage: a.isRattrapage,
  };
}

let syncRunning = false;
let syncAgain: (() => Promise<void>) | null = null;

/**
 * Dépose dans push_queue les alertes des 7 prochains jours (seulement ce qui a changé).
 * À appeler pour tout élève connecté (Gratuit, Pro, Plus) dont l'appareil est abonné aux notifications.
 */
export async function syncPushPlan(uid: string, input: AlertPlanInput, now: Date = new Date()): Promise<{ written: number; deleted: number }> {
  if (!db || !uid) return { written: 0, deleted: 0 };
  if (syncRunning) {
    // Une synchronisation tourne déjà : on rejouera la plus récente juste après
    syncAgain = async () => { await syncPushPlan(uid, input, new Date()); };
    return { written: 0, deleted: 0 };
  }
  syncRunning = true;
  try {
    const alerts = planAlerts(input, uid, now, { days: 7, minSendAt: now.getTime() + 30 * 1000 });
    const cache = readCache(uid);
    const nextDocs: PlanCache['docs'] = {};
    const toWrite: Array<{ id: string; data: ReturnType<typeof envelopeOf> }> = [];

    for (const a of alerts) {
      const data = envelopeOf(uid, a);
      const h = hashOf(JSON.stringify(data));
      nextDocs[a.id] = { h, sendAt: a.sendAt };
      if (cache.docs[a.id]?.h !== h) toWrite.push({ id: a.id, data });
    }

    // Enveloppes encore à venir qui ne correspondent plus au planning : on les retire
    const nowMs = now.getTime();
    const toDelete = Object.entries(cache.docs)
      .filter(([id, info]) => !nextDocs[id] && info.sendAt > nowMs)
      .map(([id]) => id);

    for (let i = 0; i < toWrite.length; i += 400) {
      const batch = writeBatch(db);
      for (const w of toWrite.slice(i, i + 400)) batch.set(doc(db, 'push_queue', w.id), w.data);
      await batch.commit();
    }
    // Suppressions une par une : une enveloppe déjà envoyée (donc disparue) ne doit pas bloquer les autres
    await Promise.allSettled(toDelete.map((id) => deleteDoc(doc(db!, 'push_queue', id))));

    writeCache(uid, { docs: nextDocs });
    return { written: toWrite.length, deleted: toDelete.length };
  } catch (err: any) {
    console.warn('[KONAN alertes] Synchronisation impossible :', err?.message || err);
    return { written: 0, deleted: 0 };
  } finally {
    syncRunning = false;
    const again = syncAgain;
    syncAgain = null;
    if (again) again().catch(() => {});
  }
}

/**
 * L'élève vient d'ouvrir (ou de valider) sa séance : on annule tout de suite ses relances du jour.
 */
export async function cancelSessionAlerts(uid: string, sessionId: string, now: Date = new Date()): Promise<void> {
  markSessionStarted(sessionId, now);
  if (!db || !uid || !sessionId) return;
  const ymd = getTodayDateString(now).replace(/-/g, '');
  const kinds: KonanAlertKind[] = ['retard', 'manquee', 'rattrapage'];
  const ids = kinds.map((k) => `${uid}_${sessionId}_${ymd}_${k}`);
  await Promise.allSettled(ids.map((id) => deleteDoc(doc(db!, 'push_queue', id))));
  const cache = readCache(uid);
  ids.forEach((id) => { delete cache.docs[id]; });
  writeCache(uid, cache);
}
