/**
 * Photo de profil pour le classement de la ligue : un lien (photo Google) est envoyé tel quel ;
 * une photo choisie dans l'appli est réduite à 64 × 64 px (≈ 3 Ko) pour que le classement de
 * 30 élèves reste léger sur téléphone.
 */
const cache = new Map<string, string>();

export async function leagueAvatarOf(src?: string | null): Promise<string> {
  const s = String(src || '');
  if (!s) return '';
  if (/^https:\/\//.test(s)) return s.length <= 600 ? s : '';
  if (!s.startsWith('data:image/')) return '';
  const hit = cache.get(s);
  if (hit !== undefined) return hit;
  const small = await new Promise<string>((resolve) => {
    try {
      const img = new Image();
      img.onload = () => {
        try {
          const size = 64;
          const canvas = document.createElement('canvas');
          canvas.width = size;
          canvas.height = size;
          const ctx = canvas.getContext('2d');
          if (!ctx) return resolve('');
          // Recadrage carré centré
          const side = Math.min(img.width, img.height);
          ctx.drawImage(img, (img.width - side) / 2, (img.height - side) / 2, side, side, 0, 0, size, size);
          const out = canvas.toDataURL('image/jpeg', 0.72);
          resolve(out.length <= 16_000 ? out : '');
        } catch {
          resolve('');
        }
      };
      img.onerror = () => resolve('');
      img.src = s;
    } catch {
      resolve('');
    }
  });
  cache.set(s, small);
  return small;
}
