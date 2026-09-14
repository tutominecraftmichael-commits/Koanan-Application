import React, { useEffect, useState } from 'react';
import { X, CheckCircle2, Sparkles, Trophy, Volume2, VolumeX, Snowflake, Calendar as CalendarIcon } from 'lucide-react';
import { BlueFlame } from '../../components/common/BlueFlame';
import { StreakCalendar } from '../../components/common/StreakCalendar';
import { soundFX } from '../../lib/audioEffects';
import { DAYS_OF_WEEK } from '../../types';

export interface BlueFlameStreakModalProps {
  isOpen: boolean;
  onClose: () => void;
  streakCount: number;
  bestStreak?: number;
  studentName: string;
  dayName?: string;
  completedSubjects?: string[];
  isCelebration?: boolean; // True if just unlocked today, false if viewing stats
  isFlameActive?: boolean; // Controls whether the flame is lit & animated
  rendezvousMessage?: string; // e.g. "Rendez-vous Lundi !"
  freezesAvailable?: number; // 0 to 3
  completedDates?: string[];
  freezeDates?: string[];
}

export const BlueFlameStreakModal: React.FC<BlueFlameStreakModalProps> = ({
  isOpen,
  onClose,
  streakCount,
  bestStreak = 1,
  studentName,
  dayName,
  completedSubjects = [],
  isCelebration = true,
  isFlameActive,
  rendezvousMessage,
  freezesAvailable = 3,
  completedDates = [],
  freezeDates = [],
}) => {
  const [isMuted, setIsMuted] = useState(soundFX.getMuted());
  const [showConfettiSparks, setShowConfettiSparks] = useState(true);

  const currentDayIndex = (new Date().getDay() + 6) % 7;
  const currentDayLabel = dayName || DAYS_OF_WEEK.find(d => d.id === currentDayIndex)?.label || 'Aujourd’hui';

  // Flame is lit and animated if it's a celebration or if today's revisions are complete
  const isFlameLit = isCelebration ? true : (isFlameActive ?? false);

  useEffect(() => {
    if (isOpen && isCelebration) {
      soundFX.playStreakIgniteChime();
      setShowConfettiSparks(true);
      const timer = setTimeout(() => setShowConfettiSparks(false), 3500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, isCelebration]);

  if (!isOpen) return null;

  const toggleSound = () => {
    const next = !isMuted;
    setIsMuted(next);
    soundFX.setMuted(next);
    if (!next) {
      soundFX.playStreakIgniteChime();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-slate-950/85 backdrop-blur-xl animate-in fade-in duration-300">
      
      {/* Background Animated Light Rays (only when flame is lit) */}
      {isFlameLit && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
          <div className="w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full bg-radial from-blue-600/20 via-sky-500/10 to-transparent blur-3xl animate-pulse-slow" />
        </div>
      )}

      {/* Floating Spark Particles for Celebration */}
      {showConfettiSparks && isFlameLit && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(24)].map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full animate-float shadow-lg"
              style={{
                width: 4 + (i % 4) * 2,
                height: 4 + (i % 4) * 2,
                left: `${10 + (i * 7.5) % 80}%`,
                top: `${15 + (i * 11) % 70}%`,
                backgroundColor: i % 3 === 0 ? '#38BDF8' : i % 3 === 1 ? '#60A5FA' : '#93C5FD',
                boxShadow: '0 0 10px #38bdf8',
                animationDuration: `${2.5 + (i % 3) * 0.8}s`,
                animationDelay: `${(i % 5) * 0.2}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Center Modal Card */}
      <div 
        className="relative w-full max-w-xl mx-auto rounded-3xl bg-slate-900/95 border border-sky-500/40 shadow-[0_0_50px_rgba(37,99,235,0.35)] p-5 sm:p-7 text-center space-y-5 animate-streak-pop z-10 my-auto max-h-[92vh] overflow-y-auto no-scrollbar"
      >
        {/* Top Control Bar: Audio toggle & Close button */}
        <div className="flex items-center justify-between">
          <button
            onClick={toggleSound}
            className="p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-sky-300 transition-colors cursor-pointer"
            title={isMuted ? 'Activer le son' : 'Désactiver le son'}
            aria-label="Contrôle audio"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-sky-400" />}
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            title="Fermer"
            aria-label="Fermer la fenêtre"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Top Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-blue-900/60 to-sky-900/60 border border-sky-400/40 text-sky-300 text-xs font-extrabold uppercase tracking-widest shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-sky-300 animate-spin-slow" />
          <span>{isCelebration ? 'Série de Révision Activée !' : isFlameLit ? 'Flamme Bleue Allumée' : 'Flamme en Attente de Révision'}</span>
        </div>

        {/* Centerpiece: Burning Blue Flame (Animated ONLY when isFlameLit) */}
        <div className="py-2 flex flex-col items-center justify-center relative">
          <div className="relative">
            <BlueFlame size="xl" active={isFlameLit} showEmbers={isFlameLit} />
            {isFlameLit && (
              <div className="w-28 h-6 rounded-full bg-sky-500/30 blur-md mx-auto -mt-3" />
            )}
          </div>

          {/* Big Duolingo-style Streak Number */}
          <div className="mt-3 space-y-1">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-sky-100 to-sky-400 drop-shadow-[0_0_25px_rgba(56,189,248,0.7)] font-mono">
              JOUR {streakCount}
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-sky-300 tracking-wide">
              {isFlameLit
                ? 'Votre flamme bleue est allumée et en mouvement !'
                : 'Flamme au repos — validez vos révisions du jour pour l’embraser !'}
            </p>
          </div>
        </div>

        {/* Congratulatory / Progress Text */}
        <div className="space-y-2 px-2 text-center">
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {isFlameLit ? (
              <>
                Félicitations <strong className="text-white font-bold">{studentName}</strong> ! Tu as validé 
                l'intégralité de tes révisions prévues pour ce <span className="text-sky-400 font-bold">{currentDayLabel}</span>.
              </>
            ) : (
              <>
                Encore un effort <strong className="text-white font-bold">{studentName}</strong> ! Valide 
                tes révisions prévues pour ce <span className="text-sky-400 font-bold">{currentDayLabel}</span> afin d'allumer et animer ta flamme bleue.
              </>
            )}
          </p>

          {/* Completed Subjects Checklist */}
          {completedSubjects.length > 0 && (
            <div className="pt-1">
              <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-2">
                Matières révisées et validées aujourd'hui :
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {completedSubjects.map((sub, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-blue-950/70 border border-sky-500/30 text-sky-200 text-xs font-semibold shadow-xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{sub}</span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Rendez-vous Demain / Prochain Jour Banner */}
        <div className="p-3 sm:p-3.5 rounded-2xl bg-gradient-to-r from-blue-950/90 via-slate-900 to-blue-950/90 border border-sky-400/40 flex items-center justify-between gap-3 text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-sky-500/20 text-sky-300 flex items-center justify-center shrink-0">
              <CalendarIcon className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-black text-white">
                {rendezvousMessage || 'Rendez-vous demain !'}
              </p>
              <p className="text-[11px] text-slate-300">
                Maintiens le rythme pour que ta flamme bleue continue de brûler.
              </p>
            </div>
          </div>
          <div className="text-right shrink-0">
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Record</span>
            <span className="text-xs sm:text-sm font-mono font-bold text-sky-400 flex items-center gap-1">
              <Trophy className="w-3 h-3 text-amber-400" />
              {bestStreak} j
            </span>
          </div>
        </div>

        {/* Duolingo-style Streak Freeze (Gels de Série) System */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/30 space-y-2.5 text-left">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Snowflake className="w-4 h-4 text-cyan-400 animate-spin-slow" />
              <span className="text-xs sm:text-sm font-extrabold text-cyan-300">
                Bouclier de Flamme • Gels de Série
              </span>
            </div>
            <span className="text-xs font-mono font-bold text-white bg-cyan-950/80 px-2 py-0.5 rounded-full border border-cyan-500/40">
              {freezesAvailable}/3 disponibles
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((slot) => {
              const isAvailable = slot <= freezesAvailable;
              return (
                <div
                  key={slot}
                  className={`py-2 px-2 rounded-xl border flex items-center justify-center gap-1.5 text-xs font-bold transition-all ${
                    isAvailable
                      ? 'bg-cyan-950/70 border-cyan-400/50 text-cyan-200 shadow-sm shadow-cyan-500/20'
                      : 'bg-slate-900/40 border-slate-800 text-slate-500'
                  }`}
                >
                  <Snowflake className={`w-3.5 h-3.5 ${isAvailable ? 'text-cyan-400' : 'text-slate-600'}`} />
                  <span className="text-[10px] sm:text-[11px] whitespace-nowrap">
                    {isAvailable ? `Gel ${slot} Prêt` : 'Recharge 72h'}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="text-[11px] text-slate-400 leading-relaxed">
            💡 <strong className="text-slate-200">Règle anti-perte :</strong> Si tu manques un jour, un gel protège ta flamme automatiquement. Chaque gel utilisé se recharge après <strong className="text-cyan-300">72h</strong>. Si tu épuises les 3 gels et ne révises pas au 4e jour consécutif, la série retombe à 0.
          </p>
        </div>

        {/* Real Interactive Multi-Month Calendar (Dates, Mois, Années vers l'infini) */}
        <StreakCalendar
          completedDates={completedDates}
          freezeDates={freezeDates}
        />

        {/* Bottom CTA Action Button */}
        <div className="pt-2">
          <button
            onClick={onClose}
            className="w-full py-3 sm:py-3.5 px-6 rounded-2xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 hover:from-blue-500 hover:to-sky-400 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Continuer sur ma lancée ⚡</span>
          </button>
        </div>

      </div>
    </div>
  );
};
