import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  Calendar, 
  Clock, 
  BookOpen, 
  BarChart3, 
  Layers, 
  LogIn, 
  LogOut,
  Upload, 
  Download, 
  RotateCcw,
  GraduationCap,
  FileText,
  Settings,
  Settings2,
  ChevronDown,
  Bell,
  Crown,
  Sparkles,
  Check,
  CheckCircle2,
  X,
  XCircle
} from 'lucide-react';
import type { ActiveAppView, UserAccount, PlusInvitationNotification } from '../../types';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { FocusAudioPlayerWidget } from '../plus/FocusAudioPlayerWidget';
import { useLanguage, t } from '../../lib/i18n';
import { formatNotificationTime } from '../../lib/utils';
import { soundFX } from '../../lib/audioEffects';

export interface OwnerNotificationItem {
  id: string;
  type: 'accepted' | 'declined';
  name: string;
  konanId?: string;
  timestamp?: string;
}

export interface NavbarProps {
  activeView: ActiveAppView;
  onNavigate: (view: ActiveAppView) => void;
  studentName: string;
  academicLevel: string;
  userAccount?: UserAccount;
  konanId?: string;
  planTier?: 'free' | 'pro' | 'plus';
  onOpenPresetModal: () => void;
  onExportData: () => void;
  onImportData: () => void;
  onResetData: () => void;
  onLogout?: () => void;
  onOpenSettings?: () => void;
  totalStudySessions: number;
  completedSessions: number;
  isDemoMode?: boolean;
  onEnterDemoMode?: () => void;
  onViewPricing?: () => void;
  pendingInvitations?: PlusInvitationNotification[];
  acceptedNotifications?: { id: string; name: string; konanId?: string; timestamp?: string }[];
  ownerNotifications?: OwnerNotificationItem[];
  onAcceptInvitation?: (invitation: PlusInvitationNotification) => void;
  onDeclineInvitation?: (invitation: PlusInvitationNotification) => void;
}

