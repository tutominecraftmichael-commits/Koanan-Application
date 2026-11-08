/**
 * KONAN COACH : la mascotte intervient pendant le cours guidé, selon le comportement de l'élève.
 *
 *  - aucune réponse depuis 1 min 30 → triste : « Tu es encore là ? » + bouton « Je suis là ! »
 *  - toujours rien après 2 min      → triste, regarde sa montre
 *  - réponses au hasard (trop rapides et fausses) → surpris : « Doucement ! »
 *  - plusieurs erreurs en prenant le temps de réfléchir → encourageant
 *  - 5 bonnes réponses d'affilée    → saute de joie
 *  - l'élève revient dans l'appli   → content, le salue
 *
 * Règles : jamais plus d'une intervention toutes les 2 minutes (sauf la suite « tu es encore là ? »),
 * des phrases qui changent à chaque fois, jamais de moquerie ni d'insulte.
 */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { KonanMascot, type KonanMascotPose } from '../../components/common/KonanMascot';

export type CoachKind = 'idle' | 'idle_long' | 'random' | 'struggle' | 'streak' | 'back' | 'here';

export interface CoachMessage {
  kind: CoachKind;
  pose: KonanMascotPose;
  text: string;
  action?: string;
}

const LINES: Record<CoachKind, { pose: KonanMascotPose; texts: string[]; action?: string }> = {
  idle: {
    pose: 'sad',
    action: 'Je suis là !',
    texts: [
      'Tu es encore là ? Je t’attends…',
      'Hé… tu m’as oublié ? Je suis toujours là, moi.',
      'Ça fait un moment… Tu es encore avec moi ?',
      'Je ne te vois plus répondre… Tout va bien ?',
    ],
  },
  idle_long: {
    pose: 'sad_watch',
    action: 'Je suis là !',
    texts: [
      'Bon… je reste là, je t’attends. Reviens vite.',
      'Je regarde l’heure… et je t’attends toujours.',
      'Je ne bouge pas d’ici. Quand tu es prêt, on reprend.',
    ],
  },
  random: {
    pose: 'whoa',
    texts: [
      'Hé, doucement ! Lis bien la question, je sais que tu peux le faire.',
      'Oh là ! Tu réponds trop vite. Prends le temps de lire.',
      'Pas si vite ! Une bonne réponse vaut mieux que dix au hasard.',
    ],
  },
  struggle: {
    pose: 'encourage',
    texts: [
      'C’est pas grave, cette notion est difficile. On la revoit ensemble.',
      'Tu fais des efforts, je le vois. Relis la fiche, ça va venir.',
      'Les erreurs font partie de l’apprentissage. On continue, doucement.',
    ],
  },
  streak: {
    pose: 'jump',
    texts: [
      'Bravo ! Tu es en feu aujourd’hui !',
      'Cinq d’affilée ! Tu m’impressionnes.',
      'Quelle série ! Continue comme ça.',
    ],
  },
  back: {
    pose: 'wave',
    texts: [
      'Ah, te revoilà ! On reprend là où on était ?',
      'Content de te revoir ! On continue ?',
      'Te voilà ! Allez, on reprend ensemble.',
    ],
  },
  here: {
    pose: 'jump',
    texts: ['Super ! On reprend ensemble.', 'Ah, tu es là ! Allez, on continue.', 'Parfait, on y retourne !'],
  },
};

const pickLine = (kind: CoachKind, last: React.MutableRefObject<Record<string, number>>): CoachMessage => {
  const def = LINES[kind];
  let i = Math.floor(Math.random() * def.texts.length);
  if (def.texts.length > 1 && i === last.current[kind]) i = (i + 1) % def.texts.length;
  last.current[kind] = i;
  return { kind, pose: def.pose, text: def.texts[i], action: def.action };
};

const IDLE_MS = 90 * 1000;
const IDLE_LONG_MS = 120 * 1000;
const COOLDOWN_MS = 2 * 60 * 1000;
const FAST_ANSWER_MS = 2500;
const BACK_AFTER_MS = 20 * 1000;

/**
 * Suivi du comportement de l'élève pendant le cours. `active` = un écran de question est affiché.
 */
