import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 6 : La transmission d'un caractère lié aux autosomes » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=900
export const SVT_1ERE_A_L06_TRANSMISSION_AUTOSOMES: CurriculumChapter = {
  "id": "premiere_a1_svt_l06_transmission_caractere_autosomes",
  "subjectId": "svt",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2"
  ],
  "order": 6,
  "title": "Leçon 6 : La transmission d'un caractère lié aux autosomes",
  "summary": "Dans une famille, des parents sains ont des enfants albinos des deux sexes : l'albinisme est un caractère récessif porté par un autosome, et sa transmission suit un mode précis que l'échiquier de croisement permet de vérifier.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=900",
  "points": [
    {
      "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p01",
      "order": 1,
      "title": "Les caractères et maladies héréditaires existent",
      "summary": "Montrer, à partir des documents, que de nombreux caractères et maladies se transmettent par les chromosomes et affectent en général les deux sexes.",
      "conceptExplanation": "Ces caractères qui se transmettent de génération en génération sont des caractères héréditaires, c'est-à-dire transmis par les chromosomes ; les enfants ressemblent plus ou moins à leurs parents.\nLe document 1 cite des exemples : l'aspect et la couleur des cheveux, la couleur des yeux, l'aspect ou la longueur du nez et l'aspect des globules rouges.\nLe document 2 présente des maladies héréditaires : la trisomie 21, anomalie du chromosome 21 avec déficience intellectuelle ; la mucoviscidose, qui lèse les poumons et le système digestif ; la maladie de Huntington, dégénérescence des cellules nerveuses ; la myopathie de Duchenne, dégénérescence musculaire touchant généralement les garçons ; la drépanocytose, déformation ou dégradation des globules rouges ; l'hémophilie, anomalie de la coagulation du sang ; la thalassémie, quantité inférieure à la normale d'une protéine qui transporte l'oxygène ; le syndrome de l'X fragile, causant une déficience intellectuelle.\nLa plupart des maladies affectent les deux sexes. L'activité d'application retient comme maladies héréditaires : le mongolisme, l'albinisme, la drépanocytose, l'hémophilie et la thalassémie, et non le paludisme, la fièvre jaune, la fièvre typhoïde ou la COVID 19.",
      "keyRule": "Héréditaire veut dire transmis par les chromosomes, de génération en génération : à distinguer des maladies infectieuses comme le paludisme ou la COVID 19.",
      "formulas": [],
      "workedExample": {
        "title": "Trier les maladies héréditaires (activité d'application)",
        "statement": "Parmi le mongolisme, le paludisme, l'albinisme, la drépanocytose, la fièvre jaune, la fièvre typhoïde, l'hémophilie, la thalassémie et la COVID 19, relève les maladies héréditaires.",
        "methodSteps": [
          "Les maladies héréditaires relevées sont le mongolisme, l'albinisme, la drépanocytose, l'hémophilie et la thalassémie.",
          "Le paludisme, la fièvre jaune, la fièvre typhoïde et la COVID 19 sont des maladies infectieuses, non retenues."
        ],
        "conclusion": "Corrigé de l'activité d'application de la partie I."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un caractère héréditaire",
          "stepTheme": "Un caractère héréditaire",
          "stepBadge": "Un caractère héréditaire",
          "paragraphText": "• Caractère héréditaire : caractère transmis par les chromosomes, de génération en génération.\nDans une famille, les enfants ressemblent plus ou moins à leurs parents, mais ici les enfants albinos ne ressemblent à aucun parent pour ce caractère.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p01_q1",
            "type": "mcq",
            "prompt": "Un caractère héréditaire est un caractère :",
            "options": [
              "Transmis par les chromosomes de génération en génération",
              "Acquis par l'alimentation",
              "Provoqué par un microbe",
              "Présent uniquement chez les parents"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Introduction du contenu du cours, partie I."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Des exemples de caractères héréditaires",
          "stepTheme": "Des exemples de caractères héréditaires",
          "stepBadge": "Des exemples de caractères héréditaires",
          "paragraphText": "L'analyse des documents cite plusieurs caractères héréditaires.\nCe sont par exemple l'aspect et la couleur des cheveux, la couleur des yeux, l'aspect ou la longueur du nez et l'aspect des globules rouges.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p01_q2",
            "type": "mcq",
            "prompt": "Parmi ces caractères, lequel est cité comme caractère héréditaire ?",
            "options": [
              "La langue parlée à l'école",
              "Le métier des parents",
              "La couleur des yeux",
              "Le prénom de l'enfant"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Analyse des documents de la partie I."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La drépanocytose",
          "stepTheme": "La drépanocytose",
          "stepBadge": "La drépanocytose",
          "paragraphText": "La drépanocytose est présentée dans le document 2 des maladies héréditaires.\nC'est un groupe de maladies provoquant la déformation ou la dégradation des globules rouges.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p01_q3",
            "type": "mcq",
            "prompt": "La drépanocytose provoque :",
            "options": [
              "Une dégénérescence des cellules nerveuses",
              "La déformation ou la dégradation des globules rouges",
              "Une anomalie de la coagulation uniquement",
              "Des lésions des poumons uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Document 2 de la partie I."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L'hémophilie",
          "stepTheme": "L'hémophilie",
          "stepBadge": "L'hémophilie",
          "paragraphText": "L'hémophilie figure dans la liste des maladies héréditaires du document 2.\nC'est un trouble qui se caractérise par une anomalie du processus de coagulation du sang.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p01_q4",
            "type": "mcq",
            "prompt": "L'hémophilie se caractérise par :",
            "options": [
              "Une déficience intellectuelle",
              "Une dégénérescence musculaire",
              "Une déformation des globules rouges",
              "Une anomalie du processus de coagulation du sang"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Document 2 de la partie I."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Des maladies qui affectent les deux sexes",
          "stepTheme": "Des maladies qui affectent les deux sexes",
          "stepBadge": "Des maladies qui affectent les deux sexes",
          "paragraphText": "L'analyse constate que la plupart des maladies héréditaires affectent les deux sexes.\nL'introduction précise déjà que ces maladies héréditaires touchent en général les deux sexes.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p01_q5",
            "type": "mcq",
            "prompt": "Selon la leçon, les maladies héréditaires touchent en général :",
            "options": [
              "Uniquement les garçons",
              "Uniquement les filles",
              "Les deux sexes",
              "Uniquement les parents"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Analyse de la partie I et introduction du cours."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Héréditaire ne veut pas dire infectieux",
          "stepTheme": "Héréditaire ne veut pas dire infectieux",
          "stepBadge": "Héréditaire ne veut pas dire infectieux",
          "paragraphText": "Piège de l'activité : le paludisme, la fièvre jaune, la fièvre typhoïde et la COVID 19 figurent dans la liste proposée.\nIls ne sont pas retenus au corrigé, car ce sont des maladies infectieuses et non héréditaires.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p01_q6",
            "type": "mcq",
            "prompt": "Selon le corrigé de l'activité, la maladie héréditaire parmi ces propositions est :",
            "options": [
              "L'albinisme",
              "Le paludisme",
              "La fièvre typhoïde",
              "La COVID 19"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Corrigé de l'activité d'application de la partie I."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p01_q1",
          "type": "mcq",
          "prompt": "Un caractère héréditaire est un caractère :",
          "options": [
            "Transmis par les chromosomes de génération en génération",
            "Acquis par l'alimentation",
            "Provoqué par un microbe",
            "Présent uniquement chez les parents"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Introduction du contenu du cours, partie I."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p01_q2",
          "type": "mcq",
          "prompt": "Parmi ces caractères, lequel est cité comme caractère héréditaire ?",
          "options": [
            "La langue parlée à l'école",
            "Le métier des parents",
            "La couleur des yeux",
            "Le prénom de l'enfant"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Analyse des documents de la partie I."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p01_q3",
          "type": "mcq",
          "prompt": "La drépanocytose provoque :",
          "options": [
            "Une dégénérescence des cellules nerveuses",
            "La déformation ou la dégradation des globules rouges",
            "Une anomalie de la coagulation uniquement",
            "Des lésions des poumons uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Document 2 de la partie I."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p01_q4",
          "type": "mcq",
          "prompt": "L'hémophilie se caractérise par :",
          "options": [
            "Une déficience intellectuelle",
            "Une dégénérescence musculaire",
            "Une déformation des globules rouges",
            "Une anomalie du processus de coagulation du sang"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Document 2 de la partie I."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p01_q5",
          "type": "mcq",
          "prompt": "Selon la leçon, les maladies héréditaires touchent en général :",
          "options": [
            "Uniquement les garçons",
            "Uniquement les filles",
            "Les deux sexes",
            "Uniquement les parents"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Analyse de la partie I et introduction du cours."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p01_q6",
          "type": "mcq",
          "prompt": "Selon le corrigé de l'activité, la maladie héréditaire parmi ces propositions est :",
          "options": [
            "L'albinisme",
            "Le paludisme",
            "La fièvre typhoïde",
            "La COVID 19"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Corrigé de l'activité d'application de la partie I."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p02",
      "order": 2,
      "title": "L'albinisme est récessif : des parents sains ont des enfants malades",
      "summary": "Démontrer la récessivité de l'allèle de l'albinisme à partir du couple II1 et II2 et choisir les symboles A et a.",
      "conceptExplanation": "L'enquête porte sur une famille dont certains membres sont albinos ; l'arbre généalogique (pédigrée) présente trois générations notées I, II et III. La maladie n'est pas présente dans toutes les générations et des parents sains ont des enfants malades. Seule la génération III comporte des albinos et l'albinisme affecte les individus des deux sexes.\nLe couple II1 et II2, d'apparence normale, a engendré 5 enfants dont 3 atteints d'albinisme (une fille et deux garçons). Les parents possèdent donc l'allèle de l'albinisme sous forme masquée (cachée) : ils sont forcément hétérozygotes.\nL'allèle responsable de l'albinisme est donc récessif et l'allèle normal est dominant. Choix des symboles : normal A, albinos a, couple d'allèles A et a.",
      "keyRule": "Signature d'un caractère récessif : deux parents d'apparence normale donnent des enfants atteints ; les parents sont hétérozygotes A/a.",
      "formulas": [],
      "workedExample": {
        "title": "Lire le pédigrée de l'albinisme",
        "statement": "Que montre le pédigrée sur la génération III et sur le couple II1 et II2 ?",
        "methodSteps": [
          "Seule la génération III comporte des albinos, alors que les parents II1 et II2 sont apparemment sains.",
          "Le couple II1 et II2 a 5 enfants dont 3 albinos : une fille et deux garçons.",
          "Les parents portent donc l'allèle de l'albinisme sous forme masquée."
        ],
        "conclusion": "Analyse et interprétation du pédigrée, partie II."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un pédigrée ou arbre généalogique",
          "stepTheme": "Un pédigrée ou arbre généalogique",
          "stepBadge": "Un pédigrée ou arbre généalogique",
          "paragraphText": "Le pédigrée présente trois générations notées I, II et III.\nIl permet de suivre la transmission de l'albinisme dans la famille enquêtée.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p02_q1",
            "type": "mcq",
            "prompt": "Le pédigrée de l'enquête présente :",
            "options": [
              "Une seule génération",
              "Uniquement des albinos",
              "Uniquement la génération des parents",
              "Trois générations notées I, II et III"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Analyse du pédigrée dans la partie II."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La maladie saute des générations",
          "stepTheme": "La maladie saute des générations",
          "stepBadge": "La maladie saute des générations",
          "paragraphText": "La maladie n'est pas présente dans toutes les générations.\nDes parents sains ont des enfants malades, et seule la génération III comporte des albinos dans ce pédigrée.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p02_q2",
            "type": "mcq",
            "prompt": "Dans ce pédigrée, les albinos se trouvent :",
            "options": [
              "Dans toutes les générations",
              "Uniquement dans la génération III, alors que leurs parents sont sains",
              "Uniquement dans la génération I",
              "Uniquement parmi les parents"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Résultats et analyse de l'enquête familiale."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "La preuve de la récessivité",
          "stepTheme": "La preuve de la récessivité",
          "stepBadge": "La preuve de la récessivité",
          "paragraphText": "Le couple II1 et II2, d'apparence normale, a des enfants albinos.\nLes parents possèdent donc l'allèle de l'albinisme sous forme masquée : ils sont forcément hétérozygotes, et l'allèle de l'albinisme est récessif.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p02_q3",
            "type": "mcq",
            "prompt": "Si deux parents d'apparence normale ont des enfants atteints, on conclut que l'allèle de la maladie est :",
            "options": [
              "Dominant",
              "Récessif, les parents le portant sous forme masquée",
              "Absent chez les parents",
              "Porté uniquement par la mère"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation du pédigrée : récessivité ou dominance."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le choix des symboles A et a",
          "stepTheme": "Le choix des symboles A et a",
          "stepBadge": "Le choix des symboles A et a",
          "paragraphText": "La leçon choisit ses symboles avant tout échiquier.\nNormal : A ; albinos : a ; le couple d'allèles est donc A et a, A étant dominant et a récessif.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p02_q4",
            "type": "mcq",
            "prompt": "Dans la leçon, les symboles choisis pour l'albinisme sont :",
            "options": [
              "Normal S, malade A",
              "Normal a, albinos A",
              "Normal D, daltonien d",
              "Normal A (dominant), albinos a (récessif)"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Choix des symboles dans l'interprétation du pédigrée."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les génotypes des parents II1 et II2",
          "stepTheme": "Les génotypes des parents II1 et II2",
          "stepBadge": "Les génotypes des parents II1 et II2",
          "paragraphText": "Le tableau des génotypes donne le génotype des deux parents du couple étudié.\nLa femme II1 et l'homme II2 sont tous deux de génotype A/a, de phénotype normal noté [A].",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p02_q5",
            "type": "mcq",
            "prompt": "Les parents II1 et II2 ont pour génotype :",
            "options": [
              "Hétérozygote A//a pour les deux parents, de phénotype [A]",
              "Homozygote récessif a//a pour les deux parents",
              "Homozygote dominant A//A pour les deux parents",
              "Hétérozygote pour la mère et homozygote récessif pour le père"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Tableau des génotypes des individus dans la partie II."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les enfants albinos sont a/a",
          "stepTheme": "Les enfants albinos sont a/a",
          "stepBadge": "Les enfants albinos sont a/a",
          "paragraphText": "Les garçons III2 et III4, albinos, ont le génotype a/a et le phénotype [a].\nLes enfants normaux III1 et III5 sont A/a ou A/A, de phénotype [A].",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p02_q6",
            "type": "mcq",
            "prompt": "Un enfant albinos de ce pédigrée a pour génotype :",
            "options": [
              "Homozygote dominant A//A",
              "Hétérozygote A//a obligatoirement",
              "Homozygote récessif a//a",
              "Hétérozygote A//a ou homozygote A//A indifféremment"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Tableau des génotypes : III2 et III4 sont a/a, phénotype [a]."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p02_q1",
          "type": "mcq",
          "prompt": "Le pédigrée de l'enquête présente :",
          "options": [
            "Une seule génération",
            "Uniquement des albinos",
            "Uniquement la génération des parents",
            "Trois générations notées I, II et III"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Analyse du pédigrée dans la partie II."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p02_q2",
          "type": "mcq",
          "prompt": "Dans ce pédigrée, les albinos se trouvent :",
          "options": [
            "Dans toutes les générations",
            "Uniquement dans la génération III, alors que leurs parents sont sains",
            "Uniquement dans la génération I",
            "Uniquement parmi les parents"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Résultats et analyse de l'enquête familiale."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p02_q3",
          "type": "mcq",
          "prompt": "Si deux parents d'apparence normale ont des enfants atteints, on conclut que l'allèle de la maladie est :",
          "options": [
            "Dominant",
            "Récessif, les parents le portant sous forme masquée",
            "Absent chez les parents",
            "Porté uniquement par la mère"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation du pédigrée : récessivité ou dominance."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p02_q4",
          "type": "mcq",
          "prompt": "Dans la leçon, les symboles choisis pour l'albinisme sont :",
          "options": [
            "Normal S, malade A",
            "Normal a, albinos A",
            "Normal D, daltonien d",
            "Normal A (dominant), albinos a (récessif)"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Choix des symboles dans l'interprétation du pédigrée."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p02_q5",
          "type": "mcq",
          "prompt": "Les parents II1 et II2 ont pour génotype :",
          "options": [
            "Hétérozygote A//a pour les deux parents, de phénotype [A]",
            "Homozygote récessif a//a pour les deux parents",
            "Homozygote dominant A//A pour les deux parents",
            "Hétérozygote pour la mère et homozygote récessif pour le père"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Tableau des génotypes des individus dans la partie II."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p02_q6",
          "type": "mcq",
          "prompt": "Un enfant albinos de ce pédigrée a pour génotype :",
          "options": [
            "Homozygote dominant A//A",
            "Hétérozygote A//a obligatoirement",
            "Homozygote récessif a//a",
            "Hétérozygote A//a ou homozygote A//A indifféremment"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Tableau des génotypes : III2 et III4 sont a/a, phénotype [a]."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p03",
      "order": 3,
      "title": "Le déterminisme autosomique : réfuter l'hypothèse liée à X",
      "summary": "Tester l'hypothèse d'un allèle porté par le chromosome X à l'aide d'un échiquier de croisement et conclure à un gène autosomal.",
      "conceptExplanation": "Pour déterminer si le caractère est lié au sexe, on suppose que l'allèle responsable de l'albinisme est porté par le chromosome sexuel X, le chromosome Y étant génétiquement inerte.\nPour le couple II1 et II2, on écrit les phénotypes [A] et [A], les génotypes avec X porteur de A ou de a pour la mère, et X porteur de A avec Y pour le père, puis les gamètes formés et l'échiquier de croisement. Le bilan donne des filles toutes normales [A] et des garçons pour moitié [A] et pour moitié [a].\nUn tel couple ne donnerait donc que des garçons albinos. Or la fille III3 est aussi albinos, ce qui est contraire au pédigrée. Le caractère albinos n'est donc pas lié aux chromosomes sexuels mais porté par des autosomes.\nLa même démarche est reprise dans l'exercice de consolidation sur la drépanocytose : la présence d'une fille malade II10 contredit l'hypothèse d'un allèle porté par X et conclut à un autosome.",
      "keyRule": "Méthode : supposer X, construire l'échiquier, comparer au pédigrée réel ; une fille atteinte alors que le père est sain réfute la liaison à X pour un allèle récessif.",
      "formulas": [],
      "workedExample": {
        "title": "Réfuter la liaison à X pour la drépanocytose (situation d'évaluation)",
        "statement": "Pour la drépanocytose, transmise sur le mode récessif, teste l'hypothèse d'un allèle porté par X avec le couple II6 et II7, sachant que la fille II10 est malade.",
        "methodSteps": [
          "Sous l'hypothèse liée à X, l'échiquier du couple donne des filles [A] ou [AS] mais aucune fille malade [S].",
          "Or la fille II10 est malade : les résultats théoriques sont contraires au pédigrée.",
          "L'allèle responsable n'est donc pas lié au chromosome X mais porté par un autosome."
        ],
        "conclusion": "Corrigé de la situation d'évaluation, question 1."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'hypothèse à tester",
          "stepTheme": "L'hypothèse à tester",
          "stepBadge": "L'hypothèse à tester",
          "paragraphText": "Pour le déterminisme génétique, on suppose que l'allèle est porté par le chromosome sexuel X.\nDans cette hypothèse, le chromosome Y est considéré comme génétiquement inerte.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p03_q1",
            "type": "mcq",
            "prompt": "Dans l'hypothèse testée, le chromosome Y est considéré comme :",
            "options": [
              "Portant l'allèle dominant",
              "Identique au chromosome X",
              "Un autosome",
              "Génétiquement inerte"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Démarche du déterminisme génétique dans la partie II."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Construire l'échiquier de croisement",
          "stepTheme": "Construire l'échiquier de croisement",
          "stepBadge": "Construire l'échiquier de croisement",
          "paragraphText": "La vérification suit un ordre fixe : phénotypes, génotypes, gamètes formés avec leurs proportions, puis échiquier.\nL'exercice de consolidation le résume : écrire les phénotypes des parents, leurs génotypes et les gamètes produits, établir un échiquier avec génotypes, phénotypes et proportions des descendants.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p03_q2",
            "type": "mcq",
            "prompt": "Dans la vérification, après les phénotypes et les génotypes, on établit :",
            "options": [
              "Uniquement la conclusion",
              "Les gamètes formés puis l'échiquier de croisement",
              "Un nouveau pédigrée",
              "La liste des maladies héréditaires"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Démarche de vérification suivie pour les couples II1 et II2 puis II6 et II7."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le bilan sous l'hypothèse liée à X",
          "stepTheme": "Le bilan sous l'hypothèse liée à X",
          "stepBadge": "Le bilan sous l'hypothèse liée à X",
          "paragraphText": "Sous l'hypothèse liée à X, le bilan du couple II1 et II2 donne des filles toutes de phénotype [A].\nSeuls des garçons peuvent être albinos dans ce bilan théorique.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p03_q3",
            "type": "mcq",
            "prompt": "Sous l'hypothèse liée à X, le couple II1 et II2 ne donnerait comme albinos que :",
            "options": [
              "Des filles",
              "Aucun enfant",
              "Des garçons",
              "Tous les enfants"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Bilan de l'échiquier sous l'hypothèse liée à X."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La fille III3 contredit l'hypothèse",
          "stepTheme": "La fille III3 contredit l'hypothèse",
          "stepBadge": "La fille III3 contredit l'hypothèse",
          "paragraphText": "Or la fille III3 est aussi albinos dans le pédigrée réel.\nCe fait est contraire au bilan théorique : l'hypothèse d'une liaison aux chromosomes sexuels est donc rejetée.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p03_q4",
            "type": "mcq",
            "prompt": "Le fait du pédigrée qui contredit l'hypothèse liée à X est :",
            "options": [
              "La fille III3, elle aussi albinos",
              "Un garçon normal en génération III",
              "L'absence totale d'enfants",
              "La génération I sans albinos"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Conclusion de la vérification dans la partie II."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Conclusion : un gène porté par un autosome",
          "stepTheme": "Conclusion : un gène porté par un autosome",
          "stepBadge": "Conclusion : un gène porté par un autosome",
          "paragraphText": "Le caractère albinos n'est pas lié aux chromosomes sexuels.\nIl est porté par des autosomes, ce qui explique qu'il touche les individus des deux sexes.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p03_q5",
            "type": "mcq",
            "prompt": "La conclusion du déterminisme pour l'albinisme est :",
            "options": [
              "Caractère porté par des autosomes",
              "Allèle porté par le chromosome Y",
              "Allèle porté par le chromosome sexuel X",
              "Caractère non héréditaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Phrase de conclusion de la vérification, partie II."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas conclure avant la comparaison au pédigrée",
          "stepTheme": "Ne pas conclure avant la comparaison au pédigrée",
          "stepBadge": "Ne pas conclure avant la comparaison au pédigrée",
          "paragraphText": "Piège : l'échiquier seul ne suffit pas ; il faut comparer ses résultats théoriques au pédigrée observé.\nSi les résultats théoriques sont différents de ceux observés dans la descendance, on conclut à un gène autosomal, comme le résume l'exercice 1 de consolidation.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p03_q6",
            "type": "mcq",
            "prompt": "On conclut à un gène autosomal lorsque :",
            "options": [
              "L'échiquier confirme l'hypothèse liée à X",
              "Les parents sont tous les deux malades",
              "Les résultats théoriques diffèrent de ceux observés dans la descendance du couple choisi",
              "Il n'y a aucun enfant malade"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Texte complété de l'exercice 1 de consolidation (mot 8 : gène autosomal)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p03_q1",
          "type": "mcq",
          "prompt": "Dans l'hypothèse testée, le chromosome Y est considéré comme :",
          "options": [
            "Portant l'allèle dominant",
            "Identique au chromosome X",
            "Un autosome",
            "Génétiquement inerte"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Démarche du déterminisme génétique dans la partie II."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p03_q2",
          "type": "mcq",
          "prompt": "Dans la vérification, après les phénotypes et les génotypes, on établit :",
          "options": [
            "Uniquement la conclusion",
            "Les gamètes formés puis l'échiquier de croisement",
            "Un nouveau pédigrée",
            "La liste des maladies héréditaires"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Démarche de vérification suivie pour les couples II1 et II2 puis II6 et II7."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p03_q3",
          "type": "mcq",
          "prompt": "Sous l'hypothèse liée à X, le couple II1 et II2 ne donnerait comme albinos que :",
          "options": [
            "Des filles",
            "Aucun enfant",
            "Des garçons",
            "Tous les enfants"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Bilan de l'échiquier sous l'hypothèse liée à X."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p03_q4",
          "type": "mcq",
          "prompt": "Le fait du pédigrée qui contredit l'hypothèse liée à X est :",
          "options": [
            "La fille III3, elle aussi albinos",
            "Un garçon normal en génération III",
            "L'absence totale d'enfants",
            "La génération I sans albinos"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Conclusion de la vérification dans la partie II."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p03_q5",
          "type": "mcq",
          "prompt": "La conclusion du déterminisme pour l'albinisme est :",
          "options": [
            "Caractère porté par des autosomes",
            "Allèle porté par le chromosome Y",
            "Allèle porté par le chromosome sexuel X",
            "Caractère non héréditaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Phrase de conclusion de la vérification, partie II."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p03_q6",
          "type": "mcq",
          "prompt": "On conclut à un gène autosomal lorsque :",
          "options": [
            "L'échiquier confirme l'hypothèse liée à X",
            "Les parents sont tous les deux malades",
            "Les résultats théoriques diffèrent de ceux observés dans la descendance du couple choisi",
            "Il n'y a aucun enfant malade"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Texte complété de l'exercice 1 de consolidation (mot 8 : gène autosomal)."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p04",
      "order": 4,
      "title": "Les notions de génétique et la drépanocytose codominante",
      "summary": "Définir gène, allèle, locus, génotype, phénotype, homozygote et hétérozygote, puis appliquer à la drépanocytose où A et S s'expriment tous les deux.",
      "conceptExplanation": "La transmission des caractères héréditaires est due à des gènes présents sur les chromosomes : le gène est une portion d'ADN localisée sur un chromosome, l'unité de l'hérédité qui contrôle un caractère.\nUn gène peut présenter deux ou de nombreuses formes appelées allèles. Tout individu diploïde n'en possède que deux : un allèle sur un chromosome et l'autre sur le chromosome homologue, à la même position appelée locus. L'ensemble des gènes d'un individu constitue son génotype ; le phénotype est l'ensemble des caractères apparents ou visibles de l'individu, déterminés par son génotype.\nUn individu est homozygote si les allèles sont identiques, hétérozygote s'ils sont différents ; dans ce cas, un seul allèle peut s'exprimer, il est dominant, l'autre est récessif (dominance complète), ou bien aucun ne domine l'autre (dominance intermédiaire, semi-dominance ou codominance).\nPour la drépanocytose, les individus sains sont homozygotes A/A de phénotype [A] ; les malades sont homozygotes S/S de phénotype [S] ; les personnes apparemment saines ont les deux hémoglobines A et S en quantités presque égales : hétérozygotes A/S de phénotype [AS], les deux allèles s'expriment.",
      "keyRule": "Gène, allèle, locus, génotype, phénotype : la drépanocytose montre la codominance, avec le phénotype [AS] des hétérozygotes transmetteurs.",
      "formulas": [],
      "workedExample": {
        "title": "Associer chaque définition à sa notion (activité d'application)",
        "statement": "Associe : une des formes possibles d'un gène ; l'emplacement d'un gène sur un chromosome ; l'expression d'un gène ; l'unité de l'hérédité qui contrôle un caractère, aux notions allèle, locus, phénotype et gène.",
        "methodSteps": [
          "Une des formes possibles d'un gène : l'allèle.",
          "L'emplacement d'un gène sur un chromosome : le locus.",
          "L'expression d'un gène : le phénotype.",
          "L'unité de l'hérédité qui contrôle un caractère : le gène."
        ],
        "conclusion": "Corrigé de l'activité : gène 4, phénotype 3, locus 2, allèle 1."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le gène",
          "stepTheme": "Le gène",
          "stepBadge": "Le gène",
          "paragraphText": "• Gène : portion d'ADN localisée sur un chromosome, unité de l'hérédité qui contrôle un caractère.\nL'exercice 2 de consolidation le confirme : le gène est l'unité d'hérédité portée par un chromosome ou une portion de la molécule d'ADN.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p04_q1",
            "type": "mcq",
            "prompt": "Le gène est défini comme :",
            "options": [
              "L'ensemble des caractères visibles",
              "Une portion d'ADN localisée sur un chromosome, unité de l'hérédité",
              "Une forme possible d'un allèle",
              "La position d'un allèle uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Définitions de la partie II et exercice 2 (affirmation A vraie)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'allèle et le locus",
          "stepTheme": "L'allèle et le locus",
          "stepBadge": "L'allèle et le locus",
          "paragraphText": "• Allèle : une des formes possibles d'un gène.\n• Locus : la position d'un allèle, l'emplacement d'un gène sur un chromosome, le même sur les deux chromosomes homologues.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p04_q2",
            "type": "mcq",
            "prompt": "L'emplacement d'un gène sur un chromosome s'appelle :",
            "options": [
              "Le génotype",
              "Le phénotype",
              "L'allèle",
              "Le locus"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Définitions de la partie II ; corrigé de l'activité (locus : définition 2)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Génotype et phénotype",
          "stepTheme": "Génotype et phénotype",
          "stepBadge": "Génotype et phénotype",
          "paragraphText": "L'ensemble des gènes d'un individu constitue son génotype.\nLe phénotype est l'ensemble des caractères apparents ou visibles de l'individu, déterminés par son génotype.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p04_q3",
            "type": "mcq",
            "prompt": "Le phénotype est :",
            "options": [
              "L'ensemble des gènes d'un individu",
              "Une portion d'ADN",
              "L'ensemble des caractères apparents ou visibles de l'individu",
              "La position d'un gène"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Définitions de la partie II."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Homozygote et hétérozygote",
          "stepTheme": "Homozygote et hétérozygote",
          "stepBadge": "Homozygote et hétérozygote",
          "paragraphText": "Un individu est homozygote si ses deux allèles sont identiques.\nIl est hétérozygote si les allèles sont différents ; affirmer qu'un homozygote a deux allèles différents est donc faux (exercice 2, affirmation I).",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p04_q4",
            "type": "mcq",
            "prompt": "Un individu hétérozygote est un individu dont :",
            "options": [
              "Les deux allèles sont différents",
              "Les deux allèles sont identiques",
              "Le génotype est invisible",
              "Les chromosomes sont absents"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Définitions de la partie II et exercice 2 (affirmation I fausse)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Dominance complète et codominance",
          "stepTheme": "Dominance complète et codominance",
          "stepBadge": "Dominance complète et codominance",
          "paragraphText": "En dominance complète, un seul allèle s'exprime chez l'hétérozygote : il est dominant, l'autre est récessif.\nQuand un allèle ne domine pas l'autre, on parle de dominance intermédiaire, de semi-dominance ou de codominance.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p04_q5",
            "type": "mcq",
            "prompt": "On parle de codominance lorsque :",
            "options": [
              "Un allèle masque totalement l'autre",
              "L'individu est homozygote",
              "Le gène est porté par Y",
              "Un allèle ne domine pas l'autre et les deux peuvent s'exprimer"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Définitions de la partie II."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les hétérozygotes AS de la drépanocytose",
          "stepTheme": "Les hétérozygotes AS de la drépanocytose",
          "stepBadge": "Les hétérozygotes AS de la drépanocytose",
          "paragraphText": "Les individus apparemment sains ont les deux types d'hémoglobine A et S en quantités presque égales.\nIls sont hétérozygotes de génotype A/S et de phénotype [AS] : les deux allèles s'expriment, mais ces personnes transmettent la maladie.",
          "exercise": {
            "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p04_q6",
            "type": "mcq",
            "prompt": "Les personnes de phénotype [AS] pour la drépanocytose sont :",
            "options": [
              "Homozygotes S/S malades",
              "Hétérozygotes A/S, apparemment saines mais transmettant la maladie",
              "Homozygotes A/A sans aucun allèle S",
              "Des individus sans hémoglobine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Situation d'évaluation sur la drépanocytose."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p04_q1",
          "type": "mcq",
          "prompt": "Le gène est défini comme :",
          "options": [
            "L'ensemble des caractères visibles",
            "Une portion d'ADN localisée sur un chromosome, unité de l'hérédité",
            "Une forme possible d'un allèle",
            "La position d'un allèle uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Définitions de la partie II et exercice 2 (affirmation A vraie)."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p04_q2",
          "type": "mcq",
          "prompt": "L'emplacement d'un gène sur un chromosome s'appelle :",
          "options": [
            "Le génotype",
            "Le phénotype",
            "L'allèle",
            "Le locus"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Définitions de la partie II ; corrigé de l'activité (locus : définition 2)."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p04_q3",
          "type": "mcq",
          "prompt": "Le phénotype est :",
          "options": [
            "L'ensemble des gènes d'un individu",
            "Une portion d'ADN",
            "L'ensemble des caractères apparents ou visibles de l'individu",
            "La position d'un gène"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Définitions de la partie II."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p04_q4",
          "type": "mcq",
          "prompt": "Un individu hétérozygote est un individu dont :",
          "options": [
            "Les deux allèles sont différents",
            "Les deux allèles sont identiques",
            "Le génotype est invisible",
            "Les chromosomes sont absents"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Définitions de la partie II et exercice 2 (affirmation I fausse)."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p04_q5",
          "type": "mcq",
          "prompt": "On parle de codominance lorsque :",
          "options": [
            "Un allèle masque totalement l'autre",
            "L'individu est homozygote",
            "Le gène est porté par Y",
            "Un allèle ne domine pas l'autre et les deux peuvent s'exprimer"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Définitions de la partie II."
        },
        {
          "id": "premiere_a1_svt_l06_transmission_caractere_autosomes_p04_q6",
          "type": "mcq",
          "prompt": "Les personnes de phénotype [AS] pour la drépanocytose sont :",
          "options": [
            "Homozygotes S/S malades",
            "Hétérozygotes A/S, apparemment saines mais transmettant la maladie",
            "Homozygotes A/A sans aucun allèle S",
            "Des individus sans hémoglobine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Situation d'évaluation sur la drépanocytose."
        }
      ]
    }
  ]
};
