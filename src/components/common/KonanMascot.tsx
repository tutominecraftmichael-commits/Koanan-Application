import React, { useId } from 'react';

/**
 * KONAN, la mascotte (cube bleu « K », gants blancs, baskets, montre au poignet), dessinée en vecteurs
 * pour animer chaque partie séparément. Le corps reste STABLE (pas de va-et-vient) : seuls le bras,
 * les yeux et l'hologramme bougent — sauf le saut de joie de la page 3.
 *
 * Poses :
 * - wave   : salue de la main en regardant l'élève droit dans les yeux ;
 * - jump   : saute de joie, puis ses yeux s'illuminent ;
 * - notes  : écrit sur sa montre, qui projette un hologramme ;
 * - done   : a fini de noter — referme son hologramme, des étoiles tournent autour de lui, pouce levé ;
 * - idle   : immobile, cligne des yeux.
 */
export type KonanMascotPose = 'wave' | 'jump' | 'notes' | 'done' | 'idle';

interface KonanMascotProps {
  pose?: KonanMascotPose;
  /** Largeur en pixels (la hauteur suit) */
  size?: number;
  className?: string;
}

const INK = '#0B2545';      // contours
const LIMB = '#2F6FD6';     // bras et jambes
const WHITE = '#FFFFFF';
const SHOE = '#2F7DE1';
const SHOE_DARK = '#1F5FC0';

const CSS = `
.km-root * { transform-box: view-box; }
.km-blink { transform-origin: 117px 80px; animation: km-blink 4.2s ease-in-out infinite; }
.km-wave-arm { transform-origin: 60px 106px; animation: km-wave 0.55s ease-in-out infinite alternate; }
.km-pop { transform-origin: 117px 214px; animation: km-pop 0.45s cubic-bezier(.34,1.56,.64,1) both; }
.km-jump { transform-origin: 117px 214px; animation: km-jump 0.85s cubic-bezier(.3,.7,.4,1) 2; }
.km-jump-shadow { transform-origin: 117px 214px; animation: km-shadow 0.85s cubic-bezier(.3,.7,.4,1) 2; }
.km-sparkle { opacity: 0; animation: km-sparkle 1.2s ease-in-out 1.6s infinite; }
.km-sparkle-2 { opacity: 0; animation: km-sparkle 1.2s ease-in-out 2.0s infinite; }
.km-tap { animation: km-tap 0.45s ease-in-out infinite alternate; }
.km-holo { animation: km-holo 2.2s ease-in-out infinite; }
.km-line { stroke-dasharray: 36; stroke-dashoffset: 36; animation: km-write 2.4s linear infinite; }
.km-line-2 { animation-delay: 0.6s; }
.km-line-3 { animation-delay: 1.2s; }
.km-thumb-arm { transform-origin: 160px 106px; animation: km-thumb 0.7s cubic-bezier(.34,1.56,.64,1) 0.5s both; }
.km-holo-close { transform-origin: 187px 92px; animation: km-holo-close 0.6s ease-in both; }
.km-orbit { transform-origin: 117px 112px; animation: km-orbit 7s linear infinite; }
.km-orbit-in { animation: km-fade-in 0.5s ease-out 0.7s both; }
.km-twinkle { animation: km-sparkle-loop 1.4s ease-in-out infinite; }
@keyframes km-thumb { from { transform: rotate(28deg); } to { transform: rotate(0deg); } }
@keyframes km-holo-close { 0% { transform: scale(1, 1); opacity: 1; } 70% { transform: scale(0.15, 0.05); opacity: 0.9; } 100% { transform: scale(0, 0); opacity: 0; } }
@keyframes km-orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes km-fade-in { from { opacity: 0; } to { opacity: 1; } }
@keyframes km-sparkle-loop { 0%,100% { transform: scale(0.75); } 50% { transform: scale(1.15); } }
@keyframes km-blink { 0%,92%,100% { transform: scaleY(1); } 95% { transform: scaleY(0.1); } }
@keyframes km-wave { from { transform: rotate(-16deg); } to { transform: rotate(12deg); } }
@keyframes km-pop { from { transform: scale(0.7); opacity: 0; } to { transform: scale(1); opacity: 1; } }
@keyframes km-jump {
  0% { transform: translateY(0) scale(1.06, 0.92); }
  35% { transform: translateY(-34px) scale(0.96, 1.05); }
  65% { transform: translateY(-34px) scale(1, 1); }
  90% { transform: translateY(0) scale(1.08, 0.9); }
  100% { transform: translateY(0) scale(1, 1); }
}
@keyframes km-shadow { 0%,100% { transform: scale(1); opacity: 1; } 35%,65% { transform: scale(0.6); opacity: 0.5; } }
@keyframes km-sparkle { 0%,100% { opacity: 0; transform: scale(0.4) rotate(0deg); } 50% { opacity: 1; transform: scale(1) rotate(25deg); } }
@keyframes km-tap { from { transform: translate(0, 0); } to { transform: translate(2px, -2px); } }
@keyframes km-holo { 0%,100% { opacity: 0.85; } 45% { opacity: 1; } 50% { opacity: 0.72; } 55% { opacity: 1; } }
@keyframes km-write { 0% { stroke-dashoffset: 36; } 60%,100% { stroke-dashoffset: 0; } }
`;

