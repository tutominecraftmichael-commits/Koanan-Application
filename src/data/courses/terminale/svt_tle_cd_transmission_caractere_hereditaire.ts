import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 8 : La transmission d'un caractère héréditaire chez l'Homme » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2121
export const SVT_TLE_CD_L08_TRANSMISSION_CARACTERE_HEREDITAIRE: CurriculumChapter = {
  "id": "terminale_c_svt_l08_transmission_caractere_hereditaire",
  "subjectId": "svt",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 8,
  "orderForGrades": {"terminale_d":11},
  "title": "Leçon 8 : La transmission d'un caractère héréditaire chez l'Homme",
  "summary": "À partir de pedigrees (albinisme, brachydactylie, groupes sanguins ABO, daltonisme), on démontre qu'un caractère héréditaire peut se transmettre chez l'Homme par un autosome ou par un hétérochromosome.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2121",
  "points": [
    {
      "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p01",
      "order": 1,
      "title": "L'albinisme : un caractère récessif porté par un autosome",
      "summary": "Démontrer, à partir du pedigree, que l'allèle de l'albinisme est récessif et autosomique.",
      "conceptExplanation": "L'albinisme est un défaut de pigmentation dû à l'absence de synthèse de la mélanine par l'organisme. Le caractère se présente sous deux phénotypes : normal et albinos.\nDans le pedigree, les parents II1 et II2, normaux, ont donné naissance à des enfants albinos (III2, III3 et III5) : les parents possèdent donc l'allèle de l'anomalie sous une forme masquée, ils sont hétérozygotes. L'allèle albinos est donc récessif et l'allèle normal dominant. Choix des symboles : albinos a, normal A, couple d'allèles A/a.\nL'hypothèse d'un allèle porté par le chromosome sexuel X est réfutée : un tel couple ne peut donner de fille albinos, or la fille III3 est albinos. L'allèle de l'albinisme est donc porté par un autosome.\nLes parents II1 et II2 ont pour génotype A/a ; les enfants albinos III2, III3 et III5 ont pour génotype a/a.",
      "keyRule": "Deux parents normaux donnant un enfant atteint prouvent la récessivité ; une fille atteinte issue de ce couple exclut le chromosome X : l'allèle est autosomique récessif.",
      "formulas": [],
      "workedExample": {
        "title": "Prouver que l'albinisme n'est pas lié au chromosome X",
        "statement": "Dans le pedigree de l'albinisme, la fille III3 est albinos alors que ses parents II1 et II2 sont normaux. Montre que l'allèle responsable n'est pas porté par le chromosome X.",
        "methodSteps": [
          "Supposons l'allèle porté par X et récessif : la mère II1, normale mais mère d'enfants albinos, serait hétérozygote, et le père II2 serait porteur de l'allèle normal sur son X.",
          "L'échiquier de croisement donne alors : toutes les filles normales, une moitié des garçons normale et l'autre moitié albinos.",
          "Un tel couple ne peut donc donner de fille albinos, ce qui contredit le pedigree où III3, une fille, est albinos."
        ],
        "conclusion": "L'hypothèse liée à X est réfutée : l'allèle de l'albinisme est porté par un autosome."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'albinisme et ses deux phénotypes",
          "stepTheme": "L'albinisme et ses deux phénotypes",
          "stepBadge": "L'albinisme et ses deux phénotypes",
          "paragraphText": "• Albinisme : un défaut de pigmentation dû à l'absence de synthèse de la mélanine par l'organisme.\nLe caractère étudié se présente sous deux phénotypes : normal et albinos.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p01_q1",
            "type": "mcq",
            "prompt": "L'albinisme est dû à :",
            "options": [
              "Un excès de synthèse de la mélanine",
              "L'absence de synthèse de la mélanine par l'organisme",
              "Une infection virale",
              "Un chromosome supplémentaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La présentation de l'enquête définit l'albinisme comme un défaut de pigmentation dû à l'absence de synthèse de la mélanine."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Deux parents normaux, des enfants albinos",
          "stepTheme": "Deux parents normaux, des enfants albinos",
          "stepBadge": "Deux parents normaux, des enfants albinos",
          "paragraphText": "Dans le pedigree, les parents II1 et II2 sont normaux et ont donné naissance à des enfants albinos : III2, III3 et III5.\nL'anomalie affecte aussi bien les garçons que les filles.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p01_q2",
            "type": "mcq",
            "prompt": "Dans le pedigree de l'albinisme, les parents II1 et II2 sont :",
            "options": [
              "Tous deux albinos",
              "Normaux, avec des enfants albinos",
              "L'un albinos et l'autre normal",
              "Sans aucun enfant atteint"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'analyse relève que les parents II1 et II2, normaux, ont donné naissance aux enfants albinos III2, III3 et III5."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Récessivité et parents hétérozygotes",
          "stepTheme": "Récessivité et parents hétérozygotes",
          "stepBadge": "Récessivité et parents hétérozygotes",
          "paragraphText": "• Allèle récessif : un allèle masqué chez l'hétérozygote, qui ne s'exprime qu'à l'état homozygote.\nLes parents normaux d'enfants albinos possèdent l'allèle de l'anomalie sous une forme masquée : ils sont hétérozygotes, et l'allèle albinos est récessif devant l'allèle normal dominant.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p01_q3",
            "type": "mcq",
            "prompt": "Si deux parents normaux ont un enfant albinos, on en déduit que l'allèle albinos est :",
            "options": [
              "Dominant",
              "Récessif, et les parents sont hétérozygotes",
              "Absent chez les parents",
              "Porté uniquement par la mère"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'enfant albinos révèle que chaque parent portait l'allèle sous forme masquée : l'allèle albinos est récessif et les parents sont hétérozygotes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Choisir les symboles et écrire les génotypes",
          "stepTheme": "Choisir les symboles et écrire les génotypes",
          "stepBadge": "Choisir les symboles et écrire les génotypes",
          "paragraphText": "Méthode de la leçon : on choisit les symboles, albinos a et normal A, le couple d'allèles étant A/a.\nLes parents II1 et II2 ont pour génotype A/a, et les enfants albinos III2, III3 et III5 ont pour génotype a/a.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p01_q4",
            "type": "mcq",
            "prompt": "Quel est le génotype des enfants albinos III2, III3 et III5 ?",
            "options": [
              "Deux allèles normaux",
              "Un allèle normal et un allèle albinos",
              "Deux allèles albinos",
              "Impossible à déterminer"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un phénotype récessif correspond à un génotype homozygote récessif : les enfants albinos sont a/a, leurs parents normaux étant A/a."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Réfuter l'hypothèse du chromosome X",
          "stepTheme": "Réfuter l'hypothèse du chromosome X",
          "stepBadge": "Réfuter l'hypothèse du chromosome X",
          "paragraphText": "Piège : conclure trop vite à une transmission liée au sexe.\nSi l'allèle était sur le chromosome X, le couple II1-II2 ne pourrait donner aucune fille albinos ; or la fille III3 est albinos, donc l'allèle est sur un autosome.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p01_q5",
            "type": "mcq",
            "prompt": "L'élément du pedigree qui exclut le chromosome X pour l'albinisme est :",
            "options": [
              "La présence de garçons albinos",
              "La présence d'une fille albinos, III3, issue de parents normaux",
              "Le grand nombre d'enfants",
              "L'absence d'enfants normaux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Avec un allèle récessif sur X, toutes les filles du couple seraient normales ; la fille albinos III3 réfute cette hypothèse."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le bilan de l'échiquier sous l'hypothèse X",
          "stepTheme": "Le bilan de l'échiquier sous l'hypothèse X",
          "stepBadge": "Le bilan de l'échiquier sous l'hypothèse X",
          "paragraphText": "Sous l'hypothèse d'un allèle récessif porté par X, l'échiquier du couple II1-II2 donne : toutes les filles normales, 25 pour cent de garçons normaux et 25 pour cent de garçons albinos.\nCe bilan contredit le pedigree, ce qui sert de contre-épreuve dans la démarche de la leçon.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p01_q6",
            "type": "mcq",
            "prompt": "Sous l'hypothèse d'un allèle sur X, les filles du couple II1-II2 seraient :",
            "options": [
              "Toutes albinos",
              "Toutes normales",
              "Pour moitié albinos",
              "Absentes de la descendance"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le bilan de l'échiquier de la leçon indique que toutes les filles sont normales sous cette hypothèse, ce que le pedigree contredit."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p01_q1",
          "type": "mcq",
          "prompt": "L'albinisme est dû à :",
          "options": [
            "Un excès de synthèse de la mélanine",
            "L'absence de synthèse de la mélanine par l'organisme",
            "Une infection virale",
            "Un chromosome supplémentaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La présentation de l'enquête définit l'albinisme comme un défaut de pigmentation dû à l'absence de synthèse de la mélanine."
        },
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p01_q2",
          "type": "mcq",
          "prompt": "Dans le pedigree de l'albinisme, les parents II1 et II2 sont :",
          "options": [
            "Tous deux albinos",
            "Normaux, avec des enfants albinos",
            "L'un albinos et l'autre normal",
            "Sans aucun enfant atteint"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'analyse relève que les parents II1 et II2, normaux, ont donné naissance aux enfants albinos III2, III3 et III5."
        },
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p01_q3",
          "type": "mcq",
          "prompt": "Si deux parents normaux ont un enfant albinos, on en déduit que l'allèle albinos est :",
          "options": [
            "Dominant",
            "Récessif, et les parents sont hétérozygotes",
            "Absent chez les parents",
            "Porté uniquement par la mère"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'enfant albinos révèle que chaque parent portait l'allèle sous forme masquée : l'allèle albinos est récessif et les parents sont hétérozygotes."
        },
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p01_q4",
          "type": "mcq",
          "prompt": "Quel est le génotype des enfants albinos III2, III3 et III5 ?",
          "options": [
            "Deux allèles normaux",
            "Un allèle normal et un allèle albinos",
            "Deux allèles albinos",
            "Impossible à déterminer"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un phénotype récessif correspond à un génotype homozygote récessif : les enfants albinos sont a/a, leurs parents normaux étant A/a."
        },
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p01_q5",
          "type": "mcq",
          "prompt": "L'élément du pedigree qui exclut le chromosome X pour l'albinisme est :",
          "options": [
            "La présence de garçons albinos",
            "La présence d'une fille albinos, III3, issue de parents normaux",
            "Le grand nombre d'enfants",
            "L'absence d'enfants normaux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Avec un allèle récessif sur X, toutes les filles du couple seraient normales ; la fille albinos III3 réfute cette hypothèse."
        },
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p01_q6",
          "type": "mcq",
          "prompt": "Sous l'hypothèse d'un allèle sur X, les filles du couple II1-II2 seraient :",
          "options": [
            "Toutes albinos",
            "Toutes normales",
            "Pour moitié albinos",
            "Absentes de la descendance"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le bilan de l'échiquier de la leçon indique que toutes les filles sont normales sous cette hypothèse, ce que le pedigree contredit."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p02",
      "order": 2,
      "title": "La brachydactylie : un caractère dominant porté par un autosome",
      "summary": "Démontrer que l'allèle de la brachydactylie est dominant et autosomique.",
      "conceptExplanation": "La brachydactylie est une anomalie caractérisée par l'apparition de doigts ou d'orteils courts. Le caractère se présente sous deux phénotypes : normal et atteint.\nDans le pedigree, les enfants atteints de la brachydactylie ont au moins l'un de leurs parents atteint, et l'anomalie est présente dans toutes les générations.\nCela montre que l'allèle responsable de l'anomalie est dominant et l'allèle normal récessif. Choix des symboles : normal n, atteint N, couple d'allèles N/n.\nL'hypothèse du chromosome X est réfutée : sous cette hypothèse, le couple I1-I2 ne pourrait donner que des filles atteintes et des garçons normaux ; or le garçon II3, atteint, appartient à ce couple. L'allèle est donc porté par un autosome.\nLa situation d'apprentissage de la leçon portait d'ailleurs sur une anomalie analogue : la présence de six orteils à chaque pied, transmise de génération en génération.",
      "keyRule": "Un enfant atteint a toujours au moins un parent atteint et l'anomalie paraît à chaque génération : l'allèle est dominant ; un garçon atteint né d'un couple qui l'exclurait sur X prouve l'autosome.",
      "formulas": [],
      "workedExample": {
        "title": "Prouver que la brachydactylie n'est pas liée au chromosome X",
        "statement": "Dans le pedigree de la brachydactylie, le garçon II3 est atteint et appartient au couple I1-I2. Montre que l'allèle responsable n'est pas porté par le chromosome X.",
        "methodSteps": [
          "Supposons l'allèle dominant porté par le chromosome X pour le couple I1-I2.",
          "L'échiquier donne alors : toutes les filles atteintes de l'anomalie et tous les garçons normaux.",
          "Un tel couple ne peut donner naissance à un garçon atteint, ce qui contredit le pedigree où II3 est un garçon atteint."
        ],
        "conclusion": "L'allèle de la brachydactylie n'est pas sur le chromosome X : il est porté par un autosome."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La brachydactylie",
          "stepTheme": "La brachydactylie",
          "stepBadge": "La brachydactylie",
          "paragraphText": "• Brachydactylie : une anomalie caractérisée par l'apparition de doigts ou d'orteils courts.\nElle se présente sous deux phénotypes dans les familles étudiées : normal et atteint.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p02_q1",
            "type": "mcq",
            "prompt": "La brachydactylie se caractérise par :",
            "options": [
              "L'absence de pigmentation",
              "Des doigts ou des orteils courts",
              "La confusion des couleurs rouge et verte",
              "La présence de six orteils uniquement chez les filles"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La présentation de l'enquête définit la brachydactylie par des doigts ou des orteils courts."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les indices de dominance dans le pedigree",
          "stepTheme": "Les indices de dominance dans le pedigree",
          "stepBadge": "Les indices de dominance dans le pedigree",
          "paragraphText": "Deux indices sont relevés dans l'analyse : les enfants atteints ont au moins l'un de leurs parents atteint.\nDe plus, l'anomalie est présente dans toutes les générations du pedigree.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p02_q2",
            "type": "mcq",
            "prompt": "Quel indice du pedigree suggère que l'allèle de la brachydactylie est dominant ?",
            "options": [
              "L'anomalie saute plusieurs générations",
              "Les enfants atteints ont au moins un parent atteint et l'anomalie est présente dans toutes les générations",
              "Seuls les garçons sont atteints",
              "Les parents atteints ont des enfants normaux uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'analyse retient ces deux faits, qui montrent que l'allèle responsable est dominant et l'allèle normal récessif."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Symboles de la brachydactylie",
          "stepTheme": "Symboles de la brachydactylie",
          "stepBadge": "Symboles de la brachydactylie",
          "paragraphText": "Choix des symboles de la leçon : normal n, atteint N.\nLe couple d'allèles est donc N/n, l'allèle atteint étant écrit en majuscule car il est dominant.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p02_q3",
            "type": "mcq",
            "prompt": "Pour la brachydactylie, le couple d'allèles choisi dans la leçon est :",
            "options": [
              "A/a",
              "N/n",
              "D/d",
              "B/b"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon pose : normal n, atteint N, couple d'allèles N/n."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Tester l'hypothèse du chromosome X par l'échiquier",
          "stepTheme": "Tester l'hypothèse du chromosome X par l'échiquier",
          "stepBadge": "Tester l'hypothèse du chromosome X par l'échiquier",
          "paragraphText": "Méthode : on suppose l'allèle porté par le chromosome sexuel X, on construit l'interprétation chromosomique et l'échiquier du couple I1-I2.\nLe bilan contredit le pedigree, donc l'hypothèse est rejetée au profit de l'autosome.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p02_q4",
            "type": "mcq",
            "prompt": "Sous l'hypothèse d'un allèle dominant porté par X, le couple I1-I2 donnerait :",
            "options": [
              "Que des garçons atteints",
              "Toutes les filles atteintes et des garçons normaux",
              "Aucun enfant atteint",
              "Des filles et des garçons atteints en proportions égales"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le bilan de l'échiquier de la leçon donne toutes les filles atteintes et les garçons normaux, ce que contredit le garçon atteint II3."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Dominant ne veut pas dire présent chez tout le monde",
          "stepTheme": "Dominant ne veut pas dire présent chez tout le monde",
          "stepBadge": "Dominant ne veut pas dire présent chez tout le monde",
          "paragraphText": "Piège : croire qu'un allèle dominant rend tous les descendants atteints.\nUn parent atteint hétérozygote N/n peut transmettre l'allèle normal n et avoir des enfants normaux n/n.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p02_q5",
            "type": "mcq",
            "prompt": "Un individu atteint de génotype N/n peut avoir un enfant normal si :",
            "options": [
              "C'est impossible pour un allèle dominant",
              "Il transmet l'allèle n et l'autre parent transmet aussi n",
              "L'enfant est obligatoirement N/N",
              "L'allèle N disparaît à chaque génération"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'hétérozygote N/n transmet N ou n : avec l'allèle n de l'autre parent, l'enfant peut être n/n, donc normal."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'anomalie aux six orteils de la situation d'apprentissage",
          "stepTheme": "L'anomalie aux six orteils de la situation d'apprentissage",
          "stepBadge": "L'anomalie aux six orteils de la situation d'apprentissage",
          "paragraphText": "La situation d'apprentissage présente une anomalie caractérisée par la présence de six orteils à chaque pied.\nSa présence des grands-parents aux petits-enfants montre qu'elle se transmet de génération en génération, comme la brachydactylie étudiée ensuite.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p02_q6",
            "type": "mcq",
            "prompt": "L'anomalie de la situation d'apprentissage est caractérisée par :",
            "options": [
              "L'absence de mélanine",
              "La présence de six orteils à chaque pied",
              "Des doigts très longs",
              "La confusion des couleurs"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La situation d'apprentissage décrit six orteils à chaque pied, transmis de génération en génération dans une famille."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p02_q1",
          "type": "mcq",
          "prompt": "La brachydactylie se caractérise par :",
          "options": [
            "L'absence de pigmentation",
            "Des doigts ou des orteils courts",
            "La confusion des couleurs rouge et verte",
            "La présence de six orteils uniquement chez les filles"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La présentation de l'enquête définit la brachydactylie par des doigts ou des orteils courts."
        },
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p02_q2",
          "type": "mcq",
          "prompt": "Quel indice du pedigree suggère que l'allèle de la brachydactylie est dominant ?",
          "options": [
            "L'anomalie saute plusieurs générations",
            "Les enfants atteints ont au moins un parent atteint et l'anomalie est présente dans toutes les générations",
            "Seuls les garçons sont atteints",
            "Les parents atteints ont des enfants normaux uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'analyse retient ces deux faits, qui montrent que l'allèle responsable est dominant et l'allèle normal récessif."
        },
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p02_q3",
          "type": "mcq",
          "prompt": "Pour la brachydactylie, le couple d'allèles choisi dans la leçon est :",
          "options": [
            "A/a",
            "N/n",
            "D/d",
            "B/b"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon pose : normal n, atteint N, couple d'allèles N/n."
        },
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p02_q4",
          "type": "mcq",
          "prompt": "Sous l'hypothèse d'un allèle dominant porté par X, le couple I1-I2 donnerait :",
          "options": [
            "Que des garçons atteints",
            "Toutes les filles atteintes et des garçons normaux",
            "Aucun enfant atteint",
            "Des filles et des garçons atteints en proportions égales"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le bilan de l'échiquier de la leçon donne toutes les filles atteintes et les garçons normaux, ce que contredit le garçon atteint II3."
        },
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p02_q5",
          "type": "mcq",
          "prompt": "Un individu atteint de génotype N/n peut avoir un enfant normal si :",
          "options": [
            "C'est impossible pour un allèle dominant",
            "Il transmet l'allèle n et l'autre parent transmet aussi n",
            "L'enfant est obligatoirement N/N",
            "L'allèle N disparaît à chaque génération"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'hétérozygote N/n transmet N ou n : avec l'allèle n de l'autre parent, l'enfant peut être n/n, donc normal."
        },
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p02_q6",
          "type": "mcq",
          "prompt": "L'anomalie de la situation d'apprentissage est caractérisée par :",
          "options": [
            "L'absence de mélanine",
            "La présence de six orteils à chaque pied",
            "Des doigts très longs",
            "La confusion des couleurs"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La situation d'apprentissage décrit six orteils à chaque pied, transmis de génération en génération dans une famille."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p03",
      "order": 3,
      "title": "Les groupes sanguins ABO : polyallélisme et codominance",
      "summary": "Expliquer le système ABO : trois allèles, A et B codominants et dominants sur O récessif.",
      "conceptExplanation": "Les groupes sanguins du système ABO comportent trois allèles (A, B et O) qui déterminent les quatre groupes sanguins de ce système : groupe A, groupe B, groupe AB et groupe O.\nDans la descendance du couple I1 (groupe A) et I2 (groupe B), il apparaît deux enfants avec de nouveaux phénotypes : II1 de groupe AB et II2 de groupe O.\nLa naissance de l'enfant II1 de groupe AB montre que les deux allèles A et B se sont exprimés chez cet enfant : aucun n'est dominant par rapport à l'autre, les allèles A et B sont codominants. L'enfant II1, hétérozygote, reçoit l'allèle B de son père et l'allèle A de sa mère.\nLe groupe O est apparu chez l'enfant II2 car l'allèle O, reçu de chaque parent, était masqué chez ces derniers : l'allèle O est donc récessif par rapport aux allèles A et B, et II2 est homozygote récessif.\nConclusion de la leçon : les groupes sanguins ABO sont déterminés par trois allèles (polyallélisme) ; A et B sont codominants entre eux et dominants par rapport à O. La leçon signale au passage une écriture à manier avec prudence dans les génotypes : elle présente le garçon II3 comme de groupe A.",
      "keyRule": "Trois allèles pour un même gène : A et B codominants s'expriment ensemble en AB, et tous deux dominent O, qui ne s'exprime qu'en O/O.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer la naissance d'enfants AB et O chez un couple A et B",
        "statement": "Un couple formé d'une mère I1 de groupe A et d'un père I2 de groupe B a des enfants de groupe AB (II1) et de groupe O (II2). Explique ces deux naissances.",
        "methodSteps": [
          "L'enfant AB a reçu l'allèle A de sa mère et l'allèle B de son père : les deux allèles s'expriment ensemble, ils sont codominants.",
          "L'enfant O a reçu l'allèle O de chacun de ses parents, chez qui cet allèle était masqué.",
          "L'allèle O est donc récessif par rapport à A et B, et l'enfant O est homozygote récessif."
        ],
        "conclusion": "Le système ABO illustre le polyallélisme : A et B codominants, O récessif."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le polyallélisme du système ABO",
          "stepTheme": "Le polyallélisme du système ABO",
          "stepBadge": "Le polyallélisme du système ABO",
          "paragraphText": "• Polyallélisme : le cas où un caractère est déterminé par plus de deux allèles d'un même gène.\nLe système ABO comporte trois allèles, A, B et O, qui déterminent quatre groupes sanguins : A, B, AB et O.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p03_q1",
            "type": "mcq",
            "prompt": "Le système ABO comporte combien d'allèles ?",
            "options": [
              "Deux allèles",
              "Trois allèles : A, B et O",
              "Quatre allèles",
              "Un seul allèle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La conclusion partielle de la leçon parle de trois allèles (polyallélisme) pour quatre groupes sanguins."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La codominance des allèles A et B",
          "stepTheme": "La codominance des allèles A et B",
          "stepBadge": "La codominance des allèles A et B",
          "paragraphText": "La naissance de l'enfant II1 de groupe AB montre que les deux allèles A et B se sont exprimés chez cet enfant.\nAucun de ces allèles n'est dominant par rapport à l'autre : les allèles A et B sont codominants.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p03_q2",
            "type": "mcq",
            "prompt": "Les allèles A et B sont dits codominants parce que :",
            "options": [
              "L'allèle A masque toujours l'allèle B",
              "Les deux allèles s'expriment ensemble chez l'individu AB",
              "L'allèle B masque toujours l'allèle A",
              "Aucun des deux ne s'exprime"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Chez l'enfant AB, les deux allèles reçus s'expriment : c'est la définition de la codominance donnée par la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La récessivité de l'allèle O",
          "stepTheme": "La récessivité de l'allèle O",
          "stepBadge": "La récessivité de l'allèle O",
          "paragraphText": "• Allèle O récessif : l'allèle O est masqué par A et par B chez les hétérozygotes.\nL'enfant II2 de groupe O a reçu l'allèle O de chaque parent : il est homozygote récessif.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p03_q3",
            "type": "mcq",
            "prompt": "Pour être de groupe O, un individu doit être :",
            "options": [
              "Hétérozygote A/O",
              "Hétérozygote B/O",
              "Homozygote O/O",
              "Homozygote A/B"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'allèle O étant récessif par rapport à A et B, seul le génotype homozygote O/O donne le phénotype O."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Retrouver les génotypes des parents",
          "stepTheme": "Retrouver les génotypes des parents",
          "stepBadge": "Retrouver les génotypes des parents",
          "paragraphText": "Méthode : un parent de groupe A qui a un enfant O possède forcément l'allèle O masqué, donc le génotype A/O.\nDe même, le parent de groupe B qui a un enfant O a pour génotype B/O, comme le père I2 et la fille II4 dans la leçon.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p03_q4",
            "type": "mcq",
            "prompt": "Les parents I1 (groupe A) et I2 (groupe B), qui ont un enfant de groupe O, ont pour génotypes :",
            "options": [
              "A/A et B/B",
              "A/O et B/O",
              "A/B et O/O",
              "O/O et A/B"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'enfant O a reçu O de chaque parent : les deux parents portent donc O sous forme masquée, soit A/O et B/O."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le groupe AB n'est pas un mélange masqué",
          "stepTheme": "Le groupe AB n'est pas un mélange masqué",
          "stepBadge": "Le groupe AB n'est pas un mélange masqué",
          "paragraphText": "Piège : penser que chez un individu AB, un allèle masque l'autre comme dans une dominance classique.\nEn réalité, A et B s'expriment tous les deux : le phénotype AB est l'expression simultanée des deux allèles.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p03_q5",
            "type": "mcq",
            "prompt": "Chez un individu de groupe AB, les allèles A et B :",
            "options": [
              "S'expriment tous les deux",
              "L'un masque complètement l'autre",
              "Ne s'expriment ni l'un ni l'autre",
              "Se transforment en allèle O"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le principe de la codominance : chez II1, de groupe AB, les deux allèles se sont exprimés."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le génotype de l'enfant AB",
          "stepTheme": "Le génotype de l'enfant AB",
          "stepBadge": "Le génotype de l'enfant AB",
          "paragraphText": "L'enfant II1 de groupe AB est hétérozygote : il reçoit de son père l'allèle B et de sa mère l'allèle A.\nSon génotype s'écrit avec les deux allèles A et B.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p03_q6",
            "type": "mcq",
            "prompt": "L'enfant II1, de groupe AB, a reçu :",
            "options": [
              "L'allèle A de son père et l'allèle O de sa mère",
              "L'allèle B de son père et l'allèle A de sa mère",
              "Deux allèles O",
              "L'allèle B de ses deux parents"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'interprétation de la leçon attribue à II1 l'allèle B du père I2 et l'allèle A de la mère I1."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p03_q1",
          "type": "mcq",
          "prompt": "Le système ABO comporte combien d'allèles ?",
          "options": [
            "Deux allèles",
            "Trois allèles : A, B et O",
            "Quatre allèles",
            "Un seul allèle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La conclusion partielle de la leçon parle de trois allèles (polyallélisme) pour quatre groupes sanguins."
        },
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p03_q2",
          "type": "mcq",
          "prompt": "Les allèles A et B sont dits codominants parce que :",
          "options": [
            "L'allèle A masque toujours l'allèle B",
            "Les deux allèles s'expriment ensemble chez l'individu AB",
            "L'allèle B masque toujours l'allèle A",
            "Aucun des deux ne s'exprime"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Chez l'enfant AB, les deux allèles reçus s'expriment : c'est la définition de la codominance donnée par la leçon."
        },
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p03_q3",
          "type": "mcq",
          "prompt": "Pour être de groupe O, un individu doit être :",
          "options": [
            "Hétérozygote A/O",
            "Hétérozygote B/O",
            "Homozygote O/O",
            "Homozygote A/B"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'allèle O étant récessif par rapport à A et B, seul le génotype homozygote O/O donne le phénotype O."
        },
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p03_q4",
          "type": "mcq",
          "prompt": "Les parents I1 (groupe A) et I2 (groupe B), qui ont un enfant de groupe O, ont pour génotypes :",
          "options": [
            "A/A et B/B",
            "A/O et B/O",
            "A/B et O/O",
            "O/O et A/B"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'enfant O a reçu O de chaque parent : les deux parents portent donc O sous forme masquée, soit A/O et B/O."
        },
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p03_q5",
          "type": "mcq",
          "prompt": "Chez un individu de groupe AB, les allèles A et B :",
          "options": [
            "S'expriment tous les deux",
            "L'un masque complètement l'autre",
            "Ne s'expriment ni l'un ni l'autre",
            "Se transforment en allèle O"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le principe de la codominance : chez II1, de groupe AB, les deux allèles se sont exprimés."
        },
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p03_q6",
          "type": "mcq",
          "prompt": "L'enfant II1, de groupe AB, a reçu :",
          "options": [
            "L'allèle A de son père et l'allèle O de sa mère",
            "L'allèle B de son père et l'allèle A de sa mère",
            "Deux allèles O",
            "L'allèle B de ses deux parents"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'interprétation de la leçon attribue à II1 l'allèle B du père I2 et l'allèle A de la mère I1."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p04",
      "order": 4,
      "title": "Le daltonisme : un caractère récessif lié au chromosome X",
      "summary": "Démontrer que l'allèle du daltonisme est récessif et porté par l'hétérochromosome X.",
      "conceptExplanation": "Le daltonisme est une anomalie caractérisée par la confusion des couleurs rouge et verte. Le caractère se présente sous deux phénotypes : normal et daltonien.\nDans le pedigree, les parents 1 et 2, normaux, ont donné naissance à un enfant daltonien (5) : les deux parents possèdent l'allèle de l'anomalie sous une forme masquée, ils sont hétérozygotes. L'allèle du daltonisme est récessif et l'allèle normal dominant. Choix des symboles : daltonien d, normal D, couple d'allèles D/d.\nLorsqu'une femme est affectée, elle transmet l'anomalie à tous ses fils.\nSous l'hypothèse d'un allèle porté par le chromosome sexuel X, l'échiquier du couple donne des résultats qui concordent avec le pedigree : l'allèle du daltonisme est donc porté par le chromosome sexuel X, il est lié au sexe.",
      "keyRule": "Parents normaux et enfant atteint : allèle récessif ; transmission d'une femme atteinte à tous ses fils et échiquier concordant : allèle porté par le chromosome X.",
      "formulas": [],
      "workedExample": {
        "title": "Vérifier l'hypothèse d'un allèle porté par le chromosome X",
        "statement": "Pour le daltonisme, on suppose l'allèle récessif porté par le chromosome sexuel X. Que donne l'échiquier du couple de parents normaux 1 et 2, et quelle conclusion la leçon en tire-t-elle ?",
        "methodSteps": [
          "Le couple de parents normaux, dont la mère est hétérozygote, donne selon l'échiquier des garçons atteints de l'anomalie.",
          "Ces résultats concordent avec ceux du pedigree étudié.",
          "L'allèle du daltonisme est donc porté par le chromosome sexuel X : il est lié au sexe."
        ],
        "conclusion": "Contrairement aux cas précédents, l'hypothèse X est ici confirmée par l'échiquier : le daltonisme est lié au sexe."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le daltonisme",
          "stepTheme": "Le daltonisme",
          "stepBadge": "Le daltonisme",
          "paragraphText": "• Daltonisme : une anomalie caractérisée par la confusion des couleurs rouge et verte.\nLe caractère se présente sous deux phénotypes : normal et daltonien.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p04_q1",
            "type": "mcq",
            "prompt": "Le daltonisme se caractérise par :",
            "options": [
              "Des doigts courts",
              "L'absence de mélanine",
              "La confusion des couleurs rouge et verte",
              "La présence de six orteils"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La présentation de l'enquête définit le daltonisme par la confusion des couleurs rouge et verte."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La récessivité de l'allèle du daltonisme",
          "stepTheme": "La récessivité de l'allèle du daltonisme",
          "stepBadge": "La récessivité de l'allèle du daltonisme",
          "paragraphText": "L'enfant 5, daltonien, est issu des parents 1 et 2 apparemment normaux.\nSes deux parents possèdent donc l'allèle de l'anomalie sous une forme masquée : l'allèle du daltonisme est récessif et l'allèle normal dominant (symboles : d et D).",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p04_q2",
            "type": "mcq",
            "prompt": "L'enfant daltonien 5, né de parents normaux, montre que l'allèle du daltonisme est :",
            "options": [
              "Dominant",
              "Récessif",
              "Codominant",
              "Absent chez ses parents"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Comme pour l'albinisme, un enfant atteint né de parents normaux révèle un allèle récessif porté sous forme masquée par les parents."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La transmission par une femme affectée",
          "stepTheme": "La transmission par une femme affectée",
          "stepBadge": "La transmission par une femme affectée",
          "paragraphText": "L'analyse du pedigree relève un fait caractéristique : lorsqu'une femme est affectée, elle transmet l'anomalie à tous ses fils.\nC'est un indice fort d'une transmission liée au chromosome X, car le fils reçoit son chromosome X de sa mère.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p04_q3",
            "type": "mcq",
            "prompt": "Lorsqu'une femme est daltonienne, selon l'analyse du pedigree :",
            "options": [
              "Elle ne transmet jamais l'anomalie",
              "Elle transmet l'anomalie à tous ses fils",
              "Elle la transmet uniquement à ses filles",
              "Seules ses petites-filles sont atteintes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'analyse relève que la femme affectée transmet l'anomalie à tous ses fils, signature d'un allèle porté par le chromosome X."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Confirmer par l'échiquier au lieu de réfuter",
          "stepTheme": "Confirmer par l'échiquier au lieu de réfuter",
          "stepBadge": "Confirmer par l'échiquier au lieu de réfuter",
          "paragraphText": "Méthode : comme pour les cas précédents, on suppose l'allèle sur le chromosome X et on construit l'échiquier.\nIci, le bilan obtenu concorde avec le pedigree : l'hypothèse est retenue, l'allèle est lié au sexe.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p04_q4",
            "type": "mcq",
            "prompt": "Pour le daltonisme, l'échiquier construit sous l'hypothèse du chromosome X :",
            "options": [
              "Contredit le pedigree, comme pour l'albinisme",
              "Concorde avec le pedigree, l'allèle est donc lié au sexe",
              "Est impossible à construire",
              "Montre que l'allèle est dominant"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon conclut que les résultats obtenus concordent avec le pedigree : l'allèle du daltonisme est porté par le chromosome sexuel X."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas généraliser l'autosome à tous les caractères",
          "stepTheme": "Ne pas généraliser l'autosome à tous les caractères",
          "stepBadge": "Ne pas généraliser l'autosome à tous les caractères",
          "paragraphText": "Piège : après l'albinisme et la brachydactylie, conclure que tout caractère est autosomique.\nLa conclusion générale oppose les deux possibilités : un caractère héréditaire peut se transmettre par un autosome ou par un hétérochromosome.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p04_q5",
            "type": "mcq",
            "prompt": "La conclusion générale de la leçon affirme qu'un caractère héréditaire peut se transmettre chez l'Homme :",
            "options": [
              "Uniquement par un autosome",
              "Uniquement par un hétérochromosome",
              "Par un autosome ou par un hétérochromosome",
              "Jamais par les chromosomes sexuels"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les quatre cas étudiés montrent les deux modes : autosomique pour l'albinisme, la brachydactylie et ABO ; lié à X pour le daltonisme."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Comparer albinisme et daltonisme",
          "stepTheme": "Comparer albinisme et daltonisme",
          "stepBadge": "Comparer albinisme et daltonisme",
          "paragraphText": "Exemple de comparaison issu de la leçon : albinisme et daltonisme sont tous deux récessifs, avec des parents normaux hétérozygotes.\nIls diffèrent par le chromosome porteur : un autosome pour l'albinisme, le chromosome X pour le daltonisme, tranché par la fille albinos III3 d'un côté et la concordance de l'échiquier de l'autre.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p04_q6",
            "type": "mcq",
            "prompt": "Albinisme et daltonisme ont en commun :",
            "options": [
              "Le même chromosome porteur",
              "Un allèle récessif, révélé par des parents normaux ayant un enfant atteint",
              "Un allèle dominant",
              "Aucun point commun"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Dans les deux pedigrees, des parents normaux donnent un enfant atteint : l'allèle est récessif dans les deux cas, seul le chromosome porteur diffère."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p04_q1",
          "type": "mcq",
          "prompt": "Le daltonisme se caractérise par :",
          "options": [
            "Des doigts courts",
            "L'absence de mélanine",
            "La confusion des couleurs rouge et verte",
            "La présence de six orteils"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La présentation de l'enquête définit le daltonisme par la confusion des couleurs rouge et verte."
        },
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p04_q2",
          "type": "mcq",
          "prompt": "L'enfant daltonien 5, né de parents normaux, montre que l'allèle du daltonisme est :",
          "options": [
            "Dominant",
            "Récessif",
            "Codominant",
            "Absent chez ses parents"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Comme pour l'albinisme, un enfant atteint né de parents normaux révèle un allèle récessif porté sous forme masquée par les parents."
        },
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p04_q3",
          "type": "mcq",
          "prompt": "Lorsqu'une femme est daltonienne, selon l'analyse du pedigree :",
          "options": [
            "Elle ne transmet jamais l'anomalie",
            "Elle transmet l'anomalie à tous ses fils",
            "Elle la transmet uniquement à ses filles",
            "Seules ses petites-filles sont atteintes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'analyse relève que la femme affectée transmet l'anomalie à tous ses fils, signature d'un allèle porté par le chromosome X."
        },
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p04_q4",
          "type": "mcq",
          "prompt": "Pour le daltonisme, l'échiquier construit sous l'hypothèse du chromosome X :",
          "options": [
            "Contredit le pedigree, comme pour l'albinisme",
            "Concorde avec le pedigree, l'allèle est donc lié au sexe",
            "Est impossible à construire",
            "Montre que l'allèle est dominant"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon conclut que les résultats obtenus concordent avec le pedigree : l'allèle du daltonisme est porté par le chromosome sexuel X."
        },
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p04_q5",
          "type": "mcq",
          "prompt": "La conclusion générale de la leçon affirme qu'un caractère héréditaire peut se transmettre chez l'Homme :",
          "options": [
            "Uniquement par un autosome",
            "Uniquement par un hétérochromosome",
            "Par un autosome ou par un hétérochromosome",
            "Jamais par les chromosomes sexuels"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les quatre cas étudiés montrent les deux modes : autosomique pour l'albinisme, la brachydactylie et ABO ; lié à X pour le daltonisme."
        },
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p04_q6",
          "type": "mcq",
          "prompt": "Albinisme et daltonisme ont en commun :",
          "options": [
            "Le même chromosome porteur",
            "Un allèle récessif, révélé par des parents normaux ayant un enfant atteint",
            "Un allèle dominant",
            "Aucun point commun"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Dans les deux pedigrees, des parents normaux donnent un enfant atteint : l'allèle est récessif dans les deux cas, seul le chromosome porteur diffère."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p05",
      "order": 5,
      "title": "Méthode : déterminer dominance ou récessivité sur un pedigree",
      "summary": "Appliquer la démarche de la leçon pour décider si un allèle est dominant ou récessif.",
      "conceptExplanation": "La leçon applique la même démarche à chaque enquête familiale : présenter le pedigree, relever les résultats, analyser, interpréter avec un choix de symboles, puis conclure.\nPour la dominance ou la récessivité, deux configurations sont décisives. Si deux parents de même phénotype normal ont un enfant atteint, l'allèle de l'anomalie est récessif et les parents sont hétérozygotes : c'est le cas de l'albinisme et du daltonisme.\nSi tout enfant atteint a au moins un parent atteint et si l'anomalie est présente dans toutes les générations, l'allèle est dominant : c'est le cas de la brachydactylie.\nLes exercices d'évaluation demandent exactement ce raisonnement : montrer par un raisonnement logique la dominance ou la récessivité de l'allèle responsable d'une maladie, puis déterminer la nature du chromosome porteur et écrire les génotypes.",
      "keyRule": "Enfant atteint de parents normaux égale récessif ; enfant atteint toujours d'un parent atteint, à chaque génération, égale dominant.",
      "formulas": [],
      "workedExample": {
        "title": "Raisonnement sur une maladie à petits nodules (exercice 2)",
        "statement": "L'exercice 2 présente l'arbre généalogique d'une famille dont certains membres sont atteints d'une maladie caractérisée par la présence de petits nodules colorés sur le visage. Quelle est la première question à traiter, et avec quelle démarche ?",
        "methodSteps": [
          "On commence par montrer, par un raisonnement logique, la dominance ou la récessivité de l'allèle responsable, en cherchant les configurations décisives du pedigree.",
          "On détermine ensuite la nature du chromosome qui porte l'allèle responsable.",
          "On écrit enfin le génotype des individus demandés, en s'appuyant si besoin sur un échiquier de croisement."
        ],
        "conclusion": "La démarche suit l'ordre de la leçon : dominance ou récessivité, puis chromosome porteur, puis génotypes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Lire un pedigree",
          "stepTheme": "Lire un pedigree",
          "stepBadge": "Lire un pedigree",
          "paragraphText": "• Pedigree : la représentation des résultats d'une enquête sur une anomalie dans une famille, sur plusieurs générations.\nChaque cas de la leçon commence par la présentation d'un tel pedigree, suivie de ses résultats.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p05_q1",
            "type": "mcq",
            "prompt": "Dans la démarche de la leçon, un pedigree sert à :",
            "options": [
              "Mesurer la charge virale d'un patient",
              "Représenter la transmission d'un caractère dans une famille sur plusieurs générations",
              "Doser les anticorps anti-VIH",
              "Classer les groupes sanguins d'un hôpital"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Chaque enquête de la leçon repose sur des observations dans une famille, représentées par un pedigree."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "La démarche complète d'analyse",
          "stepTheme": "La démarche complète d'analyse",
          "stepBadge": "La démarche complète d'analyse",
          "paragraphText": "La démarche suivie dans chaque cas comporte : présentation de l'enquête, résultats, analyse, interprétation avec choix des symboles, puis conclusion partielle.\nLes évaluations reprennent cet ordre : dominance ou récessivité, nature du chromosome, génotypes.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p05_q2",
            "type": "mcq",
            "prompt": "Quel est l'ordre de la démarche d'analyse d'un pedigree dans la leçon ?",
            "options": [
              "Génotypes, puis symboles, puis pedigree",
              "Présentation, résultats, analyse, interprétation, conclusion",
              "Conclusion d'abord, observations ensuite",
              "Échiquier seul, sans analyse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Tous les cas étudiés suivent la même succession : présentation, résultats, analyse, interprétation et conclusion partielle."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le critère de récessivité",
          "stepTheme": "Le critère de récessivité",
          "stepBadge": "Le critère de récessivité",
          "paragraphText": "Critère de récessivité : deux parents apparemment normaux donnent naissance à un enfant atteint.\nLes parents possèdent alors l'allèle sous forme masquée : ils sont hétérozygotes, comme II1 et II2 pour l'albinisme ou les parents 1 et 2 pour le daltonisme.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p05_q3",
            "type": "mcq",
            "prompt": "La configuration qui prouve la récessivité d'un allèle est :",
            "options": [
              "Un parent atteint et tous les enfants atteints",
              "Deux parents normaux qui donnent un enfant atteint",
              "Une anomalie présente à toutes les générations",
              "Un enfant normal de parents atteints"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la configuration de l'albinisme et du daltonisme : l'enfant atteint révèle l'allèle masqué des deux parents normaux."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le critère de dominance",
          "stepTheme": "Le critère de dominance",
          "stepBadge": "Le critère de dominance",
          "paragraphText": "Critère de dominance : les enfants atteints ont au moins l'un de leurs parents atteint.\nRenforcé par la présence de l'anomalie dans toutes les générations, c'est le critère retenu pour la brachydactylie.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p05_q4",
            "type": "mcq",
            "prompt": "La configuration qui suggère la dominance d'un allèle est :",
            "options": [
              "Deux parents normaux avec un enfant atteint",
              "Des enfants atteints ayant au moins un parent atteint, avec l'anomalie à toutes les générations",
              "Une anomalie qui n'apparaît qu'une fois",
              "Des parents atteints sans enfant"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour la brachydactylie, l'analyse retient exactement ces deux faits pour conclure à un allèle dominant."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Vrai ou faux sur les pedigrees (exercice 1)",
          "stepTheme": "Vrai ou faux sur les pedigrees (exercice 1)",
          "stepBadge": "Vrai ou faux sur les pedigrees (exercice 1)",
          "paragraphText": "Piège : dans l'exercice 1, chaque affirmation sur les pedigrees A et B doit être jugée séparément : récessif, dominant, autosomal, lié au sexe.\nUn allèle ne peut pas être à la fois dominant et récessif, mais il peut être, par exemple, récessif et autosomal : il faut appliquer les deux critères dans l'ordre.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p05_q5",
            "type": "mcq",
            "prompt": "Dans l'exercice 1, pour chaque pedigree, il faut déterminer successivement :",
            "options": [
              "Uniquement le génotype des enfants",
              "La dominance ou récessivité, puis le caractère autosomal ou lié au sexe",
              "Le groupe sanguin des individus",
              "Le nombre de chromosomes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les affirmations proposées portent sur les deux questions dans l'ordre : récessif ou dominant, puis autosomal ou lié au sexe."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Hétérozygotes ou homozygotes (exercice 1)",
          "stepTheme": "Hétérozygotes ou homozygotes (exercice 1)",
          "stepBadge": "Hétérozygotes ou homozygotes (exercice 1)",
          "paragraphText": "L'exercice 1 demande aussi si les individus 1 et 2 de chaque pedigree sont hétérozygotes, homozygotes récessifs ou homozygotes dominants.\nPour un pedigree de type albinisme, des parents normaux d'un enfant atteint sont nécessairement hétérozygotes.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p05_q6",
            "type": "mcq",
            "prompt": "Des parents normaux qui ont un enfant atteint d'une anomalie récessive sont :",
            "options": [
              "Homozygotes dominants",
              "Homozygotes récessifs",
              "Hétérozygotes",
              "Sans l'allèle de l'anomalie"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ils portent l'allèle sous forme masquée tout en étant normaux : ce sont des hétérozygotes, comme II1 et II2 dans le cas de l'albinisme."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p05_q1",
          "type": "mcq",
          "prompt": "Dans la démarche de la leçon, un pedigree sert à :",
          "options": [
            "Mesurer la charge virale d'un patient",
            "Représenter la transmission d'un caractère dans une famille sur plusieurs générations",
            "Doser les anticorps anti-VIH",
            "Classer les groupes sanguins d'un hôpital"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Chaque enquête de la leçon repose sur des observations dans une famille, représentées par un pedigree."
        },
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p05_q2",
          "type": "mcq",
          "prompt": "Quel est l'ordre de la démarche d'analyse d'un pedigree dans la leçon ?",
          "options": [
            "Génotypes, puis symboles, puis pedigree",
            "Présentation, résultats, analyse, interprétation, conclusion",
            "Conclusion d'abord, observations ensuite",
            "Échiquier seul, sans analyse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Tous les cas étudiés suivent la même succession : présentation, résultats, analyse, interprétation et conclusion partielle."
        },
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p05_q3",
          "type": "mcq",
          "prompt": "La configuration qui prouve la récessivité d'un allèle est :",
          "options": [
            "Un parent atteint et tous les enfants atteints",
            "Deux parents normaux qui donnent un enfant atteint",
            "Une anomalie présente à toutes les générations",
            "Un enfant normal de parents atteints"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la configuration de l'albinisme et du daltonisme : l'enfant atteint révèle l'allèle masqué des deux parents normaux."
        },
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p05_q4",
          "type": "mcq",
          "prompt": "La configuration qui suggère la dominance d'un allèle est :",
          "options": [
            "Deux parents normaux avec un enfant atteint",
            "Des enfants atteints ayant au moins un parent atteint, avec l'anomalie à toutes les générations",
            "Une anomalie qui n'apparaît qu'une fois",
            "Des parents atteints sans enfant"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour la brachydactylie, l'analyse retient exactement ces deux faits pour conclure à un allèle dominant."
        },
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p05_q5",
          "type": "mcq",
          "prompt": "Dans l'exercice 1, pour chaque pedigree, il faut déterminer successivement :",
          "options": [
            "Uniquement le génotype des enfants",
            "La dominance ou récessivité, puis le caractère autosomal ou lié au sexe",
            "Le groupe sanguin des individus",
            "Le nombre de chromosomes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les affirmations proposées portent sur les deux questions dans l'ordre : récessif ou dominant, puis autosomal ou lié au sexe."
        },
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p05_q6",
          "type": "mcq",
          "prompt": "Des parents normaux qui ont un enfant atteint d'une anomalie récessive sont :",
          "options": [
            "Homozygotes dominants",
            "Homozygotes récessifs",
            "Hétérozygotes",
            "Sans l'allèle de l'anomalie"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ils portent l'allèle sous forme masquée tout en étant normaux : ce sont des hétérozygotes, comme II1 et II2 dans le cas de l'albinisme."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p06",
      "order": 6,
      "title": "Méthode : localiser le chromosome et écrire les génotypes",
      "summary": "Tester l'hypothèse du chromosome X par l'échiquier et écrire les génotypes des individus d'un pedigree.",
      "conceptExplanation": "Pour localiser l'allèle, la leçon suppose qu'il est porté par le chromosome sexuel X, construit l'interprétation chromosomique et l'échiquier de croisement d'un couple bien choisi, puis compare le bilan au pedigree.\nSi le bilan contredit le pedigree, l'allèle est sur un autosome : c'est le cas de l'albinisme, à cause de la fille atteinte III3, et de la brachydactylie, à cause du garçon atteint II3. Si le bilan concorde, l'allèle est lié au sexe : c'est le cas du daltonisme.\nUne fois le mode de transmission établi, on écrit les génotypes : les individus au phénotype récessif sont homozygotes récessifs (a/a pour les albinos), les parents normaux d'enfants atteints sont hétérozygotes (A/a), et certains génotypes restent doubles, comme III1 et III4 pour l'albinisme, A/a ou A/A.\nPour les groupes sanguins, les génotypes se déduisent des enfants : un parent A ou B ayant un enfant O est A/O ou B/O, l'enfant AB est A/B et l'enfant O est O/O.",
      "keyRule": "On teste le chromosome X par un échiquier : bilan contredit égale autosome, bilan concordant égale lié au sexe ; les génotypes se lisent ensuite sur le pedigree.",
      "formulas": [],
      "workedExample": {
        "title": "Écrire les génotypes dans le cas de l'albinisme",
        "statement": "Dans le pedigree de l'albinisme, écris les génotypes des parents II1 et II2, des enfants albinos et des enfants normaux III1 et III4.",
        "methodSteps": [
          "Les parents II1 et II2, normaux mais parents d'enfants albinos, sont hétérozygotes : A/a.",
          "Les enfants albinos III2, III3 et III5, au phénotype récessif, sont homozygotes : a/a.",
          "Les enfants normaux III1 et III4 peuvent être A/a ou A/A : leur génotype reste double."
        ],
        "conclusion": "Le pedigree fixe les génotypes des atteints et des parents, mais laisse deux possibilités aux enfants normaux III1 et III4."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Construire l'échiquier de croisement",
          "stepTheme": "Construire l'échiquier de croisement",
          "stepBadge": "Construire l'échiquier de croisement",
          "paragraphText": "Méthode : on écrit les génotypes des parents sous l'hypothèse testée, on place leurs gamètes en lignes et colonnes de l'échiquier.\nLe bilan donne les phénotypes attendus des filles et des garçons, en pourcentages.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p06_q1",
            "type": "mcq",
            "prompt": "Un échiquier de croisement sert à :",
            "options": [
              "Doser les anticorps d'un patient",
              "Prévoir les phénotypes de la descendance d'un couple sous une hypothèse donnée",
              "Mesurer la taille des chromosomes",
              "Classer les follicules ovariens"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Dans chaque cas, l'échiquier fournit le bilan des descendants attendus, comparé ensuite au pedigree réel."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Comparer le bilan au pedigree",
          "stepTheme": "Comparer le bilan au pedigree",
          "stepBadge": "Comparer le bilan au pedigree",
          "paragraphText": "Le bilan de l'échiquier est la prévision de l'hypothèse ; le pedigree est la réalité observée.\nS'ils se contredisent sur un individu précis, l'hypothèse du chromosome X tombe et l'allèle est autosomique.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p06_q2",
            "type": "mcq",
            "prompt": "Si le bilan de l'échiquier sous l'hypothèse X contredit le pedigree, on conclut que :",
            "options": [
              "Le pedigree est faux",
              "L'allèle est porté par un autosome",
              "L'allèle est forcément dominant",
              "Il faut recommencer l'enquête"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le raisonnement suivi pour l'albinisme et la brachydactylie : contradiction, donc autosome."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Homozygote et hétérozygote",
          "stepTheme": "Homozygote et hétérozygote",
          "stepBadge": "Homozygote et hétérozygote",
          "paragraphText": "• Homozygote : un individu qui porte deux fois le même allèle, comme a/a pour un albinos ou O/O pour le groupe O.\n• Hétérozygote : un individu qui porte deux allèles différents, comme A/a ou l'enfant AB de génotype A/B.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p06_q3",
            "type": "mcq",
            "prompt": "L'enfant II1 de groupe AB, de génotype A/B, est :",
            "options": [
              "Homozygote dominant",
              "Homozygote récessif",
              "Hétérozygote",
              "Sans génotype déterminable"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Il porte deux allèles différents, A reçu de sa mère et B de son père : il est hétérozygote, comme le dit l'interprétation."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Génotypes certains et génotypes doubles",
          "stepTheme": "Génotypes certains et génotypes doubles",
          "stepBadge": "Génotypes certains et génotypes doubles",
          "paragraphText": "Certains génotypes sont certains : tout individu au phénotype récessif est homozygote récessif.\nD'autres restent doubles : les garçons normaux III1 et III4 du pedigree de l'albinisme peuvent être A/a ou A/A, et la leçon les écrit avec les deux possibilités.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p06_q4",
            "type": "mcq",
            "prompt": "Pour les enfants normaux III1 et III4 (albinisme), la leçon donne comme génotype :",
            "options": [
              "Deux allèles albinos obligatoirement",
              "Un allèle de chaque sorte, ou deux allèles normaux",
              "Un allèle de chaque sorte obligatoirement",
              "Aucun génotype possible"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un enfant normal d'un couple A/a et A/a peut recevoir A des deux parents ou A d'un seul : la leçon conserve les deux écritures."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Bien choisir le couple test pour l'hypothèse X",
          "stepTheme": "Bien choisir le couple test pour l'hypothèse X",
          "stepBadge": "Bien choisir le couple test pour l'hypothèse X",
          "paragraphText": "Piège : tester l'hypothèse du chromosome X sur un couple qui ne peut rien trancher.\nLa leçon choisit un couple dont la descendance réelle contient l'individu décisif : la fille atteinte III3 pour l'albinisme, le garçon atteint II3 pour la brachydactylie.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p06_q5",
            "type": "mcq",
            "prompt": "Pour réfuter l'hypothèse X dans le cas de la brachydactylie, l'individu décisif est :",
            "options": [
              "Une fille normale",
              "Le garçon atteint II3, que l'hypothèse X rend impossible chez ce couple",
              "Un parent normal sans enfant",
              "L'enfant de groupe O"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Sous l'hypothèse X, le couple I1-I2 ne pouvait donner aucun garçon atteint : le garçon atteint II3 est la contradiction décisive."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Déterminer un génotype par échiquier (exercice 2)",
          "stepTheme": "Déterminer un génotype par échiquier (exercice 2)",
          "stepBadge": "Déterminer un génotype par échiquier (exercice 2)",
          "paragraphText": "L'exercice 2 demande de déterminer le génotype exact de la femme 9 à partir d'un échiquier de croisement.\nOn y applique la méthode complète : mode de transmission d'abord, puis génotypes des parents, puis échiquier et lecture du génotype cherché.",
          "exercise": {
            "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p06_q6",
            "type": "mcq",
            "prompt": "Pour déterminer le génotype exact d'un individu avec un échiquier, il faut d'abord connaître :",
            "options": [
              "Son groupe sanguin uniquement",
              "Le mode de transmission de l'allèle et les génotypes de ses parents",
              "Le nombre de ses enfants uniquement",
              "Sa charge virale"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'exercice enchaîne les questions dans cet ordre : dominance, chromosome porteur, génotypes, puis échiquier pour le génotype exact."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p06_q1",
          "type": "mcq",
          "prompt": "Un échiquier de croisement sert à :",
          "options": [
            "Doser les anticorps d'un patient",
            "Prévoir les phénotypes de la descendance d'un couple sous une hypothèse donnée",
            "Mesurer la taille des chromosomes",
            "Classer les follicules ovariens"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Dans chaque cas, l'échiquier fournit le bilan des descendants attendus, comparé ensuite au pedigree réel."
        },
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p06_q2",
          "type": "mcq",
          "prompt": "Si le bilan de l'échiquier sous l'hypothèse X contredit le pedigree, on conclut que :",
          "options": [
            "Le pedigree est faux",
            "L'allèle est porté par un autosome",
            "L'allèle est forcément dominant",
            "Il faut recommencer l'enquête"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le raisonnement suivi pour l'albinisme et la brachydactylie : contradiction, donc autosome."
        },
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p06_q3",
          "type": "mcq",
          "prompt": "L'enfant II1 de groupe AB, de génotype A/B, est :",
          "options": [
            "Homozygote dominant",
            "Homozygote récessif",
            "Hétérozygote",
            "Sans génotype déterminable"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Il porte deux allèles différents, A reçu de sa mère et B de son père : il est hétérozygote, comme le dit l'interprétation."
        },
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p06_q4",
          "type": "mcq",
          "prompt": "Pour les enfants normaux III1 et III4 (albinisme), la leçon donne comme génotype :",
          "options": [
            "Deux allèles albinos obligatoirement",
            "Un allèle de chaque sorte, ou deux allèles normaux",
            "Un allèle de chaque sorte obligatoirement",
            "Aucun génotype possible"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un enfant normal d'un couple A/a et A/a peut recevoir A des deux parents ou A d'un seul : la leçon conserve les deux écritures."
        },
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p06_q5",
          "type": "mcq",
          "prompt": "Pour réfuter l'hypothèse X dans le cas de la brachydactylie, l'individu décisif est :",
          "options": [
            "Une fille normale",
            "Le garçon atteint II3, que l'hypothèse X rend impossible chez ce couple",
            "Un parent normal sans enfant",
            "L'enfant de groupe O"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Sous l'hypothèse X, le couple I1-I2 ne pouvait donner aucun garçon atteint : le garçon atteint II3 est la contradiction décisive."
        },
        {
          "id": "terminale_c_svt_l08_transmission_caractere_hereditaire_p06_q6",
          "type": "mcq",
          "prompt": "Pour déterminer le génotype exact d'un individu avec un échiquier, il faut d'abord connaître :",
          "options": [
            "Son groupe sanguin uniquement",
            "Le mode de transmission de l'allèle et les génotypes de ses parents",
            "Le nombre de ses enfants uniquement",
            "Sa charge virale"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'exercice enchaîne les questions dans cet ordre : dominance, chromosome porteur, génotypes, puis échiquier pour le génotype exact."
        }
      ]
    }
  ]
};
