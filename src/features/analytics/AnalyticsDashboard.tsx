import React from 'react';
import type { Subject, StudySession, StudyLog, StudyPreferences } from '../../types';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { ProgressBar } from '../../components/ui/FormControls';
import { formatMinutesToHours } from '../../lib/utils';
import { 
  BarChart3, 
  CheckCircle2, 
  Award, 
  Clock, 
  Star, 
  Brain 
} from 'lucide-react';
import { useLanguage, t } from '../../lib/i18n';
import { AnimatedCounter } from '../../components/common/AnimatedCounter';

export interface AnalyticsDashboardProps {
  subjects: Subject[];
  studySessions: StudySession[];
  logs: StudyLog[];
  preferences: StudyPreferences;
}

export const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({
  subjects,
  studySessions,
  logs,
  preferences: _preferences,
}) => {
  const [lang] = useLanguage();
  const completedSessions = studySessions.filter(s => s.completed);

  const subjectStats = subjects.map(sub => {
    const subSessions = studySessions.filter(s => s.subjectId === sub.id);
    const subCompleted = subSessions.filter(s => s.completed);
    const plannedMins = subSessions.reduce((acc, s) => acc + s.durationMinutes, 0);

    // 1. Durée réelle des séances validées (la validation crédite sa durée nominale ou réelle si >= 15 min)
    const sessionCompletedMins = subCompleted.reduce((acc, s) => {
      const matchingLog = logs.find(l => l.sessionId === s.id);
      let duration = s.durationMinutes;
      if (matchingLog && matchingLog.durationMinutes >= 15) {
        duration = matchingLog.durationMinutes;
      } else if (s.actualDurationMinutes && s.actualDurationMinutes >= 15) {
        duration = s.actualDurationMinutes;
      }
      return acc + duration;
    }, 0);

    // 2. Logs d'étude autonomes sans séance rattachée (ignorer clics parasites < 15 min)
    const standaloneLogsMins = logs
      .filter(l => l.subjectId === sub.id && (!l.sessionId || !subSessions.some(s => s.id === l.sessionId)))
      .filter(l => l.durationMinutes >= 15)
      .reduce((acc, l) => acc + l.durationMinutes, 0);

    const doneMins = sessionCompletedMins + standaloneLogsMins;

    const progress = (plannedMins > 0 && doneMins > 0) 
      ? Math.min(100, Math.round((doneMins / plannedMins) * 100)) 
      : (doneMins > 0 ? 100 : 0);

    return {
      subject: sub,
      plannedMins,
      doneMins,
      progress,
    };
  });

  const totalPlannedMinutes = subjectStats.reduce((acc, st) => acc + st.plannedMins, 0);
  const totalCompletedMinutes = subjectStats.reduce((acc, st) => acc + st.doneMins, 0);

  const completionRate = totalPlannedMinutes > 0 
    ? Math.min(100, Math.round((totalCompletedMinutes / totalPlannedMinutes) * 100)) 
    : (completedSessions.length > 0 ? 100 : 0);

  // Real Focus Calculation:
  // If user has not completed any sessions in their study plan, average rating is strictly 0.0
  const validCompletedLogs = logs.filter(l => 
    studySessions.some(s => s.id === l.sessionId && s.completed) ||
    (completedSessions.length > 0 && l.satisfactionRating > 0)
  );

  const hasCompletedWork = completedSessions.length > 0 || totalCompletedMinutes > 0;
  const hasValidLogs = hasCompletedWork && validCompletedLogs.length > 0;

  const numericAverageRating = hasValidLogs
    ? Number((validCompletedLogs.reduce((acc, l) => acc + l.satisfactionRating, 0) / validCompletedLogs.length).toFixed(1))
    : 0;

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div>
        <h1 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
          <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-500 dark:text-indigo-400 shrink-0" />
          <span>{t('analyticsTitle', lang)}</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
          {t('analyticsSubtitle', lang)}
        </p>
      </div>

      {/* KPI TOP TILES (3 CARTES CLAIRES & ÉQUILIBRÉES) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        
        <Card className="p-3.5 sm:p-5 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-2 sm:space-y-3 interactive-card shadow-xs">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-[10px] sm:text-xs font-semibold uppercase">
            <span>Étude Réalisée</span>
            <div className="p-1.5 sm:p-2 rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
          </div>
          <div>
            <span className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono">
              {formatMinutesToHours(totalCompletedMinutes)}
            </span>
            <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
              Sur {formatMinutesToHours(totalPlannedMinutes)}
            </p>
          </div>
          <ProgressBar value={completionRate} size="sm" showPercentage={false} color="indigo" />
        </Card>

        <Card className="p-3.5 sm:p-5 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-2 sm:space-y-3 interactive-card shadow-xs">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-[10px] sm:text-xs font-semibold uppercase">
            <span>Complétion</span>
            <div className="p-1.5 sm:p-2 rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
          </div>
          <div>
            <span className="text-xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
              <AnimatedCounter value={completionRate} suffix="%" className="text-emerald-600 dark:text-emerald-400" />
            </span>
            <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
              {completedSessions.length} validées
            </p>
          </div>
          <ProgressBar value={completionRate} size="sm" showPercentage={false} color="emerald" />
        </Card>

        <Card className="p-3.5 sm:p-5 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-2 sm:space-y-3 interactive-card shadow-xs">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-[10px] sm:text-xs font-semibold uppercase">
            <span>Focus Moyen</span>
            <div className={`p-1.5 sm:p-2 rounded-lg ${hasValidLogs ? 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400' : 'bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500'}`}>
              <Star className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${hasValidLogs ? 'fill-amber-500 text-amber-500 dark:fill-amber-400 dark:text-amber-400' : 'text-slate-400 dark:text-slate-600'}`} />
            </div>
          </div>
          <div>
            <span className={`text-xl sm:text-3xl font-extrabold font-mono ${hasValidLogs ? 'text-amber-600 dark:text-amber-300' : 'text-slate-400 dark:text-slate-500'}`}>
              {hasValidLogs ? (
                <AnimatedCounter value={numericAverageRating} suffix=" / 5" decimals={1} className="text-amber-600 dark:text-amber-300" />
              ) : (
                '0.0 / 5'
              )}
            </span>
            <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
              {hasValidLogs ? `Sur ${validCompletedLogs.length} session${validCompletedLogs.length > 1 ? 's' : ''}` : 'Aucun cours effectué'}
            </p>
          </div>
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => {
              const isFilled = hasValidLogs && i < Math.round(numericAverageRating);
              return (
                <Star 
                  key={i} 
                  className={`w-3 h-3 ${isFilled ? 'fill-amber-500 text-amber-500 dark:fill-amber-400 dark:text-amber-400' : 'text-slate-300 dark:text-slate-700 fill-none'}`} 
                />
              );
            })}
          </div>
        </Card>

      </div>


      {/* TEMPS PASSÉ PAR MATIÈRE */}
      <Card className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-4 sm:p-6 space-y-4 sm:space-y-6 shadow-xs">
        <div>
          <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500 dark:text-indigo-400" />
            <span>Temps Passé par Matière</span>
          </h2>
          <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Pondération selon les coefficients et la difficulté.
          </p>
        </div>

        <div className="space-y-3">
          {subjectStats.map(({ subject, doneMins, plannedMins, progress }) => (
            <div key={subject.id} className="p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/80 space-y-2">
              <div className="flex items-center justify-between text-xs gap-2">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: subject.color }} />
                  <span className="font-bold text-slate-900 dark:text-white truncate">{subject.name}</span>
                  <Badge variant="slate" size="sm" className="text-[10px] px-1.5 py-0 shrink-0">Coeff {subject.coefficient}</Badge>
                </div>
                <div className="font-mono text-slate-600 dark:text-slate-300 text-[11px] shrink-0 flex items-center gap-1.5">
                  <span className="text-cyan-700 dark:text-cyan-400 font-bold">{formatMinutesToHours(doneMins)}</span>
                  <span className="text-slate-400 dark:text-slate-500"> / {formatMinutesToHours(plannedMins)}</span>
                </div>
              </div>

              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden p-0.5">
                <div
                  className="h-full transition-all duration-300 ease-out rounded-full shadow-xs"
                  style={{
                    width: `${progress}%`,
                    backgroundColor: subject.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* RECENT STUDY SESSIONS LOGS */}
      <Card className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-4 sm:p-6 space-y-3 sm:space-y-4 shadow-xs">
        <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
          <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 dark:text-amber-400" />
          <span>Journal d'Étude Récent</span>
        </h2>

        {logs.length === 0 ? (
          <p className="text-xs text-slate-500 dark:text-slate-400 italic py-4 text-center">
            Aucun historique de session. Validez vos séances du jour dans votre planning pour créer votre historique !
          </p>
        ) : (
          <div className="divide-y divide-slate-100 dark:divide-slate-800/80">
            {logs.slice(0, 5).map(log => {
              const sub = subjects.find(s => s.id === log.subjectId);
              return (
                <div key={log.id} className="py-2.5 sm:py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs">
                  <div className="space-y-0.5 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 dark:text-white truncate">{sub?.name || 'Matière'}</span>
                      <Badge variant="cyan" size="sm" className="text-[10px] px-1.5 py-0 font-mono">{log.durationMinutes} min</Badge>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-[11px] truncate">{log.summary}</p>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: log.satisfactionRating }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500 dark:fill-amber-400 dark:text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                      {new Date(log.createdAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Card>

    </div>
  );
};
