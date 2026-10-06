import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { KonanCube } from './KonanCube';

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

  // Étincelles rayonnantes lors de l'atterrissage du Cube
  const sparkles: SparkleParticle[] = React.useMemo(() => {
    const colors = ['#38bdf8', '#0ea5e9', '#67e8f9', '#818cf8', '#bae6fd', '#34d399'];
    return Array.from({ length: 16 }).map((_, i) => {
      const angle = (i / 16) * 2 * Math.PI;
      const distance = 55 + (i % 3) * 22;
      return {
        id: i,
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        color: colors[i % colors.length],
        size: 12 + (i % 3) * 4,
        delay: (i % 4) * 35,
      };
    });
  }, []);

  useEffect(() => {
    // Vérifier si l'animation a déjà été visionnée lors de cette session
    if (!forcePlay) {
      const alreadyPlayed = sessionStorage.getItem('konan_entrance_splash_played');
      if (alreadyPlayed) {
        setIsDismissed(true);
        onComplete?.();
        return;
      }
    }

    // 1. Décollage & Saut 360° du Cube (0ms -> 1100ms)
    const timerJump = setTimeout(() => {
      // 2. Atterrissage élastique (1100ms) -> Explosion d'étoiles / étincelles
      setPhase('land');
      setShowSparkles(true);
    }, 1100);

    // 3. Stabilisation & fondu de sortie (1550ms -> 2200ms)
    const timerSettle = setTimeout(() => {
      setPhase('settle');
    }, 1550);

    // 4. Fin parfaite de l'animation & libération de l'interface (2200ms)
    const timerDone = setTimeout(() => {
      setPhase('done');
      setIsDismissed(true);
      sessionStorage.setItem('konan_entrance_splash_played', 'true');
      onComplete?.();
    }, 2200);

    return () => {
      clearTimeout(timerJump);
      clearTimeout(timerSettle);
      clearTimeout(timerDone);
    };
  }, [forcePlay, onComplete]);

  if (isDismissed || phase === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-700 select-none pointer-events-none ${
        phase === 'settle'
          ? 'bg-slate-950/0 backdrop-blur-none'
          : 'bg-slate-950/90 backdrop-blur-xl'
      }`}
      style={{ perspective: 1200 }}
    >
      {/* Halo atmosphérique radial bleu/cyan en arrière-plan */}
      <div 
        className={`absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-sky-500/25 via-cyan-500/20 to-blue-600/20 blur-3xl transition-opacity duration-700 ${
          phase === 'settle' ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      />

      {/* CONTENEUR DU CUBE AVEC ANIMATION CHORÉGRAPHIÉE */}
      <div className="relative flex items-center justify-center">
        
        {/* LE VÉRITABLE CUBE KONAN (Saut vertical + Rotation 360° + Atterrissage) */}
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
          {/* Lueur pulsante directe sous le cube */}
          <div className="absolute -inset-4 rounded-full bg-cyan-400/30 blur-2xl animate-pulse pointer-events-none" />

          {/* Rendu Vectoriel Épuré du Cube KONAN (Sans cercle ni bordure noire) */}
          <KonanCube 
            size={130} 
            showStars={true} 
            glow={false} 
            className="filter drop-shadow-[0_20px_35px_rgba(2,132,199,0.5)]"
          />
        </div>

        {/* ÉTOILES / ÉTINCELLES ÉCLATANTES LORS DE L'ATTERRISSAGE DU CUBE */}
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
                  className="w-4 h-4 fill-current drop-shadow-[0_0_10px_currentColor]"
                  style={{ color: spark.color }}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Titre discret de la marque lors du lancement */}
      <div 
        className={`absolute bottom-14 text-center transition-all duration-500 ${
          phase === 'settle' ? 'opacity-0 translate-y-4' : 'opacity-90 translate-y-0'
        }`}
      >
        <p className="text-xs font-black text-cyan-400 tracking-[0.25em] uppercase font-mono drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">
          KONAN AI
        </p>
      </div>
    </div>
  );
};
