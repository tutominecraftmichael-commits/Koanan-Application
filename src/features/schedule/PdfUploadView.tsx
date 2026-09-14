import React, { useState, useMemo, useEffect } from 'react';
import { 
  Sparkles, 
  Brain, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft,
  BookOpen, 
  AlertCircle, 
  RefreshCw, 
  Trash2,
  Calendar,
  Sliders,
  Plus,
  Edit3,
  Copy,
  CheckCircle,
  Lock,
  GraduationCap,
  FlaskConical,
  School,
  FileText,
  ClipboardPaste,
  Star
} from 'lucide-react';
import type { 
  ExtractedPdfSchedule, 
  ExtractedSubjectCandidate, 
  ExtractedClassCandidate, 
  Chronotype, 
  StudyPacing, 
  DayOfWeek, 
  CourseType,
  Subject,
  ClassSlot,
  StudyPreferences,
  StudySession
} from '../../types';
import { DAYS_OF_WEEK, COURSE_TYPE_LABELS } from '../../types';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { Modal } from '../../components/ui/Modal';
import { Input, Select } from '../../components/ui/FormControls';
import { generateId, parseTimeToMinutes } from '../../lib/utils';
import { 
  formatStructuredScheduleTruth,
  parseStructuredScheduleTruth,
  harmonizeAndDeduplicateSlots
} from '../../services/pdfParserService';
import { 
  generateAcademicAnalysisReport, 
  buildStateFromExtractedSchedule 
} from '../../services/aiAcademicAnalyzer';
import { PACING_STRATEGIES, getPacingStrategy, recommendPacingStrategies } from '../../lib/pacingStrategies';
import { ProFeatureModal } from '../../components/common/ProFeatureModal';
import confetti from 'canvas-confetti';

// ─── FORMAT TYPES & EXAMPLES ─────────────────────────────────────────────────

type ScheduleFormatType = 'lmd' | 'tpcm' | 'scolaire';

interface FormatDefinition {
  id: ScheduleFormatType;
  label: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  borderColor: string;
  bgColor: string;
  glowColor: string;
  description: string;
  audience: string;
  example: string;
  placeholder: string;
}

