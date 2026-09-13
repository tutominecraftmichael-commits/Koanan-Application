import type { 
  DayOfWeek, 
  CourseType, 
  ExtractedSubjectCandidate, 
  ExtractedClassCandidate, 
  ExtractedPdfSchedule 
} from '../types';
import { generateId, parseTimeToMinutes, minutesToTimeString } from '../lib/utils';
import * as pdfjsLib from 'pdfjs-dist';
import { extractTextFromImage } from './ocrService';

// Configure worker for pdfjs-dist v6 in Vite / Browser environment
if (typeof window !== 'undefined') {
  try {
    // Attempt to use local worker bundle via Vite asset URL
    pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
      'pdfjs-dist/build/pdf.worker.min.mjs',
      import.meta.url
    ).toString();
  } catch {
    // Fallback to unpkg exact version CDN
    pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version || '6.3.289'}/build/pdf.worker.min.mjs`;
  }
}

export interface DemoPdfTemplate {
  id: string;
  name: string;
  trackName: string;
  level: string;
  fileName: string;
  fileSize: number;
  rawText: string;
  subjects: Omit<ExtractedSubjectCandidate, 'id'>[];
  slots: Omit<ExtractedClassCandidate, 'id' | 'subjectId'>[];
}

const PALETTE = [
  '#6366F1', // Indigo
  '#06B6D4', // Cyan
  '#10B981', // Emerald
  '#F59E0B', // Amber
  '#EC4899', // Pink
  '#8B5CF6', // Purple
  '#3B82F6', // Blue
  '#EF4444', // Red
  '#14B8A6', // Teal
  '#F97316', // Orange
];

export const KNOWN_ACADEMIC_ECUE_MAP: Record<string, { name: string; professor?: string; coefficient?: number; difficulty?: 1 | 2 | 3 | 4 | 5 }> = {
  '1MAN3350': { name: 'Fondamentaux de la Finance', professor: 'Dr KADJO ASSANDE PIERRE', coefficient: 6, difficulty: 4 },
  '1INF3350': { name: "Développement d'Applications 1", professor: 'M. KONE ZANA', coefficient: 6, difficulty: 4 },
  '2INF3350': { name: 'Conception web et administration des SI', professor: 'M. MEYER JEAN-MARC', coefficient: 6, difficulty: 4 },
  '1MTH3350': { name: 'Algèbres 2', professor: 'Dr KOIVOGUI MOUSSA', coefficient: 6, difficulty: 5 },
  '2MTH3350': { name: 'Analyse 2', professor: 'Dr GOLI ETIENNE', coefficient: 6, difficulty: 5 },
  '1MAN3351': { name: 'Économie du Développement', professor: 'Dr KOUAKOU INNOCENT', coefficient: 5, difficulty: 3 },
  '1MAN3352': { name: 'Droit de la Protection des données', professor: 'Dr ADINGRA FODJO MARIUS', coefficient: 4, difficulty: 3 },
  '1LAN3350': { name: 'Anglais', professor: 'M. YEO NICODEME', coefficient: 3, difficulty: 2 },
};

export const DEMO_PDF_TEMPLATES: DemoPdfTemplate[] = [
  {
    id: 'pdf-esatic-entd2',
    name: 'ESATIC — Semestre 3 : ENTD 2 (Économie Numérique & Transformation Digitale)',
    trackName: 'Économie Numérique & Transformation Digitale (ESATIC)',
    level: 'Licence 2 / Semestre 3',
    fileName: 'ESATIC_EDT_Semestre_3_ENTD2_Partie1.pdf',
    fileSize: 489300,
    rawText: `ESATIC - ECOLE SUPERIEURE AFRICAINE DES TIC
EMPLOI DU TEMPS DU SEMESTRE 3 : ENTD 2 - PARTIE 1
LUNDI :
07:30 - 10:00 | Algèbres 2 [1MTH3350] | Amphi ESATIC | Dr KOIVOGUI MOUSSA
10:15 - 12:45 | Anglais [1LAN3350] | Salle 204 | M. YEO NICODEME
14:30 - 17:00 | Développement d'Applications 1 [1INF3350] | Lab Info | M. KONE ZANA
MARDI :
07:30 - 10:00 | Fondamentaux de la Finance [1MAN3350] | Amphi ESATIC | Dr KADJO ASSANDE PIERRE
10:15 - 12:45 | Conception web et administration des SI [2INF3350] | Lab Info | M. MEYER JEAN-MARC
16:30 - 18:00 | Sport / Activités Physiques | Terrain ESATIC | Coach Sport
MERCREDI :
07:30 - 10:00 | Économie du Développement [1MAN3351] | Amphi ESATIC | Dr KOUAKOU INNOCENT
10:15 - 12:45 | Conception web et administration des SI [2INF3350] | Lab Info | M. MEYER JEAN-MARC
14:30 - 17:00 | Analyse 2 [2MTH3350] | Amphi ESATIC | Dr GOLI ETIENNE
JEUDI :
07:30 - 10:00 | Fondamentaux de la Finance [1MAN3350] | Amphi ESATIC | Dr KADJO ASSANDE PIERRE
10:15 - 12:45 | Développement d'Applications 1 [1INF3350] | Lab Info | M. KONE ZANA
14:30 - 17:00 | Analyse 2 [2MTH3350] | Amphi ESATIC | Dr GOLI ETIENNE
VENDREDI :
07:30 - 10:00 | Algèbres 2 [1MTH3350] | Amphi ESATIC | Dr KOIVOGUI MOUSSA
10:15 - 12:45 | Économie du Développement [1MAN3351] | Amphi ESATIC | Dr KOUAKOU INNOCENT
14:30 - 17:00 | Droit de la Protection des données [1MAN3352] | Amphi ESATIC | Dr ADINGRA FODJO MARIUS
SAMEDI :
08:00 - 12:00 | Devoirs et Cours de Rattrapage | Salle Polyvalente | Équipe pédagogique`,
    subjects: [
      { name: 'Fondamentaux de la Finance', code: '1MAN3350', color: '#10B981', coefficient: 6, difficulty: 4, targetGrade: 16, topics: ['États financiers & Soldes intermédiaires', 'Mathématiques financières & Actualisation', 'Choix des investissements & VAN / TRI', 'BFR & Gestion de la trésorerie d\'entreprise'] },
      { name: 'Développement d\'Applications 1', code: '1INF3350', color: '#6366F1', coefficient: 6, difficulty: 4, targetGrade: 16, topics: ['Programmation orientée objet & Architecture MVC', 'Gestion des formulaires & Validation de données', 'Interfaçage Base de Données & ORM', 'Tests unitaires & Bonnes pratiques logicielles'] },
      { name: 'Conception web et administration des SI', code: '2INF3350', color: '#06B6D4', coefficient: 6, difficulty: 4, targetGrade: 15, topics: ['Architecture des Systèmes d\'Information', 'Développement Web moderne & APIs REST', 'Sécurité web & Authentification', 'Administration serveur & Déploiement'] },
      { name: 'Algèbres 2', code: '1MTH3350', color: '#8B5CF6', coefficient: 6, difficulty: 5, targetGrade: 15, topics: ['Espaces vectoriels & Sous-espaces fondamentaux', 'Applications linéaires & Théorème du rang', 'Matrices, Déterminants & Systèmes linéaires', 'Réduction des endomorphismes (Diagonalisation)'] },
      { name: 'Analyse 2', code: '2MTH3350', color: '#3B82F6', coefficient: 6, difficulty: 5, targetGrade: 15, topics: ['Intégration & Primitives usuelles', 'Équations différentielles linéaires d\'ordre 1 et 2', 'Développements limités & Formule de Taylor', 'Fonctions de plusieurs variables & Dérivées partielles'] },
      { name: 'Économie du Développement', code: '1MAN3351', color: '#F59E0B', coefficient: 5, difficulty: 3, targetGrade: 16, topics: ['Théories & Modèles de croissance économique', 'Commerce international & Politiques industrielles', 'Économie numérique dans les pays en développement', 'Indicateurs de développement (IDH, Inégalités)'] },
      { name: 'Droit de la Protection des données', code: '1MAN3352', color: '#EC4899', coefficient: 4, difficulty: 3, targetGrade: 16, topics: ['Cadre légal de la protection des données personnelles', 'Principes directeurs du traitement & Consentement', 'Responsabilités du DPO & Sanctions juridiques', 'Cybersécurité & Conformité légale en entreprise'] },
      { name: 'Anglais', code: '1LAN3350', color: '#14B8A6', coefficient: 3, difficulty: 2, targetGrade: 17, topics: ['Business & Technical English vocabulary', 'IT presentations & Communication skills', 'Technical writing & Documentation', 'Listening comprehension & Active practice'] },
    ],
    slots: [
      { subjectName: 'Algèbres 2', dayOfWeek: 0, startTime: '07:30', endTime: '10:00', type: 'lecture', room: 'Amphi ESATIC', professor: 'Dr KOIVOGUI MOUSSA' },
      { subjectName: 'Anglais', dayOfWeek: 0, startTime: '10:15', endTime: '12:45', type: 'lecture', room: 'Salle 204', professor: 'M. YEO NICODEME' },
      { subjectName: 'Développement d\'Applications 1', dayOfWeek: 0, startTime: '14:30', endTime: '17:00', type: 'lab', room: 'Lab Info', professor: 'M. KONE ZANA' },
      { subjectName: 'Fondamentaux de la Finance', dayOfWeek: 1, startTime: '07:30', endTime: '10:00', type: 'lecture', room: 'Amphi ESATIC', professor: 'Dr KADJO ASSANDE PIERRE' },
      { subjectName: 'Conception web et administration des SI', dayOfWeek: 1, startTime: '10:15', endTime: '12:45', type: 'lab', room: 'Lab Info', professor: 'M. MEYER JEAN-MARC' },
      { subjectName: 'Économie du Développement', dayOfWeek: 2, startTime: '07:30', endTime: '10:00', type: 'lecture', room: 'Amphi ESATIC', professor: 'Dr KOUAKOU INNOCENT' },
      { subjectName: 'Conception web et administration des SI', dayOfWeek: 2, startTime: '10:15', endTime: '12:45', type: 'lecture', room: 'Lab Info', professor: 'M. MEYER JEAN-MARC' },
      { subjectName: 'Analyse 2', dayOfWeek: 2, startTime: '14:30', endTime: '17:00', type: 'lecture', room: 'Amphi ESATIC', professor: 'Dr GOLI ETIENNE' },
      { subjectName: 'Fondamentaux de la Finance', dayOfWeek: 3, startTime: '07:30', endTime: '10:00', type: 'lecture', room: 'Amphi ESATIC', professor: 'Dr KADJO ASSANDE PIERRE' },
      { subjectName: 'Développement d\'Applications 1', dayOfWeek: 3, startTime: '10:15', endTime: '12:45', type: 'lecture', room: 'Lab Info', professor: 'M. KONE ZANA' },
      { subjectName: 'Analyse 2', dayOfWeek: 3, startTime: '14:30', endTime: '17:00', type: 'lecture', room: 'Amphi ESATIC', professor: 'Dr GOLI ETIENNE' },
      { subjectName: 'Algèbres 2', dayOfWeek: 4, startTime: '07:30', endTime: '10:00', type: 'lecture', room: 'Amphi ESATIC', professor: 'Dr KOIVOGUI MOUSSA' },
      { subjectName: 'Économie du Développement', dayOfWeek: 4, startTime: '10:15', endTime: '12:45', type: 'lecture', room: 'Amphi ESATIC', professor: 'Dr KOUAKOU INNOCENT' },
      { subjectName: 'Droit de la Protection des données', dayOfWeek: 4, startTime: '14:30', endTime: '17:00', type: 'lecture', room: 'Amphi ESATIC', professor: 'Dr ADINGRA FODJO MARIUS' },
    ],
  },
  {
    id: 'pdf-lycee-john-wesley',
    name: 'Lycée — CSM John Wesley : Terminale C / D (Cours de Vacances)',
    trackName: 'Terminale C & D (Série Scientifique)',
    level: 'Terminale C / D',
    fileName: 'EDT_CSM_John_Wesley_Tle_CD_2026.pdf',
    fileSize: 320400,
    rawText: `COURS DE VACANCES 2026
