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
  Calendar
} from 'lucide-react';
import type { 
  Subject, 
  ClassSlot, 
  StudyPreferences, 
  StudySession 
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
import { extraireEmploiDuTemps, convertFileToBase64 } from '../../services/geminiExtractionService';
import { buildStateFromExtractedSchedule } from '../../services/aiAcademicAnalyzer';

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

export const PdfUploadView: React.FC<PdfUploadViewProps> = ({
  studentName,
  onApplyExtractedSchedule,
  onCancel,
}) => {
  // State
  const [selectedFormat, setSelectedFormat] = useState<ScheduleFormatType>('lmd');
  const [scheduleText, setScheduleText] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);

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

  // Réinitialiser tout à zéro
  const handleReset = () => {
    setSelectedFile(null);
    setScheduleText('');
    setError(null);
    setIsAnalyzing(false);
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

      // Appel IA direct sans fioritures ni timers artificiels
      const aiResult = await extraireEmploiDuTemps(base64, mimeType);

      if (aiResult && aiResult.trim().length > 10) {
        setScheduleText(aiResult.trim());
        setIsAnalyzing(false);
        return;
      }
    } catch (aiErr: any) {
      console.warn('[KONAN] Notice extraction IA directe :', aiErr?.message || aiErr);
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

  // Génération directe du planning
  const handleGeneratePlanning = () => {
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

      const harmonized = {
        ...parsed,
        slots: harmonizeAndDeduplicateSlots(parsed.slots)
      };

      const finalPayload = buildStateFromExtractedSchedule(
        harmonized,
        studentName,
        'evening',
        'active_recall_spaced'
      );

      onApplyExtractedSchedule(finalPayload);
    } catch (err: any) {
      console.error("[KONAN] Erreur génération planning :", err);
      setError("Erreur de lecture. Assurez-vous que chaque jour commence par 'JOUR: LUNDI' et chaque cours par '- HH:MM - HH:MM : Matière'.");
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

      {/* TOP HEADER */}
      <div className="flex items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
        <div className="flex items-center gap-3">
          {onCancel && (
            <button
              onClick={onCancel}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer"
              title="Retour au tableau de bord"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Importation d'Emploi du Temps
            </h1>
            <p className="text-xs text-slate-400">
              Scannez ou déposez votre document. L'IA extrait directement vos cours et horaires.
            </p>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="text-xs text-slate-400 hover:text-slate-200 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer"
          title="Réinitialiser tous les champs"
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

      {/* SECTION 1: NIVEAU D'ÉTUDE (TABS SOBRES) */}
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

      {/* SECTION 2: IMPORTATION DIRECTE & CAPTURE (3 BOUTONS PROS) */}
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
          {/* Action 1: PDF */}
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

          {/* Action 2: Prendre Photo */}
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

          {/* Action 3: Galerie */}
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

        {/* État du fichier sélectionné & Loader inline */}
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

      {/* EXEMPLES PRÉDÉFINIS POUR TESTS RAPIDES */}
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

      {/* SECTION 3: ÉDITEUR DE TEXTE STRUCTURÉ EN DIRECT */}
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

        <div className="relative">
          <textarea
            value={scheduleText}
            onChange={(e) => setScheduleText(e.target.value)}
            disabled={isAnalyzing}
            rows={12}
            placeholder={FORMAT_CONFIG[selectedFormat].placeholder}
            className="w-full bg-slate-950/80 border border-slate-800 focus:border-indigo-500 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm font-mono text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500/30 leading-relaxed transition-all resize-y disabled:opacity-50"
          />
        </div>
      </div>

      {/* SECTION 4: BOUTON D'ACTION PRINCIPAL */}
      <div className="pt-2">
        <Button
          onClick={handleGeneratePlanning}
          disabled={isAnalyzing || !scheduleText.trim()}
          variant="primary"
          size="lg"
          className="w-full py-3.5 text-sm font-bold bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl shadow-lg shadow-indigo-600/20 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          <Calendar className="w-4 h-4 mr-2" />
          <span>Générer mon planning d'étude ({detectedSlotsCount} cours)</span>
        </Button>
      </div>

    </div>
  );
};
