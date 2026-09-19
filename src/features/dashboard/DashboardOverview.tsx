import React, { useState } from 'react';
import type { 
  Subject, 
  ClassSlot, 
  StudySession, 
  StudyPreferences, 
  ActiveAppView
} from '../../types';
import { DAYS_OF_WEEK } from '../../types';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { formatMinutesToHours, getDaysRemaining, parseTimeToMinutes } from '../../lib/utils';
import { 
  Sparkles, 
  Calendar, 
  Clock, 
  Play, 
  CheckCircle2, 
  Target, 
  ArrowRight, 
  TrendingUp,
  FileText,
  GraduationCap,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Cloud
} from 'lucide-react';
import { SessionExplainerModal } from '../../components/common/SessionExplainerModal';
import { AnimatedCounter } from '../../components/common/AnimatedCounter';
import { useLanguage, t } from '../../lib/i18n';
import type { SessionType } from '../../types';

export interface DashboardOverviewProps {
  studentName: string;
  academicLevel: string;
  subjects: Subject[];
  classSlots: ClassSlot[];
  studySessions: StudySession[];
  preferences: StudyPreferences;
  onNavigate: (view: ActiveAppView) => void;
  onStartFocus: (session: StudySession) => void;
  onToggleSessionComplete: (sessionId: string) => void;
  onOpenPresetModal?: () => void;
  isDemoMode?: boolean;
  planTier?: 'free' | 'pro' | 'plus';
  onResetDailyCatchup?: () => void;
  onViewPricing?: () => void;
  onOpenCloudSync?: () => void;
  cloudStatus?: 'connected' | 'needs_activation' | 'offline' | 'checking';
}

