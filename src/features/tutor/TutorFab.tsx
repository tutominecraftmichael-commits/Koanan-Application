import React, { useEffect, useRef, useState } from 'react';
import { Lock, Zap } from 'lucide-react';
import { KonanPlush } from '../../components/common/KonanPlush';
import {
  clampKoneBattery,
  getKoneMoodInfo,
  KONE_BATTERY_DEFAULT,
  type KoneMoodTier,
} from '../../lib/gamification/koneBattery';

const SIZE = 84;
const HINT_KEY = 'konan_plush_hint_day';

export interface TutorFabProps {
  /** Ouvre le chat IA de KONÉ (comptes Pro / Plus) */
  onOpen?: () => void;
  /** Redirige vers une mini-leçon ou un mini-jeu pour recharger KONÉ (+25 %) */
  onRecharge?: () => void;
  /** Niveau de batterie de KONÉ (0 à 100) */
  battery?: number;
  /** L'utilisateur a-t-il accès au chat IA de KONÉ ? */
  canChat?: boolean;
  /** Nom de l'élève pour personnaliser les petites bulles pré-écrites */
  studentName?: string;
}

const BATTERY_STYLES: Record<KoneMoodTier, {
  shellBorder: string;
  nubBg: string;
  fillBg: string;
  textColor: string;
  bubbleBorder: string;
}> = {
  happy: {
    shellBorder: 'border-sky-400/90 dark:border-sky-400/80 shadow-[0_4px_14px_rgba(14,165,233,0.28)]',
    nubBg: 'bg-sky-400 dark:bg-sky-400/90',
    fillBg: 'bg-gradient-to-r from-sky-500 via-sky-400 to-cyan-300',
    textColor: 'text-slate-900 dark:text-white',
    bubbleBorder: 'border-sky-200 dark:border-sky-400/50',
  },
  annoyed: {
    shellBorder: 'border-orange-400 dark:border-orange-400/85 shadow-[0_4px_14px_rgba(249,115,22,0.3)]',
    nubBg: 'bg-orange-400 dark:bg-orange-400/90',
    fillBg: 'bg-gradient-to-r from-orange-500 via-amber-500 to-amber-300',
    textColor: 'text-slate-900 dark:text-white',
    bubbleBorder: 'border-orange-300 dark:border-orange-400/60',
  },
  angry: {
    shellBorder: 'border-red-500 dark:border-red-400 shadow-[0_4px_16px_rgba(239,68,68,0.4)]',
    nubBg: 'bg-red-500 dark:bg-red-400',
    fillBg: 'bg-gradient-to-r from-red-600 to-rose-500 animate-pulse',
    textColor: 'text-red-950 dark:text-white',
    bubbleBorder: 'border-red-400 dark:border-red-500/70',
  },
  strike: {
    shellBorder: 'border-red-800 dark:border-red-700 shadow-[0_4px_16px_rgba(153,27,27,0.45)]',
    nubBg: 'bg-red-800 dark:bg-red-700',
    fillBg: 'bg-red-900',
    textColor: 'text-red-900 dark:text-red-200',
    bubbleBorder: 'border-red-800/70 dark:border-red-700',
  },
};

/**
 * Mascotte KONÉ flottante en bas à droite avec un vrai dessin de batterie juste au-dessus de sa tête.
 * Affichée pour TOUS les utilisateurs (Gratuit, Pro et Plus) :
 * - Pro / Plus : toucher ouvre le chat IA de KONÉ (ou l'écran de grève à 0 %).
 * - Gratuit : toucher affiche les petites bulles pré-écrites selon son humeur (+ bouton de recharge si < 100 %).
 */
