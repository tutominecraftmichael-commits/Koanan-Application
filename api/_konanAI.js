/**
 * KONAN écrit lui-même ses notifications avec Gemini (CÔTÉ SERVEUR uniquement : la clé reste secrète).
 * Règle d'or : la notification part TOUJOURS à l'heure. Si l'IA ne répond pas en 3 secondes,
 * se trompe de format ou n'a plus de quota, on prend aussitôt la banque de messages locale.
 */
import {
  buildKonanPrompt,
  fallbackMessage,
  KONAN_SYSTEM_INSTRUCTION,
  validateAiMessage,
} from './_konanVoice.js';

export const AI_TIMEOUT_MS = 3000;
// gemini-2.5-flash-lite n'est plus ouvert aux nouveaux comptes (réponse 404 de Google, novembre 2026)
const MODEL = 'gemini-3.5-flash-lite';

let aiClientPromise = null;
async function getClient(apiKey) {
  if (!aiClientPromise) {
    aiClientPromise = import('@google/genai').then(({ GoogleGenAI }) => new GoogleGenAI({ apiKey }));
  }
  return aiClientPromise;
}

/**
 * @returns {Promise<{ title: string, body: string, source: 'ia' | 'secours', reason?: string }>}
 */
export async function generateKonanMessage(ctx, { apiKey, seed = '', timeoutMs = AI_TIMEOUT_MS } = {}) {
  const secours = (reason) => ({ ...fallbackMessage(ctx, seed), source: 'secours', reason });
  if (!apiKey) return secours('pas de clé IA');

  // Chargement de la bibliothèque Gemini (une fois par serveur) HORS du chronomètre des 3 secondes
  let ai;
  try {
    ai = await getClient(apiKey);
  } catch {
    aiClientPromise = null;
    return secours('bibliothèque IA indisponible');
  }

  const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
  let timer;
  const timeout = new Promise((resolve) => {
    timer = setTimeout(() => {
      controller?.abort();
      resolve('timeout');
    }, timeoutMs);
  });

  try {
    const call = (async () => {
      const response = await ai.models.generateContent({
        model: MODEL,
        contents: [{ role: 'user', parts: [{ text: buildKonanPrompt(ctx) }] }],
        config: {
          systemInstruction: KONAN_SYSTEM_INSTRUCTION,
          // Pas de responseJsonSchema : gemini-3.5-flash-lite le refuse (400). Le format est vérifié par validateAiMessage.
          responseMimeType: 'application/json',
          temperature: 0.9,
          maxOutputTokens: 300,
          // Les modèles Gemini 3 refusent thinkingBudget: 0 ; « minimal » = réponse la plus rapide
          thinkingConfig: { thinkingLevel: 'minimal' },
          // Pas d'httpOptions.timeout : Google refuse un délai serveur < 10 s (400).
          // La coupure à 3 s est faite ici même (Promise.race + abortSignal).
          ...(controller ? { abortSignal: controller.signal } : {}),
        },
      });
      return response?.text || '';
    })();

    const result = await Promise.race([call, timeout]);
    if (result === 'timeout') return secours('IA trop lente (plus de 3 s)');
    let parsed = null;
    try { parsed = JSON.parse(String(result).trim()); } catch { parsed = null; }
    const checked = validateAiMessage(parsed, ctx);
    return checked ? { ...checked, source: 'ia' } : secours('réponse IA inutilisable');
  } catch (err) {
    const status = err?.status || err?.code || '';
    let detail = String(err?.message || '');
    try { detail = JSON.parse(detail)?.error?.message || detail; } catch { /* message brut */ }
    detail = detail.split(apiKey).join('***').slice(0, 140);
    return secours(`IA indisponible${status ? ` (${status})` : ''}${detail ? ` : ${detail}` : ''}`);
  } finally {
    clearTimeout(timer);
  }
}

/** Exécute des tâches avec au plus `limit` en parallèle (évite d'ouvrir 50 appels IA d'un coup). */
export async function mapWithLimit(items, limit, fn) {
  const results = new Array(items.length);
  let next = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (next < items.length) {
      const i = next++;
      results[i] = await fn(items[i], i);
    }
  });
  await Promise.all(workers);
  return results;
}
