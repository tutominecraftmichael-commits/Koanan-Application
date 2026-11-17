/**
 * SUJET EN PDF (A4), FABRIQUÉ DANS LE TÉLÉPHONE (2026-11-17)
 * Photo nette de la fiche d'épreuve (toujours en mode jour, comme une feuille), découpée en pages A4
 * ENTRE deux lignes de texte (jamais au milieu d'une phrase), avec « KONAN · matière · page x / y » en bas.
 * Les couleurs de Tailwind 4 (oklch) ne sont pas lues par l'outil de photo : elles sont converties en RGB
 * sur la copie, juste avant la photo. Aucun envoi sur Internet : tout se passe dans le téléphone.
 */

const COLOR_FN = /(?:oklch|oklab|lab|lch|color)\([^()]*\)/g;

/** Couleur moderne (oklch…) → rgba, en la peignant sur un pixel. */
function makeColorConverter(): (value: string) => string {
  const ctx = document.createElement('canvas').getContext('2d', { willReadFrequently: true });
  const cache = new Map<string, string>();
  return (value: string) =>
    value.replace(COLOR_FN, (fn) => {
      if (!ctx) return 'rgb(0,0,0)';
      const hit = cache.get(fn);
      if (hit) return hit;
      ctx.clearRect(0, 0, 1, 1);
      ctx.fillStyle = '#000';
      ctx.fillStyle = fn;
      ctx.fillRect(0, 0, 1, 1);
      const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data;
      const rgb = `rgba(${r}, ${g}, ${b}, ${(a / 255).toFixed(3)})`;
      cache.set(fn, rgb);
      return rgb;
    });
}

/**
 * Ligne sans texte (aucun pixel sombre) : on peut couper la page là. On cherche en remontant depuis le bas de
 * la page, au plus sur le dernier quart ; sinon on coupe au bas de la page.
 */
function findSafeBreak(ctx: CanvasRenderingContext2D, width: number, from: number, to: number): number {
  const minY = Math.max(0, Math.round(to - (to - from) * 0.25));
  for (let y = Math.round(to); y > minY; y--) {
    const row = ctx.getImageData(0, y, width, 1).data;
    let dark = false;
    for (let x = 0; x < width * 4; x += 8) {
      const lum = 0.299 * row[x] + 0.587 * row[x + 1] + 0.114 * row[x + 2];
      if (lum < 175) { dark = true; break; }
    }
    if (!dark) return y;
  }
  return Math.round(to);
}

export async function downloadSujetPdf(element: HTMLElement, options: { fileName: string; footer: string }): Promise<void> {
  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([import('html2canvas'), import('jspdf')]);
  const toRgb = makeColorConverter();
  const canvas = await html2canvas(element, {
    scale: 2,
    backgroundColor: '#ffffff',
    logging: false,
    useCORS: true,
    windowWidth: 820,
    onclone: (doc, el) => {
      // Toujours en mode jour (comme une feuille imprimée), largeur d'une page A4
      doc.documentElement.classList.remove('dark');
      doc.body.classList.remove('dark');
      el.style.width = '780px';
      el.style.maxWidth = '780px';
      el.style.boxShadow = 'none';
      el.querySelectorAll('details').forEach((d) => { (d as HTMLDetailsElement).open = true; });
      el.querySelectorAll('summary, [data-pdf-hide]').forEach((n) => n.remove());
      // Pseudo-éléments (::before, ::after) : rien d'utile sur la fiche, et leurs couleurs bloquaient la photo.
      // Pastilles (« Document 1 », « 6 points », « 1.1 ») : l'outil de photo dessine leur texte trop bas dans
      // une boîte flex ; en bloc simple avec une hauteur de ligne fixe, le texte reste centré.
      const neutral = doc.createElement('style');
      neutral.textContent = [
        '*::before,*::after{content:none!important;border-color:transparent!important;box-shadow:none!important;}',
        '[data-pdf-chip]{display:inline-block!important;height:auto!important;min-height:0!important;line-height:1!important;padding-top:3px!important;padding-bottom:8px!important;text-align:center;}',
      ].join('');
      doc.head.appendChild(neutral);
      const view = doc.defaultView || window;
      [el, ...Array.from(el.querySelectorAll<HTMLElement | SVGElement>('*'))].forEach((node) => {
        const cs = view.getComputedStyle(node);
        // Toutes les propriétés calculées qui contiennent une couleur moderne → RGB (style en ligne, prioritaire)
        for (let i = 0; i < cs.length; i++) {
          const name = cs[i];
          const v = cs.getPropertyValue(name);
          if (v && /(?:oklch|oklab|lab|lch|color)\(/.test(v)) node.style.setProperty(name, toRgb(v));
        }
      });
      // Graphiques : l'outil de photo les dessinait à leur petite taille d'origine. Chacun devient une image
      // (couleurs déjà converties) de la largeur d'une page A4, centrée.
      el.querySelectorAll('svg[viewBox]').forEach((svg) => {
        const vb = (svg as SVGSVGElement).viewBox?.baseVal;
        if (!vb || vb.width < 200) return; // les petites icônes restent telles quelles
        const w = 600;
        const h = Math.round((w * vb.height) / vb.width);
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('width', String(w));
        svg.setAttribute('height', String(h));
        (svg as SVGSVGElement).style.fontFamily = "'Plus Jakarta Sans', Arial, sans-serif";
        const img = doc.createElement('img');
        img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(svg))}`;
        img.width = w;
        img.height = h;
        img.style.cssText = `display:block;margin:0 auto;width:${w}px;height:${h}px;`;
        svg.replaceWith(img);
      });
    },
  });

  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const pageW = pdf.internal.pageSize.getWidth();
  const pageH = pdf.internal.pageSize.getHeight();
  const margin = 10;
  const footerH = 8;
  const contentW = pageW - margin * 2;
  const contentH = pageH - margin * 2 - footerH;
  const pxPerMm = canvas.width / contentW;
  const pagePx = contentH * pxPerMm;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) throw new Error('CANVAS');

  // Coupures entre deux lignes de texte
  const cuts: number[] = [0];
  while (canvas.height - cuts[cuts.length - 1] > pagePx) {
    const start = cuts[cuts.length - 1];
    cuts.push(findSafeBreak(ctx, canvas.width, start, start + pagePx));
  }
  cuts.push(canvas.height);
  const pages = cuts.length - 1;

  for (let p = 0; p < pages; p++) {
    const y0 = cuts[p];
    const h = cuts[p + 1] - y0;
    const slice = document.createElement('canvas');
    slice.width = canvas.width;
    slice.height = h;
    slice.getContext('2d')!.drawImage(canvas, 0, y0, canvas.width, h, 0, 0, canvas.width, h);
    if (p > 0) pdf.addPage();
    pdf.addImage(slice.toDataURL('image/jpeg', 0.92), 'JPEG', margin, margin, contentW, h / pxPerMm);
    pdf.setFontSize(8);
    pdf.setTextColor(120, 130, 145);
    pdf.text(`${options.footer} · page ${p + 1} / ${pages}`, pageW / 2, pageH - margin + 2, { align: 'center' });
  }
  pdf.save(options.fileName);
}
