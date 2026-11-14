import type { CurriculumChapter } from '../../../lib/curriculum/types';

export const SVT_TLE_D_L11_TRANSMISSION_UN_CARACTERE_HOMME: CurriculumChapter = {
  id: "terminale_d_svt_ch12_transmission_caractere_hereditaire_homme",
  subjectId: "svt",
  gradeLevel: "terminale_d",
  alsoForGrades: ["terminale_c"],
  order: 11,
  title: "La transmission d'un caractère héréditaire chez l'Homme (Génétique humaine et pedigrees)",
  summary: "Étude rigoureuse et approfondie de la génétique humaine selon le programme officiel de SVT Terminale D de Côte d'Ivoire : méthodologie d'analyse des arbres généalogiques (pedigrees), transmission autosomique récessive (cas de l'albinisme et de la drépanocytose), transmission autosomique dominante (cas de la brachydactylie et de la chorée de Huntington), polyallélisme et codominance (système des groupes sanguins ABO et compatibilités transfusionnelles), et transmission récessive liée au chromosome sexuel X (cas du daltonisme et de l'hémophilie).",
  officialVolumeHours: 10,
  contentVersion: 2,
  source: "École Numérique de Côte d'Ivoire - Direction de la Pédagogie et de la Formation Continue (DPFC) - SVT Terminale D",
  points: [
    {
      id: "pt1_transmission_autosomique_recessive_albinisme",
      order: 1,
      title: "Transmission autosomique récessive : analyse de pedigree et cas de l'albinisme",
      summary: "Principes de la génétique humaine, conventions des arbres généalogiques, diagnostic de la récessivité par l'apparition de descendants atteints issus de parents sains, et démonstration de la localisation autosomale par élimination de la liaison au sexe.",
      conceptExplanation: "Chez l'Homme, les croisements expérimentaux orientés étant éthiquement et biologiquement impossibles (temps de génération long, descendance numériquement faible), l'analyse génétique repose sur l'étude d'arbres généalogiques (pedigrees ou généalogies familiales).\n\n1. Conventions universelles des pedigrees :\n- Les carrés représentent les individus de sexe masculin (♂) et les cercles représentent les individus de sexe féminin (♀) ;\n- Les symboles noircis ou hachurés désignent les individus atteints par l'anomalie ou phénotypiquement mutants ;\n- Les symboles blancs désignent les individus phénotypiquement normaux (sains) ;\n- Un trait horizontal reliant un carré et un cercle indique un mariage ou une union (double trait pour une union consanguine) ;\n- Les générations successives sont notées en chiffres romains (I, II, III, IV...) et les individus d'une même génération sont numérotés de gauche à droite en chiffres arabes (ex. II-3).\n\n2. Démonstration de la récessivité de l'allèle mutant :\nDans le cas de l'albinisme (défaut de synthèse de mélanine par l'enzyme tyrosinase) :\n- Si deux parents au phénotype normal (ex. ♀II-1 et ♂II-2) donnent naissance à des enfants albinos (ex. III-2, III-3, III-5), cela prouve que les deux parents possèdent l'allèle de l'anomalie sous une forme masquée sans l'exprimer.\n- L'allèle responsable de l'anomalie est donc récessif (noté « a »), et l'allèle normal responsable de la pigmentation est dominant (noté « A »).\n- Les deux parents sains sont obligatoirement hétérozygotes (ou porteurs sains) de génotype A//a.\n\n3. Démonstration de la localisation autosomique (élimination de l'hypothèse gonosomique) :\n- Hypothèse 1 : Supposons que l'allèle « a » soit porté par le chromosome Y. Alors seuls les hommes seraient atteints, et un père atteint transmettrait obligatoirement l'anomalie à 100 % de ses fils. Or dans la famille, des femmes sont atteintes (fille III-3 albinos), et le père II-2 est sain tout en ayant des fils atteints. L'allèle n'est donc pas sur Y.\n- Hypothèse 2 : Supposons que l'allèle récessif « a » soit porté par le chromosome sexuel X (allèle lié à X). Une fille atteinte (III-3) posséderait alors obligatoirement le génotype Xa//Xa. Elle aurait nécessairement hérité d'un allèle Xa de sa mère et de son père. Le père devrait donc porter le chromosome Xa et son génotype serait Xa//Y : il devrait être obligatoirement atteint d'albinisme. Or, le père II-2 est phénotypiquement normal (son génotype serait XA//Y). Une fille homozygote récessive ne peut pas naître d'un père sain si le gène était lié à X.\n- Conclusion formelle : L'hypothèse de liaison à X est rejetée. L'allèle responsable de l'albinisme est donc porté par un autosome (chromosome non sexuel).\n\n4. Bilan génétique et probabilités de descendance :\nEntre deux hétérozygotes A//a, les gamètes produits sont 1/2 A et 1/2 a par chaque parent. L'échiquier de croisement donne :\n- 1/4 A//A [A] (homozygote sain) ;\n- 2/4 = 1/2 A//a [A] (hétérozygote porteur sain) ;\n- 1/4 a//a [a] (homozygote atteint albinos).\nParmi les enfants au phénotype sain [A], la probabilité d'être porteur sain (hétérozygote A//a) est de 2/3 (et non de 1/2).",
      keyRule: "Pour une anomalie autosomique récessive : 1) Deux parents sains ayant au moins un enfant malade prouve la récessivité de l'allèle. 2) Une fille malade née d'un père sain élimine formellement la liaison récessive à X : le gène est obligatoirement autosomique. 3) Le risque d'avoir un enfant atteint pour un couple de porteurs sains est de 1/4 (25 %).",
      formulas: [
        {
          name: "Risque pour un couple de porteurs hétérozygotes sains (A//a x A//a)",
          formula: "P(\\text{enfant atteint } [a]) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4} = 25\\%",
          note: "Proportion des enfants sains : 3/4 (dont 1/3 homozygotes AA et 2/3 hétérozygotes Aa)"
        },
        {
          name: "Probabilité d'être hétérozygote pour un individu sain issu de parents porteurs",
          formula: "P(Aa \\mid [A]) = \\frac{P(Aa)}{P([A])} = \\frac{2/4}{3/4} = \\frac{2}{3}",
          note: "Règle clé des exercices de génétique humaine au Bac"
        }
      ],
      workedExample: {
        title: "Calcul du risque génétique d'albinisme pour un couple consultant",
        statement: "Un homme sain dont le frère est albinos consulte un généticien. Ses deux parents sont sains. Il épouse une femme saine sans aucun antécédent familial d'albinisme (considérée homozygote AA). Quelle est la probabilité pour ce couple d'avoir un enfant albinos ? Que devient ce risque si la femme est également issue de parents hétérozygotes prouvés ?",
        methodSteps: [
          "1. Génotype des parents de l'homme : comme ils sont sains et ont eu un enfant albinos (a//a), ils sont tous deux hétérozygotes A//a.",
          "2. Probabilité pour l'homme d'être porteur de l'allèle 'a' : il est phénotypiquement sain [A], donc sa probabilité d'être hétérozygote A//a est de 2/3.",
          "3. Cas 1 (épouse AA) : la mère ne transmettant que l'allèle 'A', l'enfant recevra au moins un allèle 'A'. La probabilité d'avoir un enfant malade (a//a) est donc nulle (0 %). L'enfant a 1/3 de risque d'être porteur sain (2/3 x 1/2).",
          "4. Cas 2 (épouse issue de parents hétérozygotes) : la probabilité que la femme soit hétérozygote est aussi de 2/3.",
          "5. Si les deux sont porteurs, le risque d'enfant albinos est de 1/4.",
          "6. Risque global combiné : P = P(père Aa) x P(mère Aa) x P(enfant aa si parents Aa) = (2/3) x (2/3) x (1/4) = 4/36 = 1/9 (soit environ 11,1 %)."
        ],
        conclusion: "Avec une conjointe homozygote saine, le risque est de 0 %. Avec une conjointe également issue de parents hétérozygotes, le risque d'avoir un enfant atteint est de 1/9."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Arbre généalogique officiel (Pedigree) d'une transmission autosomique récessive",
        caption: "Critères de lecture : Deux parents sains (I-1 et I-2) ayant des enfants atteints (II-2 et II-4) prouvent la récessivité de l'allèle. La fille malade II-2 ayant un père sain I-1 élimine la liaison au chromosome X.",
        svgContent: `<svg viewBox="0 0 620 280" width="100%" style="max-width:620px;height:auto" class="text-slate-700 dark:text-slate-200" role="img" aria-label="Pedigree maladie récessive">
  <rect x="10" y="10" width="600" height="260" rx="14" fill="currentColor" fill-opacity="0.02" stroke="#CBD5E1" stroke-width="1.5" />
  
  <!-- Légende symboles en haut à droite -->
  <g transform="translate(420, 25)">
    <rect x="0" y="0" width="175" height="75" rx="6" fill="currentColor" fill-opacity="0.04" stroke="#CBD5E1" stroke-width="1" />
    <rect x="12" y="10" width="14" height="14" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.5" />
    <text x="32" y="22" font-size="9" fill="currentColor">Homme sain</text>
    <circle cx="100" cy="17" r="7" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.5" />
    <text x="114" y="21" font-size="9" fill="currentColor">Femme saine</text>
    <rect x="12" y="42" width="14" height="14" fill="#EF4444" stroke="#B91C1C" stroke-width="1.5" />
    <text x="32" y="54" font-size="9" font-weight="700" fill="#B91C1C">Homme atteint</text>
    <circle cx="100" cy="49" r="7" fill="#EF4444" stroke="#B91C1C" stroke-width="1.5" />
    <text x="114" y="53" font-size="9" font-weight="700" fill="#B91C1C">Femme atteinte</text>
  </g>

  <!-- Génération I -->
  <text x="25" y="65" font-size="14" font-weight="900" fill="#0284C7">I</text>
  <!-- I-1 Homme sain -->
  <rect x="150" y="45" width="28" height="28" rx="2" fill="#FFFFFF" stroke="#0F172A" stroke-width="2" />
  <text x="164" y="88" font-size="10" font-weight="800" text-anchor="middle" fill="currentColor">I-1 (Aa)</text>
  <!-- Ligne de mariage -->
  <line x1="178" y1="59" x2="262" y2="59" stroke="#0F172A" stroke-width="2" />
  <!-- I-2 Femme saine -->
  <circle cx="276" cy="59" r="14" fill="#FFFFFF" stroke="#0F172A" stroke-width="2" />
  <text x="276" y="88" font-size="10" font-weight="800" text-anchor="middle" fill="currentColor">I-2 (Aa)</text>

  <!-- Descente commune vers génération II -->
  <line x1="220" y1="59" x2="220" y2="120" stroke="#0F172A" stroke-width="2" />
  <!-- Barre de fratrie -->
  <line x1="85" y1="120" x2="355" y2="120" stroke="#0F172A" stroke-width="2" />

  <!-- Génération II -->
  <text x="25" y="165" font-size="14" font-weight="900" fill="#0284C7">II</text>
  <!-- II-1 Garçon sain -->
  <line x1="85" y1="120" x2="85" y2="145" stroke="#0F172A" stroke-width="2" />
  <rect x="71" y="145" width="28" height="28" rx="2" fill="#FFFFFF" stroke="#0F172A" stroke-width="2" />
  <text x="85" y="188" font-size="9.5" text-anchor="middle" fill="currentColor">II-1 [A]</text>

  <!-- II-2 Fille atteinte (albinos) -->
  <line x1="175" y1="120" x2="175" y2="145" stroke="#0F172A" stroke-width="2" />
  <circle cx="175" cy="159" r="14" fill="#EF4444" stroke="#B91C1C" stroke-width="2" />
  <text x="175" y="188" font-size="9.5" font-weight="800" text-anchor="middle" fill="#B91C1C">II-2 (aa)</text>

  <!-- II-3 Fille saine -->
  <line x1="265" y1="120" x2="265" y2="145" stroke="#0F172A" stroke-width="2" />
  <circle cx="265" cy="159" r="14" fill="#FFFFFF" stroke="#0F172A" stroke-width="2" />
  <text x="265" y="188" font-size="9.5" text-anchor="middle" fill="currentColor">II-3 [A]</text>

  <!-- II-4 Garçon atteint (albinos) -->
  <line x1="355" y1="120" x2="355" y2="145" stroke="#0F172A" stroke-width="2" />
  <rect x="341" y="145" width="28" height="28" rx="2" fill="#EF4444" stroke="#B91C1C" stroke-width="2" />
  <text x="355" y="188" font-size="9.5" font-weight="800" text-anchor="middle" fill="#B91C1C">II-4 (aa)</text>

  <!-- Règles de déduction baccalauréat à droite -->
  <g transform="translate(420, 115)">
    <rect x="0" y="0" width="175" height="110" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.2" />
    <text x="10" y="18" font-size="10" font-weight="900" fill="#15803D">DÉDUCTIONS CLÉS :</text>
    <text x="10" y="36" font-size="8.5" font-weight="700" fill="#166534">1. Parents sains → Enfants atteints</text>
    <text x="18" y="48" font-size="8" fill="#14532D">⇒ Allèle albinos est RÉCESSIF</text>
    <text x="10" y="66" font-size="8.5" font-weight="700" fill="#166534">2. Fille malade II-2 &amp; père sain I-1</text>
    <text x="18" y="78" font-size="8" fill="#14532D">⇒ Élimine liaison à X (sinon XA)</text>
    <text x="18" y="90" font-size="8.5" font-weight="800" fill="#047857">⇒ Gène AUTOSOMIQUE</text>
  </g>

  <!-- Bilan inférieur -->
  <text x="220" y="235" font-size="10.5" font-weight="700" text-anchor="middle" fill="currentColor">Saut de génération caractéristique : Les parents sains sont obligatoirement hétérozygotes (A//a)</text>
</svg>`,
        tableData: {
          headers: ["Critère d'analyse", "Observation dans le pedigree", "Déduction génétique rigoureuse"],
          rows: [
            ["Apparition de la maladie", "Enfants atteints issus de parents sains (saut de générations)", "L'allèle mutant est récessif (masqué chez les hétérozygotes)."],
            ["Répartition selon le sexe", "La maladie touche autant de garçons que de filles", "L'anomalie ne dépend pas du sexe biologique."],
            ["Test de paternité critique", "Une fille atteinte (aa) a un père phénotypiquement sain [A]", "Élimine la liaison à X (car un père sain XA/Y donnerait obligatoirement XA à sa fille)."],
            ["Union de deux malades", "Deux parents albinos (aa x aa)", "100 % des enfants sont obligatoirement albinos (aa)."]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c12_q1",
          type: "mcq",
          prompt: "Dans un arbre généalogique, deux parents phénotypiquement sains ont un enfant atteint d'une anomalie. Que peut-on affirmer avec certitude ?",
          options: [
            "L'allèle responsable de l'anomalie est dominant",
            "L'allèle responsable de l'anomalie est récessif et les deux parents sont hétérozygotes",
            "L'anomalie est obligatoirement portée par le chromosome Y",
            "L'anomalie est due à une mutation somatique non transmissible"
          ],
          correctAnswerIndex: 1,
          explanation: "La naissance d'un enfant malade à partir de parents phénotypiquement sains démontre que l'allèle causal était présent chez les géniteurs sous une forme masquée : l'allèle est récessif et les deux parents sont hétérozygotes (porteurs sains)."
        },
        {
          id: "tle_d_svt_c12_q2",
          type: "mcq",
          prompt: "Quel argument du pedigree permet d'exclure formellement qu'une maladie récessive soit liée au chromosome sexuel X ?",
          options: [
            "La maladie ne touche que des garçons dans la famille",
            "Une fille atteinte est née d'un père phénotypiquement sain",
            "Un garçon atteint est né d'une mère conductrice",
            "Deux parents sains ont un garçon malade"
          ],
          correctAnswerIndex: 1,
          explanation: "Si la maladie était récessive liée à X, une fille malade serait Xa//Xa et recevrait obligatoirement l'un de ses Xa de son père. Son père aurait alors le génotype Xa//Y et serait obligatoirement malade. L'existence d'une fille malade ayant un père sain prouve de manière irréfutable que le gène est autosomique."
        },
        {
          id: "tle_d_svt_c12_q3",
          type: "mcq",
          prompt: "Deux parents hétérozygotes pour l'albinisme (A//a x A//a) ont déjà eu deux enfants albinos. Quelle est la probabilité que leur troisième enfant soit également albinos ?",
          options: [
            "0 % car le quota d'enfants malades est atteint",
            "1/4 (25 %)",
            "1/2 (50 %)",
            "3/4 (75 %)"
          ],
          correctAnswerIndex: 1,
          explanation: "Chaque conception est un événement indépendant. À chaque grossesse, deux parents hétérozygotes ont une probabilité constante de 1/4 (25 %) de donner naissance à un enfant homozygote récessif atteint (a//a)."
        },
        {
          id: "tle_d_svt_c12_q4",
          type: "mcq",
          prompt: "Un individu sain a un frère atteint d'une maladie autosomique récessive. Ses parents sont sains. Quelle est la probabilité que cet individu sain soit hétérozygote (porteur de l'allèle mutant) ?",
          options: [
            "1/4",
            "1/2",
            "2/3",
            "3/4"
          ],
          correctAnswerIndex: 2,
          explanation: "Les parents étant hétérozygotes (A//a x A//a), la descendance se compose de 1/4 AA, 2/4 Aa et 1/4 aa. Sachant que l'individu est sain, on exclut le quart aa : parmi les 3/4 sains restants, 2/3 sont hétérozygotes (Aa) et 1/3 est homozygote sain (AA)."
        },
        {
          id: "tle_d_svt_c12_q5",
          type: "mcq",
          prompt: "Quel est le phénotype attendu de l'ensemble des enfants issus du mariage de deux individus albinos (a//a x a//a) ?",
          options: [
            "100 % d'enfants albinos",
            "75 % d'albinos et 25 % de normaux",
            "50 % d'albinos et 50 % de normaux",
            "100 % d'enfants sains"
          ],
          correctAnswerIndex: 0,
          explanation: "Deux individus albinos étant tous deux homozygotes récessifs a//a, ils ne peuvent produire que des gamètes portant l'allèle 'a'. 100 % de leurs enfants auront le génotype a//a et seront albinos."
        },
        {
          id: "tle_d_svt_c12_q6",
          type: "mcq",
          prompt: "Dans un pedigree, le mariage consanguin est symbolisé par :",
          options: [
            "Un cercle noirci relié par une flèche",
            "Deux traits horizontaux parallèles entre le carré et le cercle",
            "Un carré barré d'une croix",
            "Un losange avec un point central"
          ],
          correctAnswerIndex: 1,
          explanation: "Selon les conventions internationales de génétique humaine, une union consanguine (entre deux apparentés biologiques) est représentée par un double trait horizontal reliant les deux conjoints."
        }
      ]
    },
    {
      id: "pt2_transmission_autosomique_dominante_brachydactylie",
      order: 2,
      title: "Transmission autosomique dominante : critères de diagnostic et cas de la brachydactylie",
      summary: "Caractéristiques des affections autosomiques dominantes, présence de l'anomalie à toutes les générations sans saut, obligation pour tout sujet atteint d'avoir au moins un parent atteint, et élimination de la transmission liée à X dominante.",
      conceptExplanation: "Une anomalie génétique est dite autosomique dominante lorsque l'allèle muté responsable de l'affection s'exprime phénotypiquement même à l'état hétérozygote, et que le gène est situé sur un autosome.\n\n1. Cas clinique de la brachydactylie :\nLa brachydactylie est une malformation squelettique caractérisée par le raccourcissement des doigts ou des orteils dû à l'absence ou l'atrophie d'une phalange.\n\n2. Caractéristiques fondamentales d'un pedigree autosomique dominant :\n- Transmission verticale continue : l'anomalie se retrouve à chaque génération sans saut de génération (sauf cas rare de mutation de novo ou de pénétrance incomplète) ;\n- Tout individu atteint a au moins l'un de ses deux parents atteint (sauf s'il s'agit d'une néomutation) ;\n- Deux parents sains n'ont jamais d'enfant atteint, car ne possédant pas l'allèle dominant, ils ne peuvent pas le transmettre ;\n- Deux parents atteints peuvent avoir des enfants sains s'ils sont tous les deux hétérozygotes (N//n x N//n) : la probabilité d'avoir un enfant sain n//n est alors de 1/4 (25 %) ;\n- La maladie affecte indifféremment les deux sexes (autant d'hommes que de femmes atteints).\n\n3. Démonstration de la localisation autosomique (élimination de l'hypothèse liée au sexe dominante) :\n- Choix des symboles : Allèle atteint dominant noté « N » (ou B), allèle normal récessif noté « n » (ou b).\n- Supposons que l'allèle dominant N soit porté par le chromosome sexuel X (XN) :\n  * Un homme atteint aurait pour génotype XN//Y ;\n  * Lors de la reproduction, cet homme transmet obligatoirement son chromosome Y à ses fils (qui reçoivent le X de leur mère) et son chromosome XN à toutes ses filles ;\n  * Par conséquent, toutes les filles d'un père atteint devraient obligatoirement être atteintes ([N]), et aucun de ses fils ne pourrait hériter de l'anomalie par son père si la mère est saine ;\n  * Or, dans le pedigree, un père atteint a donné naissance à une fille normale (n//n), ou un père atteint a transmis l'anomalie à son fils (père atteint -> fils atteint avec mère saine) ;\n  * Ces faits infirment formellement l'hypothèse d'une liaison dominante au chromosome X. Le gène responsable de la brachydactylie est donc situé sur un autosome.\n\n4. Létalité possible de l'homozygotie dominante :\nPour de nombreuses affections autosomiques dominantes (achondroplasie, brachydactylie type A1), l'état homozygote N//N est très sévère ou létal in utero. Par conséquent, les individus atteints vivants sont presque tous hétérozygotes N//n. Un parent atteint (N//n) marié à un conjoint sain (n//n) a une probabilité de 1/2 (50 %) de transmettre l'anomalie à chaque enfant.",
      keyRule: "Pour une anomalie autosomique dominante : 1) Tout individu malade a au moins un parent malade. 2) Deux parents sains n'engendrent que des enfants sains. 3) Deux parents malades ayant un enfant sain prouve que l'allèle malade est dominant et que les parents sont hétérozygotes. 4) Un père malade ayant une fille saine (ou transmettant à son fils avec mère saine) prouve que l'anomalie est autosomique et non liée à X dominant.",
      formulas: [
        {
          name: "Risque de transmission par un individu atteint hétérozygote (N//n x n//n)",
          formula: "P(\\text{enfant atteint } [N]) = \\frac{1}{2} = 50\\%",
          note: "50 % d'enfants atteints hétérozygotes N//n et 50 % d'enfants sains homozygotes n//n"
        },
        {
          name: "Croisement entre deux individus atteints hétérozygotes (N//n x N//n)",
          formula: "P([N]) = \\frac{3}{4} \\text{ (dont 1/4 NN et 2/4 Nn)}, \\quad P([n]) = \\frac{1}{4} \\text{ (homozygote sain nn)}",
          note: "Si l'homozygotie NN est létale in utero, le ratio parmi les naissances vivantes devient 2/3 atteints et 1/3 sains"
        }
      ],
      workedExample: {
        title: "Interprétation d'une descendance issue de deux parents atteints de brachydactylie",
        statement: "Dans une famille, un homme et une femme tous deux atteints de brachydactylie ont quatre enfants : trois sont atteints et un garçon présente des doigts d'une longueur parfaitement normale. 1) Déduisez la dominance des allèles. 2) Donnez les génotypes des parents et de l'enfant sain. 3) Quel est le risque pour le prochain enfant de ce couple d'être atteint ?",
        methodSteps: [
          "1. Dominance : les deux parents sont atteints et ont engendré un enfant sain. L'allèle normal était donc présent chez les parents sous forme masquée. L'allèle responsable de la brachydactylie est donc dominant (noté B ou N) et l'allèle sain est récessif (noté b ou n).",
          "2. Génotypes des parents : comme ils expriment l'allèle dominant mais ont transmis chacun un allèle récessif au fils sain, ils sont obligatoirement hétérozygotes de génotype B//b (ou N//n).",
          "3. Génotype de l'enfant sain : étant récessif [b], il est obligatoirement homozygote b//b (ou n//n).",
          "4. Risque pour le prochain enfant : croisement B//b x B//b donne 1/4 BB (atteint), 2/4 Bb (atteint) et 1/4 bb (sain). La probabilité d'avoir un enfant atteint est donc de 3/4 (75 %)."
        ],
        conclusion: "L'allèle de la brachydactylie est dominant. Les parents sont hétérozygotes B//b, le fils sain est b//b, et la probabilité que leur prochain enfant soit atteint est de 3/4 (75 %)."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Comparaison des caractéristiques généalogiques : Récessif vs Dominant",
        tableData: {
          headers: ["Caractéristique", "Transmission Autosomique Récessive", "Transmission Autosomique Dominante"],
          rows: [
            ["Parents d'un sujet atteint", "Le plus souvent sains (porteurs hétérozygotes)", "Au moins l'un des deux parents est obligatoirement atteint"],
            ["Continuité dans l'arbre", "Sauts fréquents de génération", "Présente à toutes les générations sans interruption"],
            ["Descendance de deux parents sains", "Possibilité d'avoir des enfants atteints (1/4)", "100 % des enfants sont obligatoirement sains (0 % atteint)"],
            ["Descendance de deux parents atteints", "100 % d'enfants atteints", "Possibilité d'avoir des enfants sains si parents hétérozygotes (1/4)"],
            ["Statut des hétérozygotes", "Sains (porteurs asymptomatiques)", "Malades (expriment l'allèle dominant)"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c12_q7",
          type: "mcq",
          prompt: "Dans une famille, deux parents atteints d'une maladie osseuse ont un enfant sain. Quelle est la conclusion génétique immédiate ?",
          options: [
            "L'allèle responsable de la maladie est récessif",
            "L'allèle responsable de la maladie est dominant et les parents sont hétérozygotes",
            "La maladie est obligatoirement transmise par le chromosome Y",
            "L'enfant sain est nécessairement le résultat d'une fausse paternité"
          ],
          correctAnswerIndex: 1,
          explanation: "Si deux parents malades engendrent un enfant sain, cela signifie que chaque parent possédait l'allèle sain sous une forme masquée. L'allèle sain est donc récessif et l'allèle responsable de la maladie est dominant. Les deux parents sont hétérozygotes."
        },
        {
          id: "tle_d_svt_c12_q8",
          type: "mcq",
          prompt: "Quelle observation dans un pedigree permet d'éliminer l'hypothèse qu'une maladie dominante soit liée au chromosome X ?",
          options: [
            "Un père atteint a une fille saine",
            "Une mère atteinte a un fils atteint",
            "Un père sain a une fille atteinte",
            "Une mère saine a un fils sain"
          ],
          correctAnswerIndex: 0,
          explanation: "Si l'allèle malade était dominant et porté par X (XN), un père atteint (XN//Y) transmettrait obligatoirement son unique chromosome XN à toutes ses filles, qui seraient toutes malades à 100 %. Constater qu'un père atteint a une fille saine prouve que l'anomalie n'est pas liée au chromosome X."
        },
        {
          id: "tle_d_svt_c12_q9",
          type: "mcq",
          prompt: "Quelle est la probabilité d'avoir un enfant sain pour un couple où l'un des conjoints est atteint d'une anomalie autosomique dominante hétérozygote (N//n) et l'autre est sain (n//n) ?",
          options: [
            "0 %",
            "25 % (1/4)",
            "50 % (1/2)",
            "75 % (3/4)"
          ],
          correctAnswerIndex: 2,
          explanation: "Le parent atteint hétérozygote produit 50 % de gamètes portant l'allèle malade N et 50 % portant l'allèle normal n. Le parent sain ne produit que des gamètes n. La probabilité d'avoir un enfant n//n sain est donc de 1/2 (50 %)."
        },
        {
          id: "tle_d_svt_c12_q10",
          type: "mcq",
          prompt: "Deux parents sains peuvent-ils donner naissance à un enfant atteint d'une anomalie autosomique dominante (hors mutation nouvelle) ?",
          options: [
            "Oui, avec une probabilité de 25 %",
            "Oui, si la mère est conductrice",
            "Non, c'est rigoureusement impossible car les parents ne possèdent pas l'allèle dominant",
            "Oui, si les parents sont consanguins"
          ],
          correctAnswerIndex: 2,
          explanation: "Pour qu'une anomalie dominante se manifeste, il faut posséder au moins un allèle dominant. Des parents sains sont obligatoirement homozygotes récessifs n//n et ne possèdent pas l'allèle pathologique. Ils ne peuvent donc pas le transmettre à leur descendance."
        },
        {
          id: "tle_d_svt_c12_q11",
          type: "mcq",
          prompt: "Pourquoi la plupart des personnes vivantes atteintes d'une maladie autosomique dominante rare sont-elles hétérozygotes ?",
          options: [
            "Parce que les allèles récessifs sont toujours détruits par le système immunitaire",
            "Parce que l'état homozygote dominant est très souvent létal in utero ou à la naissance",
            "Parce que la méiose empêche la fusion de deux allèles identiques",
            "Parce que l'allèle dominant ne peut pas se dupliquer en phase S"
          ],
          correctAnswerIndex: 1,
          explanation: "Chez l'Homme, l'homozygotie dominante pour une mutation délétère (comme l'achondroplasie ou la brachydactylie) entraîne souvent des malformations embryonnaires incompatibles avec la vie (létalité in utero). Les individus vivants sont donc hétérozygotes."
        },
        {
          id: "tle_d_svt_c12_q12",
          type: "mcq",
          prompt: "Dans un pedigree montrant une transmission autosomique dominante, la répartition des sujets atteints selon le sexe montre :",
          options: [
            "Une prédominance quasi exclusive des garçons",
            "Une transmission exclusive de mère à fille",
            "Une fréquence approximativement égale entre les hommes et les femmes",
            "Une absence totale d'hommes atteints"
          ],
          correctAnswerIndex: 2,
          explanation: "Le gène étant localisé sur un autosome, la ségrégation méiotique est indépendante du sexe génétique des individus. Hommes et femmes ont la même probabilité d'hériter de l'allèle et de manifester l'affection."
        }
      ]
    },
    {
      id: "pt3_polyallelisme_codominance_groupes_sanguins_abo",
      order: 3,
      title: "Polyallélisme et codominance : le système des groupes sanguins ABO",
      summary: "Génétique des groupes sanguins ABO sur l'autosome 9, existence de trois allèles (A, B, O), relations de dominance et de codominance, correspondance génotypes-phénotypes, et règles immunologiques de transfusion sanguine.",
      conceptExplanation: "Le système des groupes sanguins ABO est l'exemple fondamental chez l'Homme illustrant à la fois le polyallélisme (existence de plus de deux allèles pour un même gène au sein de la population) et la codominance (expression simultanée et conjointe de deux allèles différents chez l'hétérozygote).\n\n1. Déterminisme génétique du système ABO :\nLe gène du système ABO est situé sur le bras long du chromosome autosome 9 (9q34). Il existe dans la population humaine trois allèles principaux :\n- L'allèle A (ou $I^A$) : code pour une transférase catalysant l'addition d'une N-acétylgalactosamine sur la substance H, formant l'agglutinogène A à la surface des hématies ;\n- L'allèle B (ou $I^B$) : code pour une transférase catalysant l'addition d'un D-galactose sur la substance H, formant l'agglutinogène B ;\n- L'allèle O (ou $i$) : allèle amorphe (mutation par délétion créant un décalage de cadre) codant pour une enzyme non fonctionnelle ; la substance H reste nue sans sucre additionnel (aucun agglutinogène spécifique).\n\n2. Relations de dominance et de codominance :\n- A et B sont dominants sur O : un individu de génotype A//O exprime le phénotype [A] ; un individu de génotype B//O exprime le phénotype [B] ;\n- O est récessif par rapport à A et B : le phénotype [O] ne se manifeste que chez l'homozygote récessif O//O ;\n- A et B sont codominants entre eux : chez l'hétérozygote A//B, les deux enzymes fonctionnent simultanément. Les globules rouges portent à la fois l'agglutinogène A et l'agglutinogène B, définissant le phénotype [AB].\n\n3. Tableau complet des 6 génotypes et 4 phénotypes :\n- Phénotype [A] : génotypes possibles A//A (homozygote) ou A//O (hétérozygote) ;\n- Phénotype [B] : génotypes possibles B//B (homozygote) ou B//O (hétérozygote) ;\n- Phénotype [AB] : génotype unique A//B (hétérozygote codominant) ;\n- Phénotype [O] : génotype unique O//O (homozygote récessif).\n\n4. Règle immunologique de Landsteiner et transfusion sanguine :\nLe plasma d'un individu contient naturellement et obligatoirement les anticorps (agglutinines) dirigés contre les antigènes absents de ses propres hématies :\n- Sujet [A] : hématies à agglutinogène A, plasma avec agglutinine Anti-B ;\n- Sujet [B] : hématies à agglutinogène B, plasma avec agglutinine Anti-A ;\n- Sujet [AB] : hématies à agglutinogènes A et B, aucun anticorps dans le plasma (Receveur universel) ;\n- Sujet [O] : hématies sans agglutinogènes A ni B, plasma avec agglutinines Anti-A et Anti-B (Donneur universel d'hématies).\nRègle d'or transfusionnelle : les anticorps du plasma du receveur ne doivent jamais agglutiner les hématies du donneur injecté.",
      keyRule: "Trois allèles régissent le système ABO : A et B sont codominants entre eux et tous deux dominants sur O. Les phénotypes [AB] et [O] ont un génotype univoque (respectivement A//B et O//O), tandis que les phénotypes [A] et [B] peuvent être homozygotes ou hétérozygotes (porteurs de O).",
      formulas: [
        {
          name: "Croisement de deux parents hétérozygotes de groupes opposés (A//O x B//O)",
          formula: "\\text{Gamètes : } (\\frac{1}{2}A + \\frac{1}{2}O) \\times (\\frac{1}{2}B + \\frac{1}{2}O) = \\frac{1}{4}[AB] + \\frac{1}{4}[A] + \\frac{1}{4}[B] + \\frac{1}{4}[O]",
          note: "Un couple [A] x [B] peut ainsi engendrer des enfants des 4 groupes sanguins existants avec équiprobabilité (25 % chacun)"
        }
      ],
      workedExample: {
        title: "Résolution d'un cas de filiation biologique grâce aux groupes sanguins ABO",
        statement: "À la maternité, un bébé de groupe O est né d'une mère de groupe A. Deux hommes revendiquent la paternité : l'homme 1 est de groupe AB et l'homme 2 est de groupe B. Lequel de ces deux hommes peut être le père biologique de l'enfant ? Justifiez génétiquement.",
        methodSteps: [
          "1. Génotype de l'enfant : l'enfant est de groupe O, son génotype est obligatoirement homozygote récessif O//O.",
          "2. Génotype de la mère : la mère est de groupe A. Pour transmettre un allèle O à son enfant, son génotype est obligatoirement hétérozygote A//O.",
          "3. Allèle d'origine paternelle : l'enfant a nécessairement reçu son second allèle O de son père biologique. Le père doit donc obligatoirement être porteur d'au moins un allèle O dans son génotype.",
          "4. Analyse de l'homme 1 (groupe AB) : son génotype est obligatoirement A//B. Il ne produit que des gamètes portant l'allèle A ou l'allèle B, et aucun allèle O. Il ne peut en aucun cas être le père biologique du bébé de groupe O.",
          "5. Analyse de l'homme 2 (groupe B) : son génotype peut être soit B//B, soit B//O. S'il est hétérozygote B//O, il produit 50 % de gamètes O et peut donc parfaitement être le père de l'enfant."
        ],
        conclusion: "L'homme 1 (groupe AB) est formellement exclu de la paternité. Seul l'homme 2 (groupe B hétérozygote B//O) peut être le père biologique."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Cercle transfusionnel des groupes sanguins ABO (Règle de Landsteiner)",
        caption: "Le groupe O est donneur universel d'hématies (aucun agglutinogène). Le groupe AB est receveur universel (aucune agglutinine dans son plasma). Les anticorps du receveur ne doivent jamais agglutiner les hématies injectées.",
        svgContent: `<svg viewBox="0 0 620 270" width="100%" style="max-width:620px;height:auto" class="text-slate-700 dark:text-slate-200" role="img" aria-label="Cercle transfusionnel ABO">
  <rect x="10" y="10" width="600" height="250" rx="14" fill="currentColor" fill-opacity="0.02" stroke="#CBD5E1" stroke-width="1.5" />
  <circle cx="310" cy="55" r="30" fill="#FEF2F2" stroke="#EF4444" stroke-width="2.5" />
  <text x="310" y="58" font-size="18" font-weight="900" text-anchor="middle" fill="#DC2626">O</text>
  <text x="310" y="73" font-size="8.5" font-weight="700" text-anchor="middle" fill="#991B1B">Donneur Univ.</text>
  <circle cx="160" cy="135" r="30" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2.5" />
  <text x="160" y="141" font-size="18" font-weight="900" text-anchor="middle" fill="#2563EB">A</text>
  <circle cx="460" cy="135" r="30" fill="#F0FDF4" stroke="#16A34A" stroke-width="2.5" />
  <text x="460" y="141" font-size="18" font-weight="900" text-anchor="middle" fill="#15803D">B</text>
  <circle cx="310" cy="210" r="30" fill="#FAF5FF" stroke="#A855F7" stroke-width="2.5" />
  <text x="310" y="214" font-size="18" font-weight="900" text-anchor="middle" fill="#9333EA">AB</text>
  <text x="310" y="228" font-size="8.5" font-weight="700" text-anchor="middle" fill="#6B21A8">Receveur Univ.</text>
  <path d="M 284 72 L 190 115" stroke="#DC2626" stroke-width="2.5" />
  <path d="M 336 72 L 430 115" stroke="#DC2626" stroke-width="2.5" />
  <line x1="310" y1="86" x2="310" y2="178" stroke="#DC2626" stroke-width="2.5" stroke-dasharray="4,2" />
  <path d="M 188 152 L 282 195" stroke="#2563EB" stroke-width="2.5" />
  <path d="M 432 152 L 338 195" stroke="#16A34A" stroke-width="2.5" />
  <path d="M 288 32 C 275 12, 345 12, 332 32" stroke="#DC2626" stroke-width="1.8" fill="none" />
  <path d="M 132 125 C 105 115, 105 155, 132 145" stroke="#2563EB" stroke-width="1.8" fill="none" />
  <path d="M 488 125 C 515 115, 515 155, 488 145" stroke="#16A34A" stroke-width="1.8" fill="none" />
  <path d="M 288 233 C 275 253, 345 253, 332 233" stroke="#9333EA" stroke-width="1.8" fill="none" />
  <g transform="translate(18, 18)">
    <rect x="0" y="0" width="125" height="58" rx="6" fill="#FFFBEB" stroke="#F59E0B" stroke-width="1.2" />
    <text x="8" y="16" font-size="9" font-weight="800" fill="#B45309">RÈGLE D'OR :</text>
    <text x="8" y="29" font-size="8" fill="#78350F">Plasma receveur</text>
    <text x="8" y="40" font-size="8" fill="#78350F">n'agglutine JAMAIS</text>
    <text x="8" y="51" font-size="8" font-weight="700" fill="#B45309">hématies donneur</text>
  </g>
</svg>`,
        tableData: {
          headers: ["Phénotype", "Génotype(s)", "Agglutinogène (sur hématie)", "Agglutinine (dans le plasma)", "Donne à (hématies)", "Reçoit de (hématies)"],
          rows: [
            ["Groupe A", "A//A ou A//O", "Antigène A", "Anti-B", "A, AB", "A, O"],
            ["Groupe B", "B//B ou B//O", "Antigène B", "Anti-A", "B, AB", "B, O"],
            ["Groupe AB", "A//B (unique)", "Antigènes A et B", "Aucune", "AB uniquement", "Tous (Receveur universel)"],
            ["Groupe O", "O//O (unique)", "Aucun", "Anti-A et Anti-B", "Tous (Donneur universel)", "O uniquement"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c12_q13",
          type: "mcq",
          prompt: "Combien d'allèles différents du gène ABO un être humain normal possède-t-il dans chacune de ses cellules somatiques ?",
          options: [
            "Un seul allèle",
            "Deux allèles (identiques ou différents)",
            "Trois allèles (A, B et O)",
            "Quatre allèles"
          ],
          correctAnswerIndex: 1,
          explanation: "Même s'il existe trois allèles dans la population humaine (polyallélisme), chaque individu étant diploïde (2n chromosomes), il ne possède que deux allèles du gène ABO : un hérité de son père et un de sa mère."
        },
        {
          id: "tle_d_svt_c12_q14",
          type: "mcq",
          prompt: "Un homme de groupe O et une femme de groupe AB ont des enfants. Quels sont les phénotypes sanguins possibles de leur descendance ?",
          options: [
            "50 % [A] et 50 % [B]",
            "100 % [AB]",
            "25 % [A], 25 % [B], 25 % [AB] et 25 % [O]",
            "50 % [AB] et 50 % [O]"
          ],
          correctAnswerIndex: 0,
          explanation: "L'homme O//O ne transmet que l'allèle O. La femme A//B transmet soit A (50 %), soit B (50 %). Les enfants ont pour génotype A//O ([A]) à 50 % ou B//O ([B]) à 50 %. Les groupes AB et O sont impossibles dans cette descendance."
        },
        {
          id: "tle_d_svt_c12_q15",
          type: "mcq",
          prompt: "Pourquoi deux allèles sont-ils dits codominants chez un hétérozygote ?",
          options: [
            "Parce qu'ils s'annulent mutuellement et ne produisent aucun caractère",
            "Parce que chacun d'eux s'exprime pleinement et indépendamment dans le phénotype",
            "Parce qu'un allèle masque partiellement l'expression de l'autre",
            "Parce qu'ils sont tous les deux situés sur le chromosome sexuel Y"
          ],
          correctAnswerIndex: 1,
          explanation: "La codominance désigne la situation génétique où les deux allèles d'un même gène s'expriment simultanément et conjointement chez l'hétérozygote sans se masquer, produisant un phénotype combinant les deux caractères (cas des allèles A et B donnant le groupe AB)."
        },
        {
          id: "tle_d_svt_c12_q16",
          type: "mcq",
          prompt: "Quel est le donneur universel de globules rouges (culot globulaire) et pourquoi ?",
          options: [
            "Le groupe AB car son plasma ne contient pas d'anticorps",
            "Le groupe O car ses globules rouges ne portent ni antigène A ni antigène B",
            "Le groupe A car l'antigène A est universellement toléré",
            "Le groupe B car il inhibe les anticorps anti-A"
          ],
          correctAnswerIndex: 1,
          explanation: "Les hématies d'un sujet de groupe O sont dépourvues d'antigènes A et B à leur surface. Elles ne peuvent donc être reconnues ni détruites par les anticorps Anti-A ou Anti-B d'aucun receveur, faisant du sujet O le donneur universel de globules rouges."
        },
        {
          id: "tle_d_svt_c12_q17",
          type: "mcq",
          prompt: "Un couple composé d'un homme de groupe A et d'une femme de groupe B a un enfant de groupe O. Quelle est la probabilité que leur enfant suivant soit de groupe AB ?",
          options: [
            "0 %",
            "25 % (1/4)",
            "50 % (1/2)",
            "75 % (3/4)"
          ],
          correctAnswerIndex: 1,
          explanation: "Avoir un enfant O (O//O) prouve que les deux parents sont hétérozygotes : père A//O et mère B//O. Le croisement donne 1/4 AB, 1/4 A (AO), 1/4 B (BO) et 1/4 O (OO). La probabilité d'obtenir un enfant [AB] est donc de 1/4 (25 %)."
        },
        {
          id: "tle_d_svt_c12_q18",
          type: "mcq",
          prompt: "Sur quel chromosome humain le locus du système des groupes sanguins ABO est-il localisé ?",
          options: [
            "Sur le chromosome sexuel X",
            "Sur le chromosome sexuel Y",
            "Sur l'autosome 9",
            "Sur l'autosome 21"
          ],
          correctAnswerIndex: 2,
          explanation: "Le gène ABO est localisé sur le bras long du chromosome non sexuel (autosome) numéro 9, en position 9q34."
        }
      ]
    },
    {
      id: "pt4_heredite_recessive_liee_au_chromosome_x_daltonisme",
      order: 4,
      title: "Transmission récessive liée au chromosome X : daltonisme et hémophilie",
      summary: "Particularités des caractères portés par les hétérochromosomes sexuels, transmission de la mère conductrice aux garçons, asymétrie entre les sexes (garçons hémizygotes plus vulnérables), et transmission du père atteint à ses filles.",
      conceptExplanation: "Chez l'Homme, le sexe biologique est déterminé par la paire de chromosomes sexuels (hétérochromosomes ou gonosomes) : XX chez la femme (homogamétique) et XY chez l'homme (hétérogamétique). Les chromosomes X et Y possèdent une zone non homologue où les gènes ne sont présents qu'en un seul exemplaire chez l'homme (hémizygote).\n\n1. Daltonisme et hémophilie : modèles d'hérédité récessive liée à X :\n- Le daltonisme est une anomalie de la vision des couleurs (déficit des pigments photorécepteurs des cônes rétiniens, souvent confusion rouge/vert) ;\n- L'hémophilie est un trouble sévère de la coagulation sanguine (déficit en facteur VIII pour l'hémophilie A, ou en facteur IX pour l'hémophilie B) ;\n- Ces deux affections sont déterminées par des allèles récessifs mutants portés par la région spécifique (non homologue) du chromosome sexuel X.\n\n2. Génotypes et phénotypes selon le sexe :\n- Choix des symboles : allèle normal dominant « D » (ou H), allèle anormal récessif « d » (ou h).\n- Chez la femme (XX, deux allèles) :\n  * $X^D//X^D$ : femme normale homozygote saine ;\n  * $X^D//X^d$ : femme normale hétérozygote, appelée conductrice ou porteuse saine (elle ne manifeste aucun symptôme mais transmet l'allèle à 50 % de sa descendance) ;\n  * $X^d//X^d$ : femme daltonienne homozygote récessive (cas très rare nécessitant que son père soit daltonien ET que sa mère soit conductrice ou daltonienne).\n- Chez l'homme (XY, hémizygote avec un seul X) :\n  * $X^D//Y$ : homme normal sain ;\n  * $X^d//Y$ : homme daltonien. L'homme ne possédant pas de second chromosome X pour compenser, le seul allèle récessif s'exprime immédiatement. Il n'existe jamais d'homme porteur sain.\n\n3. Lois et règles diagnostiques d'un pedigree récessif lié à X :\n- Prédominance masculine quasi exclusive : la quasi-totalité des personnes atteintes sont des hommes ;\n- Une mère conductrice saine ($X^D//X^d$) mariée à un homme sain ($X^D//Y$) donne :\n  * 50 % de filles saines non conductrices ($X^D//X^D$) et 50 % de filles conductrices ($X^D//X^d$) -> 100 % des filles sont phénotypiquement saines ;\n  * 50 % de garçons sains ($X^D//Y$) et 50 % de garçons daltoniens ($X^d//Y$) ;\n  * La maladie se transmet d'un grand-père atteint à la moitié de ses petits-fils par l'intermédiaire de ses filles conductrices (transmission en « saut de puce » ou oblique) ;\n- Règle du père atteint ($X^d//Y$) :\n  * Un père atteint ne transmet jamais son chromosome X à ses fils (il leur donne obligatoirement le chromosome Y). Il ne peut donc jamais transmettre une anomalie liée à X à son fils ;\n  * Un père atteint transmet obligatoirement son chromosome $X^d$ à 100 % de ses filles, qui deviennent toutes conductrices obligatoires si la mère est saine ;\n- Règle de la mère atteinte ($X^d//X^d$) :\n  * Une femme atteinte donne obligatoirement un chromosome $X^d$ à tous ses fils : 100 % de ses garçons seront atteints d'anomalie, quel que soit le génotype du père.",
      keyRule: "Pour une anomalie récessive liée au chromosome X : 1) Les garçons sont beaucoup plus fréquemment atteints car hémizygotes (un seul X). 2) Un père atteint ne transmet JAMAIS l'anomalie à son fils (lui donne Y). 3) Toutes les filles d'un père atteint sont obligatoirement conductrices. 4) Une femme atteinte transmet obligatoirement l'anomalie à 100 % de ses fils.",
      formulas: [
        {
          name: "Descendance d'une mère conductrice et d'un père sain (XD/Xd x XD/Y)",
          formula: "P(\\text{fille atteinte}) = 0\\%, \\quad P(\\text{fils atteint}) = \\frac{1}{2} = 50\\%, \\quad P(\\text{enfant quelconque atteint}) = \\frac{1}{4} = 25\\%",
          note: "50 % des filles sont conductrices saines, 50 % des garçons sont daltoniens"
        },
        {
          name: "Descendance d'une femme atteinte et d'un homme sain (Xd/Xd x XD/Y)",
          formula: "P(\\text{garçon atteint}) = 100\\%, \\quad P(\\text{fille atteinte}) = 0\\% \\text{ (toutes conductrices } X^D/X^d)",
          note: "Illustration parfaite de la transmission croisée liée au sexe"
        }
      ],
      workedExample: {
        title: "Calcul du risque de daltonisme dans une consultation prénuptiale",
        statement: "Un homme daltonien épouse une femme à la vision normale dont le père est daltonien. 1) Quels sont les génotypes des deux conjoints ? 2) Construisez l'échiquier de croisement. 3) Quelles sont les probabilités phénotypiques pour leurs futurs enfants (garçons et filles) ?",
        methodSteps: [
          "1. Génotype de l'homme : étant daltonien, il est hémizygote Xd//Y.",
          "2. Génotype de la femme : elle est normale mais son père était daltonien (Xd//Y). Son père lui a obligatoirement transmis son chromosome Xd. Elle est donc obligatoirement conductrice de génotype XD//Xd.",
          "3. Gamètes : homme donne 1/2 Xd et 1/2 Y. Femme donne 1/2 XD et 1/2 Xd.",
          "4. Échiquier de croisement :",
          "   - Gamète Xd du père + XD de la mère -> fille XD//Xd [D] normale conductrice (1/4)",
          "   - Gamète Xd du père + Xd de la mère -> fille Xd//Xd [d] daltonienne (1/4)",
          "   - Gamète Y du père + XD de la mère -> garçon XD//Y [D] normal (1/4)",
          "   - Gamète Y du père + Xd de la mère -> garçon Xd//Y [d] daltonien (1/4)",
          "5. Bilan par sexe : chez les filles, 50 % normales conductrices et 50 % daltoniennes. Chez les garçons, 50 % normaux et 50 % daltoniens."
        ],
        conclusion: "Ce couple a 50 % de risque d'avoir un enfant daltonien, qu'il s'agisse d'un garçon ou d'une fille (fait exceptionnel permettant d'obtenir des femmes daltoniennes)."
      },
      visualSchema: {
        type: "custom_svg",
        title: "Synthèse des modes de transmission des maladies monogéniques humaines",
        tableData: {
          headers: ["Mode de transmission", "Sexe préférentiel", "Transmission père -> fils", "Statut des parents de malades", "Exemple type"],
          rows: [
            ["Autosomique récessif", "Autant de ♂ que de ♀", "Possible", "Le plus souvent sains (porteurs Aa)", "Albinisme, Drépanocytose"],
            ["Autosomique dominant", "Autant de ♂ que de ♀", "Possible", "Au moins un parent malade", "Brachydactylie, Huntington"],
            ["Récessif lié à l'X (gonosomique)", "Quasi exclusivement des ♂", "IMPOSSIBLE (le père donne Y)", "Mère conductrice saine", "Daltonisme, Hémophilie"],
            ["Dominant lié à l'X", "Plus de ♀ atteintes", "Père transmet à 100 % de ses filles, 0 % fils", "Au moins un parent malade", "Rachitisme vitamino-résistant"]
          ]
        }
      },
      exercises: [
        {
          id: "tle_d_svt_c12_q19",
          type: "mcq",
          prompt: "Pourquoi un homme ne peut-il jamais transmettre une anomalie récessive liée au chromosome X à son fils ?",
          options: [
            "Parce que son chromosome X est détruit lors de la spermatogenèse",
            "Parce qu'il transmet obligatoirement son chromosome Y à tous ses fils",
            "Parce que les spermatozoïdes portant X ne peuvent pas féconder un ovocyte masculin",
            "Parce que l'allèle est inhibé par la testostérone"
          ],
          correctAnswerIndex: 1,
          explanation: "Chez l'Homme, le sexe masculin de l'enfant résulte obligatoirement de l'apport du chromosome Y paternel. Le père transmettant son Y à son fils, il ne peut en aucun cas lui transmettre un gène situé sur le chromosome X."
        },
        {
          id: "tle_d_svt_c12_q20",
          type: "mcq",
          prompt: "Une femme daltonienne (Xd//Xd) a un enfant avec un homme à vision normale (XD//Y). Quel sera le phénotype de leurs fils ?",
          options: [
            "100 % de fils daltoniens",
            "50 % de fils daltoniens et 50 % normaux",
            "100 % de fils normaux",
            "25 % de fils daltoniens"
          ],
          correctAnswerIndex: 0,
          explanation: "La mère étant homozygote Xd//Xd, tous ses ovocytes contiennent un chromosome Xd. Le père transmettant son chromosome Y à ses fils, tous les garçons auront pour génotype Xd//Y et seront daltoniens à 100 %."
        },
        {
          id: "tle_d_svt_c12_q21",
          type: "mcq",
          prompt: "Une femme saine dont le père était daltonien épouse un homme sain. Quelle est la probabilité que leur premier enfant soit un garçon daltonien ?",
          options: [
            "0 %",
            "1/8",
            "1/4 (25 %)",
            "1/2 (50 %)"
          ],
          correctAnswerIndex: 2,
          explanation: "La femme a obligatoirement reçu Xd de son père daltonien, elle est donc conductrice XD//Xd. Le père est XD//Y. La probabilité d'avoir un garçon est de 1/2, et la probabilité que ce garçon reçoive Xd est de 1/2. Le risque global d'avoir un garçon daltonien est de 1/2 x 1/2 = 1/4 (25 %)."
        },
        {
          id: "tle_d_svt_c12_q22",
          type: "mcq",
          prompt: "Pour qu'une fille naisse daltonienne (Xd//Xd), quelles conditions génétiques parentales doivent être obligatoirement réunies ?",
          options: [
            "Son père doit obligatoirement être daltonien et sa mère au moins conductrice",
            "Seule sa mère doit être daltonienne",
            "Seul son père doit être daltonien",
            "Ses deux parents peuvent être sains non porteurs"
          ],
          correctAnswerIndex: 0,
          explanation: "Pour être homozygote Xd//Xd, la fille doit recevoir un allèle Xd de chaque parent. Son père lui donnant son unique X, il doit obligatoirement être porteur de Xd et donc être daltonien (Xd//Y). Sa mère doit lui fournir le second Xd, et doit donc être soit conductrice (XD//Xd), soit daltonienne (Xd//Xd)."
        },
        {
          id: "tle_d_svt_c12_q23",
          type: "mcq",
          prompt: "Un individu masculin est dit hémizygote pour les gènes du chromosome X car :",
          options: [
            "Il possède deux allèles identiques pour chaque gène de X",
            "Il ne possède qu'un seul exemplaire du chromosome X et donc un seul allèle pour ces gènes",
            "Ses allèles du chromosome X sont toujours masqués par les allèles de Y",
            "Il a reçu ses deux chromosomes sexuels de sa mère"
          ],
          correctAnswerIndex: 1,
          explanation: "L'hémizygotie caractérise l'état d'un individu ou d'une cellule ne possédant qu'une seule copie d'un gène donné au lieu des deux habituelles. Chez l'homme (XY), tous les gènes situés sur la région spécifique du chromosome X sont présents à un seul exemplaire."
        },
        {
          id: "tle_d_svt_c12_q24",
          type: "mcq",
          prompt: "Dans un pedigree, quel schéma de transmission caractérise typiquement l'hérédité récessive liée au chromosome X ?",
          options: [
            "La transmission directe de père malade à tous ses fils malades",
            "La transmission exclusive de femme à femme à toutes les générations",
            "La transmission d'un grand-père malade à ses petits-fils par l'intermédiaire de ses filles conductrices saines",
            "L'apparition de la maladie uniquement chez les jumeaux homozygotes"
          ],
          correctAnswerIndex: 2,
          explanation: "C'est la classique transmission en 'saut de puce' ou diagonale : un homme atteint transmet son chromosome X muté à ses filles (qui restent saines conductrices si la mère est normale), et ces filles transmettent à leur tour l'allèle mutant à la moitié de leurs fils (les petits-fils du sujet initial)."
        }
      ]
    }
  ]
};