/** Membre (bras ou jambe) avec un contour net : trait sombre épais + trait bleu plus fin par-dessus. */
const Limb: React.FC<{ d: string; width?: number }> = ({ d, width = 6 }) => (
  <>
    <path d={d} fill="none" stroke={INK} strokeWidth={width + 3.6} strokeLinecap="round" strokeLinejoin="round" />
    <path d={d} fill="none" stroke={LIMB} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
    <path d={d} fill="none" stroke="#5B93E8" strokeWidth={width * 0.28} strokeLinecap="round" strokeOpacity="0.7" transform="translate(-1 -1)" />
  </>
);

/**
 * Montre (repère du gant : poignet en (0,0), avant-bras vers +y).
 * glow = écran allumé (pose « notes »).
 */
const Watch: React.FC<{ glow?: boolean }> = ({ glow }) => (
  <g transform="translate(0 10)">
    {/* Bracelet */}
    <rect x="-9.5" y="-4" width="19" height="8" rx="2.5" fill="#111827" stroke={INK} strokeWidth="1.6" />
    <path d="M-9 -1.5 L9 -1.5" stroke="#374151" strokeWidth="1" />
    {/* Boîtier et cadran */}
    <rect x="-8" y="-8" width="16" height="16" rx="4" fill="#CBD5E1" stroke={INK} strokeWidth="1.8" />
    <rect x="-5.8" y="-5.8" width="11.6" height="11.6" rx="2.6" fill={glow ? '#0E7490' : '#0F172A'} />
    {glow && <rect x="-5.8" y="-5.8" width="11.6" height="11.6" rx="2.6" fill="#22D3EE" fillOpacity="0.45" />}
    <path d="M0 0 L0 -4 M0 0 L3 1.5" stroke={glow ? '#ECFEFF' : '#38BDF8'} strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="0" cy="0" r="0.9" fill={glow ? '#ECFEFF' : '#38BDF8'} />
    {/* Bouton latéral */}
    <rect x="8" y="-2" width="2.4" height="4" rx="1" fill="#94A3B8" stroke={INK} strokeWidth="1" />
  </g>
);

/**
 * Gant blanc de dessin animé. Repère : poignet en (0,0), la main s'étend vers -y.
 * kind : open (main ouverte, paume vers l'élève), fist (poing), point (index tendu).
 */
