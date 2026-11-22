/**
 * Microéconomie 2 (ENTD L1, semestre 2) — théorie du producteur, chapitres 5 à 7.
 * Rédigé d'après le support de Microéconomie Licence 1 ENTD (partie II « Théorie de l'offre des firmes » :
 * facteurs et fonctions de production, courte période, long terme, coûts) et calé sur l'examen de session 1
 * et le contrôle continu n° 1 de Microéconomie 2025-2026 (définitions, productivités, isoquantes, TMST,
 * isocoût, sentier d'expansion, rendements d'échelle, seuil de rentabilité, fonction d'offre).
 * Erreur du support corrigée : « si α < 0, rendements décroissants et profit positif » → il s'agit de α < 1
 * (degré d'homogénéité inférieur à 1).
 */
import type { CurriculumChapter, CurriculumPoint, StructuredLessonStep } from '../../../../lib/curriculum/types';

const makePoint = (
  p: Omit<CurriculumPoint, 'exercises'> & { structuredSteps: StructuredLessonStep[] },
): CurriculumPoint => ({
  ...p,
  exercises: p.structuredSteps.map((s) => s.exercise),
});

const C5 = 'lmd_entd_l1_microeconomie_ch5';
const C6 = 'lmd_entd_l1_microeconomie_ch6';
const C7 = 'lmd_entd_l1_microeconomie_ch7';

