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

export const chimie2deCChapters: CurriculumChapter[] = [
  chimie2deCElementChimiqueChapter,
  chimie2deCStructureAtomeChapter,
  chimie2deCClassificationPeriodiqueChapter,
  chimie2deCIonsEtMoleculesChapter,
  chimie2deCMoleEtGrandeursMolairesChapter,
];
