// ============================================================================
// MODULE OFFICIEL : CHIMIE 2de A (PHYSIQUE-CHIMIE)
// Ministère de l'Éducation Nationale et de l'Alphabétisation (MENA - Côte d'Ivoire)
// Thème 3 : La matière et ses transformations
// Leçon 3 : Classification périodique des éléments chimiques
// Leçon 4 : Ions et molécules
// Leçon 5 : Mole et grandeurs molaires
// Règle absolue : Zéro code brut informatique, pédagogie pas-à-pas, 8 questions QCM par mini-leçon
// ============================================================================

import type { CurriculumChapter } from '../../lib/curriculum/types';

// ============================================================================
// LEÇON 1 : L'ÉLÉMENT CHIMIQUE
// ============================================================================
export const chimie2deAElementChimiqueChapter: CurriculumChapter = {
  id: 'seconde_a_chimie_ch1_element_chimique',
  subjectId: 'physique_chimie',
  gradeLevel: 'seconde_a',
  order: 1,
  officialVolumeHours: 6,
  title: "Leçon 1 — L'élément chimique",
  summary:
    "Mise en évidence expérimentale du cuivre sous différentes formes, définition officielle de l'élément chimique, distinction corps purs simples et composés, symboles normalisés des 118 éléments et origines historiques.",
  points: [
    {
      id: 'seconde_a_chimie_ch1_p1',
      order: 1,
      title: 'Mise en évidence expérimentale du cuivre',
      summary:
        'Expériences fondamentales du cuivre : combustion dans le dioxygène, réduction de CuO par le carbone et déplacement par le fer.',
      conceptExplanation: `L'étude de l'élément chimique repose sur des expériences historiques fondamentales montrant la persistance d'une entité commune à travers différentes transformations.

1. Réaction entre le cuivre et le dioxygène de l'air :
Lorsqu'on chauffe une lame de cuivre métallique rouge (Cu) dans la flamme d'un bec Bunsen en présence de dioxygène (O₂), il se forme à sa surface une couche solide noire d'oxyde de cuivre II (CuO).
Équation-bilan : 2 Cu + O₂ -> 2 CuO.

2. Action du carbone sur l'oxyde de cuivre II :
On chauffe dans un tube à essais un mélange noir intime d'oxyde de cuivre II (CuO) et de poudre de carbone (C).
Observations :
- Le mélange noir redevient rouge : il se forme du cuivre métallique (Cu).
- Le gaz dégagé est acheminé dans un tube contenant de l'eau de chaux : l'eau de chaux se trouble, prouvant la formation de dioxyde de carbone (CO₂).
Équation-bilan : 2 CuO + C -> 2 Cu + CO₂.

3. Action du fer sur les ions cuivre II :
On plonge un clou en fer (Fe) dans une solution aqueuse bleue de sulfate de cuivre (Cu²⁺ + SO₄²⁻) :
- La couleur bleue de la solution s'atténue puis disparaît : les ions cuivre II (Cu²⁺) sont consommés.
- Un dépôt rouge spongieux de cuivre métallique (Cu) se forme sur le fer.
- La solution devient vert pâle : des ions fer II (Fe²⁺) apparaissent.
Équation-bilan : Cu²⁺ + Fe -> Cu + Fe²⁺.

Conclusion essentielle :
Dans toutes ces réactions chimiques successives, le cuivre passe de l'état de métal (Cu) à l'état d'oxyde (CuO), puis à l'état d'ion (Cu²⁺), avant de redevenir du métal cuivre (Cu). Le cuivre se conserve : c'est un élément chimique.`,
      formulas: [
        {
          name: 'Combustion du cuivre dans le dioxygène',
          formula: '2 Cu + O₂ -> 2 CuO',
          note: "Formation d'oxyde de cuivre II solide de couleur noire."
        },
        {
          name: 'Réduction de CuO par le carbone',
          formula: '2 CuO + C -> 2 Cu + CO₂',
          note: "Régénération du cuivre rouge et dégagement de dioxyde de carbone troublant l'eau de chaux."
        },
        {
          name: 'Action du fer sur les ions cuivre II',
          formula: 'Cu²⁺ + Fe -> Cu + Fe²⁺',
          note: "Dépôt de cuivre rouge sur le fer et coloration verte de la solution par Fe²⁺."
        }
      ],
      workedExample: {
        title: "Situation d'évaluation officielle : Cycle du cuivre et conservation de l'élément",
        statement: "On plonge une lame de fer dans une solution bleue de sulfate de cuivre II. Expliquer les observations et justifier la conservation du cuivre.",
        methodSteps: [
          "Étape 1 : Observer la décoloration de la solution bleue (disparition progressive des ions Cu²⁺) et l'apparition d'un dépôt rouge métallique de cuivre Cu sur le fer.",
          "Étape 2 : Écrire l'équation-bilan de la réaction : Cu²⁺ + Fe -> Cu + Fe²⁺.",
          "Étape 3 : Constater que la solution vire au vert pâle en raison de la formation des ions fer II Fe²⁺."
        ],
        conclusion: "Les atomes de cuivre sont passés de l'état d'ions Cu²⁺ en solution à l'état de métal Cu solide. L'élément cuivre s'est conservé."
      },
      exercises: [
        {
          id: 'seconde_a_chimie_ch1_p1_ex1',
          type: 'mcq',
          prompt: "Quelle est la couleur du solide d'oxyde de cuivre II (CuO) formé lors de la combustion du cuivre ?",
          options: ['Noir', 'Rouge vif', 'Bleu ciel', 'Blanc'],
          correctAnswerIndex: 0,
          explanation: "La combustion du cuivre métallique rouge dans le dioxygène de l'air produit une couche superficielle d'oxyde de cuivre II (CuO) de couleur noire."
        },
        {
          id: 'seconde_a_chimie_ch1_p1_ex2',
          type: 'mcq',
          prompt: "Quelle est l'équation-bilan traduisant la combustion complète du cuivre métallique dans le dioxygène ?",
          options: ['2 Cu + O₂ -> 2 CuO', 'Cu + O₂ -> CuO₂', 'Cu + O -> CuO', '4 Cu + O₂ -> 2 Cu₂O'],
          correctAnswerIndex: 0,
          explanation: "Deux atomes de cuivre réagissent avec une molécule de dioxygène pour donner deux unités d'oxyde de cuivre II : 2 Cu + O₂ -> 2 CuO."
        },
        {
          id: 'seconde_a_chimie_ch1_p1_ex3',
          type: 'mcq',
          prompt: "Quel réactif permet de régénérer le cuivre rouge à partir de l'oxyde de cuivre II chauffé ?",
          options: ['Le carbone (C)', 'Le dioxygène (O₂)', "L'eau (H₂O)", "L'azote (N₂)"],
          correctAnswerIndex: 0,
          explanation: "L'action du carbone sur l'oxyde de cuivre II à chaud arrache l'oxygène au cuivre pour former du dioxyde de carbone et régénérer le métal cuivre rouge."
        },
        {
          id: 'seconde_a_chimie_ch1_p1_ex4',
          type: 'mcq',
          prompt: "Quel gaz dégagé lors de la réaction entre CuO et le carbone trouble l'eau de chaux ?",
          options: ['Le dioxyde de carbone (CO₂)', 'Le monoxyde de carbone (CO)', 'Le dihydrogène (H₂)', 'Le diazote (N₂)'],
          correctAnswerIndex: 0,
          explanation: "Le dioxyde de carbone CO₂ est le gaz caractéristique qui trouble l'eau de chaux par formation d'un précipité blanc de carbonate de calcium."
        },
        {
          id: 'seconde_a_chimie_ch1_p1_ex5',
          type: 'mcq',
          prompt: "Quelle espèce chimique est responsable de la couleur bleue initiale de la solution de sulfate de cuivre ?",
          options: ['Les ions cuivre II (Cu²⁺)', 'Les ions sulfate (SO₄²⁻)', 'Les atomes de fer (Fe)', "L'eau pure"],
          correctAnswerIndex: 0,
          explanation: "Les ions hydratés cuivre II Cu²⁺ confèrent leur coloration bleue caractéristique aux solutions aqueuses de cuivre."
        },
        {
          id: 'seconde_a_chimie_ch1_p1_ex6',
          type: 'mcq',
          prompt: "Lorsqu'on plonge un clou en fer dans du sulfate de cuivre, quelle observation montre la formation de métal cuivre ?",
          options: [
            "L'apparition d'un dépôt rouge métallique sur le fer",
            "L'apparition d'un précipité blanc",
            "Un dégagement de fumée jaune",
            "Une décoloration instantanée sans dépôt"
          ],
          correctAnswerIndex: 0,
          explanation: "Les ions Cu²⁺ en solution captent deux électrons cédés par le fer pour se transformer en atomes de cuivre métallique formant un dépôt rouge sur le clou."
        },
        {
          id: 'seconde_a_chimie_ch1_p1_ex7',
          type: 'mcq',
          prompt: "Quelle nouvelle espèce chimique colore la solution en vert pâle à la fin de la réaction entre le fer et les ions Cu²⁺ ?",
          options: ['Les ions fer II (Fe²⁺)', 'Les ions fer III (Fe³⁺)', 'Les molécules de dioxygène', 'Les ions chlorure'],
          correctAnswerIndex: 0,
          explanation: "Le fer métallique Fe s'oxyde en cédant deux électrons pour former des ions fer II Fe²⁺ de couleur vert pâle en solution aqueuse."
        },
        {
          id: 'seconde_a_chimie_ch1_p1_ex8',
          type: 'mcq',
          prompt: "Quelle conclusion fondamentale tire-t-on de ce cycle de réactions du cuivre ?",
          options: [
            "L'élément cuivre se conserve sous diverses formes au cours des transformations chimiques",
            "Le cuivre est détruit et recréé spontanément",
            "Le fer se transforme en atome de cuivre",
            "Le carbone fabrique du cuivre à partir de rien"
          ],
          correctAnswerIndex: 0,
          explanation: "Au cours de toutes ces réactions chimiques, le cuivre se conserve intégralement sous forme de métal Cu, d'oxyde CuO ou d'ions Cu²⁺. C'est le principe de conservation de l'élément chimique."
        }
      ]
    },
    {
      id: 'seconde_a_chimie_ch1_p2',
      order: 2,
      title: "Définition de l'élément chimique, corps purs simples et composés",
      summary:
        "Définition officielle de l'élément chimique, critères de classification entre corps purs simples (un seul élément) et corps purs composés (plusieurs éléments).",
      conceptExplanation: `La matière qui nous entoure est constituée d'une immense variété de substances, mais toutes sont formées à partir d'un nombre restreint d'éléments chimiques.

1. Définition officielle de l'élément chimique :
L'élément chimique est ce qui est commun à un corps pur simple et à tous ses composés.
Par exemple, l'élément cuivre est commun au métal cuivre (Cu), à l'oxyde de cuivre II (CuO), au sulfate de cuivre (CuSO₄) et au carbonate de cuivre (CuCO₃).

2. Distinction fondamentale : Corps simple vs Corps composé :
- Un corps pur simple est une substance pure dont les molécules ou le réseau cristallin sont constitués d'atomes d'un seul et unique élément chimique.
  Exemples :
  * Dihydrogène (H₂) : formé uniquement de l'élément hydrogène.
  * Dioxygène (O₂) et Ozone (O₃) : formés uniquement de l'élément oxygène.
  * Cuivre métallique (Cu), Fer (Fe), Aluminium (Al), Carbone graphite (C), Néon (Ne).
- Un corps pur composé est une substance pure constituée d'atomes d'au moins deux éléments chimiques différents chimiquement combinés.
  Exemples :
  * Eau (H₂O) : formée des éléments hydrogène et oxygène.
  * Dioxyde de carbone (CO₂) : formé des éléments carbone et oxygène.
  * Méthane (CH₄) : formé des éléments carbone et hydrogène.
  * Chlorure de sodium (NaCl) : formé des éléments sodium et chlore.
  * Sucre / Saccharose (C₁₂H₂₂O₁₁) : formé des éléments carbone, hydrogène et oxygène.

3. Conservation des éléments lors des réactions :
Dans toute transformation chimique normale, les éléments chimiques présents dans les réactifs se retrouvent intégralement dans les produits formés. Rien ne se perd, rien ne se crée : c'est la loi de conservation des éléments formulée par Lavoisier.`,
      formulas: [
        {
          name: "Définition officielle de l'élément chimique",
          formula: "Élément = entité commune à un corps simple et à tous ses composés",
          note: "Définition universelle du programme officiel MENA."
        },
        {
          name: 'Conservation des éléments',
          formula: 'Éléments dans les réactifs = Éléments dans les produits',
          note: 'Les atomes se réarrangent sans jamais changer de nature.'
        }
      ],
      workedExample: {
        title: "Situation d'évaluation officielle : Décomposition thermique du sucre en vase clos",
        statement: "En chauffant du sucre en poudre dans un tube à essais sec et bouché, on recueille un solide noir (charbon) et des gouttelettes d'eau sur les parois. Quels éléments chimiques composent le sucre ?",
        methodSteps: [
          "Étape 1 : Identifier le résidu noir solide comme étant du carbone pur (élément C).",
          "Étape 2 : Identifier le liquide condensé comme étant de l'eau pure H₂O, composée d'hydrogène (élément H) et d'oxygène (élément O).",
          "Étape 3 : Appliquer le principe de Lavoisier de conservation des éléments chimiques."
        ],
        conclusion: "Le sucre (saccharose) est un corps pur composé constitué des éléments carbone (C), hydrogène (H) et oxygène (O)."
      },
      exercises: [
        {
          id: 'seconde_a_chimie_ch1_p2_ex1',
          type: 'mcq',
          prompt: "Selon la définition officielle du programme, qu'est-ce qu'un élément chimique ?",
          options: [
            "Ce qui est commun à un corps simple et à tous ses composés",
            "Un mélange hétérogène de plusieurs gaz",
            "Une molécule contenant uniquement des liaisons doubles",
            "Un métal obligatoirement liquide à température ambiante"
          ],
          correctAnswerIndex: 0,
          explanation: "L'élément chimique est rigoureusement défini comme ce qui est commun à un corps simple et à tous ses composés."
        },
        {
          id: 'seconde_a_chimie_ch1_p2_ex2',
          type: 'mcq',
          prompt: "Parmi les espèces suivantes, laquelle est un corps pur simple ?",
          options: ['Le dioxygène (O₂)', "L'eau (H₂O)", 'Le dioxyde de carbone (CO₂)', "L'ammoniac (NH₃)"],
          correctAnswerIndex: 0,
          explanation: "Le dioxygène O₂ est constitué uniquement d'atomes d'oxygène : c'est un corps pur simple. H₂O, CO₂ et NH₃ sont formés d'éléments différents : ce sont des corps composés."
        },
        {
          id: 'seconde_a_chimie_ch1_p2_ex3',
          type: 'mcq',
          prompt: "Parmi les espèces suivantes, laquelle est un corps pur composé ?",
          options: ['Le méthane (CH₄)', "L'ozone (O₃)", 'Le fer métal (Fe)', 'Le diazote (N₂)'],
          correctAnswerIndex: 0,
          explanation: "Le méthane CH₄ contient deux éléments chimiques distincts (le carbone et l'hydrogène) : c'est donc un corps composé."
        },
        {
          id: 'seconde_a_chimie_ch1_p2_ex4',
          type: 'mcq',
          prompt: "Le dioxygène O₂ et l'ozone O₃ sont deux variétés d'un même élément. Comment qualifie-t-on ces deux substances ?",
          options: [
            "Deux corps simples de l'élément oxygène",
            "Deux corps composés différents",
            "Un mélange hétérogène",
            "Deux atomes isolés sans liaison"
          ],
          correctAnswerIndex: 0,
          explanation: "O₂ et O₃ sont tous deux constitués uniquement de l'élément oxygène : ce sont des corps simples allotropiques de l'élément oxygène."
        },
        {
          id: 'seconde_a_chimie_ch1_p2_ex5',
          type: 'mcq',
          prompt: "Quels sont les éléments chimiques communs aux hydrocarbures, au sucre (C₆H₁₂O₆) et à l'alcool (C₂H₆O) ?",
          options: [
            "Le carbone (C) et l'hydrogène (H)",
            "L'azote (N) et l'oxygène (O)",
            "Le fer (Fe) et le cuivre (Cu)",
            "Le chlore (Cl) et le sodium (Na)"
          ],
          correctAnswerIndex: 0,
          explanation: "Le carbone C et l'hydrogène H sont obligatoirement présents dans toutes ces molécules organiques."
        },
        {
          id: 'seconde_a_chimie_ch1_p2_ex6',
          type: 'mcq',
          prompt: "Combien d'éléments chimiques distincts renferme la molécule de sulfate d'aluminium Al₂(SO₄)₃ ?",
          options: ['3 éléments : Al, S et O', '2 éléments : Al et S', '9 éléments distincts', '1 élément unique'],
          correctAnswerIndex: 0,
          explanation: "La formule Al₂(SO₄)₃ contient 3 éléments chimiques différents : l'aluminium (Al), le soufre (S) et l'oxygène (O)."
        },
        {
          id: 'seconde_a_chimie_ch1_p2_ex7',
          type: 'mcq',
          prompt: "Lorsqu'on chauffe du sucre en vase clos, il se forme du charbon de sucre (carbone) et de la vapeur d'eau (H₂O). Quels éléments chimiques constituent le sucre ?",
          options: [
            "Carbone (C), hydrogène (H) et oxygène (O)",
            "Carbone (C) et azote (N)",
            "Fer (Fe) et oxygène (O)",
            "Hydrogène (H) uniquement"
          ],
          correctAnswerIndex: 0,
          explanation: "Puisque les produits de décomposition contiennent du carbone (C) et de l'eau (H₂O = H et O), le sucre initial était obligatoirement constitué de carbone, d'hydrogène et d'oxygène."
        },
        {
          id: 'seconde_a_chimie_ch1_p2_ex8',
          type: 'mcq',
          prompt: "Que deviennent les éléments chimiques au cours d'une transformation chimique ?",
          options: [
            "Ils se conservent entièrement (conservation des éléments)",
            "Certains disparaissent définitivement",
            "De nouveaux éléments inexistants apparaissent",
            "Ils se transforment en énergie pure"
          ],
          correctAnswerIndex: 0,
          explanation: "Dans toute réaction chimique, la nature et le nombre de chaque élément chimique se conservent rigoureusement entre les réactifs et les produits."
        }
      ]
    },
    {
      id: 'seconde_a_chimie_ch1_p3',
      order: 3,
      title: 'Symboles des éléments chimiques et origines historiques',
      summary:
        'Règles internationales de nomenclature : écriture des symboles, 118 éléments (93 naturels, 25 artificiels), et symboles dérivés de noms anciens ou latins.',
      conceptExplanation: `Pour désigner les éléments chimiques de manière universelle et compréhensible par les scientifiques du monde entier, des symboles normalisés ont été établis par l'IUPAC.

1. Règles d'écriture des symboles chimiques :
- Le symbole d'un élément chimique est toujours représenté par une lettre majuscule, généralement la première lettre de son nom français ou latin.
  Exemples : Carbone -> C, Hydrogène -> H, Oxygène -> O, Azote -> N, Soufre -> S.
- Lorsque plusieurs éléments commencent par la même lettre, on ajoute une seconde lettre en minuscule pour les différencier.
  Exemples :
  * C : Carbone | Ca : Calcium | Cu : Cuivre | Co : Cobalt | Cl : Chlore.
  * H : Hydrogène | He : Hélium.
  * N : Azote (Nitrogène) | Na : Sodium (Natrium) | Ne : Néon.

2. Symboles issus du latin ou de noms anciens :
Certains symboles proviennent du nom latin, grec ou allemand de l'élément :
- Azote : symbole N (du latin Nitrogène)
- Sodium : symbole Na (du latin Natrium)
- Potassium : symbole K (du latin Kalium)
- Mercure : symbole Hg (du grec Hydrargyrum = argent liquide)
- Or : symbole Au (du latin Aurum)
- Argent : symbole Ag (du latin Argentum)
- Fer : symbole Fe (du latin Ferrum)
- Étain : symbole Sn (du latin Stannum)
- Plomb : symbole Pb (du latin Plumbum)
- Cuivre : symbole Cu (du latin Cuprum)
- Tungstène : symbole W (de l'allemand Wolfram).

3. Nombre d'éléments connus :
On dénombre actuellement 118 éléments chimiques officiellement homologués dans la classification périodique :
- 93 éléments naturels (présents sur Terre ou dans l'univers à l'état naturel).
- 25 éléments artificiels (créés synthétiquement par l'Homme en laboratoire de physique nucléaire).`,
      formulas: [
        {
          name: "Règle universelle d'écriture",
          formula: "Symbole = 1 lettre MAJUSCULE (+ 1 lettre minuscule)",
          note: "Ex : C (Carbone), Cu (Cuivre), Ca (Calcium)."
        },
        {
          name: 'Statistiques officielles',
          formula: '118 éléments = 93 naturels + 25 artificiels',
          note: 'Données officielles du programme de Seconde A.'
        }
      ],
      workedExample: {
        title: "Situation d'évaluation officielle : Distinction et nomenclature des symboles chimiques",
        statement: "Écrire les symboles chimiques du carbone, du calcium, du cobalt, du cuivre et du monoxyde de carbone en expliquant la règle de la deuxième lettre minuscule.",
        methodSteps: [
          "Étape 1 : Le carbone s'écrit C avec une seule lettre majuscule.",
          "Étape 2 : Pour distinguer le calcium, le cobalt et le cuivre qui débutent par C, on ajoute une minuscule : Ca pour calcium, Co pour cobalt, Cu pour cuivre.",
          "Étape 3 : Pour le monoxyde de carbone CO, il y a deux majuscules C et O car c'est une molécule formée de deux éléments différents."
        ],
        conclusion: "Une lettre majuscule suivie d'une minuscule désigne toujours un seul élément chimique unique (ex : Co), tandis que deux majuscules désignent deux éléments combinés (ex : CO)."
      },
      exercises: [
        {
          id: 'seconde_a_chimie_ch1_p3_ex1',
          type: 'mcq',
          prompt: "Comment s'écrit obligatoirement le symbole d'un élément chimique comportant deux lettres ?",
          options: [
            "Une première lettre majuscule suivie d'une minuscule (ex : Na, Cu, Fe)",
            "Deux lettres majuscules (ex : NA, CU, FE)",
            "Deux lettres minuscules (ex : na, cu, fe)",
            "Une minuscule suivie d'une majuscule (ex : nA, cU)"
          ],
          correctAnswerIndex: 0,
          explanation: "La règle internationale impose une première lettre toujours MAJUSCULE et, si elle existe, la deuxième lettre obligatoirement minuscule (ex : Co pour le cobalt, à ne pas confondre avec CO qui est le monoxyde de carbone)."
        },
        {
          id: 'seconde_a_chimie_ch1_p3_ex2',
          type: 'mcq',
          prompt: "Quel est le symbole chimique officiel de l'élément azote, dérivé de son nom ancien nitrogène ?",
          options: ['N', 'Az', 'A', 'Na'],
          correctAnswerIndex: 0,
          explanation: "L'azote a pour symbole officiel N, issu de son appellation latine Nitrogène."
        },
        {
          id: 'seconde_a_chimie_ch1_p3_ex3',
          type: 'mcq',
          prompt: "Quel est le symbole chimique de l'élément sodium, dérivé du latin natrium ?",
          options: ['Na', 'So', 'S', 'Sd'],
          correctAnswerIndex: 0,
          explanation: "Le symbole du sodium est Na, provenant du terme latin Natrium (S étant réservé au soufre)."
        },
        {
          id: 'seconde_a_chimie_ch1_p3_ex4',
          type: 'mcq',
          prompt: "Quel est le symbole chimique de l'élément potassium, dérivé du latin kalium ?",
          options: ['K', 'P', 'Po', 'Pt'],
          correctAnswerIndex: 0,
          explanation: "Le symbole du potassium est K (du latin Kalium), la lettre P désignant le phosphore."
        },
        {
          id: 'seconde_a_chimie_ch1_p3_ex5',
          type: 'mcq',
          prompt: "Quel est le symbole chimique de l'élément or, dérivé du latin aurum ?",
          options: ['Au', 'O', 'Or', 'Ar'],
          correctAnswerIndex: 0,
          explanation: "L'or a pour symbole Au (du latin Aurum), O étant l'oxygène et Ar l'argon."
        },
        {
          id: 'seconde_a_chimie_ch1_p3_ex6',
          type: 'mcq',
          prompt: "Quel élément chimique a pour symbole W, provenant de son nom d'origine wolfram ?",
          options: ['Le tungstène', 'Le plomb', "L'étain", 'Le zinc'],
          correctAnswerIndex: 0,
          explanation: "Le tungstène a pour symbole officiel W, du nom allemand de son minerai le wolfram."
        },
        {
          id: 'seconde_a_chimie_ch1_p3_ex7',
          type: 'mcq',
          prompt: "Combien d'éléments chimiques naturels dénombre-t-on sur les 118 éléments répertoriés ?",
          options: ['93 éléments naturels', '118 éléments naturels', '50 éléments naturels', '25 éléments naturels'],
          correctAnswerIndex: 0,
          explanation: "Sur les 118 éléments connus, 93 existent à l'état naturel sur Terre ou dans l'espace, les 25 autres étant créés artificiellement en laboratoire."
        },
        {
          id: 'seconde_a_chimie_ch1_p3_ex8',
          type: 'mcq',
          prompt: "Pourquoi écrit-on 'Co' pour le cobalt et non 'CO' ?",
          options: [
            "Parce que 'Co' est l'élément cobalt, tandis que 'CO' est le composé monoxyde de carbone (C et O)",
            "Parce que les majuscules sont interdites en chimie",
            "Parce que le cobalt est un gaz noble",
            "C'est une simple erreur typographique sans conséquence"
          ],
          correctAnswerIndex: 0,
          explanation: "Une majuscule ouvre un nouvel élément chimique : 'Co' désigne l'atome de cobalt, alors que 'CO' désigne une molécule constituée d'un atome de carbone et d'un atome d'oxygène."
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 2 : STRUCTURE DE L'ATOME
// ============================================================================
export const chimie2deAStructureAtomeChapter: CurriculumChapter = {
  id: 'seconde_a_chimie_ch2_structure_de_l_atome',
  subjectId: 'physique_chimie',
  gradeLevel: 'seconde_a',
  order: 2,
  officialVolumeHours: 8,
  title: "Leçon 2 — Structure de l'atome",
  summary:
    "Constituants de l'atome (protons, neutrons, électrons), numéro atomique Z, nombre de masse A, nucléides et isotopes, masse et dimensions (structure lacunaire), structure électronique en couches K, L, M et représentation de Lewis.",
  points: [
    {
      id: 'seconde_a_chimie_ch2_p1',
      order: 1,
      title: "Les constituants de l'atome et électroneutralité",
      summary:
        'Le noyau central formé de nucléons (protons positifs et neutrons neutres) et le cortège électronique constitué d électrons négatifs.',
      conceptExplanation: `L'atome est la brique élémentaire constitutive de toute la matière. Il possède une structure interne bien définie comprenant deux parties : un noyau central et un cortège d'électrons en mouvement autour de lui.

1. L'électron :
- Symbole : e⁻.
- Masse d'un électron : m_e = 9,1 × 10⁻³¹ kg.
- Charge électrique d'un électron : q_e = -e = -1,6 × 10⁻¹⁹ C.
La grandeur e = 1,6 × 10⁻¹⁹ C (Coulomb) est la charge électrique élémentaire : c'est la plus petite quantité de charge électrique isolable dans la nature.

2. Le noyau atomique et les nucléons :
Le noyau de l'atome est formé de particules élémentaires appelées nucléons. On distingue deux sortes de nucléons :
- Les protons :
  * Symbole : p.
  * Charge : q_p = +e = +1,6 × 10⁻¹⁹ C.
  * Masse : m_p = 1,67 × 10⁻²⁷ kg.
- Les neutrons :
  * Symbole : n.
  * Charge : q_n = 0 C (particules électriquement neutres).
  * Masse : m_n = 1,67 × 10⁻²⁷ kg (sensiblement égale à celle du proton).

3. L'électroneutralité de l'atome :
Dans un atome neutre, la charge électrique positive totale portée par les protons du noyau compense exactement la charge électrique négative totale portée par les électrons gravitant autour du noyau.
Par conséquent, un atome possède rigoureusement autant de protons dans son noyau que d'électrons dans son cortège électronique.`,
      formulas: [
        {
          name: 'Charge électrique élémentaire',
          formula: 'e = 1,6 × 10⁻¹⁹ C',
          note: 'Valeur fondamentale universelle en coulombs.'
        },
        {
          name: 'Masse des nucléons',
          formula: 'm_p ≈ m_n ≈ 1,67 × 10⁻²⁷ kg',
          note: 'Environ 1836 fois plus lourds qu\'un électron.'
        },
        {
          name: "Électroneutralité",
          formula: "Nombre de protons = Nombre d'électrons",
          note: "Charge globale de l'atome = 0."
        }
      ],
      workedExample: {
        title: "Situation d'évaluation officielle : Détermination des constituants d'un atome neutre",
        statement: "Le noyau d'un atome de potassium possède une charge totale Q = +30,4 × 10⁻¹⁹ C. Déterminer le nombre de protons et le nombre d'électrons de cet atome neutre.",
        methodSteps: [
          "Étape 1 : Rappeler que chaque proton porte la charge élémentaire positive +e = +1,6 × 10⁻¹⁹ C.",
          "Étape 2 : Calculer le nombre de protons Z = Q / e = (30,4 × 10⁻¹⁹ C) / (1,6 × 10⁻¹⁹ C) = 19 protons.",
          "Étape 3 : Utiliser le principe d'électroneutralité : l'atome neutre possède autant d'électrons que de protons."
        ],
        conclusion: "L'atome de potassium possède 19 protons dans son noyau et 19 électrons dans son cortège électronique."
      },
      exercises: [
        {
          id: 'seconde_a_chimie_ch2_p1_ex1',
          type: 'mcq',
          prompt: "Quels sont les deux types de particules qui composent les nucléons du noyau atomique ?",
          options: ['Les protons et les neutrons', 'Les protons et les électrons', 'Les neutrons et les électrons', 'Les ions et les molécules'],
          correctAnswerIndex: 0,
          explanation: "Le noyau atomique est constitué exclusivement de nucléons, qui regroupent les protons (chargés positivement) et les neutrons (électriquement neutres)."
        },
        {
          id: 'seconde_a_chimie_ch2_p1_ex2',
          type: 'mcq',
          prompt: "Quelle est la charge électrique d'un électron ?",
          options: ['-1,6 × 10⁻¹⁹ C', '+1,6 × 10⁻¹⁹ C', '0 C', '+3,2 × 10⁻¹⁹ C'],
          correctAnswerIndex: 0,
          explanation: "L'électron porte une charge négative égale à l'opposé de la charge élémentaire : q_e = -e = -1,6 × 10⁻¹⁹ C."
        },
        {
          id: 'seconde_a_chimie_ch2_p1_ex3',
          type: 'mcq',
          prompt: "Quelle est la charge électrique d'un neutron ?",
          options: ['0 C (neutre)', '+1,6 × 10⁻¹⁹ C', '-1,6 × 10⁻¹⁹ C', '-3,2 × 10⁻¹⁹ C'],
          correctAnswerIndex: 0,
          explanation: "Comme son nom l'indique, le neutron est électriquement neutre : sa charge est nulle (0 C)."
        },
        {
          id: 'seconde_a_chimie_ch2_p1_ex4',
          type: 'mcq',
          prompt: "Pourquoi dit-on qu'un atome est électriquement neutre ?",
          options: [
            "Parce qu'il contient autant de protons (+) dans le noyau que d'électrons (-) autour du noyau",
            "Parce qu'il ne contient aucune charge électrique",
            "Parce que les neutrons détruisent les charges des protons",
            "Parce que les électrons sont immobiles"
          ],
          correctAnswerIndex: 0,
          explanation: "Dans un atome neutre, le nombre de protons (portant +e) est strictement égal au nombre d'électrons (portant -e), si bien que la somme algébrique des charges est nulle."
        },
        {
          id: 'seconde_a_chimie_ch2_p1_ex5',
          type: 'mcq',
          prompt: "Si le noyau d'un atome de calcium contient 20 protons, combien d'électrons gravitent autour de ce noyau dans l'atome neutre ?",
          options: ['20 électrons', '40 électrons', '10 électrons', '0 électron'],
          correctAnswerIndex: 0,
          explanation: "Pour respecter l'électroneutralité, un atome neutre possédant 20 protons contient obligatoirement 20 électrons."
        },
        {
          id: 'seconde_a_chimie_ch2_p1_ex6',
          type: 'mcq',
          prompt: "Quel rapport de masse existe approximativement entre un proton et un électron ?",
          options: [
            "Le proton est environ 1836 fois plus lourd que l'électron",
            "Le proton et l'électron ont exactement la même masse",
            "L'électron est 1000 fois plus lourd que le proton",
            "Le proton est 10 fois plus léger que l'électron"
          ],
          correctAnswerIndex: 0,
          explanation: "m_p / m_e = (1,67 × 10⁻²⁷) / (9,1 × 10⁻³¹) ≈ 1836. Le proton est près de 2000 fois plus massif que l'électron."
        },
        {
          id: 'seconde_a_chimie_ch2_p1_ex7',
          type: 'mcq',
          prompt: "Quelle est la valeur de la charge électrique élémentaire e ?",
          options: ['1,6 × 10⁻¹⁹ C', '9,1 × 10⁻³¹ C', '1,67 × 10⁻²⁷ C', '6,02 × 10²³ C'],
          correctAnswerIndex: 0,
          explanation: "La charge électrique élémentaire est une constante physique universelle valant e = 1,6 × 10⁻¹⁹ Coulomb."
        },
        {
          id: 'seconde_a_chimie_ch2_p1_ex8',
          type: 'mcq',
          prompt: "Le noyau d'un atome porte une charge positive totale Q = +30,4 × 10⁻¹⁹ C. Combien de protons renferme ce noyau ?",
          options: ['19 protons', '20 protons', '16 protons', '39 protons'],
          correctAnswerIndex: 0,
          explanation: "Le nombre de protons est Z = Q / e = (30,4 × 10⁻¹⁹) / (1,6 × 10⁻¹⁹) = 19 protons (il s'agit de l'élément potassium K)."
        }
      ]
    },
    {
      id: 'seconde_a_chimie_ch2_p2',
      order: 2,
      title: 'Nucléides, numéro atomique Z, nombre de masse A et isotopie',
      summary:
        'Définition du numéro atomique Z (nombre de protons), du nombre de masse A (nombre de nucléons), écriture conventionnelle d un nucléide et isotopes.',
      conceptExplanation: `Pour caractériser précisément un atome et son noyau, les physiciens utilisent une notation universelle standardisée.

1. Numéro atomique Z et nombre de masse A :
- Le numéro atomique (noté Z), aussi appelé nombre de charge, représente le nombre de protons contenus dans le noyau de l'atome.
- Le nombre de masse (noté A) représente le nombre total de nucléons (protons + neutrons) contenus dans le noyau.
- Le nombre de neutrons (noté N) est donné par la relation fondamentale :
  A = Z + N   d'où   N = A - Z.

2. Notion de nucléide et écriture symbolique :
Un nucléide est l'ensemble des atomes dont le noyau possède un nombre donné de protons Z et un nombre donné de neutrons N (donc un couple (Z, A) identique).
Le symbole conventionnel d'un nucléide s'écrit :
  A en haut à gauche et Z en bas à gauche du symbole chimique X :
  (A/Z) X.
Exemples :
- ¹²₆C : Carbone 12 (Z = 6 protons, A = 12 nucléons, N = 12 - 6 = 6 neutrons).
- ²³₁₁Na : Sodium 23 (Z = 11 protons, A = 23 nucléons, N = 23 - 11 = 12 neutrons).
- ³⁵₁₇Cl : Chlore 35 (Z = 17 protons, A = 35 nucléons, N = 35 - 17 = 18 neutrons).

3. Notion d'isotopie (les isotopes) :
On appelle isotopes des nucléides qui possèdent le même numéro atomique Z (même nombre de protons, donc appartenant au même élément chimique) mais des nombres de masse A différents (nombres de neutrons différents).
Exemples :
- Isotopes du carbone : ¹²₆C (6 neutrons), ¹³₆C (7 neutrons) et ¹⁴₆C (8 neutrons).
- Isotopes de l'oxygène : ¹⁶₈O (8 neutrons), ¹⁷₈O (9 neutrons) et ¹⁸₈O (10 neutrons).
- Isotopes de l'uranium : ²³⁵₉₂U (143 neutrons) et ²³⁸₉₂U (146 neutrons).`,
      formulas: [
        {
          name: 'Relation fondamentale des nucléons',
          formula: 'A = Z + N  d\'où  N = A - Z',
          note: 'A = nucléons, Z = protons, N = neutrons.'
        },
        {
          name: "Définition des isotopes",
          formula: "Même Z (même élément) mais A différents (N différents)",
          note: 'Propriétés chimiques quasi identiques.'
        }
      ],
      workedExample: {
        title: "Situation d'évaluation officielle : Composition et isotopie des nucléides de l'uranium",
        statement: "Déterminer le nombre de protons, de neutrons et de nucléons des deux isotopes naturels de l'uranium : ²³⁵₉₂U et ²³⁸₉₂U.",
        methodSteps: [
          "Étape 1 : Pour ²³⁵₉₂U : Z = 92 protons, A = 235 nucléons. Nombre de neutrons : N = A - Z = 235 - 92 = 143 neutrons.",
          "Étape 2 : Pour ²³⁸₉₂U : Z = 92 protons, A = 238 nucléons. Nombre de neutrons : N = A - Z = 238 - 92 = 146 neutrons.",
          "Étape 3 : Comparer les deux nucléides : ils ont le même Z (92) mais des valeurs de A différentes (235 ≠ 238)."
        ],
        conclusion: "²³⁵₉₂U et ²³⁸₉₂U sont des nucléides isotopes de l'élément uranium."
      },
      exercises: [
        {
          id: 'seconde_a_chimie_ch2_p2_ex1',
          type: 'mcq',
          prompt: "Dans la représentation conventionnelle d'un nucléide (A/Z)X, que représente le nombre Z situé en bas à gauche ?",
          options: [
            "Le numéro atomique (nombre de protons)",
            "Le nombre de masse (nombre total de nucléons)",
            "Le nombre de neutrons uniquement",
            "La masse en grammes de l'atome"
          ],
          correctAnswerIndex: 0,
          explanation: "Z est le numéro atomique : il indique le nombre de protons présents dans le noyau (et aussi le nombre d'électrons de l'atome neutre)."
        },
        {
          id: 'seconde_a_chimie_ch2_p2_ex2',
          type: 'mcq',
          prompt: "Combien de neutrons renferme le noyau du nucléide de sodium ²³₁₁Na ?",
          options: ['12 neutrons', '11 neutrons', '23 neutrons', '34 neutrons'],
          correctAnswerIndex: 0,
          explanation: "Le nombre de neutrons est N = A - Z = 23 - 11 = 12 neutrons."
        },
        {
          id: 'seconde_a_chimie_ch2_p2_ex3',
          type: 'mcq',
          prompt: "Combien de protons et de neutrons contient le nucléide de chlore ³⁵₁₇Cl ?",
          options: [
            '17 protons et 18 neutrons',
            '35 protons et 17 neutrons',
            '17 protons et 35 neutrons',
            '18 protons et 17 neutrons'
          ],
          correctAnswerIndex: 0,
          explanation: "Z = 17 protons, et le nombre de neutrons est N = A - Z = 35 - 17 = 18 neutrons."
        },
        {
          id: 'seconde_a_chimie_ch2_p2_ex4',
          type: 'mcq',
          prompt: "Par définition, que sont deux nucléides isotopes ?",
          options: [
            "Des nucléides ayant le même numéro atomique Z mais des nombres de masse A différents",
            "Des nucléides ayant le même nombre de masse A mais des Z différents",
            "Des atomes ayant le même nombre d'électrons et de neutrons",
            "Deux molécules de même formule brute"
          ],
          correctAnswerIndex: 0,
          explanation: "Les isotopes appartiennent au même élément chimique (même Z) mais diffèrent par leur nombre de neutrons (A différent)."
        },
        {
          id: 'seconde_a_chimie_ch2_p2_ex5',
          type: 'mcq',
          prompt: "Parmi les couples de nucléides suivants, lequel représente des isotopes ?",
          options: ['²³⁵₉₂U et ²³⁸₉₂U', '¹⁴₆C et ¹⁴₇N', '²³₁₁Na et ²⁴₁₂Mg', '¹⁶₈O et ¹⁹₉F'],
          correctAnswerIndex: 0,
          explanation: "²³⁵₉₂U et ²³⁸₉₂U ont tous deux Z = 92 (même élément uranium) avec des nombres de masse différents (235 et 238) : ce sont des isotopes."
        },
        {
          id: 'seconde_a_chimie_ch2_p2_ex6',
          type: 'mcq',
          prompt: "Les nucléides du carbone ¹²₆C, ¹³₆C et ¹⁴₆C possèdent respectivement combien de neutrons ?",
          options: ['6, 7 et 8 neutrons', '12, 13 et 14 neutrons', '6 neutrons chacun', '0, 1 et 2 neutrons'],
          correctAnswerIndex: 0,
          explanation: "Pour chaque isotope : N(¹²C) = 12 - 6 = 6 ; N(¹³C) = 13 - 6 = 7 ; N(¹⁴C) = 14 - 6 = 8 neutrons."
        },
        {
          id: 'seconde_a_chimie_ch2_p2_ex7',
          type: 'mcq',
          prompt: "Qu'est-ce qui caractérise un élément chimique de manière unique ?",
          options: ['Son numéro atomique Z', 'Son nombre de neutrons N', 'Son nombre de masse A', 'Sa température de fusion'],
          correctAnswerIndex: 0,
          explanation: "Tous les atomes ayant le même numéro atomique Z appartiennent obligatoirement au même élément chimique. Z est l'identifiant fondamental de l'élément."
        },
        {
          id: 'seconde_a_chimie_ch2_p2_ex8',
          type: 'mcq',
          prompt: "Un atome X possède 20 neutrons et un nombre de masse A = 39. Quel est son numéro atomique Z et quel est cet élément ?",
          options: ['Z = 19 (Potassium K)', 'Z = 20 (Calcium Ca)', 'Z = 18 (Argon Ar)', 'Z = 39 (Yttrium Y)'],
          correctAnswerIndex: 0,
          explanation: "Z = A - N = 39 - 20 = 19. L'élément de numéro atomique 19 est le potassium (K)."
        }
      ]
    },
    {
      id: 'seconde_a_chimie_ch2_p3',
      order: 3,
      title: 'Masse et dimensions de l atome : structure lacunaire',
      summary:
        'Calcul de la masse de l atome concentrée dans son noyau (m ≈ A × mp) et comparaison des dimensions (atome environ 100 000 fois plus grand que le noyau).',
      conceptExplanation: `L'atome présente deux caractéristiques physiques remarquables : une masse quasi-exclusivement concentrée au centre, et un volume immense constitué presque entièrement de vide.

1. Masse approximative d'un atome :
La masse totale d'un atome est la somme de la masse de son noyau et de la masse de ses électrons :
  m_atome = m_noyau + m_électrons = (Z × m_p + N × m_n) + Z × m_e.
Or, un nucléon est environ 1836 fois plus lourd qu'un électron (m_p ≈ m_n ≈ 1836 × m_e).
La masse des électrons est donc totalement négligeable devant celle des nucléons.
Comme m_p ≈ m_n, on a :
  m_atome ≈ (Z + N) × m_p = A × m_p.
Formule officielle : m_atome ≈ A × m_p (avec m_p = 1,67 × 10⁻²⁷ kg).

Exemple de calcul :
Pour l'atome de chlore ³⁵₁₇Cl (A = 35) :
  m(³⁵Cl) = 35 × 1,67 × 10⁻²⁷ kg = 5,85 × 10⁻²⁶ kg.

2. Dimensions et structure lacunaire de l'atome :
- Ordre de grandeur du rayon d'un atome : R_atome ≈ 10⁻¹⁰ m (0,1 nanomètre).
- Ordre de grandeur du rayon de son noyau : R_noyau ≈ 10⁻¹⁵ m (1 femtomètre).
Comparaison des rayons :
  R_atome / R_noyau ≈ 10⁻¹⁰ / 10⁻¹⁵ = 10⁵ = 100 000.
Le rayon de l'atome est environ 100 000 fois plus grand que le rayon de son noyau !
Conclusion : Il existe un immense vide entre le noyau et les électrons qui gravitent autour. On dit que l'atome a une structure lacunaire (fait de lacunes ou de vide), comme l'a démontré Rutherford en 1910 par son expérience de bombardement de la feuille d'or.`,
      formulas: [
        {
          name: "Masse approximative de l'atome",
          formula: 'm_atome ≈ A × m_p',
          note: 'Avec m_p = 1,67 × 10⁻²⁷ kg (masse concentrée dans le noyau).'
        },
        {
          name: 'Rapport des rayons',
          formula: 'R_atome / R_noyau ≈ 100 000',
          note: 'Prouve la structure lacunaire de la matière.'
        }
      ],
      workedExample: {
        title: "Situation d'évaluation officielle : Calcul de la masse de l'atome de chlore 35 et structure lacunaire",
        statement: "Calculer la masse approximative d'un atome de chlore ³⁵₁₇Cl sachant que m_p = 1,67 × 10⁻²⁷ kg. Comparer ensuite le rayon de l'atome (10⁻¹⁰ m) à celui de son noyau (10⁻¹⁵ m).",
        methodSteps: [
          "Étape 1 : La masse des électrons étant négligeable, la masse de l'atome est concentrée dans son noyau : m ≈ A × m_p.",
          "Étape 2 : Calcul numérique : m = 35 × 1,67 × 10⁻²⁷ kg = 5,845 × 10⁻²⁶ kg ≈ 5,85 × 10⁻²⁶ kg.",
          "Étape 3 : Rapport des rayons : R_atome / R_noyau = 10⁻¹⁰ / 10⁻¹⁵ = 10⁵ = 100 000."
        ],
        conclusion: "La masse de l'atome de chlore 35 est de 5,85 × 10⁻²⁶ kg. L'atome étant 100 000 fois plus étendu que son noyau, sa structure est essentiellement lacunaire (constituée de vide)."
      },
      exercises: [
        {
          id: 'seconde_a_chimie_ch2_p3_ex1',
          type: 'mcq',
          prompt: "Où est concentrée la quasi-totalité de la masse d'un atome ?",
          options: [
            "Dans son noyau central",
            "Dans le cortège électronique",
            "Équitablement répartie dans tout l'espace",
            "À la surface extérieure de l'atome"
          ],
          correctAnswerIndex: 0,
          explanation: "Les nucléons du noyau étant près de 2000 fois plus lourds que les électrons, plus de 99,95 % de la masse de l'atome est concentrée dans son noyau."
        },
        {
          id: 'seconde_a_chimie_ch2_p3_ex2',
          type: 'mcq',
          prompt: "Quelle formule permet de calculer la masse approximative d'un atome de nombre de masse A ?",
          options: ['m = A × m_p', 'm = Z × m_e', 'm = (A - Z) × m_e', 'm = A / m_p'],
          correctAnswerIndex: 0,
          explanation: "La masse de l'atome est pratiquement égale à celle de ses nucléons : m_atome ≈ A × m_p."
        },
        {
          id: 'seconde_a_chimie_ch2_p3_ex3',
          type: 'mcq',
          prompt: "Quelle est la masse approximative d'un atome de magnésium ²⁴₁₂Mg (avec m_p = 1,67 × 10⁻²⁷ kg) ?",
          options: ['4,01 × 10⁻²⁶ kg', '2,00 × 10⁻²⁶ kg', '1,67 × 10⁻²⁷ kg', '2,40 × 10⁻²³ kg'],
          correctAnswerIndex: 0,
          explanation: "m = 24 × (1,67 × 10⁻²⁷ kg) = 4,008 × 10⁻²⁶ kg ≈ 4,01 × 10⁻²⁶ kg."
        },
        {
          id: 'seconde_a_chimie_ch2_p3_ex4',
          type: 'mcq',
          prompt: "Quel est l'ordre de grandeur du rayon d'un atome ?",
          options: ['10⁻¹⁰ m', '10⁻¹⁵ m', '10⁻³ m', '10⁻⁶ m'],
          correctAnswerIndex: 0,
          explanation: "Le rayon d'un atome est de l'ordre de 10⁻¹⁰ m (soit 0,1 nanomètre ou 1 ångström)."
        },
        {
          id: 'seconde_a_chimie_ch2_p3_ex5',
          type: 'mcq',
          prompt: "Quel est l'ordre de grandeur du rayon du noyau atomique ?",
          options: ['10⁻¹⁵ m', '10⁻¹⁰ m', '10⁻² m', '10⁻²⁷ m'],
          correctAnswerIndex: 0,
          explanation: "Le noyau est minuscule : son rayon est de l'ordre de 10⁻¹⁵ m (soit 1 femtomètre)."
        },
        {
          id: 'seconde_a_chimie_ch2_p3_ex6',
          type: 'mcq',
          prompt: "Combien de fois environ l'atome est-il plus grand que son noyau ?",
          options: ['100 000 fois plus grand', '10 fois plus grand', '2 fois plus grand', '1 000 000 000 fois plus grand'],
          correctAnswerIndex: 0,
          explanation: "Le rapport R_atome / R_noyau ≈ 10⁻¹⁰ / 10⁻¹⁵ = 10⁵ = 100 000 fois."
        },
        {
          id: 'seconde_a_chimie_ch2_p3_ex7',
          type: 'mcq',
          prompt: "Que signifie l'expression 'l'atome a une structure lacunaire' ?",
          options: [
            "L'atome est constitué essentiellement de vide entre le noyau et les électrons",
            "L'atome présente des trous d'air visibles au microscope",
            "Les électrons tombent dans le noyau",
            "L'atome perd régulièrement de la masse"
          ],
          correctAnswerIndex: 0,
          explanation: "La structure lacunaire signifie que la matière est faite à 99,999999999 % de vide : presque tout le volume atomique est inoccupé."
        },
        {
          id: 'seconde_a_chimie_ch2_p3_ex8',
          type: 'mcq',
          prompt: "Quel physicien a mis en évidence la structure lacunaire de l'atome en bombardant une feuille d'or avec des particules alpha en 1910 ?",
          options: ['Ernest Rutherford', 'J.J. Thomson', 'John Dalton', 'Niels Bohr'],
          correctAnswerIndex: 0,
          explanation: "C'est Ernest Rutherford en 1910 qui a démontré que la quasi-totalité des particules traversent la feuille d'or sans déviation, prouvant le vide atomique."
        }
      ]
    },
    {
      id: 'seconde_a_chimie_ch2_p4',
      order: 4,
      title: 'Structure électronique des atomes (K, L, M) et schéma de Lewis',
      summary:
        'Répartition des électrons sur les couches K, L, M selon la règle des 2n², formule électronique et représentation de Lewis (électrons célibataires et doublets).',
      conceptExplanation: `Les électrons d'un atome ne gravitent pas de manière désordonnée : ils sont organisés en couches électroniques concentriques de niveaux d'énergie bien définis.

1. Les couches électroniques et leurs capacités :
Les couches sont désignées, de la plus proche à la plus éloignée du noyau, par les lettres majuscules :
- Couche n = 1 : Couche K (contient au maximum 2 × 1² = 2 électrons).
- Couche n = 2 : Couche L (contient au maximum 2 × 2² = 8 électrons).
- Couche n = 3 : Couche M (contient au maximum 2 × 3² = 18 électrons ; en Seconde, pour Z ≤ 18, elle se sature à 8 électrons).
- Couche n = 4 : Couche N.
Règle de saturation : Le nombre maximal d'électrons pouvant appartenir à une couche d'ordre n est 2n².

2. Règle de remplissage et formule électronique :
Les électrons occupent successivement les couches dans l'ordre croissant d'énergie : K, puis L, puis M...
On ne commence à remplir une nouvelle couche que lorsque la précédente est saturée.
Exemples de formules électroniques :
- Hydrogène (Z = 1) : K¹.
- Carbone (Z = 6) : K² L⁴.
- Oxygène (Z = 8) : K² L⁶.
- Néon (Z = 10) : K² L⁸ (couche L saturée).
- Sodium (Z = 11) : K² L⁸ M¹.
- Aluminium (Z = 13) : K² L⁸ M³.
- Chlore (Z = 17) : K² L⁸ M⁷.
- Argon (Z = 18) : K² L⁸ M⁸.

3. Couche externe (couche de valence) :
La dernière couche occupée par des électrons est appelée couche externe ou couche périphérique.
Ce sont exclusivement les électrons de cette couche externe qui participent aux liaisons et aux réactions chimiques !

4. Représentation de Lewis des atomes :
Le schéma de Lewis permet de représenter graphiquement la couche externe d'un atome :
- On écrit le symbole de l'élément au centre.
- Les électrons célibataires sont représentés par des points (•).
- Les paires d'électrons appariés (doublets électroniques) sont représentées par des tirets (—).
Exemples :
- Carbone (4 électrons externes) : 4 points (4 électrons célibataires).
- Azote (5 électrons externes) : 1 tiret (1 doublet) et 3 points (3 électrons célibataires).
- Oxygène (6 électrons externes) : 2 tirets (2 doublets) et 2 points (2 électrons célibataires).
- Chlore (7 électrons externes) : 3 tirets (3 doublets) et 1 point (1 électron célibataire).`,
      formulas: [
        {
          name: "Capacité maximale d'une couche électronique",
          formula: 'Nombre max d\'électrons = 2n²',
          note: 'K (n=1) : 2 e⁻ | L (n=2) : 8 e⁻ | M (n=3) : 18 e⁻.'
        },
        {
          name: 'Schéma de Lewis',
          formula: 'Point (•) = électron célibataire | Tiret (—) = doublet',
          note: 'Représente uniquement les électrons de la couche externe.'
        }
      ],
      workedExample: {
        title: "Situation d'évaluation officielle : Formule électronique et schéma de Lewis du soufre (Z = 16)",
        statement: "Écrire la formule électronique du soufre (Z = 16), en déduire son nombre d'électrons externes et sa représentation de Lewis selon les règles officielles.",
        methodSteps: [
          "Étape 1 : Remplir successivement les couches électroniques : couche K saturée à 2 e⁻, couche L saturée à 8 e⁻, reste 6 e⁻ sur la couche M -> Formule : K² L⁸ M⁶.",
          "Étape 2 : La couche externe M contient 6 électrons de valence.",
          "Étape 3 : Selon la règle de Lewis, les 6 électrons externes forment 2 doublets non liants (2 tirets) et 2 électrons célibataires (2 points)."
        ],
        conclusion: "Le soufre a pour formule électronique K² L⁸ M⁶. Son schéma de Lewis comporte le symbole S entouré de 2 tirets et de 2 points."
      },
      exercises: [
        {
          id: 'seconde_a_chimie_ch2_p4_ex1',
          type: 'mcq',
          prompt: "Quel est le nombre maximal d'électrons que peut contenir la couche K (n = 1) ?",
          options: ['2 électrons', '8 électrons', '18 électrons', '4 électrons'],
          correctAnswerIndex: 0,
          explanation: "Selon la règle des 2n², pour n = 1, le nombre maximal est 2 × 1² = 2 électrons."
        },
        {
          id: 'seconde_a_chimie_ch2_p4_ex2',
          type: 'mcq',
          prompt: "Quel est le nombre maximal d'électrons que peut contenir la couche L (n = 2) ?",
          options: ['8 électrons', '2 électrons', '18 électrons', '32 électrons'],
          correctAnswerIndex: 0,
          explanation: "Pour la couche L (n = 2), la capacité maximale est 2 × 2² = 2 × 4 = 8 électrons."
        },
        {
          id: 'seconde_a_chimie_ch2_p4_ex3',
          type: 'mcq',
          prompt: "Quelle est la formule électronique de l'atome de carbone (Z = 6) ?",
          options: ['K² L⁴', 'K⁶', 'K⁴ L²', 'K² L⁸'],
          correctAnswerIndex: 0,
          explanation: "L'atome de carbone possède 6 électrons : 2 saturent la couche K, et les 4 restants se placent sur la couche L, soit K² L⁴."
        },
        {
          id: 'seconde_a_chimie_ch2_p4_ex4',
          type: 'mcq',
          prompt: "Quelle est la formule électronique de l'atome de chlore (Z = 17) ?",
          options: ['K² L⁸ M⁷', 'K² L⁹ M⁶', 'K² L⁷ M⁸', 'K¹⁰ L⁷'],
          correctAnswerIndex: 0,
          explanation: "17 électrons se répartissent en saturant K avec 2, puis L avec 8, laissant 7 électrons sur M : K² L⁸ M⁷."
        },
        {
          id: 'seconde_a_chimie_ch2_p4_ex5',
          type: 'mcq',
          prompt: "Combien d'électrons externes (électrons de valence) possède l'atome d'aluminium (Z = 13, de formule K² L⁸ M³) ?",
          options: ['3 électrons', '13 électrons', '8 électrons', '2 électrons'],
          correctAnswerIndex: 0,
          explanation: "La couche externe est la couche M, qui compte 3 électrons. Ce sont les 3 électrons de valence de l'aluminium."
        },
        {
          id: 'seconde_a_chimie_ch2_p4_ex6',
          type: 'mcq',
          prompt: "Dans la représentation de Lewis de l'atome d'oxygène (Z = 8, formule K² L⁶), que trouve-t-on autour du symbole O ?",
          options: [
            '2 doublets non liants (tirets) et 2 électrons célibataires (points)',
            '6 points uniquement',
            '3 tirets uniquement',
            '4 tirets et 2 points'
          ],
          correctAnswerIndex: 0,
          explanation: "Les 6 électrons externes de l'oxygène s'associent en 2 paires (2 doublets représentés par 2 tirets) et laissent 2 électrons célibataires (2 points)."
        },
        {
          id: 'seconde_a_chimie_ch2_p4_ex7',
          type: 'mcq',
          prompt: "Combien d'électrons célibataires possède l'atome de carbone (K² L⁴) dans son schéma de Lewis ?",
          options: ['4 électrons célibataires', '2 électrons célibataires', '0 électron célibataire', '1 électron célibataire'],
          correctAnswerIndex: 0,
          explanation: "Le carbone possède 4 électrons externes répartis sous forme de 4 électrons célibataires (tétravalence du carbone)."
        },
        {
          id: 'seconde_a_chimie_ch2_p4_ex8',
          type: 'mcq',
          prompt: "Quelle est la représentation de Lewis de l'atome de chlore (K² L⁸ M⁷) ?",
          options: [
            '3 doublets non liants (tirets) et 1 électron célibataire (point)',
            '7 tirets autour de Cl',
            '1 doublet et 5 points',
            '4 doublets non liants'
          ],
          correctAnswerIndex: 0,
          explanation: "Avec 7 électrons externes : 6 forment 3 paires (3 doublets représentés par des tirets) et le 7e reste sous forme de 1 électron célibataire (1 point)."
        }
      ]
    }
  ]
};


// ============================================================================
// LEÇON 3 : CLASSIFICATION PÉRIODIQUE DES ÉLÉMENTS CHIMIQUES
// ============================================================================
export const chimie2deAClassificationPeriodiqueChapter: CurriculumChapter = {
  id: 'seconde_a_chimie_ch3_classification_periodique',
  subjectId: 'physique_chimie',
  gradeLevel: 'seconde_a',
  order: 3,
  officialVolumeHours: 8,
  title: 'Leçon 3 — Classification périodique des éléments chimiques',
  summary:
    "Description du tableau périodique à double entrée, règles d'édification (numéro atomique Z croissant, couches électroniques, électrons de valence) et étude des grandes familles chimiques (alcalins, alcalino-terreux, halogènes, gaz nobles).",
  points: [
    // ------------------------------------------------------------------------
    // MINI-LEÇON 1/3 : Présentation et Règles d'Édification du Tableau
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_chimie_ch3_p1',
      order: 1,
      title: "Présentation et règles d'édification du tableau périodique",
      summary:
        "Structure à double entrée (lignes/périodes et colonnes/groupes), rangement par Z croissant et correspondance avec la structure électronique.",
      conceptExplanation:
        "Le tableau de classification périodique regroupe et ordonne l'ensemble des éléments chimiques connus. Conçu à l'origine par Dimitri Mendeleïev en 1869, il permet d'expliquer et de prévoir le comportement chimique de chaque élément.\n\n" +
        "1. Présentation générale du tableau :\n" +
        "Le tableau périodique est un tableau à double entrée constitué de :\n" +
        "- Entrées horizontales appelées périodes ou lignes (le tableau général comporte 7 lignes ; en classe de seconde, nous étudions les 4 premières périodes).\n" +
        "- Entrées verticales appelées groupes ou colonnes (le tableau complet comporte 18 colonnes ; nous nous limitons à 8 colonnes principales).\n\n" +
        "2. Règle d'or 1 : Classement par numéro atomique Z croissant :\n" +
        "Les éléments sont rangés de gauche à droite et de haut en bas par numéro atomique Z croissant. À chaque valeur de Z correspond une case unique. Le numéro atomique Z indique le numéro de la case.\n" +
        "Remarque essentielle : Tous les isotopes d'un même élément chimique possèdent le même Z, ils occupent donc exactement la même case du tableau.\n\n" +
        "3. Règle d'or 2 : Signification des lignes (Périodes) :\n" +
        "Chaque ligne correspond au remplissage d'une même couche électronique :\n" +
        "- 1ère ligne (période 1) : remplissage de la couche K (de 1H : K¹ à 2He : K²).\n" +
        "- 2ème ligne (période 2) : remplissage de la couche L (de 3Li : K²L¹ à 10Ne : K²L⁸).\n" +
        "- 3ème ligne (période 3) : remplissage de la couche M (de 11Na : K²L⁸M¹ à 18Ar : K²L⁸M⁸).\n" +
        "Le numéro de la ligne indique donc le nombre de couches électroniques occupées par l'atome.\n\n" +
        "4. Règle d'or 3 : Signification des colonnes (Groupes) :\n" +
        "Une colonne regroupe des éléments dont les atomes possèdent le même nombre d'électrons sur leur couche externe (couche de valence). Le numéro de la colonne indique le nombre d'électrons sur cette couche externe.",
      formulas: [
        {
          name: "Localisation d'un élément (Ligne et Colonne)",
          formula: "Ligne = Nombre de couches | Colonne = Nombre d'électrons externes",
          note: "Exemple : Carbone C (Z = 6) -> K²L⁴ : 2 couches -> 2ème ligne ; 4 e⁻ externes -> 4ème colonne.",
        },
      ],
      keyRule:
        "Règle d'or MENA : Pour situer un élément dans le tableau, écris d'abord sa formule électronique. Le nombre de couches donne la période (ligne) et le nombre d'électrons sur la dernière couche donne la colonne (groupe).",
      workedExample: {
        title: "Situation d'évaluation officielle : Localiser le Soufre S (Z = 16) et le Chlore Cl (Z = 17)",
        statement: "Écrire la formule électronique du soufre (Z = 16) et du chlore (Z = 17), puis déterminer leur ligne et leur colonne dans le tableau simplifié.",
        methodSteps: [
          "Étape 1 : Pour le soufre S (Z = 16) : répartition des 16 électrons -> K² L⁸ M⁶.",
          "Étape 2 : Couche de valence M (3ème couche occupée) -> 3ème ligne. Il y a 6 électrons externes -> 6ème colonne.",
          "Étape 3 : Pour le chlore Cl (Z = 17) : répartition des 17 électrons -> K² L⁸ M⁷.",
          "Étape 4 : Couche de valence M (3 couches) -> 3ème ligne. Il y a 7 électrons externes -> 7ème colonne.",
        ],
        conclusion: "S est situé à la 3ème ligne, 6ème colonne. Cl est situé à la 3ème ligne, 7ème colonne.",
      },
      exercises: [
        {
          id: 'seconde_a_chimie_ch3_p1_ex1',
          type: 'mcq',
          prompt: "Dans le tableau de classification périodique, comment sont classés les éléments chimiques ?",
          options: [
            "Par numéro atomique Z croissant",
            "Par masse molaire décroissante",
            "Par ordre alphabétique de leurs symboles",
            "Par nombre de neutrons décroissant",
          ],
          correctAnswerIndex: 0,
          explanation: "Les éléments sont rigoureusement classés par numéro atomique Z croissant (de Z = 1 pour l'hydrogène jusqu'à Z = 118).",
        },
        {
          id: 'seconde_a_chimie_ch3_p1_ex2',
          type: 'mcq',
          prompt: "Que représente une ligne (ou période) dans le tableau de classification périodique ?",
          options: [
            "Le remplissage d'une même couche électronique",
            "Le nombre total de neutrons dans le noyau",
            "Le nombre d'électrons célibataires uniquement",
            "La masse volumique du métal à l'état solide",
          ],
          correctAnswerIndex: 0,
          explanation: "Chaque ligne correspond au remplissage d'une même couche électronique (K pour la 1ère ligne, L pour la 2ème, M pour la 3ème).",
        },
        {
          id: 'seconde_a_chimie_ch3_p1_ex3',
          type: 'mcq',
          prompt: "L'atome de magnésium possède Z = 12. Sa formule électronique est K²L⁸M². Quelle est sa position dans le tableau ?",
          options: [
            "3ème ligne et 2ème colonne",
            "2ème ligne et 3ème colonne",
            "12ème ligne et 2ème colonne",
            "3ème ligne et 8ème colonne",
          ],
          correctAnswerIndex: 0,
          explanation: "3 couches occupées (K, L, M) -> 3ème ligne. 2 électrons sur la couche externe M -> 2ème colonne.",
        },
        {
          id: 'seconde_a_chimie_ch3_p1_ex4',
          type: 'mcq',
          prompt: "Tous les isotopes d'un même élément chimique possèdent le même numéro atomique Z. Dans quelle case se trouvent-ils ?",
          options: [
            "Dans la même case du tableau",
            "Dans des colonnes différentes",
            "Dans des lignes consécutives",
            "En dehors du tableau périodique",
          ],
          correctAnswerIndex: 0,
          explanation: "Tous les isotopes d'un élément ont le même numéro atomique Z, donc ils occupent exactement la même case.",
        },
        {
          id: 'seconde_a_chimie_ch3_p1_ex5',
          type: 'mcq',
          prompt: "L'atome d'azote a pour numéro atomique Z = 7 (formule électronique K²L⁵). À quelle colonne appartient-il ?",
          options: [
            "5ème colonne",
            "2ème colonne",
            "7ème colonne",
            "3ème colonne",
          ],
          correctAnswerIndex: 0,
          explanation: "La couche externe L contient 5 électrons, l'azote appartient donc à la 5ème colonne.",
        },
        {
          id: 'seconde_a_chimie_ch3_p1_ex6',
          type: 'mcq',
          prompt: "Que partagent tous les atomes des éléments situés dans une même colonne du tableau ?",
          options: [
            "Le même nombre d'électrons sur leur couche externe",
            "Le même nombre total de protons dans le noyau",
            "La même masse atomique exacte",
            "Le même nombre de couches électroniques occupées",
          ],
          correctAnswerIndex: 0,
          explanation: "Une colonne rassemble les atomes ayant le même nombre d'électrons sur leur couche de valence, ce qui leur donne des propriétés chimiques analogues.",
        },
        {
          id: 'seconde_a_chimie_ch3_p1_ex7',
          type: 'mcq',
          prompt: "L'atome de carbone a pour numéro atomique Z = 6 (K²L⁴). Dans quelle ligne et quelle colonne se trouve-t-il ?",
          options: [
            "2ème ligne et 4ème colonne",
            "4ème ligne et 2ème colonne",
            "1ère ligne et 6ème colonne",
            "6ème ligne et 4ème colonne",
          ],
          correctAnswerIndex: 0,
          explanation: "2 couches électroniques (K et L) -> 2ème ligne. 4 électrons sur la couche externe L -> 4ème colonne.",
        },
        {
          id: 'seconde_a_chimie_ch3_p1_ex8',
          type: 'mcq',
          prompt: "Quel scientifique russe a publié en 1869 la première classification périodique en prévoyant des cases vides pour les éléments inconnus ?",
          options: [
            "Dimitri Mendeleïev",
            "Antoine Lavoisier",
            "Ernest Rutherford",
            "John Dalton",
          ],
          correctAnswerIndex: 0,
          explanation: "Dimitri Mendeleïev a classé les 63 éléments connus en 1869 et a eu le génie de prédire l'existence et les propriétés d'éléments encore inconnus à son époque (comme le gallium et le germanium).",
        },
      ],
    },

    // ------------------------------------------------------------------------
    // MINI-LEÇON 2/3 : Familles Chimiques : Métaux Alcalins et Alcalino-Terreux
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_chimie_ch3_p2',
      order: 2,
      title: "Familles des métaux alcalins et des métaux alcalino-terreux",
      summary:
        "Éléments des colonnes 1 et 2, propriétés physiques et chimiques, réactivité avec l'eau et formation de cations.",
      conceptExplanation:
        "Une famille chimique est constituée de l'ensemble des éléments appartenant à une même colonne du tableau périodique. Ayant le même nombre d'électrons de valence, ils possèdent des propriétés chimiques très proches.\n\n" +
        "1. La famille des métaux alcalins (1ère colonne, sauf l'hydrogène) :\n" +
        "- Éléments constitutifs : Lithium (3Li : K²L¹), Sodium (11Na : K²L⁸M¹), Potassium (19K : K²L⁸M⁸N¹), Rubidium (Rb), Césium (Cs).\n" +
        "- Structure : Ils possèdent tous 1 seul électron sur leur couche externe.\n" +
        "- Propriétés physiques : Ce sont des métaux mous (qui se coupent facilement au couteau), brillants à la coupe fraîche et peu denses.\n" +
        "- Propriétés chimiques remarquables :\n" +
        "  * Ils s'oxydent très rapidement au contact de l'air (ils ternissent immédiatement et doivent être conservés sous huile minérale ou pétrole).\n" +
        "  * Ils réagissent violemment avec l'eau à froid pour former une solution basique forte d'hydroxyde et un dégagement de dihydrogène inflammable H₂ :\n" +
        "    2 Na + 2 H₂O -> 2 (Na⁺ + OH⁻) + H₂\n" +
        "  * Ils ont tendance à perdre facilement leur unique électron de valence pour donner des cations stables de charge +e (Li⁺, Na⁺, K⁺).\n\n" +
        "2. La famille des métaux alcalino-terreux (2ème colonne) :\n" +
        "- Éléments constitutifs : Béryllium (4Be : K²L²), Magnésium (12Mg : K²L⁸M²), Calcium (20Ca : K²L⁸M⁸N²), Strontium (Sr), Baryum (Ba).\n" +
        "- Structure : Ils possèdent tous 2 électrons sur leur couche externe.\n" +
        "- Propriétés : Ce sont des métaux réactifs, de propriétés chimiques très voisines de celles des alcalins.\n" +
        "- Réaction avec l'oxygène : Ils s'oxydent à chaud en donnant des oxydes réfractaires (qui résistent à des températures très élevées, comme la magnésie MgO ou la chaux vive CaO).\n" +
        "- Formation d'ions : Ils perdent leurs 2 électrons de valence pour former des cations dipositifs stables (Be²⁺, Mg²⁺, Ca²⁺).",
      formulas: [
        {
          name: "Formation des cations alcalins",
          formula: "M -> M⁺ + 1 e⁻  (ex : Na -> Na⁺ + e⁻)",
          note: "Perte d'un électron pour saturer la couche sous-jacente.",
        },
        {
          name: "Formation des cations alcalino-terreux",
          formula: "M -> M²⁺ + 2 e⁻  (ex : Ca -> Ca²⁺ + 2 e⁻)",
          note: "Perte de 2 électrons de valence.",
        },
      ],
      keyRule:
        "Point clé à retenir : L'hydrogène (H) est situé au-dessus de la 1ère colonne en raison de son électron unique, mais CE N'EST PAS un métal alcalin ! C'est un non-métal gazeux.",
      workedExample: {
        title: "Identification officielle : L'élément dans la case 11",
        statement: "Un élément X est situé dans la case 11 du tableau. Déterminer son nom, sa famille et sa réaction avec l'eau.",
        methodSteps: [
          "Étape 1 : Case 11 signifie numéro atomique Z = 11.",
          "Étape 2 : Répartition électronique : K²L⁸M¹.",
          "Étape 3 : 1 électron externe -> 1ère colonne. Il s'agit du sodium (Na), métal alcalin.",
          "Étape 4 : Réaction avec l'eau : le sodium réagit vigoureusement avec l'eau pour produire une base forte (soude NaOH) et du dihydrogène H₂ gazeux.",
        ],
        conclusion: "X est le sodium (Na), appartenant à la famille des métaux alcalins.",
      },
      exercises: [
        {
          id: 'seconde_a_chimie_ch3_p2_ex1',
          type: 'mcq',
          prompt: "Quels sont les éléments qui constituent la famille des métaux alcalins ?",
          options: [
            "Les éléments de la 1ère colonne, à l'exception de l'hydrogène",
            "Tous les éléments de la 2ème colonne uniquement",
            "Les éléments de la 7ème colonne",
            "L'ensemble des gaz de la dernière colonne",
          ],
          correctAnswerIndex: 0,
          explanation: "La famille des métaux alcalins comprend Li, Na, K, Rb, Cs de la 1ère colonne, à l'exclusion de l'hydrogène qui est un gaz.",
        },
        {
          id: 'seconde_a_chimie_ch3_p2_ex2',
          type: 'mcq',
          prompt: "Combien d'électrons possèdent les métaux alcalins sur leur couche externe ?",
          options: [
            "1 seul électron",
            "2 électrons",
            "7 électrons",
            "8 électrons",
          ],
          correctAnswerIndex: 0,
          explanation: "Étant situés dans la 1ère colonne, les métaux alcalins ont exactement 1 électron sur leur couche externe.",
        },
        {
          id: 'seconde_a_chimie_ch3_p2_ex3',
          type: 'mcq',
          prompt: "Quel ion stable donne spontanément le sodium Na (Z = 11) lors d'une réaction chimique ?",
          options: [
            "L'ion Na⁺ (cation monovalent)",
            "L'ion Na²⁺ (cation divalent)",
            "L'ion Na⁻ (anion)",
            "L'ion Na³⁺",
          ],
          correctAnswerIndex: 0,
          explanation: "Le sodium (K²L⁸M¹) perd son unique électron externe M¹ pour acquérir la structure stable en octet du néon (K²L⁸), formant l'ion Na⁺.",
        },
        {
          id: 'seconde_a_chimie_ch3_p2_ex4',
          type: 'mcq',
          prompt: "Comment se nomme la famille des éléments de la deuxième colonne du tableau périodique ?",
          options: [
            "Les métaux alcalino-terreux",
            "Les métaux alcalins",
            "Les halogènes",
            "Les gaz rares",
          ],
          correctAnswerIndex: 0,
          explanation: "La 2ème colonne constitue la famille des métaux alcalino-terreux (Béryllium, Magnésium, Calcium, Strontium, Baryum).",
        },
        {
          id: 'seconde_a_chimie_ch3_p2_ex5',
          type: 'mcq',
          prompt: "Que se passe-t-il lorsqu'on dépose un morceau de sodium métallique dans un cristallisoir rempli d'eau ?",
          options: [
            "Une réaction très violente avec dégagement de dihydrogène H₂ et formation d'une base forte",
            "Aucune réaction car le sodium est chimiquement inerte",
            "Le sodium coule au fond de l'eau sans aucune modification",
            "Il se dégage du dioxygène O₂ pur sans dégagement de chaleur",
          ],
          correctAnswerIndex: 0,
          explanation: "Les métaux alcalins réagissent très violemment avec l'eau pour former une solution d'hydroxyde (base forte) et du dihydrogène H₂ gazeux.",
        },
        {
          id: 'seconde_a_chimie_ch3_p2_ex6',
          type: 'mcq',
          prompt: "Le calcium Ca a pour numéro atomique Z = 20 (formule K²L⁸M⁸N²). À quelle famille appartient-il et quel ion forme-t-il ?",
          options: [
            "Métaux alcalino-terreux, formant l'ion Ca²⁺",
            "Métaux alcalins, formant l'ion Ca⁺",
            "Halogènes, formant l'ion Ca⁻",
            "Gaz rares, formant un ion stable",
          ],
          correctAnswerIndex: 0,
          explanation: "Avec 2 électrons de valence (N²), le calcium appartient aux alcalino-terreux et perd 2 électrons pour donner le cation Ca²⁺.",
        },
        {
          id: 'seconde_a_chimie_ch3_p2_ex7',
          type: 'mcq',
          prompt: "Pourquoi conserve-t-on le sodium et le potassium sous du pétrole ou de l'huile minérale en laboratoire ?",
          options: [
            "Pour éviter leur oxydation instantanée au contact de l'oxygène et de l'humidité de l'air",
            "Pour augmenter leur masse atomique avant utilisation",
            "Pour dissoudre le métal avant les travaux pratiques",
            "Pour changer leur couleur métallique grise",
          ],
          correctAnswerIndex: 0,
          explanation: "Les métaux alcalins s'oxydent extrêmement rapidement à l'air et réagissent avec l'humidité ambiante ; le pétrole les isole de l'air.",
        },
        {
          id: 'seconde_a_chimie_ch3_p2_ex8',
          type: 'mcq',
          prompt: "Parmi les éléments suivants, lequel N'EST PAS un métal alcalino-terreux ?",
          options: [
            "Le potassium (K)",
            "Le magnésium (Mg)",
            "Le calcium (Ca)",
            "Le béryllium (Be)",
          ],
          correctAnswerIndex: 0,
          explanation: "Le potassium (K, Z = 19) appartient à la 1ère colonne, c'est donc un métal alcalin et non un alcalino-terreux.",
        },
      ],
    },

    // ------------------------------------------------------------------------
    // MINI-LEÇON 3/3 : Halogènes et Gaz Rares (Gaz Nobles)
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_chimie_ch3_p3',
      order: 3,
      title: "Familles des halogènes et des gaz rares (gaz nobles)",
      summary:
        "Éléments des colonnes 7 et 8, molécules diatomiques, caractère oxydant, règle de l'octet et inertie chimique des gaz nobles.",
      conceptExplanation:
        "Les deux dernières colonnes du tableau périodique simplifié regroupent des éléments aux propriétés remarquables et opposées.\n\n" +
        "1. La famille des halogènes (7ème colonne, avant-dernière colonne) :\n" +
        "- Éléments constitutifs : Fluor (9F : K²L⁷), Chlore (17Cl : K²L⁸M⁷), Brome (Br), Iode (I).\n" +
        "- Structure électronique : Ils possèdent tous 7 électrons sur leur couche externe.\n" +
        "- Propriétés fondamentales :\n" +
        "  * Ils existent à l'état naturel sous la forme de corps simples diatomiques : difluor F₂ (gaz jaune pâle), dichlore Cl₂ (gaz verdâtre suffocant), dibrome Br₂ (liquide rouge brun) et diiode I₂ (solide violet foncé).\n" +
        "  * Fort caractère oxydant : pour saturer leur couche externe à 8 électrons (octet), ils ont une forte tendance à capter 1 électron pour former des anions halogénures stables de charge -e : F⁻ (fluorure), Cl⁻ (chlorure), Br⁻ (bromure), I⁻ (iodure).\n" +
        "  * Ils réagissent vivement avec les métaux pour former des halogénures métalliques (ex : 2 Na + Cl₂ -> 2 NaCl, le chlorure de sodium ou sel de cuisine).\n\n" +
        "2. La famille des gaz rares ou gaz nobles (8ème colonne, dernière colonne) :\n" +
        "- Éléments constitutifs : Hélium (2He : K²), Néon (10Ne : K²L⁸), Argon (18Ar : K²L⁸M⁸), Krypton (Kr), Xénon (Xe).\n" +
        "- Structure électronique : Leur couche externe est complètement saturée avec 8 électrons (règle de l'octet), sauf l'hélium qui est saturé avec 2 électrons sur sa couche K (règle du duet).\n" +
        "- Propriétés remarquables :\n" +
        "  * Ils existent à l'état naturel sous forme de corps simples monoatomiques gazeux (He, Ne, Ar gazeux isolés).\n" +
        "  * Ils sont caractérisés par une absence quasi-totale de réactivité chimique : on parle d'inertie chimique.\n" +
        "  * C'est cette remarquable stabilité électronique que tous les autres atomes cherchent à atteindre en formant des liaisons ou des ions !",
      formulas: [
        {
          name: "Formation de l'anion halogénure",
          formula: "X + 1 e⁻ -> X⁻  (ex : Cl + e⁻ -> Cl⁻)",
          note: "Gain d'un électron pour compléter l'octet.",
        },
      ],
      keyRule:
        "Vocabulaire officiel MENA : 'Halogène' signifie étymologiquement 'générateur de sel'. 'Gaz noble' ou 'gaz rare' traduit l'inertie chimique liée à une couche de valence saturée d'un octet d'électrons.",
      workedExample: {
        title: "Situation d'évaluation officielle : L'élément dans le dentifrice (Z = 9)",
        statement: "Le principe actif de certains dentifrices contient un élément X de numéro atomique Z = 9. Déterminer sa formule électronique, sa position, son nom et sa famille.",
        methodSteps: [
          "Étape 1 : Formule électronique pour Z = 9 : K²L⁷.",
          "Étape 2 : Position : 2 couches (K et L) -> 2ème ligne ; 7 électrons externes -> 7ème colonne.",
          "Étape 3 : Nom et symbole : Z = 9 correspond au Fluor (F).",
          "Étape 4 : Famille : 7ème colonne -> Famille des halogènes. Corps simple : F₂.",
        ],
        conclusion: "L'élément est le fluor (F), de la famille des halogènes.",
      },
      exercises: [
        {
          id: 'seconde_a_chimie_ch3_p3_ex1',
          type: 'mcq',
          prompt: "Combien d'électrons possèdent les atomes d'halogènes sur leur couche externe ?",
          options: [
            "7 électrons",
            "1 électron",
            "2 électrons",
            "8 électrons",
          ],
          correctAnswerIndex: 0,
          explanation: "Les halogènes appartiennent à la 7ème colonne et possèdent donc 7 électrons sur leur couche de valence.",
        },
        {
          id: 'seconde_a_chimie_ch3_p3_ex2',
          type: 'mcq',
          prompt: "Sous quelle forme les corps simples halogènes existent-ils à l'état naturel ?",
          options: [
            "Sous forme de molécules diatomiques (F₂, Cl₂, Br₂, I₂)",
            "Sous forme de gaz monoatomiques isolés",
            "Sous forme de cristaux métalliques conducteurs",
            "Uniquement sous forme de liquides aqueux",
          ],
          correctAnswerIndex: 0,
          explanation: "Les halogènes s'associent par paires pour former des molécules diatomiques stables comme le difluor F₂ ou le dichlore Cl₂.",
        },
        {
          id: 'seconde_a_chimie_ch3_p3_ex3',
          type: 'mcq',
          prompt: "Quel ion stable forme l'atome de chlore Cl (Z = 17) pour respecter la règle de l'octet ?",
          options: [
            "L'ion chlorure Cl⁻ (par gain d'un électron)",
            "L'ion Cl⁺ (par perte d'un électron)",
            "L'ion Cl²⁻ (par gain de deux électrons)",
            "L'ion Cl⁷⁺",
          ],
          correctAnswerIndex: 0,
          explanation: "Avec 7 électrons externes (K²L⁸M⁷), le chlore gagne 1 électron pour acquérir la structure K²L⁸M⁸ de l'argon, formant l'anion chlorure Cl⁻.",
        },
        {
          id: 'seconde_a_chimie_ch3_p3_ex4',
          type: 'mcq',
          prompt: "Quelle est la caractéristique fondamentale des gaz rares (ou gaz nobles) de la 8ème colonne ?",
          options: [
            "Une inertie chimique quasi-totale en raison de leur couche externe saturée",
            "Une très forte réactivité explosive au contact de l'eau",
            "Une tendance marquée à céder tous leurs électrons",
            "Un fort caractère oxydant similaire aux halogènes",
          ],
          correctAnswerIndex: 0,
          explanation: "Ayant leur couche externe saturée (2 électrons pour He, 8 pour Ne et Ar), les gaz nobles ne réagissent pratiquement pas : on parle d'inertie chimique.",
        },
        {
          id: 'seconde_a_chimie_ch3_p3_ex5',
          type: 'mcq',
          prompt: "L'hélium He a pour numéro atomique Z = 2 (couche K²). Pourquoi est-il classé dans la colonne des gaz rares et non avec les métaux alcalino-terreux ?",
          options: [
            "Parce que sa couche externe K est saturée (duet) et qu'il possède une inertie chimique identique à celle des gaz nobles",
            "Parce qu'il est solide à température ordinaire",
            "Parce qu'il réagit violemment avec les halogènes",
            "Parce qu'il perd deux électrons pour former un ion dipositif",
          ],
          correctAnswerIndex: 0,
          explanation: "Bien qu'il n'ait que 2 électrons, sa seule couche K est totalement saturée. L'hélium est un gaz inerte monoatomique, chimiquement semblable au néon et à l'argon.",
        },
        {
          id: 'seconde_a_chimie_ch3_p3_ex6',
          type: 'mcq',
          prompt: "Quelle est la formule statistique du sel de cuisine formé par la réaction du sodium avec le dichlore ?",
          options: [
            "NaCl (chlorure de sodium)",
            "Na₂Cl",
            "NaCl₂",
            "Na₂Cl₃",
          ],
          correctAnswerIndex: 0,
          explanation: "L'ion Na⁺ et l'ion Cl⁻ s'associent dans un rapport 1:1 pour assurer l'électroneutralité : NaCl (chlorure de sodium).",
        },
        {
          id: 'seconde_a_chimie_ch3_p3_ex7',
          type: 'mcq',
          prompt: "Sous quelle forme les gaz rares existent-ils dans les conditions habituelles ?",
          options: [
            "Corps simples monoatomiques gazeux (He, Ne, Ar)",
            "Molécules diatomiques gazeuses",
            "Molécules tétraédriques complexes",
            "Liquides hautement volatils",
          ],
          correctAnswerIndex: 0,
          explanation: "Grâce à leur stabilité propre, les atomes de gaz rares ne s'associent pas entre eux et existent à l'état de gaz monoatomiques.",
        },
        {
          id: 'seconde_a_chimie_ch3_p3_ex8',
          type: 'mcq',
          prompt: "L'élément argon Ar a pour numéro atomique Z = 18. Quelle est sa formule électronique ?",
          options: [
            "K² L⁸ M⁸",
            "K² L⁷ M⁹",
            "K² L¹⁰ M⁶",
            "K² L⁸ M⁷ N¹",
          ],
          correctAnswerIndex: 0,
          explanation: "Pour Z = 18 : 2 électrons sur K, 8 sur L, et 8 sur M -> K² L⁸ M⁸ (octet complet).",
        },
      ],
    },
  ],
};

// ============================================================================
// LEÇON 4 : IONS ET MOLÉCULES
// ============================================================================
export const chimie2deAIonsEtMoleculesChapter: CurriculumChapter = {
  id: 'seconde_a_chimie_ch4_ions_et_molecules',
  subjectId: 'physique_chimie',
  gradeLevel: 'seconde_a',
  order: 4,
  officialVolumeHours: 10,
  title: 'Leçon 4 — Ions et molécules',
  summary:
    "Règles de l'octet et du duet, formation des cations et anions monoatomiques et polyatomiques, électroneutralité des composés ioniques, liaisons de covalence, représentation de Lewis et géométrie des molécules.",
  points: [
    // ------------------------------------------------------------------------
    // MINI-LEÇON 1/3 : Règle de l'Octet et Formation des Ions Monoatomiques
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_chimie_ch4_p1',
      order: 1,
      title: "Règle de l'octet, règle du duet et ions monoatomiques",
      summary:
        "Évolution chimique des atomes vers la stabilité des gaz rares, perte ou gain d'électrons, écriture des demi-équations ioniques.",
      conceptExplanation:
        "Pourquoi les atomes réagissent-ils ? Les gaz rares (He, Ne, Ar) sont naturellement stables grâce à leur couche externe saturée. Tous les autres atomes cherchent à acquérir cette même stabilité au cours des réactions chimiques.\n\n" +
        "1. Énoncé de la règle de l'octet et du duet :\n" +
        "- Règle de l'octet : Au cours des transformations chimiques, les atomes ont tendance à acquérir la structure électronique stable du gaz noble le plus proche, avec 8 électrons sur leur couche externe (structure en octet).\n" +
        "- Règle du duet : Pour les atomes légers proches de l'hélium (Hydrogène H, Lithium Li, Béryllium Be, Bore B), ils ont tendance à acquérir 2 électrons sur leur couche K (structure en duet).\n" +
        "Attention : Le passage d'un atome à son ion ne modifie JAMAIS son noyau (Z reste inchangé). Seul le cortège électronique externe est modifié !\n\n" +
        "2. Définition d'un ion :\n" +
        "Un ion est un édifice chargé formé à partir d'un ou plusieurs atomes ayant perdu ou gagné un ou plusieurs électrons.\n" +
        "- Cation : ion chargé positivement (perte d'électrons).\n" +
        "- Anion : ion chargé négativement (gain d'électrons).\n\n" +
        "3. Cations monoatomiques (Perte d'électrons) :\n" +
        "Équation générale : X -> Xⁿ⁺ + n e⁻  (avec n le nombre d'électrons cédés).\n" +
        "- 1ère colonne (alcalins) : perte de 1 e⁻ -> Li⁺, Na⁺, K⁺.\n" +
        "  Exemple : Sodium Na (Z = 11, K²L⁸M¹) -> Na⁺ (K²L⁸) + 1 e⁻.\n" +
        "- 2ème colonne (alcalino-terreux) : perte de 2 e⁻ -> Be²⁺, Mg²⁺, Ca²⁺.\n" +
        "  Exemple : Calcium Ca (Z = 20, K²L⁸M⁸N²) -> Ca²⁺ (K²L⁸M⁸) + 2 e⁻.\n" +
        "- 3ème colonne : Aluminium Al (Z = 13, K²L⁸M³) -> Al³⁺ (K²L⁸) + 3 e⁻.\n" +
        "- Métaux de transition usuels : Cu²⁺ (cuivre II), Fe²⁺ (fer II), Fe³⁺ (fer III), Zn²⁺ (zinc).\n\n" +
        "4. Anions monoatomiques (Gain d'électrons) :\n" +
        "Équation générale : X + n e⁻ -> Xⁿ⁻  (avec n le nombre d'électrons captés).\n" +
        "- 7ème colonne (halogènes) : gain de 1 e⁻ -> F⁻ (fluorure), Cl⁻ (chlorure).\n" +
        "  Exemple : Cl (Z = 17, K²L⁸M⁷) + 1 e⁻ -> Cl⁻ (K²L⁸M⁸).\n" +
        "- 6ème colonne : Oxygène O (Z = 8, K²L⁶) + 2 e⁻ -> O²⁻ (ion oxyde, K²L⁸).\n" +
        "  Soufre S (Z = 16, K²L⁸M⁶) + 2 e⁻ -> S²⁻ (ion sulfure, K²L⁸M⁸).",
      formulas: [
        {
          name: "Formation d'un cation monoatomique",
          formula: "X -> Xⁿ⁺ + n e⁻",
          note: "Perte de n électrons (n = 1 pour Na⁺, n = 2 pour Ca²⁺, n = 3 pour Al³⁺).",
        },
        {
          name: "Formation d'un anion monoatomique",
          formula: "X + n e⁻ -> Xⁿ⁻",
          note: "Gain de n électrons (n = 1 pour Cl⁻, n = 2 pour O²⁻).",
        },
      ],
      keyRule:
        "Règle mnémotechnique : Cation = Positif (a perdu des e⁻ chargés négativement). Anion = Négatif (a gagné des e⁻ chargés négativement). Le nombre de protons dans le noyau reste STRICTEMENT le même !",
      workedExample: {
        title: "Calcul du nombre d'électrons dans les ions monoatomiques",
        statement: "On donne Z(Cl) = 17 et Z(Fe) = 26. Déterminer le nombre d'électrons présents dans l'ion Cl⁻ et dans l'ion Fe³⁺.",
        methodSteps: [
          "Étape 1 : Pour l'atome neutre de chlore, le nombre d'électrons est Z = 17.",
          "Étape 2 : L'ion chlorure Cl⁻ porte une charge négative supplémentaire (-1e) -> gain de 1 électron : 17 + 1 = 18 électrons.",
          "Étape 3 : Pour l'atome neutre de fer, le nombre d'électrons est Z = 26.",
          "Étape 4 : L'ion fer III Fe³⁺ porte 3 charges positives (+3e) -> perte de 3 électrons : 26 − 3 = 23 électrons.",
        ],
        conclusion: "L'ion Cl⁻ possède 18 électrons ; l'ion Fe³⁺ possède 23 électrons.",
      },
      exercises: [
        {
          id: 'seconde_a_chimie_ch4_p1_ex1',
          type: 'mcq',
          prompt: "Quel est l'énoncé exact de la règle de l'octet pour les atomes au cours des réactions chimiques ?",
          options: [
            "Les atomes ont tendance à acquérir la structure stable à 8 électrons sur leur couche externe",
            "Les atomes doivent toujours posséder 8 couches électroniques",
            "Les atomes doivent avoir 8 protons dans leur noyau",
            "Les atomes perdent toujours 8 électrons pour devenir stables",
          ],
          correctAnswerIndex: 0,
          explanation: "La règle de l'octet stipule que les atomes cherchent à s'entourer de 8 électrons sur leur couche de valence, à l'image du gaz noble le plus proche.",
        },
        {
          id: 'seconde_a_chimie_ch4_p1_ex2',
          type: 'mcq',
          prompt: "Lorsqu'un atome neutre se transforme en cation, que subit son cortège électronique ?",
          options: [
            "Il perd un ou plusieurs électrons",
            "Il gagne un ou plusieurs électrons",
            "Il gagne des protons dans son noyau",
            "Il perd des neutrons",
          ],
          correctAnswerIndex: 0,
          explanation: "Un cation est un ion chargé positivement résultant de la perte d'un ou plusieurs électrons négatifs.",
        },
        {
          id: 'seconde_a_chimie_ch4_p1_ex3',
          type: 'mcq',
          prompt: "L'atome d'aluminium a pour numéro atomique Z = 13 (K²L⁸M³). Quel ion stable forme-t-il ?",
          options: [
            "Al³⁺ (perte des 3 électrons de la couche M)",
            "Al³⁻ (gain de 3 électrons)",
            "Al⁺ (perte de 1 électron)",
            "Al⁴⁺",
          ],
          correctAnswerIndex: 0,
          explanation: "L'aluminium cède ses 3 électrons de valence M³ pour acquérir la structure stable K²L⁸ du néon : ion Al³⁺.",
        },
        {
          id: 'seconde_a_chimie_ch4_p1_ex4',
          type: 'mcq',
          prompt: "Combien d'électrons possède l'ion oxyde O²⁻ sachant que le numéro atomique de l'oxygène est Z = 8 ?",
          options: [
            "10 électrons (8 + 2)",
            "6 électrons (8 − 2)",
            "8 électrons",
            "12 électrons",
          ],
          correctAnswerIndex: 0,
          explanation: "L'atome neutre possède 8 électrons. La charge 2− signifie qu'il a capté 2 électrons supplémentaires : 8 + 2 = 10 électrons (formule K²L⁸).",
        },
        {
          id: 'seconde_a_chimie_ch4_p1_ex5',
          type: 'mcq',
          prompt: "L'atome de magnésium Mg (Z = 12) donne l'ion Mg²⁺. Quelle est la formule électronique de cet ion ?",
          options: [
            "K² L⁸",
            "K² L⁸ M²",
            "K² L⁶",
            "K² L⁸ M⁴",
          ],
          correctAnswerIndex: 0,
          explanation: "En perdant ses 2 électrons de valence M², le magnésium conserve 10 électrons : structure K²L⁸.",
        },
        {
          id: 'seconde_a_chimie_ch4_p1_ex6',
          type: 'mcq',
          prompt: "Qu'advient-il du noyau de l'atome lors de la formation d'un ion ?",
          options: [
            "Le noyau reste rigoureusement inchangé (même nombre de protons Z et de neutrons)",
            "Le noyau perd des protons pour devenir négatif",
            "Le noyau gagne des protons pour devenir positif",
            "Le noyau explose sous l'effet de la charge",
          ],
          correctAnswerIndex: 0,
          explanation: "Les transformations chimiques ne touchent que le cortège électronique externe ; la composition du noyau (Z protons et N neutrons) reste strictement intacte.",
        },
        {
          id: 'seconde_a_chimie_ch4_p1_ex7',
          type: 'mcq',
          prompt: "Quel gaz noble possède la même structure électronique que l'ion sodium Na⁺ et l'ion fluorure F⁻ ?",
          options: [
            "Le néon (Ne, Z = 10)",
            "L'hélium (He, Z = 2)",
            "L'argon (Ar, Z = 18)",
            "Le krypton (Kr, Z = 36)",
          ],
          correctAnswerIndex: 0,
          explanation: "Na⁺ (11 − 1 = 10 e⁻) et F⁻ (9 + 1 = 10 e⁻) possèdent tous deux 10 électrons, soit la structure K²L⁸ du néon Ne.",
        },
        {
          id: 'seconde_a_chimie_ch4_p1_ex8',
          type: 'mcq',
          prompt: "Pour quels atomes légers la règle du duet s'applique-t-elle principalement ?",
          options: [
            "L'hydrogène (H), le lithium (Li), le béryllium (Be) et le bore (B)",
            "Le fer, le cuivre et le zinc",
            "Le chlore, le brome et l'iode",
            "Le carbone, l'azote et l'oxygène uniquement",
          ],
          correctAnswerIndex: 0,
          explanation: "Les éléments les plus légers ont pour gaz noble le plus proche l'hélium (Z = 2), et cherchent donc à acquérir 2 électrons sur leur couche K (règle du duet).",
        },
      ],
    },

    // ------------------------------------------------------------------------
    // MINI-LEÇON 2/3 : Ions Polyatomiques et Composés Ioniques
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_chimie_ch4_p2',
      order: 2,
      title: "Ions polyatomiques et électroneutralité des composés ioniques",
      summary:
        "Identification et nomenclature des ions polyatomiques, principe d'électroneutralité et écriture des formules statistiques.",
      conceptExplanation:
        "Dans la nature, les ions ne restent pas isolés : ils s'assemblent pour former des cristaux et composés ioniques solides parfaitement neutres.\n\n" +
        "1. Les ions polyatomiques :\n" +
        "Un ion polyatomique est un groupe d'atomes liés entre eux présentant un déficit ou un excédent d'électrons :\n" +
        "- Cations polyatomiques essentiels à connaître :\n" +
        "  * Ion ammonium : NH₄⁺\n" +
        "  * Ion hydronium (ou oxonium) : H₃O⁺\n" +
        "- Anions polyatomiques majeurs au programme :\n" +
        "  * Ion hydroxyde : OH⁻\n" +
        "  * Ion nitrate : NO₃⁻\n" +
        "  * Ion sulfate : SO₄²⁻\n" +
        "  * Ion carbonate : CO₃²⁻\n" +
        "  * Ion permanganate : MnO₄⁻\n\n" +
        "2. Définition d'un composé ionique :\n" +
        "Un composé ionique solide est formé par l'association ordonnée d'un seul type de cation et d'un seul type d'anion.\n" +
        "Propriété fondamentale : Un composé ionique est GLOBALEMENT NEUTRE du point de vue électrique. Il contient autant de charges positives élémentaires que de charges négatives élémentaires.\n\n" +
        "3. Règle d'écriture de la formule statistique :\n" +
        "La formule statistique traduit la proportion minimale de cations et d'anions assurant la neutralité électrique :\n" +
        "- Cas 1 : Charges opposées identiques (+1 et −1, ou +2 et −2) -> proportion 1:1.\n" +
        "  * Na⁺ et Cl⁻ -> NaCl (chlorure de sodium)\n" +
        "  * Cu²⁺ et SO₄²⁻ -> CuSO₄ (sulfate de cuivre)\n" +
        "- Cas 2 : Charges différentes (+2 et −1, ou +1 et −2) :\n" +
        "  * Fe²⁺ et Cl⁻ -> il faut 2 ions Cl⁻ pour neutraliser 1 ion Fe²⁺ -> FeCl₂ (chlorure de fer II).\n" +
        "  * Na⁺ et CO₃²⁻ -> il faut 2 ions Na⁺ pour 1 ion CO₃²⁻ -> Na₂CO₃ (carbonate de sodium).\n" +
        "- Cas 3 : Charges croisées (+3 et −1, ou +3 et −2) :\n" +
        "  * Al³⁺ et F⁻ -> AlF₃ (fluorure d'aluminium).\n" +
        "  * Fe³⁺ et O²⁻ -> 2 × (+3) + 3 × (−2) = 0 -> Fe₂O₃ (trioxyde de difer / oxyde de fer III).\n" +
        "  * NH₄⁺ et SO₄²⁻ -> (NH₄)₂SO₄ (sulfate d'ammonium). On utilise des parenthèses lorsqu'un ion polyatomique est présent en plusieurs exemplaires.",
      formulas: [
        {
          name: "Règle d'électroneutralité",
          formula: "p · (+q_cation) + q · (−q_anion) = 0",
          note: "Exemple pour Fe³⁺ et O²⁻ : 2 · (+3) + 3 · (−2) = +6 − 6 = 0 -> Fe₂O₃.",
        },
      ],
      keyRule:
        "Règle d'or : Dans une formule statistique de composé solide (ex: NaCl, CuSO₄, AlF₃), on n'écrit JAMAIS les charges électriques apparentes (+ ou −) ! La formule statistique représente un solide globalement neutre.",
      workedExample: {
        title: "Écriture de la formule statistique du sulfate d'ammonium",
        statement: "On dispose de l'ion ammonium NH₄⁺ et de l'ion sulfate SO₄²⁻. Écrire la formule statistique du solide ionique formé.",
        methodSteps: [
          "Étape 1 : Identifier la charge du cation : NH₄⁺ porte une charge positive (+1).",
          "Étape 2 : Identifier la charge de l'anion : SO₄²⁻ porte deux charges négatives (−2).",
          "Étape 3 : Équilibrer les charges : il faut 2 cations NH₄⁺ pour neutraliser 1 anion SO₄²⁻ : 2 × (+1) + 1 × (−2) = 0.",
          "Étape 4 : Mettre l'ion polyatomique entre parenthèses avec l'indice 2 : (NH₄)₂SO₄.",
        ],
        conclusion: "La formule statistique est (NH₄)₂SO₄ (sulfate d'ammonium).",
      },
      exercises: [
        {
          id: 'seconde_a_chimie_ch4_p2_ex1',
          type: 'mcq',
          prompt: "Parmi les ions suivants, lequel est un ion polyatomique ?",
          options: [
            "SO₄²⁻ (ion sulfate)",
            "Mg²⁺ (ion magnésium)",
            "Cl⁻ (ion chlorure)",
            "Fe³⁺ (ion fer III)",
          ],
          correctAnswerIndex: 0,
          explanation: "Un ion polyatomique est formé d'un groupe de plusieurs atomes liés : SO₄²⁻ est constitué de 1 atome de soufre et 4 atomes d'oxygène.",
        },
        {
          id: 'seconde_a_chimie_ch4_p2_ex2',
          type: 'mcq',
          prompt: "Quel est le nom de l'ion polyatomique de formule NH₄⁺ ?",
          options: [
            "Ion ammonium",
            "Ion hydronium",
            "Ion nitrate",
            "Ion hydroxyde",
          ],
          correctAnswerIndex: 0,
          explanation: "NH₄⁺ est le cation ammonium. (H₃O⁺ est l'hydronium, NO₃⁻ est le nitrate, OH⁻ est l'hydroxyde).",
        },
        {
          id: 'seconde_a_chimie_ch4_p2_ex3',
          type: 'mcq',
          prompt: "Quelle est la formule statistique du chlorure de fer II constitué des ions Fe²⁺ et Cl⁻ ?",
          options: [
            "FeCl₂",
            "Fe₂Cl",
            "FeCl",
            "FeCl₃",
          ],
          correctAnswerIndex: 0,
          explanation: "Pour neutraliser la charge +2 de Fe²⁺, il faut deux ions Cl⁻ (−1 chacun) : FeCl₂.",
        },
        {
          id: 'seconde_a_chimie_ch4_p2_ex4',
          type: 'mcq',
          prompt: "Quelle est la formule statistique du carbonate de sodium constitué des ions Na⁺ et CO₃²⁻ ?",
          options: [
            "Na₂CO₃",
            "NaCO₃",
            "Na(CO₃)₂",
            "Na₃CO₂",
          ],
          correctAnswerIndex: 0,
          explanation: "L'ion carbonate porte 2 charges négatives (CO₃²⁻), il faut donc deux ions Na⁺ (+1 chacun) : Na₂CO₃.",
        },
        {
          id: 'seconde_a_chimie_ch4_p2_ex5',
          type: 'mcq',
          prompt: "Pourquoi un composé ionique à l'état solide ne porte-t-il aucune charge apparente ?",
          options: [
            "Parce qu'il est électriquement neutre : le nombre total de charges positives compense exactement celui des charges négatives",
            "Parce que les électrons disparaissent lors de la formation du cristal",
            "Parce que seuls les métaux neutres peuvent former des cristaux",
            "Parce que la charge des anions est toujours détruite par la chaleur",
          ],
          correctAnswerIndex: 0,
          explanation: "La neutralité électrique globale est la condition fondamentale d'existence de tout composé ionique stable.",
        },
        {
          id: 'seconde_a_chimie_ch4_p2_ex6',
          type: 'mcq',
          prompt: "Quelle est la formule statistique du fluorure d'aluminium constitué des ions Al³⁺ et F⁻ ?",
          options: [
            "AlF₃",
            "Al₃F",
            "AlF",
            "Al₂F₃",
          ],
          correctAnswerIndex: 0,
          explanation: "L'ion Al³⁺ apporte 3 charges positives, il requiert donc 3 ions F⁻ (−1 chacun) : AlF₃.",
        },
        {
          id: 'seconde_a_chimie_ch4_p2_ex7',
          type: 'mcq',
          prompt: "Comment nomme-t-on le composé de formule statistique CuSO₄ formé par Cu²⁺ et SO₄²⁻ ?",
          options: [
            "Sulfate de cuivre",
            "Sulfure de cuivre",
            "Carbonate de cuivre",
            "Nitrate de cuivre",
          ],
          correctAnswerIndex: 0,
          explanation: "CuSO₄ est le sulfate de cuivre (bleu sous sa forme hydratée, blanc anhydre).",
        },
        {
          id: 'seconde_a_chimie_ch4_p2_ex8',
          type: 'mcq',
          prompt: "Quelle formule statistique résulte de l'association des ions Fe³⁺ et O²⁻ ?",
          options: [
            "Fe₂O₃ (trioxyde de difer)",
            "FeO",
            "Fe₃O₂",
            "Fe₂O",
          ],
          correctAnswerIndex: 0,
          explanation: "2 × (+3) + 3 × (−2) = +6 − 6 = 0, la formule statistique minimale est Fe₂O₃ (oxyde de fer III ou rouille).",
        },
      ],
    },

    // ------------------------------------------------------------------------
    // MINI-LEÇON 3/3 : Liaison de Covalence, Lewis et Géométrie des Molécules
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_chimie_ch4_p3',
      order: 3,
      title: "Liaisons de covalence, représentation de Lewis et géométrie",
      summary:
        "Mise en commun de doublets d'électrons, valence des atomes (H, O, N, C), formule de Lewis, doublets liants et non-liants, corps purs et mélanges.",
      conceptExplanation:
        "Lorsque deux atomes non-métalliques se rencontrent, aucun des deux n'a tendance à perdre ses électrons. Pour satisfaire la règle de l'octet, ils vont alors mettre en commun des électrons célibataires : c'est la liaison de covalence.\n\n" +
        "1. La liaison de covalence (covalente) :\n" +
        "Une liaison de covalence résulte de la mise en commun par deux atomes d'une ou plusieurs paires d'électrons célibataires appelées doublets de liaison (ou doublets liants).\n" +
        "- Doublet liant : paire d'électrons partagée entre deux atomes (symbolisé par un tiret reliant les symboles des deux atomes : A—B).\n" +
        "- Doublets non-liants (ou libres) : paires d'électrons de la couche externe non engagées dans des liaisons (symbolisés par un tiret placé sur l'atome).\n\n" +
        "2. Valence d'un atome :\n" +
        "La valence d'un atome est le nombre de liaisons de covalence qu'il peut former pour saturer sa couche externe (égal au nombre d'électrons célibataires de valence) :\n" +
        "- Hydrogène H (K¹) : 1 liaison possible -> monovalent (valence 1).\n" +
        "- Oxygène O (K²L⁶) : 2 électrons célibataires + 2 doublets non-liants -> divalent (valence 2).\n" +
        "- Azote N (K²L⁵) : 3 électrons célibataires + 1 doublet non-liant -> trivalent (valence 3).\n" +
        "- Carbone C (K²L⁴) : 4 électrons célibataires, 0 doublet non-liant -> tétravalent (valence 4).\n" +
        "- Chlore Cl (K²L⁸M⁷) : 1 électron célibataire + 3 doublets non-liants -> monovalent (valence 1).\n\n" +
        "3. Liaisons simples, doubles et triples :\n" +
        "- Liaison simple : 1 doublet mis en commun (ex : H—H dans H₂, H—Cl dans HCl, H—O—H dans H₂O).\n" +
        "- Liaison double : 2 doublets mis en commun (ex : O=C=O dans CO₂, O=O dans O₂).\n" +
        "- Liaison triple : 3 doublets mis en commun (ex : N≡N dans le diazote N₂).\n\n" +
        "4. Géométrie des molécules (Répulsion minimale des doublets) :\n" +
        "Les doublets électroniques (liants et non-liants) se repoussent mutuellement et s'écartent au maximum dans l'espace pour minimiser leur répulsion électrique :\n" +
        "- Molécule d'eau H₂O : géométrie coudée (angle H—O—H = 105°).\n" +
        "- Molécule d'ammoniac NH₃ : géométrie pyramidale (angle H—N—H = 107°).\n" +
        "- Molécule de méthane CH₄ : géométrie tétraédrique régulière (angle H—C—H = 109°28').\n" +
        "- Molécule de dioxyde de carbone CO₂ : géométrie linéaire (angle O—C—O = 180°).\n\n" +
        "5. Corps purs simples, corps purs composés et mélanges :\n" +
        "- Corps pur : constitué de molécules toutes identiques entre elles.\n" +
        "  * Corps pur simple : molécules formées d'un seul type d'atomes (ex : H₂, O₂, N₂, Cl₂).\n" +
        "  * Corps pur composé : molécules formées de plusieurs types d'atomes différents (ex : H₂O, CO₂, CH₄).\n" +
        "- Mélange : constitué de plusieurs types de molécules différentes (ex : l'air atmosphérique = 79% N₂ + 20% O₂ + 1% autres gaz).",
      formulas: [
        {
          name: "Valence des éléments usuels",
          formula: "H : 1 | O : 2 | N : 3 | C : 4 | Halogènes (F, Cl) : 1",
          note: "Nombre de doublets liants formés par chaque atome.",
        },
      ],
      keyRule:
        "Règle de Lewis : Chaque doublet liant compte pour 2 électrons pour chacun des deux atomes liés. Chaque atome lié s'entoure ainsi d'un octet (8 électrons), et l'hydrogène d'un duet (2 électrons).",
      workedExample: {
        title: "Représentation de Lewis de la molécule de diazote N₂",
        statement: "L'atome d'azote a pour numéro atomique Z = 7. Écrire sa formule électronique, déterminer sa valence et donner la représentation de Lewis de N₂.",
        methodSteps: [
          "Étape 1 : Formule électronique de l'azote N : K²L⁵.",
          "Étape 2 : Il possède 5 électrons de valence : 1 doublet non-liant et 3 électrons célibataires -> valence = 3.",
          "Étape 3 : Pour que deux atomes d'azote s'entourent de 8 électrons chacun, ils mettent en commun leurs 3 électrons célibataires respectifs, formant une liaison covalente triple.",
          "Étape 4 : Représentation : chaque atome conserve son doublet non-liant à l'extrémité, reliés par 3 traits horizontaux : |N≡N|.",
        ],
        conclusion: "N₂ comporte 1 liaison triple et 2 doublets non-liants (un sur chaque azote).",
      },
      exercises: [
        {
          id: 'seconde_a_chimie_ch4_p3_ex1',
          type: 'mcq',
          prompt: "En quoi consiste une liaison de covalence entre deux atomes ?",
          options: [
            "En la mise en commun d'une ou plusieurs paires d'électrons célibataires (doublets de liaison)",
            "En l'arrachement définitif d'un proton d'un noyau vers un autre",
            "En la fusion des deux noyaux atomiques",
            "En une attraction magnétique sans aucun échange d'électrons",
          ],
          correctAnswerIndex: 0,
          explanation: "Une liaison covalente est le partage équitable d'une ou plusieurs paires d'électrons de valence (doublets liants).",
        },
        {
          id: 'seconde_a_chimie_ch4_p3_ex2',
          type: 'mcq',
          prompt: "Quelle est la valence de l'atome de carbone C (Z = 6, K²L⁴) ?",
          options: [
            "4 (tétravalent)",
            "2 (divalent)",
            "1 (monovalent)",
            "3 (trivalent)",
          ],
          correctAnswerIndex: 0,
          explanation: "Avec 4 électrons célibataires sur sa couche externe L, le carbone forme 4 liaisons covalentes (tétravalence).",
        },
        {
          id: 'seconde_a_chimie_ch4_p3_ex3',
          type: 'mcq',
          prompt: "Dans la molécule de diazote N₂, quel type de liaison covalente relie les deux atomes d'azote ?",
          options: [
            "Une liaison covalente triple (mise en commun de 3 doublets)",
            "Une liaison covalente simple",
            "Une liaison covalente double",
            "Une liaison ionique pure",
          ],
          correctAnswerIndex: 0,
          explanation: "Chaque atome d'azote apporte 3 électrons célibataires : ils mettent en commun 3 doublets, formant une liaison triple N≡N.",
        },
        {
          id: 'seconde_a_chimie_ch4_p3_ex4',
          type: 'mcq',
          prompt: "Combien de doublets non-liants (libres) possède l'atome d'oxygène dans la molécule d'eau H₂O ?",
          options: [
            "2 doublets non-liants",
            "0 doublet non-liant",
            "1 doublet non-liant",
            "3 doublets non-liants",
          ],
          correctAnswerIndex: 0,
          explanation: "L'atome d'oxygène possède 6 électrons de valence : 2 engagés dans les liaisons O—H et 4 qui forment 2 doublets non-liants.",
        },
        {
          id: 'seconde_a_chimie_ch4_p3_ex5',
          type: 'mcq',
          prompt: "Quelle est la structure géométrique de la molécule de méthane CH₄ dans l'espace ?",
          options: [
            "Tétraédrique (les 4 liaisons pointent vers les sommets d'un tétraèdre régulier)",
            "Plane carrée",
            "Linéaire",
            "Coudée à 90°",
          ],
          correctAnswerIndex: 0,
          explanation: "La répulsion mutuelle maximale des 4 doublets liants C—H dispose les 4 atomes d'hydrogène aux 4 sommets d'un tétraèdre régulier (angle 109°28').",
        },
        {
          id: 'seconde_a_chimie_ch4_p3_ex6',
          type: 'mcq',
          prompt: "Pourquoi l'eau pure (H₂O) est-elle qualifiée de corps pur composé ?",
          options: [
            "Parce que toutes ses molécules sont identiques, mais composées de deux éléments chimiques différents (H et O)",
            "Parce qu'elle contient des sels minéraux dissous",
            "Parce que ses molécules changent constamment de formule",
            "Parce qu'elle est composée d'un seul type d'atome",
          ],
          correctAnswerIndex: 0,
          explanation: "Un corps pur composé est formé de molécules toutes identiques composées d'atomes d'éléments différents (ici H et O).",
        },
        {
          id: 'seconde_a_chimie_ch4_p3_ex7',
          type: 'mcq',
          prompt: "L'air que nous respirons est-il un corps pur ou un mélange ?",
          options: [
            "Un mélange (composé principalement de diazote N₂ à 79% et de dioxygène O₂ à 20%)",
            "Un corps pur simple",
            "Un corps pur composé d'une seule molécule géante",
            "Un corps solide dissous",
          ],
          correctAnswerIndex: 0,
          explanation: "L'air est un mélange gazeux constitué de plusieurs molécules différentes (environ 79% de N₂, 20% de O₂ et 1% d'autres gaz).",
        },
        {
          id: 'seconde_a_chimie_ch4_p3_ex8',
          type: 'mcq',
          prompt: "Dans la molécule de dioxyde de carbone CO₂, quel est le nombre total de liaisons de covalence autour de l'atome de carbone central ?",
          options: [
            "4 liaisons (deux doubles liaisons O=C=O)",
            "2 liaisons simples",
            "3 liaisons simples",
            "1 liaison quadruple",
          ],
          correctAnswerIndex: 0,
          explanation: "Le carbone forme 2 doubles liaisons avec les deux oxygènes (O=C=O), soit un total de 4 doublets liants assurant son octet.",
        },
      ],
    },
  ],
};