const SEEN_NOTIFICATIONS_KEY = 'konan_seen_notification_ids';

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  onNavigate,
  studentName,
  academicLevel: _academicLevel,
  userAccount,
  konanId: _konanId,
  planTier,
  onOpenPresetModal,
  onExportData,
  onImportData,
  onResetData,
  onLogout: _onLogout,
  onOpenSettings,
  totalStudySessions: _totalStudySessions,
  completedSessions: _completedSessions,
  isDemoMode = false,
  onEnterDemoMode,
  onViewPricing,
  pendingInvitations = [],
  acceptedNotifications = [],
  ownerNotifications,
  onAcceptInvitation,
  onDeclineInvitation,
}) => {
  const [lang] = useLanguage();
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isBellRinging, setIsBellRinging] = useState(false);
  const toolsMenuRef = useRef<HTMLDivElement>(null);
  const notificationsMenuRef = useRef<HTMLDivElement>(null);
  const mobileNotificationsMenuRef = useRef<HTMLDivElement>(null);

  // Single source of truth for current active tier in Navbar
  const effectivePlan: 'free' | 'pro' | 'plus' = planTier || userAccount?.planTier || 'free';

  // Notifications strictly disappear after 24 hours (24h TTL)
  const activePendingInvitations = React.useMemo(() => {
    const now = Date.now();
    const TTL_24H = 24 * 60 * 60 * 1000;
    return pendingInvitations.filter(inv => {
      const time = inv.updatedAt || inv.acceptedAt || inv.createdAt;
      if (!time) return true;
      const t = new Date(time).getTime();
      return !isNaN(t) && (now - t) <= TTL_24H;
    });
  }, [pendingInvitations]);

  // Normalize all owner notifications and strictly purge those older than 24 hours
  const normalizedOwnerNotifications: OwnerNotificationItem[] = React.useMemo(() => {
    const raw = (ownerNotifications && ownerNotifications.length > 0)
      ? ownerNotifications
      : (acceptedNotifications || []).map(a => ({
          id: a.id,
          type: 'accepted' as const,
          name: a.name,
          konanId: a.konanId,
          timestamp: a.timestamp,
        }));

    const now = Date.now();
    const TTL_24H = 24 * 60 * 60 * 1000;
    return raw.filter(item => {
      if (!item.timestamp) return true;
      const t = new Date(item.timestamp).getTime();
      return !isNaN(t) && (now - t) <= TTL_24H;
    });
  }, [ownerNotifications, acceptedNotifications]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (toolsMenuRef.current && !toolsMenuRef.current.contains(target)) {
        setIsToolsOpen(false);
      }
      const insideDesktop = notificationsMenuRef.current?.contains(target);
      const insideMobile = mobileNotificationsMenuRef.current?.contains(target);
      if (!insideDesktop && !insideMobile) {
        setIsNotificationsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Read/unread tracking for the bell (persisted so the red dot survives reloads)
  const [seenNotificationIds, setSeenNotificationIds] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem(SEEN_NOTIFICATIONS_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return new Set(Array.isArray(parsed) ? parsed : []);
    } catch {
      return new Set();
    }
  });

  const hasUnreadNotifications = activePendingInvitations.some(inv => inv?.id && !seenNotificationIds.has(inv.id))
    || normalizedOwnerNotifications.some(notif => notif?.id && !seenNotificationIds.has(notif.id));

  // Opening the panel marks every visible notification as read
  useEffect(() => {
    if (!isNotificationsOpen || !hasUnreadNotifications) return;
    setSeenNotificationIds(prev => {
      const next = new Set(prev);
      activePendingInvitations.forEach(inv => inv?.id && next.add(inv.id));
      normalizedOwnerNotifications.forEach(notif => notif?.id && next.add(notif.id));
      try {
        localStorage.setItem(SEEN_NOTIFICATIONS_KEY, JSON.stringify(Array.from(next).slice(-200)));
      } catch {
        /* storage full or unavailable: dot simply won't persist */
      }
      return next;
    });
  }, [isNotificationsOpen, hasUnreadNotifications, activePendingInvitations, normalizedOwnerNotifications]);

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
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-slate-800/80 shrink-0 mx-2 shadow-xs">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      soundFX.playCheckmarkPop();
                      if (!userAccount?.isLoggedIn && !isDemoMode) {
                        onNavigate('auth');
                      } else {
                        onNavigate(item.id);
                      }
                    }}
                    className={`group flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer shrink-0 whitespace-nowrap active:scale-95 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/40 ring-1 ring-blue-400/40'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 shrink-0 transition-transform duration-300 ease-out ${
                      isActive 
                        ? 'scale-110 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]' 
                        : 'group-hover:text-blue-300'
                    } ${
                      item.id === 'dashboard' ? 'group-hover:-translate-y-0.5 group-hover:scale-115' :
                      item.id === 'schedule' ? 'group-hover:-rotate-12 group-hover:scale-120' :
                      item.id === 'subjects' ? 'group-hover:scale-125' :
                      item.id === 'planner' ? 'group-hover:rotate-45 group-hover:scale-115' :
                      'group-hover:-translate-y-0.5 group-hover:scale-115'
                    }`} />
                    <span className="transition-colors duration-200">{item.label}</span>
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
                    className="group p-2 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer flex items-center gap-1 active:scale-95"
                  >
                    <Settings2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:rotate-45 group-hover:text-indigo-400 group-active:scale-90" />
                    <ChevronDown className={`w-3 h-3 text-slate-500 transition-transform duration-300 ${isToolsOpen ? 'rotate-180 text-white' : 'group-hover:translate-y-0.5'}`} />
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
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-xl transition-colors cursor-pointer text-left group/rst"
                      >
                        <RotateCcw className="w-3.5 h-3.5 transition-transform duration-500 group-hover/rst:-rotate-180" />
                        <span>{t('resetDefault', lang)}</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* 🔔 Notifications & Invitations Tab */}
                <div className="relative" ref={notificationsMenuRef}>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsNotificationsOpen(prev => !prev);
                      setIsBellRinging(true);
                      setTimeout(() => setIsBellRinging(false), 800);
                    }}
                    onTouchStart={() => {
                      setIsBellRinging(true);
                      setTimeout(() => setIsBellRinging(false), 800);
                    }}
                    className="group relative p-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer flex items-center justify-center bg-slate-900/80 text-slate-300 border-slate-800 hover:text-white hover:border-slate-700 active:scale-95"
                    title={hasUnreadNotifications ? 'Nouvelles notifications non lues' : 'Notifications'}
                    aria-label={hasUnreadNotifications ? 'Notifications (non lues)' : 'Notifications'}
                  >
                    <Bell className={`w-4 h-4 transition-transform ${isBellRinging ? 'animate-bell-ring text-amber-400' : 'group-hover:animate-bell-ring group-hover:text-amber-300'}`} />
                    {hasUnreadNotifications && (
                      <span className="absolute top-1 right-1 flex h-2.5 w-2.5" aria-hidden="true">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-60 animate-ping" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-rose-500 ring-2 ring-slate-950" />
                      </span>
                    )}
                  </button>

                  {/* Desktop Dropdown Menu for Notifications */}
                  {isNotificationsOpen && (
                    <div className="hidden sm:block absolute right-0 top-full mt-2 w-96 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2 space-y-2.5">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
                        <span className="font-bold text-white flex items-center gap-1.5">
                          <Bell className="w-3.5 h-3.5 text-amber-400" />
                          Notifications & Invitations
                        </span>
                        {activePendingInvitations.length > 0 && (
                          <span className="text-[10px] font-bold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-full border border-amber-500/30">
                            {activePendingInvitations.length} en attente
                          </span>
                        )}
                      </div>

                      {activePendingInvitations.length === 0 && normalizedOwnerNotifications.length === 0 ? (
                        <div className="py-6 text-center text-xs text-slate-400">
                          <Bell className="w-6 h-6 mx-auto text-slate-600 mb-2 opacity-50" />
                          <p>Aucune notification pour le moment.</p>
                        </div>
                      ) : (
                        <div className="space-y-2 max-h-80 overflow-y-auto custom-scrollbar">
                          {/* Owner Notifications (Accepted or Declined) */}
                          {normalizedOwnerNotifications.map((notif) => {
                            const isAcc = notif.type === 'accepted';
                            const timeFormatted = formatNotificationTime(notif.timestamp);

                            return (
                              <div 
                                key={notif.id}
                                className={`p-3 rounded-xl border flex items-start gap-2.5 shadow-sm text-left animate-in fade-in transition-all ${
                                  isAcc
                                    ? 'bg-gradient-to-br from-emerald-950/40 via-slate-950 to-indigo-950/30 border-emerald-500/30'
                                    : 'bg-gradient-to-br from-rose-950/40 via-slate-950 to-slate-900 border-rose-500/30'
                                }`}
                              >
                                <div className={`p-1.5 rounded-lg shrink-0 mt-0.5 ${
                                  isAcc ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
                                }`}>
                                  {isAcc ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <XCircle className="w-4 h-4 text-rose-400" />}
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="flex items-center justify-between gap-1">
                                    <span className={`text-[9px] font-black uppercase tracking-wider ${
                                      isAcc ? 'text-emerald-400' : 'text-rose-400'
                                    }`}>
                                      {isAcc ? 'Invitation Acceptée' : 'Invitation Refusée'}
                                    </span>
                                    <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[10px] font-bold shrink-0 shadow-xs ${
                                      isAcc ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300' : 'bg-rose-500/20 border-rose-500/40 text-rose-300'
                                    }`}>
                                      <Clock className={`w-3 h-3 ${isAcc ? 'text-emerald-400' : 'text-rose-400'}`} />
                                      <span>{timeFormatted}</span>
                                    </div>
                                  </div>
                                  <p className="text-xs font-bold text-white leading-snug mt-1">
                                    L'utilisateur : <span className={`font-bold ${isAcc ? 'text-emerald-300' : 'text-rose-300'}`}>{notif.name}</span>{' '}
                                    {notif.konanId && <span className="font-mono text-amber-300 font-bold">[{notif.konanId}]</span>}{' '}
                                    {isAcc ? 'a accepté votre invitation' : 'a refusé votre invitation'}
                                  </p>
                                  <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                                    {isAcc 
                                      ? 'Ce membre a rejoint votre groupe KONAN PLUS.' 
                                      : 'Cette place est de nouveau libre dans votre groupe d\'étude (4 comptes inclus).'}
                                  </p>
                                </div>
                              </div>
                            );
                          })}

                          {/* Guest Pending Invitations */}
                          {activePendingInvitations.map((inv) => {
                            const timeFormatted = formatNotificationTime(inv.createdAt);

                            return (
                              <div 
                                key={inv.id}
                                className="p-3.5 rounded-xl bg-gradient-to-br from-amber-500/10 via-slate-950 to-indigo-950/30 border border-amber-500/40 space-y-2.5 shadow-md text-left"
                              >
                                <div className="flex items-start gap-2.5">
                                  <div className="p-2 rounded-lg bg-amber-500/20 text-amber-300 shrink-0">
                                    <Crown className="w-4 h-4" />
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <div className="flex items-center justify-between gap-1">
                                      <span className="text-[9px] font-black uppercase tracking-wider text-amber-400">
                                        Invitation Officielle
                                      </span>
                                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[11px] font-bold shrink-0 shadow-xs">
                                        <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                                        <span>{timeFormatted}</span>
                                      </div>
                                    </div>
                                    <p className="text-xs font-bold text-white leading-snug mt-1">
                                      Vous avez reçu une invitation de la part de{' '}
                                      <span className="text-amber-300 font-bold">{inv.senderName}</span>{' '}
                                      (ID : <span className="font-mono text-amber-300 font-bold">{inv.senderKonanId}</span>).
                                    </p>
                                    <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                                      Acceptez pour activer immédiatement votre accès complet et gratuit à KONAN PLUS.
                                    </p>
                                  </div>
                                </div>

                                <div className="flex items-center gap-2 pt-1">
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      e.preventDefault();
                                      onAcceptInvitation?.(inv);
                                      setIsNotificationsOpen(false);
                                    }}
                                    className="flex-1 py-2 px-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-emerald-950/40 cursor-pointer active:scale-95"
                                  >
                                    <Check className="w-3.5 h-3.5" />
                                    <span>Accepter l'invitation</span>
                                  </button>
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      e.preventDefault();
                                      onDeclineInvitation?.(inv);
                                      setIsNotificationsOpen(false);
                                    }}
                                    className="py-2 px-3.5 rounded-xl bg-slate-800 hover:bg-rose-950/50 hover:text-rose-300 border border-slate-700 hover:border-rose-500/40 text-slate-300 font-semibold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95"
                                  >
                                    <X className="w-3.5 h-3.5" />
                                    <span>Refuser</span>
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Mobile Portal Dropdown Menu for Notifications (Immune to header overflow & clipping) */}
                  {isNotificationsOpen && typeof document !== 'undefined' && createPortal(
                    <div className="fixed inset-0 z-[99999] sm:hidden flex flex-col items-center justify-start pt-16 px-3">
                      {/* Semi-transparent backdrop */}
                      <div 
                        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150"
                        onClick={() => setIsNotificationsOpen(false)}
                        aria-hidden="true"
                      />
                      
                      {/* Centered Modal Card on Mobile */}
                      <div 
                        ref={mobileNotificationsMenuRef}
                        className="relative w-full max-w-sm rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl p-4 z-10 animate-in fade-in zoom-in-95 duration-150 space-y-3"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
                          <span className="font-bold text-white flex items-center gap-1.5">
                            <Bell className="w-4 h-4 text-amber-400" />
                            Notifications & Invitations
                          </span>
                          <div className="flex items-center gap-2">
                            {activePendingInvitations.length > 0 && (
                              <span className="text-[10px] font-bold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-full border border-amber-500/30">
                                {activePendingInvitations.length} en attente
                              </span>
                            )}
                            <button
                              type="button"
                              onClick={() => setIsNotificationsOpen(false)}
                              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                              aria-label="Fermer"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {activePendingInvitations.length === 0 && normalizedOwnerNotifications.length === 0 ? (
                          <div className="py-6 text-center text-xs text-slate-400">
                            <Bell className="w-7 h-7 mx-auto text-slate-600 mb-2 opacity-50" />
                            <p>Aucune notification pour le moment.</p>
                          </div>
                        ) : (
                          <div className="space-y-2.5 max-h-[60vh] overflow-y-auto custom-scrollbar">
                            {/* Owner Notifications (Accepted or Declined) */}
                            {normalizedOwnerNotifications.map((notif) => {
                              const isAcc = notif.type === 'accepted';
                              const timeFormatted = formatNotificationTime(notif.timestamp);

                              return (
                                <div 
                                  key={`mob-${notif.id}`}
                                  className={`p-3 rounded-xl border flex items-start gap-2.5 shadow-sm text-left animate-in fade-in transition-all ${
                                    isAcc
                                      ? 'bg-gradient-to-br from-emerald-950/40 via-slate-950 to-indigo-950/30 border-emerald-500/30'
                                      : 'bg-gradient-to-br from-rose-950/40 via-slate-950 to-slate-900 border-rose-500/30'
                                  }`}
                                >
                                  <div className={`p-1.5 rounded-lg shrink-0 mt-0.5 ${
                                    isAcc ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
                                  }`}>
                                    {isAcc ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <XCircle className="w-4 h-4 text-rose-400" />}
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <div className="flex items-center justify-between gap-1">
                                      <span className={`text-[9px] font-black uppercase tracking-wider ${
                                        isAcc ? 'text-emerald-400' : 'text-rose-400'
                                      }`}>
                                        {isAcc ? 'Invitation Acceptée' : 'Invitation Refusée'}
                                      </span>
                                      <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[10px] font-bold shrink-0 shadow-xs ${
                                        isAcc ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300' : 'bg-rose-500/20 border-rose-500/40 text-rose-300'
                                      }`}>
                                        <Clock className={`w-3 h-3 ${isAcc ? 'text-emerald-400' : 'text-rose-400'}`} />
                                        <span>{timeFormatted}</span>
                                      </div>
                                    </div>
                                    <p className="text-xs font-bold text-white leading-snug mt-1">
                                      L'utilisateur : <span className={`font-bold ${isAcc ? 'text-emerald-300' : 'text-rose-300'}`}>{notif.name}</span>{' '}
                                      {notif.konanId && <span className="font-mono text-amber-300 font-bold">[{notif.konanId}]</span>}{' '}
                                      {isAcc ? 'a accepté votre invitation' : 'a refusé votre invitation'}
                                    </p>
                                    <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                                      {isAcc 
                                        ? 'Ce membre a rejoint votre groupe KONAN PLUS.' 
                                        : 'Cette place est de nouveau libre dans votre groupe d\'étude (4 comptes inclus).'}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}

                            {/* Guest Pending Invitations */}
                            {activePendingInvitations.map((inv) => {
                              const timeFormatted = formatNotificationTime(inv.createdAt);

                              return (
                                <div 
                                  key={`mob-${inv.id}`}
                                  className="p-3.5 rounded-xl bg-gradient-to-br from-amber-500/10 via-slate-950 to-indigo-950/30 border border-amber-500/40 space-y-2.5 shadow-md text-left"
                                >
                                  <div className="flex items-start gap-2.5">
                                    <div className="p-2 rounded-lg bg-amber-500/20 text-amber-300 shrink-0">
                                      <Crown className="w-4 h-4" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                      <div className="flex items-center justify-between gap-1">
                                        <span className="text-[9px] font-black uppercase tracking-wider text-amber-400">
                                          Invitation Officielle
                                        </span>
                                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[11px] font-bold shrink-0 shadow-xs">
                                          <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                                          <span>{timeFormatted}</span>
                                        </div>
                                      </div>
                                      <p className="text-xs font-bold text-white leading-snug mt-1">
                                        Vous avez reçu une invitation de la part de{' '}
                                        <span className="text-amber-300 font-bold">{inv.senderName}</span>{' '}
                                        (ID : <span className="font-mono text-amber-300 font-bold">{inv.senderKonanId}</span>).
                                      </p>
                                      <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                                        Acceptez pour activer immédiatement votre accès complet et gratuit à KONAN PLUS.
                                      </p>
                                    </div>
                                  </div>

                                  <div className="flex items-center gap-2 pt-1">
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        e.preventDefault();
                                        onAcceptInvitation?.(inv);
                                        setIsNotificationsOpen(false);
                                      }}
                                      className="flex-1 py-2 px-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-emerald-950/40 cursor-pointer active:scale-95"
                                    >
                                      <Check className="w-4 h-4" />
                                      <span>Accepter l'invitation</span>
                                    </button>
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        e.preventDefault();
                                        onDeclineInvitation?.(inv);
                                        setIsNotificationsOpen(false);
                                      }}
                                      className="py-2 px-3.5 rounded-xl bg-slate-800 hover:bg-rose-950/50 hover:text-rose-300 border border-slate-700 hover:border-rose-500/40 text-slate-300 font-semibold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95"
                                    >
                                      <X className="w-4 h-4" />
                                      <span>Refuser</span>
                                    </button>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>,
                    document.body
                  )}
                </div>

                {/* Ambient Focus Audio Player for KONAN PLUS */}
                {userAccount && userAccount.isLoggedIn && effectivePlan === 'plus' && (
                  <FocusAudioPlayerWidget compact className="hidden lg:inline-flex mr-1" />
                )}

                {/* User / Google Profile Pill -> opens Settings Modal on click */}
                {userAccount && userAccount.isLoggedIn ? (
                  <div className="flex items-center gap-1.5 sm:gap-2 pl-1 sm:pl-2 border-l border-slate-800/80">
                    <div
                      onClick={onOpenSettings}
                      title="Voir mon profil et paramètres"
                      className="flex items-center gap-1.5 sm:gap-2 hover:opacity-90 transition-opacity cursor-pointer text-left"
                    >
                      {userAccount.avatar ? (
                        <img
                          src={userAccount.avatar}
                          alt={displayName}
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border border-indigo-500/40 shadow-xs shrink-0"
                        />
                      ) : (
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold text-xs shadow-xs shrink-0 border border-indigo-500/40">
                          {displayName ? displayName.charAt(0).toUpperCase() : 'U'}
                        </div>
                      )}
                      <div className="hidden xl:block">
                        <p className={`text-xs font-bold leading-tight truncate max-w-[120px] ${
                          effectivePlan === 'plus'
                            ? 'plus-multicolor-shimmer-text font-black'
                            : effectivePlan === 'pro'
                            ? 'gold-shimmer-text font-black'
                            : 'text-white'
                        }`}>{displayName}</p>
                        <p className="text-[10px] text-cyan-400 font-mono truncate max-w-[120px]">
                          {userAccount.isDemo ? t('demoAccount', lang) : userAccount.email || 'Connecté'}
                        </p>
                      </div>
                    </div>

                    {/* Badge de version : Gratuit (statique), Pro ou Plus (cliquable vers tarifs) */}
                    {effectivePlan === 'plus' ? (
                      <button 
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onViewPricing) onViewPricing();
                          else onNavigate('landing');
                        }}
                        className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider shrink-0 shadow-xs border bg-gradient-to-r from-amber-500/20 via-indigo-500/20 to-cyan-500/20 text-amber-300 border-amber-500/40 hover:scale-105 active:scale-95 transition-transform cursor-pointer"
                        title="Modèle KONAN PLUS Actif - Cliquez pour voir les formules"
                      >
                        <Crown className="w-3 h-3 text-amber-400" />
                        <span>PLUS</span>
                      </button>
                    ) : effectivePlan === 'pro' ? (
                      <button 
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onViewPricing) onViewPricing();
                          else onNavigate('landing');
                        }}
                        className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider shrink-0 shadow-xs border bg-amber-500/20 text-amber-300 border-amber-500/40 hover:scale-105 active:scale-95 transition-transform cursor-pointer"
                        title="Modèle KONAN PRO Actif - Cliquez pour voir les formules"
                      >
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        <span>PRO</span>
                      </button>
                    ) : (isDemoMode || userAccount?.isDemo) ? (
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider shrink-0 shadow-xs border bg-amber-500/15 text-amber-300 border-amber-500/30 cursor-default select-none"
                          title="Mode Démo Actif"
                        >
                          <GraduationCap className="w-3 h-3 text-amber-400" />
                          Démo
                        </span>
                        {_onLogout && (
                          <button
                            type="button"
                            onClick={_onLogout}
                            className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/30 text-[10px] font-bold text-rose-300 hover:text-rose-200 transition-colors cursor-pointer shadow-xs"
                            title="Quitter le Mode Démo et revenir à l'accueil"
                          >
                            <LogOut className="w-3 h-3" />
                            <span>Quitter Démo</span>
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => onNavigate('auth')}
                          className="hidden xs:inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/40 text-[10px] font-bold text-indigo-300 hover:text-white transition-colors cursor-pointer shadow-xs"
                          title="Se connecter avec un compte Google réel"
                        >
                          <LogIn className="w-3 h-3" />
                          <span>Se Connecter</span>
                        </button>
                      </div>
                    ) : (
                      <span
                        className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider shrink-0 shadow-xs border bg-slate-800/90 text-slate-300 border-slate-700/80 cursor-default select-none"
                        title="Modèle KONAN Gratuit"
                      >
                        Gratuit
                      </span>
                    )}
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
                {userAccount && userAccount.isLoggedIn && !isDemoMode ? (
                  <Button
                    variant="glow"
                    size="sm"
                    onClick={() => onNavigate('dashboard')}
                    className="text-xs font-semibold px-3 py-1.5 cursor-pointer"
                  >
                    Mon Espace
                  </Button>
                ) : (
                  <>
                    {onEnterDemoMode && (
                      <Button
                        variant="secondary"
                        size="sm"
                        leftIcon={<GraduationCap className="w-3.5 h-3.5 text-indigo-400" />}
                        onClick={onEnterDemoMode}
                        className="text-xs font-semibold px-2.5 sm:px-3 py-1.5 cursor-pointer hover:border-indigo-500/40"
                      >
                        Mode Démo
                      </Button>
                    )}
                    <Button
                      variant="glow"
                      size="sm"
                      leftIcon={<LogIn className="w-3.5 h-3.5" />}
                      onClick={() => onNavigate('auth')}
                      className="text-xs font-semibold px-3 py-1.5 cursor-pointer"
                    >
                      Connexion
                    </Button>
                  </>
                )}
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
                    soundFX.playCheckmarkPop();
                    if (!userAccount?.isLoggedIn && !isDemoMode) {
                      onNavigate('auth');
                    } else {
                      onNavigate(item.id);
                    }
                  }}
                  className={`group flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 cursor-pointer min-h-[38px] active:scale-95 ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/40 ring-1 ring-blue-400/30' 
                      : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 shrink-0 transition-transform duration-300 ease-out ${
                    isActive 
                      ? 'scale-110 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]' 
                      : 'group-hover:text-blue-300'
                  } ${
                    item.id === 'dashboard' ? 'group-hover:-translate-y-0.5 group-hover:scale-115' :
                    item.id === 'schedule' ? 'group-hover:-rotate-12 group-hover:scale-120' :
                    item.id === 'subjects' ? 'group-hover:scale-125' :
                    item.id === 'planner' ? 'group-hover:rotate-45 group-hover:scale-115' :
                    'group-hover:-translate-y-0.5 group-hover:scale-115'
                  }`} />
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
