import React, { StrictMode, Component, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class RootErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Root ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md w-full p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto text-2xl font-bold">
              🎓
            </div>
            <h1 className="text-xl font-bold text-white">KONAN — Actualisation Requise</h1>
            <p className="text-xs text-slate-400 leading-relaxed">
              Une mise à jour ou un rafraîchissement est nécessaire pour charger l'interface.
            </p>
            {this.state.error?.message && (
              <p className="text-[10px] text-rose-300/80 font-mono bg-rose-950/30 p-2 rounded-xl border border-rose-900/30 break-words text-left">
                {this.state.error.message}
              </p>
            )}
            <div className="space-y-2 pt-1">
              <button
                onClick={() => {
                  try {
                    localStorage.removeItem('konan_ai_active_session_v1');
                  } catch {}
                  window.location.reload();
                }}
                className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-colors cursor-pointer shadow-lg shadow-indigo-600/30"
              >
                Recharger l'application
              </button>
              <button
                onClick={() => {
                  try {
                    localStorage.clear();
                    sessionStorage.clear();
                  } catch {}
                  window.location.href = window.location.origin;
                }}
                className="w-full py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-colors cursor-pointer border border-slate-700/60"
              >
                Réinitialiser le cache & Relancer
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootErrorBoundary>
      <App />
    </RootErrorBoundary>
  </StrictMode>,
)
