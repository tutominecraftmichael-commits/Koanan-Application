import React, { useEffect } from 'react';
import { 
  Sparkles, 
  Crown, 
  Brain, 
  Calendar, 
  Target, 
  ArrowRight,
  CheckCircle2,
  X
} from 'lucide-react';
import { Button } from '../ui/Button';
import { soundFX } from '../../lib/audioEffects';

export interface SuperProActivationModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentName?: string;
}

export const SuperProActivationModal: React.FC<SuperProActivationModalProps> = ({
  isOpen,
  onClose,
  studentName = 'Étudiant',
}) => {
  useEffect(() => {
    if (isOpen) {
      soundFX.playSuccessChime();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const superFeatures = [
    {
      icon: Brain,
      title: "Combinaison Triple d'Espacement",
      desc: "Combinez jusqu'à 3 techniques simultanément (Feynman, Time Blocking, Active Recall). Vos séances alternent automatiquement.",
      tag: "Exclusivité PRO",
      color: "from-amber-500/20 to-yellow-500/10 border-amber-500/30 text-amber-300",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    },
    {
      icon: Target,
      title: "Adaptation Examens & Devoirs",
      desc: "Indiquez vos dates de partiels et devoirs surveillés. L'algorithme intensifie automatiquement vos révisions à l'approche du jour J.",
      tag: "Priorité Intelligente",
      color: "from-sky-500/20 to-blue-500/10 border-sky-500/30 text-sky-300",
      badgeColor: "bg-sky-500/20 text-sky-300 border-sky-500/40",
    },
    {
      icon: Calendar,
      title: "Synchronisation Quotidienne Google Agenda",
      desc: "Tout votre planning d'étude pour tous les jours de la semaine est synchronisé automatiquement avec récurrence hebdomadaire.",
      tag: "Automatique",
      color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-300",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    },
    {
      icon: Crown,
      title: "Statut Membre d'Élite & Nom Doré",
      desc: "Votre nom brille désormais d'un éclat d'or métallique animé sur toute l'application. Vous êtes prêt pour l'excellence académique.",
      tag: "Prestige 24K",
      color: "from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-300",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-300 overflow-y-auto">
      
      {/* Golden Super Ambient Background Halo */}
      <div className="fixed inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full bg-gradient-to-tr from-amber-500/15 via-yellow-500/10 to-transparent blur-3xl opacity-75 animate-pulse" />
      </div>

      <div 
        role="dialog" 
        aria-modal="true"
        className="relative w-full max-w-xl rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/98 to-slate-950 border-2 border-amber-400/60 shadow-2xl shadow-amber-950/70 overflow-hidden flex flex-col my-auto max-h-[92vh]"
      >
        
        {/* Top Header Shimmer Bar */}
        <div className="h-2 w-full bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 animate-shimmer" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors z-20 cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto relative z-10 text-center">
          
          {/* Duolingo Super-style Emblem & Badge */}
          <div className="flex flex-col items-center space-y-3 pt-2">
            <div className="relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-amber-600 via-yellow-500 to-amber-300 p-0.5 shadow-2xl shadow-amber-500/40 flex items-center justify-center animate-bounce-slow">
                <div className="w-full h-full rounded-[22px] bg-slate-950/90 flex items-center justify-center">
                  <Crown className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.6)]" />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 p-1.5 rounded-xl bg-amber-400 text-slate-950 shadow-md">
                <Sparkles className="w-4 h-4 fill-slate-950" />
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                ⭐ MODÈLE DÉBLOQUÉ
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight pt-1">
                Bienvenue dans <span className="gold-shimmer-text">KONAN PRO</span> !
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto pt-1 leading-relaxed">
                Félicitations <span className="gold-shimmer-text font-bold">{studentName}</span>, votre compte est désormais propulsé avec tous les super-pouvoirs académiques.
              </p>
            </div>
          </div>

          {/* Super Features Showcase Cards */}
          <div className="space-y-2.5 text-left">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center sm:text-left">
              Voici ce que vous venez d'activer :
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {superFeatures.map((feat, i) => {
                const IconComponent = feat.icon;
                return (
                  <div 
                    key={i}
                    className={`p-3.5 rounded-2xl bg-gradient-to-br ${feat.color} border shadow-sm flex flex-col justify-between gap-2.5 hover:scale-[1.02] transition-transform`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="p-2 rounded-xl bg-slate-950/60 border border-white/10 shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className={`text-[9px] font-black px-2 py-0.5 rounded-full border ${feat.badgeColor} uppercase tracking-wider`}>
                        {feat.tag}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-[13px] font-extrabold text-white leading-snug">
                        {feat.title}
                      </h4>
                      <p className="text-[11px] text-slate-300 leading-relaxed mt-1">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Super Duolingo CTA Button */}
          <div className="pt-2">
            <Button
              variant="glow"
              size="lg"
              onClick={onClose}
              rightIcon={<ArrowRight className="w-5 h-5" />}
              className="w-full text-sm sm:text-base font-black py-4 !bg-gradient-to-r !from-amber-500 !via-yellow-400 !to-amber-500 !text-slate-950 !border-amber-300 shadow-2xl shadow-amber-500/50 hover:scale-[1.02] active:scale-98 transition-all cursor-pointer"
            >
              Découvrir mon Espace KONAN PRO 🚀
            </Button>
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-3">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Planning optimisé et synchronisé en temps réel</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
