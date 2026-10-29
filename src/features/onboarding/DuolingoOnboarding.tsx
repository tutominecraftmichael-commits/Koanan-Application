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
  VolumeX,
  Layers,
  Cpu,
  LogIn
} from 'lucide-react';
import { KonanCube } from '../../components/common/KonanCube';
import { AnimatedCounter } from '../../components/common/AnimatedCounter';
import { WaitlistModal } from '../../components/common/WaitlistModal';
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
import type { CurriculumGradeLevel } from '../../lib/curriculum/types';
import { GRADE_LEVELS } from '../../lib/curriculum/types';

export const PENDING_ONBOARDING_PAYLOAD_KEY = 'konan_pending_onboarding_payload';

export function isLocalAdminEnvironment(): boolean {
  if (typeof window === 'undefined') return false;
  const host = window.location.hostname;
  return (
    host === 'localhost' ||
    host === '127.0.0.1' ||
    host === '::1' ||
    host.endsWith('.local') ||
    (import.meta.env.DEV && /^192\.168\.|^10\.|^172\.(1[6-9]|2\d|3[0-1])\./.test(host))
  );
}

export interface DuolingoOnboardingProps {
  onComplete: (data: {
    subjects: Subject[];
    classSlots: ClassSlot[];
    preferences: StudyPreferences;
    studySessions: StudySession[];
    planTier?: 'free' | 'pro' | 'plus';
    launchProWizard?: boolean;
  }) => void;
  onOpenLogin: () => void;
  onOpenAdmin?: () => void;
  currentUser: UserAccount | null;
  onLoginSuccess: (user: UserAccount) => void;
}

type OnboardingStepId =
  | 'welcome'
  | 'study_type'
  | 'upload'
  | 'grade_level'
  | 'customize'
  | 'account_setup'
  | 'pricing_models';

type StudySystemChoice = 'lmd' | 'bts' | 'lycee';

const STEP_ORDER: OnboardingStepId[] = [
  'welcome',
  'study_type',
  'upload',
  'grade_level',
  'customize',
  'account_setup',
  'pricing_models',
];

interface AccompanimentPlanSpec {
  id: 'free' | 'pro' | 'plus';
  name: string;
  tagline: string;
  priceValue: number;
  currency: string;
  period: string;
  description: string;
  badge: string | null;
  popular: boolean;
  comingSoon: boolean;
  accentGradient: string;
  ctaLabel: string;
  features: {
    text: string;
    detail?: string;
    highlight?: boolean;
  }[];
}

