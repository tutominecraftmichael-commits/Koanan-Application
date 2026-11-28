/**
 * Système « Batterie & Humeur » de la mascotte KONÉ.
 *
 * Règles métier :
 * - `koneBattery` : entier de 0 à 100 (par défaut 100) sur chaque profil (Gratuit, Pro, Plus).
 * - Envoyer des messages à KONÉ ne fait JAMAIS baisser la batterie.
 * - Baisse UNIQUEMENT lorsqu'une séance prévue dans le planning est ratée :
 *   -30 % par séance ratée, calibré pour qu'au bout de 3 séances ratées consécutives depuis 100 %
 *   KONÉ tombe en zone critique (5 %, plage 1 %–5 %), puis à 0 % (grève totale) à la séance suivante.
 * - Recharge active : +25 % par mini-leçon ou mini-jeu terminé (plafonné à 100 %).
 *   Terminer ses séances hebdomadaires empêche de rater des séances (évite la baisse).
 */
import type { StudySession, Subject } from '../../types';
import { isNonAcademicSubject, parseTimeToMinutes } from '../utils';

export const KONE_BATTERY_MAX = 100;
export const KONE_BATTERY_MIN = 0;
export const KONE_BATTERY_DEFAULT = 100;
export const KONE_MISS_PENALTY = 30;
export const KONE_RECHARGE_PER_ACTIVITY = 25;

const MAX_PENALIZED_KEYS = 400;

export type KoneMoodTier = 'happy' | 'annoyed' | 'angry' | 'strike';

export interface KoneMoodInfo {
  tier: KoneMoodTier;
  battery: number;
  label: string;
  shortStatus: string;
  /** Bulles pré-écrites affichées sur l'écran d'accueil (Gratuit, Pro et Plus) */
  bubbles: string[];
}

export const KONE_STRIKE_MESSAGE =
  "Si tu veux que je te parle, va faire tes leçons pour qu'on recause ensemble parce que là, je suis très fâché contre toi. 😤";

export function clampKoneBattery(value: unknown, fallback = KONE_BATTERY_DEFAULT): number {
  const n = typeof value === 'number' ? value : Number(value);
  if (!Number.isFinite(n)) return fallback;
  return Math.max(KONE_BATTERY_MIN, Math.min(KONE_BATTERY_MAX, Math.round(n)));
}

/**
 * Applique la pénalité d'une séance ratée (-30 %) avec palier critique :
 * 100 % → 70 % (1re ratée) → 40 % (2e ratée) → 5 % (3e ratée : zone critique 1–5 %) → 0 % (4e ratée : grève).
 */
export function drainOneMissedSession(currentBattery: number): number {
  const b = clampKoneBattery(currentBattery);
  if (b <= 5) return 0;
  const rawNext = b - KONE_MISS_PENALTY;
  if (rawNext <= 10) {
    // Entrée garantie dans la zone critique rouge (1 % à 5 %) avant de tomber à 0 % à la séance suivante
    return Math.max(1, Math.min(5, b - 35));
  }
  return rawNext;
}

export function drainKoneBattery(currentBattery: number, missedSessionsCount = 1): number {
  let b = clampKoneBattery(currentBattery);
  const count = Math.max(0, Math.floor(missedSessionsCount));
  for (let i = 0; i < count; i++) {
    b = drainOneMissedSession(b);
  }
  return b;
}

/** +25 % par mini-leçon ou mini-jeu terminé (plafonné à 100 %). */
export function rechargeKoneBattery(currentBattery: number, completedCount = 1): number {
  const b = clampKoneBattery(currentBattery);
  const count = Math.max(0, Math.floor(completedCount));
  if (count === 0) return b;
  return Math.min(KONE_BATTERY_MAX, b + count * KONE_RECHARGE_PER_ACTIVITY);
}

export function getKoneMoodTier(battery: number): KoneMoodTier {
  const b = clampKoneBattery(battery);
  if (b >= 50) return 'happy';
  if (b >= 6) return 'annoyed';
  if (b >= 1) return 'angry';
  return 'strike';
}

