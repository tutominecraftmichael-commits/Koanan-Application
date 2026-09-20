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
  RefreshCw, 
  Flame, 
  Filter, 
  Calendar, 
  Plus,
  Star,
  Brain,
  Moon,
  Lock
} from 'lucide-react';
import { SessionExplainerModal } from '../../components/common/SessionExplainerModal';
import { ProFeatureModal } from '../../components/common/ProFeatureModal';
import { GoogleCalendarSyncModal } from '../../components/common/GoogleCalendarSyncModal';
import { generateGoogleCalendarUrl } from '../../services/googleCalendarService';
import { AnimatedCounter } from '../../components/common/AnimatedCounter';
import { useLanguage, t } from '../../lib/i18n';

export interface PlannerViewProps {
  subjects: Subject[];
  classSlots?: ClassSlot[];
  studySessions: StudySession[];
  preferences: StudyPreferences;
  onRegeneratePlan: () => void;
  onToggleSessionComplete: (sessionId: string) => void;
  onAddCustomSession: (session: StudySession) => void;
  onUpdatePreferences?: (preferences: StudyPreferences) => void;
  planTier?: 'free' | 'pro' | 'plus';
  onViewPricing?: () => void;
  onUpgradeToPro?: () => void;
  onResetDailyCatchup?: () => void;
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
  onAddCustomSession,
  onUpdatePreferences,
  planTier = 'free',
  onViewPricing,
  onUpgradeToPro,
  onResetDailyCatchup,
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
  const [proModalInfo, setProModalInfo] = useState<{ title: string; desc: string } | null>(null);
  const [selectedExplainerType, setSelectedExplainerType] = useState<SessionType | null>(null);
  const [lang] = useLanguage();

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
          <h1 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
            <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-400 shrink-0" />
            <span>{t('plannerTitle', lang)}</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            {t('plannerSubtitle', lang)}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant="secondary"
            size="sm"
            leftIcon={<Calendar className="w-3.5 h-3.5 text-sky-400" />}
            onClick={() => setIsGoogleCalendarOpen(true)}
            className="cursor-pointer text-xs flex-1 sm:flex-initial py-2 border-sky-500/30 text-sky-200 hover:text-white"
            title="Synchroniser avec Google Agenda & Alertes 15 min"
          >
            <span className="flex items-center gap-1.5">
              <span>Google Agenda</span>
              <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">15 min</span>
            </span>
          </Button>

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

      {/* Interactive Method Guidance Bar */}
      <div className="p-3.5 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md">
        <div className="flex items-center gap-2 text-xs text-slate-300">
          <Brain className="w-4 h-4 text-cyan-400 shrink-0" />
          <span className="font-semibold text-white">{t('clickForGuide', lang)}</span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          {(Object.entries(sessionTypeBadges) as [SessionType, { label: string; variant: 'primary' | 'cyan' | 'emerald' | 'amber' | 'purple' }][]).map(([type, meta]) => (
            <button
              key={type}
              type="button"
              onClick={() => setSelectedExplainerType(type)}
              className="cursor-pointer hover:scale-105 transition-all text-left group"
              title={t('clickForGuide', lang)}
            >
              <Badge variant={meta.variant} size="sm" className="group-hover:ring-1 group-hover:ring-cyan-400">
                {meta.label} ℹ️
              </Badge>
            </button>
          ))}
        </div>
      </div>

      {/* METRIC STRIP */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
        <Card className="p-3 sm:p-4 bg-slate-900/60 border-slate-800 flex items-center gap-2.5 interactive-card">
          <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] sm:text-xs text-slate-400 truncate">Volume Hebdo</p>
            <p className="text-sm sm:text-lg font-bold text-white font-mono">{formatMinutesToHours(totalMinutes)}</p>
          </div>
        </Card>

