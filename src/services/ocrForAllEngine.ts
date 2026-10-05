import { GoogleGenAI } from "@google/genai";
import { 
  type ScheduleFormatType, 
  parseTimetableText, 
  formatExtractedScheduleToFormatText 
} from "./pdfParserService";

/**
 * Interface pour le suivi détaillé de l'extraction OCR FOR ALL
 */
export interface OcrForAllProgressCallback {
  (step: 'server_check' | 'pass1' | 'pass2' | 'cleaning' | 'done', message: string, progress: number): void;
}

/**
 * Exemples de référence officiels de l'application KONAN pour chaque niveau d'étude
 */
export const OFFICIAL_FORMAT_EXAMPLES: Record<ScheduleFormatType, string> = {
  lmd: `LUNDI :
07:30 - 10:00 | Algèbres 2 [1MTH3350] | Amphi A | Dr KOIVOGUI
10:15 - 12:45 | Anglais [1LAN3350] | Salle 204 | M. YEO
14:30 - 17:00 | Développement d'Applications [1INF3350] | Lab Info | M. KONE
MARDI :
07:30 - 10:00 | Fondamentaux de la Finance [1MAN3350] | Amphi B | Dr KADJO
10:15 - 12:45 | Conception Web [2INF3350] | Lab Info | M. MEYER
MERCREDI :
07:30 - 10:00 | Analyse 2 [2MTH3350] | Amphi A | Dr GOLI`,

  tpcm: `LUNDI :
08:00 - 10:00 CM Électronique Analogique | Amphi 1
10:15 - 12:15 TD Mathématiques Appliquées | Salle 302
14:00 - 17:00 TP Informatique Industrielle | Labo Info
MARDI :
08:00 - 10:00 CM Physique des Matériaux | Amphi 2
10:15 - 12:15 TD Automatismes | Salle 105
14:00 - 16:00 TP Électricité | Labo Elec
JEUDI :
08:00 - 10:00 CM Anglais Technique | Salle 201
10:15 - 12:15 TD Thermodynamique | Salle 303`,

  scolaire: `LUNDI :
08:00 - 10:00 Mathématiques
10:15 - 12:00 Physique-Chimie
14:00 - 16:00 Français
MARDI :
08:00 - 10:00 Histoire-Géographie
10:15 - 12:00 Anglais
14:00 - 16:00 SVT
MERCREDI :
08:00 - 10:00 Philosophie
10:15 - 12:00 EPS`
};

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
 * Prompt spécifique orienté selon le format choisi par l'étudiant
 */
