import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « SVT 1ère A_L6_La Transmission dun caractère lié aux autosomes.pdf (Mon école à la maison ; le document l’intitule « Leçon 1 » du thème « La transmission des caractères héréditaires chez l’Homme ») ». Première A1 et A2.
// Fichier généré (scratchpad build_1re_a_svt_b.mjs) : modifier le générateur plutôt que ce fichier.
export const SVT_1RE_A_L06_TRANSMISSION_CARACTERE_AUTOSOMES: CurriculumChapter = {
  "id": "premiere_a1_svt_l06_transmission_caractere_autosomes",
  "subjectId": "svt",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2"
  ],
  "order": 6,
  "title": "Leçon 6 : La transmission d’un caractère héréditaire lié aux autosomes",
  "summary": "Caractères et maladies héréditaires, vocabulaire (gène, allèle, locus, génotype, phénotype), albinisme récessif autosomique, hypothèse du chromosome X, drépanocytose et daltonisme.",
  "officialVolumeHours": 5,
  "contentVersion": 2,
  "source": "SVT 1ère A_L6_La Transmission dun caractère lié aux autosomes.pdf (Mon école à la maison ; le document l’intitule « Leçon 1 » du thème « La transmission des caractères héréditaires chez l’Homme »)",
  "points": [
    {
      "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p01",
      "order": 1,
      "title": "Les caractères héréditaires",
      "summary": "Ce qui se transmet par les gènes ; maladies héréditaires et maladies infectieuses.",
      "conceptExplanation": "Situation : à Ferkessédougou, une élève de 1re A à la peau noire, comme ses parents, a un frère et une sœur albinos. Le professeur explique que l’albinisme est un caractère héréditaire.\n- Un caractère héréditaire se transmet de génération en génération par les gènes portés par les chromosomes : couleur et aspect des cheveux, couleur des yeux, forme du nez et du menton, lobe de l’oreille, nombre de doigts…\n- Maladies héréditaires : albinisme, drépanocytose, hémophilie, thalassémie, mucoviscidose, maladie de Huntington, myopathie de Duchenne, syndrome de l’X fragile. La plupart touchent les deux sexes.\n- Les maladies infectieuses (paludisme, fièvre jaune, fièvre typhoïde, COVID-19) sont dues à des microbes : elles ne sont pas héréditaires.\n- L’albinisme peut apparaître chez des enfants dont aucun parent n’est albinos.\n- Correction du document : il range le « mongolisme » (trisomie 21) parmi les maladies héréditaires. C’est une maladie génétique (chromosomique), mais en général elle n’est pas héritée : elle vient d’un accident de la méiose (leçon 3).",
      "keyRule": "Héréditaire = transmis par les gènes des parents. Infectieux = dû à un microbe, non héréditaire.",
      "formulas": [],
      "workedExample": {
        "title": "Trier des maladies",
        "statement": "Paludisme, albinisme, fièvre jaune, drépanocytose, typhoïde, hémophilie, thalassémie, COVID-19 : lesquelles sont héréditaires ?",
        "methodSteps": [
          "Paludisme, fièvre jaune, typhoïde et COVID-19 sont dues à des microbes.",
          "Albinisme, drépanocytose, hémophilie et thalassémie sont transmises par les gènes."
        ],
        "conclusion": "Héréditaires : albinisme, drépanocytose, hémophilie, thalassémie."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Héréditaire",
          "stepTheme": "Définition",
          "stepTitle": "Qu’est-ce qu’un caractère héréditaire ?",
          "paragraphText": "Un caractère **héréditaire** se transmet des parents aux enfants par les **gènes** portés par les **chromosomes**.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p01_q1",
            "type": "mcq",
            "prompt": "Qu’est-ce qu’un caractère héréditaire ?",
            "options": [
              "Un caractère transmis des parents aux enfants par les gènes portés par les chromosomes",
              "Un caractère acquis par l’éducation",
              "Une maladie due à un microbe",
              "Une blessure ancienne"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il passe d’une génération à l’autre par les gamètes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Exemples",
          "stepTheme": "Caractères",
          "stepTitle": "Des caractères héréditaires",
          "paragraphText": "La **couleur des yeux**, la couleur et l’aspect des cheveux, la forme du nez, le lobe de l’oreille sont des caractères **héréditaires**.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p01_q2",
            "type": "mcq",
            "prompt": "Lequel de ces caractères est héréditaire ?",
            "options": [
              "La couleur des yeux",
              "Une cicatrice au genou",
              "La langue que l’on parle",
              "Un bras cassé"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les trois autres sont acquis au cours de la vie."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Maladies",
          "stepTheme": "Héréditaires",
          "stepTitle": "Une maladie héréditaire",
          "paragraphText": "La **drépanocytose**, l’albinisme, l’hémophilie, la thalassémie sont **héréditaires** ; le paludisme est dû à un parasite.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p01_q3",
            "type": "mcq",
            "prompt": "Laquelle de ces maladies est héréditaire ?",
            "options": [
              "La drépanocytose",
              "Le paludisme",
              "La fièvre typhoïde",
              "La COVID-19"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les trois autres sont des maladies infectieuses."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "Trier",
          "stepTheme": "Activité",
          "stepTitle": "Héréditaire ou infectieuse ?",
          "paragraphText": "Paludisme, fièvre jaune, typhoïde, COVID-19 : **infectieuses**. Albinisme, hémophilie, thalassémie : **héréditaires**.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p01_q4",
            "type": "mcq",
            "prompt": "Parmi ces maladies : paludisme, albinisme, fièvre jaune, hémophilie, thalassémie, COVID-19, lesquelles sont héréditaires ?",
            "options": [
              "L’albinisme, l’hémophilie et la thalassémie",
              "Le paludisme, la fièvre jaune et la COVID-19",
              "Toutes ces maladies",
              "Aucune de ces maladies"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une maladie héréditaire ne s’attrape pas : elle se transmet par les gènes."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Trisomie 21",
          "stepTheme": "Erreur du document",
          "stepTitle": "Génétique ne veut pas dire héritée",
          "paragraphText": "Le document range le « mongolisme » (**trisomie 21**) parmi les maladies héréditaires. Elle est **génétique**, mais en général **pas héritée** : c’est un **accident de la méiose**.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p01_q5",
            "type": "mcq",
            "prompt": "La trisomie 21 est-elle en général transmise par les parents, comme l’albinisme ?",
            "options": [
              "Non : c’est en général un accident de la méiose, pas un allèle transmis de génération en génération",
              "Oui, toujours",
              "Non : c’est une maladie infectieuse",
              "Oui, par le chromosome Y"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Voir la leçon 3 sur les anomalies chromosomiques."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Albinisme",
          "stepTheme": "Situation",
          "stepTitle": "Des parents noirs, des enfants albinos",
          "paragraphText": "Des parents à la peau **noire** peuvent avoir des enfants **albinos** : l’albinisme peut **sauter une génération**.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p01_q6",
            "type": "mcq",
            "prompt": "Des parents à la peau noire ont deux enfants albinos. Que montre cette situation ?",
            "options": [
              "L’albinisme peut apparaître chez des enfants dont les parents ne sont pas albinos",
              "L’albinisme est contagieux",
              "Les parents sont forcément albinos",
              "L’albinisme est dû au soleil"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les parents portent l’allèle sans le montrer."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p01_q1",
          "type": "mcq",
          "prompt": "Qu’est-ce qu’un caractère héréditaire ?",
          "options": [
            "Un caractère transmis des parents aux enfants par les gènes portés par les chromosomes",
            "Un caractère acquis par l’éducation",
            "Une maladie due à un microbe",
            "Une blessure ancienne"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il passe d’une génération à l’autre par les gamètes."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p01_q2",
          "type": "mcq",
          "prompt": "Lequel de ces caractères est héréditaire ?",
          "options": [
            "La couleur des yeux",
            "Une cicatrice au genou",
            "La langue que l’on parle",
            "Un bras cassé"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les trois autres sont acquis au cours de la vie."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p01_q3",
          "type": "mcq",
          "prompt": "Laquelle de ces maladies est héréditaire ?",
          "options": [
            "La drépanocytose",
            "Le paludisme",
            "La fièvre typhoïde",
            "La COVID-19"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les trois autres sont des maladies infectieuses."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p01_q4",
          "type": "mcq",
          "prompt": "Parmi ces maladies : paludisme, albinisme, fièvre jaune, hémophilie, thalassémie, COVID-19, lesquelles sont héréditaires ?",
          "options": [
            "L’albinisme, l’hémophilie et la thalassémie",
            "Le paludisme, la fièvre jaune et la COVID-19",
            "Toutes ces maladies",
            "Aucune de ces maladies"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une maladie héréditaire ne s’attrape pas : elle se transmet par les gènes."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p01_q5",
          "type": "mcq",
          "prompt": "La trisomie 21 est-elle en général transmise par les parents, comme l’albinisme ?",
          "options": [
            "Non : c’est en général un accident de la méiose, pas un allèle transmis de génération en génération",
            "Oui, toujours",
            "Non : c’est une maladie infectieuse",
            "Oui, par le chromosome Y"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Voir la leçon 3 sur les anomalies chromosomiques."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p01_q6",
          "type": "mcq",
          "prompt": "Des parents à la peau noire ont deux enfants albinos. Que montre cette situation ?",
          "options": [
            "L’albinisme peut apparaître chez des enfants dont les parents ne sont pas albinos",
            "L’albinisme est contagieux",
            "Les parents sont forcément albinos",
            "L’albinisme est dû au soleil"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les parents portent l’allèle sans le montrer."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p02",
      "order": 2,
      "title": "Le vocabulaire de la génétique",
      "summary": "Gène, allèle, locus, génotype, phénotype, homozygote, hétérozygote, dominant, récessif.",
      "conceptExplanation": "- Le gène est une portion d’ADN située sur un chromosome ; c’est l’unité de l’hérédité qui contrôle un caractère.\n- Un gène peut avoir plusieurs formes : les allèles. Un individu diploïde n’en possède que deux, un sur chaque chromosome de la paire, au même emplacement appelé locus.\n- Le génotype est l’ensemble des allèles d’un individu (on l’écrit A//a) ; le phénotype est l’ensemble des caractères visibles déterminés par le génotype (on l’écrit [A]).\n- Homozygote : les deux allèles sont identiques (A//A ou a//a). Hétérozygote : ils sont différents (A//a).\n- Chez l’hétérozygote, si un seul allèle s’exprime, il est dominant ; l’autre est récessif : c’est la dominance complète.\n- Si les deux allèles s’expriment ensemble (groupe sanguin AB, hémoglobines A et S chez une personne A//S), on parle de codominance ; si l’hétérozygote a un phénotype intermédiaire, on parle de semi-dominance.\n- Corrections du document : il présente « dominance intermédiaire, semi-dominance et codominance » comme une seule notion ; ce sont deux cas différents. Dans l’exercice 2, le corrigé déclare vraie la phrase « un phénotype est dit dominant lorsqu’il apparaît majoritairement dans une descendance » : elle est fausse, la dominance se définit chez l’hétérozygote, pas par la fréquence.",
      "keyRule": "Gène → allèles (A, a) au même locus ; génotype A//a, phénotype [A] ; l’allèle qui s’exprime chez l’hétérozygote est dominant.",
      "formulas": [],
      "workedExample": {
        "title": "Lire un génotype",
        "statement": "Une personne a le génotype A//a et le phénotype [A]. Qualifiez-la et ses allèles.",
        "methodSteps": [
          "Deux allèles différents : elle est hétérozygote.",
          "Seul A s’exprime : A est dominant, a est récessif."
        ],
        "conclusion": "Hétérozygote A//a ; A dominant, a récessif."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Gène",
          "stepTheme": "Définition",
          "stepTitle": "Le gène",
          "paragraphText": "Le **gène** est une **portion d’ADN** d’un chromosome qui **contrôle un caractère** héréditaire.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p02_q1",
            "type": "mcq",
            "prompt": "Qu’est-ce qu’un gène ?",
            "options": [
              "Une portion d’ADN d’un chromosome qui contrôle un caractère héréditaire",
              "L’emplacement d’un chromosome dans la cellule",
              "Une cellule sexuelle",
              "Un caractère visible"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est l’unité de l’hérédité."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Le vocabulaire de la génétique",
            "caption": "On écrit le génotype entre deux barres (A//a) et le phénotype entre crochets ([A]).",
            "tableData": {
              "headers": [
                "Notion",
                "Définition",
                "Exemple"
              ],
              "rows": [
                [
                  "Gène",
                  "Portion d’ADN d’un chromosome qui contrôle un caractère",
                  "Le gène de la pigmentation de la peau"
                ],
                [
                  "Allèle",
                  "Une des formes possibles d’un gène",
                  "A (normal) et a (albinos)"
                ],
                [
                  "Locus",
                  "Emplacement d’un gène sur un chromosome",
                  "Même locus sur les deux chromosomes homologues"
                ],
                [
                  "Génotype",
                  "Les deux allèles d’un individu pour un gène",
                  "A//a"
                ],
                [
                  "Phénotype",
                  "Caractère visible, déterminé par le génotype",
                  "[A] : peau pigmentée"
                ],
                [
                  "Homozygote",
                  "Deux allèles identiques",
                  "A//A ou a//a"
                ],
                [
                  "Hétérozygote",
                  "Deux allèles différents",
                  "A//a"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Allèle",
          "stepTheme": "Formes",
          "stepTitle": "Les allèles",
          "paragraphText": "Les **allèles** sont les différentes **formes** d’un même gène, par exemple **A** (normal) et **a** (albinos).",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p02_q2",
            "type": "mcq",
            "prompt": "Comment appelle-t-on les différentes formes possibles d’un même gène ?",
            "options": [
              "Des allèles",
              "Des loci",
              "Des phénotypes",
              "Des autosomes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un individu en possède deux pour chaque gène."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "Locus",
          "stepTheme": "Emplacement",
          "stepTitle": "Le locus",
          "paragraphText": "Le **locus** est l’**emplacement** d’un gène sur un chromosome ; les deux allèles occupent le même locus sur les deux chromosomes de la paire.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p02_q3",
            "type": "mcq",
            "prompt": "Comment appelle-t-on l’emplacement d’un gène sur un chromosome ?",
            "options": [
              "Le locus",
              "L’allèle",
              "Le génome",
              "Le phénotype"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Locus signifie « lieu » en latin."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepBadge": "Phénotype",
          "stepTheme": "Visible",
          "stepTitle": "Génotype et phénotype",
          "paragraphText": "Le **génotype** est l’ensemble des allèles (A//a) ; le **phénotype** est le **caractère visible** qu’ils déterminent ([A]).",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p02_q4",
            "type": "mcq",
            "prompt": "Comment appelle-t-on l’ensemble des caractères visibles d’un individu, déterminés par ses gènes ?",
            "options": [
              "Le phénotype",
              "Le génotype",
              "Le locus",
              "L’allèle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Phénotype : ce qui se voit."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Homozygote",
          "stepTheme": "Deux allèles",
          "stepTitle": "Homozygote et hétérozygote",
          "paragraphText": "**Homozygote** : deux allèles **identiques** (A//A, a//a). **Hétérozygote** : deux allèles **différents** (A//a).",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p02_q5",
            "type": "mcq",
            "prompt": "Un individu possède deux allèles identiques pour un gène, par exemple a//a. Comment le qualifie-t-on ?",
            "options": [
              "Homozygote",
              "Hétérozygote",
              "Dominant",
              "Récessif"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Homo- : identique."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepBadge": "Récessif",
          "stepTheme": "Dominance",
          "stepTitle": "Dominant et récessif",
          "paragraphText": "Chez l’hétérozygote, l’allèle qui **s’exprime** est **dominant** ; celui qui reste **caché** est **récessif**.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p02_q6",
            "type": "mcq",
            "prompt": "Chez un hétérozygote A//a de phénotype [A], comment qualifie-t-on l’allèle a qui ne s’exprime pas ?",
            "options": [
              "Récessif",
              "Dominant",
              "Codominant",
              "Homozygote"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’allèle récessif ne se voit que chez l’homozygote a//a."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepBadge": "Codominance",
          "stepTheme": "Erreur du document",
          "stepTitle": "Quand les deux allèles s’expriment",
          "paragraphText": "Chez une personne **A//S**, on trouve à la fois les hémoglobines **A** et **S** : les deux allèles s’expriment, c’est la **codominance**. La semi-dominance est un autre cas (phénotype intermédiaire).",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p02_q7",
            "type": "mcq",
            "prompt": "Chez une personne de génotype A//S pour l’hémoglobine, on trouve à la fois l’hémoglobine A et l’hémoglobine S. Comment appelle-t-on cette expression des deux allèles ?",
            "options": [
              "La codominance",
              "La récessivité",
              "L’homozygotie",
              "La dominance complète de A"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Co- : les deux ensemble."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "piege",
          "stepBadge": "Dominance",
          "stepTheme": "Erreur du document",
          "stepTitle": "Dominant ne veut pas dire fréquent",
          "paragraphText": "Le corrigé du document dit « vrai » à : « un phénotype est dominant lorsqu’il apparaît **majoritairement** ». C’est **faux** : un allèle est dominant s’il **s’exprime chez l’hétérozygote**, quelle que soit sa fréquence.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p02_q8",
            "type": "mcq",
            "prompt": "« Un phénotype est dit dominant lorsqu’il apparaît majoritairement dans une descendance. » Que faut-il répondre ?",
            "options": [
              "Faux : un allèle est dominant s’il s’exprime chez l’hétérozygote, quelle que soit sa fréquence",
              "Vrai",
              "Vrai, seulement chez les garçons",
              "Faux : la dominance n’existe pas chez l’Homme"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un allèle dominant peut être rare (exemple : la polydactylie)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p02_q1",
          "type": "mcq",
          "prompt": "Qu’est-ce qu’un gène ?",
          "options": [
            "Une portion d’ADN d’un chromosome qui contrôle un caractère héréditaire",
            "L’emplacement d’un chromosome dans la cellule",
            "Une cellule sexuelle",
            "Un caractère visible"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est l’unité de l’hérédité."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p02_q2",
          "type": "mcq",
          "prompt": "Comment appelle-t-on les différentes formes possibles d’un même gène ?",
          "options": [
            "Des allèles",
            "Des loci",
            "Des phénotypes",
            "Des autosomes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un individu en possède deux pour chaque gène."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p02_q3",
          "type": "mcq",
          "prompt": "Comment appelle-t-on l’emplacement d’un gène sur un chromosome ?",
          "options": [
            "Le locus",
            "L’allèle",
            "Le génome",
            "Le phénotype"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Locus signifie « lieu » en latin."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p02_q4",
          "type": "mcq",
          "prompt": "Comment appelle-t-on l’ensemble des caractères visibles d’un individu, déterminés par ses gènes ?",
          "options": [
            "Le phénotype",
            "Le génotype",
            "Le locus",
            "L’allèle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Phénotype : ce qui se voit."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p02_q5",
          "type": "mcq",
          "prompt": "Un individu possède deux allèles identiques pour un gène, par exemple a//a. Comment le qualifie-t-on ?",
          "options": [
            "Homozygote",
            "Hétérozygote",
            "Dominant",
            "Récessif"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Homo- : identique."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p02_q6",
          "type": "mcq",
          "prompt": "Chez un hétérozygote A//a de phénotype [A], comment qualifie-t-on l’allèle a qui ne s’exprime pas ?",
          "options": [
            "Récessif",
            "Dominant",
            "Codominant",
            "Homozygote"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’allèle récessif ne se voit que chez l’homozygote a//a."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p02_q7",
          "type": "mcq",
          "prompt": "Chez une personne de génotype A//S pour l’hémoglobine, on trouve à la fois l’hémoglobine A et l’hémoglobine S. Comment appelle-t-on cette expression des deux allèles ?",
          "options": [
            "La codominance",
            "La récessivité",
            "L’homozygotie",
            "La dominance complète de A"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Co- : les deux ensemble."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p02_q8",
          "type": "mcq",
          "prompt": "« Un phénotype est dit dominant lorsqu’il apparaît majoritairement dans une descendance. » Que faut-il répondre ?",
          "options": [
            "Faux : un allèle est dominant s’il s’exprime chez l’hétérozygote, quelle que soit sa fréquence",
            "Vrai",
            "Vrai, seulement chez les garçons",
            "Faux : la dominance n’existe pas chez l’Homme"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un allèle dominant peut être rare (exemple : la polydactylie)."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p03",
      "order": 3,
      "title": "L’albinisme : un allèle récessif porté par un autosome",
      "summary": "Lire le pédigrée, montrer la récessivité, rejeter l’hypothèse du chromosome X, écrire les génotypes.",
      "conceptExplanation": "- Pédigrée : trois générations. Seule la génération III compte des albinos ; les parents II1 et II2, non albinos, ont cinq enfants dont trois albinos (III2, III3 et III5 : une fille et deux garçons).\n- Récessivité : des parents normaux ont des enfants albinos ; ils portent l’allèle de l’albinisme sous forme cachée, ils sont hétérozygotes. L’allèle de l’albinisme est récessif, l’allèle normal dominant. Symboles : A (normal), a (albinos).\n- Hypothèse « allèle porté par le chromosome X » (Y génétiquement inerte) : la mère II1 serait $X^A//X^a$, le père II2 $X^A/Y$. Le père donne son chromosome $X^A$ à toutes ses filles : elles seraient toutes non albinos. Or la fille III3 est albinos : l’hypothèse est fausse.\n- Conclusion : l’allèle de l’albinisme est porté par un autosome. Parents A//a × A//a : chaque enfant a 1 risque sur 4 d’être albinos (a//a), qu’il soit garçon ou fille.\n- Génotypes : II1 et II2 : A//a ; III2, III3, III5 (albinos) : a//a ; III1 et III4 (non albinos) : A//A ou A//a.\n- Correction du document : son tableau donne III4 « a//a [a] » et III5 « A//a ou A//A [A] » ; c’est l’inverse (III4 est non albinos, III5 est albinos), et III3 est oublié.",
      "keyRule": "Parents sains, enfant atteint → allèle récessif. Fille atteinte d’un père sain → pas lié à X → autosome. A//a × A//a → 1/4 a//a.",
      "formulas": [],
      "workedExample": {
        "title": "Montrer que l’allèle n’est pas porté par X",
        "statement": "Le père II2 n’est pas albinos et sa fille III3 est albinos. Montrez que le gène n’est pas sur le chromosome X.",
        "methodSteps": [
          "Si le gène était sur X, le père serait $X^A/Y$ et donnerait $X^A$ à toutes ses filles.",
          "Ses filles seraient toutes [A] ; or III3 est albinos."
        ],
        "conclusion": "L’hypothèse est rejetée : l’allèle est porté par un autosome."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Pédigrée",
          "stepTheme": "Analyse",
          "stepTitle": "Des parents sains, des enfants albinos",
          "paragraphText": "Les parents **II1 et II2**, non albinos, ont **5 enfants dont 3 albinos** : ils portent l’allèle de l’albinisme **sous forme cachée**. Cet allèle est **récessif**.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p03_q1",
            "type": "mcq",
            "prompt": "Dans un arbre généalogique, deux parents non albinos (II1 et II2) ont cinq enfants, dont trois albinos (une fille et deux garçons). Que montre ce résultat ?",
            "options": [
              "Les parents portent l’allèle de l’albinisme sous forme cachée : il est récessif",
              "L’allèle de l’albinisme est dominant",
              "Les parents sont albinos",
              "L’albinisme n’est pas héréditaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un allèle caché chez les parents est récessif."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Une famille touchée par l’albinisme",
            "caption": "Carré : homme ; rond : femme ; en rouge : albinos. Les parents II1 et II2, non albinos, ont trois enfants albinos sur cinq.",
            "svgContent": "<svg viewBox=\"0 0 480 255\" width=\"100%\" style=\"max-width:480px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Arbre généalogique : parents II1 et II2 non albinos, enfants III2, III3 et III5 albinos\"><line x1=\"84\" y1=\"40\" x2=\"146\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"115\" y1=\"40\" x2=\"115\" y2=\"85\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"115\" y1=\"85\" x2=\"115\" y2=\"85\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"115\" y1=\"85\" x2=\"115\" y2=\"116\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"314\" y1=\"40\" x2=\"376\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"345\" y1=\"40\" x2=\"345\" y2=\"85\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"85\" x2=\"430\" y2=\"85\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"85\" x2=\"250\" y2=\"116\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"340\" y1=\"85\" x2=\"340\" y2=\"116\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"430\" y1=\"85\" x2=\"430\" y2=\"116\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"129\" y1=\"130\" x2=\"236\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"182.5\" y1=\"130\" x2=\"182.5\" y2=\"175\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"90\" y1=\"175\" x2=\"370\" y2=\"175\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"90\" y1=\"175\" x2=\"90\" y2=\"206\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"175\" x2=\"160\" y2=\"206\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"175\" x2=\"230\" y2=\"206\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"300\" y1=\"175\" x2=\"300\" y2=\"206\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"370\" y1=\"175\" x2=\"370\" y2=\"206\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><rect x=\"56\" y=\"26\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"70\" y=\"70\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">I1</text><circle cx=\"160\" cy=\"40\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"160\" y=\"70\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">I2</text><rect x=\"286\" y=\"26\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"300\" y=\"70\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">I3</text><circle cx=\"390\" cy=\"40\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"390\" y=\"70\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">I4</text><circle cx=\"115\" cy=\"130\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"115\" y=\"160\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">II1</text><rect x=\"236\" y=\"116\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"250\" y=\"160\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">II2</text><circle cx=\"340\" cy=\"130\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"340\" y=\"160\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">II3</text><rect x=\"416\" y=\"116\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"430\" y=\"160\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">II4</text><circle cx=\"90\" cy=\"220\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"90\" y=\"250\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">III1</text><rect x=\"146\" y=\"206\" width=\"28\" height=\"28\" fill=\"#EF4444\" fill-opacity=\"0.85\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"160\" y=\"250\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">III2</text><circle cx=\"230\" cy=\"220\" r=\"14\" fill=\"#EF4444\" fill-opacity=\"0.85\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"230\" y=\"250\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">III3</text><rect x=\"286\" y=\"206\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"300\" y=\"250\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">III4</text><rect x=\"356\" y=\"206\" width=\"28\" height=\"28\" fill=\"#EF4444\" fill-opacity=\"0.85\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"370\" y=\"250\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">III5</text><text x=\"14\" y=\"44\" font-size=\"12\" text-anchor=\"start\" font-weight=\"800\" fill=\"currentColor\">I</text><text x=\"14\" y=\"134\" font-size=\"12\" text-anchor=\"start\" font-weight=\"800\" fill=\"currentColor\">II</text><text x=\"14\" y=\"224\" font-size=\"12\" text-anchor=\"start\" font-weight=\"800\" fill=\"currentColor\">III</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Symboles",
          "stepTheme": "Écriture",
          "stepTitle": "Écrire les allèles",
          "paragraphText": "On note l’allèle **dominant** en majuscule (**A**, normal) et l’allèle **récessif** en minuscule (**a**, albinos). Un albinos est **a//a**.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p03_q2",
            "type": "mcq",
            "prompt": "L’allèle normal A domine l’allèle de l’albinisme a. Comment écrit-on le génotype d’une personne albinos ?",
            "options": [
              "a//a : deux allèles récessifs",
              "A//A : deux allèles normaux",
              "A//a : un allèle de chaque",
              "A//Y : un allèle et un chromosome Y"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un caractère récessif n’apparaît que chez l’homozygote."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepBadge": "Parents",
          "stepTheme": "Génotypes",
          "stepTitle": "Le génotype des parents",
          "paragraphText": "Des parents **[A]** qui ont des enfants **a//a** ont chacun donné un allèle a : ils sont **A//a**.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p03_q3",
            "type": "mcq",
            "prompt": "Deux parents de phénotype normal [A] ont des enfants albinos a//a. Quel est le génotype de chacun des parents ?",
            "options": [
              "Hétérozygotes A//a tous les deux",
              "Homozygotes normaux A//A tous les deux",
              "Albinos a//a tous les deux",
              "Un parent normal A//A et un parent albinos a//a"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaque enfant albinos a reçu un a de chaque parent."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "Hypothèse X",
          "stepTheme": "Vérification",
          "stepTitle": "Et si le gène était sur le chromosome X ?",
          "paragraphText": "Si l’allèle était sur **X**, le père non albinos serait **$X^A/Y$** : il donnerait **$X^A$ à toutes ses filles**, qui seraient toutes non albinos.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p03_q4",
            "type": "mcq",
            "prompt": "Si l’allèle de l’albinisme était porté par le chromosome X, un père non albinos ($X^A/Y$) pourrait-il avoir une fille albinos ?",
            "options": [
              "Non : il donne son chromosome $X^A$ à toutes ses filles, qui seraient donc non albinos",
              "Oui, toujours",
              "Oui, une fille sur deux",
              "Non, car il n’a pas de chromosome X"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une fille reçoit toujours le X de son père."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Hypothèse : allèle porté par le chromosome X",
            "caption": "Couple II1 × II2. Toutes les filles reçoivent le chromosome $X^A$ de leur père : aucune ne peut être albinos.",
            "tableData": {
              "headers": [
                "Gamètes",
                "Père : $X^A$",
                "Père : Y"
              ],
              "rows": [
                [
                  "Mère : $X^A$",
                  "$X^A//X^A$ [A] fille",
                  "$X^A/Y$ [A] garçon"
                ],
                [
                  "Mère : $X^a$",
                  "$X^A//X^a$ [A] fille",
                  "$X^a/Y$ [a] garçon albinos"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepBadge": "Autosome",
          "stepTheme": "Conclusion",
          "stepTitle": "L’allèle est sur un autosome",
          "paragraphText": "La fille **III3** est albinos alors que son père ne l’est pas : l’hypothèse du chromosome X est **rejetée**. L’allèle est porté par un **autosome**.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p03_q5",
            "type": "mcq",
            "prompt": "Un père non albinos a une fille albinos (III3). Que conclure sur l’allèle de l’albinisme ?",
            "options": [
              "Il est porté par un autosome, pas par le chromosome X",
              "Il est porté par le chromosome X",
              "Il est porté par le chromosome Y",
              "Il n’est porté par aucun chromosome"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Seule l’hypothèse autosomique explique une fille atteinte d’un père sain."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Échiquier",
          "stepTheme": "Probabilité",
          "stepTitle": "Le risque pour chaque enfant",
          "paragraphText": "A//a × A//a : **1/4** A//A, **1/2** A//a, **1/4** a//a. Chaque enfant a **1 risque sur 4** d’être albinos.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p03_q6",
            "type": "mcq",
            "prompt": "Deux parents hétérozygotes A//a pour l’albinisme ont un enfant. Quelle est la probabilité que cet enfant soit albinos ?",
            "options": [
              "1/4",
              "1/2",
              "3/4",
              "0"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il faut recevoir a du père ET a de la mère : 1/2 × 1/2 = 1/4."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Allèle porté par un autosome : A//a × A//a",
            "caption": "Chaque enfant de deux parents hétérozygotes a 1 risque sur 4 d’être albinos, garçon ou fille.",
            "tableData": {
              "headers": [
                "Gamètes",
                "Père : A",
                "Père : a"
              ],
              "rows": [
                [
                  "Mère : A",
                  "A//A [A]",
                  "A//a [A]"
                ],
                [
                  "Mère : a",
                  "A//a [A]",
                  "a//a [a] albinos"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepBadge": "Génotypes",
          "stepTheme": "Erreur du document",
          "stepTitle": "Le tableau des génotypes corrigé",
          "paragraphText": "Le document inverse **III4** et **III5**. III4, **non albinos**, est **A//A ou A//a** ; III5, **albinos**, est **a//a** (comme III2 et III3).",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p03_q7",
            "type": "mcq",
            "prompt": "Dans la famille étudiée, III4 est un garçon non albinos et III5 un garçon albinos, nés de parents A//a. Quels sont leurs génotypes ?",
            "options": [
              "III4 : A//A ou A//a ; III5 : a//a",
              "III4 : a//a ; III5 : A//A ou A//a",
              "Tous deux albinos a//a",
              "Tous deux hétérozygotes A//a"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un albinos est toujours a//a ; un non albinos peut être A//A ou A//a."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Génotypes de la famille (tableau corrigé)",
            "caption": "Le document inverse III4 et III5 et oublie III3.",
            "tableData": {
              "headers": [
                "Individu",
                "Phénotype",
                "Génotype"
              ],
              "rows": [
                [
                  "II1 (mère)",
                  "[A]",
                  "A//a"
                ],
                [
                  "II2 (père)",
                  "[A]",
                  "A//a"
                ],
                [
                  "III1 (fille)",
                  "[A]",
                  "A//A ou A//a"
                ],
                [
                  "III2 (garçon)",
                  "[a] albinos",
                  "a//a"
                ],
                [
                  "III3 (fille)",
                  "[a] albinos",
                  "a//a"
                ],
                [
                  "III4 (garçon)",
                  "[A]",
                  "A//A ou A//a"
                ],
                [
                  "III5 (garçon)",
                  "[a] albinos",
                  "a//a"
                ]
              ]
            }
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p03_q1",
          "type": "mcq",
          "prompt": "Dans un arbre généalogique, deux parents non albinos (II1 et II2) ont cinq enfants, dont trois albinos (une fille et deux garçons). Que montre ce résultat ?",
          "options": [
            "Les parents portent l’allèle de l’albinisme sous forme cachée : il est récessif",
            "L’allèle de l’albinisme est dominant",
            "Les parents sont albinos",
            "L’albinisme n’est pas héréditaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un allèle caché chez les parents est récessif."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p03_q2",
          "type": "mcq",
          "prompt": "L’allèle normal A domine l’allèle de l’albinisme a. Comment écrit-on le génotype d’une personne albinos ?",
          "options": [
            "a//a : deux allèles récessifs",
            "A//A : deux allèles normaux",
            "A//a : un allèle de chaque",
            "A//Y : un allèle et un chromosome Y"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un caractère récessif n’apparaît que chez l’homozygote."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p03_q3",
          "type": "mcq",
          "prompt": "Deux parents de phénotype normal [A] ont des enfants albinos a//a. Quel est le génotype de chacun des parents ?",
          "options": [
            "Hétérozygotes A//a tous les deux",
            "Homozygotes normaux A//A tous les deux",
            "Albinos a//a tous les deux",
            "Un parent normal A//A et un parent albinos a//a"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque enfant albinos a reçu un a de chaque parent."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p03_q4",
          "type": "mcq",
          "prompt": "Si l’allèle de l’albinisme était porté par le chromosome X, un père non albinos ($X^A/Y$) pourrait-il avoir une fille albinos ?",
          "options": [
            "Non : il donne son chromosome $X^A$ à toutes ses filles, qui seraient donc non albinos",
            "Oui, toujours",
            "Oui, une fille sur deux",
            "Non, car il n’a pas de chromosome X"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une fille reçoit toujours le X de son père."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p03_q5",
          "type": "mcq",
          "prompt": "Un père non albinos a une fille albinos (III3). Que conclure sur l’allèle de l’albinisme ?",
          "options": [
            "Il est porté par un autosome, pas par le chromosome X",
            "Il est porté par le chromosome X",
            "Il est porté par le chromosome Y",
            "Il n’est porté par aucun chromosome"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Seule l’hypothèse autosomique explique une fille atteinte d’un père sain."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p03_q6",
          "type": "mcq",
          "prompt": "Deux parents hétérozygotes A//a pour l’albinisme ont un enfant. Quelle est la probabilité que cet enfant soit albinos ?",
          "options": [
            "1/4",
            "1/2",
            "3/4",
            "0"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il faut recevoir a du père ET a de la mère : 1/2 × 1/2 = 1/4."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p03_q7",
          "type": "mcq",
          "prompt": "Dans la famille étudiée, III4 est un garçon non albinos et III5 un garçon albinos, nés de parents A//a. Quels sont leurs génotypes ?",
          "options": [
            "III4 : A//A ou A//a ; III5 : a//a",
            "III4 : a//a ; III5 : A//A ou A//a",
            "Tous deux albinos a//a",
            "Tous deux hétérozygotes A//a"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un albinos est toujours a//a ; un non albinos peut être A//A ou A//a."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p04",
      "order": 4,
      "title": "Évaluation : la drépanocytose",
      "summary": "Hémoglobines A et S, porteurs sains, mode autosomique, génotypes de la famille.",
      "conceptExplanation": "- La drépanocytose est une maladie grave due à une hémoglobine anormale, l’hémoglobine S. A//A : sain (hémoglobine A seule). S//S : malade. A//S : porteur sain, avec les deux hémoglobines (phénotype [AS]) ; il n’est pas malade mais peut transmettre l’allèle S. Au niveau de la maladie, l’allèle S se comporte comme un allèle récessif.\n- Pédigrée : I1 × I2 ont un fils malade II5 et une fille II6 ; I3 × I4 ont un fils malade II8, un fils II7 et une fille II9 ; II6 × II7, non malades, ont une fille malade III10 et trois enfants non malades (III11, III12, III13).\n- Hypothèse « allèle porté par X » avec le couple II6 × II7 : le père II7, non malade, serait $X^A/Y$ et donnerait $X^A$ à toutes ses filles : aucune ne pourrait être malade. Or III10 est malade : l’allèle est porté par un autosome.\n- Génotypes : I1, I2, I3, I4 : A//S (parents non malades d’un enfant malade) ; II5, II8, III10 : S//S ; II6 et II7 : A//S ; II9, III11, III12, III13 : A//A ou A//S.\n- Corrections du document : il écrit « la fille II10 » au lieu de III10 ; il donne III11 et III13 « A//A », alors qu’enfants de deux parents A//S et non malades ils peuvent être A//A ou A//S (le pédigrée ne permet pas de trancher) ; il omet le génotype de II7, qui est A//S.",
      "keyRule": "A//A sain, A//S porteur sain, S//S malade. Fille malade d’un père sain → allèle autosomique.",
      "formulas": [],
      "workedExample": {
        "title": "Trouver le génotype de II7",
        "statement": "II7, non malade, a une fille malade III10 (S//S). Quel est son génotype ?",
        "methodSteps": [
          "III10 est S//S : elle a reçu un allèle S de chacun de ses parents.",
          "II7 n’est pas malade : il possède aussi un allèle A."
        ],
        "conclusion": "II7 est A//S (porteur sain)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Hémoglobines",
          "stepTheme": "Génotypes",
          "stepTitle": "A//A, A//S, S//S",
          "paragraphText": "**A//A** : sain. **S//S** : malade. **A//S** : **porteur sain**, avec les deux hémoglobines A et S.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p04_q1",
            "type": "mcq",
            "prompt": "Une personne possède à la fois de l’hémoglobine A et de l’hémoglobine S, sans être malade. Quel est son génotype ?",
            "options": [
              "A//S",
              "A//A",
              "S//S",
              "S//Y"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les deux hémoglobines indiquent les deux allèles."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Porteurs",
          "stepTheme": "Transmission",
          "stepTitle": "Le rôle des porteurs sains",
          "paragraphText": "Les personnes **A//S** ne sont **pas malades** mais peuvent **transmettre** l’allèle S à leurs enfants.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p04_q2",
            "type": "mcq",
            "prompt": "Pourquoi les personnes A//S sont-elles importantes dans la transmission de la drépanocytose ?",
            "options": [
              "Elles ne sont pas malades mais peuvent transmettre l’allèle S à leurs enfants",
              "Elles sont gravement malades",
              "Elles ne transmettent jamais l’allèle S",
              "Elles n’ont que l’hémoglobine S"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Deux porteurs sains peuvent avoir un enfant malade."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepBadge": "Génération I",
          "stepTheme": "Génotypes",
          "stepTitle": "Les grands-parents",
          "paragraphText": "I1 et I2, **non malades**, ont un fils **S//S** (II5) : chacun lui a donné un S. Ils sont **A//S**.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p04_q3",
            "type": "mcq",
            "prompt": "Deux parents non malades, I1 et I2, ont un fils drépanocytaire S//S, II5. Quels sont les génotypes de I1 et I2 ?",
            "options": [
              "A//S tous les deux",
              "A//A tous les deux",
              "S//S tous les deux",
              "A//A et S//S"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un S de chaque parent, et un A puisqu’ils ne sont pas malades."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Une famille touchée par la drépanocytose",
            "caption": "Carré : homme ; rond : femme ; en rouge : malade (S//S). II6 et II7, non malades, ont une fille malade, III10.",
            "svgContent": "<svg viewBox=\"0 0 480 255\" width=\"100%\" style=\"max-width:480px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Arbre généalogique : II5, II8 et III10 malades\"><line x1=\"84\" y1=\"40\" x2=\"136\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"40\" x2=\"110\" y2=\"85\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"85\" x2=\"150\" y2=\"85\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"85\" x2=\"70\" y2=\"116\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"85\" x2=\"150\" y2=\"116\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"314\" y1=\"40\" x2=\"366\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"340\" y1=\"40\" x2=\"340\" y2=\"85\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"85\" x2=\"420\" y2=\"85\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"85\" x2=\"260\" y2=\"116\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"340\" y1=\"85\" x2=\"340\" y2=\"116\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"420\" y1=\"85\" x2=\"420\" y2=\"116\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"164\" y1=\"130\" x2=\"246\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"205\" y1=\"130\" x2=\"205\" y2=\"175\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"175\" x2=\"330\" y2=\"175\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"175\" x2=\"120\" y2=\"206\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"190\" y1=\"175\" x2=\"190\" y2=\"206\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"175\" x2=\"260\" y2=\"206\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"330\" y1=\"175\" x2=\"330\" y2=\"206\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><rect x=\"56\" y=\"26\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"70\" y=\"70\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">I1</text><circle cx=\"150\" cy=\"40\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"150\" y=\"70\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">I2</text><rect x=\"286\" y=\"26\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"300\" y=\"70\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">I3</text><circle cx=\"380\" cy=\"40\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"380\" y=\"70\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">I4</text><rect x=\"56\" y=\"116\" width=\"28\" height=\"28\" fill=\"#EF4444\" fill-opacity=\"0.85\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"70\" y=\"160\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">II5</text><circle cx=\"150\" cy=\"130\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"150\" y=\"160\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">II6</text><rect x=\"246\" y=\"116\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"260\" y=\"160\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">II7</text><rect x=\"326\" y=\"116\" width=\"28\" height=\"28\" fill=\"#EF4444\" fill-opacity=\"0.85\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"340\" y=\"160\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">II8</text><circle cx=\"420\" cy=\"130\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"420\" y=\"160\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">II9</text><circle cx=\"120\" cy=\"220\" r=\"14\" fill=\"#EF4444\" fill-opacity=\"0.85\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"120\" y=\"250\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">III10</text><rect x=\"176\" y=\"206\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"190\" y=\"250\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">III11</text><rect x=\"246\" y=\"206\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"260\" y=\"250\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">III12</text><circle cx=\"330\" cy=\"220\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"330\" y=\"250\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">III13</text><text x=\"14\" y=\"44\" font-size=\"12\" text-anchor=\"start\" font-weight=\"800\" fill=\"currentColor\">I</text><text x=\"14\" y=\"134\" font-size=\"12\" text-anchor=\"start\" font-weight=\"800\" fill=\"currentColor\">II</text><text x=\"14\" y=\"224\" font-size=\"12\" text-anchor=\"start\" font-weight=\"800\" fill=\"currentColor\">III</text></svg>"
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "Hypothèse X",
          "stepTheme": "Vérification",
          "stepTitle": "Le test du chromosome X",
          "paragraphText": "Si l’allèle S était sur **X**, le père **II7** non malade serait **$X^A/Y$** et toutes ses filles seraient non malades. Or **III10** est malade.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p04_q4",
            "type": "mcq",
            "prompt": "Le père II7 n’est pas malade et sa fille III10 est drépanocytaire. Si l’allèle S était porté par le chromosome X, que devrait-on observer ?",
            "options": [
              "Toutes les filles de II7 seraient non malades, ce que contredit III10",
              "Toutes ses filles seraient malades",
              "Seuls ses fils seraient sains",
              "Rien : l’hypothèse serait confirmée"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une fille reçoit le X de son père."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepBadge": "Autosome",
          "stepTheme": "Conclusion",
          "stepTitle": "Où est l’allèle de la drépanocytose ?",
          "paragraphText": "L’hypothèse du chromosome X est rejetée : l’allèle de la drépanocytose est porté par un **autosome** (en réalité le chromosome 11).",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p04_q5",
            "type": "mcq",
            "prompt": "Le père II7 n’est pas malade et sa fille III10 est drépanocytaire. Où est donc porté l’allèle de la drépanocytose ?",
            "options": [
              "Sur un autosome",
              "Sur le chromosome X",
              "Sur le chromosome Y",
              "Dans les globules blancs seulement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme l’albinisme, c’est une transmission autosomique."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Génération II",
          "stepTheme": "Génotypes",
          "stepTitle": "Les parents de III10",
          "paragraphText": "II6 et II7, non malades, ont une fille **S//S** : ils sont **tous deux A//S**. Le document oublie le génotype de II7.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p04_q6",
            "type": "mcq",
            "prompt": "II6 et II7, tous deux non malades, ont une fille drépanocytaire S//S (III10). Quels sont leurs génotypes ?",
            "options": [
              "A//S tous les deux",
              "A//A tous les deux",
              "A//S pour II6 et A//A pour II7",
              "S//S tous les deux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "III10 a reçu un S de chacun d’eux."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepBadge": "III11 et III13",
          "stepTheme": "Erreur du document",
          "stepTitle": "On ne peut pas toujours trancher",
          "paragraphText": "Le document donne III11 et III13 « **A//A** ». Enfants non malades de deux parents A//S, ils peuvent être **A//A ou A//S** : le pédigrée seul ne permet pas de trancher.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p04_q7",
            "type": "mcq",
            "prompt": "III11 et III13 sont des enfants non malades de deux parents A//S. Que peut-on dire de leur génotype ?",
            "options": [
              "A//A ou A//S : le pédigrée seul ne permet pas de trancher",
              "Forcément A//A",
              "Forcément A//S",
              "Forcément S//S"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Seule une électrophorèse de l’hémoglobine le dirait."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p04_q1",
          "type": "mcq",
          "prompt": "Une personne possède à la fois de l’hémoglobine A et de l’hémoglobine S, sans être malade. Quel est son génotype ?",
          "options": [
            "A//S",
            "A//A",
            "S//S",
            "S//Y"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les deux hémoglobines indiquent les deux allèles."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p04_q2",
          "type": "mcq",
          "prompt": "Pourquoi les personnes A//S sont-elles importantes dans la transmission de la drépanocytose ?",
          "options": [
            "Elles ne sont pas malades mais peuvent transmettre l’allèle S à leurs enfants",
            "Elles sont gravement malades",
            "Elles ne transmettent jamais l’allèle S",
            "Elles n’ont que l’hémoglobine S"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Deux porteurs sains peuvent avoir un enfant malade."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p04_q3",
          "type": "mcq",
          "prompt": "Deux parents non malades, I1 et I2, ont un fils drépanocytaire S//S, II5. Quels sont les génotypes de I1 et I2 ?",
          "options": [
            "A//S tous les deux",
            "A//A tous les deux",
            "S//S tous les deux",
            "A//A et S//S"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un S de chaque parent, et un A puisqu’ils ne sont pas malades."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p04_q4",
          "type": "mcq",
          "prompt": "Le père II7 n’est pas malade et sa fille III10 est drépanocytaire. Si l’allèle S était porté par le chromosome X, que devrait-on observer ?",
          "options": [
            "Toutes les filles de II7 seraient non malades, ce que contredit III10",
            "Toutes ses filles seraient malades",
            "Seuls ses fils seraient sains",
            "Rien : l’hypothèse serait confirmée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une fille reçoit le X de son père."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p04_q5",
          "type": "mcq",
          "prompt": "Le père II7 n’est pas malade et sa fille III10 est drépanocytaire. Où est donc porté l’allèle de la drépanocytose ?",
          "options": [
            "Sur un autosome",
            "Sur le chromosome X",
            "Sur le chromosome Y",
            "Dans les globules blancs seulement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme l’albinisme, c’est une transmission autosomique."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p04_q6",
          "type": "mcq",
          "prompt": "II6 et II7, tous deux non malades, ont une fille drépanocytaire S//S (III10). Quels sont leurs génotypes ?",
          "options": [
            "A//S tous les deux",
            "A//A tous les deux",
            "A//S pour II6 et A//A pour II7",
            "S//S tous les deux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "III10 a reçu un S de chacun d’eux."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p04_q7",
          "type": "mcq",
          "prompt": "III11 et III13 sont des enfants non malades de deux parents A//S. Que peut-on dire de leur génotype ?",
          "options": [
            "A//A ou A//S : le pédigrée seul ne permet pas de trancher",
            "Forcément A//A",
            "Forcément A//S",
            "Forcément S//S"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Seule une électrophorèse de l’hémoglobine le dirait."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p05",
      "order": 5,
      "title": "Exercice : le daltonisme",
      "summary": "Un allèle récessif, une hypothèse liée au chromosome X compatible, des génotypes à écrire.",
      "conceptExplanation": "- Le daltonisme est une anomalie héréditaire de la vision des couleurs (surtout le rouge et le vert). Pédigrée : I1 (mère) et I2 (père), à la vision normale, ont quatre enfants : II1, garçon daltonien ; II2 et II4, filles normales ; II3, garçon normal.\n- Récessivité : des parents normaux ont un fils daltonien : l’allèle est récessif. Symboles : D (normal), d (daltonien).\n- Hypothèse « allèle porté par X » : mère $X^D//X^d$, père $X^D/Y$. Enfants : filles toutes normales ($X^D//X^D$ ou $X^D//X^d$), garçons normaux ($X^D/Y$) ou daltoniens ($X^d/Y$), soit 1 enfant sur 4 daltonien. C’est conforme au pédigrée.\n- Génotypes : I1 : $X^D//X^d$ ; I2 et II3 : $X^D/Y$ ; II1 : $X^d/Y$ ; II2 et II4 : $X^D//X^D$ ou $X^D//X^d$.\n- Corrections du document : il écrit « Albinos : d » au lieu de « Daltonien : d » et « XD//XAD » au lieu de $X^D//X^D$. Surtout, il conclut « l’allèle est donc porté par X » parce que les résultats sont conformes : un résultat conforme ne prouve pas l’hypothèse, car l’hypothèse autosomique (D//d × D//d) est elle aussi compatible avec ce petit arbre. On retient le chromosome X parce que c’est le mode de transmission connu du daltonisme et qu’il touche surtout les garçons.",
      "keyRule": "Hypothèse rejetée si elle contredit l’arbre ; une hypothèse compatible n’est pas pour autant prouvée.",
      "formulas": [],
      "workedExample": {
        "title": "Écrire le génotype de la mère",
        "statement": "La mère I1 voit normalement et a un fils daltonien. Quel est son génotype (gène sur X) ?",
        "methodSteps": [
          "Un fils reçoit son chromosome X de sa mère : II1 ($X^d/Y$) a reçu $X^d$ de I1.",
          "I1 voit normalement : elle porte aussi $X^D$."
        ],
        "conclusion": "I1 est $X^D//X^d$, conductrice saine."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepBadge": "Récessif",
          "stepTheme": "Question 1",
          "stepTitle": "Dominant ou récessif ?",
          "paragraphText": "Des parents à la vision **normale** ont un **fils daltonien** : ils portent l’allèle **caché**. L’allèle du daltonisme est **récessif**.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p05_q1",
            "type": "mcq",
            "prompt": "Deux parents à la vision normale, I1 et I2, ont un fils daltonien, II1. L’allèle du daltonisme est-il dominant ou récessif ?",
            "options": [
              "Récessif : il était caché chez un parent au moins",
              "Dominant",
              "Ni l’un ni l’autre",
              "On ne peut rien dire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un allèle qui apparaît chez l’enfant sans se voir chez les parents est récessif."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Une famille avec un garçon daltonien",
            "caption": "Carré : homme ; rond : femme ; en rouge : daltonien. Les parents I1 et I2 voient normalement.",
            "svgContent": "<svg viewBox=\"0 0 480 170\" width=\"100%\" style=\"max-width:480px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Arbre généalogique : parents normaux, fils II1 daltonien\"><line x1=\"214\" y1=\"40\" x2=\"306\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"40\" x2=\"260\" y2=\"85\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"85\" x2=\"410\" y2=\"85\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"85\" x2=\"110\" y2=\"116\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"210\" y1=\"85\" x2=\"210\" y2=\"116\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"310\" y1=\"85\" x2=\"310\" y2=\"116\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"410\" y1=\"85\" x2=\"410\" y2=\"116\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><circle cx=\"200\" cy=\"40\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"200\" y=\"70\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">I1</text><rect x=\"306\" y=\"26\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"320\" y=\"70\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">I2</text><rect x=\"96\" y=\"116\" width=\"28\" height=\"28\" fill=\"#EF4444\" fill-opacity=\"0.85\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"110\" y=\"160\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">II1</text><circle cx=\"210\" cy=\"130\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"210\" y=\"160\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">II2</text><rect x=\"296\" y=\"116\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"310\" y=\"160\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">II3</text><circle cx=\"410\" cy=\"130\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"410\" y=\"160\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"700\" fill=\"currentColor\">II4</text><text x=\"14\" y=\"44\" font-size=\"12\" text-anchor=\"start\" font-weight=\"800\" fill=\"currentColor\">I</text><text x=\"14\" y=\"134\" font-size=\"12\" text-anchor=\"start\" font-weight=\"800\" fill=\"currentColor\">II</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Symboles",
          "stepTheme": "Notation",
          "stepTitle": "Noter les allèles sur le chromosome X",
          "paragraphText": "On note **D** l’allèle normal et **d** l’allèle du daltonisme (le document écrit « Albinos : d » par erreur). Un homme daltonien est **$X^d/Y$**.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p05_q2",
            "type": "mcq",
            "prompt": "Pour le daltonisme, on note D l’allèle normal et d l’allèle du daltonisme. Si le gène est porté par le chromosome X, comment s’écrit le génotype d’un homme daltonien ?",
            "options": [
              "$X^d/Y$ : son seul X porte l’allèle du daltonisme",
              "$X^D/Y$ : son seul X porte l’allèle normal",
              "$X^d//X^d$ : deux chromosomes X",
              "d//d sur un autosome"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’homme n’a qu’un X : un seul allèle d suffit."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepBadge": "Échiquier",
          "stepTheme": "Question 2",
          "stepTitle": "Les enfants attendus",
          "paragraphText": "Mère **$X^D//X^d$** × père **$X^D/Y$** : filles toutes normales ; garçons normaux ou daltoniens. **1 enfant sur 4** est daltonien, toujours un garçon.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p05_q3",
            "type": "mcq",
            "prompt": "Une mère $X^D//X^d$ et un père $X^D/Y$ ont des enfants. Quelle proportion de leurs enfants sera daltonienne ?",
            "options": [
              "1/4, uniquement des garçons",
              "1/2, uniquement des filles",
              "Tous les enfants",
              "Aucun enfant"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Seule la case $X^d/Y$ donne un enfant daltonien."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Daltonisme : mère $X^D//X^d$ × père $X^D/Y$",
            "caption": "Toutes les filles voient normalement ; un garçon sur deux est daltonien, soit 1 enfant sur 4.",
            "tableData": {
              "headers": [
                "Gamètes",
                "Père : $X^D$",
                "Père : Y"
              ],
              "rows": [
                [
                  "Mère : $X^D$",
                  "$X^D//X^D$ fille normale",
                  "$X^D/Y$ garçon normal"
                ],
                [
                  "Mère : $X^d$",
                  "$X^D//X^d$ fille normale",
                  "$X^d/Y$ garçon daltonien"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepBadge": "Filles",
          "stepTheme": "Raisonnement",
          "stepTitle": "Pas de fille daltonienne ici",
          "paragraphText": "Le père **$X^D/Y$** donne **$X^D$** à toutes ses filles : elles voient toutes normalement.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p05_q4",
            "type": "mcq",
            "prompt": "Selon l’hypothèse du daltonisme lié au chromosome X, une mère $X^D//X^d$ et un père $X^D/Y$ peuvent-ils avoir une fille daltonienne ?",
            "options": [
              "Non : toutes leurs filles reçoivent le $X^D$ du père",
              "Oui, une fille sur deux",
              "Oui, toutes leurs filles",
              "Oui, si la mère voit normalement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une fille daltonienne doit recevoir $X^d$ de ses deux parents."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Conforme ≠ prouvé",
          "stepTheme": "Erreur du document",
          "stepTitle": "Une hypothèse compatible n’est pas une preuve",
          "paragraphText": "Le document conclut « **donc** porté par X » parce que le résultat est conforme. Mais l’hypothèse **autosomique** est **aussi compatible** avec ce petit arbre. On retient X parce que c’est le **mode connu** du daltonisme.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p05_q5",
            "type": "mcq",
            "prompt": "Dans ce pédigrée, l’hypothèse « daltonisme lié au chromosome X » donne des résultats conformes à l’arbre. Cela suffit-il à prouver que le gène est sur X ?",
            "options": [
              "Non : l’hypothèse autosomique est aussi compatible avec ce petit arbre ; on retient X car c’est le mode connu du daltonisme",
              "Oui, c’est une preuve définitive",
              "Non : le gène est forcément sur Y",
              "Oui, car les filles sont daltoniennes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une hypothèse est rejetée par une contradiction, jamais prouvée par un seul accord."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Mère",
          "stepTheme": "Question 3",
          "stepTitle": "Le génotype de la mère",
          "paragraphText": "La mère **I1** voit normalement mais a un fils **$X^d/Y$** : elle lui a donné **$X^d$**. Elle est **$X^D//X^d$** (conductrice).",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p05_q6",
            "type": "mcq",
            "prompt": "La mère I1, à la vision normale, a un fils daltonien $X^d/Y$. Quel est son génotype ?",
            "options": [
              "$X^D//X^d$ : conductrice",
              "$X^D//X^D$ : sans allèle d",
              "$X^d//X^d$ : daltonienne",
              "$X^D/Y$ : génotype d’homme"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un fils reçoit son X de sa mère."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepBadge": "Filles",
          "stepTheme": "Question 3",
          "stepTitle": "Le génotype des filles",
          "paragraphText": "Les filles **II2** et **II4** reçoivent **$X^D$** du père et **$X^D$ ou $X^d$** de la mère : **$X^D//X^D$ ou $X^D//X^d$**.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p05_q7",
            "type": "mcq",
            "prompt": "Les filles II2 et II4, à la vision normale, sont nées d’une mère $X^D//X^d$ et d’un père $X^D/Y$. Quel est leur génotype ?",
            "options": [
              "Normale homozygote ou conductrice : $X^D//X^D$ ou $X^D//X^d$",
              "Forcément daltonienne $X^d//X^d$",
              "Forcément $X^D/Y$, comme le père",
              "Forcément conductrice $X^D//X^d$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On ne sait pas quel X de la mère elles ont reçu."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p05_q1",
          "type": "mcq",
          "prompt": "Deux parents à la vision normale, I1 et I2, ont un fils daltonien, II1. L’allèle du daltonisme est-il dominant ou récessif ?",
          "options": [
            "Récessif : il était caché chez un parent au moins",
            "Dominant",
            "Ni l’un ni l’autre",
            "On ne peut rien dire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un allèle qui apparaît chez l’enfant sans se voir chez les parents est récessif."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p05_q2",
          "type": "mcq",
          "prompt": "Pour le daltonisme, on note D l’allèle normal et d l’allèle du daltonisme. Si le gène est porté par le chromosome X, comment s’écrit le génotype d’un homme daltonien ?",
          "options": [
            "$X^d/Y$ : son seul X porte l’allèle du daltonisme",
            "$X^D/Y$ : son seul X porte l’allèle normal",
            "$X^d//X^d$ : deux chromosomes X",
            "d//d sur un autosome"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’homme n’a qu’un X : un seul allèle d suffit."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p05_q3",
          "type": "mcq",
          "prompt": "Une mère $X^D//X^d$ et un père $X^D/Y$ ont des enfants. Quelle proportion de leurs enfants sera daltonienne ?",
          "options": [
            "1/4, uniquement des garçons",
            "1/2, uniquement des filles",
            "Tous les enfants",
            "Aucun enfant"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Seule la case $X^d/Y$ donne un enfant daltonien."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p05_q4",
          "type": "mcq",
          "prompt": "Selon l’hypothèse du daltonisme lié au chromosome X, une mère $X^D//X^d$ et un père $X^D/Y$ peuvent-ils avoir une fille daltonienne ?",
          "options": [
            "Non : toutes leurs filles reçoivent le $X^D$ du père",
            "Oui, une fille sur deux",
            "Oui, toutes leurs filles",
            "Oui, si la mère voit normalement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une fille daltonienne doit recevoir $X^d$ de ses deux parents."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p05_q5",
          "type": "mcq",
          "prompt": "Dans ce pédigrée, l’hypothèse « daltonisme lié au chromosome X » donne des résultats conformes à l’arbre. Cela suffit-il à prouver que le gène est sur X ?",
          "options": [
            "Non : l’hypothèse autosomique est aussi compatible avec ce petit arbre ; on retient X car c’est le mode connu du daltonisme",
            "Oui, c’est une preuve définitive",
            "Non : le gène est forcément sur Y",
            "Oui, car les filles sont daltoniennes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une hypothèse est rejetée par une contradiction, jamais prouvée par un seul accord."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p05_q6",
          "type": "mcq",
          "prompt": "La mère I1, à la vision normale, a un fils daltonien $X^d/Y$. Quel est son génotype ?",
          "options": [
            "$X^D//X^d$ : conductrice",
            "$X^D//X^D$ : sans allèle d",
            "$X^d//X^d$ : daltonienne",
            "$X^D/Y$ : génotype d’homme"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un fils reçoit son X de sa mère."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p05_q7",
          "type": "mcq",
          "prompt": "Les filles II2 et II4, à la vision normale, sont nées d’une mère $X^D//X^d$ et d’un père $X^D/Y$. Quel est leur génotype ?",
          "options": [
            "Normale homozygote ou conductrice : $X^D//X^D$ ou $X^D//X^d$",
            "Forcément daltonienne $X^d//X^d$",
            "Forcément $X^D/Y$, comme le père",
            "Forcément conductrice $X^D//X^d$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On ne sait pas quel X de la mère elles ont reçu."
        }
      ]
    }
  ]
};
