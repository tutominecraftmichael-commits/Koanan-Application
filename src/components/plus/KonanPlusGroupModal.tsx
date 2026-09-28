import React, { useState } from 'react';
import { 
  X, 
  Crown, 
  UserPlus, 
  Trash2, 
  Check, 
  Copy, 
  ShieldCheck, 
  Sparkles,
  Users,
  CheckCircle2,
  AlertCircle,
  Hash,
  Clock
} from 'lucide-react';
import { Button } from '../ui/Button';
import { soundFX } from '../../lib/audioEffects';
import { validateKonanId, formatKonanId } from '../../lib/konanId';
import { 
  isTargetAlreadyPlus, 
  savePlusInvitation, 
  getPlusInvitations, 
  mergeInvitationsFromCloud, 
  invitationBroadcastChannel 
} from '../../services/storage';
import { listenToAllCloudInvitations } from '../../lib/firebase';
import { generateId } from '../../lib/utils';
import type { PlusInvitationNotification } from '../../types';

export interface KonanPlusGroupModalProps {
  isOpen: boolean;
  onClose: () => void;
  invitedEmails?: string[];
  invitedIds?: string[];
  onUpdateInvitedEmails?: (emails: string[]) => void;
  onUpdateInvitedIds?: (ids: string[]) => void;
  ownerName?: string;
  ownerEmail?: string;
  ownerKonanId?: string;
  maxAccounts?: number;
  studentName?: string;
  isGroupGuest?: boolean;
  invitedBy?: {
    name: string;
    konanId: string;
    email?: string;
  };
}

