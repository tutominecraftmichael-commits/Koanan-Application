import React from 'react';
import { X, Sparkles, Star, Check, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export interface ProFeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  featureTitle?: string;
  featureDescription?: string;
  onViewPricing?: () => void;
}

export const ProFeatureModal: React.FC<ProFeatureModalProps> = ({
  isOpen,
  onClose,
  featureTitle = 'Fonctionnalité KONAN PRO',
  featureDescription = 'Cette fonctionnalité est réservée aux abonnés du modèle KONAN PRO.',
  onViewPricing,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 border-2 border-sky-400/50 shadow-2xl shadow-sky-950/50 overflow-hidden flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-24 bg-gradient-to-b from-sky-500/20 to-transparent pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800/80 relative z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-sky-500/20 border border-sky-400/40 text-sky-300 flex items-center justify-center shadow-xs">
              <Star className="w-4 h-4 fill-sky-400 text-sky-400" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-black tracking-wider text-sky-400">Modèle Supérieur</span>
              <h3 className="text-base sm:text-lg font-black text-white leading-tight">
                {featureTitle}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 relative z-10 text-xs sm:text-sm text-slate-300">
          <div className="p-4 rounded-2xl bg-sky-950/30 border border-sky-500/30 space-y-2">
            <div className="flex items-center gap-2 text-sky-300 font-bold text-xs uppercase tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Inclus dans KONAN PRO</span>
            </div>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              {featureDescription}
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Ce que vous avez déjà dans votre version Gratuite (Free) :
            </span>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Importation complète d'EDT via tableau texte</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Génération d'un EDT personnel équilibré anti-burnout</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>3 méthodes gratuites : Pomodoro, Active Recall & Règle des 2 Min</span>
              </li>
            </ul>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-800">
            <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider block">
              Passez à KONAN PRO pour débloquer :
            </span>
            <ul className="space-y-1.5 text-xs text-sky-200">
              <li className="flex items-center gap-2">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
                <span>Assimilation profonde : Méthode de Feynman & Time Blocking</span>
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
                <span>Dates d'examens & priorisation automatique des révisions</span>
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
                <span>Rappels intelligents Google Agenda (15 min avant révision)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 sm:p-6 pt-3 border-t border-slate-800/80 flex items-center justify-end gap-3 relative z-10 bg-slate-900/40">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-xs"
          >
            Continuer avec KONAN Gratuit
          </Button>
          {onViewPricing && (
            <Button
              variant="glow"
              size="sm"
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              onClick={() => {
                onClose();
                onViewPricing();
              }}
              className="text-xs font-bold"
            >
              Voir les formules
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
