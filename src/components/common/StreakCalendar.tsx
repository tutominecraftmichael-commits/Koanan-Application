import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Flame, Snowflake, Calendar as CalendarIcon } from 'lucide-react';

export interface StreakCalendarProps {
  completedDates: string[]; // YYYY-MM-DD
  freezeDates?: string[]; // YYYY-MM-DD
  className?: string;
}

const MONTH_NAMES_FR = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
];

const WEEKDAY_NAMES_FR = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

export const StreakCalendar: React.FC<StreakCalendarProps> = ({
  completedDates = [],
  freezeDates = [],
  className = '',
}) => {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth()); // 0-indexed

  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(prev => prev - 1);
    } else {
      setCurrentMonth(prev => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(prev => prev + 1);
    } else {
      setCurrentMonth(prev => prev + 1);
    }
  };

  const handleJumpToToday = () => {
    setCurrentYear(today.getFullYear());
    setCurrentMonth(today.getMonth());
  };

  // Compute days for the month grid
  // 0 = Monday in our standard (JavaScript getDay: 0=Sun, 1=Mon... -> (getDay() + 6) % 7)
  const firstDayOfWeek = (new Date(currentYear, currentMonth, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

  // Completed count in this specific month
  const monthPrefix = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}`;
  const completedThisMonth = completedDates.filter(d => d.startsWith(monthPrefix)).length;

  return (
    <div className={`p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-slate-800/90 shadow-xl space-y-4 ${className}`}>
      
      {/* Month & Year Navigation Header */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-4 h-4 text-sky-400" />
          <h3 className="text-sm sm:text-base font-bold text-white capitalize">
            {MONTH_NAMES_FR[currentMonth]} {currentYear}
          </h3>
          {completedThisMonth > 0 && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-950 border border-sky-500/40 text-sky-300 font-mono font-bold">
              {completedThisMonth} flamme(s)
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handleJumpToToday}
            className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-colors cursor-pointer"
            title="Revenir au mois actuel"
          >
            Aujourd'hui
          </button>
          <button
            type="button"
            onClick={handlePrevMonth}
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-800"
            title="Mois précédent"
            aria-label="Mois précédent"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleNextMonth}
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-800"
            title="Mois suivant"
            aria-label="Mois suivant"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Weekday column headers */}
      <div className="grid grid-cols-7 gap-1 text-center text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
        {WEEKDAY_NAMES_FR.map((wd, i) => (
          <div key={i} className="py-1">{wd}</div>
        ))}
      </div>

      {/* Days grid */}
      <div className="grid grid-cols-7 gap-1 sm:gap-1.5">
        {/* Previous month trailing days */}
        {[...Array(firstDayOfWeek)].map((_, i) => {
          const dayNum = daysInPrevMonth - firstDayOfWeek + i + 1;
          return (
            <div
              key={`prev-${i}`}
              className="h-10 sm:h-12 rounded-xl flex items-center justify-center text-xs text-slate-700 select-none bg-slate-900/20"
            >
              {dayNum}
            </div>
          );
        })}

        {/* Current month days */}
        {[...Array(daysInMonth)].map((_, i) => {
          const dayNum = i + 1;
          const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
          
          const isToday = dateStr === todayStr;
          const isCompleted = completedDates.includes(dateStr);
          const isFrozen = freezeDates.includes(dateStr);

          return (
            <div
              key={`day-${dayNum}`}
              className={`h-10 sm:h-12 rounded-xl flex flex-col items-center justify-center relative p-1 transition-all select-none border ${
                isCompleted
                  ? 'bg-gradient-to-b from-blue-900/80 to-blue-950 border-sky-400/80 text-white shadow-md shadow-sky-500/20'
                  : isFrozen
                  ? 'bg-slate-900/90 border-cyan-400/50 text-cyan-200 shadow-sm shadow-cyan-500/10'
                  : isToday
                  ? 'bg-slate-900 border-sky-400/50 text-white ring-1 ring-sky-400/40'
                  : 'bg-slate-900/40 border-slate-800/60 text-slate-400 hover:border-slate-700'
              }`}
            >
              <span className={`text-[11px] sm:text-xs font-mono font-bold leading-tight ${isToday ? 'text-sky-300' : ''}`}>
                {dayNum}
              </span>

              {/* Status icon inside the cell */}
              <div className="h-4 flex items-center justify-center mt-0.5">
                {isCompleted ? (
                  <Flame className="w-3.5 h-3.5 text-sky-400 fill-sky-400 animate-flame-inner" />
                ) : isFrozen ? (
                  <Snowflake className="w-3.5 h-3.5 text-cyan-300" />
                ) : isToday ? (
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
                ) : null}
              </div>
            </div>
          );
        })}
      </div>

      {/* Calendar Legend */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2 border-t border-slate-800/80 text-[10px] sm:text-[11px] text-slate-400">
        <div className="flex items-center gap-1.5">
          <Flame className="w-3.5 h-3.5 text-sky-400 fill-sky-400" />
          <span>Flamme Allumée (validé)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Snowflake className="w-3.5 h-3.5 text-cyan-300" />
          <span>Gel de série (protégé)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full border border-sky-400 bg-sky-950" />
          <span>Aujourd'hui</span>
        </div>
      </div>

    </div>
  );
};
