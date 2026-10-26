import React, { useState, useEffect, useMemo } from 'react';
import { 
  Users, 
  Crown, 
  RotateCcw, 
  Bell, 
  BellOff, 
  Search, 
  RefreshCw, 
  ArrowRight, 
  LogOut, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle
} from 'lucide-react';
import { AnimatedCounter } from '../../components/common/AnimatedCounter';

export interface AdminUserRecord {
  id: string;
  name: string;
  email: string;
  avatar?: string | null;
  konanId: string;
  planTier: 'free' | 'pro' | 'plus';
  pushEnabled: boolean;
  subjectsCount: number;
  classesCount: number;
  sessionsCount: number;
  completedSessionsCount: number;
  rescheduledSessionsCount: number;
  lastActive: string | null;
  createdAt?: string | null;
}

export interface AdminStats {
  totalUsers: number;
  freeUsers: number;
  proUsers: number;
  plusUsers: number;
  pushActiveUsers: number;
  totalSubjects: number;
  totalClasses: number;
  usersWithSchedule: number;
  totalStudySessions: number;
  completedStudySessions: number;
  rescheduledStudySessions: number;
  pendingStudySessions: number;
}

interface AdminDashboardProps {
  adminPassword?: string;
  onSwitchToStudentView: () => void;
  onExitAdmin: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  adminPassword,
  onSwitchToStudentView,
  onExitAdmin,
}) => {
  const [stats, setStats] = useState<AdminStats>({
    totalUsers: 0,
    freeUsers: 0,
    proUsers: 0,
    plusUsers: 0,
    pushActiveUsers: 0,
    totalSubjects: 0,
    totalClasses: 0,
    usersWithSchedule: 0,
    totalStudySessions: 0,
    completedStudySessions: 0,
    rescheduledStudySessions: 0,
    pendingStudySessions: 0,
  });

  const [users, setUsers] = useState<AdminUserRecord[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [lastSyncTime, setLastSyncTime] = useState<Date | null>(null);
  const [secondsAgo, setSecondsAgo] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [serviceAccountNotice, setServiceAccountNotice] = useState<string | null>(null);

  // Filtres et recherche
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPlanFilter, setSelectedPlanFilter] = useState<'all' | 'pro' | 'plus' | 'free' | 'push' | 'catchup'>('all');
  const [selectedUserDetail, setSelectedUserDetail] = useState<AdminUserRecord | null>(null);

  const token = adminPassword || (typeof window !== 'undefined' ? sessionStorage.getItem('konan_admin_token') || '' : '');

  // Fonction de récupération des données temps réel
  const fetchAdminData = async (isManual = false) => {
    if (isManual) setIsLoading(true);
    setErrorMessage(null);

    try {
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const url = isManual ? '/api/admin-data?force=true' : '/api/admin-data';
      const res = await fetch(url, {
        headers,
        cache: 'no-store',
      });

      const data = await res.json();

      if (!res.ok && res.status !== 200) {
        setErrorMessage(data?.message || 'Erreur lors de la récupération des données administrateur.');
        return;
      }

      if (data?.error === 'MISSING_SERVICE_ACCOUNT_KEY') {
        setServiceAccountNotice(data.message);
      } else {
        setServiceAccountNotice(null);
      }

      if (data?.stats) {
        setStats(data.stats);
      }
      if (Array.isArray(data?.users)) {
        setUsers(data.users);
      }

      setLastSyncTime(new Date());
      setSecondsAgo(0);
    } catch (err: any) {
      console.error('[AdminDashboard] Erreur synchronisation :', err);
      setErrorMessage(err?.message || 'Connexion au serveur local interrompue.');
    } finally {
      setIsLoading(false);
    }
  };

  // Synchronisation en direct toutes les 20 secondes (avec cache intelligent pour protéger les quotas Firestore)
  useEffect(() => {
    fetchAdminData(true);

    const interval = setInterval(() => {
      fetchAdminData(false);
    }, 20000);

    return () => clearInterval(interval);
  }, [token]);

  // Horloge relative de dernière synchronisation
  useEffect(() => {
    const timer = setInterval(() => {
      if (lastSyncTime) {
        const diff = Math.floor((Date.now() - lastSyncTime.getTime()) / 1000);
        setSecondsAgo(diff);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [lastSyncTime]);

  // Filtrage des utilisateurs
  const filteredUsers = useMemo(() => {
    return users.filter((u) => {
      const matchSearch = 
        u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.konanId.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchSearch) return false;

      if (selectedPlanFilter === 'pro') return u.planTier === 'pro';
      if (selectedPlanFilter === 'plus') return u.planTier === 'plus';
      if (selectedPlanFilter === 'free') return u.planTier === 'free';
      if (selectedPlanFilter === 'push') return u.pushEnabled;
      if (selectedPlanFilter === 'catchup') return u.rescheduledSessionsCount > 0;

      return true;
    });
  }, [users, searchQuery, selectedPlanFilter]);

  // Formatage relatif des dates
  const formatRelativeTime = (isoString: string | null) => {
    if (!isoString) return 'Jamais';
    const date = new Date(isoString);
    if (isNaN(date.getTime())) return 'Jamais';

    const diffSec = Math.floor((Date.now() - date.getTime()) / 1000);
    if (diffSec < 60) return `Il y a ${diffSec}s`;
    const diffMin = Math.floor(diffSec / 60);
    if (diffMin < 60) return `Il y a ${diffMin} min`;
    const diffHours = Math.floor(diffMin / 60);
    if (diffHours < 24) return `Il y a ${diffHours}h`;
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays === 1) return 'Hier';
    if (diffDays < 7) return `Il y a ${diffDays}j`;

    return date.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' });
  };

  return (
    <div className="min-h-screen bg-[#080C15] text-slate-100 flex flex-col font-sans pb-16 selection:bg-purple-600 selection:text-white">
      
      {/* =========================================================================
          BARRE SUPÉRIEURE ADMINISTRATEUR (NAVBAR PRIVÉE)
          ========================================================================= */}
      <header className="sticky top-0 z-50 bg-[#0B1120]/90 backdrop-blur-xl border-b border-slate-800/90 px-4 sm:px-8 py-3.5 shadow-xl">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Logo & Titre Console */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-2xl p-[2px] bg-gradient-to-tr from-purple-500 via-indigo-500 to-sky-400 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <img src="/konan-logo.png" alt="KONAN" className="w-full h-full object-contain rounded-xl bg-[#091427]" />
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-slate-900"></span>
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-sm sm:text-base font-black tracking-tight text-white flex items-center gap-1.5">
                  <span>KONAN AI</span>
                  <span className="text-slate-500 font-normal">/</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
                    Console Administrateur
                  </span>
                </h1>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/40">
                  Local Privé
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Supervision en temps réel de l'activité étudiante & base de données Firestore
              </p>
            </div>
          </div>

          {/* Statut Sync en direct & Boutons d'Action */}
          <div className="flex items-center gap-2.5">
            {/* Indicateur pulsation live */}
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-300">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>En direct : {secondsAgo === 0 ? 'À l’instant' : `Il y a ${secondsAgo}s`}</span>
            </div>

            {/* Bouton rafraîchir manuellement */}
            <button
              onClick={() => fetchAdminData(true)}
              disabled={isLoading}
              title="Rafraîchir les données maintenant"
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-all border border-slate-700 flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-purple-400' : ''}`} />
              <span className="hidden md:inline">Actualiser</span>
            </button>

            {/* BOUTON CLÉ : BASCULER VERS LA VUE ÉLÈVE */}
            <button
              onClick={onSwitchToStudentView}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Basculer vers la vue Élève</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Déconnexion Admin */}
            <button
              onClick={onExitAdmin}
              title="Fermer la console administrateur"
              className="p-2 rounded-xl bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 border border-rose-800/40 transition-all cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </header>

      {/* =========================================================================
          CONTENU PRINCIPAL DU DASHBOARD
          ========================================================================= */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-8 pt-6 space-y-6 flex-1">

        {/* Message d'aide si la clé Firebase Admin n'est pas encore renseignée */}
        {serviceAccountNotice && (
          <div className="p-4 sm:p-5 rounded-3xl bg-amber-500/10 border border-amber-500/30 text-amber-200 space-y-2 relative overflow-hidden backdrop-blur-xl">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h3 className="text-xs sm:text-sm font-bold text-amber-300">
                  Connexion directe Firestore requise pour afficher les 149+ comptes
                </h3>
                <p className="text-xs text-amber-200/90 leading-relaxed">
                  {serviceAccountNotice}
                </p>
                <div className="pt-1.5 flex flex-wrap gap-2 text-[11px]">
                  <code className="px-2.5 py-1 rounded-lg bg-black/40 text-amber-300 font-mono border border-amber-500/20">
                    FIREBASE_SERVICE_ACCOUNT_KEY='&#123;"type": "service_account", ...&#125;'
                  </code>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Message d'erreur éventuel */}
        {errorMessage && (
          <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* =========================================================================
            GRILLE DE KPI & CARTES MÉTRIQUES EN DIRECT
            ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* CARTE 1 : TOTAL UTILISATEURS */}
          <div className="p-5 rounded-3xl bg-[#0D1527] border border-slate-800/80 shadow-xl space-y-3 relative overflow-hidden group hover:border-purple-500/40 transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-purple-500/20 transition-all" />
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Inscrits</span>
              <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight flex items-baseline gap-2">
                <AnimatedCounter value={stats.totalUsers} duration={800} />
                <span className="text-xs font-bold text-purple-400">étudiants</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                {stats.usersWithSchedule} avec emploi du temps importé ({stats.totalUsers > 0 ? Math.round((stats.usersWithSchedule / stats.totalUsers) * 100) : 0}%)
              </p>
            </div>
          </div>

          {/* CARTE 2 : RÉPARTITION FORFAITS (PRO / PLUS / GRATUIT) */}
          <div className="p-5 rounded-3xl bg-[#0D1527] border border-slate-800/80 shadow-xl space-y-3 relative overflow-hidden group hover:border-emerald-500/40 transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/20 transition-all" />
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Abonnements</span>
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Crown className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight flex items-baseline gap-2">
                <AnimatedCounter value={stats.proUsers + stats.plusUsers} duration={800} />
                <span className="text-xs font-bold text-emerald-400">Pro & Plus</span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-[11px] font-semibold">
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Pro : {stats.proUsers}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Plus : {stats.plusUsers}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30">
                  Gratuit : {stats.freeUsers}
                </span>
              </div>
            </div>
          </div>

          {/* CARTE 3 : SÉANCES & RATTRAPAGES */}
          <div className="p-5 rounded-3xl bg-[#0D1527] border border-slate-800/80 shadow-xl space-y-3 relative overflow-hidden group hover:border-amber-500/40 transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-500/20 transition-all" />
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Séances de Révision</span>
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <RotateCcw className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight flex items-baseline gap-2">
                <AnimatedCounter value={stats.totalStudySessions} duration={800} />
                <span className="text-xs font-bold text-amber-400">total</span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-[11px] font-semibold">
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  {stats.completedStudySessions} faites
                </span>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                  <RotateCcw className="w-3 h-3" />
                  {stats.rescheduledStudySessions} rattrapages
                </span>
              </div>
            </div>
          </div>

          {/* CARTE 4 : NOTIFICATIONS PUSH ACTIVES */}
          <div className="p-5 rounded-3xl bg-[#0D1527] border border-slate-800/80 shadow-xl space-y-3 relative overflow-hidden group hover:border-sky-500/40 transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-sky-500/20 transition-all" />
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Notifications Web Push</span>
              <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                <Bell className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight flex items-baseline gap-2">
                <AnimatedCounter value={stats.pushActiveUsers} duration={800} />
                <span className="text-xs font-bold text-sky-400">téléphones armés</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Abonnés Pro recevant les alertes à 5 min & rattrapages en arrière-plan
              </p>
            </div>
          </div>

        </div>

        {/* =========================================================================
            TABLEAU EN DIRECT DES UTILISATEURS (AVEC RECHERCHE & FILTRES)
            ========================================================================= */}
        <div className="rounded-3xl bg-[#0D1527] border border-slate-800 shadow-2xl p-4 sm:p-6 space-y-5">
          
          {/* Barre d'outils du tableau : Titre, recherche, filtres */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            
            <div className="space-y-1">
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>Comptes Étudiants en Direct</span>
                <span className="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-slate-800 text-slate-300">
                  {filteredUsers.length} / {users.length}
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Liste actualisée instantanément à chaque inscription, session validée ou rattrapage.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {/* Barre de recherche */}
              <div className="relative min-w-[240px] flex-1 sm:flex-initial">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher par nom, email, ID..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </div>

              {/* Filtres de forfaits */}
              <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-semibold overflow-x-auto">
                <button
                  onClick={() => setSelectedPlanFilter('all')}
                  className={`px-2.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                    selectedPlanFilter === 'all' ? 'bg-purple-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Tous
                </button>
                <button
                  onClick={() => setSelectedPlanFilter('pro')}
                  className={`px-2.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                    selectedPlanFilter === 'pro' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Pro ({stats.proUsers})
                </button>
                <button
                  onClick={() => setSelectedPlanFilter('plus')}
                  className={`px-2.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                    selectedPlanFilter === 'plus' ? 'bg-purple-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Plus ({stats.plusUsers})
                </button>
                <button
                  onClick={() => setSelectedPlanFilter('free')}
                  className={`px-2.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                    selectedPlanFilter === 'free' ? 'bg-sky-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Gratuit ({stats.freeUsers})
                </button>
                <button
                  onClick={() => setSelectedPlanFilter('push')}
                  className={`px-2.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                    selectedPlanFilter === 'push' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Push ({stats.pushActiveUsers})
                </button>
              </div>

            </div>
          </div>

          {/* Tableau responsive */}
          <div className="overflow-x-auto rounded-2xl border border-slate-800/80">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#0A0F1D] text-slate-400 uppercase text-[10px] font-extrabold tracking-wider border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">Étudiant</th>
                  <th className="py-3 px-3">Formule</th>
                  <th className="py-3 px-3">Notifications</th>
                  <th className="py-3 px-3">Emploi du temps</th>
                  <th className="py-3 px-3">Séances & Rattrapages</th>
                  <th className="py-3 px-3 text-right">Dernière activité</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-[#0D1527]/50">
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-slate-400 space-y-2">
                      <div className="w-10 h-10 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center mx-auto text-lg">
                        🔍
                      </div>
                      <p className="text-sm font-semibold text-slate-300">
                        {users.length === 0 ? "Aucun utilisateur trouvé dans la base" : "Aucun utilisateur ne correspond à votre filtre"}
                      </p>
                      <p className="text-xs text-slate-500">
                        {users.length === 0 
                          ? "Assurez-vous que FIREBASE_SERVICE_ACCOUNT_KEY est bien configuré dans votre fichier .env.local" 
                          : "Essayez de modifier votre mot-clé de recherche"}
                      </p>
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((user) => (
                    <tr 
                      key={user.id}
                      onClick={() => setSelectedUserDetail(user)}
                      className="hover:bg-slate-800/40 transition-colors cursor-pointer group"
                    >
                      {/* Identité */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={user.avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(user.name)}`}
                            alt={user.name}
                            className="w-8 h-8 rounded-full bg-slate-800 shrink-0 border border-slate-700"
                          />
                          <div className="min-w-0">
                            <div className="font-bold text-white group-hover:text-purple-300 transition-colors truncate max-w-[180px] sm:max-w-[220px]">
                              {user.name}
                            </div>
                            <div className="text-[11px] text-slate-400 font-mono truncate max-w-[180px] sm:max-w-[220px]">
                              {user.email}
                            </div>
                            <div className="text-[10px] text-slate-500 font-mono">
                              ID: {user.konanId}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Formule */}
                      <td className="py-3.5 px-3">
                        {user.planTier === 'pro' ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                            <Crown className="w-3 h-3" />
                            <span>PRO</span>
                          </span>
                        ) : user.planTier === 'plus' ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40">
                            <Sparkles className="w-3 h-3" />
                            <span>PLUS</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-sky-500/15 text-sky-300 border border-sky-500/30">
                            <span>Gratuit</span>
                          </span>
                        )}
                      </td>

                      {/* Statut Notifications Push */}
                      <td className="py-3.5 px-3">
                        {user.pushEnabled ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
                            <Bell className="w-3 h-3 text-emerald-400" />
                            <span>Armé (Web Push)</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-800/80 text-slate-400">
                            <BellOff className="w-3 h-3 text-slate-500" />
                            <span>Désactivé</span>
                          </span>
                        )}
                      </td>

                      {/* Emploi du Temps */}
                      <td className="py-3.5 px-3">
                        {user.classesCount > 0 || user.subjectsCount > 0 ? (
                          <div className="space-y-0.5">
                            <span className="font-bold text-slate-200">
                              {user.subjectsCount} matières
                            </span>
                            <div className="text-[11px] text-slate-400">
                              {user.classesCount} cours hebdo
                            </div>
                          </div>
                        ) : (
                          <span className="text-slate-500 text-[11px] italic">Non importé</span>
                        )}
                      </td>

                      {/* Séances & Rattrapages */}
                      <td className="py-3.5 px-3">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 font-semibold text-slate-200">
                            <span className="text-emerald-400">{user.completedSessionsCount}</span>
                            <span className="text-slate-500">/</span>
                            <span>{user.sessionsCount} séances</span>
                          </div>
                          {user.rescheduledSessionsCount > 0 && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                              <RotateCcw className="w-2.5 h-2.5" />
                              {user.rescheduledSessionsCount} rattrapage{user.rescheduledSessionsCount > 1 ? 's' : ''}
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Dernière Activité */}
                      <td className="py-3.5 px-3 text-right">
                        <span className="font-mono text-slate-300 font-semibold">
                          {formatRelativeTime(user.lastActive)}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
            <span>
              Affichage de {filteredUsers.length} étudiants sur {users.length} au total
            </span>
            <span className="text-[11px] text-slate-500">
              Cliquez sur une ligne pour voir le détail complet du compte
            </span>
          </div>

        </div>

      </main>

      {/* =========================================================================
          MODALE DÉTAIL D'UN UTILISATEUR SÉLECTIONNÉ
          ========================================================================= */}
      {selectedUserDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-[#0F172A] border border-slate-700 max-w-lg w-full rounded-3xl p-6 shadow-2xl space-y-5 text-left relative">
            
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <img
                  src={selectedUserDetail.avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(selectedUserDetail.name)}`}
                  alt={selectedUserDetail.name}
                  className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700"
                />
                <div>
                  <h3 className="text-base font-black text-white">{selectedUserDetail.name}</h3>
                  <p className="text-xs text-slate-400 font-mono">{selectedUserDetail.email}</p>
                  <p className="text-[10px] text-purple-400 font-mono mt-0.5">Konan ID: {selectedUserDetail.konanId}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedUserDetail(null)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2.5 pt-2 text-xs">
              <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Formule Active</span>
                <p className="text-sm font-bold text-white capitalize">{selectedUserDetail.planTier}</p>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Web Push Phone</span>
                <p className={`text-sm font-bold ${selectedUserDetail.pushEnabled ? 'text-emerald-400' : 'text-slate-400'}`}>
                  {selectedUserDetail.pushEnabled ? 'Actif' : 'Désactivé'}
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Matières & Cours</span>
                <p className="text-sm font-bold text-white">
                  {selectedUserDetail.subjectsCount} matières • {selectedUserDetail.classesCount} cours
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Séances Réalisées</span>
                <p className="text-sm font-bold text-emerald-400">
                  {selectedUserDetail.completedSessionsCount} / {selectedUserDetail.sessionsCount} validées
                </p>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs space-y-1 font-mono text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400 font-sans">Dernière activité :</span>
                <span>{selectedUserDetail.lastActive ? new Date(selectedUserDetail.lastActive).toLocaleString('fr-FR') : 'Inconnue'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-sans">Document Firestore :</span>
                <span className="text-[11px] text-slate-400">users/{selectedUserDetail.id}</span>
              </div>
            </div>

            <button
              onClick={() => setSelectedUserDetail(null)}
              className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-colors cursor-pointer"
            >
              Fermer la vue détaillée
            </button>

          </div>
        </div>
      )}

    </div>
  );
};
