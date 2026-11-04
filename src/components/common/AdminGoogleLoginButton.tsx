import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { adminLoginErrorMessage, loginAdminWithGoogle } from '../../lib/adminAuth';

/**
 * Bouton de connexion administrateur par compte Google (méthode principale).
 * Le serveur exige l'autorisation « admin » sur le compte et une connexion Google récente ;
 * la validation en deux étapes du compte Google protège l'accès.
 */
export const AdminGoogleLoginButton: React.FC<{
  onSuccess: () => void;
  onError: (message: string | null) => void;
}> = ({ onSuccess, onError }) => {
  const [busy, setBusy] = useState(false);

  const handleClick = async () => {
    setBusy(true);
    onError(null);
    const result = await loginAdminWithGoogle();
    setBusy(false);
    if (result === 'ok') onSuccess();
    else onError(adminLoginErrorMessage(result));
  };

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={() => void handleClick()}
        disabled={busy}
        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:opacity-60 text-white text-xs font-bold cursor-pointer transition-colors shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
      >
        <ShieldCheck className="w-4 h-4" aria-hidden="true" />
        <span>{busy ? 'Vérification…' : 'Continuer avec Google (administrateur)'}</span>
      </button>
      <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
        Réservé aux comptes administrateurs. Activez la validation en deux étapes sur votre compte Google.
      </p>
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-wide text-slate-400 dark:text-slate-500">
        <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
        <span>ou mot de passe temporaire</span>
        <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
      </div>
    </div>
  );
};
