import { createWorker } from 'tesseract.js';

export interface OcrProgressCallback {
  (progress: number, status: string): void;
}

/**
 * Preprocesses an image via HTML Canvas to enhance OCR text contrast.
 * Converts to grayscale and boosts contrast for crisp document readability.
 */
async function preprocessImage(imageFile: File | Blob): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(imageFile);

    img.onload = () => {
      URL.revokeObjectURL(url);
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        resolve(url);
        return;
      }

      // Upscale low-res images slightly if needed for better OCR
      const scale = Math.max(1, Math.min(2, 2000 / Math.max(img.width, img.height)));
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Contrast enhancement & grayscale
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;

      for (let i = 0; i < data.length; i += 4) {
        // Luminance grayscale
        const gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
        // High contrast adjustment
        const factor = (259 * (128 + 40)) / (255 * (259 - 40));
        const adjusted = factor * (gray - 128) + 128;
        const clamped = Math.max(0, Math.min(255, adjusted));

        data[i] = clamped;
        data[i + 1] = clamped;
        data[i + 2] = clamped;
      }

      ctx.putImageData(imgData, 0, 0);
      resolve(canvas.toDataURL('image/png'));
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      resolve(url);
    };

    img.src = url;
  });
}

/**
 * Performs client-side OCR on an image file (PNG, JPG, WEBP) using Tesseract.js.
 * Returns raw recognized text.
 */
export async function extractTextFromImage(
  imageFile: File | Blob,
  onProgress?: OcrProgressCallback
): Promise<string> {
  onProgress?.(0.1, 'Optimisation et prétraitement de l’image...');
  
  let processedImageUrl: string;
  try {
    processedImageUrl = await preprocessImage(imageFile);
  } catch (err) {
    console.warn('Preprocessing fallback to raw image:', err);
    processedImageUrl = URL.createObjectURL(imageFile);
  }

  onProgress?.(0.25, 'Initialisation du moteur OCR Tesseract...');

  const worker = await createWorker('fra+eng', 1, {
    logger: (m) => {
      if (m.status === 'recognizing text') {
        const prog = 0.3 + (m.progress || 0) * 0.65;
        onProgress?.(prog, `Numérisation du texte : ${Math.round((m.progress || 0) * 100)}%`);
      } else if (m.status === 'loading tesseract core') {
        onProgress?.(0.15, 'Chargement des algorithmes de vision...');
      } else if (m.status === 'loading language traineddata') {
        onProgress?.(0.25, 'Chargement des dictionnaires académiques...');
      }
    },
  });

  try {
    onProgress?.(0.35, 'Analyse visuelle des blocs et lignes de l’emploi du temps...');
    const ret = await worker.recognize(processedImageUrl);
    onProgress?.(0.95, 'Extraction des caractères terminée.');
    await worker.terminate();
    return ret.data.text || '';
  } catch (error) {
    console.error('Tesseract OCR error:', error);
    await worker.terminate().catch(() => {});
    throw error;
  }
}
