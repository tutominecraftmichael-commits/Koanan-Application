/**
 * Boutons « propres » (classe .konan-btn-shine) : une barre de lumière traverse le bouton quand on le touche.
 *  - installShineOnTap() : lance la barre de lumière au toucher, pour tous ces boutons de l'application ;
 *  - afterShine(action) : exécute l'action de façon instantanée et réactive,
 *    tout en ignorant les doubles clics accidentels ultra-rapides (< 300 ms).
 */
let lastClickTimestamp = 0;

export function afterShine<A extends unknown[]>(action: (...args: A) => void, delayMs = 0): (...args: A) => void {
  return (...args: A) => {
    const now = Date.now();
    // Anti-double-clic : ignore les clics rapprochés involontaires (< 300ms)
    if (now - lastClickTimestamp < 300) return;
    lastClickTimestamp = now;

    if (delayMs <= 0) {
      try {
        action(...args);
      } catch (err) {
        console.error('Erreur lors du clic bouton:', err);
      }
    } else {
      window.setTimeout(() => {
        try {
          action(...args);
        } catch (err) {
          console.error('Erreur lors du clic bouton différé:', err);
        }
      }, delayMs);
    }
  };
}

let installed = false;

export function installShineOnTap(): void {
  if (installed || typeof document === 'undefined') return;
  installed = true;
  document.addEventListener(
    'pointerdown',
    (event) => {
      const target = event.target as Element | null;
      const flash = (el: HTMLElement, ms: number) => {
        el.classList.remove('konan-tap');
        void el.offsetWidth; // relance l'animation même sur deux touchers rapprochés
        el.classList.add('konan-tap');
        window.setTimeout(() => el.classList.remove('konan-tap'), ms);
      };
      // Bouton « propre »
      const btn = target?.closest?.('.konan-btn-shine') as HTMLButtonElement | null;
      if (btn && !btn.disabled) flash(btn, 560);
      // Carte « propre » (formule payante) : la barre de lumière traverse toute la carte
      const host = target?.closest?.('[data-shine-host]') as HTMLElement | null;
      const layer = host?.querySelector(':scope > .konan-shine-layer') as HTMLElement | null;
      if (layer) flash(layer, 660);
    },
    { passive: true },
  );
}