const Glove: React.FC<{ x: number; y: number; rotate?: number; kind?: 'open' | 'fist' | 'point' | 'thumb'; watch?: boolean; glowWatch?: boolean }> = ({
  x, y, rotate = 0, kind = 'fist', watch, glowWatch,
}) => (
  <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
    {watch && <Watch glow={glowWatch} />}
    {kind === 'open' && (
      <>
        {/* Doigts en éventail */}
        {[
          { x: -9.5, h: 13, r: -16 },
          { x: -3.3, h: 15.5, r: -5 },
          { x: 3.1, h: 15.5, r: 5 },
          { x: 9.2, h: 12.5, r: 15 },
        ].map((f, i) => (
          <rect key={i} x={f.x - 3.4} y={-17 - f.h} width="6.8" height={f.h + 4} rx="3.4" fill={WHITE} stroke={INK} strokeWidth="2" transform={`rotate(${f.r} ${f.x} -17)`} />
        ))}
        {/* Pouce */}
        <ellipse cx="-12.5" cy="-11" rx="4.2" ry="7" transform="rotate(-42 -12.5 -11)" fill={WHITE} stroke={INK} strokeWidth="2" />
        {/* Paume */}
        <ellipse cx="0" cy="-13" rx="11.5" ry="9.5" fill={WHITE} stroke={INK} strokeWidth="2" />
        {/* Coutures du gant */}
        <path d="M-4 -17 L-4.5 -11 M0 -18 L0 -11.5 M4 -17 L4.5 -11" stroke={INK} strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.55" />
      </>
    )}
    {kind === 'fist' && (
      <>
        <ellipse cx="0" cy="-11" rx="10" ry="9.5" fill={WHITE} stroke={INK} strokeWidth="2" />
        <path d="M-6 -18 Q-3 -15 0 -18 Q3 -15 6 -18" fill="none" stroke={INK} strokeWidth="1.4" strokeLinecap="round" />
        <ellipse cx="-8.5" cy="-8.5" rx="3.6" ry="5.5" transform="rotate(-25 -8.5 -8.5)" fill={WHITE} stroke={INK} strokeWidth="1.8" />
      </>
    )}
    {kind === 'thumb' && (
      <>
        {/* Pouce bien dressé */}
        <path d="M-13 -24 L-13 -40 Q-13 -47 -6.5 -47 Q0 -47 0 -40 L0 -24 Z" fill={WHITE} stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M-9.5 -42 Q-6.5 -44 -3.5 -42" fill="none" stroke={INK} strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5" />
        {/* Poing, doigts repliés vers l'élève */}
        <rect x="-14" y="-28" width="28" height="25" rx="9" fill={WHITE} stroke={INK} strokeWidth="2.2" />
        <path d="M-6 -21 Q4 -23 12 -21 M-6 -15 Q4 -17 12 -15 M-6 -9 Q3 -11 11 -9" fill="none" stroke={INK} strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.75" />
        <path d="M-14 -16 Q-9 -14 -6 -21" fill="none" stroke={INK} strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.75" />
      </>
    )}
    {kind === 'point' && (
      <>
        <rect x="-3.4" y="-33" width="6.8" height="18" rx="3.4" fill={WHITE} stroke={INK} strokeWidth="2" />
        <ellipse cx="0" cy="-11" rx="10" ry="9" fill={WHITE} stroke={INK} strokeWidth="2" />
        <path d="M-1 -17 Q2 -14 5 -17" fill="none" stroke={INK} strokeWidth="1.3" strokeLinecap="round" />
        <ellipse cx="-8.5" cy="-8.5" rx="3.6" ry="5.5" transform="rotate(-25 -8.5 -8.5)" fill={WHITE} stroke={INK} strokeWidth="1.8" />
      </>
    )}
    {/* Revers du gant */}
    <rect x="-8.5" y="-4.5" width="17" height="8" rx="3.5" fill={WHITE} stroke={INK} strokeWidth="2" />
    <path d="M-6.5 -0.5 L6.5 -0.5" stroke={INK} strokeWidth="1.1" strokeOpacity="0.45" />
  </g>
);

