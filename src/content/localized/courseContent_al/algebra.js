export const courseContents_algebra_al = {

  // alg-003: Inekuacionet dhe Vlera Absolute
  'alg-003': {
    lessons: [
      {
        title: 'Inekuacionet me Vlerë Absolute',
        theory: 'Vlera absolute |x| tregon largësinë e numrit x nga zero në boshtin numerik, prandaj nuk është kurrë negative. |x| = x nëse x ≥ 0, dhe |x| = -x nëse x < 0.\n\nInekuacionet me vlerë absolute: |x| < a do të thotë -a < x < a (zgjidhja është interval). |x| > a do të thotë x < -a ose x > a (dy intervale).\n\nKëto inekuacione janë të dobishme në fizikë (toleranca), inxhinieri (marzhi i gabimit) dhe matematikë të avancuar.',
        keyPoints: [
          '|x| ≥ 0 për çdo x (kurrë negativ)',
          '|x| < a → -a < x < a',
          '|x| > a → x < -a ose x > a',
          '|x - c| < r → c - r < x < c + r (rreth qendrës c, rrezja r)',
        ],
        examples: [
          {
            example: 'Zgjidh: |x - 3| < 5',
            solution: '-5 < x - 3 < 5\n-5 + 3 < x < 5 + 3\n-2 < x < 8\nZgjidhja: (-2, 8)',
          },
          {
            example: 'Zgjidh: |2x + 1| ≥ 7',
            solution: '2x + 1 ≤ -7  ose  2x + 1 ≥ 7\n2x ≤ -8       ose  2x ≥ 6\nx ≤ -4        ose  x ≥ 3\nZgjidhja: (-∞, -4] ∪ [3, +∞)',
          },
        ],
        practice: [
          {
            problem: 'Zgjidh: |3x - 6| < 9',
            solution: '-1 < x < 5, interval (-1, 5)',
            steps: [
              '-9 < 3x - 6 < 9',
              '-9 + 6 < 3x < 9 + 6',
              '-3 < 3x < 15',
              '-1 < x < 5',
            ],
          },
        ],
      },
      {
        title: 'Sistemet e Inekuacioneve',
        theory: 'Sistemi i inekuacioneve është dy ose më shumë inekuacione me të njëjtat variabla. Zgjidhja e sistemit është bashkësia e të gjitha vlerave që plotësojnë TË GJITHA inekuacionet njëkohësisht (prerja e bashkësive të zgjidhjeve).\n\nPër inekuacione lineare në dy variabla, secili inekuacion përcakton një gjysmërrafsh. Zgjidhja e sistemit është zona e përbashkët e të gjithë gjysmërrafsheve.',
        keyPoints: [
          'Zgjidhja = prerja e të gjitha zgjidhjeve individuale',
          'Shëno: {x | kusht1 DHE kusht2}',
          'Për dy inekuacione: gjej pjesën ku vlejnë të dyja',
          'Grafiku: zona e përbashkët (prerja)',
        ],
        examples: [
          {
            example: 'Zgjidh sistemin: x > 2 dhe x < 7',
            solution: 'Zgjidhja: 2 < x < 7, interval (2, 7)',
          },
          {
            example: 'Zgjidh: 2x - 1 > 3 dhe x + 4 < 10',
            solution: '2x > 4 → x > 2\nx < 6\nZgjidhja: 2 < x < 6, interval (2, 6)',
          },
        ],
        practice: [
          {
            problem: 'Zgjidh sistemin: 3x + 1 > 7 dhe 2x - 5 < 9',
            solution: '2 < x < 7',
            steps: [
              'Inekuacioni 1: 3x + 1 > 7 → 3x > 6 → x > 2',
              'Inekuacioni 2: 2x - 5 < 9 → 2x < 14 → x < 7',
              'Prerja: x > 2 DHE x < 7',
              'Zgjidhja: (2, 7)',
            ],
          },
        ],
      },
      {
        title: 'Aplikime të Inekuacioneve',
        theory: 'Inekuacionet aplikohen gjerësisht në jetën reale: kufijtë e buxhetit, optimizimi (minimizimi ose maksimizimi), analiza e fitimit dhe e humbjes, dhe kufijtë e sigurisë.\n\nHapat e zgjidhjes: 1) përcakto të panjohurën, 2) shkruaj inekuacionin, 3) zgjidhe, 4) interpreto rezultatin në kontekstin e problemit.',
        keyPoints: [
          '"Të paktën" → ≥',
          '"Më shumë se" → >',
          '"Të shumtën" → ≤',
          '"Nën" → <',
        ],
        examples: [
          {
            example: 'Të paktën sa copë produkti duhen shitur me çmim 15€ që të kesh fitim mbi 500€, nëse kosto fikse = 200€?',
            solution: '15x - 200 > 500\n15x > 700\nx > 46,67\nDuhen shitur të paktën 47 copë',
          },
        ],
        practice: [
          {
            problem: 'Nxënësi duhet të ketë mesatare të paktën 75 në 5 provime. Deri tani ka marrë: 70, 80, 65, 90. Sa duhet të marrë së paku në provimin e 5-të?',
            solution: 'Nota minimale = 70',
            steps: [
              'Shuma e 4 notave: 70+80+65+90 = 305',
              'Shuma totale duhet ≥ 375 (75×5)',
              'Nota e 5-të ≥ 375 - 305 = 70',
              'Minimumi: 70',
            ],
          },
        ],
      },
    ],
  },

  // alg-004: Funksionet dhe Grafikat
  'alg-004': {
    lessons: [
      {
        title: 'Koncepti i Funksionit',
        theory: 'Funksioni është rregull që çdo elementi të bashkësisë X (bashkësia e përkufizimit) i shoqëron saktësisht një element të bashkësisë Y (kodomeni). Shënohet f: X → Y ose y = f(x).\n\nPër të verifikuar nëse grafiku paraqet funksion, përdorim testin e drejtëzës vertikale: nëse ndonjë drejtëz vertikale e pret grafikun në më shumë se një pikë, ai nuk është grafik funksioni.\n\nFunksionet mund të jenë injektive (çdo y ka të shumtën një x), surjektive (çdo y arrihet), bijektive (të dyja).',
        keyPoints: [
          'Çdo x ka saktësisht një vlerë f(x)',
          'Bashkësia e përkufizimit = X (vlerat hyrëse)',
          'Kodomeni = Y; bashkësia e vlerave = vlerat që merr f',
          'Testi i drejtëzës vertikale tregon nëse grafiku është funksion',
        ],
        examples: [
          {
            example: 'A është y² = x funksion? (për çdo x gjej y)',
            solution: 'Jo! Për x = 4, kemi y = 2 dhe y = -2 - dy vlera për të njëjtin x. Nuk e kalon testin e drejtëzës vertikale.',
          },
          {
            example: 'Gjej f(3) dhe f(-1) për f(x) = 2x² - x + 1',
            solution: 'f(3) = 2(9) - 3 + 1 = 16\nf(-1) = 2(1) - (-1) + 1 = 4',
          },
        ],
        practice: [
          {
            problem: 'Gjej domenin e f(x) = √(x - 4)',
            solution: 'x ≥ 4, bashkësia e përkufizimit [4, +∞)',
            steps: [
              'Shprehja nën rrënjë duhet të jetë ≥ 0',
              'x - 4 ≥ 0',
              'x ≥ 4',
              'Bashkësia e përkufizimit: [4, +∞)',
            ],
          },
        ],
      },
      {
        title: 'Funksionet e Zakonshme',
        theory: 'Funksionet e zakonshme (elementare) përfshijnë: lineare f(x) = mx + b, kuadratike f(x) = ax² + bx + c, polinomiale, racionale, eksponenciale, logaritmike, trigonometrike.\n\nSecili lloj funksioni ka grafik karakteristik, bashkësi përkufizimi, bashkësi vlerash dhe veti të veçanta. Njohja e formave standarde ndihmon të kuptosh shpejt sjelljen e funksionit.\n\nTransformimet: f(x) + k (zhvendos lart/poshtë), f(x + k) (zhvendos majtas/djathtas), -f(x) (pasqyrim ndaj boshtit x), f(-x) (pasqyrim ndaj boshtit y), a·f(x) (zgjatim ose ngjeshje vertikale).',
        keyPoints: [
          'Lineare: grafiku është drejtëz',
          'Kuadratike: grafiku është parabolë (hapet lart nëse a > 0)',
          'Eksponenciale: a^x rritet shpejt (për a > 1)',
          'Logaritmike: funksioni i anasjellë i eksponencialit',
        ],
        examples: [
          {
            example: 'Skiconi parabolën y = (x-2)² + 3',
            solution: 'Kulmi (vertex) është (2, 3)\nBoshti i simetrisë: x = 2\nHapet lart (koef. i x² = 1 > 0)\nNuk pret boshtin x (min = 3 > 0)',
          },
        ],
        practice: [
          {
            problem: 'Gjej kulmin e parabolës y = -x² + 4x - 1',
            solution: 'Kulmi: (2, 3)',
            steps: [
              'Formula: x_kulm = -b/(2a) = -4/(2×(-1)) = 2',
              'y_kulm = -(2²) + 4(2) - 1 = -4 + 8 - 1 = 3',
              'Kulmi: (2, 3)',
              'Parabola hapet poshtë (a = -1 < 0)',
            ],
          },
        ],
      },
      {
        title: 'Kompozimi dhe Inversi',
        theory: 'Kompozimi i funksioneve: (f∘g)(x) = f(g(x)) - zbatohet së pari g, pastaj f. Kompozimi nuk është gjithmonë komutativ: f∘g ≠ g∘f në përgjithësi.\n\nFunksioni invers f⁻¹ "kthen prapa" çdo veprim të f: nëse f(a) = b, atëherë f⁻¹(b) = a. Grafiku i f⁻¹ është pasqyrimi i grafikut të f ndaj drejtëzës y = x.\n\nJo çdo funksion ka invers - vetëm funksionet bijektive (injektive dhe surjektive) kanë invers.',
        keyPoints: [
          '(f∘g)(x) = f(g(x)) - g vepron i pari',
          'f∘g ≠ g∘f (jo komutativ)',
          'f(f⁻¹(x)) = x dhe f⁻¹(f(x)) = x',
          'Gjej inversin: ndërro x me y, pastaj shpreh y',
        ],
        examples: [
          {
            example: 'Nëse f(x) = 2x + 3 dhe g(x) = x², gjej (f∘g)(4)',
            solution: '(f∘g)(4) = f(g(4)) = f(16) = 2(16) + 3 = 35',
          },
          {
            example: 'Gjej f⁻¹(x) nëse f(x) = 3x - 2',
            solution: 'y = 3x - 2\nNdërrojmë x me y: x = 3y - 2\n3y = x + 2\ny = (x + 2)/3\nf⁻¹(x) = (x + 2)/3',
          },
        ],
        practice: [
          {
            problem: 'Gjej (g∘f)(x) nëse f(x) = x + 1 dhe g(x) = x²',
            solution: '(g∘f)(x) = (x+1)²',
            steps: [
              '(g∘f)(x) = g(f(x))',
              '= g(x + 1)',
              '= (x + 1)²',
              '= x² + 2x + 1',
            ],
          },
        ],
      },
    ],
  },

  // alg-005: Ekuacionet Kuadratike
  'alg-005': {
    lessons: [
      {
        title: 'Faktorizimi i Trinomeve',
        theory: 'Trinomi ax² + bx + c faktorizohet si prodhim i dy binomeve lineare. Nëse a = 1: x² + bx + c = (x + p)(x + q) ku p + q = b dhe p × q = c.\n\nPër a ≠ 1, metoda e grupimit (metoda ac): shumëzo a × c, gjej dy numra me shumë b dhe prodhim ac, pastaj grupo.\n\nFaktorizimi i shprehjeve algjebrike është aftësi themelore për zgjidhjen e ekuacioneve, thjeshtimin e thyesave dhe shumë probleme të tjera.',
        keyPoints: [
          'x² + bx + c = (x+p)(x+q) ku p+q=b, pq=c',
          'Diferenca e katrorëve: a² - b² = (a+b)(a-b)',
          'Katrori i shumës: (a+b)² = a² + 2ab + b²',
          'Katrori i diferencës: (a-b)² = a² - 2ab + b²',
        ],
        examples: [
          {
            example: 'Faktorizoje: x² + 7x + 12',
            solution: 'Kërko p, q: p + q = 7 dhe p × q = 12\nProvo: 3 + 4 = 7 ✓ dhe 3 × 4 = 12 ✓\nZgjidhja: (x + 3)(x + 4)',
          },
          {
            example: 'Faktorizoje: x² - 9',
            solution: 'Forma: a² - b² = (a+b)(a-b)\nx² - 9 = x² - 3² = (x + 3)(x - 3)',
          },
        ],
        practice: [
          {
            problem: 'Faktorizoje: x² - 5x + 6',
            solution: '(x - 2)(x - 3)',
            steps: [
              'Kërko p, q: p + q = -5 dhe p × q = 6',
              'Provo: -2 + (-3) = -5 ✓ dhe (-2)(-3) = 6 ✓',
              'x² - 5x + 6 = (x - 2)(x - 3)',
            ],
          },
        ],
      },
      {
        title: 'Formula Kuadratike dhe Diskriminanti',
        theory: 'Formula kuadratike x = [-b ± √(b² - 4ac)] / 2a zgjidh çdo ekuacion kuadratik ax² + bx + c = 0.\n\nDiskriminanti D = b² - 4ac: D > 0 → 2 rrënjë reale të ndryshme, D = 0 → 1 rrënjë reale dyfishe, D < 0 → asnjë rrënjë reale (2 rrënjë komplekse).\n\nFormulat e Vietës: nëse x₁, x₂ janë rrënjët, atëherë x₁ + x₂ = -b/a dhe x₁ × x₂ = c/a.',
        keyPoints: [
          'Formula: x = [-b ± √(b²-4ac)] / 2a',
          'D > 0: dy rrënjë reale',
          'D = 0: një rrënjë e dyfishuar',
          'D < 0: pa rrënjë reale',
        ],
        examples: [
          {
            example: 'Zgjidh: x² + 2x - 8 = 0',
            solution: 'D = 4 + 32 = 36\nx = (-2 ± 6)/2\nx₁ = 2, x₂ = -4',
          },
          {
            example: 'Cili ekuacion ka rrënjë x₁ = 3 dhe x₂ = -1?',
            solution: 'Shuma: 3 + (-1) = 2 → -b/a = 2 → b = -2 (nëse a=1)\nProdhim: 3×(-1) = -3 → c/a = -3 → c = -3\nEkuacioni: x² - 2x - 3 = 0',
          },
        ],
        practice: [
          {
            problem: 'Zgjidh me formulën kuadratike: 2x² - 7x + 3 = 0',
            solution: 'x = 3 ose x = 0,5',
            steps: [
              'a=2, b=-7, c=3',
              'D = 49 - 24 = 25',
              'x = (7 ± 5)/4',
              'x₁ = 12/4 = 3',
              'x₂ = 2/4 = 0,5',
            ],
          },
        ],
      },
      {
        title: 'Plotësimi i Katrorit',
        theory: 'Plotësimi i katrorit e shndërron trinomin ax² + bx + c në formën a(x + h)² + k. Kjo metodë ndihmon për të gjetur kulmin e parabolës dhe për të nxjerrë formulën kuadratike.\n\nKulmi i parabolës ax² + bx + c është te pika (h, k) = (-b/2a, c - b²/4a).\n\nNga forma standarde te forma e kulmit: y = a(x-h)² + k tregon drejtpërdrejt kulmin (h, k).',
        keyPoints: [
          'ax² + bx = a(x + b/2a)² - b²/4a',
          'Kulmi (vertex): x = -b/(2a)',
          'Formë kulmi: y = a(x-h)² + k',
          'Metoda: pjesëto me a, shto dhe zbrit (b/2a)²',
        ],
        examples: [
          {
            example: 'Shkruaje në formën e kulmit: y = x² + 6x + 5',
            solution: 'y = (x² + 6x + 9) - 9 + 5\n= (x + 3)² - 4\nKulmi: (-3, -4)',
          },
        ],
        practice: [
          {
            problem: 'Gjej kulmin e parabolës y = x² - 4x + 7 duke plotësuar katrorin.',
            solution: 'Kulmi (2, 3)',
            steps: [
              'y = x² - 4x + 7',
              'y = (x² - 4x + 4) - 4 + 7',
              'y = (x - 2)² + 3',
              'Kulmi: (2, 3)',
            ],
          },
        ],
      },
    ],
  },

  // alg-006: Polinomet dhe Faktorizimi
  'alg-006': {
    lessons: [
      {
        title: 'Hyrje në Polinome',
        theory: 'Polinomi është shprehje e formës aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀. Shkalla e polinomit është fuqia më e madhe e variablit. Koeficientët janë numrat para fuqive.\n\nShumëzimi i polinomeve: çdo term i polinomit të parë shumëzohet me çdo term të të dytit. Metoda FOIL (First, Outer, Inner, Last) për binome.\n\nPjesëtimi i polinomeve: i ngjashëm me pjesëtimin e gjatë të numrave. P(x) = Q(x)·D(x) + R(x).',
        keyPoints: [
          'Shkalla e polinomit = fuqia më e madhe e x',
          'Polinomi i shkallës 2 = trinom katror',
          'FOIL: (a+b)(c+d) = ac + ad + bc + bd',
          'Teorema e mbetjes: P(a) = R kur pjesëtojmë me (x-a)',
        ],
        examples: [
          {
            example: 'Shumëzo: (2x + 3)(x - 4)',
            solution: '= 2x(x) + 2x(-4) + 3(x) + 3(-4)\n= 2x² - 8x + 3x - 12\n= 2x² - 5x - 12',
          },
          {
            example: 'Gjej P(2) nëse P(x) = x³ - 3x + 1',
            solution: 'P(2) = 8 - 6 + 1 = 3',
          },
        ],
        practice: [
          {
            problem: 'Zbërthe: (3x - 2)²',
            solution: '9x² - 12x + 4',
            steps: [
              '(3x - 2)² = (3x)² - 2(3x)(2) + 2²',
              '= 9x² - 12x + 4',
            ],
          },
        ],
      },
      {
        title: 'Rrënjët e Polinomeve',
        theory: 'Rrënja e polinomit P(x) është vlera a për të cilën P(a) = 0. Teorema themelore e algjebrës thotë se çdo polinom i shkallës n ka saktësisht n rrënjë (duke numëruar edhe ato komplekse dhe të shumëfishta).\n\nTeorema e faktorit: (x - a) është faktor i P(x) nëse dhe vetëm nëse P(a) = 0.\n\nPër rrënjë racionale: nëse p/q (e thjeshtuar) është rrënjë e aₙxⁿ + ... + a₀, atëherë p e pjesëton a₀ dhe q e pjesëton aₙ.',
        keyPoints: [
          'Rrënja a: P(a) = 0',
          'Faktor (x-a) ↔ rrënja x = a',
          'Polinomi i shkallës n ka n rrënjë (duke numëruar shumëfishësinë)',
          'Rrënjë racionale p/q: p|a₀ dhe q|aₙ',
        ],
        examples: [
          {
            example: 'Verifikoje se x = 2 është rrënjë e x³ - 4x² + x + 6',
            solution: 'P(2) = 8 - 16 + 2 + 6 = 0 ✓\nPra (x - 2) është faktor',
          },
        ],
        practice: [
          {
            problem: 'Gjej rrënjët e P(x) = x³ - 6x² + 11x - 6',
            solution: 'x = 1, x = 2, x = 3',
            steps: [
              'Provo x=1: 1-6+11-6=0 ✓ → (x-1) është faktor',
              'Ndaj: P(x) = (x-1)(x²-5x+6)',
              'Faktorizoje: x²-5x+6 = (x-2)(x-3)',
              'Rrënjët: x=1, x=2, x=3',
            ],
          },
        ],
      },
      {
        title: 'Thyesat Racionale',
        theory: 'Thyesa racionale është raporti i dy polinomeve f(x) = P(x)/Q(x). Bashkësia e përkufizimit: të gjitha vlerat x ku Q(x) ≠ 0. Pikat ku Q(x) = 0 janë asimptota vertikale ose vrima (holes).\n\nAsimptota horizontale: krahasoni shkallën e P dhe Q. Nëse grad(P) < grad(Q): y = 0. Nëse grad(P) = grad(Q): y = raporti i koeficientëve kryesorë.\n\nThjeshtimi: nëse P dhe Q kanë faktorë të përbashkët, i thjeshtojmë, dhe në grafik krijohet një "vrimë".',
        keyPoints: [
          'Bashkësia e përkufizimit: Q(x) ≠ 0',
          'Asimptota vertikale: Q(x) = 0 (pas thjeshtimit)',
          'Asimptota horizontale: varet nga shkalla relative',
          'Thjeshtimi krijon vrima në grafik',
        ],
        examples: [
          {
            example: 'Gjej bashkësinë e përkufizimit të f(x) = (x+1)/(x²-4)',
            solution: 'x²-4 = 0 → x = ±2\nBashkësia e përkufizimit: ℝ \\ {-2, 2}\nAsimptota vertikale: x = -2 dhe x = 2',
          },
        ],
        practice: [
          {
            problem: 'Thjeshtoje dhe gjej bashkësinë e përkufizimit: f(x) = (x²-1)/(x-1)',
            solution: 'f(x) = x+1 me vrimë te x=1, bashkësia e përkufizimit ℝ\\{1}',
            steps: [
              'Faktorizoje: x²-1 = (x-1)(x+1)',
              'f(x) = (x-1)(x+1)/(x-1) = x+1 (për x≠1)',
              'Bashkësia e përkufizimit: ℝ\\{1} (vrimë te x=1)',
            ],
          },
        ],
      },
    ],
  },

  // alg-007: Shprehjet Racionale (të avancuara)
  'alg-007': {
    lessons: [
      {
        title: 'Operacionet me Shprehje Racionale',
        theory: 'Shprehja racionale R(x) = P(x)/Q(x) ku P, Q janë polinome. Veprimet me to janë si me thyesat e zakonshme, por kërkojnë faktorizimin e polinomeve.\n\nMbledhja/Zbritja: gjej SHVP të emëruesve, zgjero thyesat, pastaj mblidh numëruesit.\nShumëzimi: shumëzo numëruesit me njëri-tjetrin dhe emëruesit me njëri-tjetrin, pastaj thjeshto.\nPjesëtimi: shumëzo me të anasjelltën.',
        keyPoints: [
          'SHVP i emëruesve polinomialë kërkon faktorizim',
          'Shumëzim: (P/Q)·(R/S) = PR/QS',
          'Pjesëtim: (P/Q)÷(R/S) = (P/Q)·(S/R)',
          'Gjithmonë thjeshtoje rezultatin',
        ],
        examples: [
          {
            example: 'Mblidh: 1/(x-2) + 3/(x+1)',
            solution: 'SHVP = (x-2)(x+1)\n= (x+1)/[(x-2)(x+1)] + 3(x-2)/[(x-2)(x+1)]\n= (x+1+3x-6)/[(x-2)(x+1)]\n= (4x-5)/[(x-2)(x+1)]',
          },
        ],
        practice: [
          {
            problem: 'Thjeshtoje: (x²-4)/(x²-x-6)',
            solution: '(x-2)/(x-3)',
            steps: [
              'Numëruesi: x²-4 = (x-2)(x+2)',
              'Emëruesi: x²-x-6 = (x-3)(x+2)',
              'Thjeshtojmë (x+2): (x-2)(x+2)/[(x-3)(x+2)] = (x-2)/(x-3) (për x ≠ -2)',
            ],
          },
        ],
      },
      {
        title: 'Ekuacionet Racionale',
        theory: 'Ekuacioni racional ka shprehje racionale. Mënyra: shumëzo të dyja anët me SHVP të emëruesve. Kjo i heq emëruesit, por mund të sjellë zgjidhje të rreme.\n\nGjithmonë kontrollo: zëvendëso zgjidhjet dhe verifiko se asnjë emërues nuk bëhet zero. Zgjidhjet ku emëruesi = 0 hidhen.',
        keyPoints: [
          'Shumëzo me SHVP për t’i hequr emëruesit',
          'Prova është e detyrueshme: hidh zgjidhjet e rreme',
          'Zgjidhje e rreme: bën emëruesin = 0',
        ],
        examples: [
          {
            example: 'Zgjidh: 2/x + 1/3 = 5/6',
            solution: 'Shumëzo me 6x: 12 + 2x = 5x\n12 = 3x\nx = 4\nKontrollo: 2/4 + 1/3 = 3/6 + 2/6 = 5/6 ✓',
          },
        ],
        practice: [
          {
            problem: 'Zgjidh: 3/(x-1) + 2 = 5/(x-1)',
            solution: 'x = 2',
            steps: [
              'Shumëzo me (x-1): 3 + 2(x-1) = 5',
              '3 + 2x - 2 = 5',
              '2x + 1 = 5',
              '2x = 4, x = 2',
              'Kontrollo: 3/1 + 2 = 5 = 5/1 ✓',
            ],
          },
        ],
      },
      {
        title: 'Funksionet Racionale dhe Asimptota',
        theory: 'Funksioni racional f(x) = P(x)/Q(x) ka sjellje karakteristike afër asimptotave. Ndërtimi i grafikut kërkon: 1) gjej bashkësinë e përkufizimit, 2) gjej rrënjët (numëruesi = 0), 3) Gjej asimptota, 4) Kontrollo vlera specifike.\n\nAsimptota e pjerrët: kur shkalla e P është saktësisht 1 më e madhe se e Q, ekziston një asimptotë e pjerrët, që gjendet me pjesëtimin e polinomeve.',
        keyPoints: [
          'Asimptota vertikale: Q(x) = 0 (pas thjeshtimit)',
          'Asimptota horizontale: limiti kur x→±∞',
          'Asimptota e pjerrët: kur grad(P) = grad(Q) + 1',
          'Rrënjët e f: numëruesi = 0',
        ],
        examples: [
          {
            example: 'Gjej asimptotat e f(x) = (2x² + 1)/(x² - 4)',
            solution: 'AV: x = ±2\nAH: y = 2 (raporti koeficientëve 2/1)\nRrënjë: 2x²+1=0 → pa rrënjë reale',
          },
        ],
        practice: [
          {
            problem: 'Gjej të gjitha asimptotat e f(x) = x/(x-3)',
            solution: 'AV: x=3, AH: y=1',
            steps: [
              'Asimptota vertikale: x-3=0 → x=3',
              'Asimptota horizontale: shkalla 1/1 → y = 1/1 = 1',
            ],
          },
        ],
      },
    ],
  },

  // alg-008: Eksponentët dhe Logaritmet
  'alg-008': {
    lessons: [
      {
        title: 'Ligjet e Eksponentëve',
        theory: 'Eksponentët janë operacioni i fuqisë: aⁿ = a × a × a ... × a (n herë). Ligjet themelore:\n- aᵐ × aⁿ = aᵐ⁺ⁿ (shumëzim: mblidhen eksponentët)\n- aᵐ / aⁿ = aᵐ⁻ⁿ (pjesëtim: zbriten eksponentët)\n- (aᵐ)ⁿ = aᵐⁿ (fuqi e fuqisë: shumëzohen eksponentët)\n- a⁰ = 1 (për çdo bazë jo zero)\n- a⁻ⁿ = 1/aⁿ (eksponent negativ = e anasjellta)',
        keyPoints: [
          'aᵐ · aⁿ = aᵐ⁺ⁿ',
          'aᵐ / aⁿ = aᵐ⁻ⁿ',
          '(aᵐ)ⁿ = aᵐⁿ',
          'a⁻ⁿ = 1/aⁿ dhe a^(1/n) = ⁿ√a',
        ],
        examples: [
          {
            example: 'Thjeshtoje: (2³ × 2⁵) / 2⁴',
            solution: '= 2⁸ / 2⁴ = 2⁴ = 16',
          },
          {
            example: 'Thjeshtoje: (x³y²)⁴ / x⁸',
            solution: '= x¹²y⁸ / x⁸ = x⁴y⁸',
          },
        ],
        practice: [
          {
            problem: 'Llogarit: 8^(2/3)',
            solution: '4',
            steps: [
              '8^(2/3) = (8^(1/3))² = (∛8)²',
              '∛8 = 2 (sepse 2³=8)',
              '2² = 4',
            ],
          },
        ],
      },
      {
        title: 'Funksioni Eksponencial dhe Logaritmi',
        theory: 'Funksioni eksponencial: f(x) = aˣ ku a > 0, a ≠ 1. Grafiku kalon nëpër (0, 1) dhe është gjithmonë mbi boshtin x. Nëse a > 1, funksioni rritet; nëse 0 < a < 1, zvogëlohet.\n\nLogaritmi log_a(x) = n do të thotë "në cilën fuqi duhet ngritur a për të marrë x": aⁿ = x. Logaritmi është funksioni i anasjellë i eksponencialit.\n\nLogaritmi natyror: ln(x) = log_e(x), ku e ≈ 2,718. Logaritmi dhjetor: log(x) = log₁₀(x).',
        keyPoints: [
          'log_a(aˣ) = x dhe a^(log_a x) = x (inversi)',
          'log(xy) = log x + log y',
          'log(x/y) = log x - log y',
          'log(xⁿ) = n·log x',
        ],
        examples: [
          {
            example: 'Llogarit log₂(32)',
            solution: 'log₂(32) = log₂(2⁵) = 5',
          },
          {
            example: 'Zgjidh: 3ˣ = 81',
            solution: '3ˣ = 3⁴\nx = 4',
          },
        ],
        practice: [
          {
            problem: 'Zgjidh: log₃(x) + log₃(x-2) = 1',
            solution: 'x = 3',
            steps: [
              'log₃(x(x-2)) = 1',
              'x(x-2) = 3¹ = 3',
              'x² - 2x - 3 = 0',
              '(x-3)(x+1) = 0',
              'x = 3 ose x = -1 (hedhim -1, sepse logaritmi kërkon x > 0)',
            ],
          },
        ],
      },
      {
        title: 'Ekuacionet Eksponenciale dhe Logaritmike',
        theory: 'Ekuacionet eksponenciale: nëse bazat janë të barabarta, barazo eksponentët. Nëse jo, logaritmo të dyja anët dhe zbato ligjet e logaritmeve.\n\nEkuacionet logaritmike: bashko logaritmet në një, pastaj kalo në formën eksponenciale. Kujdes: kontrollo se argumentet e logaritmeve janë pozitive.',
        keyPoints: [
          'aˣ = aʸ ↔ x = y (baza të njëjta)',
          'ln(aˣ) = x·ln(a) (logaritmoje të dyja anët)',
          'Ekuacionet logaritmike: kalo në formën eksponenciale',
          'Kujdes: argumenti i logaritmit duhet të jetë > 0',
        ],
        examples: [
          {
            example: 'Zgjidh: 2ˣ = 5',
            solution: 'x·ln2 = ln5\nx = ln5/ln2 ≈ 2,322',
          },
          {
            example: 'Zgjidh: ln(x) = 3',
            solution: 'x = e³ ≈ 20,09',
          },
        ],
        practice: [
          {
            problem: 'Zgjidh: 4ˣ⁺¹ = 64',
            solution: 'x = 2',
            steps: [
              '64 = 4³',
              '4ˣ⁺¹ = 4³',
              'x + 1 = 3',
              'x = 2',
            ],
          },
        ],
      },
    ],
  },

  // alg-009: Numrat Kompleks
  'alg-009': {
    lessons: [
      {
        title: 'Njësia Imagjinare dhe Forma Algjebrike',
        theory: 'Njësia imagjinare i = √(-1), ku i² = -1. Numrat kompleksë kanë formën a + bi, ku a është pjesa reale dhe b është pjesa imagjinare.\n\nNumrat realë janë rast i veçantë i numrave kompleksë (b = 0). Numrat imagjinarë të pastër kanë a = 0.\n\nVeprimet: mbledhja (mblidhen veçmas pjesët reale dhe imagjinare), zbritja, shumëzimi (si te binomet, me i² = -1), pjesëtimi (shumëzo me të konjuguarin e emëruesit).',
        keyPoints: [
          'i = √(-1), i² = -1, i³ = -i, i⁴ = 1',
          'Forma: z = a + bi',
          'I konjuguari i a+bi është a-bi',
          '|z| = √(a² + b²) (moduli)',
        ],
        examples: [
          {
            example: 'Llogarit (3 + 2i)(1 - 4i)',
            solution: '= 3(1) + 3(-4i) + 2i(1) + 2i(-4i)\n= 3 - 12i + 2i - 8i²\n= 3 - 10i - 8(-1)\n= 11 - 10i',
          },
          {
            example: 'Zgjidh: x² + 9 = 0',
            solution: 'x² = -9\nx = ±√(-9) = ±3i',
          },
        ],
        practice: [
          {
            problem: 'Llogarit: (2 + i)/(1 - i)',
            solution: '= (1 + 3i)/2 = 0,5 + 1,5i',
            steps: [
              'Shumëzo me të konjuguarin: (2+i)(1+i)/[(1-i)(1+i)]',
              '= (2+2i+i+i²)/(1+1)',
              '= (2+3i-1)/2',
              '= (1+3i)/2',
            ],
          },
        ],
      },
      {
        title: 'Forma Trigonometrike dhe Teorema e De Moivre',
        theory: 'Numri kompleks z = a + bi mund të shprehet si z = r(cos θ + i sin θ) ose z = re^(iθ), ku r = |z| = √(a²+b²) është moduli dhe θ = arg(z) = arctan(b/a) është argumenti.\n\nTeorema e De Moivre: [r(cos θ + i sin θ)]ⁿ = rⁿ(cos nθ + i sin nθ)\n\nKjo teoremë lejon llogaritjen e fuqive dhe të rrënjëve të numrave kompleksë.',
        keyPoints: [
          'r = √(a²+b²) (moduli/amplitudë)',
          'θ = arctan(b/a) (argumenti/faza)',
          'De Moivre: zⁿ = rⁿ(cos nθ + i sin nθ)',
          'n rrënjët e n-ta: ⁿ√r · cis((θ+2kπ)/n)',
        ],
        examples: [
          {
            example: 'Shpreh z = 1 + i në formë trigonometrike',
            solution: 'r = √(1+1) = √2\nθ = arctan(1/1) = π/4\nz = √2(cos(π/4) + i sin(π/4))',
          },
        ],
        practice: [
          {
            problem: 'Llogarit (1+i)⁴ duke përdorur De Moivre',
            solution: '-4',
            steps: [
              'r = √2, θ = π/4',
              '(√2)⁴ = 4',
              '4(cos 4π/4 + i sin 4π/4) = 4(cos π + i sin π)',
              '= 4(-1 + 0) = -4',
            ],
          },
        ],
      },
    ],
  },

  // alg-010: Seritë dhe Sekuencat
  'alg-010': {
    lessons: [
      {
        title: 'Vargjet Aritmetike',
        theory: 'Vargu aritmetik ka diferencë konstante d ndërmjet kufizave të njëpasnjëshme: aₙ = a₁ + (n-1)d. Kufiza e parë a₁ dhe diferenca d e përcaktojnë plotësisht.\n\nShuma e n kufizave: Sₙ = n(a₁ + aₙ)/2 = n[2a₁ + (n-1)d]/2\n\nZbatime: llogaritja e kostove, planet e kursimit dhe çdo rritje lineare.',
        keyPoints: [
          'aₙ = a₁ + (n-1)d',
          'Diferenca: d = aₙ₊₁ - aₙ',
          'Shuma: Sₙ = n(a₁+aₙ)/2',
          'Kufiza e mesme = mesatarja e kufizave skajore',
        ],
        examples: [
          {
            example: 'Gjej kufizën e 10-të të vargut 3, 7, 11, 15...',
            solution: 'd = 4, a₁ = 3\na₁₀ = 3 + 9×4 = 39',
          },
          {
            example: 'Gjej shumën e 20 kufizave të para: 5, 8, 11...',
            solution: 'd=3, a₁=5, a₂₀=5+19×3=62\nS₂₀ = 20(5+62)/2 = 670',
          },
        ],
        practice: [
          {
            problem: 'Gjej shumën e numrave çift nga 2 deri në 100.',
            solution: 'S = 2550',
            steps: [
              'Vargu: 2, 4, 6, ..., 100',
              'a₁=2, d=2, n=50',
              'S₅₀ = 50(2+100)/2 = 50×51 = 2550',
            ],
          },
        ],
      },
      {
        title: 'Vargjet Gjeometrike',
        theory: 'Vargu gjeometrik ka herës konstant q ndërmjet kufizave: aₙ = a₁ × qⁿ⁻¹. Kufiza e parë a₁ dhe herësi q e përcaktojnë.\n\nShuma e n kufizave: Sₙ = a₁(qⁿ - 1)/(q - 1) nëse q ≠ 1\nShuma e serisë së pafundme (|q| < 1): S∞ = a₁/(1 - q)\n\nAplikimet: rritja eksponenciale (popullatë, kapital), zbërthimi radioaktiv, interesi i përbërë.',
        keyPoints: [
          'aₙ = a₁ × qⁿ⁻¹',
          'Herësi: q = aₙ₊₁ / aₙ',
          'Sₙ = a₁(qⁿ-1)/(q-1)',
          'S∞ = a₁/(1-q) vetëm kur |q| < 1',
        ],
        examples: [
          {
            example: 'Gjej kufizën e 6-të: 2, 6, 18, 54...',
            solution: 'q = 3, a₆ = 2×3⁵ = 486',
          },
          {
            example: 'Sa bëhet kapitali 1000€ me interes 5% në vit pas 10 vjetësh?',
            solution: 'A = 1000 × 1,05¹⁰ ≈ 1628,89€',
          },
        ],
        practice: [
          {
            problem: 'Gjej shumën e serisë së pafundme: 1 + 1/2 + 1/4 + 1/8 + ...',
            solution: 'S∞ = 2',
            steps: [
              'a₁ = 1, q = 1/2',
              '|q| = 0,5 < 1 → seri konvergjente',
              'S∞ = 1/(1-1/2) = 1/(1/2) = 2',
            ],
          },
        ],
      },
    ],
  },
};
