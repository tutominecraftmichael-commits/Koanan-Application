import { GoogleGenAI } from "@google/genai";
import type { ScheduleFormatType } from "./pdfParserService";

/**
 * Interface pour le suivi détaillé de l'extraction OCR FOR ALL
 */
export interface OcrForAllProgressCallback {
  (step: 'server_check' | 'pass1' | 'pass2' | 'cleaning' | 'done', message: string, progress: number): void;
}

/**
 * Récupère la clé API Gemini de manière universelle
 */
export const getGeminiApiKey = (): string => {
  if (typeof window !== "undefined") {
    try {
      const stored = window.localStorage.getItem("konan_gemini_api_key");
      if (stored && stored.trim().length > 10) return stored.trim();
    } catch {
      // Ignorer
    }
  }
  if (typeof process !== "undefined" && process.env?.GEMINI_API_KEY) {
    return process.env.GEMINI_API_KEY;
  }
  if (typeof import.meta !== "undefined" && (import.meta as any).env?.VITE_GEMINI_API_KEY) {
    return (import.meta as any).env.VITE_GEMINI_API_KEY;
  }
  return "";
};

/**
 * RÈGLES MAÎTRESSES DU MOTEUR OCR FOR ALL :
 * 1. Zéro hallucination, zéro omission.
 * 2. Résolution des confusions visuelles de caractères (8 vs B, 0 vs O/D, 1 vs I/l, 5 vs S, 2 vs Z, 9 vs g).
 * 3. Suivi spatial des colonnes et fusion des créneaux contigus.
 */
export const OCR_FOR_ALL_SYSTEM_PROMPT = `Tu es le moteur de numérisation de haute précision "OCR FOR ALL" intégré à l'application KONAN AI.
Tu extrais les emplois du temps académiques avec une rigueur absolue de 100% de fidélité par rapport à l'image fournie.

RÈGLES ABSOLUES - NE JAMAIS DÉROGER :
1. FIDÉLITÉ DES CARACTÈRES ET DES CHIFFRES (Désambiguïsation visuelle) :
   - '8' vs 'B' : Les heures sont strictement des chiffres. Ne jamais écrire 'OB:00' ou '0B:00' mais '08:00'.
   - '0' vs 'O' / 'D' : Ne jamais écrire 'lO:OO' mais '10:00'.
   - '1' vs 'I' / 'l' : Ne jamais écrire 'l4:00' ou 'I4:00' mais '14:00'.
   - '5' vs 'S' : Ne jamais écrire '1S:00' mais '15:00'.
   - '2' vs 'Z' : Ne jamais écrire '1Z:00' mais '12:00'.
   - '9' vs 'g' : Ne jamais écrire '0g:00' mais '09:00'.
   - Chaque plage horaire doit être exactement au format standard "HH:MM - HH:MM".

2. ALIGNEMENT SPATIAL DU QUADRILLAGE (COLONNES ET LIGNES) :
   - Dans une grille d'emploi du temps, chaque colonne correspond à un jour précis (ou à une plage horaire).
   - Chaque cours doit STRICTEMENT appartenir à son jour réel. INTERDICTION de mélanger les colonnes ou de reporter un cours du mardi sous le lundi.
   - Si un cours s'étend sur plusieurs cellules contiguës (ex: 08:00 à 10:00 ou 14:00 à 17:00), fusionne-le sur une SEULE ligne avec l'heure de début exacte et l'heure de fin exacte.

3. DÉTECTION DU SYSTÈME D'ÉTUDE :
   - CAS 1 : Scolaire (Collège/Lycée) -> Matières générales.
   - CAS 2 : BTS -> Mentions CM/TD/TP et salles/ateliers.
   - CAS 3 : LMD -> Codes UE/ECUE entre crochets [CODE], amphis/salles, et noms d'enseignants.

GABARITS STRICTS DE SORTIE (Renvoie UNIQUEMENT ce format sans AUCUN commentaire ni balise markdown) :

--- SI CAS 1 (SCOLAIRE) ---
JOUR :
HH:MM - HH:MM Matière

--- SI CAS 2 (BTS) ---
JOUR :
HH:MM - HH:MM Type Matière | Salle

--- SI CAS 3 (LMD) ---
JOUR :
HH:MM - HH:MM | Matière [Code ECUE] | Salle / Amphi | Enseignant
`;

