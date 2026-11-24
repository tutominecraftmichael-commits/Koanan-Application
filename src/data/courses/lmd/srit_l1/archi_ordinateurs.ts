/**
 * SRIT Licence 1 — Architecture des ordinateurs (1INF3100, Semestre 1).
 * Rédigé à partir des cours et de la fiche de TD du dossier SRIT (technologie des ordinateurs, représentation de
 * l’information, algèbre de Boole, circuits combinatoires, mémoires et bus, processeur et pipeline).
 * Format v2 : mini-leçons de 6 étapes, questions autonomes.
 */
import type { CurriculumChapter, CurriculumPoint, InteractiveExercise, StepKind, StructuredLessonStep } from '../../../../lib/curriculum/types';

const r = String.raw;
const THEME: Record<StepKind, string> = { definition: 'blue', propriete: 'violet', methode: 'green', piege: 'orange', exemple: 'slate' };
const SOURCE = 'Programme LMD — Licence 1 SRIT (1INF3100 : Architecture des ordinateurs)';

const qcm = (id: string, prompt: string, options: string[], correctAnswerIndex: number, explanation: string, hint: string): InteractiveExercise => ({
  id, type: 'mcq', prompt, options, correctAnswerIndex, explanation, hint,
});
const step = (
  stepNumber: number, stepKind: StepKind, stepBadge: string, stepTitle: string, paragraphText: string,
  exercise: InteractiveExercise, extra: Partial<StructuredLessonStep> = {},
): StructuredLessonStep => ({ stepNumber, stepKind, stepBadge, stepTheme: THEME[stepKind], stepTitle, paragraphText, ...extra, exercise });
const makePoint = (p: Omit<CurriculumPoint, 'exercises'> & { structuredSteps: StructuredLessonStep[] }): CurriculumPoint => ({
  ...p,
  exercises: p.structuredSteps.map((s) => s.exercise),
});

// ---------------------------------------------------------------------------
// Schémas (SVG sur feuille claire)
// ---------------------------------------------------------------------------
const SVG_VON_NEUMANN = r`<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto" font-family="sans-serif">
  <rect x="10" y="15" width="140" height="105" rx="8" fill="#eef2ff" stroke="#4338ca" stroke-width="2"/>
  <text x="80" y="33" font-size="12" font-weight="bold" fill="#4338ca" text-anchor="middle">Processeur (CPU)</text>
  <rect x="20" y="42" width="120" height="30" rx="5" fill="#fff" stroke="#4338ca"/><text x="80" y="61" font-size="11" fill="#1e293b" text-anchor="middle">UC (RI, CO)</text>
  <rect x="20" y="80" width="120" height="30" rx="5" fill="#fff" stroke="#4338ca"/><text x="80" y="99" font-size="11" fill="#1e293b" text-anchor="middle">UAL + registres</text>
  <rect x="165" y="15" width="110" height="105" rx="8" fill="#ecfdf5" stroke="#0f766e" stroke-width="2"/>
  <text x="220" y="40" font-size="12" font-weight="bold" fill="#0f766e" text-anchor="middle">Mémoire</text><text x="220" y="56" font-size="12" font-weight="bold" fill="#0f766e" text-anchor="middle">centrale</text>
  <text x="220" y="82" font-size="10" fill="#1e293b" text-anchor="middle">programme</text><text x="220" y="96" font-size="10" fill="#1e293b" text-anchor="middle">+ données</text>
  <rect x="290" y="15" width="100" height="105" rx="8" fill="#fff7ed" stroke="#b45309" stroke-width="2"/>
  <text x="340" y="45" font-size="12" font-weight="bold" fill="#b45309" text-anchor="middle">Entrées /</text><text x="340" y="61" font-size="12" font-weight="bold" fill="#b45309" text-anchor="middle">Sorties</text>
  <text x="340" y="88" font-size="10" fill="#1e293b" text-anchor="middle">clavier, écran,</text><text x="340" y="101" font-size="10" fill="#1e293b" text-anchor="middle">disque…</text>
  <rect x="10" y="148" width="380" height="18" rx="4" fill="#cbd5e1"/>
  <text x="200" y="161" font-size="11" font-weight="bold" fill="#1e293b" text-anchor="middle">Bus : données, adresses, commande</text>
  <g stroke="#475569" stroke-width="3"><line x1="80" y1="120" x2="80" y2="148"/><line x1="220" y1="120" x2="220" y2="148"/><line x1="340" y1="120" x2="340" y2="148"/></g>
  <text x="200" y="190" font-size="11" fill="#1e293b" text-anchor="middle">Une seule mémoire pour le programme et les données</text>
</svg>`;

const SVG_PORTES = r`<svg viewBox="0 0 420 125" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto" font-family="sans-serif">
  <g stroke="#1e293b" stroke-width="2" fill="#eef2ff">
    <line x1="15" y1="40" x2="35" y2="40"/><line x1="15" y1="70" x2="35" y2="70"/><path d="M35,30 L55,30 A25,25 0 0,1 55,80 L35,80 Z"/><line x1="80" y1="55" x2="95" y2="55"/>
    <line x1="113" y1="40" x2="135" y2="40"/><line x1="113" y1="70" x2="135" y2="70"/><path d="M130,30 Q150,30 165,30 Q190,40 195,55 Q190,70 165,80 Q150,80 130,80 Q142,55 130,30 Z"/><line x1="195" y1="55" x2="210" y2="55"/>
    <line x1="225" y1="55" x2="240" y2="55"/><polygon points="240,35 240,75 274,55"/><circle cx="279" cy="55" r="5" fill="#fff"/><line x1="284" y1="55" x2="298" y2="55"/>
    <line x1="312" y1="40" x2="335" y2="40"/><line x1="312" y1="70" x2="335" y2="70"/><path d="M330,30 Q350,30 365,30 Q390,40 395,55 Q390,70 365,80 Q350,80 330,80 Q342,55 330,30 Z"/><path d="M322,30 Q334,55 322,80" fill="none"/><line x1="395" y1="55" x2="410" y2="55"/>
  </g>
  <g font-size="11" font-weight="bold" fill="#1e293b" text-anchor="middle"><text x="55" y="105">ET : A·B</text><text x="162" y="105">OU : A+B</text><text x="262" y="105">NON : Ā</text><text x="362" y="105">OU exclusif : A⊕B</text></g>
</svg>`;

const SVG_KARNAUGH = r`<svg viewBox="0 0 400 175" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto" font-family="sans-serif">
  <g font-size="12" font-weight="bold" fill="#4338ca" text-anchor="middle"><text x="110" y="42">00</text><text x="170" y="42">01</text><text x="230" y="42">11</text><text x="290" y="42">10</text></g>
  <text x="200" y="22" font-size="12" font-weight="bold" fill="#4338ca" text-anchor="middle">AB</text>
  <g font-size="12" font-weight="bold" fill="#b45309" text-anchor="middle"><text x="36" y="75">C = 0</text><text x="36" y="115">C = 1</text></g>
  <g stroke="#475569" stroke-width="1.5" fill="#fff"><rect x="80" y="50" width="240" height="80"/><line x1="140" y1="50" x2="140" y2="130"/><line x1="200" y1="50" x2="200" y2="130"/><line x1="260" y1="50" x2="260" y2="130"/><line x1="80" y1="90" x2="320" y2="90"/></g>
  <g font-size="15" fill="#1e293b" text-anchor="middle"><text x="110" y="76" font-weight="bold">1</text><text x="170" y="76">0</text><text x="230" y="76">0</text><text x="290" y="76" font-weight="bold">1</text><text x="110" y="116">0</text><text x="170" y="116">0</text><text x="230" y="116">0</text><text x="290" y="116">0</text></g>
  <path d="M136,55 L92,55 Q68,55 68,70 Q68,85 92,85 L136,85" fill="none" stroke="#dc2626" stroke-width="2.2" stroke-dasharray="5 3"/>
  <path d="M264,55 L308,55 Q332,55 332,70 Q332,85 308,85 L264,85" fill="none" stroke="#dc2626" stroke-width="2.2" stroke-dasharray="5 3"/>
  <text x="200" y="152" font-size="11" fill="#dc2626" text-anchor="middle">Les colonnes 00 et 10 sont voisines (le tableau se referme sur lui-même)</text>
  <text x="200" y="168" font-size="11" fill="#1e293b" text-anchor="middle">Un seul groupe de deux cases : F = B̄·C̄</text>
</svg>`;

const SVG_DEMI_ADD = r`<svg viewBox="0 0 400 175" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto" font-family="sans-serif">
  <g stroke="#1e293b" stroke-width="2" fill="none">
    <line x1="30" y1="38" x2="158" y2="38"/><line x1="80" y1="38" x2="80" y2="118"/><line x1="80" y1="118" x2="150" y2="118"/>
    <line x1="30" y1="142" x2="150" y2="142"/><line x1="110" y1="142" x2="110" y2="62"/><line x1="110" y1="62" x2="158" y2="62"/>
    <line x1="215" y1="50" x2="300" y2="50"/><line x1="200" y1="130" x2="300" y2="130"/>
  </g>
  <g stroke="#1e293b" stroke-width="2" fill="#eef2ff">
    <path d="M155,25 Q175,25 185,25 Q210,35 215,50 Q210,65 185,75 Q175,75 155,75 Q167,50 155,25 Z"/><path d="M147,25 Q159,50 147,75" fill="none"/>
    <path d="M150,105 L175,105 A25,25 0 0,1 175,155 L150,155 Z"/>
  </g>
  <circle cx="80" cy="38" r="3.5" fill="#1e293b"/><circle cx="110" cy="142" r="3.5" fill="#1e293b"/>
  <g font-size="13" font-weight="bold"><text x="12" y="43" fill="#1d4ed8">A</text><text x="12" y="147" fill="#1d4ed8">B</text><text x="306" y="55" fill="#dc2626">S = A ⊕ B</text><text x="306" y="135" fill="#dc2626">R = A·B</text></g>
  <text x="200" y="170" font-size="11" fill="#1e293b" text-anchor="middle">Demi-additionneur : somme S (porte OU exclusif) et retenue R (porte ET)</text>
</svg>`;

const SVG_HIERARCHIE = r`<svg viewBox="0 0 400 205" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto" font-family="sans-serif">
  <polygon points="200,15 235,55 165,55" fill="#fecaca" stroke="#1e293b" stroke-width="1.5"/>
  <polygon points="165,55 235,55 270,95 130,95" fill="#fed7aa" stroke="#1e293b" stroke-width="1.5"/>
  <polygon points="130,95 270,95 305,135 95,135" fill="#bbf7d0" stroke="#1e293b" stroke-width="1.5"/>
  <polygon points="95,135 305,135 340,175 60,175" fill="#bfdbfe" stroke="#1e293b" stroke-width="1.5"/>
  <g font-size="11" font-weight="bold" fill="#1e293b" text-anchor="middle"><text x="200" y="51" font-size="9.5">Registres</text><text x="200" y="80">Mémoire cache</text><text x="200" y="120">Mémoire centrale (RAM)</text><text x="200" y="160">Disque dur / SSD</text></g>
  <text x="285" y="28" font-size="11" fill="#dc2626">▲ plus rapide,</text><text x="285" y="42" font-size="11" fill="#dc2626">plus cher par octet</text>
  <text x="200" y="197" font-size="11" fill="#1d4ed8" text-anchor="middle">▼ plus grande capacité, moins cher par octet</text>
</svg>`;

