import React, { useState, useEffect } from 'react';
import { 
  X, 
  Settings, 
  User, 
  LogOut, 
  Check, 
  Download, 
  Upload, 
  RotateCcw,
  ShieldCheck,
  Sparkles,
  GraduationCap,
  Save
} from 'lucide-react';
import { Zap, Sun, Moon, Palette, Crown, Target, Gem } from 'lucide-react';
import { studyGoalInfo } from '../../lib/studyGoals';
import { AnimatedAvatar } from '../../features/avatar/AnimatedAvatar';
import type { AvatarConfig } from '../../lib/avatar/avatarCatalog';
import type { UserAccount, AcademicGoal } from '../../types';
import { Button } from '../ui/Button';
import { useLanguage, t } from '../../lib/i18n';
import { soundFX } from '../../lib/audioEffects';
import { useTheme } from '../../context/ThemeContext';
import { checkStudentName, nextNameChangeAt } from '../../../api/_nameRules.js';
import { LMD_PROGRAMS } from '../../lib/curriculum/lmdTracks';
import { COUNTRIES, OUTSIDE_PROGRAM_TEXT, PROGRAM_COUNTRY, followsIvorianProgram, normalizeCountry } from '../../lib/country';

const PREDEFINED_LYCEE_CLASSES = [
  '3ème',
  'Seconde A',
  'Seconde C',
  'Première A1',
  'Première A2',
  'Première C',
  'Première D',
  'Terminale A1',
  'Terminale A2',
  'Terminale C',
  'Terminale D',
  'BTS / Prépa',
];

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  userAccount?: UserAccount;
  studentName?: string;
  academicLevel?: string;
  isDemoMode?: boolean;
  onLogout?: () => void;
  onUpdateProfile?: (updated: { 
    name: string; 
    academicLevel: string; 
    phoneNumber?: string;
    countryCode?: string;
    /** Pays de l'élève (lib/country) */
    country?: string;
  }) => void;
  /** Pays enregistré (absent = ancien compte = Côte d'Ivoire) */
  country?: string;
  /** Configuration d'avatar animé personnalisé + bouton d'ouverture de l'éditeur */
  avatarConfig?: AvatarConfig | null;
  hasCustomizedAvatar?: boolean;
  onOpenAvatarEditor?: () => void;
  onExportData?: () => void;
  onImportData?: () => void;
  onResetData?: () => void;
  planTier?: 'free' | 'pro' | 'plus';
  onSelectPlan?: (planId: 'free' | 'pro' | 'plus') => void;
  onUpgradeToPro?: () => void;
  /** Ouvre la fiche des formules KONAN Pro et KONAN Plus */
  onOpenPlans?: () => void;
  /** Bouton « KONAN Plus » : payer ou prolonger KONAN Plus (absent = bouton caché) */
  onOpenPlus?: () => void;
  /** Compte administrateur : formule essayée sans payer (« Mode Pro » / « Mode Plus ») */
  adminTier?: 'pro' | 'plus';
  onSetAdminTier?: (tier: 'pro' | 'plus') => void;
  /** Compte administrateur : ouvre la console (paiements à vérifier) */
  onOpenAdmin?: () => void;
  /** Fin de l'abonnement payé (affichée sous la formule) */
  subscriptionEndsAt?: string | null;

  // PLUS features props:
  invitedEmails?: string[];
  academicGoal?: AcademicGoal;
  /** KONAN Plus (ou administrateur) : affiche « Mon objectif » */
  showGoal?: boolean;
  onOpenGroupModal?: () => void;
  onOpenGoalModal?: () => void;
  onOpenPrivacyModal?: () => void;
  /** Dernier changement de nom (le suivant n'est possible que 3 mois après) */
  nameChangedAt?: string;
  /** Total de tous les XP gagnés depuis le début (le classement de la ligue, lui, repart de 0 chaque semaine) */
  totalXp?: number;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  userAccount,
  studentName,
  academicLevel,
  isDemoMode,
  onLogout,
  onUpdateProfile,
  avatarConfig,
  hasCustomizedAvatar = false,
  onOpenAvatarEditor,
  onExportData,
  onImportData,
  onResetData,
  planTier,
  onSelectPlan,
  onUpgradeToPro,
  onOpenPlans,
  onOpenPlus,
  adminTier,
  onSetAdminTier,
  onOpenAdmin,
  subscriptionEndsAt,
  invitedEmails: _invitedEmails = [],
  academicGoal,
  showGoal = false,
  onOpenGroupModal: _onOpenGroupModal,
  onOpenGoalModal,
  onOpenPrivacyModal,
  nameChangedAt,
  totalXp,
  country,
}) => {
  const [lang] = useLanguage();
  const lockedUntil = nextNameChangeAt(nameChangedAt);
  const { toggleTheme, isLight } = useTheme();

  // Local form state for editable profile fields only (name, filiere)
  const [editName, setEditName] = useState('');
  const [nameError, setNameError] = useState('');
  const [editFiliere, setEditFiliere] = useState('');
  const [editCountry, setEditCountry] = useState(PROGRAM_COUNTRY);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const currentPlan = planTier || userAccount?.planTier || 'free';


  useEffect(() => {
    if (isOpen) {
      setEditName(studentName || userAccount?.name || '');
      setEditFiliere(academicLevel || userAccount?.academicLevel || '');
      setEditCountry(normalizeCountry(country || userAccount?.country) || PROGRAM_COUNTRY);
      setSaveSuccess(false);
    }
  }, [isOpen, studentName, academicLevel, userAccount, country]);

  if (!isOpen) return null;

  const displayName = editName || studentName || userAccount?.name || 'Étudiant';

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (onUpdateProfile) {
      // Le nom est vu par d'autres élèves (ligue) : il doit être correct
      const currentName = (studentName || userAccount?.name || '').trim();
      const wanted = editName.trim() || currentName;
      let finalName = currentName;
      if (wanted !== currentName) {
        // Un seul changement de nom tous les 3 mois
        if (lockedUntil) {
          setNameError(`Tu as déjà changé ton nom récemment. Prochain changement possible le ${new Date(lockedUntil).toLocaleDateString('fr-FR')}.`);
          soundFX.playNotificationPing();
          return;
        }
        const check = checkStudentName(wanted);
        if ('reason' in check) {
          setNameError(check.reason);
          soundFX.playNotificationPing();
          return;
        }
        finalName = check.name;
      }
      setNameError('');
      const finalFiliere = editFiliere.trim() || academicLevel || userAccount?.academicLevel || 'Licence Universitaire';
      onUpdateProfile({
        name: finalName,
        academicLevel: finalFiliere,
        country: editCountry,
      });
      soundFX.playCheckmarkPop();
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3500);
    }
  };

  return (
    <div className="fixed inset-0 z-[95] flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] dark:bg-[#0A0F1C] dark:border-white/10 text-slate-900 dark:text-slate-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 bg-slate-50 dark:border-slate-800/80 dark:bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-slate-900 ring-1 ring-amber-400/40 text-[#F5C451] shadow-sm">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-wide">
                {t('settingsTitle', lang)}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t('settingsDesc', lang)}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:text-white dark:hover:bg-slate-800/60 transition-colors cursor-pointer"
            aria-label={t('close', lang)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body with Scroll */}
        <div className="p-5 sm:p-6 space-y-6 overflow-y-auto flex-1 custom-scrollbar">

          {/* SECTION 1: PROFIL UTILISATEUR (ÉDITION RESTREINTE : NOM, FILIÈRE) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-sky-700 dark:text-sky-300" />
                  {t('profileTitle', lang)}
                </span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {t('profileSubtitle', lang)}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 dark:bg-slate-950/60 dark:border-slate-800/80 space-y-4">
              
              {/* Profil : avatar animé centré, anneau doré pour Pro, nom, classe et bouton Personnaliser mon personnage */}
              <div className="flex flex-col items-center text-center gap-2 pb-4 border-b border-slate-200 dark:border-white/10">
                <div className="flex flex-col items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onOpenAvatarEditor?.()}
                    disabled={!onOpenAvatarEditor}
                    aria-label="Personnaliser mon personnage"
                    className={`relative rounded-full p-[3px] shrink-0 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 disabled:cursor-default ${
                      currentPlan === 'free' ? 'bg-slate-200 dark:bg-white/15' : 'bg-[conic-gradient(from_210deg,#F5C451,#FDE68A,#B7791F,#F5C451)]'
                    }`}
                  >
                    <AnimatedAvatar
                      config={avatarConfig}
                      seed={userAccount?.konanId || displayName}
                      size={88}
                      showCustomizeBadge={!hasCustomizedAvatar}
                      alt={displayName}
                    />
                  </button>
                  {onOpenAvatarEditor && (
                    <button
                      type="button"
                      onClick={onOpenAvatarEditor}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-black shadow-sm cursor-pointer transition-colors"
                    >
                      <Palette className="w-3.5 h-3.5" />
                      <span>Personnaliser mon personnage</span>
                    </button>
                  )}
                </div>
                <h4 className={`text-[22px] font-extrabold tracking-tight leading-snug break-words ${
                  currentPlan === 'plus'
                    ? 'plus-multicolor-shimmer-text'
                    : currentPlan === 'pro'
                    ? 'gold-shimmer-text'
                    : 'text-slate-900 dark:text-white'
                }`}>{displayName}</h4>
                <p className="text-[13px] text-slate-600 dark:text-slate-400 break-words">
                  {editFiliere || academicLevel || userAccount?.academicLevel || 'Classe non renseignée'}
                  {userAccount?.konanId ? <> · KONAN ID <span className="font-mono">{userAccount.konanId}</span></> : null}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-[0.14em] border ${
                      currentPlan === 'free'
                        ? 'bg-slate-100 text-slate-700 border-slate-300 dark:bg-white/5 dark:text-slate-300 dark:border-white/15'
                        : 'bg-amber-50 text-amber-800 border-amber-300 dark:bg-amber-400/10 dark:text-[#F5C451] dark:border-[#F5C451]/40'
                    }`}
                  >
                    {currentPlan === 'pro' ? 'Pro' : currentPlan === 'plus' ? 'Plus' : 'Gratuit'}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-slate-600 dark:text-slate-400">
                    <ShieldCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                    {isDemoMode ? t('demoIsolated', lang) : 'Compte Google connecté'}
                  </span>
                </div>
                {/* Total de tous les XP gagnés (leçons, entraînements, toutes semaines et divisions) */}
                {typeof totalXp === 'number' && (
                  <div className="mt-1 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-amber-50 border border-amber-300 dark:bg-[#F5C451]/10 dark:border-[#F5C451]/40">
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-amber-800 dark:text-[#F5C451]">XP gagnés au total</span>
                    <span className="text-[17px] font-extrabold tabular-nums text-slate-900 dark:text-white">{totalXp.toLocaleString('fr-FR')}</span>
                  </div>
                )}
              </div>

              {/* Formulaire d'édition STRICTE : 1. Nom, 2. Filière */}
              <form onSubmit={handleSaveProfile} className="space-y-3.5 pt-1">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 dark:bg-slate-900 dark:border-white/10 space-y-3.5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-sky-700 dark:text-sky-400" />
                      Modifier mon Nom & ma Filière
                    </span>
                    <span className="text-[10px] font-semibold text-sky-700 dark:text-sky-300/80">Profil Étudiant</span>
                  </div>

                  {/* 1. Nom complet */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                      Nom de l'étudiant
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => { setEditName(e.target.value); if (nameError) setNameError(''); }}
                        readOnly={Boolean(lockedUntil)}
                        placeholder="Ex : Aya Kouassi"
                        maxLength={40}
                        aria-invalid={Boolean(nameError)}
                        className={`w-full px-3 py-2.5 pl-9 rounded-xl bg-white border text-xs text-slate-900 dark:bg-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-colors shadow-xs ${nameError ? 'border-rose-500 focus:border-rose-500' : 'border-slate-300 dark:border-slate-700 focus:border-sky-400'}`}
                        required
                      />
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
                    </div>
                    {nameError ? (
                      <p className="mt-1 text-[11px] font-bold text-rose-700 dark:text-rose-300" role="alert">{nameError}</p>
                    ) : lockedUntil ? (
                      <p className="mt-1 text-[11px] font-semibold text-amber-700 dark:text-amber-300">Nom modifié récemment : prochain changement possible le {new Date(lockedUntil).toLocaleDateString('fr-FR')}.</p>
                    ) : (
                      <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">Ton vrai nom : il apparaît dans le classement de la ligue. Après un changement, il faut attendre 3 mois pour en refaire un.</p>
                    )}
                  </div>

                  {/* Pays : les cours et les devoirs suivent le programme de Côte d'Ivoire */}
                  <div>
                    <label htmlFor="settings-country" className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                      Pays où tu vas à l’école
                    </label>
                    <select
                      id="settings-country"
                      value={editCountry}
                      onChange={(e) => setEditCountry(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-900 dark:bg-slate-900 dark:text-white focus:outline-none focus:border-sky-400"
                    >
                      {COUNTRIES.map((c) => <option key={c.code} value={c.code}>{c.flag} {c.name}</option>)}
                    </select>
                    {!followsIvorianProgram(editCountry) && (
                      <p className="mt-1 text-[11px] font-semibold text-amber-800 dark:text-amber-300">{OUTSIDE_PROGRAM_TEXT}</p>
                    )}
                  </div>

                  {/* 2. Classe ou Filière LMD prédéfinie (zéro saisie libre) */}
                  <div className="space-y-2.5">
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase">
                      Classe ou Filière LMD (prédéfinie)
                    </label>

                    <div className="px-3 py-2 rounded-xl bg-sky-50/80 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-400/30 flex items-center gap-2 text-xs font-extrabold text-sky-900 dark:text-sky-200">
                      <GraduationCap className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                      <span className="truncate">{editFiliere || 'Sélectionne ta classe ou filière ci-dessous'}</span>
                    </div>

                    {/* Filières & Niveaux LMD officiels */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-black uppercase tracking-wider text-sky-700 dark:text-sky-400 block">
                        Université (LMD) :
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {LMD_PROGRAMS.map((prog) => {
                          const active = editFiliere === prog.displayLabel;
                          return (
                            <button
                              key={prog.gradeLevel}
                              type="button"
                              onClick={() => { soundFX.playCheckmarkPop(); setEditFiliere(prog.displayLabel); }}
                              className={`text-[11px] px-2.5 py-1.5 rounded-xl border transition-colors cursor-pointer font-bold ${
                                active
                                  ? 'bg-sky-500 text-white border-sky-500 shadow-xs'
                                  : 'bg-white hover:bg-sky-50 text-slate-700 border-slate-300 hover:border-sky-300 dark:bg-slate-900/80 dark:hover:bg-slate-950 dark:text-slate-200 dark:border-slate-700'
                              }`}
                            >
                              {prog.displayLabel}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Classes Collège, Lycée & BTS */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                        Collège, Lycée &amp; BTS :
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {PREDEFINED_LYCEE_CLASSES.map((f) => (
                          <button
                            key={f}
                            type="button"
                            onClick={() => { soundFX.playCheckmarkPop(); setEditFiliere(f); }}
                            className={`text-[11px] px-2.5 py-1 rounded-xl border transition-colors cursor-pointer ${
                              editFiliere === f
                                ? 'bg-sky-400 text-slate-950 border-sky-400 font-bold'
                                : 'bg-white hover:bg-sky-50 text-slate-700 border-slate-300 hover:border-sky-300 dark:bg-slate-900/80 dark:hover:bg-slate-950 dark:text-slate-300 dark:border-slate-800 dark:hover:border-sky-400/40'
                            }`}
                          >
                            {f}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Submit button & Success Feedback */}
                  <div className="pt-2 space-y-2">
                    <Button
                      type="submit"
                      variant="glow"
                      size="md"
                      leftIcon={<Save className="w-4 h-4" />}
                      className="konan-btn w-full cursor-pointer text-xs sm:text-sm py-2.5"
                    >
                      {saveSuccess ? '✓ Nom & Filière Enregistrés !' : 'Enregistrer mon Nom et ma Filière'}
                    </Button>

                    {saveSuccess && (
                      <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 dark:bg-emerald-500/20 dark:border-emerald-500/40 dark:text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2 animate-in fade-in">
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span>Modifications appliquées immédiatement à toute l'application !</span>
                      </div>
                    )}
                  </div>
                </div>
              </form>

              {/* Administrateur : console (paiements à vérifier), accessible aussi en ligne */}
              {onOpenAdmin && (
                <button
                  type="button"
                  onClick={onOpenAdmin}
                  className="w-full mt-1 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-white/5 dark:text-[#F5C451] border border-slate-900 dark:border-[#F5C451]/40 text-xs font-extrabold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4" /> Console admin · paiements à vérifier
                </button>
              )}

              {/* Bouton de Déconnexion */}
              {onLogout && (
                <div className="pt-3 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between gap-3">
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                    {t('logoutDescription', lang)}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      onLogout();
                      onClose();
                    }}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200 hover:border-rose-300 text-rose-700 hover:text-rose-800 dark:bg-rose-500/15 dark:hover:bg-rose-500/25 dark:border-rose-500/30 dark:hover:border-rose-500/50 dark:text-rose-300 dark:hover:text-rose-200 text-xs font-semibold transition-all cursor-pointer shadow-xs shrink-0"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>{t('logoutButton', lang)}</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* SECTION 1.5: FORMULE & ABONNEMENT */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-700 dark:text-sky-300" />
                  Formule & Abonnement
                </span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {currentPlan === 'free' ? 'Tu utilises KONAN Gratuit.' : `KONAN ${currentPlan === 'plus' ? 'Plus' : 'Pro'} est actif sur ton compte.`}
                </p>
              </div>
            </div>

            {/* Carte sobre et haut de gamme : formule actuelle + accès à la fiche des formules */}
            <div className="relative overflow-hidden p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 dark:bg-[#0B0F17] dark:border-white/10 space-y-3.5">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" aria-hidden="true" />
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-white/5 ring-1 ring-amber-400/40 flex items-center justify-center shrink-0">
                  <Crown className="w-5 h-5 text-amber-300" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300/90">Ta formule</p>
                  <p className="text-sm font-black text-slate-900 dark:text-white">
                    {currentPlan === 'free' ? 'KONAN Gratuit' : `KONAN ${currentPlan === 'plus' ? 'Plus' : 'Pro'}`}
                  </p>
                  {currentPlan !== 'free' && subscriptionEndsAt && (
                    <p className="text-[11px] text-slate-600 dark:text-slate-400">
                      Jusqu’au {new Date(subscriptionEndsAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                  )}
                </div>
              </div>
              <p className="text-[12px] text-slate-600 dark:text-slate-400 leading-relaxed">
                {onSetAdminTier
                  ? 'Tu ne paies pas : passe de Pro à Plus pour voir l’application exactement comme un élève de chaque formule.'
                  : currentPlan === 'free'
                  ? 'Devoirs au format officiel, énergie illimitée, méthodes Feynman et Time Blocking : découvre KONAN Pro.'
                  : 'Retrouve ton abonnement et prolonge-le quand tu veux : les jours restants sont conservés.'}
              </p>
              {/* Compte administrateur : il ne paie pas, il choisit la formule à essayer */}
              {onSetAdminTier && (
                <div className="rounded-xl p-2.5 bg-slate-50 border border-slate-200 dark:bg-white/[0.03] dark:border-white/10 space-y-2">
                  <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">Compte administrateur : choisis la formule à utiliser</p>
                  <div className="grid grid-cols-2 gap-2">
                    {(['pro', 'plus'] as const).map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => { if (adminTier !== t) onSetAdminTier(t); }}
                        aria-pressed={adminTier === t}
                        className={`py-2 rounded-lg text-[12px] font-black border-2 transition-colors cursor-pointer ${adminTier === t
                          ? 'bg-[#0F172A] text-white border-[#0F172A] dark:bg-amber-300 dark:text-slate-950 dark:border-amber-300'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400 dark:bg-transparent dark:text-slate-300 dark:border-white/15'}`}
                      >
                        Mode {t === 'plus' ? 'Plus' : 'Pro'}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {currentPlan !== 'plus' && !onSetAdminTier && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  if (onOpenPlans) onOpenPlans();
                  else onSelectPlan?.('pro');
                }}
                className="w-full py-3 rounded-xl text-[13px] font-black tracking-wide bg-slate-900 text-white hover:bg-slate-800 dark:bg-amber-300 dark:text-slate-950 dark:hover:bg-amber-200 transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
              >
                <Sparkles className="w-4 h-4" />
                <span>{currentPlan === 'free' ? 'Découvrir KONAN Pro' : 'Mon abonnement KONAN Pro'}</span>
              </button>
              )}
              {currentPlan !== 'free' && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    if (onUpgradeToPro) onUpgradeToPro();
                    else onSelectPlan?.('pro');
                  }}
                  className="w-full text-[12px] font-bold text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>Reconfigurer mon planning Pro</span>
                </button>
              )}
            </div>

            {/* Bouton « KONAN Plus » : séparé de Pro, l'élève passe à Plus en appuyant ici (choix du fondateur) */}
            {onOpenPlus && !onSetAdminTier && (
              <button
                type="button"
                onClick={() => { onClose(); onOpenPlus(); }}
                className="w-full flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 dark:bg-[#0B0F17] dark:border-white/10 dark:hover:border-white/20 transition-colors text-left cursor-pointer active:scale-[0.99]"
              >
                <span className="w-10 h-10 rounded-xl bg-[#0F172A] ring-1 ring-amber-400/40 flex items-center justify-center shrink-0">
                  <Gem className="w-5 h-5 text-amber-300" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300/90">KONAN Plus</span>
                  <span className="block text-sm font-black text-slate-900 dark:text-white truncate">{currentPlan === 'plus' ? 'Mon abonnement KONAN Plus' : 'Passer à KONAN Plus'}</span>
                  <span className="block text-[11px] text-slate-600 dark:text-slate-400">
                    {currentPlan === 'plus' ? 'Prolonge-le quand tu veux.' : 'KONE suit ton objectif, photo de tes exercices, devoirs corrigés en photo.'}
                  </span>
                </span>
                <span className="text-[12px] font-bold text-slate-600 dark:text-slate-300 shrink-0">{currentPlan === 'plus' ? 'Voir' : '5 000 F/mois'}</span>
              </button>
            )}

            {/* KONAN Plus : mon objectif (KONE adapte son ton et son exigence) */}
            {showGoal && onOpenGoalModal && (() => {
              const goal = studyGoalInfo(academicGoal);
              return (
                <button
                  type="button"
                  onClick={onOpenGoalModal}
                  className="w-full flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 dark:bg-[#0B0F17] dark:border-white/10 dark:hover:border-white/20 transition-colors text-left cursor-pointer active:scale-[0.99]"
                >
                  <span className="w-10 h-10 rounded-xl bg-amber-50 ring-1 ring-amber-200 text-amber-700 dark:bg-amber-400/10 dark:ring-amber-400/30 dark:text-amber-300 flex items-center justify-center shrink-0 font-black tabular-nums">
                    {goal ? goal.target : <Target className="w-5 h-5" />}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300/90">Mon objectif</span>
                    <span className="block text-sm font-black text-slate-900 dark:text-white truncate">{goal ? goal.title : 'Choisis ton objectif'}</span>
                    <span className="block text-[11px] text-slate-600 dark:text-slate-400">KONE adapte sa façon de te parler et son exigence.</span>
                  </span>
                  <span className="text-[12px] font-bold text-slate-600 dark:text-slate-300 shrink-0">{goal ? 'Changer' : 'Choisir'}</span>
                </button>
              );
            })()}
          </div>

          {/* SECTION 1.8: APPARENCE & COULEUR DE FOND */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  {isLight ? <Sun className="w-3.5 h-3.5 text-amber-500" /> : <Moon className="w-3.5 h-3.5 text-sky-700 dark:text-sky-300" />}
                  Apparence & Couleur de Fond
                </span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Basculez entre le mode sombre (fond noir d'origine) et le mode clair (fond blanc).
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5 p-1 rounded-2xl bg-slate-100 border border-slate-200 dark:bg-slate-950/70 dark:border-slate-800">
              <button
                type="button"
                onClick={() => {
                  if (isLight) toggleTheme();
                  soundFX.playCheckmarkPop();
                }}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  !isLight
                    ? 'bg-slate-900 text-white ring-1 ring-white/15 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-900/60'
                }`}
              >
                <Moon className="w-4 h-4 text-sky-700 dark:text-sky-300" />
                <span>Mode Sombre</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  if (!isLight) toggleTheme();
                  soundFX.playCheckmarkPop();
                }}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isLight
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-md shadow-amber-950/30'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-900/60'
                }`}
              >
                <Sun className="w-4 h-4 text-amber-200" />
                <span>Mode Clair</span>
              </button>
            </div>
          </div>

          {/* SECTION 2: GESTION DES DONNÉES */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-700 dark:text-sky-300" />
              {t('dataTitle', lang)}
            </span>

            <div className="space-y-2">
              {onExportData && (
                <button
                  type="button"
                  onClick={() => {
                    onExportData();
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-slate-100 text-slate-800 dark:bg-slate-950/50 dark:border-slate-800 dark:hover:border-slate-700 dark:hover:bg-slate-900/60 dark:text-slate-200 transition-colors text-xs cursor-pointer text-left shadow-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <Download className="w-4 h-4 text-sky-700 dark:text-sky-300" />
                    <span>{t('exportConfig', lang)}</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">.json</span>
                </button>
              )}

              {onImportData && (
                <button
                  type="button"
                  onClick={() => {
                    onImportData();
                    onClose();
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-slate-100 text-slate-800 dark:bg-slate-950/50 dark:border-slate-800 dark:hover:border-slate-700 dark:hover:bg-slate-900/60 dark:text-slate-200 transition-colors text-xs cursor-pointer text-left shadow-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <Upload className="w-4 h-4 text-sky-700 dark:text-sky-400" />
                    <span>{t('importConfig', lang)}</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">.json</span>
                </button>
              )}

              {onResetData && (
                <button
                  type="button"
                  onClick={() => {
                    onResetData();
                    onClose();
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-rose-50 border border-rose-200 hover:border-rose-300 hover:bg-rose-100 text-rose-700 dark:bg-rose-500/5 dark:border-rose-500/20 dark:hover:border-rose-500/40 dark:hover:bg-rose-500/10 dark:text-rose-300 transition-colors text-xs cursor-pointer text-left shadow-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <RotateCcw className="w-4 h-4 text-rose-500 dark:text-rose-400" />
                    <span>{t('resetDefault', lang)}</span>
                  </div>
                </button>
              )}

              {onOpenPrivacyModal && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenPrivacyModal();
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-slate-100 text-slate-800 dark:bg-slate-950/50 dark:border-slate-800 dark:hover:border-slate-700 dark:hover:bg-slate-900/60 dark:text-slate-200 transition-colors text-xs cursor-pointer text-left shadow-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Politique de Confidentialité & Sécurité Firebase</span>
                  </div>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">Consultée</span>
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-end px-6 py-4 border-t border-slate-200 bg-slate-50/70 dark:border-slate-800/80 dark:bg-slate-900/40">
          <Button
            variant="secondary"
            size="sm"
            onClick={onClose}
          >
            {t('close', lang)}
          </Button>
        </div>
      </div>
    </div>
  );
};
