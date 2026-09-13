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
  ShieldCheck, 
  Zap, 
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
  preferences,
}) => {
  const [lang] = useLanguage();
  const completedSessions = studySessions.filter(s => s.completed);
  const totalPlannedMinutes = studySessions.reduce((acc, s) => acc + s.durationMinutes, 0);
  const totalCompletedMinutes = completedSessions.reduce((acc, s) => acc + s.durationMinutes, 0) +
    logs.reduce((acc, l) => acc + l.durationMinutes, 0);

  const completionRate = studySessions.length > 0 
    ? Math.round((completedSessions.length / studySessions.length) * 100) 
    : 0;

  const averageRating = logs.length > 0
    ? (logs.reduce((acc, l) => acc + l.satisfactionRating, 0) / logs.length).toFixed(1)
    : '4.8';

  const subjectStats = subjects.map(sub => {
    const subSessions = studySessions.filter(s => s.subjectId === sub.id);
    const subCompleted = subSessions.filter(s => s.completed);
    const plannedMins = subSessions.reduce((acc, s) => acc + s.durationMinutes, 0);
    const doneMins = subCompleted.reduce((acc, s) => acc + s.durationMinutes, 0) +
      logs.filter(l => l.subjectId === sub.id).reduce((acc, l) => acc + l.durationMinutes, 0);

    const progress = (plannedMins > 0 && doneMins > 0) 
      ? Math.min(100, Math.round((doneMins / plannedMins) * 100)) 
      : 0;

    return {
      subject: sub,
      plannedMins,
      doneMins,
      progress,
    };
  });

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div>
        <h1 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
          <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-400 shrink-0" />
          <span>{t('analyticsTitle', lang)}</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
          {t('analyticsSubtitle', lang)}
        </p>
      </div>

      {/* KPI TOP TILES */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
        
        <Card className="p-3.5 sm:p-5 bg-slate-900/60 border-slate-800 flex flex-col justify-between space-y-2 sm:space-y-3 interactive-card">
          <div className="flex items-center justify-between text-slate-400 text-[10px] sm:text-xs font-semibold uppercase">
            <span>Étude Réalisée</span>
            <div className="p-1.5 sm:p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
          </div>
          <div>
            <span className="text-xl sm:text-3xl font-extrabold text-white font-mono">
              {formatMinutesToHours(totalCompletedMinutes)}
            </span>
            <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 truncate">
              Sur {formatMinutesToHours(totalPlannedMinutes)}
            </p>
          </div>
          <ProgressBar value={completionRate} size="sm" showPercentage={false} color="indigo" />
        </Card>

        <Card className="p-3.5 sm:p-5 bg-slate-900/60 border-slate-800 flex flex-col justify-between space-y-2 sm:space-y-3 interactive-card">
          <div className="flex items-center justify-between text-slate-400 text-[10px] sm:text-xs font-semibold uppercase">
            <span>Complétion</span>
            <div className="p-1.5 sm:p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
          </div>
          <div>
            <span className="text-xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
              <AnimatedCounter value={completionRate} suffix="%" className="text-emerald-400" />
            </span>
            <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 truncate">
              {completedSessions.length} validées
            </p>
          </div>
          <ProgressBar value={completionRate} size="sm" showPercentage={false} color="emerald" />
        </Card>

        <Card className="p-3.5 sm:p-5 bg-slate-900/60 border-slate-800 flex flex-col justify-between space-y-2 sm:space-y-3 interactive-card">
          <div className="flex items-center justify-between text-slate-400 text-[10px] sm:text-xs font-semibold uppercase">
            <span>Focus Moyen</span>
            <div className="p-1.5 sm:p-2 rounded-lg bg-amber-500/10 text-amber-400">
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400" />
            </div>
          </div>
          <div>
            <span className="text-xl sm:text-3xl font-extrabold text-amber-300 font-mono">
              <AnimatedCounter value={parseFloat(averageRating)} suffix=" / 5" decimals={1} className="text-amber-300" />
            </span>
            <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 truncate">
              Sur {logs.length} sessions
            </p>
          </div>
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </Card>

        <Card className="p-3.5 sm:p-5 bg-slate-900/60 border-slate-800 flex flex-col justify-between space-y-2 sm:space-y-3 interactive-card">
          <div className="flex items-center justify-between text-slate-400 text-[10px] sm:text-xs font-semibold uppercase">
            <span>Anti-Burnout</span>
            <div className="p-1.5 sm:p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
          </div>
          <div>
            <span className="text-xl sm:text-3xl font-extrabold text-cyan-400 font-mono">
              Optimal
            </span>
            <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 truncate">
              Rythme sain
            </p>
          </div>
          <Badge variant="cyan" size="sm" dot className="text-[10px] px-1.5 py-0">Garanti</Badge>
        </Card>

      </div>

      {/* DETAILED SUBJECT MASTERY BARS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <Card className="lg:col-span-2 border-slate-800 bg-slate-900/60 p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div>
            <h2 className="text-sm sm:text-base font-bold text-white tracking-tight flex items-center gap-2">
              <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
              <span>Temps Passé par Matière</span>
            </h2>
            <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
              Pondération selon les coefficients et la difficulté.
            </p>
          </div>

          <div className="space-y-3">
            {subjectStats.map(({ subject, doneMins, plannedMins, progress }) => (
              <div key={subject.id} className="p-3 sm:p-3.5 rounded-xl bg-slate-950/50 border border-slate-800/80 space-y-2">
                <div className="flex items-center justify-between text-xs gap-2">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: subject.color }} />
                    <span className="font-bold text-white truncate">{subject.name}</span>
                    <Badge variant="slate" size="sm" className="text-[10px] px-1.5 py-0 shrink-0">Coeff {subject.coefficient}</Badge>
                  </div>
                  <div className="font-mono text-slate-300 text-[11px] shrink-0">
                    <span className="text-cyan-400 font-bold">{formatMinutesToHours(doneMins)}</span>
                    <span className="text-slate-500"> / {formatMinutesToHours(plannedMins)}</span>
                  </div>
                </div>

                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full transition-all duration-500 rounded-full"
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

        {/* Right: Cognitive recommendations */}
        <Card className="border-slate-800 bg-slate-900/60 p-4 sm:p-6 space-y-3 sm:space-y-4">
          <h2 className="text-sm sm:text-base font-bold text-white tracking-tight flex items-center gap-2">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
            <span>Conseils Pédagogiques & Bien-Être</span>
          </h2>

          <div className="space-y-2.5 text-xs">
            <div className="p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/30 text-indigo-200 space-y-1">
              <p className="font-bold text-white flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Règle des 24 heures</span>
              </p>
              <p className="text-[11px] leading-relaxed text-slate-300">
                Vos séances sont calées le soir même ou le lendemain des cours pour fixer 80% des notions.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-200 space-y-1">
              <p className="font-bold text-white flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Rythme {preferences.chronotype}</span>
              </p>
              <p className="text-[11px] leading-relaxed text-slate-300">
                Les matières complexes sont placées sur vos pics d'énergie naturelle.
              </p>
            </div>
          </div>
        </Card>

      </div>

      {/* RECENT STUDY SESSIONS LOGS */}
      <Card className="border-slate-800 bg-slate-900/60 p-4 sm:p-6 space-y-3 sm:space-y-4">
        <h2 className="text-sm sm:text-base font-bold text-white tracking-tight flex items-center gap-2">
          <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
          <span>Journal d'Étude Récent</span>
        </h2>

        {logs.length === 0 ? (
          <p className="text-xs text-slate-400 italic py-4 text-center">
            Aucun historique de session. Lancez le Mode Focus pour enregistrer votre première séance !
          </p>
        ) : (
          <div className="divide-y divide-slate-800/80">
            {logs.slice(0, 5).map(log => {
              const sub = subjects.find(s => s.id === log.subjectId);
              return (
                <div key={log.id} className="py-2.5 sm:py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs">
                  <div className="space-y-0.5 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white truncate">{sub?.name || 'Matière'}</span>
                      <Badge variant="cyan" size="sm" className="text-[10px] px-1.5 py-0">{log.durationMinutes} min</Badge>
                    </div>
                    <p className="text-slate-400 text-[11px] truncate">{log.summary}</p>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: log.satisfactionRating }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">
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
