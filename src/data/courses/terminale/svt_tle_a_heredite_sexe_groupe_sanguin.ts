import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 5 : L'hérédité du sexe et du groupe sanguin chez l'Homme » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1757
export const SVT_TLE_A_L05_HEREDITE_SEXE_GROUPE_SANGUIN: CurriculumChapter = {
  "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin",
  "subjectId": "svt",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2"
  ],
  "order": 5,
  "title": "Leçon 5 : L'hérédité du sexe et du groupe sanguin chez l'Homme",
  "summary": "Les groupes sanguins A, B, AB et O sont déterminés par un gène autosomal à trois allèles transmis par les deux parents, tandis que le sexe de l'enfant est déterminé par le spermatozoïde du père, porteur du chromosome X ou du chromosome Y.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1757",
  "points": [
    {
      "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p01",
      "order": 1,
      "title": "L'enquête familiale et les quatre groupes sanguins",
      "summary": "Lire un arbre généalogique du système ABO et constater la diversité des groupes dans une famille.",
      "conceptExplanation": "L'enquête consiste à déterminer le groupe sanguin des membres d'une famille et à établir un arbre généalogique afin d'étudier la transmission des groupes sanguins au sein de cette famille.\nDans un arbre généalogique, les ronds représentent les femmes, les carrés représentent les hommes, les individus reliés horizontalement forment un couple et les individus placés au-dessous d'eux sont leurs enfants ou descendants.\nDans la famille étudiée, on a 4 groupes sanguins : groupe A, groupe B, groupe AB et groupe O. Les parents sont de groupes A et B. Ils donnent naissance à des enfants des groupes AB, O, A et B.\nLa fille II4 et son père ont le même groupe sanguin ; le garçon II3 a le même groupe sanguin que sa mère ; les enfants II1 et II2 ont des groupes sanguins différents de ceux des parents.",
      "keyRule": "Un couple A et B peut avoir des enfants A, B, AB et O : l'arbre généalogique le montre génération par génération.",
      "formulas": [],
      "workedExample": {
        "title": "La famille de l'exercice 1 : mère A, père B",
        "statement": "Une mère de groupe A et un père de groupe B ont une fille AB, un garçon B et deux filles O. Relève les groupes présents dans cette famille.",
        "methodSteps": [
          "Les parents apportent les groupes A (mère) et B (père).",
          "La fille aînée est du groupe AB et le garçon du groupe B.",
          "Les deux autres sœurs sont du groupe O.",
          "La famille présente donc les quatre groupes : A, B, AB et O."
        ],
        "conclusion": "Corrigé de l'exercice 1 : les groupes sanguins révélés sont O, AB, A et B."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Lire un arbre généalogique",
          "stepTheme": "Lire un arbre généalogique",
          "stepBadge": "Lire un arbre généalogique",
          "paragraphText": "• Arbre généalogique : schéma où les ronds représentent les femmes et les carrés représentent les hommes.\nLes individus reliés horizontalement forment un couple, et ceux placés au-dessous sont leurs enfants ou descendants.",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p01_q1",
            "type": "mcq",
            "prompt": "Dans un arbre généalogique, les femmes sont représentées par :",
            "options": [
              "Des carrés",
              "Des ronds",
              "Des triangles",
              "Des lettres uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la convention rappelée sous le résultat de l'enquête de la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Quatre groupes dans une famille",
          "stepTheme": "Quatre groupes dans une famille",
          "stepBadge": "Quatre groupes dans une famille",
          "paragraphText": "La famille étudiée présente les 4 groupes sanguins du système ABO.\nCe sont les groupes A, B, AB et O, répartis entre parents et enfants.",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p01_q2",
            "type": "mcq",
            "prompt": "Les quatre groupes sanguins du système ABO sont :",
            "options": [
              "A, B, C et O",
              "A, B, AB et O",
              "A, AB, BA et O",
              "Rhésus positif et négatif uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'analyse de l'enquête liste : groupe A, groupe B, groupe AB, groupe O."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Des enfants différents des parents",
          "stepTheme": "Des enfants différents des parents",
          "stepBadge": "Des enfants différents des parents",
          "paragraphText": "Les parents de la famille étudiée sont de groupes A et B.\nParmi leurs enfants, II1 et II2 ont des groupes sanguins différents de ceux des deux parents, tandis que II4 partage celui du père et II3 celui de la mère.",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p01_q3",
            "type": "mcq",
            "prompt": "Dans la famille étudiée, les parents sont de groupes :",
            "options": [
              "O et AB",
              "A et B",
              "A et A",
              "B et O"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'analyse précise : les parents sont de groupes A et B."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Repérer qui ressemble à qui",
          "stepTheme": "Repérer qui ressemble à qui",
          "stepBadge": "Repérer qui ressemble à qui",
          "paragraphText": "Méthode d'analyse de l'arbre : comparer le groupe de chaque enfant à ceux des parents.\nOn note les enfants de même groupe qu'un parent (II4 comme le père, II3 comme la mère) et ceux de groupe différent (II1 et II2).",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p01_q4",
            "type": "mcq",
            "prompt": "Le garçon II3 a le même groupe sanguin que :",
            "options": [
              "Son père",
              "Sa sœur II4",
              "Sa mère",
              "Aucun membre de la famille"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'analyse indique que le garçon II3 a le même groupe sanguin que sa mère."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Des enfants O chez des parents A et B",
          "stepTheme": "Des enfants O chez des parents A et B",
          "stepBadge": "Des enfants O chez des parents A et B",
          "paragraphText": "Piège : croire impossible qu'un couple A et B ait des enfants de groupe O.\nC'est pourtant ce que montre l'arbre : des enfants II1 et II2 ont des groupes différents de ceux des parents, dont le groupe O.",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p01_q5",
            "type": "mcq",
            "prompt": "Un couple de groupes A et B peut-il avoir un enfant de groupe O, selon la leçon ?",
            "options": [
              "Non, jamais",
              "Oui, l'arbre généalogique étudié en présente",
              "Seulement si un parent est O",
              "Seulement pour les filles"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'enquête familiale et l'exercice 1 montrent des enfants O nés de parents A et B."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La fille II4 comme son père",
          "stepTheme": "La fille II4 comme son père",
          "stepBadge": "La fille II4 comme son père",
          "paragraphText": "La fille II4 et son père ont le même groupe sanguin dans la famille étudiée.\nPour la leçon, ce fait signifie que ce caractère est transmis par un chromosome autosomal, porté indifféremment par les deux sexes.",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p01_q6",
            "type": "mcq",
            "prompt": "Que signifie, pour la leçon, le fait que la fille II4 ait le même groupe que son père ?",
            "options": [
              "Que le caractère est porté par le chromosome Y",
              "Que ce caractère est transmis par un chromosome autosomal",
              "Que le groupe sanguin ne se transmet pas",
              "Que seuls les pères transmettent les groupes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la première phrase de l'interprétation de l'enquête."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p01_q1",
          "type": "mcq",
          "prompt": "Dans un arbre généalogique, les femmes sont représentées par :",
          "options": [
            "Des carrés",
            "Des ronds",
            "Des triangles",
            "Des lettres uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la convention rappelée sous le résultat de l'enquête de la leçon."
        },
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p01_q2",
          "type": "mcq",
          "prompt": "Les quatre groupes sanguins du système ABO sont :",
          "options": [
            "A, B, C et O",
            "A, B, AB et O",
            "A, AB, BA et O",
            "Rhésus positif et négatif uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'analyse de l'enquête liste : groupe A, groupe B, groupe AB, groupe O."
        },
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p01_q3",
          "type": "mcq",
          "prompt": "Dans la famille étudiée, les parents sont de groupes :",
          "options": [
            "O et AB",
            "A et B",
            "A et A",
            "B et O"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'analyse précise : les parents sont de groupes A et B."
        },
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p01_q4",
          "type": "mcq",
          "prompt": "Le garçon II3 a le même groupe sanguin que :",
          "options": [
            "Son père",
            "Sa sœur II4",
            "Sa mère",
            "Aucun membre de la famille"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'analyse indique que le garçon II3 a le même groupe sanguin que sa mère."
        },
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p01_q5",
          "type": "mcq",
          "prompt": "Un couple de groupes A et B peut-il avoir un enfant de groupe O, selon la leçon ?",
          "options": [
            "Non, jamais",
            "Oui, l'arbre généalogique étudié en présente",
            "Seulement si un parent est O",
            "Seulement pour les filles"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'enquête familiale et l'exercice 1 montrent des enfants O nés de parents A et B."
        },
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p01_q6",
          "type": "mcq",
          "prompt": "Que signifie, pour la leçon, le fait que la fille II4 ait le même groupe que son père ?",
          "options": [
            "Que le caractère est porté par le chromosome Y",
            "Que ce caractère est transmis par un chromosome autosomal",
            "Que le groupe sanguin ne se transmet pas",
            "Que seuls les pères transmettent les groupes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la première phrase de l'interprétation de l'enquête."
        }
      ]
    },
    {
      "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p02",
      "order": 2,
      "title": "Récessivité de O et codominance de A et B",
      "summary": "Expliquer l'apparition des phénotypes O et AB dans la descendance d'un couple A et B.",
      "conceptExplanation": "L'apparition du phénotype O dans la descendance montre que l'allèle O est présent chez les parents, mais qu'il ne s'exprime pas devant les allèles A et B : il est dit allèle récessif, ou masqué.\nL'apparition du phénotype AB dans la descendance montre que les allèles A et B s'expriment simultanément : l'un ne domine pas l'autre. Ce sont des allèles codominants.\nL'enfant du groupe AB est forcément hétérozygote : il reçoit du père l'allèle B et de la mère l'allèle A, dans l'exemple de la leçon.\nL'activité d'application confirme : dans le système ABO, un individu de groupe sanguin AB est hétérozygote, et un gène polyallélique est un gène qui a plusieurs formes alléliques.",
      "keyRule": "O est récessif et masqué par A et B ; A et B sont codominants et s'expriment ensemble dans le groupe AB, toujours hétérozygote.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer les groupes des enfants (exercice 1, question 3)",
        "statement": "Explique l'apparition des groupes AB, B et O chez les enfants d'une mère A et d'un père B.",
        "methodSteps": [
          "La fille du groupe AB a reçu l'allèle A de sa mère et l'allèle B de son père : les deux s'expriment, ils sont codominants.",
          "Le garçon du groupe B a reçu l'allèle B de son père et l'allèle O de sa mère : O est masqué par B.",
          "Les filles du groupe O ont reçu l'allèle O de chaque parent : seul cas où l'allèle récessif s'exprime."
        ],
        "conclusion": "Corrigé de l'exercice 1 : chaque groupe d'enfant s'explique par un allèle reçu de chaque parent."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un allèle récessif",
          "stepTheme": "Un allèle récessif",
          "stepBadge": "Un allèle récessif",
          "paragraphText": "• Allèle récessif : allèle présent chez un individu mais qui ne s'exprime pas devant un autre allèle.\nDans le système ABO, l'allèle O est récessif, ou masqué, devant les allèles A et B.",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p02_q1",
            "type": "mcq",
            "prompt": "L'allèle O est dit récessif parce qu'il :",
            "options": [
              "S'exprime toujours",
              "Ne s'exprime pas devant les allèles A et B",
              "A disparu chez les parents",
              "Domine l'allèle A"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'interprétation tirée de l'apparition du phénotype O dans la descendance."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Des allèles codominants",
          "stepTheme": "Des allèles codominants",
          "stepBadge": "Des allèles codominants",
          "paragraphText": "• Allèles codominants : allèles qui s'expriment simultanément, sans que l'un domine l'autre.\nDans le système ABO, les allèles A et B sont codominants, d'où le phénotype AB.",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p02_q2",
            "type": "mcq",
            "prompt": "Les allèles A et B sont codominants parce qu'ils :",
            "options": [
              "Se masquent l'un l'autre",
              "S'expriment simultanément, sans domination de l'un sur l'autre",
              "Sont toujours récessifs",
              "Ne se transmettent jamais ensemble"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'apparition du phénotype AB montre cette expression simultanée."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'individu AB est hétérozygote",
          "stepTheme": "L'individu AB est hétérozygote",
          "stepBadge": "L'individu AB est hétérozygote",
          "paragraphText": "L'enfant du groupe AB est forcément hétérozygote.\nIl porte deux allèles différents, l'un reçu de son père et l'autre de sa mère.",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p02_q3",
            "type": "mcq",
            "prompt": "Un individu de groupe sanguin AB est :",
            "options": [
              "Homozygote AA",
              "Homozygote OO",
              "Forcément hétérozygote",
              "Sans allèle du système ABO"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Affirmation 4 de l'activité d'application, retenue juste dans le corrigé (affirmations justes : 2, 3 et 4)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "O n'est pas dominant",
          "stepTheme": "O n'est pas dominant",
          "stepBadge": "O n'est pas dominant",
          "paragraphText": "Piège de l'activité d'application : affirmer que, dans le système ABO, l'allèle O est un allèle dominant est faux.\nDe même, un phénotype récessif peut apparaître dans la descendance, contrairement à une autre affirmation proposée.",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p02_q4",
            "type": "mcq",
            "prompt": "Selon le corrigé de l'activité d'application, les affirmations justes sont :",
            "options": [
              "1, 2 et 5",
              "2, 3 et 4",
              "1, 3 et 5",
              "Toutes les affirmations"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Corrigé de la leçon : affirmations justes 2 (A et B codominants dans l'esprit de l'exercice), 3 (gène polyallélique) et 4 (AB hétérozygote)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les filles O de l'exercice 1",
          "stepTheme": "Les filles O de l'exercice 1",
          "stepBadge": "Les filles O de l'exercice 1",
          "paragraphText": "Les deux sœurs de groupe O, dans l'exercice 1, illustrent l'expression de l'allèle récessif.\nElles ont reçu l'allèle O de chaque parent, bien que ni la mère (A) ni le père (B) ne soit de groupe O.",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p02_q5",
            "type": "mcq",
            "prompt": "Les filles de groupe O de l'exercice 1 ont reçu :",
            "options": [
              "L'allèle O d'un seul parent",
              "L'allèle A des deux parents",
              "L'allèle O de chaque parent",
              "L'allèle B de chaque parent"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Corrigé de l'exercice 1 : elles ont reçu l'allèle O de chaque parent."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Expliquer un phénotype par les allèles reçus",
          "stepTheme": "Expliquer un phénotype par les allèles reçus",
          "stepBadge": "Expliquer un phénotype par les allèles reçus",
          "paragraphText": "Méthode : pour chaque enfant, nommer l'allèle reçu du père et celui reçu de la mère.\nOn applique ensuite les règles : O masqué par A ou B, A et B exprimés ensemble en AB, O exprimé seulement en double exemplaire.",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p02_q6",
            "type": "mcq",
            "prompt": "Pour expliquer le groupe d'un enfant, il faut d'abord :",
            "options": [
              "Regarder uniquement son sexe",
              "Identifier l'allèle reçu de chaque parent",
              "Ignorer le groupe de la mère",
              "Supposer qu'il copie toujours le père"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la démarche suivie dans tout le corrigé de l'exercice 1."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p02_q1",
          "type": "mcq",
          "prompt": "L'allèle O est dit récessif parce qu'il :",
          "options": [
            "S'exprime toujours",
            "Ne s'exprime pas devant les allèles A et B",
            "A disparu chez les parents",
            "Domine l'allèle A"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'interprétation tirée de l'apparition du phénotype O dans la descendance."
        },
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p02_q2",
          "type": "mcq",
          "prompt": "Les allèles A et B sont codominants parce qu'ils :",
          "options": [
            "Se masquent l'un l'autre",
            "S'expriment simultanément, sans domination de l'un sur l'autre",
            "Sont toujours récessifs",
            "Ne se transmettent jamais ensemble"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'apparition du phénotype AB montre cette expression simultanée."
        },
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p02_q3",
          "type": "mcq",
          "prompt": "Un individu de groupe sanguin AB est :",
          "options": [
            "Homozygote AA",
            "Homozygote OO",
            "Forcément hétérozygote",
            "Sans allèle du système ABO"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Affirmation 4 de l'activité d'application, retenue juste dans le corrigé (affirmations justes : 2, 3 et 4)."
        },
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p02_q4",
          "type": "mcq",
          "prompt": "Selon le corrigé de l'activité d'application, les affirmations justes sont :",
          "options": [
            "1, 2 et 5",
            "2, 3 et 4",
            "1, 3 et 5",
            "Toutes les affirmations"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Corrigé de la leçon : affirmations justes 2 (A et B codominants dans l'esprit de l'exercice), 3 (gène polyallélique) et 4 (AB hétérozygote)."
        },
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p02_q5",
          "type": "mcq",
          "prompt": "Les filles de groupe O de l'exercice 1 ont reçu :",
          "options": [
            "L'allèle O d'un seul parent",
            "L'allèle A des deux parents",
            "L'allèle O de chaque parent",
            "L'allèle B de chaque parent"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Corrigé de l'exercice 1 : elles ont reçu l'allèle O de chaque parent."
        },
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p02_q6",
          "type": "mcq",
          "prompt": "Pour expliquer le groupe d'un enfant, il faut d'abord :",
          "options": [
            "Regarder uniquement son sexe",
            "Identifier l'allèle reçu de chaque parent",
            "Ignorer le groupe de la mère",
            "Supposer qu'il copie toujours le père"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la démarche suivie dans tout le corrigé de l'exercice 1."
        }
      ]
    },
    {
      "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p03",
      "order": 3,
      "title": "Un gène autosomal polyallélique et ses symboles",
      "summary": "Retenir que le gène du système ABO est porté par un autosome, avec trois allèles et quatre phénotypes notés entre crochets.",
      "conceptExplanation": "Le gène responsable du système ABO est polyallélique, car il est constitué de 3 allèles différents : A, B et O.\nLa transmission des groupes sanguins chez l'Homme se fait par les deux parents, grâce à un gène porté par un autosome, c'est-à-dire un chromosome non sexuel.\nChoix des symboles de la leçon : le groupe A a pour phénotype [A], le groupe B a pour phénotype [B], le groupe AB a pour phénotype [AB] et le groupe O a pour phénotype [O].\nConclusion générale : les groupes sanguins A, B et O sont déterminés par un gène autosomal à trois allèles A, B et O (la conclusion cite A, B, O ; le groupe AB résulte de la combinaison des allèles A et B). La connaissance du groupe sanguin permet de transfuser du sang à un individu sans risque de danger et la reconnaissance de la paternité, mais la recherche de parenté a des limites, car des parents de groupe A ou B, ou l'un A et l'autre B, ont parfois des enfants de groupes différents.",
      "keyRule": "Un seul gène, porté par un autosome, trois allèles (A, B, O), quatre phénotypes notés [A], [B], [AB] et [O].",
      "formulas": [],
      "workedExample": {
        "title": "Vérification chromosomique du système ABO (fin de la partie I)",
        "statement": "Que vérifie la fin de la première partie sur le gène du groupe sanguin ?",
        "methodSteps": [
          "Le caractère se transmet indifféremment par le père et par la mère, comme le montrent II4 (groupe du père) et II3 (groupe de la mère).",
          "Le gène n'est donc pas porté par un chromosome sexuel, mais par un autosome.",
          "Ce gène possède trois allèles différents : il est polyallélique."
        ],
        "conclusion": "Conclusion de la partie I : la transmission se fait par les deux parents grâce à un gène porté par un autosome."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un gène polyallélique",
          "stepTheme": "Un gène polyallélique",
          "stepBadge": "Un gène polyallélique",
          "paragraphText": "• Gène polyallélique : gène qui a plusieurs formes alléliques.\nLe gène du système ABO en possède trois : A, B et O.",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p03_q1",
            "type": "mcq",
            "prompt": "Le gène du système ABO est polyallélique car il est constitué de :",
            "options": [
              "Un seul allèle",
              "2 allèles identiques",
              "3 allèles différents",
              "46 chromosomes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ce sont les trois allèles A, B et O, affirmation 3 de l'activité d'application."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Un autosome",
          "stepTheme": "Un autosome",
          "stepBadge": "Un autosome",
          "paragraphText": "La transmission des groupes sanguins se fait grâce à un gène porté par un autosome.\nUn autosome s'oppose ici aux chromosomes sexuels X et Y, étudiés dans la seconde partie de la leçon.",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p03_q2",
            "type": "mcq",
            "prompt": "Le gène du système ABO est porté par :",
            "options": [
              "Le chromosome X",
              "Le chromosome Y",
              "Un autosome",
              "Aucun chromosome"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Conclusion de la partie I de la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La notation des phénotypes",
          "stepTheme": "La notation des phénotypes",
          "stepBadge": "La notation des phénotypes",
          "paragraphText": "La leçon note les phénotypes entre crochets.\nLe groupe AB a ainsi pour phénotype [AB], à distinguer du génotype qui décrit les allèles portés.",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p03_q3",
            "type": "mcq",
            "prompt": "Le phénotype du groupe AB se note :",
            "options": [
              "(AB) sans crochets, selon la leçon",
              "[AB]",
              "AB en exposant",
              "Uniquement par la lettre O"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Choix des symboles de la leçon : [A], [B], [AB] et [O]."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Une transmission par les deux parents",
          "stepTheme": "Une transmission par les deux parents",
          "stepBadge": "Une transmission par les deux parents",
          "paragraphText": "Chaque enfant reçoit un allèle du système ABO de son père et un de sa mère.\nC'est pourquoi un groupe peut venir du père (cas de II4) ou de la mère (cas de II3).",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p03_q4",
            "type": "mcq",
            "prompt": "La transmission des groupes sanguins se fait :",
            "options": [
              "Par le père uniquement",
              "Par la mère uniquement",
              "Par les deux parents",
              "Par aucun des parents"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Conclusion de la partie I : transmission par les deux parents."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Les limites de la recherche de parenté",
          "stepTheme": "Les limites de la recherche de parenté",
          "stepBadge": "Les limites de la recherche de parenté",
          "paragraphText": "Piège : croire que le groupe sanguin prouve toujours une filiation de façon absolue.\nLa leçon prévient que la recherche de parenté a des limites, car des parents A ou B ont parfois des enfants de groupes différents des leurs.",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p03_q5",
            "type": "mcq",
            "prompt": "Selon la conclusion générale, la recherche de parenté par les groupes sanguins :",
            "options": [
              "Est toujours définitive",
              "Permet la reconnaissance de la paternité mais a des limites",
              "Est impossible dans tous les cas",
              "Ne sert qu'aux transfusions"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La conclusion générale cite l'utilité (transfusion sans danger, reconnaissance de paternité) et aussitôt ses limites."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Transfuser sans risque de danger",
          "stepTheme": "Transfuser sans risque de danger",
          "stepBadge": "Transfuser sans risque de danger",
          "paragraphText": "La connaissance du groupe sanguin permet de transfuser du sang à un individu sans risque de danger.\nC'est l'une des deux applications pratiques citées dans la conclusion générale.",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p03_q6",
            "type": "mcq",
            "prompt": "La connaissance du groupe sanguin permet notamment :",
            "options": [
              "De choisir le sexe d'un enfant",
              "De transfuser du sang sans risque de danger",
              "De guérir toutes les maladies",
              "De supprimer les allèles récessifs"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Première application citée dans la conclusion générale de la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p03_q1",
          "type": "mcq",
          "prompt": "Le gène du système ABO est polyallélique car il est constitué de :",
          "options": [
            "Un seul allèle",
            "2 allèles identiques",
            "3 allèles différents",
            "46 chromosomes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ce sont les trois allèles A, B et O, affirmation 3 de l'activité d'application."
        },
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p03_q2",
          "type": "mcq",
          "prompt": "Le gène du système ABO est porté par :",
          "options": [
            "Le chromosome X",
            "Le chromosome Y",
            "Un autosome",
            "Aucun chromosome"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Conclusion de la partie I de la leçon."
        },
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p03_q3",
          "type": "mcq",
          "prompt": "Le phénotype du groupe AB se note :",
          "options": [
            "(AB) sans crochets, selon la leçon",
            "[AB]",
            "AB en exposant",
            "Uniquement par la lettre O"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Choix des symboles de la leçon : [A], [B], [AB] et [O]."
        },
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p03_q4",
          "type": "mcq",
          "prompt": "La transmission des groupes sanguins se fait :",
          "options": [
            "Par le père uniquement",
            "Par la mère uniquement",
            "Par les deux parents",
            "Par aucun des parents"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Conclusion de la partie I : transmission par les deux parents."
        },
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p03_q5",
          "type": "mcq",
          "prompt": "Selon la conclusion générale, la recherche de parenté par les groupes sanguins :",
          "options": [
            "Est toujours définitive",
            "Permet la reconnaissance de la paternité mais a des limites",
            "Est impossible dans tous les cas",
            "Ne sert qu'aux transfusions"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La conclusion générale cite l'utilité (transfusion sans danger, reconnaissance de paternité) et aussitôt ses limites."
        },
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p03_q6",
          "type": "mcq",
          "prompt": "La connaissance du groupe sanguin permet notamment :",
          "options": [
            "De choisir le sexe d'un enfant",
            "De transfuser du sang sans risque de danger",
            "De guérir toutes les maladies",
            "De supprimer les allèles récessifs"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Première application citée dans la conclusion générale de la leçon."
        }
      ]
    },
    {
      "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p04",
      "order": 4,
      "title": "Les chromosomes sexuels XX et XY",
      "summary": "Décrire les chromosomes sexuels de la femme et de l'Homme et leur segment homologue.",
      "conceptExplanation": "Le document 1 est relatif aux chromosomes sexuels.\nLa femme possède deux chromosomes sexuels identiques, X et X. Chez l'Homme, au contraire, les deux chromosomes sexuels sont différents : X et Y.\nLes chromosomes X et Y présentent un segment homologue, mais une partie du chromosome X est inexistante sur le chromosome Y, très petit.\nC'est cette différence entre les deux parents qui fonde le déterminisme du sexe étudié ensuite.",
      "keyRule": "Femme XX avec deux chromosomes identiques, Homme XY avec deux chromosomes différents : toute la suite découle de cette différence.",
      "formulas": [],
      "workedExample": {
        "title": "Observer les chromosomes sexuels (document 1)",
        "statement": "Que montre le document 1 sur les chromosomes sexuels des deux parents ?",
        "methodSteps": [
          "Chez la femme, les deux chromosomes sexuels sont identiques : X et X.",
          "Chez l'Homme, les deux chromosomes sexuels sont différents : X et Y.",
          "X et Y ont un segment homologue, mais une partie de X est inexistante sur le petit chromosome Y."
        ],
        "conclusion": "Résultat du document 1 : XX chez la femme, XY chez l'Homme."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les chromosomes sexuels de la femme",
          "stepTheme": "Les chromosomes sexuels de la femme",
          "stepBadge": "Les chromosomes sexuels de la femme",
          "paragraphText": "La femme possède deux chromosomes sexuels identiques.\nSa formule est XX, ce qui explique qu'elle ne produise qu'un seul type d'ovule.",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p04_q1",
            "type": "mcq",
            "prompt": "Les chromosomes sexuels de la femme sont :",
            "options": [
              "X et Y",
              "X et X, identiques",
              "Y et Y",
              "Un seul chromosome X"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Résultat du document 1 pour la femme."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les chromosomes sexuels de l'Homme",
          "stepTheme": "Les chromosomes sexuels de l'Homme",
          "stepBadge": "Les chromosomes sexuels de l'Homme",
          "paragraphText": "L'Homme possède deux chromosomes sexuels non identiques.\nSa formule est XY : un chromosome X et un chromosome Y, beaucoup plus petit.",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p04_q2",
            "type": "mcq",
            "prompt": "Les chromosomes sexuels de l'Homme sont :",
            "options": [
              "X et X",
              "Y et Y",
              "X et Y, non identiques",
              "Uniquement Y"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Résultat du document 1 pour l'Homme."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le segment homologue de X et Y",
          "stepTheme": "Le segment homologue de X et Y",
          "stepBadge": "Le segment homologue de X et Y",
          "paragraphText": "Les chromosomes X et Y présentent un segment homologue, commun aux deux.\nMais une partie du chromosome X est inexistante sur le chromosome Y, qui est très petit.",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p04_q3",
            "type": "mcq",
            "prompt": "Entre X et Y, la leçon précise que :",
            "options": [
              "Ils sont totalement identiques",
              "Ils présentent un segment homologue, mais une partie de X est inexistante sur Y",
              "Y est plus grand que X",
              "Ils n'ont aucun point commun"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'analyse du document 1."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Y n'est pas un second X",
          "stepTheme": "Y n'est pas un second X",
          "stepBadge": "Y n'est pas un second X",
          "paragraphText": "Piège : traiter XY comme deux chromosomes identiques parce qu'ils forment une paire.\nLa leçon insiste : chez l'Homme, les deux chromosomes sexuels sont différents, X et Y, alors qu'ils sont identiques chez la femme.",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p04_q4",
            "type": "mcq",
            "prompt": "Chez l'Homme, les deux chromosomes sexuels sont :",
            "options": [
              "Identiques",
              "Différents : X et Y",
              "Tous deux très grands",
              "Absents chez le garçon"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Analyse du document 1 : différents chez l'Homme, identiques chez la femme."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le garçon XY et la fille XX",
          "stepTheme": "Le garçon XY et la fille XX",
          "stepBadge": "Le garçon XY et la fille XX",
          "paragraphText": "Un enfant qui reçoit X de sa mère et Y de son père est un garçon (XY).\nUn enfant qui reçoit X de sa mère et X de son père est une fille (XX) : les formules XX et XY servent tout au long de la partie II.",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p04_q5",
            "type": "mcq",
            "prompt": "La formule chromosomique d'un garçon est :",
            "options": [
              "XX",
              "XY",
              "YY",
              "XO uniquement selon la leçon"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation de la partie II : ovule X fécondé par un spermatozoïde Y donne un garçon (XY)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Comparer les deux parents sur le document",
          "stepTheme": "Comparer les deux parents sur le document",
          "stepBadge": "Comparer les deux parents sur le document",
          "paragraphText": "Méthode : lire le document 1 parent par parent.\nOn constate d'abord l'identité des deux X de la femme, puis la différence entre le X et le Y de l'Homme, avant de passer aux gamètes du document 2.",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p04_q6",
            "type": "mcq",
            "prompt": "La première différence à relever sur le document 1 est :",
            "options": [
              "La taille des gamètes",
              "L'identité des chromosomes chez la femme contre leur différence chez l'Homme",
              "Le nombre d'enfants par famille",
              "Les groupes sanguins des parents"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'analyse du document 1 dans la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p04_q1",
          "type": "mcq",
          "prompt": "Les chromosomes sexuels de la femme sont :",
          "options": [
            "X et Y",
            "X et X, identiques",
            "Y et Y",
            "Un seul chromosome X"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Résultat du document 1 pour la femme."
        },
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p04_q2",
          "type": "mcq",
          "prompt": "Les chromosomes sexuels de l'Homme sont :",
          "options": [
            "X et X",
            "Y et Y",
            "X et Y, non identiques",
            "Uniquement Y"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Résultat du document 1 pour l'Homme."
        },
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p04_q3",
          "type": "mcq",
          "prompt": "Entre X et Y, la leçon précise que :",
          "options": [
            "Ils sont totalement identiques",
            "Ils présentent un segment homologue, mais une partie de X est inexistante sur Y",
            "Y est plus grand que X",
            "Ils n'ont aucun point commun"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'analyse du document 1."
        },
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p04_q4",
          "type": "mcq",
          "prompt": "Chez l'Homme, les deux chromosomes sexuels sont :",
          "options": [
            "Identiques",
            "Différents : X et Y",
            "Tous deux très grands",
            "Absents chez le garçon"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Analyse du document 1 : différents chez l'Homme, identiques chez la femme."
        },
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p04_q5",
          "type": "mcq",
          "prompt": "La formule chromosomique d'un garçon est :",
          "options": [
            "XX",
            "XY",
            "YY",
            "XO uniquement selon la leçon"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation de la partie II : ovule X fécondé par un spermatozoïde Y donne un garçon (XY)."
        },
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p04_q6",
          "type": "mcq",
          "prompt": "La première différence à relever sur le document 1 est :",
          "options": [
            "La taille des gamètes",
            "L'identité des chromosomes chez la femme contre leur différence chez l'Homme",
            "Le nombre d'enfants par famille",
            "Les groupes sanguins des parents"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'analyse du document 1 dans la leçon."
        }
      ]
    },
    {
      "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p05",
      "order": 5,
      "title": "Les gamètes et l'échiquier de croisement",
      "summary": "Montrer que l'Homme produit deux types de spermatozoïdes, la femme un seul type d'ovule, et que le bilan est de moitié filles, moitié garçons.",
      "conceptExplanation": "Chez le garçon et l'Homme, l'existence de deux chromosomes sexuels (X et Y) conduit, en raison de la méiose, à la production de deux catégories de spermatozoïdes : les uns contenant le chromosome X, les autres contenant le chromosome Y, en proportion égale.\nChez la femme, l'existence de deux chromosomes sexuels identiques (X et X) conduit, en raison de la méiose, à la production d'une seule catégorie d'ovule, portant le chromosome X.\nLe document 2 est un échiquier de croisement : il présente les rencontres possibles des gamètes. On obtient autant de filles que de garçons.\nLa situation d'évaluation confirme le bilan des rencontres : 50 pour cent de filles et 50 pour cent de garçons. L'union des gamètes se fait au hasard, ce qui explique l'égale probabilité des deux sexes dans la population.",
      "keyRule": "Un seul type d'ovule (X) contre deux types de spermatozoïdes (X et Y) en proportion égale : l'échiquier donne moitié filles, moitié garçons.",
      "formulas": [],
      "workedExample": {
        "title": "Exploiter l'échiquier de croisement (situation d'évaluation)",
        "statement": "À partir du document de la situation d'évaluation, relève les types de gamètes de chaque parent et fais le bilan des rencontres.",
        "methodSteps": [
          "Le document est un échiquier de croisement.",
          "L'Homme produit deux types de gamètes : l'un porteur du chromosome X, l'autre porteur du chromosome Y.",
          "La femme produit un seul type d'ovule, porteur du chromosome X.",
          "Le bilan des rencontres est de 50 pour cent de filles et 50 pour cent de garçons."
        ],
        "conclusion": "Corrigé de la situation d'évaluation : deux types de spermatozoïdes, un seul type d'ovule, bilan moitié-moitié."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Deux catégories de spermatozoïdes",
          "stepTheme": "Deux catégories de spermatozoïdes",
          "stepBadge": "Deux catégories de spermatozoïdes",
          "paragraphText": "En raison de la méiose, l'Homme XY produit deux catégories de spermatozoïdes en proportion égale.\nLes uns contiennent le chromosome X, les autres le chromosome Y.",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p05_q1",
            "type": "mcq",
            "prompt": "L'Homme produit :",
            "options": [
              "Un seul type de spermatozoïde",
              "Deux types de spermatozoïdes, X et Y, en proportion égale",
              "Trois types de spermatozoïdes",
              "Uniquement des spermatozoïdes Y"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Résultat du document 2 et corrigé de la situation d'évaluation."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Une seule catégorie d'ovule",
          "stepTheme": "Une seule catégorie d'ovule",
          "stepBadge": "Une seule catégorie d'ovule",
          "paragraphText": "La femme XX ne produit, en raison de la méiose, qu'une seule catégorie d'ovule.\nTous ses ovules portent le chromosome X.",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p05_q2",
            "type": "mcq",
            "prompt": "La femme produit :",
            "options": [
              "Deux types d'ovules, X et Y",
              "Un seul type d'ovule, porteur du chromosome X",
              "Uniquement des ovules sans chromosome sexuel",
              "Des ovules Y chez les mères de garçons"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Résultat du document 2 : une seule catégorie d'ovule chez la femme."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le bilan moitié filles, moitié garçons",
          "stepTheme": "Le bilan moitié filles, moitié garçons",
          "stepBadge": "Le bilan moitié filles, moitié garçons",
          "paragraphText": "L'échiquier de croisement croise un type d'ovule avec deux types de spermatozoïdes équiprobables.\nLe bilan des rencontres est de 50 pour cent de filles et 50 pour cent de garçons.",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p05_q3",
            "type": "mcq",
            "prompt": "Le bilan des rencontres des gamètes est de :",
            "options": [
              "75 pour cent de filles et 25 pour cent de garçons",
              "25 pour cent de filles et 75 pour cent de garçons",
              "50 pour cent de filles et 50 pour cent de garçons",
              "100 pour cent de filles"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Corrigé de la situation d'évaluation, question 3."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le rôle de la méiose",
          "stepTheme": "Le rôle de la méiose",
          "stepBadge": "Le rôle de la méiose",
          "paragraphText": "Méthode : partir des chromosomes sexuels, puis appliquer la méiose pour obtenir les gamètes.\nXX ne peut donner que des ovules X ; XY donne des spermatozoïdes X et des spermatozoïdes Y en proportion égale.",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p05_q4",
            "type": "mcq",
            "prompt": "La production des gamètes différents chez l'Homme s'explique, selon la leçon, par :",
            "options": [
              "La fécondation",
              "La méiose appliquée à ses deux chromosomes sexuels différents",
              "Les groupes sanguins",
              "Le hasard seul sans méiose"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'interprétation répète : en raison de la méiose."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Relier chaque chromosome au bon descendant",
          "stepTheme": "Relier chaque chromosome au bon descendant",
          "stepBadge": "Relier chaque chromosome au bon descendant",
          "paragraphText": "Piège de l'activité d'application : inverser les flèches entre chromosomes du père et descendants.\nLe spermatozoïde X du père donne une fille, le spermatozoïde Y donne un garçon ; la mère transmet toujours un X, à la fille comme au garçon.",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p05_q5",
            "type": "mcq",
            "prompt": "Un spermatozoïde porteur du chromosome Y donne naissance à :",
            "options": [
              "Une fille (XX)",
              "Un garçon (XY)",
              "Un enfant sans sexe déterminé",
              "Uniquement des jumeaux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation de la partie II : ovule X fécondé par un spermatozoïde Y donne un garçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Autant de filles que de garçons",
          "stepTheme": "Autant de filles que de garçons",
          "stepBadge": "Autant de filles que de garçons",
          "paragraphText": "Le résultat du document 2 se résume en une phrase de la leçon.\nOn obtient autant de filles que de garçons à l'issue des rencontres des gamètes.",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p05_q6",
            "type": "mcq",
            "prompt": "Selon le document 2, on obtient :",
            "options": [
              "Plus de filles que de garçons",
              "Plus de garçons que de filles",
              "Autant de filles que de garçons",
              "Uniquement des filles chez les couples XY"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Résultat du document 2, troisième point."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p05_q1",
          "type": "mcq",
          "prompt": "L'Homme produit :",
          "options": [
            "Un seul type de spermatozoïde",
            "Deux types de spermatozoïdes, X et Y, en proportion égale",
            "Trois types de spermatozoïdes",
            "Uniquement des spermatozoïdes Y"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Résultat du document 2 et corrigé de la situation d'évaluation."
        },
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p05_q2",
          "type": "mcq",
          "prompt": "La femme produit :",
          "options": [
            "Deux types d'ovules, X et Y",
            "Un seul type d'ovule, porteur du chromosome X",
            "Uniquement des ovules sans chromosome sexuel",
            "Des ovules Y chez les mères de garçons"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Résultat du document 2 : une seule catégorie d'ovule chez la femme."
        },
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p05_q3",
          "type": "mcq",
          "prompt": "Le bilan des rencontres des gamètes est de :",
          "options": [
            "75 pour cent de filles et 25 pour cent de garçons",
            "25 pour cent de filles et 75 pour cent de garçons",
            "50 pour cent de filles et 50 pour cent de garçons",
            "100 pour cent de filles"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Corrigé de la situation d'évaluation, question 3."
        },
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p05_q4",
          "type": "mcq",
          "prompt": "La production des gamètes différents chez l'Homme s'explique, selon la leçon, par :",
          "options": [
            "La fécondation",
            "La méiose appliquée à ses deux chromosomes sexuels différents",
            "Les groupes sanguins",
            "Le hasard seul sans méiose"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'interprétation répète : en raison de la méiose."
        },
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p05_q5",
          "type": "mcq",
          "prompt": "Un spermatozoïde porteur du chromosome Y donne naissance à :",
          "options": [
            "Une fille (XX)",
            "Un garçon (XY)",
            "Un enfant sans sexe déterminé",
            "Uniquement des jumeaux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation de la partie II : ovule X fécondé par un spermatozoïde Y donne un garçon."
        },
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p05_q6",
          "type": "mcq",
          "prompt": "Selon le document 2, on obtient :",
          "options": [
            "Plus de filles que de garçons",
            "Plus de garçons que de filles",
            "Autant de filles que de garçons",
            "Uniquement des filles chez les couples XY"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Résultat du document 2, troisième point."
        }
      ]
    },
    {
      "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p06",
      "order": 6,
      "title": "C'est le père qui détermine le sexe de l'enfant",
      "summary": "Conclure que le spermatozoïde détermine le sexe et que le hasard de la fécondation explique l'égale probabilité des deux sexes.",
      "conceptExplanation": "Au moment de la fécondation, lorsqu'un ovule est fécondé par un spermatozoïde X, l'enfant qui naîtra sera une fille (XX) ; au contraire, si l'ovule est fécondé par un spermatozoïde Y, on aura un garçon (XY).\nC'est donc le spermatozoïde qui détermine le sexe de l'enfant à naître. C'est donc au père qu'incombe la responsabilité du sexe du futur enfant.\nL'homme produit deux types de gamètes qui ont la même chance de féconder l'unique type d'ovule : la rencontre entre le gamète mâle X et l'ovule X donne naissance à une fille, la fusion du gamète mâle Y avec l'ovule X donne un garçon.\nL'union des gamètes se fait au hasard, ce qui explique l'égale probabilité des deux sexes dans la population.\nConclusion : la transmission du sexe chez l'Homme se fait par l'un des parents, mais c'est le père qui détermine le sexe de l'enfant à naître. C'est la réponse à la situation d'apprentissage, où un père reprochait à sa femme de ne donner naissance qu'à des filles.",
      "keyRule": "L'ovule apporte toujours X : fille si le spermatozoïde apporte X, garçon s'il apporte Y ; le père détermine donc le sexe, au hasard de la fécondation.",
      "formulas": [],
      "workedExample": {
        "title": "Répondre au père de la situation d'apprentissage",
        "statement": "Un père menace de divorcer car sa femme ne donne naissance qu'à des filles. Que lui explique la leçon ?",
        "methodSteps": [
          "La mère ne produit qu'un seul type d'ovule, toujours porteur du chromosome X : elle ne peut pas déterminer le sexe.",
          "Le père produit deux types de spermatozoïdes, X et Y, avec la même chance de féconder l'ovule.",
          "Si des filles naissent, c'est que des spermatozoïdes X ont fécondé les ovules : le sexe dépend du gamète du père.",
          "L'union des gamètes se faisant au hasard, aucune faute ne peut être imputée à la mère."
        ],
        "conclusion": "Conclusion de la partie II : c'est au père qu'incombe la responsabilité du sexe de l'enfant à naître."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le gamète qui détermine le sexe",
          "stepTheme": "Le gamète qui détermine le sexe",
          "stepBadge": "Le gamète qui détermine le sexe",
          "paragraphText": "Le sexe de l'enfant dépend du spermatozoïde qui féconde l'ovule.\nX donne une fille (XX), Y donne un garçon (XY) : l'ovule, toujours X, ne tranche pas.",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p06_q1",
            "type": "mcq",
            "prompt": "Le sexe de l'enfant à naître est déterminé par :",
            "options": [
              "L'ovule",
              "Le spermatozoïde",
              "Le groupe sanguin de la mère",
              "L'âge des parents"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Phrase clé de l'interprétation : c'est le spermatozoïde qui détermine le sexe."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La responsabilité du père",
          "stepTheme": "La responsabilité du père",
          "stepBadge": "La responsabilité du père",
          "paragraphText": "Puisque seul le père fournit deux types de gamètes, X et Y, c'est à lui que revient la détermination du sexe.\nLa leçon le formule sans détour : c'est au père qu'incombe la responsabilité du sexe du futur enfant.",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p06_q2",
            "type": "mcq",
            "prompt": "Selon la conclusion de la partie II, la responsabilité du sexe de l'enfant incombe :",
            "options": [
              "À la mère",
              "Au père",
              "Au hasard seul, sans rôle des gamètes",
              "Aux deux parents également pour le sexe"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Conclusion de la partie II : transmission par l'un des parents, le père."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'union des gamètes se fait au hasard",
          "stepTheme": "L'union des gamètes se fait au hasard",
          "stepBadge": "L'union des gamètes se fait au hasard",
          "paragraphText": "Les deux types de spermatozoïdes ont la même chance de féconder l'ovule unique en type.\nCette union au hasard explique l'égale probabilité des deux sexes dans la population.",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p06_q3",
            "type": "mcq",
            "prompt": "L'égale probabilité des deux sexes dans la population s'explique par :",
            "options": [
              "Le choix de la mère",
              "L'union des gamètes au hasard, entre deux types de spermatozoïdes équiprobables et un seul type d'ovule",
              "Les groupes sanguins des parents",
              "La présence de deux ovules"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Dernière phrase de l'interprétation de la partie II."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Prévoir le sexe à partir de la fécondation",
          "stepTheme": "Prévoir le sexe à partir de la fécondation",
          "stepBadge": "Prévoir le sexe à partir de la fécondation",
          "paragraphText": "Méthode : identifier le chromosome apporté par le spermatozoïde fécondant.\nSpermatozoïde X plus ovule X donne XX (fille) ; spermatozoïde Y plus ovule X donne XY (garçon).",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p06_q4",
            "type": "mcq",
            "prompt": "Un ovule fécondé par un spermatozoïde X donne :",
            "options": [
              "Un garçon (XY)",
              "Une fille (XX)",
              "Un enfant YY",
              "Un enfant sans chromosome X"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation de la partie II : ovule X et spermatozoïde X donnent une fille (XX)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Une série de filles n'est pas une faute de la mère",
          "stepTheme": "Une série de filles n'est pas une faute de la mère",
          "stepBadge": "Une série de filles n'est pas une faute de la mère",
          "paragraphText": "Piège de la situation d'apprentissage : attribuer à la mère la naissance répétée de filles.\nLa mère ne transmet que X ; ce sont les spermatozoïdes X du père qui, au hasard, ont fécondé les ovules.",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p06_q5",
            "type": "mcq",
            "prompt": "Si un couple n'a que des filles, la leçon explique que :",
            "options": [
              "La mère produit des ovules Y",
              "Des spermatozoïdes X ont fécondé les ovules, au hasard des rencontres",
              "Le père produit uniquement des spermatozoïdes Y",
              "Les groupes sanguins ont déterminé le sexe"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'application directe du mécanisme : même chance pour les deux types de gamètes mâles."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Fille XX, garçon XY",
          "stepTheme": "Fille XX, garçon XY",
          "stepBadge": "Fille XX, garçon XY",
          "paragraphText": "Exemple de synthèse de la partie II : les deux issues possibles de la fécondation.\nGamète mâle X avec ovule X : une fille ; gamète mâle Y avec ovule X : un garçon, selon le corrigé de la situation d'évaluation.",
          "exercise": {
            "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p06_q6",
            "type": "mcq",
            "prompt": "La fusion du gamète mâle Y avec l'ovule X donne naissance à :",
            "options": [
              "Une fille",
              "Un garçon",
              "Un enfant XX",
              "Un enfant de groupe O"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Corrigé de la situation d'évaluation, question 4."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p06_q1",
          "type": "mcq",
          "prompt": "Le sexe de l'enfant à naître est déterminé par :",
          "options": [
            "L'ovule",
            "Le spermatozoïde",
            "Le groupe sanguin de la mère",
            "L'âge des parents"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Phrase clé de l'interprétation : c'est le spermatozoïde qui détermine le sexe."
        },
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p06_q2",
          "type": "mcq",
          "prompt": "Selon la conclusion de la partie II, la responsabilité du sexe de l'enfant incombe :",
          "options": [
            "À la mère",
            "Au père",
            "Au hasard seul, sans rôle des gamètes",
            "Aux deux parents également pour le sexe"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Conclusion de la partie II : transmission par l'un des parents, le père."
        },
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p06_q3",
          "type": "mcq",
          "prompt": "L'égale probabilité des deux sexes dans la population s'explique par :",
          "options": [
            "Le choix de la mère",
            "L'union des gamètes au hasard, entre deux types de spermatozoïdes équiprobables et un seul type d'ovule",
            "Les groupes sanguins des parents",
            "La présence de deux ovules"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Dernière phrase de l'interprétation de la partie II."
        },
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p06_q4",
          "type": "mcq",
          "prompt": "Un ovule fécondé par un spermatozoïde X donne :",
          "options": [
            "Un garçon (XY)",
            "Une fille (XX)",
            "Un enfant YY",
            "Un enfant sans chromosome X"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation de la partie II : ovule X et spermatozoïde X donnent une fille (XX)."
        },
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p06_q5",
          "type": "mcq",
          "prompt": "Si un couple n'a que des filles, la leçon explique que :",
          "options": [
            "La mère produit des ovules Y",
            "Des spermatozoïdes X ont fécondé les ovules, au hasard des rencontres",
            "Le père produit uniquement des spermatozoïdes Y",
            "Les groupes sanguins ont déterminé le sexe"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'application directe du mécanisme : même chance pour les deux types de gamètes mâles."
        },
        {
          "id": "terminale_a1_svt_l05_heredite_sexe_groupe_sanguin_p06_q6",
          "type": "mcq",
          "prompt": "La fusion du gamète mâle Y avec l'ovule X donne naissance à :",
          "options": [
            "Une fille",
            "Un garçon",
            "Un enfant XX",
            "Un enfant de groupe O"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Corrigé de la situation d'évaluation, question 4."
        }
      ]
    }
  ]
};
