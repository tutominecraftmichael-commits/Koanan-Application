import { GoogleGenAI } from "@google/genai";

// VARIABLE 1 : La clé est lue automatiquement depuis .env (injectée par Vite à la compilation) ou localStorage
export const getApiKey = (): string => {
  // 1. Clé personnalisée éventuelle stockée dans le navigateur (ex: saisie par l'étudiant / développeur)
  if (typeof window !== "undefined") {
    try {
      const stored = window.localStorage.getItem("konan_gemini_api_key");
      if (stored && stored.trim().length > 10) return stored.trim();
    } catch {
      // Ignorer si localStorage restreint
    }
  }
  // 2. Variable Vite import.meta.env
  if (typeof import.meta !== "undefined") {
    const metaEnv = (import.meta as any).env;
    if (metaEnv?.VITE_GEMINI_API_KEY) return metaEnv.VITE_GEMINI_API_KEY;
    if (metaEnv?.GEMINI_API_KEY) return metaEnv.GEMINI_API_KEY;
  }
  // 3. Variable process.env
  if (typeof process !== "undefined" && process.env) {
    if (process.env.VITE_GEMINI_API_KEY) return process.env.VITE_GEMINI_API_KEY;
    if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY;
  }
  return "";
};

export const hasGeminiApiKey = (): boolean => {
  return getApiKey().trim().length > 0;
};

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

// LE PROMPT OFFICIEL
export const PROMPT_OFFICIEL = `
En tant qu'ingénieur senior en développement web et architectures logicielles internationales, expert depuis plus de 5 ans dans le traitement algorithmique et l'analyse de données non structurées, ta mission est d'extraire avec une rigueur absolue les informations de l'emploi du temps fourni (photo ou document PDF) et de générer un flux texte parfaitement conforme à l'un des 3 formats cibles.

==============================================================================
RÈGLE FONDAMENTALE SUR LES HORAIRES (AUCUNE HEURE N'EST FIXE) :
==============================================================================
- Les heures présentes dans les exemples ci-dessous ne sont que de SIMPLES ILLUSTRATIONS de syntaxe. Ne les recopie JAMAIS aveuglément.
- AUCUN HORAIRE N'EST FIXÉ PAR DÉFAUT. Un cours peut commencer à 07:00, 07:15, 07:30, 08:00, 08:15 ou à n'importe quelle autre heure inscrite sur le document.
- Lis impérativement les coordonnées temporelles réelles (heure de début et heure de fin) indiquées sur la grille fournie.
- Si une case s'étend sur plusieurs plages horaires (cellules fusionnées, ex: 07:30 à 11:30 ou 14:00 à 17:00), fusionne l'heure de début et l'heure de fin réelles sur une seule et même ligne.
- Aligne rigoureusement chaque matière sur sa tranche horaire exacte et son jour. Ne permute aucune colonne avec une autre.

==============================================================================
DÉTECTION DU SYSTÈME D'ÉTUDE :
==============================================================================
Identifie le gabarit à appliquer selon le contenu :
1. NIVEAU SCOLAIRE (Collège / Lycée) : Matières d'enseignement général (Maths, Physique-Chimie, Français, SVT, Philo, Histoire-Géo, etc.), sans mention de CM/TD/TP ni code d'unité d'enseignement.
2. NIVEAU BTS : Présence de typologies de cours (CM, TD, TP), de matières appliquées/techniques et de salles spécialisées (Labo, Atelier, Salle machine).
3. NIVEAU LMD (Université / Grandes Écoles) : Présence de codes de matières (ex: [1MTH3350]), de mentions d'Amphis, d'enseignants (Dr, Prof, M.) ou de semestres.

==============================================================================
FORMATS DE SORTIE ATTENDUS (APPLIQUER STRICTEMENT LE FORMAT CORRESPONDANT) :
==============================================================================

--- FORMAT 1 : SCOLAIRE (COLLÈGE / LYCÉE) ---
Syntaxe par ligne : - HEURE_DEBUT - HEURE_FIN : Nom Matière

Exemple de structure :
JOUR: LUNDI
- 08:00 - 10:00 : Mathématiques
- 10:15 - 12:00 : Physique-Chimie
- 14:00 - 16:00 : Français

JOUR: MARDI
- 08:00 - 10:00 : Histoire-Géographie
- 10:15 - 12:00 : Anglais
- 14:00 - 16:00 : SVT


--- FORMAT 2 : BTS ---
Syntaxe par ligne : - HEURE_DEBUT - HEURE_FIN : Type Matière (Salle)
(Note : si la salle n'est pas spécifiée sur le document, omettre les parenthèses de la salle)

Exemple de structure :
JOUR: LUNDI
- 08:00 - 10:00 : CM Électronique Analogique (Amphi 1)
- 10:15 - 12:15 : TD Mathématiques Appliquées (Salle 302)
- 14:00 - 17:00 : TP Informatique Industrielle (Labo Info 3)

JOUR: MARDI
- 08:00 - 10:00 : CM Physique des Matériaux (Amphi 2)
- 10:15 - 12:15 : TD Systèmes Logiques (Salle 105)


--- FORMAT 3 : LMD (UNIVERSITÉ / GRANDES ÉCOLES) ---
Syntaxe par ligne : - HEURE_DEBUT - HEURE_FIN : Nom Matière [Code ECUE] | Salle: Nom Salle | Prof: Nom Enseignant
(Note : si le code, la salle ou l'enseignant ne figure pas sur le document, omettre simplement la section correspondante)

Exemple de structure :
JOUR: LUNDI
- 07:30 - 10:00 : Algèbres 2 [1MTH3350] | Salle: Amphi ESATIC | Prof: Dr KOIVOGUI
- 10:15 - 12:45 : Anglais [1LAN3350] | Salle: Salle 204 | Prof: M. YEO
- 14:30 - 17:00 : Dév Applications 1 [1INF3350] | Salle: Lab Info 1 | Prof: M. KONE

JOUR: MARDI
- 07:30 - 10:00 : Finance [1MAN3350] | Salle: Amphi B | Prof: Dr KADJO


==============================================================================
CONSIGNE DE SORTIE :
==============================================================================
Renvoie UNIQUEMENT le texte formaté correspondant au gabarit retenu, sans balises Markdown (aucun \`\`\`), sans commentaire, sans introduction ni conclusion.
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
    throw new Error("Clé API Gemini non configurée (VITE_GEMINI_API_KEY). Sur Vercel, ajoutez VITE_GEMINI_API_KEY dans Settings > Environment Variables, ou définissez-la dans l'application.");
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

  const modelsToTry = [
    "gemini-flash-lite-latest",
    "gemini-3.1-flash-lite",
    "gemini-3-flash-preview",
    "gemini-2.5-flash"
  ];

  let lastError: any = null;

  for (const model of modelsToTry) {
    try {
      const response = await ai.models.generateContent({
        model,
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
      if (raw && raw.length > 5) {
        return raw;
      }
    } catch (err: any) {
      console.warn(`[KONAN AI] Modèle ${model} indisponible (${err?.message?.slice(0, 100) || err}), bascule vers le suivant...`);
      lastError = err;
    }
  }

  throw lastError || new Error("Impossible d'extraire l'emploi du temps avec l'IA. Vérifiez votre connexion.");
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
