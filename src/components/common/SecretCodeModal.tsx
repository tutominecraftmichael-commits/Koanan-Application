import React, { useState, useEffect, useRef } from 'react';
import { X, KeyRound, Check, AlertCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { verifyAndUnlockProSecret } from '../../services/secretCodeService';

export interface SecretCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  featureTitle?: string;
}

export const SecretCodeModal: React.FC<SecretCodeModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  featureTitle,
}) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setCode('');
      setError(null);
      setIsSuccess(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError(null);

    if (!code.trim()) {
      setError('Veuillez entrer votre code secret.');
      return;
    }

    const isValid = verifyAndUnlockProSecret(code);
    if (isValid) {
      setIsSuccess(true);
      setTimeout(() => {
        onSuccess();
        onClose();
      }, 800);
    } else {
      setError('Code secret incorrect. Veuillez entrer un code valide.');
      inputRef.current?.focus();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-5 sm:p-7 space-y-4 animate-in zoom-in-95 duration-200 text-slate-900 dark:text-slate-100"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Icon + Badge */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 shadow-xs flex items-center gap-1">
              <KeyRound className="w-3 h-3" />
              ACCÈS RESTREINT
            </span>
            <span className="text-[11px] font-semibold text-amber-700 dark:text-amber-400">
              Code Secret Requis
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
            {featureTitle ? `Débloquer : ${featureTitle}` : "Entrez le Code Secret pour activer KONAN PRO"}
          </h3>

          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Pour accéder à l'ensemble des fonctionnalités exclusives de <strong>KONAN PRO</strong> (méthodes neuroscientifiques, calibrage des examens et synchronisation Google Agenda), veuillez saisir le code d'activation confidentiel.
          </p>
        </div>

        {/* Form input */}
        <form onSubmit={handleSubmit} className="space-y-3.5 pt-1">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
              Code secret d'accès
            </label>
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value.toUpperCase());
                  setError(null);
                }}
                placeholder="EXEMPLE : EXAM2026"
                disabled={isSuccess}
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-mono text-center text-base sm:text-lg font-black tracking-widest focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all uppercase placeholder:font-normal placeholder:tracking-normal placeholder:text-slate-400 dark:placeholder:text-slate-600"
              />
              {isSuccess && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center animate-in zoom-in-75">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
              )}
            </div>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-500/40 text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2 animate-in fade-in">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600 dark:text-rose-400" />
              <span>{error}</span>
            </div>
          )}

          {isSuccess && (
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/40 text-emerald-700 dark:text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in">
              <Sparkles className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
              <span className="font-bold">Code validé ! Activation de KONAN PRO en cours...</span>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              disabled={isSuccess}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors cursor-pointer order-2 sm:order-1"
            >
              Rester en Gratuit
            </button>

            <Button
              type="submit"
              variant="glow"
              size="md"
              disabled={isSuccess || !code.trim()}
              rightIcon={!isSuccess ? <ArrowRight className="w-3.5 h-3.5" /> : undefined}
              className="w-full sm:flex-1 text-xs font-bold py-2.5 order-1 sm:order-2 shadow-md cursor-pointer bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 border-amber-400"
            >
              {isSuccess ? 'Accès Débloqué ✓' : 'Valider le code secret'}
            </Button>
          </div>
        </form>

        <p className="text-[10px] text-center text-slate-400 dark:text-slate-500 pt-1">
          🔒 Code sécurisé réservé aux étudiants autorisés.
        </p>
      </div>
    </div>
  );
};
