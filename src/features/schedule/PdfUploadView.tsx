import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  ArrowLeft, 
  FileText, 
  Camera, 
  ImageIcon, 
  UploadCloud, 
  RotateCcw, 
  Check, 
  AlertCircle, 
  Loader2, 
  GraduationCap, 
  School, 
  Cpu, 
  X,
  Copy,
  Calendar,
  Key,
  Sliders,
  Sparkles,
  Lock,
  ArrowRight,
  Plus,
  Minus,
  Crown
} from 'lucide-react';
import type { 
  Subject, 
  ClassSlot, 
  StudyPreferences, 
  StudySession,
  Chronotype,
  StudyPacing
} from '../../types';
import { Button } from '../../components/ui/Button';
import { 
  parseStructuredScheduleTruth, 
  harmonizeAndDeduplicateSlots, 
  parseTimetableDocument,
  formatExtractedScheduleToFormatText,
  loadDemoPdfTemplate,
  type ScheduleFormatType 
} from '../../services/pdfParserService';
import { 
  extraireEmploiDuTemps, 
  convertFileToBase64,
  hasGeminiApiKey,
  setCustomGeminiApiKey
} from '../../services/geminiExtractionService';
import { buildStateFromExtractedSchedule } from '../../services/aiAcademicAnalyzer';
import { 
  PACING_STRATEGIES, 
  isPacingAllowedForPlan 
} from '../../lib/pacingStrategies';


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
  onUpgradeToPro?: () => void;
}

const FORMAT_CONFIG: Record<ScheduleFormatType, { label: string; short: string; icon: React.ReactNode; placeholder: string; demoId: string }> = {
  lmd: {
    label: 'LMD (Université / Grandes Écoles)',
    short: 'LMD',
    icon: <GraduationCap className="w-4 h-4" />,
    demoId: 'pdf-esatic-entd2',
    placeholder: `JOUR: LUNDI\n- 07:30 - 10:00 : Algèbres 2 [1MTH3350] | Salle: Amphi ESATIC | Prof: Dr KOIVOGUI\n- 10:15 - 12:45 : Anglais [1LAN3350] | Salle: Salle 204 | Prof: M. YEO\n- 14:30 - 17:00 : Dév Applications 1 [1INF3350] | Salle: Lab Info 1 | Prof: M. KONE\n\nJOUR: MARDI\n- 07:30 - 10:00 : Finance [1MAN3350] | Salle: Amphi B | Prof: Dr KADJO`
  },
  tpcm: {
    label: 'BTS / Technique (CM · TD · TP)',
    short: 'BTS',
    icon: <Cpu className="w-4 h-4" />,
    demoId: 'pdf-cs-l3',
    placeholder: `JOUR: LUNDI\n- 08:00 - 10:00 : CM Électronique Analogique (Amphi 1)\n- 10:15 - 12:15 : TD Mathématiques Appliquées (Salle 302)\n- 14:00 - 17:00 : TP Informatique Industrielle (Labo Info 3)\n\nJOUR: MARDI\n- 08:00 - 10:00 : CM Physique des Matériaux (Amphi 2)\n- 10:15 - 12:15 : TD Systèmes Logiques (Salle 105)`
  },
  scolaire: {
    label: 'Scolaire (Lycée / Collège)',
    short: 'Scolaire',
    icon: <School className="w-4 h-4" />,
    demoId: 'pdf-lycee-john-wesley',
    placeholder: `JOUR: LUNDI\n- 08:00 - 10:00 : Mathématiques\n- 10:15 - 12:00 : Physique-Chimie\n- 14:00 - 16:00 : Français\n\nJOUR: MARDI\n- 08:00 - 10:00 : Histoire-Géographie\n- 10:15 - 12:00 : Anglais\n- 14:00 - 16:00 : SVT`
  }
};

interface EditableSubject {
  id: string;
  name: string;
  color: string;
  coefficient: number;
  difficulty: 1 | 2 | 3 | 4 | 5;
  targetGrade: number;
  enabled: boolean;
}