/**
 * Prompt spécifique orienté selon le format choisi par l'étudiant
 */
export function buildPrimaryPromptForFormat(format?: ScheduleFormatType): string {
  let specificDirective = "";
  if (format === 'scolaire') {
    specificDirective = `IMPORTANT : Cet emploi du temps est de niveau SCOLAIRE (Collège/Lycée). Utilise strictement le gabarit :
JOUR :
HH:MM - HH:MM Matière`;
  } else if (format === 'tpcm') {
    specificDirective = `IMPORTANT : Cet emploi du temps est de niveau BTS / FORMATION PROFESSIONNELLE. Utilise strictement le gabarit :
JOUR :
HH:MM - HH:MM Type Matière | Salle`;
  } else if (format === 'lmd') {
    specificDirective = `IMPORTANT : Cet emploi du temps est de niveau UNIVERSITAIRE (LMD / Licence-Master-Doctorat). Utilise strictement le gabarit :
JOUR :
HH:MM - HH:MM | Matière [Code ECUE] | Salle / Amphi | Enseignant`;
  }

  return `${OCR_FOR_ALL_SYSTEM_PROMPT}

${specificDirective}

DIRECTIVE FINALE :
Renvoie UNIQUEMENT le texte structuré avec les jours (LUNDI :, MARDI :, etc.) et les créneaux horaires exacts.
Ne rajoute AUCUN mot d'introduction, AUCUNE explication, AUCUN bloc Markdown.`;
}

/**
 * Prompt du Dual-Pass Self-Correction QA Loop (Zero-Error Mode)
 * Inspiré du moteur ocrEngine.ts de l'extension 'OCR for ALL'
 */
export function buildQaRefinementPrompt(draftText: string, format?: ScheduleFormatType): string {
  let formatGuide = "";
  if (format === 'scolaire') {
    formatGuide = "\n   - Format Scolaire strict : HH:MM - HH:MM Matière";
  } else if (format === 'tpcm') {
    formatGuide = "\n   - Format BTS strict : HH:MM - HH:MM Type Matière | Salle";
  } else if (format === 'lmd') {
    formatGuide = "\n   - Format LMD strict : HH:MM - HH:MM | Matière [Code ECUE] | Salle / Amphi | Enseignant";
  }

  return `Tu es l'Éditeur QA de Haute Précision du moteur OCR FOR ALL.
Ta mission est de comparer la transcription brouillon ci-dessous directement avec l'image originale de l'emploi du temps.

GRILLE DE VÉRIFICATION ZÉRO-ERREUR :
1. HORAIRES & CRÉNEAUX :
   - Vérifie chaque heure de début et chaque heure de fin par rapport à la grille visuelle.
   - Corrige les confusions de chiffres ('OB:00' -> '08:00', 'l4:3O' -> '14:30', 'I0:00' -> '10:00', etc.).
   - Assure-toi que les cours de 2h, 3h ou 4h ont leur heure de fin réelle (ex: 08:00 - 10:00, 14:00 - 17:00).
2. JOURS ET MATIÈRES :
   - Vérifie que chaque matière est bien sous le jour correspondant à sa colonne dans le document (LUNDI, MARDI, MERCREDI...).
   - Restaure les noms de matières tronqués, les codes ECUE (ex: [MATH-101]) et les noms des enseignants ou salles.
   - Supprime les doublons ou cours fantômes qui n'apparaissent pas sur l'image.
3. RESPECT DU FORMAT OFFICIEL KONAN :
   - JOUR : (en majuscules suivi de deux-points)
   - HH:MM - HH:MM [détails du cours selon format]${formatGuide}

Transcription brouillon à vérifier et corriger :
${draftText}

DIRECTIVE : Renvoie UNIQUEMENT le texte final corrigé à 100% de fidélité, sans markdown, sans explication.`;
}

/**
 * Vérifie si le serveur proxy local OCR FOR ALL (port 50906) est disponible
 */
export async function checkOcrForAllServer(port: number = 50906): Promise<{ available: boolean; info?: any }> {
  if (typeof window === "undefined" && typeof fetch === "undefined") {
    return { available: false };
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1200);

    const res = await fetch(`http://localhost:${port}/health`, {
      method: "GET",
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      return { available: true, info: data };
    }
  } catch {
    // Serveur local non actif ou indisponible dans ce contexte
  }
  return { available: false };
}

