import React, { useState, useEffect } from 'react';
import { 
  X, 
  Play, 
  Pause, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  Target, 
  Crown, 
  BookOpen
} from 'lucide-react';
import type { Subject, AcademicGoal, StudySession } from '../../types';
import { Button } from '../ui/Button';
import { soundFX } from '../../lib/audioEffects';

export interface CoachKonanOneOnOneModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentName?: string;
  academicLevel?: string;
  subjects: Subject[];
  studySessions?: StudySession[];
  academicGoal?: AcademicGoal;
  coachingSessionsRemaining?: number;
  onConsumeSession?: () => void;
}

export const CoachKonanOneOnOneModal: React.FC<CoachKonanOneOnOneModalProps> = ({
  isOpen,
  onClose,
  studentName = 'Étudiant',
  academicLevel: _academicLevel,
  subjects = [],
  studySessions: _studySessions,
  academicGoal = 'target_16',
  coachingSessionsRemaining = 2,
  onConsumeSession,
}) => {
  const [secondsRemaining, setSecondsRemaining] = useState(15 * 60); // 15:00 minutes
  const [isRunning, setIsRunning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [notes, setNotes] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isRunning && secondsRemaining > 0) {
      interval = setInterval(() => {
        setSecondsRemaining(prev => {
          if (prev <= 1) {
            setIsRunning(false);
            soundFX.playVictoryCelebration();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, secondsRemaining]);

  if (!isOpen) return null;

  // Analysis of toughest subject & upcoming exam
  const highestCoeffSubject = [...subjects].sort((a, b) => b.coefficient - a.coefficient)[0];
  const upcomingExamSubject = subjects.find(s => s.examDate);

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const handleStartTimer = () => {
    if (!hasStarted) {
      setHasStarted(true);
      if (onConsumeSession) onConsumeSession();
    }
    setIsRunning(true);
    soundFX.playCheckmarkPop();
  };

  const handlePauseTimer = () => {
    setIsRunning(false);
  };

  const handleResetTimer = () => {
    setIsRunning(false);
    setSecondsRemaining(15 * 60);
  };

  const handleSaveNotes = () => {
    soundFX.playCheckmarkPop();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const goalTitle = academicGoal === 'major_promotion' 
    ? 'Devenir Major de Promotion' 
    : academicGoal === 'target_12' 
    ? "Passer l'année avec 12 de moyenne" 
    : "Passer avec 16 de moyenne";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div 
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-2xl rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/98 to-slate-950 border-2 border-indigo-500/40 shadow-2xl shadow-indigo-950/70 overflow-hidden flex flex-col my-auto max-h-[92vh]"
      >
        {/* Top Header Shimmer */}
        <div className="h-2 w-full bg-gradient-to-r from-purple-500 via-indigo-400 to-amber-400 animate-shimmer" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors z-20 cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto custom-scrollbar">
          
          {/* Header */}
          <div className="flex items-start justify-between gap-4 flex-wrap sm:flex-nowrap">
            <div className="flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-amber-500 p-0.5 shadow-lg shadow-indigo-500/30 shrink-0">
                <div className="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center text-xl">
                  🦉
                </div>
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 inline-flex items-center gap-1">
                    <Crown className="w-3 h-3 text-amber-300" />
                    KONAN PLUS • TÊTE-À-TÊTE
                  </span>
                  <span className="text-[11px] font-bold text-amber-300 px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30">
                    {coachingSessionsRemaining}/2 sessions dispo cette semaine
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-1">
                  Débriefing Coach avec Konan
                </h2>
                <p className="text-xs text-slate-300 mt-0.5">
                  15 minutes chrono de diagnostic stratégique, levée des doutes et remotivation.
                </p>
              </div>
            </div>

            {/* Chronometer Box */}
            <div className="p-3 rounded-2xl bg-slate-950/80 border border-indigo-500/40 text-center space-y-1.5 shrink-0 w-full sm:w-auto">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                Chrono Séance
              </span>
              <div className="text-2xl sm:text-3xl font-mono font-black text-white tracking-wider text-gradient-primary">
                {formatTimer(secondsRemaining)}
              </div>
              <div className="flex items-center justify-center gap-1.5 pt-0.5">
                {!isRunning ? (
                  <button
                    onClick={handleStartTimer}
                    className="p-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white cursor-pointer transition-colors shadow-xs"
                    title="Lancer le débriefing"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </button>
                ) : (
                  <button
                    onClick={handlePauseTimer}
                    className="p-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white cursor-pointer transition-colors shadow-xs"
                    title="Pause"
                  >
                    <Pause className="w-3.5 h-3.5 fill-current" />
                  </button>
                )}
                <button
                  onClick={handleResetTimer}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white cursor-pointer transition-colors"
                  title="Réinitialiser"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Student Status Card */}
          <div className="p-4 rounded-2xl bg-indigo-950/20 border border-indigo-500/30 flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-indigo-400" />
              <span className="text-xs text-slate-300">
                Objectif visé : <strong className="text-white">{goalTitle}</strong>
              </span>
            </div>
            {highestCoeffSubject && (
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>Matière clé : <strong className="text-white">{highestCoeffSubject.name}</strong> (Coeff {highestCoeffSubject.coefficient})</span>
              </div>
            )}
            {upcomingExamSubject && upcomingExamSubject.examDate && (
              <div className="flex items-center gap-2 text-xs text-amber-300">
                <span>⚠️ Échéance : <strong>{upcomingExamSubject.name}</strong> le {upcomingExamSubject.examDate}</span>
              </div>
            )}
          </div>

          {/* Konan's Structured Coaching Advice */}
          <div className="space-y-3.5">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-300 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              Diagnostic Personnalisé de Konan
            </h3>

            {/* Step 1: Tactical assessment */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-300 uppercase tracking-wide">
                <span>1. Analyse Stratégique des Coefficients</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                « Bonjour {studentName} ! Pour ton objectif <strong>{goalTitle}</strong>, la priorité immédiate doit aller vers les coefficients lourds. Si tu consolides <strong>{highestCoeffSubject?.name || 'ta matière principale'}</strong> dès cette semaine, ta moyenne est sécurisée à 65%. Zéro dispersion. »
              </p>
            </div>

            {/* Step 2: Methodology */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wide">
                <span>2. Méthode d'Espacement Recommandée</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {academicGoal === 'major_promotion' ? (
                  <span>« Passe en <strong>Feynman intensif</strong> : explique chaque théorème à voix haute en 10 minutes chrono sans tes notes. Si tu hésites sur une étape, c'est là que le major gagne des points précieux. »</span>
                ) : academicGoal === 'target_12' ? (
                  <span>« Travaille en <strong>Pomodoro 25/5</strong> : focalise-toi sur les annales types et les questions récurrentes. Reste calme et préserve ton énergie vitale. »</span>
                ) : (
                  <span>« Combine <strong>Active Recall + Time Blocking</strong> : 45 minutes d'exercices ciblés sans regarder la correction avant d'avoir posé toutes tes pistes. »</span>
                )}
              </p>
            </div>

            {/* Step 3: Action Checklist */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase tracking-wide">
                <span>3. Tes 3 Engagements pour les 48 Prochaines Heures</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300 pl-1 border-l-2 border-emerald-500/40">
                <li className="pl-2">✓ Valider au moins 2 séances de révision d'affilée sans distraction.</li>
                <li className="pl-2">✓ Résoudre 1 problème complet sur {highestCoeffSubject?.name || 'la matière prioritaire'}.</li>
                <li className="pl-2">✓ Utiliser l'ambiance sonore Alpha 40Hz pour maximiser ta rétention mnésique.</li>
              </ul>
            </div>
          </div>

          {/* Student's Session Notes */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Mes Notes de Débriefing (Points clés & blocages levés)
              </label>
              {isSaved && (
                <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Notes enregistrées !
                </span>
              )}
            </div>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Notez ici les résolutions prises avec Konan et les chapitres à réviser en priorité..."
              className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 transition-colors"
            />
            <div className="flex justify-end">
              <Button
                variant="secondary"
                size="sm"
                onClick={handleSaveNotes}
                className="cursor-pointer text-xs font-bold"
              >
                Sauvegarder mes notes
              </Button>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-800/80 bg-slate-900/50 flex items-center justify-between gap-3 relative z-10">
          <p className="text-[11px] text-slate-400">
            {secondsRemaining === 0 ? "🎉 Séance de 15 minutes terminée avec brio !" : "Chrono actif de 15 min dans votre EDT."}
          </p>
          <Button
            variant="secondary"
            size="sm"
            onClick={onClose}
            className="cursor-pointer text-xs"
          >
            Fermer le débrief
          </Button>
        </div>
      </div>
    </div>
  );
};
