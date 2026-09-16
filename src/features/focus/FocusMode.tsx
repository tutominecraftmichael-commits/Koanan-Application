import React, { useState, useEffect } from 'react';
import type { Subject, StudySession, StudyLog } from '../../types';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { Textarea } from '../../components/ui/FormControls';
import { generateId } from '../../lib/utils';
import confetti from 'canvas-confetti';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle2, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  ArrowLeft, 
  Star, 
  FileText
} from 'lucide-react';

export interface FocusModeProps {
  session: StudySession | null;
  subjects: Subject[];
  onCompleteSession: (sessionId: string, log: StudyLog) => void;
  onExit: () => void;
}

export const FocusMode: React.FC<FocusModeProps> = ({
  session,
  subjects,
  onCompleteSession,
  onExit,
}) => {
  const currentSubject = session 
    ? subjects.find(s => s.id === session.subjectId)
    : subjects[0];

  const initialDurationMinutes = session?.durationMinutes || 45;
  const totalSeconds = initialDurationMinutes * 60;
  const [secondsRemaining, setSecondsRemaining] = useState(totalSeconds);
  const [isActive, setIsActive] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [reflectionNotes, setReflectionNotes] = useState('');
  const [satisfactionRating, setSatisfactionRating] = useState<1 | 2 | 3 | 4 | 5>(5);
  const [completedObjectives, setCompletedObjectives] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const playCompletionChime = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      const playTone = (freq: number, delay: number, dur: number) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);
        gain.gain.setValueAtTime(0.2, ctx.currentTime + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + dur);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + delay);
        osc.stop(ctx.currentTime + delay + dur);
      };

      playTone(523.25, 0, 0.3);
      playTone(659.25, 0.2, 0.3);
      playTone(783.99, 0.4, 0.4);
      playTone(1046.50, 0.6, 0.8);
    } catch (e) {
      console.warn('Audio context unavailable', e);
    }
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isActive && secondsRemaining > 0) {
      interval = setInterval(() => {
        setSecondsRemaining(prev => prev - 1);
      }, 1000);
    } else if (secondsRemaining === 0 && isActive) {
      setIsActive(false);
      setIsFinished(true);
      playCompletionChime();
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, secondsRemaining]);

  const toggleTimer = () => setIsActive(!isActive);

  const resetTimer = () => {
    setIsActive(false);
    setSecondsRemaining(totalSeconds);
  };

  const handleManualComplete = () => {
    setIsActive(false);
    setIsFinished(true);
    playCompletionChime();
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 }
    });
  };

  const handleSaveAndExit = () => {
    const elapsedMinutes = Math.max(1, Math.round((totalSeconds - secondsRemaining) / 60));
    const newLog: StudyLog = {
      id: generateId(),
      sessionId: session?.id,
      subjectId: currentSubject?.id || '',
      date: new Date().toISOString().split('T')[0],
      durationMinutes: elapsedMinutes,
      satisfactionRating,
      summary: reflectionNotes || `Session terminée sur ${session?.title || currentSubject?.name}`,
      createdAt: new Date().toISOString(),
    };

    if (session) {
      onCompleteSession(session.id, newLog);
    }
    onExit();
  };

  const toggleObjective = (index: number) => {
    if (completedObjectives.includes(index)) {
      setCompletedObjectives(completedObjectives.filter(i => i !== index));
    } else {
      setCompletedObjectives([...completedObjectives, index]);
    }
  };

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  const progressPercent = totalSeconds > 0 ? ((totalSeconds - secondsRemaining) / totalSeconds) * 100 : 0;

  const isCatchupMode = Boolean(session?.isRescheduledToday);

  return (
    <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 animate-in fade-in duration-300 px-1">
      
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          leftIcon={<ArrowLeft className="w-4 h-4" />}
          onClick={onExit}
          className="cursor-pointer text-slate-400 hover:text-white text-xs px-2.5"
        >
          Planning
        </Button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            title={soundEnabled ? "Couper le son" : "Activer le son"}
            className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4" />}
          </button>
          {isCatchupMode ? (
            <Badge variant="amber" size="sm" className="font-bold px-2.5 py-0.5 border border-amber-500/50 bg-amber-500/20 text-amber-200 animate-pulse">
              🔄 Chrono Spécial Rattrapage
            </Badge>
          ) : (
            <Badge variant="cyan" dot size="sm">Deep Work</Badge>
          )}
        </div>
      </div>

      {!isFinished ? (
        <div className="space-y-6 sm:space-y-8">
          
          {/* Main Focus Centerpiece */}
          <div className={`relative rounded-3xl p-6 sm:p-12 glass-panel border text-center overflow-hidden shadow-2xl transition-all duration-500 ${
            isCatchupMode 
              ? (isActive ? 'border-amber-500/60 shadow-amber-500/20 bg-slate-900/90' : 'border-amber-500/30 bg-slate-900/70')
              : (isActive ? 'timer-active-aura border-blue-500/40' : 'border-slate-800')
          }`}>
            <div
              className="absolute -top-32 left-1/2 -translate-x-1/2 w-80 sm:w-96 h-80 sm:h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ backgroundColor: isCatchupMode ? '#F59E0B' : (currentSubject?.color || '#6366F1') }}
            />

            <div className="relative z-10 space-y-4 sm:space-y-6">
              
              <div className="flex flex-wrap items-center justify-center gap-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-semibold max-w-full interactive-pill">
                  <span
                    className="w-2 h-2 rounded-full shrink-0 animate-pulse"
                    style={{ backgroundColor: isCatchupMode ? '#F59E0B' : (currentSubject?.color || '#6366F1') }}
                  />
                  <span className="text-white truncate">{currentSubject?.name || 'Session libre'}</span>
                </div>
                {isCatchupMode && (
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold text-[11px]">
                    Rattrapage du créneau {session?.originalStartTime || 'initial'}
                  </span>
                )}
              </div>

              <h1 className="text-lg sm:text-2xl md:text-3xl font-black text-white tracking-tight break-words px-2">
                {session?.title || 'Session de Concentration Approfondie'}
              </h1>

              {/* Special Catch-up Motivational Banner */}
              {isCatchupMode && (
                <div className="p-3 sm:p-4 rounded-2xl bg-amber-950/40 border border-amber-500/40 text-amber-200 text-xs max-w-lg mx-auto space-y-1 shadow-lg">
                  <div className="flex items-center justify-center gap-2 font-bold text-amber-300">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Mode Spécial Rattrapage Activé</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Vous rattrapez votre créneau de <strong className="text-amber-200">{session?.originalStartTime || 'ce matin'}</strong>. Chaque minute vous rapproche de la maîtrise sans accumuler de retard !
                  </p>
                </div>
              )}

              {/* GIANT COUNTDOWN TIMER (Responsive for all phones) */}
              <div className="py-2 sm:py-6">
                <div className="text-5xl sm:text-7xl md:text-8xl font-black font-mono tracking-tight text-white select-none drop-shadow-lg">
                  {formattedTime}
                </div>
                
                <div className="w-full max-w-xs sm:max-w-md mx-auto h-2 bg-slate-800 rounded-full mt-4 sm:mt-6 overflow-hidden border border-slate-700/50">
                  <div
                    className={`h-full transition-all duration-1000 ease-linear ${
                      isCatchupMode
                        ? 'bg-gradient-to-r from-amber-500 via-orange-400 to-emerald-400'
                        : 'bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400'
                    }`}
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* CONTROLS */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 pt-2">
                <Button
                  variant="secondary"
                  size="md"
                  leftIcon={<RotateCcw className="w-4 h-4" />}
                  onClick={resetTimer}
                  className="cursor-pointer text-xs sm:text-sm px-3.5 py-2 hover:scale-105 active:scale-95 transition-transform"
                >
                  Reset
                </Button>

                <Button
                  variant="glow"
                  size="md"
                  leftIcon={isActive ? <Pause className="w-4 h-4 sm:w-5 sm:h-5 fill-current" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />}
                  onClick={toggleTimer}
                  className="px-6 sm:px-8 cursor-pointer text-xs sm:text-base font-bold shadow-indigo-500/30 py-2.5 hover:scale-105 active:scale-95 transition-transform"
                >
                  {isActive ? 'Pause' : 'Démarrer'}
                </Button>

                <Button
                  variant="primary"
                  size="md"
                  leftIcon={<CheckCircle2 className="w-4 h-4" />}
                  onClick={handleManualComplete}
                  className="cursor-pointer bg-emerald-600 hover:bg-emerald-500 border-emerald-500/40 text-xs sm:text-sm px-3.5 py-2 hover:scale-105 active:scale-95 transition-transform"
                >
                  Terminer
                </Button>
              </div>

            </div>
          </div>

          {/* SPRINT OBJECTIVES & NOTES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            
            <Card className="border-slate-800 bg-slate-900/60 p-4 sm:p-6 space-y-3">
              <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                Objectifs de la Séance
              </h3>
              
              <div className="space-y-2">
                {(session?.objectives || [
                  'Relire et synthétiser les théorèmes clés',
                  'Résoudre les exercices d’application directe',
                  'Vérifier la maîtrise avec 3 questions d’auto-test'
                ]).map((obj, i) => {
                  const isChecked = completedObjectives.includes(i);
                  return (
                    <button
                      key={i}
                      onClick={() => toggleObjective(i)}
                      className={`w-full flex items-center gap-2.5 p-3 rounded-xl border text-left transition-all cursor-pointer min-h-[40px] ${
                        isChecked
                          ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200 line-through'
                          : 'bg-slate-950/40 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <span className={`w-4 h-4 rounded flex items-center justify-center border text-[10px] shrink-0 ${
                        isChecked ? 'bg-emerald-500 border-emerald-400 text-slate-950 font-bold' : 'border-slate-600'
                      }`}>
                        {isChecked ? '✓' : ''}
                      </span>
                      <span className="text-xs font-medium">{obj}</span>
                    </button>
                  );
                })}
              </div>
            </Card>

            <Card className="border-slate-800 bg-slate-900/60 p-4 sm:p-6 space-y-3">
              <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <FileText className="w-4 h-4 text-indigo-400" />
                Bloc-Notes & Synthèse Rapide
              </h3>
              <textarea
                placeholder="Notez vos formules clés, doutes ou points d'attention..."
                value={reflectionNotes}
                onChange={(e) => setReflectionNotes(e.target.value)}
                className="w-full h-32 sm:h-36 bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </Card>

          </div>

        </div>
      ) : (
        /* FINISHED MODAL / SUMMARY CARD */
        <div className="rounded-3xl p-6 sm:p-12 glass-panel border border-emerald-500/30 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 text-center space-y-4 sm:space-y-6 shadow-2xl">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
            <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 animate-pulse" />
          </div>

          <div className="space-y-1">
            <h2 className="text-xl sm:text-3xl font-extrabold text-white">
              {isCatchupMode ? '🎉 Rattrapage réussi et validé avec succès !' : 'Session accomplie avec succès !'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              {isCatchupMode 
                ? `Votre séance initialement prévue à ${session?.originalStartTime || 'ce matin'} a été officiellement rattrapée et enregistrée.`
                : "Votre temps d'étude effectif a été sauvegardé en temps réel."}
            </p>
          </div>

          {/* Star Rating Feedback */}
          <div className="space-y-2 max-w-sm mx-auto">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
              Niveau de concentration ressenti :
            </label>
            <div className="flex items-center justify-center gap-2">
              {([1, 2, 3, 4, 5] as const).map(star => (
                <button
                  key={star}
                  onClick={() => setSatisfactionRating(star)}
                  className="p-1 text-amber-400 hover:scale-125 transition-transform cursor-pointer"
                >
                  <Star className={`w-6 h-6 sm:w-7 sm:h-7 ${star <= satisfactionRating ? 'fill-amber-400' : 'text-slate-600'}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <Textarea
              label="Bilan (optionnel)"
              placeholder="Que retenez-vous de cette session ?"
              value={reflectionNotes}
              onChange={(e) => setReflectionNotes(e.target.value)}
            />
          </div>

          <div className="pt-2 flex justify-center">
            <Button
              variant="glow"
              size="lg"
              onClick={handleSaveAndExit}
              className="cursor-pointer px-6 sm:px-8 text-xs sm:text-sm font-bold w-full sm:w-auto"
            >
              Enregistrer et Revenir au Tableau de Bord
            </Button>
          </div>
        </div>
      )}

    </div>
  );
};
