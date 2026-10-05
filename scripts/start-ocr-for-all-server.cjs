/**
 * OCR FOR ALL - Antigravity Extension Local Server Launcher
 * Démarre le serveur mandataire local de l'extension 'OCR for ALL' sur le port 50906.
 */
const fs = require('fs');
const path = require('path');

// 1. Charger la clé API depuis .env
function loadEnvKey() {
  const envPath = path.resolve(__dirname, '../.env');
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf8').split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const [key, ...rest] = trimmed.split('=');
      const val = rest.join('=').trim().replace(/^["']|["']$/g, '');
      if (key === 'GEMINI_API_KEY' && val) return val;
      if (key === 'VITE_GEMINI_API_KEY' && val) return val;
    }
  }
  return process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY || '';
}

const geminiKey = loadEnvKey();
if (!geminiKey) {
  console.error("❌ ERREUR: Clé GEMINI_API_KEY introuvable dans le fichier .env");
  process.exit(1);
}

// 2. Localiser l'extension OCR for ALL
const extPath = 'C:\\Users\\BONI CHRIST\\.antigravity-ide\\extensions\\ocr-for-all.ocr-for-all-1.0.5-universal\\out\\server.js';
if (!fs.existsSync(extPath)) {
  console.error("❌ ERREUR: Extension OCR FOR ALL introuvable au chemin :", extPath);
  process.exit(1);
}

const { OcrServer } = require(extPath);
const port = parseInt(process.env.OCR_PORT || '50906', 10);

const server = new OcrServer(
  port,
  () => ({
    provider: "Gemini",
    apiKey: geminiKey,
    apiEndpoint: "https://generativelanguage.googleapis.com/v1beta",
    apiModel: process.env.OCR_MODEL || "gemini-2.5-flash",
    ocrMode: "STANDARD",
    contextText: ""
  }),
  {
    onInsertText: (text) => {
      // Pour les requêtes API, insertion optionnelle
    },
    onLog: (msg, type) => {
      const icons = { info: 'ℹ️', success: '✅', error: '❌' };
      console.log(`${icons[type] || '👉'} [OCR FOR ALL Server] ${msg}`);
    },
    onStatusChange: (running) => {
      console.log(`[OCR FOR ALL] Statut serveur : ${running ? 'ACTIF' : 'INACTIF'}`);
    }
  }
);

console.log(`🚀 Démarrage du serveur OCR FOR ALL sur le port ${port}...`);
server.start()
  .then(() => {
    console.log(`✅ Serveur OCR FOR ALL actif sur http://localhost:${port}`);
    console.log(`   - Endpoint Health : http://localhost:${port}/health`);
    console.log(`   - Endpoint Chat Completions : http://localhost:${port}/v1/chat/completions`);
  })
  .catch((err) => {
    console.error(`❌ Échec du démarrage du serveur OCR FOR ALL :`, err.message);
  });
