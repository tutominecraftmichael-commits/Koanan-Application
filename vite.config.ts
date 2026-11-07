import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  // Clé Gemini : UNIQUEMENT côté serveur (api/extract-timetable.js). Jamais injectée dans le code public.
  // En développement local, on la passe au serveur Vite (process.env), qui n'est pas envoyé au navigateur.
  const serverGeminiKey = env.GEMINI_API_KEY || env.VITE_GEMINI_API_KEY || '';
  if (serverGeminiKey && !process.env.GEMINI_API_KEY) process.env.GEMINI_API_KEY = serverGeminiKey;
  const buildTimestamp = Date.now().toString();

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'generate-version-json',
        generateBundle() {
          this.emitFile({
            type: 'asset',
            fileName: 'version.json',
            source: JSON.stringify({
              version: buildTimestamp,
              buildTime: new Date().toISOString()
            })
          });
        }
      },
      {
        name: 'admin-api-dev-server',
        configureServer(server) {
          server.middlewares.use('/version.json', (_req, res) => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
              version: buildTimestamp,
              buildTime: new Date().toISOString()
            }));
          });
          server.middlewares.use('/api/admin-data', async (req, res) => {
            try {
              // @ts-ignore
              const { default: handler } = await import('./api/admin-data.js');
              await handler(req, res);
            } catch (err: any) {
              console.error('[admin-api-dev-server] Erreur:', err);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err?.message || 'Internal Server Error' }));
            }
          });
          server.middlewares.use('/api/extract-timetable', async (req, res) => {
            try {
              // @ts-ignore
              const { default: handler } = await import('./api/extract-timetable.js');
              await handler(req, res);
            } catch (err: any) {
              console.error('[extract-timetable-dev] Erreur:', err?.message);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Internal Server Error' }));
            }
          });
          server.middlewares.use('/api/cron-notifications', async (req, res) => {
            try {
              // @ts-ignore
              const { default: handler } = await import('./api/cron-notifications.js');
              await handler(req, res);
            } catch (err: any) {
              console.error('[cron-notifications-dev] Erreur:', err);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err?.message || 'Internal Server Error' }));
            }
          });
          // Enregistrement des appareils et des alertes (notifications)
          server.middlewares.use('/api/push-sync', async (req, res) => {
            try {
              // @ts-ignore
              const { default: handler } = await import('./api/push-sync.js');
              await handler(req, res);
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: err?.message || 'Internal Server Error' }));
            }
          });
          // Banc d'essai des messages de KONAN (développement uniquement)
          server.middlewares.use('/api/konan-voice', async (req, res) => {
            try {
              // @ts-ignore
              const { default: handler } = await import('./api/konan-voice.js');
              await handler(req, res);
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err?.message || 'Internal Server Error' }));
            }
          });
        }
      }
    ],
    // Bibliothèques chargées à la demande : préparées dès le démarrage du serveur de développement.
    // Sans cela, Vite les découvre en pleine session, se « réoptimise » et peut renvoyer des 504
    // (page blanche) jusqu'au redémarrage.
    optimizeDeps: {
      include: ['pdfjs-dist', '@google/genai', 'katex'],
    },
    envPrefix: ['VITE_', 'NEXT_PUBLIC_'],
    define: {
      '__APP_BUILD_ID__': JSON.stringify(buildTimestamp),
    },
    server: {
      host: true,
      port: 5173,
    },
  };
})