const FORMAT_DEFINITIONS: FormatDefinition[] = [
  {
    id: 'lmd',
    label: 'LMD (Universitaire)',
    subtitle: 'Licence · Master · Doctorat',
    icon: <GraduationCap className="w-6 h-6" />,
    color: 'text-indigo-400',
    borderColor: 'border-indigo-500/40',
    bgColor: 'bg-indigo-950/30',
    glowColor: 'shadow-indigo-500/20',
    description: 'Emplois du temps avec codes ECUE, amphithéâtres, noms des professeurs et numéros de salles.',
    audience: 'Étudiants en université, grandes écoles, ESATIC, INP-HB, etc.',
    example: `LUNDI :
07:30 - 10:00 | Algèbres 2 [1MTH3350] | Amphi A | Dr KOIVOGUI
10:15 - 12:45 | Anglais [1LAN3350] | Salle 204 | M. YEO
14:30 - 17:00 | Développement d'Applications [1INF3350] | Lab Info | M. KONE
MARDI :
07:30 - 10:00 | Fondamentaux de la Finance [1MAN3350] | Amphi B | Dr KADJO
10:15 - 12:45 | Conception Web [2INF3350] | Lab Info | M. MEYER
MERCREDI :
07:30 - 10:00 | Analyse 2 [2MTH3350] | Amphi A | Dr GOLI`,
    placeholder: `Collez votre emploi du temps ici au format LMD…

Exemple :
LUNDI :
07:30 - 10:00 | Algèbres 2 [1MTH3350] | Amphi A | Dr KOIVOGUI
10:15 - 12:45 | Anglais [1LAN3350] | Salle 204 | M. YEO
MARDI :
08:00 - 10:00 | Finance [1MAN3350] | Amphi B | Dr KADJO`,
  },
  {
    id: 'tpcm',
    label: 'TP / CM (Technique)',
    subtitle: 'BTS · DUT · Ingénieur',
    icon: <FlaskConical className="w-6 h-6" />,
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/40',
    bgColor: 'bg-cyan-950/30',
    glowColor: 'shadow-cyan-500/20',
    description: 'Emplois du temps avec types de cours explicites (CM, TD, TP) et laboratoires spécialisés.',
    audience: 'BTS, DUT, écoles d\'ingénieurs, formations techniques.',
    example: `LUNDI :
08:00 - 10:00 CM Électronique Analogique | Amphi 1
10:15 - 12:15 TD Mathématiques Appliquées | Salle 302
14:00 - 17:00 TP Informatique Industrielle | Labo Info
MARDI :
08:00 - 10:00 CM Physique des Matériaux | Amphi 2
10:15 - 12:15 TD Automatismes | Salle 105
14:00 - 16:00 TP Électricité | Labo Elec
JEUDI :
08:00 - 10:00 CM Anglais Technique | Salle 201
10:15 - 12:15 TD Thermodynamique | Salle 303`,
    placeholder: `Collez votre emploi du temps ici au format TP/CM…

Exemple :
LUNDI :
08:00 - 10:00 CM Électronique Analogique | Amphi 1
10:15 - 12:15 TD Mathématiques Appliquées | Salle 302
14:00 - 17:00 TP Informatique Industrielle | Labo Info`,
  },
  {
    id: 'scolaire',
    label: 'Scolaire',
    subtitle: 'Lycée · Collège',
    icon: <School className="w-6 h-6" />,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/40',
    bgColor: 'bg-emerald-950/30',
    glowColor: 'shadow-emerald-500/20',
    description: 'Format simplifié : horaires + matière. Pas besoin de code ni de salle.',
    audience: 'Lycéens, collégiens, élèves en prépa.',
    example: `LUNDI :
08:00 - 10:00 Mathématiques
10:15 - 12:00 Physique-Chimie
14:00 - 16:00 Français
MARDI :
08:00 - 10:00 Histoire-Géographie
10:15 - 12:00 Anglais
14:00 - 16:00 SVT
MERCREDI :
08:00 - 10:00 Philosophie
10:15 - 12:00 EPS`,
    placeholder: `Collez votre emploi du temps ici…

Exemple :
LUNDI :
08:00 - 10:00 Mathématiques
10:15 - 12:00 Physique-Chimie
14:00 - 16:00 Français`,
  },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export interface PdfUploadViewProps {
  studentName: string;
  planTier?: 'free' | 'pro' | 'plus';
  onApplyExtractedSchedule: (payload: {
    subjects: Subject[];
    classSlots: ClassSlot[];
    preferences: StudyPreferences;
    studySessions: StudySession[];
  }) => void;
  onCancel?: () => void;
  onViewPricing?: () => void;
}

export const PdfUploadView: React.FC<PdfUploadViewProps> = ({
  studentName,
  planTier = 'free',
  onApplyExtractedSchedule,
  onCancel,
  onViewPricing,
}) => {
  // Format selection
  const [selectedFormat, setSelectedFormat] = useState<ScheduleFormatType | null>(null);
  const [scheduleText, setScheduleText] = useState('');

  // Analysis pipeline
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState<number>(0);
  const [analysisLogs, setAnalysisLogs] = useState<string[]>([]);
  const [extractedData, setExtractedData] = useState<ExtractedPdfSchedule | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Add/Edit subject modal
  const [isAddSubjectOpen, setIsAddSubjectOpen] = useState(false);
  const [newSubName, setNewSubName] = useState('');
  const [newSubCoeff, setNewSubCoeff] = useState(4);
  const [newSubDiff, setNewSubDiff] = useState<1|2|3|4|5>(3);

  // Add slot modal
  const [isAddSlotOpen, setIsAddSlotOpen] = useState(false);
  const [slotSubId, setSlotSubId] = useState('');
  const [slotDay, setSlotDay] = useState<DayOfWeek>(0);
  const [slotStart, setSlotStart] = useState('08:30');
  const [slotEnd, setSlotEnd] = useState('10:30');
  const [slotType, setSlotType] = useState<CourseType>('lecture');
  const [slotRoom, setSlotRoom] = useState('Amphi A');
  const [slotProf, setSlotProf] = useState('');

  // Edit slot modal
  const [editingSlot, setEditingSlot] = useState<ExtractedClassCandidate | null>(null);

  // Review stage state
  const [activeTab, setActiveTab] = useState<'source_truth' | 'subjects' | 'slots' | 'strategy' | 'raw_inspector'>('source_truth');
  const [isEditingTruth, setIsEditingTruth] = useState(false);
  const [truthEditText, setTruthEditText] = useState('');
  const [copiedTruthText, setCopiedTruthText] = useState(false);
  const [selectedChronotype, setSelectedChronotype] = useState<Chronotype>('evening');
  const [selectedPacing, setSelectedPacing] = useState<StudyPacing>('active_recall_spaced');
  const [copiedRawText, setCopiedRawText] = useState(false);

  // Dynamic recommendation engine based on class finish times, weekly volume, and subject count
  const pacingRecommendation = useMemo(() => {
    if (!extractedData) return null;
    return recommendPacingStrategies(
      extractedData.subjects.length,
      extractedData.slots,
      extractedData.totalWeeklyClassHours
    );
  }, [extractedData]);

  const [proModalInfo, setProModalInfo] = useState<{ title: string; desc: string } | null>(null);

  // Pre-select the recommended pacing strategy when schedule is analyzed
  useEffect(() => {
    if (pacingRecommendation) {
      if (planTier === 'free' && (pacingRecommendation.primaryId === 'feynman' || pacingRecommendation.primaryId === 'time_blocking')) {
        const freeFallback = pacingRecommendation.recommendedIds.find(id => id !== 'feynman' && id !== 'time_blocking') || 'active_recall_spaced';
        setSelectedPacing(freeFallback);
      } else {
        setSelectedPacing(pacingRecommendation.primaryId);
      }
    }
  }, [pacingRecommendation, planTier]);

  const stepsList = [
    { title: 'Lecture du texte structuré', desc: 'Décodage de la grille horaire saisie' },
    { title: 'Extraction de la Source de Vérité', desc: 'Reconnaissance exacte des cours sans inventer de données' },
    { title: 'Pondération des matières réelles', desc: 'Évaluation des coefficients et exigences académiques' },
    { title: 'Génération du planning personnalisé', desc: 'Organisation chronologique dans les créneaux libres' },
  ];

  const recalculateSummary = (data: ExtractedPdfSchedule): ExtractedPdfSchedule => {
    const totalWeeklyClassMinutes = data.slots.reduce((acc, slot) => {
      return acc + Math.max(0, (parseTimeToMinutes(slot.endTime) - parseTimeToMinutes(slot.startTime)));
    }, 0);

    const totalWeeklyClassHours = Math.round((totalWeeklyClassMinutes / 60) * 10) / 10;
    const recommendedStudyHours = Math.max(8, Math.round(totalWeeklyClassHours * 0.75));

    return {
      ...data,
      totalWeeklyClassHours,
      recommendedStudyHours,
    };
  };

  const triggerAnalysisPipeline = async (processSchedule: () => Promise<ExtractedPdfSchedule>) => {
    setIsAnalyzing(true);
    setErrorMessage(null);
    setAnalysisStep(0);
    setAnalysisLogs(['[1/4] 📋 Lecture et structuration du texte saisi...']);

    try {
      // Step 1
      await new Promise(r => setTimeout(r, 600));
      setAnalysisStep(1);
      setAnalysisLogs(prev => [...prev, '[2/4] 🗓️ Détection des jours, créneaux horaires et matières...']);

      // Step 2
      const rawResult = await processSchedule();
      const result: ExtractedPdfSchedule = recalculateSummary({
        ...rawResult,
        slots: harmonizeAndDeduplicateSlots(rawResult.slots)
      });
      await new Promise(r => setTimeout(r, 700));
      setAnalysisStep(2);
      setAnalysisLogs(prev => [
        ...prev, 
        `[3/4] ⚖️ ${result.subjects.length} matières distinctes détectées et pondérées dynamiquement...`
      ]);

      // Step 3
      await new Promise(r => setTimeout(r, 600));
      setAnalysisStep(3);
      setAnalysisLogs(prev => [
        ...prev, 
        `[4/4] 🧠 ${result.slots.length} créneaux fixes enregistrés. Optimisation des plages d'étude...`
      ]);

      // Complete
      await new Promise(r => setTimeout(r, 400));
      setIsAnalyzing(false);
      setExtractedData(result);
    } catch (err) {
      console.error('Extraction error:', err);
      setIsAnalyzing(false);
      setErrorMessage("Impossible d'extraire les cours de ce texte. Vérifiez le format (Jour : HH:MM - HH:MM Matière) puis réessayez.");
    }
  };

  const handleAnalyzeText = () => {
    if (!scheduleText.trim()) {
      setErrorMessage('Veuillez coller ou saisir votre emploi du temps avant de lancer l\'analyse.');
      return;
    }
    triggerAnalysisPipeline(async () => {
      const formatLabel = FORMAT_DEFINITIONS.find(f => f.id === selectedFormat)?.label || 'Emploi du Temps';
      return parseStructuredScheduleTruth(scheduleText, `Emploi_du_Temps_${formatLabel}.txt`);
    });
  };

  // Subject management
  const handleAddSubject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSubName.trim() || !extractedData) return;

    const newSub: ExtractedSubjectCandidate = {
      id: generateId(),
      name: newSubName.trim(),
      color: '#6366F1',
      coefficient: newSubCoeff,
      difficulty: newSubDiff,
      targetGrade: 16,
      topics: [`Concepts fondamentaux de ${newSubName}`],
    };

    setExtractedData(recalculateSummary({
      ...extractedData,
      subjects: [...extractedData.subjects, newSub],
    }));

    setNewSubName('');
    setIsAddSubjectOpen(false);
  };

  const handleUpdateSubject = (id: string, updates: Partial<ExtractedSubjectCandidate>) => {
    if (!extractedData) return;
    setExtractedData(recalculateSummary({
      ...extractedData,
      subjects: extractedData.subjects.map(s => s.id === id ? { ...s, ...updates } : s),
    }));
  };

  const handleDeleteSubject = (id: string) => {
    if (!extractedData || extractedData.subjects.length <= 1) return;
    setExtractedData(recalculateSummary({
      ...extractedData,
      subjects: extractedData.subjects.filter(s => s.id !== id),
      slots: extractedData.slots.filter(slot => slot.subjectId !== id),
    }));
  };

  // Slot management
  const handleAddSlot = (e: React.FormEvent) => {
    e.preventDefault();
    if (!extractedData) return;

    const matchedSub = extractedData.subjects.find(s => s.id === (slotSubId || extractedData.subjects[0].id)) || extractedData.subjects[0];

    const newSlot: ExtractedClassCandidate = {
      id: generateId(),
      subjectId: matchedSub.id,
      subjectName: matchedSub.name,
      dayOfWeek: slotDay,
      startTime: slotStart,
      endTime: slotEnd,
      type: slotType,
      room: slotRoom,
      professor: slotProf.trim() || undefined,
    };

    setExtractedData(recalculateSummary({
      ...extractedData,
      slots: harmonizeAndDeduplicateSlots([...extractedData.slots, newSlot]),
    }));

    setIsAddSlotOpen(false);
    setSlotProf('');
  };

  const handleSaveEditSlot = (e: React.FormEvent) => {
    e.preventDefault();
    if (!extractedData || !editingSlot) return;

    const matchedSub = extractedData.subjects.find(s => s.id === editingSlot.subjectId) || extractedData.subjects[0];

    const updatedSlots = extractedData.slots.map(s => {
      if (s.id === editingSlot.id) {
        return {
          ...editingSlot,
          subjectName: matchedSub.name,
        };
      }
      return s;
    });

    setExtractedData(recalculateSummary({
      ...extractedData,
      slots: harmonizeAndDeduplicateSlots(updatedSlots),
    }));

    setEditingSlot(null);
  };

  const handleDeleteSlot = (id: string) => {
    if (!extractedData) return;
    setExtractedData(recalculateSummary({
      ...extractedData,
      slots: extractedData.slots.filter(s => s.id !== id),
    }));
  };

  const handleCopyRawText = () => {
    if (!extractedData?.rawText) return;
    navigator.clipboard.writeText(extractedData.rawText);
    setCopiedRawText(true);
    setTimeout(() => setCopiedRawText(false), 2000);
  };

  const handleFinalizeAndGenerate = () => {
    if (!extractedData) return;

    const harmonizedData = {
      ...extractedData,
      slots: harmonizeAndDeduplicateSlots(extractedData.slots),
    };

    const finalPayload = buildStateFromExtractedSchedule(
      harmonizedData,
      studentName,
      selectedChronotype,
      selectedPacing
    );

    confetti({
      particleCount: 160,
      spread: 100,
      origin: { y: 0.6 }
    });

    onApplyExtractedSchedule(finalPayload);
  };

  // Conflict / overlap detection
  const detectedConflicts: { slot1: ExtractedClassCandidate; slot2: ExtractedClassCandidate }[] = [];
  if (extractedData) {
    for (let i = 0; i < extractedData.slots.length; i++) {
      for (let j = i + 1; j < extractedData.slots.length; j++) {
        const s1 = extractedData.slots[i];
        const s2 = extractedData.slots[j];
        if (s1.dayOfWeek === s2.dayOfWeek) {
          const s1Start = parseTimeToMinutes(s1.startTime);
          const s1End = parseTimeToMinutes(s1.endTime);
          const s2Start = parseTimeToMinutes(s2.startTime);
          const s2End = parseTimeToMinutes(s2.endTime);

          if (Math.max(s1Start, s2Start) < Math.min(s1End, s2End)) {
            detectedConflicts.push({ slot1: s1, slot2: s2 });
          }
        }
      }
    }
  }

  const report = useMemo(() => {
    if (!extractedData) return null;
    return generateAcademicAnalysisReport(extractedData, selectedChronotype, selectedPacing);
  }, [extractedData, selectedChronotype, selectedPacing]);

  const activeFormatDef = FORMAT_DEFINITIONS.find(f => f.id === selectedFormat) || null;

  return (
    <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 animate-in fade-in duration-300 py-2">
      
      {/* HEADER SECTION */}
      <div className="text-center space-y-2.5 max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-1">
          {onCancel ? (
            <button
              onClick={onCancel}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Retour</span>
            </button>
          ) : <div />}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-indigo-300 text-xs font-semibold shadow-lg shadow-indigo-500/10">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Analyse Pédagogique • Emploi du Temps Étudiant</span>
          </div>
          <div />
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Importez votre <span className="text-gradient-primary">Emploi du Temps</span>
        </h1>

        <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Choisissez le format de votre emploi du temps, collez-le en texte et KONAN l'analysera <strong className="text-white">fidèlement</strong> pour créer votre <strong className="text-cyan-400">Source de Vérité</strong> intangible et votre planning d'étude personnalisé.
        </p>
      </div>

      {/* ERROR MESSAGE DISPLAY */}
      {errorMessage && (
        <div className="p-4 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs sm:text-sm flex items-center justify-between gap-3 animate-in shake duration-300">
          <div className="flex items-center gap-2.5">
            <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
            <span>{errorMessage}</span>
          </div>
          <button 
            onClick={() => setErrorMessage(null)} 
            className="text-xs text-rose-400 hover:text-white underline cursor-pointer shrink-0"
          >
            Fermer
          </button>
        </div>
      )}

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* STAGE 1: FORMAT SELECTION + TEXT INPUT                              */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      {!isAnalyzing && !extractedData && (
        <div className="space-y-6 sm:space-y-8">
          
          {/* ── STEP 1: FORMAT SELECTOR ───────────────────────────────────── */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-indigo-600 text-white text-[11px] font-black">1</span>
              <span>Quel type d'emploi du temps avez-vous ?</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {FORMAT_DEFINITIONS.map((fmt) => {
                const isActive = selectedFormat === fmt.id;
                return (
                  <button
                    key={fmt.id}
                    onClick={() => {
                      setSelectedFormat(fmt.id);
                      setScheduleText('');
                      setErrorMessage(null);
                    }}
                    className={`relative p-5 rounded-2xl border-2 text-left transition-all cursor-pointer group overflow-hidden ${
                      isActive
                        ? `${fmt.borderColor} ${fmt.bgColor} shadow-xl ${fmt.glowColor} scale-[1.02]`
                        : 'border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-900/80 shadow-md'
                    }`}
                  >
                    {/* Glow effect */}
                    {isActive && (
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full pointer-events-none" />
                    )}

                    <div className="relative z-10 space-y-3">
                      {/* Icon + Title */}
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl ${isActive ? fmt.bgColor : 'bg-slate-800/80'} ${fmt.color} transition-colors`}>
                          {fmt.icon}
                        </div>
                        <div className="min-w-0">
                          <h3 className={`text-sm font-bold ${isActive ? 'text-white' : 'text-slate-200 group-hover:text-white'} transition-colors`}>
                            {fmt.label}
                          </h3>
                          <span className="text-[11px] text-slate-400 font-medium">
                            {fmt.subtitle}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                        {fmt.description}
                      </p>

                      {/* Audience */}
                      <div className="text-[10px] text-slate-500 font-medium flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-emerald-400' : 'bg-slate-600'}`} />
                        <span>{fmt.audience}</span>
                      </div>

                      {/* Active indicator */}
                      {isActive && (
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 pt-1">
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>Format sélectionné</span>
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── STEP 2: TEXT INPUT + EXAMPLE ──────────────────────────────── */}
          {selectedFormat && activeFormatDef && (
            <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-300">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white">
                <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-cyan-600 text-white text-[11px] font-black">2</span>
                <span>Collez ou saisissez votre emploi du temps ci-dessous</span>
              </div>

              {/* Example Panel */}
              <div className={`p-4 rounded-2xl ${activeFormatDef.bgColor} border ${activeFormatDef.borderColor} space-y-3`}>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <span className={`p-1.5 rounded-lg ${activeFormatDef.bgColor} ${activeFormatDef.color}`}>
                      <BookOpen className="w-3.5 h-3.5" />
                    </span>
                    <span>Exemple de format {activeFormatDef.label}</span>
                  </div>
                  <Badge variant="cyan" size="sm" className="text-[10px]">
                    Copiez et adaptez ce modèle
                  </Badge>
                </div>

                <pre className="p-3.5 rounded-xl bg-black/40 border border-slate-800/80 text-cyan-300 font-mono text-[11px] sm:text-xs leading-relaxed overflow-x-auto whitespace-pre-wrap selection:bg-indigo-500/30">
                  {activeFormatDef.example}
                </pre>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(activeFormatDef.example);
                  }}
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  <Copy className="w-3 h-3" />
                  <span>Copier l'exemple</span>
                </button>
              </div>

              {/* Text Input Area */}
              <div className="space-y-3">
                <div className="relative">
                  <textarea
                    value={scheduleText}
                    onChange={(e) => setScheduleText(e.target.value)}
                    placeholder={activeFormatDef.placeholder}
                    rows={12}
                    className="w-full bg-slate-950 border border-slate-800 hover:border-slate-700 focus:border-indigo-500/60 rounded-2xl p-4 sm:p-5 text-xs sm:text-sm text-slate-100 font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500/30 leading-relaxed transition-colors placeholder:text-slate-600"
                  />

                  {/* Character count */}
                  <div className="absolute bottom-3 right-3 text-[10px] text-slate-600 font-mono">
                    {scheduleText.length} caractères
                  </div>
                </div>

                {/* Tips */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 space-y-1.5">
                  <span className="font-bold text-slate-300 flex items-center gap-1.5">
                    <ClipboardPaste className="w-3.5 h-3.5 text-indigo-400" />
                    Conseils d'importation :
                  </span>
                  <ul className="space-y-1 pl-5">
                    <li className="list-disc">Commencez chaque jour par son nom en majuscules suivi de <code className="text-cyan-400 bg-slate-800 px-1 py-0.5 rounded">:</code></li>
                    <li className="list-disc">Indiquez les horaires au format <code className="text-cyan-400 bg-slate-800 px-1 py-0.5 rounded">HH:MM - HH:MM</code></li>
                    <li className="list-disc">Utilisez <code className="text-cyan-400 bg-slate-800 px-1 py-0.5 rounded">|</code> pour séparer matière, salle et professeur</li>
                    <li className="list-disc">Collez uniquement vos cours hebdomadaires réguliers (pas les examens)</li>
                  </ul>
                </div>
              </div>

              {/* Analyze Button */}
              <div className="flex items-center justify-between flex-wrap gap-3 pt-2">
                <button
                  onClick={() => {
                    setSelectedFormat(null);
                    setScheduleText('');
                  }}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Changer de format</span>
                </button>

                <Button
                  variant="glow"
                  size="lg"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                  onClick={handleAnalyzeText}
                  disabled={!scheduleText.trim()}
                  className={`px-6 sm:px-10 py-3.5 text-xs sm:text-sm font-bold shadow-xl shadow-indigo-500/30 cursor-pointer ${
                    !scheduleText.trim() ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  Analyser mon Emploi du Temps
                </Button>
              </div>
            </div>
          )}

        </div>
      )}

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* STAGE 2: LIVE AI ANALYSIS ANIMATION                                */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      {isAnalyzing && (
        <Card className="p-8 sm:p-12 border-indigo-500/40 bg-slate-950/90 shadow-2xl relative overflow-hidden space-y-6 sm:space-y-8">
          
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1px] mx-auto shadow-xl shadow-indigo-500/25 animate-pulse">
              <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center">
                <Brain className="w-8 h-8 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Analyse Structurée de votre Emploi du Temps...
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Extraction des jours, horaires précis, matières et calcul des pondérations cognitives.
            </p>
          </div>

          {/* Stepper Progress Bar */}
          <div className="space-y-4 max-w-xl mx-auto">
            <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-800">
              <div 
                className="h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 transition-all duration-500 ease-out rounded-full"
                style={{ width: `${Math.min(100, (analysisStep + 1) * 25)}%` }}
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
              {stepsList.map((step, idx) => (
                <div 
                  key={idx}
                  className={`p-2 rounded-xl border transition-all ${
                    idx <= analysisStep 
                      ? 'bg-indigo-950/40 border-indigo-500/40 text-white' 
                      : 'bg-slate-900/30 border-slate-800/60 text-slate-500'
                  }`}
                >
                  <span className="block text-[10px] font-mono font-bold text-cyan-400">Étape {idx + 1}</span>
                  <span className="text-[11px] font-semibold truncate block mt-0.5">{step.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal Console Stream */}
          <div className="max-w-xl mx-auto p-3.5 rounded-xl bg-black/60 border border-slate-800 font-mono text-xs text-slate-300 space-y-1">
            {analysisLogs.map((log, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-cyan-400">›</span>
                <span className="truncate">{log}</span>
              </div>
            ))}
          </div>

        </Card>
      )}

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* STAGE 3: INTERACTIVE REVIEW & VERIFICATION                         */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      {!isAnalyzing && extractedData && (
        <div className="space-y-6 sm:space-y-8 animate-in slide-in-from-bottom-4 duration-300">
          
          {/* Summary Strip */}
          <div className="p-4 sm:p-6 rounded-3xl glass-panel border border-indigo-500/30 bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-950 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            
            <div className="space-y-1 min-w-0">
              <div className="flex items-center gap-2">
                <Badge variant="emerald" dot size="sm">Extraction Fidèle Validée</Badge>
                <span className="text-xs text-slate-400 font-mono truncate">{extractedData.fileName}</span>
              </div>
              <h2 className="text-lg sm:text-2xl font-black text-white tracking-tight truncate">
                {extractedData.academicTrack}
              </h2>
              <p className="text-xs text-slate-300">
                {extractedData.slots.length} créneaux fixes • {extractedData.subjects.length} matières • {extractedData.totalWeeklyClassHours}h de cours/semaine
              </p>
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto shrink-0">
              <Button
                variant="secondary"
                size="sm"
                leftIcon={<RefreshCw className="w-3.5 h-3.5 text-cyan-400" />}
                onClick={() => {
                  setExtractedData(null);
                  setScheduleText('');
                }}
                className="cursor-pointer text-xs flex-1 md:flex-initial py-2.5"
              >
                Nouvel emploi du temps
              </Button>

              <Button
                variant="glow"
                size="sm"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                onClick={handleFinalizeAndGenerate}
                className="cursor-pointer text-xs font-bold flex-1 md:flex-initial py-2.5 px-5 shadow-xl shadow-indigo-500/30"
              >
                Construire mon Planning Personnel
              </Button>
            </div>

          </div>

          {/* HARMONIZATION & ZERO-CONFLICT STATUS BANNER */}
          {detectedConflicts.length > 0 ? (
            <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/40 text-indigo-200 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>
                  <strong>Ajustement intelligent disponible :</strong> {detectedConflicts.length} créneau(x) se chevauchaient légèrement dans le texte source. KONAN a harmonisé la grille pour un affichage optimal.
                </span>
              </div>
              <button
                onClick={() => {
                  if (extractedData) {
                    const smoothedSlots = harmonizeAndDeduplicateSlots(extractedData.slots);
                    setExtractedData(recalculateSummary({ ...extractedData, slots: smoothedSlots }));
                  }
                }}
                className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shrink-0 cursor-pointer shadow-md hover:shadow-indigo-500/25 transition-all"
              >
                Lisser les créneaux
              </button>
            </div>
          ) : (
            <div className="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-xs flex items-center justify-between gap-2 shadow-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Grille Parfaite :</strong> Zéro conflit d'horaire détecté. Tous les cours sont parfaitement synchronisés.</span>
              </div>
              <Badge variant="emerald" size="sm" className="hidden sm:inline-flex">100% Fluide</Badge>
            </div>
          )}

          {/* KPI Mini Tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
            <Card className="p-3.5 bg-slate-900/60 border-slate-800 flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-xs text-slate-400 truncate">Matières Réelles</p>
                <p className="text-sm sm:text-lg font-bold text-white font-mono">{extractedData.subjects.length}</p>
              </div>
            </Card>

            <Card className="p-3.5 bg-slate-900/60 border-slate-800 flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-xs text-slate-400 truncate">Volume Cours</p>
                <p className="text-sm sm:text-lg font-bold text-cyan-400 font-mono">{extractedData.totalWeeklyClassHours}h / sem</p>
              </div>
            </Card>

            <Card className="p-3.5 bg-slate-900/60 border-slate-800 flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-xs text-slate-400 truncate">Étude Conseillée</p>
                <p className="text-sm sm:text-lg font-bold text-emerald-400 font-mono">~{extractedData.recommendedStudyHours}h / sem</p>
              </div>
            </Card>

            <Card className="p-3.5 bg-slate-900/60 border-slate-800 flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-xs text-slate-400 truncate">Précision Détection</p>
                <p className="text-sm sm:text-lg font-bold text-amber-300 font-mono">{extractedData.detectedConfidence}%</p>
              </div>
            </Card>
          </div>

          {/* TABS NAVIGATION */}
          <div className="flex items-center gap-2 border-b border-slate-800 pb-2 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('source_truth')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap min-h-[38px] ${
                activeTab === 'source_truth'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 ring-1 ring-indigo-400/50'
                  : 'bg-slate-900/70 text-slate-400 hover:text-white'
              }`}
            >
              <Lock className="w-3.5 h-3.5 text-cyan-400" />
              <span>1. Source de Vérité ({extractedData.slots.length} cours)</span>
            </button>

            <button
              onClick={() => setActiveTab('subjects')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap min-h-[38px] ${
                activeTab === 'subjects'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900/70 text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>2. Matières & Coefficients ({extractedData.subjects.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('slots')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap min-h-[38px] ${
                activeTab === 'slots'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900/70 text-slate-400 hover:text-white'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>3. Grille Horaires ({extractedData.slots.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('strategy')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap min-h-[38px] ${
                activeTab === 'strategy'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900/70 text-slate-400 hover:text-white'
              }`}
            >
              <Brain className="w-3.5 h-3.5 text-cyan-400" />
              <span>4. Stratégie & Chronotype</span>
            </button>

            <button
              onClick={() => setActiveTab('raw_inspector')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap min-h-[38px] ${
                activeTab === 'raw_inspector'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900/70 text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>5. Texte Source</span>
            </button>
          </div>

          {/* TAB CONTENT 0: SOURCE DE VERITE */}
          {activeTab === 'source_truth' && (
            <div className="space-y-5 animate-in fade-in duration-200">
              
              {/* Info Banner */}
              <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 text-xs text-slate-300 space-y-1.5 shadow-lg">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <span className="p-1.5 rounded-xl bg-indigo-500/20 text-cyan-400">
                      <Lock className="w-4 h-4" />
                    </span>
                    <span>Source de Vérité des Cours Extraits</span>
                  </div>
                  <Badge variant="emerald" dot size="sm">Sanctuarisé : Zéro cours inventé ou déplacé</Badge>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Voici l'organisation fidèle et exacte de vos cours ci-dessous. Cette extraction constitue votre socle officiel :
                  votre planning d'étude personnalisé est organisé <strong className="text-white">strictement autour de ces créneaux</strong>, sans modifier ni supprimer aucun horaire.
                </p>
              </div>

              {/* Code Panel / Structured Text */}
              <Card className="p-4 sm:p-6 bg-slate-950/80 border-slate-800/80 space-y-4 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white">Format Structuré Canonique</span>
                    <span className="text-[11px] text-slate-500 font-mono">({extractedData.slots.length} cours répertoriés)</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        if (!isEditingTruth) {
                          setTruthEditText(formatStructuredScheduleTruth(extractedData.slots));
                          setIsEditingTruth(true);
                        } else {
                          setIsEditingTruth(false);
                        }
                      }}
                      className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Edit3 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{isEditingTruth ? 'Annuler' : 'Modifier le texte'}</span>
                    </button>

                    <button
                      onClick={() => {
                        const str = formatStructuredScheduleTruth(extractedData.slots);
                        navigator.clipboard.writeText(str);
                        setCopiedTruthText(true);
                        setTimeout(() => setCopiedTruthText(false), 2000);
                      }}
                      className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      {copiedTruthText ? (
                        <>
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copié !</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-indigo-400" />
                          <span>Copier la Source</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {isEditingTruth ? (
                  <div className="space-y-3">
                    <textarea
                      value={truthEditText}
                      onChange={(e) => setTruthEditText(e.target.value)}
                      rows={8}
                      className="w-full p-4 rounded-xl bg-slate-900/90 border border-indigo-500/50 text-white font-mono text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 leading-relaxed"
                      placeholder="Lundi : 08:00–10:00 Mathématiques ; 10:15–12:00 Physique&#10;Mardi : 08:00–10:00 Français ; 14:00–16:00 Informatique"
                    />
                    <div className="flex justify-end gap-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => setIsEditingTruth(false)}
                      >
                        Annuler
                      </Button>
                      <Button
                        size="sm"
                        variant="glow"
                        onClick={() => {
                          const parsed = parseStructuredScheduleTruth(truthEditText, extractedData.fileName);
                          if (parsed.slots.length > 0) {
                            setExtractedData(recalculateSummary(parsed));
                            setIsEditingTruth(false);
                          } else {
                            alert("Format non reconnu. Assurez-vous d'avoir au moins un horaire (ex: 08:00–10:00 Mathématiques).");
                          }
                        }}
                      >
                        Appliquer & Recalculer
                      </Button>
                    </div>
                  </div>
                ) : (
                  <pre className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-cyan-300 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto whitespace-pre-wrap selection:bg-indigo-500/30">
                    {formatStructuredScheduleTruth(extractedData.slots) || '(Aucun cours extrait)'}
                  </pre>
                )}
              </Card>

              {/* Visual Breakdown by Day */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-indigo-400" />
                  <span>Détail quotidien des cours fixés (Chronologique & Immuable)</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {DAYS_OF_WEEK.map((day) => {
                    const daySlots = extractedData.slots
                      .filter(s => s.dayOfWeek === day.id)
                      .sort((a, b) => parseTimeToMinutes(a.startTime) - parseTimeToMinutes(b.startTime));

                    if (daySlots.length === 0) return null;

                    return (
                      <Card key={day.id} className="p-4 bg-slate-900/70 border-slate-800 space-y-2.5">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <span className="text-xs font-bold text-white flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-cyan-400" />
                            {day.label}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            {daySlots.length} cours
                          </span>
                        </div>

                        <div className="space-y-2">
                          {daySlots.map((slot) => {
                            return (
                              <div
                                key={slot.id}
                                className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between gap-2"
                              >
                                <div className="min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs font-bold text-white truncate">
                                      {slot.subjectName}
                                    </span>
                                    <Badge size="sm" variant="primary">
                                      {COURSE_TYPE_LABELS[slot.type]?.badge || 'COURS'}
                                    </Badge>
                                  </div>
                                  <div className="text-[11px] text-slate-400 flex items-center gap-2 mt-0.5 font-mono">
                                    <span>{slot.room || 'Salle principale'}</span>
                                    {slot.professor && <span>• {slot.professor}</span>}
                                  </div>
                                </div>

                                <div className="text-right shrink-0">
                                  <span className="text-xs font-bold text-cyan-300 font-mono">
                                    {slot.startTime}–{slot.endTime}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 flex justify-end">
                <Button
                  variant="glow"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  onClick={handleFinalizeAndGenerate}
                  className="cursor-pointer font-bold px-6 shadow-xl shadow-indigo-500/30"
                >
                  Valider mon Emploi du Temps & Organiser mes Révisions
                </Button>
              </div>

            </div>
          )}

          {/* TAB CONTENT 1: SUBJECTS REVIEW */}
          {activeTab === 'subjects' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-400">
                  Matières détectées depuis votre emploi du temps. Vous pouvez ajuster les coefficients pour calibrer vos priorités de révision.
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  leftIcon={<Plus className="w-3.5 h-3.5" />}
                  onClick={() => setIsAddSubjectOpen(true)}
                  className="text-xs"
                >
                  Ajouter une matière
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {extractedData.subjects.map((sub) => (
                  <Card 
                    key={sub.id} 
                    className="p-4 bg-slate-900/70 border-slate-800 space-y-3 relative"
                    style={{ borderTopColor: sub.color, borderTopWidth: '4px' }}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        {sub.code && (
                          <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase">
                            {sub.code}
                          </span>
                        )}
                        <h4 className="text-xs sm:text-sm font-bold text-white leading-tight truncate">
                          {sub.name}
                        </h4>
                      </div>
                      <button
                        onClick={() => handleDeleteSubject(sub.id)}
                        className="p-1 text-slate-500 hover:text-rose-400 rounded transition-colors cursor-pointer"
                        title="Supprimer cette matière"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Coefficient & Difficulty Sliders */}
                    <div className="space-y-2 pt-1 border-t border-slate-800/80 text-xs">
                      <div>
                        <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                          <span>Coefficient :</span>
                          <span className="font-bold text-cyan-400 font-mono">Coeff {sub.coefficient}</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="16"
                          value={sub.coefficient}
                          onChange={(e) => handleUpdateSubject(sub.id, { coefficient: Number(e.target.value) })}
                          className="w-full accent-cyan-500 cursor-pointer"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                          <span>Difficulté :</span>
                          <span className="font-bold text-amber-400 font-mono">{sub.difficulty} / 5</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="5"
                          value={sub.difficulty}
                          onChange={(e) => handleUpdateSubject(sub.id, { difficulty: Number(e.target.value) as 1|2|3|4|5 })}
                          className="w-full accent-amber-500 cursor-pointer"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-[11px] text-slate-400 pt-1 border-t border-slate-800/60">
                      <span>Note cible visée :</span>
                      <span className="font-mono font-bold text-emerald-400">{sub.targetGrade}/20</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* TAB CONTENT 2: SLOTS REVIEW & DIRECT EDIT */}
          {activeTab === 'slots' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-400">
                  Créneaux réels extraits de votre emploi du temps. Vous pouvez modifier les horaires, matières ou salles directement.
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  leftIcon={<Plus className="w-3.5 h-3.5" />}
                  onClick={() => setIsAddSlotOpen(true)}
                  className="text-xs"
                >
                  Ajouter un créneau
                </Button>
              </div>

              <div className="divide-y divide-slate-800/80 bg-slate-900/60 rounded-2xl border border-slate-800 overflow-hidden">
                {extractedData.slots
                  .sort((a, b) => a.dayOfWeek - b.dayOfWeek || a.startTime.localeCompare(b.startTime))
                  .map((slot) => {
                    const day = DAYS_OF_WEEK.find(d => d.id === slot.dayOfWeek) || DAYS_OF_WEEK[0];
                    const typeInfo = COURSE_TYPE_LABELS[slot.type] || { badge: 'CM' };
                    const matchingSub = extractedData.subjects.find(s => s.id === slot.subjectId);

                    return (
                      <div 
                        key={slot.id}
                        className="p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs hover:bg-slate-850/60 transition-colors"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <Badge variant="primary" size="sm" className="font-bold shrink-0 min-w-[42px] text-center">
                            {day.short}
                          </Badge>

                          <div className="min-w-0 space-y-0.5">
                            <div className="flex items-center gap-2">
                              <span className="font-mono font-bold text-cyan-400">{slot.startTime} - {slot.endTime}</span>
                              <Badge variant="slate" size="sm" className="text-[10px] px-1.5 py-0">{typeInfo.badge}</Badge>
                            </div>
                            <p className="font-bold text-white truncate" style={{ color: matchingSub?.color }}>
                              {slot.subjectName}
                            </p>
                            {(slot.room || slot.professor) && (
                              <p className="text-[11px] text-slate-400 truncate">
                                {slot.room ? `Salle: ${slot.room}` : ''} {slot.professor ? `• Prof: ${slot.professor}` : ''}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                          <button
                            onClick={() => setEditingSlot(slot)}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-indigo-600/50 text-slate-300 hover:text-white transition-colors cursor-pointer"
                          >
                            <Edit3 className="w-3 h-3" />
                            <span>Modifier</span>
                          </button>

                          <button
                            onClick={() => handleDeleteSlot(slot.id)}
                            className="p-1.5 text-slate-400 hover:text-rose-400 rounded-lg hover:bg-rose-500/10 transition-colors cursor-pointer"
                            title="Supprimer ce créneau"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

          {/* TAB CONTENT 3: AI DIAGNOSTIC & STRATEGY */}
          {activeTab === 'strategy' && report && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              
              <Card className="p-5 bg-slate-900/70 border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <Brain className="w-4 h-4 text-cyan-400" />
                    Bilan de Rythme & Équilibre
                  </h3>
                  <Badge variant="cyan" size="sm" dot>
                    {report.pacingTechniqueLabel}
                  </Badge>
                </div>

                <div className="p-3.5 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-medium">Indice d'Équilibre Global :</span>
                    <div className="flex items-center gap-2">
                      <span className={`font-bold font-mono text-sm ${
                        report.overallWorkloadScore >= 80 ? 'text-emerald-400' :
                        report.overallWorkloadScore >= 65 ? 'text-cyan-400' :
                        report.overallWorkloadScore >= 55 ? 'text-amber-400' : 'text-rose-400'
                      }`}>
                        {report.overallWorkloadScore} / 100
                      </span>
                      <Badge 
                        variant={
                          report.overallWorkloadScore >= 80 ? 'emerald' :
                          report.overallWorkloadScore >= 65 ? 'cyan' :
                          report.overallWorkloadScore >= 55 ? 'amber' : 'rose'
                        } 
                        size="sm"
                      >
                        {report.workloadCategory}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1 border-t border-indigo-500/20">
                    <span className="text-slate-300 font-medium">Risque de Burnout :</span>
                    <Badge variant={report.burnoutRiskVariant} size="sm" dot>
                      {report.burnoutRiskIndex}
                    </Badge>
                  </div>

                  {report.burnoutDetails && (
                    <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                      {report.burnoutDetails}
                    </p>
                  )}
                </div>

                <div className="space-y-2 text-xs">
                  <span className="font-bold text-white block">
                    Recommandations Adaptées ({report.pacingTechniqueLabel}) :
                  </span>
                  {report.recommendations.map((rec, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-slate-950/50 border border-slate-800/80 text-slate-300 leading-relaxed">
                      {rec}
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-5 bg-slate-900/70 border-slate-800 space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-indigo-400" />
                  Votre Rythme & Méthode d'Étude
                </h3>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 uppercase mb-1">
                      Votre pic naturel de concentration (Chronotype) :
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'morning', label: '🌅 Matin', desc: '07h - 12h' },
                        { id: 'afternoon', label: '☀️ Après-midi', desc: '14h - 18h' },
                        { id: 'evening', label: '🌙 Soirée', desc: '18h - 22h' },
                        { id: 'night', label: '🦉 Nuit', desc: '21h - 01h' },
                      ].map(c => (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setSelectedChronotype(c.id as Chronotype)}
                          className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                            selectedChronotype === c.id
                              ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30'
                              : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          <span className="font-bold block">{c.label}</span>
                          <span className="text-[10px] text-slate-400 block mt-0.5">{c.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <label className="block text-xs font-bold text-slate-200 uppercase tracking-wide">
                        Méthodes d'espacement & Stratégies d'étude :
                      </label>
                      <span className="text-[11px] text-cyan-400 font-medium">
                        Cliquez sur une méthode pour l'activer et lire son explication
                      </span>
                    </div>

                    {/* Contextual AI Recommendation Banner */}
                    {pacingRecommendation && (
                      <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-indigo-950/70 via-slate-900 to-indigo-950/40 border border-indigo-500/40 flex items-start gap-3 shadow-md">
                        <div className="p-2 rounded-xl bg-indigo-500/20 text-cyan-300 shrink-0 mt-0.5">
                          <Sparkles className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div className="space-y-1 text-xs">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-bold text-white uppercase tracking-wide text-[11px]">
                              Recommandation adaptée à votre emploi du temps :
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-indigo-500/20 border border-indigo-500/40 text-cyan-300">
                              {pacingRecommendation.contextTag}
                            </span>
                          </div>
                          <p className="text-slate-300 leading-relaxed text-xs">
                            {pacingRecommendation.rationale}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* 5 Interactive Strategy Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                      {PACING_STRATEGIES.map((strategy) => {
                        const isSelected = selectedPacing === strategy.id;
                        const isPrimaryRec = pacingRecommendation?.primaryId === strategy.id;
                        const isRecommended = pacingRecommendation?.recommendedIds.includes(strategy.id);
                        const isNotRecommended = pacingRecommendation?.notRecommendedIds?.includes(strategy.id);
                        const isProMethod = strategy.planRequired === 'pro';
                        const isLocked = isProMethod && planTier === 'free';

                        return (
                          <button
                            key={strategy.id}
                            type="button"
                            onClick={() => {
                              if (isLocked) {
                                setProModalInfo({
                                  title: `${strategy.title}`,
                                  desc: `La méthode "${strategy.title}" (${strategy.tagline}) fait partie intégrante du modèle KONAN PRO. Sur votre version Gratuite (Free), vous disposez d'un accès illimité aux techniques Pomodoro, Active Recall & Répétition Espacée et la Règle des 2 Minutes.`
                                });
                                return;
                              }
                              setSelectedPacing(strategy.id);
                            }}
                            className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between gap-2.5 ${
                              isSelected
                                ? 'bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-950 border-cyan-400/80 shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-400/50'
                                : isLocked
                                  ? 'bg-slate-950/40 border-slate-800/80 text-slate-400 hover:border-amber-500/40 hover:bg-slate-900/40'
                                  : isPrimaryRec
                                    ? 'bg-slate-950/80 border-amber-500/50 text-slate-300 hover:border-amber-400 hover:bg-slate-900/60'
                                    : isRecommended
                                      ? 'bg-slate-950/80 border-indigo-500/40 text-slate-300 hover:border-indigo-400 hover:bg-slate-900/60'
                                      : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900/50'
                            }`}
                          >
                            <div className="space-y-1.5">
                              <div className="flex items-center justify-between gap-2">
                                <span className={`text-xs font-black tracking-wide ${isSelected ? 'text-cyan-300' : 'text-white'}`}>
                                  {strategy.number}. {strategy.title}
                                </span>
                                {isLocked ? (
                                  <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 shrink-0">
                                    ⭐ PRO
                                  </span>
                                ) : isSelected ? (
                                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                                ) : isPrimaryRec ? (
                                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 shrink-0 flex items-center gap-0.5">
                                    <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" /> Idéal
                                  </span>
                                ) : null}
                              </div>

                              {isLocked ? (
                                <div className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-300/90">
                                  <span>🔒 Inclus dans le modèle KONAN PRO</span>
                                </div>
                              ) : isPrimaryRec ? (
                                <div className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-300">
                                  <Star className="w-3 h-3 fill-amber-400 text-amber-400 shrink-0" />
                                  <span>Recommandé pour votre emploi du temps</span>
                                </div>
                              ) : isRecommended ? (
                                <div className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400">
                                  <span>✓ Alternative conseillée</span>
                                </div>
                              ) : isNotRecommended ? (
                                <div className="inline-flex items-center gap-1 text-[10px] text-rose-400/80">
                                  <span>⚠️ Déconseillé (journées trop denses)</span>
                                </div>
                              ) : null}

                              <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                                <span className="font-semibold text-slate-400">En bref : </span>
                                {strategy.shortSummary}
                              </p>
                            </div>

                            <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-800/80">
                              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-slate-900 border border-slate-700 text-cyan-300">
                                {strategy.badge}
                              </span>
                              <span className={`text-[10px] flex items-center gap-1 font-medium ${
                                isLocked 
                                  ? 'text-amber-400 font-semibold' 
                                  : isSelected 
                                  ? 'text-cyan-400 font-bold' 
                                  : 'text-slate-400 hover:text-slate-200'
                              }`}>
                                {isLocked ? 'Débloquer PRO ↗' : isSelected ? 'Sélectionné ✓' : 'Choisir →'}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Dedicated Interactive Explanation Box for the selected/clicked method */}
                    {(() => {
                      const currentStrategy = getPacingStrategy(selectedPacing);
                      const isIdeaLabel = currentStrategy.number <= 2;
                      return (
                        <div className="mt-3 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900/95 via-indigo-950/30 to-slate-950 border border-indigo-500/40 shadow-xl space-y-3.5 animate-in fade-in duration-200">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 font-black text-sm">
                                {currentStrategy.number}
                              </div>
                              <div>
                                <h4 className="text-sm font-black text-white flex items-center gap-2">
                                  <span>{currentStrategy.title}</span>
                                  <span className="text-[10px] text-cyan-400 font-mono font-normal">({currentStrategy.badge})</span>
                                </h4>
                                <p className="text-[11px] text-indigo-300/80">
                                  {currentStrategy.tagline}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-indigo-500/20 border border-indigo-500/40 text-indigo-200">
                                Blocs de {currentStrategy.focusBlockDuration} min • Pause {currentStrategy.breakBlockDuration} min
                              </span>
                            </div>
                          </div>

                          <div className="space-y-2 text-xs">
                            <div className="flex items-start gap-2 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/70">
                              <span className="font-bold text-cyan-400 uppercase tracking-wide shrink-0 text-[11px]">
                                En bref :
                              </span>
                              <span className="font-semibold text-white">
                                {currentStrategy.shortSummary}
                              </span>
                            </div>

                            <div className="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-200 space-y-1.5 leading-relaxed">
                              <span className="font-bold text-indigo-300 block text-[11px] uppercase tracking-wider">
                                {isIdeaLabel ? "L'idée :" : "L'explication :"}
                              </span>
                              <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed">
                                {currentStrategy.explanation}
                              </p>
                            </div>
                          </div>

                          <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/20 flex items-center gap-2.5 text-xs text-indigo-200">
                            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>
                              <strong>Application directe :</strong> Lors de l'organisation de votre planning personnel, chaque séance sera découpée en blocs adaptés de <strong>{currentStrategy.focusBlockDuration} minutes</strong> avec des objectifs clairs et stimulants selon cette méthode.
                            </span>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                </div>

              </Card>

            </div>
          )}

          {/* TAB CONTENT 4: RAW TEXT INSPECTOR */}
          {activeTab === 'raw_inspector' && (
            <Card className="p-5 bg-slate-900/70 border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <FileText className="w-4 h-4 text-cyan-400" />
                    Texte Source Saisi
                  </h3>
                  <p className="text-xs text-slate-400">
                    Voici l'intégralité du texte que vous avez saisi pour l'analyse.
                  </p>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  leftIcon={copiedRawText ? <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  onClick={handleCopyRawText}
                  className="text-xs"
                >
                  {copiedRawText ? 'Copié !' : 'Copier le texte'}
                </Button>
              </div>

              <div className="p-4 rounded-xl bg-black/80 border border-slate-800 font-mono text-xs text-slate-300 max-h-96 overflow-y-auto whitespace-pre-wrap leading-relaxed">
                {extractedData.rawText || 'Aucun texte source disponible.'}
              </div>
            </Card>
          )}

          {/* BOTTOM GENERATION TRIGGER */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-indigo-950/80 via-slate-900 to-slate-950 border border-indigo-500/40 text-center space-y-4 shadow-2xl">
            <div className="max-w-xl mx-auto space-y-1.5">
              <h3 className="text-lg sm:text-2xl font-black text-white">
                Prêt à générer votre planning d'étude personnalisé ?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Votre planning s'organisera harmonieusement en respectant vos cours, vos pauses bien méritées et votre rythme d'apprentissage.
              </p>
            </div>

            <Button
              variant="glow"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
              onClick={handleFinalizeAndGenerate}
              className="px-8 sm:px-12 py-4 text-sm sm:text-base font-bold shadow-2xl shadow-indigo-500/40 cursor-pointer w-full sm:w-auto"
            >
              Générer mon Planning d'Étude Personnalisé
            </Button>
          </div>

        </div>
      )}

      {/* MODAL: EDIT SLOT */}
      {editingSlot && (
        <Modal
          isOpen={true}
          onClose={() => setEditingSlot(null)}
          title="Modifier le créneau"
          description="Ajustez l'horaire, le jour ou la salle de ce cours."
          maxWidth="md"
        >
          <form onSubmit={handleSaveEditSlot} className="space-y-4">
            <Select
              label="Matière"
              value={editingSlot.subjectId}
              onChange={(e) => setEditingSlot({ ...editingSlot, subjectId: e.target.value })}
              options={(extractedData?.subjects || []).map(s => ({ value: s.id, label: s.name }))}
            />

            <div className="grid grid-cols-2 gap-3">
              <Select
                label="Jour"
                value={editingSlot.dayOfWeek}
                onChange={(e) => setEditingSlot({ ...editingSlot, dayOfWeek: Number(e.target.value) as DayOfWeek })}
                options={DAYS_OF_WEEK.map(d => ({ value: d.id, label: d.label }))}
              />
              <Select
                label="Type de cours"
                value={editingSlot.type}
                onChange={(e) => setEditingSlot({ ...editingSlot, type: e.target.value as CourseType })}
                options={Object.entries(COURSE_TYPE_LABELS).map(([k, v]) => ({ value: k, label: v.label }))}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Input 
                label="Début" 
                type="time" 
                value={editingSlot.startTime} 
                onChange={(e) => setEditingSlot({ ...editingSlot, startTime: e.target.value })} 
                required 
              />
              <Input 
                label="Fin" 
                type="time" 
                value={editingSlot.endTime} 
                onChange={(e) => setEditingSlot({ ...editingSlot, endTime: e.target.value })} 
                required 
              />
            </div>

            <Input 
              label="Salle" 
              value={editingSlot.room || ''} 
              onChange={(e) => setEditingSlot({ ...editingSlot, room: e.target.value })} 
            />

            <Input 
              label="Enseignant / Professeur" 
              value={editingSlot.professor || ''} 
              onChange={(e) => setEditingSlot({ ...editingSlot, professor: e.target.value })} 
            />

            <div className="flex justify-end gap-2 pt-2">
              <Button type="button" variant="ghost" size="sm" onClick={() => setEditingSlot(null)}>Annuler</Button>
              <Button type="submit" variant="primary" size="sm">Enregistrer</Button>
            </div>
          </form>
        </Modal>
      )}

      {/* MODAL: ADD SUBJECT */}
      <Modal
        isOpen={isAddSubjectOpen}
        onClose={() => setIsAddSubjectOpen(false)}
        title="Ajouter une Matière"
        description="Ajoutez une matière manuellement à l'analyse."
        maxWidth="md"
      >
        <form onSubmit={handleAddSubject} className="space-y-4">
          <Input
            label="Nom de la matière"
            placeholder="ex. Électronique Analogique"
            value={newSubName}
            onChange={(e) => setNewSubName(e.target.value)}
            required
          />

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Coefficient : <span className="text-cyan-400 font-bold">{newSubCoeff}</span>
              </label>
              <input
                type="range"
                min="1"
                max="16"
                value={newSubCoeff}
                onChange={(e) => setNewSubCoeff(Number(e.target.value))}
                className="w-full accent-cyan-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Difficulté : <span className="text-amber-400 font-bold">{newSubDiff}/5</span>
              </label>
              <input
                type="range"
                min="1"
                max="5"
                value={newSubDiff}
                onChange={(e) => setNewSubDiff(Number(e.target.value) as 1|2|3|4|5)}
                className="w-full accent-amber-500"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="ghost" size="sm" onClick={() => setIsAddSubjectOpen(false)}>Annuler</Button>
            <Button type="submit" variant="primary" size="sm">Ajouter</Button>
          </div>
        </form>
      </Modal>

      {/* MODAL: ADD SLOT */}
      <Modal
        isOpen={isAddSlotOpen}
        onClose={() => setIsAddSlotOpen(false)}
        title="Ajouter un créneau fixe"
        description="Bloquez ce créneau dans votre grille de cours."
        maxWidth="md"
      >
        <form onSubmit={handleAddSlot} className="space-y-4">
          <Select
            label="Matière"
            value={slotSubId || extractedData?.subjects[0]?.id || ''}
            onChange={(e) => setSlotSubId(e.target.value)}
            options={(extractedData?.subjects || []).map(s => ({ value: s.id, label: s.name }))}
          />

          <div className="grid grid-cols-2 gap-3">
            <Select
              label="Jour"
              value={slotDay}
              onChange={(e) => setSlotDay(Number(e.target.value) as DayOfWeek)}
              options={DAYS_OF_WEEK.map(d => ({ value: d.id, label: d.label }))}
            />
            <Select
              label="Type de cours"
              value={slotType}
              onChange={(e) => setSlotType(e.target.value as CourseType)}
              options={Object.entries(COURSE_TYPE_LABELS).map(([k, v]) => ({ value: k, label: v.label }))}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Input label="Début" type="time" value={slotStart} onChange={(e) => setSlotStart(e.target.value)} required />
            <Input label="Fin" type="time" value={slotEnd} onChange={(e) => setSlotEnd(e.target.value)} required />
          </div>

          <Input label="Salle" value={slotRoom} onChange={(e) => setSlotRoom(e.target.value)} />
          <Input label="Professeur (optionnel)" value={slotProf} onChange={(e) => setSlotProf(e.target.value)} placeholder="ex: Pr. Martin" />

          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="ghost" size="sm" onClick={() => setIsAddSlotOpen(false)}>Annuler</Button>
            <Button type="submit" variant="primary" size="sm">Ajouter</Button>
          </div>
        </form>
      </Modal>

      {/* PRO FEATURE MODAL */}
      <ProFeatureModal
        isOpen={Boolean(proModalInfo)}
        onClose={() => setProModalInfo(null)}
        featureTitle={proModalInfo?.title}
        featureDescription={proModalInfo?.desc}
        onViewPricing={onViewPricing}
      />

    </div>
  );
};
