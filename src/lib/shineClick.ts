/**
 * Boutons « propres » (classe .konan-btn-shine) : une barre de lumière traverse le bouton quand on le touche.
 *  - installShineOnTap() : lance la barre de lumière au toucher, pour tous ces boutons de l'application ;
 *  - afterShine(action) : laisse la lumière passer (≈ 0,3 s) avant de changer d'écran,
 *    et ignore un deuxième toucher pendant ce temps (pas de séance validée puis dévalidée).
 */
const SHINE_DELAY_MS = 340;
let pending = false;

export function afterShine<A extends unknown[]>(action: (...args: A) => void): (...args: A) => void {
  return (...args: A) => {
    if (pending) return;
    pending = true;
    setTimeout(() => {
      pending = false;
      action(...args);
    }, SHINE_DELAY_MS);
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
      const btn = target?.closest?.('.konan-btn-shine') as HTMLButtonElement | null;
      if (!btn || btn.disabled) return;
      btn.classList.remove('konan-tap');
      void btn.offsetWidth; // relance l'animation même sur deux touchers rapprochés
      btn.classList.add('konan-tap');
      window.setTimeout(() => btn.classList.remove('konan-tap'), 560);
    },
    { passive: true },
  );
}
