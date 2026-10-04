import React, { useState, useEffect } from 'react';
import { 
  Crown, 
  Users, 
  Target, 
  Headphones, 
  Sparkles, 
  ArrowRight,
  ArrowLeft,
  X,
  Check,
  Copy,
  Hash,
  UserPlus,
  Play,
  Pause,
  Clock,
  Volume2,
  ShieldCheck
} from 'lucide-react';
import type { AcademicGoal, PlusInvitationNotification } from '../../types';
import { Button } from '../ui/Button';
import { soundFX } from '../../lib/audioEffects';
import { validateKonanId, formatKonanId } from '../../lib/konanId';
import { focusAudioEngine, FOCUS_SOUNDTRACKS } from '../../lib/focusAudioEngine';
import type { FocusSoundtrackId } from '../../lib/focusAudioEngine';
import { isTargetAlreadyPlus, savePlusInvitation, getPlusInvitations } from '../../services/storage';
import { generateId } from '../../lib/utils';

export interface KonanPlusActivationModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentName?: string;
  konanId?: string;
  invitedIds?: string[];
  invitedEmails?: string[];
  onUpdateInvitedIds?: (ids: string[]) => void;
  onUpdateInvitedEmails?: (emails: string[]) => void;
  academicGoal?: AcademicGoal;
  onSelectAcademicGoal?: (goal: AcademicGoal) => void;
  onOpenGroupModal?: () => void;
  onOpenGoalModal?: () => void;
  isGroupGuest?: boolean;
  invitedBy?: {
    name: string;
    konanId: string;
    email?: string;
  };
}