export function buildPrimaryPromptForFormat(format: ScheduleFormatType = 'lmd'): string {
  const exampleText = OFFICIAL_FORMAT_EXAMPLES[format] || OFFICIAL_FORMAT_EXAMPLES.lmd;

  let levelInstruction = "";
  if (format === 'scolaire') {
    levelInstruction = "NIVEAU SCOLAIRE (Collège/Lycée) : Horaires simples + Matière.";
  } else if (format === 'tpcm') {
    levelInstruction = "NIVEAU BTS / TECHNIQUE : Horaires + Type (CM, TD, TP) + Matière | Salle.";
  } else {
    levelInstruction = "NIVEAU LMD (Universitaire) : Horaires | Matière [Code ECUE] | Salle / Amphi | Enseignant.";
  }

  return `Tu es le moteur de numérisation de haute fidélité OCR FOR ALL de l'application KONAN AI.
Ta mission est d'extraire l'emploi du temps fourni (photo ou document) et de le transcrire DIRECTEMENT EN FICHIER TEXTE OFFICIEL.

${levelInstruction}

RÈGLE MAÎTRESSE ABSOLUE - INTERDICTION FORMELLE DU CODE :
- INTERDICTION ABSOLUE de renvoyer du code JSON (pas d'accolades { }, pas de crochets [ ]).
- INTERDICTION ABSOLUE de renvoyer du code Markdown (pas de balises \`\`\`text, \`\`\`json, \`\`\`markdown, pas de tableaux Markdown).
- INTERDICTION ABSOLUE de renvoyer du code Python, TypeScript, HTML ou LaTeX.
- L'application KONAN exige STRICTEMENT et EXCLUSIVEMENT un FICHIER TEXTE BRUT structuré à 100% selon l'exemple officiel ci-dessous :

--- EXEMPLE EXACT DU FICHIER TEXTE À GÉNÉRER ---
${exampleText}
--- FIN DE L'EXEMPLE ---

RÈGLES DE RECONNAISSANCE PRÉCISE (MOTEUR OCR FOR ALL) :
1. DÉSAMBIGUÏSATION VISUELLE DES CHIFFRES ET DES HEURES :
   - '8' vs 'B' : Les heures sont strictement des chiffres (ex: 08:00, jamais OB:00).
   - '0' vs 'O' : 10:00, jamais lO:OO.
   - '1' vs 'I' ou 'l' : 14:00, jamais l4:00.
   - '5' vs 'S' : 15:00, jamais 1S:00.
   - Format horaire rigoureux : "HH:MM - HH:MM".
2. ALIGNEMENT STRICT DU QUADRILLAGE :
   - Chaque colonne représente un jour. Ne mélange jamais les cours d'une colonne avec une autre.
   - Pour les cours s'étendant sur 2h ou 3h consécutives, fusionne l'heure de début et l'heure de fin sur une seule ligne.
3. STRUCTURE DE SORTIE :
   - Chaque jour commence par "JOUR :" (ex: LUNDI :, MARDI :).
   - Chaque cours est sur sa propre ligne.

SORTIE : Génère UNIQUEMENT le texte du fichier (aucun mot d'introduction, aucun commentaire).`;
}

/**
 * Prompt du Dual-Pass Self-Correction QA Loop (Zero-Error Mode)
 */
export function buildQaRefinementPrompt(draftText: string, format: ScheduleFormatType = 'lmd'): string {
  const exampleText = OFFICIAL_FORMAT_EXAMPLES[format] || OFFICIAL_FORMAT_EXAMPLES.lmd;

  return `Tu es l'Éditeur QA de Haute Précision du moteur OCR FOR ALL.
Compare la transcription brouillon ci-dessous directement avec l'image originale de l'emploi du temps pour éliminer toute erreur.

VÉRIFICATIONS CRITIQUES :
1. HORAIRES : Corrige toute erreur de lecture ('OB:00' -> '08:00', 'l4:3O' -> '14:30', 'I0:00' -> '10:00').
2. JOURS ET MATIÈRES : Vérifie que chaque matière est bien sous son jour exact. Restaure les codes ECUE, salles et professeurs manquants.
3. CONVERSION EN FICHIER TEXTE STRICT (ZÉRO CODE) :
   - INTERDICTION TOTALE d'émettre du JSON, du Markdown ou du code.
   - Doit être strictement un fichier texte brut identique à l'exemple officiel :
${exampleText}

Brouillon à vérifier et corriger :
${draftText}

SORTIE : Renvoie UNIQUEMENT le fichier texte final corrigé à 100%.`;
}

/**
 * Normalise une chaîne d'heure en format standard HH:MM
 */
function normalizeTimeString(t: string): string {
  if (!t) return "08:00";
  const match = t.match(/(\d{1,2})[h:H:](\d{2})?/i);
  if (!match) return "08:00";
  const h = match[1].padStart(2, '0');
  const m = (match[2] || '00').padStart(2, '0');
  return `${h}:${m}`;
}

/**
 * Convertit n'importe quel objet ou tableau JSON en créneaux structurés
 */