// ============================================================================
// LEÇON 5 : MOLE ET GRANDEURS MOLAIRES
// ============================================================================
export const chimie2deAMoleEtGrandeursMolairesChapter: CurriculumChapter = {
  id: 'seconde_a_chimie_ch5_mole_et_grandeurs_molaires',
  subjectId: 'physique_chimie',
  gradeLevel: 'seconde_a',
  order: 5,
  officialVolumeHours: 12,
  title: 'Leçon 5 — Mole et grandeurs molaires',
  summary:
    "Définition de la mole et constante d'Avogadro, masse molaire atomique et moléculaire, calculs de quantité de matière (n = m/M et n = V/Vm), volume molaire des gaz, loi d'Avogadro-Ampère et densité des gaz par rapport à l'air.",
  points: [
    // ------------------------------------------------------------------------
    // MINI-LEÇON 1/3 : La Mole et la Constante d'Avogadro
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_chimie_ch5_p1',
      order: 1,
      title: "La mole : unité de quantité de matière et constante d'Avogadro",
      summary:
        "Nécessité de la mole pour dénombrer l'infiniment petit, constante d'Avogadro Na = 6,02 × 10²³ mol⁻¹, relation N = n × Na.",
      conceptExplanation:
        "Dans un échantillon ordinaire de matière, le nombre d'atomes ou de molécules est astronomique : par exemple, un petit dé à coudre d'eau (27 mL) contient 903 000 000 000 000 000 000 000 molécules (903 × 10²¹) ! Pour compter facilement ces entités sans manipuler des nombres vertigineux, les chimistes utilisent une unité de paquet : la mole.\n\n" +
        "1. Qu'est-ce qu'une mole ?\n" +
        "De la même façon qu'une douzaine contient 12 objets et qu'une rame de papier contient 500 feuilles, une mole est un paquet d'entités chimiques contenant exactement 6,02 × 10²³ entités.\n" +
        "Définition officielle : La mole est l'unité internationale de quantité de matière. Son symbole est mol.\n" +
        "Elle contient autant d'entités élémentaires (atomes, molécules, ions, électrons) qu'il y a d'atomes dans 12 g de carbone 12.\n\n" +
        "2. La constante d'Avogadro (notée Na) :\n" +
        "Le nombre d'entités élémentaires contenues dans une mole s'appelle le nombre ou la constante d'Avogadro, notée Na.\n" +
        "Sa valeur officielle retenue au lycée est :\n" +
        "  Na = 6,02 × 10²³ mol⁻¹.\n" +
        "- 1 mole d'atomes de fer = 6,02 × 10²³ atomes de fer.\n" +
        "- 1 mole de molécules d'eau = 6,02 × 10²³ molécules d'eau.\n" +
        "- 1 mole d'électrons = 6,02 × 10²³ électrons.\n\n" +
        "3. Relation entre nombre d'entités N et quantité de matière n :\n" +
        "Soit un échantillon contenant N entités élémentaires identiques. La quantité de matière n (en mol) contenue dans cet échantillon est donnée par :\n" +
        "  N = n × Na   d'où   n = N / Na\n" +
        "avec :\n" +
        "- N : nombre d'entités élémentaires (sans unité, entier pur),\n" +
        "- n : quantité de matière (en mol),\n" +
        "- Na : constante d'Avogadro (6,02 × 10²³ mol⁻¹).",
      formulas: [
        {
          name: "Relation fondamentale du nombre d'entités",
          formula: "N = n · Na  <=>  n = N / Na",
          note: "Na = 6,02 × 10²³ mol⁻¹.",
        },
      ],
      keyRule:
        "Réflexe d'Examen : Ne jamais confondre N (nombre d'entités, sans unité, très grand de l'ordre de 10²²) et n (quantité de matière, en moles, petit nombre de l'ordre de 0,1 à 10 mol).",
      workedExample: {
        title: "Calcul de la quantité de matière dans un clou en fer",
        statement: "Un clou en fer contient N = 10²⁴ atomes de fer. Calculer la quantité de matière n de fer contenu dans ce clou.",
        methodSteps: [
          "Étape 1 : Rappeler la formule liant n, N et Na : n = N / Na.",
          "Étape 2 : Remplacer par les valeurs numériques : N = 1,0 × 10²⁴ et Na = 6,02 × 10²³ mol⁻¹.",
          "Étape 3 : Effectuer le quotient : n = 10²⁴ / (6,02 × 10²³) = (1 / 6,02) × 10¹ ≈ 0,166 × 10 = 1,66 mol.",
        ],
        conclusion: "Le clou renferme n = 1,66 mol d'atomes de fer.",
      },
      exercises: [
        {
          id: 'seconde_a_chimie_ch5_p1_ex1',
          type: 'mcq',
          prompt: "Quelle est l'unité internationale de quantité de matière et son symbole officiel ?",
          options: [
            "La mole, de symbole mol",
            "Le gramme, de symbole g",
            "Le litre, de symbole L",
            "La molécule, de symbole molec",
          ],
          correctAnswerIndex: 0,
          explanation: "La mole (symbole : mol) est l'unité du Système International (SI) pour exprimer la quantité de matière.",
        },
        {
          id: 'seconde_a_chimie_ch5_p1_ex2',
          type: 'mcq',
          prompt: "Quelle est la valeur approchée officielle de la constante d'Avogadro Na enseignée au lycée ?",
          options: [
            "6,02 × 10²³ mol⁻¹",
            "6,02 × 10⁻²³ mol⁻¹",
            "9,81 × 10²³ mol⁻¹",
            "3,00 × 10⁸ mol⁻¹",
          ],
          correctAnswerIndex: 0,
          explanation: "La constante d'Avogadro vaut approximativement 6,02 × 10²³ mol⁻¹.",
        },
        {
          id: 'seconde_a_chimie_ch5_p1_ex3',
          type: 'mcq',
          prompt: "Combien d'atomes contient exactement 1 mole d'atomes de cuivre ?",
          options: [
            "6,02 × 10²³ atomes",
            "12 atomes",
            "63,5 atomes",
            "100 atomes",
          ],
          correctAnswerIndex: 0,
          explanation: "Par définition, 1 mole de n'importe quelle entité contient exactement Na = 6,02 × 10²³ entités de cette espèce.",
        },
        {
          id: 'seconde_a_chimie_ch5_p1_ex4',
          type: 'mcq',
          prompt: "Quelle relation permet de calculer la quantité de matière n à partir du nombre d'entités N ?",
          options: [
            "n = N / Na",
            "n = N × Na",
            "n = Na / N",
            "n = N + Na",
          ],
          correctAnswerIndex: 0,
          explanation: "Comme N = n × Na, on en déduit directement n = N / Na.",
        },
        {
          id: 'seconde_a_chimie_ch5_p1_ex5',
          type: 'mcq',
          prompt: "Combien de molécules d'eau sont présentes dans un échantillon de 2 moles d'eau pure ?",
          options: [
            "1,204 × 10²⁴ molécules (soit 2 × 6,02 × 10²³)",
            "6,02 × 10²³ molécules",
            "3,01 × 10²³ molécules",
            "200 molécules",
          ],
          correctAnswerIndex: 0,
          explanation: "N = n × Na = 2 × (6,02 × 10²³) = 12,04 × 10²³ = 1,204 × 10²⁴ molécules.",
        },
        {
          id: 'seconde_a_chimie_ch5_p1_ex6',
          type: 'mcq',
          prompt: "Un flacon contient 3,01 × 10²³ atomes de carbone. Quelle est la quantité de matière correspondante ?",
          options: [
            "0,5 mol",
            "2 mol",
            "1 mol",
            "0,2 mol",
          ],
          correctAnswerIndex: 0,
          explanation: "n = N / Na = (3,01 × 10²³) / (6,02 × 10²³) = 3,01 / 6,02 = 0,5 mol.",
        },
        {
          id: 'seconde_a_chimie_ch5_p1_ex7',
          type: 'mcq',
          prompt: "Historiquement, la mole a été définie en référence à la quantité de matière contenue dans 12 g de quel isotope ?",
          options: [
            "Le carbone 12 (¹²C)",
            "L'hydrogène 1 (¹H)",
            "L'oxygène 16 (¹⁶O)",
            "L'uranium 235",
          ],
          correctAnswerIndex: 0,
          explanation: "La mole a été définie en 1971 comme la quantité de matière contenant autant d'entités qu'il y a d'atomes dans 12 g de carbone 12.",
        },
        {
          id: 'seconde_a_chimie_ch5_p1_ex8',
          type: 'mcq',
          prompt: "Quelle est l'unité de la constante d'Avogadro Na ?",
          options: [
            "mol⁻¹ (par mole)",
            "mol (mole)",
            "g/mol",
            "sans unité",
          ],
          correctAnswerIndex: 0,
          explanation: "Na s'exprime en entités par mole, c'est-à-dire en mol⁻¹.",
        },
      ],
    },

    // ------------------------------------------------------------------------
    // MINI-LEÇON 2/3 : Masse Molaire et Détermination de la Quantité de Matière
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_chimie_ch5_p2',
      order: 2,
      title: "Masse molaire (atomique, moléculaire, ionique) et relation n = m / M",
      summary:
        "Définition de la masse molaire M en g/mol, calcul de la masse molaire d'un composé et relation fondamentale masse / quantité de matière.",
      conceptExplanation:
        "Comment peser des moles sur une balance de laboratoire ? En associant à chaque espèce chimique sa masse molaire M.\n\n" +
        "1. Définition de la masse molaire M :\n" +
        "La masse molaire M d'une espèce chimique est la masse d'une mole d'entités (6,02 × 10²³ entités) de cette espèce.\n" +
        "Elle s'exprime en grammes par mole, notée g/mol ou g·mol⁻¹.\n\n" +
        "2. Masse molaire atomique :\n" +
        "C'est la masse d'une mole d'atomes de l'élément considéré. Elle est inscrite dans chaque case de la classification périodique.\n" +
        "Valeurs usuelles officielles MENA :\n" +
        "- Hydrogène : M(H) = 1 g/mol\n" +
        "- Carbone : M(C) = 12 g/mol\n" +
        "- Azote : M(N) = 14 g/mol\n" +
        "- Oxygène : M(O) = 16 g/mol\n" +
        "- Sodium : M(Na) = 23 g/mol\n" +
        "- Aluminium : M(Al) = 27 g/mol\n" +
        "- Soufre : M(S) = 32 g/mol\n" +
        "- Chlore : M(Cl) = 35,5 g/mol\n" +
        "- Potassium : M(K) = 39 g/mol\n" +
        "- Calcium : M(Ca) = 40 g/mol\n" +
        "- Fer : M(Fe) = 56 g/mol (ou 55,8 g/mol).\n\n" +
        "3. Masse molaire moléculaire :\n" +
        "C'est la masse d'une mole de molécules. Elle est égale à la somme des masses molaires atomiques des atomes constituant la molécule.\n" +
        "Exemples détaillés :\n" +
        "- Eau H₂O : M = 2 × M(H) + 1 × M(O) = 2 × 1 + 16 = 18 g/mol.\n" +
        "- Dioxyde de carbone CO₂ : M = 1 × 12 + 2 × 16 = 44 g/mol.\n" +
        "- Éthanol C₂H₆O : M = 2 × 12 + 6 × 1 + 16 = 24 + 6 + 16 = 46 g/mol.\n" +
        "- Vitamine C (acide ascorbique C₆H₈O₆) : M = 6 × 12 + 8 × 1 + 6 × 16 = 72 + 8 + 96 = 176 g/mol.\n\n" +
        "4. Masse molaire ionique :\n" +
        "Comme la masse d'un électron est négligeable devant celle du noyau, la masse molaire d'un ion est identique à celle de l'atome ou du groupement correspondant :\n" +
        "- M(Cl⁻) = M(Cl) = 35,5 g/mol.\n" +
        "- M(SO₄²⁻) = 1 × 32 + 4 × 16 = 96 g/mol.\n\n" +
        "5. Relation fondamentale entre masse m et quantité de matière n :\n" +
        "  n = m / M   <=>   m = n × M\n" +
        "avec :\n" +
        "- n : quantité de matière (en mol),\n" +
        "- m : masse de l'échantillon (en grammes, g),\n" +
        "- M : masse molaire (en g/mol).\n" +
        "Masse d'une seule molécule individuelle : m₁ = M / Na.",
      formulas: [
        {
          name: "Relation fondamentale masse / quantité de matière",
          formula: "n = m / M  <=>  m = n · M",
          note: "Attention aux unités : m doit impérativement être en grammes (g) !",
        },
        {
          name: "Masse d'une molécule individuelle",
          formula: "m₁ = M / Na",
          note: "Masse unitaire d'une particule en grammes.",
        },
      ],
      keyRule:
        "Attention aux pièges d'unités aux devoirs : La masse m doit TOUJOURS être convertie en grammes (g) avant d'appliquer n = m/M ! Si la masse est donnée en kg, multiplie par 1 000 (ex : 2 kg = 2 000 g). Si elle est donnée en mg, divise par 1 000 (ex : 500 mg = 0,5 g).",
      workedExample: {
        title: "Calcul de quantité de matière : Comprimé de Vitamine C (500 mg)",
        statement: "Un comprimé d'acide ascorbique (vitamine C, C₆H₈O₆) contient m = 500 mg de substance pure. Calculer la masse molaire M puis la quantité de matière n dans le comprimé.",
        methodSteps: [
          "Étape 1 : Calcul de M(C₆H₈O₆) : 6 × 12 + 8 × 1 + 6 × 16 = 72 + 8 + 96 = 176 g/mol.",
          "Étape 2 : Convertir la masse m en grammes : 500 mg = 500 × 10⁻³ g = 0,50 g.",
          "Étape 3 : Appliquer la formule : n = m / M = 0,50 / 176 ≈ 0,00284 mol = 2,84 × 10⁻³ mol.",
        ],
        conclusion: "Le comprimé renferme n = 2,84 × 10⁻³ mol (ou 2,84 mmol) d'acide ascorbique.",
      },
      exercises: [
        {
          id: 'seconde_a_chimie_ch5_p2_ex1',
          type: 'mcq',
          prompt: "Quelle est l'unité de la masse molaire M dans le système usuel de chimie ?",
          options: [
            "g/mol (ou g·mol⁻¹)",
            "kg/m³",
            "mol/L",
            "g/L",
          ],
          correctAnswerIndex: 0,
          explanation: "La masse molaire représente la masse en grammes d'une mole : elle s'exprime en g/mol.",
        },
        {
          id: 'seconde_a_chimie_ch5_p2_ex2',
          type: 'mcq',
          prompt: "On donne M(H) = 1 g/mol et M(O) = 16 g/mol. Quelle est la masse molaire moléculaire de l'eau H₂O ?",
          options: [
            "18 g/mol",
            "17 g/mol",
            "34 g/mol",
            "16 g/mol",
          ],
          correctAnswerIndex: 0,
          explanation: "M(H₂O) = 2 × 1 + 16 = 18 g/mol.",
        },
        {
          id: 'seconde_a_chimie_ch5_p2_ex3',
          type: 'mcq',
          prompt: "Quelle est la masse molaire moléculaire du dioxyde de carbone CO₂ sachant que M(C) = 12 g/mol et M(O) = 16 g/mol ?",
          options: [
            "44 g/mol",
            "28 g/mol",
            "32 g/mol",
            "40 g/mol",
          ],
          correctAnswerIndex: 0,
          explanation: "M(CO₂) = 12 + 2 × 16 = 12 + 32 = 44 g/mol.",
        },
        {
          id: 'seconde_a_chimie_ch5_p2_ex4',
          type: 'mcq',
          prompt: "Quelle quantité de matière n contient un échantillon de 36 g d'eau liquide pure ?",
          options: [
            "2 mol",
            "0,5 mol",
            "18 mol",
            "4 mol",
          ],
          correctAnswerIndex: 0,
          explanation: "n = m / M = 36 / 18 = 2 mol.",
        },
        {
          id: 'seconde_a_chimie_ch5_p2_ex5',
          type: 'mcq',
          prompt: "On pèse 0,4 mol d'hydroxyde de sodium NaOH (M = 40 g/mol). Quelle est la masse correspondante en grammes ?",
          options: [
            "16 g",
            "100 g",
            "40 g",
            "4 g",
          ],
          correctAnswerIndex: 0,
          explanation: "m = n × M = 0,4 × 40 = 16 g.",
        },
        {
          id: 'seconde_a_chimie_ch5_p2_ex6',
          type: 'mcq',
          prompt: "Pourquoi la masse molaire d'un ion monoatomique (ex : Cl⁻) est-elle égale à celle de l'atome neutre correspondant ?",
          options: [
            "Parce que la masse des électrons gagnés ou perdus est totalement négligeable devant celle du noyau",
            "Parce que le nombre de protons change en même temps que les électrons",
            "Parce que les électrons n'ont aucune masse dans le vide",
            "Parce que les ions n'ont pas de masse mesurable",
          ],
          correctAnswerIndex: 0,
          explanation: "La masse d'un électron est environ 1 836 fois plus faible que celle d'un nucléon ; le gain ou la perte de quelques électrons ne modifie pas la masse molaire mesurable.",
        },
        {
          id: 'seconde_a_chimie_ch5_p2_ex7',
          type: 'mcq',
          prompt: "Un échantillon de sel de cuisine NaCl (M = 58,5 g/mol) a une masse m = 117 g. Combien de moles cela représente-t-il ?",
          options: [
            "2 mol",
            "1 mol",
            "3 mol",
            "0,5 mol",
          ],
          correctAnswerIndex: 0,
          explanation: "n = m / M = 117 / 58,5 = 2 mol.",
        },
        {
          id: 'seconde_a_chimie_ch5_p2_ex8',
          type: 'mcq',
          prompt: "Comment calcule-t-on la masse individuelle m₁ d'une seule molécule à partir de sa masse molaire M et de la constante d'Avogadro Na ?",
          options: [
            "m₁ = M / Na",
            "m₁ = M × Na",
            "m₁ = Na / M",
            "m₁ = M − Na",
          ],
          correctAnswerIndex: 0,
          explanation: "Une mole (M grammes) contient Na molécules, donc une seule molécule pèse m₁ = M / Na grammes.",
        },
      ],
    },

    // ------------------------------------------------------------------------
    // MINI-LEÇON 3/3 : Volume Molaire des Gaz et Densité par Rapport à l'Air
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_chimie_ch5_p3',
      order: 3,
      title: "Volume molaire des gaz, loi d'Avogadro-Ampère et densité par rapport à l'air",
      summary:
        "Loi d'Avogadro-Ampère, volume molaire normal Vm = 22,4 L/mol (CNTP) et usuel Vm = 24 L/mol, relation n = V / Vm et densité d = M / 29.",
      conceptExplanation:
        "Pour les gaz, mesurer une masse est souvent délicat. Il est bien plus simple et précis de mesurer leur volume V.\n\n" +
        "1. La loi d'Avogadro-Ampère :\n" +
        "Énoncé fondamental : Des volumes égaux de gaz différents, pris dans les mêmes conditions de température et de pression, contiennent le même nombre de molécules (donc la même quantité de matière en moles).\n\n" +
        "2. Le volume molaire des gaz (Vm) :\n" +
        "Le volume molaire d'un gaz est le volume occupé par une mole de ce gaz dans des conditions données de température T et de pression P.\n" +
        "Il s'exprime en litres par mole : L/mol ou L·mol⁻¹.\n" +
        "Valeurs officielles de référence :\n" +
        "- Dans les Conditions Normales de Température et de Pression (CNTP : T = 0 °C et P = 1 atm = 10⁵ Pa) :\n" +
        "  Vm = 22,4 L/mol (volume molaire normal).\n" +
        "- Dans les conditions habituelles de laboratoire (T = 20 °C et P = 1 atm) :\n" +
        "  Vm = 24 L/mol (ou 25 L/mol selon l'énoncé du devoir).\n\n" +
        "3. Détermination de la quantité de matière d'un gaz :\n" +
        "Pour un volume V de gaz dans les conditions où le volume molaire vaut Vm :\n" +
        "  n = V / Vm   <=>   V = n × Vm\n" +
        "avec :\n" +
        "- n : quantité de matière du gaz (en mol),\n" +
        "- V : volume du gaz (en litres, L),\n" +
        "- Vm : volume molaire du gaz (en L/mol).\n" +
        "Rappel : Cette formule n'est valable QUE pour les corps à l'état gazeux !\n\n" +
        "4. Densité d'un gaz par rapport à l'air (d) :\n" +
        "La densité d d'un gaz par rapport à l'air compare la masse d'un certain volume de ce gaz à la masse du même volume d'air dans les mêmes conditions :\n" +
        "  d = M / 29   <=>   M = 29 × d\n" +
        "avec :\n" +
        "- M : masse molaire moléculaire du gaz (en g/mol),\n" +
        "- 29 : masse molaire moyenne de l'air (g/mol) car l'air est composé de 80% N₂ (28 g/mol) et 20% O₂ (32 g/mol) -> 0,8 × 28 + 0,2 × 32 = 28,8 ≈ 29 g/mol.\n" +
        "- d : densité par rapport à l'air (grandeur sans unité).\n" +
        "Interprétation physique :\n" +
        "- Si d > 1 (M > 29 g/mol) : le gaz est plus lourd (plus dense) que l'air, il s'accumule au sol (ex : CO₂, Cl₂, butane).\n" +
        "- Si d < 1 (M < 29 g/mol) : le gaz est plus léger (moins dense) que l'air, il s'élève au plafond (ex : H₂, He, CH₄).",
      formulas: [
        {
          name: "Quantité de matière d'un gaz",
          formula: "n = V / Vm  <=>  V = n · Vm",
          note: "Valable uniquement pour l'état gazeux (V en L, Vm en L/mol).",
        },
        {
          name: "Densité d'un gaz par rapport à l'air",
          formula: "d = M / 29  <=>  M = 29 · d",
          note: "Grandeur sans unité. 29 représente la masse molaire de l'air.",
        },
      ],
      keyRule:
        "Attention aux conversions de volume : 1 L = 1 dm³ = 1 000 cm³ = 1 000 mL. Donc pour convertir des cm³ ou mL en litres, divise par 1 000 (ex : 44,8 cm³ = 0,0448 L).",
      workedExample: {
        title: "Situation officielle MENA : Volume de dioxygène recueilli à l'électrolyse",
        statement: "Lors d'une électrolyse de l'eau, on recueille V = 44,8 cm³ de dioxygène O₂ dans les CNTP (Vm = 22,4 L/mol). Calculer la quantité de matière n(O₂) puis sa masse.",
        methodSteps: [
          "Étape 1 : Convertir le volume en litres : V = 44,8 cm³ = 44,8 × 10⁻³ L = 0,0448 L.",
          "Étape 2 : Calculer n(O₂) : n = V / Vm = 0,0448 / 22,4 = 0,002 mol = 2 × 10⁻³ mol.",
          "Étape 3 : Calculer la masse molaire de O₂ : M(O₂) = 2 × 16 = 32 g/mol.",
          "Étape 4 : Calculer la masse m : m = n × M = 0,002 × 32 = 0,064 g (ou 64 mg).",
        ],
        conclusion: "On a recueilli n = 2 × 10⁻³ mol de O₂, soit une masse m = 0,064 g.",
      },
      exercises: [
        {
          id: 'seconde_a_chimie_ch5_p3_ex1',
          type: 'mcq',
          prompt: "Que stipule la loi d'Avogadro-Ampère pour les gaz ?",
          options: [
            "Des volumes égaux de gaz différents, pris dans les mêmes conditions de température et pression, contiennent le même nombre de molécules",
            "Tous les gaz ont la même masse volumique quelle que soit la température",
            "Un gaz chaud a toujours le même volume qu'un gaz froid à pression variable",
            "Les molécules des différents gaz ont toutes la même taille",
          ],
          correctAnswerIndex: 0,
          explanation: "La loi d'Avogadro-Ampère établit que dans les mêmes conditions de T et P, un même volume de gaz renferme exactement le même nombre de molécules.",
        },
        {
          id: 'seconde_a_chimie_ch5_p3_ex2',
          type: 'mcq',
          prompt: "Quelle est la valeur du volume molaire normal Vm d'un gaz dans les CNTP (0 °C et 10⁵ Pa) ?",
          options: [
            "22,4 L/mol",
            "24 L/mol",
            "29 L/mol",
            "18 L/mol",
          ],
          correctAnswerIndex: 0,
          explanation: "Dans les conditions normales de température et de pression (CNTP), le volume molaire vaut Vm = 22,4 L/mol.",
        },
        {
          id: 'seconde_a_chimie_ch5_p3_ex3',
          type: 'mcq',
          prompt: "Un flacon contient 4,48 L de dioxyde de carbone dans les CNTP (Vm = 22,4 L/mol). Quelle est la quantité de matière correspondante ?",
          options: [
            "0,2 mol",
            "2 mol",
            "0,1 mol",
            "0,5 mol",
          ],
          correctAnswerIndex: 0,
          explanation: "n = V / Vm = 4,48 / 22,4 = 0,2 mol.",
        },
        {
          id: 'seconde_a_chimie_ch5_p3_ex4',
          type: 'mcq',
          prompt: "Quelle relation permet de calculer la densité d d'un gaz par rapport à l'air en fonction de sa masse molaire M ?",
          options: [
            "d = M / 29",
            "d = 29 / M",
            "d = M × 29",
            "d = M / 22,4",
          ],
          correctAnswerIndex: 0,
          explanation: "La formule de la densité d'un gaz par rapport à l'air est d = M / 29 (29 étant la masse molaire moyenne de l'air sec).",
        },
        {
          id: 'seconde_a_chimie_ch5_p3_ex5',
          type: 'mcq',
          prompt: "Le gaz butane a pour masse molaire M = 58 g/mol. Quelle est sa densité par rapport à l'air ?",
          options: [
            "d = 2 (le gaz est deux fois plus dense que l'air)",
            "d = 0,5",
            "d = 1,5",
            "d = 4",
          ],
          correctAnswerIndex: 0,
          explanation: "d = M / 29 = 58 / 29 = 2. Le butane est deux fois plus lourd que l'air et s'accumule donc au ras du sol en cas de fuite.",
        },
        {
          id: 'seconde_a_chimie_ch5_p3_ex6',
          type: 'mcq',
          prompt: "Dans les conditions habituelles de laboratoire où Vm = 24 L/mol, quel volume occupent 0,5 mol de dihydrogène H₂ ?",
          options: [
            "12 L",
            "24 L",
            "48 L",
            "6 L",
          ],
          correctAnswerIndex: 0,
          explanation: "V = n × Vm = 0,5 × 24 = 12 L.",
        },
        {
          id: 'seconde_a_chimie_ch5_p3_ex7',
          type: 'mcq',
          prompt: "La densité d'un gaz inconnu par rapport à l'air vaut d = 1,517. Quelle est sa masse molaire M ?",
          options: [
            "44 g/mol (il s'agit du dioxyde de carbone CO₂)",
            "32 g/mol",
            "28 g/mol",
            "16 g/mol",
          ],
          correctAnswerIndex: 0,
          explanation: "M = 29 × d = 29 × 1,517 ≈ 44 g/mol.",
        },
        {
          id: 'seconde_a_chimie_ch5_p3_ex8',
          type: 'mcq',
          prompt: "Le dihydrogène H₂ (M = 2 g/mol) et le méthane CH₄ (M = 16 g/mol) s'élèvent-ils au plafond ou tombent-ils au sol dans une pièce ?",
          options: [
            "Ils s'élèvent au plafond car leur densité d est inférieure à 1 (plus légers que l'air)",
            "Ils tombent au sol car tous les gaz sont attirés par la pesanteur",
            "Ils restent immobiles au milieu de la pièce",
            "Ils se liquéfient instantanément à température ambiante",
          ],
          correctAnswerIndex: 0,
          explanation: "Comme M < 29 g/mol, d(H₂) = 2/29 ≈ 0,07 et d(CH₄) = 16/29 ≈ 0,55 < 1. Ces gaz étant moins denses que l'air, ils montent au plafond.",
        },
      ],
    },
  ],
};

