/**
 * KONAN AI - Service de Mise à Jour Automatique et Instantanée pour PWA & Mobile
 * 
 * Ce service garantit que dès que de nouvelles modifications sont poussées sur GitHub
 * et déployées (Vercel), l'application installée sur smartphone mobile (PWA)
 * se met à jour AUTOMATIQUEMENT et INSTANTANÉMENT sans que l'utilisateur
 * n'ait à la désinstaller ou vider son cache manuellement.
 */

declare const __APP_BUILD_ID__: string;

const CURRENT_VERSION = typeof __APP_BUILD_ID__ !== 'undefined' ? __APP_BUILD_ID__ : String(Date.now());
const STORAGE_KEY = 'konan_app_version';

let isUpdating = false;

/**
 * Purge tous les caches du navigateur et force le rechargement de la page
 */
export async function forcePwaCacheClearAndReload(): Promise<void> {
  if (isUpdating) return;
  isUpdating = true;
  console.log('[KONAN PWA] Purge immédiate de tous les caches et rechargement...');

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
  window.location.reload();
}

/**
 * Vérifie si une nouvelle version a été déployée sur le serveur
 */
export async function checkForPwaUpdate(reg?: ServiceWorkerRegistration): Promise<boolean> {
  if (typeof window === 'undefined' || isUpdating) return false;

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
    const serverVersion = String(data?.version || '');

    if (!serverVersion) return false;

    const storedVersion = localStorage.getItem(STORAGE_KEY);

    // Première visite : mémoriser la version actuelle
    if (!storedVersion) {
      localStorage.setItem(STORAGE_KEY, serverVersion);
      return false;
    }

    // Si la version serveur diffère de la version stockée ou actuelle :
    if (serverVersion !== storedVersion || (CURRENT_VERSION && serverVersion !== CURRENT_VERSION)) {
      console.log(`[KONAN PWA] Nouvelle version détectée (${storedVersion} -> ${serverVersion}) ! Mise à jour instantanée.`);
      localStorage.setItem(STORAGE_KEY, serverVersion);
      await forcePwaCacheClearAndReload();
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
  // Enregistrer la version actuelle dès le lancement
  localStorage.setItem(STORAGE_KEY, CURRENT_VERSION);

  // 1. Vérification dès le chargement initial (1 seconde après le démarrage)
  setTimeout(() => {
    checkForPwaUpdate(reg);
  }, 1000);

  // 2. Vérification dès que l'utilisateur déverrouille son téléphone ou revient sur l'application
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      checkForPwaUpdate(reg);
    }
  });

  window.addEventListener('focus', () => {
    checkForPwaUpdate(reg);
  });

  // 3. Vérification périodique toutes les 60 secondes pendant que l'application est active
  setInterval(() => {
    checkForPwaUpdate(reg);
  }, 60 * 1000);

  // 4. Écouter la découverte d'un nouveau Service Worker par le navigateur
  reg.addEventListener('updatefound', () => {
    const installingWorker = reg.installing;
    if (!installingWorker) return;

    installingWorker.addEventListener('statechange', () => {
      if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
        console.log('[KONAN PWA] Nouveau Service Worker installé, activation immédiate...');
        installingWorker.postMessage({ type: 'SKIP_WAITING' });
      }
    });
  });

  // 5. Recharger instantanément dès que le nouveau Service Worker prend le contrôle
  let refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!refreshing) {
      refreshing = true;
      window.location.reload();
    }
  });
}
