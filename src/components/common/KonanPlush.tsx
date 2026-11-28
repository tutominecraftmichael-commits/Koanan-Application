/**
 * Peluche KONÉ animée : icône officielle du mode « Je ne comprends pas » et compagnon d'accueil.
 *
 * Vraie animation image par image (comme un dessin animé en stop-motion) + adaptation visuelle
 * selon le niveau de batterie (`battery`, 0 à 100) :
 *   - 50 % à 100 % (happy)   : Bleu / En forme (souriant)
 *   - 6 % à 49 %  (annoyed) : Orange / Agacé (un peu fatigué ou contrarié)
 *   - 1 % à 5 %   (angry)   : Rouge / Très fâché (sourcils froncés, air énervé)
 *   - 0 %         (strike)  : Rouge foncé / En grève (tourne le dos / boude + cadenas)
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

interface Step { f: Frame; ms: number }
interface Gesture { intro: Frame[]; loop: Step[] }

/** Images intermédiaires : ~90 ms chacune (la main qui monte). Boucle : la pose tenue et ses petites variations. */
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

/**
 * Expressions vectorielles calées sur les coordonnées exactes de `repos.webp` (100×100) :
 * - `annoyed` (6–49 %) : paupières mi-closes fatiguées/contrariées + bouche agacée + goutte de soupir
 * - `angry`   (1–5 %)  : sourcils fortement froncés en V + regard furieux + bouche mécontente + veine d'énervement
 * - `strike`  (0 %)    : KONÉ tourne complètement le dos (peluche vue de dos avec couture centrale, boude)
 */
