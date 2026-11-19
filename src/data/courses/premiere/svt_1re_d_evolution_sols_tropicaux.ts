import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « SVT 1ère D_L9_Lévolution des sols tropicaux.pdf (Mon école à la maison ; thème « Les propriétés chimiques des sols » ; le document l’intitule « Leçon 4 ») ». Première D (programme propre à la 1re D).
// Fichier généré (scratchpad build_1re_d_svt_c.mjs) : modifier le générateur plutôt que ce fichier.
export const SVT_1RE_D_L09_EVOLUTION_SOLS_TROPICAUX: CurriculumChapter = {
  "id": "premiere_d_svt_l09_evolution_sols_tropicaux",
  "subjectId": "svt",
  "gradeLevel": "premiere_d",
  "order": 9,
  "title": "Leçon 9 : L’évolution des sols tropicaux",
  "summary": "Évolution progressive (formation des horizons, humification, climax) et régressive (érosion), migrations descendantes (lixiviation, chéluviation, lessivage) et ascendantes (croûte saline, cuirasse), propriétés et fertilité des sols.",
  "officialVolumeHours": 9,
  "contentVersion": 2,
  "source": "SVT 1ère D_L9_Lévolution des sols tropicaux.pdf (Mon école à la maison ; thème « Les propriétés chimiques des sols » ; le document l’intitule « Leçon 4 »)",
  "points": [
    {
      "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p01",
      "order": 1,
      "title": "L’évolution progressive d’un sol",
      "summary": "De la roche nue au sol évolué : gain d’horizons.",
      "conceptExplanation": "Situation : en 2018-2019, la coopérative scolaire obtient une forte récolte de maïs sur une parcelle ; l’année suivante, le rendement est faible. L’agent de l’ANADER explique que le sol de la parcelle a évolué. Les élèves veulent décrire, expliquer et caractériser cette évolution.\n- Formation d’un sol : (a) une roche mère affleure et des végétaux pionniers la colonisent ; (b) l’eau, la température et les êtres vivants altèrent la roche, qui donne une arène riche en sels minéraux ; (c) la végétation s’installe et ses débris donnent l’humus : un horizon humifère A apparaît ; (d) un horizon d’accumulation B apparaît ; (e) le sol évolué présente les horizons A1, A2, B et C.\n- L’humification est la transformation des débris végétaux en humus par les micro-organismes du sol.\n- Horizons : A1, horizon humifère (matière organique et minérale) ; A2, horizon lessivé, appauvri ; B, horizon d’accumulation ; C, roche mère altérée.\n- La végétation passe d’herbacée à arbustive puis forestière. Le sol gagne des horizons : c’est l’évolution progressive.\n- Quand le sol atteint sa maturité, sol et végétation sont en équilibre stable : c’est le climax.\n- Correction du document : son activité classe « mise à nu de la roche mère » dans l’évolution progressive. La mise à nu de la roche mère résulte de l’érosion : c’est un signe d’évolution régressive. Réponses justes : b, d, f.",
      "keyRule": "Évolution progressive : altération de la roche mère, végétation, humification, gain d’horizons (A, C → A, B, C → A1, A2, B, C) jusqu’au climax.",
      "formulas": [],
      "workedExample": {
        "title": "Reconnaître une évolution progressive",
        "statement": "Un sol passe d’un profil A, C à un profil A1, A2, B, C. Quel type d’évolution ?",
        "methodSteps": [
          "Le sol a gagné des horizons (A2, B).",
          "Un gain d’horizons traduit une évolution progressive."
        ],
        "conclusion": "C’est une évolution progressive."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Altération",
          "stepTheme": "Étapes",
          "stepTitle": "La roche mère se dégrade",
          "paragraphText": "L’**eau**, la **température** et les **êtres vivants** **altèrent** la roche mère, qui donne une **arène** riche en sels minéraux.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p01_q1",
            "type": "mcq",
            "prompt": "Quels facteurs dégradent la roche mère au début de la formation d’un sol ?",
            "options": [
              "L’eau, la température et les êtres vivants",
              "Le vent seulement",
              "Les engrais",
              "La lune"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est l’altération."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "La formation d’un sol",
            "caption": "De la roche nue au sol évolué : altération de la roche mère, installation de la végétation, formation d’humus, puis différenciation des horizons.",
            "svgContent": "<svg viewBox=\"0 0 560 226\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Évolution progressive d’un sol : roche mère nue, altération, horizon humifère, sol A B C, sol évolué A1 A2 B C\"><rect x=\"10\" y=\"40\" width=\"90\" height=\"150\" fill=\"#94A3B8\" fill-opacity=\"0.35\" stroke=\"#94A3B8\" stroke-width=\"1.4\"/><text x=\"55\" y=\"119\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">roche</text><text x=\"55\" y=\"204\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">a</text><text x=\"55\" y=\"218\" font-size=\"9.5\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">roche mère nue</text><rect x=\"120\" y=\"40\" width=\"90\" height=\"30\" fill=\"#8B5CF6\" fill-opacity=\"0.35\" stroke=\"#8B5CF6\" stroke-width=\"1.4\"/><text x=\"165\" y=\"59\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">C</text><rect x=\"120\" y=\"70\" width=\"90\" height=\"120\" fill=\"#94A3B8\" fill-opacity=\"0.35\" stroke=\"#94A3B8\" stroke-width=\"1.4\"/><text x=\"165\" y=\"134\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">roche</text><text x=\"165\" y=\"204\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">b</text><text x=\"165\" y=\"218\" font-size=\"9.5\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">altération</text><rect x=\"230\" y=\"40\" width=\"90\" height=\"30\" fill=\"#10B981\" fill-opacity=\"0.35\" stroke=\"#10B981\" stroke-width=\"1.4\"/><text x=\"275\" y=\"59\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">A</text><rect x=\"230\" y=\"70\" width=\"90\" height=\"40\" fill=\"#8B5CF6\" fill-opacity=\"0.35\" stroke=\"#8B5CF6\" stroke-width=\"1.4\"/><text x=\"275\" y=\"94\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">C</text><rect x=\"230\" y=\"110\" width=\"90\" height=\"80\" fill=\"#94A3B8\" fill-opacity=\"0.35\" stroke=\"#94A3B8\" stroke-width=\"1.4\"/><text x=\"275\" y=\"154\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">roche</text><text x=\"275\" y=\"204\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">c</text><text x=\"275\" y=\"218\" font-size=\"9.5\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">horizon humifère</text><rect x=\"340\" y=\"40\" width=\"90\" height=\"25\" fill=\"#10B981\" fill-opacity=\"0.35\" stroke=\"#10B981\" stroke-width=\"1.4\"/><text x=\"385\" y=\"56.5\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">A</text><rect x=\"340\" y=\"65\" width=\"90\" height=\"40\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1.4\"/><text x=\"385\" y=\"89\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">B</text><rect x=\"340\" y=\"105\" width=\"90\" height=\"35\" fill=\"#8B5CF6\" fill-opacity=\"0.35\" stroke=\"#8B5CF6\" stroke-width=\"1.4\"/><text x=\"385\" y=\"126.5\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">C</text><rect x=\"340\" y=\"140\" width=\"90\" height=\"50\" fill=\"#94A3B8\" fill-opacity=\"0.35\" stroke=\"#94A3B8\" stroke-width=\"1.4\"/><text x=\"385\" y=\"204\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">d</text><text x=\"385\" y=\"218\" font-size=\"9.5\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">sol A, B, C</text><rect x=\"450\" y=\"40\" width=\"90\" height=\"22\" fill=\"#10B981\" fill-opacity=\"0.35\" stroke=\"#10B981\" stroke-width=\"1.4\"/><text x=\"495\" y=\"55\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">A1</text><rect x=\"450\" y=\"62\" width=\"90\" height=\"26\" fill=\"#3B82F6\" fill-opacity=\"0.35\" stroke=\"#3B82F6\" stroke-width=\"1.4\"/><text x=\"495\" y=\"79\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">A2</text><rect x=\"450\" y=\"88\" width=\"90\" height=\"42\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1.4\"/><text x=\"495\" y=\"113\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">B</text><rect x=\"450\" y=\"130\" width=\"90\" height=\"30\" fill=\"#8B5CF6\" fill-opacity=\"0.35\" stroke=\"#8B5CF6\" stroke-width=\"1.4\"/><text x=\"495\" y=\"149\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">C</text><rect x=\"450\" y=\"160\" width=\"90\" height=\"30\" fill=\"#94A3B8\" fill-opacity=\"0.35\" stroke=\"#94A3B8\" stroke-width=\"1.4\"/><text x=\"495\" y=\"204\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">e</text><text x=\"495\" y=\"218\" font-size=\"9.5\" text-anchor=\"middle\" font-weight=\"600\" fill=\"currentColor\">sol évolué</text><line x1=\"10\" y1=\"22\" x2=\"531.0\" y2=\"22.0\" stroke=\"#10B981\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"540,22 531.0,17.0 531.0,27.0\" fill=\"#10B981\"/><text x=\"275\" y=\"15\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#10B981\">évolution progressive : gain d’horizons</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Humification",
          "stepTheme": "Humus",
          "stepTitle": "La formation de l’humus",
          "paragraphText": "Les **micro-organismes** décomposent les débris végétaux en **humus** : c’est l’**humification**.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p01_q2",
            "type": "mcq",
            "prompt": "Comment appelle-t-on la transformation des débris végétaux en humus par les micro-organismes du sol ?",
            "options": [
              "L’humification",
              "La lixiviation",
              "L’érosion",
              "L’induration"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’humus forme l’horizon A."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "Horizons",
          "stepTheme": "Profil",
          "stepTitle": "Les horizons d’un sol évolué",
          "paragraphText": "**A1** : horizon **humifère** ; **A2** : horizon **lessivé** ; **B** : horizon d’**accumulation** ; **C** : **roche mère** altérée.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p01_q3",
            "type": "mcq",
            "prompt": "Dans un sol évolué, quel horizon est appelé horizon d’accumulation ?",
            "options": [
              "L’horizon B",
              "L’horizon A1",
              "L’horizon A2",
              "L’horizon C"
            ],
            "correctAnswerIndex": 0,
            "explanation": "B reçoit ce qui part de A."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepBadge": "Progressive",
          "stepTheme": "Notion",
          "stepTitle": "Gagner des horizons",
          "paragraphText": "Le sol **gagne des horizons** (A, C → A, B, C → A1, A2, B, C) : c’est l’**évolution progressive**.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p01_q4",
            "type": "mcq",
            "prompt": "Un sol passe d’un profil à deux horizons (A et C) à un profil à quatre horizons (A1, A2, B et C). De quel type d’évolution s’agit-il ?",
            "options": [
              "D’une évolution progressive",
              "D’une évolution régressive",
              "D’une érosion",
              "D’une évolution nulle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Gain d’horizons = progressive."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepBadge": "Climax",
          "stepTheme": "Équilibre",
          "stepTitle": "Le climax",
          "paragraphText": "Quand le sol est **mûr**, sol et végétation sont en **équilibre stable** : c’est le **climax**.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p01_q5",
            "type": "mcq",
            "prompt": "Qu’appelle-t-on le climax d’un sol ?",
            "options": [
              "L’équilibre stable entre un sol mûr et sa végétation",
              "La disparition de tous les horizons",
              "La roche mère nue",
              "Le début de l’altération"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Exemple : la forêt dense sur un sol évolué."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Roche nue",
          "stepTheme": "Erreur du document",
          "stepTitle": "La roche mise à nu",
          "paragraphText": "Le corrigé classe « **mise à nu de la roche mère** » dans l’évolution progressive. C’est le résultat de l’**érosion** : un signe d’évolution **régressive**. Réponses justes : **b, d, f**.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p01_q6",
            "type": "mcq",
            "prompt": "Parmi ces phénomènes : mise à nu de la roche mère, colonisation par les végétaux, naissance d’horizons, équilibre entre la végétation et le sol, lesquels relèvent de l’évolution progressive ?",
            "options": [
              "Colonisation par les végétaux, naissance d’horizons et équilibre végétation-sol",
              "Mise à nu de la roche mère seulement",
              "Les quatre phénomènes",
              "Aucun"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La mise à nu suit la perte des horizons."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p01_q1",
          "type": "mcq",
          "prompt": "Quels facteurs dégradent la roche mère au début de la formation d’un sol ?",
          "options": [
            "L’eau, la température et les êtres vivants",
            "Le vent seulement",
            "Les engrais",
            "La lune"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est l’altération."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p01_q2",
          "type": "mcq",
          "prompt": "Comment appelle-t-on la transformation des débris végétaux en humus par les micro-organismes du sol ?",
          "options": [
            "L’humification",
            "La lixiviation",
            "L’érosion",
            "L’induration"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’humus forme l’horizon A."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p01_q3",
          "type": "mcq",
          "prompt": "Dans un sol évolué, quel horizon est appelé horizon d’accumulation ?",
          "options": [
            "L’horizon B",
            "L’horizon A1",
            "L’horizon A2",
            "L’horizon C"
          ],
          "correctAnswerIndex": 0,
          "explanation": "B reçoit ce qui part de A."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p01_q4",
          "type": "mcq",
          "prompt": "Un sol passe d’un profil à deux horizons (A et C) à un profil à quatre horizons (A1, A2, B et C). De quel type d’évolution s’agit-il ?",
          "options": [
            "D’une évolution progressive",
            "D’une évolution régressive",
            "D’une érosion",
            "D’une évolution nulle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Gain d’horizons = progressive."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p01_q5",
          "type": "mcq",
          "prompt": "Qu’appelle-t-on le climax d’un sol ?",
          "options": [
            "L’équilibre stable entre un sol mûr et sa végétation",
            "La disparition de tous les horizons",
            "La roche mère nue",
            "Le début de l’altération"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Exemple : la forêt dense sur un sol évolué."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p01_q6",
          "type": "mcq",
          "prompt": "Parmi ces phénomènes : mise à nu de la roche mère, colonisation par les végétaux, naissance d’horizons, équilibre entre la végétation et le sol, lesquels relèvent de l’évolution progressive ?",
          "options": [
            "Colonisation par les végétaux, naissance d’horizons et équilibre végétation-sol",
            "Mise à nu de la roche mère seulement",
            "Les quatre phénomènes",
            "Aucun"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La mise à nu suit la perte des horizons."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p02",
      "order": 2,
      "title": "L’évolution régressive d’un sol",
      "summary": "Destruction de la végétation, érosion, perte d’horizons.",
      "conceptExplanation": "- Document 2 : au stade 1, le sol a six horizons (de haut en bas A0, A1, A2, B1, B2, C). Au stade 2, il n’en a plus que trois (A1, A2, C).\n- Le sol a perdu des horizons : c’est l’évolution régressive.\n- Causes : la destruction du couvert végétal par l’Homme (feux de brousse, déboisement, cultures répétées) ou par la nature (sécheresse) met le sol à nu. L’eau de ruissellement l’érode et emporte d’abord les horizons de surface, puis les autres, jusqu’à mettre la roche mère à nu.\n- L’équilibre entre le sol et la végétation est rompu : c’est la rupture du climax.\n- Correction du document : son analyse indique que les horizons disparus sont « A0 et A1 ». En comparant les deux profils, ce sont A0, B1 et B2 qui ont disparu (A1 est toujours présent au stade 2), comme le dit d’ailleurs son corrigé de la situation 2.\n- Activité (vrai ou faux) : 1 vrai ; 2 faux (la régression est une perte de couches) ; 3 vrai ; 4 vrai ; 5 faux selon le document (le climax est l’état d’équilibre atteint au terme de l’évolution progressive).",
      "keyRule": "Évolution régressive : destruction du couvert végétal → érosion → perte d’horizons → rupture du climax.",
      "formulas": [],
      "workedExample": {
        "title": "Comparer deux profils",
        "statement": "Stade 1 : A0, A1, A2, B1, B2, C. Stade 2 : A1, A2, C. Qu’a perdu le sol ?",
        "methodSteps": [
          "On cherche les horizons du stade 1 absents au stade 2.",
          "A0, B1 et B2 manquent."
        ],
        "conclusion": "Le sol a perdu A0, B1 et B2 : évolution régressive."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepBadge": "Comparer",
          "stepTheme": "Document 2",
          "stepTitle": "Quels horizons ont disparu ?",
          "paragraphText": "Stade 1 : **A0, A1, A2, B1, B2, C**. Stade 2 : **A1, A2, C**. Ont disparu : **A0, B1 et B2**.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p02_q1",
            "type": "mcq",
            "prompt": "Un sol a les horizons A0, A1, A2, B1, B2 et C au stade 1, puis seulement A1, A2 et C au stade 2. Quels horizons a-t-il perdus ?",
            "options": [
              "A0, B1 et B2",
              "A0 et A1",
              "A2 et C",
              "A1, A2 et C"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le document écrit à tort « A0 et A1 »."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Évolution régressive d’un sol",
            "caption": "Du stade 1 (A0, A1, A2, B1, B2, C) au stade 2 (A1, A2, C) : le sol a perdu des horizons.",
            "svgContent": "<svg viewBox=\"0 0 560 216\" width=\"100%\" style=\"max-width:560px;height:auto\" class=\"text-slate-700 dark:text-slate-200\" role=\"img\" aria-label=\"Évolution régressive : du stade 1 à six horizons au stade 2 à trois horizons, après perte de A0, B1 et B2\"><rect x=\"70\" y=\"30\" width=\"110\" height=\"18\" fill=\"#10B981\" fill-opacity=\"0.35\" stroke=\"#10B981\" stroke-width=\"1.4\"/><text x=\"125\" y=\"43\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">A0 (litière)</text><rect x=\"70\" y=\"48\" width=\"110\" height=\"22\" fill=\"#10B981\" fill-opacity=\"0.35\" stroke=\"#10B981\" stroke-width=\"1.4\"/><text x=\"125\" y=\"63\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">A1</text><rect x=\"70\" y=\"70\" width=\"110\" height=\"30\" fill=\"#3B82F6\" fill-opacity=\"0.35\" stroke=\"#3B82F6\" stroke-width=\"1.4\"/><text x=\"125\" y=\"89\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">A2</text><rect x=\"70\" y=\"100\" width=\"110\" height=\"24\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1.4\"/><text x=\"125\" y=\"116\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">B1</text><rect x=\"70\" y=\"124\" width=\"110\" height=\"30\" fill=\"#F59E0B\" fill-opacity=\"0.35\" stroke=\"#F59E0B\" stroke-width=\"1.4\"/><text x=\"125\" y=\"143\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">B2</text><rect x=\"70\" y=\"154\" width=\"110\" height=\"36\" fill=\"#8B5CF6\" fill-opacity=\"0.35\" stroke=\"#8B5CF6\" stroke-width=\"1.4\"/><text x=\"125\" y=\"176\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">C</text><text x=\"125\" y=\"206\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Stade 1</text><rect x=\"330\" y=\"30\" width=\"110\" height=\"22\" fill=\"#10B981\" fill-opacity=\"0.35\" stroke=\"#10B981\" stroke-width=\"1.4\"/><text x=\"385\" y=\"45\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">A1</text><rect x=\"330\" y=\"52\" width=\"110\" height=\"30\" fill=\"#3B82F6\" fill-opacity=\"0.35\" stroke=\"#3B82F6\" stroke-width=\"1.4\"/><text x=\"385\" y=\"71\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">A2</text><rect x=\"330\" y=\"82\" width=\"110\" height=\"36\" fill=\"#8B5CF6\" fill-opacity=\"0.35\" stroke=\"#8B5CF6\" stroke-width=\"1.4\"/><text x=\"385\" y=\"104\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">C</text><text x=\"385\" y=\"206\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"800\" fill=\"currentColor\">Stade 2</text><line x1=\"200\" y1=\"100\" x2=\"307.0\" y2=\"100.0\" stroke=\"#EF4444\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><polygon points=\"316,100 307.0,95.0 307.0,105.0\" fill=\"#EF4444\"/><text x=\"258\" y=\"88\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#EF4444\">érosion</text><text x=\"258\" y=\"124\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#EF4444\">perte de A0, B1, B2</text></svg>"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Régressive",
          "stepTheme": "Notion",
          "stepTitle": "Perdre des horizons",
          "paragraphText": "Quand un sol **perd des horizons**, il subit une **évolution régressive**.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p02_q2",
            "type": "mcq",
            "prompt": "Comment appelle-t-on l’évolution d’un sol qui perd des horizons ?",
            "options": [
              "Une évolution régressive",
              "Une évolution progressive",
              "Un climax",
              "Une humification"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Activité : 2 est faux, 4 est vrai."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Feux de brousse",
          "stepTheme": "Causes",
          "stepTitle": "Mettre le sol à nu",
          "paragraphText": "Les **feux de brousse**, le **déboisement** ou la **sécheresse** détruisent le **couvert végétal** et mettent le sol **à nu**.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p02_q3",
            "type": "mcq",
            "prompt": "Laquelle de ces actions peut déclencher l’évolution régressive d’un sol ?",
            "options": [
              "Les feux de brousse répétés qui détruisent la végétation",
              "Le reboisement",
              "L’apport de compost",
              "La jachère longue"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sans végétation, plus d’humus et plus de protection."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Érosion",
          "stepTheme": "Mécanisme",
          "stepTitle": "L’eau emporte le sol",
          "paragraphText": "Sur un sol nu, l’**eau de ruissellement** emporte d’abord l’**horizon humifère**, puis les autres horizons, surtout sur une **forte pente**.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p02_q4",
            "type": "mcq",
            "prompt": "Sur un sol nu en forte pente, quel horizon l’eau de ruissellement emporte-t-elle en premier ?",
            "options": [
              "L’horizon humifère, en surface",
              "La roche mère",
              "L’horizon C",
              "L’horizon B en premier"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Texte à trous : 2 le sol ; 3 l’horizon humifère."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepBadge": "Climax rompu",
          "stepTheme": "Conséquence",
          "stepTitle": "La rupture de l’équilibre",
          "paragraphText": "La perte des horizons **rompt l’équilibre** entre le sol et la végétation : c’est la **rupture du climax**.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p02_q5",
            "type": "mcq",
            "prompt": "Que devient l’équilibre entre le sol et la végétation quand le sol perd ses horizons ?",
            "options": [
              "Il est rompu : c’est la rupture du climax",
              "Il est renforcé",
              "Il ne change pas",
              "Il devient un nouveau climax plus riche"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le sol devient moins fertile."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Rendement",
          "stepTheme": "Situation",
          "stepTitle": "La baisse du maïs",
          "paragraphText": "Après une forte récolte, le rendement du maïs **baisse** : le sol, cultivé sans protection, a **évolué** et perdu de sa **fertilité**.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p02_q6",
            "type": "mcq",
            "prompt": "Une coopérative obtient une forte récolte de maïs une année, puis un faible rendement l’année suivante sur la même parcelle. Quelle explication l’agent de l’ANADER donne-t-il ?",
            "options": [
              "Le sol de la parcelle a évolué et perdu une partie de sa fertilité",
              "Le maïs a changé d’espèce",
              "Il a trop plu sur la région",
              "Les graines étaient trop grosses"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Récolter exporte des éléments minéraux."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p02_q1",
          "type": "mcq",
          "prompt": "Un sol a les horizons A0, A1, A2, B1, B2 et C au stade 1, puis seulement A1, A2 et C au stade 2. Quels horizons a-t-il perdus ?",
          "options": [
            "A0, B1 et B2",
            "A0 et A1",
            "A2 et C",
            "A1, A2 et C"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le document écrit à tort « A0 et A1 »."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p02_q2",
          "type": "mcq",
          "prompt": "Comment appelle-t-on l’évolution d’un sol qui perd des horizons ?",
          "options": [
            "Une évolution régressive",
            "Une évolution progressive",
            "Un climax",
            "Une humification"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Activité : 2 est faux, 4 est vrai."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p02_q3",
          "type": "mcq",
          "prompt": "Laquelle de ces actions peut déclencher l’évolution régressive d’un sol ?",
          "options": [
            "Les feux de brousse répétés qui détruisent la végétation",
            "Le reboisement",
            "L’apport de compost",
            "La jachère longue"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans végétation, plus d’humus et plus de protection."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p02_q4",
          "type": "mcq",
          "prompt": "Sur un sol nu en forte pente, quel horizon l’eau de ruissellement emporte-t-elle en premier ?",
          "options": [
            "L’horizon humifère, en surface",
            "La roche mère",
            "L’horizon C",
            "L’horizon B en premier"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Texte à trous : 2 le sol ; 3 l’horizon humifère."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p02_q5",
          "type": "mcq",
          "prompt": "Que devient l’équilibre entre le sol et la végétation quand le sol perd ses horizons ?",
          "options": [
            "Il est rompu : c’est la rupture du climax",
            "Il est renforcé",
            "Il ne change pas",
            "Il devient un nouveau climax plus riche"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le sol devient moins fertile."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p02_q6",
          "type": "mcq",
          "prompt": "Une coopérative obtient une forte récolte de maïs une année, puis un faible rendement l’année suivante sur la même parcelle. Quelle explication l’agent de l’ANADER donne-t-il ?",
          "options": [
            "Le sol de la parcelle a évolué et perdu une partie de sa fertilité",
            "Le maïs a changé d’espèce",
            "Il a trop plu sur la région",
            "Les graines étaient trop grosses"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Récolter exporte des éléments minéraux."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p03",
      "order": 3,
      "title": "Les migrations descendantes",
      "summary": "Lixiviation, chéluviation, lessivage.",
      "conceptExplanation": "- Quand il pleut, l’eau s’infiltre dans le sol et emporte des substances de l’horizon A vers l’horizon B : ce sont les migrations descendantes.\n- Lixiviation : entraînement des sels solubles, plus ou moins ionisés (Ca²⁺, K⁺, Na⁺, Mg²⁺).\n- Chéluviation : entraînement du fer et de l’aluminium associés à la matière organique (complexes organo-métalliques).\n- Lessivage : entraînement de l’argile dispersée (particules fines).\n- L’horizon A, appauvri, devient l’horizon lessivé ou éluvial (A2) ; l’horizon B, enrichi, devient l’horizon d’accumulation ou illuvial.\n- Correction du document : son corrigé de la situation 1 dit que l’horizon B « s’est formé à la suite de migrations ascendantes ». D’après son propre cours, l’horizon B d’accumulation se forme par migrations descendantes : il reçoit ce que l’eau d’infiltration entraîne depuis l’horizon A.\n- Activité (vrai ou faux) : 1 faux ; 2 vrai ; 3 vrai ; 4 faux ; 5 vrai ; 6 vrai. Association : formation de cuirasse → accumulation d’oxydes de fer et d’aluminium ; lixiviation → migration de sels ionisés ; lessivage → migration d’argile.",
      "keyRule": "Migrations descendantes (eau d’infiltration) : lixiviation (sels solubles), chéluviation (Fe, Al + matière organique), lessivage (argile). A s’appauvrit (éluvial), B s’enrichit (illuvial).",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer l’horizon B",
        "statement": "Comment se forme l’horizon B d’un sol évolué ?",
        "methodSteps": [
          "L’eau de pluie s’infiltre et entraîne des sels, du fer, de l’aluminium et de l’argile depuis l’horizon A.",
          "Ces éléments s’accumulent plus bas."
        ],
        "conclusion": "L’horizon B se forme par accumulation des éléments descendus de l’horizon A."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Lixiviation",
          "stepTheme": "Migration",
          "stepTitle": "Les sels solubles descendent",
          "paragraphText": "La **lixiviation** est l’entraînement des **sels solubles** (Ca²⁺, K⁺, Na⁺, Mg²⁺) vers les horizons inférieurs.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p03_q1",
            "type": "mcq",
            "prompt": "Comment appelle-t-on l’entraînement des sels solubles des horizons supérieurs vers les horizons inférieurs ?",
            "options": [
              "La lixiviation",
              "Le lessivage",
              "La chéluviation",
              "L’induration"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Activité : 6 est vrai."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Les migrations dans le sol",
            "caption": "Descendantes (avec l’eau d’infiltration) et ascendantes.",
            "tableData": {
              "headers": [
                "Migration",
                "Ce qui se déplace",
                "Nom"
              ],
              "rows": [
                [
                  "Descendante",
                  "Sels solubles plus ou moins ionisés (Ca²⁺, K⁺, Na⁺, Mg²⁺)",
                  "Lixiviation"
                ],
                [
                  "Descendante",
                  "Complexe fer ou aluminium + matière organique",
                  "Chéluviation"
                ],
                [
                  "Descendante",
                  "Argile dispersée (particules fines)",
                  "Lessivage"
                ],
                [
                  "Ascendante",
                  "Sels solubles remontés par évaporation",
                  "Croûte saline"
                ],
                [
                  "Ascendante",
                  "Oxydes de fer et d’aluminium qui durcissent",
                  "Cuirasse (induration)"
                ],
                [
                  "Ascendante",
                  "Ions puisés par les racines, rendus par la litière",
                  "Remontée biologique"
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Lessivage",
          "stepTheme": "Migration",
          "stepTitle": "L’argile descend",
          "paragraphText": "Le **lessivage** est l’entraînement de l’**argile** dispersée (particules fines) vers les horizons inférieurs.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p03_q2",
            "type": "mcq",
            "prompt": "Qu’est-ce que le lessivage d’un sol ?",
            "options": [
              "L’entraînement de l’argile, particules fines, vers les horizons inférieurs",
              "La remontée des sels en surface",
              "La formation d’une cuirasse",
              "La destruction de la végétation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Activité : 2 et 3 sont vrais."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "Chéluviation",
          "stepTheme": "Migration",
          "stepTitle": "Fer et aluminium avec la matière organique",
          "paragraphText": "La **chéluviation** est l’entraînement du **fer** et de l’**aluminium** associés à la **matière organique**.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p03_q3",
            "type": "mcq",
            "prompt": "Comment appelle-t-on l’entraînement vers le bas du fer et de l’aluminium liés à la matière organique ?",
            "options": [
              "La chéluviation",
              "La lixiviation",
              "Le lessivage",
              "L’humification"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Trois migrations descendantes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepBadge": "Éluvial, illuvial",
          "stepTheme": "Conséquence",
          "stepTitle": "Un horizon appauvri, un horizon enrichi",
          "paragraphText": "L’horizon **A** s’**appauvrit** (horizon **éluvial**, lessivé) ; l’horizon **B** s’**enrichit** (horizon **illuvial**, d’accumulation).",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p03_q4",
            "type": "mcq",
            "prompt": "Comment appelle-t-on l’horizon B, enrichi par les éléments descendus de l’horizon A ?",
            "options": [
              "Horizon illuvial (d’accumulation)",
              "Horizon éluvial (lessivé)",
              "Horizon humifère",
              "Roche mère"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Éluvial : qui a perdu ; illuvial : qui a reçu."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Horizon B",
          "stepTheme": "Erreur du document",
          "stepTitle": "Comment se forme l’horizon B ?",
          "paragraphText": "Attention au sens des migrations : B se forme par migrations **descendantes** : il **reçoit** ce que l’eau entraîne depuis **A**.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p03_q5",
            "type": "mcq",
            "prompt": "Dans un sol évolué, comment se forme l’horizon B d’accumulation ?",
            "options": [
              "Par migrations descendantes d’éléments venus de l’horizon A",
              "Par migrations ascendantes depuis la roche mère",
              "Par dépôt de poussières de l’air",
              "Par l’érosion de surface"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’eau d’infiltration descend."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepBadge": "Érosion",
          "stepTheme": "Activité",
          "stepTitle": "L’érosion et l’évolution progressive",
          "paragraphText": "« L’**érosion** contribue à l’évolution progressive des sols » : **faux**. L’érosion enlève des horizons : elle provoque une évolution **régressive**.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p03_q6",
            "type": "mcq",
            "prompt": "« L’érosion contribue à l’évolution progressive des sols. » Vrai ou faux ?",
            "options": [
              "Faux : l’érosion emporte des horizons et provoque une évolution régressive",
              "Vrai",
              "Vrai, car elle forme l’horizon B",
              "Faux, car l’érosion n’existe pas en zone tropicale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Activité : 1 est faux."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p03_q1",
          "type": "mcq",
          "prompt": "Comment appelle-t-on l’entraînement des sels solubles des horizons supérieurs vers les horizons inférieurs ?",
          "options": [
            "La lixiviation",
            "Le lessivage",
            "La chéluviation",
            "L’induration"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Activité : 6 est vrai."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p03_q2",
          "type": "mcq",
          "prompt": "Qu’est-ce que le lessivage d’un sol ?",
          "options": [
            "L’entraînement de l’argile, particules fines, vers les horizons inférieurs",
            "La remontée des sels en surface",
            "La formation d’une cuirasse",
            "La destruction de la végétation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Activité : 2 et 3 sont vrais."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p03_q3",
          "type": "mcq",
          "prompt": "Comment appelle-t-on l’entraînement vers le bas du fer et de l’aluminium liés à la matière organique ?",
          "options": [
            "La chéluviation",
            "La lixiviation",
            "Le lessivage",
            "L’humification"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Trois migrations descendantes."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p03_q4",
          "type": "mcq",
          "prompt": "Comment appelle-t-on l’horizon B, enrichi par les éléments descendus de l’horizon A ?",
          "options": [
            "Horizon illuvial (d’accumulation)",
            "Horizon éluvial (lessivé)",
            "Horizon humifère",
            "Roche mère"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Éluvial : qui a perdu ; illuvial : qui a reçu."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p03_q5",
          "type": "mcq",
          "prompt": "Dans un sol évolué, comment se forme l’horizon B d’accumulation ?",
          "options": [
            "Par migrations descendantes d’éléments venus de l’horizon A",
            "Par migrations ascendantes depuis la roche mère",
            "Par dépôt de poussières de l’air",
            "Par l’érosion de surface"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’eau d’infiltration descend."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p03_q6",
          "type": "mcq",
          "prompt": "« L’érosion contribue à l’évolution progressive des sols. » Vrai ou faux ?",
          "options": [
            "Faux : l’érosion emporte des horizons et provoque une évolution régressive",
            "Vrai",
            "Vrai, car elle forme l’horizon B",
            "Faux, car l’érosion n’existe pas en zone tropicale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Activité : 1 est faux."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p04",
      "order": 4,
      "title": "Les migrations ascendantes",
      "summary": "Croûte saline, cuirasse et remontée par les plantes.",
      "conceptExplanation": "- Quand il fait chaud, l’eau du sol s’évapore. En remontant, elle entraîne des sels solubles (NaCl, Na₂CO₃) qui s’accumulent en surface : ils forment une croûte saline.\n- Au-dessus d’une nappe d’eau, des oxydes de fer (et d’aluminium) remontent et précipitent (Fe₂O₃). En s’accumulant puis en durcissant (induration), ils forment une couche dure : la cuirasse, fréquente sous les tropiques.\n- Les plantes puisent des ions en profondeur ; leurs feuilles mortes (litière) les rendent à la surface après humification et minéralisation : c’est une remontée biologique.\n- Situation 3 (axe Lakota-Gagnoa) : dans le profil X, en haut de pente, les migrations sont descendantes (horizons A1, A2, B, C) ; sur la pente (Y), elles sont obliques ; dans le profil Z, en bas de pente au-dessus d’une nappe, l’évaporation fait remonter les éléments solubles : migration ascendante.\n- Nuance au document : dans la situation 3, il décrit A2 comme « horizon lessivé avec accumulation d’oxyde de fer ». Un horizon lessivé est appauvri ; l’accumulation d’oxydes de fer se fait dans l’horizon B.\n- Texte à trous : 1 la roche mère ; 2 le sol ; 3 l’horizon humifère ; 4 un lessivage ; 5 accumulation ; 6 la cristallisation ; 7 cuirasse.",
      "keyRule": "Migrations ascendantes : évaporation → croûte saline ; oxydes de fer et d’aluminium → cuirasse (induration) ; remontée par les plantes et la litière.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer une croûte saline",
        "statement": "Pourquoi une croûte de sel se forme-t-elle à la surface d’un sol humide en saison sèche ?",
        "methodSteps": [
          "La chaleur fait évaporer l’eau du sol, qui remonte vers la surface.",
          "L’eau s’évapore mais les sels dissous restent et s’accumulent."
        ],
        "conclusion": "Les sels forment une croûte saline en surface : migration ascendante."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Croûte saline",
          "stepTheme": "Évaporation",
          "stepTitle": "Du sel en surface",
          "paragraphText": "En saison sèche, l’eau du sol **s’évapore** et remonte en entraînant des **sels** qui s’accumulent en surface : c’est une **croûte saline**.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p04_q1",
            "type": "mcq",
            "prompt": "En saison sèche, une couche de sel se forme à la surface d’un sol humide. Comment l’expliquer ?",
            "options": [
              "L’eau du sol remonte par évaporation et laisse ses sels en surface",
              "La pluie apporte du sel",
              "Les racines fabriquent du sel",
              "Le vent dépose du sable"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est une migration ascendante."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Cuirasse",
          "stepTheme": "Induration",
          "stepTitle": "Une couche dure",
          "paragraphText": "Les **oxydes de fer et d’aluminium** s’accumulent puis **durcissent** (**induration**) : ils forment une **cuirasse**.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p04_q2",
            "type": "mcq",
            "prompt": "Comment se forme une cuirasse dans un sol tropical ?",
            "options": [
              "Par accumulation d’oxydes de fer et d’aluminium qui durcissent (induration)",
              "Par accumulation d’humus",
              "Par dépôt de sable de rivière",
              "Par la fonte de la roche mère"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Activité : 5 vrai ; 4 faux (pas dans l’horizon humifère)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "Plantes",
          "stepTheme": "Remontée biologique",
          "stepTitle": "Les racines remontent des ions",
          "paragraphText": "Les **racines** puisent des ions en profondeur ; la **litière** les rend à la surface après **minéralisation**.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p04_q3",
            "type": "mcq",
            "prompt": "Comment les plantes participent-elles aux migrations ascendantes dans le sol ?",
            "options": [
              "Elles puisent des ions en profondeur, que leur litière rend à la surface",
              "Elles enfoncent les ions vers la roche mère",
              "Elles détruisent tous les ions",
              "Elles n’ont aucun rôle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la remontée biologique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "Profil X",
          "stepTheme": "Situation 3",
          "stepTitle": "En haut de pente",
          "paragraphText": "Dans le profil **X**, en haut de pente : horizons **A1**, **A2**, **B**, **C**, et migrations **descendantes**.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p04_q4",
            "type": "mcq",
            "prompt": "Sur un terrain en pente, le profil X situé en haut montre les horizons A1, A2, B et C. Quel type de migration y domine ?",
            "options": [
              "Une migration descendante",
              "Une migration ascendante",
              "Aucune migration",
              "Une migration latérale seulement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’eau s’infiltre de haut en bas."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepBadge": "Profil Z",
          "stepTheme": "Situation 3",
          "stepTitle": "Au-dessus d’une nappe",
          "paragraphText": "Dans le profil **Z**, en bas de pente au-dessus d’une **nappe**, l’**évaporation** fait **remonter** les éléments solubles.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p04_q5",
            "type": "mcq",
            "prompt": "Un profil de sol situé en bas de pente repose sur une nappe d’eau. Quel type de migration y a lieu ?",
            "options": [
              "Une migration ascendante, par évaporation de l’eau de la nappe",
              "Une migration descendante uniquement",
              "Aucune migration",
              "Une érosion totale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sur la pente, les migrations sont obliques."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "A2",
          "stepTheme": "Nuance",
          "stepTitle": "Un horizon lessivé n’accumule pas",
          "paragraphText": "Le corrigé décrit **A2** comme « lessivé **avec accumulation** d’oxyde de fer ». Un horizon **lessivé** est **appauvri** ; l’**accumulation** se fait dans l’horizon **B**.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p04_q6",
            "type": "mcq",
            "prompt": "Dans un sol évolué, quel horizon accumule les oxydes de fer descendus de la surface ?",
            "options": [
              "L’horizon B",
              "L’horizon A2, lessivé",
              "L’horizon A1, humifère",
              "Aucun horizon"
            ],
            "correctAnswerIndex": 0,
            "explanation": "A2 est appauvri, B est enrichi."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p04_q1",
          "type": "mcq",
          "prompt": "En saison sèche, une couche de sel se forme à la surface d’un sol humide. Comment l’expliquer ?",
          "options": [
            "L’eau du sol remonte par évaporation et laisse ses sels en surface",
            "La pluie apporte du sel",
            "Les racines fabriquent du sel",
            "Le vent dépose du sable"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est une migration ascendante."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p04_q2",
          "type": "mcq",
          "prompt": "Comment se forme une cuirasse dans un sol tropical ?",
          "options": [
            "Par accumulation d’oxydes de fer et d’aluminium qui durcissent (induration)",
            "Par accumulation d’humus",
            "Par dépôt de sable de rivière",
            "Par la fonte de la roche mère"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Activité : 5 vrai ; 4 faux (pas dans l’horizon humifère)."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p04_q3",
          "type": "mcq",
          "prompt": "Comment les plantes participent-elles aux migrations ascendantes dans le sol ?",
          "options": [
            "Elles puisent des ions en profondeur, que leur litière rend à la surface",
            "Elles enfoncent les ions vers la roche mère",
            "Elles détruisent tous les ions",
            "Elles n’ont aucun rôle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la remontée biologique."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p04_q4",
          "type": "mcq",
          "prompt": "Sur un terrain en pente, le profil X situé en haut montre les horizons A1, A2, B et C. Quel type de migration y domine ?",
          "options": [
            "Une migration descendante",
            "Une migration ascendante",
            "Aucune migration",
            "Une migration latérale seulement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’eau s’infiltre de haut en bas."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p04_q5",
          "type": "mcq",
          "prompt": "Un profil de sol situé en bas de pente repose sur une nappe d’eau. Quel type de migration y a lieu ?",
          "options": [
            "Une migration ascendante, par évaporation de l’eau de la nappe",
            "Une migration descendante uniquement",
            "Aucune migration",
            "Une érosion totale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sur la pente, les migrations sont obliques."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p04_q6",
          "type": "mcq",
          "prompt": "Dans un sol évolué, quel horizon accumule les oxydes de fer descendus de la surface ?",
          "options": [
            "L’horizon B",
            "L’horizon A2, lessivé",
            "L’horizon A1, humifère",
            "Aucun horizon"
          ],
          "correctAnswerIndex": 0,
          "explanation": "A2 est appauvri, B est enrichi."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p05",
      "order": 5,
      "title": "Les caractéristiques et la fertilité des sols",
      "summary": "Propriétés physiques, chimiques et biologiques.",
      "conceptExplanation": "- Sol A (forêt du Banco) : texture équilibrée (30 % d’argile, 30 % de sable, 40 % de limon), structure grumeleuse, bonne aération, humidité modérée, pH de 6,7 à 7,2, riche en sels minéraux et en humus, activité biologique intense. Biomasse : 92 kg/m².\n- Sol B (mangrove de Bassam) : texture déséquilibrée, structure compacte, peu aéré (asphyxiant), gorgé d’eau (hydromorphe), acide (pH 5,3), pauvre en sels minéraux et en matière organique, activité biologique faible. Biomasse : 35 kg/m².\n- Le sol A est fertile : sa texture et sa structure assurent l’aération des racines et une bonne réserve d’eau ; son humus forme avec l’argile le complexe argilo-humique, réservoir d’ions ; il abrite de nombreux êtres vivants. Le sol B est infertile.\n- Propriétés physiques : texture, structure, porosité, humidité. Propriétés chimiques : pH, teneur en sels minéraux. Propriété biologique : présence de micro-organismes (et activité biologique).\n- La perte des propriétés physiques, chimiques ou biologiques d’un sol entraîne son appauvrissement.\n- Correction du document : dans son corrigé d’association, « présence d’humus » n’est reliée à rien. L’humus est une matière organique : il relève des propriétés chimiques (réserve d’ions, complexe argilo-humique) et dépend de l’activité biologique.",
      "keyRule": "Sol fertile : texture équilibrée, structure grumeleuse, bonne aération, pH proche de 7, riche en humus et en ions, activité biologique intense.",
      "formulas": [],
      "workedExample": {
        "title": "Comparer deux sols",
        "statement": "Pourquoi le sol de la forêt du Banco produit-il 92 kg/m² de biomasse et celui de la mangrove 35 ?",
        "methodSteps": [
          "Le sol de forêt est aéré, bien structuré, peu acide et riche en humus et en ions.",
          "Le sol de mangrove est asphyxiant, gorgé d’eau, acide et pauvre."
        ],
        "conclusion": "Le sol de forêt est fertile ; celui de la mangrove est infertile."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepBadge": "Deux sols",
          "stepTheme": "Analyse",
          "stepTitle": "Forêt ou mangrove ?",
          "paragraphText": "Sol de **forêt** : **92 kg/m²** de biomasse ; sol de **mangrove** : **35 kg/m²**. Le sol de forêt est plus **fertile**.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p05_q1",
            "type": "mcq",
            "prompt": "Le sol de la forêt du Banco produit 92 kg/m² de biomasse et celui de la mangrove de Bassam 35 kg/m². Lequel est le plus fertile ?",
            "options": [
              "Le sol de la forêt du Banco",
              "Le sol de la mangrove de Bassam",
              "Ils sont aussi fertiles l’un que l’autre",
              "Aucun des deux ne produit de biomasse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ses propriétés sont meilleures."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Deux sols comparés",
            "caption": "Forêt du Banco (sol A) et mangrove de Bassam (sol B).",
            "tableData": {
              "headers": [
                "Propriété",
                "Sol A (forêt du Banco)",
                "Sol B (mangrove de Bassam)"
              ],
              "rows": [
                [
                  "Texture",
                  "Équilibrée (30 % argile, 30 % sable, 40 % limon)",
                  "Déséquilibrée"
                ],
                [
                  "Structure",
                  "Grumeleuse",
                  "Compacte ou particulaire"
                ],
                [
                  "Aération",
                  "Bonne",
                  "Très faible (asphyxiant)"
                ],
                [
                  "Humidité",
                  "Modérée",
                  "Hydromorphe (trop d’eau)"
                ],
                [
                  "pH",
                  "6,7 à 7,2 (convenable)",
                  "5,3 (acide)"
                ],
                [
                  "Sels minéraux, matière organique",
                  "Riche, humus",
                  "Pauvre"
                ],
                [
                  "Activité biologique",
                  "Intense",
                  "Faible ou nulle"
                ],
                [
                  "Biomasse (kg/m²)",
                  92,
                  35
                ]
              ]
            }
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Texture",
          "stepTheme": "Propriété physique",
          "stepTitle": "Une texture équilibrée",
          "paragraphText": "Une **texture équilibrée** mélange **argile**, **sable** et **limon** (par exemple 30 %, 30 % et 40 %) : bonne aération et bonne réserve d’eau.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p05_q2",
            "type": "mcq",
            "prompt": "Pourquoi une texture équilibrée (30 % d’argile, 30 % de sable, 40 % de limon) est-elle favorable aux cultures ?",
            "options": [
              "Elle assure à la fois une bonne aération et une bonne réserve d’eau",
              "Elle rend le sol asphyxiant",
              "Elle rend le sol acide",
              "Elle empêche les racines de pousser"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le sable aère, l’argile retient l’eau et les ions."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepBadge": "pH",
          "stepTheme": "Propriété chimique",
          "stepTitle": "Un sol trop acide",
          "paragraphText": "Le sol de mangrove a un **pH de 5,3** : il est **acide**, peu favorable aux cultures. Celui de forêt est proche de la **neutralité** (6,7 à 7,2).",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p05_q3",
            "type": "mcq",
            "prompt": "Le sol de la mangrove de Bassam a un pH de 5,3. Comment le qualifier ?",
            "options": [
              "Acide, peu favorable aux cultures",
              "Neutre, idéal pour les cultures",
              "Basique",
              "Sans pH"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le pH est une propriété chimique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Hydromorphe",
          "stepTheme": "Propriété physique",
          "stepTitle": "Un sol gorgé d’eau",
          "paragraphText": "Le sol de mangrove est **hydromorphe** (gorgé d’eau) et **asphyxiant** : les racines y manquent d’**air**.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p05_q4",
            "type": "mcq",
            "prompt": "Pourquoi un sol hydromorphe, gorgé d’eau en permanence, est-il défavorable à la plupart des cultures ?",
            "options": [
              "Parce que les racines y manquent d’air (sol asphyxiant)",
              "Parce qu’il manque d’eau",
              "Parce qu’il est trop riche en humus",
              "Parce qu’il est trop aéré"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’eau prend la place de l’air dans les pores."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepBadge": "Classer",
          "stepTheme": "Activité",
          "stepTitle": "Physique, chimique ou biologique ?",
          "paragraphText": "**Physiques** : texture, structure, porosité, humidité. **Chimiques** : pH, sels minéraux. **Biologique** : micro-organismes.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p05_q5",
            "type": "mcq",
            "prompt": "À quel type de propriété du sol appartient la présence de micro-organismes ?",
            "options": [
              "À une propriété biologique",
              "À une propriété physique",
              "À une propriété chimique",
              "À aucune propriété"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le corrigé oublie de relier « présence d’humus »."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Humus",
          "stepTheme": "Correction du document",
          "stepTitle": "Où classer l’humus ?",
          "paragraphText": "Le corrigé ne relie pas « **présence d’humus** ». L’humus est une **matière organique** : il relève des propriétés **chimiques** (réserve d’ions) et dépend de l’**activité biologique**.",
          "exercise": {
            "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p05_q6",
            "type": "mcq",
            "prompt": "Pourquoi l’humus améliore-t-il la fertilité d’un sol ?",
            "options": [
              "Il forme avec l’argile le complexe argilo-humique, réservoir d’ions, et nourrit les êtres vivants du sol",
              "Il rend le sol plus acide et compact",
              "Il empêche l’eau de pénétrer",
              "Il remplace les racines"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la clé de la fertilité."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p05_q1",
          "type": "mcq",
          "prompt": "Le sol de la forêt du Banco produit 92 kg/m² de biomasse et celui de la mangrove de Bassam 35 kg/m². Lequel est le plus fertile ?",
          "options": [
            "Le sol de la forêt du Banco",
            "Le sol de la mangrove de Bassam",
            "Ils sont aussi fertiles l’un que l’autre",
            "Aucun des deux ne produit de biomasse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ses propriétés sont meilleures."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p05_q2",
          "type": "mcq",
          "prompt": "Pourquoi une texture équilibrée (30 % d’argile, 30 % de sable, 40 % de limon) est-elle favorable aux cultures ?",
          "options": [
            "Elle assure à la fois une bonne aération et une bonne réserve d’eau",
            "Elle rend le sol asphyxiant",
            "Elle rend le sol acide",
            "Elle empêche les racines de pousser"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le sable aère, l’argile retient l’eau et les ions."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p05_q3",
          "type": "mcq",
          "prompt": "Le sol de la mangrove de Bassam a un pH de 5,3. Comment le qualifier ?",
          "options": [
            "Acide, peu favorable aux cultures",
            "Neutre, idéal pour les cultures",
            "Basique",
            "Sans pH"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le pH est une propriété chimique."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p05_q4",
          "type": "mcq",
          "prompt": "Pourquoi un sol hydromorphe, gorgé d’eau en permanence, est-il défavorable à la plupart des cultures ?",
          "options": [
            "Parce que les racines y manquent d’air (sol asphyxiant)",
            "Parce qu’il manque d’eau",
            "Parce qu’il est trop riche en humus",
            "Parce qu’il est trop aéré"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’eau prend la place de l’air dans les pores."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p05_q5",
          "type": "mcq",
          "prompt": "À quel type de propriété du sol appartient la présence de micro-organismes ?",
          "options": [
            "À une propriété biologique",
            "À une propriété physique",
            "À une propriété chimique",
            "À aucune propriété"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le corrigé oublie de relier « présence d’humus »."
        },
        {
          "id": "premiere_d_svt_l09_evolution_sols_tropicaux_p05_q6",
          "type": "mcq",
          "prompt": "Pourquoi l’humus améliore-t-il la fertilité d’un sol ?",
          "options": [
            "Il forme avec l’argile le complexe argilo-humique, réservoir d’ions, et nourrit les êtres vivants du sol",
            "Il rend le sol plus acide et compact",
            "Il empêche l’eau de pénétrer",
            "Il remplace les racines"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la clé de la fertilité."
        }
      ]
    }
  ]
};