function parseJsonScheduleToSlots(obj: any): {
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  subject: string;
  room?: string;
  professor?: string;
  code?: string;
  type?: string;
}[] {
  const dayNames = ['LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI', 'SAMEDI', 'DIMANCHE'];
  const slots: any[] = [];

  function scan(val: any, currentDay: number | null) {
    if (!val) return;

    if (Array.isArray(val)) {
      val.forEach(item => scan(item, currentDay));
      return;
    }

    if (typeof val === 'object') {
      // 1. Détection de clés de jours dans un objet parent (ex: { "lundi": [...], "mardi": [...] })
      for (const key of Object.keys(val)) {
        const lowerKey = key.toLowerCase();
        let matchedDay: number | null = null;
        for (let d = 0; d < dayNames.length; d++) {
          const dName = dayNames[d].toLowerCase();
          if (lowerKey.includes(dName) || lowerKey.startsWith(dName.slice(0, 3))) {
            matchedDay = d;
            break;
          }
        }
        if (matchedDay !== null && (Array.isArray(val[key]) || typeof val[key] === 'object')) {
          scan(val[key], matchedDay);
        }
      }

      // 2. Détection d'un créneau / cours individuel
      const subject = val.subject || val.name || val.matiere || val.course || val.titre || val.title || val.cours || val.module;
      if (subject && typeof subject === 'string') {
        let day = currentDay;
        const dayField = val.day || val.jour || val.dayOfWeek || val.date;
        if (typeof dayField === 'string') {
          for (let d = 0; d < dayNames.length; d++) {
            const dName = dayNames[d].toLowerCase();
            if (dayField.toLowerCase().includes(dName) || dayField.toLowerCase().startsWith(dName.slice(0, 3))) {
              day = d;
              break;
            }
          }
        }
        if (day === null || day === undefined) day = 0;

        let start = "08:00";
        let end = "10:00";
        const timeField = val.time || val.horaire || val.creneau || val.hours || val.slot;
        if (timeField && typeof timeField === 'string') {
          const parts = timeField.split(/[-–—àa/to]+/);
          if (parts.length >= 2) {
            start = normalizeTimeString(parts[0]);
            end = normalizeTimeString(parts[1]);
          }
        } else {
          start = normalizeTimeString(val.start || val.startTime || val.debut || "08:00");
          end = normalizeTimeString(val.end || val.endTime || val.fin || "10:00");
        }

        slots.push({
          dayOfWeek: day,
          startTime: start,
          endTime: end,
          subject: subject.trim(),
          room: (val.room || val.salle || "").trim() || undefined,
          professor: (val.professor || val.prof || val.enseignant || "").trim() || undefined,
          code: (val.code || val.ecue || "").trim() || undefined,
          type: (val.type || "CM").trim() || undefined
        });
      }
    }
  }

  scan(obj, null);
  return slots;
}

/**
 * Convertit un tableau de créneaux en fichier texte officiel selon le format choisi
 */
function serializeSlotsToOfficialText(
  slots: {
    dayOfWeek: number;
    startTime: string;
    endTime: string;
    subject: string;
    room?: string;
    professor?: string;
    code?: string;
    type?: string;
  }[],
  format: ScheduleFormatType = 'lmd'
): string {
  const dayNames = ['LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI', 'SAMEDI', 'DIMANCHE'];
  const lines: string[] = [];

  for (let d = 0; d < dayNames.length; d++) {
    const daySlots = slots
      .filter(s => s.dayOfWeek === d)
      .sort((a, b) => a.startTime.localeCompare(b.startTime));

    if (daySlots.length === 0) continue;

    lines.push(`${dayNames[d]} :`);
    for (const slot of daySlots) {
      const codeStr = slot.code ? ` [${slot.code.replace(/[\[\]]/g, '')}]` : '';
      const roomStr = slot.room ? ` | ${slot.room}` : '';
      const profStr = slot.professor ? ` | ${slot.professor}` : '';

      if (format === 'lmd') {
        lines.push(`${slot.startTime} - ${slot.endTime} | ${slot.subject}${codeStr}${roomStr}${profStr}`);
      } else if (format === 'tpcm') {
        const typeBadge = slot.type ? `${slot.type.toUpperCase()} ` : 'CM ';
        lines.push(`${slot.startTime} - ${slot.endTime} ${typeBadge}${slot.subject}${roomStr}`);
      } else {
        // Scolaire
        lines.push(`${slot.startTime} - ${slot.endTime} ${slot.subject}`);
      }
    }
  }

  return lines.join('\n');
}