export const KonanPlusGroupModal: React.FC<KonanPlusGroupModalProps> = ({
  isOpen,
  onClose,
  invitedEmails = [],
  invitedIds = [],
  onUpdateInvitedEmails,
  onUpdateInvitedIds,
  ownerName: initialOwnerName,
  ownerEmail = '',
  ownerKonanId = 'KN-849201',
  maxAccounts = 4,
  studentName,
  isGroupGuest = false,
  invitedBy,
}) => {
  const [inputIdentifier, setInputIdentifier] = useState('');
  const [inputError, setInputError] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedId, setCopiedId] = useState(false);
  const [successBanner, setSuccessBanner] = useState<string | null>(null);
  const [invitations, setInvitations] = useState<PlusInvitationNotification[]>(() => getPlusInvitations());

  React.useEffect(() => {
    if (!isOpen) return;
    const refresh = () => setInvitations(getPlusInvitations());
    refresh();

    window.addEventListener('storage', refresh);
    const handleBc = () => refresh();
    invitationBroadcastChannel?.addEventListener('message', handleBc);

    const unsubscribeCloud = listenToAllCloudInvitations((cloudInvites) => {
      if (Array.isArray(cloudInvites) && cloudInvites.length > 0) {
        mergeInvitationsFromCloud(cloudInvites);
        setInvitations(getPlusInvitations());
      }
    });

    return () => {
      window.removeEventListener('storage', refresh);
      invitationBroadcastChannel?.removeEventListener('message', handleBc);
      unsubscribeCloud();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const ownerName = studentName || initialOwnerName || 'Titulaire du compte';
  const MAX_INVITES = maxAccounts;
  
  // Combine IDs and emails for unified group display
  const allInvited = [
    ...invitedIds.map(id => ({ value: id, type: 'id' as const })),
    ...invitedEmails.filter(e => !invitedIds.includes(e)).map(email => ({ value: email, type: 'email' as const }))
  ];

  const isMemberAccepted = (targetVal: string) => {
    const cleanTarget = targetVal.trim().toLowerCase().replace(/[^a-z0-9@.]/g, '');
    const invite = invitations.find(i => {
      const it = i.targetKonanIdOrEmail.trim().toLowerCase().replace(/[^a-z0-9@.]/g, '');
      return it === cleanTarget;
    });
    return invite?.status === 'accepted';
  };

  const acceptedCount = allInvited.filter(m => isMemberAccepted(m.value)).length;
  const pendingCount = allInvited.length - acceptedCount;
  const currentCount = allInvited.length;
  const remainingSlots = Math.max(0, MAX_INVITES - currentCount);

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    setInputError(null);
    const trimmed = inputIdentifier.trim();

    if (!trimmed) {
      setInputError("Veuillez saisir un ID Konan (ex: KN-849201) ou un email.");
      return;
    }

    // Check if it's an ID or an Email
    const isIdCandidate = trimmed.toUpperCase().startsWith('KN-') || /^[0-9]{5,8}$/.test(trimmed);
    let finalValue = trimmed;
    let isId = false;

    if (isIdCandidate) {
      const formatted = formatKonanId(trimmed);
      if (!validateKonanId(formatted)) {
        setInputError("Format d'ID Konan invalide. Exemple attendu : KN-849201.");
        return;
      }
      if (formatted.toUpperCase() === ownerKonanId.toUpperCase()) {
        setInputError("Vous ne pouvez pas inviter votre propre ID Konan.");
        return;
      }
      finalValue = formatted;
      isId = true;
    } else {
      if (!validateEmail(trimmed)) {
        setInputError("Format invalide. Saisissez un ID Konan (ex: KN-849201) ou un email valide.");
        return;
      }
      if (ownerEmail && trimmed.toLowerCase() === ownerEmail.toLowerCase()) {
        setInputError("Votre propre adresse email bénéficie déjà du compte principal.");
        return;
      }
      finalValue = trimmed.toLowerCase();
    }

    // Check duplicates
    if (allInvited.some(m => m.value.toLowerCase() === finalValue.toLowerCase())) {
      setInputError(`Cet identifiant "${finalValue}" est déjà rattaché à votre groupe.`);
      return;
    }

    // Strict validation: Only Free or Pro users can be invited.
    // If the person being invited already has Konan Plus, reject with red error:
    if (isTargetAlreadyPlus(finalValue)) {
      setInputError("Non, cet utilisateur a déjà Konan Plus.");
      return;
    }

    if (currentCount >= MAX_INVITES) {
      setInputError(`La limite de ${MAX_INVITES} comptes invités est atteinte.`);
      return;
    }

    // Create persistent invitation notification for the target user
    const newInvitation: PlusInvitationNotification = {
      id: generateId(),
      senderName: ownerName,
      senderKonanId: ownerKonanId,
      senderEmail: ownerEmail,
      targetKonanIdOrEmail: finalValue,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    savePlusInvitation(newInvitation);
    setInvitations(getPlusInvitations());

    if (isId) {
      const updatedIds = [...invitedIds, finalValue];
      onUpdateInvitedIds?.(updatedIds);
      // Also sync to emails array for backwards compatibility
      onUpdateInvitedEmails?.([...invitedEmails, finalValue]);
    } else {
      const updatedEmails = [...invitedEmails, finalValue];
      onUpdateInvitedEmails?.(updatedEmails);
    }

    soundFX.playCheckmarkPop();
    setInputIdentifier('');
    setSuccessBanner(`🎉 Invitation envoyée à "${finalValue}" ! En attente d'acceptation sur son appareil.`);
    setTimeout(() => setSuccessBanner(null), 4000);
  };

  const handleRemoveMember = (member: { value: string; type: 'id' | 'email' }) => {
    if (isGroupGuest) return;
    if (member.type === 'id') {
      const updated = invitedIds.filter(id => id !== member.value);
      onUpdateInvitedIds?.(updated);
    }
    const updatedEmails = invitedEmails.filter(e => e !== member.value);
    onUpdateInvitedEmails?.(updatedEmails);

    soundFX.playNotificationPing();
    setSuccessBanner(`L'identifiant "${member.value}" a été retiré du groupe.`);
    setTimeout(() => setSuccessBanner(null), 3000);
  };

  const handleCopyMyKonanId = () => {
    navigator.clipboard.writeText(ownerKonanId).then(() => {
      setCopiedId(true);
      soundFX.playCheckmarkPop();
      setTimeout(() => setCopiedId(false), 2500);
    }).catch(() => {});
  };

  const handleCopyInviteLink = () => {
    const inviteLink = `${window.location.origin}/?plan=plus&invite_id=${encodeURIComponent(ownerKonanId)}`;
    navigator.clipboard.writeText(inviteLink).then(() => {
      setCopiedLink(true);
      soundFX.playCheckmarkPop();
      setTimeout(() => setCopiedLink(false), 2500);
    }).catch(() => {});
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div 
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-2xl rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/98 to-slate-950 border-2 border-indigo-500/40 shadow-2xl shadow-indigo-950/60 overflow-hidden flex flex-col my-auto max-h-[92vh]"
      >
        {/* Top Header Shimmer */}
        <div className="h-2 w-full bg-gradient-to-r from-indigo-500 via-purple-400 to-amber-400 animate-shimmer" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors z-20 cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="p-5 sm:p-8 space-y-6 overflow-y-auto custom-scrollbar">
          
          {/* Header */}
          <div className="flex items-start gap-3.5">
            <div className="p-3 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 shadow-lg shadow-indigo-500/20 shrink-0">
              <Users className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 inline-flex items-center gap-1">
                  <Crown className="w-3 h-3 text-amber-300" />
                  KONAN PLUS • MULTI-COMPTES
                </span>
                <span className="text-xs font-bold text-slate-400">
                  {acceptedCount} actif{acceptedCount > 1 ? 's' : ''} {pendingCount > 0 ? `• ${pendingCount} en attente` : ''} / {MAX_INVITES}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-1">
                Groupe d'Étude & 4 Comptes Inclus
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {isGroupGuest 
                  ? "Vous êtes membre de ce groupe d'étude Konan Plus."
                  : "Invitez jusqu'à 4 amis via leur ID Konan personnel pour leur octroyer un accès complet et immédiat à Konan Plus."}
              </p>
            </div>
          </div>

          {/* MY PERSONAL KONAN ID CARD */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-950/50 via-slate-900 to-amber-950/30 border border-amber-500/30 space-y-2.5 shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Hash className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Votre ID Konan Unique & Personnel
                </span>
              </div>
              <span className="text-[10px] font-semibold text-amber-300/80">Fixe & Sécurisé</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Cet identifiant est strictement le vôtre. Donnez-le à vos amis ou partagez-le pour être identifié sur le réseau d'excellence Konan.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <div className="px-3.5 py-2 rounded-xl bg-slate-950 border border-amber-500/40 text-amber-300 font-mono font-black text-sm tracking-widest shadow-inner">
                {ownerKonanId}
              </div>
              <button
                type="button"
                onClick={handleCopyMyKonanId}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-500/40 text-xs font-bold transition-all cursor-pointer shadow-xs"
              >
                {copiedId ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedId ? 'ID Copié !' : 'Copier mon ID'}</span>
              </button>
            </div>
          </div>

          {/* Success Banner */}
          {successBanner && (
            <div className="p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{successBanner}</span>
            </div>
          )}

          {/* If the current user is an invited guest */}
          {isGroupGuest ? (
            <div className="p-4 sm:p-5 rounded-2xl bg-indigo-950/40 border border-indigo-500/40 space-y-2.5">
              <div className="flex items-center gap-2">
                <Crown className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Votre Statut : Membre Invité KONAN PLUS
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Vous bénéficiez de l'ensemble des privilèges KONAN PLUS grâce au compte de{' '}
                <strong className="text-white">{invitedBy?.name || 'votre titulaire'}</strong>{' '}
                {invitedBy?.konanId && <span className="text-amber-300 font-mono font-bold">({invitedBy.konanId})</span>}.
              </p>
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Règle du groupe :</strong> En tant que membre invité, vous avez un accès complet aux outils de révision, coaching et musiques. Seul le titulaire principal a le droit d'ajouter ou d'inviter d'autres personnes.
                </span>
              </div>
            </div>
          ) : (
            /* Input Form: Add Friend by ID or Email (Centered & Responsive for Mobile) */
            <form onSubmit={handleAddMember} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Ajouter un ami avec son ID Konan (ou son email) :
                </label>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full">
                  <div className="relative flex-1 w-full">
                    <input
                      type="text"
                      value={inputIdentifier}
                      onChange={(e) => {
                        setInputIdentifier(e.target.value);
                        setInputError(null);
                      }}
                      placeholder="Ex: KN-849201 ou ami@univ.edu"
                      disabled={remainingSlots === 0}
                      className="w-full px-4 py-3 pl-11 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-colors disabled:opacity-50 text-left"
                    />
                    <UserPlus className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                  </div>
                  <Button
                    type="submit"
                    variant="glow"
                    size="md"
                    disabled={remainingSlots === 0 || !inputIdentifier.trim()}
                    className="w-full sm:w-auto px-5 py-3 text-xs font-bold shrink-0 justify-center cursor-pointer shadow-md"
                  >
                    Ajouter au groupe
                  </Button>
                </div>
              </div>

              {inputError && (
                <div className="p-3.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{inputError}</span>
                </div>
              )}
            </form>
          )}

          {/* Members List */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Membres du Groupe ({currentCount + 1} / 5 étudiants au total)
              </span>
              <span className="text-[11px] font-semibold text-emerald-400">
                {remainingSlots} place{remainingSlots > 1 ? 's' : ''} disponible{remainingSlots > 1 ? 's' : ''}
              </span>
            </div>

            <div className="space-y-2">
              {/* Account Owner Card */}
              <div className="p-3 sm:p-3.5 rounded-2xl bg-indigo-950/30 border border-indigo-500/40 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-md">
                    👑
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-xs sm:text-sm font-bold text-white truncate">{ownerName}</p>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">
                        Titulaire
                      </span>
                    </div>
                    <p className="text-[11px] text-indigo-300 font-mono">
                      ID : {ownerKonanId} {ownerEmail ? `• ${ownerEmail}` : ''}
                    </p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-2 py-1 rounded-lg border border-emerald-500/20">
                    Actif
                  </span>
                </div>
              </div>

              {/* Invited Members */}
              {allInvited.map((member, idx) => {
                const isAccepted = isMemberAccepted(member.value);

                return (
                  <div 
                    key={idx}
                    className="p-3 sm:p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 flex items-center justify-between gap-3 transition-colors group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-300 font-bold text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-xs sm:text-sm font-bold text-slate-200 font-mono truncate">
                            {member.value}
                          </p>
                          <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 font-semibold uppercase">
                            {member.type === 'id' ? 'ID Konan' : 'Email'}
                          </span>
                        </div>
                        {isAccepted ? (
                          <p className="text-[10px] text-emerald-400 font-medium flex items-center gap-1 mt-0.5">
                            <Check className="w-3 h-3" />
                            Accès Konan Plus Actif & Confirmé
                          </p>
                        ) : (
                          <p className="text-[10px] text-amber-400 font-medium flex items-center gap-1 mt-0.5">
                            <Clock className="w-3 h-3 animate-pulse" />
                            Invitation envoyée • En attente d'acceptation
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {isAccepted ? (
                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                          Actif
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20 flex items-center gap-1">
                          <Clock className="w-3 h-3 animate-pulse" />
                          En attente
                        </span>
                      )}

                      {!isGroupGuest && (
                        <button
                          type="button"
                          onClick={() => handleRemoveMember(member)}
                          className="p-2 rounded-xl text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer shrink-0"
                          title="Retirer ce compte du groupe"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Empty Placeholder Slots */}
              {Array.from({ length: remainingSlots }).map((_, slotIdx) => (
                <div 
                  key={`empty-${slotIdx}`}
                  className="p-3 rounded-2xl bg-slate-950/40 border border-dashed border-slate-800 text-center text-xs text-slate-400 flex items-center justify-center gap-2"
                >
                  <UserPlus className="w-3.5 h-3.5 text-slate-400" />
                  <span>Place disponible #{currentCount + slotIdx + 1} • Prête à accueillir un camarade</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Invite Link Card */}
          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="space-y-0.5">
              <p className="text-xs font-bold text-white flex items-center gap-1.5 justify-center sm:justify-start">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                Lien d'invitation direct
              </p>
              <p className="text-[11px] text-slate-400">
                Partagez ce lien à vos amis pour qu'ils rejoignent directement avec votre ID.
              </p>
            </div>
            <button
              type="button"
              onClick={handleCopyInviteLink}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-850 text-indigo-300 hover:text-white border border-indigo-500/30 text-xs font-semibold transition-all cursor-pointer shrink-0 shadow-xs"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Lien Copié !' : 'Copier le lien d\'invitation'}</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Tous les membres ajoutés bénéficient de 100% des privilèges Konan Plus sans surcoût.</span>
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-end px-6 py-4 border-t border-slate-800/80 bg-slate-900/60">
          <Button
            variant="secondary"
            size="sm"
            onClick={onClose}
          >
            Fermer
          </Button>
        </div>
      </div>
    </div>
  );
};
