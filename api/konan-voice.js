/**
 * Banc d'essai des messages de KONAN : DÉVELOPPEMENT LOCAL UNIQUEMENT (répond 404 en production).
 * POST { context } -> { ia: {title, body, source, reason?}, secours: {title, body} }
 * Utilisé par le bouton de test du tableau de bord (npm run dev) pour voir ce que KONAN écrirait.
 */
import { isProductionRuntime, loadLocalEnvIfPresent } from './_env.js';
import { fallbackMessage } from './_konanVoice.js';
import { generateKonanMessage } from './_konanAI.js';

function send(res, status, data) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(data));
}

async function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > 20_000) throw new Error('too_large');
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}');
}

export default async function handler(req, res) {
  if (isProductionRuntime()) return send(res, 404, { error: 'NOT_FOUND' });
  if (req.method !== 'POST') return send(res, 405, { error: 'METHOD_NOT_ALLOWED' });
  loadLocalEnvIfPresent();
  try {
    const { context, recent } = await readBody(req);
    if (!context || typeof context !== 'object' || !context.situation) return send(res, 400, { error: 'BAD_CONTEXT' });
    const recentList = Array.isArray(recent) ? recent.map(String).slice(0, 12) : [];
    const startedAt = Date.now();
    const ia = await generateKonanMessage(context, { apiKey: String(process.env.GEMINI_API_KEY || '').trim(), seed: String(Date.now()), recent: recentList });
    return send(res, 200, { ia, secours: fallbackMessage(context, 'test', recentList), durationMs: Date.now() - startedAt });
  } catch (err) {
    return send(res, 500, { error: String(err?.message || err).slice(0, 120) });
  }
}
