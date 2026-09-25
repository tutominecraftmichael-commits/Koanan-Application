import React, { useEffect, useState } from 'react';
import { 
  Sparkles, 
  Flame, 
  Clock, 
  X, 
  ArrowRight, 
  Play, 
  Calendar 
} from 'lucide-react';
import type { DuolingoNudgePayload } from '../../services/companionNotificationService';
import { playDuolingoChime } from '../../services/companionNotificationService';

export interface DuolingoCompanionNotificationProps {
  nudge: DuolingoNudgePayload | null;
  onDismiss: () => void;
  onStartFocus: (sessionId?: string) => void;
  onNavigateToPlanner: () => void;
}

export const DuolingoCompanionNotification: React.FC<DuolingoCompanionNotificationProps> = ({
  nudge,
  onDismiss,
  onStartFocus,
  onNavigateToPlanner,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (nudge) {
      setIsVisible(true);
      playDuolingoChime(nudge.isUrgent);
    } else {
      setIsVisible(false);
    }
  }, [nudge]);

  if (!nudge || !isVisible) return null;

  const handleStartFocus = () => {
    setIsVisible(false);
    onStartFocus(nudge.nextSessionId);
  };

  const handleGoToPlanner = () => {
    setIsVisible(false);
    onNavigateToPlanner();
  };

  const handleClose = () => {
    setIsVisible(false);
    onDismiss();
  };

  return (
    <aside 
      aria-label="Notification compagnon Konan"
      className="fixed top-4 right-3 sm:right-6 z-50 max-w-[94vw] sm:max-w-md w-full animate-in slide-in-from-top-4 fade-in-20 duration-300 pointer-events-auto"
    >
      <div 
        className={`relative overflow-hidden rounded-3xl p-4 sm:p-5 backdrop-blur-xl border shadow-2xl transition-all ${
          nudge.isUrgent
            ? 'bg-gradient-to-br from-slate-900/95 via-amber-950/40 to-slate-950/95 border-amber-500/50 shadow-amber-950/60 ring-2 ring-amber-500/30'
            : 'bg-gradient-to-br from-slate-900/95 via-indigo-950/30 to-slate-950/95 border-sky-400/40 shadow-indigo-950/60 ring-1 ring-sky-500/20'
        }`}
      >
        {/* Ambient Top Glow */}
        <div 
          className={`absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-20 rounded-full blur-2xl pointer-events-none opacity-40 ${
            nudge.isUrgent ? 'bg-amber-500' : 'bg-sky-400'
          }`} 
        />

        {/* Header: Companion Tag + Close Button */}
        <div className="flex items-center justify-between gap-3 mb-2.5 relative z-10">
          <div className="flex items-center gap-2">
            <div 
              className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm shadow-md transition-transform hover:scale-105 ${
                nudge.isUrgent 
                  ? 'bg-gradient-to-tr from-amber-600 to-rose-500 text-white animate-pulse' 
                  : 'bg-gradient-to-tr from-sky-500 to-indigo-600 text-white'
              }`}
            >
              {nudge.isUrgent ? <Flame className="w-4 h-4 fill-white" /> : <span>🦉</span>}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xs text-white tracking-wide">
                  KONAN
                </span>
                <span 
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                    nudge.isUrgent
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      : 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                  }`}
                >
                  {nudge.isUrgent ? (
                    <>
                      <Flame className="w-3 h-3 fill-amber-300 text-amber-300" />
                      Alerte motivation • {nudge.missedCount} séances
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3 h-3 text-sky-300" />
                      Compagnon complice
                    </>
                  )}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800/60 transition-colors shrink-0 cursor-pointer"
            aria-label="Fermer la notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Speech Bubble / Message Content */}
        <div className="relative z-10 space-y-2.5">
          <p className="text-white text-xs sm:text-sm font-semibold leading-relaxed break-words whitespace-normal drop-shadow-sm">
            {nudge.message}
          </p>

          {/* Missed Subject & New Time Slot Highlight */}
          <div className="flex flex-wrap items-center gap-1.5 p-2 rounded-xl bg-slate-950/70 border border-slate-800 text-[11px]">
            <span className="text-rose-300 font-bold flex items-center gap-1">
              <span>⚠️ Oubli :</span>
              <strong className="text-white font-extrabold">{nudge.missedSubject}</strong>
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-amber-300 font-medium flex items-center gap-1">
              <Clock className="w-3 h-3 text-amber-400" />
              <span>Reportée à</span>
              <strong className="font-mono font-bold text-amber-200 bg-amber-500/20 px-1.5 py-0.2 rounded border border-amber-500/30">
                {nudge.rescheduledTime}
              </strong>
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={handleStartFocus}
              className={`flex-1 py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] ${
                nudge.isUrgent
                  ? 'bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-white shadow-amber-600/30'
                  : 'bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-sky-600/30'
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>S'y mettre (10 min)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={handleGoToPlanner}
              className="px-3 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-750 text-slate-300 hover:text-white font-semibold text-xs border border-slate-700/80 transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
              title="Voir mon planning réaménagé"
            >
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Planning</span>
            </button>
          </div>
        </div>

        {/* Small Discreet Guarantee Note */}
        <div className="mt-2.5 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-400">
          <span>💙 Konan s'adapte sans jugement</span>
          <span className="font-mono text-slate-400">Mode zénith</span>
        </div>
      </div>
    </aside>
  );
};
