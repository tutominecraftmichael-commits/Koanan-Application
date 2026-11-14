/**
 * GAMIFICATION — ÉTAPE 1 : XP ET RÉPUTATION (document « Vision Globale de KONAN I »)
 *
 * XP d'une séance terminée, selon sa durée prévue :
 *   25 min → +35 XP · 45 min → +50 XP · 75 min → +90 XP · 2 h → +140 XP
 *   (durées intermédiaires : palier le plus proche)
 * Réputation (discipline) : démarre à 100 %.
 *   −5 % par séance manquée et non rattrapée avant minuit ; +1 % par séance faite ; jamais sous 0 ni au-dessus de 100.
 *   La ligue (étape 3) sera réservée aux élèves au-dessus de 80 %.
 * Tout est pur (aucun accès au stockage) : App.tsx applique le résultat à l'état de l'élève.
 */
import type { GamificationEvent, GamificationState, StudySession } from '../../types';

export const REPUTATION_START = 100;
export const REPUTATION_MISSED = -5;
export const REPUTATION_DONE = 1;
export const LEAGUE_MIN_REPUTATION = 80;
const MAX_HISTORY = 40;
const MAX_KEYS = 300;
const DAY_MS = 24 * 60 * 60 * 1000;

export function defaultGamification(): GamificationState {
  return { xp: 0, reputation: REPUTATION_START, awardedKeys: [], history: [] };
}

/** État complet, même pour un ancien compte sans gamification. */
export function gamificationOf(g?: Partial<GamificationState> | null): GamificationState {
  const base = defaultGamification();
  if (!g) return base;
  return {
    xp: Number.isFinite(g.xp) ? Math.max(0, Math.round(Number(g.xp))) : 0,
    reputation: Number.isFinite(g.reputation) ? clampReputation(Number(g.reputation)) : REPUTATION_START,
    reputationCheckedDate: g.reputationCheckedDate,
    reputationUpdatedAt: g.reputationUpdatedAt,
    awardedKeys: Array.isArray(g.awardedKeys) ? g.awardedKeys.map(String) : [],
    history: Array.isArray(g.history) ? g.history.filter((e) => e && typeof e.amount === 'number') : [],
    updatedAt: g.updatedAt,
    energy: Number.isFinite(g.energy) ? Math.max(0, Math.min(ENERGY_MAX, Number(g.energy))) : undefined,
    energyAt: g.energyAt,
    seriesChain: g.seriesChain && Number.isFinite(g.seriesChain.count) ? g.seriesChain : undefined,
  };
}

// ---------------------------------------------------------------------------
// ÉTAPE 2 : ÉNERGIE ⚡ ET SÉRIES D'EXERCICES (icône ronde)
// ---------------------------------------------------------------------------
/** 25 ⚡ au départ ; une série coûte 5 ⚡ en Gratuit ; Pro et Plus : illimité. */
export const ENERGY_MAX = 25;
export const ENERGY_COST = 5;
/** Recharge progressive : 1 ⚡ toutes les 55 min 12 s, donc 5 ⚡ (une série) toutes les 4 h 36 et le plein en 23 h. */
export const ENERGY_FULL_MS = 23 * 60 * 60 * 1000;
export const ENERGY_UNIT_MS = ENERGY_FULL_MS / ENERGY_MAX;
/** XP d'une série de 10 QCM : 15, puis le double à chaque série enchaînée, plafonné à 120. */
export const SERIES_BASE_XP = 15;
export const SERIES_MAX_XP = 120;
/** Au-delà de 30 minutes de pause (ou le lendemain), le doublement repart à 15 XP. */
export const SERIES_CHAIN_GAP_MS = 30 * 60 * 1000;
export const SERIES_LENGTH = 10;

export function hasUnlimitedEnergy(planTier?: string): boolean {
  return planTier === 'pro' || planTier === 'plus';
}

/** Énergie disponible maintenant, et heure du prochain ⚡ et du plein (null si déjà plein). */
export function energyNow(g0: GamificationState | undefined, now: Date = new Date()): { energy: number; nextUnitAt: number | null; fullAt: number | null } {
  const g = gamificationOf(g0);
  if (g.energy === undefined || !g.energyAt) return { energy: ENERGY_MAX, nextUnitAt: null, fullAt: null };
  const at = Date.parse(g.energyAt) || now.getTime();
  const units = Math.max(0, Math.floor((now.getTime() - at) / ENERGY_UNIT_MS));
  const energy = Math.min(ENERGY_MAX, g.energy + units);
  if (energy >= ENERGY_MAX) return { energy, nextUnitAt: null, fullAt: null };
  const nextUnitAt = at + (units + 1) * ENERGY_UNIT_MS;
  return { energy, nextUnitAt, fullAt: nextUnitAt + (ENERGY_MAX - energy - 1) * ENERGY_UNIT_MS };
}

