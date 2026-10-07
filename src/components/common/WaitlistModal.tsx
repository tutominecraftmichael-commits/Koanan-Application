import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  Lock, 
  CheckCircle2, 
  ShieldCheck, 
  Smartphone, 
  Mail, 
  ArrowRight,
  Crown
} from 'lucide-react';
import { Button } from '../ui/Button';
import { registerToWaitlist } from '../../services/waitlistService';
import { soundFX } from '../../lib/audioEffects';
import type { PlanTier } from '../../types';

export interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  featureTitle?: string;
  featureDescription?: string;
  requiredTier?: PlanTier;
  userEmail?: string;
  userId?: string;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({
  isOpen,
  onClose,
  featureTitle = 'Fonctionnalité Avancée',
  featureDescription,
  requiredTier = 'pro',
  userEmail = '',
  userId = '',
}) => {
  const isPlus = requiredTier === 'plus';
  const priceBadge = isPlus ? '2 500 FCFA / mois • Offre Trimestre' : '1 200 FCFA / mois';

  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Pré-remplir l'email si connecté
  useEffect(() => {
    if (userEmail) {
      setEmail(userEmail);
    }
  }, [userEmail]);

  // Jouer un son doux à l'ouverture
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setErrorMessage(null);
      soundFX.playCheckmarkPop();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMessage('Veuillez renseigner une adresse email valide.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      await registerToWaitlist({
        userId,
        email,
        phoneNumber,
        requestedTier: requiredTier,
        featureName: featureTitle,
        source: 'waitlist_modal',
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
      soundFX.playVictoryCelebration();
    } catch {
      setIsSubmitting(false);
      setIsSubmitted(true); // Succès optimiste en cas de sauvegarde locale
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/85 backdrop-blur-xl animate-in fade-in duration-200 overflow-y-auto">
      
      {/* Halo lumineux d'ambiance */}
      <div className="fixed inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className={`w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full blur-3xl opacity-60 animate-pulse ${
          isPlus 
            ? 'bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-transparent' 
            : 'bg-gradient-to-tr from-amber-500/20 via-yellow-500/15 to-transparent'
        }`} />
      </div>

      <div 
        role="dialog"
        aria-modal="true"
        className={`relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/98 to-slate-950 border-2 shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh] ${
          isPlus 
            ? 'border-indigo-500/50 shadow-indigo-950/60' 
            : 'border-amber-400/50 shadow-amber-950/60'
        }`}
      >
        {/* Barre lumineuse supérieure */}
        <div className={`h-2 w-full animate-shimmer ${
          isPlus 
            ? 'bg-gradient-to-r from-indigo-500 via-purple-400 to-indigo-500' 
            : 'bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500'
        }`} />

        {/* Bouton Fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors z-20 cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto relative z-10 text-center">
          
          {/* En-tête avec Icône & Badges */}
          <div className="flex flex-col items-center space-y-3 pt-1">
            <div className="relative">
              <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-3xl p-0.5 shadow-2xl flex items-center justify-center ${
                isPlus 
                  ? 'bg-gradient-to-tr from-indigo-500 via-purple-500 to-sky-400 shadow-indigo-500/30' 
                  : 'bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-300 shadow-amber-500/30'
              }`}>
                <div className="w-full h-full rounded-[22px] bg-slate-950/90 flex items-center justify-center">
                  {isPlus ? (
                    <Crown className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-400 drop-shadow-[0_0_12px_rgba(99,102,241,0.5)]" />
                  ) : (
                    <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.5)]" />
                  )}
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 p-1.5 rounded-xl bg-slate-900 border border-slate-700 text-amber-400 shadow-md">
                <Lock className="w-3.5 h-3.5 text-amber-400" />
              </div>
            </div>

            {/* Badges : Tarif prévu & Statut */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              <span className={`text-[10px] sm:text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${
                isPlus 
                  ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40' 
                  : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
              }`}>
                ⭐ {priceBadge}
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                🚀 Bientôt disponible
              </span>
            </div>

            {/* Titre officiel exigé */}
            <div className="space-y-1.5 pt-1">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Fonctionnalité {isPlus ? 'Plus' : 'Pro / Plus'} en approche
              </h2>
              <div className="inline-block px-3 py-1 rounded-xl bg-slate-800/80 border border-slate-700 text-xs font-semibold text-slate-200">
                🔒 {featureTitle}
              </div>
            </div>
          </div>

          {/* Message clair sur Wave & Orange Money */}
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-left space-y-3 shadow-inner">
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Cette fonctionnalité arrive très bientôt avec le paiement simplifié par <strong className="text-sky-400">Wave</strong> et <strong className="text-amber-400">Orange Money</strong>.
            </p>
            {featureDescription && (
              <p className="text-xs text-slate-400 border-t border-slate-800/80 pt-2 leading-relaxed">
                {featureDescription}
              </p>
            )}

            {/* Badges visuels Wave / Orange Money */}
            <div className="flex items-center gap-2 pt-1">
              <div className="px-2.5 py-1 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 text-[11px] font-black flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                Wave Côte d'Ivoire
              </div>
              <div className="px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-black flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                Orange Money
              </div>
            </div>
          </div>

          {/* Formulaire Liste d'attente */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">
                  Votre adresse email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="etudiant@universite.ci"
                    required
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white text-xs sm:text-sm placeholder:text-slate-500 focus:outline-hidden focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">
                    Numéro Wave / Orange Money <span className="text-slate-500 font-normal lowercase">(facultatif)</span>
                  </label>
                </div>
                <div className="relative">
                  <Smartphone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="07 00 00 00 00"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white text-xs sm:text-sm placeholder:text-slate-500 focus:outline-hidden focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                  />
                </div>
              </div>

              {errorMessage && (
                <p className="text-xs text-rose-400 font-medium">
                  {errorMessage}
                </p>
              )}

              {/* Bouton d'action exigé */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="glow"
                  size="md"
                  disabled={isSubmitting}
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className={`w-full py-3.5 text-xs sm:text-sm font-black transition-all cursor-pointer ${
                    isPlus
                      ? '!bg-gradient-to-r !from-indigo-600 !to-purple-600 !text-white !border-indigo-400'
                      : '!bg-gradient-to-r !from-amber-500 !via-yellow-400 !to-amber-500 !text-slate-950 !border-amber-300 shadow-xl shadow-amber-500/30'
                  }`}
                >
                  {isSubmitting ? 'Enregistrement en cours...' : 'Être notifié du lancement'}
                </Button>
              </div>
            </form>
          ) : (
            /* Confirmation après inscription */
            <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 text-center space-y-2.5 animate-in zoom-in-95 duration-200">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                Inscription enregistrée sur la liste d'attente !
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Merci ! Dès que l'intégration Mobile Money (Wave et Orange Money) sera active, vous recevrez une alerte prioritaire avec tarif préférentiel.
              </p>
            </div>
          )}

          {/* Lien de repli : Continuer en Gratuit */}
          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
            <button
              type="button"
              onClick={onClose}
              className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              ← Continuer avec la version Gratuite
            </button>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Zéro débit bancaire imprévu</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
