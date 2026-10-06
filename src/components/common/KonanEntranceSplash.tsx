import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export interface KonanEntranceSplashProps {
  onComplete?: () => void;
  forcePlay?: boolean;
}

interface SparkleParticle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  delay: number;
}

export const KonanEntranceSplash: React.FC<KonanEntranceSplashProps> = ({
  onComplete,
  forcePlay = false,
}) => {
  const [phase, setPhase] = useState<'jump' | 'land' | 'settle' | 'done'>('jump');
  const [showSparkles, setShowSparkles] = useState<boolean>(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);

  // Générer des étincelles/étoiles radiantes lors de l'atterrissage du cube
  const sparkles: SparkleParticle[] = React.useMemo(() => {
    const colors = ['#38bdf8', '#fbbf24', '#818cf8', '#34d399', '#fde047', '#60a5fa'];
    return Array.from({ length: 14 }).map((_, i) => {
      const angle = (i / 14) * 2 * Math.PI;
      const distance = 45 + (i % 3) * 20;
      return {
        id: i,
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        color: colors[i % colors.length],
        size: 10 + (i % 3) * 4,
        delay: (i % 4) * 40,
      };
    });
  }, []);

  useEffect(() => {
    // Vérifier si l'animation a déjà été jouée durant cette session de navigation
    if (!forcePlay) {
      const alreadyPlayed = sessionStorage.getItem('konan_entrance_splash_played');
      if (alreadyPlayed) {
        setIsDismissed(true);
        onComplete?.();
        return;
      }
    }

    // 1. Décollage & Saut 360° (0ms -> 1100ms)
    const timerJump = setTimeout(() => {
      // 2. Atterrissage (1100ms) -> déclenchement des sparks
      setPhase('land');
      setShowSparkles(true);
    }, 1100);

    // 3. Retour en arrière vers la position d'origine + défloutage (1550ms -> 2200ms)
    const timerSettle = setTimeout(() => {
      setPhase('settle');
    }, 1550);

    // 4. Fin de l'animation & libération complète de l'écran (2250ms)
    const timerDone = setTimeout(() => {
      setPhase('done');
      setIsDismissed(true);
      sessionStorage.setItem('konan_entrance_splash_played', 'true');
      onComplete?.();
    }, 2250);

    return () => {
      clearTimeout(timerJump);
      clearTimeout(timerSettle);
      clearTimeout(timerDone);
    };
  }, [forcePlay, onComplete]);

  // Possibilité de passer l'animation au clic
  const handleSkip = () => {
    setIsDismissed(true);
    sessionStorage.setItem('konan_entrance_splash_played', 'true');
    onComplete?.();
  };

  if (isDismissed || phase === 'done') return null;

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-700 select-none ${
        phase === 'settle'
          ? 'bg-slate-950/0 backdrop-blur-none pointer-events-none'
          : 'bg-slate-950/85 backdrop-blur-xl pointer-events-auto cursor-pointer'
      }`}
      style={{ perspective: 1200 }}
      title="Cliquez pour passer l'animation"
    >
      {/* Halo lumineux d'ambiance au centre */}
      <div 
        className={`absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-sky-500/20 via-indigo-500/20 to-purple-500/20 blur-3xl pointer-events-none transition-opacity duration-700 ${
          phase === 'settle' ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* CONTENEUR DU CUBE AVEC ANIMATIONS CHORÉGRAPHIÉES */}
      <div className="relative flex items-center justify-center">
        
        {/* Le Cube Konan (Saut + Rotation 360° + Atterrissage + Retour en arrière) */}
        <div
          className={`relative z-20 flex items-center justify-center transition-all duration-700 ${
            phase === 'jump'
              ? 'animate-konan-cube-jump'
              : phase === 'land'
              ? 'animate-konan-cube-land'
              : 'animate-konan-cube-settle'
          }`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Lueur externe pulsante autour du logo */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 opacity-60 blur-xl animate-pulse" />

          {/* Cube emblème 3D Konan */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-[2.5px] bg-slate-950 border border-sky-400/60 shadow-2xl shadow-sky-500/40 flex items-center justify-center overflow-hidden">
            <img
              src="/konan-logo.png"
              alt="Logo Konan AI"
              className="w-full h-full object-contain rounded-full bg-slate-950"
            />
          </div>
        </div>

        {/* ÉTOILES / SPARKS RAYONNANTS LORS DE L'ATTERRISSAGE */}
        {showSparkles && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-30">
            {sparkles.map((spark) => (
              <div
                key={spark.id}
                className="absolute animate-spark-burst"
                style={{
                  transform: `translate(${spark.x}px, ${spark.y}px)`,
                  animationDelay: `${spark.delay}ms`,
                }}
              >
                <Sparkles 
                  className="w-4 h-4 fill-current drop-shadow-[0_0_8px_currentColor]"
                  style={{ color: spark.color }}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Petit texte d'accueil discret avant révélation */}
      <div 
        className={`absolute bottom-12 text-center transition-all duration-500 ${
          phase === 'settle' ? 'opacity-0 translate-y-4' : 'opacity-80 translate-y-0'
        }`}
      >
        <p className="text-xs font-semibold text-slate-300 tracking-wider uppercase font-mono">
          KONAN AI
        </p>
        <p className="text-[11px] text-slate-500 mt-0.5">
          Cliquez n'importe où pour passer
        </p>
      </div>
    </div>
  );
};