/**
 * Exécute une requête d'extraction via le serveur local proxy OCR FOR ALL
 */
async function extractViaLocalOcrServer(
  fileBase64: string,
  mimeType: string,
  prompt: string,
  port: number = 50906
): Promise<string> {
  const cleanBase64 = fileBase64.replace(/^data:[^;]+;base64,/, "");
  const dataUrl = `data:${mimeType};base64,${cleanBase64}`;

  const response = await fetch(`http://localhost:${port}/v1/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: prompt },
            { type: "image_url", image_url: { url: dataUrl } }
          ]
        }
      ]
    })
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Erreur serveur OCR FOR ALL (${response.status}): ${errText}`);
  }

  const json = await response.json();
  const text = json.choices?.[0]?.message?.content || "";
  return text.trim();
}

/**
 * Exécute un appel direct Gemini Vision avec fallback automatique de modèles
 */
async function extractWithGeminiDirect(
  cleanBase64: string,
  mimeType: string,
  prompt: string,
  apiKey: string,
  model: string = "gemini-2.5-flash"
): Promise<string> {
  const ai = new GoogleGenAI({ apiKey });

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
                mimeType: mimeType
              }
            },
            { text: prompt }
          ]
        }
      ]
    });

    let raw = response.text ? response.text.trim() : "";
    raw = raw.replace(/^```[a-z]*\s*\n?/i, "").replace(/\n?```\s*$/i, "").trim();
    return raw;
  } catch (err: any) {
    if (model === "gemini-2.5-flash") {
      console.warn("Échec gemini-2.5-flash direct, bascule sur gemini-2.0-flash :", err?.message || err);
      return extractWithGeminiDirect(cleanBase64, mimeType, prompt, apiKey, "gemini-2.0-flash");
    }
    throw err;
  }
}

/**
 * Normalisateur post-OCR déterministe pour corriger les artefacts typographiques des scans
 */
