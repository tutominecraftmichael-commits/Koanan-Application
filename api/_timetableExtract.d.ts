export interface ExtractedClassTimetable {
  /** Nom de la classe tel qu'écrit sur le document (ex. « 2nde C », « LSTCF 1A »). */
  name: string;
  /** Emploi du temps de cette classe au format texte de Konan. */
  text: string;
  slotCount: number;
  subjectCount: number;
}

export interface StructuredTimetableResult {
  text: string;
  model?: string;
  classes: ExtractedClassTimetable[];
  chosenClass: string;
  warnings: string[];
}

export const STRUCTURED_MODELS: string[];
export const FALLBACK_TEXT_MODELS: string[];
export function canonicalSubject(subject: string, label?: string): string;
export function isNonCourseLabel(text: string): boolean;
export function normalizeTime(value: string): string | null;
export function normalizeDay(value: string): string | null;
export function buildStructuredPrompt(format?: string, classHint?: string): string;
export function flattenClassCells(cls: unknown): Record<string, unknown>[];
export function serializeSlots(slots: unknown[], format?: string): string;
export function postProcessTimetable(json: unknown, format?: string, classHint?: string): StructuredTimetableResult;
export function extractTimetable(options: {
  apiKey: string;
  data: string;
  mimeType: string;
  format?: string;
  classHint?: string;
  models?: string[];
}): Promise<StructuredTimetableResult | null>;
