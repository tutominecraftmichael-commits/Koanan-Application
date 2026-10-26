import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const apiKey = env.VITE_GEMINI_API_KEY || env.GEMINI_API_KEY || '';
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
        }
      }
    ],
    envPrefix: ['VITE_', 'NEXT_PUBLIC_'],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(apiKey),
      'process.env.VITE_GEMINI_API_KEY': JSON.stringify(apiKey),
      'import.meta.env.VITE_GEMINI_API_KEY': JSON.stringify(apiKey),
      '__APP_BUILD_ID__': JSON.stringify(buildTimestamp),
    },
    server: {
      host: true,
      port: 5173,
    },
  };
})
