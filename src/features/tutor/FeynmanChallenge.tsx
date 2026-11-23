/**
 * Méthode Feynman : « Explique-le simplement ».
 * L'élève explique la notion qu'il vient d'apprendre, À L'ORAL (60 secondes au plus, micro coupé
 * automatiquement) ou par écrit. Gemini écoute et dit si c'est juste, clair et simple.
 * 3 explications orales par jour et par élève (10 écrites) : la limite est tenue par le serveur.
 */
import React, { useEffect, useRef, useState } from 'react';
import { Mic, Square, Send, PenLine, RotateCcw, ArrowRight, Check, X, Volume2, Loader2, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { auth } from '../../lib/firebase';
import { getStudentCountry } from '../../lib/curriculum/subjectVisibility';
import { KonanPlush, type PlushMood } from '../../components/common/KonanPlush';
import { MathRenderer } from '../../components/common/MathRenderer';
import { speakTutor, type TutorContext } from '../../services/tutorApi';

const MAX_SECONDS = 60;
const MIN_SECONDS = 3;

interface Verdict {
  transcription: string; juste: boolean; clair: boolean; simple: boolean; recite: boolean; note: number; conseil: string;
  /** Idées clés du cours oubliées ou fausses (depuis le 2026-11-23). */
  manquants?: string[];
  /** Explication modèle, très simple, à comparer avec la sienne. */
  modele?: string;
}

interface Props {
  notion: string;
  reference: string;
  classe: string;
  /** Matière (pour KONE en discussion). */
  matiere?: string;
  onDone: () => void;
  /** KONAN Pro : « Je ne comprends pas » (discussion) et voix de KONE. Absent = fonctions cachées. */
  onNotUnderstood?: (context: TutorContext) => void;
}

type Mode = 'start' | 'recording' | 'sending' | 'result' | 'write';

function pickMimeType(): string {
  const candidates = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg;codecs=opus', 'audio/ogg'];
  if (typeof MediaRecorder === 'undefined') return '';
  return candidates.find((t) => MediaRecorder.isTypeSupported?.(t)) || '';
}

const ERRORS: Record<string, string> = {
  DAILY_LIMIT: 'Tu as utilisé tes explications orales d’aujourd’hui. Tu peux écrire ton explication à la place.',
  AI_UNAVAILABLE: 'KONE n’a pas pu écouter ton explication pour l’instant. Réessaie dans un moment, ou écris-la.',
  UNAUTHORIZED: 'Connecte-toi à ton compte pour utiliser l’explication orale.',
  TOKEN_EXPIRED: 'Ta connexion a expiré, réessaie.',
  AUDIO_TOO_LONG: 'L’enregistrement est trop long. Essaie en moins d’une minute.',
  PRO_REQUIRED: 'Expliquer à KONE fait partie de KONAN Pro.',
  TOO_SHORT:'Ton explication est trop courte : écris au moins une phrase.',
};

async function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(String(reader.result || '').split(',')[1] || '');
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

export const FeynmanChallenge: React.FC<Props> = ({ notion, reference, classe, matiere, onDone, onNotUnderstood }) => {
  const [mode, setMode] = useState<Mode>('start');
  // Réaction de la peluche au résultat (pouce levé ou encouragement), puis repos
  const [reaction, setReaction] = useState<PlushMood | null>(null);
  const [showModele, setShowModele] = useState(false);
  // Voix de KONE (Pro) : lit son conseil et l'explication modèle
  const [voice, setVoice] = useState<'idle' | 'loading' | 'playing'>('idle');
  const [voiceNote, setVoiceNote] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => () => { audioRef.current?.pause(); }, []);
  const [secondsLeft, setSecondsLeft] = useState(MAX_SECONDS);
  const [verdict, setVerdict] = useState<Verdict | null>(null);
  const [remaining, setRemaining] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [text, setText] = useState('');
  const recorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const startedAtRef = useRef(0);

  const stopStream = () => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
  };
  useEffect(() => () => {
    // En quittant : micro coupé, aucun morceau d'enregistrement envoyé ni gardé
    const rec = recorderRef.current;
    if (rec) rec.onstop = null;
    try { rec?.stop(); } catch { /* déjà arrêté */ }
    chunksRef.current = [];
    stopStream();
  }, []);

  // Compte à rebours : le micro se coupe tout seul à la fin du temps
  useEffect(() => {
    if (mode !== 'recording') return;
    const timer = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) { try { recorderRef.current?.stop(); } catch { /* déjà arrêté */ } return 0; }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [mode]);

  const submit = async (payload: Record<string, unknown>) => {
    setMode('sending');
    setError(null);
    try {
      const user = auth?.currentUser;
      if (!user) { setError(ERRORS.UNAUTHORIZED); setMode('start'); return; }
      const token = await user.getIdToken();
      const res = await fetch('/api/feynman', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ notion, reference, classe, country: getStudentCountry(), ...payload }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json?.success) {
        setError(ERRORS[json?.error] || 'Une erreur est survenue. Réessaie.');
        if (typeof json?.remaining === 'number') setRemaining(json.remaining);
        setMode(json?.error === 'DAILY_LIMIT' ? 'write' : 'start');
        return;
      }
      setVerdict(json.verdict);
      setRemaining(typeof json.remaining === 'number' ? json.remaining : null);
      setMode('result');
      setShowModele(false);
      setReaction(json.verdict.note >= 7 ? 'happy' : 'encourage');
      setTimeout(() => setReaction(null), 3500);
    } catch {
      setError('Pas de connexion Internet. Réessaie quand tu es connecté.');
      setMode('start');
    }
  };

  const startRecording = async () => {
    setError(null);
    const mimeType = pickMimeType();
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') {
      setError('Ton téléphone ne permet pas d’enregistrer ici. Écris ton explication à la place.');
      setMode('write');
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
      chunksRef.current = [];
      recorder.ondataavailable = (e) => { if (e.data.size) chunksRef.current.push(e.data); };
      recorder.onstop = async () => {
        stopStream();
        const duration = (Date.now() - startedAtRef.current) / 1000;
        if (duration < MIN_SECONDS) { setError('C’était trop court : explique pendant quelques secondes au moins.'); setMode('start'); return; }
        const blob = new Blob(chunksRef.current, { type: recorder.mimeType || mimeType || 'audio/webm' });
        // La voix n'est gardée NULLE PART : on efface l'enregistrement de la mémoire du téléphone dès qu'il est lu
        chunksRef.current = [];
        const payload = { audio: await blobToBase64(blob), mimeType: blob.type };
        await submit(payload);
        payload.audio = '';
      };
      recorderRef.current = recorder;
      startedAtRef.current = Date.now();
      setSecondsLeft(MAX_SECONDS);
      recorder.start();
      setMode('recording');
    } catch {
      setError('Le micro est refusé. Autorise-le dans les réglages, ou écris ton explication.');
      setMode('write');
    }
  };

  // La peluche : écoute (main à l'oreille) pendant l'enregistrement, réfléchit pendant l'analyse, réagit au résultat
  const plushMood: PlushMood = mode === 'recording' ? 'listen' : mode === 'sending' ? 'think' : voice === 'playing' ? 'talk' : reaction || 'idle';

  const speak = async () => {
    if (!verdict) return;
    if (voice === 'playing') { audioRef.current?.pause(); setVoice('idle'); return; }
    if (voice === 'loading') return;
    // Lecteur préparé pendant le toucher (sinon certains téléphones refusent de jouer le son plus tard)
    const a = audioRef.current || new Audio();
    audioRef.current = a;
    setVoice('loading');
    setVoiceNote(null);
    const r = await speakTutor([verdict.conseil, verdict.modele ? `Par exemple : ${verdict.modele}` : ''].filter(Boolean).join(' '));
    if (!r.ok) {
      setVoice('idle');
      setVoiceNote(r.error === 'VOICE_DAILY_LIMIT' ? 'La voix de KONE revient demain.' : 'KONE n’a pas pu parler cette fois. Tu peux lire son conseil.');
      return;
    }
    a.src = r.src;
    a.onended = () => setVoice('idle');
    setVoice('playing');
    a.play().catch(() => { setVoice('idle'); setVoiceNote('Touche encore « Écouter KONE ».'); });
  };

  return (
    <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-600/60 space-y-4 shadow-sm animate-in fade-in duration-200">
      <div className="space-y-1">
        <span className="text-[11px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-300">Méthode Feynman · Explique-le simplement</span>
        <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-snug">{notion}</h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Explique cette notion avec tes mots, comme à un élève de 6ème. Si tu sais l’expliquer simplement, c’est que tu as compris.
        </p>
      </div>

      {error && <p className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 text-sm font-semibold">{error}</p>}

      {mode === 'start' && (
        <div className="grid gap-2">
          <button type="button" onClick={startRecording} className="w-full py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-white font-black uppercase flex items-center justify-center gap-2 shadow-[0_5px_0_#B45309] active:translate-y-1 cursor-pointer">
            <Mic className="w-5 h-5" /> Expliquer à l’oral (1 minute)
          </button>
          <button type="button" onClick={() => setMode('write')} className="w-full py-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold flex items-center justify-center gap-2 cursor-pointer">
            <PenLine className="w-4 h-4" /> J’écris plutôt
          </button>
          <button type="button" onClick={onDone} className="text-sm text-slate-500 dark:text-slate-400 font-semibold py-1 cursor-pointer">Passer cette fois</button>
        </div>
      )}

      {(mode === 'recording' || mode === 'start') && (
        <div className="flex justify-center"><KonanPlush variant="body" size={mode === 'recording' ? 120 : 96} mood={plushMood} preload="all" /></div>
      )}

      {mode === 'recording' && (
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 font-black">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" /> J’écoute… {secondsLeft} s
          </div>
          <button type="button" onClick={() => recorderRef.current?.stop()} className="w-full py-4 rounded-2xl bg-slate-900 dark:bg-slate-700 text-white font-black uppercase flex items-center justify-center gap-2 cursor-pointer">
            <Square className="w-4 h-4" /> J’ai fini, envoyer
          </button>
        </div>
      )}

      {mode === 'sending' && (
        <div className="flex flex-col items-center gap-2 justify-center py-2">
          <KonanPlush variant="body" size={120} mood="think" />
          <p className="text-sm font-bold text-slate-700 dark:text-slate-200">KONE réfléchit à ton explication…</p>
        </div>
      )}

      {mode === 'write' && (
        <div className="space-y-2">
          <textarea
            id="feynman-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={4}
            maxLength={1500}
            placeholder="Explique avec tes mots…"
            className="w-full p-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-sm"
          />
          <button type="button" disabled={text.trim().length < 15} onClick={() => submit({ text })} className="w-full py-3.5 rounded-2xl bg-amber-500 disabled:opacity-50 text-white font-black uppercase flex items-center justify-center gap-2 cursor-pointer">
            <Send className="w-4 h-4" /> Envoyer mon explication
          </button>
          <button type="button" onClick={onDone} className="w-full text-sm text-slate-500 dark:text-slate-400 font-semibold py-1 cursor-pointer">Passer cette fois</button>
        </div>
      )}

      {mode === 'result' && verdict && (
        <div className="space-y-3">
          {verdict.transcription && (
            <blockquote className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-sm italic text-slate-700 dark:text-slate-300">
              « {verdict.transcription} »
            </blockquote>
          )}
          <div className="flex flex-wrap gap-2">
            {([['Juste', verdict.juste], ['Clair', verdict.clair], ['Simple', verdict.simple]] as const).map(([label, ok]) => (
              <span key={label} className={`px-3 py-1 rounded-full text-xs font-black flex items-center gap-1 ${ok ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-300' : 'bg-rose-100 text-rose-800 dark:bg-rose-500/20 dark:text-rose-300'}`}>
                {ok ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />} {label}
              </span>
            ))}
            <span className="px-3 py-1 rounded-full text-xs font-black bg-sky-100 text-sky-900 dark:bg-sky-400/20 dark:text-sky-300">{verdict.note}/10</span>
          </div>
          <div className="flex items-end gap-2">
            <KonanPlush variant="body" size={90} mood={plushMood} />
            <div className="flex-1 min-w-0 p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 space-y-2">
              <p className="text-sm font-bold text-amber-900 dark:text-amber-100">{verdict.conseil}</p>
              {onNotUnderstood && (
                <button
                  type="button"
                  onClick={speak}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-bold text-amber-900 dark:text-amber-100 bg-white/80 dark:bg-slate-900/60 border border-amber-300 dark:border-amber-500/40 cursor-pointer"
                >
                  {voice === 'loading' ? <><Loader2 className="w-3.5 h-3.5 animate-spin" /> KONE prépare sa voix…</>
                    : voice === 'playing' ? <><Square className="w-3 h-3 fill-current" /> Arrêter</>
                    : <><Volume2 className="w-3.5 h-3.5" /> Écouter KONE</>}
                </button>
              )}
              {voiceNote && <p className="text-[11px] text-amber-800 dark:text-amber-200">{voiceNote}</p>}
            </div>
          </div>

          {/* Ce qui manquait dans son explication (idées clés du cours) */}
          {(verdict.manquants?.length || 0) > 0 && (
            <div className="p-3 rounded-2xl bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/30 space-y-1.5">
              <p className="text-[11px] font-black uppercase tracking-wider text-rose-800 dark:text-rose-200">Il manquait</p>
              <ul className="space-y-1">
                {verdict.manquants!.map((m, i) => (
                  <li key={i} className="flex gap-2 text-sm text-rose-900 dark:text-rose-100"><X className="w-4 h-4 shrink-0 mt-0.5" />{m}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Explication modèle, à comparer avec la sienne (cachée d'abord : l'élève réessaie seul s'il veut) */}
          {verdict.modele && (
            <div className="rounded-2xl border border-sky-200 dark:border-sky-500/30 overflow-hidden">
              <button type="button" onClick={() => setShowModele((v) => !v)} className="w-full flex items-center justify-between gap-2 px-3 py-2.5 bg-sky-50 dark:bg-sky-500/10 text-sm font-extrabold text-sky-900 dark:text-sky-100 cursor-pointer">
                Voir comment KONE l’expliquerait
                {showModele ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {showModele && (
                <div className="px-3 py-2.5 text-sm text-slate-800 dark:text-slate-100 leading-relaxed"><MathRenderer text={verdict.modele} /></div>
              )}
            </div>
          )}

          {onNotUnderstood && (
            <button
              type="button"
              onClick={() => onNotUnderstood({
                matiere,
                notion,
                reference: [
                  reference ? `Ce que dit le cours : ${reference}` : '',
                  verdict.transcription ? `Explication donnée par l'élève : ${verdict.transcription}` : '',
                  verdict.manquants?.length ? `Idées manquantes : ${verdict.manquants.join(' ; ')}` : '',
                ].filter(Boolean).join('\n').slice(0, 1800),
              })}
              className="w-full py-2.5 rounded-2xl border-2 border-sky-200 dark:border-sky-400/40 text-sky-800 dark:text-sky-200 text-sm font-extrabold flex items-center justify-center gap-2 hover:bg-sky-50 dark:hover:bg-sky-400/10 cursor-pointer"
            >
              <HelpCircle className="w-4 h-4" /> Je ne comprends pas cette notion
            </button>
          )}
          <div className="grid gap-2">
            {remaining !== null && remaining > 0 && (
              <button type="button" onClick={() => { setVerdict(null); setMode('start'); }} className="w-full py-3 rounded-2xl border-2 border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-200 font-bold flex items-center justify-center gap-2 cursor-pointer">
                <RotateCcw className="w-4 h-4" /> Réessayer ({remaining} restante{remaining > 1 ? 's' : ''} aujourd’hui)
              </button>
            )}
            <button type="button" onClick={onDone} className="w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-black uppercase flex items-center justify-center gap-2 shadow-[0_5px_0_#065f46] active:translate-y-1 cursor-pointer">
              Continuer <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
