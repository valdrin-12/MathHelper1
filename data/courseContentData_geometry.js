export const courseContents_geometry = {

  // geo-002: Trekëndëshat (të avancuar)
  'geo-002': {
    lessons: [
      {
        title: 'Teorema e Pitagorës dhe Aplikime',
        theory: 'Teorema e Pitagorës: në trekëndëshin kënddrejtë, katrori i hipotenuzës barazohet me shumën e katrorëve të kateve. a² + b² = c², ku c është hipotenuzë.\n\nKëmbë Pitagore janë treshëdhe (a, b, c) numrash të plotë: (3,4,5), (5,12,13), (8,15,17), (7,24,25).\n\nAplikime: llogaritja e distancave, diagonaleve, lartësive, problemeve inxhinierike.',
        keyPoints: [
          'a² + b² = c² (vetëm kënddrejtë)',
          'Konverse: nëse a²+b²=c², trekëndëshi është kënddrejtë',
          'Treshëdhet Pitagore: (3,4,5), (5,12,13)...',
          'Distanca ndërmjet 2 pikave: d = √[(x₂-x₁)² + (y₂-y₁)²]',
        ],
        examples: [
          {
            example: 'Katetet e trekëndëshit kënddrejtë janë 9 dhe 12. Gjej hipotenuzën.',
            solution: 'c² = 81 + 144 = 225\nc = 15',
          },
          {
            example: 'Gjej distancën ndërmjet A(1, 2) dhe B(5, 6)',
            solution: 'd = √[(5-1)² + (6-2)²] = √[16+16] = √32 = 4√2',
          },
        ],
        practice: [
          {
            problem: 'Diagonalja e katrorit është 10 cm. Sa është brinja?',
            solution: 'a = 5√2 ≈ 7.07 cm',
            steps: [
              'Diagonalja ndahet trekëndëshin kënddrejtë',
              'd² = a² + a² = 2a²',
              '100 = 2a²',
              'a² = 50',
              'a = √50 = 5√2 ≈ 7.07 cm',
            ],
          },
        ],
      },
      {
        title: 'Ngjashmëria e Trekëndëshave',
        theory: 'Dy trekëndësha janë të ngjashëm (~) nëse kanë të njëjtat këndesh. Anët e tyre janë proporcionale. Raporti i ngjashmërisë k = anë corresponding-e.\n\nKriteret e ngjashmërisë: AA (dy kënde të barabarta), SSS (të gjitha 3 raporte anësh të barabarta), SAS (dy raporte dhe këndi ndërmjet).\n\nAplikimet: matja indirekte e lartësive, distancave të paarrjtueshme, projeksionet.',
        keyPoints: [
          'AA: dy kënde të barabarta → ngjashëm',
          'Raporti i sipërfaqeve = k²',
          'Raporti i vëllimeve = k³',
          'Trekëndëshi i mesit: mediana është paralele me bazën',
        ],
        examples: [
          {
            example: 'Dy trekëndësha ngjashëm kanë raport 1:3. Nëse sipërfaqja e voglit = 12 cm², sa është e madhit?',
            solution: 'Raporti sipërfaqes = (1:3)² = 1:9\nSipërfaqja = 12 × 9 = 108 cm²',
          },
        ],
        practice: [
          {
            problem: 'Hija e pemës ka gjatësi 8 m dhe njëkohësisht hija e shtizës 2 m (lartësia 3 m). Sa është lartësia e pemës?',
            solution: 'h = 12 m',
            steps: [
              'Trekëndëshat formohen janë ngjashëm',
              'h/3 = 8/2',
              'h = 3 × 4 = 12 m',
            ],
          },
        ],
      },
      {
        title: 'Formulat e Sipërfaqes dhe Perimetrit',
        theory: 'Sipërfaqja e trekëndëshit ka disa formula sipas të dhënave:\n- S = (b × h) / 2 (bazë × lartësi)\n- S = (a × b × sin C) / 2 (dy anë dhe këndi ndërmjet)\n- Formula e Heronit: S = √[s(s-a)(s-b)(s-c)] ku s = (a+b+c)/2\n\nLartësia e trekëndëshit mund të jetë brenda ose jashtë figurës (kënddytë).',
        keyPoints: [
          'S = bh/2 (formula bazë)',
          'S = (1/2)ab sin C',
          'Heron: s = (a+b+c)/2, S = √[s(s-a)(s-b)(s-c)]',
          'P = a + b + c (perimetri)',
        ],
        examples: [
          {
            example: 'Gjej sipërfaqen e trekëndëshit me anë 5, 7, 8 cm.',
            solution: 's = (5+7+8)/2 = 10\nS = √[10×5×3×2] = √300 = 10√3 ≈ 17.3 cm²',
          },
        ],
        practice: [
          {
            problem: 'Trekëndësh barabrinjës me brinjë 6 cm. Gjej sipërfaqen.',
            solution: 'S = 9√3 ≈ 15.6 cm²',
            steps: [
              'Lartësia: h = 6×√3/2 = 3√3',
              'S = (6 × 3√3)/2 = 9√3',
              '≈ 15.59 cm²',
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
        theory: 'Shumëkëndëshi i rregullt ka të gjitha anët dhe këndet e barabarta. Shuma e këndeve të brendshme = (n-2) × 180°, ku n është numri i anëve.\n\nKëndi i brendshëm i çdo cep = [(n-2) × 180°] / n\nKëndi i jashtëm = 360° / n\n\nPentagonit i rregullt: 5 anë, këndi = 108°; Heksagonit: 6 anë, 120°; Oktoganit: 8 anë, 135°.',
        keyPoints: [
          'Shuma këndeve = (n-2) × 180°',
          'Këndi i brendshëm = (n-2)×180°/n',
          'Këndi i jashtëm = 360°/n',
          'Shumëkëndëshi i rregullt: të gjitha anët dhe këndet = barabarta',
        ],
        examples: [
          {
            example: 'Sa është shuma e këndeve të brendshme të oktoganit (8 anë)?',
            solution: '(8-2) × 180° = 1080°',
          },
          {
            example: 'Gjej këndin e brendshëm të heksagonit të rregullt.',
            solution: '(6-2) × 180° / 6 = 720°/6 = 120°',
          },
        ],
        practice: [
          {
            problem: 'Shuma e këndeve të brendshme = 1440°. Sa anë ka shumëkëndëshi?',
            solution: '10 anë (dekagonit)',
            steps: [
              '(n-2) × 180 = 1440',
              'n - 2 = 8',
              'n = 10',
            ],
          },
        ],
      },
      {
        title: 'Parallelogramet dhe Vetitë',
        theory: 'Paralelogrami ka brinjët e kundërta paralele dhe të barabarta. Këndet e kundërta janë të barabarta. Diagonalet e njëra-tjetrës ndajnë në gjysmë.\n\nLlojet: drejtkëndëshi (këndet 90°), rombi (brinjë të barabarta), katrori (të dyja veçoritë).\n\nS = b × h (bazë × lartësi). Diagonalet e rombit janë pingule.',
        keyPoints: [
          'Brinjët e kundërta: paralele dhe të barabarta',
          'Këndet e kundërta: të barabarta',
          'Diagonalet: ndajnë njëra-tjetrën në gjysmë',
          'S = bazë × lartësi',
        ],
        examples: [
          {
            example: 'Paralelogramit ka bazë 8 cm dhe lartësi 5 cm. Gjej sipërfaqen.',
            solution: 'S = 8 × 5 = 40 cm²',
          },
        ],
        practice: [
          {
            problem: 'Romboja me diagonale 12 cm dhe 16 cm. Gjej sipërfaqen.',
            solution: 'S = 96 cm²',
            steps: [
              'Formula sipërfaqes së rombit: S = d₁ × d₂ / 2',
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
        theory: 'Rrethi është bashkësia e të gjitha pikave në rrafsh që janë në distancë të barabartë (rreze r) nga qendra O. Diametri d = 2r.\n\nElementet: rreze (r), diametër (d), kord (segment me dy skaje mbi rreth), ark (pjesë e rrethit), sektori (si feta pice), segmenti (zona ndërmjet kordit dhe arkut).\n\nNumëri π ≈ 3.14159... raporti i perimetrit me diametrin: C = πd = 2πr',
        keyPoints: [
          'Perimetri (gjatësia): C = 2πr = πd',
          'Sipërfaqja: S = πr²',
          'Këndi qendror = këndi i arkut',
          'Gjatësia e arkut = (θ/360°) × 2πr',
        ],
        examples: [
          {
            example: 'Gjej perimetrin dhe sipërfaqen e rrethit me r = 7 cm.',
            solution: 'C = 2π×7 = 14π ≈ 43.98 cm\nS = π×49 = 49π ≈ 153.94 cm²',
          },
        ],
        practice: [
          {
            problem: 'Gjej gjatësinë e arkut AB nëse këndi qendror = 60° dhe r = 12 cm.',
            solution: 'L = 4π ≈ 12.57 cm',
            steps: [
              'L = (60/360) × 2π × 12',
              '= (1/6) × 24π',
              '= 4π ≈ 12.57 cm',
            ],
          },
        ],
      },
      {
        title: 'Këndet dhe Lidhjet me Rreth',
        theory: 'Teorema e këndit: këndi i brendshëm (inscribed angle) = gjysma e këndit qendror që mbulon të njëjtin ark.\n\nKëndi i formuar nga dy sekata (tangent-kord, kord-kord, etj.) llogaritet me formula të ndryshme bazuar në llojin e formimit.\n\nTeorema e tangentës: tangenta te rrethi është pingule me rrezen te pika e kontaktit. Dy tangenta nga pika e jashtme kanë gjatësi të barabarta.',
        keyPoints: [
          'Këndi i brendshëm = ½ këndi qendror',
          'Këndi në gjysmërreth = 90°',
          'Tangenta ⊥ rreze te pika e kontaktit',
          'Dy tangenta nga jashtë: gjatësi të barabarta',
        ],
        examples: [
          {
            example: 'Këndi qendror AOB = 80°. Sa është këndi i brendshëm ACB?',
            solution: 'Këndi i brendshëm = 80°/2 = 40°',
          },
        ],
        practice: [
          {
            problem: 'Këndi i brendshëm ABC = 35°. Sa është këndi qendror AOC?',
            solution: 'AOC = 70°',
            steps: [
              'Këndi qendror = 2 × këndi i brendshëm',
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
        title: 'Truprimi (Vëllimi) dhe Sipërfaqja e Kuboidit',
        theory: 'Kuboidi (paralelepiped drejtkëndësh) ka 6 faqe drejtkëndëshe, 12 brinjë dhe 8 kulme.\n\nVëllimi: V = gjatësi × gjerësi × lartësi = l × g × h\nSipërfaqja totale: ST = 2(lg + lh + gh)\nDiagonalja e kuboidit: d = √(l² + g² + h²)\n\nKatrori (kub) është rast i veçantë: V = a³, ST = 6a², d = a√3',
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
        title: 'Sferat, Cilindrat dhe Koniket',
        theory: 'Cilindri: V = πr²h, ST = 2πr(r + h)\nKoni: V = πr²h/3, sipërfaqe anësore = πrl (l = gjeneratrice)\nSfera: V = 4πr³/3, ST = 4πr²\n\nKëto forma gjenden kudo në jetën reale: kanata (cilindër), akullore (kon), top (sferë), tanke (cilindër).',
        keyPoints: [
          'Cilindri: V = πr²h',
          'Koni: V = πr²h/3 = cilindri/3',
          'Sfera: V = 4πr³/3, S = 4πr²',
          'Gjeneratrice konit: l = √(r²+h²)',
        ],
        examples: [
          {
            example: 'Sfera me r = 6 cm. Gjej vëllimin.',
            solution: 'V = 4π(216)/3 = 288π ≈ 904.8 cm³',
          },
        ],
        practice: [
          {
            problem: 'Cilindri me r = 5 cm, h = 10 cm. Gjej vëllimin dhe sipërfaqen totale.',
            solution: 'V = 250π ≈ 785.4 cm³, ST = 150π ≈ 471.2 cm²',
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
        theory: 'Rrethi me qendër (h, k) dhe rreze r ka ekuacion: (x-h)² + (y-k)² = r²\nNë formë të shpërndarë: x² + y² + Dx + Ey + F = 0\n\nPër të gjetur qendrën dhe rrezen nga forma e shpërndarë, plotëzo katrori dy herë.',
        keyPoints: [
          '(x-h)² + (y-k)² = r² (forma standarde)',
          'Qendra (h, k), rreza r',
          'Forma e shpërndarë: plotëzo katrorin',
          'Rrethi kalon (a,b): (a-h)²+(b-k)²=r²',
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
        title: 'Seksionet Konike',
        theory: 'Seksionet konike formohen nga prerja e kon-it me rrafsh: elipsa, hiperbola, parabola (dhe rastet degjeneruese: pikë, vijë).\n\nParabola: y = ax² ose x = ay² - vijë drejtimtare dhe fokus\nElipsa: x²/a² + y²/b² = 1\nHiperbola: x²/a² - y²/b² = 1\n\nSeksionet konike kanë aplikime të shumta: orbitat planetare (elipsa), antena satelitore (parabolë), objekte balistike.',
        keyPoints: [
          'Parabola: y = ax² (fokus dhe drejtimtare)',
          'Elipsa: x²/a² + y²/b² = 1',
          'Hiperbola: x²/a² - y²/b² = 1',
          'Orbitat janë eliptike (ligji i Keplerit)',
        ],
        examples: [
          {
            example: 'Gjej gjysmë-boshtet e elipsës: x²/16 + y²/9 = 1',
            solution: 'a = 4 (boshi i madh), b = 3 (boshi i vogël)',
          },
        ],
        practice: [
          {
            problem: 'Klasifiko seksionin konik: 4x² + 9y² = 36',
            solution: 'Elipsë me a=3, b=2',
            steps: [
              'Ndaj me 36: x²/9 + y²/4 = 1',
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
        theory: 'Kurba plane mund të parametrizohet si r(t) = (x(t), y(t)). Vektori tangjent është r\'(t) = (x\'(t), y\'(t)). Kurbatura κ mat sa shpejt ndryshon drejtimi i tangentit.\n\nKurbatura: κ = |r\' × r\'\'| / |r\'|³\nRreza e kurbaturës: R = 1/κ\n\nKoordinatat natyrore (s = gjatësia e harku) dhe sistemi Frenet-Serret (T, N, B) karakterizojnë kurbën hapësinore.',
        keyPoints: [
          'r(t) = (x(t), y(t), z(t)) parametrizim',
          'T = tangent, N = normal, B = binormal',
          'Kurbatura κ = 1/R',
          'Torsion τ mat rrotullimin hapësinor',
        ],
        examples: [
          {
            example: 'Parametrizoje rrethit me rreze r: r(t) = (r cos t, r sin t)',
            solution: 'x = r cos t, y = r sin t\nr\'(t) = (-r sin t, r cos t)\n|r\'| = r (shpejtësi konstante)',
          },
        ],
        practice: [
          {
            problem: 'Gjej kurbaturën e vijës y = x² te pikës (0, 0).',
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
        theory: 'Topologjia studion vetitë e hapësirave që ruhen nën transformime të vazhdueshme (homeomorfizma). "Gjeometria e gomës" - rruget, nyjat, sipërfaqet.\n\nHapësira topologjike (X, τ) ku τ është koleksion i nën-bashkësive "të hapura" duke plotësuar: ∅ dhe X janë të hapura, bashkimi i çdo familje të hapurash është i hapur, prerja e fundme e të hapurash është e hapur.\n\nTopologjia na lejon të flasim për "afërsi", "vazhdueshëmri" dhe "lidhshmëri" pa metrikë specifike.',
        keyPoints: [
          'Nën-bashkësi e hapur: plotëso aksioma topologjike',
          'Homeomorfizëm = bijeksion i vazhdueshëm me invers i vazhdueshëm',
          'Invariant topologjik: ruhet nën homeomorfizma',
          'Shembull: filxhani ≅ donati (topologjikisht)',
        ],
        examples: [
          {
            example: 'A janë topologjikisht ekuivalente: rrethi dhe katrori?',
            solution: 'Po! Të dyja janë varëse S¹ (homeomorfike me njëra-tjetrën). Mund të "shformosh" katorin në rreth pa pritur ose ngjitë.',
          },
        ],
        practice: [
          {
            problem: 'Numri i vrimave (genus) të torrit është 1. A është homeomorfik me sferën?',
            solution: 'Jo. Sfera ka genus 0, torri genus 1. Genus është invariant topologjik.',
            steps: [
              'Sfera S²: genus 0 (pa vrima)',
              'Torri T²: genus 1 (një vrimë)',
              'Genus ndryshon → nuk janë homeomorfike',
            ],
          },
        ],
      },
    ],
  },
};
