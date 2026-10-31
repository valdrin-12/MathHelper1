// Grade 9 · Theme 2: Expressions with variables (September–October)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g9-expressions',
  i18n: {
    al: { title: 'Shprehjet me ndryshore', description: 'Veprimet me polinome, katrori dhe kubi i binomit, diferenca e katrorëve, faktorizimi dhe thyesat algjebrike.' },
    en: { title: 'Algebraic expressions', description: 'Operations with polynomials, square and cube of a binomial, difference of squares, factorising and algebraic fractions.' },
    de: { title: 'Terme mit Variablen', description: 'Rechnen mit Polynomen, Quadrat und Kubus eines Binoms, dritte binomische Formel, Faktorisieren und Bruchterme.' },
  },
  lessons: [
    // ───────── 1. Polynomials and operations
    {
      slug: 'g9-expressions-polynomial-operations',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: '·', cells: ['x²', '−2x', '+3'] },
          { head: 'x', cells: ['x³', '−2x²', '3x'] },
          { head: '+1', cells: ['x²', '−2x', '+3'] },
        ],
        caption: alt('(x² − 2x + 3)(x + 1) = x³ − 2x² + x² + 3x − 2x + 3 = x³ − x² + x + 3.', '(x² − 2x + 3)(x + 1) = x³ − 2x² + x² + 3x − 2x + 3 = x³ − x² + x + 3.', '(x² − 2x + 3)(x + 1) = x³ − 2x² + x² + 3x − 2x + 3 = x³ − x² + x + 3.'),
        alt: alt('Tabela e shumëzimit të (x² − 2x + 3) me (x + 1) me gjashtë prodhime.', 'Multiplication grid for (x² − 2x + 3) times (x + 1) with six products.', 'Multiplikationstabelle für (x² − 2x + 3) mal (x + 1) mit sechs Produkten.'),
      }],
      answers: {
        examples: ['text', [['2*(-1)^3 - (-1) + 4', 3]]],
        practice: ['text', 'text', [['2^3 - 3*2 + 1', 3]]],
      },
      al: {
        title: 'Polinomet dhe veprimet me to',
        objectives: ['Të shumëzoni polinome dhe të pjesëtoni polinom me monom.', 'Të llogaritni vlerën e polinomit P(a).'],
        theory: 'Polinomi në trajtë standarde ka kufizat e reduktuara dhe të renditura sipas fuqive zbritëse: P(x) = 2x³ − x + 4. Shkalla është fuqia më e madhe.\n\nShumëzimi: çdo kufizë e njërit me çdo kufizë të tjetrit, pastaj reduktimi. Një tabelë ndihmon që të mos harrohet asnjë prodhim: (x² − 2x + 3)(x + 1) = x³ − x² + x + 3.\n\nPjesëtimi me monom: pjesëtohet çdo kufizë: (6x³ − 4x²) : 2x = 3x² − 2x. Vlera P(a) del duke zëvendësuar x = a: për P(x) = 2x³ − x + 4, P(−1) = −2 + 1 + 4 = 3.',
        keyPoints: ['Trajta standarde: fuqitë zbritëse', 'Shumëzim: çdo kufizë me çdo kufizë', 'P(a): zëvendësoni x = a'],
        examples: [
          { example: 'Shumëzoni (x² − 2x + 3)(x + 1).', solution: 'x³ + x² − 2x² − 2x + 3x + 3 = x³ − x² + x + 3.' },
          { example: 'P(x) = 2x³ − x + 4. Gjeni P(−1).', solution: '2 · (−1) − (−1) + 4 = −2 + 1 + 4 = 3.' },
        ],
        commonMistakes: [
          { mistake: '(6x³ − 4x²) : 2x = 3x² − 4x²', fix: 'Pjesëtohet çdo kufizë: −4x² : 2x = −2x.' },
          { mistake: 'P(−1) = 2 · 1 − 1 + 4', fix: '(−1)³ = −1, pra 2x³ = −2.' },
        ],
        practice: [
          { problem: 'Shumëzoni (3x − 2)(2x² + x − 1).', solution: '6x³ − x² − 5x + 2', steps: ['6x³ + 3x² − 3x − 4x² − 2x + 2.', '= 6x³ − x² − 5x + 2.'] },
          { problem: 'Pjesëtoni (6x³ − 4x²) : 2x.', solution: '3x² − 2x', steps: ['6x³ : 2x = 3x².', '−4x² : 2x = −2x.'] },
          { problem: 'P(x) = x³ − 3x + 1. Gjeni P(2).', solution: '3', steps: ['8 − 6 + 1.', '= 3.'] },
        ],
      },
      en: {
        title: 'Polynomials and operations',
        objectives: ['Multiply polynomials and divide a polynomial by a monomial.', 'Work out the value P(a) of a polynomial.'],
        theory: 'A polynomial in standard form has its like terms collected and ordered by decreasing powers: P(x) = 2x³ − x + 4. Its degree is the highest power.\n\nMultiplying: every term of one times every term of the other, then collect. A grid helps not to miss a product: (x² − 2x + 3)(x + 1) = x³ − x² + x + 3.\n\nDividing by a monomial: divide every term: (6x³ − 4x²) ÷ 2x = 3x² − 2x. The value P(a) comes from substituting x = a: for P(x) = 2x³ − x + 4, P(−1) = −2 + 1 + 4 = 3.',
        keyPoints: ['Standard form: decreasing powers', 'Multiplying: every term times every term', 'P(a): substitute x = a'],
        examples: [
          { example: 'Multiply (x² − 2x + 3)(x + 1).', solution: 'x³ + x² − 2x² − 2x + 3x + 3 = x³ − x² + x + 3.' },
          { example: 'P(x) = 2x³ − x + 4. Find P(−1).', solution: '2 · (−1) − (−1) + 4 = −2 + 1 + 4 = 3.' },
        ],
        commonMistakes: [
          { mistake: '(6x³ − 4x²) ÷ 2x = 3x² − 4x²', fix: 'Divide every term: −4x² ÷ 2x = −2x.' },
          { mistake: 'P(−1) = 2 · 1 − 1 + 4', fix: '(−1)³ = −1, so 2x³ = −2.' },
        ],
        practice: [
          { problem: 'Multiply (3x − 2)(2x² + x − 1).', solution: '6x³ − x² − 5x + 2', steps: ['6x³ + 3x² − 3x − 4x² − 2x + 2.', '= 6x³ − x² − 5x + 2.'] },
          { problem: 'Divide (6x³ − 4x²) ÷ 2x.', solution: '3x² − 2x', steps: ['6x³ ÷ 2x = 3x².', '−4x² ÷ 2x = −2x.'] },
          { problem: 'P(x) = x³ − 3x + 1. Find P(2).', solution: '3', steps: ['8 − 6 + 1.', '= 3.'] },
        ],
      },
      de: {
        title: 'Polynome und Rechenoperationen',
        objectives: ['Polynome multiplizieren und ein Polynom durch ein Monom dividieren.', 'Den Wert P(a) eines Polynoms berechnen.'],
        theory: 'Ein Polynom in Normalform ist zusammengefasst und nach fallenden Potenzen geordnet: P(x) = 2x³ − x + 4. Der Grad ist die höchste Potenz.\n\nMultiplizieren: jedes Glied des einen mit jedem Glied des anderen, dann zusammenfassen. Eine Tabelle hilft, kein Produkt zu vergessen: (x² − 2x + 3)(x + 1) = x³ − x² + x + 3.\n\nDivision durch ein Monom: jedes Glied teilen: (6x³ − 4x²) : 2x = 3x² − 2x. Den Wert P(a) erhält man durch Einsetzen von x = a: Für P(x) = 2x³ − x + 4 ist P(−1) = −2 + 1 + 4 = 3.',
        keyPoints: ['Normalform: fallende Potenzen', 'Multiplizieren: jedes Glied mit jedem', 'P(a): x = a einsetzen'],
        examples: [
          { example: 'Multiplizieren Sie (x² − 2x + 3)(x + 1).', solution: 'x³ + x² − 2x² − 2x + 3x + 3 = x³ − x² + x + 3.' },
          { example: 'P(x) = 2x³ − x + 4. Bestimmen Sie P(−1).', solution: '2 · (−1) − (−1) + 4 = −2 + 1 + 4 = 3.' },
        ],
        commonMistakes: [
          { mistake: '(6x³ − 4x²) : 2x = 3x² − 4x²', fix: 'Jedes Glied teilen: −4x² : 2x = −2x.' },
          { mistake: 'P(−1) = 2 · 1 − 1 + 4', fix: '(−1)³ = −1, also 2x³ = −2.' },
        ],
        practice: [
          { problem: 'Multiplizieren Sie (3x − 2)(2x² + x − 1).', solution: '6x³ − x² − 5x + 2', steps: ['6x³ + 3x² − 3x − 4x² − 2x + 2.', '= 6x³ − x² − 5x + 2.'] },
          { problem: 'Dividieren Sie (6x³ − 4x²) : 2x.', solution: '3x² − 2x', steps: ['6x³ : 2x = 3x².', '−4x² : 2x = −2x.'] },
          { problem: 'P(x) = x³ − 3x + 1. Bestimmen Sie P(2).', solution: '3', steps: ['8 − 6 + 1.', '= 3.'] },
        ],
      },
    },

    // ───────── 2. Square of a binomial
    {
      slug: 'g9-expressions-binomial-square',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: '·', cells: ['x', '+3'] },
          { head: 'x', cells: ['x²', '3x'] },
          { head: '+3', cells: ['3x', '9'] },
        ],
        highlight: [[1, 1], [2, 0]],
        caption: alt('(x + 3)² = x² + 3x + 3x + 9 = x² + 6x + 9: dy kufizat e mesit japin 2 · 3x.', '(x + 3)² = x² + 3x + 3x + 9 = x² + 6x + 9: the two middle terms give 2 · 3x.', '(x + 3)² = x² + 3x + 3x + 9 = x² + 6x + 9: Die zwei mittleren Glieder ergeben 2 · 3x.'),
        alt: alt('Tabela e (x + 3)(x + 3): x², 3x, 3x, 9.', 'Grid for (x + 3)(x + 3): x², 3x, 3x, 9.', 'Tabelle für (x + 3)(x + 3): x², 3x, 3x, 9.'),
      }],
      answers: {
        examples: ['text', 'text'],
        practice: ['text', 'text', [['101^2', 10201]]],
      },
      al: {
        title: 'Katrori i binomit',
        objectives: ['Të zbatoni (a ± b)² edhe me koeficientë dhe numra negativë.', 'Të njihni trinomin katror të plotë dhe të plotësoni kufizën që mungon.'],
        theory: '(a + b)² = a² + 2ab + b² dhe (a − b)² = a² − 2ab + b². Formula vlen për çdo a dhe b: (−2a + 5)² = 4a² − 20a + 25.\n\nNga e djathta në të majtë: trinomi x² + 6x + 9 është katror i plotë, sepse 9 = 3² dhe 6x = 2 · x · 3: x² + 6x + 9 = (x + 3)². Kontrolli: kufiza e mesit duhet të jetë dyfishi i prodhimit të rrënjëve të skajeve.\n\nKufiza që mungon: te x² + … + 25 = (x + 5)² mungon 2 · x · 5 = 10x.',
        keyPoints: ['(a ± b)² = a² ± 2ab + b²', 'Katror i plotë: skajet katrorë, mesi = 2ab', 'x² + 6x + 9 = (x + 3)²'],
        examples: [
          { example: 'Zbërtheni (x + 3)².', solution: 'x² + 2 · 3x + 9 = x² + 6x + 9.' },
          { example: 'Zbërtheni (−2a + 5)².', solution: '(−2a)² + 2 · (−2a) · 5 + 5² = 4a² − 20a + 25.' },
        ],
        commonMistakes: [
          { mistake: '(x + 3)² = x² + 9', fix: 'Mungon 2 · x · 3 = 6x.' },
          { mistake: '(−2a)² = −4a²', fix: 'Katrori i një numri negativ është pozitiv: 4a².' },
        ],
        practice: [
          { problem: 'Zbërtheni (0,5x − 4)².', solution: '0,25x² − 4x + 16', steps: ['(0,5x)² = 0,25x²; 2 · 0,5x · 4 = 4x.', '0,25x² − 4x + 16.'] },
          { problem: 'Plotësoni: x² + … + 25 = (x + 5)².', solution: '10x', steps: ['Mesi = 2 · x · 5.', '= 10x.'] },
          { problem: 'Llogaritni 101² me formulë.', solution: '10 201', steps: ['(100 + 1)² = 10 000 + 200 + 1.', '= 10 201.'] },
        ],
      },
      en: {
        title: 'Square of a binomial',
        objectives: ['Use (a ± b)² also with coefficients and negative numbers.', 'Recognise a perfect-square trinomial and fill in the missing term.'],
        theory: '(a + b)² = a² + 2ab + b² and (a − b)² = a² − 2ab + b². The formula works for any a and b: (−2a + 5)² = 4a² − 20a + 25.\n\nRead right to left: the trinomial x² + 6x + 9 is a perfect square, because 9 = 3² and 6x = 2 · x · 3: x² + 6x + 9 = (x + 3)². Check: the middle term must be twice the product of the roots of the end terms.\n\nThe missing term: in x² + … + 25 = (x + 5)² the term 2 · x · 5 = 10x is missing.',
        keyPoints: ['(a ± b)² = a² ± 2ab + b²', 'Perfect square: ends are squares, middle = 2ab', 'x² + 6x + 9 = (x + 3)²'],
        examples: [
          { example: 'Expand (x + 3)².', solution: 'x² + 2 · 3x + 9 = x² + 6x + 9.' },
          { example: 'Expand (−2a + 5)².', solution: '(−2a)² + 2 · (−2a) · 5 + 5² = 4a² − 20a + 25.' },
        ],
        commonMistakes: [
          { mistake: '(x + 3)² = x² + 9', fix: 'The term 2 · x · 3 = 6x is missing.' },
          { mistake: '(−2a)² = −4a²', fix: 'The square of a negative number is positive: 4a².' },
        ],
        practice: [
          { problem: 'Expand (0.5x − 4)².', solution: '0.25x² − 4x + 16', steps: ['(0.5x)² = 0.25x²; 2 · 0.5x · 4 = 4x.', '0.25x² − 4x + 16.'] },
          { problem: 'Fill in: x² + … + 25 = (x + 5)².', solution: '10x', steps: ['Middle = 2 · x · 5.', '= 10x.'] },
          { problem: 'Work out 101² with the formula.', solution: '10 201', steps: ['(100 + 1)² = 10 000 + 200 + 1.', '= 10 201.'] },
        ],
      },
      de: {
        title: 'Das Quadrat eines Binoms',
        objectives: ['(a ± b)² auch mit Koeffizienten und negativen Zahlen anwenden.', 'Ein vollständiges Quadrat erkennen und das fehlende Glied ergänzen.'],
        theory: '(a + b)² = a² + 2ab + b² und (a − b)² = a² − 2ab + b². Die Formeln gelten für beliebige a und b: (−2a + 5)² = 4a² − 20a + 25.\n\nVon rechts nach links: x² + 6x + 9 ist ein vollständiges Quadrat, denn 9 = 3² und 6x = 2 · x · 3: x² + 6x + 9 = (x + 3)². Probe: Das mittlere Glied muss das doppelte Produkt der Wurzeln der äußeren Glieder sein.\n\nFehlendes Glied: Bei x² + … + 25 = (x + 5)² fehlt 2 · x · 5 = 10x.',
        keyPoints: ['(a ± b)² = a² ± 2ab + b²', 'Vollständiges Quadrat: außen Quadrate, Mitte = 2ab', 'x² + 6x + 9 = (x + 3)²'],
        examples: [
          { example: 'Multiplizieren Sie (x + 3)² aus.', solution: 'x² + 2 · 3x + 9 = x² + 6x + 9.' },
          { example: 'Multiplizieren Sie (−2a + 5)² aus.', solution: '(−2a)² + 2 · (−2a) · 5 + 5² = 4a² − 20a + 25.' },
        ],
        commonMistakes: [
          { mistake: '(x + 3)² = x² + 9', fix: 'Es fehlt 2 · x · 3 = 6x.' },
          { mistake: '(−2a)² = −4a²', fix: 'Das Quadrat einer negativen Zahl ist positiv: 4a².' },
        ],
        practice: [
          { problem: 'Multiplizieren Sie (0,5x − 4)² aus.', solution: '0,25x² − 4x + 16', steps: ['(0,5x)² = 0,25x²; 2 · 0,5x · 4 = 4x.', '0,25x² − 4x + 16.'] },
          { problem: 'Ergänzen Sie: x² + … + 25 = (x + 5)².', solution: '10x', steps: ['Mitte = 2 · x · 5.', '= 10x.'] },
          { problem: 'Berechnen Sie 101² mit der Formel.', solution: '10 201', steps: ['(100 + 1)² = 10 000 + 200 + 1.', '= 10 201.'] },
        ],
      },
    },

    // ───────── 3. Difference of squares
    {
      slug: 'g9-expressions-difference-of-squares',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: 'a² − b²', cells: ['9a² − 16', '81 − y²', 'x⁴ − 1'] },
          { head: '(a − b)(a + b)', cells: ['(3a − 4)(3a + 4)', '(9 − y)(9 + y)', '(x² − 1)(x² + 1)'] },
        ],
        caption: alt('Gjeni a dhe b si rrënjë të dy katrorëve, pastaj shkruani (a − b)(a + b).', 'Find a and b as the roots of the two squares, then write (a − b)(a + b).', 'a und b als Wurzeln der beiden Quadrate bestimmen, dann (a − b)(a + b) schreiben.'),
        alt: alt('Tabela: tri diferenca katrorësh dhe faktorizimi i tyre.', 'Table: three differences of squares and their factorisation.', 'Tabelle: drei Differenzen von Quadraten und ihre Faktorisierung.'),
      }],
      answers: {
        examples: ['text', [['2.5^2 - 1.5^2', 4]]],
        practice: ['text', 'text', [['99 * 101', 9999]]],
      },
      al: {
        title: 'Diferenca e katrorëve',
        objectives: ['Të faktorizoni a² − b² me koeficientë dhe fuqi më të larta.', 'Ta përdorni formulën për llogaritje të shpejta.'],
        theory: 'a² − b² = (a − b)(a + b). Për ta përdorur, shkruajmë secilën kufizë si katror: 9a² = (3a)², 16 = 4², pra 9a² − 16 = (3a − 4)(3a + 4).\n\nNdonjëherë formula zbatohet dy herë: x⁴ − 1 = (x² − 1)(x² + 1) = (x − 1)(x + 1)(x² + 1). Shuma e katrorëve x² + 1 nuk faktorizohet në ℝ.\n\nLlogaritje të shpejta: 2,5² − 1,5² = (2,5 − 1,5)(2,5 + 1,5) = 1 · 4 = 4; 99 · 101 = 100² − 1 = 9 999.',
        keyPoints: ['a² − b² = (a − b)(a + b)', 'Shkruani çdo kufizë si katror', 'Kontrolloni nëse faktorët faktorizohen sërish'],
        examples: [
          { example: 'Faktorizoni 9a² − 16.', solution: '(3a)² − 4² = (3a − 4)(3a + 4).' },
          { example: 'Llogaritni 2,5² − 1,5².', solution: '(2,5 − 1,5)(2,5 + 1,5) = 1 · 4 = 4.' },
        ],
        commonMistakes: [
          { mistake: '9a² − 16 = (9a − 16)(9a + 16)', fix: 'Merren rrënjët: √(9a²) = 3a dhe √16 = 4.' },
          { mistake: 'x⁴ − 1 = (x² − 1)(x² + 1) dhe ndalet.', fix: 'x² − 1 faktorizohet sërish: (x − 1)(x + 1).' },
        ],
        practice: [
          { problem: 'Shumëzoni (2x − 5)(2x + 5).', solution: '4x² − 25', steps: ['(2x)² − 5².', '= 4x² − 25.'] },
          { problem: 'Faktorizoni 81 − y².', solution: '(9 − y)(9 + y)', steps: ['81 = 9².', '(9 − y)(9 + y).'] },
          { problem: 'Llogaritni 99 · 101.', solution: '9 999', steps: ['(100 − 1)(100 + 1) = 100² − 1.', '= 9 999.'] },
        ],
      },
      en: {
        title: 'Difference of two squares',
        objectives: ['Factorise a² − b² with coefficients and higher powers.', 'Use the formula for quick calculations.'],
        theory: 'a² − b² = (a − b)(a + b). To use it, write each term as a square: 9a² = (3a)², 16 = 4², so 9a² − 16 = (3a − 4)(3a + 4).\n\nSometimes the formula is used twice: x⁴ − 1 = (x² − 1)(x² + 1) = (x − 1)(x + 1)(x² + 1). The sum of squares x² + 1 does not factorise over ℝ.\n\nQuick calculations: 2.5² − 1.5² = (2.5 − 1.5)(2.5 + 1.5) = 1 · 4 = 4; 99 · 101 = 100² − 1 = 9 999.',
        keyPoints: ['a² − b² = (a − b)(a + b)', 'Write each term as a square', 'Check whether the factors factorise again'],
        examples: [
          { example: 'Factorise 9a² − 16.', solution: '(3a)² − 4² = (3a − 4)(3a + 4).' },
          { example: 'Work out 2.5² − 1.5².', solution: '(2.5 − 1.5)(2.5 + 1.5) = 1 · 4 = 4.' },
        ],
        commonMistakes: [
          { mistake: '9a² − 16 = (9a − 16)(9a + 16)', fix: 'Take the roots: √(9a²) = 3a and √16 = 4.' },
          { mistake: 'x⁴ − 1 = (x² − 1)(x² + 1) and stopping.', fix: 'x² − 1 factorises again: (x − 1)(x + 1).' },
        ],
        practice: [
          { problem: 'Multiply (2x − 5)(2x + 5).', solution: '4x² − 25', steps: ['(2x)² − 5².', '= 4x² − 25.'] },
          { problem: 'Factorise 81 − y².', solution: '(9 − y)(9 + y)', steps: ['81 = 9².', '(9 − y)(9 + y).'] },
          { problem: 'Work out 99 · 101.', solution: '9 999', steps: ['(100 − 1)(100 + 1) = 100² − 1.', '= 9 999.'] },
        ],
      },
      de: {
        title: 'Die dritte binomische Formel',
        objectives: ['a² − b² auch mit Koeffizienten und höheren Potenzen faktorisieren.', 'Die Formel für schnelles Rechnen nutzen.'],
        theory: 'a² − b² = (a − b)(a + b). Dazu schreibt man jedes Glied als Quadrat: 9a² = (3a)², 16 = 4², also 9a² − 16 = (3a − 4)(3a + 4).\n\nManchmal wendet man die Formel zweimal an: x⁴ − 1 = (x² − 1)(x² + 1) = (x − 1)(x + 1)(x² + 1). Die Summe von Quadraten x² + 1 lässt sich in ℝ nicht zerlegen.\n\nSchnelles Rechnen: 2,5² − 1,5² = (2,5 − 1,5)(2,5 + 1,5) = 1 · 4 = 4; 99 · 101 = 100² − 1 = 9 999.',
        keyPoints: ['a² − b² = (a − b)(a + b)', 'Jedes Glied als Quadrat schreiben', 'Prüfen, ob die Faktoren weiter zerfallen'],
        examples: [
          { example: 'Faktorisieren Sie 9a² − 16.', solution: '(3a)² − 4² = (3a − 4)(3a + 4).' },
          { example: 'Berechnen Sie 2,5² − 1,5².', solution: '(2,5 − 1,5)(2,5 + 1,5) = 1 · 4 = 4.' },
        ],
        commonMistakes: [
          { mistake: '9a² − 16 = (9a − 16)(9a + 16)', fix: 'Die Wurzeln nehmen: √(9a²) = 3a und √16 = 4.' },
          { mistake: 'x⁴ − 1 = (x² − 1)(x² + 1) und aufhören.', fix: 'x² − 1 zerfällt weiter: (x − 1)(x + 1).' },
        ],
        practice: [
          { problem: 'Multiplizieren Sie (2x − 5)(2x + 5).', solution: '4x² − 25', steps: ['(2x)² − 5².', '= 4x² − 25.'] },
          { problem: 'Faktorisieren Sie 81 − y².', solution: '(9 − y)(9 + y)', steps: ['81 = 9².', '(9 − y)(9 + y).'] },
          { problem: 'Berechnen Sie 99 · 101.', solution: '9 999', steps: ['(100 − 1)(100 + 1) = 100² − 1.', '= 9 999.'] },
        ],
      },
    },

    // ───────── 4. Cube of a binomial
    {
      slug: 'g9-expressions-binomial-cube',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: '(a + b)²', cells: ['1', '2', '1'] },
          { head: '(a + b)³', cells: ['1', '3', '3', '1'] },
        ],
        caption: alt('Koeficientët e (a + b)³: 1, 3, 3, 1 → a³ + 3a²b + 3ab² + b³.', 'Coefficients of (a + b)³: 1, 3, 3, 1 → a³ + 3a²b + 3ab² + b³.', 'Koeffizienten von (a + b)³: 1, 3, 3, 1 → a³ + 3a²b + 3ab² + b³.'),
        alt: alt('Koeficientët 1, 2, 1 për katrorin dhe 1, 3, 3, 1 për kubin e binomit.', 'Coefficients 1, 2, 1 for the square and 1, 3, 3, 1 for the cube of a binomial.', 'Koeffizienten 1, 2, 1 für das Quadrat und 1, 3, 3, 1 für den Kubus eines Binoms.'),
      }],
      answers: {
        examples: ['text', [['11^3', 1331]]],
        practice: ['text', 'text', [['9^3', 729]]],
      },
      al: {
        title: 'Kubi i binomit',
        objectives: ['Të zbatoni formulat (a ± b)³.', 'Ta përdorni kubin e binomit për llogaritje me mend.'],
        theory: '(a + b)³ = a³ + 3a²b + 3ab² + b³ dhe (a − b)³ = a³ − 3a²b + 3ab² − b³. Koeficientët janë 1, 3, 3, 1; te ndryshimi shenjat alternojnë +, −, +, −.\n\nFormula del nga (a + b)³ = (a + b)²(a + b) = (a² + 2ab + b²)(a + b).\n\nShembuj: (x + 2)³ = x³ + 3 · x² · 2 + 3 · x · 4 + 8 = x³ + 6x² + 12x + 8. Me mend: 11³ = (10 + 1)³ = 1 000 + 300 + 30 + 1 = 1 331.',
        keyPoints: ['(a + b)³ = a³ + 3a²b + 3ab² + b³', '(a − b)³ = a³ − 3a²b + 3ab² − b³', '(a + b)³ ≠ a³ + b³'],
        examples: [
          { example: 'Zbërtheni (x + 2)³.', solution: 'x³ + 3x² · 2 + 3x · 2² + 2³ = x³ + 6x² + 12x + 8.' },
          { example: 'Llogaritni 11³ me formulë.', solution: '(10 + 1)³ = 1 000 + 300 + 30 + 1 = 1 331.' },
        ],
        commonMistakes: [
          { mistake: '(x + 2)³ = x³ + 8', fix: 'Mungojnë dy kufizat e mesit: 6x² + 12x.' },
          { mistake: '(x − 1)³ = x³ − 3x² − 3x − 1', fix: 'Shenjat alternojnë: x³ − 3x² + 3x − 1.' },
        ],
        practice: [
          { problem: 'Zbërtheni (x − 1)³.', solution: 'x³ − 3x² + 3x − 1', steps: ['a = x, b = 1.', 'x³ − 3x² + 3x − 1.'] },
          { problem: 'Zbërtheni (2a + 1)³.', solution: '8a³ + 12a² + 6a + 1', steps: ['(2a)³ = 8a³; 3 · 4a² · 1 = 12a²; 3 · 2a · 1 = 6a.', '8a³ + 12a² + 6a + 1.'] },
          { problem: 'Llogaritni 9³ me (10 − 1)³.', solution: '729', steps: ['1 000 − 300 + 30 − 1.', '= 729.'] },
        ],
      },
      en: {
        title: 'Cube of a binomial',
        objectives: ['Use the formulas (a ± b)³.', 'Use the cube of a binomial for mental arithmetic.'],
        theory: '(a + b)³ = a³ + 3a²b + 3ab² + b³ and (a − b)³ = a³ − 3a²b + 3ab² − b³. The coefficients are 1, 3, 3, 1; for a difference the signs alternate +, −, +, −.\n\nThe formula comes from (a + b)³ = (a + b)²(a + b) = (a² + 2ab + b²)(a + b).\n\nExamples: (x + 2)³ = x³ + 3 · x² · 2 + 3 · x · 4 + 8 = x³ + 6x² + 12x + 8. Mentally: 11³ = (10 + 1)³ = 1 000 + 300 + 30 + 1 = 1 331.',
        keyPoints: ['(a + b)³ = a³ + 3a²b + 3ab² + b³', '(a − b)³ = a³ − 3a²b + 3ab² − b³', '(a + b)³ ≠ a³ + b³'],
        examples: [
          { example: 'Expand (x + 2)³.', solution: 'x³ + 3x² · 2 + 3x · 2² + 2³ = x³ + 6x² + 12x + 8.' },
          { example: 'Work out 11³ with the formula.', solution: '(10 + 1)³ = 1 000 + 300 + 30 + 1 = 1 331.' },
        ],
        commonMistakes: [
          { mistake: '(x + 2)³ = x³ + 8', fix: 'The two middle terms are missing: 6x² + 12x.' },
          { mistake: '(x − 1)³ = x³ − 3x² − 3x − 1', fix: 'The signs alternate: x³ − 3x² + 3x − 1.' },
        ],
        practice: [
          { problem: 'Expand (x − 1)³.', solution: 'x³ − 3x² + 3x − 1', steps: ['a = x, b = 1.', 'x³ − 3x² + 3x − 1.'] },
          { problem: 'Expand (2a + 1)³.', solution: '8a³ + 12a² + 6a + 1', steps: ['(2a)³ = 8a³; 3 · 4a² · 1 = 12a²; 3 · 2a · 1 = 6a.', '8a³ + 12a² + 6a + 1.'] },
          { problem: 'Work out 9³ using (10 − 1)³.', solution: '729', steps: ['1 000 − 300 + 30 − 1.', '= 729.'] },
        ],
      },
      de: {
        title: 'Der Kubus eines Binoms',
        objectives: ['Die Formeln (a ± b)³ anwenden.', 'Damit im Kopf rechnen.'],
        theory: '(a + b)³ = a³ + 3a²b + 3ab² + b³ und (a − b)³ = a³ − 3a²b + 3ab² − b³. Die Koeffizienten sind 1, 3, 3, 1; bei der Differenz wechseln die Vorzeichen +, −, +, −.\n\nDie Formel folgt aus (a + b)³ = (a + b)²(a + b) = (a² + 2ab + b²)(a + b).\n\nBeispiele: (x + 2)³ = x³ + 3 · x² · 2 + 3 · x · 4 + 8 = x³ + 6x² + 12x + 8. Im Kopf: 11³ = (10 + 1)³ = 1 000 + 300 + 30 + 1 = 1 331.',
        keyPoints: ['(a + b)³ = a³ + 3a²b + 3ab² + b³', '(a − b)³ = a³ − 3a²b + 3ab² − b³', '(a + b)³ ≠ a³ + b³'],
        examples: [
          { example: 'Multiplizieren Sie (x + 2)³ aus.', solution: 'x³ + 3x² · 2 + 3x · 2² + 2³ = x³ + 6x² + 12x + 8.' },
          { example: 'Berechnen Sie 11³ mit der Formel.', solution: '(10 + 1)³ = 1 000 + 300 + 30 + 1 = 1 331.' },
        ],
        commonMistakes: [
          { mistake: '(x + 2)³ = x³ + 8', fix: 'Die beiden mittleren Glieder fehlen: 6x² + 12x.' },
          { mistake: '(x − 1)³ = x³ − 3x² − 3x − 1', fix: 'Die Vorzeichen wechseln: x³ − 3x² + 3x − 1.' },
        ],
        practice: [
          { problem: 'Multiplizieren Sie (x − 1)³ aus.', solution: 'x³ − 3x² + 3x − 1', steps: ['a = x, b = 1.', 'x³ − 3x² + 3x − 1.'] },
          { problem: 'Multiplizieren Sie (2a + 1)³ aus.', solution: '8a³ + 12a² + 6a + 1', steps: ['(2a)³ = 8a³; 3 · 4a² · 1 = 12a²; 3 · 2a · 1 = 6a.', '8a³ + 12a² + 6a + 1.'] },
          { problem: 'Berechnen Sie 9³ mit (10 − 1)³.', solution: '729', steps: ['1 000 − 300 + 30 − 1.', '= 729.'] },
        ],
      },
    },

    // ───────── 5. Factorising
    {
      slug: 'g9-expressions-factoring',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Çifti', 'Pair', 'Paar'), cells: ['1 · 6', '2 · 3', '(−1) · (−6)', '(−2) · (−3)'] },
          { head: alt('Shuma', 'Sum', 'Summe'), cells: ['7', '5', '−7', '−5'] },
        ],
        highlight: [[1, 3]],
        caption: alt('x² − 5x + 6: kërkojmë dy numra me prodhim 6 dhe shumë −5: −2 dhe −3, pra (x − 2)(x − 3).', 'x² − 5x + 6: look for two numbers with product 6 and sum −5: −2 and −3, so (x − 2)(x − 3).', 'x² − 5x + 6: Gesucht sind zwei Zahlen mit Produkt 6 und Summe −5: −2 und −3, also (x − 2)(x − 3).'),
        alt: alt('Tabela e çifteve me prodhim 6 dhe shumat e tyre; çifti −2, −3 me shumë −5 i theksuar.', 'Table of pairs with product 6 and their sums; the pair −2, −3 with sum −5 highlighted.', 'Tabelle der Paare mit Produkt 6 und ihrer Summen; das Paar −2, −3 mit Summe −5 hervorgehoben.'),
      }],
      answers: {
        examples: ['text', 'text'],
        practice: ['text', 'text', 'text'],
      },
      al: {
        title: 'Faktorizimi',
        objectives: ['Të faktorizoni trinomet x² + bx + c.', 'Të kombinoni faktorin e përbashkët, grupimin dhe formulat.'],
        theory: 'Trinomi x² + bx + c faktorizohet si (x + m)(x + n) kur m · n = c dhe m + n = b. Për x² − 5x + 6: çifti −2, −3 ka prodhim 6 dhe shumë −5, pra x² − 5x + 6 = (x − 2)(x − 3).\n\nGrupimi: ax + ay + 2x + 2y = a(x + y) + 2(x + y) = (x + y)(a + 2).\n\nRendi i punës: (1) faktori i përbashkët; (2) formulat (diferenca e katrorëve, katrori i plotë); (3) trinomi ose grupimi; (4) kontrolloni nëse ndonjë faktor faktorizohet sërish. 2x³ − 8x = 2x(x² − 4) = 2x(x − 2)(x + 2).',
        keyPoints: ['x² + bx + c = (x + m)(x + n): mn = c, m + n = b', 'Grupimi për 4 kufiza', 'Fillimisht faktori i përbashkët'],
        examples: [
          { example: 'Faktorizoni x² − 5x + 6.', solution: '(−2) · (−3) = 6 dhe −2 + (−3) = −5: (x − 2)(x − 3).' },
          { example: 'Faktorizoni ax + ay + 2x + 2y.', solution: 'a(x + y) + 2(x + y) = (x + y)(a + 2).' },
        ],
        commonMistakes: [
          { mistake: 'x² − 5x + 6 = (x + 2)(x + 3)', fix: 'Shuma duhet −5: të dy numrat janë negativë.' },
          { mistake: '2x³ − 8x = 2x(x² − 4) dhe ndalet.', fix: 'x² − 4 = (x − 2)(x + 2).' },
        ],
        practice: [
          { problem: 'Faktorizoni x² + 7x + 12.', solution: '(x + 3)(x + 4)', steps: ['3 · 4 = 12, 3 + 4 = 7.', '(x + 3)(x + 4).'] },
          { problem: 'Faktorizoni x² − x − 12.', solution: '(x − 4)(x + 3)', steps: ['(−4) · 3 = −12, −4 + 3 = −1.', '(x − 4)(x + 3).'] },
          { problem: 'Faktorizoni plotësisht 3x² − 12x + 12.', solution: '3(x − 2)²', steps: ['3(x² − 4x + 4).', '= 3(x − 2)².'] },
        ],
      },
      en: {
        title: 'Factorising',
        objectives: ['Factorise trinomials x² + bx + c.', 'Combine the common factor, grouping and the identities.'],
        theory: 'The trinomial x² + bx + c factorises as (x + m)(x + n) when m · n = c and m + n = b. For x² − 5x + 6: the pair −2, −3 has product 6 and sum −5, so x² − 5x + 6 = (x − 2)(x − 3).\n\nGrouping: ax + ay + 2x + 2y = a(x + y) + 2(x + y) = (x + y)(a + 2).\n\nOrder of work: (1) common factor; (2) identities (difference of squares, perfect square); (3) trinomial or grouping; (4) check whether any factor factorises again. 2x³ − 8x = 2x(x² − 4) = 2x(x − 2)(x + 2).',
        keyPoints: ['x² + bx + c = (x + m)(x + n): mn = c, m + n = b', 'Grouping for 4 terms', 'Common factor first'],
        examples: [
          { example: 'Factorise x² − 5x + 6.', solution: '(−2) · (−3) = 6 and −2 + (−3) = −5: (x − 2)(x − 3).' },
          { example: 'Factorise ax + ay + 2x + 2y.', solution: 'a(x + y) + 2(x + y) = (x + y)(a + 2).' },
        ],
        commonMistakes: [
          { mistake: 'x² − 5x + 6 = (x + 2)(x + 3)', fix: 'The sum must be −5: both numbers are negative.' },
          { mistake: '2x³ − 8x = 2x(x² − 4) and stopping.', fix: 'x² − 4 = (x − 2)(x + 2).' },
        ],
        practice: [
          { problem: 'Factorise x² + 7x + 12.', solution: '(x + 3)(x + 4)', steps: ['3 · 4 = 12, 3 + 4 = 7.', '(x + 3)(x + 4).'] },
          { problem: 'Factorise x² − x − 12.', solution: '(x − 4)(x + 3)', steps: ['(−4) · 3 = −12, −4 + 3 = −1.', '(x − 4)(x + 3).'] },
          { problem: 'Factorise fully 3x² − 12x + 12.', solution: '3(x − 2)²', steps: ['3(x² − 4x + 4).', '= 3(x − 2)².'] },
        ],
      },
      de: {
        title: 'Faktorisieren',
        objectives: ['Trinome x² + bx + c faktorisieren.', 'Ausklammern, Gruppieren und binomische Formeln kombinieren.'],
        theory: 'Das Trinom x² + bx + c zerfällt in (x + m)(x + n), wenn m · n = c und m + n = b. Für x² − 5x + 6: Das Paar −2, −3 hat das Produkt 6 und die Summe −5, also x² − 5x + 6 = (x − 2)(x − 3).\n\nGruppieren: ax + ay + 2x + 2y = a(x + y) + 2(x + y) = (x + y)(a + 2).\n\nReihenfolge: (1) ausklammern; (2) binomische Formeln; (3) Trinom oder Gruppieren; (4) prüfen, ob ein Faktor weiter zerfällt. 2x³ − 8x = 2x(x² − 4) = 2x(x − 2)(x + 2).',
        keyPoints: ['x² + bx + c = (x + m)(x + n): mn = c, m + n = b', 'Gruppieren bei 4 Gliedern', 'Zuerst ausklammern'],
        examples: [
          { example: 'Faktorisieren Sie x² − 5x + 6.', solution: '(−2) · (−3) = 6 und −2 + (−3) = −5: (x − 2)(x − 3).' },
          { example: 'Faktorisieren Sie ax + ay + 2x + 2y.', solution: 'a(x + y) + 2(x + y) = (x + y)(a + 2).' },
        ],
        commonMistakes: [
          { mistake: 'x² − 5x + 6 = (x + 2)(x + 3)', fix: 'Die Summe muss −5 sein: beide Zahlen sind negativ.' },
          { mistake: '2x³ − 8x = 2x(x² − 4) und aufhören.', fix: 'x² − 4 = (x − 2)(x + 2).' },
        ],
        practice: [
          { problem: 'Faktorisieren Sie x² + 7x + 12.', solution: '(x + 3)(x + 4)', steps: ['3 · 4 = 12, 3 + 4 = 7.', '(x + 3)(x + 4).'] },
          { problem: 'Faktorisieren Sie x² − x − 12.', solution: '(x − 4)(x + 3)', steps: ['(−4) · 3 = −12, −4 + 3 = −1.', '(x − 4)(x + 3).'] },
          { problem: 'Faktorisieren Sie vollständig 3x² − 12x + 12.', solution: '3(x − 2)²', steps: ['3(x² − 4x + 4).', '= 3(x − 2)².'] },
        ],
      },
    },

    // ───────── 6. Algebraic fractions
    {
      slug: 'g9-expressions-algebraic-fractions',
      noVisual: 'Simplifying and combining algebraic fractions is shown step by step in the worked examples.',
      answers: {
        examples: ['text', [['(3^2 - 4) / (3 + 2)', 1], ['3 - 2', 1]]],
        practice: ['text', 'text', 'text'],
      },
      al: {
        title: 'Thyesat algjebrike',
        objectives: ['Të gjeni kushtet e përkufizimit dhe të thjeshtoni thyesa algjebrike.', 'Të mblidhni dhe shumëzoni thyesa algjebrike.'],
        theory: 'Thyesa algjebrike ka polinome në numërues dhe emërues. Emëruesi nuk mund të jetë zero: te (x² − 4)/(x + 2) duhet x ≠ −2.\n\nThjeshtimi: faktorizojmë numëruesin dhe emëruesin dhe thjeshtojmë faktorët e përbashkët (jo kufizat!): (x² − 4)/(x + 2) = (x − 2)(x + 2)/(x + 2) = x − 2, për x ≠ −2.\n\nMbledhja: emërues i përbashkët: 1/x + 1/(x + 1) = (x + 1 + x)/(x(x + 1)) = (2x + 1)/(x(x + 1)). Shumëzimi: numërues me numërues, emërues me emërues, pastaj thjeshtim.',
        keyPoints: ['Emëruesi ≠ 0', 'Thjeshtohen faktorët, jo kufizat', 'Mbledhje: emërues i përbashkët'],
        examples: [
          { example: 'Thjeshtoni (x² − 4)/(x + 2).', solution: '(x − 2)(x + 2)/(x + 2) = x − 2, për x ≠ −2.' },
          { example: 'Kontrolloni rezultatin për x = 3.', solution: '(9 − 4)/(3 + 2) = 5/5 = 1 dhe 3 − 2 = 1 ✓.' },
        ],
        commonMistakes: [
          { mistake: '(x + 4)/(x + 2) = 4/2 = 2 (thjeshtohet x).', fix: 'x është kufizë, jo faktor; thjeshtohen vetëm faktorët e përbashkët.' },
          { mistake: 'Harrohet kushti x ≠ −2.', fix: 'Shkruani gjithmonë vlerat ku emëruesi bëhet zero.' },
        ],
        practice: [
          { problem: 'Thjeshtoni (x² − 9)/(x² + 3x).', solution: '(x − 3)/x, x ≠ 0, x ≠ −3', steps: ['(x − 3)(x + 3)/(x(x + 3)).', '= (x − 3)/x.'] },
          { problem: 'Mblidhni 2/x + 3/x.', solution: '5/x, x ≠ 0', steps: ['Emërues i njëjtë.', '(2 + 3)/x = 5/x.'] },
          { problem: 'Shumëzoni (x + 1)/x · x²/(x² − 1).', solution: 'x/(x − 1)', steps: ['(x + 1) · x² / (x(x − 1)(x + 1)).', '= x/(x − 1).'] },
        ],
      },
      en: {
        title: 'Algebraic fractions',
        objectives: ['Find where an algebraic fraction is defined and simplify it.', 'Add and multiply algebraic fractions.'],
        theory: 'An algebraic fraction has polynomials as numerator and denominator. The denominator cannot be zero: for (x² − 4)/(x + 2) we need x ≠ −2.\n\nSimplifying: factorise numerator and denominator and cancel common factors (not terms!): (x² − 4)/(x + 2) = (x − 2)(x + 2)/(x + 2) = x − 2, for x ≠ −2.\n\nAdding: common denominator: 1/x + 1/(x + 1) = (x + 1 + x)/(x(x + 1)) = (2x + 1)/(x(x + 1)). Multiplying: numerator times numerator, denominator times denominator, then simplify.',
        keyPoints: ['Denominator ≠ 0', 'Cancel factors, not terms', 'Adding: common denominator'],
        examples: [
          { example: 'Simplify (x² − 4)/(x + 2).', solution: '(x − 2)(x + 2)/(x + 2) = x − 2, for x ≠ −2.' },
          { example: 'Check the result for x = 3.', solution: '(9 − 4)/(3 + 2) = 5/5 = 1 and 3 − 2 = 1 ✓.' },
        ],
        commonMistakes: [
          { mistake: '(x + 4)/(x + 2) = 4/2 = 2 (cancelling x).', fix: 'x is a term, not a factor; only common factors cancel.' },
          { mistake: 'Forgetting the condition x ≠ −2.', fix: 'Always state the values that make the denominator zero.' },
        ],
        practice: [
          { problem: 'Simplify (x² − 9)/(x² + 3x).', solution: '(x − 3)/x, x ≠ 0, x ≠ −3', steps: ['(x − 3)(x + 3)/(x(x + 3)).', '= (x − 3)/x.'] },
          { problem: 'Add 2/x + 3/x.', solution: '5/x, x ≠ 0', steps: ['Same denominator.', '(2 + 3)/x = 5/x.'] },
          { problem: 'Multiply (x + 1)/x · x²/(x² − 1).', solution: 'x/(x − 1)', steps: ['(x + 1) · x² / (x(x − 1)(x + 1)).', '= x/(x − 1).'] },
        ],
      },
      de: {
        title: 'Bruchterme',
        objectives: ['Die Definitionsmenge eines Bruchterms bestimmen und ihn kürzen.', 'Bruchterme addieren und multiplizieren.'],
        theory: 'Ein Bruchterm hat Polynome in Zähler und Nenner. Der Nenner darf nicht null sein: Bei (x² − 4)/(x + 2) muss x ≠ −2 gelten.\n\nKürzen: Zähler und Nenner faktorisieren und gemeinsame Faktoren kürzen (keine Summanden!): (x² − 4)/(x + 2) = (x − 2)(x + 2)/(x + 2) = x − 2, für x ≠ −2.\n\nAddieren: Hauptnenner bilden: 1/x + 1/(x + 1) = (x + 1 + x)/(x(x + 1)) = (2x + 1)/(x(x + 1)). Multiplizieren: Zähler mal Zähler, Nenner mal Nenner, dann kürzen.',
        keyPoints: ['Nenner ≠ 0', 'Faktoren kürzen, keine Summanden', 'Addieren: Hauptnenner'],
        examples: [
          { example: 'Kürzen Sie (x² − 4)/(x + 2).', solution: '(x − 2)(x + 2)/(x + 2) = x − 2, für x ≠ −2.' },
          { example: 'Machen Sie die Probe für x = 3.', solution: '(9 − 4)/(3 + 2) = 5/5 = 1 und 3 − 2 = 1 ✓.' },
        ],
        commonMistakes: [
          { mistake: '(x + 4)/(x + 2) = 4/2 = 2 (x gekürzt).', fix: 'x ist ein Summand, kein Faktor; nur gemeinsame Faktoren kürzen.' },
          { mistake: 'Die Bedingung x ≠ −2 vergessen.', fix: 'Immer die Werte angeben, für die der Nenner null wird.' },
        ],
        practice: [
          { problem: 'Kürzen Sie (x² − 9)/(x² + 3x).', solution: '(x − 3)/x, x ≠ 0, x ≠ −3', steps: ['(x − 3)(x + 3)/(x(x + 3)).', '= (x − 3)/x.'] },
          { problem: 'Addieren Sie 2/x + 3/x.', solution: '5/x, x ≠ 0', steps: ['Gleicher Nenner.', '(2 + 3)/x = 5/x.'] },
          { problem: 'Multiplizieren Sie (x + 1)/x · x²/(x² − 1).', solution: 'x/(x − 1)', steps: ['(x + 1) · x² / (x(x − 1)(x + 1)).', '= x/(x − 1).'] },
        ],
      },
    },
  ],
};