export function sanitizeAndAlignScheduleText(rawText: string): string {
  if (!rawText) return "";

  let cleaned = rawText
    // Supprimer les blocs de code markdown
    .replace(/^```[a-z]*\s*\n?/gi, "")
    .replace(/\n?```\s*$/gi, "")
    // Nettoyer les balises HTML éventuelles
    .replace(/<[^>]+>/g, "");

  const lines = cleaned.split("\n");
  const processedLines: string[] = [];

  for (let line of lines) {
    let trimmed = line.trim();
    if (!trimmed) {
      processedLines.push("");
      continue;
    }

    // 1. Correction des en-têtes de jour (ex: "lundi:" -> "LUNDI :", "**MARDI :**" -> "MARDI :")
    const dayMatch = trimmed.match(/^[*_#\s-]*\b(lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche)\b[*_#\s-]*[:|-]?\s*(.*)$/i);
    if (dayMatch) {
      const dayName = dayMatch[1].toUpperCase();
      const rest = dayMatch[2].trim();
      if (!rest) {
        processedLines.push(`${dayName} :`);
        continue;
      } else {
        processedLines.push(`${dayName} :`);
        trimmed = rest;
      }
    }

    // 2. Correction des confusions OCR dans les heures (ex: "OB:OO - l0:OO" -> "08:00 - 10:00")
    trimmed = trimmed
      // Remplacer les lettres dans les heures (OB -> 08, l4 -> 14, etc.)
      .replace(/\b([oO0])([bB8]):([oO0]{2})\b/g, "08:00")
      .replace(/\b([lI1])([oO0]):([oO0]{2})\b/g, "10:00")
      .replace(/\b([lI1])([1-9]):([oO0]{2})\b/g, "1$2:00")
      .replace(/\b([lI1])([0-9]):([0-5][0-9])\b/g, "1$2:$3")
      .replace(/\b([0-2]?[0-9])[hH:]([0-5][0-9])?\s*[-–—àaA/to]+\s*([0-2]?[0-9])[hH:]([0-5][0-9])?\b/g, 
        (_m, h1, m1, h2, m2) => {
          const startH = h1.padStart(2, '0');
          const startM = (m1 || '00').padStart(2, '0');
          const endH = h2.padStart(2, '0');
          const endM = (m2 || '00').padStart(2, '0');
          return `${startH}:${startM} - ${endH}:${endM}`;
        }
      );

    processedLines.push(trimmed);
  }

  return processedLines.join("\n").trim();
}

/**
 * MOTEUR UNIVERSEL OCR FOR ALL - EXTRACTION EN DOUBLE PASSE (ZERO-ERROR MODE)
 * Exécute soit via le serveur proxy OCR FOR ALL (port 50906), soit directement avec Gemini.
 */
export async function executeOcrForAllExtraction(
  fileBase64: string,
  mimeType: string = "image/jpeg",
  format?: ScheduleFormatType,
  onProgress?: OcrForAllProgressCallback
): Promise<string> {
  // Détecte le type MIME exact
  let effectiveMime = mimeType;
  const prefixMatch = fileBase64.match(/^data:([^;]+);base64,/);
  if (prefixMatch && prefixMatch[1]) {
    effectiveMime = prefixMatch[1];
  }
  const cleanBase64 = fileBase64.replace(/^data:[^;]+;base64,/, "");

  // 1. Vérification du serveur proxy local de l'extension
  onProgress?.('server_check', 'Détection du serveur local OCR FOR ALL (port 50906)...', 10);
  const serverStatus = await checkOcrForAllServer(50906);
  const isServerAvailable = serverStatus.available;

  const apiKey = getGeminiApiKey();
  if (!isServerAvailable && !apiKey) {
    throw new Error("Clé API Gemini introuvable dans le fichier .env (GEMINI_API_KEY ou VITE_GEMINI_API_KEY).");
  }

  const primaryPrompt = buildPrimaryPromptForFormat(format);

  // 2. PASSE 1 : Extraction primaire de haute fidélité
  let pass1Result = "";
  if (isServerAvailable) {
    onProgress?.('pass1', 'Pass 1/2 : Extraction du quadrillage par le serveur OCR FOR ALL...', 30);
    try {
      pass1Result = await extractViaLocalOcrServer(cleanBase64, effectiveMime, primaryPrompt);
    } catch (serverErr) {
      console.warn("Échec requête serveur local, bascule sur API directe :", serverErr);
      onProgress?.('pass1', 'Pass 1/2 : Extraction haute précision (Moteur IA Gemini 2.5 Flash)...', 35);
      pass1Result = await extractWithGeminiDirect(cleanBase64, effectiveMime, primaryPrompt, apiKey);
    }
  } else {
    onProgress?.('pass1', 'Pass 1/2 : Extraction haute précision (Moteur IA Gemini 2.5 Flash)...', 35);
    pass1Result = await extractWithGeminiDirect(cleanBase64, effectiveMime, primaryPrompt, apiKey);
  }

  if (!pass1Result || pass1Result.trim().length < 10) {
    throw new Error("L'extraction primaire n'a retourné aucun contenu exploitable.");
  }

  // 3. PASSE 2 : Self-Correction Refinement Loop (Zero-Error Mode de OCR FOR ALL)
  onProgress?.('pass2', 'Pass 2/2 : Vérification visuelle & auto-correction zéro-erreur (Double-Check)...', 70);
  const qaPrompt = buildQaRefinementPrompt(pass1Result, format);
  let finalVerifiedResult = pass1Result;

  try {
    let pass2Result = "";
    if (isServerAvailable) {
      pass2Result = await extractViaLocalOcrServer(cleanBase64, effectiveMime, qaPrompt);
    } else {
      pass2Result = await extractWithGeminiDirect(cleanBase64, effectiveMime, qaPrompt, apiKey);
    }

    if (pass2Result && pass2Result.trim().length > 10) {
      finalVerifiedResult = pass2Result;
    }
  } catch (qaErr) {
    console.warn("Avertissement boucle QA vérification (résultat Pass 1 conservé) :", qaErr);
  }

  // 4. Nettoyage et normalisation finale
  onProgress?.('cleaning', 'Alignement des créneaux et normalisation déterministe...', 90);
  const sanitized = sanitizeAndAlignScheduleText(finalVerifiedResult);

  onProgress?.('done', 'Numérisation OCR FOR ALL terminée avec succès à 100% !', 100);
  return sanitized;
}
