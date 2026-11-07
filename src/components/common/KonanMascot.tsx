import React, { useId } from 'react';

/**
 * KONAN, la mascotte (cube bleu « K », gants blancs, baskets, montre au poignet), dessinée en vecteurs
 * pour pouvoir animer chaque partie séparément (bras, yeux, corps, hologramme).
 *
 * Poses :
 * - wave   : salue de la main en regardant l'élève droit dans les yeux ;
 * - jump   : saute de joie, puis ses yeux s'illuminent ;
 * - notes  : prend des notes sur sa montre, qui projette un hologramme ;
 * - idle   : respire tranquillement et cligne des yeux.
 */
export type KonanMascotPose = 'wave' | 'jump' | 'notes' | 'idle';

interface KonanMascotProps {
  pose?: KonanMascotPose;
  /** Largeur en pixels (la hauteur suit : 5/4 de la largeur) */
  size?: number;
  className?: string;
}

const INK = '#0B2545';
const LIMB = '#2F6FD6'; // assez clair pour rester visible sur le fond sombre de l'appli
const GLOVE = '#FFFFFF';

const CSS = `
.km-root { overflow: visible; }
.km-root * { transform-box: view-box; }
.km-bob { animation: km-bob 2.6s ease-in-out infinite; }
.km-blink { transform-origin: 117px 80px; animation: km-blink 4.2s ease-in-out infinite; }
.km-wave-arm { transform-origin: 60px 104px; animation: km-wave 0.55s ease-in-out infinite alternate; }
.km-pop { transform-origin: 117px 216px; animation: km-pop 0.5s cubic-bezier(.34,1.56,.64,1) both; }
.km-jump { transform-origin: 117px 216px; animation: km-jump 0.85s cubic-bezier(.3,.7,.4,1) 2; }
.km-jump-shadow { transform-origin: 117px 216px; animation: km-shadow 0.85s cubic-bezier(.3,.7,.4,1) 2; }
.km-sparkle { opacity: 0; animation: km-sparkle 1.2s ease-in-out 1.6s infinite; }
.km-sparkle-2 { opacity: 0; animation: km-sparkle 1.2s ease-in-out 2.0s infinite; }
.km-tap { animation: km-tap 0.45s ease-in-out infinite alternate; }
.km-holo { animation: km-holo 2.2s ease-in-out infinite; }
.km-line { stroke-dasharray: 34; stroke-dashoffset: 34; animation: km-write 2.4s linear infinite; }
.km-line-2 { animation-delay: 0.6s; }
.km-line-3 { animation-delay: 1.2s; }
@keyframes km-bob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
@keyframes km-blink { 0%,92%,100% { transform: scaleY(1); } 95% { transform: scaleY(0.1); } }
@keyframes km-wave { from { transform: rotate(-16deg); } to { transform: rotate(14deg); } }
@keyframes km-pop { from { transform: scale(0.6); opacity: 0; } to { transform: scale(1); opacity: 1; } }
@keyframes km-jump {
  0% { transform: translateY(0) scale(1.06, 0.92); }
  35% { transform: translateY(-34px) scale(0.96, 1.05); }
  65% { transform: translateY(-34px) scale(1, 1); }
  90% { transform: translateY(0) scale(1.08, 0.9); }
  100% { transform: translateY(0) scale(1, 1); }
}
@keyframes km-shadow { 0%,100% { transform: scale(1); opacity: 1; } 35%,65% { transform: scale(0.6); opacity: 0.5; } }
@keyframes km-sparkle { 0%,100% { opacity: 0; transform: scale(0.4) rotate(0deg); } 50% { opacity: 1; transform: scale(1) rotate(25deg); } }
@keyframes km-tap { from { transform: translate(0, 0); } to { transform: translate(2px, 3px); } }
@keyframes km-holo { 0%,100% { opacity: 0.85; } 45% { opacity: 1; } 50% { opacity: 0.7; } 55% { opacity: 1; } }
@keyframes km-write { 0% { stroke-dashoffset: 34; } 60%,100% { stroke-dashoffset: 0; } }
`;

/** Gant blanc de dessin animé (paume + doigts), centré en (x, y). */
const Glove: React.FC<{ x: number; y: number; open?: boolean; pointing?: boolean; rotate?: number }> = ({ x, y, open, pointing, rotate = 0 }) => (
  <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
    {open ? (
      <>
        {[-13, -4, 5, 13].map((dx, i) => (
          <rect key={i} x={dx - 3.4} y={-17 + Math.abs(dx) * 0.25} width="6.8" height="13" rx="3.4" fill={GLOVE} stroke={INK} strokeWidth="2" />
        ))}
        <ellipse cx="-12" cy="3" rx="4" ry="6.5" transform="rotate(-35 -12 3)" fill={GLOVE} stroke={INK} strokeWidth="2" />
        <ellipse cx="0" cy="2" rx="12" ry="9.5" fill={GLOVE} stroke={INK} strokeWidth="2" />
      </>
    ) : pointing ? (
      <>
        <rect x="2" y="-3.6" width="15" height="7" rx="3.5" fill={GLOVE} stroke={INK} strokeWidth="2" />
        <ellipse cx="0" cy="1" rx="8.5" ry="8" fill={GLOVE} stroke={INK} strokeWidth="2" />
      </>
    ) : (
      <>
        <ellipse cx="0" cy="0" rx="8.5" ry="8" fill={GLOVE} stroke={INK} strokeWidth="2" />
        <path d="M-3 -4 Q0 -1 -3 3" fill="none" stroke={INK} strokeWidth="1.4" strokeLinecap="round" />
      </>
    )}
  </g>
);