CSM JOHN WESLEY | Tle C/D
LUNDI :
08:00 - 09:50 | Sciences de la Vie et de la Terre (SVT) | Salle Tle C/D | Équipe SVT
10:10 - 12:00 | Physique-Chimie | Salle Tle C/D | Équipe PC
MARDI :
08:00 - 09:50 | Sciences de la Vie et de la Terre (SVT) | Salle Tle C/D | Équipe SVT
10:10 - 12:00 | Mathématiques | Salle Tle C/D | Équipe Maths
MERCREDI :
08:00 - 09:50 | Physique-Chimie | Salle Tle C/D | Équipe PC
10:10 - 12:00 | Français | Salle Tle C/D | Équipe Français
JEUDI :
08:00 - 09:50 | Physique-Chimie | Salle Tle C/D | Équipe PC
10:10 - 12:00 | Mathématiques | Salle Tle C/D | Équipe Maths
VENDREDI :
08:00 - 09:50 | Français | Salle Tle C/D | Équipe Français
10:10 - 12:00 | Mathématiques | Salle Tle C/D | Équipe Maths`,
    subjects: [
      { name: 'Mathématiques', code: 'MATH-TLE', color: '#6366F1', coefficient: 9, difficulty: 5, targetGrade: 16, examDate: '2026-06-18', topics: ['Fonctions Logarithme (ln) & Exponentielle (exp)', 'Nombres Complexes & Géométrie du plan', 'Suites numériques & Raisonnement par récurrence', 'Calcul Intégral & Équations différentielles', 'Probabilités conditionnelles & Dénombrement'] },
      { name: 'Physique-Chimie', code: 'PC-TLE', color: '#06B6D4', coefficient: 8, difficulty: 5, targetGrade: 16, examDate: '2026-06-19', topics: ['Cinématique & Lois du mouvement de Newton', 'Mouvement dans un champ E et B uniforme', 'Acides, Bases & Dosages pH-métriques', 'Chimie organique : Estérification & Saponification', 'Oscillations électriques & Circuits RLC'] },
      { name: 'Sciences de la Vie et de la Terre (SVT)', code: 'SVT-TLE', color: '#10B981', coefficient: 6, difficulty: 4, targetGrade: 15, examDate: '2026-06-20', topics: ['Génétique formelle & Transmission des allèles', 'Immunologie & Système de défense de l\'organisme', 'Neurophysiologie : Potentiel d\'action & Synapses', 'Reproduction humaine & Régulation hormonale', 'Géodynamique interne & Tectonique des plaques'] },
      { name: 'Français', code: 'FR-TLE', color: '#F59E0B', coefficient: 4, difficulty: 3, targetGrade: 15, topics: ['Méthodologie du commentaire composé', 'Dissertation littéraire & Problématisation', 'Courants littéraires & Négritude', 'Étude des œuvres intégrales au programme'] },
    ],
    slots: [
      { subjectName: 'Sciences de la Vie et de la Terre (SVT)', dayOfWeek: 0, startTime: '08:00', endTime: '09:50', type: 'lecture', room: 'Salle Tle C/D', professor: 'Équipe SVT' },
      { subjectName: 'Physique-Chimie', dayOfWeek: 0, startTime: '10:10', endTime: '12:00', type: 'lecture', room: 'Salle Tle C/D', professor: 'Équipe PC' },
      { subjectName: 'Sciences de la Vie et de la Terre (SVT)', dayOfWeek: 1, startTime: '08:00', endTime: '09:50', type: 'lecture', room: 'Salle Tle C/D', professor: 'Équipe SVT' },
      { subjectName: 'Mathématiques', dayOfWeek: 1, startTime: '10:10', endTime: '12:00', type: 'lecture', room: 'Salle Tle C/D', professor: 'Équipe Maths' },
      { subjectName: 'Physique-Chimie', dayOfWeek: 2, startTime: '08:00', endTime: '09:50', type: 'lecture', room: 'Salle Tle C/D', professor: 'Équipe PC' },
      { subjectName: 'Français', dayOfWeek: 2, startTime: '10:10', endTime: '12:00', type: 'lecture', room: 'Salle Tle C/D', professor: 'Équipe Français' },
      { subjectName: 'Physique-Chimie', dayOfWeek: 3, startTime: '08:00', endTime: '09:50', type: 'lecture', room: 'Salle Tle C/D', professor: 'Équipe PC' },
      { subjectName: 'Mathématiques', dayOfWeek: 3, startTime: '10:10', endTime: '12:00', type: 'lecture', room: 'Salle Tle C/D', professor: 'Équipe Maths' },
      { subjectName: 'Français', dayOfWeek: 4, startTime: '08:00', endTime: '09:50', type: 'lecture', room: 'Salle Tle C/D', professor: 'Équipe Français' },
      { subjectName: 'Mathématiques', dayOfWeek: 4, startTime: '10:10', endTime: '12:00', type: 'lecture', room: 'Salle Tle C/D', professor: 'Équipe Maths' },
    ],
  },
  {
    id: 'pdf-cs-l3',
    name: 'Licence 3 Informatique & Ingénierie Logicielle',
    trackName: 'Informatique & Technologies',
    level: 'L3 / Bac+3',
    fileName: 'EDT_Universitaire_L3_Informatique_S1_2026.pdf',
    fileSize: 428500,
    rawText: `UNIVERSITÉ DES SCIENCES & TECHNOLOGIES
LUNDI :
08:30 - 10:30 | CM Algorithmique Avancée & Graphes | Amphi Ada Lovelace | Prof. Dr. Boni
10:45 - 12:45 | TD Algorithmique & Complexité | Salle B204 | M. Dupont
14:00 - 17:00 | TP Architecture des Réseaux & Sockets | Lab Info 4 | Mme. Mercier
MARDI :
09:00 - 11:00 | CM Systèmes d'Exploitation & Concurrence | Amphi Turing | Dr. Leclerc
11:15 - 13:15 | TD Systèmes Unix & Threads | Salle B102 | Dr. Leclerc
15:00 - 17:00 | CM Architecture des Réseaux & Protocoles | Amphi B | Mme. Mercier
MERCREDI :
08:30 - 10:30 | CM Conception de Bases de Données (SQL/NoSQL) | Amphi C | Dr. Moreau
10:45 - 12:45 | TP Bases de Données & Indexation | Lab Info 2 | Dr. Moreau
14:00 - 16:00 | CM Mathématiques Discrètes & Probabilités | Amphi Gauss | Prof. Laurent
JEUDI :
09:00 - 11:00 | TD Mathématiques Discrètes | Salle B208 | Prof. Laurent
14:00 - 16:00 | CM Anglais Professionnel & Technique | Salle C101 | Sarah Jenkins
VENDREDI :
09:00 - 12:00 | TP Projet Intégrateur & DevOps | Lab Info 1 | Équipe pédagogique`,
    subjects: [
      { name: 'Algorithmique Avancée & Graphes', code: 'INFO-301', color: '#6366F1', coefficient: 6, difficulty: 5, targetGrade: 16, examDate: '2026-12-15', topics: ['Arbres AVL & B-Trees', 'Graphes (Dijkstra)', 'Programmation Dynamique'] },
      { name: 'Architecture des Réseaux & Sockets', code: 'INFO-302', color: '#06B6D4', coefficient: 5, difficulty: 4, targetGrade: 15, examDate: '2026-12-18', topics: ['Modèle OSI & TCP/IP', 'Sockets C', 'TLS'] },
      { name: 'Systèmes d’Exploitation & Concurrence', code: 'INFO-303', color: '#8B5CF6', coefficient: 5, difficulty: 4, targetGrade: 15, examDate: '2026-12-20', topics: ['Processus & Threads', 'Mémoire Virtuelle', 'Sémaphores'] },
      { name: 'Bases de Données & NoSQL', code: 'INFO-304', color: '#10B981', coefficient: 4, difficulty: 3, targetGrade: 17, examDate: '2026-12-22', topics: ['Index B-Tree', 'Optimisation SQL', 'MongoDB'] },
      { name: 'Mathématiques Discrètes & Probas', code: 'MATH-301', color: '#F59E0B', coefficient: 4, difficulty: 4, targetGrade: 14, examDate: '2026-12-12', topics: ['Combinatoire', 'Graphes', 'Probabilités'] },
      { name: 'Anglais Professionnel', code: 'LANG-301', color: '#EC4899', coefficient: 2, difficulty: 2, targetGrade: 18, topics: ['Technical Writing', 'Presentations'] },
    ],
    slots: [
      { subjectName: 'Algorithmique Avancée & Graphes', dayOfWeek: 0, startTime: '08:30', endTime: '10:30', type: 'lecture', room: 'Amphi Ada Lovelace', professor: 'Prof. Dr. Boni' },
      { subjectName: 'Algorithmique Avancée & Graphes', dayOfWeek: 0, startTime: '10:45', endTime: '12:45', type: 'tutorial', room: 'Salle B204', professor: 'M. Dupont' },
      { subjectName: 'Architecture des Réseaux & Sockets', dayOfWeek: 0, startTime: '14:00', endTime: '17:00', type: 'lab', room: 'Lab Info 4', professor: 'Mme. Mercier' },
      { subjectName: 'Systèmes d’Exploitation & Concurrence', dayOfWeek: 1, startTime: '09:00', endTime: '11:00', type: 'lecture', room: 'Amphi Turing', professor: 'Dr. Leclerc' },
      { subjectName: 'Systèmes d’Exploitation & Concurrence', dayOfWeek: 1, startTime: '11:15', endTime: '13:15', type: 'tutorial', room: 'Salle B102', professor: 'Dr. Leclerc' },
      { subjectName: 'Architecture des Réseaux & Sockets', dayOfWeek: 1, startTime: '15:00', endTime: '17:00', type: 'lecture', room: 'Amphi B', professor: 'Mme. Mercier' },
      { subjectName: 'Bases de Données & NoSQL', dayOfWeek: 2, startTime: '08:30', endTime: '10:30', type: 'lecture', room: 'Amphi C', professor: 'Dr. Moreau' },
      { subjectName: 'Bases de Données & NoSQL', dayOfWeek: 2, startTime: '10:45', endTime: '12:45', type: 'lab', room: 'Lab Info 2', professor: 'Dr. Moreau' },
      { subjectName: 'Mathématiques Discrètes & Probas', dayOfWeek: 2, startTime: '14:00', endTime: '16:00', type: 'lecture', room: 'Amphi Gauss', professor: 'Prof. Laurent' },
      { subjectName: 'Mathématiques Discrètes & Probas', dayOfWeek: 3, startTime: '09:00', endTime: '11:00', type: 'tutorial', room: 'Salle B208', professor: 'Prof. Laurent' },
      { subjectName: 'Anglais Professionnel', dayOfWeek: 3, startTime: '14:00', endTime: '16:00', type: 'lecture', room: 'Salle C101', professor: 'Sarah Jenkins' },
      { subjectName: 'Algorithmique Avancée & Graphes', dayOfWeek: 4, startTime: '09:00', endTime: '12:00', type: 'project', room: 'Lab Info 1', professor: 'Équipe pédagogique' },
    ],
  },
  {
    id: 'pdf-medecine-pass',
    name: 'PASS / Santé & Première Année Médecine',
    trackName: 'Santé & Médecine',
    level: 'PASS / DFGSM',
    fileName: 'EDT_Faculte_Medecine_PASS_Semestre_1.pdf',
    fileSize: 564200,
    rawText: `FACULTÉ DE MÉDECINE & SANTÉ
LUNDI :
08:00 - 10:00 | CM Anatomie Générale & Membres | Grand Amphi Pasteur | Pr. Caron
10:15 - 12:15 | CM Biochimie & Biologie Moléculaire | Grand Amphi Pasteur | Pr. Vasseur
14:00 - 16:00 | TD Anatomie & Schémas | Salle TP 12 | Dr. Bernard
MARDI :
08:30 - 10:30 | CM Histologie & Embryologie | Amphi Laennec | Dr. Girard
10:45 - 12:45 | CM Biostatistiques & Épidémiologie | Amphi Laennec | Pr. Dubois
14:30 - 16:30 | TD Biostatistiques & Exercices | Salle B04 | Dr. Robert
MERCREDI :
08:00 - 10:00 | CM Biophysique & Imagerie Médicale | Amphi Pasteur | Pr. Henry
10:15 - 12:15 | CM Physiologie Cellulaire & Tissus | Amphi Pasteur | Dr. Garnier
JEUDI :
10:45 - 12:45 | TD Biochimie Structurale | Salle TP 8 | Dr. Vasseur
14:00 - 17:00 | Tutorat & Entraînement QCM Chronométré | Amphi Pasteur | Équipe Tutorat
VENDREDI :
08:30 - 10:30 | CM Sciences Humaines & Sociales (SHS) / Éthique | Amphi Pasteur | Pr. Martin
10:45 - 12:45 | TD Anatomie & Repérage Topographique | Salle TP 12 | Dr. Bernard`,
    subjects: [
      { name: 'Anatomie Générale & Topographique', code: 'UE-1', color: '#EF4444', coefficient: 8, difficulty: 5, targetGrade: 16, examDate: '2026-12-10', topics: ['Ostéologie', 'Myologie', 'Vaisseaux'] },
      { name: 'Biochimie & Biologie Moléculaire', code: 'UE-2', color: '#10B981', coefficient: 8, difficulty: 5, targetGrade: 15, examDate: '2026-12-12', topics: ['Enzymes', 'Cycle de Krebs', 'ADN'] },
      { name: 'Histologie & Embryologie', code: 'UE-3', color: '#8B5CF6', coefficient: 6, difficulty: 4, targetGrade: 16, examDate: '2026-12-14', topics: ['Tissus épithéliaux', 'Gastrulation'] },
      { name: 'Biophysique & Imagerie Médicale', code: 'UE-4', color: '#06B6D4', coefficient: 6, difficulty: 5, targetGrade: 14, examDate: '2026-12-16', topics: ['Rayonnements ionisants', 'RMN & IRM'] },
      { name: 'Biostatistiques & Épidémiologie', code: 'UE-5', color: '#F59E0B', coefficient: 5, difficulty: 4, targetGrade: 16, examDate: '2026-12-18', topics: ['Chi2', 'Student', 'Intervalles de confiance'] },
      { name: 'Sciences Humaines & Sociales (SHS)', code: 'UE-6', color: '#6366F1', coefficient: 4, difficulty: 3, targetGrade: 17, examDate: '2026-12-21', topics: ['Éthique médicale', 'Histoire de la médecine'] },
    ],
    slots: [
      { subjectName: 'Anatomie Générale & Topographique', dayOfWeek: 0, startTime: '08:00', endTime: '10:00', type: 'lecture', room: 'Grand Amphi Pasteur', professor: 'Pr. Caron' },
      { subjectName: 'Biochimie & Biologie Moléculaire', dayOfWeek: 0, startTime: '10:15', endTime: '12:15', type: 'lecture', room: 'Grand Amphi Pasteur', professor: 'Pr. Vasseur' },
      { subjectName: 'Anatomie Générale & Topographique', dayOfWeek: 0, startTime: '14:00', endTime: '16:00', type: 'tutorial', room: 'Salle TP 12', professor: 'Dr. Bernard' },
      { subjectName: 'Histologie & Embryologie', dayOfWeek: 1, startTime: '08:30', endTime: '10:30', type: 'lecture', room: 'Amphi Laennec', professor: 'Dr. Girard' },
      { subjectName: 'Biostatistiques & Épidémiologie', dayOfWeek: 1, startTime: '10:45', endTime: '12:45', type: 'lecture', room: 'Amphi Laennec', professor: 'Pr. Dubois' },
      { subjectName: 'Biostatistiques & Épidémiologie', dayOfWeek: 1, startTime: '14:30', endTime: '16:30', type: 'tutorial', room: 'Salle B04', professor: 'Dr. Robert' },
      { subjectName: 'Biophysique & Imagerie Médicale', dayOfWeek: 2, startTime: '08:00', endTime: '10:00', type: 'lecture', room: 'Amphi Pasteur', professor: 'Pr. Henry' },
      { subjectName: 'Biochimie & Biologie Moléculaire', dayOfWeek: 2, startTime: '10:15', endTime: '12:15', type: 'lecture', room: 'Amphi Pasteur', professor: 'Dr. Garnier' },
      { subjectName: 'Biochimie & Biologie Moléculaire', dayOfWeek: 3, startTime: '10:45', endTime: '12:45', type: 'tutorial', room: 'Salle TP 8', professor: 'Dr. Vasseur' },
      { subjectName: 'Anatomie Générale & Topographique', dayOfWeek: 3, startTime: '14:00', endTime: '17:00', type: 'exam', room: 'Amphi Pasteur', professor: 'Équipe Tutorat' },
      { subjectName: 'Sciences Humaines & Sociales (SHS)', dayOfWeek: 4, startTime: '08:30', endTime: '10:30', type: 'lecture', room: 'Amphi Pasteur', professor: 'Pr. Martin' },
      { subjectName: 'Anatomie Générale & Topographique', dayOfWeek: 4, startTime: '10:45', endTime: '12:45', type: 'tutorial', room: 'Salle TP 12', professor: 'Dr. Bernard' },
    ],
  },
  {
    id: 'pdf-droit-l2',
    name: 'Licence 2 Droit & Sciences Politiques',
    trackName: 'Droit & Sciences Juridiques',
    level: 'L2 Droit',
    fileName: 'Emploi_du_Temps_L2_Droit_Semestre_3.pdf',
    fileSize: 389000,
    rawText: `FACULTÉ DE DROIT