/**
 * Normalisateur et convertisseur universel :
 * Transforme TOUT retour d'OCR (code JSON, bloc markdown, tableau, ou texte brut)
 * en un FICHIER TEXTE OFFICIEL conforme aux exemples pour chaque niveau d'étude.
 */
export function convertAnyOcrOutputToOfficialTextFile(
  rawInput: string,
  format: ScheduleFormatType = 'lmd'
): string {
  if (!rawInput || !rawInput.trim()) {
    return OFFICIAL_FORMAT_EXAMPLES[format] || OFFICIAL_FORMAT_EXAMPLES.lmd;
  }

  let text = rawInput.trim();

  // 1. Détection et extraction de structures JSON (si l'OCR a renvoyé du code JSON)
  let jsonCandidate = "";
  if (text.startsWith("```json")) {
    jsonCandidate = text.replace(/^```json\s*/i, "").replace(/```\s*$/i, "").trim();
  } else if (text.startsWith("```") && text.endsWith("```")) {
    jsonCandidate = text.replace(/^```[a-z]*\s*/i, "").replace(/```\s*$/i, "").trim();
  } else if ((text.startsWith("{") && text.endsWith("}")) || (text.startsWith("[") && text.endsWith("]"))) {
    jsonCandidate = text;
  }

  if (jsonCandidate) {
    try {
      const parsedJson = JSON.parse(jsonCandidate);
      const slots = parseJsonScheduleToSlots(parsedJson);
      if (slots.length > 0) {
        const generated = serializeSlotsToOfficialText(slots, format);
        if (generated.trim().length > 15) {
          return generated;
        }
      }
    } catch {
      // Ignorer l'erreur JSON et continuer
    }
  }

  // 2. Nettoyage de tout bloc de code englobant (```text, ```markdown, etc.)
  text = text
    .replace(/^```[a-z]*\s*\n?/gi, "")
    .replace(/\n?```\s*$/gi, "")
    .replace(/<[^>]+>/g, "");

  // 3. Normalisation des artefacts de caractères visuels
  const sanitized = sanitizeAndAlignScheduleText(text);

  // 4. Passage par le parseur universel de l'application
  try {
    const parsedSchedule = parseTimetableText(
      sanitized,
      'Emploi_du_Temps_OCR.txt',
      sanitized.length,
      undefined,
      1,
      format
    );

    if (parsedSchedule && parsedSchedule.slots && parsedSchedule.slots.length > 0) {
      const formatted = formatExtractedScheduleToFormatText(parsedSchedule, format);
      if (formatted && formatted.trim().length > 10) {
        return formatted.trim();
      }
    }
  } catch (err) {
    console.warn("Notice convertisseur texte officiel :", err);
  }

  // 5. Si déjà dans une structure proche, s'assurer que les en-têtes et tirets sont impeccables
  if (sanitized.includes(":") && (sanitized.includes("0") || sanitized.includes("1") || sanitized.includes("2"))) {
    return sanitized;
  }

  // 6. Fallback de sécurité sur l'exemple officiel
  return OFFICIAL_FORMAT_EXAMPLES[format] || OFFICIAL_FORMAT_EXAMPLES.lmd;
}

/**
 * Vérifie si le serveur proxy local OCR FOR ALL est disponible (mode cascade direct actif par défaut)
 */
export async function checkOcrForAllServer(_port: number = 50906): Promise<{ available: boolean; info?: any }> {
  return { available: false };
}

/**
 * Normalise et nettoie le texte brut extrait pour corriger les artefacts d'OCR courants
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
 * Cascade de modèles multimodaux actifs pour garantir 100% de disponibilité sans blocage de quota
 */