const ACCOMPANIMENT_PLANS: AccompanimentPlanSpec[] = [
  {
    id: 'free',
    name: 'KONAN',
    tagline: 'Découverte • Autonomie',
    priceValue: 0,
    currency: 'F CFA',
    period: '/ mois',
    description: 'Gratuit pour toujours • Sans carte requise. Idéal pour découvrir la planification intelligente et structurer ses révisions.',
    badge: 'Gratuit • Autonomie',
    popular: false,
    comingSoon: false,
    accentGradient: 'from-slate-700 to-slate-800',
    ctaLabel: 'Continuer avec KONAN (Gratuit)',
    features: [
      {
        text: "Importation & extraction d'EDT",
        detail: 'Import via PDF, scan photo ou fichier texte (limité à 3 générations / imports gratuits).',
        highlight: true,
      },
      {
        text: "Génération d'EDT personnalisé",
        detail: "Planning d'étude adapté à votre filière (LMD, BTS, Lycée) pour structurer vos révisions et réduire le surmenage.",
      },
      {
        text: 'Ajustement des matières & coefficients',
        detail: "Ajout et personnalisation des cours avec recalcul instantané des créneaux d'étude.",
      },
      {
        text: "Toutes les 5 Méthodes d'apprentissage incluses (1 active à la fois)",
        detail: '• Pomodoro • Active Recall & Spaced Repetition • Technique de Feynman • Time Blocking • Règle des 2 minutes.',
      },
    ],
  },
  {
    id: 'pro',
    name: 'KONAN PRO',
    tagline: 'Performance Maximale • Version Ouverte',
    priceValue: 1200,
    currency: 'F CFA',
    period: '/ mois',
    description: 'Accès complet 100% offert pendant la phase de lancement.',
    badge: 'Recommandé • Version Ouverte',
    popular: true,
    comingSoon: false,
    accentGradient: 'from-amber-400 via-amber-500 to-indigo-600',
    ctaLabel: 'Configurer mon EDT Pro avec Konan',
    features: [
      {
        text: "Imports & générations d'EDT illimités",
        detail: "Importez autant d'emplois du temps que souhaité via PDF, scan photo ou texte (sans aucun blocage).",
        highlight: true,
      },
      {
        text: "Combinaison de méthodes Premium (Jusqu'à 3 simultanées)",
        detail: "Activez et combinez jusqu'à 3 techniques d'espacement simultanément dans le même planning (contre 1 seule en version gratuite) pour alterner selon vos matières.",
        highlight: true,
      },
      {
        text: "Dates d'examens & Devoirs Surveillés (DS)",
        detail: "Intégrez vos épreuves ; l'algorithme s'adapte avec compte à rebours interactif (J-X) et sur-priorisation automatique.",
        highlight: true,
      },
      {
        text: 'Synchronisation Google Calendar (.ics)',
        detail: 'Export direct de votre planning personnalisé avec alertes automatiques et intégration nette.',
      },
      {
        text: 'Recommandations algorithmiques de Konan',
        detail: 'Recommandations intelligentes de la meilleure combinaison de techniques selon la fatigue et vos heures de cours.',
      },
    ],
  },
  {
    id: 'plus',
    name: 'KONAN PLUS',
    tagline: 'Fonctionnalités Futures • Élite',
    priceValue: 2500,
    currency: 'F CFA',
    period: '/ mois',
    description: 'Tout ce qui est dans KONAN PRO, plus un écosystème collaboratif et audio complet.',
    badge: 'Élite • Guide EDT Pro inclus',
    popular: false,
    comingSoon: false,
    accentGradient: 'from-purple-500 via-violet-600 to-fuchsia-600',
    ctaLabel: 'Configurer mon EDT Plus avec Konan',
    features: [
      {
        text: 'Planning conditionné par vos 3 Objectifs Scolaires',
        detail: "• Passer l'année avec 12 de moyenne • Passer avec mention (16/20) • Devenir major de promotion (18/20+).",
        highlight: true,
      },
      {
        text: "Pack Étudiant (Jusqu'à 5 comptes complets inclus)",
        detail: "Invitez jusqu'à 4 camarades via leur adresse email. Chaque membre bénéficie de l'accès Pro & Plus intégral.",
        highlight: true,
      },
      {
        text: 'Lecteur Audio & Musiques de révision',
        detail: 'Ambiances sonores intégrées dédiées au focus : Ondes Alpha concentration profonde, Lofi Chill révision, Bruit blanc.',
        highlight: true,
      },
    ],
  },
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
  onOpenLogin,
  onOpenAdmin,
  currentUser: _currentUser,
  onLoginSuccess,
}) => {
  const [step, setStep] = useState<OnboardingStepId>('welcome');
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [showExistingLogin, setShowExistingLogin] = useState<boolean>(false);

  // Accès Administrateur (Strictement accessible uniquement en local)
  const isLocalAdminAllowed = useMemo(() => isLocalAdminEnvironment(), []);
  const [showAdminModal, setShowAdminModal] = useState<boolean>(false);
  const [adminCodeInput, setAdminCodeInput] = useState<string>('');
  const [adminError, setAdminError] = useState<string | null>(null);

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

  // Étape 5 & 6 : Compte (Nouvel utilisateur) puis Modèles d'accompagnement
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'pro' | 'plus'>('pro');
  const [selectedGradeLevel, setSelectedGradeLevel] = useState<CurriculumGradeLevel>('terminale_d');
  const [customFiliere, setCustomFiliere] = useState<string>('');
  const [generatedSubjects, setGeneratedSubjects] = useState<Subject[]>([]);
  const [generatedSlots, setGeneratedSlots] = useState<ClassSlot[]>([]);
  const [generatedSessions, setGeneratedSessions] = useState<StudySession[]>([]);
  const [generatedPrefs, setGeneratedPrefs] = useState<StudyPreferences | null>(null);

  // États Authentification (Toujours vierges au départ : aucun nom pré-attribué)
  const [authFullName, setAuthFullName] = useState<string>('');
  const [authEmail, setAuthEmail] = useState<string>('');
  const [authPassword, setAuthPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [accountExistsRedirect, setAccountExistsRedirect] = useState<boolean>(false);
  const [canCreateFromLogin, setCanCreateFromLogin] = useState<boolean>(false);
  const [isSubmittingAuth, setIsSubmittingAuth] = useState<boolean>(false);
  const [registeredProfile, setRegisteredProfile] = useState<UserAccount | null>(null);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState<boolean>(false);

  useEffect(() => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    } catch {
      // Ignore
    }
  }, [step, showExistingLogin]);

  useEffect(() => {
    return () => {
      try {
        sessionStorage.removeItem('konan_onboarding_in_progress');
      } catch {
        // Ignore sessionStorage cleanup error
      }
    };
  }, []);

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

    // Détection automatique intelligente de la classe et série à partir de l'EDT
    const textToScan = `${scheduleText} ${uploadedFileName}`.toLowerCase();
    let detectedGrade: CurriculumGradeLevel | null = null;

    if (/\b(?:ta1|tle\s*a1|terminale\s*a1|t\.?a\.?1)\b/i.test(textToScan)) {
      detectedGrade = 'terminale_a1';
    } else if (/\b(?:ta2|tle\s*a2|terminale\s*a2|t\.?a\.?2)\b/i.test(textToScan)) {
      detectedGrade = 'terminale_a2';
    } else if (/\b(?:1a1|1re\s*a1|1ère\s*a1|premiere\s*a1)\b/i.test(textToScan)) {
      detectedGrade = 'premiere_a1';
    } else if (/\b(?:1a2|1re\s*a2|1ère\s*a2|premiere\s*a2)\b/i.test(textToScan)) {
      detectedGrade = 'premiere_a2';
    } else if (/\b(?:tc|tle\s*c|terminale\s*c|t\.?c)\b/i.test(textToScan)) {
      detectedGrade = 'terminale_c';
    } else if (/\b(?:td|tle\s*d|terminale\s*d|t\.?d)\b/i.test(textToScan)) {
      detectedGrade = 'terminale_d';
    } else if (/\b(?:1c|1re\s*c|1ère\s*c|premiere\s*c)\b/i.test(textToScan)) {
      detectedGrade = 'premiere_c';
    } else if (/\b(?:1d|1re\s*d|1ère\s*d|premiere\s*d)\b/i.test(textToScan)) {
      detectedGrade = 'premiere_d';
    } else if (/\b(?:2c|2nde\s*c|seconde\s*c)\b/i.test(textToScan)) {
      detectedGrade = 'seconde_c';
    } else if (/\b(?:2a|2de\s*a|seconde\s*a)\b/i.test(textToScan)) {
      detectedGrade = 'seconde_a';
    } else if (/\b(?:3e|3ème|3eme|troisieme)\b/i.test(textToScan)) {
      detectedGrade = '3eme';
    } else if (/\b(?:4e|4ème|4eme|quatrieme)\b/i.test(textToScan)) {
      detectedGrade = '4eme';
    } else if (/\b(?:5e|5ème|5eme|cinquieme)\b/i.test(textToScan)) {
      detectedGrade = '5eme';
    } else if (/\b(?:6e|6ème|6eme|sixieme)\b/i.test(textToScan)) {
      detectedGrade = '6eme';
    }

    if (detectedGrade) {
      setSelectedGradeLevel(detectedGrade);
    }

    soundFX.playCheckmarkPop();
    // Passage à l'étape du choix de niveau d'étude (Classe & Série ou Filière)
    setStep('grade_level');
  };

  const handleProceedFromGradeLevelToCustomize = () => {
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

  // Valider l'étape 4 (Personnalisation) -> Construire le planning complet et passer à l'étape 5 (Informations de connexion du nouvel utilisateur)
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
      authFullName.trim() || 'Étudiant',
      chronotype,
      primaryPacing,
      selectedPacings,
      selectedPlan
    );

    setGeneratedSubjects(built.subjects);
    setGeneratedSlots(built.classSlots);
    setGeneratedPrefs(built.preferences);
    setGeneratedSessions(built.studySessions);

    try {
      sessionStorage.setItem('konan_onboarding_in_progress', 'true');
    } catch {
      // Ignore sessionStorage error
    }

    setAuthError(null);
    setAccountExistsRedirect(false);
    soundFX.playSuccessChime();
    setStep('account_setup');
  };

  // Construit et persiste le payload final d'onboarding pour garantir zéro perte lors de la création de compte / Google Auth
  const buildAndPersistFinalPayload = (
    effectiveName?: string,
    chosenPlan?: 'free' | 'pro' | 'plus'
  ) => {
    const cleanName = (
      effectiveName ||
      registeredProfile?.name ||
      authFullName ||
      'Étudiant'
    ).trim();
    const effectiveTier = chosenPlan || selectedPlan;
    const gradeLevelLabel = GRADE_LEVELS.find(g => g.id === selectedGradeLevel)?.label || activeSystem.title;
    const resolvedAcademicLevel = studyType === 'lycee' ? gradeLevelLabel : (customFiliere.trim() || activeSystem.title);
    const finalPrefs: StudyPreferences = generatedPrefs
      ? {
          ...generatedPrefs,
          studentName: cleanName,
          gradeLevel: selectedGradeLevel,
          academicLevel: resolvedAcademicLevel,
        }
      : {
          studentName: cleanName,
          academicLevel: resolvedAcademicLevel,
          gradeLevel: selectedGradeLevel,
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
      planTier: effectiveTier,
    };

    try {
      sessionStorage.setItem(PENDING_ONBOARDING_PAYLOAD_KEY, JSON.stringify(payload));
    } catch {
      // Ignorer si sessionStorage indisponible
    }

    return payload;
  };

  // Étape 5 : Validation des informations de connexion du NOUVEL utilisateur (avec rejet strict si l'email/Gmail existe déjà en base)
  const handleRegisterNewAccount = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setAuthError(null);
    setAccountExistsRedirect(false);

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
      const emailPrefix = authEmail.split('@')[0];
      const cleanName = emailPrefix ? emailPrefix.charAt(0).toUpperCase() + emailPrefix.slice(1) : 'Étudiant';
      const cleanEmail = authEmail.trim().toLowerCase();

      try {
        sessionStorage.setItem('konan_onboarding_in_progress', 'true');
      } catch {
        // Ignore
      }

      // Inscription ou connexion automatique sans blocage artificiel
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

      setRegisteredProfile(profile);
      buildAndPersistFinalPayload(cleanName, selectedPlan);
      soundFX.playStreakIgniteChime();
      setStep('pricing_models');
    } catch (err: any) {
      const msg = err?.message || '';
      if (
        err?.code === 'auth/email-already-in-use' ||
        msg.toLowerCase().includes('existe déjà') ||
        msg.toLowerCase().includes('already-in-use')
      ) {
        setAccountExistsRedirect(true);
        setAuthError(msg || 'Ce compte existe déjà avec cette adresse email. Veuillez vous connecter directement.');
      } else {
        setAuthError(msg || 'Erreur lors de la création du compte.');
      }
    } finally {
      setIsSubmittingAuth(false);
    }
  };

  // Étape 5 : Authentification Google (création ou reconnexion fluide sans blocage)
  const handleGoogleNewRegistration = async () => {
    setAuthError(null);
    setAccountExistsRedirect(false);
    setIsSubmittingAuth(true);
    try {
      soundFX.playCheckmarkPop();
      try {
        sessionStorage.setItem('konan_onboarding_in_progress', 'true');
      } catch {
        // Ignore
      }

      const realUser = await signInWithGoogleReal();
      if (realUser) {
        const resolvedName = realUser.displayName || authFullName.trim() || 'Étudiant';
        setAuthFullName(resolvedName);
        if (realUser.email) {
          setAuthEmail(realUser.email);
        }

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

        setRegisteredProfile(profile);
        buildAndPersistFinalPayload(resolvedName, selectedPlan);
        soundFX.playStreakIgniteChime();
        setStep('pricing_models');
      }
    } catch (err: any) {
      if (err?.code === 'auth/unauthorized-domain' || err?.message === 'UNAUTHORIZED_DOMAIN') {
        setAuthError('Domaine non autorisé. Ouvrez l\'application sur http://localhost:5173 (et non 127.0.0.1) ou utilisez la connexion par Email.');
      } else {
        setAuthError(err?.message || 'Inscription Google interrompue.');
      }
    } finally {
      setIsSubmittingAuth(false);
    }
  };

  // Étape 6 : Choix final du modèle d'accompagnement (Gratuit, Pro, Plus) -> Ouverture du planning ou Guide EDT Pro avec Konan
  const handleSelectAccompanimentModel = (planId: 'free' | 'pro' | 'plus') => {
    soundFX.playCheckmarkPop();
    setSelectedPlan(planId);

    const effectiveName = (registeredProfile?.name || authFullName || 'Étudiant').trim();
    const payload = buildAndPersistFinalPayload(effectiveName, planId);

    try {
      sessionStorage.removeItem('konan_onboarding_in_progress');
    } catch {
      // Ignore
    }

    soundFX.playCelebrationFanfare();

    if (registeredProfile) {
      const updatedProfile: UserAccount = {
        ...registeredProfile,
        name: effectiveName,
        planTier: planId,
      };
      onLoginSuccess(updatedProfile);
    }
    onComplete({
      ...payload,
      launchProWizard: planId === 'pro' || planId === 'plus',
    });
  };

  // Connexion Google pour un compte existant (depuis l'écran de connexion directe)
  const handleGoogleExistingLogin = async () => {
    setAuthError(null);
    setIsSubmittingAuth(true);
    try {
      soundFX.playCheckmarkPop();
      try {
        sessionStorage.removeItem('konan_onboarding_in_progress');
      } catch {
        // Ignore
      }
      const hasExtractedSchedule = generatedSlots.length > 0 && generatedSubjects.length > 0;
      const realUser = await signInWithGoogleReal();
      if (realUser) {
        const resolvedName = realUser.displayName || authFullName.trim() || 'Étudiant';
        const pendingPayload = hasExtractedSchedule
          ? buildAndPersistFinalPayload(resolvedName, selectedPlan)
          : null;

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
          lastSyncedAt: new Date().toISOString(),
        };

        soundFX.playStreakIgniteChime();
        setShowExistingLogin(false);
        if (pendingPayload) {
          onComplete({ ...pendingPayload, launchProWizard: false });
        }
        onLoginSuccess(profile);
      }
    } catch (err: any) {
      setAuthError(err?.message || 'Connexion Google interrompue.');
    } finally {
      setIsSubmittingAuth(false);
    }
  };

  // Connexion par Email/Mot de passe à un compte existant
  const handleExistingAccountLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setCanCreateFromLogin(false);

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
      try {
        sessionStorage.removeItem('konan_onboarding_in_progress');
      } catch {
        // Ignore
      }
      const hasExtractedSchedule = generatedSlots.length > 0 && generatedSubjects.length > 0;
      const authUser = await signInWithEmailReal(authEmail.trim(), authPassword);
      const resolvedName = authUser.displayName || authEmail.split('@')[0] || 'Étudiant';
      const pendingPayload = hasExtractedSchedule
        ? buildAndPersistFinalPayload(resolvedName, selectedPlan)
        : null;

      const profile: UserAccount = {
        name: resolvedName,
        email: authUser.email || authEmail.trim(),
        avatar:
          authUser.photoURL ||
          `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(resolvedName)}`,
        googleId: authUser.uid,
        konanId: generateKonanId(authUser.uid || authUser.email || undefined),
        academicLevel: activeSystem.title || 'Licence Universitaire',
        isLoggedIn: true,
        isDemo: false,
        lastSyncedAt: new Date().toISOString(),
      };
      soundFX.playStreakIgniteChime();
      setShowExistingLogin(false);
      if (pendingPayload) {
        onComplete({ ...pendingPayload, launchProWizard: false });
      }
      onLoginSuccess(profile);
    } catch (err: any) {
      const msg = err?.message || '';
      if (err?.code === 'auth/user-not-found' || msg.includes("n'existe pas")) {
        setCanCreateFromLogin(true);
        setAuthError("Ce compte n'existe pas encore. Vous pouvez le créer directement en un clic ci-dessous avec ce mot de passe :");
      } else {
        setAuthError(msg || "Ce compte n'est pas reconnu ou le mot de passe est incorrect.");
      }
    } finally {
      setIsSubmittingAuth(false);
    }
  };

  // Création directe d'un compte à partir des identifiants saisis dans le formulaire de connexion
  const handleCreateAccountFromExistingForm = async () => {
    setAuthError(null);
    setCanCreateFromLogin(false);
    setIsSubmittingAuth(true);
    try {
      const emailPrefix = authEmail.split('@')[0];
      const cleanName = emailPrefix ? emailPrefix.charAt(0).toUpperCase() + emailPrefix.slice(1) : 'Étudiant';
      const cleanEmail = authEmail.trim().toLowerCase();

      const authUser = await signUpWithEmailReal(cleanEmail, authPassword, cleanName);
      const hasExtractedSchedule = generatedSlots.length > 0 && generatedSubjects.length > 0;
      const pendingPayload = hasExtractedSchedule
        ? buildAndPersistFinalPayload(cleanName, selectedPlan)
        : null;

      const profile: UserAccount = {
        name: cleanName,
        email: authUser.email || cleanEmail,
        avatar:
          authUser.photoURL ||
          `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(cleanName)}`,
        googleId: authUser.uid,
        konanId: generateKonanId(authUser.uid || authUser.email || undefined),
        academicLevel: activeSystem.title || 'Licence Universitaire',
        isLoggedIn: true,
        isDemo: false,
        planTier: selectedPlan,
        lastSyncedAt: new Date().toISOString(),
      };

      soundFX.playStreakIgniteChime();
      setShowExistingLogin(false);
      if (pendingPayload) {
        onComplete({ ...pendingPayload, launchProWizard: false });
      }
      onLoginSuccess(profile);
    } catch (createErr: any) {
      setAuthError(createErr?.message || 'Impossible de créer le compte.');
    } finally {
      setIsSubmittingAuth(false);
    }
  };

  const bubbleMessage: string = useMemo(() => {
    if (showExistingLogin) {
      return 'Content de te revoir ! Connecte-toi directement avec tes identifiants existants.';
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
      case 'grade_level':
        return studyType === 'lycee'
          ? "Quelle est ta classe et ta série ? Cela me permet d'activer le programme officiel de Côte d'Ivoire !"
          : "Précise ta filière d'études pour ajuster ton accompagnement sur mesure.";
      case 'customize':
        return 'Vérifie tes matières extraites, ajuste leurs coefficients et choisis ta méthode de révision.';
      case 'account_setup':
        return `Tout est prêt ! Renseigne tes informations de connexion avec une adresse Gmail/Email pour sauvegarder ton planning.`;
      case 'pricing_models':
        return `Parfait ! Choisis maintenant ton modèle d'accompagnement KONAN (Gratuit, Pro ou Plus) pour ouvrir ton planning.`;
    }
  }, [
    step,
    studyType,
    showExistingLogin,
    isAnalyzing,
    liveParsedPreview.slots.length,
    activeSystem.title,
  ]);

  return (
    <div className="min-h-screen w-full bg-slate-50 dark:bg-[#070B13] text-slate-900 dark:text-slate-100 flex flex-col justify-between relative overflow-x-hidden select-none font-sans transition-colors">
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

      {/* MODALE ACCÈS ADMINISTRATEUR (STRICTEMENT ACCESSIBLE EN LOCAL) */}
      {isLocalAdminAllowed && showAdminModal && onOpenAdmin && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-sm w-full p-5 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Lock className="w-4 h-4 text-amber-500" />
                <span>Console Admin (Local uniquement)</span>
              </h3>
              <button
                type="button"
                onClick={() => {
                  setShowAdminModal(false);
                  setAdminCodeInput('');
                  setAdminError(null);
                }}
                className="text-slate-400 hover:text-slate-700 dark:hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Cet accès administrateur est strictement réservé à l'environnement local (<code className="font-mono text-indigo-500">localhost</code>).
            </p>
            {adminError && (
              <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs font-bold">
                {adminError}
              </div>
            )}
            <input
              type="password"
              value={adminCodeInput}
              onChange={(e) => {
                setAdminCodeInput(e.target.value);
                setAdminError(null);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  if (adminCodeInput.trim() === '144000') {
                    soundFX.playCheckmarkPop();
                    setShowAdminModal(false);
                    setAdminCodeInput('');
                    onOpenAdmin();
                  } else {
                    setAdminError('Code administrateur incorrect.');
                  }
                }
              }}
              placeholder="Code secret Admin..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-xs font-mono text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
            />
            <div className="flex items-center justify-end gap-2 pt-1">
              <button
                type="button"
                onClick={() => {
                  setShowAdminModal(false);
                  setAdminCodeInput('');
                  setAdminError(null);
                }}
                className="px-3 py-2 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-800 dark:hover:text-white cursor-pointer"
              >
                Annuler
              </button>
              <button
                type="button"
                onClick={() => {
                  if (adminCodeInput.trim() === '144000') {
                    soundFX.playCheckmarkPop();
                    setShowAdminModal(false);
                    setAdminCodeInput('');
                    onOpenAdmin();
                  } else {
                    setAdminError('Code administrateur incorrect.');
                  }
                }}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-bold text-white cursor-pointer"
              >
                Ouvrir Admin
              </button>
            </div>
          </div>
        </div>
      )}

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
        <header
          className={`w-full ${
            step === 'pricing_models' && !showExistingLogin ? 'max-w-7xl' : 'max-w-2xl'
          } mx-auto px-4 pt-5 pb-2 flex items-center gap-3 z-20 transition-all duration-300`}
        >
          <button
            type="button"
            onClick={handleBack}
            className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all active:scale-95 cursor-pointer shrink-0 shadow-xs"
            aria-label="Retour"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {!showExistingLogin ? (
            <div className="flex-1 flex items-center gap-3">
              <div className="flex-1 h-3.5 bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden border border-slate-300 dark:border-slate-800/80 p-0.5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 transition-all duration-300 relative"
                  style={{ width: `${progressPercent}%` }}
                >
                  <div className="absolute top-0.5 left-2 right-2 h-1 bg-white/30 rounded-full" />
                </div>
              </div>
              <span className="text-[11px] font-black text-slate-500 dark:text-slate-400 font-mono shrink-0">
                {currentStepIndex}/{STEP_ORDER.length - 1}
              </span>
            </div>
          ) : (
            <div className="flex-1" />
          )}

          <button
            type="button"
            onClick={toggleSound}
            className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer shrink-0 shadow-xs"
            title={isMuted ? 'Activer le son' : 'Couper le son'}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-slate-500" />
            ) : (
              <Volume2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
            )}
          </button>
        </header>
      )}

      {/* CONTENU CENTRAL */}
      <main
        className={`flex-1 w-full ${
          step === 'pricing_models' && !showExistingLogin ? 'max-w-7xl' : 'max-w-2xl'
        } mx-auto px-4 py-3 flex flex-col justify-center z-10 transition-all duration-300`}
      >
        {/* Cube Konan + Bulle de parole en haut des étapes */}
        {step !== 'welcome' && (
          <div className="mb-4 flex items-center gap-3 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/90 rounded-2xl p-3 max-w-3xl mx-auto w-full shadow-sm">
            <div className="shrink-0">
              <KonanCube size={54} showStars={false} glow={true} />
            </div>
            <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug text-left">
              « <WordByWordBubble text={bubbleMessage} speed={25} /> »
            </p>
          </div>
        )}

        <div className="w-full animate-in fade-in duration-200">
          {/* CONNEXION COMPTE EXISTANT */}
          {showExistingLogin && (
            <form
              onSubmit={handleExistingAccountLogin}
              className="space-y-4 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-2xl max-w-xl mx-auto"
            >
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => {
                    soundFX.playCheckmarkPop();
                    setShowExistingLogin(false);
                    setAuthError(null);
                    setCanCreateFromLogin(false);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Retour à l'accueil</span>
                </button>
                <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-500">Connexion Éspace Étudiant</span>
              </div>

              <h2 className="text-xl font-black text-slate-900 dark:text-white">Connexion à ton compte</h2>

              {authError && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-300 text-xs flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{authError}</span>
                  </div>
                  {canCreateFromLogin && (
                    <button
                      type="button"
                      onClick={handleCreateAccountFromExistingForm}
                      disabled={isSubmittingAuth}
                      className="w-full mt-1 py-2 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-slate-950" />
                      <span>Créer ce compte directement avec cet email</span>
                    </button>
                  )}
                </div>
              )}

              <div className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-400 block mb-1">Email / Gmail</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={authEmail}
                      onChange={(e) => {
                        setAuthEmail(e.target.value);
                        if (canCreateFromLogin) setCanCreateFromLogin(false);
                      }}
                      placeholder="ton.email@gmail.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-400 block mb-1">Mot de passe</label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={authPassword}
                      onChange={(e) => {
                        setAuthPassword(e.target.value);
                        if (canCreateFromLogin) setCanCreateFromLogin(false);
                      }}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-10 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-800 dark:hover:text-white cursor-pointer"
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
                {isSubmittingAuth ? 'Connexion en cours...' : 'SE CONNECTER DIRECTEMENT'}
              </button>

              <button
                type="button"
                onClick={handleGoogleExistingLogin}
                disabled={isSubmittingAuth}
                className="w-full py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Se connecter avec Google</span>
              </button>

              {onOpenLogin && (
                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setShowExistingLogin(false);
                      onOpenLogin();
                    }}
                    className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline cursor-pointer"
                  >
                    Page de connexion avancée & réinitialisation de mot de passe →
                  </button>
                </div>
              )}

              {isLocalAdminAllowed && onOpenAdmin && (
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-center">
                  <button
                    type="button"
                    onClick={() => {
                      soundFX.playCheckmarkPop();
                      setShowAdminModal(true);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline cursor-pointer"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>Mode Administrateur (Local uniquement)</span>
                  </button>
                </div>
              )}
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

              <div className="relative bg-slate-900/95 border border-slate-800 rounded-3xl p-4 shadow-xl backdrop-blur-xl text-left w-full">
                <p className="text-sm font-bold text-white leading-relaxed">
                  « <WordByWordBubble text={bubbleMessage} speed={35} /> »
                </p>
              </div>

              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                  Ton frère pour tes{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500 dark:from-cyan-400 dark:to-indigo-400">
                    révisions
                  </span>
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Choisis ton système (<strong className="text-slate-900 dark:text-slate-200">LMD, BTS, Lycée</strong>), extrais ton EDT en fichier texte structuré et génère ton planning de révision sur mesure.
                </p>
              </div>

              <div className="w-full space-y-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    soundFX.playCheckmarkPop();
                    setAuthFullName('');
                    setAuthEmail('');
                    setAuthPassword('');
                    setAuthError(null);
                    setAccountExistsRedirect(false);
                    setRegisteredProfile(null);
                    try {
                      sessionStorage.setItem('konan_onboarding_in_progress', 'true');
                    } catch {
                      // Ignore
                    }
                    setStep('study_type');
                  }}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-sm sm:text-base tracking-wide uppercase shadow-[0_5px_0_#065f46] active:translate-y-1 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>JE CRÉE MON PLANNING 🚀</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    soundFX.playCheckmarkPop();
                    setAuthError(null);
                    setShowExistingLogin(true);
                  }}
                  className="w-full py-3.5 px-6 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800/90 text-slate-800 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white font-bold text-xs sm:text-sm border-2 border-slate-200 dark:border-slate-800 transition-all cursor-pointer uppercase shadow-xs"
                >
                  J'AI DÉJÀ UN COMPTE • ME CONNECTER
                </button>

                {/* Bouton Admin visible UNIQUEMENT en local */}
                {isLocalAdminAllowed && onOpenAdmin && (
                  <button
                    type="button"
                    onClick={() => {
                      soundFX.playCheckmarkPop();
                      setShowAdminModal(true);
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-amber-500/10 hover:bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>Accès Administrateur (Local uniquement)</span>
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
                          ? 'bg-indigo-50 dark:bg-indigo-600/15 border-indigo-500 shadow-[0_4px_0_0_#4338CA]'
                          : 'bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-slate-700 shadow-[0_4px_0_0_#CBD5E1] dark:shadow-[0_4px_0_0_#0F172A]'
                      }`}
                    >
                      <div className="flex items-start gap-3.5">
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                            selected
                              ? 'bg-indigo-500 text-white'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base">
                              {cfg.title}
                            </span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30">
                              {cfg.badge}
                            </span>
                            <span className="text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-500/20">
                              {cfg.fileName}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                            {cfg.subtitle}
                          </p>
                          <div className="mt-2 px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800/80 font-mono text-[10px] text-slate-700 dark:text-slate-300 truncate">
                            {cfg.syntaxExample}
                          </div>
                        </div>
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-1 ${
                            selected ? 'border-indigo-500 bg-indigo-500' : 'border-slate-300 dark:border-slate-700'
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
                  className="p-3.5 rounded-2xl bg-white dark:bg-slate-900/90 hover:bg-slate-50 dark:hover:bg-slate-800/90 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 flex flex-col items-center text-center gap-1.5 transition-all cursor-pointer disabled:opacity-50 shadow-xs"
                >
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-extrabold text-slate-900 dark:text-white">Fichier PDF</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">Importer EDT</span>
                </button>

                <button
                  type="button"
                  disabled={isAnalyzing}
                  onClick={() => cameraInputRef.current?.click()}
                  className="p-3.5 rounded-2xl bg-white dark:bg-slate-900/90 hover:bg-slate-50 dark:hover:bg-slate-800/90 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 flex flex-col items-center text-center gap-1.5 transition-all cursor-pointer disabled:opacity-50 shadow-xs"
                >
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                    <Camera className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-extrabold text-slate-900 dark:text-white">Prendre Photo</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">Caméra directe</span>
                </button>

                <button
                  type="button"
                  disabled={isAnalyzing}
                  onClick={() => galleryInputRef.current?.click()}
                  className="p-3.5 rounded-2xl bg-white dark:bg-slate-900/90 hover:bg-slate-50 dark:hover:bg-slate-800/90 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 flex flex-col items-center text-center gap-1.5 transition-all cursor-pointer disabled:opacity-50 shadow-xs"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <ImageIcon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-extrabold text-slate-900 dark:text-white">Galerie Image</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">PNG, JPG, WEBP</span>
                </button>
              </div>

              {/* Indicateur d'extraction en cours */}
              {isAnalyzing && (
                <div className="p-3.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-500/30 flex items-center gap-3 text-xs text-indigo-800 dark:text-indigo-200">
                  <Loader2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 animate-spin shrink-0" />
                  <span className="font-bold">{analysisStatus || 'Extraction en cours...'}</span>
                </div>
              )}

              {/* Exemples certifiés 1-clic */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-bold text-slate-500">Exemples certifiés :</span>
                <button
                  type="button"
                  onClick={() => handleLoadCertifiedDemo('lmd')}
                  className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-[11px] font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white cursor-pointer transition-colors"
                >
                  ESATIC (LMD)
                </button>
                <button
                  type="button"
                  onClick={() => handleLoadCertifiedDemo('bts')}
                  className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-[11px] font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white cursor-pointer transition-colors"
                >
                  BTS Info (CM/TD/TP)
                </button>
                <button
                  type="button"
                  onClick={() => handleLoadCertifiedDemo('lycee')}
                  className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-[11px] font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white cursor-pointer transition-colors"
                >
                  Terminale (Lycée)
                </button>
              </div>

              {/* ÉDITEUR DU FICHIER TEXTE EXTRAIT (.TXT) */}
              <div className="space-y-2 bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 rounded-2xl p-3.5 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                    <span className="text-xs font-extrabold text-slate-900 dark:text-white font-mono">
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

          {/* ÉTAPE 3 : NIVEAU D'ÉTUDE (CLASSE & SÉRIE IVOIRIENNE OU FILIÈRE) */}
          {!showExistingLogin && step === 'grade_level' && (
            <div className="space-y-5">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-indigo-500 shrink-0" />
                  <span>
                    {studyType === 'lycee'
                      ? '3. Quelle est ta classe & série ?'
                      : "3. Quelle est ta filière d'études ?"}
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  {studyType === 'lycee'
                    ? "Sélectionne ta série pour synchroniser ton tuteur KONAN avec le programme officiel de Côte d'Ivoire (3ème à Terminale)."
                    : "Précise ta filière pour calibrer tes coefficients et prioriser tes cours universitaires."}
                </p>
              </div>

              {/* Options Collège / Lycée */}
              {studyType === 'lycee' && (
                <div className="space-y-5">
                  {/* 1. Séries Scientifiques */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5 mb-2.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Lycée — Séries Scientifiques (Maths pures, PC, SVT)</span>
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {[
                        { id: 'terminale_c', label: 'Terminale C', badge: 'Tle C', desc: 'Bac C — Maths avancées (240h/an) & Sciences Physiques' },
                        { id: 'terminale_d', label: 'Terminale D', badge: 'Tle D', desc: 'Bac D — SVT, Maths (180h/an) & Sciences Physiques' },
                        { id: 'premiere_c', label: 'Première C', badge: '1ère C', desc: 'Sciences Exactes — 180h/an (6h/semaine)' },
                        { id: 'premiere_d', label: 'Première D', badge: '1ère D', desc: 'Sciences Expérimentales — 150h/an (5h/semaine)' },
                        { id: 'seconde_c', label: 'Seconde C', badge: '2nde C', desc: 'Tronc commun scientifique — 150h/an (5h/semaine)' },
                      ].map(lvl => {
                        const isSelected = selectedGradeLevel === lvl.id;
                        return (
                          <button
                            key={lvl.id}
                            type="button"
                            onClick={() => {
                              soundFX.playCheckmarkPop();
                              setSelectedGradeLevel(lvl.id as CurriculumGradeLevel);
                            }}
                            className={`p-3.5 rounded-2xl border-2 text-left transition-all cursor-pointer flex items-center justify-between gap-3 ${
                              isSelected
                                ? 'bg-indigo-50/90 dark:bg-indigo-950/60 border-indigo-600 dark:border-indigo-400 shadow-md shadow-indigo-600/10'
                                : 'bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 hover:border-indigo-300'
                            }`}
                          >
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-black px-2 py-0.5 rounded-md bg-indigo-500/15 text-indigo-700 dark:text-indigo-300">
                                  {lvl.badge}
                                </span>
                                <h3 className="text-sm font-extrabold text-slate-900 dark:text-white truncate">
                                  {lvl.label}
                                </h3>
                              </div>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                                {lvl.desc}
                              </p>
                            </div>
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                              isSelected
                                ? 'border-indigo-600 bg-indigo-600 text-white'
                                : 'border-slate-300 dark:border-slate-600'
                            }`}>
                              {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. Séries Littéraires avec séparation stricte A1 / A2 */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 flex items-center gap-1.5 mb-2.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Lycée — Séries Littéraires (Distinction stricte A1 & A2)</span>
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {[
                        { id: 'terminale_a1', label: 'Terminale A1', badge: 'Tle A1', desc: 'Bac A1 — 8 chapitres avec Primitives & Intégrales (150h/an)' },
                        { id: 'terminale_a2', label: 'Terminale A2', badge: 'Tle A2', desc: 'Bac A2 — 7 chapitres sans calcul intégral (120h/an)' },
                        { id: 'premiere_a1', label: 'Première A1', badge: '1re A1', desc: 'Programme approfondi en Mathématiques — 120h/an (4h/semaine)' },
                        { id: 'premiere_a2', label: 'Première A2', badge: '1re A2', desc: 'Programme standard en Mathématiques — 90h/an (3h/semaine)' },
                        { id: 'seconde_a', label: 'Seconde A', badge: '2de A', desc: 'Tronc commun littéraire — 90h/an (3h/semaine)' },
                      ].map(lvl => {
                        const isSelected = selectedGradeLevel === lvl.id;
                        return (
                          <button
                            key={lvl.id}
                            type="button"
                            onClick={() => {
                              soundFX.playCheckmarkPop();
                              setSelectedGradeLevel(lvl.id as CurriculumGradeLevel);
                            }}
                            className={`p-3.5 rounded-2xl border-2 text-left transition-all cursor-pointer flex items-center justify-between gap-3 ${
                              isSelected
                                ? 'bg-purple-50/90 dark:bg-purple-950/60 border-purple-600 dark:border-purple-400 shadow-md shadow-purple-600/10'
                                : 'bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 hover:border-purple-300'
                            }`}
                          >
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-black px-2 py-0.5 rounded-md bg-purple-500/15 text-purple-700 dark:text-purple-300">
                                  {lvl.badge}
                                </span>
                                <h3 className="text-sm font-extrabold text-slate-900 dark:text-white truncate">
                                  {lvl.label}
                                </h3>
                              </div>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                                {lvl.desc}
                              </p>
                            </div>
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                              isSelected
                                ? 'border-purple-600 bg-purple-600 text-white'
                                : 'border-slate-300 dark:border-slate-600'
                            }`}>
                              {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 3. Collège (6ème à 3ème) */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mb-2.5">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>Collège — Premier Cycle (6ème à 3ème)</span>
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                      {[
                        { id: '3eme', label: 'Classe de 3ème', badge: '3ème', desc: 'Préparation officielle au BEPC (14 chapitres)' },
                        { id: '4eme', label: 'Classe de 4ème', badge: '4ème', desc: 'Second degré & géométrie (11 chapitres)' },
                        { id: '5eme', label: 'Classe de 5ème', badge: '5ème', desc: 'Symétrie axiale & fractions (12 chapitres)' },
                        { id: '6eme', label: 'Classe de 6ème', badge: '6ème', desc: 'Initiation collège & décimaux (13 chapitres)' },
                      ].map(lvl => {
                        const isSelected = selectedGradeLevel === lvl.id;
                        return (
                          <button
                            key={lvl.id}
                            type="button"
                            onClick={() => {
                              soundFX.playCheckmarkPop();
                              setSelectedGradeLevel(lvl.id as CurriculumGradeLevel);
                            }}
                            className={`p-3 rounded-2xl border-2 text-left transition-all cursor-pointer flex items-center justify-between gap-2.5 ${
                              isSelected
                                ? 'bg-emerald-50/90 dark:bg-emerald-950/60 border-emerald-600 dark:border-emerald-400 shadow-md shadow-emerald-600/10'
                                : 'bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 hover:border-emerald-300'
                            }`}
                          >
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-1.5">
                                <span className="text-[11px] font-black px-1.5 py-0.5 rounded-md bg-emerald-500/15 text-emerald-700 dark:text-emerald-300">
                                  {lvl.badge}
                                </span>
                                <h3 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                                  {lvl.label}
                                </h3>
                              </div>
                              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                                {lvl.desc}
                              </p>
                            </div>
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                              isSelected
                                ? 'border-emerald-600 bg-emerald-600 text-white'
                                : 'border-slate-300 dark:border-slate-600'
                            }`}>
                              {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Options Supérieur LMD & BTS */}
              {studyType !== 'lycee' && (
                <div className="space-y-3 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    Filières courantes ou personnalisée
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      'Informatique & Génie Logiciel',
                      'Réseaux & Télécommunications',
                      'Sciences Économiques & Gestion',
                      'Mathématiques & Informatique (MI)',
                      'Sciences Physiques & Chimie (PC)',
                      'Biologie & Sciences Médicales',
                    ].map(filiere => {
                      const isSelected = customFiliere === filiere;
                      return (
                        <button
                          key={filiere}
                          type="button"
                          onClick={() => {
                            soundFX.playCheckmarkPop();
                            setCustomFiliere(filiere);
                            setSelectedGradeLevel(studyType === 'bts' ? 'superieur_bts' : 'superieur_lmd');
                          }}
                          className={`p-3 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                              : 'bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700/80 hover:border-indigo-300'
                          }`}
                        >
                          <span className="truncate">{filiere}</span>
                          {isSelected && <Check className="w-4 h-4 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>

                  <div className="pt-2">
                    <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                      Ou écris ta filière exacte :
                    </label>
                    <input
                      type="text"
                      value={customFiliere}
                      onChange={(e) => {
                        setCustomFiliere(e.target.value);
                        setSelectedGradeLevel(studyType === 'bts' ? 'superieur_bts' : 'superieur_lmd');
                      }}
                      placeholder="Ex: Électronique Industrielle, Droit Privé, etc."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ÉTAPE 4 : PERSONNALISATION (COEFFICIENTS, MÉTHODES KONAN & CHRONOTYPE) */}
          {!showExistingLogin && step === 'customize' && (
            <div className="space-y-5 pb-4">
              {/* 1. Matières & Coefficients */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-indigo-500 dark:text-indigo-400 shrink-0" />
                    <span>1. Matières extraites & Coefficients</span>
                  </h2>
                  <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 shrink-0">
                    {editableSubjects.filter(s => s.enabled).length}/{editableSubjects.length} actives
                  </span>
                </div>

                <div className="space-y-2.5">
                  {editableSubjects.map((subject) => (
                    <div
                      key={subject.id}
                      className={`p-3 sm:p-3.5 rounded-2xl border transition-all ${
                        subject.enabled
                          ? 'bg-white dark:bg-slate-900/90 border-slate-200 dark:border-slate-800 shadow-xs'
                          : 'bg-slate-100/60 dark:bg-slate-900/30 border-slate-200/50 dark:border-slate-800/40 opacity-50'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                        {/* Ligne 1 sur mobile : Checkbox + Couleur + Nom complet de la matière (100% lisible) */}
                        <div className="flex items-center gap-2.5 min-w-0 flex-1 w-full">
                          <input
                            type="checkbox"
                            checked={subject.enabled}
                            onChange={() => handleToggleSubjectEnabled(subject.id)}
                            className="w-4 h-4 rounded text-indigo-600 bg-slate-100 dark:bg-slate-950 border-slate-300 dark:border-slate-700 cursor-pointer shrink-0"
                          />
                          <span
                            className="w-3 h-3 rounded-full shrink-0 shadow-xs"
                            style={{ backgroundColor: subject.color }}
                          />
                          <input
                            type="text"
                            value={subject.name}
                            onChange={(e) => handleUpdateSubjectName(subject.id, e.target.value)}
                            className="bg-transparent text-sm font-extrabold text-slate-900 dark:text-white focus:outline-none border-b border-transparent focus:border-indigo-500 flex-1 min-w-0 w-full"
                          />
                          {subject.code && (
                            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/20 shrink-0">
                              {subject.code}
                            </span>
                          )}
                        </div>

                        {/* Ligne 2 sur mobile : Cible + Coeff alignés proprement */}
                        <div className="flex items-center justify-between sm:justify-end gap-2 pl-6 sm:pl-0 shrink-0">
                          <div className="relative flex items-center">
                            <select
                              value={subject.targetGrade}
                              onChange={(e) =>
                                handleUpdateSubjectTargetGrade(subject.id, Number(e.target.value))
                              }
                              className="appearance-none bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-2.5 py-1.5 pr-6 text-xs font-bold text-slate-800 dark:text-slate-200 focus:outline-none cursor-pointer"
                            >
                              <option value={12}>Cible 12/20</option>
                              <option value={14}>Cible 14/20</option>
                              <option value={16}>Cible 16/20</option>
                              <option value={18}>Cible 18/20</option>
                            </select>
                            <ChevronDown className="w-3.5 h-3.5 text-slate-400 pointer-events-none absolute right-2" />
                          </div>

                          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-1">
                            <button
                              type="button"
                              onClick={() => handleUpdateSubjectCoeff(subject.id, -1)}
                              className="w-7 h-7 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 cursor-pointer shadow-2xs"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-xs font-mono font-black text-indigo-600 dark:text-indigo-400 px-2">
                              C.{subject.coefficient}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleUpdateSubjectCoeff(subject.id, 1)}
                              className="w-7 h-7 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 cursor-pointer shadow-2xs"
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

              {/* 2. Recommandation KONAN & Méthode d'Espacement */}
              <div className="space-y-2.5 pt-2 border-t border-slate-200 dark:border-slate-800/80">
                <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                  <span>2. Méthode de Révision & Diagnostic KONAN</span>
                </h2>

                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-indigo-50/90 via-sky-50/50 to-indigo-50/90 dark:from-indigo-950/60 dark:via-slate-900/90 dark:to-slate-900 border border-indigo-200 dark:border-indigo-500/30 space-y-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <BarChart2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-xs font-black uppercase tracking-wider text-indigo-900 dark:text-indigo-300">
                      Recommandation IA :
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-900 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30">
                      {getPacingStrategy(pacingRecommendation.primaryId).title}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {pacingRecommendation.contextTag}
                    </span>
                  </div>
                  <p
                    className={`text-xs text-slate-800 dark:text-slate-300 leading-relaxed font-medium ${
                      showFullDiagnostic ? '' : 'line-clamp-2'
                    }`}
                  >
                    {pacingRecommendation.rationale}
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowFullDiagnostic(!showFullDiagnostic)}
                    className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
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
                            ? 'bg-indigo-50 dark:bg-indigo-600/20 border-indigo-500 ring-2 ring-indigo-500/30 shadow-xs'
                            : isAllowed
                            ? 'bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                            : 'bg-slate-100 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800/50 opacity-60'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-extrabold text-slate-900 dark:text-white truncate">
                            {strategy.title}
                          </span>
                          <span className="text-[10px] font-mono font-bold text-indigo-600 dark:text-indigo-300 shrink-0">
                            {strategy.badge}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
                          {strategy.tagline}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Chronotype */}
              <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800/80">
                <label className="text-xs font-extrabold text-slate-800 dark:text-slate-300 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
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
                            ? 'bg-indigo-600 border-indigo-600 text-white shadow-xs'
                            : 'bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
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

          {/* ÉTAPE 5 : TOUT EST PRÊT ! + INFORMATIONS DE CONNEXION DU NOUVEL UTILISATEUR */}
          {!showExistingLogin && step === 'account_setup' && (
            <div className="space-y-4 max-w-xl mx-auto">
              {/* Bannière "Tout est prêt !" sans aucun nom pré-attribué */}
              <div className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 text-center shadow-xl">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 mx-auto">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h2 className="text-xl sm:text-2xl font-black text-white">
                    Tout est prêt !
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Ton planning personnalisé ({activeSystem.title}) est généré. Renseigne tes informations de connexion ci-dessous pour continuer.
                  </p>
                </div>

                {/* Carte récapitulative avec animation des nombres */}
                <div className="grid grid-cols-3 gap-2.5 text-center pt-1">
                  <div className="p-2.5 rounded-2xl bg-slate-950/80 border border-slate-800/80">
                    <span className="text-xl sm:text-2xl font-black text-indigo-400 block">
                      <AnimatedCounter value={generatedSlots.length} duration={1200} />
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">
                      Cours extraits
                    </span>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-slate-950/80 border border-slate-800/80">
                    <span className="text-xl sm:text-2xl font-black text-emerald-400 block">
                      <AnimatedCounter value={generatedSessions.length} duration={1400} />
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">
                      Séances d'étude
                    </span>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-slate-950/80 border border-slate-800/80">
                    <span className="text-xl sm:text-2xl font-black text-amber-400 block">
                      <AnimatedCounter value={generatedSubjects.length} duration={1000} />
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">
                      Matières ({activeSystem.title})
                    </span>
                  </div>
                </div>
              </div>

              {/* Formulaire d'informations de connexion (Nouveau compte uniquement) */}
              <form
                onSubmit={handleRegisterNewAccount}
                className="space-y-3.5 bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-2xl"
              >
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-black text-white">
                    Renseigne tes informations de connexion
                  </h3>
                  <p className="text-xs text-slate-400">
                    Comme c'est ta première fois ici, utilise une adresse Gmail ou Email nouvelle pour créer ton espace étudiant.
                  </p>
                </div>

                {authError && (
                  <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-200 text-xs space-y-2.5">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span className="font-bold leading-relaxed">{authError}</span>
                    </div>
                    {accountExistsRedirect && (
                      <button
                        type="button"
                        onClick={() => {
                          soundFX.playCheckmarkPop();
                          setAuthError(null);
                          setAccountExistsRedirect(false);
                          setShowExistingLogin(true);
                        }}
                        className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                      >
                        <LogIn className="w-4 h-4" />
                        <span>Se connecter directement à mon compte</span>
                      </button>
                    )}
                  </div>
                )}

                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={authEmail}
                    onChange={(e) => {
                      setAuthEmail(e.target.value);
                      if (accountExistsRedirect) {
                        setAccountExistsRedirect(false);
                        setAuthError(null);
                      }
                    }}
                    placeholder="Ton adresse Gmail / Email (nouveau compte)"
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
                  className="w-full py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm tracking-wide shadow-[0_4px_0_0_#047857] active:translate-y-0.5 transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <span>
                    {isSubmittingAuth
                      ? 'Vérification & enregistrement...'
                      : 'VALIDER MES INFORMATIONS & CONTINUER'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleGoogleNewRegistration}
                  disabled={isSubmittingAuth}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>S'inscrire avec un nouveau compte Google</span>
                </button>

                <div className="pt-2 border-t border-slate-800/80 text-center">
                  <button
                    type="button"
                    onClick={() => {
                      soundFX.playCheckmarkPop();
                      setAuthError(null);
                      setAccountExistsRedirect(false);
                      setShowExistingLogin(true);
                    }}
                    className="text-xs font-bold text-indigo-400 hover:text-indigo-300 cursor-pointer"
                  >
                    Tu as déjà un compte ? Connecte-toi directement →
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* ÉTAPE 6 : MODÈLES D'ACCOMPAGNEMENT (GRAND FORMAT PC, COMPOSANTS COMPLETS & ANIMATION DES NOMBRES) */}
          {!showExistingLogin && step === 'pricing_models' && (
            <div className="space-y-8 py-2 w-full">
              {/* En-tête de présentation des modèles d'accompagnement */}
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Modèles d’Accompagnement Étudiant</span>
                </div>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  Choisis ton modèle d’accompagnement{' '}
                  <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-amber-300 bg-clip-text text-transparent">
                    KONAN
                  </span>
                </h2>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  Tes informations sont validées et tes{' '}
                  <strong className="text-white">
                    <AnimatedCounter value={generatedSlots.length} duration={1200} /> cours
                  </strong>{' '}
                  +{' '}
                  <strong className="text-emerald-400">
                    <AnimatedCounter value={generatedSessions.length} duration={1400} /> séances d'étude
                  </strong>{' '}
                  sont prêts. Sélectionne la formule qui t'accompagnera ce semestre.
                </p>
              </div>

              {/* Grille des 3 grands modèles d'accompagnement (Gratuit, Pro, Plus) */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch w-full">
                {ACCOMPANIMENT_PLANS.map((plan) => {
                  const isPro = plan.id === 'pro';
                  const isPlus = plan.id === 'plus';

                  return (
                    <div
                      key={plan.id}
                      className={`relative rounded-3xl flex flex-col justify-between transition-all duration-300 ${
                        isPro
                          ? 'bg-gradient-to-b from-slate-900 via-indigo-950/40 to-slate-900 border-2 border-indigo-500/60 shadow-2xl shadow-indigo-500/15 lg:-translate-y-2'
                          : isPlus
                          ? 'bg-gradient-to-b from-slate-900 via-amber-950/15 to-slate-900 border border-amber-500/30 hover:border-amber-500/50 shadow-xl'
                          : 'bg-slate-900/70 border border-slate-800/80 hover:border-slate-700'
                      } p-6 sm:p-8`}
                    >
                      {/* Badge supérieur */}
                      {plan.badge && (
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-lg ${
                              isPro
                                ? 'bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-600 text-white'
                                : isPlus
                                ? 'bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 text-slate-950'
                                : 'bg-slate-800 text-slate-300 border border-slate-700'
                            }`}
                          >
                            {isPro && <Zap className="w-3.5 h-3.5 fill-current" />}
                            {isPlus && <Clock className="w-3.5 h-3.5" />}
                            {plan.badge}
                          </span>
                        </div>
                      )}

                      <div>
                        {/* En-tête de la carte */}
                        <div className="flex items-center justify-between gap-3 mb-3 pt-2">
                          <div>
                            <h3 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
                              {plan.name}
                            </h3>
                            <p className="text-xs font-medium text-slate-400 mt-0.5">
                              {plan.tagline}
                            </p>
                          </div>
                          <div
                            className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${plan.accentGradient} flex items-center justify-center text-white shadow-md shrink-0`}
                          >
                            {plan.id === 'free' && <Layers className="w-5 h-5" />}
                            {plan.id === 'pro' && <Zap className="w-5 h-5" />}
                            {plan.id === 'plus' && <Crown className="w-5 h-5" />}
                          </div>
                        </div>

                        {/* Prix avec animation des nombres (AnimatedCounter) */}
                        <div className="my-6 pb-6 border-b border-slate-800/80">
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-4xl sm:text-5xl font-black text-white tracking-tight font-mono">
                              <AnimatedCounter
                                value={plan.priceValue}
                                duration={1800}
                                formatThousands={plan.priceValue >= 1000}
                              />
                            </span>
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-indigo-400">
                                {plan.currency}
                              </span>
                              <span className="text-xs text-slate-500 font-medium">
                                {plan.period}
                              </span>
                            </div>
                          </div>

                          {/* Bandeau de lancement gratuit pour KONAN PRO */}
                          {isPro && (
                            <div className="mt-3 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2">
                              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                              <span className="text-xs font-bold text-emerald-300 leading-tight">
                                Offre de Lancement Étudiant : Débloqué gratuitement pendant la phase pilote !
                              </span>
                            </div>
                          )}

                          {/* Bandeau d'annonce pour KONAN PLUS */}
                          {isPlus && (
                            <div className="mt-3 p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-2">
                              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                              <span className="text-xs font-bold text-amber-300 leading-tight">
                                Inclut la configuration guidée de votre EDT Pro pas à pas avec Konan !
                              </span>
                            </div>
                          )}

                          <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                            {plan.description}
                          </p>
                        </div>

                        {/* Liste des fonctionnalités et composants */}
                        <div className="space-y-3.5 mb-8">
                          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            {plan.id === 'free'
                              ? 'Inclus de base :'
                              : plan.id === 'pro'
                              ? 'Tout KONAN Gratuit inclus, plus :'
                              : 'Tout KONAN Pro inclus, plus :'}
                          </div>

                          {plan.features.map((feat, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div
                                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                                  feat.highlight
                                    ? isPlus
                                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                                      : 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/40'
                                    : 'bg-emerald-500/15 text-emerald-400'
                                }`}
                              >
                                <Check className="w-3 h-3 stroke-[3]" />
                              </div>
                              <div className="text-xs leading-relaxed">
                                <span
                                  className={`font-semibold ${
                                    feat.highlight ? 'text-white' : 'text-slate-200'
                                  }`}
                                >
                                  {feat.text}
                                </span>
                                {feat.detail && (
                                  <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                                    {feat.detail}
                                  </p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bouton d'action (Sans cloche qui saute sur Plus) */}
                      <button
                        type="button"
                        onClick={() => handleSelectAccompanimentModel(plan.id)}
                        className={`w-full py-3.5 px-5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                          isPro
                            ? 'bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 hover:from-indigo-500 hover:via-violet-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-600/25'
                            : isPlus
                            ? 'bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-rose-500/20 hover:from-amber-500/30 hover:via-orange-500/30 hover:to-rose-500/30 text-amber-300 border border-amber-500/40 shadow-lg shadow-amber-500/10'
                            : 'bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700'
                        }`}
                      >
                        <span>{plan.ctaLabel}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Rassurance académique en bas des modèles */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Sans engagement — annulable en 1 clic</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                  <span>Compatible Mobile Money (Wave, Orange, MTN) & Cartes</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-amber-400" />
                  <span>Tarif solidaire calibré pour les étudiants</span>
                </div>
              </div>

              {/* Modale Liste d'attente KONAN PLUS */}
              <WaitlistModal
                isOpen={isWaitlistOpen}
                onClose={() => setIsWaitlistOpen(false)}
                userEmail={registeredProfile?.email || authEmail}
                userId={registeredProfile?.googleId}
              />
            </div>
          )}
        </div>
      </main>

      {/* PIED DE PAGE AVEC BOUTON CONTINUER */}
      {!showExistingLogin && (step === 'study_type' || step === 'upload' || step === 'grade_level' || step === 'customize') && (
        <footer className="w-full border-t border-slate-200 dark:border-slate-800/80 bg-white/95 dark:bg-[#070B13]/95 backdrop-blur-md px-4 py-3.5 z-20">
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

            {step === 'grade_level' && (
              <button
                type="button"
                onClick={handleProceedFromGradeLevelToCustomize}
                className="w-full py-3.5 px-6 rounded-2xl font-extrabold text-sm tracking-wide bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-[0_4px_0_0_#065f46] active:translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>CONTINUER VERS LES MATIÈRES & COEFFICIENTS</span>
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
