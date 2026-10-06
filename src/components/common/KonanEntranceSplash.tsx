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
  tier: 'free' | 'pro' | 'plus';
}

export const KonanEntranceSplash: React.FC<KonanEntranceSplashProps> = ({
  onComplete,
  forcePlay = false,
}) => {
  const [phase, setPhase] = useState<'flip' | 'land' | 'fade' | 'done'>('flip');
  const [showSparkles, setShowSparkles] = useState<boolean>(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);

  // Étoiles rayonnantes lors de l'atterrissage du Salto :
  // Bleu (FREE), Jaune (PRO), Multicolore (PLUS)
  const sparkles: SparkleParticle[] = React.useMemo(() => {
    const list: SparkleParticle[] = [];
    const blueColors = ['#38bdf8', '#0ea5e9', '#60a5fa', '#0284c7'];
    const yellowColors = ['#f59e0b', '#fbbf24', '#fde047', '#eab308'];
    const plusColors = ['#a855f7', '#ec4899', '#10b981', '#06b6d4'];

    // 12 étoiles réparties harmonieusement en cercle
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * 2 * Math.PI - Math.PI / 2;
      const distance = 58 + (i % 2) * 24;
      let color = '#38bdf8';
      let tier: 'free' | 'pro' | 'plus' = 'free';

      if (i % 3 === 0) {
        // Bleu -> FREE
        color = blueColors[Math.floor(i / 3) % blueColors.length];
        tier = 'free';
      } else if (i % 3 === 1) {
        // Jaune -> PRO
        color = yellowColors[Math.floor(i / 3) % yellowColors.length];
        tier = 'pro';
      } else {
        // Multicolore -> PLUS
        color = plusColors[Math.floor(i / 3) % plusColors.length];
        tier = 'plus';
      }

      list.push({
        id: i,
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        color,
        size: 14 + (i % 2) * 4,
        tier,
      });
    }

    return list;
  }, []);

  const handleDismiss = React.useCallback(() => {
    setIsDismissed(true);
    sessionStorage.setItem('konan_entrance_splash_played', 'true');
    onComplete?.();
  }, [onComplete]);

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

    // 1. Salto arrière en l'air (0ms -> 700ms)
    const timerLand = setTimeout(() => {
      // 2. Impact au sol -> Éclat d'étoiles (Bleu, Jaune, Multicolore)
      setPhase('land');
      setShowSparkles(true);
    }, 700);

    // 3. Fondu fluide et rapide vers l'application (900ms)
    const timerFade = setTimeout(() => {
      setPhase('fade');
    }, 900);

    // 4. Fin de l'animation & libération de l'écran (1100ms)
    const timerDone = setTimeout(() => {
      setPhase('done');
      setIsDismissed(true);
      sessionStorage.setItem('konan_entrance_splash_played', 'true');
      onComplete?.();
    }, 1100);

    return () => {
      clearTimeout(timerLand);
      clearTimeout(timerFade);
      clearTimeout(timerDone);
    };
  }, [forcePlay, onComplete]);

  if (isDismissed || phase === 'done') return null;

  return (
    <div
      onClick={handleDismiss}
      onTouchStart={handleDismiss}
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-200 select-none cursor-pointer ${
        phase === 'fade' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      } bg-[#080B11]/95`}
      style={{ perspective: 1000 }}
      title="Appuyez pour passer"
    >
      {/* Bouton discret pour passer immédiatement l'animation (mobile & PC) */}
      <div className="absolute top-5 right-5 sm:top-6 sm:right-6 z-40">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleDismiss();
          }}
          className="px-3.5 py-1.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-xs text-slate-300 hover:text-white border border-slate-700/80 shadow-lg backdrop-blur-md transition-all flex items-center gap-1.5 font-medium cursor-pointer"
        >
          <span>Passer</span>
          <span>→</span>
        </button>
      </div>

      {/* Halo discret en arrière-plan (léger et fluide pour smartphone) */}
      <div 
        className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-cyan-500/15 blur-2xl pointer-events-none"
      />

      {/* CONTENEUR DU CUBE */}
      <div className="relative flex items-center justify-center pointer-events-none">
        
        {/* LE VÉRITABLE CUBE KONAN (Salto arrière 3D en l'air) */}
        <div
          className={`relative z-20 flex items-center justify-center ${
            phase === 'flip'
              ? 'animate-konan-cube-backflip'
              : phase === 'land'
              ? ''
              : 'animate-konan-cube-fadeout'
          }`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Lueur discrète sous le cube */}
          <div className="absolute -inset-2 rounded-full bg-cyan-400/20 blur-xl pointer-events-none" />

          {/* Rendu Vectoriel du Cube KONAN */}
          <KonanCube 
            size={120} 
            showStars={true} 
            glow={false} 
            className="filter drop-shadow-[0_12px_24px_rgba(2,132,199,0.4)]"
          />
        </div>

        {/* ÉTOILES / ÉTINCELLES ÉCLATANTES LORS DE L'ATTERRISSAGE DU SALTO */}
        {showSparkles && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-30">
            {sparkles.map((spark) => (
              <div
                key={spark.id}
                className="absolute animate-spark-burst-fluid"
                style={{
                  transform: `translate(${spark.x}px, ${spark.y}px)`,
                }}
              >
                <Sparkles 
                  className="fill-current"
                  style={{ 
                    color: spark.color,
                    width: spark.size,
                    height: spark.size,
                    filter: `drop-shadow(0 0 6px ${spark.color})`
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