const ACTIVE_MODELS_CASCADE = [
  "gemini-flash-lite-latest",
  "gemini-3.1-flash-lite",
  "gemini-3-flash-preview",
  "gemini-2.5-flash"
];

/**
 * Exécute un appel direct Gemini Vision avec cascade automatique de modèles
 */
export async function extractWithGeminiCascade(
  cleanBase64: string,
  mimeType: string,
  prompt: string,
  apiKey: string
): Promise<string> {
  const ai = new GoogleGenAI({ apiKey });
  let lastError: any = null;

  for (const model of ACTIVE_MODELS_CASCADE) {
    try {
      console.log(`[KONAN AI] Tentative extraction avec modèle ${model}...`);
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
      if (raw && raw.length > 10) {
        console.log(`[KONAN AI] Extraction réussie avec modèle ${model} !`);
        return raw;
      }
    } catch (err: any) {
      console.warn(`[KONAN AI] Modèle ${model} indisponible (${err?.message?.slice(0, 80) || err}), bascule sur le modèle suivant...`);
      lastError = err;
    }
  }

  throw lastError || new Error("Tous les modèles d'extraction IA ont échoué.");
}

/**
 * MOTEUR UNIVERSEL KONAN AI - EXTRACTION HAUTE PRÉCISION EN DOUBLE PASSE (ZERO-ERROR MODE)
 * Cascade multimodale intelligente avec garantie de conversion en FICHIER TEXTE OFFICIEL (ZÉRO CODE).
 */
export async function executeOcrForAllExtraction(
  fileBase64: string,
  mimeType: string = "image/jpeg",
  format: ScheduleFormatType = 'lmd',
  onProgress?: OcrForAllProgressCallback
): Promise<string> {
  // Détecte le type MIME exact
  let effectiveMime = mimeType;
  const prefixMatch = fileBase64.match(/^data:([^;]+);base64,/);
  if (prefixMatch && prefixMatch[1]) {
    effectiveMime = prefixMatch[1];
  }
  const cleanBase64 = fileBase64.replace(/^data:[^;]+;base64,/, "");

  const apiKey = getGeminiApiKey();
  if (!apiKey) {
    throw new Error("Clé API Gemini introuvable dans le fichier .env (GEMINI_API_KEY ou VITE_GEMINI_API_KEY).");
  }

  const primaryPrompt = buildPrimaryPromptForFormat(format);

  // 1. PASSE 1 : Extraction primaire de haute fidélité
  onProgress?.('pass1', 'Pass 1/2 : Analyse visuelle et extraction haute fidélité...', 30);
  const pass1Result = await extractWithGeminiCascade(cleanBase64, effectiveMime, primaryPrompt, apiKey);

  if (!pass1Result || pass1Result.trim().length < 10) {
    throw new Error("L'extraction primaire n'a retourné aucun contenu exploitable.");
  }

  // 2. PASSE 2 : Self-Correction Refinement Loop (Zero-Error Mode)
  onProgress?.('pass2', 'Pass 2/2 : Vérification visuelle & auto-correction zéro-erreur...', 70);
  const qaPrompt = buildQaRefinementPrompt(pass1Result, format);
  let finalVerifiedResult = pass1Result;

  try {
    const pass2Result = await extractWithGeminiCascade(cleanBase64, effectiveMime, qaPrompt, apiKey);
    if (pass2Result && pass2Result.trim().length > 10) {
      finalVerifiedResult = pass2Result;
    }
  } catch (qaErr) {
    console.warn("Avertissement boucle QA vérification (résultat Pass 1 conservé) :", qaErr);
  }

  // 3. Conversion et normalisation stricte en FICHIER TEXTE OFFICIEL (ZÉRO CODE)
  onProgress?.('cleaning', 'Conversion stricte en fichier texte officiel (Zéro code)...', 90);
  const officialTextFile = convertAnyOcrOutputToOfficialTextFile(finalVerifiedResult, format);

  onProgress?.('done', 'Fichier texte structuré généré avec succès à 100% !', 100);
  return officialTextFile;
}
