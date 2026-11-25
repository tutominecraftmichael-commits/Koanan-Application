import { useEffect, useState } from 'react';

/** Connexion Internet du téléphone (événements « online » / « offline » du navigateur). */
export function isOnline(): boolean {
  return typeof navigator === 'undefined' || navigator.onLine !== false;
}

/** true tant que le téléphone a Internet ; se met à jour dès que la connexion tombe ou revient. */
export function useOnlineStatus(): boolean {
  const [online, setOnline] = useState(isOnline);
  useEffect(() => {
    const up = () => setOnline(true);
    const down = () => setOnline(false);
    window.addEventListener('online', up);
    window.addEventListener('offline', down);
    setOnline(isOnline());
    return () => {
      window.removeEventListener('online', up);
      window.removeEventListener('offline', down);
    };
  }, []);
  return online;
}