/** Dépense l'énergie d'une série (au lancement). Null si pas assez d'énergie. */
export function spendEnergy(g0: GamificationState | undefined, planTier: string | undefined, now: Date = new Date()): GamificationState | null {
  const g = gamificationOf(g0);
  if (hasUnlimitedEnergy(planTier)) return g;
  const { energy } = energyNow(g, now);
  if (energy < ENERGY_COST) return null;
  // On garde la recharge déjà entamée : l'heure de référence avance d'un nombre entier de ⚡
  let energyAt = now.getTime();
  if (g.energy !== undefined && g.energyAt && energy < ENERGY_MAX) {
    const at = Date.parse(g.energyAt) || now.getTime();
    energyAt = at + Math.floor((now.getTime() - at) / ENERGY_UNIT_MS) * ENERGY_UNIT_MS;
  }
  return { ...g, energy: energy - ENERGY_COST, energyAt: new Date(energyAt).toISOString(), updatedAt: now.toISOString() };
}

/**
 * Niveaux des séries enchaînées : plus d'XP, plus de questions, plus difficiles, moins de temps par question.
 * Le temps écoulé avant la fin = série perdue (rien de gagné, retour au niveau 1).
 */
export const SERIES_LEVELS = [
  { level: 1, xp: 15, questions: 10, seconds: 5 * 60 },
  { level: 2, xp: 30, questions: 15, seconds: 7 * 60 },
  { level: 3, xp: 60, questions: 20, seconds: 8 * 60 + 30 },
  { level: 4, xp: 120, questions: 30, seconds: 10 * 60 },
] as const;
export type SeriesLevel = (typeof SERIES_LEVELS)[number];
export function seriesLevelFor(chainIndex: number): SeriesLevel {
  return SERIES_LEVELS[Math.max(0, Math.min(SERIES_LEVELS.length - 1, chainIndex))];
}

/** XP de base et niveau de la prochaine série (selon l'enchaînement en cours). */
export function nextSeriesBaseXp(g0: GamificationState | undefined, startedAt: Date = new Date()): { base: number; chainIndex: number; level: SeriesLevel } {
  const g = gamificationOf(g0);
  const chain = g.seriesChain;
  let chainIndex = 0;
  if (chain?.lastEndAt && chain.count >= 0) {
    const last = new Date(chain.lastEndAt);
    const sameDay = ymdLocal(last) === ymdLocal(startedAt);
    if (sameDay && startedAt.getTime() - last.getTime() <= SERIES_CHAIN_GAP_MS) chainIndex = chain.count + 1;
  }
  const level = seriesLevelFor(chainIndex);
  return { base: level.xp, chainIndex, level };
}

/** Série perdue (temps écoulé ou abandon) : rien de gagné, l'enchaînement repart au niveau 1. */
export function loseSeries(g0: GamificationState | undefined, reason: string, now: Date = new Date()): GamificationState {
  const g = gamificationOf(g0);
  return {
    ...g,
    seriesChain: { count: -1, lastEndAt: now.toISOString() },
    history: pushEvents(g.history, [{ at: now.toISOString(), kind: 'xp', amount: 0, reason }]),
    updatedAt: now.toISOString(),
  };
}

/** Fin d'une série : XP = base − 1 par faute (jamais sous 0). */
export function finishSeries(
  g0: GamificationState | undefined,
  mistakes: number,
  startedAt: Date,
  now: Date = new Date(),
  total: number = SERIES_LENGTH,
): { gamification: GamificationState; gained: number; base: number } {
  const g = gamificationOf(g0);
  const { base, chainIndex } = nextSeriesBaseXp(g, startedAt);
  const gained = Math.max(0, base - Math.max(0, Math.round(mistakes)));
  const event: GamificationEvent = {
    at: now.toISOString(), kind: 'xp', amount: gained,
    reason: `Série niveau ${seriesLevelFor(chainIndex).level} (${Math.max(0, total - mistakes)}/${total})`,
  };
  return {
    gamification: {
      ...g,
      xp: g.xp + gained,
      seriesChain: { count: Math.min(chainIndex, SERIES_LEVELS.length - 1), lastEndAt: now.toISOString() },
      history: pushEvents(g.history, [event]),
      updatedAt: now.toISOString(),
    },
    gained,
    base,
  };
}

const clampReputation = (r: number) => Math.max(0, Math.min(100, Math.round(r)));

