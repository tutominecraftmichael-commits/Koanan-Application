import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  AlertCircle, 
  GraduationCap,
  ExternalLink,
  Smartphone,
  Info,
  ShieldCheck
} from 'lucide-react';
import type { UserAccount, Chronotype } from '../../types';
import { 
  signInWithGoogleReal, 
  signInWithGoogleRedirectReal,
  checkGoogleRedirectResult,
  isMobileBrowser
} from '../../lib/firebase';
import { generateKonanId } from '../../lib/konanId';

export interface AuthPageProps {
  onLoginSuccess: (profile: UserAccount, preferences?: { chronotype: Chronotype }) => void;
  onEnterDemoMode?: () => void;
  onBackToLanding: () => void;
  currentProfile?: UserAccount;
}

export const AuthPage: React.FC<AuthPageProps> = ({
  onLoginSuccess,
  onEnterDemoMode,
  onBackToLanding,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
   * Real Google Authentication via Popup (Direct login with saved Google profile)
   */
  const handleGoogleLoginPopup = async () => {
    setIsLoading(true);
    setErrorMessage(null);
    setShowDomainHelp(false);

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
    } catch (err: any) {
      console.error('Google Sign-In Error:', err);
      if (err.message === 'UNAUTHORIZED_DOMAIN' || err.code === 'auth/unauthorized-domain') {
        setShowDomainHelp(true);
      } else if (err.message === 'POPUP_BLOCKED' || err.code === 'auth/popup-blocked') {
        setErrorMessage('La fenêtre popup a été bloquée par votre navigateur mobile. Cliquez sur "Utiliser la redirection mobile" ci-dessous.');
      } else if (err.message) {
        setErrorMessage(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Real Google Authentication via Redirect (recommended on mobile devices)
   */
  const handleGoogleLoginRedirect = async () => {
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

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-8 px-4 sm:px-6">
      
      <div className="w-full max-w-md space-y-4">
        
        {/* Navigation Back */}
        <button
          onClick={onBackToLanding}
          className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Retour à l'accueil</span>
        </button>

        {/* Main Auth Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6 relative overflow-hidden bg-slate-900/90 backdrop-blur-2xl">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="text-center space-y-3 relative z-10">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[2px] bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-600 mx-auto shadow-xl shadow-sky-500/25 flex items-center justify-center overflow-hidden">
              <img
                src="/konan-logo.png"
                alt="Logo Officiel KONAN"
                className="w-full h-full object-contain rounded-full bg-slate-950/80"
              />
            </div>

            <div className="space-y-1 pt-1">
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Connexion à <span className="text-gradient-primary">KONAN</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xs mx-auto">
                Connectez-vous en un clic avec votre compte Google pour accéder à votre espace de travail.
              </p>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Authentification officielle & sécurisée</span>
            </div>
          </div>

          {/* Unauthorized Domain Guide Modal / Banner */}
          {showDomainHelp && (
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs space-y-2.5 animate-in fade-in text-left">
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
                <div className="space-y-1">
                  <p className="font-bold text-amber-300">Configuration du domaine Google requise</p>
                  <p className="text-[11px] text-amber-200/90 leading-relaxed">
                    Google OAuth exige que l'adresse de votre site soit autorisée dans votre console Firebase :
                  </p>
                  <ol className="list-decimal list-inside space-y-0.5 text-[11px] text-amber-100/90 pt-1">
                    <li>Allez sur <a href="https://console.firebase.google.com" target="_blank" rel="noreferrer" className="underline font-semibold text-white inline-flex items-center gap-1">console.firebase.google.com <ExternalLink className="w-2.5 h-2.5" /></a></li>
                    <li>Ouvrez <strong>Authentication</strong> &gt; Onglet <strong>Paramètres</strong> &gt; <strong>Domaines autorisés</strong></li>
                    <li>Ajoutez <code className="bg-amber-950/60 px-1.5 py-0.5 rounded text-white font-mono">{typeof window !== 'undefined' ? window.location.hostname : 'votre-domaine'}</code></li>
                  </ol>
                </div>
              </div>
            </div>
          )}

          {/* Error Banner */}
          {errorMessage && (
            <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-2.5 animate-in fade-in text-left">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
              <div className="flex-1">
                <p className="font-semibold">Erreur d'authentification</p>
                <p className="text-[11px] text-rose-300/90 mt-0.5 leading-relaxed">{errorMessage}</p>
              </div>
            </div>
          )}

          {/* Authentication Options : STRICTLY GOOGLE ONLY */}
          <div className="space-y-3 relative z-10 pt-2">
            
            {/* Primary Google Button */}
            <button
              type="button"
              onClick={handleGoogleLoginPopup}
              disabled={isLoading}
              className="w-full p-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-sm shadow-xl shadow-white/5 hover:shadow-indigo-500/20 transition-all flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50 min-h-[52px] group active:scale-98"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
              ) : (
                <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.27 21.37 7.35 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.97 0 12s.46 3.84 1.26 5.42l4.02-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.27 2.63 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
              )}
              <span>{isLoading ? 'Connexion en cours...' : 'Continuer avec Google'}</span>
            </button>

            {/* Mobile Google Redirect Alternative */}
            {isMobile && (
              <button
                type="button"
                onClick={handleGoogleLoginRedirect}
                disabled={isLoading}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-700/60 text-xs font-semibold text-slate-300 transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <Smartphone className="w-4 h-4 text-indigo-400" />
                <span>Utiliser la redirection Google (mobile)</span>
              </button>
            )}

            {/* Demo Mode Link */}
            {onEnterDemoMode && (
              <div className="pt-4 border-t border-slate-800/80">
                <button
                  type="button"
                  onClick={onEnterDemoMode}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-950/70 hover:bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-400 hover:text-indigo-300 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <GraduationCap className="w-4 h-4 text-indigo-400" />
                  <span>Explorer en mode Démo sans compte</span>
                </button>
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
