/**
 * Mode « Je ne comprends pas » : discussion avec KONE, professeur particulier.
 * KONE cherche où ça bloque, explique, vérifie par une question, réexplique autrement, et une jauge
 * montre où en est la compréhension (je découvre → je maîtrise).
 * La discussion est gardée sur le téléphone seulement (une par élève, effacée après 7 jours).
 * Lisible en mode jour ET en mode nuit.
 */
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { X, Send, RotateCcw, Sparkles, Lock, Volume2, VolumeX, Loader2, Square, Camera, Mic, BatteryCharging, Zap } from 'lucide-react';
import { KonanPlush, type PlushMood } from '../../components/common/KonanPlush';
import {
  clampKoneBattery,
  getKoneMoodInfo,
  KONE_BATTERY_DEFAULT,
  KONE_STRIKE_MESSAGE,
} from '../../lib/gamification/koneBattery';
import { MathRenderer } from '../../components/common/MathRenderer';
import { prepareExercisePhoto, sendTutorMessage, speakTutor, splitForVoice, type TutorContext, type TutorError, type TutorMessage, type TutorPiece } from '../../services/tutorApi';
import { getReviewMap } from '../../lib/curriculum/reviewMemory';
import { STEM_SUBJECTS } from '../../lib/curriculum/types';
import { getStudentCountry } from '../../lib/curriculum/subjectVisibility';
import { isOnline, useOnlineStatus } from '../../lib/useOnlineStatus';

/** KONE réfléchit sur le serveur : sans Internet, il ne peut pas répondre (les cours, eux, restent disponibles). */
const OFFLINE_TEXT = 'Pas d’Internet : KONE a besoin d’une connexion pour te répondre. Ton message n’a pas été envoyé. Tes cours déjà ouverts restent disponibles hors ligne.';

/** Son muet très court : joué pendant un toucher pour que le téléphone accepte ensuite la voix de KONE. */
const SILENT_WAV = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YQAAAAA=';

const LEVELS = ['Je découvre', 'Je commence à comprendre', 'J’ai compris', 'Je maîtrise'];
const KEEP_MS = 7 * 24 * 3600 * 1000;
const MAX_INPUT = 1200;

const ERRORS: Record<TutorError, string> = {
  PAID_PRO_REQUIRED: 'Le mode « Je ne comprends pas » est réservé aux abonnés KONAN Pro.',
  DAILY_LIMIT: 'Tu as utilisé tous tes messages d’aujourd’hui. KONE t’attend demain pour continuer !',
  TUTOR_BUSY: 'KONE a beaucoup d’élèves en ce moment. Réessaie dans quelques minutes.',
  AI_UNAVAILABLE: 'KONE n’a pas pu répondre. Réessaie dans un moment.',
  TUTOR_OFF: 'Le mode « Je ne comprends pas » arrive bientôt.',
  UNAUTHORIZED: 'Connecte-toi à ton compte pour discuter avec KONE.',
  TOKEN_EXPIRED: 'Ta connexion a expiré, réessaie.',
  EMPTY_MESSAGE: 'Écris ton message d’abord.',
  NETWORK: 'La connexion Internet a coupé : KONE n’a pas reçu ton message. Réessaie quand tu es connecté.',
  UNKNOWN: 'Une erreur est survenue. Réessaie.',
  VOICE_DAILY_LIMIT: 'La voix de KONE revient demain.',
  VOICE_UNAVAILABLE: 'KONE n’a pas pu parler cette fois.',
  PLUS_REQUIRED: 'La photo de l’exercice et les questions à l’oral font partie de KONAN Plus.',
  PHOTO_DAILY_LIMIT: 'Tu as envoyé toutes tes photos d’aujourd’hui. Écris l’énoncé à la place, ou reviens demain.',
  BAD_PIECE: 'KONE n’a pas pu ouvrir ce fichier. Reprends une photo, ou réenregistre ta question.',
  PIECE_TOO_LARGE: 'C’est trop lourd à envoyer. Reprends la photo, ou parle moins d’une minute.',
  KONE_ON_STRIKE: KONE_STRIKE_MESSAGE,
};

// Question à l'oral (KONAN Plus) : une minute au plus, comme l'explication Feynman
const MAX_REC_SECONDS = 60;
function pickAudioType(): string {
  const candidates = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg;codecs=opus', 'audio/ogg'];
  if (typeof MediaRecorder === 'undefined') return '';
  return candidates.find((t) => MediaRecorder.isTypeSupported?.(t)) || '';
}
function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(String(reader.result || '').split(',')[1] || '');
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
const clock = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

interface Stored { messages: TutorMessage[]; context: TutorContext; updatedAt: number }

const storageKey = (uid: string) => `konan_tutor_chat_${uid}`;
function readStored(uid: string): Stored | null {
  try {
    const raw = localStorage.getItem(storageKey(uid));
    const s = raw ? (JSON.parse(raw) as Stored) : null;
    if (!s || !Array.isArray(s.messages) || Date.now() - Number(s.updatedAt || 0) > KEEP_MS) return null;
    return s;
  } catch {
    return null;
  }
}
function writeStored(uid: string, s: Stored | null) {
  try {
    if (s) localStorage.setItem(storageKey(uid), JSON.stringify({ ...s, messages: s.messages.slice(-60) }));
    else localStorage.removeItem(storageKey(uid));
  } catch { /* stockage plein ou bloqué : la discussion n'est simplement pas gardée */ }
}

