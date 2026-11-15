import React from 'react';

/**
 * Filet de sécurité de l'écran d'exercices : une question qui ne s'affiche pas ne fait jamais tomber
 * toute l'application. L'élève voit un message et ferme l'écran ; le reste de KONAN continue.
 */
export class SeriesErrorBoundary extends React.Component<{ children: React.ReactNode; onClose: () => void }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: Error) {
    console.error('[KONAN] Écran d’exercices :', error);
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <div className="fixed inset-0 z-[80] bg-slate-50 dark:bg-[#070B13] flex flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="text-lg font-black text-slate-900 dark:text-white">Oups, cette série n’a pas pu s’afficher</p>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm">Ton énergie et tes XP sont en sécurité. Ferme et relance une série.</p>
        <button
          type="button"
          onClick={() => { this.setState({ failed: false }); this.props.onClose(); }}
          className="px-6 py-3 rounded-2xl bg-sky-500 text-white font-black uppercase tracking-wide shadow-[0_4px_0_#0284C7] cursor-pointer"
        >
          Fermer
        </button>
      </div>
    );
  }
}