/** Basket vue de face (au sol vers y = 213). */
const Sneaker: React.FC<{ x: number }> = ({ x }) => (
  <g transform={`translate(${x} 0)`}>
    {/* Chaussette */}
    <rect x="-6.5" y="181" width="13" height="13" rx="3" fill={WHITE} stroke={INK} strokeWidth="2" />
    <path d="M-6 186 L6 186" stroke={LIMB} strokeWidth="2.2" />
    {/* Dessus de la chaussure */}
    <path d="M-17 206 Q-18 195 -9 191 Q0 187.5 9 191 Q18 195 17 206 Z" fill={SHOE} stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
    <path d="M-15 202 Q-14 196 -9 193.5" fill="none" stroke="#6AA8F5" strokeWidth="1.6" strokeLinecap="round" />
    {/* Languette */}
    <rect x="-5" y="187" width="10" height="7" rx="2.5" fill={SHOE_DARK} stroke={INK} strokeWidth="1.6" />
    {/* Lacets croisés et œillets */}
    <path d="M-5.5 194.5 L5.5 198.5 M5.5 194.5 L-5.5 198.5" stroke={WHITE} strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="-6" cy="194.5" r="1" fill={INK} /><circle cx="6" cy="194.5" r="1" fill={INK} />
    <circle cx="-6" cy="198.5" r="1" fill={INK} /><circle cx="6" cy="198.5" r="1" fill={INK} />
    {/* Bout blanc */}
    <path d="M-11 206 Q0 196.5 11 206 Z" fill={WHITE} stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
    {/* Semelle */}
    <rect x="-19" y="205" width="38" height="8.5" rx="4" fill={WHITE} stroke={INK} strokeWidth="2.2" />
    <path d="M-16 209.5 L16 209.5" stroke="#CBD5E1" strokeWidth="1.4" />
  </g>
);

