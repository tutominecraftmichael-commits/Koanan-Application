import React, { useState } from 'react';
import type { 
  Subject, 
  ClassSlot, 
  StudySession, 
  StudyPreferences, 
  ActiveAppView,
  AcademicGoal
} from '../../types';
import { DAYS_OF_WEEK } from '../../types';
import { Button } from '../../components/ui/Button';
import { afterShine } from '../../lib/shineClick';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { formatMinutesToHours, getDaysRemaining, getSessionExamCountdown, parseTimeToMinutes, getWeekDateRange, isDateInWeek } from '../../lib/utils';
import { isExamPrepOpenFor } from '../../lib/featureFlags';
import { ExamPrepPausedNotice } from '../../components/common/ExamPrepPausedNotice';
import { FrostOverlay, IceStyles, Snowflake } from '../gamification/Ice';
import { 
  Sparkles, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Target,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Moon,
  Zap,
  Play,
  Trophy,
  ShieldCheck
} from 'lucide-react';
import { KonanMascot } from '../../components/common/KonanMascot';
import { SessionExplainerModal } from '../../components/common/SessionExplainerModal';
import { GoogleCalendarSyncModal } from '../../components/common/GoogleCalendarSyncModal';
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
  /** Seule façon de valider une séance : la faire (cours guidé, devoir ou chronomètre jusqu'au bout) */
  onStartFocusSession: (session: StudySession) => void;
  onOpenPresetModal?: () => void;
  isDemoMode?: boolean;
  planTier?: 'free' | 'pro' | 'plus';
  onViewPricing?: () => void;
  onUpgradeToPro?: () => void;
  cycleCompletedDate?: string;
  onStartNewCycleEarly?: () => void;
  // KONAN PLUS callbacks & state
  konanId?: string;
  invitedIds?: string[];
  invitedEmails?: string[];
  academicGoal?: AcademicGoal;
  onOpenGroupModal?: () => void;
  onOpenGoalModal?: () => void;
  isGroupGuest?: boolean;
  invitedBy?: { name: string; konanId: string; email?: string };
  userUid?: string;
  /** Tuile « Ligue » : rang de la semaine et division (null : pas dans la ligue) */
  /** frozen : réputation de 80 % ou moins → ligue gelée (glace sur la tuile) */
  leagueSummary?: { rank: number | null; divisionName: string; frozen?: boolean } | null;
  /** Tuile « Réputation » (%) */
  reputation?: number;
}

/** Pastille de la méthode, comme la maquette (« Pomodoro · 25 + 5 »). */
const methodChipLabel = (pacing?: string): string => {
  switch (pacing) {
    case 'pomodoro': return 'Pomodoro · 25 + 5';
    case 'time_blocking':
    case 'deep_work': return 'Time Blocking · 75 + 15';
    case 'feynman': return 'Feynman';
    case 'two_minutes_rule': return 'Règle des 2 minutes';
    case 'active_recall':
    case 'active_recall_spaced':
    case 'spaced_repetition': return 'Rappel actif';
    default: return 'Séance guidée';
  }
};

