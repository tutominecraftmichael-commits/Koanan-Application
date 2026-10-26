import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  AlertCircle, 
  CheckCircle2,
  GraduationCap, 
  Smartphone, 
  Info, 
  ShieldCheck,
  Mail,
  Lock,
  User,
  ArrowRight,
  KeyRound
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
import { generateKonanId } from '../../lib/konanId';

export interface AuthPageProps {
  onLoginSuccess: (profile: UserAccount, preferences?: { chronotype: Chronotype }) => void;
  onEnterDemoMode?: () => void;
  onBackToLanding: () => void;
  onOpenAdmin?: () => void;
  currentProfile?: UserAccount;
}

type AuthMethod = 'google' | 'email';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

// Liste des services d'emails temporaires et jetables interdits
const DISPOSABLE_DOMAINS = new Set([
  'yopmail.com', 'yopmail.fr', 'yopmail.net', 'tempmail.com', 'temp-mail.org', 
  'guerrillamail.com', 'mailinator.com', '10minutemail.com', 'trashmail.com', 
  'sharklasers.com', 'getairmail.com', 'dispostable.com', 'fakemailgenerator.com', 
  'mohmal.com', 'crazymailing.com', 'burnermail.io', 'inboxkitten.com', 
  'throwawaymail.com', 'generator.email', 'emailondeck.com', 'tempail.com',
  'mytemp.email', 'nada.ltd', 'dropmail.me', 'getnada.com', 'crazymailing.com',
  'fakemail.net', 'disposablemail.com', 'trashmail.net', 'mytempemail.com'
]);

// Préfixes manifestement fictifs ou inventés
const INVENTED_PREFIXES = new Set([
  'test', 'fake', 'asdf', 'qwerty', 'admin', 'user', 'demo', 'sample', 
  'aaa', 'abc', 'xyz', '123', 'temp', 'azerty', 'noemail', 'none', 
  'test1', 'test2', 'test123', 'foo', 'bar', 'testeur', 'bidon', 'faux',
  'blabla', 'random', 'jesaispas', 'inconnu', 'exemple', 'example', 'nobody'
]);

// Fautes de frappe courantes sur les fournisseurs majeurs
const DOMAIN_TYPOS: Record<string, string> = {
  'gmai.com': 'gmail.com',
  'gamil.com': 'gmail.com',
  'gmial.com': 'gmail.com',
  'gmaill.com': 'gmail.com',
  'gmaik.com': 'gmail.com',
  'yaho.com': 'yahoo.com',
  'yahooo.com': 'yahoo.com',
  'yaho.fr': 'yahoo.fr',
  'hotmial.com': 'hotmail.com',
  'hotmai.com': 'hotmail.com',
  'outlok.com': 'outlook.com',
  'outloo.com': 'outlook.com',
  'iclud.com': 'icloud.com',
  'iclou.com': 'icloud.com',
};

/**
 * Validation stricte et rigoureuse de l'adresse email
 * Vérifie la syntaxe RFC, les noms inventés, les domaines jetables et les extensions réelles
 */
export function validateStrictEmail(email: string): { isValid: boolean; error?: string } {
  const clean = email.trim().toLowerCase();
  if (!clean) {
    return { isValid: false, error: "Veuillez renseigner votre adresse email." };
  }

  if (!EMAIL_REGEX.test(clean)) {
    return { isValid: false, error: "Format d'adresse email invalide. Exemple : etudiant@gmail.com ou nom@univ.edu" };
  }

  const [localPart, domainPart] = clean.split('@');
  if (!localPart || !domainPart) {
    return { isValid: false, error: "L'adresse email doit comporter un identifiant et un nom de domaine valide." };
  }

  // Vérifier la longueur de la partie locale
  if (localPart.length < 2) {
    return { isValid: false, error: "Le nom d'utilisateur de l'email est trop court (au moins 2 caractères requis)." };
  }

  // Interdiction des adresses inventées évidentes
  if (INVENTED_PREFIXES.has(localPart)) {
    return { isValid: false, error: `L'adresse "${localPart}@${domainPart}" est fictive ou de test. Veuillez entrer votre véritable adresse email active.` };
  }

  // Interdiction des répétitions absurdes (ex: aaaaa@..., 11111@...)
  if (/^(.)\1{3,}$/.test(localPart)) {
    return { isValid: false, error: "Cette adresse email semble inventée. Veuillez entrer une adresse email personnelle ou universitaire valide." };
  }

  // Vérifier les fautes de frappe de domaines célèbres
  if (DOMAIN_TYPOS[domainPart]) {
    return { isValid: false, error: `Domaine introuvable. Vouliez-vous écrire @${DOMAIN_TYPOS[domainPart]} au lieu de @${domainPart} ?` };
  }

  // Interdiction stricte des domaines jetables / poubelles
  if (DISPOSABLE_DOMAINS.has(domainPart)) {
    return { isValid: false, error: "Les adresses email temporaires ou jetables (yopmail, temp-mail...) sont strictement refusées. Utilisez une véritable adresse email pour sauvegarder votre planning." };
  }

  // Vérifier le TLD (extension)
  const parts = domainPart.split('.');
  const tld = parts[parts.length - 1];
  if (!tld || tld.length < 2 || !/^[a-z]+$/i.test(tld)) {
    return { isValid: false, error: "L'extension du domaine (.com, .fr, .ci, .edu...) est invalide." };
  }

  const invalidTlds = new Set(['test', 'fake', 'local', 'invalid', 'example', 'dummy', 'localhost']);
  if (invalidTlds.has(tld)) {
    return { isValid: false, error: `L'extension .${tld} n'est pas un domaine internet réel.` };
  }

  // Le nom de domaine principal (avant TLD) doit comporter au moins 2 caractères
  const mainDomain = parts[parts.length - 2];
  if (!mainDomain || mainDomain.length < 2) {
    return { isValid: false, error: "Le nom de domaine de l'email est invalide." };
  }

  return { isValid: true };
}

