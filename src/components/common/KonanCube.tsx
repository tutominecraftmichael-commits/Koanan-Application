import React from 'react';

export interface KonanCubeProps {
  size?: number | string;
  className?: string;
  showStars?: boolean;
  glow?: boolean;
}

export const KonanCube: React.FC<KonanCubeProps> = ({
  size = 120,
  className = '',
  showStars = true,
  glow = true,
}) => {
  return (
    <div 
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Halo lumineux d'arrière-plan */}
      {glow && (
        <div 
          className="absolute inset-2 rounded-full bg-cyan-400/30 blur-xl pointer-events-none animate-pulse" 
          style={{ filter: 'blur(22px)' }}
        />
      )}

      {/* Rendu Vectoriel Ultra-Net du Cube Officiel KONAN */}
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_12px_24px_rgba(14,165,233,0.35)] overflow-visible"
      >
        <defs>
          {/* Dégradé Face Supérieure (Reflet Glacé Lumineux) */}
          <linearGradient id="konanTopGrad" x1="44" y1="74" x2="156" y2="74" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#cffafe" />
            <stop offset="45%" stopColor="#bae6fd" />
            <stop offset="100%" stopColor="#7dd3fc" />
          </linearGradient>

          {/* Dégradé Face Gauche (Cyan Électrique) */}
          <linearGradient id="konanLeftGrad" x1="44" y1="74" x2="100" y2="170" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>

          {/* Dégradé Face Droite (Bleu Profond) */}
          <linearGradient id="konanRightGrad" x1="100" y1="106" x2="156" y2="170" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="50%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>

          {/* Dégradé Étoile Sparkle */}
          <linearGradient id="konanStarGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>

          {/* Filtre de lueur subtile */}
          <filter id="konanCubeFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#0284c7" floodOpacity="0.4" />
          </filter>
        </defs>

        <g filter="url(#konanCubeFilter)">
          {/* 1. ÉPAIS CONTOUR EXTERNE DU CUBE (Structure Navy Bleu Nuit) */}
          <path
            d="M 100 39 L 159 72.5 L 159 139.5 L 100 173 L 41 139.5 L 41 72.5 Z"
            fill="#09284d"
            stroke="#09284d"
            strokeWidth="9"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* 2. FACE SUPÉRIEURE DU CUBE */}
          <polygon
            points="100,42 156,74 100,106 44,74"
            fill="url(#konanTopGrad)"
            stroke="#09284d"
            strokeWidth="5"
            strokeLinejoin="round"
          />

          {/* Liseré interne de reflet (Face Supérieure) */}
          <polygon
            points="100,47 151,74 100,101 49,74"
            fill="none"
            stroke="#f0fdff"
            strokeWidth="1.6"
            strokeOpacity="0.75"
            strokeLinejoin="round"
          />

          {/* 3. FACE GAUCHE DU CUBE */}
          <polygon
            points="44,74 100,106 100,170 44,138"
            fill="url(#konanLeftGrad)"
            stroke="#09284d"
            strokeWidth="5"
            strokeLinejoin="round"
          />

          {/* Liseré interne de reflet (Face Gauche) */}
          <polygon
            points="48,77 96,105 96,164 48,135"
            fill="none"
            stroke="#e0f2fe"
            strokeWidth="1.6"
            strokeOpacity="0.6"
            strokeLinejoin="round"
          />

          {/* 4. FACE DROITE DU CUBE */}
          <polygon
            points="100,106 156,74 156,138 100,170"
            fill="url(#konanRightGrad)"
            stroke="#09284d"
            strokeWidth="5"
            strokeLinejoin="round"
          />

          {/* Liseré interne de reflet (Face Droite) */}
          <polygon
            points="104,105 152,77 152,135 104,164"
            fill="none"
            stroke="#bae6fd"
            strokeWidth="1.6"
            strokeOpacity="0.5"
            strokeLinejoin="round"
          />

          {/* 5. L'ARÊTE CENTRALE FRONTALE & Y DIVISION */}
          <line x1="100" y1="106" x2="100" y2="170" stroke="#09284d" strokeWidth="5.5" strokeLinecap="round" />
          <line x1="100" y1="106" x2="44" y2="74" stroke="#09284d" strokeWidth="5.5" strokeLinecap="round" />
          <line x1="100" y1="106" x2="156" y2="74" stroke="#09284d" strokeWidth="5.5" strokeLinecap="round" />

          {/* 6. LETTRE "K" SUR LA FACE SUPÉRIEURE (Perspective Isométrique) */}
          <g transform="translate(100, 74)">
            <g transform="rotate(-30) skewX(30) scale(0.85, 0.5)">
              <text
                x="0"
                y="10"
                textAnchor="middle"
                fontSize="42"
                fontWeight="900"
                fontFamily="system-ui, -apple-system, sans-serif"
                fill="#0a325e"
              >
                K
              </text>
            </g>
          </g>

          {/* 7. LETTRE "K" SUR LA FACE GAUCHE (Perspective Isométrique) */}
          <g transform="translate(71, 122)">
            <g transform="skewY(30) scale(0.9, 0.95)">
              <text
                x="0"
                y="5"
                textAnchor="middle"
                fontSize="44"
                fontWeight="900"
                fontFamily="system-ui, -apple-system, sans-serif"
                fill="#0a325e"
              >
                K
              </text>
            </g>
          </g>

          {/* 8. LETTRE "K" SUR LA FACE DROITE (Perspective Isométrique) */}
          <g transform="translate(129, 122)">
            <g transform="skewY(-30) scale(0.9, 0.95)">
              <text
                x="0"
                y="5"
                textAnchor="middle"
                fontSize="44"
                fontWeight="900"
                fontFamily="system-ui, -apple-system, sans-serif"
                fill="#0a325e"
              >
                K
              </text>
            </g>
          </g>

          {/* 9. DEUX ÉTOILES / ÉTINCELLES ICONIQUES DU LOGO KONAN */}
          {showStars && (
            <>
              {/* Étoile en haut à droite */}
              <g transform="translate(174, 46) scale(0.95)">
                <path
                  d="M 0 -13 Q 0 0 13 0 Q 0 0 0 13 Q 0 0 -13 0 Q 0 0 0 -13 Z"
                  fill="url(#konanStarGrad)"
                />
              </g>

              {/* Étoile en bas à gauche */}
              <g transform="translate(26, 154) scale(0.85)">
                <path
                  d="M 0 -12 Q 0 0 12 0 Q 0 0 0 12 Q 0 0 -12 0 Q 0 0 0 -12 Z"
                  fill="url(#konanStarGrad)"
                />
              </g>
            </>
          )}
        </g>
      </svg>
    </div>
  );
};
