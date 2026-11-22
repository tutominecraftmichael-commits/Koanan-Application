/**
 * Mode « Je ne comprends pas » : discussion avec KONAN, professeur particulier.
 * KONAN cherche où ça bloque, explique, vérifie par une question, réexplique autrement, et une jauge
 * montre où en est la compréhension (je découvre → je maîtrise).
 * La discussion est gardée sur le téléphone seulement (une par élève, effacée après 7 jours).
 * Lisible en mode jour ET en mode nuit.
 */
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { X, Send, RotateCcw, Sparkles, Lock } from 'lucide-react';
import { KonanPlush, type PlushMood } from '../../components/common/KonanPlush';
import { MathRenderer } from '../../components/common/MathRenderer';
import { sendTutorMessage, type TutorContext, type TutorError, type TutorMessage } from '../../services/tutorApi';

const LEVELS = ['Je découvre', 'Je commence à comprendre', 'J’ai compris', 'Je maîtrise'];
const KEEP_MS = 7 * 24 * 3600 * 1000;
const MAX_INPUT = 1200;

const ERRORS: Record<TutorError, string> = {
  PAID_PRO_REQUIRED: 'Le mode « Je ne comprends pas » est réservé aux abonnés KONAN Pro.',
  DAILY_LIMIT: 'Tu as utilisé tous tes messages d’aujourd’hui. KONAN t’attend demain pour continuer !',
  TUTOR_BUSY: 'KONAN a beaucoup d’élèves en ce moment. Réessaie dans quelques minutes.',
  AI_UNAVAILABLE: 'KONAN n’a pas pu répondre. Réessaie dans un moment.',
  TUTOR_OFF: 'Le mode « Je ne comprends pas » arrive bientôt.',
  UNAUTHORIZED: 'Connecte-toi à ton compte pour discuter avec KONAN.',
  TOKEN_EXPIRED: 'Ta connexion a expiré, réessaie.',
  EMPTY_MESSAGE: 'Écris ton message d’abord.',
  NETWORK: 'Pas de connexion Internet. Réessaie quand tu es connecté.',
  UNKNOWN: 'Une erreur est survenue. Réessaie.',
};

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

/** Texte de KONAN : paragraphes, listes « - », gras ** et formules $…$. */
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
  /** Leçon d'où vient l'élève (cours guidé) : la discussion repart sur cette notion. */
  context?: TutorContext;
  paid: boolean;
  remaining: number | null;
  limit: number;
  onRemainingChange: (n: number) => void;
  onSubscribe?: () => void;
  onClose: () => void;
}