export const DashboardOverview: React.FC<DashboardOverviewProps> = ({
  studentName,
  academicLevel,
  subjects,
  classSlots,
  studySessions,
  preferences,
  onNavigate,
  onStartFocus,
  onToggleSessionComplete,
  onOpenPresetModal,
  isDemoMode = false,
  planTier = 'free',
  onResetDailyCatchup,
  onViewPricing,
  onOpenCloudSync,
  cloudStatus = 'checking',
}) => {
  const [lang] = useLanguage();
  const [selectedExplainerType, setSelectedExplainerType] = useState<SessionType | null>(null);

  const [showCompletedSessions, setShowCompletedSessions] = useState(false);

  const now = new Date();
  const currentDayIndex = (now.getDay() + 6) % 7;
  const currentMinute = now.getHours() * 60 + now.getMinutes();
  const currentDayInfo = DAYS_OF_WEEK.find(d => d.id === currentDayIndex) || DAYS_OF_WEEK[0];

  const todaysClasses = classSlots
    .filter(c => c.dayOfWeek === currentDayIndex)
    .sort((a, b) => a.startTime.localeCompare(b.startTime));

  const allTodaysStudySessions = studySessions
    .filter(s => s.dayOfWeek === currentDayIndex);

  // Sessions en rattrapage aujourd'hui
  const rescheduledTodaySessions = allTodaysStudySessions.filter(s => s.isRescheduledToday && !s.completed);

  // Sessions terminées aujourd'hui
  const completedTodaySessions = allTodaysStudySessions.filter(s => s.completed);

  // SESSIONS ACTIVES DU TABLEAU DE BORD (Règle d'or de l'utilisateur) :
  // Lorsqu'une heure n'a pas été respectée, ne plus l'afficher à son ancienne heure dépassée.
  // Afficher uniquement les séances à venir ou replacées pour rattrapage, strictement ordonnées chronologiquement.
  const activeDisplaySessions = allTodaysStudySessions
    .filter(s => {
      if (s.completed) return false;
      const endMin = parseTimeToMinutes(s.endTime);
      // Maintenir uniquement si l'heure n'est pas expirée ou si c'est un créneau replacé actif
      return endMin >= currentMinute || s.isRescheduledToday;
    })
    .sort((a, b) => a.startTime.localeCompare(b.startTime));

  // Prochaine session chronologique exacte :
  // Toujours la 1ère session active chronologiquement (ex: 19h30 avant un rattrapage à 22h00)
  const nextStudySession = activeDisplaySessions[0] || allTodaysStudySessions.find(s => !s.completed);
  const completedToday = completedTodaySessions.length;
  const totalMissedMinutes = rescheduledTodaySessions.reduce((acc, s) => acc + s.durationMinutes, 0);
  const totalMissedHoursText = formatMinutesToHours(totalMissedMinutes);

  const upcomingExams = subjects
    .filter(s => s.examDate)
    .map(s => ({ ...s, daysRemaining: getDaysRemaining(s.examDate) }))
    .sort((a, b) => (a.daysRemaining || 999) - (b.daysRemaining || 999));

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      
      {/* WELCOME BANNER */}
      <div className="relative rounded-3xl p-5 sm:p-8 overflow-hidden border border-indigo-500/30 bg-gradient-to-r from-indigo-950/60 via-slate-900 to-slate-950 shadow-2xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 relative z-10">
          <div className="space-y-1.5 sm:space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="cyan" size="sm" dot>Copilote Actif</Badge>
              <span className="text-[11px] sm:text-xs text-slate-400 font-medium">Aujourd'hui : {currentDayInfo.label}</span>
            </div>
            <h1 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
              Bonjour, <span className="text-gradient-primary">{studentName}</span> 👋
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Votre cursus <strong className="text-white">{academicLevel}</strong> est synchronisé en temps réel.
              {allTodaysStudySessions.length > 0
                ? ` ${activeDisplaySessions.length} session(s) active(s) aujourd'hui (${completedToday} terminée(s)).`
                : ` Journée d'assimilation libre.`}
            </p>
          </div>

          {/* Quick Launch Card */}
          {nextStudySession && (
            <div className="w-full lg:w-auto p-4 sm:p-5 rounded-2xl bg-slate-900/95 border border-indigo-500/40 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 interactive-card">
              <div className="space-y-1 text-left min-w-0 flex-1 w-full">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-bold text-indigo-300 tracking-wider block">
                    Prochaine Session
                  </span>
                  {nextStudySession.isRescheduledToday && (
                    <Badge variant="amber" size="sm" className="text-[10px] px-1.5 py-0 font-bold animate-pulse">
                      🔄 Rattrapage ce soir
                    </Badge>
                  )}
                </div>
                <p className="text-xs sm:text-sm font-bold text-white break-words leading-snug">
                  {nextStudySession.title}
                </p>
                <p className="text-[11px] font-mono text-cyan-400">
                  {nextStudySession.startTime} - {nextStudySession.endTime} ({nextStudySession.durationMinutes} min)
                </p>
              </div>
              <Button
                variant={nextStudySession.isRescheduledToday ? "secondary" : "glow"}
                size="sm"
                leftIcon={<Play className="w-3.5 h-3.5 fill-current" />}
                onClick={() => onStartFocus(nextStudySession)}
                className={`w-full sm:w-auto cursor-pointer text-xs font-bold whitespace-nowrap py-2.5 px-4 hover:scale-105 active:scale-95 transition-transform shrink-0 ${
                  nextStudySession.isRescheduledToday
                    ? 'bg-amber-600 hover:bg-amber-500 text-white border-amber-400/50 shadow-lg shadow-amber-600/20'
                    : ''
                }`}
              >
                {nextStudySession.isRescheduledToday ? '⚡ Rattraper (Chrono)' : 'Démarrer Focus'}
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* MULTI-DEVICE CLOUD SYNC CALLOUT */}
      {!isDemoMode && onOpenCloudSync && (
        <div 
          onClick={onOpenCloudSync}
          className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg ${
            cloudStatus === 'needs_activation'
              ? 'bg-amber-950/30 border-amber-500/40 hover:border-amber-400 hover:bg-amber-950/50 text-amber-200'
              : cloudStatus === 'connected'
              ? 'bg-emerald-950/20 border-emerald-500/30 hover:border-emerald-400/50 hover:bg-emerald-950/30 text-emerald-200'
              : 'bg-slate-900/60 border-slate-800 hover:border-indigo-500/40 hover:bg-slate-900 text-slate-200'
          }`}
        >
          <div className="flex items-center gap-3.5">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
              cloudStatus === 'needs_activation'
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                : cloudStatus === 'connected'
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                : 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30'
            }`}>
              <Cloud className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xs sm:text-sm font-bold text-white">
                  Synchronisation Multi-Appareils (PC & Mobile)
                </h3>
                {cloudStatus === 'needs_activation' ? (
                  <Badge variant="amber" size="sm" className="text-[10px] px-1.5 py-0 font-bold">
                    Action Requise
                  </Badge>
                ) : cloudStatus === 'connected' ? (
                  <Badge variant="emerald" size="sm" className="text-[10px] px-1.5 py-0 font-bold">
                    🟢 Cloud Actif
                  </Badge>
                ) : null}
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {cloudStatus === 'needs_activation'
                  ? 'Pour retrouver automatiquement vos cours sur votre PC, activez le Cloud en 1 clic ou utilisez le code de transfert immédiat.'
                  : cloudStatus === 'connected'
                  ? 'Vos données sont synchronisées en temps réel sur tous vos écrans avec votre compte Google.'
                  : 'Transférez votre emploi du temps et vos matières sur votre PC ou un autre appareil en un clic.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 shrink-0 self-end sm:self-center">
            <span>Ouvrir la synchronisation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      )}

      {/* QUICK ACTIONS HUB */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
        
        {/* 1. Importer Emploi du Temps OU Exemples d'EDT Démo */}
        {!isDemoMode ? (
          <div 
            onClick={() => onNavigate('upload-schedule')}
            className="group p-4 rounded-2xl bg-slate-900/70 hover:bg-slate-850 border border-slate-800 hover:border-cyan-500/40 transition-all cursor-pointer shadow-lg hover:shadow-cyan-500/10 flex items-center gap-3.5 interactive-card"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Importer un Emploi du Temps
                </h3>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1.5 transition-all shrink-0 ml-1" />
              </div>
              <p className="text-[11px] text-slate-400 break-words leading-relaxed mt-0.5">
                Synchroniser votre emploi du temps
              </p>
            </div>
          </div>
        ) : (
          <div 
            onClick={() => onOpenPresetModal?.()}
            className="group p-4 rounded-2xl bg-slate-900/70 hover:bg-slate-850 border border-slate-800 hover:border-indigo-500/40 transition-all cursor-pointer shadow-lg hover:shadow-indigo-500/10 flex items-center gap-3.5 interactive-card"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                  Exemples d'EDT Démo
                </h3>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1.5 transition-all shrink-0 ml-1" />
              </div>
              <p className="text-[11px] text-slate-400 break-words leading-relaxed mt-0.5">
                Modèles ESATIC, Médecine, Informatique, Lycée...
              </p>
            </div>
          </div>
        )}

        {/* 2. Planning d'Étude */}
        <div 
          onClick={() => onNavigate('planner')}
          className="group p-4 rounded-2xl bg-slate-900/70 hover:bg-slate-850 border border-slate-800 hover:border-indigo-500/40 transition-all cursor-pointer shadow-lg hover:shadow-indigo-500/10 flex items-center gap-3.5 interactive-card"
        >
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all flex items-center justify-center shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                Planning d'Étude
              </h3>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1.5 transition-all shrink-0 ml-1" />
            </div>
            <p className="text-[11px] text-slate-400 break-words leading-relaxed mt-0.5">
              Consulter vos séances optimisées
            </p>
          </div>
        </div>

        {/* 3. Lancer une Session Focus */}
        <div 
          onClick={() => onNavigate('focus')}
          className="group p-4 rounded-2xl bg-slate-900/70 hover:bg-slate-850 border border-slate-800 hover:border-violet-500/40 transition-all cursor-pointer shadow-lg hover:shadow-violet-500/10 flex items-center gap-3.5 interactive-card"
        >
          <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20 group-hover:scale-110 transition-all flex items-center justify-center shrink-0">
            <Play className="w-5 h-5 fill-current" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-violet-300 transition-colors">
                Mode Focus Pomodoro
              </h3>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-violet-400 group-hover:translate-x-1.5 transition-all shrink-0 ml-1" />
            </div>
            <p className="text-[11px] text-slate-400 break-words leading-relaxed mt-0.5">
              Chrono d'étude intensive sans distraction
            </p>
          </div>
        </div>

      </div>

      {/* 2-COLUMN COCKPIT (TODAY'S TIMELINE + ACADEMIC INSIGHTS) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        
        {/* LEFT 2 COLS: TODAY'S TIMELINE */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
              <span>Programme ({currentDayInfo.label})</span>
            </h2>
            <Button
              variant="ghost"
              size="sm"
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              onClick={() => onNavigate('planner')}
              className="text-xs text-indigo-400 hover:text-indigo-300 p-1 sm:px-3"
            >
              Semaine complète
            </Button>
          </div>

          {/* Timeline Cards */}
          <div className="space-y-3">
            
            {/* 1. Classes */}
            {todaysClasses.length > 0 && (
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  Cours universitaires ({todaysClasses.length})
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {todaysClasses.map(c => {
                    const sub = subjects.find(s => s.id === c.subjectId);
                    return (
                      <div
                        key={c.id}
                        className="p-3 sm:p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                        style={{ borderLeftColor: sub?.color || '#6366F1', borderLeftWidth: '3px' }}
                      >
                        <div className="min-w-0 flex-1">
                          <p className="font-bold text-white text-xs sm:text-sm break-words leading-snug">{sub?.name}</p>
                          <p className="text-slate-400 text-[11px] mt-0.5 break-words">{c.room || 'Salle de cours'}</p>
                        </div>
                        <div className="flex items-center sm:flex-col justify-between sm:justify-center sm:text-right font-mono shrink-0 pt-1 sm:pt-0 border-t border-slate-800/60 sm:border-t-0">
                          <span className="text-slate-300 font-semibold text-xs">{c.startTime} - {c.endTime}</span>
                          <span className="text-[10px] text-cyan-400 uppercase font-bold">{c.type}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 2. Study Sessions */}
            <div className="space-y-2.5 pt-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  Sessions d'Étude ({completedToday}/{allTodaysStudySessions.length} faites)
                </span>
                {rescheduledTodaySessions.length > 0 && (
                  <span className="text-[10px] font-bold text-amber-300 uppercase">
                    {rescheduledTodaySessions.length} à rattraper
                  </span>
                )}
              </div>

              {/* Daily Catch-up Rescheduled Banner with Clear Breakdown */}
              {rescheduledTodaySessions.length > 0 && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/70 via-slate-900 to-indigo-950/50 border border-amber-500/50 shadow-xl space-y-3.5 text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-start gap-2.5 min-w-0">
                      <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300 shrink-0 mt-0.5">
                        <AlertCircle className="w-5 h-5 text-amber-400" />
                      </div>
                      <div className="space-y-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-extrabold text-amber-300 uppercase tracking-wide text-xs">
                            ⚠️ Réaménagement intelligent : {rescheduledTodaySessions.length} session(s) non validée(s)
                          </span>
                          <Badge variant="amber" size="sm" className="font-bold px-2 py-0.5 animate-pulse">
                            {totalMissedHoursText} à rattraper aujourd'hui
                          </Badge>
                        </div>
                        <p className="text-slate-300 text-xs leading-relaxed">
                          Vos créneaux non respectés ont été replacés pour ce soir afin de ne perdre aucune heure de révision.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                      {/* Clic sur Rétablir / Rattraper = Chrono Spécial Rattrapage */}
                      <Button
                        variant="secondary"
                        size="sm"
                        leftIcon={<Play className="w-3.5 h-3.5 fill-current" />}
                        onClick={() => onStartFocus(rescheduledTodaySessions[0])}
                        className="bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs py-2 px-3.5 shadow-lg shadow-amber-600/30 cursor-pointer hover:scale-105 active:scale-95 transition-all"
                        title="Démarrer le chrono de révision spécial rattrapage"
                      >
                        ⚡ Rétablir & Rattraper (Chrono)
                      </Button>
                      {onResetDailyCatchup && (
                        <button
                          onClick={onResetDailyCatchup}
                          className="px-2.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-300 hover:text-white text-[11px] font-semibold shrink-0 cursor-pointer transition-colors"
                          title="Rétablir les horaires initiaux de base sans lancer le chrono"
                        >
                          Horaires de base
                        </button>
                      )}
                    </div>
                  </div>

                  {/* DÉTAIL CLAIR DE CE QUI N'A PAS ÉTÉ VALIDÉ */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Détail des séances à rattraper :
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {rescheduledTodaySessions.map(s => {
                        return (
                          <div
                            key={s.id}
                            className="p-2.5 rounded-xl bg-slate-950/60 border border-amber-500/30 flex items-center justify-between gap-2 text-xs"
                          >
                            <div className="min-w-0 flex-1">
                              <p className="font-bold text-white truncate">{s.title}</p>
                              <p className="text-[11px] text-slate-400">
                                Horaire initial : <span className="line-through text-rose-400 font-mono font-bold">{s.originalStartTime || 'matin'}</span>
                                <span className="text-amber-300 font-mono font-bold ml-1.5">➔ Replacée à {s.startTime}</span>
                              </p>
                            </div>
                            <button
                              onClick={() => onStartFocus(s)}
                              className="p-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 cursor-pointer shrink-0 transition-colors"
                              title="Lancer le chrono spécial rattrapage"
                            >
                              <Play className="w-3.5 h-3.5 fill-current" />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* SESSIONS ACTIVES & RATTRAPAGES EN ORDRE CHRONOLOGIQUE STRICT */}
              {activeDisplaySessions.length === 0 ? (
                <Card className="text-center py-6 sm:py-8 border-slate-800 bg-slate-900/40">
                  <p className="text-xs text-slate-400">
                    {completedToday > 0 
                      ? '✨ Bravo ! Toutes vos sessions prévues aujourd’hui sont complétées.'
                      : 'Aucune session d’étude active pour aujourd’hui.'}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onNavigate('planner')}
                    className="mt-2 text-xs text-indigo-400"
                  >
                    Consulter mon planning de révision
                  </Button>
                </Card>
              ) : (
                activeDisplaySessions.map(session => {
                  const sub = subjects.find(s => s.id === session.subjectId);
                  const isRescheduled = Boolean(session.isRescheduledToday);
                  return (
                    <div
                      key={session.id}
                      className={`p-3.5 sm:p-4 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        isRescheduled
                          ? 'bg-gradient-to-r from-slate-900 via-amber-950/20 to-slate-900 border-amber-500/40 shadow-lg shadow-amber-950/20'
                          : 'bg-slate-900/80 border-slate-700/80 hover:border-indigo-500/50 shadow-md'
                      }`}
                      style={{ borderLeftColor: isRescheduled ? '#F59E0B' : (sub?.color || '#6366F1'), borderLeftWidth: '4px' }}
                    >
                      <div className="space-y-1.5 min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[11px] font-mono font-bold text-cyan-400">
                            {session.startTime} - {session.endTime} ({session.durationMinutes} min)
                          </span>
                          {isRescheduled && (
                            <Badge variant="amber" size="sm" className="text-[10px] px-2 py-0.5 font-bold animate-pulse" title={session.rescheduledReason}>
                              🔄 Rattrapage (Init. {session.originalStartTime})
                            </Badge>
                          )}
                          <button
                            type="button"
                            onClick={() => setSelectedExplainerType(session.type)}
                            className="cursor-pointer hover:scale-105 transition-transform"
                            title={t('clickForGuide', lang)}
                          >
                            <Badge variant="primary" size="sm" className="text-[10px] px-1.5 py-0 hover:ring-1 hover:ring-cyan-400">
                              {session.type === 'spaced_review' ? t('spacedReviewLabel', lang) :
                               session.type === 'exercises' ? t('exercisesLabel', lang) :
                               session.type === 'deep_summary' ? t('deepSummaryLabel', lang) :
                               session.type === 'flashcards' ? t('activeRecallLabel', lang) :
                               session.type === 'exam_simulation' ? t('examSimulationLabel', lang) :
                               t('consolidationLabel', lang)} ℹ️
                            </Badge>
                          </button>
                        </div>

                        <h4 className="text-xs sm:text-sm font-bold text-white break-words leading-snug">
                          {session.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-slate-400 break-words leading-snug">{sub?.name}</p>
                      </div>

                      <div className="flex items-center gap-2 self-stretch sm:self-center justify-end shrink-0 pt-2 sm:pt-0 border-t border-slate-800/60 sm:border-t-0">
                        <button
                          onClick={() => onToggleSessionComplete(session.id)}
                          className="flex-1 sm:flex-initial px-3 py-2 rounded-lg border text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer min-h-[38px] bg-slate-800 text-slate-300 border-slate-700 hover:text-white"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Valider</span>
                        </button>

                        <Button
                          variant={isRescheduled ? "secondary" : "glow"}
                          size="sm"
                          leftIcon={<Play className="w-3.5 h-3.5 fill-current" />}
                          onClick={() => onStartFocus(session)}
                          className={`flex-1 sm:flex-initial cursor-pointer text-xs py-2 px-3.5 min-h-[38px] flex items-center justify-center font-bold ${
                            isRescheduled
                              ? 'bg-amber-600 hover:bg-amber-500 text-white border-amber-400/50 shadow-md shadow-amber-600/30'
                              : ''
                          }`}
                        >
                          {isRescheduled ? '⚡ Rattraper (Chrono)' : 'Lancer'}
                        </Button>
                      </div>
                    </div>
                  );
                })
              )}

              {/* SÉANCES DÉJÀ VALIDÉES AUJOURD'HUI (RÉDUITES / REPLIABLES) */}
              {completedTodaySessions.length > 0 && (
                <div className="pt-2">
                  <button
                    onClick={() => setShowCompletedSessions(!showCompletedSessions)}
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200 text-xs font-semibold cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Séances validées aujourd'hui ({completedTodaySessions.length})</span>
                    </div>
                    {showCompletedSessions ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {showCompletedSessions && (
                    <div className="mt-2 space-y-2 pl-2">
                      {completedTodaySessions.map(session => {
                        const sub = subjects.find(s => s.id === session.subjectId);
                        return (
                          <div
                            key={session.id}
                            className="p-3 rounded-xl bg-slate-950/40 border border-slate-850 opacity-75 flex items-center justify-between gap-3 text-xs"
                            style={{ borderLeftColor: sub?.color || '#10B981', borderLeftWidth: '3px' }}
                          >
                            <div className="min-w-0 flex-1">
                              <p className="line-through text-slate-300 font-semibold truncate">{session.title}</p>
                              <p className="text-[11px] text-slate-500 font-mono">{session.startTime} - {session.endTime} ({session.durationMinutes} min)</p>
                            </div>
                            <button
                              onClick={() => onToggleSessionComplete(session.id)}
                              className="px-2.5 py-1 rounded bg-slate-800 text-slate-400 hover:text-white text-[10px]"
                              title="Décocher"
                            >
                              Annuler
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>

          </div>
        </div>

        {/* RIGHT COL: EXAMS COUNTDOWN & PROGRESS SNAPSHOT */}
        <div className="space-y-4 sm:space-y-6">
          
          {/* Upcoming Exam Countdown */}
          <Card className="border-slate-800 bg-slate-900/60 p-4 sm:p-6 space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Target className="w-4 h-4 text-rose-400" />
                Prochains Examens & Partiels
              </h3>
              {planTier === 'free' && (
                <button
                  type="button"
                  onClick={onViewPricing}
                  className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 shrink-0 hover:scale-105 active:scale-95 transition-transform cursor-pointer"
                  title="Voir les formules et tarifs"
                >
                  ⭐ PRO
                </button>
              )}
            </div>

            {planTier === 'free' ? (
              <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-2.5 text-xs">
                <p className="text-slate-300 leading-relaxed">
                  Le compte à rebours et l'adaptation automatique du planning aux dates de partiels sont réservés à l'offre <strong>KONAN PRO</strong>.
                </p>
                <button
                  type="button"
                  onClick={onViewPricing}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                >
                  <span>Passer à KONAN PRO (Tarifs)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : upcomingExams.length === 0 ? (
              <p className="text-xs text-slate-400 italic">Aucune date d'examen renseignée.</p>
            ) : (
              <div className="space-y-2.5">
                {upcomingExams.slice(0, 4).map(sub => (
                  <div
                    key={sub.id}
                    className="p-2.5 sm:p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between text-xs gap-2.5"
                  >
                    <div className="space-y-0.5 min-w-0 flex-1">
                      <p className="font-bold text-white break-words leading-snug">{sub.name}</p>
                      <p className="text-[11px] text-slate-400 break-words">Coeff {sub.coefficient} • Cible : {sub.targetGrade}/20</p>
                    </div>
                    {sub.daysRemaining !== null && (
                      <Badge
                        variant={sub.daysRemaining <= 7 ? 'rose' : sub.daysRemaining <= 15 ? 'amber' : 'cyan'}
                        size="sm"
                        className="font-mono font-bold shrink-0"
                      >
                        J-{sub.daysRemaining}
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            )}

            <Button
              variant="outline"
              size="sm"
              onClick={() => onNavigate('subjects')}
              className="w-full text-xs cursor-pointer py-2"
            >
              Gérer les matières & coefficients
            </Button>
          </Card>

          {/* Quick Stats Widget */}
          <Card className="border-slate-800 bg-slate-900/60 p-4 sm:p-6 space-y-3 sm:space-y-4">
            <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              Indicateurs de Réussite
            </h3>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center text-slate-300">
                <span>Rythme d'étude :</span>
                <span className="font-bold text-white font-mono">{preferences.chronotype}</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Objectif quotidien :</span>
                <span className="font-bold text-cyan-400 font-mono">
                  {formatMinutesToHours(preferences.targetDailyStudyMinutes)}
                </span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Sessions effectuées :</span>
                <span className="font-bold text-emerald-400 font-mono">
                  <AnimatedCounter value={studySessions.filter(s => s.completed).length} /> validées
                </span>
              </div>
            </div>

            <Button
              variant="secondary"
              size="sm"
              onClick={() => onNavigate('analytics')}
              className="w-full text-xs cursor-pointer py-2"
            >
              Consulter les statistiques complètes
            </Button>
          </Card>

        </div>

      </div>

      {/* Session Method Explainer Modal */}
      <SessionExplainerModal
        isOpen={!!selectedExplainerType}
        onClose={() => setSelectedExplainerType(null)}
        sessionType={selectedExplainerType}
      />

    </div>
  );
};