export const AuthPage: React.FC<AuthPageProps> = ({
  onLoginSuccess,
  onEnterDemoMode,
  onBackToLanding,
  onOpenAdmin,
}) => {
  const [activeMethod, setActiveMethod] = useState<AuthMethod>('google');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Email form state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  // Unauthorized domain dialog state
  const [showDomainHelp, setShowDomainHelp] = useState(false);

  // Mode Administrateur (Strictement Local & Invisible en Production)
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [adminPasswordInput, setAdminPasswordInput] = useState('');
  const [adminError, setAdminError] = useState<string | null>(null);
  const [isAdminChecking, setIsAdminChecking] = useState(false);
  const [showAdminPasswordPlain, setShowAdminPasswordPlain] = useState(false);

  const isLocalAdminAllowed = Boolean(
    typeof window !== 'undefined' && (
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1' ||
      window.location.hostname.endsWith('.local') ||
      import.meta.env.NEXT_PUBLIC_ENABLE_ADMIN_LOCAL === 'true' ||
      import.meta.env.VITE_ENABLE_ADMIN_LOCAL === 'true'
    )
  );

  const handleAdminAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAdminError(null);
    setIsAdminChecking(true);

    const configuredPassword = (
      import.meta.env.NEXT_PUBLIC_ADMIN_PASSWORD ||
      import.meta.env.VITE_ADMIN_PASSWORD ||
      ''
    ).trim();

    if (!configuredPassword) {
      setAdminError("Action requise : Définissez NEXT_PUBLIC_ADMIN_PASSWORD dans votre fichier .env.local pour activer l'accès.");
      setIsAdminChecking(false);
      return;
    }

    if (adminPasswordInput.trim() !== configuredPassword) {
      setAdminError("Mot de passe administrateur incorrect.");
      setIsAdminChecking(false);
      return;
    }

    try {
      sessionStorage.setItem('konan_admin_authenticated', 'true');
      sessionStorage.setItem('konan_admin_token', adminPasswordInput.trim());
    } catch {}

    setShowAdminModal(false);
    if (onOpenAdmin) {
      onOpenAdmin();
    }
    setIsAdminChecking(false);
  };

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
    setSuccessMessage(null);
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
          setErrorMessage('La fenêtre popup Google a été bloquée. Vous pouvez vous connecter via l\'onglet "Email" ci-dessous.');
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
    setSuccessMessage(null);
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
   * Password Reset Handler (avec validation stricte de l'email)
   */
  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    const emailCheck = validateStrictEmail(email);
    if (!emailCheck.isValid) {
      setErrorMessage(emailCheck.error || "Adresse email invalide.");
      return;
    }

    setIsLoading(true);
    try {
      await resetPasswordReal(email.trim());
      setSuccessMessage(`Un lien de réinitialisation sécurisé a été envoyé à l'adresse : ${email.trim()}. Vérifiez votre boîte de réception.`);
    } catch (err: any) {
      console.error('Reset Password Error:', err);
      setErrorMessage(err.message || 'Impossible d\'envoyer le lien de réinitialisation.');
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Universal Email & Password Authentication avec VALIDATION STRICTE
   * Refuse tout email fictif, jetable ou mal formé.
   */
  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    // 1. Contrôle rigoureux de l'adresse email
    const emailCheck = validateStrictEmail(email);
    if (!emailCheck.isValid) {
      setErrorMessage(emailCheck.error || "Adresse email invalide.");
      return;
    }

    // 2. Contrôle du mot de passe
    if (!password || password.length < 6) {
      setErrorMessage('Le mot de passe doit comporter au moins 6 caractères.');
      return;
    }

    // 3. Contrôle du nom lors de l'inscription
    if (isRegistering && fullName.trim().length < 2) {
      setErrorMessage('Veuillez renseigner votre Prénom & Nom (au moins 2 caractères).');
      return;
    }

    setIsLoading(true);
    try {
      const cleanEmail = email.trim();
      const authUser = isRegistering 
        ? await signUpWithEmailReal(cleanEmail, password, fullName.trim() || undefined)
        : await signInWithEmailReal(cleanEmail, password);

      const finalDisplayName = authUser.displayName || (isRegistering && fullName.trim()) || cleanEmail.split('@')[0] || 'Étudiant';

      const profile: UserAccount = {
        name: finalDisplayName,
        email: authUser.email || cleanEmail,
        avatar: authUser.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(finalDisplayName)}`,
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
      setErrorMessage(err.message || 'Erreur lors de l\'authentification par email.');
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
                className="w-full h-full object-contain rounded-full bg-[#091427]"
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
              <span>Authentification Sécurisée & Données Chiffrées</span>
            </div>
          </div>

          {/* Tab Selector : STRICTLY 2 METHODS (GOOGLE & EMAIL) */}
          <div className="grid grid-cols-2 gap-1 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700/60 relative z-10">
            <button
              type="button"
              onClick={() => { setActiveMethod('google'); setErrorMessage(null); setSuccessMessage(null); }}
              className={`py-2 px-3 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
                activeMethod === 'google'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z" />
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.27 21.37 7.35 24 12 24z" />
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.97 0 12s.46 3.84 1.26 5.42l4.02-3.15z" />
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.27 2.63 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
              </svg>
              <span>Google</span>
            </button>
            <button
              type="button"
              onClick={() => { setActiveMethod('email'); setErrorMessage(null); setSuccessMessage(null); }}
              className={`py-2 px-3 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
                activeMethod === 'email'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Mail className="w-4 h-4 shrink-0 text-indigo-500" />
              <span>Email & Mot de passe</span>
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

          {/* Success Banner */}
          {successMessage && (
            <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs flex items-start gap-2.5 animate-in fade-in text-left">
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" />
              <div className="flex-1">
                <p className="font-semibold">Opération réussie</p>
                <p className="text-[11px] text-emerald-700 dark:text-emerald-300/90 mt-0.5 leading-relaxed">{successMessage}</p>
              </div>
            </div>
          )}

          {/* Error Banner */}
          {errorMessage && (
            <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/30 text-rose-800 dark:text-rose-300 text-xs flex items-start gap-2.5 animate-in fade-in text-left">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600 dark:text-rose-400" />
              <div className="flex-1">
                <p className="font-semibold">Vérification requise</p>
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

              {/* Option Redirection Directe pour mobiles stricts */}
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

          {/* METHOD 2 : EMAIL & PASSWORD AVEC VALIDATION STRICTE */}
          {activeMethod === 'email' && (
            <div className="space-y-3 relative z-10 pt-1 animate-in fade-in duration-200">
              
              {/* Formulaire Mot de passe oublié */}
              {isForgotPassword ? (
                <form onSubmit={handleForgotPassword} className="space-y-3">
                  <div className="p-3 rounded-xl bg-indigo-50/70 dark:bg-indigo-500/10 border border-indigo-200/80 dark:border-indigo-500/20 text-xs text-indigo-900 dark:text-indigo-200">
                    <p className="font-bold flex items-center gap-1.5 mb-1">
                      <KeyRound className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                      <span>Réinitialisation du mot de passe</span>
                    </p>
                    <p className="text-[11px] text-indigo-800/90 dark:text-indigo-300/90">
                      Entrez votre adresse email existante pour recevoir un lien de réinitialisation sécurisé.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-indigo-500" />
                      <span>Votre Adresse Email</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="exemple : etudiant@gmail.com"
                      required
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
                        <span>Envoyer le lien de réinitialisation</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="text-center pt-1">
                    <button
                      type="button"
                      onClick={() => { setIsForgotPassword(false); setErrorMessage(null); }}
                      className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:underline cursor-pointer"
                    >
                      ← Retour à la connexion
                    </button>
                  </div>
                </form>
              ) : (
                /* Formulaire Connexion / Inscription standard */
                <form onSubmit={handleEmailAuth} className="space-y-3">
                  
                  {/* Champ Nom (uniquement pour la création de compte) */}
                  {isRegistering && (
                    <div className="space-y-1 animate-in fade-in duration-150">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-indigo-500" />
                        <span>Prénom & Nom</span>
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Ex : Christ Michaël Boni"
                        required={isRegistering}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      />
                    </div>
                  )}

                  {/* Champ Email vérifié */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-indigo-500" />
                        <span>Adresse Email réelle</span>
                      </span>
                      <span className="text-[10px] text-slate-400 font-normal">Gmail, Yahoo, Outlook, Univ...</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="etudiant@domaine.com"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  {/* Champ Mot de passe */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5 text-indigo-500" />
                        <span>Mot de passe</span>
                      </label>
                      {!isRegistering && (
                        <button
                          type="button"
                          onClick={() => { setIsForgotPassword(true); setErrorMessage(null); }}
                          className="text-[11px] font-medium text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
                        >
                          Mot de passe oublié ?
                        </button>
                      )}
                    </div>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Au moins 6 caractères"
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
                        <span>{isRegistering ? "Créer mon Compte Étudiant" : "Se Connecter"}</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="text-center pt-1.5">
                    <button
                      type="button"
                      onClick={() => {
                        setIsRegistering(!isRegistering);
                        setErrorMessage(null);
                        setSuccessMessage(null);
                      }}
                      className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
                    >
                      {isRegistering 
                        ? "Déjà inscrit ? Se connecter avec mon email" 
                        : "Première visite ? Créer un compte avec cette adresse"}
                    </button>
                  </div>
                </form>
              )}
            </div>
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

          {/* Mode Administrateur (Strictement Local - Invisible en Production) */}
          {isLocalAdminAllowed && onOpenAdmin && (
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 space-y-1.5 relative z-10">
              <button
                type="button"
                onClick={() => {
                  setShowAdminModal(true);
                  setAdminError(null);
                  setAdminPasswordInput('');
                }}
                className="w-full py-2.5 px-3.5 rounded-xl bg-purple-50 hover:bg-purple-100 dark:bg-purple-950/30 dark:hover:bg-purple-900/40 border border-purple-200 dark:border-purple-800/50 text-xs font-bold text-purple-700 dark:text-purple-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs group"
              >
                <ShieldCheck className="w-4 h-4 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
                <span>Mode Administrateur (Console Temps Réel)</span>
              </button>
              <p className="text-[10px] text-purple-600/70 dark:text-purple-400/60 text-center">
                Accès privé protégé • Visible uniquement en local sur votre PC
              </p>
            </div>
          )}

        </div>

      </div>

      {/* Modale d'Authentification Administrateur */}
      {showAdminModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-[#0F172A] border border-purple-500/30 max-w-sm w-full rounded-3xl p-6 shadow-2xl space-y-4 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-white">Console Administrateur</h3>
                  <p className="text-[11px] text-purple-300">Accès local sécurisé</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowAdminModal(false)}
                className="w-7 h-7 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center text-xs cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Entrez le mot de passe administrateur configuré dans votre fichier <code className="px-1.5 py-0.5 rounded bg-black/40 text-purple-300 font-mono text-[10px]">.env.local</code> pour accéder à la supervision temps réel.
            </p>

            <form onSubmit={handleAdminAuthSubmit} className="space-y-3 pt-1">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-purple-400" />
                  <span>Mot de passe Administrateur</span>
                </label>
                <div className="relative">
                  <input
                    type={showAdminPasswordPlain ? "text" : "password"}
                    value={adminPasswordInput}
                    onChange={(e) => setAdminPasswordInput(e.target.value)}
                    placeholder="••••••••••••"
                    required
                    autoFocus
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 pr-16"
                  />
                  <button
                    type="button"
                    onClick={() => setShowAdminPasswordPlain(!showAdminPasswordPlain)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs cursor-pointer"
                  >
                    {showAdminPasswordPlain ? "Masquer" : "Voir"}
                  </button>
                </div>
              </div>

              {adminError && (
                <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span className="leading-tight">{adminError}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isAdminChecking}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-purple-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isAdminChecking ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Ouvrir la Console Admin</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