// ============================================================================
// LEÇON 6 : ÉQUATION-BILAN D’UNE RÉACTION CHIMIQUE
// ============================================================================
export const chimie2deAEquationBilanChapter: CurriculumChapter = {
  id: 'seconde_a_chimie_ch6_equation_bilan',
  subjectId: 'physique_chimie',
  gradeLevel: 'seconde_a',
  order: 6,
  officialVolumeHours: 10,
  title: "Leçon 6 — Équation-bilan d'une réaction chimique",
  summary:
    "Écriture et équilibrage des équations-bilans, coefficients stœchiométriques, relations de proportionnalité, réactif en excès et réactif limitant, loi de Lavoisier et bilans massique et volumique des gaz.",
  points: [
    // ------------------------------------------------------------------------
    // MINI-LEÇON 1/3 : Écriture, Équilibrage et Stœchiométrie
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_chimie_ch6_p1',
      order: 1,
      title: "Équation-bilan, coefficients stœchiométriques et proportions",
      summary:
        "Définition des réactifs et des produits, équilibrage par conservation des atomes, conditions stœchiométriques et identification du réactif limitant.",
      conceptExplanation:
`Une transformation chimique est un phénomène au cours duquel des espèces chimiques (les réactifs) réagissent entre elles pour former de nouvelles espèces chimiques (les produits).

1. Expérience fondamentale : Action du carbone sur l'oxyde de cuivre II :
Lorsqu'on chauffe un mélange de poudre noire d'oxyde de cuivre II (CuO) et de carbone (C) dans un tube à essais coiffé d'un tube à dégagement :
- On observe l'apparition d'un dépôt rouge de cuivre métallique (Cu).
- Le gaz dégagé trouble l'eau de chaux, ce qui prouve la formation de dioxyde de carbone (CO₂).
- Réactifs : Carbone C et Oxyde de cuivre II CuO.
- Produits : Cuivre Cu et Dioxyde de carbone CO₂.
- Équation-bilan ajustée : C + 2 CuO -> 2 Cu + CO₂.

2. Signification des symboles et des coefficients stœchiométriques :
- Le signe '+' signifie 'réagit avec' du côté des réactifs, et 'et' du côté des produits.
- La flèche '->' signifie 'pour donner'.
- Les nombres entiers placés devant chaque formule sont appelés coefficients stœchiométriques. Ils garantissent que le nombre d'atomes de chaque élément est rigoureusement identique avant et après la réaction (conservation des atomes).

3. Relations de proportionnalité stœchiométrique :
Pour une réaction générale d'équation : a A + b B -> c C + d D
Le bilan molaire s'écrit :
  n_A / a = n_B / b = n_C / c = n_D / d

4. Réactif en excès et réactif limitant (en défaut) :
- Si n_A / a = n_B / b : le mélange est dans les proportions stœchiométriques. En fin de réaction, tous les réactifs sont totalement consommés.
- Si n_A / a < n_B / b :
  * Le réactif A est en défaut : c'est le réactif limitant. C'est lui qui s'épuise en premier et qui arrête la réaction.
  * Le réactif B est en excès : une partie de B n'a pas réagi et reste présente à la fin.`,
      formulas: [
        {
          name: "Relation stœchiométrique fondamentale",
          formula: "n_A / a = n_B / b = n_C / c = n_D / d",
          note: "a, b, c, d sont les coefficients stœchiométriques de l'équation.",
        },
        {
          name: "Condition du réactif limitant",
          formula: "Si n_A / a < n_B / b alors A est le réactif limitant",
          note: "Le réactif limitant détermine la quantité maximale de produits formés.",
        },
      ],
      keyRule:
        "Règle d'or : Ne modifie JAMAIS les indices chimiques d'une formule pour équilibrer une réaction ! Par exemple, pour équilibrer l'oxygène dans H₂ + O₂ -> H₂O, on écrit 2 H₂ + O₂ -> 2 H₂O et surtout pas H₂ + O₂ -> H₂O₂ (qui est l'eau oxygénée) !",
      workedExample: {
        title: "Calcul stœchiométrique : Réaction entre HCl et le dioxygène",
        statement: "On fait réagir 5 mol de chlorure d'hydrogène selon : 4 HCl + O₂ -> 2 H₂O + 2 Cl₂. Calculer la quantité de dichlore Cl₂ obtenue et la quantité de dioxygène O₂ nécessaire.",
        methodSteps: [
          "Étape 1 : Poser les rapports stœchiométriques : n(HCl)/4 = n(O₂)/1 = n(H₂O)/2 = n(Cl₂)/2.",
          "Étape 2 : Calculer n(Cl₂) : n(Cl₂)/2 = n(HCl)/4  =>  n(Cl₂) = 2 × (5 / 4) = 2,5 mol.",
          "Étape 3 : Calculer n(O₂) nécessaire : n(O₂)/1 = n(HCl)/4  =>  n(O₂) = 5 / 4 = 1,25 mol.",
        ],
        conclusion: "On obtient n(Cl₂) = 2,5 mol de dichlore et il faut n(O₂) = 1,25 mol de dioxygène.",
      },
      exercises: [
        {
          id: 'seconde_a_chimie_ch6_p1_ex1',
          type: 'mcq',
          prompt: "Quel est le rôle des coefficients stœchiométriques placés devant les formules dans une équation-bilan ?",
          options: [
            "Assurer la conservation du nombre d'atomes de chaque élément chimique entre réactifs et produits",
            "Indiquer la température à laquelle la réaction s'effectue",
            "Augmenter la vitesse de la réaction chimique",
            "Modifier la nature des molécules produites",
          ],
          correctAnswerIndex: 0,
          explanation: "Les coefficients stœchiométriques garantissent qu'aucun atome n'est créé ni détruit au cours de la réaction chimique.",
        },
        {
          id: 'seconde_a_chimie_ch6_p1_ex2',
          type: 'mcq',
          prompt: "Quels sont les coefficients stœchiométriques qui équilibrent la réaction : ... Al + ... S -> ... Al₂S₃ ?",
          options: [
            "2 Al + 3 S -> 1 Al₂S₃",
            "1 Al + 1 S -> 1 Al₂S₃",
            "4 Al + 6 S -> 2 Al₂S₃",
            "3 Al + 2 S -> 1 Al₂S₃",
          ],
          correctAnswerIndex: 0,
          explanation: "Il y a 2 atomes d'aluminium et 3 atomes de soufre dans Al₂S₃, donc : 2 Al + 3 S -> Al₂S₃.",
        },
        {
          id: 'seconde_a_chimie_ch6_p1_ex3',
          type: 'mcq',
          prompt: "Quels coefficients équilibrent la combustion complète de l'éthanol : C₂H₆O + ... O₂ -> ... CO₂ + ... H₂O ?",
          options: [
            "C₂H₆O + 3 O₂ -> 2 CO₂ + 3 H₂O",
            "C₂H₆O + 2 O₂ -> 2 CO₂ + 3 H₂O",
            "2 C₂H₆O + 5 O₂ -> 4 CO₂ + 6 H₂O",
            "C₂H₆O + 4 O₂ -> 2 CO₂ + 4 H₂O",
          ],
          correctAnswerIndex: 0,
          explanation: "2 C à gauche -> 2 CO₂ ; 6 H à gauche -> 3 H₂O. Total oxygène à droite : 2×2 + 3 = 7. Comme l'éthanol apporte 1 O, il reste 6 O à fournir par O₂, soit 3 O₂.",
        },
        {
          id: 'seconde_a_chimie_ch6_p1_ex4',
          type: 'mcq',
          prompt: "Pour la réaction 2 Al + 3 Cl₂ -> 2 AlCl₃, quelle est la relation stœchiométrique correcte ?",
          options: [
            "n(Al) / 2 = n(Cl₂) / 3 = n(AlCl₃) / 2",
            "n(Al) × 2 = n(Cl₂) × 3 = n(AlCl₃) × 2",
            "n(Al) / 3 = n(Cl₂) / 2 = n(AlCl₃)",
            "n(Al) = n(Cl₂) = n(AlCl₃)",
          ],
          correctAnswerIndex: 0,
          explanation: "Chaque quantité de matière divisée par son coefficient stœchiométrique donne la relation de proportionnalité.",
        },
        {
          id: 'seconde_a_chimie_ch6_p1_ex5',
          type: 'mcq',
          prompt: "On mélange 3 mol de N₂ et 6 mol de H₂ selon l'équation : N₂ + 3 H₂ -> 2 NH₃. Quel est le réactif limitant ?",
          options: [
            "Le dihydrogène H₂ (car 6/3 = 2 < 3/1)",
            "Le diazote N₂",
            "Le mélange est parfaitement stœchiométrique",
            "L'ammoniac NH₃",
          ],
          correctAnswerIndex: 0,
          explanation: "n(N₂)/1 = 3/1 = 3  et  n(H₂)/3 = 6/3 = 2. Comme 2 < 3, le dihydrogène H₂ est en défaut : c'est le réactif limitant.",
        },
        {
          id: 'seconde_a_chimie_ch6_p1_ex6',
          type: 'mcq',
          prompt: "Dans la réaction C + 2 CuO -> 2 Cu + CO₂, si l'on fait réagir 0,5 mol de carbone C avec un excès de CuO, combien de moles de cuivre Cu obtient-on ?",
          options: [
            "1,0 mol (car n(Cu) = 2 × n(C))",
            "0,5 mol",
            "0,25 mol",
            "2,0 mol",
          ],
          correctAnswerIndex: 0,
          explanation: "D'après les coefficients : n(C)/1 = n(Cu)/2  =>  n(Cu) = 2 × n(C) = 2 × 0,5 = 1,0 mol.",
        },
        {
          id: 'seconde_a_chimie_ch6_p1_ex7',
          type: 'mcq',
          prompt: "Que signifie concrètement l'expression 'réactif en excès' ?",
          options: [
            "C'est le réactif qui n'est pas totalement consommé à la fin de la réaction chimique",
            "C'est le réactif qui s'épuise en premier",
            "C'est le produit le plus lourd de la réaction",
            "C'est un réactif qui n'a pas de formule chimique",
          ],
          correctAnswerIndex: 0,
          explanation: "Le réactif en excès est introduit en quantité supérieure à celle requise par la stœchiométrie ; il en reste après l'arrêt de la réaction.",
        },
        {
          id: 'seconde_a_chimie_ch6_p1_ex8',
          type: 'mcq',
          prompt: "Quelle équation correspond à l'oxydation du fer par le dioxygène pour former l'oxyde magnétique Fe₃O₄ ?",
          options: [
            "3 Fe + 2 O₂ -> Fe₃O₄",
            "Fe + O₂ -> FeO₂",
            "2 Fe + 3 O₂ -> Fe₂O₃",
            "4 Fe + O₂ -> 2 Fe₂O",
          ],
          correctAnswerIndex: 0,
          explanation: "3 atomes de Fe et 4 atomes de O (fournis par 2 O₂) donnent rigoureusement 3 Fe + 2 O₂ -> Fe₃O₄.",
        },
      ],
    },

    // ------------------------------------------------------------------------
    // MINI-LEÇON 2/3 : Loi de Lavoisier et Bilans Massique et Volumique
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_chimie_ch6_p2',
      order: 2,
      title: "Loi de Lavoisier, bilan massique et bilan volumique des gaz",
      summary:
        "Conservation de la masse totale lors d'une réaction chimique, calculs massiques (m = n × M) et volumiques (V = n × Vm, loi d'Avogadro-Ampère).",
      conceptExplanation:
`Au XVIIIe siècle, Antoine Laurent de Lavoisier a révolutionné la chimie en introduisant la balance de précision dans l'étude des réactions chimiques.

1. Énoncé de la loi de Lavoisier (Conservation de la masse) :
Dans un système fermé, au cours d'une réaction chimique, la masse totale des produits formés est rigoureusement égale à la masse totale des réactifs disparus :
  Somme des masses des réactifs consommés = Somme des masses des produits formés.
Maxime célèbre : 'Rien ne se crée, rien ne se perd, tout se transforme.'

2. Le bilan massique :
Pour vérifier la loi de Lavoisier par le calcul :
1. On détermine la quantité de matière n de chaque espèce d'après l'équation-bilan.
2. On calcule la masse m correspondante grâce à la formule m = n × M.
Exemple : Réaction du fer avec le dioxygène : 3 Fe + 2 O₂ -> Fe₃O₄.
- Réactifs : m(Fe) = 3 × 55,8 = 167,4 g   et   m(O₂) = 2 × 32 = 64 g. Total réactifs = 167,4 + 64 = 231,4 g.
- Produit : m(Fe₃O₄) = 1 × (3 × 55,8 + 4 × 16) = 231,4 g.
- Conclusion : 231,4 g de réactifs donnent exactement 231,4 g de produit.

3. Le bilan volumique des gaz (Loi d'Avogadro-Ampère) :
D'après la loi d'Avogadro-Ampère, dans les mêmes conditions de température et de pression, tous les gaz ont le même volume molaire Vm. Par conséquent, pour les espèces gazeuses, les volumes réagissant et produits sont directement proportionnels à leurs coefficients stœchiométriques !
Pour une réaction entre gaz : a A (gaz) + b B (gaz) -> c C (gaz) + d D (gaz)
On a directement la relation volumique :
  V_A / a = V_B / b = V_C / c = V_D / d
Exemple : Combustion complète du propane gazeux : C₃H₈ (gaz) + 5 O₂ (gaz) -> 3 CO₂ (gaz) + 4 H₂O (vapeur)
- 1 litre de C₃H₈ nécessite 5 litres de O₂ et produit 3 litres de CO₂ et 4 litres de H₂O gazeuse !`,
      formulas: [
        {
          name: "Loi de conservation de la masse (Lavoisier)",
          formula: "Somme m(réactifs consommés) = Somme m(produits formés)",
          note: "Vérifiée dans tout système fermé.",
        },
        {
          name: "Relation volumique pour les gaz (Avogadro-Ampère)",
          formula: "V_A / a = V_B / b = V_C / c",
          note: "Valable uniquement pour les réactifs et produits à l'état gazeux dans les mêmes T et P.",
        },
      ],
      keyRule:
        "Attention piège fréquent : La relation entre les volumes (V_A/a = V_B/b) ne s'applique STRICTEMENT qu'aux espèces gazeuses ! Elle ne s'applique jamais à un solide (comme Fe, C) ni à un liquide (comme l'eau liquide à 20°C).",
      workedExample: {
        title: "Calcul du volume de dioxygène pour brûler 10 L de butane",
        statement: "On brûle V(C₄H₁₀) = 10 L de gaz butane selon : C₄H₁₀ + (13/2) O₂ -> 4 CO₂ + 5 H₂O. Calculer le volume de dioxygène pur nécessaire et le volume d'air correspondant (l'air contient 20% de O₂).",
        methodSteps: [
          "Étape 1 : Relation volumique : V(C₄H₁₀)/1 = V(O₂)/(13/2).",
          "Étape 2 : Calculer V(O₂) : V(O₂) = (13/2) × V(C₄H₁₀) = 6,5 × 10 L = 65 L de dioxygène pur.",
          "Étape 3 : Comme l'air renferme 1 volume de O₂ pour 5 volumes d'air (20% = 1/5) : V_air = 5 × V(O₂).",
          "Étape 4 : V_air = 5 × 65 L = 325 L d'air.",
        ],
        conclusion: "Il faut 65 L de O₂ pur, soit 325 L d'air atmosphérique.",
      },
      exercises: [
        {
          id: 'seconde_a_chimie_ch6_p2_ex1',
          type: 'mcq',
          prompt: "Quel est l'énoncé exact de la loi de Lavoisier lors d'une réaction chimique ?",
          options: [
            "La masse totale des produits formés est égale à la masse totale des réactifs consommés",
            "Le volume des gaz augmente toujours au cours de la réaction",
            "La température finale est toujours égale à la température initiale",
            "Le nombre total de molécules se conserve obligatoirement",
          ],
          correctAnswerIndex: 0,
          explanation: "La loi de Lavoisier énonce la conservation rigoureuse de la masse : la matière ne disparaît pas, elle se réorganise.",
        },
        {
          id: 'seconde_a_chimie_ch6_p2_ex2',
          type: 'mcq',
          prompt: "On fait réagir 12 g de carbone C avec 32 g de dioxygène O₂ pour former du dioxyde de carbone CO₂. Quelle masse de CO₂ obtient-on ?",
          options: [
            "44 g (car 12 g + 32 g = 44 g)",
            "20 g",
            "32 g",
            "48 g",
          ],
          correctAnswerIndex: 0,
          explanation: "D'après la loi de Lavoisier : m(CO₂) = m(C) + m(O₂) = 12 + 32 = 44 g.",
        },
        {
          id: 'seconde_a_chimie_ch6_p2_ex3',
          type: 'mcq',
          prompt: "D'après la loi d'Avogadro-Ampère, à quoi sont proportionnels les volumes des gaz réagissant à même température et pression ?",
          options: [
            "À leurs coefficients stœchiométriques respectifs dans l'équation-bilan",
            "À leurs masses molaires atomiques",
            "À la couleur de chaque gaz",
            "À leur température d'ébullition",
          ],
          correctAnswerIndex: 0,
          explanation: "Puisque V = n × Vm et que Vm est identique pour tous les gaz, les volumes sont strictement proportionnels aux nombres de moles n, donc aux coefficients.",
        },
        {
          id: 'seconde_a_chimie_ch6_p2_ex4',
          type: 'mcq',
          prompt: "Dans la synthèse de l'ammoniac : N₂ (gaz) + 3 H₂ (gaz) -> 2 NH₃ (gaz), quel volume de dihydrogène H₂ réagit avec 15 L de diazote N₂ ?",
          options: [
            "45 L (car V(H₂) = 3 × V(N₂))",
            "15 L",
            "30 L",
            "5 L",
          ],
          correctAnswerIndex: 0,
          explanation: "V(N₂)/1 = V(H₂)/3  =>  V(H₂) = 3 × 15 = 45 L.",
        },
        {
          id: 'seconde_a_chimie_ch6_p2_ex5',
          type: 'mcq',
          prompt: "Quel volume d'ammoniac NH₃ gazeux produit cette réaction à partir de ces 15 L de diazote ?",
          options: [
            "30 L (car V(NH₃) = 2 × V(N₂))",
            "45 L",
            "15 L",
            "60 L",
          ],
          correctAnswerIndex: 0,
          explanation: "V(N₂)/1 = V(NH₃)/2  =>  V(NH₃) = 2 × 15 = 30 L.",
        },
        {
          id: 'seconde_a_chimie_ch6_p2_ex6',
          type: 'mcq',
          prompt: "Dans une réaction chimique, le nombre total de molécules est-il obligatoirement conservé ?",
          options: [
            "Non, le nombre total de molécules peut varier, seuls les atomes et la masse globale se conservent",
            "Oui, le nombre de molécules doit toujours être le même à gauche et à droite",
            "Oui, la loi de Lavoisier impose la conservation des molécules",
            "Non, le nombre de molécules double toujours",
          ],
          correctAnswerIndex: 0,
          explanation: "Dans N₂ + 3 H₂ -> 2 NH₃, on passe de 4 molécules réactives à 2 molécules produites. La masse et les atomes sont conservés, mais pas le nombre de molécules.",
        },
        {
          id: 'seconde_a_chimie_ch6_p2_ex7',
          type: 'mcq',
          prompt: "La combustion complète de 20 cm³ de méthane selon CH₄ + 2 O₂ -> CO₂ + 2 H₂O nécessite quel volume de dioxygène O₂ gazeux ?",
          options: [
            "40 cm³ (car V(O₂) = 2 × V(CH₄))",
            "20 cm³",
            "10 cm³",
            "80 cm³",
          ],
          correctAnswerIndex: 0,
          explanation: "V(CH₄)/1 = V(O₂)/2  =>  V(O₂) = 2 × 20 cm³ = 40 cm³.",
        },
        {
          id: 'seconde_a_chimie_ch6_p2_ex8',
          type: 'mcq',
          prompt: "Quelle proportion de dioxygène O₂ contient approximativement l'air sec ordinaire ?",
          options: [
            "Environ 20% (1 volume de O₂ pour 5 volumes d'air)",
            "Environ 50%",
            "Environ 80%",
            "Environ 5%",
          ],
          correctAnswerIndex: 0,
          explanation: "L'air est composé d'environ 20% (un cinquième) de dioxygène O₂ et 80% (quatre cinquièmes) de diazote N₂.",
        },
      ],
    },

    // ------------------------------------------------------------------------
    // MINI-LEÇON 3/3 : Situations d'Évaluation Officielles (Aluminothermie et Fermentation)
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_chimie_ch6_p3',
      order: 3,
      title: "Applications industrielles : Aluminothermie, mélanges et rendement",
      summary:
        "Résolution complète de situations d'évaluation : réaction d'aluminothermie (Fe₂O₃ + 2 Al -> 2 Fe + Al₂O₃), bilan de matière complet, masse restante et rendement chimique.",
      conceptExplanation:
