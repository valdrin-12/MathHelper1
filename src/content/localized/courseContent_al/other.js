export const courseContents_other_al = {

  // ===== TRIGONOMETRI =====

  // trig-001: Hyrje në Trigonometri
  'trig-001': {
    lessons: [
      {
        title: 'Raportet Trigonometrike',
        theory: 'Trigonometria studion lidhjet ndërmjet këndeve dhe brinjëve të trekëndëshave. Gjashtë raportet trigonometrike përkufizohen me brinjët e trekëndëshit kënddrejtë: sin, cos, tan, cot, sec, csc.\n\nPër këndin θ: sin θ = kateti përballë / hipotenuza, cos θ = kateti pranë / hipotenuza, tan θ = kateti përballë / kateti pranë.\n\nNë anglisht mbahet mend me SOH-CAH-TOA (Sin = Opposite/Hypotenuse, Cos = Adjacent/Hypotenuse, Tan = Opposite/Adjacent).',
        keyPoints: [
          'sin θ = kateti përballë / hipotenuza',
          'cos θ = kateti pranë / hipotenuza',
          'tan θ = kateti përballë / kateti pranë = sin/cos',
          'sin²θ + cos²θ = 1 (identiteti bazë)',
        ],
        examples: [
          {
            example: 'Trekëndësh kënddrejtë: katetet 3 dhe 4, hipotenuzë 5. Gjej sin, cos dhe tan të këndit θ (përballë katetit 3).',
            solution: 'sin θ = 3/5 = 0,6\ncos θ = 4/5 = 0,8\ntan θ = 3/4 = 0,75',
          },
        ],
        practice: [
          {
            problem: 'sin θ = 5/13. Gjej cos θ dhe tan θ (θ është në kuadrantin e parë).',
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
        theory: 'Këndet 0°, 30°, 45°, 60°, 90° kanë vlera trigonometrike të sakta që mirë është t’i mbani mend:\n- sin 30° = cos 60° = 1/2\n- sin 45° = cos 45° = √2/2\n- sin 60° = cos 30° = √3/2\n- tan 30° = √3/3, tan 45° = 1, tan 60° = √3\n\nNdihmë për kujtesë: sin dhe cos janë "pasqyrim" i njëri-tjetrit rreth 45° (sin α = cos(90° - α)).',
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
            solution: '= 5√3/2 - 1 ≈ 3,33',
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
        theory: 'Ligji i Sinusit: a/sin A = b/sin B = c/sin C. Përdoret kur dihen: AAS, ASA, ose SSA.\n\nLigji i Kosinusit: c² = a² + b² - 2ab cos C. Përdoret kur dihen: SAS ose SSS.\n\nPlani i zgjidhjes: 1) shiko çfarë është dhënë (AAS, SSS etj.), 2) zgjidhe trekëndëshin, 3) kontrollo (shuma e këndeve = 180°).',
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
            problem: 'Në trekëndëshin me a=5, b=7, C=60°, gjej c.',
            solution: 'c = √39 ≈ 6,24',
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
        theory: 'Rrethi njësi ka rreze 1 dhe qendër në origjinë. Çdo pikë mbi të ka koordinata (cos θ, sin θ) ku θ është këndi nga boshti pozitiv x.\n\nKështu funksionet trigonometrike përkufizohen për çdo kënd (jo vetëm 0°–90°). Kuadrantet: I (0°–90°), II (90°–180°), III (180°–270°), IV (270°–360°).\n\nShenjat sipas kuadrantit: I: të gjitha +, II: vetëm sin +, III: vetëm tan +, IV: vetëm cos +.',
        keyPoints: [
          '(cos θ, sin θ) janë koordinata mbi rrethin njësi',
          'Shenjat: I të gjitha +, II sin +, III tan +, IV cos +',
          'Këndet shtuese: sin(180° - θ) = sin θ',
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
        theory: 'y = A sin(Bx + C) + D - forma e përgjithshme.\nA = amplituda (largësia më e madhe nga vija e mesit)\nB: perioda T = 2π/|B|\nC: përcakton zhvendosjen horizontale (fazën), -C/B\nD: zhvendosja vertikale\n\nGrafiku i kosinusit është si sinusi por i zhvendosur me π/2 majtas (ose cos x = sin(x + π/2)).',
        keyPoints: [
          'Amplituda |A|',
          'Perioda T = 2π/|B|',
          'Zhvendosja fazike = -C/B',
          'Zhvendosja vertikale D',
        ],
        examples: [
          {
            example: 'Gjej amplitudën dhe periodën e y = 3 sin(2x - π)',
            solution: 'Amplituda = 3\nPerioda = 2π/2 = π',
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
        theory: 'Identitetet trigonometrike janë barazime të vërteta për çdo vlerë të këndit. Grupet kryesore: identitetet e Pitagorës, identitetet e të anasjelltave dhe identitetet e herësit.\n\nIdentitetet e Pitagorës: sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ, 1 + cot²θ = csc²θ.\n\nIdentitetet e shumës/diferencës: sin(A±B) = sin A cos B ± cos A sin B, cos(A±B) = cos A cos B ∓ sin A sin B.',
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
              '1 - cos²θ = sin²θ (identiteti i Pitagorës)',
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
        theory: 'Kombinimi i ligjit të sinusit dhe kosinusit me sipërfaqen e trekëndëshit S = (1/2)ab sinC lejon zgjidhjen e çdo trekëndëshi kur jepen mjaftueshëm të dhëna.\n\nKëto metoda përdoren gjerësisht në: gjeodezi (matjen e terrenit), navigim, fizikë (vektorët e forcave), arkitekturë dhe inxhinieri.',
        keyPoints: [
          'S = (1/2)ab sin C (sipërfaqja)',
          'Ligji i sinusit, rasti i dykuptimtë: SSA mund të japë 0, 1 ose 2 trekëndësha',
          'Ligji i kosinusit: c² = a²+b²-2ab cos C',
          'Kombinohen për zgjidhjen e çdo trekëndëshi',
        ],
        examples: [
          {
            example: 'Dy mure formojnë kënd 120° dhe kanë gjatësi 4 m dhe 6 m. Sa është largësia ndërmjet skajeve të tyre?',
            solution: 'c² = 16+36-2(4)(6)cos120° = 52+24 = 76\nc = 2√19 ≈ 8,72 m',
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
        theory: 'Probabiliteti mat mundësinë që të ndodhë një ngjarje. Merr vlera nga 0 (e pamundur) deri në 1 (e sigurt). Probabiliteti klasik: P(A) = numri i rasteve të favorshme / numri i të gjitha rasteve (kur rastet janë njëlloj të mundshme).\n\nShënimet: S = hapësira mostrore, A = ngjarje, P(A) = probabiliteti\n\nAksiomat e Kolmogorovit: 0 ≤ P(A) ≤ 1, P(S) = 1, P(A∪B) = P(A)+P(B) nëse A dhe B përjashtojnë njëra-tjetrën.',
        keyPoints: [
          'P(A) = rastet e favorshme / të gjitha rastet',
          '0 ≤ P(A) ≤ 1',
          'P(ngjarjes së kundërt) = 1 - P(A)',
          'P(S) = 1, P(∅) = 0',
        ],
        examples: [
          {
            example: 'Hedhim një zar me 6 faqe. Sa është P(numër çift)?',
            solution: 'Çift: {2, 4, 6} → 3 raste\nP(çift) = 3/6 = 1/2',
          },
        ],
        practice: [
          {
            problem: 'Një kuti ka 3 topa të kuq, 5 blu dhe 2 të gjelbër. Sa është probabiliteti që topi i nxjerrë të mos jetë i kuq?',
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
        theory: 'Rregulla e Shumës: P(A∪B) = P(A) + P(B) - P(A∩B)\nNgjarjet që përjashtojnë njëra-tjetrën: P(A∩B) = 0, pra P(A∪B) = P(A) + P(B)\n\nRregulla e Prodhimit (ngjarje të pavarura): P(A∩B) = P(A) × P(B)\nProbabiliteti i kushtëzuar: P(A|B) = P(A∩B)/P(B)',
        keyPoints: [
          'Rregulla e shumës: P(A∪B) = P(A)+P(B)-P(A∩B)',
          'Ngjarje të pavarura: P(A∩B) = P(A)·P(B)',
          'P(A|B) = P(A∩B)/P(B)',
          'Teorema e Bayesit: P(A|B) = P(B|A)P(A)/P(B)',
        ],
        examples: [
          {
            example: 'P(A)=0,4, P(B)=0,3, P(A∩B)=0,1. Gjej P(A∪B).',
            solution: 'P(A∪B) = 0,4 + 0,3 - 0,1 = 0,6',
          },
        ],
        practice: [
          {
            problem: 'Hedhim dy monedha. Sa është probabiliteti që të bjerë të paktën një kokë? (K = kokë, P = pilë)',
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
        title: 'Mostrat dhe Shpërndarjet',
        theory: 'Statistika inferenciale nxjerr përfundime për popullatën nga mostra. Shpërndarja normale (Gauss) është e rëndësishme: simetrike rreth mesatares, me rregullën 68-95-99,7 (1σ, 2σ, 3σ).\n\nTeorema qendrore e limitit: mesataret e mostrave të mëdha shpërndahen afërsisht normalisht, pavarësisht nga shpërndarja e popullatës. Kjo i bën të mundshme testet statistikore.',
        keyPoints: [
          'Shpërndarja normale: N(μ, σ²)',
          'Rregulla 68-95-99,7',
          'Teorema qendrore e limitit',
          'Vlera z: z = (x - μ)/σ',
        ],
        examples: [
          {
            example: 'Nxënësit kanë notë mesatare μ=70 dhe σ=10. Sa % kanë notë nga 60 deri në 80?',
            solution: '60-80 është μ ± σ → rreth 68% e nxënësve',
          },
        ],
        practice: [
          {
            problem: 'Gjej vlerën z nëse x=85, μ=70, σ=10.',
            solution: 'z = 1,5',
            steps: [
              'z = (x - μ)/σ = (85 - 70)/10 = 15/10 = 1,5',
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
        theory: 'Regresioni linear modelon marrëdhënien ndërmjet dy variablave: y = β₀ + β₁x + ε.\nβ₀ = termi i lirë (vlera e y kur x=0)\nβ₁ = koeficienti i pjerrësisë (ndryshimi i y për njësi ndryshim të x)\n\nMetoda e katrorëve më të vegjël: minimizo shumën Σ(yᵢ - ŷᵢ)².\nKoeficienti i korrelacionit r (-1 ≤ r ≤ 1) tregon forcën e marrëdhënies.',
        keyPoints: [
          'ŷ = β₀ + β₁x (drejtëza e regresionit)',
          'β₁ = Σ(x-x̄)(y-ȳ) / Σ(x-x̄)²',
          'R² = koeficienti i përcaktimit',
          '|r| afër 1: lidhje e fortë lineare',
        ],
        examples: [
          {
            example: 'r = 0,85 ndërmjet studimit dhe notave. Çfarë tregon?',
            solution: 'Korrelacion pozitiv i fortë: sa më shumë studim, aq më e lartë nota.',
          },
        ],
        practice: [
          {
            problem: 'Nëse β₁ = 2,5 dhe β₀ = 10, parashiko y kur x = 8.',
            solution: 'ŷ = 30',
            steps: [
              'ŷ = β₀ + β₁x',
              'ŷ = 10 + 2,5(8)',
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
        title: 'Teorema e Bayesit',
        theory: 'Teorema e Bayesit: P(A|B) = P(B|A)·P(A) / P(B)\nP(A) = probabiliteti a priori (para të dhënave)\nP(A|B) = probabiliteti a posteriori (pas të dhënave)\nP(B|A) = përgjasia (likelihood)\n\nQasja Bayesiane: nis me besim a priori, përditëso me të dhëna për të marrë a posteriori.',
        keyPoints: [
          'P(A|B) = P(B|A)P(A)/P(B)',
          'A priori: besimi para të dhënave',
          'A posteriori: besimi pas të dhënave',
          'Përgjasia = P(të dhënat | hipoteza)',
        ],
        examples: [
          {
            example: 'Një test diagnostik ka saktësi 95%. Sëmundja prek 1% të njerëzve. Nëse testi del pozitiv, sa është probabiliteti që personi të jetë i sëmurë?',
            solution: 'P(sëmundje|+) = 0,95×0,01/(0,95×0,01 + 0,05×0,99) ≈ 16%\nEdhe me test pozitiv, gjasat janë vetëm rreth 16%!',
          },
        ],
        practice: [
          {
            problem: 'Dy kuti: A (3 të kuq, 2 blu) dhe B (1 i kuq, 4 blu). Zgjedhim rastësisht një kuti dhe nxjerrim një top të kuq. Sa është probabiliteti që të jetë nga kutia A?',
            solution: 'P(A|kuq) = 3/4',
            steps: [
              'P(A)=P(B)=0,5',
              'P(kuq|A)=3/5, P(kuq|B)=1/5',
              'P(kuq) = 0,5(3/5)+0,5(1/5) = 2/5',
              'P(A|kuq) = (3/5×0,5)/(2/5) = 3/4',
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
        theory: 'Seria kohore është një varg vëzhgimesh në kohë. Përbërësit: trendi (drejtimi afatgjatë), sezonaliteti (luhatje e rregullt periodike), cikli (lëvizje afatmesme), rastësia (luhatje e parregullt).\n\nY_t = T_t + S_t + C_t + R_t (model shtues)\nY_t = T_t × S_t × C_t × R_t (model shumëzues)',
        keyPoints: [
          'Trend: drejtim afatgjatë',
          'Sezonaliteti: periodik (vjetor, javor)',
          'Cikli: lëvizje ekonomike 3-10 vjeçare',
          'Mesatarja rrëshqitëse zbut rastësinë',
        ],
        examples: [
          {
            example: 'Shitjet janë: Jan=100, Feb=90, Mar=120, Apr=110. Gjej mesataren rrëshqitëse me dritare 3.',
            solution: 'M₂ = (100+90+120)/3 = 103,3\nM₃ = (90+120+110)/3 = 106,7',
          },
        ],
        practice: [
          {
            problem: 'Cili përbërës i serisë kohore shpjegon shitjet e larta në dhjetor çdo vit?',
            solution: 'Sezonaliteti: luhatje periodike vjetore',
            steps: [
              'Ndodh çdo dhjetor, pra është i rregullt dhe periodik',
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
        theory: 'Vektori ka madhësi (moduli) dhe drejtim. Shënohet si v = (v₁, v₂, ..., vₙ).\nMbledhja: u + v = (u₁+v₁, u₂+v₂, ...)\nShumëzimi skalar: kv = (kv₁, kv₂, ...)\nProdhimi skalar: u·v = Σuᵢvᵢ = |u||v|cos θ\n\nProdhimi vektorial (3D): u × v llogaritet si përcaktor 3×3; rezultati është pingul me të dy vektorët.',
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
        theory: 'Matrica m×n ka m rreshta dhe n kolona. Veprimet:\nMbledhja/Zbritja: A ± B (me të njëjtat përmasa)\nShumëzimi skalar: kA\nShumëzimi i matricave: A(m×n) × B(n×p) = C(m×p). Elementi cᵢⱼ = rreshti i-të i A × kolona j-të e B.\n\nMatrica njësi I: A×I = I×A = A. Matrica e anasjellë A⁻¹: A×A⁻¹ = I.',
        keyPoints: [
          'A×B: numri i kolonave të A = numri i rreshtave të B',
          'AB ≠ BA (jo komutativ)',
          '(AB)C = A(BC) (asociativ)',
          'Matrica e anasjellë: A×A⁻¹ = I',
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
        title: 'Zgjidhja e Sistemeve me Eliminimin e Gausit',
        theory: 'Sistemin e ekuacioneve lineare mund ta zgjidhim me matricën e zgjeruar [A|b]. Eliminimi i Gausit e shndërron matricën në formë shkallore duke përdorur veprimet elementare me rreshtat: ndërrimi i dy rreshtave, shumëzimi i një rreshti me numër, shtimi i një shumëfishi të një rreshti tjetër.\n\nForma shkallore e reduktuar: çdo kolonë kryesore ka 1 dhe zero kudo tjetër. Kjo jep zgjidhjen direkt.',
        keyPoints: [
          'Matrica e zgjeruar [A|b]',
          'Operacionet elementare: Rᵢ ↔ Rⱼ, kRᵢ, Rᵢ+kRⱼ',
          'Forma e reduktuar: 1 kryesor, zero kudo tjetër',
          'n ekuacione me n të panjohura: zakonisht një zgjidhje',
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
        theory: 'Hapësira vektoriale V mbi fushën F plotëson 8 aksioma (mbyllja ndaj mbledhjes dhe shumëzimit me skalar etj.). Shembuj: ℝⁿ, C[a,b] (funksionet e vazhdueshme), Pₙ (polinomet).\n\nNënhapësira: nënbashkësi e mbyllur ndaj veprimeve, që përmban vektorin zero. Span{v₁,...,vₖ} (mbështjellja lineare) është nënhapësira që ata krijojnë.\n\nPavarësia lineare: v₁,...,vₖ janë linearisht të pavarur nëse c₁v₁+...+cₖvₖ=0 nënkupton cᵢ=0.',
        keyPoints: [
          '8 aksioma të hapësirës vektoriale',
          'Nënhapësira: mbyllje + vektor zero',
          'Span: të gjitha kombinimet lineare',
          'Baza: vektorë linearisht të pavarur që e mbështjellin gjithë hapësirën',
        ],
        examples: [
          {
            example: 'A janë v₁=(1,0,1), v₂=(0,1,1), v₃=(1,1,0) linearisht të pavarur?',
            solution: 'det[v₁ v₂ v₃] = 1(0-1)-0+1(0-1) = -2 ≠ 0\nPo, janë të pavarur.',
          },
        ],
        practice: [
          {
            problem: 'Gjej një bazë të nënhapësirës Span{(1,2,3),(2,4,6)}.',
            solution: '{(1,2,3)}: mjafton një vektor (tjetri është shumëfish i tij)',
            steps: [
              '(2,4,6) = 2(1,2,3) → shumëfish',
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
        title: 'Vlerat dhe Vektorët Vetjakë',
        theory: 'Vektori vetjak v dhe vlera vetjake λ plotësojnë Av = λv. Ekuacioni karakteristik det(A - λI) = 0 jep vlerat vetjake.\n\nHapat: 1) Zgjidh det(A-λI)=0 për λ, 2) Për secilën λ, zgjidh (A-λI)v=0 për v.\n\nZbatime: PageRank (Google), PCA (mësimi automatik), lëkundjet natyrore, mekanika kuantike.',
        keyPoints: [
          'Av = λv (përkufizimi)',
          'det(A-λI)=0 (polinom karakteristik)',
          'Hapësira vetjake = bërthama e (A-λI)',
          'Diagonalizimi: A = PDP⁻¹',
        ],
        examples: [
          {
            example: 'Gjej vlerat vetjake të A = [[2,1],[0,3]]',
            solution: 'det(A-λI) = (2-λ)(3-λ) = 0\nλ₁=2, λ₂=3',
          },
        ],
        practice: [
          {
            problem: 'Gjej vlerat vetjake të A = [[5,0],[0,2]]',
            solution: 'λ₁=5, λ₂=2',
            steps: [
              'Matricë diagonale: vlerat vetjake janë elementet e diagonales',
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
        theory: 'Newton-Raphson gjen rrënjët e f(x)=0: xₙ₊₁ = xₙ - f(xₙ)/f\'(xₙ). Konvergjenca është kuadratike (numri i shifrave të sakta afërsisht dyfishohet në çdo hap).\n\nHapat: 1) nis me një vlerë fillestare x₀, 2) zbato formulën derisa vlerat të stabilizohen, 3) ndalo kur |f(xₙ)| < toleranca.',
        keyPoints: [
          'xₙ₊₁ = xₙ - f(xₙ)/f\'(xₙ)',
          'Konvergjencë kuadratike',
          'Kërkon që f të jetë e derivueshme',
          'Nis pranë rrënjës për konvergjencë',
        ],
        examples: [
          {
            example: 'Gjej √2 duke zgjidhur x²-2=0 me Newton (x₀=1)',
            solution: 'x₁ = 1 - (1-2)/(2) = 1,5\nx₂ = 1,5 - (2,25-2)/3 = 1,417\nx₃ ≈ 1,4142 (≈ √2)',
          },
        ],
        practice: [
          {
            problem: 'Zbato Newton-Raphson një herë: f(x)=x³-2, x₀=1.',
            solution: 'x₁ = 4/3 ≈ 1,333',
            steps: [
              'f(1) = 1-2 = -1',
              "f'(x) = 3x², f'(1) = 3",
              'x₁ = 1 - (-1)/3 = 1 + 1/3 = 4/3 ≈ 1,333',
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
        title: 'Pjesëtueshmëria, PMP dhe SHVP',
        theory: 'a e pjesëton b (a|b) nëse b = a×k për ndonjë numër të plotë k. PMP (pjesëtuesi më i madh i përbashkët) gjendet me algoritmin e Euklidit: PMP(a, b) = PMP(b, a mod b).\n\nSHVP (shumëfishi më i vogël i përbashkët): SHVP(a, b) = a×b / PMP(a, b).\n\nNumrat e thjeshtë kanë saktësisht dy pjesëtues: 1 dhe vetveten. Teorema themelore e aritmetikës: çdo numër > 1 shkruhet në mënyrë të vetme si prodhim numrash të thjeshtë.',
        keyPoints: [
          'PMP algoritmi i Euklidit: PMP(a,b)=PMP(b,a%b)',
          'SHVP(a,b) = a×b/PMP(a,b)',
          'Zbërthimi në faktorë të thjeshtë është i vetëm',
          'Ka pafund numra të thjeshtë (Euklidi)',
        ],
        examples: [
          {
            example: 'Gjej PMP(48, 18)',
            solution: 'PMP(48,18)=PMP(18,12)=PMP(12,6)=PMP(6,0)=6',
          },
          {
            example: 'Gjej SHVP(12, 8)',
            solution: 'PMP(12,8)=4\nSHVP = 12×8/4 = 24',
          },
        ],
        practice: [
          {
            problem: 'Gjej PMP dhe SHVP të 60 dhe 45.',
            solution: 'PMP=15, SHVP=180',
            steps: [
              'PMP(60,45)=PMP(45,15)=PMP(15,0)=15',
              'SHVP = 60×45/15 = 180',
            ],
          },
        ],
      },
      {
        title: 'Kongruenca dhe Aritmetika Modulo',
        theory: 'a ≡ b (mod n) do të thotë se n e pjesëton (a-b), pra a dhe b japin të njëjtën mbetje kur pjesëtohen me n.\n\nVeprimet aritmetike ruhen: (a+b) mod n = ((a mod n)+(b mod n)) mod n, dhe ngjashëm për shumëzim.\n\nTeorema e vogël e Fermatit: nëse p është numër i thjeshtë dhe p∤a, atëherë aᵖ⁻¹ ≡ 1 (mod p). Kjo ka zbatime në kriptografi.',
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
            problem: 'Sot është e premte. Cila ditë e javës do të jetë pas 100 ditësh? (1 = e hëna, …, 7 = e diela)',
            solution: 'E diela',
            steps: [
              'E premtja = dita 5',
              '(5 + 100) mod 7 = 105 mod 7',
              '105 = 15 × 7 + 0 → mbetja është 0',
              'Mbetja 0 i përgjigjet ditës 7 = e diela',
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
        title: 'Ekuacionet Diofantike',
        theory: 'Ekuacionet diofantike kërkojnë zgjidhje me numra të plotë. Ekuacioni linear: ax + by = c ka zgjidhje nëse dhe vetëm nëse PMP(a,b)|c.\n\nAlgoritmi i zgjeruar i Euklidit gjen koeficientët x, y në PMP(a,b) = ax + by, i cili na ndihmon të gjejmë zgjidhjen.\n\nEkuacionet diofantike të shkallëve më të larta janë shumë më të vështira dhe lidhen me Teoremën e Madhe të Fermatit.',
        keyPoints: [
          'ax+by=c: zgjidhje ↔ PMP(a,b)|c',
          'Algoritmi i zgjeruar i Euklidit',
          'Nëse (x₀,y₀) është zgjidhje dhe PMP(a,b)=1, të tjerat: x=x₀+bt, y=y₀-at',
          'Treshet e Pitagorës: a²+b²=c² (ekuacion diofantik)',
        ],
        examples: [
          {
            example: 'Zgjidh: 3x + 5y = 1',
            solution: 'PMP(3,5)=1|1 ✓\nMe Euklid: 5=1×3+2, 3=1×2+1\n1=3-1×2=3-(5-3)=2×3-5\nx₀=2, y₀=-1',
          },
        ],
        practice: [
          {
            problem: 'A ka zgjidhje 6x + 4y = 3?',
            solution: 'Jo, PMP(6,4)=2, por 2∤3',
            steps: [
              'PMP(6,4) = 2',
              'A e pjesëton 2 numrin 3? 3/2 = 1,5 (jo)',
              'Kushti 2|3 nuk plotësohet',
              'Asnjë zgjidhje e plotë',
            ],
          },
        ],
      },
    ],
  },
};
