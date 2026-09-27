/**
 * Konan ID Generator & Validator:
 * Generates and validates unique, permanent student identifiers (e.g. KN-948201)
 * Used for secure peer invitations into KONAN PLUS group accounts.
 */

export function generateKonanId(seed?: string): string {
  if (seed) {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = ((hash << 5) - hash) + seed.charCodeAt(i);
      hash |= 0;
    }
    const num = Math.abs(hash) % 900000 + 100000;
    return `KN-${num}`;
  }
  const randomNum = Math.floor(100000 + Math.random() * 900000);
  return `KN-${randomNum}`;
}

export function validateKonanId(id: string): boolean {
  if (!id) return false;
  const clean = id.trim().toUpperCase();
  // Validates KN-XXXXXX or KN-XXXXXXXX (alphanumeric, min 4 max 10 chars after KN-)
  return /^KN-[A-Z0-9]{4,10}$/.test(clean);
}

export function formatKonanId(raw: string): string {
  const clean = raw.trim().toUpperCase();
  if (clean.startsWith('KN-')) {
    return clean;
  }
  if (clean.startsWith('KN')) {
    return `KN-${clean.slice(2)}`;
  }
  return `KN-${clean}`;
}
