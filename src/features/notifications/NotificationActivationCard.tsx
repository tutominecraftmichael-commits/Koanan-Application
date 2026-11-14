import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BellRing, X } from 'lucide-react';
import { getPushDeviceStatus, readPushRegistrationError, subscribeToWebPush, type PushDeviceStatus } from '../../services/webPushService';

/**
 * Carte « Activer les notifications ». Une fois les notifications autorisées, c'est FINI : la carte ne
 * revient plus. KONAN refait lui-même, en silence, l'abonnement ou l'inscription auprès du serveur.
 * - permission jamais donnée : un bouton (Chrome exige un vrai toucher de l'élève pour demander) ;
 * - notifications bloquées : comment les débloquer dans Chrome ;
 * - iPhone : ajouter KONAN à l'écran d'accueil (obligatoire pour les notifications sur iPhone) ;
 * - autorisées mais réinscription silencieuse en échec depuis plus d'1 heure : la raison, et « Réessayer ».
 */
const REPAIR_ALERT_AFTER_MS = 60 * 60 * 1000;

const DISMISS_KEY = 'konan_notif_card_hidden_until';

function isHidden(): boolean {
  try {
    return Number(localStorage.getItem(DISMISS_KEY) || 0) > Date.now();
  } catch {
    return false;
  }
}

interface NotificationActivationCardProps {
  uid?: string;
  email?: string;
  planTier?: string;
  /** Appelé dès que l'appareil est abonné (pour déposer les alertes de la semaine). */
  onActivated: () => void;
}

export const NotificationActivationCard: React.FC<NotificationActivationCardProps> = ({ uid, email, planTier, onActivated }) => {
  const [status, setStatus] = useState<PushDeviceStatus | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [hidden, setHidden] = useState(isHidden);

  // Props lues au moment de l'appel : la vérification ne se relance pas à chaque rendu
  const propsRef = useRef({ uid, email, planTier, onActivated });
  propsRef.current = { uid, email, planTier, onActivated };

  const refresh = useCallback(() => {
    getPushDeviceStatus().then(async (next) => {
      if (next === 'repair') {
        // Autorisation déjà donnée : on refait l'abonnement seul, sans rien demander à l'élève
        const p = propsRef.current;
        const result = await subscribeToWebPush(p.uid, p.email, { planTier: p.planTier, onSubscribed: p.onActivated });
        next = result.success ? 'active' : 'repair';
      }
      setStatus(next);
    }).catch(() => setStatus('unsupported'));
  }, []);

  useEffect(() => {
    refresh();
    const onVisible = () => { if (document.visibilityState === 'visible') refresh(); };
    document.addEventListener('visibilitychange', onVisible);
    return () => document.removeEventListener('visibilitychange', onVisible);
  }, [refresh]);

  // Autorisées : rien à afficher, sauf si la réinscription silencieuse échoue depuis plus d'1 heure
  const repairError = status === 'repair' || status === 'active' ? readPushRegistrationError() : null;
  const showRepair = Boolean(repairError && Date.now() - repairError.since > REPAIR_ALERT_AFTER_MS && repairError.count >= 3);
  if (hidden || !status || status === 'unsupported') return null;
  if ((status === 'active' || status === 'repair') && !showRepair) return null;

  const activate = async () => {
    setBusy(true);
    setError('');
    const result = await subscribeToWebPush(uid, email, { planTier, onSubscribed: onActivated });
    setBusy(false);
    if (!result.success) setError(result.error || 'Activation impossible');
    refresh();
  };

  const hideForThreeDays = () => {
    try { localStorage.setItem(DISMISS_KEY, String(Date.now() + 3 * 24 * 60 * 60 * 1000)); } catch { /* sans effet */ }
    setHidden(true);
  };

  return (
    <div className="rounded-2xl border-2 border-emerald-300 dark:border-emerald-500/40 bg-emerald-50 dark:bg-emerald-950/40 p-3.5 sm:p-4 flex items-start gap-3">
      <div className="p-2 rounded-xl bg-emerald-500 text-white shrink-0">
        <BellRing className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0 space-y-1.5">
        {status === 'ask' && (
          <>
            <p className="text-sm font-extrabold text-slate-900 dark:text-white">Active les notifications</p>
            <p className="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
              KONAN te prévient 5 minutes avant chaque séance, et te dit à quelle heure elle est replacée si tu la rates.
            </p>
            <button
              type="button"
              onClick={activate}
              disabled={busy}
              className="mt-1 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 disabled:opacity-60 text-white text-xs font-extrabold shadow-[0_3px_0_0_#047857] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
            >
              {busy ? 'Activation…' : 'Activer les notifications'}
            </button>
          </>
        )}
        {showRepair && (
          <>
            <p className="text-sm font-extrabold text-slate-900 dark:text-white">KONAN n’arrive pas à joindre le serveur des notifications</p>
            <p className="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
              Tes notifications sont bien autorisées. Vérifie ta connexion internet ; KONAN réessaie tout seul.
            </p>
            <p className="text-xs font-semibold text-rose-700 dark:text-rose-300">Raison : {repairError?.message}</p>
            <button
              type="button"
              onClick={activate}
              disabled={busy}
              className="mt-1 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 disabled:opacity-60 text-white text-xs font-extrabold shadow-[0_3px_0_0_#047857] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
            >
              {busy ? 'Nouvel essai…' : 'Réessayer maintenant'}
            </button>
          </>
        )}
        {status === 'blocked' && (
          <>
            <p className="text-sm font-extrabold text-slate-900 dark:text-white">Les notifications sont bloquées</p>
            <p className="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
              Dans Chrome : touche le cadenas (ou les réglages) à gauche de l’adresse du site, puis <strong>Notifications</strong> → <strong>Autoriser</strong>. Reviens ensuite sur KONAN.
            </p>
          </>
        )}
        {status === 'ios-install' && (
          <>
            <p className="text-sm font-extrabold text-slate-900 dark:text-white">Sur iPhone, installe KONAN d’abord</p>
            <p className="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
              Dans Safari, touche <strong>Partager</strong> puis <strong>Sur l’écran d’accueil</strong>. Ouvre KONAN depuis cette icône : tu pourras alors activer les notifications.
            </p>
          </>
        )}
        {error && (
          <p className="text-xs font-semibold text-rose-700 dark:text-rose-300">Raison : {error}</p>
        )}
      </div>
      <button
        type="button"
        onClick={hideForThreeDays}
        aria-label="Masquer pour l’instant"
        className="p-1 -mr-1 -mt-1 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-emerald-100 dark:hover:text-white dark:hover:bg-emerald-900/50 transition-colors cursor-pointer"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