/** XP d'une séance terminée selon sa durée (palier le plus proche de 25, 45, 75 ou 120 min). */
export function lessonXp(durationMinutes: number): number {
  const m = Number(durationMinutes) || 25;
  if (m < 35) return 35;
  if (m < 60) return 50;
  if (m < 98) return 90;
  return 140;
}

export function ymdLocal(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
function addDays(ymd: string, days: number): string {
  const [y, m, d] = ymd.split('-').map(Number);
  return ymdLocal(new Date(new Date(y, m - 1, d, 12).getTime() + days * DAY_MS));
}

function pushEvents(history: GamificationEvent[], events: GamificationEvent[]): GamificationEvent[] {
  return [...events.slice().reverse(), ...history].slice(0, MAX_HISTORY);
}

/** Clé d'une séance récompensée : une même séance ne rapporte qu'une fois par jour. */
export function sessionKey(s: Pick<StudySession, 'id' | 'completedAt' | 'date'>): string {
  const day = s.completedAt ? ymdLocal(new Date(s.completedAt)) : s.date;
  return `${s.id}_${day}`;
}

/**
 * Séances terminées récemment (moins de 6 h) et pas encore récompensées : XP gagnés.
 * Renvoie l'état mis à jour et le total gagné (0 si rien de nouveau).
 */
export function awardCompletedSessions(
  g0: GamificationState | undefined,
  sessions: StudySession[],
  now: Date = new Date(),
): { gamification: GamificationState; gained: number; sessions: StudySession[] } {
  const g = gamificationOf(g0);
  const done = new Set(g.awardedKeys);
  const rewarded: StudySession[] = [];
  const events: GamificationEvent[] = [];
  let gained = 0;
  for (const s of sessions || []) {
    if (!s?.completed || !s.completedAt) continue;
    const at = Date.parse(s.completedAt);
    if (!Number.isFinite(at) || now.getTime() - at > 6 * 60 * 60 * 1000 || at - now.getTime() > 5 * 60 * 1000) continue;
    const key = sessionKey(s);
    if (done.has(key)) continue;
    done.add(key);
    const xp = lessonXp(s.durationMinutes);
    gained += xp;
    rewarded.push(s);
    events.push({ at: now.toISOString(), kind: 'xp', amount: xp, reason: `Séance terminée (${s.durationMinutes} min)` });
  }
  if (!gained) return { gamification: g, gained: 0, sessions: [] };
  return {
    gamification: {
      ...g,
      xp: g.xp + gained,
      awardedKeys: [...done].slice(-MAX_KEYS),
      history: pushEvents(g.history, events),
      updatedAt: now.toISOString(),
    },
    gained,
    sessions: rewarded,
  };
}

/**
 * Compte la réputation des jours terminés (jusqu'à hier inclus) qui ne l'ont pas encore été.
 * - Séances datées de ce jour : faite → +1 %, manquée (non faite, non expirée) → −5 %.
 * - Jour après le dernier jour du planning (l'élève n'a pas ouvert KONAN) : les séances du même jour de
 *   la semaine comptent comme manquées.
 * - Premier passage : on part d'aujourd'hui (aucune pénalité rétroactive).
 * - Jour où l'élève a terminé tout son programme en avance (cycleCompletedDate) : rien ne compte.
 */
export function settleReputation(
  g0: GamificationState | undefined,
  sessions: StudySession[],
  now: Date = new Date(),
  cycleCompletedDate?: string,
): { gamification: GamificationState; changed: boolean; missed: number; done: number } {
  const g = gamificationOf(g0);
  const today = ymdLocal(now);
  const yesterday = addDays(today, -1);
  if (!g.reputationCheckedDate) {
    // Point de départ seulement (sans date de calcul) : la vraie réputation d'un autre appareil reste prioritaire
    return { gamification: { ...g, reputationCheckedDate: yesterday }, changed: true, missed: 0, done: 0 };
  }
  if (g.reputationCheckedDate >= yesterday) return { gamification: g, changed: false, missed: 0, done: 0 };
  // Planning pas encore chargé : on attend (sinon les jours seraient comptés sans leurs séances)
  if (!sessions || sessions.length === 0) return { gamification: g, changed: false, missed: 0, done: 0 };

  const list = (sessions || []).filter((s) => s && !s.isExpired);
  const lastPlanned = list.reduce((max, s) => (s.date && s.date > max ? s.date : max), '');
  let reputation = g.reputation;
  let missed = 0;
  let done = 0;
  const events: GamificationEvent[] = [];
  // Au plus 60 jours comptés d'un coup (élève absent très longtemps)
  let day = addDays(g.reputationCheckedDate, 1);
  const firstAllowed = addDays(yesterday, -59);
  if (day < firstAllowed) day = firstAllowed;
  for (; day <= yesterday; day = addDays(day, 1)) {
    if (cycleCompletedDate === day) continue;
    const dated = list.filter((s) => s.date === day);
    let dayMissed = 0;
    let dayDone = 0;
    if (dated.length) {
      for (const s of dated) {
        if (s.completed) dayDone += 1;
        else dayMissed += 1;
      }
    } else if (lastPlanned && day > lastPlanned) {
      const [y, m, d] = day.split('-').map(Number);
      const dow = (new Date(y, m - 1, d, 12).getDay() + 6) % 7;
      dayMissed = list.filter((s) => s.dayOfWeek === dow).length;
    }
    if (!dayMissed && !dayDone) continue;
    const before = reputation;
    reputation = clampReputation(reputation + dayDone * REPUTATION_DONE + dayMissed * REPUTATION_MISSED);
    missed += dayMissed;
    done += dayDone;
    if (reputation !== before) {
      const parts = [dayDone ? `${dayDone} faite${dayDone > 1 ? 's' : ''}` : '', dayMissed ? `${dayMissed} manquée${dayMissed > 1 ? 's' : ''}` : ''].filter(Boolean);
      events.push({ at: now.toISOString(), kind: 'reputation', amount: reputation - before, reason: `Séances du ${day.slice(8, 10)}/${day.slice(5, 7)} : ${parts.join(', ')}` });
    }
  }
  return {
    gamification: {
      ...g,
      reputation,
      reputationCheckedDate: yesterday,
      reputationUpdatedAt: now.toISOString(),
      history: pushEvents(g.history, events),
      updatedAt: now.toISOString(),
    },
    changed: true,
    missed,
    done,
  };
}

/**
 * Fusion entre deux appareils (ou appareil ↔ compte) :
 * - XP : le plus grand total ; séances récompensées réunies (jamais deux fois les XP d'une même séance) ;
 * - réputation : celle du dernier vrai calcul (un appareil neuf, encore à 100 %, ne l'écrase jamais) ;
 * - historique : réuni, sans doublon, du plus récent au plus ancien.
 */
export function mergeGamification(local?: Partial<GamificationState> | null, cloud?: Partial<GamificationState> | null): GamificationState | undefined {
  if (!local && !cloud) return undefined;
  if (!cloud) return gamificationOf(local);
  if (!local) return gamificationOf(cloud);
  const a = gamificationOf(local);
  const b = gamificationOf(cloud);
  const time = (iso?: string) => Date.parse(iso || '') || 0;
  const rep = time(a.reputationUpdatedAt) >= time(b.reputationUpdatedAt) ? a : b;
  // Sans aucun calcul des deux côtés : on garde le point de départ le plus ancien (aucun jour sauté)
  const checked = rep.reputationUpdatedAt
    ? rep.reputationCheckedDate
    : [a.reputationCheckedDate, b.reputationCheckedDate].filter(Boolean).sort()[0];
  const seen = new Set<string>();
  const history = [...a.history, ...b.history]
    .filter((e) => {
      const k = `${e.at}|${e.kind}|${e.amount}|${e.reason}`;
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    })
    .sort((x, y) => time(y.at) - time(x.at))
    .slice(0, MAX_HISTORY);
  return {
    xp: Math.max(a.xp, b.xp),
    reputation: rep.reputation,
    reputationCheckedDate: checked,
    reputationUpdatedAt: rep.reputationUpdatedAt,
    awardedKeys: [...new Set([...b.awardedKeys, ...a.awardedKeys])].slice(-MAX_KEYS),
    history,
    updatedAt: time(a.updatedAt) >= time(b.updatedAt) ? a.updatedAt : b.updatedAt,
    // Énergie : la dernière dépense fait foi (jamais de recharge gratuite en changeant d'appareil)
    ...(time(a.energyAt) >= time(b.energyAt)
      ? (a.energyAt ? { energy: a.energy, energyAt: a.energyAt } : {})
      : { energy: b.energy, energyAt: b.energyAt }),
    seriesChain: time(a.seriesChain?.lastEndAt) >= time(b.seriesChain?.lastEndAt) ? a.seriesChain : b.seriesChain,
  };
}

/** Couleur et message de la réputation. */
export function reputationLevel(r: number): { tone: 'good' | 'warn' | 'bad'; label: string } {
  if (r > LEAGUE_MIN_REPUTATION) return { tone: 'good', label: 'Discipline solide' };
  if (r >= 60) return { tone: 'warn', label: 'Attention : rattrape tes séances' };
  return { tone: 'bad', label: 'Discipline en danger' };
}
