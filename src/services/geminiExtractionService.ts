import { GoogleGenAI } from "@google/genai";

// VARIABLE 1 : La clé est lue automatiquement depuis .env (injectée par Vite à la compilation) ou localStorage
const getApiKey = (): string => {
  // 1. Clé personnalisée éventuelle stockée dans le navigateur (ex: saisie par l'étudiant)
  if (typeof window !== "undefined") {
    try {
      const stored = window.localStorage.getItem("konan_gemini_api_key");
      if (stored && stored.trim().length > 10) return stored.trim();
    } catch {
      // Ignorer si localStorage restreint
    }
  }
  // 2. Variable process.env injectée par Vite au build
  if (typeof process !== "undefined" && process.env?.GEMINI_API_KEY) {
    return process.env.GEMINI_API_KEY;
  }
  // 3. Variable Vite import.meta.env
  if (typeof import.meta !== "undefined" && (import.meta as any).env?.VITE_GEMINI_API_KEY) {
    return (import.meta as any).env.VITE_GEMINI_API_KEY;
  }
  return "";
};

// LE PROMPT OFFICIEL
export const PROMPT_OFFICIEL = `
Tu es le moteur d'extraction et de numérisation de l'application KONAN.
Ta mission est d'analyser l'emploi du temps fourni (photo ou document PDF) et de générer un fichier texte structuré selon l'un des 3 gabarits prédéfinis.

DIRECTIVES CRITIQUES :
1. Lis les heures réelles indiquées (07:00, 07:30, 08:00, etc.). N'invente jamais d'horaires.
2. Aligne visuellement chaque matière avec son jour exact et sa plage horaire. Ne mélange pas les colonnes.
3. Si un cours occupe plusieurs heures (ex: 14:00 à 17:00), fusionne début et fin sur une seule ligne.

DÉTECTION DU SYSTÈME D'ÉTUDE :
- CAS 1 : Scolaire (Collège/Lycée) -> Matières générales, pas de CM/TD/TP ni code ECUE.
- CAS 2 : BTS -> Mentions explicites CM/TD/TP, salles techniques (Labo, Atelier).
- CAS 3 : LMD -> Codes matières entre crochets [Code ECUE], amphis, enseignants.

GABARITS STRICTS DE SORTIE :

--- SI CAS 1 (SCOLAIRE) ---
JOUR :
HH:MM - HH:MM Matière

--- SI CAS 2 (BTS) ---
JOUR :
HH:MM - HH:MM Type Matière | Salle

--- SI CAS 3 (LMD) ---
JOUR :
HH:MM - HH:MM | Matière [Code ECUE] | Salle / Amphi | Enseignant

RÈGLE ABSOLUE :
Renvoie UNIQUEMENT le texte formaté correspondant au gabarit retenu.
N'inclus AUCUN commentaire, AUCUNE balise Markdown.
`;

/**
 * C'est cette fonction que l'application appelle quand l'étudiant choisit un PDF ou prend une photo.
 * 
 * VARIABLE 2 : fileBase64 -> Le contenu du PDF ou de la photo converti en texte Base64
 * VARIABLE 3 : mimeType -> "application/pdf" (si PDF) ou "image/jpeg" / "image/png" (si photo)
 */
export async function extraireEmploiDuTemps(fileBase64: string, mimeType: string = "image/jpeg"): Promise<string> {
  const apiKey = getApiKey();
  if (!apiKey) {
    throw new Error("Clé API Gemini introuvable dans le fichier .env (GEMINI_API_KEY ou VITE_GEMINI_API_KEY).");
  }

  const ai = new GoogleGenAI({ apiKey });

  // Détecte automatiquement le mimeType à partir du préfixe Data URL si présent
  let effectiveMime = mimeType;
  const prefixMatch = fileBase64.match(/^data:([^;]+);base64,/);
  if (prefixMatch && prefixMatch[1]) {
    effectiveMime = prefixMatch[1];
  }

  // Supprime le préfixe si le front-end l'a envoyé avec "data:image/...;base64,"
  const cleanBase64 = fileBase64.replace(/^data:[^;]+;base64,/, "");

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              inlineData: {
                data: cleanBase64,
                mimeType: effectiveMime
              }
            },
            { text: PROMPT_OFFICIEL }
          ]
        }
      ]
    });

    let raw = response.text ? response.text.trim() : "";
    // Supprime d'éventuels blocs markdown englobants (```text ... ```)
    raw = raw.replace(/^```[a-z]*\s*\n?/i, "").replace(/\n?```\s*$/i, "").trim();
    return raw;
  } catch (err: any) {
    console.warn("Échec gemini-2.5-flash, bascule sur gemini-2.0-flash:", err?.message || err);
    const responseFallback = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              inlineData: {
                data: cleanBase64,
                mimeType: effectiveMime
              }
            },
            { text: PROMPT_OFFICIEL }
          ]
        }
      ]
    });

    let raw = responseFallback.text ? responseFallback.text.trim() : "";
    raw = raw.replace(/^```[a-z]*\s*\n?/i, "").replace(/\n?```\s*$/i, "").trim();
    return raw;
  }
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
