/**
 * Peluche KONÉ animée : icône officielle du mode « Je ne comprends pas » et compagnon flottant.
 *
 * Vraie animation image par image (stop-motion) + rendus 3D studio officiels selon la batterie (`battery`, 0 à 100) :
 *   - 50 % à 100 % (happy)   : Bleu / En forme (souriant, `public/konan-plush/anim/*.webp`)
 *   - 6 % à 49 %  (annoyed) : Orange / Agacé (`public/konan-plush/moods/annoyed.png`)
 *   - 1 % à 5 %   (angry)   : Rouge / Très fâché (`public/konan-plush/moods/angry.png`)
 *   - 0 %         (strike)  : Rouge foncé / En grève, tourne le dos (`public/konan-plush/moods/strike.png` + cadenas)
 */
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Lock } from 'lucide-react';
import { getKoneMoodTier, type KoneMoodTier } from '../../lib/gamification/koneBattery';
import './konanPlush.css';

export type PlushMood = 'idle' | 'listen' | 'think' | 'happy' | 'encourage' | 'celebrate' | 'talk';

const FRAMES = [
  'repos', 'cligne',
  'reflechit1', 'reflechit2', 'reflechit3', 'reflechit4',
  'ecoute1', 'ecoute2', 'ecoute3', 'ecoute4',
  'pouce1', 'pouce2', 'pouce3', 'pouce4',
  'encourage1', 'encourage2', 'encourage3',
  'applaudit1', 'applaudit2', 'applaudit3',
  'parle1', 'parle2', 'parle3',
  'coucou1', 'coucou2', 'coucou3',
] as const;
type Frame = typeof FRAMES[number];
const src = (f: Frame) => `/konan-plush/anim/${f}.webp`;

const STUDIO_MOOD_SRC: Record<Exclude<KoneMoodTier, 'happy'>, string> = {
  annoyed: '/konan-plush/moods/annoyed.png',
  angry: '/konan-plush/moods/angry.png',
  strike: '/konan-plush/moods/strike.png',
};

interface Step { f: Frame; ms: number }
interface Gesture { intro: Frame[]; loop: Step[] }

const GESTURES: Record<'listen' | 'think' | 'happy' | 'encourage' | 'celebrate' | 'wave', Gesture> = {
  listen: { intro: ['ecoute1', 'ecoute2'], loop: [{ f: 'ecoute3', ms: 1600 }, { f: 'ecoute4', ms: 1800 }] },
  think: {
    intro: ['reflechit1', 'reflechit2'],
    loop: [{ f: 'reflechit3', ms: 900 }, { f: 'reflechit4', ms: 220 }, { f: 'reflechit3', ms: 260 }, { f: 'reflechit4', ms: 220 }, { f: 'reflechit3', ms: 1300 }],
  },
  happy: { intro: ['pouce1', 'pouce2'], loop: [{ f: 'pouce3', ms: 900 }, { f: 'pouce4', ms: 700 }, { f: 'pouce3', ms: 1400 }] },
  encourage: { intro: ['encourage1'], loop: [{ f: 'encourage2', ms: 1100 }, { f: 'encourage3', ms: 700 }, { f: 'encourage2', ms: 1200 }] },
  celebrate: { intro: ['applaudit1'], loop: [{ f: 'applaudit2', ms: 170 }, { f: 'applaudit3', ms: 170 }] },
  wave: { intro: ['coucou1'], loop: [{ f: 'coucou2', ms: 230 }, { f: 'coucou3', ms: 230 }] },
};
const STEP_MS = 90;
const IDLE_SET: Frame[] = ['repos', 'cligne', 'coucou1', 'coucou2', 'coucou3'];

interface Props {
  variant?: 'bust' | 'body';
  /** Largeur en pixels */
  size: number;
  mood?: PlushMood;
  /** Niveau de batterie de KONÉ (0 à 100). Par défaut 100 (Bleu / En forme). */
  battery?: number;
  /** Volume de la voix (0 à 1) pendant que KONÉ parle : choisit la forme de la bouche */
  talkLevel?: number;
  /** Petit coucou de la main de temps en temps au repos (bouton flottant, accueil) */
  waves?: boolean;
  /** Rejoue le « boing » quand ce nombre change (toucher) */
  boing?: number;
  enter?: boolean;
  /** Images chargées : seulement le repos et le coucou (bouton flottant, léger) ou tout (discussion) */
  preload?: 'idle' | 'all';
  className?: string;
  children?: React.ReactNode;
}