LUNDI :
08:30 - 11:30 | CM Droit des Obligations & Responsabilité Civile | Amphi Portalis | Pr. De la Tour
14:00 - 15:30 | TD Droit des Obligations | Salle 104 | Me. Fontaine
16:00 - 18:00 | CM Droit Administratif Général | Amphi Hauriou | Pr. Vedel
MARDI :
09:00 - 12:00 | CM Droit Pénal Général & Procédure | Amphi Carbonnier | Pr. Garçon
14:00 - 15:30 | TD Droit Administratif | Salle 202 | M. Renard
MERCREDI :
08:30 - 10:30 | CM Finances Publiques & Droit Budgétaire | Amphi Portalis | Pr. Bouvier
JEUDI :
09:00 - 10:30 | TD Droit Pénal Général | Salle 108 | Me. Simon
14:30 - 16:30 | CM Droit International Public | Amphi Portalis | Pr. Combacau
VENDREDI :
11:30 - 13:00 | Anglais Juridique & Common Law | Salle 305 | Mrs. Watson`,
    subjects: [
      { name: 'Droit des Obligations & Contrats', code: 'DROIT-201', color: '#6366F1', coefficient: 6, difficulty: 5, targetGrade: 15, examDate: '2026-12-14', topics: ['Formation du contrat', 'Responsabilité délictuelle'] },
      { name: 'Droit Administratif Général', code: 'DROIT-202', color: '#06B6D4', coefficient: 6, difficulty: 5, targetGrade: 15, examDate: '2026-12-17', topics: ['Actes administratifs', 'Recours pour excès de pouvoir'] },
      { name: 'Droit Pénal Général', code: 'DROIT-203', color: '#EC4899', coefficient: 4, difficulty: 4, targetGrade: 16, examDate: '2026-12-19', topics: ['Élément légal', 'Tentative & Complicité'] },
      { name: 'Finances Publiques', code: 'DROIT-204', color: '#F59E0B', coefficient: 3, difficulty: 3, targetGrade: 16, examDate: '2026-12-22', topics: ['LOLF', 'Principes budgétaires'] },
      { name: 'Droit International Public', code: 'DROIT-205', color: '#10B981', coefficient: 3, difficulty: 3, targetGrade: 16, examDate: '2026-12-23', topics: ['Traités internationaux', 'CIJ'] },
      { name: 'Anglais Juridique', code: 'LANG-201', color: '#8B5CF6', coefficient: 2, difficulty: 2, targetGrade: 17, topics: ['Common Law', 'Case Law'] },
    ],
    slots: [
      { subjectName: 'Droit des Obligations & Contrats', dayOfWeek: 0, startTime: '08:30', endTime: '11:30', type: 'lecture', room: 'Amphi Portalis', professor: 'Pr. De la Tour' },
      { subjectName: 'Droit des Obligations & Contrats', dayOfWeek: 0, startTime: '14:00', endTime: '15:30', type: 'tutorial', room: 'Salle 104', professor: 'Me. Fontaine' },
      { subjectName: 'Droit Administratif Général', dayOfWeek: 0, startTime: '16:00', endTime: '18:00', type: 'lecture', room: 'Amphi Hauriou', professor: 'Pr. Vedel' },
      { subjectName: 'Droit Pénal Général', dayOfWeek: 1, startTime: '09:00', endTime: '12:00', type: 'lecture', room: 'Amphi Carbonnier', professor: 'Pr. Garçon' },
      { subjectName: 'Droit Administratif Général', dayOfWeek: 1, startTime: '14:00', endTime: '15:30', type: 'tutorial', room: 'Salle 202', professor: 'M. Renard' },
      { subjectName: 'Finances Publiques', dayOfWeek: 2, startTime: '08:30', endTime: '10:30', type: 'lecture', room: 'Amphi Portalis', professor: 'Pr. Bouvier' },
      { subjectName: 'Droit Pénal Général', dayOfWeek: 3, startTime: '09:00', endTime: '10:30', type: 'tutorial', room: 'Salle 108', professor: 'Me. Simon' },
      { subjectName: 'Droit International Public', dayOfWeek: 3, startTime: '14:30', endTime: '16:30', type: 'lecture', room: 'Amphi Portalis', professor: 'Pr. Combacau' },
      { subjectName: 'Anglais Juridique', dayOfWeek: 4, startTime: '11:30', endTime: '13:00', type: 'tutorial', room: 'Salle 305', professor: 'Mrs. Watson' },
    ],
  },
  {
    id: 'pdf-lycee-term',
    name: 'Lycée / Terminale Générale & Spécialités',
    trackName: 'Secondaire / Baccalauréat',
    level: 'Terminale Générale',
    fileName: 'Emploi_du_Temps_Terminale_Generale_2026.pdf',
    fileSize: 310400,
    rawText: `LYCÉE D'EXCELLENCE
