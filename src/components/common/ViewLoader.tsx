import React from 'react';

/**
 * Chargement des pages à la demande (code splitting).
 * - lazyView : page chargée seulement quand on l'ouvre ;
 * - prefetchViews : précharge en silence, quand le téléphone est libre, les pages qu'on ouvrira sûrement ;
 * - après une mise à jour du site, une page restée ouverte peut réclamer d'anciens fichiers qui n'existent
 *   plus : on recharge alors l'appli UNE fois, au lieu d'afficher un écran d'erreur.
 */

const RELOAD_FLAG = 'konan_chunk_reload_at';

function isChunkError(err: unknown): boolean {
  const msg = String((err as Error)?.message || err || '');
  return /dynamically imported module|Importing a module script failed|Failed to fetch|error loading dynamically|ChunkLoadError/i.test(msg);
}

async function loadWithRecovery<T>(loader: () => Promise<T>): Promise<T> {
  try {
    return await loader();
  } catch (err) {
    if (isChunkError(err)) {
      try {
        const last = Number(sessionStorage.getItem(RELOAD_FLAG) || 0);
        if (Date.now() - last > 60_000) {
          sessionStorage.setItem(RELOAD_FLAG, String(Date.now()));
          window.location.reload();
          return new Promise<T>(() => {}); // la page se recharge
        }
      } catch {
        // stockage indisponible : on laisse l'erreur remonter
      }
    }
    throw err;
  }
}

export function lazyView<T extends React.ComponentType<any>>(loader: () => Promise<T>) {
  return React.lazy(async () => ({ default: await loadWithRecovery(loader) }));
}

/** Précharge des pages quand le navigateur est inactif (sans bloquer l'affichage). */
export function prefetchViews(loaders: Array<() => Promise<unknown>>) {
  if (typeof window === 'undefined') return;
  // Pas de préchargement sur une connexion lente ou en mode « économie de données »
  const conn = (navigator as any).connection;
  if (conn && (conn.saveData || /(^|-)2g$/.test(String(conn.effectiveType || '')))) return;
  const run = () => loaders.forEach((load) => { load().catch(() => {}); });
  const idle = (window as any).requestIdleCallback as ((cb: () => void, o?: { timeout: number }) => number) | undefined;
  if (idle) idle(run, { timeout: 4000 });
  else setTimeout(run, 2500);
}

/** Écran d'attente très léger pendant le chargement d'une page. */
export const ViewLoader: React.FC = () => (
  <div className="flex items-center justify-center py-24" role="status" aria-label="Chargement">
    <div className="w-8 h-8 rounded-full border-[3px] border-slate-200 dark:border-slate-700 border-t-indigo-500 dark:border-t-indigo-400 animate-spin motion-reduce:animate-none" />
  </div>
);