const PIPE_FILL: Record<string, string> = { IF: '#dbeafe', ID: '#ede9fe', EX: '#dcfce7', MEM: '#ffedd5', WB: '#e2e8f0' };
const PIPE_CELLS = [0, 1, 2].map((i) => ['IF', 'ID', 'EX', 'MEM', 'WB'].map((st, k) => {
  const x = 52 + (i + k) * 46;
  const y = 34 + i * 32;
  return `<rect x="${x}" y="${y}" width="42" height="26" rx="4" fill="${PIPE_FILL[st]}" stroke="#475569"/><text x="${x + 21}" y="${y + 17}" font-size="10" font-weight="bold" fill="#1e293b" text-anchor="middle">${st}</text>`;
}).join('')).join('');
const SVG_PIPELINE = `<svg viewBox="0 0 400 165" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto" font-family="sans-serif">
  <text x="8" y="24" font-size="11" fill="#475569">cycle</text>
  ${[1, 2, 3, 4, 5, 6, 7].map((c) => `<text x="${52 + (c - 1) * 46 + 21}" y="24" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle">${c}</text>`).join('')}
  <g font-size="11" font-weight="bold" fill="#4338ca"><text x="12" y="51">I1</text><text x="12" y="83">I2</text><text x="12" y="115">I3</text></g>
  ${PIPE_CELLS}
  <text x="200" y="148" font-size="11" fill="#1e293b" text-anchor="middle">3 instructions, 5 étages : 7 cycles avec pipeline au lieu de 15 sans</text>
  <text x="200" y="162" font-size="10" fill="#475569" text-anchor="middle">IF lecture · ID décodage · EX exécution · MEM mémoire · WB écriture du résultat</text>
