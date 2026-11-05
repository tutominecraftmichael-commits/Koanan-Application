import type { UserAccount } from '../types';

/** Photo à afficher : celle choisie par l'élève en priorité, sinon celle du compte Google. */
export function getDisplayAvatar(user?: Pick<UserAccount, 'avatar' | 'customAvatar'> | null): string {
  return user?.customAvatar || user?.avatar || '';
}

/**
 * Transforme la photo choisie en une petite image carrée JPEG (data URL d'environ 10 à 20 Ko),
 * assez légère pour être enregistrée avec le profil et synchronisée sur tous les appareils.
 */
export function resizeImageToAvatar(file: File, size = 192): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith('image/')) {
      reject(new Error('Ce fichier n’est pas une image. Choisis une photo (JPG ou PNG).'));
      return;
    }
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      try {
        // Recadrage carré centré, puis réduction
        const side = Math.min(img.naturalWidth, img.naturalHeight);
        const sx = (img.naturalWidth - side) / 2;
        const sy = (img.naturalHeight - side) / 2;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('Impossible de préparer la photo sur cet appareil.');
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, size, size);
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, sx, sy, side, side, 0, 0, size, size);
        resolve(canvas.toDataURL('image/jpeg', 0.82));
      } catch (err) {
        reject(err instanceof Error ? err : new Error('Impossible de préparer la photo.'));
      } finally {
        URL.revokeObjectURL(url);
      }
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Cette photo ne peut pas être lue. Essaie une autre image (JPG ou PNG).'));
    };
    img.src = url;
  });
}
