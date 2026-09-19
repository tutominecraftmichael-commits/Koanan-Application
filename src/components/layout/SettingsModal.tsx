import React, { useState, useEffect } from 'react';
import { 
  X, 
  Settings, 
  User, 
  LogOut, 
  Globe, 
  Check, 
  Download, 
  Upload, 
  RotateCcw,
  ShieldCheck,
  Sparkles,
  GraduationCap,
  Save
} from 'lucide-react';
import type { UserAccount } from '../../types';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { useLanguage, t } from '../../lib/i18n';

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
  onExportData?: () => void;
  onImportData?: () => void;
  onResetData?: () => void;
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
  onExportData,
  onImportData,
  onResetData,
}) => {
  const [lang, setLang] = useLanguage();

  // Local form state for editable profile fields only (name, filiere)
  const [editName, setEditName] = useState('');
  const [editFiliere, setEditFiliere] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setEditName(studentName || userAccount?.name || '');
      setEditFiliere(academicLevel || userAccount?.academicLevel || '');
      setSaveSuccess(false);
    }
  }, [isOpen, studentName, academicLevel, userAccount]);

  if (!isOpen) return null;

  const displayName = editName || studentName || userAccount?.name || 'Étudiant';
  const displayEmail = userAccount?.email || (isDemoMode ? 'alexandre.etudiant@demo.univ.fr' : 'Non renseigné');

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (onUpdateProfile) {
      onUpdateProfile({
        name: editName.trim() || 'Étudiant',
        academicLevel: editFiliere.trim() || 'Licence Universitaire',
      });
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 border border-slate-800/90 shadow-2xl shadow-indigo-950/40 overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800/80 bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 shadow-sm">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-wide">
                {t('settingsTitle', lang)}
              </h2>
              <p className="text-xs text-slate-400">
                {t('settingsDesc', lang)}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors cursor-pointer"
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
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-cyan-400" />
                  {t('profileTitle', lang)}
                </span>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {t('profileSubtitle', lang)}
                </p>
              </div>
              <Badge variant={userAccount?.isLoggedIn ? (isDemoMode ? 'amber' : 'emerald') : 'slate'} size="sm" dot>
                {userAccount?.isLoggedIn 
                  ? (isDemoMode ? t('demoAccount', lang) : t('googleAccount', lang)) 
                  : t('guestAccount', lang)}
              </Badge>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-4">
              
              {/* Profile Card Header */}
              <div className="flex items-center gap-3.5 pb-3 border-b border-slate-800/60">
                {userAccount?.avatar ? (
                  <img
                    src={userAccount.avatar}
                    alt={displayName}
                    className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500/40 shadow-md shrink-0"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0">
                    {displayName.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-bold text-white truncate">{displayName}</h4>
                    <span 
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider shrink-0 border ${
                        userAccount?.planTier === 'pro'
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                          : userAccount?.planTier === 'plus'
                          ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40'
                          : 'bg-slate-800 text-sky-300 border-sky-500/30'
                      }`}
                    >
                      {userAccount?.planTier === 'pro' ? '⭐ PRO' : userAccount?.planTier === 'plus' ? '👑 PLUS' : 'FREE'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono truncate">{displayEmail}</p>
                  <div className="flex items-center gap-1.5 mt-1 text-[11px] text-cyan-400">
                    <ShieldCheck className="w-3 h-3 text-cyan-400" />
                    <span>{isDemoMode ? t('demoIsolated', lang) : t('secureSession', lang)}</span>
                  </div>
                </div>
              </div>

              {/* Formulaire d'édition STRICTE : 1. Nom, 2. Filière */}
              <form onSubmit={handleSaveProfile} className="space-y-3.5">
                
                {/* 1. Nom complet */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase mb-1">
                    {t('nameLabel', lang)}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      placeholder={t('namePlaceholder', lang)}
                      className="w-full px-3 py-2 pl-9 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors"
                      required
                    />
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
                  </div>
                </div>

                {/* 2. Filière */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase mb-1">
                    {t('filiereLabel', lang)}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={editFiliere}
                      onChange={(e) => setEditFiliere(e.target.value)}
                      placeholder={t('filierePlaceholder', lang)}
                      className="w-full px-3 py-2 pl-9 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors"
                      required
                    />
                    <GraduationCap className="w-4 h-4 text-indigo-400 absolute left-3 top-2.5 pointer-events-none" />
                  </div>
                </div>

                {/* Submit button & Success Feedback */}
                <div className="pt-2 flex items-center justify-between gap-3">
                  {saveSuccess ? (
                    <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5 animate-in fade-in">
                      <Check className="w-4 h-4" />
                      {t('profileSavedSuccess', lang)}
                    </span>
                  ) : <div />}

                  <Button
                    type="submit"
                    variant="glow"
                    size="sm"
                    leftIcon={<Save className="w-3.5 h-3.5" />}
                    className="cursor-pointer text-xs"
                  >
                    {t('saveProfile', lang)}
                  </Button>
                </div>
              </form>

              {/* Bouton de Déconnexion */}
              {onLogout && (
                <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between gap-3">
                  <p className="text-[11px] text-slate-400 leading-tight">
                    {t('logoutDescription', lang)}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      onLogout();
                      onClose();
                    }}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/30 hover:border-rose-500/50 text-rose-300 hover:text-rose-200 text-xs font-semibold transition-all cursor-pointer shadow-xs shrink-0"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>{t('logoutButton', lang)}</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* SECTION 2: LANGUE DE L'APPLICATION (FR / EN) - BASSEMENT TOTAL */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-indigo-400" />
              {t('languageTitle', lang)}
            </span>
            <p className="text-[11px] text-slate-400">
              {t('languageSubtitle', lang)}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Option Français */}
              <button
                type="button"
                onClick={() => setLang('fr')}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer relative flex items-center justify-between gap-3 ${
                  lang === 'fr'
                    ? 'bg-gradient-to-br from-indigo-950/60 to-slate-900 border-cyan-400/80 ring-1 ring-cyan-400/50 shadow-md shadow-cyan-500/10'
                    : 'bg-slate-950/50 border-slate-800 hover:border-slate-700 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl select-none" role="img" aria-label="Drapeau français">🇫🇷</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white">{t('langFrench', lang)}</span>
                      {lang === 'fr' && (
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                          {t('active', lang)}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      {t('langFrenchDesc', lang)}
                    </span>
                  </div>
                </div>
                {lang === 'fr' && (
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                )}
              </button>

              {/* Option English */}
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer relative flex items-center justify-between gap-3 ${
                  lang === 'en'
                    ? 'bg-gradient-to-br from-indigo-950/60 to-slate-900 border-cyan-400/80 ring-1 ring-cyan-400/50 shadow-md shadow-cyan-500/10'
                    : 'bg-slate-950/50 border-slate-800 hover:border-slate-700 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl select-none" role="img" aria-label="UK flag">🇬🇧</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white">{t('langEnglish', lang)}</span>
                      {lang === 'en' && (
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                          {t('active', lang)}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      {t('langEnglishDesc', lang)}
                    </span>
                  </div>
                </div>
                {lang === 'en' && (
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* SECTION 3: GESTION DES DONNÉES */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              {t('dataTitle', lang)}
            </span>

            <div className="space-y-2">
              {onExportData && (
                <button
                  type="button"
                  onClick={() => {
                    onExportData();
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-950/50 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/60 transition-colors text-xs text-slate-200 cursor-pointer text-left"
                >
                  <div className="flex items-center gap-2.5">
                    <Download className="w-4 h-4 text-cyan-400" />
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
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-950/50 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/60 transition-colors text-xs text-slate-200 cursor-pointer text-left"
                >
                  <div className="flex items-center gap-2.5">
                    <Upload className="w-4 h-4 text-indigo-400" />
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
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-rose-500/5 border border-rose-500/20 hover:border-rose-500/40 hover:bg-rose-500/10 transition-colors text-xs text-rose-300 cursor-pointer text-left"
                >
                  <div className="flex items-center gap-2.5">
                    <RotateCcw className="w-4 h-4 text-rose-400" />
                    <span>{t('resetDefault', lang)}</span>
                  </div>
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-end px-6 py-4 border-t border-slate-800/80 bg-slate-900/40">
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