export const KonanMascot: React.FC<KonanMascotProps> = ({ pose = 'idle', size = 160, className = '' }) => {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  const front = `kmFront${uid}`;
  const top = `kmTop${uid}`;
  const holo = `kmHolo${uid}`;
  const mouthClip = `kmMouth${uid}`;

  // Regard : droit vers l'élève, sauf en prise de notes (vers la montre, en bas à droite)
  const look = pose === 'notes' ? { x: 3, y: 4 } : { x: 0, y: 0 };
  const openMouth = pose === 'wave' || pose === 'jump' || pose === 'done';

  const eye = (cx: number) => (
    <g>
      <ellipse cx={cx} cy={80} rx="11.5" ry="14" fill={WHITE} stroke={INK} strokeWidth="2.8" />
      <circle cx={cx + look.x} cy={82 + look.y} r="7" fill="#0A0F1A" />
      <circle cx={cx + look.x - 2.4} cy={78.8 + look.y} r="2.5" fill={WHITE} />
      <circle cx={cx + look.x + 2.2} cy={85 + look.y} r="1" fill={WHITE} fillOpacity="0.8" />
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

  // Bras (épaules en (60,106) et (160,106)) et mains selon la pose
  const arms = (() => {
    if (pose === 'wave') {
      return (
        <>
          <g className="km-wave-arm">
            <Limb d="M60 106 Q40 97 37 76" />
            <Glove x={37} y={76} rotate={-8} kind="open" />
          </g>
          <Limb d="M160 106 Q176 122 176 142" />
          <Glove x={176} y={142} rotate={180} kind="fist" watch />
        </>
      );
    }
    if (pose === 'jump') {
      return (
        <>
          <Limb d="M60 106 Q42 93 37 76" />
          <Glove x={37} y={76} rotate={-24} kind="open" />
          <Limb d="M160 106 Q178 93 183 76" />
          <Glove x={183} y={76} rotate={24} kind="open" watch />
        </>
      );
    }
    if (pose === 'notes') {
      return (
        <>
          {/* Avant-bras ramené devant le corps : montre bien visible */}
          <Limb d="M160 108 Q196 124 176 150" />
          <Glove x={176} y={150} rotate={-90} kind="fist" watch glowWatch />
          {/* Index qui écrit sur la montre */}
          <g className="km-tap">
            <Limb d="M60 108 Q66 170 140 168" />
            <Glove x={140} y={168} rotate={62} kind="point" />
          </g>
        </>
      );
    }
    if (pose === 'done') {
      return (
        <>
          <Limb d="M60 106 Q44 122 44 142" />
          <Glove x={44} y={142} rotate={180} kind="fist" />
          {/* Bras levé, pouce en l'air, montre au poignet */}
          <g className="km-thumb-arm">
            <Limb d="M160 106 Q194 110 188 84" />
            <Glove x={188} y={84} rotate={4} kind="thumb" watch />
          </g>
        </>
      );
    }
    return (
      <>
        <Limb d="M60 106 Q44 122 44 142" />
        <Glove x={44} y={142} rotate={180} kind="fist" />
        <Limb d="M160 106 Q176 122 176 142" />
        <Glove x={176} y={142} rotate={180} kind="fist" watch />
      </>
    );
  })();

  const body = (
    <g className={pose === 'jump' ? 'km-jump' : undefined}>
      {/* Jambes et baskets */}
      <Limb d="M104 130 L102 184" width={6.5} />
      <Limb d="M130 130 L132 184" width={6.5} />
      <Sneaker x={101} />
      <Sneaker x={133} />

      {/* Cube : dessus, côté gauche, face avant */}
      <polygon points="58,24 144,24 160,46 74,46" fill={`url(#${top})`} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <polygon points="58,24 74,46 74,132 58,110" fill="#2B8FDB" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M62 33 L62 108" stroke="#5FB4F0" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.7" />
      <rect x="74" y="46" width="86" height="86" rx="5" fill={`url(#${front})`} stroke={INK} strokeWidth="3" />
      <path d="M80 52 L154 52 M80 52 L80 120" stroke={WHITE} strokeOpacity="0.5" strokeWidth="2.6" strokeLinecap="round" />
      {/* Lettres K posées à plat sur chaque face (même perspective que le cube : profondeur 16 × 22) */}
      <text transform="matrix(1 0 0.727 1 114.2 42.2)" textAnchor="middle" fontSize="20" fontWeight="900" fill="#1D4F91" stroke="#1D4F91" strokeWidth="0.6" strokeLinejoin="round" fontFamily="Arial Black, Arial, sans-serif">K</text>
      <text transform="matrix(0.36 0.5 0 0.9 66 91.5)" textAnchor="middle" fontSize="42" fontWeight="900" fill="#164985" fontFamily="Arial Black, Arial, sans-serif">K</text>

      {/* Visage */}
      <ellipse cx="88" cy="101" rx="6" ry="3.4" fill="#FB7185" fillOpacity="0.35" />
      <ellipse cx="146" cy="101" rx="6" ry="3.4" fill="#FB7185" fillOpacity="0.35" />
      <path d="M91 63 Q100 56.5 109 62 M125 62 Q134 56.5 143 63" fill="none" stroke={INK} strokeWidth="3.2" strokeLinecap="round" />
      <g className="km-blink">
        {eye(100)}
        {eye(134)}
      </g>
      {pose === 'jump' && (
        <>
          {sparkle(100, 81, 'km-sparkle')}
          {sparkle(134, 81, 'km-sparkle-2')}
          {sparkle(162, 34, 'km-sparkle')}
          {sparkle(62, 20, 'km-sparkle-2')}
        </>
      )}
      {openMouth ? (
        <g>
          <clipPath id={mouthClip}>
            <path d="M101 102 Q117 98 133 102 Q131 121 117 122 Q103 121 101 102 Z" />
          </clipPath>
          <path d="M101 102 Q117 98 133 102 Q131 121 117 122 Q103 121 101 102 Z" fill="#7F1D1D" />
          <g clipPath={`url(#${mouthClip})`}>
            {/* Dents du haut */}
            <rect x="100" y="97" width="34" height="9" fill={WHITE} />
            <path d="M111 99 L111 106 M117 99 L117 106.5 M123 99 L123 106" stroke="#CBD5E1" strokeWidth="1" />
            {/* Langue */}
            <ellipse cx="117" cy="121" rx="11" ry="7" fill="#FB7185" />
          </g>
          <path d="M101 102 Q117 98 133 102 Q131 121 117 122 Q103 121 101 102 Z" fill="none" stroke={INK} strokeWidth="2.6" strokeLinejoin="round" />
        </g>
      ) : (
        <path d="M102 103 Q117 116 132 103" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      )}

      {/* Bras et mains (devant le corps) */}
      {arms}

      {/* Tout est noté : l'hologramme se replie dans la montre */}
      {pose === 'done' && (
        <g className="km-holo-close">
          <polygon points="183,90 191,90 214,40 160,40" fill={`url(#${holo})`} opacity="0.55" />
          <rect x="156" y="4" width="62" height="38" rx="6" fill="#22D3EE" fillOpacity="0.16" stroke="#22D3EE" strokeWidth="2" />
          <path d="M164 14 L206 14 M164 23 L198 23 M164 32 L206 32" stroke="#CFFAFE" strokeWidth="2.8" strokeLinecap="round" />
        </g>
      )}

      {/* Hologramme projeté par la montre */}
      {pose === 'notes' && (
        <g className="km-holo">
          <polygon points="183,146 191,146 210,82 152,82" fill={`url(#${holo})`} opacity="0.55" />
          <rect x="148" y="42" width="62" height="40" rx="6" fill="#22D3EE" fillOpacity="0.16" stroke="#22D3EE" strokeWidth="2" />
          <rect x="148" y="42" width="62" height="40" rx="6" fill="none" stroke="#A5F3FC" strokeWidth="0.8" strokeOpacity="0.8" transform="translate(2 2) scale(0.97)" />
          <path className="km-line" d="M156 53 L198 53" stroke="#CFFAFE" strokeWidth="2.8" strokeLinecap="round" />
          <path className="km-line km-line-2" d="M156 62 L190 62" stroke="#CFFAFE" strokeWidth="2.8" strokeLinecap="round" />
          <path className="km-line km-line-3" d="M156 71 L198 71" stroke="#CFFAFE" strokeWidth="2.8" strokeLinecap="round" />
        </g>
      )}
    </g>
  );

  return (
    <svg
      viewBox="0 0 220 240"
      width={size}
      height={(size * 240) / 220}
      className={`km-root overflow-visible ${className}`}
      role="img"
      aria-label={
        pose === 'wave' ? 'KONAN te salue' : pose === 'jump' ? 'KONAN saute de joie' : pose === 'notes' ? 'KONAN prend des notes sur sa montre' : pose === 'done' ? 'KONAN lève le pouce : tout est prêt' : 'KONAN'
      }
    >
      <style>{CSS}</style>
      <defs>
        <linearGradient id={front} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7AD9FB" />
          <stop offset="100%" stopColor="#36ADEB" />
        </linearGradient>
        <linearGradient id={top} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#B4E9FD" />
          <stop offset="100%" stopColor="#7FD3F8" />
        </linearGradient>
        <linearGradient id={holo} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Ombre au sol */}
      <ellipse className={pose === 'jump' ? 'km-jump-shadow' : undefined} cx="117" cy="215" rx="52" ry="7" fill="#0B2545" fillOpacity="0.25" />
      <g className="km-pop">{body}</g>
      {/* Étoiles qui tournent autour de KONAN quand tout est prêt */}
      {pose === 'done' && (
        <g className="km-orbit-in">
          <g className="km-orbit">
            {[
              { x: 117, y: 14, r: 1 },
              { x: 209, y: 112, r: 0.8 },
              { x: 117, y: 208, r: 0.9 },
              { x: 25, y: 112, r: 0.75 },
              { x: 182, y: 44, r: 0.6 },
              { x: 52, y: 180, r: 0.6 },
            ].map((s, i) => (
              <path
                key={i}
                className="km-twinkle"
                style={{ transformOrigin: `${s.x}px ${s.y}px`, animationDelay: `${i * 0.23}s` }}
                d={`M${s.x} ${s.y - 9 * s.r} L${s.x + 2.6 * s.r} ${s.y - 2.6 * s.r} L${s.x + 9 * s.r} ${s.y} L${s.x + 2.6 * s.r} ${s.y + 2.6 * s.r} L${s.x} ${s.y + 9 * s.r} L${s.x - 2.6 * s.r} ${s.y + 2.6 * s.r} L${s.x - 9 * s.r} ${s.y} L${s.x - 2.6 * s.r} ${s.y - 2.6 * s.r} Z`}
                fill="#FDE047"
                stroke="#F59E0B"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            ))}
          </g>
        </g>
      )}
    </svg>
  );
};
