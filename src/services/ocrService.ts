import { createWorker } from 'tesseract.js';

export interface OcrProgressCallback {
  (progress: number, status: string): void;
}

export interface SpatialTextItem {
  str: string;
  x: number;
  y: number;
  width: number;
  height: number;
  pageNum: number;
}

export interface DetailedOcrResult {
  rawText: string;
  reconstructedText: string;
  spatialItems: SpatialTextItem[];
  confidence: number;
}

const DAYS_HEADER_PATTERNS = [
  { day: 0, label: 'LUNDI', regex: /\b(lundi|lun|monday|mon)\b/i },
  { day: 1, label: 'MARDI', regex: /\b(mardi|mar|tuesday|tue)\b/i },
  { day: 2, label: 'MERCREDI', regex: /\b(mercredi|mer|wednesday|wed)\b/i },
  { day: 3, label: 'JEUDI', regex: /\b(jeudi|jeu|thursday|thu)\b/i },
  { day: 4, label: 'VENDREDI', regex: /\b(vendredi|ven|friday|fri)\b/i },
  { day: 5, label: 'SAMEDI', regex: /\b(samedi|sam|saturday|sat)\b/i },
  { day: 6, label: 'DIMANCHE', regex: /\b(dimanche|dim|sunday|sun)\b/i },
];

/**
 * Advanced image preprocessor for academic timetables & smartphone photos.
 * 1. Upscales to optimal OCR DPI resolution (~2000px max edge).
 * 2. Applies adaptive high-contrast grayscale to eliminate paper shadows & flash glare.
 * 3. Applies a 3x3 unsharp masking convolution kernel to sharpen digital & printed characters.
 */
