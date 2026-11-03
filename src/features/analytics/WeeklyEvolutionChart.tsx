import React, { useState, useMemo } from 'react';
import type { StudySession, Subject } from '../../types';
import { Card } from '../../components/ui/Card';
import { TrendingUp, Flame, Calendar, Award } from 'lucide-react';

export interface WeeklyEvolutionChartProps {
  studySessions: StudySession[];
  subjects: Subject[];
}

interface DayStat {
  dayId: number; // 0 = Lundi, ... 6 = Dimanche
  dayName: string;
  dayShort: string;
  plannedCount: number;
  completedCount: number;
  cumulativeCompleted: number;
  cumulativePlanned: number;
  isToday: boolean;
  isPast: boolean;
  completionRate: number;
  completedSubjects: string[];
}

const DAYS_META = [
  { id: 0, name: 'Lundi', short: 'Lun' },
  { id: 1, name: 'Mardi', short: 'Mar' },
  { id: 2, name: 'Mercredi', short: 'Mer' },
  { id: 3, name: 'Jeudi', short: 'Jeu' },
  { id: 4, name: 'Vendredi', short: 'Ven' },
  { id: 5, name: 'Samedi', short: 'Sam' },
  { id: 6, name: 'Dimanche', short: 'Dim' },
];

export const WeeklyEvolutionChart: React.FC<WeeklyEvolutionChartProps> = ({
  studySessions,
  subjects,
}) => {
  const [viewMode, setViewMode] = useState<'cumulative' | 'daily'>('cumulative');
  const [hoveredDayIndex, setHoveredDayIndex] = useState<number | null>(null);

  // Today in 0=Monday..6=Sunday format
  const currentDayIndex = useMemo(() => {
    const jsDay = new Date().getDay(); // 0 is Sunday, 1 is Monday
    return jsDay === 0 ? 6 : jsDay - 1;
  }, []);

  // Compute daily and cumulative statistics
  const daysData: DayStat[] = useMemo(() => {
    let runningCompleted = 0;
    let runningPlanned = 0;
    const result: DayStat[] = [];

    for (const meta of DAYS_META) {
      const daySessions = studySessions.filter((s) => s.dayOfWeek === meta.id);
      const completedSessions = daySessions.filter((s) => s.completed);

      const plannedCount = daySessions.length;
      const completedCount = completedSessions.length;

      runningCompleted += completedCount;
      runningPlanned += plannedCount;

      const completedSubjectNames = Array.from(
        new Set(
          completedSessions.map((s) => {
            const sub = subjects.find((sub) => sub.id === s.subjectId);
            return sub?.name || s.title || 'Matière';
          })
        )
      );

      const rate = plannedCount > 0 ? Math.round((completedCount / plannedCount) * 100) : 0;

      result.push({
        dayId: meta.id,
        dayName: meta.name,
        dayShort: meta.short,
        plannedCount,
        completedCount,
        cumulativeCompleted: runningCompleted,
        cumulativePlanned: runningPlanned,
        isToday: meta.id === currentDayIndex,
        isPast: meta.id < currentDayIndex,
        completionRate: rate,
        completedSubjects: completedSubjectNames,
      });
    }

    return result;
  }, [studySessions, subjects, currentDayIndex]);

  const totalCompletedThisWeek = daysData[daysData.length - 1]?.cumulativeCompleted || 0;
  const totalPlannedThisWeek = daysData[daysData.length - 1]?.cumulativePlanned || 0;

  // Find best day of the week
  const bestDay = useMemo(() => {
    let best = daysData[0];
    for (const d of daysData) {
      if (d.completedCount > best.completedCount) {
        best = d;
      }
    }
    return best.completedCount > 0 ? best : null;
  }, [daysData]);

  // SVG Chart Geometry
  const width = 640;
  const height = 220;
  const paddingLeft = 45;
  const paddingRight = 35;
  const paddingTop = 30;
  const paddingBottom = 40;

  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;

  // Max value calculation for Y axis
  const maxVal = useMemo(() => {
    if (viewMode === 'cumulative') {
      const maxCumul = Math.max(...daysData.map((d) => d.cumulativeCompleted), 1);
      return Math.max(maxCumul, totalPlannedThisWeek > 0 ? Math.ceil(totalPlannedThisWeek * 0.8) : 5);
    } else {
      const maxDaily = Math.max(...daysData.map((d) => Math.max(d.completedCount, d.plannedCount)), 1);
      return Math.max(maxDaily, 4);
    }
  }, [daysData, viewMode, totalPlannedThisWeek]);

  // Points coordinates
  const points = useMemo(() => {
    return daysData.map((d, i) => {
      const x = paddingLeft + (i / (daysData.length - 1)) * chartWidth;
      const value = viewMode === 'cumulative' ? d.cumulativeCompleted : d.completedCount;
      const y = paddingTop + chartHeight - (value / maxVal) * chartHeight;
      return { x, y, value, ...d };
    });
  }, [daysData, viewMode, chartWidth, chartHeight, paddingLeft, paddingTop, maxVal]);

  // Smooth bezier spline path
  const curvePath = useMemo(() => {
    if (points.length === 0) return '';
    if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;

    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const current = points[i];
      const next = points[i + 1];
      const controlX = (current.x + next.x) / 2;
      path += ` C ${controlX} ${current.y}, ${controlX} ${next.y}, ${next.x} ${next.y}`;
    }
    return path;
  }, [points]);

  // Area path for gradient fill
  const areaPath = useMemo(() => {
    if (points.length === 0) return '';
    const bottomY = paddingTop + chartHeight;
    const first = points[0];
    const last = points[points.length - 1];
    return `${curvePath} L ${last.x} ${bottomY} L ${first.x} ${bottomY} Z`;
  }, [curvePath, points, paddingTop, chartHeight]);

  return (
    <Card className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-4 sm:p-6 space-y-4 sm:space-y-5 shadow-xs">
      
      {/* HEADER AVEC TITRE, BADGES DUOLINGO & BOUTONS D'AFFICHAGE */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800/80 pb-3.5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <TrendingUp className="w-4 h-4" />
            </span>
            <h2 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white tracking-tight">
              Évolution Hebdomadaire des Séances
            </h2>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Suivi quotidien de tes cours validés du <strong className="text-slate-700 dark:text-slate-200">Lundi</strong> au <strong className="text-slate-700 dark:text-slate-200">Dimanche</strong>.
          </p>
        </div>

        {/* CONTROLES / COMMUTATEUR CUMULATIF VS PAR JOUR */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-[11px] font-bold">
            <button
              type="button"
              onClick={() => setViewMode('cumulative')}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                viewMode === 'cumulative'
                  ? 'bg-white dark:bg-slate-950 text-indigo-600 dark:text-indigo-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Courbe Cumulée
            </button>
            <button
              type="button"
              onClick={() => setViewMode('daily')}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                viewMode === 'daily'
                  ? 'bg-white dark:bg-slate-950 text-indigo-600 dark:text-indigo-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Par Jour
            </button>
          </div>
        </div>
      </div>

      {/* BANDEAU STATISTIQUES RAPIDES STYLE DUOLINGO */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-xs">
        <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800/80">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
            Validées cette semaine
          </span>
          <span className="text-lg sm:text-xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
            {totalCompletedThisWeek}
            <span className="text-xs text-slate-400 font-normal"> / {totalPlannedThisWeek}</span>
          </span>
        </div>

        <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800/80">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
            Trajectoire
          </span>
          <span className="text-xs sm:text-sm font-extrabold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 mt-1">
            <TrendingUp className="w-3.5 h-3.5" />
            {totalCompletedThisWeek > 0 ? 'Croissante 🚀' : 'En attente'}
          </span>
        </div>

        <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800/80">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
            Meilleur Jour
          </span>
          <span className="text-xs sm:text-sm font-extrabold text-amber-600 dark:text-amber-400 flex items-center gap-1 mt-1">
            <Flame className="w-3.5 h-3.5" />
            {bestDay ? `${bestDay.dayName} (${bestDay.completedCount})` : 'Aucun'}
          </span>
        </div>

        <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800/80">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
            Aujourd'hui
          </span>
          <span className="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-slate-200 flex items-center gap-1 mt-1">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            {daysData[currentDayIndex]?.completedCount || 0} validée(s)
          </span>
        </div>
      </div>

      {/* GRAPH SVG ÉVOLUTION HEBDOMADAIRE */}
      <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50/50 to-white dark:from-slate-950/40 dark:to-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 pt-3 pb-2 px-2">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto max-h-[260px] select-none"
        >
          <defs>
            {/* Gradient sous la courbe */}
            <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#6366F1" stopOpacity="0.20" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0.0" />
            </linearGradient>

            {/* Gradient pour le tracé principal de la ligne */}
            <linearGradient id="strokeGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="50%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>

          {/* LIGNES DE GRILLE HORIZONTALES */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
            const y = paddingTop + chartHeight * (1 - ratio);
            const valLabel = Math.round(maxVal * ratio);
            return (
              <g key={ratio}>
                <line
                  x1={paddingLeft}
                  y1={y}
                  x2={width - paddingRight}
                  y2={y}
                  stroke="currentColor"
                  className="text-slate-200 dark:text-slate-800/60 stroke-1"
                  strokeDasharray={ratio > 0 && ratio < 1 ? '3 3' : undefined}
                />
                <text
                  x={paddingLeft - 8}
                  y={y + 3.5}
                  textAnchor="end"
                  className="text-[9px] font-mono fill-slate-400 dark:fill-slate-600"
                >
                  {valLabel}
                </text>
              </g>
            );
          })}

          {/* ZONE REMPLIE SOUS LA COURBE */}
          <path d={areaPath} fill="url(#curveGradient)" />

          {/* COURBE PRINCIPALE */}
          <path
            d={curvePath}
            fill="none"
            stroke="url(#strokeGradient)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* LIGNES VERTICALES ET POINTS PAR JOUR */}
          {points.map((pt, i) => {
            const isHovered = hoveredDayIndex === i;
            const hasCompleted = pt.completedCount > 0;

            return (
              <g
                key={pt.dayId}
                onMouseEnter={() => setHoveredDayIndex(i)}
                onMouseLeave={() => setHoveredDayIndex(null)}
                className="cursor-pointer"
              >
                {/* Ligne repère verticale vers l'axe X */}
                <line
                  x1={pt.x}
                  y1={pt.y}
                  x2={pt.x}
                  y2={paddingTop + chartHeight}
                  stroke={pt.isToday ? '#6366F1' : 'currentColor'}
                  className={
                    pt.isToday
                      ? 'stroke-indigo-400/50 dark:stroke-indigo-500/50 stroke-1'
                      : 'text-slate-200 dark:text-slate-800/40 stroke-1'
                  }
                  strokeDasharray="2 2"
                />

                {/* Halo d'effet pour aujourd'hui ou survol */}
                {(pt.isToday || isHovered) && (
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r={isHovered ? 11 : 8}
                    fill={hasCompleted ? '#10B981' : '#6366F1'}
                    opacity="0.25"
                    className="transition-all duration-200 animate-pulse"
                  />
                )}

                {/* Point central sur la courbe */}
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={isHovered ? 6 : 4.5}
                  fill={hasCompleted ? '#10B981' : pt.isToday ? '#6366F1' : '#FFFFFF'}
                  stroke={hasCompleted ? '#059669' : pt.isToday ? '#4F46E5' : '#94A3B8'}
                  strokeWidth="2.5"
                  className="transition-all duration-150"
                />

                {/* ÉTIQUETTE DU JOUR SOUS L'AXE DES ABSCISSES */}
                <text
                  x={pt.x}
                  y={height - 14}
                  textAnchor="middle"
                  className={`text-[11px] font-bold select-none transition-colors ${
                    pt.isToday
                      ? 'fill-indigo-600 dark:fill-indigo-400 font-black'
                      : isHovered
                      ? 'fill-slate-900 dark:fill-white'
                      : 'fill-slate-500 dark:fill-slate-400'
                  }`}
                >
                  {pt.dayShort}
                </text>

                {/* Indicateur visuel "Aujourd'hui" sous le jour */}
                {pt.isToday && (
                  <circle
                    cx={pt.x}
                    cy={height - 5}
                    r="2"
                    className="fill-indigo-600 dark:fill-indigo-400"
                  />
                )}
              </g>
            );
          })}
        </svg>

        {/* INFO-BULLE INTERACTIVE AU SURVOL D'UN JOUR */}
        {hoveredDayIndex !== null && (
          <div className="mt-2 p-2.5 rounded-xl bg-slate-900 dark:bg-slate-950 text-white text-xs flex flex-wrap items-center justify-between gap-2 shadow-lg animate-in fade-in duration-150">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-amber-400">
                {daysData[hoveredDayIndex].dayName}
              </span>
              {daysData[hoveredDayIndex].isToday && (
                <span className="px-1.5 py-0.2 rounded-md bg-indigo-500 text-[10px] font-bold">
                  Aujourd'hui
                </span>
              )}
            </div>

            <div className="flex items-center gap-3 font-mono text-[11px]">
              <span>
                Séances validées :{' '}
                <strong className="text-emerald-400">
                  {daysData[hoveredDayIndex].completedCount}
                </strong>
                /{daysData[hoveredDayIndex].plannedCount}
              </span>
              <span>
                Cumul semaine :{' '}
                <strong className="text-indigo-300">
                  {daysData[hoveredDayIndex].cumulativeCompleted}
                </strong>
              </span>
            </div>

            {daysData[hoveredDayIndex].completedSubjects.length > 0 && (
              <div className="w-full text-[10px] text-slate-300 flex items-center gap-1.5 border-t border-slate-800 pt-1.5 mt-0.5">
                <span className="text-slate-400">Matières validées :</span>
                <span className="font-medium text-emerald-300 truncate">
                  {daysData[hoveredDayIndex].completedSubjects.join(', ')}
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* PIED DE CARTE EXPLICATIF SIMPLE & CLAIR */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-400 pt-1">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
            <span>Séances accomplies</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 inline-block" />
            <span>Jour actuel</span>
          </span>
        </div>

        <div className="flex items-center gap-1 text-slate-600 dark:text-slate-300 font-medium">
          <Award className="w-3.5 h-3.5 text-amber-500" />
          <span>Chaque séance terminée fait monter ta courbe d'assiduité !</span>
        </div>
      </div>

    </Card>
  );
};