const MoodOverlaySvg: React.FC<{ tier: KoneMoodTier; style: React.CSSProperties; hideFacePatch?: boolean }> = ({
  tier,
  style,
  hideFacePatch = false,
}) => {
  if (tier === 'happy') return null;

  if (tier === 'strike') {
    // 0 % : KONÉ tourne le dos et boude (on masque le visage et le K par le dos pelucheux rouge foncé)
    return (
      <svg viewBox="0 0 100 100" className="kp-mood-overlay" style={style} aria-hidden="true">
        <defs>
          <radialGradient id="kpBackFur" cx="50%" cy="38%" r="52%">
            <stop offset="0%" stopColor="#991b1b" />
            <stop offset="65%" stopColor="#7f1d1d" />
            <stop offset="100%" stopColor="#5c1111" />
          </radialGradient>
        </defs>
        {/* Dos de la tête recouvrant l'ovale du visage */}
        <ellipse cx="50" cy="42" rx="24.5" ry="20.5" fill="url(#kpBackFur)" />
        {/* Dos du ventre recouvrant le K */}
        <rect x="38" y="65" width="24" height="22" rx="9" fill="#7f1d1d" />
        {/* Couture verticale douce du dos de la peluche */}
        <path
          d="M 50 16 Q 49.5 48 50 87"
          stroke="#450a0a"
          strokeWidth="1.4"
          strokeDasharray="2.5 2.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.65"
        />
        {/* Petits traits de fourrure sur la nuque */}
        <path
          d="M 34 29 Q 50 24 66 29"
          stroke="#450a0a"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.35"
        />
        {/* Petit nuage de bouderie « hmpf » sur le côté */}
        <g opacity="0.92">
          <circle cx="77" cy="24" r="3.4" fill="#fecaca" />
          <circle cx="81.5" cy="22" r="4.2" fill="#fecaca" />
          <circle cx="80" cy="26.5" r="3" fill="#fecaca" />
        </g>
      </svg>
    );
  }

  if (tier === 'annoyed') {
    return (
      <svg viewBox="0 0 100 100" className="kp-mood-overlay" style={style} aria-hidden="true">
        {/* Paupières mi-closes (air fatigué / agacé) */}
        <path d="M 32.5 37.5 Q 39.5 32.5 46.5 37.5 L 46.5 40.5 L 32.5 40.5 Z" fill="#f5b882" />
        <path d="M 53.5 37.5 Q 60.5 32.5 67.5 37.5 L 67.5 40.5 L 53.5 40.5 Z" fill="#f5b882" />
        <line x1="32.5" y1="40.3" x2="46.5" y2="40.8" stroke="#1e293b" strokeWidth="1.9" strokeLinecap="round" />
        <line x1="53.5" y1="40.8" x2="67.5" y2="40.3" stroke="#1e293b" strokeWidth="1.9" strokeLinecap="round" />
        {/* Sourcils légèrement contrariés */}
        <path d="M 33.5 29.5 Q 40 31.2 45.5 30.2" stroke="#1e293b" strokeWidth="2.8" strokeLinecap="round" fill="none" />
        <path d="M 54.5 30.2 Q 60 31.2 66.5 29.5" stroke="#1e293b" strokeWidth="2.8" strokeLinecap="round" fill="none" />
        {/* Masque le grand sourire uniquement au repos et remplace par une moue contrariée */}
        {!hideFacePatch && (
          <>
            <ellipse cx="50" cy="50.8" rx="10.8" ry="4.4" fill="#f7caa0" />
            <path d="M 43 51.5 Q 47 49.6 51 51.4 T 57.5 50.8" stroke="#1e293b" strokeWidth="2.1" strokeLinecap="round" fill="none" />
          </>
        )}
        {/* Petite goutte de soupir sur la tempe */}
        <path d="M 71.5 27 C 71.5 27 74.5 31.5 74.5 33.4 A 3 3 0 1 1 68.5 33.4 C 68.5 31.5 71.5 27 71.5 27 Z" fill="#38bdf8" stroke="#0284c7" strokeWidth="0.8" />
      </svg>
    );
  }

  // tier === 'angry' (1 % à 5 % : Rouge / Très fâché)
  return (
    <svg viewBox="0 0 100 100" className="kp-mood-overlay" style={style} aria-hidden="true">
      {/* Cache les sourcils ronds d'origine et dessine des sourcils froncés en V très marqués */}
      <ellipse cx="39" cy="28.5" rx="7.5" ry="3.4" fill="#f3a6ad" />
      <ellipse cx="61" cy="28.5" rx="7.5" ry="3.4" fill="#f3a6ad" />
      {/* Paupières inclinées vers l'intérieur (regard énervé) */}
      <polygon points="32,34 47,39.5 32,39.5" fill="#f3a6ad" />
      <polygon points="68,34 53,39.5 68,39.5" fill="#f3a6ad" />
      <path d="M 32.5 26.8 L 46.8 33.5" stroke="#111827" strokeWidth="3.6" strokeLinecap="round" />
      <path d="M 67.5 26.8 L 53.2 33.5" stroke="#111827" strokeWidth="3.6" strokeLinecap="round" />
      {/* Remplace le sourire par une bouche froncée mécontente */}
      {!hideFacePatch && (
        <>
          <ellipse cx="50" cy="50.8" rx="11" ry="4.6" fill="#f5b1b8" />
          <path d="M 42.5 53.2 Q 50 47.8 57.5 53.2" stroke="#111827" strokeWidth="2.4" strokeLinecap="round" fill="none" />
        </>
      )}
      {/* Symbole d'énervement 💢 sur le front/tempe */}
      <g transform="translate(69, 21) scale(0.85)" stroke="#dc2626" strokeWidth="2.2" strokeLinecap="round" fill="none">
        <path d="M 2 6 Q 6 6 6 2" />
        <path d="M 12 6 Q 8 6 8 2" />
        <path d="M 2 8 Q 6 8 6 12" />
        <path d="M 12 8 Q 8 8 8 12" />
      </g>
    </svg>
  );
};

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
  // Quand KONÉ est agacé, très fâché ou en grève, il ne fait plus de grands coucous joyeux ni de pouces levés
  const effectiveWaves = batteryTier === 'happy' ? waves : false;
  const effectiveMood: PlushMood = useMemo(() => {
    if (batteryTier === 'strike') return 'idle';
    if (batteryTier === 'happy') return mood;
    if (mood === 'happy' || mood === 'celebrate') return 'idle';
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
      // En grève (0 %), KONÉ tourne le dos et reste figé à bouder
      if (batteryTier === 'strike') return;
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
  const shown = batteryTier === 'strike' ? 'repos' : (frames.includes(frame) ? frame : 'repos');

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
          {frames.map((f) => (
            <img
              key={f}
              className={`kp-frame${f === shown ? ' is-on' : f === prevFrame ? ' is-prev' : ''}`}
              src={src(f)}
              alt=""
              draggable={false}
              decoding="async"
              style={imgStyle}
            />
          ))}
          <MoodOverlaySvg
            tier={batteryTier}
            style={imgStyle}
            hideFacePatch={effectiveMood === 'talk' || effectiveMood === 'think'}
          />
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