        <Card className="p-3 sm:p-4 bg-slate-900/60 border-slate-800 flex items-center gap-2.5 interactive-card">
          <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] sm:text-xs text-slate-400 truncate">Accomplissement</p>
            <p className="text-sm sm:text-lg font-bold text-emerald-400 font-mono">
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
          className="p-3 sm:p-4 bg-slate-900/60 border-slate-800 flex items-center gap-2.5 hover:border-cyan-500/50 cursor-pointer transition-all group interactive-card"
          title="Cliquez pour consulter ou changer la méthode d'espacement active"
        >
          <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
            <Brain className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1">
              <p className="text-[10px] sm:text-xs text-slate-400 truncate">Méthode d'espacement</p>
              {preferences.combinedPacings && preferences.combinedPacings.length > 1 && (
                <span className="text-[9px] font-black px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300">
                  ×{preferences.combinedPacings.length}
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm font-bold text-white truncate group-hover:text-cyan-300 transition-colors">
              {preferences.combinedPacings && preferences.combinedPacings.length > 1
                ? `${preferences.combinedPacings.length} Méthodes Combinées`
                : activePacing.title}
            </p>
          </div>
        </Card>

        <Card className="p-3 sm:p-4 bg-slate-900/60 border-slate-800 flex items-center gap-2.5 interactive-card">
          <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
            <Flame className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] sm:text-xs text-slate-400 truncate">Équilibre</p>
            <p className="text-sm sm:text-lg font-bold text-amber-400 font-mono">Anti-Burnout</p>
          </div>
        </Card>
      </div>

      {/* À Demain Banner in Planner */}
      {isCycleCompletedToday && (
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-950/70 via-slate-900 to-indigo-950/60 border border-emerald-500/40 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          <div className="flex items-start gap-3 min-w-0">
            <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-300 shrink-0 mt-0.5 border border-emerald-500/30">
              <Moon className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="space-y-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-extrabold text-emerald-300 uppercase tracking-wide text-xs">
                  🌙 Cycle 100% validé — À demain !
                </span>
                <Badge variant="emerald" size="sm" className="font-bold">
                  Barres à 0%
                </Badge>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Toutes les progressions sont remises à zéro pour entamer le nouveau cycle dès demain. Reposez-vous bien !
              </p>
            </div>
          </div>
          {onStartNewCycleEarly && (
            <button
              onClick={onStartNewCycleEarly}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold shrink-0 cursor-pointer transition-colors"
            >
              Reprendre dès aujourd'hui
            </button>
          )}
        </div>
      )}

      {/* Daily Catch-up Rescheduled Banner */}
      {studySessions.some(s => s.isRescheduledToday) && !isCycleCompletedToday && (
        <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-950/60 via-slate-900 to-indigo-950/40 border border-amber-500/40 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-start gap-2.5 min-w-0">
            <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-300 shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
            </div>
            <div className="space-y-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-amber-300 uppercase tracking-wide text-[11px]">
                  🔄 Réaménagement de rattrapage actif ({studySessions.filter(s => s.isRescheduledToday).length})
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-200 border border-amber-500/40">
                  Aujourd'hui uniquement
                </span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Une ou plusieurs sessions manquées plus tôt ont été replacées ce soir aux moments où vous êtes libre. Ce réaménagement est éphémère et n'altère pas vos semaines futures.
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
            {onResetDailyCatchup && (
              <button
                onClick={onResetDailyCatchup}
                className="px-2.5 py-1.5 rounded-lg bg-slate-850 hover:bg-slate-800 border border-amber-500/30 text-amber-300 text-[10px] font-bold shrink-0 cursor-pointer transition-colors"
                title="Rétablir les horaires initiaux"
              >
                Rétablir
              </button>
            )}
          </div>
        </div>
      )}

      {/* FILTER BAR (Mobile Carousel + Subject Dropdown) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl glass-panel border border-slate-800">
        
        {/* Days Pills */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar pb-1">
          <span className="text-[11px] font-bold text-slate-400 shrink-0 mr-1 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            Jour :
          </span>
          <button
            onClick={() => setSelectedDayFilter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0 min-h-[34px] cursor-pointer ${
              selectedDayFilter === 'all'
                ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/30'
                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200'
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
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200'
              }`}
            >
              {d.short}
            </button>
          ))}
        </div>

        {/* Subject Filter Dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            Matière :
          </span>
          <select
            value={selectedSubjectFilter}
            onChange={(e) => setSelectedSubjectFilter(e.target.value)}
            className="w-full sm:w-auto bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 cursor-pointer min-h-[36px]"
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
                className={`p-4 sm:p-5 border-slate-800/80 transition-all ${
                  session.completed
                    ? 'bg-slate-900/30 opacity-75 border-emerald-500/20'
                    : 'bg-slate-900/70 border-slate-800'
                }`}
                style={{ borderLeftColor: subject.color, borderLeftWidth: '5px' }}
              >
                <div className="space-y-3">
                  
                  {/* Top line: Day, Time, Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <span className="text-xs font-bold text-slate-200">
                        {dayInfo.label}
                      </span>
                      <span className="text-[11px] sm:text-xs font-mono text-cyan-400 font-bold">
                        {session.startTime} - {session.endTime} ({session.durationMinutes} min)
                      </span>
                      {isToday && (
                        <Badge variant="cyan" size="sm" className="text-[10px] px-1.5 py-0 font-bold">
                          ✨ Aujourd'hui
                        </Badge>
                      )}
                      {session.isRescheduledToday && (
                        <Badge variant="amber" size="sm" className="text-[10px] px-1.5 py-0 font-bold" title={session.rescheduledReason}>
                          🔄 Rattrapage (Init. {session.originalStartTime})
                        </Badge>
                      )}
                      {session.pacingMethod && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-950/80 border border-slate-800 text-slate-300 flex items-center gap-1 shadow-xs">
                          <span>🧠</span>
                          <span className="truncate max-w-[120px]">
                            {getPacingStrategy(session.pacingMethod).title.replace('La Technique de ', '').replace('La Technique ', '').replace("L'", '')}
                          </span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedExplainerType(session.type);
                        }}
                        className="cursor-pointer hover:scale-105 transition-transform"
                        title={t('clickForGuide', lang)}
                      >
                        <Badge variant={badgeType.variant} size="sm" className="text-[10px] px-1.5 py-0 hover:ring-1 hover:ring-cyan-400">
                          {badgeType.label} ℹ️
                        </Badge>
                      </button>
                      {session.priority === 'urgent' && (
                        <Badge variant="rose" size="sm" className="text-[10px] px-1.5 py-0">Urgent</Badge>
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
                    <h3 className={`text-xs sm:text-sm font-bold text-white mt-0.5 ${session.completed ? 'line-through text-slate-400' : ''}`}>
                      {session.title}
                    </h3>
                  </div>

                  {/* Objectives Checkpoints */}
                  {session.objectives && session.objectives.length > 0 && (
                    <div className="space-y-1 bg-slate-950/40 p-2.5 rounded-xl border border-slate-800/60 text-xs">
                      <span className="text-[10px] text-slate-400 font-semibold uppercase block">
                        Checklist :
                      </span>
                      {session.objectives.map((obj, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-300 text-[11px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                          <span className="break-words">{obj}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Actions footer */}
                  <div className="pt-2 sm:pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      {session.completed ? (
                        <button
                          onClick={() => isToday && onToggleSessionComplete(session.id)}
                          disabled={!isToday}
                          className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all min-h-[36px] bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-sm ${
                            isToday ? 'cursor-pointer hover:bg-emerald-500/30' : 'cursor-default opacity-90'
                          }`}
                          title={isToday ? "Cliquer pour annuler la validation" : "Session validée"}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Validé</span>
                        </button>
                      ) : isToday ? (
                        <button
                          onClick={() => onToggleSessionComplete(session.id)}
                          className={`px-3.5 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer min-h-[36px] interactive-pill ${
                            session.isRescheduledToday
                              ? 'bg-amber-600 hover:bg-amber-500 text-white border-amber-400/50 shadow-md shadow-amber-600/30'
                              : 'bg-indigo-600/30 text-indigo-200 border-indigo-500/40 hover:bg-indigo-600 hover:text-white'
                          }`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{session.isRescheduledToday ? '⚡ Valider Rattrapage' : 'Valider'}</span>
                        </button>
                      ) : (
                        <div
                          className="px-3 py-1.5 rounded-xl border border-slate-800/90 bg-slate-950/60 text-slate-400 text-xs font-medium flex items-center gap-1.5 cursor-not-allowed select-none min-h-[36px]"
                          title={`🔒 Anti-triche : Vous pourrez valider cette séance uniquement le ${dayInfo.label}.`}
                        >
                          <Lock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                          <span>Disponible le {dayInfo.label}</span>
                        </div>
                      )}
                    </div>

                    {/* Bouton Rappel Intelligent Google Agenda (Alerte 15 min avant) */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (planTier === 'free') {
                          setProModalInfo({
                            title: "Rappels Intelligents Google Agenda (15 min)",
                            desc: "L'intégration Google Agenda et les alertes push automatiques 15 min avant vos révisions sont réservées au modèle KONAN PRO."
                          });
                        } else {
                          const url = generateGoogleCalendarUrl(session, subject);
                          window.open(url, '_blank', 'noopener,noreferrer');
                        }
                      }}
                      className="px-2.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 hover:bg-sky-950/30 text-slate-400 hover:text-sky-300 transition-colors cursor-pointer flex items-center gap-1.5 text-[11px] font-medium shrink-0 min-h-[36px]"
                      title="Ajouter à Google Agenda avec alerte 15 min avant"
                    >
                      <Calendar className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span className="hidden sm:inline">Rappel 15 min</span>
                    </button>
                  </div>

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

      {/* STRATEGY & PACING EXPLANATION MODAL */}
      <Modal
        isOpen={isStrategyModalOpen}
        onClose={() => setIsStrategyModalOpen(false)}
        title="Méthodes d'Espacement & Stratégies d'Étude"
        maxWidth="lg"
      >
        <div className="space-y-4 text-slate-200">
          <p className="text-xs text-slate-400 leading-relaxed">
            Consultez les 5 méthodes d'espacement et stratégies de concentration intégrées. Cliquez sur une méthode pour lire son explication et l'appliquer à votre planning.
          </p>

          {/* AI Recommendation Context Box - RESERVED TO PRO / PLUS */}
          {(() => {
            if (planTier === 'free') {
              return (
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Les recommandations personnalisées selon votre emploi du temps sont réservées à <strong>KONAN PRO</strong>.</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setIsStrategyModalOpen(false);
                      if (onViewPricing) onViewPricing();
                    }}
                    className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 shrink-0 cursor-pointer hover:bg-amber-500/30 transition-colors ml-2"
                  >
                    ⭐ Découvrir PRO
                  </button>
                </div>
              );
            }
            const rec = recommendPacingStrategies(subjects.length, classSlots);
            return (
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-indigo-950/60 via-slate-900 to-indigo-950/40 border border-indigo-500/40 flex items-start gap-3 shadow-md text-xs">
                <div className="p-2 rounded-xl bg-indigo-500/20 text-cyan-300 shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold text-white text-[11px] uppercase tracking-wide">
                      Recommandation personnalisée :
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-cyan-300 border border-indigo-500/40">
                      {rec.contextTag}
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {rec.rationale}
                  </p>
                </div>
              </div>
            );
          })()}

          {/* Contextual Triple Pacing Combination Banner - RESERVED TO PRO / PLUS */}
          {planTier !== 'free' && (
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-slate-900 to-sky-500/15 border border-amber-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs shadow-md">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 font-black text-amber-300 uppercase tracking-wide text-[11px]">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
                  <span>Combinaison Triple KONAN PRO : {selectedCombinedPacings.length} / 3 sélectionnées</span>
                </div>
                <p className="text-[11px] text-slate-300">
                  Sélectionnez 1, 2 ou 3 méthodes. Vos séances alterneront automatiquement selon la difficulté et vos créneaux.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-1.5 shrink-0">
                {selectedCombinedPacings.map((id, idx) => {
                  const p = getPacingStrategy(id);
                  return (
                    <span key={id} className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                      <span>#{idx + 1}</span>
                      <span>{p.title.replace('La Technique de ', '').replace('La Technique ', '').replace("L'", '')}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          {/* Strategy Selector Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
                        setProModalInfo({
                          title: `${s.title}`,
                          desc: `La méthode "${s.title}" (${s.tagline}) fait partie intégrante du modèle KONAN PRO. Sur votre version Gratuite (Free), vous disposez d'un accès illimité aux techniques Pomodoro, Active Recall & Répétition Espacée et la Règle des 2 Minutes.`
                        });
                        return;
                      }
                      setSelectedModalStrategy(s.id);
                      if (planTier === 'free') {
                        setSelectedCombinedPacings([s.id]);
                      } else {
                        // Multi-selection (up to 3 methods on PRO)
                        setSelectedCombinedPacings(prev => {
                          if (prev.includes(s.id)) {
                            if (prev.length === 1) return prev; // Keep at least one
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
                        ? 'bg-slate-900 border-amber-400 ring-1 ring-amber-400/50 shadow-md'
                        : isCurrent
                          ? 'bg-slate-900 border-cyan-400 ring-1 ring-cyan-400/50 shadow-md'
                          : isLocked
                            ? 'bg-slate-950/40 border-slate-800/80 text-slate-400 hover:border-amber-500/40'
                            : isPrimaryRec
                              ? 'bg-slate-950/80 border-amber-500/40 text-slate-300 hover:border-amber-400'
                              : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className={`text-xs font-bold ${isCombined ? 'text-amber-300' : isCurrent ? 'text-cyan-300' : 'text-slate-200'}`}>
                        {s.number}. {s.title}
                      </span>
                      <div className="flex items-center gap-1">
                        {isCombined && (
                          <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                            ✓ Activée #{comboIndex}
                          </span>
                        )}
                        {isLocked && (
                          <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                            ⭐ PRO
                          </span>
                        )}
                        {isPrimaryRec && !isCombined && (
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-0.5">
                            <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" /> Idéal
                          </span>
                        )}
                        {!isPrimaryRec && isRecommended && !isCombined && (
                          <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                            Conseillé
                          </span>
                        )}
                        {isNotRecommended && (
                          <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40">
                            Déconseillé
                          </span>
                        )}
                        {isActiveInPrefs && !isCombined && (
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                            Actif
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-1">
                      {s.shortSummary}
                    </p>
                  </button>
                );
              });
            })()}
          </div>

          {/* Detailed Explanation View */}
          {(() => {
            const strat = getPacingStrategy(selectedModalStrategy);
            const isIdeaLabel = strat.number <= 2;

            return (
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900/90 via-indigo-950/40 to-slate-950 border border-indigo-500/40 space-y-3.5 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 font-black text-sm">
                      {strat.number}
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-white">{strat.title}</h4>
                      <p className="text-[11px] text-indigo-300">{strat.tagline}</p>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-cyan-300 w-fit">
                    {strat.badge}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800 flex items-start gap-2">
                    <span className="font-bold text-cyan-400 uppercase tracking-wide shrink-0 text-[11px]">
                      En bref :
                    </span>
                    <span className="font-semibold text-white">{strat.shortSummary}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-300 space-y-1.5 leading-relaxed">
                    <span className="font-bold text-indigo-300 block text-[11px] uppercase tracking-wider">
                      {isIdeaLabel ? "L'idée :" : "L'explication :"}
                    </span>
                    <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed">
                      {strat.explanation}
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/20 text-xs text-indigo-200 flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    <strong>Impact sur les séances :</strong> Chaque créneau libre est découpé en blocs de <strong>{strat.focusBlockDuration} minutes</strong> avec <strong>{strat.breakBlockDuration} minutes</strong> de pause.
                  </span>
                </div>

                <div className="flex items-center justify-end gap-2.5 pt-1">
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