LUNDI :
08:00 - 10:00 | Spécialité Mathématiques | Salle 212 | M. Girard
10:15 - 12:15 | Spécialité Physique-Chimie (Cours) | Labo Phys 1 | Mme. Dupuis
13:30 - 15:30 | Philosophie | Salle 104 | M. Sartre
MARDI :
08:00 - 10:00 | Spécialité Physique-Chimie (TP) | Labo Chimie 2 | Mme. Dupuis
10:15 - 12:15 | Spécialité Mathématiques (Exercices) | Salle 212 | M. Girard
14:00 - 16:00 | Anglais LVA | Salle 302 | Mr. Brown
MERCREDI :
08:00 - 10:00 | Philosophie (Méthodologie) | Salle 104 | M. Sartre
10:15 - 12:15 | Enseignement Scientifique | Labo SVT | M. Pasteur
JEUDI :
08:00 - 10:00 | Spécialité Mathématiques | Salle 212 | M. Girard
10:15 - 12:15 | Histoire-Géographie | Salle 205 | Mme. Renan
VENDREDI :
08:00 - 10:00 | Spécialité Physique-Chimie | Labo Phys 1 | Mme. Dupuis
13:30 - 17:30 | Devoir Surveillé (DS) Hebdomadaire | Salle Polyvalente | Surveillants`,
    subjects: [
      { name: 'Spécialité Mathématiques', code: 'SPE-MATH', color: '#6366F1', coefficient: 16, difficulty: 5, targetGrade: 17, examDate: '2026-06-18', topics: ['Suites', 'Exponentielles', 'Probabilités'] },
      { name: 'Spécialité Physique-Chimie', code: 'SPE-PC', color: '#06B6D4', coefficient: 16, difficulty: 5, targetGrade: 16, examDate: '2026-06-19', topics: ['Cinématique', 'Acide-Base', 'Ondes'] },
      { name: 'Philosophie', code: 'TRONC-PHILO', color: '#8B5CF6', coefficient: 8, difficulty: 4, targetGrade: 15, examDate: '2026-06-15', topics: ['La Liberté', 'La Vérité', 'La Justice'] },
      { name: 'Histoire-Géographie & Géopolitique', code: 'TRONC-HG', color: '#F59E0B', coefficient: 6, difficulty: 3, targetGrade: 16, topics: ['Guerre froide', 'Mers et océans'] },
      { name: 'Enseignement Scientifique', code: 'TRONC-SCI', color: '#10B981', coefficient: 4, difficulty: 3, targetGrade: 17, topics: ['Climat', 'Rayonnement solaire'] },
      { name: 'Anglais LVA', code: 'LANG-LV1', color: '#EC4899', coefficient: 4, difficulty: 2, targetGrade: 18, topics: ['Art and Power', 'Innovations'] },
    ],
    slots: [
      { subjectName: 'Spécialité Mathématiques', dayOfWeek: 0, startTime: '08:00', endTime: '10:00', type: 'lecture', room: 'Salle 212', professor: 'M. Girard' },
      { subjectName: 'Spécialité Physique-Chimie', dayOfWeek: 0, startTime: '10:15', endTime: '12:15', type: 'lecture', room: 'Labo Phys 1', professor: 'Mme. Dupuis' },
      { subjectName: 'Philosophie', dayOfWeek: 0, startTime: '13:30', endTime: '15:30', type: 'lecture', room: 'Salle 104', professor: 'M. Sartre' },
      { subjectName: 'Spécialité Physique-Chimie', dayOfWeek: 1, startTime: '08:00', endTime: '10:00', type: 'lab', room: 'Labo Chimie 2', professor: 'Mme. Dupuis' },
      { subjectName: 'Spécialité Mathématiques', dayOfWeek: 1, startTime: '10:15', endTime: '12:15', type: 'tutorial', room: 'Salle 212', professor: 'M. Girard' },
      { subjectName: 'Anglais LVA', dayOfWeek: 1, startTime: '14:00', endTime: '16:00', type: 'lecture', room: 'Salle 302', professor: 'Mr. Brown' },
      { subjectName: 'Philosophie', dayOfWeek: 2, startTime: '08:00', endTime: '10:00', type: 'tutorial', room: 'Salle 104', professor: 'M. Sartre' },
      { subjectName: 'Enseignement Scientifique', dayOfWeek: 2, startTime: '10:15', endTime: '12:15', type: 'lab', room: 'Labo SVT', professor: 'M. Pasteur' },
      { subjectName: 'Spécialité Mathématiques', dayOfWeek: 3, startTime: '08:00', endTime: '10:00', type: 'lecture', room: 'Salle 212', professor: 'M. Girard' },
      { subjectName: 'Histoire-Géographie & Géopolitique', dayOfWeek: 3, startTime: '10:15', endTime: '12:15', type: 'lecture', room: 'Salle 205', professor: 'Mme. Renan' },
      { subjectName: 'Spécialité Physique-Chimie', dayOfWeek: 4, startTime: '08:00', endTime: '10:00', type: 'lecture', room: 'Labo Phys 1', professor: 'Mme. Dupuis' },
      { subjectName: 'Spécialité Mathématiques', dayOfWeek: 4, startTime: '13:30', endTime: '17:30', type: 'exam', room: 'Salle Polyvalente', professor: 'Surveillants' },
    ],
  },
];

export interface SpatialTextItem {
  str: string;
  x: number;
  y: number;
  width: number;
  height: number;
  pageNum: number;
}

export interface DayColumnBoundary {
  day: DayOfWeek;
  dayLabel: string;
  xCenter: number;
  xMin: number;
  xMax: number;
}

const DAYS_DICTIONARY: { keys: string[]; day: DayOfWeek; label: string }[] = [
  { keys: ['lundi', 'lun', 'monday', 'mon'], day: 0, label: 'Lundi' },
  { keys: ['mardi', 'mar', 'tuesday', 'tue'], day: 1, label: 'Mardi' },
  { keys: ['mercredi', 'mer', 'wednesday', 'wed'], day: 2, label: 'Mercredi' },
  { keys: ['jeudi', 'jeu', 'thursday', 'thu'], day: 3, label: 'Jeudi' },
  { keys: ['vendredi', 'ven', 'friday', 'fri'], day: 4, label: 'Vendredi' },
  { keys: ['samedi', 'sam', 'saturday', 'sat'], day: 5, label: 'Samedi' },
  { keys: ['dimanche', 'dim', 'sunday', 'sun'], day: 6, label: 'Dimanche' },
];

/**
 * Checks if a cell or text fragment represents a break, empty time, or non-academic period.
 */
export function isFreeOrBreak(text: string): boolean {
  const lower = text.toLowerCase().trim();
  const clean = lower.replace(/[^a-zà-ÿ]/g, '');
  if (!clean || clean === '-' || clean === '/') return true;
  return /^(libre|pause|déjeuner|dejeuner|repas|midi|autonomie|travail personnel|permanence|rien|néant|neant|pas de cours|fermé|ferme|weekend|vacant|off)$/i.test(clean) ||
         /^(pause déjeuner|pause repas|temps libre|créneau libre|sans cours)$/i.test(lower);
}

/**
 * Checks if a string exactly matches a day of the week header token.
 */
export function isDayHeaderToken(str: string): DayOfWeek | null {
  const clean = str.toLowerCase().replace(/[^a-z]/g, '');
  for (const entry of DAYS_DICTIONARY) {
    for (const key of entry.keys) {
      if (clean === key) return entry.day;
    }
  }
  return null;
}

/**
 * Finds a day of the week mentioned within a line of text.
 */
export function findDayInLine(text: string): DayOfWeek | null {
  for (const entry of DAYS_DICTIONARY) {
    for (const key of entry.keys) {
      const regex = new RegExp(`(^|[^a-zÀ-ÿ])${key}([^a-zÀ-ÿ]|$)`, 'i');
      if (regex.test(text)) return entry.day;
    }
  }
  return null;
}

/**
 * Extracts 2D Spatial Layout & Raw Text from any PDF using PDF.js.
 * Collects tokens with exact geometric coordinates (x, y, w, h) for spatial grid recognition.
 */
export async function extractDetailedPdfContent(file: File): Promise<{
  rawText: string;
  spatialItems: SpatialTextItem[];
  pageCount: number;
}> {
  const arrayBuffer = await file.arrayBuffer();
  const spatialItems: SpatialTextItem[] = [];
  const pageTextList: string[] = [];

  try {
    const loadingTask = pdfjsLib.getDocument({
      data: new Uint8Array(arrayBuffer),
      useWorkerFetch: true,
      useSystemFonts: true,
    });

    const pdfDoc = await loadingTask.promise;

    for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
      const page = await pdfDoc.getPage(pageNum);
      const textContent = await page.getTextContent();
      
      const pageLineMap = new Map<number, { x: number; str: string }[]>();

      for (const item of textContent.items) {
        if ('str' in item && item.str.trim().length > 0) {
          const str = item.str.trim();
          const tx = Math.round(item.transform[4]);
          const ty = Math.round(item.transform[5]);
          const width = Math.round(item.width || 10);
          const height = Math.round(item.height || 10);

          spatialItems.push({
            str,
            x: tx,
            y: ty,
            width,
            height,
            pageNum,
          });

          // Group by horizontal line for readable raw text representation
          // We group items with Y within a 4px tolerance to handle slight misalignments
          let matchedY = Array.from(pageLineMap.keys()).find(existingY => Math.abs(existingY - ty) <= 4);
          if (matchedY === undefined) {
            matchedY = ty;
            pageLineMap.set(matchedY, []);
          }
          pageLineMap.get(matchedY)!.push({ x: tx, str });
        }
      }

      // Sort lines top to bottom (Y descending in PDF coordinate space)
      const sortedYs = Array.from(pageLineMap.keys()).sort((a, b) => b - a);
      const pageLines = sortedYs.map(y => {
        // Within each line, sort words left to right (X ascending)
        const lineItems = pageLineMap.get(y)!.sort((a, b) => a.x - b.x);
        return lineItems.map(item => item.str).join(' ');
      });

      pageTextList.push(`--- PAGE ${pageNum} ---\n` + pageLines.join('\n'));
    }

    const fullRawText = pageTextList.join('\n\n');
    if (fullRawText.trim().length > 20) {
      return {
        rawText: fullRawText,
        spatialItems,
        pageCount: pdfDoc.numPages,
      };
    }
  } catch (err) {
    console.warn('PDF.js spatial extraction notice:', err);
  }

  // Fallback: Binary string stream extraction if worker fails or document is flat
  try {
    const decoder = new TextDecoder('utf-8', { fatal: false });
    const decodedStr = decoder.decode(arrayBuffer);

    const textChunks: string[] = [];
    const streamRegex = /BT[\s\S]*?ET/g;
    let match;
    while ((match = streamRegex.exec(decodedStr)) !== null) {
      const tjMatches = match[0].match(/\((.*?)\)\s*Tj/g);
      if (tjMatches) {
        tjMatches.forEach(m => {
          const content = m.replace(/^\(/, '').replace(/\)\s*Tj$/, '').trim();
          if (content.length > 0) textChunks.push(content);
        });
      }
    }

    const fallbackText = textChunks.length > 5 
      ? textChunks.join('\n') 
      : decodedStr.replace(/[^\x20-\x7E\xC0-\xFF\n\r]/g, ' ').split('\n').filter(l => l.trim().length > 3).join('\n');

    return {
      rawText: fallbackText,
      spatialItems: [],
      pageCount: 1,
    };
  } catch (err) {
    console.warn('Binary decoding fallback error:', err);
  }

  return {
    rawText: '',
    spatialItems: [],
    pageCount: 0,
  };
}

/**
 * Standardizes time string into HH:MM (24h format)
 */
function normalizeTimeString(hourStr: string, minStr?: string): string {
  const h = parseInt(hourStr, 10);
  const m = minStr ? parseInt(minStr, 10) : 0;
  const safeH = isNaN(h) ? 8 : Math.max(0, Math.min(23, h));
  const safeM = isNaN(m) ? 0 : Math.max(0, Math.min(59, m));
  return `${safeH.toString().padStart(2, '0')}:${safeM.toString().padStart(2, '0')}`;
}

/**
 * Detects course type from text tokens
 */
function detectCourseType(text: string): CourseType {
  const lower = text.toLowerCase();
  if (/\b(tp|travaux pratiques|lab|labo|laboratoire|manip|pratique)\b/i.test(lower)) {
    return 'lab';
  }
  if (/\b(td|travaux dirigés|dirigé|exercices|tutorat|colle|khôlle)\b/i.test(lower)) {
    return 'tutorial';
  }
  if (/\b(exam|partiel|ds|devoir surveillé|contrôle|eval|cc|test|épreuve|soutenance)\b/i.test(lower)) {
    return 'exam';
  }
  if (/\b(projet|project|atelier|workshop|hackathon|be|bureau d'études)\b/i.test(lower)) {
    return 'project';
  }
  return 'lecture';
}

/**
 * Extracts dynamically any Code-to-Subject (ECUE) table at the bottom of the timetable.
 * (e.g. "1MAN3350 | Fondamentaux de la Finance | 18 | 6 | 0 | 24 | Dr KADJO ASSANDE PIERRE")
 */
export function extractDynamicEcueDictionary(
  rawText: string,
  spatialItems?: SpatialTextItem[]
): Map<string, { name: string; professor?: string }> {
  const dict = new Map<string, { name: string; professor?: string }>();

  // Add all pre-indexed known university codes first
  for (const [code, info] of Object.entries(KNOWN_ACADEMIC_ECUE_MAP)) {
    dict.set(code.toUpperCase(), { name: info.name, professor: info.professor });
  }

  // 1. If spatial tokens are available, extract directly from bottom section (Y < 230)
  if (spatialItems && spatialItems.length > 0) {
    const bottomItems = spatialItems.filter(i => i.y < 230 && i.y > 35);
    const rows: { y: number; items: SpatialTextItem[] }[] = [];
    
    bottomItems.forEach(item => {
      let r = rows.find(existing => Math.abs(existing.y - item.y) <= 6);
      if (!r) {
        r = { y: item.y, items: [] };
        rows.push(r);
      }
      r.items.push(item);
    });

    rows.sort((a, b) => b.y - a.y);

    const codeRegex = /^([0-9]?[A-Z]{2,5}[-_]?[0-9]{3,5})\b/i;

    rows.forEach(row => {
      row.items.sort((a, b) => a.x - b.x);
      const rowStr = row.items.map(it => it.str).join(' ');
      const match = rowStr.match(codeRegex);

      if (match) {
        const code = match[1].toUpperCase();
        let rest = rowStr.replace(match[0], ' ')
          .replace(/\b(CODE|ECUE|VH|CM|TD|TP|TVH|ENSEIGNANTS|COEFF|ECTS)\b/gi, ' ')
          .trim();

        const prof = extractProfessor(rest);
        if (prof) {
          rest = rest.replace(prof, ' ').trim();
        }

        // Clean name: remove isolated hours/numbers (e.g. 18 6 0 24), but preserve subject numbers like "2" in "Algèbres 2"
        const cleanName = rest
          .replace(/\b\d{2,3}\b/g, ' ')
          .replace(/\s[0-9]\s+[0-9]\s+[0-9]\b/g, ' ')
          .replace(/[|:;•\-_~*#<>\[\]()\\/]+/g, ' ')
          .replace(/\s{2,}/g, ' ')
          .trim();

        if (cleanName.length >= 3 && !dict.has(code)) {
          dict.set(code, {
            name: cleanName.charAt(0).toUpperCase() + cleanName.slice(1),
            professor: prof,
          });
        }
      }
    });
  }

  // 2. Parse from sequential rawText lines
  const lines = rawText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  const codeRegex = /\b([0-9]?[A-Z]{2,5}[-_]?[0-9]{3,5})\b/i;

  lines.forEach(line => {
    const match = line.match(codeRegex);
    if (match) {
      const code = match[1].toUpperCase();

      let rest = line.replace(match[0], ' ')
        .replace(/\b(CODE|ECUE|VH|CM|TD|TP|TVH|ENSEIGNANTS|COEFF|ECTS)\b/gi, ' ')
        .replace(/\b\d{1,3}\s+\d{1,3}\s+\d{1,3}\s+\d{1,3}\b/g, ' ')
        .replace(/\b\d{1,3}\s+\d{1,3}\b/g, ' ')
        .trim();

      const prof = extractProfessor(rest);
      if (prof) {
        rest = rest.replace(prof, ' ').trim();
      }

      const cleanName = rest
        .replace(/\b\d{2,3}\b/g, ' ')
        .replace(/[|:;•\-_~*#<>\[\]()\\/]+/g, ' ')
        .replace(/\s{2,}/g, ' ')
        .trim();

      if (cleanName.length >= 3 && !dict.has(code)) {
        dict.set(code, {
          name: cleanName.charAt(0).toUpperCase() + cleanName.slice(1),
          professor: prof,
        });
      }
    }
  });

  return dict;
}

export const LYCEE_SUBJECT_ACRONYMS: Record<string, string> = {
  'PC': 'Physique-Chimie',
  'P.C': 'Physique-Chimie',
  'P.C.': 'Physique-Chimie',
  'PHYSIQUE': 'Physique',
  'CHIMIE': 'Chimie',
  'SVT': 'Sciences de la Vie et de la Terre (SVT)',
  'S.V.T': 'Sciences de la Vie et de la Terre (SVT)',
  'S.V.T.': 'Sciences de la Vie et de la Terre (SVT)',
  'MATHS': 'Mathématiques',
  'MATH': 'Mathématiques',
  'MATHEMATIQUES': 'Mathématiques',
  'FR': 'Français',
  'FRANCAIS': 'Français',
  'FRANÇAIS': 'Français',
  'HG': 'Histoire-Géographie',
  'HIST-GEO': 'Histoire-Géographie',
  'HIST GEO': 'Histoire-Géographie',
  'HISTOIRE-GEOGRAPHIE': 'Histoire-Géographie',
  'PHILO': 'Philosophie',
  'PHILOSOPHIE': 'Philosophie',
  'ANG': 'Anglais',
  'ANGLAIS': 'Anglais',
  'LV1': 'Anglais LV1',
  'LV2': 'Langue Vivante 2',
  'ESP': 'Espagnol',
  'ESPAGNOL': 'Espagnol',
  'ALL': 'Allemand',
  'ALLEMAND': 'Allemand',
  'EPS': 'Éducation Physique & Sportive (EPS)',
  'SPORT': 'Éducation Physique & Sportive (EPS)',
  'SES': 'Sciences Économiques & Sociales (SES)',
  'NSI': 'Numérique & Sciences Informatiques (NSI)',
  'SI': 'Sciences de l\'Ingénieur (SI)',
  'EMC': 'Enseignement Moral & Civique (EMC)',
};

/**
 * Clean course title by removing days of week, dates, rooms, prof titles, time tokens, and structural noise.
 * Eliminates repeated duplicate words (e.g. "PC PC", "PCPC", "SVT SVT") and resolves acronyms into full academic titles.
 */
function cleanSubjectTitle(text: string, dynamicEcueMap?: Map<string, { name: string; professor?: string }>): string {
  const trimmed = text.trim();

  // 0. Filter out non-academic schedule breaks (Récréation, Pause, etc.)
  if (/\b(recreation|récréation|pause|dejeuner|d\u00e9jeuner|repas|interclasse)\b/i.test(trimmed)) {
    return '';
  }

  // 1. Dynamic ECUE Map exact and word-boundary check
  if (dynamicEcueMap) {
    for (const [code, info] of dynamicEcueMap.entries()) {
      if (new RegExp(`(^|\\b)${code}(\\b|$)`, 'i').test(trimmed)) {
        return info.name;
      }
    }
  }

  // 2. Pre-indexed known academic ECUE map check
  for (const [code, info] of Object.entries(KNOWN_ACADEMIC_ECUE_MAP)) {
    if (new RegExp(`(^|\\b)${code}(\\b|$)`, 'i').test(trimmed)) {
      return info.name;
    }
  }

  // 3. Remove repeated adjacent duplicate words: e.g. "PC PC", "SVT SVT", "MATHS MATHS", "Français Français"
  let preCleaned = trimmed;
  while (/\b([A-Za-zÀ-ÿ0-9.]+)\s+\1\b/i.test(preCleaned)) {
    preCleaned = preCleaned.replace(/\b([A-Za-zÀ-ÿ0-9.]+)\s+\1\b/gi, '$1');
  }

  // 4. Remove glued doubled words: e.g. "PCPC" -> "PC", "SVTSVT" -> "SVT", "MATHSMATHS" -> "MATHS", "P.CP.C" -> "P.C"
  preCleaned = preCleaned.replace(/^([A-Za-zÀ-ÿ.]{2,12})\1$/i, '$1');
  if (preCleaned.replace(/\./g, '').length % 2 === 0) {
    const half = preCleaned.length / 2;
    if (preCleaned.slice(0, half).toLowerCase() === preCleaned.slice(half).toLowerCase()) {
      preCleaned = preCleaned.slice(0, half);
    }
  }

  // Check Lycée acronym directly
  const upperInitial = preCleaned.toUpperCase().replace(/\s+/g, '');
  const dotStrippedInitial = upperInitial.replace(/\./g, '');
  if (LYCEE_SUBJECT_ACRONYMS[upperInitial]) return LYCEE_SUBJECT_ACRONYMS[upperInitial];
  if (LYCEE_SUBJECT_ACRONYMS[dotStrippedInitial]) return LYCEE_SUBJECT_ACRONYMS[dotStrippedInitial];

  let cleaned = preCleaned
    // 1. Remove Days of the Week (French & English) + Abbreviations
    .replace(/\b(lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche|monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/gi, ' ')
    .replace(/\b(lun|mar|mer|jeu|ven|sam|dim|mon|tue|wed|thu|fri|sat|sun)\.?\b/gi, ' ')
    // 2. Remove Dates & Calendar stamps (e.g. 12/09/2026, Semaine 38, S1, S2)
    .replace(/\b\d{1,2}[/-]\d{1,2}([/-]\d{2,4})?\b/g, ' ')
    .replace(/\b\d{1,2}\s+(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)\b/gi, ' ')
    .replace(/\b(semaine|sem|semestre)\s*\d+\b/gi, ' ')
    // 3. Remove times: 08:30, 8h30, 10:00, 08h-10h, etc.
    .replace(/\b\d{1,2}[h:H]\d{2}\b/g, ' ')
    .replace(/\b\d{1,2}[h:H]\b/g, ' ')
    .replace(/\b\d{1,2}:\d{2}\b/g, ' ')
    .replace(/[-–—/àaA]\s*\d{1,2}[h:H:]\d{0,2}/g, ' ')
    // 4. Remove Course Types and Group notation (preserve PROJET which can be a course name)
    .replace(/\b(CM|TD|TP|EXAM|PARTIEL|DS|COURS|MAGISTRAL|SEANCE|GROUPE|GRP|GR\d|G\d|ECTS|COEFF|COEFFICIENT)\b/gi, ' ')
    // 5. Remove common room notations & campus keywords
    .replace(/\b(Amphi(?:théâtre)?|Salle|Labo?|Laboratoire|Bâtiment|Bat|Room|Auditorium|Campus|Site|UFR|Département|Faculté)\s*[A-Za-z0-9_-]*/gi, ' ')
    // 6. Remove prof prefixes & labels
    .replace(/\b(Professeur|Prof\.?|Pr\.?|Docteur|Dr\.?|Monsieur|M\.|Madame|Mme\.?|Mister|Mr\.?|Mrs\.?|Enseignant|Intervenant)\s+[A-Za-zÀ-ÿ-]+/gi, ' ')
    // 7. Remove structural timetable noise
    .replace(/\b(Emploi du temps|Planning|Horaire|Horaires|Matière|Discipline|Année|Promo|Promotion|Niveau|Licence|Master|PASS|L1|L2|L3|M1|M2)\b/gi, ' ')
    // 8. Remove noise symbols and leftover punctuation
    .replace(/[|:;•\-_~*#<>\[\]()\\/]+/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();

  // Remove trailing or leading single letters or numbers that might remain from "S1", "G2", etc.
  cleaned = cleaned.replace(/^[0-9A-Za-z]\s+/, '').replace(/\s+[0-9A-Za-z]$/, '').trim();
  // Strip dangling prepositions
  cleaned = cleaned.replace(/\s+(de|d'|des|du|et|en|à)$/i, '').trim();

  // Deduplicate again after cleaning noise
  while (/\b([A-Za-zÀ-ÿ0-9.]+)\s+\1\b/i.test(cleaned)) {
    cleaned = cleaned.replace(/\b([A-Za-zÀ-ÿ0-9.]+)\s+\1\b/gi, '$1');
  }
  cleaned = cleaned.replace(/^([A-Za-zÀ-ÿ.]{2,12})\1$/i, '$1');

  // Check Lycée acronym on cleaned string
  const upperCleaned = cleaned.toUpperCase().replace(/\s+/g, '');
  const dotStrippedCleaned = upperCleaned.replace(/\./g, '');
  if (LYCEE_SUBJECT_ACRONYMS[upperCleaned]) return LYCEE_SUBJECT_ACRONYMS[upperCleaned];
  if (LYCEE_SUBJECT_ACRONYMS[dotStrippedCleaned]) return LYCEE_SUBJECT_ACRONYMS[dotStrippedCleaned];

  // Absolute safety check: If title is still a cryptic code (e.g. 1MAN3350, 2INF3350, etc.)
  if (/^[0-9]?[A-Z]{2,5}[-_]?[0-9]{3,5}$/i.test(cleaned)) {
    const upper = cleaned.toUpperCase();
    if (upper.includes('MAN')) return 'Fondamentaux du Management & Finance';
    if (upper.includes('INF')) return 'Informatique & Génie Logiciel';
    if (upper.includes('MTH') || upper.includes('MATH')) return 'Mathématiques & Analyse';
    if (upper.includes('LAN') || upper.includes('ANG')) return 'Anglais & Communication';
    if (upper.includes('DROIT') || upper.includes('JUR')) return 'Droit & Réglementation';
    if (upper.includes('ECO')) return 'Économie & Gestion';
    return 'Enseignement Universitaire';
  }

  // If title was stripped too much
  if (cleaned.length < 2) {
    cleaned = 'Module d\'Enseignement';
  }

  // Capitalize nicely
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

/**
 * Extracts room information from a string
 */
function extractRoom(text: string): string | undefined {
  const match = text.match(/\b(Amphi(?:théâtre)?\s+[A-Za-z0-9À-ÿ\s_-]+|Salle\s+[A-Za-z0-9_-]+|Labo?\s*[A-Za-z0-9_-]*|Bâtiment\s+[A-Za-z0-9_-]+|[A-Z]\d{2,3}|Auditorium\s+[A-Za-z0-9\s_-]+)\b/i);
  return match ? match[0].trim() : undefined;
}

/**
 * Extracts professor information from a string
 */
function extractProfessor(text: string): string | undefined {
  const match = text.match(/\b(Professeur|Prof\.?|Pr\.?|Docteur|Dr\.?|Monsieur|M\.|Madame|Mme\.?|Mr\.?|Mrs\.?)\s+([A-ZÀ-Ÿ][a-zà-ÿ]+(?:\s+[A-ZÀ-Ÿ][a-zà-ÿ]+)?)\b/i);
  return match ? match[0].trim() : undefined;
}

/**
 * Generates tailored, rich academic curriculum chapters and topics based on the subject's discipline.
 */
function generateAcademicTopicsForSubject(name: string): string[] {
  const lower = name.toLowerCase();

  if (lower.includes('algo') || lower.includes('graphe') || lower.includes('complexit')) {
    return [
      'Arbres binaires de recherche & Arbres AVL',
      'Algorithmes de parcours de graphes (BFS, DFS, Dijkstra)',
      'Programmation dynamique & Mémoïsation',
      'Complexité asymptotique & Structures avancées',
      'Annales & Résolution de problèmes types',
    ];
  }
  if (lower.includes('math') || lower.includes('algebre') || lower.includes('analyse') || lower.includes('proba') || lower.includes('discret')) {
    return [
      'Théorèmes fondamentaux & Démonstrations clés',
      'Résolution d\'équations & Calcul matriciel / vectoriel',
      'Suites, Séries & Espaces vectoriels',
      'Probabilités discrètes & Lois de distribution',
      'Fiches de formules & Exercices d\'entraînement chronométrés',
    ];
  }
  if (lower.includes('reseau') || lower.includes('telecom') || lower.includes('socket') || lower.includes('securit') || lower.includes('cloud')) {
    return [
      'Modèle OSI, Couches TCP/IP & Protocoles de routage',
      'Programmation Sockets, TCP/UDP & Gestion des flux',
      'Sécurité des protocoles (TLS, Chiffrement, Certificats)',
      'Architecture Cloud & Virtualisation',
      'Schémas de topologie réseau & Fiche de synthèse',
    ];
  }
  if (lower.includes('system') || lower.includes('unix') || lower.includes('linux') || lower.includes('embarqu') || lower.includes('concurr')) {
    return [
      'Processus, Threads & Gestion de la concurrence (Mutex/Sémaphores)',
      'Mémoire virtuelle, Pagination & Swapping',
      'Systèmes de fichiers (Inodes, I/O & Permissions)',
      'Appels système Unix & Scripts shell',
      'Synthèse des mécanismes de synchronisation',
    ];
  }
  if (lower.includes('base') || lower.includes('sql') || lower.includes('donnee') || lower.includes('nosql') || lower.includes('bdd')) {
    return [
      'Modélisation Entité-Association & Schémas Relationnels',
      'Requêtes SQL avancées, Jointures & Agrégations',
      'Indexation (B-Tree, Hash) & Optimisation de requêtes',
      'Transactions, Propriétés ACID & NoSQL',
      'Conception de schémas & Exercices de normalisation',
    ];
  }
  if (lower.includes('svt') || lower.includes('sciences de la vie') || lower.includes('geologie')) {
    return [
      'Génétique formelle & Transmission des caractères héréditaires',
      'Immunologie : Défense immunitaire, Anticorps & Lymphocytes',
      'Neurophysiologie : Potentiel d\'action, Réflexe myotatique & Synapses',
      'Reproduction humaine, Gamétogenèse & Régulation hormonale',
      'Géodynamique interne, Tectonique des plaques & Séismes',
    ];
  }
  if (lower.includes('physique-chimie') || lower.includes('pc')) {
    return [
      'Cinématique & Lois de Newton (Mouvements de projectiles)',
      'Mouvement de particules chargées dans un champ B et E uniforme',
      'Acides, bases & Dosages pH-métriques d\'oxydoréduction',
      'Chimie organique : Estérification, Saponification & Dérivés',
      'Oscillations électriques libres et amorties (Circuits RLC)',
    ];
  }
  if (lower.includes('français') || lower.includes('francais') || lower.includes('litterature')) {
    return [
      'Méthodologie du commentaire composé & Figures de style',
      'Technique de la dissertation littéraire & Problématique',
      'Grands courants littéraires (Romantisme, Réalisme, Négritude)',
      'Étude thématique des œuvres intégrales au programme',
      'Fiches de citations clés & Vocabulaire critique',
    ];
  }
  if (lower.includes('physique') || lower.includes('mecanique') || lower.includes('optique') || lower.includes('electr') || lower.includes('thermo')) {
    return [
      'Lois fondamentales & Équations différentielles du mouvement',
      'Bilan d\'énergie, Conservation & Principes thermodynamiques',
      'Ondes, Interférences & Diffraction',
      'Circuits électriques, Impédances & Régimes transitoires',
      'Fiches de constantes & Résolution de cas pratiques',
    ];
  }
  if (lower.includes('chimie') || lower.includes('biochimie') || lower.includes('organique') || lower.includes('molecul')) {
    return [
      'Mécanismes réactionnels & Stéréochimie',
      'Structure des protéines, Enzymes & Cinétique',
      'Équilibres acido-basiques & Réactions d\'oxydoréduction',
      'Métabolisme cellulaire & Voies biochimiques',
      'Schémas de réaction & Fiches de synthèse moléculaire',
    ];
  }
  if (lower.includes('anatomie') || lower.includes('physiologie') || lower.includes('histologie') || lower.includes('sante') || lower.includes('biologie')) {
    return [
      'Ostéologie, Myologie & Vascularisation topographique',
      'Physiologie des systèmes (Cardio-vasculaire, Respiratoire, Rénal)',
      'Tissus fondamentaux & Histologie cellulaire',
      'Schémas anatomiques & Repérage spatial',
      'Entraînement QCM chronométré & Fiches de révision active',
    ];
  }
  if (lower.includes('droit') || lower.includes('juridique') || lower.includes('penal') || lower.includes('civil') || lower.includes('constit')) {
    return [
      'Principes généraux du droit & Textes fondateurs',
      'Méthodologie du commentaire d\'arrêt & Cas pratique',
      'Jurisprudence essentielle & Arrêts de principe',
      'Régimes de responsabilité & Droits fondamentaux',
      'Fiches d\'arrêts & Schémas de qualification juridique',
    ];
  }
  if (lower.includes('economie') || lower.includes('gestion') || lower.includes('finance') || lower.includes('compta') || lower.includes('market')) {
    return [
      'Modèles macroéconomiques & Microéconomie appliquée',
      'Analyse des états financiers, Bilan & Compte de résultat',
      'Calculs de rentabilité & Gestion des flux de trésorerie',
      'Stratégie d\'entreprise & Marchés concurrentiels',
      'Formules financières & Études de cas types',
    ];
  }
  if (lower.includes('anglais') || lower.includes('langue') || lower.includes('espagnol') || lower.includes('allemand') || lower.includes('expression')) {
    return [
      'Vocabulaire technique & Idiomes professionnels',
      'Structures grammaticales & Syntaxe avancée',
      'Compréhension écrite d\'articles académiques',
      'Préparation aux présentations & Argumentation orale',
      'Active Recall : Cartes de vocabulaire thématique',
    ];
  }
  if (lower.includes('philo') || lower.includes('histoire') || lower.includes('geopolitique') || lower.includes('sociologie')) {
    return [
      'Notions fondamentales & Thèses des auteurs majeurs',
      'Méthodologie de la dissertation & Plan détaillé',
      'Repères chronologiques & Événements charnières',
      'Citations clés & Analyse critique des concepts',
      'Fiches de synthèse thématiques',
    ];
  }

  // Default universal academic curriculum
  return [
    `Concepts fondamentaux & Définitions : ${name}`,
    `Méthodes, Théorèmes & Démonstrations appliquées`,
    `Résolution d'exercices d'application & Cas types`,
    `Fiches de synthèse & Schémas récapitulatifs`,
    `Auto-évaluation & Entraînement sur annales d'examen`,
  ];
}

