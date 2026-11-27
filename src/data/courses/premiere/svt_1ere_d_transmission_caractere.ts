import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 4 : La transmission d'un caractère héréditaire » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2788
export const SVT_1ERE_D_L04_TRANSMISSION_CARACTERE: CurriculumChapter = {
  "id": "premiere_d_svt_l04_transmission_caractere_hereditaire",
  "subjectId": "svt",
  "gradeLevel": "premiere_d",
  "alsoForGrades": [],
  "order": 4,
  "title": "Leçon 4 : La transmission d'un caractère héréditaire",
  "summary": "À partir de croisements chez la souris, la belle de nuit et la drosophile, on définit le vocabulaire de la génétique et on apprend à lire les ségrégations pour conclure sur la dominance, la codominance et l’hérédité liée au sexe.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2788",
  "points": [
    {
      "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p01",
      "order": 1,
      "title": "Le vocabulaire de la transmission héréditaire",
      "summary": "Définir caractère héréditaire, phénotype, gène, locus, allèles et génotype.",
      "conceptExplanation": "Un caractère qui se transmet d’une génération à une autre est un caractère héréditaire ; la génétique est l’étude de la transmission de caractères d’une génération à l’autre.\nLa manifestation visible d’un caractère est appelée phénotype.\nLes éléments transmis par les gamètes à la cellule-œuf sont les chromosomes des parents ; les structures responsables du transfert des caractères héréditaires sont les chromosomes, constitués d’ADN : l’ADN est donc responsable du transfert des caractères héréditaires.\nLa portion d’ADN portée par les chromosomes et qui détermine la transmission d’un caractère est appelée gène ; la place occupée par un gène sur le chromosome est appelée locus.\nLes formes possibles que peut prendre un gène sont appelées allèles : un allèle est une forme d’un gène occupant un locus sur un chromosome, et un individu hétérozygote présente deux allèles différents d’un même gène.\nL’ensemble des gènes qui caractérisent un être vivant est appelé génotype ; un gène autosomal est une portion d’ADN d’un autosome.",
      "keyRule": "Phénotype : ce qui se voit ; génotype : l’ensemble des gènes ; gène : portion d’ADN ; locus : sa place ; allèles : ses formes.",
      "formulas": [],
      "workedExample": {
        "title": "Relier les mots de génétique à leurs significations",
        "statement": "Associe : génétique, hétérozygote, gène autosomal, allèle, déterminisme génétique, fécondation — aux définitions du tableau de la leçon.",
        "methodSteps": [
          "Génétique : étude de la transmission de caractères d’une génération à l’autre.",
          "Hétérozygote : présence de deux allèles différents d’un même gène.",
          "Gène autosomal : portion d’ADN d’un autosome ; allèle : forme d’un gène occupant un locus.",
          "Déterminisme génétique : modalités du contrôle d’un caractère par un ou plusieurs gènes ; fécondation : union de deux gamètes d’individus de sexes différents."
        ],
        "conclusion": "Ce sont les associations du tableau de l’exercice de la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Caractère héréditaire et phénotype",
          "stepTheme": "Caractère héréditaire et phénotype",
          "stepBadge": "Caractère héréditaire et phénotype",
          "paragraphText": "Un caractère qui se transmet d’une génération à une autre est un caractère héréditaire.\nLa manifestation visible d’un caractère est appelée phénotype.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p01_q1",
            "type": "mcq",
            "prompt": "La manifestation visible d’un caractère est appelée :",
            "options": [
              "Génotype",
              "Locus",
              "Phénotype",
              "Allèle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Définition de la leçon : le phénotype est la manifestation visible d’un caractère."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le gène, portion d’ADN",
          "stepTheme": "Le gène, portion d’ADN",
          "stepBadge": "Le gène, portion d’ADN",
          "paragraphText": "La portion d’ADN portée par les chromosomes et qui détermine la transmission des caractères héréditaires est appelée gène.\nLes chromosomes, constitués d’ADN, sont les structures responsables du transfert des caractères.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p01_q2",
            "type": "mcq",
            "prompt": "Un gène est :",
            "options": [
              "Un chromosome entier",
              "La portion d’ADN qui détermine la transmission d’un caractère",
              "Une protéine du sang",
              "Un gamète particulier"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon définit le gène comme la portion d’ADN déterminant la transmission d’un caractère."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Locus et allèles",
          "stepTheme": "Locus et allèles",
          "stepBadge": "Locus et allèles",
          "paragraphText": "La place occupée par un gène sur le chromosome est appelée locus.\nLes formes possibles que peut prendre un gène sont appelées allèles.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p01_q3",
            "type": "mcq",
            "prompt": "La place occupée par un gène sur le chromosome est le :",
            "options": [
              "Phénotype",
              "Génotype",
              "Locus",
              "Caryotype seul"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Définition de la leçon : le locus est la place du gène sur le chromosome."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le génotype",
          "stepTheme": "Le génotype",
          "stepBadge": "Le génotype",
          "paragraphText": "L’ensemble des gènes qui caractérisent un être vivant est appelé génotype.\nIl se distingue du phénotype, qui est la manifestation visible du caractère.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p01_q4",
            "type": "mcq",
            "prompt": "Le génotype est :",
            "options": [
              "La manifestation visible d’un caractère",
              "L’ensemble des gènes qui caractérisent un être vivant",
              "Un seul allèle",
              "La place d’un gène"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Définition de la leçon : le génotype est l’ensemble des gènes d’un être vivant."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Ce que transmettent les gamètes",
          "stepTheme": "Ce que transmettent les gamètes",
          "stepBadge": "Ce que transmettent les gamètes",
          "paragraphText": "Les éléments transmis par les gamètes à la cellule-œuf sont les chromosomes des parents.\nC’est par les chromosomes, donc par l’ADN, que les caractères héréditaires passent d’une génération à l’autre.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p01_q5",
            "type": "mcq",
            "prompt": "Les gamètes transmettent à la cellule-œuf :",
            "options": [
              "Les caractères visibles eux-mêmes",
              "Les chromosomes des parents",
              "Le sang des parents",
              "Les organes des parents"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon précise que les gamètes transmettent les chromosomes des parents à la cellule-œuf."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p01_q1",
          "type": "mcq",
          "prompt": "La manifestation visible d’un caractère est appelée :",
          "options": [
            "Génotype",
            "Locus",
            "Phénotype",
            "Allèle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Définition de la leçon : le phénotype est la manifestation visible d’un caractère."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p01_q2",
          "type": "mcq",
          "prompt": "Un gène est :",
          "options": [
            "Un chromosome entier",
            "La portion d’ADN qui détermine la transmission d’un caractère",
            "Une protéine du sang",
            "Un gamète particulier"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon définit le gène comme la portion d’ADN déterminant la transmission d’un caractère."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p01_q3",
          "type": "mcq",
          "prompt": "La place occupée par un gène sur le chromosome est le :",
          "options": [
            "Phénotype",
            "Génotype",
            "Locus",
            "Caryotype seul"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Définition de la leçon : le locus est la place du gène sur le chromosome."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p01_q4",
          "type": "mcq",
          "prompt": "Le génotype est :",
          "options": [
            "La manifestation visible d’un caractère",
            "L’ensemble des gènes qui caractérisent un être vivant",
            "Un seul allèle",
            "La place d’un gène"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Définition de la leçon : le génotype est l’ensemble des gènes d’un être vivant."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p01_q5",
          "type": "mcq",
          "prompt": "Les gamètes transmettent à la cellule-œuf :",
          "options": [
            "Les caractères visibles eux-mêmes",
            "Les chromosomes des parents",
            "Le sang des parents",
            "Les organes des parents"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon précise que les gamètes transmettent les chromosomes des parents à la cellule-œuf."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p02",
      "order": 2,
      "title": "Dominance complète : le pelage de la souris et la ségrégation en trois quarts et un quart",
      "summary": "Analyser les deux premiers croisements de souris pour dégager races pures, dominance et génotypes.",
      "conceptExplanation": "Le caractère étudié est la couleur du pelage, qui présente deux phénotypes : blanc et gris.\nAu premier croisement, une souris à pelage gris est croisée avec une souris à pelage blanc : la descendance est homogène, tous les souriceaux ont le pelage gris ; les parents sont donc de races pures, homozygotes, le phénotype gris qui s’exprime est dominant et le phénotype blanc, qui ne s’est pas exprimé, est récessif.\nAu deuxième croisement, deux souris grises issues du premier croisement donnent une descendance hétérogène : la grande majorité de souriceaux gris et une minorité de souriceaux blancs, dans les proportions de trois quarts de gris et un quart de blanc.\nCette ségrégation en trois quarts et un quart montre que le caractère est gouverné par un couple d’allèles avec dominance complète, et que les souris croisées sont hétérozygotes.\nLe choix des symboles est : blanc noté avec la lettre minuscule, gris avec la lettre majuscule correspondante ; les souris grises hétérozygotes portent les deux allèles.",
      "keyRule": "Descendance homogène au premier croisement : races pures ; trois quarts et un quart au deuxième : deux hétérozygotes, dominance complète.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer les cobayes gris et blancs d’une situation d’évaluation",
        "statement": "Un mâle blanc et une femelle grise donnent des cobayes tous gris ; un couple de ces cobayes gris donne ensuite des petits gris, majoritaires, et des petits blancs, minoritaires, dans un rapport de trois pour un. Analyse et interprète, comme dans la leçon.",
        "methodSteps": [
          "Premier croisement : parents de phénotypes différents, descendance homogène — races pures ; le gris qui s’exprime est dominant, le blanc récessif.",
          "Deuxième croisement : parents de même phénotype, descendance hétérogène en trois quarts et un quart — les parents gris sont hétérozygotes.",
          "Le caractère est gouverné par un couple d’allèles avec dominance complète."
        ],
        "conclusion": "C’est exactement l’analyse des croisements de souris de la leçon, transposée aux cobayes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Premier croisement : descendance homogène",
          "stepTheme": "Premier croisement : descendance homogène",
          "stepBadge": "Premier croisement : descendance homogène",
          "paragraphText": "Premier croisement : parents de phénotypes différents, gris et blanc, et descendance homogène de souriceaux tous gris.\nUne descendance homogène indique des parents de races pures, donc homozygotes.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p02_q1",
            "type": "mcq",
            "prompt": "Une descendance homogène, issue de parents de phénotypes différents, indique que les parents sont :",
            "options": [
              "Hétérozygotes",
              "De races pures, homozygotes",
              "Mutants",
              "Stériles"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation de la leçon : descendance homogène égale parents homozygotes de races pures."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Dominant et récessif",
          "stepTheme": "Dominant et récessif",
          "stepBadge": "Dominant et récessif",
          "paragraphText": "Le phénotype gris qui s’exprime dans la descendance du premier croisement est dominant.\nLe phénotype blanc, qui ne s’est pas exprimé, est récessif.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p02_q2",
            "type": "mcq",
            "prompt": "Dans le croisement de souris, le phénotype dominant est :",
            "options": [
              "Le pelage blanc",
              "Le pelage gris, qui s’exprime dans la descendance",
              "Aucun des deux",
              "Le pelage rose"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le gris s’exprime chez tous les descendants du premier croisement : il est dominant."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Deuxième croisement : trois quarts et un quart",
          "stepTheme": "Deuxième croisement : trois quarts et un quart",
          "stepBadge": "Deuxième croisement : trois quarts et un quart",
          "paragraphText": "Le croisement de deux souris grises issues du premier croisement donne une descendance en ségrégation de trois quarts de gris et un quart de blanc.\nC’est la signature d’un couple d’allèles avec dominance complète entre deux hétérozygotes.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p02_q3",
            "type": "mcq",
            "prompt": "La ségrégation trois quarts et un quart au deuxième croisement montre que les souris croisées sont :",
            "options": [
              "Homozygotes dominantes",
              "Homozygotes récessives",
              "Hétérozygotes",
              "De races pures"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon déduit de cette ségrégation que les souris croisées sont hétérozygotes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Choisir les symboles des allèles",
          "stepTheme": "Choisir les symboles des allèles",
          "stepBadge": "Choisir les symboles des allèles",
          "paragraphText": "Choix des symboles de la leçon : l’allèle du blanc, récessif, est noté par une lettre minuscule, et celui du gris, dominant, par la majuscule correspondante.\nLe couple d’allèles s’écrit donc avec ces deux symboles.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p02_q4",
            "type": "mcq",
            "prompt": "Pour noter le couple d’allèles du pelage, la leçon utilise :",
            "options": [
              "Deux lettres sans rapport",
              "La majuscule pour l’allèle dominant gris et la minuscule pour l’allèle récessif blanc",
              "Des chiffres uniquement",
              "Le nom complet des couleurs"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le choix des symboles de la leçon oppose la majuscule dominante à la minuscule récessive."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Vérification par l’échiquier de croisement",
          "stepTheme": "Vérification par l’échiquier de croisement",
          "stepBadge": "Vérification par l’échiquier de croisement",
          "paragraphText": "L’interprétation chromosomique du deuxième croisement, avec l’échiquier de croisement, redonne les mêmes proportions : trois quarts de phénotype dominant et un quart de phénotype récessif.\nLes résultats théoriques concordent avec les résultats expérimentaux.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p02_q5",
            "type": "mcq",
            "prompt": "L’échiquier de croisement du deuxième croisement donne :",
            "options": [
              "Uniquement des gris",
              "Uniquement des blancs",
              "Trois quarts de phénotype dominant et un quart de phénotype récessif",
              "Moitié gris et moitié blancs uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Conclusion de la vérification dans la leçon : les résultats théoriques concordent avec l’expérience."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p02_q1",
          "type": "mcq",
          "prompt": "Une descendance homogène, issue de parents de phénotypes différents, indique que les parents sont :",
          "options": [
            "Hétérozygotes",
            "De races pures, homozygotes",
            "Mutants",
            "Stériles"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation de la leçon : descendance homogène égale parents homozygotes de races pures."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p02_q2",
          "type": "mcq",
          "prompt": "Dans le croisement de souris, le phénotype dominant est :",
          "options": [
            "Le pelage blanc",
            "Le pelage gris, qui s’exprime dans la descendance",
            "Aucun des deux",
            "Le pelage rose"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le gris s’exprime chez tous les descendants du premier croisement : il est dominant."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p02_q3",
          "type": "mcq",
          "prompt": "La ségrégation trois quarts et un quart au deuxième croisement montre que les souris croisées sont :",
          "options": [
            "Homozygotes dominantes",
            "Homozygotes récessives",
            "Hétérozygotes",
            "De races pures"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon déduit de cette ségrégation que les souris croisées sont hétérozygotes."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p02_q4",
          "type": "mcq",
          "prompt": "Pour noter le couple d’allèles du pelage, la leçon utilise :",
          "options": [
            "Deux lettres sans rapport",
            "La majuscule pour l’allèle dominant gris et la minuscule pour l’allèle récessif blanc",
            "Des chiffres uniquement",
            "Le nom complet des couleurs"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le choix des symboles de la leçon oppose la majuscule dominante à la minuscule récessive."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p02_q5",
          "type": "mcq",
          "prompt": "L’échiquier de croisement du deuxième croisement donne :",
          "options": [
            "Uniquement des gris",
            "Uniquement des blancs",
            "Trois quarts de phénotype dominant et un quart de phénotype récessif",
            "Moitié gris et moitié blancs uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Conclusion de la vérification dans la leçon : les résultats théoriques concordent avec l’expérience."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p03",
      "order": 3,
      "title": "Le croisement test : la ségrégation en moitiés",
      "summary": "Analyser le troisième croisement de souris, entre un hétérozygote et un homozygote récessif.",
      "conceptExplanation": "Au troisième croisement, une souris parente blanche est croisée avec une souris grise issue du premier croisement.\nLa descendance est hétérogène : environ la moitié de souriceaux gris et la moitié de souriceaux blancs.\nCette ségrégation en deux moitiés permet de dire que le caractère couleur du pelage est gouverné par un couple d’allèles, et que le croisement se fait entre une souris hétérozygote et une souris homozygote récessive.\nLa souris blanche, de phénotype récessif, est homozygote récessive ; la souris grise est hétérozygote.\nLes phénotypes des individus obtenus reflètent alors les gamètes produits par l’hétérozygote, et donc son génotype : croiser avec un homozygote récessif révèle le génotype de l’individu testé.",
      "keyRule": "Moitié-moitié avec un parent récessif : l’autre parent est hétérozygote, et la descendance révèle ses gamètes.",
      "formulas": [],
      "workedExample": {
        "title": "Lire un croisement avec un homozygote récessif",
        "statement": "On croise une souris grise de génotype inconnu avec une souris blanche et on obtient autant de gris que de blancs. Conclus sur le génotype de la souris grise, selon la règle de la leçon.",
        "methodSteps": [
          "La ségrégation obtenue est en deux moitiés.",
          "Avec un individu homozygote récessif, cette ségrégation signifie que l’individu inconnu est hétérozygote.",
          "Les phénotypes obtenus correspondent aux gamètes que l’hétérozygote a produits."
        ],
        "conclusion": "Le génotype de la souris grise correspond aux phénotypes obtenus : elle est hétérozygote."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Résultat du troisième croisement",
          "stepTheme": "Résultat du troisième croisement",
          "stepBadge": "Résultat du troisième croisement",
          "paragraphText": "Troisième croisement : une souris parente blanche croisée avec une souris grise issue du premier croisement.\nOn obtient environ autant de souriceaux gris que de souriceaux blancs : une ségrégation en deux moitiés.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p03_q1",
            "type": "mcq",
            "prompt": "Le troisième croisement donne une descendance :",
            "options": [
              "Tous gris",
              "En deux moitiés : autant de gris que de blancs",
              "En trois quarts de blancs",
              "Tous blancs"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Résultats de la leçon : la descendance est partagée en deux moitiés."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Interprétation : un hétérozygote et un récessif",
          "stepTheme": "Interprétation : un hétérozygote et un récessif",
          "stepBadge": "Interprétation : un hétérozygote et un récessif",
          "paragraphText": "La ségrégation en deux moitiés permet de dire que le croisement se fait entre une souris hétérozygote et une souris homozygote récessive.\nLa souris blanche, récessive, est l’homozygote ; la souris grise est l’hétérozygote.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p03_q2",
            "type": "mcq",
            "prompt": "Dans le troisième croisement, la souris grise est :",
            "options": [
              "Homozygote dominante",
              "Homozygote récessive",
              "Hétérozygote",
              "De race pure"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Interprétation de la leçon : la souris grise croisée est hétérozygote."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "La règle du croisement avec un récessif",
          "stepTheme": "La règle du croisement avec un récessif",
          "stepBadge": "La règle du croisement avec un récessif",
          "paragraphText": "Règle de la leçon : dans un croisement effectué avec un individu homozygote récessif, si on obtient la ségrégation en deux moitiés, l’individu inconnu est hétérozygote.\nSon génotype correspond aux phénotypes obtenus dans la descendance.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p03_q3",
            "type": "mcq",
            "prompt": "Avec un homozygote récessif, une ségrégation en deux moitiés révèle que l’individu testé est :",
            "options": [
              "Homozygote dominant",
              "Hétérozygote",
              "Lui aussi récessif",
              "Stérile"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la règle énoncée dans la leçon pour ce type de croisement."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les phénotypes reflètent les gamètes",
          "stepTheme": "Les phénotypes reflètent les gamètes",
          "stepBadge": "Les phénotypes reflètent les gamètes",
          "paragraphText": "Les phénotypes des individus obtenus reflètent les gamètes produits par l’hétérozygote, et donc son génotype.\nChaque classe de descendants correspond à un type de gamète de l’hétérozygote.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p03_q4",
            "type": "mcq",
            "prompt": "Dans ce croisement, les phénotypes des descendants reflètent :",
            "options": [
              "Les gamètes du parent récessif seulement",
              "Les gamètes produits par l’hétérozygote, donc son génotype",
              "Le hasard sans signification",
              "Les chromosomes sexuels"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Conclusion de la leçon : les phénotypes obtenus reflètent les gamètes de l’hétérozygote."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre les deux ségrégations autosomales",
          "stepTheme": "Ne pas confondre les deux ségrégations autosomales",
          "stepBadge": "Ne pas confondre les deux ségrégations autosomales",
          "paragraphText": "Trois quarts et un quart : deux hétérozygotes croisés entre eux.\nDeux moitiés avec un parent récessif : un hétérozygote croisé avec un homozygote récessif.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p03_q5",
            "type": "mcq",
            "prompt": "Une ségrégation en deux moitiés est obtenue quand on croise :",
            "options": [
              "Deux homozygotes dominants",
              "Deux hétérozygotes entre eux",
              "Un hétérozygote avec un homozygote récessif",
              "Deux homozygotes récessifs"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon oppose les deux situations : deux moitiés pour hétérozygote contre récessif."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p03_q1",
          "type": "mcq",
          "prompt": "Le troisième croisement donne une descendance :",
          "options": [
            "Tous gris",
            "En deux moitiés : autant de gris que de blancs",
            "En trois quarts de blancs",
            "Tous blancs"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Résultats de la leçon : la descendance est partagée en deux moitiés."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p03_q2",
          "type": "mcq",
          "prompt": "Dans le troisième croisement, la souris grise est :",
          "options": [
            "Homozygote dominante",
            "Homozygote récessive",
            "Hétérozygote",
            "De race pure"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Interprétation de la leçon : la souris grise croisée est hétérozygote."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p03_q3",
          "type": "mcq",
          "prompt": "Avec un homozygote récessif, une ségrégation en deux moitiés révèle que l’individu testé est :",
          "options": [
            "Homozygote dominant",
            "Hétérozygote",
            "Lui aussi récessif",
            "Stérile"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la règle énoncée dans la leçon pour ce type de croisement."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p03_q4",
          "type": "mcq",
          "prompt": "Dans ce croisement, les phénotypes des descendants reflètent :",
          "options": [
            "Les gamètes du parent récessif seulement",
            "Les gamètes produits par l’hétérozygote, donc son génotype",
            "Le hasard sans signification",
            "Les chromosomes sexuels"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Conclusion de la leçon : les phénotypes obtenus reflètent les gamètes de l’hétérozygote."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p03_q5",
          "type": "mcq",
          "prompt": "Une ségrégation en deux moitiés est obtenue quand on croise :",
          "options": [
            "Deux homozygotes dominants",
            "Deux hétérozygotes entre eux",
            "Un hétérozygote avec un homozygote récessif",
            "Deux homozygotes récessifs"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon oppose les deux situations : deux moitiés pour hétérozygote contre récessif."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p04",
      "order": 4,
      "title": "La codominance : les belles de nuit et la ségrégation en quarts",
      "summary": "Analyser les croisements de belles de nuit pour dégager la codominance et le phénotype intermédiaire.",
      "conceptExplanation": "Le caractère étudié est la couleur de la fleur, qui se présente sous trois phénotypes : blanc, rouge et rose.\nAu premier croisement, une belle de nuit à fleurs rouges est croisée avec une belle de nuit à fleurs blanches : toutes les fleurs obtenues ont une coloration rose, un nouveau phénotype différent de celui des parents, dans une descendance homogène.\nAu deuxième croisement, les belles de nuit à fleurs roses croisées entre elles donnent une descendance hétérogène : un quart de fleurs rouges, une moitié de fleurs roses et un quart de fleurs blanches.\nCette ségrégation en un quart, une moitié et un quart permet de dire que le caractère est gouverné par un couple d’allèles codominants et que les individus croisés sont deux hétérozygotes.\nLe phénotype qui s’exprime à la fréquence d’une moitié est le phénotype intermédiaire, le rose ; les phénotypes des quarts correspondent aux phénotypes des parents, rouge et blanc.",
      "keyRule": "Trois phénotypes, un intermédiaire : codominance — un quart, une moitié, un quart entre deux hétérozygotes roses.",
      "formulas": [],
      "workedExample": {
        "title": "Reconnaître une codominance dans un croisement",
        "statement": "Des plantes à fleurs roses, issues d’un croisement entre fleurs rouges et fleurs blanches, sont croisées entre elles et donnent des rouges, des roses majoritaires et des blanches. Interprète avec la règle de la leçon.",
        "methodSteps": [
          "La descendance présente trois phénotypes dans les proportions un quart, une moitié, un quart.",
          "Le phénotype de la moitié, le rose, est le phénotype intermédiaire.",
          "Le caractère est gouverné par un couple d’allèles codominants et les parents roses sont hétérozygotes."
        ],
        "conclusion": "La ségrégation en quarts est la signature de la codominance entre hétérozygotes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Premier croisement : un nouveau phénotype",
          "stepTheme": "Premier croisement : un nouveau phénotype",
          "stepBadge": "Premier croisement : un nouveau phénotype",
          "paragraphText": "On croise une belle de nuit à fleurs rouges avec une belle de nuit à fleurs blanches.\nLes graines obtenues donnent des belles de nuit dont les fleurs ont toutes une coloration rose : descendance homogène avec un nouveau phénotype.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p04_q1",
            "type": "mcq",
            "prompt": "Le premier croisement de belles de nuit donne :",
            "options": [
              "Uniquement des rouges",
              "Uniquement des blanches",
              "Toutes des fleurs roses, nouveau phénotype différent des parents",
              "Un mélange de rouges et de blanches"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Résultat de la leçon : toutes les fleurs sont roses, phénotype nouveau."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Trois phénotypes pour un caractère",
          "stepTheme": "Trois phénotypes pour un caractère",
          "stepBadge": "Trois phénotypes pour un caractère",
          "paragraphText": "Le caractère couleur de la fleur se présente sous trois phénotypes : blanc, rouge et rose.\nLe rose est le phénotype intermédiaire entre les deux phénotypes parentaux.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p04_q2",
            "type": "mcq",
            "prompt": "Dans l’expérience des belles de nuit, le caractère présente :",
            "options": [
              "Deux phénotypes : rouge et blanc",
              "Trois phénotypes : blanc, rouge et rose",
              "Un seul phénotype",
              "Quatre phénotypes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Analyse de la leçon : trois phénotypes, blanc, rouge et rose."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Deuxième croisement : un quart, une moitié, un quart",
          "stepTheme": "Deuxième croisement : un quart, une moitié, un quart",
          "stepBadge": "Deuxième croisement : un quart, une moitié, un quart",
          "paragraphText": "Le croisement des belles de nuit à fleurs roses entre elles donne un quart de rouges, une moitié de roses et un quart de blanches.\nLes parents croisés sont de phénotypes identiques, mais la descendance est hétérogène.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p04_q3",
            "type": "mcq",
            "prompt": "Le croisement des roses entre elles donne, dans l’ordre rouge, rose, blanc :",
            "options": [
              "Trois quarts, zéro, un quart",
              "Une moitié, un quart, un quart",
              "Un quart, une moitié, un quart",
              "Uniquement des roses"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Fréquences calculées dans la leçon : un quart, une moitié, un quart."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La codominance",
          "stepTheme": "La codominance",
          "stepBadge": "La codominance",
          "paragraphText": "Quand la ségrégation est en un quart, une moitié et un quart, le caractère est gouverné par un couple d’allèles codominants.\nAucun des deux allèles ne domine complètement l’autre : l’hétérozygote a un phénotype intermédiaire.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p04_q4",
            "type": "mcq",
            "prompt": "La ségrégation en un quart, une moitié et un quart indique un couple d’allèles :",
            "options": [
              "Avec dominance complète",
              "Codominants",
              "Liés au sexe uniquement",
              "Létaux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Règle de la leçon : cette ségrégation correspond à des allèles codominants."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le phénotype intermédiaire est celui de la moitié",
          "stepTheme": "Le phénotype intermédiaire est celui de la moitié",
          "stepBadge": "Le phénotype intermédiaire est celui de la moitié",
          "paragraphText": "Le phénotype qui s’exprime à la fréquence d’une moitié est le phénotype intermédiaire.\nLes phénotypes qui s’expriment aux fréquences d’un quart correspondent aux phénotypes des parents.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p04_q5",
            "type": "mcq",
            "prompt": "Dans la codominance des belles de nuit, le phénotype intermédiaire est celui qui apparaît :",
            "options": [
              "À la fréquence d’un quart",
              "À la fréquence d’une moitié : le rose",
              "Jamais dans la descendance",
              "Uniquement chez les parents"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon identifie le rose, à la fréquence d’une moitié, comme le phénotype intermédiaire."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p04_q1",
          "type": "mcq",
          "prompt": "Le premier croisement de belles de nuit donne :",
          "options": [
            "Uniquement des rouges",
            "Uniquement des blanches",
            "Toutes des fleurs roses, nouveau phénotype différent des parents",
            "Un mélange de rouges et de blanches"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Résultat de la leçon : toutes les fleurs sont roses, phénotype nouveau."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p04_q2",
          "type": "mcq",
          "prompt": "Dans l’expérience des belles de nuit, le caractère présente :",
          "options": [
            "Deux phénotypes : rouge et blanc",
            "Trois phénotypes : blanc, rouge et rose",
            "Un seul phénotype",
            "Quatre phénotypes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Analyse de la leçon : trois phénotypes, blanc, rouge et rose."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p04_q3",
          "type": "mcq",
          "prompt": "Le croisement des roses entre elles donne, dans l’ordre rouge, rose, blanc :",
          "options": [
            "Trois quarts, zéro, un quart",
            "Une moitié, un quart, un quart",
            "Un quart, une moitié, un quart",
            "Uniquement des roses"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Fréquences calculées dans la leçon : un quart, une moitié, un quart."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p04_q4",
          "type": "mcq",
          "prompt": "La ségrégation en un quart, une moitié et un quart indique un couple d’allèles :",
          "options": [
            "Avec dominance complète",
            "Codominants",
            "Liés au sexe uniquement",
            "Létaux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Règle de la leçon : cette ségrégation correspond à des allèles codominants."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p04_q5",
          "type": "mcq",
          "prompt": "Dans la codominance des belles de nuit, le phénotype intermédiaire est celui qui apparaît :",
          "options": [
            "À la fréquence d’un quart",
            "À la fréquence d’une moitié : le rose",
            "Jamais dans la descendance",
            "Uniquement chez les parents"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon identifie le rose, à la fréquence d’une moitié, comme le phénotype intermédiaire."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p05",
      "order": 5,
      "title": "L’hérédité liée au sexe : la couleur des yeux de la drosophile",
      "summary": "Analyser les croisements réciproques de drosophiles pour montrer qu’un caractère peut être porté par les chromosomes sexuels.",
      "conceptExplanation": "On croise des drosophiles mâles aux yeux blancs, souche mutante, avec des femelles aux yeux rouges, souche sauvage, toutes de race pure : la première génération est entièrement aux yeux rouges.\nLa descendance homogène montre que les parents sont homozygotes, que le phénotype rouge, sauvage, est dominant et que le phénotype blanc est récessif.\nDans le sens réciproque, on croise des mâles aux yeux rouges avec des femelles aux yeux blancs : on obtient environ la moitié de mâles aux yeux blancs et la moitié de femelles aux yeux rouges.\nLa descendance est donc différente selon le sens du croisement : homogène dans un sens, hétérogène dans l’autre.\nOn en déduit que le caractère couleur des yeux est sous la dépendance d’un couple d’allèles lié aux hétérochromosomes, c’est-à-dire lié au sexe, porté par le chromosome sexuel X.\nLe caractère se transmet donc d’une génération à une autre grâce aux chromosomes sexuels, comme d’autres caractères se transmettent grâce aux chromosomes autosomaux.",
      "keyRule": "Si le résultat change selon le sens du croisement, le gène est lié au sexe : c’est le test des croisements réciproques.",
      "formulas": [],
      "workedExample": {
        "title": "Appliquer la règle des croisements réciproques",
        "statement": "Un croisement donne une descendance homogène dans un sens, et une descendance partagée selon le sexe dans le sens réciproque. Que déduit-on, d’après la leçon ?",
        "methodSteps": [
          "Le caractère étudié est gouverné par un couple d’allèles liés au sexe.",
          "Les parents sont des homozygotes.",
          "Le phénotype récessif des mâles correspond à celui du parent femelle, et le phénotype dominant des femelles correspond à celui du parent mâle."
        ],
        "conclusion": "C’est la déduction énoncée dans la leçon pour l’hérédité liée au sexe."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Premier sens : descendance homogène rouge",
          "stepTheme": "Premier sens : descendance homogène rouge",
          "stepBadge": "Premier sens : descendance homogène rouge",
          "paragraphText": "On croise des mâles aux yeux blancs avec des femelles aux yeux rouges, de race pure.\nLa première génération obtenue est entièrement aux yeux rouges : la descendance est homogène.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p05_q1",
            "type": "mcq",
            "prompt": "Le croisement mâles blancs par femelles rouges donne en première génération :",
            "options": [
              "Uniquement des yeux blancs",
              "Des drosophiles aux yeux rouges",
              "Moitié rouges et moitié blancs",
              "Des mâles rouges et des femelles blanches"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Résultat de la leçon : la première génération est aux yeux rouges."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Rouge dominant, blanc récessif",
          "stepTheme": "Rouge dominant, blanc récessif",
          "stepBadge": "Rouge dominant, blanc récessif",
          "paragraphText": "La première génération étant homogène, les parents croisés sont de race pure, donc homozygotes.\nLe phénotype rouge sauvage qui s’exprime est dominant ; le phénotype blanc est récessif.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p05_q2",
            "type": "mcq",
            "prompt": "Dans ce croisement, le phénotype dominant est :",
            "options": [
              "Les yeux blancs",
              "Les yeux rouges, sauvages",
              "Les yeux roses",
              "Aucun, tout est codominant"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation de la leçon : le rouge est dominant, le blanc récessif."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Sens réciproque : un résultat différent",
          "stepTheme": "Sens réciproque : un résultat différent",
          "stepBadge": "Sens réciproque : un résultat différent",
          "paragraphText": "On croise ensuite des mâles aux yeux rouges avec des femelles aux yeux blancs.\nOn obtient environ la moitié de mâles aux yeux blancs et la moitié de femelles aux yeux rouges : la descendance diffère selon le sens du croisement.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p05_q3",
            "type": "mcq",
            "prompt": "Le croisement réciproque donne :",
            "options": [
              "Uniquement des yeux rouges",
              "Uniquement des yeux blancs",
              "Environ la moitié de mâles aux yeux blancs et la moitié de femelles aux yeux rouges",
              "Trois quarts de rouges et un quart de blancs dans les deux sexes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Résultats chiffrés de la leçon pour le sens réciproque."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Un couple d’allèles lié au sexe",
          "stepTheme": "Un couple d’allèles lié au sexe",
          "stepBadge": "Un couple d’allèles lié au sexe",
          "paragraphText": "Lorsque la descendance est homogène dans un sens et hétérogène dans l’autre, le caractère est sous la dépendance d’un couple d’allèles lié aux hétérochromosomes.\nOn dit qu’il est lié au sexe, porté par le chromosome sexuel X.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p05_q4",
            "type": "mcq",
            "prompt": "Un résultat différent selon le sens du croisement indique que le gène est :",
            "options": [
              "Autosomale avec dominance complète",
              "Lié au sexe, porté par les hétérochromosomes",
              "Absent des gamètes",
              "Toujours récessif"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation de la leçon : le caractère est gouverné par un couple d’allèles lié au sexe."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Conclusion : transmission par les chromosomes sexuels",
          "stepTheme": "Conclusion : transmission par les chromosomes sexuels",
          "stepBadge": "Conclusion : transmission par les chromosomes sexuels",
          "paragraphText": "Les vérifications chromosomiques des deux sens de croisement concordent avec les résultats expérimentaux.\nUn caractère se transmet donc aussi d’une génération à une autre grâce aux chromosomes sexuels.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p05_q5",
            "type": "mcq",
            "prompt": "La conclusion de cette partie est qu’un caractère peut se transmettre grâce :",
            "options": [
              "Uniquement aux autosomes",
              "Aux chromosomes sexuels",
              "Au cytoplasme seul",
              "Aux protéines du sang"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Conclusion de la leçon : transmission par les chromosomes sexuels également."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p05_q1",
          "type": "mcq",
          "prompt": "Le croisement mâles blancs par femelles rouges donne en première génération :",
          "options": [
            "Uniquement des yeux blancs",
            "Des drosophiles aux yeux rouges",
            "Moitié rouges et moitié blancs",
            "Des mâles rouges et des femelles blanches"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Résultat de la leçon : la première génération est aux yeux rouges."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p05_q2",
          "type": "mcq",
          "prompt": "Dans ce croisement, le phénotype dominant est :",
          "options": [
            "Les yeux blancs",
            "Les yeux rouges, sauvages",
            "Les yeux roses",
            "Aucun, tout est codominant"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation de la leçon : le rouge est dominant, le blanc récessif."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p05_q3",
          "type": "mcq",
          "prompt": "Le croisement réciproque donne :",
          "options": [
            "Uniquement des yeux rouges",
            "Uniquement des yeux blancs",
            "Environ la moitié de mâles aux yeux blancs et la moitié de femelles aux yeux rouges",
            "Trois quarts de rouges et un quart de blancs dans les deux sexes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Résultats chiffrés de la leçon pour le sens réciproque."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p05_q4",
          "type": "mcq",
          "prompt": "Un résultat différent selon le sens du croisement indique que le gène est :",
          "options": [
            "Autosomale avec dominance complète",
            "Lié au sexe, porté par les hétérochromosomes",
            "Absent des gamètes",
            "Toujours récessif"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation de la leçon : le caractère est gouverné par un couple d’allèles lié au sexe."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p05_q5",
          "type": "mcq",
          "prompt": "La conclusion de cette partie est qu’un caractère peut se transmettre grâce :",
          "options": [
            "Uniquement aux autosomes",
            "Aux chromosomes sexuels",
            "Au cytoplasme seul",
            "Aux protéines du sang"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Conclusion de la leçon : transmission par les chromosomes sexuels également."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p06",
      "order": 6,
      "title": "Lire une ségrégation : les trois règles de conclusion",
      "summary": "Mobiliser les règles de la leçon pour conclure un problème de transmission à partir des proportions observées.",
      "conceptExplanation": "La leçon se termine par trois règles de lecture des ségrégations phénotypiques.\nUne ségrégation en trois quarts et un quart signifie que le caractère est gouverné par un couple d’allèles autosomaux avec dominance complète, que les individus croisés sont deux hétérozygotes, que le phénotype à la fréquence des trois quarts est dominant et celui au quart est récessif.\nUne ségrégation en deux moitiés, dans un croisement avec un individu homozygote récessif, signifie que l’individu inconnu est hétérozygote et que son génotype correspond aux phénotypes obtenus.\nUne ségrégation en un quart, une moitié et un quart signifie que le caractère est gouverné par un couple d’allèles codominants, que les individus croisés sont deux hétérozygotes, que le phénotype de la moitié est intermédiaire et que ceux des quarts sont les phénotypes des parents.\nEnfin, si les résultats changent selon le sens du croisement, le caractère est lié au sexe : au total, un caractère se transmet d’une génération à une autre grâce aux chromosomes autosomaux et sexuels.",
      "keyRule": "Trois quarts-un quart : dominance ; moitiés avec un récessif : hétérozygote ; quarts avec intermédiaire : codominance ; sens différent : lié au sexe.",
      "formulas": [],
      "workedExample": {
        "title": "Choisir la bonne conclusion pour chaque ségrégation",
        "statement": "On te donne trois descendances : trois quarts et un quart ; deux moitiés contre un parent blanc récessif ; un quart, une moitié, un quart avec un phénotype nouveau au centre. Conclus chaque cas avec les règles de la leçon.",
        "methodSteps": [
          "Trois quarts et un quart : couple d’allèles autosomaux avec dominance complète, parents hétérozygotes.",
          "Deux moitiés contre un récessif : l’individu testé est hétérozygote.",
          "Un quart, une moitié, un quart : couple d’allèles codominants, phénotype intermédiaire à la moitié."
        ],
        "conclusion": "Chaque ségrégation a sa conclusion propre dans la leçon : il suffit de la reconnaître."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Règle des trois quarts et un quart",
          "stepTheme": "Règle des trois quarts et un quart",
          "stepBadge": "Règle des trois quarts et un quart",
          "paragraphText": "Dans un croisement, la ségrégation en trois quarts et un quart concerne un couple d’allèles autosomaux avec dominance complète.\nLes individus croisés sont deux hétérozygotes.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p06_q1",
            "type": "mcq",
            "prompt": "La ségrégation trois quarts et un quart signifie que les parents sont :",
            "options": [
              "Deux homozygotes",
              "Deux hétérozygotes, avec dominance complète",
              "Un hétérozygote et un récessif",
              "De sexes différents obligatoirement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Règle énoncée dans la leçon pour la ségrégation en trois quarts et un quart."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Règle des deux moitiés",
          "stepTheme": "Règle des deux moitiés",
          "stepBadge": "Règle des deux moitiés",
          "paragraphText": "Dans un croisement avec un individu homozygote récessif, la ségrégation en deux moitiés révèle un hétérozygote.\nLe génotype de l’individu inconnu correspond aux phénotypes obtenus.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p06_q2",
            "type": "mcq",
            "prompt": "La ségrégation en deux moitiés, contre un récessif, sert à déterminer :",
            "options": [
              "La couleur des yeux",
              "Le génotype hétérozygote de l’individu testé",
              "Le nombre de chromosomes",
              "Le sexe des descendants"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Règle de la leçon : elle révèle l’hétérozygotie de l’individu testé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Règle des quarts et de la codominance",
          "stepTheme": "Règle des quarts et de la codominance",
          "stepBadge": "Règle des quarts et de la codominance",
          "paragraphText": "La ségrégation en un quart, une moitié et un quart correspond à un couple d’allèles codominants.\nLes individus croisés sont deux hétérozygotes et le phénotype de la moitié est intermédiaire.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p06_q3",
            "type": "mcq",
            "prompt": "La ségrégation en quarts avec phénotype intermédiaire correspond à :",
            "options": [
              "Une dominance complète",
              "Une codominance entre deux hétérozygotes",
              "Une hérédité liée au sexe",
              "Une mutation nouvelle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Règle de la leçon pour la codominance."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Règle du sens du croisement",
          "stepTheme": "Règle du sens du croisement",
          "stepBadge": "Règle du sens du croisement",
          "paragraphText": "Si les résultats du croisement changent selon le sens, le caractère étudié est gouverné par un couple d’allèles liés au sexe.\nLes parents sont alors des homozygotes de départ.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p06_q4",
            "type": "mcq",
            "prompt": "Un changement de résultat selon le sens du croisement indique :",
            "options": [
              "Une dominance complète autosomale",
              "Un caractère lié au sexe",
              "Une erreur d’expérience",
              "Une codominance"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Déduction de la leçon : le caractère est lié au sexe."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Conclusion générale de la leçon",
          "stepTheme": "Conclusion générale de la leçon",
          "stepBadge": "Conclusion générale de la leçon",
          "paragraphText": "Conclusion générale : un caractère se transmet d’une génération à une autre grâce aux chromosomes autosomaux et aux chromosomes sexuels.\nLes deux hypothèses de la leçon sont vérifiées.",
          "exercise": {
            "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p06_q5",
            "type": "mcq",
            "prompt": "Un caractère héréditaire se transmet grâce :",
            "options": [
              "Aux seuls organes visibles",
              "Aux chromosomes autosomaux et aux chromosomes sexuels",
              "Au sang uniquement",
              "À l’environnement seul"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la conclusion générale de la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p06_q1",
          "type": "mcq",
          "prompt": "La ségrégation trois quarts et un quart signifie que les parents sont :",
          "options": [
            "Deux homozygotes",
            "Deux hétérozygotes, avec dominance complète",
            "Un hétérozygote et un récessif",
            "De sexes différents obligatoirement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Règle énoncée dans la leçon pour la ségrégation en trois quarts et un quart."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p06_q2",
          "type": "mcq",
          "prompt": "La ségrégation en deux moitiés, contre un récessif, sert à déterminer :",
          "options": [
            "La couleur des yeux",
            "Le génotype hétérozygote de l’individu testé",
            "Le nombre de chromosomes",
            "Le sexe des descendants"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Règle de la leçon : elle révèle l’hétérozygotie de l’individu testé."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p06_q3",
          "type": "mcq",
          "prompt": "La ségrégation en quarts avec phénotype intermédiaire correspond à :",
          "options": [
            "Une dominance complète",
            "Une codominance entre deux hétérozygotes",
            "Une hérédité liée au sexe",
            "Une mutation nouvelle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Règle de la leçon pour la codominance."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p06_q4",
          "type": "mcq",
          "prompt": "Un changement de résultat selon le sens du croisement indique :",
          "options": [
            "Une dominance complète autosomale",
            "Un caractère lié au sexe",
            "Une erreur d’expérience",
            "Une codominance"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Déduction de la leçon : le caractère est lié au sexe."
        },
        {
          "id": "premiere_d_svt_l04_transmission_caractere_hereditaire_p06_q5",
          "type": "mcq",
          "prompt": "Un caractère héréditaire se transmet grâce :",
          "options": [
            "Aux seuls organes visibles",
            "Aux chromosomes autosomaux et aux chromosomes sexuels",
            "Au sang uniquement",
            "À l’environnement seul"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la conclusion générale de la leçon."
        }
      ]
    }
  ]
};
