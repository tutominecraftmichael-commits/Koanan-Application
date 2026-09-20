import React from 'react';
import { X, Calendar, Bell, Download, ExternalLink, Smartphone, Star, CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import type { StudySession, Subject } from '../../types';
import { DAYS_OF_WEEK } from '../../types';
import { downloadStudyPlanICS, generateGoogleCalendarUrl, getGoogleCalendarImportUrl } from '../../services/googleCalendarService';

export interface GoogleCalendarSyncModalProps {
  isOpen: boolean;
  onClose: () => void;
  sessions: StudySession[];
  subjects: Subject[];
  studentName?: string;
  planTier?: 'free' | 'pro' | 'plus';
  autoOpenedReason?: 'pro_activated' | 'plan_applied' | null;
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
  autoOpenedReason = null,
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

  const handleOpenGoogleCalendarImport = () => {
    window.open(getGoogleCalendarImportUrl(), '_blank', 'noopener,noreferrer');
  };

  const handleOpenNextInGoogleCalendar = () => {
    if (nextSession && nextSubject) {
      const url = generateGoogleCalendarUrl(nextSession, nextSubject);
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  // Days breakdown
  const daysBreakdown = DAYS_OF_WEEK.map(d => ({
    ...d,
    count: sessions.filter(s => s.dayOfWeek === d.id).length,
  })).filter(d => d.count > 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
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
                <span className="text-[10px] uppercase font-black tracking-wider text-sky-400">Rappels Automatiques Quotidiens</span>
                <span className="text-[9px] font-black px-1.5 py-0.2 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/40">TOUS LES JOURS</span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-white leading-tight">
                Google Agenda • Rappels Automatiques
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
        <div className="p-6 space-y-4 relative z-10 text-xs sm:text-sm text-slate-300 overflow-y-auto max-h-[75vh]">
          
          {/* Automatic Pro Onboarding Banner */}
          {autoOpenedReason === 'pro_activated' && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-sky-950/80 border border-emerald-500/50 space-y-1.5 shadow-lg animate-in slide-in-from-top-2 duration-300">
              <div className="text-emerald-300 font-extrabold text-xs uppercase tracking-wide">
                Modèle KONAN PRO Activé : Synchronisation Quotidienne Déclenchée !
              </div>
              <p className="text-slate-200 text-xs leading-relaxed">
                Toutes vos séances d'étude de <strong>tous les jours de la semaine</strong> ont été programmées avec répétition hebdomadaire et <strong>rappels automatiques</strong> avant chaque session directement sur votre téléphone.
              </p>
            </div>
          )}

          {/* Automatic Schedule Applied Banner */}
          {autoOpenedReason === 'plan_applied' && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-950/80 via-slate-900 to-sky-950/80 border border-indigo-500/50 space-y-1.5 shadow-lg animate-in slide-in-from-top-2 duration-300">
              <div className="text-indigo-300 font-extrabold text-xs uppercase tracking-wide">
                Nouvel Emploi du Temps : Synchronisation Quotidienne Déclenchée !
              </div>
              <p className="text-slate-200 text-xs leading-relaxed">
                Votre planning d'étude pour <strong>tous les jours de la semaine</strong> a été synchronisé avec récurrence hebdomadaire et <strong>rappels automatiques</strong> avant chaque session sur votre téléphone.
              </p>
            </div>
          )}

          {/* Main Hero Card */}
          <div className="p-4 rounded-2xl bg-sky-950/40 border border-sky-500/30 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span className="text-sky-300 font-bold text-xs uppercase tracking-wide">
                Rappels automatiques avant chaque session • Tous les jours
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30 shrink-0">
                Répétition active
              </span>
            </div>
            <p className="text-slate-200 text-xs sm:text-[13px] leading-relaxed">
              L'agenda ne s'arrête pas à aujourd'hui : il s'applique <strong>automatiquement à tous les jours de la semaine</strong> avec récurrence perpétuelle. Vous recevez une notification sonore sur votre téléphone avant chaque matière.
            </p>
          </div>

          {/* Daily Schedule Breakdown Strip */}
          {daysBreakdown.length > 0 && (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <span>Couverture des jours de la semaine :</span>
                <span className="text-cyan-400 font-mono">{sessions.length} séances au total</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                {daysBreakdown.map(d => (
                  <div key={d.id} className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-1 text-[11px]">
                    <span className="font-bold text-white">{d.label}</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300 font-semibold flex items-center gap-0.5">
                      <Bell className="w-2.5 h-2.5 text-amber-400" />
                      <span>{d.count} répétés</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!isPro ? (
            /* PRO Lock Banner for Free users */
            <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/40 space-y-3">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-xs">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>Fonctionnalité automatique réservée au modèle KONAN PRO</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Les rappels automatiques et la synchronisation continue pour tous les jours font partie intégrante de <strong>KONAN PRO</strong> (1 200 F CFA / mois).
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
            <div className="space-y-3 pt-1">
              
              {/* Option 1: Full Calendar Download (.ics) with All Days */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/40 transition-all space-y-3 shadow-md">
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Download className="w-4 h-4 text-sky-400" />
                      <h4 className="text-xs sm:text-sm font-bold text-white">
                        1. Fichier de Calendrier Universel (Tous les Jours)
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      Télécharge le planning complet avec récurrence hebdomadaire et rappels automatiques pour vos <strong>{sessions.length} séances</strong>.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shrink-0">
                    Indispensable
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <Button
                    variant="glow"
                    size="sm"
                    leftIcon={<Download className="w-3.5 h-3.5" />}
                    onClick={handleDownloadICS}
                    className="w-full text-xs font-bold py-2.5 cursor-pointer"
                  >
                    Télécharger (.ics)
                  </Button>

                  <Button
                    variant="secondary"
                    size="sm"
                    leftIcon={<ExternalLink className="w-3.5 h-3.5 text-sky-300" />}
                    onClick={handleOpenGoogleCalendarImport}
                    className="w-full text-xs font-bold py-2.5 cursor-pointer text-sky-300 border-sky-500/30 hover:text-white"
                    title="Ouvre la page d'importation directe de Google Agenda"
                  >
                    Importer dans Google Agenda
                  </Button>
                </div>
              </div>

              {/* Option 2: 1-Click Next Session on Google Calendar Web */}
              {nextSession && nextSubject && (
                <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-indigo-500/40 transition-all space-y-2 shadow-sm">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
                      <h4 className="text-xs font-bold text-white">
                        2. Ajouter la prochaine séance en 1 clic
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-300">{nextSession.startTime}</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Prochaine révision : <strong className="text-white">{nextSubject.name}</strong> avec synchronisation automatique.
                  </p>
                  <Button
                    variant="secondary"
                    size="sm"
                    leftIcon={<ExternalLink className="w-3.5 h-3.5 text-indigo-300" />}
                    onClick={handleOpenNextInGoogleCalendar}
                    className="w-full text-xs font-semibold py-2 cursor-pointer border-indigo-500/30 text-indigo-200 hover:text-white"
                  >
                    Ouvrir la séance sur Google Agenda Web
                  </Button>
                </div>
              )}

              {/* How it works on mobile */}
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2 text-[11px] text-slate-400">
                <div className="flex items-center gap-1.5 text-slate-200 font-bold">
                  <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Activation instantanée sur smartphone (Android / iPhone) :</span>
                </div>
                <ol className="list-decimal list-inside space-y-1 pl-1 text-slate-300">
                  <li>Ouvrez le fichier <code className="text-sky-300 font-mono">.ics</code> téléchargé sur votre téléphone.</li>
                  <li>Sélectionnez <strong>"Ajouter à Google Agenda"</strong> ou <strong>"Ajouter à Calendrier"</strong>.</li>
                  <li>Tous les créneaux de tous les jours s'enregistrent en un instant avec notifications de rappel !</li>
                </ol>
              </div>

            </div>
          )}

          {/* Guarantee pill */}
          <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Format RFC 5545 iCalendar avec récurrence hebdomadaire et alarmes push VALARM</span>
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