export function useKonanCoach(active: boolean) {
  const [message, setMessage] = useState<CoachMessage | null>(null);
  const lastShownAt = useRef(0);
  const lastLine = useRef<Record<string, number>>({});
  // Horodatages remplis au démarrage (effet) et à chaque question affichée
  const lastActivity = useRef(0);
  const idleStage = useRef(0); // 0 rien, 1 « tu es encore là », 2 « je t'attends »
  const questionShownAt = useRef(0);
  const history = useRef<{ correct: boolean; fast: boolean }[]>([]);
  const streak = useRef(0);
  const hiddenAt = useRef<number | null>(null);
  /** Temps passé sans aucune activité (pour mettre un chronomètre en pause). */
  const [isIdle, setIsIdle] = useState(false);

  const show = useCallback((kind: CoachKind, force = false) => {
    const now = Date.now();
    if (!force && now - lastShownAt.current < COOLDOWN_MS) return;
    lastShownAt.current = now;
    setMessage(pickLine(kind, lastLine));
  }, []);

  const markActivity = useCallback(() => {
    lastActivity.current = Date.now();
    if (idleStage.current > 0) idleStage.current = 0;
    setIsIdle(false);
  }, []);

  // Inactivité : 1 min 30 puis 2 min sans aucun geste sur une question
  useEffect(() => {
    if (!active) return;
    lastActivity.current = Date.now();
    idleStage.current = 0;
    const timer = setInterval(() => {
      if (document.visibilityState === 'hidden') return;
      const quiet = Date.now() - lastActivity.current;
      if (quiet >= IDLE_LONG_MS && idleStage.current < 2) {
        idleStage.current = 2;
        setIsIdle(true);
        show('idle_long', true);
      } else if (quiet >= IDLE_MS && idleStage.current < 1) {
        idleStage.current = 1;
        show('idle', true);
      }
    }, 5000);
    const onGesture = () => markActivity();
    window.addEventListener('pointerdown', onGesture);
    window.addEventListener('keydown', onGesture);
    window.addEventListener('scroll', onGesture, { passive: true });
    return () => {
      clearInterval(timer);
      window.removeEventListener('pointerdown', onGesture);
      window.removeEventListener('keydown', onGesture);
      window.removeEventListener('scroll', onGesture);
    };
  }, [active, show, markActivity]);

  // Retour dans l'appli après une absence
  useEffect(() => {
    const onVis = () => {
      if (document.visibilityState === 'hidden') {
        hiddenAt.current = Date.now();
      } else if (hiddenAt.current) {
        const away = Date.now() - hiddenAt.current;
        hiddenAt.current = null;
        markActivity();
        if (active && away >= BACK_AFTER_MS) show('back', true);
      }
    };
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, [active, show, markActivity]);

  /** À appeler quand une nouvelle question s'affiche. */
  const questionShown = useCallback(() => {
    questionShownAt.current = Date.now();
    markActivity();
  }, [markActivity]);

  /** À appeler quand l'élève valide sa réponse. */
  const answered = useCallback((correct: boolean) => {
    const elapsed = Date.now() - questionShownAt.current;
    const fast = elapsed < FAST_ANSWER_MS;
    history.current = [...history.current, { correct, fast }].slice(-4);
    streak.current = correct ? streak.current + 1 : 0;
    markActivity();

    const recent = history.current.slice(-3);
    if (!correct && recent.filter((h) => !h.correct && h.fast).length >= 2) {
      show('random');
    } else if (!correct && recent.length === 3 && recent.every((h) => !h.correct && !h.fast)) {
      show('struggle');
    } else if (correct && streak.current > 0 && streak.current % 5 === 0) {
      show('streak');
    }
  }, [markActivity, show]);

  const dismiss = useCallback(() => setMessage(null), []);
  /** Bouton « Je suis là ! » : KONAN redevient content. */
  const imHere = useCallback(() => {
    markActivity();
    setMessage(pickLine('here', lastLine));
    setTimeout(() => setMessage((m) => (m?.kind === 'here' ? null : m)), 2600);
  }, [markActivity]);

  // Les messages de réaction disparaissent seuls ; ceux d'inactivité attendent l'élève
  useEffect(() => {
    if (!message || message.kind === 'idle' || message.kind === 'idle_long' || message.kind === 'here') return;
    const t = setTimeout(() => setMessage((m) => (m === message ? null : m)), 6500);
    return () => clearTimeout(t);
  }, [message]);

  return { message, dismiss, imHere, questionShown, answered, markActivity, isIdle };
}

/** Bulle de KONAN qui glisse depuis le bas de l'écran, sans bloquer la question. */
export const KonanCoachBubble: React.FC<{ message: CoachMessage | null; onDismiss: () => void; onAction: () => void }> = ({ message, onDismiss, onAction }) => {
  if (!message) return null;
  return (
    <div
      className="fixed inset-x-0 z-40 flex justify-center pointer-events-none"
      style={{ bottom: 'calc(env(safe-area-inset-bottom, 0px) + 12px)', paddingLeft: 'max(12px, env(safe-area-inset-left, 0px))', paddingRight: 'max(12px, env(safe-area-inset-right, 0px))' }}
    >
      <div
        role="status"
        className="pointer-events-auto w-full max-w-md flex items-end gap-2 rounded-2xl bg-white/95 dark:bg-slate-900/95 border-2 border-slate-200 dark:border-slate-700 shadow-xl px-3 py-2 animate-in slide-in-from-bottom-6 fade-in duration-300"
        onClick={(e) => { if ((e.target as HTMLElement).closest('button')) return; onDismiss(); }}
      >
        <div className="shrink-0 -mb-1">
          <KonanMascot key={`${message.kind}-${message.text}`} pose={message.pose} size={78} />
        </div>
        <div className="flex-1 min-w-0 pb-2 space-y-2">
          <p className="text-sm font-extrabold text-slate-900 dark:text-white leading-snug">{message.text}</p>
          {message.action && (
            <button
              type="button"
              onClick={onAction}
              className="px-4 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-black shadow-[0_3px_0_#15803D] active:translate-y-0.5 cursor-pointer"
            >
              {message.action}
            </button>
          )}
        </div>
        <button type="button" onClick={onDismiss} aria-label="Fermer" className="self-start text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-lg leading-none px-1 cursor-pointer">×</button>
      </div>
    </div>
  );
};
