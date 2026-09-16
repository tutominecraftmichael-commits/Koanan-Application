import React, { useState, useRef, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  BookOpen, 
  BarChart3, 
  Layers, 
  LogIn, 
  Upload, 
  Download, 
  RotateCcw,
  GraduationCap,
  FileText,
  Settings,
  Settings2,
  ChevronDown
} from 'lucide-react';
import type { ActiveAppView, UserAccount } from '../../types';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { useLanguage, t } from '../../lib/i18n';

export interface NavbarProps {
  activeView: ActiveAppView;
  onNavigate: (view: ActiveAppView) => void;
  studentName: string;
  academicLevel: string;
  userAccount?: UserAccount;
  onOpenPresetModal: () => void;
  onExportData: () => void;
  onImportData: () => void;
  onResetData: () => void;
  onLogout?: () => void;
  onOpenSettings?: () => void;
  totalStudySessions: number;
  completedSessions: number;
  isDemoMode?: boolean;
  onViewPricing?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  onNavigate,
  studentName,
  academicLevel: _academicLevel,
  userAccount,
  onOpenPresetModal,
  onExportData,
  onImportData,
  onResetData,
  onLogout: _onLogout,
  onOpenSettings,
  totalStudySessions: _totalStudySessions,
  completedSessions: _completedSessions,
  isDemoMode = false,
  onViewPricing,
}) => {
  const [lang] = useLanguage();
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const toolsMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (toolsMenuRef.current && !toolsMenuRef.current.contains(event.target as Node)) {
        setIsToolsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { id: 'dashboard' as ActiveAppView, label: t('navDashboard', lang), icon: Layers },
    { id: 'schedule' as ActiveAppView, label: t('navSchedule', lang), icon: Calendar },
    { id: 'subjects' as ActiveAppView, label: lang === 'fr' ? 'Matières' : 'Subjects', icon: BookOpen },
    { id: 'planner' as ActiveAppView, label: lang === 'fr' ? 'Planning' : 'Study Plan', icon: Clock },
    { id: 'analytics' as ActiveAppView, label: t('navAnalytics', lang), icon: BarChart3 },
  ];

  const displayName = userAccount?.isLoggedIn ? userAccount.name : studentName;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-2xl transition-all pt-safe">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Main Navbar Top Row */}
        <div className="flex items-center justify-between h-16 sm:h-[68px] gap-2 lg:gap-4">
          
          {/* Logo & Brand */}
          <div className="flex items-center shrink-0">
            <button
              onClick={() => onNavigate('landing')}
              className="flex items-center gap-2.5 sm:gap-3 group text-left cursor-pointer focus:outline-none shrink-0"
              title="Retour à l'accueil KONAN"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full p-[1.5px] bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-600 shadow-md shadow-sky-500/25 group-hover:scale-105 transition-transform duration-200 shrink-0 flex items-center justify-center overflow-hidden">
                <img
                  src="/konan-logo.png"
                  alt="Logo Officiel KONAN"
                  className="w-full h-full object-contain rounded-full bg-slate-950/80"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-blue-300 transition-colors">
                    KONAN
                  </span>
                  <Badge variant="cyan" size="sm" className="hidden xs:inline-flex text-[10px] px-1.5 py-0">v1.0</Badge>
                </div>
                <p className="text-[10px] sm:text-[11px] text-slate-400 hidden sm:block truncate">Compagnon Académique</p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links - Centered, shrink-0, perfectly spaced */}
          {activeView !== 'landing' && activeView !== 'auth' && (
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-slate-900/80 p-1 rounded-xl border border-slate-800/80 shrink-0 mx-2 shadow-xs">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (!userAccount?.isLoggedIn && !isDemoMode) {
                        onNavigate('auth');
                      } else {
                        onNavigate(item.id);
                      }
                    }}
                    className={`flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer shrink-0 whitespace-nowrap ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-sm shadow-blue-900/40'
                        : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          )}

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {activeView !== 'landing' && activeView !== 'auth' ? (
              <>
                {/* Paramètres (Settings) Button - Bouton circulaire aéré */}
                {onOpenSettings && (
                  <button
                    onClick={onOpenSettings}
                    title={t('navSettings', lang)}
                    aria-label={t('navSettings', lang)}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900/80 border border-slate-800 hover:border-indigo-500/60 hover:bg-slate-800/80 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-xs shrink-0 group"
                  >
                    <Settings className="w-4 h-4 text-indigo-400 group-hover:rotate-45 transition-transform duration-300" />
                  </button>
                )}

                {/* Secondary Tools Menu (Data Export, Import, Reset) */}
                <div className="relative" ref={toolsMenuRef}>
                  <button
                    onClick={() => setIsToolsOpen(!isToolsOpen)}
                    title={t('navTools', lang)}
                    className="p-2 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <Settings2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <ChevronDown className="w-3 h-3 text-slate-500" />
                  </button>

                  {isToolsOpen && (
                    <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 space-y-1">
                      <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-slate-400 tracking-wider border-b border-slate-800/60">
                        {t('navTools', lang)}
                      </div>

                      {/* Importer un emploi du temps: ONLY for connected users, NOT in demo */}
                      {!isDemoMode && (
                        <button
                          onClick={() => {
                            if (!userAccount?.isLoggedIn) {
                              onNavigate('auth');
                            } else {
                              onNavigate('upload-schedule');
                            }
                            setIsToolsOpen(false);
                          }}
                          className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-900 rounded-xl transition-colors cursor-pointer text-left"
                        >
                          <FileText className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{t('navImport', lang)}</span>
                        </button>
                      )}

                      {/* Exemples de filières: ONLY visible in Demo mode */}
                      {isDemoMode && (
                        <button
                          onClick={() => { onOpenPresetModal(); setIsToolsOpen(false); }}
                          className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-indigo-300 hover:text-white hover:bg-slate-900 rounded-xl transition-colors cursor-pointer text-left"
                        >
                          <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                          <span>Exemples d'EDT Démo</span>
                        </button>
                      )}

                      <div className="my-1 border-t border-slate-800/60" />
                      
                      <button
                        onClick={() => { onExportData(); setIsToolsOpen(false); }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-900 rounded-xl transition-colors cursor-pointer text-left"
                      >
                        <Download className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{t('exportConfig', lang)}</span>
                      </button>

                      <button
                        onClick={() => { onImportData(); setIsToolsOpen(false); }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-900 rounded-xl transition-colors cursor-pointer text-left"
                      >
                        <Upload className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{t('importConfig', lang)}</span>
                      </button>

                      <button
                        onClick={() => { onResetData(); setIsToolsOpen(false); }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-xl transition-colors cursor-pointer text-left"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>{t('resetDefault', lang)}</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* User / Google Profile Pill -> opens Settings Modal on click */}
                {userAccount && userAccount.isLoggedIn ? (
                  <div
                    onClick={onOpenSettings}
                    title="Voir mon profil et paramètres"
                    className="flex items-center gap-1.5 sm:gap-2 pl-1 sm:pl-2 border-l border-slate-800/80 hover:opacity-90 transition-opacity cursor-pointer text-left"
                  >
                    <img
                      src={userAccount.avatar}
                      alt={displayName}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border border-indigo-500/40 shadow-xs shrink-0"
                    />
                    <div className="hidden xl:block">
                      <p className="text-xs font-bold text-white leading-tight truncate max-w-[120px]">{displayName}</p>
                      <p className="text-[10px] text-cyan-400 font-mono truncate max-w-[120px]">
                        {userAccount.isDemo ? t('demoAccount', lang) : userAccount.email || 'Connecté'}
                      </p>
                    </div>
                    {/* Badge de version : Free, Pro, ou Plus -> clic direct sur les tarifs */}
                    <button 
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onViewPricing) {
                          onViewPricing();
                        } else {
                          onNavigate('landing');
                        }
                      }}
                      className={`inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider shrink-0 shadow-xs border cursor-pointer hover:scale-105 active:scale-95 transition-transform ${
                        userAccount.planTier === 'pro'
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30'
                          : userAccount.planTier === 'plus'
                          ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40 hover:bg-indigo-500/30'
                          : 'bg-slate-800/90 text-sky-300 border-sky-500/30 hover:border-sky-400'
                      }`}
                      title={
                        userAccount.planTier === 'pro' 
                          ? 'Modèle KONAN Pro - Cliquez pour voir les formules' 
                          : userAccount.planTier === 'plus' 
                          ? 'Modèle KONAN Plus - Cliquez pour voir les formules' 
                          : 'Modèle KONAN Gratuit (Free) - Cliquez pour passer à Pro'
                      }
                    >
                      {userAccount.planTier === 'pro' ? 'Pro' : userAccount.planTier === 'plus' ? 'Plus' : 'Free'}
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => onNavigate('auth')}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-900 border border-indigo-500/40 hover:border-indigo-400 text-xs font-semibold text-white shadow-sm cursor-pointer"
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0">
                      <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z" />
                      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.27 21.37 7.35 24 12 24z" />
                      <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.97 0 12s.46 3.84 1.26 5.42l4.02-3.15z" />
                      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.27 2.63 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
                    </svg>
                    <span className="hidden sm:inline">Google</span>
                  </button>
                )}
              </>
            ) : (
              /* Landing page actions */
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onOpenPresetModal}
                  className="text-xs hidden sm:inline-flex px-3 py-1.5"
                >
                  Démos
                </Button>
                <Button
                  variant="glow"
                  size="sm"
                  leftIcon={<LogIn className="w-3.5 h-3.5" />}
                  onClick={() => onNavigate('auth')}
                  className="text-xs font-semibold px-3 py-1.5 cursor-pointer"
                >
                  Connexion
                </Button>
              </div>
            )}
          </div>

        </div>

        {/* Mobile Sub-Navigation Bar (Only for active dashboard pages) */}
        {activeView !== 'landing' && activeView !== 'auth' && (
          <div className="flex lg:hidden items-center py-2 border-t border-slate-900 overflow-x-auto no-scrollbar gap-1.5 px-0.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    if (!userAccount?.isLoggedIn && !isDemoMode) {
                      onNavigate('auth');
                    } else {
                      onNavigate(item.id);
                    }
                  }}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shrink-0 cursor-pointer min-h-[38px] interactive-pill ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30' 
                      : 'bg-slate-900/70 text-slate-400 hover:text-slate-100 hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        )}

      </div>
    </header>
  );
};
