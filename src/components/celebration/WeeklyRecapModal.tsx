import React, { useEffect, useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  Clock, 
  CheckCircle2, 
  Star, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  ShieldCheck 
} from 'lucide-react';
import { Button } from '../ui/Button';
import { soundFX } from '../../lib/audioEffects';
import { formatMinutesToHours } from '../../lib/utils';
import type { WeeklySummary } from '../../types';

export interface WeeklyRecapModalProps {
  isOpen: boolean;
  onClose: () => void;
  summary: WeeklySummary | null;
  onStartNewWeek?: () => void;
}

export const WeeklyRecapModal: React.FC<WeeklyRecapModalProps> = ({
  isOpen,
  onClose,
  summary,
  onStartNewWeek,
}) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!isOpen || !summary) {
      setAnimatedProgress(0);
      return;
    }

    // Effet sonore de victoire
    try {
      soundFX.playStreakIgniteChime();
    } catch {}

    // Explosion de confettis festifs style Duolingo
    try {
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.55 },
        colors: ['#6366F1', '#8B5CF6', '#10B981', '#06B6D4', '#F59E0B', '#EC4899'],
        disableForReducedMotion: true,
      });
    } catch {}

    // Animation progressive de la jauge circulaire
    setAnimatedProgress(0);
    const target = summary.completionRate || 0;
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setAnimatedProgress(target);
        clearInterval(interval);
      } else {
        setAnimatedProgress(current);
      }
    }, 25);

    return () => {
      clearInterval(interval);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isOpen, summary]);

  if (!isOpen || !summary) return null;

  const plannedHours = formatMinutesToHours(summary.totalPlannedMinutes);
  const completedHours = formatMinutesToHours(summary.totalCompletedMinutes);

  // Message d'évaluation bienveillant et anti-burnout
  const getFeedbackMessage = (rate: number) => {
    if (rate >= 90) {
      return {
        title: "Performance d'Excellence ! 🌟",
        desc: "Régularité impressionnante et rigueur exemplaire. Vous avez parfaitement maîtrisé votre charge cognitive cette semaine sans saturation.",
        color: "text-emerald-400",
      };
    }
    if (rate >= 70) {
      return {
        title: "Solide Régularité ! 🚀",
        desc: "Une très belle progression tout au long de la semaine. Vos acquis sont consolidés et votre rythme d'apprentissage est équilibré.",
        color: "text-indigo-400",
      };
    }
    if (rate >= 40) {
      return {
        title: "Bonne reprise en main ! 💪",
        desc: "L'essentiel a été couvert sur vos matières clés. La semaine prochaine sera l'occasion d'optimiser vos créneaux diurnes.",
        color: "text-amber-400",
      };
    }
    return {
      title: "Semaine d'assimilation douce 🌱",
      desc: "L'apprentissage est un marathon. Prenez ce nouveau départ pour sanctuariser 25 minutes de focus par jour dès lundi.",
      color: "text-sky-400",
    };
  };

  const feedback = getFeedbackMessage(summary.completionRate);

  const handleConfirmStart = () => {
    if (onStartNewWeek) {
      onStartNewWeek();
    }
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="weekly-recap-title"
    >
      <div className="w-full max-w-lg bg-slate-900 border border-indigo-500/30 rounded-3xl p-5 sm:p-7 text-white shadow-2xl relative max-h-[92vh] overflow-y-auto space-y-5">
        
        {/* Bouton Fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header avec Cube KONAN en célébration */}
        <div className="text-center space-y-2 pt-2">
          <div className="relative inline-block">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-sky-400 p-0.5 mx-auto shadow-xl shadow-indigo-600/30 animate-bounce duration-1000">
              <div className="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center overflow-hidden">
                <img src="/logo-konan.png" alt="Cube KONAN" className="w-11 h-11 sm:w-14 sm:h-14 object-contain" />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-emerald-500 text-slate-950 shadow-md">
              <Sparkles className="w-4 h-4 fill-current" />
            </div>
          </div>

          <div>
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-indigo-300 font-bold px-2.5 py-0.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 inline-block mb-1">
              Bilan Hebdomadaire
            </span>
            <h2 id="weekly-recap-title" className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Bilan de votre Semaine
            </h2>
            <p className="text-xs text-slate-400">
              Semaine du {summary.weekStartDate} au {summary.weekEndDate}
            </p>
          </div>
        </div>

        {/* Jauge centrale animée style Duolingo */}
        <div className="p-4 rounded-2xl bg-gradient-to-b from-indigo-950/40 via-slate-950 to-slate-950 border border-indigo-500/20 text-center space-y-3">
          <div className="flex items-center justify-center gap-6">
            {/* Anneau circulaire */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="stroke-slate-800"
                  strokeWidth="8"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="stroke-indigo-500 transition-all duration-300"
                  strokeWidth="8"
                  strokeDasharray="264"
                  strokeDashoffset={264 - (264 * animatedProgress) / 100}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl sm:text-3xl font-black text-white font-mono">
                  {animatedProgress}%
                </span>
                <span className="text-[9px] uppercase font-semibold text-slate-400">
                  Complétion
                </span>
              </div>
            </div>

            {/* Heures & verdict rapide */}
            <div className="text-left space-y-1">
              <p className="text-xs uppercase font-bold text-slate-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-indigo-400" />
                <span>Temps de concentration</span>
              </p>
              <p className="text-xl sm:text-2xl font-black text-white font-mono">
                {completedHours}
                <span className="text-xs font-normal text-slate-400 ml-1">/ {plannedHours}</span>
              </p>
              <div className="pt-1">
                <p className={`text-xs font-bold ${feedback.color}`}>
                  {feedback.title}
                </p>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-300 italic px-2 leading-relaxed">
            "{feedback.desc}"
          </p>
        </div>

        {/* 3 KPI Clés */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-2.5 sm:p-3 rounded-2xl bg-slate-800/60 border border-slate-700/50 space-y-0.5">
            <div className="flex items-center justify-center text-indigo-400 mb-1">
              <Clock className="w-4 h-4" />
            </div>
            <p className="text-[10px] text-slate-400 uppercase font-semibold">Réalisé</p>
            <p className="text-sm sm:text-base font-bold text-white font-mono">{completedHours}</p>
          </div>

          <div className="p-2.5 sm:p-3 rounded-2xl bg-slate-800/60 border border-slate-700/50 space-y-0.5">
            <div className="flex items-center justify-center text-emerald-400 mb-1">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <p className="text-[10px] text-slate-400 uppercase font-semibold">Validées</p>
            <p className="text-sm sm:text-base font-bold text-emerald-400 font-mono">
              {summary.completedSessionsCount} / {summary.totalSessionsCount}
            </p>
          </div>

          <div className="p-2.5 sm:p-3 rounded-2xl bg-slate-800/60 border border-slate-700/50 space-y-0.5">
            <div className="flex items-center justify-center text-amber-400 mb-1">
              <Star className="w-4 h-4 fill-amber-400" />
            </div>
            <p className="text-[10px] text-slate-400 uppercase font-semibold">Focus</p>
            <p className="text-sm sm:text-base font-bold text-amber-300 font-mono">
              {summary.averageFocusRating} / 5
            </p>
          </div>
        </div>

        {/* Détail par matière */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
              <span>Progression par Matière</span>
            </p>
            <span className="text-[11px] text-slate-400 font-mono">
              {summary.subjectBreakdown.length} discipline(s)
            </span>
          </div>

          <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
            {summary.subjectBreakdown.map(sub => {
              const subDone = formatMinutesToHours(sub.completedMinutes);
              const subPlan = formatMinutesToHours(sub.plannedMinutes);
              const isCompleted = sub.completionRate >= 100;

              return (
                <div 
                  key={sub.subjectId}
                  className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/40 flex items-center justify-between gap-3 text-xs"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-white truncate max-w-[150px] sm:max-w-xs">
                        {sub.subjectName}
                      </span>
                      <span className="font-mono text-slate-400 text-[11px]">
                        {subDone} / {subPlan} ({sub.completionRate}%)
                      </span>
                    </div>

                    <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-500 rounded-full ${
                          isCompleted ? 'bg-emerald-400' : 'bg-gradient-to-r from-indigo-500 to-violet-500'
                        }`}
                        style={{ width: `${Math.min(100, sub.completionRate)}%` }}
                      />
                    </div>
                  </div>

                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold shrink-0 ${
                    isCompleted 
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                  }`}>
                    {isCompleted ? 'Validé' : `${sub.completedSessions}/${sub.totalSessions}`}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Protection Anti-Burnout Note */}
        <div className="p-3 rounded-2xl bg-indigo-950/40 border border-indigo-500/20 flex items-center gap-2.5 text-xs text-indigo-200">
          <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0" />
          <p className="text-[11px] leading-relaxed">
            Vos heures passées ont été soigneusement archivées. La nouvelle semaine démarre avec un compteur remis à zéro pour garantir votre sérénité d'esprit.
          </p>
        </div>

        {/* Bouton d'action */}
        <Button
          variant="glow"
          size="lg"
          onClick={handleConfirmStart}
          className="w-full py-3 text-sm font-bold bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-xl shadow-indigo-600/30 cursor-pointer flex items-center justify-center gap-2"
        >
          <span>Démarrer ma nouvelle semaine</span>
          <ArrowRight className="w-4 h-4" />
        </Button>

      </div>
    </div>
  );
};
