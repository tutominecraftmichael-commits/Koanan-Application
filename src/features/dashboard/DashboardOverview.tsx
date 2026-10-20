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
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { formatMinutesToHours, getDaysRemaining, getSessionExamCountdown, parseTimeToMinutes, getWeekDateRange, isDateInWeek } from '../../lib/utils';
import { 
  Sparkles, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Target,
  TrendingUp,
  GraduationCap,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Moon,
  Zap
} from 'lucide-react';
import { SessionExplainerModal } from '../../components/common/SessionExplainerModal';
import { GoogleCalendarSyncModal } from '../../components/common/GoogleCalendarSyncModal';
import { useLanguage, t } from '../../lib/i18n';
import type { SessionType } from '../../types';
import { enableStudentPushNotifications } from '../../services/fcmNotificationService';

export interface DashboardOverviewProps {
  studentName: string;
  academicLevel: string;
  subjects: Subject[];
  classSlots: ClassSlot[];
  studySessions: StudySession[];
  preferences: StudyPreferences;
  onNavigate: (view: ActiveAppView) => void;
  onToggleSessionComplete: (sessionId: string) => void;
  onStartFocusSession?: (session: StudySession) => void;
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
  onOpenWeeklyRecap?: () => void;
}

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
  onToggleSessionComplete,
  onStartFocusSession,
  onOpenPresetModal,
  isDemoMode = false,
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
  userUid,
  onOpenWeeklyRecap,
}) => {
  const [lang] = useLanguage();
  const [selectedExplainerType, setSelectedExplainerType] = useState<SessionType | null>(null);
  const [isGoogleCalendarOpen, setIsGoogleCalendarOpen] = useState(false);

  const [showCompletedSessions, setShowCompletedSessions] = useState(false);

  // Notifications Web Push (Firebase Cloud Messaging)
  // Pour les membres PRO et PLUS : synchronisation automatique et silencieuse du token FCM en arrière-plan
  // Aucun bouton manuel ni test n'est affiché sur le tableau de bord.
  React.useEffect(() => {
    const isProOrPlus = planTier === 'pro' || planTier === 'plus';
    if (!isProOrPlus) return;

    const effectiveUid = userUid || _konanId;
    if (typeof window !== 'undefined' && 'Notification' in window && 'serviceWorker' in navigator) {
      if (Notification.permission === 'granted') {
        enableStudentPushNotifications(effectiveUid).catch(() => {});
      } else if (Notification.permission === 'default') {
        Notification.requestPermission().then((perm) => {
          if (perm === 'granted') {
            enableStudentPushNotifications(effectiveUid).catch(() => {});
          }
        }).catch(() => {});
      }
    }
  }, [planTier, userUid, _konanId]);


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
  const totalMissedMinutes = rescheduledTodaySessions.reduce((acc, s) => acc + s.durationMinutes, 0);
  const totalMissedHoursText = formatMinutesToHours(totalMissedMinutes);

  const currentWeekRange = getWeekDateRange(now);
  const weekSessions = studySessions.filter(s => s.date ? isDateInWeek(s.date, currentWeekRange.mondayStr, currentWeekRange.sundayStr) : true);
  const weekCompletedSessions = weekSessions.filter(s => s.completed);
  const weekCompletedMins = weekCompletedSessions.reduce((acc, s) => acc + s.durationMinutes, 0);
  const weekPlannedMins = weekSessions.reduce((acc, s) => acc + s.durationMinutes, 0);

  const upcomingExams = subjects
    .filter(s => s.examDate)
    .map(s => ({ ...s, daysRemaining: getDaysRemaining(s.examDate) }))
    .sort((a, b) => (a.daysRemaining || 999) - (b.daysRemaining || 999));

  return (
    <div className="space-y-5 sm:space-y-7 animate-in fade-in duration-300">
      
      {/* WELCOME BANNER WITH INTEGRATED NEXT SESSION */}
      <div className="relative rounded-2xl sm:rounded-3xl p-4 sm:p-7 overflow-hidden border border-indigo-100 dark:border-indigo-500/30 bg-gradient-to-r from-indigo-50/90 via-sky-50/40 to-white dark:from-indigo-950/60 dark:via-slate-900 dark:to-slate-950 shadow-sm dark:shadow-2xl">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 sm:gap-6 relative z-10">
          
          {/* User & Curriculum Greeting */}
          <div className="space-y-1.5 sm:space-y-2 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant={isCycleCompletedToday || isDayFullyComplete ? "emerald" : "cyan"} size="sm" dot>
                {isCycleCompletedToday ? "Cycle Validé 100%" : isDayFullyComplete ? "Journée Validée 100%" : "Anti-Burnout Actif"}
              </Badge>
              <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">Aujourd'hui : {currentDayInfo.label}</span>
            </div>
            
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Bonjour, <span className={
                planTier === 'plus' 
                  ? 'plus-multicolor-shimmer-text font-black' 
                  : planTier === 'pro' 
                  ? 'gold-shimmer-text font-black' 
                  : 'text-gradient-primary'
              }>{studentName}</span> 👋
            </h1>

            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
              {isCycleCompletedToday ? (
                <span>🌟 <strong className="text-emerald-600 dark:text-emerald-300 font-semibold">Programme 100% validé !</strong> Repos bien mérité, on reprend demain.</span>
              ) : isDayFullyComplete ? (
                <span>🎉 <strong className="text-emerald-600 dark:text-emerald-300 font-semibold">Toutes les séances du jour sont validées !</strong> ({completedToday}/{allTodaysStudySessions.length} terminées).</span>
              ) : (
                <>
                  Cursus <strong className="text-slate-700 dark:text-slate-200 font-semibold">{academicLevel}</strong> synchronisé.
                  {allTodaysStudySessions.length > 0
                    ? ` ${activeDisplaySessions.length} session(s) active(s) (${completedToday} terminée(s)).`
                    : ` Journée d'assimilation libre.`}
                </>
              )}
            </p>
          </div>

          {/* Quick Launch Card / Next Session / À Demain Card */}
          {isCycleCompletedToday ? (
            <div className="w-full lg:w-auto p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/40 shadow-xs flex items-center gap-3">
              <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 shrink-0">
                <Moon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-900 dark:text-white">À demain !</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Toutes les matières sont accomplies.</p>
              </div>
            </div>
          ) : isDayFullyComplete ? (
            <div className="w-full lg:w-auto p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/40 shadow-xs flex items-center gap-3">
              <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-900 dark:text-white">Journée validée à 100% !</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Bravo pour votre assiduité.</p>
              </div>
            </div>
          ) : nextStudySession && (
            <div className="w-full lg:max-w-md p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-indigo-200 dark:border-indigo-500/40 shadow-sm dark:shadow-xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 shrink-0">
              <div className="space-y-1 text-left min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] uppercase font-bold text-indigo-600 dark:text-indigo-400 tracking-wider">
                    Prochaine Session
                  </span>
                  {nextStudySession.isExamPrep && (
                    <span className={`text-[9px] font-black px-1.5 py-0.2 rounded-full flex items-center gap-1 shrink-0 ${
                      nextStudySession.examType === 'devoir'
                        ? 'bg-rose-500/15 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-500/40'
                        : 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-500/40'
                    }`}>
                      <span>{nextStudySession.examType === 'devoir' ? 'Devoir' : '⚡ Examen'}</span>
                      {(() => {
                        const sub = subjects.find(s => s.id === nextStudySession.subjectId);
                        const countdown = getSessionExamCountdown(nextStudySession.dayOfWeek, sub?.examDate);
                        const text = countdown.label || (nextStudySession.examDaysRemaining !== undefined && nextStudySession.examDaysRemaining >= 0 ? `J-${nextStudySession.examDaysRemaining}` : null);
                        return text ? <span className="font-mono">{text}</span> : null;
                      })()}
                    </span>
                  )}
                  {nextStudySession.isRescheduledToday && (
                    <Badge variant="amber" size="sm" className="text-[9px] px-1.5 py-0 font-bold animate-pulse">
                      🔄 Rattrapage
                    </Badge>
                  )}
                </div>
                <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white break-words leading-tight line-clamp-2">
                  {cleanSessionTitle(nextStudySession.title)}
                </p>
                <p className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400 font-semibold">
                  {nextStudySession.startTime} - {nextStudySession.endTime} ({nextStudySession.durationMinutes} min)
                </p>
              </div>
              <Button
                variant={nextStudySession.isRescheduledToday ? "secondary" : "glow"}
                size="sm"
                leftIcon={<CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />}
                onClick={() => {
                  if (onStartFocusSession) {
                    onStartFocusSession(nextStudySession);
                  } else {
                    onToggleSessionComplete(nextStudySession.id);
                  }
                }}
                className={`w-full sm:w-auto cursor-pointer text-xs font-bold whitespace-nowrap py-2 px-3.5 hover:scale-105 active:scale-95 transition-transform shrink-0 ${
                  nextStudySession.isRescheduledToday
                    ? 'bg-amber-600 hover:bg-amber-500 text-white border-amber-400/50 shadow-md shadow-amber-600/20'
                    : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white border-emerald-500/50 shadow-md shadow-emerald-600/20'
                }`}
              >
                {nextStudySession.isRescheduledToday ? '⚡ Rattrapage' : 'Valider la séance'}
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* COMPACT QUICK ACTION ROW (3 COLUMNS ON ALL SCREENS) */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3.5">
        
        {/* 1. Importer Emploi du Temps OU Exemples d'EDT Démo */}
        {!isDemoMode ? (
          <button 
            type="button"
            onClick={() => onNavigate('upload-schedule')}
            className="group p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white hover:bg-slate-50 dark:bg-slate-900/70 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500/40 transition-all cursor-pointer shadow-xs hover:shadow-md flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-2 sm:gap-3"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-500/20 group-hover:scale-105 transition-all flex items-center justify-center shrink-0">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors leading-tight truncate">
                Importer EDT
              </h3>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 hidden sm:block truncate mt-0.5">
                Texte ou manuel
              </p>
            </div>
          </button>
        ) : (
          <button 
            type="button"
            onClick={() => onOpenPresetModal?.()}
            className="group p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white hover:bg-slate-50 dark:bg-slate-900/70 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500/40 transition-all cursor-pointer shadow-xs hover:shadow-md flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-2 sm:gap-3"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-500/20 group-hover:scale-105 transition-all flex items-center justify-center shrink-0">
              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors leading-tight truncate">
                EDT Démo
              </h3>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 hidden sm:block truncate mt-0.5">
                Modèles ESATIC, etc.
              </p>
            </div>
          </button>
        )}

        {/* 2. Planning d'Étude */}
        <button 
          type="button"
          onClick={() => onNavigate('planner')}
          className="group p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white hover:bg-slate-50 dark:bg-slate-900/70 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500/40 transition-all cursor-pointer shadow-xs hover:shadow-md flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-2 sm:gap-3"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-500/20 group-hover:scale-105 transition-all flex items-center justify-center shrink-0">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors leading-tight truncate">
              Planning
            </h3>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 hidden sm:block truncate mt-0.5">
              Séances optimisées
            </p>
          </div>
        </button>

        {/* 3. Matières & Thèmes */}
        <button 
          type="button"
          onClick={() => onNavigate('subjects')}
          className="group p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white hover:bg-slate-50 dark:bg-slate-900/70 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-emerald-400 dark:hover:border-emerald-500/40 transition-all cursor-pointer shadow-xs hover:shadow-md flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-2 sm:gap-3"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500/20 group-hover:scale-105 transition-all flex items-center justify-center shrink-0">
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors leading-tight truncate">
              Matières
            </h3>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 hidden sm:block truncate mt-0.5">
              Coeffs & chapitres
            </p>
          </div>
        </button>
      </div>

      {/* 2-COLUMN COCKPIT (TODAY'S TIMELINE + ACADEMIC INSIGHTS) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        
        {/* LEFT 2 COLS: TODAY'S TIMELINE */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500 dark:text-indigo-400" />
              <span>Programme ({currentDayInfo.label})</span>
            </h2>
            <Button
              variant="ghost"
              size="sm"
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              onClick={() => onNavigate('planner')}
              className="text-xs text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 p-1 sm:px-3"
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
                          <span className="text-[10px] text-cyan-700 dark:text-cyan-400 uppercase font-bold">{c.type}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 2. Study Sessions */}
            {isCycleCompletedToday ? (
              <div className="p-6 sm:p-8 rounded-3xl bg-emerald-50 dark:bg-gradient-to-br dark:from-emerald-950/40 dark:via-slate-900 dark:to-indigo-950/40 border border-emerald-200 dark:border-emerald-500/30 text-center space-y-4 shadow-sm dark:shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 flex items-center justify-center mx-auto border border-emerald-200 dark:border-emerald-500/30 shadow-md">
                  <Moon className="w-7 h-7" />
                </div>
                <div className="space-y-2 max-w-md mx-auto">
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/20 border border-emerald-200 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
                    🎉 Objectif Semaine Validé
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    À demain ! 🌙
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
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
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

                {/* Daily Catch-up Rescheduled Banner with Clear Breakdown */}
                {rescheduledTodaySessions.length > 0 && (
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50 via-orange-50/40 to-amber-50/70 dark:from-amber-950/70 dark:via-slate-900 dark:to-indigo-950/50 border border-amber-200 dark:border-amber-500/50 shadow-sm dark:shadow-xl space-y-3.5 text-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-start gap-2.5 min-w-0">
                        <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 shrink-0 mt-0.5">
                          <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                        </div>
                        <div className="space-y-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-extrabold text-amber-900 dark:text-amber-300 uppercase tracking-wide text-xs">
                              ⚠️ Réaménagement intelligent : {rescheduledTodaySessions.length} session(s) non validée(s)
                            </span>
                            <Badge variant="amber" size="sm" className="font-bold px-2 py-0.5 animate-pulse">
                              {totalMissedHoursText} à rattraper aujourd'hui
                            </Badge>
                          </div>
                          <p className="text-amber-950/80 dark:text-slate-300 text-xs leading-relaxed">
                            Vos créneaux non respectés ont été replacés pour ce soir afin de ne perdre aucune heure de révision.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                        <Button
                          variant="secondary"
                          size="sm"
                          leftIcon={<CheckCircle2 className="w-3.5 h-3.5" />}
                          onClick={() => onToggleSessionComplete(rescheduledTodaySessions[0].id)}
                          className="bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs py-2 px-3.5 shadow-md shadow-amber-600/30 cursor-pointer hover:scale-105 active:scale-95 transition-all"
                          title="Valider la première séance de rattrapage"
                        >
                          ⚡ Valider le Rattrapage
                        </Button>
                      </div>
                    </div>

                    {/* DÉTAIL CLAIR ET ÉPURÉ DES SÉANCES REPORTÉES CE SOIR */}
                    <div className="space-y-1.5 pt-2 border-t border-amber-200/60 dark:border-slate-800/80">
                      <p className="text-[11px] font-bold text-amber-900/80 dark:text-slate-400 uppercase tracking-wider">
                        Séances reportées ce soir :
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {rescheduledTodaySessions.map(s => {
                          const missedSub = subjects.find(sub => sub.id === s.subjectId);
                          if (s.subjectId && (!missedSub || !missedSub.name)) return null;
                          return (
                            <div
                              key={s.id}
                              className="p-3 rounded-xl bg-white dark:bg-slate-950/70 border border-amber-200 dark:border-amber-500/30 text-xs shadow-xs flex items-center justify-between"
                            >
                              <div className="min-w-0 flex-1 space-y-0.5">
                                <p className="font-extrabold text-slate-900 dark:text-white truncate text-xs">{missedSub?.name || s.title}</p>
                                <p className="text-[11px] text-amber-800 dark:text-amber-300 flex items-center gap-1.5 font-medium">
                                  <span>Reportée ce soir à</span>
                                  <span className="font-mono font-bold text-amber-900 dark:text-amber-200 bg-amber-100 dark:bg-amber-500/20 px-1.5 py-0.5 rounded border border-amber-200 dark:border-amber-500/30">
                                    {s.startTime}
                                  </span>
                                  <span className="text-slate-500 dark:text-slate-400 text-[10px]">({s.durationMinutes} min)</span>
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* SESSIONS ACTIVES & RATTRAPAGES EN ORDRE CHRONOLOGIQUE STRICT */}
                {activeDisplaySessions.length === 0 ? (
                  <Card className="text-center py-6 sm:py-8 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 shadow-xs">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {completedToday > 0 
                        ? '✨ Bravo ! Toutes vos sessions prévues aujourd’hui sont complétées.'
                        : 'Aucune session d’étude active pour aujourd’hui.'}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onNavigate('planner')}
                      className="mt-2 text-xs text-indigo-600 dark:text-indigo-400"
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
                            : 'bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-700/80 hover:border-indigo-400'
                        }`}
                        style={{ borderLeftColor: isRescheduled ? '#F59E0B' : (sub?.color || '#6366F1'), borderLeftWidth: '4px' }}
                      >
                        <div className="space-y-1.5 min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[11px] font-mono font-bold text-cyan-700 dark:text-cyan-400">
                              {session.startTime} - {session.endTime} ({session.durationMinutes} min)
                            </span>
                            {session.isExamPrep && (
                              <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full flex items-center gap-1.5 whitespace-nowrap shrink-0 shadow-xs ${
                                session.examType === 'devoir'
                                  ? 'bg-rose-500/15 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-500/40'
                                  : 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-500/40'
                              }`}>
                                <span>{session.examType === 'devoir' ? 'Devoir' : '⚡ Examen'}</span>
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
                            {isRescheduled && (
                              <Badge variant="amber" size="sm" className="text-[10px] px-2 py-0.5 font-bold animate-pulse" title={session.rescheduledReason || "Rattrapage du jour même uniquement (aucun report au lendemain)"}>
                                🔄 Rattrapage ce soir ({sub?.name || 'Session'})
                              </Badge>
                            )}
                            {session.pacingMethod && (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-cyan-300 border border-indigo-200 dark:border-indigo-500/30 font-mono">
                                🧠 {session.pacingMethod === 'feynman' ? 'Feynman' : session.pacingMethod === 'time_blocking' ? 'Time Blocking' : session.pacingMethod === 'pomodoro' ? 'Pomodoro' : session.pacingMethod === 'two_minutes_rule' ? '2-Min' : 'Répétition'}
                              </span>
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

                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white break-words leading-snug">
                            {cleanSessionTitle(session.title)}
                          </h4>
                          <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 break-words leading-snug">{sub?.name}</p>
                        </div>

                        <div className="flex items-center gap-2 self-stretch sm:self-center justify-end shrink-0 pt-2 sm:pt-0 border-t border-slate-100 dark:border-slate-800/60 sm:border-t-0">

                          <Button
                            variant={isRescheduled ? "secondary" : "glow"}
                            size="sm"
                            leftIcon={<CheckCircle2 className="w-3.5 h-3.5" />}
                            onClick={() => {
                              if (onStartFocusSession) {
                                onStartFocusSession(session);
                              } else {
                                onToggleSessionComplete(session.id);
                              }
                            }}
                            className={`w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer min-h-[38px] ${
                              isRescheduled
                                ? 'bg-amber-600 hover:bg-amber-500 text-white border-amber-400/50 shadow-md shadow-amber-600/30'
                                : 'bg-indigo-600 hover:bg-indigo-500 text-white border-indigo-400/30 shadow-md shadow-indigo-600/20'
                            }`}
                          >
                            <span>{isRescheduled ? '⚡ Valider Rattrapage' : 'Valider la séance'}</span>
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
                              className="p-3 rounded-xl bg-slate-950/40 border border-slate-800 opacity-75 flex items-center justify-between gap-3 text-xs"
                              style={{ borderLeftColor: sub?.color || '#10B981', borderLeftWidth: '3px' }}
                            >
                              <div className="min-w-0 flex-1">
                                <p className="line-through text-slate-300 font-semibold truncate">{cleanSessionTitle(session.title)}</p>
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
              {planTier === 'free' && (
                <button
                  type="button"
                  onClick={onUpgradeToPro || onViewPricing}
                  className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 border border-amber-300 shadow-sm shrink-0 hover:scale-105 active:scale-95 transition-transform cursor-pointer"
                  title="Modèle KONAN PRO (Version PRO ouverte)"
                >
                  PRO OUVERTE
                </button>
              )}
            </div>

            {planTier === 'free' ? (
              <div className="p-3.5 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-500/30 space-y-2.5 text-xs">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Le compte à rebours et l'adaptation automatique du planning aux dates de partiels et devoirs surveillés sont inclus dans <strong className="text-amber-600 dark:text-amber-400 font-extrabold">KONAN PRO</strong> (version PRO ouverte).
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
                    ⚡ Réviser en priorité selon mes épreuves
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
                <span className="font-bold text-cyan-600 dark:text-cyan-400 font-mono">
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
                <span className="font-bold text-indigo-600 dark:text-indigo-400 font-mono">
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

              {onOpenWeeklyRecap && (
                <Button
                  variant="glow"
                  size="sm"
                  onClick={onOpenWeeklyRecap}
                  leftIcon={<Sparkles className="w-3.5 h-3.5 text-amber-300" />}
                  className="w-full text-xs font-bold py-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-md shadow-indigo-600/20 cursor-pointer"
                >
                  Bilan Hebdomadaire
                </Button>
              )}
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
