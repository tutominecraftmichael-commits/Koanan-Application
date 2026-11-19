import React from 'react';
import { Lock, Sparkles, Store, X } from 'lucide-react';

/** Pièce d'Or dorée KONAN (icône vectorielle nette en mode jour comme en mode nuit). */
export const GoldCoinIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className={`shrink-0 ${className}`}
  >
    <defs>
      <linearGradient id="konanGoldOuter" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FDE68A" />
        <stop offset="45%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#B45309" />
      </linearGradient>
      <linearGradient id="konanGoldInner" x1="5" y1="4" x2="19" y2="20" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FEF3C7" />
        <stop offset="55%" stopColor="#FBBF24" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" fill="url(#konanGoldOuter)" />
    <circle cx="12" cy="12" r="7.5" fill="url(#konanGoldInner)" stroke="#FEF9C3" strokeWidth="0.9" strokeOpacity="0.85" />
    <path
      d="M12 7.2L13.45 10.15L16.7 10.6L14.35 12.9L14.9 16.15L12 14.6L9.1 16.15L9.65 12.9L7.3 10.6L10.55 10.15L12 7.2Z"
      fill="#FFFBEB"
      fillOpacity="0.95"
    />
  </svg>
);

/** Aperçu sobre « Boutique — Bientôt disponible » ouvert au clic sur le compteur d'Or ou depuis le Profil. */
export const ShopComingSoonModal: React.FC<{ gold: number; onClose: () => void }> = ({ gold, onClose }) => (
  <div
    className="fixed inset-0 z-[110] flex items-end sm:items-center justify-center bg-slate-950/70 backdrop-blur-sm p-0 sm:p-4"
    onClick={onClose}
  >
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Boutique KONAN"
      onClick={(e) => e.stopPropagation()}
      className="relative w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl bg-white dark:bg-[#0F1626] border border-slate-200 dark:border-white/10 p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-150"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fermer"
        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.08] dark:hover:bg-white/[0.15] text-slate-700 dark:text-slate-200 flex items-center justify-center cursor-pointer transition-colors"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="flex flex-col items-center text-center gap-3 pt-1">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400/20 via-yellow-500/15 to-orange-500/20 border border-amber-400/40 flex items-center justify-center shadow-lg shadow-amber-500/15">
          <GoldCoinIcon size={38} />
        </div>
        <div className="space-y-1">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300 border border-amber-300/70 dark:border-amber-400/30 text-[10px] font-black uppercase tracking-wider">
            <Store className="w-3 h-3" /> Boutique · Bientôt disponible
          </span>
          <h2 className="m-0 text-xl font-black text-slate-900 dark:text-white">Ton trésor d’Or KONAN</h2>
        </div>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-400/30">
          <GoldCoinIcon size={22} />
          <span className="text-2xl font-black tabular-nums text-amber-700 dark:text-amber-300">
            {gold.toLocaleString('fr-FR')}
          </span>
          <span className="text-xs font-extrabold uppercase tracking-wider text-amber-700/80 dark:text-amber-300/80">Or</span>
        </div>
      </div>

      <div className="rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-white/[0.08] p-4 space-y-2.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
        <p className="m-0 font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
          Comment gagner plus d’Or ?
        </p>
        <p className="m-0">
          Lance une <b>quête d’XP avec un ami</b> : vous avez <b>6 jours</b> à partir du départ pour atteindre votre objectif d’XP ensemble et remporter <b>100 à 500 Or chacun</b> selon la quête choisie.
        </p>
        <div className="pt-1.5 border-t border-slate-200 dark:border-white/[0.06] flex items-start gap-2 text-slate-600 dark:text-slate-400">
          <Lock className="w-3.5 h-3.5 mt-0.5 shrink-0 text-amber-500" />
          <span>
            <b>Bientôt dans la Boutique :</b> personnages personnalisables, tenues exclusives et récompenses à débloquer avec ton Or !
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={onClose}
        className="w-full h-11 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-950 font-extrabold text-sm cursor-pointer transition-colors"
      >
        Compris
      </button>
    </div>
  </div>
);
