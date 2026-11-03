/**
 * Outils serveur partagés par les routes /api (le préfixe « _ » empêche Vercel d'en faire une route).
 */
import fs from 'fs';
import path from 'path';
import { timingSafeEqual } from 'crypto';

/** Vrai sur Vercel ou en production : on n'y lit JAMAIS de fichier .env (seulement les variables Vercel). */
export function isProductionRuntime() {
  return Boolean(process.env.VERCEL) || process.env.NODE_ENV === 'production';
}

/**
 * Développement local uniquement : charge .env.local puis .env dans process.env
 * (sans écraser une variable déjà définie). Ne fait rien en production.
 */
export function loadLocalEnvIfPresent() {
  if (isProductionRuntime()) return;
  for (const file of ['.env.local', '.env']) {
    try {
      const fullPath = path.resolve(process.cwd(), file);
      if (!fs.existsSync(fullPath)) continue;
      for (const line of fs.readFileSync(fullPath, 'utf8').split('\n')) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        const eqIdx = trimmed.indexOf('=');
        if (eqIdx <= 0) continue;
        const key = trimmed.slice(0, eqIdx).trim();
        const value = trimmed.slice(eqIdx + 1).trim().replace(/^['"]|['"]$/g, '');
        if (!process.env[key]) process.env[key] = value;
      }
    } catch {
      // fichier illisible : ignoré
    }
  }
}

/** Comparaison de secrets à temps constant (évite de deviner un secret en mesurant les temps de réponse). */
export function secretsMatch(provided, expected) {
  const a = Buffer.from(String(provided || ''));
  const b = Buffer.from(String(expected || ''));
  return a.length > 0 && b.length > 0 && a.length === b.length && timingSafeEqual(a, b);
}

/** Secret fourni par l'appelant : en-tête « X-Cron-Secret » ou « Authorization: Bearer … » (jamais l'URL). */
export function providedSecret(req, headerName) {
  const custom = headerName ? req.headers[headerName.toLowerCase()] : '';
  if (custom) return String(custom).trim();
  const auth = String(req.headers.authorization || req.headers.Authorization || '');
  return auth.startsWith('Bearer ') ? auth.slice(7).trim() : '';
}
