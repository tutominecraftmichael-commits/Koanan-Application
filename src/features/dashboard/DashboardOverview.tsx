import React, { useState } from 'react';
import type { 
  Subject, 
  ClassSlot, 
  StudySession, 
  StudyPreferences, 
  ActiveAppView,
  AcademicGoal
} from '../../types';
import { Button } from '../../components/ui/Button';
import { afterShine } from '../../lib/shineClick';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { getDaysRemaining, getSessionExamCountdown, parseTimeToMinutes } from '../../lib/utils';
import { isExamPrepOpenFor } from '../../lib/featureFlags';
import { ExamPrepPausedNotice } from '../../components/common/ExamPrepPausedNotice';
import { AnimatedAvatar } from '../avatar/AnimatedAvatar';
import type { AvatarConfig } from '../../lib/avatar/avatarCatalog';
import { 
  CheckCircle2, 
  ArrowRight, 
  Target,
  Moon,
  Zap,
  Play,
  Trophy
} from 'lucide-react';
import { KonanMascot } from '../../components/common/KonanMascot';
import { SessionExplainerModal } from '../../components/common/SessionExplainerModal';
import { GoogleCalendarSyncModal } from '../../components/common/GoogleCalendarSyncModal';
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
  leagueSummary?: { rank: number | null; divisionName: string } | null;
  /** Carte « Quête d'XP en duo entre amis » */
  friendQuestSlot?: React.ReactNode;
  /** Avatar animé personnalisé de l'élève sur l'accueil */
  avatarConfig?: AvatarConfig | null;
  hasCustomizedAvatar?: boolean;
  onOpenAvatarEditor?: () => void;
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
  classSlots: _classSlots,
  studySessions,
  preferences,
  onNavigate,
  onStartFocusSession,
  planTier = 'free',
  onViewPricing,
  onUpgradeToPro,
  cycleCompletedDate,
  onStartNewCycleEarly: _onStartNewCycleEarly,
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
  friendQuestSlot: _friendQuestSlot,
  avatarConfig = null,
  hasCustomizedAvatar = false,
  onOpenAvatarEditor,
}) => {
  // Préparation aux devoirs : ouverte pour 2nde A et 2nde C
  const EXAM_PREP_PAUSED = !isExamPrepOpenFor(preferences?.gradeLevel || academicLevel, preferences?.country);
  const [selectedExplainerType, setSelectedExplainerType] = useState<SessionType | null>(null);
  const [isGoogleCalendarOpen, setIsGoogleCalendarOpen] = useState(false);

  // Notifications : gérées une seule fois pour toute l'appli (App.tsx, webPushService + pushQueueService).


  const now = new Date();
  const todayStr = now.toISOString().slice(0, 10);
  const isCycleCompletedToday = cycleCompletedDate === todayStr;

  const currentDayIndex = (now.getDay() + 6) % 7;
  const currentMinute = now.getHours() * 60 + now.getMinutes();

  // Sessions de révision du jour : exclure strictement les matières supprimées ou orphelines
  const allTodaysStudySessions = studySessions
    .filter(s => s.dayOfWeek === currentDayIndex)
    .filter(s => {
      if (!s.subjectId) return Boolean(s.title && s.title.trim().length > 0);
      const sub = subjects.find(sub => sub.id === s.subjectId);
      return Boolean(sub && sub.name && sub.name.trim().length > 0);
    });

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
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1.5 min-w-0 flex-1">
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

          <button
            type="button"
            onClick={() => onOpenAvatarEditor?.()}
            title={hasCustomizedAvatar ? 'Personnaliser mon personnage' : 'Créer mon personnage'}
            aria-label="Personnaliser mon personnage"
            className="shrink-0 rounded-full cursor-pointer transition-transform hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <AnimatedAvatar
              config={avatarConfig}
              seed={_konanId || studentName}
              size={58}
              className="ring-2 ring-sky-400/60 shadow-lg shadow-sky-500/15"
              showCustomizeBadge={!hasCustomizedAvatar}
              alt={`Personnage de ${studentName}`}
            />
          </button>
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

        {/* Ligue (maquette ; pas de série de jours). Réputation supprimée le 2026-11-22. */}
        {leagueSummary && (
          <button
            type="button"
            onClick={() => onNavigate('league')}
            className="w-full text-left p-3 rounded-[18px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/[0.07] flex items-center gap-3 cursor-pointer hover:border-amber-300 dark:hover:border-[#F5C451]/40 transition-colors"
          >
            <Trophy className="w-6 h-6 shrink-0 text-amber-600 dark:text-[#F5C451]" />
            <span className="flex flex-col gap-0.5">
              <span className="text-[17px] font-extrabold text-slate-900 dark:text-white">
                {leagueSummary.rank ? <>{leagueSummary.rank}<span className="text-[11px]">{leagueSummary.rank === 1 ? 'er' : 'e'}</span></> : '—'}
              </span>
              <span className="text-[11px] text-slate-600 dark:text-slate-400">{`Ligue ${leagueSummary.divisionName}`}</span>
            </span>
          </button>
        )}

      </div>

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
