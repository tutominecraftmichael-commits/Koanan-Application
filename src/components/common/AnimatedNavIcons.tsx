import React, { useState } from 'react';

interface AnimatedIconProps {
  className?: string;
  isActive?: boolean;
}

/**
 * 1. TABLEAU DE BORD (Stack / Layers) :
 * Chaque couche du stack saute une à une de bas en haut (ou haut en bas)
 * et retourne à sa position initiale avec un rebond élastique dès qu'on le touche ou survole.
 */
export const AnimatedDashboardIcon: React.FC<AnimatedIconProps> = ({ className = 'w-4 h-4', isActive = false }) => {
  const [isTriggered, setIsTriggered] = useState(false);

  const handleTrigger = () => {
    setIsTriggered(true);
    setTimeout(() => setIsTriggered(false), 900);
  };

  return (
    <div 
      className="relative flex items-center justify-center cursor-pointer select-none"
      onMouseEnter={handleTrigger}
      onTouchStart={handleTrigger}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`${className} transition-colors duration-200 overflow-visible`}
      >
        {/* Layer 1 - Haut (Top plate) */}
        <polygon
          points="12 2 2 7 12 12 22 7"
          className={`transition-all duration-300 origin-center ${
            isTriggered ? 'animate-stack-jump-top' : 'group-hover:animate-stack-jump-top'
          }`}
          fill={isActive ? 'currentColor' : 'none'}
          fillOpacity={isActive ? 0.35 : 0}
        />

        {/* Layer 2 - Milieu (Middle plate) */}
        <path
          d="M2 12l10 5 10-5"
          className={`transition-all duration-300 origin-center ${
            isTriggered ? 'animate-stack-jump-mid' : 'group-hover:animate-stack-jump-mid'
          }`}
        />

        {/* Layer 3 - Bas (Bottom plate) */}
        <path
          d="M2 17l10 5 10-5"
          className={`transition-all duration-300 origin-center ${
            isTriggered ? 'animate-stack-jump-bot' : 'group-hover:animate-stack-jump-bot'
          }`}
        />
      </svg>
    </div>
  );
};

/**
 * 2. MATIÈRES (Cahier / BookOpen) :
 * Lorsqu'on clique ou touche ce bouton, une page du cahier se soulève et se tourne (flip 3D),
 * puis revient doucement et élégamment à sa position initiale.
 */
export const AnimatedSubjectsIcon: React.FC<AnimatedIconProps> = ({ className = 'w-4 h-4', isActive = false }) => {
  const [isFlipping, setIsFlipping] = useState(false);

  const handleFlip = () => {
    setIsFlipping(true);
    setTimeout(() => setIsFlipping(false), 950);
  };

  return (
    <div 
      className="relative flex items-center justify-center cursor-pointer select-none perspective-[600px]"
      onClick={handleFlip}
      onMouseEnter={handleFlip}
      onTouchStart={handleFlip}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`${className} transition-colors duration-200 overflow-visible`}
      >
        {/* Reliure centrale du cahier */}
        <line x1="12" y1="4" x2="12" y2="20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1 1.5" />

        {/* Page gauche fixe */}
        <path
          d="M4 19.5A2.5 2.5 0 0 1 6.5 17H12V4H6.5A2.5 2.5 0 0 0 4 6.5v13z"
          fill={isActive ? 'currentColor' : 'none'}
          fillOpacity={isActive ? 0.25 : 0}
        />
        {/* Lignes du cahier gauche */}
        <line x1="6.5" y1="9" x2="10" y2="9" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="6.5" y1="13" x2="9.5" y2="13" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />

        {/* Page droite fixe */}
        <path
          d="M20 19.5A2.5 2.5 0 0 0 17.5 17H12V4h5.5A2.5 2.5 0 0 1 20 6.5v13z"
          fill={isActive ? 'currentColor' : 'none'}
          fillOpacity={isActive ? 0.25 : 0}
        />
        {/* Lignes du cahier droite */}
        <line x1="14" y1="9" x2="17.5" y2="9" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="14" y1="13" x2="17" y2="13" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />

        {/* Page mobile animée qui se tourne (Page Turn 3D) */}
        <g
          className={`origin-[12px_12px] transition-transform ${
            isFlipping ? 'animate-book-page-turn' : 'group-hover:animate-book-page-turn'
          }`}
          style={{ transformOrigin: '12px 12px' }}
        >
          <path
            d="M12 4h5.5A2.5 2.5 0 0 1 20 6.5v13A2.5 2.5 0 0 0 17.5 17H12z"
            fill="currentColor"
            fillOpacity={0.4}
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
};

