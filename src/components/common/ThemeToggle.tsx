import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { soundFX } from '../../lib/audioEffects';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', showLabel = false }) => {
  const { toggleTheme, isLight } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAnimating(true);
    soundFX.playCheckmarkPop();
    toggleTheme();
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={isLight ? "Passer en mode sombre (fond noir)" : "Passer en mode clair (fond blanc)"}
      title={isLight ? "Passer en Mode Sombre (Fond Noir)" : "Passer en Mode Clair (Fond Blanc)"}
      className={`group relative flex items-center justify-center gap-2 p-2 sm:p-2.5 rounded-full border transition-all duration-300 cursor-pointer shadow-sm active:scale-90 ${
        isLight
          ? 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 border-amber-300/50 shadow-amber-500/10'
          : 'bg-slate-900/80 hover:bg-slate-800 border-slate-800 hover:border-indigo-500/40 text-slate-300 hover:text-white shadow-indigo-500/5'
      } ${className}`}
    >
      {/* Halo lumineux d'arrière-plan */}
      <span 
        className={`absolute inset-0 rounded-full transition-opacity duration-300 blur-sm pointer-events-none ${
          isLight ? 'bg-amber-400/20 opacity-100' : 'bg-indigo-500/15 opacity-0 group-hover:opacity-100'
        }`} 
      />

      {/* Icône animée Soleil / Lune */}
      <div className={`relative w-4 h-4 sm:w-4.5 sm:h-4.5 flex items-center justify-center transition-transform duration-500 ease-out ${
        isAnimating ? 'rotate-[360deg] scale-110' : 'group-hover:rotate-12'
      }`}>
        {isLight ? (
          /* SOLEIL DU MODE CLAIR */
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-full h-full text-amber-500 transition-transform duration-300 group-hover:scale-110"
          >
            {/* Disque solaire central */}
            <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.3" />
            {/* Rayons solaires rotatifs */}
            <path 
              d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" 
              className="animate-spin-slow origin-center" 
              style={{ animationDuration: '20s' }}
            />
          </svg>
        ) : (
          /* LUNE DU MODE SOMBRE */
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-full h-full text-indigo-300 group-hover:text-amber-300 transition-colors duration-300"
          >
            <path 
              d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" 
              fill="currentColor" 
              fillOpacity="0.25"
            />
            {/* Étoile scintillante */}
            <circle cx="19" cy="5" r="1" fill="#FCD34D" className="animate-pulse" />
            <circle cx="15" cy="4" r="0.75" fill="#38BDF8" className="animate-pulse" style={{ animationDelay: '300ms' }} />
          </svg>
        )}
      </div>

      {showLabel && (
        <span className="text-xs font-bold whitespace-nowrap hidden sm:inline">
          {isLight ? 'Clair' : 'Sombre'}
        </span>
      )}
    </button>
  );
};
