import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Database, 
  Lock, 
  Server, 
  CheckCircle2, 
  X, 
  Smartphone,
  Eye
} from 'lucide-react';
import { Button } from '../ui/Button';

export interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose?: () => void;
  onAccept: () => void;
  onDecline: () => void;
  isGatekeeper?: boolean;
  studentName?: string;
  studentEmail?: string;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  isOpen,
  onClose,
  onAccept,
  onDecline,
  isGatekeeper = true,
  studentName = 'Étudiant',
  studentEmail,
}) => {
  const [hasAgreed, setHasAgreed] = useState(false);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-slate-950/85 backdrop-blur-xl animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
    >
      <div 
        className="relative w-full max-w-2xl bg-gradient-to-b from-slate-900/95 via-slate-900 to-[#0A0F1D] border border-sky-500/40 rounded-3xl shadow-[0_0_60px_rgba(14,165,233,0.2)] overflow-hidden flex flex-col max-h-[92vh] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Glowing Header Accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-sky-400 via-indigo-500 to-emerald-400" />

        {/* Modal Header */}
        <div className="p-5 sm:p-6 pb-4 border-b border-slate-800/80 shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400 shadow-lg shadow-sky-500/10 shrink-0">
                <ShieldCheck className="w-6 h-6 text-sky-400" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/40">
                    Sécurité Cloud Firebase
                  </span>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
                    Backend Sécurisé
                  </span>
                </div>
                <h2 id="privacy-modal-title" className="text-lg sm:text-xl font-black text-white tracking-tight mt-1">
                  Politique de Confidentialité & Protection des Données
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Engagement de transparence et conservation sécurisée pour <strong className="text-white">{studentName}</strong> {studentEmail ? `(${studentEmail})` : ''}
                </p>
              </div>
            </div>

            {/* Close button only when NOT in gatekeeper mode (e.g. read-only from settings) */}
            {!isGatekeeper && onClose && (
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 sm:space-y-5 text-slate-300 text-xs sm:text-sm leading-relaxed scrollbar-thin scrollbar-thumb-slate-700">
          
          {/* Important Mandatory Notice Banner */}
          {isGatekeeper && (
            <div className="p-3.5 rounded-2xl bg-sky-950/40 border border-sky-500/30 flex items-start gap-3 text-sky-200">
              <Lock className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <div className="text-xs leading-snug">
                <strong className="text-white block font-bold mb-0.5">Consentement préalable obligatoire</strong>
                Conformément aux normes internationales de protection de la vie privée, vous devez accepter les conditions de conservation et de sécurité de vos données avant d'accéder à votre emploi du temps et votre tableau de bord.
              </div>
            </div>
          )}

          {/* 4 Pillars of Data Protection */}
          <div className="space-y-3">
            
            {/* Pillar 1: Backend Firebase Cloud Storage */}
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-400">
                  <Server className="w-4 h-4" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                  1. Hébergement Sécurisé Cloud Firebase (Backend Dédié)
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Toutes vos données (matières, coefficients, créneaux de cours et plannings de révision) sont hébergées et protégées dans l'infrastructure <strong>Google Firebase (Cloud Firestore)</strong>.
              </p>
              <div className="mt-2.5 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
                <Lock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Sécurité Backend garantie :</strong> Les règles d'accès sont strictement contrôlées côté serveur. Aucune de vos informations privées n'est exposée sur le frontend public ni partagée sans authentification chiffrée SSL/TLS 256 bits.
                </span>
              </div>
            </div>

            {/* Pillar 2: Data Conservation & Non-Deletion */}
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Database className="w-4 h-4" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                  2. Conservation Pérenne des Données (Non-Suppression)
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-emerald-300">Vos données ne sont pas supprimées :</strong> contrairement aux applications volatiles, vos informations académiques sont conservées de manière sécurisée et durable dans la base de données Firebase.
              </p>
              <div className="mt-2.5 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
                <Smartphone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Finalité de la conservation :</strong> Cette persistance vous garantit de retrouver votre emploi du temps et votre progression à tout moment depuis n'importe quel appareil (ordinateur, smartphone, tablette) sans risque de perte d'informations.
                </span>
              </div>
            </div>

            {/* Pillar 3: Purpose & Zero Commercial Monetization */}
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                  3. Utilisation Restreinte & Zéro Revente Commerciale
                </h3>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                <li>Vos données servent uniquement à la construction de votre planning de révision personnalisé et à la synchronisation d'agenda.</li>
                <li><strong>Zéro publicité ciblée et zéro revente</strong> de vos coordonnées ou de votre profil à des tiers.</li>
                <li>Les notifications de sessions sont gérées directement via votre propre Google Agenda pour un contrôle total.</li>
              </ul>
            </div>

            {/* Pillar 4: Student Control & Rights */}
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400">
                  <Eye className="w-4 h-4" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                  4. Vos Droits & Maîtrise Totale
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                À tout moment depuis le menu <em>Paramètres</em> de l'application, vous pouvez :
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-[11px] text-slate-400">
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Exporter vos données en JSON</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Modifier ou corriger vos matières</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Réinitialiser votre espace complet</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Déconnexion sécurisée instantanée</span>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Consent Checkbox */}
          <div className="pt-2">
            <label 
              className={`flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer select-none ${
                hasAgreed 
                  ? 'bg-sky-500/10 border-sky-400/60 shadow-lg shadow-sky-950/40 ring-1 ring-sky-400/40' 
                  : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
              }`}
            >
              <input
                type="checkbox"
                checked={hasAgreed}
                onChange={(e) => setHasAgreed(e.target.checked)}
                className="w-5 h-5 mt-0.5 rounded-lg border-slate-700 text-sky-500 focus:ring-sky-400 focus:ring-offset-slate-950 cursor-pointer accent-sky-500 shrink-0"
              />
              <div className="space-y-1">
                <span className="text-xs sm:text-sm font-bold text-white block">
                  J'ai pris connaissance de la politique de confidentialité
                </span>
                <span className="text-[11px] sm:text-xs text-slate-300 leading-snug block">
                  J'accepte expressément que mes données académiques soient conservées et sécurisées dans la base de données Firebase pour le fonctionnement de KONAN AI et la synchronisation de mes emplois du temps.
                </span>
              </div>
            </label>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-800/80 bg-slate-950/60 flex flex-col-reverse sm:flex-row items-center justify-between gap-3 shrink-0">
          
          {/* Secondary Action: Refuse / Decline & Logout */}
          <button
            type="button"
            onClick={onDecline}
            className="w-full sm:w-auto py-2.5 px-4 rounded-xl border border-slate-800 hover:border-rose-500/40 hover:bg-rose-500/10 text-slate-400 hover:text-rose-300 text-xs font-semibold transition-colors cursor-pointer text-center"
          >
            {isGatekeeper ? 'Ne pas accepter (Refuser et se déconnecter)' : 'Fermer'}
          </button>

          {/* Primary Action: Accept & Enter App */}
          <Button
            variant="glow"
            size="md"
            disabled={!hasAgreed}
            onClick={onAccept}
            className={`w-full sm:w-auto text-xs sm:text-sm font-extrabold py-3 px-6 shadow-xl transition-all cursor-pointer ${
              hasAgreed 
                ? '!bg-gradient-to-r !from-sky-500 !via-indigo-600 !to-sky-500 text-white shadow-sky-500/25 hover:scale-[1.02] active:scale-95' 
                : 'opacity-50 cursor-not-allowed !bg-slate-800 !text-slate-400 border-slate-700'
            }`}
          >
            <span>Accepter et Accéder à mon Espace</span>
          </Button>

        </div>

      </div>
    </div>
  );
};