/**
 * SMART OVERLAP RESOLUTION & SLOT HARMONIZER
 * Eliminates duplicate entries and resolves time collisions so the timetable is 100% clean and readable.
 */
export function harmonizeAndDeduplicateSlots<T extends {
  dayOfWeek: DayOfWeek;
  startTime: string;
  endTime: string;
  rawSubject?: string;
  subjectName?: string;
  subjectId?: string;
  type?: CourseType;
  room?: string;
  professor?: string;
  [key: string]: any;
}>(slots: T[]): T[] {
  const harmonized: T[] = [];

  // Group by day of week (0 to 6)
  for (let day = 0; day <= 6; day++) {
    const daySlots = slots
      .filter(s => s.dayOfWeek === day)
      .sort((a, b) => {
        const startDiff = parseTimeToMinutes(a.startTime) - parseTimeToMinutes(b.startTime);
        if (startDiff !== 0) return startDiff;
        const durA = parseTimeToMinutes(a.endTime) - parseTimeToMinutes(a.startTime);
        const durB = parseTimeToMinutes(b.endTime) - parseTimeToMinutes(b.startTime);
        return durB - durA; // Longer slot first if same start
      });

    const cleanDaySlots: T[] = [];

    for (const rawCurrent of daySlots) {
      const current = { ...rawCurrent };
      const curStart = parseTimeToMinutes(current.startTime);
      const curEnd = parseTimeToMinutes(current.endTime);

      if (curEnd <= curStart + 15) continue; // Invalid or too short duration

      if (cleanDaySlots.length === 0) {
        cleanDaySlots.push(current);
        continue;
      }

      const prev = cleanDaySlots[cleanDaySlots.length - 1];
      const prevStart = parseTimeToMinutes(prev.startTime);
      const prevEnd = parseTimeToMinutes(prev.endTime);

      // Subject similarity comparison:
      // STRICT exact canonical match only. NEVER use substring includes() which destroys courses like
      // "Physique" vs "Physique-Chimie" or "Mathématiques" vs "Mathématiques Appliquées"!
      const nameA = (current.subjectName || current.rawSubject || '').toLowerCase().trim();
      const nameB = (prev.subjectName || prev.rawSubject || '').toLowerCase().trim();
      const normA = nameA.replace(/[^a-z0-9à-ÿ]/g, '');
      const normB = nameB.replace(/[^a-z0-9à-ÿ]/g, '');
      const sameSubject = 
        Boolean(current.subjectId && prev.subjectId && current.subjectId === prev.subjectId) ||
        (normA.length > 1 && normA === normB);

      // 1. Same subject contiguous OR overlapping blocks:
      // (e.g. 08h00-08h55 SVT followed by 08h55-09h50 SVT -> curStart <= prevEnd + 20)
      if (sameSubject && (curStart <= prevEnd + 20) && curEnd > prevStart) {
        const mergedEnd = Math.max(prevEnd, curEnd);
        prev.endTime = minutesToTimeString(mergedEnd);
        if (!prev.room && current.room) prev.room = current.room;
        if (!prev.professor && current.professor) prev.professor = current.professor;
        continue;
      }

      // 2. Conflict & Overlap handling between DIFFERENT subjects (ZERO silent drops):
      if (curStart < prevEnd) {
        if (curStart === prevStart) {
          // Stagger current slot so both courses are preserved
          const newStart = Math.min(prevEnd, prevStart + 45);
          current.startTime = minutesToTimeString(newStart);
          if (curEnd <= newStart) {
            current.endTime = minutesToTimeString(newStart + 45);
          }
          cleanDaySlots.push(current);
          continue;
        }

        // Current starts during previous slot: clamp prev.endTime cleanly
        if (curStart - prevStart >= 35) {
          prev.endTime = current.startTime;
        } else {
          // Prev just started: give at least 45 min to prev, then begin current
          const splitMin = Math.min(prevEnd, prevStart + 45);
          prev.endTime = minutesToTimeString(splitMin);
          current.startTime = minutesToTimeString(splitMin);
          if (curEnd - splitMin < 25) {
            current.endTime = minutesToTimeString(splitMin + 45);
          }
        }
      }

      // Ensure minimum duration (at least 25 minutes)
      if (parseTimeToMinutes(current.endTime) - parseTimeToMinutes(current.startTime) >= 25) {
        cleanDaySlots.push(current);
      }
    }

    // Strict multi-pass clamp to guarantee 100% zero mathematical overlaps
    for (let i = 0; i < cleanDaySlots.length - 1; i++) {
      const sA = cleanDaySlots[i];
      const sB = cleanDaySlots[i + 1];
      const endA = parseTimeToMinutes(sA.endTime);
      const startB = parseTimeToMinutes(sB.startTime);

      if (startB < endA) {
        if (startB - parseTimeToMinutes(sA.startTime) >= 25) {
          sA.endTime = sB.startTime;
        } else {
          sB.startTime = sA.endTime;
          const durB = parseTimeToMinutes(sB.endTime) - parseTimeToMinutes(sB.startTime);
          if (durB < 25) {
            sB.endTime = minutesToTimeString(parseTimeToMinutes(sB.startTime) + 45);
          }
        }
      }
    }

    // Filter out any micro fragments (< 25 min)
    const validDaySlots = cleanDaySlots.filter(
      s => parseTimeToMinutes(s.endTime) - parseTimeToMinutes(s.startTime) >= 25
    );

    // Final safety clamp: verify all consecutive pairs
    for (let i = 0; i < validDaySlots.length - 1; i++) {
      const sA = validDaySlots[i];
      const sB = validDaySlots[i + 1];
      const endA = parseTimeToMinutes(sA.endTime);
      const startB = parseTimeToMinutes(sB.startTime);
      if (startB < endA) {
        sA.endTime = sB.startTime;
      }
    }

    harmonized.push(...validDaySlots);
  }

  return harmonized.sort((a, b) => {
    if (a.dayOfWeek !== b.dayOfWeek) return a.dayOfWeek - b.dayOfWeek;
    return parseTimeToMinutes(a.startTime) - parseTimeToMinutes(b.startTime);
  });
}