export function getKoneMoodInfo(battery: number, studentFirstName?: string): KoneMoodInfo {
  const b = clampKoneBattery(battery);
  const tier = getKoneMoodTier(b);
  const namePrefix = studentFirstName ? `${studentFirstName}, ` : '';

  switch (tier) {
    case 'happy':
      return {
        tier,
        battery: b,
        label: 'En forme',
        shortStatus: 'Bleu · Souriant & motivé',
        bubbles: [
          `${namePrefix}je suis en pleine forme (${b} %) ! Continue à respecter ton planning comme ça.`,
          `Ma batterie est au top ! Prêt à conquérir tes prochaines révisions ensemble.`,
          `Chaque séance validée me garde le sourire. On lâche rien cette semaine !`,
        ],
      };
    case 'annoyed':
      return {
        tier,
        battery: b,
        label: 'Agacé',
        shortStatus: 'Orange · Un peu contrarié',
        bubbles: [
          `Hmm… ${namePrefix}tu as raté des séances et ma batterie descend (${b} %). Fais une mini-leçon pour me recharger !`,
          `Je commence à fatiguer là… Un petit mini-jeu ou une mini-leçon (+25 %) me ferait du bien.`,
          `Hé, ne laisse pas ton planning prendre la poussière ! Va vite me recharger.`,
        ],
      };
    case 'angry':
      return {
        tier,
        battery: b,
        label: 'Très fâché',
        shortStatus: 'Rouge · Zone critique',
        bubbles: [
          `Je suis TRÈS fâché (${b} %) ! Encore une séance ratée et je me mets en grève totale.`,
          `Fais court pardon, j’ai presque plus de batterie (${b} %)… Va faire tes mini-leçons tout de suite !`,
          `Zone critique ! Lance une mini-leçon ou un mini-jeu (+25 %) avant que je coupe tout.`,
        ],
      };
    case 'strike':
      return {
        tier,
        battery: 0,
        label: 'En grève',
        shortStatus: 'Rouge foncé · Boude (0 %)',
        bubbles: [KONE_STRIKE_MESSAGE],
      };
  }
}

