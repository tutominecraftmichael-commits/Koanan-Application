import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { 
  X, 
  Download, 
  Printer, 
  Image as ImageIcon, 
  Sparkles, 
  Loader2,
  Calendar
} from 'lucide-react';
import type { Subject, ClassSlot, StudySession, DayOfWeek } from '../../types';
import { KonanCube } from './KonanCube';
import { Button } from '../ui/Button';

export interface PrintableScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  subjects: Subject[];
  classSlots?: ClassSlot[];
  studySessions: StudySession[];
  studentName?: string;
  academicTrack?: string;
}

// Convertit une couleur Hex en RGBA doux
function hexToRgba(hex: string, alpha: number): string {
  if (!hex) return `rgba(99, 102, 241, ${alpha})`;
  let c = hex.replace('#', '');
  if (c.length === 3) c = c.split('').map(x => x + x).join('');
  const r = parseInt(c.substring(0, 2), 16) || 99;
  const g = parseInt(c.substring(2, 4), 16) || 102;
  const b = parseInt(c.substring(4, 6), 16) || 241;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Calcule une teinte sombre et contrastée pour le texte
function getDarkerTone(hex: string): string {
  if (!hex) return '#1E293B';
  let c = hex.replace('#', '');
  if (c.length === 3) c = c.split('').map(x => x + x).join('');
  const r = Math.max(0, (parseInt(c.substring(0, 2), 16) || 0) * 0.55);
  const g = Math.max(0, (parseInt(c.substring(2, 4), 16) || 0) * 0.55);
  const b = Math.max(0, (parseInt(c.substring(4, 6), 16) || 0) * 0.55);
  return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
}

// 5 Plages horaires emblématiques de l'emploi du temps KONAN
const TIME_BANDS = [
  { id: 'morning_1', label: '08h00\nà 10h00', startMin: 480, endMin: 600 },
  { id: 'morning_2', label: '10h15\nà 12h15', startMin: 615, endMin: 735 },
  { id: 'afternoon_1', label: '14h00\nà 16h00', startMin: 840, endMin: 960 },
  { id: 'afternoon_2', label: '16h15\nà 18h00', startMin: 975, endMin: 1080 },
  { id: 'evening', label: '19h00\nà 20h30', startMin: 1140, endMin: 1230 },
];

const DAYS: { id: DayOfWeek; label: string }[] = [
  { id: 0, label: 'Lundi' },
  { id: 1, label: 'Mardi' },
  { id: 2, label: 'Mercredi' },
  { id: 3, label: 'Jeudi' },
  { id: 4, label: 'Vendredi' },
  { id: 5, label: 'Samedi' },
];

export const PrintableScheduleModal: React.FC<PrintableScheduleModalProps> = ({
  isOpen,
  onClose,
  subjects,
  classSlots = [],
  studySessions,
  studentName = 'Étudiant',
  academicTrack = 'Mon emploi du temps perso',
}) => {
  const printSheetRef = useRef<HTMLDivElement>(null);
  const [isExportingPdf, setIsExportingPdf] = useState(false);
  const [isExportingPng, setIsExportingPng] = useState(false);

  if (!isOpen) return null;

  // Dictionnaire des matières pour accès rapide
  const subjectMap = new Map<string, Subject>();
  subjects.forEach(s => subjectMap.set(s.id, s));

  // Fonction pour déterminer le contenu d'une case
  const getCellContent = (dayId: DayOfWeek, bandIndex: number) => {
    const band = TIME_BANDS[bandIndex];

    // 1. Chercher d'abord une session d'étude active sur ce jour et ce créneau
    const study = studySessions.find(s => {
      if (s.dayOfWeek !== dayId) return false;
      const sStart = parseInt(s.startTime.split(':')[0], 10) * 60 + parseInt(s.startTime.split(':')[1] || '0', 10);
      return Math.abs(sStart - band.startMin) <= 75 || (sStart >= band.startMin - 30 && sStart < band.endMin);
    });

    if (study) {
      const sub = study.subjectId ? subjectMap.get(study.subjectId) : null;
      const subName = sub?.name || 'Révision';
      const color = sub?.color || '#6366F1';

      // Déduire l'activité / sous-tâche
      let subTask = 'Révision';
      if (study.type === 'exercises') subTask = 'Exercices';
      else if (study.type === 'flashcards') subTask = 'Fiches';
      else if (study.type === 'exam_simulation') subTask = 'Annales / Quiz';
      else if (study.type === 'deep_summary') subTask = 'Synthèse';
      else if (study.type === 'consolidation') subTask = 'Relecture';
      else if (study.title.toLowerCase().includes('quiz')) subTask = 'Quiz';
      else if (study.title.toLowerCase().includes('écritures')) subTask = 'Écritures';
      else if (study.title.toLowerCase().includes('pratique')) subTask = 'Cas pratiques';
      else if (study.title.toLowerCase().includes('vocabulaire')) subTask = 'Vocabulaire';

      return {
        type: 'study' as const,
        title: subName,
        subtitle: subTask,
        color,
      };
    }

    // 2. Chercher s'il y a un cours universitaire / scolaire sur ce créneau
    const course = classSlots.find(c => {
      if (c.dayOfWeek !== dayId) return false;
      const cStart = parseInt(c.startTime.split(':')[0], 10) * 60 + parseInt(c.startTime.split(':')[1] || '0', 10);
      return Math.abs(cStart - band.startMin) <= 75 || (cStart >= band.startMin - 30 && cStart < band.endMin);
    });

    if (course) {
      const sub = course.subjectId ? subjectMap.get(course.subjectId) : null;
      return {
        type: 'course' as const,
        title: sub ? sub.name : 'Cours',
        subtitle: course.room ? `Salle ${course.room}` : 'Présentiel',
        color: sub?.color || '#94A3B8',
      };
    }

    // 3. Règles esthétiques d'équilibre et anti-burnout selon l'image de référence
    if (dayId === 5 && bandIndex === 3) {
      // Samedi fin d'après-midi : Bilan
      return {
        type: 'bilan' as const,
        title: 'Bilan',
        subtitle: 'Faire le point',
        color: '#1D4E89',
      };
    }

    if ((dayId === 2 || dayId === 5) && bandIndex === 2) {
      // Mercredi / Samedi 14h-16h : Repos
      return {
        type: 'repos' as const,
        title: 'Repos',
        subtitle: 'Souffler',
        color: '#10B981',
      };
    }

    if (bandIndex === 4) {
      // Soirée 19h00-20h30 : Libre
      return {
        type: 'libre' as const,
        title: 'Libre',
        subtitle: '✦',
        color: '#64748B',
      };
    }

    // Autres créneaux libres en journée
    return {
      type: 'free' as const,
      title: 'Libre',
      subtitle: '✦',
      color: '#CBD5E1',
    };
  };

  // Téléchargement direct en PDF
  const handleDownloadPdf = async () => {
    if (!printSheetRef.current) return;
    setIsExportingPdf(true);
    try {
      const element = printSheetRef.current;
      const canvas = await html2canvas(element, {
        scale: 2.2, // Rendu ultra net (Haute Résolution vectorielle / 300 DPI)
        useCORS: true,
        backgroundColor: '#FFFDF8',
        logging: false,
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pageWidth - 14; // marges élégantes de 7mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      const topOffset = Math.max(6, (pageHeight - imgHeight) / 2);
      pdf.addImage(imgData, 'JPEG', 7, topOffset, imgWidth, imgHeight);

      const safeName = studentName.toLowerCase().replace(/[^a-z0-9]/g, '-');
      pdf.save(`planning-revisions-konan-${safeName}.pdf`);
    } catch (err) {
      console.error('Erreur export PDF:', err);
      window.print();
    } finally {
      setIsExportingPdf(false);
    }
  };

  // Téléchargement direct en Image PNG (idéal smartphone et fond d'écran)
  const handleDownloadPng = async () => {
    if (!printSheetRef.current) return;
    setIsExportingPng(true);
    try {
      const element = printSheetRef.current;
      const canvas = await html2canvas(element, {
        scale: 2.5,
        useCORS: true,
        backgroundColor: '#FFFDF8',
        logging: false,
      });

      const link = document.createElement('a');
      const safeName = studentName.toLowerCase().replace(/[^a-z0-9]/g, '-');
      link.download = `planning-revisions-konan-${safeName}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      console.error('Erreur export PNG:', err);
    } finally {
      setIsExportingPng(false);
    }
  };

  // Impression système
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[99999] bg-slate-950/80 backdrop-blur-md flex flex-col items-center justify-start overflow-y-auto p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      
      {/* Barre d'outils supérieure (Masquée à l'impression) */}
      <div className="w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 sm:p-4 shadow-2xl flex flex-wrap items-center justify-between gap-3 mb-4 sticky top-2 z-50 print:hidden">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-500/20 text-indigo-600 dark:text-cyan-400">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
              Planning de Révisions Anti-Burnout
            </h2>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Format officiel KONAN certifié • Adapté à vos matières et couleurs
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Bouton PDF */}
          <Button
            variant="primary"
            size="sm"
            leftIcon={isExportingPdf ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
            onClick={handleDownloadPdf}
            disabled={isExportingPdf || isExportingPng}
            className="font-bold text-xs py-2 shadow-md shadow-indigo-500/20 cursor-pointer"
          >
            {isExportingPdf ? 'Génération...' : 'Télécharger PDF'}
          </Button>

          {/* Bouton PNG Image */}
          <Button
            variant="secondary"
            size="sm"
            leftIcon={isExportingPng ? <Loader2 className="w-4 h-4 animate-spin" /> : <ImageIcon className="w-4 h-4" />}
            onClick={handleDownloadPng}
            disabled={isExportingPdf || isExportingPng}
            className="font-bold text-xs py-2 cursor-pointer"
          >
            {isExportingPng ? 'Export...' : 'Image HD'}
          </Button>

          {/* Bouton Imprimer */}
          <Button
            variant="outline"
            size="sm"
            leftIcon={<Printer className="w-4 h-4" />}
            onClick={handlePrint}
            className="font-bold text-xs py-2 cursor-pointer hidden sm:inline-flex"
            title="Imprimer directement ou enregistrer via le navigateur"
          >
            Imprimer
          </Button>

          {/* Bouton Fermer */}
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* FEUILLE OFFICIELLE IMPRIMABLE (Design fidèle au gabarit KONAN Anti-Burnout) */}
      <div 
        ref={printSheetRef}
        id="printable-schedule-sheet"
        className="w-full max-w-[850px] bg-[#FFFDF8] text-slate-900 border border-amber-200/60 rounded-3xl p-5 sm:p-7 shadow-2xl relative font-sans select-none overflow-hidden"
        style={{
          boxSizing: 'border-box',
          backgroundImage: 'radial-gradient(#E2E8F0 0.75px, transparent 0.75px)',
          backgroundSize: '16px 16px',
        }}
      >
        {/* EN-TÊTE SUPÉRIEUR SOMBRE (VERT ÉMERAUDE / PETROL SOMBRE) */}
        <div className="relative rounded-2xl bg-[#1C3F53] text-white p-4 sm:p-5 flex items-center justify-between shadow-md overflow-hidden">
          {/* Motifs de fond discrets */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C3F53] via-[#224A61] to-[#1C3F53] opacity-90" />

          {/* Bloc Titre Gauche */}
          <div className="relative z-10 flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center p-1.5 shrink-0 shadow-inner">
              <KonanCube size={36} showStars={false} glow={false} />
            </div>
            <div>
              <span className="block text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-[#7EE7D2] uppercase">
                KONAN-ANTI-BURNOUT
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-serif italic drop-shadow-sm mt-0.5">
                Planning de révisions
              </h1>
              <p className="text-xs sm:text-sm text-[#A6F0E0] font-medium tracking-wide">
                {academicTrack} • {studentName}
              </p>
            </div>
          </div>

          {/* Doodles & Formules à Droite */}
          <div className="relative z-10 hidden sm:flex items-center gap-3 pr-2 text-right">
            <div className="w-9 h-9 rounded-xl border border-white/30 flex items-center justify-center text-white/90 shadow-sm">
              <Sparkles className="w-5 h-5 text-[#FCD34D]" />
            </div>
            <div className="font-mono text-xs text-white/90 font-bold leading-tight">
              <p className="tracking-widest text-[#FCD34D]">E=mc²</p>
              <p className="text-[11px] text-[#A6F0E0]">2+2=4 ✦</p>
            </div>
          </div>
        </div>

        {/* RÈGLE EN BOIS D'ÉCOLIER JAUNE AVEC GRADUATIONS */}
        <div className="my-3.5 w-full h-5 rounded-md bg-[#FCD34D] border-y border-[#EAB308] shadow-xs flex items-end justify-between px-2 overflow-hidden relative">
          {Array.from({ length: 42 }).map((_, i) => (
            <div 
              key={i} 
              className={`w-[1px] bg-[#92400E]/70 ${i % 5 === 0 ? 'h-3.5' : i % 2 === 0 ? 'h-2' : 'h-1.5'}`} 
            />
          ))}
        </div>

        {/* GRILLE HEBDOMADAIRE (LUNDI À SAMEDI) */}
        <div className="w-full overflow-x-auto no-scrollbar">
          <div className="min-w-[620px]">
            {/* Ligne des jours */}
            <div className="grid grid-cols-[85px_repeat(6,1fr)] gap-2 mb-2 items-center text-center">
              <div /> {/* Espace pour la colonne horaire */}
              {DAYS.map(day => (
                <div 
                  key={day.id}
                  className="py-1.5 px-1 rounded-xl bg-[#1D4E89] text-white font-extrabold text-xs tracking-wide shadow-xs"
                >
                  {day.label}
                </div>
              ))}
            </div>

            {/* Lignes horaires */}
            <div className="space-y-2">
              {TIME_BANDS.map((band, bandIdx) => (
                <div 
                  key={band.id}
                  className="grid grid-cols-[85px_repeat(6,1fr)] gap-2 items-stretch"
                >
                  {/* Colonne horaire */}
                  <div className="flex flex-col items-center justify-center p-1.5 rounded-xl bg-slate-100/90 border border-slate-200/80 text-[10px] font-bold text-slate-600 leading-tight text-center">
                    {band.label.split('\n').map((line, lIdx) => (
                      <span key={lIdx}>{line}</span>
                    ))}
                  </div>

                  {/* 6 Cases pour les jours */}
                  {DAYS.map(day => {
                    const cell = getCellContent(day.id, bandIdx);

                    if (cell.type === 'study') {
                      return (
                        <div
                          key={`c-${day.id}-${band.id}`}
                          className="p-2 rounded-xl flex flex-col items-center justify-center text-center transition-all shadow-xs border"
                          style={{
                            backgroundColor: hexToRgba(cell.color, 0.16),
                            borderColor: hexToRgba(cell.color, 0.5),
                            color: getDarkerTone(cell.color),
                          }}
                        >
                          <span className="font-extrabold text-[11px] sm:text-xs leading-tight line-clamp-1">
                            {cell.title}
                          </span>
                          <span className="text-[10px] font-medium opacity-85 mt-0.5 leading-none">
                            {cell.subtitle}
                          </span>
                        </div>
                      );
                    }

                    if (cell.type === 'course') {
                      return (
                        <div
                          key={`c-${day.id}-${band.id}`}
                          className="p-2 rounded-xl flex flex-col items-center justify-center text-center shadow-xs border bg-slate-100/80 border-slate-200 text-slate-700"
                        >
                          <span className="font-bold text-[11px] leading-tight line-clamp-1">
                            {cell.title}
                          </span>
                          <span className="text-[9px] text-slate-500 mt-0.5 leading-none">
                            {cell.subtitle}
                          </span>
                        </div>
                      );
                    }

                    if (cell.type === 'bilan') {
                      return (
                        <div
                          key={`c-${day.id}-${band.id}`}
                          className="p-2 rounded-xl flex flex-col items-center justify-center text-center shadow-xs border bg-[#1D4E89] border-[#163E6E] text-white"
                        >
                          <span className="font-black text-[11px] leading-tight">
                            Bilan
                          </span>
                          <span className="text-[9px] text-sky-200 mt-0.5 leading-none">
                            Faire le point
                          </span>
                        </div>
                      );
                    }

                    if (cell.type === 'repos') {
                      return (
                        <div
                          key={`c-${day.id}-${band.id}`}
                          className="p-2 rounded-xl flex flex-col items-center justify-center text-center shadow-xs border bg-emerald-50 border-emerald-200 text-emerald-800"
                        >
                          <span className="font-bold text-[11px] leading-tight">
                            Repos
                          </span>
                          <span className="text-[9px] text-emerald-600 mt-0.5 leading-none">
                            Souffler
                          </span>
                        </div>
                      );
                    }

                    // Case Libre
                    return (
                      <div
                        key={`c-${day.id}-${band.id}`}
                        className="p-2 rounded-xl flex flex-col items-center justify-center text-center border border-dashed border-slate-200/90 bg-white/70 text-slate-400"
                      >
                        <span className="text-[10px] font-medium tracking-tight">
                          Libre
                        </span>
                        <span className="text-[8px] text-amber-500/70 leading-none">
                          ✦
                        </span>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION INFÉRIEURE : 3 RÈGLES ANTI-BURNOUT + DIMANCHE REPOS + ILLUSTRATION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mt-4 items-stretch">
          
          {/* Encadré 1 : 3 règles anti-burnout */}
          <div className="p-3.5 rounded-2xl border-2 border-[#1D4E89] bg-white flex flex-col justify-between shadow-xs">
            <h3 className="font-black text-xs text-[#1D4E89] uppercase tracking-wide flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#1D4E89]" />
              3 règles anti-burnout
            </h3>
            <ul className="space-y-1.5 text-[10px] sm:text-[11px] font-medium text-slate-700 leading-snug mt-2">
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-[#1D4E89]">1.</span>
                <span>15 min de pause après chaque bloc.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-[#1D4E89]">2.</span>
                <span>Dormir 7 h minimum, même avant un devoir.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-[#1D4E89]">3.</span>
                <span>Chaque jour, un moment rien que pour toi.</span>
              </li>
            </ul>
          </div>

          {/* Encadré 2 : Dimanche = Repos */}
          <div className="p-3.5 rounded-2xl border-2 border-[#1D4E89] bg-white flex flex-col justify-between relative shadow-xs overflow-hidden">
            {/* Cachet rouge A+ */}
            <div className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full border-2 border-rose-500 text-rose-500 font-black text-xs flex items-center justify-center rotate-12 shadow-xs bg-rose-50/50">
              A+
            </div>

            <div>
              <h3 className="font-black text-xs text-[#1D4E89] uppercase tracking-wide">
                Dimanche = repos
              </h3>
              <p className="text-[10px] sm:text-[11px] font-medium text-slate-700 mt-2 leading-relaxed">
                <strong className="text-slate-900">Zéro révision :</strong> dors, sors, recharge-toi.
              </p>
              <p className="text-[10px] sm:text-[11px] text-slate-600 mt-1 leading-snug">
                Les cases « Libre » sont à toi, profites-en !
              </p>
            </div>

            {/* Doodles Soleil & Lune */}
            <div className="flex items-center gap-2 mt-2 text-amber-500">
              <span className="text-base">☀️</span>
              <span className="text-base">🌙</span>
            </div>
          </div>

          {/* Encadré 3 : Pot à crayons & Fournitures */}
          <div className="p-3.5 rounded-2xl border border-slate-200 bg-gradient-to-br from-amber-50/60 to-orange-50/30 flex items-center justify-around shadow-xs">
            {/* Rendu SVG soigné de la papeterie & pomme */}
            <div className="flex items-end gap-3 py-1">
              {/* Pomme Rouge */}
              <div className="relative text-2xl flex flex-col items-center">
                <span className="text-xs text-emerald-600 -mb-1">🍃</span>
                <span>🍎</span>
              </div>

              {/* Pot à crayons avec crayons colorés */}
              <div className="flex flex-col items-center">
                <div className="flex items-end gap-1 mb-[-4px] z-10">
                  <div className="w-1.5 h-7 rounded-t-xs bg-rose-500" />
                  <div className="w-1.5 h-9 rounded-t-xs bg-amber-400" />
                  <div className="w-1.5 h-10 rounded-t-xs bg-emerald-500" />
                  <div className="w-1.5 h-8 rounded-t-xs bg-sky-500" />
                  <div className="w-1.5 h-9 rounded-t-xs bg-purple-500" />
                </div>
                <div className="w-12 h-10 rounded-b-xl rounded-t-xs bg-[#2563EB] border-2 border-[#1D4E89] flex items-center justify-center shadow-xs">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/40" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BANNIÈRE DE CITATION INFÉRIEURE */}
        <div className="mt-4 p-3 rounded-2xl bg-[#FFF9DB] border border-[#F5E6A3] flex items-center justify-between gap-3 text-center shadow-xs">
          <div className="w-7 h-7 rounded-full bg-white border border-amber-300 flex items-center justify-center p-1 shrink-0">
            <KonanCube size={20} showStars={false} glow={false} />
          </div>

          <p className="text-xs sm:text-sm font-serif italic font-bold text-amber-950 flex-1 leading-snug">
            “Ton EDT personnel te montre le chemin mais ta discipline est la clé”
            <span className="block text-[10px] font-sans font-bold tracking-widest uppercase text-amber-800 not-italic mt-0.5">
              — KONAN
            </span>
          </p>

          <span className="text-xl shrink-0">🏆</span>
        </div>

      </div>

    </div>
  );
};