export const TutorFab: React.FC<TutorFabProps> = ({
  onOpen,
  onRecharge,
  battery = KONE_BATTERY_DEFAULT,
  canChat = false,
  studentName,
}) => {
  const pct = clampKoneBattery(battery, KONE_BATTERY_DEFAULT);
  const firstName = String(studentName || '').trim().split(/\s+/)[0];
  const cleanFirstName = firstName && firstName !== 'Étudiant' ? firstName : undefined;
  const moodInfo = getKoneMoodInfo(pct, cleanFirstName);
  const tier = moodInfo.tier;
  const bStyle = BATTERY_STYLES[tier];

  const [boing, setBoing] = useState(0);
  const [hint, setHint] = useState(false);
  const [bubbleIdx, setBubbleIdx] = useState(0);
  const [chargingDelta, setChargingDelta] = useState<number | null>(null);

  const prevBatteryRef = useRef<number>(pct);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const bubbleHideTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Détecte une recharge (+25 %) pour animer le chargement directement sur la batterie au-dessus de KONÉ
  useEffect(() => {
    const prev = prevBatteryRef.current;
    if (pct > prev) {
      setChargingDelta(pct - prev);
      const t = setTimeout(() => setChargingDelta(null), 3500);
      prevBatteryRef.current = pct;
      return () => clearTimeout(t);
    }
    prevBatteryRef.current = pct;
  }, [pct]);

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    let seen = '';
    try { seen = localStorage.getItem(HINT_KEY) || ''; } catch { /* stockage bloqué */ }
    if (seen === today) return;
    const show = setTimeout(() => {
      setHint(true);
      try { localStorage.setItem(HINT_KEY, today); } catch { /* sans effet */ }
    }, 1500);
    const hide = setTimeout(() => setHint(false), 7500);
    return () => { clearTimeout(show); clearTimeout(hide); };
  }, []);

  useEffect(() => () => {
    clearTimeout(timer.current);
    clearTimeout(bubbleHideTimer.current);
  }, []);

  const handlePressKone = () => {
    setBoing((n) => n + 1);
    if (canChat && onOpen) {
      setHint(false);
      clearTimeout(timer.current);
      timer.current = setTimeout(onOpen, 240);
      return;
    }
    // Compte Gratuit (sans chat IA) : affiche / fait défiler les petites bulles d'humeur pré-écrites
    setBubbleIdx((i) => (hint ? (i + 1) % moodInfo.bubbles.length : i));
    setHint(true);
    clearTimeout(bubbleHideTimer.current);
    bubbleHideTimer.current = setTimeout(() => setHint(false), 7000);
  };

  const haloColor =
    tier === 'strike' ? 'rgba(153, 27, 27, 0.48)'
      : tier === 'angry' ? 'rgba(239, 68, 68, 0.45)'
        : tier === 'annoyed' ? 'rgba(249, 115, 22, 0.42)'
          : undefined;

  const activeBubbleText = moodInfo.bubbles[bubbleIdx % moodInfo.bubbles.length];

  return (
    <div className="fixed right-3 sm:right-6 bottom-[calc(5.25rem+env(safe-area-inset-bottom))] lg:bottom-8 z-40 flex items-end gap-2.5 pointer-events-none">
      {/* Bulle d'humeur pré-écrite (ou invite au chat pour Pro) */}
      {hint && (
        <div
          className={`kp-hint pointer-events-auto max-w-[13.5rem] px-3.5 py-2.5 mb-2 rounded-2xl rounded-br-md bg-white dark:bg-slate-900 border-2 ${bStyle.bubbleBorder} text-[12.5px] font-bold text-slate-900 dark:text-white shadow-xl text-left leading-snug space-y-2`}
        >
          <p>{activeBubbleText}</p>
          {pct < 100 && onRecharge && !canChat && (
            <button
              type="button"
              onClick={() => { setHint(false); onRecharge(); }}
              className="w-full py-1.5 px-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-[11px] font-extrabold flex items-center justify-center gap-1 cursor-pointer"
            >
              <Zap className="w-3 h-3 fill-current" />
              <span>{pct === 0 ? 'Calmer KONÉ (+25 %)' : 'Recharger (+25 %)'}</span>
            </button>
          )}
        </div>
      )}

      {/* Colonne verticale : Dessin de batterie JUSTE AU-DESSUS de KONÉ */}
      <div className="pointer-events-auto flex flex-col items-center gap-1.5">
        {/* Dessin de batterie horizontale au-dessus de KONÉ */}
        <button
          type="button"
          onClick={pct < 100 && onRecharge && !canChat ? onRecharge : handlePressKone}
          title={`Batterie de KONÉ : ${pct} % (${moodInfo.label})`}
          aria-label={`Batterie de KONÉ : ${pct} %`}
          className="group relative flex items-center cursor-pointer select-none transition-transform hover:scale-105 active:scale-95 focus:outline-none"
        >
          {/* Badge flottant +25 % lors d'un rechargement */}
          {chargingDelta !== null && (
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-black shadow-md animate-bounce whitespace-nowrap">
              +{chargingDelta}% ⚡
            </span>
          )}

          {/* Corps principal de la pile / batterie */}
          <span
            className={`relative w-[68px] h-[23px] p-[2.5px] rounded-[7px] border-2 bg-white/95 dark:bg-[#0B1324]/95 backdrop-blur-xs overflow-hidden flex items-center ${bStyle.shellBorder} ${
              chargingDelta !== null ? 'ring-2 ring-emerald-400/80' : ''
            }`}
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={pct}
            aria-label="Niveau de batterie de KONÉ"
          >
            {/* Jauge interne de charge */}
            <span className="relative w-full h-full rounded-[3.5px] bg-slate-200/80 dark:bg-slate-800/90 overflow-hidden">
              <span
                className={`block h-full rounded-[3.5px] transition-all duration-700 ease-out ${bStyle.fillBg}`}
                style={{ width: `${pct === 0 ? 0 : Math.max(pct, 6)}%` }}
              >
                {/* Reflet brillant supérieur sur le liquide de batterie */}
                <span className="block w-full h-[40%] bg-white/30 rounded-t-[3.5px]" />
              </span>
            </span>

            {/* Texte de pourcentage centré dans la batterie */}
            <span className={`absolute inset-0 flex items-center justify-center gap-0.5 text-[10.5px] font-black tabular-nums tracking-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)] ${bStyle.textColor}`}>
              {chargingDelta !== null ? (
                <Zap className="w-3 h-3 text-emerald-400 fill-emerald-400 animate-pulse" />
              ) : tier === 'strike' ? (
                <Lock className="w-2.5 h-2.5" />
              ) : null}
              <span>{pct}%</span>
            </span>
          </span>

          {/* Embout positif de la pile à droite */}
          <span className={`w-[3.5px] h-[10px] rounded-r-[2.5px] ml-[1px] ${bStyle.nubBg}`} aria-hidden="true" />
        </button>

        {/* Peluche KONÉ ronde */}
        <button
          type="button"
          onClick={handlePressKone}
          aria-label={canChat ? `Discuter avec KONÉ (batterie ${pct} %)` : `KONÉ : ${moodInfo.label} (${pct} %)`}
          title={
            tier === 'strike'
              ? 'KONÉ est en grève (0 %) — fais une mini-leçon pour le calmer'
              : canChat
                ? `Je ne comprends pas ? KONÉ t’explique (${pct} %)`
                : `KONÉ est ${moodInfo.label.toLowerCase()} (${pct} %)`
          }
          className="relative rounded-full cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400/60"
          style={{ width: SIZE, height: SIZE }}
        >
          <span className="kp-halo" style={haloColor ? { background: haloColor } : undefined} />
          <KonanPlush variant="bust" size={SIZE} battery={pct} enter waves={tier === 'happy'} preload="idle" boing={boing} className="kp--ringed">
            {canChat && tier !== 'strike' && (
              <span className={`kp-ask bg-white dark:bg-slate-900 border-2 shadow-md z-10 ${
                tier === 'angry'
                  ? 'text-red-600 dark:text-red-300 border-red-300 dark:border-red-400/60'
                  : tier === 'annoyed'
                    ? 'text-orange-600 dark:text-orange-300 border-orange-300 dark:border-orange-400/60'
                    : 'text-sky-700 dark:text-sky-300 border-sky-300 dark:border-sky-400/60'
              }`}>
                {tier === 'angry' ? '!' : '?'}
              </span>
            )}
          </KonanPlush>
        </button>
      </div>
    </div>
  );
};