export const MICRO_PRODUCTEUR_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  // ==========================================================================
  // CHAPITRE 5 : FACTEURS ET FONCTION DE PRODUCTION DE COURTE PÉRIODE
  // ==========================================================================
  {
    id: C5,
    subjectId: 'lmd_microeconomie',
    gradeLevel: 'lmd_entd_l1',
    order: 5,
    semesters: [2],
    title: 'Chapitre 5 : Facteurs, fonction de production et courte période (productivités, loi des rendements décroissants)',
    summary:
      'Facteurs fixes et variables, technique, technologie, ensemble et fonction de production, propriétés des facteurs, axiome de non-gaspillage, productivités totale, moyenne et marginale, trois phases de la production et élasticité de la production.',
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'ENTD L1 — Microéconomie 2',
    points: [
      makePoint({
        id: `${C5}_p1`,
        order: 1,
        title: 'Facteurs, techniques et ensemble de production',
        summary: 'Facteur fixe ou variable, technique, technologie, ensemble et fonction de production, divisibilité, adaptabilité, substituabilité, non-gaspillage, court terme et long terme.',
        conceptExplanation:
          'La firme transforme des **facteurs de production** (inputs : travail, capital, matières) en un **produit** (output). Pour une période donnée, un facteur est **fixe** si sa quantité ne peut pas être modifiée (bâtiments, gros équipements) et **variable** s’il peut l’être presque immédiatement (travail, certaines matières).\n\n' +
          'Une **technique** est une manière particulière de combiner les facteurs ; la **technologie** est l’ensemble de toutes les techniques connues. L’**ensemble de production** regroupe toutes les combinaisons d’inputs et d’output techniquement réalisables ; sa frontière est la **fonction de production**, qui donne la quantité **maximale** produite avec chaque combinaison de facteurs.\n\n' +
          'À **court terme**, au moins un facteur est fixe ; à **long terme**, tous les facteurs sont variables.',
        keyRule: 'Court terme : au moins un facteur fixe. Long terme : tous les facteurs variables. La fonction de production = frontière de l’ensemble de production.',
        workedExample: {
          title: 'Reconnaître l’horizon d’une fonction de production',
          statement:
            'Soit la fonction de production $y(y_1, y_2) = (y_1 - \\alpha)^{1/2} y_2^{1/4}$, où $y_1$ et $y_2$ sont les quantités des facteurs 1 et 2. On suppose $y_2 = 1$. À quel horizon temporel cette hypothèse renvoie-t-elle ?',
          methodSteps: [
            'Fixer $y_2 = 1$ revient à bloquer la quantité du facteur 2 : il devient un facteur fixe.',
            'Seul le facteur 1 peut varier : $y = (y_1 - \\alpha)^{1/2}$.',
            'Une période où au moins un facteur est fixe est le court terme.',
          ],
          conclusion: 'L’hypothèse $y_2 = 1$ correspond à la courte période (un seul facteur variable).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Facteurs',
            stepTheme: 'Fixe ou variable',
            stepTitle: 'Facteur de production fixe ou variable',
            paragraphText:
              '• **Facteur de production (input)** : bien ou service qui contribue à fabriquer un produit (output). Exemple : le manioc est un input pour le producteur d’attiéké.\n' +
              '• **Facteur fixe** : sa quantité **ne peut pas être modifiée à court terme**, même si la production doit changer (bâtiments, équipements lourds).\n' +
              '• **Facteur variable** : sa quantité peut être ajustée presque immédiatement (heures de travail, certaines matières premières).',
            exercise: {
              id: `${C5}_p1_q1`,
              type: 'mcq',
              prompt: 'En théorie du producteur, qu’est-ce qu’un facteur de production fixe ?',
              options: [
                'Un facteur dont le prix ne change jamais',
                'Un facteur dont la quantité ne peut pas être modifiée à court terme',
                'Un facteur qui produit toujours la même quantité d’output',
                'Un facteur qui ne sert à rien dans la production',
              ],
              correctAnswerIndex: 1,
              explanation: 'Un facteur fixe est un facteur dont la quantité utilisée ne peut pas varier à court terme (par exemple la taille de l’usine).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Technique',
            stepTheme: 'Technique et technologie',
            stepTitle: 'Technique, technologie',
            paragraphText:
              '• **Technique** : méthode particulière de **combinaison des facteurs** pour obtenir le produit (exemple : culture à la daba, culture attelée ou culture motorisée).\n' +
              '• **Technologie** : **liste de toutes les techniques connues** à un moment donné.\n' +
              '• La technologie impose des **contraintes** : seules certaines combinaisons d’inputs permettent d’obtenir une quantité donnée d’output.',
            exercise: {
              id: `${C5}_p1_q2`,
              type: 'mcq',
              prompt: 'En microéconomie de la production, à quoi correspond la technologie d’une économie ?',
              options: ['À une seule méthode de production', 'À l’ensemble des techniques connues', 'Aux machines utilisées uniquement', 'Au coût total de production'],
              correctAnswerIndex: 1,
              explanation: 'Une technique est une méthode de combinaison des facteurs ; la technologie est l’ensemble de toutes les techniques connues.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Ensemble',
            stepTheme: 'Ensemble de production',
            stepTitle: 'Ensemble de production et fonction de production',
            paragraphText:
              '• **Ensemble de production** : ensemble de **toutes les combinaisons d’inputs et d’outputs techniquement réalisables**.\n' +
              '• **Fonction de production** : la **frontière** de cet ensemble. Elle donne la quantité **maximale** d’output obtenue avec chaque combinaison de facteurs, en utilisant les meilleures techniques : $y = f(x_1, x_2)$.\n' +
              '• Un point **sous** la frontière est réalisable mais inefficace ; un point **au-dessus** est irréalisable.',
            keyRule: 'La fonction de production décrit la relation entre les quantités de facteurs et la quantité maximale produite.',
            exercise: {
              id: `${C5}_p1_q3`,
              type: 'mcq',
              prompt: 'En théorie du producteur, que désigne l’ensemble de production ?',
              options: [
                'Les quantités vendues par l’entreprise',
                'Les recettes de l’entreprise',
                'L’ensemble des combinaisons d’inputs et d’outputs techniquement réalisables',
                'Les profits réalisés par l’entreprise',
              ],
              correctAnswerIndex: 2,
              explanation: 'L’ensemble de production regroupe tous les plans de production techniquement réalisables ; sa frontière est la fonction de production.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Propriétés',
            stepTheme: 'Qualités des facteurs',
            stepTitle: 'Divisibilité, adaptabilité, substituabilité',
            paragraphText:
              '• **Divisibilité** : le facteur peut être utilisé **en petites quantités** (heures de travail, kilos d’engrais).\n' +
              '• **Adaptabilité** : possibilité d’**associer différentes quantités d’autres facteurs** à une quantité donnée de ce facteur.\n' +
              '• **Substituabilité** : un facteur peut en **remplacer un autre à production constante** (plus de machines, moins de travail).',
            exercise: {
              id: `${C5}_p1_q4`,
              type: 'mcq',
              prompt: 'En théorie de la production, que signifie la substituabilité des facteurs de production ?',
              options: [
                'Que les facteurs sont identiques',
                'Qu’un facteur peut en remplacer un autre à production constante',
                'Que tous les facteurs sont fixes',
                'Que les facteurs ont le même prix',
              ],
              correctAnswerIndex: 1,
              explanation: 'Deux facteurs sont substituables quand on peut diminuer l’un et augmenter l’autre sans changer la quantité produite.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Non-gaspillage',
            stepTheme: 'Axiome',
            stepTitle: 'L’axiome de non-gaspillage (libre disposition)',
            paragraphText:
              '• Si l’on augmente la quantité d’au moins un facteur, on peut **produire au moins autant** qu’avant : un facteur supplémentaire ne peut pas nuire, puisqu’on peut ne pas l’utiliser.\n' +
              '• Conséquence pratique : la productivité marginale du facteur est **positive ou nulle**, $Pm_1 = \\dfrac{\\partial y}{\\partial y_1} \\geq 0$.\n' +
              '• Pour **vérifier** l’axiome pour le facteur 1 : calculer $Pm_1$ et montrer qu’il n’est jamais négatif.',
            keyRule: 'Axiome de non-gaspillage respecté pour un facteur ⇔ sa productivité marginale est ≥ 0.',
            exercise: {
              id: `${C5}_p1_q5`,
              type: 'mcq',
              prompt:
                'Pour la fonction de production $y = (y_1 - \\alpha)^{1/2}$ (facteur 2 fixé à 1), on trouve $Pm_1 = \\dfrac{1}{2\\sqrt{y_1 - \\alpha}}$ pour $y_1 > \\alpha$. L’axiome de non-gaspillage est-il respecté pour le facteur 1 ?',
              options: [
                'Oui, car $Pm_1 > 0$ : utiliser plus du facteur 1 n’abaisse jamais la production',
                'Non, car $Pm_1$ diminue quand $y_1$ augmente',
                'Non, car $\\alpha$ est de signe indéterminé',
                'On ne peut pas conclure sans connaître le prix P',
              ],
              correctAnswerIndex: 0,
              explanation: 'La racine carrée est positive, donc $Pm_1 > 0$ : la production ne baisse jamais quand on ajoute du facteur 1. Une Pm décroissante ne viole pas l’axiome, seule une Pm négative le ferait.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Horizon',
            stepTheme: 'Court ou long terme',
            stepTitle: 'Court terme ou long terme ?',
            paragraphText:
              '• **Court terme** : période où **au moins un facteur est fixe** ; la production ne varie que par les facteurs variables : $y = F(x_1, \\bar{x}_2)$.\n' +
              '• **Long terme** : période où **tous les facteurs sont variables** : $y = F(x_1, x_2, \\dots, x_n)$.\n' +
              '• Piège d’examen : « on suppose $y_2 = 1$ » ou « le capital est fixé à $\\bar{K}$ » signifie **court terme**.',
            exercise: {
              id: `${C5}_p1_q6`,
              type: 'mcq',
              prompt:
                'Soit la fonction de production $y(y_1, y_2) = (y_1 - \\alpha)^{1/2} y_2^{1/4}$. On suppose, pour cette seule question, que $y_2 = 1$. À quel horizon temporel cette hypothèse fait-elle référence ?',
              options: [
                'Au long terme, car tous les facteurs sont variables',
                'Au court terme, car le facteur 2 est fixe',
                'À la très longue période, car la technologie change',
                'À aucun horizon, c’est une simple normalisation des prix',
              ],
              correctAnswerIndex: 1,
              explanation: 'Fixer $y_2 = 1$ bloque la quantité du facteur 2 : un facteur est fixe, c’est donc la courte période.',
            },
          },
        ],
      }),

      makePoint({
        id: `${C5}_p2`,
        order: 2,
        title: 'Produit total, productivité moyenne et productivité marginale',
        summary: 'Définitions de PT, PM et Pm, calcul sur une fonction, relations entre les courbes, maximum de PM et de PT.',
        conceptExplanation:
          'À court terme, avec un seul facteur variable $x$, on étudie trois grandeurs :\n\n' +
          '• le **produit total** $PT(x)$ : la quantité produite ;\n' +
          '• la **productivité moyenne** $PM = \\dfrac{PT}{x}$ : production par unité de facteur ;\n' +
          '• la **productivité marginale** $Pm = \\dfrac{dPT}{dx}$ : production supplémentaire apportée par une unité de facteur en plus.\n\n' +
          'Trois relations à connaître : quand $PM$ augmente, $Pm > PM$ ; au **maximum de PM**, $Pm = PM$ ; au **maximum de PT**, $Pm = 0$. La courbe de $Pm$ atteint son maximum avant celle de $PM$.',
        keyRule: 'Pm coupe PM en son maximum ; Pm s’annule quand PT est maximal.',
        formulas: [
          { name: 'Productivité moyenne', formula: 'PM(x) = \\dfrac{PT(x)}{x}' },
          { name: 'Productivité marginale', formula: 'Pm(x) = \\dfrac{dPT}{dx}' },
        ],
        workedExample: {
          title: 'Étude de la fonction $PT(x) = 12x^2 - x^3$',
          statement: 'Une entreprise produit avec un seul facteur variable $x$ (le travail) selon $PT(x) = 12x^2 - x^3$. Calculer PM et Pm, puis le maximum de PM et le maximum de PT.',
          methodSteps: [
            '$PM = \\dfrac{12x^2 - x^3}{x} = 12x - x^2$ et $Pm = 24x - 3x^2$.',
            'Maximum de PM : $PM\' = 12 - 2x = 0$ donc $x = 6$ ; $PM(6) = 72 - 36 = 36$ ; on vérifie $Pm(6) = 144 - 108 = 36 = PM$.',
            'Maximum de PT : $Pm = 0$ soit $3x(8 - x) = 0$ donc $x = 8$ ; $PT(8) = 768 - 512 = 256$.',
          ],
          conclusion: 'PM est maximale pour $x = 6$ (36 unités par travailleur) et PT est maximal pour $x = 8$ (256 unités).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'PT, PM, Pm',
            stepTheme: 'Définitions',
            stepTitle: 'Produit total, moyen et marginal',
            paragraphText:
              '• **Produit total** $PT(x)$ : quantité produite avec $x$ unités de facteur variable.\n' +
              '• **Productivité moyenne** $PM = \\dfrac{PT}{x}$ : production moyenne par unité de facteur.\n' +
              '• **Productivité marginale** $Pm = \\dfrac{dPT}{dx}$ : supplément de production apporté par une unité de facteur en plus, les autres facteurs restant inchangés.',
            exercise: {
              id: `${C5}_p2_q1`,
              type: 'mcq',
              prompt: 'Que mesure la productivité marginale d’un facteur variable $x$ ?',
              options: [
                'La production totale divisée par la quantité de facteur',
                'Le supplément de production obtenu avec une unité de facteur en plus, les autres facteurs restant fixes',
                'Le coût d’une unité supplémentaire de produit',
                'La quantité de facteur nécessaire pour produire une unité',
              ],
              correctAnswerIndex: 1,
              explanation: '$Pm = \\dfrac{dPT}{dx}$ : c’est l’accroissement de production dû à une unité supplémentaire de facteur variable, toutes choses égales par ailleurs.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Calcul',
            stepTheme: 'PM et Pm',
            stepTitle: 'Calculer PM et Pm sur une fonction',
            paragraphText:
              'Méthode : diviser PT par $x$ pour PM, dériver PT pour Pm.\n' +
              '• Exemple : $PT(x) = 12x^2 - x^3$.\n' +
              '• $PM = 12x - x^2$ et $Pm = 24x - 3x^2$.\n' +
              '• Pour $x = 2$ : $PM = 24 - 4 = 20$ et $Pm = 48 - 12 = 36$.',
            exercise: {
              id: `${C5}_p2_q2`,
              type: 'mcq',
              prompt: 'La production d’une entreprise est $PT(x) = 12x^2 - x^3$, où $x$ est le facteur variable. Que valent la productivité moyenne et la productivité marginale pour $x = 2$ ?',
              options: ['$PM = 20$ et $Pm = 36$', '$PM = 36$ et $Pm = 20$', '$PM = 40$ et $Pm = 36$', '$PM = 20$ et $Pm = 24$'],
              correctAnswerIndex: 0,
              explanation: '$PM = 12x - x^2 = 24 - 4 = 20$ ; $Pm = 24x - 3x^2 = 48 - 12 = 36$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Relations',
            stepTheme: 'Courbes',
            stepTitle: 'Relations entre PT, PM et Pm',
            paragraphText:
              '• Tant que **PM augmente**, $Pm > PM$ (la dernière unité tire la moyenne vers le haut).\n' +
              '• Au **maximum de PM**, $Pm = PM$ : la courbe de Pm coupe celle de PM en son sommet.\n' +
              '• Quand **PM diminue**, $Pm < PM$.\n' +
              '• Au **maximum de PT**, $Pm = 0$ ; au-delà, $Pm < 0$.\n' +
              '• Pm atteint son maximum **avant** PM.',
            visualSchema: {
              type: 'function_plot',
              title: 'PM et Pm pour PT(x) = 12x² − x³',
              caption: 'Pm (violet) coupe PM (bleu) au maximum de PM (x = 6) et s’annule en x = 8, où PT est maximal.',
              plot: {
                xMin: 0,
                xMax: 9,
                yMin: -30,
                yMax: 50,
                xStep: 1,
                yStep: 10,
                xLabel: 'x',
                yLabel: 'y',
                curves: [
                  { label: 'PM', color: 'blue', pieces: [{ expr: '12x-x^2', from: 0, to: 9 }] },
                  { label: 'Pm', color: 'violet', pieces: [{ expr: '24x-3x^2', from: 0, to: 9 }] },
                ],
                points: [
                  { x: 6, y: 36, label: 'max PM', color: 'blue' },
                  { x: 8, y: 0, label: 'Pm = 0', color: 'violet' },
                ],
              },
            },
            exercise: {
              id: `${C5}_p2_q3`,
              type: 'mcq',
              prompt: 'À court terme, avec un seul facteur variable, que vaut la productivité marginale au point où la productivité moyenne est maximale ?',
              options: ['Elle est nulle', 'Elle est égale à la productivité moyenne', 'Elle est maximale', 'Elle est négative'],
              correctAnswerIndex: 1,
              explanation: 'La courbe de Pm coupe la courbe de PM en son maximum : à ce point, $Pm = PM$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Max PM',
            stepTheme: 'Optimum technique',
            stepTitle: 'Trouver le maximum de la productivité moyenne',
            paragraphText:
              'Deux méthodes équivalentes :\n' +
              '• dériver PM et chercher $PM\' = 0$ ;\n' +
              '• ou résoudre $Pm = PM$.\n' +
              '• Exemple : $PM = 12x - x^2$ ; $PM\' = 12 - 2x = 0$ donc $x = 6$ et $PM = 36$. Vérification : $Pm(6) = 144 - 108 = 36$.',
            exercise: {
              id: `${C5}_p2_q4`,
              type: 'mcq',
              prompt: 'Pour la fonction de production de courte période $PT(x) = 12x^2 - x^3$, pour quelle quantité de facteur $x$ la productivité moyenne est-elle maximale, et que vaut-elle ?',
              options: ['$x = 4$ et $PM = 32$', '$x = 6$ et $PM = 36$', '$x = 8$ et $PM = 32$', '$x = 12$ et $PM = 0$'],
              correctAnswerIndex: 1,
              explanation: '$PM = 12x - x^2$ ; $PM\' = 12 - 2x = 0$ pour $x = 6$ ; $PM(6) = 72 - 36 = 36$. On vérifie que $Pm(6) = 36 = PM$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Max PT',
            stepTheme: 'Pm = 0',
            stepTitle: 'Trouver le maximum du produit total',
            paragraphText:
              '• Le produit total est maximal quand la productivité marginale **s’annule** : $Pm = 0$.\n' +
              '• Exemple : $Pm = 24x - 3x^2 = 3x(8 - x) = 0$ donc $x = 8$.\n' +
              '• $PT(8) = 12 \\times 64 - 512 = 768 - 512 = 256$.',
            exercise: {
              id: `${C5}_p2_q5`,
              type: 'mcq',
              prompt: 'La production d’une firme est $PT(x) = 12x^2 - x^3$ ($x$ = facteur variable). Quelle est la production maximale que la firme peut atteindre ?',
              options: ['$256$, pour $x = 8$', '$216$, pour $x = 6$', '$128$, pour $x = 4$', '$288$, pour $x = 12$'],
              correctAnswerIndex: 0,
              explanation: 'PT est maximal quand $Pm = 24x - 3x^2 = 0$, soit $x = 8$ ; $PT(8) = 768 - 512 = 256$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Graphique',
            stepTheme: 'Pentes',
            stepTitle: 'Lire PM et Pm sur la courbe de PT',
            paragraphText:
              '• **PM** en un point de la courbe de PT = **pente du rayon** qui part de l’origine et passe par ce point.\n' +
              '• **Pm** en un point = **pente de la tangente** à la courbe de PT en ce point.\n' +
              '• La courbe de PT a une forme en S : la pente (Pm) est maximale au **point d’inflexion**.',
            exercise: {
              id: `${C5}_p2_q6`,
              type: 'mcq',
              prompt: 'Sur le graphique de la courbe de produit total PT, comment lit-on la productivité marginale en un point ?',
              options: [
                'C’est la pente du rayon qui part de l’origine et passe par ce point',
                'C’est la pente de la tangente à la courbe de PT en ce point',
                'C’est la hauteur du point au-dessus de l’axe des abscisses',
                'C’est l’aire sous la courbe de PT',
              ],
              correctAnswerIndex: 1,
              explanation: 'La productivité marginale est une dérivée : la pente de la tangente. La pente du rayon issu de l’origine donne la productivité moyenne.',
            },
          },
        ],
      }),

      makePoint({
        id: `${C5}_p3`,
        order: 3,
        title: 'Loi des rendements décroissants, trois phases et élasticité de la production',
        summary: 'Loi des rendements marginaux décroissants, phases I, II et III, zone efficiente, élasticité de la production par rapport à un facteur.',
        conceptExplanation:
          'Selon la **loi des rendements marginaux décroissants**, si l’on augmente un seul facteur en gardant les autres constants, la productivité marginale de ce facteur finit par diminuer (encombrement, sous-utilisation).\n\n' +
          'On distingue **trois phases** : la phase I (PM croissante), la phase II (de PM maximale jusqu’à PT maximal, $Pm$ entre 0 et PM) et la phase III ($Pm < 0$). Le producteur rationnel produit en **phase II**, la zone efficiente.\n\n' +
          'L’**élasticité de la production** par rapport au facteur $x$ mesure la variation en % de la production quand le facteur augmente de 1 % : $e = \\dfrac{dy / y}{dx / x} = \\dfrac{Pm}{PM}$.',
        keyRule: 'Zone efficiente = phase II : entre le maximum de PM et le maximum de PT. Élasticité de la production = Pm / PM.',
        formulas: [{ name: 'Élasticité de la production', formula: 'e_{y/x} = \\dfrac{dy/y}{dx/x} = \\dfrac{Pm}{PM}' }],
        workedExample: {
          title: 'Élasticité pour $y = (y_1 - \\alpha)^{1/2}$',
          statement: 'Avec le facteur 2 fixé à 1, la production est $y = (y_1 - \\alpha)^{1/2}$ pour $y_1 > \\alpha$. Calculer PM, Pm et l’élasticité de $y$ par rapport à $y_1$, puis sa limite quand $y_1$ tend vers $\\alpha$ (avec $\\alpha > 0$).',
          methodSteps: [
            '$PM_1 = \\dfrac{(y_1 - \\alpha)^{1/2}}{y_1}$ et $Pm_1 = \\dfrac{1}{2(y_1 - \\alpha)^{1/2}}$.',
            '$e = \\dfrac{Pm_1}{PM_1} = \\dfrac{1}{2(y_1 - \\alpha)^{1/2}} \\times \\dfrac{y_1}{(y_1 - \\alpha)^{1/2}} = \\dfrac{y_1}{2(y_1 - \\alpha)}$.',
            'Quand $y_1 \\to \\alpha$ avec $\\alpha > 0$, le numérateur tend vers $\\alpha > 0$ et le dénominateur vers $0^+$ : $e \\to +\\infty$.',
          ],
          conclusion: 'Près du seuil $y_1 = \\alpha$, une petite hausse du facteur 1 fait augmenter très fortement la production en pourcentage.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'Loi',
            stepTheme: 'Rendements décroissants',
            stepTitle: 'La loi des rendements marginaux décroissants',
            paragraphText:
              '• Si l’on maintient **constants tous les facteurs sauf un**, tout accroissement du facteur variable **au-delà d’un certain seuil** entraîne une **diminution** de sa productivité marginale.\n' +
              '• Raison : le facteur fixe (terrain, machines) est de plus en plus partagé, il y a encombrement.\n' +
              '• Exemple : ajouter des ouvriers sur une parcelle de 1 ha fait d’abord beaucoup augmenter la récolte, puis de moins en moins.',
            exercise: {
              id: `${C5}_p3_q1`,
              type: 'mcq',
              prompt: 'Que dit la loi des rendements marginaux décroissants ?',
              options: [
                'Le produit marginal augmente toujours',
                'Le produit marginal finit par diminuer lorsque le facteur variable augmente, les autres facteurs restant fixes',
                'Les coûts deviennent constants',
                'La production devient nulle',
              ],
              correctAnswerIndex: 1,
              explanation: 'Avec des facteurs fixes inchangés, chaque unité supplémentaire du facteur variable finit par rapporter de moins en moins : la Pm décroît.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: '3 phases',
            stepTheme: 'Zone efficiente',
            stepTitle: 'Les trois phases de la production',
            paragraphText:
              '• **Phase I** : de 0 au **maximum de PM**. PM augmente, donc le coût unitaire baisse : le producteur a intérêt à continuer.\n' +
              '• **Phase II** : du maximum de PM au **maximum de PT** ($0 \\leq Pm \\leq PM$) : **zone de production efficiente**.\n' +
              '• **Phase III** : au-delà du maximum de PT, $Pm < 0$ : on produirait plus avec moins de facteur. Le producteur n’y va jamais.',
            keyRule: 'Le producteur rationnel produit uniquement en phase II.',
            exercise: {
              id: `${C5}_p3_q2`,
              type: 'mcq',
              prompt: 'À court terme, dans quelle phase de la production un producteur rationnel choisit-il de se situer ?',
              options: [
                'Phase I, où la productivité moyenne augmente',
                'Phase II, entre le maximum de la productivité moyenne et le maximum du produit total',
                'Phase III, où la productivité marginale est négative',
                'Indifféremment dans n’importe quelle phase',
              ],
              correctAnswerIndex: 1,
              explanation: 'En phase III la Pm est négative (gaspillage) ; en phase I la PM croît encore (le coût unitaire baisse). La zone efficiente est la phase II.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Calcul',
            stepTheme: 'Bornes de la phase II',
            stepTitle: 'Déterminer la zone efficiente',
            paragraphText:
              'Méthode : borne gauche = maximum de PM ; borne droite = maximum de PT ($Pm = 0$).\n' +
              '• Exemple : $PT(x) = 12x^2 - x^3$ ; max de PM en $x = 6$ ; $Pm = 0$ en $x = 8$.\n' +
              '• Zone efficiente : $6 \\leq x \\leq 8$.',
            exercise: {
              id: `${C5}_p3_q3`,
              type: 'mcq',
              prompt: 'Pour $PT(x) = 12x^2 - x^3$, on a $PM = 12x - x^2$ (maximale en $x = 6$) et $Pm = 24x - 3x^2$. Quelle est la zone de production efficiente (phase II) ?',
              options: ['$0 \\leq x \\leq 6$', '$4 \\leq x \\leq 6$', '$6 \\leq x \\leq 8$', '$x \\geq 8$'],
              correctAnswerIndex: 2,
              explanation: 'La phase II va du maximum de PM ($x = 6$) au maximum de PT, où $Pm = 3x(8 - x) = 0$, soit $x = 8$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Élasticité',
            stepTheme: 'Production',
            stepTitle: 'Élasticité de la production par rapport à un facteur',
            paragraphText:
              '• Elle mesure de combien de % varie la production quand le facteur augmente de 1 %.\n' +
              '• $e = \\dfrac{dy / y}{dx / x} = \\dfrac{dy}{dx} \\times \\dfrac{x}{y} = \\dfrac{Pm}{PM}$.\n' +
              '• Exemple : $PT(x) = 12x^2 - x^3$, en $x = 4$ : $Pm = 96 - 48 = 48$ et $PM = 48 - 16 = 32$, donc $e = \\dfrac{48}{32} = 1{,}5$ : +1 % de facteur donne +1,5 % de production.',
            formula: { name: 'Élasticité', formula: 'e = \\dfrac{Pm}{PM}' },
            exercise: {
              id: `${C5}_p3_q4`,
              type: 'mcq',
              prompt: 'Pour $PT(x) = 12x^2 - x^3$, on a $Pm = 24x - 3x^2$ et $PM = 12x - x^2$. Que vaut l’élasticité de la production par rapport à $x$ pour $x = 4$ ?',
              options: ['$1{,}5$', '$0{,}67$', '$16$', '$48$'],
              correctAnswerIndex: 0,
              explanation: 'En $x = 4$ : $Pm = 96 - 48 = 48$ et $PM = 48 - 16 = 32$ ; $e = Pm/PM = 48/32 = 1{,}5$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Type examen',
            stepTheme: 'Fonction avec paramètre',
            stepTitle: 'PM, Pm et élasticité de $y = (y_1 - \\alpha)^{1/2}$',
            paragraphText:
              '• $PM_1 = \\dfrac{(y_1 - \\alpha)^{1/2}}{y_1}$.\n' +
              '• $Pm_1 = \\dfrac{1}{2}(y_1 - \\alpha)^{-1/2} = \\dfrac{1}{2(y_1 - \\alpha)^{1/2}}$.\n' +
              '• $e = \\dfrac{Pm_1}{PM_1} = \\dfrac{y_1}{2(y_1 - \\alpha)}$.',
            exercise: {
              id: `${C5}_p3_q5`,
              type: 'mcq',
              prompt: 'Le facteur 2 étant fixé à 1, la production est $y = (y_1 - \\alpha)^{1/2}$ pour $y_1 > \\alpha$. Quelle est l’élasticité de la production par rapport au facteur 1 ?',
              options: ['$\\dfrac{y_1}{2(y_1 - \\alpha)}$', '$\\dfrac{2(y_1 - \\alpha)}{y_1}$', '$\\dfrac{1}{2}$', '$\\dfrac{y_1 - \\alpha}{2 y_1}$'],
              correctAnswerIndex: 0,
              explanation: '$Pm_1 = \\dfrac{1}{2(y_1 - \\alpha)^{1/2}}$ et $PM_1 = \\dfrac{(y_1 - \\alpha)^{1/2}}{y_1}$ ; leur quotient vaut $\\dfrac{y_1}{2(y_1 - \\alpha)}$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Limite',
            stepTheme: 'Cas $y_1 \\to \\alpha$',
            stepTitle: 'Calculer l’élasticité quand $y_1$ tend vers $\\alpha$',
            paragraphText:
              '• Avec $e = \\dfrac{y_1}{2(y_1 - \\alpha)}$ et $\\alpha > 0$ : quand $y_1 \\to \\alpha$, le numérateur tend vers $\\alpha > 0$ et le dénominateur vers $0^+$.\n' +
              '• Donc $e \\to +\\infty$.\n' +
              '• Piège : ne pas répondre « 0 » ou « 1/2 » en remplaçant trop vite ; regarder le signe et la limite du dénominateur.',
            exercise: {
              id: `${C5}_p3_q6`,
              type: 'mcq',
              prompt: 'L’élasticité de la production par rapport au facteur 1 est $e = \\dfrac{y_1}{2(y_1 - \\alpha)}$, avec $y_1 > \\alpha$ et $\\alpha > 0$. Vers quoi tend $e$ quand $y_1$ tend vers $\\alpha$ ?',
              options: ['$0$', '$\\dfrac{1}{2}$', '$+\\infty$', '$\\alpha$'],
              correctAnswerIndex: 2,
              explanation: 'Le numérateur tend vers $\\alpha > 0$ et le dénominateur $2(y_1 - \\alpha)$ tend vers $0$ par valeurs positives : $e \\to +\\infty$.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 6 : LONG TERME — ISOQUANTES, OPTIMUM DU PRODUCTEUR, RENDEMENTS D'ÉCHELLE
  // ==========================================================================
  {
    id: C6,
    subjectId: 'lmd_microeconomie',
    gradeLevel: 'lmd_entd_l1',
    order: 6,
    semesters: [2],
    title: 'Chapitre 6 : Production de long terme (isoquantes, TMST, optimum du producteur, rendements d’échelle)',
    summary:
      'Isoquantes et leurs propriétés, technologies de Léontief et substituts parfaits, TMST, droite d’isocoût, optimum du producteur, sentier d’expansion, rendements d’échelle, homogénéité et théorème d’Euler.',
    officialVolumeHours: 8,
    contentVersion: 2,
    source: 'ENTD L1 — Microéconomie 2',
    points: [
      makePoint({
        id: `${C6}_p1`,
        order: 1,
        title: 'Isoquantes et taux marginal de substitution technique (TMST)',
        summary: 'Définition et propriétés des isoquantes, cas de Léontief et des substituts parfaits, TMST et sa décroissance.',
        conceptExplanation:
          'À long terme, avec deux facteurs $x_1$ et $x_2$, on représente la fonction de production par des **isoquantes** : chaque isoquante regroupe toutes les combinaisons de facteurs qui donnent **le même niveau de production**.\n\n' +
          'Les isoquantes ont une **pente négative**, sont **convexes** par rapport à l’origine, **ne se coupent pas**, et plus elles sont éloignées de l’origine, plus la production est élevée.\n\n' +
          'Le **TMST** de $x_1$ à $x_2$ est la quantité de $x_2$ que l’on peut abandonner pour une unité de $x_1$ en plus, **à production constante** : $TMST = -\\dfrac{dx_2}{dx_1} = \\dfrac{Pm_1}{Pm_2}$. Il diminue le long d’une isoquante, ce qui traduit sa convexité.',
        keyRule: 'TMST = −pente de l’isoquante = Pm₁ / Pm₂.',
        formulas: [{ name: 'TMST', formula: 'TMST_{x_1/x_2} = -\\dfrac{dx_2}{dx_1} = \\dfrac{Pm_1}{Pm_2}' }],
        workedExample: {
          title: 'TMST d’une Cobb-Douglas',
          statement: 'Soit $y = x_1^{1/2} x_2^{1/2}$. Calculer le TMST de $x_1$ à $x_2$ au point $(x_1, x_2) = (4, 16)$.',
          methodSteps: [
            '$Pm_1 = \\dfrac{1}{2} x_1^{-1/2} x_2^{1/2}$ et $Pm_2 = \\dfrac{1}{2} x_1^{1/2} x_2^{-1/2}$.',
            '$TMST = \\dfrac{Pm_1}{Pm_2} = \\dfrac{x_2}{x_1}$.',
            'Au point $(4, 16)$ : $TMST = \\dfrac{16}{4} = 4$.',
          ],
          conclusion: 'En ce point, la firme peut abandonner 4 unités de $x_2$ contre 1 unité de $x_1$ sans changer sa production.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Isoquante',
            stepTheme: 'Définition',
            stepTitle: 'Qu’est-ce qu’une isoquante ?',
            paragraphText:
              '• **Isoquante** : ensemble des combinaisons de facteurs $(x_1, x_2)$ qui donnent **le même niveau de production**.\n' +
              '• Équation : $f(x_1, x_2) = \\bar{y}$, avec $\\bar{y}$ fixé.\n' +
              '• C’est l’équivalent, pour le producteur, de la courbe d’indifférence du consommateur, mais elle mesure une quantité réelle (cardinale).',
            exercise: {
              id: `${C6}_p1_q1`,
              type: 'mcq',
              prompt: 'En théorie de la production à long terme, que représente une isoquante ?',
              options: [
                'Les différentes combinaisons de facteurs donnant le même niveau de production',
                'Les différents niveaux de revenu du producteur',
                'Les quantités demandées d’un bien',
                'Les niveaux de profit de la firme',
              ],
              correctAnswerIndex: 0,
              explanation: 'Une isoquante relie toutes les combinaisons de facteurs qui permettent de produire exactement la même quantité.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Propriétés',
            stepTheme: 'Forme',
            stepTitle: 'Les propriétés des isoquantes',
            paragraphText:
              '• **Pente négative** : pour garder la même production, si l’on utilise plus de $x_1$, on peut utiliser moins de $x_2$.\n' +
              '• **Convexes par rapport à l’origine** : le TMST diminue le long de l’isoquante.\n' +
              '• **Ne se coupent pas**.\n' +
              '• Plus une isoquante est **haute et à droite**, plus le niveau de production est **élevé**.',
            exercise: {
              id: `${C6}_p1_q2`,
              type: 'mcq',
              prompt: 'Quelle forme ont généralement les isoquantes d’une fonction de production à deux facteurs ?',
              options: ['Horizontale', 'Verticale', 'Convexe par rapport à l’origine', 'Croissante'],
              correctAnswerIndex: 2,
              explanation: 'Les isoquantes sont décroissantes et convexes par rapport à l’origine, car le TMST diminue quand on substitue $x_1$ à $x_2$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Cas atypiques',
            stepTheme: 'Léontief',
            stepTitle: 'Substituts parfaits et technologie de Léontief',
            paragraphText:
              '• **Substituts parfaits** : $f(x_1, x_2) = a x_1 + b x_2$ ; isoquantes **droites**, TMST constant égal à $a/b$.\n' +
              '• **Léontief (proportions fixes)** : $f(x_1, x_2) = \\min\\{a x_1, b x_2\\}$ ; isoquantes **en L**, **une seule** combinaison efficace pour chaque niveau de production (exemple : 1 chauffeur pour 1 taxi).',
            exercise: {
              id: `${C6}_p1_q3`,
              type: 'mcq',
              prompt: 'Une entreprise de transport utilise exactement 1 chauffeur par véhicule : sa production est $y = \\min\\{x_1, x_2\\}$ ($x_1$ = chauffeurs, $x_2$ = véhicules). Quelle forme ont ses isoquantes ?',
              options: ['Des droites décroissantes', 'Des courbes en forme de L', 'Des droites horizontales', 'Des courbes concaves'],
              correctAnswerIndex: 1,
              explanation: 'C’est une technologie de Léontief (proportions fixes) : ajouter un facteur seul n’augmente pas la production, d’où des isoquantes en L.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'TMST',
            stepTheme: 'Substitution technique',
            stepTitle: 'Le taux marginal de substitution technique',
            paragraphText:
              '• $TMST_{x_1/x_2}$ : quantité de $x_2$ que le producteur peut **abandonner** pour utiliser **une unité de plus de $x_1$**, en restant sur la **même isoquante**.\n' +
              '• Le long d’une isoquante, $dy = Pm_1 dx_1 + Pm_2 dx_2 = 0$, d’où $TMST = -\\dfrac{dx_2}{dx_1} = \\dfrac{Pm_1}{Pm_2}$.',
            formula: { name: 'TMST', formula: 'TMST = \\dfrac{Pm_1}{Pm_2}' },
            exercise: {
              id: `${C6}_p1_q4`,
              type: 'mcq',
              prompt: 'Que mesure le TMST (taux marginal de substitution technique) de $x_1$ à $x_2$ ?',
              options: [
                'La variation du coût total',
                'Le rapport entre la recette et le coût',
                'La quantité de $x_2$ que l’on peut remplacer par une unité de $x_1$ à production constante',
                'Le niveau de profit maximal',
              ],
              correctAnswerIndex: 2,
              explanation: 'Le TMST mesure la substitution entre facteurs le long d’une isoquante : combien de $x_2$ on peut retirer pour une unité de $x_1$ en plus sans changer la production.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Calcul',
            stepTheme: 'Cobb-Douglas',
            stepTitle: 'Calculer un TMST',
            paragraphText:
              'Méthode : calculer les deux productivités marginales, puis faire le rapport.\n' +
              '• $y = x_1^{1/2} x_2^{1/2}$ : $Pm_1 = \\dfrac{1}{2} x_1^{-1/2} x_2^{1/2}$ et $Pm_2 = \\dfrac{1}{2} x_1^{1/2} x_2^{-1/2}$.\n' +
              '• $TMST = \\dfrac{x_2}{x_1}$ ; au point $(4, 16)$, $TMST = 4$.',
            exercise: {
              id: `${C6}_p1_q5`,
              type: 'mcq',
              prompt: 'La fonction de production est $y = x_1^{1/2} x_2^{1/2}$. Que vaut le TMST de $x_1$ à $x_2$ au point $(x_1, x_2) = (4, 16)$ ?',
              options: ['$4$', '$\\dfrac{1}{4}$', '$8$', '$1$'],
              correctAnswerIndex: 0,
              explanation: '$TMST = \\dfrac{Pm_1}{Pm_2} = \\dfrac{x_2}{x_1} = \\dfrac{16}{4} = 4$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Sens du rapport',
            stepTitle: 'Ne pas inverser le rapport',
            paragraphText:
              '• $TMST_{x_1/x_2} = \\dfrac{Pm_1}{Pm_2}$ : la productivité du facteur **que l’on ajoute** ($x_1$) est **au numérateur**.\n' +
              '• Quand on substitue $x_1$ à $x_2$ le long d’une isoquante, $Pm_1$ baisse et $Pm_2$ monte : le TMST **diminue**, ce qui traduit la **convexité** de l’isoquante.',
            exercise: {
              id: `${C6}_p1_q6`,
              type: 'mcq',
              prompt: 'Le long d’une isoquante convexe, la firme utilise de plus en plus de $x_1$ et de moins en moins de $x_2$. Comment évolue le $TMST_{x_1/x_2} = \\dfrac{Pm_1}{Pm_2}$ ?',
              options: ['Il augmente', 'Il diminue', 'Il reste constant', 'Il devient négatif'],
              correctAnswerIndex: 1,
              explanation: 'Plus on utilise de $x_1$, plus $Pm_1$ baisse ; moins on utilise de $x_2$, plus $Pm_2$ monte : le rapport diminue (TMST décroissant).',
            },
          },
        ],
      }),

      makePoint({
        id: `${C6}_p2`,
        order: 2,
        title: 'Droite d’isocoût, optimum du producteur et sentier d’expansion',
        summary: 'Équation et pente de l’isocoût, condition de tangence, calcul de l’optimum, sentier d’expansion, minimisation du coût.',
        conceptExplanation:
          'Les facteurs ont un prix : $w_1$ pour $x_1$, $w_2$ pour $x_2$. Toutes les combinaisons qui coûtent le même montant $C$ forment une **droite d’isocoût** : $C = w_1 x_1 + w_2 x_2$, soit $x_2 = \\dfrac{C}{w_2} - \\dfrac{w_1}{w_2} x_1$.\n\n' +
          'L’**optimum du producteur** est atteint quand l’isocoût est **tangent** à l’isoquante la plus haute possible : $TMST = \\dfrac{w_1}{w_2}$, soit $\\dfrac{Pm_1}{w_1} = \\dfrac{Pm_2}{w_2}$ (le dernier franc dépensé rapporte autant dans chaque facteur). La même condition vaut pour **minimiser le coût** d’une production donnée.\n\n' +
          'Quand le budget varie, les optimums successifs forment le **sentier d’expansion** de la firme.',
        keyRule: 'Optimum : TMST = w₁ / w₂ (tangence isoquante – isocoût) et contrainte de coût respectée.',
        formulas: [
          { name: 'Isocoût', formula: 'C = w_1 x_1 + w_2 x_2' },
          { name: 'Condition d’optimum', formula: '\\dfrac{Pm_1}{Pm_2} = \\dfrac{w_1}{w_2}' },
        ],
        workedExample: {
          title: 'Optimum avec $y = x_1 x_2$',
          statement: 'Une firme produit selon $y = x_1 x_2$. Les prix des facteurs sont $w_1 = 4$ et $w_2 = 2$ ; son budget est $C = 400$. Déterminer la combinaison optimale et la production maximale.',
          methodSteps: [
            '$Pm_1 = x_2$ et $Pm_2 = x_1$, donc $TMST = \\dfrac{x_2}{x_1}$.',
            'Tangence : $\\dfrac{x_2}{x_1} = \\dfrac{4}{2} = 2$, d’où $x_2 = 2x_1$ (équation du sentier d’expansion).',
            'Budget : $4x_1 + 2(2x_1) = 400$, donc $8x_1 = 400$, $x_1 = 50$ et $x_2 = 100$.',
            'Production : $y = 50 \\times 100 = 5000$.',
          ],
          conclusion: 'La firme utilise 50 unités de $x_1$ et 100 unités de $x_2$ et produit 5 000 unités.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Isocoût',
            stepTheme: 'Contrainte de coût',
            stepTitle: 'La droite d’isocoût',
            paragraphText:
              '• **Droite d’isocoût** : ensemble des combinaisons de facteurs qui ont **le même coût total** $C$.\n' +
              '• Équation : $C = w_1 x_1 + w_2 x_2$, où $w_1$ et $w_2$ sont les prix des facteurs.',
            exercise: {
              id: `${C6}_p2_q1`,
              type: 'mcq',
              prompt: 'En théorie du producteur, que représente une droite d’isocoût ?',
              options: [
                'Les combinaisons de facteurs ayant le même coût total',
                'Les niveaux de production identiques',
                'Les recettes maximales',
                'Les quantités vendues',
              ],
              correctAnswerIndex: 0,
              explanation: 'Une isocoût regroupe toutes les combinaisons $(x_1, x_2)$ telles que $w_1 x_1 + w_2 x_2 = C$ : même coût total.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Pente',
            stepTheme: 'Lecture graphique',
            stepTitle: 'Pente et points d’intersection de l’isocoût',
            paragraphText:
              '• $x_2 = \\dfrac{C}{w_2} - \\dfrac{w_1}{w_2} x_1$ : pente $-\\dfrac{w_1}{w_2}$, ordonnée à l’origine $\\dfrac{C}{w_2}$, abscisse à l’origine $\\dfrac{C}{w_1}$.\n' +
              '• Exemple : $C = 400$, $w_1 = 4$, $w_2 = 2$ : la droite coupe l’axe de $x_2$ en 200 et l’axe de $x_1$ en 100 ; pente $-2$.\n' +
              '• Si $C$ augmente, la droite se **déplace parallèlement** vers le haut.',
            exercise: {
              id: `${C6}_p2_q2`,
              type: 'mcq',
              prompt: 'Une firme dispose d’un budget $C = 400$ ; les prix des facteurs sont $w_1 = 4$ et $w_2 = 2$. Quelle est la pente de sa droite d’isocoût dans le repère $(x_1, x_2)$ ?',
              options: ['$-2$', '$-\\dfrac{1}{2}$', '$-100$', '$-200$'],
              correctAnswerIndex: 0,
              explanation: 'La pente de l’isocoût est $-\\dfrac{w_1}{w_2} = -\\dfrac{4}{2} = -2$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Optimum',
            stepTheme: 'Tangence',
            stepTitle: 'La condition d’optimum du producteur',
            paragraphText:
              '• L’optimum est atteint quand l’isocoût est **tangent** à une isoquante : les deux pentes sont égales.\n' +
              '• $TMST = \\dfrac{Pm_1}{Pm_2} = \\dfrac{w_1}{w_2}$, ou encore $\\dfrac{Pm_1}{w_1} = \\dfrac{Pm_2}{w_2}$ : le dernier franc dépensé rapporte autant de production dans chaque facteur.',
            keyRule: 'Isoquante tangente à l’isocoût ⇔ TMST = rapport des prix des facteurs.',
            exercise: {
              id: `${C6}_p2_q3`,
              type: 'mcq',
              prompt: 'Graphiquement, quand l’optimum du producteur (deux facteurs, prix donnés) est-il atteint ?',
              options: [
                'Quand l’isocoût coupe plusieurs isoquantes',
                'Quand l’isocoût est tangent à l’isoquante',
                'Quand les coûts fixes sont nuls',
                'Quand le produit marginal est nul',
              ],
              correctAnswerIndex: 1,
              explanation: 'À l’optimum, l’isocoût touche l’isoquante la plus haute possible en un seul point : la tangence, où TMST = $w_1/w_2$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Calcul',
            stepTheme: 'Combinaison optimale',
            stepTitle: 'Calculer la combinaison optimale',
            paragraphText:
              'Méthode en 3 étapes :\n' +
              '• 1) écrire $TMST = \\dfrac{w_1}{w_2}$ et en tirer une relation entre $x_1$ et $x_2$ ;\n' +
              '• 2) la remplacer dans la contrainte de coût ;\n' +
              '• 3) calculer $x_1$, $x_2$ puis $y$.\n' +
              '• Exemple : $y = x_1 x_2$, $w_1 = 4$, $w_2 = 2$, $C = 400$ → $x_2 = 2x_1$ ; $8x_1 = 400$ ; $x_1 = 50$, $x_2 = 100$, $y = 5000$.',
            exercise: {
              id: `${C6}_p2_q4`,
              type: 'mcq',
              prompt: 'Une firme produit selon $y = x_1 x_2$ avec $w_1 = 4$, $w_2 = 2$ et un budget $C = 400$. Quelle est la combinaison optimale de facteurs ?',
              options: ['$x_1 = 50$ et $x_2 = 100$', '$x_1 = 100$ et $x_2 = 50$', '$x_1 = 50$ et $x_2 = 50$', '$x_1 = 25$ et $x_2 = 150$'],
              correctAnswerIndex: 0,
              explanation: '$TMST = \\dfrac{x_2}{x_1} = \\dfrac{4}{2}$ donne $x_2 = 2x_1$ ; $4x_1 + 2 \\times 2x_1 = 400$ donne $x_1 = 50$ et $x_2 = 100$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Sentier',
            stepTheme: 'Expansion',
            stepTitle: 'Le sentier d’expansion de la firme',
            paragraphText:
              '• **Sentier d’expansion** : lieu des **points d’équilibre du producteur** quand le **budget varie** (prix des facteurs constants).\n' +
              '• On l’obtient à partir de la condition de tangence : dans l’exemple $y = x_1 x_2$ avec $w_1 = 4$ et $w_2 = 2$, c’est la droite $x_2 = 2x_1$.',
            exercise: {
              id: `${C6}_p2_q5`,
              type: 'mcq',
              prompt: 'À quoi correspond le sentier d’expansion d’une firme ?',
              options: [
                'Aux points d’équilibre du producteur lorsque le budget varie',
                'Aux niveaux de profit maximal',
                'Aux quantités demandées par le consommateur',
                'Aux coûts fixes de l’entreprise',
              ],
              correctAnswerIndex: 0,
              explanation: 'Le sentier d’expansion relie les optimums successifs (tangences isocoût – isoquante) quand le budget augmente, les prix des facteurs restant fixes.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Programme dual',
            stepTheme: 'Minimiser le coût',
            stepTitle: 'Minimiser le coût d’une production donnée',
            paragraphText:
              '• Le producteur peut aussi **minimiser son coût** pour une production fixée : la condition de tangence est **la même**.\n' +
              '• Exemple : produire $y = 800$ avec $y = x_1 x_2$, $w_1 = 4$, $w_2 = 2$ : $x_2 = 2x_1$ donc $2x_1^2 = 800$, $x_1 = 20$, $x_2 = 40$.\n' +
              '• Coût minimal : $C = 4 \\times 20 + 2 \\times 40 = 160$.',
            exercise: {
              id: `${C6}_p2_q6`,
              type: 'mcq',
              prompt: 'Une firme doit produire $y = 800$ avec la fonction $y = x_1 x_2$ ; les prix des facteurs sont $w_1 = 4$ et $w_2 = 2$. Quel est le coût minimal de cette production ?',
              options: ['$160$', '$120$', '$200$', '$800$'],
              correctAnswerIndex: 0,
              explanation: 'Tangence : $x_2 = 2x_1$ ; $x_1 \\times 2x_1 = 800$ donne $x_1 = 20$, $x_2 = 40$ ; $C = 4 \\times 20 + 2 \\times 40 = 160$.',
            },
          },
        ],
      }),

      makePoint({
        id: `${C6}_p3`,
        order: 3,
        title: 'Rendements d’échelle, homogénéité et théorème d’Euler',
        summary: 'Rendements croissants, constants, décroissants, degré d’homogénéité, Cobb-Douglas, fonction avec paramètre, théorème d’Euler.',
        conceptExplanation:
          'Les **rendements d’échelle** décrivent ce que devient la production quand on multiplie **tous** les facteurs par un même nombre $t > 1$ (long terme).\n\n' +
          'Si $F(t x_1, t x_2) = t^k F(x_1, x_2)$, la fonction est **homogène de degré $k$** : rendements **décroissants** si $k < 1$, **constants** si $k = 1$, **croissants** si $k > 1$. Pour une Cobb-Douglas $A x_1^a x_2^b$, $k = a + b$.\n\n' +
          '**Théorème d’Euler** : si $F$ est homogène de degré 1, $Pm_1 x_1 + Pm_2 x_2 = F(x_1, x_2)$ : rémunérer chaque facteur à sa productivité marginale épuise exactement le produit. Si $k > 1$, ces rémunérations dépassent la production (perte) ; si $k < 1$, elles lui sont inférieures (profit).',
        keyRule: 'Degré d’homogénéité k : k < 1 décroissants, k = 1 constants, k > 1 croissants. Cobb-Douglas : k = somme des exposants.',
        formulas: [
          { name: 'Homogénéité de degré k', formula: 'F(t x_1, t x_2) = t^k F(x_1, x_2)' },
          { name: 'Théorème d’Euler (k = 1)', formula: 'Pm_1 x_1 + Pm_2 x_2 = F(x_1, x_2)' },
        ],
        workedExample: {
          title: 'Nature des rendements de $y = (y_1 - \\alpha)^{1/2} y_2^{1/4}$ pour $\\alpha \\leq 0$',
          statement: 'Déterminer la nature des rendements d’échelle de $y(y_1, y_2) = (y_1 - \\alpha)^{1/2} y_2^{1/4}$ lorsque $\\alpha \\leq 0$.',
          methodSteps: [
            'Cas $\\alpha = 0$ : $y = y_1^{1/2} y_2^{1/4}$ est homogène de degré $\\dfrac{1}{2} + \\dfrac{1}{4} = \\dfrac{3}{4} < 1$ : rendements décroissants.',
            'Cas $\\alpha < 0$ : pour $t > 1$, $t y_1 - \\alpha < t(y_1 - \\alpha)$ car $-\\alpha < -t\\alpha$. Donc $y(t y_1, t y_2) < t^{1/2} (y_1 - \\alpha)^{1/2} t^{1/4} y_2^{1/4} = t^{3/4} y(y_1, y_2)$.',
            'Comme $t^{3/4} < t$ pour $t > 1$, on a $y(t y_1, t y_2) < t \\, y(y_1, y_2)$.',
          ],
          conclusion: 'Pour $\\alpha \\leq 0$, doubler tous les facteurs fait moins que doubler la production : les rendements d’échelle sont décroissants.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Échelle',
            stepTheme: 'Tous les facteurs',
            stepTitle: 'Rendements croissants, constants, décroissants',
            paragraphText:
              'On multiplie **tous** les facteurs par $t > 1$ :\n' +
              '• **Croissants** : la production augmente **plus que proportionnellement** (plus que $t$ fois).\n' +
              '• **Constants** : la production augmente **dans la même proportion** ($t$ fois).\n' +
              '• **Décroissants** : la production augmente **moins que proportionnellement**.',
            exercise: {
              id: `${C6}_p3_q1`,
              type: 'mcq',
              prompt: 'Quand dit-on que les rendements d’échelle sont croissants ?',
              options: [
                'Quand la production augmente plus que proportionnellement aux facteurs',
                'Quand la production diminue',
                'Quand les facteurs restent constants',
                'Quand le coût marginal diminue toujours',
              ],
              correctAnswerIndex: 0,
              explanation: 'Rendements croissants : multiplier tous les facteurs par $t$ multiplie la production par plus que $t$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Homogénéité',
            stepTheme: 'Degré k',
            stepTitle: 'Le degré d’homogénéité',
            paragraphText:
              '• $F$ est **homogène de degré $k$** si $F(t x_1, t x_2) = t^k F(x_1, x_2)$ pour tout $t > 0$.\n' +
              '• $k < 1$ : rendements **décroissants** ; $k = 1$ : **constants** ; $k > 1$ : **croissants**.\n' +
              '• Attention : c’est la comparaison de $k$ avec **1** qui compte, pas avec 0.',
            formula: { name: 'Homogénéité', formula: 'F(tx_1, tx_2) = t^k F(x_1, x_2)' },
            exercise: {
              id: `${C6}_p3_q2`,
              type: 'mcq',
              prompt: 'Une fonction de production vérifie $F(t x_1, t x_2) = t F(x_1, x_2)$ pour tout $t > 0$. Quelle est la nature de ses rendements d’échelle ?',
              options: ['Croissants', 'Constants', 'Décroissants', 'On ne peut pas savoir'],
              correctAnswerIndex: 1,
              explanation: 'Elle est homogène de degré $k = 1$ : multiplier les facteurs par $t$ multiplie la production par $t$, les rendements sont constants.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Cobb-Douglas',
            stepTheme: 'Somme des exposants',
            stepTitle: 'Rendements d’une Cobb-Douglas',
            paragraphText:
              '• $F(x_1, x_2) = A x_1^a x_2^b$ : $F(t x_1, t x_2) = t^{a+b} F(x_1, x_2)$, donc $k = a + b$.\n' +
              '• Exemple : $y = x_1^{1/2} x_2^{1/4}$ : $k = \\dfrac{1}{2} + \\dfrac{1}{4} = \\dfrac{3}{4} < 1$, rendements **décroissants**.\n' +
              '• Autre exemple : $y = 2 x_1^{0{,}6} x_2^{0{,}6}$ : $k = 1{,}2 > 1$, rendements **croissants**.',
            exercise: {
              id: `${C6}_p3_q3`,
              type: 'mcq',
              prompt: 'Quelle est la nature des rendements d’échelle de la fonction de production $y = x_1^{1/2} x_2^{1/4}$ ?',
              options: ['Croissants, car $k = 2$', 'Constants, car $k = 1$', 'Décroissants, car $k = \\dfrac{3}{4}$', 'Croissants, car $k = \\dfrac{3}{4}$'],
              correctAnswerIndex: 2,
              explanation: 'Pour une Cobb-Douglas, $k$ = somme des exposants $= \\dfrac{1}{2} + \\dfrac{1}{4} = \\dfrac{3}{4} < 1$ : rendements décroissants.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Type examen',
            stepTheme: 'Paramètre α',
            stepTitle: 'Fonction non homogène : comparer à $t \\, y$',
            paragraphText:
              'Quand la fonction n’est pas homogène, on compare directement $y(t y_1, t y_2)$ à $t \\, y(y_1, y_2)$ pour $t > 1$.\n' +
              '• $y = (y_1 - \\alpha)^{1/2} y_2^{1/4}$ avec $\\alpha < 0$ : $t y_1 - \\alpha < t(y_1 - \\alpha)$, donc $y(t y_1, t y_2) < t^{3/4} y < t \\, y$.\n' +
              '• Conclusion : rendements **décroissants** pour $\\alpha \\leq 0$ (pour $\\alpha = 0$, degré $\\dfrac{3}{4}$).',
            exercise: {
              id: `${C6}_p3_q4`,
              type: 'mcq',
              prompt: 'On considère $y(y_1, y_2) = (y_1 - \\alpha)^{1/2} y_2^{1/4}$. Pour $\\alpha = 0$, quelle est la nature des rendements d’échelle ?',
              options: [
                'Décroissants : la fonction est homogène de degré $\\dfrac{3}{4}$',
                'Constants : la fonction est homogène de degré 1',
                'Croissants : la fonction est homogène de degré $\\dfrac{5}{4}$',
                'Décroissants : la fonction est homogène de degré $\\dfrac{1}{4}$',
              ],
              correctAnswerIndex: 0,
              explanation: 'Avec $\\alpha = 0$, $y = y_1^{1/2} y_2^{1/4}$ : degré $\\dfrac{1}{2} + \\dfrac{1}{4} = \\dfrac{3}{4} < 1$, rendements décroissants.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Euler',
            stepTheme: 'Épuisement du produit',
            stepTitle: 'Le théorème d’Euler',
            paragraphText:
              '• Si $F$ est homogène de degré $k$ : $Pm_1 x_1 + Pm_2 x_2 = k \\, F(x_1, x_2)$.\n' +
              '• Pour $k = 1$ : $Pm_1 x_1 + Pm_2 x_2 = F$ ; payer chaque facteur à sa productivité marginale **épuise exactement** la production (profit nul).\n' +
              '• $k > 1$ : ces rémunérations **dépassent** la production (perte) ; $k < 1$ : elles lui sont **inférieures** (profit positif).',
            konanTip: 'Retiens la comparaison avec 1 : profit positif quand k < 1 (et non « k < 0 »).',
            exercise: {
              id: `${C6}_p3_q5`,
              type: 'mcq',
              prompt: 'La fonction $y = x_1^{1/2} x_2^{1/2}$ est homogène de degré 1. Au point $(x_1, x_2) = (4, 9)$, on a $y = 6$, $Pm_1 = 0{,}75$ et $Pm_2 = \\dfrac{1}{3}$. Que vaut $Pm_1 x_1 + Pm_2 x_2$ ?',
              options: ['$6$, exactement la production', '$12$, le double de la production', '$3$, la moitié de la production', '$13$, la somme des facteurs'],
              correctAnswerIndex: 0,
              explanation: '$0{,}75 \\times 4 + \\dfrac{1}{3} \\times 9 = 3 + 3 = 6 = y$ : c’est le théorème d’Euler pour une fonction homogène de degré 1.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Deux notions',
            stepTitle: 'Rendements d’échelle ≠ rendements marginaux décroissants',
            paragraphText:
              '• **Loi des rendements marginaux décroissants** : **un seul** facteur augmente, les autres restent fixes → **court terme**.\n' +
              '• **Rendements d’échelle** : **tous** les facteurs augmentent dans la même proportion → **long terme**.\n' +
              '• Une firme peut avoir des rendements marginaux décroissants pour chaque facteur **et** des rendements d’échelle constants (exemple : $y = x_1^{1/2} x_2^{1/2}$).',
            exercise: {
              id: `${C6}_p3_q6`,
              type: 'mcq',
              prompt: 'Pour $y = x_1^{1/2} x_2^{1/2}$, la productivité marginale de chaque facteur diminue quand on l’augmente seul. Peut-on en conclure que les rendements d’échelle sont décroissants ?',
              options: [
                'Oui, les deux notions sont identiques',
                'Non : les rendements d’échelle sont constants, car le degré d’homogénéité vaut 1',
                'Oui, car la Pm décroît',
                'Non : les rendements d’échelle sont croissants',
              ],
              correctAnswerIndex: 1,
              explanation: 'La décroissance de la Pm concerne un seul facteur (court terme). Les rendements d’échelle portent sur tous les facteurs : ici $k = \\dfrac{1}{2} + \\dfrac{1}{2} = 1$, rendements constants.',
            },
          },
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 7 : COÛTS DE COURT TERME, SEUILS ET OFFRE DE LA FIRME
  // ==========================================================================
  {
    id: C7,
    subjectId: 'lmd_microeconomie',
    gradeLevel: 'lmd_entd_l1',
    order: 7,
    semesters: [2],
    title: 'Chapitre 7 : Coûts de production, seuils de fermeture et de rentabilité, offre de la firme concurrentielle',
    summary:
      'Coûts fixes, variables, moyens et marginal, relations entre les courbes, seuil de fermeture, seuil de rentabilité, fonction d’offre de la firme en concurrence parfaite et élasticité-prix de l’offre.',
    officialVolumeHours: 6,
    contentVersion: 2,
    source: 'ENTD L1 — Microéconomie 2',
    points: [
      makePoint({
        id: `${C7}_p1`,
        order: 1,
        title: 'Les coûts de production : fixes, variables, moyens et marginal',
        summary: 'CF, CV, CT, CFM, CVM, CM, Cm, relations entre les courbes, minimum du coût moyen, coûts explicites et implicites.',
        conceptExplanation:
          'À court terme, le **coût total** se décompose en **coût fixe** $CF$ (indépendant de la quantité : loyer, amortissement) et **coût variable** $CV(y)$ (matières, main-d’œuvre) : $CT(y) = CF + CV(y)$.\n\n' +
          'On en déduit le **coût fixe moyen** $CFM = CF/y$, le **coût variable moyen** $CVM = CV/y$, le **coût moyen** $CM = CT/y = CFM + CVM$ et le **coût marginal** $Cm = \\dfrac{dCT}{dy}$.\n\n' +
          'La courbe de $Cm$ coupe celles de $CVM$ et de $CM$ **en leur minimum**.',
        keyRule: 'Cm = dérivée de CT ; Cm coupe CVM et CM en leur minimum ; CM − CVM = CFM.',
        formulas: [
          { name: 'Coûts moyens', formula: 'CVM = \\dfrac{CV}{y}, \\quad CM = \\dfrac{CT}{y} = CFM + CVM' },
          { name: 'Coût marginal', formula: 'Cm = \\dfrac{dCT}{dy} = \\dfrac{dCV}{dy}' },
        ],
        workedExample: {
          title: 'Coûts de la fonction $C(y) = y^2 + 3y + 4$',
          statement: 'Les coûts de production d’une entreprise en concurrence parfaite sont $C(y) = y^2 + 3y + 4$. Déterminer CF, CV, CVM, CM, Cm et le minimum du coût moyen.',
          methodSteps: [
            '$CF = 4$ (terme qui ne dépend pas de $y$) et $CV = y^2 + 3y$.',
            '$CVM = y + 3$ ; $CM = y + 3 + \\dfrac{4}{y}$ ; $Cm = 2y + 3$.',
            'Minimum de CM : $CM\' = 1 - \\dfrac{4}{y^2} = 0$ donc $y = 2$ ; $CM(2) = 2 + 3 + 2 = 7$. Vérification : $Cm(2) = 7 = CM(2)$.',
          ],
          conclusion: 'Le coût moyen minimal vaut 7, atteint pour $y = 2$ : c’est le seuil de rentabilité.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'CF / CV',
            stepTheme: 'Coût total',
            stepTitle: 'Coût fixe et coût variable',
            paragraphText:
              '• **Coût fixe** $CF$ : ne dépend pas de la quantité produite (loyer, assurance) ; on le paie même si $y = 0$.\n' +
              '• **Coût variable** $CV(y)$ : dépend de la quantité produite ; $CV(0) = 0$.\n' +
              '• $CT(y) = CF + CV(y)$. Dans $C(y) = y^2 + 3y + 4$ : $CF = 4$ et $CV = y^2 + 3y$.',
            exercise: {
              id: `${C7}_p1_q1`,
              type: 'mcq',
              prompt: 'Le coût total d’une entreprise est $C(y) = y^2 + 3y + 4$, où $y$ est la quantité produite. Quel est son coût fixe ?',
              options: ['$4$', '$3y$', '$y^2 + 3y$', '$y^2 + 3y + 4$'],
              correctAnswerIndex: 0,
              explanation: 'Le coût fixe est la partie qui ne dépend pas de $y$ : $C(0) = 4$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Coûts moyens',
            stepTheme: 'CVM et CM',
            stepTitle: 'Coût variable moyen et coût moyen',
            paragraphText:
              '• $CVM = \\dfrac{CV}{y}$ et $CM = \\dfrac{CT}{y} = CFM + CVM$.\n' +
              '• Exemple : $C(y) = y^2 + 3y + 4$ : $CVM = \\dfrac{y^2 + 3y}{y} = y + 3$ et $CM = y + 3 + \\dfrac{4}{y}$.\n' +
              '• L’écart entre CM et CVM est le coût fixe moyen $\\dfrac{4}{y}$, qui diminue quand $y$ augmente.',
            exercise: {
              id: `${C7}_p1_q2`,
              type: 'mcq',
              prompt: 'Le coût total d’une entreprise est $C(y) = y^2 + 3y + 4$. Quel est son coût variable moyen ?',
              options: ['$y + 3$', '$y + 3 + \\dfrac{4}{y}$', '$2y + 3$', '$\\dfrac{4}{y}$'],
              correctAnswerIndex: 0,
              explanation: '$CV = y^2 + 3y$, donc $CVM = \\dfrac{y^2 + 3y}{y} = y + 3$. ($y + 3 + 4/y$ est le coût moyen total.)',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Cm',
            stepTheme: 'Coût marginal',
            stepTitle: 'Le coût marginal',
            paragraphText:
              '• **Coût marginal** : supplément de coût dû à la production d’une unité de plus : $Cm = \\dfrac{dCT}{dy}$.\n' +
              '• Le coût fixe ne joue pas : $Cm = \\dfrac{dCV}{dy}$.\n' +
              '• Exemple : $C(y) = y^2 + 3y + 4$ donne $Cm = 2y + 3$.',
            exercise: {
              id: `${C7}_p1_q3`,
              type: 'mcq',
              prompt: 'Le coût total d’une entreprise est $C(y) = y^2 + 3y + 4$. Quel est son coût marginal ?',
              options: ['$2y + 3$', '$y + 3$', '$2y + 7$', '$y^2 + 3$'],
              correctAnswerIndex: 0,
              explanation: 'On dérive le coût total : $Cm = \\dfrac{d}{dy}(y^2 + 3y + 4) = 2y + 3$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Courbes',
            stepTheme: 'Minimums',
            stepTitle: 'Le coût marginal coupe les coûts moyens en leur minimum',
            paragraphText:
              '• Quand $Cm < CM$, le coût moyen **baisse** ; quand $Cm > CM$, il **monte**.\n' +
              '• Donc $Cm = CM$ au **minimum de CM**, et de même $Cm = CVM$ au **minimum de CVM**.\n' +
              '• Le minimum de CVM est atteint pour une quantité **plus petite** que le minimum de CM.',
            visualSchema: {
              type: 'function_plot',
              title: 'Coûts de C(y) = y² + 3y + 4',
              caption: 'Cm (violet) coupe CM (bleu) en son minimum (y = 2, CM = 7). CVM (vert) est minimal en y → 0, où il vaut 3.',
              plot: {
                xMin: 0,
                xMax: 6,
                yMin: 0,
                yMax: 16,
                xStep: 1,
                yStep: 2,
                xLabel: 'y',
                yLabel: 'coût',
                curves: [
                  { label: 'CM', color: 'blue', pieces: [{ expr: 'x+3+4/x', from: 0.4, to: 6 }] },
                  { label: 'CVM', color: 'green', pieces: [{ expr: 'x+3', from: 0, to: 6 }] },
                  { label: 'Cm', color: 'violet', pieces: [{ expr: '2x+3', from: 0, to: 6 }] },
                ],
                points: [{ x: 2, y: 7, label: 'R (seuil de rentabilité)', color: 'blue' }],
              },
            },
            exercise: {
              id: `${C7}_p1_q4`,
              type: 'mcq',
              prompt: 'Pour une entreprise dont la courbe de coût moyen est en forme de U, en quel point la courbe de coût marginal coupe-t-elle la courbe de coût moyen ?',
              options: ['Au minimum du coût moyen', 'Au maximum du coût moyen', 'À l’origine', 'Elle ne la coupe jamais'],
              correctAnswerIndex: 0,
              explanation: 'Tant que $Cm < CM$, le coût moyen baisse ; dès que $Cm > CM$, il monte : l’égalité a lieu au minimum de CM.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Calcul',
            stepTheme: 'Minimum de CM',
            stepTitle: 'Trouver le minimum du coût moyen',
            paragraphText:
              'Deux méthodes : dériver CM, ou résoudre $Cm = CM$.\n' +
              '• $CM = y + 3 + \\dfrac{4}{y}$ ; $CM\' = 1 - \\dfrac{4}{y^2} = 0$ donc $y = 2$.\n' +
              '• $CM(2) = 2 + 3 + 2 = 7$, et $Cm(2) = 2 \\times 2 + 3 = 7$ : on retrouve bien $Cm = CM$.',
            exercise: {
              id: `${C7}_p1_q5`,
              type: 'mcq',
              prompt: 'Le coût total d’une entreprise est $C(y) = y^2 + 3y + 4$, donc $CM = y + 3 + \\dfrac{4}{y}$. Pour quelle quantité le coût moyen est-il minimal, et que vaut-il ?',
              options: ['$y = 2$ et $CM = 7$', '$y = 4$ et $CM = 8$', '$y = 1$ et $CM = 8$', '$y = 2$ et $CM = 5$'],
              correctAnswerIndex: 0,
              explanation: '$CM\' = 1 - \\dfrac{4}{y^2} = 0$ pour $y = 2$ ; $CM(2) = 2 + 3 + 2 = 7$ (et $Cm(2) = 7$).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Coûts implicites',
            stepTheme: 'Profit économique',
            stepTitle: 'Coûts explicites, implicites et profit économique',
            paragraphText:
              '• **Coûts explicites** : dépenses réellement payées (matières, salaires, loyers).\n' +
              '• **Coûts implicites** : ce que l’entrepreneur aurait gagné en utilisant ailleurs son temps et ses fonds propres (salaire auquel il renonce, intérêts perdus).\n' +
              '• **Profit comptable** = recettes − coûts explicites ; **profit économique** = recettes − (coûts explicites + implicites).',
            exercise: {
              id: `${C7}_p1_q6`,
              type: 'mcq',
              prompt:
                'Awa ouvre un cybercafé à Bouaké. Recettes annuelles : 9 000 000 F ; dépenses payées (loyer, connexion, salaires) : 6 000 000 F. En restant salariée, elle aurait gagné 2 400 000 F, et ses fonds propres placés auraient rapporté 300 000 F. Quel est son profit économique ?',
              options: ['300 000 F', '3 000 000 F', '2 700 000 F', '−300 000 F'],
              correctAnswerIndex: 0,
              explanation: 'Profit comptable : 9 000 000 − 6 000 000 = 3 000 000 F. Coûts implicites : 2 400 000 + 300 000 = 2 700 000 F. Profit économique : 3 000 000 − 2 700 000 = 300 000 F.',
            },
          },
        ],
      }),

      makePoint({
        id: `${C7}_p2`,
        order: 2,
        title: 'Seuil de fermeture, seuil de rentabilité et fonction d’offre de la firme',
        summary: 'Condition P = Cm, seuils de fermeture et de rentabilité, fonction d’offre, élasticité-prix de l’offre, décision de produire à perte.',
        conceptExplanation:
          'En **concurrence parfaite**, la firme prend le prix $P$ du marché. Elle maximise son profit $\\pi = Py - CT(y)$ en produisant la quantité telle que $P = Cm(y)$, sur la partie **croissante** du coût marginal.\n\n' +
          '• Le **seuil de fermeture** est le minimum du $CVM$ : en dessous de ce prix, produire fait perdre plus que les coûts fixes, la firme arrête.\n' +
          '• Le **seuil de rentabilité** est le minimum du $CM$ : au-dessus, la firme fait un profit.\n' +
          '• Entre les deux, elle produit à perte, mais perd moins que ses coûts fixes.\n\n' +
          'La **fonction d’offre** de la firme est la partie de la courbe de $Cm$ située au-dessus du seuil de fermeture. Son **élasticité-prix** est $e = \\dfrac{dy}{dP} \\times \\dfrac{P}{y}$.',
        keyRule: 'Offre : P = Cm au-dessus du minimum de CVM ; seuil de fermeture = min CVM ; seuil de rentabilité = min CM.',
        formulas: [
          { name: 'Condition de profit maximal', formula: 'P = Cm(y)' },
          { name: 'Élasticité-prix de l’offre', formula: 'e = \\dfrac{dy}{dP} \\times \\dfrac{P}{y}' },
        ],
        workedExample: {
          title: 'Offre de la firme dont le coût est $C(y) = y^2 + 3y + 4$ (examen de session 1)',
          statement: 'Une entreprise en concurrence parfaite a pour coûts $C(y) = y^2 + 3y + 4$ ; le prix de vente est $p$. Déterminer le seuil de rentabilité, la fonction d’offre, puis l’élasticité-prix de l’offre et sa valeur pour $p = 9$.',
          methodSteps: [
            'Seuil de rentabilité : minimum de $CM = y + 3 + \\dfrac{4}{y}$, atteint en $y = 2$, soit $p = 7$.',
            'Seuil de fermeture : minimum de $CVM = y + 3$, soit $p = 3$ (quand $y$ tend vers 0).',
            'Offre : $p = Cm = 2y + 3$, donc $y = \\dfrac{p - 3}{2}$ pour $p \\geq 3$, et $y = 0$ si $p < 3$.',
            'Élasticité : $e = \\dfrac{1}{2} \\times \\dfrac{p}{(p - 3)/2} = \\dfrac{p}{p - 3}$ ; pour $p = 9$ : $y = 3$ et $e = \\dfrac{9}{6} = 1{,}5$.',
          ],
          conclusion: 'Au prix 9, l’offre est élastique : une hausse de 1 % du prix augmente la quantité offerte de 1,5 %.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'propriete',
            stepBadge: 'P = Cm',
            stepTheme: 'Profit maximal',
            stepTitle: 'La règle de production en concurrence parfaite',
            paragraphText:
              '• Profit : $\\pi(y) = P y - CT(y)$.\n' +
              '• Condition du premier ordre : $\\pi\'(y) = P - Cm(y) = 0$, donc **$P = Cm$**.\n' +
              '• Condition du second ordre : le $Cm$ doit être **croissant** au point choisi.',
            exercise: {
              id: `${C7}_p2_q1`,
              type: 'mcq',
              prompt: 'Une entreprise en concurrence pure et parfaite vend au prix $P$ fixé par le marché. Quelle quantité choisit-elle pour maximiser son profit ?',
              options: [
                'La quantité pour laquelle le coût marginal est égal au prix, sur sa partie croissante',
                'La quantité pour laquelle le coût moyen est le plus bas',
                'La quantité pour laquelle le coût fixe est nul',
                'La plus grande quantité possible',
              ],
              correctAnswerIndex: 0,
              explanation: 'Le profit $Py - CT(y)$ est maximal quand sa dérivée $P - Cm(y)$ s’annule, avec un coût marginal croissant.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Seuils',
            stepTheme: 'Fermeture / rentabilité',
            stepTitle: 'Seuil de fermeture et seuil de rentabilité',
            paragraphText:
              '• **Seuil de fermeture** $F$ : minimum du **CVM**. Si $P <$ min CVM, la firme ne couvre même pas ses coûts variables : elle **ferme** (sa perte se limite alors aux coûts fixes).\n' +
              '• **Seuil de rentabilité** $R$ : minimum du **CM**. Si $P = $ min CM, le profit est nul ; si $P >$ min CM, la firme fait un **profit**.\n' +
              '• Entre les deux : elle produit **à perte**, mais cette perte est **inférieure aux coûts fixes**.',
            keyRule: 'Seuil de fermeture = min CVM ; seuil de rentabilité = min CM.',
            exercise: {
              id: `${C7}_p2_q2`,
              type: 'mcq',
              prompt: 'En concurrence parfaite, à quoi correspond le seuil de rentabilité d’une entreprise ?',
              options: [
                'Au minimum du coût moyen total',
                'Au minimum du coût variable moyen',
                'Au maximum du coût marginal',
                'Au point où le coût fixe est nul',
              ],
              correctAnswerIndex: 0,
              explanation: 'Au minimum du coût moyen, $P = CM$ : les recettes couvrent tous les coûts (fixes et variables), le profit est nul. Le minimum du CVM est le seuil de fermeture.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Calcul',
            stepTheme: 'Valeurs des seuils',
            stepTitle: 'Calculer les deux seuils',
            paragraphText:
              '• $C(y) = y^2 + 3y + 4$ : $CVM = y + 3$ est croissant, son minimum est $3$ (quand $y$ tend vers 0) → **seuil de fermeture : $P = 3$**.\n' +
              '• $CM = y + 3 + \\dfrac{4}{y}$ est minimal en $y = 2$, où $CM = 7$ → **seuil de rentabilité : $P = 7$, $y = 2$**.',
            exercise: {
              id: `${C7}_p2_q3`,
              type: 'mcq',
              prompt: 'Une entreprise en concurrence parfaite a pour coût total $C(y) = y^2 + 3y + 4$. Quel est son seuil de rentabilité ?',
              options: ['$P = 7$, atteint pour $y = 2$', '$P = 3$, atteint pour $y = 0$', '$P = 4$, atteint pour $y = 1$', '$P = 9$, atteint pour $y = 3$'],
              correctAnswerIndex: 0,
              explanation: 'Le seuil de rentabilité est le minimum de $CM = y + 3 + \\dfrac{4}{y}$ : $CM\' = 0$ pour $y = 2$, et $CM(2) = 7$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Offre',
            stepTheme: 'Fonction d’offre',
            stepTitle: 'Exprimer la fonction d’offre de la firme',
            paragraphText:
              'Méthode : écrire $P = Cm(y)$, isoler $y$, et préciser le domaine (au-dessus du seuil de fermeture).\n' +
              '• $P = 2y + 3$ donc $y = \\dfrac{P - 3}{2}$ pour $P \\geq 3$.\n' +
              '• $y = 0$ si $P < 3$.',
            exercise: {
              id: `${C7}_p2_q4`,
              type: 'mcq',
              prompt: 'Une entreprise en concurrence parfaite a pour coût total $C(y) = y^2 + 3y + 4$, et donc $Cm = 2y + 3$. Quelle est sa fonction d’offre pour un prix $P \\geq 3$ ?',
              options: ['$y = \\dfrac{P - 3}{2}$', '$y = 2P + 3$', '$y = \\dfrac{P}{2} + 3$', '$y = P - 7$'],
              correctAnswerIndex: 0,
              explanation: 'On égalise prix et coût marginal : $P = 2y + 3$, d’où $y = \\dfrac{P - 3}{2}$ (et $y = 0$ sous le seuil de fermeture $P = 3$).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Élasticité',
            stepTheme: 'Offre',
            stepTitle: 'L’élasticité-prix de l’offre',
            paragraphText:
              '• $e = \\dfrac{dy}{dP} \\times \\dfrac{P}{y}$.\n' +
              '• Avec $y = \\dfrac{P - 3}{2}$ : $\\dfrac{dy}{dP} = \\dfrac{1}{2}$, donc $e = \\dfrac{1}{2} \\times \\dfrac{P}{(P - 3)/2} = \\dfrac{P}{P - 3}$.\n' +
              '• Pour $P = 9$ : $y = 3$ et $e = \\dfrac{9}{6} = 1{,}5$ : l’offre est **élastique** ($e > 1$).',
            formula: { name: 'Élasticité de l’offre', formula: 'e = \\dfrac{dy}{dP} \\times \\dfrac{P}{y}' },
            exercise: {
              id: `${C7}_p2_q5`,
              type: 'mcq',
              prompt: 'La fonction d’offre d’une entreprise est $y = \\dfrac{P - 3}{2}$ pour $P \\geq 3$. Que vaut l’élasticité-prix de l’offre pour $P = 9$ ?',
              options: ['$1{,}5$', '$0{,}5$', '$3$', '$0{,}67$'],
              correctAnswerIndex: 0,
              explanation: 'Pour $P = 9$, $y = 3$ ; $e = \\dfrac{dy}{dP} \\times \\dfrac{P}{y} = \\dfrac{1}{2} \\times \\dfrac{9}{3} = 1{,}5$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Piège',
            stepTheme: 'Produire à perte',
            stepTitle: 'Faut-il produire à perte ?',
            paragraphText:
              '• Entre le seuil de fermeture et le seuil de rentabilité, la firme fait une perte… mais **moins grande** que si elle fermait (elle paierait quand même ses coûts fixes).\n' +
              '• Exemple : $C(y) = y^2 + 3y + 4$, $P = 5$ : $y = \\dfrac{5 - 3}{2} = 1$ ; recette $5$ ; coût $1 + 3 + 4 = 8$ ; perte $3$, inférieure au coût fixe $4$ → **elle produit**.',
            exercise: {
              id: `${C7}_p2_q6`,
              type: 'mcq',
              prompt:
                'Une entreprise en concurrence parfaite a pour coût total $C(y) = y^2 + 3y + 4$ (seuil de fermeture $P = 3$, seuil de rentabilité $P = 7$). Le prix du marché est $P = 5$. Que doit-elle faire à court terme ?',
              options: [
                'Produire $y = 1$ : elle perd 3, moins que ses coûts fixes de 4',
                'Fermer, car elle fait une perte',
                'Produire $y = 2$ pour atteindre le seuil de rentabilité',
                'Produire le plus possible pour couvrir ses coûts fixes',
              ],
              correctAnswerIndex: 0,
              explanation: '$P = Cm$ donne $y = 1$ ; profit $= 5 - (1 + 3 + 4) = -3$. En fermant, elle perdrait ses coûts fixes, soit 4. Produire limite la perte.',
            },
          },
        ],
      }),
    ],
  },
];