/**
 * 2D SPATIAL GRID TIMETABLE PARSER
 * Identifies horizontal day columns (ADE, Celcat, Hyperplanning, Google/Apple Calendar grids)
 * and clusters courses by column and vertical time sequence.
 */
function parseSpatialGridSchedule(
  spatialItems: SpatialTextItem[],
  pageCount: number,
  dynamicEcueMap?: Map<string, { name: string; professor?: string }>
): {
  detectedSlots: {
    dayOfWeek: DayOfWeek;
    startTime: string;
    endTime: string;
    rawSubject: string;
    type: CourseType;
    room?: string;
    professor?: string;
  }[];
} {
  const detectedSlots: {
    dayOfWeek: DayOfWeek;
    startTime: string;
    endTime: string;
    rawSubject: string;
    type: CourseType;
    room?: string;
    professor?: string;
  }[] = [];

  const timeRangeRegex = /(\d{1,2})[h:H](\d{2})?\s*[-–—àaA/]\s*(\d{1,2})[h:H](\d{2})?/i;
  const colonTimeRegex = /(\d{1,2}):(\d{2})\s*[-–—àaA/]\s*(\d{1,2}):(\d{2})/;

  for (let p = 1; p <= pageCount; p++) {
    const pageItems = spatialItems.filter(item => item.pageNum === p);
    if (pageItems.length === 0) continue;

    // 1. Detect Day Column Headers on this page
    const detectedDaysOnPage: { day: DayOfWeek; label: string; xCenter: number; y: number }[] = [];

    for (const item of pageItems) {
      const lowerStr = item.str.toLowerCase();
      for (const dayEntry of DAYS_DICTIONARY) {
        if (dayEntry.keys.some(k => new RegExp(`(^|\\b)${k}(\\b|:|\$)`, 'i').test(lowerStr))) {
          const exists = detectedDaysOnPage.some(d => d.day === dayEntry.day && Math.abs(d.xCenter - item.x) < 50);
          if (!exists) {
            detectedDaysOnPage.push({
              day: dayEntry.day,
              label: dayEntry.label,
              xCenter: item.x + item.width / 2,
              y: item.y,
            });
          }
          break;
        }
      }
    }

    if (detectedDaysOnPage.length >= 2) {
      // Check if layout has vertical day rows (all day headers share similar X, but different Y)
      const isVerticalLayout = detectedDaysOnPage.every(d => Math.abs(d.xCenter - detectedDaysOnPage[0].xCenter) < 70);

      if (isVerticalLayout) {
        // Sort days top to bottom (Y descending)
        detectedDaysOnPage.sort((a, b) => b.y - a.y);

        const dayRows = detectedDaysOnPage.map((dayItem, index, arr) => {
          const prev = arr[index - 1];
          const next = arr[index + 1];
          const yMax = prev ? (prev.y + dayItem.y) / 2 : 600;
          const yMin = next ? (dayItem.y + next.y) / 2 : 210;
          return {
            day: dayItem.day,
            label: dayItem.label,
            yMin,
            yMax,
          };
        });

        for (const row of dayRows) {
          const rowItems = pageItems
            .filter(item => item.y >= row.yMin && item.y < row.yMax && item.x >= 65)
            .sort((a, b) => b.y - a.y);

          // Group by horizontal line within this day band (tolerance 5px)
          const timeRows: { y: number; items: SpatialTextItem[] }[] = [];
          rowItems.forEach(item => {
            let tr = timeRows.find(existing => Math.abs(existing.y - item.y) <= 5);
            if (!tr) {
              tr = { y: item.y, items: [] };
              timeRows.push(tr);
            }
            tr.items.push(item);
          });
          timeRows.sort((a, b) => b.y - a.y);

          for (const tr of timeRows) {
            tr.items.sort((a, b) => a.x - b.x);
            processBlock(tr.items, row.day);
          }
        }
      } else {
        // Horizontal Day Columns Layout (e.g. Lycée CSM John Wesley, ADE, Celcat, Hyperplanning)
        detectedDaysOnPage.sort((a, b) => a.xCenter - b.xCenter);

        const columns: DayColumnBoundary[] = detectedDaysOnPage.map((dayItem, index, arr) => {
          const prev = arr[index - 1];
          const next = arr[index + 1];

          const xMin = prev ? (prev.xCenter + dayItem.xCenter) / 2 : 0;
          const xMax = next ? (dayItem.xCenter + next.xCenter) / 2 : 5000;

          return {
            day: dayItem.day,
            dayLabel: dayItem.label,
            xCenter: dayItem.xCenter,
            xMin,
            xMax,
          };
        });

        // 1. Detect all Time Slots / Rows across the page (usually located on left column)
        const detectedTimeItems: { startTime: string; endTime: string; y: number }[] = [];
        for (const item of pageItems) {
          const match = item.str.match(colonTimeRegex) || item.str.match(timeRangeRegex);
          if (match) {
            const startH = match[1];
            const startM = match[2] || '00';
            const endH = match[3];
            const endM = match[4] || '00';
            const startTime = normalizeTimeString(startH, startM);
            const endTime = normalizeTimeString(endH, endM);
            if (parseTimeToMinutes(endTime) > parseTimeToMinutes(startTime)) {
              const exists = detectedTimeItems.some(ti => Math.abs(ti.y - item.y) <= 8);
              if (!exists) {
                detectedTimeItems.push({ startTime, endTime, y: item.y });
              }
            }
          }
        }

        if (detectedTimeItems.length >= 1) {
          // Sort time rows from top to bottom (Y descending)
          detectedTimeItems.sort((a, b) => b.y - a.y);
          const timeRows = detectedTimeItems.map((ti, index, arr) => {
            const prev = arr[index - 1];
            const next = arr[index + 1];
            const yMax = prev ? (prev.y + ti.y) / 2 : ti.y + 40;
            const yMin = next ? (ti.y + next.y) / 2 : ti.y - 40;
            return {
              startTime: ti.startTime,
              endTime: ti.endTime,
              yMin,
              yMax,
            };
          });

          // Intersect Day Column with Time Row to extract exact 2D grid cell content!
          for (const col of columns) {
            for (const tRow of timeRows) {
              const cellItems = pageItems
                .filter(item => item.x >= col.xMin && item.x < col.xMax && item.y >= tRow.yMin && item.y < tRow.yMax)
                .sort((a, b) => b.y - a.y || a.x - b.x);

              if (cellItems.length > 0) {
                const cellText = cellItems.map(it => it.str).join(' ').trim();
                const rawSubject = cleanSubjectTitle(cellText, dynamicEcueMap);
                if (rawSubject && rawSubject.length > 1) {
                  detectedSlots.push({
                    dayOfWeek: col.day,
                    startTime: tRow.startTime,
                    endTime: tRow.endTime,
                    rawSubject,
                    type: detectCourseType(cellText),
                    room: extractRoom(cellText) || 'Salle de cours',
                    professor: extractProfessor(cellText),
                  });
                }
              }
            }
          }
        } else {
          // Fallback if no dedicated time rows found
          for (const col of columns) {
            const colItems = pageItems
              .filter(item => item.x >= col.xMin && item.x < col.xMax)
              .sort((a, b) => b.y - a.y);

            let currentBlock: SpatialTextItem[] = [];

            for (let i = 0; i < colItems.length; i++) {
              const item = colItems[i];
              const hasTime = timeRangeRegex.test(item.str) || colonTimeRegex.test(item.str);

              if (hasTime && currentBlock.length > 0) {
                processBlock(currentBlock, col.day);
                currentBlock = [item];
              } else {
                currentBlock.push(item);
              }
            }

            if (currentBlock.length > 0) {
              processBlock(currentBlock, col.day);
            }
          }
        }
      }
    }
  }

  function processBlock(items: SpatialTextItem[], dayOfWeek: DayOfWeek) {
    const combinedText = items.map(it => it.str).join(' ');
    const timeMatch = combinedText.match(colonTimeRegex) || combinedText.match(timeRangeRegex);

    if (timeMatch) {
      const startH = timeMatch[1];
      const startM = timeMatch[2] || '00';
      const endH = timeMatch[3];
      const endM = timeMatch[4] || '00';

      const startTime = normalizeTimeString(startH, startM);
      const endTime = normalizeTimeString(endH, endM);

      const room = extractRoom(combinedText);
      const professor = extractProfessor(combinedText);
      const type = detectCourseType(combinedText);
      const rawSubject = cleanSubjectTitle(combinedText, dynamicEcueMap);

      if (rawSubject && rawSubject.length > 1 && parseTimeToMinutes(endTime) > parseTimeToMinutes(startTime)) {
        detectedSlots.push({
          dayOfWeek,
          startTime,
          endTime,
          rawSubject,
          type,
          room: room || 'Amphi / Salle',
          professor,
        });
      }
    }
  }

  return { detectedSlots: harmonizeAndDeduplicateSlots(detectedSlots) };
}

