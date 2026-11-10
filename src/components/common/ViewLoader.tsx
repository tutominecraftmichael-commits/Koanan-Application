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
  <div className="flex flex-col items-center justify-center gap-3 py-24" role="status" aria-live="polite">
    <div className="w-9 h-9 rounded-full border-[3px] border-slate-200 dark:border-slate-700 border-t-indigo-500 dark:border-t-indigo-400 animate-spin motion-reduce:animate-none" />
    <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">Chargement…</p>
  </div>
);

/**
 * Si une page n'arrive pas à se charger (connexion coupée, site en cours de mise à jour), on affiche
 * un message clair avec « Réessayer » au lieu d'un écran vide.
 */
export class ViewErrorBoundary extends React.Component<{ children: React.ReactNode; resetKey?: string }, { error: Error | null }> {
  state: { error: Error | null } = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error) {
    console.error('[KONAN] Page impossible à afficher :', error);
  }

  componentDidUpdate(prev: { resetKey?: string }) {
    // On change de page : on retente l'affichage
    if (this.state.error && prev.resetKey !== this.props.resetKey) this.setState({ error: null });
  }

  render() {
    if (!this.state.error) return this.props.children;
    const offline = typeof navigator !== 'undefined' && navigator.onLine === false;
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-20 px-6 text-center">
        <p className="text-base font-extrabold text-slate-900 dark:text-white">
          {offline ? 'Pas de connexion Internet' : 'Cette page n’a pas pu s’ouvrir'}
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm">
          {offline ? 'Reconnecte-toi puis réessaie.' : 'Le site vient peut-être d’être mis à jour. Réessaie, ça prend une seconde.'}
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold cursor-pointer"
        >
          Réessayer
        </button>
      </div>
    );
  }
}
