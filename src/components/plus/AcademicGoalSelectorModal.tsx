import React from 'react';
import { 
  X, 
  Target, 
  Check, 
  Crown, 
  Zap
} from 'lucide-react';
import type { AcademicGoal } from '../../types';
import { Button } from '../ui/Button';
import { soundFX } from '../../lib/audioEffects';

export interface AcademicGoalSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentGoal?: AcademicGoal;
  onSelectGoal: (goal: AcademicGoal) => void;
  studentName?: string;
}

export const ACADEMIC_GOALS_CONFIG: Record<AcademicGoal, {
  id: AcademicGoal;
  title: string;
  badge: string;
  gradeTarget: string;
  desc: string;
  tactics: string[];
  color: string;
  borderActive: string;
  icon: typeof Target;
}> = {
  target_12: {
    id: 'target_12',
    title: "Passer l'année avec 12 de moyenne",
    badge: "Validation Sereine",
    gradeTarget: "12 / 20",
    desc: "Idéal pour valider son année académique sans stress, avec un équilibre vie personnelle/études préservé et un rythme anti-burnout.",
    tactics: [
      "Concentration prioritaire sur les matières à fort coefficient",
      "Sessions d'assimilation légères et digestes (25-30 min)",
      "Ton complice bienveillant de Konan pour garder le moral"
    ],
    color: "from-sky-500/20 to-blue-500/10 text-sky-300",
    borderActive: "border-sky-400 bg-sky-950/30 shadow-sky-500/20",
    icon: Target,
  },
  target_16: {
    id: 'target_16',
    title: "Passer avec 16 de moyenne",
    badge: "Mention Très Bien",
    gradeTarget: "16 / 20",
    desc: "Pour viser les mentions d'excellence, les bourses de mérite et les concours sélectifs avec une méthode structurée.",
    tactics: [
      "Alternance Active Recall et méthode de Feynman",
      "Entraînement approfondi sur devoirs surveillés et TD complexes",
      "Rythme rigoureux avec créneaux d'étude optimisés"
    ],
    color: "from-indigo-500/20 to-purple-500/10 text-indigo-300",
    borderActive: "border-indigo-400 bg-indigo-950/30 shadow-indigo-500/20",
    icon: Zap,
  },
  major_promotion: {
    id: 'major_promotion',
    title: "Devenir Major de Promotion",
    badge: "Excellence Suprême",
    gradeTarget: "18+ / 20",
    desc: "L'engagement absolu : dominer son cursus, maîtriser chaque syllabus avant l'heure et décrocher la 1ère place de sa promotion.",
    tactics: [
      "Planification intensive et simulation d'examens anticipée",
      "Technique de Feynman approfondie sur 100% des chapitres",
      "Ton exigeant et disciplinaire de Konan pour forger un mental d'acier"
    ],
    color: "from-amber-500/20 via-yellow-500/15 to-transparent text-amber-300",
    borderActive: "border-amber-400 bg-amber-950/30 shadow-amber-500/25",
    icon: Crown,
  },
};

export const AcademicGoalSelectorModal: React.FC<AcademicGoalSelectorModalProps> = ({
  isOpen,
  onClose,
  currentGoal = 'target_16',
  onSelectGoal,
}) => {
  if (!isOpen) return null;

  const handleChoose = (goalId: AcademicGoal) => {
    soundFX.playCheckmarkPop();
    onSelectGoal(goalId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div 
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-2xl rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/98 to-slate-950 border-2 border-indigo-500/40 shadow-2xl shadow-indigo-950/70 overflow-hidden flex flex-col my-auto max-h-[92vh]"
      >
        {/* Top Header Shimmer */}
        <div className="h-2 w-full bg-gradient-to-r from-indigo-500 via-amber-400 to-indigo-500 animate-shimmer" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors z-20 cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto custom-scrollbar">
          
          <div className="flex items-start gap-3.5">
            <div className="p-3 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 shadow-lg shadow-indigo-500/20 shrink-0">
              <Target className="w-7 h-7 text-indigo-300" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 inline-flex items-center gap-1">
                <Crown className="w-3 h-3 text-amber-300" />
                Exclusivité KONAN PLUS
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-1">
                Définissez votre Objectif Scolaire
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                Votre objectif influence drastiquement la densité du planning, le rythme des rappels et les recommandations de Konan.
              </p>
            </div>
          </div>

          {/* Goal Cards */}
          <div className="space-y-3.5">
            {(Object.keys(ACADEMIC_GOALS_CONFIG) as AcademicGoal[]).map((key) => {
              const config = ACADEMIC_GOALS_CONFIG[key];
              const isSelected = currentGoal === key;
              const Icon = config.icon;

              return (
                <div
                  key={key}
                  onClick={() => handleChoose(key)}
                  className={`p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer relative interactive-card shadow-lg ${
                    isSelected
                      ? config.borderActive + ' shadow-xl'
                      : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 min-w-0">
                      <div className={`p-2.5 rounded-xl border shrink-0 bg-gradient-to-br ${config.color} border-slate-700`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-extrabold text-white text-sm sm:text-base">
                            {config.title}
                          </h3>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                            {config.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                          {config.desc}
                        </p>

                        <ul className="mt-2.5 space-y-1 text-xs text-slate-400 pl-1 border-l-2 border-indigo-500/30">
                          {config.tactics.map((tactic, idx) => (
                            <li key={idx} className="pl-2 flex items-center gap-1.5">
                              <span className="text-indigo-400 font-bold">•</span>
                              <span>{tactic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <span className="text-xs sm:text-sm font-black font-mono px-2 py-0.5 rounded-lg bg-slate-800 text-indigo-300 border border-slate-700">
                        {config.gradeTarget}
                      </span>
                      {isSelected ? (
                        <span className="p-1.5 rounded-full bg-emerald-500 text-slate-950 shadow-md">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </span>
                      ) : (
                        <span className="text-xs font-semibold text-slate-500 hover:text-white transition-colors">
                          Choisir
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        <div className="p-4 sm:p-5 border-t border-slate-800/80 bg-slate-900/50 flex items-center justify-between gap-3 relative z-10">
          <p className="text-[11px] text-slate-400">
            Vous pouvez ajuster cet objectif à tout moment selon l'évolution de votre semestre.
          </p>
          <Button
            variant="secondary"
            size="sm"
            onClick={onClose}
            className="cursor-pointer text-xs"
          >
            Fermer
          </Button>
        </div>
      </div>
    </div>
  );
};
