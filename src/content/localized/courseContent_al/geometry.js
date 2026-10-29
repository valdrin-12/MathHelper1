export const courseContents_geometry_al = {

  // geo-002: Trekëndëshat (të avancuar)
  'geo-002': {
    lessons: [
      {
        title: 'Teorema e Pitagorës dhe Aplikime',
        theory: 'Teorema e Pitagorës: në trekëndëshin kënddrejtë, katrori i hipotenuzës është i barabartë me shumën e katrorëve të kateteve: a² + b² = c², ku c është hipotenuza.\n\nTreshet e Pitagorës janë treshe (a, b, c) numrash të plotë: (3,4,5), (5,12,13), (8,15,17), (7,24,25).\n\nZbatime: llogaritja e largësive, e diagonaleve, e lartësive dhe probleme inxhinierike.',
        keyPoints: [
          'a² + b² = c² (vetëm kënddrejtë)',
          'E anasjellta: nëse a²+b²=c², trekëndëshi është kënddrejtë',
          'Treshet e Pitagorës: (3,4,5), (5,12,13)...',
          'Largësia ndërmjet 2 pikave: d = √[(x₂-x₁)² + (y₂-y₁)²]',
        ],
        examples: [
          {
            example: 'Katetet e trekëndëshit kënddrejtë janë 9 dhe 12. Gjej hipotenuzën.',
            solution: 'c² = 81 + 144 = 225\nc = 15',
          },
          {
            example: 'Gjej largësinë ndërmjet A(1, 2) dhe B(5, 6)',
            solution: 'd = √[(5-1)² + (6-2)²] = √[16+16] = √32 = 4√2',
          },
        ],
        practice: [
          {
            problem: 'Diagonalja e katrorit është 10 cm. Sa është brinja?',
            solution: 'a = 5√2 ≈ 7,07 cm',
            steps: [
              'Diagonalja e ndan katrorin në dy trekëndësha kënddrejtë',
              'd² = a² + a² = 2a²',
              '100 = 2a²',
              'a² = 50',
              'a = √50 = 5√2 ≈ 7,07 cm',
            ],
          },
        ],
      },
      {
        title: 'Ngjashmëria e Trekëndëshave',
        theory: 'Dy trekëndësha janë të ngjashëm (~) nëse këndet përkatëse janë të barabarta. Atëherë brinjët përkatëse janë në përpjesëtim, dhe koeficienti i ngjashmërisë k është raporti i tyre.\n\nKriteret e ngjashmërisë: KK (dy kënde të barabarta), BBB (të tri raportet e brinjëve të barabarta), BKB (dy raporte brinjësh të barabarta dhe këndi ndërmjet tyre).\n\nZbatime: matja e tërthortë e lartësive, e largësive të paarritshme, projeksionet.',
        keyPoints: [
          'KK: dy kënde të barabarta → trekëndëshat janë të ngjashëm',
          'Raporti i sipërfaqeve = k²',
          'Raporti i vëllimeve = k³',
          'Vija e mesme e trekëndëshit është paralele me bazën dhe sa gjysma e saj',
        ],
        examples: [
          {
            example: 'Dy trekëndësha të ngjashëm kanë koeficient ngjashmërie 1:3. Nëse sipërfaqja e të voglit është 12 cm², sa është sipërfaqja e të madhit?',
            solution: 'Raporti i sipërfaqeve = (1:3)² = 1:9\nSipërfaqja = 12 × 9 = 108 cm²',
          },
        ],
        practice: [
          {
            problem: 'Hija e pemës ka gjatësi 8 m dhe njëkohësisht hija e shtizës 2 m (lartësia 3 m). Sa është lartësia e pemës?',
            solution: 'h = 12 m',
            steps: [
              'Trekëndëshat që formohen janë të ngjashëm',
              'h/3 = 8/2',
              'h = 3 × 4 = 12 m',
            ],
          },
        ],
      },
      {
        title: 'Formulat e Sipërfaqes dhe Perimetrit',
        theory: 'Sipërfaqja e trekëndëshit ka disa formula sipas të dhënave:\n- S = (b × h) / 2 (bazë × lartësi)\n- S = (a × b × sin C) / 2 (dy brinjë dhe këndi ndërmjet tyre)\n- Formula e Heronit: S = √[s(s-a)(s-b)(s-c)] ku s = (a+b+c)/2\n\nLartësia e trekëndëshit mund të bjerë brenda ose jashtë figurës (te trekëndëshi këndgjerë).',
        keyPoints: [
          'S = bh/2 (formula bazë)',
          'S = (1/2)ab sin C',
          'Heron: s = (a+b+c)/2, S = √[s(s-a)(s-b)(s-c)]',
          'P = a + b + c (perimetri)',
        ],
        examples: [
          {
            example: 'Gjej sipërfaqen e trekëndëshit me brinjë 5, 7, 8 cm.',
            solution: 's = (5+7+8)/2 = 10\nS = √[10×5×3×2] = √300 = 10√3 ≈ 17,3 cm²',
          },
        ],
        practice: [
          {
            problem: 'Gjej sipërfaqen e trekëndëshit barabrinjës me brinjë 6 cm.',
            solution: 'S = 9√3 ≈ 15,6 cm²',
            steps: [
              'Lartësia: h = 6×√3/2 = 3√3',
              'S = (6 × 3√3)/2 = 9√3',
              '≈ 15,59 cm²',
            ],
          },
        ],
      },
    ],
  },

  // geo-003: Katërkëndëshat dhe Shumëkëndëshat
  'geo-003': {
    lessons: [
      {
        title: 'Shumëkëndëshat e Rregullt',
        theory: 'Shumëkëndëshi i rregullt ka të gjitha brinjët dhe të gjitha këndet të barabarta. Shuma e këndeve të brendshme = (n-2) × 180°, ku n është numri i brinjëve.\n\nKëndi i brendshëm në çdo kulm = [(n-2) × 180°] / n\nKëndi i jashtëm = 360° / n\n\nPesëkëndëshi i rregullt: 5 brinjë, këndi = 108°; gjashtëkëndëshi: 6 brinjë, 120°; tetëkëndëshi: 8 brinjë, 135°.',
        keyPoints: [
          'Shuma e këndeve = (n-2) × 180°',
          'Këndi i brendshëm = (n-2)×180°/n',
          'Këndi i jashtëm = 360°/n',
          'Shumëkëndëshi i rregullt: të gjitha brinjët dhe të gjitha këndet të barabarta',
        ],
        examples: [
          {
            example: 'Sa është shuma e këndeve të brendshme të tetëkëndëshit (8 brinjë)?',
            solution: '(8-2) × 180° = 1080°',
          },
          {
            example: 'Gjej këndin e brendshëm të gjashtëkëndëshit të rregullt.',
            solution: '(6-2) × 180° / 6 = 720°/6 = 120°',
          },
        ],
        practice: [
          {
            problem: 'Shuma e këndeve të brendshme është 1440°. Sa brinjë ka shumëkëndëshi?',
            solution: '10 brinjë (dhjetëkëndësh)',
            steps: [
              '(n-2) × 180 = 1440',
              'n - 2 = 8',
              'n = 10',
            ],
          },
        ],
      },
      {
        title: 'Paralelogramët dhe Vetitë e Tyre',
        theory: 'Paralelogrami ka brinjët e kundërta paralele dhe të barabarta. Këndet e kundërta janë të barabarta. Diagonalet përgjysmojnë njëra-tjetrën.\n\nLlojet: drejtkëndëshi (këndet 90°), rombi (brinjë të barabarta), katrori (të dyja veçoritë).\n\nS = b × h (bazë × lartësi). Diagonalet e rombit janë pingule.',
        keyPoints: [
          'Brinjët e kundërta: paralele dhe të barabarta',
          'Këndet e kundërta: të barabarta',
          'Diagonalet: ndajnë njëra-tjetrën në gjysmë',
          'S = bazë × lartësi',
        ],
        examples: [
          {
            example: 'Paralelogrami ka bazë 8 cm dhe lartësi 5 cm. Gjej sipërfaqen.',
            solution: 'S = 8 × 5 = 40 cm²',
          },
        ],
        practice: [
          {
            problem: 'Rombi ka diagonalet 12 cm dhe 16 cm. Gjej sipërfaqen.',
            solution: 'S = 96 cm²',
            steps: [
              'Formula e sipërfaqes së rombit: S = d₁ × d₂ / 2',
              'S = 12 × 16 / 2 = 96 cm²',
            ],
          },
        ],
      },
    ],
  },

  // geo-004: Rrathët
  'geo-004': {
    lessons: [
      {
        title: 'Elementet e Rrethit',
        theory: 'Rrethi është bashkësia e të gjitha pikave të rrafshit që janë në largësi të njëjtë (rrezja r) nga qendra O. Diametri d = 2r.\n\nElementet: rrezja (r), diametri (d), korda (segment me dy skaje mbi rreth), harku (pjesë e rrethit), sektori (si një fetë pice), segmenti rrethor (zona ndërmjet kordës dhe harkut).\n\nNumri π ≈ 3,14159... është raporti i perimetrit me diametrin: C = πd = 2πr',
        keyPoints: [
          'Perimetri (gjatësia): C = 2πr = πd',
          'Sipërfaqja: S = πr²',
          'Këndi qendror = masa këndore e harkut',
          'Gjatësia e harkut = (θ/360°) × 2πr',
        ],
        examples: [
          {
            example: 'Gjej perimetrin dhe sipërfaqen e rrethit me r = 7 cm.',
            solution: 'C = 2π×7 = 14π ≈ 43,98 cm\nS = π×49 = 49π ≈ 153,94 cm²',
          },
        ],
        practice: [
          {
            problem: 'Gjej gjatësinë e harkut AB nëse këndi qendror është 60° dhe r = 12 cm.',
            solution: 'L = 4π ≈ 12,57 cm',
            steps: [
              'L = (60/360) × 2π × 12',
              '= (1/6) × 24π',
              '= 4π ≈ 12,57 cm',
            ],
          },
        ],
      },
      {
        title: 'Këndet dhe Lidhjet me Rreth',
        theory: 'Teorema e këndit periferik: këndi periferik është sa gjysma e këndit qendror që mbështetet në të njëjtin hark.\n\nKëndi i formuar nga dy prerëse (tangjente dhe kordë, dy korda etj.) llogaritet me formula të ndryshme sipas rastit.\n\nTeorema e tangjentes: tangjentja e rrethit është pingule me rrezen në pikën e takimit. Dy tangjentet nga një pikë e jashtme kanë gjatësi të barabarta.',
        keyPoints: [
          'Këndi periferik = ½ e këndit qendror',
          'Këndi në gjysmërreth = 90°',
          'Tangjentja ⊥ rrezes në pikën e takimit',
          'Dy tangjente nga një pikë e jashtme: gjatësi të barabarta',
        ],
        examples: [
          {
            example: 'Këndi qendror AOB = 80°. Sa është këndi periferik ACB?',
            solution: 'Këndi periferik = 80°/2 = 40°',
          },
        ],
        practice: [
          {
            problem: 'Këndi periferik ABC = 35°. Sa është këndi qendror AOC?',
            solution: 'AOC = 70°',
            steps: [
              'Këndi qendror = 2 × këndi periferik',
              'AOC = 2 × 35° = 70°',
            ],
          },
        ],
      },
    ],
  },

  // geo-005: Gjeometria e Hapësirës
  'geo-005': {
    lessons: [
      {
        title: 'Vëllimi dhe Sipërfaqja e Kuboidit',
        theory: 'Kuboidi (paralelepiped drejtkëndësh) ka 6 faqe drejtkëndëshe, 12 brinjë dhe 8 kulme.\n\nVëllimi: V = gjatësi × gjerësi × lartësi = l × g × h\nSipërfaqja totale: ST = 2(lg + lh + gh)\nDiagonalja e kuboidit: d = √(l² + g² + h²)\n\nKubi është rast i veçantë: V = a³, ST = 6a², d = a√3',
        keyPoints: [
          'V = l × g × h',
          'ST = 2(lg + lh + gh)',
          'Diagonalja = √(l²+g²+h²)',
          'Kubi: V = a³, ST = 6a²',
        ],
        examples: [
          {
            example: 'Kuboidi 3×4×5 cm. Gjej vëllimin dhe sipërfaqen totale.',
            solution: 'V = 60 cm³\nST = 2(12+15+20) = 94 cm²',
          },
        ],
        practice: [
          {
            problem: 'Kubi me sipërfaqe totale 150 cm². Gjej brinjën dhe vëllimin.',
            solution: 'a = 5 cm, V = 125 cm³',
            steps: [
              '6a² = 150',
              'a² = 25',
              'a = 5 cm',
              'V = 5³ = 125 cm³',
            ],
          },
        ],
      },
      {
        title: 'Sfera, Cilindri dhe Koni',
        theory: 'Cilindri: V = πr²h, ST = 2πr(r + h)\nKoni: V = πr²h/3, sipërfaqja anësore = πrl (l = përftuesja)\nSfera: V = 4πr³/3, ST = 4πr²\n\nKëto forma i gjejmë kudo: kanaçja (cilindër), kaushi i akullores (kon), topi (sferë), rezervuari (cilindër).',
        keyPoints: [
          'Cilindri: V = πr²h',
          'Koni: V = πr²h/3 = cilindri/3',
          'Sfera: V = 4πr³/3, S = 4πr²',
          'Përftuesja e konit: l = √(r²+h²)',
        ],
        examples: [
          {
            example: 'Sfera me r = 6 cm. Gjej vëllimin.',
            solution: 'V = 4π(216)/3 = 288π ≈ 904,8 cm³',
          },
        ],
        practice: [
          {
            problem: 'Cilindri me r = 5 cm, h = 10 cm. Gjej vëllimin dhe sipërfaqen totale.',
            solution: 'V = 250π ≈ 785,4 cm³, ST = 150π ≈ 471,2 cm²',
            steps: [
              'V = π × 25 × 10 = 250π',
              'ST = 2π × 5 × (5 + 10) = 2π × 75 = 150π',
            ],
          },
        ],
      },
    ],
  },

  // geo-006: Gjeometria Analitike
  'geo-006': {
    lessons: [
      {
        title: 'Ekuacioni i Rrethit',
        theory: 'Rrethi me qendër (h, k) dhe rreze r ka ekuacion: (x-h)² + (y-k)² = r²\nNë formën e përgjithshme: x² + y² + Dx + Ey + F = 0\n\nPër të gjetur qendrën dhe rrezen nga forma e përgjithshme, plotëso katrorin dy herë.',
        keyPoints: [
          '(x-h)² + (y-k)² = r² (forma standarde)',
          'Qendra (h, k), rreza r',
          'Nga forma e përgjithshme: plotëso katrorin',
          'Rrethi kalon nëpër (a,b): (a-h)²+(b-k)²=r²',
        ],
        examples: [
          {
            example: 'Gjej qendrën dhe rrezen e: (x-2)² + (y+3)² = 25',
            solution: 'Qendra (2, -3), rreza r = 5',
          },
          {
            example: 'Shkruaj ekuacionin e rrethit me qendër (1, -2) dhe rreze 4.',
            solution: '(x-1)² + (y+2)² = 16',
          },
        ],
        practice: [
          {
            problem: 'Gjej qendrën dhe rrezen e rrethit: x² + y² - 6x + 4y - 12 = 0',
            solution: 'Qendra (3, -2), r = 5',
            steps: [
              'Grupo: (x²-6x) + (y²+4y) = 12',
              'Plotëso: (x²-6x+9) + (y²+4y+4) = 12+9+4',
              '(x-3)² + (y+2)² = 25',
              'Qendra (3,-2), r=5',
            ],
          },
        ],
      },
      {
        title: 'Prerjet Konike',
        theory: 'Prerjet konike formohen kur një kon pritet me rrafsh: elipsa, hiperbola, parabola (dhe rastet e degjeneruara: pikë, drejtëz).\n\nParabola: y = ax² ose x = ay², me vatër dhe drejtuese\nElipsa: x²/a² + y²/b² = 1\nHiperbola: x²/a² - y²/b² = 1\n\nPrerjet konike kanë shumë zbatime: orbitat e planetëve (elipsa), antenat satelitore (parabola), lëvizja e predhave.',
        keyPoints: [
          'Parabola: y = ax² (vatra dhe drejtuesja)',
          'Elipsa: x²/a² + y²/b² = 1',
          'Hiperbola: x²/a² - y²/b² = 1',
          'Orbitat janë eliptike (ligji i Keplerit)',
        ],
        examples: [
          {
            example: 'Gjej gjysmëboshtet e elipsës: x²/16 + y²/9 = 1',
            solution: 'a = 4 (gjysmëboshti i madh), b = 3 (gjysmëboshti i vogël)',
          },
        ],
        practice: [
          {
            problem: 'Përcakto llojin e prerjes konike: 4x² + 9y² = 36',
            solution: 'Elipsë me a=3, b=2',
            steps: [
              'Pjesëto me 36: x²/9 + y²/4 = 1',
              'Forma e elipsës: x²/a² + y²/b² = 1',
              'a = 3, b = 2 → elipsë',
            ],
          },
        ],
      },
    ],
  },

  // geo-007: Gjeometria Diferenciale
  'geo-007': {
    lessons: [
      {
        title: 'Kurbat dhe Parametrizimi',
        theory: 'Kurba plane mund të parametrizohet si r(t) = (x(t), y(t)). Vektori tangjent është r\'(t) = (x\'(t), y\'(t)). Kurbatura κ mat sa shpejt ndryshon drejtimi i tangentit.\n\nKurbatura: κ = |r\' × r\'\'| / |r\'|³\nRreza e kurbaturës: R = 1/κ\n\nKoordinata natyrore (s = gjatësia e harkut) dhe sistemi Frenet-Serret (T, N, B) karakterizojnë kurbën hapësinore.',
        keyPoints: [
          'r(t) = (x(t), y(t), z(t)) parametrizim',
          'T = tangent, N = normal, B = binormal',
          'Kurbatura κ = 1/R',
          'Torsion τ mat rrotullimin hapësinor',
        ],
        examples: [
          {
            example: 'Parametrizimi i rrethit me rreze r: r(t) = (r cos t, r sin t)',
            solution: 'x = r cos t, y = r sin t\nr\'(t) = (-r sin t, r cos t)\n|r\'| = r (shpejtësi konstante)',
          },
        ],
        practice: [
          {
            problem: 'Gjej kurbaturën e kurbës y = x² në pikën (0, 0).',
            solution: 'κ = 2',
            steps: [
              'y\' = 2x, y\'\' = 2',
              'κ = |y\'\'| / (1 + y\'²)^(3/2)',
              'Te x=0: κ = 2/(1+0)^(3/2) = 2',
            ],
          },
        ],
      },
    ],
  },

  // geo-008: Topologjia Bazë
  'geo-008': {
    lessons: [
      {
        title: 'Hapësirat Topologjike',
        theory: 'Topologjia studion vetitë e hapësirave që ruhen nën transformime të vazhdueshme (homeomorfizma). "Gjeometria e gomës": nyjat, sipërfaqet, format që deformohen.\n\nHapësira topologjike (X, τ) ku τ është një familje nënbashkësish "të hapura" që plotëson: ∅ dhe X janë të hapura, bashkimi i çdo familjeje bashkësish të hapura është i hapur, prerja e një numri të fundëm bashkësish të hapura është e hapur.\n\nTopologjia na lejon të flasim për "afërsi", "vazhdueshmëri" dhe "lidhshmëri" pa metrikë specifike.',
        keyPoints: [
          'Bashkësitë e hapura plotësojnë aksiomat e topologjisë',
          'Homeomorfizëm = bijeksion i vazhdueshëm me invers i vazhdueshëm',
          'Invariant topologjik: ruhet nën homeomorfizma',
          'Shembull: filxhani ≅ donati (topologjikisht)',
        ],
        examples: [
          {
            example: 'A janë topologjikisht ekuivalente: rrethi dhe katrori?',
            solution: 'Po! Të dyja janë homeomorfe me rrethin S¹. Katrorin mund ta deformojmë në rreth pa e prerë dhe pa ngjitur gjë.',
          },
        ],
        practice: [
          {
            problem: 'Numri i vrimave (gjinia) i torusit është 1. A është torusi homeomorf me sferën?',
            solution: 'Jo. Sfera ka gjini 0, torusi gjini 1. Gjinia është invariant topologjik.',
            steps: [
              'Sfera S²: gjinia 0 (pa vrima)',
              'Torusi T²: gjinia 1 (një vrimë)',
              'Gjinia ndryshon → nuk janë homeomorfe',
            ],
          },
        ],
      },
    ],
  },
};