/**
 * 3. PROGRESSION / ANALYTICS (BarChart) :
 * Lorsqu'on clique ou touche, les barres statistiques s'affaissent brièvement
 * puis montent en cascade l'une après l'autre avec rebond pour atteindre leur hauteur initiale.
 */
export const AnimatedAnalyticsIcon: React.FC<AnimatedIconProps> = ({ className = 'w-4 h-4', isActive = false }) => {
  const [isRising, setIsRising] = useState(false);

  const handleRise = () => {
    setIsRising(true);
    setTimeout(() => setIsRising(false), 900);
  };

  return (
    <div 
      className="relative flex items-center justify-center cursor-pointer select-none"
      onClick={handleRise}
      onMouseEnter={handleRise}
      onTouchStart={handleRise}
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`${className} transition-colors duration-200 overflow-visible`}
      >
        {/* Barre 1 (Gauche - Petite/Moyenne) */}
        <rect
          x="3"
          y="11"
          width="4"
          height="9"
          rx="1.5"
          className={`origin-bottom transition-transform ${
            isRising ? 'animate-bar-shoot-1' : 'group-hover:animate-bar-shoot-1'
          }`}
          style={{ transformOrigin: '5px 20px' }}
          opacity={isActive ? 0.95 : 0.8}
        />

        {/* Barre 2 (Milieu - Grande) */}
        <rect
          x="10"
          y="5"
          width="4"
          height="15"
          rx="1.5"
          className={`origin-bottom transition-transform ${
            isRising ? 'animate-bar-shoot-2' : 'group-hover:animate-bar-shoot-2'
          }`}
          style={{ transformOrigin: '12px 20px' }}
          opacity={isActive ? 1 : 0.85}
        />

        {/* Barre 3 (Droite - Moyenne/Grande) */}
        <rect
          x="17"
          y="8"
          width="4"
          height="12"
          rx="1.5"
          className={`origin-bottom transition-transform ${
            isRising ? 'animate-bar-shoot-3' : 'group-hover:animate-bar-shoot-3'
          }`}
          style={{ transformOrigin: '19px 20px' }}
          opacity={isActive ? 0.95 : 0.8}
        />
      </svg>
    </div>
  );
};

/**
 * 4. EMPLOI DU TEMPS (Calendar) :
 * Animation de calendrier avec rebond et rotation subtile.
 */
export const AnimatedScheduleIcon: React.FC<AnimatedIconProps> = ({ className = 'w-4 h-4', isActive = false }) => {
  return (
    <div className="relative flex items-center justify-center cursor-pointer select-none">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`${className} transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110 overflow-visible`}
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" fill={isActive ? 'currentColor' : 'none'} fillOpacity={isActive ? 0.15 : 0} />
        <line x1="16" y1="2" x2="16" y2="6" className="group-hover:-translate-y-0.5 transition-transform" />
        <line x1="8" y1="2" x2="8" y2="6" className="group-hover:-translate-y-0.5 transition-transform" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <circle cx="8" cy="15" r="1" fill="currentColor" />
        <circle cx="12" cy="15" r="1" fill="currentColor" />
        <circle cx="16" cy="15" r="1" fill="currentColor" />
      </svg>
    </div>
  );
};

/**
 * 5. PLANNING (Study Plan / Clock) :
 * Animation d'horloge avec rotation fluide des aiguilles au survol ou au clic.
 */
export const AnimatedPlannerIcon: React.FC<AnimatedIconProps> = ({ className = 'w-4 h-4', isActive = false }) => {
  return (
    <div className="relative flex items-center justify-center cursor-pointer select-none">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`${className} transition-transform duration-300 group-hover:scale-115 overflow-visible`}
      >
        <circle cx="12" cy="12" r="10" fill={isActive ? 'currentColor' : 'none'} fillOpacity={isActive ? 0.15 : 0} />
        <polyline 
          points="12 6 12 12 16 14" 
          className="origin-[12px_12px] group-hover:animate-clock-spin"
          style={{ transformOrigin: '12px 12px' }}
        />
      </svg>
    </div>
  );
};