async function preprocessImageAdvanced(imageFile: File | Blob): Promise<string> {
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

      // Upscale/normalize resolution for crisp letterforms (ideal width between 1600px and 2400px)
      const maxDim = Math.max(img.width, img.height);
      const targetMax = Math.max(1600, Math.min(2600, maxDim));
      const scale = targetMax / maxDim;

      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      const w = canvas.width;
      const h = canvas.height;

      // Pass 1: Grayscale & Contrast boost (Gamma stretch)
      const grayBuffer = new Uint8Array(w * h);
      for (let i = 0, p = 0; i < data.length; i += 4, p++) {
        // Luminance calculation
        const lum = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
        // Contrast enhancement factor
        const contrastFactor = 1.35;
        const adjusted = (lum - 128) * contrastFactor + 128;
        const clamped = Math.max(0, Math.min(255, adjusted));
        grayBuffer[p] = clamped;
      }

      // Pass 2: Gentle sharpening convolution filter to sharpen character contours
      // Kernel: [0, -0.4, 0, -0.4, 2.6, -0.4, 0, -0.4, 0]
      for (let y = 1; y < h - 1; y++) {
        const rowOffset = y * w;
        for (let x = 1; x < w - 1; x++) {
          const idx = rowOffset + x;
          const val =
            2.6 * grayBuffer[idx] -
            0.4 * (grayBuffer[idx - 1] + grayBuffer[idx + 1] + grayBuffer[idx - w] + grayBuffer[idx + w]);

          const finalVal = Math.max(0, Math.min(255, val));
          const p4 = idx * 4;
          data[p4] = finalVal;
          data[p4 + 1] = finalVal;
          data[p4 + 2] = finalVal;
          data[p4 + 3] = 255;
        }
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
 * Normalizes common OCR misreadings for timetable hours:
 * e.g., "08hOO" -> "08:00", "1Oh00" -> "10:00", "12;15" -> "12:15", "8H" -> "08:00"
 */
export function cleanOcrTimeErrors(text: string): string {
  let cleaned = text
    // Replace letter O or o with digit 0 inside hour/min blocks: e.g. "08hOO", "1Oh00", "08:0O"
    .replace(/\b(\d{1,2})[hH:]([oO0-9]{2})\b/g, (_m, h, mins) => {
      const fixedMins = mins.replace(/[oO]/g, '0');
      return `${h.padStart(2, '0')}:${fixedMins}`;
    })
    .replace(/\b([oO1-9]\d?)[hH:](\d{2})\b/g, (_m, h, mins) => {
      const fixedH = h.replace(/^[oO]/, '0');
      return `${fixedH.padStart(2, '0')}:${mins}`;
    })
    // Semicolon or period as time separator: "08;00" or "08.00" -> "08:00"
    .replace(/\b(\d{1,2})[;.](\d{2})\b/g, '$1:$2')
    // Isolated "8h" or "14h" before dashes: "8h - 10h" -> "08:00 - 10:00"
    .replace(/\b(\d{1,2})[hH]\b(?!\d)/g, '$1:00')
    // Dashes normalization: em-dash, en-dash, tilde, slash, 'à', 'a', 'au'
    .replace(/\s*[-–—~àaA/to]+\s*/g, ' - ')
    // Ensure two digits for single digit hours: "8:00" -> "08:00"
    .replace(/\b([0-9]):([0-5][0-9])\b/g, '0$1:$2');

  return cleaned;
}

/**
 * 2D Column Reconstruction Algorithm for OCR Timetable Images:
 * Rebuilds the document column-by-column (by Day) instead of reading horizontally across days,
 * which eliminates horizontal contamination (e.g. mixing Monday, Tuesday and Wednesday).
 */
function reconstructTableByColumns(
  words: Array<{ text: string; bbox: { x0: number; y0: number; x1: number; y1: number } }>,
  _imgWidth: number,
  _imgHeight: number
): string {
  // 1. Detect Day column headers among words
  interface DayHeader {
    day: number;
    label: string;
    xCenter: number;
    y: number;
  }

  const detectedHeaders: DayHeader[] = [];

  words.forEach(w => {
    const raw = w.text.trim();
    if (raw.length < 3) return;

    for (const pat of DAYS_HEADER_PATTERNS) {
      if (pat.regex.test(raw)) {
        const xCenter = (w.bbox.x0 + w.bbox.x1) / 2;
        // Avoid duplicate matches for same day
        const existing = detectedHeaders.find(d => d.day === pat.day && Math.abs(d.xCenter - xCenter) < 60);
        if (!existing) {
          detectedHeaders.push({
            day: pat.day,
            label: pat.label,
            xCenter,
            y: (w.bbox.y0 + w.bbox.y1) / 2,
          });
        }
        break;
      }
    }
  });

  // If fewer than 2 days detected, fallback to standard linear text
  if (detectedHeaders.length < 2) {
    return '';
  }

  // Check if headers are laid out horizontally as columns
  const isHorizontalColumns = detectedHeaders.length >= 2 &&
    (Math.max(...detectedHeaders.map(d => d.xCenter)) - Math.min(...detectedHeaders.map(d => d.xCenter)) > 150);

  if (!isHorizontalColumns) {
    return '';
  }

  // Sort day columns from left to right (X ascending)
  detectedHeaders.sort((a, b) => a.xCenter - b.xCenter);

  // Compute column boundaries [xMin, xMax] for each day
  const columns = detectedHeaders.map((dh, idx, arr) => {
    const prev = arr[idx - 1];
    const next = arr[idx + 1];
    const xMin = prev ? (prev.xCenter + dh.xCenter) / 2 : 0;
    const xMax = next ? (dh.xCenter + next.xCenter) / 2 : 100000;
    const minY = dh.y + 10; // Start below the header row
    return {
      day: dh.day,
      label: dh.label,
      xMin,
      xMax,
      minY,
    };
  });

  // Reconstruct text grouped strictly by Day Column, sorted top-to-bottom
  const daySections: string[] = [];

  columns.forEach(col => {
    const colWords = words
      .filter(w => {
        const cx = (w.bbox.x0 + w.bbox.x1) / 2;
        const cy = (w.bbox.y0 + w.bbox.y1) / 2;
        return cx >= col.xMin && cx < col.xMax && cy >= col.minY;
      })
      .sort((a, b) => a.bbox.y0 - b.bbox.y0 || a.bbox.x0 - b.bbox.x0);

    if (colWords.length === 0) return;

    // Group words into lines within this column based on vertical proximity (tolerance 14px)
    const lineBuckets: Array<{ y: number; words: typeof colWords }> = [];

    colWords.forEach(w => {
      const cy = (w.bbox.y0 + w.bbox.y1) / 2;
      let bucket = lineBuckets.find(b => Math.abs(b.y - cy) <= 14);
      if (!bucket) {
        bucket = { y: cy, words: [] };
        lineBuckets.push(bucket);
      }
      bucket.words.push(w);
    });

    // Sort lines top to bottom
    lineBuckets.sort((a, b) => a.y - b.y);

    const formattedLines: string[] = [];
    formattedLines.push(`${col.label} :`);

    lineBuckets.forEach(b => {
      // Sort words left to right within line
      b.words.sort((a, b) => a.bbox.x0 - b.bbox.x0);
      const lineStr = b.words.map(w => w.text.trim()).join(' ');
      if (lineStr.length > 1) {
        formattedLines.push(lineStr);
      }
    });

    daySections.push(formattedLines.join('\n'));
  });

  return daySections.join('\n\n');
}

/**
 * Universal OCR function returning detailed spatial items and clean reconstructed text.
 */
export async function extractDetailedTextFromImage(
  imageFile: File | Blob,
  onProgress?: OcrProgressCallback
): Promise<DetailedOcrResult> {
  onProgress?.(0.1, 'Optimisation & accentuation des contrastes de l’image...');

  let processedImageUrl: string;
  try {
    processedImageUrl = await preprocessImageAdvanced(imageFile);
  } catch (err) {
    console.warn('Preprocessing fallback to raw image:', err);
    processedImageUrl = URL.createObjectURL(imageFile);
  }

  onProgress?.(0.25, 'Initialisation du moteur de vision académique Tesseract...');

  const worker = await createWorker('fra+eng', 1, {
    logger: (m) => {
      if (m.status === 'recognizing text') {
        const prog = 0.3 + (m.progress || 0) * 0.55;
        onProgress?.(prog, `Numérisation du tableau : ${Math.round((m.progress || 0) * 100)}%`);
      } else if (m.status === 'loading language traineddata') {
        onProgress?.(0.2, 'Chargement des dictionnaires français...');
      }
    },
  });

  try {
    onProgress?.(0.35, 'Reconnaissance spatiale des blocs de cours et horaires...');
    const ret = await worker.recognize(processedImageUrl);

    const rawText = ret.data.text || '';
    const pageData = ret.data as any;
    const rawWords: Array<any> = [];

    if (Array.isArray(pageData.words) && pageData.words.length > 0) {
      rawWords.push(...pageData.words);
    } else if (Array.isArray(pageData.lines)) {
      for (const line of pageData.lines) {
        if (Array.isArray(line.words)) {
          rawWords.push(...line.words);
        } else if (line.text && line.bbox) {
          rawWords.push(line);
        }
      }
    } else if (Array.isArray(pageData.blocks)) {
      for (const block of (pageData.blocks || [])) {
        for (const para of (block.paragraphs || [])) {
          for (const line of (para.lines || [])) {
            for (const word of (line.words || [])) {
              rawWords.push(word);
            }
          }
        }
      }
    }

    const words = rawWords
      .map((w: any) => ({
        text: String(w.text || '').trim(),
        confidence: Number(w.confidence || 80),
        bbox: {
          x0: Number(w.bbox?.x0 || 0),
          y0: Number(w.bbox?.y0 || 0),
          x1: Number(w.bbox?.x1 || 0),
          y1: Number(w.bbox?.y1 || 0),
        },
      }))
      .filter((w) => w.text.length > 0);

    // Convert Tesseract words into standard SpatialTextItem[] with normalized coordinates
    const spatialItems: SpatialTextItem[] = words.map((w) => ({
      str: w.text,
      x: Math.round(w.bbox.x0),
      y: Math.round(w.bbox.y0),
      width: Math.round(w.bbox.x1 - w.bbox.x0),
      height: Math.round(w.bbox.y1 - w.bbox.y0),
      pageNum: 1,
    }));

    onProgress?.(0.88, 'Désembrouillage 2D des colonnes et correction des heures...');

    // Attempt 2D column reconstruction to avoid horizontal bleed across days
    const columnText = reconstructTableByColumns(words, 2000, 2000);
    const cleanedRaw = cleanOcrTimeErrors(rawText);
    const cleanedReconstructed = columnText ? cleanOcrTimeErrors(columnText) : cleanedRaw;

    onProgress?.(0.98, 'Numérisation haute fidélité achevée.');
    await worker.terminate();

    return {
      rawText: cleanedRaw,
      reconstructedText: cleanedReconstructed,
      spatialItems,
      confidence: ret.data.confidence || 85,
    };
  } catch (error) {
    console.error('Tesseract OCR error:', error);
    await worker.terminate().catch(() => {});
    throw error;
  }
}

/**
 * Backward compatibility wrapper returning raw recognized text.
 */
export async function extractTextFromImage(
  imageFile: File | Blob,
  onProgress?: OcrProgressCallback
): Promise<string> {
  const res = await extractDetailedTextFromImage(imageFile, onProgress);
  return res.reconstructedText || res.rawText;
}
