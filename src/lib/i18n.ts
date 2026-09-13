import { useState, useEffect } from 'react';

export type AppLanguage = 'fr' | 'en';

const STORAGE_KEY = 'konan_app_language';

export const COUNTRIES = [
  { code: '+225', country: 'CI', name: "Côte d'Ivoire", flag: '🇨🇮' },
  { code: '+33', country: 'FR', name: 'France', flag: '🇫🇷' },
  { code: '+221', country: 'SN', name: 'Sénégal', flag: '🇸🇳' },
  { code: '+223', country: 'ML', name: 'Mali', flag: '🇲🇱' },
  { code: '+226', country: 'BF', name: 'Burkina Faso', flag: '🇧🇫' },
  { code: '+224', country: 'GN', name: 'Guinée', flag: '🇬🇳' },
  { code: '+237', country: 'CM', name: 'Cameroun', flag: '🇨🇲' },
  { code: '+229', country: 'BJ', name: 'Bénin', flag: '🇧🇯' },
  { code: '+228', country: 'TG', name: 'Togo', flag: '🇹🇬' },
  { code: '+212', country: 'MA', name: 'Maroc', flag: '🇲🇦' },
  { code: '+213', country: 'DZ', name: 'Algérie', flag: '🇩🇿' },
  { code: '+216', country: 'TN', name: 'Tunisie', flag: '🇹🇳' },
  { code: '+1', country: 'CA', name: 'Canada / USA', flag: '🇨🇦' },
  { code: '+32', country: 'BE', name: 'Belgique', flag: '🇧🇪' },
  { code: '+41', country: 'CH', name: 'Suisse', flag: '🇨🇭' },
  { code: '+44', country: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
] as const;

export const TRANSLATIONS = {
  fr: {
    // Navigation
    navDashboard: 'Tableau de bord',
    navSchedule: 'Emploi du temps',
    navSubjects: 'Matières & Coeffs',
    navAiRevision: 'Planning de Révision',
    navAnalytics: 'Progression',
    navImport: 'Importer un emploi du temps',
    navTools: 'Outils & Données',
    navSettings: 'Paramètres',
    copilotSubtitle: 'Votre Compagnon de Réussite Académique',
    
    // User Profile
    profileTitle: 'Profil Étudiant',
    profileSubtitle: 'Personnalisez vos informations d\'identification académique',
    accountType: 'Statut du compte',
    demoAccount: 'Compte Démo (Alexandre)',
    googleAccount: 'Compte Google Connecté',
    guestAccount: 'Invité',
    emailLabel: 'Email académique',
    nameLabel: 'Nom complet',
    namePlaceholder: 'Entrez votre nom complet...',
    filiereLabel: 'Filière / Domaine d\'études',
    filierePlaceholder: 'Ex: Licence 2 Informatique, Prépa MPSI, Médecine...',
    phoneLabel: 'Numéro de téléphone',
    countryLabel: 'Pays & Indicatif',
    phonePlaceholder: '07 00 00 00 00',
    saveProfile: 'Enregistrer les modifications',
    profileSavedSuccess: '✅ Profil mis à jour avec succès !',
    logoutButton: 'Se déconnecter',
    logoutDescription: 'Déconnecte votre session et réinitialise l\'espace de travail.',
    
    // Language Section
    languageTitle: 'Langue de l\'application',
    languageSubtitle: 'Choisissez votre langue d\'interface préférée (prend effet immédiatement)',
    langFrench: 'Français',
    langFrenchDesc: 'Français (Langue native)',
    langEnglish: 'English',
    langEnglishDesc: 'English (International)',
    
    // Data Management
    dataTitle: 'Gestion des Données',
    exportConfig: 'Exporter ma configuration (JSON)',
    importConfig: 'Importer une sauvegarde',
    resetDefault: 'Réinitialiser l\'espace de travail',
    resetWarning: 'Cette action réinitialisera toutes vos données locales.',
    
    // Settings Modal
    settingsTitle: 'Paramètres & Profil',
    settingsDesc: 'Gérez vos coordonnées d\'étudiant, langue et stockage.',
    close: 'Fermer',
    saved: 'Enregistré avec succès !',
    
    // Actions & Badges
    active: 'Actif',
    synced: 'Synchronisé',
    secureSession: 'Session sécurisée',
    demoIsolated: 'Données démo isolées',

    // Dashboard & Overview
    quickSummary: 'Votre Équilibre & Rythme d\'Étude',
    weeklyClassLoad: 'Heures de cours / semaine',
    weeklyStudyTarget: 'Objectif de travail personnel',
    subjectsCount: 'Matières actives',
    nextSession: 'Prochaine session de travail',
    noSessionPlanned: 'Aucune session planifiée aujourd\'hui.',
    launchFocus: 'Démarrer ma session',
    markDone: 'Terminer',
    viewSchedule: 'Consulter l\'emploi du temps',

    // Schedule View
    scheduleTitle: 'Emploi du Temps Hebdomadaire',
    scheduleSubtitle: 'Visualisation claire de vos cours de la semaine pour organiser vos journées.',
    addSlot: 'Ajouter un cours',
    editSlot: 'Modifier',
    deleteSlot: 'Supprimer',
    room: 'Salle',
    professor: 'Enseignant',

    // Revision / Planner View
    plannerTitle: 'Planning de Révision Personnalisé',
    plannerSubtitle: 'Un rythme de travail sur-mesure respectant vos cours, vos pauses et vos priorités.',
    manualSession: 'Session Manuelle',
    regeneratePlan: 'Réorganiser mes révisions',
    allSubjects: 'Toutes les matières',
    clickForGuide: '💡 Cliquez sur une méthode pour afficher le protocole et les consignes.',

    // Session Types & Explainers
    spacedReviewLabel: 'Spaced Review',
    spacedReviewDesc: 'Répétition Espacée : Ancrer à long terme',
    exercisesLabel: 'Pratique & Annales',
    exercisesDesc: 'Résolution d\'exercices et annales d\'examens',
    deepSummaryLabel: 'Synthèse & Fiche',
    deepSummaryDesc: 'Cartographie mentale et fiches récapitulatives',
    activeRecallLabel: 'Active Recall',
    activeRecallDesc: 'Rappel actif et auto-évaluation sans notes',
    examSimulationLabel: 'Test Chrono',
    examSimulationDesc: 'Simulation en conditions réelles d\'examen',
    consolidationLabel: 'Consolidation',
    consolidationDesc: 'Approfondissement et synthèse des erreurs',

    // Explainer Modal
    explainerModalTitle: 'Guide Méthodologique de Session',
    whatIsIt: 'En Bref',
    whatToDo: 'Ce que vous devez faire concrètement (Protocole)',
    neuroTip: 'Conseil Neurocognitif & Erreur à Éviter',
    understood: 'J\'ai compris, démarrer ma session !',

    // Analytics View
    analyticsTitle: 'Progression & Analytics d\'Étude',
    analyticsSubtitle: 'Mesure précise du temps réel investi par matière et de la régularité.',
    timeInvested: 'Temps total investi',
    completionRate: 'Taux de complétion',
    streakDays: 'Jours de régularité',
  },
  en: {
    // Navigation
    navDashboard: 'Dashboard',
    navSchedule: 'Class Schedule',
    navSubjects: 'Subjects & Weights',
    navAiRevision: 'Study Plan',
    navAnalytics: 'Analytics',
    navImport: 'Import Timetable',
    navTools: 'Tools & Data',
    navSettings: 'Settings',
    copilotSubtitle: 'Your Academic Success Companion',
    
    // User Profile
    profileTitle: 'Student Profile',
    profileSubtitle: 'Customize your academic identity and contact details',
    accountType: 'Account Status',
    demoAccount: 'Demo Account (Alexandre)',
    googleAccount: 'Connected Google Account',
    guestAccount: 'Guest',
    emailLabel: 'Academic Email',
    nameLabel: 'Full Name',
    namePlaceholder: 'Enter your full name...',
    filiereLabel: 'Major / Field of Study',
    filierePlaceholder: 'e.g. Computer Science B.S., Pre-Med, Law, Engineering...',
    phoneLabel: 'Phone Number',
    countryLabel: 'Country & Code',
    phonePlaceholder: '123 456 7890',
    saveProfile: 'Save Changes',
    profileSavedSuccess: '✅ Profile updated successfully!',
    logoutButton: 'Sign out',
    logoutDescription: 'Sign out of your session and reset your workspace.',
    
    // Language Section
    languageTitle: 'Application Language',
    languageSubtitle: 'Choose your preferred interface language (applies immediately)',
    langFrench: 'Français',
    langFrenchDesc: 'French (Native)',
    langEnglish: 'English',
    langEnglishDesc: 'English (International)',
    
    // Data Management
    dataTitle: 'Data Management',
    exportConfig: 'Export configuration (JSON)',
    importConfig: 'Import backup file',
    resetDefault: 'Reset workspace to defaults',
    resetWarning: 'This action will reset all your local data.',
    
    // Settings Modal
    settingsTitle: 'Settings & Profile',
    settingsDesc: 'Manage your student details, language, and workspace storage.',
    close: 'Close',
    saved: 'Saved successfully!',
    
    // Actions & Badges
    active: 'Active',
    synced: 'Synchronized',
    secureSession: 'Secure Session',
    demoIsolated: 'Isolated Demo Data',

    // Dashboard & Overview
    quickSummary: 'Your Study & Life Balance',
    weeklyClassLoad: 'Class hours / week',
    weeklyStudyTarget: 'Personal Study Target',
    subjectsCount: 'Active Subjects',
    nextSession: 'Upcoming Study Session',
    noSessionPlanned: 'No sessions scheduled for today.',
    launchFocus: 'Start Focus Session',
    markDone: 'Complete',
    viewSchedule: 'View Timetable',

    // Schedule View
    scheduleTitle: 'Weekly Class Timetable',
    scheduleSubtitle: 'Clear view of your classes to easily plan your week.',
    addSlot: 'Add Class',
    editSlot: 'Edit',
    deleteSlot: 'Delete',
    room: 'Room',
    professor: 'Professor',

    // Revision / Planner View
    plannerTitle: 'Personalized Study Plan',
    plannerSubtitle: 'A tailored study rhythm respecting your classes, breaks, and personal priorities.',
    manualSession: 'Manual Session',
    regeneratePlan: 'Reorganize my study plan',
    allSubjects: 'All Subjects',
    clickForGuide: '💡 Click any study method badge to read its protocol and guidance.',

    // Session Types & Explainers
    spacedReviewLabel: 'Spaced Review',
    spacedReviewDesc: 'Spaced Repetition: Long-term retention',
    exercisesLabel: 'Practice & Past Papers',
    exercisesDesc: 'Problem solving and past exam papers',
    deepSummaryLabel: 'Summary Sheet',
    deepSummaryDesc: 'Mental mapping and high-impact cheat sheets',
    activeRecallLabel: 'Active Recall',
    activeRecallDesc: 'Active memory retrieval and closed-book self-testing',
    examSimulationLabel: 'Timed Mock Exam',
    examSimulationDesc: 'Exam simulation under strict real conditions',
    consolidationLabel: 'Consolidation',
    consolidationDesc: 'In-depth review and fixing error patterns',

    // Explainer Modal
    explainerModalTitle: 'Study Session Method Guide',
    whatIsIt: 'In Brief',
    whatToDo: 'Action Protocol (Step by Step)',
    neuroTip: 'Neurocognitive Advice & Mistake to Avoid',
    understood: 'Understood, let\'s start studying!',

    // Analytics View
    analyticsTitle: 'Study Analytics & Progress',
    analyticsSubtitle: 'Precise measurement of actual time invested per subject and study consistency.',
    timeInvested: 'Total Time Invested',
    completionRate: 'Completion Rate',
    streakDays: 'Daily Streak',
  },
} as const;

export type TranslationKey = keyof typeof TRANSLATIONS.fr;

export function getStoredLanguage(): AppLanguage {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'fr') {
      return stored;
    }
  } catch (e) {
    // ignore
  }
  return 'fr';
}

export function setStoredLanguage(lang: AppLanguage): void {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
    window.dispatchEvent(new CustomEvent('app_language_changed', { detail: lang }));
  } catch (e) {
    // ignore
  }
}

export function t(key: TranslationKey, lang: AppLanguage = 'fr'): string {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.fr;
  return dict[key] || TRANSLATIONS.fr[key] || key;
}

/**
 * React hook to listen for language changes in components
 */
export function useLanguage(): [AppLanguage, (lang: AppLanguage) => void] {
  const [lang, setLang] = useState<AppLanguage>(getStoredLanguage);

  useEffect(() => {
    const handleLangChange = (e: Event) => {
      const customEvent = e as CustomEvent<AppLanguage>;
      if (customEvent.detail) {
        setLang(customEvent.detail);
      }
    };

    window.addEventListener('app_language_changed', handleLangChange);
    return () => window.removeEventListener('app_language_changed', handleLangChange);
  }, []);

  const changeLanguage = (newLang: AppLanguage) => {
    setLang(newLang);
    setStoredLanguage(newLang);
  };

  return [lang, changeLanguage];
}
