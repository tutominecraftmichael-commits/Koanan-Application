import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Sparkles,
  GraduationCap,
  BookOpen,
  Award,
  Zap,
  ShieldCheck,
  Clock,
  FileText,
  Camera,
  Image as ImageIcon,
  Sun,
  Sunset,
  Moon,
  Flame,
  Lock,
  Mail,
  User as UserIcon,
  Eye,
  EyeOff,
  AlertCircle,
  Crown,
  Copy,
  Download,
  Key,
  Sliders,
  Plus,
  Minus,
  ChevronDown,
  BarChart2,
  Calendar,
  X,
  Loader2,
  Volume2,
  VolumeX
} from 'lucide-react';
import { KonanCube } from '../../components/common/KonanCube';
import { soundFX } from '../../lib/audioEffects';
import {
  parseTimetableDocument,
  loadDemoPdfTemplate,
  parseStructuredScheduleTruth,
  harmonizeAndDeduplicateSlots,
  formatExtractedScheduleToFormatText,
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
  getPacingStrategy,
  isPacingAllowedForPlan,
  recommendPacingStrategies,
  type PacingRecommendation
} from '../../lib/pacingStrategies';
import {
  signInWithGoogleReal,
  signInWithEmailReal,
  signUpWithEmailReal
} from '../../lib/firebase';
import { generateKonanId } from '../../lib/konanId';
import { validateStrictEmail } from '../auth/AuthPage';
import type {
  Subject,
  ClassSlot,
  StudyPreferences,
  StudySession,
  Chronotype,
  StudyPacing,
  UserAccount,
  ExtractedSubjectCandidate,
  ExtractedClassCandidate
} from '../../types';

export const PENDING_ONBOARDING_PAYLOAD_KEY = 'konan_pending_onboarding_payload';

export interface DuolingoOnboardingProps {
  onComplete: (data: {
    subjects: Subject[];
    classSlots: ClassSlot[];
    preferences: StudyPreferences;
    studySessions: StudySession[];
    planTier?: 'free' | 'pro' | 'plus';
  }) => void;
  onOpenLogin: () => void;
  currentUser: UserAccount | null;
  onLoginSuccess: (user: UserAccount) => void;
}

type OnboardingStepId =
  | 'welcome'
  | 'study_type'
  | 'upload'
  | 'customize'
  | 'account_setup';

type StudySystemChoice = 'lmd' | 'bts' | 'lycee';

const STEP_ORDER: OnboardingStepId[] = [
  'welcome',
  'study_type',
  'upload',
  'customize',
  'account_setup',
];

const STUDY_SYSTEM_CONFIG: Record<
  StudySystemChoice,
  {
    format: ScheduleFormatType;
    title: string;
    badge: string;
    subtitle: string;
    fileName: string;
    demoId: string;
    syntaxExample: string;
    placeholder: string;
  }
> = {
  lmd: {
    format: 'lmd',
    title: 'Système LMD',
    badge: 'Licence · Master · Doctorat',
    subtitle: 'Université & Grandes Écoles — Extrait les matières, codes ECUE, amphis/salles et enseignants.',
    fileName: 'Emploi_du_Temps_LMD.txt',
    demoId: 'pdf-esatic-entd2',
    syntaxExample: '- 07:30 - 10:00 : Algèbres 2 [1MTH3350] | Salle: Amphi ESATIC | Prof: Dr KOIVOGUI',
    placeholder: `JOUR: LUNDI\n- 07:30 - 10:00 : Algèbres 2 [1MTH3350] | Salle: Amphi ESATIC | Prof: Dr KOIVOGUI\n- 10:15 - 12:45 : Anglais [1LAN3350] | Salle: Salle 204 | Prof: M. YEO\n- 14:30 - 17:00 : Développement d'Applications 1 [1INF3350] | Salle: Lab Info | M. KONE\n\nJOUR: MARDI\n- 07:30 - 10:00 : Fondamentaux de la Finance [1MAN3350] | Salle: Amphi ESATIC | Prof: Dr KADJO`,
  },
  bts: {
    format: 'tpcm',
    title: 'Système BTS',
    badge: 'Filières Techniques & Pro',
    subtitle: 'Brevet de Technicien Supérieur — Catégorise les cours par type (CM, TD, TP) et salle spécialisée.',
    fileName: 'Emploi_du_Temps_BTS.txt',
    demoId: 'pdf-cs-l3',
    syntaxExample: '- 08:00 - 10:00 : CM Électronique Analogique (Amphi 1)',
    placeholder: `JOUR: LUNDI\n- 08:00 - 10:00 : CM Électronique Analogique (Amphi 1)\n- 10:15 - 12:15 : TD Mathématiques Appliquées (Salle 302)\n- 14:00 - 17:00 : TP Informatique Industrielle (Labo Info 3)\n\nJOUR: MARDI\n- 08:00 - 10:00 : CM Physique des Matériaux (Amphi 2)`,
  },
  lycee: {
    format: 'scolaire',
    title: 'Lycée / Scolaire',
    badge: 'Seconde · Première · Terminale',
    subtitle: 'Enseignement Général & Technique — Décode les sigles scolaires (PC, SVT, HG) en fichier texte épuré.',
    fileName: 'Emploi_du_Temps_Lycee.txt',
    demoId: 'pdf-lycee-john-wesley',
    syntaxExample: '- 08:00 - 10:00 : Physique-Chimie',
    placeholder: `JOUR: LUNDI\n- 08:00 - 09:50 : Sciences de la Vie et de la Terre (SVT)\n- 10:10 - 12:00 : Physique-Chimie\n\nJOUR: MARDI\n- 08:00 - 09:50 : Sciences de la Vie et de la Terre (SVT)\n- 10:10 - 12:00 : Mathématiques`,
  },
};

const DAY_NAMES_FR = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

interface EditableSubjectItem {
  id: string;
  name: string;
  code: string;
  color: string;
  coefficient: number;
  difficulty: 1 | 2 | 3 | 4 | 5;
  targetGrade: number;
  topics?: string[];
  enabled: boolean;
}

/**
 * Composant texte avec animation mot par mot (Machine à écrire vivante Konan)
 */
