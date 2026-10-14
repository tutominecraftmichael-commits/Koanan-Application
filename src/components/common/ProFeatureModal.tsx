import React from 'react';
import { WaitlistModal } from './WaitlistModal';
import { Button } from '../ui/Button';
import { X, ArrowRight, Check } from 'lucide-react';
import type { PlanTier } from '../../types';

export interface ProFeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  featureTitle?: string;
  featureDescription?: string;
  requiredTier?: PlanTier;
  userEmail?: string;
  userId?: string;
  onViewPricing?: () => void;
  onUpgradeToPro?: () => void;
}

/**
 * Modale d'accès à la fonctionnalité Pro / Plus.
 * Pour le modèle Pro : propose l'accès direct offert et le lancement du parcours guidé.
 * Pour le modèle Plus : délègue vers la liste d'attente Mobile Money.
 */
export const ProFeatureModal: React.FC<ProFeatureModalProps> = ({
  isOpen,
  onClose,
  featureTitle = 'Fonctionnalité réservée aux membres Pro',
  featureDescription,
  requiredTier = 'pro',
  userEmail = '',
  userId = '',
  onUpgradeToPro,
}) => {
  if (!isOpen) return null;

  // Si palier Plus, reste sur la liste d'attente
  if (requiredTier === 'plus') {
    return (
      <WaitlistModal
        isOpen={isOpen}
        onClose={onClose}
        featureTitle={featureTitle}
        featureDescription={featureDescription}
        requiredTier={requiredTier}
        userEmail={userEmail}
        userId={userId}
      />
    );
  }

  // Modale Apple Minimaliste pour Konan PRO (Offre Découverte)
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-7 space-y-5 animate-in zoom-in-95 duration-200 text-slate-900 dark:text-slate-100"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-900 text-white dark:bg-white dark:text-slate-900 border border-slate-700/50 dark:border-slate-300">
              PRO
            </span>
            <span className="text-[11px] font-semibold text-slate-500">
              Accès Découverte Offert
            </span>
          </div>

          <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
            {featureTitle}
          </h3>

          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {featureDescription || "Cette fonctionnalité avancée fait partie intégrante de Konan Pro. Profitez de l'accès complet offert pour reconfigurer votre emploi du temps et synchroniser vos rappels d'étude."}
          </p>
        </div>

        {/* Avantages clés */}
        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800/80 space-y-2 text-xs">
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
            <Check className="w-3.5 h-3.5 text-slate-900 dark:text-white shrink-0" />
            <span>Méthodes exclusives (Feynman, Time Blocking, Multi-méthodes)</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
            <Check className="w-3.5 h-3.5 text-slate-900 dark:text-white shrink-0" />
            <span>Surpondération automatique des devoirs et examens</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
            <Check className="w-3.5 h-3.5 text-slate-900 dark:text-white shrink-0" />
            <span>Export et rappels automatiques Google Agenda</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-2 pt-1">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors cursor-pointer order-2 sm:order-1"
          >
            Rester en Gratuit
          </button>

          <Button
            variant="primary"
            size="md"
            onClick={() => {
              onClose();
              if (onUpgradeToPro) onUpgradeToPro();
            }}
            rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
            className="w-full sm:flex-1 text-xs font-bold py-2.5 order-1 sm:order-2 shadow-md"
          >
            Configurer avec Konan Pro
          </Button>
        </div>
      </div>
    </div>
  );
};
