import React, { useState, useEffect } from 'react';
import { 
  X, 
  Cloud, 
  Laptop, 
  Smartphone, 
  Copy, 
  Check, 
  ExternalLink, 
  RefreshCw, 
  Download, 
  Upload, 
  ShieldCheck, 
  AlertTriangle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import type { AppState } from '../../services/storage';
import { generateSyncCode, importSyncCode } from '../../services/storage';
import { checkCloudSyncStatus, FIREBASE_CONSOLE_FIRESTORE_URL, type CloudStatusInfo } from '../../lib/firebase';

interface CloudSyncModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentState: AppState;
  onApplyState: (newState: AppState) => void;
  onExportBackup?: () => void;
  onImportBackup?: () => void;
  onForceCloudSync?: () => Promise<void>;
  showToast?: (message: string) => void;
}

export const CloudSyncModal: React.FC<CloudSyncModalProps> = ({
  isOpen,
  onClose,
  currentState,
  onApplyState,
  onExportBackup,
  onImportBackup,
  onForceCloudSync,
  showToast,
}) => {
  const [cloudInfo, setCloudInfo] = useState<CloudStatusInfo>({
    status: 'checking',
    consoleUrl: FIREBASE_CONSOLE_FIRESTORE_URL,
  });
  const [isCheckingCloud, setIsCheckingCloud] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [syncInput, setSyncInput] = useState('');
  const [importError, setImportError] = useState<string | null>(null);
  const [isSyncingNow, setIsSyncingNow] = useState(false);
  const [activeTab, setActiveTab] = useState<'send' | 'receive'>('send');

  const runCloudCheck = async () => {
    setIsCheckingCloud(true);
    try {
      const uid = currentState.userAccount?.googleId;
      const res = await checkCloudSyncStatus(uid);
      setCloudInfo(res);
    } catch {
      setCloudInfo({
        status: 'needs_activation',
        message: 'Impossible de joindre Cloud Firestore.',
        consoleUrl: FIREBASE_CONSOLE_FIRESTORE_URL,
      });
    } finally {
      setIsCheckingCloud(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      runCloudCheck();
      setCopiedCode(false);
      setSyncInput('');
      setImportError(null);
    }
  }, [isOpen, currentState.userAccount?.googleId]);

  if (!isOpen) return null;

  const generatedCode = generateSyncCode(currentState);

  const handleCopyCode = () => {
    if (!generatedCode) return;
    navigator.clipboard.writeText(generatedCode);
    setCopiedCode(true);
    if (showToast) showToast('📋 Code de synchronisation copié dans le presse-papiers !');
    setTimeout(() => setCopiedCode(false), 3000);
  };

  const handleImportCode = () => {
    if (!syncInput.trim()) {
      setImportError('Veuillez coller un code de synchronisation valide.');
      return;
    }
    const imported = importSyncCode(syncInput, currentState.userAccount);
    if (imported) {
      onApplyState(imported);
      if (showToast) showToast('✨ Emploi du temps et matières synchronisés avec succès !');
      setImportError(null);
      onClose();
    } else {
      setImportError("Code invalide ou expiré. Assurez-vous d'avoir copié le code complet 'KONAN-SYNC-...'");
    }
  };

  const handleManualSync = async () => {
    if (onForceCloudSync) {
      setIsSyncingNow(true);
      await onForceCloudSync();
      setIsSyncingNow(false);
      await runCloudCheck();
      if (showToast) showToast('☁️ Données envoyées vers le Cloud.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 border border-slate-800/90 shadow-2xl shadow-indigo-950/50 overflow-hidden flex flex-col max-h-[92vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800/80 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 shadow-sm">
              <Cloud className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-white tracking-wide">
                  Synchronisation Multi-Appareils
                </h2>
                <Badge variant="cyan" size="sm">PC & Mobile</Badge>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Retrouvez vos cours, séances et plannings sur tous vos écrans
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6 overflow-y-auto flex-1 custom-scrollbar">

          {/* 1. CLOUD STATUS BANNER */}
          <div className={`p-4 sm:p-5 rounded-2xl border transition-all ${
            cloudInfo.status === 'connected'
              ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300'
              : cloudInfo.status === 'needs_activation'
              ? 'bg-amber-950/30 border-amber-500/40 text-amber-300'
              : 'bg-slate-900/80 border-slate-800 text-slate-300'
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    {cloudInfo.status === 'connected' ? (
                      <>
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>Cloud Firestore Connecté</span>
                      </>
                    ) : cloudInfo.status === 'needs_activation' ? (
                      <>
                        <AlertTriangle className="w-4 h-4 text-amber-400" />
                        <span>Activation Cloud en 1 Clic Requise</span>
                      </>
                    ) : (
                      <>
                        <RefreshCw className="w-4 h-4 text-sky-400 animate-spin" />
                        <span>Vérification de l’état Cloud...</span>
                      </>
                    )}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {cloudInfo.status === 'connected' ? (
                    "Vos cours et plannings sont sauvegardés sur les serveurs Google Cloud. Ouvrez KONAN sur votre PC ou votre mobile avec votre compte pour synchroniser en temps réel."
                  ) : cloudInfo.status === 'needs_activation' ? (
                    "Pour que votre compte Google synchronise automatiquement vos cours entre votre téléphone et votre PC en continu, la base Cloud Firestore doit être créée dans votre console Firebase."
                  ) : (
                    "Vérification de la liaison avec le serveur Cloud Google..."
                  )}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                {cloudInfo.status === 'needs_activation' ? (
                  <a
                    href={FIREBASE_CONSOLE_FIRESTORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all cursor-pointer whitespace-nowrap"
                  >
                    <span>Activer dans Firebase</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : cloudInfo.status === 'connected' ? (
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={handleManualSync}
                    disabled={isSyncingNow}
                    leftIcon={<RefreshCw className={`w-3.5 h-3.5 ${isSyncingNow ? 'animate-spin' : ''}`} />}
                    className="text-xs whitespace-nowrap cursor-pointer"
                  >
                    {isSyncingNow ? 'Synchronisation...' : 'Synchroniser'}
                  </Button>
                ) : null}

                <button
                  type="button"
                  onClick={runCloudCheck}
                  disabled={isCheckingCloud}
                  className="p-2 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Re-vérifier la connexion Cloud"
                >
                  <RefreshCw className={`w-4 h-4 ${isCheckingCloud ? 'animate-spin' : ''}`} />
                </button>
              </div>
            </div>

            {/* Step-by-step instructions if activation is needed */}
            {cloudInfo.status === 'needs_activation' && (
              <div className="mt-4 pt-3.5 border-t border-amber-500/20 text-[11px] text-slate-300 space-y-1">
                <p className="font-bold text-amber-200">Comment activer en 15 secondes :</p>
                <ol className="list-decimal list-inside space-y-0.5 text-slate-400">
                  <li>Cliquez sur <strong className="text-amber-300">"Activer dans Firebase"</strong> ci-dessus</li>
                  <li>Cliquez sur le bouton <strong className="text-white">"Créer une base de données"</strong></li>
                  <li>Choisissez le <strong className="text-white">Mode test</strong> puis validez</li>
                </ol>
              </div>
            )}
          </div>

          {/* 2. IMMEDIATE DEVICE TRANSFER (MOBILE ↔ PC) WITHOUT WAITING */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  Transfert Rapide Instantané (Mobile ↔ PC)
                </span>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Fonctionne immédiatement sans attendre la configuration Cloud
                </p>
              </div>
              
              {/* Tab Selector */}
              <div className="flex items-center p-1 rounded-xl bg-slate-950 border border-slate-800">
                <button
                  type="button"
                  onClick={() => setActiveTab('send')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'send'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Envoyer</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('receive')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'receive'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Laptop className="w-3.5 h-3.5" />
                  <span>Recevoir</span>
                </button>
              </div>
            </div>

            {/* TAB 1: SEND (Export Code from Mobile) */}
            {activeTab === 'send' && (
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-3.5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-xs font-bold text-white flex items-center gap-2">
                      <span>1. Copiez votre code depuis cet appareil</span>
                      <Badge variant="cyan" size="sm">
                        {currentState.subjects.length} matières • {currentState.classSlots.length} cours
                      </Badge>
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                      Ce code contient l'intégralité de vos cours, horaires et préférences.
                    </p>
                  </div>
                  <Button
                    variant={copiedCode ? "secondary" : "glow"}
                    size="sm"
                    onClick={handleCopyCode}
                    leftIcon={copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    className="cursor-pointer text-xs shrink-0"
                  >
                    {copiedCode ? 'Copié !' : 'Copier le code'}
                  </Button>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/90 font-mono text-[11px] text-cyan-300/90 truncate select-all flex items-center justify-between gap-2">
                  <span className="truncate">{generatedCode}</span>
                </div>

                <p className="text-[11px] text-slate-400">
                  👉 <strong>Sur votre autre appareil (ex: PC)</strong> : Ouvrez KONAN, ouvrez cette même fenêtre et collez ce code dans l'onglet <strong>Recevoir</strong>.
                </p>
              </div>
            )}

            {/* TAB 2: RECEIVE (Import Code on PC) */}
            {activeTab === 'receive' && (
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-3.5">
                <div>
                  <h4 className="text-xs font-bold text-white">
                    2. Collez le code de transfert reçu
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                    Collez le code 'KONAN-SYNC-...' généré depuis votre téléphone pour charger instantanément vos cours sur ce PC.
                  </p>
                </div>

                <div className="space-y-2">
                  <textarea
                    value={syncInput}
                    onChange={(e) => {
                      setSyncInput(e.target.value);
                      if (importError) setImportError(null);
                    }}
                    placeholder="Collez ici le code KONAN-SYNC-..."
                    rows={3}
                    className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/50 text-white font-mono text-xs placeholder:text-slate-600 resize-none outline-none transition-all"
                  />
                  {importError && (
                    <p className="text-xs text-rose-400 font-medium flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                      <span>{importError}</span>
                    </p>
                  )}
                </div>

                <div className="flex justify-end">
                  <Button
                    variant="glow"
                    size="sm"
                    onClick={handleImportCode}
                    disabled={!syncInput.trim()}
                    rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                    className="cursor-pointer text-xs"
                  >
                    Restaurer mes données sur ce PC
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* 3. FILE BACKUP & RESTORE SECTION */}
          <div className="space-y-3 pt-2 border-t border-slate-800/80">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              Fichiers de Sauvegarde Locale (.json)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {onExportBackup && (
                <button
                  type="button"
                  onClick={onExportBackup}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/50 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/60 transition-colors text-xs text-slate-200 cursor-pointer text-left"
                >
                  <div className="flex items-center gap-2.5">
                    <Download className="w-4 h-4 text-cyan-400" />
                    <span>Télécharger la sauvegarde</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">.json</span>
                </button>
              )}

              {onImportBackup && (
                <button
                  type="button"
                  onClick={() => {
                    onImportBackup();
                    onClose();
                  }}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/50 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/60 transition-colors text-xs text-slate-200 cursor-pointer text-left"
                >
                  <div className="flex items-center gap-2.5">
                    <Upload className="w-4 h-4 text-indigo-400" />
                    <span>Charger un fichier sauvegarde</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">.json</span>
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800/80 bg-slate-900/50 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Chiffrement et isolation des données par compte</span>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={onClose}
            className="cursor-pointer text-xs"
          >
            Fermer
          </Button>
        </div>

      </div>
    </div>
  );
};
