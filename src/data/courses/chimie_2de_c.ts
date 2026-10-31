// ============================================================================
// MODULE OFFICIEL : CHIMIE 2de C (PHYSIQUE-CHIMIE)
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
export const chimie2deCElementChimiqueChapter: CurriculumChapter = {
  id: 'seconde_c_chimie_ch1_element_chimique',
  subjectId: 'physique_chimie',
  gradeLevel: 'seconde_c',
  order: 1,
  officialVolumeHours: 6,
  title: "Leçon 1 — L'élément chimique",
  summary:
    "Mise en évidence expérimentale du cuivre sous différentes formes, définition officielle de l'élément chimique, distinction corps purs simples et composés, symboles normalisés des 118 éléments et origines historiques.",
  points: [
    {
      id: 'seconde_c_chimie_ch1_p1',
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
          id: 'seconde_c_chimie_ch1_p1_ex1',
          type: 'mcq',
          prompt: "Quelle est la couleur du solide d'oxyde de cuivre II (CuO) formé lors de la combustion du cuivre ?",
          options: ['Noir', 'Rouge vif', 'Bleu ciel', 'Blanc'],
          correctAnswerIndex: 0,
          explanation: "La combustion du cuivre métallique rouge dans le dioxygène de l'air produit une couche superficielle d'oxyde de cuivre II (CuO) de couleur noire."
        },
        {
          id: 'seconde_c_chimie_ch1_p1_ex2',
          type: 'mcq',
          prompt: "Quelle est l'équation-bilan traduisant la combustion complète du cuivre métallique dans le dioxygène ?",
          options: ['2 Cu + O₂ -> 2 CuO', 'Cu + O₂ -> CuO₂', 'Cu + O -> CuO', '4 Cu + O₂ -> 2 Cu₂O'],
          correctAnswerIndex: 0,
          explanation: "Deux atomes de cuivre réagissent avec une molécule de dioxygène pour donner deux unités d'oxyde de cuivre II : 2 Cu + O₂ -> 2 CuO."
        },
        {
          id: 'seconde_c_chimie_ch1_p1_ex3',
          type: 'mcq',
          prompt: "Quel réactif permet de régénérer le cuivre rouge à partir de l'oxyde de cuivre II chauffé ?",
          options: ['Le carbone (C)', 'Le dioxygène (O₂)', "L'eau (H₂O)", "L'azote (N₂)"],
          correctAnswerIndex: 0,
          explanation: "L'action du carbone sur l'oxyde de cuivre II à chaud arrache l'oxygène au cuivre pour former du dioxyde de carbone et régénérer le métal cuivre rouge."
        },
        {
          id: 'seconde_c_chimie_ch1_p1_ex4',
          type: 'mcq',
          prompt: "Quel gaz dégagé lors de la réaction entre CuO et le carbone trouble l'eau de chaux ?",
          options: ['Le dioxyde de carbone (CO₂)', 'Le monoxyde de carbone (CO)', 'Le dihydrogène (H₂)', 'Le diazote (N₂)'],
          correctAnswerIndex: 0,
          explanation: "Le dioxyde de carbone CO₂ est le gaz caractéristique qui trouble l'eau de chaux par formation d'un précipité blanc de carbonate de calcium."
        },
        {
          id: 'seconde_c_chimie_ch1_p1_ex5',
          type: 'mcq',
          prompt: "Quelle espèce chimique est responsable de la couleur bleue initiale de la solution de sulfate de cuivre ?",
          options: ['Les ions cuivre II (Cu²⁺)', 'Les ions sulfate (SO₄²⁻)', 'Les atomes de fer (Fe)', "L'eau pure"],
          correctAnswerIndex: 0,
          explanation: "Les ions hydratés cuivre II Cu²⁺ confèrent leur coloration bleue caractéristique aux solutions aqueuses de cuivre."
        },
        {
          id: 'seconde_c_chimie_ch1_p1_ex6',
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
          id: 'seconde_c_chimie_ch1_p1_ex7',
          type: 'mcq',
          prompt: "Quelle nouvelle espèce chimique colore la solution en vert pâle à la fin de la réaction entre le fer et les ions Cu²⁺ ?",
          options: ['Les ions fer II (Fe²⁺)', 'Les ions fer III (Fe³⁺)', 'Les molécules de dioxygène', 'Les ions chlorure'],
          correctAnswerIndex: 0,
          explanation: "Le fer métallique Fe s'oxyde en cédant deux électrons pour former des ions fer II Fe²⁺ de couleur vert pâle en solution aqueuse."
        },
        {
          id: 'seconde_c_chimie_ch1_p1_ex8',
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
      id: 'seconde_c_chimie_ch1_p2',
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
          id: 'seconde_c_chimie_ch1_p2_ex1',
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
          id: 'seconde_c_chimie_ch1_p2_ex2',
          type: 'mcq',
          prompt: "Parmi les espèces suivantes, laquelle est un corps pur simple ?",
          options: ['Le dioxygène (O₂)', "L'eau (H₂O)", 'Le dioxyde de carbone (CO₂)', "L'ammoniac (NH₃)"],
          correctAnswerIndex: 0,
          explanation: "Le dioxygène O₂ est constitué uniquement d'atomes d'oxygène : c'est un corps pur simple. H₂O, CO₂ et NH₃ sont formés d'éléments différents : ce sont des corps composés."
        },
        {
          id: 'seconde_c_chimie_ch1_p2_ex3',
          type: 'mcq',
          prompt: "Parmi les espèces suivantes, laquelle est un corps pur composé ?",
          options: ['Le méthane (CH₄)', "L'ozone (O₃)", 'Le fer métal (Fe)', 'Le diazote (N₂)'],
          correctAnswerIndex: 0,
          explanation: "Le méthane CH₄ contient deux éléments chimiques distincts (le carbone et l'hydrogène) : c'est donc un corps composé."
        },
        {
          id: 'seconde_c_chimie_ch1_p2_ex4',
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
          id: 'seconde_c_chimie_ch1_p2_ex5',
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
          id: 'seconde_c_chimie_ch1_p2_ex6',
          type: 'mcq',
          prompt: "Combien d'éléments chimiques distincts renferme la molécule de sulfate d'aluminium Al₂(SO₄)₃ ?",
          options: ['3 éléments : Al, S et O', '2 éléments : Al et S', '9 éléments distincts', '1 élément unique'],
          correctAnswerIndex: 0,
          explanation: "La formule Al₂(SO₄)₃ contient 3 éléments chimiques différents : l'aluminium (Al), le soufre (S) et l'oxygène (O)."
        },
        {
          id: 'seconde_c_chimie_ch1_p2_ex7',
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
          id: 'seconde_c_chimie_ch1_p2_ex8',
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
      id: 'seconde_c_chimie_ch1_p3',
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
          note: 'Données officielles du programme de seconde C.'
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
          id: 'seconde_c_chimie_ch1_p3_ex1',
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
          id: 'seconde_c_chimie_ch1_p3_ex2',
          type: 'mcq',
          prompt: "Quel est le symbole chimique officiel de l'élément azote, dérivé de son nom ancien nitrogène ?",
          options: ['N', 'Az', 'A', 'Na'],
          correctAnswerIndex: 0,
          explanation: "L'azote a pour symbole officiel N, issu de son appellation latine Nitrogène."
        },
        {
          id: 'seconde_c_chimie_ch1_p3_ex3',
          type: 'mcq',
          prompt: "Quel est le symbole chimique de l'élément sodium, dérivé du latin natrium ?",
          options: ['Na', 'So', 'S', 'Sd'],
          correctAnswerIndex: 0,
          explanation: "Le symbole du sodium est Na, provenant du terme latin Natrium (S étant réservé au soufre)."
        },
        {
          id: 'seconde_c_chimie_ch1_p3_ex4',
          type: 'mcq',
          prompt: "Quel est le symbole chimique de l'élément potassium, dérivé du latin kalium ?",
          options: ['K', 'P', 'Po', 'Pt'],
          correctAnswerIndex: 0,
          explanation: "Le symbole du potassium est K (du latin Kalium), la lettre P désignant le phosphore."
        },
        {
          id: 'seconde_c_chimie_ch1_p3_ex5',
          type: 'mcq',
          prompt: "Quel est le symbole chimique de l'élément or, dérivé du latin aurum ?",
          options: ['Au', 'O', 'Or', 'Ar'],
          correctAnswerIndex: 0,
          explanation: "L'or a pour symbole Au (du latin Aurum), O étant l'oxygène et Ar l'argon."
        },
        {
          id: 'seconde_c_chimie_ch1_p3_ex6',
          type: 'mcq',
          prompt: "Quel élément chimique a pour symbole W, provenant de son nom d'origine wolfram ?",
          options: ['Le tungstène', 'Le plomb', "L'étain", 'Le zinc'],
          correctAnswerIndex: 0,
          explanation: "Le tungstène a pour symbole officiel W, du nom allemand de son minerai le wolfram."
        },
        {
          id: 'seconde_c_chimie_ch1_p3_ex7',
          type: 'mcq',
          prompt: "Combien d'éléments chimiques naturels dénombre-t-on sur les 118 éléments répertoriés ?",
          options: ['93 éléments naturels', '118 éléments naturels', '50 éléments naturels', '25 éléments naturels'],
          correctAnswerIndex: 0,
          explanation: "Sur les 118 éléments connus, 93 existent à l'état naturel sur Terre ou dans l'espace, les 25 autres étant créés artificiellement en laboratoire."
        },
        {
          id: 'seconde_c_chimie_ch1_p3_ex8',
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
export const chimie2deCStructureAtomeChapter: CurriculumChapter = {
  id: 'seconde_c_chimie_ch2_structure_de_l_atome',
  subjectId: 'physique_chimie',
  gradeLevel: 'seconde_c',
  order: 2,
  officialVolumeHours: 8,
  title: "Leçon 2 — Structure de l'atome",
  summary:
    "Constituants de l'atome (protons, neutrons, électrons), numéro atomique Z, nombre de masse A, nucléides et isotopes, masse et dimensions (structure lacunaire), structure électronique en couches K, L, M et représentation de Lewis.",
  points: [
    {
      id: 'seconde_c_chimie_ch2_p1',
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
          id: 'seconde_c_chimie_ch2_p1_ex1',
          type: 'mcq',
          prompt: "Quels sont les deux types de particules qui composent les nucléons du noyau atomique ?",
          options: ['Les protons et les neutrons', 'Les protons et les électrons', 'Les neutrons et les électrons', 'Les ions et les molécules'],
          correctAnswerIndex: 0,
          explanation: "Le noyau atomique est constitué exclusivement de nucléons, qui regroupent les protons (chargés positivement) et les neutrons (électriquement neutres)."
        },
        {
          id: 'seconde_c_chimie_ch2_p1_ex2',
          type: 'mcq',
          prompt: "Quelle est la charge électrique d'un électron ?",
          options: ['-1,6 × 10⁻¹⁹ C', '+1,6 × 10⁻¹⁹ C', '0 C', '+3,2 × 10⁻¹⁹ C'],
          correctAnswerIndex: 0,
          explanation: "L'électron porte une charge négative égale à l'opposé de la charge élémentaire : q_e = -e = -1,6 × 10⁻¹⁹ C."
        },
        {
          id: 'seconde_c_chimie_ch2_p1_ex3',
          type: 'mcq',
          prompt: "Quelle est la charge électrique d'un neutron ?",
          options: ['0 C (neutre)', '+1,6 × 10⁻¹⁹ C', '-1,6 × 10⁻¹⁹ C', '-3,2 × 10⁻¹⁹ C'],
          correctAnswerIndex: 0,
          explanation: "Comme son nom l'indique, le neutron est électriquement neutre : sa charge est nulle (0 C)."
        },
        {
          id: 'seconde_c_chimie_ch2_p1_ex4',
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
          id: 'seconde_c_chimie_ch2_p1_ex5',
          type: 'mcq',
          prompt: "Si le noyau d'un atome de calcium contient 20 protons, combien d'électrons gravitent autour de ce noyau dans l'atome neutre ?",
          options: ['20 électrons', '40 électrons', '10 électrons', '0 électron'],
          correctAnswerIndex: 0,
          explanation: "Pour respecter l'électroneutralité, un atome neutre possédant 20 protons contient obligatoirement 20 électrons."
        },
        {
          id: 'seconde_c_chimie_ch2_p1_ex6',
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
          id: 'seconde_c_chimie_ch2_p1_ex7',
          type: 'mcq',
          prompt: "Quelle est la valeur de la charge électrique élémentaire e ?",
          options: ['1,6 × 10⁻¹⁹ C', '9,1 × 10⁻³¹ C', '1,67 × 10⁻²⁷ C', '6,02 × 10²³ C'],
          correctAnswerIndex: 0,
          explanation: "La charge électrique élémentaire est une constante physique universelle valant e = 1,6 × 10⁻¹⁹ Coulomb."
        },
        {
          id: 'seconde_c_chimie_ch2_p1_ex8',
          type: 'mcq',
          prompt: "Le noyau d'un atome porte une charge positive totale Q = +30,4 × 10⁻¹⁹ C. Combien de protons renferme ce noyau ?",
          options: ['19 protons', '20 protons', '16 protons', '39 protons'],
          correctAnswerIndex: 0,
          explanation: "Le nombre de protons est Z = Q / e = (30,4 × 10⁻¹⁹) / (1,6 × 10⁻¹⁹) = 19 protons (il s'agit de l'élément potassium K)."
        }
      ]
    },
    {
      id: 'seconde_c_chimie_ch2_p2',
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
          id: 'seconde_c_chimie_ch2_p2_ex1',
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
          id: 'seconde_c_chimie_ch2_p2_ex2',
          type: 'mcq',
          prompt: "Combien de neutrons renferme le noyau du nucléide de sodium ²³₁₁Na ?",
          options: ['12 neutrons', '11 neutrons', '23 neutrons', '34 neutrons'],
          correctAnswerIndex: 0,
          explanation: "Le nombre de neutrons est N = A - Z = 23 - 11 = 12 neutrons."
        },
        {
          id: 'seconde_c_chimie_ch2_p2_ex3',
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
          id: 'seconde_c_chimie_ch2_p2_ex4',
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
          id: 'seconde_c_chimie_ch2_p2_ex5',
          type: 'mcq',
          prompt: "Parmi les couples de nucléides suivants, lequel représente des isotopes ?",
          options: ['²³⁵₉₂U et ²³⁸₉₂U', '¹⁴₆C et ¹⁴₇N', '²³₁₁Na et ²⁴₁₂Mg', '¹⁶₈O et ¹⁹₉F'],
          correctAnswerIndex: 0,
          explanation: "²³⁵₉₂U et ²³⁸₉₂U ont tous deux Z = 92 (même élément uranium) avec des nombres de masse différents (235 et 238) : ce sont des isotopes."
        },
        {
          id: 'seconde_c_chimie_ch2_p2_ex6',
          type: 'mcq',
          prompt: "Les nucléides du carbone ¹²₆C, ¹³₆C et ¹⁴₆C possèdent respectivement combien de neutrons ?",
          options: ['6, 7 et 8 neutrons', '12, 13 et 14 neutrons', '6 neutrons chacun', '0, 1 et 2 neutrons'],
          correctAnswerIndex: 0,
          explanation: "Pour chaque isotope : N(¹²C) = 12 - 6 = 6 ; N(¹³C) = 13 - 6 = 7 ; N(¹⁴C) = 14 - 6 = 8 neutrons."
        },
        {
          id: 'seconde_c_chimie_ch2_p2_ex7',
          type: 'mcq',
          prompt: "Qu'est-ce qui caractérise un élément chimique de manière unique ?",
          options: ['Son numéro atomique Z', 'Son nombre de neutrons N', 'Son nombre de masse A', 'Sa température de fusion'],
          correctAnswerIndex: 0,
          explanation: "Tous les atomes ayant le même numéro atomique Z appartiennent obligatoirement au même élément chimique. Z est l'identifiant fondamental de l'élément."
        },
        {
          id: 'seconde_c_chimie_ch2_p2_ex8',
          type: 'mcq',
          prompt: "Un atome X possède 20 neutrons et un nombre de masse A = 39. Quel est son numéro atomique Z et quel est cet élément ?",
          options: ['Z = 19 (Potassium K)', 'Z = 20 (Calcium Ca)', 'Z = 18 (Argon Ar)', 'Z = 39 (Yttrium Y)'],
          correctAnswerIndex: 0,
          explanation: "Z = A - N = 39 - 20 = 19. L'élément de numéro atomique 19 est le potassium (K)."
        }
      ]
    },
    {
      id: 'seconde_c_chimie_ch2_p3',
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
          id: 'seconde_c_chimie_ch2_p3_ex1',
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
          id: 'seconde_c_chimie_ch2_p3_ex2',
          type: 'mcq',
          prompt: "Quelle formule permet de calculer la masse approximative d'un atome de nombre de masse A ?",
          options: ['m = A × m_p', 'm = Z × m_e', 'm = (A - Z) × m_e', 'm = A / m_p'],
          correctAnswerIndex: 0,
          explanation: "La masse de l'atome est pratiquement égale à celle de ses nucléons : m_atome ≈ A × m_p."
        },
        {
          id: 'seconde_c_chimie_ch2_p3_ex3',
          type: 'mcq',
          prompt: "Quelle est la masse approximative d'un atome de magnésium ²⁴₁₂Mg (avec m_p = 1,67 × 10⁻²⁷ kg) ?",
          options: ['4,01 × 10⁻²⁶ kg', '2,00 × 10⁻²⁶ kg', '1,67 × 10⁻²⁷ kg', '2,40 × 10⁻²³ kg'],
          correctAnswerIndex: 0,
          explanation: "m = 24 × (1,67 × 10⁻²⁷ kg) = 4,008 × 10⁻²⁶ kg ≈ 4,01 × 10⁻²⁶ kg."
        },
        {
          id: 'seconde_c_chimie_ch2_p3_ex4',
          type: 'mcq',
          prompt: "Quel est l'ordre de grandeur du rayon d'un atome ?",
          options: ['10⁻¹⁰ m', '10⁻¹⁵ m', '10⁻³ m', '10⁻⁶ m'],
          correctAnswerIndex: 0,
          explanation: "Le rayon d'un atome est de l'ordre de 10⁻¹⁰ m (soit 0,1 nanomètre ou 1 ångström)."
        },
        {
          id: 'seconde_c_chimie_ch2_p3_ex5',
          type: 'mcq',
          prompt: "Quel est l'ordre de grandeur du rayon du noyau atomique ?",
          options: ['10⁻¹⁵ m', '10⁻¹⁰ m', '10⁻² m', '10⁻²⁷ m'],
          correctAnswerIndex: 0,
          explanation: "Le noyau est minuscule : son rayon est de l'ordre de 10⁻¹⁵ m (soit 1 femtomètre)."
        },
        {
          id: 'seconde_c_chimie_ch2_p3_ex6',
          type: 'mcq',
          prompt: "Combien de fois environ l'atome est-il plus grand que son noyau ?",
          options: ['100 000 fois plus grand', '10 fois plus grand', '2 fois plus grand', '1 000 000 000 fois plus grand'],
          correctAnswerIndex: 0,
          explanation: "Le rapport R_atome / R_noyau ≈ 10⁻¹⁰ / 10⁻¹⁵ = 10⁵ = 100 000 fois."
        },
        {
          id: 'seconde_c_chimie_ch2_p3_ex7',
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
          id: 'seconde_c_chimie_ch2_p3_ex8',
          type: 'mcq',
          prompt: "Quel physicien a mis en évidence la structure lacunaire de l'atome en bombardant une feuille d'or avec des particules alpha en 1910 ?",
          options: ['Ernest Rutherford', 'J.J. Thomson', 'John Dalton', 'Niels Bohr'],
          correctAnswerIndex: 0,
          explanation: "C'est Ernest Rutherford en 1910 qui a démontré que la quasi-totalité des particules traversent la feuille d'or sans déviation, prouvant le vide atomique."
        }
      ]
    },
    {
      id: 'seconde_c_chimie_ch2_p4',
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
          id: 'seconde_c_chimie_ch2_p4_ex1',
          type: 'mcq',
          prompt: "Quel est le nombre maximal d'électrons que peut contenir la couche K (n = 1) ?",
          options: ['2 électrons', '8 électrons', '18 électrons', '4 électrons'],
          correctAnswerIndex: 0,
          explanation: "Selon la règle des 2n², pour n = 1, le nombre maximal est 2 × 1² = 2 électrons."
        },
        {
          id: 'seconde_c_chimie_ch2_p4_ex2',
          type: 'mcq',
          prompt: "Quel est le nombre maximal d'électrons que peut contenir la couche L (n = 2) ?",
          options: ['8 électrons', '2 électrons', '18 électrons', '32 électrons'],
          correctAnswerIndex: 0,
          explanation: "Pour la couche L (n = 2), la capacité maximale est 2 × 2² = 2 × 4 = 8 électrons."
        },
        {
          id: 'seconde_c_chimie_ch2_p4_ex3',
          type: 'mcq',
          prompt: "Quelle est la formule électronique de l'atome de carbone (Z = 6) ?",
          options: ['K² L⁴', 'K⁶', 'K⁴ L²', 'K² L⁸'],
          correctAnswerIndex: 0,
          explanation: "L'atome de carbone possède 6 électrons : 2 saturent la couche K, et les 4 restants se placent sur la couche L, soit K² L⁴."
        },
        {
          id: 'seconde_c_chimie_ch2_p4_ex4',
          type: 'mcq',
          prompt: "Quelle est la formule électronique de l'atome de chlore (Z = 17) ?",
          options: ['K² L⁸ M⁷', 'K² L⁹ M⁶', 'K² L⁷ M⁸', 'K¹⁰ L⁷'],
          correctAnswerIndex: 0,
          explanation: "17 électrons se répartissent en saturant K avec 2, puis L avec 8, laissant 7 électrons sur M : K² L⁸ M⁷."
        },
        {
          id: 'seconde_c_chimie_ch2_p4_ex5',
          type: 'mcq',
          prompt: "Combien d'électrons externes (électrons de valence) possède l'atome d'aluminium (Z = 13, de formule K² L⁸ M³) ?",
          options: ['3 électrons', '13 électrons', '8 électrons', '2 électrons'],
          correctAnswerIndex: 0,
          explanation: "La couche externe est la couche M, qui compte 3 électrons. Ce sont les 3 électrons de valence de l'aluminium."
        },
        {
          id: 'seconde_c_chimie_ch2_p4_ex6',
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
          id: 'seconde_c_chimie_ch2_p4_ex7',
          type: 'mcq',
          prompt: "Combien d'électrons célibataires possède l'atome de carbone (K² L⁴) dans son schéma de Lewis ?",
          options: ['4 électrons célibataires', '2 électrons célibataires', '0 électron célibataire', '1 électron célibataire'],
          correctAnswerIndex: 0,
          explanation: "Le carbone possède 4 électrons externes répartis sous forme de 4 électrons célibataires (tétravalence du carbone)."
        },
        {
          id: 'seconde_c_chimie_ch2_p4_ex8',
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
export const chimie2deCClassificationPeriodiqueChapter: CurriculumChapter = {
  id: 'seconde_c_chimie_ch3_classification_periodique',
  subjectId: 'physique_chimie',
  gradeLevel: 'seconde_c',
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
      id: 'seconde_c_chimie_ch3_p1',
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
          id: 'seconde_c_chimie_ch3_p1_ex1',
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
          id: 'seconde_c_chimie_ch3_p1_ex2',
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
          id: 'seconde_c_chimie_ch3_p1_ex3',
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
          id: 'seconde_c_chimie_ch3_p1_ex4',
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
          id: 'seconde_c_chimie_ch3_p1_ex5',
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
          id: 'seconde_c_chimie_ch3_p1_ex6',
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
          id: 'seconde_c_chimie_ch3_p1_ex7',
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
          id: 'seconde_c_chimie_ch3_p1_ex8',
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
      id: 'seconde_c_chimie_ch3_p2',
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
          id: 'seconde_c_chimie_ch3_p2_ex1',
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
          id: 'seconde_c_chimie_ch3_p2_ex2',
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
          id: 'seconde_c_chimie_ch3_p2_ex3',
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
          id: 'seconde_c_chimie_ch3_p2_ex4',
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
          id: 'seconde_c_chimie_ch3_p2_ex5',
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
          id: 'seconde_c_chimie_ch3_p2_ex6',
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
          id: 'seconde_c_chimie_ch3_p2_ex7',
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
          id: 'seconde_c_chimie_ch3_p2_ex8',
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
      id: 'seconde_c_chimie_ch3_p3',
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
          id: 'seconde_c_chimie_ch3_p3_ex1',
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
          id: 'seconde_c_chimie_ch3_p3_ex2',
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
          id: 'seconde_c_chimie_ch3_p3_ex3',
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
          id: 'seconde_c_chimie_ch3_p3_ex4',
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
          id: 'seconde_c_chimie_ch3_p3_ex5',
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
          id: 'seconde_c_chimie_ch3_p3_ex6',
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
          id: 'seconde_c_chimie_ch3_p3_ex7',
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
          id: 'seconde_c_chimie_ch3_p3_ex8',
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
export const chimie2deCIonsEtMoleculesChapter: CurriculumChapter = {
  id: 'seconde_c_chimie_ch4_ions_et_molecules',
  subjectId: 'physique_chimie',
  gradeLevel: 'seconde_c',
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
      id: 'seconde_c_chimie_ch4_p1',
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
          id: 'seconde_c_chimie_ch4_p1_ex1',
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
          id: 'seconde_c_chimie_ch4_p1_ex2',
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
          id: 'seconde_c_chimie_ch4_p1_ex3',
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
          id: 'seconde_c_chimie_ch4_p1_ex4',
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
          id: 'seconde_c_chimie_ch4_p1_ex5',
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
          id: 'seconde_c_chimie_ch4_p1_ex6',
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
          id: 'seconde_c_chimie_ch4_p1_ex7',
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
          id: 'seconde_c_chimie_ch4_p1_ex8',
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
      id: 'seconde_c_chimie_ch4_p2',
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
          id: 'seconde_c_chimie_ch4_p2_ex1',
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
          id: 'seconde_c_chimie_ch4_p2_ex2',
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
          id: 'seconde_c_chimie_ch4_p2_ex3',
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
          id: 'seconde_c_chimie_ch4_p2_ex4',
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
          id: 'seconde_c_chimie_ch4_p2_ex5',
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
          id: 'seconde_c_chimie_ch4_p2_ex6',
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
          id: 'seconde_c_chimie_ch4_p2_ex7',
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
          id: 'seconde_c_chimie_ch4_p2_ex8',
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
      id: 'seconde_c_chimie_ch4_p3',
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
          id: 'seconde_c_chimie_ch4_p3_ex1',
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
          id: 'seconde_c_chimie_ch4_p3_ex2',
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
          id: 'seconde_c_chimie_ch4_p3_ex3',
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
          id: 'seconde_c_chimie_ch4_p3_ex4',
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
          id: 'seconde_c_chimie_ch4_p3_ex5',
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
          id: 'seconde_c_chimie_ch4_p3_ex6',
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
          id: 'seconde_c_chimie_ch4_p3_ex7',
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
          id: 'seconde_c_chimie_ch4_p3_ex8',
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
export const chimie2deCMoleEtGrandeursMolairesChapter: CurriculumChapter = {
  id: 'seconde_c_chimie_ch5_mole_et_grandeurs_molaires',
  subjectId: 'physique_chimie',
  gradeLevel: 'seconde_c',
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
      id: 'seconde_c_chimie_ch5_p1',
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
          id: 'seconde_c_chimie_ch5_p1_ex1',
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
          id: 'seconde_c_chimie_ch5_p1_ex2',
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
          id: 'seconde_c_chimie_ch5_p1_ex3',
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
          id: 'seconde_c_chimie_ch5_p1_ex4',
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
          id: 'seconde_c_chimie_ch5_p1_ex5',
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
          id: 'seconde_c_chimie_ch5_p1_ex6',
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
          id: 'seconde_c_chimie_ch5_p1_ex7',
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
          id: 'seconde_c_chimie_ch5_p1_ex8',
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
      id: 'seconde_c_chimie_ch5_p2',
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
          id: 'seconde_c_chimie_ch5_p2_ex1',
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
          id: 'seconde_c_chimie_ch5_p2_ex2',
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
          id: 'seconde_c_chimie_ch5_p2_ex3',
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
          id: 'seconde_c_chimie_ch5_p2_ex4',
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
          id: 'seconde_c_chimie_ch5_p2_ex5',
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
          id: 'seconde_c_chimie_ch5_p2_ex6',
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
          id: 'seconde_c_chimie_ch5_p2_ex7',
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
          id: 'seconde_c_chimie_ch5_p2_ex8',
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
      id: 'seconde_c_chimie_ch5_p3',
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
          id: 'seconde_c_chimie_ch5_p3_ex1',
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
          id: 'seconde_c_chimie_ch5_p3_ex2',
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
          id: 'seconde_c_chimie_ch5_p3_ex3',
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
          id: 'seconde_c_chimie_ch5_p3_ex4',
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
          id: 'seconde_c_chimie_ch5_p3_ex5',
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
          id: 'seconde_c_chimie_ch5_p3_ex6',
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
          id: 'seconde_c_chimie_ch5_p3_ex7',
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
          id: 'seconde_c_chimie_ch5_p3_ex8',
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
// LEÇON 6 : ÉQUATION-BILAN D'UNE RÉACTION CHIMIQUE
// ============================================================================

export const chimie2deCEquationBilanChapter: CurriculumChapter = {
  "id": "seconde_c_chimie_ch6_equation_bilan",
  "subjectId": "physique_chimie",
  "gradeLevel": "seconde_c",
  "order": 6,
  "officialVolumeHours": 8,
  "title": "Leçon 6 — Équation-bilan d'une réaction chimique",
  "summary": "Écriture et équilibrage d'une équation-bilan, coefficients stœchiométriques, bilan molaire, réactif limitant et en excès, loi de Lavoisier sur la conservation de la masse, bilan massique et bilan volumique des gaz.",
  "points": [
    {
      "id": "seconde_c_chimie_ch6_p1",
      "order": 1,
      "title": "Équation-bilan, stœchiométrie et réactif limitant",
      "summary": "Règles d'écriture et d'équilibrage d'une équation chimique, signification des coefficients stœchiométriques, proportions stœchiométriques et détermination du réactif limitant.",
      "conceptExplanation": "Une transformation chimique est un processus au cours duquel des espèces chimiques (les réactifs) disparaissent pour former de nouvelles espèces chimiques (les produits).\n\n1. Définition de l'équation-bilan :\nL'équation-bilan est la modélisation symbolique d'une réaction chimique. Elle s'écrit de manière générale :\na A + b B -> c C + d D\n- Les espèces A et B sont les réactifs (présents à l'état initial).\n- Les espèces C et D sont les produits (présents à l'état final).\n- Les nombres a, b, c et d sont les coefficients stœchiométriques. Ce sont des nombres entiers (ou rationnels simples) choisis pour assurer la conservation de chaque type d'atome.\n- Conventions de lecture : le signe « + » signifie « réagit avec » du côté des réactifs et « et » du côté des produits ; la flèche « -> » signifie « pour donner ».\n\n2. Règle d'ajustement (équilibrage) des coefficients :\nAu cours d'une réaction chimique, aucun atome ne se crée, aucun atome ne se détruit : les atomes des réactifs se réarrangent pour former les molécules des produits.\nExemples d'équilibrage :\n- Combustion du propane dans le dioxygène : C₃H₈ + 5 O₂ -> 3 CO₂ + 4 H₂O.\n- Réduction de l'oxyde de cuivre II par le carbone : 2 CuO + C -> 2 Cu + CO₂.\n- Réaction entre l'aluminium et le soufre : 2 Al + 3 S -> Al₂S₃.\n\n3. Bilan molaire et proportions stœchiométriques :\nLes coefficients stœchiométriques indiquent les proportions dans lesquelles les quantités de matière (en moles) réagissent et se forment :\n- Pour la réaction a A + b B -> c C + d D :\n  nA(réagi) / a = nB(réagi) / b = nC(formé) / c = nD(formé) / d.\n- Mélange stœchiométrique : Si les réactifs initiaux sont introduits dans les proportions nA(initial) / a = nB(initial) / b, alors tous les réactifs sont totalement consommés en même temps à la fin de la transformation : il ne reste aucun réactif en fin de réaction.\n\n4. Réactif limitant et réactif en excès :\nLorsque les réactifs ne sont pas introduits en proportions stœchiométriques :\n- On compare les rapports molaires initiaux nA / a et nB / b :\n  * Si nA / a < nB / b : le réactif A est en défaut (il s'épuise en premier). Il est appelé le RÉACTIF LIMITANT. C'est lui qui stoppe la réaction.\n  * Le réactif B est en excès (il en reste après la fin de la réaction).\n  * Quantité restante de B : n'(B) = nB(initial) - (b / a) x nA(initial).",
      "formulas": [
        {
          "name": "Bilan molaire stœchiométrique",
          "formula": "nA / a = nB / b = nC / c = nD / d",
          "note": "Relation fondamentale reliant les moles consommées et produites."
        },
        {
          "name": "Condition du réactif limitant",
          "formula": "Si nA / a < nB / b ⟹ A est limitant",
          "note": "Le réactif ayant le rapport molaire initial le plus faible s'épuise en premier."
        },
        {
          "name": "Quantité restante du réactif en excès",
          "formula": "n'(B) = nB(initial) − (b/a) · nA(initial)",
          "note": "Mole de réactif en excès n'ayant pas réagi."
        }
      ],
      "keyRule": "Pour identifier le réactif limitant, on divise la quantité de matière initiale de chaque réactif par son coefficient stœchiométrique respectif. Le plus petit quotient désigne impérativement le réactif limitant.",
      "workedExample": {
        "title": "Identification du réactif limitant et calcul des moles produites",
        "statement": "On mélange 0,4 mol d'aluminium métallique (Al) et 0,9 mol de soufre en poudre (S). Par chauffage, il se forme du sulfure d'aluminium Al₂S₃ selon l'équation : 2 Al + 3 S -> Al₂S₃. 1) Le mélange est-il stœchiométrique ? 2) Quel est le réactif limitant ? 3) Détermine la quantité de matière de Al₂S₃ formé et la quantité restante de réactif en excès.",
        "methodSteps": [
          "1. Calculer les rapports stœchiométriques initiaux : n(Al) / 2 = 0,4 / 2 = 0,20 mol ; n(S) / 3 = 0,9 / 3 = 0,30 mol.",
          "2. Comparer les rapports : 0,20 < 0,30, donc n(Al) / 2 < n(S) / 3. Les réactifs ne sont pas en proportions stœchiométriques.",
          "3. Identifier le réactif limitant : Le quotient le plus faible correspond à l'aluminium Al. L'aluminium Al est donc le réactif limitant (il sera entièrement consommé). Le soufre S est en excès.",
          "4. Calculer la quantité de Al₂S₃ formé : D'après le bilan stœchiométrique basé sur le réactif limitant : n(Al₂S₃) = n(Al) / 2 = 0,4 / 2 = 0,20 mol.",
          "5. Calculer le soufre consommé et restant : n(S réagi) = 3 x (n(Al) / 2) = 3 x 0,20 = 0,60 mol. Quantité de soufre restante : n'(S) = n(S initial) - n(S réagi) = 0,90 - 0,60 = 0,30 mol."
        ],
        "conclusion": "L'aluminium est le réactif limitant, il se forme 0,20 mol de Al₂S₃ et il reste 0,30 mol de soufre non consommé."
      },
      "exercises": [
        {
          "id": "seconde_c_chimie_ch6_p1_ex1",
          "type": "mcq",
          "prompt": "Quelle est l'équation-bilan correctement équilibrée pour la réaction entre le fer (Fe) et le dioxygène (O₂) produisant de l'oxyde ferrique (Fe₂O₃) ?",
          "options": [
            "4 Fe + 3 O₂ -> 2 Fe₂O₃",
            "2 Fe + 3 O₂ -> Fe₂O₃",
            "Fe + O₂ -> Fe₂O₃",
            "4 Fe + O₂ -> 2 Fe₂O₃"
          ],
          "correctAnswerIndex": 0,
          "explanation": "4 Fe (4 atomes de fer) et 3 O₂ (6 atomes d'oxygène) donnent 2 Fe₂O₃ (4 atomes de fer et 6 atomes d'oxygène). La conservation des atomes est vérifiée."
        },
        {
          "id": "seconde_c_chimie_ch6_p1_ex2",
          "type": "mcq",
          "prompt": "Soit la réaction 2 Al + 3 S -> Al₂S₃. Que vaut le rapport stœchiométrique reliant n(Al) et n(S) consommés ?",
          "options": [
            "n(Al) / 2 = n(S) / 3",
            "2 n(Al) = 3 n(S)",
            "n(Al) / 3 = n(S) / 2",
            "n(Al) + n(S) = 1"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les quantités de réactifs consommés sont proportionnelles à leurs coefficients stœchiométriques respectifs : n(Al) / 2 = n(S) / 3."
        },
        {
          "id": "seconde_c_chimie_ch6_p1_ex3",
          "type": "mcq",
          "prompt": "On fait réagir 2 moles de méthane CH₄ avec 3 moles de dioxygène O₂ selon : CH₄ + 2 O₂ -> CO₂ + 2 H₂O. Quel est le réactif limitant ?",
          "options": [
            "Le dioxygène O₂ car 3/2 = 1,5 < 2/1 = 2",
            "Le méthane CH₄ car 2 < 3",
            "Le mélange est stœchiométrique",
            "Le dioxyde de carbone CO₂"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Rapports initiaux : n(CH₄)/1 = 2/1 = 2 mol ; n(O₂)/2 = 3/2 = 1,5 mol. Comme 1,5 < 2, O₂ est en défaut et constitue le réactif limitant."
        },
        {
          "id": "seconde_c_chimie_ch6_p1_ex4",
          "type": "mcq",
          "prompt": "Dans la réaction 2 H₂ + O₂ -> 2 H₂O, si l'on consomme totalement 6 moles de H₂, combien de moles de H₂O sont formées ?",
          "options": [
            "6 moles",
            "3 moles",
            "12 moles",
            "4 moles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D'après les coefficients stœchiométriques, n(H₂O)/2 = n(H₂)/2, ce qui signifie que n(H₂O) = n(H₂) = 6 moles."
        },
        {
          "id": "seconde_c_chimie_ch6_p1_ex5",
          "type": "mcq",
          "prompt": "Que signifie concrètement qu'un mélange de réactifs est 'stœchiométrique' ?",
          "options": [
            "Tous les réactifs sont entièrement consommés à la fin de la réaction",
            "Il y a exactement le même nombre de grammes de chaque réactif",
            "La réaction dégage de la chaleur",
            "L'un des réactifs reste en grande quantité"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans un mélange stœchiométrique, les proportions initiales correspondent exactement aux coefficients de l'équation : tous les réactifs disparaissent en même temps."
        },
        {
          "id": "seconde_c_chimie_ch6_p1_ex6",
          "type": "mcq",
          "prompt": "Soit la combustion de l'éthanol : C₂H₆O + 3 O₂ -> 2 CO₂ + 3 H₂O. Combien de moles de O₂ sont nécessaires pour brûler 2 moles de C₂H₆O ?",
          "options": [
            "6 moles",
            "3 moles",
            "2 moles",
            "5 moles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le bilan stœchiométrique impose n(O₂)/3 = n(C₂H₆O)/1. Pour n(C₂H₆O) = 2 moles, n(O₂) = 3 x 2 = 6 moles."
        },
        {
          "id": "seconde_c_chimie_ch6_p1_ex7",
          "type": "mcq",
          "prompt": "Soit la réaction N₂ + 3 H₂ -> 2 NH₃. Si on part de 1 mol de N₂ et 4 mol de H₂, quelle est la quantité de H₂ restante à la fin ?",
          "options": [
            "1 mole",
            "3 moles",
            "0 mole",
            "2 moles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "1 mol de N₂ consomme 3 x 1 = 3 mol de H₂. N₂ est le réactif limitant. Quantité de H₂ restante : 4 - 3 = 1 mole."
        },
        {
          "id": "seconde_c_chimie_ch6_p1_ex8",
          "type": "mcq",
          "prompt": "Quel est le coefficient stœchiométrique de O₂ dans l'équation équilibrée de combustion du butane : 2 C₄H₁₀ + ... O₂ -> 8 CO₂ + 10 H₂O ?",
          "options": [
            "13",
            "26",
            "10",
            "8"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les produits contiennent (8 x 2) + (10 x 1) = 26 atomes d'oxygène. Il faut donc 13 molécules de O₂ (13 x 2 = 26 atomes O)."
        }
      ]
    },
    {
      "id": "seconde_c_chimie_ch6_p2",
      "order": 2,
      "title": "Conservation de la matière (Lavoisier), bilans massiques et volumiques",
      "summary": "Énoncé de la loi de Lavoisier sur la conservation de la masse, calcul des bilans massiques (m = n x M), et bilans volumiques pour les corps gazeux (loi d'Avogadro-Ampère).",
      "conceptExplanation": "La chimie quantitative moderne a été fondée par Antoine-Laurent de Lavoisier à la fin du XVIIIe siècle grâce à l'usage systématique de la balance de précision.\n\n1. Loi de conservation de la masse (Loi de Lavoisier) :\n« Au cours d'une réaction chimique dans un système fermé, la masse totale des substances formées (produits) est rigoureusement égale à la masse totale des substances consommées (réactifs transformés). »\n∑ m(réactifs consommés) = ∑ m(produits formés).\nCette loi découle directement du fait que les atomes se conservent en genre et en nombre au cours d'une transformation chimique.\n\n2. Bilan massique d'une réaction chimique :\nÀ partir de l'équation-bilan a A + b B -> c C + d D et des masses molaires respectives M(A), M(B), M(C), M(D) :\n- Les masses réagissant selon les proportions stœchiométriques sont :\n  m(A) = a x M(A), m(B) = b x M(B), m(C) = c x M(C), m(D) = d x M(D).\n- La loi de Lavoisier impose alors : [a x M(A)] + [b x M(B)] = [c x M(C)] + [d x M(D)].\n- Exemple : 3 Fe + 2 O₂ -> Fe₃O₄\n  m(Fe) = 3 x 55,8 = 167,4 g\n  m(O₂) = 2 x 32 = 64,0 g\n  Somme des réactifs = 167,4 + 64,0 = 231,4 g.\n  m(Fe₃O₄) = (3 x 55,8) + (4 x 16) = 167,4 + 64 = 231,4 g.\n  La conservation est parfaitement vérifiée.\n\n3. Bilan volumique pour les gaz (Loi d'Avogadro-Ampère) :\nD'après la loi d'Avogadro-Ampère, dans les mêmes conditions de température et de pression, des volumes égaux de gaz différents renferment le même nombre de moles (Vm est identique pour tous les gaz) :\n- Comme V = n x Vm, les volumes gazeux mesurés dans les mêmes conditions de température et de pression sont proportionnels aux coefficients stœchiométriques de l'équation :\n  VA / a = VB / b = VC / c = VD / d.\n- Exemple de combustion du propane C₃H₈ (g) + 5 O₂ (g) -> 3 CO₂ (g) + 4 H₂O (g) :\n  1 volume de C₃H₈ consomme 5 volumes de O₂ pour former 3 volumes de CO₂ et 4 volumes de vapeur d'eau :\n  V(O₂) = 5 x V(C₃H₈) et V(CO₂) = 3 x V(C₃H₈).\n- Volume d'air nécessaire : Comme l'air contient en volume environ 20% (1/5) de dioxygène et 80% (4/5) de diazote, le volume d'air nécessaire à une combustion complète vaut :\n  V(air) = 5 x V(O₂).",
      "formulas": [
        {
          "name": "Loi de conservation de la masse",
          "formula": "∑ m(réactifs consommés) = ∑ m(produits formés)",
          "note": "Principe de Lavoisier fondamental en système fermé."
        },
        {
          "name": "Relation masse et mole",
          "formula": "m = n × M",
          "note": "Permet de convertir un bilan molaire en bilan massique."
        },
        {
          "name": "Bilan volumique des gaz (à T et P constantes)",
          "formula": "VA / a = VB / b = VC / c",
          "note": "Proportionnalité directe des volumes gazeux (loi d'Avogadro-Ampère)."
        },
        {
          "name": "Volume d'air pour une combustion",
          "formula": "V(air) = 5 × V(O₂)",
          "note": "L'air contient environ 20% de dioxygène en volume."
        }
      ],
      "keyRule": "La masse totale se conserve toujours au cours d'une réaction chimique. Pour des gaz dans les mêmes conditions de température et de pression, les volumes réagissent et se forment exactement dans le rapport des coefficients stœchiométriques.",
      "workedExample": {
        "title": "Calcul du bilan volumique et de la masse formée lors d'une combustion",
        "statement": "On brûle complètement 20 cm³ de gaz butane (C₄H₁₀) dans du dioxygène pur selon l'équation : 2 C₄H₁₀ (g) + 13 O₂ (g) -> 8 CO₂ (g) + 10 H₂O (l). 1) Calcule le volume de O₂ nécessaire et le volume d'air correspondant. 2) Calcule le volume de CO₂ gazeux dégagé dans les mêmes conditions.",
        "methodSteps": [
          "1. Établir la relation volumique stœchiométrique entre les gaz : V(C₄H₁₀) / 2 = V(O₂) / 13 = V(CO₂) / 8.",
          "2. Calculer le volume de dioxygène V(O₂) : V(O₂) = (13 / 2) x V(C₄H₁₀) = 6,5 x 20 = 130 cm³.",
          "3. Calculer le volume d'air correspondant : L'air contenant environ 20% de O₂, V(air) = 5 x V(O₂) = 5 x 130 = 650 cm³.",
          "4. Calculer le volume de CO₂ dégagé : V(CO₂) = (8 / 2) x V(C₄H₁₀) = 4 x 20 = 80 cm³."
        ],
        "conclusion": "La combustion de 20 cm³ de butane nécessite 130 cm³ de O₂ (soit 650 cm³ d'air) et produit 80 cm³ de CO₂ gazeux."
      },
      "exercises": [
        {
          "id": "seconde_c_chimie_ch6_p2_ex1",
          "type": "mcq",
          "prompt": "Que stipule la loi de Lavoisier lors d'une réaction chimique dans un système fermé ?",
          "options": [
            "La masse totale des produits formés est égale à la masse totale des réactifs consommés",
            "Le volume des gaz double toujours au cours de la réaction",
            "Le nombre total de molécules reste constant",
            "La masse diminue toujours avec le dégagement de chaleur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Lavoisier a établi que rien ne se perd, rien ne se crée : la masse totale des réactifs transformés est rigoureusement égale à la masse totale des produits formés."
        },
        {
          "id": "seconde_c_chimie_ch6_p2_ex2",
          "type": "mcq",
          "prompt": "On chauffe 10 g de calcaire CaCO₃ qui se décompose en 5,6 g d'oxyde de calcium CaO et un dégagement de dioxyde de carbone CO₂. Quelle est la masse de CO₂ dégagée ?",
          "options": [
            "4,4 g",
            "5,6 g",
            "10 g",
            "15,6 g"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D'après la loi de Lavoisier : m(CaCO₃) = m(CaO) + m(CO₂). Donc m(CO₂) = 10 - 5,6 = 4,4 g."
        },
        {
          "id": "seconde_c_chimie_ch6_p2_ex3",
          "type": "mcq",
          "prompt": "Pour la réaction gazeuse CH₄ + 2 O₂ -> CO₂ + 2 H₂O (vapeur), quel volume de dioxygène est nécessaire pour brûler 15 L de méthane dans les mêmes conditions ?",
          "options": [
            "30 L",
            "15 L",
            "7,5 L",
            "60 L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D'après les coefficients stœchiométriques gazeux : V(O₂) = 2 x V(CH₄) = 2 x 15 = 30 L."
        },
        {
          "id": "seconde_c_chimie_ch6_p2_ex4",
          "type": "mcq",
          "prompt": "Si une réaction consomme 20 L de dioxygène pur, quel volume d'air contenant 20% de dioxygène a été prélevé ?",
          "options": [
            "100 L",
            "4 L",
            "40 L",
            "200 L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "V(air) = 5 x V(O₂) = 5 x 20 L = 100 L."
        },
        {
          "id": "seconde_c_chimie_ch6_p2_ex5",
          "type": "mcq",
          "prompt": "Dans la réaction 2 H₂ (g) + O₂ (g) -> 2 H₂O (g), quel est le volume de vapeur d'eau formé à partir de 10 L de dihydrogène ?",
          "options": [
            "10 L",
            "5 L",
            "20 L",
            "15 L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le rapport volumique donne V(H₂O)/2 = V(H₂)/2, soit V(H₂O) = V(H₂) = 10 L."
        },
        {
          "id": "seconde_c_chimie_ch6_p2_ex6",
          "type": "mcq",
          "prompt": "On fait réagir 12 g de carbone avec 32 g de dioxygène pour former du dioxyde de carbone CO₂ selon C + O₂ -> CO₂. Quelle masse de CO₂ obtient-on ?",
          "options": [
            "44 g",
            "20 g",
            "32 g",
            "24 g"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les réactifs sont en proportions stœchiométriques (1 mol de C réagit avec 1 mol de O₂). Masse de CO₂ = 12 + 32 = 44 g."
        },
        {
          "id": "seconde_c_chimie_ch6_p2_ex7",
          "type": "mcq",
          "prompt": "Pourquoi peut-on utiliser directement les volumes au lieu des quantités de matière pour une réaction entre corps gazeux ?",
          "options": [
            "Car selon la loi d'Avogadro-Ampère, le volume molaire est identique pour tous les gaz dans les mêmes conditions",
            "Car tous les gaz ont la même masse volumique",
            "Car les gaz ne possèdent pas de masse molaire",
            "Car le volume d'un gaz est indépendant de la température"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À même température et pression, V = n x Vm avec Vm identique pour tous les gaz. Les rapports volumiques sont donc strictement égaux aux rapports molaires."
        },
        {
          "id": "seconde_c_chimie_ch6_p2_ex8",
          "type": "mcq",
          "prompt": "Soit la réaction N₂ (g) + 3 H₂ (g) -> 2 NH₃ (g). Si 60 L de dihydrogène réagissent totalement, quel volume d'ammoniac NH₃ obtient-on ?",
          "options": [
            "40 L",
            "20 L",
            "60 L",
            "120 L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "V(NH₃) / 2 = V(H₂) / 3 ⟹ V(NH₃) = (2 / 3) x V(H₂) = (2 / 3) x 60 = 40 L."
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 7 : LE CHLORURE DE SODIUM SOLIDE
// ============================================================================

export const chimie2deCChlorureSodiumChapter: CurriculumChapter = {
  "id": "seconde_c_chimie_ch7_chlorure_de_sodium",
  "subjectId": "physique_chimie",
  "gradeLevel": "seconde_c",
  "order": 7,
  "officialVolumeHours": 6,
  "title": "Leçon 7 — Le chlorure de sodium solide",
  "summary": "État naturel du sel, structure cristalline cubique à faces centrées du chlorure de sodium (NaCl), étude géométrique de la maille élémentaire, coordinence (6-6), cohésion électrostatique (Coulomb), propriétés physiques (isolant solide, conducteur en solution, température de fusion 801 °C) et calcul de la masse volumique.",
  "points": [
    {
      "id": "seconde_c_chimie_ch7_p1",
      "order": 1,
      "title": "Réseau cristallin, structure de la maille et formule statistique",
      "summary": "Description de la maille cubique à faces centrées du chlorure de sodium, dénombrement des ions Na⁺ et Cl⁻ appartenant en propre à la maille, et justification de la formule statistique NaCl.",
      "conceptExplanation": "Le chlorure de sodium (NaCl), communément appelé sel de table ou sel de cuisine, est un solide cristallin très abondant dans la nature sous forme de sel gemme (halite) ou dissous dans l'eau de mer.\n\n1. Définition du réseau cristallin et de la maille :\n- Réseau cristallin : Un cristal de chlorure de sodium est un édifice ordonné, périodique et tridimensionnel résultant de l'empilement régulier et alterné d'ions sodium Na⁺ et d'ions chlorure Cl⁻.\n- La maille élémentaire : C'est le plus petit parallélépipède (ici un cube d'arête a) qui, répété indéfiniment par translation dans les trois directions de l'espace, engendre tout le cristal macroscopique.\n\n2. Disposition géométrique des ions dans la maille cubique de NaCl :\nLa maille du chlorure de sodium est constituée de deux sous-réseaux cubiques à faces centrées (CFC) décalés d'une demi-arête :\n- Les ions chlorure Cl⁻ (les plus volumineux, de rayon r(Cl⁻) ≈ 180 pm) occupent :\n  * Les 8 sommets du cube.\n  * Les centres des 6 faces du cube.\n- Les ions sodium Na⁺ (de rayon r(Na⁺) ≈ 100 pm) occupent :\n  * Les milieux des 12 arêtes du cube.\n  * Le centre géométrique du cube.\n- Coordinence et tangence : Chaque ion Na⁺ est entouré et tangent à 6 ions Cl⁻ voisins disposés en octaèdre. Réciproquement, chaque ion Cl⁻ est entouré de 6 ions Na⁺. On parle d'une coordinence (6-6). Deux ions de même signe ne se touchent jamais directement.\n\n3. Dénombrement des ions appartenant en propre à la maille élémentaire :\nUn ion situé sur un élément géométrique partagé entre plusieurs mailles adjacentes n'appartient que pour une fraction à la maille considérée :\n- Ions chlorure Cl⁻ :\n  * 8 ions aux sommets, partagés chacun entre 8 mailles : 8 x (1/8) = 1 ion en propre.\n  * 6 ions aux centres des faces, partagés entre 2 mailles : 6 x (1/2) = 3 ions en propre.\n  * Total en propre de Cl⁻ = 1 + 3 = 4 ions Cl⁻ par maille.\n- Ions sodium Na⁺ :\n  * 12 ions aux milieux des arêtes, partagés chacun entre 4 mailles : 12 x (1/4) = 3 ions en propre.\n  * 1 ion au centre du cube, exclusif à cette maille : 1 x 1 = 1 ion en propre.\n  * Total en propre de Na⁺ = 3 + 1 = 4 ions Na⁺ par maille.\n\n4. Justification de la formule statistique :\nIl y a exactement autant d'ions Na⁺ que d'ions Cl⁻ dans le réseau cristallin (rapport 4:4 = 1:1).\nLa neutralité électrique globale du cristal est donc parfaitement respectée. Elle se traduit par la formule statistique minimale NaCl (et non pas une formule moléculaire, car il n'existe pas de molécules individuelles isolées de NaCl dans le solide).",
      "formulas": [
        {
          "name": "Ions Cl⁻ en propre par maille",
          "formula": "N(Cl⁻) = 8 × (1/8) + 6 × (1/2) = 4 ions",
          "note": "8 sommets et 6 centres de faces."
        },
        {
          "name": "Ions Na⁺ en propre par maille",
          "formula": "N(Na⁺) = 12 × (1/4) + 1 × 1 = 4 ions",
          "note": "12 milieux d'arêtes et 1 centre de cube."
        },
        {
          "name": "Formule statistique",
          "formula": "NaCl (rapport 1:1)",
          "note": "Traduit l'électroneutralité globale du réseau cristallin."
        }
      ],
      "keyRule": "Un ion au sommet compte pour 1/8, sur une face pour 1/2, sur une arête pour 1/4, et au centre pour 1. La maille cubique de NaCl contient en propre exactement 4 ions Na⁺ et 4 ions Cl⁻.",
      "workedExample": {
        "title": "Dénombrement des ions dans un cristal de type chlorure de sodium",
        "statement": "L'oxyde de magnésium (MgO) cristallise dans le même type de réseau que le chlorure de sodium (NaCl). Les ions oxyde O²⁻ occupent les sommets et les centres des faces du cube, tandis que les ions magnésium Mg²⁺ occupent les milieux des arêtes et le centre. Dénombre les ions de chaque nature appartenant en propre à la maille et vérifie la formule statistique.",
        "methodSteps": [
          "1. Dénombrer les ions O²⁻ : Sommets : 8 x (1/8) = 1 ion. Centres des faces : 6 x (1/2) = 3 ions. Total = 1 + 3 = 4 ions O²⁻.",
          "2. Dénombrer les ions Mg²⁺ : Milieux des arêtes : 12 x (1/4) = 3 ions. Centre du cube : 1 x 1 = 1 ion. Total = 3 + 1 = 4 ions Mg²⁺.",
          "3. Vérifier le bilan des charges : 4 ions Mg²⁺ apportent une charge positive de 4 x (+2e) = +8e. 4 ions O²⁻ apportent une charge négative de 4 x (-2e) = -8e. La charge totale est nulle (+8e - 8e = 0).",
          "4. Établir la formule statistique : Le rapport entre Mg²⁺ et O²⁻ est de 4/4 = 1/1. La formule statistique minimale est bien MgO."
        ],
        "conclusion": "La maille contient en propre 4 ions Mg²⁺ et 4 ions O²⁻, confirmant l'électroneutralité et la formule statistique MgO."
      },
      "exercises": [
        {
          "id": "seconde_c_chimie_ch7_p1_ex1",
          "type": "mcq",
          "prompt": "Combien d'ions Na⁺ et d'ions Cl⁻ appartiennent en propre à une maille élémentaire de chlorure de sodium ?",
          "options": [
            "4 ions Na⁺ et 4 ions Cl⁻",
            "1 ion Na⁺ et 1 ion Cl⁻",
            "8 ions Na⁺ et 8 ions Cl⁻",
            "12 ions Na⁺ et 6 ions Cl⁻"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le dénombrement géométrique donne 8x(1/8) + 6x(1/2) = 4 ions Cl⁻ et 12x(1/4) + 1 = 4 ions Na⁺ par maille."
        },
        {
          "id": "seconde_c_chimie_ch7_p1_ex2",
          "type": "mcq",
          "prompt": "À combien de mailles élémentaires adjacentes appartient un ion situé au sommet d'un cube ?",
          "options": [
            "8 mailles",
            "4 mailles",
            "2 mailles",
            "1 seule maille"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un sommet est partagé par 8 cubes adjacents qui se rejoignent en ce point (4 dans le plan inférieur et 4 dans le plan supérieur)."
        },
        {
          "id": "seconde_c_chimie_ch7_p1_ex3",
          "type": "mcq",
          "prompt": "Quelle est la coordinence de l'ion sodium Na⁺ dans le cristal de NaCl ?",
          "options": [
            "6 (chaque Na⁺ est entouré de 6 ions Cl⁻)",
            "4 (structure tétraédrique)",
            "8 (structure cubique centrée)",
            "12 (structure hexagonale compacte)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans le réseau de NaCl, chaque ion Na⁺ est entouré de 6 ions Cl⁻ formant un octaèdre régulier : la coordinence est 6."
        },
        {
          "id": "seconde_c_chimie_ch7_p1_ex4",
          "type": "mcq",
          "prompt": "Pourquoi la formule du chlorure de sodium solide s'écrit-elle 'NaCl' et non pas 'Na₄Cl₄' ?",
          "options": [
            "Car c'est une formule statistique représentant le rapport minimal entier entre les ions",
            "Car il n'y a qu'un seul ion dans tout le cristal",
            "Car c'est une molécule isolée contenant un atome Na et un atome Cl",
            "Car le chiffre 4 s'annule par convention"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le cristal est un réseau géant continu. La formule statistique indique la proportion minimale entre les ions garantissant l'électroneutralité, soit 1:1."
        },
        {
          "id": "seconde_c_chimie_ch7_p1_ex5",
          "type": "mcq",
          "prompt": "Pour un ion situé au milieu d'une arête d'une maille cubique, quelle fraction appartient en propre à cette maille ?",
          "options": [
            "1/4",
            "1/8",
            "1/2",
            "1"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une arête est commune à 4 cubes adjacents. Un ion situé au milieu d'une arête appartient donc pour 1/4 à la maille."
        },
        {
          "id": "seconde_c_chimie_ch7_p1_ex6",
          "type": "mcq",
          "prompt": "Dans la maille réelle de chlorure de sodium, deux ions identiques (par exemple deux ions Na⁺) peuvent-ils être en contact tangentiel ?",
          "options": [
            "Non, deux ions de même signe ne se touchent jamais dans le cristal stable",
            "Oui, tous les ions sommets se touchent",
            "Oui, le long des diagonales des faces",
            "Oui, à haute température seulement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La répulsion électrostatique entre ions de même charge empêche leur contact : les ions Na⁺ ne touchent que les ions Cl⁻ voisins le long des arêtes."
        },
        {
          "id": "seconde_c_chimie_ch7_p1_ex7",
          "type": "mcq",
          "prompt": "Quelle est la forme géométrique macroscopique caractéristique des monocristaux de sel gemme observés à la loupe ?",
          "options": [
            "Petits cubes translucides",
            "Sphères parfaites",
            "Aiguilles allongées",
            "Plaquettes hexagonales"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La symétrie cubique de la maille microscopique se reflète à l'échelle macroscopique : le chlorure de sodium cristallise sous forme de petits cubes."
        },
        {
          "id": "seconde_c_chimie_ch7_p1_ex8",
          "type": "mcq",
          "prompt": "Combien d'ions Na⁺ et Cl⁻ au total sont présents à l'intérieur d'une maille élémentaire en tenant compte de leurs fractions en propre ?",
          "options": [
            "8 ions au total (4 Na⁺ et 4 Cl⁻)",
            "2 ions au total (1 Na⁺ et 1 Cl⁻)",
            "14 ions au total",
            "27 ions au total"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La maille contient en propre 4 ions Na⁺ et 4 ions Cl⁻, soit un total de 8 ions (correspondant à 4 groupements formulaires NaCl)."
        }
      ]
    },
    {
      "id": "seconde_c_chimie_ch7_p2",
      "order": 2,
      "title": "Cohésion électrostatique, propriétés physiques et masse volumique du NaCl",
      "summary": "Origine de la cohésion cristalline (loi de Coulomb), propriétés physiques remarquables (isolant à l'état solide, conducteur en solution ou fondu, température de fusion 801 °C), calcul de la longueur de l'arête a = 2(r₊ + r₋) et de la masse volumique.",
      "conceptExplanation": "La structure ionique tridimensionnelle du chlorure de sodium confère à ce cristal des propriétés physiques macroscopiques bien précises.\n\n1. Origine de la cohésion du cristal (Interaction électrostatique) :\nLa cohésion et la solidité du cristal de NaCl résultent des forces d'attraction électrostatique (forces de Coulomb) qui s'exercent entre les cations Na⁺ et les anions Cl⁻ voisins.\n- Bien que des forces de répulsion existent entre ions de même signe, les ions opposés sont plus proches les uns des autres que les ions de même signe : le bilan énergétique global est fortement attractif.\n- Cette énergie réticulaire très élevée rend le cristal particulièrement compact et rigide.\n\n2. Propriétés physiques fondamentales :\n- Caractère isolant à l'état solide :\n  À l'état solide, le cristal de NaCl ne conduit pas le courant électrique (la lampe témoin d'un circuit reste éteinte). En effet, bien qu'il contienne des charges électriques (Na⁺ et Cl⁻), ces ions sont fermement verrouillés aux nœuds du réseau cristallin et ne peuvent pas se déplacer.\n- Conductivité à l'état liquide (fondu ou en solution) :\n  * En solution aqueuse, les molécules d'eau dissocient le cristal en ions hydratés Na⁺(aq) et Cl⁻(aq) qui deviennent libres de se mouvoir : la solution est conductrice.\n  * À l'état fondu (au-delà de 801 °C), l'agitation thermique détruit le réseau : les ions mobiles conduisent le courant.\n- Stabilité thermique et température de fusion élevée :\n  La température de fusion du NaCl est très élevée : Tf = 801 °C. Il faut fournir une énergie thermique considérable pour vaincre les fortes attractions coulombiennes interioniques.\n\n3. Calcul géométrique de l'arête de la maille et de la masse volumique :\n- Condition de contact le long de l'arête du cube :\n  L'arête du cube a contient un ion Cl⁻ au sommet, un ion Na⁺ au milieu, et un second ion Cl⁻ à l'autre sommet. La condition de tangence s'écrit :\n  a = 2 x r(Na⁺) + 2 x r(Cl⁻) = 2 x [r(Na⁺) + r(Cl⁻)].\n  Avec r(Na⁺) = 100 pm et r(Cl⁻) = 180 pm : a = 2 x (100 + 180) = 560 pm = 5,6 x 10⁻¹⁰ m.\n- Volume de la maille :\n  V = a³ = (5,6 x 10⁻¹⁰ m)³ ≈ 1,76 x 10⁻²⁸ m³ = 1,76 x 10⁻²² cm³.\n- Masse de la maille m(maille) :\n  La maille contenant en propre 4 ions Na⁺ et 4 ions Cl⁻ (soit 4 groupements NaCl de masse molaire M = 58,5 g/mol) :\n  m = [4 x M(NaCl)] / 𝒩A = [4 x 58,5] / (6,02 x 10²³) ≈ 3,887 x 10⁻²² g = 3,887 x 10⁻²⁵ kg.\n- Masse volumique ρ :\n  ρ = m / V = (3,887 x 10⁻²⁵ kg) / (1,76 x 10⁻²⁸ m³) ≈ 2,21 x 10³ kg/m³ = 2,21 g/cm³ (ou 2,21 kg/dm³).",
      "formulas": [
        {
          "name": "Longueur de l'arête de la maille",
          "formula": "a = 2 · [r(Na⁺) + r(Cl⁻)]",
          "note": "Condition de contact le long des arêtes du cube."
        },
        {
          "name": "Masse de la maille élémentaire",
          "formula": "m = (4 × M(NaCl)) / 𝒩A",
          "note": "Chaque maille contient en propre 4 groupements formulaires NaCl."
        },
        {
          "name": "Masse volumique du cristal",
          "formula": "ρ = m / V = [4 × M] / [𝒩A × a³]",
          "note": "Valeur expérimentale : ρ ≈ 2,21 g/cm³ = 2 210 kg/m³."
        }
      ],
      "keyRule": "Le sel solide est isolant car ses ions sont immobiles dans le réseau. En solution ou fondu, il devient conducteur car les ions sont mobiles. Sa masse volumique découle du rapport entre la masse des 4 unités NaCl et le volume de la maille a³.",
      "workedExample": {
        "title": "Calcul de l'arête et de la masse volumique du chlorure de sodium",
        "statement": "On donne pour le chlorure de sodium : r(Na⁺) = 100 pm, r(Cl⁻) = 180 pm, M(Na) = 23 g/mol, M(Cl) = 35,5 g/mol, 𝒩A = 6,02 x 10²³ mol⁻¹. 1) Calcule la longueur de l'arête a en mètres. 2) Calcule le volume de la maille V. 3) Détermine la masse volumique ρ en g/cm³ et en kg/m³.",
        "methodSteps": [
          "1. Calculer la longueur de l'arête a : a = 2 x (r(Na⁺) + r(Cl⁻)) = 2 x (100 + 180) = 560 pm = 560 x 10⁻¹² m = 5,60 x 10⁻¹⁰ m.",
          "2. Calculer le volume de la maille V : V = a³ = (5,60 x 10⁻¹⁰ m)³ = 1,756 x 10⁻²⁸ m³ (soit 1,756 x 10⁻²² cm³).",
          "3. Calculer la masse de la maille m : M(NaCl) = 23 + 35,5 = 58,5 g/mol. m = 4 x M / 𝒩A = (4 x 58,5) / (6,02 x 10²³) = 3,887 x 10⁻²² g = 3,887 x 10⁻²⁵ kg.",
          "4. Calculer la masse volumique ρ : ρ = m / V = (3,887 x 10⁻²² g) / (1,756 x 10⁻²² cm³) ≈ 2,21 g/cm³, soit 2 210 kg/m³."
        ],
        "conclusion": "L'arête mesure a = 560 pm et la masse volumique du cristal de chlorure de sodium est ρ = 2,21 g/cm³ = 2 210 kg/m³."
      },
      "exercises": [
        {
          "id": "seconde_c_chimie_ch7_p2_ex1",
          "type": "mcq",
          "prompt": "Quelle est la température de fusion du chlorure de sodium NaCl à la pression atmosphérique normale ?",
          "options": [
            "801 °C",
            "100 °C",
            "1 500 °C",
            "0 °C"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La température de fusion de NaCl est très élevée (Tf = 801 °C) en raison de la force considérable des liaisons électrostatiques entre les ions."
        },
        {
          "id": "seconde_c_chimie_ch7_p2_ex2",
          "type": "mcq",
          "prompt": "Pourquoi un morceau de sel solide ne conduit-il pas le courant électrique ?",
          "options": [
            "Car ses ions Na⁺ et Cl⁻ sont immobiles et bloqués dans le réseau cristallin",
            "Car il ne contient aucune particule chargée",
            "Car c'est un composé covalent",
            "Car les électrons sont absorbés par le noyau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour conduire le courant, il faut des porteurs de charge mobiles. Dans le cristal solide, les ions sont immobilisés par les liaisons réticulaires."
        },
        {
          "id": "seconde_c_chimie_ch7_p2_ex3",
          "type": "mcq",
          "prompt": "Sous quelle condition le chlorure de sodium devient-il conducteur de l'électricité ?",
          "options": [
            "À l'état fondu (liquide au-delà de 801 °C) ou en solution aqueuse",
            "Uniquement lorsqu'il est sous forme de poudre très fine",
            "Uniquement en présence de lumière ultraviolette",
            "Il n'est jamais conducteur sous aucune forme"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La dissolution dans l'eau ou la fusion thermique libère les ions Na⁺ et Cl⁻ qui deviennent alors mobiles et permettent le passage du courant."
        },
        {
          "id": "seconde_c_chimie_ch7_p2_ex4",
          "type": "mcq",
          "prompt": "Sachant que r(Na⁺) = 100 pm et r(Cl⁻) = 180 pm, quelle est la longueur de l'arête a de la maille élémentaire ?",
          "options": [
            "560 pm",
            "280 pm",
            "360 pm",
            "200 pm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sur l'arête, a = 2 x [r(Na⁺) + r(Cl⁻)] = 2 x (100 + 180) = 2 x 280 = 560 pm."
        },
        {
          "id": "seconde_c_chimie_ch7_p2_ex5",
          "type": "mcq",
          "prompt": "Quelle est la valeur approchée de la masse volumique du chlorure de sodium solide ?",
          "options": [
            "2,21 g/cm³ (soit 2 210 kg/m³)",
            "1,00 g/cm³",
            "7,80 g/cm³",
            "0,50 g/cm³"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le calcul théorique et expérimental donne une masse volumique ρ ≈ 2,21 g/cm³ (ou 2,21 kg/dm³ = 2 210 kg/m³)."
        },
        {
          "id": "seconde_c_chimie_ch7_p2_ex6",
          "type": "mcq",
          "prompt": "Quelle interaction physique fondamentale assure la cohésion et la stabilité du cristal de NaCl ?",
          "options": [
            "L'attraction électrostatique (forces coulombiennes) entre ions de signes opposés",
            "La gravitation universelle de Newton",
            "La force magnétique entre les pôles nord et sud",
            "La tension superficielle de l'eau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La cohésion des cristaux ioniques provient de l'attraction électrostatique mutuelle entre les cations positifs et les anions négatifs."
        },
        {
          "id": "seconde_c_chimie_ch7_p2_ex7",
          "type": "mcq",
          "prompt": "Comment appelle-t-on le minerai naturel de chlorure de sodium solide extrait des mines terrestres ?",
          "options": [
            "Le sel gemme (ou halite)",
            "La bauxite",
            "La calcite",
            "La pyrite"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le chlorure de sodium solide naturel présent dans les gisements sédimentaires est appelé sel gemme ou halite."
        },
        {
          "id": "seconde_c_chimie_ch7_p2_ex8",
          "type": "mcq",
          "prompt": "Dans l'organisme humain, quel est l'un des rôles biologiques majeurs de l'ion sodium Na⁺ apporté par le sel ?",
          "options": [
            "La transmission de l'influx nerveux et le maintien de la pression osmotique",
            "La fabrication directe de l'hémoglobine",
            "Le stockage de l'oxygène dans les poumons",
            "La synthèse de la chlorophylle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les ions Na⁺ sont indispensables à la propagation des potentiels d'action nerveux et à la régulation de l'équilibre hydrique cellulaire."
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 8 : SOLUTIONS AQUEUSES IONIQUES
// ============================================================================

export const chimie2deCSolutionsAqueusesChapter: CurriculumChapter = {
  "id": "seconde_c_chimie_ch8_solutions_aqueuses_ioniques",
  "subjectId": "physique_chimie",
  "gradeLevel": "seconde_c",
  "order": 8,
  "officialVolumeHours": 8,
  "title": "Leçon 8 — Solutions aqueuses ioniques",
  "summary": "Dissolution d'un cristal ionique dans l'eau, étapes de dislocation et d'hydratation, bilans thermiques, solubilité et saturation, concentrations molaires et massiques, électroneutralité et électrolyse du chlorure de sodium.",
  "points": [
    {
      "id": "seconde_c_chimie_ch8_p1_dissolution_thermique_solubilite",
      "order": 1,
      "title": "Dissolution d'un composé ionique, bilan thermique et solubilité",
      "summary": "Comprendre les deux étapes fictives de la dissolution (dislocation et hydratation), leurs effets thermiques et les notions de saturation et de solubilité.",
      "conceptExplanation": "La dissolution d'un cristal ionique dans l'eau s'interprète comme la succession de deux étapes fondamentales :\n1. La dislocation du cristal : rupture des liaisons électrostatiques entre les ions sous l'action polaire des molécules d'eau, suivie de leur dispersion. Cette rupture consomme de l'énergie (absorption de chaleur), notée Ed (énergie de dislocation).\n2. L'hydratation (ou solvatation) des ions : les ions libres dispersés s'entourent d'une enveloppe stable de molécules d'eau orientées selon leurs dipôles. Ce phénomène libère de l'énergie (dégagement de chaleur), notée Eh (énergie d'hydratation).\nLe bilan thermique global dépend de la compétition entre Ed et Eh :\n- Si Ed > Eh : la dissolution absorbe plus de chaleur qu'elle n'en dégage, la température du milieu diminue ; le phénomène est endothermique (exemple : dissolution du chlorure d'ammonium NH₄Cl).\n- Si Ed = Eh : la température reste rigoureusement constante ; la dissolution est athermique (exemples : chlorure de sodium NaCl, sulfate de cuivre CuSO₄).\n- Si Ed < Eh : le dégagement de solvatation domine, la température du milieu s'élève ; la dissolution est exothermique (exemple : hydroxyde de sodium NaOH).\nAu-delà d'une certaine quantité de soluté introduite, l'eau ne peut plus dissoudre de cristal : la solution est dite saturée. La solubilité s (ou S) représente la masse maximale ou la quantité maximale de soluté dissous par litre de solution saturée (en g/L ou mol/L). La solubilité dépend de la nature du soluté et augmente généralement avec la température.",
      "formulas": [
        {
          "name": "Bilan énergétique de dissolution",
          "formula": "Bilan = Ed (absorption) + Eh (dégagement)",
          "note": "Ed est l'énergie absorbée pour briser le cristal, Eh est la chaleur libérée lors de la solvatation."
        },
        {
          "name": "Dissolution endothermique",
          "formula": "Ed > Eh ⟹ ΔT < 0 (baisse de température)",
          "note": "Exemple type du programme ivoirien : chlorure d'ammonium NH₄Cl."
        },
        {
          "name": "Dissolution athermique",
          "formula": "Ed = Eh ⟹ ΔT = 0 (température constante)",
          "note": "Exemple type : chlorure de sodium NaCl et sulfate de cuivre CuSO₄."
        },
        {
          "name": "Dissolution exothermique",
          "formula": "Ed < Eh ⟹ ΔT > 0 (hausse de température)",
          "note": "Exemple type : hydroxyde de sodium NaOH solide."
        },
        {
          "name": "Solubilité massique maximale",
          "formula": "s = m(max) / V en g/L",
          "note": "La solubilité augmente généralement avec l'élévation de la température."
        }
      ],
      "keyRule": "La dissolution comprend deux étapes : la dislocation du cristal (qui absorbe de la chaleur, Ed) et l'hydratation des ions (qui dégage de la chaleur, Eh). Si Ed > Eh elle est endothermique, si Ed = Eh elle est athermique, si Ed < Eh elle est exothermique.",
      "workedExample": {
        "title": "Calcul de saturation et masse de soluté non dissous",
        "statement": "On introduit 20 g de sulfate de sodium Na₂SO₄ dans de l'eau à 20 °C pour préparer un volume V = 100 cm³ de solution. Sachant que la solubilité massique du sulfate de sodium à 20 °C est s = 195 g/L, détermine si la solution obtenue est saturée et calcule la masse de soluté éventuellement non dissous.",
        "methodSteps": [
          "Convertir le volume de solution en litres : V = 100 cm³ = 100 × 10⁻³ L = 0,1 L.",
          "Calculer la concentration massique C_m correspondant à la masse introduite : C_m = m / V = 20 g / 0,1 L = 200 g/L.",
          "Comparer C_m à la solubilité s = 195 g/L : comme 200 g/L > 195 g/L, la limite de solubilité est dépassée. La solution est donc saturée.",
          "Calculer la masse maximale dissoute m_dissous = s × V = 195 × 0,1 = 19,5 g.",
          "Déterminer la masse du dépôt solide non dissous : m_dépôt = m_introduit − m_dissous = 20 g − 19,5 g = 0,5 g."
        ],
        "conclusion": "La solution est saturée et présente un dépôt solide de 0,5 g de sulfate de sodium au fond du récipient."
      },
      "exercises": [
        {
          "id": "seconde_c_chimie_ch8_p1_ex1",
          "type": "mcq",
          "prompt": "Quelles sont les deux étapes fondamentales intervenant lors de la dissolution d'un cristal ionique dans l'eau ?",
          "options": [
            "La dislocation du réseau cristallin puis l'hydratation des ions",
            "La fusion des ions puis leur évaporation",
            "La neutralisation acido-basique puis la précipitation",
            "L'électrolyse de l'eau puis l'oxydation des ions"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La dissolution se décompose fictivement en deux étapes : 1) rupture des liaisons électrostatiques et dispersion des ions (dislocation), 2) entouragement de chaque ion par une couronne de molécules d'eau dipolaires (hydratation ou solvatation)."
        },
        {
          "id": "seconde_c_chimie_ch8_p1_ex2",
          "type": "mcq",
          "prompt": "Lorsqu'on dissout de la soude solide NaOH dans de l'eau, la température du milieu réactionnel augmente nettement (+8 °C). Comment qualifie-t-on ce phénomène ?",
          "options": [
            "Une dissolution exothermique car l'énergie d'hydratation libérée est supérieure à l'énergie de dislocation absorbée (Ed < Eh)",
            "Une dissolution endothermique car le milieu a absorbé de la chaleur extérieure",
            "Une dissolution athermique car les ions conservent leur structure",
            "Une réaction de combustion vive spontanée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une hausse de température indique un dégagement de chaleur vers le milieu extérieur : le phénomène est exothermique. Cela se produit lorsque l'énergie dégagée par l'hydratation Eh surpasse l'énergie absorbée pour disloquer le cristal Ed (Ed < Eh)."
        },
        {
          "id": "seconde_c_chimie_ch8_p1_ex3",
          "type": "mcq",
          "prompt": "La dissolution du chlorure d'ammonium NH₄Cl dans l'eau s'accompagne d'un refroidissement mesuré (−2,5 °C). Quel est le bilan énergétique ?",
          "options": [
            "Ed > Eh : l'énergie absorbée pour casser le cristal est supérieure à l'énergie dégagée par l'hydratation (dissolution endothermique)",
            "Ed < Eh : l'hydratation dégage plus de chaleur que la dislocation",
            "Ed = Eh : les deux effets s'annulent exactement",
            "L'eau s'évapore sous forme de vapeur froide"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une baisse de température correspond à une réaction endothermique : l'énergie de dislocation absorbée Ed est supérieure à l'énergie d'hydratation libérée Eh."
        },
        {
          "id": "seconde_c_chimie_ch8_p1_ex4",
          "type": "mcq",
          "prompt": "Pour le chlorure de sodium NaCl et le sulfate de cuivre CuSO₄, la température de la solution reste rigoureusement inchangée pendant la dissolution. Que peut-on affirmer ?",
          "options": [
            "La dissolution est athermique car Ed = Eh",
            "La dissolution est impossible à température ambiante",
            "Le sel ne se disloque pas dans l'eau",
            "L'énergie d'hydratation est nulle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Lorsque la température ne varie pas (ΔT = 0 °C), la dissolution est athermique. L'énergie absorbée pour la dislocation Ed compense exactement l'énergie dégagée lors de la solvatation Eh."
        },
        {
          "id": "seconde_c_chimie_ch8_p1_ex5",
          "type": "mcq",
          "prompt": "Comment définit-on la saturation d'une solution aqueuse ?",
          "options": [
            "C'est l'état où le solvant ne peut plus dissoudre de soluté supplémentaire, tout ajout formant un dépôt solide",
            "C'est lorsque le liquide commence à bouillir spontanément",
            "C'est lorsque la concentration de soluté est exactement égale à 1 mol/L",
            "C'est lorsque le soluté change de couleur en passant en solution"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La saturation correspond à la limite de solubilité : au-delà de cette concentration maximale, tout soluté supplémentaire ajouté ne se dissout plus et se dépose au fond du récipient."
        },
        {
          "id": "seconde_c_chimie_ch8_p1_ex6",
          "type": "mcq",
          "prompt": "À 20 °C, la solubilité du sel de table NaCl est de 360 g/L, et à 100 °C elle atteint 390 g/L. Quelle loi générale cela illustre-t-il ?",
          "options": [
            "La solubilité de la plupart des solides ioniques augmente avec l'élévation de la température",
            "La solubilité d'un sel est strictement indépendante de la température",
            "L'eau chaude détruit les molécules de sel",
            "À haute température, le chlorure de sodium devient insoluble"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'agitation thermique facilite la dislocation du réseau cristallin ionique : pour la grande majorité des composés ioniques, la solubilité s s'accroît lorsque la température s'élève."
        },
        {
          "id": "seconde_c_chimie_ch8_p1_ex7",
          "type": "mcq",
          "prompt": "On verse 40 g de sel NaCl dans 100 mL d'eau à 20 °C (solubilité s = 360 g/L). Quelle masse de sel reste non dissoute au fond du bécher ?",
          "options": [
            "4 g de sel solide non dissous",
            "0 g car tout le sel est entièrement dissous",
            "14 g de sel non dissous",
            "40 g car le sel ne se dissout pas dans 100 mL"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans V = 100 mL = 0,1 L, la masse maximale pouvant se dissoudre est m_max = s × V = 360 × 0,1 = 36 g. Comme on a introduit 40 g, il reste m_dépôt = 40 − 36 = 4 g de sel solide."
        },
        {
          "id": "seconde_c_chimie_ch8_p1_ex8",
          "type": "mcq",
          "prompt": "Pourquoi une solution aqueuse ionique conduit-elle le courant électrique alors que l'eau pure le conduit extrêmement peu ?",
          "options": [
            "Parce qu'elle contient des ions libres et mobiles (anions et cations) capables d'assurer le transfert de charges",
            "Parce que les molécules d'eau se transforment en fils conducteurs métalliques",
            "Parce que la dissolution crée des électrons libres dans le solvant",
            "Parce que le sel attire directement l'électricité statique de l'air"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans les électrolytes, la conduction électrique est assurée par la migration ordonnée des porteurs de charges mobiles : les cations migrent vers la cathode et les anions vers l'anode."
        }
      ]
    },
    {
      "id": "seconde_c_chimie_ch8_p2_concentrations_electroneutralite_electrolyse",
      "order": 2,
      "title": "Concentrations, électroneutralité et électrolyse d'une solution ionique",
      "summary": "Maîtriser les calculs de concentrations (molaire, massique, par ion), la règle de neutralité électrique et les réactions d'oxydoréduction lors de l'électrolyse de NaCl.",
      "conceptExplanation": "Pour une solution aqueuse de volume Vs contenant un soluté dissous de masse m, quantité n et masse molaire M :\n- Concentration molaire volumique C = n / Vs (en mol/L).\n- Concentration massique C_m = m / Vs (en g/L).\n- Relation fondamentale : C_m = C × M (car m = n × M).\nLors de la dissociation totale d'un composé ionique ApBq(s) ⟶ p A^q⁺ + q B^p⁻ :\n- Les concentrations molaires des ions sont : [A^q⁺] = p × C et [B^p⁻] = q × C.\n- Principe d'électroneutralité : toute solution ionique est globalement neutre. La somme totale des charges positives portées par les cations compense exactement la somme en valeur absolue des charges négatives portées par les anions :\n∑ z_cat × [Cation] = ∑ |z_an| × [Anion].\nExemple : pour une solution de CaCl₂ de concentration C, [Ca²⁺] = C et [Cl⁻] = 2C ; la neutralité donne 2 × [Ca²⁺] = [Cl⁻] (2C = 2C).\n\nÉlectrolyse d'une solution aqueuse de chlorure de sodium (NaCl) :\nSous l'action d'un courant continu appliqué par un générateur :\n- À l'anode (+) : oxydation des ions chlorure Cl⁻ en dichlore gazeux Cl₂ (reconnu par la décoloration de l'indigo) : 2 Cl⁻ ⟶ Cl₂ + 2 e⁻.\n- À la cathode (−) : réduction des molécules d'eau avec formation de dihydrogène H₂ (reconnu par la détonation à la flamme) et apparition d'ions hydroxyde OH⁻ (colorant le BBT en bleu) : 2 H₂O + 2 e⁻ ⟶ H₂ + 2 OH⁻.\n- Équation-bilan globale : 2 H₂O + 2 Cl⁻ ⟶ H₂ + Cl₂ + 2 OH⁻ (ou en présence d'ions spectateurs Na⁺ : 2 H₂O + 2 (Na⁺ + Cl⁻) ⟶ H₂ + Cl₂ + 2 (Na⁺ + OH⁻)). L'électrolyse produit donc du dichlore, du dihydrogène et de la soude caustique (NaOH).",
      "formulas": [
        {
          "name": "Concentration molaire volumique",
          "formula": "C = n / Vs",
          "note": "En mol/L, où n est en moles et Vs en litres."
        },
        {
          "name": "Concentration massique (pondérale)",
          "formula": "C_m = m / Vs",
          "note": "En g/L, où m est en grammes et Vs en litres."
        },
        {
          "name": "Relation fondamentale entre C et C_m",
          "formula": "C_m = C × M",
          "note": "Permet de passer directement de la molarité à la teneur massique."
        },
        {
          "name": "Concentration molaire d'un ion X",
          "formula": "[X] = n(X) / Vs",
          "note": "Reliée à C par le coefficient de dissociation du sel ionique."
        },
        {
          "name": "Principe d'électroneutralité",
          "formula": "∑ z_i · [Cation_i] = ∑ |z_j| · [Anion_j]",
          "note": "La charge électrique nette d'une solution macroscopique est nulle."
        },
        {
          "name": "Réaction à l'anode (+)",
          "formula": "2 Cl⁻ ⟶ Cl₂ + 2 e⁻",
          "note": "Oxydation des ions chlorure en dichlore décolorant l'indigo."
        },
        {
          "name": "Réaction à la cathode (−)",
          "formula": "2 H₂O + 2 e⁻ ⟶ H₂ + 2 OH⁻",
          "note": "Réduction de l'eau en dihydrogène détonant et ions basiques."
        },
        {
          "name": "Bilan global de l'électrolyse de NaCl(aq)",
          "formula": "2 H₂O + 2 Cl⁻ ⟶ H₂ + Cl₂ + 2 OH⁻",
          "note": "Production simultanée de dichlore, de dihydrogène et de soude NaOH."
        }
      ],
      "keyRule": "La concentration massique vaut C_m = C × M. Toute solution ionique est neutre (∑ q⁺ = ∑ |q⁻|). Lors de l'électrolyse de NaCl(aq), l'anode dégage Cl₂ (décolore l'indigo) et la cathode dégage H₂ (détonne) en formant des ions OH⁻ (bleu au BBT).",
      "workedExample": {
        "title": "Calcul de concentrations, ions et vérification de la neutralité électrique",
        "statement": "On dissout m = 11,1 g de chlorure de calcium CaCl₂ dans de l'eau distillée pour obtenir un volume Vs = 500 mL de solution. Données : M(Ca) = 40 g/mol ; M(Cl) = 35,5 g/mol. Calcule la concentration molaire C de la solution, les concentrations des ions en solution, et vérifie la neutralité électrique.",
        "methodSteps": [
          "Calculer la masse molaire de CaCl₂ : M = 40 + (2 × 35,5) = 111 g/mol.",
          "Calculer la quantité de matière dissoute : n = m / M = 11,1 / 111 = 0,10 mol.",
          "Calculer la concentration molaire : C = n / Vs = 0,10 mol / 0,5 L = 0,20 mol/L.",
          "Écrire l'équation de dissociation : CaCl₂(s) ⟶ Ca²⁺(aq) + 2 Cl⁻(aq).",
          "Déterminer la concentration des ions : [Ca²⁺] = C = 0,20 mol/L et [Cl⁻] = 2 × C = 2 × 0,20 = 0,40 mol/L.",
          "Vérifier l'électroneutralité : charge positive totale = 2 × [Ca²⁺] = 2 × 0,20 = 0,40 mol/L de charges (+). Charge négative totale = 1 × [Cl⁻] = 0,40 mol/L de charges (−). On a bien 2 × [Ca²⁺] = [Cl⁻]."
        ],
        "conclusion": "La concentration molaire est C = 0,20 mol/L, avec [Ca²⁺] = 0,20 mol/L, [Cl⁻] = 0,40 mol/L, et l'électroneutralité 2[Ca²⁺] = [Cl⁻] est rigoureusement vérifiée."
      },
      "exercises": [
        {
          "id": "seconde_c_chimie_ch8_p2_ex1",
          "type": "mcq",
          "prompt": "Quelle formule relie directement la concentration massique C_m (en g/L), la concentration molaire C (en mol/L) et la masse molaire M (en g/mol) ?",
          "options": [
            "C_m = C × M",
            "C_m = C / M",
            "C_m = M / C",
            "C_m = C + M"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Puisque C_m = m / V et m = n × M, on a C_m = (n × M) / V = (n / V) × M = C × M."
        },
        {
          "id": "seconde_c_chimie_ch8_p2_ex2",
          "type": "mcq",
          "prompt": "Une solution de chlorure de sodium (M = 58,5 g/mol) a une concentration molaire C = 0,34 mol/L. Quelle est sa concentration massique C_m ?",
          "options": [
            "19,89 g/L",
            "172,0 g/L",
            "5,85 g/L",
            "0,0058 g/L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C_m = C × M = 0,34 mol/L × 58,5 g/mol = 19,89 g/L."
        },
        {
          "id": "seconde_c_chimie_ch8_p2_ex3",
          "type": "mcq",
          "prompt": "Dans une solution aqueuse de sulfate d'aluminium Al₂(SO₄)₃ de concentration C = 0,05 mol/L, quelles sont les concentrations respectives des ions Al³⁺ et SO₄²⁻ ?",
          "options": [
            "[Al³⁺] = 0,10 mol/L et [SO₄²⁻] = 0,15 mol/L",
            "[Al³⁺] = 0,05 mol/L et [SO₄²⁻] = 0,05 mol/L",
            "[Al³⁺] = 0,15 mol/L et [SO₄²⁻] = 0,10 mol/L",
            "[Al³⁺] = 0,20 mol/L et [SO₄²⁻] = 0,30 mol/L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'équation est Al₂(SO₄)₃ ⟶ 2 Al³⁺ + 3 SO₄²⁻. Donc [Al³⁺] = 2 × C = 2 × 0,05 = 0,10 mol/L et [SO₄²⁻] = 3 × C = 3 × 0,05 = 0,15 mol/L."
        },
        {
          "id": "seconde_c_chimie_ch8_p2_ex4",
          "type": "mcq",
          "prompt": "Quelle relation traduit la neutralité électrique d'une solution de chlorure d'aluminium AlCl₃ ?",
          "options": [
            "3 × [Al³⁺] = [Cl⁻]",
            "[Al³⁺] = 3 × [Cl⁻]",
            "[Al³⁺] = [Cl⁻]",
            "3 × [Al³⁺] + [Cl⁻] = 0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque cation Al³⁺ porte 3 charges positives (+3e) et chaque chlorure porte 1 charge négative (−1e). L'égalité des charges totales s'écrit 3 × [Al³⁺] = [Cl⁻]."
        },
        {
          "id": "seconde_c_chimie_ch8_p2_ex5",
          "type": "mcq",
          "prompt": "Lors de l'électrolyse d'une solution aqueuse de chlorure de sodium, quel produit se dégage à l'anode (+), et comment le met-on en évidence ?",
          "options": [
            "Du dichlore gazeux Cl₂, mis en évidence par la décoloration d'une solution d'indigo",
            "Du dihydrogène gazeux H₂, qui aboie à la flamme",
            "Du dioxygène gazeux O₂, qui ranime un brin d'allumette incandescente",
            "Du sodium métallique liquide qui s'enflamme"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À l'anode positive, les ions chlorure subissent une oxydation : 2 Cl⁻ ⟶ Cl₂ + 2 e⁻. Le dichlore Cl₂ possède un puissant pouvoir décolorant, caractérisé par la décoloration de l'indigo."
        },
        {
          "id": "seconde_c_chimie_ch8_p2_ex6",
          "type": "mcq",
          "prompt": "Lors de cette même électrolyse de NaCl(aq), quels phénomènes observe-t-on à la cathode (−) ?",
          "options": [
            "Un dégagement de gaz dihydrogène H₂ (détonation à la flamme) et une coloration bleue au BBT due aux ions hydroxyde OH⁻ formés",
            "Un dépôt de cristaux blancs de sel",
            "La formation d'acide chlorhydrique concentré virant le BBT au jaune",
            "Aucun dégagement gazeux, uniquement un dépôt d'argent"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À la cathode, l'eau est réduite : 2 H₂O + 2 e⁻ ⟶ H₂ + 2 OH⁻. Le gaz recueilli est le dihydrogène H₂ (légère détonation à la flamme) et les ions hydroxyde formés font virer le BBT au bleu (milieu basique)."
        },
        {
          "id": "seconde_c_chimie_ch8_p2_ex7",
          "type": "mcq",
          "prompt": "Pourquoi les ions sodium Na⁺ ne réagissent-ils pas à la cathode lors de l'électrolyse d'une solution aqueuse de sel ?",
          "options": [
            "Parce que les ions Na⁺ sont très stables en milieu aqueux et que les molécules d'eau se réduisent préférentiellement à leur place",
            "Parce que les ions Na⁺ portent une charge négative les repoussant de la cathode",
            "Parce que le sodium est transformé en gaz insoluble",
            "Parce que le sel n'a pas été dissous"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le potentiel de réduction de l'eau est nettement plus favorable que celui de Na⁺. En solution aqueuse, Na⁺ est un ion spectateur très stable, ce sont les molécules d'eau qui subissent la réduction."
        },
        {
          "id": "seconde_c_chimie_ch8_p2_ex8",
          "type": "mcq",
          "prompt": "Quelle est l'équation-bilan globale de l'électrolyse d'une solution aqueuse de chlorure de sodium ?",
          "options": [
            "2 H₂O + 2 Cl⁻ ⟶ H₂ + Cl₂ + 2 OH⁻",
            "NaCl + H₂O ⟶ NaOH + HCl",
            "2 NaCl ⟶ 2 Na + Cl₂",
            "2 H₂O ⟶ 2 H₂ + O₂"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En additionnant la réaction anodique (2 Cl⁻ ⟶ Cl₂ + 2 e⁻) et la réaction cathodique (2 H₂O + 2 e⁻ ⟶ H₂ + 2 OH⁻), les électrons s'annulent et donnent : 2 H₂O + 2 Cl⁻ ⟶ H₂ + Cl₂ + 2 OH⁻."
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 9 : TESTS D'IDENTIFICATION DE QUELQUES IONS
// ============================================================================

export const chimie2deCTestsIdentificationIonsChapter: CurriculumChapter = {
  "id": "seconde_c_chimie_ch9_tests_identification_ions",
  "subjectId": "physique_chimie",
  "gradeLevel": "seconde_c",
  "order": 9,
  "officialVolumeHours": 8,
  "title": "Leçon 9 — Tests d'identification de quelques ions",
  "summary": "Couleur des ions hydratés, test à la flamme, caractérisation des cations par précipitation à la soude, tests spécifiques des anions (chlorure, sulfate, carbonate, phosphate) et réactions à dégagement gazeux.",
  "points": [
    {
      "id": "seconde_c_chimie_ch9_p1_couleurs_flamme_cations",
      "order": 1,
      "title": "Couleur des ions, test à la flamme et identification des cations",
      "summary": "Identifier les cations en solution aqueuse par leur couleur propre, la coloration de la flamme et les réactions de précipitation avec la soude.",
      "conceptExplanation": "En solution aqueuse, certains ions hydratés confèrent une couleur caractéristique au liquide :\n- Cu²⁺ : coloration bleue.\n- Fe²⁺ : vert pâle.\n- Fe³⁺ : jaune-orangé à rouille.\n- MnO₄⁻ : violette intense.\n- Cr₂O₇²⁻ : orangée.\n- Cr³⁺ : verte.\nAttention : une coloration donne une indication mais ne constitue pas une preuve formelle (ex : une solution bleue peut ne pas contenir d'ions Cu²⁺). Des tests chimiques spécifiques sont indispensables.\n\n1. Test à la flamme :\nEn trempant un fil de platine propre dans la solution et en le plaçant dans la flamme non éclairante d'un bec Bunsen :\n- Les ions sodium Na⁺ colorent la flamme en jaune vif persistant.\n- Les ions cuivre II Cu²⁺ colorent la flamme en vert.\n\n2. Identification des cations par précipitation à l'aide de la soude (Na⁺ + OH⁻) :\n- Ion cuivre II Cu²⁺ : forme un précipité bleu d'hydroxyde de cuivre II : Cu²⁺ + 2 OH⁻ ⟶ Cu(OH)₂↓.\n- Ion fer II Fe²⁺ : forme un précipité vert pâle (ou vert sale) d'hydroxyde de fer II : Fe²⁺ + 2 OH⁻ ⟶ Fe(OH)₂↓.\n- Ion fer III Fe³⁺ : forme un précipité rouille d'hydroxyde de fer III : Fe³⁺ + 3 OH⁻ ⟶ Fe(OH)₃↓.\n- Ion zinc Zn²⁺ : forme un précipité blanc d'hydroxyde de zinc Zn(OH)₂↓, soluble dans un excès de soude ou d'ammoniac (caractère amphotère) : Zn²⁺ + 2 OH⁻ ⟶ Zn(OH)₂↓.\n- Ion aluminium Al³⁺ : forme un précipité blanc gélatineux d'hydroxyde d'aluminium : Al³⁺ + 3 OH⁻ ⟶ Al(OH)₃↓.\n- Ion baryum Ba²⁺ : ne précipite pas avec la soude, mais forme un précipité blanc insoluble avec les ions sulfate SO₄²⁻ : Ba²⁺ + SO₄²⁻ ⟶ BaSO₄↓.",
      "formulas": [
        {
          "name": "Test de précipitation Cu²⁺",
          "formula": "Cu²⁺ + 2 OH⁻ ⟶ Cu(OH)₂↓ (précipité bleu)",
          "note": "Formé par addition de quelques gouttes de soude dans la solution."
        },
        {
          "name": "Test de précipitation Fe²⁺",
          "formula": "Fe²⁺ + 2 OH⁻ ⟶ Fe(OH)₂↓ (précipité vert pâle)",
          "note": "S'oxyde lentement à l'air en hydroxyde de fer III rouille."
        },
        {
          "name": "Test de précipitation Fe³⁺",
          "formula": "Fe³⁺ + 3 OH⁻ ⟶ Fe(OH)₃↓ (précipité rouille)",
          "note": "Insoluble dans un excès d'hydroxyde de sodium."
        },
        {
          "name": "Test de précipitation Zn²⁺",
          "formula": "Zn²⁺ + 2 OH⁻ ⟶ Zn(OH)₂↓ (blanc amphotère)",
          "note": "Ce précipité blanc se redissout en présence d'un excès de soude."
        },
        {
          "name": "Test de précipitation Al³⁺",
          "formula": "Al³⁺ + 3 OH⁻ ⟶ Al(OH)₃↓ (blanc gélatineux)",
          "note": "Forme un gel blanc d'hydroxyde d'aluminium."
        },
        {
          "name": "Tests à la flamme",
          "formula": "Na⁺ : flamme jaune vif | Cu²⁺ : flamme verte",
          "note": "Mise en évidence immédiate au fil de platine."
        }
      ],
      "keyRule": "L'addition de soude permet d'identifier les cations : Cu²⁺ donne un précipité bleu, Fe²⁺ un précipité vert pâle, Fe³⁺ un précipité rouille, Zn²⁺ un précipité blanc soluble dans l'excès de réactif. Au test à la flamme, Na⁺ est jaune et Cu²⁺ est vert.",
      "workedExample": {
        "title": "Identification d'un cation métallique par tests croisés",
        "statement": "On dispose d'un flacon incolore contenant une solution A. Lorsqu'on trempe une tige de platine dans A et qu'on la passe à la flamme, celle-ci devient verte. Lorsqu'on verse quelques gouttes de soude dans un échantillon de A, il se forme un abondant précipité bleu. Identifie le cation présent dans la solution et écris l'équation-bilan de précipitation.",
        "methodSteps": [
          "Analyser le test à la flamme : la coloration verte caractéristique de la flamme indique la présence d'ions cuivre II Cu²⁺.",
          "Analyser le test chimique : l'apparition d'un précipité bleu lors de l'ajout d'ions hydroxyde OH⁻ confirme la formation d'hydroxyde de cuivre II Cu(OH)₂.",
          "Écrire l'équation de précipitation : Cu²⁺(aq) + 2 OH⁻(aq) ⟶ Cu(OH)₂(s)↓."
        ],
        "conclusion": "Le cation présent dans la solution A est l'ion cuivre II Cu²⁺, selon la réaction Cu²⁺ + 2 OH⁻ ⟶ Cu(OH)₂↓."
      },
      "exercises": [
        {
          "id": "seconde_c_chimie_ch9_p1_ex1",
          "type": "mcq",
          "prompt": "Quelle est la couleur caractéristique conférée à la flamme d'un bec Bunsen par les ions sodium Na⁺ ?",
          "options": [
            "Jaune persistante",
            "Verte",
            "Bleue indigo",
            "Rouge carmin"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La présence d'ions Na⁺ est immédiatement décelée au test à la flamme par une couleur jaune vive et persistante."
        },
        {
          "id": "seconde_c_chimie_ch9_p1_ex2",
          "type": "mcq",
          "prompt": "L'addition de quelques gouttes d'hydroxyde de sodium (soude) dans une solution inconnue produit un précipité vert pâle. Quel est le cation identifié ?",
          "options": [
            "L'ion fer II (Fe²⁺)",
            "L'ion fer III (Fe³⁺)",
            "L'ion cuivre II (Cu²⁺)",
            "L'ion zinc (Zn²⁺)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le précipité vert pâle est l'hydroxyde de fer II Fe(OH)₂, formé par la réaction Fe²⁺ + 2 OH⁻ ⟶ Fe(OH)₂↓."
        },
        {
          "id": "seconde_c_chimie_ch9_p1_ex3",
          "type": "mcq",
          "prompt": "Quelle est la formule et la couleur du précipité formé lors du test des ions fer III (Fe³⁺) par la soude ?",
          "options": [
            "Fe(OH)₃, de couleur rouille",
            "Fe(OH)₂, de couleur vert pâle",
            "Cu(OH)₂, de couleur bleue",
            "Fe₂O₃, de couleur noire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les ions Fe³⁺ réagissent avec les ions OH⁻ selon Fe³⁺ + 3 OH⁻ ⟶ Fe(OH)₃↓, formant un précipité gélatineux rouille."
        },
        {
          "id": "seconde_c_chimie_ch9_p1_ex4",
          "type": "mcq",
          "prompt": "Quelle observation permet de distinguer sans ambiguïté les ions zinc Zn²⁺ des ions aluminium Al³⁺ lors de l'ajout de réactifs ?",
          "options": [
            "Le précipité blanc d'hydroxyde de zinc Zn(OH)₂ se redissout dans un excès de soude ou dans l'ammoniac",
            "Zn²⁺ donne un précipité bleu alors qu'Al³⁺ donne un précipité jaune",
            "Zn²⁺ colore la flamme en violet",
            "Al³⁺ dégage spontanément du dichlore gazeux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Zn(OH)₂ est amphotère et forme des complexes solubles : le précipité blanc de Zn(OH)₂ se redissout en milieu fortement basique (excès de soude) ou en présence d'ammoniac."
        },
        {
          "id": "seconde_c_chimie_ch9_p1_ex5",
          "type": "mcq",
          "prompt": "Quelle est l'équation-bilan de la réaction de caractérisation des ions cuivre II (Cu²⁺) par la soude ?",
          "options": [
            "Cu²⁺ + 2 OH⁻ ⟶ Cu(OH)₂↓",
            "Cu²⁺ + OH⁻ ⟶ CuOH↓",
            "Cu + 2 OH⁻ ⟶ CuO + H₂",
            "Cu²⁺ + 2 Cl⁻ ⟶ CuCl₂↓"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La réaction fait intervenir un ion Cu²⁺ et deux ions hydroxydes OH⁻ pour donner le précipité neutre Cu(OH)₂↓ (bleu)."
        },
        {
          "id": "seconde_c_chimie_ch9_p1_ex6",
          "type": "mcq",
          "prompt": "Une solution est incolore et donne un précipité blanc lorsqu'on y ajoute quelques gouttes de solution de sulfate de sodium. Quel cation peut-on soupçonner ?",
          "options": [
            "L'ion baryum Ba²⁺ (formation de précipité de BaSO₄)",
            "L'ion sodium Na⁺",
            "L'ion cuivre Cu²⁺",
            "L'ion permanganate MnO₄⁻"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les ions baryum Ba²⁺ réagissent spécifiquement avec les ions sulfate SO₄²⁻ pour donner un précipité blanc très insoluble de sulfate de baryum BaSO₄."
        },
        {
          "id": "seconde_c_chimie_ch9_p1_ex7",
          "type": "mcq",
          "prompt": "Quelle couleur possède une solution aqueuse contenant des ions permanganate MnO₄⁻ ?",
          "options": [
            "Violette intense",
            "Bleue claire",
            "Verte",
            "Jaune orangée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'ion permanganate MnO₄⁻ confère à ses solutions une coloration violette très caractéristique et très intense."
        },
        {
          "id": "seconde_c_chimie_ch9_p1_ex8",
          "type": "mcq",
          "prompt": "Pourquoi dit-on qu'une solution bleue ne contient pas obligatoirement des ions cuivre II Cu²⁺ ?",
          "options": [
            "Car d'autres espèces chimiques ou colorants peuvent donner une coloration bleue sans contenir de cuivre ; seul un test chimique apporte la preuve",
            "Car les ions Cu²⁺ sont toujours incolores dans l'eau pure",
            "Car le bleu est obligatoirement dû à l'ion fer II",
            "Car la couleur d'une solution dépend uniquement de la lumière ambiante"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La couleur est un indice macroscopique, mais plusieurs substances ou colorants peuvent produire une même nuance. Seule la réaction caractéristique de précipitation valide la présence de l'espèce."
        }
      ]
    },
    {
      "id": "seconde_c_chimie_ch9_p2_anions_degagement_gazeux",
      "order": 2,
      "title": "Identification des anions et tests par dégagement gazeux",
      "summary": "Maîtriser les tests spécifiques des anions (chlorure, sulfate, carbonate, phosphate, nitrate) et les réactions à dégagement gazeux caractéristiques.",
      "conceptExplanation": "L'identification des anions repose sur des tests de précipitation sélective ou sur des dégagements gazeux spécifiques :\n\n1. Ion chlorure Cl⁻ :\nOn ajoute quelques gouttes d'une solution de nitrate d'argent (Ag⁺ + NO₃⁻). Il se forme un précipité blanc de chlorure d'argent AgCl qui noircit à la lumière :\nAg⁺ + Cl⁻ ⟶ AgCl↓.\n\n2. Ion sulfate SO₄²⁻ :\nOn ajoute une solution de chlorure de baryum (Ba²⁺ + 2 Cl⁻) ou de nitrate de baryum. Il se forme un précipité blanc de sulfate de baryum BaSO₄, insoluble dans les acides :\nBa²⁺ + SO₄²⁻ ⟶ BaSO₄↓.\n\n3. Ion carbonate CO₃²⁻ (test avec dégagement gazeux) :\nOn verse quelques gouttes d'acide chlorhydrique (H₃O⁺ + Cl⁻) sur la solution ou le solide. On observe une vive effervescence avec dégagement de dioxyde de carbone CO₂ gazeux qui trouble l'eau de chaux :\nCO₃²⁻ + 2 H₃O⁺ ⟶ CO₂↑ + 3 H₂O.\n\n4. Ion phosphate PO₄³⁻ :\nEn présence du réactif molybdique en milieu acide et à chaud, il apparaît une coloration ou un précipité jaune caractéristique de phosphomolybdate.\n\n5. Ion nitrate NO₃⁻ :\nEn milieu acide chaud avec du sulfate de fer II, ou par réduction, on observe un anneau brun ou la décoloration du permanganate de potassium.\n\n6. Ion ammonium NH₄⁺ (cation décelable par gaz) :\nLorsqu'on chauffe une solution d'ammonium en présence de soude concentrée, il se dégage du gaz ammoniac NH₃ (odeur piquante), qui brunit le papier filtre imbibé de réactif de Nessler ou bleuit le papier pH humide :\nNH₄⁺ + OH⁻ ⟶ NH₃↑ + H₂O.",
      "formulas": [
        {
          "name": "Caractérisation des chlorures",
          "formula": "Ag⁺ + Cl⁻ ⟶ AgCl↓",
          "note": "Précipité blanc qui noircit sous l'effet des rayons lumineux."
        },
        {
          "name": "Caractérisation des sulfates",
          "formula": "Ba²⁺ + SO₄²⁻ ⟶ BaSO₄↓",
          "note": "Précipité blanc persistant et totalement insoluble en milieu acide."
        },
        {
          "name": "Caractérisation des carbonates",
          "formula": "CO₃²⁻ + 2 H₃O⁺ ⟶ CO₂↑ + 3 H₂O",
          "note": "Effervescence avec dégagement gazeux troublant l'eau de chaux."
        },
        {
          "name": "Caractérisation des ions ammonium",
          "formula": "NH₄⁺ + OH⁻ ⟶ NH₃↑ + H₂O",
          "note": "Gaz ammoniac décelable au réactif de Nessler (brunissement)."
        },
        {
          "name": "Caractérisation des phosphates",
          "formula": "PO₄³⁻ + réactif molybdique ⟶ coloration jaune",
          "note": "Test spécifique réalisé en milieu acide réchauffé."
        }
      ],
      "keyRule": "Ag⁺ précipite les Cl⁻ en blanc qui noircit au soleil ; Ba²⁺ précipite les SO₄²⁻ en blanc ; l'acide libère du CO₂ qui trouble l'eau de chaux à partir des CO₃²⁻ ; la soude à chaud libère du NH₃ à partir de NH₄⁺.",
      "workedExample": {
        "title": "Analyse qualitative complète d'une solution inconnue",
        "statement": "On dispose d'une solution aqueuse inconnue S. On réalise deux tests successifs sur des fractions distinctes :\n1. L'ajout de nitrate d'argent produit un précipité blanc qui noircit sous les rayons du soleil.\n2. L'ajout de soude produit un précipité rouille.\nIdentifie les ions présents dans S, écris les équations des deux réactions et déduis le nom et la formule de la solution S.",
        "methodSteps": [
          "Le test 1 (précipité blanc qui noircit à la lumière avec Ag⁺) met en évidence l'anion chlorure Cl⁻ : Ag⁺ + Cl⁻ ⟶ AgCl↓.",
          "Le test 2 (précipité rouille avec la soude OH⁻) met en évidence le cation fer III Fe³⁺ : Fe³⁺ + 3 OH⁻ ⟶ Fe(OH)₃↓.",
          "Les ions constitutifs de la solution S sont donc Fe³⁺ et Cl⁻.",
          "Par neutralité électrique, la formule du composé solide dissous est FeCl₃.",
          "La solution S est une solution aqueuse de chlorure de fer III (ou chlorure ferrique)."
        ],
        "conclusion": "La solution S est du chlorure de fer III (FeCl₃), contenant les ions Fe³⁺ et Cl⁻."
      },
      "exercises": [
        {
          "id": "seconde_c_chimie_ch9_p2_ex1",
          "type": "mcq",
          "prompt": "Quel réactif permet de caractériser sans équivoque les ions chlorure Cl⁻ en solution aqueuse ?",
          "options": [
            "Le nitrate d'argent (Ag⁺ + NO₃⁻), donnant un précipité blanc qui noircit à la lumière",
            "La soude caustique, donnant un précipité bleu",
            "L'eau de chaux, qui se trouble immédiatement",
            "Le sulfate de cuivre, devenant vert"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La réaction Ag⁺ + Cl⁻ ⟶ AgCl↓ produit du chlorure d'argent blanc, dont la particularité physique essentielle est de noircir progressivement à la lumière."
        },
        {
          "id": "seconde_c_chimie_ch9_p2_ex2",
          "type": "mcq",
          "prompt": "Quel précipité est formé lors de la détection des ions sulfate SO₄²⁻ par les ions baryum Ba²⁺ ?",
          "options": [
            "BaSO₄, un précipité blanc insoluble dans les acides et ne noircissant pas à la lumière",
            "AgCl, un précipité blanc qui jaunit",
            "BaCl₂, un solide soluble",
            "FeSO₄, un précipité vert foncé"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ba²⁺ + SO₄²⁻ ⟶ BaSO₄↓ forme un précipité blanc de sulfate de baryum, très stable et totalement insoluble dans l'eau et dans les acides dilués."
        },
        {
          "id": "seconde_c_chimie_ch9_p2_ex3",
          "type": "mcq",
          "prompt": "Lorsqu'on verse de l'acide chlorhydrique sur une poudre de craie (carbonate de calcium CaCO₃), quel phénomène observe-t-on ?",
          "options": [
            "Une vive effervescence avec dégagement de dioxyde de carbone CO₂ qui trouble l'eau de chaux",
            "La formation d'un liquide violet sans gaz",
            "Un dégagement de dihydrogène inflammable",
            "Une absence totale de réaction à froid"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les ions carbonate réagissent avec l'acide : CO₃²⁻ + 2 H₃O⁺ ⟶ CO₂↑ + 3 H₂O. Le gaz dégagé est du CO₂, qui trouble l'eau de chaux."
        },
        {
          "id": "seconde_c_chimie_ch9_p2_ex4",
          "type": "mcq",
          "prompt": "Quel test permet de caractériser expérimentalement le gaz ammoniac NH₃ dégagé lorsqu'on chauffe des ions ammonium NH₄⁺ avec de la soude ?",
          "options": [
            "Il brunit un papier filtre imbibé de réactif de Nessler (et possède une odeur piquante)",
            "Il émet un bruit d'aboiement à l'approche d'une allumette",
            "Il rallume une allumette à demi-éteinte",
            "Il trouble l'eau de chaux en devenant laiteux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le gaz ammoniac NH₃ formé par NH₄⁺ + OH⁻ ⟶ NH₃↑ + H₂O est un gaz basique d'odeur piquante qui brunit le réactif de Nessler."
        },
        {
          "id": "seconde_c_chimie_ch9_p2_ex5",
          "type": "mcq",
          "prompt": "Une solution inconnue donne un précipité blanc avec le nitrate d'argent et un précipité vert pâle avec la soude. De quelle solution s'agit-il ?",
          "options": [
            "Une solution de chlorure de fer II (FeCl₂)",
            "Une solution de chlorure de fer III (FeCl₃)",
            "Une solution de sulfate de cuivre (CuSO₄)",
            "Une solution de nitrate de sodium (NaNO₃)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le test au nitrate d'argent révèle les ions Cl⁻, et le test à la soude révèle les ions Fe²⁺ (précipité vert pâle de Fe(OH)₂). Il s'agit donc d'une solution de chlorure de fer II (FeCl₂)."
        },
        {
          "id": "seconde_c_chimie_ch9_p2_ex6",
          "type": "mcq",
          "prompt": "Quel réactif utilise-t-on pour identifier spécifiquement les ions phosphate PO₄³⁻ en solution aqueuse ?",
          "options": [
            "Le réactif molybdique (formation d'un précipité ou d'une coloration jaune)",
            "Le nitrate d'argent à l'obscurité",
            "Le papier tournesol sec",
            "La grenaille de zinc"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En présence de réactif nitro-molybdique en milieu acide et chaud, les ions phosphate forment un composé complexe jaune caractéristique (phosphomolybdate d'ammonium)."
        },
        {
          "id": "seconde_c_chimie_ch9_p2_ex7",
          "type": "mcq",
          "prompt": "Dans l'équation de précipitation Ba²⁺ + SO₄²⁻ ⟶ BaSO₄↓ obtenue en mélangeant du chlorure de baryum et du sulfate de sodium, quel rôle jouent les ions Na⁺ et Cl⁻ ?",
          "options": [
            "Ce sont des ions spectateurs (ou indifférents) car ils ne participent pas à la formation du précipité",
            "Ce sont les catalyseurs de la réaction chimique",
            "Ils se transforment en gaz sous l'effet de la chaleur",
            "Ils s'oxydent mutuellement en chlore et sodium"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les ions Na⁺ et Cl⁻ restent inchangés et libres en solution aqueuse avant et après le mélange : ce sont des ions spectateurs."
        },
        {
          "id": "seconde_c_chimie_ch9_p2_ex8",
          "type": "mcq",
          "prompt": "Un laborantin verse de l'acide chlorhydrique sur un échantillon de roche prélevé en Côte d'Ivoire. Une effervescence se produit et le gaz trouble l'eau de chaux. Que peut-on conclure sur la roche ?",
          "options": [
            "Elle contient du calcaire (carbonate de calcium CaCO₃)",
            "Elle est constituée exclusivement de quartz pur SiO₂",
            "Elle contient du fer métallique pur",
            "Elle est riche en chlorure de sodium cristallisé"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'effervescence avec dégagement de CO₂ troublant l'eau de chaux est le test géologique de référence prouvant la présence de carbonates (roche calcaire)."
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 10 : SOLUTIONS ACIDES ET BASIQUES. MESURE DE pH
// ============================================================================

export const chimie2deCSolutionsAcidesBasiquesChapter: CurriculumChapter = {
  "id": "seconde_c_chimie_ch10_solutions_acides_basiques_ph",
  "subjectId": "physique_chimie",
  "gradeLevel": "seconde_c",
  "order": 10,
  "officialVolumeHours": 8,
  "title": "Leçon 10 — Solutions acides et basiques. Mesure de pH",
  "summary": "Solutions d'acide chlorhydrique et d'hydroxyde de sodium, attaques sur les métaux et le calcaire, notion de pH, relations d'acidité, produit ionique de l'eau et effet de la dilution.",
  "points": [
    {
      "id": "seconde_c_chimie_ch10_p1_acide_chlorhydrique_soude_reactions",
      "order": 1,
      "title": "Solutions d'acide chlorhydrique et d'hydroxyde de sodium",
      "summary": "Comprendre la nature ionique, la préparation exothermique et les propriétés chimiques distinctives des acides et des bases forts usuels.",
      "conceptExplanation": "1. Solution d'acide chlorhydrique :\nLe chlorure d'hydrogène HCl est un gaz incolore, d'odeur piquante et suffocante, plus dense que l'air (M = 36,5 g/mol, d ≈ 1,26). Sa dissolution dans l'eau est très soluble et fortement exothermique.\nLors de sa dissolution, il subit une ionisation totale :\nHCl + H₂O ⟶ H₃O⁺ + Cl⁻ (où H₃O⁺ est l'ion hydronium ou oxonium).\nPropriétés caractéristiques de la solution d'acide chlorhydrique :\n- Action sur les indicateurs colorés : fait virer l'hélianthine au rouge, le bleu de bromothymol (BBT) au jaune, et laisse la phénolphtaléine incolore.\n- Action sur les métaux : attaque vivement le fer, le zinc et l'aluminium avec effervescence de dihydrogène H₂ (qui détonne à la flamme) :\n  • Fe + 2 H⁺ ⟶ Fe²⁺ + H₂↑\n  • Zn + 2 H⁺ ⟶ Zn²⁺ + H₂↑\n  • 2 Al + 6 H⁺ ⟶ 2 Al³⁺ + 3 H₂↑\n  NB : l'acide chlorhydrique n'a AUCUNE action sur le cuivre Cu !\n- Action sur le calcaire : attaque CaCO₃ avec dégagement de CO₂ qui trouble l'eau de chaux : CaCO₃ + 2 H₃O⁺ ⟶ Ca²⁺ + CO₂↑ + 3 H₂O.\n\n2. Solution d'hydroxyde de sodium (soude caustique NaOH) :\nLe solide NaOH est un composé ionique blanc, déliquescent, constitué d'ions Na⁺ et OH⁻. Sa dissolution dans l'eau est fortement exothermique :\nNaOH(s) ⟶ Na⁺(aq) + OH⁻(aq).\nPropriétés caractéristiques de la solution de soude :\n- Action sur les indicateurs colorés : maintient l'hélianthine jaune, fait virer le BBT au bleu franc, et fait virer la phénolphtaléine au violet/rose fuchsia.\n- Action sur les ions métalliques : forme des précipités d'hydroxydes insolubles (Cu(OH)₂ bleu, Fe(OH)₂ vert pâle, Fe(OH)₃ rouille, Zn(OH)₂ blanc, Al(OH)₃ blanc).\n- Action sur les ions ammonium : à chaud, dégage du gaz ammoniac NH₃ : NH₄⁺ + OH⁻ ⟶ NH₃↑ + H₂O.",
      "formulas": [
        {
          "name": "Dissolution totale du gaz HCl",
          "formula": "HCl + H₂O ⟶ H₃O⁺ + Cl⁻",
          "note": "Réaction fortement exothermique créant des ions hydronium."
        },
        {
          "name": "Dissolution de la soude NaOH",
          "formula": "NaOH(s) ⟶ Na⁺ + OH⁻",
          "note": "Réaction exothermique libérant des ions hydroxyde basiques."
        },
        {
          "name": "Attaque du zinc par l'acide",
          "formula": "Zn + 2 H₃O⁺ ⟶ Zn²⁺ + H₂↑ + 2 H₂O",
          "note": "Effervescence avec dégagement de dihydrogène détonant."
        },
        {
          "name": "Attaque du fer par l'acide",
          "formula": "Fe + 2 H₃O⁺ ⟶ Fe²⁺ + H₂↑ + 2 H₂O",
          "note": "Formation d'ions fer II vert pâle et de gaz dihydrogène."
        },
        {
          "name": "Attaque du calcaire par l'acide",
          "formula": "CaCO₃ + 2 H₃O⁺ ⟶ Ca²⁺ + CO₂↑ + 3 H₂O",
          "note": "Dégagement de dioxyde de carbone troublant l'eau de chaux."
        },
        {
          "name": "Inertie du cuivre métallique",
          "formula": "Cu + H₃O⁺ ⟶ Pas de réaction",
          "note": "L'acide chlorhydrique n'attaque pas le cuivre métallique."
        }
      ],
      "keyRule": "HCl et NaOH se dissolvent avec fort dégagement de chaleur. L'acide colore le BBT en jaune et attaque Fe, Zn, Al (dégagement de H₂) mais JAMAIS le cuivre. La soude colore le BBT en bleu et précipite les cations métalliques.",
      "workedExample": {
        "title": "Calcul du volume de dihydrogène produit par attaque acide",
        "statement": "On verse un excès d'acide chlorhydrique sur 1,3 g de poudre de zinc pur Zn (M = 65,4 g/mol). On recueille le gaz dégagé à 25 °C sous une pression où le volume molaire est Vm = 24 L/mol. Identifie le gaz formé, écris l'équation-bilan et calcule le volume de gaz dégagé.",
        "methodSteps": [
          "Identifier le gaz produit : l'action de l'acide chlorhydrique sur le zinc produit du dihydrogène gazeux H₂, caractérisé par une petite détonation à la flamme.",
          "Écrire l'équation-bilan de la réaction d'oxydoréduction : Zn(s) + 2 H⁺(aq) ⟶ Zn²⁺(aq) + H₂(g)↑.",
          "Calculer la quantité de matière de zinc ayant réagi : n(Zn) = m / M = 1,3 / 65,4 ≈ 0,020 mol.",
          "D'après les coefficients stœchiométriques : n(H₂) = n(Zn) = 0,020 mol.",
          "Calculer le volume de gaz recueilli : V(H₂) = n(H₂) × Vm = 0,020 mol × 24 L/mol = 0,48 L = 480 cm³."
        ],
        "conclusion": "Le gaz dégagé est le dihydrogène H₂, et son volume est de 0,48 L (480 cm³)."
      },
      "exercises": [
        {
          "id": "seconde_c_chimie_ch10_p1_ex1",
          "type": "mcq",
          "prompt": "Quelle est la couleur prise par le bleu de bromothymol (BBT) en présence d'une solution d'acide chlorhydrique ?",
          "options": [
            "Jaune",
            "Bleue",
            "Verte",
            "Rouge violette"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le BBT est jaune en milieu acide (pH < 6,0), vert en milieu neutre (6,0 < pH < 7,6), et bleu en milieu basique (pH > 7,6)."
        },
        {
          "id": "seconde_c_chimie_ch10_p1_ex2",
          "type": "mcq",
          "prompt": "Parmi les métaux suivants, lequel n'est absolument PAS attaqué par une solution d'acide chlorhydrique diluée ?",
          "options": [
            "Le cuivre (Cu)",
            "Le fer (Fe)",
            "Le zinc (Zn)",
            "L'aluminium (Al)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le cuivre possède un potentiel standard d'oxydoréduction supérieur à celui du couple H⁺/H₂ : il ne réagit pas avec les ions H⁺ de l'acide chlorhydrique."
        },
        {
          "id": "seconde_c_chimie_ch10_p1_ex3",
          "type": "mcq",
          "prompt": "Quel gaz se dégage lorsqu'on fait réagir de l'acide chlorhydrique sur du calcaire (CaCO₃) ?",
          "options": [
            "Du dioxyde de carbone CO₂, qui trouble l'eau de chaux",
            "Du dihydrogène H₂, qui explose à la flamme",
            "Du dioxygène O₂, qui ravive la braise",
            "Du dichlore Cl₂, qui décolore l'indigo"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La réaction CaCO₃ + 2 H₃O⁺ ⟶ Ca²⁺ + CO₂↑ + 3 H₂O produit du gaz dioxyde de carbone CO₂, caractérisé par le trouble de l'eau de chaux."
        },
        {
          "id": "seconde_c_chimie_ch10_p1_ex4",
          "type": "mcq",
          "prompt": "Quelle est la coloration de la phénolphtaléine en présence d'une solution d'hydroxyde de sodium (soude) ?",
          "options": [
            "Rose violacée (fuchsia)",
            "Incolore",
            "Bleue indigo",
            "Jaune canari"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La phénolphtaléine est incolore en milieu acide et neutre, et prend une teinte rose fuchsia à violette très marquée en milieu basique (pH > 8,2)."
        },
        {
          "id": "seconde_c_chimie_ch10_p1_ex5",
          "type": "mcq",
          "prompt": "L'équation de dissolution du gaz chlorure d'hydrogène HCl dans l'eau s'écrit :",
          "options": [
            "HCl + H₂O ⟶ H₃O⁺ + Cl⁻",
            "HCl ⟶ H⁺ + Cl⁻ sans interaction avec le solvant",
            "2 HCl + H₂O ⟶ Cl₂ + H₂O + H₂",
            "HCl + OH⁻ ⟶ H₂O + Cl⁻"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La molécule HCl réagit chimiquement avec l'eau par transfert de proton pour donner l'ion hydronium H₃O⁺ et l'ion chlorure Cl⁻."
        },
        {
          "id": "seconde_c_chimie_ch10_p1_ex6",
          "type": "mcq",
          "prompt": "Pourquoi la dissolution de l'hydroxyde de sodium NaOH solide dans l'eau exige-t-elle des précautions particulières ?",
          "options": [
            "Parce qu'elle est fortement exothermique et libère une chaleur intense risquant de provoquer des projections corrosives",
            "Parce qu'elle dégage spontanément du monoxyde de carbone mortel",
            "Parce que la solution gèle instantanément en absorbant la chaleur",
            "Parce que le récipient devient radioactif"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La dissolution de la soude est fortement exothermique (dégagement de chaleur violent). Le bécher s'échauffe très vite et la soude concentrée est extrêmement caustique pour les tissus."
        },
        {
          "id": "seconde_c_chimie_ch10_p1_ex7",
          "type": "mcq",
          "prompt": "Quelle est l'équation-bilan simplifiée traduisant l'attaque de la limaille de fer par les ions hydronium de l'acide chlorhydrique ?",
          "options": [
            "Fe + 2 H⁺ ⟶ Fe²⁺ + H₂↑",
            "Fe + 3 H⁺ ⟶ Fe³⁺ + 3/2 H₂↑",
            "2 Fe + 6 H⁺ ⟶ 2 Fe³⁺ + 3 H₂↑",
            "Fe + H⁺ ⟶ Fe⁺ + 1/2 H₂↑"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'acide chlorhydrique oxyde le fer métallique en ions fer II Fe²⁺ avec réduction des protons en dihydrogène : Fe + 2 H⁺ ⟶ Fe²⁺ + H₂↑."
        },
        {
          "id": "seconde_c_chimie_ch10_p1_ex8",
          "type": "mcq",
          "prompt": "Quel gaz à odeur piquante se dégage lorsqu'on chauffe un mélange de soude et de chlorure d'ammonium NH₄Cl ?",
          "options": [
            "L'ammoniac NH₃",
            "Le dichlore Cl₂",
            "Le diazote N₂",
            "Le sulfure d'hydrogène H₂S"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'ion ammonium réagit avec les ions hydroxyde à chaud selon NH₄⁺ + OH⁻ ⟶ NH₃↑ + H₂O, dégageant de l'ammoniac gazeux."
        }
      ]
    },
    {
      "id": "seconde_c_chimie_ch10_p2_definition_ph_echelle_dilution",
      "order": 2,
      "title": "Notion de pH, produit ionique de l'eau et effet de la dilution",
      "summary": "Maîtriser la définition du pH, la relation [H₃O⁺] = 10⁻ᵖᴴ, l'échelle 0-14, le produit ionique Ke = 10⁻¹⁴ et la variation du pH lors de la dilution.",
      "conceptExplanation": "1. Définition du pH :\nLe potentiel Hydrogène (pH) est un nombre sans unité qui mesure l'acidité ou la basicité d'une solution aqueuse diluée en fonction de sa concentration en ions hydronium [H₃O⁺] :\n[H₃O⁺] = 10⁻ᵖᴴ  ou  pH = −log[H₃O⁺] (avec [H₃O⁺] en mol/L).\nPlus la concentration en ions H₃O⁺ est grande, plus le pH est faible.\nCette échelle est rigoureusement définie entre 0 et 14 à 25 °C pour les solutions diluées (concentrations comprises entre 10⁻¹⁴ et 1 mol/L).\n\n2. Mesure du pH :\n- Approximative : papier pH (papier buvard imprégné d'un mélange d'indicateurs colorés dont la teinte est comparée à un nuancier).\n- Précise : pH-mètre étalonné (sonde électronique mesurant la différence de potentiel, précision de 0,05 unité).\n\n3. Classification des solutions aqueuses à 25 °C :\n- Solution acide : pH < 7 ⟺ [H₃O⁺] > 10⁻⁷ mol/L.\n- Solution neutre (ex : eau pure) : pH = 7 ⟺ [H₃O⁺] = [OH⁻] = 10⁻⁷ mol/L.\n- Solution basique : pH > 7 ⟺ [H₃O⁺] < 10⁻⁷ mol/L (soit [OH⁻] > 10⁻⁷ mol/L).\n\n4. Produit ionique de l'eau pure :\nDans toute solution aqueuse à 25 °C, l'auto-protolyse de l'eau impose la constante fondamentale :\nKe = [H₃O⁺] × [OH⁻] = 10⁻¹⁴.\nPar conséquent, pour une solution basique d'hydroxyde de sodium de concentration C en soude :\n[OH⁻] = C ⟹ [H₃O⁺] = 10⁻¹⁴ / [OH⁻] = 10⁻¹⁴ / C ⟹ pH = 14 + log(C).\nExemple : pour une solution de soude C = 10⁻³ mol/L, [H₃O⁺] = 10⁻¹⁴ / 10⁻³ = 10⁻¹¹ mol/L, donc pH = 11.\n\n5. Effet de la dilution sur le pH :\nDiluer consiste à ajouter de l'eau pure, ce qui diminue la concentration des espèces dissoutes :\n- Pour une solution acide : lors de la dilution, [H₃O⁺] diminue, donc son pH augmente et tend vers 7 (sans jamais dépasser 7).\n- Pour une solution basique : lors de la dilution, [OH⁻] diminue, donc son pH diminue et tend vers 7 (sans jamais descendre en dessous de 7).",
      "formulas": [
        {
          "name": "Relation fondamentale du pH",
          "formula": "[H₃O⁺] = 10⁻ᵖᴴ mol/L",
          "note": "Permet de calculer directement la concentration hydronium."
        },
        {
          "name": "Formule inverse logarithmique",
          "formula": "pH = −log[H₃O⁺]",
          "note": "Le pH diminue quand la concentration hydronium augmente."
        },
        {
          "name": "Produit ionique de l'eau (à 25 °C)",
          "formula": "Ke = [H₃O⁺] × [OH⁻] = 10⁻¹⁴",
          "note": "Constante valable dans toute solution aqueuse diluée à 25 °C."
        },
        {
          "name": "Solution neutre à 25 °C",
          "formula": "pH = 7 ⟺ [H₃O⁺] = [OH⁻] = 10⁻⁷ mol/L",
          "note": "Équilibre strict entre acidité et basicité."
        },
        {
          "name": "pH d'une solution de base forte (soude)",
          "formula": "[H₃O⁺] = 10⁻¹⁴ / C ⟹ pH = 14 + log C",
          "note": "Par exemple pour C = 10⁻³ mol/L, pH = 14 − 3 = 11."
        },
        {
          "name": "Effet de la dilution",
          "formula": "Acide ⟹ pH ↗ vers 7 | Base ⟹ pH ↘ vers 7",
          "note": "Le pH se rapproche toujours de 7 sans jamais franchir la neutralité."
        }
      ],
      "keyRule": "À 25 °C, l'échelle s'étend de 0 à 14. [H₃O⁺] = 10⁻ᵖᴴ et [H₃O⁺]×[OH⁻] = 10⁻¹⁴. Diluer un acide augmente son pH vers 7 ; diluer une base diminue son pH vers 7.",
      "workedExample": {
        "title": "Calcul des concentrations ioniques et du pH d'une solution de soude",
        "statement": "On prépare une solution aqueuse d'hydroxyde de sodium de concentration molaire C = 10⁻³ mol/L à 25 °C. 1) Écris l'équation de dissociation de NaOH dans l'eau. 2) Détermine les concentrations des ions OH⁻ et H₃O⁺. 3) Déduis-en la valeur du pH de cette solution.",
        "methodSteps": [
          "Écrire la dissociation totale : NaOH(s) ⟶ Na⁺(aq) + OH⁻(aq).",
          "Calculer la concentration en ions hydroxyde : chaque mole de NaOH donne une mole d'ions OH⁻, donc [OH⁻] = C = 10⁻³ mol/L.",
          "Utiliser le produit ionique de l'eau à 25 °C : [H₃O⁺] × [OH⁻] = 10⁻¹⁴.",
          "En déduire [H₃O⁺] : [H₃O⁺] = 10⁻¹⁴ / [OH⁻] = 10⁻¹⁴ / 10⁻³ = 10⁻¹¹ mol/L.",
          "Déterminer le pH : [H₃O⁺] = 10⁻ᵖᴴ = 10⁻¹¹ mol/L ⟹ pH = 11."
        ],
        "conclusion": "La solution de soude possède [OH⁻] = 10⁻³ mol/L, [H₃O⁺] = 10⁻¹¹ mol/L, et un pH basique de 11."
      },
      "exercises": [
        {
          "id": "seconde_c_chimie_ch10_p2_ex1",
          "type": "mcq",
          "prompt": "Une solution aqueuse a une concentration en ions hydronium [H₃O⁺] = 10⁻⁴ mol/L à 25 °C. Quel est son pH et sa nature ?",
          "options": [
            "pH = 4, la solution est acide",
            "pH = 10, la solution est basique",
            "pH = 7, la solution est neutre",
            "pH = −4, la solution est ultra-acide"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition, [H₃O⁺] = 10⁻ᵖᴴ. Comme [H₃O⁺] = 10⁻⁴ mol/L, pH = 4. Comme 4 < 7, la solution est acide."
        },
        {
          "id": "seconde_c_chimie_ch10_p2_ex2",
          "type": "mcq",
          "prompt": "Quelle est la valeur du produit ionique de l'eau pure Ke = [H₃O⁺] × [OH⁻] à la température de 25 °C ?",
          "options": [
            "10⁻¹⁴",
            "10⁻⁷",
            "10¹⁴",
            "1,0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À 25 °C, le produit des concentrations molaires des ions hydronium et hydroxyde dans toute solution aqueuse est constant et vaut Ke = 10⁻¹⁴."
        },
        {
          "id": "seconde_c_chimie_ch10_p2_ex3",
          "type": "mcq",
          "prompt": "À 25 °C, une solution aqueuse de soude a une concentration [OH⁻] = 10⁻² mol/L. Quelle est la concentration en ions [H₃O⁺] et son pH ?",
          "options": [
            "[H₃O⁺] = 10⁻¹² mol/L et pH = 12",
            "[H₃O⁺] = 10⁻² mol/L et pH = 2",
            "[H₃O⁺] = 10⁻¹⁴ mol/L et pH = 14",
            "[H₃O⁺] = 10⁻⁷ mol/L et pH = 7"
          ],
          "correctAnswerIndex": 0,
          "explanation": "[H₃O⁺] = Ke / [OH⁻] = 10⁻¹⁴ / 10⁻² = 10⁻¹² mol/L. Le pH est donc égal à 12 (solution basique)."
        },
        {
          "id": "seconde_c_chimie_ch10_p2_ex4",
          "type": "mcq",
          "prompt": "On dilue 10 fois une solution d'acide chlorhydrique dont le pH initial est égal à 2,0. Que devient son pH ?",
          "options": [
            "Le pH augmente et passe à 3,0",
            "Le pH diminue et passe à 1,0",
            "Le pH passe instantanément à 12",
            "Le pH ne change pas car c'est toujours le même acide"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une dilution par 10 divise la concentration [H₃O⁺] par 10 : de 10⁻² mol/L, elle passe à 10⁻³ mol/L. Le pH passe donc de 2,0 à 3,0 (il augmente vers 7)."
        },
        {
          "id": "seconde_c_chimie_ch10_p2_ex5",
          "type": "mcq",
          "prompt": "Que se passe-t-il pour le pH d'une solution basique (ex : soude à pH = 12) lorsqu'on la dilue abondamment avec de l'eau pure ?",
          "options": [
            "Son pH diminue et tend progressivement vers 7 sans jamais descendre en dessous de 7",
            "Son pH augmente et tend vers 14",
            "Son pH chute brutalement à 0",
            "Son pH reste fixé à 12"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La dilution diminue la concentration en ions OH⁻. Le pH de la base baisse donc en se rapprochant de la neutralité (pH = 7), sans jamais devenir acide."
        },
        {
          "id": "seconde_c_chimie_ch10_p2_ex6",
          "type": "mcq",
          "prompt": "Parmi les solutions suivantes, quelle est la plus acide ?",
          "options": [
            "Le jus de citron (pH = 2,3)",
            "Le vinaigre (pH = 3,0)",
            "Le jus d'orange (pH = 3,5)",
            "L'eau de pluie (pH = 6,2)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une solution est d'autant plus acide que sa valeur de pH est petite (car cela correspond à une plus grande concentration en ions H₃O⁺). Le jus de citron à pH = 2,3 est la plus acide."
        },
        {
          "id": "seconde_c_chimie_ch10_p2_ex7",
          "type": "mcq",
          "prompt": "Quel appareil électronique permet d'obtenir une mesure directe et rigoureuse du pH avec une précision d'environ 0,05 unité ?",
          "options": [
            "Le pH-mètre",
            "Le papier pH",
            "Le thermomètre à mercure",
            "Le baromètre anéroïde"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le pH-mètre est un millivoltmètre électronique muni d'une sonde combinée (électrode de verre et de référence) mesurant rigoureusement le pH à ±0,05 unité."
        },
        {
          "id": "seconde_c_chimie_ch10_p2_ex8",
          "type": "mcq",
          "prompt": "Dans de l'eau pure à 25 °C, que vaut la concentration en ions hydroxyde [OH⁻] ?",
          "options": [
            "10⁻⁷ mol/L",
            "10⁻¹⁴ mol/L",
            "10⁻² mol/L",
            "0 mol/L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans l'eau pure à 25 °C, l'électroneutralité et l'équilibre d'autoprotolyse imposent [H₃O⁺] = [OH⁻]. Comme leur produit vaut 10⁻¹⁴, on a [H₃O⁺] = [OH⁻] = 10⁻⁷ mol/L."
        }
      ]
    }
  ]
};

// ============================================================================
// LEÇON 11 : RÉACTION ACIDO-BASIQUE. DOSAGE
// ============================================================================

export const chimie2deCReactionAcidoBasiqueDosageChapter: CurriculumChapter = {
  "id": "seconde_c_chimie_ch11_reaction_acido_basique_dosage",
  "subjectId": "physique_chimie",
  "gradeLevel": "seconde_c",
  "order": 11,
  "officialVolumeHours": 8,
  "title": "Leçon 11 — Réaction acido-basique. Dosage",
  "summary": "Caractéristiques thermiques et stœchiométriques de la réaction entre l'acide chlorhydrique et l'hydroxyde de sodium, bilan ionique, principe du dosage acido-basique, virage du BBT à l'équivalence et relation C_A·V_A = C_B·V_BE.",
  "points": [
    {
      "id": "seconde_c_chimie_ch11_p1_caracteristiques_reaction_bilan",
      "order": 1,
      "title": "Caractéristiques de la réaction acido-basique et équation-bilan",
      "summary": "Comprendre les propriétés de la réaction entre l'acide chlorhydrique et la soude (exothermique, totale, équimolaire) et identifier les produits formés.",
      "conceptExplanation": "Lorsqu'on verse une solution d'acide chlorhydrique (H₃O⁺ + Cl⁻) dans une solution d'hydroxyde de sodium (Na⁺ + OH⁻) :\n1. Effet thermique : la température du mélange réactionnel s'élève nettement (par exemple de 28 °C à 35 °C). La réaction acido-basique dégage de la chaleur : elle est exothermique.\n2. Caractère complet : la réaction est totale (les réactifs se consomment entièrement s'ils sont introduits dans les proportions stœchiométriques) et quasi-instantanée.\n3. Équimolarité : une mole d'ions hydronium H₃O⁺ réagit avec exactement une mole d'ions hydroxyde OH⁻ pour former deux moles d'eau H₂O selon l'équation ionique nette :\nH₃O⁺ + OH⁻ ⟶ 2 H₂O.\n4. Produits formés et ions spectateurs :\n- L'évaporation de la solution neutre obtenue laisse des cristaux blancs de chlorure de sodium NaCl.\n- Le test à la flamme donne une flamme jaune révélant la présence des ions sodium Na⁺.\n- Le test au nitrate d'argent produit un précipité blanc de AgCl qui noircit à la lumière révélant les ions chlorure Cl⁻.\n- Les ions Na⁺ et Cl⁻ ne participent pas à la transformation : ce sont des ions spectateurs (ou indifférents).\n- L'équation-bilan globale s'écrit : (H₃O⁺ + Cl⁻) + (Na⁺ + OH⁻) ⟶ (Na⁺ + Cl⁻) + 2 H₂O.\n5. État du mélange selon les quantités initiales :\n- Si n(H₃O⁺) = n(OH⁻) : le mélange est neutre (pH = 7 à 25 °C).\n- Si n(H₃O⁺) > n(OH⁻) : les ions H₃O⁺ sont en excès, le mélange final est acide (pH < 7, le BBT est jaune).\n- Si n(OH⁻) > n(H₃O⁺) : les ions OH⁻ sont en excès, le mélange final est basique (pH > 7, le BBT est bleu).",
      "formulas": [
        {
          "name": "Équation ionique nette",
          "formula": "H₃O⁺ + OH⁻ ⟶ 2 H₂O",
          "note": "Réaction fondamentale de neutralisation acido-basique en solution aqueuse."
        },
        {
          "name": "Équation globale avec ions spectateurs",
          "formula": "(H₃O⁺ + Cl⁻) + (Na⁺ + OH⁻) ⟶ (Na⁺ + Cl⁻) + 2 H₂O",
          "note": "Les ions Na⁺ et Cl⁻ restent inchangés dans la solution."
        },
        {
          "name": "Quantité d'acide introduite",
          "formula": "n(H₃O⁺) = C_A × V_A",
          "note": "En moles, avec C_A en mol/L et V_A en litres."
        },
        {
          "name": "Quantité de base introduite",
          "formula": "n(OH⁻) = C_B × V_B",
          "note": "En moles, avec C_B en mol/L et V_B en litres."
        },
        {
          "name": "Condition de neutralité stœchiométrique",
          "formula": "n(H₃O⁺) = n(OH⁻) ⟺ C_A × V_A = C_B × V_B",
          "note": "Le pH du mélange est alors rigoureusement égal à 7 à 25 °C."
        }
      ],
      "keyRule": "La réaction entre HCl et NaOH est exothermique, totale et équimolaire : H₃O⁺ + OH⁻ ⟶ 2 H₂O. Les ions Na⁺ et Cl⁻ sont spectateurs. Si n(H₃O⁺) = n(OH⁻), le mélange est neutre (pH = 7).",
      "workedExample": {
        "title": "Détermination de la nature d'un mélange acide-base et réactif en excès",
        "statement": "On mélange un volume V_A = 10 cm³ d'une solution d'acide chlorhydrique de concentration C_A = 0,2 mol/L avec un volume V_B = 15 cm³ d'une solution d'hydroxyde de sodium de concentration C_B = 0,1 mol/L. 1) Calcule les quantités de matière d'ions H₃O⁺ et OH⁻ introduites. 2) Écris l'équation-bilan de la réaction. 3) Détermine le réactif en excès et la nature (acide, basique ou neutre) du mélange après réaction.",
        "methodSteps": [
          "Convertir les volumes en litres : V_A = 10 cm³ = 10 × 10⁻³ L = 0,010 L ; V_B = 15 cm³ = 15 × 10⁻³ L = 0,015 L.",
          "Calculer la quantité d'ions H₃O⁺ apportée par l'acide : n(H₃O⁺) = C_A × V_A = 0,2 mol/L × 0,010 L = 2,0 × 10⁻³ mol.",
          "Calculer la quantité d'ions OH⁻ apportée par la soude : n(OH⁻) = C_B × V_B = 0,1 mol/L × 0,015 L = 1,5 × 10⁻³ mol.",
          "Écrire l'équation de la réaction : H₃O⁺ + OH⁻ ⟶ 2 H₂O.",
          "Comparer les quantités de matière initiales : comme 2,0 × 10⁻³ mol > 1,5 × 10⁻³ mol, on a n(H₃O⁺) > n(OH⁻). Les ions H₃O⁺ sont introduits en excès et les ions OH⁻ sont le réactif limitant.",
          "En déduire la nature de la solution finale : les ions OH⁻ sont entièrement consommés et il reste un excès d'ions H₃O⁺ égal à (2,0 − 1,5) × 10⁻³ = 0,5 × 10⁻³ mol. La solution obtenue est donc acide."
        ],
        "conclusion": "Les ions H₃O⁺ sont en excès (0,5 × 10⁻³ mol restantes) ; le mélange final est acide et colorera le BBT en jaune."
      },
      "exercises": [
        {
          "id": "seconde_c_chimie_ch11_p1_ex1",
          "type": "mcq",
          "prompt": "Quelles sont les trois caractéristiques essentielles de la réaction entre une solution d'acide chlorhydrique et une solution d'hydroxyde de sodium ?",
          "options": [
            "Elle est exothermique, totale et équimolaire",
            "Elle est endothermique, lente et réversible",
            "Elle est athermique, partielle et explosive",
            "Elle est photochimique, instantanée et catalytique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La réaction dégage de la chaleur (exothermique), consomme intégralement le réactif limitant (totale) et consomme exactement 1 mole de H₃O⁺ pour 1 mole de OH⁻ (équimolaire)."
        },
        {
          "id": "seconde_c_chimie_ch11_p1_ex2",
          "type": "mcq",
          "prompt": "Quelle est l'équation-bilan ionique nette traduisant la neutralisation acido-basique de l'acide chlorhydrique par la soude ?",
          "options": [
            "H₃O⁺ + OH⁻ ⟶ 2 H₂O",
            "HCl + NaOH ⟶ NaCl + H₂",
            "H⁺ + Cl⁻ ⟶ HCl",
            "2 H₂O ⟶ H₃O⁺ + OH⁻"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Seuls les ions hydronium H₃O⁺ et hydroxyde OH⁻ réagissent ensemble pour former de l'eau : H₃O⁺ + OH⁻ ⟶ 2 H₂O. Les ions Na⁺ et Cl⁻ sont spectateurs."
        },
        {
          "id": "seconde_c_chimie_ch11_p1_ex3",
          "type": "mcq",
          "prompt": "Quel rôle jouent les ions sodium Na⁺ et chlorure Cl⁻ lors du mélange de solutions de soude et d'acide chlorhydrique ?",
          "options": [
            "Ce sont des ions spectateurs qui ne participent pas à la transformation chimique",
            "Ils précipitent immédiatement sous forme de dépôt solide insoluble",
            "Ils s'oxydent mutuellement en chlore et en sodium",
            "Ils jouent le rôle de catalyseurs biologiques"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les ions Na⁺ et Cl⁻ restent inchangés et libres en solution aqueuse ; ils n'apparaissent pas dans l'équation ionique nette."
        },
        {
          "id": "seconde_c_chimie_ch11_p1_ex4",
          "type": "mcq",
          "prompt": "On mélange 50 mL d'acide chlorhydrique à 25 °C et 50 mL de soude de même concentration à 25 °C. Quelle observation confirme le caractère exothermique ?",
          "options": [
            "La température du mélange s'élève au-dessus de 25 °C (dégagement de chaleur)",
            "La température du mélange descend en dessous de 0 °C",
            "Le récipient se couvre spontanément de givre",
            "La température reste figée exactement à 25,0 °C"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une réaction exothermique libère de l'énergie thermique dans le milieu réactionnel, ce qui se traduit par une augmentation mesurable de la température."
        },
        {
          "id": "seconde_c_chimie_ch11_p1_ex5",
          "type": "mcq",
          "prompt": "On mélange un volume V_A = 10 mL d'acide chlorhydrique de concentration C_A = 0,1 mol/L et un volume V_B = 5 mL de soude de concentration C_B = 0,1 mol/L. Quel est l'état final du mélange ?",
          "options": [
            "Le mélange est acide car n(H₃O⁺) = 1,0 × 10⁻³ mol > n(OH⁻) = 0,5 × 10⁻³ mol",
            "Le mélange est basique car la soude est plus dense",
            "Le mélange est parfaitement neutre",
            "Le mélange n'a subi aucune réaction chimique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "n(H₃O⁺) = 0,1 × 0,010 = 10⁻³ mol ; n(OH⁻) = 0,1 × 0,005 = 0,5 × 10⁻³ mol. Comme n(H₃O⁺) > n(OH⁻), il reste de l'acide en excès : le mélange est acide."
        },
        {
          "id": "seconde_c_chimie_ch11_p1_ex6",
          "type": "mcq",
          "prompt": "Lorsqu'on évapore complètement l'eau d'une solution obtenue par neutralisation exacte de l'acide chlorhydrique par la soude, que recueille-t-on ?",
          "options": [
            "Des cristaux blancs de chlorure de sodium (NaCl)",
            "Un dépôt vert d'hydroxyde de cuivre",
            "Du carbonate de calcium pur",
            "Aucun résidu solide, tout s'évapore"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La neutralisation produit une solution aqueuse de sel de table (Na⁺ + Cl⁻) et d'eau. Après évaporation totale de l'eau, les ions Na⁺ et Cl⁻ cristallisent en NaCl solide."
        },
        {
          "id": "seconde_c_chimie_ch11_p1_ex7",
          "type": "mcq",
          "prompt": "Quelle couleur prendra le bleu de bromothymol (BBT) si l'on mélange 20 mL de soude C = 0,1 mol/L avec 10 mL d'acide chlorhydrique C = 0,1 mol/L ?",
          "options": [
            "Bleue (car la soude est en excès et le milieu est basique)",
            "Jaune (car le milieu est acide)",
            "Verte (car le milieu est neutre)",
            "Rouge écarlate"
          ],
          "correctAnswerIndex": 0,
          "explanation": "n(OH⁻) = 0,1 × 0,020 = 2 × 10⁻³ mol ; n(H₃O⁺) = 0,1 × 0,010 = 1 × 10⁻³ mol. Les ions hydroxyde sont en excès, la solution finale est basique (pH > 7), donc le BBT vire au bleu."
        },
        {
          "id": "seconde_c_chimie_ch11_p1_ex8",
          "type": "mcq",
          "prompt": "Pour neutraliser exactement 2 × 10⁻³ mol d'ions hydronium H₃O⁺ contenus dans une prise d'essai, combien de moles d'ions hydroxyde OH⁻ faut-il apporter ?",
          "options": [
            "Exactement 2 × 10⁻³ mol en vertu de la stœchiométrie 1 pour 1",
            "1 × 10⁻³ mol car l'acide est deux fois plus fort",
            "4 × 10⁻³ mol pour compenser la dilution",
            "0 mol car la neutralisation est spontanée sans base"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La réaction H₃O⁺ + OH⁻ ⟶ 2 H₂O consomme exactement une mole de OH⁻ par mole de H₃O⁺. Il faut donc n(OH⁻) = n(H₃O⁺) = 2 × 10⁻³ mol."
        }
      ]
    },
    {
      "id": "seconde_c_chimie_ch11_p2_dosage_principe_equivalence_calculs",
      "order": 2,
      "title": "Dosage acido-basique : principe, équivalence et calculs",
      "summary": "Maîtriser le principe d'un dosage volumétrique, le dispositif expérimental, la détection de l'équivalence par indicateur coloré et la relation C_A·V_A = C_B·V_BE.",
      "conceptExplanation": "1. Définition du dosage (chimie analytique quantitative) :\nUn dosage ou titrage acido-basique consiste à déterminer expérimentalement la concentration molaire inconnue d'une solution (solution titrée) en la faisant réagir avec une solution de concentration connue avec précision (solution titrante).\n\n2. Dispositif expérimental normalisé :\n- Une burette graduée : contient la solution titrante (ex : hydroxyde de sodium de concentration connue C_B) munie d'un robinet de précision.\n- Un bécher ou erlenmeyer : contient un volume prélevé avec exactitude à la pipette jaugée V_A de solution à doser (ex : acide chlorhydrique de concentration inconnue C_A).\n- Un agitateur magnétique et un barreau aimanté pour homogénéiser la solution.\n- Un indicateur coloré acido-basique : quelques gouttes de bleu de bromothymol (BBT) ajoutées dans le bécher.\n\n3. Équivalence acido-basique :\nL'équivalence acido-basique est l'instant précis où les réactifs (acide et base) ont été mélangés dans les proportions stœchiométriques exactes :\nn(H₃O⁺) apporté par l'acide = n(OH⁻) versé par la base.\nÀ cet instant, la quantité d'acide initialement présente a été totalement neutralisée par le volume équivalent V_BE de solution titrante versé.\n\n4. Repérage de l'équivalence :\n- Avant l'équivalence : l'acide est en excès, le mélange dans le bécher est jaune (au BBT).\n- À l'équivalence exacte : le mélange est neutre (pH = 7 à 25 °C pour un acide fort dosé par une base forte) ; la couleur du BBT vire instantanément du jaune au vert (teinte sensible).\n- Après l'équivalence : la base versée devient en excès, le mélange vire au bleu franc.\n\n5. Relation fondamentale et calculs stœchiométriques :\nÀ l'équivalence acido-basique :\nC_A × V_A = C_B × V_BE.\nOn en déduit immédiatement la concentration de la solution titrée :\nC_A = (C_B × V_BE) / V_A.\nSi la solution dosée provient d'une dilution préalable d'une solution commerciale de concentration C_com par un facteur de dilution F (ex : F = 100), la concentration initiale vaut :\nC_com = F × C_A.",
      "formulas": [
        {
          "name": "Relation fondamentale à l'équivalence",
          "formula": "C_A × V_A = C_B × V_BE",
          "note": "Égalité des moles d'acide initiales et de base versées."
        },
        {
          "name": "Concentration inconnue de l'acide titré",
          "formula": "C_A = (C_B × V_BE) / V_A",
          "note": "Permet de déterminer la molarité de la solution dosée."
        },
        {
          "name": "Volume équivalent de soude nécessaire",
          "formula": "V_BE = (C_A × V_A) / C_B",
          "note": "Volume de solution titrante mesuré à la burette graduée au virage."
        },
        {
          "name": "Facteur de dilution",
          "formula": "F = C_com / C_A = V_fille / V_mère",
          "note": "Permet de remonter à la concentration de la solution mère d'origine."
        },
        {
          "name": "Volume complémentaire pour atteindre l'équivalence",
          "formula": "V'_A = (C_B × V_B) / C_A − V_A",
          "note": "Volume d'acide à ajouter lorsque la base a été introduite en excès."
        }
      ],
      "keyRule": "À l'équivalence acido-basique, n(acide) = n(base) soit C_A·V_A = C_B·V_BE. Le BBT vire du jaune au vert (pH = 7). La concentration inconnue vaut C_A = (C_B·V_BE)/V_A.",
      "workedExample": {
        "title": "Dosage d'une solution d'acide chlorhydrique et calcul de la solution commerciale",
        "statement": "On dispose d'une solution commerciale d'acide chlorhydrique. On dilue cette solution commerciale 100 fois pour obtenir une solution A de concentration C_A. On prélève ensuite à la pipette jaugée un volume V_A = 20 mL de la solution A que l'on dose avec une solution d'hydroxyde de sodium de concentration C_B = 0,08 mol/L en présence de BBT. Le virage de l'indicateur au vert est obtenu pour un volume de soude versé V_BE = 25 mL. 1) Écris l'équation de la réaction de dosage. 2) Détermine la concentration C_A de la solution diluée. 3) Calcule la concentration C_com de la solution commerciale.",
        "methodSteps": [
          "Écrire l'équation-bilan de la réaction de dosage : H₃O⁺ + OH⁻ ⟶ 2 H₂O.",
          "Définir la condition à l'équivalence : à l'équivalence acido-basique, les quantités de matière d'acide et de base sont égales : n(acide) = n(base) ⟹ C_A × V_A = C_B × V_BE.",
          "Exprimer puis calculer la concentration C_A : C_A = (C_B × V_BE) / V_A = (0,08 mol/L × 25 mL) / 20 mL = 2,0 / 20 = 0,10 mol/L.",
          "Utiliser le facteur de dilution F = 100 pour trouver la concentration de la solution commerciale : C_com = 100 × C_A = 100 × 0,10 mol/L = 10 mol/L."
        ],
        "conclusion": "La solution diluée a une concentration C_A = 0,10 mol/L et la solution commerciale concentrée a une concentration de 10 mol/L."
      },
      "exercises": [
        {
          "id": "seconde_c_chimie_ch11_p2_ex1",
          "type": "mcq",
          "prompt": "Quelle est la définition rigoureuse de l'équivalence acido-basique lors d'un dosage ?",
          "options": [
            "C'est l'état où la quantité de matière d'acide initialement présente est égale à la quantité de matière de base versée",
            "C'est le moment où le volume d'acide dans le bécher est égal au volume de base dans la burette",
            "C'est l'instant où la solution commence à bouillir dans le bécher",
            "C'est lorsque le pH de la solution atteint zéro"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'équivalence correspond au mélange stœchiométrique parfait : n(H₃O⁺) initial = n(OH⁻) versé, soit C_A × V_A = C_B × V_BE."
        },
        {
          "id": "seconde_c_chimie_ch11_p2_ex2",
          "type": "mcq",
          "prompt": "Dans un dosage de l'acide chlorhydrique par la soude en présence de bleu de bromothymol (BBT), quel changement de couleur signale que l'équivalence est atteinte ?",
          "options": [
            "Le passage de la couleur jaune à la couleur verte (virage à la neutralité pH = 7)",
            "Le passage direct du blanc au rouge carmin",
            "La décoloration totale d'une solution violette",
            "L'apparition d'un précipité blanc opaque"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le BBT est jaune dans l'acide (bécher initial). À l'équivalence (pH = 7), il prend sa teinte sensible verte. Si l'on continue d'ajouter de la soude, il vire au bleu."
        },
        {
          "id": "seconde_c_chimie_ch11_p2_ex3",
          "type": "mcq",
          "prompt": "On dose un volume V_A = 10 mL d'acide chlorhydrique par une solution de soude de concentration C_B = 0,05 mol/L. Le virage du BBT est obtenu pour V_BE = 20 mL. Quelle est la concentration C_A de l'acide ?",
          "options": [
            "0,10 mol/L",
            "0,025 mol/L",
            "0,05 mol/L",
            "0,20 mol/L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C_A = (C_B × V_BE) / V_A = (0,05 × 20) / 10 = 1,0 / 10 = 0,10 mol/L."
        },
        {
          "id": "seconde_c_chimie_ch11_p2_ex4",
          "type": "mcq",
          "prompt": "Dans la verrerie de laboratoire d'un dosage volumétrique, où place-t-on la solution titrante de concentration connue ?",
          "options": [
            "Dans la burette graduée munie d'un robinet",
            "Dans une fiole jaugée bouchée",
            "Au fond d'un tube à essai incliné",
            "Dans une éprouvette graduée non versante"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La solution titrante est obligatoirement introduite dans la burette graduée afin de pouvoir verser goutte à goutte et mesurer avec précision le volume équivalent V_BE."
        },
        {
          "id": "seconde_c_chimie_ch11_p2_ex5",
          "type": "mcq",
          "prompt": "La relation C_A × V_A = C_B × V_B est-elle vérifiée à tout instant au cours du dosage ?",
          "options": [
            "Non, elle n'est vérifiée qu'au seul point particulier de l'équivalence (V_B = V_BE)",
            "Oui, elle est toujours vérifiée du début jusqu'à la fin",
            "Oui, uniquement avant d'avoir versé la moindre goutte de base",
            "Non, elle n'est jamais vérifiée expérimentalement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avant l'équivalence, l'acide est en excès (C_A·V_A > C_B·V_B). Après l'équivalence, la base est en excès (C_A·V_A < C_B·V_B). L'égalité stricte n'a lieu qu'à l'équivalence."
        },
        {
          "id": "seconde_c_chimie_ch11_p2_ex6",
          "type": "mcq",
          "prompt": "Un laborantin dose un volume V_A = 20 mL d'une solution d'acide chlorhydrique de concentration inconnue C_A avec de la soude C_B = 0,1 mol/L. Le BBT vire au vert pour V_BE = 10 mL. Que vaut C_A ?",
          "options": [
            "0,05 mol/L",
            "0,20 mol/L",
            "0,10 mol/L",
            "0,01 mol/L"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C_A = (C_B × V_BE) / V_A = (0,1 × 10) / 20 = 1,0 / 20 = 0,05 mol/L."
        },
        {
          "id": "seconde_c_chimie_ch11_p2_ex7",
          "type": "mcq",
          "prompt": "Un élève a mélangé 200 mL de soude C_B = 0,02 mol/L et 20 mL d'acide chlorhydrique C_A = 0,1 mol/L. L'équivalence est-elle atteinte, et que faut-il ajouter pour l'atteindre ?",
          "options": [
            "L'équivalence n'est pas atteinte (base en excès car n_B = 4×10⁻³ mol > n_A = 2×10⁻³ mol) ; il faut ajouter 20 mL d'acide chlorhydrique",
            "L'équivalence est parfaitement atteinte car les volumes sont proportionnels",
            "L'acide est en excès ; il faut ajouter 50 mL d'eau distillée",
            "Il faut ajouter 10 g de chlorure de sodium solide"
          ],
          "correctAnswerIndex": 0,
          "explanation": "n_B = 0,02 × 0,200 = 4×10⁻³ mol ; n_A = 0,1 × 0,020 = 2×10⁻³ mol. Il manque n_A' = 4×10⁻³ − 2×10⁻³ = 2×10⁻³ mol d'acide, soit un volume complémentaire V'_A = 2×10⁻³ / 0,1 = 0,020 L = 20 mL d'acide."
        },
        {
          "id": "seconde_c_chimie_ch11_p2_ex8",
          "type": "mcq",
          "prompt": "Dans le domaine industriel et agroalimentaire, à quoi servent principalement les techniques de dosage par rapport aux analyses qualitatives ?",
          "options": [
            "À déterminer quantitativement la concentration ou la teneur exacte d'un composé pour le contrôle qualité et la surveillance des normes",
            "Uniquement à changer la couleur des produits alimentaires",
            "À fabriquer de l'énergie électrique par combustion",
            "À dissoudre les récipients en verre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'analyse quantitative (dosage) mesure précisément les concentrations et teneurs réelles (ex : polluants, principes actifs, acidité des jus), contrairement à l'analyse qualitative qui indique seulement la présence ou l'absence d'une espèce."
        }
      ]
    }
  ]
};


export const chimie2deCChapters: CurriculumChapter[] = [
  chimie2deCElementChimiqueChapter,
  chimie2deCStructureAtomeChapter,
  chimie2deCClassificationPeriodiqueChapter,
  chimie2deCIonsEtMoleculesChapter,
  chimie2deCMoleEtGrandeursMolairesChapter,
  chimie2deCEquationBilanChapter,
  chimie2deCChlorureSodiumChapter,
  chimie2deCSolutionsAqueusesChapter,
  chimie2deCTestsIdentificationIonsChapter,
  chimie2deCSolutionsAcidesBasiquesChapter,
  chimie2deCReactionAcidoBasiqueDosageChapter,
];
