import React, { useState, useEffect } from 'react';
import { Download, Share, PlusSquare, X, CheckCircle2, Smartphone, Apple } from 'lucide-react';
import { Button } from '../ui/Button';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

export const PwaInstallPromptModal: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isIos, setIsIos] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [showIosGuide, setShowIosGuide] = useState(false);
  const [isBannerDismissed, setIsBannerDismissed] = useState(false);
  const [isInstalledSuccess, setIsInstalledSuccess] = useState(false);

  useEffect(() => {
    // 1. Détecte si l'application est déjà installée en mode standalone
    const checkStandalone = () => {
      const isStandaloneMode = 
        window.matchMedia('(display-mode: standalone)').matches ||
        (window.navigator as any).standalone === true ||
        document.referrer.includes('android-app://');
      setIsStandalone(isStandaloneMode);
    };

    checkStandalone();

    // 2. Détection de l'appareil (iOS vs Android)
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isAppleDevice = /iphone|ipad|ipod/.test(userAgent) || 
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isAndroidDevice = /android/.test(userAgent);

    setIsIos(isAppleDevice);
    setIsAndroid(isAndroidDevice);

    // 3. Vérifie si l'utilisateur a masqué temporairement la bannière
    const dismissedTime = localStorage.getItem('konan_pwa_banner_dismissed_until');
    if (dismissedTime && Date.now() < parseInt(dismissedTime, 10)) {
      setIsBannerDismissed(true);
    }

    // 4. Écoute de l'événement natif d'installation PWA (Android / Chrome / Edge)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setDeferredPrompt(null);
      setIsStandalone(true);
      setIsInstalledSuccess(true);
      setTimeout(() => setIsInstalledSuccess(false), 4000);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (isIos) {
      // Sur iOS / Safari : afficher le mini-guide visuel
      setShowIosGuide(true);
      return;
    }

    if (deferredPrompt) {
      try {
        await deferredPrompt.prompt();
        const choice = await deferredPrompt.userChoice;
        if (choice.outcome === 'accepted') {
          setIsInstalledSuccess(true);
        }
        setDeferredPrompt(null);
      } catch (err) {
        console.warn('[PWA] Erreur lors de l\'installation :', err);
      }
    } else {
      // Si le prompt natif n'est pas encore disponible
      setShowIosGuide(true);
    }
  };

  const handleDismiss = () => {
    setIsBannerDismissed(true);
    // Masquer pendant 2 jours pour ne pas surcharger l'utilisateur
    const twoDaysLater = Date.now() + 2 * 24 * 60 * 60 * 1000;
    localStorage.setItem('konan_pwa_banner_dismissed_until', String(twoDaysLater));
  };

  // Si l'application est déjà installée sur l'appareil, ne rien afficher
  if (isStandalone) {
    return null;
  }

  return (
    <>
      {/* Toast de succès d'installation */}
      {isInstalledSuccess && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-emerald-950/90 border border-emerald-500/40 text-emerald-200 shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom duration-300">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <div className="text-xs">
            <p className="font-bold">KONAN a été installé avec succès !</p>
            <p className="text-[11px] text-emerald-300/80">Retrouvez le Cube KONAN sur votre écran d'accueil.</p>
          </div>
        </div>
      )}

      {/* Bannière discrète d'installation sur mobile / desktop */}
      {!isBannerDismissed && (
        <div className="fixed bottom-3 left-3 right-3 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-40 p-3.5 sm:p-4 rounded-2xl bg-slate-900/95 dark:bg-slate-900/95 backdrop-blur-md border border-indigo-500/30 shadow-2xl animate-in fade-in slide-in-from-bottom duration-300">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 p-0.5 shrink-0 shadow-md">
                <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center overflow-hidden">
                  <img src="/logo-konan.png" alt="Cube KONAN" className="w-7 h-7 object-contain" />
                </div>
              </div>

              <div className="min-w-0">
                <p className="text-xs font-bold text-white truncate flex items-center gap-1.5">
                  <span>Installer KONAN</span>
                  <span className="text-[9px] uppercase font-mono px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    App Mobile
                  </span>
                </p>
                <p className="text-[11px] text-slate-400 truncate">
                  {isIos ? "Ajoutez KONAN sur votre écran d'accueil Apple" : "Accès direct, ultra-rapide et hors-ligne"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <Button
                variant="glow"
                size="sm"
                onClick={handleInstallClick}
                className="text-xs py-1.5 px-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold shadow-md shadow-indigo-600/30 cursor-pointer"
                leftIcon={<Download className="w-3.5 h-3.5" />}
              >
                Installer
              </Button>

              <button
                type="button"
                onClick={handleDismiss}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                title="Masquer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal / Guide d'installation spécial pour Apple iOS ou navigateurs sans prompt automatique */}
      {showIosGuide && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-sm rounded-3xl bg-slate-900 border border-indigo-500/30 p-5 sm:p-6 shadow-2xl space-y-4 text-left relative">
            <button
              onClick={() => setShowIosGuide(false)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center shrink-0">
                <img src="/logo-konan.png" alt="Cube KONAN" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-1.5">
                  {isIos ? (
                    <Apple className="w-4 h-4 text-slate-200" />
                  ) : (
                    <Smartphone className="w-4 h-4 text-indigo-400" />
                  )}
                  <span>Installer sur votre téléphone</span>
                </h3>
                <p className="text-xs text-slate-400">
                  {isIos ? "Sur iPhone / iPad (Safari & Chrome)" : isAndroid ? "Sur Android (Chrome, Edge, Samsung Internet...)" : "Sur votre navigateur mobile"}
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-2 text-xs text-slate-300">
              {isIos ? (
                <>
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-800/60 border border-slate-700/50">
                    <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-white flex items-center gap-1.5">
                        <span>Appuyez sur</span>
                        <Share className="w-4 h-4 text-indigo-400" />
                        <span>Partager</span>
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        En bas de votre écran dans Safari (ou dans le menu de votre navigateur).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-800/60 border border-slate-700/50">
                    <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-white flex items-center gap-1.5">
                        <span>Sélectionnez</span>
                        <PlusSquare className="w-4 h-4 text-indigo-400" />
                        <span>« Sur l'écran d'accueil »</span>
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Faites défiler le menu vers le bas puis confirmez en appuyant sur <strong>Ajouter</strong>.
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-800/60 border border-slate-700/50">
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold shrink-0">
                    ℹ️
                  </div>
                  <div>
                    <p className="font-semibold text-white">Menu de votre navigateur</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Ouvrez le menu <strong>(⋮)</strong> de votre navigateur et appuyez sur <strong>« Installer l'application »</strong> ou <strong>« Ajouter à l'écran d'accueil »</strong>.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <Button
              variant="secondary"
              size="sm"
              onClick={() => setShowIosGuide(false)}
              className="w-full text-xs font-bold py-2.5 mt-2"
            >
              C'est compris !
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