export const PdfUploadView: React.FC<PdfUploadViewProps> = ({
  studentName,
  planTier = 'free',
  onApplyExtractedSchedule,
  onCancel,
  onViewPricing,
  onUpgradeToPro,
}) => {
  // Navigation entre les 2 étapes fluides
  const [currentStep, setCurrentStep] = useState<'upload' | 'customize'>('upload');

  // Étape 1 : Importation & Texte
  const [selectedFormat, setSelectedFormat] = useState<ScheduleFormatType>('lmd');
  const [scheduleText, setScheduleText] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [apiKeyConfigured, setApiKeyConfigured] = useState<boolean>(() => hasGeminiApiKey());
  const [showKeyModal, setShowKeyModal] = useState<boolean>(false);
  const [tempApiKey, setTempApiKey] = useState<string>('');

  // Étape 2 : Personnalisation des Matières & Méthodes
  const [editableSubjects, setEditableSubjects] = useState<EditableSubject[]>([]);
  const [extractedSlots, setExtractedSlots] = useState<any[]>([]);
  const [selectedPacing, setSelectedPacing] = useState<StudyPacing>('pomodoro');
  const [selectedChronotype, setSelectedChronotype] = useState<Chronotype>('evening');
  const [proModalPacingNotice, setProModalPacingNotice] = useState<string | null>(null);

  // Hidden file inputs
  const pdfInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);

  // Vider tout cache au montage
  useEffect(() => {
    try {
      sessionStorage.removeItem('konan_scan_cache');
      sessionStorage.removeItem('konan_extracted_text');
      localStorage.removeItem('konan_scan_cache');
      localStorage.removeItem('konan_ocr_cache');
      localStorage.removeItem('konan_draft_schedule');
    } catch {
      // Ignorer
    }
  }, []);

  // Détection en direct du nombre de cours valides
  const detectedSlotsCount = useMemo(() => {
    if (!scheduleText.trim()) return 0;
    try {
      const parsed = parseStructuredScheduleTruth(scheduleText, 'preview.txt', selectedFormat);
      return parsed.slots.length;
    } catch {
      return 0;
    }
  }, [scheduleText, selectedFormat]);

  // Enregistrer une clé API Gemini personnalisée
  const handleSaveCustomKey = () => {
    if (tempApiKey.trim()) {
      setCustomGeminiApiKey(tempApiKey.trim());
      setApiKeyConfigured(true);
      setShowKeyModal(false);
      setError(null);
    }
  };

  // Réinitialiser tout à zéro
  const handleReset = () => {
    setSelectedFile(null);
    setScheduleText('');
    setError(null);
    setIsAnalyzing(false);
    setCurrentStep('upload');
    setEditableSubjects([]);
    setExtractedSlots([]);
    if (pdfInputRef.current) pdfInputRef.current.value = '';
    if (cameraInputRef.current) cameraInputRef.current.value = '';
    if (galleryInputRef.current) galleryInputRef.current.value = '';
  };

  // Traitement direct du fichier uploadé
  const handleFileSelected = async (file: File) => {
    setError(null);
    setSelectedFile(file);
    setIsAnalyzing(true);

    try {
      const mimeType = file.type || (file.name.toLowerCase().endsWith('.pdf') ? 'application/pdf' : 'image/jpeg');
      const base64 = await convertFileToBase64(file);

      // Appel IA direct natif
      const aiResult = await extraireEmploiDuTemps(base64, mimeType);

      if (aiResult && aiResult.trim().length > 10) {
        setScheduleText(aiResult.trim());
        setIsAnalyzing(false);
        return;
      }
    } catch (aiErr: any) {
      console.warn('[KONAN] Notice extraction IA directe :', aiErr?.message || aiErr);
      if (aiErr?.message?.includes('VITE_GEMINI_API_KEY') || !hasGeminiApiKey()) {
        setIsAnalyzing(false);
        setError("Clé API Gemini non configurée sur ce site (Vercel). Cliquez sur '🔑 Configurer la clé' pour l'activer instantanément ou ajoutez VITE_GEMINI_API_KEY dans le dashboard Vercel.");
        return;
      }
    }

    // Moteur de secours local si document PDF
    if (file.name.toLowerCase().endsWith('.pdf')) {
      try {
        const localExtracted = await parseTimetableDocument(file, undefined, selectedFormat);
        const localText = formatExtractedScheduleToFormatText(localExtracted, selectedFormat);
        if (localText && localText.trim().length > 10) {
          setScheduleText(localText.trim());
          setIsAnalyzing(false);
          return;
        }
      } catch (localErr) {
        console.warn('[KONAN] Notice extraction locale :', localErr);
      }
    }

    setIsAnalyzing(false);
    setError("L'IA n'a pas pu numériser ce document. Vous pouvez coller le texte de votre emploi du temps directement dans la zone ci-dessous.");
  };

  // Charger un exemple officiel certifié
  const handleLoadDemo = (templateId: string, format: ScheduleFormatType) => {
    setSelectedFormat(format);
    setSelectedFile(null);
    setError(null);
    try {
      const demo = loadDemoPdfTemplate(templateId);
      const formattedText = formatExtractedScheduleToFormatText(demo, format);
      setScheduleText(formattedText || FORMAT_CONFIG[format].placeholder);
    } catch {
      setScheduleText(FORMAT_CONFIG[format].placeholder);
    }
  };

  // Copier le texte extrait
  const handleCopy = () => {
    if (!scheduleText) return;
    navigator.clipboard.writeText(scheduleText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Passer à l'étape 2 de personnalisation
  const handleProceedToCustomization = () => {
    if (!scheduleText.trim()) {
      setError("Veuillez importer un fichier ou saisir votre emploi du temps.");
      return;
    }

    setError(null);

    try {
      const parsed = parseStructuredScheduleTruth(
        scheduleText,
        selectedFile?.name || 'Emploi_du_Temps.txt',
        selectedFormat
      );

      if (!parsed.slots || parsed.slots.length === 0) {
        setError("Aucun créneau de cours valide détecté. Vérifiez la syntaxe (ex: - 08:00 - 10:00 : Nom Matière).");
        return;
      }

      const harmonizedSlots = harmonizeAndDeduplicateSlots(parsed.slots);
      setExtractedSlots(harmonizedSlots);

      // Initialiser la liste éditable des matières
      const subjectsMap: EditableSubject[] = parsed.subjects.map(sub => ({
        id: sub.id,
        name: sub.name,
        color: sub.color || '#3b82f6',
        coefficient: sub.coefficient || 2,
        difficulty: sub.difficulty || 3,
        targetGrade: sub.targetGrade || 14,
        enabled: true,
      }));

      setEditableSubjects(subjectsMap);
      setCurrentStep('customize');
    } catch (err: any) {
      console.error("[KONAN] Erreur parsing emploi du temps :", err);
      setError("Erreur de lecture. Assurez-vous que chaque jour commence par 'JOUR: LUNDI' et chaque cours par '- HH:MM - HH:MM : Matière'.");
    }
  };

  // Modification du coefficient d'une matière
  const handleUpdateCoeff = (subjectId: string, delta: number) => {
    setEditableSubjects(prev => prev.map(s => {
      if (s.id !== subjectId) return s;
      const nextCoeff = Math.max(1, Math.min(10, s.coefficient + delta));
      return { ...s, coefficient: nextCoeff };
    }));
  };

  // Modification du nom d'une matière
  const handleUpdateName = (subjectId: string, newName: string) => {
    setEditableSubjects(prev => prev.map(s => {
      if (s.id !== subjectId) return s;
      return { ...s, name: newName };
    }));
  };

  // Modification de la note visée
  const handleUpdateTargetGrade = (subjectId: string, grade: number) => {
    setEditableSubjects(prev => prev.map(s => {
      if (s.id !== subjectId) return s;
      return { ...s, targetGrade: grade };
    }));
  };

  // Activer / Désactiver une matière
  const handleToggleSubject = (subjectId: string) => {
    setEditableSubjects(prev => prev.map(s => {
      if (s.id !== subjectId) return s;
      return { ...s, enabled: !s.enabled };
    }));
  };

  // Sélection d'une technique d'espacement avec contrôle de formule (Audio 1)
  const handleSelectPacingStrategy = (pacingId: StudyPacing) => {
    const isAllowed = isPacingAllowedForPlan(pacingId, planTier);
    if (!isAllowed) {
      // Bloqué pour le modèle Gratuit : avertissement clair et option d'upgrade
      const strat = PACING_STRATEGIES.find(p => p.id === pacingId);
      setProModalPacingNotice(`La méthode "${strat?.title || pacingId}" fait partie des techniques avancées réservées à KONAN PRO (1 200 F) et KONAN PLUS. Sur votre formule Gratuite, vous disposez d'un accès illimité à Pomodoro, Active Recall et la Règle des 2 Minutes.`);
      return;
    }
    setSelectedPacing(pacingId);
    setProModalPacingNotice(null);
  };

  // Génération finale du planning d'étude
  const handleFinalSubmit = () => {
    const activeSubjects = editableSubjects.filter(s => s.enabled);
    if (activeSubjects.length === 0) {
      setError("Veuillez conserver au moins une matière active pour générer votre planning.");
      return;
    }

    try {
      // Reconstituer l'objet ExtractedPdfSchedule avec les matières et coefficients modifiés
      const finalSchedule = {
        fileName: selectedFile?.name || 'Emploi_du_Temps.txt',
        fileSize: selectedFile?.size || 1024,
        academicTrack: selectedFormat === 'lmd' ? 'Licence Universitaire' : selectedFormat === 'tpcm' ? 'BTS / Technique' : 'Scolaire (Lycée)',
        detectedConfidence: 95,
        subjects: activeSubjects.map(s => ({
          id: s.id,
          name: s.name.trim() || 'Matière',
          color: s.color,
          coefficient: s.coefficient,
          difficulty: s.difficulty,
          targetGrade: s.targetGrade,
        })),
        slots: extractedSlots.filter(slot => {
          // Filtrer les créneaux pour ne garder que les matières actives
          return activeSubjects.some(sub => sub.id === slot.subjectId || sub.name.toLowerCase() === slot.subjectName.toLowerCase());
        }),
        totalWeeklyClassHours: Math.round(extractedSlots.length * 2),
        recommendedStudyHours: Math.round(activeSubjects.length * 3),
        summaryNote: `Planning généré avec méthode ${selectedPacing}`,
      };

      const finalPayload = buildStateFromExtractedSchedule(
        finalSchedule,
        studentName,
        selectedChronotype,
        selectedPacing
      );

      onApplyExtractedSchedule(finalPayload);
    } catch (err: any) {
      console.error("[KONAN] Erreur génération finale :", err);
      setError("Une erreur est survenue lors du calcul du planning d'étude. Veuillez vérifier vos données.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 py-4 px-3 sm:px-4">
      
      {/* Hidden File Inputs */}
      <input 
        type="file" 
        ref={pdfInputRef} 
        accept=".pdf,application/pdf" 
        onChange={(e) => e.target.files?.[0] && handleFileSelected(e.target.files[0])} 
        className="hidden" 
      />
      <input 
        type="file" 
        ref={cameraInputRef} 
        accept="image/*" 
        capture="environment" 
        onChange={(e) => e.target.files?.[0] && handleFileSelected(e.target.files[0])} 
        className="hidden" 
      />
      <input 
        type="file" 
        ref={galleryInputRef} 
        accept="image/*,.png,.jpg,.jpeg,.webp" 
        onChange={(e) => e.target.files?.[0] && handleFileSelected(e.target.files[0])} 
        className="hidden" 
      />

      {/* MODAL / NOTICE CLÉ API GEMINI */}
      {showKeyModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-5 sm:p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Key className="w-4 h-4 text-amber-400" />
                <span>Activer la Clé Gemini (Gratuit)</span>
              </h3>
              <button onClick={() => setShowKeyModal(false)} className="text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-300">
              Collez votre clé API Google Gemini pour activer l'analyse IA de vos images et PDF.
            </p>
            <input
              type="password"
              value={tempApiKey}
              onChange={(e) => setTempApiKey(e.target.value)}
              placeholder="AIzaSy..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs font-mono text-white focus:outline-none focus:border-indigo-500"
            />
            <div className="flex items-center justify-end gap-2 pt-2">
              <Button variant="ghost" size="sm" onClick={() => setShowKeyModal(false)}>
                Annuler
              </Button>
              <Button variant="primary" size="sm" onClick={handleSaveCustomKey} disabled={!tempApiKey.trim()}>
                Enregistrer & Activer
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* NOTICE BLOQUANTE TECHNIQUE PRO / PLUS POUR L'UTILISATEUR FREE */}
      {proModalPacingNotice && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-amber-500/40 rounded-2xl max-w-md w-full p-5 sm:p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Crown className="w-5 h-5 text-amber-400" />
                <h3 className="text-sm font-bold text-white">Technique Avancée KONAN PRO</h3>
              </div>
              <button onClick={() => setProModalPacingNotice(null)} className="text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {proModalPacingNotice}
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2 pt-2 border-t border-slate-800">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setProModalPacingNotice(null)}
                className="text-xs text-slate-300"
              >
                Garder Pomodoro (Gratuit)
              </Button>
              <Button 
                variant="glow" 
                size="sm" 
                leftIcon={<Sparkles className="w-3.5 h-3.5 text-amber-300" />}
                onClick={() => {
                  setProModalPacingNotice(null);
                  if (onUpgradeToPro) onUpgradeToPro();
                  else if (onViewPricing) onViewPricing();
                }}
                className="text-xs font-bold"
              >
                Passer à KONAN PRO (1 200 F)
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* TOP HEADER */}
      <div className="flex items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
        <div className="flex items-center gap-3">
          {currentStep === 'customize' ? (
            <button
              onClick={() => setCurrentStep('upload')}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer"
              title="Retour à l'étape 1"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          ) : onCancel ? (
            <button
              onClick={onCancel}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer"
              title="Retour au tableau de bord"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          ) : null}

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {currentStep === 'upload' 
                  ? "Importation de l'Emploi du Temps" 
                  : "Configuration des Matières & Méthodes"}
              </h1>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {currentStep === 'upload' ? 'Étape 1/2' : 'Étape 2/2'}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              {currentStep === 'upload'
                ? "Scannez votre document. L'IA extrait directement vos cours et horaires."
                : "Ajustez les coefficients de vos matières et choisissez votre méthode d'étude."}
            </p>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="text-xs text-slate-400 hover:text-slate-200 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer"
          title="Réinitialiser"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Réinitialiser</span>
        </button>
      </div>

      {/* ERROR ALERT */}
      {error && (
        <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
            <span>{error}</span>
          </div>
          <button 
            onClick={() => setError(null)} 
            className="text-slate-400 hover:text-white cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* =========================================================================
          ÉTAPE 1 : IMPORTATION DOCUMENT & TEXTE
          ========================================================================= */}
      {currentStep === 'upload' && (
        <div className="space-y-6">
          {/* NOTICE CLÉ API (SI NON DÉTECTÉE) */}
          {!apiKeyConfigured && (
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-200 text-xs flex flex-wrap items-center justify-between gap-2.5">
              <div className="flex items-center gap-2 min-w-0">
                <Key className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="truncate">
                  <strong>Clé Gemini non configurée :</strong> Pour activer l'analyse IA sur ce lien Vercel, configurez votre clé.
                </span>
              </div>
              <button
                type="button"
                onClick={() => setShowKeyModal(true)}
                className="px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-500/40 text-[11px] font-semibold transition-all cursor-pointer whitespace-nowrap"
              >
                🔑 Configurer la clé
              </button>
            </div>
          )}

          {/* SECTION: NIVEAU D'ÉTUDE */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300">
              Niveau académique
            </label>
            <div className="grid grid-cols-3 gap-2 p-1 rounded-xl bg-slate-900/80 border border-slate-800">
              {(Object.keys(FORMAT_CONFIG) as ScheduleFormatType[]).map((fmt) => {
                const config = FORMAT_CONFIG[fmt];
                const isSelected = selectedFormat === fmt;
                return (
                  <button
                    key={fmt}
                    type="button"
                    onClick={() => setSelectedFormat(fmt)}
                    className={`py-2 px-3 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isSelected 
                        ? 'bg-indigo-600 text-white shadow-sm font-semibold' 
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    {config.icon}
                    <span className="truncate">{config.short}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SECTION: SOURCE DU DOCUMENT */}
          <div className="space-y-3">
            <label className="text-xs font-semibold text-slate-300">
              Source du document
            </label>
            
            <div 
              onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setIsDragOver(false);
                const file = e.dataTransfer.files?.[0];
                if (file) handleFileSelected(file);
              }}
              className={`grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl border-2 border-dashed transition-all ${
                isDragOver 
                  ? 'border-indigo-500 bg-indigo-950/20' 
                  : 'border-slate-800 bg-slate-900/40 hover:border-slate-700'
              }`}
            >
              {/* PDF */}
              <button
                type="button"
                disabled={isAnalyzing}
                onClick={() => pdfInputRef.current?.click()}
                className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-850 flex items-center gap-3 transition-all cursor-pointer group text-left disabled:opacity-50"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold text-white block">Document PDF</span>
                  <span className="text-[11px] text-slate-400 block truncate">Choisir ou glisser</span>
                </div>
              </button>

              {/* Prendre Photo */}
              <button
                type="button"
                disabled={isAnalyzing}
                onClick={() => cameraInputRef.current?.click()}
                className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-850 flex items-center gap-3 transition-all cursor-pointer group text-left disabled:opacity-50"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Camera className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold text-white block">Prendre Photo</span>
                  <span className="text-[11px] text-slate-400 block truncate">Appareil photo</span>
                </div>
              </button>

              {/* Galerie */}
              <button
                type="button"
                disabled={isAnalyzing}
                onClick={() => galleryInputRef.current?.click()}
                className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 flex items-center gap-3 transition-all cursor-pointer group text-left disabled:opacity-50"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <ImageIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold text-white block">Galerie Photo</span>
                  <span className="text-[11px] text-slate-400 block truncate">PNG, JPG, WEBP</span>
                </div>
              </button>
            </div>

            {/* Fichier en cours d'analyse */}
            {selectedFile && (
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                <div className="flex items-center gap-2.5 min-w-0">
                  <UploadCloud className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="text-slate-200 font-medium truncate">{selectedFile.name}</span>
                  <span className="text-slate-500 text-[11px] shrink-0">({Math.round(selectedFile.size / 1024)} Ko)</span>
                </div>
                {isAnalyzing ? (
                  <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold shrink-0">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Analyse IA en cours...</span>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setSelectedFile(null)}
                    className="text-slate-400 hover:text-white cursor-pointer p-1"
                    title="Retirer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            )}
          </div>

          {/* EXEMPLES PRÉDÉFINIS */}
          <div className="flex items-center gap-2 flex-wrap text-xs text-slate-400">
            <span className="text-[11px] font-medium text-slate-500">Exemples rapides :</span>
            <button
              type="button"
              onClick={() => handleLoadDemo('pdf-esatic-entd2', 'lmd')}
              className="px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer text-[11px]"
            >
              ESATIC (LMD)
            </button>
            <button
              type="button"
              onClick={() => handleLoadDemo('pdf-cs-l3', 'tpcm')}
              className="px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer text-[11px]"
            >
              BTS Info (CM/TD/TP)
            </button>
            <button
              type="button"
              onClick={() => handleLoadDemo('pdf-lycee-john-wesley', 'scolaire')}
              className="px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer text-[11px]"
            >
              Terminale (Scolaire)
            </button>
          </div>

          {/* ÉDITEUR TEXTE STRUCTURÉ */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                <span>Texte structuré de l'emploi du temps</span>
                {detectedSlotsCount > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold">
                    ✓ {detectedSlotsCount} cours détecté{detectedSlotsCount > 1 ? 's' : ''}
                  </span>
                )}
              </label>

              {scheduleText && (
                <button
                  type="button"
                  onClick={handleCopy}
                  className="text-[11px] text-slate-400 hover:text-white inline-flex items-center gap-1 cursor-pointer"
                >
                  {isCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{isCopied ? 'Copié !' : 'Copier'}</span>
                </button>
              )}
            </div>

            <textarea
              value={scheduleText}
              onChange={(e) => setScheduleText(e.target.value)}
              disabled={isAnalyzing}
              rows={10}
              placeholder={FORMAT_CONFIG[selectedFormat].placeholder}
              className="w-full bg-slate-950/80 border border-slate-800 focus:border-indigo-500 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm font-mono text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500/30 leading-relaxed transition-all resize-y disabled:opacity-50"
            />
          </div>

          {/* BOUTON PASSER À L'ÉTAPE 2 (Audio 1 : Ne pas générer immédiatement sans configurer !) */}
          <div className="pt-2">
            <Button
              onClick={handleProceedToCustomization}
              disabled={isAnalyzing || !scheduleText.trim() || detectedSlotsCount === 0}
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
              className="w-full py-3.5 text-sm font-bold bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl shadow-lg shadow-indigo-600/20 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <span>Continuer : Configurer les coefficients & méthodes ({detectedSlotsCount} cours)</span>
            </Button>
          </div>
        </div>
      )}

      {/* =========================================================================
          ÉTAPE 2 : PERSONNALISATION DES COEFFICIENTS & MÉTHODES D'ESPACEMENT
          ========================================================================= */}
      {currentStep === 'customize' && (
        <div className="space-y-6 animate-in fade-in duration-300">
          
          {/* 1. LISTE DES MATIÈRES & COEFFICIENTS (Audio 1) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-bold text-white flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-indigo-400" />
                  <span>1. Coefficients & Notes Cibles de vos Matières</span>
                </h2>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Ajustez le coefficient de chaque matière : plus le coefficient est élevé, plus l'algorithme lui réserve des créneaux de travail.
                </p>
              </div>
              <span className="text-xs font-mono text-slate-400">
                {editableSubjects.filter(s => s.enabled).length} / {editableSubjects.length} actives
              </span>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {editableSubjects.map((subject) => (
                <div
                  key={subject.id}
                  className={`p-3.5 rounded-xl border transition-all ${
                    subject.enabled
                      ? 'bg-slate-900/90 border-slate-800'
                      : 'bg-slate-950/50 border-slate-900 opacity-60'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    
                    {/* Nom de la matière modifiable */}
                    <div className="flex items-center gap-3 w-full sm:w-auto flex-1 min-w-0">
                      <input
                        type="checkbox"
                        checked={subject.enabled}
                        onChange={() => handleToggleSubject(subject.id)}
                        className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 shrink-0 cursor-pointer"
                        title={subject.enabled ? "Désactiver cette matière" : "Activer cette matière"}
                      />
                      <div 
                        className="w-3 h-3 rounded-full shrink-0"
                        style={{ backgroundColor: subject.color }}
                      />
                      <input
                        type="text"
                        value={subject.name}
                        onChange={(e) => handleUpdateName(subject.id, e.target.value)}
                        className="bg-transparent border-b border-transparent hover:border-slate-700 focus:border-indigo-500 focus:bg-slate-950/60 px-1 py-0.5 rounded text-xs sm:text-sm font-semibold text-white focus:outline-none flex-1 truncate transition-colors"
                        placeholder="Nom de la matière"
                      />
                    </div>

                    {/* Contrôle du Coefficient [-] [ Coeff : X ] [+] */}
                    <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                      
                      {/* Note cible */}
                      <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <span className="text-[11px]">Cible :</span>
                        <select
                          value={subject.targetGrade}
                          onChange={(e) => handleUpdateTargetGrade(subject.id, Number(e.target.value))}
                          className="bg-slate-950 border border-slate-800 rounded-lg px-2 py-1 text-xs text-white focus:outline-none focus:border-indigo-500"
                        >
                          <option value={10}>10/20 (Validation)</option>
                          <option value={12}>12/20 (Assez Bien)</option>
                          <option value={14}>14/20 (Bien)</option>
                          <option value={16}>16/20 (Très Bien)</option>
                          <option value={18}>18/20 (Major)</option>
                        </select>
                      </div>

                      {/* Contrôleur de Coefficient */}
                      <div className="flex items-center gap-1 bg-slate-950 border border-slate-800 rounded-xl p-1">
                        <button
                          type="button"
                          onClick={() => handleUpdateCoeff(subject.id, -1)}
                          disabled={subject.coefficient <= 1}
                          className="w-7 h-7 rounded-lg bg-slate-900 hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                          title="Diminuer coefficient"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <div className="px-2.5 text-center min-w-[65px]">
                          <span className="text-[10px] text-slate-400 block font-mono">COEFF</span>
                          <span className="text-xs font-black text-indigo-400">{subject.coefficient}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleUpdateCoeff(subject.id, 1)}
                          disabled={subject.coefficient >= 10}
                          className="w-7 h-7 rounded-lg bg-slate-900 hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                          title="Augmenter coefficient"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. CHOIX DE LA MÉTHODE D'ESPACEMENT (Audio 1 : selon modèle gratuit / pro) */}
          <div className="space-y-3 pt-2">
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>2. Technique d'Espacement & Méthode de Révision</span>
                </h2>
                <span className="text-[11px] font-semibold text-slate-400">
                  Formule active : <strong className={planTier === 'pro' ? 'text-amber-400' : planTier === 'plus' ? 'text-indigo-400' : 'text-slate-300'}>{planTier.toUpperCase()}</strong>
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Choisissez comment KONAN cadence vos séances d'étude en dehors de vos cours.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PACING_STRATEGIES.map((strategy) => {
                const isSelected = selectedPacing === strategy.id;
                const isAllowed = isPacingAllowedForPlan(strategy.id, planTier);

                return (
                  <div
                    key={strategy.id}
                    onClick={() => handleSelectPacingStrategy(strategy.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer relative ${
                      isSelected
                        ? 'bg-indigo-950/40 border-indigo-500 shadow-md shadow-indigo-950/50 ring-1 ring-indigo-500/50'
                        : isAllowed
                        ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                        : 'bg-slate-950/60 border-slate-800/80 hover:border-amber-500/40 opacity-80'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xs sm:text-sm font-bold text-white">
                            {strategy.title}
                          </h3>
                        </div>
                        <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                          {strategy.tagline}
                        </p>
                      </div>

                      {/* Badge Statut Plan */}
                      {isAllowed ? (
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                          isSelected
                            ? 'bg-indigo-500 text-white'
                            : 'bg-slate-800 text-slate-300'
                        }`}>
                          {isSelected ? '✓ Sélectionnée' : 'Inclus'}
                        </span>
                      ) : (
                        <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1 shrink-0">
                          <Lock className="w-3 h-3 text-amber-400" />
                          ⭐ PRO
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                      {strategy.explanation}
                    </p>

                    <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="font-mono">{strategy.badge}</span>
                      {!isAllowed && (
                        <span className="text-amber-400 text-[10px] font-semibold">
                          Cliquez pour débloquer
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3. MOMENT PRÉFÉRÉ D'ÉTUDE (CHRONOTYPE) */}
          <div className="space-y-2 pt-2">
            <label className="text-xs font-semibold text-slate-300">
              Moment de la journée le plus productif pour vous
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'morning' as Chronotype, label: 'Matin (07h - 12h)' },
                { id: 'afternoon' as Chronotype, label: 'Après-midi (13h - 17h)' },
                { id: 'evening' as Chronotype, label: 'Soir (18h - 22h)' },
                { id: 'night' as Chronotype, label: 'Nuit (22h - 02h)' },
              ].map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedChronotype(c.id)}
                  className={`p-2.5 rounded-xl border text-xs font-medium transition-all cursor-pointer text-center ${
                    selectedChronotype === c.id
                      ? 'bg-indigo-600 border-indigo-500 text-white font-bold'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-850'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* 4. BOUTON FINAL DE GÉNÉRATION DU PLANNING */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
            <Button
              type="button"
              variant="secondary"
              size="lg"
              onClick={() => setCurrentStep('upload')}
              className="w-full sm:w-auto px-5 py-3.5 text-xs text-slate-300"
            >
              ← Retour au document
            </Button>
            <Button
              type="button"
              onClick={handleFinalSubmit}
              variant="primary"
              size="lg"
              className="flex-1 w-full py-3.5 text-sm font-bold bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl shadow-lg shadow-indigo-600/20 cursor-pointer transition-all"
            >
              <Calendar className="w-4 h-4 mr-2" />
              <span>Générer mon planning d'étude avec ces paramètres ({editableSubjects.filter(s => s.enabled).length} matières)</span>
            </Button>
          </div>

        </div>
      )}

    </div>
  );
};
