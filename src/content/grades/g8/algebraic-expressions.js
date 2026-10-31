// Grade 8 · Theme 7: Algebraic expressions (16 hours)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g8-algebraic-expressions',
  i18n: {
    al: { title: 'Shprehjet shkronjore', description: 'Monomet, polinomet, katrori i binomit, diferenca e katrorëve, faktorizimi dhe veçimi i shkronjës nga formula.' },
    en: { title: 'Algebraic expressions', description: 'Monomials, polynomials, squaring a binomial, difference of two squares, factorising and changing the subject of a formula.' },
    de: { title: 'Terme', description: 'Monome, Polynome, binomische Formeln, dritte binomische Formel, Faktorisieren und Umstellen von Formeln.' },
  },
  lessons: [
    // ───────── 1. Monomials
    {
      slug: 'g8-algebraic-expressions-monomials',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Monomi', 'Monomial', 'Monom'), cells: ['−5x³y²', '7a', '4'] },
          { head: alt('Koeficienti', 'Coefficient', 'Koeffizient'), cells: ['−5', '7', '4'] },
          { head: alt('Shkalla', 'Degree', 'Grad'), cells: ['3 + 2 = 5', '1', '0'] },
        ],
        alt: alt('Tabela: monomet −5x³y², 7a dhe 4 me koeficientët dhe shkallët e tyre.', 'Table: the monomials −5x³y², 7a and 4 with their coefficients and degrees.', 'Tabelle: die Monome −5x³y², 7a und 4 mit Koeffizient und Grad.'),
      }],
      answers: {
        examples: [[['3 + 2', 5]], 'text'],
        practice: ['text', 'text', [['-3 * 2^2 * (-1)', 12]]],
      },
      al: {
        title: 'Monomet',
        objectives: ['Të gjeni koeficientin dhe shkallën e një monomi.', 'Të shumëzoni, pjesëtoni dhe ngrini në fuqi monome.'],
        theory: 'Monomi është prodhim i një numri (koeficienti) me fuqi të ndryshoreve me eksponentë natyrorë: −5x³y². Shkalla e monomit është shuma e eksponentëve: 3 + 2 = 5. Numri pa ndryshore ka shkallë 0.\n\nShumëzimi: shumëzojmë koeficientët dhe mbledhim eksponentët e së njëjtës ndryshore: 3x²y · 4xy³ = 12x³y⁴. Pjesëtimi: pjesëtojmë koeficientët dhe zbresim eksponentët: 12a⁵b² : 4a²b = 3a³b.\n\nFuqia e monomit: çdo faktor ngrihet në fuqi: (−2x³)² = 4x⁶.',
        keyPoints: ['Shkalla = shuma e eksponentëve', 'Shumëzim: koeficientët ·, eksponentët +', '(ax^m)^n = aⁿ · x^(m·n)'],
        examples: [
          { example: 'Sa është shkalla e monomit −5x³y²?', solution: '3 + 2 = 5.' },
          { example: 'Shumëzoni 3x²y · 4xy³.', solution: '3 · 4 = 12; x²⁺¹ = x³; y¹⁺³ = y⁴: 12x³y⁴.' },
        ],
        commonMistakes: [
          { mistake: '3x² · 4x = 12x²', fix: 'Eksponentët mblidhen: x² · x = x³, pra 12x³.' },
          { mistake: '(−2x³)² = −4x⁶', fix: 'Edhe −2 ngrihet në katror: (−2)² = 4, pra 4x⁶.' },
        ],
        practice: [
          { problem: 'Llogaritni (−2x³)².', solution: '4x⁶', steps: ['(−2)² = 4.', '(x³)² = x⁶.'] },
          { problem: 'Pjesëtoni 12a⁵b² : 4a²b.', solution: '3a³b', steps: ['12 : 4 = 3.', 'a⁵⁻² = a³; b²⁻¹ = b.'] },
          { problem: 'Njehsoni −3x²y për x = 2, y = −1.', solution: '12', steps: ['−3 · 4 · (−1).', '= 12.'] },
        ],
      },
      en: {
        title: 'Monomials',
        objectives: ['Find the coefficient and degree of a monomial.', 'Multiply, divide and raise monomials to a power.'],
        theory: 'A monomial is a product of a number (the coefficient) and powers of variables with whole-number exponents: −5x³y². The degree of a monomial is the sum of the exponents: 3 + 2 = 5. A number without variables has degree 0.\n\nMultiplying: multiply the coefficients and add the exponents of the same variable: 3x²y · 4xy³ = 12x³y⁴. Dividing: divide the coefficients and subtract the exponents: 12a⁵b² ÷ 4a²b = 3a³b.\n\nA power of a monomial: raise every factor to the power: (−2x³)² = 4x⁶.',
        keyPoints: ['Degree = sum of the exponents', 'Multiplying: coefficients ·, exponents +', '(ax^m)^n = aⁿ · x^(m·n)'],
        examples: [
          { example: 'What is the degree of the monomial −5x³y²?', solution: '3 + 2 = 5.' },
          { example: 'Multiply 3x²y · 4xy³.', solution: '3 · 4 = 12; x²⁺¹ = x³; y¹⁺³ = y⁴: 12x³y⁴.' },
        ],
        commonMistakes: [
          { mistake: '3x² · 4x = 12x²', fix: 'The exponents add: x² · x = x³, so 12x³.' },
          { mistake: '(−2x³)² = −4x⁶', fix: 'The −2 is squared too: (−2)² = 4, so 4x⁶.' },
        ],
        practice: [
          { problem: 'Work out (−2x³)².', solution: '4x⁶', steps: ['(−2)² = 4.', '(x³)² = x⁶.'] },
          { problem: 'Divide 12a⁵b² ÷ 4a²b.', solution: '3a³b', steps: ['12 ÷ 4 = 3.', 'a⁵⁻² = a³; b²⁻¹ = b.'] },
          { problem: 'Work out −3x²y for x = 2, y = −1.', solution: '12', steps: ['−3 · 4 · (−1).', '= 12.'] },
        ],
      },
      de: {
        title: 'Monome',
        objectives: ['Koeffizient und Grad eines Monoms bestimmen.', 'Monome multiplizieren, dividieren und potenzieren.'],
        theory: 'Ein Monom ist ein Produkt aus einer Zahl (dem Koeffizienten) und Potenzen von Variablen mit natürlichen Exponenten: −5x³y². Der Grad eines Monoms ist die Summe der Exponenten: 3 + 2 = 5. Eine Zahl ohne Variable hat den Grad 0.\n\nMultiplizieren: Koeffizienten multiplizieren, Exponenten gleicher Variablen addieren: 3x²y · 4xy³ = 12x³y⁴. Dividieren: Koeffizienten dividieren, Exponenten subtrahieren: 12a⁵b² : 4a²b = 3a³b.\n\nPotenz eines Monoms: jeden Faktor potenzieren: (−2x³)² = 4x⁶.',
        keyPoints: ['Grad = Summe der Exponenten', 'Multiplizieren: Koeffizienten ·, Exponenten +', '(ax^m)^n = aⁿ · x^(m·n)'],
        examples: [
          { example: 'Welchen Grad hat das Monom −5x³y²?', solution: '3 + 2 = 5.' },
          { example: 'Multiplizieren Sie 3x²y · 4xy³.', solution: '3 · 4 = 12; x²⁺¹ = x³; y¹⁺³ = y⁴: 12x³y⁴.' },
        ],
        commonMistakes: [
          { mistake: '3x² · 4x = 12x²', fix: 'Die Exponenten werden addiert: x² · x = x³, also 12x³.' },
          { mistake: '(−2x³)² = −4x⁶', fix: 'Auch −2 wird quadriert: (−2)² = 4, also 4x⁶.' },
        ],
        practice: [
          { problem: 'Berechnen Sie (−2x³)².', solution: '4x⁶', steps: ['(−2)² = 4.', '(x³)² = x⁶.'] },
          { problem: 'Dividieren Sie 12a⁵b² : 4a²b.', solution: '3a³b', steps: ['12 : 4 = 3.', 'a⁵⁻² = a³; b²⁻¹ = b.'] },
          { problem: 'Berechnen Sie −3x²y für x = 2, y = −1.', solution: '12', steps: ['−3 · 4 · (−1).', '= 12.'] },
        ],
      },
    },

    // ───────── 2. Polynomials
    {
      slug: 'g8-algebraic-expressions-polynomials',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: '·', cells: ['x', '+3'] },
          { head: 'x', cells: ['x²', '3x'] },
          { head: '−5', cells: ['−5x', '−15'] },
        ],
        highlight: [[1, 1], [2, 0]],
        caption: alt('(x + 3)(x − 5): çdo kufizë me çdo kufizë; 3x − 5x = −2x, pra x² − 2x − 15.', '(x + 3)(x − 5): every term times every term; 3x − 5x = −2x, so x² − 2x − 15.', '(x + 3)(x − 5): jedes Glied mal jedes Glied; 3x − 5x = −2x, also x² − 2x − 15.'),
        alt: alt('Tabela e shumëzimit të (x + 3) me (x − 5): x², 3x, −5x, −15.', 'Multiplication grid for (x + 3) times (x − 5): x², 3x, −5x, −15.', 'Multiplikationstabelle für (x + 3) mal (x − 5): x², 3x, −5x, −15.'),
      }],
      answers: {
        examples: ['text', 'text'],
        practice: ['text', 'text', [['3', 3]]],
      },
      al: {
        title: 'Polinomet',
        objectives: ['Të mblidhni dhe zbritni polinome.', 'Të shumëzoni polinom me monom dhe binom me binom.'],
        theory: 'Polinomi është shumë monomesh: 3x² − 2x + 1. Shkalla e polinomit është shkalla më e madhe e kufizave të tij.\n\nMbledhja dhe zbritja: heqim kllapat (para kllapës me minus ndryshojnë të gjitha shenjat) dhe reduktojmë kufizat e ngjashme: (3x² − 2x + 1) − (x² + 4x − 3) = 2x² − 6x + 4.\n\nShumëzimi: çdo kufizë e polinomit të parë shumëzohet me çdo kufizë të të dytit, pastaj reduktojmë: (x + 3)(x − 5) = x² − 5x + 3x − 15 = x² − 2x − 15.',
        keyPoints: ['−(a − b + c) = −a + b − c', 'a(b + c) = ab + ac', '(a + b)(c + d) = ac + ad + bc + bd'],
        examples: [
          { example: 'Llogaritni (3x² − 2x + 1) − (x² + 4x − 3).', solution: '3x² − 2x + 1 − x² − 4x + 3 = 2x² − 6x + 4.' },
          { example: 'Shumëzoni (x + 3)(x − 5).', solution: 'x² − 5x + 3x − 15 = x² − 2x − 15.' },
        ],
        commonMistakes: [
          { mistake: '−(x² + 4x − 3) = −x² + 4x − 3', fix: 'Minusi para kllapës ndryshon shenjën e çdo kufize: −x² − 4x + 3.' },
          { mistake: '(x + 3)(x − 5) = x² − 15', fix: 'Mungojnë kufizat e mesit: −5x + 3x = −2x.' },
        ],
        practice: [
          { problem: 'Shumëzoni 2x(3x − 4).', solution: '6x² − 8x', steps: ['2x · 3x = 6x².', '2x · (−4) = −8x.'] },
          { problem: 'Shumëzoni (2x − 1)(x + 4).', solution: '2x² + 7x − 4', steps: ['2x² + 8x − x − 4.', '= 2x² + 7x − 4.'] },
          { problem: 'Sa është shkalla e polinomit 4x³ − x + 7?', solution: '3', steps: ['Kufiza me shkallë më të madhe: 4x³.', 'Shkalla 3.'] },
        ],
      },
      en: {
        title: 'Polynomials',
        objectives: ['Add and subtract polynomials.', 'Multiply a polynomial by a monomial and a binomial by a binomial.'],
        theory: 'A polynomial is a sum of monomials: 3x² − 2x + 1. The degree of a polynomial is the highest degree of its terms.\n\nAdding and subtracting: remove the brackets (a minus in front of a bracket changes every sign) and collect like terms: (3x² − 2x + 1) − (x² + 4x − 3) = 2x² − 6x + 4.\n\nMultiplying: every term of the first polynomial times every term of the second, then collect: (x + 3)(x − 5) = x² − 5x + 3x − 15 = x² − 2x − 15.',
        keyPoints: ['−(a − b + c) = −a + b − c', 'a(b + c) = ab + ac', '(a + b)(c + d) = ac + ad + bc + bd'],
        examples: [
          { example: 'Work out (3x² − 2x + 1) − (x² + 4x − 3).', solution: '3x² − 2x + 1 − x² − 4x + 3 = 2x² − 6x + 4.' },
          { example: 'Multiply (x + 3)(x − 5).', solution: 'x² − 5x + 3x − 15 = x² − 2x − 15.' },
        ],
        commonMistakes: [
          { mistake: '−(x² + 4x − 3) = −x² + 4x − 3', fix: 'A minus in front of a bracket changes the sign of every term: −x² − 4x + 3.' },
          { mistake: '(x + 3)(x − 5) = x² − 15', fix: 'The middle terms are missing: −5x + 3x = −2x.' },
        ],
        practice: [
          { problem: 'Multiply 2x(3x − 4).', solution: '6x² − 8x', steps: ['2x · 3x = 6x².', '2x · (−4) = −8x.'] },
          { problem: 'Multiply (2x − 1)(x + 4).', solution: '2x² + 7x − 4', steps: ['2x² + 8x − x − 4.', '= 2x² + 7x − 4.'] },
          { problem: 'What is the degree of the polynomial 4x³ − x + 7?', solution: '3', steps: ['The term of highest degree: 4x³.', 'Degree 3.'] },
        ],
      },
      de: {
        title: 'Polynome',
        objectives: ['Polynome addieren und subtrahieren.', 'Ein Polynom mit einem Monom und zwei Binome miteinander multiplizieren.'],
        theory: 'Ein Polynom ist eine Summe von Monomen: 3x² − 2x + 1. Der Grad des Polynoms ist der höchste Grad seiner Glieder.\n\nAddieren und Subtrahieren: Klammern auflösen (ein Minus vor der Klammer ändert jedes Vorzeichen) und gleichartige Glieder zusammenfassen: (3x² − 2x + 1) − (x² + 4x − 3) = 2x² − 6x + 4.\n\nMultiplizieren: jedes Glied des ersten Polynoms mit jedem Glied des zweiten, dann zusammenfassen: (x + 3)(x − 5) = x² − 5x + 3x − 15 = x² − 2x − 15.',
        keyPoints: ['−(a − b + c) = −a + b − c', 'a(b + c) = ab + ac', '(a + b)(c + d) = ac + ad + bc + bd'],
        examples: [
          { example: 'Berechnen Sie (3x² − 2x + 1) − (x² + 4x − 3).', solution: '3x² − 2x + 1 − x² − 4x + 3 = 2x² − 6x + 4.' },
          { example: 'Multiplizieren Sie (x + 3)(x − 5).', solution: 'x² − 5x + 3x − 15 = x² − 2x − 15.' },
        ],
        commonMistakes: [
          { mistake: '−(x² + 4x − 3) = −x² + 4x − 3', fix: 'Ein Minus vor der Klammer ändert das Vorzeichen jedes Glieds: −x² − 4x + 3.' },
          { mistake: '(x + 3)(x − 5) = x² − 15', fix: 'Die mittleren Glieder fehlen: −5x + 3x = −2x.' },
        ],
        practice: [
          { problem: 'Multiplizieren Sie 2x(3x − 4).', solution: '6x² − 8x', steps: ['2x · 3x = 6x².', '2x · (−4) = −8x.'] },
          { problem: 'Multiplizieren Sie (2x − 1)(x + 4).', solution: '2x² + 7x − 4', steps: ['2x² + 8x − x − 4.', '= 2x² + 7x − 4.'] },
          { problem: 'Welchen Grad hat das Polynom 4x³ − x + 7?', solution: '3', steps: ['Glied mit dem höchsten Grad: 4x³.', 'Grad 3.'] },
        ],
      },
    },

    // ───────── 3. Square of a binomial
    {
      slug: 'g8-algebraic-expressions-binomial-square',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.6, xMax: 5.6, yMin: -0.6, yMax: 5.6 }, height: 220,
        shapes: [
          { kind: 'polygon', points: [[0, 0], [3, 0], [3, 3], [0, 3]], fill: true, color: 'primary', label: { at: [1.5, 1.5], text: 'a²' } },
          { kind: 'polygon', points: [[3, 0], [5, 0], [5, 3], [3, 3]], fill: true, color: 'secondary', label: { at: [4, 1.5], text: 'ab' } },
          { kind: 'polygon', points: [[0, 3], [3, 3], [3, 5], [0, 5]], fill: true, color: 'secondary', label: { at: [1.5, 4], text: 'ab' } },
          { kind: 'polygon', points: [[3, 3], [5, 3], [5, 5], [3, 5]], fill: true, color: 'success', label: { at: [4, 4], text: 'b²' } },
          { kind: 'label', at: [1.5, -0.35], text: 'a' }, { kind: 'label', at: [4, -0.35], text: 'b' },
        ],
        caption: alt('Katrori me brinjë a + b përbëhet nga a², dy drejtkëndësha ab dhe b²: (a + b)² = a² + 2ab + b².', 'The square with side a + b is made of a², two ab rectangles and b²: (a + b)² = a² + 2ab + b².', 'Das Quadrat mit Seite a + b besteht aus a², zwei Rechtecken ab und b²: (a + b)² = a² + 2ab + b².'),
        alt: alt('Katror i ndarë në katër pjesë: a², ab, ab dhe b².', 'A square divided into four parts: a², ab, ab and b².', 'Ein Quadrat, geteilt in vier Teile: a², ab, ab und b².'),
      }],
      answers: {
        examples: ['text', [['41^2', 1681]]],
        practice: ['text', 'text', [['99^2', 9801]]],
      },
      al: {
        title: 'Katrori i binomit',
        objectives: ['Të zbatoni formulat (a ± b)² = a² ± 2ab + b².', 'Të përdorni formulat për llogaritje me mend.'],
        theory: 'Katrori i shumës: (a + b)² = a² + 2ab + b². Katrori i ndryshimit: (a − b)² = a² − 2ab + b². Fjalë për fjalë: katrori i të parit, dyfishi i prodhimit, katrori i të dytit.\n\nFigura e katrorit me brinjë a + b tregon pse ka dy drejtkëndësha ab: prandaj kufiza e mesit është 2ab.\n\nShembull: (2a − 3b)² = (2a)² − 2 · 2a · 3b + (3b)² = 4a² − 12ab + 9b². Llogaritje me mend: 41² = (40 + 1)² = 1 600 + 80 + 1 = 1 681.',
        keyPoints: ['(a + b)² = a² + 2ab + b²', '(a − b)² = a² − 2ab + b²', '(a + b)² ≠ a² + b²'],
        examples: [
          { example: 'Zbërtheni (2a − 3b)².', solution: '(2a)² − 2 · 2a · 3b + (3b)² = 4a² − 12ab + 9b².' },
          { example: 'Llogaritni me mend 41².', solution: '(40 + 1)² = 1 600 + 80 + 1 = 1 681.' },
        ],
        commonMistakes: [
          { mistake: '(x + 5)² = x² + 25', fix: 'Mungon dyfishi i prodhimit: x² + 10x + 25.' },
          { mistake: '(2a)² = 2a²', fix: 'Katrorohet edhe koeficienti: (2a)² = 4a².' },
        ],
        practice: [
          { problem: 'Zbërtheni (x + 5)².', solution: 'x² + 10x + 25', steps: ['x² + 2 · x · 5 + 5².', '= x² + 10x + 25.'] },
          { problem: 'Zbërtheni (3x − 1)².', solution: '9x² − 6x + 1', steps: ['(3x)² − 2 · 3x · 1 + 1².', '= 9x² − 6x + 1.'] },
          { problem: 'Llogaritni me mend 99².', solution: '9 801', steps: ['(100 − 1)² = 10 000 − 200 + 1.', '= 9 801.'] },
        ],
      },
      en: {
        title: 'Squaring a binomial',
        objectives: ['Use the formulas (a ± b)² = a² ± 2ab + b².', 'Use them for mental arithmetic.'],
        theory: 'Square of a sum: (a + b)² = a² + 2ab + b². Square of a difference: (a − b)² = a² − 2ab + b². In words: first squared, twice the product, second squared.\n\nThe picture of the square with side a + b shows why there are two ab rectangles: that is why the middle term is 2ab.\n\nExample: (2a − 3b)² = (2a)² − 2 · 2a · 3b + (3b)² = 4a² − 12ab + 9b². Mental arithmetic: 41² = (40 + 1)² = 1 600 + 80 + 1 = 1 681.',
        keyPoints: ['(a + b)² = a² + 2ab + b²', '(a − b)² = a² − 2ab + b²', '(a + b)² ≠ a² + b²'],
        examples: [
          { example: 'Expand (2a − 3b)².', solution: '(2a)² − 2 · 2a · 3b + (3b)² = 4a² − 12ab + 9b².' },
          { example: 'Work out 41² in your head.', solution: '(40 + 1)² = 1 600 + 80 + 1 = 1 681.' },
        ],
        commonMistakes: [
          { mistake: '(x + 5)² = x² + 25', fix: 'Twice the product is missing: x² + 10x + 25.' },
          { mistake: '(2a)² = 2a²', fix: 'The coefficient is squared too: (2a)² = 4a².' },
        ],
        practice: [
          { problem: 'Expand (x + 5)².', solution: 'x² + 10x + 25', steps: ['x² + 2 · x · 5 + 5².', '= x² + 10x + 25.'] },
          { problem: 'Expand (3x − 1)².', solution: '9x² − 6x + 1', steps: ['(3x)² − 2 · 3x · 1 + 1².', '= 9x² − 6x + 1.'] },
          { problem: 'Work out 99² in your head.', solution: '9 801', steps: ['(100 − 1)² = 10 000 − 200 + 1.', '= 9 801.'] },
        ],
      },
      de: {
        title: 'Die binomischen Formeln',
        objectives: ['Die Formeln (a ± b)² = a² ± 2ab + b² anwenden.', 'Damit im Kopf rechnen.'],
        theory: 'Erste binomische Formel: (a + b)² = a² + 2ab + b². Zweite binomische Formel: (a − b)² = a² − 2ab + b². In Worten: erstes Quadrat, doppeltes Produkt, zweites Quadrat.\n\nDas Bild des Quadrats mit der Seite a + b zeigt, warum es zwei Rechtecke ab gibt: Deshalb lautet das mittlere Glied 2ab.\n\nBeispiel: (2a − 3b)² = (2a)² − 2 · 2a · 3b + (3b)² = 4a² − 12ab + 9b². Kopfrechnen: 41² = (40 + 1)² = 1 600 + 80 + 1 = 1 681.',
        keyPoints: ['(a + b)² = a² + 2ab + b²', '(a − b)² = a² − 2ab + b²', '(a + b)² ≠ a² + b²'],
        examples: [
          { example: 'Multiplizieren Sie (2a − 3b)² aus.', solution: '(2a)² − 2 · 2a · 3b + (3b)² = 4a² − 12ab + 9b².' },
          { example: 'Berechnen Sie 41² im Kopf.', solution: '(40 + 1)² = 1 600 + 80 + 1 = 1 681.' },
        ],
        commonMistakes: [
          { mistake: '(x + 5)² = x² + 25', fix: 'Das doppelte Produkt fehlt: x² + 10x + 25.' },
          { mistake: '(2a)² = 2a²', fix: 'Auch der Koeffizient wird quadriert: (2a)² = 4a².' },
        ],
        practice: [
          { problem: 'Multiplizieren Sie (x + 5)² aus.', solution: 'x² + 10x + 25', steps: ['x² + 2 · x · 5 + 5².', '= x² + 10x + 25.'] },
          { problem: 'Multiplizieren Sie (3x − 1)² aus.', solution: '9x² − 6x + 1', steps: ['(3x)² − 2 · 3x · 1 + 1².', '= 9x² − 6x + 1.'] },
          { problem: 'Berechnen Sie 99² im Kopf.', solution: '9 801', steps: ['(100 − 1)² = 10 000 − 200 + 1.', '= 9 801.'] },
        ],
      },
    },

    // ───────── 4. Difference of squares
    {
      slug: 'g8-algebraic-expressions-difference-of-squares',
      visuals: [{
        type: 'geoFigure', view: { xMin: -0.6, xMax: 13.6, yMin: -0.8, yMax: 5.6 }, height: 170,
        shapes: [
          { kind: 'polygon', points: [[0, 0], [5, 0], [5, 3], [3, 3], [3, 5], [0, 5]], fill: true, color: 'primary', label: { at: [1.6, 2], text: 'a² − b²' } },
          { kind: 'polygon', points: [[3, 3], [5, 3], [5, 5], [3, 5]], color: 'muted', dashed: true, label: { at: [4, 4], text: 'b²' } },
          { kind: 'polygon', points: [[7, 1], [13, 1], [13, 4], [7, 4]], fill: true, color: 'primary', label: { at: [10, 2.5], text: '(a + b)(a − b)' } },
          { kind: 'label', at: [10, 0.55], text: 'a + b' }, { kind: 'label', at: [13.45, 2.5], text: 'a − b' },
        ],
        caption: alt('Nga katrori a² hiqet katrori b²; pjesa që mbetet riorganizohet në drejtkëndësh (a + b) × (a − b).', 'The square b² is cut from the square a²; what is left can be rearranged into an (a + b) × (a − b) rectangle.', 'Aus dem Quadrat a² wird b² herausgeschnitten; der Rest lässt sich zu einem Rechteck (a + b) × (a − b) umlegen.'),
        alt: alt('Majtas: katror me një katror më të vogël të hequr; djathtas: drejtkëndësh me brinjë a + b dhe a − b.', 'Left: a square with a smaller square removed; right: a rectangle with sides a + b and a − b.', 'Links: ein Quadrat ohne kleineres Eckquadrat; rechts: ein Rechteck mit den Seiten a + b und a − b.'),
      }],
      answers: {
        examples: ['text', [['52 * 48', 2496]]],
        practice: ['text', [['103 * 97', 9991]], [['25^2 - 15^2', 400]]],
      },
      al: {
        title: 'Diferenca e katrorëve',
        objectives: ['Të zbatoni (a − b)(a + b) = a² − b².', 'Ta përdorni formulën për llogaritje dhe faktorizim.'],
        theory: 'Prodhimi i ndryshimit dhe shumës së dy numrave është diferenca e katrorëve: (a − b)(a + b) = a² − b². Kufizat e mesit (−ab dhe +ab) shuajnë njëra-tjetrën.\n\nNga e djathta në të majtë, formula faktorizon: x² − 16 = (x − 4)(x + 4); 49x² − 1 = (7x − 1)(7x + 1).\n\nLlogaritje me mend: 52 · 48 = (50 + 2)(50 − 2) = 2 500 − 4 = 2 496. Gjithashtu 25² − 15² = (25 − 15)(25 + 15) = 10 · 40 = 400.',
        keyPoints: ['(a − b)(a + b) = a² − b²', 'a² − b² = (a − b)(a + b)', 'a² + b² nuk faktorizohet kështu'],
        examples: [
          { example: 'Shumëzoni (x − 4)(x + 4).', solution: 'x² − 16.' },
          { example: 'Llogaritni me mend 52 · 48.', solution: '(50 + 2)(50 − 2) = 2 500 − 4 = 2 496.' },
        ],
        commonMistakes: [
          { mistake: '(x − 4)(x + 4) = x² − 8x − 16', fix: 'Kufizat e mesit shuhen: −4x + 4x = 0, pra x² − 16.' },
          { mistake: 'x² + 9 = (x − 3)(x + 3)', fix: 'Formula vlen vetëm për ndryshimin: x² − 9.' },
        ],
        practice: [
          { problem: 'Faktorizoni 49x² − 1.', solution: '(7x − 1)(7x + 1)', steps: ['49x² = (7x)², 1 = 1².', '(7x − 1)(7x + 1).'] },
          { problem: 'Llogaritni me mend 103 · 97.', solution: '9 991', steps: ['(100 + 3)(100 − 3).', '10 000 − 9 = 9 991.'] },
          { problem: 'Llogaritni 25² − 15² pa i ngritur numrat në katror.', solution: '400', steps: ['(25 − 15)(25 + 15).', '10 · 40 = 400.'] },
        ],
      },
      en: {
        title: 'Difference of two squares',
        objectives: ['Use (a − b)(a + b) = a² − b².', 'Use the formula for mental arithmetic and factorising.'],
        theory: 'The product of the difference and the sum of two numbers is the difference of their squares: (a − b)(a + b) = a² − b². The middle terms (−ab and +ab) cancel.\n\nRead from right to left, the formula factorises: x² − 16 = (x − 4)(x + 4); 49x² − 1 = (7x − 1)(7x + 1).\n\nMental arithmetic: 52 · 48 = (50 + 2)(50 − 2) = 2 500 − 4 = 2 496. Also 25² − 15² = (25 − 15)(25 + 15) = 10 · 40 = 400.',
        keyPoints: ['(a − b)(a + b) = a² − b²', 'a² − b² = (a − b)(a + b)', 'a² + b² does not factorise like this'],
        examples: [
          { example: 'Multiply (x − 4)(x + 4).', solution: 'x² − 16.' },
          { example: 'Work out 52 · 48 in your head.', solution: '(50 + 2)(50 − 2) = 2 500 − 4 = 2 496.' },
        ],
        commonMistakes: [
          { mistake: '(x − 4)(x + 4) = x² − 8x − 16', fix: 'The middle terms cancel: −4x + 4x = 0, so x² − 16.' },
          { mistake: 'x² + 9 = (x − 3)(x + 3)', fix: 'The formula only works for a difference: x² − 9.' },
        ],
        practice: [
          { problem: 'Factorise 49x² − 1.', solution: '(7x − 1)(7x + 1)', steps: ['49x² = (7x)², 1 = 1².', '(7x − 1)(7x + 1).'] },
          { problem: 'Work out 103 · 97 in your head.', solution: '9 991', steps: ['(100 + 3)(100 − 3).', '10 000 − 9 = 9 991.'] },
          { problem: 'Work out 25² − 15² without squaring the numbers.', solution: '400', steps: ['(25 − 15)(25 + 15).', '10 · 40 = 400.'] },
        ],
      },
      de: {
        title: 'Die dritte binomische Formel',
        objectives: ['(a − b)(a + b) = a² − b² anwenden.', 'Die Formel zum Kopfrechnen und Faktorisieren nutzen.'],
        theory: 'Das Produkt aus Differenz und Summe zweier Zahlen ist die Differenz ihrer Quadrate: (a − b)(a + b) = a² − b². Die mittleren Glieder (−ab und +ab) heben sich auf.\n\nVon rechts nach links gelesen, faktorisiert die Formel: x² − 16 = (x − 4)(x + 4); 49x² − 1 = (7x − 1)(7x + 1).\n\nKopfrechnen: 52 · 48 = (50 + 2)(50 − 2) = 2 500 − 4 = 2 496. Ebenso 25² − 15² = (25 − 15)(25 + 15) = 10 · 40 = 400.',
        keyPoints: ['(a − b)(a + b) = a² − b²', 'a² − b² = (a − b)(a + b)', 'a² + b² lässt sich so nicht zerlegen'],
        examples: [
          { example: 'Multiplizieren Sie (x − 4)(x + 4).', solution: 'x² − 16.' },
          { example: 'Berechnen Sie 52 · 48 im Kopf.', solution: '(50 + 2)(50 − 2) = 2 500 − 4 = 2 496.' },
        ],
        commonMistakes: [
          { mistake: '(x − 4)(x + 4) = x² − 8x − 16', fix: 'Die mittleren Glieder heben sich auf: −4x + 4x = 0, also x² − 16.' },
          { mistake: 'x² + 9 = (x − 3)(x + 3)', fix: 'Die Formel gilt nur für eine Differenz: x² − 9.' },
        ],
        practice: [
          { problem: 'Faktorisieren Sie 49x² − 1.', solution: '(7x − 1)(7x + 1)', steps: ['49x² = (7x)², 1 = 1².', '(7x − 1)(7x + 1).'] },
          { problem: 'Berechnen Sie 103 · 97 im Kopf.', solution: '9 991', steps: ['(100 + 3)(100 − 3).', '10 000 − 9 = 9 991.'] },
          { problem: 'Berechnen Sie 25² − 15², ohne die Zahlen zu quadrieren.', solution: '400', steps: ['(25 − 15)(25 + 15).', '10 · 40 = 400.'] },
        ],
      },
    },

    // ───────── 5. Factorising
    {
      slug: 'g8-algebraic-expressions-factoring',
      visuals: [{
        type: 'valueTable',
        rows: [
          { head: alt('Metoda', 'Method', 'Methode'), cells: [alt('Faktori i përbashkët', 'Common factor', 'Ausklammern'), alt('Grupimi', 'Grouping', 'Gruppieren'), alt('Formulat', 'Identities', 'Binomische Formeln')] },
          { head: alt('Shembull', 'Example', 'Beispiel'), cells: ['6x²y − 9xy² = 3xy(2x − 3y)', 'ax + ay + 3x + 3y = (a + 3)(x + y)', 'x² − 10x + 25 = (x − 5)²'] },
        ],
        alt: alt('Tabela e tri metodave të faktorizimit me nga një shembull.', 'Table of three factorising methods, each with an example.', 'Tabelle von drei Methoden des Faktorisierens mit je einem Beispiel.'),
      }],
      answers: {
        examples: ['text', 'text'],
        practice: ['text', 'text', 'text'],
      },
      al: {
        title: 'Faktorizimi',
        objectives: ['Të nxirrni faktorin e përbashkët para kllapave.', 'Të faktorizoni me grupim dhe me formulat e njohura.'],
        theory: 'Faktorizimi e shndërron shumën në prodhim. Hapi i parë është gjithmonë nxjerrja e faktorit të përbashkët më të madh: 6x²y − 9xy² = 3xy(2x − 3y) (SHMV(6, 9) = 3, fuqitë më të vogla x dhe y).\n\nGrupimi: kur katër kufiza nuk kanë faktor të përbashkët, i grupojmë dyshe: ax + ay + 3x + 3y = a(x + y) + 3(x + y) = (a + 3)(x + y).\n\nFormulat: a² − b² = (a − b)(a + b); a² ± 2ab + b² = (a ± b)². Kontroll: shumëzoni faktorët dhe duhet të dalë shprehja fillestare.',
        keyPoints: ['1. Faktori i përbashkët', '2. Grupimi (4 kufiza)', '3. Formulat; kontroll me shumëzim'],
        examples: [
          { example: 'Faktorizoni 6x²y − 9xy².', solution: '3xy(2x − 3y). Kontroll: 3xy · 2x − 3xy · 3y = 6x²y − 9xy².' },
          { example: 'Faktorizoni x² − 10x + 25.', solution: 'x² − 2 · x · 5 + 5² = (x − 5)².' },
        ],
        commonMistakes: [
          { mistake: '6x²y − 9xy² = 3(2x²y − 3xy²)', fix: 'Faktorizimi nuk ka mbaruar: edhe xy është i përbashkët.' },
          { mistake: '5x² − 20 = 5(x² − 4) dhe ndalet.', fix: 'x² − 4 faktorizohet më tej: 5(x − 2)(x + 2).' },
        ],
        practice: [
          { problem: 'Faktorizoni 4a² − 9.', solution: '(2a − 3)(2a + 3)', steps: ['4a² = (2a)², 9 = 3².', '(2a − 3)(2a + 3).'] },
          { problem: 'Faktorizoni ax + ay + 3x + 3y.', solution: '(a + 3)(x + y)', steps: ['a(x + y) + 3(x + y).', '(a + 3)(x + y).'] },
          { problem: 'Faktorizoni plotësisht 5x² − 20.', solution: '5(x − 2)(x + 2)', steps: ['5(x² − 4).', '5(x − 2)(x + 2).'] },
        ],
      },
      en: {
        title: 'Factorising',
        objectives: ['Take out the common factor.', 'Factorise by grouping and with the known identities.'],
        theory: 'Factorising turns a sum into a product. The first step is always to take out the highest common factor: 6x²y − 9xy² = 3xy(2x − 3y) (HCF(6, 9) = 3, the lowest powers x and y).\n\nGrouping: when four terms have no common factor, group them in pairs: ax + ay + 3x + 3y = a(x + y) + 3(x + y) = (a + 3)(x + y).\n\nIdentities: a² − b² = (a − b)(a + b); a² ± 2ab + b² = (a ± b)². Check: multiply the factors out and you must get the original expression.',
        keyPoints: ['1. Common factor', '2. Grouping (4 terms)', '3. Identities; check by multiplying'],
        examples: [
          { example: 'Factorise 6x²y − 9xy².', solution: '3xy(2x − 3y). Check: 3xy · 2x − 3xy · 3y = 6x²y − 9xy².' },
          { example: 'Factorise x² − 10x + 25.', solution: 'x² − 2 · x · 5 + 5² = (x − 5)².' },
        ],
        commonMistakes: [
          { mistake: '6x²y − 9xy² = 3(2x²y − 3xy²)', fix: 'Not finished: xy is common as well.' },
          { mistake: '5x² − 20 = 5(x² − 4) and stopping.', fix: 'x² − 4 factorises further: 5(x − 2)(x + 2).' },
        ],
        practice: [
          { problem: 'Factorise 4a² − 9.', solution: '(2a − 3)(2a + 3)', steps: ['4a² = (2a)², 9 = 3².', '(2a − 3)(2a + 3).'] },
          { problem: 'Factorise ax + ay + 3x + 3y.', solution: '(a + 3)(x + y)', steps: ['a(x + y) + 3(x + y).', '(a + 3)(x + y).'] },
          { problem: 'Factorise fully 5x² − 20.', solution: '5(x − 2)(x + 2)', steps: ['5(x² − 4).', '5(x − 2)(x + 2).'] },
        ],
      },
      de: {
        title: 'Faktorisieren',
        objectives: ['Den gemeinsamen Faktor ausklammern.', 'Durch Gruppieren und mit den binomischen Formeln faktorisieren.'],
        theory: 'Faktorisieren verwandelt eine Summe in ein Produkt. Der erste Schritt ist immer, den größten gemeinsamen Faktor auszuklammern: 6x²y − 9xy² = 3xy(2x − 3y) (ggT(6, 9) = 3, die kleinsten Potenzen x und y).\n\nGruppieren: Haben vier Glieder keinen gemeinsamen Faktor, fasst man sie paarweise zusammen: ax + ay + 3x + 3y = a(x + y) + 3(x + y) = (a + 3)(x + y).\n\nBinomische Formeln: a² − b² = (a − b)(a + b); a² ± 2ab + b² = (a ± b)². Probe: Faktoren ausmultiplizieren, es muss der Ausgangsterm herauskommen.',
        keyPoints: ['1. Ausklammern', '2. Gruppieren (4 Glieder)', '3. Binomische Formeln; Probe durch Ausmultiplizieren'],
        examples: [
          { example: 'Faktorisieren Sie 6x²y − 9xy².', solution: '3xy(2x − 3y). Probe: 3xy · 2x − 3xy · 3y = 6x²y − 9xy².' },
          { example: 'Faktorisieren Sie x² − 10x + 25.', solution: 'x² − 2 · x · 5 + 5² = (x − 5)².' },
        ],
        commonMistakes: [
          { mistake: '6x²y − 9xy² = 3(2x²y − 3xy²)', fix: 'Nicht fertig: Auch xy ist gemeinsam.' },
          { mistake: '5x² − 20 = 5(x² − 4) und aufhören.', fix: 'x² − 4 lässt sich weiter zerlegen: 5(x − 2)(x + 2).' },
        ],
        practice: [
          { problem: 'Faktorisieren Sie 4a² − 9.', solution: '(2a − 3)(2a + 3)', steps: ['4a² = (2a)², 9 = 3².', '(2a − 3)(2a + 3).'] },
          { problem: 'Faktorisieren Sie ax + ay + 3x + 3y.', solution: '(a + 3)(x + y)', steps: ['a(x + y) + 3(x + y).', '(a + 3)(x + y).'] },
          { problem: 'Faktorisieren Sie vollständig 5x² − 20.', solution: '5(x − 2)(x + 2)', steps: ['5(x² − 4).', '5(x − 2)(x + 2).'] },
        ],
      },
    },

    // ───────── 6. Changing the subject of a formula
    {
      slug: 'g8-algebraic-expressions-rearranging',
      noVisual: 'Rearranging a formula is shown step by step in the worked examples.',
      answers: {
        examples: ['text', [['300 / (pi * 5^2)', 3.82, 0.005, '3.82']]],
        practice: ['text', [['(77 - 32) / 1.8', 25]], [['150 / 60', 2.5]]],
      },
      al: {
        title: 'Veçimi i shkronjës',
        objectives: ['Të shprehni një ndryshore nga një formulë.', 'Ta përdorni formulën e re për të llogaritur.'],
        theory: 'Të veçosh një shkronjë do të thotë ta shkruash formulën në trajtën "shkronja = …". Veprojmë si te ekuacionet: me veprimet e kundërta, të njëjtat në të dyja anët.\n\nV = πr²h: h është shumëzuar me πr², prandaj pjesëtojmë: h = V/(πr²). P = 2(a + b): pjesëtojmë me 2, pastaj zbresim a: b = P/2 − a.\n\nVeprimet e kundërta kryhen në radhë të kundërt: te F = 1,8C + 32 fillimisht zbresim 32, pastaj pjesëtojmë me 1,8: C = (F − 32)/1,8.',
        keyPoints: ['Veprime të kundërta, në të dyja anët', 'Radha e kundërt e veprimeve', 'Kontroll: zëvendësoni vlera'],
        examples: [
          { example: 'Nga V = πr²h shprehni h.', solution: 'Pjesëtojmë të dyja anët me πr²: h = V/(πr²).' },
          { example: 'Cilindri ka V = 300 cm³ dhe r = 5 cm. Sa është h?', solution: 'h = 300/(25π) ≈ 3,82 cm.' },
        ],
        commonMistakes: [
          { mistake: 'Nga V = πr²h: h = V − πr²', fix: 'πr² është faktor, jo kufizë; veprimi i kundërt është pjesëtimi.' },
          { mistake: 'Nga F = 1,8C + 32: C = F/1,8 − 32', fix: 'Fillimisht zbritet 32, pastaj pjesëtohet: C = (F − 32)/1,8.' },
        ],
        practice: [
          { problem: 'Nga P = 2(a + b) shprehni b.', solution: 'b = P/2 − a', steps: ['P/2 = a + b.', 'b = P/2 − a.'] },
          { problem: 'F = 1,8C + 32. Sa °C janë 77 °F?', solution: '25 °C', steps: ['C = (F − 32)/1,8.', '(77 − 32)/1,8 = 45/1,8 = 25.'] },
          { problem: 'Nga s = v · t shprehni t dhe gjeni t për s = 150 km, v = 60 km/h.', solution: 't = s/v = 2,5 h', steps: ['t = s/v.', '150/60 = 2,5 h.'] },
        ],
      },
      en: {
        title: 'Changing the subject of a formula',
        objectives: ['Make a given letter the subject of a formula.', 'Use the new formula to calculate.'],
        theory: 'Making a letter the subject means writing the formula as "letter = …". Work as with equations: inverse operations, the same on both sides.\n\nV = πr²h: h has been multiplied by πr², so divide: h = V/(πr²). P = 2(a + b): divide by 2, then subtract a: b = P/2 − a.\n\nInverse operations are done in reverse order: for F = 1.8C + 32 first subtract 32, then divide by 1.8: C = (F − 32)/1.8.',
        keyPoints: ['Inverse operations, on both sides', 'Reverse order of operations', 'Check: substitute values'],
        examples: [
          { example: 'Make h the subject of V = πr²h.', solution: 'Divide both sides by πr²: h = V/(πr²).' },
          { example: 'A cylinder has V = 300 cm³ and r = 5 cm. What is h?', solution: 'h = 300/(25π) ≈ 3.82 cm.' },
        ],
        commonMistakes: [
          { mistake: 'From V = πr²h: h = V − πr²', fix: 'πr² is a factor, not a term; the inverse operation is division.' },
          { mistake: 'From F = 1.8C + 32: C = F/1.8 − 32', fix: 'Subtract 32 first, then divide: C = (F − 32)/1.8.' },
        ],
        practice: [
          { problem: 'Make b the subject of P = 2(a + b).', solution: 'b = P/2 − a', steps: ['P/2 = a + b.', 'b = P/2 − a.'] },
          { problem: 'F = 1.8C + 32. How many °C is 77 °F?', solution: '25 °C', steps: ['C = (F − 32)/1.8.', '(77 − 32)/1.8 = 45/1.8 = 25.'] },
          { problem: 'Make t the subject of s = v · t and find t for s = 150 km, v = 60 km/h.', solution: 't = s/v = 2.5 h', steps: ['t = s/v.', '150/60 = 2.5 h.'] },
        ],
      },
      de: {
        title: 'Formeln umstellen',
        objectives: ['Eine Formel nach einer Variablen auflösen.', 'Mit der umgestellten Formel rechnen.'],
        theory: 'Eine Formel nach einer Variablen auflösen heißt, sie in die Form „Variable = …“ zu bringen. Man geht vor wie bei Gleichungen: Umkehroperationen, auf beiden Seiten gleich.\n\nV = πr²h: h wurde mit πr² multipliziert, also teilen: h = V/(πr²). u = 2(a + b): durch 2 teilen, dann a subtrahieren: b = u/2 − a.\n\nDie Umkehroperationen werden in umgekehrter Reihenfolge ausgeführt: Bei F = 1,8C + 32 erst 32 subtrahieren, dann durch 1,8 teilen: C = (F − 32)/1,8.',
        keyPoints: ['Umkehroperationen, auf beiden Seiten', 'Umgekehrte Reihenfolge', 'Probe: Werte einsetzen'],
        examples: [
          { example: 'Lösen Sie V = πr²h nach h auf.', solution: 'Beide Seiten durch πr² teilen: h = V/(πr²).' },
          { example: 'Ein Zylinder hat V = 300 cm³ und r = 5 cm. Wie groß ist h?', solution: 'h = 300/(25π) ≈ 3,82 cm.' },
        ],
        commonMistakes: [
          { mistake: 'Aus V = πr²h: h = V − πr²', fix: 'πr² ist ein Faktor, kein Summand; die Umkehroperation ist das Teilen.' },
          { mistake: 'Aus F = 1,8C + 32: C = F/1,8 − 32', fix: 'Erst 32 subtrahieren, dann teilen: C = (F − 32)/1,8.' },
        ],
        practice: [
          { problem: 'Lösen Sie u = 2(a + b) nach b auf.', solution: 'b = u/2 − a', steps: ['u/2 = a + b.', 'b = u/2 − a.'] },
          { problem: 'F = 1,8C + 32. Wie viel °C sind 77 °F?', solution: '25 °C', steps: ['C = (F − 32)/1,8.', '(77 − 32)/1,8 = 45/1,8 = 25.'] },
          { problem: 'Lösen Sie s = v · t nach t auf und bestimmen Sie t für s = 150 km, v = 60 km/h.', solution: 't = s/v = 2,5 h', steps: ['t = s/v.', '150/60 = 2,5 h.'] },
        ],
      },
    },
  ],
};