`Dans l'industrie chimique, maîtriser les bilans stœchiométriques permet d'éviter les pertes de réactifs coûteux et de calculer avec précision le rendement d'une synthèse.

1. La réaction d'aluminothermie (Situation d'évaluation officielle MENA) :
L'aluminothermie est un procédé spectaculaire utilisé pour souder les rails de chemin de fer. On mélange de la rouille (oxyde de fer III Fe₂O₃) et de la poudre d'aluminium (Al) :
  Fe₂O₃ + 2 Al -> 2 Fe + Al₂O₃
Cette réaction dégage une chaleur si intense que le fer produit est obtenu à l'état liquide incandescent (environ 2 000 °C) !

2. Démarche méthodique pour résoudre un problème stœchiométrique :
Étape 1 : Calculer les quantités de matière initiales des réactifs : n = m / M.
Étape 2 : Comparer les rapports stœchiométriques n(Fe₂O₃)/1 et n(Al)/2 pour trouver le réactif limitant.
Étape 3 : Calculer la quantité de réactif en excès consommée, puis la quantité restante : n'(restant) = n(initial) − n(consommé).
Étape 4 : Déterminer la quantité et la masse des produits formés d'après les coefficients du réactif limitant.

3. Rendement d'une réaction chimique (R) :
Dans la réalité industrielle (ex : fermentation du glucose en éthanol : C₆H₁₂O₆ -> 2 C₂H₆O + 2 CO₂), la réaction n'est pas toujours totale ou subit des pertes.
Le rendement R est le rapport entre la masse réelle obtenue (m_réelle) et la masse théorique maximale attendue (m_théorique) :
  R = m_réelle / m_théorique   <=>   m_réelle = R × m_théorique
Le rendement s'exprime sous forme décimale (ex : 0,75) ou en pourcentage (ex : 75%).`,
      formulas: [
        {
          name: "Rendement d'une réaction chimique",
          formula: "R = m_réelle / m_théorique = n_réelle / n_théorique",
          note: "R <= 1 (ou <= 100%).",
        },
        {
          name: "Masse de produit avec rendement",
          formula: "m_obtenue = R · n_théorique · M",
          note: "Prend en compte les pertes expérimentales.",
        },
      ],
      keyRule:
        "Règle de calcul : Les produits formés dépendent EXCLUSIVEMENT du réactif limitant. Le réactif en excès ne peut plus réagir dès que le réactif limitant est totalement épuisé !",
      workedExample: {
        title: "Situation officielle : Mélange de 16 g de Fe₂O₃ et 38 g de Al",
        statement: "On donne M(Fe₂O₃) = 160 g/mol, M(Al) = 27 g/mol et M(Fe) = 56 g/mol. Réaction : Fe₂O₃ + 2 Al -> 2 Fe + Al₂O₃. Identifier le réactif limitant et calculer la masse de fer produite.",
        methodSteps: [
          "Étape 1 : Quantités initiales : n(Fe₂O₃) = 16 / 160 = 0,10 mol. n(Al) = 38 / 27 ≈ 1,40 mol.",
          "Étape 2 : Rapports stœchiométriques : n(Fe₂O₃)/1 = 0,10 mol  et  n(Al)/2 = 1,40 / 2 = 0,70 mol.",
          "Étape 3 : Comme 0,10 < 0,70, Fe₂O₃ est le réactif limitant et Al est en très large excès.",
          "Étape 4 : Fer produit : n(Fe) = 2 × n(Fe₂O₃) = 2 × 0,10 = 0,20 mol. Masse de fer : m(Fe) = 0,20 × 56 = 11,2 g.",
        ],
        conclusion: "Fe₂O₃ est limitant. On obtient 11,2 g de fer pur et il reste 1,2 mol d'aluminium non réagi (soit 32,4 g).",
      },
      exercises: [
        {
          id: 'seconde_a_chimie_ch6_p3_ex1',
          type: 'mcq',
          prompt: "Dans la réaction d'aluminothermie : Fe₂O₃ + 2 Al -> 2 Fe + Al₂O₃, quel est le rôle de l'aluminium Al ?",
          options: [
            "Il réduit l'oxyde de fer III en fer métallique",
            "Il sert uniquement de catalyseur sans réagir",
            "Il oxyde le fer pour former de la rouille",
            "Il absorbe toute la chaleur de la réaction",
          ],
          correctAnswerIndex: 0,
          explanation: "L'aluminium s'empare de l'oxygène de Fe₂O₃ pour former Al₂O₃, réduisant ainsi les ions fer en fer métallique liquide.",
        },
        {
          id: 'seconde_a_chimie_ch6_p3_ex2',
          type: 'mcq',
          prompt: "Si 0,10 mol de Fe₂O₃ réagit complètement avec un excès d'aluminium, quelle quantité d'alumine Al₂O₃ se forme-t-il ?",
          options: [
            "0,10 mol (car le rapport des coefficients est 1:1)",
            "0,20 mol",
            "0,05 mol",
            "0,30 mol",
          ],
          correctAnswerIndex: 0,
          explanation: "n(Fe₂O₃)/1 = n(Al₂O₃)/1  =>  n(Al₂O₃) = 0,10 mol.",
        },
        {
          id: 'seconde_a_chimie_ch6_p3_ex3',
          type: 'mcq',
          prompt: "Sachant que M(Al₂O₃) = 102 g/mol, quelle est la masse d'alumine produite par 0,10 mol de Al₂O₃ ?",
          options: [
            "10,2 g",
            "102 g",
            "20,4 g",
            "5,1 g",
          ],
          correctAnswerIndex: 0,
          explanation: "m = n × M = 0,10 × 102 = 10,2 g.",
        },
        {
          id: 'seconde_a_chimie_ch6_p3_ex4',
          type: 'mcq',
          prompt: "Lors d'une fermentation, la masse théorique attendue d'éthanol est de 50 g. Le rendement est de 75% (0,75). Quelle masse réelle d'éthanol est obtenue ?",
          options: [
            "37,5 g (car 50 × 0,75 = 37,5 g)",
            "50 g",
            "25 g",
            "66,7 g",
          ],
          correctAnswerIndex: 0,
          explanation: "m_réelle = m_théorique × Rendement = 50 × 0,75 = 37,5 g.",
        },
        {
          id: 'seconde_a_chimie_ch6_p3_ex5',
          type: 'mcq',
          prompt: "Dans un mélange de 1,4 mol d'aluminium et 0,1 mol de Fe₂O₃, quelle quantité d'aluminium réagit effectivement ?",
          options: [
            "0,2 mol d'aluminium (car n(Al) = 2 × n(Fe₂O₃))",
            "1,4 mol",
            "0,1 mol",
            "0,7 mol",
          ],
          correctAnswerIndex: 0,
          explanation: "La réaction consomme 2 mol de Al pour 1 mol de Fe₂O₃, soit 2 × 0,1 = 0,2 mol de Al. Il en restera 1,4 − 0,2 = 1,2 mol en fin de réaction.",
        },
        {
          id: 'seconde_a_chimie_ch6_p3_ex6',
          type: 'mcq',
          prompt: "La fermentation de 1 mole de glucose produit selon C₆H₁₂O₆ -> 2 C₂H₆O + 2 CO₂ combien de moles d'éthanol C₂H₆O ?",
          options: [
            "2 moles d'éthanol",
            "1 mole d'éthanol",
            "4 moles d'éthanol",
            "0,5 mole d'éthanol",
          ],
          correctAnswerIndex: 0,
          explanation: "D'après l'équation stœchiométrique, 1 mole de glucose donne 2 moles d'éthanol et 2 moles de CO₂.",
        },
        {
          id: 'seconde_a_chimie_ch6_p3_ex7',
          type: 'mcq',
          prompt: "Dans les CNTP (Vm = 22,4 L/mol), quel volume théorique de CO₂ gazeux dégage la fermentation complète de 0,55 mol de glucose (produisant 1,10 mol de CO₂) ?",
          options: [
            "24,64 L (soit 1,10 × 22,4 L)",
            "12,32 L",
            "22,4 L",
            "44,8 L",
          ],
          correctAnswerIndex: 0,
          explanation: "V = n × Vm = (2 × 0,55) × 22,4 = 1,10 × 22,4 = 24,64 L.",
        },
        {
          id: 'seconde_a_chimie_ch6_p3_ex8',
          type: 'mcq',
          prompt: "Pourquoi l'aluminothermie est-elle particulièrement adaptée au soudage des rails de chemin de fer sur place ?",
          options: [
            "Parce qu'elle produit du fer liquide à très haute température sans nécessiter de source d'électricité externe",
            "Parce qu'elle ne dégage aucune chaleur",
            "Parce qu'elle utilise de l'eau pour refroidir instantanément le métal",
            "Parce que les rails sont en plastique",
          ],
          correctAnswerIndex: 0,
          explanation: "La réaction produit du fer en fusion à environ 2 000 °C de manière autonome, idéal pour couler la soudure entre les rails isolés.",
        },
      ],
    },
  ],
};