export const KonanPlusActivationModal: React.FC<KonanPlusActivationModalProps> = ({
  isOpen,
  onClose,
  studentName = 'Étudiant',
  konanId = 'KN-849201',
  invitedIds = [],
  invitedEmails = [],
  onUpdateInvitedIds,
  onUpdateInvitedEmails,
  academicGoal = 'target_16',
  onSelectAcademicGoal,
  onOpenGroupModal,
  onOpenGoalModal: _onOpenGoalModal,
  isGroupGuest = false,
  invitedBy,
}) => {
  // Step 0: Welcome Royal Screen
  // Step 1: 4 Accounts via Konan ID
  // Step 2: 3 Academic Goals
  // Step 3: Focus Soundscapes
  const [currentStep, setCurrentStep] = useState<0 | 1 | 2 | 3>(0);

  // Step 1 state
  const [friendIdInput, setFriendIdInput] = useState('');
  const [step1Error, setStep1Error] = useState<string | null>(null);
  const [step1Success, setStep1Success] = useState<string | null>(null);
  const [copiedMyId, setCopiedMyId] = useState(false);

  // Step 2 state (Academic goal)
  const [selectedGoal, setSelectedGoal] = useState<AcademicGoal>(academicGoal);

  // Step 4 state (Audio player preview)
  const [selectedTrack, setSelectedTrack] = useState<FocusSoundtrackId>('alpha_waves');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioVolume, setAudioVolume] = useState(0.7);

  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
      setSelectedGoal(academicGoal);
      soundFX.playVictoryCelebration();
    } else {
      // Stop audio if modal is closed
      if (focusAudioEngine.isPlaying()) {
        focusAudioEngine.stop();
        setIsPlayingAudio(false);
      }
    }
  }, [isOpen, academicGoal]);

  if (!isOpen) return null;

  // STEP 1 HANDLERS: Quick Add Friend by ID or Email
  const handleAddFriend = (e: React.FormEvent) => {
    e.preventDefault();
    setStep1Error(null);
    const trimmed = friendIdInput.trim();
    if (!trimmed) {
      setStep1Error("Veuillez renseigner un ID Konan (ex: KN-849201).");
      return;
    }

    const isIdCandidate = trimmed.toUpperCase().startsWith('KN-') || /^[0-9]{5,8}$/.test(trimmed);
    let finalVal = trimmed;

    if (isIdCandidate) {
      const formatted = formatKonanId(trimmed);
      if (!validateKonanId(formatted)) {
        setStep1Error("Format d'ID Konan invalide. Exemple : KN-849201.");
        return;
      }
      if (formatted.toUpperCase() === konanId.toUpperCase()) {
        setStep1Error("Vous ne pouvez pas vous inviter vous-même.");
        return;
      }
      finalVal = formatted;
    }

    const currentList = [...invitedIds, ...invitedEmails];
    if (currentList.some(item => item.toLowerCase() === finalVal.toLowerCase())) {
      setStep1Error(`L'identifiant "${finalVal}" est déjà dans votre groupe.`);
      return;
    }

    // Strict validation: Only Free or Pro users can be invited.
    // If the person being invited already has Konan Plus, reject with red error:
    if (isTargetAlreadyPlus(finalVal)) {
      setStep1Error("Non, cet utilisateur a déjà Konan Plus.");
      return;
    }

    if (currentList.length >= 4) {
      setStep1Error("La limite de 4 comptes invités est atteinte.");
      return;
    }

    // Create persistent invitation notification
    const newInvitation: PlusInvitationNotification = {
      id: generateId(),
      senderName: studentName,
      senderKonanId: konanId,
      targetKonanIdOrEmail: finalVal,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    savePlusInvitation(newInvitation);

    if (isIdCandidate) {
      const nextIds = [...invitedIds, finalVal];
      onUpdateInvitedIds?.(nextIds);
      onUpdateInvitedEmails?.([...invitedEmails, finalVal]);
    } else {
      onUpdateInvitedEmails?.([...invitedEmails, finalVal]);
    }

    soundFX.playCheckmarkPop();
    setFriendIdInput('');
    setStep1Success(`Invitation envoyée ! En attente d'acceptation par votre camarade sur son appareil.`);
    setTimeout(() => setStep1Success(null), 3500);
  };

  const handleCopyMyId = () => {
    navigator.clipboard.writeText(konanId).then(() => {
      setCopiedMyId(true);
      soundFX.playCheckmarkPop();
      setTimeout(() => setCopiedMyId(false), 2500);
    }).catch(() => {});
  };

  // STEP 2 HANDLERS: Select Goal
  const handleGoalPick = (goal: AcademicGoal) => {
    setSelectedGoal(goal);
    soundFX.playCheckmarkPop();
    onSelectAcademicGoal?.(goal);
  };

  // STEP 4 HANDLERS: Audio Test
  const handleToggleAudio = () => {
    if (isPlayingAudio) {
      focusAudioEngine.stop();
      setIsPlayingAudio(false);
    } else {
      focusAudioEngine.setVolume(audioVolume);
      focusAudioEngine.play(selectedTrack);
      setIsPlayingAudio(true);
    }
  };

  const handleSelectSoundtrack = (trackId: FocusSoundtrackId) => {
    setSelectedTrack(trackId);
    focusAudioEngine.setVolume(audioVolume);
    focusAudioEngine.play(trackId);
    setIsPlayingAudio(true);
  };

  const handleVolumeChange = (vol: number) => {
    setAudioVolume(vol);
    focusAudioEngine.setVolume(vol);
  };

  const handleNextStep = () => {
    soundFX.playCheckmarkPop();
    if (currentStep < 3) {
      setCurrentStep((prev) => (prev + 1) as 0 | 1 | 2 | 3);
    } else {
      handleFinalFinish();
    }
  };

  const handlePrevStep = () => {
    soundFX.playCheckmarkPop();
    if (currentStep > 0) {
      setCurrentStep((prev) => (prev - 1) as 0 | 1 | 2 | 3);
    }
  };

  const handleFinalFinish = () => {
    if (focusAudioEngine.isPlaying()) {
      focusAudioEngine.stop();
      setIsPlayingAudio(false);
    }
    soundFX.playVictoryCelebration();
    onClose();
  };

  const allMembers = Array.from(new Set([...invitedIds, ...invitedEmails]));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-300 overflow-y-auto">
      
      {/* Royal Ambient Glow Background */}
      <div className="fixed inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-amber-500/15 blur-3xl opacity-80 animate-pulse" />
      </div>

      <div 
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-xl rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/98 to-slate-950 border-2 border-indigo-400/70 shadow-2xl shadow-indigo-950/80 overflow-hidden flex flex-col my-auto max-h-[92vh]"
      >
        {/* Top Header Shimmer Bar with Step Progression */}
        <div className="w-full bg-slate-950/80 border-b border-slate-800/80">
          <div className="h-1.5 bg-slate-800 w-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 via-amber-400 to-purple-500 transition-all duration-500 ease-out"
              style={{ width: `${currentStep === 0 ? 10 : (currentStep / 4) * 100}%` }}
            />
          </div>

          {/* Stepper Dots & Navigation Bar */}
          {currentStep > 0 && (
            <div className="px-6 py-2.5 flex items-center justify-between text-xs border-b border-slate-800/40 bg-slate-900/40">
              <div className="flex items-center gap-1.5 sm:gap-2">
                {[1, 2, 3].map((stepNum) => (
                  <button
                    key={stepNum}
                    type="button"
                    onClick={() => setCurrentStep(stepNum as 1 | 2 | 3)}
                    className={`w-6 h-6 rounded-full text-[11px] font-black flex items-center justify-center transition-all cursor-pointer ${
                      currentStep === stepNum
                        ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/30 ring-2 ring-amber-400/40'
                        : currentStep > stepNum
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {currentStep > stepNum ? '✓' : stepNum}
                  </button>
                ))}
              </div>
              <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                Étape {currentStep} sur 3
              </span>
            </div>
          )}
        </div>

        {/* Close Button */}
        <button
          onClick={handleFinalFinish}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors z-20 cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Dynamic Step Content with Smooth Entrance */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto relative z-10 custom-scrollbar flex-1">
          
          {/* ========================================================= */}
          {/* ÉTAPE 0 : CÉLÉBRATION ROYALE & BIENVENUE                   */}
          {/* ========================================================= */}
          {currentStep === 0 && (
            <div className="space-y-6 text-center animate-in fade-in zoom-in-95 duration-300">
              <div className="flex flex-col items-center space-y-3 pt-2">
                <div className="relative">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-amber-400 p-0.5 shadow-2xl shadow-indigo-500/50 flex items-center justify-center animate-bounce-slow">
                    <div className="w-full h-full rounded-[22px] bg-slate-950/95 flex items-center justify-center">
                      <Crown className="w-10 h-10 sm:w-12 sm:h-12 text-amber-300 drop-shadow-[0_0_15px_rgba(251,191,36,0.7)]" />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 p-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 shadow-md">
                    <Sparkles className="w-4 h-4 fill-current" />
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 inline-flex items-center gap-1.5">
                    <Crown className="w-3.5 h-3.5 text-amber-300" />
                    FORMULE COMPLÈTE & ÉLITE ACTIVÉE
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight pt-1">
                    Félicitations <span className="plus-multicolor-shimmer-text font-black">{studentName}</span> !
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto pt-1 leading-relaxed">
                    Bienvenue dans <strong>KONAN PLUS</strong>. Vous venez de débloquer l'expérience d'excellence académique la plus complète.
                  </p>
                </div>
              </div>

              {/* 3 Super Exclusive Features summary teaser */}
              <div className="p-4 rounded-2xl bg-indigo-950/20 border border-indigo-500/30 text-left space-y-2.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-300 block">
                  Configurons ensemble vos 3 super-pouvoirs étape par étape :
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                    <Users className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span className="truncate">1. Inviter 4 amis</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                    <Target className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="truncate">2. Objectif Scolaire</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                    <Headphones className="w-4 h-4 text-purple-400 shrink-0" />
                    <span className="truncate">3. Musiques de Focus</span>
                  </div>
                </div>
              </div>

              <Button
                variant="glow"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                onClick={() => setCurrentStep(1)}
                className="w-full font-black text-sm py-3.5 shadow-xl shadow-indigo-600/30 cursor-pointer"
              >
                Démarrer la configuration guidée (Étape 1/3)
              </Button>
            </div>
          )}

          {/* ========================================================= */}
          {/* ÉTAPE 1 : GROUPE D'ÉTUDE & 4 COMPTES VIA ID KONAN         */}
          {/* ========================================================= */}
          {currentStep === 1 && (
            <div className="space-y-5 animate-in slide-in-from-right duration-300 text-left">
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 shrink-0">
                  <Users className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">
                    Étape 1 sur 4 • Multi-comptes
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    {isGroupGuest ? "Votre Groupe d'Étude Konan Plus" : "Invitez jusqu'à 4 amis avec leur ID Konan"}
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                    {isGroupGuest 
                      ? "Vous êtes membre invité. Votre accès à toutes les fonctionnalités Konan Plus est 100% garanti."
                      : "Chaque étudiant possède un ID Konan personnel et fixe. Renseignez l'ID de votre ami pour lui débloquer un compte Konan Plus complet et gratuit."}
                  </p>
                </div>
              </div>

              {/* YOUR OWN KONAN ID */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-slate-900 to-amber-950/30 border border-amber-500/40 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                    <Hash className="w-3.5 h-3.5 text-amber-400" />
                    Votre ID Konan Personnel :
                  </span>
                  <span className="text-[10px] text-amber-300 font-semibold">Fixe & Unique</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1.5 rounded-xl bg-slate-950 border border-amber-500/40 text-amber-300 font-mono font-black text-sm tracking-widest shadow-inner">
                    {konanId}
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyMyId}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-500/40 text-xs font-bold transition-all cursor-pointer shadow-xs"
                  >
                    {copiedMyId ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedMyId ? 'Copié !' : 'Copier mon ID'}</span>
                  </button>
                </div>
              </div>

              {/* If user is guest */}
              {isGroupGuest ? (
                <div className="p-4 sm:p-5 rounded-2xl bg-indigo-950/40 border border-indigo-500/40 space-y-2.5">
                  <div className="flex items-center gap-2">
                    <Crown className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Membre Invité • Accès Débloqué
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Vous avez rejoint le groupe d'étude de{' '}
                    <strong className="text-white">{invitedBy?.name || 'votre titulaire'}</strong>{' '}
                    {invitedBy?.konanId && <span className="text-amber-300 font-mono font-bold">({invitedBy.konanId})</span>}.
                    Toutes les fonctionnalités KONAN PLUS vous sont 100% ouvertes.
                  </p>
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Règle de gestion :</strong> Seul le titulaire principal du compte a le droit d'ajouter ou d'inviter d'autres membres au groupe.
                    </span>
                  </div>
                </div>
              ) : (
                /* ADD FRIEND INPUT - Full width and centered on mobile */
                <form onSubmit={handleAddFriend} className="space-y-3">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Entrez l'ID Konan de votre ami (ex: KN-948201) :
                  </label>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full">
                    <div className="relative flex-1 w-full">
                      <input
                        type="text"
                        value={friendIdInput}
                        onChange={(e) => {
                          setFriendIdInput(e.target.value);
                          setStep1Error(null);
                        }}
                        placeholder="Ex: KN-849201 ou email"
                        className="w-full px-4 py-3 pl-11 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 transition-colors text-left"
                      />
                      <UserPlus className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                    </div>
                    <Button
                      type="submit"
                      variant="glow"
                      size="md"
                      className="w-full sm:w-auto px-5 py-3 text-xs font-bold shrink-0 justify-center cursor-pointer shadow-md"
                    >
                      Ajouter au groupe
                    </Button>
                  </div>

                  {step1Error && (
                    <p className="text-xs text-rose-400 font-medium animate-in fade-in">
                      ⚠️ {step1Error}
                    </p>
                  )}
                  {step1Success && (
                    <p className="text-xs text-emerald-400 font-medium animate-in fade-in">
                      ✅ {step1Success}
                    </p>
                  )}
                </form>
              )}

              {/* ACTIVE INVITED LIST */}
              <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-300 uppercase">Membres rattachés</span>
                  <span className="font-bold text-indigo-400">{allMembers.length} / 4 invités</span>
                </div>
                {allMembers.length === 0 ? (
                  <p className="text-xs text-slate-400 italic">
                    Aucun ami ajouté pour l'instant. Vous pourrez aussi les ajouter plus tard depuis votre tableau de bord.
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-1.5">
                    {allMembers.map((m, idx) => {
                      const allInv = getPlusInvitations();
                      const clean = m.trim().toLowerCase().replace(/[^a-z0-9@.]/g, '');
                      const inv = allInv.find(i => (i.targetKonanIdOrEmail || '').trim().toLowerCase().replace(/[^a-z0-9@.]/g, '') === clean);
                      const isAccepted = inv ? inv.status === 'accepted' : false;

                      return (
                        <span key={idx} className="px-2.5 py-1 rounded-lg bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-mono font-bold flex items-center gap-1.5">
                          <span>👤 {m}</span>
                          {isAccepted ? (
                            <span className="text-[10px] text-emerald-400 font-sans font-bold">✓ Actif</span>
                          ) : (
                            <span className="text-[10px] text-amber-400 font-sans font-bold flex items-center gap-1">
                              <Clock className="w-2.5 h-2.5" /> En attente
                            </span>
                          )}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>

              {onOpenGroupModal && (
                <div className="text-center pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      onOpenGroupModal();
                    }}
                    className="text-xs text-indigo-300 hover:text-indigo-200 underline font-semibold cursor-pointer"
                  >
                    Ouvrir le gestionnaire d'invitations complet ↗
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ========================================================= */}
          {/* ÉTAPE 2 : 3 OBJECTIFS SCOLAIRES                           */}
          {/* ========================================================= */}
          {currentStep === 2 && (
            <div className="space-y-5 animate-in slide-in-from-right duration-300 text-left">
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-300 shrink-0">
                  <Target className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">
                    Étape 2 sur 4 • Calibrage Académique
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    Choisissez votre Objectif Scolaire
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                    Votre rythme de révision, la densité et les techniques recommandées par Konan s'adaptent directement à votre ambition.
                  </p>
                </div>
              </div>

              {/* 3 Goals Cards */}
              <div className="space-y-2.5">
                {/* 1. 12 / 20 */}
                <div
                  onClick={() => handleGoalPick('target_12')}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                    selectedGoal === 'target_12'
                      ? 'bg-sky-950/40 border-sky-400 shadow-lg shadow-sky-500/20'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                    selectedGoal === 'target_12' ? 'bg-sky-500 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {selectedGoal === 'target_12' ? '✓' : '12'}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-white">Passer l'année avec 12 de moyenne</h4>
                      <span className="text-[10px] font-bold text-sky-400 bg-sky-500/15 px-2 py-0.5 rounded-full border border-sky-500/30">
                        Validation Sereine
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Zéro stress, préservation de votre vie personnelle et focalisation sur les matières à fort coefficient.
                    </p>
                  </div>
                </div>

                {/* 2. 16 / 20 */}
                <div
                  onClick={() => handleGoalPick('target_16')}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                    selectedGoal === 'target_16'
                      ? 'bg-indigo-950/40 border-indigo-400 shadow-lg shadow-indigo-500/20'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                    selectedGoal === 'target_16' ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {selectedGoal === 'target_16' ? '✓' : '16'}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-white">Passer avec 16 de moyenne</h4>
                      <span className="text-[10px] font-bold text-indigo-400 bg-indigo-500/15 px-2 py-0.5 rounded-full border border-indigo-500/30">
                        Mention Très Bien
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Active Recall, méthode de Feynman approfondie et entraînement ciblé sur devoirs surveillés.
                    </p>
                  </div>
                </div>

                {/* 3. Major de Promo */}
                <div
                  onClick={() => handleGoalPick('major_promotion')}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                    selectedGoal === 'major_promotion'
                      ? 'bg-amber-950/40 border-amber-400 shadow-lg shadow-amber-500/25 ring-1 ring-amber-400/40'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                    selectedGoal === 'major_promotion' ? 'bg-amber-400 text-slate-950 shadow-md' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {selectedGoal === 'major_promotion' ? '👑' : '1er'}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                        <span>Devenir Major de Promotion</span>
                        <Crown className="w-3.5 h-3.5 text-amber-400" />
                      </h4>
                      <span className="text-[10px] font-bold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-full border border-amber-500/40">
                        Excellence Suprême
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Assimilation de 100% des syllabus, simulations d'examens anticipées et ton exigeant de Konan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* ÉTAPE 3 : MUSIQUES DE FOCUS & RÉVISION                     */}
          {/* ========================================================= */}
          {currentStep === 3 && (
            <div className="space-y-5 animate-in slide-in-from-right duration-300 text-left">
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-2xl bg-purple-500/20 border border-purple-500/40 text-purple-300 shrink-0">
                  <Headphones className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-purple-400">
                    Étape 3 sur 3 • Ambiance Neuro-Focus
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    Musiques de Révision & Ondes Alpha 40Hz
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                    5 ambiances sonores synthétisées par votre navigateur, 100% hors-ligne et gratuites, pour plonger en état de concentration immédiat.
                  </p>
                </div>
              </div>

              {/* Soundscapes Selector & Live Player */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-purple-500/40 space-y-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Volume2 className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Écouter un extrait en direct :
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleToggleAudio}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-md ${
                      isPlayingAudio
                        ? 'bg-amber-400 text-slate-950 font-bold'
                        : 'bg-indigo-600 hover:bg-indigo-500 text-white'
                    }`}
                  >
                    {isPlayingAudio ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                    <span>{isPlayingAudio ? 'En cours de lecture' : 'Tester le son'}</span>
                  </button>
                </div>

                {/* 5 Sound Chips with dedicated scrollable container for mobile */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="font-semibold uppercase tracking-wider">Ambiances Disponibles (5) :</span>
                    <span className="text-[10px] text-purple-300 font-mono">Défilez pour voir tout</span>
                  </div>
                  <div className="max-h-48 sm:max-h-56 overflow-y-auto pr-1 space-y-1.5 custom-scrollbar">
                    {FOCUS_SOUNDTRACKS.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => handleSelectSoundtrack(t.id)}
                        className={`w-full p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between gap-3 ${
                          selectedTrack === t.id
                            ? 'bg-purple-950/40 border-purple-400 text-white shadow-md shadow-purple-500/20 ring-1 ring-purple-400/40'
                            : 'bg-slate-950/50 border-slate-800 hover:border-slate-700 text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0 flex-1">
                          <span className="text-xl shrink-0">{t.icon}</span>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-bold truncate text-white">{t.name}</p>
                            <p className="text-[10px] text-slate-400 truncate">{t.tagline}</p>
                          </div>
                        </div>
                        {selectedTrack === t.id && (
                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className="text-[10px] font-bold text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded-md border border-purple-500/30">
                              Sélectionné
                            </span>
                            {isPlayingAudio && (
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                            )}
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Volume slider (Up to 200% Max) */}
                <div className="flex items-center gap-3 pt-1 border-t border-slate-800/80">
                  <span className="text-[11px] text-slate-400 font-semibold shrink-0">Volume :</span>
                  <input
                    type="range"
                    min="0"
                    max="2"
                    step="0.05"
                    value={audioVolume}
                    onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                  <span className={`text-[11px] font-mono shrink-0 ${
                    audioVolume > 1.0 ? 'text-amber-300 font-bold' : 'text-purple-300'
                  }`}>
                    {audioVolume > 1.0 ? `⚡ ${Math.round(audioVolume * 100)}% (Boost)` : `${Math.round(audioVolume * 100)}%`}
                  </span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer Navigation Buttons */}
        <div className="p-4 sm:p-6 border-t border-slate-800/80 bg-slate-900/60 flex items-center justify-between gap-3 relative z-10">
          {currentStep > 0 ? (
            <Button
              variant="secondary"
              size="sm"
              leftIcon={<ArrowLeft className="w-4 h-4" />}
              onClick={handlePrevStep}
              className="text-xs font-bold cursor-pointer"
            >
              Précédent
            </Button>
          ) : (
            <div />
          )}

          {currentStep > 0 && currentStep < 3 ? (
            <Button
              variant="glow"
              size="sm"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              onClick={handleNextStep}
              className="text-xs font-bold py-2.5 px-4 cursor-pointer"
            >
              Continuer (Étape {currentStep + 1}/3) →
            </Button>
          ) : currentStep === 3 ? (
            <Button
              variant="glow"
              size="md"
              rightIcon={<Crown className="w-4 h-4 text-amber-300" />}
              onClick={handleFinalFinish}
              className="text-xs sm:text-sm font-black py-3 px-6 shadow-xl shadow-amber-500/20 cursor-pointer !bg-gradient-to-r !from-indigo-600 !via-purple-600 !to-amber-500 hover:scale-105 transition-transform"
            >
              🚀 Accéder à mon Cockpit KONAN PLUS
            </Button>
          ) : null}
        </div>

      </div>
    </div>
  );
};