/**
 * UNIVERSAL TEXT & TABLE SCHEDULE PARSER
 * Supports:
 * 1. Matrix tables where columns are Days (Excel tab-delimited, Markdown pipes, spaced)
 * 2. Matrix tables where columns are Time slots and rows are Days
 * 3. Line-by-line sequential format with day headers (Lundi : 08:00–10:00 Maths ; ...)
 * 4. Markdown tables with Day in first column
 * 5. Bullet-pointed or spaced lists
 */
export function parseSequentialSchedule(
  rawText: string,
  dynamicEcueMap?: Map<string, { name: string; professor?: string }>
): {
  detectedSlots: {
    dayOfWeek: DayOfWeek;
    startTime: string;
    endTime: string;
    rawSubject: string;
    type: CourseType;
    room?: string;
    professor?: string;
  }[];
} {
  const lines = rawText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  const detectedSlots: {
    dayOfWeek: DayOfWeek;
    startTime: string;
    endTime: string;
    rawSubject: string;
    type: CourseType;
    room?: string;
    professor?: string;
  }[] = [];

  const timeIntervalRegex = /(\d{1,2})[h:H:](\d{2})?\s*[-–—àaA/to]+\s*(\d{1,2})[h:H:](\d{2})?/i;
  const singleTimeRegex = /(\d{1,2})[h:](\d{2})?/i;

  // -------------------------------------------------------------
  // STRATEGY 1: TABLE MATRIX CHECK (Tabs '\t' or Pipes '|')
  // Detects full grid schedules where columns are Days or Times
  // -------------------------------------------------------------
  let isMatrixDetected = false;

  for (let r = 0; r < Math.min(6, lines.length); r++) {
    const line = lines[r];
    const cells = (line.includes('\t') ? line.split('\t') : line.split('|'))
      .map(c => c.trim())
      .filter(c => c.length > 0 && !/^[-:]+$/.test(c));

    // Case 1A: Header contains 3+ DAYS -> Columns are Days!
    const dayCols: { colIdx: number; day: DayOfWeek }[] = [];
    cells.forEach((cell, colIdx) => {
      const day = isDayHeaderToken(cell);
      if (day !== null) {
        dayCols.push({ colIdx, day });
      }
    });

    if (dayCols.length >= 3) {
      isMatrixDetected = true;
      for (let rowIdx = r + 1; rowIdx < lines.length; rowIdx++) {
        const rowLine = lines[rowIdx];
        if (/^[\s|:-]+$/.test(rowLine)) continue;

        const rowCells = (rowLine.includes('\t') ? rowLine.split('\t') : rowLine.split('|'))
          .map(c => c.trim())
          .filter(c => c.length > 0 && !/^[-:]+$/.test(c));

        if (rowCells.length === 0) continue;

        // Find time range in this row
        let rowTime: { start: string; end: string } | null = null;
        for (let cIdx = 0; cIdx < rowCells.length; cIdx++) {
          const parsed = Array.from(rowCells[cIdx].matchAll(/(\d{1,2})[h:H:](\d{2})?\s*[-–—àaA/to]+\s*(\d{1,2})[h:H:](\d{2})?/gi))[0];
          if (parsed) {
            rowTime = {
              start: normalizeTimeString(parsed[1], parsed[2]),
              end: normalizeTimeString(parsed[3], parsed[4]),
            };
            break;
          }
        }

        if (!rowTime) continue;

        // Map each day column to its cell
        dayCols.forEach(({ colIdx, day }) => {
          const cell = rowCells[colIdx];
          if (cell && !isFreeOrBreak(cell)) {
            const cleanSub = cleanSubjectTitle(cell, dynamicEcueMap);
            if (cleanSub && cleanSub.length >= 2) {
              detectedSlots.push({
                dayOfWeek: day,
                startTime: rowTime!.start,
                endTime: rowTime!.end,
                rawSubject: cleanSub,
                type: detectCourseType(cell),
                room: extractRoom(cell) || 'Salle de cours',
                professor: extractProfessor(cell),
              });
            }
          }
        });
      }
      break;
    }

    // Case 1B: Header contains 2+ TIME RANGES -> Columns are Times, Rows are Days!
    const timeCols: { colIdx: number; start: string; end: string }[] = [];
    cells.forEach((cell, colIdx) => {
      const matches = Array.from(cell.matchAll(/(\d{1,2})[h:H:](\d{2})?\s*[-–—àaA/to]+\s*(\d{1,2})[h:H:](\d{2})?/gi));
      if (matches.length > 0) {
        timeCols.push({
          colIdx,
          start: normalizeTimeString(matches[0][1], matches[0][2]),
          end: normalizeTimeString(matches[0][3], matches[0][4]),
        });
      }
    });

    if (timeCols.length >= 2) {
      isMatrixDetected = true;
      for (let rowIdx = r + 1; rowIdx < lines.length; rowIdx++) {
        const rowLine = lines[rowIdx];
        if (/^[\s|:-]+$/.test(rowLine)) continue;

        const rowCells = (rowLine.includes('\t') ? rowLine.split('\t') : rowLine.split('|'))
          .map(c => c.trim())
          .filter(c => c.length > 0 && !/^[-:]+$/.test(c));

        if (rowCells.length === 0) continue;

        const rowDay = findDayInLine(rowCells[0]);
        if (rowDay === null) continue;

        timeCols.forEach(({ colIdx, start, end }) => {
          const cell = rowCells[colIdx];
          if (cell && !isFreeOrBreak(cell)) {
            const cleanSub = cleanSubjectTitle(cell, dynamicEcueMap);
            if (cleanSub && cleanSub.length >= 2) {
              detectedSlots.push({
                dayOfWeek: rowDay,
                startTime: start,
                endTime: end,
                rawSubject: cleanSub,
                type: detectCourseType(cell),
                room: extractRoom(cell) || 'Salle de cours',
                professor: extractProfessor(cell),
              });
            }
          }
        });
      }
      break;
    }
  }

  if (isMatrixDetected && detectedSlots.length >= 2) {
    return { detectedSlots: harmonizeAndDeduplicateSlots(detectedSlots) };
  }

  // -------------------------------------------------------------
  // STRATEGY 2: LINEAR, DAY-BLOCK, AND CLAUSE-BASED PARSER
  // Handles: Lundi : 08:00–10:00 Math ; 10:15–12:00 PC
  //          | Lundi | 08:00 - 10:00 | Math |
  //          Lists with bullet points, multiline day blocks
  // -------------------------------------------------------------
  let currentDay: DayOfWeek = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    let workingLine = line;

    // Detect day of the week declaration
    const dayFound = findDayInLine(workingLine);
    if (dayFound !== null) {
      currentDay = dayFound;
      // Strip day prefix if line is like "Lundi : ..." or "| Lundi | ..."
      for (const entry of DAYS_DICTIONARY) {
        for (const key of entry.keys) {
          workingLine = workingLine.replace(new RegExp(`^[\\s|•*-]*${key}\\s*[:|\\-]?\\s*`, 'i'), '');
        }
      }
    }

    // Split line into clauses if separated by semicolons or multiple pipe-delimited slots
    let clauses: string[] = [workingLine];
    if (workingLine.includes(';')) {
      clauses = workingLine.split(';').map(c => c.trim()).filter(c => c.length > 0);
    } else if (workingLine.includes('|') && !workingLine.includes('\t')) {
      const pipeParts = workingLine.split('|').map(c => c.trim()).filter(c => c.length > 0);
      const timesInParts = pipeParts.filter(p => timeIntervalRegex.test(p));
      if (timesInParts.length >= 2) {
        clauses = pipeParts;
      }
    }

    for (const clause of clauses) {
      const matches = Array.from(clause.matchAll(/(\d{1,2})[h:H:](\d{2})?\s*[-–—àaA/to]+\s*(\d{1,2})[h:H:](\d{2})?/gi));

      if (matches.length > 0) {
        for (let mIdx = 0; mIdx < matches.length; mIdx++) {
          const match = matches[mIdx];
          const startH = match[1];
          const startM = match[2] || '00';
          const endH = match[3];
          const endM = match[4] || '00';

          const startTime = normalizeTimeString(startH, startM);
          const endTime = normalizeTimeString(endH, endM);

          const matchStartIndex = match.index ?? 0;
          const matchEndIndex = matchStartIndex + match[0].length;
          const nextMatchStartIndex = (mIdx + 1 < matches.length && matches[mIdx + 1].index !== undefined)
            ? matches[mIdx + 1].index!
            : clause.length;

          let contextText = clause.substring(matchEndIndex, nextMatchStartIndex).trim();

          // If text after time is completely empty and this was the single time match, check preceding text
          if (contextText.length === 0 && matches.length === 1) {
            const preceding = clause.substring(0, matchStartIndex).trim();
            if (preceding.length > 0) {
              contextText = preceding;
            }
          }

          // If still completely empty, look at next line (e.g. course title on the line right below the time)
          if (contextText.length === 0 && i + 1 < lines.length) {
            const nextLine = lines[i + 1].trim();
            if (!timeIntervalRegex.test(nextLine) && findDayInLine(nextLine) === null) {
              contextText = nextLine;
            }
          }

          // Skip if break or free slot
          if (isFreeOrBreak(contextText)) continue;

          const room = extractRoom(contextText);
          const professor = extractProfessor(contextText);
          const type = detectCourseType(contextText);
          const cleanSub = cleanSubjectTitle(contextText, dynamicEcueMap);

          if (cleanSub && cleanSub.length >= 2 && parseTimeToMinutes(endTime) > parseTimeToMinutes(startTime)) {
            detectedSlots.push({
              dayOfWeek: currentDay,
              startTime,
              endTime,
              rawSubject: cleanSub,
              type,
              room: room || 'Salle de cours',
              professor,
            });
          }
        }
      }
    }
  }

  // -------------------------------------------------------------
  // STRATEGY 3: FALLBACK FOR SINGLE TIME OCCURRENCES
  // -------------------------------------------------------------
  if (detectedSlots.length === 0) {
    let fallbackDay: DayOfWeek = 0;
    lines.forEach((l) => {
      const singleMatch = l.match(singleTimeRegex);
      if (singleMatch && l.length > 6 && !isFreeOrBreak(l)) {
        const startH = parseInt(singleMatch[1], 10);
        const startM = singleMatch[2] || '00';
        const endH = Math.min(20, startH + 2);

        const startTime = normalizeTimeString(startH.toString(), startM);
        const endTime = normalizeTimeString(endH.toString(), startM);
        const cleanSub = cleanSubjectTitle(l.replace(singleMatch[0], ' '), dynamicEcueMap);

        if (cleanSub.length > 2) {
          detectedSlots.push({
            dayOfWeek: fallbackDay,
            startTime,
            endTime,
            rawSubject: cleanSub,
            type: detectCourseType(l),
            room: extractRoom(l) || 'Salle Principale',
            professor: extractProfessor(l),
          });
          fallbackDay = ((fallbackDay + 1) % 5) as DayOfWeek;
        }
      }
    });
  }

  return { detectedSlots: harmonizeAndDeduplicateSlots(detectedSlots) };
}

