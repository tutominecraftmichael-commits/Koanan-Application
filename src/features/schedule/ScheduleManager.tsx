import React, { useState, useRef } from 'react';
import type { 
  Subject, 
  ClassSlot, 
  CourseType, 
  DayOfWeek, 
  StudyPreferences,
  StudySession
} from '../../types';
import { COURSE_TYPE_LABELS, DAYS_OF_WEEK } from '../../types';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Modal } from '../../components/ui/Modal';
import { Input, Select } from '../../components/ui/FormControls';
import { parseTimeToMinutes, generateId } from '../../lib/utils';
import { 
  harmonizeAndDeduplicateSlots, 
  formatStructuredScheduleTruth, 
  parseStructuredScheduleTruth 
} from '../../services/pdfParserService';
import { getPacingStrategy, PACING_STRATEGIES, recommendPacingStrategies } from '../../lib/pacingStrategies';
import { ProFeatureModal } from '../../components/common/ProFeatureModal';
import { 
  Plus, 
  Trash2, 
  Edit3, 
  Calendar, 
  Clock, 
  FileText, 
  Check, 
  Sparkles, 
  Eye,
  GraduationCap,
  Lock,
  Copy,
  CheckCircle,
  Star
} from 'lucide-react';

export interface ScheduleManagerProps {
  studentName?: string;
  academicLevel?: string;
  subjects: Subject[];
  classSlots: ClassSlot[];
  studySessions?: StudySession[];
  preferences: StudyPreferences;
  onUpdateClassSlots: (slots: ClassSlot[]) => void;
  onUpdateSubjects?: (subjects: Subject[]) => void;
  onUpdatePreferences: (pref: StudyPreferences) => void;
  onTriggerPlanner: () => void;
  onNavigate?: (view: any) => void;
  onOpenPresetModal?: () => void;
  isDemoMode?: boolean;
  planTier?: 'free' | 'pro' | 'plus';
  onViewPricing?: () => void;
  onUpgradeToPro?: () => void;
}

export type TimetableFilterMode = 'combined' | 'classes_only' | 'study_only';



/**
 * Generates an 88-column ASCII timetable document matching the student academic standard.
 */
export function generateFormattedAcademicScheduleText(
  studentName: string,
  academicLevel: string,
  classSlots: ClassSlot[],
  subjects: Subject[],
  studySessions: StudySession[] = []
): string {
  const line88 = '='.repeat(88);
  const sepFull = '+-----------+---------------+-------------------------------------+--------+-----------+';
  const sepEmpty = '+-----------+---------------+----------------------------------------------------------+';
  const headerRow = '| JOUR      | HORAIRE       | MATIÈRE                             | TYPE   | SALLE     |';

  const title = 'EMPLOI DU TEMPS & PLANNING ACADÉMIQUE';
  const titlePadding = Math.max(0, Math.floor((88 - title.length) / 2));
  const centeredTitle = ' '.repeat(titlePadding) + title;

  const studentDisplay = (studentName || 'Étudiant').trim();
  const filiereDisplay = (academicLevel || 'Enseignement Supérieur').trim();
  const infoRow = `  Étudiant : ${studentDisplay.padEnd(18)} Filière : ${filiereDisplay}`;

  const lines: string[] = [];
  lines.push(line88);
  lines.push(centeredTitle);
  lines.push(infoRow);
  lines.push(line88);
  lines.push('');
  lines.push('--- GRILLE DES COURS ENSEIGNÉS ---');
  lines.push('');
  lines.push(sepFull);
  lines.push(headerRow);
  lines.push(sepFull);

  // If there are Sunday classes (day 6), order Sunday first: [6, 0, 1, 2, 3, 4, 5]
  const hasSundayClasses = classSlots.some(s => s.dayOfWeek === 6);
  const dayOrder: DayOfWeek[] = hasSundayClasses ? [6, 0, 1, 2, 3, 4, 5] : [0, 1, 2, 3, 4, 5, 6];

  const DAY_LABELS: Record<DayOfWeek, string> = {
    0: 'LUNDI',
    1: 'MARDI',
    2: 'MERCREDI',
    3: 'JEUDI',
    4: 'VENDREDI',
    5: 'SAMEDI',
    6: 'DIMANCHE',
  };

  dayOrder.forEach(dayId => {
    const dayName = DAY_LABELS[dayId];
    const daySlots = classSlots
      .filter(s => s.dayOfWeek === dayId)
      .sort((a, b) => parseTimeToMinutes(a.startTime) - parseTimeToMinutes(b.startTime));

    const dayStudySessions = studySessions
      .filter(s => s.dayOfWeek === dayId)
      .sort((a, b) => parseTimeToMinutes(a.startTime) - parseTimeToMinutes(b.startTime));

    if (daySlots.length > 0) {
      daySlots.forEach((slot, index) => {
        const subject = subjects.find(s => s.id === slot.subjectId);
        const subjectName = (subject?.name || slot.subjectId || 'Cours').trim();
        const typeStr = (COURSE_TYPE_LABELS[slot.type]?.badge || 'CM').trim();
        const roomStr = (slot.room || '-').trim();
        const timeStr = `${slot.startTime} - ${slot.endTime}`;

        const colDay = index === 0 ? dayName.padEnd(9) : ''.padEnd(9);
        const row = `| ${colDay} | ${timeStr.padEnd(13)} | ${subjectName.padEnd(35).slice(0, 35)} | ${typeStr.padEnd(6).slice(0, 6)} | ${roomStr.padEnd(9).slice(0, 9)} |`;
        lines.push(row);
      });
      lines.push(sepFull);
    } else {
      let dayNote = '              * Repos / Consolidation des acquis *                        ';
      if (dayStudySessions.length > 0) {
        dayNote = '        * Journée dédiée au travail personnel & révisions *               ';
      }
      const emptyRow = `| ${dayName.padEnd(9)} | ${dayNote.padEnd(72).slice(0, 72)} |`;
      lines.push(emptyRow);
      lines.push(sepEmpty);
    }
  });

  lines.push('');
  lines.push('--- OBJECTIFS DE RÉVISION HEBDOMADAIRE (BLOCS DE TRAVAIL RECOMMANDÉS) ---');
  lines.push('');

  if (studySessions.length === 0) {
    lines.push('* Aucun créneau de travail personnel enregistré pour le moment.');
    lines.push('* Rendez-vous dans "Planning de Révision" pour générer vos créneaux.');
  } else {
    dayOrder.forEach(dayId => {
      const dayName = DAY_LABELS[dayId];
      const dayStudy = studySessions
        .filter(s => s.dayOfWeek === dayId)
        .sort((a, b) => parseTimeToMinutes(a.startTime) - parseTimeToMinutes(b.startTime));

      if (dayStudy.length > 0) {
        dayStudy.forEach(session => {
          const subject = subjects.find(s => s.id === session.subjectId);
          const subjName = subject?.name || 'Matière';
          const durMin = Math.max(15, parseTimeToMinutes(session.endTime) - parseTimeToMinutes(session.startTime));
          
          let blockDesc = `${durMin} min`;
          if (durMin === 50) blockDesc = '2 x 25 min';
          else if (durMin === 75) blockDesc = '3 x 25 min (Time Blocking)';
          else if (durMin >= 90) blockDesc = `${Math.floor(durMin / 25)} x 25 min`;

          const periodName = parseTimeToMinutes(session.startTime) < 720 ? 'MATIN' : parseTimeToMinutes(session.startTime) < 1020 ? 'APRÈS-MIDI' : 'SOIR';
          lines.push(`* ${dayName} ${periodName} (${session.startTime} - ${session.endTime}) : ${blockDesc} [${subjName} - ${session.title}]`);
        });
      }
    });
  }

  lines.push('');
  lines.push(line88);
  return lines.join('\r\n');
}