export const cleanSessionTitle = (rawTitle: string): string => {
  if (!rawTitle) return '';
  return rawTitle
    .replace(/^(?:Active Recall & Espacement|Règle des 2 Min & Sprint|Time Blocking Dédié|Technique Feynman & Vulgarisation|Pomodoro & Deep Work)\s*:\s*/i, '')
    .replace(/\s*\(J-\d+\)\s*/gi, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();
};

export const DashboardOverview: React.FC<DashboardOverviewProps> = ({
  studentName,
  academicLevel,
  subjects,
  classSlots,
  studySessions,
  preferences,
  onNavigate,
  onStartFocusSession,
  planTier = 'free',
  onViewPricing,
  onUpgradeToPro,
  cycleCompletedDate,
  onStartNewCycleEarly,
  konanId: _konanId = 'KN-849201',
  invitedIds: _invitedIds = [],
  invitedEmails: _invitedEmails = [],
  academicGoal: _academicGoal = 'target_16',
  onOpenGroupModal: _onOpenGroupModal,
  onOpenGoalModal: _onOpenGoalModal,
  isGroupGuest: _isGroupGuest = false,
  invitedBy: _invitedBy,
  userUid: _userUid,
  leagueSummary = null,
  reputation,
}) => {
  // Préparation aux devoirs : ouverte pour 2nde A et 2nde C
  const EXAM_PREP_PAUSED = !isExamPrepOpenFor(preferences?.gradeLevel || academicLevel);
  const [lang] = useLanguage();
  const [selectedExplainerType, setSelectedExplainerType] = useState<SessionType | null>(null);
  const [isGoogleCalendarOpen, setIsGoogleCalendarOpen] = useState(false);

  const [showCompletedSessions, setShowCompletedSessions] = useState(false);

  // Notifications : gérées une seule fois pour toute l'appli (App.tsx, webPushService + pushQueueService).


  const now = new Date();
  const todayStr = now.toISOString().slice(0, 10);
  const isCycleCompletedToday = cycleCompletedDate === todayStr;

  const currentDayIndex = (now.getDay() + 6) % 7;
  const currentMinute = now.getHours() * 60 + now.getMinutes();
  const currentDayInfo = DAYS_OF_WEEK.find(d => d.id === currentDayIndex) || DAYS_OF_WEEK[0];

  const validSubjectIds = new Set(subjects.map(s => s.id));

  // Cours universitaires du jour : exclure strictement les matières supprimées ou orphelines
  const todaysClasses = classSlots
    .filter(c => c.dayOfWeek === currentDayIndex && c.subjectId && validSubjectIds.has(c.subjectId))
    .filter(c => {
      const sub = subjects.find(s => s.id === c.subjectId);
      return Boolean(sub && sub.name && sub.name.trim().length > 0);
    })
    .sort((a, b) => (a.startTime || '').localeCompare(b.startTime || ''));

  // Sessions de révision du jour : exclure strictement les matières supprimées ou orphelines
  const allTodaysStudySessions = studySessions
    .filter(s => s.dayOfWeek === currentDayIndex)
    .filter(s => {
      if (!s.subjectId) return Boolean(s.title && s.title.trim().length > 0);
      const sub = subjects.find(sub => sub.id === s.subjectId);
      return Boolean(sub && sub.name && sub.name.trim().length > 0);
    });

  // Sessions en rattrapage aujourd'hui
  const rescheduledTodaySessions = isCycleCompletedToday 
    ? [] 
    : allTodaysStudySessions.filter(s => s.isRescheduledToday && !s.completed);

  // Sessions terminées aujourd'hui
  const completedTodaySessions = allTodaysStudySessions.filter(s => s.completed);

  // SESSIONS ACTIVES DU TABLEAU DE BORD (Règle d'or de l'utilisateur) :
  // Lorsqu'une heure n'a pas été respectée, ne plus l'afficher à son ancienne heure dépassée.
  // Afficher uniquement les séances à venir ou replacées pour rattrapage, strictement ordonnées chronologiquement.
  const activeDisplaySessions = isCycleCompletedToday
    ? []
    : allTodaysStudySessions
        .filter(s => {
          if (s.completed) return false;
          const endMin = parseTimeToMinutes(s.endTime);
          return endMin >= currentMinute || s.isRescheduledToday;
        })
        .sort((a, b) => (a.startTime || '').localeCompare(b.startTime || ''));

  // Prochaine session chronologique exacte :
  const isDayFullyComplete = allTodaysStudySessions.length > 0 && allTodaysStudySessions.every(s => s.completed);

  // Prochaine session chronologique exacte parmi les sessions actives d'aujourd'hui uniquement :
  // Si la journée ou le cycle est validé, aucune session résiduelle n'est affichée.
  const nextStudySession = (isCycleCompletedToday || isDayFullyComplete) 
    ? null 
    : (activeDisplaySessions[0] || null);

  const completedToday = completedTodaySessions.length;

  const currentWeekRange = getWeekDateRange(now);
  const weekSessions = studySessions.filter(s => s.date ? isDateInWeek(s.date, currentWeekRange.mondayStr, currentWeekRange.sundayStr) : true);
  const weekCompletedSessions = weekSessions.filter(s => s.completed);
  const weekCompletedMins = weekCompletedSessions.reduce((acc, s) => acc + s.durationMinutes, 0);
  const weekPlannedMins = weekSessions.reduce((acc, s) => acc + s.durationMinutes, 0);

  const upcomingExams = subjects
    .filter(s => s.examDate)
    .map(s => ({ ...s, daysRemaining: getDaysRemaining(s.examDate) }))
    .sort((a, b) => (a.daysRemaining || 999) - (b.daysRemaining || 999));

  // Charte Excellence : « Lundi 16 novembre » et « Bonjour » / « Bonsoir » selon l'heure
  const nowForGreeting = new Date();
  const todayLongLabel = nowForGreeting.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
  const greetingWord = nowForGreeting.getHours() >= 18 ? 'Bonsoir' : 'Bonjour';

  return (
    <div className="space-y-5 sm:space-y-7 animate-in fade-in duration-300">
      
      {/* ACCUEIL (charte Excellence) : date en petites capitales dorées, salutation, puis la prochaine séance en grand */}
      <div className="space-y-4">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="konan-kicker">{todayLongLabel}</span>
            {(isCycleCompletedToday || isDayFullyComplete) && (
              <Badge variant="emerald" size="sm" dot>
                {isCycleCompletedToday ? "Cycle validé 100 %" : "Journée validée 100 %"}
              </Badge>
            )}
          </div>
          <h1 className="text-[28px] sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {greetingWord}, <span className={
              planTier === 'plus'
                ? 'plus-multicolor-shimmer-text font-black'
                : planTier === 'pro'
                ? 'gold-shimmer-text font-black'
                : ''
            }>{studentName}</span>.
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
            {isCycleCompletedToday ? (
              <span><strong className="text-emerald-700 dark:text-emerald-300 font-semibold">Programme 100 % validé !</strong> Repos bien mérité, on reprend demain.</span>
            ) : isDayFullyComplete ? (
              <span><strong className="text-emerald-700 dark:text-emerald-300 font-semibold">Toutes les séances du jour sont validées !</strong> ({completedToday}/{allTodaysStudySessions.length} terminées).</span>
            ) : (
              <>
                {academicLevel && <>{academicLevel} · </>}
                {allTodaysStudySessions.length > 0
                  ? `${allTodaysStudySessions.length} séance${allTodaysStudySessions.length > 1 ? 's' : ''} aujourd’hui · ${completedToday} terminée${completedToday > 1 ? 's' : ''}`
                  : 'Journée libre : profites-en pour souffler.'}
              </>
            )}
          </p>
        </div>

        {isCycleCompletedToday ? (
          <div className="p-4 rounded-[22px] bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/40 flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 shrink-0">
              <Moon className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-slate-900 dark:text-white">À demain !</p>
              <p className="text-xs text-slate-600 dark:text-slate-400">Toutes les matières sont accomplies.</p>
            </div>
          </div>
        ) : isDayFullyComplete ? (
          <div className="p-4 rounded-[22px] bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/40 flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-slate-900 dark:text-white">Journée validée à 100 % !</p>
              <p className="text-xs text-slate-600 dark:text-slate-400">Bravo pour ton assiduité.</p>
            </div>
          </div>
        ) : nextStudySession && (
          <div className="konan-hairline p-4 sm:p-5 rounded-[22px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none space-y-3.5">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1.5 min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">
                    {nextStudySession.isRescheduledToday ? 'Rattrapage' : 'Prochaine séance'} · {nextStudySession.startTime}
                  </span>
                  {nextStudySession.isExamPrep && (
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0 ${
                      nextStudySession.examType === 'devoir'
                        ? 'bg-rose-500/15 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-500/40'
                        : 'bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-500/40'
                    }`}>
                      <span>{nextStudySession.examType === 'devoir' ? 'Devoir' : 'Examen'}</span>
                      {(() => {
                        const sub = subjects.find(s => s.id === nextStudySession.subjectId);
                        const countdown = getSessionExamCountdown(nextStudySession.dayOfWeek, sub?.examDate);
                        const text = countdown.label || (nextStudySession.examDaysRemaining !== undefined && nextStudySession.examDaysRemaining >= 0 ? `J-${nextStudySession.examDaysRemaining}` : null);
                        return text ? <span className="font-mono">{text}</span> : null;
                      })()}
                    </span>
                  )}
                </div>
                <p className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white break-words leading-tight line-clamp-2">
                  {cleanSessionTitle(nextStudySession.title)}
                </p>
                <p className="text-[13px] text-slate-600 dark:text-slate-400">
                  {nextStudySession.startTime} – {nextStudySession.endTime} · {nextStudySession.durationMinutes} min
                </p>
                {nextStudySession.isRescheduledToday && nextStudySession.originalStartTime && (
                  <span className="inline-block text-[11px] font-bold text-amber-800 dark:text-amber-200 bg-amber-100 dark:bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-300 dark:border-amber-500/40">
                    Manquée à {nextStudySession.originalStartTime} → replacée à {nextStudySession.startTime}
                  </span>
                )}
              </div>
              <div className="shrink-0 -mt-1 -mr-1 hidden min-[360px]:block">
                <KonanMascot pose="cta" size={72} />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-full bg-sky-100 text-sky-800 dark:bg-sky-400/[0.12] dark:text-sky-300 text-xs font-bold">
                {methodChipLabel(nextStudySession.pacingMethod || preferences.pacing)}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 dark:bg-white/[0.06] dark:text-slate-300 text-xs font-bold">
                Aujourd’hui · {completedToday}/{allTodaysStudySessions.length} faite{completedToday > 1 ? 's' : ''}
              </span>
            </div>
            <div className="h-2 rounded-full bg-slate-200 dark:bg-white/[0.08] overflow-hidden" role="progressbar" aria-label="Séances du jour" aria-valuemin={0} aria-valuemax={allTodaysStudySessions.length} aria-valuenow={completedToday}>
              <div className="h-full rounded-full bg-sky-500 dark:bg-sky-400 transition-all" style={{ width: `${allTodaysStudySessions.length ? Math.round((completedToday / allTodaysStudySessions.length) * 100) : 0}%` }} />
            </div>
            <button
              type="button"
              onClick={afterShine(() => onStartFocusSession(nextStudySession))}
              className={`relative overflow-hidden konan-btn-shine w-full h-[52px] text-[15px] cursor-pointer ${nextStudySession.isRescheduledToday ? 'konan-btn-gold' : 'konan-btn'}`}
              title="Lancer le cours guidé ou le chronomètre d'étude pour cette séance"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{nextStudySession.isRescheduledToday ? 'Faire le rattrapage' : 'Commencer la séance'}</span>
            </button>
          </div>
        )}

        {/* Ligue et réputation (maquette ; pas de série de jours) */}
        {(leagueSummary || typeof reputation === 'number') && (
          <div className="grid grid-cols-2 gap-2.5">
            {leagueSummary && (
              <button
                type="button"
                onClick={() => onNavigate('league')}
                className="relative overflow-hidden text-left p-3 rounded-[18px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/[0.07] flex flex-col gap-1 cursor-pointer hover:border-amber-300 dark:hover:border-[#F5C451]/40 transition-colors"
              >
                {/* Ligue gelée (réputation de 80 % ou moins) : la tuile est prise dans la glace */}
                {leagueSummary.frozen && <><IceStyles /><FrostOverlay /></>}
                <span className="relative flex items-center gap-1.5">
                  <Trophy className="w-5 h-5 text-amber-600 dark:text-[#F5C451]" />
                  {leagueSummary.frozen && <Snowflake size={16} className="text-cyan-600 dark:text-cyan-200" />}
                </span>
                <span className="relative text-[17px] font-extrabold text-slate-900 dark:text-white">
                  {leagueSummary.rank ? <>{leagueSummary.rank}<span className="text-[11px]">{leagueSummary.rank === 1 ? 'er' : 'e'}</span></> : '—'}
                </span>
                <span className="relative text-[11px] text-slate-600 dark:text-slate-400">{leagueSummary.frozen ? `Ligue ${leagueSummary.divisionName} · gelée` : `Ligue ${leagueSummary.divisionName}`}</span>
              </button>
            )}
            {typeof reputation === 'number' && (
              <div className="p-3 rounded-[18px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/[0.07] flex flex-col gap-1">
                <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-[17px] font-extrabold text-slate-900 dark:text-white tabular-nums">{reputation} %</span>
                <span className="text-[11px] text-slate-600 dark:text-slate-400">Réputation</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 2-COLUMN COCKPIT (TODAY'S TIMELINE + ACADEMIC INSIGHTS) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        
        {/* LEFT 2 COLS: TODAY'S TIMELINE */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-sky-700 dark:text-sky-400" />
              <span>Programme ({currentDayInfo.label})</span>
            </h2>
            <Button
              variant="ghost"
              size="sm"
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              onClick={() => onNavigate('planner')}
              className="text-xs text-sky-700 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 p-1 sm:px-3"
            >
              Semaine complète
            </Button>
          </div>

          {/* Timeline Cards */}
          <div className="space-y-3">
            
            {/* 1. Classes */}
            {todaysClasses.length > 0 && (
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                  Cours universitaires ({todaysClasses.length})
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {todaysClasses.map(c => {
                    const sub = subjects.find(s => s.id === c.subjectId);
                    if (!sub || !sub.name || !sub.name.trim()) return null;
                    return (
                      <div
                        key={c.id}
                        className="p-3 sm:p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-xs"
                        style={{ borderLeftColor: sub.color || '#6366F1', borderLeftWidth: '3px' }}
                      >
                        <div className="min-w-0 flex-1">
                          <p className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm break-words leading-snug">{sub.name}</p>
                          <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5 break-words">{c.room || 'Salle de cours'}</p>
                        </div>
                        <div className="flex items-center sm:flex-col justify-between sm:justify-center sm:text-right font-mono shrink-0 pt-1 sm:pt-0 border-t border-slate-100 dark:border-slate-800/60 sm:border-t-0">
                          <span className="text-slate-700 dark:text-slate-300 font-semibold text-xs">{c.startTime} - {c.endTime}</span>
                          <span className="text-[10px] text-sky-700 dark:text-sky-300 uppercase font-bold">{c.type}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 2. Study Sessions */}
            {isCycleCompletedToday ? (
              <div className="p-6 sm:p-8 rounded-3xl bg-emerald-50 dark:bg-gradient-to-br dark:from-emerald-950/40 dark:via-slate-900 dark:to-slate-950/40 border border-emerald-200 dark:border-emerald-500/30 text-center space-y-4 shadow-sm dark:shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 flex items-center justify-center mx-auto border border-emerald-200 dark:border-emerald-500/30 shadow-md">
                  <Moon className="w-7 h-7" />
                </div>
                <div className="space-y-2 max-w-md mx-auto">
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/20 border border-emerald-200 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
                    Objectif Semaine Validé
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    À demain !
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Toutes les barres de progression sont à zéro. Reposez-vous bien aujourd'hui, on reprend tout dès demain avec votre nouveau planning !
                  </p>
                </div>
                {onStartNewCycleEarly && (
                  <div className="pt-2">
                    <button
                      onClick={onStartNewCycleEarly}
                      className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-xs font-medium cursor-pointer transition-colors"
                    >
                      Recommencer les révisions dès aujourd'hui
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-2.5 pt-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-800 dark:text-sky-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-sky-700 dark:text-sky-400" />
                    Sessions d'Étude ({completedToday}/{allTodaysStudySessions.length} faites)
                  </span>
                  <div className="flex items-center gap-2">
                    {rescheduledTodaySessions.length > 0 && (
                      <span className="text-[10px] font-bold text-amber-700 dark:text-amber-300 uppercase">
                        {rescheduledTodaySessions.length} à rattraper
                      </span>
                    )}
                  </div>
                </div>

                {/* SESSIONS ACTIVES & RATTRAPAGES EN ORDRE CHRONOLOGIQUE STRICT */}
                {activeDisplaySessions.length === 0 ? (
                  <Card className="text-center py-6 sm:py-8 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 shadow-xs">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {completedToday > 0 
                        ? 'Bravo ! Toutes vos sessions prévues aujourd’hui sont complétées.'
                        : 'Aucune session d’étude active pour aujourd’hui.'}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onNavigate('planner')}
                      className="mt-2 text-xs text-sky-700 dark:text-sky-400"
                    >
                      Consulter mon planning de révision
                    </Button>
                  </Card>
                ) : (
                  activeDisplaySessions.map(session => {
                    const sub = subjects.find(s => s.id === session.subjectId);
                    if (session.subjectId && (!sub || !sub.name)) return null;
                    const isRescheduled = Boolean(session.isRescheduledToday);
                    return (
                      <div
                        key={session.id}
                        className={`p-3.5 sm:p-4 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs ${
                          isRescheduled
                            ? 'bg-gradient-to-r from-amber-50/60 via-white to-amber-50/30 dark:from-slate-900 dark:via-amber-950/20 dark:to-slate-900 border-amber-200 dark:border-amber-500/40'
                            : 'bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-700/80 hover:border-sky-400'
                        }`}
                        style={{ borderLeftColor: isRescheduled ? '#F59E0B' : (sub?.color || '#6366F1'), borderLeftWidth: '4px' }}
                      >
                        <div className="space-y-1.5 min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[11px] font-mono font-bold text-sky-700 dark:text-sky-300">
                              {session.startTime} - {session.endTime} ({session.durationMinutes} min)
                            </span>
                            {isRescheduled && session.originalStartTime && (
                              <span className="text-[10px] font-mono font-bold text-amber-800 dark:text-amber-200 bg-amber-100 dark:bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-300 dark:border-amber-500/40">
                                Manquée à {session.originalStartTime} → Replacée à {session.startTime}
                              </span>
                            )}
                            {session.isExamPrep && (
                              <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full flex items-center gap-1.5 whitespace-nowrap shrink-0 shadow-xs ${
                                session.examType === 'devoir'
                                  ? 'bg-rose-500/15 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-500/40'
                                  : 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-500/40'
                              }`}>
                                <span>{session.examType === 'devoir' ? 'Devoir' : 'Examen'}</span>
                                {(() => {
                                  const sub = subjects.find(s => s.id === session.subjectId);
                                  const countdown = getSessionExamCountdown(session.dayOfWeek, sub?.examDate);
                                  const text = countdown.label || (session.examDaysRemaining !== undefined && session.examDaysRemaining >= 0 ? `J-${session.examDaysRemaining}` : null);
                                  return text ? (
                                    <span className="font-mono bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-200 px-1 rounded text-[9px] border border-rose-300 dark:border-rose-500/30">
                                      {text}
                                    </span>
                                  ) : null;
                                })()}
                              </span>
                            )}
                            {session.pacingMethod && (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-sky-50 dark:bg-sky-400/20 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-400/30 font-mono">
                                {session.pacingMethod === 'feynman' ? 'Feynman' : session.pacingMethod === 'time_blocking' ? 'Time Blocking' : session.pacingMethod === 'pomodoro' ? 'Pomodoro' : session.pacingMethod === 'two_minutes_rule' ? '2-Min' : 'Répétition'}
                              </span>
                            )}
                            {session.type !== 'spaced_review' && <button
                              type="button"
                              onClick={() => setSelectedExplainerType(session.type)}
                              className="cursor-pointer hover:scale-105 transition-transform"
                              title={t('clickForGuide', lang)}
                            >
                              <Badge variant="primary" size="sm" className="text-[10px] px-1.5 py-0 hover:ring-1 hover:ring-sky-400">
                                {session.type === 'exercises' ? t('exercisesLabel', lang) :
                                 session.type === 'deep_summary' ? t('deepSummaryLabel', lang) :
                                 session.type === 'flashcards' ? t('activeRecallLabel', lang) :
                                 session.type === 'exam_simulation' ? t('examSimulationLabel', lang) :
                                 t('consolidationLabel', lang)}
                              </Badge>
                            </button>}
                          </div>

                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white break-words leading-snug">
                            {cleanSessionTitle(session.title)}
                          </h4>
                          <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 break-words leading-snug">{sub?.name}</p>
                        </div>

                        <div className="flex items-center gap-2 self-stretch sm:self-center justify-end shrink-0 pt-2 sm:pt-0 border-t border-slate-100 dark:border-slate-800/60 sm:border-t-0">
                          <button
                            type="button"
                            onClick={afterShine(() => onStartFocusSession(session))}
                            className={`relative overflow-hidden konan-btn-shine w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition-all cursor-pointer min-h-[40px] active:translate-y-1 ${
                              isRescheduled
                                ? 'konan-btn-gold'
                                : 'konan-btn'
                            }`}
                            title="Lancer le cours guidé ou le chronomètre d'étude pour cette séance"
                          >
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>{isRescheduled ? 'Faire le rattrapage' : 'Commencer la séance'}</span>
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}

                {/* SÉANCES DÉJÀ VALIDÉES AUJOURD'HUI (REPLIABLES ET PARFAITEMENT LISIBLES) */}
                {completedTodaySessions.length > 0 && (
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setShowCompletedSessions(!showCompletedSessions)}
                      className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-emerald-50/90 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-500/30 hover:bg-emerald-100/80 dark:hover:bg-emerald-950/50 text-emerald-900 dark:text-emerald-300 text-xs font-bold cursor-pointer transition-all shadow-xs"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-lg bg-emerald-500/15 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                          <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                        </div>
                        <span className="font-extrabold text-slate-900 dark:text-white">
                          Séances validées aujourd'hui
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[11px] font-black bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/40">
                          {completedTodaySessions.length}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 text-[11px] font-semibold">
                        <span>{showCompletedSessions ? 'Masquer' : 'Afficher'}</span>
                        {showCompletedSessions ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>

                    {showCompletedSessions && (
                      <div className="mt-2.5 space-y-2 animate-in fade-in slide-in-from-top-1 duration-200">
                        {completedTodaySessions.map(session => {
                          const sub = subjects.find(s => s.id === session.subjectId);
                          return (
                            <div
                              key={session.id}
                              className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs shadow-xs"
                              style={{ borderLeftColor: sub?.color || '#10B981', borderLeftWidth: '4px' }}
                            >
                              <div className="min-w-0 flex-1 space-y-0.5">
                                <div className="flex items-center gap-2">
                                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                                  <p className="font-bold text-slate-800 dark:text-slate-200 text-xs sm:text-sm line-through decoration-emerald-500/60 truncate">
                                    {cleanSessionTitle(session.title)}
                                  </p>
                                </div>
                                <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-medium pl-4">
                                  <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400">
                                    {session.startTime} - {session.endTime}
                                  </span>
                                  <span>•</span>
                                  <span className="font-semibold text-slate-700 dark:text-slate-300 truncate">
                                    {sub?.name || 'Matière'}
                                  </span>
                                  <span>({session.durationMinutes} min)</span>
                                </p>
                              </div>

                              <div className="flex items-center justify-end shrink-0 pl-4 sm:pl-0">
                                <span className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-black flex items-center gap-1.5 select-none">
                                  <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                                  <span>Validée</span>
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

          </div>
        </div>

        {/* RIGHT COL: EXAMS COUNTDOWN & PROGRESS SNAPSHOT */}
        <div className="space-y-4 sm:space-y-6">
          
          {/* Upcoming Exam Countdown */}
          <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-4 sm:p-6 space-y-3 sm:space-y-4 shadow-xs">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <Target className="w-4 h-4 text-rose-500 dark:text-rose-400" />
                Examens & Devoirs Surveillés
              </h3>
              {planTier === 'free' && !EXAM_PREP_PAUSED && (
                <button
                  type="button"
                  onClick={onUpgradeToPro || onViewPricing}
                  className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 border border-amber-300 shadow-sm shrink-0 hover:scale-105 active:scale-95 transition-transform cursor-pointer"
                  title="Inclus dans KONAN PRO"
                >
                  PRO
                </button>
              )}
            </div>

            {EXAM_PREP_PAUSED ? (
              <ExamPrepPausedNotice />
            ) : planTier === 'free' ? (
              <div className="p-3.5 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-500/30 space-y-2.5 text-xs">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Le compte à rebours et l'adaptation automatique du planning aux dates de partiels et devoirs surveillés sont inclus dans <strong className="text-amber-600 dark:text-amber-400 font-extrabold">KONAN PRO</strong>.
                </p>
                <button
                  type="button"
                  onClick={onUpgradeToPro || onViewPricing}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-300 hover:underline transition-all cursor-pointer"
                >
                  <span>Passer à KONAN PRO</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : upcomingExams.length === 0 ? (
              <p className="text-xs text-slate-400 italic">Aucune date d'examen ou devoir renseignée.</p>
            ) : (
              <div className="space-y-2.5">
                {upcomingExams.slice(0, 4).map(sub => (
                  <div
                    key={sub.id}
                    className="p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs gap-2.5"
                  >
                    <div className="space-y-0.5 min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <p className="font-bold text-slate-900 dark:text-white break-words leading-snug">{sub.name}</p>
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                          sub.examType === 'devoir' 
                            ? 'bg-rose-500/15 text-rose-700 dark:text-rose-400 border border-rose-300 dark:border-rose-500/30' 
                            : 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-500/30'
                        }`}>
                          {sub.examType === 'devoir' ? 'Devoir' : 'Examen'}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 break-words">
                        Coeff {sub.coefficient} • Cible : {sub.targetGrade}/20
                        {sub.examTime ? ` • ${sub.examTime}` : ''}
                      </p>
                    </div>
                    {sub.daysRemaining !== null && (
                      <Badge
                        variant={sub.daysRemaining < 0 ? 'slate' : sub.daysRemaining <= 3 ? 'rose' : sub.daysRemaining <= 7 ? 'amber' : 'cyan'}
                        size="sm"
                        className="font-mono font-bold shrink-0"
                      >
                        {sub.daysRemaining < 0 ? 'Passé' : sub.daysRemaining === 0 ? 'Jour J' : `J-${sub.daysRemaining}`}
                      </Badge>
                    )}
                  </div>
                ))}

                {upcomingExams.length > 0 && (
                  <Button
                    variant="secondary"
                    size="sm"
                    leftIcon={<Zap className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />}
                    onClick={() => onNavigate('planner')}
                    className="w-full text-xs font-bold py-2 border-amber-300 dark:border-amber-500/30 text-amber-700 dark:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-500/10 cursor-pointer"
                  >
                     Réviser en priorité selon mes épreuves
                  </Button>
                )}
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
          <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-4 sm:p-6 space-y-3 sm:space-y-4 shadow-xs">
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
              Indicateurs de Réussite
            </h3>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
                <span>Rythme d'étude :</span>
                <span className="font-bold text-slate-900 dark:text-white font-mono">{preferences.chronotype}</span>
              </div>
              <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
                <span>Objectif quotidien :</span>
                <span className="font-bold text-sky-700 dark:text-sky-300 font-mono">
                  {formatMinutesToHours(preferences.targetDailyStudyMinutes)}
                </span>
              </div>
              <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
                <span>Aujourd'hui :</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                  {completedToday} / {allTodaysStudySessions.length} validées
                </span>
              </div>
              <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
                <span>Cette semaine :</span>
                <span className="font-bold text-sky-700 dark:text-sky-400 font-mono">
                  {formatMinutesToHours(weekCompletedMins)} / {formatMinutesToHours(weekPlannedMins)} ({weekCompletedSessions.length} validées)
                </span>
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => onNavigate('analytics')}
                className="w-full text-xs cursor-pointer py-2"
              >
                Consulter les statistiques complètes
              </Button>
            </div>
          </Card>

        </div>

      </div>

      {/* Session Method Explainer Modal */}
      <SessionExplainerModal
        isOpen={!!selectedExplainerType}
        onClose={() => setSelectedExplainerType(null)}
        sessionType={selectedExplainerType}
      />

      {/* Google Calendar Sync Modal with 15-min alerts */}
      <GoogleCalendarSyncModal
        isOpen={isGoogleCalendarOpen}
        onClose={() => setIsGoogleCalendarOpen(false)}
        sessions={studySessions}
        subjects={subjects}
        planTier={planTier}
        onUpgradeToPro={onUpgradeToPro}
        onViewPricing={onViewPricing}
      />

    </div>
  );
};
