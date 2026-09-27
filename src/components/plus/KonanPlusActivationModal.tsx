import React, { useEffect } from 'react';
import { 
  Crown, 
  Users, 
  Target, 
  Headphones, 
  MessageSquare, 
  Sparkles, 
  ArrowRight,
  X
} from 'lucide-react';
import { Button } from '../ui/Button';
import { soundFX } from '../../lib/audioEffects';

export interface KonanPlusActivationModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentName?: string;
  onOpenGroupModal?: () => void;
  onOpenGoalModal?: () => void;
  onOpenCoachingModal?: () => void;
}

export const KonanPlusActivationModal: React.FC<KonanPlusActivationModalProps> = ({
  isOpen,
  onClose,
  studentName = 'Étudiant',
  onOpenGroupModal,
  onOpenGoalModal,
  onOpenCoachingModal,
}) => {
  useEffect(() => {
    if (isOpen) {
      soundFX.playVictoryCelebration();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-300 overflow-y-auto">
      
      {/* Royal Ambient Glow Background */}
      <div className="fixed inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-amber-500/15 blur-3xl opacity-80 animate-pulse" />
      </div>

      <div 
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-xl rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/98 to-slate-950 border-2 border-indigo-400/70 shadow-2xl shadow-indigo-950/80 overflow-hidden flex flex-col my-auto max-h-[92vh]"
      >
        {/* Top Header Shimmer Bar */}
        <div className="h-2.5 w-full bg-gradient-to-r from-indigo-500 via-amber-300 to-purple-500 animate-shimmer" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors z-20 cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto relative z-10 text-center custom-scrollbar">
          
          {/* Emblem & Title */}
          <div className="flex flex-col items-center space-y-3 pt-2">
            <div className="relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-amber-400 p-0.5 shadow-2xl shadow-indigo-500/50 flex items-center justify-center animate-bounce-slow">
                <div className="w-full h-full rounded-[22px] bg-slate-950/95 flex items-center justify-center">
                  <Crown className="w-10 h-10 sm:w-12 sm:h-12 text-amber-300 drop-shadow-[0_0_15px_rgba(251,191,36,0.7)]" />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 p-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 shadow-md">
                <Sparkles className="w-4 h-4 fill-current" />
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 inline-flex items-center gap-1.5">
                <Crown className="w-3.5 h-3.5 text-amber-300" />
                FORMULE COMPLÈTE & ÉLITE
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight pt-1">
                Bienvenue dans <span className="text-gradient-primary">KONAN PLUS</span> !
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto pt-1 leading-relaxed">
                Félicitations <strong className="text-white">{studentName}</strong> ! Vous venez de débloquer l'expérience d'excellence académique la plus avancée.
              </p>
            </div>
          </div>

          {/* 4 Super Exclusive Features Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            
            {/* 1. 4 Accounts */}
            <div 
              onClick={() => {
                onClose();
                onOpenGroupModal?.();
              }}
              className="p-3.5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 hover:border-indigo-400 transition-all cursor-pointer interactive-card shadow-sm space-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-300">
                  <Users className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold text-emerald-400 uppercase">
                  4 Inclus
                </span>
              </div>
              <h3 className="font-extrabold text-white text-xs sm:text-sm pt-1">
                Groupe d'Étude (4 Comptes)
              </h3>
              <p className="text-[11px] text-slate-300 leading-snug">
                Invitez jusqu'à 4 amis via leur email pour leur donner un accès gratuit complet.
              </p>
            </div>

            {/* 2. Target Goal */}
            <div 
              onClick={() => {
                onClose();
                onOpenGoalModal?.();
              }}
              className="p-3.5 rounded-2xl bg-purple-950/40 border border-purple-500/30 hover:border-purple-400 transition-all cursor-pointer interactive-card shadow-sm space-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300">
                  <Target className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold text-amber-300 uppercase">
                  3 Niveaux
                </span>
              </div>
              <h3 className="font-extrabold text-white text-xs sm:text-sm pt-1">
                Objectifs 12, 16 ou Major
              </h3>
              <p className="text-[11px] text-slate-300 leading-snug">
                L'algorithme calibre l'effort selon le niveau d'excellence visé.
              </p>
            </div>

            {/* 3. Coach 1-on-1 */}
            <div 
              onClick={() => {
                onClose();
                onOpenCoachingModal?.();
              }}
              className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-500/30 hover:border-amber-400 transition-all cursor-pointer interactive-card shadow-sm space-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold text-amber-300 uppercase">
                  2x / semaine
                </span>
              </div>
              <h3 className="font-extrabold text-white text-xs sm:text-sm pt-1">
                Tête-à-tête Coach Konan
              </h3>
              <p className="text-[11px] text-slate-300 leading-snug">
                15 min chrono dans votre EDT avec Konan pour débloquer les matières clés.
              </p>
            </div>

            {/* 4. Audio Soundscapes */}
            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-700 space-y-1">
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-xl bg-slate-800 text-cyan-300">
                  <Headphones className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold text-cyan-300 uppercase">
                  5 Sons
                </span>
              </div>
              <h3 className="font-extrabold text-white text-xs sm:text-sm pt-1">
                Ondes Alpha & Lofi
              </h3>
              <p className="text-[11px] text-slate-300 leading-snug">
                Ambiances sonores intégrées générées pour stimuler la concentration et le repos.
              </p>
            </div>

          </div>

          {/* Action Button */}
          <div className="pt-2 space-y-2.5">
            <Button
              variant="glow"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              onClick={onClose}
              className="w-full text-xs sm:text-sm font-black py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:scale-[1.02] active:scale-95 transition-transform cursor-pointer shadow-xl shadow-indigo-950/60"
            >
              Découvrir mon Espace Konan Plus
            </Button>
            <p className="text-[11px] text-slate-400">
              Synchronisation automatique Google Agenda pour tous les jours activée.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
