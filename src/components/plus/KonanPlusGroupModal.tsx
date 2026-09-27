import React, { useState } from 'react';
import { 
  X, 
  Crown, 
  UserPlus, 
  Trash2, 
  Mail, 
  Check, 
  Copy, 
  ShieldCheck, 
  Sparkles,
  Users,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { Button } from '../ui/Button';
import { soundFX } from '../../lib/audioEffects';

export interface KonanPlusGroupModalProps {
  isOpen: boolean;
  onClose: () => void;
  invitedEmails: string[];
  onUpdateInvitedEmails: (emails: string[]) => void;
  ownerName?: string;
  ownerEmail?: string;
  maxAccounts?: number;
  studentName?: string;
}

export const KonanPlusGroupModal: React.FC<KonanPlusGroupModalProps> = ({
  isOpen,
  onClose,
  invitedEmails = [],
  onUpdateInvitedEmails,
  ownerName: initialOwnerName,
  ownerEmail = '',
  maxAccounts = 4,
  studentName,
}) => {
  const [newEmail, setNewEmail] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [successBanner, setSuccessBanner] = useState<string | null>(null);

  if (!isOpen) return null;

  const ownerName = studentName || initialOwnerName || 'Titulaire du compte';
  const MAX_INVITES = maxAccounts;
  const currentCount = invitedEmails.length;
  const remainingSlots = Math.max(0, MAX_INVITES - currentCount);

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleAddEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError(null);
    const trimmed = newEmail.trim().toLowerCase();

    if (!trimmed) {
      setEmailError("Veuillez saisir une adresse email valide.");
      return;
    }

    if (!validateEmail(trimmed)) {
      setEmailError("Format d'email invalide (ex: ami@etudiant.univ.edu).");
      return;
    }

    if (ownerEmail && trimmed === ownerEmail.toLowerCase()) {
      setEmailError("Votre propre adresse email bénéficie déjà du compte principal.");
      return;
    }

    if (invitedEmails.map(e => e.toLowerCase()).includes(trimmed)) {
      setEmailError("Cette adresse email est déjà rattachée à votre groupe Konan Plus.");
      return;
    }

    if (invitedEmails.length >= MAX_INVITES) {
      setEmailError(`La limite de ${MAX_INVITES} comptes invités est atteinte.`);
      return;
    }

    const updated = [...invitedEmails, trimmed];
    onUpdateInvitedEmails(updated);
    soundFX.playCheckmarkPop();
    setNewEmail('');
    setSuccessBanner(`🎉 Compte ajouté avec succès ! ${trimmed} a désormais accès complet à Konan Plus.`);
    setTimeout(() => setSuccessBanner(null), 4000);
  };

  const handleRemoveEmail = (indexToRemove: number) => {
    const removedEmail = invitedEmails[indexToRemove];
    const updated = invitedEmails.filter((_, idx) => idx !== indexToRemove);
    onUpdateInvitedEmails(updated);
    soundFX.playNotificationPing();
    setSuccessBanner(`Le compte ${removedEmail} a été retiré du groupe.`);
    setTimeout(() => setSuccessBanner(null), 3000);
  };

  const handleCopyInviteLink = () => {
    const inviteLink = `${window.location.origin}/?plan=plus&invite=${encodeURIComponent(ownerEmail || ownerName)}`;
    navigator.clipboard.writeText(inviteLink).then(() => {
      setCopiedLink(true);
      soundFX.playCheckmarkPop();
      setTimeout(() => setCopiedLink(false), 2500);
    }).catch(() => {
      // Fallback
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div 
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-2xl rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/98 to-slate-950 border-2 border-indigo-500/40 shadow-2xl shadow-indigo-950/60 overflow-hidden flex flex-col my-auto max-h-[92vh]"
      >
        {/* Top Header Shimmer */}
        <div className="h-2 w-full bg-gradient-to-r from-indigo-500 via-purple-400 to-indigo-500 animate-shimmer" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors z-20 cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto custom-scrollbar">
          
          {/* Header */}
          <div className="flex items-start gap-3.5">
            <div className="p-3 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 shadow-lg shadow-indigo-500/20 shrink-0">
              <Crown className="w-7 h-7 text-amber-300" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                  Formule KONAN PLUS
                </span>
                <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  {currentCount}/{MAX_INVITES} sièges utilisés
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-1">
                Mon Groupe d'Étude & 4 Comptes Inclus
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                Votre abonnement <strong>KONAN PLUS</strong> vous permet de partager l'intégralité des fonctionnalités premium avec <strong>jusqu'à 4 amis ou camarades de promo</strong>.
              </p>
            </div>
          </div>

          {/* Success Banner */}
          {successBanner && (
            <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-200 text-xs font-semibold flex items-center gap-2 animate-in slide-in-from-top-2">
              <Sparkles className="w-4 h-4 text-emerald-300 shrink-0" />
              <span>{successBanner}</span>
            </div>
          )}

          {/* Quick Copy Link Box */}
          <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="space-y-0.5 min-w-0">
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-300 flex items-center gap-1">
                <Users className="w-3.5 h-3.5" />
                Lien d'invitation direct
              </span>
              <p className="text-xs text-slate-300">
                Envoyez ce lien à vos amis pour qu'ils rejoignent directement votre groupe Konan Plus.
              </p>
            </div>
            <Button
              variant="secondary"
              size="sm"
              leftIcon={copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              onClick={handleCopyInviteLink}
              className={`shrink-0 cursor-pointer text-xs font-bold py-2 ${
                copiedLink ? '!border-emerald-500/60 !text-emerald-300' : ''
              }`}
            >
              {copiedLink ? 'Lien copié !' : 'Copier le lien'}
            </Button>
          </div>

          {/* Add Friend Form (if slots available) */}
          {remainingSlots > 0 ? (
            <form onSubmit={handleAddEmail} className="space-y-2">
              <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider">
                Inviter un camarade par email ({remainingSlots} place{remainingSlots > 1 ? 's' : ''} disponible{remainingSlots > 1 ? 's' : ''})
              </label>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={newEmail}
                    onChange={(e) => {
                      setNewEmail(e.target.value);
                      if (emailError) setEmailError(null);
                    }}
                    placeholder="Adresse email de votre ami(e)..."
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-indigo-400 transition-colors placeholder:text-slate-500"
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="sm"
                  leftIcon={<UserPlus className="w-3.5 h-3.5" />}
                  className="cursor-pointer text-xs font-bold whitespace-nowrap py-2.5 px-4"
                >
                  Ajouter au groupe
                </Button>
              </div>
              {emailError && (
                <p className="text-xs text-rose-400 flex items-center gap-1.5 pt-0.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{emailError}</span>
                </p>
              )}
            </form>
          ) : (
            <div className="p-3.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-medium flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Votre groupe Konan Plus est complet (4/4 places utilisées). Vous pouvez retirer un compte à tout moment pour libérer une place.</span>
            </div>
          )}

          {/* Slots List (1 Owner + 4 Slots) */}
          <div className="space-y-3 pt-2">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
              Comptes bénéficiaires de votre abonnement (5 comptes au total)
            </span>

            {/* Account 1: Owner (Always Active) */}
            <div className="p-3.5 rounded-2xl bg-indigo-950/40 border border-indigo-500/40 flex items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-md">
                  👑
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-white text-xs sm:text-sm truncate">
                      {ownerName}
                    </p>
                    <span className="text-[10px] font-black uppercase px-2 py-0.2 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 shrink-0">
                      Titulaire
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 truncate mt-0.5">
                    {ownerEmail || 'Compte Administrateur Principal'}
                  </p>
                </div>
              </div>
              <span className="text-[11px] text-emerald-400 font-bold px-2 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 shrink-0">
                ✓ Actif
              </span>
            </div>

            {/* 4 Guest Slots */}
            {Array.from({ length: MAX_INVITES }).map((_, idx) => {
              const email = invitedEmails[idx];
              const slotNumber = idx + 1;

              if (email) {
                return (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 flex items-center justify-between gap-3 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-indigo-300 font-bold text-xs shrink-0">
                        #{slotNumber}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="font-bold text-white text-xs sm:text-sm truncate">
                            {email}
                          </p>
                          <span className="text-[10px] font-bold uppercase px-2 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shrink-0">
                            Invité Plus
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 truncate mt-0.5">
                          Accès complet débloqué à toutes les fonctionnalités Konan Plus
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemoveEmail(idx)}
                      className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer shrink-0"
                      title="Retirer ce compte du groupe"
                      aria-label={`Retirer ${email}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                );
              }

              return (
                <div 
                  key={idx}
                  className="p-3 rounded-2xl bg-slate-950/40 border border-dashed border-slate-800 flex items-center justify-between gap-3 text-slate-500 text-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-500 font-bold text-xs shrink-0">
                      #{slotNumber}
                    </div>
                    <div>
                      <p className="font-medium text-slate-400">Siège invité #{slotNumber} libre</p>
                      <p className="text-[11px] text-slate-600">En attente d'une adresse email</p>
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-500 italic">Disponible</span>
                </div>
              );
            })}
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-800/80 bg-slate-900/50 flex items-center justify-between gap-3 relative z-10">
          <p className="text-[11px] text-slate-400">
            Toutes les modifications sont synchronisées en temps réel.
          </p>
          <Button
            variant="secondary"
            size="sm"
            onClick={onClose}
            className="cursor-pointer text-xs"
          >
            Fermer
          </Button>
        </div>
      </div>
    </div>
  );
};