const WordByWordBubble: React.FC<{ text: string; speed?: number }> = ({
  text,
  speed = 32,
}) => {
  const [visibleCount, setVisibleCount] = useState<number>(0);
  const words = text.split(' ');

  useEffect(() => {
    setVisibleCount(0);
    let current = 0;
    const interval = setInterval(() => {
      current++;
      setVisibleCount(current);
      if (current >= words.length) {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, words.length]);

  return (
    <span>
      {words.slice(0, visibleCount).join(' ')}
      {visibleCount < words.length && (
        <span className="inline-block w-1.5 h-3.5 ml-1 bg-cyan-400 animate-pulse align-middle" />
      )}
    </span>
  );
};

export const DuolingoOnboarding: React.FC<DuolingoOnboardingProps> = ({
  onComplete,
  onOpenLogin: _onOpenLogin,
  currentUser,
  onLoginSuccess,
}) => {
  const [step, setStep] = useState<OnboardingStepId>('welcome');
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [showExistingLogin, setShowExistingLogin] = useState<boolean>(false);

  const isAuthenticated = Boolean(currentUser?.isLoggedIn && !currentUser?.isDemo);
  const studentName = currentUser?.name || 'Étudiant';

  // Étape 2 : Système d'études choisi (LMD, BTS, Lycée)
  const [studyType, setStudyType] = useState<StudySystemChoice | null>('lmd');
  const activeSystem = STUDY_SYSTEM_CONFIG[studyType || 'lmd'];
  const activeFormat: ScheduleFormatType = activeSystem.format;

  // Étape 3 : Extraction & Transformation en fichier texte (.txt)
  const [uploadedFileName, setUploadedFileName] = useState<string>('');
  const [scheduleText, setScheduleText] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisStatus, setAnalysisStatus] = useState<string>('');
  const [extractionError, setExtractionError] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [apiKeyConfigured, setApiKeyConfigured] = useState<boolean>(() => hasGeminiApiKey());
  const [showKeyModal, setShowKeyModal] = useState<boolean>(false);
  const [tempApiKey, setTempApiKey] = useState<string>('');

  // Étape 4 : Personnalisation (Matières, Coefficients, Pacing, Chronotype)
  const [editableSubjects, setEditableSubjects] = useState<EditableSubjectItem[]>([]);
  const [extractedSlots, setExtractedSlots] = useState<ExtractedClassCandidate[]>([]);
  const [selectedPacings, setSelectedPacings] = useState<StudyPacing[]>(['pomodoro']);
  const [chronotype, setChronotype] = useState<Chronotype>('evening');
  const [showFullDiagnostic, setShowFullDiagnostic] = useState<boolean>(false);

  // Étape 5 : Formule & Compte
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'pro' | 'plus'>('free');
  const [generatedSubjects, setGeneratedSubjects] = useState<Subject[]>([]);
  const [generatedSlots, setGeneratedSlots] = useState<ClassSlot[]>([]);
  const [generatedSessions, setGeneratedSessions] = useState<StudySession[]>([]);
  const [generatedPrefs, setGeneratedPrefs] = useState<StudyPreferences | null>(null);

  // États Authentification (Création de compte ou Connexion)
  const [authFullName, setAuthFullName] = useState<string>(
    currentUser?.name && currentUser.name !== 'Étudiant' ? currentUser.name : ''
  );
  const [authEmail, setAuthEmail] = useState<string>('');
  const [authPassword, setAuthPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [isSubmittingAuth, setIsSubmittingAuth] = useState<boolean>(false);

  // Références inputs fichiers
  const pdfInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);

  const currentStepIndex = STEP_ORDER.indexOf(step);
  const progressPercent = Math.max(
    10,
    Math.round((currentStepIndex / (STEP_ORDER.length - 1)) * 100)
  );

  const toggleSound = () => {
    const next = !isMuted;
    setIsMuted(next);
    soundFX.setMuted(next);
  };

  // Analyse temps réel du fichier texte structuré (.txt) pour l'aperçu organisé Jour par Jour
  const liveParsedPreview = useMemo(() => {
    if (!scheduleText.trim()) {
      return { subjects: [] as ExtractedSubjectCandidate[], slots: [] as ExtractedClassCandidate[] };
    }
    try {
      const parsed = parseStructuredScheduleTruth(
        scheduleText,
        activeSystem.fileName,
        activeFormat
      );
      return {
        subjects: parsed.subjects,
        slots: harmonizeAndDeduplicateSlots(parsed.slots),
      };
    } catch {
      return { subjects: [] as ExtractedSubjectCandidate[], slots: [] as ExtractedClassCandidate[] };
    }
  }, [scheduleText, activeFormat, activeSystem.fileName]);

  // Groupement chronologique Jour par Jour (Lundi -> Dimanche)
  const slotsGroupedByDay = useMemo(() => {
    const groups: { dayIndex: number; dayName: string; slots: ExtractedClassCandidate[] }[] = [];
    for (let d = 0; d <= 6; d++) {
      const daySlots = liveParsedPreview.slots.filter(s => s.dayOfWeek === d);
      if (daySlots.length > 0) {
        groups.push({
          dayIndex: d,
          dayName: DAY_NAMES_FR[d],
          slots: daySlots,
        });
      }
    }
    return groups;
  }, [liveParsedPreview.slots]);

  // Recommandation KONAN IA selon l'emploi du temps extrait
  const pacingRecommendation: PacingRecommendation = useMemo(() => {
    const activeCount = editableSubjects.filter(s => s.enabled).length || liveParsedPreview.subjects.length || 6;
    const referenceSlots = extractedSlots.length > 0 ? extractedSlots : liveParsedPreview.slots;
    return recommendPacingStrategies(
      activeCount,
      referenceSlots.map(s => ({
        startTime: s.startTime,
        endTime: s.endTime,
        dayOfWeek: s.dayOfWeek,
      }))
    );
  }, [editableSubjects, extractedSlots, liveParsedPreview]);

  const handleBack = () => {
    soundFX.playCheckmarkPop();
    if (showExistingLogin) {
      setShowExistingLogin(false);
      setAuthError(null);
      return;
    }
    if (currentStepIndex > 0) {
      setStep(STEP_ORDER[currentStepIndex - 1]);
    }
  };

  // Changement du système d'études (LMD / BTS / Lycée) : re-catégorise et transforme immédiatement le fichier texte (.txt)
  const handleSelectStudySystem = (choice: StudySystemChoice) => {
    soundFX.playCheckmarkPop();
    setStudyType(choice);
    const targetConfig = STUDY_SYSTEM_CONFIG[choice];
    if (scheduleText.trim().length > 10) {
      try {
        const parsed = parseStructuredScheduleTruth(
          scheduleText,
          targetConfig.fileName,
          targetConfig.format
        );
        if (parsed.slots.length > 0) {
          const transformedTxt = formatExtractedScheduleToFormatText(parsed, targetConfig.format);
          if (transformedTxt.trim().length > 10) {
            setScheduleText(transformedTxt);
          }
        }
      } catch {
        // Conserver le texte actuel si non structuré
      }
    }
  };

  // Sauvegarder une clé API Gemini personnalisée
  const handleSaveCustomKey = () => {
    if (tempApiKey.trim()) {
      setCustomGeminiApiKey(tempApiKey.trim());
      setApiKeyConfigured(true);
      setShowKeyModal(false);
      setExtractionError(null);
      soundFX.playSuccessChime();
    }
  };

  // Extraction d'un document PDF ou Photo avec catégorisation stricte (LMD, BTS, Lycée) et transformation en fichier texte (.txt)
  const handleProcessFile = async (file: File) => {
    const MAX_FILE_SIZE = 15 * 1024 * 1024;
    if (file.size > MAX_FILE_SIZE) {
      setExtractionError('Le fichier dépasse 15 Mo. Veuillez choisir un PDF ou une photo plus légère.');
      return;
    }

    const fileNameLower = (file.name || '').toLowerCase();
    const isPdf = file.type === 'application/pdf' || fileNameLower.endsWith('.pdf');
    const isImage =
      file.type.startsWith('image/') || /\.(png|jpe?g|webp|heic|heif|bmp)$/i.test(fileNameLower);

    if (!isPdf && !isImage) {
      setExtractionError('Format non supporté. Importez un fichier PDF ou une photo (JPG, PNG, WEBP).');
      return;
    }

    soundFX.playCheckmarkPop();
    setUploadedFileName(file.name);
    setExtractionError(null);
    setIsAnalyzing(true);
    setAnalysisStatus(`Extraction & catégorisation ${activeSystem.title} en cours...`);

    // 1. Extraction Vision IA Gemini catégorisée selon LMD / BTS / Lycée
    try {
      const mimeType = file.type || (isPdf ? 'application/pdf' : 'image/jpeg');
      const base64 = await convertFileToBase64(file);
      const aiRawText = await extraireEmploiDuTemps(base64, mimeType, activeFormat);

      if (aiRawText && aiRawText.trim().length > 10) {
        const parsedAi = parseStructuredScheduleTruth(
          aiRawText.trim(),
          activeSystem.fileName,
          activeFormat
        );
        if (parsedAi.slots.length > 0) {
          const formattedTxt = formatExtractedScheduleToFormatText(parsedAi, activeFormat);
          setScheduleText(formattedTxt || aiRawText.trim());
          setIsAnalyzing(false);
          setAnalysisStatus('');
          soundFX.playSuccessChime();
          return;
        } else {
          setScheduleText(aiRawText.trim());
          setIsAnalyzing(false);
          setAnalysisStatus('');
          soundFX.playSuccessChime();
          return;
        }
      }
    } catch (aiErr: any) {
      console.warn('[KONAN Onboarding] Bascule sur le moteur local :', aiErr?.message || aiErr);
    }

    // 2. Moteur d'extraction vectoriel PDF / OCR local avec transformation en fichier texte (.txt) catégorisé
    try {
      setAnalysisStatus(`Analyse structurelle locale (${activeSystem.title})...`);
      const localExtracted = await parseTimetableDocument(
        file,
        (msg) => setAnalysisStatus(msg),
        activeFormat
      );

      if (localExtracted && localExtracted.slots.length > 0) {
        const formattedTxt = formatExtractedScheduleToFormatText(localExtracted, activeFormat);
        setScheduleText(formattedTxt);
        setIsAnalyzing(false);
        setAnalysisStatus('');
        soundFX.playSuccessChime();
        return;
      }
    } catch (localErr) {
      console.warn('[KONAN Onboarding] Erreur extraction locale :', localErr);
    }

    setIsAnalyzing(false);
    setAnalysisStatus('');
    if (!hasGeminiApiKey()) {
      setExtractionError(
        "Aucun créneau n'a pu être extrait sans clé Gemini pour cette image/PDF. Configurez votre clé IA ('🔑 Clé Gemini'), chargez un exemple certifié ou saisissez vos cours dans l'éditeur .txt."
      );
    } else {
      setExtractionError(
        "Ce document n'a pas pu être décodé automatiquement. Vérifiez sa lisibilité ou corrigez directement le fichier texte (.txt) ci-dessous."
      );
    }
  };

  // Charger un exemple certifié et le transformer dans le format actif (LMD, BTS ou Lycée)
  const handleLoadCertifiedDemo = (choice?: StudySystemChoice) => {
    soundFX.playCheckmarkPop();
    const targetChoice = choice || studyType || 'lmd';
    if (choice && choice !== studyType) {
      setStudyType(choice);
    }
    const targetConfig = STUDY_SYSTEM_CONFIG[targetChoice];
    setExtractionError(null);

    try {
      const demo = loadDemoPdfTemplate(targetConfig.demoId);
      const formattedTxt = formatExtractedScheduleToFormatText(demo, targetConfig.format);
      setUploadedFileName(targetConfig.fileName);
      setScheduleText(formattedTxt || targetConfig.placeholder);
      soundFX.playSuccessChime();
    } catch {
      setUploadedFileName(targetConfig.fileName);
      setScheduleText(targetConfig.placeholder);
    }
  };

  // Copier le contenu du fichier texte (.txt)
  const handleCopyTxt = () => {
    if (!scheduleText.trim()) return;
    navigator.clipboard.writeText(scheduleText);
    setIsCopied(true);
    soundFX.playCheckmarkPop();
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Télécharger le fichier texte catégorisé (.txt)
  const handleDownloadTxt = () => {
    if (!scheduleText.trim()) return;
    soundFX.playCheckmarkPop();
    const blob = new Blob([scheduleText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = activeSystem.fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Valider l'étape 3 (Upload & Fichier Texte) -> Passer à l'étape 4 (Personnalisation des Matières & Méthodes)
  const handleProceedToCustomize = () => {
    if (!scheduleText.trim()) {
      setExtractionError('Veuillez importer un emploi du temps, choisir un exemple ou saisir vos cours.');
      return;
    }

    const parsed = parseStructuredScheduleTruth(
      scheduleText,
      uploadedFileName || activeSystem.fileName,
      activeFormat
    );

    if (!parsed.slots || parsed.slots.length === 0) {
      setExtractionError(
        'Aucun créneau horaire valide détecté. Utilisez le format "- 08:00 - 10:00 : Matière" sous chaque "JOUR: LUNDI".'
      );
      return;
    }

    setExtractionError(null);
    const harmonized = harmonizeAndDeduplicateSlots(parsed.slots);
    setExtractedSlots(harmonized);

    const editableList: EditableSubjectItem[] = parsed.subjects.map(sub => ({
      id: sub.id,
      name: sub.name,
      code: sub.code || sub.name.slice(0, 4).toUpperCase(),
      color: sub.color || '#6366F1',
      coefficient: sub.coefficient || 4,
      difficulty: sub.difficulty || 3,
      targetGrade: sub.targetGrade || 15,
      topics: sub.topics,
      enabled: true,
    }));

    setEditableSubjects(editableList);

    // Appliquer par défaut la recommandation IA
    const rec = recommendPacingStrategies(
      editableList.length,
      harmonized.map(s => ({
        startTime: s.startTime,
        endTime: s.endTime,
        dayOfWeek: s.dayOfWeek,
      }))
    );
    if (rec?.primaryId) {
      setSelectedPacings([rec.primaryId]);
    }

    soundFX.playCheckmarkPop();
    setStep('customize');
  };

  // Mise à jour des matières à l'étape 4
  const handleUpdateSubjectCoeff = (id: string, delta: number) => {
    setEditableSubjects(prev =>
      prev.map(s =>
        s.id === id ? { ...s, coefficient: Math.max(1, Math.min(12, s.coefficient + delta)) } : s
      )
    );
  };

  const handleUpdateSubjectName = (id: string, name: string) => {
    setEditableSubjects(prev => prev.map(s => (s.id === id ? { ...s, name } : s)));
  };

  const handleUpdateSubjectTargetGrade = (id: string, targetGrade: number) => {
    setEditableSubjects(prev => prev.map(s => (s.id === id ? { ...s, targetGrade } : s)));
  };

  const handleToggleSubjectEnabled = (id: string) => {
    setEditableSubjects(prev => prev.map(s => (s.id === id ? { ...s, enabled: !s.enabled } : s)));
  };

  // Valider l'étape 4 (Personnalisation) -> Construire le planning complet et passer à l'étape 5 (Formule & Compte)
  const handleProceedToAccountSetup = () => {
    const activeSubjects = editableSubjects.filter(s => s.enabled);
    if (activeSubjects.length === 0) {
      return;
    }

    const activeSlots = extractedSlots
      .map(slot => {
        const matchedSub = activeSubjects.find(
          sub =>
            sub.id === slot.subjectId ||
            sub.name.toLowerCase().trim() === (slot.subjectName || '').toLowerCase().trim()
        );
        if (!matchedSub) return null;
        return {
          ...slot,
          subjectId: matchedSub.id,
          subjectName: matchedSub.name,
        };
      })
      .filter((s): s is ExtractedClassCandidate => s !== null);

    const scheduleToBuild = {
      fileName: uploadedFileName || activeSystem.fileName,
      fileSize: scheduleText.length || 2048,
      academicTrack: activeSystem.title,
      detectedConfidence: 98,
      subjects: activeSubjects.map(s => ({
        id: s.id,
        name: s.name.trim() || 'Matière',
        code: s.code,
        color: s.color,
        coefficient: s.coefficient,
        difficulty: s.difficulty,
        targetGrade: s.targetGrade,
        topics: s.topics,
      })),
      slots: activeSlots,
      totalWeeklyClassHours: Math.round(activeSlots.length * 2),
      recommendedStudyHours: Math.max(8, activeSubjects.length * 2),
      summaryNote: `Planning ${activeSystem.title} généré`,
      rawText: scheduleText,
    };

    const primaryPacing = selectedPacings[0] || 'pomodoro';
    const built = buildStateFromExtractedSchedule(
      scheduleToBuild,
      authFullName.trim() || studentName,
      chronotype,
      primaryPacing,
      selectedPacings,
      selectedPlan
    );

    setGeneratedSubjects(built.subjects);
    setGeneratedSlots(built.classSlots);
    setGeneratedPrefs(built.preferences);
    setGeneratedSessions(built.studySessions);

    soundFX.playSuccessChime();
    setStep('account_setup');
  };

  // Construit et persiste le payload final d'onboarding pour garantir zéro perte lors de la création de compte / Google Auth
  const buildAndPersistFinalPayload = (effectiveName?: string) => {
    const cleanName = (effectiveName || authFullName || studentName || 'Étudiant').trim();
    const finalPrefs: StudyPreferences = generatedPrefs
      ? { ...generatedPrefs, studentName: cleanName }
      : {
          studentName: cleanName,
          academicLevel: activeSystem.title,
          targetDailyStudyMinutes: 120,
          chronotype,
          pacing: selectedPacings[0] || 'pomodoro',
          combinedPacings: selectedPacings,
          focusBlockDuration: 25,
          breakBlockDuration: 5,
          weekendStudyEnabled: true,
          maxSessionsPerDay: 4,
          blockedSlots: [],
        };

    const payload = {
      subjects: generatedSubjects,
      classSlots: generatedSlots,
      preferences: finalPrefs,
      studySessions: generatedSessions,
      planTier: selectedPlan,
    };

    try {
      sessionStorage.setItem(PENDING_ONBOARDING_PAYLOAD_KEY, JSON.stringify(payload));
    } catch {
      // Ignorer si sessionStorage indisponible
    }

    return payload;
  };

  // Finaliser l'onboarding (Création de compte Email ou utilisateur déjà connecté)
  const handleFinalizeOnboarding = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setAuthError(null);

    if (isAuthenticated) {
      soundFX.playCelebrationFanfare();
      const payload = buildAndPersistFinalPayload(studentName);
      onComplete(payload);
      return;
    }

    if (!authFullName.trim() || authFullName.trim().length < 2) {
      setAuthError('Veuillez renseigner votre Prénom & Nom (au moins 2 caractères).');
      return;
    }

    const emailCheck = validateStrictEmail(authEmail);
    if (!emailCheck.isValid) {
      setAuthError(emailCheck.error || 'Adresse email invalide.');
      return;
    }

    if (!authPassword || authPassword.length < 6) {
      setAuthError('Le mot de passe doit comporter au moins 6 caractères.');
      return;
    }

    setIsSubmittingAuth(true);
    try {
      const cleanName = authFullName.trim();
      const cleanEmail = authEmail.trim();
      // Sauvegarder le planning extrait AVANT de déclencher l'inscription Firebase
      const payload = buildAndPersistFinalPayload(cleanName);

      const authUser = await signUpWithEmailReal(cleanEmail, authPassword, cleanName);

      const profile: UserAccount = {
        name: cleanName,
        email: authUser.email || cleanEmail,
        avatar:
          authUser.photoURL ||
          `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(cleanName)}`,
        googleId: authUser.uid,
        konanId: generateKonanId(authUser.uid || authUser.email || undefined),
        academicLevel: activeSystem.title,
        isLoggedIn: true,
        isDemo: false,
        planTier: selectedPlan,
        lastSyncedAt: new Date().toISOString(),
      };

      soundFX.playStreakIgniteChime();
      onLoginSuccess(profile);
      onComplete(payload);
    } catch (err: any) {
      sessionStorage.removeItem(PENDING_ONBOARDING_PAYLOAD_KEY);
      setAuthError(err?.message || 'Erreur lors de la création du compte.');
    } finally {
      setIsSubmittingAuth(false);
    }
  };

  // Inscription / Connexion Google
  const handleGoogleOnboardingAuth = async () => {
    setAuthError(null);
    setIsSubmittingAuth(true);
    try {
      soundFX.playCheckmarkPop();
      const hasExtractedSchedule = generatedSlots.length > 0 && generatedSubjects.length > 0;
      const pendingPayload = hasExtractedSchedule
        ? buildAndPersistFinalPayload(authFullName.trim() || studentName)
        : null;

      const realUser = await signInWithGoogleReal();
      if (realUser) {
        const resolvedName = realUser.displayName || authFullName.trim() || 'Étudiant';
        const profile: UserAccount = {
          name: resolvedName,
          email: realUser.email || '',
          avatar:
            realUser.photoURL ||
            `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(resolvedName)}`,
          googleId: realUser.uid,
          konanId: generateKonanId(realUser.uid || realUser.email || undefined),
          academicLevel: activeSystem.title,
          isLoggedIn: true,
          isDemo: false,
          planTier: selectedPlan,
          lastSyncedAt: new Date().toISOString(),
        };

        soundFX.playStreakIgniteChime();
        setShowExistingLogin(false);
        onLoginSuccess(profile);
        if (pendingPayload) {
          onComplete({
            ...pendingPayload,
            preferences: {
              ...pendingPayload.preferences,
              studentName: resolvedName,
            },
          });
        }
      }
    } catch (err: any) {
      sessionStorage.removeItem(PENDING_ONBOARDING_PAYLOAD_KEY);
      setAuthError(err?.message || 'Connexion Google interrompue.');
    } finally {
      setIsSubmittingAuth(false);
    }
  };

  // Connexion à un compte existant depuis l'écran d'accueil
  const handleExistingAccountLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);

    const emailCheck = validateStrictEmail(authEmail);
    if (!emailCheck.isValid) {
      setAuthError(emailCheck.error || 'Adresse email invalide.');
      return;
    }

    if (!authPassword || authPassword.length < 6) {
      setAuthError('Le mot de passe doit comporter au moins 6 caractères.');
      return;
    }

    setIsSubmittingAuth(true);
    try {
      const authUser = await signInWithEmailReal(authEmail.trim(), authPassword);
      const profile: UserAccount = {
        name: authUser.displayName || authEmail.split('@')[0] || 'Étudiant',
        email: authUser.email || authEmail.trim(),
        avatar:
          authUser.photoURL ||
          `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(
            authUser.displayName || 'User'
          )}`,
        googleId: authUser.uid,
        konanId: generateKonanId(authUser.uid || authUser.email || undefined),
        academicLevel: 'Licence Universitaire',
        isLoggedIn: true,
        isDemo: false,
        lastSyncedAt: new Date().toISOString(),
      };
      soundFX.playStreakIgniteChime();
      setShowExistingLogin(false);
      onLoginSuccess(profile);
    } catch (err: any) {
      setAuthError(err?.message || "Ce compte n'existe pas ou le mot de passe est incorrect.");
    } finally {
      setIsSubmittingAuth(false);
    }
  };

  const bubbleMessage: string = useMemo(() => {
    if (showExistingLogin) {
      return 'Content de te revoir ! Connecte-toi pour retrouver ton planning.';
    }
    switch (step) {
      case 'welcome':
        return "Salut ! Moi c'est Konan. Prêt à organiser tes études et réussir sans t'épuiser ?";
      case 'study_type':
        return "Choisis ton système d'études (LMD, BTS ou Lycée) : il catégorise l'extraction et structure ton fichier texte (.txt) !";
      case 'upload':
        return isAnalyzing
          ? `Je décortique ton emploi du temps et le transforme au format ${activeSystem.title}...`
          : liveParsedPreview.slots.length > 0
          ? `Extraction réussie : ${liveParsedPreview.slots.length} créneaux classés en fichier texte ${activeSystem.title} !`
          : `Importe ton emploi du temps (PDF ou Photo) pour l'extraire en fichier texte ${activeSystem.title}.`;
      case 'customize':
        return 'Vérifie tes matières extraites, ajuste leurs coefficients et choisis ta méthode de révision.';
      case 'account_setup':
        return `Ton planning (${generatedSlots.length} cours fixes + ${generatedSessions.length} séances d'étude) est prêt !`;
    }
  }, [
    step,
    showExistingLogin,
    isAnalyzing,
    liveParsedPreview.slots.length,
    activeSystem.title,
    generatedSlots.length,
    generatedSessions.length,
  ]);

  return (
    <div className="min-h-screen w-full bg-[#070B13] text-slate-100 flex flex-col justify-between relative overflow-x-hidden select-none font-sans">
      {/* Glow d'ambiance */}
      <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[520px] h-[320px] bg-indigo-600/15 blur-[130px] rounded-full" />

      {/* Inputs fichiers cachés */}
      <input
        ref={pdfInputRef}
        type="file"
        accept=".pdf,application/pdf"
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) handleProcessFile(f);
        }}
      />
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) handleProcessFile(f);
        }}
      />
      <input
        ref={galleryInputRef}
        type="file"
        accept="image/*,.png,.jpg,.jpeg,.webp"
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) handleProcessFile(f);
        }}
      />

      {/* MODALE CLÉ API GEMINI */}
      {showKeyModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-5 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Key className="w-4 h-4 text-amber-400" />
                <span>Configurer la Clé IA Gemini</span>
              </h3>
              <button
                type="button"
                onClick={() => setShowKeyModal(false)}
                className="text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Collez votre clé API Google Gemini pour activer l'extraction visuelle directe sur vos photos et PDF.
            </p>
            <input
              type="password"
              value={tempApiKey}
              onChange={(e) => setTempApiKey(e.target.value)}
              placeholder="AIzaSy..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs font-mono text-white focus:outline-none focus:border-indigo-500"
            />
            <div className="flex items-center justify-end gap-2 pt-1">
              <button
                type="button"
                onClick={() => setShowKeyModal(false)}
                className="px-3 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white cursor-pointer"
              >
                Annuler
              </button>
              <button
                type="button"
                onClick={handleSaveCustomKey}
                disabled={!tempApiKey.trim()}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-xs font-bold text-white cursor-pointer"
              >
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BARRE DE PROGRESSION SUPÉRIEURE */}
      {(step !== 'welcome' || showExistingLogin) && (
        <header className="w-full max-w-2xl mx-auto px-4 pt-5 pb-2 flex items-center gap-3 z-20">
          <button
            type="button"
            onClick={handleBack}
            className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all active:scale-95 cursor-pointer shrink-0"
            aria-label="Retour"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {!showExistingLogin ? (
            <div className="flex-1 flex items-center gap-3">
              <div className="flex-1 h-3.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800/80 p-0.5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 transition-all duration-300 relative"
                  style={{ width: `${progressPercent}%` }}
                >
                  <div className="absolute top-0.5 left-2 right-2 h-1 bg-white/30 rounded-full" />
                </div>
              </div>
              <span className="text-[11px] font-black text-slate-400 font-mono shrink-0">
                {currentStepIndex}/{STEP_ORDER.length - 1}
              </span>
            </div>
          ) : (
            <div className="flex-1" />
          )}

          <button
            type="button"
            onClick={toggleSound}
            className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all cursor-pointer shrink-0"
            title={isMuted ? 'Activer le son' : 'Couper le son'}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-slate-500" />
            ) : (
              <Volume2 className="w-4 h-4 text-emerald-400" />
            )}
          </button>
        </header>
      )}

      {/* CONTENU CENTRAL */}
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-3 flex flex-col justify-center z-10">
        {/* Cube Konan + Bulle de parole en haut des étapes */}
        {step !== 'welcome' && (
          <div className="mb-4 flex items-center gap-3 bg-slate-900/80 border border-slate-800/90 rounded-2xl p-3">
            <div className="shrink-0">
              <KonanCube size={54} showStars={false} glow={true} />
            </div>
            <p className="text-xs sm:text-sm font-bold text-white leading-snug text-left">
              « <WordByWordBubble text={bubbleMessage} speed={25} /> »
            </p>
          </div>
        )}

        <div className="w-full animate-in fade-in duration-200">
          {/* CONNEXION COMPTE EXISTANT */}
          {showExistingLogin && (
            <form
              onSubmit={handleExistingAccountLogin}
              className="space-y-4 bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-2xl"
            >
              <h2 className="text-xl font-black text-white">Connexion à ton compte</h2>

              {authError && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{authError}</span>
                </div>
              )}

              <div className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-400 block mb-1">Email</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={authEmail}
                      onChange={(e) => setAuthEmail(e.target.value)}
                      placeholder="etudiant@ecole.ci"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-400 block mb-1">Mot de passe</label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={authPassword}
                      onChange={(e) => setAuthPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-10 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmittingAuth}
                className="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-sm shadow-[0_4px_0_0_#3730A3] active:translate-y-0.5 transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmittingAuth ? 'Connexion en cours...' : 'SE CONNECTER'}
              </button>

              <button
                type="button"
                onClick={handleGoogleOnboardingAuth}
                disabled={isSubmittingAuth}
                className="w-full py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Continuer avec Google</span>
              </button>
            </form>
          )}

          {/* ÉTAPE 1 : ACCUEIL */}
          {!showExistingLogin && step === 'welcome' && (
            <div className="flex flex-col items-center text-center space-y-6 py-4 max-w-md mx-auto">
              <div
                className="relative group cursor-pointer"
                onClick={() => soundFX.playStreakIgniteChime()}
              >
                <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-cyan-500/25 to-purple-500/25 blur-2xl animate-pulse" />
                <KonanCube size={125} showStars={true} glow={true} className="animate-float" />
              </div>

              <div className="relative bg-slate-900/90 border border-slate-800/90 rounded-3xl p-4 shadow-2xl backdrop-blur-xl text-left">
                <p className="text-sm font-bold text-white leading-relaxed">
                  « <WordByWordBubble text={bubbleMessage} speed={35} /> »
                </p>
              </div>

              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">
                  Le copilote IA de tes{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                    révisions
                  </span>
                </h1>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Choisis ton système (<strong className="text-slate-200">LMD, BTS, Lycée</strong>), extrais ton EDT en fichier texte structuré et génère ton planning de révision sur mesure.
                </p>
              </div>

              <div className="w-full space-y-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    soundFX.playCheckmarkPop();
                    setStep('study_type');
                  }}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-sm sm:text-base tracking-wide uppercase shadow-[0_5px_0_#065f46] active:translate-y-1 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>JE CRÉE MON PLANNING 🚀</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                {!isAuthenticated && (
                  <button
                    type="button"
                    onClick={() => {
                      soundFX.playCheckmarkPop();
                      setShowExistingLogin(true);
                    }}
                    className="w-full py-3.5 px-6 rounded-2xl bg-slate-900 hover:bg-slate-800/90 text-slate-300 hover:text-white font-bold text-xs sm:text-sm border-2 border-slate-800 transition-all cursor-pointer uppercase"
                  >
                    J'AI DÉJÀ UN COMPTE • ME CONNECTER
                  </button>
                )}
              </div>
            </div>
          )}

          {/* ÉTAPE 2 : CHOIX DU SYSTÈME D'ÉTUDES (CATÉGORISE L'EXTRACTION .TXT) */}
          {!showExistingLogin && step === 'study_type' && (
            <div className="space-y-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-white">
                  1. Quel est ton système d'études ?
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Ce choix configure le moteur d'extraction et structure ton emploi du temps en fichier texte (<code className="text-indigo-400 font-mono">.txt</code>) adapté à ton niveau.
                </p>
              </div>

              <div className="space-y-3">
                {(
                  [
                    { id: 'lmd' as StudySystemChoice, icon: GraduationCap },
                    { id: 'bts' as StudySystemChoice, icon: Award },
                    { id: 'lycee' as StudySystemChoice, icon: BookOpen },
                  ] as const
                ).map((item) => {
                  const cfg = STUDY_SYSTEM_CONFIG[item.id];
                  const Icon = item.icon;
                  const selected = studyType === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelectStudySystem(item.id)}
                      className={`w-full p-4 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                        selected
                          ? 'bg-indigo-600/15 border-indigo-500 shadow-[0_4px_0_0_#4338CA]'
                          : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 shadow-[0_4px_0_0_#0F172A]'
                      }`}
                    >
                      <div className="flex items-start gap-3.5">
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                            selected
                              ? 'bg-indigo-500 text-white'
                              : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-extrabold text-white text-sm sm:text-base">
                              {cfg.title}
                            </span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                              {cfg.badge}
                            </span>
                            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                              {cfg.fileName}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                            {cfg.subtitle}
                          </p>
                          <div className="mt-2 px-2.5 py-1.5 rounded-lg bg-slate-950/90 border border-slate-800/80 font-mono text-[10px] text-slate-300 truncate">
                            {cfg.syntaxExample}
                          </div>
                        </div>
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-1 ${
                            selected ? 'border-indigo-400 bg-indigo-500' : 'border-slate-700'
                          }`}
                        >
                          {selected && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* ÉTAPE 3 : EXTRACTION & TRANSFORMATION EN FICHIER TEXTE (.TXT) + APERÇU ORGANISÉ */}
          {!showExistingLogin && step === 'upload' && (
            <div className="space-y-4">
              {/* En-tête + Sélecteur rapide de catégorie LMD / BTS / Lycée */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h2 className="text-lg sm:text-xl font-black text-white">
                    2. Extraction & Fichier Texte ({activeSystem.title})
                  </h2>
                  <p className="text-xs text-slate-400">
                    Ton document est extrait et converti en fichier <code className="text-indigo-400 font-mono">{activeSystem.fileName}</code>.
                  </p>
                </div>

                {!apiKeyConfigured && (
                  <button
                    type="button"
                    onClick={() => setShowKeyModal(true)}
                    className="px-2.5 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 text-[11px] font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Key className="w-3.5 h-3.5 text-amber-400" />
                    <span>🔑 Clé Gemini</span>
                  </button>
                )}
              </div>

              {/* Commutateur rapide LMD / BTS / Lycée qui re-catégorise le texte en direct */}
              <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800">
                {(['lmd', 'bts', 'lycee'] as StudySystemChoice[]).map((sysKey) => {
                  const cfg = STUDY_SYSTEM_CONFIG[sysKey];
                  const isSelected = (studyType || 'lmd') === sysKey;
                  return (
                    <button
                      key={sysKey}
                      type="button"
                      onClick={() => handleSelectStudySystem(sysKey)}
                      className={`py-2 px-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                        isSelected
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                      }`}
                    >
                      <span className="truncate">{cfg.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Alerte d'erreur éventuelle */}
              {extractionError && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{extractionError}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setExtractionError(null)}
                    className="text-slate-400 hover:text-white cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* 3 Boutons d'importation (PDF, Caméra, Galerie) */}
              <div className="grid grid-cols-3 gap-2.5">
                <button
                  type="button"
                  disabled={isAnalyzing}
                  onClick={() => pdfInputRef.current?.click()}
                  className="p-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 hover:border-indigo-500/50 flex flex-col items-center text-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
                >
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-extrabold text-white">Fichier PDF</span>
                  <span className="text-[10px] text-slate-400">Importer EDT</span>
                </button>

                <button
                  type="button"
                  disabled={isAnalyzing}
                  onClick={() => cameraInputRef.current?.click()}
                  className="p-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 hover:border-cyan-500/50 flex flex-col items-center text-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
                >
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center">
                    <Camera className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-extrabold text-white">Prendre Photo</span>
                  <span className="text-[10px] text-slate-400">Caméra directe</span>
                </button>

                <button
                  type="button"
                  disabled={isAnalyzing}
                  onClick={() => galleryInputRef.current?.click()}
                  className="p-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 hover:border-emerald-500/50 flex flex-col items-center text-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                    <ImageIcon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-extrabold text-white">Galerie Image</span>
                  <span className="text-[10px] text-slate-400">PNG, JPG, WEBP</span>
                </button>
              </div>

              {/* Indicateur d'extraction en cours */}
              {isAnalyzing && (
                <div className="p-3.5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 flex items-center gap-3 text-xs text-indigo-200">
                  <Loader2 className="w-4 h-4 text-indigo-400 animate-spin shrink-0" />
                  <span className="font-bold">{analysisStatus || 'Extraction en cours...'}</span>
                </div>
              )}

              {/* Exemples certifiés 1-clic */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-bold text-slate-500">Exemples certifiés :</span>
                <button
                  type="button"
                  onClick={() => handleLoadCertifiedDemo('lmd')}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[11px] font-semibold text-slate-300 hover:text-white cursor-pointer transition-colors"
                >
                  ESATIC (LMD)
                </button>
                <button
                  type="button"
                  onClick={() => handleLoadCertifiedDemo('bts')}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[11px] font-semibold text-slate-300 hover:text-white cursor-pointer transition-colors"
                >
                  BTS Info (CM/TD/TP)
                </button>
                <button
                  type="button"
                  onClick={() => handleLoadCertifiedDemo('lycee')}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[11px] font-semibold text-slate-300 hover:text-white cursor-pointer transition-colors"
                >
                  Terminale (Lycée)
                </button>
              </div>

              {/* ÉDITEUR DU FICHIER TEXTE EXTRAIT (.TXT) */}
              <div className="space-y-2 bg-slate-900/70 border border-slate-800 rounded-2xl p-3.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span className="text-xs font-extrabold text-white font-mono">
                      {activeSystem.fileName}
                    </span>
                    {liveParsedPreview.slots.length > 0 && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
                        ✓ {liveParsedPreview.slots.length} cours · {liveParsedPreview.subjects.length} matières
                      </span>
                    )}
                  </div>

                  {scheduleText.trim().length > 0 && (
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={handleCopyTxt}
                        className="px-2.5 py-1 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-[11px] font-bold text-slate-300 hover:text-white inline-flex items-center gap-1 cursor-pointer"
                      >
                        {isCopied ? (
                          <Check className="w-3 h-3 text-emerald-400" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                        <span>{isCopied ? 'Copié' : 'Copier'}</span>
                      </button>
                      <button
                        type="button"
                        onClick={handleDownloadTxt}
                        className="px-2.5 py-1 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/30 text-[11px] font-bold text-indigo-300 hover:text-white inline-flex items-center gap-1 cursor-pointer"
                      >
                        <Download className="w-3 h-3" />
                        <span>Télécharger .txt</span>
                      </button>
                    </div>
                  )}
                </div>

                <textarea
                  value={scheduleText}
                  onChange={(e) => setScheduleText(e.target.value)}
                  disabled={isAnalyzing}
                  rows={6}
                  placeholder={activeSystem.placeholder}
                  className="w-full bg-slate-950/90 border border-slate-800 focus:border-indigo-500 rounded-xl p-3 text-xs font-mono text-slate-100 placeholder:text-slate-600 focus:outline-none leading-relaxed resize-y"
                />
              </div>

              {/* APERÇU ORGANISÉ JOUR PAR JOUR (LUNDI -> SAMEDI) */}
              {slotsGroupedByDay.length > 0 && (
                <div className="space-y-2.5 bg-slate-900/50 border border-slate-800/80 rounded-2xl p-3.5 max-h-60 overflow-y-auto">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Organisation de ton EDT par Jour</span>
                    </span>
                    <span className="text-[11px] text-slate-400 font-semibold">
                      {slotsGroupedByDay.length} jour{slotsGroupedByDay.length > 1 ? 's' : ''} classé{slotsGroupedByDay.length > 1 ? 's' : ''}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {slotsGroupedByDay.map((dayGroup) => (
                      <div
                        key={dayGroup.dayIndex}
                        className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1.5"
                      >
                        <div className="text-[11px] font-black text-indigo-400 uppercase tracking-wider border-b border-slate-800 pb-1 flex items-center justify-between">
                          <span>{dayGroup.dayName}</span>
                          <span className="text-[10px] text-slate-500 font-mono">
                            {dayGroup.slots.length} créneau{dayGroup.slots.length > 1 ? 'x' : ''}
                          </span>
                        </div>
                        <div className="space-y-1">
                          {dayGroup.slots.map((slot) => (
                            <div
                              key={slot.id}
                              className="text-[11px] flex items-start justify-between gap-2 py-0.5"
                            >
                              <span className="font-mono text-emerald-400 shrink-0 font-semibold">
                                {slot.startTime}-{slot.endTime}
                              </span>
                              <span className="text-white font-bold text-right truncate flex-1">
                                {slot.subjectName}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ÉTAPE 4 : PERSONNALISATION (COEFFICIENTS, MÉTHODES KONAN & CHRONOTYPE) */}
          {!showExistingLogin && step === 'customize' && (
            <div className="space-y-5 max-h-[68vh] overflow-y-auto pr-1">
              {/* 1. Matières & Coefficients */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <h2 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-indigo-400" />
                    <span>1. Matières extraites & Coefficients</span>
                  </h2>
                  <span className="text-xs font-mono font-bold text-indigo-400">
                    {editableSubjects.filter(s => s.enabled).length}/{editableSubjects.length} actives
                  </span>
                </div>

                <div className="space-y-2">
                  {editableSubjects.map((subject) => (
                    <div
                      key={subject.id}
                      className={`p-3 rounded-xl border transition-all ${
                        subject.enabled
                          ? 'bg-slate-900/90 border-slate-800'
                          : 'bg-slate-900/30 border-slate-800/40 opacity-50'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0 flex-1">
                          <input
                            type="checkbox"
                            checked={subject.enabled}
                            onChange={() => handleToggleSubjectEnabled(subject.id)}
                            className="w-4 h-4 rounded text-indigo-600 bg-slate-950 border-slate-700 cursor-pointer shrink-0"
                          />
                          <span
                            className="w-2.5 h-2.5 rounded-full shrink-0"
                            style={{ backgroundColor: subject.color }}
                          />
                          <input
                            type="text"
                            value={subject.name}
                            onChange={(e) => handleUpdateSubjectName(subject.id, e.target.value)}
                            className="bg-transparent text-xs sm:text-sm font-bold text-white focus:outline-none border-b border-transparent focus:border-indigo-500 flex-1 min-w-0"
                          />
                        </div>

                        {/* Cible + Coeff */}
                        <div className="flex items-center gap-2 shrink-0">
                          <div className="relative flex items-center">
                            <select
                              value={subject.targetGrade}
                              onChange={(e) =>
                                handleUpdateSubjectTargetGrade(subject.id, Number(e.target.value))
                              }
                              className="appearance-none bg-slate-950 border border-slate-800 rounded-lg px-2 py-1 pr-5 text-[11px] font-bold text-slate-200 focus:outline-none cursor-pointer"
                            >
                              <option value={12}>Cible 12/20</option>
                              <option value={14}>Cible 14/20</option>
                              <option value={16}>Cible 16/20</option>
                              <option value={18}>Cible 18/20</option>
                            </select>
                            <ChevronDown className="w-3 h-3 text-slate-400 pointer-events-none absolute right-1.5" />
                          </div>

                          <div className="flex items-center gap-1 bg-slate-950 border border-slate-800 rounded-lg p-1">
                            <button
                              type="button"
                              onClick={() => handleUpdateSubjectCoeff(subject.id, -1)}
                              className="w-6 h-6 rounded bg-slate-900 hover:bg-slate-800 flex items-center justify-center text-slate-300 cursor-pointer"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-mono font-black text-indigo-400 px-1.5">
                              C.{subject.coefficient}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleUpdateSubjectCoeff(subject.id, 1)}
                              className="w-6 h-6 rounded bg-slate-900 hover:bg-slate-800 flex items-center justify-center text-slate-300 cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Recommandation KONAN & Méthode d'Espacement */}
              <div className="space-y-2.5 pt-2 border-t border-slate-800/80">
                <h2 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>2. Méthode de Révision & Diagnostic KONAN</span>
                </h2>

                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-indigo-950/60 via-slate-900/90 to-slate-900 border border-indigo-500/30 space-y-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <BarChart2 className="w-4 h-4 text-indigo-400" />
                    <span className="text-xs font-black uppercase tracking-wider text-indigo-300">
                      Recommandation IA :
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      {getPacingStrategy(pacingRecommendation.primaryId).title}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                      {pacingRecommendation.contextTag}
                    </span>
                  </div>
                  <p
                    className={`text-xs text-slate-300 leading-relaxed ${
                      showFullDiagnostic ? '' : 'line-clamp-2'
                    }`}
                  >
                    {pacingRecommendation.rationale}
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowFullDiagnostic(!showFullDiagnostic)}
                    className="text-[11px] font-bold text-indigo-400 hover:text-white cursor-pointer"
                  >
                    {showFullDiagnostic ? 'Voir moins ▴' : 'Lire le diagnostic complet ▾'}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {PACING_STRATEGIES.map((strategy) => {
                    const isSelected = selectedPacings.includes(strategy.id);
                    const isAllowed = isPacingAllowedForPlan(strategy.id, 'plus');
                    return (
                      <button
                        key={strategy.id}
                        type="button"
                        onClick={() => {
                          soundFX.playCheckmarkPop();
                          setSelectedPacings([strategy.id]);
                        }}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-indigo-600/20 border-indigo-500 ring-1 ring-indigo-500/40'
                            : isAllowed
                            ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                            : 'bg-slate-900/40 border-slate-800/50 opacity-75'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-extrabold text-white truncate">
                            {strategy.title}
                          </span>
                          <span className="text-[10px] font-mono text-indigo-300 shrink-0">
                            {strategy.badge}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                          {strategy.tagline}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Chronotype */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <label className="text-xs font-extrabold text-slate-300 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-indigo-400" />
                  <span>3. Moment de la journée où tu es le plus concentré</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'morning' as Chronotype, label: 'Matin (07h - 12h)', icon: Sun },
                    { id: 'afternoon' as Chronotype, label: 'Après-midi (13h - 17h)', icon: Flame },
                    { id: 'evening' as Chronotype, label: 'Soir (18h - 22h)', icon: Sunset },
                    { id: 'night' as Chronotype, label: 'Nuit (22h - 02h)', icon: Moon },
                  ].map((c) => {
                    const Icon = c.icon;
                    const isSelected = chronotype === c.id;
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => {
                          soundFX.playCheckmarkPop();
                          setChronotype(c.id);
                        }}
                        className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-indigo-600 border-indigo-400 text-white'
                            : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-white'
                        }`}
                      >
                        <Icon className="w-4 h-4 shrink-0" />
                        <span>{c.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ÉTAPE 5 : FORMULE & CRÉATION DU COMPTE POUR SAUVEGARDER LE PLANNING */}
          {!showExistingLogin && step === 'account_setup' && (
            <div className="space-y-4">
              {/* Carte récapitulative du planning généré */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <span className="text-lg font-black text-indigo-400 block">
                    {generatedSlots.length}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">
                    Cours extraits
                  </span>
                </div>
                <div className="p-2 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <span className="text-lg font-black text-emerald-400 block">
                    {generatedSessions.length}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">
                    Séances d'étude
                  </span>
                </div>
                <div className="p-2 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <span className="text-lg font-black text-amber-400 block">
                    {generatedSubjects.length}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">
                    Matières ({activeSystem.title})
                  </span>
                </div>
              </div>

              {/* Sélecteur de formule */}
              <div className="grid grid-cols-3 gap-2">
                {(
                  [
                    { id: 'free', name: 'Gratuit', price: '0 FCFA', badge: 'Essentiel' },
                    { id: 'pro', name: 'Pro', price: '1 000 FCFA', badge: 'Populaire' },
                    { id: 'plus', name: 'Plus', price: '2 500 FCFA', badge: 'IA Complète' },
                  ] as const
                ).map((plan) => {
                  const selected = selectedPlan === plan.id;
                  return (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => {
                        soundFX.playCheckmarkPop();
                        setSelectedPlan(plan.id);
                      }}
                      className={`p-3 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                        selected
                          ? 'bg-indigo-600/15 border-indigo-500'
                          : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-white">{plan.name}</span>
                        {plan.id !== 'free' && <Crown className="w-3.5 h-3.5 text-amber-400" />}
                      </div>
                      <span className="text-xs font-extrabold text-indigo-400 block mt-0.5">
                        {plan.price}
                      </span>
                      <span className="text-[10px] text-slate-400 block mt-0.5">{plan.badge}</span>
                    </button>
                  );
                })}
              </div>

              {/* Création du compte ou accès direct si déjà connecté */}
              {isAuthenticated ? (
                <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 text-center space-y-4">
                  <ShieldCheck className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h3 className="text-lg font-black text-white">
                    Tout est prêt, {studentName} !
                  </h3>
                  <button
                    type="button"
                    onClick={() => handleFinalizeOnboarding()}
                    className="w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-base shadow-[0_5px_0_0_#047857] active:translate-y-1 transition-all cursor-pointer"
                  >
                    ACCÉDER À MON EMPLOI DU TEMPS
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleFinalizeOnboarding}
                  className="space-y-3.5 bg-slate-900/90 border border-slate-800 rounded-3xl p-5 shadow-xl"
                >
                  <h3 className="text-base font-black text-white">
                    Crée ton profil pour sauvegarder ton emploi du temps
                  </h3>

                  {authError && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{authError}</span>
                    </div>
                  )}

                  <div className="relative">
                    <UserIcon className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={authFullName}
                      onChange={(e) => setAuthFullName(e.target.value)}
                      placeholder="Ton prénom & nom (ex: Christ Boni)"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={authEmail}
                      onChange={(e) => setAuthEmail(e.target.value)}
                      placeholder="Ton adresse email"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      minLength={6}
                      value={authPassword}
                      onChange={(e) => setAuthPassword(e.target.value)}
                      placeholder="Choisis un mot de passe (min. 6 caractères)"
                      className="w-full pl-10 pr-10 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmittingAuth}
                    className="w-full py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm tracking-wide shadow-[0_4px_0_0_#047857] active:translate-y-0.5 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmittingAuth
                      ? 'Création & sauvegarde en cours...'
                      : 'CRÉER MON COMPTE & OUVRIR MON PLANNING'}
                  </button>

                  <button
                    type="button"
                    onClick={handleGoogleOnboardingAuth}
                    disabled={isSubmittingAuth}
                    className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Continuer rapidement avec Google</span>
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </main>

      {/* PIED DE PAGE AVEC BOUTON CONTINUER */}
      {!showExistingLogin && (step === 'study_type' || step === 'upload' || step === 'customize') && (
        <footer className="w-full border-t border-slate-800/80 bg-[#070B13]/95 backdrop-blur-md px-4 py-3.5 z-20">
          <div className="max-w-2xl mx-auto">
            {step === 'study_type' && (
              <button
                type="button"
                disabled={!studyType}
                onClick={() => {
                  soundFX.playCheckmarkPop();
                  setStep('upload');
                }}
                className="w-full py-3.5 px-6 rounded-2xl font-extrabold text-sm tracking-wide bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_4px_0_0_#3730A3] active:translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>CONTINUER AVEC LE {activeSystem.title.toUpperCase()}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            {step === 'upload' && (
              <button
                type="button"
                disabled={isAnalyzing || liveParsedPreview.slots.length === 0}
                onClick={handleProceedToCustomize}
                className={`w-full py-3.5 px-6 rounded-2xl font-extrabold text-sm tracking-wide transition-all flex items-center justify-center gap-2 ${
                  !isAnalyzing && liveParsedPreview.slots.length > 0
                    ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-[0_4px_0_0_#047857] cursor-pointer active:translate-y-0.5'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                }`}
              >
                <span>
                  VALIDER L'EXTRACTION ({liveParsedPreview.slots.length} COURS ·{' '}
                  {liveParsedPreview.subjects.length} MATIÈRES)
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            {step === 'customize' && (
              <button
                type="button"
                disabled={editableSubjects.filter(s => s.enabled).length === 0}
                onClick={handleProceedToAccountSetup}
                className="w-full py-3.5 px-6 rounded-2xl font-extrabold text-sm tracking-wide bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_4px_0_0_#3730A3] active:translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>
                  GÉNÉRER MON PLANNING ({editableSubjects.filter(s => s.enabled).length} MATIÈRES)
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </footer>
      )}
    </div>
  );
};
