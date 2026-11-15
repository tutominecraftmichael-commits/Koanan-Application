export declare const NAME_CHANGE_COOLDOWN_DAYS: number;
export declare function nextNameChangeAt(lastChangeIso: string | undefined | null, nowMs?: number): number | null;
export declare function checkStudentName(raw: string): { ok: true; name: string } | { ok: false; reason: string };
