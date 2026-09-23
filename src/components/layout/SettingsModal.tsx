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
import type { UserAccount } from '../../types';
import { Button } from '../ui/Button';
import { useLanguage, t } from '../../lib/i18n';
import { soundFX } from '../../lib/audioEffects';

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
  onExportData?: () => void;
  onImportData?: () => void;
  onResetData?: () => void;
  onSelectPlan?: (planId: 'free' | 'pro' | 'plus') => void;
  onUpgradeToPro?: () => void;
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
  onSelectPlan: _onSelectPlan,
  onUpgradeToPro: _onUpgradeToPro,
}) => {
  const [lang] = useLanguage();

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

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (onUpdateProfile) {
      const finalName = editName.trim() || studentName || userAccount?.name || 'Étudiant';
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
                    <h4 className={`text-sm font-bold truncate ${userAccount?.planTier !== 'free' ? 'gold-shimmer-text font-black' : 'text-white'}`}>{displayName}</h4>
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
                  <p className="text-xs text-indigo-300 font-semibold truncate flex items-center gap-1.5 mt-0.5">
                    <GraduationCap className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>{editFiliere || academicLevel || userAccount?.academicLevel || 'Filière non renseignée'}</span>
                  </p>
                  
                  {/* Compte Google connecté */}
                  <div className="flex items-center gap-1.5 mt-1 text-xs text-slate-300">
                    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                    <span className="font-medium text-slate-300">Compte Google connecté</span>
                  </div>

                  <div className="flex items-center gap-1.5 mt-1 text-[11px] text-cyan-400">
                    <ShieldCheck className="w-3 h-3 text-cyan-400" />
                    <span>{isDemoMode ? t('demoIsolated', lang) : t('secureSession', lang)}</span>
                  </div>
                </div>
              </div>

              {/* Formulaire d'édition STRICTE : 1. Nom, 2. Filière */}
              <form onSubmit={handleSaveProfile} className="space-y-3.5 pt-1">
                <div className="p-4 rounded-2xl bg-indigo-950/20 border border-indigo-500/30 space-y-3.5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-indigo-400" />
                      Modifier mon Nom & ma Filière
                    </span>
                    <span className="text-[10px] font-semibold text-indigo-300/80">Profil Étudiant</span>
                  </div>

                  {/* Live Preview Bar */}
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-2">
                    <span className="text-[11px] text-slate-400 font-medium">Aperçu en direct :</span>
                    <div className="flex items-center gap-1.5 text-right min-w-0">
                      <span className={`text-xs font-black truncate ${userAccount?.planTier !== 'free' ? 'gold-shimmer-text' : 'text-white'}`}>
                        {editName.trim() || 'Étudiant'}
                      </span>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 shrink-0">
                        {editFiliere.trim() || 'Filière'}
                      </span>
                    </div>
                  </div>
                  
                  {/* 1. Nom complet */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                      Nom de l'étudiant
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        placeholder="Ex : Alexandre Étudiant"
                        className="w-full px-3 py-2.5 pl-9 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-indigo-400 transition-colors"
                        required
                      />
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
                    </div>
                  </div>

                  {/* 2. Filière */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                      Filière ou Niveau d'études
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={editFiliere}
                        onChange={(e) => setEditFiliere(e.target.value)}
                        placeholder="Ex : Licence Informatique, Droit, Médecine..."
                        className="w-full px-3 py-2.5 pl-9 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-indigo-400 transition-colors"
                        required
                      />
                      <GraduationCap className="w-4 h-4 text-indigo-400 absolute left-3 top-2.5 pointer-events-none" />
                    </div>

                    {/* Suggestions de filières en 1 clic */}
                    <div className="mt-2">
                      <span className="text-[10px] text-slate-400 block mb-1">Suggestions rapides :</span>
                      <div className="flex flex-wrap gap-1.5">
                        {COMMON_FILIERES.map((f, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setEditFiliere(f)}
                            className={`text-[10px] px-2 py-0.5 rounded-lg border transition-colors cursor-pointer ${
                              editFiliere === f 
                                ? 'bg-indigo-600 text-white border-indigo-400 font-bold' 
                                : 'bg-slate-900/80 hover:bg-indigo-950 text-slate-300 border-slate-800 hover:border-indigo-500/40'
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
                      className="w-full cursor-pointer text-xs sm:text-sm font-bold py-2.5 shadow-lg shadow-indigo-600/20"
                    >
                      {saveSuccess ? '✓ Nom & Filière Enregistrés !' : 'Enregistrer mon Nom et ma Filière'}
                    </Button>

                    {saveSuccess && (
                      <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2 animate-in fade-in">
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Modifications appliquées immédiatement à toute l'application !</span>
                      </div>
                    )}
                  </div>
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
