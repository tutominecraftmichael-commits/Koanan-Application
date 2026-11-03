/**
 * KONAN AI - Lecture d'un emploi du temps (photo ou PDF) par Gemini, CÔTÉ SERVEUR.
 * Endpoint : POST /api/extract-timetable   corps JSON : { fileBase64, mimeType, format }
 *
 * La clé Gemini reste secrète : elle n'existe que dans la variable serveur GEMINI_API_KEY
 * (Vercel > Settings > Environment Variables, ou .env local). Elle n'est jamais envoyée au navigateur.
 *
 * Protections contre l'usage abusif de la clé :
 * - consigne (prompt) fixée par le serveur : impossible de s'en servir pour autre chose ;
 * - appels acceptés seulement depuis le site lui-même (en-tête Origin) ;
 * - types de fichiers et taille limités ;
 * - nombre d'appels limité par adresse IP (au mieux, par instance du serveur).
 */

import fs from 'fs';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import {
  buildTimetablePrompt,
  TIMETABLE_MODELS,
  normalizeMime,
  stripDataUrlPrefix,
  cleanTimetableOutput,
} from './_timetablePrompt.js';

// ~3 Mo de fichier (en base64). Au-delà, Vercel refuse de toute façon les corps de plus de 4,5 Mo.
const MAX_BASE64_CHARS = 4_200_000;
const RATE_LIMIT = 8; // appels
const RATE_WINDOW_MS = 10 * 60 * 1000; // par tranche de 10 minutes
const recentCalls = new Map();

function loadLocalEnvIfPresent() {
  if (process.env.GEMINI_API_KEY) return;
  for (const file of ['.env.local', '.env']) {
    try {
      const fullPath = path.resolve(process.cwd(), file);
      if (!fs.existsSync(fullPath)) continue;
      for (const line of fs.readFileSync(fullPath, 'utf8').split('\n')) {
        const m = line.trim().match(/^GEMINI_API_KEY\s*=\s*(.+)$/);
        if (m && !process.env.GEMINI_API_KEY) process.env.GEMINI_API_KEY = m[1].trim().replace(/^['"]|['"]$/g, '');
      }
    } catch {
      // fichier illisible : ignoré
    }
  }
}

function sendJson(res, status, data) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(data));
}

async function readJsonBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') return JSON.parse(req.body);
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > MAX_BASE64_CHARS + 10_000) throw Object.assign(new Error('too_large'), { code: 413 });
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}');
}

function clientIp(req) {
  const fwd = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim();
  return fwd || req.socket?.remoteAddress || 'inconnu';
}

function isRateLimited(ip) {
  const now = Date.now();
  const calls = (recentCalls.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  if (calls.length >= RATE_LIMIT) {
    recentCalls.set(ip, calls);
    return true;
  }
  calls.push(now);
  recentCalls.set(ip, calls);
  if (recentCalls.size > 5000) recentCalls.clear(); // garde-fou mémoire
  return false;
}

/** Appel accepté seulement depuis le site lui-même (ou en développement local). */
function isAllowedOrigin(req) {
  const origin = req.headers.origin;
  if (!origin) return true; // même origine sans en-tête (anciens navigateurs) : la limite d'appels s'applique
  try {
    const o = new URL(origin);
    const host = String(req.headers['x-forwarded-host'] || req.headers.host || '');
    return o.host === host || o.hostname === 'localhost' || o.hostname === '127.0.0.1';
  } catch {
    return false;
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return sendJson(res, 405, { error: 'METHOD_NOT_ALLOWED', message: 'Utilisez POST.' });
  }
  if (!isAllowedOrigin(req)) {
    return sendJson(res, 403, { error: 'FORBIDDEN_ORIGIN', message: 'Appel non autorisé.' });
  }

  loadLocalEnvIfPresent();
  const apiKey = String(process.env.GEMINI_API_KEY || '').trim();
  if (!apiKey) {
    return sendJson(res, 503, {
      error: 'GEMINI_NOT_CONFIGURED',
      message: "La lecture automatique d'emploi du temps n'est pas configurée sur le serveur.",
    });
  }

  if (isRateLimited(clientIp(req))) {
    return sendJson(res, 429, {
      error: 'RATE_LIMITED',
      message: 'Trop de lectures en peu de temps. Réessayez dans quelques minutes.',
    });
  }

  let body;
  try {
    body = await readJsonBody(req);
  } catch (err) {
    if (err && err.code === 413) {
      return sendJson(res, 413, { error: 'FILE_TOO_LARGE', message: 'Fichier trop lourd (3 Mo maximum).' });
    }
    return sendJson(res, 400, { error: 'BAD_REQUEST', message: 'Requête invalide.' });
  }

  const fileBase64 = typeof body?.fileBase64 === 'string' ? body.fileBase64 : '';
  const format = ['lmd', 'tpcm', 'scolaire'].includes(body?.format) ? body.format : undefined;
  const data = stripDataUrlPrefix(fileBase64);
  if (!data || !/^[A-Za-z0-9+/=\s]+$/.test(data.slice(0, 2000))) {
    return sendJson(res, 400, { error: 'BAD_FILE', message: 'Fichier manquant ou illisible.' });
  }
  if (data.length > MAX_BASE64_CHARS) {
    return sendJson(res, 413, { error: 'FILE_TOO_LARGE', message: 'Fichier trop lourd (3 Mo maximum).' });
  }
  const mimeType = normalizeMime(fileBase64, typeof body?.mimeType === 'string' ? body.mimeType : '');

  const ai = new GoogleGenAI({ apiKey });
  const prompt = buildTimetablePrompt(format);
  for (const model of TIMETABLE_MODELS) {
    try {
      const response = await ai.models.generateContent({
        model,
        contents: [{ role: 'user', parts: [{ inlineData: { data, mimeType } }, { text: prompt }] }],
      });
      const text = cleanTimetableOutput(response.text || '');
      if (text.length > 5) return sendJson(res, 200, { text, model });
    } catch (err) {
      // On n'écrit jamais la clé : seulement le nom du modèle et le début du message d'erreur
      console.warn(`[extract-timetable] ${model} indisponible : ${String(err?.message || err).slice(0, 120)}`);
    }
  }
  return sendJson(res, 502, {
    error: 'EXTRACTION_FAILED',
    message: "L'IA n'a pas pu lire ce document. Vérifiez qu'il est net et lisible, ou saisissez vos cours à la main.",
  });
}