export const ScheduleManager: React.FC<ScheduleManagerProps> = ({
  studentName = 'Étudiant',
  academicLevel = 'Cursus Universitaire',
  subjects,
  classSlots,
  studySessions = [],
  preferences,
  onUpdateClassSlots,
  onUpdateSubjects,
  onUpdatePreferences,
  onTriggerPlanner,
  onNavigate,
  onOpenPresetModal,
  isDemoMode = false,
  planTier = 'free',
  onViewPricing,
  onUpgradeToPro,
}) => {
  const [filterMode, setFilterMode] = useState<TimetableFilterMode>('combined');
  const [isAddSlotOpen, setIsAddSlotOpen] = useState(false);
  const [editingSlotId, setEditingSlotId] = useState<string | null>(null);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [importText, setImportText] = useState('');
  const [importError, setImportError] = useState<string | null>(null);
  const [proModalInfo, setProModalInfo] = useState<{ title: string; desc: string } | null>(null);
  const [importSuccess, setImportSuccess] = useState<string | null>(null);
  const [activeMobileDay, setActiveMobileDay] = useState<DayOfWeek>(0);
  const [isSourceTruthModalOpen, setIsSourceTruthModalOpen] = useState(false);
  const [truthEditText, setTruthEditText] = useState('');
  const [copiedTruth, setCopiedTruth] = useState(false);
  const [isEditingTruthDirect, setIsEditingTruthDirect] = useState(false);
  const [isStrategyModalOpen, setIsStrategyModalOpen] = useState(false);
  const [selectedModalStrategy, setSelectedModalStrategy] = useState<string>(preferences.pacing || 'active_recall_spaced');

  const activeStrategy = getPacingStrategy(preferences.pacing);

  const timetableGridRef = useRef<HTMLDivElement>(null);

  // Add / Edit form state
  const [slotSubjectId, setSlotSubjectId] = useState<string>(subjects[0]?.id || '');
  const [slotDay, setSlotDay] = useState<DayOfWeek>(0);
  const [slotStartTime, setSlotStartTime] = useState('08:30');
  const [slotEndTime, setSlotEndTime] = useState('10:30');
  const [slotType, setSlotType] = useState<CourseType>('lecture');
  const [slotRoom, setSlotRoom] = useState('Amphi A');
  const [slotProfessor, setSlotProfessor] = useState('');

  // Automatically include weekend days if classes or study sessions exist on Saturday or Sunday
  const hasWeekendClasses = classSlots.some(s => s.dayOfWeek === 5 || s.dayOfWeek === 6) ||
    (studySessions && studySessions.some(s => s.dayOfWeek === 5 || s.dayOfWeek === 6));
  const hasSundayClasses = classSlots.some(s => s.dayOfWeek === 6) || (studySessions && studySessions.some(s => s.dayOfWeek === 6));

  const baseDays = (preferences.weekendStudyEnabled || hasWeekendClasses) ? DAYS_OF_WEEK : DAYS_OF_WEEK.slice(0, 5);
  // If Sunday has classes, order starting from Sunday [Dimanche, Lundi, ...]
  const displayedDays = hasSundayClasses && baseDays.length === 7
    ? [DAYS_OF_WEEK[6], DAYS_OF_WEEK[0], DAYS_OF_WEEK[1], DAYS_OF_WEEK[2], DAYS_OF_WEEK[3], DAYS_OF_WEEK[4], DAYS_OF_WEEK[5]]
    : baseDays;

  const handleOpenAddModal = (day: DayOfWeek = 0, defaultStart = '08:30', defaultEnd = '10:30') => {
    setEditingSlotId(null);
    setSlotSubjectId(subjects[0]?.id || '');
    setSlotDay(day);
    setSlotStartTime(defaultStart);
    setSlotEndTime(defaultEnd);
    setSlotType('lecture');
    setSlotRoom('');
    setSlotProfessor('');
    setIsAddSlotOpen(true);
  };

  const handleOpenEditModal = (slot: ClassSlot) => {
    setEditingSlotId(slot.id);
    setSlotSubjectId(slot.subjectId);
    setSlotDay(slot.dayOfWeek);
    setSlotStartTime(slot.startTime);
    setSlotEndTime(slot.endTime);
    setSlotType(slot.type);
    setSlotRoom(slot.room || '');
    setSlotProfessor(slot.professor || '');
    setIsAddSlotOpen(true);
  };

  const handleSaveSlot = (e: React.FormEvent) => {
    e.preventDefault();
    if (!slotSubjectId) return;

    if (parseTimeToMinutes(slotEndTime) <= parseTimeToMinutes(slotStartTime)) {
      alert("L'heure de fin doit être postérieure à l'heure de début.");
      return;
    }

    if (editingSlotId) {
      const updated = classSlots.map(s => s.id === editingSlotId ? {
        ...s,
        subjectId: slotSubjectId,
        dayOfWeek: slotDay,
        startTime: slotStartTime,
        endTime: slotEndTime,
        type: slotType,
        room: slotRoom,
        professor: slotProfessor,
      } : s);
      onUpdateClassSlots(harmonizeAndDeduplicateSlots(updated));
    } else {
      const newSlot: ClassSlot = {
        id: generateId(),
        subjectId: slotSubjectId,
        dayOfWeek: slotDay,
        startTime: slotStartTime,
        endTime: slotEndTime,
        type: slotType,
        room: slotRoom,
        professor: slotProfessor,
      };
      onUpdateClassSlots(harmonizeAndDeduplicateSlots([...classSlots, newSlot]));
    }

    setIsAddSlotOpen(false);
  };

  const handleDeleteSlot = (id: string) => {
    onUpdateClassSlots(classSlots.filter(s => s.id !== id));
  };

  const handleParseImportText = () => {
    setImportError(null);
    setImportSuccess(null);
    if (!importText.trim()) {
      setImportError('Veuillez coller un texte ou un extrait d’emploi du temps.');
      return;
    }

    try {
      const parsed = parseStructuredScheduleTruth(importText);
      if (parsed.slots.length === 0) {
        setImportError("Aucun cours ou créneau reconnu. Exemple : 'Lundi : 08:00–10:00 Mathématiques ; 10:15–12:00 Physique'");
        return;
      }

      // 1. Sync and merge newly parsed subjects
      const updatedSubjects: Subject[] = [...subjects];
      parsed.subjects.forEach(newSub => {
        const exists = updatedSubjects.some(s => s.name.toLowerCase() === newSub.name.toLowerCase());
        if (!exists) {
          updatedSubjects.push({
            id: newSub.id,
            name: newSub.name,
            color: newSub.color,
            coefficient: newSub.coefficient,
            difficulty: newSub.difficulty,
            targetGrade: newSub.targetGrade || 16,
            topics: newSub.topics || [],
          });
        }
      });

      if (onUpdateSubjects && updatedSubjects.length > subjects.length) {
        onUpdateSubjects(updatedSubjects);
      }

      // 2. Map ExtractedClassCandidate to ClassSlot, keeping accurate subject reference
      const newParsedSlots: ClassSlot[] = parsed.slots.map(s => {
        const matchingSub = updatedSubjects.find(sub => sub.name.toLowerCase() === s.subjectName.toLowerCase()) || updatedSubjects[0];
        return {
          id: s.id,
          subjectId: matchingSub ? matchingSub.id : s.subjectId,
          dayOfWeek: s.dayOfWeek,
          startTime: s.startTime,
          endTime: s.endTime,
          type: s.type,
          room: s.room,
          professor: s.professor,
        };
      });

      onUpdateClassSlots(harmonizeAndDeduplicateSlots([...classSlots, ...newParsedSlots]));
      setImportSuccess(`✨ ${newParsedSlots.length} cours certifiés importés dans la Source de Vérité !`);
      setTimeout(() => {
        setIsImportModalOpen(false);
        setImportSuccess(null);
        setImportText('');
      }, 1500);
    } catch {
      setImportError("Erreur lors de l'analyse du texte.");
    }
  };


  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      
      {/* HEADER BAR */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="cyan" size="sm" dot>Synchronisé</Badge>
            <span className="text-xs text-slate-400 font-mono">{studentName} • {academicLevel}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <Calendar className="w-7 h-7 sm:w-8 sm:h-8 text-indigo-400 shrink-0" />
            <span>Emploi du Temps & Grille Hebdomadaire</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Visualisez vos cours scolaires fixes et vos créneaux de travail personnel organisés selon vos disponibilités.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">

          {/* Import Emploi du Temps - ONLY FOR CONNECTED USERS, NOT IN DEMO */}
          {!isDemoMode && onNavigate && (
            <Button
              variant="secondary"
              size="sm"
              leftIcon={<FileText className="w-3.5 h-3.5 text-cyan-400" />}
              onClick={() => onNavigate('upload-schedule')}
              title="Importer un nouvel emploi du temps au format texte"
              className="cursor-pointer text-xs font-semibold py-2 px-3 border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10"
            >
              Importer Emploi du Temps
            </Button>
          )}

          {/* View Source of Truth Button */}
          <Button
            variant="secondary"
            size="sm"
            leftIcon={<Lock className="w-3.5 h-3.5 text-cyan-400" />}
            onClick={() => {
              const enriched = classSlots.map(c => ({
                ...c,
                subjectName: subjects.find(s => s.id === c.subjectId)?.name || 'Cours',
              }));
              setTruthEditText(formatStructuredScheduleTruth(enriched));
              setIsSourceTruthModalOpen(true);
            }}
            title="Consulter et exporter la Source de Vérité des cours extraits"
            className="cursor-pointer text-xs font-semibold py-2 px-3 border-indigo-500/40 text-indigo-300 hover:bg-indigo-500/10"
          >
            Source de Vérité
          </Button>

          {/* Preset / Filière Modal - STRICTLY IN DEMO MODE ONLY */}
          {isDemoMode && onOpenPresetModal && (
            <Button
              variant="ghost"
              size="sm"
              leftIcon={<GraduationCap className="w-3.5 h-3.5 text-indigo-400" />}
              onClick={onOpenPresetModal}
              title="Changer de filière ou modèle académique (disponible en mode démo)"
              className="cursor-pointer text-xs font-semibold py-2 px-3 text-slate-300 hover:text-white"
            >
              Filières (Démo)
            </Button>
          )}

          {/* Add Course Button */}
          <Button
            variant="secondary"
            size="sm"
            leftIcon={<Plus className="w-3.5 h-3.5 text-indigo-400" />}
            onClick={() => handleOpenAddModal(activeMobileDay)}
            className="cursor-pointer text-xs font-semibold py-2 px-3"
          >
            Ajouter un Cours
          </Button>
        </div>
      </div>

      {/* VIEW FILTER SWITCHER & KPI STRIP */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-3.5 sm:p-4 rounded-2xl glass-panel border border-slate-800">
        
        {/* Filter Mode Selector */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          <span className="text-xs font-bold text-slate-400 mr-1 flex items-center gap-1 shrink-0">
            <Eye className="w-3.5 h-3.5 text-cyan-400" />
            Affichage :
          </span>

          <button
            onClick={() => setFilterMode('combined')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer min-h-[34px] interactive-pill ${
              filterMode === 'combined'
                ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-500/30'
                : 'bg-slate-900/80 text-slate-400 hover:text-white'
            }`}
          >
            ✨ Vue Complète (Cours + Révisions)
          </button>

          <button
            onClick={() => setFilterMode('classes_only')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer min-h-[34px] interactive-pill ${
              filterMode === 'classes_only'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-slate-900/80 text-slate-400 hover:text-white'
            }`}
          >
            📚 Cours Scolaires ({classSlots.length})
          </button>

          <button
            onClick={() => setFilterMode('study_only')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer min-h-[34px] interactive-pill ${
              filterMode === 'study_only'
                ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                : 'bg-slate-900/80 text-slate-400 hover:text-white'
            }`}
          >
            Séances de Révision ({studySessions.length})
          </button>
        </div>

        {/* Strategy Badge & Legend Pills */}
        <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-400">
          <button
            type="button"
            onClick={() => {
              setSelectedModalStrategy(preferences.pacing || 'active_recall_spaced');
              setIsStrategyModalOpen(true);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-950/40 border border-indigo-500/40 text-indigo-300 hover:text-white hover:border-indigo-400 text-xs font-semibold cursor-pointer transition-all shadow-sm"
            title="Consulter l'explication de la méthode d'espacement appliquée à votre emploi du temps"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="break-words">Méthode : {activeStrategy.title}</span>
            <span className="text-[10px] text-cyan-400 font-mono ml-0.5 shrink-0">({activeStrategy.focusBlockDuration}m)</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
              <span>Cours fixes</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              <span>Révision</span>
            </span>
          </div>
        </div>

      </div>

      {/* MOBILE / TABLET DAY SELECTOR */}
      <div className="block lg:hidden space-y-4">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
          {displayedDays.map(d => {
            const classCount = classSlots.filter(s => s.dayOfWeek === d.id).length;
            const studyCount = studySessions.filter(s => s.dayOfWeek === d.id).length;
            const totalForDay = filterMode === 'classes_only' ? classCount : filterMode === 'study_only' ? studyCount : classCount + studyCount;
            const isSelected = activeMobileDay === d.id;

            return (
              <button
                key={d.id}
                onClick={() => setActiveMobileDay(d.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 min-h-[38px] flex items-center gap-2 cursor-pointer interactive-pill ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <span>{d.label}</span>
                {totalForDay > 0 && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-800 text-cyan-400'}`}>
                    {totalForDay}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile Day Items List */}
        <div className="space-y-3">
          {/* 1. Classes on Mobile */}
          {(filterMode === 'combined' || filterMode === 'classes_only') &&
            classSlots
              .filter(s => s.dayOfWeek === activeMobileDay)
              .sort((a, b) => parseTimeToMinutes(a.startTime) - parseTimeToMinutes(b.startTime))
              .map(slot => {
                const subject = subjects.find(s => s.id === slot.subjectId) || { name: 'Matière', color: '#6366F1' };
                const typeInfo = COURSE_TYPE_LABELS[slot.type] || { badge: 'CM' };

                return (
                  <div
                    key={slot.id}
                    className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-3 shadow-md interactive-card"
                    style={{ borderLeftColor: subject.color, borderLeftWidth: '5px' }}
                  >
                    <div className="min-w-0 space-y-1">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-mono font-bold text-cyan-400">{slot.startTime} - {slot.endTime}</span>
                        <Badge variant="slate" size="sm">{typeInfo.badge}</Badge>
                      </div>
                      <h4 className="text-sm font-bold text-white break-words leading-snug">{subject.name}</h4>
                      {(slot.room || slot.professor) && (
                        <p className="text-[11px] text-slate-400 break-words mt-0.5">
                          {slot.room ? `Salle: ${slot.room}` : ''} {slot.professor ? `• Prof: ${slot.professor}` : ''}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={() => handleOpenEditModal(slot)}
                        className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-800 cursor-pointer"
                        title="Modifier"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDeleteSlot(slot.id)}
                        className="p-2 text-rose-400 hover:text-rose-300 rounded-lg bg-rose-500/10 cursor-pointer"
                        title="Supprimer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}

          {/* 2. Study Sessions on Mobile */}
          {(filterMode === 'combined' || filterMode === 'study_only') &&
            studySessions
              .filter(s => s.dayOfWeek === activeMobileDay)
              .sort((a, b) => parseTimeToMinutes(a.startTime) - parseTimeToMinutes(b.startTime))
              .map(session => {
                const subject = subjects.find(s => s.id === session.subjectId) || { name: 'Révision', color: '#06B6D4' };

                return (
                  <div
                    key={session.id}
                    className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 flex items-center justify-between gap-3 shadow-md interactive-card"
                    style={{ borderLeftColor: '#06B6D4', borderLeftWidth: '5px' }}
                  >
                    <div className="min-w-0 space-y-1 flex-1">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-mono font-bold text-cyan-300">{session.startTime} - {session.endTime}</span>
                        <Badge variant="cyan" size="sm">Révision</Badge>
                      </div>
                      <h4 className="text-sm font-bold text-white break-words leading-snug">{session.title}</h4>
                      <p className="text-[11px] text-slate-400 break-words mt-0.5">Matière : {subject.name} • {session.durationMinutes} min</p>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>

      {/* DESKTOP HIGH DEFINITION WEEKLY TIMETABLE GRID */}
      <div 
        ref={timetableGridRef}
        className="hidden lg:block glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl overflow-x-auto print:border-none print:shadow-none print:bg-white print:p-0"
      >
        <div className="min-w-[920px]">
          
          {/* Days Header Columns */}
          <div className="grid grid-cols-5 md:grid-cols-7 gap-3 mb-4 pb-4 border-b border-slate-800 text-center">
            {displayedDays.map(d => {
              const dayClasses = classSlots.filter(s => s.dayOfWeek === d.id).length;
              const dayStudy = studySessions.filter(s => s.dayOfWeek === d.id).length;
              return (
                <div key={d.id} className="space-y-1">
                  <span className="text-sm font-extrabold text-white uppercase tracking-wider">{d.label}</span>
                  <div className="flex items-center justify-center gap-1.5">
                    <Badge variant={dayClasses > 0 ? 'primary' : 'slate'} size="sm" className="text-[10px]">
                      {dayClasses} cours
                    </Badge>
                    {filterMode !== 'classes_only' && dayStudy > 0 && (
                      <Badge variant="cyan" size="sm" className="text-[10px]">
                        {dayStudy} études
                      </Badge>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main Grid Columns with Spacious Readable Cards */}
          <div className="grid grid-cols-5 md:grid-cols-7 gap-3 min-h-[500px]">
            {displayedDays.map(d => {
              const dayClasses = classSlots
                .filter(s => s.dayOfWeek === d.id)
                .sort((a, b) => parseTimeToMinutes(a.startTime) - parseTimeToMinutes(b.startTime));

              const dayStudySessions = studySessions
                .filter(s => s.dayOfWeek === d.id)
                .sort((a, b) => parseTimeToMinutes(a.startTime) - parseTimeToMinutes(b.startTime));

              const isEmpty = (filterMode === 'classes_only' && dayClasses.length === 0) ||
                (filterMode === 'study_only' && dayStudySessions.length === 0) ||
                (filterMode === 'combined' && dayClasses.length === 0 && dayStudySessions.length === 0);

              return (
                <div
                  key={d.id}
                  className="bg-slate-900/40 rounded-2xl p-3 border border-slate-800/80 flex flex-col justify-between space-y-3 hover:border-slate-700/80 transition-all min-h-[460px]"
                >
                  <div className="space-y-2.5">
                    {isEmpty ? (
                      <div className="text-center py-16 px-1">
                        <p className="text-xs text-slate-500 italic">Créneau libre</p>
                      </div>
                    ) : (
                      <>
                        {/* Fixed Classes */}
                        {(filterMode === 'combined' || filterMode === 'classes_only') &&
                          dayClasses.map(slot => {
                            const subject = subjects.find(s => s.id === slot.subjectId) || {
                              name: 'Matière',
                              color: '#6366F1',
                            };
                            const typeInfo = COURSE_TYPE_LABELS[slot.type] || { badge: 'CM' };

                            return (
                              <div
                                key={slot.id}
                                className="group relative rounded-xl p-3 bg-slate-800/90 hover:bg-slate-750 border border-slate-700/60 transition-all text-left shadow-md hover:shadow-indigo-500/10"
                                style={{ borderLeftColor: subject.color, borderLeftWidth: '5px' }}
                              >
                                <div className="flex items-center justify-between gap-1 text-[11px] mb-1">
                                  <span className="font-mono font-bold text-cyan-400">
                                    {slot.startTime} - {slot.endTime}
                                  </span>
                                  <Badge variant="slate" size="sm" className="text-[10px] px-1.5 py-0">
                                    {typeInfo.badge}
                                  </Badge>
                                </div>

                                <h4 className="text-xs font-bold text-white leading-tight">
                                  {subject.name}
                                </h4>

                                {(slot.room || slot.professor) && (
                                  <p className="text-[10px] text-slate-400 mt-1 truncate">
                                    {slot.room ? `📍 ${slot.room}` : ''} {slot.professor ? `• 👤 ${slot.professor}` : ''}
                                  </p>
                                )}

                                {/* Hover Actions */}
                                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 bg-slate-900/95 rounded-lg p-0.5 border border-slate-700 shadow-md">
                                  <button
                                    onClick={() => handleOpenEditModal(slot)}
                                    title="Modifier"
                                    className="p-1 text-slate-300 hover:text-white rounded hover:bg-slate-700 cursor-pointer"
                                  >
                                    <Edit3 className="w-3.5 h-3.5" />
                                  </button>
                                  <button
                                    onClick={() => handleDeleteSlot(slot.id)}
                                    title="Supprimer"
                                    className="p-1 text-slate-300 hover:text-rose-400 rounded hover:bg-rose-500/20 cursor-pointer"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </div>
                            );
                          })}

                        {/* AI Generated Study Sessions */}
                        {(filterMode === 'combined' || filterMode === 'study_only') &&
                          dayStudySessions.map(session => {
                            const subject = subjects.find(s => s.id === session.subjectId) || {
                              name: 'Matière',
                              color: '#06B6D4',
                            };

                            return (
                              <div
                                key={session.id}
                                className="rounded-xl p-2.5 bg-cyan-950/30 hover:bg-cyan-950/50 border border-cyan-500/40 transition-all text-left shadow-sm"
                                style={{ borderLeftColor: '#06B6D4', borderLeftWidth: '5px' }}
                              >
                                <div className="flex items-center justify-between gap-1 text-[10px] mb-1">
                                  <span className="font-mono font-bold text-cyan-300">
                                    {session.startTime} - {session.endTime}
                                  </span>
                                  <span className="text-[10px] text-cyan-400/70 font-medium">
                                    Révision
                                  </span>
                                </div>

                                <h4 className="text-[11px] font-bold text-white leading-snug line-clamp-2">
                                  {session.title}
                                </h4>

                                <p className="text-[10px] text-cyan-400/80 mt-1 truncate">
                                  {subject.name} • {session.durationMinutes}m
                                </p>
                              </div>
                            );
                          })}
                      </>
                    )}
                  </div>

                  <button
                    onClick={() => handleOpenAddModal(d.id)}
                    className="w-full py-2 px-2 rounded-xl border border-dashed border-slate-800 hover:border-indigo-500/60 text-slate-400 hover:text-indigo-300 text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Ajouter un cours</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FOOTER CALL TO ACTION */}
      <div className="flex flex-col sm:flex-row items-center justify-between p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-indigo-950/50 via-slate-900 to-slate-950 border border-indigo-500/30 gap-4">
        <div className="flex items-center gap-3.5">
          <div className="p-3 rounded-2xl bg-indigo-600 text-white shrink-0 shadow-lg shadow-indigo-500/30">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white">Votre emploi du temps est prêt !</h4>
            <p className="text-xs text-slate-400">
              Passez au planning intelligent pour générer et démarrer vos sessions de travail personnel.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          <Button
            variant="glow"
            size="sm"
            onClick={onTriggerPlanner}
            rightIcon={<Clock className="w-4 h-4" />}
            className="cursor-pointer whitespace-nowrap text-xs font-bold flex-1 sm:flex-initial py-2.5 px-5 shadow-lg shadow-blue-950/40 hover:scale-105 active:scale-95 transition-all"
          >
            ✨ Voir mon Planning de Révision
          </Button>
        </div>
      </div>

      {/* MODAL: ADD / EDIT CLASS SLOT */}
      <Modal
        isOpen={isAddSlotOpen}
        onClose={() => setIsAddSlotOpen(false)}
        title={editingSlotId ? "Modifier le cours" : "Ajouter un cours"}
        description="Bloquez ce créneau dans votre emploi du temps."
        maxWidth="md"
      >
        <form onSubmit={handleSaveSlot} className="space-y-4">
          <Select
            label="Matière"
            value={slotSubjectId}
            onChange={(e) => setSlotSubjectId(e.target.value)}
            options={subjects.map(s => ({
              value: s.id,
              label: `${s.code ? `[${s.code}] ` : ''}${s.name}`,
            }))}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <Select
              label="Jour"
              value={slotDay}
              onChange={(e) => setSlotDay(Number(e.target.value) as DayOfWeek)}
              options={DAYS_OF_WEEK.map(d => ({
                value: d.id,
                label: d.label,
              }))}
            />

            <Select
              label="Type de séance"
              value={slotType}
              onChange={(e) => setSlotType(e.target.value as CourseType)}
              options={Object.entries(COURSE_TYPE_LABELS).map(([key, val]) => ({
                value: key,
                label: val.label,
              }))}
            />
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <Input
              label="Début"
              type="time"
              value={slotStartTime}
              onChange={(e) => setSlotStartTime(e.target.value)}
              required
            />
            <Input
              label="Fin"
              type="time"
              value={slotEndTime}
              onChange={(e) => setSlotEndTime(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <Input
              label="Salle (optionnel)"
              placeholder="Amphi Turing / B204"
              value={slotRoom}
              onChange={(e) => setSlotRoom(e.target.value)}
            />
            <Input
              label="Enseignant (optionnel)"
              placeholder="Dr. Martin"
              value={slotProfessor}
              onChange={(e) => setSlotProfessor(e.target.value)}
            />
          </div>

          <div className="pt-4 flex items-center justify-end gap-2 sm:gap-3 border-t border-slate-800">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setIsAddSlotOpen(false)}
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
              {editingSlotId ? "Enregistrer" : "Ajouter au planning"}
            </Button>
          </div>
        </form>
      </Modal>

      {/* MODAL: SMART IMPORT TEXT */}
      <Modal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        title="Import Rapide d'Emploi du Temps"
        description="Collez votre programme de la semaine."
        maxWidth="lg"
      >
        <div className="space-y-4">
          <textarea
            value={importText}
            onChange={(e) => setImportText(e.target.value)}
            placeholder="Lundi 08:30 - 10:30 CM Algorithmique..."
            className="w-full h-36 bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-100 font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {importError && (
            <p className="text-xs text-rose-400 font-medium bg-rose-500/10 p-2.5 rounded-lg border border-rose-500/20">
              {importError}
            </p>
          )}

          {importSuccess && (
            <p className="text-xs text-emerald-400 font-medium bg-emerald-500/10 p-2.5 rounded-lg border border-emerald-500/20 flex items-center gap-2">
              <Check className="w-4 h-4" />
              {importSuccess}
            </p>
          )}

          <div className="flex items-center justify-end gap-2 pt-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsImportModalOpen(false)}
              className="text-xs"
            >
              Fermer
            </Button>
            <Button
              variant="primary"
              size="sm"
              leftIcon={<FileText className="w-4 h-4" />}
              onClick={handleParseImportText}
              className="text-xs font-bold"
            >
              Analyser & Importer
            </Button>
          </div>
        </div>
      </Modal>

      {/* MODAL: SOURCE DE VERITE INTANGIBLE */}
      <Modal
        isOpen={isSourceTruthModalOpen}
        onClose={() => {
          setIsSourceTruthModalOpen(false);
          setIsEditingTruthDirect(false);
        }}
        title="🔒 Source de Vérité des Cours Fixes"
        description="Structure canonique des cours. Aucun cours n'est inventé ou déplacé."
        maxWidth="lg"
      >
        <div className="space-y-4">
          <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-xs text-slate-300">
            Cette extraction constitue le socle fixe de votre semaine. Vos sessions de révision sont organisées harmonieusement autour de ces horaires.
          </div>

          {isEditingTruthDirect ? (
            <div className="space-y-3">
              <textarea
                value={truthEditText}
                onChange={(e) => setTruthEditText(e.target.value)}
                rows={8}
                className="w-full p-3 rounded-xl bg-slate-950 border border-indigo-500/50 text-white font-mono text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Lundi : 08:00–10:00 Mathématiques ; 10:15–12:00 Physique"
              />
              <div className="flex justify-end gap-2">
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => setIsEditingTruthDirect(false)}
                >
                  Annuler
                </Button>
                <Button
                  size="sm"
                  variant="glow"
                  onClick={() => {
                    const parsed = parseStructuredScheduleTruth(truthEditText);
                    if (parsed.slots.length > 0) {
                      const updatedSubjects: Subject[] = [...subjects];
                      parsed.subjects.forEach(newSub => {
                        const exists = updatedSubjects.some(s => s.name.toLowerCase() === newSub.name.toLowerCase());
                        if (!exists) {
                          updatedSubjects.push({
                            id: newSub.id,
                            name: newSub.name,
                            color: newSub.color,
                            coefficient: newSub.coefficient,
                            difficulty: newSub.difficulty,
                            targetGrade: newSub.targetGrade || 16,
                            topics: newSub.topics || [],
                          });
                        }
                      });

                      if (onUpdateSubjects && updatedSubjects.length > subjects.length) {
                        onUpdateSubjects(updatedSubjects);
                      }

                      const newSlots: ClassSlot[] = parsed.slots.map(s => {
                        const matchedSub = updatedSubjects.find(sub => sub.name.toLowerCase() === s.subjectName.toLowerCase()) || updatedSubjects[0];
                        return {
                          id: s.id,
                          subjectId: matchedSub ? matchedSub.id : s.subjectId,
                          dayOfWeek: s.dayOfWeek,
                          startTime: s.startTime,
                          endTime: s.endTime,
                          type: s.type,
                          room: s.room,
                          professor: s.professor,
                        };
                      });
                      onUpdateClassSlots(harmonizeAndDeduplicateSlots(newSlots));
                      setIsEditingTruthDirect(false);
                      setIsSourceTruthModalOpen(false);
                    } else {
                      alert("Format non reconnu. Assurez-vous d'avoir au moins un horaire (ex: 08:00–10:00 Mathématiques).");
                    }
                  }}
                >
                  Appliquer les modifications
                </Button>
              </div>
            </div>
          ) : (
            <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-cyan-300 font-mono text-xs leading-relaxed overflow-x-auto whitespace-pre-wrap">
              {truthEditText || '(Aucun cours dans la source de vérité)'}
            </pre>
          )}

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => setIsEditingTruthDirect(!isEditingTruthDirect)}
              className="text-xs text-indigo-400 hover:text-white underline cursor-pointer"
            >
              {isEditingTruthDirect ? 'Mode lecture' : 'Modifier directement la source'}
            </button>

            <div className="flex items-center gap-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(truthEditText);
                  setCopiedTruth(true);
                  setTimeout(() => setCopiedTruth(false), 2000);
                }}
                leftIcon={copiedTruth ? <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                className="text-xs"
              >
                {copiedTruth ? 'Copié !' : 'Copier le texte'}
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => setIsSourceTruthModalOpen(false)}
                className="text-xs font-bold"
              >
                Fermer
              </Button>
            </div>
          </div>
        </div>
      </Modal>

      {/* STRATEGY & PACING METHODS EXPLANATION MODAL */}
      <Modal
        isOpen={isStrategyModalOpen}
        onClose={() => setIsStrategyModalOpen(false)}
        title="Méthodes d'Espacement & Stratégies d'Étude"
        maxWidth="lg"
      >
        <div className="space-y-4 text-slate-200">
          <p className="text-xs text-slate-400 leading-relaxed">
            Découvrez chaque méthode d'espacement et son fonctionnement neuroscientifique. Cliquez sur une méthode pour lire son explication détaillée et l'appliquer à vos séances d'étude.
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
                      Recommandation adaptée à votre grille :
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

          {/* Strategy Selector Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {(() => {
              const rec = recommendPacingStrategies(subjects.length, classSlots);
              return PACING_STRATEGIES.map(s => {
                const isCurrent = (selectedModalStrategy === s.id);
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
                    }}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer relative ${
                      isCurrent
                        ? 'bg-slate-900 border-cyan-400 ring-1 ring-cyan-400/50 shadow-md'
                        : isLocked
                          ? 'bg-slate-950/40 border-slate-800/80 text-slate-400 hover:border-amber-500/40'
                          : isPrimaryRec
                            ? 'bg-slate-950/80 border-amber-500/40 text-slate-300 hover:border-amber-400'
                            : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className={`text-xs font-bold ${isCurrent ? 'text-cyan-300' : 'text-slate-200'}`}>
                        {s.number}. {s.title}
                      </span>
                      <div className="flex items-center gap-1">
                        {isLocked && (
                          <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                            ⭐ PRO
                          </span>
                        )}
                        {isPrimaryRec && (
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-0.5">
                            <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" /> Idéal
                          </span>
                        )}
                        {!isPrimaryRec && isRecommended && (
                          <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                            Conseillé
                          </span>
                        )}
                        {isNotRecommended && (
                          <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40">
                            Déconseillé
                          </span>
                        )}
                        {isActiveInPrefs && (
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

          {/* Detailed Explanation View of Selected Strategy */}
          {(() => {
            const strat = getPacingStrategy(selectedModalStrategy);
            const isIdeaLabel = strat.number <= 2;
            const isAlreadyActive = preferences.pacing === strat.id;

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
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    <strong>Calibrage algorithmique :</strong> Blocs d'étude de <strong>{strat.focusBlockDuration} min</strong> avec pause de <strong>{strat.breakBlockDuration} min</strong> et objectifs ciblés.
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

                  {!isAlreadyActive && (
                    strat.planRequired === 'pro' && planTier === 'free' ? (
                      <Button
                        variant="glow"
                        size="sm"
                        onClick={() => {
                          setProModalInfo({
                            title: `${strat.title}`,
                            desc: `La méthode "${strat.title}" fait partie du modèle KONAN PRO. Passez à KONAN PRO pour synchroniser votre emploi du temps avec cette méthode avancée.`
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
                          const stratInfo = getPacingStrategy(selectedModalStrategy);
                          onUpdatePreferences({
                            ...preferences,
                            pacing: stratInfo.id,
                            focusBlockDuration: stratInfo.focusBlockDuration,
                            breakBlockDuration: stratInfo.breakBlockDuration,
                          });
                          onTriggerPlanner();
                          setIsStrategyModalOpen(false);
                        }}
                        className="text-xs font-bold cursor-pointer"
                      >
                        Appliquer cette méthode à mon planning
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

    </div>
  );
};
