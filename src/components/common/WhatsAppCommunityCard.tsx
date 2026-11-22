/**
 * Carte « KONAN Community » : lien vers la chaîne WhatsApp officielle (défis XP, actus, astuces).
 * Tant que le lien n'est pas renseigné (TON_LIEN_ICI), la carte ne s'affiche pas.
 * Lisible en mode jour ET en mode nuit (classes claires d'abord, puis dark:).
 */
import React from 'react';

export const WHATSAPP_CHANNEL_URL = 'https://whatsapp.com/channel/TON_LIEN_ICI';

/** Le lien est-il un vrai lien de chaîne WhatsApp (et plus le texte d'exemple) ? */
export const hasWhatsAppChannel = (url: string = WHATSAPP_CHANNEL_URL) =>
  /^https:\/\/(www\.)?whatsapp\.com\/channel\/[A-Za-z0-9_-]{10,}$/.test(url) && !url.includes('TON_LIEN_ICI');

export const WhatsAppCommunityCard: React.FC = () => {
  if (!hasWhatsAppChannel()) return null;
  return (
    <a
      href={WHATSAPP_CHANNEL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between gap-3 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 dark:bg-emerald-500/10 dark:border-emerald-500/30 dark:hover:bg-emerald-500/20 transition-colors group"
    >
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white shrink-0" aria-hidden="true">
          {/* Icône WhatsApp */}
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z" />
          </svg>
        </div>
        <div className="min-w-0">
          <h4 className="font-bold text-sm text-slate-900 dark:text-white">KONAN Community 🇨🇮</h4>
          <p className="text-xs text-slate-600 dark:text-slate-300">Rejoins la chaîne officielle (défis XP, actus & astuces)</p>
        </div>
      </div>
      <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-600 dark:bg-emerald-500 text-white group-hover:scale-105 transition-transform shrink-0">
        Suivre
      </span>
    </a>
  );
};

export default WhatsAppCommunityCard;