const newId = () => `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;

/** Texte de KONE : paragraphes, listes « - », gras ** et formules $…$. */
const RichText: React.FC<{ text: string }> = ({ text }) => {
  const blocks = useMemo(() => text.split(/\n{2,}/).map((b) => b.split('\n')), [text]);
  return (
    <div className="space-y-2">
      {blocks.map((lines, i) => {
        const bullets = lines.every((l) => /^\s*[-•*]\s+/.test(l));
        if (bullets) {
          return (
            <ul key={i} className="list-disc pl-5 space-y-1">
              {lines.map((l, j) => <li key={j}><MathRenderer text={l.replace(/^\s*[-•*]\s+/, '')} /></li>)}
            </ul>
          );
        }
        return (
          <p key={i}>
            {lines.map((l, j) => (
              <React.Fragment key={j}>
                {j > 0 && <br />}
                <MathRenderer text={/^\s*[-•*]\s+/.test(l) ? `• ${l.replace(/^\s*[-•*]\s+/, '')}` : l} />
              </React.Fragment>
            ))}
          </p>
        );
      })}
    </div>
  );
};

const Gauge: React.FC<{ niveau: number; notion?: string }> = ({ niveau, notion }) => (
  <div className="space-y-1">
    <div className="flex items-center justify-between gap-2 text-[11px] font-extrabold">
      <span className="text-slate-600 dark:text-slate-300 truncate">{notion || 'Ma compréhension'}</span>
      <span className={niveau >= 3 ? 'text-emerald-700 dark:text-emerald-300' : 'text-sky-700 dark:text-sky-300'}>{LEVELS[niveau]}</span>
    </div>
    <div className="grid grid-cols-4 gap-1" role="meter" aria-valuemin={0} aria-valuemax={3} aria-valuenow={niveau} aria-label="Niveau de compréhension">
      {LEVELS.map((label, i) => (
        <span
          key={label}
          className={`h-2 rounded-full transition-colors duration-500 ${
            i <= niveau
              ? niveau >= 3 ? 'bg-emerald-500' : 'bg-sky-500'
              : 'bg-slate-200 dark:bg-slate-800'
          }`}
        />
      ))}
    </div>
  </div>
);

export interface TutorChatProps {
  uid: string;
  classe: string;
  /** Prénom de l'élève : KONE l'appelle par son prénom */
  prenom?: string;
  /** Leçon d'où vient l'élève (cours guidé) : la discussion repart sur cette notion. */
  context?: TutorContext;
  paid: boolean;
  remaining: number | null;
  limit: number;
  /** Lectures à voix haute restantes aujourd'hui (null : inconnu) */
  voiceRemaining?: number | null;
  /** KONAN Plus : objectif de l'élève (KONE adapte son ton côté serveur) */
  goalLabel?: string;
  /** KONAN Plus : photo de l'exercice et question à l'oral */
  plus?: boolean;
  photoRemaining?: number | null;
  onPhotoRemainingChange?: (n: number) => void;
  onRemainingChange: (n: number) => void;
  onVoiceRemainingChange?: (n: number) => void;
  /** Batterie de KONÉ (0 à 100, par défaut 100) */
  koneBattery?: number;
  koneBatteryUpdatedAt?: string;
  /** Redirige immédiatement vers les mini-leçons / mini-jeux pour remonter la batterie */
  onCalmKone?: () => void;
  onSubscribe?: () => void;
  onClose: () => void;
}

const VOICE_KEY = 'konan_tutor_voice';

/**
 * Dernières erreurs de l'élève : cours guidés (mémoire de révision du téléphone) et devoirs corrigés
 * (clé « konan_devoir_errors_<uid> », écrite par ExamSujetView). KONE s'en sert pour trouver ce qui bloque.
 */
function recentMistakes(uid: string): TutorContext['erreurs'] {
  type M = { matiere: string; question: string; reponse?: string; at: number };
  const list: M[] = [];
  try {
    for (const e of Object.values(getReviewMap(uid))) {
      if (e.lastResult !== 'ko' || !e.prompt) continue;
      list.push({ matiere: STEM_SUBJECTS[e.subject]?.name || '', question: String(e.prompt).slice(0, 220), reponse: e.wrongAnswer ? String(e.wrongAnswer).slice(0, 120) : undefined, at: Number(e.wrongAt || e.updatedAt || 0) });
    }
  } catch { /* mémoire des cours indisponible */ }
  try {
    const devoirs = JSON.parse(localStorage.getItem(`konan_devoir_errors_${uid}`) || '[]');
    if (Array.isArray(devoirs)) {
      for (const d of devoirs.slice(0, 10)) {
        if (!d?.question) continue;
        list.push({ matiere: `${d.matiere || ''} (devoir)`.trim(), question: String(d.question).slice(0, 220), reponse: d.reponse ? String(d.reponse).slice(0, 120) : undefined, at: Number(d.at || 0) });
      }
    }
  } catch { /* erreurs des devoirs indisponibles */ }
  return list.sort((a, b) => b.at - a.at).slice(0, 5).map(({ matiere, question, reponse }) => ({ matiere, question, reponse }));
}

export const TutorChat: React.FC<TutorChatProps> = ({
  uid, classe, prenom, context, paid, remaining, limit, voiceRemaining = null, goalLabel,
  plus = false, photoRemaining = null, onPhotoRemainingChange, onRemainingChange, onVoiceRemainingChange,
  koneBattery = KONE_BATTERY_DEFAULT, koneBatteryUpdatedAt, onCalmKone, onSubscribe, onClose,
}) => {
  const batteryPct = clampKoneBattery(koneBattery, KONE_BATTERY_DEFAULT);
  const moodInfo = getKoneMoodInfo(batteryPct, prenom);
  const onStrike = paid && batteryPct <= 0;
  const [state, setState] = useState<Stored>(() => {
    const stored = readStored(uid);
    // Venu d'une autre leçon : nouvelle discussion sur cette notion
    if (context?.notion && stored?.context?.notion !== context.notion) return { messages: [], context: { ...context, classe }, updatedAt: Date.now() };
    return stored || { messages: [], context: { ...(context || {}), classe }, updatedAt: Date.now() };
  });
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const online = useOnlineStatus();
  // Connexion revenue : l'avertissement « pas d'Internet » disparaît tout seul
  useEffect(() => { if (online) setError((e) => (e === OFFLINE_TEXT ? null : e)); }, [online]);
  // Humeur passagère de la peluche après une réponse (saut de joie, hochement, fête)
  const [flash, setFlash] = useState<PlushMood | null>(null);
  const [typing, setTyping] = useState(false);
  const flashTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(flashTimer.current), []);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // ---------- KONAN Plus : photo de l'exercice (prête à partir avec le prochain message) ----------
  const [pendingPhoto, setPendingPhoto] = useState<{ piece: TutorPiece; thumb: string } | null>(null);
  const [photoBusy, setPhotoBusy] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const outOfPhotos = photoRemaining !== null && photoRemaining <= 0;

  // ---------- KONAN Plus : question à l'oral (enregistrée, envoyée à KONE, jamais gardée) ----------
  const [recSeconds, setRecSeconds] = useState<number | null>(null); // null = pas d'enregistrement
  const recorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const recStartRef = useRef(0);
  const recCancelRef = useRef(false);
  const sendRef = useRef<(raw: string, piece?: TutorPiece | null, thumb?: string) => Promise<void>>(async () => {});

  // ---------- Voix de KONE : lit ses réponses à voix haute (réglage gardé sur le téléphone) ----------
  const [voiceOn, setVoiceOn] = useState<boolean>(() => {
    try { return localStorage.getItem(VOICE_KEY) !== 'off'; } catch { return true; }
  });
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [voiceLoadingId, setVoiceLoadingId] = useState<string | null>(null);
  const [voiceNote, setVoiceNote] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // Voix déjà reçue pour un message (ses morceaux, dans l'ordre) : réécouter ne recoûte rien
  const audioCache = useRef(new Map<string, string[]>());
  const voiceRequest = useRef(0);
  // Fin du morceau en cours (appelée aussi quand l'élève coupe la voix, pour ne rien laisser en attente)
  const playDone = useRef<(() => void) | null>(null);

  // Bouche synchronisée avec la voix : volume du son mesuré en direct (0 à 1), transmis à la peluche
  const [talkLevel, setTalkLevel] = useState<number | undefined>(undefined);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceAttached = useRef(false);
  const rafRef = useRef(0);

  /** Prépare le lecteur pendant un toucher de l'élève (sinon iPhone refuse de jouer le son plus tard). */
  const unlockAudio = () => {
    try {
      if (!audioCtxRef.current) {
        const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        if (Ctx) audioCtxRef.current = new Ctx();
      }
      void audioCtxRef.current?.resume();
    } catch { /* mesure du volume indisponible : la bouche bougera au hasard */ }
    if (audioRef.current) return;
    const a = new Audio();
    a.preload = 'auto';
    audioRef.current = a;
    try {
      a.src = SILENT_WAV;
      a.play().then(() => a.pause()).catch(() => { /* rien à débloquer */ });
    } catch { /* lecteur indisponible */ }
  };

  /** Branche la mesure du volume sur le lecteur (une seule fois), seulement si le son peut passer par elle. */
  const startLevelMeter = (a: HTMLAudioElement) => {
    const ctx = audioCtxRef.current;
    if (!ctx || ctx.state !== 'running') return;
    try {
      if (!sourceAttached.current) {
        const analyser = ctx.createAnalyser();
        analyser.fftSize = 512;
        ctx.createMediaElementSource(a).connect(analyser);
        analyser.connect(ctx.destination);
        analyserRef.current = analyser;
        sourceAttached.current = true;
      }
    } catch { return; }
    const analyser = analyserRef.current;
    if (!analyser) return;
    const data = new Uint8Array(analyser.fftSize);
    let smooth = 0;
    let last = 0;
    const tick = (t: number) => {
      analyser.getByteTimeDomainData(data);
      let sum = 0;
      for (let i = 0; i < data.length; i++) { const v = (data[i] - 128) / 128; sum += v * v; }
      const rms = Math.min(1, Math.sqrt(sum / data.length) * 4);
      smooth = smooth * 0.55 + rms * 0.45;
      if (t - last > 80) { last = t; setTalkLevel(smooth); }
      rafRef.current = requestAnimationFrame(tick);
    };
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(tick);
  };
  const stopLevelMeter = () => { cancelAnimationFrame(rafRef.current); setTalkLevel(undefined); };

  const stopVoice = () => {
    voiceRequest.current += 1;
    const a = audioRef.current;
    if (a) { a.pause(); a.onended = null; }
    playDone.current?.();
    playDone.current = null;
    stopLevelMeter();
    setSpeakingId(null);
    setVoiceLoadingId(null);
  };
  useEffect(() => () => stopVoice(), []); // en fermant la discussion, KONE se tait

  type VoicePart = Awaited<ReturnType<typeof speakTutor>>;
  const VOICE_LIMIT_NOTE = 'La voix de KONE revient demain. Tu peux continuer à lire ses messages.';

  /** Demande la voix d'un message : tous ses morceaux EN MÊME TEMPS (le début, court, est prêt le premier). */
  const prepareVoice = (m: TutorMessage): Promise<VoicePart>[] => {
    const cached = audioCache.current.get(m.id);
    if (cached) return cached.map((src) => Promise.resolve({ ok: true as const, src, voiceRemaining: voiceRemaining ?? 0 }));
    return splitForVoice(m.text).map((text, i) => speakTutor(text, i));
  };

  /** Joue un morceau ; se termine à la fin du son (ou si l'élève coupe la voix). */
  const playOne = (id: string, src: string) => new Promise<boolean>((resolve) => {
    const a = audioRef.current || new Audio();
    audioRef.current = a;
    a.src = src;
    playDone.current = () => resolve(false);
    a.onended = () => { playDone.current = null; resolve(true); };
    setSpeakingId(id);
    a.play()
      .then(() => startLevelMeter(a))
      .catch(() => { setVoiceNote('Touche 🔊 sur le message pour écouter KONE.'); resolve(false); });
  });

  /** Joue les morceaux dans l'ordre, chacun dès qu'il est prêt : la voix enchaîne sans trou. */
  const playParts = async (id: string, parts: Promise<VoicePart>[], req: number) => {
    const srcs: string[] = [];
    for (let i = 0; i < parts.length; i++) {
      const r = await parts[i];
      if (req !== voiceRequest.current) return; // l'élève a demandé autre chose entre-temps
      if (i === 0) setVoiceLoadingId(null);
      if (!r.ok) {
        if (i === 0) {
          if (typeof r.voiceRemaining === 'number') onVoiceRemainingChange?.(r.voiceRemaining);
          setVoiceNote(r.error === 'VOICE_DAILY_LIMIT' ? VOICE_LIMIT_NOTE : 'KONE n’a pas pu parler cette fois. Tu peux lire son message.');
        }
        break;
      }
      if (i === 0) onVoiceRemainingChange?.(r.voiceRemaining);
      srcs.push(r.src);
      setVoiceNote(null);
      const finished = await playOne(id, r.src);
      if (!finished || req !== voiceRequest.current) return;
    }
    if (srcs.length === parts.length) audioCache.current.set(id, srcs);
    stopLevelMeter();
    setSpeakingId((cur) => (cur === id ? null : cur));
  };

  /** Bouton « Écouter » d'un message (ou « Arrêter » s'il parle déjà). */
  const speak = (m: TutorMessage) => {
    unlockAudio();
    if (speakingId === m.id || voiceLoadingId === m.id) { stopVoice(); return; }
    stopVoice();
    if (!audioCache.current.has(m.id) && voiceRemaining !== null && voiceRemaining <= 0) { setVoiceNote(VOICE_LIMIT_NOTE); return; }
    const req = voiceRequest.current;
    setVoiceLoadingId(m.id);
    void playParts(m.id, prepareVoice(m), req);
  };

  const toggleVoice = () => {
    unlockAudio();
    const next = !voiceOn;
    setVoiceOn(next);
    if (!next) stopVoice();
    try { localStorage.setItem(VOICE_KEY, next ? 'on' : 'off'); } catch { /* sans effet */ }
  };

  useEffect(() => { writeStored(uid, state.messages.length ? state : null); }, [uid, state]);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' }); }, [state.messages.length, sending]);
  // Échap ferme ; on bloque le défilement de la page derrière
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [onClose]);

  const lastKonan = [...state.messages].reverse().find((m) => m.role === 'konan');
  const niveau = lastKonan?.niveau ?? 0;
  const notion = lastKonan?.notion || state.context.notion;
  const outOfMessages = remaining !== null && remaining <= 0;
  const recording = recSeconds !== null;
  const canWrite = paid && !onStrike && !outOfMessages && !sending && !recording;
  const mood: PlushMood = onStrike ? 'idle' : sending ? 'think' : recording ? 'listen' : flash || (speakingId ? 'talk' : typing && input.trim() ? 'listen' : 'idle');

  /**
   * Envoie un message. KONAN Plus : avec une photo de l'exercice ou une question à l'oral (`piece`), envoyée
   * une seule fois ; KONE renvoie l'énoncé lu (ou ce qu'il a entendu), gardé dans la discussion à la place.
   */
  const send = async (raw: string, piece: TutorPiece | null = null, thumb?: string) => {
    // Grève totale (0 %) : AUCUN appel à l'API IA
    if (onStrike) return;
    const typed = raw.replace(/\s+$/g, '').slice(0, MAX_INPUT).trim();
    if ((!typed && !piece) || !canWrite) return;
    // Hors ligne : on ne fait pas semblant d'envoyer, le message reste dans la zone de saisie
    if (!isOnline()) { setError(OFFLINE_TEXT); return; }
    unlockAudio();
    stopVoice();
    const isAudio = piece?.kind === 'audio';
    const text = typed || (piece?.kind === 'image' ? 'Je ne comprends pas cet exercice (photo jointe).' : '(question à l’oral)');
    const mine: TutorMessage = {
      id: newId(), role: 'eleve', text,
      ...(piece ? { pieceKind: piece.kind } : {}),
      ...(thumb ? { thumb } : {}),
      ...(!typed ? { autoText: true } : {}),
      ...(isAudio ? { pending: true } : {}),
    };
    const messages = [...state.messages, mine];
    setState((s) => ({ ...s, messages, updatedAt: Date.now() }));
    setInput('');
    setPendingPhoto(null);
    setError(null);
    setSending(true);
    // « KONE se souvient » : prénom, pays, batterie d'humeur et dernières erreurs accompagnent chaque message
    const res = await sendTutorMessage(messages, {
      ...state.context,
      classe,
      prenom,
      country: getStudentCountry() || undefined,
      erreurs: recentMistakes(uid),
      koneBattery: batteryPct,
      koneBatteryUpdatedAt,
    }, piece);
    if (typeof res.photoRemaining === 'number') onPhotoRemainingChange?.(res.photoRemaining);
    if (!res.ok) {
      setSending(false);
      setError(ERRORS[res.error] || ERRORS.UNKNOWN);
      if (typeof res.remaining === 'number') onRemainingChange(res.remaining);
      // Le message n'a pas été traité : on le rend à l'élève pour qu'il puisse le renvoyer (photo comprise)
      setState((s) => ({ ...s, messages: s.messages.filter((m) => m.id !== mine.id) }));
      setInput(typed);
      if (piece?.kind === 'image' && thumb && res.error !== 'PHOTO_DAILY_LIMIT') setPendingPhoto({ piece, thumb });
      return;
    }
    onRemainingChange(res.remaining);
    // Ce que KONE a lu sur la photo / entendu : gardé sur le message de l'élève (l'image ne repart jamais)
    if (piece) {
      const heard = String(res.reply.piece || '').trim();
      setState((s) => ({
        ...s,
        messages: s.messages.map((m) => (m.id !== mine.id ? m : {
          ...m,
          pending: false,
          ...(heard ? { pieceText: heard } : {}),
          ...(isAudio && heard ? { text: heard, autoText: false } : {}),
        })),
      }));
    }
    const { texte, niveau: lvl, etape, notion: n, choix } = res.reply;
    const before = niveau;
    const next: PlushMood | null = etape === 'conclusion' || (lvl === 3 && before < 3) ? 'celebrate'
      : (lvl ?? 0) > before ? 'happy'
      : (lvl ?? 0) < before ? 'encourage'
      : null;
    if (next) {
      setFlash(next);
      clearTimeout(flashTimer.current);
      flashTimer.current = setTimeout(() => setFlash(null), next === 'celebrate' ? 2800 : 2000);
    }
    const answer: TutorMessage = { id: newId(), role: 'konan', text: texte, niveau: lvl, etape, notion: n, choix };
    const show = () => {
      setSending(false);
      setState((s) => ({ ...s, messages: [...s.messages, answer], updatedAt: Date.now() }));
    };
    // Voix allumée : le message et la voix arrivent ENSEMBLE (choix du fondateur, 2026-11-23). KONE « réfléchit »
    // encore le temps que le début de sa voix soit prêt (20 s au plus), puis le message s'affiche et il parle.
    if (voiceOn && (voiceRemaining === null || voiceRemaining > 0)) {
      const req = voiceRequest.current;
      const parts = prepareVoice(answer);
      await Promise.race([parts[0], new Promise((r) => setTimeout(r, 20_000))]);
      show();
      if (req === voiceRequest.current && parts.length) void playParts(answer.id, parts, req);
      return;
    }
    show();
  };

  // La fin d'un enregistrement envoie avec la version à jour de `send` (discussion la plus récente)
  useEffect(() => { sendRef.current = send; });

  /** Photo choisie (appareil photo ou galerie) : réduite sur le téléphone, puis prête à partir. */
  const onPhotoPicked = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = ''; // la même photo peut être reprise
    if (!file) return;
    if (!file.type.startsWith('image/')) { setError('Choisis une photo de ton exercice.'); return; }
    setPhotoBusy(true);
    setError(null);
    try {
      setPendingPhoto(await prepareExercisePhoto(file));
      setTimeout(() => inputRef.current?.focus(), 50);
    } catch {
      setError('Cette photo ne peut pas être ouverte. Reprends-la avec l’appareil photo.');
    } finally {
      setPhotoBusy(false);
    }
  };

  const stopStream = () => {
    streamRef.current?.getTracks().forEach((tr) => tr.stop());
    streamRef.current = null;
  };

  /** Question à l'oral : le micro s'ouvre, KONE écoute (1 minute au plus). */
  const startRecording = async () => {
    if (!canWrite) return;
    if (!isOnline()) { setError(OFFLINE_TEXT); return; }
    setError(null);
    unlockAudio();
    stopVoice();
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') {
      setError('Ton téléphone ne permet pas d’enregistrer ici. Écris ta question à la place.');
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const type = pickAudioType();
      const recorder = new MediaRecorder(stream, type ? { mimeType: type } : undefined);
      chunksRef.current = [];
      recCancelRef.current = false;
      recorder.ondataavailable = (ev) => { if (ev.data.size) chunksRef.current.push(ev.data); };
      recorder.onstop = async () => {
        stopStream();
        setRecSeconds(null);
        const chunks = chunksRef.current;
        chunksRef.current = []; // la voix n'est gardée nulle part
        if (recCancelRef.current) return;
        if (Date.now() - recStartRef.current < 1200) { setError('C’était trop court : parle quelques secondes, puis touche « Envoyer ».'); return; }
        const blob = new Blob(chunks, { type: recorder.mimeType || type || 'audio/webm' });
        const data = await blobToBase64(blob);
        await sendRef.current('', { kind: 'audio', mimeType: blob.type || 'audio/webm', data });
      };
      recorderRef.current = recorder;
      recStartRef.current = Date.now();
      recorder.start();
      setRecSeconds(0);
    } catch {
      stopStream();
      setError('Le micro est refusé. Autorise-le dans les réglages du téléphone, ou écris ta question.');
    }
  };
  const stopRecording = (cancel = false) => {
    recCancelRef.current = cancel;
    try { recorderRef.current?.stop(); } catch { /* déjà arrêté */ }
    if (cancel) { stopStream(); setRecSeconds(null); }
  };
  // Chrono de l'enregistrement : le micro se coupe tout seul après une minute (et la question part)
  useEffect(() => {
    if (!recording) return;
    const timer = setInterval(() => {
      const s = Math.floor((Date.now() - recStartRef.current) / 1000);
      setRecSeconds(Math.min(s, MAX_REC_SECONDS));
      if (s >= MAX_REC_SECONDS) stopRecording(false);
    }, 250);
    return () => clearInterval(timer);
  }, [recording]); // eslint-disable-line react-hooks/exhaustive-deps
  // En fermant la discussion : micro coupé, rien n'est envoyé
  useEffect(() => () => {
    recCancelRef.current = true;
    const rec = recorderRef.current;
    try { if (rec && rec.state !== 'inactive') rec.stop(); } catch { /* déjà arrêté */ }
    streamRef.current?.getTracks().forEach((tr) => tr.stop());
  }, []);

  const restart = () => {
    stopVoice();
    setPendingPhoto(null);
    audioCache.current.clear();
    setState({ messages: [], context: { ...(context || {}), classe }, updatedAt: Date.now() });
    setError(null);
    setInput('');
    inputRef.current?.focus();
  };

  const starters = state.context.notion
    ? [`Je ne comprends rien à « ${state.context.notion} »`, 'Je ne comprends pas l’exemple', 'Explique-moi avec des mots simples']
    : ['Je ne comprends pas une leçon de maths', 'Explique-moi une notion de physique', 'Aide-moi à comprendre ma leçon de SVT'];
  const quickReplies = lastKonan && !sending
    ? [...(lastKonan.choix || []), 'Je ne comprends toujours pas', 'J’ai compris, un exercice !']
    : [];

  return (
    <div className="fixed inset-0 z-[95] bg-slate-900/40 dark:bg-black/60 flex sm:items-center sm:justify-center sm:p-4 animate-in fade-in duration-150" role="dialog" aria-modal="true" aria-label="Je ne comprends pas : discussion avec KONE">
      <div className="flex flex-col w-full min-w-0 h-full sm:h-[min(820px,92vh)] sm:max-w-2xl bg-white dark:bg-[#0B1120] sm:rounded-3xl sm:border sm:border-slate-200 dark:sm:border-slate-800 shadow-2xl overflow-hidden">
        {/* En-tête : KONÉ + batterie d'humeur + jauge de compréhension */}
        <div className={`shrink-0 px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-3 border-b border-slate-200 dark:border-slate-800 space-y-2.5 ${
          moodInfo.tier === 'strike'
            ? 'bg-red-950/[0.08] dark:bg-red-950/45'
            : moodInfo.tier === 'angry'
              ? 'bg-red-50 dark:bg-red-950/25'
              : moodInfo.tier === 'annoyed'
                ? 'bg-orange-50 dark:bg-orange-950/20'
                : 'bg-sky-50 dark:bg-slate-900/80'
        }`}>
          <div className="flex items-center gap-3">
            <KonanPlush variant="bust" size={54} mood={mood} battery={batteryPct} talkLevel={talkLevel} />
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-[15px] font-black text-slate-900 dark:text-white leading-tight">KONÉ</p>
                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10.5px] font-extrabold border ${
                  moodInfo.tier === 'strike'
                    ? 'bg-red-900 text-red-50 border-red-700'
                    : moodInfo.tier === 'angry'
                      ? 'bg-red-100 text-red-900 border-red-300 dark:bg-red-500/20 dark:text-red-200 dark:border-red-400/40'
                      : moodInfo.tier === 'annoyed'
                        ? 'bg-orange-100 text-orange-900 border-orange-300 dark:bg-orange-500/20 dark:text-orange-200 dark:border-orange-400/40'
                        : 'bg-sky-100 text-sky-800 border-sky-200 dark:bg-sky-500/15 dark:text-sky-200 dark:border-sky-400/30'
                }`}>
                  {moodInfo.tier === 'strike' ? <Lock className="w-3 h-3" /> : <Zap className="w-3 h-3 fill-current" />}
                  {batteryPct} % · {moodInfo.label}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                {moodInfo.tier === 'strike'
                  ? 'En grève — fais une mini-leçon pour débloquer le chat'
                  : moodInfo.tier === 'angry'
                    ? 'Service minimum — recharge KONÉ avec une mini-leçon (+25 %)'
                    : 'KONÉ t’explique jusqu’à ce que tu comprennes'}
              </p>
              {goalLabel && (
                <p className="mt-1 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10.5px] font-black text-amber-800 bg-amber-100 dark:text-amber-200 dark:bg-amber-400/15" title="KONÉ adapte son ton et son exigence à ton objectif">
                  🎯 Objectif : {goalLabel}
                </p>
              )}
            </div>
            {paid && !onStrike && (
              <button
                type="button"
                onClick={toggleVoice}
                title={voiceOn ? 'KONE lit ses réponses à voix haute (toucher pour couper)' : 'Voix coupée (toucher pour que KONE parle)'}
                aria-label={voiceOn ? 'Couper la voix de KONE' : 'Activer la voix de KONE'}
                aria-pressed={voiceOn}
                className={`w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer ${voiceOn ? 'text-sky-700 dark:text-sky-300 bg-white dark:bg-slate-800' : 'text-slate-500 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800'}`}
              >
                {voiceOn ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
              </button>
            )}
            {state.messages.length > 0 && !onStrike && (
              <button type="button" onClick={restart} title="Nouvelle discussion" aria-label="Nouvelle discussion" className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 cursor-pointer">
                <RotateCcw className="w-[18px] h-[18px]" />
              </button>
            )}
            <button type="button" onClick={onClose} title="Fermer" aria-label="Fermer" className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 cursor-pointer">
              <X className="w-5 h-5" />
            </button>
          </div>
          {paid && !onStrike && state.messages.length > 0 && <Gauge niveau={niveau} notion={notion} />}
        </div>

        {/* Discussion */}
        <div className="flex-1 overflow-y-auto px-3 sm:px-5 py-4 space-y-3 overscroll-contain">
          {/* Accueil : la peluche entière s'adapte à son humeur */}
          {(state.messages.length === 0 || onStrike) && (
            <div className="flex justify-center pt-2 pb-3">
              <KonanPlush variant="body" size={150} mood={mood} battery={batteryPct} talkLevel={talkLevel} enter waves={moodInfo.tier === 'happy'} />
            </div>
          )}

          {!onStrike && (
            <div className="flex items-end gap-2">
              <img
                src={moodInfo.tier === 'happy' ? '/konan-plush/face.webp' : `/konan-plush/moods/${moodInfo.tier}.png`}
                alt=""
                aria-hidden="true"
                className="w-7 h-7 rounded-full shrink-0 object-cover object-top bg-slate-100 dark:bg-slate-800"
              />
              <div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-bl-md bg-slate-100 dark:bg-slate-800/80 text-sm text-slate-800 dark:text-slate-100 leading-relaxed">
                {moodInfo.tier === 'angry' ? (
                  <>Fais court pardon{prenom ? ` ${prenom}` : ''}, je suis très fâché ({batteryPct} % de batterie) parce que tu as raté plusieurs séances… Dis vite ce qui bloque, ou va faire tes mini-leçons pour me recharger.</>
                ) : moodInfo.tier === 'annoyed' ? (
                  <>Bon{prenom ? ` ${prenom}` : ''}, ma batterie a baissé à {batteryPct} % avec tes séances ratées… Dis-moi quand même ce que tu ne comprends pas{state.context.notion ? <> sur <strong>« {state.context.notion} »</strong></> : ''}, je vais t’expliquer (mais pense à me recharger après !).</>
                ) : state.context.notion ? (
                  <>{prenom ? `${prenom}, tu` : 'Tu'} bloques sur <strong>« {state.context.notion} »</strong> ? Pas de souci, on va y arriver ensemble. Dis-moi ce que tu ne comprends pas : un mot, une étape, l’exemple…</>
                ) : (
                  <>Salut{prenom ? ` ${prenom}` : ''} ! Moi, c’est <strong>KONÉ</strong>, le meilleur ami de KONAN. Dis-moi la matière et ce qui te bloque, par exemple : <em>« Je ne comprends pas les vecteurs »</em>. Je t’explique, puis je te pose une petite question pour vérifier.</>
                )}
                {plus && moodInfo.tier !== 'angry' && <> Tu peux aussi <strong>prendre en photo ton exercice</strong> 📷 ou <strong>me parler</strong> 🎤.</>}
              </div>
            </div>
          )}

          {state.messages.map((m) => (
            m.role === 'eleve' ? (
              <div key={m.id} className="flex justify-end">
                <div className="max-w-[85%] px-4 py-2.5 rounded-2xl rounded-br-md bg-sky-600 text-white text-sm leading-relaxed whitespace-pre-wrap break-words space-y-1.5">
                  {/* KONAN Plus : photo de l'exercice (miniature gardée sur le téléphone) */}
                  {m.thumb && <img src={m.thumb} alt="Photo de l’exercice" className="block rounded-xl max-h-52 w-auto bg-white/10" />}
                  {m.pieceKind === 'image' && !m.thumb && <span className="inline-flex items-center gap-1.5 font-bold"><Camera className="w-4 h-4" /> Photo de l’exercice</span>}
                  {m.pieceKind === 'audio' && (
                    <span className="flex items-center gap-1.5 text-[11.5px] font-black uppercase tracking-wide text-sky-100">
                      {m.pending ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Mic className="w-3.5 h-3.5" />}
                      {m.pending ? 'KONE écoute ta question…' : 'Question à l’oral'}
                    </span>
                  )}
                  {!m.autoText && <div>{m.text}</div>}
                  {m.pieceKind === 'audio' && m.autoText && !m.pending && <div className="italic opacity-90">Message vocal</div>}
                </div>
              </div>
            ) : (
              <div key={m.id} className="flex items-end gap-2">
                <img
                src={moodInfo.tier === 'happy' ? '/konan-plush/face.webp' : `/konan-plush/moods/${moodInfo.tier}.png`}
                alt=""
                aria-hidden="true"
                className="w-7 h-7 rounded-full shrink-0 object-cover object-top bg-slate-100 dark:bg-slate-800"
              />
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl rounded-bl-md text-sm leading-relaxed break-words text-slate-800 dark:text-slate-100 ${
                  m.etape === 'conclusion' ? 'bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30' : 'bg-slate-100 dark:bg-slate-800/80'
                } ${speakingId === m.id ? 'ring-2 ring-sky-400/70' : ''}`}>
                  <RichText text={m.text} />
                  {paid && (
                    <button
                      type="button"
                      onClick={() => void speak(m)}
                      aria-label={speakingId === m.id ? 'Arrêter la voix de KONE' : 'Écouter KONE'}
                      className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-bold text-sky-800 dark:text-sky-200 bg-white/80 dark:bg-slate-900/60 border border-sky-200 dark:border-sky-400/30 hover:bg-sky-50 dark:hover:bg-sky-400/10 cursor-pointer"
                    >
                      {voiceLoadingId === m.id
                        ? <><Loader2 className="w-3.5 h-3.5 animate-spin" /> KONE prépare sa voix…</>
                        : speakingId === m.id
                          ? <><Square className="w-3 h-3 fill-current" /> Arrêter</>
                          : <><Volume2 className="w-3.5 h-3.5" /> Écouter</>}
                    </button>
                  )}
                </div>
              </div>
            )
          ))}

          {sending && (
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 font-semibold" aria-live="polite">
              <span className="flex gap-1" aria-hidden="true">
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-bounce [animation-delay:120ms]" />
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-bounce [animation-delay:240ms]" />
              </span>
              KONE réfléchit…
            </div>
          )}

          {onStrike && (
            <div className="p-4 sm:p-5 rounded-2xl bg-red-50 dark:bg-red-950/60 border-2 border-red-800/50 dark:border-red-700/70 space-y-3.5 shadow-sm">
              <div className="flex items-start gap-2.5">
                <span className="w-8 h-8 rounded-full bg-red-900 text-amber-200 flex items-center justify-center shrink-0 mt-0.5">
                  <Lock className="w-4 h-4" />
                </span>
                <p className="text-sm sm:text-[15px] font-bold text-red-950 dark:text-red-100 leading-relaxed">
                  {KONE_STRIKE_MESSAGE}
                </p>
              </div>
              {onCalmKone && (
                <button
                  type="button"
                  onClick={onCalmKone}
                  className="w-full min-h-[48px] px-4 py-3 rounded-2xl bg-gradient-to-r from-red-800 to-rose-700 hover:from-red-700 hover:to-rose-600 text-white font-black text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all active:scale-[0.99]"
                >
                  <BatteryCharging className="w-5 h-5" />
                  <span>Calmer KONÉ (Faire une mini-leçon)</span>
                </button>
              )}
            </div>
          )}

          {!online && error !== OFFLINE_TEXT && !onStrike && (
            <p className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm font-semibold" role="status">
              Tu es hors ligne : KONE a besoin d’Internet pour te répondre. Tes cours déjà ouverts restent disponibles.
            </p>
          )}
          {error && <p className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-700/50 text-amber-900 dark:text-amber-200 text-sm font-semibold" role="alert">{error}</p>}
          {voiceNote && <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 text-center" aria-live="polite">{voiceNote}</p>}
          <div ref={endRef} />
        </div>

        {/* Bas : réservé Pro, ou réponses rapides + zone d'écriture */}
        <div className="shrink-0 border-t border-slate-200 dark:border-slate-800 px-3 sm:px-5 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] space-y-2.5 bg-white dark:bg-[#0B1120]">
          {!paid ? (
            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-500/10 border border-amber-300 dark:border-[#F5C451]/40 space-y-2.5">
              <p className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <Lock className="w-4 h-4 text-amber-700 dark:text-[#F5C451]" /> Réservé aux abonnés KONAN Pro
              </p>
              <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed">
                Un professeur particulier dans ta poche, pour toutes tes matières : il t’explique, te fait faire des exercices et vérifie que tu as compris.
              </p>
              {onSubscribe && (
                <button type="button" onClick={onSubscribe} className="konan-btn-gold w-full h-[46px] text-sm cursor-pointer">
                  <Sparkles className="w-4 h-4" /> M’abonner à KONAN Pro
                </button>
              )}
            </div>
          ) : onStrike ? (
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl border-2 border-red-800/40 dark:border-red-800/60 bg-red-100/50 dark:bg-red-950/40 text-red-900 dark:text-red-200 opacity-85 cursor-not-allowed select-none">
                <Lock className="w-4 h-4 shrink-0" />
                <span className="text-sm font-bold truncate">Chat verrouillé — KONÉ est en grève (0 %)</span>
              </div>
            </div>
          ) : (
            <>
              {state.messages.length === 0 && !sending && !pendingPhoto && !recording && (
                <div className="flex flex-wrap gap-2">
                  {starters.map((s) => (
                    <button key={s} type="button" onClick={() => send(s)} disabled={!canWrite} className="px-3 py-2 rounded-full border-2 border-sky-200 dark:border-sky-400/40 text-sky-800 dark:text-sky-200 text-xs font-bold hover:bg-sky-50 dark:hover:bg-sky-400/10 disabled:opacity-50 cursor-pointer text-left">
                      {s}
                    </button>
                  ))}
                </div>
              )}
              {quickReplies.length > 0 && canWrite && !pendingPhoto && (
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((q, i) => (
                    <button
                      key={`${q}-${i}`}
                      type="button"
                      onClick={() => send(q === 'J’ai compris, un exercice !' ? 'J’ai compris ! Donne-moi un exercice pour vérifier.' : q)}
                      className={`px-3 py-2 rounded-full text-xs font-bold border-2 cursor-pointer ${
                        q === 'Je ne comprends toujours pas'
                          ? 'border-amber-300 dark:border-amber-500/50 text-amber-800 dark:text-amber-200 hover:bg-amber-50 dark:hover:bg-amber-500/10'
                          : q.startsWith('J’ai compris')
                            ? 'border-emerald-300 dark:border-emerald-500/50 text-emerald-800 dark:text-emerald-200 hover:bg-emerald-50 dark:hover:bg-emerald-500/10'
                            : 'border-sky-200 dark:border-sky-400/40 text-sky-800 dark:text-sky-200 hover:bg-sky-50 dark:hover:bg-sky-400/10'
                      }`}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
              {/* KONAN Plus : photo prête à partir avec le message */}
              {pendingPhoto && (
                <div className="flex items-center gap-3 p-2 pr-3 rounded-2xl bg-sky-50 dark:bg-sky-400/10 border border-sky-200 dark:border-sky-400/30">
                  <img src={pendingPhoto.thumb} alt="Photo de l’exercice" className="w-14 h-14 rounded-xl object-cover shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] font-black text-slate-900 dark:text-white">Photo de l’exercice prête</p>
                    <p className="text-[11.5px] text-slate-600 dark:text-slate-300">Dis à KONE ce qui te bloque (facultatif), puis envoie.</p>
                  </div>
                  <button type="button" onClick={() => setPendingPhoto(null)} aria-label="Retirer la photo" className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-white dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800 cursor-pointer">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* KONAN Plus : enregistrement de la question à l'oral */}
              {recording ? (
                <div className="flex items-center gap-2" role="status" aria-live="polite">
                  <button type="button" onClick={() => stopRecording(true)} aria-label="Annuler l’enregistrement" className="w-[46px] h-[46px] shrink-0 rounded-2xl border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-center cursor-pointer">
                    <X className="w-5 h-5" />
                  </button>
                  <div className="relative overflow-hidden flex-1 min-w-0 h-[46px] px-3.5 rounded-2xl bg-rose-50 dark:bg-rose-500/10 border-2 border-rose-200 dark:border-rose-500/30 flex items-center gap-2.5">
                    <span className="relative flex w-3 h-3 shrink-0">
                      <span className="absolute inset-0 rounded-full bg-rose-500 animate-ping opacity-60" />
                      <span className="relative w-3 h-3 rounded-full bg-rose-500" />
                    </span>
                    <span className="min-w-0 text-sm font-bold text-rose-900 dark:text-rose-100 truncate">KONE écoute…</span>
                    <span className="ml-auto shrink-0 whitespace-nowrap text-sm font-black tabular-nums text-rose-800 dark:text-rose-200">{clock(recSeconds ?? 0)}</span>
                    {/* Temps utilisé sur la minute permise */}
                    <span className="absolute left-0 bottom-0 h-[3px] bg-rose-400/80 transition-[width] duration-300" style={{ width: `${((recSeconds ?? 0) / MAX_REC_SECONDS) * 100}%` }} aria-hidden="true" />
                  </div>
                  <button type="button" onClick={() => stopRecording(false)} aria-label="Envoyer ta question à l’oral" className="h-[46px] px-3.5 shrink-0 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-black text-sm flex items-center gap-1.5 cursor-pointer">
                    <Send className="w-4 h-4" /> Envoyer
                  </button>
                </div>
              ) : (
              <form
                className="flex items-end gap-2"
                onSubmit={(e) => { e.preventDefault(); void send(input, pendingPhoto?.piece || null, pendingPhoto?.thumb); }}
              >
                {plus && (
                  <>
                    <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={onPhotoPicked} />
                    <button
                      type="button"
                      onClick={() => fileRef.current?.click()}
                      disabled={!canWrite || photoBusy || outOfPhotos}
                      aria-label="Prendre en photo ton exercice"
                      title={outOfPhotos ? 'Photos du jour utilisées' : 'Prends en photo ton exercice'}
                      className="w-[46px] h-[46px] shrink-0 rounded-2xl border-2 border-slate-200 dark:border-slate-700 text-sky-700 dark:text-sky-300 hover:bg-sky-50 dark:hover:bg-sky-400/10 disabled:opacity-40 flex items-center justify-center cursor-pointer"
                    >
                      {photoBusy ? <Loader2 className="w-5 h-5 animate-spin" /> : <Camera className="w-5 h-5" />}
                    </button>
                  </>
                )}
                <label htmlFor="tutor-input" className="sr-only">Ton message à KONE</label>
                <textarea
                  id="tutor-input"
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value.slice(0, MAX_INPUT))}
                  onFocus={() => setTyping(true)}
                  onBlur={() => setTyping(false)}
                  onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey && !('ontouchstart' in window)) { e.preventDefault(); void send(input, pendingPhoto?.piece || null, pendingPhoto?.thumb); } }}
                  rows={1}
                  disabled={!canWrite}
                  placeholder={outOfMessages ? 'Plus de messages aujourd’hui' : pendingPhoto ? 'Ta question (facultatif)' : plus ? 'Écris, photo ou micro…' : 'Écris ce que tu ne comprends pas…'}
                  className="flex-1 min-w-0 min-h-[46px] max-h-32 resize-none px-4 py-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-sm placeholder:text-slate-500 dark:placeholder:text-slate-500 focus:outline-none focus:border-sky-400 disabled:opacity-60"
                />
                {/* KONAN Plus : rien d'écrit et pas de photo → le bouton devient le micro (comme une messagerie) */}
                {plus && !input.trim() && !pendingPhoto ? (
                  <button type="button" onClick={() => void startRecording()} disabled={!canWrite} aria-label="Poser ta question à l’oral" title="Pose ta question à l’oral" className="w-[46px] h-[46px] shrink-0 rounded-2xl bg-sky-600 hover:bg-sky-500 disabled:opacity-40 text-white flex items-center justify-center cursor-pointer">
                    <Mic className="w-5 h-5" />
                  </button>
                ) : (
                  <button type="submit" disabled={!canWrite || (!input.trim() && !pendingPhoto)} aria-label="Envoyer" className="w-[46px] h-[46px] shrink-0 rounded-2xl bg-sky-600 hover:bg-sky-500 disabled:opacity-40 text-white flex items-center justify-center cursor-pointer">
                    <Send className="w-5 h-5" />
                  </button>
                )}
              </form>
              )}
              {remaining !== null && (
                <p className="text-[11px] text-center text-slate-500 dark:text-slate-400">
                  {outOfMessages ? 'Messages du jour utilisés · ça revient demain' : `${remaining}/${limit} messages aujourd’hui`}
                  {plus && photoRemaining !== null && ` · ${photoRemaining} photo${photoRemaining > 1 ? 's' : ''}`} · KONE explique, il ne fait pas tes devoirs
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
