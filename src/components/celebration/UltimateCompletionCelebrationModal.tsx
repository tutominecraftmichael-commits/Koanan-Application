import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  Sparkles, 
  Clock, 
  RotateCcw, 
  X, 
  CheckCircle2, 
  Volume2, 
  VolumeX,
  ArrowRight
} from 'lucide-react';
import { Button } from '../ui/Button';
import { soundFX } from '../../lib/audioEffects';
import { formatMinutesToHours } from '../../lib/utils';

export interface UltimateCompletionCelebrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentName: string;
  totalPlannedMinutes: number;
  totalSessionsCount: number;
}

export const UltimateCompletionCelebrationModal: React.FC<UltimateCompletionCelebrationModalProps> = ({
  isOpen,
  onClose,
  studentName,
  totalPlannedMinutes,
  totalSessionsCount,
}) => {
  const [progress, setProgress] = useState(0); // 0 to 100
  const [isSuspense, setIsSuspense] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const lastTickPercentRef = useRef<number>(0);
  const hasTriggeredFanfareRef = useRef<boolean>(false);

  // Target minutes and hours format
  const targetMinutes = Math.max(totalPlannedMinutes, 60);
  const targetHoursText = formatMinutesToHours(targetMinutes);

  // Current animated minutes based on current progress percentage
  const currentMinutes = Math.min(targetMinutes, Math.round((progress / 100) * targetMinutes));
  const currentHoursText = formatMinutesToHours(currentMinutes);

  const fireConfettiSalvo = () => {
    // 1. Left cannon
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 70,
      origin: { x: 0.1, y: 0.7 },
      colors: ['#F59E0B', '#10B981', '#06B6D4', '#8B5CF6', '#F43F5E', '#FFFFFF'],
    });
    // 2. Right cannon
    confetti({
      particleCount: 80,
      angle: 120,
      spread: 70,
      origin: { x: 0.9, y: 0.7 },
      colors: ['#F59E0B', '#10B981', '#06B6D4', '#8B5CF6', '#F43F5E', '#FFFFFF'],
    });
    // 3. Center starburst
    setTimeout(() => {
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#F59E0B', '#FBBF24', '#34D399', '#60A5FA', '#E879F9'],
      });
    }, 250);
  };

  const startAnimation = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    setProgress(0);
    setIsSuspense(false);
    setIsFinished(false);
    lastTickPercentRef.current = 0;
    hasTriggeredFanfareRef.current = false;
    startTimeRef.current = performance.now();

    /**
     * Animation Timeline:
     * Phase 1: 0ms -> 2200ms : Rapid acceleration from 0% to 98%
     * Phase 2: 2200ms -> 3000ms (800ms) : Suspense slowdown 98% -> 99%
     * Phase 3: 3000ms -> 3800ms (800ms) : Suspense crawl 99% -> 100%
     * Phase 4: At 3800ms : 100% hit! Minecraft fanfare + Confetti explosion!
     */
    const animate = (now: number) => {
      if (!startTimeRef.current) startTimeRef.current = now;
      const elapsed = now - startTimeRef.current;

      let currentPct = 0;

      if (elapsed < 2200) {
        // Fast energetic climb to 98%
        const t = elapsed / 2200;
        currentPct = Math.min(98, Math.round(t * 98));
        setIsSuspense(false);

        // Sound ticks every 5%
        if (currentPct - lastTickPercentRef.current >= 5) {
          lastTickPercentRef.current = currentPct;
          soundFX.playTensionTick(currentPct / 100);
        }
      } else if (elapsed < 3000) {
        // Slowing down at 98% -> 99%
        setIsSuspense(true);
        if (lastTickPercentRef.current < 98) {
          lastTickPercentRef.current = 98;
          soundFX.playSuspenseHeartbeat();
        }
        const phase2Elapsed = elapsed - 2200;
        const subT = phase2Elapsed / 800;
        currentPct = 98 + subT * 1;
      } else if (elapsed < 3800) {
        // Crawling 99% -> 100%
        setIsSuspense(true);
        const phase3Elapsed = elapsed - 3000;
        const subT = phase3Elapsed / 800;
        currentPct = 99 + subT * 1;
      } else {
        // 100% ACHIEVED!
        currentPct = 100;
        setProgress(100);
        setIsSuspense(false);
        setIsFinished(true);

        if (!hasTriggeredFanfareRef.current) {
          hasTriggeredFanfareRef.current = true;
          soundFX.playMinecraftAdvancementSound();
          fireConfettiSalvo();
        }
        return;
      }

      setProgress(Math.min(100, currentPct));
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (isOpen) {
      startAnimation();
    } else {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isOpen]);

  const toggleSound = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    soundFX.setMuted(nextMuted);
  };

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

      <div className="relative w-full max-w-xl rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 border-2 border-amber-500/40 shadow-2xl shadow-amber-500/20 overflow-hidden flex flex-col p-5 sm:p-7 space-y-5 text-center">

        {/* Top Control Bar: Audio toggle & Close */}
        <div className="flex items-center justify-between pb-1">
          <button
            onClick={toggleSound}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-300 hover:text-white text-xs transition-colors cursor-pointer"
            title={isMuted ? 'Activer le son' : 'Désactiver le son'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-rose-400" /> : <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />}
            <span className="text-[11px] font-medium">{isMuted ? 'Son coupé' : 'Son actif'}</span>
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* MINECRAFT STYLE ADVANCEMENT TOAST BANNER */}
        <div className="mx-auto w-full max-w-md p-3 sm:p-3.5 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-2 border-amber-400/80 shadow-lg shadow-amber-500/25 flex items-center gap-3.5 text-left transform transition-transform hover:scale-[1.02]">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-300 p-0.5 shadow-md shrink-0 flex items-center justify-center">
            <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center">
              <Trophy className="w-6 h-6 text-amber-400 animate-bounce" />
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-black uppercase tracking-widest text-amber-400 drop-shadow-sm">
                ⚡ DÉFI ACCOMPLI !
              </span>
              {isFinished && (
                <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 text-[9px] font-mono font-bold border border-amber-500/40">
                  FULL NETHERITE
                </span>
              )}
            </div>
            <h4 className="text-xs sm:text-sm font-extrabold text-white truncate drop-shadow-xs">
              Progression Ultime : Maître Absolu du Planning
            </h4>
          </div>
        </div>

        {/* EXCEPTIONAL CONGRATULATIONS HEADLINE & MESSAGE */}
        <div className="space-y-2 px-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>ACCOMPLISSEMENT EXCEPTIONNEL</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Félicitations exceptionnelles, <span className="text-gradient-primary">{studentName}</span> ! 🌟
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
            Tu as validé <strong className="text-white font-bold">100% de ton programme d'étude</strong> et atteint le volume maximal de <span className="text-amber-400 font-bold">{targetHoursText}</span> de révision avec une rigueur absolue !
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

            {isSuspense && !isFinished && (
              <p className="text-[10px] text-amber-300/90 font-mono italic animate-pulse text-right">
                ⏳ Décélération finale... 98%... 99%...
              </p>
            )}
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

        {/* ACTION BUTTONS */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            variant="secondary"
            size="sm"
            leftIcon={<RotateCcw className="w-3.5 h-3.5" />}
            onClick={startAnimation}
            className="w-full sm:w-auto text-xs py-2 px-4 cursor-pointer"
          >
            Rejouer l'animation
          </Button>

          <Button
            variant="glow"
            size="sm"
            rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
            onClick={onClose}
            className="w-full sm:w-auto text-xs py-2.5 px-5 font-bold cursor-pointer bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 border-amber-400/50 shadow-lg shadow-amber-500/25"
          >
            Continuer sur mon Tableau de Bord
          </Button>
        </div>

      </div>
    </div>
  );
};
