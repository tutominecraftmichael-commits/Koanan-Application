import React, { useEffect, useRef, useState } from 'react';
import { Wifi, WifiOff } from 'lucide-react';
import { useOnlineStatus } from '../../lib/useOnlineStatus';

/**
 * Petit bandeau discret en haut de l'écran :
 *  - « Mode hors ligne » tant que le téléphone n'a pas Internet (les cours déjà ouverts restent disponibles,
 *    c'est expliqué dans le chat de KONE qui, lui, a besoin d'Internet) ;
 *  - « De retour en ligne » pendant 3 secondes quand la connexion revient.
 * Couleurs fixes (fond sombre, texte clair) : lisible en mode jour comme en mode nuit.
 */
export const OfflineBanner: React.FC = () => {
  const online = useOnlineStatus();
  const [backOnline, setBackOnline] = useState(false);
  const wasOffline = useRef(!online);

  useEffect(() => {
    if (!online) {
      wasOffline.current = true;
      setBackOnline(false);
      return;
    }
    if (!wasOffline.current) return;
    wasOffline.current = false;
    setBackOnline(true);
    const t = window.setTimeout(() => setBackOnline(false), 3000);
    return () => window.clearTimeout(t);
  }, [online]);

  if (online && !backOnline) return null;
  return (
    <div
      className="fixed left-1/2 -translate-x-1/2 z-[200] pointer-events-none px-3"
      style={{ top: 'calc(env(safe-area-inset-top, 0px) + 8px)' }}
      role="status"
      aria-live="polite"
    >
      <div className={`flex items-center gap-2 rounded-full px-3.5 py-1.5 shadow-lg text-[12px] font-bold text-white ${online ? 'bg-[#047857]' : 'bg-[#0F172A]/95 ring-1 ring-white/15'}`}>
        {online ? <Wifi className="w-3.5 h-3.5 shrink-0" /> : <WifiOff className="w-3.5 h-3.5 shrink-0 text-amber-300" />}
        <span className="whitespace-nowrap">{online ? 'De retour en ligne' : 'Mode hors ligne'}</span>
      </div>
    </div>
  );
};

export default OfflineBanner;
