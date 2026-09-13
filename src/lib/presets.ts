import type { Subject, StudyPreferences } from '../types';

export interface AcademicPreset {
  id: string;
  name: string;
  icon: string;
  description: string;
  level: string;
  subjects: Omit<Subject, 'id'>[];
  defaultClasses: Array<{
    subjectIndex: number;
    dayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    startTime: string;
    endTime: string;
    type: 'lecture' | 'tutorial' | 'lab';
    room: string;
  }>;
}

export const ACADEMIC_PRESETS: AcademicPreset[] = [
  {
    id: 'cs-engineering',
    name: 'Informatique & Ingénierie (L3/M1)',
    icon: 'Terminal',
    description: 'Algorithmique, Bases de données, Architecture réseau, Mathématiques discrètes',
    level: 'Licence 3 Informatique & Ingénierie Logicielle',
    subjects: [
      {
        name: 'Algorithmique & Structures de Données',
        code: 'INFO-301',
        color: '#6366F1',
        coefficient: 6,
        difficulty: 4,
        targetGrade: 16,
        examDate: '2026-10-22',
        topics: ['Arbres AVL & Graphes', 'Complexité asymptotique', 'Programmation dynamique', 'Backtracking'],
      },
      {
        name: 'Systèmes Distribués & Réseaux',
        code: 'INFO-302',
        color: '#06B6D4',
        coefficient: 5,
        difficulty: 3,
        targetGrade: 15,
        examDate: '2026-10-28',
        topics: ['Protocole TCP/IP & Socket', 'Consensus Raft', 'Architecture Microservices'],
      },
      {
        name: 'Bases de Données Avancées (SQL/NoSQL)',
        code: 'INFO-303',
        color: '#10B981',
        coefficient: 4,
        difficulty: 3,
        targetGrade: 17,
        examDate: '2026-11-05',
        topics: ['Indexation B-Tree', 'Transactions ACID', 'Normalisation 3NF & BCNF', 'Agrégations MongoDB'],
      },
      {
        name: 'Mathématiques Discrètes & Probabilités',
        code: 'MATH-204',
        color: '#F59E0B',
        coefficient: 5,
        difficulty: 5,
        targetGrade: 14,
        examDate: '2026-10-18',
        topics: ['Chaînes de Markov', 'Théorie des Graphes', 'Combinatoire', 'Lois continues'],
      },
      {
        name: 'Anglais Professionnel & Tech',
        code: 'LANG-101',
        color: '#EC4899',
        coefficient: 2,
        difficulty: 2,
        targetGrade: 18,
        examDate: '2026-11-12',
        topics: ['Pitch technique', 'Vocabulaire Tech & AI', 'Rédaction de documentation'],
      },
    ],
    defaultClasses: [
      { subjectIndex: 0, dayOfWeek: 0, startTime: '08:30', endTime: '10:30', type: 'lecture', room: 'Amphi Turing' },
      { subjectIndex: 0, dayOfWeek: 0, startTime: '10:45', endTime: '12:45', type: 'tutorial', room: 'Salle B204' },
      { subjectIndex: 3, dayOfWeek: 1, startTime: '09:00', endTime: '11:00', type: 'lecture', room: 'Amphi Gauss' },
      { subjectIndex: 1, dayOfWeek: 1, startTime: '14:00', endTime: '16:00', type: 'lecture', room: 'Amphi Ada' },
      { subjectIndex: 1, dayOfWeek: 1, startTime: '16:15', endTime: '18:15', type: 'lab', room: 'Lab Réseaux 3' },
      { subjectIndex: 2, dayOfWeek: 2, startTime: '10:00', endTime: '12:00', type: 'lecture', room: 'Amphi Codd' },
      { subjectIndex: 3, dayOfWeek: 3, startTime: '08:30', endTime: '10:30', type: 'tutorial', room: 'Salle M102' },
      { subjectIndex: 2, dayOfWeek: 3, startTime: '14:00', endTime: '17:00', type: 'lab', room: 'Lab Data 1' },
      { subjectIndex: 4, dayOfWeek: 4, startTime: '10:00', endTime: '12:00', type: 'tutorial', room: 'Salle Langues 4' },
    ],
  },
  {
    id: 'law-droit',
    name: 'Droit & Sciences Juridiques (L2/L3)',
    icon: 'Scale',
    description: 'Droit des obligations, Droit administratif, Libertés fondamentales, Droit pénal',
    level: 'Licence 2 Droit Général',
    subjects: [
      {
        name: 'Droit des Obligations & Contrats',
        code: 'DROIT-201',
        color: '#8B5CF6',
        coefficient: 6,
        difficulty: 5,
        targetGrade: 15,
        examDate: '2026-10-25',
        topics: ['Formation du contrat & consentement', 'Nullités et clauses abusives', 'Responsabilité délictuelle'],
      },
      {
        name: 'Droit Administratif Général',
        code: 'DROIT-202',
        color: '#3B82F6',
        coefficient: 5,
        difficulty: 4,
        targetGrade: 14,
        examDate: '2026-10-30',
        topics: ['Service public & police administrative', 'Actes administratifs unilatéraux', 'Recours pour excès de pouvoir'],
      },
      {
        name: 'Droit Pénal Général',
        code: 'DROIT-203',
        color: '#EF4444',
        coefficient: 4,
        difficulty: 3,
        targetGrade: 16,
        examDate: '2026-11-08',
        topics: ['Élément moral et matériel de linfraction', 'Causes dirresponsabilité', 'Régime des peines'],
      },
      {
        name: 'Histoire du Droit & des Institutions',
        code: 'HIST-102',
        color: '#D97706',
        coefficient: 3,
        difficulty: 3,
        targetGrade: 15,
        examDate: '2026-11-15',
        topics: ['Ancien Régime et coutumes', 'Codification napoléonienne', 'Évolution des droits fondamentaux'],
      },
    ],
    defaultClasses: [
      { subjectIndex: 0, dayOfWeek: 0, startTime: '09:00', endTime: '12:00', type: 'lecture', room: 'Grand Amphi Portalis' },
      { subjectIndex: 1, dayOfWeek: 1, startTime: '10:00', endTime: '12:00', type: 'lecture', room: 'Amphi Vedel' },
      { subjectIndex: 0, dayOfWeek: 1, startTime: '14:00', endTime: '16:00', type: 'tutorial', room: 'Salle TD 12' },
      { subjectIndex: 2, dayOfWeek: 2, startTime: '09:00', endTime: '11:00', type: 'lecture', room: 'Amphi Carbonnier' },
      { subjectIndex: 1, dayOfWeek: 3, startTime: '14:00', endTime: '16:00', type: 'tutorial', room: 'Salle TD 08' },
      { subjectIndex: 3, dayOfWeek: 4, startTime: '10:00', endTime: '12:00', type: 'lecture', room: 'Amphi Carré de Malberg' },
    ],
  },
  {
    id: 'medicine-health',
    name: 'Santé & Médecine (PASS/LAS/DFGSM)',
    icon: 'Stethoscope',
    description: 'Anatomie, Biochimie, Physiologie humaine, Pharmacologie, Santé publique',
    level: 'PASS / DFGSM2 Santé',
    subjects: [
      {
        name: 'Anatomie Générale & Topographique',
        code: 'ANAT-101',
        color: '#EC4899',
        coefficient: 7,
        difficulty: 5,
        targetGrade: 16,
        examDate: '2026-10-16',
        topics: ['Ostéologie du membre supérieur', 'Système cardiovasculaire & coeur', 'Neuroanatomie centrale'],
      },
      {
        name: 'Biochimie & Biologie Moléculaire',
        code: 'BIO-102',
        color: '#10B981',
        coefficient: 6,
        difficulty: 4,
        targetGrade: 15,
        examDate: '2026-10-24',
        topics: ['Cycle de Krebs & chaîne respiratoire', 'Structure des protéines & enzymes', 'Métabolisme lipidique'],
      },
      {
        name: 'Physiologie Cardiorespiratoire',
        code: 'PHYS-201',
        color: '#06B6D4',
        coefficient: 6,
        difficulty: 4,
        targetGrade: 16,
        examDate: '2026-11-02',
        topics: ['Hémodynamique et pression artérielle', 'Échanges gazeux alvéolo-capillaires', 'Régulation rénale'],
      },
      {
        name: 'Pharmacologie & Cibles Médicamenteuses',
        code: 'PHARM-202',
        color: '#8B5CF6',
        coefficient: 5,
        difficulty: 4,
        targetGrade: 15,
        examDate: '2026-11-10',
        topics: ['Pharmacocinétique (ADME)', 'Récepteurs membranaires & agonistes', 'Interactions médicamenteuses'],
      },
    ],
    defaultClasses: [
      { subjectIndex: 0, dayOfWeek: 0, startTime: '08:00', endTime: '10:00', type: 'lecture', room: 'Amphi Pasteur' },
      { subjectIndex: 1, dayOfWeek: 0, startTime: '10:15', endTime: '12:15', type: 'lecture', room: 'Amphi Claude Bernard' },
      { subjectIndex: 2, dayOfWeek: 1, startTime: '08:30', endTime: '11:30', type: 'lecture', room: 'Amphi Bichat' },
      { subjectIndex: 0, dayOfWeek: 2, startTime: '14:00', endTime: '17:00', type: 'lab', room: 'Salle Dissection & Modèles' },
      { subjectIndex: 3, dayOfWeek: 3, startTime: '09:00', endTime: '12:00', type: 'lecture', room: 'Amphi Laennec' },
      { subjectIndex: 1, dayOfWeek: 4, startTime: '14:00', endTime: '16:00', type: 'tutorial', room: 'Salle TD Méd 3' },
    ],
  },
];