// ============================================================================
// LEÇON 7 : SOLUTIONS AQUEUSES IONIQUES
// ============================================================================
export const chimie2deASolutionsAqueusesIoniquesChapter: CurriculumChapter = {
  id: 'seconde_a_chimie_ch7_solutions_aqueuses_ioniques',
  subjectId: 'physique_chimie',
  gradeLevel: 'seconde_a',
  order: 7,
  officialVolumeHours: 12,
  title: 'Leçon 7 — Solutions aqueuses ioniques',
  summary:
    "Mécanisme et effet thermique de la dissolution (dislocation et hydratation), concentrations molaire et massique, électroneutralité, saturation, solubilité et électrolyse d'une solution de chlorure de sodium.",
  points: [
    // ------------------------------------------------------------------------
    // MINI-LEÇON 1/3 : Dissolution et Effet Thermique
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_chimie_ch7_p1',
      order: 1,
      title: "Dissolution d'un composé ionique dans l'eau et effet thermique",
      summary:
        "Définition d'une solution aqueuse, deux étapes de la dissolution (dislocation et solvatation/hydratation), réactions athermiques, endothermiques et exothermiques.",
      conceptExplanation:
`Une solution est un mélange homogène obtenu en dissolvant une espèce chimique (le soluté) dans un liquide majoritaire (le solvant). Lorsque le solvant utilisé est l'eau, la solution est appelée solution aqueuse.

1. Dissolution d'un cristal ionique dans l'eau :
Un cristal ionique (ex : sel NaCl, soude NaOH) est constitué d'un empilement compact de cations et d'anions retenus par de fortes forces électrostatiques. Lorsqu'on le plonge dans l'eau, la dissolution se produit en deux étapes successives :
- Étape 1 : La dislocation du réseau cristallin :
  Les molécules d'eau, dipolaires, s'insèrent entre les ions et affaiblissent leurs liaisons. Les ions se séparent et se dispersent. Ce processus nécessite de casser des liaisons : il absorbe de l'énergie (chaleur) du milieu. On note Ed l'énergie de dislocation (Ed > 0).
- Étape 2 : L'hydratation (ou solvatation) des ions :
  Chaque ion libéré s'entoure d'une couronne protectrice de molécules d'eau orientées. Cette mise en place de liaisons eau-ion libère de l'énergie thermique vers le milieu : elle s'accompagne d'un dégagement de chaleur Eh (énergie d'hydratation).

2. Effet thermique global de la dissolution :
Le bilan thermique résulte de la compétition entre Ed (absorption) et Eh (dégagement) :
- Dissolution endothermique (Ed > Eh) : L'absorption d'énergie l'emporte. La température de la solution diminue (baisse de température). Exemple : Dissolution du chlorure d'ammonium NH₄Cl (la température chute de 2,5 °C) ou du nitrate d'ammonium.
- Dissolution athermique (Ed = Eh) : Les deux énergies se compensent exactement. La température reste constante. Exemple : Dissolution du chlorure de sodium NaCl ou du sulfate de cuivre CuSO₄.
- Dissolution exothermique (Ed < Eh) : Le dégagement de chaleur l'emporte. La température de la solution s'élève fortement (hausse de température). Exemple : Dissolution de pastilles de soude NaOH (la température augmente de plus de 8 °C !).`,
      formulas: [
        {
          name: "Bilan thermique de la dissolution",
          formula: "Ed > Eh : Endothermique | Ed = Eh : Athermique | Ed < Eh : Exothermique",
          note: "Ed = énergie de dislocation (absorbée), Eh = énergie d'hydratation (dégagée).",
        },
      ],
      keyRule:
        "Règle de sécurité en TP : La dissolution de l'hydroxyde de sodium (soude NaOH) ou de l'acide sulfurique est fortement EXOTHERMIQUE. Elle dégage tellement de chaleur que le bécher devient brûlant. Il faut toujours verser lentement le solide dans l'eau et jamais l'inverse !",
      workedExample: {
        title: "Interprétation d'une mesure de température en laboratoire",
        statement: "On dissout 0,05 mol de chlorure d'ammonium NH₄Cl dans 100 mL d'eau. La température passe de 25 °C à 22,5 °C. Qualifier l'effet thermique et comparer Ed et Eh.",
        methodSteps: [
          "Étape 1 : Observer la variation de température : Delta T = 22,5 − 25 = −2,5 °C (diminution de la température).",
          "Étape 2 : Lorsque la température du milieu diminue, la dissolution absorbe de la chaleur : elle est endothermique.",
          "Étape 3 : L'énergie de dislocation nécessaire pour casser le réseau est supérieure à l'énergie d'hydratation dégagée : Ed > Eh.",
        ],
        conclusion: "La dissolution de NH₄Cl est endothermique avec Ed > Eh.",
      },
      exercises: [
        {
          id: 'seconde_a_chimie_ch7_p1_ex1',
          type: 'mcq',
          prompt: "Comment appelle-t-on une solution dont le solvant principal est l'eau ?",
          options: [
            "Une solution aqueuse",
            "Une solution alcoolique",
            "Une solution huileuse",
            "Une solution gazeuse",
          ],
          correctAnswerIndex: 0,
          explanation: "Par définition, toute solution préparée avec l'eau comme solvant est qualifiée d'aqueuse (du latin aqua).",
        },
        {
          id: 'seconde_a_chimie_ch7_p1_ex2',
          type: 'mcq',
          prompt: "Quelles sont les deux étapes successives de la dissolution d'un cristal ionique dans l'eau ?",
          options: [
            "La dislocation du cristal (séparation des ions) suivie de l'hydratation des ions",
            "L'évaporation de l'eau suivie de la solidification",
            "La fusion des noyaux suivie du refroidissement",
            "La décomposition en atomes gazeux",
          ],
          correctAnswerIndex: 0,
          explanation: "L'eau commence par disloquer le réseau d'ions (rupture des liaisons), puis les entoure d'une enveloppe de molécules d'eau (hydratation).",
        },
        {
          id: 'seconde_a_chimie_ch7_p1_ex3',
          type: 'mcq',
          prompt: "Lorsque la dissolution d'un soluté s'accompagne d'une élévation de la température du récipient, la réaction est dite :",
          options: [
            "Exothermique (Ed < Eh)",
            "Endothermique (Ed > Eh)",
            "Athermique (Ed = Eh)",
            "Isotherme parfaite",
          ],
          correctAnswerIndex: 0,
          explanation: "Une dissolution exothermique libère de l'énergie thermique vers le milieu extérieur, ce qui fait monter la température.",
        },
        {
          id: 'seconde_a_chimie_ch7_p1_ex4',
          type: 'mcq',
          prompt: "Lors de la dissolution du sel de cuisine NaCl dans l'eau, la température ne varie pas (Delta T = 0 °C). Comment qualifie-t-on cette dissolution ?",
          options: [
            "Athermique (Ed = Eh)",
            "Endothermique",
            "Exothermique",
            "Nucléaire",
          ],
          correctAnswerIndex: 0,
          explanation: "Une dissolution est dite athermique quand l'énergie absorbée pour disloquer le cristal équilibre exactement l'énergie dégagée par l'hydratation.",
        },
        {
          id: 'seconde_a_chimie_ch7_p1_ex5',
          type: 'mcq',
          prompt: "Pourquoi les solutions aqueuses ioniques conduisent-elles le courant électrique ?",
          options: [
            "Parce qu'elles contiennent des ions libres et mobiles capables de se déplacer sous l'effet d'une tension",
            "Parce que l'eau pure conduit naturellement très bien l'électricité",
            "Parce que des électrons métalliques circulent librement dans l'eau",
            "Parce que le soluté fond en un métal liquide",
          ],
          correctAnswerIndex: 0,
          explanation: "Dans les solutions ioniques, ce sont les cations et les anions hydratés en mouvement qui assurent le passage du courant électrique.",
        },
        {
          id: 'seconde_a_chimie_ch7_p1_ex6',
          type: 'mcq',
          prompt: "Que se passe-t-il lors de l'hydratation (ou solvatation) d'un ion par l'eau ?",
          options: [
            "L'ion s'entoure d'une couronne de molécules d'eau avec dégagement de chaleur",
            "L'ion perd tous ses protons dans l'eau",
            "L'ion se transforme en atome neutre",
            "L'ion absorbe toute l'eau du bécher",
          ],
          correctAnswerIndex: 0,
          explanation: "L'hydratation consiste en l'attraction et l'orientation des dipôles d'eau autour de l'ion chargé, ce qui dégage de la chaleur.",
        },
        {
          id: 'seconde_a_chimie_ch7_p1_ex7',
          type: 'mcq',
          prompt: "Parmi les solides suivants, lequel provoque une baisse de température (dissolution endothermique) lors de son ajout dans l'eau ?",
          options: [
            "Le chlorure d'ammonium (NH₄Cl)",
            "L'hydroxyde de sodium (NaOH)",
            "Le chlorure de sodium (NaCl)",
            "L'acide chlorhydrique concentré",
          ],
          correctAnswerIndex: 0,
          explanation: "La dissolution de NH₄Cl absorbe de l'énergie thermique (Ed > Eh) et provoque un refroidissement mesurable de la solution.",
        },
        {
          id: 'seconde_a_chimie_ch7_p1_ex8',
          type: 'mcq',
          prompt: "L'énergie de dislocation du cristal Ed correspond-elle à une absorption ou à un dégagement d'énergie ?",
          options: [
            "Une absorption d'énergie (il faut fournir de l'énergie pour briser les liaisons électrostatiques)",
            "Un dégagement de chaleur",
            "Une création d'électrons libres",
            "Une perte définitive de masse",
          ],
          correctAnswerIndex: 0,
          explanation: "Rompre des liaisons attractives entre ions de signes opposés exige toujours un apport d'énergie (phénomène endo-énergétique).",
        },
      ],
    },

    // ------------------------------------------------------------------------
    // MINI-LEÇON 2/3 : Concentrations, Électroneutralité et Solubilité
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_chimie_ch7_p2',
      order: 2,
      title: "Concentrations (molaire et massique), électroneutralité et solubilité",
      summary:
        "Formules C = n/V et Cm = m/V, relation fondamentale Cm = M × C, équations de dissociation ionique, bilan des charges et limite de solubilité.",
      conceptExplanation:
`Pour quantifier les espèces dissoutes dans un solvant, on définit deux grandeurs de concentration indispensables.

1. Concentration molaire volumique (C) :
C'est la quantité de matière n (en moles) de soluté dissous par litre de solution :
  C = n / Vs   <=>   n = C × Vs
- C : concentration molaire (en mol/L ou mol·L⁻¹),
- n : quantité de matière (en mol),
- Vs : volume total de la solution (en litres, L).

2. Concentration massique ou pondérale (Cm) :
C'est la masse m (en grammes) de soluté dissous par litre de solution :
  Cm = m / Vs   <=>   m = Cm × Vs   (en g/L ou g·L⁻¹)

3. Relation fondamentale entre Cm et C :
Comme m = n × M, on a directement :
  Cm = m / Vs = (n × M) / Vs = (n / Vs) × M
  Cm = C × M   <=>   C = Cm / M
avec M la masse molaire du soluté (en g/mol).

4. Dissociation ionique et concentration des ions en solution :
Lors de la dissolution dans l'eau, le cristal se sépare complètement en ions :
- Chlorure de sodium : NaCl -> Na⁺ + Cl⁻. On a : [Na⁺] = C  et  [Cl⁻] = C.
- Chlorure de calcium : CaCl₂ -> Ca²⁺ + 2 Cl⁻. On a : [Ca²⁺] = C  et  [Cl⁻] = 2 C !
- Sulfate de sodium : Na₂SO₄ -> 2 Na⁺ + SO₄²⁻. On a : [Na⁺] = 2 C  et  [SO₄²⁻] = C.

5. Électroneutralité rigoureuse de la solution ionique :
Toute solution aqueuse est globalement neutre : la somme des charges positives est égale à la somme des charges négatives.
- Pour NaCl : [Na⁺] = [Cl⁻].
- Pour CaCl₂ : 2 × [Ca²⁺] = [Cl⁻]  (puisque chaque Ca²⁺ porte 2 charges positives).
- Pour Na₂SO₄ : [Na⁺] = 2 × [SO₄²⁻].

6. Saturation et solubilité (s) :
- Solution saturée : solution dans laquelle le solvant ne peut plus dissoudre de soluté à la température considérée. Tout soluté supplémentaire ajouté tombe au fond sans se dissoudre.
- Solubilité s : concentration maximale de soluté pouvant être dissous dans un litre de solvant saturé (exprimée en g/L ou mol/L). Elle augmente généralement avec la température (ex pour NaCl : 360 g/L à 20 °C, 390 g/L à 100 °C).`,
      formulas: [
        {
          name: "Relation fondamentale des concentrations",
          formula: "Cm = C · M  <=>  C = Cm / M",
          note: "Cm en g/L, C en mol/L, M en g/mol.",
        },
        {
          name: "Électroneutralité d'une solution aqueuse",
          formula: "Somme z_i · [Cation_i] = Somme |z_j| · [Anion_j]",
          note: "Exemple pour CaCl₂ : 2 · [Ca²⁺] = [Cl⁻].",
        },
      ],
      keyRule:
        "Piège classique aux interrogations : Pour CaCl₂ à C = 1,0 mol/L, la concentration en ions chlorure n'est PAS 1,0 mol/L mais [Cl⁻] = 2 C = 2,0 mol/L car chaque formule apporte deux ions Cl⁻ !",
      workedExample: {
        title: "Calcul complet : Dissolution de 100 g de CaCl₂ dans 500 mL d'eau",
        statement: "On donne M(Ca) = 40 g/mol et M(Cl) = 35,5 g/mol. On dissout m = 100 g de CaCl₂ dans Vs = 0,5 L d'eau. Calculer C, [Ca²⁺], [Cl⁻] et vérifier l'électroneutralité.",
        methodSteps: [
          "Étape 1 : Masse molaire : M(CaCl₂) = 40 + 2 × 35,5 = 111 g/mol.",
          "Étape 2 : Quantité de matière : n = 100 / 111 = 0,90 mol.",
          "Étape 3 : Concentration de la solution : C = n / Vs = 0,90 / 0,5 = 1,80 mol/L.",
          "Étape 4 : Dissociation CaCl₂ -> Ca²⁺ + 2 Cl⁻  =>  [Ca²⁺] = C = 1,80 mol/L  et  [Cl⁻] = 2 C = 3,60 mol/L.",
          "Étape 5 : Électroneutralité : 2 × [Ca²⁺] = 2 × 1,80 = 3,60 mol/L = [Cl⁻]. La solution est neutre.",
        ],
        conclusion: "C = 1,8 mol/L, [Ca²⁺] = 1,8 mol/L, [Cl⁻] = 3,6 mol/L et Cm = 1,8 × 111 = 200 g/L.",
      },
      exercises: [
        {
          id: 'seconde_a_chimie_ch7_p2_ex1',
          type: 'mcq',
          prompt: "Quelle est la formule liant la concentration massique Cm et la concentration molaire C d'une solution ?",
          options: [
            "Cm = C × M (ou C = Cm / M)",
            "Cm = C / M",
            "Cm = C + M",
            "Cm = M / C",
          ],
          correctAnswerIndex: 0,
          explanation: "La concentration massique est le produit de la concentration molaire par la masse molaire : Cm = C × M.",
        },
        {
          id: 'seconde_a_chimie_ch7_p2_ex2',
          type: 'mcq',
          prompt: "On dissout 0,51 mol de NaCl dans Vs = 1,5 L d'eau. Quelle est la concentration molaire volumique C de la solution ?",
          options: [
            "0,34 mol/L (car 0,51 / 1,5 = 0,34)",
            "0,51 mol/L",
            "0,765 mol/L",
            "1,5 mol/L",
          ],
          correctAnswerIndex: 0,
          explanation: "C = n / Vs = 0,51 / 1,5 = 0,34 mol/L.",
        },
        {
          id: 'seconde_a_chimie_ch7_p2_ex3',
          type: 'mcq',
          prompt: "Sachant que M(NaCl) = 58,5 g/mol, quelle est la concentration massique Cm de cette solution à C = 0,34 mol/L ?",
          options: [
            "19,89 g/L (car 0,34 × 58,5 = 19,89)",
            "58,5 g/L",
            "172 g/L",
            "29,25 g/L",
          ],
          correctAnswerIndex: 0,
          explanation: "Cm = C × M = 0,34 × 58,5 = 19,89 g/L.",
        },
        {
          id: 'seconde_a_chimie_ch7_p2_ex4',
          type: 'mcq',
          prompt: "Dans une solution de chlorure de calcium CaCl₂ de concentration C = 0,5 mol/L, que vaut la concentration en ions chlorure [Cl⁻] ?",
          options: [
            "1,0 mol/L (car chaque mole de CaCl₂ libère 2 moles de Cl⁻)",
            "0,5 mol/L",
            "0,25 mol/L",
            "2,0 mol/L",
          ],
          correctAnswerIndex: 0,
          explanation: "La dissociation CaCl₂ -> Ca²⁺ + 2 Cl⁻ produit deux fois plus d'ions chlorure : [Cl⁻] = 2 C = 2 × 0,5 = 1,0 mol/L.",
        },
        {
          id: 'seconde_a_chimie_ch7_p2_ex5',
          type: 'mcq',
          prompt: "Quelle équation traduit l'électroneutralité d'une solution aqueuse de sulfate de sodium Na₂SO₄ ?",
          options: [
            "[Na⁺] = 2 × [SO₄²⁻]",
            "2 × [Na⁺] = [SO₄²⁻]",
            "[Na⁺] = [SO₄²⁻]",
            "[Na⁺] + [SO₄²⁻] = 0",
          ],
          correctAnswerIndex: 0,
          explanation: "Chaque ion SO₄²⁻ porte 2 charges négatives, donc le nombre de charges positives de Na⁺ compense : [Na⁺] = 2 [SO₄²⁻].",
        },
        {
          id: 'seconde_a_chimie_ch7_p2_ex6',
          type: 'mcq',
          prompt: "Qu'appelle-t-on une solution aqueuse 'saturée' ?",
          options: [
            "Une solution dans laquelle le soluté ne peut plus se dissoudre et se dépose au fond",
            "Une solution qui ne contient aucun ion",
            "Une solution qui a bouilli jusqu'à évaporation complète",
            "Une solution prête à exploser",
          ],
          correctAnswerIndex: 0,
          explanation: "La saturation est la limite maximale de solubilité d'un composé dans un solvant à une température donnée.",
        },
        {
          id: 'seconde_a_chimie_ch7_p2_ex7',
          type: 'mcq',
          prompt: "La solubilité du sulfate de sodium à 20 °C est s = 195 g/L. Si on met 20 g dans 100 cm³ d'eau (Cm = 200 g/L), la solution est-elle saturée ?",
          options: [
            "Oui, la solution est saturée car Cm (200 g/L) est supérieure à la solubilité maximale (195 g/L)",
            "Non, elle n'est pas saturée",
            "La solution devient gazeuse",
            "La solubilité ne s'applique pas aux sulfates",
          ],
          correctAnswerIndex: 0,
          explanation: "20 g dans 0,1 L correspond à une concentration de 200 g/L. Comme 200 > 195 g/L, 5 g/L ne peuvent pas se dissoudre et forment un dépôt au fond.",
        },
        {
          id: 'seconde_a_chimie_ch7_p2_ex8',
          type: 'mcq',
          prompt: "Comment évolue généralement la solubilité de la plupart des sels solides dans l'eau lorsque la température augmente ?",
          options: [
            "La solubilité augmente avec la température",
            "La solubilité diminue fortement",
            "La solubilité reste rigoureusement nulle",
            "La solubilité est indépendante de toute condition",
          ],
          correctAnswerIndex: 0,
          explanation: "L'agitation thermique favorise la rupture du réseau cristallin : l'eau chaude dissout généralement une plus grande masse de soluté que l'eau froide.",
        },
      ],
    },

    // ------------------------------------------------------------------------
    // MINI-LEÇON 3/3 : Électrolyse de NaCl et Applications Industrielles
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_chimie_ch7_p3',
      order: 3,
      title: "Électrolyse de la solution de chlorure de sodium et applications",
      summary:
        "Réactions aux électrodes (anode et cathode), formation de dichlore, de dihydrogène et de soude (NaOH), applications industrielles (savonnerie, électrozingage, argenture).",
      conceptExplanation:
