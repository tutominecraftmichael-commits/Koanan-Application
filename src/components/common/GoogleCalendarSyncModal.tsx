import React from 'react';
import { X, Calendar, Bell, Download, ExternalLink, Smartphone, Star, CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import type { StudySession, Subject } from '../../types';
import { downloadStudyPlanICS, generateGoogleCalendarUrl } from '../../services/googleCalendarService';

export interface GoogleCalendarSyncModalProps {
  isOpen: boolean;
  onClose: () => void;
  sessions: StudySession[];
  subjects: Subject[];
  studentName?: string;
  planTier?: 'free' | 'pro' | 'plus';
  onUpgradeToPro?: () => void;
  onViewPricing?: () => void;
}

export const GoogleCalendarSyncModal: React.FC<GoogleCalendarSyncModalProps> = ({
  isOpen,
  onClose,
  sessions,
  subjects,
  studentName = 'Étudiant',
  planTier = 'free',
  onUpgradeToPro,
  onViewPricing,
}) => {
  if (!isOpen) return null;

  const isPro = planTier === 'pro' || planTier === 'plus';

  // Find next upcoming uncompleted session
  const nextSession = sessions.find(s => !s.completed);
  const nextSubject = nextSession ? subjects.find(sub => sub.id === nextSession.subjectId) : undefined;

  const handleDownloadICS = () => {
    downloadStudyPlanICS(sessions, subjects, studentName);
  };

  const handleOpenNextInGoogleCalendar = () => {
    if (nextSession && nextSubject) {
      const url = generateGoogleCalendarUrl(nextSession, nextSubject);
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 border-2 border-sky-400/50 shadow-2xl shadow-sky-950/60 overflow-hidden flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-28 bg-gradient-to-b from-sky-500/20 to-transparent pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800/80 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-600 to-blue-500 text-white flex items-center justify-center shadow-lg shadow-sky-500/20 shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] uppercase font-black tracking-wider text-sky-400">Rappel Intelligent</span>
                <span className="text-[9px] font-black px-1.5 py-0.2 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">⭐ KONAN PRO</span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-white leading-tight">
                Google Agenda & Alertes 15 min
              </h3>
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

        {/* Body */}
        <div className="p-6 space-y-5 relative z-10 text-xs sm:text-sm text-slate-300 overflow-y-auto max-h-[75vh]">
          
          {/* Main Hero Card */}
          <div className="p-4 rounded-2xl bg-sky-950/40 border border-sky-500/30 space-y-2.5">
            <div className="flex items-center gap-2 text-sky-300 font-bold text-xs uppercase tracking-wide">
              <Bell className="w-4 h-4 text-amber-400 animate-bounce" />
              <span>Alerte 15 min avant chaque session</span>
            </div>
            <p className="text-slate-200 text-xs sm:text-[13px] leading-relaxed">
              Synchronisez vos révisions Konan directement sur votre téléphone avec Google Agenda. Une notification avec le nom de la matière, vos objectifs et la méthode d'étude sonne <strong>15 minutes avant le début de votre séance</strong> pour vous préparer sereinement.
            </p>
          </div>

          {!isPro ? (
            /* PRO Lock Banner for Free users */
            <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/40 space-y-3">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-xs">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>Fonctionnalité réservée au modèle KONAN PRO</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Les alertes automatiques 15 minutes et la synchronisation Google Agenda font partie intégrante de <strong>KONAN PRO</strong> (1 200 F CFA / mois).
              </p>
              <Button
                variant="glow"
                size="sm"
                className="w-full text-xs font-bold py-2.5"
                leftIcon={<Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />}
                onClick={() => {
                  onClose();
                  if (onUpgradeToPro) {
                    onUpgradeToPro();
                  } else if (onViewPricing) {
                    onViewPricing();
                  }
                }}
              >
                Activer KONAN PRO maintenant
              </Button>
            </div>
          ) : (
            /* Unlocked PRO Actions */
            <div className="space-y-4">
              
              {/* Option 1: Full Calendar Download (.ics) */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/40 transition-all space-y-3 shadow-md">
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Download className="w-4 h-4 text-sky-400" />
                      <h4 className="text-xs sm:text-sm font-bold text-white">
                        1. Exporter tout le planning (.ics)
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      Génère un fichier de calendrier universel avec l'alarme de 15 min programmée sur <strong>{sessions.length} séances</strong> d'étude.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/40 shrink-0">
                    Recommandé
                  </span>
                </div>

                <Button
                  variant="glow"
                  size="sm"
                  leftIcon={<Download className="w-3.5 h-3.5" />}
                  onClick={handleDownloadICS}
                  className="w-full text-xs font-bold py-2.5 cursor-pointer"
                >
                  Télécharger le planning complet avec alertes 15 min
                </Button>
              </div>

              {/* Option 2: 1-Click Next Session on Google Calendar Web */}
              {nextSession && nextSubject && (
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/40 transition-all space-y-3 shadow-md">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4 text-indigo-400" />
                      <h4 className="text-xs sm:text-sm font-bold text-white">
                        2. Ajouter la prochaine séance en 1 clic
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      Prochaine révision : <strong className="text-white">{nextSubject.name}</strong> à <strong className="text-sky-300">{nextSession.startTime}</strong> ({nextSession.date}). Ouvre directement Google Agenda avec tous les détails.
                    </p>
                  </div>

                  <Button
                    variant="secondary"
                    size="sm"
                    leftIcon={<ExternalLink className="w-3.5 h-3.5 text-indigo-300" />}
                    onClick={handleOpenNextInGoogleCalendar}
                    className="w-full text-xs font-bold py-2.5 cursor-pointer border-indigo-500/30 text-indigo-200 hover:text-white"
                  >
                    Ouvrir sur Google Agenda Web
                  </Button>
                </div>
              )}

              {/* How it works on mobile */}
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2 text-[11px] text-slate-400">
                <div className="flex items-center gap-1.5 text-slate-200 font-bold">
                  <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Comment recevoir l'alerte sur smartphone (Android / iPhone) :</span>
                </div>
                <ol className="list-decimal list-inside space-y-1 pl-1 text-slate-300">
                  <li>Téléchargez le fichier <code className="text-sky-300 font-mono">.ics</code> via le bouton ci-dessus.</li>
                  <li>Ouvrez le fichier : votre téléphone vous propose de l'ajouter à <strong>Google Agenda</strong> ou <strong>Calendrier</strong>.</li>
                  <li>Validez : chaque séance dispose déjà du rappel push <strong>15 minutes avant</strong> !</li>
                </ol>
              </div>

            </div>
          )}

          {/* Guarantee pill */}
          <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Format standardisé RFC 5545 iCalendar compatible Google, Apple & Outlook</span>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 pt-3 border-t border-slate-800/80 flex items-center justify-end gap-3 relative z-10 bg-slate-900/40">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-white"
          >
            Fermer
          </Button>
        </div>
      </div>
    </div>
  );
};
