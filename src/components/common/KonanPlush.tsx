/**
 * Peluche KONAN animée : icône officielle du mode « Je ne comprends pas » (choix du fondateur, 2026-11-22).
 * - variant « face » : le visage rond (bouton flottant, en-tête de la discussion) ;
 * - variant « body » : la peluche entière (grands moments : accueil, réservé Pro).
 * Elle respire, flotte, cligne des yeux au hasard, et change d'humeur :
 *   idle (petit saut + coucou de temps en temps), listen (penchée, écoute), think (balance, yeux mi-clos, « … »),
 *   happy (deux sauts, joues roses, étoiles), encourage (hoche la tête), celebrate (saut avec un tour, étoiles).
 * Styles : konanPlush.css (respecte « réduire les animations »).
 */
import React, { useEffect, useState } from 'react';
import './konanPlush.css';

export type PlushMood = 'idle' | 'listen' | 'think' | 'happy' | 'encourage' | 'celebrate' | 'talk';

// Repères mesurés sur les images officielles (en % de l'image)
const LAYOUT = {
  face: {
    src: '/konan-plush/face.webp',
    ratio: 1,
    eyes: [{ x: 34.0, y: 46.7 }, { x: 65.8, y: 46.7 }],
    eyeW: 20.6, eyeH: 20.6,
    cheeks: [{ x: 24, y: 60 }, { x: 76, y: 60 }],
    cheekW: 20, cheekH: 13,
  },
  body: {
    src: '/konan-plush/body.webp',
    ratio: 880 / 884,
    eyes: [{ x: 38.6, y: 32.4 }, { x: 61.9, y: 32.4 }],
    eyeW: 14.6, eyeH: 14.5,
    cheeks: [{ x: 29, y: 42.3 }, { x: 71.6, y: 42.3 }],
    cheekW: 13, cheekH: 8.5,
  },
} as const;

const SPARKS = [
  { x: '-150%', y: '-120%', d: '0s' }, { x: '150%', y: '-130%', d: '0.08s' }, { x: '-190%', y: '20%', d: '0.16s' },
  { x: '190%', y: '10%', d: '0.04s' }, { x: '-60%', y: '-200%', d: '0.12s' }, { x: '70%', y: '-195%', d: '0.2s' },
];

const Star = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 0c.8 6.4 4.8 10.4 12 12-7.2 1.6-11.2 5.6-12 12-.8-6.4-4.8-10.4-12-12C7.2 10.4 11.2 6.4 12 0z" /></svg>
);

interface Props {
  variant?: 'face' | 'body';
  /** Largeur en pixels */
  size: number;
  mood?: PlushMood;
  /** Rejoue le « boing » quand ce nombre change (toucher) */
  boing?: number;
  enter?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const KonanPlush: React.FC<Props> = ({ variant = 'face', size, mood = 'idle', boing = 0, enter = false, className = '', children }) => {
  const L = LAYOUT[variant];
  const [blinking, setBlinking] = useState(false);
  const [boingOn, setBoingOn] = useState(false);

  // Clignements au hasard (toutes les 2,5 à 6 s ; parfois deux de suite), comme un vrai regard
  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    let alive = true;
    const blink = (then?: () => void) => {
      setBlinking(true);
      t = setTimeout(() => { if (!alive) return; setBlinking(false); then?.(); }, 140);
    };
    const schedule = () => {
      t = setTimeout(() => {
        if (!alive) return;
        if (Math.random() < 0.22) blink(() => { t = setTimeout(() => blink(schedule), 170); });
        else blink(schedule);
      }, 2500 + Math.random() * 3500);
    };
    schedule();
    return () => { alive = false; clearTimeout(t); };
  }, []);

  useEffect(() => {
    if (!boing) return;
    setBoingOn(false);
    const a = requestAnimationFrame(() => setBoingOn(true));
    const t = setTimeout(() => setBoingOn(false), 450);
    return () => { cancelAnimationFrame(a); clearTimeout(t); };
  }, [boing]);

  const height = Math.round(size / L.ratio);
  const festive = mood === 'happy' || mood === 'celebrate';

  return (
    <span
      className={`kp kp--${variant} kp--${mood}${blinking ? ' is-blinking' : ''}${boingOn ? ' is-boing' : ''}${enter ? ' kp-enter' : ''} ${className}`}
      style={{ width: size, height, fontSize: Math.max(10, size / 6) }}
      aria-hidden="true"
    >
      {children}
      <span className="kp-float">
        {/* key = humeur : l'animation repart du début à chaque changement d'humeur */}
        <span className="kp-mood" key={mood}>
          <span className="kp-body">
            <img className="kp-img" src={L.src} alt="" width={size} height={height} draggable={false} decoding="async" />
            {L.cheeks.map((c, i) => (
              <span key={`c${i}`} className="kp-cheek" style={{ left: `${c.x - L.cheekW / 2}%`, top: `${c.y - L.cheekH / 2}%`, width: `${L.cheekW}%`, height: `${L.cheekH}%` }} />
            ))}
            {L.eyes.map((e, i) => (
              <span key={`e${i}`} className="kp-eye" style={{ left: `${e.x - L.eyeW / 2}%`, top: `${e.y - L.eyeH / 2}%`, width: `${L.eyeW}%`, height: `${L.eyeH}%` }}>
                <span className="kp-lid" />
              </span>
            ))}
          </span>
        </span>
      </span>
      {festive && SPARKS.map((s, i) => (
        <span key={`s${i}`} className="kp-spark" style={{ ['--x' as string]: s.x, ['--y' as string]: s.y, ['--d' as string]: s.d } as React.CSSProperties}>
          <Star />
        </span>
      ))}
      {mood === 'think' && <span className="kp-dots"><i /><i /><i /></span>}
    </span>
  );
};
