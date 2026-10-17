import React, { useState } from 'react';
import type { 
  Subject, 
  ClassSlot,
  StudySession, 
  StudyPreferences, 
  SessionType, 
  DayOfWeek,
  StudyPacing
} from '../../types';
import { DAYS_OF_WEEK } from '../../types';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { Modal } from '../../components/ui/Modal';
import { Input, Select } from '../../components/ui/FormControls';
import { formatMinutesToHours, generateId } from '../../lib/utils';
import { getPacingStrategy, PACING_STRATEGIES, recommendPacingStrategies } from '../../lib/pacingStrategies';
import { 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  Check,
  RefreshCw, 
  Flame, 
  Filter, 
  Calendar, 
  Plus,
  Star,
  Brain,
  Moon,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { SessionExplainerModal } from '../../components/common/SessionExplainerModal';
import { ProFeatureModal } from '../../components/common/ProFeatureModal';
import { GoogleCalendarSyncModal } from '../../components/common/GoogleCalendarSyncModal';
import { AnimatedCounter } from '../../components/common/AnimatedCounter';
import { useLanguage, t } from '../../lib/i18n';
import { cleanSessionTitle } from '../dashboard/DashboardOverview';

export interface PlannerViewProps {
  subjects: Subject[];
  classSlots?: ClassSlot[];
  studySessions: StudySession[];
  preferences: StudyPreferences;
  onRegeneratePlan: () => void;
  onToggleSessionComplete: (sessionId: string) => void;
  onStartFocusSession?: (session: StudySession) => void;
  onAddCustomSession: (session: StudySession) => void;
  onUpdatePreferences?: (preferences: StudyPreferences) => void;
  planTier?: 'free' | 'pro' | 'plus';
  onViewPricing?: () => void;
  onUpgradeToPro?: () => void;
  cycleCompletedDate?: string;
  onStartNewCycleEarly?: () => void;
}

export const PlannerView: React.FC<PlannerViewProps> = ({
  subjects,
  classSlots = [],
  studySessions,
  preferences,
  onRegeneratePlan,
  onToggleSessionComplete,
  onStartFocusSession: _onStartFocusSession,
  onAddCustomSession,
  onUpdatePreferences,
  planTier = 'free',
  onViewPricing,
  onUpgradeToPro,
  cycleCompletedDate,
  onStartNewCycleEarly,
}) => {
  const [selectedDayFilter, setSelectedDayFilter] = useState<number | 'all'>('all');
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<string>('all');
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [isAddCustomOpen, setIsAddCustomOpen] = useState(false);
  const [isStrategyModalOpen, setIsStrategyModalOpen] = useState(false);
  const [isGoogleCalendarOpen, setIsGoogleCalendarOpen] = useState(false);
  const [selectedModalStrategy, setSelectedModalStrategy] = useState<string>(preferences.pacing || 'active_recall_spaced');
  const [selectedCombinedPacings, setSelectedCombinedPacings] = useState<StudyPacing[]>(() => {
    if (preferences.combinedPacings && preferences.combinedPacings.length > 0) {
      return preferences.combinedPacings;
    }
    return [preferences.pacing || 'active_recall_spaced'];
  });
  const [showRecDiagnostic, setShowRecDiagnostic] = useState(false);
  const [proModalInfo, setProModalInfo] = useState<{ title: string; desc: string } | null>(null);
  const [selectedExplainerType, setSelectedExplainerType] = useState<SessionType | null>(null);
  const [lang] = useLanguage();

  // Accordion state for checklists: first pending session open by default
  const [openChecklists, setOpenChecklists] = useState<Set<string>>(() => {
    const firstPending = studySessions.find(s => !s.completed);
    return firstPending ? new Set([firstPending.id]) : new Set();
  });

  const toggleChecklist = (id: string) => {
    setOpenChecklists(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const activePacing = getPacingStrategy(preferences.pacing);

  const [customSubjectId, setCustomSubjectId] = useState(subjects[0]?.id || '');
  const [customTitle, setCustomTitle] = useState('');
  const [customDay, setCustomDay] = useState<DayOfWeek>(0);
  const [customStartTime, setCustomStartTime] = useState('17:00');
  const [customEndTime, setCustomEndTime] = useState('17:45');
  const [customType, setCustomType] = useState<SessionType>('spaced_review');

  const handleRegenerate = () => {
    setIsRegenerating(true);
    setTimeout(() => {
      onRegeneratePlan();
      setIsRegenerating(false);
    }, 450);
  };

  const handleSaveCustomSession = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customSubjectId || !customTitle.trim()) return;

    const newSession: StudySession = {
      id: generateId(),
      subjectId: customSubjectId,
      dayOfWeek: customDay,
      date: new Date().toISOString().split('T')[0],
      startTime: customStartTime,
      endTime: customEndTime,
      durationMinutes: preferences.focusBlockDuration || 45,
      type: customType,
      title: customTitle,
      description: 'Session personnalisée créée manuellement.',
      objectives: ['Objectif principal de révision', 'Auto-évaluation rapide'],
      priority: 'high',
      energyRequired: 'medium',
      completed: false,
    };

    onAddCustomSession(newSession);
    setIsAddCustomOpen(false);
    setCustomTitle('');
  };

  const filteredSessions = studySessions.filter(session => {
    if (selectedDayFilter !== 'all' && session.dayOfWeek !== selectedDayFilter) return false;
    if (selectedSubjectFilter !== 'all' && session.subjectId !== selectedSubjectFilter) return false;
    return true;
  });

  const todayStr = new Date().toISOString().slice(0, 10);
  const currentDayIndex = (new Date().getDay() + 6) % 7;
  const isCycleCompletedToday = cycleCompletedDate === todayStr;

  const totalMinutes = studySessions.reduce((acc, s) => acc + s.durationMinutes, 0);
  const completedSessions = studySessions.filter(s => s.completed);
  const completionRate = studySessions.length > 0 ? Math.round((completedSessions.length / studySessions.length) * 100) : 0;

  const sessionTypeBadges: Record<SessionType, { label: string; variant: 'primary' | 'cyan' | 'emerald' | 'amber' | 'purple' }> = {
    spaced_review: { label: t('spacedReviewLabel', lang), variant: 'primary' },
    exercises: { label: t('exercisesLabel', lang), variant: 'cyan' },
    deep_summary: { label: t('deepSummaryLabel', lang), variant: 'purple' },
    flashcards: { label: t('activeRecallLabel', lang), variant: 'emerald' },
    exam_simulation: { label: t('examSimulationLabel', lang), variant: 'amber' },
    consolidation: { label: t('consolidationLabel', lang), variant: 'primary' },
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
            <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-600 dark:text-indigo-400 shrink-0" />
            <span>{t('plannerTitle', lang)}</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            {t('plannerSubtitle', lang)}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant="secondary"
            size="sm"
            leftIcon={<Plus className="w-3.5 h-3.5" />}
            onClick={() => setIsAddCustomOpen(true)}
            className="cursor-pointer text-xs flex-1 sm:flex-initial py-2"
          >
            {t('manualSession', lang)}
          </Button>

          <Button
            variant="glow"
            size="sm"
            leftIcon={<RefreshCw className={`w-3.5 h-3.5 ${isRegenerating ? 'animate-spin' : ''}`} />}
            onClick={handleRegenerate}
            disabled={isRegenerating}
            className="cursor-pointer text-xs flex-1 sm:flex-initial py-2 font-bold"
          >
            {isRegenerating ? '...' : t('regeneratePlan', lang)}
          </Button>
        </div>
      </div>

      {/* Interactive Method Guidance Bar (Fluid Horizontal Ribbon) */}
      <div className="p-3 sm:p-3.5 rounded-2xl bg-gradient-to-r from-indigo-50/90 via-sky-50/40 to-indigo-50/90 dark:from-slate-900 dark:via-indigo-950/40 dark:to-slate-900 border border-indigo-200 dark:border-indigo-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 shadow-xs">
        <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 shrink-0">
          <Brain className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
          <span className="font-semibold text-slate-900 dark:text-white whitespace-nowrap">{t('clickForGuide', lang)}</span>
        </div>
        <div className="w-full sm:w-auto overflow-x-auto no-scrollbar flex items-center gap-2 pb-1 sm:pb-0">
          {(Object.entries(sessionTypeBadges) as [SessionType, { label: string; variant: 'primary' | 'cyan' | 'emerald' | 'amber' | 'purple' }][]).map(([type, meta]) => (
            <button
              key={type}
              type="button"
              onClick={() => setSelectedExplainerType(type)}
              className="cursor-pointer hover:scale-105 transition-all text-left group shrink-0"
              title={t('clickForGuide', lang)}
            >
              <Badge variant={meta.variant} size="sm" className="group-hover:ring-1 group-hover:ring-cyan-400 whitespace-nowrap text-[11px] py-1 px-2.5">
                {meta.label} ℹ️
              </Badge>
            </button>
          ))}
        </div>
      </div>

      {/* METRIC STRIP */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
        <Card className="p-3 sm:p-4 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center gap-2.5 interactive-card shadow-xs">
          <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 truncate">Volume Hebdo</p>
            <p className="text-sm sm:text-lg font-bold text-slate-900 dark:text-white font-mono">{formatMinutesToHours(totalMinutes)}</p>
          </div>
        </Card>

        <Card className="p-3 sm:p-4 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center gap-2.5 interactive-card shadow-xs">
          <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 truncate">Accomplissement</p>
            <p className="text-sm sm:text-lg font-bold text-emerald-600 dark:text-emerald-400 font-mono">
              <AnimatedCounter value={completionRate} suffix="%" /> (<AnimatedCounter value={completedSessions.length} />/{studySessions.length})
            </p>
          </div>
        </Card>

        <Card 
          onClick={() => {
            setSelectedModalStrategy(preferences.pacing || 'active_recall_spaced');
            if (preferences.combinedPacings && preferences.combinedPacings.length > 0) {
              setSelectedCombinedPacings(preferences.combinedPacings);
            }
            setIsStrategyModalOpen(true);
          }}
          className="p-3 sm:p-4 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center gap-2.5 hover:border-cyan-500/50 cursor-pointer transition-all group interactive-card shadow-xs"
          title="Cliquez pour consulter ou changer la méthode d'espacement active"
        >
          <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
            <Brain className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1">
              <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 truncate">Méthode d'espacement</p>
              {preferences.combinedPacings && preferences.combinedPacings.length > 1 && (
                <span className="text-[9px] font-black px-1.5 py-0.2 rounded bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300">
                  ×{preferences.combinedPacings.length}
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
              {preferences.combinedPacings && preferences.combinedPacings.length > 1
                ? `${preferences.combinedPacings.length} Méthodes Combinées`
                : activePacing.title}
            </p>
          </div>
        </Card>

        <Card className="p-3 sm:p-4 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center gap-2.5 interactive-card shadow-xs">
          <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0">
            <Flame className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 truncate">Équilibre</p>
            <p className="text-sm sm:text-lg font-bold text-amber-600 dark:text-amber-400 font-mono">Anti-Burnout</p>
          </div>
        </Card>
      </div>

      {/* À Demain Banner in Planner */}
      {isCycleCompletedToday && (
        <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 dark:bg-gradient-to-r dark:from-emerald-950/70 dark:via-slate-900 dark:to-indigo-950/60 border border-emerald-200 dark:border-emerald-500/40 shadow-xs dark:shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          <div className="flex items-start gap-3 min-w-0">
            <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 shrink-0 mt-0.5 border border-emerald-200 dark:border-emerald-500/30">
              <Moon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="space-y-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-extrabold text-emerald-900 dark:text-emerald-300 uppercase tracking-wide text-xs">
                  🌙 Programme terminé — À demain !
                </span>
                <Badge variant="emerald" size="sm" className="font-bold">
                  Barres à 0%
                </Badge>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                Toutes les progressions sont remises à zéro pour entamer le nouveau cycle dès demain. Reposez-vous bien !
              </p>
            </div>
          </div>
          {onStartNewCycleEarly && (
            <button
              onClick={onStartNewCycleEarly}
              className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-xs font-semibold shrink-0 cursor-pointer transition-colors"
            >
              Reprendre dès aujourd'hui
            </button>
          )}
        </div>
      )}

      {/* Daily Catch-up Rescheduled Banner */}
      {studySessions.some(s => s.isRescheduledToday) && !isCycleCompletedToday && (
        <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-50 via-orange-50/40 to-amber-50/70 dark:from-amber-950/60 dark:via-slate-900 dark:to-indigo-950/40 border border-amber-200 dark:border-amber-500/40 shadow-xs dark:shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-start gap-2.5 min-w-0">
            <div className="p-1.5 rounded-lg bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="space-y-1.5 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wide text-[11px]">
                  🔄 Rattrapage intelligent (Jour même uniquement) ({studySessions.filter(s => s.isRescheduledToday).length})
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-200 border border-amber-300 dark:border-amber-500/40">
                  Jour même
                </span>
              </div>
              <p className="text-amber-950/80 dark:text-slate-300 text-xs leading-relaxed">
                Vos séances non effectuées plus tôt ont été replacées ce soir ou cette nuit (avant minuit 00:00 max). Si vous ne les effectuez pas aujourd'hui, elles sont simplement oubliées sans impacter le programme de demain.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
            {(() => {
              const firstCatchup = studySessions.find(s => s.isRescheduledToday && !s.completed);
              return firstCatchup ? (
                <Button
                  variant="secondary"
                  size="sm"
                  leftIcon={<CheckCircle2 className="w-3.5 h-3.5" />}
                  onClick={() => onToggleSessionComplete(firstCatchup.id)}
                  className="bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs py-2 px-3 shadow-md shadow-amber-600/30 cursor-pointer"
                >
                  ⚡ Valider le rattrapage
                </Button>
              ) : null;
            })()}
          </div>
        </div>
      )}

      {/* FILTER BAR (Mobile Carousel + Subject Dropdown) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900/80 dark:backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-xs">
        
        {/* Days Pills */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar pb-1">
          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 shrink-0 mr-1 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            Jour :
          </span>
          <button
            onClick={() => setSelectedDayFilter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0 min-h-[34px] cursor-pointer ${
              selectedDayFilter === 'all'
                ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/30'
                : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/80 dark:hover:bg-slate-800 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            Tous
          </button>
          {DAYS_OF_WEEK.map(d => (
            <button
              key={d.id}
              onClick={() => setSelectedDayFilter(d.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0 min-h-[34px] cursor-pointer ${
                selectedDayFilter === d.id
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/30'
                  : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/80 dark:hover:bg-slate-800 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              {d.short}
            </button>
          ))}
        </div>

        {/* Subject Filter Dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            Matière :
          </span>
          <select
            value={selectedSubjectFilter}
            onChange={(e) => setSelectedSubjectFilter(e.target.value)}
            className="w-full sm:w-auto bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-xl px-3 py-1.5 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 cursor-pointer min-h-[36px]"
          >
            <option value="all">Toutes les matières</option>
            {subjects.map(s => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
        </div>

      </div>

      {/* SESSIONS LIST */}
      {filteredSessions.length === 0 ? (
        <Card className="text-center p-8 sm:p-12 space-y-4 border-slate-800">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mx-auto">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white">Aucune session d'étude pour ce filtre</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            Cliquez sur "Réorganiser mes révisions" ou modifiez les filtres pour afficher vos sessions de travail.
          </p>
          <Button variant="primary" size="sm" onClick={handleRegenerate}>
            Générer maintenant
          </Button>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {filteredSessions.map(session => {
            const realSubject = subjects.find(s => s.id === session.subjectId);
            const subject: Subject = realSubject || {
              id: session.subjectId,
              name: 'Matière',
              color: '#6366F1',
              coefficient: 1,
              difficulty: 3,
              targetGrade: 10,
            };

            const dayInfo = DAYS_OF_WEEK.find(d => d.id === session.dayOfWeek) || DAYS_OF_WEEK[0];
            const badgeType = sessionTypeBadges[session.type] || { label: 'Étude', variant: 'primary' };
            const isToday = session.dayOfWeek === currentDayIndex;

            return (
              <Card
                key={session.id}
                hoverEffect
                className={`p-4 sm:p-5 transition-all shadow-xs ${
                  session.completed
                    ? 'bg-slate-100/70 dark:bg-slate-900/30 opacity-75 border border-emerald-500/30'
                    : 'bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800'
                }`}
                style={{ borderLeftColor: subject.color, borderLeftWidth: '5px' }}
              >
                <div className="space-y-3">
                  
                  {/* Top line: Day, Time, Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        {dayInfo.label}
                      </span>
                      <span className="text-[11px] sm:text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold">
                        {session.startTime} - {session.endTime} ({session.durationMinutes} min)
                      </span>
                      {isToday && (
                        <Badge variant="cyan" size="sm" className="text-[10px] px-1.5 py-0 font-bold">
                          ✨ Aujourd'hui
                        </Badge>
                      )}
                      {session.isRescheduledToday && (
                        <Badge variant="amber" size="sm" className="text-[10px] px-1.5 py-0 font-bold" title={session.rescheduledReason}>
                          🔄 Reportée ce soir ({subject.name})
                        </Badge>
                      )}
                      {session.pacingMethod && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1 shadow-xs">
                          <span>🧠</span>
                          <span className="truncate max-w-[120px]">
                            {getPacingStrategy(session.pacingMethod).title.replace('La Technique de ', '').replace('La Technique ', '').replace("L'", '')}
                          </span>
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5 shrink-0">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedExplainerType(session.type);
                        }}
                        className="cursor-pointer hover:scale-105 transition-transform shrink-0"
                        title={t('clickForGuide', lang)}
                      >
                        <Badge variant={badgeType.variant} size="sm" className="text-[10px] px-1.5 py-0 hover:ring-1 hover:ring-cyan-400">
                          {badgeType.label} ℹ️
                        </Badge>
                      </button>
                      {session.isExamPrep && (
                        <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full flex items-center gap-1.5 whitespace-nowrap shrink-0 shadow-xs ${
                          session.examType === 'devoir'
                            ? 'bg-rose-500/15 text-rose-700 dark:text-rose-300 border border-rose-500/30'
                            : 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30'
                        }`}>
                          <span>{session.examType === 'devoir' ? 'Devoir' : '⚡ Examen'}</span>
                          {session.examDaysRemaining !== undefined && (
                            <span className="font-mono bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-200 px-1 rounded text-[9px] border border-rose-500/30">
                              J-{session.examDaysRemaining}
                            </span>
                          )}
                        </span>
                      )}
                      {session.priority === 'urgent' && session.examType !== 'devoir' && (
                        <Badge variant="rose" size="sm" className="text-[10px] px-1.5 py-0 shrink-0">Urgent</Badge>
                      )}
                    </div>
                  </div>

                  {/* Subject and Session Title */}
                  <div>
                    <span
                      className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider block"
                      style={{ color: subject.color }}
                    >
                      {subject.name}
                    </span>
                    <h3 className={`text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5 leading-snug break-words ${session.completed ? 'line-through text-slate-400 dark:text-slate-500' : ''}`}>
                      {cleanSessionTitle(session.title)}
                    </h3>
                  </div>

                  {/* Objectives Checkpoints (Accordéon Repliable) */}
                  {session.objectives && session.objectives.length > 0 && (
                    <div className="rounded-xl border border-slate-200 dark:border-slate-800/80 overflow-hidden bg-slate-50/70 dark:bg-slate-950/40">
                      <button
                        type="button"
                        onClick={() => toggleChecklist(session.id)}
                        className="w-full flex items-center justify-between p-2.5 text-left text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900/60 transition-colors cursor-pointer"
                      >
                        <span className="flex items-center gap-1.5 text-[11px] font-bold text-indigo-600 dark:text-indigo-400">
                          <span>📋 Protocole & Checklist ({session.objectives.length} étapes)</span>
                        </span>
                        {openChecklists.has(session.id) ? (
                          <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                        )}
                      </button>
                      {openChecklists.has(session.id) && (
                        <div className="p-2.5 pt-0 space-y-1.5 border-t border-slate-200/60 dark:border-slate-800/60 text-xs animate-in fade-in duration-200">
                          {session.objectives.map((obj, i) => (
                            <div key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300 text-[11px] leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                              <span className="break-words">{obj}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}



                </div>
              </Card>
            );
          })}
        </div>
      )}

      {/* MODAL: ADD CUSTOM SESSION */}
      <Modal
        isOpen={isAddCustomOpen}
        onClose={() => setIsAddCustomOpen(false)}
        title="Ajouter une Session d'Étude"
        description="Ajoutez un créneau ponctuel."
        maxWidth="md"
      >
        <form onSubmit={handleSaveCustomSession} className="space-y-4">
          <Select
            label="Matière"
            value={customSubjectId}
            onChange={(e) => setCustomSubjectId(e.target.value)}
            options={subjects.map(s => ({
              value: s.id,
              label: s.name,
            }))}
          />

          <Input
            label="Titre de la session"
            placeholder="ex. Révision approfondie du TD n°3"
            value={customTitle}
            onChange={(e) => setCustomTitle(e.target.value)}
            required
          />

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <Select
              label="Jour"
              value={customDay}
              onChange={(e) => setCustomDay(Number(e.target.value) as DayOfWeek)}
              options={DAYS_OF_WEEK.map(d => ({
                value: d.id,
                label: d.label,
              }))}
            />

            <Select
              label="Type de session"
              value={customType}
              onChange={(e) => setCustomType(e.target.value as SessionType)}
              options={Object.entries(sessionTypeBadges).map(([key, val]) => ({
                value: key,
                label: val.label,
              }))}
            />
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <Input
              label="Début"
              type="time"
              value={customStartTime}
              onChange={(e) => setCustomStartTime(e.target.value)}
              required
            />
            <Input
              label="Fin"
              type="time"
              value={customEndTime}
              onChange={(e) => setCustomEndTime(e.target.value)}
              required
            />
          </div>

          <div className="pt-4 flex items-center justify-end gap-2 sm:gap-3 border-t border-slate-800">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setIsAddCustomOpen(false)}
              className="text-xs"
            >
              Annuler
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="sm"
              className="text-xs font-bold"
            >
              Ajouter au planning
            </Button>
          </div>
        </form>
      </Modal>

      {/* STRATEGY & PACING METHODS EXPLANATION MODAL (FORMAT 16:9 PANORAMIQUE & ERGONOMIQUE) */}
      <Modal
        isOpen={isStrategyModalOpen}
        onClose={() => setIsStrategyModalOpen(false)}
        title="Méthodes d'Espacement & Stratégies d'Étude"
        maxWidth="16:9"
      >
        <div className="space-y-3 sm:space-y-4 text-slate-800 dark:text-slate-200">
          <p className="hidden sm:block text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Consultez les 5 méthodes d'espacement et stratégies de concentration intégrées. Cliquez sur une méthode pour lire son explication et l'appliquer à votre planning.
          </p>

          {/* AI Recommendation Context Box - RESERVED TO PRO / PLUS */}
          {(() => {
            if (planTier === 'free') {
              return (
                <div className="p-2.5 sm:p-3 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-between text-xs text-slate-600 dark:bg-slate-900/60 dark:border-slate-800/80 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
                    <span className="line-clamp-1 sm:line-clamp-none">Les recommandations personnalisées sont réservées à <strong>KONAN PRO</strong>.</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setIsStrategyModalOpen(false);
                      if (onViewPricing) onViewPricing();
                    }}
                    className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/40 shrink-0 cursor-pointer hover:bg-amber-500/30 transition-colors ml-2"
                  >
                    ⭐ Découvrir PRO
                  </button>
                </div>
              );
            }
            const rec = recommendPacingStrategies(subjects.length, classSlots);
            const targetPacings = rec.recommendedIds && rec.recommendedIds.length > 0 ? rec.recommendedIds : [rec.primaryId];
            const isRecActive = selectedCombinedPacings.length === targetPacings.length &&
              targetPacings.every(id => selectedCombinedPacings.includes(id));
            return (
              <div className="p-3 sm:p-3.5 rounded-2xl bg-gradient-to-r from-indigo-50/90 via-sky-50/50 to-indigo-50/90 border border-indigo-200/90 shadow-sm text-xs dark:bg-gradient-to-r dark:from-indigo-950/60 dark:via-slate-900 dark:to-indigo-950/40 dark:border-indigo-500/40 dark:shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
                  <div className="flex items-center gap-2.5 min-w-0 flex-1">
                    <div className="p-1.5 sm:p-2 rounded-xl bg-indigo-500/10 text-indigo-700 dark:bg-indigo-500/20 dark:text-cyan-300 shrink-0">
                      <Sparkles className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span className="font-bold text-slate-900 dark:text-white text-[11px] uppercase tracking-wide shrink-0">
                          Recommandation KONAN :
                        </span>
                        {targetPacings.map(id => (
                          <span key={id} className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 border border-indigo-200 dark:bg-indigo-500/20 dark:text-cyan-300 dark:border-indigo-500/40">
                            {getPacingStrategy(id).title.replace('La Technique de ', '').replace('La Technique ', '').replace("L'", '')}
                          </span>
                        ))}
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 truncate max-w-[200px] sm:max-w-none">
                          {rec.contextTag}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0 pt-1 sm:pt-0 border-t sm:border-t-0 border-indigo-200/60 dark:border-indigo-500/20">
                    <button
                      type="button"
                      onClick={() => setShowRecDiagnostic(!showRecDiagnostic)}
                      className="px-2.5 py-1 rounded-lg border border-indigo-200 hover:border-indigo-300 text-indigo-700 dark:border-indigo-500/40 dark:text-cyan-300 text-[10px] sm:text-[11px] font-semibold flex items-center gap-1 bg-white/70 dark:bg-slate-900/60 transition-all cursor-pointer"
                    >
                      <span>{showRecDiagnostic ? "Masquer le diagnostic" : "Voir le diagnostic"}</span>
                      {showRecDiagnostic ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    {isRecActive ? (
                      <div className="px-2.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-700 dark:text-emerald-300 font-bold text-[11px] shrink-0 flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Active</span>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedModalStrategy(rec.primaryId);
                          setSelectedCombinedPacings(targetPacings);
                          if (onUpdatePreferences) {
                            onUpdatePreferences({
                              ...preferences,
                              pacing: rec.primaryId,
                              combinedPacings: targetPacings,
                              focusBlockDuration: getPacingStrategy(rec.primaryId).focusBlockDuration,
                              breakBlockDuration: getPacingStrategy(rec.primaryId).breakBlockDuration,
                            });
                            onRegeneratePlan();
                          }
                        }}
                        className="px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-[11px] shrink-0 flex items-center gap-1 transition-all shadow-sm active:scale-95 cursor-pointer"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>Appliquer</span>
                      </button>
                    )}
                  </div>
                </div>

                {showRecDiagnostic && (
                  <div className="mt-2.5 pt-2.5 border-t border-indigo-200/80 dark:border-indigo-500/20 text-slate-600 dark:text-slate-300 text-xs leading-relaxed whitespace-pre-line animate-in fade-in duration-200 max-h-60 overflow-y-auto">
                    {rec.rationale}
                  </div>
                )}
              </div>
            );
          })()}

          {/* SÉLECTEUR RAPIDE POUR MOBILE (lg:hidden) */}
          <div className="lg:hidden space-y-2">
            {planTier !== 'free' && (
              <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-300/80 flex items-center justify-between text-xs dark:bg-amber-500/10 dark:border-amber-500/30">
                <div className="flex items-center gap-1.5 font-bold text-amber-900 dark:text-amber-300 text-[11px]">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500 dark:fill-amber-400 shrink-0" />
                  <span>Combinaison Triple : {selectedCombinedPacings.length} / 3</span>
                </div>
                <div className="flex items-center gap-1">
                  {selectedCombinedPacings.map((id, idx) => (
                    <span key={id} className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-500/20 dark:text-amber-300">
                      #{idx + 1}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 -mx-1 px-1 no-scrollbar">
              {PACING_STRATEGIES.map(s => {
                const isCurrent = (selectedModalStrategy === s.id);
                const isCombined = selectedCombinedPacings.includes(s.id);
                const comboIndex = selectedCombinedPacings.indexOf(s.id) + 1;
                const isLocked = s.planRequired === 'pro' && planTier === 'free';
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => {
                      if (isLocked) {
                        if (onUpgradeToPro) onUpgradeToPro();
                        else setProModalInfo({ title: s.title, desc: `La méthode "${s.title}" fait partie de KONAN PRO.` });
                        return;
                      }
                      setSelectedModalStrategy(s.id);
                      if (planTier === 'free') {
                        setSelectedCombinedPacings([s.id]);
                      } else {
                        setSelectedCombinedPacings(prev => {
                          if (prev.includes(s.id)) {
                            if (prev.length === 1) return prev;
                            return prev.filter(id => id !== s.id);
                          } else {
                            if (prev.length >= 3) return [...prev.slice(0, 2), s.id];
                            return [...prev, s.id];
                          }
                        });
                      }
                    }}
                    className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 flex items-center gap-1.5 transition-all border cursor-pointer ${
                      isCurrent
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm ring-1 ring-indigo-400/50'
                        : isCombined
                          ? 'bg-amber-100 text-amber-900 border-amber-400 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/40'
                          : isLocked
                            ? 'bg-slate-100 text-slate-500 border-slate-200 dark:bg-slate-900 dark:border-slate-800'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800'
                    }`}
                  >
                    <span>{s.number}. {s.title.replace('La Technique de ', '').replace('La Technique ', '').replace("L'", '')}</span>
                    {isCombined && (
                      <span className="text-[9px] font-black px-1 rounded-full bg-amber-400 text-slate-950">
                        #{comboIndex}
                      </span>
                    )}
                    {isLocked && <span className="text-[9px] text-amber-500">⭐</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Disposition Widescreen 16:9 en deux colonnes (Sélecteur à gauche, Fiche détaillée à droite) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-start pt-1">

            {/* COLONNE GAUCHE (5/12) : SÉLECTION DES MÉTHODES (DESKTOP UNIQUEMENT) */}
            <div className="hidden lg:block lg:col-span-5 space-y-3">
              {/* Contextual Triple Pacing Combination Banner - RESERVED TO PRO / PLUS */}
              {planTier !== 'free' && (
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-50 via-orange-50/40 to-sky-50 border border-amber-300/80 flex flex-col gap-2 text-xs shadow-sm dark:bg-gradient-to-r dark:from-amber-500/15 dark:via-slate-900 dark:to-sky-500/15 dark:border-amber-500/40 dark:shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    <div className="flex items-center gap-1.5 font-black text-amber-900 dark:text-amber-300 uppercase tracking-wide text-[11px]">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500 dark:fill-amber-400 dark:text-amber-400 shrink-0" />
                      <span>Combinaison Triple : {selectedCombinedPacings.length} / 3</span>
                    </div>
                    <span className="text-[10px] text-amber-700 dark:text-amber-400/80 font-mono font-medium">Alternance auto</span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Activez jusqu'à 3 méthodes ci-dessous. Vos révisions alterneront automatiquement.
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 pt-1.5 border-t border-amber-200 dark:border-amber-500/20">
                    {selectedCombinedPacings.map((id, idx) => {
                      const p = getPacingStrategy(id);
                      return (
                        <span key={id} className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1 max-w-full dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/40">
                          <span className="font-mono text-amber-700 dark:text-amber-400 shrink-0">#{idx + 1}</span>
                          <span className="truncate">{p.title.replace('La Technique de ', '').replace('La Technique ', '').replace("L'", '')}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Strategy Selector Vertical Stack */}
              <div className="flex flex-col gap-2">
                {(() => {
                  const rec = recommendPacingStrategies(subjects.length, classSlots);
                  return PACING_STRATEGIES.map(s => {
                    const isCurrent = (selectedModalStrategy === s.id);
                    const isCombined = selectedCombinedPacings.includes(s.id);
                    const comboIndex = selectedCombinedPacings.indexOf(s.id) + 1;
                    const isActiveInPrefs = (preferences.pacing === s.id);
                    const isPrimaryRec = planTier !== 'free' && (rec.primaryId === s.id);
                    const isRecommended = planTier !== 'free' && rec.recommendedIds.includes(s.id);
                    const isNotRecommended = planTier !== 'free' && rec.notRecommendedIds?.includes(s.id);
                    const isProMethod = s.planRequired === 'pro';
                    const isLocked = isProMethod && planTier === 'free';

                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => {
                          if (isLocked) {
                            if (onUpgradeToPro) {
                              onUpgradeToPro();
                            } else {
                              setProModalInfo({
                                title: `${s.title}`,
                                desc: `La méthode "${s.title}" (${s.tagline}) fait partie intégrante de KONAN PRO. Profitez de la version PRO ouverte pour réorganiser votre emploi du temps.`
                              });
                            }
                            return;
                          }
                          setSelectedModalStrategy(s.id);
                          if (planTier === 'free') {
                            setSelectedCombinedPacings([s.id]);
                          } else {
                            setSelectedCombinedPacings(prev => {
                              if (prev.includes(s.id)) {
                                if (prev.length === 1) return prev; // Au moins 1 méthode
                                return prev.filter(id => id !== s.id);
                              } else {
                                if (prev.length >= 3) {
                                  return [...prev.slice(0, 2), s.id];
                                }
                                return [...prev, s.id];
                              }
                            });
                          }
                        }}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer relative ${
                          isCombined
                            ? 'bg-amber-50/80 border-amber-500 ring-2 ring-amber-400/40 shadow-sm dark:bg-slate-900 dark:border-amber-400 dark:ring-1 dark:ring-amber-400/50 dark:shadow-md'
                            : isCurrent
                              ? 'bg-indigo-50/80 border-indigo-500 ring-2 ring-indigo-400/40 shadow-sm dark:bg-slate-900 dark:border-cyan-400 dark:ring-1 dark:ring-cyan-400/50 dark:shadow-md'
                              : isLocked
                                ? 'bg-slate-100/70 border-slate-200 text-slate-500 hover:border-amber-400/60 dark:bg-slate-950/40 dark:border-slate-800/80 dark:text-slate-400 dark:hover:border-amber-500/40'
                                : isPrimaryRec
                                  ? 'bg-amber-50/40 border-amber-300/80 text-slate-700 hover:border-amber-500 dark:bg-slate-950/80 dark:border-amber-500/40 dark:text-slate-300 dark:hover:border-amber-400'
                                  : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:text-slate-900 dark:bg-slate-950/60 dark:border-slate-800 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:text-white'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className={`text-xs font-bold ${isCombined ? 'text-amber-900 dark:text-amber-300' : isCurrent ? 'text-indigo-900 dark:text-cyan-300' : 'text-slate-800 dark:text-slate-200'}`}>
                            {s.number}. {s.title}
                          </span>
                          <div className="flex items-center gap-1 shrink-0">
                            {isCombined && (
                              <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-300 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/40">
                                ✓ #{comboIndex}
                              </span>
                            )}
                            {isLocked && (
                              <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-300 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/40">
                                ⭐ PRO
                              </span>
                            )}
                            {isPrimaryRec && !isCombined && (
                              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-300 flex items-center gap-0.5 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/40">
                                <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500 dark:fill-amber-400 dark:text-amber-400" /> Idéal
                              </span>
                            )}
                            {!isPrimaryRec && isRecommended && !isCombined && (
                              <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-300 dark:bg-emerald-500/20 dark:text-emerald-300 dark:border-emerald-500/40">
                                Conseillé
                              </span>
                            )}
                            {isNotRecommended && (
                              <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-rose-50 text-rose-800 border border-rose-300 dark:bg-rose-500/20 dark:text-rose-300 dark:border-rose-500/40">
                                Déconseillé
                              </span>
                            )}
                            {isActiveInPrefs && !isCombined && (
                              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-500/20 dark:text-indigo-300 dark:border-indigo-500/30">
                                Actif
                              </span>
                            )}
                          </div>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                          {s.shortSummary}
                        </p>
                      </button>
                    );
                  });
                })()}
              </div>
            </div>

            {/* COLONNE DROITE (7/12) : FICHE STRATÉGIQUE DÉTAILLÉE (FORMAT 16:9 D'EXPLICATION) */}
            <div className="lg:col-span-7">
              {(() => {
                const strat = getPacingStrategy(selectedModalStrategy);
                const isIdeaLabel = strat.number <= 2;

                return (
                  <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-indigo-50/90 via-sky-50/40 to-slate-50 border border-indigo-200 space-y-3.5 shadow-sm dark:bg-gradient-to-br dark:from-slate-900/90 dark:via-indigo-950/40 dark:to-slate-950 dark:border-indigo-500/40 dark:shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center text-indigo-700 dark:bg-cyan-500/20 dark:border-cyan-400/40 dark:text-cyan-300 font-black text-sm shrink-0">
                          {strat.number}
                        </div>
                        <div>
                          <h4 className="text-sm sm:text-base font-black text-slate-900 dark:text-white">{strat.title}</h4>
                          <p className="text-[11px] text-indigo-600 dark:text-indigo-300">{strat.tagline}</p>
                        </div>
                      </div>

                      <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-indigo-700 dark:bg-slate-900 dark:border-slate-700 dark:text-cyan-300 w-fit shrink-0">
                        {strat.badge}
                      </span>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      <div className="bg-white p-3 rounded-xl border border-slate-200/90 shadow-sm flex items-start gap-2 dark:bg-slate-950/70 dark:border-slate-800">
                        <span className="font-bold text-indigo-600 dark:text-cyan-400 uppercase tracking-wide shrink-0 text-[11px]">
                          En bref :
                        </span>
                        <span className="font-semibold text-slate-800 dark:text-white leading-relaxed">{strat.shortSummary}</span>
                      </div>

                      <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200/90 text-slate-700 space-y-1.5 leading-relaxed shadow-sm dark:bg-slate-950/90 dark:border-slate-800 dark:text-slate-300">
                        <span className="font-bold text-indigo-700 dark:text-indigo-300 block text-[11px] uppercase tracking-wider">
                          {isIdeaLabel ? "L'idée :" : "L'explication :"}
                        </span>
                        <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-[13px] leading-relaxed">
                          {strat.explanation}
                        </p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-950 flex items-center gap-2.5 dark:bg-indigo-950/40 dark:border-indigo-500/20 dark:text-indigo-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>
                        <strong>Calibrage algorithmique :</strong> Blocs d'étude de <strong>{strat.focusBlockDuration} min</strong> avec pause de <strong>{strat.breakBlockDuration} min</strong> et objectifs ciblés.
                      </span>
                    </div>

                    <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-slate-200/80 dark:border-slate-800/80">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => setIsStrategyModalOpen(false)}
                        className="text-xs"
                      >
                        Fermer
                      </Button>

                      {onUpdatePreferences && (
                        strat.planRequired === 'pro' && planTier === 'free' ? (
                          <Button
                            variant="glow"
                            size="sm"
                            onClick={() => {
                              setProModalInfo({
                                title: `${strat.title}`,
                                desc: `La méthode "${strat.title}" fait partie du modèle KONAN PRO. Passez à KONAN PRO pour recalculer et synchroniser votre planning avec cette méthode avancée.`
                              });
                            }}
                            className="text-xs font-bold cursor-pointer bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 border-amber-400"
                          >
                            ⭐ Débloquer avec KONAN PRO
                          </Button>
                        ) : (
                          <Button
                            variant="glow"
                            size="sm"
                            onClick={() => {
                              const primary = getPacingStrategy(selectedCombinedPacings[0] || selectedModalStrategy);
                              onUpdatePreferences({
                                ...preferences,
                                pacing: primary.id,
                                combinedPacings: selectedCombinedPacings.length > 0 ? selectedCombinedPacings : [primary.id],
                                focusBlockDuration: primary.focusBlockDuration,
                                breakBlockDuration: primary.breakBlockDuration,
                              });
                              onRegeneratePlan();
                              setIsStrategyModalOpen(false);
                            }}
                            className="text-xs font-bold cursor-pointer"
                          >
                            Appliquer au planning ({selectedCombinedPacings.length} méthode{selectedCombinedPacings.length > 1 ? 's' : ''})
                          </Button>
                        )
                      )}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </Modal>

      {/* Pro Upgrade Modal */}
      <ProFeatureModal
        isOpen={Boolean(proModalInfo)}
        onClose={() => setProModalInfo(null)}
        featureTitle={proModalInfo?.title}
        featureDescription={proModalInfo?.desc}
        onViewPricing={onViewPricing}
        onUpgradeToPro={onUpgradeToPro}
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

      {/* Session Method Explainer Modal */}
      <SessionExplainerModal
        isOpen={!!selectedExplainerType}
        onClose={() => setSelectedExplainerType(null)}
        sessionType={selectedExplainerType}
      />

    </div>
  );
};