const Shoe: React.FC<{ x: number }> = ({ x }) => (
  <g transform={`translate(${x} 0)`}>
    <rect x="-4" y="187" width="12" height="9" rx="3" fill="#FFFFFF" stroke={INK} strokeWidth="2" />
    <path d="M-15 207 Q-14 194 0 193 Q12 192 15 200 L18 207 Z" fill="#2F7DE1" stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
    <rect x="-17" y="205" width="37" height="7" rx="3.5" fill="#FFFFFF" stroke={INK} strokeWidth="2.2" />
    <path d="M-4 197 L5 199 M-3 201 L7 202" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
  </g>
);

export const KonanMascot: React.FC<KonanMascotProps> = ({ pose = 'idle', size = 160, className = '' }) => {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  const front = `kmFront${uid}`;
  const holo = `kmHolo${uid}`;

  // Regard : droit vers l'élève, sauf en prise de notes (vers la montre, en bas à droite)
  const look = pose === 'notes' ? { x: 2.5, y: 4 } : { x: 0, y: 0 };
  const openMouth = pose === 'wave' || pose === 'jump';

  const eye = (cx: number) => (
    <g>
      <ellipse cx={cx} cy={80} rx="11" ry="13.5" fill="#FFFFFF" stroke={INK} strokeWidth="2.6" />
      <circle cx={cx + look.x} cy={82 + look.y} r="6.8" fill="#0A0F1A" />
      <circle cx={cx + look.x - 2.3} cy={79 + look.y} r="2.3" fill="#FFFFFF" />
    </g>
  );

  const sparkle = (cx: number, cy: number, cls: string) => (
    <path
      className={cls}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
      d={`M${cx} ${cy - 7} L${cx + 2} ${cy - 2} L${cx + 7} ${cy} L${cx + 2} ${cy + 2} L${cx} ${cy + 7} L${cx - 2} ${cy + 2} L${cx - 7} ${cy} L${cx - 2} ${cy - 2} Z`}
      fill="#FDE047"
      stroke="#F59E0B"
      strokeWidth="1"
    />
  );

  // Bras selon la pose (épaules en (60,106) et (160,106))
  const arms = (() => {
    if (pose === 'wave') {
      return (
        <>
          <g className="km-wave-arm">
            <path d="M60 106 Q40 96 36 70" fill="none" stroke={LIMB} strokeWidth="6.5" strokeLinecap="round" />
            <Glove x={34} y={58} open rotate={-12} />
          </g>
          <path d="M160 106 Q176 124 176 146" fill="none" stroke={LIMB} strokeWidth="6.5" strokeLinecap="round" />
          <rect x="168" y="134" width="15" height="10" rx="2.5" fill="#1E293B" stroke={INK} strokeWidth="1.6" />
          <Glove x={176} y={153} />
        </>
      );
    }
    if (pose === 'jump') {
      return (
        <>
          <path d="M60 106 Q42 92 34 70" fill="none" stroke={LIMB} strokeWidth="6.5" strokeLinecap="round" />
          <Glove x={32} y={60} open rotate={-25} />
          <path d="M160 106 Q178 92 186 70" fill="none" stroke={LIMB} strokeWidth="6.5" strokeLinecap="round" />
          <rect x="176" y="78" width="15" height="10" rx="2.5" fill="#1E293B" stroke={INK} strokeWidth="1.6" transform="rotate(-30 183 83)" />
          <Glove x={188} y={60} open rotate={25} />
        </>
      );
    }
    if (pose === 'notes') {
      return (
        <>
          {/* Bras avec la montre, ramené devant le corps */}
          <path d="M160 108 Q184 132 160 150" fill="none" stroke={LIMB} strokeWidth="6.5" strokeLinecap="round" />
          <Glove x={150} y={152} />
          <rect x="155" y="142" width="17" height="12" rx="3" fill="#1E293B" stroke={INK} strokeWidth="1.8" />
          <rect x="158" y="145" width="11" height="6" rx="1.5" fill="#22D3EE" />
          {/* Doigt qui écrit sur la montre */}
          <g className="km-tap">
            <path d="M60 108 Q56 150 112 154" fill="none" stroke={LIMB} strokeWidth="6.5" strokeLinecap="round" />
            <Glove x={124} y={152} pointing rotate={-12} />
          </g>
        </>
      );
    }
    return (
      <>
        <path d="M60 106 Q44 124 44 146" fill="none" stroke={LIMB} strokeWidth="6.5" strokeLinecap="round" />
        <Glove x={44} y={153} />
        <path d="M160 106 Q176 124 176 146" fill="none" stroke={LIMB} strokeWidth="6.5" strokeLinecap="round" />
        <rect x="168" y="134" width="15" height="10" rx="2.5" fill="#1E293B" stroke={INK} strokeWidth="1.6" />
        <Glove x={176} y={153} />
      </>
    );
  })();

  const body = (
    <g className={pose === 'jump' ? 'km-jump' : 'km-bob'}>
      {/* Jambes et baskets */}
      <path d="M104 130 L100 190 M132 130 L136 190" stroke={LIMB} strokeWidth="7" strokeLinecap="round" />
      <Shoe x={100} />
      <Shoe x={136} />

      {/* Bras derrière (pour les poses où ils passent derrière le cube) */}
      {arms}

      {/* Cube : dessus, côté gauche, face avant */}
      <polygon points="52,30 138,30 160,46 74,46" fill="#8FDCFB" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <polygon points="52,30 74,46 74,132 52,116" fill="#2B8FDB" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <rect x="74" y="46" width="86" height="86" rx="4" fill={`url(#${front})`} stroke={INK} strokeWidth="3" />
      <path d="M80 52 L154 52" stroke="#FFFFFF" strokeOpacity="0.55" strokeWidth="3" strokeLinecap="round" />
      {/* Lettres K sur le dessus et le côté */}
      <text x="0" y="0" transform="translate(98 42) skewX(-52) scale(1 0.42)" fontSize="30" fontWeight="900" fill="#1E5FA8" fontFamily="Arial Black, Arial, sans-serif">K</text>
      <text x="0" y="0" transform="translate(56 98) skewY(36) scale(0.48 1)" fontSize="40" fontWeight="900" fill="#164E8F" fontFamily="Arial Black, Arial, sans-serif">K</text>

      {/* Visage */}
      <path d="M92 63 Q100 57 108 62 M126 62 Q134 57 142 63" fill="none" stroke={INK} strokeWidth="2.8" strokeLinecap="round" />
      <g className="km-blink">
        {eye(100)}
        {eye(134)}
      </g>
      {pose === 'jump' && (
        <>
          {sparkle(100, 80, 'km-sparkle')}
          {sparkle(134, 80, 'km-sparkle-2')}
          {sparkle(160, 36, 'km-sparkle')}
          {sparkle(62, 22, 'km-sparkle-2')}
        </>
      )}
      {openMouth ? (
        <g>
          <path d="M102 103 Q117 99 132 103 Q130 119 117 120 Q104 119 102 103 Z" fill="#7F1D1D" stroke={INK} strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M108 114 Q117 109 126 114 Q122 119 117 119 Q112 119 108 114 Z" fill="#FB7185" />
        </g>
      ) : (
        <path d="M103 104 Q117 116 131 104" fill="none" stroke={INK} strokeWidth="2.8" strokeLinecap="round" />
      )}

      {/* Hologramme projeté par la montre */}
      {pose === 'notes' && (
        <g className="km-holo">
          <polygon points="160,143 168,143 198,74 150,74" fill={`url(#${holo})`} opacity="0.55" />
          <rect x="146" y="40" width="54" height="36" rx="5" fill="#22D3EE" fillOpacity="0.18" stroke="#22D3EE" strokeWidth="1.8" />
          <path className="km-line" d="M153 50 L187 50" stroke="#A5F3FC" strokeWidth="2.6" strokeLinecap="round" />
          <path className="km-line km-line-2" d="M153 58 L181 58" stroke="#A5F3FC" strokeWidth="2.6" strokeLinecap="round" />
          <path className="km-line km-line-3" d="M153 66 L187 66" stroke="#A5F3FC" strokeWidth="2.6" strokeLinecap="round" />
        </g>
      )}
    </g>
  );

  return (
    <svg
      viewBox="0 0 220 240"
      width={size}
      height={(size * 240) / 220}
      className={`km-root ${className}`}
      role="img"
      aria-label={
        pose === 'wave' ? 'KONAN te salue' : pose === 'jump' ? 'KONAN saute de joie' : pose === 'notes' ? 'KONAN prend des notes sur sa montre' : 'KONAN'
      }
    >
      <style>{CSS}</style>
      <defs>
        <linearGradient id={front} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6AD3FA" />
          <stop offset="100%" stopColor="#38B2EE" />
        </linearGradient>
        <linearGradient id={holo} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Ombre au sol */}
      <ellipse className={pose === 'jump' ? 'km-jump-shadow' : undefined} cx="117" cy="216" rx="52" ry="7" fill="#0B2545" fillOpacity="0.22" />
      <g className="km-pop">{body}</g>
    </svg>
  );
};
