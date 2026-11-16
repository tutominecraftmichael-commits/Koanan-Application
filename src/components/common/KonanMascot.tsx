import React from 'react';

/**
 * KONAN, la mascotte : le cube bleu du logo, avec un visage (charte Excellence, maquette validée le 2026-11-16).
 * Pas de bras, de jambes ni de montre : tout passe par le visage et le mouvement du cube.
 *
 * Poses :
 * - idle      : calme, cligne des yeux ;
 * - wave      : « Salut ! » — grand sourire, se balance de joie ;
 * - jump      : saute de joie, yeux rieurs, petits confettis ;
 * - notes     : réfléchit (regarde en l'air, trois petits points) ;
 * - done      : fier — yeux rieurs, étoiles qui tournent autour ;
 * - sad       : triste, se penche un peu ;
 * - sad_watch : triste, regarde en bas ;
 * - whoa      : surpris (grands yeux, bouche ronde), petit tremblement ;
 * - encourage : sourire doux, hoche la tête ;
 * - pause     : yeux fermés, respire lentement.
 */
export type KonanMascotPose = 'wave' | 'jump' | 'notes' | 'done' | 'idle'
  | 'sad'          // triste : « Tu es encore là ? »
  | 'sad_watch'    // triste, regarde en bas : « Je mets le chrono en pause… »
  | 'whoa'         // surpris : réponses au hasard
  | 'encourage'    // doux sourire : l'élève a du mal
  | 'pause'        // repos : pause Pomodoro
  | 'cta';         // invite à cliquer : regarde le bouton en dessous, petits sauts, flèche qui rebondit

interface KonanMascotProps {
  pose?: KonanMascotPose;
  /** Largeur en pixels (la hauteur suit) */
  size?: number;
  className?: string;
}

const INK = '#0B1530';
const TOP = '#BAE6FD';
const LEFT = '#38BDF8';
const RIGHT = '#0284C7';
const GOLD = '#F5C451';

// Animations communes (noms préfixés pour ne rien percuter), coupées si l'élève préfère moins de mouvement
const STYLES = `
@keyframes kcm-float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-3px) } }
@keyframes kcm-sway { 0%,100% { transform: rotate(0deg) } 25% { transform: rotate(-7deg) } 75% { transform: rotate(7deg) } }
@keyframes kcm-jump { 0%,100% { transform: translateY(0) scale(1,1) } 12% { transform: translateY(0) scale(1.06,0.92) } 40% { transform: translateY(-16px) scale(0.97,1.04) } 70% { transform: translateY(0) scale(1.05,0.94) } 82% { transform: translateY(-3px) scale(1,1) } }
@keyframes kcm-shadow { 0%,100% { transform: scale(1); opacity: .35 } 40% { transform: scale(.7); opacity: .18 } }
@keyframes kcm-nod { 0%,100% { transform: rotate(0deg) } 30% { transform: rotate(4deg) } 60% { transform: rotate(-2deg) } }
@keyframes kcm-shake { 0%,100% { transform: translateX(0) } 20% { transform: translateX(-2px) } 40% { transform: translateX(2px) } 60% { transform: translateX(-1.5px) } 80% { transform: translateX(1.5px) } }
@keyframes kcm-breathe { 0%,100% { transform: scale(1) } 50% { transform: scale(1.03) } }
@keyframes kcm-blink { 0%,92%,100% { transform: scaleY(1) } 95% { transform: scaleY(0.1) } }
@keyframes kcm-dots { 0%,100% { opacity: .25 } 50% { opacity: 1 } }
@keyframes kcm-spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
@keyframes kcm-hop { 0%,55%,100% { transform: translateY(0) } 65% { transform: translateY(-6px) } 75% { transform: translateY(0) } 85% { transform: translateY(-3px) } }
@keyframes kcm-arrow { 0%,100% { transform: translateY(0); opacity: .55 } 50% { transform: translateY(5px); opacity: 1 } }
@keyframes kcm-pop { 0% { transform: translateY(0) scale(.4); opacity: 0 } 30% { opacity: 1 } 100% { transform: translateY(-14px) scale(1); opacity: 0 } }
.kcm-body { transform-box: view-box; transform-origin: 60px 112px; }
.kcm-float { animation: kcm-float 3.2s ease-in-out infinite; }
.kcm-hop { animation: kcm-hop 2.4s ease-in-out infinite; }
.kcm-arrow { animation: kcm-arrow 1.1s ease-in-out infinite; }
.kcm-sway { animation: kcm-sway 1.4s ease-in-out 2; }
.kcm-jump { animation: kcm-jump 1.1s ease-in-out infinite; }
.kcm-nod { animation: kcm-nod 1.8s ease-in-out infinite; }
.kcm-shake { animation: kcm-shake .5s ease-in-out 2; }
.kcm-breathe { animation: kcm-breathe 3.6s ease-in-out infinite; }
.kcm-shadow { transform-box: fill-box; transform-origin: center; }
.kcm-shadow-jump { animation: kcm-shadow 1.1s ease-in-out infinite; }
.kcm-eye { transform-box: fill-box; transform-origin: center; animation: kcm-blink 4.5s ease-in-out infinite; }
.kcm-dot { animation: kcm-dots 1.2s ease-in-out infinite; }
.kcm-orbit { transform-box: view-box; transform-origin: 60px 64px; animation: kcm-spin 6s linear infinite; }
.kcm-pop { transform-box: fill-box; transform-origin: center; animation: kcm-pop 1.1s ease-out infinite; }
@media (prefers-reduced-motion: reduce) {
  .kcm-float, .kcm-hop, .kcm-arrow, .kcm-sway, .kcm-jump, .kcm-nod, .kcm-shake, .kcm-breathe, .kcm-shadow-jump, .kcm-eye, .kcm-dot, .kcm-orbit, .kcm-pop { animation: none !important; }
}
`;

