// Écran d'ouverture « KONAN » (voir index.html).
// Fichier séparé : la politique de sécurité du site (CSP) bloque les scripts écrits directement dans la page.
(function () {
  var el = document.getElementById('konan-splash');
  if (el) {
    // Ni menu, ni sélection, ni glisser sur le nom
    var block = function (e) { e.preventDefault(); };
    el.addEventListener('contextmenu', block);
    el.addEventListener('selectstart', block);
    el.addEventListener('dragstart', block);
  }

  var MIN_MS = 450; // juste le temps de voir « KONAN », puis l'appli
  var done = false;
  window.__konanHideSplash = function () {
    if (done) return;
    done = true;
    var wait = Math.max(0, MIN_MS - (window.performance && performance.now ? performance.now() : MIN_MS));
    setTimeout(function () {
      var splash = document.getElementById('konan-splash');
      var meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', meta.getAttribute('data-app-color') || '#091427');
      if (!splash) return;
      splash.classList.add('is-hiding');
      setTimeout(function () { if (splash.parentNode) splash.parentNode.removeChild(splash); }, 230);
    }, wait);
  };
  // Sécurité : jamais bloqué sur l'écran d'ouverture
  setTimeout(window.__konanHideSplash, 5000);
})();
