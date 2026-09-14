import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  AlertCircle, 
  GraduationCap,
  Mail,
  Lock,
  User,
  ExternalLink,
  CheckCircle2,
  Smartphone,
  Info
} from 'lucide-react';
import type { UserAccount, Chronotype } from '../../types';
import { 
  signInWithGoogleReal, 
  signInWithGoogleRedirectReal,
  checkGoogleRedirectResult,
  signInWithEmailReal,
  signUpWithEmailReal,
  resetPasswordReal,
  isMobileBrowser
} from '../../lib/firebase';
import { ProfileSetupModal } from './ProfileSetupModal';

export interface AuthPageProps {
  onLoginSuccess: (profile: UserAccount, preferences?: { chronotype: Chronotype }) => void;
  onEnterDemoMode?: () => void;
  onBackToLanding: () => void;
  currentProfile?: UserAccount;
}

type AuthMode = 'signin' | 'signup';

export const AuthPage: React.FC<AuthPageProps> = ({
  onLoginSuccess,
  onEnterDemoMode,
  onBackToLanding,
}) => {
  const [authMode, setAuthMode] = useState<AuthMode>('signin');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successNotice, setSuccessNotice] = useState<string | null>(null);

  // Email form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Password reset state
  const [isResetPasswordMode, setIsResetPasswordMode] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);

  // Unauthorized domain dialog state
  const [showDomainHelp, setShowDomainHelp] = useState(false);

  // Profile setup modal for first-time or finalized profiles
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [pendingUser, setPendingUser] = useState<{
    uid: string;
    displayName: string;
    email: string;
    photoURL: string;
  } | null>(null);

  const isMobile = isMobileBrowser();

  // Check if returning from Google OAuth redirect (especially on mobile)
  useEffect(() => {
    const handleRedirect = async () => {
      try {
        const redirectedUser = await checkGoogleRedirectResult();
        if (redirectedUser) {
          setPendingUser({
            uid: redirectedUser.uid,
            displayName: redirectedUser.displayName || 'Étudiant',
            email: redirectedUser.email || '',
            photoURL: redirectedUser.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(redirectedUser.displayName || 'User')}`,
          });
          setIsProfileModalOpen(true);
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
  }, []);

  /**
   * Real Google Authentication via Popup
   */
  const handleGoogleLoginPopup = async () => {
    setIsLoading(true);
    setErrorMessage(null);
    setShowDomainHelp(false);

    try {
      const googleUser = await signInWithGoogleReal();
      setPendingUser({
        uid: googleUser.uid,
        displayName: googleUser.displayName || 'Étudiant',
        email: googleUser.email || '',
        photoURL: googleUser.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(googleUser.displayName || 'User')}`,
      });
      setIsProfileModalOpen(true);
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

  /**
   * Real Firebase Email & Password Authentication (Login or Sign-Up)
   */
  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessNotice(null);

    if (!email.trim() || !password) {
      setErrorMessage('Veuillez renseigner votre email et mot de passe.');
      return;
    }

    if (authMode === 'signup') {
      if (password.length < 6) {
        setErrorMessage('Le mot de passe doit contenir au moins 6 caractères.');
        return;
      }
      if (password !== confirmPassword) {
        setErrorMessage('Les deux mots de passe ne correspondent pas.');
        return;
      }
    }

    setIsLoading(true);

    try {
      if (authMode === 'signin') {
        // Real Firebase Sign In
        const user = await signInWithEmailReal(email, password);
        setPendingUser({
          uid: user.uid,
          displayName: user.displayName || email.split('@')[0],
          email: user.email || email,
          photoURL: user.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(user.displayName || email)}`,
        });
        setIsProfileModalOpen(true);
      } else {
        // Real Firebase Sign Up
        const user = await signUpWithEmailReal(email, password, fullName);
        setPendingUser({
          uid: user.uid,
          displayName: user.displayName || fullName || email.split('@')[0],
          email: user.email || email,
          photoURL: user.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(fullName || email)}`,
        });
        setIsProfileModalOpen(true);
      }
    } catch (err: any) {
      console.error('Email Auth Error:', err);
      setErrorMessage(err.message || 'Une erreur est survenue lors de l\'authentification.');
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Real Firebase Password Reset Email
   */
  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setErrorMessage('Veuillez entrer votre adresse email pour recevoir le lien de réinitialisation.');
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    try {
      await resetPasswordReal(email);
      setResetEmailSent(true);
      setSuccessNotice(`Un email de réinitialisation a été envoyé à ${email}.`);
    } catch (err: any) {
      setErrorMessage(err.message || 'Impossible d\'envoyer l\'email de réinitialisation.');
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Finalize profile setup and trigger real login success
   */
  const handleProfileFinalized = (profile: UserAccount, preferences?: { chronotype: Chronotype }) => {
    setIsProfileModalOpen(false);
    onLoginSuccess(profile, preferences);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-6 px-3 sm:px-6">
      <div className="w-full max-w-md space-y-4">
        
        {/* Back button */}
        <button
          onClick={onBackToLanding}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer p-1"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour à l'accueil</span>
        </button>

        {/* Main Auth Card */}
        <div className="glass-panel rounded-3xl p-5 sm:p-7 border border-slate-800 shadow-2xl space-y-5 relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="text-center space-y-2 relative z-10">
            <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-600 mx-auto shadow-xl shadow-sky-500/25 flex items-center justify-center overflow-hidden">
              <img
                src="/konan-logo.png"
                alt="Logo Officiel KONAN"
                className="w-full h-full object-contain rounded-full bg-slate-950/80"
              />
            </div>

            <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight pt-1">
              Connexion à <span className="text-gradient-primary">KONAN</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xs mx-auto">
              Authentification sécurisée avec vos identifiants réels (Google ou Email).
            </p>
          </div>

          {/* Unauthorized Domain Guide Modal / Banner */}
          {showDomainHelp && (
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs space-y-2.5 animate-in fade-in">
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
                    <li>Ajoutez <code className="bg-amber-950/60 px-1.5 py-0.5 rounded text-white font-mono">{window.location.hostname}</code></li>
                  </ol>
                  <div className="pt-2">
                    <p className="text-[11px] font-semibold text-emerald-300">
                      💡 Votre connexion Email & Mot de passe ci-dessous fonctionne immédiatement sans aucune restriction de domaine !
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Error Banner */}
          {errorMessage && (
            <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-2.5 animate-in fade-in">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
              <div className="flex-1">
                <p className="font-semibold">Erreur d'authentification</p>
                <p className="text-[11px] text-rose-300/90 mt-0.5 leading-relaxed">{errorMessage}</p>
              </div>
            </div>
          )}

          {/* Success Banner */}
          {successNotice && (
            <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-start gap-2.5 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
              <div className="flex-1">
                <p className="text-[11px] text-emerald-300/90 mt-0.5">{successNotice}</p>
              </div>
            </div>
          )}

          {/* Authentication Options */}
          <div className="space-y-4 relative z-10">
            
            {/* 1. Google Authentication */}
            <div className="space-y-2">
              <button
                type="button"
                onClick={handleGoogleLoginPopup}
                disabled={isLoading}
                className="w-full p-3.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm shadow-xl hover:shadow-indigo-500/10 transition-all flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50 min-h-[48px] group"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
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
                <span>{isLoading ? 'Connexion en cours...' : 'Continuer avec Google'}</span>
              </button>

              {/* Mobile Google Redirect Alternative if on phone */}
              {isMobile && (
                <button
                  type="button"
                  onClick={handleGoogleLoginRedirect}
                  disabled={isLoading}
                  className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/60 text-[11px] font-medium text-slate-300 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Smartphone className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Redirection Google (recommandé sur mobile)</span>
                </button>
              )}
            </div>

            {/* Separator */}
            <div className="relative flex items-center justify-center py-1">
              <div className="border-t border-slate-800 w-full" />
              <span className="bg-[#0b1322] px-3 text-[10px] text-slate-400 uppercase font-bold tracking-wider shrink-0">
                ou avec votre email
              </span>
              <div className="border-t border-slate-800 w-full" />
            </div>

            {/* Mode Selector: Connexion vs Création de compte */}
            {!isResetPasswordMode && (
              <div className="flex rounded-xl bg-slate-950 p-1 border border-slate-800 text-xs">
                <button
                  type="button"
                  onClick={() => {
                    setAuthMode('signin');
                    setErrorMessage(null);
                  }}
                  className={`flex-1 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                    authMode === 'signin'
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Se connecter
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setAuthMode('signup');
                    setErrorMessage(null);
                  }}
                  className={`flex-1 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                    authMode === 'signup'
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Créer un compte
                </button>
              </div>
            )}

            {/* 2. Real Firebase Email/Password Form */}
            {!isResetPasswordMode ? (
              <form onSubmit={handleEmailAuth} className="space-y-3">
                {/* Full name field (signup only) */}
                {authMode === 'signup' && (
                  <div className="space-y-1 text-left">
                    <label className="block text-[11px] font-semibold text-slate-300 flex items-center gap-1.5">
                      <User className="w-3 h-3 text-indigo-400" />
                      <span>Nom & Prénom d'Étudiant</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Ex: Christ Boni"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                )}

                {/* Email field */}
                <div className="space-y-1 text-left">
                  <label className="block text-[11px] font-semibold text-slate-300 flex items-center gap-1.5">
                    <Mail className="w-3 h-3 text-indigo-400" />
                    <span>Adresse Email</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="etudiant@univ.ci ou votre email"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>

                {/* Password field */}
                <div className="space-y-1 text-left">
                  <label className="block text-[11px] font-semibold text-slate-300 flex items-center gap-1.5">
                    <Lock className="w-3 h-3 text-indigo-400" />
                    <span>Mot de passe</span>
                  </label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={authMode === 'signup' ? 'Au moins 6 caractères' : 'Votre mot de passe'}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>

                {/* Confirm password (signup only) */}
                {authMode === 'signup' && (
                  <div className="space-y-1 text-left">
                    <label className="block text-[11px] font-semibold text-slate-300 flex items-center gap-1.5">
                      <Lock className="w-3 h-3 text-indigo-400" />
                      <span>Confirmer le mot de passe</span>
                    </label>
                    <input
                      type="password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Retapez le mot de passe"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                )}

                {/* Forgot password link (signin only) */}
                {authMode === 'signin' && (
                  <div className="text-right">
                    <button
                      type="button"
                      onClick={() => {
                        setIsResetPasswordMode(true);
                        setErrorMessage(null);
                        setSuccessNotice(null);
                      }}
                      className="text-[11px] text-slate-400 hover:text-indigo-300 transition-colors cursor-pointer"
                    >
                      Mot de passe oublié ?
                    </button>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-bold text-xs transition-colors cursor-pointer shadow-md shadow-indigo-600/20 flex items-center justify-center gap-2 min-h-[42px]"
                >
                  <span>
                    {isLoading
                      ? 'Validation en cours...'
                      : authMode === 'signin'
                      ? 'Se connecter avec Email'
                      : 'Créer mon compte étudiant'}
                  </span>
                </button>
              </form>
            ) : (
              /* Password Reset Form */
              <form onSubmit={handlePasswordReset} className="space-y-3">
                <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-800/40 text-left">
                  <p className="text-xs font-semibold text-indigo-200">Réinitialisation du mot de passe</p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Entrez votre adresse email pour recevoir un lien de réinitialisation sécurisé de Firebase.
                  </p>
                </div>

                <div className="space-y-1 text-left">
                  <label className="block text-[11px] font-semibold text-slate-300 flex items-center gap-1.5">
                    <Mail className="w-3 h-3 text-indigo-400" />
                    <span>Adresse Email</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre-email@univ.ci"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setIsResetPasswordMode(false);
                      setResetEmailSent(false);
                      setErrorMessage(null);
                      setSuccessNotice(null);
                    }}
                    className="flex-1 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[11px] font-semibold text-slate-300 transition-colors cursor-pointer"
                  >
                    Retour
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading || resetEmailSent}
                    className="flex-1 py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-bold text-[11px] transition-colors cursor-pointer shadow-md shadow-indigo-600/20"
                  >
                    {isLoading ? 'Envoi...' : resetEmailSent ? 'Email envoyé !' : 'Envoyer le lien'}
                  </button>
                </div>
              </form>
            )}

            {/* 3. Demo Mode Link */}
            {onEnterDemoMode && (
              <div className="pt-3 border-t border-slate-800/80">
                <button
                  type="button"
                  onClick={onEnterDemoMode}
                  className="w-full py-2 px-3 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800/80 text-[11px] font-semibold text-slate-400 hover:text-indigo-300 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Tester l'application en mode Démo (Alexandre Étudiant)</span>
                </button>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Profile Setup Modal: Displays after real Google or Email login to confirm academic level & display name */}
      {pendingUser && (
        <ProfileSetupModal
          isOpen={isProfileModalOpen}
          initialName={pendingUser.displayName}
          initialEmail={pendingUser.email}
          initialAvatar={pendingUser.photoURL}
          googleId={pendingUser.uid}
          onSaveProfile={handleProfileFinalized}
          onCancel={() => setIsProfileModalOpen(false)}
        />
      )}

    </div>
  );
};

