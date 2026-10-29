export const courseContents_calculus_al = {

  // calc-001: Limitet dhe Vazhdueshmëria
  'calc-001': {
    lessons: [
      {
        title: 'Koncepti i Limitit',
        theory: 'Limiti i f(x) kur x → a është vlera L së cilës i afrohet f(x) ndërsa x i afrohet a. Shënohet lim(x→a) f(x) = L. Nuk kërkohet që f(a) = L, madje as që f(a) të ekzistojë.\n\nPërkufizimi ε-δ: ∀ε > 0, ∃δ > 0: |x-a| < δ → |f(x)-L| < ε\n\nNë mënyrë intuitive: mund ta bëjmë f(x) aq afër L sa duam, duke zgjedhur x mjaftueshëm afër a.',
        keyPoints: [
          'Limiti mund të ekzistojë edhe nëse f(a) nuk ekziston',
          'Limiti nga e majta = limiti nga e djathta → limiti ekziston',
          'Vetitë e limitit: për shumën, prodhimin, herësin',
          'Nëse f është e vazhdueshme, zëvendëso a drejtpërdrejt',
        ],
        examples: [
          {
            example: 'Gjej lim(x→2) (x² - 4)/(x - 2)',
            solution: 'Faktorizoje: (x-2)(x+2)/(x-2) = x+2 (për x≠2)\nlim(x→2) = 2+2 = 4',
          },
          {
            example: 'Gjej lim(x→0) sin(x)/x',
            solution: 'Ky është limit i njohur: lim(x→0) sin(x)/x = 1',
          },
        ],
        practice: [
          {
            problem: 'Gjej lim(x→3) (x²-9)/(x-3)',
            solution: '6',
            steps: [
              'Faktorizoje: (x-3)(x+3)/(x-3)',
              '= x+3 (për x≠3)',
              'lim(x→3) = 3+3 = 6',
            ],
          },
        ],
      },
      {
        title: 'Vazhdueshmëria',
        theory: 'Funksioni f është i vazhdueshëm te a nëse: 1) f(a) ekziston, 2) lim(x→a) f(x) ekziston, 3) lim(x→a) f(x) = f(a). Nëse plotësohen të tre kushtet, funksioni "mund të vizatohet pa ngritur lapsin".\n\nLlojet e ndërprerjeve: e evitueshme (një vrimë që mund të mbushet), me kërcim (limitet e njëanshme ndryshojnë) dhe thelbësore (limiti nuk ekziston).\n\nTeorema e vlerës së ndërmjetme: nëse f është e vazhdueshme në [a,b] dhe f(a) dhe f(b) kanë shenja të ndryshme, atëherë ka x∈(a,b) ku f(x)=0.',
        keyPoints: [
          'Tri kushtet e vazhdueshmërisë: f(a) ekziston, limiti ekziston dhe janë të barabartë',
          'Polinomet janë të vazhdueshëm kudo',
          'Funksionet racionale: të vazhdueshëm kudo ku emëruesi ≠ 0',
          'Teorema e vlerës së ndërmjetme garanton ekzistencën e rrënjëve',
        ],
        examples: [
          {
            example: 'Kontrollo nëse f(x) = (x²-1)/(x-1) është e vazhdueshme te x=1',
            solution: 'f(1) nuk ekziston (0/0). Nuk është e vazhdueshme te x=1 (ndërprerje e evitueshme).',
          },
        ],
        practice: [
          {
            problem: 'Trego se ekuacioni x³ - x - 1 = 0 ka të paktën një rrënjë reale.',
            solution: 'Nga teorema e vlerës së ndërmjetme: f(1)=-1<0 dhe f(2)=5>0 → rrënjë ∈ (1,2)',
            steps: [
              'f(x) = x³-x-1 është e vazhdueshme',
              'f(1) = 1-1-1 = -1 < 0',
              'f(2) = 8-2-1 = 5 > 0',
              'Shenja ndryshon → sipas teoremës ka rrënjë në (1,2)',
            ],
          },
        ],
      },
      {
        title: 'Limitet në Pafundësi dhe Asimptotat',
        theory: 'lim(x→∞) f(x) = L do të thotë se f(x) i afrohet L ndërsa x rritet pa kufi. Kjo jep asimptotën horizontale.\n\nNëse lim(x→a) f(x) = ±∞, x=a është asimptotë vertikale.\n\nRregull i dobishëm: kur x→∞ te një herës polinomesh, vendosin vetëm termat me fuqinë më të madhe.',
        keyPoints: [
          'lim f(x) = L → asimptotë horizontale y=L',
          'lim f(x) = ∞ → asimptotë vertikale',
          'Kur x→∞ vendos termi me fuqinë më të madhe',
          '1/xⁿ → 0 kur x→∞ (për n>0)',
        ],
        examples: [
          {
            example: 'Gjej lim(x→∞) (3x² + 2)/(5x² - 1)',
            solution: 'Termat dominante: 3x²/5x² = 3/5\nlim = 3/5',
          },
        ],
        practice: [
          {
            problem: 'Gjej lim(x→∞) (2x³ - x)/(x³ + 4)',
            solution: '2',
            steps: [
              'Pjesëto numëruesin dhe emëruesin me x³',
              '= (2 - 1/x²)/(1 + 4/x³)',
              'Kur x→∞: 1/x²→0, 4/x³→0',
              'Limiti = 2/1 = 2',
            ],
          },
        ],
      },
    ],
  },

  // calc-002: Derivatet
  'calc-002': {
    lessons: [
      {
        title: 'Koncepti i Derivatit',
        theory: 'Derivati i f te pika a është: f\'(a) = lim(h→0) [f(a+h) - f(a)] / h\nAi mat shpejtësinë e ndryshimit në atë çast, pra pjerrësinë e tangjentes në a.\n\nShënimet: f\'(x), df/dx, Df, ẏ, secili i përdorur në kontekste të caktuara.\n\nDerivati si limit i raportit të diferencave: [f(x+h) − f(x)]/h → dy/dx kur h→0.',
        keyPoints: [
          'f\'(a) = lim [f(a+h)-f(a)]/h kur h→0',
          'Derivati = pjerrësia e tangjentes',
          'Derivati = shpejtësia e menjëhershme',
          'f\'(x) ekziston → f është e derivueshme dhe e vazhdueshme',
        ],
        examples: [
          {
            example: 'Gjej f\'(x) nga përkufizimi nëse f(x) = x²',
            solution: 'f\'(x) = lim [(x+h)²-x²]/h\n= lim [2xh+h²]/h\n= lim(2x+h) = 2x',
          },
        ],
        practice: [
          {
            problem: 'Gjej derivatin nga përkufizimi: f(x) = 3x + 5',
            solution: 'f\'(x) = 3',
            steps: [
              'f\'(x) = lim [(3(x+h)+5)-(3x+5)]/h',
              '= lim [3h]/h',
              '= lim 3 = 3',
            ],
          },
        ],
      },
      {
        title: 'Rregullat e Derivimit',
        theory: 'Rregullat themelore të derivimit:\n- (c)\'= 0 (konstant)\n- (xⁿ)\'= nxⁿ⁻¹ (fuqia)\n- (f±g)\'= f\'±g\'\n- (fg)\'= f\'g + fg\' (prodhimi)\n- (f/g)\'= (f\'g - fg\')/g² (herësi)\n- (f∘g)\'= f\'(g)·g\' (rregulli i zinxhirit)\n\nKëto rregulla na kursejnë nga llogaritja me limite çdo herë.',
        keyPoints: [
          'Fuqia: d(xⁿ)/dx = nxⁿ⁻¹',
          'Prodhimi: (fg)\' = f\'g + fg\'',
          'Herësi: (f/g)\' = (f\'g - fg\')/g²',
          'Zinxhiri: d[f(g(x))]/dx = f\'(g(x))·g\'(x)',
        ],
        examples: [
          {
            example: 'Gjej derivatin e: y = x³ - 5x² + 2x - 7',
            solution: 'y\' = 3x² - 10x + 2',
          },
          {
            example: 'Gjej d/dx[(x²)(sin x)]',
            solution: '= 2x·sin x + x²·cos x',
          },
        ],
        practice: [
          {
            problem: 'Gjej derivatin e: f(x) = (x² + 1)⁴',
            solution: '8x(x²+1)³',
            steps: [
              'Zbato zinxhirin: f\'(x) = 4(x²+1)³ · (x²+1)\'',
              '(x²+1)\' = 2x',
              'f\'(x) = 4(x²+1)³ · 2x = 8x(x²+1)³',
            ],
          },
        ],
      },
      {
        title: 'Derivatet e Funksioneve Trigonometrike dhe Speciale',
        theory: 'Derivatet trigonometrike: (sin x)\' = cos x, (cos x)\' = -sin x, (tan x)\' = sec²x.\nEksponencial: (eˣ)\' = eˣ, (aˣ)\' = aˣ ln a.\nLogaritmik: (ln x)\' = 1/x, (log_a x)\' = 1/(x ln a).\n\nKëto derivate mësohen përmendsh, por mund të nxirren nga përkufizimi dhe identitetet trigonometrike.',
        keyPoints: [
          '(sin x)\' = cos x',
          '(cos x)\' = -sin x',
          '(eˣ)\' = eˣ (është derivati i vetvetes!)',
          '(ln x)\' = 1/x',
        ],
        examples: [
          {
            example: 'Gjej d/dx[eˣ sin x]',
            solution: '= eˣ sin x + eˣ cos x = eˣ(sin x + cos x)',
          },
          {
            example: 'Gjej d/dx[ln(x² + 1)]',
            solution: '= 1/(x²+1) · 2x = 2x/(x²+1)',
          },
        ],
        practice: [
          {
            problem: 'Gjej derivatin: y = e^(x²)',
            solution: '2xe^(x²)',
            steps: [
              'Zbato zinxhirin: y\' = e^(x²) · (x²)\'',
              '(x²)\' = 2x',
              'y\' = 2x·e^(x²)',
            ],
          },
        ],
      },
    ],
  },

  // calc-003: Aplikacionet e Derivateve
  'calc-003': {
    lessons: [
      {
        title: 'Ekstremet dhe Teorema e Fermatit',
        theory: 'Pikat kritike të f janë ku f\'(x) = 0 ose f\'(x) nuk ekziston. Ekstremet lokale (minimumet dhe maksimumet lokale) ndodhin vetëm në pikat kritike (teorema e Fermatit).\n\nTesti i derivatit të parë: nëse f\' ndryshon nga + në -, kemi maksimum lokal; nga - në +, minimum lokal.\nTesti i derivatit të dytë: nëse f\'\'(c) > 0, minimum; f\'\'(c) < 0, maksimum; f\'\'(c) = 0, i papërcaktuar.',
        keyPoints: [
          'Pikë kritike: f\'=0 ose f\' nuk ekziston',
          'Ekstremet globale: krahaso vlerat në skaje dhe në pikat kritike',
          "Konkavitet: f''>0 konkav lart, f''<0 konkav poshtë",
          'Pika infleksioni: f\'\' ndryshon shenjë',
        ],
        examples: [
          {
            example: 'Gjej ekstremet lokale të f(x) = x³ - 3x',
            solution: 'f\'(x) = 3x² - 3 = 0 → x = ±1\nf\'\'(1) = 6 > 0 → minimum te (1, -2)\nf\'\'(-1) = -6 < 0 → maksimum te (-1, 2)',
          },
        ],
        practice: [
          {
            problem: 'Gjej vlerën maksimale dhe minimale të f(x) = x² - 4x + 3 në [0, 3]',
            solution: 'min = -1 te x=2, max = 3 te x=0',
            steps: [
              'f\'(x) = 2x-4=0 → x=2 (pikë kritike)',
              'f(0)=3, f(2)=-1, f(3)=0',
              'Min = -1 (te x=2)',
              'Max = 3 (te x=0)',
            ],
          },
        ],
      },
      {
        title: 'Optimizimi',
        theory: 'Optimizimi është gjetja e vlerës maksimale ose minimale të funksionit. Hapat: 1) përcakto funksionin që duam ta optimizojmë, 2) shprehe me një variabël duke përdorur kushtet, 3) gjej pikat kritike, 4) kontrollo nëse janë maksimum apo minimum.\n\nZbatimet janë të shumta: minimizimi i kostos, maksimizimi i fitimit, format optimale, rrugët më të shkurtra.',
        keyPoints: [
          'Lidh funksionin që optimizohet me kushtet',
          'Shpreh me një variabël',
          'Gjej pikat kritike (derivati = 0)',
          'Verifiko natyrën (min ose max)',
        ],
        examples: [
          {
            example: 'Gjej drejtkëndëshin me perimetër 40 m dhe sipërfaqe maksimale.',
            solution: '2(l+g)=40 → l+g=20 → g=20-l\nS = l(20-l) = 20l-l²\nS\' = 20-2l=0 → l=10\nKatror 10×10, S=100 m²',
          },
        ],
        practice: [
          {
            problem: 'Cilat janë dy numrat pozitivë me shumë 12 dhe prodhim maksimal?',
            solution: '6 dhe 6, prodhimi = 36',
            steps: [
              'x + y = 12 → y = 12-x',
              'P = x(12-x) = 12x - x²',
              'P\' = 12-2x = 0 → x = 6',
              'y = 6, P = 36',
            ],
          },
        ],
      },
    ],
  },

  // calc-004: Integralet
  'calc-004': {
    lessons: [
      {
        title: 'Primitiva dhe Integrali i Pacaktuar',
        theory: 'Primitiva e f është një funksion F i tillë që F\' = f. Integrali i pacaktuar: ∫f(x)dx = F(x) + C, ku C është konstantja e integrimit.\n\nRregullat themelore: ∫xⁿdx = xⁿ⁺¹/(n+1) + C (n≠-1), ∫eˣdx = eˣ + C, ∫(1/x)dx = ln|x| + C, ∫sin x dx = -cos x + C, ∫cos x dx = sin x + C.',
        keyPoints: [
          '∫xⁿdx = xⁿ⁺¹/(n+1) + C',
          '∫eˣdx = eˣ + C',
          '∫(1/x)dx = ln|x| + C',
          'Konstanti C është i detyrueshëm',
        ],
        examples: [
          {
            example: 'Gjej ∫(3x² - 2x + 5)dx',
            solution: '= x³ - x² + 5x + C',
          },
          {
            example: 'Gjej ∫(2eˣ + cos x)dx',
            solution: '= 2eˣ + sin x + C',
          },
        ],
        practice: [
          {
            problem: 'Gjej ∫(x³ + 4x - 1/x)dx',
            solution: 'x⁴/4 + 2x² - ln|x| + C',
            steps: [
              '∫x³dx = x⁴/4',
              '∫4x dx = 2x²',
              '∫(-1/x)dx = -ln|x|',
              'Shto C',
            ],
          },
        ],
      },
      {
        title: 'Integrali i Caktuar dhe Sipërfaqja',
        theory: 'Teorema themelore e analizës: ∫ₐᵇ f(x)dx = F(b) - F(a) ku F\' = f. Kjo lidh integralin me derivatin.\n\nInterpretimi gjeometrik: ∫ₐᵇ f(x)dx = sipërfaqja ndërmjet grafikut të f dhe boshtit x (me shenjë: zona poshtë boshtit jep vlerë negative).\n\nSipërfaqja ndërmjet dy kurbave: S = ∫ₐᵇ |f(x) - g(x)|dx',
        keyPoints: [
          '∫ₐᵇ f(x)dx = F(b) - F(a)',
          'Sipërfaqe = integral (me shenjë)',
          'Zona poshtë boshtit x: integral negativ',
          'Ndërmjet dy kurbash: ∫(f-g)dx',
        ],
        examples: [
          {
            example: 'Llogarit ∫₀² (x² + 1)dx',
            solution: '= [x³/3 + x]₀² = (8/3 + 2) - 0 = 14/3',
          },
        ],
        practice: [
          {
            problem: 'Gjej sipërfaqen nën y = sin x nga 0 në π',
            solution: 'S = 2',
            steps: [
              '∫₀^π sin x dx = [-cos x]₀^π',
              '= -cos π - (-cos 0)',
              '= -(-1) + 1 = 2',
            ],
          },
        ],
      },
    ],
  },

  // calc-005: Aplikacionet e Integraleve
  'calc-005': {
    lessons: [
      {
        title: 'Vëllimi me Integrale',
        theory: 'Trupi i rrotullimit formohet duke rrotulluar figurën nën f(x) rreth boshtit x ose y.\n\nMetoda e disqeve: V = π∫ₐᵇ [f(x)]²dx (rrotullim rreth boshtit x)\nMetoda e unazave: V = π∫ₐᵇ {[f(x)]² - [g(x)]²}dx\nMetoda e cilindrave: V = 2π∫ₐᵇ x·f(x)dx (rrotullim rreth boshtit y)',
        keyPoints: [
          'Disk: V = π∫[f(x)]²dx',
          'Unaza: V = π∫{[f]²-[g]²}dx',
          'Cilindër: V = 2π∫x·f(x)dx',
          'Kujdes: mos e harro faktorin π',
        ],
        examples: [
          {
            example: 'Gjej vëllimin e trupit që përftohet nga rrotullimi i y = √x nga 0 në 4 rreth boshtit x',
            solution: 'V = π∫₀⁴ (√x)² dx = π∫₀⁴ x dx = π[x²/2]₀⁴ = 8π',
          },
        ],
        practice: [
          {
            problem: 'Gjej vëllimin e sferës me rreze r nga rrotullimi y = √(r²-x²)',
            solution: 'V = 4πr³/3',
            steps: [
              'V = π∫₋ᵣʳ (r²-x²)dx',
              '= π[r²x - x³/3]₋ᵣʳ',
              '= π(2r³ - 2r³/3)',
              '= 4πr³/3',
            ],
          },
        ],
      },
    ],
  },

  // calc-006: Ekuacionet Diferenciale
  'calc-006': {
    lessons: [
      {
        title: 'Ekuacionet me Ndryshore të Ndashme',
        theory: 'Ekuacion diferencial i rendit të parë: dy/dx = f(x, y). Ka ndryshore të ndashme nëse mund të shkruhet dy/dx = g(x)h(y). Atëherë ndajmë ndryshoret, dy/h(y) = g(x)dx, dhe integrojmë të dyja anët.\n\nZbatime: rritja eksponenciale (popullata), zbërthimi radioaktiv, ligji i ftohjes i Njutonit, interesi i vazhdueshëm.',
        keyPoints: [
          'Forma: dy/dx = g(x)·h(y)',
          'Ndaj ndryshoret: dy/h(y) = g(x)dx',
          'Integro të dyja anët',
          'Gjej C nga kushtet fillestare',
        ],
        examples: [
          {
            example: 'Zgjidh: dy/dx = xy',
            solution: 'dy/y = x dx\nln|y| = x²/2 + C\ny = Ae^(x²/2)',
          },
        ],
        practice: [
          {
            problem: 'Zgjidh: dy/dx = 2x/(y+1) me kusht y(0) = 2',
            solution: '(y+1)² = 2x² + 9',
            steps: [
              '(y+1)dy = 2x dx',
              '(y+1)²/2 = x² + C',
              'Kushti y(0)=2: (3)²/2 = 0 + C → C = 9/2',
              '(y+1)² = 2x² + 9',
            ],
          },
        ],
      },
    ],
  },

  // calc-007: Kalkulus Multivariabil
  'calc-007': {
    lessons: [
      {
        title: 'Derivatet e Pjesshme',
        theory: 'Funksioni f(x, y) ka derivatet e pjesshme ∂f/∂x (sipas x, me y konstant) dhe ∂f/∂y (sipas y, me x konstant).\n\nGradienti ∇f = (∂f/∂x, ∂f/∂y) tregon drejtimin e rritjes maksimale. Norma |∇f| tregon shkallën e rritjes.\n\nDerivati sipas drejtimit: D_u f = ∇f · u, ku u është vektori njësi i drejtimit.',
        keyPoints: [
          '∂f/∂x: trajto y si konstant',
          '∂f/∂y: trajto x si konstant',
          '∇f = (∂f/∂x, ∂f/∂y) = gradienti',
          'Gradienti → drejtim i rritjes maksimale',
        ],
        examples: [
          {
            example: 'Gjej derivatet e pjesshme të f(x,y) = x²y + 3xy²',
            solution: '∂f/∂x = 2xy + 3y²\n∂f/∂y = x² + 6xy',
          },
        ],
        practice: [
          {
            problem: 'Gjej ∇f te (1, 2) nëse f(x,y) = x²y - y³',
            solution: '∇f = (4, -11)',
            steps: [
              '∂f/∂x = 2xy → te (1,2): 4',
              '∂f/∂y = x² - 3y² → te (1,2): 1-12 = -11',
              '∇f(1,2) = (4, -11)',
            ],
          },
        ],
      },
    ],
  },
};
