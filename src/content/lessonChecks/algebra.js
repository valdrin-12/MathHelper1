// Questions for the algebra courses (short notation, see index.js).
export default {
  'alg-003': [
    // Absolute-value inequalities
    [
      { a: 0, t: 'n', v: 7,
        al: ['Sa është |−7|?', 'Vlera absolute është largësia nga zero: |−7| = 7.'],
        en: ['What is |−7|?', 'Absolute value is the distance from zero: |−7| = 7.'],
        de: ['Wie viel ist |−7|?', 'Der Betrag ist der Abstand von null: |−7| = 7.'] },
      { a: 1, t: 'c', k: 0,
        al: ['Zgjidhni |x| < 4.', ['−4 < x < 4', 'x < 4', 'x < −4 ose x > 4', 'x > −4'], '|x| < a do të thotë −a < x < a.'],
        en: ['Solve |x| < 4.', ['−4 < x < 4', 'x < 4', 'x < −4 or x > 4', 'x > −4'], '|x| < a means −a < x < a.'],
        de: ['Lösen Sie |x| < 4.', ['−4 < x < 4', 'x < 4', 'x < −4 oder x > 4', 'x > −4'], '|x| < a bedeutet −a < x < a.'] },
    ],
    // Systems of inequalities
    [
      { a: 0, t: 'c', k: 1,
        al: ['Cila është zgjidhja e sistemit x > 1 dhe x < 5?', ['x > 1', '1 < x < 5', 'x < 5', 'nuk ka zgjidhje'], 'Duhet të vlejnë të dyja: pjesa e përbashkët është 1 < x < 5.'],
        en: ['What solves the system x > 1 and x < 5?', ['x > 1', '1 < x < 5', 'x < 5', 'no solution'], 'Both must hold: the common part is 1 < x < 5.'],
        de: ['Was ist die Lösung des Systems x > 1 und x < 5?', ['x > 1', '1 < x < 5', 'x < 5', 'keine Lösung'], 'Beides muss gelten: der gemeinsame Teil ist 1 < x < 5.'] },
      { a: 1, t: 'tf', k: false,
        al: ['Sistemi x > 6 dhe x < 2 ka zgjidhje.', 'E gabuar: asnjë numër nuk është njëkohësisht më i madh se 6 dhe më i vogël se 2.'],
        en: ['The system x > 6 and x < 2 has a solution.', 'False: no number is both greater than 6 and less than 2.'],
        de: ['Das System x > 6 und x < 2 hat eine Lösung.', 'Falsch: Keine Zahl ist zugleich größer als 6 und kleiner als 2.'] },
    ],
    // Applications of inequalities
    [
      { a: 0, t: 'c', k: 2,
        al: ['"Të paktën 18" shkruhet:', ['x > 18', 'x < 18', 'x ≥ 18', 'x ≤ 18'], '"Të paktën" përfshin edhe vetë vlerën: x ≥ 18.'],
        en: ['"At least 18" is written as:', ['x > 18', 'x < 18', 'x ≥ 18', 'x ≤ 18'], '"At least" includes the value itself: x ≥ 18.'],
        de: ['„Mindestens 18“ schreibt man als:', ['x > 18', 'x < 18', 'x ≥ 18', 'x ≤ 18'], '„Mindestens“ schließt den Wert selbst ein: x ≥ 18.'] },
      { a: 1, t: 'n', v: 12,
        al: ['Një biletë kushton 4 € dhe keni 50 €. Sa bileta mund të blini së shumti?', '4x ≤ 50 → x ≤ 12,5, pra së shumti 12 bileta.'],
        en: ['A ticket costs €4 and you have €50. What is the greatest number of tickets you can buy?', '4x ≤ 50 → x ≤ 12.5, so at most 12 tickets.'],
        de: ['Eine Karte kostet 4 € und Sie haben 50 €. Wie viele Karten können Sie höchstens kaufen?', '4x ≤ 50 → x ≤ 12,5, also höchstens 12 Karten.'] },
    ],
  ],
  'alg-004': [
    // The idea of a function
    [
      { a: 0, t: 'n', v: 7,
        al: ['Nëse f(x) = 2x + 1, sa është f(3)?', 'f(3) = 2 · 3 + 1 = 7.'],
        en: ['If f(x) = 2x + 1, what is f(3)?', 'f(3) = 2 · 3 + 1 = 7.'],
        de: ['Wenn f(x) = 2x + 1, wie groß ist f(3)?', 'f(3) = 2 · 3 + 1 = 7.'] },
      { a: 1, t: 'tf', k: false,
        al: ['Një rreth në rrafsh është grafik funksioni y = f(x).', 'E gabuar: një drejtëz vertikale e pret rrethin në dy pika, pra një x ka dy vlera y.'],
        en: ['A circle in the plane is the graph of a function y = f(x).', 'False: a vertical line meets the circle twice, so one x has two y values.'],
        de: ['Ein Kreis in der Ebene ist der Graph einer Funktion y = f(x).', 'Falsch: Eine senkrechte Gerade schneidet den Kreis zweimal, ein x hat also zwei y-Werte.'] },
    ],
    // Common functions
    [
      { a: 1, t: 'c', k: 1,
        al: ['Grafiku i f(x) = x² − 3 është:', ['drejtëz', 'parabolë', 'hiperbolë', 'rreth'], 'Funksioni katror ka grafik parabolë.'],
        en: ['The graph of f(x) = x² − 3 is a:', ['line', 'parabola', 'hyperbola', 'circle'], 'A quadratic function has a parabola as its graph.'],
        de: ['Der Graph von f(x) = x² − 3 ist eine:', ['Gerade', 'Parabel', 'Hyperbel', 'Kreislinie'], 'Eine quadratische Funktion hat eine Parabel als Graphen.'] },
      { a: 2, t: 'c', k: 0,
        al: ['Si ndryshon grafiku nga y = f(x) në y = f(x) + 2?', ['zhvendoset 2 njësi lart', 'zhvendoset 2 njësi djathtas', 'zgjatet dy herë', 'pasqyrohet'], 'Shtimi i një konstanteje jashtë f e zhvendos grafikun vertikalisht.'],
        en: ['How does the graph change from y = f(x) to y = f(x) + 2?', ['shifts up 2 units', 'shifts right 2 units', 'stretches by 2', 'is reflected'], 'Adding a constant outside f shifts the graph vertically.'],
        de: ['Wie ändert sich der Graph von y = f(x) zu y = f(x) + 2?', ['2 Einheiten nach oben', '2 Einheiten nach rechts', 'um Faktor 2 gestreckt', 'gespiegelt'], 'Eine Konstante außerhalb von f verschiebt den Graphen senkrecht.'] },
    ],
    // Composition and inverse
    [
      { a: 0, t: 'n', v: 10,
        al: ['f(x) = x + 1 dhe g(x) = 3x. Sa është (f∘g)(3)?', '(f∘g)(3) = f(g(3)) = f(9) = 10.'],
        en: ['f(x) = x + 1 and g(x) = 3x. What is (f∘g)(3)?', '(f∘g)(3) = f(g(3)) = f(9) = 10.'],
        de: ['f(x) = x + 1 und g(x) = 3x. Wie groß ist (f∘g)(3)?', '(f∘g)(3) = f(g(3)) = f(9) = 10.'] },
      { a: 1, t: 'c', k: 2,
        al: ['Cili është inversi i f(x) = x − 5?', ['x − 5', '5 − x', 'x + 5', '1/(x − 5)'], 'Funksioni i anasjellë e kthen mbrapsht zbritjen e 5: f⁻¹(x) = x + 5.'],
        en: ['What is the inverse of f(x) = x − 5?', ['x − 5', '5 − x', 'x + 5', '1/(x − 5)'], 'The inverse undoes subtracting 5: f⁻¹(x) = x + 5.'],
        de: ['Was ist die Umkehrfunktion von f(x) = x − 5?', ['x − 5', '5 − x', 'x + 5', '1/(x − 5)'], 'Die Umkehrfunktion macht das Abziehen von 5 rückgängig: f⁻¹(x) = x + 5.'] },
    ],
  ],
  'alg-005': [
    // Factoring trinomials
    [
      { a: 0, t: 'c', k: 3,
        al: ['Faktorizoni: x² + 5x + 6', ['(x + 1)(x + 6)', '(x − 2)(x − 3)', '(x + 5)(x + 1)', '(x + 2)(x + 3)'], 'Duam dy numra me shumë 5 dhe prodhim 6: 2 dhe 3.'],
        en: ['Factor: x² + 5x + 6', ['(x + 1)(x + 6)', '(x − 2)(x − 3)', '(x + 5)(x + 1)', '(x + 2)(x + 3)'], 'We need two numbers with sum 5 and product 6: 2 and 3.'],
        de: ['Faktorisieren Sie: x² + 5x + 6', ['(x + 1)(x + 6)', '(x − 2)(x − 3)', '(x + 5)(x + 1)', '(x + 2)(x + 3)'], 'Gesucht sind zwei Zahlen mit Summe 5 und Produkt 6: 2 und 3.'] },
      { a: 2, t: 'c', k: 1,
        al: ['Faktorizoni: x² − 16', ['(x − 4)²', '(x − 4)(x + 4)', '(x − 8)(x + 2)', 'nuk faktorizohet'], 'Diferenca e katrorëve: a² − b² = (a − b)(a + b).'],
        en: ['Factor: x² − 16', ['(x − 4)²', '(x − 4)(x + 4)', '(x − 8)(x + 2)', 'cannot be factored'], 'Difference of squares: a² − b² = (a − b)(a + b).'],
        de: ['Faktorisieren Sie: x² − 16', ['(x − 4)²', '(x − 4)(x + 4)', '(x − 8)(x + 2)', 'nicht faktorisierbar'], 'Dritte binomische Formel: a² − b² = (a − b)(a + b).'] },
    ],
    // Quadratic formula and discriminant
    [
      { a: 1, t: 'c', k: 2,
        al: ['Sa rrënjë reale ka x² + x + 5 = 0?', ['dy', 'një', 'asnjë', 'tri'], 'D = 1 − 20 = −19 < 0, prandaj nuk ka rrënjë reale.'],
        en: ['How many real roots does x² + x + 5 = 0 have?', ['two', 'one', 'none', 'three'], 'D = 1 − 20 = −19 < 0, so there are no real roots.'],
        de: ['Wie viele reelle Lösungen hat x² + x + 5 = 0?', ['zwei', 'eine', 'keine', 'drei'], 'D = 1 − 20 = −19 < 0, also keine reellen Lösungen.'] },
      { a: 2, t: 'n', v: 7,
        al: ['Rrënjët e x² − 7x + 10 = 0 kanë shumë sa?', 'Sipas Vietës, x₁ + x₂ = −b/a = 7 (rrënjët janë 2 dhe 5).'],
        en: ['What is the sum of the roots of x² − 7x + 10 = 0?', 'By Vieta, x₁ + x₂ = −b/a = 7 (the roots are 2 and 5).'],
        de: ['Wie groß ist die Summe der Lösungen von x² − 7x + 10 = 0?', 'Nach Vieta ist x₁ + x₂ = −b/a = 7 (die Lösungen sind 2 und 5).'] },
    ],
    // Completing the square
    [
      { a: 0, t: 'n', v: 9,
        al: ['Çfarë numri duhet shtuar te x² + 6x që të bëhet katror i plotë?', '(6/2)² = 9, sepse x² + 6x + 9 = (x + 3)².'],
        en: ['What number completes x² + 6x to a perfect square?', '(6/2)² = 9, because x² + 6x + 9 = (x + 3)².'],
        de: ['Welche Zahl ergänzt x² + 6x zu einem vollständigen Quadrat?', '(6/2)² = 9, denn x² + 6x + 9 = (x + 3)².'] },
      { a: 2, t: 'c', k: 1,
        al: ['Cili është kulmi i y = (x − 4)² + 1?', ['(−4; 1)', '(4; 1)', '(4; −1)', '(1; 4)'], 'Forma y = a(x − h)² + k ka kulm (h; k) = (4; 1).'],
        en: ['What is the vertex of y = (x − 4)² + 1?', ['(−4, 1)', '(4, 1)', '(4, −1)', '(1, 4)'], 'y = a(x − h)² + k has its vertex at (h, k) = (4, 1).'],
        de: ['Wo liegt der Scheitelpunkt von y = (x − 4)² + 1?', ['(−4; 1)', '(4; 1)', '(4; −1)', '(1; 4)'], 'y = a(x − h)² + k hat den Scheitel (h; k) = (4; 1).'] },
    ],
  ],
  'alg-006': [
    // Polynomials
    [
      { a: 0, t: 'n', v: 4,
        al: ['Cila është shkalla e polinomit 3x⁴ − x² + 7?', 'Shkalla është fuqia më e madhe e x: 4.'],
        en: ['What is the degree of 3x⁴ − x² + 7?', 'The degree is the highest power of x: 4.'],
        de: ['Welchen Grad hat das Polynom 3x⁴ − x² + 7?', 'Der Grad ist die höchste Potenz von x: 4.'] },
      { a: 1, t: 'c', k: 0,
        al: ['Zbërtheni: (x + 2)(x + 3)', ['x² + 5x + 6', 'x² + 6x + 5', 'x² + 6', '2x + 5'], 'x·x + 3x + 2x + 2·3 = x² + 5x + 6.'],
        en: ['Expand: (x + 2)(x + 3)', ['x² + 5x + 6', 'x² + 6x + 5', 'x² + 6', '2x + 5'], 'x·x + 3x + 2x + 2·3 = x² + 5x + 6.'],
        de: ['Multiplizieren Sie aus: (x + 2)(x + 3)', ['x² + 5x + 6', 'x² + 6x + 5', 'x² + 6', '2x + 5'], 'x·x + 3x + 2x + 2·3 = x² + 5x + 6.'] },
    ],
    // Roots of polynomials
    [
      { a: 0, t: 'n', v: 3,
        al: ['Sa rrënjë (duke numëruar edhe ato komplekse) ka një polinom i shkallës 3?', 'Sipas teoremës themelore të algjebrës, polinomi i shkallës n ka n rrënjë.'],
        en: ['How many roots (counting complex ones) does a degree-3 polynomial have?', 'By the fundamental theorem of algebra, a degree-n polynomial has n roots.'],
        de: ['Wie viele Nullstellen (komplexe mitgezählt) hat ein Polynom 3. Grades?', 'Nach dem Fundamentalsatz der Algebra hat ein Polynom vom Grad n genau n Nullstellen.'] },
      { a: 1, t: 'tf', k: true,
        al: ['Nëse P(3) = 0, atëherë (x − 3) është faktor i P(x).', 'E vërtetë: kjo është teorema e faktorit.'],
        en: ['If P(3) = 0, then (x − 3) is a factor of P(x).', 'True: this is the factor theorem.'],
        de: ['Wenn P(3) = 0, dann ist (x − 3) ein Faktor von P(x).', 'Richtig: Das ist der Faktorsatz.'] },
    ],
    // Rational fractions
    [
      { a: 0, t: 'n', v: 5,
        al: ['Për cilën vlerë të x nuk është i përkufizuar f(x) = 1/(x − 5)?', 'Emëruesi nuk mund të jetë zero: x − 5 = 0 → x = 5.'],
        en: ['For which x is f(x) = 1/(x − 5) undefined?', 'The denominator cannot be zero: x − 5 = 0 → x = 5.'],
        de: ['Für welches x ist f(x) = 1/(x − 5) nicht definiert?', 'Der Nenner darf nicht null sein: x − 5 = 0 → x = 5.'] },
      { a: 1, t: 'c', k: 3,
        al: ['Cila është asimptota horizontale e f(x) = (2x + 1)/(x − 3)?', ['y = 0', 'x = 3', 'y = 1/3', 'y = 2'], 'Shkallët janë të barabarta: y = 2/1 = 2 (raporti i koeficientëve kryesorë).'],
        en: ['What is the horizontal asymptote of f(x) = (2x + 1)/(x − 3)?', ['y = 0', 'x = 3', 'y = 1/3', 'y = 2'], 'Equal degrees: y = 2/1 = 2 (ratio of the leading coefficients).'],
        de: ['Welche waagerechte Asymptote hat f(x) = (2x + 1)/(x − 3)?', ['y = 0', 'x = 3', 'y = 1/3', 'y = 2'], 'Gleicher Grad: y = 2/1 = 2 (Verhältnis der Leitkoeffizienten).'] },
    ],
  ],
  'alg-007': [
    // Operations with rational expressions
    [
      { a: 1, t: 'c', k: 2,
        al: ['Thjeshtoni: (x² − 9)/(x + 3)', ['x + 3', 'x − 9', 'x − 3', '1'], 'x² − 9 = (x − 3)(x + 3); thjeshtojmë (x + 3) dhe mbetet x − 3.'],
        en: ['Simplify: (x² − 9)/(x + 3)', ['x + 3', 'x − 9', 'x − 3', '1'], 'x² − 9 = (x − 3)(x + 3); cancel (x + 3) to get x − 3.'],
        de: ['Vereinfachen Sie: (x² − 9)/(x + 3)', ['x + 3', 'x − 9', 'x − 3', '1'], 'x² − 9 = (x − 3)(x + 3); nach Kürzen von (x + 3) bleibt x − 3.'] },
      { a: 1, t: 'tf', k: true,
        al: ['Për të pjesëtuar me (R/S) shumëzojmë me (S/R).', 'E vërtetë: pjesëtimi me një thyesë është shumëzim me të anasjelltën e saj.'],
        en: ['To divide by (R/S) we multiply by (S/R).', 'True: dividing by a fraction means multiplying by its reciprocal.'],
        de: ['Durch (R/S) teilt man, indem man mit (S/R) multipliziert.', 'Richtig: Durch einen Bruch teilen heißt mit dem Kehrwert multiplizieren.'] },
    ],
    // Rational equations
    [
      { a: 0, t: 'n', v: 4,
        al: ['Zgjidhni: 8/x = 2', 'Shumëzojmë me x: 8 = 2x, pra x = 4 (x ≠ 0).'],
        en: ['Solve: 8/x = 2', 'Multiply by x: 8 = 2x, so x = 4 (x ≠ 0).'],
        de: ['Lösen Sie: 8/x = 2', 'Mit x multiplizieren: 8 = 2x, also x = 4 (x ≠ 0).'] },
      { a: 1, t: 'tf', k: true,
        al: ['Një zgjidhje që e bën emëruesin zero duhet hedhur poshtë.', 'E vërtetë: për atë vlerë ekuacioni nuk është i përkufizuar, pra zgjidhja është e rreme.'],
        en: ['A solution that makes a denominator zero must be rejected.', 'True: the equation is undefined there, so it is a false solution.'],
        de: ['Eine Lösung, die einen Nenner null macht, muss verworfen werden.', 'Richtig: Dort ist die Gleichung nicht definiert, es ist eine Scheinlösung.'] },
    ],
    // Rational functions and asymptotes
    [
      { a: 0, t: 'n', v: 2,
        al: ['f(x) = 3/(x − 2) ka asimptotë vertikale x = ?', 'Emëruesi bëhet zero te x = 2.'],
        en: ['f(x) = 3/(x − 2) has a vertical asymptote x = ?', 'The denominator is zero at x = 2.'],
        de: ['f(x) = 3/(x − 2) hat eine senkrechte Asymptote bei x = ?', 'Der Nenner wird bei x = 2 null.'] },
      { a: 1, t: 'c', k: 0,
        al: ['Kur ka funksioni racional asimptotë të pjerrët?', ['kur shkalla e numëruesit është 1 më e madhe se e emëruesit', 'kur shkallët janë të barabarta', 'kur numëruesi ka shkallë më të vogël', 'gjithmonë'], 'Asimptota e pjerrët del kur grad(P) = grad(Q) + 1.'],
        en: ['When does a rational function have an oblique (slant) asymptote?', ['when the numerator degree is 1 more than the denominator degree', 'when the degrees are equal', 'when the numerator degree is smaller', 'always'], 'An oblique asymptote appears when deg(P) = deg(Q) + 1.'],
        de: ['Wann hat eine gebrochenrationale Funktion eine schiefe Asymptote?', ['wenn der Zählergrad um 1 größer als der Nennergrad ist', 'wenn die Grade gleich sind', 'wenn der Zählergrad kleiner ist', 'immer'], 'Eine schiefe Asymptote entsteht bei Grad(P) = Grad(Q) + 1.'] },
    ],
  ],
  'alg-008': [
    // Laws of exponents
    [
      { a: 0, t: 'n', v: 128,
        al: ['Sa është 2³ · 2⁴?', '2³ · 2⁴ = 2⁷ = 128 (eksponentët mblidhen).'],
        en: ['What is 2³ · 2⁴?', '2³ · 2⁴ = 2⁷ = 128 (the exponents add).'],
        de: ['Wie viel ist 2³ · 2⁴?', '2³ · 2⁴ = 2⁷ = 128 (die Exponenten werden addiert).'] },
      { a: 0, t: 'c', k: 1,
        al: ['Sa është 5⁻²?', ['−25', '1/25', '−10', '25'], 'Eksponenti negativ jep të anasjelltën: 5⁻² = 1/5² = 1/25.'],
        en: ['What is 5⁻²?', ['−25', '1/25', '−10', '25'], 'A negative exponent gives the reciprocal: 5⁻² = 1/5² = 1/25.'],
        de: ['Wie viel ist 5⁻²?', ['−25', '1/25', '−10', '25'], 'Ein negativer Exponent ergibt den Kehrwert: 5⁻² = 1/5² = 1/25.'] },
    ],
    // Exponential function and logarithm
    [
      { a: 0, t: 'tf', k: true,
        al: ['Grafiku i y = 3ˣ kalon nëpër pikën (0; 1).', 'E vërtetë: 3⁰ = 1.'],
        en: ['The graph of y = 3ˣ passes through (0, 1).', 'True: 3⁰ = 1.'],
        de: ['Der Graph von y = 3ˣ geht durch den Punkt (0; 1).', 'Richtig: 3⁰ = 1.'] },
      { a: 1, t: 'n', v: 3,
        al: ['Sa është log₂(8)?', '2³ = 8, pra log₂(8) = 3.'],
        en: ['What is log₂(8)?', '2³ = 8, so log₂(8) = 3.'],
        de: ['Wie viel ist log₂(8)?', '2³ = 8, also log₂(8) = 3.'] },
    ],
    // Exponential and logarithmic equations
    [
      { a: 0, t: 'n', v: 3,
        al: ['Zgjidhni: 5ˣ = 125', '125 = 5³, pra x = 3.'],
        en: ['Solve: 5ˣ = 125', '125 = 5³, so x = 3.'],
        de: ['Lösen Sie: 5ˣ = 125', '125 = 5³, also x = 3.'] },
      { a: 1, t: 'n', v: 1000,
        al: ['Zgjidhni: log(x) = 3 (logaritmi me bazë 10)', 'log(x) = 3 → x = 10³ = 1000.'],
        en: ['Solve: log(x) = 3 (base-10 logarithm)', 'log(x) = 3 → x = 10³ = 1000.'],
        de: ['Lösen Sie: log(x) = 3 (Zehnerlogarithmus)', 'log(x) = 3 → x = 10³ = 1000.'] },
    ],
  ],
  'alg-009': [
    // Imaginary unit and algebraic form
    [
      { a: 0, t: 'n', v: -1,
        al: ['Sa është i²?', 'Sipas përkufizimit, i² = −1.'],
        en: ['What is i²?', 'By definition, i² = −1.'],
        de: ['Wie viel ist i²?', 'Nach Definition ist i² = −1.'] },
      { a: 2, t: 'c', k: 1,
        al: ['Sa është (2 + 3i) + (4 − i)?', ['6 + 4i', '6 + 2i', '8 − 3i', '2 + 2i'], 'Mblidhen veçmas pjesët reale (2 + 4) dhe imagjinare (3i − i).'],
        en: ['What is (2 + 3i) + (4 − i)?', ['6 + 4i', '6 + 2i', '8 − 3i', '2 + 2i'], 'Add the real parts (2 + 4) and the imaginary parts (3i − i) separately.'],
        de: ['Wie viel ist (2 + 3i) + (4 − i)?', ['6 + 4i', '6 + 2i', '8 − 3i', '2 + 2i'], 'Real- (2 + 4) und Imaginärteile (3i − i) werden getrennt addiert.'] },
    ],
    // Trigonometric form and De Moivre
    [
      { a: 0, t: 'n', v: 5,
        al: ['Sa është moduli |3 + 4i|?', '|z| = √(3² + 4²) = √25 = 5.'],
        en: ['What is the modulus |3 + 4i|?', '|z| = √(3² + 4²) = √25 = 5.'],
        de: ['Wie groß ist der Betrag |3 + 4i|?', '|z| = √(3² + 4²) = √25 = 5.'] },
      { a: 1, t: 'tf', k: true,
        al: ['Sipas De Moivre-it, te zⁿ moduli ngrihet në fuqinë n dhe argumenti shumëzohet me n.', 'E vërtetë: [r(cos θ + i sin θ)]ⁿ = rⁿ(cos nθ + i sin nθ).'],
        en: ['By De Moivre, for zⁿ the modulus is raised to the n-th power and the argument is multiplied by n.', 'True: [r(cos θ + i sin θ)]ⁿ = rⁿ(cos nθ + i sin nθ).'],
        de: ['Nach De Moivre wird bei zⁿ der Betrag mit n potenziert und das Argument mit n multipliziert.', 'Richtig: [r(cos θ + i sin θ)]ⁿ = rⁿ(cos nθ + i sin nθ).'] },
    ],
  ],
  'alg-010': [
    // Arithmetic sequences
    [
      { a: 0, t: 'n', v: 23,
        al: ['Vargu 5, 8, 11, … Sa është kufiza e 7-të?', 'a₇ = a₁ + 6d = 5 + 6 · 3 = 23.'],
        en: ['Sequence 5, 8, 11, … What is the 7th term?', 'a₇ = a₁ + 6d = 5 + 6 · 3 = 23.'],
        de: ['Folge 5, 8, 11, … Wie lautet das 7. Glied?', 'a₇ = a₁ + 6d = 5 + 6 · 3 = 23.'] },
      { a: 1, t: 'n', v: 55,
        al: ['Sa është shuma 1 + 2 + … + 10?', 'Sₙ = n(a₁ + aₙ)/2 = 10 · 11 / 2 = 55.'],
        en: ['What is the sum 1 + 2 + … + 10?', 'Sₙ = n(a₁ + aₙ)/2 = 10 · 11 / 2 = 55.'],
        de: ['Wie groß ist die Summe 1 + 2 + … + 10?', 'Sₙ = n(a₁ + aₙ)/2 = 10 · 11 / 2 = 55.'] },
    ],
    // Geometric sequences
    [
      { a: 0, t: 'n', v: 3,
        al: ['Sa është herësi q i vargut 2, 6, 18, 54, …?', 'q = 6/2 = 3.'],
        en: ['What is the ratio q of 2, 6, 18, 54, …?', 'q = 6/2 = 3.'],
        de: ['Welchen Quotienten q hat die Folge 2, 6, 18, 54, …?', 'q = 6/2 = 3.'] },
      { a: 1, t: 'n', v: 8,
        al: ['Sa është shuma e serisë së pafundme 4 + 2 + 1 + 1/2 + …?', 'a₁ = 4, q = 1/2: S = 4/(1 − 1/2) = 8.'],
        en: ['What is the sum of the infinite series 4 + 2 + 1 + 1/2 + …?', 'a₁ = 4, q = 1/2: S = 4/(1 − 1/2) = 8.'],
        de: ['Wie groß ist die Summe der unendlichen Reihe 4 + 2 + 1 + 1/2 + …?', 'a₁ = 4, q = 1/2: S = 4/(1 − 1/2) = 8.'] },
    ],
  ],
};
