import React from 'react';
import { ACADEMIC_PRESETS } from '../../lib/presets';
import { Modal } from '../../components/ui/Modal';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Terminal, Scale, Stethoscope, GraduationCap } from 'lucide-react';

export interface PresetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPreset: (presetId: string) => void;
  currentLevel: string;
}

export const PresetModal: React.FC<PresetModalProps> = ({
  isOpen,
  onClose,
  onSelectPreset,
  currentLevel,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal': return <Terminal className="w-5 h-5 text-indigo-400" />;
      case 'Scale': return <Scale className="w-5 h-5 text-purple-400" />;
      case 'Stethoscope': return <Stethoscope className="w-5 h-5 text-rose-400" />;
      default: return <GraduationCap className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Sélectionnez une Filière ou Modèle d'Étude"
      description="Choisissez un modèle académique pour charger instantanément les matières, créneaux de cours types et coefficients."
      maxWidth="lg"
    >
      <div className="space-y-4">
        {ACADEMIC_PRESETS.map((preset) => {
          const isCurrent = currentLevel === preset.level;

          return (
            <div
              key={preset.id}
              onClick={() => {
                onSelectPreset(preset.id);
                onClose();
              }}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                isCurrent
                  ? 'bg-indigo-950/40 border-indigo-500 shadow-lg shadow-indigo-500/10'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 shrink-0">
                  {getIcon(preset.icon)}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-white">{preset.name}</h3>
                    {isCurrent && <Badge variant="primary" size="sm">Actif</Badge>}
                  </div>
                  <p className="text-xs text-slate-400">{preset.description}</p>
                  <p className="text-[11px] font-mono text-cyan-400">
                    {preset.subjects.length} matières • {preset.defaultClasses.length} cours fixes
                  </p>
                </div>
              </div>

              <Button
                variant={isCurrent ? 'secondary' : 'glow'}
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectPreset(preset.id);
                  onClose();
                }}
                className="self-end sm:self-center text-xs shrink-0"
              >
                {isCurrent ? 'Réinitialiser' : 'Charger'}
              </Button>
            </div>
          );
        })}

        <div className="pt-2 flex justify-end">
          <Button variant="ghost" onClick={onClose} className="text-xs">
            Fermer
          </Button>
        </div>
      </div>
    </Modal>
  );
};
