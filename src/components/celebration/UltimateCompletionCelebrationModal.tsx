import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  Clock, 
  X, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import { Button } from '../ui/Button';
import { soundFX } from '../../lib/audioEffects';
import { formatMinutesToHours } from '../../lib/utils';

export interface UltimateCompletionCelebrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
  studentName: string;
  totalPlannedMinutes: number;
  totalSessionsCount: number;
}

export const UltimateCompletionCelebrationModal: React.FC<UltimateCompletionCelebrationModalProps> = ({
  isOpen,
  onClose,
  onContinue,
  studentName,
  totalPlannedMinutes,
  totalSessionsCount,
}) => {
  const [progress, setProgress] = useState(0); // 0 to 100
  const [isSuspense, setIsSuspense] = useState(false);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Target minutes and hours format
  const targetMinutes = Math.max(totalPlannedMinutes, 60);
  const targetHoursText = formatMinutesToHours(targetMinutes);

  // Current animated minutes based on current progress percentage
  const currentMinutes = Math.min(targetMinutes, Math.round((progress / 100) * targetMinutes));
  const currentHoursText = formatMinutesToHours(currentMinutes);

  const fireConfetti = () => {
    try {
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#F59E0B', '#10B981', '#06B6D4', '#8B5CF6', '#FFFFFF'],
        disableForReducedMotion: true,
      });
    } catch {
      // Safe fallback if canvas-confetti fails
    }
  };

  const cleanupTimers = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const startAnimation = () => {
    cleanupTimers();

    setProgress(0);
    setIsSuspense(false);

    let current = 0;

    // Phase 1: Smooth fast progression 0% -> 98% (~1.8 seconds)
    intervalRef.current = setInterval(() => {
      if (current < 98) {
        current = Math.min(98, current + 2.2);
        setProgress(current);
      } else {
        // Reached 98%: pause and enter suspense phase cleanly
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }

        setIsSuspense(true);
        current = 98;
        setProgress(98);

        // Phase 2: Slow climb from 98% to 99% in 700ms
        timeoutRef.current = setTimeout(() => {
          current = 99;
          setProgress(99);

          // Phase 3: Climax leap to 100% in 600ms
          timeoutRef.current = setTimeout(() => {
            current = 100;
            setProgress(100);
            setIsSuspense(false);

            // Triumphant sound and confetti
            soundFX.playMinecraftAdvancementSound();
            fireConfetti();
          }, 600);

        }, 700);
      }
    }, 40);
  };

  useEffect(() => {
    if (isOpen) {
      startAnimation();
    } else {
      cleanupTimers();
    }
    return () => {
      cleanupTimers();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const displayProgressRounded = Math.min(100, Math.floor(progress));

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="w-[30rem] h-[30rem] rounded-full bg-amber-500/10 blur-3xl animate-pulse" />
        <div className="w-[24rem] h-[24rem] rounded-full bg-indigo-500/10 blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative w-full max-w-xl rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 border border-amber-500/30 shadow-2xl shadow-amber-500/15 overflow-hidden flex flex-col p-5 sm:p-7 space-y-5 text-center">

        {/* Top Control Bar: Close only */}
        <div className="flex items-center justify-end pb-1">
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* CLEAN ACHIEVEMENT BANNER */}
        <div className="mx-auto w-full max-w-md p-3 sm:p-3.5 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-amber-400/60 shadow-lg shadow-amber-500/15 flex items-center gap-3.5 text-left">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-300 p-0.5 shadow-md shrink-0 flex items-center justify-center">
            <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-amber-400 animate-bounce" />
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <span className="text-[11px] font-black uppercase tracking-wider text-amber-400">
              ⚡ OBJECTIF DE LA SEMAINE ATTEINT !
            </span>
            <h4 className="text-xs sm:text-sm font-bold text-white truncate">
              Toutes vos sessions de révision sont validées
            </h4>
          </div>
        </div>

        {/* CONGRATULATIONS HEADLINE & MESSAGE */}
        <div className="space-y-1.5 px-1">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Félicitations, <span className="text-gradient-primary">{studentName}</span> ! 🌟
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
            Tu as validé <strong className="text-white font-bold">100% de ton programme d'étude</strong> et accompli la totalité de tes <span className="text-amber-400 font-bold">{targetHoursText}</span> de travail !
          </p>
        </div>

        {/* DUAL ANIMATED PROGRESS BARS */}
        <div className="space-y-4 p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 text-left">

          {/* BAR 1: COMPLÉTION (0% -> 98% -> 99% -> 100%) */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Taux de Complétion Global</span>
              </span>
              <span className={`font-mono font-black text-sm transition-all ${
                displayProgressRounded === 100 
                  ? 'text-emerald-400 scale-110' 
                  : isSuspense 
                  ? 'text-amber-400 animate-pulse' 
                  : 'text-cyan-400'
              }`}>
                {displayProgressRounded}%
              </span>
            </div>

            <div className="w-full h-3.5 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800 relative">
              <div 
                className={`h-full rounded-full transition-all duration-75 relative ${
                  displayProgressRounded === 100
                    ? 'bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 shadow-md shadow-emerald-500/50'
                    : isSuspense
                    ? 'bg-gradient-to-r from-amber-500 to-amber-300 shadow-md shadow-amber-500/40'
                    : 'bg-gradient-to-r from-indigo-500 to-cyan-400'
                }`}
                style={{ width: `${progress}%` }}
              >
                {/* Glowing light edge */}
                <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/80 rounded-full blur-[1px] shadow-sm" />
              </div>
            </div>
          </div>

          {/* BAR 2: HEURES RÉALISÉES (0h00 -> TOTAL HEURES DEMANDÉES) */}
          <div className="space-y-1.5 pt-1 border-t border-slate-850">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-300 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Volume d'Heures Réalisées</span>
              </span>
              <div className="font-mono text-xs sm:text-sm flex items-center gap-1">
                <span className={`font-black ${
                  displayProgressRounded === 100 
                    ? 'text-amber-300 scale-110' 
                    : isSuspense 
                    ? 'text-amber-400 animate-pulse' 
                    : 'text-white'
                }`}>
                  {currentHoursText}
                </span>
                <span className="text-slate-400 font-normal">/ {targetHoursText}</span>
              </div>
            </div>

            <div className="w-full h-3.5 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800 relative">
              <div 
                className={`h-full rounded-full transition-all duration-75 relative ${
                  displayProgressRounded === 100
                    ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 shadow-md shadow-amber-500/50'
                    : isSuspense
                    ? 'bg-gradient-to-r from-amber-600 to-amber-400 shadow-md shadow-amber-500/40'
                    : 'bg-gradient-to-r from-amber-500 to-yellow-500'
                }`}
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/80 rounded-full blur-[1px] shadow-sm" />
              </div>
            </div>
          </div>

        </div>

        {/* STATS BADGES */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <p className="text-[10px] text-slate-400 uppercase font-semibold">Sessions</p>
            <p className="text-xs sm:text-sm font-bold text-white font-mono mt-0.5">
              {totalSessionsCount} / {totalSessionsCount}
            </p>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <p className="text-[10px] text-slate-400 uppercase font-semibold">Total Heures</p>
            <p className="text-xs sm:text-sm font-bold text-amber-400 font-mono mt-0.5">
              {targetHoursText}
            </p>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <p className="text-[10px] text-slate-400 uppercase font-semibold">Statut</p>
            <p className="text-xs sm:text-sm font-bold text-emerald-400 font-mono mt-0.5">
              100% Validé
            </p>
          </div>
        </div>

        {/* ACTION BUTTON */}
        <div className="pt-2 flex items-center justify-center">
          <Button
            variant="glow"
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            onClick={onContinue}
            className="w-full sm:w-auto text-xs sm:text-sm py-2.5 px-6 font-bold cursor-pointer bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 border-amber-400/50 shadow-lg shadow-amber-500/25"
          >
            Continuer vers mon Tableau de Bord
          </Button>
        </div>

      </div>
    </div>
  );
};
