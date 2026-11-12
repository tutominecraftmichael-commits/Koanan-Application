import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « SVT TA_L5_Lhérédité du sexe et du groupe sanguin chez lHomme.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const SVT_TLE_A_L05_HEREDITE_SEXE_GROUPE_SANGUIN: CurriculumChapter = {
  "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin",
  "subjectId": "svt",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2"
  ],
  "order": 5,
  "title": "Leçon 5 : L'hérédité du sexe et du groupe sanguin chez l'Homme",
  "summary": "Arbre généalogique, système ABO (allèles codominants A et B, allèle récessif O, échiquier), chromosomes sexuels XX et XY, détermination du sexe par le spermatozoïde, transfusion et limites de la recherche de paternité.",
  "officialVolumeHours": 6,
  "contentVersion": 2,
  "source": "SVT TA_L5_Lhérédité du sexe et du groupe sanguin chez lHomme.pdf",
  "points": [
    {
      "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p01",
      "order": 1,
      "title": "Les groupes sanguins dans une famille",
      "summary": "Lire un arbre généalogique : une mère A, un père B, quatre enfants de groupes différents.",
      "conceptExplanation": "Situation : un père menace de divorcer parce que sa femme n'a eu que des filles, toutes de groupes sanguins différents du sien. Il ignore comment se transmettent le groupe sanguin et le sexe.\n\nLire un arbre généalogique :\n- les ronds représentent les femmes, les carrés les hommes ;\n- deux individus reliés par un trait horizontal forment un couple ;\n- leurs enfants sont placés en dessous ;\n- les chiffres romains (I, II) numérotent les générations.\n\nEnquête (arbre généalogique) :\n- génération I : la mère I1 est du groupe A, le père I2 du groupe B ;\n- génération II : II1 (fille) groupe AB, II2 (garçon) groupe O, II3 (garçon) groupe A, II4 (fille) groupe B.\n\nAnalyse :\n- on observe les 4 groupes du système ABO : A, B, AB et O ;\n- la fille II4 a le même groupe que son père ; le garçon II3 a le même groupe que sa mère ;\n- II1 (AB) et II2 (O) ont des groupes différents de ceux de leurs deux parents.\n\nInterprétation :\n- le groupe sanguin est transmis aux filles comme aux garçons, par les deux parents : le gène est porté par un AUTOSOME (en réalité, le chromosome 9), pas par un chromosome sexuel ;\n- l'apparition du groupe O chez un enfant de parents A et B montre que l'allèle O était présent mais masqué chez les deux parents : l'allèle O est RÉCESSIF ;\n- l'apparition du groupe AB montre que les allèles A et B s'expriment ensemble : ils sont CODOMINANTS.",
      "keyRule": "Rond = femme, carré = homme, trait horizontal = couple. Groupe O né de parents A et B : O est récessif. Groupe AB : A et B sont codominants.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer un enfant O",
        "statement": "Une mère du groupe A et un père du groupe B ont un garçon du groupe O. Comment est-ce possible ?",
        "methodSteps": [
          "Un enfant O doit recevoir un allèle O de chaque parent.",
          "La mère A possède donc un allèle O masqué (A//O), le père B aussi (B//O)."
        ],
        "conclusion": "Les deux parents sont hétérozygotes et portent l'allèle récessif O."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Lire un arbre",
          "stepTheme": "Lire un arbre",
          "stepBadge": "Lire un arbre",
          "paragraphText": "Dans un arbre généalogique, les ronds sont des femmes, les carrés des hommes ; un trait horizontal relie un couple, les enfants sont placés en dessous.",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p01_q1",
            "type": "mcq",
            "prompt": "Dans un arbre généalogique, que représente un carré ?",
            "options": [
              "Une femme",
              "Un homme",
              "Un couple",
              "Un enfant mort"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les ronds représentent les femmes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les quatre groupes",
          "stepTheme": "Les quatre groupes",
          "stepBadge": "Les quatre groupes",
          "paragraphText": "Dans la famille étudiée (mère A, père B ; enfants AB, O, A, B), on observe les 4 groupes du système ABO.",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p01_q2",
            "type": "mcq",
            "prompt": "Une mère du groupe A et un père du groupe B ont quatre enfants des groupes AB, O, A et B. Combien de groupes sanguins différents observe-t-on dans cette famille ?",
            "options": [
              "2",
              "3",
              "4",
              "6"
            ],
            "correctAnswerIndex": 2,
            "explanation": "A, B, AB et O : tous les groupes du système ABO."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Un gène autosomal",
          "stepTheme": "Un gène autosomal",
          "stepBadge": "Un gène autosomal",
          "paragraphText": "Le groupe sanguin est transmis aux filles comme aux garçons, par les deux parents : son gène est porté par un autosome.",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p01_q3",
            "type": "mcq",
            "prompt": "Dans la famille étudiée, la fille II4 a le groupe de son père (B) et le garçon II3 celui de sa mère (A). Que peut-on dire du chromosome qui porte le gène du groupe sanguin ?",
            "options": [
              "C'est le chromosome Y",
              "C'est un autosome (chromosome non sexuel)",
              "C'est le chromosome X seulement",
              "Il n'y a pas de chromosome en jeu"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il se transmet de la même façon aux deux sexes (chromosome 9)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L'allèle O récessif",
          "stepTheme": "L'allèle O récessif",
          "stepBadge": "L'allèle O récessif",
          "paragraphText": "Un enfant O né de parents A et B montre que l'allèle O était présent mais masqué chez les parents : il est récessif.",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p01_q4",
            "type": "mcq",
            "prompt": "Des parents des groupes A et B ont un enfant du groupe O. Que montre l'apparition de ce groupe O ?",
            "options": [
              "Que l'allèle O est dominant",
              "Que l'allèle O était présent mais masqué chez les deux parents : il est récessif",
              "Que l'enfant a été échangé à la maternité",
              "Que le groupe O n'est pas héréditaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un allèle récessif ne s'exprime que s'il est en double (O//O)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "A et B codominants",
          "stepTheme": "A et B codominants",
          "stepBadge": "A et B codominants",
          "paragraphText": "Un enfant AB montre que les allèles A et B s'expriment en même temps : aucun ne domine l'autre, ils sont codominants.",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p01_q5",
            "type": "mcq",
            "prompt": "Une fille du groupe AB est née d'une mère A et d'un père B. Que montre le phénotype AB ?",
            "options": [
              "Que A domine B",
              "Que B domine A",
              "Que les allèles A et B s'expriment ensemble : ils sont codominants",
              "Que A et B sont récessifs"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Elle a reçu A de sa mère et B de son père, et exprime les deux."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Un phénotype récessif réapparaît",
          "stepTheme": "Un phénotype récessif réapparaît",
          "stepBadge": "Un phénotype récessif réapparaît",
          "paragraphText": "Un phénotype récessif peut apparaître chez un enfant même si ses deux parents ne le montrent pas : c'est le cas du groupe O.",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p01_q6",
            "type": "mcq",
            "prompt": "Vrai ou faux : « Un phénotype récessif n'apparaît jamais dans la descendance. »",
            "options": [
              "Vrai",
              "Faux : un enfant O peut naître de parents A et B qui portent l'allèle O masqué",
              "Vrai, sauf chez les filles",
              "Vrai, sauf chez les garçons"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il apparaît quand l'enfant reçoit l'allèle récessif de ses deux parents."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Différent de ses parents",
          "stepTheme": "Différent de ses parents",
          "stepBadge": "Différent de ses parents",
          "paragraphText": "Un enfant peut avoir un groupe sanguin différent de celui de ses deux parents (AB ou O nés de parents A et B).",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p01_q7",
            "type": "mcq",
            "prompt": "Un père du groupe B s'étonne que ses filles aient des groupes sanguins différents du sien (AB, O, A). La mère est du groupe A. Est-ce anormal ?",
            "options": [
              "Oui, les filles doivent avoir le groupe du père",
              "Non : chaque enfant reçoit un allèle de chaque parent, ce qui peut donner A, B, AB ou O",
              "Oui, cela prouve que ce ne sont pas ses filles",
              "Non, car le groupe sanguin vient uniquement de la mère"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Avec des parents A//O et B//O, les quatre groupes sont possibles."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p01_q1",
          "type": "mcq",
          "prompt": "Dans un arbre généalogique, que représente un carré ?",
          "options": [
            "Une femme",
            "Un homme",
            "Un couple",
            "Un enfant mort"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les ronds représentent les femmes."
        },
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p01_q2",
          "type": "mcq",
          "prompt": "Une mère du groupe A et un père du groupe B ont quatre enfants des groupes AB, O, A et B. Combien de groupes sanguins différents observe-t-on dans cette famille ?",
          "options": [
            "2",
            "3",
            "4",
            "6"
          ],
          "correctAnswerIndex": 2,
          "explanation": "A, B, AB et O : tous les groupes du système ABO."
        },
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p01_q3",
          "type": "mcq",
          "prompt": "Dans la famille étudiée, la fille II4 a le groupe de son père (B) et le garçon II3 celui de sa mère (A). Que peut-on dire du chromosome qui porte le gène du groupe sanguin ?",
          "options": [
            "C'est le chromosome Y",
            "C'est un autosome (chromosome non sexuel)",
            "C'est le chromosome X seulement",
            "Il n'y a pas de chromosome en jeu"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il se transmet de la même façon aux deux sexes (chromosome 9)."
        },
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p01_q4",
          "type": "mcq",
          "prompt": "Des parents des groupes A et B ont un enfant du groupe O. Que montre l'apparition de ce groupe O ?",
          "options": [
            "Que l'allèle O est dominant",
            "Que l'allèle O était présent mais masqué chez les deux parents : il est récessif",
            "Que l'enfant a été échangé à la maternité",
            "Que le groupe O n'est pas héréditaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un allèle récessif ne s'exprime que s'il est en double (O//O)."
        },
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p01_q5",
          "type": "mcq",
          "prompt": "Une fille du groupe AB est née d'une mère A et d'un père B. Que montre le phénotype AB ?",
          "options": [
            "Que A domine B",
            "Que B domine A",
            "Que les allèles A et B s'expriment ensemble : ils sont codominants",
            "Que A et B sont récessifs"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Elle a reçu A de sa mère et B de son père, et exprime les deux."
        },
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p01_q6",
          "type": "mcq",
          "prompt": "Vrai ou faux : « Un phénotype récessif n'apparaît jamais dans la descendance. »",
          "options": [
            "Vrai",
            "Faux : un enfant O peut naître de parents A et B qui portent l'allèle O masqué",
            "Vrai, sauf chez les filles",
            "Vrai, sauf chez les garçons"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il apparaît quand l'enfant reçoit l'allèle récessif de ses deux parents."
        },
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p01_q7",
          "type": "mcq",
          "prompt": "Un père du groupe B s'étonne que ses filles aient des groupes sanguins différents du sien (AB, O, A). La mère est du groupe A. Est-ce anormal ?",
          "options": [
            "Oui, les filles doivent avoir le groupe du père",
            "Non : chaque enfant reçoit un allèle de chaque parent, ce qui peut donner A, B, AB ou O",
            "Oui, cela prouve que ce ne sont pas ses filles",
            "Non, car le groupe sanguin vient uniquement de la mère"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Avec des parents A//O et B//O, les quatre groupes sont possibles."
        }
      ]
    },
    {
      "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p02",
      "order": 2,
      "title": "Génotypes et échiquier du système ABO",
      "summary": "Trois allèles, quatre phénotypes, et un échiquier A//O × B//O.",
      "conceptExplanation": "Vocabulaire :\n- allèle : une forme d'un gène ;\n- génotype : les deux allèles d'un individu, écrits A//O par exemple ;\n- phénotype : le caractère visible, écrit entre crochets : [A], [B], [AB], [O] ;\n- homozygote : deux allèles identiques (A//A) ; hétérozygote : deux allèles différents (A//O, A//B).\n\nLe gène du système ABO est POLYALLÉLIQUE : il a trois allèles, A, B et O.\n- A et B sont dominants sur O ; A et B sont codominants entre eux ; O est récessif.\n\nCorrespondance génotypes → phénotypes :\n- A//A ou A//O → [A] ;\n- B//B ou B//O → [B] ;\n- A//B → [AB] (forcément hétérozygote) ;\n- O//O → [O].\n\nVérification chromosomique : la mère [A] a eu un enfant O, elle est donc A//O ; le père [B] est B//O.\n- Gamètes de la mère : 50 % A, 50 % O. Gamètes du père : 50 % B, 50 % O.\n- Échiquier de croisement :\n  A × B → A//B [AB] (25 %) ;\n  A × O → A//O [A] (25 %) ;\n  O × B → B//O [B] (25 %) ;\n  O × O → O//O [O] (25 %).\nBilan : 25 % [A], 25 % [B], 25 % [AB], 25 % [O]. Les résultats théoriques sont conformes aux résultats observés.",
      "keyRule": "Système ABO : 3 allèles (polyallélique). A et B dominants sur O, codominants entre eux. A//O × B//O donne 1/4 [A], 1/4 [B], 1/4 [AB], 1/4 [O].",
      "formulas": [],
      "workedExample": {
        "title": "Trouver les génotypes",
        "statement": "Une mère [A] et un père [B] ont des enfants [AB], [B], [O] et [O]. Écris le génotype de chacun.",
        "methodSteps": [
          "Les enfants [O] sont O//O : chacun a reçu un O de chaque parent.",
          "Donc la mère est A//O et le père B//O.",
          "L'enfant [AB] est A//B ; l'enfant [B] a reçu B du père et O de la mère : B//O."
        ],
        "conclusion": "Mère A//O, père B//O, enfants A//B, B//O, O//O, O//O."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un gène polyallélique",
          "stepTheme": "Un gène polyallélique",
          "stepBadge": "Un gène polyallélique",
          "paragraphText": "Le gène du système ABO est polyallélique : il possède trois allèles différents, A, B et O.",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p02_q1",
            "type": "mcq",
            "prompt": "Le gène du système ABO possède trois allèles (A, B et O). Comment qualifie-t-on un tel gène ?",
            "options": [
              "Monoallélique",
              "Polyallélique",
              "Lié au sexe",
              "Récessif"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un gène polyallélique a plusieurs formes alléliques dans la population."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Génotype et phénotype",
          "stepTheme": "Génotype et phénotype",
          "stepBadge": "Génotype et phénotype",
          "paragraphText": "Le génotype est la paire d'allèles (A//O) ; le phénotype est le caractère exprimé, écrit entre crochets ([A]).",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p02_q2",
            "type": "mcq",
            "prompt": "Un individu a le génotype A//O. Quel est son phénotype (son groupe sanguin) ?",
            "options": [
              "[O]",
              "[A]",
              "[AB]",
              "[B]"
            ],
            "correctAnswerIndex": 1,
            "explanation": "A est dominant sur O : seul A s'exprime."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le groupe AB",
          "stepTheme": "Le groupe AB",
          "stepBadge": "Le groupe AB",
          "paragraphText": "Un individu du groupe AB a forcément le génotype A//B : il est hétérozygote.",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p02_q3",
            "type": "mcq",
            "prompt": "Vrai ou faux : « Dans le système ABO, un individu du groupe sanguin AB est hétérozygote. »",
            "options": [
              "Vrai : son génotype est forcément A//B",
              "Faux : il est A//A",
              "Faux : il est O//O",
              "Faux : il est B//B"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il a reçu A d'un parent et B de l'autre."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "O n'est pas dominant",
          "stepTheme": "O n'est pas dominant",
          "stepBadge": "O n'est pas dominant",
          "paragraphText": "Dans le système ABO, l'allèle O est récessif : un individu [O] est toujours O//O.",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p02_q4",
            "type": "mcq",
            "prompt": "Vrai ou faux : « Dans le système ABO, l'allèle O est un allèle dominant. »",
            "options": [
              "Vrai",
              "Faux : l'allèle O est récessif",
              "Vrai, mais seulement chez l'homme",
              "Vrai, mais seulement chez la femme"
            ],
            "correctAnswerIndex": 1,
            "explanation": "O ne s'exprime qu'en double : O//O."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Les gamètes",
          "stepTheme": "Les gamètes",
          "stepBadge": "Les gamètes",
          "paragraphText": "Une mère A//O produit 50 % de gamètes A et 50 % de gamètes O ; un père B//O produit 50 % de gamètes B et 50 % de gamètes O.",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p02_q5",
            "type": "mcq",
            "prompt": "Une mère de génotype A//O forme ses gamètes (ovules) par la méiose. Quels gamètes produit-elle, et en quelles proportions ?",
            "options": [
              "100 % A",
              "50 % A et 50 % O",
              "100 % O",
              "75 % A et 25 % O"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Chaque gamète reçoit un seul des deux allèles."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "L'échiquier",
          "stepTheme": "L'échiquier",
          "stepBadge": "L'échiquier",
          "paragraphText": "A//O × B//O : 25 % [AB], 25 % [A], 25 % [B], 25 % [O].",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p02_q6",
            "type": "mcq",
            "prompt": "Une mère A//O et un père B//O ont un enfant. D'après l'échiquier de croisement, quelle est la probabilité que cet enfant soit du groupe O ?",
            "options": [
              "0 %",
              "25 %",
              "50 %",
              "100 %"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il faut un gamète O de chaque parent : 1/2 × 1/2 = 1/4."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Retrouver les génotypes",
          "stepTheme": "Retrouver les génotypes",
          "stepBadge": "Retrouver les génotypes",
          "paragraphText": "Mère [A] et père [B] avec des enfants [AB], [B], [O], [O] : mère A//O, père B//O ; l'enfant [B] est B//O.",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p02_q7",
            "type": "mcq",
            "prompt": "Une mère [A] et un père [B] ont deux filles du groupe O, une fille AB et un garçon B. Quel est le génotype du garçon du groupe B ?",
            "options": [
              "B//B",
              "B//O : il a reçu B de son père et O de sa mère",
              "A//B",
              "O//O"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La mère est A//O (elle a des enfants O) : elle n'a pas d'allèle B à donner."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p02_q1",
          "type": "mcq",
          "prompt": "Le gène du système ABO possède trois allèles (A, B et O). Comment qualifie-t-on un tel gène ?",
          "options": [
            "Monoallélique",
            "Polyallélique",
            "Lié au sexe",
            "Récessif"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un gène polyallélique a plusieurs formes alléliques dans la population."
        },
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p02_q2",
          "type": "mcq",
          "prompt": "Un individu a le génotype A//O. Quel est son phénotype (son groupe sanguin) ?",
          "options": [
            "[O]",
            "[A]",
            "[AB]",
            "[B]"
          ],
          "correctAnswerIndex": 1,
          "explanation": "A est dominant sur O : seul A s'exprime."
        },
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p02_q3",
          "type": "mcq",
          "prompt": "Vrai ou faux : « Dans le système ABO, un individu du groupe sanguin AB est hétérozygote. »",
          "options": [
            "Vrai : son génotype est forcément A//B",
            "Faux : il est A//A",
            "Faux : il est O//O",
            "Faux : il est B//B"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il a reçu A d'un parent et B de l'autre."
        },
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p02_q4",
          "type": "mcq",
          "prompt": "Vrai ou faux : « Dans le système ABO, l'allèle O est un allèle dominant. »",
          "options": [
            "Vrai",
            "Faux : l'allèle O est récessif",
            "Vrai, mais seulement chez l'homme",
            "Vrai, mais seulement chez la femme"
          ],
          "correctAnswerIndex": 1,
          "explanation": "O ne s'exprime qu'en double : O//O."
        },
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p02_q5",
          "type": "mcq",
          "prompt": "Une mère de génotype A//O forme ses gamètes (ovules) par la méiose. Quels gamètes produit-elle, et en quelles proportions ?",
          "options": [
            "100 % A",
            "50 % A et 50 % O",
            "100 % O",
            "75 % A et 25 % O"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Chaque gamète reçoit un seul des deux allèles."
        },
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p02_q6",
          "type": "mcq",
          "prompt": "Une mère A//O et un père B//O ont un enfant. D'après l'échiquier de croisement, quelle est la probabilité que cet enfant soit du groupe O ?",
          "options": [
            "0 %",
            "25 %",
            "50 %",
            "100 %"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il faut un gamète O de chaque parent : 1/2 × 1/2 = 1/4."
        },
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p02_q7",
          "type": "mcq",
          "prompt": "Une mère [A] et un père [B] ont deux filles du groupe O, une fille AB et un garçon B. Quel est le génotype du garçon du groupe B ?",
          "options": [
            "B//B",
            "B//O : il a reçu B de son père et O de sa mère",
            "A//B",
            "O//O"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La mère est A//O (elle a des enfants O) : elle n'a pas d'allèle B à donner."
        }
      ]
    },
    {
      "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p03",
      "order": 3,
      "title": "Les chromosomes sexuels",
      "summary": "La femme est XX, l'homme est XY.",
      "conceptExplanation": "Document 1 : les chromosomes sexuels (hétérochromosomes, ou gonosomes).\n- La femme possède deux chromosomes sexuels identiques : XX.\n- L'homme possède deux chromosomes sexuels différents : X et Y.\n- Le chromosome Y est beaucoup plus petit que le X. Les chromosomes X et Y ont un petit segment homologue (commun), mais une grande partie du X n'existe pas sur le Y.\n\nLes autres chromosomes, identiques chez l'homme et la femme, sont les AUTOSOMES. L'espèce humaine possède 46 chromosomes : 22 paires d'autosomes et 1 paire de chromosomes sexuels.\n\nLa méiose (formation des gamètes) sépare les deux chromosomes de chaque paire :\n- chez la femme (XX), tous les ovules contiennent un chromosome X : une seule catégorie de gamètes ;\n- chez l'homme (XY), la moitié des spermatozoïdes contient un X, l'autre moitié un Y : deux catégories de gamètes, en proportions égales.\n\nVocabulaire : un allèle porté par un autosome est dit autosomal ; un allèle porté par un chromosome sexuel est dit hétérosomal (ou gonosomal).",
      "keyRule": "Femme XX → ovules tous X. Homme XY → 50 % de spermatozoïdes X et 50 % Y. Le Y est plus petit que le X.",
      "formulas": [],
      "workedExample": {
        "title": "Compter les gamètes",
        "statement": "Combien de catégories de gamètes (pour les chromosomes sexuels) produit une femme ? Et un homme ?",
        "methodSteps": [
          "La femme est XX : la méiose donne toujours un X.",
          "L'homme est XY : la méiose donne soit un X, soit un Y."
        ],
        "conclusion": "Femme : une catégorie (X). Homme : deux catégories (X et Y), en proportions égales."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "XX et XY",
          "stepTheme": "XX et XY",
          "stepBadge": "XX et XY",
          "paragraphText": "La femme possède deux chromosomes sexuels identiques (XX) ; l'homme deux chromosomes sexuels différents (XY).",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p03_q1",
            "type": "mcq",
            "prompt": "Quels sont les chromosomes sexuels de l'homme (sexe masculin) ?",
            "options": [
              "XX",
              "XY",
              "YY",
              "X seul"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La femme est XX."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Un Y plus petit",
          "stepTheme": "Un Y plus petit",
          "stepBadge": "Un Y plus petit",
          "paragraphText": "Le chromosome Y est beaucoup plus petit que le X ; ils n'ont qu'un petit segment homologue en commun.",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p03_q2",
            "type": "mcq",
            "prompt": "Le document 1 compare les chromosomes X et Y. Que montre-t-il ?",
            "options": [
              "X et Y sont identiques",
              "Le Y est beaucoup plus petit ; une grande partie du X n'existe pas sur le Y",
              "Le Y est plus grand que le X",
              "Le X n'existe que chez l'homme"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est pourquoi un gène porté par le X n'a pas d'équivalent sur le Y."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Autosomes",
          "stepTheme": "Autosomes",
          "stepBadge": "Autosomes",
          "paragraphText": "L'espèce humaine a 46 chromosomes : 22 paires d'autosomes, identiques dans les deux sexes, et une paire de chromosomes sexuels.",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p03_q3",
            "type": "mcq",
            "prompt": "Une cellule humaine contient 46 chromosomes, dont une paire de chromosomes sexuels. Combien de paires d'autosomes contient-elle ?",
            "options": [
              "23",
              "22",
              "46",
              "1"
            ],
            "correctAnswerIndex": 1,
            "explanation": "46 chromosomes = 23 paires ; 23 − 1 paire sexuelle = 22 paires d'autosomes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les ovules",
          "stepTheme": "Les ovules",
          "stepBadge": "Les ovules",
          "paragraphText": "La femme (XX) produit une seule catégorie d'ovules : tous portent un chromosome X.",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p03_q4",
            "type": "mcq",
            "prompt": "Une femme a les chromosomes sexuels XX. Quel chromosome sexuel contiennent ses ovules ?",
            "options": [
              "Tous un chromosome X",
              "La moitié X, la moitié Y",
              "Tous un chromosome Y",
              "Aucun chromosome sexuel"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle n'a pas de chromosome Y à transmettre."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les spermatozoïdes",
          "stepTheme": "Les spermatozoïdes",
          "stepBadge": "Les spermatozoïdes",
          "paragraphText": "L'homme (XY) produit deux catégories de spermatozoïdes en proportions égales : 50 % portent un X, 50 % un Y.",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p03_q5",
            "type": "mcq",
            "prompt": "Un homme a les chromosomes sexuels XY. Quels spermatozoïdes produit-il, et en quelles proportions ?",
            "options": [
              "100 % X",
              "100 % Y",
              "50 % portant un X et 50 % portant un Y",
              "75 % X et 25 % Y"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La méiose sépare X et Y dans des gamètes différents."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Hétérosomal",
          "stepTheme": "Hétérosomal",
          "stepBadge": "Hétérosomal",
          "paragraphText": "Un allèle porté par un autosome est autosomal ; un allèle porté par un chromosome sexuel est hétérosomal (gonosomal).",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p03_q6",
            "type": "mcq",
            "prompt": "Vrai ou faux : « Un allèle est dit hétérosomal lorsqu'il est porté par un autosome. »",
            "options": [
              "Vrai",
              "Faux : un allèle hétérosomal est porté par un chromosome sexuel (X ou Y)",
              "Vrai, chez la femme seulement",
              "Faux : un allèle hétérosomal n'existe pas"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Porté par un autosome, il est dit autosomal."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Relier chromosomes et enfants",
          "stepTheme": "Relier chromosomes et enfants",
          "stepBadge": "Relier chromosomes et enfants",
          "paragraphText": "Le X du père va à une fille, le Y du père à un garçon ; le X de la mère va aux filles comme aux garçons.",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p03_q7",
            "type": "mcq",
            "prompt": "Le père a les chromosomes X et Y, la mère les chromosomes X et X. Relie chaque chromosome du père à l'enfant auquel il est destiné.",
            "options": [
              "Le X du père va à un garçon, le Y à une fille",
              "Le X du père va à une fille, le Y à un garçon",
              "Le X et le Y du père vont tous les deux aux filles",
              "Le père ne transmet aucun chromosome sexuel"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une fille reçoit X + X ; un garçon reçoit Y (du père) + X (de la mère)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p03_q1",
          "type": "mcq",
          "prompt": "Quels sont les chromosomes sexuels de l'homme (sexe masculin) ?",
          "options": [
            "XX",
            "XY",
            "YY",
            "X seul"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La femme est XX."
        },
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p03_q2",
          "type": "mcq",
          "prompt": "Le document 1 compare les chromosomes X et Y. Que montre-t-il ?",
          "options": [
            "X et Y sont identiques",
            "Le Y est beaucoup plus petit ; une grande partie du X n'existe pas sur le Y",
            "Le Y est plus grand que le X",
            "Le X n'existe que chez l'homme"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est pourquoi un gène porté par le X n'a pas d'équivalent sur le Y."
        },
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p03_q3",
          "type": "mcq",
          "prompt": "Une cellule humaine contient 46 chromosomes, dont une paire de chromosomes sexuels. Combien de paires d'autosomes contient-elle ?",
          "options": [
            "23",
            "22",
            "46",
            "1"
          ],
          "correctAnswerIndex": 1,
          "explanation": "46 chromosomes = 23 paires ; 23 − 1 paire sexuelle = 22 paires d'autosomes."
        },
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p03_q4",
          "type": "mcq",
          "prompt": "Une femme a les chromosomes sexuels XX. Quel chromosome sexuel contiennent ses ovules ?",
          "options": [
            "Tous un chromosome X",
            "La moitié X, la moitié Y",
            "Tous un chromosome Y",
            "Aucun chromosome sexuel"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle n'a pas de chromosome Y à transmettre."
        },
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p03_q5",
          "type": "mcq",
          "prompt": "Un homme a les chromosomes sexuels XY. Quels spermatozoïdes produit-il, et en quelles proportions ?",
          "options": [
            "100 % X",
            "100 % Y",
            "50 % portant un X et 50 % portant un Y",
            "75 % X et 25 % Y"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La méiose sépare X et Y dans des gamètes différents."
        },
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p03_q6",
          "type": "mcq",
          "prompt": "Vrai ou faux : « Un allèle est dit hétérosomal lorsqu'il est porté par un autosome. »",
          "options": [
            "Vrai",
            "Faux : un allèle hétérosomal est porté par un chromosome sexuel (X ou Y)",
            "Vrai, chez la femme seulement",
            "Faux : un allèle hétérosomal n'existe pas"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Porté par un autosome, il est dit autosomal."
        },
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p03_q7",
          "type": "mcq",
          "prompt": "Le père a les chromosomes X et Y, la mère les chromosomes X et X. Relie chaque chromosome du père à l'enfant auquel il est destiné.",
          "options": [
            "Le X du père va à un garçon, le Y à une fille",
            "Le X du père va à une fille, le Y à un garçon",
            "Le X et le Y du père vont tous les deux aux filles",
            "Le père ne transmet aucun chromosome sexuel"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une fille reçoit X + X ; un garçon reçoit Y (du père) + X (de la mère)."
        }
      ]
    },
    {
      "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p04",
      "order": 4,
      "title": "Qui détermine le sexe de l'enfant ?",
      "summary": "C'est le spermatozoïde, donc le père, qui détermine le sexe.",
      "conceptExplanation": "Document 2 : échiquier de croisement (rencontre des gamètes).\n- Ovule X × spermatozoïde X → XX : fille.\n- Ovule X × spermatozoïde Y → XY : garçon.\n\nBilan : 50 % de filles et 50 % de garçons.\n\nInterprétation :\n- l'ovule porte toujours un X : il ne décide pas du sexe ;\n- c'est le spermatozoïde (X ou Y) qui détermine le sexe de l'enfant à naître ;\n- c'est donc au père qu'incombe le sexe du futur enfant (même s'il ne le choisit pas : c'est le hasard de la fécondation) ;\n- l'union des gamètes se fait au hasard : à chaque naissance, la probabilité d'avoir une fille est de 1/2, comme celle d'avoir un garçon.\n\nConséquence pour la situation de départ : le père qui reproche à sa femme de n'avoir eu que des filles se trompe. C'est le spermatozoïde (du père) qui porte le X ou le Y ; et de toute façon, il s'agit du hasard.\n\nPiège : avoir eu trois filles ne rend pas plus probable un garçon à la naissance suivante : chaque naissance reste 50 % / 50 %.",
      "keyRule": "Ovule X + spermatozoïde X → fille (XX) ; ovule X + spermatozoïde Y → garçon (XY). Le spermatozoïde (le père) détermine le sexe ; chaque naissance : 1/2 fille, 1/2 garçon.",
      "formulas": [],
      "workedExample": {
        "title": "Une quatrième naissance",
        "statement": "Un couple a déjà trois filles. Quelle est la probabilité que le quatrième enfant soit un garçon ?",
        "methodSteps": [
          "À chaque fécondation, le spermatozoïde porte X ou Y avec la même probabilité.",
          "Les naissances précédentes n'influencent pas la suivante."
        ],
        "conclusion": "La probabilité reste 1/2, soit 50 %."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Une fille",
          "stepTheme": "Une fille",
          "stepBadge": "Une fille",
          "paragraphText": "Un ovule X fécondé par un spermatozoïde X donne un enfant XX : une fille.",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p04_q1",
            "type": "mcq",
            "prompt": "Un ovule (qui porte un chromosome X) est fécondé par un spermatozoïde porteur d'un chromosome X. Quel est le sexe de l'enfant ?",
            "options": [
              "Un garçon (XY)",
              "Une fille (XX)",
              "On ne peut pas savoir",
              "Un garçon (XX)"
            ],
            "correctAnswerIndex": 1,
            "explanation": "X + X = XX : fille."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Un garçon",
          "stepTheme": "Un garçon",
          "stepBadge": "Un garçon",
          "paragraphText": "Un ovule X fécondé par un spermatozoïde Y donne un enfant XY : un garçon.",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p04_q2",
            "type": "mcq",
            "prompt": "Un ovule (qui porte un chromosome X) est fécondé par un spermatozoïde porteur d'un chromosome Y. Quel est le sexe de l'enfant ?",
            "options": [
              "Une fille (XX)",
              "Un garçon (XY)",
              "Une fille (XY)",
              "Aucun enfant"
            ],
            "correctAnswerIndex": 1,
            "explanation": "X + Y = XY : garçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le spermatozoïde décide",
          "stepTheme": "Le spermatozoïde décide",
          "stepBadge": "Le spermatozoïde décide",
          "paragraphText": "L'ovule porte toujours X ; c'est le spermatozoïde (X ou Y) qui détermine le sexe de l'enfant.",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p04_q3",
            "type": "mcq",
            "prompt": "Les ovules portent tous un chromosome X ; les spermatozoïdes portent soit un X, soit un Y. Lequel des deux gamètes détermine le sexe de l'enfant ?",
            "options": [
              "L'ovule (la mère)",
              "Le spermatozoïde (le père)",
              "Les deux à égalité",
              "Ni l'un ni l'autre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Seul le spermatozoïde peut apporter un Y."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Autant de filles que de garçons",
          "stepTheme": "Autant de filles que de garçons",
          "stepBadge": "Autant de filles que de garçons",
          "paragraphText": "L'union des gamètes se fait au hasard : on obtient en moyenne 50 % de filles et 50 % de garçons.",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p04_q4",
            "type": "mcq",
            "prompt": "D'après l'échiquier de croisement (ovules X ; spermatozoïdes 50 % X et 50 % Y), quel est le bilan des naissances ?",
            "options": [
              "100 % de filles",
              "75 % de garçons et 25 % de filles",
              "50 % de filles et 50 % de garçons",
              "100 % de garçons"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est pourquoi il y a à peu près autant d'hommes que de femmes."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le père qui accuse",
          "stepTheme": "Le père qui accuse",
          "stepBadge": "Le père qui accuse",
          "paragraphText": "Un père qui reproche à sa femme de n'avoir eu que des filles se trompe : c'est le spermatozoïde qui détermine le sexe, et c'est le hasard.",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p04_q5",
            "type": "mcq",
            "prompt": "Un père menace de divorcer parce que sa femme « ne lui donne que des filles ». Que lui expliquer, d'après le cours ?",
            "options": [
              "Il a raison : la mère choisit le sexe",
              "C'est le spermatozoïde qui porte X ou Y : le sexe dépend du gamète du père, et du hasard de la fécondation",
              "C'est la nourriture de la mère qui décide",
              "Il faut changer de groupe sanguin"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La mère donne toujours un X ; elle n'est pas responsable du sexe."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le hasard n'a pas de mémoire",
          "stepTheme": "Le hasard n'a pas de mémoire",
          "stepBadge": "Le hasard n'a pas de mémoire",
          "paragraphText": "Après trois filles, la probabilité d'avoir un garçon reste 1/2 : chaque fécondation est indépendante.",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p04_q6",
            "type": "mcq",
            "prompt": "Un couple a déjà eu trois filles. Quelle est la probabilité que leur quatrième enfant soit un garçon ?",
            "options": [
              "100 %, c'est forcément son tour",
              "50 %",
              "25 %",
              "0 %"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les naissances précédentes ne changent rien à la suivante."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Lire l'échiquier",
          "stepTheme": "Lire l'échiquier",
          "stepBadge": "Lire l'échiquier",
          "paragraphText": "Dans l'échiquier, les gamètes de la mère sont en lignes (X, X) et ceux du père en colonnes (X, Y) : 2 cases XX et 2 cases XY.",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p04_q7",
            "type": "mcq",
            "prompt": "Dans un échiquier de croisement à 4 cases, les gamètes de la mère sont X et X, ceux du père X et Y. Combien de cases donnent un garçon (XY) ?",
            "options": [
              "0",
              "1",
              "2",
              "4"
            ],
            "correctAnswerIndex": 2,
            "explanation": "2 cases sur 4, soit 50 %."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p04_q1",
          "type": "mcq",
          "prompt": "Un ovule (qui porte un chromosome X) est fécondé par un spermatozoïde porteur d'un chromosome X. Quel est le sexe de l'enfant ?",
          "options": [
            "Un garçon (XY)",
            "Une fille (XX)",
            "On ne peut pas savoir",
            "Un garçon (XX)"
          ],
          "correctAnswerIndex": 1,
          "explanation": "X + X = XX : fille."
        },
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p04_q2",
          "type": "mcq",
          "prompt": "Un ovule (qui porte un chromosome X) est fécondé par un spermatozoïde porteur d'un chromosome Y. Quel est le sexe de l'enfant ?",
          "options": [
            "Une fille (XX)",
            "Un garçon (XY)",
            "Une fille (XY)",
            "Aucun enfant"
          ],
          "correctAnswerIndex": 1,
          "explanation": "X + Y = XY : garçon."
        },
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p04_q3",
          "type": "mcq",
          "prompt": "Les ovules portent tous un chromosome X ; les spermatozoïdes portent soit un X, soit un Y. Lequel des deux gamètes détermine le sexe de l'enfant ?",
          "options": [
            "L'ovule (la mère)",
            "Le spermatozoïde (le père)",
            "Les deux à égalité",
            "Ni l'un ni l'autre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Seul le spermatozoïde peut apporter un Y."
        },
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p04_q4",
          "type": "mcq",
          "prompt": "D'après l'échiquier de croisement (ovules X ; spermatozoïdes 50 % X et 50 % Y), quel est le bilan des naissances ?",
          "options": [
            "100 % de filles",
            "75 % de garçons et 25 % de filles",
            "50 % de filles et 50 % de garçons",
            "100 % de garçons"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est pourquoi il y a à peu près autant d'hommes que de femmes."
        },
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p04_q5",
          "type": "mcq",
          "prompt": "Un père menace de divorcer parce que sa femme « ne lui donne que des filles ». Que lui expliquer, d'après le cours ?",
          "options": [
            "Il a raison : la mère choisit le sexe",
            "C'est le spermatozoïde qui porte X ou Y : le sexe dépend du gamète du père, et du hasard de la fécondation",
            "C'est la nourriture de la mère qui décide",
            "Il faut changer de groupe sanguin"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La mère donne toujours un X ; elle n'est pas responsable du sexe."
        },
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p04_q6",
          "type": "mcq",
          "prompt": "Un couple a déjà eu trois filles. Quelle est la probabilité que leur quatrième enfant soit un garçon ?",
          "options": [
            "100 %, c'est forcément son tour",
            "50 %",
            "25 %",
            "0 %"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les naissances précédentes ne changent rien à la suivante."
        },
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p04_q7",
          "type": "mcq",
          "prompt": "Dans un échiquier de croisement à 4 cases, les gamètes de la mère sont X et X, ceux du père X et Y. Combien de cases donnent un garçon (XY) ?",
          "options": [
            "0",
            "1",
            "2",
            "4"
          ],
          "correctAnswerIndex": 2,
          "explanation": "2 cases sur 4, soit 50 %."
        }
      ]
    },
    {
      "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p05",
      "order": 5,
      "title": "Utiliser le groupe sanguin : transfusion et paternité",
      "summary": "Transfuser sans danger ; le groupe sanguin peut exclure, pas prouver, une paternité.",
      "conceptExplanation": "Connaître le groupe sanguin sert à :\n1. TRANSFUSER du sang sans danger. Dans le système ABO :\n- le groupe O peut donner à tous les groupes : on dit « donneur universel » ;\n- le groupe AB peut recevoir de tous les groupes : « receveur universel » ;\n- un individu A peut recevoir du sang A ou O ; un individu B, du sang B ou O.\n(En pratique, on tient aussi compte du facteur Rhésus et on donne de préférence le même groupe.)\n\n2. RECHERCHER UNE PATERNITÉ, mais avec des limites :\n- le groupe sanguin peut EXCLURE un homme : par exemple, un homme du groupe AB ne peut pas être le père d'un enfant du groupe O (il n'a pas d'allèle O à transmettre) ;\n- mais il ne peut pas PROUVER une paternité : des parents de groupes A et B, ou deux parents de groupe A, peuvent avoir des enfants de groupes différents, et beaucoup d'hommes ont le même groupe. Aujourd'hui, on utilise les tests ADN.\n\nConclusion générale : les groupes sanguins A, B, O sont déterminés par un gène autosomal à trois allèles (A, B, O). Le sexe est déterminé par les chromosomes sexuels, et c'est le spermatozoïde (le père) qui détermine le sexe de l'enfant.",
      "keyRule": "O : donneur universel ; AB : receveur universel. Le groupe sanguin peut exclure une paternité, jamais la prouver à lui seul.",
      "formulas": [],
      "workedExample": {
        "title": "Exclure un père",
        "statement": "Un enfant est du groupe O, sa mère du groupe A. Un homme du groupe AB peut-il être son père ?",
        "methodSteps": [
          "Un enfant O est O//O : il reçoit un O de chacun de ses parents.",
          "Un homme AB est A//B : il n'a pas d'allèle O."
        ],
        "conclusion": "Non : cet homme est exclu comme père."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Donneur universel",
          "stepTheme": "Donneur universel",
          "stepBadge": "Donneur universel",
          "paragraphText": "Dans le système ABO, le groupe O peut donner son sang à tous les groupes : c'est le donneur universel.",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p05_q1",
            "type": "mcq",
            "prompt": "Dans le système ABO, quel groupe sanguin est appelé « donneur universel » ?",
            "options": [
              "Le groupe A",
              "Le groupe B",
              "Le groupe AB",
              "Le groupe O"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le groupe AB est, lui, le receveur universel."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Receveur universel",
          "stepTheme": "Receveur universel",
          "stepBadge": "Receveur universel",
          "paragraphText": "Le groupe AB peut recevoir du sang de tous les groupes du système ABO : c'est le receveur universel.",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p05_q2",
            "type": "mcq",
            "prompt": "Dans le système ABO, quel groupe sanguin peut recevoir du sang des groupes A, B, AB et O ?",
            "options": [
              "Le groupe O",
              "Le groupe AB",
              "Le groupe A",
              "Le groupe B"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le receveur universel."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Une transfusion",
          "stepTheme": "Une transfusion",
          "stepBadge": "Une transfusion",
          "paragraphText": "Un individu du groupe A peut recevoir du sang A ou O ; un individu du groupe B, du sang B ou O.",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p05_q3",
            "type": "mcq",
            "prompt": "Un blessé du groupe A a besoin d'une transfusion. Dans le système ABO, de quels groupes peut-il recevoir du sang ?",
            "options": [
              "A ou O",
              "B ou AB",
              "AB seulement",
              "Tous les groupes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il ne doit pas recevoir de sang B ou AB."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Exclure un père",
          "stepTheme": "Exclure un père",
          "stepBadge": "Exclure un père",
          "paragraphText": "Un enfant O (O//O) reçoit un O de chaque parent : un homme AB (A//B) ne peut pas être son père.",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p05_q4",
            "type": "mcq",
            "prompt": "Un enfant est du groupe O ; sa mère est du groupe A. Un homme du groupe AB peut-il être son père ?",
            "options": [
              "Oui, c'est certain",
              "Non : un homme AB (A//B) n'a pas d'allèle O à transmettre",
              "Oui, si la mère est A//A",
              "On ne peut jamais rien dire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le groupe sanguin permet ici d'exclure cet homme."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Pas une preuve",
          "stepTheme": "Pas une preuve",
          "stepBadge": "Pas une preuve",
          "paragraphText": "Avoir un groupe compatible ne prouve pas la paternité : beaucoup d'hommes ont le même groupe. Le groupe sanguin peut exclure, pas prouver.",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p05_q5",
            "type": "mcq",
            "prompt": "Un enfant est du groupe B et un homme du groupe B affirme : « J'ai le même groupe, c'est donc la preuve que je suis son père. » A-t-il raison ?",
            "options": [
              "Oui, c'est une preuve certaine",
              "Non : un groupe compatible ne prouve pas la paternité, il peut seulement ne pas l'exclure",
              "Oui, si la mère est du groupe O",
              "Non, car le groupe sanguin n'est pas héréditaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Des millions d'hommes sont du groupe B : on utilise aujourd'hui les tests ADN."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Deux parents A",
          "stepTheme": "Deux parents A",
          "stepBadge": "Deux parents A",
          "paragraphText": "Deux parents du groupe A peuvent avoir un enfant du groupe O s'ils sont tous les deux A//O.",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p05_q6",
            "type": "mcq",
            "prompt": "Deux parents du groupe A ont un enfant du groupe O. Quels sont forcément leurs génotypes ?",
            "options": [
              "A//A et A//A",
              "A//O et A//O",
              "A//B et A//O",
              "O//O et O//O"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'enfant O//O a reçu un O de chaque parent."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "definition",
          "stepTitle": "La conclusion générale",
          "stepTheme": "La conclusion générale",
          "stepBadge": "La conclusion générale",
          "paragraphText": "Les groupes A, B, O sont déterminés par un gène autosomal à trois allèles ; le sexe est déterminé par les chromosomes sexuels, et c'est le père qui en est responsable.",
          "exercise": {
            "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p05_q7",
            "type": "mcq",
            "prompt": "Selon la conclusion générale de la leçon, comment sont déterminés le groupe sanguin ABO et le sexe ?",
            "options": [
              "Le groupe par un gène autosomal à 3 allèles (A, B, O) ; le sexe par les chromosomes sexuels apportés par le spermatozoïde",
              "Les deux par la mère seule",
              "Le groupe par le chromosome Y ; le sexe par un autosome",
              "Les deux par la nourriture"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Groupe : autosome ; sexe : X ou Y du spermatozoïde."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p05_q1",
          "type": "mcq",
          "prompt": "Dans le système ABO, quel groupe sanguin est appelé « donneur universel » ?",
          "options": [
            "Le groupe A",
            "Le groupe B",
            "Le groupe AB",
            "Le groupe O"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le groupe AB est, lui, le receveur universel."
        },
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p05_q2",
          "type": "mcq",
          "prompt": "Dans le système ABO, quel groupe sanguin peut recevoir du sang des groupes A, B, AB et O ?",
          "options": [
            "Le groupe O",
            "Le groupe AB",
            "Le groupe A",
            "Le groupe B"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le receveur universel."
        },
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p05_q3",
          "type": "mcq",
          "prompt": "Un blessé du groupe A a besoin d'une transfusion. Dans le système ABO, de quels groupes peut-il recevoir du sang ?",
          "options": [
            "A ou O",
            "B ou AB",
            "AB seulement",
            "Tous les groupes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il ne doit pas recevoir de sang B ou AB."
        },
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p05_q4",
          "type": "mcq",
          "prompt": "Un enfant est du groupe O ; sa mère est du groupe A. Un homme du groupe AB peut-il être son père ?",
          "options": [
            "Oui, c'est certain",
            "Non : un homme AB (A//B) n'a pas d'allèle O à transmettre",
            "Oui, si la mère est A//A",
            "On ne peut jamais rien dire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le groupe sanguin permet ici d'exclure cet homme."
        },
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p05_q5",
          "type": "mcq",
          "prompt": "Un enfant est du groupe B et un homme du groupe B affirme : « J'ai le même groupe, c'est donc la preuve que je suis son père. » A-t-il raison ?",
          "options": [
            "Oui, c'est une preuve certaine",
            "Non : un groupe compatible ne prouve pas la paternité, il peut seulement ne pas l'exclure",
            "Oui, si la mère est du groupe O",
            "Non, car le groupe sanguin n'est pas héréditaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Des millions d'hommes sont du groupe B : on utilise aujourd'hui les tests ADN."
        },
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p05_q6",
          "type": "mcq",
          "prompt": "Deux parents du groupe A ont un enfant du groupe O. Quels sont forcément leurs génotypes ?",
          "options": [
            "A//A et A//A",
            "A//O et A//O",
            "A//B et A//O",
            "O//O et O//O"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'enfant O//O a reçu un O de chaque parent."
        },
        {
          "id": "terminale_a_svt_l05_heredite_sexe_groupe_sanguin_p05_q7",
          "type": "mcq",
          "prompt": "Selon la conclusion générale de la leçon, comment sont déterminés le groupe sanguin ABO et le sexe ?",
          "options": [
            "Le groupe par un gène autosomal à 3 allèles (A, B, O) ; le sexe par les chromosomes sexuels apportés par le spermatozoïde",
            "Les deux par la mère seule",
            "Le groupe par le chromosome Y ; le sexe par un autosome",
            "Les deux par la nourriture"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Groupe : autosome ; sexe : X ou Y du spermatozoïde."
        }
      ]
    }
  ]
};
