import React, { useState } from 'react';
import { Sparkles, RefreshCw, X } from 'lucide-react';
import { usePwaUpdate } from '../../services/pwaUpdateService';

export const PwaUpdateBanner: React.FC = () => {
  const { isUpdateAvailable, applyUpdate } = usePwaUpdate();
  const [isApplying, setIsApplying] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  if (!isUpdateAvailable || isDismissed) {
    return null;
  }

  const handleUpdate = async () => {
    setIsApplying(true);
    await applyUpdate();
  };

  return (
    <aside 
      aria-label="Mise à jour disponible"
      className="fixed top-4 left-1/2 -translate-x-1/2 z-[99999] w-[94%] max-w-lg animate-in fade-in slide-in-from-top-6 duration-400"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-700 via-indigo-700 to-sky-700 dark:from-[#0F1E3D] dark:via-[#14264E] dark:to-[#0C1935] text-white p-3.5 sm:p-4 border-2 border-sky-300 dark:border-sky-400/70 shadow-[0_12px_45px_rgba(2,132,199,0.45)] backdrop-blur-2xl">
        {/* Halo lumineux d'arrière-plan */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-400/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
          {/* Texte & icône */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-white/15 border border-white/20 shadow-inner">
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400 border border-white"></span>
              </span>
              <Sparkles className="w-5 h-5 text-sky-200" />
            </div>

            <div className="min-w-0">
              <h4 className="text-xs sm:text-sm font-black tracking-tight text-white flex items-center gap-1.5">
                <span>Mise à jour disponible !</span>
              </h4>
              <p className="text-[11px] sm:text-xs text-sky-100 dark:text-sky-200 font-normal truncate">
                Nouvelle version prête pour votre application
              </p>
            </div>
          </div>

          {/* Bouton d'action */}
          <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end pt-1 sm:pt-0">
            <button
              type="button"
              onClick={handleUpdate}
              disabled={isApplying}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white text-blue-900 hover:bg-sky-50 active:scale-95 text-xs sm:text-sm font-black shadow-lg shadow-black/20 transition-all cursor-pointer disabled:opacity-75"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-blue-700 ${isApplying ? 'animate-spin' : ''}`} />
              <span>{isApplying ? 'Mise à jour...' : 'Mettre à jour l\'application'}</span>
            </button>

            <button
              type="button"
              onClick={() => setIsDismissed(true)}
              aria-label="Fermer"
              className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
