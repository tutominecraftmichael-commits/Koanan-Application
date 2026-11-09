import React, { useState } from 'react';
import { ShieldCheck, GraduationCap } from 'lucide-react';
import { PlanPicker } from '../../components/pricing/PlanPicker';
import { WaitlistModal } from '../../components/common/WaitlistModal';

export interface PricingSectionProps {
  onSelectPlan?: (planId: 'free' | 'pro' | 'plus') => void;
  isLoggedIn?: boolean;
  currentPlan?: 'free' | 'pro' | 'plus';
}

/**
 * Tarifs sur la page d'accueil : la même grille que dans l'inscription (Gratuit, Pro, Plus),
 * par mois ou par semestre. KONAN PLUS n'est pas encore ouvert : liste d'attente.
 */
export const PricingSection: React.FC<PricingSectionProps> = ({
  onSelectPlan,
  isLoggedIn = false,
  currentPlan = 'free',
}) => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <section
      id="pricing"
      data-section="pricing"
      className="relative py-8 sm:py-16 space-y-8 sm:space-y-10 scroll-mt-12 max-w-6xl mx-auto px-2 sm:px-4"
    >
      <div className="text-center space-y-2 max-w-2xl mx-auto px-2">
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Choisis ta formule <span className="text-sky-500">KONAN</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Commence gratuitement, passe au Pro quand tu veux. Paie au mois ou au semestre.
        </p>
      </div>

      <PlanPicker
        currentPlan={isLoggedIn ? currentPlan : undefined}
        onSelect={(planId) => {
          if (planId === 'plus') {
            setIsWaitlistOpen(true);
            return;
          }
          onSelectPlan?.(planId);
        }}
      />

      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
        <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-500" />Sans engagement</span>
        <span className="flex items-center gap-1.5"><GraduationCap className="w-4 h-4 text-sky-500" />Prix pensés pour les élèves</span>
      </div>

      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
        requiredTier="plus"
        featureTitle="KONAN PLUS"
        featureDescription="KONAN PLUS ouvre bientôt. Laisse ton contact : on te prévient dès l'ouverture. En attendant, KONAN PRO est offert."
      />
    </section>
  );
};