/** Format YYYY-MM-DD en heure locale (cohérent avec le planning de l'élève). */
export function toLocalYmd(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function resolveSessionYmd(session: StudySession, currentWeekMonday?: string): string | null {
  if (session.date && /^\d{4}-\d{2}-\d{2}$/.test(session.date)) {
    return session.date;
  }
  if (currentWeekMonday && /^\d{4}-\d{2}-\d{2}$/.test(currentWeekMonday) && typeof session.dayOfWeek === 'number') {
    const [y, m, d] = currentWeekMonday.split('-').map(Number);
    const dt = new Date(y, (m || 1) - 1, (d || 1) + session.dayOfWeek);
    return toLocalYmd(dt);
  }
  return null;
}

export interface KoneBatterySnapshot {
  koneBattery?: number;
  koneBatteryUpdatedAt?: string;
  konePenalizedKeys?: string[];
  koneBaselineDate?: string;
}

export interface KoneMissedSettlementResult {
  changed: boolean;
  newlyMissedCount: number;
  koneBattery: number;
  koneBatteryUpdatedAt: string;
  konePenalizedKeys: string[];
  koneBaselineDate: string;
}

/**
 * Vérifie de manière idempotente les séances du planning définitivement ratées
 * (jours passés non validés ou séances du jour dont même le créneau de rattrapage est dépassé)
 * et applique la baisse correspondante sur `koneBattery`.
 */
export function settleKoneBatteryForMissedSessions(
  snapshot: KoneBatterySnapshot,
  studySessions: StudySession[],
  subjects: Subject[],
  currentWeekMonday?: string,
  now: Date = new Date(),
): KoneMissedSettlementResult {
  const todayYmd = toLocalYmd(now);
  const currentMinute = now.getHours() * 60 + now.getMinutes();

  const initialBattery = clampKoneBattery(snapshot.koneBattery, KONE_BATTERY_DEFAULT);
  const hadBaseline = Boolean(snapshot.koneBaselineDate && /^\d{4}-\d{2}-\d{2}$/.test(snapshot.koneBaselineDate));
  // À la toute première activation sur un compte existant, on pose la date du jour comme point de départ
  // pour ne pas pénaliser rétroactivement des jours antérieurs à l'installation de la fonctionnalité.
  const baselineDate = hadBaseline ? snapshot.koneBaselineDate! : todayYmd;
  const penalizedSet = new Set<string>(Array.isArray(snapshot.konePenalizedKeys) ? snapshot.konePenalizedKeys : []);

  const validSubjectIds = new Set(
    (subjects || []).filter((s) => s && !isNonAcademicSubject(s.name)).map((s) => s.id),
  );

  let newlyMissedCount = 0;

  for (const session of studySessions || []) {
    if (!session || session.completed) continue;
    if (isNonAcademicSubject(session.title)) continue;
    if (session.subjectId && validSubjectIds.size > 0 && !validSubjectIds.has(session.subjectId)) continue;

    const sessionYmd = resolveSessionYmd(session, currentWeekMonday);
    if (!sessionYmd) continue;
    // Ignorer les séances antérieures à la date d'activation initiale de la batterie
    if (sessionYmd < baselineDate) continue;

    const key = `${session.id}_${sessionYmd}`;
    if (penalizedSet.has(key)) continue;

    // Ignorer une séance d'examen dont l'épreuve est déjà passée
    const matchingSubject = subjects.find((s) => s.id === session.subjectId);
    const examDate = matchingSubject?.examDate || session.examDate;
    if (examDate && examDate < sessionYmd) continue;

    let isDefinitivelyMissed = false;

    if (sessionYmd < todayYmd) {
      // Jour passé sans que la séance ait été complétée
      isDefinitivelyMissed = true;
    } else if (sessionYmd === todayYmd) {
      // Aujourd'hui : `evaluateDailyCatchup` a déjà tourné avant cet appel.
      // Si l'heure de fin actuelle de la séance (ou de son unique rattrapage du soir) est dépassée
      // et qu'elle n'est toujours pas complétée (ou marquée expirée), la séance est définitivement ratée.
      const endMin = parseTimeToMinutes(session.endTime);
      if (session.isExpired || (Number.isFinite(endMin) && currentMinute > endMin + 1)) {
        isDefinitivelyMissed = true;
      }
    }

    if (isDefinitivelyMissed) {
      penalizedSet.add(key);
      newlyMissedCount += 1;
    }
  }

  const nextBattery = newlyMissedCount > 0 ? drainKoneBattery(initialBattery, newlyMissedCount) : initialBattery;
  const nextKeys = Array.from(penalizedSet).slice(-MAX_PENALIZED_KEYS);
  const batteryUninitialized = typeof snapshot.koneBattery !== 'number';
  const changed = newlyMissedCount > 0 || !hadBaseline || batteryUninitialized;

  return {
    changed,
    newlyMissedCount,
    koneBattery: nextBattery,
    koneBatteryUpdatedAt: newlyMissedCount > 0 || !snapshot.koneBatteryUpdatedAt
      ? now.toISOString()
      : snapshot.koneBatteryUpdatedAt,
    konePenalizedKeys: nextKeys,
    koneBaselineDate: baselineDate,
  };
}

/**
 * Fusionne l'état de batterie entre l'appareil local et Firestore :
 * la mise à jour la plus récente (`koneBatteryUpdatedAt`) gagne, et les clés pénalisées sont unifiées.
 */
export function mergeKoneBatteryState(
  local: KoneBatterySnapshot | undefined,
  cloud: KoneBatterySnapshot | undefined,
): Required<KoneBatterySnapshot> {
  const localTime = local?.koneBatteryUpdatedAt ? Date.parse(local.koneBatteryUpdatedAt) || 0 : 0;
  const cloudTime = cloud?.koneBatteryUpdatedAt ? Date.parse(cloud.koneBatteryUpdatedAt) || 0 : 0;

  const hasLocal = typeof local?.koneBattery === 'number' && Number.isFinite(local.koneBattery);
  const hasCloud = typeof cloud?.koneBattery === 'number' && Number.isFinite(cloud.koneBattery);

  let battery = KONE_BATTERY_DEFAULT;
  let updatedAt = new Date().toISOString();

  if (hasLocal && hasCloud) {
    if (localTime >= cloudTime) {
      battery = clampKoneBattery(local!.koneBattery);
      updatedAt = local!.koneBatteryUpdatedAt || cloud!.koneBatteryUpdatedAt || updatedAt;
    } else {
      battery = clampKoneBattery(cloud!.koneBattery);
      updatedAt = cloud!.koneBatteryUpdatedAt || local!.koneBatteryUpdatedAt || updatedAt;
    }
  } else if (hasCloud) {
    battery = clampKoneBattery(cloud!.koneBattery);
    updatedAt = cloud!.koneBatteryUpdatedAt || updatedAt;
  } else if (hasLocal) {
    battery = clampKoneBattery(local!.koneBattery);
    updatedAt = local!.koneBatteryUpdatedAt || updatedAt;
  }

  const mergedKeys = Array.from(
    new Set([...(local?.konePenalizedKeys || []), ...(cloud?.konePenalizedKeys || [])]),
  ).slice(-MAX_PENALIZED_KEYS);

  const dates = [local?.koneBaselineDate, cloud?.koneBaselineDate]
    .filter((d): d is string => Boolean(d && /^\d{4}-\d{2}-\d{2}$/.test(d)))
    .sort();
  const baselineDate = dates[0] || toLocalYmd(new Date());

  return {
    koneBattery: battery,
    koneBatteryUpdatedAt: updatedAt,
    konePenalizedKeys: mergedKeys,
    koneBaselineDate: baselineDate,
  };
}
