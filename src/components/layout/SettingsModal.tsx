import React, { useState, useEffect, useRef } from 'react';
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
import { Zap, Sun, Moon, Camera, Crown } from 'lucide-react';
import { getDisplayAvatar, resizeImageToAvatar } from '../../lib/avatar';
import type { UserAccount, AcademicGoal } from '../../types';
import { Button } from '../ui/Button';
import { useLanguage, t } from '../../lib/i18n';
import { soundFX } from '../../lib/audioEffects';
import { useTheme } from '../../context/ThemeContext';
import { checkStudentName, nextNameChangeAt } from '../../../api/_nameRules.js';


const COMMON_FILIERES = [
  'Licence Informatique',
  'Médecine & Santé (PASS)',
  'Droit & Sciences Politiques',
  'Classes Préparatoires (CPGE)',
  'Économie & Gestion',
  'École d’Ingénieurs',
  'Lycée (Baccalauréat)',
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
    countryCode?: string 
  }) => void;
  /** Nouvelle photo de profil (data URL), ou null pour revenir à la photo du compte. */
  onUpdateAvatar?: (dataUrl: string | null) => void;
  onExportData?: () => void;
  onImportData?: () => void;
  onResetData?: () => void;
  planTier?: 'free' | 'pro' | 'plus';
  onSelectPlan?: (planId: 'free' | 'pro' | 'plus') => void;
  onUpgradeToPro?: () => void;
  /** Ouvre la fiche des formules KONAN Pro et KONAN Plus */
  onOpenPlans?: () => void;
  /** Fin de l'abonnement payé (affichée sous la formule) */
  subscriptionEndsAt?: string | null;

  // PLUS features props:
  invitedEmails?: string[];
  academicGoal?: AcademicGoal;
  onOpenGroupModal?: () => void;
  onOpenGoalModal?: () => void;
  onOpenPrivacyModal?: () => void;
  /** Dernier changement de nom (le suivant n'est possible que 3 mois après) */
  nameChangedAt?: string;
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
  onUpdateAvatar,
  onExportData,
  onImportData,
  onResetData,
  planTier,
  onSelectPlan,
  onUpgradeToPro,
  onOpenPlans,
  subscriptionEndsAt,
  invitedEmails: _invitedEmails = [],
  academicGoal: _academicGoal = 'target_16',
  onOpenGroupModal: _onOpenGroupModal,
  onOpenGoalModal: _onOpenGoalModal,
  onOpenPrivacyModal,
  nameChangedAt,
}) => {
  const [lang] = useLanguage();
  const lockedUntil = nextNameChangeAt(nameChangedAt);
  const { toggleTheme, isLight } = useTheme();

  // Local form state for editable profile fields only (name, filiere)
  const [editName, setEditName] = useState('');
  const [nameError, setNameError] = useState('');
  const [editFiliere, setEditFiliere] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [isAvatarBusy, setIsAvatarBusy] = useState(false);
  const [avatarError, setAvatarError] = useState<string | null>(null);
  const avatarInputRef = useRef<HTMLInputElement>(null);

  const currentPlan = planTier || userAccount?.planTier || 'free';


  useEffect(() => {
    if (isOpen) {
      setEditName(studentName || userAccount?.name || '');
      setEditFiliere(academicLevel || userAccount?.academicLevel || '');
      setSaveSuccess(false);
    }
  }, [isOpen, studentName, academicLevel, userAccount]);

  if (!isOpen) return null;

  const displayName = editName || studentName || userAccount?.name || 'Étudiant';
  const currentAvatar = getDisplayAvatar(userAccount);

  const handleAvatarFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = ''; // permet de rechoisir la même photo
    if (!file || !onUpdateAvatar) return;
    setAvatarError(null);
    setIsAvatarBusy(true);
    try {
      const dataUrl = await resizeImageToAvatar(file);
      onUpdateAvatar(dataUrl);
      soundFX.playCheckmarkPop();
    } catch (err) {
      setAvatarError(err instanceof Error ? err.message : 'Impossible de changer la photo.');
    } finally {
      setIsAvatarBusy(false);
    }
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (onUpdateProfile) {
      // Le nom est vu par d'autres élèves (ligue) : il doit être correct
      const currentName = (studentName || userAccount?.name || '').trim();
      const wanted = editName.trim() || currentName;
      // Un seul changement de nom tous les 3 mois
      if (wanted !== currentName && lockedUntil) {
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
      setNameError('');
      const finalName = check.name;
      const finalFiliere = editFiliere.trim() || academicLevel || userAccount?.academicLevel || 'Licence Universitaire';
      onUpdateProfile({
        name: finalName,
        academicLevel: finalFiliere,
      });
      soundFX.playCheckmarkPop();
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-900/95 dark:to-slate-950 dark:border-slate-800/90 dark:shadow-sky-400/40 text-slate-900 dark:text-slate-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 bg-slate-50 dark:border-slate-800/80 dark:bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-sky-400/15 border border-sky-400/30 text-sky-700 dark:text-sky-400 shadow-sm">
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
                  <User className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  {t('profileTitle', lang)}
                </span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {t('profileSubtitle', lang)}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 dark:bg-slate-950/60 dark:border-slate-800/80 space-y-4">
              
              {/* Profile Card Header */}
              <div className="flex items-center gap-3.5 pb-3 border-b border-slate-200 dark:border-slate-800/60">
                {/* Photo de profil : la toucher ouvre la galerie pour la changer */}
                <div className="flex flex-col items-center gap-1 shrink-0">
                  <button
                    type="button"
                    onClick={() => avatarInputRef.current?.click()}
                    disabled={!onUpdateAvatar || isAvatarBusy}
                    aria-label="Changer la photo de profil"
                    className="relative w-16 h-16 rounded-full shrink-0 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 disabled:cursor-default"
                  >
                    {currentAvatar ? (
                      <img
                        src={currentAvatar}
                        alt={displayName}
                        className="w-16 h-16 rounded-full object-cover border-2 border-sky-400/40 shadow-md"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-sky-400 to-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-md">
                        {displayName.charAt(0).toUpperCase()}
                      </div>
                    )}
                    {isAvatarBusy && (
                      <span className="absolute inset-0 rounded-full bg-black/40 flex items-center justify-center">
                        <span className="w-6 h-6 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                      </span>
                    )}
                    {onUpdateAvatar && (
                      <span className="absolute -bottom-0.5 -right-0.5 w-6 h-6 rounded-full bg-sky-400 text-slate-950 border-2 border-white dark:border-slate-900 flex items-center justify-center shadow group-hover:bg-sky-400 transition-colors">
                        <Camera className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </button>
                  {onUpdateAvatar && userAccount?.customAvatar && !isAvatarBusy && (
                    <button
                      type="button"
                      onClick={() => { setAvatarError(null); onUpdateAvatar(null); }}
                      className="text-[10px] font-semibold text-slate-500 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400 cursor-pointer"
                    >
                      Retirer ma photo
                    </button>
                  )}
                  <input
                    ref={avatarInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleAvatarFile}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  {/* Nom en entier sur sa propre ligne (retour à la ligne si besoin), formule en dessous */}
                  <h4 className={`text-base font-black leading-snug break-words pb-0.5 ${
                    currentPlan === 'plus'
                      ? 'plus-multicolor-shimmer-text'
                      : currentPlan === 'pro'
                      ? 'gold-shimmer-text'
                      : 'text-slate-900 dark:text-white'
                  }`}>{displayName}</h4>
                  <span
                    className={`inline-flex items-center mt-1 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${
                      currentPlan === 'pro'
                        ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/40'
                        : currentPlan === 'plus'
                        ? 'bg-sky-400/20 text-sky-800 dark:text-sky-300 border-sky-400/40'
                        : 'bg-slate-200 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
                    }`}
                  >
                    {currentPlan === 'pro' ? 'PRO' : currentPlan === 'plus' ? 'PLUS' : 'GRATUIT'}
                  </span>
                  <p className="text-xs text-sky-700 dark:text-sky-300 font-semibold flex items-start gap-1.5 mt-1 break-words">
                    <GraduationCap className="w-3.5 h-3.5 text-sky-700 dark:text-sky-400 shrink-0 mt-px" />
                    <span className="min-w-0">{editFiliere || academicLevel || userAccount?.academicLevel || 'Filière non renseignée'}</span>
                  </p>
                  
                  {/* Compte Google connecté */}
                  <div className="flex items-center gap-1.5 mt-1 text-xs text-slate-600 dark:text-slate-300">
                    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                    <span className="font-medium text-slate-700 dark:text-slate-300">Compte connecté</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 mt-1 text-[11px] text-cyan-600 dark:text-cyan-400">
                    <ShieldCheck className="w-3 h-3 text-cyan-500 dark:text-cyan-400" />
                    <span>{isDemoMode ? t('demoIsolated', lang) : t('secureSession', lang)}</span>
                  </div>
                  {onUpdateAvatar && (
                    <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                      Touche ta photo pour la changer.
                    </p>
                  )}
                </div>
              </div>
              {avatarError && (
                <p role="alert" className="-mt-2 text-xs font-medium text-rose-600 dark:text-rose-400">
                  {avatarError}
                </p>
              )}

              {/* Formulaire d'édition STRICTE : 1. Nom, 2. Filière */}
              <form onSubmit={handleSaveProfile} className="space-y-3.5 pt-1">
                <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200 dark:bg-sky-400/20 dark:border-sky-400/30 space-y-3.5 shadow-sm">
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

                  {/* 2. Filière */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                      Filière ou Niveau d'études
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={editFiliere}
                        onChange={(e) => setEditFiliere(e.target.value)}
                        placeholder="Ex : Licence Informatique, Droit, Médecine..."
                        className="w-full px-3 py-2.5 pl-9 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 dark:bg-slate-900 dark:border-slate-700 dark:text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 transition-colors shadow-xs"
                        required
                      />
                      <GraduationCap className="w-4 h-4 text-sky-700 dark:text-sky-400 absolute left-3 top-2.5 pointer-events-none" />
                    </div>

                    {/* Suggestions de filières en 1 clic */}
                    <div className="mt-2">
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 block mb-1">Suggestions rapides :</span>
                      <div className="flex flex-wrap gap-1.5">
                        {COMMON_FILIERES.map((f, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setEditFiliere(f)}
                            className={`text-[10px] px-2 py-0.5 rounded-lg border transition-colors cursor-pointer ${
                              editFiliere === f 
                                ? 'bg-sky-400 text-slate-950 border-sky-400 font-bold' 
                                : 'bg-white hover:bg-sky-50 text-slate-700 border-slate-300 hover:border-sky-300 dark:bg-slate-900/80 dark:hover:bg-sky-400 dark:text-slate-300 dark:border-slate-800 dark:hover:border-sky-400/40'
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
                      className="w-full cursor-pointer text-xs sm:text-sm font-bold py-2.5 shadow-lg shadow-sky-400/20 bg-blue-600 hover:bg-blue-700 text-white"
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
                {currentPlan === 'free'
                  ? 'Devoirs au format officiel, énergie illimitée, méthodes Feynman et Time Blocking : découvre KONAN Pro.'
                  : 'Retrouve ton abonnement et prolonge-le quand tu veux : les jours restants sont conservés.'}
              </p>
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
                    ? 'bg-gradient-to-r from-sky-400 to-blue-600 text-white shadow-md shadow-sky-400/50'
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
              <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
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
                    <Download className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
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
