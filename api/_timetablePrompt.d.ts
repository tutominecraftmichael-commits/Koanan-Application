export declare const PROMPT_OFFICIEL: string;
export declare function buildTimetablePrompt(format?: 'lmd' | 'tpcm' | 'scolaire'): string;
export declare const TIMETABLE_MODELS: string[];
export declare const ALLOWED_MIME_TYPES: string[];
export declare function normalizeMime(fileBase64: string, mimeType: string): string;
export declare function stripDataUrlPrefix(fileBase64: string): string;
export declare function cleanTimetableOutput(text: string): string;
