import { GoogleGenAI } from "@google/genai";
import {
  PROMPT_OFFICIEL,
  buildTimetablePrompt,
  TIMETABLE_MODELS,
  normalizeMime,
  stripDataUrlPrefix,
  cleanTimetableOutput,
} from "../../api/_timetablePrompt.js";

export { PROMPT_OFFICIEL };

/**
 * LECTURE D'EMPLOI DU TEMPS PAR L'IA
 * - Par défaut, le navigateur envoie le fichier au serveur (/api/extract-timetable), qui détient la clé
 *   Gemini secrète (variable serveur GEMINI_API_KEY). Aucune clé n'est présente dans le code de l'application.
 * - Si l'utilisateur a saisi SA PROPRE clé (bouton « Clé Gemini »), elle est utilisée directement depuis
 *   son navigateur : c'est sa clé, stockée chez lui uniquement.
 */

/** Clé personnelle saisie par l'utilisateur dans son navigateur (vide sinon). */
export const getApiKey = (): string => {
  if (typeof window === "undefined") return "";
  try {
    const stored = window.localStorage.getItem("konan_gemini_api_key");
    return stored && stored.trim().length > 10 ? stored.trim() : "";
  } catch {
    return "";
  }
};

/** La lecture par IA est toujours proposée : le serveur s'en charge si aucune clé personnelle n'est saisie. */
export const hasGeminiApiKey = (): boolean => true;

export const setCustomGeminiApiKey = (key: string): void => {
  if (typeof window !== "undefined") {
    try {
      if (key && key.trim().length > 0) {
        window.localStorage.setItem("konan_gemini_api_key", key.trim());
      } else {
        window.localStorage.removeItem("konan_gemini_api_key");
      }
    } catch (err) {
      console.warn("Impossible d'enregistrer la clé dans le localStorage:", err);
    }
  }
};

// Au-delà, le serveur (Vercel) refuse la requête : on prévient l'élève avant l'envoi.
const MAX_BASE64_CHARS = 4_200_000;

/** Lecture via le serveur Konan (clé Gemini secrète côté serveur). */
async function extractViaServer(fileBase64: string, mimeType: string, format?: "lmd" | "tpcm" | "scolaire"): Promise<string> {
  let res: Response;
  try {
    res = await fetch("/api/extract-timetable", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fileBase64, mimeType, format }),
    });
  } catch {
    throw new Error("Impossible de joindre le serveur. Vérifiez votre connexion puis réessayez.");
  }
  let data: { text?: string; message?: string } = {};
  try {
    data = await res.json();
  } catch {
    // réponse non JSON (ex. refus de Vercel pour un fichier trop lourd)
  }
  if (res.status === 413) throw new Error("Fichier trop lourd (3 Mo maximum). Prenez une photo plus légère ou découpez le PDF.");
  if (!res.ok || !data.text) {
    throw new Error(data.message || "L'IA n'a pas pu lire ce document. Réessayez ou saisissez vos cours à la main.");
  }
  return data.text;
}

/** Lecture directe depuis le navigateur avec la clé personnelle de l'utilisateur. */
async function extractWithPersonalKey(apiKey: string, fileBase64: string, mimeType: string, format?: "lmd" | "tpcm" | "scolaire"): Promise<string> {
  const ai = new GoogleGenAI({ apiKey });
  const prompt = buildTimetablePrompt(format);
  const data = stripDataUrlPrefix(fileBase64);
  const effectiveMime = normalizeMime(fileBase64, mimeType);
  let lastError: unknown = null;
  for (const model of TIMETABLE_MODELS) {
    try {
      const response = await ai.models.generateContent({
        model,
        contents: [{ role: "user", parts: [{ inlineData: { data, mimeType: effectiveMime } }, { text: prompt }] }],
      });
      const raw = cleanTimetableOutput(response.text || "");
      if (raw.length > 5) return raw;
    } catch (err) {
      console.warn(`[KONAN AI] Modèle ${model} indisponible, bascule vers le suivant...`);
      lastError = err;
    }
  }
  throw lastError || new Error("Impossible d'extraire l'emploi du temps avec l'IA. Vérifiez votre connexion.");
}

/**
 * C'est cette fonction que l'application appelle quand l'étudiant choisit un PDF ou prend une photo.
 * fileBase64 : contenu du fichier en base64 ; mimeType : "application/pdf", "image/jpeg"…
 * format : "lmd" (Université), "tpcm" (BTS) ou "scolaire" (Collège/Lycée).
 */
export async function extraireEmploiDuTemps(
  fileBase64: string,
  mimeType: string = "image/jpeg",
  format?: "lmd" | "tpcm" | "scolaire"
): Promise<string> {
  const personalKey = getApiKey();
  if (personalKey) return extractWithPersonalKey(personalKey, fileBase64, mimeType, format);
  if (stripDataUrlPrefix(fileBase64).length > MAX_BASE64_CHARS) {
    throw new Error("Fichier trop lourd (3 Mo maximum). Prenez une photo plus légère ou découpez le PDF.");
  }
  return extractViaServer(fileBase64, mimeType, format);
}

/**
 * Optimise et compresse intelligemment les photos prises sur smartphone (iPhone, Android)
 * pour éviter les dépassements de mémoire (OOM) et garantir un téléversement instantané (< 1s).
 */
async function compressImageForVision(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);

    img.onload = () => {
      URL.revokeObjectURL(objectUrl);
      try {
        const MAX_DIMENSION = 2048; // Résolution optimale pour la vision IA sans saturer la RAM mobile
        let { width, height } = img;

        if (width > MAX_DIMENSION || height > MAX_DIMENSION) {
          if (width > height) {
            height = Math.round((height * MAX_DIMENSION) / width);
            width = MAX_DIMENSION;
          } else {
            width = Math.round((width * MAX_DIMENSION) / height);
            height = MAX_DIMENSION;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
          throw new Error('Canvas 2D non disponible');
        }

        // Fond blanc pur pour éviter tout arrière-plan noir sur les conversions PNG/transparents
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);

        // Compression JPEG haute définition (0.88)
        const compressedBase64 = canvas.toDataURL('image/jpeg', 0.88);
        resolve(compressedBase64);
      } catch (err) {
        reject(err);
      }
    };

    img.onerror = (err) => {
      URL.revokeObjectURL(objectUrl);
      reject(err);
    };

    img.src = objectUrl;
  });
}

/**
 * Convertit un objet File (PDF ou Photo) du navigateur en chaîne Base64 optimisée
 * 100% compatible tous smartphones (iOS, Android) et ordinateurs.
 */
export async function convertFileToBase64(file: File): Promise<string> {
  const isImage = file.type.startsWith('image/') || /\.(jpe?g|png|webp|bmp|heic|heif)$/i.test(file.name);

  // Si c'est une image dans un navigateur, on compresse d'abord pour garantir la fluidité sur smartphone
  if (isImage && typeof window !== 'undefined' && typeof document !== 'undefined') {
    try {
      return await compressImageForVision(file);
    } catch (compressionErr) {
      console.warn('Fallback direct FileReader sur image :', compressionErr);
    }
  }

  // Lecture directe pour les fichiers PDF ou fallback
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result);
    };
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}
