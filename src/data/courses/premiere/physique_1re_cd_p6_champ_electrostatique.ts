import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « PC 1ère CD P6,5 : Champ électrostatique » (leçon 6 en 1re C, 5 en 1re D).
// Fichier généré (scratchpad build_1re_pc_p4_p6.mjs) : modifier le générateur plutôt que ce fichier.
export const PHYSIQUE_1RE_CD_P6_CHAMP_ELECTROSTATIQUE: CurriculumChapter = {
  "id": "premiere_c_physique_p6_champ_electrostatique",
  "subjectId": "physique_chimie",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [
    "premiere_d"
  ],
  "order": 6,
  "title": "Leçon 6 : Champ électrostatique",
  "summary": "Forces électrostatiques, vecteur champ E(M) = F/q, lignes de champ, champ uniforme entre deux plaques (E = U/d) et pendule électrostatique. Leçon 6 en 1re C, leçon 5 en 1re D.",
  "officialVolumeHours": 4,
  "contentVersion": 2,
  "source": "PC1ère CD_P6,5 Champ élestrostatique.pdf",
  "points": [
    {
      "id": "premiere_c_physique_p6_champ_electrostatique_p01",
      "order": 1,
      "title": "Forces électrostatiques entre corps électrisés",
      "summary": "Reconnaître une force électrostatique, prévoir attraction ou répulsion et utiliser la charge élémentaire.",
      "conceptExplanation": "Situation : pendant la saison des pluies à Dabou, Essoh voit des éclairs illuminer le ciel. Son aîné lui explique qu’il s’agit de décharges entre nuages chargés, entre lesquels existent des champs électrostatiques.\n- Interaction : deux corps électrisés exercent l’un sur l’autre des forces à distance, appelées forces électrostatiques.\n- Deux charges de même signe se repoussent ; deux charges de signes opposés s’attirent.\n- Les forces $\\vec{F}_{1\\text{/}2}$ et $\\vec{F}_{2/1}$ ont la même droite d’action, la même valeur et des sens opposés.\n- Charge élémentaire : toute charge est un multiple entier de $e = 1{,}6 \\times 10^{-19}$ C ; l’électron porte la charge $-e$. Un corps qui perd des électrons devient positif, un corps qui en gagne devient négatif.\n- Loi de Coulomb (documentation) : la force entre deux charges ponctuelles est inversement proportionnelle au carré de leur distance.",
      "keyRule": "Même signe : répulsion ; signes contraires : attraction. Les deux forces sont opposées et de même valeur.",
      "formulas": [
        {
          "name": "Loi de Coulomb (documentation)",
          "formula": "F = \\frac{1}{4\\pi\\varepsilon_0}\\cdot\\frac{|Q\\,q|}{r^2}",
          "note": "r : distance entre les deux charges ponctuelles (m)"
        }
      ],
      "workedExample": {
        "title": "Charge d’un corps électrisé par frottement",
        "statement": "Un bâton de verre frotté perd $10^{10}$ électrons ($e = 1{,}6 \\times 10^{-19}\\,\\mathrm{C}$). Quel est le signe et la valeur de sa charge ? Comment se comporte-t-il avec une boule chargée négativement ?",
        "methodSteps": [
          "Il perd des charges négatives : sa charge devient positive.",
          "q = n × e = 10¹⁰ × 1,6 × 10⁻¹⁹ = 1,6 × 10⁻⁹ C.",
          "Charges de signes opposés : le bâton et la boule s’attirent."
        ],
        "conclusion": "q = +1,6 × 10⁻⁹ C ; il attire la boule chargée négativement."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Interaction",
          "stepTheme": "Force à distance",
          "stepTitle": "Une force qui agit sans contact",
          "paragraphText": "Pendant un orage, des nuages électrisés agissent les uns sur les autres sans se toucher. Deux corps électrisés exercent l’un sur l’autre des **forces à distance** appelées **forces électrostatiques**.",
          "exercise": {
            "id": "premiere_c_physique_p6_champ_electrostatique_p01_q1",
            "type": "mcq",
            "prompt": "Une règle en plastique frottée attire de petits morceaux de papier sans les toucher. Comment s’appelle la force exercée par la règle électrisée sur le papier ?",
            "options": [
              "Une force électrostatique",
              "Une force de frottement",
              "Le poids du papier",
              "Une force de contact"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La règle électrisée agit à distance sur le papier : c’est une force électrostatique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepBadge": "Attraction ou répulsion",
          "stepTheme": "Signes des charges",
          "stepTitle": "Le signe des charges décide",
          "paragraphText": "Deux charges de **même signe** se **repoussent** ; deux charges de **signes opposés** s’**attirent**.",
          "exercise": {
            "id": "premiere_c_physique_p6_champ_electrostatique_p01_q2",
            "type": "mcq",
            "prompt": "Deux petites boules portent les charges $q_1 = +2\\,\\mathrm{nC}$ et $q_2 = -3\\,\\mathrm{nC}$. Comment interagissent-elles ?",
            "options": [
              "Elles s’attirent",
              "Elles se repoussent",
              "Elles n’interagissent pas",
              "Elles se repoussent puis s’attirent"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les charges sont de signes opposés : les boules s’attirent."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepBadge": "Forces réciproques",
          "stepTheme": "Même valeur",
          "stepTitle": "Les deux forces ont la même valeur",
          "paragraphText": "Même si les charges sont différentes, $\\vec{F}_{1\\text{/}2}$ (exercée par 1 sur 2) et $\\vec{F}_{2/1}$ (exercée par 2 sur 1) ont la même droite d’action, la **même valeur** et des **sens opposés**.",
          "exercise": {
            "id": "premiere_c_physique_p6_champ_electrostatique_p01_q3",
            "type": "mcq",
            "prompt": "Une boule A de charge $+5\\,\\mathrm{nC}$ et une boule B de charge $+1\\,\\mathrm{nC}$ se repoussent. Comment se comparent la force exercée par A sur B et celle exercée par B sur A ?",
            "options": [
              "Même valeur, sens opposés",
              "La force de A sur B est 5 fois plus grande",
              "La force de B sur A est 5 fois plus grande",
              "Même valeur, même sens"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les deux forces d’interaction sont toujours opposées : même droite d’action, même valeur, sens contraires."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepBadge": "Loi de Coulomb",
          "stepTheme": "Effet de la distance",
          "stepTitle": "Effet de la distance sur la force",
          "paragraphText": "D’après la loi de Coulomb (documentation de la leçon), la force électrostatique entre deux charges ponctuelles est inversement proportionnelle au **carré** de leur distance $r$ : si $r$ double, la force est divisée par 4.",
          "exercise": {
            "id": "premiere_c_physique_p6_champ_electrostatique_p01_q4",
            "type": "mcq",
            "prompt": "Deux charges ponctuelles fixes sont séparées d’une distance $r$. On double cette distance sans changer les charges. Comment varie la valeur de la force électrostatique qu’elles exercent l’une sur l’autre ?",
            "options": [
              "Elle est divisée par 4",
              "Elle est divisée par 2",
              "Elle est multipliée par 2",
              "Elle ne change pas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$F$ est proportionnelle à $\\frac{1}{r^2}$ : avec $2r$, la force est divisée par $2^2 = 4$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Charge élémentaire",
          "stepTheme": "q = n·e",
          "stepTitle": "Charge d’un corps qui a perdu des électrons",
          "paragraphText": "Toute charge est un multiple entier de la charge élémentaire $e = 1{,}6 \\times 10^{-19}$ C. Un corps qui **perd** $n$ électrons porte la charge $q = +n\\,e$.",
          "exercise": {
            "id": "premiere_c_physique_p6_champ_electrostatique_p01_q5",
            "type": "mcq",
            "prompt": "Un bâton de verre frotté perd $10^{10}$ électrons ($e = 1{,}6 \\times 10^{-19}\\,\\mathrm{C}$). Quelle charge porte-t-il ?",
            "options": [
              "$+1{,}6 \\times 10^{-9}\\,\\mathrm{C}$",
              "$-1{,}6 \\times 10^{-9}\\,\\mathrm{C}$",
              "$+1{,}6 \\times 10^{-29}\\,\\mathrm{C}$",
              "$+10^{10}\\,\\mathrm{C}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il perd des charges négatives, il devient positif : $q = 10^{10} \\times 1{,}6 \\times 10^{-19} = 1{,}6 \\times 10^{-9}\\,\\mathrm{C}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_p6_champ_electrostatique_p01_q1",
          "type": "mcq",
          "prompt": "Une règle en plastique frottée attire de petits morceaux de papier sans les toucher. Comment s’appelle la force exercée par la règle électrisée sur le papier ?",
          "options": [
            "Une force électrostatique",
            "Une force de frottement",
            "Le poids du papier",
            "Une force de contact"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La règle électrisée agit à distance sur le papier : c’est une force électrostatique."
        },
        {
          "id": "premiere_c_physique_p6_champ_electrostatique_p01_q2",
          "type": "mcq",
          "prompt": "Deux petites boules portent les charges $q_1 = +2\\,\\mathrm{nC}$ et $q_2 = -3\\,\\mathrm{nC}$. Comment interagissent-elles ?",
          "options": [
            "Elles s’attirent",
            "Elles se repoussent",
            "Elles n’interagissent pas",
            "Elles se repoussent puis s’attirent"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les charges sont de signes opposés : les boules s’attirent."
        },
        {
          "id": "premiere_c_physique_p6_champ_electrostatique_p01_q3",
          "type": "mcq",
          "prompt": "Une boule A de charge $+5\\,\\mathrm{nC}$ et une boule B de charge $+1\\,\\mathrm{nC}$ se repoussent. Comment se comparent la force exercée par A sur B et celle exercée par B sur A ?",
          "options": [
            "Même valeur, sens opposés",
            "La force de A sur B est 5 fois plus grande",
            "La force de B sur A est 5 fois plus grande",
            "Même valeur, même sens"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les deux forces d’interaction sont toujours opposées : même droite d’action, même valeur, sens contraires."
        },
        {
          "id": "premiere_c_physique_p6_champ_electrostatique_p01_q4",
          "type": "mcq",
          "prompt": "Deux charges ponctuelles fixes sont séparées d’une distance $r$. On double cette distance sans changer les charges. Comment varie la valeur de la force électrostatique qu’elles exercent l’une sur l’autre ?",
          "options": [
            "Elle est divisée par 4",
            "Elle est divisée par 2",
            "Elle est multipliée par 2",
            "Elle ne change pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$F$ est proportionnelle à $\\frac{1}{r^2}$ : avec $2r$, la force est divisée par $2^2 = 4$."
        },
        {
          "id": "premiere_c_physique_p6_champ_electrostatique_p01_q5",
          "type": "mcq",
          "prompt": "Un bâton de verre frotté perd $10^{10}$ électrons ($e = 1{,}6 \\times 10^{-19}\\,\\mathrm{C}$). Quelle charge porte-t-il ?",
          "options": [
            "$+1{,}6 \\times 10^{-9}\\,\\mathrm{C}$",
            "$-1{,}6 \\times 10^{-9}\\,\\mathrm{C}$",
            "$+1{,}6 \\times 10^{-29}\\,\\mathrm{C}$",
            "$+10^{10}\\,\\mathrm{C}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il perd des charges négatives, il devient positif : $q = 10^{10} \\times 1{,}6 \\times 10^{-19} = 1{,}6 \\times 10^{-9}\\,\\mathrm{C}$."
        }
      ]
    },
    {
      "id": "premiere_c_physique_p6_champ_electrostatique_p02",
      "order": 2,
      "title": "Le vecteur champ électrostatique",
      "summary": "Définir E(M) = F/q, donner ses caractéristiques et calculer une force, un champ ou une charge.",
      "conceptExplanation": "- Mise en évidence : des particules de charges $q_1$, $q_2$, $q_3$ placées au même point $M$ près d’un corps électrisé subissent des forces différentes, mais le rapport $\\frac{\\vec{F}}{q}$ est le même pour toutes.\n- Définition : ce vecteur, lié au point $M$ et indépendant de la charge placée, est le vecteur champ électrostatique : $\\vec{E}(M) = \\frac{\\vec{F}}{q}$, soit $\\vec{F} = q\\vec{E}(M)$.\n- Caractéristiques de $\\vec{E}(M)$ : point d’application $M$ ; direction celle de $\\vec{F}$ ; sens celui de $\\vec{F}$ si $q > 0$, opposé à $\\vec{F}$ si $q < 0$ ; valeur $E = \\frac{F}{|q|}$.\n- Unités : $F$ en N, $q$ en C, $E$ en N·C⁻¹, c’est-à-dire en volts par mètre (V·m⁻¹).",
      "keyRule": "F = q·E : q > 0 → F dans le sens de E ; q < 0 → F de sens opposé. Valeur : F = |q| × E (E en V·m⁻¹).",
      "formulas": [
        {
          "name": "Force électrostatique et champ",
          "formula": "\\vec{F} = q\\,\\vec{E}(M) \\quad\\Leftrightarrow\\quad E = \\frac{F}{|q|}",
          "note": "F en N, q en C, E en V·m⁻¹ (= N·C⁻¹)"
        }
      ],
      "workedExample": {
        "title": "Activité d’application : retrouver la charge",
        "statement": "Une charge $q$ est placée dans un champ de valeur $E = 2 \\times 10^{3}\\,\\mathrm{V\\cdot m^{-1}}$. (1) Elle subit une force de même sens que $\\vec{E}$, de valeur $F = 6 \\times 10^{-3}\\,\\mathrm{N}$. (2) Elle subit une force de sens contraire, de valeur $F' = 2 \\times 10^{-3}\\,\\mathrm{N}$. Trouver $q$ dans chaque cas.",
        "methodSteps": [
          "(1) |q| = F ÷ E = 6 × 10⁻³ ÷ 2 × 10³ = 3 × 10⁻⁶ C ; même sens que E, donc q = +3 × 10⁻⁶ C.",
          "(2) |q| = 2 × 10⁻³ ÷ 2 × 10³ = 10⁻⁶ C ; sens contraire, donc q = −10 × 10⁻⁷ C."
        ],
        "conclusion": "Réponses du document : 1 → a) ; 2 → c)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Définition",
          "stepTheme": "E(M) = F / q",
          "stepTitle": "Un vecteur attaché au point M",
          "paragraphText": "Au voisinage d’un corps électrisé, il existe en chaque point $M$ un **vecteur champ électrostatique** $\\vec{E}(M)$. Une particule de charge $q$ placée en $M$ subit la force $\\vec{F} = q\\vec{E}(M)$. $\\vec{E}(M)$ ne dépend pas de la charge qu’on y place.",
          "exercise": {
            "id": "premiere_c_physique_p6_champ_electrostatique_p02_q1",
            "type": "mcq",
            "prompt": "On place successivement en un même point $M$, près d’un corps électrisé, des charges $q_1 = 1\\,\\mathrm{nC}$, puis $q_2 = 2\\,\\mathrm{nC}$, puis $q_3 = -1\\,\\mathrm{nC}$. Que peut-on dire du vecteur champ électrostatique $\\vec{E}(M)$ ?",
            "options": [
              "Il est le même dans les trois cas",
              "Il double quand on place $q_2$",
              "Il change de sens quand on place $q_3$",
              "Il est nul quand on place $q_3$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\vec{E}(M)$ est lié au point $M$ ; c’est la force $\\vec{F} = q\\vec{E}$ qui change avec $q$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepBadge": "Sens",
          "stepTheme": "q < 0",
          "stepTitle": "Charge négative : force opposée au champ",
          "paragraphText": "Si $q > 0$, $\\vec{F}$ et $\\vec{E}$ ont le **même sens**. Si $q < 0$, ils sont de **sens opposés**. Leur direction est toujours la même.",
          "exercise": {
            "id": "premiere_c_physique_p6_champ_electrostatique_p02_q2",
            "type": "mcq",
            "prompt": "Un électron (charge négative) placé en un point $M$ subit une force électrostatique dirigée vers la gauche. Quel est le sens du vecteur champ électrostatique $\\vec{E}(M)$ ?",
            "options": [
              "Vers la droite",
              "Vers la gauche",
              "Vers le haut",
              "On ne peut pas le savoir sans la valeur de la force"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$q < 0$ : $\\vec{E}$ est de sens opposé à $\\vec{F}$, donc vers la droite."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepBadge": "Unité",
          "stepTheme": "V·m⁻¹",
          "stepTitle": "Valeur et unité du champ",
          "paragraphText": "La valeur du champ est $E = \\frac{F}{|q|}$, avec $F$ en newtons et $q$ en coulombs. Son unité est le N·C⁻¹, qu’on écrit le plus souvent **V·m⁻¹** (volt par mètre).",
          "exercise": {
            "id": "premiere_c_physique_p6_champ_electrostatique_p02_q3",
            "type": "mcq",
            "prompt": "Dans quelle unité exprime-t-on habituellement la valeur $E$ d’un champ électrostatique ?",
            "options": [
              "En volts par mètre (V·m⁻¹)",
              "En newtons (N)",
              "En coulombs (C)",
              "En volts (V)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "1 N·C⁻¹ = 1 V·m⁻¹ : on parle de volts par mètre."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Activité 1",
          "stepTheme": "Charge positive",
          "stepTitle": "Retrouver une charge positive",
          "paragraphText": "Si la force a le **même sens** que $\\vec{E}$, la charge est positive et $q = \\frac{F}{E}$.",
          "exercise": {
            "id": "premiere_c_physique_p6_champ_electrostatique_p02_q4",
            "type": "mcq",
            "prompt": "Une charge $q$ placée dans un champ électrostatique de valeur $E = 2 \\times 10^{3}\\,\\mathrm{V\\cdot m^{-1}}$ subit une force de même sens que $\\vec{E}$, de valeur $F = 6 \\times 10^{-3}\\,\\mathrm{N}$. Que vaut $q$ ?",
            "options": [
              "$q = 3 \\times 10^{-6}\\,\\mathrm{C}$",
              "$q = -3 \\times 10^{-5}\\,\\mathrm{C}$",
              "$q = 30 \\times 10^{-6}\\,\\mathrm{C}$",
              "$q = 12\\,\\mathrm{C}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$|q| = \\frac{6 \\times 10^{-3}}{2 \\times 10^{3}} = 3 \\times 10^{-6}\\,\\mathrm{C}$, positive car $\\vec{F}$ et $\\vec{E}$ ont le même sens."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Activité 2",
          "stepTheme": "Charge négative",
          "stepTitle": "Retrouver une charge négative",
          "paragraphText": "Si la force est de **sens contraire** au champ, la charge est négative : $q = -\\frac{F}{E}$.",
          "exercise": {
            "id": "premiere_c_physique_p6_champ_electrostatique_p02_q5",
            "type": "mcq",
            "prompt": "Une charge $q$ placée dans un champ de valeur $E = 2 \\times 10^{3}\\,\\mathrm{V\\cdot m^{-1}}$ subit une force de sens contraire à $\\vec{E}$, de valeur $F = 2 \\times 10^{-3}\\,\\mathrm{N}$. Que vaut $q$ ?",
            "options": [
              "$q = -10 \\times 10^{-7}\\,\\mathrm{C}$",
              "$q = 10 \\times 10^{-7}\\,\\mathrm{C}$",
              "$q = -10 \\times 10^{-6}\\,\\mathrm{C}$",
              "$q = -4\\,\\mathrm{C}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$|q| = \\frac{2 \\times 10^{-3}}{2 \\times 10^{3}} = 10^{-6}\\,\\mathrm{C} = 10 \\times 10^{-7}\\,\\mathrm{C}$, négative car $\\vec{F}$ est opposée à $\\vec{E}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "F = |q| × E",
          "stepTheme": "Valeur de la force",
          "stepTitle": "Calculer la valeur de la force",
          "paragraphText": "Connaissant $q$ et $E$, la valeur de la force est $F = |q| \\times E$ : la valeur absolue enlève le signe, une force n’a pas de valeur négative. Pense à convertir les microcoulombs : $1\\,\\mu\\mathrm{C} = 10^{-6}$ C.",
          "exercise": {
            "id": "premiere_c_physique_p6_champ_electrostatique_p02_q6",
            "type": "mcq",
            "prompt": "Une boule de charge $q = -5\\,\\mu\\mathrm{C}$ est placée dans un champ électrostatique uniforme de valeur $E = 2 \\times 10^{3}\\,\\mathrm{V\\cdot m^{-1}}$. Quelle est la valeur de la force électrostatique qu’elle subit ?",
            "options": [
              "0,01 N",
              "−0,01 N",
              "10 000 N",
              "400 N"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$F = |q|E = 5 \\times 10^{-6} \\times 2 \\times 10^{3} = 10^{-2}\\,\\mathrm{N} = 0{,}01\\,\\mathrm{N}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_p6_champ_electrostatique_p02_q1",
          "type": "mcq",
          "prompt": "On place successivement en un même point $M$, près d’un corps électrisé, des charges $q_1 = 1\\,\\mathrm{nC}$, puis $q_2 = 2\\,\\mathrm{nC}$, puis $q_3 = -1\\,\\mathrm{nC}$. Que peut-on dire du vecteur champ électrostatique $\\vec{E}(M)$ ?",
          "options": [
            "Il est le même dans les trois cas",
            "Il double quand on place $q_2$",
            "Il change de sens quand on place $q_3$",
            "Il est nul quand on place $q_3$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\vec{E}(M)$ est lié au point $M$ ; c’est la force $\\vec{F} = q\\vec{E}$ qui change avec $q$."
        },
        {
          "id": "premiere_c_physique_p6_champ_electrostatique_p02_q2",
          "type": "mcq",
          "prompt": "Un électron (charge négative) placé en un point $M$ subit une force électrostatique dirigée vers la gauche. Quel est le sens du vecteur champ électrostatique $\\vec{E}(M)$ ?",
          "options": [
            "Vers la droite",
            "Vers la gauche",
            "Vers le haut",
            "On ne peut pas le savoir sans la valeur de la force"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$q < 0$ : $\\vec{E}$ est de sens opposé à $\\vec{F}$, donc vers la droite."
        },
        {
          "id": "premiere_c_physique_p6_champ_electrostatique_p02_q3",
          "type": "mcq",
          "prompt": "Dans quelle unité exprime-t-on habituellement la valeur $E$ d’un champ électrostatique ?",
          "options": [
            "En volts par mètre (V·m⁻¹)",
            "En newtons (N)",
            "En coulombs (C)",
            "En volts (V)"
          ],
          "correctAnswerIndex": 0,
          "explanation": "1 N·C⁻¹ = 1 V·m⁻¹ : on parle de volts par mètre."
        },
        {
          "id": "premiere_c_physique_p6_champ_electrostatique_p02_q4",
          "type": "mcq",
          "prompt": "Une charge $q$ placée dans un champ électrostatique de valeur $E = 2 \\times 10^{3}\\,\\mathrm{V\\cdot m^{-1}}$ subit une force de même sens que $\\vec{E}$, de valeur $F = 6 \\times 10^{-3}\\,\\mathrm{N}$. Que vaut $q$ ?",
          "options": [
            "$q = 3 \\times 10^{-6}\\,\\mathrm{C}$",
            "$q = -3 \\times 10^{-5}\\,\\mathrm{C}$",
            "$q = 30 \\times 10^{-6}\\,\\mathrm{C}$",
            "$q = 12\\,\\mathrm{C}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$|q| = \\frac{6 \\times 10^{-3}}{2 \\times 10^{3}} = 3 \\times 10^{-6}\\,\\mathrm{C}$, positive car $\\vec{F}$ et $\\vec{E}$ ont le même sens."
        },
        {
          "id": "premiere_c_physique_p6_champ_electrostatique_p02_q5",
          "type": "mcq",
          "prompt": "Une charge $q$ placée dans un champ de valeur $E = 2 \\times 10^{3}\\,\\mathrm{V\\cdot m^{-1}}$ subit une force de sens contraire à $\\vec{E}$, de valeur $F = 2 \\times 10^{-3}\\,\\mathrm{N}$. Que vaut $q$ ?",
          "options": [
            "$q = -10 \\times 10^{-7}\\,\\mathrm{C}$",
            "$q = 10 \\times 10^{-7}\\,\\mathrm{C}$",
            "$q = -10 \\times 10^{-6}\\,\\mathrm{C}$",
            "$q = -4\\,\\mathrm{C}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$|q| = \\frac{2 \\times 10^{-3}}{2 \\times 10^{3}} = 10^{-6}\\,\\mathrm{C} = 10 \\times 10^{-7}\\,\\mathrm{C}$, négative car $\\vec{F}$ est opposée à $\\vec{E}$."
        },
        {
          "id": "premiere_c_physique_p6_champ_electrostatique_p02_q6",
          "type": "mcq",
          "prompt": "Une boule de charge $q = -5\\,\\mu\\mathrm{C}$ est placée dans un champ électrostatique uniforme de valeur $E = 2 \\times 10^{3}\\,\\mathrm{V\\cdot m^{-1}}$. Quelle est la valeur de la force électrostatique qu’elle subit ?",
          "options": [
            "0,01 N",
            "−0,01 N",
            "10 000 N",
            "400 N"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$F = |q|E = 5 \\times 10^{-6} \\times 2 \\times 10^{3} = 10^{-2}\\,\\mathrm{N} = 0{,}01\\,\\mathrm{N}$."
        }
      ]
    },
    {
      "id": "premiere_c_physique_p6_champ_electrostatique_p03",
      "order": 3,
      "title": "Lignes de champ et spectres électrostatiques",
      "summary": "Définir une ligne de champ et reconnaître les spectres d’une charge positive, d’une charge négative et de deux charges.",
      "conceptExplanation": "- Définition : une ligne de champ est une ligne tangente, en chacun de ses points, au vecteur champ électrostatique ; elle est orientée dans le sens de $\\vec{E}$. L’ensemble des lignes de champ forme le spectre électrostatique.\n- Charge positive : spectre radial divergent (les lignes partent de la charge).\n- Charge négative : spectre radial convergent (les lignes arrivent sur la charge).\n- Deux charges de signes opposés : les lignes partent de la charge positive et aboutissent à la charge négative.\n- Deux lignes de champ ne se coupent jamais : en un point, $\\vec{E}$ n’a qu’une seule direction.",
      "keyRule": "Les lignes de champ sortent des charges positives et entrent dans les charges négatives ; E leur est tangent.",
      "formulas": [],
      "workedExample": {
        "title": "Représenter qualitativement E et F autour d’un corps chargé positivement",
        "statement": "Des particules de charges $q_1 < 0$ et $q_3 > 0$ sont placées en $M$ et $P$ autour d’un corps chargé positivement. Représenter $\\vec{E}$ et $\\vec{F}$ en chaque point.",
        "methodSteps": [
          "Autour d’un corps positif, E est radial et s’éloigne du corps, en M comme en P.",
          "En P (q₃ > 0) : F a le même sens que E, elle s’éloigne du corps (répulsion).",
          "En M (q₁ < 0) : F est opposée à E, elle est dirigée vers le corps (attraction)."
        ],
        "conclusion": "Le champ ne dépend que du corps qui le crée ; le sens de la force dépend du signe de la charge placée."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Ligne de champ",
          "stepTheme": "Tangente à E",
          "stepTitle": "Qu’est-ce qu’une ligne de champ ?",
          "paragraphText": "Une **ligne de champ** est une ligne tangente, en chacun de ses points, au vecteur champ $\\vec{E}$, et orientée dans le sens de $\\vec{E}$. L’ensemble des lignes de champ s’appelle le **spectre électrostatique**.",
          "exercise": {
            "id": "premiere_c_physique_p6_champ_electrostatique_p03_q1",
            "type": "mcq",
            "prompt": "En un point $M$ d’une ligne de champ électrostatique, comment est placé le vecteur champ $\\vec{E}(M)$ ?",
            "options": [
              "Tangent à la ligne de champ, dans son sens",
              "Perpendiculaire à la ligne de champ",
              "Tangent à la ligne, en sens contraire",
              "Dirigé vers le centre de la Terre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par définition, $\\vec{E}(M)$ est tangent à la ligne de champ qui passe par $M$ et orienté comme elle."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepBadge": "Spectres radiaux",
          "stepTheme": "Divergent ou convergent",
          "stepTitle": "Charge positive ou charge négative",
          "paragraphText": "Autour d’une charge **positive**, les lignes de champ partent de la charge : spectre **radial divergent**. Autour d’une charge **négative**, elles arrivent sur la charge : spectre **radial convergent**.",
          "exercise": {
            "id": "premiere_c_physique_p6_champ_electrostatique_p03_q2",
            "type": "mcq",
            "prompt": "Autour d’une petite sphère chargée négativement, comment sont orientées les lignes de champ électrostatique ?",
            "options": [
              "Vers la sphère (spectre radial convergent)",
              "En partant de la sphère (spectre radial divergent)",
              "En cercles autour de la sphère",
              "Parallèlement entre elles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Autour d’une charge négative, le champ est dirigé vers la charge : les lignes convergent vers elle."
          },
          "visualSchema": {
            "type": "geometry_svg",
            "title": "Spectres radiaux : charge positive et charge négative",
            "caption": "Les lignes de champ partent d’une charge positive (divergent) et arrivent sur une charge négative (convergent).",
            "svgContent": "<svg viewBox=\"0 0 380 170\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-md mx-auto\" font-family=\"sans-serif\">\n  <defs><marker id=\"pc6-spectre-fleche\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"10\" refX=\"8\" refY=\"5\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#7c3aed\"/></marker></defs>\n  <g stroke=\"#7c3aed\" stroke-width=\"1.6\" marker-end=\"url(#pc6-spectre-fleche)\">\n    <line x1=\"115\" y1=\"80\" x2=\"157\" y2=\"80\"/><line x1=\"109.1\" y1=\"94.1\" x2=\"138.8\" y2=\"123.8\"/>\n    <line x1=\"95\" y1=\"100\" x2=\"95\" y2=\"142\"/><line x1=\"80.9\" y1=\"94.1\" x2=\"51.2\" y2=\"123.8\"/>\n    <line x1=\"75\" y1=\"80\" x2=\"33\" y2=\"80\"/><line x1=\"80.9\" y1=\"65.9\" x2=\"51.2\" y2=\"36.2\"/>\n    <line x1=\"95\" y1=\"60\" x2=\"95\" y2=\"18\"/><line x1=\"109.1\" y1=\"65.9\" x2=\"138.8\" y2=\"36.2\"/>\n    <line x1=\"347\" y1=\"80\" x2=\"305\" y2=\"80\"/><line x1=\"328.8\" y1=\"123.8\" x2=\"299.1\" y2=\"94.1\"/>\n    <line x1=\"285\" y1=\"142\" x2=\"285\" y2=\"100\"/><line x1=\"241.2\" y1=\"123.8\" x2=\"270.9\" y2=\"94.1\"/>\n    <line x1=\"223\" y1=\"80\" x2=\"265\" y2=\"80\"/><line x1=\"241.2\" y1=\"36.2\" x2=\"270.9\" y2=\"65.9\"/>\n    <line x1=\"285\" y1=\"18\" x2=\"285\" y2=\"60\"/><line x1=\"328.8\" y1=\"36.2\" x2=\"299.1\" y2=\"65.9\"/>\n  </g>\n  <circle cx=\"95\" cy=\"80\" r=\"13\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n  <text x=\"89\" y=\"86\" font-size=\"17\" font-weight=\"bold\" fill=\"#dc2626\">+</text>\n  <circle cx=\"285\" cy=\"80\" r=\"13\" fill=\"#dbeafe\" stroke=\"#1d4ed8\" stroke-width=\"2\"/>\n  <text x=\"280\" y=\"86\" font-size=\"17\" font-weight=\"bold\" fill=\"#1d4ed8\">−</text>\n  <text x=\"95\" y=\"164\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">Radial divergent</text>\n  <text x=\"285\" y=\"164\" font-size=\"10.5\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">Radial convergent</text>\n</svg>"
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepBadge": "Deux charges",
          "stepTheme": "De + vers −",
          "stepTitle": "Spectre de deux charges de signes opposés",
          "paragraphText": "Entre une charge positive et une charge négative, les lignes de champ **partent de la charge positive** et **aboutissent à la charge négative**, en s’incurvant entre les deux.",
          "exercise": {
            "id": "premiere_c_physique_p6_champ_electrostatique_p03_q3",
            "type": "mcq",
            "prompt": "On observe le spectre de deux charges ponctuelles, l’une positive, l’autre négative. Comment sont orientées les lignes de champ qui les relient ?",
            "options": [
              "De la charge positive vers la charge négative",
              "De la charge négative vers la charge positive",
              "Elles forment des cercles fermés autour de chaque charge",
              "Elles ne relient jamais les deux charges"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les lignes sortent toujours des charges positives et entrent dans les charges négatives."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepBadge": "Sens de F",
          "stepTheme": "F ≠ E pour q < 0",
          "stepTitle": "Ne pas confondre le sens de F et celui de E",
          "paragraphText": "Près d’un corps chargé positivement, $\\vec{E}$ s’éloigne du corps. Une charge **négative** placée là subit une force **opposée** à $\\vec{E}$, donc dirigée **vers** le corps : elle est attirée.",
          "exercise": {
            "id": "premiere_c_physique_p6_champ_electrostatique_p03_q4",
            "type": "mcq",
            "prompt": "Une particule de charge $q < 0$ est placée en un point $M$ près d’un corps chargé positivement. Que peut-on dire de $\\vec{E}(M)$ et de la force $\\vec{F}$ qu’elle subit ?",
            "options": [
              "$\\vec{E}$ s’éloigne du corps, $\\vec{F}$ est dirigée vers le corps",
              "$\\vec{E}$ et $\\vec{F}$ sont dirigés vers le corps",
              "$\\vec{E}$ et $\\vec{F}$ s’éloignent du corps",
              "$\\vec{E}$ est dirigé vers le corps, $\\vec{F}$ s’en éloigne"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le champ d’un corps positif est divergent ; avec $q < 0$, $\\vec{F} = q\\vec{E}$ est de sens opposé : attraction."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Pas de croisement",
          "stepTheme": "Une seule direction",
          "stepTitle": "Deux lignes de champ ne se coupent jamais",
          "paragraphText": "En chaque point, le champ $\\vec{E}$ a une seule direction et un seul sens. Si deux lignes se croisaient, le champ aurait deux directions au même point : c’est impossible.",
          "exercise": {
            "id": "premiere_c_physique_p6_champ_electrostatique_p03_q5",
            "type": "mcq",
            "prompt": "Pourquoi deux lignes de champ électrostatique ne peuvent-elles jamais se couper ?",
            "options": [
              "Parce qu’en un point, le champ $\\vec{E}$ n’a qu’une seule direction",
              "Parce que les charges positives les repoussent",
              "Parce qu’elles sont toujours parallèles entre elles",
              "Parce que le champ est nul aux points de croisement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En un point de croisement, $\\vec{E}$ devrait être tangent à deux lignes différentes à la fois."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_p6_champ_electrostatique_p03_q1",
          "type": "mcq",
          "prompt": "En un point $M$ d’une ligne de champ électrostatique, comment est placé le vecteur champ $\\vec{E}(M)$ ?",
          "options": [
            "Tangent à la ligne de champ, dans son sens",
            "Perpendiculaire à la ligne de champ",
            "Tangent à la ligne, en sens contraire",
            "Dirigé vers le centre de la Terre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition, $\\vec{E}(M)$ est tangent à la ligne de champ qui passe par $M$ et orienté comme elle."
        },
        {
          "id": "premiere_c_physique_p6_champ_electrostatique_p03_q2",
          "type": "mcq",
          "prompt": "Autour d’une petite sphère chargée négativement, comment sont orientées les lignes de champ électrostatique ?",
          "options": [
            "Vers la sphère (spectre radial convergent)",
            "En partant de la sphère (spectre radial divergent)",
            "En cercles autour de la sphère",
            "Parallèlement entre elles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Autour d’une charge négative, le champ est dirigé vers la charge : les lignes convergent vers elle."
        },
        {
          "id": "premiere_c_physique_p6_champ_electrostatique_p03_q3",
          "type": "mcq",
          "prompt": "On observe le spectre de deux charges ponctuelles, l’une positive, l’autre négative. Comment sont orientées les lignes de champ qui les relient ?",
          "options": [
            "De la charge positive vers la charge négative",
            "De la charge négative vers la charge positive",
            "Elles forment des cercles fermés autour de chaque charge",
            "Elles ne relient jamais les deux charges"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les lignes sortent toujours des charges positives et entrent dans les charges négatives."
        },
        {
          "id": "premiere_c_physique_p6_champ_electrostatique_p03_q4",
          "type": "mcq",
          "prompt": "Une particule de charge $q < 0$ est placée en un point $M$ près d’un corps chargé positivement. Que peut-on dire de $\\vec{E}(M)$ et de la force $\\vec{F}$ qu’elle subit ?",
          "options": [
            "$\\vec{E}$ s’éloigne du corps, $\\vec{F}$ est dirigée vers le corps",
            "$\\vec{E}$ et $\\vec{F}$ sont dirigés vers le corps",
            "$\\vec{E}$ et $\\vec{F}$ s’éloignent du corps",
            "$\\vec{E}$ est dirigé vers le corps, $\\vec{F}$ s’en éloigne"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le champ d’un corps positif est divergent ; avec $q < 0$, $\\vec{F} = q\\vec{E}$ est de sens opposé : attraction."
        },
        {
          "id": "premiere_c_physique_p6_champ_electrostatique_p03_q5",
          "type": "mcq",
          "prompt": "Pourquoi deux lignes de champ électrostatique ne peuvent-elles jamais se couper ?",
          "options": [
            "Parce qu’en un point, le champ $\\vec{E}$ n’a qu’une seule direction",
            "Parce que les charges positives les repoussent",
            "Parce qu’elles sont toujours parallèles entre elles",
            "Parce que le champ est nul aux points de croisement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En un point de croisement, $\\vec{E}$ devrait être tangent à deux lignes différentes à la fois."
        }
      ]
    },
    {
      "id": "premiere_c_physique_p6_champ_electrostatique_p04",
      "order": 4,
      "title": "Champ électrostatique uniforme entre deux plaques",
      "summary": "Obtenir un champ uniforme, connaître ses lignes de champ, calculer E = U/d et en déduire la force sur une particule.",
      "conceptExplanation": "- Obtention : on applique une tension $U$ entre deux plaques métalliques parallèles ; les charges accumulées sur les plaques créent un champ électrostatique uniforme entre elles.\n- Lignes de champ : parallèles entre elles, perpendiculaires aux plaques, dirigées de la plaque positive vers la plaque négative.\n- Vecteur $\\vec{E}$ : le même en tout point ; direction perpendiculaire aux plaques ; sens de la plaque positive vers la plaque négative ; valeur $E = \\frac{U}{d}$ ($U$ en V, $d$ distance entre les plaques en m, $E$ en V·m⁻¹).\n- Pour une particule de charge $q$, la force $\\vec{F} = q\\vec{E}$ est donc constante : même valeur, même direction (perpendiculaire aux plaques) partout entre les plaques.\n- Correction du document officiel : dans l’activité d’application, la proposition « $\\vec{F}$ est parallèle aux plaques » est FAUSSE (le corrigé indique V) : $\\vec{F}$ est perpendiculaire aux plaques, comme $\\vec{E}$.",
      "keyRule": "Entre deux plaques : E = U ÷ d, perpendiculaire aux plaques, de + vers −. La force sur une charge y est la même partout.",
      "formulas": [
        {
          "name": "Champ uniforme entre deux plaques",
          "formula": "E = \\frac{U}{d}",
          "note": "U en V, d en m, E en V·m⁻¹"
        }
      ],
      "workedExample": {
        "title": "Exercice 1 corrigé : électron dans un oscillographe",
        "statement": "Entre les plaques horizontales d’un oscillographe règne un champ uniforme $E = 2\\,000\\,\\mathrm{V\\cdot m^{-1}}$, la plaque supérieure étant positive. Représenter $\\vec{E}$ et les forces sur un électron, puis comparer ces forces ($e = 1{,}6 \\times 10^{-19}\\,\\mathrm{C}$, $m = 9{,}1 \\times 10^{-31}\\,\\mathrm{kg}$, $g = 10\\,\\mathrm{N\\cdot kg^{-1}}$).",
        "methodSteps": [
          "E est vertical, dirigé vers le bas (de la plaque + vers la plaque −).",
          "Force électrostatique sur l’électron : vers le haut (q < 0) ; poids : vers le bas.",
          "F ÷ P = eE ÷ (mg) = 3,2 × 10⁻¹⁶ ÷ 9,1 × 10⁻³⁰ ≈ 3,5 × 10¹³."
        ],
        "conclusion": "Le poids de l’électron est négligeable devant la force électrostatique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Obtention",
          "stepTheme": "Deux plaques parallèles",
          "stepTitle": "Comment obtenir un champ uniforme ?",
          "paragraphText": "On applique une **tension électrique** $U$ entre deux plaques métalliques **parallèles**. Les charges accumulées sur les plaques créent entre elles un champ électrostatique **uniforme** : le même vecteur $\\vec{E}$ en tout point.",
          "exercise": {
            "id": "premiere_c_physique_p6_champ_electrostatique_p04_q1",
            "type": "mcq",
            "prompt": "Comment obtient-on, au laboratoire, un champ électrostatique uniforme ?",
            "options": [
              "En appliquant une tension entre deux plaques métalliques parallèles",
              "En plaçant une seule charge ponctuelle positive",
              "En frottant une règle en plastique",
              "En faisant passer un courant dans une bobine"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Deux plaques parallèles soumises à une tension créent entre elles un champ uniforme."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepBadge": "Lignes de champ",
          "stepTheme": "Perpendiculaires aux plaques",
          "stepTitle": "Les lignes de champ entre les plaques",
          "paragraphText": "Entre les plaques, les lignes de champ sont **parallèles entre elles**, **perpendiculaires aux plaques** et dirigées de la **plaque positive vers la plaque négative**.",
          "exercise": {
            "id": "premiere_c_physique_p6_champ_electrostatique_p04_q2",
            "type": "mcq",
            "prompt": "Deux plaques métalliques parallèles et verticales sont soumises à une tension : la plaque de gauche est positive, celle de droite négative. Comment est le champ électrostatique entre elles ?",
            "options": [
              "Horizontal, perpendiculaire aux plaques, dirigé vers la droite",
              "Horizontal, perpendiculaire aux plaques, dirigé vers la gauche",
              "Vertical, parallèle aux plaques",
              "Différent en chaque point entre les plaques"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\vec{E}$ est perpendiculaire aux plaques et va de la plaque + (gauche) vers la plaque − (droite)."
          },
          "visualSchema": {
            "type": "geometry_svg",
            "title": "Champ uniforme entre deux plaques parallèles",
            "caption": "Lignes de champ parallèles, perpendiculaires aux plaques, de la plaque + vers la plaque − ; E = U / d.",
            "svgContent": "<svg viewBox=\"0 0 380 190\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-md mx-auto\" font-family=\"sans-serif\">\n  <defs>\n    <marker id=\"pc6-plaques-ligne\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"10\" refX=\"8\" refY=\"5\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#7c3aed\"/></marker>\n    <marker id=\"pc6-plaques-e\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"10\" refX=\"8\" refY=\"5\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#1d4ed8\"/></marker>\n  </defs>\n  <rect x=\"78\" y=\"20\" width=\"6\" height=\"130\" fill=\"#dc2626\"/>\n  <rect x=\"296\" y=\"20\" width=\"6\" height=\"130\" fill=\"#1d4ed8\"/>\n  <g font-size=\"14\" font-weight=\"bold\" fill=\"#dc2626\"><text x=\"62\" y=\"40\">+</text><text x=\"62\" y=\"75\">+</text><text x=\"62\" y=\"110\">+</text><text x=\"62\" y=\"145\">+</text></g>\n  <g font-size=\"16\" font-weight=\"bold\" fill=\"#1d4ed8\"><text x=\"308\" y=\"40\">−</text><text x=\"308\" y=\"75\">−</text><text x=\"308\" y=\"110\">−</text><text x=\"308\" y=\"145\">−</text></g>\n  <g stroke=\"#7c3aed\" stroke-width=\"1.3\" stroke-dasharray=\"5 4\" marker-end=\"url(#pc6-plaques-ligne)\">\n    <line x1=\"86\" y1=\"35\" x2=\"292\" y2=\"35\"/><line x1=\"86\" y1=\"65\" x2=\"292\" y2=\"65\"/><line x1=\"86\" y1=\"95\" x2=\"292\" y2=\"95\"/><line x1=\"86\" y1=\"125\" x2=\"292\" y2=\"125\"/>\n  </g>\n  <g stroke=\"#1d4ed8\" stroke-width=\"2.5\" marker-end=\"url(#pc6-plaques-e)\">\n    <line x1=\"140\" y1=\"50\" x2=\"185\" y2=\"50\"/><line x1=\"200\" y1=\"80\" x2=\"245\" y2=\"80\"/><line x1=\"120\" y1=\"110\" x2=\"165\" y2=\"110\"/>\n  </g>\n  <g font-size=\"11\" font-weight=\"bold\" fill=\"#1d4ed8\"><text x=\"158\" y=\"45\">E</text><text x=\"218\" y=\"75\">E</text><text x=\"138\" y=\"105\">E</text></g>\n  <line x1=\"84\" y1=\"165\" x2=\"296\" y2=\"165\" stroke=\"#1e293b\" stroke-width=\"1.2\"/>\n  <polygon points=\"84,165 93,161 93,169\" fill=\"#1e293b\"/><polygon points=\"296,165 287,161 287,169\" fill=\"#1e293b\"/>\n  <text x=\"186\" y=\"180\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\">d</text>\n  <text x=\"20\" y=\"186\" font-size=\"10\" fill=\"#475569\">Plaque +</text>\n  <text x=\"318\" y=\"186\" font-size=\"10\" fill=\"#475569\">Plaque −</text>\n</svg>"
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepBadge": "E = U ÷ d",
          "stepTheme": "Distance en mètres",
          "stepTitle": "Calculer la valeur du champ uniforme",
          "paragraphText": "La valeur du champ uniforme est $E = \\frac{U}{d}$, où $U$ est la tension entre les plaques (en V) et $d$ la distance qui les sépare, en **mètres**.",
          "exercise": {
            "id": "premiere_c_physique_p6_champ_electrostatique_p04_q3",
            "type": "mcq",
            "prompt": "Deux plaques parallèles distantes de $d = 5\\,\\mathrm{cm}$ sont soumises à une tension $U = 100\\,\\mathrm{V}$. Quelle est la valeur du champ électrostatique uniforme entre elles ?",
            "options": [
              "2 000 V·m⁻¹",
              "20 V·m⁻¹",
              "500 V·m⁻¹",
              "5 V·m⁻¹"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$E = \\frac{U}{d} = \\frac{100}{0{,}05} = 2\\,000\\,\\mathrm{V\\cdot m^{-1}}$ (20 V·m⁻¹ : distance laissée en cm)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepBadge": "Direction de F",
          "stepTheme": "Correction du corrigé",
          "stepTitle": "La force est perpendiculaire aux plaques",
          "paragraphText": "Comme $\\vec{F} = q\\vec{E}$, la force a la direction du champ : **perpendiculaire** aux plaques. Le corrigé officiel de l’activité marque « $\\vec{F}$ est parallèle aux plaques » comme vrai : c’est une erreur, cette proposition est fausse.",
          "exercise": {
            "id": "premiere_c_physique_p6_champ_electrostatique_p04_q4",
            "type": "mcq",
            "prompt": "Une charge $q > 0$ est placée entre deux plaques parallèles, la plaque A étant positive et la plaque B négative. Quelles sont la direction et le sens de la force électrostatique $\\vec{F}$ qu’elle subit ?",
            "options": [
              "Perpendiculaire aux plaques, de A vers B",
              "Parallèle aux plaques",
              "Perpendiculaire aux plaques, de B vers A",
              "Variable selon la position de la charge"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$q > 0$ : $\\vec{F}$ a le sens de $\\vec{E}$, perpendiculaire aux plaques, de la plaque + (A) vers la plaque − (B)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Champ uniforme",
          "stepTheme": "F identique partout",
          "stepTitle": "La force ne dépend pas de la position",
          "paragraphText": "Le champ est uniforme : une même charge subit la **même force** (valeur, direction, sens), qu’elle soit près d’une plaque ou au milieu.",
          "exercise": {
            "id": "premiere_c_physique_p6_champ_electrostatique_p04_q5",
            "type": "mcq",
            "prompt": "Une charge $q > 0$ placée entre deux plaques parallèles chargées, tout près de la plaque positive, subit une force de valeur $F$. Si on la déplace au milieu, entre les deux plaques, que devient la valeur de la force ?",
            "options": [
              "Elle reste égale à $F$",
              "Elle devient deux fois plus petite",
              "Elle devient nulle",
              "Elle devient deux fois plus grande"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\vec{E}$ est le même partout entre les plaques, donc $\\vec{F} = q\\vec{E}$ aussi."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Électron",
          "stepTheme": "Poids négligeable",
          "stepTitle": "Le poids de l’électron est négligeable",
          "paragraphText": "Pour un électron entre les plaques d’un oscillographe ($E = 2\\,000$ V·m⁻¹), on compare la force électrostatique $F = eE$ au poids $P = mg$ : $\\frac{F}{P} = \\frac{eE}{mg} \\approx 3{,}5 \\times 10^{13}$. Le poids est négligeable.",
          "exercise": {
            "id": "premiere_c_physique_p6_champ_electrostatique_p04_q6",
            "type": "mcq",
            "prompt": "Un électron ($e = 1{,}6 \\times 10^{-19}\\,\\mathrm{C}$, $m = 9{,}1 \\times 10^{-31}\\,\\mathrm{kg}$) se trouve entre deux plaques horizontales où règne un champ uniforme $E = 2\\,000\\,\\mathrm{V\\cdot m^{-1}}$ ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). Combien de fois la force électrostatique est-elle plus grande que son poids ?",
            "options": [
              "Environ $3{,}5 \\times 10^{13}$ fois",
              "Environ $3{,}5 \\times 10^{3}$ fois",
              "Environ 2 000 fois",
              "Elles sont égales"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\frac{F}{P} = \\frac{1{,}6 \\times 10^{-19} \\times 2\\,000}{9{,}1 \\times 10^{-31} \\times 10} \\approx 3{,}5 \\times 10^{13}$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepBadge": "Sens de la force",
          "stepTheme": "Plaque supérieure +",
          "stepTitle": "Plaque supérieure positive : l’électron est poussé vers le haut",
          "paragraphText": "Si la plaque supérieure est positive, $\\vec{E}$ est dirigé vers le **bas** (de + vers −). L’électron, de charge négative, subit une force vers le **haut**, opposée à $\\vec{E}$.",
          "exercise": {
            "id": "premiere_c_physique_p6_champ_electrostatique_p04_q7",
            "type": "mcq",
            "prompt": "Entre deux plaques horizontales, la plaque supérieure est chargée positivement et la plaque inférieure négativement. Un électron se trouve entre elles. Dans quel sens est dirigée la force électrostatique qu’il subit ?",
            "options": [
              "Vers le haut, vers la plaque positive",
              "Vers le bas, vers la plaque négative",
              "Horizontalement, parallèle aux plaques",
              "Elle est nulle car l’électron est très léger"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\vec{E}$ va vers le bas ; $q = -e < 0$, donc $\\vec{F}$ est vers le haut."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_p6_champ_electrostatique_p04_q1",
          "type": "mcq",
          "prompt": "Comment obtient-on, au laboratoire, un champ électrostatique uniforme ?",
          "options": [
            "En appliquant une tension entre deux plaques métalliques parallèles",
            "En plaçant une seule charge ponctuelle positive",
            "En frottant une règle en plastique",
            "En faisant passer un courant dans une bobine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Deux plaques parallèles soumises à une tension créent entre elles un champ uniforme."
        },
        {
          "id": "premiere_c_physique_p6_champ_electrostatique_p04_q2",
          "type": "mcq",
          "prompt": "Deux plaques métalliques parallèles et verticales sont soumises à une tension : la plaque de gauche est positive, celle de droite négative. Comment est le champ électrostatique entre elles ?",
          "options": [
            "Horizontal, perpendiculaire aux plaques, dirigé vers la droite",
            "Horizontal, perpendiculaire aux plaques, dirigé vers la gauche",
            "Vertical, parallèle aux plaques",
            "Différent en chaque point entre les plaques"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\vec{E}$ est perpendiculaire aux plaques et va de la plaque + (gauche) vers la plaque − (droite)."
        },
        {
          "id": "premiere_c_physique_p6_champ_electrostatique_p04_q3",
          "type": "mcq",
          "prompt": "Deux plaques parallèles distantes de $d = 5\\,\\mathrm{cm}$ sont soumises à une tension $U = 100\\,\\mathrm{V}$. Quelle est la valeur du champ électrostatique uniforme entre elles ?",
          "options": [
            "2 000 V·m⁻¹",
            "20 V·m⁻¹",
            "500 V·m⁻¹",
            "5 V·m⁻¹"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$E = \\frac{U}{d} = \\frac{100}{0{,}05} = 2\\,000\\,\\mathrm{V\\cdot m^{-1}}$ (20 V·m⁻¹ : distance laissée en cm)."
        },
        {
          "id": "premiere_c_physique_p6_champ_electrostatique_p04_q4",
          "type": "mcq",
          "prompt": "Une charge $q > 0$ est placée entre deux plaques parallèles, la plaque A étant positive et la plaque B négative. Quelles sont la direction et le sens de la force électrostatique $\\vec{F}$ qu’elle subit ?",
          "options": [
            "Perpendiculaire aux plaques, de A vers B",
            "Parallèle aux plaques",
            "Perpendiculaire aux plaques, de B vers A",
            "Variable selon la position de la charge"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$q > 0$ : $\\vec{F}$ a le sens de $\\vec{E}$, perpendiculaire aux plaques, de la plaque + (A) vers la plaque − (B)."
        },
        {
          "id": "premiere_c_physique_p6_champ_electrostatique_p04_q5",
          "type": "mcq",
          "prompt": "Une charge $q > 0$ placée entre deux plaques parallèles chargées, tout près de la plaque positive, subit une force de valeur $F$. Si on la déplace au milieu, entre les deux plaques, que devient la valeur de la force ?",
          "options": [
            "Elle reste égale à $F$",
            "Elle devient deux fois plus petite",
            "Elle devient nulle",
            "Elle devient deux fois plus grande"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\vec{E}$ est le même partout entre les plaques, donc $\\vec{F} = q\\vec{E}$ aussi."
        },
        {
          "id": "premiere_c_physique_p6_champ_electrostatique_p04_q6",
          "type": "mcq",
          "prompt": "Un électron ($e = 1{,}6 \\times 10^{-19}\\,\\mathrm{C}$, $m = 9{,}1 \\times 10^{-31}\\,\\mathrm{kg}$) se trouve entre deux plaques horizontales où règne un champ uniforme $E = 2\\,000\\,\\mathrm{V\\cdot m^{-1}}$ ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). Combien de fois la force électrostatique est-elle plus grande que son poids ?",
          "options": [
            "Environ $3{,}5 \\times 10^{13}$ fois",
            "Environ $3{,}5 \\times 10^{3}$ fois",
            "Environ 2 000 fois",
            "Elles sont égales"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\frac{F}{P} = \\frac{1{,}6 \\times 10^{-19} \\times 2\\,000}{9{,}1 \\times 10^{-31} \\times 10} \\approx 3{,}5 \\times 10^{13}$."
        },
        {
          "id": "premiere_c_physique_p6_champ_electrostatique_p04_q7",
          "type": "mcq",
          "prompt": "Entre deux plaques horizontales, la plaque supérieure est chargée positivement et la plaque inférieure négativement. Un électron se trouve entre elles. Dans quel sens est dirigée la force électrostatique qu’il subit ?",
          "options": [
            "Vers le haut, vers la plaque positive",
            "Vers le bas, vers la plaque négative",
            "Horizontalement, parallèle aux plaques",
            "Elle est nulle car l’électron est très léger"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\vec{E}$ va vers le bas ; $q = -e < 0$, donc $\\vec{F}$ est vers le haut."
        }
      ]
    },
    {
      "id": "premiere_c_physique_p6_champ_electrostatique_p05",
      "order": 5,
      "title": "Pendule électrostatique à l’équilibre",
      "summary": "Faire le bilan des forces sur une boule chargée dans un champ uniforme horizontal et calculer force, tension, angle ou charge.",
      "conceptExplanation": "- Situation : une petite boule chargée, suspendue à un fil isolant, est placée dans un champ électrostatique uniforme horizontal. Le fil s’écarte d’un angle $\\alpha$ de la verticale.\n- Bilan des forces (référentiel terrestre supposé galiléen) : le poids $\\vec{P}$ (vertical, vers le bas), la tension du fil $\\vec{T}$ (le long du fil), la force électrostatique $\\vec{F}$ (horizontale).\n- Condition d’équilibre : $\\vec{P} + \\vec{T} + \\vec{F} = \\vec{0}$. En projetant : $F = T\\sin\\alpha$ et $P = T\\cos\\alpha$, d’où $\\tan\\alpha = \\frac{F}{P} = \\frac{|q|E}{mg}$ et $T = \\frac{F}{\\sin\\alpha}$.\n- Signe de la charge : la boule est déviée vers la plaque de signe opposé au sien.",
      "keyRule": "À l’équilibre : tan α = F ÷ P = |q|E ÷ (mg) et T = F ÷ sin α.",
      "formulas": [
        {
          "name": "Équilibre du pendule électrostatique",
          "formula": "\\tan\\alpha = \\frac{|q|\\,E}{m\\,g} \\qquad T = \\frac{F}{\\sin\\alpha}",
          "note": "α : angle du fil avec la verticale"
        }
      ],
      "workedExample": {
        "title": "Situation d’évaluation : pendule en séance de TP",
        "statement": "Une boule de masse $m = 2{,}5\\,\\mathrm{g}$, de charge $q = 1{,}44\\,\\mu\\mathrm{C}$, est placée dans un champ uniforme horizontal $E = 10^{4}\\,\\mathrm{V\\cdot m^{-1}}$ ; le fil s’écarte de $30^\\circ$ ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). Calculer $F$ et $T$, puis le nouvel angle et la nouvelle tension si $E$ double.",
        "methodSteps": [
          "F = |q|E = 1,44 × 10⁻⁶ × 10⁴ = 1,44 × 10⁻² N.",
          "Équilibre : F = T sin α, donc T = 0,0144 ÷ 0,5 = 0,0288 N.",
          "Si E double, F double : tan α′ = 2 tan 30° ≈ 1,155, donc α′ ≈ 49°.",
          "T′ = 2F ÷ sin α′ = 0,0288 ÷ sin 49,1° ≈ 0,038 N."
        ],
        "conclusion": "En doublant le champ, le fil passe de 30° à environ 49° et la tension de 0,029 N à 0,038 N."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepBadge": "Bilan des forces",
          "stepTheme": "tan α = F ÷ P",
          "stepTitle": "Les trois forces sur la boule",
          "paragraphText": "La boule à l’équilibre subit son **poids** $\\vec{P}$, la **tension du fil** $\\vec{T}$ et la **force électrostatique** $\\vec{F}$ (horizontale dans un champ horizontal). Condition d’équilibre : $\\vec{P} + \\vec{T} + \\vec{F} = \\vec{0}$, d’où $\\tan\\alpha = \\frac{F}{P}$.",
          "exercise": {
            "id": "premiere_c_physique_p6_champ_electrostatique_p05_q1",
            "type": "mcq",
            "prompt": "Une boule chargée suspendue à un fil est en équilibre dans un champ électrostatique uniforme horizontal ; le fil fait un angle $\\alpha$ avec la verticale. Quelle relation lie $\\alpha$, la force électrostatique $F$ et le poids $P$ ?",
            "options": [
              "$\\tan\\alpha = \\frac{F}{P}$",
              "$\\sin\\alpha = \\frac{F}{P}$",
              "$\\tan\\alpha = \\frac{P}{F}$",
              "$\\cos\\alpha = \\frac{F}{P}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$F = T\\sin\\alpha$ et $P = T\\cos\\alpha$ : en divisant, $\\tan\\alpha = \\frac{F}{P}$."
          },
          "visualSchema": {
            "type": "geometry_svg",
            "title": "Pendule électrostatique à l’équilibre",
            "caption": "Dans un champ horizontal : P + T + F = 0, d’où tan α = F / P.",
            "svgContent": "<svg viewBox=\"0 0 380 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-md mx-auto\" font-family=\"sans-serif\">\n  <defs>\n    <marker id=\"pc6-pend-rouge\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"10\" refX=\"8\" refY=\"5\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#dc2626\"/></marker>\n    <marker id=\"pc6-pend-vert\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"10\" refX=\"8\" refY=\"5\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#047857\"/></marker>\n    <marker id=\"pc6-pend-violet\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"10\" refX=\"8\" refY=\"5\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#7c3aed\"/></marker>\n    <marker id=\"pc6-pend-bleu\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"10\" refX=\"8\" refY=\"5\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#1d4ed8\"/></marker>\n  </defs>\n  <line x1=\"110\" y1=\"20\" x2=\"230\" y2=\"20\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n  <line x1=\"170\" y1=\"20\" x2=\"170\" y2=\"175\" stroke=\"#94a3b8\" stroke-dasharray=\"4 3\"/>\n  <line x1=\"170\" y1=\"20\" x2=\"235\" y2=\"133\" stroke=\"#334155\" stroke-width=\"1.6\"/>\n  <path d=\"M170,55 A35,35 0 0 0 187.5,50.3\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"1.5\"/>\n  <text x=\"174\" y=\"72\" font-size=\"12\" font-weight=\"bold\" fill=\"#b45309\">α</text>\n  <line x1=\"235\" y1=\"133\" x2=\"235\" y2=\"182\" stroke=\"#dc2626\" stroke-width=\"2.5\" marker-end=\"url(#pc6-pend-rouge)\"/>\n  <text x=\"242\" y=\"185\" font-size=\"12\" font-weight=\"bold\" fill=\"#dc2626\">P</text>\n  <line x1=\"235\" y1=\"133\" x2=\"288\" y2=\"133\" stroke=\"#047857\" stroke-width=\"2.5\" marker-end=\"url(#pc6-pend-vert)\"/>\n  <text x=\"292\" y=\"137\" font-size=\"12\" font-weight=\"bold\" fill=\"#047857\">F</text>\n  <line x1=\"235\" y1=\"133\" x2=\"207\" y2=\"85\" stroke=\"#7c3aed\" stroke-width=\"2.5\" marker-end=\"url(#pc6-pend-violet)\"/>\n  <text x=\"194\" y=\"100\" font-size=\"12\" font-weight=\"bold\" fill=\"#7c3aed\">T</text>\n  <circle cx=\"235\" cy=\"133\" r=\"8\" fill=\"#2563eb\"/>\n  <line x1=\"280\" y1=\"40\" x2=\"345\" y2=\"40\" stroke=\"#1d4ed8\" stroke-width=\"2.5\" marker-end=\"url(#pc6-pend-bleu)\"/>\n  <text x=\"285\" y=\"26\" font-size=\"11\" font-weight=\"bold\" fill=\"#1d4ed8\">E uniforme</text>\n</svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "Force",
          "stepTheme": "F = |q| × E",
          "stepTitle": "Force électrostatique sur la boule du TP",
          "paragraphText": "En TP, une boule de 2,5 g porte la charge $q = 1{,}44\\,\\mu$C et se trouve dans un champ horizontal $E = 10^{4}$ V·m⁻¹. La force électrostatique vaut $F = |q|E$.",
          "exercise": {
            "id": "premiere_c_physique_p6_champ_electrostatique_p05_q2",
            "type": "mcq",
            "prompt": "Une boule de charge $q = 1{,}44\\,\\mu\\mathrm{C}$ est placée dans un champ électrostatique uniforme horizontal de valeur $E = 10^{4}\\,\\mathrm{V\\cdot m^{-1}}$. Quelle est la valeur de la force électrostatique qu’elle subit ?",
            "options": [
              "$1{,}44 \\times 10^{-2}\\,\\mathrm{N}$",
              "$1{,}44 \\times 10^{-10}\\,\\mathrm{N}$",
              "$1{,}44 \\times 10^{4}\\,\\mathrm{N}$",
              "$1{,}44\\,\\mathrm{N}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$F = 1{,}44 \\times 10^{-6} \\times 10^{4} = 1{,}44 \\times 10^{-2}\\,\\mathrm{N}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Tension",
          "stepTheme": "T = F ÷ sin α",
          "stepTitle": "Tension du fil à l’équilibre",
          "paragraphText": "En projetant sur l’horizontale : $F = T\\sin\\alpha$, donc $T = \\frac{F}{\\sin\\alpha}$.",
          "exercise": {
            "id": "premiere_c_physique_p6_champ_electrostatique_p05_q3",
            "type": "mcq",
            "prompt": "Une boule chargée est en équilibre ; le fil fait un angle $\\alpha = 30^\\circ$ avec la verticale et la force électrostatique horizontale vaut $F = 1{,}44 \\times 10^{-2}\\,\\mathrm{N}$. Quelle est la tension du fil ?",
            "options": [
              "≈ 0,0288 N",
              "≈ 0,0166 N",
              "≈ 0,0072 N",
              "≈ 0,0250 N"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$T = \\frac{F}{\\sin 30^\\circ} = \\frac{0{,}0144}{0{,}5} = 0{,}0288\\,\\mathrm{N}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Champ doublé",
          "stepTheme": "tan α′ = 2 tan α",
          "stepTitle": "Nouvel angle quand on double le champ",
          "paragraphText": "Si $E$ double, $F$ double ; le poids ne change pas, donc $\\tan\\alpha' = 2\\tan\\alpha$. Attention : c’est la tangente qui double, pas l’angle.",
          "exercise": {
            "id": "premiere_c_physique_p6_champ_electrostatique_p05_q4",
            "type": "mcq",
            "prompt": "Une boule chargée est en équilibre dans un champ horizontal, le fil faisant $\\alpha = 30^\\circ$ avec la verticale. On double la valeur du champ électrostatique. Quel est le nouvel angle $\\alpha'$ du fil avec la verticale ?",
            "options": [
              "≈ 49°",
              "60°",
              "≈ 41°",
              "15°"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\tan\\alpha' = 2\\tan 30^\\circ \\approx 1{,}155$, donc $\\alpha' \\approx 49^\\circ$ (et non 60°)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Calcul d’angle",
          "stepTheme": "tan α = |q|E ÷ (mg)",
          "stepTitle": "Angle d’un pendule électrostatique",
          "paragraphText": "Avec les données, on calcule directement $\\tan\\alpha = \\frac{|q|E}{mg}$, puis $\\alpha$ avec la touche $\\tan^{-1}$ de la calculatrice.",
          "exercise": {
            "id": "premiere_c_physique_p6_champ_electrostatique_p05_q5",
            "type": "mcq",
            "prompt": "Une boule de masse $m = 5\\,\\mathrm{g}$, de charge $q = -5\\,\\mu\\mathrm{C}$, est suspendue à un fil dans un champ uniforme horizontal $E = 2 \\times 10^{3}\\,\\mathrm{V\\cdot m^{-1}}$ ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). Quel angle $\\alpha$ le fil fait-il avec la verticale à l’équilibre ?",
            "options": [
              "≈ 11,3°",
              "≈ 78,7°",
              "≈ 0,2°",
              "≈ 11,5°"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\tan\\alpha = \\frac{5 \\times 10^{-6} \\times 2\\,000}{5 \\times 10^{-3} \\times 10} = 0{,}2$, donc $\\alpha \\approx 11{,}3^\\circ$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Retrouver la charge",
          "stepTheme": "|q| = F ÷ E",
          "stepTitle": "Déduire la charge à partir de l’angle",
          "paragraphText": "Pour une sphère de 0,1 g déviée de $30^\\circ$ entre deux plaques ($U = 100$ V, $d = 5$ cm) : $F = mg\\tan\\alpha$, $E = \\frac{U}{d}$, puis $|q| = \\frac{F}{E}$.",
          "exercise": {
            "id": "premiere_c_physique_p6_champ_electrostatique_p05_q6",
            "type": "mcq",
            "prompt": "Une sphère de masse $m = 0{,}1\\,\\mathrm{g}$, suspendue à un fil entre deux plaques verticales distantes de $d = 5\\,\\mathrm{cm}$ et soumises à une tension $U = 100\\,\\mathrm{V}$, est en équilibre avec le fil incliné de $\\alpha = 30^\\circ$ ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). Quelle est la valeur absolue de sa charge ?",
            "options": [
              "$\\approx 2{,}9 \\times 10^{-7}\\,\\mathrm{C}$",
              "$\\approx 5{,}8 \\times 10^{-4}\\,\\mathrm{C}$",
              "$\\approx 2{,}9 \\times 10^{-5}\\,\\mathrm{C}$",
              "$\\approx 1{,}2 \\times 10^{-6}\\,\\mathrm{C}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$F = 10^{-4} \\times 10 \\times \\tan 30^\\circ \\approx 5{,}77 \\times 10^{-4}\\,\\mathrm{N}$ ; $E = \\frac{100}{0{,}05} = 2\\,000\\,\\mathrm{V\\cdot m^{-1}}$ ; $|q| = \\frac{F}{E} \\approx 2{,}9 \\times 10^{-7}\\,\\mathrm{C}$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepBadge": "Signe de la charge",
          "stepTheme": "Déviation",
          "stepTitle": "Le sens de la déviation donne le signe de la charge",
          "paragraphText": "La sphère est attirée par la plaque de signe **opposé** au sien. Si elle est déviée vers la plaque positive, sa charge est **négative**.",
          "exercise": {
            "id": "premiere_c_physique_p6_champ_electrostatique_p05_q7",
            "type": "mcq",
            "prompt": "Entre deux plaques verticales A (positive) et B (négative), une petite sphère chargée suspendue à un fil est déviée vers la plaque A. Quel est le signe de sa charge ?",
            "options": [
              "Négatif",
              "Positif",
              "Nul",
              "On ne peut pas savoir sans connaître sa masse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle est attirée par la plaque positive : sa charge est négative (q = −2,88 × 10⁻⁷ C dans l’exercice 4)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_p6_champ_electrostatique_p05_q1",
          "type": "mcq",
          "prompt": "Une boule chargée suspendue à un fil est en équilibre dans un champ électrostatique uniforme horizontal ; le fil fait un angle $\\alpha$ avec la verticale. Quelle relation lie $\\alpha$, la force électrostatique $F$ et le poids $P$ ?",
          "options": [
            "$\\tan\\alpha = \\frac{F}{P}$",
            "$\\sin\\alpha = \\frac{F}{P}$",
            "$\\tan\\alpha = \\frac{P}{F}$",
            "$\\cos\\alpha = \\frac{F}{P}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$F = T\\sin\\alpha$ et $P = T\\cos\\alpha$ : en divisant, $\\tan\\alpha = \\frac{F}{P}$."
        },
        {
          "id": "premiere_c_physique_p6_champ_electrostatique_p05_q2",
          "type": "mcq",
          "prompt": "Une boule de charge $q = 1{,}44\\,\\mu\\mathrm{C}$ est placée dans un champ électrostatique uniforme horizontal de valeur $E = 10^{4}\\,\\mathrm{V\\cdot m^{-1}}$. Quelle est la valeur de la force électrostatique qu’elle subit ?",
          "options": [
            "$1{,}44 \\times 10^{-2}\\,\\mathrm{N}$",
            "$1{,}44 \\times 10^{-10}\\,\\mathrm{N}$",
            "$1{,}44 \\times 10^{4}\\,\\mathrm{N}$",
            "$1{,}44\\,\\mathrm{N}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$F = 1{,}44 \\times 10^{-6} \\times 10^{4} = 1{,}44 \\times 10^{-2}\\,\\mathrm{N}$."
        },
        {
          "id": "premiere_c_physique_p6_champ_electrostatique_p05_q3",
          "type": "mcq",
          "prompt": "Une boule chargée est en équilibre ; le fil fait un angle $\\alpha = 30^\\circ$ avec la verticale et la force électrostatique horizontale vaut $F = 1{,}44 \\times 10^{-2}\\,\\mathrm{N}$. Quelle est la tension du fil ?",
          "options": [
            "≈ 0,0288 N",
            "≈ 0,0166 N",
            "≈ 0,0072 N",
            "≈ 0,0250 N"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$T = \\frac{F}{\\sin 30^\\circ} = \\frac{0{,}0144}{0{,}5} = 0{,}0288\\,\\mathrm{N}$."
        },
        {
          "id": "premiere_c_physique_p6_champ_electrostatique_p05_q4",
          "type": "mcq",
          "prompt": "Une boule chargée est en équilibre dans un champ horizontal, le fil faisant $\\alpha = 30^\\circ$ avec la verticale. On double la valeur du champ électrostatique. Quel est le nouvel angle $\\alpha'$ du fil avec la verticale ?",
          "options": [
            "≈ 49°",
            "60°",
            "≈ 41°",
            "15°"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\tan\\alpha' = 2\\tan 30^\\circ \\approx 1{,}155$, donc $\\alpha' \\approx 49^\\circ$ (et non 60°)."
        },
        {
          "id": "premiere_c_physique_p6_champ_electrostatique_p05_q5",
          "type": "mcq",
          "prompt": "Une boule de masse $m = 5\\,\\mathrm{g}$, de charge $q = -5\\,\\mu\\mathrm{C}$, est suspendue à un fil dans un champ uniforme horizontal $E = 2 \\times 10^{3}\\,\\mathrm{V\\cdot m^{-1}}$ ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). Quel angle $\\alpha$ le fil fait-il avec la verticale à l’équilibre ?",
          "options": [
            "≈ 11,3°",
            "≈ 78,7°",
            "≈ 0,2°",
            "≈ 11,5°"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\tan\\alpha = \\frac{5 \\times 10^{-6} \\times 2\\,000}{5 \\times 10^{-3} \\times 10} = 0{,}2$, donc $\\alpha \\approx 11{,}3^\\circ$."
        },
        {
          "id": "premiere_c_physique_p6_champ_electrostatique_p05_q6",
          "type": "mcq",
          "prompt": "Une sphère de masse $m = 0{,}1\\,\\mathrm{g}$, suspendue à un fil entre deux plaques verticales distantes de $d = 5\\,\\mathrm{cm}$ et soumises à une tension $U = 100\\,\\mathrm{V}$, est en équilibre avec le fil incliné de $\\alpha = 30^\\circ$ ($g = 10\\,\\mathrm{N\\cdot kg^{-1}}$). Quelle est la valeur absolue de sa charge ?",
          "options": [
            "$\\approx 2{,}9 \\times 10^{-7}\\,\\mathrm{C}$",
            "$\\approx 5{,}8 \\times 10^{-4}\\,\\mathrm{C}$",
            "$\\approx 2{,}9 \\times 10^{-5}\\,\\mathrm{C}$",
            "$\\approx 1{,}2 \\times 10^{-6}\\,\\mathrm{C}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$F = 10^{-4} \\times 10 \\times \\tan 30^\\circ \\approx 5{,}77 \\times 10^{-4}\\,\\mathrm{N}$ ; $E = \\frac{100}{0{,}05} = 2\\,000\\,\\mathrm{V\\cdot m^{-1}}$ ; $|q| = \\frac{F}{E} \\approx 2{,}9 \\times 10^{-7}\\,\\mathrm{C}$."
        },
        {
          "id": "premiere_c_physique_p6_champ_electrostatique_p05_q7",
          "type": "mcq",
          "prompt": "Entre deux plaques verticales A (positive) et B (négative), une petite sphère chargée suspendue à un fil est déviée vers la plaque A. Quel est le signe de sa charge ?",
          "options": [
            "Négatif",
            "Positif",
            "Nul",
            "On ne peut pas savoir sans connaître sa masse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle est attirée par la plaque positive : sa charge est négative (q = −2,88 × 10⁻⁷ C dans l’exercice 4)."
        }
      ]
    }
  ]
};