`L'électrolyse est une transformation chimique forcée provoquée par le passage d'un courant électrique continu à travers une solution conductrice.

1. Dispositif expérimental de l'électrolyse de l'eau salée (NaCl) :
On plonge deux électrodes inaltérables (graphite ou platine) reliées à un générateur de courant continu dans un tube en U contenant une solution aqueuse de chlorure de sodium (Na⁺ + Cl⁻).

2. Observations et réactions aux électrodes :
- À l'anode (borne positive + du générateur) :
  * Il se forme des bulles d'un gaz jaune-vert suffocant qui décolore une solution d'indigo : c'est le dichlore Cl₂.
  * Demi-équation à l'anode (oxydation des ions chlorure) : 2 Cl⁻ -> Cl₂ + 2 e⁻.
- À la cathode (borne négative − du générateur) :
  * Il se dégage un gaz inflammable qui émet un petit 'pop' (détonation) à la flamme : c'est le dihydrogène H₂.
  * L'addition de quelques gouttes de bleu de bromothymol (BBT) colore la solution en bleu intense, révélant la formation d'ions hydroxyde OH⁻ (milieu fortement basique).
  * Demi-équation à la cathode (réduction de l'eau) : 2 H₂O + 2 e⁻ -> 2 OH⁻ + H₂.
- Rôle des ions Na⁺ : Les ions Na⁺ sont très stables et ne réagissent pas (ions spectateurs) : ils restent en solution pour accompagner les ions OH⁻ formés.

3. Équation-bilan globale de l'électrolyse de NaCl :
En associant les deux demi-équations :
  2 H₂O + 2 (Na⁺ + Cl⁻) -> H₂ + Cl₂ + 2 (Na⁺ + OH⁻)
Produits formés : du dihydrogène H₂, du dichlore Cl₂ et une solution concentrée d'hydroxyde de sodium (soude NaOH) !

4. Applications industrielles majeures de l'électrolyse (Programme officiel MENA) :
- Industrie savonnière : la soude caustique (NaOH) produite est la matière première indispensable pour fabriquer le savon à partir d'huiles végétales.
- Protection des métaux contre la corrosion : l'électrozingage consiste à recouvrir le fer d'une fine couche de zinc protecteur (le fer est placé à la cathode).
- Décoration et orfèvrerie : argenture (dépôt d'argent sur des couverts en laiton), dorure de bijoux et chromage de pièces automobiles.
- Purification des métaux : l'électrolyse permet d'obtenir du cuivre ultra-pur à 99,99% à partir de cuivre brut.`,
      formulas: [
        {
          name: "Demi-équation à l'anode (+)",
          formula: "2 Cl⁻ -> Cl₂ + 2 e⁻",
          note: "Oxydation des ions chlorure en dichlore gazeux.",
        },
        {
          name: "Demi-équation à la cathode (−)",
          formula: "2 H₂O + 2 e⁻ -> 2 OH⁻ + H₂",
          note: "Réduction de l'eau en dihydrogène et ions hydroxyde.",
        },
        {
          name: "Équation globale de l'électrolyse",
          formula: "2 H₂O + 2 (Na⁺ + Cl⁻) -> H₂ + Cl₂ + 2 (Na⁺ + OH⁻)",
          note: "Production simultanée de H₂, Cl₂ et soude NaOH.",
        },
      ],
      keyRule:
        "Moyen mnémotechnique officiel : Anode = Oxydation (deux voyelles : A et O). Cathode = Réduction (deux consonnes : C et R). L'anode est reliée au pôle positif (+) et attire les anions négatifs (Cl⁻).",
      workedExample: {
        title: "Situation officielle : Fabrication de soude pour le savon du club scientifique",
        statement: "On électrolyse 50 kg de chlorure de sodium (NaCl, M = 58,5 g/mol). Calculer la masse théorique de soude NaOH (M = 40 g/mol) susceptible d'être obtenue.",
        methodSteps: [
          "Étape 1 : D'après l'équation globale, 2 moles de NaCl produisent 2 moles de NaOH, soit un rapport de 1:1 : n(NaOH) = n(NaCl).",
          "Étape 2 : Quantité de matière initiale : n(NaCl) = m(NaCl) / M(NaCl) = 50 000 g / 58,5 g/mol ≈ 854,7 mol.",
          "Étape 3 : n(NaOH) produit = 854,7 mol.",
          "Étape 4 : Calcul de la masse de soude : m(NaOH) = n(NaOH) × M(NaOH) = 854,7 × 40 = 34 188 g ≈ 34,2 kg.",
        ],
        conclusion: "On peut obtenir jusqu'à 34,2 kg de soude NaOH pure pour la fabrication de savon.",
      },
      exercises: [
        {
          id: 'seconde_a_chimie_ch7_p3_ex1',
          type: 'mcq',
          prompt: "Quel gaz se dégage à l'anode lors de l'électrolyse d'une solution aqueuse de chlorure de sodium ?",
          options: [
            "Le dichlore Cl₂ (qui décolore l'indigo)",
            "Le dihydrogène H₂",
            "Le dioxygène O₂",
            "Le dioxyde de carbone CO₂",
          ],
          correctAnswerIndex: 0,
          explanation: "À l'anode (+), les ions chlorure Cl⁻ perdent des électrons pour donner du dichlore gazeux Cl₂ (2 Cl⁻ -> Cl₂ + 2 e⁻).",
        },
        {
          id: 'seconde_a_chimie_ch7_p3_ex2',
          type: 'mcq',
          prompt: "Quel gaz se dégage à la cathode et comment le caractérise-t-on expérimentalement ?",
          options: [
            "Le dihydrogène H₂, caractérisé par une petite détonation à l'approche d'une flamme",
            "Le dioxyde de carbone, qui trouble l'eau de chaux",
            "Le dioxygène, qui rallume une allumette incandescente",
            "L'azote, qui éteint les flammes sans bruit",
          ],
          correctAnswerIndex: 0,
          explanation: "À la cathode, l'eau est réduite en dihydrogène gazeux H₂, qui explose avec un petit 'pop' caractéristique au contact d'une flamme.",
        },
        {
          id: 'seconde_a_chimie_ch7_p3_ex3',
          type: 'mcq',
          prompt: "Pourquoi la solution au voisinage de la cathode se colore-t-elle en bleu en présence de bleu de bromothymol (BBT) ?",
          options: [
            "En raison de l'apparition d'ions hydroxyde OH⁻ qui rendent le milieu basique",
            "En raison de la présence d'ions sodium Na⁺",
            "En raison d'un refroidissement extrême de la cathode",
            "Parce que le sel NaCl est bleu",
          ],
          correctAnswerIndex: 0,
          explanation: "La réduction de l'eau produit des ions OH⁻ (2 H₂O + 2 e⁻ -> 2 OH⁻ + H₂), rendant la solution basique, ce qui fait virer le BBT au bleu.",
        },
        {
          id: 'seconde_a_chimie_ch7_p3_ex4',
          type: 'mcq',
          prompt: "Quels sont les trois produits majeurs issus de l'électrolyse industrielle de l'eau salée (NaCl) ?",
          options: [
            "Le dichlore Cl₂, le dihydrogène H₂ et la soude NaOH",
            "L'acide chlorhydrique, le sodium pur et l'oxygène",
            "Le calcaire, l'eau pure et le gaz carbonique",
            "Le sel régénéré, l'alcool et l'eau",
          ],
          correctAnswerIndex: 0,
          explanation: "L'électrolyse du chlorure de sodium est l'un des piliers de l'industrie chimique mondiale (procédé chlore-soude) fournissant Cl₂, H₂ et NaOH.",
        },
        {
          id: 'seconde_a_chimie_ch7_p3_ex5',
          type: 'mcq',
          prompt: "Qu'est-ce que l'électrozingage en milieu industriel ?",
          options: [
            "Un procédé électrolytique qui dépose une fine couche de zinc sur le fer pour le protéger contre la corrosion",
            "Une réaction de destruction des métaux lourds",
            "La fusion du zinc au chalumeau",
            "Une méthode de fabrication du savon",
          ],
          correctAnswerIndex: 0,
          explanation: "L'électrozingage utilise l'électrolyse pour recouvrir une pièce en fer d'une pellicule de zinc sacrificielle inoxydable.",
        },
        {
          id: 'seconde_a_chimie_ch7_p3_ex6',
          type: 'mcq',
          prompt: "Lors d'une opération d'argenture ou de dorure par électrolyse, à quelle électrode place-t-on l'objet à recouvrir ?",
          options: [
            "À la cathode (pôle négatif où les ions métalliques Ag⁺ ou Au³⁺ se réduisent en métal solide)",
            "À l'anode (pôle positif)",
            "En dehors du circuit électrique",
            "Au fond du récipient sans contact avec le générateur",
          ],
          correctAnswerIndex: 0,
          explanation: "L'objet à argenter ou à dorer doit être placé à la cathode pour que les cations métalliques positifs viennent y capter des électrons et se déposer sous forme métallique.",
        },
        {
          id: 'seconde_a_chimie_ch7_p3_ex7',
          type: 'mcq',
          prompt: "Pourquoi la soude NaOH obtenue par électrolyse est-elle précieuse pour les coopératives et lycées en Côte d'Ivoire ?",
          options: [
            "Elle est indispensable à la saponification des huiles pour fabriquer le savon de ménage",
            "Elle sert de carburant pour les véhicules",
            "Elle remplace le sucre dans l'alimentation",
            "Elle est utilisée pour peindre les murs",
          ],
          correctAnswerIndex: 0,
          explanation: "La soude caustique NaOH fait réagir les corps gras (acides gras) lors de la réaction de saponification pour donner du savon.",
        },
        {
          id: 'seconde_a_chimie_ch7_p3_ex8',
          type: 'mcq',
          prompt: "Quelle demi-équation a lieu à l'anode lors de l'électrolyse de NaCl aqueux ?",
          options: [
            "2 Cl⁻ -> Cl₂ + 2 e⁻",
            "Cl₂ + 2 e⁻ -> 2 Cl⁻",
            "Na⁺ + 1 e⁻ -> Na",
            "2 H₂O -> 2 H₂ + O₂",
          ],
          correctAnswerIndex: 0,
          explanation: "L'anode est le siège de l'oxydation : les ions chlorure Cl⁻ y cèdent leurs électrons excédentaires pour former des molécules de dichlore Cl₂.",
        },
      ],
    },
  ],
};