</svg>`;

export const ARCHI_ORDINATEURS_SRIT_L1_CHAPTERS: CurriculumChapter[] = [
  // ==========================================================================
  // CHAPITRE 1 : INTRODUCTION À LA TECHNOLOGIE DES ORDINATEURS
  // ==========================================================================
  {
    id: 'lmd_srit_l1_archi_ch1',
    subjectId: 'lmd_archi_ordinateurs',
    gradeLevel: 'lmd_srit_l1',
    semesters: [1],
    order: 1,
    officialVolumeHours: 6,
    contentVersion: 2,
    source: SOURCE,
    title: 'Introduction à la technologie des ordinateurs',
    summary: 'Architecture de von Neumann, processeur (unité de commande, UAL, registres), mémoire centrale, bus et cycle d’exécution d’une instruction.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_archi_ch1_p1',
        order: 1,
        title: 'L’architecture de von Neumann',
        summary: 'Les blocs d’un ordinateur, rôle de l’unité de commande et de l’UAL, registres RI et CO, mémoire centrale, bus, cycle d’instruction.',
        conceptExplanation: r`Presque tous les ordinateurs suivent l’**architecture de von Neumann** : un **processeur** (unité de commande + unité arithmétique et logique), une **mémoire centrale** qui contient à la fois le **programme** et les **données**, des **entrées/sorties**, le tout relié par des **bus**. Le processeur exécute les instructions une par une : il les **cherche** en mémoire, les **décode**, puis les **exécute**.`,
        formulas: [
          { name: 'Cases adressables', formula: r`\text{bus d’adresses de } n \text{ fils} \Rightarrow 2^{n} \text{ adresses}` },
          { name: 'Unités', formula: r`1\text{ octet} = 8\text{ bits} \quad ; \quad 1\text{ Ko} = 2^{10} = 1024\text{ octets} \quad ; \quad 1\text{ Mo} = 2^{20}\text{ octets}` },
        ],
        keyRule: 'Le compteur ordinal (CO) contient l’adresse de la prochaine instruction ; le registre d’instruction (RI) contient l’instruction en cours.',
        workedExample: {
          title: 'Mots mémoire et bus d’adresses',
          statement: r`Un ordinateur a $4\text{ Mo}$ de mémoire organisée en mots de $32$ bits. Combien de mots contient-elle, et combien de fils faut-il au bus d’adresses pour les adresser tous ?`,
          methodSteps: [
            r`$4\text{ Mo} = 4\times2^{20} = 2^{22}$ octets ; un mot de 32 bits fait 4 octets.`,
            r`Nombre de mots : $\frac{2^{22}}{2^{2}} = 2^{20} = 1\,048\,576$ mots.`,
            r`Pour adresser $2^{20}$ mots, il faut $20$ fils d’adresse.`,
          ],
          conclusion: r`$2^{20}$ mots, bus d’adresses de 20 bits.`,
        },
        visualSchema: { type: 'custom_svg', title: 'Architecture de von Neumann', svgContent: SVG_VON_NEUMANN },
        structuredSteps: [
          step(1, 'definition', 'Von Neumann', 'Le principe de von Neumann',
            r`Dans l’architecture de von Neumann, les instructions du programme sont **codées en binaire** et rangées dans la **même mémoire** que les données. Le processeur peut donc lire son programme comme n’importe quelle donnée. Les instructions s’exécutent en séquence, sauf instruction de **rupture de séquence** (saut).`,
            qcm('lmd_srit_l1_archi_ch1_p1_ex1',
              'Quelle est la caractéristique principale de l’architecture de von Neumann ?',
              ['Le programme et les données sont dans deux mémoires séparées', 'Le programme et les données sont rangés dans la même mémoire centrale', 'Le processeur n’a pas de registres', 'Les instructions sont exécutées toutes en même temps'],
              1, 'Von Neumann : une seule mémoire centrale contient le programme (codé en binaire) et les données. (Une architecture à deux mémoires séparées s’appelle Harvard.)',
              'Combien de mémoires centrales dans ce modèle ?')),
          step(2, 'propriete', 'Processeur', 'Unité de commande et UAL',
            r`Le processeur (CPU) contient l’**unité de commande** (UC), qui gère l’exécution des instructions, et l’**unité arithmétique et logique** (UAL), qui fait les calculs. L’UC utilise deux registres clés : le **registre d’instruction** (RI), qui contient l’instruction en cours, et le **compteur ordinal** (CO, ou PC), qui contient l’**adresse** de la prochaine instruction.`,
            qcm('lmd_srit_l1_archi_ch1_p1_ex2',
              'Quel registre du processeur contient l’adresse de la prochaine instruction à exécuter ?',
              ['Le registre d’instruction (RI)', 'L’accumulateur', 'Le compteur ordinal (CO)', 'Le registre d’état'],
              2, 'Le compteur ordinal (CO, ou PC pour « Program Counter ») contient l’adresse de la prochaine instruction ; le RI contient l’instruction elle-même.',
              'Il « compte » où l’on en est dans le programme.')),
          step(3, 'methode', 'Bus', 'Les bus et l’adressage',
            r`Les **bus** sont des ensembles de fils : le **bus de données** transporte les valeurs, le **bus d’adresses** indique la case mémoire visée, le **bus de commande** dit s’il s’agit d’une lecture ou d’une écriture. Avec $n$ fils d’adresse, on peut désigner $2^{n}$ cases différentes.`,
            qcm('lmd_srit_l1_archi_ch1_p1_ex3',
              'Un processeur possède un bus d’adresses de 16 fils. Combien de cases mémoire différentes peut-il adresser ?',
              ['16', '256', '65 536', '32'],
              2, r`$2^{16} = 65\,536$ cases (soit 64 Ko si chaque case contient un octet).`,
              r`Calcule $2^{16}$.`)),
          step(4, 'propriete', 'Cycle', 'Le cycle d’exécution d’une instruction',
            r`Pour chaque instruction, le processeur répète le même cycle : (1) **recherche** (fetch) : il lit en mémoire l’instruction dont l’adresse est dans le CO et la place dans le RI, puis incrémente le CO ; (2) **décodage** : l’UC analyse le code opération ; (3) **exécution** : l’UAL ou la mémoire réalise l’opération.`,
            qcm('lmd_srit_l1_archi_ch1_p1_ex4',
              'Dans quel ordre le processeur traite-t-il une instruction ?',
              ['Exécution, décodage, recherche', 'Décodage, recherche, exécution', 'Recherche, exécution, décodage', 'Recherche, décodage, exécution'],
              3, 'Le processeur va d’abord chercher l’instruction en mémoire, puis la décode pour savoir quoi faire, enfin l’exécute.',
              'On ne peut pas décoder une instruction qu’on n’a pas encore lue.')),
          step(5, 'exemple', 'Mémoires', 'Mémoire vive, mémoire morte, mémoire de masse',
            r`La **RAM** (mémoire vive) se lit et s’écrit rapidement mais **perd son contenu** à la coupure du courant (volatile). La **ROM** (mémoire morte) garde son contenu (programme de démarrage). Les **mémoires auxiliaires** (disque dur, SSD, clé USB) stockent durablement de grandes quantités de données, mais sont plus lentes.`,
            qcm('lmd_srit_l1_archi_ch1_p1_ex5',
              'Quelle mémoire perd son contenu quand on éteint l’ordinateur ?',
              ['La RAM (mémoire vive)', 'La ROM (mémoire morte)', 'Le disque dur', 'Le SSD'],
              0, 'La RAM est volatile : sans alimentation, son contenu est perdu. La ROM, le disque dur et le SSD conservent les données.',
              'C’est la mémoire « de travail ».')),
          step(6, 'piege', 'Unités', 'Octets, mots et puissances de 2',
            r`Piège : en architecture, $1\text{ Ko} = 2^{10} = 1024$ octets et $1\text{ Mo} = 2^{20}$ octets. Et un **mot** mémoire peut faire plusieurs octets : il faut diviser la capacité par la taille du mot pour compter les mots.`,
            qcm('lmd_srit_l1_archi_ch1_p1_ex6',
              'Un ordinateur possède 4 Mo de mémoire (1 Mo = 2²⁰ octets), organisée en mots de 32 bits. Combien de mots peut-il mémoriser ?',
              ['4 194 304 mots', '1 048 576 mots', '131 072 mots', '32 mots'],
              1, r`$4\text{ Mo} = 2^{22}$ octets, et un mot de 32 bits fait 4 octets : $\frac{2^{22}}{4} = 2^{20} = 1\,048\,576$ mots.`,
              '32 bits = 4 octets.')),
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 2 : REPRÉSENTATION DE L’INFORMATION
  // ==========================================================================
  {
    id: 'lmd_srit_l1_archi_ch2',
    subjectId: 'lmd_archi_ordinateurs',
    gradeLevel: 'lmd_srit_l1',
    semesters: [1],
    order: 2,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: SOURCE,
    title: 'Représentation de l’information',
    summary: 'Bases 2, 8, 10 et 16 ; arithmétique binaire ; nombres signés (binaire signé, CA1, CA2) ; nombres fractionnaires, virgule flottante IEEE 754 ; codes BCD et ASCII.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_archi_ch2_p1',
        order: 1,
        title: 'Les bases de numération et les conversions',
        summary: 'Numération de position, conversions binaire ↔ décimal, binaire ↔ octal et hexadécimal, nombre de valeurs codables.',
        conceptExplanation: r`L’ordinateur ne manipule que des **bits** (0 ou 1). Un nombre s’écrit dans une **base** $b$ avec des chiffres de $0$ à $b-1$, chaque position valant une puissance de $b$. On utilise la base **2** (binaire) pour la machine, et les bases **8** (octal) et **16** (hexadécimal) comme écritures compactes du binaire.`,
        formulas: [
          { name: 'Numération de position', formula: r`(a_n\ldots a_1a_0)_b = a_n b^{n} + \cdots + a_1 b + a_0` },
          { name: 'Regroupements', formula: r`\text{octal : paquets de 3 bits} \quad ; \quad \text{hexadécimal : paquets de 4 bits}` },
        ],
        keyRule: r`Sur $n$ bits, on code $2^{n}$ valeurs : de $0$ à $2^{n} - 1$ pour des entiers naturels.`,
        workedExample: {
          title: 'Du binaire à l’hexadécimal',
          statement: r`Convertis $(0110\,0011\,0101\,1100)_2$ en hexadécimal.`,
          methodSteps: [
            r`On découpe en paquets de 4 bits depuis la droite : $0110$, $0011$, $0101$, $1100$.`,
            r`$0110 = 6$, $0011 = 3$, $0101 = 5$, $1100 = 12 = \text{C}$.`,
          ],
          conclusion: r`$(0110\,0011\,0101\,1100)_2 = (635\text{C})_{16}$.`,
        },
        structuredSteps: [
          step(1, 'definition', 'Base 2', 'Lire un nombre binaire',
            r`En binaire, chaque position vaut une puissance de 2 : de droite à gauche $1, 2, 4, 8, 16, 32…$ Pour convertir en décimal, on additionne les puissances de 2 là où il y a un 1. Exemple : $(1101)_2 = 8 + 4 + 0 + 1 = 13$.`,
            qcm('lmd_srit_l1_archi_ch2_p1_ex1',
              'Quelle est la valeur décimale du nombre binaire (1011)₂ ?',
              ['13', '1011', '7', '11'],
              3, r`$(1011)_2 = 1\times8 + 0\times4 + 1\times2 + 1\times1 = 11$.`,
              'Les positions valent 8, 4, 2, 1.')),
          step(2, 'methode', 'Divisions', 'Du décimal au binaire : divisions successives',
            r`Méthode : divise le nombre par 2, note le reste, recommence avec le quotient jusqu’à 0. Les restes lus **de bas en haut** donnent l’écriture binaire. Exemple : $13 \to$ restes $1, 0, 1, 1$ donc $(1101)_2$.`,
            qcm('lmd_srit_l1_archi_ch2_p1_ex2',
              'Quelle est l’écriture binaire du nombre décimal 45 ?',
              ['(101101)₂', '(110101)₂', '(101011)₂', '(100101)₂'],
              0, r`$45 = 32 + 8 + 4 + 1$, donc $(101101)_2$. Divisions : 45 → 22 r1 → 11 r0 → 5 r1 → 2 r1 → 1 r0 → 0 r1 ; restes lus de bas en haut : 101101.`,
              'Décompose 45 en puissances de 2.')),
          step(3, 'methode', 'Hexadécimal', 'Du binaire à l’hexadécimal',
            r`On regroupe les bits par **paquets de 4** à partir de la droite, et chaque paquet donne un chiffre hexadécimal : $0$ à $9$, puis $\text{A} = 10$, $\text{B} = 11$, $\text{C} = 12$, $\text{D} = 13$, $\text{E} = 14$, $\text{F} = 15$.`,
            qcm('lmd_srit_l1_archi_ch2_p1_ex3',
              'Quelle est l’écriture hexadécimale du nombre binaire (1011 1110)₂ ?',
              ['EB', '190', 'BE', 'B14'],
              2, r`$1011 = 11 = \text{B}$ et $1110 = 14 = \text{E}$ : $(\text{BE})_{16}$. (190 est sa valeur en décimal.)`,
              'Paquets de 4 bits, de gauche à droite ici.')),
          step(4, 'methode', 'Octal', 'Du binaire à l’octal',
            r`Même principe avec des **paquets de 3 bits** (car $8 = 2^{3}$) : chaque paquet donne un chiffre de 0 à 7. Exemple : $(010\,111)_2 = (27)_8$.`,
            qcm('lmd_srit_l1_archi_ch2_p1_ex4',
              'Quelle est l’écriture octale du nombre binaire (110 101 011)₂ ?',
              ['(653)₈', '(356)₈', '(6513)₈', '(D53)₈'],
              0, r`$110 = 6$, $101 = 5$, $011 = 3$ : $(653)_8$.`,
              'Chaque paquet de 3 bits vaut de 0 à 7.')),
          step(5, 'exemple', 'Hexa → décimal', 'De l’hexadécimal au décimal',
            r`Chaque position hexadécimale vaut une puissance de 16 : $(\text{2F})_{16} = 2\times16 + 15$. L’hexadécimal est très utilisé pour écrire les adresses mémoire et les couleurs (FF0000 code le rouge).`,
            qcm('lmd_srit_l1_archi_ch2_p1_ex5',
              'Quelle est la valeur décimale du nombre hexadécimal (2F)₁₆ ?',
              ['32', '215', '47', '45'],
              2, r`$(\text{2F})_{16} = 2\times16 + 15 = 32 + 15 = 47$.`,
              'F vaut 15.')),
          step(6, 'piege', 'Nombre de valeurs', '2ⁿ valeurs, mais un maximum de 2ⁿ − 1',
            r`Piège : sur $n$ bits on peut écrire $2^{n}$ valeurs différentes, mais comme on commence à 0, le plus grand entier naturel est $2^{n} - 1$. Sur 8 bits : 256 valeurs, de 0 à 255.`,
            qcm('lmd_srit_l1_archi_ch2_p1_ex6',
              'Quel est le plus grand entier naturel (non signé) qu’on peut écrire sur 8 bits ?',
              ['256', '128', '127', '255'],
              3, r`$(11111111)_2 = 2^{8} - 1 = 255$. Il y a bien 256 valeurs, de 0 à 255.`,
              'On commence à compter à 0.')),
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_archi_ch2_p2',
        order: 2,
        title: 'Arithmétique binaire et nombres signés',
        summary: 'Addition binaire, binaire signé, complément à 1 (CA1), complément à 2 (CA2), plage de valeurs et débordement.',
        conceptExplanation: r`Pour représenter les entiers **négatifs**, plusieurs codages existent : le **binaire signé** (un bit de signe), le **complément à 1** (CA1, on inverse tous les bits) et le **complément à 2** (CA2, CA1 + 1). Les processeurs utilisent le **CA2**, car il n’a qu’un seul zéro et permet de faire les soustractions avec un simple additionneur.`,
        formulas: [
          { name: 'Complément à 2', formula: r`-N = \overline{N} + 1 \quad (\text{inverser les bits puis ajouter } 1)` },
          { name: 'Plage en CA2 sur n bits', formula: r`-2^{n-1} \le N \le 2^{n-1} - 1` },
        ],
        keyRule: 'En CA2, le bit de gauche (poids fort) vaut 1 pour un nombre négatif.',
        workedExample: {
          title: 'Coder −12 sur 8 bits',
          statement: r`Écris $-12$ sur 8 bits en binaire signé, en CA1 et en CA2.`,
          methodSteps: [
            r`$+12 = 00001100$.`,
            r`Binaire signé : on met le bit de signe à 1 : $10001100$.`,
            r`CA1 : on inverse tous les bits : $11110011$. CA2 : on ajoute 1 : $11110100$.`,
          ],
          conclusion: r`$-12$ = $10001100$ (signé), $11110011$ (CA1), $11110100$ (CA2).`,
        },
        structuredSteps: [
          step(1, 'methode', 'Addition', 'L’addition binaire',
            r`On additionne colonne par colonne de droite à gauche, avec $0 + 0 = 0$, $0 + 1 = 1$, $1 + 1 = 10$ (on écrit 0 et on retient 1), $1 + 1 + 1 = 11$ (on écrit 1 et on retient 1).`,
            qcm('lmd_srit_l1_archi_ch2_p2_ex1',
              'Quel est le résultat de l’addition binaire (1011)₂ + (0110)₂ ?',
              ['(1101)₂', '(10001)₂', '(10101)₂', '(1111)₂'],
              1, r`$1011 + 0110 = 10001$. Vérification en décimal : $11 + 6 = 17 = 16 + 1$.`,
              'Vérifie avec les valeurs décimales 11 et 6.')),
          step(2, 'definition', 'Binaire signé', 'Le binaire signé',
            r`Le bit le plus à gauche sert de **signe** (0 pour +, 1 pour −) et les autres bits donnent la valeur absolue. Défaut : il y a **deux zéros** ($00000000$ et $10000000$), et l’addition ne marche pas directement.`,
            qcm('lmd_srit_l1_archi_ch2_p2_ex2',
              'Comment s’écrit −12 en binaire signé (bit de signe + valeur absolue) sur 8 bits, sachant que +12 = 00001100 ?',
              ['11110011', '11110100', '10001100', '00001100'],
              2, r`On garde la valeur absolue $0001100$ et on met le bit de signe à 1 : $10001100$.`,
              'Seul le bit de gauche change.')),
          step(3, 'methode', 'CA1', 'Le complément à 1',
            r`Le **complément à 1** (complément restreint) d’un nombre s’obtient en **inversant tous les bits** : les 0 deviennent 1 et les 1 deviennent 0. Il a encore deux zéros ($00000000$ et $11111111$).`,
            qcm('lmd_srit_l1_archi_ch2_p2_ex3',
              'Quel est le complément à 1 de 00001100 (sur 8 bits) ?',
              ['11110011', '11110100', '10001100', '00110000'],
              0, 'On inverse chaque bit : 00001100 devient 11110011.',
              'Chaque 0 devient 1 et chaque 1 devient 0.')),
          step(4, 'methode', 'CA2', 'Le complément à 2',
            r`Le **complément à 2** s’obtient en faisant le CA1 puis en **ajoutant 1** (on ignore une éventuelle retenue au-delà des $n$ bits). C’est le codage des entiers signés dans tous les processeurs : un seul zéro, et $A - B = A + \text{CA2}(B)$.`,
            qcm('lmd_srit_l1_archi_ch2_p2_ex4',
              'Comment s’écrit −5 en complément à 2 sur 8 bits, sachant que +5 = 00000101 ?',
              ['11111010', '10000101', '11111011', '11111101'],
              2, r`CA1 de $00000101$ : $11111010$ ; on ajoute 1 : $11111011$.`,
              'Inverse les bits, puis ajoute 1.'),
            { formula: { name: 'Complément à 2', formula: r`\text{CA2}(N) = \text{CA1}(N) + 1` } }),
          step(5, 'propriete', 'Plage', 'Les valeurs représentables en CA2',
            r`Sur $n$ bits en CA2, on représente les entiers de $-2^{n-1}$ à $2^{n-1} - 1$ : il y a un négatif de plus que de positifs, car le zéro est compté avec les positifs. Sur 8 bits : de $-128$ à $+127$.`,
            qcm('lmd_srit_l1_archi_ch2_p2_ex5',
              'Quelle est la plage des entiers représentables en complément à 2 sur 8 bits ?',
              ['De 0 à 255', 'De −127 à +127', 'De −128 à +127', 'De −256 à +255'],
              2, r`$-2^{7} = -128$ à $2^{7} - 1 = 127$.`,
              r`Utilise $-2^{n-1}$ et $2^{n-1} - 1$ avec $n = 8$.`)),
          step(6, 'piege', 'Débordement', 'Le débordement en CA2',
            r`Piège : si le résultat sort de la plage, il y a **débordement** (overflow) : le résultat écrit sur $n$ bits est faux. Signe typique : additionner deux positifs donne un « négatif ». Le processeur le signale par un indicateur (V).`,
            qcm('lmd_srit_l1_archi_ch2_p2_ex6',
              'Sur 8 bits en complément à 2 (plage −128 à +127), on calcule 100 + 50. Que se passe-t-il ?',
              ['Le résultat 150 est correct', 'Il y a débordement : le résultat lu vaut −106', 'Le processeur arrondit à 127', 'Le résultat vaut 50'],
              1, r`$150 > 127$ : débordement. Les 8 bits obtenus, $10010110$, se lisent en CA2 comme $150 - 256 = -106$.`,
              'Compare 150 au maximum représentable.')),
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_archi_ch2_p3',
        order: 3,
        title: 'Nombres fractionnaires, virgule flottante et codes',
        summary: 'Conversion des nombres à virgule, nombres sans écriture binaire finie, norme IEEE 754 simple précision, code BCD et code ASCII.',
        conceptExplanation: r`Après la virgule, les positions binaires valent $\frac12, \frac14, \frac18…$ Pour représenter de très grands ou très petits nombres, on utilise la **virgule flottante** (norme **IEEE 754**) : un signe, un exposant et une mantisse, comme l’écriture scientifique. Enfin, des **codes** servent à représenter les chiffres décimaux (BCD) et les caractères (ASCII).`,
        formulas: [
          { name: 'Partie fractionnaire', formula: r`(0{,}a_{-1}a_{-2}a_{-3})_2 = \frac{a_{-1}}{2} + \frac{a_{-2}}{4} + \frac{a_{-3}}{8}` },
          { name: 'IEEE 754 simple précision', formula: r`x = (-1)^{s}\times1{,}M\times2^{E - 127} \quad (1 + 8 + 23 \text{ bits})` },
        ],
        keyRule: 'Partie fractionnaire en binaire : multiplier par 2 et noter la partie entière, à chaque étape.',
        workedExample: {
          title: 'Coder −6,5 en IEEE 754',
          statement: r`Donne le signe, l’exposant biaisé et la mantisse de $-6{,}5$ en simple précision.`,
          methodSteps: [
            r`$6{,}5 = (110{,}1)_2 = (1{,}101)_2\times2^{2}$.`,
            r`Signe $s = 1$ (négatif). Exposant biaisé $E = 2 + 127 = 129 = (10000001)_2$.`,
            r`Mantisse (sans le 1 de tête) : $M = 101\,000\ldots0$ (23 bits).`,
          ],
          conclusion: r`$-6{,}5 = 1\;10000001\;10100000000000000000000$.`,
        },
        structuredSteps: [
          step(1, 'methode', 'Binaire → décimal', 'Les chiffres après la virgule',
            r`Après la virgule, les positions valent $2^{-1} = 0{,}5$, $2^{-2} = 0{,}25$, $2^{-3} = 0{,}125$, $2^{-4} = 0{,}0625$… Exemple : $(1001{,}1101)_2 = 9 + 0{,}5 + 0{,}25 + 0{,}0625 = 9{,}8125$.`,
            qcm('lmd_srit_l1_archi_ch2_p3_ex1',
              'Quelle est la valeur décimale du nombre binaire (101,01)₂ ?',
              ['5,01', '5,25', '5,1', '2,5'],
              1, r`Partie entière : $(101)_2 = 5$. Partie fractionnaire : $0\times0{,}5 + 1\times0{,}25 = 0{,}25$. Total : $5{,}25$.`,
              'Après la virgule : 0,5 puis 0,25.')),
          step(2, 'methode', 'Décimal → binaire', 'Multiplications successives par 2',
            r`Méthode pour la partie fractionnaire : multiplie par 2, note la partie entière (0 ou 1), garde la partie décimale et recommence. Exemple : $0{,}375 \to 0{,}75$ (0) $\to 1{,}5$ (1) $\to 1{,}0$ (1), donc $0{,}375 = (0{,}011)_2$.`,
            qcm('lmd_srit_l1_archi_ch2_p3_ex2',
              'Quelle est l’écriture binaire du nombre décimal 6,625 ?',
              ['(110,101)₂', '(110,011)₂', '(101,101)₂', '(110,110)₂'],
              0, r`$6 = (110)_2$ ; $0{,}625\times2 = 1{,}25$ (1), $0{,}25\times2 = 0{,}5$ (0), $0{,}5\times2 = 1{,}0$ (1) : $0{,}625 = (0{,}101)_2$. Donc $(110{,}101)_2$.`,
              r`$0{,}625 = 0{,}5 + 0{,}125$.`)),
          step(3, 'propriete', 'Écriture infinie', 'Certains décimaux n’ont pas d’écriture binaire finie',
            r`Un nombre a une écriture binaire finie seulement s’il s’écrit comme une fraction dont le dénominateur est une puissance de 2. $0{,}75 = \frac34$ s’écrit $(0{,}11)_2$, mais $0{,}1 = \frac{1}{10}$ donne un développement **infini** ($0{,}000110011…$) : l’ordinateur le stocke de façon approchée.`,
            qcm('lmd_srit_l1_archi_ch2_p3_ex3',
              'Lequel de ces nombres décimaux a une écriture binaire FINIE ?',
              ['0,1', '0,3', '0,2', '0,75'],
              3, r`$0{,}75 = \frac{3}{4} = (0{,}11)_2$. Les nombres $0{,}1$, $0{,}2$ et $0{,}3$ ont un dénominateur contenant le facteur 5 : leur écriture binaire est infinie.`,
              'Cherche une fraction dont le dénominateur est une puissance de 2.')),
          step(4, 'methode', 'IEEE 754', 'Coder un nombre en virgule flottante',
            r`En simple précision (32 bits) : 1 bit de **signe** $s$, 8 bits d’**exposant biaisé** $E = e + 127$, 23 bits de **mantisse** $M$. Méthode : écris le nombre en binaire, normalise-le en $1{,}M\times2^{e}$, puis calcule $E$.`,
            qcm('lmd_srit_l1_archi_ch2_p3_ex4',
              'On code −6,5 = −(1,101)₂ × 2² en IEEE 754 simple précision (biais 127). Quel est l’exposant biaisé E ?',
              ['2', '127', '129', '125'],
              2, r`$E = e + 127 = 2 + 127 = 129 = (10000001)_2$.`,
              'Ajoute le biais à l’exposant réel.'),
            { formula: { name: 'Exposant biaisé', formula: r`E = e + 127` } }),
          step(5, 'exemple', 'Décodage', 'Décoder un flottant',
            r`Pour décoder : $x = (-1)^{s}\times1{,}M\times2^{E-127}$. Le « 1, » devant la mantisse n’est pas stocké (bit implicite), ce qui gagne un bit de précision.`,
            qcm('lmd_srit_l1_archi_ch2_p3_ex5',
              'Un flottant IEEE 754 simple précision a s = 0, E = (10000000)₂ = 128 et une mantisse M = 0100…0. Quelle est sa valeur ?',
              ['1,25', '2,5', '5', '−2,5'],
              1, r`$e = 128 - 127 = 1$ ; $1{,}M = (1{,}01)_2 = 1{,}25$ ; $x = +1{,}25\times2^{1} = 2{,}5$.`,
              r`$(1{,}01)_2 = 1 + 0{,}25$.`)),
          step(6, 'piege', 'BCD', 'Le code BCD n’est pas le binaire',
            r`Piège : en **BCD** (Décimal Codé Binaire), chaque **chiffre décimal** est codé séparément sur 4 bits. $59$ s’écrit $0101\,1001$ en BCD, alors qu’en binaire pur $59 = (111011)_2$. Le code **ASCII**, lui, code les caractères sur 7 bits (le « A » vaut 65).`,
            qcm('lmd_srit_l1_archi_ch2_p3_ex6',
              'Comment s’écrit le nombre décimal 59 en code BCD (chaque chiffre sur 4 bits) ?',
              ['111011', '0011 1011', '0101 1001', '0101 1010'],
              2, r`$5 = 0101$ et $9 = 1001$ : en BCD, $59 = 0101\,1001$. ($111011$ est l’écriture binaire pure de 59.)`,
              'Code le 5, puis le 9.')),
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 3 : FONCTIONS ET OPÉRATEURS LOGIQUES
  // ==========================================================================
  {
    id: 'lmd_srit_l1_archi_ch3',
    subjectId: 'lmd_archi_ordinateurs',
    gradeLevel: 'lmd_srit_l1',
    semesters: [1],
    order: 3,
    officialVolumeHours: 10,
    contentVersion: 2,
    source: SOURCE,
    title: 'Fonctions et opérateurs logiques',
    summary: 'Algèbre de Boole, portes logiques, lois et théorèmes de De Morgan ; tables de vérité, formes canoniques, simplification par tableau de Karnaugh.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_archi_ch3_p1',
        order: 1,
        title: 'Algèbre de Boole et portes logiques',
        summary: 'Opérations ET, OU, NON, portes NAND, NOR et OU exclusif, propriétés de l’algèbre de Boole, théorèmes de De Morgan.',
        conceptExplanation: r`L’**algèbre de Boole** calcule sur des variables qui ne valent que 0 ou 1. Trois opérations de base : **ET** ($A\cdot B$, vaut 1 si les deux valent 1), **OU** ($A + B$, vaut 1 si au moins une vaut 1) et **NON** ($\overline{A}$, inverse). Chaque opération est réalisée par une **porte logique** électronique : tous les circuits d’un processeur sont construits avec elles.`,
        formulas: [
          { name: 'Propriétés utiles', formula: r`A + A\cdot B = A \quad ; \quad A + \overline{A} = 1 \quad ; \quad A\cdot\overline{A} = 0 \quad ; \quad A + 1 = 1` },
          { name: 'Théorèmes de De Morgan', formula: r`\overline{A\cdot B} = \overline{A} + \overline{B} \quad ; \quad \overline{A + B} = \overline{A}\cdot\overline{B}` },
          { name: 'OU exclusif', formula: r`A\oplus B = \overline{A}\cdot B + A\cdot\overline{B}` },
        ],
        keyRule: 'Les portes NAND (et NOR) sont universelles : on peut construire n’importe quel circuit avec elles seules.',
        workedExample: {
          title: 'Simplifier une expression',
          statement: r`Simplifie $F = A\cdot B + A\cdot\overline{B}$.`,
          methodSteps: [
            r`On met $A$ en facteur : $F = A\cdot(B + \overline{B})$.`,
            r`$B + \overline{B} = 1$, donc $F = A\cdot1 = A$.`,
          ],
          conclusion: r`$F = A$ : la variable $B$ n’a aucune influence.`,
        },
        visualSchema: { type: 'custom_svg', title: 'Les portes logiques de base', svgContent: SVG_PORTES },
        structuredSteps: [
          step(1, 'definition', 'ET, OU, NON', 'Les trois opérations de base',
            r`**ET** : $A\cdot B = 1$ seulement si $A = 1$ et $B = 1$. **OU** : $A + B = 1$ dès qu’une des deux vaut 1. **NON** : $\overline{A}$ vaut 1 si $A = 0$ et 0 si $A = 1$. Attention, en logique $1 + 1 = 1$.`,
            qcm('lmd_srit_l1_archi_ch3_p1_ex1',
              r`On a $A = 1$ et $B = 0$. Que vaut $A\cdot\overline{B}$ ?`,
              ['0', '1', '2', 'On ne peut pas savoir'],
              1, r`$\overline{B} = \overline{0} = 1$, donc $A\cdot\overline{B} = 1\cdot1 = 1$.`,
              r`Calcule d’abord $\overline{B}$.`)),
          step(2, 'propriete', 'Autres portes', 'NAND, NOR et OU exclusif',
            r`**NAND** = NON-ET, **NOR** = NON-OU. Le **OU exclusif** (XOR) $A\oplus B$ vaut 1 quand les deux entrées sont **différentes**, 0 quand elles sont égales. Il sert à additionner deux bits et à comparer.`,
            qcm('lmd_srit_l1_archi_ch3_p1_ex2',
              r`Que vaut le OU exclusif $A\oplus B$ pour $A = 1$ et $B = 1$ ?`,
              ['1', '2', '0', '11'],
              2, r`Les deux entrées sont égales : $1\oplus1 = 0$. (Le OU simple donnerait 1.)`,
              'XOR vaut 1 seulement si les entrées sont différentes.')),
          step(3, 'methode', 'Absorption', 'Simplifier avec les propriétés',
            r`Quelques lois à connaître : $A + 0 = A$, $A + 1 = 1$, $A\cdot1 = A$, $A\cdot0 = 0$, $A + A = A$, $A + \overline{A} = 1$, $A\cdot\overline{A} = 0$ et l’**absorption** $A + A\cdot B = A$ (car $A\cdot(1 + B) = A$).`,
            qcm('lmd_srit_l1_archi_ch3_p1_ex3',
              r`À quoi se simplifie l’expression booléenne $A + A\cdot B$ ?`,
              [r`$A$`, r`$A\cdot B$`, r`$B$`, r`$1$`],
              0, r`$A + A\cdot B = A\cdot(1 + B) = A\cdot1 = A$ (loi d’absorption).`,
              r`Mets $A$ en facteur et utilise $1 + B = 1$.`)),
          step(4, 'propriete', 'De Morgan', 'Les théorèmes de De Morgan',
            r`Le complément d’un produit est la somme des compléments, et inversement : $\overline{A\cdot B} = \overline{A} + \overline{B}$ et $\overline{A + B} = \overline{A}\cdot\overline{B}$. On « casse la barre » en changeant le ET en OU (ou le OU en ET).`,
            qcm('lmd_srit_l1_archi_ch3_p1_ex4',
              r`D’après De Morgan, à quoi est égal $\overline{A\cdot B}$ ?`,
              [r`$\overline{A}\cdot\overline{B}$`, r`$A + B$`, r`$\overline{A} + \overline{B}$`, r`$\overline{A}\cdot B$`],
              2, r`$\overline{A\cdot B} = \overline{A} + \overline{B}$ : on complémente chaque variable et le ET devient OU.`,
              'Casser la barre change l’opération.'),
            { formula: { name: 'De Morgan', formula: r`\overline{A\cdot B} = \overline{A} + \overline{B}` } }),
          step(5, 'exemple', 'NAND universelle', 'Tout faire avec des NAND',
            r`Une porte NAND dont les deux entrées sont reliées à $A$ donne $\overline{A\cdot A} = \overline{A}$ : c’est un inverseur. Avec des NAND, on fabrique aussi ET et OU : la NAND est **universelle**, ce qui simplifie la fabrication des circuits intégrés.`,
            qcm('lmd_srit_l1_archi_ch3_p1_ex5',
              r`On relie les deux entrées d’une porte NAND à la même variable $A$. Quelle fonction obtient-on ?`,
              [r`$A$`, r`$\overline{A}$`, r`$0$`, r`$1$`],
              1, r`Sortie : $\overline{A\cdot A} = \overline{A}$ (car $A\cdot A = A$). C’est une porte NON.`,
              r`$A\cdot A = A$.`)),
          step(6, 'piege', 'Distributivité', 'Une distributivité qui n’existe pas en algèbre ordinaire',
            r`Piège : en algèbre de Boole, le OU est distributif sur le ET : $A + B\cdot C = (A + B)\cdot(A + C)$. Cette égalité est **fausse** avec les nombres ordinaires, mais vraie ici car $A\cdot A = A$ et $A + A\cdot X = A$.`,
            qcm('lmd_srit_l1_archi_ch3_p1_ex6',
              'Laquelle de ces égalités est VRAIE en algèbre de Boole (mais fausse en algèbre ordinaire) ?',
              [r`$A + B\cdot C = (A + B)\cdot(A + C)$`, r`$A + A = 2A$`, r`$A\cdot\overline{A} = 1$`, r`$\overline{A + B} = \overline{A} + \overline{B}$`],
              0, r`Développe : $(A + B)(A + C) = A + A\cdot C + A\cdot B + B\cdot C = A + B\cdot C$ par absorption. Les trois autres sont fausses en Boole.`,
              r`Développe $(A + B)(A + C)$ avec $A\cdot A = A$.`)),
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_archi_ch3_p2',
        order: 2,
        title: 'Formes canoniques et tableaux de Karnaugh',
        summary: 'Table de vérité, somme de mintermes, produit de maxtermes, tableau de Karnaugh, regroupements et adjacence par les bords.',
        conceptExplanation: r`Une fonction logique se décrit par sa **table de vérité**. On en tire une expression **canonique** (somme des cas où elle vaut 1), puis on la **simplifie** pour obtenir un circuit avec moins de portes. Le **tableau de Karnaugh** rend cette simplification visuelle : on entoure des groupes de 1 voisins.`,
        formulas: [
          { name: 'Taille de la table', formula: r`n \text{ variables} \Rightarrow 2^{n} \text{ lignes}` },
          { name: 'Groupement de Karnaugh', formula: r`\text{groupe de } 2^{k} \text{ cases} \Rightarrow k \text{ variables éliminées}` },
        ],
        keyRule: 'Dans un tableau de Karnaugh, deux cases voisines ne diffèrent que d’un seul bit (ordre 00, 01, 11, 10).',
        workedExample: {
          title: 'Simplifier avec Karnaugh',
          statement: r`$F(A, B, C)$ vaut 1 pour $ABC = 100, 101, 110, 111$ et 0 ailleurs. Simplifie $F$.`,
          methodSteps: [
            r`Les quatre 1 sont les cases où $A = 1$, quelles que soient $B$ et $C$.`,
            r`Ils forment un groupe de $4 = 2^{2}$ cases : on élimine 2 variables ($B$ et $C$).`,
          ],
          conclusion: r`$F = A$.`,
        },
        visualSchema: { type: 'custom_svg', title: 'Tableau de Karnaugh à 3 variables', svgContent: SVG_KARNAUGH },
        structuredSteps: [
          step(1, 'definition', 'Table de vérité', 'La table de vérité',
            r`La table de vérité donne la valeur de la fonction pour **toutes** les combinaisons d’entrées. Avec $n$ variables, il y a $2^{n}$ combinaisons, donc $2^{n}$ lignes.`,
            qcm('lmd_srit_l1_archi_ch3_p2_ex1',
              'Combien de lignes compte la table de vérité d’une fonction logique de 4 variables ?',
              ['4', '8', '16', '32'],
              2, r`$2^{4} = 16$ combinaisons des 4 variables, donc 16 lignes.`,
              r`$2^{n}$ avec $n = 4$.`)),
          step(2, 'methode', 'Mintermes', 'La somme de mintermes',
            r`Forme canonique **disjonctive** : pour chaque ligne où $F = 1$, on écrit un produit (minterme) contenant chaque variable, complémentée si elle vaut 0 sur cette ligne ; puis on fait la somme. Exemple : $F = 1$ pour $AB = 11$ donne $F = A\cdot B$.`,
            qcm('lmd_srit_l1_archi_ch3_p2_ex2',
              r`Une fonction $F(A, B)$ vaut 1 uniquement pour $AB = 01$ et $AB = 10$. Quelle est sa somme de mintermes ?`,
              [r`$A\cdot B + \overline{A}\cdot\overline{B}$`, r`$\overline{A}\cdot B + A\cdot\overline{B}$`, r`$A + B$`, r`$\overline{A} + \overline{B}$`],
              1, r`Ligne $AB = 01$ : $\overline{A}\cdot B$ ; ligne $AB = 10$ : $A\cdot\overline{B}$. Donc $F = \overline{A}\cdot B + A\cdot\overline{B} = A\oplus B$.`,
              'Une variable qui vaut 0 sur la ligne apparaît complémentée.')),
          step(3, 'methode', 'Maxtermes', 'Le produit de maxtermes',
            r`Forme canonique **conjonctive** : pour chaque ligne où $F = 0$, on écrit une somme (maxterme) où chaque variable apparaît **complémentée si elle vaut 1** ; puis on fait le produit. Pratique quand la fonction a peu de 0.`,
            qcm('lmd_srit_l1_archi_ch3_p2_ex3',
              r`Une fonction $F(A, B)$ vaut 0 uniquement pour $A = 0$ et $B = 0$ (elle vaut 1 dans les trois autres cas). Quelle est son expression ?`,
              [r`$A\cdot B$`, r`$\overline{A} + \overline{B}$`, r`$A + B$`, r`$\overline{A}\cdot\overline{B}$`],
              2, r`Un seul 0, pour $AB = 00$ : le maxterme est $A + B$ (les variables valent 0, elles ne sont pas complémentées). $F = A + B$, c’est le OU.`,
              'Pense à la table de vérité du OU.')),
          step(4, 'propriete', 'Code de Gray', 'L’ordre des cases dans le tableau',
            r`Dans un tableau de Karnaugh, les lignes et colonnes sont rangées dans l’ordre **00, 01, 11, 10** (code de Gray) : deux cases voisines ne diffèrent que d’**un seul bit**. C’est ce qui permet de regrouper les 1 voisins.`,
            qcm('lmd_srit_l1_archi_ch3_p2_ex4',
              'Dans quel ordre range-t-on les valeurs de deux variables AB en tête des colonnes d’un tableau de Karnaugh ?',
              ['00, 01, 10, 11', '00, 10, 01, 11', '11, 10, 01, 00', '00, 01, 11, 10'],
              3, 'On utilise le code de Gray 00, 01, 11, 10 : d’une colonne à la suivante, un seul bit change (y compris entre 10 et 00, aux deux bords).',
              'Un seul bit doit changer d’une colonne à la suivante.')),
          step(5, 'methode', 'Regroupements', 'Regrouper les 1',
            r`Méthode : entoure les 1 par groupes **rectangulaires** de 1, 2, 4 ou 8 cases voisines, les plus grands possibles. Dans chaque groupe, on ne garde que les variables qui ne changent pas. Un groupe de $2^{k}$ cases élimine $k$ variables.`,
            qcm('lmd_srit_l1_archi_ch3_p2_ex5',
              r`Une fonction $F(A, B, C)$ vaut 1 pour $ABC = 100, 101, 110, 111$ et 0 sinon. Quelle est sa forme simplifiée ?`,
              [r`$A\cdot B\cdot C$`, r`$B + C$`, r`$\overline{A}$`, r`$A$`],
              3, r`Ces 4 cases sont exactement celles où $A = 1$ : un groupe de 4 cases élimine $B$ et $C$. $F = A$.`,
              'Quelle variable garde la même valeur dans les 4 cas ?')),
          step(6, 'piege', 'Bords', 'Les bords du tableau sont voisins',
            r`Piège : le tableau de Karnaugh se **referme sur lui-même** : la première et la dernière colonne (00 et 10) sont voisines, car elles ne diffèrent que d’un bit. Oublier ces regroupements par les bords donne une expression non simplifiée.`,
            qcm('lmd_srit_l1_archi_ch3_p2_ex6',
              r`Une fonction $F(A, B, C)$ vaut 1 uniquement pour $ABC = 000$ et $ABC = 100$. Quelle est sa forme simplifiée ?`,
              [r`$\overline{B}\cdot\overline{C}$`, r`$\overline{A}\cdot\overline{B}\cdot\overline{C} + A\cdot\overline{B}\cdot\overline{C}$ (pas de simplification possible)`, r`$\overline{A}$`, r`$\overline{C}$`],
              0, r`Les cases $AB = 00$ et $AB = 10$ (avec $C = 0$) sont voisines par le bord : seul $A$ change. On l’élimine : $F = \overline{B}\cdot\overline{C}$.`,
              'Les colonnes 00 et 10 sont voisines.')),
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 4 : CIRCUITS COMBINATOIRES
  // ==========================================================================
  {
    id: 'lmd_srit_l1_archi_ch4',
    subjectId: 'lmd_archi_ordinateurs',
    gradeLevel: 'lmd_srit_l1',
    semesters: [1],
    order: 4,
    officialVolumeHours: 8,
    contentVersion: 2,
    source: SOURCE,
    title: 'Les circuits intégrés combinatoires',
    summary: 'Circuits combinatoires et séquentiels, demi-additionneur et additionneur complet, additionneur n bits, multiplexeur, décodeur.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_archi_ch4_p1',
        order: 1,
        title: 'Additionneurs, multiplexeurs et décodeurs',
        summary: 'Définition d’un circuit combinatoire, demi-additionneur, additionneur complet, additionneur 4 bits en cascade, multiplexeur et décodeur.',
        conceptExplanation: r`Un circuit **combinatoire** calcule ses sorties uniquement à partir de ses entrées **présentes** (pas de mémoire), contrairement à un circuit **séquentiel** (bascules, registres). Les briques de l’UAL sont combinatoires : **additionneurs**, **multiplexeurs** (choisir une entrée parmi plusieurs), **décodeurs** (activer une sortie parmi $2^{n}$, par exemple pour sélectionner une case mémoire).`,
        formulas: [
          { name: 'Demi-additionneur', formula: r`S = A\oplus B \quad ; \quad R = A\cdot B` },
          { name: 'Additionneur complet', formula: r`S = A\oplus B\oplus R_e \quad ; \quad R_s = A\cdot B + R_e\cdot(A\oplus B)` },
          { name: 'Multiplexeur et décodeur', formula: r`\text{MUX } 2^{n}\to1 : n \text{ lignes de sélection} \quad ; \quad \text{décodeur } n\to2^{n}` },
        ],
        keyRule: 'Un additionneur n bits se construit en chaînant n additionneurs complets : la retenue de sortie de chaque étage entre dans le suivant.',
        workedExample: {
          title: 'Additionneur complet',
          statement: r`Calcule $S$ et $R_s$ pour $A = 1$, $B = 1$, $R_e = 1$.`,
          methodSteps: [
            r`$A\oplus B = 0$, puis $S = 0\oplus1 = 1$.`,
            r`$R_s = A\cdot B + R_e\cdot(A\oplus B) = 1 + 1\cdot0 = 1$.`,
            r`Vérification : $1 + 1 + 1 = 3 = (11)_2$, soit retenue 1 et somme 1.`,
          ],
          conclusion: r`$S = 1$, $R_s = 1$.`,
        },
        visualSchema: { type: 'custom_svg', title: 'Demi-additionneur', svgContent: SVG_DEMI_ADD },
        structuredSteps: [
          step(1, 'definition', 'Combinatoire', 'Combinatoire ou séquentiel ?',
            r`Dans un circuit **combinatoire**, les sorties ne dépendent que des entrées à l’instant présent : mêmes entrées ⇒ mêmes sorties. Un circuit **séquentiel** dépend aussi de son **état passé** (il mémorise) : bascules, compteurs, registres.`,
            qcm('lmd_srit_l1_archi_ch4_p1_ex1',
              'Lequel de ces circuits est COMBINATOIRE ?',
              ['Un compteur', 'Un registre', 'Un additionneur', 'Une bascule'],
              2, 'La sortie d’un additionneur ne dépend que des bits présents à ses entrées. Compteur, registre et bascule mémorisent un état : ils sont séquentiels.',
              'Lequel n’a besoin d’aucune mémoire ?')),
          step(2, 'propriete', 'Demi-additionneur', 'Additionner deux bits',
            r`Le **demi-additionneur** additionne deux bits $A$ et $B$ : la somme $S = A\oplus B$ (porte OU exclusif) et la retenue $R = A\cdot B$ (porte ET). Il ne tient pas compte d’une retenue venant d’un étage précédent.`,
            qcm('lmd_srit_l1_archi_ch4_p1_ex2',
              r`Un demi-additionneur reçoit $A = 1$ et $B = 1$. Que valent la somme $S = A\oplus B$ et la retenue $R = A\cdot B$ ?`,
              [r`$S = 1$, $R = 1$`, r`$S = 0$, $R = 0$`, r`$S = 1$, $R = 0$`, r`$S = 0$, $R = 1$`],
              3, r`$1 + 1 = (10)_2$ : $S = 1\oplus1 = 0$ et $R = 1\cdot1 = 1$.`,
              r`$1 + 1 = 2 = (10)_2$.`)),
          step(3, 'methode', 'Additionneur complet', 'L’additionneur complet',
            r`L’**additionneur complet** ajoute trois bits : $A$, $B$ et la retenue entrante $R_e$. $S = A\oplus B\oplus R_e$ et $R_s = A\cdot B + R_e\cdot(A\oplus B)$. Astuce : compte le nombre de 1 en entrée ; $S$ est le bit des unités et $R_s$ le bit des deuxaines.`,
            qcm('lmd_srit_l1_archi_ch4_p1_ex3',
              r`Un additionneur complet reçoit $A = 1$, $B = 0$ et une retenue entrante $R_e = 1$. Que valent $S$ et $R_s$ ?`,
              [r`$S = 0$, $R_s = 1$`, r`$S = 1$, $R_s = 0$`, r`$S = 1$, $R_s = 1$`, r`$S = 0$, $R_s = 0$`],
              0, r`$1 + 0 + 1 = 2 = (10)_2$ : $S = 0$ et $R_s = 1$.`,
              'Compte le nombre de 1 en entrée.'),
            { formula: { name: 'Additionneur complet', formula: r`S = A\oplus B\oplus R_e \quad ; \quad R_s = A\cdot B + R_e(A\oplus B)` } }),
          step(4, 'propriete', 'Multiplexeur', 'Le multiplexeur',
            r`Un **multiplexeur** (MUX) a $2^{n}$ entrées de données, $n$ entrées de **sélection** et une sortie : le code binaire présent sur la sélection choisit quelle entrée est recopiée en sortie. C’est un aiguillage.`,
            qcm('lmd_srit_l1_archi_ch4_p1_ex4',
              'Combien de lignes de sélection faut-il à un multiplexeur 8 vers 1 (8 entrées de données, 1 sortie) ?',
              ['8', '3', '4', '1'],
              1, r`$2^{3} = 8$ : trois bits de sélection suffisent pour désigner une entrée parmi 8.`,
              r`Cherche $n$ tel que $2^{n} = 8$.`)),
          step(5, 'exemple', 'Décodeur', 'Le décodeur',
            r`Un **décodeur** $n$ vers $2^{n}$ active une seule sortie : celle dont le numéro est écrit en binaire sur ses entrées. Il sert par exemple à sélectionner le bon circuit mémoire à partir des bits d’adresse.`,
            qcm('lmd_srit_l1_archi_ch4_p1_ex5',
              'Un décodeur 3 vers 8 (sorties Y0 à Y7) reçoit sur ses entrées le code binaire 101. Quelle sortie est activée ?',
              ['Y1', 'Y3', 'Y5', 'Y7'],
              2, r`$(101)_2 = 5$ : la sortie Y5 est activée, toutes les autres restent inactives.`,
              'Convertis 101 en décimal.')),
          step(6, 'piege', 'Retenue finale', 'La retenue qui sort de l’additionneur',
            r`Piège : un additionneur 4 bits ne donne que 4 bits de somme. Si le vrai résultat dépasse 15, le bit en trop sort par la **retenue finale** (carry). Il faut la lire pour avoir le bon résultat (en non signé, elle signale un dépassement).`,
            qcm('lmd_srit_l1_archi_ch4_p1_ex6',
              'Un additionneur 4 bits calcule 1011 + 0110 (11 + 6 en décimal). Que donnent ses 4 bits de somme et sa retenue finale ?',
              ['Somme 0001, retenue 1', 'Somme 10001, retenue 0', 'Somme 1111, retenue 0', 'Somme 0001, retenue 0'],
              0, r`$11 + 6 = 17 = (10001)_2$ : les 4 bits de somme sont $0001$ et le cinquième bit sort en retenue finale (1).`,
              '17 ne tient pas sur 4 bits.')),
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 5 : MÉMOIRES ET BUS
  // ==========================================================================
  {
    id: 'lmd_srit_l1_archi_ch5',
    subjectId: 'lmd_archi_ordinateurs',
    gradeLevel: 'lmd_srit_l1',
    semesters: [1],
    order: 5,
    officialVolumeHours: 8,
    contentVersion: 2,
    source: SOURCE,
    title: 'Les mémoires et les bus',
    summary: 'Hiérarchie mémoire, capacité et bus d’adresses, bande passante d’un bus, mémoire cache et temps d’accès moyen, débit requis.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_archi_ch5_p1',
        order: 1,
        title: 'Capacité, adressage et bande passante',
        summary: 'Hiérarchie des mémoires, calcul de capacité et de largeur du bus d’adresses, bande passante d’un bus, cache, débit d’un flux vidéo.',
        conceptExplanation: r`Les mémoires forment une **hiérarchie** : les plus rapides (registres, cache) sont petites et chères, les plus grandes (RAM, disque) sont plus lentes. Pour dimensionner un système, on calcule la **capacité** adressable (liée au bus d’adresses), la **bande passante** des bus (quantité de données par seconde) et le **débit** demandé par une application.`,
        formulas: [
          { name: 'Capacité adressable', formula: r`\text{capacité} = 2^{n}\times\text{taille d’un mot} \quad (n = \text{largeur du bus d’adresses})` },
          { name: 'Bande passante d’un bus', formula: r`\text{BP} = \frac{f}{\text{cycles par transfert}}\times\text{largeur du bus}` },
          { name: 'Temps d’accès moyen avec cache', formula: r`t_{moy} = h\,t_c + (1 - h)\,t_m` },
        ],
        keyRule: 'Une couleur parmi 256 se code sur 8 bits = 1 octet par pixel.',
        workedExample: {
          title: 'Bande passante du bus d’un 8086',
          statement: r`Le bus de données d’un processeur fonctionne à $10\text{ MHz}$ et il faut 4 cycles d’horloge pour lire un mot de 16 bits. Calcule la bande passante.`,
          methodSteps: [
            r`Nombre de lectures par seconde : $\frac{10\times10^{6}}{4} = 2{,}5\times10^{6}$ mots/s.`,
            r`En bits : $2{,}5\times10^{6}\times16 = 40\times10^{6}$ bits/s.`,
            r`En octets : $\frac{40\times10^{6}}{8} = 5\times10^{6}$ octets/s.`,
          ],
          conclusion: r`Bande passante : $40\text{ Mbit/s}$, soit $5\text{ Mo/s}$.`,
        },
        visualSchema: { type: 'custom_svg', title: 'Hiérarchie des mémoires', svgContent: SVG_HIERARCHIE },
        structuredSteps: [
          step(1, 'definition', 'Hiérarchie', 'La hiérarchie des mémoires',
            r`Du plus rapide au plus lent : **registres** (dans le processeur), **cache** (quelques Mo), **mémoire centrale** (RAM, quelques Go), **mémoires de masse** (disque dur, SSD, plusieurs centaines de Go ou des To). Plus on descend, plus la capacité augmente et plus le coût par octet baisse.`,
            qcm('lmd_srit_l1_archi_ch5_p1_ex1',
              'Quelle mémoire offre le temps d’accès le plus court ?',
              ['La mémoire centrale (RAM)', 'Le disque dur', 'Les registres du processeur', 'Le SSD'],
              2, 'Les registres sont à l’intérieur du processeur : ils sont les plus rapides (et les plus petits) de toute la hiérarchie.',
              'Ils sont au cœur même du processeur.')),
          step(2, 'methode', 'Capacité', 'La capacité adressable',
            r`Avec un bus d’adresses de $n$ bits, le processeur désigne $2^{n}$ cases. Si chaque case contient un octet, la capacité maximale est $2^{n}$ octets. Rappel : $2^{10} = 1\text{ Ko}$, $2^{20} = 1\text{ Mo}$, $2^{30} = 1\text{ Go}$.`,
            qcm('lmd_srit_l1_archi_ch5_p1_ex2',
              'Un processeur 8 bits adresse la mémoire octet par octet avec un bus d’adresses de 24 bits. Quelle capacité mémoire maximale peut-il adresser ?',
              ['24 octets', '16 Mo', '24 Mo', '256 Ko'],
              1, r`$2^{24} = 2^{4}\times2^{20} = 16\text{ Mo}$ (une adresse par octet).`,
              r`$2^{24} = 2^{4}\times2^{20}$.`)),
          step(3, 'methode', 'Bus d’adresses', 'Combien de fils d’adresse ?',
            r`Inversement, pour adresser une mémoire de $N$ cases, il faut $n$ fils avec $2^{n} \ge N$. Pour $N = 2^{k}$, il faut exactement $k$ fils.`,
            qcm('lmd_srit_l1_archi_ch5_p1_ex3',
              'Une mémoire de 64 Ko est adressée octet par octet (1 Ko = 2¹⁰ octets). Combien de fils doit comporter le bus d’adresses ?',
              ['64', '10', '16', '6'],
              2, r`$64\text{ Ko} = 2^{6}\times2^{10} = 2^{16}$ octets : il faut 16 fils d’adresse.`,
              r`$64 = 2^{6}$.`)),
          step(4, 'methode', 'Bande passante', 'La bande passante d’un bus',
            r`Un bus **synchrone** est rythmé par une horloge. S’il faut $c$ cycles pour un transfert à la fréquence $f$, il fait $\frac{f}{c}$ transferts par seconde ; on multiplie par la largeur du bus pour obtenir la bande passante en bits/s (puis on divise par 8 pour les octets/s).`,
            qcm('lmd_srit_l1_archi_ch5_p1_ex4',
              'Un bus de données synchrone fonctionne à 10 MHz et il faut 4 cycles d’horloge pour lire un mot de 16 bits. Quelle est sa bande passante en octets par seconde ?',
              ['40 Mo/s', '2,5 Mo/s', '160 Mo/s', '5 Mo/s'],
              3, r`$\frac{10\times10^{6}}{4} = 2{,}5\times10^{6}$ mots/s ; chaque mot fait 2 octets : $5\times10^{6}$ octets/s $= 5\text{ Mo/s}$ (soit 40 Mbit/s).`,
              'Calcule d’abord le nombre de mots lus par seconde.')),
          step(5, 'exemple', 'Cache', 'La mémoire cache',
            r`Le **cache** garde une copie des données récemment utilisées (principe de **localité**). Si la donnée y est (succès, probabilité $h$), l’accès prend $t_c$ ; sinon, il faut aller en mémoire centrale ($t_m$). Temps moyen : $t_{moy} = h\,t_c + (1 - h)\,t_m$.`,
            qcm('lmd_srit_l1_archi_ch5_p1_ex5',
              'Un cache a un taux de succès h = 0,9, un temps d’accès de 2 ns, et la mémoire centrale répond en 50 ns. Quel est le temps d’accès moyen t = h·t_c + (1 − h)·t_m ?',
              ['6,8 ns', '26 ns', '45,2 ns', '2 ns'],
              0, r`$0{,}9\times2 + 0{,}1\times50 = 1{,}8 + 5 = 6{,}8\text{ ns}$ : bien plus proche du cache que de la mémoire.`,
              r`$0{,}1\times50 = 5$.`)),
          step(6, 'piege', '256 couleurs', 'Taille d’une image et débit',
            r`Piège : « 256 couleurs » ne veut pas dire 256 octets par pixel ! Il faut $\log_2 256 = 8$ bits, soit **1 octet par pixel**. Taille d’une image = nombre de pixels × octets par pixel ; débit = taille × images par seconde.`,
            qcm('lmd_srit_l1_archi_ch5_p1_ex6',
              'Un film non compressé est formé d’images de 1024 × 768 pixels en 256 couleurs. Quelle est la taille d’une image (1 Ko = 1024 octets) ?',
              ['196 608 Ko', '768 Ko', '6 144 Ko', '96 Ko'],
              1, r`256 couleurs = 8 bits = 1 octet par pixel : $1024\times768 = 786\,432$ octets $= 768\text{ Ko}$. À 24 images/s, il faut environ 18 Mo/s.`,
              '256 = 2⁸ : combien de bits par pixel ?')),
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 6 : LE MICROPROCESSEUR
  // ==========================================================================
  {
    id: 'lmd_srit_l1_archi_ch6',
    subjectId: 'lmd_archi_ordinateurs',
    gradeLevel: 'lmd_srit_l1',
    semesters: [1],
    order: 6,
    officialVolumeHours: 10,
    contentVersion: 2,
    source: SOURCE,
    title: 'Le microprocesseur',
    summary: 'Format et jeu d’instructions, programme en langage d’assemblage, modes d’adressage, registres ; performances (CPI, MIPS) et pipeline.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_archi_ch6_p1',
        order: 1,
        title: 'Instructions et langage d’assemblage',
        summary: 'Code opération et champ adresse, taille du jeu d’instructions, lecture d’un petit programme, modes d’adressage, registres et indicateurs.',
        conceptExplanation: r`Une instruction machine est un mot binaire découpé en champs : un **code opération** (opcode), qui dit quoi faire, et un ou plusieurs **opérandes** (souvent une adresse). Le **jeu d’instructions** est l’ensemble des instructions que le processeur comprend. On les écrit en **langage d’assemblage** avec des mnémoniques (LOAD, ADD, STORE, JUMP…).`,
        formulas: [
          { name: 'Taille du jeu d’instructions', formula: r`\text{opcode sur } k \text{ bits} \Rightarrow 2^{k} \text{ instructions possibles}` },
          { name: 'Adresses accessibles', formula: r`\text{champ adresse sur } p \text{ bits} \Rightarrow 2^{p} \text{ adresses}` },
        ],
        keyRule: 'LOAD charge une valeur de la mémoire dans l’accumulateur, STORE range l’accumulateur en mémoire.',
        workedExample: {
          title: 'Lire un programme',
          statement: r`Un processeur à accumulateur A exécute : LOAD $(130)_H$, ADD $(131)_H$, STORE $(133)_H$. Que fait ce programme ?`,
          methodSteps: [
            r`LOAD $(130)_H$ : A reçoit le mot rangé à l’adresse $130_H$.`,
            r`ADD $(131)_H$ : on ajoute à A le mot rangé à l’adresse $131_H$.`,
            r`STORE $(133)_H$ : on range A à l’adresse $133_H$.`,
          ],
          conclusion: r`Le programme calcule $M[133_H] = M[130_H] + M[131_H]$.`,
        },
        structuredSteps: [
          step(1, 'definition', 'Format', 'Le format d’une instruction',
            r`Exemple : instruction sur 16 bits, dont les 4 bits de poids fort forment l’**opcode** et les 12 bits restants l’**adresse**. Avec 4 bits d’opcode, on peut coder $2^{4} = 16$ instructions différentes.`,
            qcm('lmd_srit_l1_archi_ch6_p1_ex1',
              'Un processeur code ses instructions sur 16 bits : 4 bits de code opération et 12 bits d’adresse. Combien d’instructions différentes son jeu d’instructions peut-il compter au maximum ?',
              ['4', '12', '16', '4096'],
              2, r`L’opcode fait 4 bits : $2^{4} = 16$ codes possibles, donc au plus 16 instructions.`,
              'Seul le champ code opération compte ici.')),
          step(2, 'propriete', 'Adresses', 'Les adresses accessibles',
            r`Le champ adresse limite la mémoire que l’instruction peut atteindre directement : avec $p$ bits, $2^{p}$ adresses. Pour aller plus loin, on utilise d’autres modes d’adressage (indirect, par registre).`,
            qcm('lmd_srit_l1_archi_ch6_p1_ex2',
              'Une instruction de 16 bits contient un champ adresse de 12 bits. À combien d’adresses mémoire différentes peut-elle faire référence ?',
              ['12', '4096', '65 536', '16'],
              1, r`$2^{12} = 4096$ adresses différentes.`,
              r`Calcule $2^{12}$.`)),
          step(3, 'methode', 'Programme', 'Lire un programme en assembleur',
            r`Méthode : suis l’évolution de l’accumulateur ligne par ligne. **LOAD x** : A ← M[x]. **ADD x** : A ← A + M[x]. **STORE x** : M[x] ← A. Le suffixe H indique une adresse en hexadécimal.`,
            qcm('lmd_srit_l1_archi_ch6_p1_ex3',
              'Un processeur à accumulateur exécute : LOAD (130)H, puis ADD (131)H, puis STORE (133)H. Que fait ce programme ?',
              ['Il range à l’adresse 133H la somme des mots des adresses 130H et 131H', 'Il copie l’adresse 130H dans 131H', 'Il ajoute 130 et 131 et range 261 en 133H', 'Il efface les adresses 130H à 133H'],
              0, r`A ← M[130H] ; A ← A + M[131H] ; M[133H] ← A. Donc $M[133_H] = M[130_H] + M[131_H]$ : on additionne les CONTENUS des cases, pas les adresses.`,
              'LOAD lit le contenu de la case, pas son numéro.')),
          step(4, 'propriete', 'Adressage', 'Les modes d’adressage',
            r`**Immédiat** : l’opérande est la valeur elle-même (ADD 5 en mode immédiat ajoute le nombre 5). **Direct** : l’opérande est l’adresse de la valeur (ADD [5] ajoute le contenu de la case 5). **Indirect** : l’opérande est l’adresse d’une case qui contient l’adresse de la valeur.`,
            qcm('lmd_srit_l1_archi_ch6_p1_ex4',
              'Un processeur exécute l’instruction « ADD 5 » en mode d’adressage IMMÉDIAT. Que fait cette instruction ?',
              ['Elle ajoute à l’accumulateur le contenu de la case 5', 'Elle ajoute 5 à l’accumulateur', 'Elle range l’accumulateur dans la case 5', 'Elle saute à l’instruction 5'],
              1, 'En adressage immédiat, l’opérande est la valeur elle-même : on ajoute le nombre 5 à l’accumulateur.',
              'Immédiat : la valeur est directement dans l’instruction.')),
          step(5, 'exemple', 'Indicateurs', 'Le registre d’état',
            r`Après chaque opération, l’UAL met à jour des **indicateurs** (drapeaux) dans le registre d’état : **Z** (résultat nul), **N** (résultat négatif), **C** (retenue), **V** (débordement en CA2). Les instructions de saut conditionnel les testent (« sauter si zéro »).`,
            qcm('lmd_srit_l1_archi_ch6_p1_ex5',
              'Le processeur calcule 7 − 7. Quel indicateur du registre d’état est mis à 1 ?',
              ['Z (zéro)', 'N (négatif)', 'V (débordement)', 'Aucun'],
              0, 'Le résultat vaut 0 : l’indicateur Z passe à 1. Le résultat n’est ni négatif, ni en débordement.',
              'Que vaut le résultat ?')),
          step(6, 'piege', 'Saut', 'Les instructions de saut modifient le CO',
            r`Piège : normalement, le compteur ordinal (CO) est simplement **incrémenté** pendant la recherche de l’instruction. Une instruction de **saut** (JUMP, branchement) écrit une nouvelle adresse dans le CO : c’est ainsi qu’on réalise les boucles et les « si ».`,
            qcm('lmd_srit_l1_archi_ch6_p1_ex6',
              'Quel type d’instruction modifie directement la valeur du compteur ordinal (autrement que par l’incrémentation normale) ?',
              ['Une addition (ADD)', 'Un chargement (LOAD)', 'Un saut (JUMP)', 'Un rangement (STORE)'],
              2, 'Un saut place une nouvelle adresse dans le CO : l’instruction suivante exécutée n’est plus celle qui suit en mémoire.',
              'Laquelle change l’ordre d’exécution ?')),
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_archi_ch6_p2',
        order: 2,
        title: 'Performances et pipeline',
        summary: 'CPI, MIPS, temps d’exécution d’un programme, pipeline à 5 étages, nombre de cycles, RISC et CISC.',
        conceptExplanation: r`La performance d’un processeur dépend de sa **fréquence** $f$ et du nombre moyen de cycles par instruction (**CPI**). On l’exprime en **MIPS** (millions d’instructions par seconde). Le **pipeline** découpe l’exécution des instructions en étages qui travaillent en parallèle, comme une chaîne de montage : on termine presque une instruction par cycle.`,
        formulas: [
          { name: 'MIPS', formula: r`\text{MIPS} = \frac{f}{\text{CPI}\times10^{6}}` },
          { name: 'Temps d’exécution', formula: r`T = \frac{N\times\text{CPI}}{f}` },
          { name: 'Pipeline à k étages', formula: r`\text{sans pipeline : } k\,n \text{ cycles} \quad ; \quad \text{avec : } k + n - 1 \text{ cycles}` },
        ],
        keyRule: 'Un pipeline n’accélère pas une instruction seule : il augmente le nombre d’instructions terminées par cycle.',
        workedExample: {
          title: 'Fréquence d’un processeur',
          statement: r`Un processeur atteint 500 MIPS avec un CPI de 5. Quelle est sa fréquence ?`,
          methodSteps: [
            r`$\text{MIPS} = \frac{f}{\text{CPI}\times10^{6}}$, donc $f = \text{MIPS}\times\text{CPI}\times10^{6}$.`,
            r`$f = 500\times5\times10^{6} = 2{,}5\times10^{9}\text{ Hz}$.`,
          ],
          conclusion: r`$f = 2{,}5\text{ GHz}$.`,
        },
        visualSchema: { type: 'custom_svg', title: 'Pipeline à 5 étages', svgContent: SVG_PIPELINE },
        structuredSteps: [
          step(1, 'definition', 'CPI et MIPS', 'Mesurer la performance',
            r`Le **CPI** (Cycles Per Instruction) est le nombre moyen de cycles d’horloge pour exécuter une instruction. Le **MIPS** (Millions d’Instructions Par Seconde) vaut $\frac{f}{\text{CPI}\times10^{6}}$. À fréquence égale, un CPI plus petit donne un processeur plus rapide.`,
            qcm('lmd_srit_l1_archi_ch6_p2_ex1',
              'Un processeur a une performance de 500 MIPS avec un CPI de 5. Quelle est sa fréquence d’horloge (MIPS = f / (CPI × 10⁶)) ?',
              ['100 MHz', '2,5 GHz', '505 MHz', '1 GHz'],
              1, r`$f = 500\times5\times10^{6} = 2\,500\times10^{6}\text{ Hz} = 2{,}5\text{ GHz}$.`,
              'Multiplie MIPS par CPI.')),
          step(2, 'methode', 'Temps', 'Le temps d’exécution d’un programme',
            r`Un programme de $N$ instructions demande $N\times\text{CPI}$ cycles, chacun durant $\frac{1}{f}$ : $T = \frac{N\times\text{CPI}}{f}$. Pour aller plus vite : augmenter $f$, réduire le CPI (meilleure architecture) ou réduire $N$ (meilleur compilateur).`,
            qcm('lmd_srit_l1_archi_ch6_p2_ex2',
              'Un programme de 10⁹ instructions s’exécute sur un processeur à 2 GHz avec un CPI moyen de 2. Combien de temps dure son exécution ?',
              ['0,5 s', '4 s', '1 s', '2 s'],
              2, r`$T = \frac{10^{9}\times2}{2\times10^{9}} = 1\text{ s}$.`,
              r`$T = \frac{N\times\text{CPI}}{f}$.`)),
          step(3, 'propriete', 'Pipeline', 'Le pipeline à 5 étages',
            r`Le pipeline classique des processeurs RISC a 5 étages : **IF** (lecture de l’instruction), **ID** (décodage), **EX** (exécution par l’UAL), **MEM** (accès mémoire), **WB** (écriture du résultat dans un registre). Chaque étage traite une instruction différente au même moment.`,
            qcm('lmd_srit_l1_archi_ch6_p2_ex3',
              'On exécute 3 instructions sur un processeur dont chaque instruction passe par 5 étages d’un cycle chacun. Combien de cycles faut-il sans pipeline, puis avec un pipeline ?',
              ['15 cycles sans, 7 avec', '15 cycles sans, 5 avec', '8 cycles sans, 7 avec', '15 cycles sans, 15 avec'],
              0, r`Sans pipeline : $3\times5 = 15$ cycles. Avec : la première instruction finit au cycle 5, puis une instruction se termine à chaque cycle : $5 + 3 - 1 = 7$ cycles.`,
              'Avec pipeline : k + n − 1.')),
          step(4, 'methode', 'Généralisation', 'Le gain d’un pipeline',
            r`Pour $n$ instructions et $k$ étages : $k\,n$ cycles sans pipeline, $k + n - 1$ avec. Quand $n$ est grand, le gain $\frac{k\,n}{k + n - 1}$ tend vers $k$ : un pipeline à 5 étages va presque 5 fois plus vite. Tous les étages sont occupés à partir du cycle $k$.`,
            qcm('lmd_srit_l1_archi_ch6_p2_ex4',
              'Un pipeline a 5 étages d’un cycle chacun. Combien de cycles faut-il pour exécuter 100 instructions (sans aléa) ?',
              ['500', '100', '105', '104'],
              3, r`$k + n - 1 = 5 + 100 - 1 = 104$ cycles, au lieu de 500 sans pipeline.`,
              r`Utilise $k + n - 1$.`)),
          step(5, 'exemple', 'RISC et CISC', 'Deux philosophies de processeurs',
            r`Les processeurs **RISC** (jeu d’instructions réduit : ARM des téléphones) ont peu d’instructions, simples et de même taille, faciles à pipeliner. Les **CISC** (jeu d’instructions complexe : x86 des PC) ont beaucoup d’instructions de tailles variées, plus puissantes mais plus longues à décoder.`,
            qcm('lmd_srit_l1_archi_ch6_p2_ex5',
              'Quelle caractéristique correspond à un processeur RISC ?',
              ['Un très grand nombre d’instructions complexes', 'Des instructions simples, de taille fixe, faciles à pipeliner', 'Des instructions de tailles très variées', 'L’absence de registres'],
              1, 'RISC = Reduced Instruction Set Computer : peu d’instructions, simples et régulières, ce qui permet un pipeline efficace.',
              'R pour « Reduced ».')),
          step(6, 'piege', 'Latence', 'Le pipeline n’accélère pas une instruction seule',
            r`Piège : le pipeline ne raccourcit pas le temps de **traversée** d’une instruction (sa latence reste de $k$ cycles). Il augmente le **débit** : plusieurs instructions avancent en même temps. De plus, des dépendances entre instructions (aléas) peuvent forcer des cycles d’attente.`,
            qcm('lmd_srit_l1_archi_ch6_p2_ex6',
              'Combien de cycles faut-il pour exécuter UNE SEULE instruction sur un pipeline à 5 étages d’un cycle chacun ?',
              ['1 cycle', '5 cycles', '0,2 cycle', '10 cycles'],
              1, r`Une instruction seule doit traverser les 5 étages : $5 + 1 - 1 = 5$ cycles. Le pipeline n’aide que lorsqu’il y a beaucoup d’instructions à la suite.`,
              r`$k + n - 1$ avec $n = 1$.`)),
        ],
      }),
    ],
  },
];
