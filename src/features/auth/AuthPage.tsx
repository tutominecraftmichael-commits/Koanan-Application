import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  AlertCircle, 
  GraduationCap, 
  Smartphone, 
  Info, 
  ShieldCheck,
  Mail,
  Lock,
  User,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import type { UserAccount, Chronotype } from '../../types';
import { 
  signInWithGoogleReal, 
  signInWithGoogleRedirectReal,
  checkGoogleRedirectResult,
  signInWithEmailReal,
  signUpWithEmailReal,
  isMobileBrowser
} from '../../lib/firebase';
import { generateKonanId } from '../../lib/konanId';

export interface AuthPageProps {
  onLoginSuccess: (profile: UserAccount, preferences?: { chronotype: Chronotype }) => void;
  onEnterDemoMode?: () => void;
  onBackToLanding: () => void;
  currentProfile?: UserAccount;
}

type AuthMethod = 'google' | 'email' | 'direct';

export const AuthPage: React.FC<AuthPageProps> = ({
  onLoginSuccess,
  onEnterDemoMode,
  onBackToLanding,
}) => {
  const [activeMethod, setActiveMethod] = useState<AuthMethod>('google');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Email form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  // Direct Mobile state
  const [directName, setDirectName] = useState('');

  // Unauthorized domain dialog state
  const [showDomainHelp, setShowDomainHelp] = useState(false);

  const isMobile = isMobileBrowser();

  // Check if returning from Google OAuth redirect (especially on mobile)
  useEffect(() => {
    const handleRedirect = async () => {
      try {
        const redirectedUser = await checkGoogleRedirectResult();
        if (redirectedUser) {
          const profile: UserAccount = {
            name: redirectedUser.displayName || 'Étudiant',
            email: redirectedUser.email || '',
            avatar: redirectedUser.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(redirectedUser.displayName || 'User')}`,
            googleId: redirectedUser.uid,
            konanId: generateKonanId(redirectedUser.uid || redirectedUser.email || undefined),
            academicLevel: 'Licence Universitaire',
            isLoggedIn: true,
            isDemo: false,
            lastSyncedAt: new Date().toISOString(),
          };
          onLoginSuccess(profile);
        }
      } catch (err: any) {
        console.error('Redirect check error:', err);
        if (err.message === 'UNAUTHORIZED_DOMAIN' || err.code === 'auth/unauthorized-domain') {
          setShowDomainHelp(true);
        } else if (err.message) {
          setErrorMessage(err.message);
        }
      }
    };

    handleRedirect();
  }, [onLoginSuccess]);

  /**
   * Google Sign-In with Smart Mobile Fallback:
   * Tente popup, et si bloqué sur mobile, bascule automatiquement sur redirection.
   */
  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setErrorMessage(null);
    setShowDomainHelp(false);

    try {
      if (isMobile) {
        try {
          const googleUser = await signInWithGoogleReal();
          const profile: UserAccount = {
            name: googleUser.displayName || 'Étudiant',
            email: googleUser.email || '',
            avatar: googleUser.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(googleUser.displayName || 'User')}`,
            googleId: googleUser.uid,
            konanId: generateKonanId(googleUser.uid || googleUser.email || undefined),
            academicLevel: 'Licence Universitaire',
            isLoggedIn: true,
            isDemo: false,
            lastSyncedAt: new Date().toISOString(),
          };
          onLoginSuccess(profile);
          return;
        } catch (popupErr: any) {
          console.warn('Popup mobile bloqué, redirection Google enclenchée...', popupErr);
          if (popupErr.message === 'UNAUTHORIZED_DOMAIN' || popupErr.code === 'auth/unauthorized-domain') {
            setShowDomainHelp(true);
            setIsLoading(false);
            return;
          }
          await signInWithGoogleRedirectReal();
          return;
        }
      }

      const googleUser = await signInWithGoogleReal();
      const profile: UserAccount = {
        name: googleUser.displayName || 'Étudiant',
        email: googleUser.email || '',
        avatar: googleUser.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(googleUser.displayName || 'User')}`,
        googleId: googleUser.uid,
        konanId: generateKonanId(googleUser.uid || googleUser.email || undefined),
        academicLevel: 'Licence Universitaire',
        isLoggedIn: true,
        isDemo: false,
        lastSyncedAt: new Date().toISOString(),
      };
      onLoginSuccess(profile);
    } catch (err: any) {
      console.error('Google Sign-In Error:', err);
      if (err.message === 'UNAUTHORIZED_DOMAIN' || err.code === 'auth/unauthorized-domain') {
        setShowDomainHelp(true);
      } else if (err.message === 'POPUP_BLOCKED' || err.code === 'auth/popup-blocked') {
        try {
          await signInWithGoogleRedirectReal();
          return;
        } catch {
          setErrorMessage('La fenêtre popup Google a été bloquée. Utilisez l\'onglet "Email" ou "Accès Direct Mobile" ci-dessous.');
        }
      } else if (err.message) {
        setErrorMessage(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Forced Google Redirect for mobile users preferring full page flow
   */
  const handleGoogleRedirectDirect = async () => {
    setIsLoading(true);
    setErrorMessage(null);
    setShowDomainHelp(false);
    try {
      await signInWithGoogleRedirectReal();
    } catch (err: any) {
      console.error('Google Redirect Error:', err);
      setIsLoading(false);
      if (err.message === 'UNAUTHORIZED_DOMAIN' || err.code === 'auth/unauthorized-domain') {
        setShowDomainHelp(true);
      } else if (err.message) {
        setErrorMessage(err.message);
      }
    }
  };

  /**
   * Universal Email & Password Authentication:
   * Fonctionne sur tous les navigateurs mobiles et webviews sans exception.
   */
  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setErrorMessage('Veuillez renseigner votre email et mot de passe.');
      return;
    }
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const authUser = isRegistering 
        ? await signUpWithEmailReal(email.trim(), password)
        : await signInWithEmailReal(email.trim(), password);

      const profile: UserAccount = {
        name: authUser.displayName || email.split('@')[0] || 'Étudiant',
        email: authUser.email || email.trim(),
        avatar: authUser.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(authUser.displayName || email)}`,
        googleId: authUser.uid,
        konanId: generateKonanId(authUser.uid || authUser.email || undefined),
        academicLevel: 'Licence Universitaire',
        isLoggedIn: true,
        isDemo: false,
        lastSyncedAt: new Date().toISOString(),
      };
      onLoginSuccess(profile);
    } catch (err: any) {
      console.error('Email Auth Error:', err);
      setErrorMessage(err.message || 'Erreur lors de la connexion par email.');
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Fast Direct Mobile Student Access:
   * Permet aux étudiants sur smartphones restreints de se connecter immédiatement avec leur nom.
   */
  const handleDirectStudentLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = directName.trim() || 'Étudiant Mobile';
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const uniqueId = `mobile-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      const cleanEmail = `${cleanName.toLowerCase().replace(/[^a-z0-9]/g, '.')}@etudiant.konan.app`;
      const profile: UserAccount = {
        name: cleanName,
        email: cleanEmail,
        avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(cleanName)}`,
        googleId: uniqueId,
        konanId: generateKonanId(),
        academicLevel: 'Licence Universitaire',
        isLoggedIn: true,
        isDemo: false,
        lastSyncedAt: new Date().toISOString(),
      };
      onLoginSuccess(profile);
    } catch (err: any) {
      setErrorMessage(err.message || 'Erreur lors de la connexion mobile.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-6 sm:py-10 px-3.5 sm:px-6">
      
      <div className="w-full max-w-md space-y-4">
        
        {/* Navigation Back */}
        <button
          onClick={onBackToLanding}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Retour à l'accueil</span>
        </button>

        {/* Main Auth Card */}
        <div className="rounded-3xl p-5 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-xl dark:shadow-2xl space-y-5 relative overflow-hidden bg-white/95 dark:bg-slate-900/90 backdrop-blur-2xl">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="text-center space-y-2.5 relative z-10">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full p-[2px] bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-600 mx-auto shadow-lg shadow-sky-500/25 flex items-center justify-center overflow-hidden">
              <img
                src="/konan-logo.png"
                alt="Logo Officiel KONAN"
                className="w-full h-full object-contain rounded-full bg-white dark:bg-slate-950/80"
              />
            </div>

            <div className="space-y-1 pt-1">
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                Connexion à <span className="text-gradient-primary">KONAN</span>
              </h1>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed max-w-xs mx-auto">
                Accédez à votre planning d'étude personnalisé et synchronisez vos cours sur tous vos appareils.
              </p>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-[11px] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Compatible 100% Mobile, Tablette & Ordinateur</span>
            </div>
          </div>

          {/* Tab Selector for 100% Mobile Device Coverage */}
          <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700/60 relative z-10">
            <button
              type="button"
              onClick={() => { setActiveMethod('google'); setErrorMessage(null); }}
              className={`py-2 px-1 text-[11px] font-bold rounded-xl transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                activeMethod === 'google'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>Google</span>
            </button>
            <button
              type="button"
              onClick={() => { setActiveMethod('email'); setErrorMessage(null); }}
              className={`py-2 px-1 text-[11px] font-bold rounded-xl transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                activeMethod === 'email'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>Email</span>
            </button>
            <button
              type="button"
              onClick={() => { setActiveMethod('direct'); setErrorMessage(null); }}
              className={`py-2 px-1 text-[11px] font-bold rounded-xl transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                activeMethod === 'direct'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>Accès Direct</span>
            </button>
          </div>

          {/* Unauthorized Domain Guide Modal / Banner */}
          {showDomainHelp && (
            <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 text-amber-900 dark:text-amber-200 text-xs space-y-2 animate-in fade-in text-left">
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
                <div className="space-y-1">
                  <p className="font-bold text-amber-900 dark:text-amber-300">Configuration du domaine Google requise</p>
                  <p className="text-[11px] text-amber-800 dark:text-amber-200/90 leading-relaxed">
                    Ajoutez ce domaine dans votre console Firebase (Authentication &gt; Paramètres &gt; Domaines autorisés) :
                  </p>
                  <code className="block bg-amber-100 dark:bg-amber-950/60 p-1.5 rounded text-amber-900 dark:text-white font-mono text-[11px]">
                    {typeof window !== 'undefined' ? window.location.hostname : 'votre-domaine'}
                  </code>
                </div>
              </div>
            </div>
          )}

          {/* Error Banner */}
          {errorMessage && (
            <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/30 text-rose-800 dark:text-rose-300 text-xs flex items-start gap-2.5 animate-in fade-in text-left">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600 dark:text-rose-400" />
              <div className="flex-1">
                <p className="font-semibold">Information de connexion</p>
                <p className="text-[11px] text-rose-700 dark:text-rose-300/90 mt-0.5 leading-relaxed">{errorMessage}</p>
              </div>
            </div>
          )}

          {/* METHOD 1 : GOOGLE AUTH */}
          {activeMethod === 'google' && (
            <div className="space-y-3 relative z-10 pt-1 animate-in fade-in duration-200">
              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={isLoading}
                className="w-full p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50 min-h-[50px] group active:scale-98"
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                ) : (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z" />
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.27 21.37 7.35 24 12 24z" />
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.97 0 12s.46 3.84 1.26 5.42l4.02-3.15z" />
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.27 2.63 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
                  </svg>
                )}
                <span>{isLoading ? 'Connexion en cours...' : 'Continuer avec Google'}</span>
              </button>

              {/* Bouton explicite Redirection Mobile pour les téléphones stricts */}
              <button
                type="button"
                onClick={handleGoogleRedirectDirect}
                disabled={isLoading}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 dark:bg-slate-800/80 dark:hover:bg-slate-800 dark:border-slate-700/60 text-xs font-semibold dark:text-slate-300 transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <Smartphone className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400 shrink-0" />
                <span>Option Redirection Directe (Mobile)</span>
              </button>
            </div>
          )}

          {/* METHOD 2 : EMAIL & PASSWORD (UNIVERSAL) */}
          {activeMethod === 'email' && (
            <form onSubmit={handleEmailAuth} className="space-y-3 relative z-10 pt-1 animate-in fade-in duration-200">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Adresse Email</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="etudiant@universite.edu"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Mot de passe</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  minLength={6}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs shadow-md shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>{isRegistering ? "Créer mon Compte Étudiant" : "Se Connecter par Email"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={() => setIsRegistering(!isRegistering)}
                  className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
                >
                  {isRegistering 
                    ? "Déjà inscrit ? Se connecter" 
                    : "Première visite ? Créer un compte avec cet email"}
                </button>
              </div>
            </form>
          )}

          {/* METHOD 3 : DIRECT MOBILE STUDENT ACCESS (0% BLOCKED) */}
          {activeMethod === 'direct' && (
            <form onSubmit={handleDirectStudentLogin} className="space-y-3 relative z-10 pt-1 animate-in fade-in duration-200">
              <div className="p-3 rounded-xl bg-indigo-50/70 dark:bg-indigo-500/10 border border-indigo-200/80 dark:border-indigo-500/20 text-xs text-indigo-900 dark:text-indigo-200 leading-relaxed">
                <div className="flex items-center gap-1.5 font-bold mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>Accès Direct Mobile Instantané</span>
                </div>
                <span>Idéal si votre téléphone bloque Google ou si vous souhaitez démarrer immédiatement avec votre prénom.</span>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Votre Prénom & Nom</span>
                </label>
                <input
                  type="text"
                  value={directName}
                  onChange={(e) => setDirectName(e.target.value)}
                  placeholder="Ex : Christ Boni ou YHWH"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-xs shadow-md shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Accéder à mon Espace Mobile</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Demo Mode Link */}
          {onEnterDemoMode && (
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 space-y-2 relative z-10">
              <button
                type="button"
                onClick={onEnterDemoMode}
                className="w-full py-2.5 px-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300/80 hover:border-indigo-400 text-xs font-bold text-slate-700 hover:text-indigo-600 dark:bg-slate-950/70 dark:border-slate-800 dark:text-slate-300 dark:hover:text-indigo-300 dark:hover:bg-slate-900 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs group"
              >
                <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform" />
                <span>Explorer en Mode Démo (EDT prédéfini)</span>
              </button>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center">
                Planning d'exemple prêt à l'emploi • Sans aucune création de compte
              </p>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