export const TutorChat: React.FC<TutorChatProps> = ({ uid, classe, context, paid, remaining, limit, onRemainingChange, onSubscribe, onClose }) => {
  const [state, setState] = useState<Stored>(() => {
    const stored = readStored(uid);
    // Venu d'une autre leçon : nouvelle discussion sur cette notion
    if (context?.notion && stored?.context?.notion !== context.notion) return { messages: [], context: { ...context, classe }, updatedAt: Date.now() };
    return stored || { messages: [], context: { ...(context || {}), classe }, updatedAt: Date.now() };
  });
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Humeur passagère de la peluche après une réponse (saut de joie, hochement, fête)
  const [flash, setFlash] = useState<PlushMood | null>(null);
  const [typing, setTyping] = useState(false);
  const flashTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(flashTimer.current), []);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

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
  const canWrite = paid && !outOfMessages && !sending;
  const mood: PlushMood = sending ? 'think' : flash || (typing && input.trim() ? 'listen' : 'idle');

  const send = async (raw: string) => {
    const text = raw.replace(/\s+$/g, '').slice(0, MAX_INPUT).trim();
    if (!text || !canWrite) return;
    const mine: TutorMessage = { id: newId(), role: 'eleve', text };
    const messages = [...state.messages, mine];
    setState((s) => ({ ...s, messages, updatedAt: Date.now() }));
    setInput('');
    setError(null);
    setSending(true);
    const res = await sendTutorMessage(messages, state.context);
    setSending(false);
    if (!res.ok) {
      setError(ERRORS[res.error] || ERRORS.UNKNOWN);
      if (typeof res.remaining === 'number') onRemainingChange(res.remaining);
      // Le message n'a pas été traité : on le rend à l'élève pour qu'il puisse le renvoyer
      setState((s) => ({ ...s, messages: s.messages.filter((m) => m.id !== mine.id) }));
      setInput(text);
      return;
    }
    onRemainingChange(res.remaining);
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
    setState((s) => ({
      ...s,
      messages: [...s.messages, { id: newId(), role: 'konan', text: texte, niveau: lvl, etape, notion: n, choix }],
      updatedAt: Date.now(),
    }));
  };

  const restart = () => {
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
    <div className="fixed inset-0 z-[95] bg-slate-900/40 dark:bg-black/60 flex sm:items-center sm:justify-center sm:p-4 animate-in fade-in duration-150" role="dialog" aria-modal="true" aria-label="Je ne comprends pas : discussion avec KONAN">
      <div className="flex flex-col w-full min-w-0 h-full sm:h-[min(820px,92vh)] sm:max-w-2xl bg-white dark:bg-[#0B1120] sm:rounded-3xl sm:border sm:border-slate-200 dark:sm:border-slate-800 shadow-2xl overflow-hidden">
        {/* En-tête : KONAN + jauge de compréhension */}
        <div className="shrink-0 px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-3 border-b border-slate-200 dark:border-slate-800 bg-sky-50 dark:bg-slate-900/80 space-y-2.5">
          <div className="flex items-center gap-3">
            <KonanPlush variant="face" size={52} mood={mood} />
            <div className="flex-1 min-w-0">
              <p className="text-[15px] font-black text-slate-900 dark:text-white leading-tight">Je ne comprends pas</p>
              <p className="text-xs text-slate-600 dark:text-slate-400">KONAN t’explique jusqu’à ce que tu comprennes</p>
            </div>
            {state.messages.length > 0 && (
              <button type="button" onClick={restart} title="Nouvelle discussion" aria-label="Nouvelle discussion" className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 cursor-pointer">
                <RotateCcw className="w-[18px] h-[18px]" />
              </button>
            )}
            <button type="button" onClick={onClose} title="Fermer" aria-label="Fermer" className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 cursor-pointer">
              <X className="w-5 h-5" />
            </button>
          </div>
          {paid && state.messages.length > 0 && <Gauge niveau={niveau} notion={notion} />}
        </div>

        {/* Discussion */}
        <div className="flex-1 overflow-y-auto px-3 sm:px-5 py-4 space-y-3 overscroll-contain">
          {/* Accueil : la peluche entière dit bonjour */}
          {state.messages.length === 0 && (
            <div className="flex justify-center pt-2 pb-3">
              <KonanPlush variant="body" size={136} mood={mood} enter />
            </div>
          )}
          <div className="flex items-end gap-2">
            <img src="/konan-plush/face.webp" alt="" aria-hidden="true" className="w-7 h-7 rounded-full shrink-0" />
            <div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-bl-md bg-slate-100 dark:bg-slate-800/80 text-sm text-slate-800 dark:text-slate-100 leading-relaxed">
              {state.context.notion
                ? <>Tu bloques sur <strong>« {state.context.notion} »</strong> ? Pas de souci, on va y arriver ensemble. Dis-moi ce que tu ne comprends pas : un mot, une étape, l’exemple…</>
                : <>Salut ! Dis-moi la matière et ce qui te bloque, par exemple : <em>« Je ne comprends pas les vecteurs »</em>. Je t’explique, puis je te pose une petite question pour vérifier.</>}
            </div>
          </div>

          {state.messages.map((m) => (
            m.role === 'eleve' ? (
              <div key={m.id} className="flex justify-end">
                <div className="max-w-[85%] px-4 py-2.5 rounded-2xl rounded-br-md bg-sky-600 text-white text-sm leading-relaxed whitespace-pre-wrap break-words">{m.text}</div>
              </div>
            ) : (
              <div key={m.id} className="flex items-end gap-2">
                <img src="/konan-plush/face.webp" alt="" aria-hidden="true" className="w-7 h-7 rounded-full shrink-0" />
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl rounded-bl-md text-sm leading-relaxed break-words text-slate-800 dark:text-slate-100 ${
                  m.etape === 'conclusion' ? 'bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30' : 'bg-slate-100 dark:bg-slate-800/80'
                }`}>
                  <RichText text={m.text} />
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
              KONAN réfléchit…
            </div>
          )}

          {error && <p className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-700/50 text-amber-900 dark:text-amber-200 text-sm font-semibold" role="alert">{error}</p>}
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
          ) : (
            <>
              {state.messages.length === 0 && !sending && (
                <div className="flex flex-wrap gap-2">
                  {starters.map((s) => (
                    <button key={s} type="button" onClick={() => send(s)} disabled={!canWrite} className="px-3 py-2 rounded-full border-2 border-sky-200 dark:border-sky-400/40 text-sky-800 dark:text-sky-200 text-xs font-bold hover:bg-sky-50 dark:hover:bg-sky-400/10 disabled:opacity-50 cursor-pointer text-left">
                      {s}
                    </button>
                  ))}
                </div>
              )}
              {quickReplies.length > 0 && canWrite && (
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
              <form
                className="flex items-end gap-2"
                onSubmit={(e) => { e.preventDefault(); send(input); }}
              >
                <label htmlFor="tutor-input" className="sr-only">Ton message à KONAN</label>
                <textarea
                  id="tutor-input"
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value.slice(0, MAX_INPUT))}
                  onFocus={() => setTyping(true)}
                  onBlur={() => setTyping(false)}
                  onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey && !('ontouchstart' in window)) { e.preventDefault(); send(input); } }}
                  rows={1}
                  disabled={!canWrite}
                  placeholder={outOfMessages ? 'Plus de messages aujourd’hui' : 'Écris ce que tu ne comprends pas…'}
                  className="flex-1 min-h-[46px] max-h-32 resize-none px-4 py-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-sm placeholder:text-slate-500 dark:placeholder:text-slate-500 focus:outline-none focus:border-sky-400 disabled:opacity-60"
                />
                <button type="submit" disabled={!canWrite || !input.trim()} aria-label="Envoyer" className="w-[46px] h-[46px] shrink-0 rounded-2xl bg-sky-600 hover:bg-sky-500 disabled:opacity-40 text-white flex items-center justify-center cursor-pointer">
                  <Send className="w-5 h-5" />
                </button>
              </form>
              {remaining !== null && (
                <p className="text-[11px] text-center text-slate-500 dark:text-slate-400">
                  {outOfMessages ? 'Messages du jour utilisés · ça revient demain' : `${remaining}/${limit} messages aujourd’hui`} · KONAN explique, il ne fait pas tes devoirs
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
