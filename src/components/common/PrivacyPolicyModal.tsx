import React, { useState } from 'react';
import { ShieldCheck, Database, Lock, Mic, Ban, UserCog, X } from 'lucide-react';
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

/**
 * Politique de confidentialité : ce que KONAN garde VRAIMENT, où, pourquoi, et ce qu'il ne garde jamais (la voix).
 * Lisible en mode jour comme en mode nuit.
 */
const SECTIONS: { icon: React.ElementType; color: string; title: string; body: React.ReactNode }[] = [
  {
    icon: Database,
    color: 'text-sky-600 dark:text-sky-400 bg-sky-100 dark:bg-sky-500/15',
    title: 'Ce que KONAN enregistre',
    body: (
      <ul className="list-disc pl-4 space-y-1">
        <li>Ton nom, ton adresse email et ta photo de profil (si tu en choisis une).</li>
        <li>Ta classe, tes matières, tes coefficients et ton emploi du temps (le texte lu dans ton fichier).</li>
        <li>Ton planning de révision et les séances que tu as faites.</li>
        <li>Ta progression dans les cours : leçons faites, questions réussies ou ratées (pour te les faire réviser au bon moment).</li>
        <li>Ton téléphone, uniquement pour t’envoyer les rappels de séance (tu peux les couper).</li>
      </ul>
    ),
  },
  {
    icon: Lock,
    color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/15',
    title: 'Où et combien de temps',
    body: (
      <p>
        Tout est rangé dans ton compte KONAN (hébergé chez Google Firebase), en connexion chiffrée. Toi seul peux le lire.
        Tes informations sont gardées tant que ton compte existe : tu retrouves ton nom, ta photo, ta classe, ton planning
        et ta progression sur n’importe quel téléphone ou ordinateur, même après une déconnexion.
      </p>
    ),
  },
  {
    icon: Mic,
    color: 'text-violet-600 dark:text-violet-400 bg-violet-100 dark:bg-violet-500/15',
    title: 'Ta voix n’est jamais conservée',
    body: (
      <p>
        Quand tu expliques une leçon à voix haute (méthode Feynman), l’enregistrement est envoyé une seule fois, de façon
        sécurisée, à l’intelligence artificielle qui corrige ton explication (Google Gemini). Il est ensuite effacé de ton
        téléphone. <strong>KONAN ne garde ni l’enregistrement ni ce que tu as dit</strong> : seulement le nombre d’essais du
        jour (3 au maximum). De même, la photo ou le PDF de ton emploi du temps sert uniquement à lire tes cours : le fichier
        n’est pas gardé.
      </p>
    ),
  },
  {
    icon: Ban,
    color: 'text-rose-600 dark:text-rose-400 bg-rose-100 dark:bg-rose-500/15',
    title: 'Jamais vendu, jamais de publicité',
    body: (
      <p>
        Tes informations servent uniquement à faire fonctionner KONAN pour toi : ton planning, tes cours et tes rappels.
        Elles ne sont ni vendues, ni louées, ni utilisées pour de la publicité.
      </p>
    ),
  },
  {
    icon: UserCog,
    color: 'text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-500/15',
    title: 'Tes droits',
    body: (
      <p>
        Dans <em>Paramètres</em>, tu peux à tout moment modifier ton nom, ta classe et ta photo, exporter tes données,
        réinitialiser ton espace ou te déconnecter.
      </p>
    ),
  },
];

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  isOpen,
  onClose,
  onAccept,
  onDecline,
  isGatekeeper = true,
  studentName = 'Étudiant',
  studentEmail,
}) => {
  const [hasAgreed, setHasAgreed] = useState(true);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* En-tête */}
        <div className="p-5 sm:p-6 pb-4 border-b-2 border-slate-100 dark:border-slate-800 shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-500/15 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-sky-600 dark:text-sky-400" />
              </div>
              <div className="min-w-0">
                <h2 id="privacy-modal-title" className="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-tight">
                  Confidentialité de tes données
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 break-words">
                  Pour <strong className="text-slate-800 dark:text-slate-200">{studentName}</strong>
                  {studentEmail ? ` (${studentEmail})` : ''}
                </p>
              </div>
            </div>
            {!isGatekeeper && onClose && (
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Contenu */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          {isGatekeeper && (
            <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 dark:bg-sky-500/10 dark:border-sky-500/30 text-xs text-sky-900 dark:text-sky-200">
              Tant que tu n’as pas accepté, ton compte et tes informations <strong>ne sont pas enregistrés</strong>.
              Ils le sont seulement après ton accord, pour que tu puisses utiliser KONAN.
            </div>
          )}

          {SECTIONS.map(({ icon: Icon, color, title, body }) => (
            <section key={title} className="p-4 rounded-2xl border-2 border-slate-100 dark:border-slate-800">
              <h3 className="flex items-center gap-2.5 text-sm font-black text-slate-900 dark:text-white mb-1.5">
                <span className={`p-1.5 rounded-lg ${color}`}>
                  <Icon className="w-4 h-4" />
                </span>
                {title}
              </h3>
              <div className="text-[13px] text-slate-600 dark:text-slate-300">{body}</div>
            </section>
          ))}

          {/* Accord */}
          <label
            className={`flex items-start gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-colors ${
              hasAgreed
                ? 'bg-sky-50 border-sky-300 dark:bg-sky-500/10 dark:border-sky-500/40'
                : 'bg-white border-slate-200 dark:bg-slate-900 dark:border-slate-700'
            }`}
          >
            <input
              type="checkbox"
              checked={hasAgreed}
              onChange={(e) => setHasAgreed(e.target.checked)}
              className="w-5 h-5 mt-0.5 rounded-lg cursor-pointer accent-sky-500 shrink-0"
            />
            <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200">
              <strong className="block text-slate-900 dark:text-white">J’ai lu et j’accepte</strong>
              J’accepte que mon compte et mes informations scolaires soient enregistrés dans mon compte KONAN, comme expliqué ci-dessus.
            </span>
          </label>
        </div>

        {/* Boutons */}
        <div className="p-4 sm:p-5 border-t-2 border-slate-100 dark:border-slate-800 flex flex-col-reverse sm:flex-row items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={onDecline}
            className="w-full sm:w-auto py-2.5 px-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 text-slate-600 hover:text-rose-600 hover:border-rose-300 dark:text-slate-300 dark:hover:text-rose-300 text-xs font-bold transition-colors cursor-pointer"
          >
            {isGatekeeper ? 'Refuser et me déconnecter' : 'Fermer'}
          </button>
          <Button
            variant="glow"
            size="md"
            disabled={!hasAgreed}
            onClick={onAccept}
            className="w-full sm:w-auto text-sm font-black py-3 px-6 !bg-none !bg-sky-500 hover:!bg-sky-400 !text-white !border-sky-400 !shadow-[0_4px_0_#0284C7]"
          >
            {isGatekeeper ? 'Accepter et continuer' : 'J’ai compris'}
          </Button>
        </div>
      </div>
    </div>
  );
};