/** Petite étoile à 4 branches */
const Sparkle: React.FC<{ x: number; y: number; r: number; fill: string; className?: string }> = ({ x, y, r, fill, className }) => (
  <path
    className={className}
    d={`M${x} ${y - r} L${x + r * 0.28} ${y - r * 0.28} L${x + r} ${y} L${x + r * 0.28} ${y + r * 0.28} L${x} ${y + r} L${x - r * 0.28} ${y + r * 0.28} L${x - r} ${y} L${x - r * 0.28} ${y - r * 0.28} Z`}
    fill={fill}
  />
);

export const KonanMascot: React.FC<KonanMascotProps> = ({ pose = 'idle', size = 160, className = '' }) => {
  const happyEyes = pose === 'jump' || pose === 'done';
  const closedEyes = pose === 'pause';
  const bigEyes = pose === 'whoa';
  const sadFace = pose === 'sad' || pose === 'sad_watch';
  // Direction du regard (décalage des pupilles)
  const look = pose === 'cta' ? { x: -1.3, y: 2.6 } : pose === 'notes' ? { x: 1.6, y: -2.2 } : pose === 'sad_watch' ? { x: 0.6, y: 2.2 } : { x: 1, y: 0.8 };

  const bodyAnim =
    pose === 'jump' ? 'kcm-jump'
    : pose === 'cta' ? 'kcm-hop'
    : pose === 'wave' ? 'kcm-sway'
    : pose === 'encourage' ? 'kcm-nod'
    : pose === 'whoa' ? 'kcm-shake'
    : pose === 'pause' ? 'kcm-breathe'
    : pose === 'sad' || pose === 'sad_watch' ? ''
    : 'kcm-float';
  const tilt = pose === 'sad' || pose === 'sad_watch' ? 'rotate(4 60 100)' : pose === 'wave' ? 'rotate(-4 60 100)' : undefined;

  const eye = (cx: number, cy: number) => {
    if (happyEyes) return <path d={`M${cx - 5} ${cy + 1} q5 -7 10 0`} fill="none" stroke={INK} strokeWidth={3} strokeLinecap="round" />;
    if (closedEyes) return <path d={`M${cx - 5} ${cy} q5 4 10 0`} fill="none" stroke={INK} strokeWidth={3} strokeLinecap="round" />;
    const rx = bigEyes ? 6 : 4.5;
    const ry = bigEyes ? 6.5 : 5.5;
    return (
      <g className={pose === 'idle' || pose === 'encourage' || pose === 'wave' ? 'kcm-eye' : undefined}>
        <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="#FFFFFF" />
        <circle cx={cx + look.x} cy={cy + look.y} r={bigEyes ? 2.2 : 2.5} fill={INK} />
        <circle cx={cx + look.x - 0.9} cy={cy + look.y - 1} r={0.8} fill="#FFFFFF" />
        {sadFace && <path d={`M${cx - 5.5} ${cy - 6} l11 ${cx < 40 ? 2.5 : 2.5}`} stroke={INK} strokeWidth={2.4} strokeLinecap="round" transform={`rotate(${cx < 40 ? -14 : -14} ${cx} ${cy - 5})`} />}
      </g>
    );
  };

  const mouth = (() => {
    if (pose === 'wave' || pose === 'jump' || pose === 'done' || pose === 'cta') {
      return (
        <g>
          <path d="M26 80 Q38 99 53 89 Z" fill={INK} stroke={INK} strokeWidth={2} strokeLinejoin="round" />
          <path d="M33 87 Q40 93 47 90" fill="none" stroke="#FB7185" strokeWidth={3} strokeLinecap="round" />
        </g>
      );
    }
    if (bigEyes) return <ellipse cx="39" cy="87" rx="3.6" ry="4.6" fill={INK} />;
    if (sadFace) return <path d="M29 91 Q38 83 49 88" fill="none" stroke={INK} strokeWidth={3} strokeLinecap="round" />;
    if (pose === 'pause' || pose === 'encourage') return <path d="M30 85 Q38 92 47 89" fill="none" stroke={INK} strokeWidth={3} strokeLinecap="round" />;
    if (pose === 'notes') return <path d="M32 87 Q38 89 45 88" fill="none" stroke={INK} strokeWidth={3} strokeLinecap="round" />;
    return <path d="M27 82 Q37 94 50 90" fill="none" stroke={INK} strokeWidth={3} strokeLinecap="round" />;
  })();

  return (
    <svg
      width={size}
      height={size * 1.1}
      viewBox="0 0 120 132"
      className={className}
      role="img"
      aria-label="KONAN, la mascotte"
      style={{ overflow: 'visible' }}
    >
      <style>{STYLES}</style>

      {/* Ombre au sol */}
      <ellipse className={`kcm-shadow ${pose === 'jump' ? 'kcm-shadow-jump' : ''}`} cx="60" cy="122" rx="30" ry="5" fill="#000000" opacity={0.3} />

      {/* Étoiles qui tournent (fier) */}
      {pose === 'done' && (
        <g className="kcm-orbit">
          <Sparkle x={12} y={40} r={6} fill={GOLD} />
          <Sparkle x={108} y={30} r={5} fill={LEFT} />
          <Sparkle x={104} y={100} r={4.5} fill={GOLD} />
          <Sparkle x={16} y={104} r={4} fill={LEFT} />
        </g>
      )}

      {/* Confettis (saut de joie) */}
      {pose === 'jump' && (
        <g>
          <rect className="kcm-pop" x="10" y="30" width="5" height="9" rx="1.5" fill={GOLD} transform="rotate(-24 12 34)" />
          <rect className="kcm-pop" x="104" y="24" width="5" height="9" rx="1.5" fill="#34D399" style={{ animationDelay: '.25s' }} />
          <circle className="kcm-pop" cx="20" cy="62" r="3" fill="#FB923C" style={{ animationDelay: '.5s' }} />
          <circle className="kcm-pop" cx="102" cy="58" r="3" fill={LEFT} style={{ animationDelay: '.7s' }} />
        </g>
      )}

      <g className={`kcm-body ${bodyAnim}`}>
        <g transform={tilt}>
          {/* Le cube */}
          <polygon points="60,14 104,38 60,62 16,38" fill={TOP} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          <polygon points="16,38 60,62 60,110 16,86" fill={LEFT} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          <polygon points="60,62 104,38 104,86 60,110" fill={RIGHT} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
          {/* Reflet discret sur le dessus */}
          <path d="M44 30 L60 22" stroke="#FFFFFF" strokeOpacity="0.55" strokeWidth="3" strokeLinecap="round" />

          {/* Visage */}
          {eye(30, 66)}
          {eye(46, 74)}
          {(pose === 'wave' || pose === 'jump' || pose === 'done' || pose === 'encourage') && (
            <>
              <ellipse cx="23" cy="77" rx="3.5" ry="2.4" fill="#F9A8D4" opacity="0.75" />
              <ellipse cx="53" cy="85" rx="3.5" ry="2.4" fill="#F9A8D4" opacity="0.75" />
            </>
          )}
          {mouth}
        </g>
      </g>

      {/* Réflexion : trois petits points au-dessus */}
      {pose === 'notes' && (
        <g>
          <circle className="kcm-dot" cx="86" cy="14" r="3.2" fill={LEFT} />
          <circle className="kcm-dot" cx="96" cy="9" r="3.2" fill={LEFT} style={{ animationDelay: '.2s' }} />
          <circle className="kcm-dot" cx="106" cy="4" r="3.2" fill={LEFT} style={{ animationDelay: '.4s' }} />
        </g>
      )}
      {/* Invitation : flèche bleue qui rebondit vers le bouton en dessous */}
      {pose === 'cta' && (
        <g className="kcm-arrow">
          <path d="M14 104 v14 M8 112 l6 7 6 -7" fill="none" stroke={LEFT} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
        </g>
      )}
      {/* Salut : petite étoile qui brille */}
      {pose === 'wave' && <Sparkle x={108} y={22} r={6} fill={GOLD} className="kcm-dot" />}
    </svg>
  );
};

export default KonanMascot;
