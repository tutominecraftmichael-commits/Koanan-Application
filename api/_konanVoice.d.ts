export type KonanSituation = '5_MIN_AVANT' | 'RETARD_15_MIN' | 'SEANCE_MANQUEE';
export type KonanAlertKind = 'avant' | 'retard' | 'manquee' | 'rattrapage';

export interface KonanAlert {
  kind?: KonanAlertKind;
  situation: KonanSituation;
  sessionId: string;
  subjectId?: string;
  subjectName?: string;
  startTime?: string;
  durationMinutes?: number;
  rattrapageA?: string | null;
  isRattrapage?: boolean;
  date?: string;
}

export interface KonanStudentContext {
  prenom: string;
  classe: string;
  matiere: string;
  situation: KonanSituation;
  heureSeance: string;
  dureeMinutes: number;
  rattrapageA: string | null;
  estRattrapage: boolean;
  historique: {
    valideesSur3Jours: number;
    rateesSur3Jours: number;
    rateeHier: boolean;
    serie: number;
    dernierTravail: { titre: string; ilYaJours: number | null } | null;
  };
  urgence: { type: 'devoir' | 'examen' | 'rattrapage'; dansJours: number } | null;
  moment: 'matin' | 'après-midi' | 'soir' | 'nuit';
}

export const SITUATIONS: { AVANT: '5_MIN_AVANT'; RETARD: 'RETARD_15_MIN'; MANQUEE: 'SEANCE_MANQUEE' };
export const ALERT_KINDS: Record<KonanAlertKind, { situation: KonanSituation; label: string }>;
export const EXAM_URGENCY_ENABLED: boolean;
export const DEFAULT_TIMEZONE: string;
export const KONAN_SYSTEM_INSTRUCTION: string;

export function ymdIn(date: Date, tz?: string): string;
export function hourIn(date: Date, tz?: string): number;
export function dayOfWeekOf(ymd: string): number;
export function frenchTime(hhmm: string | null | undefined): string;
export function firstName(raw: string | null | undefined): string;
export function buildStudentContext(user: unknown, alert: KonanAlert, now?: Date, tz?: string): KonanStudentContext;
export function kindFromContext(ctx: KonanStudentContext): KonanAlertKind;
export function fallbackMessage(ctx: KonanStudentContext, seed?: string, recent?: string[]): { title: string; body: string };
export const MESSAGE_ANGLES: string[];
export function buildKonanPrompt(ctx: KonanStudentContext, options?: { angle?: string; recent?: string[] }): string;
export function validateAiMessage(raw: unknown, ctx: KonanStudentContext): { title: string; body: string } | null;