// ============================================================================
// LEÇON 8 : TESTS D'IDENTIFICATION DE QUELQUES IONS
// ============================================================================
export const chimie2deATestsIdentificationIonsChapter: CurriculumChapter = {
  id: 'seconde_a_chimie_ch8_tests_identification_ions',
  subjectId: 'physique_chimie',
  gradeLevel: 'seconde_a',
  order: 8,
  officialVolumeHours: 8,
  title: "Leçon 8 — Tests d'identification de quelques ions",
  summary:
    "Couleur des ions hydratés, tests à la flamme, réactions de précipitation caractéristiques des cations (Cu²⁺, Fe²⁺, Ag⁺, Ca²⁺) et des anions (Cl⁻, SO₄²⁻, CO₃²⁻), équations-bilans et ions spectateurs.",
  points: [
    // ------------------------------------------------------------------------
    // MINI-LEÇON 1/3 : Couleur des Ions et Test à la Flamme
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_chimie_ch8_p1',
      order: 1,
      title: "Couleur propre des ions en solution et test à la flamme",
      summary:
        "Coloration naturelle des ions hydratés (Cu²⁺ bleu, Fe²⁺ vert pâle, Fe³⁺ rouille) et couleur spécifique émise à la flamme (sodium, potassium, cuivre, calcium).",
      conceptExplanation:
`Comment identifier les ions dissous dans une eau minérale ou un flacon de laboratoire sans étiquette ? Deux premières méthodes visuelles immédiates sont la coloration de la solution et le test à la flamme.

1. La couleur des ions hydratés en solution aqueuse :
Certains ions métalliques confèrent une couleur caractéristique à la solution lorsqu'ils sont entourés de molécules d'eau :
- Ion cuivre II (Cu²⁺) : donne une couleur bleue intense à la solution (ex : solution de sulfate de cuivre).
- Ion fer II (Fe²⁺) : donne une couleur vert pâle à la solution (ex : solution de sulfate ferreux).
- Ion fer III (Fe³⁺) : donne une couleur rouille, brun-jaunâtre à la solution.
- Ions incolores en solution : la plupart des autres ions usuels (Na⁺, K⁺, Ca²⁺, Al³⁺, Cl⁻, SO₄²⁻, NO₃⁻, etc.) donnent des solutions parfaitement limpides et incolores comme de l'eau pure.
Règle de prudence essentielle : Une solution bleue ne contient pas obligatoirement des ions Cu²⁺ (il pourrait s'agir d'un colorant ou d'un autre composé). La couleur est un indice, mais il faut TOUJOURS confirmer par un test chimique de précipitation !

2. Le test des ions à la flamme :
Lorsqu'on introduit une tige métallique propre trempée dans la solution dans une flamme non éclairante (flamme bleue de bec Bunsen), la chaleur excite les électrons des ions métalliques qui émettent une lumière de couleur spécifique :
- Sodium (Na⁺) : colore la flamme en jaune intense et persistant.
- Potassium (K⁺) : colore la flamme en violet (lilas).
- Cuivre II (Cu²⁺) : colore la flamme en vert vif ou bleu-vert.
- Calcium (Ca²⁺) : colore la flamme en rouge brique (rouge-orangé).
Cette technique analytique rapide est également le principe utilisé pour produire les magnifiques couleurs des feux d'artifice !`,
      formulas: [
        {
          name: "Couleurs caractéristiques des flammes",
          formula: "Na⁺ : Jaune intense | K⁺ : Violet | Cu²⁺ : Vert | Ca²⁺ : Rouge brique",
          note: "Principe de l'analyse spectrale par émission de flamme.",
        },
      ],
      keyRule:
        "Règle d'or en analyse chimique : La couleur d'une solution n'est qu'un test de présomption. Pour prouver formellement l'identité d'un ion, on réalise obligatoirement un test de précipitation avec un réactif spécifique !",
      workedExample: {
        title: "Identification d'un métal inconnu par test à la flamme",
        statement: "On trempe une tige dans une solution incolore S et on la porte dans la flamme d'un brûleur. La flamme devient jaune intense. Quel cation est mis en évidence ?",
        methodSteps: [
          "Étape 1 : Analyser la couleur émise : jaune intense.",
          "Étape 2 : Consulter la table des couleurs à la flamme : Na⁺ = jaune intense, K⁺ = violet, Cu²⁺ = vert, Ca²⁺ = rouge brique.",
          "Étape 3 : Conclure sans ambiguïté.",
        ],
        conclusion: "La couleur jaune intense prouve la présence d'ions sodium Na⁺ dans la solution.",
      },
      exercises: [
        {
          id: 'seconde_a_chimie_ch8_p1_ex1',
          type: 'mcq',
          prompt: "Quelle couleur caractéristique l'ion cuivre II (Cu²⁺) donne-t-il à une solution aqueuse ?",
          options: [
            "Bleue",
            "Vert pâle",
            "Jaune intense",
            "Rouge brique",
          ],
          correctAnswerIndex: 0,
          explanation: "Les ions cuivre II hydratés confèrent une coloration bleue caractéristique à leurs solutions.",
        },
        {
          id: 'seconde_a_chimie_ch8_p1_ex2',
          type: 'mcq',
          prompt: "Quelle est la couleur d'une solution contenant des ions fer II (Fe²⁺) ?",
          options: [
            "Vert pâle",
            "Bleu foncé",
            "Violette",
            "Incolore absolue",
          ],
          correctAnswerIndex: 0,
          explanation: "Les ions fer II Fe²⁺ donnent une teinte vert pâle aux solutions aqueuses.",
        },
        {
          id: 'seconde_a_chimie_ch8_p1_ex3',
          type: 'mcq',
          prompt: "Quelle couleur prend la flamme d'un brûleur lorsqu'on y introduit un composé contenant des ions sodium Na⁺ ?",
          options: [
            "Jaune intense",
            "Violet",
            "Vert vif",
            "Rouge brique",
          ],
          correctAnswerIndex: 0,
          explanation: "La raie d'émission caractéristique du sodium colore immédiatement la flamme en jaune vif très lumineux.",
        },
        {
          id: 'seconde_a_chimie_ch8_p1_ex4',
          type: 'mcq',
          prompt: "Quelle couleur de flamme caractérise la présence d'ions potassium K⁺ ?",
          options: [
            "Violette",
            "Verte",
            "Jaune",
            "Bleue",
          ],
          correctAnswerIndex: 0,
          explanation: "Les ions potassium K⁺ teintent la flamme d'une délicate lueur violette.",
        },
        {
          id: 'seconde_a_chimie_ch8_p1_ex5',
          type: 'mcq',
          prompt: "Quelle couleur de flamme caractérise la présence d'ions calcium Ca²⁺ ?",
          options: [
            "Rouge brique",
            "Jaune citron",
            "Verte",
            "Noire",
          ],
          correctAnswerIndex: 0,
          explanation: "Les sels de calcium rougissent la flamme avec une teinte rouge brique typique.",
        },
        {
          id: 'seconde_a_chimie_ch8_p1_ex6',
          type: 'mcq',
          prompt: "Une solution est incolore. Peut-on en déduire qu'elle ne contient aucun ion dissous ?",
          options: [
            "Non, car de nombreux ions sont parfaitement incolores en solution (ex : Na⁺, Cl⁻, Ca²⁺, SO₄²⁻)",
            "Oui, toute solution ionique est obligatoirement très colorée",
            "Oui, les ions absorbent toute la lumière visible",
            "Non, cela signifie seulement qu'elle est acide",
          ],
          correctAnswerIndex: 0,
          explanation: "La majorité des ions (comme ceux de l'eau minérale Na⁺, Ca²⁺, Mg²⁺, Cl⁻, HCO₃⁻) ne colorent pas l'eau.",
        },
        {
          id: 'seconde_a_chimie_ch8_p1_ex7',
          type: 'mcq',
          prompt: "Pourquoi le test de couleur seul ne suffit-il pas pour identifier avec certitude un ion en solution ?",
          options: [
            "Parce qu'une coloration peut provenir d'autres espèces ou colorants ; un test chimique réactif est indispensable",
            "Parce que la couleur s'évapore avec le temps",
            "Parce que les couleurs sont invisibles à l'œil nu",
            "Parce que les ions changent de couleur toutes les minutes",
          ],
          correctAnswerIndex: 0,
          explanation: "Une solution bleue peut être due à un colorant ou un autre complexe ; seule une réaction chimique spécifique apporte la preuve formelle.",
        },
        {
          id: 'seconde_a_chimie_ch8_p1_ex8',
          type: 'mcq',
          prompt: "Quel domaine d'application utilise directement le principe de la couleur des ions à la flamme ?",
          options: [
            "La pyrotechnie (feux d'artifice) pour créer les différentes couleurs dans le ciel",
            "Le raffinage du pétrole brut",
            "La fabrication du ciment",
            "La distillation de l'eau",
          ],
          correctAnswerIndex: 0,
          explanation: "Dans les feux d'artifice, le sodium donne le jaune, le cuivre le vert, le strontium et le calcium le rouge, et le potassium le violet.",
        },
      ],
    },

    // ------------------------------------------------------------------------
    // MINI-LEÇON 2/3 : Tests de Précipitation des Cations (Cu²⁺, Fe²⁺, Ag⁺, Ca²⁺)
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_chimie_ch8_p2',
      order: 2,
      title: "Tests de précipitation caractéristiques des cations",
      summary:
        "Action de la soude sur Cu²⁺ (précipité bleu) et Fe²⁺ (précipité vert pâle), action des ions Cl⁻ sur Ag⁺ (précipité blanc noircissant à la lumière), équations de précipitation.",
      conceptExplanation:
`Un test de précipitation consiste à verser quelques gouttes d'une solution contenant un réactif spécifique dans la solution à tester : l'apparition d'un solide insoluble coloré (un précipité) identifie l'ion cherché.

1. Identification de l'ion cuivre II (Cu²⁺) par la soude :
- Réactif utilisé : solution d'hydroxyde de sodium (soude : Na⁺ + OH⁻).
- Observation : formation immédiate d'un précipité bleu gélatineux d'hydroxyde de cuivre II Cu(OH)₂.
- Équation-bilan de précipitation : Cu²⁺ + 2 OH⁻ -> Cu(OH)₂ (précipité bleu).
- Les ions sodium Na⁺ et l'anion associé (ex : SO₄²⁻) sont des ions spectateurs (ils n'interviennent pas dans la réaction).

2. Identification de l'ion fer II (Fe²⁺) par la soude :
- Réactif : solution d'hydroxyde de sodium (soude).
- Observation : formation d'un précipité vert pâle d'hydroxyde de fer II Fe(OH)₂ qui rouille lentement à l'air par oxydation.
- Équation-bilan : Fe²⁺ + 2 OH⁻ -> Fe(OH)₂ (précipité vert pâle).

3. Identification de l'ion fer III (Fe³⁺) par la soude :
- Réactif : soude (OH⁻).
- Observation : formation d'un précipité rouille (brun-rougeâtre) d'hydroxyde de fer III Fe(OH)₃.
- Équation-bilan : Fe³⁺ + 3 OH⁻ -> Fe(OH)₃ (précipité rouille).

4. Identification de l'ion argent (Ag⁺) par les ions chlorure :
- Réactif : solution de chlorure de sodium (Cl⁻).
- Observation : formation d'un précipité blanc caillebotté de chlorure d'argent AgCl qui a la propriété unique de noircir sous l'action de la lumière (phénomène à la base de la photographie argentique).
- Équation-bilan : Ag⁺ + Cl⁻ -> AgCl (précipité blanc noircissant à la lumière).

5. Identification de l'ion calcium (Ca²⁺) :
- Réactif : oxalate d'ammonium.
- Observation : formation d'un précipité blanc d'oxalate de calcium (qui ne noircit pas à la lumière).`,
      formulas: [
        {
          name: "Précipitation de l'ion Cuivre II",
          formula: "Cu²⁺ + 2 OH⁻ -> Cu(OH)₂ (précipité bleu)",
          note: "Réactif : soude NaOH.",
        },
        {
          name: "Précipitation de l'ion Fer II",
          formula: "Fe²⁺ + 2 OH⁻ -> Fe(OH)₂ (précipité vert)",
          note: "Réactif : soude NaOH.",
        },
        {
          name: "Précipitation de l'ion Argent",
          formula: "Ag⁺ + Cl⁻ -> AgCl (blanc noircissant)",
          note: "Noircit sous l'effet de la lumière.",
        },
      ],
      keyRule:
        "Vocabulaire officiel : Le solide insoluble formé porte le nom de précipité (noté avec une flèche vers le bas dans les équations). Les ions qui restent dissous sans réagir sont appelés ions spectateurs.",
      workedExample: {
        title: "Situation d'évaluation officielle : Flacon sans étiquette au laboratoire",
        statement: "On dispose d'un flacon A sans étiquette. L'ajout de soude produit un précipité vert pâle. L'ajout de nitrate d'argent produit un précipité blanc qui noircit à la lumière. Identifier les ions et nommer la solution.",
        methodSteps: [
          "Étape 1 : Le précipité vert avec la soude prouve la présence d'ions fer II Fe²⁺ : Fe²⁺ + 2 OH⁻ -> Fe(OH)₂.",
          "Étape 2 : Le précipité blanc noircissant à la lumière avec Ag⁺ prouve la présence d'ions chlorure Cl⁻ : Ag⁺ + Cl⁻ -> AgCl.",
          "Étape 3 : Associer le cation et l'anion identifiés : Fe²⁺ et Cl⁻.",
        ],
        conclusion: "La solution A est une solution de chlorure de fer II (formule FeCl₂).",
      },
      exercises: [
        {
          id: 'seconde_a_chimie_ch8_p2_ex1',
          type: 'mcq',
          prompt: "Quel précipité obtient-on lorsqu'on verse quelques gouttes de soude dans une solution contenant des ions cuivre II Cu²⁺ ?",
          options: [
            "Un précipité bleu d'hydroxyde de cuivre II Cu(OH)₂",
            "Un précipité vert pâle",
            "Un précipité blanc noircissant",
            "Un précipité rouge brique",
          ],
          correctAnswerIndex: 0,
          explanation: "La réaction Cu²⁺ + 2 OH⁻ produit un précipité bleu caractéristique d'hydroxyde de cuivre II.",
        },
        {
          id: 'seconde_a_chimie_ch8_p2_ex2',
          type: 'mcq',
          prompt: "L'action de la soude sur une solution contenant des ions fer II (Fe²⁺) donne :",
          options: [
            "Un précipité vert pâle d'hydroxyde de fer II Fe(OH)₂",
            "Un précipité bleu intense",
            "Un précipité jaune fluo",
            "Un dégagement gazeux immédiat sans solide",
          ],
          correctAnswerIndex: 0,
          explanation: "Fe²⁺ réagit avec OH⁻ pour former Fe(OH)₂, solide insoluble de couleur vert pâle.",
        },
        {
          id: 'seconde_a_chimie_ch8_p2_ex3',
          type: 'mcq',
          prompt: "Quelle est la propriété remarquable du précipité blanc de chlorure d'argent AgCl ?",
          options: [
            "Il noircit rapidement lorsqu'il est exposé à la lumière",
            "Il devient violet dans le noir",
            "Il se dissout instantanément dans l'huile",
            "Il émet un bruit en séchant",
          ],
          correctAnswerIndex: 0,
          explanation: "Le chlorure d'argent AgCl est photosensible : sous l'action des photons lumineux, les ions argent se réduisent en micro-cristaux d'argent métallique noir.",
        },
        {
          id: 'seconde_a_chimie_ch8_p2_ex4',
          type: 'mcq',
          prompt: "Quelle est l'équation-bilan de la réaction de précipitation entre l'ion cuivre II et les ions hydroxydes ?",
          options: [
            "Cu²⁺ + 2 OH⁻ -> Cu(OH)₂",
            "Cu²⁺ + OH⁻ -> CuOH",
            "Cu⁺ + 2 OH⁻ -> Cu(OH)₂",
            "Cu²⁺ + 2 H₂O -> Cu(OH)₂ + H₂",
          ],
          correctAnswerIndex: 0,
          explanation: "L'ion dipositif Cu²⁺ nécessite deux ions OH⁻ mononégatifs pour former le solide neutre Cu(OH)₂.",
        },
        {
          id: 'seconde_a_chimie_ch8_p2_ex5',
          type: 'mcq',
          prompt: "Comment appelle-t-on les ions qui ne participent pas à la formation du précipité et restent spectateurs en solution ?",
          options: [
            "Les ions spectateurs",
            "Les ions directeurs",
            "Les ions précipitants",
            "Les ions oxydants",
          ],
          correctAnswerIndex: 0,
          explanation: "Les ions spectateurs assistent à la réaction sans subir de transformation chimique.",
        },
        {
          id: 'seconde_a_chimie_ch8_p2_ex6',
          type: 'mcq',
          prompt: "L'action de la soude sur une solution donne un précipité rouille (brun-rouge). Quel ion est mis en évidence ?",
          options: [
            "L'ion fer III (Fe³⁺)",
            "L'ion fer II (Fe²⁺)",
            "L'ion cuivre II (Cu²⁺)",
            "L'ion zinc (Zn²⁺)",
          ],
          correctAnswerIndex: 0,
          explanation: "Le précipité rouille d'hydroxyde de fer III Fe(OH)₃ caractérise la présence des ions fer III Fe³⁺.",
        },
        {
          id: 'seconde_a_chimie_ch8_p2_ex7',
          type: 'mcq',
          prompt: "Quel réactif utilise-t-on pour identifier les ions calcium Ca²⁺ en solution par formation d'un précipité blanc ?",
          options: [
            "L'oxalate d'ammonium",
            "L'eau distillée",
            "L'acide chlorhydrique pur",
            "L'alcool éthylique",
          ],
          correctAnswerIndex: 0,
          explanation: "L'oxalate d'ammonium réagit avec Ca²⁺ pour former un précipité blanc d'oxalate de calcium.",
        },
        {
          id: 'seconde_a_chimie_ch8_p2_ex8',
          type: 'mcq',
          prompt: "Dans la réaction Fe²⁺ + 2 OH⁻ -> Fe(OH)₂, que devient le précipité vert après un certain temps de contact avec l'air ?",
          options: [
            "Il brunit et s'oxyde lentement en rouille (oxyde de fer hydraté)",
            "Il redevient complètement incolore",
            "Il se transforme en gaz carbonique",
            "Il s'enflamme spontanément",
          ],
          correctAnswerIndex: 0,
          explanation: "Le dioxygène de l'air dissous oxyde progressivement le fer II en fer III, transformant le vert en brun-rouille.",
        },
      ],
    },

    // ------------------------------------------------------------------------
    // MINI-LEÇON 3/3 : Tests des Anions (Cl⁻, SO₄²⁻, CO₃²⁻) et Synthèse
    // ------------------------------------------------------------------------
    {
      id: 'seconde_a_chimie_ch8_p3',
      order: 3,
      title: "Tests des anions (chlorure, sulfate, carbonate) et démarche d'analyse",
      summary:
        "Test de l'ion chlorure Cl⁻ (nitrate d'argent), test de l'ion sulfate SO₄²⁻ (chlorure de baryum), test de l'ion carbonate CO₃²⁻ (dégagement de CO₂ avec acide) et identification complète.",
      conceptExplanation:
`Après avoir identifié le cation (ion métallique), il faut identifier l'anion associé pour connaître le nom complet de la solution ionique.

1. Identification de l'ion chlorure (Cl⁻) :
- Réactif : solution de nitrate d'argent (Ag⁺ + NO₃⁻).
- Observation : formation immédiate d'un précipité blanc de chlorure d'argent AgCl qui noircit à la lumière.
- Équation-bilan : Ag⁺ + Cl⁻ -> AgCl (précipité blanc noircissant à la lumière).
- Ce test est universellement utilisé pour vérifier la salinité de l'eau potable ou des eaux minérales.

2. Identification de l'ion sulfate (SO₄²⁻) :
- Réactif : solution de chlorure de baryum (Ba²⁺ + 2 Cl⁻) ou nitrate de baryum.
- Observation : formation d'un précipité blanc lourd de sulfate de baryum BaSO₄ qui NE NOIRCIT PAS à la lumière.
- Équation-bilan : Ba²⁺ + SO₄²⁻ -> BaSO₄ (précipité blanc inaltérable à la lumière).

3. Identification de l'ion carbonate (CO₃²⁻) par dégagement gazeux :
- Réactif : solution acide (acide chlorhydrique : H₃O⁺ + Cl⁻).
- Observation : vive effervescence avec dégagement d'un gaz incolore et inodore qui trouble l'eau de chaux (dioxyde de carbone CO₂).
- Équation-bilan : CO₃²⁻ + 2 H₃O⁺ -> CO₂ + 3 H₂O
  (ou de manière simplifiée : CO₃²⁻ + 2 H⁺ -> CO₂ + H₂O).
- Ce test est celui que l'on observe lorsqu'on verse du vinaigre ou de l'acide sur de la craie ou du calcaire !

4. Tableau récapitulatif officiel d'identification des ions :
- Ion Cu²⁺ : Soude -> Précipité bleu Cu(OH)₂ | Flamme verte.
- Ion Fe²⁺ : Soude -> Précipité vert pâle Fe(OH)₂.
- Ion Fe³⁺ : Soude -> Précipité rouille Fe(OH)₃.
- Ion Na⁺ : Flamme jaune intense.
- Ion K⁺ : Flamme violette.
- Ion Cl⁻ : Nitrate d'argent (Ag⁺) -> Précipité blanc qui noircit à la lumière (AgCl).
- Ion SO₄²⁻ : Chlorure de baryum (Ba²⁺) -> Précipité blanc inaltérable (BaSO₄).
- Ion CO₃²⁻ : Acide (H₃O⁺) -> Effervescence et gaz CO₂ qui trouble l'eau de chaux.`,
      formulas: [
        {
          name: "Test du chlorure Cl⁻",
          formula: "Ag⁺ + Cl⁻ -> AgCl (blanc noircissant)",
          note: "Réactif : nitrate d'argent.",
        },
        {
          name: "Test du sulfate SO₄²⁻",
          formula: "Ba²⁺ + SO₄²⁻ -> BaSO₄ (blanc)",
          note: "Réactif : chlorure de baryum BaCl₂.",
        },
        {
          name: "Test du carbonate CO₃²⁻",
          formula: "CO₃²⁻ + 2 H₃O⁺ -> CO₂ + 3 H₂O",
          note: "Réactif : acide chlorhydrique ; CO₂ trouble l'eau de chaux.",
        },
      ],
      keyRule:
        "Différence cruciale d'examen : AgCl et BaSO₄ sont tous les deux des précipités blancs ! Pour les distinguer : le précipité de chlorure d'argent AgCl noircit rapidement à la lumière, tandis que le précipité de sulfate de baryum BaSO₄ reste parfaitement blanc et inaltérable.",
      workedExample: {
        title: "Situation officielle MENA : TP d'identification d'une eau minérale",
        statement: "Sur une eau minérale, on effectue 2 tests : 1. L'addition de Ba²⁺ donne un précipité blanc. 2. L'addition d'acide provoque un dégagement qui trouble l'eau de chaux. Quels anions sont présents ?",
        methodSteps: [
          "Étape 1 : Le test au baryum Ba²⁺ donnant un précipité blanc caractérise l'ion sulfate SO₄²⁻ (Ba²⁺ + SO₄²⁻ -> BaSO₄).",
          "Étape 2 : Le dégagement de CO₂ troublant l'eau de chaux avec un acide caractérise l'ion carbonate CO₃²⁻ (CO₃²⁻ + 2 H₃O⁺ -> CO₂ + 3 H₂O).",
        ],
        conclusion: "L'eau minérale renferme des ions sulfate SO₄²⁻ et des ions carbonate CO₃²⁻.",
      },
      exercises: [
        {
          id: 'seconde_a_chimie_ch8_p3_ex1',
          type: 'mcq',
          prompt: "Quel réactif utilise-t-on pour mettre en évidence la présence des ions chlorure Cl⁻ en solution ?",
          options: [
            "Une solution de nitrate d'argent (Ag⁺ + NO₃⁻)",
            "Une solution de chlorure de baryum",
            "Une solution d'acide sulfurique",
            "De l'eau de chaux pure",
          ],
          correctAnswerIndex: 0,
          explanation: "Les ions argent Ag⁺ du nitrate d'argent précipitent avec Cl⁻ pour former le chlorure d'argent AgCl blanc noircissant à la lumière.",
        },
        {
          id: 'seconde_a_chimie_ch8_p3_ex2',
          type: 'mcq',
          prompt: "Quel précipité blanc caractérise la présence des ions sulfate SO₄²⁻ lors de l'ajout de chlorure de baryum ?",
          options: [
            "Le sulfate de baryum BaSO₄ (qui ne noircit pas à la lumière)",
            "Le chlorure d'argent AgCl",
            "L'hydroxyde de cuivre Cu(OH)₂",
            "Le carbonate de calcium CaCO₃",
          ],
          correctAnswerIndex: 0,
          explanation: "La réaction Ba²⁺ + SO₄²⁻ produit le sulfate de baryum BaSO₄, solide blanc dense et inaltérable.",
        },
        {
          id: 'seconde_a_chimie_ch8_p3_ex3',
          type: 'mcq',
          prompt: "Lorsqu'on verse de l'acide chlorhydrique sur une solution contenant des ions carbonate CO₃²⁻, qu'observe-t-on ?",
          options: [
            "Une vive effervescence avec dégagement de dioxyde de carbone CO₂ qui trouble l'eau de chaux",
            "Un précipité bleu intense",
            "La solution devient fluorescente",
            "Aucune réaction visible",
          ],
          correctAnswerIndex: 0,
          explanation: "Les ions carbonate réagissent avec l'acide : CO₃²⁻ + 2 H₃O⁺ -> CO₂ + 3 H₂O. Le gaz CO₂ trouble l'eau de chaux.",
        },
        {
          id: 'seconde_a_chimie_ch8_p3_ex4',
          type: 'mcq',
          prompt: "Quelle est l'équation-bilan de la réaction d'identification des ions sulfate par les ions baryum ?",
          options: [
            "Ba²⁺ + SO₄²⁻ -> BaSO₄",
            "Ba⁺ + SO₄²⁻ -> BaSO₄",
            "Ba²⁺ + 2 SO₄²⁻ -> Ba(SO₄)₂",
            "Ba²⁺ + S²⁻ -> BaS",
          ],
          correctAnswerIndex: 0,
          explanation: "L'ion Ba²⁺ (+2) s'associe directement à l'ion SO₄²⁻ (−2) pour donner le solide neutre BaSO₄.",
        },
        {
          id: 'seconde_a_chimie_ch8_p3_ex5',
          type: 'mcq',
          prompt: "Comment peut-on différencier expérimentalement un précipité de AgCl d'un précipité de BaSO₄ ?",
          options: [
            "AgCl noircit sous l'action de la lumière, tandis que BaSO₄ reste rigoureusement blanc",
            "AgCl est vert et BaSO₄ est rouge",
            "BaSO₄ flotte à la surface de l'eau et pas AgCl",
            "AgCl est gazeux à température ambiante",
          ],
          correctAnswerIndex: 0,
          explanation: "L'exposition à la lumière solaire ou à une lampe noircit spécifiquement le chlorure d'argent en quelques minutes.",
        },
        {
          id: 'seconde_a_chimie_ch8_p3_ex6',
          type: 'mcq',
          prompt: "On teste une solution incolore : le test au chlorure de baryum donne un précipité blanc, et le test à la flamme donne une couleur jaune intense. De quel composé s'agit-il ?",
          options: [
            "Le sulfate de sodium (Na₂SO₄)",
            "Le chlorure de sodium (NaCl)",
            "Le sulfate de cuivre (CuSO₄)",
            "Le chlorure de baryum",
          ],
          correctAnswerIndex: 0,
          explanation: "Flamme jaune = ions sodium Na⁺ ; précipité blanc avec Ba²⁺ = ions sulfate SO₄²⁻ -> sulfate de sodium Na₂SO₄.",
        },
        {
          id: 'seconde_a_chimie_ch8_p3_ex7',
          type: 'mcq',
          prompt: "Quel gaz trouble l'eau de chaux lors du test des ions carbonate par un acide ?",
          options: [
            "Le dioxyde de carbone (CO₂)",
            "Le dihydrogène (H₂)",
            "Le dioxygène (O₂)",
            "Le diazote (N₂)",
          ],
          correctAnswerIndex: 0,
          explanation: "Le dioxyde de carbone réagit avec l'eau de chaux (hydroxyde de calcium) pour former un précipité microscopique blanc de carbonate de calcium.",
        },
        {
          id: 'seconde_a_chimie_ch8_p3_ex8',
          type: 'mcq',
          prompt: "Dans l'équation CO₃²⁻ + 2 H₃O⁺ -> CO₂ + 3 H₂O, quels sont les ions spectateurs si l'on utilise du carbonate de sodium et de l'acide chlorhydrique ?",
          options: [
            "Les ions sodium Na⁺ et les ions chlorure Cl⁻",
            "Les ions carbonate et hydronium",
            "L'eau et le CO₂",
            "Il n'y a aucun ion spectateur",
          ],
          correctAnswerIndex: 0,
          explanation: "Na⁺ et Cl⁻ ne participent pas à la réaction acido-basique et restent dissous à l'état d'ions spectateurs.",
        },
      ],
    },
  ],
};
