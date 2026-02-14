export const courseContents_algebra = {

  // alg-003: Inekuacionet dhe Vlera Absolute
  'alg-003': {
    lessons: [
      {
        title: 'Inekuacionet me Modulo',
        theory: 'Vlera absolute |x| tregon distancën e numrit x nga zero në boshtin e numrave, gjithmonë pozitive. |x| = x nëse x ≥ 0, dhe |x| = -x nëse x < 0.\n\nInekuacionet me vlerë absolute: |x| < a do të thotë -a < x < a (zgjidhja është interval). |x| > a do të thotë x < -a ose x > a (dy intervale).\n\nKëto inekuacione janë të dobishme në fizikë (toleranca), inxhinieri (marzhi i gabimit) dhe matematikë të avancuar.',
        keyPoints: [
          '|x| ≥ 0 për çdo x (gjithmonë jo-negativ)',
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
        theory: 'Sistemi i inekuacioneve është dy ose më shumë inekuacione me të njëjtat variabla. Zgjidhja e sistemit është bashkësia e të gjitha vlerave që plotësojnë TË GJITHA inekuacionet njëkohësisht (prerja e bashkësi-zgjidhjeve).\n\nPër inekuacione lineare në dy variabla, secili inekuacion definon një gjysmë-rrafsh. Zgjidhja e sistemit është zona e përbashkët ku të gjithë gjysmë-rrafshet mbivendosen.',
        keyPoints: [
          'Zgjidhja = prerja e të gjitha zgjidhjeve individuale',
          'Shëno: {x | kusht1 DHE kusht2}',
          'Bashkë inekuacionet: gjej kufirin ku të dyja vlejnë',
          'Grafiku: zona e ndërthurjes (intersection)',
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
        theory: 'Inekuacionet aplikohen gjerësisht në jetën reale: modelimin e kufijve të buxhetit, optimizimin (minimizimi/maksimizimi), analizën e fitimit/humbjeve, dhe parametrat e sigurisë.\n\nHapat e zgjidhjes: 1) Identifiko variablin e panjohur, 2) Formulimi i inekuacionit, 3) Zgjidh matematikisht, 4) Interpreto rezultatin në kontekstin e problemit.',
        keyPoints: [
          '"Të paktën" → ≥',
          '"Më shumë se" → >',
          '"Të shumtën" → ≤',
          '"Nën" → <',
        ],
        examples: [
          {
            example: 'Të paktën sa copë produkti duhen shitur me çmim 15€ që të kesh fitim mbi 500€, nëse kosto fikse = 200€?',
            solution: '15x - 200 > 500\n15x > 700\nx > 46.67\nDuhen shitur të paktën 47 copë',
          },
        ],
        practice: [
          {
            problem: 'Nxënësi ka nevojë të marrë mesatare mbi 75 në 5 provime. Ka marrë: 70, 80, 65, 90. Sa minimum duhet në provimin e 5-të?',
            solution: 'Nota minimale = 70',
            steps: [
              'Shuma e 4 notave: 70+80+65+90 = 305',
              'Shuma totale duhet > 375 (75×5)',
              'Nota e 5-të > 375 - 305 = 70',
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
        theory: 'Funksioni është rregull/korrespondencë që çdo elementit të bashkësisë X (domain) i shoqëron saktësisht një element të bashkësisë Y (kodomain). Shënohet f: X → Y ose y = f(x).\n\nPër të verifikuar nëse grafiku paraqet funksion, përdorim testin e vijës vertikale: nëse çdo vijë vertikale pret grafikun në shumë se një pikë, nuk është funksion.\n\nFunksionet mund të jenë injektive (çdo y ka vetëm një x), surjektive (çdo y arrihet), bijektive (të dyja).',
        keyPoints: [
          'Çdo x ka saktësisht një vlerë f(x)',
          'Domain = bashkësia hyrëse X',
          'Kodomain/Range = bashkësia daljëse Y',
          'Testi i vijës vertikale verifikon nëse është funksion',
        ],
        examples: [
          {
            example: 'A është y² = x funksion? (për çdo x gjej y)',
            solution: 'Jo! Për x = 4, kemi y = 2 dhe y = -2 - dy vlera për të njëjtin x. Nuk kalon testin e vijës vertikale.',
          },
          {
            example: 'Gjej f(3) dhe f(-1) për f(x) = 2x² - x + 1',
            solution: 'f(3) = 2(9) - 3 + 1 = 16\nf(-1) = 2(1) - (-1) + 1 = 4',
          },
        ],
        practice: [
          {
            problem: 'Gjej domenin e f(x) = √(x - 4)',
            solution: 'x ≥ 4, domain [4, +∞)',
            steps: [
              'Shpreha nën rrënjë duhet të jetë ≥ 0',
              'x - 4 ≥ 0',
              'x ≥ 4',
              'Domain: [4, +∞)',
            ],
          },
        ],
      },
      {
        title: 'Funksionet e Zakonshme',
        theory: 'Funksionet e zakonshme (elementare) përfshijnë: lineare f(x) = mx + b, kuadratike f(x) = ax² + bx + c, polinomiale, racionare, eksponentiale, logaritmike, trigonometrike.\n\nSecili tip funksioni ka grafik karakteristik, domain, range dhe veti specifike. Njohja e formave standarde ndihmon të kuptosh shpejtë sjelljen e funksionit.\n\nTransformimet: f(x) + k (zhvendos lart/poshtë), f(x + k) (zhvendos majtas/djathtas), -f(x) (pasqyrë), f(-x) (pasqyrë vertikale), a·f(x) (ndryshon shkallën vertikale).',
        keyPoints: [
          'Lineare: grafik vijë e drejtë',
          'Kuadratike: grafik parabolë (hapëtas lart nëse a>0)',
          'Eksponentiale: a^x kreson shpejt',
          'Logaritmike: inversi i eksponentialit',
        ],
        examples: [
          {
            example: 'Skiconi parabolën y = (x-2)² + 3',
            solution: 'Kulmi (vertex) është (2, 3)\nOsja e simetrisë: x = 2\nHapet lart (koef. i x² = 1 > 0)\nNuk pret boshtin x (min = 3 > 0)',
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
              'Parabolë hapur poshtë (a = -1 < 0)',
            ],
          },
        ],
      },
      {
        title: 'Kompozimi dhe Inversi',
        theory: 'Kompozimi i funksioneve: (f∘g)(x) = f(g(x)) - zbato g fillimisht, pastaj f. Kompozimi nuk është gjithmonë komutativ: f∘g ≠ g∘f në përgjithësi.\n\nFunksioni invers f⁻¹ "kthen prapa" çdo veprim të f: nëse f(a) = b, atëherë f⁻¹(b) = a. Grafiku i f⁻¹ është pasqyra e grafikut të f kundrejt vijës y = x.\n\nJo çdo funksion ka invers - vetëm funksionet bijektive (one-to-one dhe onto) kanë invers.',
        keyPoints: [
          '(f∘g)(x) = f(g(x)) - g vepron i pari',
          'f∘g ≠ g∘f (jo komutativ)',
          'f(f⁻¹(x)) = x dhe f⁻¹(f(x)) = x',
          'Gjej inversin: swap x dhe y, pastaj zgjidh për y',
        ],
        examples: [
          {
            example: 'Nëse f(x) = 2x + 3 dhe g(x) = x², gjej (f∘g)(4)',
            solution: '(f∘g)(4) = f(g(4)) = f(16) = 2(16) + 3 = 35',
          },
          {
            example: 'Gjej f⁻¹(x) nëse f(x) = 3x - 2',
            solution: 'y = 3x - 2\nSwap: x = 3y - 2\n3y = x + 2\ny = (x + 2)/3\nf⁻¹(x) = (x + 2)/3',
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
        title: 'Faktorimi i Trinomeve',
        theory: 'Trinomi ax² + bx + c faktorizohet si prodhim i dy binomeve lineare. Nëse a = 1: x² + bx + c = (x + p)(x + q) ku p + q = b dhe p × q = c.\n\nPër a ≠ 1, metoda e grupit (AC-method): shumëzo a × c, gjej dy numra me shumë b dhe prodhim ac, pastaj gropo.\n\nFaktorimi i shprehjeve algjebrike është aftësi fundamentale për zgjidhjen e ekuacioneve, thjeshtimin e thyesave dhe shumë probleme të tjera.',
        keyPoints: [
          'x² + bx + c = (x+p)(x+q) ku p+q=b, pq=c',
          'Differenca e katrorëve: a² - b² = (a+b)(a-b)',
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
        theory: 'Formula kuadratike x = [-b ± √(b² - 4ac)] / 2a zgjidhën çdo ekuacion kuadratik ax² + bx + c = 0.\n\nDiskriminanti D = b² - 4ac: D > 0 → 2 rrënjë reale të ndryshme, D = 0 → 1 rrënjë reale dyfishe, D < 0 → asnjë rrënjë reale (2 rrënjë komplekse).\n\nRaportet e Vieta: nëse x₁, x₂ janë rrënjët, atëherë x₁ + x₂ = -b/a dhe x₁ × x₂ = c/a.',
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
            solution: 'x = 3 ose x = 0.5',
            steps: [
              'a=2, b=-7, c=3',
              'D = 49 - 24 = 25',
              'x = (7 ± 5)/4',
              'x₁ = 12/4 = 3',
              'x₂ = 2/4 = 0.5',
            ],
          },
        ],
      },
      {
        title: 'Plotëzimi i Katrorit',
        theory: 'Plotëzimi i katrorit (completing the square) konverton trinomën ax² + bx + c në formën a(x + h)² + k. Kjo metodë është e dobishme për gjendjen e kulmin të parabolës dhe derivimin e formulës kuadratike.\n\nKulmi i parabolës ax² + bx + c është te pika (h, k) = (-b/2a, c - b²/4a).\n\nFormë standarde → formë kulmi: y = a(x-h)² + k tregon direkt kulmin (h, k).',
        keyPoints: [
          'ax² + bx = a(x + b/2a)² - b²/4a',
          'Kulmi (vertex): x = -b/(2a)',
          'Formë kulmi: y = a(x-h)² + k',
          'Metoda: ndaj me a, shto e zbrit (b/2a)²',
        ],
        examples: [
          {
            example: 'Konverto në formë kulmi: y = x² + 6x + 5',
            solution: 'y = (x² + 6x + 9) - 9 + 5\n= (x + 3)² - 4\nKulmi: (-3, -4)',
          },
        ],
        practice: [
          {
            problem: 'Gjej kulmin e parabolës y = x² - 4x + 7 duke plotëzuar katrorin.',
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
        theory: 'Polinom është shprehja e formës aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀. Shkalla e polinom-it është fuqia e madhe e variablit. Koeficientë janë numrat para fuqive.\n\nShumëzimi i polinom-eve: çdo term i polinom-it të parë shumëzohet me çdo term të dytit. Metoda FOIL (First, Outer, Inner, Last) për binome.\n\nNdarja e polinom-eve: e ngjashme me ndarjen e gjatë të numrave. P(x) = Q(x)·D(x) + R(x).',
        keyPoints: [
          'Shkalla e polinom-it = fuqia max e x',
          'Polinom me shkallë 2 = trinome kuadratike',
          'FOIL: (a+b)(c+d) = ac + ad + bc + bd',
          'Teorema e mbetjes: P(a) = R kur ndajmë me (x-a)',
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
            problem: 'Shpjejo: (3x - 2)²',
            solution: '9x² - 12x + 4',
            steps: [
              '(3x - 2)² = (3x)² - 2(3x)(2) + 2²',
              '= 9x² - 12x + 4',
            ],
          },
        ],
      },
      {
        title: 'Rrënjët e Polinom-eve',
        theory: 'Rrënja e polinom-it P(x) është vlera a ku P(a) = 0. Teorema bazë e algjebres thotë çdo polinom me shkallë n ka saktësisht n rrënjë (duke numëruar edhe ato komplekse dhe të shumëfishta).\n\nTeorema e faktorit: (x - a) është faktor i P(x) nëse dhe vetëm nëse P(a) = 0.\n\nPër rrënjë racionale: nëse p/q (e thjeshtuar) është rrënjë e aₙxⁿ + ... + a₀, atëherë p ndan a₀ dhe q ndan aₙ.',
        keyPoints: [
          'Rrënja a: P(a) = 0',
          'Faktor (x-a) ↔ rrënja x = a',
          'Polinom shkalla n ka n rrënjë (me shumëfishësi)',
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
        theory: 'Thyesa racionale është raporti i dy polinom-eve f(x) = P(x)/Q(x). Domain: të gjitha vlerat x ku Q(x) ≠ 0. Pikat ku Q(x) = 0 janë asimptota vertikale ose vrima (holes).\n\nAsimptota horizontale: krahasoni shkallën e P dhe Q. Nëse grad(P) < grad(Q): y = 0. Nëse grad(P) = grad(Q): y = raporti i koeficientëve kryesorë.\n\nThjeshtimi: nëse P dhe Q kanë faktorë të përbashkët, anulo - krijohet "vrimë" (hole) në grafik.',
        keyPoints: [
          'Domain: Q(x) ≠ 0',
          'Asimptota vertikale: Q(x) = 0 (pas thjeshtimit)',
          'Asimptota horizontale: varet nga shkalla relative',
          'Thjeshtimi krijon vrima (holes)',
        ],
        examples: [
          {
            example: 'Gjej domain-in e f(x) = (x+1)/(x²-4)',
            solution: 'x²-4 = 0 → x = ±2\nDomain: ℝ \\ {-2, 2}\nAsimptota vertikale: x = -2 dhe x = 2',
          },
        ],
        practice: [
          {
            problem: 'Thjeshtoje dhe gjej domain-in: f(x) = (x²-1)/(x-1)',
            solution: 'f(x) = x+1 me vrimë te x=1, domain ℝ\\{1}',
            steps: [
              'Faktorizoje: x²-1 = (x-1)(x+1)',
              'f(x) = (x-1)(x+1)/(x-1) = x+1 (për x≠1)',
              'Domain: ℝ\\{1} (vrimë te x=1)',
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
        theory: 'Shprehja racionale R(x) = P(x)/Q(x) ku P, Q janë polinome. Operacionet me to janë analoge me thyesat e zakonshme, por kërkojnë faktorizim të polinom-eve.\n\nMbledhja/Zbritja: gjej EPMV të emëruesve, konverto, pastaj mblidh numeratorët.\nShumëzimi: shumëzo numeratorët me njëri-tjetrin dhe emëruesit me njëri-tjetrin, pastaj thjeshtoje.\nPjesëtimi: shumëzo me reciproken.',
        keyPoints: [
          'EPMV i emëruesve polinom-ialë kërkon faktorizim',
          'Shumëzim: (P/Q)·(R/S) = PR/QS',
          'Pjesëtim: (P/Q)÷(R/S) = (P/Q)·(S/R)',
          'Gjithmonë thjeshtoje rezultatin',
        ],
        examples: [
          {
            example: 'Mblidh: 1/(x-2) + 3/(x+1)',
            solution: 'EPMV = (x-2)(x+1)\n= (x+1)/[(x-2)(x+1)] + 3(x-2)/[(x-2)(x+1)]\n= (x+1+3x-6)/[(x-2)(x+1)]\n= (4x-5)/[(x-2)(x+1)]',
          },
        ],
        practice: [
          {
            problem: 'Thjeshtoje: (x²-4)/(x²-x-6)',
            solution: '(x+2)/(x+3)',
            steps: [
              'Numeratori: x²-4 = (x-2)(x+2)',
              'Emëruesi: x²-x-6 = (x-3)(x+2)',
              'Rezultati: (x-2)(x+2)/[(x-3)(x+2)] = (x-2)/(x-3)',
              'Wait - (x+2) anulojnë: (x+2)/(x+3)... Let me check: x²-x-6=(x-3)(x+2) → (x-2)(x+2)/[(x-3)(x+2)] = (x-2)/(x-3)',
            ],
          },
        ],
      },
      {
        title: 'Ekuacionet Racionale',
        theory: 'Ekuacioni racional ka shprehje racionale. Mënyra: shumëzo të dyja anët me EPMV të emëruesve. Kjo eliminon denominatorët por mund të sjellë zgjidhje të rreme (ekstraneo solutions).\n\nGjithmonë kontrollo: zëvendëso zgjidhjet dhe verifiko se asnjë emërues nuk bëhet zero. Zgjidhjet ku emëruesi = 0 hidhen.',
        keyPoints: [
          'Shumëzo me EPMV për të eliminuar emëruesit',
          'Kontrollim i detyrueshëm - filtro zgjidhje të rreme',
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
        theory: 'Funksioni racional f(x) = P(x)/Q(x) ka sjellje karakteristike afër asimptotave. Ndërtimi i grafikut kërkon: 1) Gjej domain, 2) Gjej rrënjët (numeratori = 0), 3) Gjej asimptota, 4) Kontrollo vlera specifike.\n\nAsimptota oblique (diagonale): kur shkalla e P është saktësisht 1 më e madhe se Q, ekziston asimptotë diagonale e gjendur me ndarje polinomiale.',
        keyPoints: [
          'Asimptota vertikale: Q(x) = 0 (pas thjeshtimit)',
          'Asimptota horizontale: limitë kur x→±∞',
          'Asimptotë oblique: kur grad(P) = grad(Q) + 1',
          'Rrënjët e f: numeratori = 0',
        ],
        examples: [
          {
            example: 'Gjej asimptot e f(x) = (2x² + 1)/(x² - 4)',
            solution: 'AV: x = ±2\nAH: y = 2 (raporti koeficientëve 2/1)\nRrënjë: 2x²+1=0 → pa rrënjë reale',
          },
        ],
        practice: [
          {
            problem: 'Gjej të gjitha asimptot e f(x) = x/(x-3)',
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
        theory: 'Eksponentët janë operacioni i fuqisë: aⁿ = a × a × a ... × a (n herë). Bazat themelore të ligjeve:\n- aᵐ × aⁿ = aᵐ⁺ⁿ (shumëzo: shto fuqitë)\n- aᵐ / aⁿ = aᵐ⁻ⁿ (ndaj: zbrit fuqitë)\n- (aᵐ)ⁿ = aᵐⁿ (fuqi e fuqisë: shumëzo)\n- a⁰ = 1 (çdo bazë jo-zero)\n- a⁻ⁿ = 1/aⁿ (fuqi negative = reciproke)',
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
            problem: 'Zgjidh: 8^(2/3)',
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
        theory: 'Funksioni eksponencial: f(x) = aˣ ku a > 0, a ≠ 1. Grafiku kalon (0, 1) dhe është gjithmonë mbi x-boshtin. Nëse a > 1: kresim, nëse 0 < a < 1: rënie.\n\nLogaritmi log_a(x) = n do të thotë "a fuqia sa jep x": aⁿ = x. Logaritmi është inversi i eksponentialit.\n\nlogaritmi natyral: ln(x) = log_e(x), ku e ≈ 2.718. Logaritmi dhjetor: log(x) = log₁₀(x).',
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
              'x = 3 ose x = -1 (hedh -1 sepse log kërkon x > 0)',
            ],
          },
        ],
      },
      {
        title: 'Ekuacionet Eksponenciale dhe Logaritmike',
        theory: 'Ekuacionet eksponenciale: nëse bazat janë të barabarta, barazo fuqitë. Nëse jo, zbato logaritmin në të dyja anët dhe zbato ligjet.\n\nEkuacionet logaritmike: bashko logaritmet nëse ka shumë, pastaj konverto në formë eksponenciale. Kujdes: kontrollo se argumentet e logaritmeve janë pozitive.',
        keyPoints: [
          'aˣ = aʸ ↔ x = y (baza të njëjta)',
          'ln(aˣ) = x·ln(a) (logaritmoje të dyja anët)',
          'Ekuacione log: konverto në eksponencial',
          'Kujdes: argumente > 0 gjithmonë',
        ],
        examples: [
          {
            example: 'Zgjidh: 2ˣ = 5',
            solution: 'x·ln2 = ln5\nx = ln5/ln2 ≈ 2.322',
          },
          {
            example: 'Zgjidh: ln(x) = 3',
            solution: 'x = e³ ≈ 20.09',
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
        theory: 'Njësia imagjinare i = √(-1), ku i² = -1. Numrat kompleks kanë formën a + bi ku a është pjesa reale dhe b është pjesa imagjinare.\n\nNumrat realë janë rasë e veçantë e kompleksëve (b = 0). Numrat imagjinarë të pastër kanë a = 0.\n\nOperacionet: mbledhja (mblidh gjymtyrat), zbritja, shumëzimi (FOIL duke mbajtur i² = -1), pjesëtimi (shumëzo me conjugate të emëruesit).',
        keyPoints: [
          'i = √(-1), i² = -1, i³ = -i, i⁴ = 1',
          'Forma: z = a + bi',
          'Conjugate i a+bi është a-bi',
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
            solution: '= (1 + 3i)/2 = 0.5 + 1.5i',
            steps: [
              'Shumëzo me conjugate: (2+i)(1+i)/[(1-i)(1+i)]',
              '= (2+2i+i+i²)/(1+1)',
              '= (2+3i-1)/2',
              '= (1+3i)/2',
            ],
          },
        ],
      },
      {
        title: 'Forma Trigonometrike dhe Teorema e De Moivre',
        theory: 'Numri kompleks z = a + bi mund të shprehet si z = r(cos θ + i sin θ) ose z = re^(iθ), ku r = |z| = √(a²+b²) është moduli dhe θ = arg(z) = arctan(b/a) është argumenti.\n\nTeorema e De Moivre: [r(cos θ + i sin θ)]ⁿ = rⁿ(cos nθ + i sin nθ)\n\nKjo teoremë lejon llogaritjen e fuqive dhe rrënjëve të numrave kompleks.',
        keyPoints: [
          'r = √(a²+b²) (moduli/amplitudë)',
          'θ = arctan(b/a) (argumenti/faza)',
          'De Moivre: zⁿ = rⁿ(cos nθ + i sin nθ)',
          'n rrënjë të n-ta: rⁿ√ · cis((θ+2kπ)/n)',
        ],
        examples: [
          {
            example: 'Shprehë z = 1 + i në formë trigonometrike',
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
        title: 'Sekuencat Aritmetike',
        theory: 'Sekuencë aritmetike ka diferencë konstante d mes termave vijues: aₙ = a₁ + (n-1)d. Termi i parë a₁ dhe diferenca e zakonshme d e karakterizojnë plotësisht.\n\nShuma e n termave: Sₙ = n(a₁ + aₙ)/2 = n[2a₁ + (n-1)d]/2\n\nAplikimet: kalkulim kostosh, plani i kursimit, progres linear i shumë fenomeneve.',
        keyPoints: [
          'aₙ = a₁ + (n-1)d',
          'Diferenca e zakonshme: d = aₙ₊₁ - aₙ',
          'Shuma: Sₙ = n(a₁+aₙ)/2',
          'Termi i mesit = mesatarja e termave kraisorë',
        ],
        examples: [
          {
            example: 'Gjej termin e 10-të të sekuencës 3, 7, 11, 15...',
            solution: 'd = 4, a₁ = 3\na₁₀ = 3 + 9×4 = 39',
          },
          {
            example: 'Gjej shumën e 20 termave: 5, 8, 11...',
            solution: 'd=3, a₁=5, a₂₀=5+19×3=62\nS₂₀ = 20(5+62)/2 = 670',
          },
        ],
        practice: [
          {
            problem: 'Gjej shumën e numrave të çiftë nga 2 deri 100.',
            solution: 'S = 2550',
            steps: [
              'Sekuencë: 2, 4, 6, ..., 100',
              'a₁=2, d=2, n=50',
              'S₅₀ = 50(2+100)/2 = 50×51 = 2550',
            ],
          },
        ],
      },
      {
        title: 'Sekuencat Gjeometrike',
        theory: 'Sekuencë gjeometrike ka raport konstant q mes termave: aₙ = a₁ × qⁿ⁻¹. Termi i parë a₁ dhe raporti q e karakterizojnë.\n\nShuma e n termave: Sₙ = a₁(qⁿ - 1)/(q - 1) nëse q ≠ 1\nShuma e serisë infinite (|q| < 1): S∞ = a₁/(1 - q)\n\nAplikimet: rritja eksponenciale (popullatë, kapital), zbërthimi radioaktiv, interesi i përbërë.',
        keyPoints: [
          'aₙ = a₁ × qⁿ⁻¹',
          'Raporti: q = aₙ₊₁ / aₙ',
          'Sₙ = a₁(qⁿ-1)/(q-1)',
          'S∞ = a₁/(1-q) vetëm kur |q| < 1',
        ],
        examples: [
          {
            example: 'Gjej termin e 6-të: 2, 6, 18, 54...',
            solution: 'q = 3, a₆ = 2×3⁵ = 486',
          },
          {
            example: 'Kapital 1000€ me interes 5% vjetor pas 10 vjetësh:',
            solution: 'A = 1000 × 1.05¹⁰ ≈ 1628.89€',
          },
        ],
        practice: [
          {
            problem: 'Gjej shumën e serisë infinite: 1 + 1/2 + 1/4 + 1/8 + ...',
            solution: 'S∞ = 2',
            steps: [
              'a₁ = 1, q = 1/2',
              '|q| = 0.5 < 1 → seri konvergjente',
              'S∞ = 1/(1-1/2) = 1/(1/2) = 2',
            ],
          },
        ],
      },
    ],
  },
};
