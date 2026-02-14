export const courseContents_other = {

  // ===== TRIGONOMETRI =====

  // trig-001: Hyrje në Trigonometri
  'trig-001': {
    lessons: [
      {
        title: 'Raportet Trigonometrike',
        theory: 'Trigonometria studion marrëdhëniet ndërmjet këndet dhe anëve të trekëndëshave. Gjashtë raportet trigonometrike definohen me anët e trekëndëshit kënddrejtë: sin, cos, tan, cot, sec, csc.\n\nPër këndin θ: sin θ = i kundërt / hipotenuzë, cos θ = i afërt / hipotenuzë, tan θ = i kundërt / i afërt.\n\nMnemonikë: SOH-CAH-TOA (Sin=Opposite/Hypotenuse, Cos=Adjacent/Hypotenuse, Tan=Opposite/Adjacent)',
        keyPoints: [
          'sin θ = o/h (i kundërt/hipotenuzë)',
          'cos θ = a/h (i afërt/hipotenuzë)',
          'tan θ = o/a = sin/cos',
          'sin²θ + cos²θ = 1 (identiteti bazë)',
        ],
        examples: [
          {
            example: 'Trekëndësh kënddrejtë: katetet 3 dhe 4, hipotenuzë 5. Gjej sin, cos, tan të këndit θ (kundrejt katetes 3).',
            solution: 'sin θ = 3/5 = 0.6\ncos θ = 4/5 = 0.8\ntan θ = 3/4 = 0.75',
          },
        ],
        practice: [
          {
            problem: 'sin θ = 5/13. Gjej cos θ dhe tan θ (θ është kënd i parë).',
            solution: 'cos θ = 12/13, tan θ = 5/12',
            steps: [
              'sin²θ + cos²θ = 1',
              '(5/13)² + cos²θ = 1',
              'cos²θ = 1 - 25/169 = 144/169',
              'cos θ = 12/13',
              'tan θ = sin/cos = (5/13)/(12/13) = 5/12',
            ],
          },
        ],
      },
      {
        title: 'Vlerat Trigonometrike të Këndeve Speciale',
        theory: 'Këndet 0°, 30°, 45°, 60°, 90° kanë vlera trigonometrike ekzakte që duhet të memorizohen:\n- sin 30° = cos 60° = 1/2\n- sin 45° = cos 45° = √2/2\n- sin 60° = cos 30° = √3/2\n- tan 30° = √3/3, tan 45° = 1, tan 60° = √3\n\nTruk memorizimi: sin dhe cos janë "pasqyra" njëra-tjetrës rreth 45°.',
        keyPoints: [
          'sin 0° = 0, cos 0° = 1',
          'sin 30° = 1/2, cos 30° = √3/2',
          'sin 45° = √2/2, cos 45° = √2/2',
          'sin 90° = 1, cos 90° = 0',
        ],
        examples: [
          {
            example: 'Llogarit: sin²30° + cos²30°',
            solution: '= (1/2)² + (√3/2)² = 1/4 + 3/4 = 1 ✓',
          },
        ],
        practice: [
          {
            problem: 'Llogarit: 2sin 60° + 3cos 30° - tan 45°',
            solution: '= 2√3',
            steps: [
              'sin 60° = √3/2, cos 30° = √3/2, tan 45° = 1',
              '= 2(√3/2) + 3(√3/2) - 1',
              '= √3 + 3√3/2 - 1',
              '= 2√3/2 + 3√3/2 - 1 = 5√3/2 - 1',
            ],
          },
        ],
      },
      {
        title: 'Zgjidhja e Trekëndëshave',
        theory: 'Ligji i Sinusit: a/sin A = b/sin B = c/sin C. Përdoret kur dihen: AAS, ASA, ose SSA.\n\nLigji i Kosinusit: c² = a² + b² - 2ab cos C. Përdoret kur dihen: SAS ose SSS.\n\nPjona e Zgjidhjes: 1) Identifiko tiparin e dhënë (AAS, SSS, etj.), 2) Zgjidhur trekëndëshin, 3) Kontrollo (shuma këndesh = 180°).',
        keyPoints: [
          'Ligji i Sinusit: a/sin A = b/sin B = c/sin C',
          'Ligji i Kosinusit: c² = a²+b²-2ab cos C',
          'AAS/ASA: ligji i sinusit',
          'SAS/SSS: ligji i kosinusit',
        ],
        examples: [
          {
            example: 'A=30°, B=45°, a=8. Gjej b.',
            solution: 'b/sin B = a/sin A\nb = 8 × sin 45°/sin 30° = 8 × (√2/2)/(1/2) = 8√2',
          },
        ],
        practice: [
          {
            problem: 'Trekëndësh me a=5, b=7, C=60°. Gjej c.',
            solution: 'c = √39 ≈ 6.24',
            steps: [
              'c² = a² + b² - 2ab cos C',
              'c² = 25 + 49 - 2(5)(7) cos 60°',
              'c² = 74 - 70(1/2) = 74-35 = 39',
              'c = √39',
            ],
          },
        ],
      },
    ],
  },

  // trig-002: Rrethi Njësi dhe Grafikat
  'trig-002': {
    lessons: [
      {
        title: 'Rrethi Njësi',
        theory: 'Rrethi njësi ka rreze 1 dhe qendër në origjinë. Çdo pikë mbi të ka koordinata (cos θ, sin θ) ku θ është këndi nga boshti pozitiv x.\n\nKjo përgjithëson funksionet trig për çdo kënd (jo vetëm 0-90°). Këndet: kuadrant I (0°-90°), II (90°-180°), III (180°-270°), IV (270°-360°).\n\nShenja e sin/cos sipas kuadrantit: "Të gjithë Shkojnë Tangjent Cos" (All Students Take Calculus - ASTC): I-të gjithë +, II-vetëm sin+, III-vetëm tan+, IV-vetëm cos+.',
        keyPoints: [
          '(cos θ, sin θ) janë koordinata mbi rrethin njësi',
          'ASTC për shenjat sipas kuadranteve',
          'Këndet bashkëdhenatike: sin(180-θ) = sin θ',
          'Perioda e sin dhe cos: 2π',
        ],
        examples: [
          {
            example: 'Gjej sin 120° dhe cos 120°.',
            solution: '120° = 180° - 60° (kuadrant II)\nsin 120° = sin 60° = √3/2\ncos 120° = -cos 60° = -1/2',
          },
        ],
        practice: [
          {
            problem: 'Gjej vlerat e sin 225° dhe tan 225°.',
            solution: 'sin 225° = -√2/2, tan 225° = 1',
            steps: [
              '225° = 180° + 45° → kuadrant III',
              'sin 225° = -sin 45° = -√2/2',
              'cos 225° = -cos 45° = -√2/2',
              'tan 225° = sin/cos = (-√2/2)/(-√2/2) = 1',
            ],
          },
        ],
      },
      {
        title: 'Grafikat e Sinusit dhe Kosinusit',
        theory: 'y = A sin(Bx + C) + D - forma e përgjithshme.\nA = amplitudë (lartësia maksimale nga qendra)\nB: perioda T = 2π/|B|\nC: zhvendosja fazike (horizontal shift)\nD: zhvendosja vertikale\n\nGrafiku i kosinusit është si sinusi por i zhvendosur me π/2 majtas (ose cos x = sin(x + π/2)).',
        keyPoints: [
          'Amplitudë |A|',
          'Perioda T = 2π/|B|',
          'Zhvendosja fazike = -C/B',
          'Zhvendosja vertikale D',
        ],
        examples: [
          {
            example: 'Gjej amplitudën dhe periodën e y = 3 sin(2x - π)',
            solution: 'Amplitudë = 3\nPerioda = 2π/2 = π',
          },
        ],
        practice: [
          {
            problem: 'Shkruaj ekuacionin e sinusit me A=2, T=π, zhvendosje vertikale +1',
            solution: 'y = 2 sin(2x) + 1',
            steps: [
              'A = 2',
              'T = π → 2π/B = π → B = 2',
              'D = 1',
              'y = 2 sin(2x) + 1',
            ],
          },
        ],
      },
    ],
  },

  // trig-003: Identitetet Trigonometrike
  'trig-003': {
    lessons: [
      {
        title: 'Identitetet Themelore',
        theory: 'Identitetet trigonometrike janë barazime të vërteta për çdo vlerë të këndit. Grupi kryesor: identitetet Pitagorike, identitetet e reciprokut, identitetet e kuotientit.\n\nIdentitetet Pitagorike: sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ, 1 + cot²θ = csc²θ.\n\nIdentitetet e shumës/diferencës: sin(A±B) = sin A cos B ± cos A sin B, cos(A±B) = cos A cos B ∓ sin A sin B.',
        keyPoints: [
          'sin²θ + cos²θ = 1 (bazë)',
          'sin(A+B) = sinA cosB + cosA sinB',
          'cos(A+B) = cosA cosB - sinA sinB',
          'tan(A+B) = (tanA + tanB)/(1 - tanA tanB)',
        ],
        examples: [
          {
            example: 'Provoje identitetin: sin 75° = sin(45° + 30°)',
            solution: '= sin45° cos30° + cos45° sin30°\n= (√2/2)(√3/2) + (√2/2)(1/2)\n= √6/4 + √2/4 = (√6+√2)/4',
          },
        ],
        practice: [
          {
            problem: 'Thjeshtoje: (1 - cos²θ)/sin²θ',
            solution: '= 1',
            steps: [
              '1 - cos²θ = sin²θ (identiteti Pitagorik)',
              'sin²θ/sin²θ = 1',
            ],
          },
        ],
      },
    ],
  },

  // trig-004: Ligjet e Sinusit dhe Kosinusit
  'trig-004': {
    lessons: [
      {
        title: 'Aplikime të Avancuara të Ligjeve',
        theory: 'Kombinimi i ligjit të sinusit dhe kosinusit me sipërfaqen e trekëndëshit S = (1/2)ab sinC lejon zgjidhjen e çdo trekëndëshi duke dhënë mjaftueshëm informacion.\n\nKëto metoda aplikohen gjerësisht në: sondazh (surveying), navigacion, fizikë (vektorë forçash), arkitekturë dhe inxhinieri.',
        keyPoints: [
          'S = (1/2)ab sin C (sipërfaqja)',
          'Ligji i sinusit: ambiguity (SSA mund të japë 0, 1 ose 2 trekëndësha)',
          'Ligji i kosinusit: c² = a²+b²-2ab cos C',
          'Kombinohen për zgjidhjen e çdo trekëndëshi',
        ],
        examples: [
          {
            example: 'Dy krahë muri formojnë këndin 120°, gjatësia 4m dhe 6m. Sa është distanca ndërmjet majave?',
            solution: 'c² = 16+36-2(4)(6)cos120° = 52+24 = 76\nc = 2√19 ≈ 8.72 m',
          },
        ],
        practice: [
          {
            problem: 'Gjej sipërfaqen e trekëndëshit me b=8, c=11, A=30°.',
            solution: 'S = 22 cm²',
            steps: [
              'S = (1/2)bc sin A',
              'S = (1/2)(8)(11) sin 30°',
              '= 44 × (1/2) = 22',
            ],
          },
        ],
      },
    ],
  },

  // ===== STATISTIKË =====

  // stat-002: Probabiliteti
  'stat-002': {
    lessons: [
      {
        title: 'Bazat e Probabilitetit',
        theory: 'Probabiliteti mat shanset që ndodh një ngjarje. Variron nga 0 (impossibël) deri 1 (i sigurt). Probabiliteti klasik: P(A) = numri i rasteve favorabile / numri total i rasteve (baraz-probabilistë).\n\nNotacioni: S = hapësira mostrore, A = ngjarje, P(A) = probabiliteti\n\nAksiomat e Kolmogorovit: 0 ≤ P(A) ≤ 1, P(S) = 1, P(A∪B) = P(A)+P(B) nëse A,B disjunkte.',
        keyPoints: [
          'P(A) = rastet favorabile / rastet totale',
          '0 ≤ P(A) ≤ 1',
          'P(të kundërtës) = 1 - P(A)',
          'P(S) = 1, P(∅) = 0',
        ],
        examples: [
          {
            example: 'Hedhim zare me 6 faqe. Sa është P(numër çift)?',
            solution: 'Çift: {2, 4, 6} → 3 raste\nP(çift) = 3/6 = 1/2',
          },
        ],
        practice: [
          {
            problem: 'Kuti me 3 topa të kuq, 5 blu, 2 të gjelbër. P(nuk nxjerr të kuq)?',
            solution: 'P = 7/10',
            steps: [
              'P(të kuq) = 3/10',
              'P(jo të kuq) = 1 - 3/10 = 7/10',
            ],
          },
        ],
      },
      {
        title: 'Rregullat e Probabilitetit',
        theory: 'Rregulla e Shumës: P(A∪B) = P(A) + P(B) - P(A∩B)\nNgjarjet disjunkte (ekskluzive): P(A∩B) = 0, pra P(A∪B) = P(A) + P(B)\n\nRregulla e Prodhimit (ngjarje të pavarura): P(A∩B) = P(A) × P(B)\nProbabiliteti i kushtëzuar: P(A|B) = P(A∩B)/P(B)',
        keyPoints: [
          'Rregulla e shumës: P(A∪B) = P(A)+P(B)-P(A∩B)',
          'Ngjarje të pavarura: P(A∩B) = P(A)·P(B)',
          'P(A|B) = P(A∩B)/P(B)',
          'Teorema e Bayes: P(A|B) = P(B|A)P(A)/P(B)',
        ],
        examples: [
          {
            example: 'P(A)=0.4, P(B)=0.3, P(A∩B)=0.1. Gjej P(A∪B).',
            solution: 'P(A∪B) = 0.4 + 0.3 - 0.1 = 0.6',
          },
        ],
        practice: [
          {
            problem: 'Hedhim dy monedha. P(të paktën njëra koka)?',
            solution: 'P = 3/4',
            steps: [
              'Hapësira: {KK, KP, PK, PP}',
              'Të paktën njëra koka: {KK, KP, PK} → 3 raste',
              'P = 3/4',
              'Ose: P = 1 - P(asnjë koka) = 1 - 1/4 = 3/4',
            ],
          },
        ],
      },
    ],
  },

  // stat-003: Statistika Inferenciale (pa detaje të plota - konteni bazë)
  'stat-003': {
    lessons: [
      {
        title: 'Kampionimi dhe Shpërndarjet',
        theory: 'Statistika inferenciale nxjerr përfundime për popullatën nga kampioni. Shpërndarja normale (Gauss) është e rëndësishme: simetrike rreth mesatares, me rregullën 68-95-99.7 (1σ, 2σ, 3σ).\n\nTeorema e Limitit Qendror: mesataret e kampioneve të mëdha shpërndahen normalisht, pavarësisht nga shpërndarja e popullatës. Kjo i lejon test-et statistikore.',
        keyPoints: [
          'Shpërndarja normale: N(μ, σ²)',
          'Rregulla 68-95-99.7',
          'Teorema e Limitit Qendror',
          'Z-score: z = (x - μ)/σ',
        ],
        examples: [
          {
            example: 'Nxënësit kanë notë mesatare μ=70, σ=10. Çfarë % kanë note 60-80?',
            solution: '60-80 është μ ± σ → rreth 68% e nxënësve',
          },
        ],
        practice: [
          {
            problem: 'Gjej z-score nëse x=85, μ=70, σ=10.',
            solution: 'z = 1.5',
            steps: [
              'z = (x - μ)/σ = (85 - 70)/10 = 15/10 = 1.5',
            ],
          },
        ],
      },
    ],
  },

  // stat-004: Analiza e Regresionit
  'stat-004': {
    lessons: [
      {
        title: 'Regresioni Linear',
        theory: 'Regresioni linear modelon marrëdhënien ndërmjet dy variablave: y = β₀ + β₁x + ε.\nβ₀ = intercepti (vlera y kur x=0)\nβ₁ = koeficienti i pjerrësisë (ndryshimi i y për njësi ndryshim të x)\n\nMetoda e katrorëve minimë: minimizo shumën Σ(yᵢ - ŷᵢ)².\nKoeficienti i korrelacionit r (-1 ≤ r ≤ 1) tregon forcën e marrëdhënies.',
        keyPoints: [
          'ŷ = β₀ + β₁x (vijë regresioni)',
          'β₁ = Σ(x-x̄)(y-ȳ) / Σ(x-x̄)²',
          'R² = koeficienti i determinimit',
          '|r| afër 1: lidhje e fortë lineare',
        ],
        examples: [
          {
            example: 'r = 0.85 ndërmjet studimit dhe notave. Çfarë tregon?',
            solution: 'Korrelacion pozitiv i fortë: sa më shumë studim, aq më e lartë nota.',
          },
        ],
        practice: [
          {
            problem: 'Nëse β₁ = 2.5 dhe β₀ = 10, parashiko y kur x = 8.',
            solution: 'ŷ = 30',
            steps: [
              'ŷ = β₀ + β₁x',
              'ŷ = 10 + 2.5(8)',
              'ŷ = 10 + 20 = 30',
            ],
          },
        ],
      },
    ],
  },

  // stat-005: Statistika Bayesiane
  'stat-005': {
    lessons: [
      {
        title: 'Teorema e Bayes',
        theory: 'Teorema e Bayes: P(A|B) = P(B|A)·P(A) / P(B)\nP(A) = probabiliteti a priori (para të dhënave)\nP(A|B) = probabiliteti a posteriori (pas të dhënave)\nP(B|A) = verosimëllëria (likelihood)\n\nQasja Bayesiane: nis me besim a priori, përditëso me të dhëna për të marrë a posteriori.',
        keyPoints: [
          'P(A|B) = P(B|A)P(A)/P(B)',
          'A priori: besimi para të dhënave',
          'A posteriori: besimi pas të dhënave',
          'Verosimëllëria = P(të dhënat | hipoteza)',
        ],
        examples: [
          {
            example: 'Test diagnostik: saktësi 95%. Sëmundja prek 1%. Nëse testi pozitiv, sa është probabiliteti i sëmundjes?',
            solution: 'P(sëmundje|+) = 0.95×0.01/(0.95×0.01 + 0.05×0.99) ≈ 16%\nEdhe me test pozitiv, vetëm 16% shanc!',
          },
        ],
        practice: [
          {
            problem: 'Dy kuti: A(3 të kuq, 2 blu), B(1 të kuq, 4 blu). Zgjidhet kuti rastësisht, nxirret i kuq. Sa P(nga kutia A)?',
            solution: 'P(A|kuq) = 3/4',
            steps: [
              'P(A)=P(B)=0.5',
              'P(kuq|A)=3/5, P(kuq|B)=1/5',
              'P(kuq) = 0.5(3/5)+0.5(1/5) = 2/5',
              'P(A|kuq) = (3/5×0.5)/(2/5) = 3/4',
            ],
          },
        ],
      },
    ],
  },

  // stat-006: Analiza e Serive Kohore
  'stat-006': {
    lessons: [
      {
        title: 'Komponentet e Serive Kohore',
        theory: 'Seria kohore është sekuencë vëzhgimesh në kohë. Komponentet: trend (drejtim afatgjatë), sezonaliteti (variacion i rregullt periodik), cikli (lëvizje afatmesme), rastësia (luhatje e parregullt).\n\nY_t = T_t + S_t + C_t + R_t (model aditiv)\nY_t = T_t × S_t × C_t × R_t (model multiplikativ)',
        keyPoints: [
          'Trend: drejtim afatgjatë',
          'Sezonaliteti: periodik (vjetor, javor)',
          'Cikli: lëvizje ekonomike 3-10 vjeçare',
          'Mesatarja lëvizëse: eliminon rastësinë',
        ],
        examples: [
          {
            example: 'Shitjet janë: Jan=100, Feb=90, Mar=120, Apr=110. Gjej mesataren lëvizëse me dritare 3.',
            solution: 'M₂ = (100+90+120)/3 = 103.3\nM₃ = (90+120+110)/3 = 106.7',
          },
        ],
        practice: [
          {
            problem: 'Cila komponent e serisë kohore shpjegon shitje të larta në Dhjetor çdo vit?',
            solution: 'Sezonaliteti - variacion periodik vjetor',
            steps: [
              'Ndodh çdo Dhjetor = i rregullt dhe periodik',
              'Perioda = 1 vit',
              'Kjo është sezonaliteti',
            ],
          },
        ],
      },
    ],
  },

  // ===== ALGJEBËR LINEARE =====

  // linalg-001: Vektorët dhe Matricat
  'linalg-001': {
    lessons: [
      {
        title: 'Vektorët dhe Operacionet',
        theory: 'Vektori ka madhësi (moduli) dhe drejtim. Shënohet si v = (v₁, v₂, ..., vₙ).\nMbledhja: u + v = (u₁+v₁, u₂+v₂, ...)\nShumëzimi skalar: kv = (kv₁, kv₂, ...)\nProdukti skalar: u·v = Σuᵢvᵢ = |u||v|cos θ\n\nProdukti vektorial (3D): u × v = determinant i matricës 3×3. Rezultati ⊥ të dy vektorëve.',
        keyPoints: [
          'u + v = (u₁+v₁, u₂+v₂)',
          'u·v = Σuᵢvᵢ (prodhim skalar)',
          'u·v = 0 → vektorë pingulë',
          'u×v = vektori normal (3D)',
        ],
        examples: [
          {
            example: 'u=(3,4), v=(1,-2). Gjej u·v dhe |u|.',
            solution: 'u·v = 3(1)+4(-2) = -5\n|u| = √(9+16) = 5',
          },
        ],
        practice: [
          {
            problem: 'A janë pingulë u=(2,3) dhe v=(6,-4)?',
            solution: 'Po, u·v = 0',
            steps: [
              'u·v = 2(6) + 3(-4) = 12-12 = 0',
              'Prodhimi skalar = 0 → pingulë',
            ],
          },
        ],
      },
      {
        title: 'Matricat dhe Operacionet',
        theory: 'Matricë m×n ka m rreshta dhe n kolona. Operacionet:\nMbledhja/Zbritja: A ± B (të njëjta dimensione)\nShumëzimi skalar: kA\nShumëzimi i matricave: A(m×n) × B(n×p) = C(m×p). Elementi cᵢⱼ = rreshti i-të i A × kolona j-të e B.\n\nMatrica identitet I: A×I = I×A = A. Matricë inverse A⁻¹: A×A⁻¹ = I.',
        keyPoints: [
          'A×B: kolona B = rreshta A (duhet të pajtohen)',
          'AB ≠ BA (jo komutativ)',
          '(AB)C = A(BC) (asociativ)',
          'Matrica inverse: A×A⁻¹ = I',
        ],
        examples: [
          {
            example: 'Shumëzo A=[[1,2],[3,4]] × B=[[5,6],[7,8]]',
            solution: 'c₁₁ = 1×5+2×7=19, c₁₂ = 1×6+2×8=22\nc₂₁ = 3×5+4×7=43, c₂₂ = 3×6+4×8=50\nC = [[19,22],[43,50]]',
          },
        ],
        practice: [
          {
            problem: 'Gjej determinantin e A = [[3,2],[1,4]]',
            solution: 'det(A) = 10',
            steps: [
              'det(A) = ad - bc',
              '= 3×4 - 2×1',
              '= 12 - 2 = 10',
            ],
          },
        ],
      },
    ],
  },

  // linalg-002: Sistemet Lineare
  'linalg-002': {
    lessons: [
      {
        title: 'Zgjidhja e Sistemeve me Elim. Gaussiane',
        theory: 'Sistemin e ekuacioneve lineare mund ta zgjidhim me matricën e zgjeruar [A|b]. Eliminimi Gaussi transformon matricën në formë eшеlon (shkallë) duke përdorur operacionet elementare të rreshtave: shkëmbim, shumëzim me skalar, shtonje e shumëfishit.\n\nFormë eшelon e reduktuar (RREF): çdo kolona udhëzuese ka 1 dhe zero kudo tjetër. Kjo jep zgjidhjen direkt.',
        keyPoints: [
          'Matrica e zgjeruar [A|b]',
          'Operacionet elementare: Rᵢ ↔ Rⱼ, kRᵢ, Rᵢ+kRⱼ',
          'RREF: 1 udhëzues, zero kudo tjetër',
          'n variabla-n-ekuacione = 1 zgjidhje zakonisht',
        ],
        examples: [
          {
            example: 'Zgjidh: x+y=5 dhe 2x-y=4',
            solution: '[1 1|5]\n[2 -1|4]\nR₂ = R₂-2R₁:\n[1 1|5]\n[0 -3|-6]\nPra y=2, x=3',
          },
        ],
        practice: [
          {
            problem: 'Zgjidh me eliminim: x+2y=8, 3x-y=3',
            solution: 'x=2, y=3',
            steps: [
              '[1 2|8], [3 -1|3]',
              'R₂ = R₂-3R₁: [0 -7|-21] → y=3',
              'Zëvendëso: x+6=8 → x=2',
            ],
          },
        ],
      },
    ],
  },

  // linalg-003: Hapësirat Vektoriale
  'linalg-003': {
    lessons: [
      {
        title: 'Hapësirat Vektoriale dhe Nënhapësirat',
        theory: 'Hapësia vektoriale V mbi fushën F plotëson 8 aksiomat (mbyllja nën mbledhje dhe shumëzim skalar, etj.). Shembuj: ℝⁿ, C[a,b] (funksione continue), Pₙ (polinome).\n\nNënhapësira: nënbashkësi e mbyllur nën operacione, me vektorin zero. Span{v₁,...,vₖ} është nënhapësira e gjeneruar.\n\nIndependencë lineare: v₁,...,vₖ janë independent linearisht nëse c₁v₁+...+cₖvₖ=0 nënkupton cᵢ=0.',
        keyPoints: [
          '8 aksioma të hapësirës vektoriale',
          'Nënhapësira: mbyllje + vektor zero',
          'Span: gjithë kombinime lineare',
          'Bazë: independent linearisht + span i tërë',
        ],
        examples: [
          {
            example: 'A janë v₁=(1,0,1), v₂=(0,1,1), v₃=(1,1,0) independent linearisht?',
            solution: 'det[v₁ v₂ v₃] = 1(0-1)-0+1(0-1) = -2 ≠ 0\nPo, janë independent.',
          },
        ],
        practice: [
          {
            problem: 'Gjej një bazë të nënhapësirës Span{(1,2,3),(2,4,6)}.',
            solution: '{(1,2,3)} - vetëm njëri vektor (tjetri proporcional)',
            steps: [
              '(2,4,6) = 2(1,2,3) → proporcional',
              'Janë të varur linearisht',
              'Bazë: {(1,2,3)}',
            ],
          },
        ],
      },
    ],
  },

  // linalg-004: Vlerat dhe Vektorët Karakteristik
  'linalg-004': {
    lessons: [
      {
        title: 'Eigenvalues dhe Eigenvectors',
        theory: 'Eigenvektori v dhe eigenvalori λ plotësojnë Av = λv. Polinomi karakteristik: det(A - λI) = 0 jep eigenvalores.\n\nHapat: 1) Zgjidh det(A-λI)=0 për λ, 2) Për secilën λ, zgjidh (A-λI)v=0 për v.\n\nAplikimet: Page Rank (Google), PCA (machine learning), oscilimet natyrore, kuantum mekanikë.',
        keyPoints: [
          'Av = λv (definicioni)',
          'det(A-λI)=0 (polinom karakteristik)',
          'Eigenspace = null(A-λI)',
          'Diagonalizimi: A = PDP⁻¹',
        ],
        examples: [
          {
            example: 'Gjej eigenvalores e A = [[2,1],[0,3]]',
            solution: 'det(A-λI) = (2-λ)(3-λ) = 0\nλ₁=2, λ₂=3',
          },
        ],
        practice: [
          {
            problem: 'Gjej eigenvaloren e A = [[5,0],[0,2]]',
            solution: 'λ₁=5, λ₂=2',
            steps: [
              'Matricë diagonale: eigenvalores = elemente diagonale',
              'λ₁=5, λ₂=2',
            ],
          },
        ],
      },
    ],
  },

  // linalg-005: Analizë Numerike
  'linalg-005': {
    lessons: [
      {
        title: 'Metoda Newton-Raphson',
        theory: 'Newton-Raphson gjen rrënjët e f(x)=0: xₙ₊₁ = xₙ - f(xₙ)/f\'(xₙ). Konvergjenca është kuadratike (numri i shifrash korrekte pothuaj dyfishohet çdo iteracion).\n\nHapat: 1) Nis me hamë fillestare x₀, 2) Zbato formulën deri konvergjencë, 3) Ndalo kur |f(xₙ)| < tolerancë.',
        keyPoints: [
          'xₙ₊₁ = xₙ - f(xₙ)/f\'(xₙ)',
          'Konvergjencë kuadratike',
          'Kërkon f të derivueshëm',
          'Nis pranë rrënjës për konvergjencë',
        ],
        examples: [
          {
            example: 'Gjej √2 duke zgjidhur x²-2=0 me Newton (x₀=1)',
            solution: 'x₁ = 1 - (1-2)/(2) = 1.5\nx₂ = 1.5 - (2.25-2)/3 = 1.417\nx₃ ≈ 1.4142 (≈ √2)',
          },
        ],
        practice: [
          {
            problem: 'Zbato Newton-Raphson një herë: f(x)=x³-2, x₀=1.',
            solution: 'x₁ = 1.667',
            steps: [
              'f(1) = 1-2 = -1',
              "f'(x) = 3x², f'(1) = 3",
              'x₁ = 1 - (-1)/3 = 1 + 1/3 = 4/3 ≈ 1.333',
            ],
          },
        ],
      },
    ],
  },

  // ===== TEORIA E NUMRAVE =====

  // numth-001: Teoria Elementare e Numrave
  'numth-001': {
    lessons: [
      {
        title: 'Ndarësi dhe NMÇP/SMÇV',
        theory: 'a ndan b (a|b) nëse b = a×k për ndonjë numër të plotë k. NMÇP (Ndarësi Më i Madh i Përbashkët) gjindet me algoritmin e Euklid-it: NMÇP(a, b) = NMÇP(b, a mod b).\n\nSMÇV (Shumëfishi Më i Vogël i Përbashkët): SMÇV(a, b) = a×b / NMÇP(a, b).\n\nNumrat primorë kanë saktësisht dy ndarës: 1 dhe vetëveten. Teorema bazë e aritmetikës: çdo numër > 1 faktorizohet unike në primorë.',
        keyPoints: [
          'NMÇP algoritmi i Euklidit: NMÇP(a,b)=NMÇP(b,a%b)',
          'SMÇV(a,b) = a×b/NMÇP(a,b)',
          'Faktorizimi primar: unik',
          'Infinitë numra primorë (Euklidi)',
        ],
        examples: [
          {
            example: 'Gjej NMÇP(48, 18)',
            solution: 'NMÇP(48,18)=NMÇP(18,12)=NMÇP(12,6)=NMÇP(6,0)=6',
          },
          {
            example: 'Gjej SMÇV(12, 8)',
            solution: 'NMÇP(12,8)=4\nSMÇV = 12×8/4 = 24',
          },
        ],
        practice: [
          {
            problem: 'Gjej NMÇP dhe SMÇV të 60 dhe 45.',
            solution: 'NMÇP=15, SMÇV=180',
            steps: [
              'NMÇP(60,45)=NMÇP(45,15)=NMÇP(15,0)=15',
              'SMÇV = 60×45/15 = 180',
            ],
          },
        ],
      },
      {
        title: 'Kongruenca dhe Aritmetika Modulo',
        theory: 'a ≡ b (mod n) do të thotë n ndan (a-b), ose a dhe b kanë të njëjtën mbetje kur ndahen me n.\n\nOdat aritmetike mbajtën: (a+b) mod n = ((a mod n)+(b mod n)) mod n, dhe ngjashëm për shumëzim.\n\nTeorema e Fermat-it të vogël: nëse p primar dhe p∤a, atëherë aᵖ⁻¹ ≡ 1 (mod p). Kjo ka aplikime kriptografike.',
        keyPoints: [
          'a ≡ b (mod n) ↔ n|(a-b)',
          'Mbledhja dhe shumëzimi ruhen mod n',
          'Fermat i vogël: aᵖ⁻¹ ≡ 1 (mod p)',
          'Aplikim: kriptografi RSA',
        ],
        examples: [
          {
            example: 'Gjej 17 mod 5',
            solution: '17 = 3×5 + 2\n17 mod 5 = 2\nOse: 17 ≡ 2 (mod 5)',
          },
        ],
        practice: [
          {
            problem: 'Cili ditë i javës është pas 100 ditësh të premten? (1=e hënë, 7=e dielë)',
            solution: 'E premtja',
            steps: [
              'E premtja = dita 5',
              '(5 + 100) mod 7 = 105 mod 7',
              '105 = 15×7 + 0 → 105 mod 7 = 0',
              '0 mod 7 = 0 = e dielë',
              'Wait: 105/7=15 saktë, pra saktësisht e dielë',
            ],
          },
        ],
      },
    ],
  },

  // numth-002: Teoria e Numrave të Avancuar
  'numth-002': {
    lessons: [
      {
        title: 'Ekuacionet Diofantine',
        theory: 'Ekuacionet Diofantine kërkojnë zgjidhje të plota (integer). Ekuacioni linear: ax + by = c ka zgjidhje nëse dhe vetëm nëse NMÇP(a,b)|c.\n\nAlgoritmi i zgjeruar i Euklidit gjen koeficientët x, y në NMÇP(a,b) = ax + by, i cili na ndihmon të gjejmë zgjidhjen.\n\nEkuacionet Diofantine kuadratike janë shumë më të vështira dhe lidhura me Teoremën e Fundit të Fermat-it.',
        keyPoints: [
          'ax+by=c: zgjidhje ↔ NMÇP(a,b)|c',
          'Algoritmi i zgjeruar i Euklidit',
          'Nëse (x₀,y₀) zgjidhje, tjetrat: x=x₀+bt, y=y₀-at',
          'Triplet Pitagore: a²+b²=c² (diofantine)',
        ],
        examples: [
          {
            example: 'Zgjidh: 3x + 5y = 1',
            solution: 'NMÇP(3,5)=1|1 ✓\nMe Euklid: 5=1×3+2, 3=1×2+1\n1=3-1×2=3-(5-3)=2×3-5\nx₀=2, y₀=-1',
          },
        ],
        practice: [
          {
            problem: 'A ka zgjidhje 6x + 4y = 3?',
            solution: 'Jo, NMÇP(6,4)=2, por 2∤3',
            steps: [
              'NMÇP(6,4) = 2',
              '2 ndan 3? 3/2 = 1.5 (jo)',
              'Kushti 2|3 nuk plotësohet',
              'Asnjë zgjidhje e plotë',
            ],
          },
        ],
      },
    ],
  },
};
