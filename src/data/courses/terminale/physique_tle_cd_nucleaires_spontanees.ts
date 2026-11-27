import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 18 : Réactions nucléaires spontanées » (Terminale C/D ; format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1336
export const PHYSIQUE_TLE_CD_L18_NUCLEAIRES_SPONTANEES: CurriculumChapter = {
  "id": "terminale_c_physique_l18_nucleaires_spontanees",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 18,
  "title": "Leçon 18 : Réactions nucléaires spontanées",
  "summary": "Les noyaux instables se désintègrent spontanément (α, β⁺, β⁻, γ) en conservant A et Z ; leur nombre suit la loi N = N₀·e^(−λt), avec une demi-vie T = ln 2/λ et une activité en becquerels — la base de la datation au carbone 14.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1336",
  "points": [
    {
      "id": "terminale_c_physique_l18_nucleaires_spontanees_p01",
      "order": 1,
      "title": "Structure de l'atome et constitution du noyau",
      "summary": "L'expérience de Rutherford révèle un atome lacunaire ; le noyau contient des protons et des neutrons, caractérisés par Z, A et N = A − Z.",
      "conceptExplanation": "En bombardant une feuille mince d'or par des particules α en 1909, Rutherford constate que la grande majorité des particules traverse la feuille sans déviation, et que quelques-unes sont déviées par une charge positive contenue dans l'atome.\nIl conclut qu'un atome est principalement vide — on dit qu'il a une structure lacunaire — et qu'il est formé d'un noyau positif autour duquel gravitent, très loin, des électrons.\nLe noyau est formé de particules appelées nucléons : les protons (charge +1,602 × 10⁻¹⁹ C, masse 1,6726 × 10⁻²⁷ kg) et les neutrons (charge nulle, masse 1,6749 × 10⁻²⁷ kg).\nLe nombre de protons est le numéro atomique Z (ou nombre de charge) ; le nombre total de nucléons est le nombre de masse A ; le nombre de neutrons vaut N = A − Z.",
      "keyRule": "Atome lacunaire : noyau positif minuscule, nucléons comptés par A = Z + N.",
      "formulas": [
        {
          "name": "Nombre de neutrons",
          "formula": "N = A - Z",
          "note": "A : nombre de masse (nucléons) ; Z : numéro atomique (protons)."
        }
      ],
      "workedExample": {
        "title": "Compter les nucléons du carbone 14",
        "statement": "Le carbone 14 est noté ¹⁴₆C. Donne son nombre de protons, de nucléons et de neutrons.",
        "methodSteps": [
          "Le nombre en bas à gauche est Z = 6 : le noyau contient 6 protons.",
          "Le nombre en haut est A = 14 : il contient 14 nucléons au total.",
          "Les neutrons sont donc N = A − Z = 14 − 6 = 8."
        ],
        "conclusion": "Le carbone 14 possède 8 neutrons, contre 6 pour le carbone 12 : c'est ce qui le rend instable (point 4)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "L'expérience de Rutherford (1909)",
          "stepTheme": "L'expérience de Rutherford (1909)",
          "stepBadge": "L'expérience de Rutherford (1909)",
          "paragraphText": "Le dispositif : une source de particules α bombarde une feuille d'or très mince.\nL'observation des déviations rares mais parfois fortes est l'indice expérimental qui révèle la structure interne de l'atome.",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p01_q1",
            "type": "mcq",
            "prompt": "Dans l'expérience de Rutherford, on bombarde une feuille mince d'or avec :",
            "options": [
              "Des particules α",
              "Des électrons",
              "Des rayons X",
              "Des neutrons"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le dispositif du §1.1, réalisé en 1909."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La structure lacunaire de l'atome",
          "stepTheme": "La structure lacunaire de l'atome",
          "stepBadge": "La structure lacunaire de l'atome",
          "paragraphText": "La grande majorité des particules α traverse la feuille sans déviation : la matière est donc essentiellement du vide.\nC'est la conclusion « structure lacunaire » de Rutherford ; les rares déviations trahissent le noyau positif, petit et massif.",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p01_q2",
            "type": "mcq",
            "prompt": "Le fait que la plupart des particules α traversent la feuille d'or sans déviation montre que l'atome :",
            "options": [
              "Est plein et homogène",
              "Est principalement vide : il a une structure lacunaire",
              "N'a pas de noyau",
              "Est chargé négativement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la première conclusion de Rutherford au §1.1."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les nucléons : protons et neutrons",
          "stepTheme": "Les nucléons : protons et neutrons",
          "stepBadge": "Les nucléons : protons et neutrons",
          "paragraphText": "• Nucléons : les particules constitutives du noyau, protons et neutrons.\nLe proton porte la charge élémentaire +1,602 × 10⁻¹⁹ C ; le neutron est neutre ; leurs masses sont voisines (1,6726 et 1,6749 × 10⁻²⁷ kg).",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p01_q3",
            "type": "mcq",
            "prompt": "Le noyau d'un atome est formé de nucléons, c'est-à-dire :",
            "options": [
              "D'électrons et de protons",
              "De photons et de neutrons",
              "De protons et de neutrons",
              "De protons uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la constitution donnée au §1.2 du résumé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Z, A et N = A − Z",
          "stepTheme": "Z, A et N = A − Z",
          "stepBadge": "Z, A et N = A − Z",
          "paragraphText": "• Z : numéro atomique (ou nombre de charge), nombre de protons du noyau.\n• A : nombre de masse, nombre total de nucléons ; le nombre de neutrons s'en déduit par N = A − Z.",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p01_q4",
            "type": "mcq",
            "prompt": "Le nombre de neutrons d'un noyau de nombres A et Z est :",
            "options": [
              "N = A + Z",
              "N = Z",
              "N = A × Z",
              "N = A − Z"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la relation du §1.2 : les nucléons sont les protons plus les neutrons."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "L'unité de masse atomique u",
          "stepTheme": "L'unité de masse atomique u",
          "stepBadge": "L'unité de masse atomique u",
          "paragraphText": "En physique nucléaire, les masses s'expriment en unité de masse atomique u : le douzième de la masse de l'isotope carbone 12.\nElle vaut 1 u = 1,66 × 10⁻²⁷ kg, soit 931 MeV/c² ; le proton vaut 1,007276 u et le neutron 1,008665 u.",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p01_q5",
            "type": "mcq",
            "prompt": "L'unité de masse atomique u représente :",
            "options": [
              "Le douzième de la masse de l'isotope carbone 12",
              "La masse d'un électron",
              "La masse d'un atome d'hydrogène",
              "Un douzième de kilogramme"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §5, avec 1 u = 1,66 × 10⁻²⁷ kg = 931 MeV/c²."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre Z et A dans la notation",
          "stepTheme": "Ne pas confondre Z et A dans la notation",
          "stepBadge": "Ne pas confondre Z et A dans la notation",
          "paragraphText": "Piège de lecture : dans la notation du nucléide, le nombre de masse A s'écrit en haut à gauche du symbole, le numéro atomique Z en bas à gauche.\nPour ¹⁴₆C, on lit donc 14 nucléons et 6 protons, pas l'inverse.",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p01_q6",
            "type": "mcq",
            "prompt": "Dans la notation ¹⁴₆C, les nombres 14 et 6 représentent respectivement :",
            "options": [
              "Le nombre de protons et le nombre de neutrons",
              "Le nombre de masse A et le numéro atomique Z",
              "Le numéro atomique Z et le nombre de masse A",
              "La masse et la charge de l'atome"
            ],
            "correctAnswerIndex": 1,
            "explanation": "A en exposant, Z en indice : convention du §3 sur le nucléide."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p01_q1",
          "type": "mcq",
          "prompt": "Dans l'expérience de Rutherford, on bombarde une feuille mince d'or avec :",
          "options": [
            "Des particules α",
            "Des électrons",
            "Des rayons X",
            "Des neutrons"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le dispositif du §1.1, réalisé en 1909."
        },
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p01_q2",
          "type": "mcq",
          "prompt": "Le fait que la plupart des particules α traversent la feuille d'or sans déviation montre que l'atome :",
          "options": [
            "Est plein et homogène",
            "Est principalement vide : il a une structure lacunaire",
            "N'a pas de noyau",
            "Est chargé négativement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la première conclusion de Rutherford au §1.1."
        },
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p01_q3",
          "type": "mcq",
          "prompt": "Le noyau d'un atome est formé de nucléons, c'est-à-dire :",
          "options": [
            "D'électrons et de protons",
            "De photons et de neutrons",
            "De protons et de neutrons",
            "De protons uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la constitution donnée au §1.2 du résumé."
        },
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p01_q4",
          "type": "mcq",
          "prompt": "Le nombre de neutrons d'un noyau de nombres A et Z est :",
          "options": [
            "N = A + Z",
            "N = Z",
            "N = A × Z",
            "N = A − Z"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la relation du §1.2 : les nucléons sont les protons plus les neutrons."
        },
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p01_q5",
          "type": "mcq",
          "prompt": "L'unité de masse atomique u représente :",
          "options": [
            "Le douzième de la masse de l'isotope carbone 12",
            "La masse d'un électron",
            "La masse d'un atome d'hydrogène",
            "Un douzième de kilogramme"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §5, avec 1 u = 1,66 × 10⁻²⁷ kg = 931 MeV/c²."
        },
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p01_q6",
          "type": "mcq",
          "prompt": "Dans la notation ¹⁴₆C, les nombres 14 et 6 représentent respectivement :",
          "options": [
            "Le nombre de protons et le nombre de neutrons",
            "Le nombre de masse A et le numéro atomique Z",
            "Le numéro atomique Z et le nombre de masse A",
            "La masse et la charge de l'atome"
          ],
          "correctAnswerIndex": 1,
          "explanation": "A en exposant, Z en indice : convention du §3 sur le nucléide."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l18_nucleaires_spontanees_p02",
      "order": 2,
      "title": "Élément chimique, nucléide et isotopes",
      "summary": "Un élément regroupe les espèces de même Z ; un nucléide est un type de noyau (A, Z) ; les isotopes ont même Z et des A différents.",
      "conceptExplanation": "L'élément chimique est l'ensemble des espèces chimiques ayant le même numéro atomique Z : changer le nombre de neutrons ne change pas l'élément.\nUn nucléide est un type de noyaux caractérisé par son nombre de masse A et son numéro atomique Z ; on le note ᴬZX.\nLes isotopes sont des nucléides qui ont le même numéro atomique mais des nombres de masse différents : ¹²₆C, ¹³₆C et ¹⁴₆C sont les isotopes du carbone.\nDeux isotopes ont les mêmes propriétés chimiques (même Z, donc même cortège électronique) mais des noyaux différents — le carbone 14 est radioactif, pas le carbone 12.",
      "keyRule": "Même Z = même élément ; Z et A fixent le nucléide ; même Z, A différents = isotopes.",
      "formulas": [],
      "workedExample": {
        "title": "Les isotopes du carbone",
        "statement": "Les noyaux ¹²₆C, ¹³₆C et ¹⁴₆C sont-ils le même élément ? Le même nucléide ? Combien de neutrons chacun possède-t-il ?",
        "methodSteps": [
          "Ils ont le même Z = 6 : c'est le même élément, le carbone.",
          "Leurs A diffèrent (12, 13, 14) : ce sont trois nucléides distincts, isotopes les uns des autres.",
          "Leurs nombres de neutrons sont 6, 7 et 8."
        ],
        "conclusion": "C'est l'exemple donné au §4 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'élément chimique : une affaire de Z",
          "stepTheme": "L'élément chimique : une affaire de Z",
          "stepBadge": "L'élément chimique : une affaire de Z",
          "paragraphText": "• Élément chimique : ensemble des espèces chimiques ayant le même numéro atomique Z.\nC'est Z, et lui seul, qui décide de l'identité chimique.",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p02_q1",
            "type": "mcq",
            "prompt": "Un élément chimique est l'ensemble des espèces chimiques ayant :",
            "options": [
              "Le même numéro atomique Z",
              "Le même nombre de masse A",
              "Le même nombre de neutrons",
              "La même masse atomique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §2 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le nucléide : un type de noyau (A, Z)",
          "stepTheme": "Le nucléide : un type de noyau (A, Z)",
          "stepBadge": "Le nucléide : un type de noyau (A, Z)",
          "paragraphText": "• Nucléide : type de noyaux caractérisés par son nombre de masse A et son numéro atomique Z, noté ᴬZX.\nUn nucléide et son noyau fils d'une désintégration sont toujours deux nucléides différents.",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p02_q2",
            "type": "mcq",
            "prompt": "Un nucléide est caractérisé par :",
            "options": [
              "Son nombre de neutrons seulement",
              "Son nombre de masse A et son numéro atomique Z",
              "Sa masse en grammes",
              "Sa charge électrique totale"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition du §3 du résumé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les isotopes : même Z, A différents",
          "stepTheme": "Les isotopes : même Z, A différents",
          "stepBadge": "Les isotopes : même Z, A différents",
          "paragraphText": "• Isotopes : nucléides qui ont le même numéro atomique mais des nombres de masse différents.\nIls ne diffèrent que par leur nombre de neutrons.",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p02_q3",
            "type": "mcq",
            "prompt": "Des isotopes sont des nucléides qui ont :",
            "options": [
              "Le même A et des Z différents",
              "Le même nombre de neutrons",
              "Le même numéro atomique Z mais des nombres de masse A différents",
              "Des propriétés chimiques totalement différentes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la définition du §4, illustrée par les carbones 12, 13 et 14."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "¹²C, ¹³C, ¹⁴C : trois isotopes du carbone",
          "stepTheme": "¹²C, ¹³C, ¹⁴C : trois isotopes du carbone",
          "stepBadge": "¹²C, ¹³C, ¹⁴C : trois isotopes du carbone",
          "paragraphText": "Les trois noyaux ont 6 protons ; ils portent 6, 7 et 8 neutrons.\nSeul le carbone 14, trop riche en neutrons, est radioactif : l'isotopie a des conséquences nucléaires, pas chimiques.",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p02_q4",
            "type": "mcq",
            "prompt": "Les isotopes ¹²₆C, ¹³₆C et ¹⁴₆C diffèrent par :",
            "options": [
              "Leur nombre de protons",
              "Leur nombre d'électrons",
              "Leur élément chimique",
              "Leur nombre de neutrons : 6, 7 et 8"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Même Z = 6 ; N = A − Z donne 6, 7 et 8 neutrons."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Mêmes propriétés chimiques, noyaux différents",
          "stepTheme": "Mêmes propriétés chimiques, noyaux différents",
          "stepBadge": "Mêmes propriétés chimiques, noyaux différents",
          "paragraphText": "La chimie dépend de Z et du cortège électronique : les isotopes d'un élément réagissent de la même façon.\nC'est pourquoi le carbone 14 suit le carbone 12 dans la biosphère — la clé de la datation du point 6.",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p02_q5",
            "type": "mcq",
            "prompt": "Deux isotopes d'un même élément ont :",
            "options": [
              "Les mêmes propriétés chimiques, car ils ont le même Z",
              "Des propriétés chimiques opposées",
              "Le même comportement nucléaire",
              "La même stabilité"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La chimie est gouvernée par Z ; seule la physique du noyau (stabilité, radioactivité) diffère."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Isotopes ≠ même nucléide",
          "stepTheme": "Isotopes ≠ même nucléide",
          "stepBadge": "Isotopes ≠ même nucléide",
          "paragraphText": "Piège de vocabulaire : deux isotopes appartiennent au même élément mais forment deux nucléides distincts, puisque A fait partie de l'identité du nucléide.\nDire « le nucléide carbone » sans préciser A est donc incomplet.",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p02_q6",
            "type": "mcq",
            "prompt": "Le carbone 12 et le carbone 14 sont :",
            "options": [
              "Le même nucléide",
              "Deux nucléides distincts, isotopes du même élément",
              "Deux éléments différents",
              "Deux atomes d'hydrogène"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Même élément (Z = 6), mais A différent donc nucléides distincts (§3 et §4)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p02_q1",
          "type": "mcq",
          "prompt": "Un élément chimique est l'ensemble des espèces chimiques ayant :",
          "options": [
            "Le même numéro atomique Z",
            "Le même nombre de masse A",
            "Le même nombre de neutrons",
            "La même masse atomique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §2 du résumé."
        },
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p02_q2",
          "type": "mcq",
          "prompt": "Un nucléide est caractérisé par :",
          "options": [
            "Son nombre de neutrons seulement",
            "Son nombre de masse A et son numéro atomique Z",
            "Sa masse en grammes",
            "Sa charge électrique totale"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition du §3 du résumé."
        },
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p02_q3",
          "type": "mcq",
          "prompt": "Des isotopes sont des nucléides qui ont :",
          "options": [
            "Le même A et des Z différents",
            "Le même nombre de neutrons",
            "Le même numéro atomique Z mais des nombres de masse A différents",
            "Des propriétés chimiques totalement différentes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la définition du §4, illustrée par les carbones 12, 13 et 14."
        },
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p02_q4",
          "type": "mcq",
          "prompt": "Les isotopes ¹²₆C, ¹³₆C et ¹⁴₆C diffèrent par :",
          "options": [
            "Leur nombre de protons",
            "Leur nombre d'électrons",
            "Leur élément chimique",
            "Leur nombre de neutrons : 6, 7 et 8"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Même Z = 6 ; N = A − Z donne 6, 7 et 8 neutrons."
        },
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p02_q5",
          "type": "mcq",
          "prompt": "Deux isotopes d'un même élément ont :",
          "options": [
            "Les mêmes propriétés chimiques, car ils ont le même Z",
            "Des propriétés chimiques opposées",
            "Le même comportement nucléaire",
            "La même stabilité"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La chimie est gouvernée par Z ; seule la physique du noyau (stabilité, radioactivité) diffère."
        },
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p02_q6",
          "type": "mcq",
          "prompt": "Le carbone 12 et le carbone 14 sont :",
          "options": [
            "Le même nucléide",
            "Deux nucléides distincts, isotopes du même élément",
            "Deux éléments différents",
            "Deux atomes d'hydrogène"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Même élément (Z = 6), mais A différent donc nucléides distincts (§3 et §4)."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l18_nucleaires_spontanees_p03",
      "order": 3,
      "title": "La radioactivité et ses émissions",
      "summary": "Désintégration spontanée de noyaux instables : le noyau père donne un noyau fils, avec émission de particules α, β⁺ ou β⁻ et souvent un rayonnement γ.",
      "conceptExplanation": "La radioactivité, ou désintégration radioactive, est la décomposition spontanée de certains noyaux instables, naturels ou artificiels.\nCette désintégration s'accompagne de l'émission de particules et d'un rayonnement électromagnétique γ ; le noyau qui subit la désintégration est appelé « noyau père » et donne naissance à un nouveau noyau, le « noyau fils ».\nSelon le radionucléide, les particules émises sont : α, un noyau d'hélium ⁴₂He de charge +2e et de masse 4 u ; β⁺, un positon ⁰₁e de charge +e et de masse 5,5 × 10⁻⁴ u ; β⁻, un électron ⁰₋₁e de charge −e et de même masse.\nLe rayonnement γ transporte de l'énergie et est caractérisé par une fréquence très élevée, de l'ordre de 10²¹ Hz ; il est de la même nature que la lumière ou les ondes radio.",
      "keyRule": "Radioactivité : père → fils + particule (α, β⁺, β⁻) et souvent γ ; le nom vient de la particule émise.",
      "formulas": [],
      "workedExample": {
        "title": "Identifier les trois particules du tableau",
        "statement": "Donne, pour chacune des particules α, β⁺ et β⁻ : son symbole nucléaire, sa charge et sa masse.",
        "methodSteps": [
          "α : noyau d'hélium ⁴₂He, charge +2e, masse 4 u.",
          "β⁺ : positon ⁰₁e, charge +e, masse 5,5 × 10⁻⁴ u.",
          "β⁻ : électron ⁰₋₁e, charge −e, masse 5,5 × 10⁻⁴ u."
        ],
        "conclusion": "C'est le tableau du §6.2 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition de la radioactivité",
          "stepTheme": "La définition de la radioactivité",
          "stepBadge": "La définition de la radioactivité",
          "paragraphText": "• Radioactivité : décomposition spontanée de certains noyaux instables, naturels ou artificiels.\n« Spontanée » signifie qu'elle ne requiert ni apport extérieur ni déclenchement : elle est aléatoire et inéluctable pour le noyau instable.",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p03_q1",
            "type": "mcq",
            "prompt": "La radioactivité est :",
            "options": [
              "La décomposition spontanée de certains noyaux instables",
              "Une réaction chimique très lente",
              "L'émission de lumière par un métal chaud",
              "La fission provoquée par des neutrons"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §6.1 ; la fission provoquée fait l'objet de la leçon 19."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Noyau père et noyau fils",
          "stepTheme": "Noyau père et noyau fils",
          "stepBadge": "Noyau père et noyau fils",
          "paragraphText": "Le noyau qui subit la désintégration est le noyau père ; le nouveau noyau formé est le noyau fils.\nAprès émission α ou β, le fils est en général un nucléide différent du père.",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p03_q2",
            "type": "mcq",
            "prompt": "Dans une désintégration radioactive, le noyau de départ et le noyau formé s'appellent respectivement :",
            "options": [
              "Noyau fils et noyau père",
              "Noyau père et noyau fils",
              "Isotope et nucléide",
              "Proton et neutron"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le vocabulaire du §6.1 du résumé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La particule α : un noyau d'hélium",
          "stepTheme": "La particule α : un noyau d'hélium",
          "stepBadge": "La particule α : un noyau d'hélium",
          "paragraphText": "La particule α n'est pas une particule élémentaire : c'est un noyau d'hélium complet, 2 protons et 2 neutrons.\nElle porte donc la charge +2e et une masse de 4 u, de loin la plus lourde des trois émissions.",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p03_q3",
            "type": "mcq",
            "prompt": "La particule α est :",
            "options": [
              "Un électron rapide",
              "Un photon très énergétique",
              "Un noyau d'hélium ⁴₂He, de charge +2e et de masse 4 u",
              "Un proton seul"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la première ligne du tableau du §6.2."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "β⁺ le positon, β⁻ l'électron",
          "stepTheme": "β⁺ le positon, β⁻ l'électron",
          "stepBadge": "β⁺ le positon, β⁻ l'électron",
          "paragraphText": "Les deux particules β ont la même masse minuscule (5,5 × 10⁻⁴ u, celle de l'électron) mais des charges opposées.\nLe β⁻ est un électron ordinaire ; le β⁺ est son antiparticule, le positon, de charge +e.",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p03_q4",
            "type": "mcq",
            "prompt": "Les particules β⁺ et β⁻ sont respectivement :",
            "options": [
              "Un électron et un positon",
              "Deux électrons de vitesses différentes",
              "Un proton et un neutron",
              "Un positon (charge +e) et un électron (charge −e), de même masse 5,5 × 10⁻⁴ u"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Ce sont les lignes β du tableau du §6.2."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le rayonnement γ : une onde EM de très haute fréquence",
          "stepTheme": "Le rayonnement γ : une onde EM de très haute fréquence",
          "stepBadge": "Le rayonnement γ : une onde EM de très haute fréquence",
          "paragraphText": "Le rayonnement γ n'est pas une particule matérielle : c'est un rayonnement électromagnétique, de même nature que la lumière ou les ondes radio.\nSa fréquence, de l'ordre de 10²¹ Hz, le place très au-delà de l'ultraviolet : il transporte une grande énergie.",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p03_q5",
            "type": "mcq",
            "prompt": "Le rayonnement γ émis lors des désintégrations est :",
            "options": [
              "Un rayonnement électromagnétique de fréquence de l'ordre de 10²¹ Hz, de même nature que la lumière",
              "Un faisceau d'électrons",
              "Un faisceau de noyaux d'hélium",
              "Une onde sonore"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la précision qui suit le tableau du §6.2."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Le nom de la radioactivité vient de la particule",
          "stepTheme": "Le nom de la radioactivité vient de la particule",
          "stepBadge": "Le nom de la radioactivité vient de la particule",
          "paragraphText": "Selon le type de radionucléide, on obtient des particules α, β⁺ ou β⁻.\nLe nom de la radioactivité est donc lié à la nature des particules émises : radioactivité α, β⁺ ou β⁻.",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p03_q6",
            "type": "mcq",
            "prompt": "On parle de radioactivité β⁻ lorsqu'un noyau émet :",
            "options": [
              "Un noyau d'hélium",
              "Un électron",
              "Un positon",
              "Uniquement un rayonnement γ"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le nom de la radioactivité est lié à la nature des particules émises (§6.2)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p03_q1",
          "type": "mcq",
          "prompt": "La radioactivité est :",
          "options": [
            "La décomposition spontanée de certains noyaux instables",
            "Une réaction chimique très lente",
            "L'émission de lumière par un métal chaud",
            "La fission provoquée par des neutrons"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §6.1 ; la fission provoquée fait l'objet de la leçon 19."
        },
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p03_q2",
          "type": "mcq",
          "prompt": "Dans une désintégration radioactive, le noyau de départ et le noyau formé s'appellent respectivement :",
          "options": [
            "Noyau fils et noyau père",
            "Noyau père et noyau fils",
            "Isotope et nucléide",
            "Proton et neutron"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le vocabulaire du §6.1 du résumé."
        },
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p03_q3",
          "type": "mcq",
          "prompt": "La particule α est :",
          "options": [
            "Un électron rapide",
            "Un photon très énergétique",
            "Un noyau d'hélium ⁴₂He, de charge +2e et de masse 4 u",
            "Un proton seul"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la première ligne du tableau du §6.2."
        },
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p03_q4",
          "type": "mcq",
          "prompt": "Les particules β⁺ et β⁻ sont respectivement :",
          "options": [
            "Un électron et un positon",
            "Deux électrons de vitesses différentes",
            "Un proton et un neutron",
            "Un positon (charge +e) et un électron (charge −e), de même masse 5,5 × 10⁻⁴ u"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Ce sont les lignes β du tableau du §6.2."
        },
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p03_q5",
          "type": "mcq",
          "prompt": "Le rayonnement γ émis lors des désintégrations est :",
          "options": [
            "Un rayonnement électromagnétique de fréquence de l'ordre de 10²¹ Hz, de même nature que la lumière",
            "Un faisceau d'électrons",
            "Un faisceau de noyaux d'hélium",
            "Une onde sonore"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la précision qui suit le tableau du §6.2."
        },
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p03_q6",
          "type": "mcq",
          "prompt": "On parle de radioactivité β⁻ lorsqu'un noyau émet :",
          "options": [
            "Un noyau d'hélium",
            "Un électron",
            "Un positon",
            "Uniquement un rayonnement γ"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le nom de la radioactivité est lié à la nature des particules émises (§6.2)."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l18_nucleaires_spontanees_p04",
      "order": 4,
      "title": "Lois de conservation et les trois radioactivités",
      "summary": "A et Z se conservent : α fait perdre 4 nucléons et 2 charges ; β⁺ fait baisser Z de 1 (proton → neutron) ; β⁻ fait monter Z de 1 (neutron → proton) ; γ accompagne la désexcitation.",
      "conceptExplanation": "Toute désintégration ᴬZX → ᴬ¹Z₁Y + ᴬ²Z₂R vérifie les lois de conservation : conservation du nombre de charge (Z₁ + Z₂ = Z) et conservation du nombre de nucléons (A₁ + A₂ = A).\nRadioactivité α : ᴬZX → ᴬ⁻⁴Z₋₂Y + ⁴₂He ; elle s'observe pour les noyaux lourds instables (A > 200 et Z > 82) — exemple : ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He.\nRadioactivité β⁺ : ᴬZX → ᴬZ₋₁Y + ⁰₁e, pour les noyaux trop riches en protons ; le positon provient de la désintégration d'un proton du noyau : ¹₁p → ¹₀n + ⁰₁e — exemple : ¹³₇N → ¹³₆C + ⁰₁e.\nRadioactivité β⁻ : ᴬZX → ᴬZ₊₁Y + ⁰₋₁e, pour les noyaux trop riches en neutrons ; l'électron provient de la désintégration d'un neutron : ¹₀n → ¹₁p + ⁰₋₁e — exemple : ³²₁₅P → ³²₁₆S + ⁰₋₁e. Enfin, la plupart des noyaux fils naissent excités (Y*) et se désexcitent en émettant un γ.",
      "keyRule": "Conserver A et Z suffit à écrire toute équation de désintégration.",
      "formulas": [
        {
          "name": "Lois de conservation",
          "formula": "Z_1 + Z_2 = Z \\quad \\text{et} \\quad A_1 + A_2 = A",
          "note": "Valables pour toutes les réactions nucléaires de la leçon."
        }
      ],
      "workedExample": {
        "title": "L'activité d'application : compléter trois équations",
        "statement": "Complète : ¹⁴₆C → …N + ⁰₋₁e ; ¹²₇N → …C + ⁰₁e ; ²¹⁰₈₄Po → …Pb + ⁴₂He.",
        "methodSteps": [
          "β⁻ conserve A et augmente Z de 1 : ¹⁴₆C → ¹⁴₇N + ⁰₋₁e.",
          "β⁺ conserve A et diminue Z de 1 : ¹²₇N → ¹²₆C + ⁰₁e.",
          "α enlève 4 à A et 2 à Z : ²¹⁰₈₄Po → ²⁰⁶₈₂Pb + ⁴₂He."
        ],
        "conclusion": "Ce sont les trois équations complétées dans l'activité d'application du §6."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Les deux lois de conservation",
          "stepTheme": "Les deux lois de conservation",
          "stepBadge": "Les deux lois de conservation",
          "paragraphText": "Citées aussi dans l'exercice 5 : conservation de la charge électrique (Z = Z₁ + Z₂) et conservation du nombre de nucléons (A = A₁ + A₂).\nElles permettent de compléter n'importe quelle équation de désintégration sans la connaître par cœur.",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p04_q1",
            "type": "mcq",
            "prompt": "Les lois vérifiées dans toute désintégration radioactive sont la conservation :",
            "options": [
              "Du nombre de charge (Z₁ + Z₂ = Z) et du nombre de nucléons (A₁ + A₂ = A)",
              "De la masse en grammes seulement",
              "Du nombre d'électrons orbitaux",
              "De l'énergie cinétique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les lois du §6.3, rappelées à la question 1 de l'exercice 5."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La radioactivité α : A − 4, Z − 2",
          "stepTheme": "La radioactivité α : A − 4, Z − 2",
          "stepBadge": "La radioactivité α : A − 4, Z − 2",
          "paragraphText": "Éjecter un noyau d'hélium enlève 4 nucléons dont 2 protons : le fils recule de 2 cases dans la classification.\nExemple du résumé : le radium 226 donne le radon 222.",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p04_q2",
            "type": "mcq",
            "prompt": "L'équation-bilan de la radioactivité α est :",
            "options": [
              "ᴬZX → ᴬZ₊₁Y + ⁰₋₁e",
              "ᴬZX → ᴬ⁻⁴Z₋₂Y + ⁴₂He",
              "ᴬZX → ᴬZ₋₁Y + ⁰₁e",
              "ᴬZX → ᴬZX + γ"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'équation du §6.4, déduite des lois de conservation."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "α concerne les noyaux lourds (A > 200, Z > 82)",
          "stepTheme": "α concerne les noyaux lourds (A > 200, Z > 82)",
          "stepBadge": "α concerne les noyaux lourds (A > 200, Z > 82)",
          "paragraphText": "Perdre un paquet de 4 nucléons n'est favorable qu'aux très gros noyaux, trop chargés en protons.\nLe résumé fixe le domaine : noyaux lourds instables, A > 200 et Z > 82 — uranium, radium, polonium…",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p04_q3",
            "type": "mcq",
            "prompt": "La radioactivité α s'observe pour :",
            "options": [
              "Les noyaux très légers",
              "Les noyaux trop riches en neutrons",
              "Les noyaux lourds instables (A > 200 et Z > 82)",
              "Tous les noyaux sans exception"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le domaine indiqué au §6.4 du résumé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "β⁺ : les noyaux trop riches en protons",
          "stepTheme": "β⁺ : les noyaux trop riches en protons",
          "stepBadge": "β⁺ : les noyaux trop riches en protons",
          "paragraphText": "Pour rééquilibrer un excès de protons, l'un d'eux se désintègre en neutron en éjectant un positon : ¹₁p → ¹₀n + ⁰₁e.\nLe noyau fils a donc un proton de moins (Z − 1) à A constant : ¹³₇N → ¹³₆C + ⁰₁e.",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p04_q4",
            "type": "mcq",
            "prompt": "La radioactivité β⁺ concerne les noyaux trop riches en protons ; au niveau d'un nucléon, elle correspond à :",
            "options": [
              "Un neutron qui devient un proton",
              "Un électron capturé par le noyau",
              "L'émission d'un noyau d'hélium",
              "Un proton qui se désintègre en neutron et positon"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la remarque du §6.5 : le positon, qui n'existe pas dans le noyau, naît de cette désintégration."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "β⁻ : les noyaux trop riches en neutrons",
          "stepTheme": "β⁻ : les noyaux trop riches en neutrons",
          "stepBadge": "β⁻ : les noyaux trop riches en neutrons",
          "paragraphText": "Symétriquement, un neutron excédentaire se désintègre en proton en éjectant un électron : ¹₀n → ¹₁p + ⁰₋₁e.\nLe fils gagne un proton (Z + 1) à A constant : ³²₁₅P → ³²₁₆S + ⁰₋₁e, et le carbone 14 suit ce mode vers l'azote 14.",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p04_q5",
            "type": "mcq",
            "prompt": "Lors d'une désintégration β⁻, le numéro atomique du noyau fils :",
            "options": [
              "Augmente de 1, à nombre de masse constant",
              "Diminue de 1",
              "Diminue de 2",
              "Augmente de 2"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un neutron devient un proton (§6.6) : Z + 1 et A inchangé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "La désexcitation γ du noyau fils",
          "stepTheme": "La désexcitation γ du noyau fils",
          "stepBadge": "La désexcitation γ du noyau fils",
          "paragraphText": "La plupart des noyaux sont créés dans un état excité Y* à partir des radioactivités α, β⁺, β⁻.\nCet état instable est de courte durée : la désexcitation s'accompagne de l'émission d'un rayonnement γ, sans changer ni A ni Z.",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p04_q6",
            "type": "mcq",
            "prompt": "Un noyau fils créé dans un état excité Y* se désexcite en émettant :",
            "options": [
              "Une particule α",
              "Un rayonnement γ, sans changement de A ni de Z",
              "Un électron β⁻",
              "Un neutron"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la remarque qui clôt le §6 : Y* → Y + γ."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p04_q1",
          "type": "mcq",
          "prompt": "Les lois vérifiées dans toute désintégration radioactive sont la conservation :",
          "options": [
            "Du nombre de charge (Z₁ + Z₂ = Z) et du nombre de nucléons (A₁ + A₂ = A)",
            "De la masse en grammes seulement",
            "Du nombre d'électrons orbitaux",
            "De l'énergie cinétique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les lois du §6.3, rappelées à la question 1 de l'exercice 5."
        },
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p04_q2",
          "type": "mcq",
          "prompt": "L'équation-bilan de la radioactivité α est :",
          "options": [
            "ᴬZX → ᴬZ₊₁Y + ⁰₋₁e",
            "ᴬZX → ᴬ⁻⁴Z₋₂Y + ⁴₂He",
            "ᴬZX → ᴬZ₋₁Y + ⁰₁e",
            "ᴬZX → ᴬZX + γ"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'équation du §6.4, déduite des lois de conservation."
        },
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p04_q3",
          "type": "mcq",
          "prompt": "La radioactivité α s'observe pour :",
          "options": [
            "Les noyaux très légers",
            "Les noyaux trop riches en neutrons",
            "Les noyaux lourds instables (A > 200 et Z > 82)",
            "Tous les noyaux sans exception"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le domaine indiqué au §6.4 du résumé."
        },
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p04_q4",
          "type": "mcq",
          "prompt": "La radioactivité β⁺ concerne les noyaux trop riches en protons ; au niveau d'un nucléon, elle correspond à :",
          "options": [
            "Un neutron qui devient un proton",
            "Un électron capturé par le noyau",
            "L'émission d'un noyau d'hélium",
            "Un proton qui se désintègre en neutron et positon"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la remarque du §6.5 : le positon, qui n'existe pas dans le noyau, naît de cette désintégration."
        },
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p04_q5",
          "type": "mcq",
          "prompt": "Lors d'une désintégration β⁻, le numéro atomique du noyau fils :",
          "options": [
            "Augmente de 1, à nombre de masse constant",
            "Diminue de 1",
            "Diminue de 2",
            "Augmente de 2"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un neutron devient un proton (§6.6) : Z + 1 et A inchangé."
        },
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p04_q6",
          "type": "mcq",
          "prompt": "Un noyau fils créé dans un état excité Y* se désexcite en émettant :",
          "options": [
            "Une particule α",
            "Un rayonnement γ, sans changement de A ni de Z",
            "Un électron β⁻",
            "Un neutron"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la remarque qui clôt le §6 : Y* → Y + γ."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l18_nucleaires_spontanees_p05",
      "order": 5,
      "title": "La loi de décroissance radioactive et la demi-vie",
      "summary": "dN = −λN·dt donne N = N₀·e^(−λt) ; la demi-vie T = ln 2/λ caractérise chaque nucléide, indépendamment de la taille de l'échantillon.",
      "conceptExplanation": "La désintégration d'un noyau radioactif est un phénomène aléatoire : impossible de prévoir quel noyau se désintégrera, mais la loi statistique est exacte pour un grand nombre de noyaux.\nLa diminution du nombre de noyaux entre t et t + dt est proportionnelle à la durée et au nombre N de noyaux présents : dN = −λN·dt, où λ est la constante radioactive, qui caractérise le nucléide et s'exprime en s⁻¹.\nL'intégration donne la loi de décroissance radioactive : N = N₀·e^(−λt).\nLa période, ou demi-vie T, est le temps au bout duquel la moitié des noyaux initialement présents s'est désintégrée ; c'est une caractéristique du nucléide, indépendante du nombre de noyaux de l'échantillon, et T = ln 2/λ. Exemples : ²³⁵U : 4,5 × 10⁹ ans ; ¹⁴C : 5590 ans dans les applications ; ³⁰S : 3 min.",
      "keyRule": "N = N₀·e^(−λt) ; à chaque demi-vie écoulée, il reste moitié moins de noyaux.",
      "formulas": [
        {
          "name": "Loi de décroissance radioactive",
          "formula": "N = N_0 \\cdot e^{-\\lambda t}",
          "note": "N₀ : nombre de noyaux à t = 0 ; λ : constante radioactive en s⁻¹."
        },
        {
          "name": "Demi-vie (période)",
          "formula": "T = \\frac{\\ln 2}{\\lambda}",
          "note": "Temps pour diviser N par 2 ; caractéristique du nucléide."
        }
      ],
      "workedExample": {
        "title": "L'exercice 4 : T et λ du polonium 210 par la courbe",
        "statement": "Le tableau donne N/N₀ en fonction du temps pour un échantillon de polonium 210, émetteur α. En traçant −ln(N/N₀) en fonction de t, détermine la période puis la constante radioactive.",
        "methodSteps": [
          "La courbe −ln(N/N₀) = λt est une droite passant par l'origine, de pente λ.",
          "La période est l'abscisse correspondant à −ln(N/N₀) = ln 2 ≈ 0,69 : on lit T = 138 jours.",
          "On en déduit λ = ln 2/T = 5,02 × 10⁻³ par jour, soit 5,81 × 10⁻⁸ s⁻¹."
        ],
        "conclusion": "Ce sont les résultats des questions 3.1 et 3.2 de l'exercice 4."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Un phénomène aléatoire mais une loi exacte",
          "stepTheme": "Un phénomène aléatoire mais une loi exacte",
          "stepBadge": "Un phénomène aléatoire mais une loi exacte",
          "paragraphText": "À l'échelle d'un noyau, la désintégration est imprévisible ; à l'échelle d'un échantillon, la proportion qui se désintègre par unité de temps est fixe.\nC'est ce double visage — hasard individuel, loi collective — qui fonde toute la leçon.",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p05_q1",
            "type": "mcq",
            "prompt": "La désintégration d'un noyau radioactif pris isolément est un phénomène :",
            "options": [
              "Aléatoire : on ne peut pas prévoir quand il se désintégrera",
              "Parfaitement prévisible à la seconde près",
              "Provoqué par la température",
              "Réversible"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la première phrase du §7.1 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La constante radioactive λ",
          "stepTheme": "La constante radioactive λ",
          "stepBadge": "La constante radioactive λ",
          "paragraphText": "• Constante radioactive λ : coefficient de proportionnalité de dN = −λN·dt ; elle caractérise le nucléide et s'exprime en s⁻¹.\nExercice 5 : N₀ désigne le nombre initial de noyaux radioactifs présents à la date t = 0, et λ la constante radioactive du radionucléide.",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p05_q2",
            "type": "mcq",
            "prompt": "La constante radioactive λ caractérise le nucléide et s'exprime en :",
            "options": [
              "Becquerels",
              "s⁻¹ (par seconde)",
              "Joules",
              "Années"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la précision du §7.1 ; en becquerels s'exprime l'activité (point 6)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La loi N = N₀·e^(−λt)",
          "stepTheme": "La loi N = N₀·e^(−λt)",
          "stepBadge": "La loi N = N₀·e^(−λt)",
          "paragraphText": "L'intégration de dN/N = −λ·dt entre 0 et t donne ln(N/N₀) = −λt.\nLe nombre de noyaux restants décroît donc exponentiellement : c'est la courbe de décroissance radioactive du §7.3.",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p05_q3",
            "type": "mcq",
            "prompt": "La loi de décroissance radioactive s'écrit :",
            "options": [
              "N = N₀ − λt",
              "N = N₀·(1 − λt)",
              "N = N₀·e^(−λt)",
              "N = N₀·e^(λt)"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le résultat de l'intégration du §7.1."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La demi-vie T = ln 2/λ",
          "stepTheme": "La demi-vie T = ln 2/λ",
          "stepBadge": "La demi-vie T = ln 2/λ",
          "paragraphText": "• Période ou demi-vie T : temps au bout duquel la moitié des noyaux radioactifs initialement présents a été désintégrée.\nEn posant N(T) = N₀/2 dans la loi de décroissance, on obtient T = ln 2/λ.",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p05_q4",
            "type": "mcq",
            "prompt": "La demi-vie d'un nucléide est le temps au bout duquel :",
            "options": [
              "Tous les noyaux se sont désintégrés",
              "Le quart des noyaux s'est désintégré",
              "L'activité devient nulle",
              "La moitié des noyaux initialement présents s'est désintégrée"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la définition du §7.2, qui conduit à T = ln 2/λ."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "T ne dépend pas de la taille de l'échantillon",
          "stepTheme": "T ne dépend pas de la taille de l'échantillon",
          "stepBadge": "T ne dépend pas de la taille de l'échantillon",
          "paragraphText": "La demi-vie est une caractéristique du nucléide : elle ne dépend pas du nombre de noyaux que contient l'échantillon.\nUn gramme ou une tonne de carbone 14 mettront le même temps à perdre la moitié de leurs noyaux radioactifs.",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p05_q5",
            "type": "mcq",
            "prompt": "La demi-vie d'un nucléide dépend :",
            "options": [
              "Uniquement du nucléide, pas du nombre de noyaux de l'échantillon",
              "De la masse de l'échantillon",
              "De la température",
              "De l'âge de l'échantillon"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la remarque explicite du §7.2 du résumé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Des demi-vies très contrastées",
          "stepTheme": "Des demi-vies très contrastées",
          "stepBadge": "Des demi-vies très contrastées",
          "paragraphText": "Le tableau du résumé oppose l'uranium 235 (4,5 × 10⁹ ans), le carbone 14 (quelques milliers d'années) et le soufre 30 (3 minutes).\nDans l'exercice 5, la courbe du cobalt donne graphiquement T = 5,3 ans, soit λ = 0,13 par an.",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p05_q6",
            "type": "mcq",
            "prompt": "Les périodes de l'uranium 235, du carbone 14 et du soufre 30 valent respectivement environ :",
            "options": [
              "3 min ; 5 590 ans ; 4,5 × 10⁹ ans",
              "4,5 × 10⁹ ans ; quelques milliers d'années ; 3 min",
              "5 590 ans ; 4,5 × 10⁹ ans ; 3 min",
              "138 jours dans les trois cas"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le tableau d'exemples du §7.2 ; 138 jours est la période du polonium 210 (exercice 4)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p05_q1",
          "type": "mcq",
          "prompt": "La désintégration d'un noyau radioactif pris isolément est un phénomène :",
          "options": [
            "Aléatoire : on ne peut pas prévoir quand il se désintégrera",
            "Parfaitement prévisible à la seconde près",
            "Provoqué par la température",
            "Réversible"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la première phrase du §7.1 du résumé."
        },
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p05_q2",
          "type": "mcq",
          "prompt": "La constante radioactive λ caractérise le nucléide et s'exprime en :",
          "options": [
            "Becquerels",
            "s⁻¹ (par seconde)",
            "Joules",
            "Années"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la précision du §7.1 ; en becquerels s'exprime l'activité (point 6)."
        },
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p05_q3",
          "type": "mcq",
          "prompt": "La loi de décroissance radioactive s'écrit :",
          "options": [
            "N = N₀ − λt",
            "N = N₀·(1 − λt)",
            "N = N₀·e^(−λt)",
            "N = N₀·e^(λt)"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le résultat de l'intégration du §7.1."
        },
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p05_q4",
          "type": "mcq",
          "prompt": "La demi-vie d'un nucléide est le temps au bout duquel :",
          "options": [
            "Tous les noyaux se sont désintégrés",
            "Le quart des noyaux s'est désintégré",
            "L'activité devient nulle",
            "La moitié des noyaux initialement présents s'est désintégrée"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la définition du §7.2, qui conduit à T = ln 2/λ."
        },
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p05_q5",
          "type": "mcq",
          "prompt": "La demi-vie d'un nucléide dépend :",
          "options": [
            "Uniquement du nucléide, pas du nombre de noyaux de l'échantillon",
            "De la masse de l'échantillon",
            "De la température",
            "De l'âge de l'échantillon"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la remarque explicite du §7.2 du résumé."
        },
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p05_q6",
          "type": "mcq",
          "prompt": "Les périodes de l'uranium 235, du carbone 14 et du soufre 30 valent respectivement environ :",
          "options": [
            "3 min ; 5 590 ans ; 4,5 × 10⁹ ans",
            "4,5 × 10⁹ ans ; quelques milliers d'années ; 3 min",
            "5 590 ans ; 4,5 × 10⁹ ans ; 3 min",
            "138 jours dans les trois cas"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le tableau d'exemples du §7.2 ; 138 jours est la période du polonium 210 (exercice 4)."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l18_nucleaires_spontanees_p06",
      "order": 6,
      "title": "L'activité radioactive et la datation au carbone 14",
      "summary": "A = λN, en becquerels, décroît comme N ; en comparant l'activité d'un échantillon ancien à celle d'un échantillon actuel, on date les vestiges (14 930 ans pour le bois de la grotte).",
      "conceptExplanation": "L'activité d'une substance radioactive est le nombre de désintégrations par unité de temps ; elle s'exprime en becquerel (Bq) et vaut A = λN, donc A = A₀·e^(−λt).\nPour 1 mg de césium 137 de période 8,25 × 10⁸ s, l'exercice 2 obtient une activité initiale de 3,69 × 10⁹ Bq.\nLa datation au carbone 14 inverse la loi : l'activité d'application 2 compare un bois ancien (212 désintégrations par minute) à un bois jeune de même masse (1350 par minute) et obtient un âge de 14 930 ans avec T = 5590 ans.\nLa situation d'évaluation refait le calcul complet pour un objet d'art : le carbone 14 y est β⁻, sa constante vaut λ = 3,93 × 10⁻¹² s⁻¹, l'activité initiale de l'échantillon vaut 1,97 × 10⁶ Bq et son activité mesurée de 1180 Bq conduit à un âge d'environ 1,9 × 10¹² s.",
      "keyRule": "Dater = comparer A mesurée à A₀ et inverser A = A₀·e^(−λt) : t = (1/λ)·ln(A₀/A).",
      "formulas": [
        {
          "name": "Activité radioactive",
          "formula": "A = \\lambda N = A_0 \\cdot e^{-\\lambda t}",
          "note": "En becquerels (Bq) : 1 Bq = 1 désintégration par seconde."
        },
        {
          "name": "Âge d'un échantillon",
          "formula": "t = \\frac{1}{\\lambda} \\ln\\left(\\frac{A_0}{A}\\right) = \\frac{T}{\\ln 2} \\ln\\left(\\frac{A_0}{A}\\right)",
          "note": "Formule de datation utilisée dans l'activité 2 et la situation."
        }
      ],
      "workedExample": {
        "title": "L'activité d'application 2 : dater le bois de la grotte",
        "statement": "La période du carbone 14 est 5590 ans. Un bois ancien donne 212 désintégrations par minute ; un bois jeune de même masse en donne 1350. Détermine l'âge du bois ancien.",
        "methodSteps": [
          "L'activité décroît comme A = A₀·e^(−λt) : l'âge s'obtient en inversant cette loi.",
          "Avec λ = ln 2/T, l'âge vaut (T/ln 2) × ln(A₀/A).",
          "La solution obtient t = 14 930 ans."
        ],
        "conclusion": "C'est le résultat de l'activité d'application 2 du §7."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'activité : des désintégrations par seconde",
          "stepTheme": "L'activité : des désintégrations par seconde",
          "stepBadge": "L'activité : des désintégrations par seconde",
          "paragraphText": "• Activité A : nombre de désintégrations par unité de temps dans l'échantillon.\nSon unité est le becquerel : 1 Bq correspond à une désintégration par seconde.",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p06_q1",
            "type": "mcq",
            "prompt": "L'activité d'une substance radioactive est le nombre de désintégrations par unité de temps ; elle s'exprime en :",
            "options": [
              "Becquerels (Bq)",
              "s⁻¹ par noyau",
              "Joules",
              "Unités de masse atomique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition et l'unité du §7.4 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "A = λN : l'activité suit la décroissance",
          "stepTheme": "A = λN : l'activité suit la décroissance",
          "stepBadge": "A = λN : l'activité suit la décroissance",
          "paragraphText": "L'activité est le produit de la constante radioactive par le nombre de noyaux présents.\nComme N décroît en e^(−λt), l'activité fait de même : A = A₀·e^(−λt) — c'est elle qu'on mesure pour dater.",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p06_q2",
            "type": "mcq",
            "prompt": "L'activité d'un échantillon s'écrit :",
            "options": [
              "A = N/λ",
              "A = λN, et elle décroît comme e^(−λt)",
              "A = λ/N",
              "A est constante dans le temps"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la relation du §7.4 : A = λN = A₀·e^(−λt)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L'exercice 2 : 1 mg de césium 137",
          "stepTheme": "L'exercice 2 : 1 mg de césium 137",
          "stepBadge": "L'exercice 2 : 1 mg de césium 137",
          "paragraphText": "L'échantillon de césium 137 a une période de 8,25 × 10⁸ s et contient un très grand nombre de noyaux dans un seul milligramme.\nSon activité initiale atteint 3,69 × 10⁹ Bq : plusieurs milliards de désintégrations par seconde.",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p06_q3",
            "type": "mcq",
            "prompt": "L'activité initiale de l'échantillon de 1 mg de césium 137 (T = 8,25 × 10⁸ s) vaut environ :",
            "options": [
              "1 180 Bq",
              "1350 désintégrations par minute",
              "3,69 × 10⁹ Bq",
              "0,13 par an"
            ],
            "correctAnswerIndex": 2,
            "explanation": "A₀ = λ·N₀ donne 3,69 × 10⁹ Bq dans la solution de l'exercice 2."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le principe de la datation au carbone 14",
          "stepTheme": "Le principe de la datation au carbone 14",
          "stepBadge": "Le principe de la datation au carbone 14",
          "paragraphText": "Dans la biosphère, le carbone 14 se renouvelle sans cesse dans les organismes vivants, qui maintiennent sa proportion constante.\nÀ la mort de l'organisme, il cesse de consommer des composés carbonés et la concentration en ¹⁴C commence à décroître : le compte à rebours commence.",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p06_q4",
            "type": "mcq",
            "prompt": "La datation au carbone 14 repose sur le fait qu'à la mort d'un organisme :",
            "options": [
              "Le carbone 14 se transforme en carbone 12",
              "La proportion de carbone 14 augmente",
              "L'organisme continue d'échanger du carbone",
              "Il cesse de consommer des composés carbonés et la concentration en ¹⁴C commence à décroître"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est le principe exposé dans la situation d'évaluation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le bois de la grotte : 14 930 ans",
          "stepTheme": "Le bois de la grotte : 14 930 ans",
          "stepBadge": "Le bois de la grotte : 14 930 ans",
          "paragraphText": "Le bois ancien n'émet plus que 212 désintégrations par minute là où un bois jeune de même masse en émet 1350.\nL'application de la formule de datation (T = 5590 ans) donne un âge de 14 930 ans, soit près de trois demi-vies.",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p06_q5",
            "type": "mcq",
            "prompt": "L'âge du bois ancien de l'activité 2 (212 contre 1350 désintégrations par minute) est de :",
            "options": [
              "14 930 ans",
              "5 590 ans",
              "1 350 ans",
              "212 ans"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le résultat de l'activité d'application 2 ; 5 590 ans est la période utilisée."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La situation : λ = 3,93 × 10⁻¹² s⁻¹ et un objet très ancien",
          "stepTheme": "La situation : λ = 3,93 × 10⁻¹² s⁻¹ et un objet très ancien",
          "stepBadge": "La situation : λ = 3,93 × 10⁻¹² s⁻¹ et un objet très ancien",
          "paragraphText": "Pour l'objet d'art, la constante du carbone 14 vaut λ = ln 2/T avec T = 5590 ans convertie en secondes : 3,93 × 10⁻¹² s⁻¹.\nL'activité initiale de l'échantillon (10 % de carbone dans 0,1 g) vaut 1,97 × 10⁶ Bq et l'âge obtenu est d'environ 1,9 × 10¹² s.",
          "exercise": {
            "id": "terminale_c_physique_l18_nucleaires_spontanees_p06_q6",
            "type": "mcq",
            "prompt": "La constante radioactive du carbone 14 utilisée dans la situation (T = 5590 ans) vaut environ :",
            "options": [
              "0,13 par an",
              "3,93 × 10⁻¹² s⁻¹",
              "5,81 × 10⁻⁸ s⁻¹",
              "3,69 × 10⁹ Bq"
            ],
            "correctAnswerIndex": 1,
            "explanation": "λ = ln 2/T avec T convertie en secondes (question 2.2) ; 5,81 × 10⁻⁸ s⁻¹ est la constante du polonium 210."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p06_q1",
          "type": "mcq",
          "prompt": "L'activité d'une substance radioactive est le nombre de désintégrations par unité de temps ; elle s'exprime en :",
          "options": [
            "Becquerels (Bq)",
            "s⁻¹ par noyau",
            "Joules",
            "Unités de masse atomique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition et l'unité du §7.4 du résumé."
        },
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p06_q2",
          "type": "mcq",
          "prompt": "L'activité d'un échantillon s'écrit :",
          "options": [
            "A = N/λ",
            "A = λN, et elle décroît comme e^(−λt)",
            "A = λ/N",
            "A est constante dans le temps"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la relation du §7.4 : A = λN = A₀·e^(−λt)."
        },
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p06_q3",
          "type": "mcq",
          "prompt": "L'activité initiale de l'échantillon de 1 mg de césium 137 (T = 8,25 × 10⁸ s) vaut environ :",
          "options": [
            "1 180 Bq",
            "1350 désintégrations par minute",
            "3,69 × 10⁹ Bq",
            "0,13 par an"
          ],
          "correctAnswerIndex": 2,
          "explanation": "A₀ = λ·N₀ donne 3,69 × 10⁹ Bq dans la solution de l'exercice 2."
        },
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p06_q4",
          "type": "mcq",
          "prompt": "La datation au carbone 14 repose sur le fait qu'à la mort d'un organisme :",
          "options": [
            "Le carbone 14 se transforme en carbone 12",
            "La proportion de carbone 14 augmente",
            "L'organisme continue d'échanger du carbone",
            "Il cesse de consommer des composés carbonés et la concentration en ¹⁴C commence à décroître"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est le principe exposé dans la situation d'évaluation."
        },
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p06_q5",
          "type": "mcq",
          "prompt": "L'âge du bois ancien de l'activité 2 (212 contre 1350 désintégrations par minute) est de :",
          "options": [
            "14 930 ans",
            "5 590 ans",
            "1 350 ans",
            "212 ans"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le résultat de l'activité d'application 2 ; 5 590 ans est la période utilisée."
        },
        {
          "id": "terminale_c_physique_l18_nucleaires_spontanees_p06_q6",
          "type": "mcq",
          "prompt": "La constante radioactive du carbone 14 utilisée dans la situation (T = 5590 ans) vaut environ :",
          "options": [
            "0,13 par an",
            "3,93 × 10⁻¹² s⁻¹",
            "5,81 × 10⁻⁸ s⁻¹",
            "3,69 × 10⁹ Bq"
          ],
          "correctAnswerIndex": 1,
          "explanation": "λ = ln 2/T avec T convertie en secondes (question 2.2) ; 5,81 × 10⁻⁸ s⁻¹ est la constante du polonium 210."
        }
      ]
    }
  ]
};
