import React, { useState } from 'react';
import type { Subject } from '../../types';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { AnimatedCounter } from '../../components/common/AnimatedCounter';
import { Modal } from '../../components/ui/Modal';
import { Input } from '../../components/ui/FormControls';
import { generateId, getDaysRemaining } from '../../lib/utils';
import { 
  BookOpen, 
  Plus, 
  Trash2, 
  Edit3, 
  Calendar, 
  Target, 
  Zap, 
  Flame,
  GraduationCap
} from 'lucide-react';
import { ProFeatureModal } from '../../components/common/ProFeatureModal';

export interface SubjectManagerProps {
  subjects: Subject[];
  onUpdateSubjects: (subjects: Subject[]) => void;
  onTriggerPlanner: () => void;
  onOpenPresetModal?: () => void;
  isDemoMode?: boolean;
  planTier?: 'free' | 'pro' | 'plus';
  onViewPricing?: () => void;
}

const PRESET_COLORS = [
  '#6366F1', // Indigo
  '#06B6D4', // Cyan
  '#10B981', // Emerald
  '#F59E0B', // Amber
  '#EC4899', // Pink
  '#8B5CF6', // Purple
  '#3B82F6', // Blue
  '#EF4444', // Red
];

export const SubjectManager: React.FC<SubjectManagerProps> = ({
  subjects,
  onUpdateSubjects,
  onOpenPresetModal,
  isDemoMode = false,
  planTier = 'free',
  onViewPricing,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProModalOpen, setIsProModalOpen] = useState(false);
  const [editingSubjectId, setEditingSubjectId] = useState<string | null>(null);

  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [color, setColor] = useState(PRESET_COLORS[0]);
  const [coefficient, setCoefficient] = useState<number>(5);
  const [difficulty, setDifficulty] = useState<1 | 2 | 3 | 4 | 5>(3);
  const [targetGrade, setTargetGrade] = useState<number>(15);
  const [examDate, setExamDate] = useState<string>('');
  
  // Real-time topic / theme list management
  const [topicsList, setTopicsList] = useState<string[]>([]);
  const [newTopicInput, setNewTopicInput] = useState<string>('');

  const handleOpenAdd = () => {
    setEditingSubjectId(null);
    setName('');
    setCode('');
    setColor(PRESET_COLORS[subjects.length % PRESET_COLORS.length]);
    setCoefficient(4);
    setDifficulty(3);
    setTargetGrade(15);
    setExamDate('');
    setTopicsList(['Introduction & concepts clés', 'Exercices d’application']);
    setNewTopicInput('');
    setIsModalOpen(true);
  };

  const handleOpenEdit = (sub: Subject) => {
    setEditingSubjectId(sub.id);
    setName(sub.name);
    setCode(sub.code || '');
    setColor(sub.color);
    setCoefficient(sub.coefficient);
    setDifficulty(sub.difficulty);
    setTargetGrade(sub.targetGrade);
    setExamDate(sub.examDate || '');
    setTopicsList(sub.topics && sub.topics.length > 0 ? [...sub.topics] : ['Généralités & Notions clés']);
    setNewTopicInput('');
    setIsModalOpen(true);
  };

  const handleAddTopic = () => {
    const trimmed = newTopicInput.trim();
    if (!trimmed) return;
    if (topicsList.includes(trimmed)) {
      setNewTopicInput('');
      return;
    }
    setTopicsList(prev => [...prev, trimmed]);
    setNewTopicInput('');
  };

  const handleDeleteTopic = (indexToDelete: number) => {
    setTopicsList(prev => prev.filter((_, idx) => idx !== indexToDelete));
  };

  const handleEditTopic = (indexToEdit: number, newText: string) => {
    setTopicsList(prev => prev.map((t, idx) => idx === indexToEdit ? newText : t));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    // Filter valid non-empty topics
    const cleanTopics = topicsList
      .map(t => t.trim())
      .filter(t => t.length > 0);

    const finalTopics = cleanTopics.length > 0 
      ? cleanTopics 
      : ['Introduction & révisions'];

    if (editingSubjectId) {
      const updated = subjects.map(s => s.id === editingSubjectId ? {
        ...s,
        name: name.trim(),
        code: code.trim() || undefined,
        color,
        coefficient,
        difficulty,
        targetGrade,
        examDate: planTier === 'free' ? undefined : (examDate || undefined),
        topics: finalTopics,
      } : s);
      onUpdateSubjects(updated);
    } else {
      const newSub: Subject = {
        id: generateId(),
        name: name.trim(),
        code: code.trim() || undefined,
        color,
        coefficient,
        difficulty,
        targetGrade,
        examDate: planTier === 'free' ? undefined : (examDate || undefined),
        topics: finalTopics,
      };
      onUpdateSubjects([...subjects, newSub]);
    }

    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    if (subjects.length <= 1) {
      alert("Vous devez conserver au moins une matière dans votre cursus.");
      return;
    }
    if (confirm("Supprimer cette matière de votre cursus ? Toutes ses informations et thèmes associés seront supprimés.")) {
      onUpdateSubjects(subjects.filter(s => s.id !== id));
      if (editingSubjectId === id) {
        setIsModalOpen(false);
      }
    }
  };

  const totalCoeff = subjects.reduce((sum, s) => sum + s.coefficient, 0);
  const avgDifficulty = (subjects.reduce((sum, s) => sum + s.difficulty, 0) / (subjects.length || 1)).toFixed(1);

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
            <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-400 shrink-0" />
            <span>Matières & Coefficients</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            Paramétrez vos coefficients et dates d'examens pour calibrer vos temps de révision.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          {isDemoMode && onOpenPresetModal && (
            <Button
              variant="secondary"
              size="sm"
              leftIcon={<GraduationCap className="w-3.5 h-3.5 text-indigo-400" />}
              onClick={onOpenPresetModal}
              title="Charger un modèle de cursus prédéfini (disponible en mode démo)"
              className="cursor-pointer text-xs font-semibold py-2 px-3.5"
            >
              Changer de Filière (Démo)
            </Button>
          )}

          <Button
            variant="glow"
            size="sm"
            leftIcon={<Plus className="w-4 h-4" />}
            onClick={handleOpenAdd}
            className="cursor-pointer text-xs font-bold py-2 px-4"
          >
            Nouvelle Matière
          </Button>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
        <Card className="p-3 sm:p-4 bg-slate-900/60 border-slate-800 flex items-center gap-2 sm:gap-3 interactive-card">
          <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0 hidden xs:block">
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] sm:text-xs text-slate-400 truncate">Matières</p>
            <p className="text-sm sm:text-lg font-bold text-white font-mono">
              <AnimatedCounter value={subjects.length} />
            </p>
          </div>
        </Card>

        <Card className="p-3 sm:p-4 bg-slate-900/60 border-slate-800 flex items-center gap-2 sm:gap-3 interactive-card">
          <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 shrink-0 hidden xs:block">
            <Flame className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] sm:text-xs text-slate-400 truncate">Difficulté</p>
            <p className="text-sm sm:text-lg font-bold text-amber-400 font-mono">
              <AnimatedCounter value={parseFloat(avgDifficulty)} suffix="/5" decimals={1} />
            </p>
          </div>
        </Card>

        <Card className="p-3 sm:p-4 bg-slate-900/60 border-slate-800 flex items-center gap-2 sm:gap-3 interactive-card">
          <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0 hidden xs:block">
            <Target className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] sm:text-xs text-slate-400 truncate">Total Coeff</p>
            <p className="text-sm sm:text-lg font-bold text-cyan-400 font-mono">
              <AnimatedCounter value={totalCoeff} />
            </p>
          </div>
        </Card>
      </div>

      {/* Subjects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {subjects.map(subject => {
          const daysToExam = getDaysRemaining(subject.examDate);

          return (
            <Card
              key={subject.id}
              hoverEffect
              className="p-4 sm:p-5 border-slate-800 bg-slate-900/50 flex flex-col justify-between relative overflow-hidden"
              style={{ borderTopColor: subject.color, borderTopWidth: '4px' }}
            >
              <div className="space-y-3 sm:space-y-4">
                
                {/* Header info */}
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    {subject.code && (
                      <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase">
                        {subject.code}
                      </span>
                    )}
                    <h3 className="text-sm sm:text-base font-bold text-white leading-snug break-words">
                      {subject.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => handleOpenEdit(subject)}
                      title="Modifier"
                      className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDelete(subject.id)}
                      title="Supprimer"
                      className="p-1.5 text-slate-400 hover:text-rose-400 rounded-lg hover:bg-rose-500/10 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Metrics Badges */}
                <div className="grid grid-cols-2 gap-2 pt-1.5 border-t border-slate-800/60">
                  <div className="bg-slate-950/60 p-2 rounded-xl border border-slate-800/80">
                    <span className="text-[10px] text-slate-400 block uppercase font-semibold">Coefficient</span>
                    <span className="text-xs sm:text-sm font-bold text-white font-mono">Coeff {subject.coefficient}</span>
                  </div>

                  <div className="bg-slate-950/60 p-2 rounded-xl border border-slate-800/80">
                    <span className="text-[10px] text-slate-400 block uppercase font-semibold">Difficulté</span>
                    <div className="flex items-center gap-1 mt-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full ${
                            i < subject.difficulty ? 'bg-amber-400 shadow-xs shadow-amber-400/50' : 'bg-slate-800'
                          }`}
                        />
                      ))}
                      <span className="text-[11px] font-bold text-amber-300 ml-1 font-mono">{subject.difficulty}/5</span>
                    </div>
                  </div>
                </div>

                {/* Target Grade & Exam Proximity */}
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                      <Target className="w-3 h-3 text-emerald-400" />
                      Note visée :
                    </span>
                    <span className="font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 text-[11px]">
                      {subject.targetGrade} / 20
                    </span>
                  </div>

                  {subject.examDate && (
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                        <Calendar className="w-3 h-3 text-cyan-400" />
                        Partiel :
                      </span>
                      <span className="font-medium text-slate-200 text-[11px]">
                        {new Date(subject.examDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                        {daysToExam !== null && (
                          <Badge
                            variant={daysToExam <= 7 ? 'rose' : daysToExam <= 15 ? 'amber' : 'cyan'}
                            size="sm"
                            className="ml-1.5 text-[10px] px-1.5 py-0"
                          >
                            J-{daysToExam}
                          </Badge>
                        )}
                      </span>
                    </div>
                  )}
                </div>

                {/* Topics Tags */}
                {subject.topics && subject.topics.length > 0 && (
                  <div className="pt-2 border-t border-slate-800/60">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                        Thèmes & Chapitres ({subject.topics.length}) :
                      </span>
                      <button
                        type="button"
                        onClick={() => handleOpenEdit(subject)}
                        className="text-[10px] font-bold text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
                        title="Modifier ou supprimer les thèmes"
                      >
                        + Gérer
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-1 max-h-24 overflow-y-auto pr-0.5">
                      {subject.topics.map((topic, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/60 text-slate-300 break-words max-w-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-800 flex justify-between items-center text-[10px] sm:text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <Zap className="w-3 h-3 text-indigo-400" />
                  Priorité :
                </span>
                <span className="font-bold text-indigo-300">
                  {subject.difficulty >= 4 ? 'Élevée' : subject.difficulty === 3 ? 'Équilibrée' : 'Entretien'}
                </span>
              </div>
            </Card>
          );
        })}
      </div>

      {/* MODAL: ADD / EDIT SUBJECT */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingSubjectId ? "Modifier la matière" : "Ajouter une matière"}
        description="Ajustez les pondérations pour calibrer le temps d'étude."
        maxWidth="md"
      >
        <form onSubmit={handleSave} className="space-y-4">
          <Input
            label="Nom complet de la matière"
            placeholder="ex. Algorithmique & Structures de Données"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <Input
              label="Code Matière (optionnel)"
              placeholder="ex. INFO-301"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                Couleur
              </label>
              <div className="flex items-center gap-2">
                {PRESET_COLORS.map((c) => (
                  <button
                    type="button"
                    key={c}
                    onClick={() => setColor(c)}
                    className={`w-6 h-6 rounded-full border-2 transition-transform cursor-pointer ${
                      color === c ? 'scale-125 border-white shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                Coefficient : <span className="text-cyan-400 font-bold font-mono">{coefficient}</span>
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={coefficient}
                onChange={(e) => setCoefficient(Number(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                Difficulté : <span className="text-amber-400 font-bold font-mono">{difficulty} / 5</span>
              </label>
              <input
                type="range"
                min="1"
                max="5"
                value={difficulty}
                onChange={(e) => setDifficulty(Number(e.target.value) as 1 | 2 | 3 | 4 | 5)}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <Input
              label="Note Cible (/20)"
              type="number"
              min="10"
              max="20"
              value={targetGrade}
              onChange={(e) => setTargetGrade(Number(e.target.value))}
            />

            {planTier === 'free' ? (
              <div className="space-y-1">
                <label className="block text-xs font-medium text-slate-300">
                  Date Examen <span className="text-[10px] font-black text-amber-400 ml-1">⭐ KONAN PRO</span>
                </label>
                <div 
                  onClick={() => setIsProModalOpen(true)}
                  className="w-full bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 rounded-xl px-3 py-2.5 text-xs text-slate-400 cursor-pointer flex items-center justify-between transition-colors"
                  title="Disponible avec l'offre KONAN PRO"
                >
                  <span className="truncate">Priorisation automatique d'examen</span>
                  <span className="text-[10px] font-bold text-amber-400 shrink-0 ml-1">🔒 PRO</span>
                </div>
              </div>
            ) : (
              <Input
                label="Date Examen"
                type="date"
                value={examDate}
                onChange={(e) => setExamDate(e.target.value)}
              />
            )}
          </div>

          {/* GESTIONNAIRE INTERACTIF DES THÈMES & CHAPITRES */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-200">
                Thèmes & Chapitres de révision ({topicsList.length})
              </label>
              <span className="text-[10px] text-slate-400">
                Modifiables et supprimables en 1 clic
              </span>
            </div>

            {/* Saisie d'un nouveau thème */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Ajouter un chapitre (ex. Graphes, Suites numériques...)"
                value={newTopicInput}
                onChange={(e) => setNewTopicInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddTopic();
                  }
                }}
                className="flex-1 bg-slate-950 border border-slate-700/80 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
              />
              <Button
                type="button"
                size="sm"
                variant="secondary"
                onClick={handleAddTopic}
                leftIcon={<Plus className="w-3.5 h-3.5" />}
                className="text-xs font-bold py-2 px-3 shrink-0 cursor-pointer hover:bg-slate-800 border-slate-700"
              >
                Ajouter
              </Button>
            </div>

            {/* Liste unitaire des thèmes avec modification et suppression en temps réel */}
            <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1 pt-1">
              {topicsList.length === 0 ? (
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-center">
                  <p className="text-xs text-slate-400 italic">
                    Aucun thème spécifique. Utilisez le champ ci-dessus pour ajouter vos chapitres.
                  </p>
                </div>
              ) : (
                topicsList.map((topic, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between gap-2 p-2 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-colors group"
                  >
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <span className="w-5 h-5 rounded-full bg-slate-800 text-[10px] font-mono font-bold text-slate-400 flex items-center justify-center shrink-0">
                        {index + 1}
                      </span>
                      <input
                        type="text"
                        value={topic}
                        onChange={(e) => handleEditTopic(index, e.target.value)}
                        className="bg-transparent border-none text-slate-200 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-indigo-500/50 rounded px-1.5 py-0.5 w-full truncate"
                        title="Modifier directement l'intitulé de ce chapitre"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => handleDeleteTopic(index)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/15 transition-colors cursor-pointer shrink-0"
                      title="Supprimer ce thème"
                      aria-label="Supprimer ce thème"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Modal Footer Controls */}
          <div className="pt-4 flex items-center justify-between gap-2 sm:gap-3 border-t border-slate-800">
            {editingSubjectId ? (
              <button
                type="button"
                onClick={() => handleDelete(editingSubjectId)}
                className="px-3 py-2 rounded-xl text-xs font-semibold text-rose-400 hover:text-white hover:bg-rose-500/20 border border-rose-500/30 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Supprimer la matière</span>
              </button>
            ) : <div />}

            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setIsModalOpen(false)}
                className="text-xs"
              >
                Annuler
              </Button>
              <Button
                type="submit"
                variant="primary"
                size="sm"
                className="text-xs font-bold bg-indigo-600 hover:bg-indigo-500"
              >
                {editingSubjectId ? "Enregistrer" : "Créer"}
              </Button>
            </div>
          </div>
        </form>
      </Modal>

      {/* Pro Upgrade Modal */}
      <ProFeatureModal
        isOpen={isProModalOpen}
        onClose={() => setIsProModalOpen(false)}
        featureTitle="Dates d'examens & Priorisation Partiels (KONAN PRO)"
        featureDescription="L'intégration des dates d'épreuves et l'adaptation intelligente de l'emploi du temps fait partie du modèle KONAN PRO. Vos matières, coefficients et notes cibles restent 100% opérationnels en illimité dans votre modèle Gratuit."
        onViewPricing={onViewPricing}
      />

    </div>
  );
};