export const DEFAULT_PREFERENCES: StudyPreferences = {
  studentName: 'Alexandre',
  academicLevel: 'Licence 3 Informatique & Ingénierie Logicielle',
  targetDailyStudyMinutes: 150, // 2h30 per day
  chronotype: 'evening',
  pacing: 'active_recall_spaced',
  focusBlockDuration: 45,
  breakBlockDuration: 15,
  weekendStudyEnabled: true,
  maxSessionsPerDay: 4,
  blockedSlots: [
    { id: 'block-1', label: 'Déjeuner & Pause', dayOfWeek: 0, startTime: '12:45', endTime: '14:00' },
    { id: 'block-2', label: 'Déjeuner & Pause', dayOfWeek: 1, startTime: '12:30', endTime: '14:00' },
    { id: 'block-3', label: 'Déjeuner & Pause', dayOfWeek: 2, startTime: '12:00', endTime: '13:30' },
    { id: 'block-4', label: 'Déjeuner & Pause', dayOfWeek: 3, startTime: '12:00', endTime: '13:30' },
    { id: 'block-5', label: 'Déjeuner & Pause', dayOfWeek: 4, startTime: '12:00', endTime: '13:30' },
    { id: 'block-sport', label: 'Séance de Sport / Détente', dayOfWeek: 2, startTime: '18:30', endTime: '20:00' },
  ],
};
