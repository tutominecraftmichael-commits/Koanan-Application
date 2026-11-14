import type { CurriculumChapter } from '../../../lib/curriculum/types';

export const SVT_TLE_D_L12_TRANSMISSION_DEUX_CARACTERES_VIVANTS: CurriculumChapter = {
  id: "terminale_d_svt_ch13_transmission_deux_caracteres_dihybridisme",
  subjectId: "svt",
  gradeLevel: "terminale_d",
  alsoForGrades: ["terminale_c"],
  order: 12,
  title: "La transmission de deux caractères héréditaires chez les êtres vivants (Dihybridisme, indépendance, linkage et carte factorielle)",
  summary: "Étude complète et approfondie du dihybridisme selon le programme officiel de SVT Terminale D de Côte d'Ivoire : dihybridisme à gènes indépendants (croisement F1 x F1 avec ségrégation mendélienne 9/16, 3/16, 3/16, 1/16 et brassage interchromosomique en anaphase I), test-cross à 4 phénotypes équiprobables (1/4 chacun), liaison génétique (linkage) et crossing-over chez la drosophile (linkage absolu chez le mâle, linkage partiel chez la femelle, positions cis et trans), calcul rigoureux de la distance génétique (dg en UR ou cM), analyse du croisement F1 x F1 lié et construction de la carte factorielle.",
  officialVolumeHours: 15,
  contentVersion: 2,
  source: "École Numérique de Côte d'Ivoire - Direction de la Pédagogie et de la Formation Continue (DPFC) - SVT Terminale D",
  points: [
    {
      id: "pt1_dihybridisme_genes_independants_f1_f1",
      order: 1,
      title: "Dihybridisme à gènes indépendants : croisement F1 x F1 et ségrégation 9/16, 3/16, 3/16, 1/16",
      summary: "Transmission simultanée de deux couples d'allèles portés par deux paires distinctes de chromosomes homologues, loi de disjonction indépendante de Mendel, brassage interchromosomique et échiquier à 16 cases.",
      conceptExplanation: "Le dihybridisme est l'étude de la transmission simultanée de deux caractères héréditaires régis par deux couples d'allèles différents chez les êtres vivants.\n\n1. Expérience historique de Mendel sur les pois (Pisum sativum) :\n- Premier croisement (lignées pures parentales P1 x P2) : croisement de plants à graines lisses et jaunes [RJ] avec des plants à graines ridées et vertes [rv].\n- Résultat en F1 : 100 % de graines lisses et jaunes [RJ].\n  * Conclusion 1 : Les deux parents étant de lignée pure, la F1 est homogène, ce qui valide la 1ère loi de Mendel (uniformité des hybrides de première génération) ;\n  * Conclusion 2 : Pour chaque caractère, un allèle domine l'autre. Le phénotype lisse domine ridé (allèle dominant R, allèle récessif r) ; le phénotype jaune domine vert (allèle dominant J ou V, allèle récessif j ou v).\n\n2. Deuxième croisement : Autofécondation des hybrides F1 (F1 x F1) :\nLe croisement de deux hybrides F1 [RJ] x [RJ] donne une génération F2 hétérogène comprenant 4 phénotypes distincts :\n- Deux phénotypes parentaux : [RJ] (lisse et jaune) et [rv] (ridé et vert) ;\n- Deux nouveaux phénotypes recombinés : [Rv] (lisse et vert) et [rJ] (ridé et jaune).\n\n3. Analyse quantitative caractère par caractère :\n- Caractère aspect de la graine : (Lisse) / Total ≈ 75 % = 3/4 [R] et (Ridé) / Total ≈ 25 % = 1/4 [r] ;\n- Caractère couleur de la graine : (Jaune) / Total ≈ 75 % = 3/4 [J] et (Vert) / Total ≈ 25 % = 1/4 [j].\nChaque caractère considéré isolément se sépare selon la loi classique du monohybridisme avec dominance complète (3/4 dominant, 1/4 récessif).\n\n4. Recherche de la ségrégation simultanée (Loi d'indépendance des caractères) :\nSi les deux couples d'allèles se disjoignent de façon rigoureusement indépendante (3e loi de Mendel), la probabilité de combinaison de deux phénotypes indépendants est le produit de leurs probabilités respectives :\n- P([RJ]) = 3/4 [R] x 3/4 [J] = 9/16 [RJ] ;\n- P([Rv]) = 3/4 [R] x 1/4 [j] = 3/16 [Rv] ;\n- P([rJ]) = 1/4 [r] x 3/4 [J] = 3/16 [rJ] ;\n- P([rv]) = 1/4 [r] x 1/4 [j] = 1/16 [rv].\nCes proportions théoriques mendéliennes 9/16, 3/16, 3/16, 1/16 concordent parfaitement avec les effectifs expérimentaux observés (test de conformité statistique).\n\n5. Mécanisme cytologique : le brassage interchromosomique :\nLes deux couples d'allèles R/r et J/j sont portés par deux paires distinctes de chromosomes homologues (gènes indépendants). Lors de l'anaphase I de méiose, la migration de chaque chromosome d'une paire vers l'un ou l'autre pôle de la cellule se fait au hasard et de manière totalement indépendante de la migration des chromosomes de l'autre paire. L'hybride F1 de génotype (R//r ; J//j) produit donc 4 types de gamètes haploïdes équiprobables à 25 % (1/4) chacun : (R, J), (R, j), (r, J), (r, j).\nLa fécondation aléatoire entre ces gamètes donne un échiquier de 4 x 4 = 16 cases, aboutissant aux proportions 9/16, 3/16, 3/16, 1/16.",
      keyRule: "En dihybridisme à gènes indépendants avec dominance complète : le croisement F1 x F1 engendre 4 phénotypes dans les proportions 9/16 (double dominant), 3/16 (dominant 1 / récessif 2), 3/16 (récessif 1 / dominant 2), 1/16 (double récessif). Ce résultat s'explique par le brassage interchromosomique en anaphase I de méiose.",
      formulas: [
        {
          name: "Proportions théoriques du croisement F1 x F1 indépendant",
          formula: "(\\frac{3}{4}[A] + \\frac{1}{4}[a]) \\times (\\frac{3}{4}[B] + \\frac{1}{4}[b]) = \\frac{9}{16}[AB] + \\frac{3}{16}[Ab] + \\frac{3}{16}[aB] + \\frac{1}{16}[ab]",
          note: "Chaque hybride F1 produit 4 gamètes équiprobables à 1/4 chacun"
        }
      ],
      workedExample: {
        title: "Calcul des effectifs théoriques attendus sur une descendance de 1600 graines",
        statement: "À l'issue du croisement F1 x F1 entre deux plants de pois hybrides pour la forme (lisse dominant R, ridé récessif r) et la couleur (jaune dominant J, vert récessif j), on récolte un total de 1600 graines en F2. Calculez les effectifs théoriques attendus pour chaque phénotype dans l'hypothèse de gènes indépendants.",
        methodSteps: [
          "1. Vérification de l'hypothèse d'indépendance : les proportions théoriques sont 9/16, 3/16, 3/16, 1/16.",
          "2. Graines lisses et jaunes [RJ] : 1600 x (9/16) = 100 x 9 = 900 graines.",
          "3. Graines lisses et vertes [Rj] : 1600 x (3/16) = 100 x 3 = 300 graines.",
          "4. Graines ridées et jaunes [rJ] : 1600 x (3/16) = 100 x 3 = 300 graines.",
          "5. Graines ridées et vertes [rj] : 1600 x (1/16) = 100 x 1 = 100 graines.",
          "6. Vérification du total : 900 + 300 + 300 + 100 = 1600 graines."
        ],
        conclusion: "Effectifs théoriques attendus : 900 [RJ], 300 [Rj], 300 [rJ] et 100 [rj]."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Échiquier de croisement F1 x F1 en dihybridisme à gènes indépendants (16 cases)",
        caption: "La 3e loi de Mendel (ségrégation indépendante) produit en F2 les 16 combinaisons et les célèbres proportions : 9/16, 3/16, 3/16, 1/16.",
        svgContent: `<svg viewBox="0 0 620 310" width="100%" style="max-width:620px;height:auto" class="text-slate-700 dark:text-slate-200" role="img" aria-label="Échiquier 16 cases de Mendel">
  <rect x="10" y="10" width="600" height="290" rx="14" fill="currentColor" fill-opacity="0.02" stroke="#CBD5E1" stroke-width="1.5" />
  
  <!-- Légende des 4 phénotypes F2 -->
  <rect x="30" y="25" width="12" height="12" rx="3" fill="#F59E0B" />
  <text x="48" y="35" font-size="9" font-weight="bold" fill="#B45309">9/16 [R, J] (Rond Jaune)</text>

  <rect x="180" y="25" width="12" height="12" rx="3" fill="#3B82F6" />
  <text x="198" y="35" font-size="9" font-weight="bold" fill="#1D4ED8">3/16 [R, j] (Rond vert)</text>

  <rect x="320" y="25" width="12" height="12" rx="3" fill="#10B981" />
  <text x="338" y="35" font-size="9" font-weight="bold" fill="#047857">3/16 [r, J] (ridé Jaune)</text>

  <rect x="460" y="25" width="12" height="12" rx="3" fill="#EC4899" />
  <text x="478" y="35" font-size="9" font-weight="bold" fill="#BE185D">1/16 [r, j] (ridé vert)</text>

  <!-- Grille 4x4 (cases de 80x50) -->
  <!-- Ligne d'en-tête gamètes ♀ -->
  <text x="100" y="65" font-size="9" font-weight="bold" fill="#475569">♂ \\ ♀</text>
  <text x="190" y="65" font-size="9" font-weight="bold" fill="#475569" text-anchor="middle">1/4 (R, J)</text>
  <text x="280" y="65" font-size="9" font-weight="bold" fill="#475569" text-anchor="middle">1/4 (R, j)</text>
  <text x="370" y="65" font-size="9" font-weight="bold" fill="#475569" text-anchor="middle">1/4 (r, J)</text>
  <text x="460" y="65" font-size="9" font-weight="bold" fill="#475569" text-anchor="middle">1/4 (r, j)</text>

  <!-- Ligne 1 : Gamète ♂ 1/4 (R, J) -->
  <text x="100" y="105" font-size="9" font-weight="bold" fill="#475569">1/4 (R,J)</text>
  <rect x="150" y="80" width="80" height="45" rx="4" fill="#FEF3C7" stroke="#F59E0B" />
  <text x="190" y="105" font-size="9" font-weight="bold" fill="#B45309" text-anchor="middle">[R, J]</text>
  <rect x="240" y="80" width="80" height="45" rx="4" fill="#FEF3C7" stroke="#F59E0B" />
  <text x="280" y="105" font-size="9" font-weight="bold" fill="#B45309" text-anchor="middle">[R, J]</text>
  <rect x="330" y="80" width="80" height="45" rx="4" fill="#FEF3C7" stroke="#F59E0B" />
  <text x="370" y="105" font-size="9" font-weight="bold" fill="#B45309" text-anchor="middle">[R, J]</text>
  <rect x="420" y="80" width="80" height="45" rx="4" fill="#FEF3C7" stroke="#F59E0B" />
  <text x="460" y="105" font-size="9" font-weight="bold" fill="#B45309" text-anchor="middle">[R, J]</text>

  <!-- Ligne 2 : Gamète ♂ 1/4 (R, j) -->
  <text x="100" y="155" font-size="9" font-weight="bold" fill="#475569">1/4 (R,j)</text>
  <rect x="150" y="130" width="80" height="45" rx="4" fill="#FEF3C7" stroke="#F59E0B" />
  <text x="190" y="155" font-size="9" font-weight="bold" fill="#B45309" text-anchor="middle">[R, J]</text>
  <rect x="240" y="130" width="80" height="45" rx="4" fill="#DBEAFE" stroke="#3B82F6" />
  <text x="280" y="155" font-size="9" font-weight="bold" fill="#1D4ED8" text-anchor="middle">[R, j]</text>
  <rect x="330" y="130" width="80" height="45" rx="4" fill="#FEF3C7" stroke="#F59E0B" />
  <text x="370" y="155" font-size="9" font-weight="bold" fill="#B45309" text-anchor="middle">[R, J]</text>
  <rect x="420" y="130" width="80" height="45" rx="4" fill="#DBEAFE" stroke="#3B82F6" />
  <text x="460" y="155" font-size="9" font-weight="bold" fill="#1D4ED8" text-anchor="middle">[R, j]</text>

  <!-- Ligne 3 : Gamète ♂ 1/4 (r, J) -->
  <text x="100" y="205" font-size="9" font-weight="bold" fill="#475569">1/4 (r,J)</text>
  <rect x="150" y="180" width="80" height="45" rx="4" fill="#FEF3C7" stroke="#F59E0B" />
  <text x="190" y="205" font-size="9" font-weight="bold" fill="#B45309" text-anchor="middle">[R, J]</text>
  <rect x="240" y="180" width="80" height="45" rx="4" fill="#FEF3C7" stroke="#F59E0B" />
  <text x="280" y="205" font-size="9" font-weight="bold" fill="#B45309" text-anchor="middle">[R, J]</text>
  <rect x="330" y="180" width="80" height="45" rx="4" fill="#D1FAE5" stroke="#10B981" />
  <text x="370" y="205" font-size="9" font-weight="bold" fill="#047857" text-anchor="middle">[r, J]</text>
  <rect x="420" y="180" width="80" height="45" rx="4" fill="#D1FAE5" stroke="#10B981" />
  <text x="460" y="205" font-size="9" font-weight="bold" fill="#047857" text-anchor="middle">[r, J]</text>

  <!-- Ligne 4 : Gamète ♂ 1/4 (r, j) -->
  <text x="100" y="255" font-size="9" font-weight="bold" fill="#475569">1/4 (r,j)</text>
  <rect x="150" y="230" width="80" height="45" rx="4" fill="#FEF3C7" stroke="#F59E0B" />
  <text x="190" y="255" font-size="9" font-weight="bold" fill="#B45309" text-anchor="middle">[R, J]</text>
  <rect x="240" y="230" width="80" height="45" rx="4" fill="#DBEAFE" stroke="#3B82F6" />
  <text x="280" y="255" font-size="9" font-weight="bold" fill="#1D4ED8" text-anchor="middle">[R, j]</text>
  <rect x="330" y="230" width="80" height="45" rx="4" fill="#D1FAE5" stroke="#10B981" />
  <text x="370" y="255" font-size="9" font-weight="bold" fill="#047857" text-anchor="middle">[r, J]</text>
  <rect x="420" y="230" width="80" height="45" rx="4" fill="#FCE7F3" stroke="#EC4899" />
  <text x="460" y="255" font-size="9" font-weight="bold" fill="#BE185D" text-anchor="middle">[r, j]</text>
</svg>`,
        tableData: {
          headers: ["Gamètes ♂ \\ ♀", "1/4 (R, J)", "1/4 (R, j)", "1/4 (r, J)", "1/4 (r, j)"],
          rows: [
            ["1/4 (R, J)", "1/16 [RJ] (RR JJ)", "1/16 [RJ] (RR Jj)", "1/16 [RJ] (Rr JJ)", "1/16 [RJ] (Rr Jj)"],
            ["1/4 (R, j)", "1/16 [RJ] (RR Jj)", "1/16 [Rj] (RR jj)", "1/16 [RJ] (Rr Jj)", "1/16 [Rj] (Rr jj)"],
            ["1/4 (r, J)", "1/16 [RJ] (Rr JJ)", "1/16 [RJ] (Rr Jj)", "1/16 [rJ] (rr JJ)", "1/16 [rJ] (rr Jj)"],
            ["1/4 (r, j)", "1/16 [RJ] (Rr Jj)", "1/16 [Rj] (Rr jj)", "1/16 [rJ] (rr Jj)", "1/16 [rv] (rr jj)"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c13_q1",
          type: "mcq",
          prompt: "Quel est le résultat phénotypique caractéristique d'un croisement F1 x F1 en dihybridisme pour deux gènes indépendants avec dominance complète ?",
          options: [
            "3/4 phénotype dominant et 1/4 phénotype récessif",
            "9/16, 3/16, 3/16 et 1/16",
            "1/4, 1/4, 1/4 et 1/4",
            "1/2 parental et 1/2 recombiné"
          ],
          correctAnswerIndex: 1,
          explanation: "La ségrégation 9/16 (double dominant), 3/16 (dominant-récessif), 3/16 (récessif-dominant) et 1/16 (double récessif) est la signature classique de la F2 d'un dihybridisme à gènes autosomiques indépendants avec dominance complète."
        },
        {
          id: "tle_d_svt_c13_q2",
          type: "mcq",
          prompt: "À quel phénomène cytologique de la méiose est due la production de 4 types de gamètes équiprobables par un individu double hétérozygote à gènes indépendants ?",
          options: [
            "Au crossing-over en prophase I",
            "À la réplication semi-conservative de l'ADN en interphase",
            "Au brassage interchromosomique résultant de la disjonction aléatoire des paires de chromosomes en anaphase I",
            "À la cytocinèse en télophase II"
          ],
          correctAnswerIndex: 2,
          explanation: "Les gènes étant sur des paires chromosomiques différentes, la migration indépendante des chromosomes homologues maternels et paternels vers chaque pôle cellulaire en anaphase I constitue le brassage interchromosomique, produisant 4 types de gamètes à 25 % chacun."
        },
        {
          id: "tle_d_svt_c13_q3",
          type: "mcq",
          prompt: "Combien de génotypes différents obtient-on dans l'échiquier de croisement à 16 cases d'un dihybridisme indépendant F1 x F1 ?",
          options: [
            "4 génotypes",
            "8 génotypes",
            "9 génotypes",
            "16 génotypes"
          ],
          correctAnswerIndex: 2,
          explanation: "Chaque couple donne 3 génotypes (ex. RR, Rr, rr). Le produit combinatoire donne 3 x 3 = 9 génotypes distincts répartis dans les 16 cases de l'échiquier."
        },
        {
          id: "tle_d_svt_c13_q4",
          type: "mcq",
          prompt: "Quelle proportion des individus de la F2 présente un phénotype recombiné (différent de celui des deux parents de lignée pure P1 et P2) ?",
          options: [
            "1/16",
            "6/16 (soit 3/8)",
            "9/16",
            "10/16"
          ],
          correctAnswerIndex: 1,
          explanation: "Les phénotypes parentaux sont 9/16 [RJ] et 1/16 [rj] (total 10/16). Les deux nouveaux phénotypes recombinés sont 3/16 [Rj] et 3/16 [rJ], soit une proportion totale de recombinés de 3/16 + 3/16 = 6/16 (3/8 ou 37,5 %)."
        },
        {
          id: "tle_d_svt_c13_q5",
          type: "mcq",
          prompt: "Quelle est la probabilité d'obtenir un individu homozygote double récessif (rr jj) parmi la descendance F2 d'un croisement indépendant ?",
          options: [
            "1/4",
            "1/8",
            "1/16",
            "9/16"
          ],
          correctAnswerIndex: 2,
          explanation: "Pour être double récessif, l'individu doit résulter de la rencontre du gamète (r, j) de fréquence 1/4 avec le gamète (r, j) de fréquence 1/4, soit une probabilité de 1/4 x 1/4 = 1/16 (6,25 %)."
        },
        {
          id: "tle_d_svt_c13_q6",
          type: "mcq",
          prompt: "Parmi les 9/16 individus au phénotype double dominant [RJ], quelle est la fraction exacte qui est purement homozygote de génotype (RR JJ) ?",
          options: [
            "1/9",
            "2/9",
            "4/9",
            "1/16"
          ],
          correctAnswerIndex: 0,
          explanation: "Dans les 16 cases de l'échiquier, il y a 9 cases de phénotype [RJ], mais une seule case possède le génotype homozygote (RR JJ). Parmi les individus [RJ], la fraction d'homozygotes est donc de 1/9 (soit 1/16 de la population totale)."
        }
      ]
    },
    {
      id: "pt2_test_cross_dihybridisme_genes_independants",
      order: 2,
      title: "Le test-cross en dihybridisme à gènes indépendants : proportions 1/4, 1/4, 1/4, 1/4",
      summary: "Principe et utilité génétique du test-cross (croisement de l'hybride F1 avec le parent double récessif), analyse directe des gamètes parentaux et recombinés, et obtention de 4 phénotypes équiprobables (25 % chacun).",
      conceptExplanation: "Le test-cross (ou croisement-test, parfois appelé back-cross ou croisement en retour) est l'outil expérimental par excellence de la génétique mendélienne pour déterminer le génotype d'un individu ou le mode de transmission de deux gènes.\n\n1. Définition et principe fondamental du test-cross :\nUn test-cross consiste à croiser un individu de génotype inconnu ou hétérozygote (généralement l'hybride F1) avec un partenaire testeur qui est obligatoirement homozygote récessif pour tous les gènes considérés (ici un individu double récessif de génotype r//r ; v//v et de phénotype [rv]).\n- Rôle du parent double récessif : Ne possédant que des allèles récessifs, il ne produit qu'une seule catégorie de gamètes contenant uniquement les allèles récessifs (r, v) à 100 % ;\n- Conséquence capitale : Ces allèles récessifs apportés par le parent testeur ne masquent aucun des allèles apportés par l'hybride F1. Par conséquent, les phénotypes observés dans la descendance du test-cross reflètent fidèlement, en qualité et en quantité (proportions exactes), les gamètes produits par le parent hybride F1 testé.\n\n2. Déroulement du test-cross pour deux gènes indépendants :\n- Croisement : Hybride F1 [RV] x Parent récessif P2 [rv] ;\n- Génotypes : (R//r ; V//v) x (r//r ; v//v) ;\n- Gamètes produits par le parent récessif : 100 % (r, v) ;\n- Gamètes produits par l'hybride F1 (grâce au brassage interchromosomique) : 4 types de gamètes équiprobables à 25 % (1/4) chacun :\n  * 1/4 (R, V) [gamète parental] ;\n  * 1/4 (R, v) [gamète recombiné] ;\n  * 1/4 (r, V) [gamète recombiné] ;\n  * 1/4 (r, v) [gamète parental].\n\n3. Résultats phénotypiques de la descendance du test-cross :\nEn combinant le gamète unique du parent testeur avec les 4 gamètes de la F1, on obtient 4 phénotypes strictement équiprobables :\n- 1/4 = 25 % de phénotype [RV] (génotype R//r ; V//v) ;\n- 1/4 = 25 % de phénotype [Rv] (génotype R//r ; v//v) ;\n- 1/4 = 25 % de phénotype [rV] (génotype r//r ; V//v) ;\n- 1/4 = 25 % de phénotype [rv] (génotype r//r ; v//v).\n\n4. Règle diagnostique du test-cross au Baccalauréat :\n- Si un test-cross donne 4 phénotypes d'effectifs égaux (proportions 1:1:1:1 ou 25 % chacun), on conclut immédiatement que les deux couples d'allèles sont situés sur deux paires différentes de chromosomes : les gènes sont INDÉPENDANTS ;\n- La somme des phénotypes parentaux ([RV] + [rv] = 25 % + 25 % = 50 %) est égale à la somme des phénotypes recombinés ([Rv] + [rV] = 25 % + 25 % = 50 %).",
      keyRule: "Un test-cross en dihybridisme qui produit 4 phénotypes équiprobables (1/4, 1/4, 1/4, 1/4 soit 25 % chacun) démontre de façon indiscutable que les deux gènes étudiés sont indépendants (portés par des chromosomes différents).",
      formulas: [
        {
          name: "Équation phénotypique du test-cross indépendant",
          formula: "\\text{Descendance } = \\frac{1}{4}[AB] + \\frac{1}{4}[Ab] + \\frac{1}{4}[aB] + \\frac{1}{4}[ab] \\iff 25\\% : 25\\% : 25\\% : 25\\%",
          note: "50 % de phénotypes parentaux et 50 % de phénotypes recombinés"
        }
      ],
      workedExample: {
        title: "Identification du mode de transmission à partir des résultats d'un test-cross",
        statement: "On croise une plante hybride F1 à fleurs rouges et tiges épineuses [RE] avec une plante à fleurs blanches et tiges lisses [be]. La descendance comprend : 248 plantes [RE], 252 plantes [Re], 249 plantes [bE] et 251 plantes [be]. 1) Quel est le type de ce croisement ? 2) Que peut-on déduire quant à la localisation des gènes ?",
        methodSteps: [
          "1. Type de croisement : le parent [be] est double récessif (fleurs blanches et tiges lisses). Ce croisement d'un hybride F1 avec un individu double récessif est un test-cross (ou back-cross).",
          "2. Calcul des fréquences : effectif total = 248 + 252 + 249 + 251 = 1000 plantes. Fréquence de chaque phénotype : [RE] = 24,8 %, [Re] = 25,2 %, [bE] = 24,9 %, [be] = 25,1 %.",
          "3. Interprétation : ces fréquences sont statistiquement égales à 25 % (1/4) chacune.",
          "4. Déduction : les 4 types de gamètes produits par l'hybride F1 sont équiprobables à 1/4 chacun. Cette équiprobabilité résulte du brassage interchromosomique en anaphase I de méiose. Les deux couples d'allèles sont donc portés par deux paires distinctes de chromosomes homologues : les gènes sont indépendants."
        ],
        conclusion: "Il s'agit d'un test-cross donnant 4 phénotypes équiprobables (1/4 chacun), ce qui prouve formellement que les deux gènes sont indépendants."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Échiquier de test-cross pour deux gènes indépendants",
        tableData: {
          headers: ["Gamète du parent double récessif (100 % r, v)", "Gamète F1 : 1/4 (R, V)", "Gamète F1 : 1/4 (R, v)", "Gamète F1 : 1/4 (r, V)", "Gamète F1 : 1/4 (r, v)"],
          rows: [
            ["Génotype du descendant", "R//r ; V//v", "R//r ; v//v", "r//r ; V//v", "r//r ; v//v"],
            ["Phénotype exprimé", "[RV] (25 %)", "[Rv] (25 %)", "[rV] (25 %)", "[rv] (25 %)"],
            ["Nature génétique", "Parental", "Recombiné", "Recombiné", "Parental"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c13_q7",
          type: "mcq",
          prompt: "Quel est l'intérêt fondamental de croiser un hybride F1 avec un individu double homozygote récessif (test-cross) ?",
          options: [
            "Éliminer les mutations létales",
            "Révéler directement les proportions et la nature des gamètes produits par l'hybride car le parent testeur n'apporte que des allèles récessifs",
            "Multiplier par quatre le taux de fécondation",
            "Forcer les chromosomes à s'apparier en mitose"
          ],
          correctAnswerIndex: 1,
          explanation: "Le parent double récessif ne fournissant que des allèles récessifs, le phénotype de chaque descendant dépend exclusivement des allèles transmis par l'hybride F1. Le test-cross donne donc une lecture directe et non biaisée de la gamétogenèse de l'hétérozygote."
        },
        {
          id: "tle_d_svt_c13_q8",
          type: "mcq",
          prompt: "Quels résultats phénotypiques indiquent avec certitude que deux gènes sont indépendants lors d'un test-cross ?",
          options: [
            "9/16, 3/16, 3/16, 1/16",
            "4 phénotypes dans les proportions 1/4, 1/4, 1/4, 1/4 (soit 25 % chacun)",
            "2 phénotypes parentaux majoritaires et 2 recombinés minoritaires",
            "100 % de phénotype parental double dominant"
          ],
          correctAnswerIndex: 1,
          explanation: "La ségrégation 1/4, 1/4, 1/4, 1/4 (soit 25 % pour chacun des 4 phénotypes) est la démonstration mathématique et biologique de l'indépendance de deux couples d'allèles dans un test-cross."
        },
        {
          id: "tle_d_svt_c13_q9",
          type: "mcq",
          prompt: "Dans un test-cross à gènes indépendants, quelle est la proportion cumulée des phénotypes recombinés par rapport aux phénotypes parentaux ?",
          options: [
            "25 % de recombinés et 75 % de parentaux",
            "50 % de recombinés et 50 % de parentaux",
            "6,25 % de recombinés et 93,75 % de parentaux",
            "0 % de recombinés car les gènes ne se mélangent jamais"
          ],
          correctAnswerIndex: 1,
          explanation: "Les 4 phénotypes étant à 25 % chacun, les deux phénotypes parentaux totalisent 25 % + 25 % = 50 % et les deux phénotypes recombinés totalisent 25 % + 25 % = 50 %."
        },
        {
          id: "tle_d_svt_c13_q10",
          type: "mcq",
          prompt: "Si un croisement F1 x double récessif donne 498 [AB], 502 [Ab], 499 [aB] et 501 [ab], quel est le génotype de l'hybride F1 testé ?",
          options: [
            "Homozygote dominant (A//A ; B//B)",
            "(A//a ; B//b)",
            "(A b // a B) lié en position trans",
            "Homozygote récessif (a//a ; b//b)"
          ],
          correctAnswerIndex: 1,
          explanation: "Les 4 phénotypes étant équiprobables à environ 500 individus chacun, les deux gènes sont indépendants et l'hybride testé est double hétérozygote de génotype (A//a ; B//b)."
        },
        {
          id: "tle_d_svt_c13_q11",
          type: "mcq",
          prompt: "Quelle différence fondamentale distingue un croisement F1 x F1 d'un test-cross F1 x parent double récessif ?",
          options: [
            "Le croisement F1 x F1 teste la mitose, le test-cross teste la méiose",
            "Le croisement F1 x F1 implique deux parents hétérozygotes (échiquier à 16 cases), tandis que le test-cross croise un hétérozygote avec un homozygote récessif (échiquier à 4 cases)",
            "Le test-cross ne peut être réalisé que chez les animaux",
            "Le croisement F1 x F1 donne toujours des gènes liés"
          ],
          correctAnswerIndex: 1,
          explanation: "Dans le croisement F1 x F1, les deux parents produisent chacun 4 gamètes (4x4 = 16 cases). Dans le test-cross, le parent récessif ne produit qu'un seul type de gamète, donnant une descendance directement proportionnelle aux gamètes de la F1 (échiquier 1x4 = 4 cases)."
        },
        {
          id: "tle_d_svt_c13_q12",
          type: "mcq",
          prompt: "Si deux gènes étaient indépendants mais situés sur la même paire de chromosomes homologues très éloignés l'un de l'autre, quel taux maximal de recombinaison observe-t-on en test-cross ?",
          options: [
            "25 %",
            "50 %",
            "75 %",
            "100 %"
          ],
          correctAnswerIndex: 1,
          explanation: "Même sur un même chromosome, lorsque la distance est très grande, le taux de recombinaison par crossing-over plafonne à 50 % (25 % de chaque classe recombinée), mimant parfaitement une indépendance génétique (ségrégation 1/4 chacun)."
        }
      ]
    },
    {
      id: "pt3_liaison_genetique_linkage_crossing_over_drosophile",
      order: 3,
      title: "Liaison génétique (Linkage) et crossing-over : le modèle de la drosophile",
      summary: "Gènes liés portés par le même chromosome, linkage absolu chez le mâle de drosophile, linkage partiel chez la femelle par crossing-over (brassage intrachromosomique en prophase I), prédominance des phénotypes parentaux et positions cis/trans.",
      conceptExplanation: "Lorsque deux couples d'allèles sont situés sur la même paire de chromosomes homologues, on dit que les gènes sont liés (phénomène de liaison génétique ou linkage). Ces gènes ne se transmettent pas indépendamment.\n\n1. Le modèle expérimental de Morgan : la drosophile (Drosophila melanogaster) :\nThomas Hunt Morgan a étudié la transmission de deux caractères chez la drosophile :\n- Couleur du corps : corps gris (sauvage, allèle dominant $b^+$ ou $e^+$ ou $n^+$) vs corps noir (mutant, allèle récessif $b$ ou $e$ ou $n$) ;\n- Longueur des ailes : ailes longues (sauvage, allèle dominant $vg^+$) vs ailes vestigiales ou courtes (mutant, allèle récessif $vg$).\n\n2. Cas 1 : Test-cross avec un mâle F1 hybride (Linkage absolu) :\nOn croise un mâle F1 hybride corps gris / ailes longues avec une femelle double récessive corps noir / ailes vestigiales :\n- Résultat obtenu dans la descendance : exactement deux phénotypes parentaux à proportions égales :\n  * 50 % [corps gris, ailes longues] ;\n  * 50 % [corps noir, ailes vestigiales] ;\n  * 0 % de phénotypes recombinés !\n- Règle fondamentale de la drosophile : Chez le mâle de la drosophile, il n'y a JAMAIS de crossing-over (absence d'enjambement méiotique). La liaison entre les gènes est dite ABSOLUE (linkage total). Le mâle ne produit que les deux gamètes parentaux non remaniés.\n\n3. Cas 2 : Test-cross avec une femelle F1 hybride (Linkage partiel et crossing-over) :\nOn croise une femelle F1 hybride corps gris / ailes longues avec un mâle double récessif corps noir / ailes vestigiales :\n- Résultat obtenu dans la descendance : quatre phénotypes d'effectifs très inégaux :\n  * Deux phénotypes parentaux MAJORITAIRES (ex. 42,1 % [$n^+ vg^+$] et 42,2 % [$n vg$]) totalisant environ 84,3 % ;\n  * Deux phénotypes recombinés MINORITAIRES (ex. 7,8 % [$n^+ vg$] et 7,9 % [$n vg^+$]) totalisant environ 15,7 %.\n- Interprétation cytologique : Chez la femelle de drosophile, la liaison est PARTIELLE. Au cours de la prophase I de méiose, lors de l'appariement des chromosomes homologues en tétrades, les chromatides non-sœurs s'entrecroisent au niveau de chiasmas, se cassent et se ressoudent en échangeant des segments homologues : c'est le crossing-over (ou enjambement chromosomique). Ce phénomène réalise un brassage intrachromosomique, générant de nouvelles combinaisons alléliques appelées gamètes recombinés.\n- Comme le crossing-over est un événement probabiliste et relativement rare entre deux loci proches, les gamètes recombinés sont toujours strictement minoritaires par rapport aux gamètes parentaux.\n\n4. Configuration des allèles chez le double hétérozygote (Cis vs Trans) :\n- Position Cis (ou de couplage) : les deux allèles dominants sont situés sur le même chromosome, et les deux allèles récessifs sur le chromosome homologue. Écriture : $\\frac{n^+ \\, vg^+}{n \\, vg}$. Les phénotypes parentaux majoritaires sont les doubles dominants et les doubles récessifs ;\n- Position Trans (ou de répulsion) : chaque chromosome porte un allèle dominant et un allèle récessif. Écriture : $\\frac{n^+ \\, vg}{n \\, vg^+}$. Dans ce cas, les phénotypes parentaux majoritaires sont les phénotypes mixtes [$n^+ vg$] et [$n vg^+$], et les recombinés minoritaires deviennent les doubles dominants et doubles récessifs !",
      keyRule: "Chez la drosophile : 1) Le mâle ne fait AUCUN crossing-over (linkage absolu : 2 phénotypes 50/50 en test-cross). 2) La femelle réalise le crossing-over (linkage partiel : 4 phénotypes inégaux avec parentaux majoritaires et recombinés minoritaires). 3) Des proportions inégales en test-cross prouvent que les gènes sont liés.",
      formulas: [
        {
          name: "Signature phénotypique du linkage partiel en test-cross",
          formula: "\\% \\text{ Parentaux} > 50\\%, \\quad \\% \\text{ Recombinés} < 50\\%, \\quad \\% \\text{ Parentaux} + \\% \\text{ Recombinés} = 100\\%",
          note: "En cas de gènes indépendants, Parentaux = Recombinés = 50 %"
        }
      ],
      workedExample: {
        title: "Détermination de la position Cis ou Trans d'après les résultats d'un test-cross",
        statement: "Une femelle drosophile hybride de phénotype [corps gris, yeux rouges] est croisée avec un mâle double récessif [corps noir, yeux pourpres]. La descendance donne : 415 [gris, pourpre], 425 [noir, rouge], 82 [gris, rouge] et 78 [noir, pourpre]. 1) Les gènes sont-ils liés ou indépendants ? 2) La femelle F1 avait-elle ses allèles en position cis ou trans ?",
        methodSteps: [
          "1. Effectif total = 415 + 425 + 82 + 78 = 1000 drosophiles.",
          "2. Analyse des proportions : les phénotypes [gris, pourpre] (41,5 %) et [noir, rouge] (42,5 %) sont très majoritaires (total = 84 %). Les phénotypes [gris, rouge] (8,2 %) et [noir, pourpre] (7,8 %) sont très minoritaires (total = 16 %).",
          "3. Les proportions étant très inégales (parentaux > recombinés), les deux gènes sont LIÉS sur le même chromosome (linkage partiel avec crossing-over chez la femelle).",
          "4. Position des allèles chez la femelle : les phénotypes parentaux majoritaires correspondent aux chromosomes non remaniés transmis par la mère. Ici, les phénotypes majoritaires associent un allèle dominant et un allèle récessif ([gris, pourpre] et [noir, rouge]).",
          "5. Les deux allèles dominants n'étaient donc pas sur le même chromosome. La femelle F1 possède donc ses allèles en position TRANS (répulsion), de génotype (b+ pr // b pr+)."
        ],
        conclusion: "Les gènes sont liés et la femelle F1 est en configuration TRANS (b+ pr // b pr+)."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Comparaison Linkage Absolu (Mâle) vs Linkage Partiel (Femelle) chez la Drosophile",
        caption: "Mécanisme cytologique du Crossing-over en prophase I de méiose : formation du chiasma et échange réciproque de segments entre chromatides non-sœurs.",
        svgContent: `<svg viewBox="0 0 620 280" width="100%" style="max-width:620px;height:auto" class="text-slate-700 dark:text-slate-200" role="img" aria-label="Crossing-Over en prophase I">
  <rect x="10" y="10" width="600" height="260" rx="14" fill="currentColor" fill-opacity="0.02" stroke="#CBD5E1" stroke-width="1.5" />
  
  <!-- Étape 1 : Appariement des chromosomes homologues -->
  <g transform="translate(30, 30)">
    <rect x="0" y="0" width="160" height="200" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
    <text x="80" y="25" font-size="9" font-weight="bold" fill="#334155" text-anchor="middle">1. Homologues dupliqués</text>
    <!-- Chromosome 1 (Bleu) -->
    <line x1="50" y1="50" x2="50" y2="180" stroke="#3B82F6" stroke-width="6" stroke-linecap="round" />
    <line x1="65" y1="50" x2="65" y2="180" stroke="#3B82F6" stroke-width="6" stroke-linecap="round" />
    <text x="45" y="75" font-size="8" font-weight="bold" fill="#1D4ED8">A</text>
    <text x="45" y="155" font-size="8" font-weight="bold" fill="#1D4ED8">B</text>
    <!-- Chromosome 2 (Rouge) -->
    <line x1="95" y1="50" x2="95" y2="180" stroke="#EF4444" stroke-width="6" stroke-linecap="round" />
    <line x1="110" y1="50" x2="110" y2="180" stroke="#EF4444" stroke-width="6" stroke-linecap="round" />
    <text x="115" y="75" font-size="8" font-weight="bold" fill="#B91C1C">a</text>
    <text x="115" y="155" font-size="8" font-weight="bold" fill="#B91C1C">b</text>
  </g>

  <!-- Étape 2 : Chiasma en Prophase I -->
  <g transform="translate(225, 30)">
    <rect x="0" y="0" width="165" height="200" rx="8" fill="#FEF3C7" stroke="#F59E0B" />
    <text x="82" y="25" font-size="9" font-weight="bold" fill="#B45309" text-anchor="middle">2. Chiasma (Enjambement)</text>
    <!-- Chromatides externes intactes -->
    <line x1="45" y1="50" x2="45" y2="180" stroke="#3B82F6" stroke-width="5" stroke-linecap="round" />
    <line x1="120" y1="50" x2="120" y2="180" stroke="#EF4444" stroke-width="5" stroke-linecap="round" />
    <!-- Chromatides internes qui se croisent -->
    <path d="M 65 50 L 65 105 L 100 135 L 100 180" stroke="#3B82F6" stroke-width="5" fill="none" stroke-linecap="round" />
    <path d="M 100 50 L 100 105 L 65 135 L 65 180" stroke="#EF4444" stroke-width="5" fill="none" stroke-linecap="round" />
    <circle cx="82" cy="120" r="10" fill="none" stroke="#D97706" stroke-width="2" stroke-dasharray="2 2" />
    <text x="82" y="145" font-size="8" font-weight="bold" fill="#92400E" text-anchor="middle">Chiasma</text>
  </g>

  <!-- Étape 3 : 4 Gamètes résultants -->
  <g transform="translate(425, 30)">
    <rect x="0" y="0" width="165" height="200" rx="8" fill="#ECFDF5" stroke="#10B981" />
    <text x="82" y="25" font-size="9" font-weight="bold" fill="#047857" text-anchor="middle">3. 4 types de gamètes</text>
    <!-- Gamète 1 : Parental A B (Bleu) -->
    <line x1="30" y1="50" x2="30" y2="160" stroke="#3B82F6" stroke-width="5" stroke-linecap="round" />
    <text x="30" y="175" font-size="8" font-weight="bold" fill="#1D4ED8" text-anchor="middle">[A B]</text>
    <!-- Gamète 2 : Recombiné A b (Bleu + Rouge) -->
    <line x1="65" y1="50" x2="65" y2="110" stroke="#3B82F6" stroke-width="5" stroke-linecap="round" />
    <line x1="65" y1="110" x2="65" y2="160" stroke="#EF4444" stroke-width="5" stroke-linecap="round" />
    <text x="65" y="175" font-size="8" font-weight="bold" fill="#7C3AED" text-anchor="middle">[A b]*</text>
    <!-- Gamète 3 : Recombiné a B (Rouge + Bleu) -->
    <line x1="100" y1="50" x2="100" y2="110" stroke="#EF4444" stroke-width="5" stroke-linecap="round" />
    <line x1="100" y1="110" x2="100" y2="160" stroke="#3B82F6" stroke-width="5" stroke-linecap="round" />
    <text x="100" y="175" font-size="8" font-weight="bold" fill="#7C3AED" text-anchor="middle">[a B]*</text>
    <!-- Gamète 4 : Parental a b (Rouge) -->
    <line x1="135" y1="50" x2="135" y2="160" stroke="#EF4444" stroke-width="5" stroke-linecap="round" />
    <text x="135" y="175" font-size="8" font-weight="bold" fill="#B91C1C" text-anchor="middle">[a b]</text>

    <text x="82" y="192" font-size="7" fill="#065F46" text-anchor="middle">* Recombinés minoritaires</text>
  </g>
</svg>`,
        tableData: {
          headers: ["Paramètre", "Test-cross avec Mâle F1", "Test-cross avec Femelle F1"],
          rows: [
            ["Crossing-over en méiose", "ABSENT (0 % de crossing-over)", "PRÉSENT (échange de chromatides en prophase I)"],
            ["Nombre de gamètes produits", "2 types de gamètes parentaux", "4 types de gamètes (2 parentaux + 2 recombinés)"],
            ["Résultats du test-cross", "2 phénotypes équiprobables (50 % / 50 %)", "4 phénotypes inégaux (Parentaux majoritaires, Recombinés minoritaires)"],
            ["Phénotypes recombinés", "0 % (jamais de recombinés)", "Fréquence < 50 % (proportionnelle à la distance des gènes)"],
            ["Nature de la liaison", "Liaison totale / absolue", "Liaison partielle"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c13_q13",
          type: "mcq",
          prompt: "Quelle particularité biologique majeure présente la méiose chez le mâle de la drosophile (Drosophila melanogaster) ?",
          options: [
            "Il réalise deux fois plus de crossing-over que la femelle",
            "Il n'effectue aucun crossing-over (absence totale de recombinaison intrachromosomique)",
            "Ses chromosomes ne se séparent jamais en anaphase",
            "Il ne produit que des gamètes diploïdes"
          ],
          correctAnswerIndex: 1,
          explanation: "Chez le mâle de drosophile, le complexe synaptonémal ne permet aucun échange de segments entre chromatides non-sœurs : il n'y a jamais de crossing-over chez le mâle. La liaison est donc absolue."
        },
        {
          id: "tle_d_svt_c13_q14",
          type: "mcq",
          prompt: "Lors d'un test-cross chez la drosophile impliquant une femelle F1, on obtient 44 % [AB], 44 % [ab], 6 % [Ab] et 6 % [aB]. Quelle conclusion s'impose ?",
          options: [
            "Les gènes sont indépendants",
            "Les gènes sont liés en position cis et la liaison est partielle par crossing-over",
            "Les gènes sont liés en position trans",
            "Il s'agit d'une mutation létale"
          ],
          correctAnswerIndex: 1,
          explanation: "Les phénotypes parentaux doubles dominants [AB] et doubles récessifs [ab] sont très largement majoritaires (88 % au total), tandis que les recombinés sont minoritaires (12 %). Cela prouve que les gènes sont liés sur le même chromosome en position CIS (AB//ab)."
        },
        {
          id: "tle_d_svt_c13_q15",
          type: "mcq",
          prompt: "À quel stade précis de la méiose se déroule le crossing-over responsable du brassage intrachromosomique ?",
          options: [
            "En prophase I, lors de l'appariement des chromosomes homologues en bivalents/tétrades",
            "En anaphase I, lors de la séparation des chromosomes homologues",
            "En métaphase II, sur la plaque équatoriale",
            "En télophase II, lors de la formation de l'enveloppe nucléaire"
          ],
          correctAnswerIndex: 0,
          explanation: "Le crossing-over a lieu exclusivement en prophase I de méiose, au cours du pachytène, lorsque les chromosomes homologues étroitement appariés en bivalents forment des chiasmas où s'échangent des fragments de chromatides non-sœurs."
        },
        {
          id: "tle_d_svt_c13_q16",
          type: "mcq",
          prompt: "Un individu double hétérozygote possède le génotype (A b // a B). On dit que ses allèles sont en position :",
          options: [
            "Cis (ou couplage)",
            "Trans (ou répulsion)",
            "Indépendante",
            "Hémizygote"
          ],
          correctAnswerIndex: 1,
          explanation: "Lorsque chaque chromosome homologue porte un allèle dominant et un allèle récessif (ici A avec b sur un chromosome, et a avec B sur l'autre), la configuration est appelée position trans ou répulsion."
        },
        {
          id: "tle_d_svt_c13_q17",
          type: "mcq",
          prompt: "Pourquoi les phénotypes recombinés issus d'un crossing-over sont-ils toujours minoritaires (< 50 %) lors d'un test-cross à gènes liés ?",
          options: [
            "Parce que les spermatozoïdes recombinés meurent avant la fécondation",
            "Parce que le crossing-over ne se produit pas systématiquement dans toutes les cellules mères de gamètes",
            "Parce que les allèles recombinés sont obligatoirement récessifs",
            "Parce que la drosophile femelle détruit la moitié de ses ovocytes"
          ],
          correctAnswerIndex: 1,
          explanation: "L'enjambement méiotique est un événement probabiliste qui n'affecte qu'une fraction des cellules entrant en méiose. Dans les méioses où il a lieu, seules deux chromatides sur les quatre de la tétrade participent à l'échange. Ainsi, les gamètes parentaux restent toujours majoritaires."
        },
        {
          id: "tle_d_svt_c13_q18",
          type: "mcq",
          prompt: "Que donnerait un test-cross réalisé entre un mâle F1 hybride corps gris / ailes longues (n+ vg+ // n vg) et une femelle corps noir / ailes vestigiales (n vg // n vg) ?",
          options: [
            "25 % de chacun des 4 phénotypes",
            "50 % [corps gris, ailes longues] et 50 % [corps noir, ailes vestigiales]",
            "75 % [corps gris, ailes longues] et 25 % [corps noir, ailes vestigiales]",
            "100 % de drosophiles grises aux ailes longues"
          ],
          correctAnswerIndex: 1,
          explanation: "Chez le mâle de drosophile, le crossing-over est impossible (linkage absolu). Il ne produit donc que deux catégories de gamètes parentaux à 50 % chacun : (n+, vg+) et (n, vg). La descendance du test-cross est donc constituée à 50 % de [n+ vg+] et à 50 % de [n vg]."
        }
      ]
    },
    {
      id: "pt4_calcul_distance_genetique_croisement_f1_carte_factorielle",
      order: 4,
      title: "Distance génétique, croisement F1 x F1 lié et construction de la carte factorielle",
      summary: "Formule de la distance génétique (dg en UR ou centimorgans), relation entre taux de recombinaison et distance chromosomique, analyse du croisement F1 x F1 lié chez la drosophile, et établissement de la carte factorielle.",
      conceptExplanation: "La fréquence des recombinaisons par crossing-over dépend directement de l'éloignement physique entre les loci des deux gènes sur le chromosome : plus deux gènes sont distants, plus la probabilité qu'un chiasma se forme entre eux est élevée.\n\n1. Définition et calcul de la distance génétique (dg) :\nLa distance génétique séparant deux gènes liés est définie par le pourcentage de gamètes recombinés formés lors de la méiose. Elle est exprimée en Unités de Recombinaison (UR) ou en centimorgans (cM), en hommage à Morgan :\n$$dg = \\frac{\\text{Effectif total des recombinés}}{\\text{Effectif total de la descendance}} \\times 100$$\n- Équivalence fondamentale : $1 \\% \\text{ de recombinaison} = 1 \\text{ UR} = 1 \\text{ cM}$ ;\n- Exemple : si un test-cross sur 1000 drosophiles donne 78 [$n^+ vg$] et 79 [$n vg^+$] recombinés, l'effectif des recombinés est $78 + 79 = 157$. La distance génétique est :\n$$dg = \\frac{157}{1000} \\times 100 = 15,7 \\text{ UR (ou cM)}.$$\n\n2. Le croisement F1 x F1 lié chez la drosophile (♀ F1 x ♂ F1) :\nLorsque l'on croise deux hybrides F1 entre eux sans passer par un test-cross, l'interprétation doit obligatoirement tenir compte de l'absence de crossing-over chez le mâle :\n- La femelle F1 (faisant du crossing-over avec une fréquence de recombinaison P = 15,7 % = 0,157) produit 4 types de gamètes :\n  * Gamètes parentaux à fréquence $(1 - P) / 2$ : 42,15 % $(n^+, vg^+)$ et 42,15 % $(n, vg)$ ;\n  * Gamètes recombinés à fréquence $P / 2$ : 7,85 % $(n^+, vg)$ et 7,85 % $(n, vg^+)$ ;\n- Le mâle F1 (ne faisant aucun crossing-over) ne produit que 2 types de gamètes parentaux équiprobables à 50 % (0,50) chacun : 50 % $(n^+, vg^+)$ et 50 % $(n, vg)$ ;\n- Échiquier de croisement à 4 x 2 = 8 cases :\n  * Phénotype double dominant [$n^+ vg^+$] : rassemblant toutes les cases contenant au moins un allèle $n^+$ et un allèle $vg^+$, il atteint une fréquence théorique de : $42,15\\% + (50\\% \\times 42,15\\%) + \\dots = 71,08 \\%$ (soit environ 71 %) ;\n  * Phénotype double récessif [$n vg$] : obtenu uniquement par la fécondation du gamète parental femelle $(n, vg)$ par le gamète mâle $(n, vg)$ : $42,15\\% \\times 50\\% = 21,08 \\%$ (soit environ 21 %) ;\n  * Phénotypes recombinés [$n^+ vg$] et [$n vg^+$] : chacun vaut $7,85\\% \\times 50\\% = 3,92 \\%$ (soit environ 3,9 % chacun).\nCe résultat théorique (71 %, 21 %, 4 %, 4 %) est remarquablement différent du 9/16, 3/16, 3/16, 1/16 des gènes indépendants !\n\n3. Construction de la carte factorielle :\nLa carte factorielle est la représentation graphique linéaire de la disposition des gènes sur un chromosome, indiquant l'ordre relatif des loci et les distances qui les séparent selon une échelle choisie.\n- Méthode de construction :\n  1. Choisir une échelle graphique appropriée (ex. $1 \\text{ cm} \\leftrightarrow 2 \\text{ UR}$, ou $0,5 \\text{ cm} \\leftrightarrow 1 \\text{ UR}$) ;\n  2. Tracer un segment de droite figurant le chromosome ;\n  3. Positionner le locus du premier gène ;\n  4. Reporter à l'échelle calculée la distance $x$ séparant le premier gène du second (ex. pour $15,7 \\text{ UR}$ avec $0,5 \\text{ cm} \\leftrightarrow 1 \\text{ UR}$, la distance graphique est $x = 15,7 \\times 0,5 = 7,85 \\text{ cm}$) ;\n  5. Indiquer les symboles des allèles au niveau de chaque locus.",
      keyRule: "1) Distance génétique : dg = (somme des recombinés / total) x 100 en UR ou cM. 2) 1 UR = 1 cM = 1 % de recombinaison. 3) Dans un croisement F1 x F1 lié de drosophiles, le mâle ne fournissant que 2 gamètes (50/50), la descendance se compose d'environ 71 % double dominant, 21 % double récessif et 4 % pour chaque phénotype recombiné.",
      formulas: [
        {
          name: "Calcul de la distance génétique (dg)",
          formula: "dg = \\frac{\\sum \\text{Effectifs recombinés}}{N_{\\text{total}}} \\times 100 \\quad (\\text{en UR ou cM})",
          note: "1 UR (Unité de Recombinaison) = 1 cM (centimorgan) = 1 % de crossing-over"
        },
        {
          name: "Calcul d'échelle pour la carte factorielle",
          formula: "L = dg \\times \\text{Échelle} \\quad (\\text{ex. } L = 15,7 \\text{ UR} \\times 0,5 \\text{ cm/UR} = 7,85 \\text{ cm})",
          note: "Représentation strictement linéaire et proportionnelle sur l'axe du chromosome"
        }
      ],
      workedExample: {
        title: "Établissement d'une carte factorielle à trois gènes (A, B, C)",
        statement: "Des séries de croisements chez la drosophile ont permis de calculer les distances génétiques suivantes : d(A, B) = 12 cM ; d(B, C) = 5 cM ; d(A, C) = 17 cM. 1) Quel est l'ordre des trois gènes sur le chromosome ? 2) Construisez la carte factorielle avec l'échelle 1 cm pour 2 cM.",
        methodSteps: [
          "1. Analyse de l'additivité des distances : on observe que d(A, C) = 17 cM, ce qui est exactement égal à d(A, B) + d(B, C) = 12 + 5 = 17 cM.",
          "2. Déduction de l'ordre : le gène B est obligatoirement situé entre le gène A et le gène C. L'ordre des loci est donc A - B - C (ou C - B - A).",
          "3. Calcul des distances graphiques avec l'échelle 1 cm = 2 cM (soit 0,5 cm par cM) :",
          "   - Distance A-B : 12 / 2 = 6,0 cm ;",
          "   - Distance B-C : 5 / 2 = 2,5 cm ;",
          "   - Distance totale A-C : 17 / 2 = 8,5 cm (vérification : 6,0 + 2,5 = 8,5 cm).",
          "4. Tracé : sur une droite horizontale, on place le locus A en 0 cm, le locus B à 6 cm de A, et le locus C à 2,5 cm de B (soit 8,5 cm de A)."
        ],
        conclusion: "L'ordre des gènes est A - B - C. Sur la carte factorielle, le segment A-B mesure 6 cm et le segment B-C mesure 2,5 cm."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Représentation schématique d'une carte factorielle et calculs associés",
        tableData: {
          headers: ["Couple de gènes", "Taux de recombinaison observé", "Distance génétique (UR ou cM)", "Distance graphique (Échelle 1 cm = 2 UR)"],
          rows: [
            ["Gène n (corps) - Gène vg (ailes)", "15,7 % de recombinés", "15,7 UR", "7,85 cm"],
            ["Gène w (yeux) - Gène y (corps)", "1,5 % de recombinés", "1,5 UR", "0,75 cm"],
            ["Gène cn (yeux) - Gène vg (ailes)", "9,5 % de recombinés", "9,5 UR", "4,75 cm"],
            ["Gène b (corps) - Gène cn (yeux)", "9,0 % de recombinés", "9,0 UR", "4,50 cm"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c13_q19",
          type: "mcq",
          prompt: "Un test-cross portant sur 2000 individus donne 160 individus recombinés. Quelle est la distance génétique séparant les deux gènes ?",
          options: [
            "4 cM",
            "8 cM",
            "16 cM",
            "80 cM"
          ],
          correctAnswerIndex: 1,
          explanation: "La distance génétique se calcule par : dg = (Effectif recombinés / Effectif total) x 100 = (160 / 2000) x 100 = 0,08 x 100 = 8 cM (ou 8 UR)."
        },
        {
          id: "tle_d_svt_c13_q20",
          type: "mcq",
          prompt: "Quelle est la définition exacte d'une unité de recombinaison (UR ou centimorgan) ?",
          options: [
            "La distance séparant deux chromosomes en métaphase",
            "La distance entre deux gènes correspondant à une fréquence de recombinaison de 1 % par crossing-over",
            "Le temps nécessaire à l'ADN polymérase pour répliquer un locus",
            "Le nombre d'acides aminés codés par un exon"
          ],
          correctAnswerIndex: 1,
          explanation: "Par convention internationale établie par Morgan et Sturtevant, 1 Unité de Recombinaison (UR) ou 1 centimorgan (cM) correspond à une probabilité de recombinaison par crossing-over de 1 % (0,01) lors de la méiose."
        },
        {
          id: "tle_d_svt_c13_q21",
          type: "mcq",
          prompt: "On connaît les distances suivantes : d(X, Y) = 22 cM, d(Y, Z) = 8 cM et d(X, Z) = 14 cM. Quel est l'ordre des trois gènes sur le chromosome ?",
          options: [
            "X - Y - Z",
            "X - Z - Y",
            "Y - X - Z",
            "Z - X - Y"
          ],
          correctAnswerIndex: 1,
          explanation: "La plus grande distance est d(X, Y) = 22 cM. De plus, d(X, Z) + d(Z, Y) = 14 + 8 = 22 cM. Le locus Z est donc situé entre X et Y : l'ordre est X - Z - Y."
        },
        {
          id: "tle_d_svt_c13_q22",
          type: "mcq",
          prompt: "Dans un croisement F1 x F1 lié de drosophiles avec dg = 16 UR, quelle est la proportion attendue de descendants au phénotype double récessif [n vg] ?",
          options: [
            "6,25 % (1/16)",
            "environ 21 %",
            "50 %",
            "42 %"
          ],
          correctAnswerIndex: 1,
          explanation: "Avec P = 0,16, la femelle produit le gamète parental (n, vg) à la fréquence (1 - 0,16)/2 = 0,42 (42 %). Le mâle, ne faisant pas de crossing-over, produit le gamète (n, vg) à 50 % (0,50). La fécondation donne 0,42 x 0,50 = 0,21 soit 21 % de double récessif."
        },
        {
          id: "tle_d_svt_c13_q23",
          type: "mcq",
          prompt: "Quelle est la limite supérieure théorique de la distance génétique mesurée directement par le taux de recombinaison entre deux loci ?",
          options: [
            "25 cM",
            "50 cM (ou 50 UR)",
            "75 cM",
            "100 cM"
          ],
          correctAnswerIndex: 1,
          explanation: "Lorsque deux gènes sur un même chromosome sont très distants, il y a au moins un crossing-over à chaque méiose entre deux chromatides sur quatre, ce qui donne au maximum 50 % de gamètes recombinés. Le taux de recombinaison observable plafonne donc à 50 cM."
        },
        {
          id: "tle_d_svt_c13_q24",
          type: "mcq",
          prompt: "Sur une carte factorielle réalisée à l'échelle 1 cm pour 5 UR, quelle longueur physique sépare deux gènes distants de 25 cM ?",
          options: [
            "2,5 cm",
            "5 cm",
            "10 cm",
            "125 cm"
          ],
          correctAnswerIndex: 1,
          explanation: "Avec l'échelle 1 cm = 5 UR, une distance de 25 UR correspond graphiquement sur le papier à : L = 25 / 5 = 5 cm."
        }
      ]
    }
  ]
};