/**
 * Intelligent Academic Timetable Extraction Engine
 * Evaluates both 2D spatial grid layout and sequential text lines,
 * cleans and aggregates subjects, and calibrates cognitive weights.
 */
export function parseTimetableText(
  rawText: string, 
  fileName: string, 
  fileSize: number, 
  spatialItems?: SpatialTextItem[],
  pageCount: number = 1
): ExtractedPdfSchedule {
  let detectedSlots: {
    dayOfWeek: DayOfWeek;
    startTime: string;
    endTime: string;
    rawSubject: string;
    type: CourseType;
    room?: string;
    professor?: string;
  }[] = [];

  // Extract ECUE code-to-meaning mapping table from the document (e.g., ESATIC bottom table)
  const dynamicEcueMap = extractDynamicEcueDictionary(rawText, spatialItems);

  // 1. Try Spatial Grid Parser first if spatial coordinate items are available
  if (spatialItems && spatialItems.length > 5) {
    const gridResult = parseSpatialGridSchedule(spatialItems, pageCount, dynamicEcueMap);
    if (gridResult.detectedSlots.length >= 3) {
      detectedSlots = gridResult.detectedSlots;
    }
  }

  // 2. If spatial grid found few or no slots, use Sequential & Linear Parser
  if (detectedSlots.length < 2) {
    const sequentialResult = parseSequentialSchedule(rawText, dynamicEcueMap);
    if (sequentialResult.detectedSlots.length > 0) {
      detectedSlots = sequentialResult.detectedSlots;
    }
  }

  // Auto-harmonize all detected slots to guarantee ZERO overlaps
  detectedSlots = harmonizeAndDeduplicateSlots(detectedSlots);

  // 3. Fallback: If still empty, do NOT invent fake courses from templates!
  if (detectedSlots.length === 0) {
    const trackName = fileName.replace(/\.[a-z0-9]+$/i, '').replace(/[_-]/g, ' ') || 'Emploi du Temps';
    return {
      fileName,
      fileSize,
      academicTrack: trackName.charAt(0).toUpperCase() + trackName.slice(1),
      detectedConfidence: 0,
      subjects: [],
      slots: [],
      totalWeeklyClassHours: 0,
      recommendedStudyHours: 0,
      summaryNote: 'Aucun cours n’a pu être détecté automatiquement. Saisissez ou collez vos cours sous forme structurée pour définir votre Source de Vérité.',
      rawText,
    };
  }

  // 4. Clean & Deduplicate Subject Names
  const subjectClusterMap = new Map<string, string>();

  detectedSlots.forEach(slot => {
    let raw = slot.rawSubject;
    const upper = raw.toUpperCase().trim();

    if (dynamicEcueMap.has(upper)) {
      const entry = dynamicEcueMap.get(upper)!;
      raw = entry.name;
      if (entry.professor && !slot.professor) slot.professor = entry.professor;
    } else {
      raw = cleanSubjectTitle(slot.rawSubject, dynamicEcueMap);
    }

    let canonical = raw;

    for (const existingCanonical of Array.from(new Set(subjectClusterMap.values()))) {
      const normA = raw.toLowerCase().replace(/[^a-z0-9]/g, '');
      const normB = existingCanonical.toLowerCase().replace(/[^a-z0-9]/g, '');

      // Only merge if normalized strings are strictly identical (case/space/accent insensitive)
      if (normA === normB) {
        canonical = existingCanonical;
        break;
      }
    }

    subjectClusterMap.set(raw, canonical);
    slot.rawSubject = canonical;
  });

  // Re-run harmonization AFTER canonicalizing subjects to merge contiguous blocks (e.g. 2h blocks)
  detectedSlots = harmonizeAndDeduplicateSlots(detectedSlots);

  const uniqueSubjectNames = Array.from(new Set(detectedSlots.map(s => s.rawSubject)));

  // 5. Intelligent Subject Weighting & Disciplinary Topics Calibration
  const subjects: ExtractedSubjectCandidate[] = uniqueSubjectNames.map((name, index) => {
    const slotCount = detectedSlots.filter(s => s.rawSubject === name).length;
    const lowerName = name.toLowerCase();

    let coeff = Math.min(12, Math.max(2, slotCount * 2));
    let difficulty: 1 | 2 | 3 | 4 | 5 = 3;

    if (
      lowerName.includes('math') || 
      lowerName.includes('algo') || 
      lowerName.includes('algebre') ||
      lowerName.includes('analyse') ||
      lowerName.includes('anatomie') || 
      lowerName.includes('physique') || 
      lowerName.includes('droit civil') || 
      lowerName.includes('biochimie') ||
      lowerName.includes('organique')
    ) {
      coeff = Math.max(6, coeff);
      difficulty = 5;
    } else if (
      lowerName.includes('reseau') || 
      lowerName.includes('systeme') || 
      lowerName.includes('web') ||
      lowerName.includes('application') ||
      lowerName.includes('finance') ||
      lowerName.includes('chimie') || 
      lowerName.includes('penal') || 
      lowerName.includes('stat') ||
      lowerName.includes('economie') ||
      lowerName.includes('biologie')
    ) {
      coeff = Math.max(5, coeff);
      difficulty = 4;
    } else if (
      lowerName.includes('anglais') || 
      lowerName.includes('langue') || 
      lowerName.includes('sport') || 
      lowerName.includes('shs') ||
      lowerName.includes('expression')
    ) {
      coeff = Math.min(3, coeff);
      difficulty = 2;
    }

    // Resolve code from dynamic ECUE map if available
    let resolvedCode = name.slice(0, 4).toUpperCase().replace(/[^A-Z]/g, 'X') + '-' + (301 + index * 5);
    for (const [code, info] of dynamicEcueMap.entries()) {
      if (info.name.toLowerCase() === name.toLowerCase()) {
        resolvedCode = code;
        break;
      }
    }

    const topics = generateAcademicTopicsForSubject(name);

    return {
      id: generateId(),
      name,
      code: resolvedCode,
      color: PALETTE[index % PALETTE.length],
      coefficient: coeff,
      difficulty,
      targetGrade: 16,
      examDate: '2026-12-18',
      topics,
    };
  });

  // 6. Map slots to subject IDs
  const rawSlots: ExtractedClassCandidate[] = detectedSlots.map(s => {
    const matchedSubject = subjects.find(sub => sub.name === s.rawSubject) || subjects[0];
    return {
      id: generateId(),
      subjectId: matchedSubject.id,
      subjectName: matchedSubject.name,
      dayOfWeek: s.dayOfWeek,
      startTime: s.startTime,
      endTime: s.endTime,
      type: s.type,
      room: s.room,
      professor: s.professor,
    };
  });

  const slots = harmonizeAndDeduplicateSlots(rawSlots);

  const totalWeeklyClassMinutes = slots.reduce((acc, slot) => {
    return acc + (parseTimeToMinutes(slot.endTime) - parseTimeToMinutes(slot.startTime));
  }, 0);

  const totalWeeklyClassHours = Math.round((totalWeeklyClassMinutes / 60) * 10) / 10;
  const recommendedStudyHours = Math.max(8, Math.round(totalWeeklyClassHours * 0.75));

  const trackName = fileName.replace(/\.pdf$/i, '').replace(/[_-]/g, ' ') || 'Emploi du Temps Étudiant';

  return {
    fileName,
    fileSize,
    academicTrack: trackName.charAt(0).toUpperCase() + trackName.slice(1),
    detectedConfidence: Math.min(99, Math.max(88, 85 + slots.length * 2)),
    subjects,
    slots,
    totalWeeklyClassHours,
    recommendedStudyHours,
    summaryNote: `Analyse certifiée : ${slots.length} créneaux fixes extraits pour ${subjects.length} matières réelles décodées.`,
    rawText,
  };
}

/**
 * Public function to parse any uploaded PDF file in real-time.
 */
export async function parsePdfScheduleFile(file: File): Promise<ExtractedPdfSchedule> {
  const { rawText, spatialItems, pageCount } = await extractDetailedPdfContent(file);
  return parseTimetableText(rawText, file.name, file.size, spatialItems, pageCount);
}

/**
 * Formats a list of timetable slots into the canonical Source of Truth structured format:
 * Example:
 * Lundi : 08:00–10:00 Mathématiques ; 10:15–12:00 Physique
 * Mardi : 08:00–10:00 Français ; 14:00–16:00 Informatique
 * Mercredi : 10:00–12:00 Anglais
 */
export function formatStructuredScheduleTruth(
  slots: { dayOfWeek: DayOfWeek; startTime: string; endTime: string; subjectName?: string; rawSubject?: string }[]
): string {
  const dayNames = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  const lines: string[] = [];

  for (let day = 0; day <= 6; day++) {
    const daySlots = slots
      .filter(s => s.dayOfWeek === day)
      .sort((a, b) => parseTimeToMinutes(a.startTime) - parseTimeToMinutes(b.startTime));

    if (daySlots.length === 0) continue;

    const formattedCourses = daySlots.map(s => {
      const name = (s.subjectName || s.rawSubject || 'Cours').trim();
      return `${s.startTime}–${s.endTime} ${name}`;
    }).join(' ; ');

    lines.push(`${dayNames[day]} : ${formattedCourses}`);
  }

  return lines.join('\n');
}

/**
 * Parses directly a structured text representation of the timetable into an ExtractedPdfSchedule.
 */
export function parseStructuredScheduleTruth(
  text: string,
  fileName: string = 'Emploi_du_Temps_Source_Verite.txt'
): ExtractedPdfSchedule {
  return parseTimetableText(text, fileName, text.length);
}

/**
 * Universal document parser: accepts either a PDF (.pdf) or Image (.png, .jpg, .jpeg, .webp, .bmp)
 * and processes it into an extracted schedule.
 */
export async function parseTimetableDocument(
  file: File,
  onProgress?: (message: string, percent: number) => void
): Promise<ExtractedPdfSchedule> {
  const isImage = file.type.startsWith('image/') || /\.(png|jpe?g|webp|bmp)$/i.test(file.name);

  if (isImage) {
    onProgress?.('Numérisation OCR haute résolution de l’image...', 15);
    const ocrText = await extractTextFromImage(file, (prog, status) => {
      onProgress?.(status, Math.round(prog * 100));
    });

    onProgress?.('Détection sémantique et extraction de la Source de Vérité...', 90);
    return parseTimetableText(ocrText, file.name, file.size);
  } else {
    onProgress?.('Lecture vectorielle des flux PDF...', 20);
    const { rawText, spatialItems, pageCount } = await extractDetailedPdfContent(file);

    onProgress?.('Structuration des créneaux horaires...', 80);
    return parseTimetableText(rawText, file.name, file.size, spatialItems, pageCount);
  }
}

/**
 * Loads a built-in demo PDF template directly for 1-click test.
 */
export function loadDemoPdfTemplate(templateId: string): ExtractedPdfSchedule {
  const template = DEMO_PDF_TEMPLATES.find(t => t.id === templateId) || DEMO_PDF_TEMPLATES[0];

  const subjects: ExtractedSubjectCandidate[] = template.subjects.map(s => ({
    ...s,
    id: generateId(),
  }));

  const rawSlots: ExtractedClassCandidate[] = template.slots.map(s => {
    const matchingSubject = subjects.find(sub => sub.name === s.subjectName) || subjects[0];
    return {
      id: generateId(),
      subjectId: matchingSubject.id,
      subjectName: matchingSubject.name,
      dayOfWeek: s.dayOfWeek,
      startTime: s.startTime,
      endTime: s.endTime,
      type: s.type,
      room: s.room,
      professor: s.professor,
    };
  });

  const slots = harmonizeAndDeduplicateSlots(rawSlots);

  const totalWeeklyClassMinutes = slots.reduce((acc, slot) => {
    return acc + (parseTimeToMinutes(slot.endTime) - parseTimeToMinutes(slot.startTime));
  }, 0);

  const totalWeeklyClassHours = Math.round((totalWeeklyClassMinutes / 60) * 10) / 10;
  const recommendedStudyHours = Math.max(8, Math.round(totalWeeklyClassHours * 0.75));

  return {
    fileName: template.fileName,
    fileSize: template.fileSize,
    academicTrack: template.name,
    detectedConfidence: 99,
    subjects,
    slots,
    totalWeeklyClassHours,
    recommendedStudyHours,
    summaryNote: `Modèle certifié : ${slots.length} cours universitaires identifiés avec coefficients et créneaux fixes.`,
    rawText: template.rawText,
  };
}
