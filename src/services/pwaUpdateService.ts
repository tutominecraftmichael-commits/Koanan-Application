/**
 * KONAN AI - Service de Mise à Jour Automatique et Instantanée pour PWA & Mobile
 * 
 * Ce service garantit que dès qu'une nouvelle version est déployée en production (Vercel),
 * l'application installée sur smartphone mobile (PWA) détecte la mise à jour et
 * actualise silencieusement le cache sans jamais boucler ni bloquer l'utilisateur.
 */

import { useState, useEffect } from 'react';

declare const __APP_BUILD_ID__: string;

const CURRENT_VERSION = typeof __APP_BUILD_ID__ !== 'undefined' ? __APP_BUILD_ID__ : '';
const STORAGE_KEY = 'konan_app_version';
const RELOAD_ATTEMPT_KEY = 'konan_pwa_last_reload_ts';
const RELOADED_VERSION_KEY = 'konan_pwa_reloaded_for_version';

let isUpdating = false;
let updateAvailableState = false;
const listeners = new Set<(available: boolean) => void>();

function isDevEnvironment(): boolean {
  if (typeof window === 'undefined') return false;
  return (
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.hostname.endsWith('.local') ||
    Boolean(import.meta.env.DEV)
  );
}

function notifyUpdateAvailable(val: boolean) {
  updateAvailableState = val;
  listeners.forEach((fn) => {
    try {
      fn(val);
    } catch {}
  });
}

export function onPwaUpdateAvailable(callback: (available: boolean) => void): () => void {
  listeners.add(callback);
  if (updateAvailableState) callback(true);
  return () => {
    listeners.delete(callback);
  };
}

export function usePwaUpdate() {
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(updateAvailableState);

  useEffect(() => {
    return onPwaUpdateAvailable((available) => {
      setIsUpdateAvailable(available);
    });
  }, []);

  return {
    isUpdateAvailable,
    applyUpdate: forcePwaCacheClearAndReload,
  };
}

/**
 * Purge les caches du navigateur et actualise la page de manière sécurisée (protégée contre les boucles)
 */
export async function forcePwaCacheClearAndReload(): Promise<void> {
  if (isDevEnvironment() || isUpdating) return;

  // Protection stricte anti-boucle : au maximum 1 rechargement toutes les 5 minutes
  try {
    const lastReloadStr = sessionStorage.getItem(RELOAD_ATTEMPT_KEY);
    const lastReload = lastReloadStr ? Number(lastReloadStr) : 0;
    const now = Date.now();
    if (now - lastReload < 5 * 60 * 1000) {
      console.warn('[KONAN PWA] Rechargement automatique différé : un rechargement a déjà eu lieu il y a moins de 5 min.');
      return;
    }
    sessionStorage.setItem(RELOAD_ATTEMPT_KEY, String(now));
  } catch {}

  isUpdating = true;
  console.log('[KONAN PWA] Purge des caches et actualisation sécurisée...');

  try {
    if ('caches' in window) {
      const cacheKeys = await caches.keys();
      await Promise.all(cacheKeys.map((key) => caches.delete(key)));
    }
  } catch (err) {
    console.warn('[KONAN PWA] Erreur purge caches :', err);
  }

  // Notifier le Service Worker de skipWaiting immédiatement
  try {
    if ('serviceWorker' in navigator) {
      const reg = await navigator.serviceWorker.getRegistration();
      if (reg?.waiting) {
        reg.waiting.postMessage({ type: 'SKIP_WAITING' });
      }
    }
  } catch {}

  // Recharger l'application immédiatement avec le nouveau bundle
  window.location.replace(window.location.href);
}

/**
 * Vérifie si une nouvelle version a été déployée sur le serveur
 */
export async function checkForPwaUpdate(reg?: ServiceWorkerRegistration): Promise<boolean> {
  // En local de développement, JAMAIS de rechargement automatique
  if (typeof window === 'undefined' || isDevEnvironment() || isUpdating) return false;

  // 1. Déclencher la vérification du Service Worker par le navigateur
  if (reg) {
    reg.update().catch(() => {});
  } else if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistration().then((r) => r?.update().catch(() => {}));
  }

  // 2. Vérifier directement le fichier version.json sur le serveur avec anti-cache strict
  try {
    const res = await fetch(`/version.json?t=${Date.now()}`, {
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate' },
    });

    if (!res.ok) return false;
    const data = await res.json();
    const serverVersion = String(data?.version || '').trim();

    if (!serverVersion) return false;

    // Si le serveur a la même version que notre bundle en cours d'exécution, nous sommes à jour
    if (CURRENT_VERSION && serverVersion === CURRENT_VERSION) {
      return false;
    }

    // Protection anti-boucle : Si nous avons déjà rechargé pour cette version précise dans cette session, ne pas reboucler
    try {
      const alreadyReloadedFor = sessionStorage.getItem(RELOADED_VERSION_KEY);
      if (alreadyReloadedFor === serverVersion) {
        return false;
      }
    } catch {}

    const storedVersion = localStorage.getItem(STORAGE_KEY);

    // Première visite : mémoriser la version actuelle sans recharger
    if (!storedVersion) {
      localStorage.setItem(STORAGE_KEY, serverVersion);
      return false;
    }

    // Si la version serveur diffère réellement de la version stockée
    if (serverVersion !== storedVersion) {
      console.log(`[KONAN PWA] Nouvelle version détectée (${storedVersion} -> ${serverVersion})`);
      localStorage.setItem(STORAGE_KEY, serverVersion);
      try {
        sessionStorage.setItem(RELOADED_VERSION_KEY, serverVersion);
      } catch {}

      notifyUpdateAvailable(true);
      forcePwaCacheClearAndReload();
      return true;
    }
  } catch {
    // Mode hors-ligne ou réseau instable
  }

  return false;
}

/**
 * Initialise les observateurs de mise à jour automatique
 */
export function initPwaAutoUpdate(reg: ServiceWorkerRegistration): void {
  // En local de développement, désactiver totalement
  if (typeof window === 'undefined' || isDevEnvironment()) {
    return;
  }

  // Enregistrer la version actuelle dès le lancement si connue
  if (CURRENT_VERSION) {
    localStorage.setItem(STORAGE_KEY, CURRENT_VERSION);
  }

  // 1. Vérification 3 secondes après le chargement initial
  setTimeout(() => {
    checkForPwaUpdate(reg);
  }, 3000);

  // 2. Vérification dès que l'utilisateur revient sur l'application
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      checkForPwaUpdate(reg);
    }
  });

  window.addEventListener('focus', () => {
    checkForPwaUpdate(reg);
  });

  // 3. Vérification périodique toutes les 5 minutes pendant que l'application est active
  setInterval(() => {
    checkForPwaUpdate(reg);
  }, 5 * 60 * 1000);

  // 4. Écouter l'arrivée d'un nouveau Service Worker
  reg.addEventListener('updatefound', () => {
    const installingWorker = reg.installing;
    if (!installingWorker) return;

    installingWorker.addEventListener('statechange', () => {
      if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
        console.log('[KONAN PWA] Nouveau Service Worker installé');
        notifyUpdateAvailable(true);
      }
    });
  });
}
