/**
 * KONAN AI - Daemon / Worker Autonome de Rappels d'Étude en Arrière-Plan
 * 
 * Exécute la vérification conditionnelle à intervalles réguliers (toutes les 15 minutes par défaut)
 * sans aucune intervention manuelle.
 * 
 * Usage :
 *   - Mode autonome continu : node server/studyReminderWorker.js
 *   - Mode exécution unique : node server/studyReminderWorker.js --once
 */

import { runStudyRemindersCheck } from './studyReminderEngine.js';

const isOneShot = process.argv.includes('--once');
const INTERVAL_MINUTES = parseInt(process.env.CHECK_INTERVAL_MINUTES || '15', 10);
const INTERVAL_MS = INTERVAL_MINUTES * 60 * 1000;

console.log('===============================================================');
console.log('   KONAN AI — Système Autonome de Notifications Push (FCM)     ');
console.log('===============================================================');
console.log(`- Mode : ${isOneShot ? 'Exécution unique (--once)' : `Daemon autonome (Intervalle: ${INTERVAL_MINUTES} minutes)`}`);
console.log(`- Démarrage : ${new Date().toLocaleString('fr-FR')}`);
console.log('---------------------------------------------------------------');

let isRunning = false;
let timerId = null;

async function executeCycle() {
  if (isRunning) {
    console.log('[KONAN Worker] Un cycle est déjà en cours, report au prochain tick.');
    return;
  }

  isRunning = true;
  const startTime = Date.now();

  try {
    const stats = await runStudyRemindersCheck();
    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(`[KONAN Worker] Cycle complété en ${duration}s. (Rappels 15m: ${stats.upcomingRemindersSent}, Alertes retard: ${stats.overdueAlertsSent}, Tokens nettoyés: ${stats.tokensCleaned})`);
  } catch (err) {
    console.error('[KONAN Worker] Erreur inattendue lors du cycle de vérification :', err);
  } finally {
    isRunning = false;
  }
}

// 1. Première exécution immédiate
executeCycle().then(() => {
  if (isOneShot) {
    console.log('[KONAN Worker] Exécution unique terminée. Arrêt du processus.');
    process.exit(0);
  }

  // 2. Boucle autonome toutes les 15 minutes
  console.log(`[KONAN Worker] En attente du prochain cycle dans ${INTERVAL_MINUTES} minutes...`);
  timerId = setInterval(() => {
    executeCycle();
  }, INTERVAL_MS);
});

// Gestion de l'arrêt propre
function gracefulShutdown(signal) {
  console.log(`\n[KONAN Worker] Signal ${signal} reçu. Arrêt propre du service de rappels...`);
  if (timerId) clearInterval(timerId);
  process.exit(0);
}

process.on('SIGINT', () => gracefulShutdown('SIGINT'));
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