export const KonanPlush: React.FC<Props> = ({
  variant = 'body',
  size,
  mood = 'idle',
  battery = 100,
  talkLevel,
  waves = false,
  boing = 0,
  enter = false,
  preload = 'all',
  className = '',
  children,
}) => {
  const batteryTier = getKoneMoodTier(battery);
  const effectiveWaves = batteryTier === 'happy' ? waves : false;
  const effectiveMood: PlushMood = useMemo(() => {
    if (batteryTier === 'strike') return 'idle';
    if (batteryTier === 'happy') return mood;
    if (mood === 'happy' || mood === 'celebrate' || mood === 'encourage') return 'idle';
    return mood;
  }, [batteryTier, mood]);

  const [frame, setFrame] = useState<Frame>('repos');
  const [prevFrame, setPrevFrame] = useState<Frame | null>(null);
  const [boingOn, setBoingOn] = useState(false);
  const frameRef = useRef<Frame>('repos');
  const gestureRef = useRef<Gesture | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const prevTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const talkRef = useRef(talkLevel);
  talkRef.current = talkLevel;
  useEffect(() => () => clearTimeout(prevTimer.current), []);

  const show = (f: Frame) => {
    if (f === frameRef.current) return;
    setPrevFrame(frameRef.current);
    frameRef.current = f;
    setFrame(f);
    clearTimeout(prevTimer.current);
    prevTimer.current = setTimeout(() => setPrevFrame(null), 75);
  };
  const later = (ms: number, fn: () => void) => { timer.current = setTimeout(fn, ms); };

  const playFrames = (list: Frame[], then: () => void) => {
    const [first, ...rest] = list;
    if (!first) { then(); return; }
    show(first);
    later(STEP_MS, () => playFrames(rest, then));
  };

  const loopSteps = (steps: Step[], i = 0) => {
    const s = steps[i % steps.length];
    show(s.f);
    later(s.ms, () => loopSteps(steps, i + 1));
  };

  useEffect(() => {
    clearTimeout(timer.current);
    const prev = gestureRef.current;
    const back: Frame[] = prev ? [...prev.intro].reverse() : [];

    const startIdle = () => {
      gestureRef.current = null;
      show('repos');
      // Pour les humeurs non-bleues (Agacé, Très fâché, En grève), on affiche le rendu 3D studio dédié au repos
      if (batteryTier !== 'happy') return;
      const scheduleIdle = () => {
        const wait = 2200 + Math.random() * 3800;
        later(wait, () => {
          if (effectiveWaves && Math.random() < 0.28) {
            const g = GESTURES.wave;
            playFrames(g.intro, () => {
              const seq: Frame[] = ['coucou2', 'coucou3', 'coucou2', 'coucou3', 'coucou2', 'coucou3'];
              const wave = (k: number) => {
                if (k >= seq.length) { playFrames(['coucou1'], () => { show('repos'); scheduleIdle(); }); return; }
                show(seq[k]);
                later(230, () => wave(k + 1));
              };
              wave(0);
            });
            return;
          }
          show('cligne');
          later(130, () => {
            show('repos');
            if (Math.random() < 0.2) later(160, () => { show('cligne'); later(130, () => { show('repos'); scheduleIdle(); }); });
            else scheduleIdle();
          });
        });
      };
      scheduleIdle();
    };

    const startTalk = () => {
      gestureRef.current = null;
      const flap = () => {
        const lvl = talkRef.current;
        let f: Frame;
        if (typeof lvl === 'number') {
          f = lvl < 0.06 ? 'repos' : lvl < 0.22 ? 'parle1' : lvl < 0.45 ? (Math.random() < 0.5 ? 'parle3' : 'parle1') : 'parle2';
        } else {
          const opts: Frame[] = ['parle1', 'parle2', 'parle3', 'parle1', 'repos'];
          f = opts[Math.floor(Math.random() * opts.length)];
        }
        if (f !== frameRef.current) show(f);
        later(95, flap);
      };
      flap();
    };

    const startGesture = (g: Gesture) => {
      gestureRef.current = g;
      playFrames(g.intro, () => loopSteps(g.loop));
    };

    const next = effectiveMood === 'idle' ? startIdle
      : effectiveMood === 'talk' ? startTalk
      : () => startGesture(GESTURES[effectiveMood]);

    playFrames(back, next);
    return () => clearTimeout(timer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [effectiveMood, effectiveWaves, batteryTier]);

  useEffect(() => {
    if (!enter || !effectiveWaves || effectiveMood !== 'idle') return;
    const t = setTimeout(() => {
      clearTimeout(timer.current);
      const seq: Frame[] = ['coucou1', 'coucou2', 'coucou3', 'coucou2', 'coucou3', 'coucou1', 'repos'];
      const run = (k: number) => {
        if (k >= seq.length) return;
        show(seq[k]);
        timer.current = setTimeout(() => run(k + 1), k === 0 || k === seq.length - 2 ? STEP_MS : 230);
      };
      run(0);
    }, 650);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!boing) return;
    setBoingOn(false);
    const a = requestAnimationFrame(() => setBoingOn(true));
    const t = setTimeout(() => setBoingOn(false), 450);
    return () => { cancelAnimationFrame(a); clearTimeout(t); };
  }, [boing]);

  const frames = useMemo<Frame[]>(() => (preload === 'all' ? [...FRAMES] : IDLE_SET), [preload]);
  const shown = frames.includes(frame) ? frame : 'repos';
  const showStudioMoodImage = batteryTier !== 'happy' && (batteryTier === 'strike' || effectiveMood === 'idle');

  const bust = variant === 'bust';
  const zoom = bust ? 1.42 : 1;
  const imgSize = Math.round(size * zoom);
  const imgStyle: React.CSSProperties = bust
    ? { width: imgSize, height: imgSize, left: (size - imgSize) / 2, top: Math.round(size / 2 - 0.45 * imgSize) }
    : { width: size, height: size, left: 0, top: 0 };

  const badgeSize = Math.max(20, Math.round(size * (bust ? 0.34 : 0.26)));

  return (
    <span
      className={`kp kp--${variant} kp--${effectiveMood} kp--tier-${batteryTier}${boingOn ? ' is-boing' : ''}${enter ? ' kp-enter' : ''} ${className}`}
      style={{ width: size, height: size, fontSize: Math.max(10, size / 6) }}
      aria-hidden="true"
    >
      {children}
      <span className={`kp-stage${bust ? ' kp-stage--bust' : ''}`}>
        <span className="kp-body">
          {showStudioMoodImage ? (
            <img
              className="kp-frame is-on"
              src={STUDIO_MOOD_SRC[batteryTier]}
              alt=""
              draggable={false}
              decoding="async"
              style={imgStyle}
            />
          ) : (
            frames.map((f) => (
              <img
                key={f}
                className={`kp-frame${batteryTier !== 'happy' ? ' kp-frame--gesture' : ''}${f === shown ? ' is-on' : f === prevFrame ? ' is-prev' : ''}`}
                src={src(f)}
                alt=""
                draggable={false}
                decoding="async"
                style={imgStyle}
              />
            ))
          )}
        </span>
      </span>
      {/* Icône de cadenas visible lorsque KONÉ est à 0 % (En grève) */}
      {batteryTier === 'strike' && (
        <span
          className="absolute right-0 bottom-0 z-10 rounded-full bg-red-900 text-amber-200 border-2 border-white dark:border-slate-950 shadow-lg flex items-center justify-center pointer-events-none"
          style={{ width: badgeSize, height: badgeSize }}
        >
          <Lock style={{ width: Math.round(badgeSize * 0.54), height: Math.round(badgeSize * 0.54) }} />
        </span>
      )}
    </span>
  );
};
