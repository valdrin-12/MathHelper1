// Grade 11 · Theme 2: Graphs 1 (September–October)
const alt = (al, en, de) => ({ al, en, de });

export default {
  id: 'g11-graphs-1',
  i18n: {
    al: { title: 'Grafikët 1', description: 'Ekuacioni i drejtëzës, grafikët linearë dhe kuadratikë, kulmi dhe boshti i simetrisë së parabolës, grafikët e lëvizjes.' },
    en: { title: 'Graphs 1', description: 'The equation of a line, linear and quadratic graphs, vertex and axis of symmetry of a parabola, motion graphs.' },
    de: { title: 'Graphen 1', description: 'Geradengleichung, lineare und quadratische Graphen, Scheitelpunkt und Symmetrieachse der Parabel, Bewegungsdiagramme.' },
  },
  lessons: [
    // ───────── 1. Equation of a line
    {
      slug: 'g11-graphs-1-line-equation',
      visuals: [{
        type: 'functionPlot', view: { xMin: -1, xMax: 5, yMin: -1, yMax: 11 }, height: 230,
        functions: [{ expr: '2*x + 1', label: 'y = 2x + 1' }],
        points: [{ at: [1, 3], label: '(1, 3)' }, { at: [4, 9], label: '(4, 9)' }, { at: [0, 1], label: 'c = 1' }],
        caption: alt('Nga (1, 3) te (4, 9): Δy = 6, Δx = 3, pra m = 2; drejtëza pret boshtin y në 1.', 'From (1, 3) to (4, 9): Δy = 6, Δx = 3, so m = 2; the line crosses the y-axis at 1.', 'Von (1 | 3) nach (4 | 9): Δy = 6, Δx = 3, also m = 2; die Gerade schneidet die y-Achse bei 1.'),
        alt: alt('Drejtëza y = 2x + 1 nëpër pikat (1, 3) dhe (4, 9).', 'The line y = 2x + 1 through the points (1, 3) and (4, 9).', 'Die Gerade y = 2x + 1 durch die Punkte (1 | 3) und (4 | 9).'),
      }],
      answers: {
        examples: [[['(9 - 3) / (4 - 1)', 2], ['3 - 2*1', 1]], [['1 - 3*2', -5]]],
        practice: [[['(-4 - 4) / (3 + 1)', -2]], [['3 - (-1/2)*4', 5]], [['-1/2', '-1/2', 0, '-1/2']]],
      },
      al: {
        title: 'Ekuacioni i drejtëzës',
        objectives: ['Të gjeni koeficientin këndor dhe ekuacionin e drejtëzës nëpër dy pika.', 'Të përdorni kushtin e paralelizmit dhe të pingultisë.'],
        theory: 'Drejtëza shkruhet y = mx + c: m është koeficienti këndor (pjerrësia), c pika ku pret boshtin y.\n\nNëpër pikat (x₁, y₁) dhe (x₂, y₂): m = (y₂ − y₁) / (x₂ − x₁). Pastaj c gjendet duke vendosur njërën pikë: nga (1, 3) dhe (4, 9) → m = 6/3 = 2; 3 = 2 · 1 + c → c = 1, pra y = 2x + 1.\n\nDrejtëzat paralele kanë të njëjtin m. Drejtëzat pingule kanë m₁ · m₂ = −1: pingulja me y = 2x + 1 ka m = −1/2.',
        keyPoints: ['m = (y₂ − y₁) / (x₂ − x₁)', 'Paralele: m i njëjtë', 'Pingule: m₁ · m₂ = −1'],
        examples: [
          { example: 'Gjeni ekuacionin e drejtëzës nëpër (1, 3) dhe (4, 9).', solution: 'm = 6/3 = 2; c = 3 − 2 · 1 = 1 → y = 2x + 1.' },
          { example: 'Gjeni drejtëzën paralele me y = 3x − 2 që kalon nëpër (2, 1).', solution: 'm = 3; c = 1 − 3 · 2 = −5 → y = 3x − 5.' },
        ],
        commonMistakes: [
          { mistake: 'Koeficienti këndor llogaritet Δx / Δy.', fix: 'Ndryshimi i y sipër, ndryshimi i x poshtë: m = Δy / Δx.' },
          { mistake: 'Për pingulen merret m = −2 në vend të −1/2.', fix: 'Pingulja ka m të anasjelltë me shenjë të kundërt: −1/2.' },
        ],
        practice: [
          { problem: 'Sa është koeficienti këndor midis (−1, 4) dhe (3, −4)?', solution: 'm = −2', steps: ['Δy = −4 − 4 = −8, Δx = 3 − (−1) = 4.', 'm = −8/4 = −2.'] },
          { problem: 'Drejtëza ka m = −1/2 dhe kalon nëpër (4, 3). Gjeni c.', solution: 'c = 5', steps: ['3 = −1/2 · 4 + c = −2 + c.', 'c = 5 → y = −1/2 x + 5.'] },
          { problem: 'Sa është koeficienti këndor i drejtëzës pingule me y = 2x + 1?', solution: 'm = −1/2', steps: ['m₁ · m₂ = −1.', '2 · m₂ = −1 → m₂ = −1/2.'] },
        ],
      },
      en: {
        title: 'The equation of a line',
        objectives: ['Find the gradient and equation of the line through two points.', 'Use the conditions for parallel and perpendicular lines.'],
        theory: 'A straight line is y = mx + c: m is the gradient, c is where it crosses the y-axis.\n\nThrough (x₁, y₁) and (x₂, y₂): m = (y₂ − y₁) / (x₂ − x₁). Then find c by putting in one point: from (1, 3) and (4, 9) → m = 6/3 = 2; 3 = 2 · 1 + c → c = 1, so y = 2x + 1.\n\nParallel lines have the same m. Perpendicular lines have m₁ · m₂ = −1: the perpendicular to y = 2x + 1 has m = −1/2.',
        keyPoints: ['m = (y₂ − y₁) / (x₂ − x₁)', 'Parallel: same m', 'Perpendicular: m₁ · m₂ = −1'],
        examples: [
          { example: 'Find the equation of the line through (1, 3) and (4, 9).', solution: 'm = 6/3 = 2; c = 3 − 2 · 1 = 1 → y = 2x + 1.' },
          { example: 'Find the line parallel to y = 3x − 2 through (2, 1).', solution: 'm = 3; c = 1 − 3 · 2 = −5 → y = 3x − 5.' },
        ],
        commonMistakes: [
          { mistake: 'The gradient is worked out as Δx ÷ Δy.', fix: 'Change in y on top, change in x below: m = Δy ÷ Δx.' },
          { mistake: 'For the perpendicular m = −2 is taken instead of −1/2.', fix: 'The perpendicular gradient is the negative reciprocal: −1/2.' },
        ],
        practice: [
          { problem: 'What is the gradient between (−1, 4) and (3, −4)?', solution: 'm = −2', steps: ['Δy = −4 − 4 = −8, Δx = 3 − (−1) = 4.', 'm = −8/4 = −2.'] },
          { problem: 'A line has m = −1/2 and passes through (4, 3). Find c.', solution: 'c = 5', steps: ['3 = −1/2 · 4 + c = −2 + c.', 'c = 5 → y = −1/2 x + 5.'] },
          { problem: 'What is the gradient of a line perpendicular to y = 2x + 1?', solution: 'm = −1/2', steps: ['m₁ · m₂ = −1.', '2 · m₂ = −1 → m₂ = −1/2.'] },
        ],
      },
      de: {
        title: 'Die Geradengleichung',
        objectives: ['Steigung und Gleichung der Geraden durch zwei Punkte bestimmen.', 'Die Bedingungen für parallele und orthogonale Geraden anwenden.'],
        theory: 'Eine Gerade hat die Gleichung y = mx + c: m ist die Steigung, c der y-Achsenabschnitt.\n\nDurch (x₁ | y₁) und (x₂ | y₂): m = (y₂ − y₁) / (x₂ − x₁). Dann c durch Einsetzen eines Punktes: aus (1 | 3) und (4 | 9) → m = 6/3 = 2; 3 = 2 · 1 + c → c = 1, also y = 2x + 1.\n\nParallele Geraden haben dieselbe Steigung. Für orthogonale Geraden gilt m₁ · m₂ = −1: Die Senkrechte zu y = 2x + 1 hat m = −1/2.',
        keyPoints: ['m = (y₂ − y₁) / (x₂ − x₁)', 'Parallel: gleiches m', 'Orthogonal: m₁ · m₂ = −1'],
        examples: [
          { example: 'Bestimmen Sie die Gleichung der Geraden durch (1 | 3) und (4 | 9).', solution: 'm = 6/3 = 2; c = 3 − 2 · 1 = 1 → y = 2x + 1.' },
          { example: 'Bestimmen Sie die Parallele zu y = 3x − 2 durch (2 | 1).', solution: 'm = 3; c = 1 − 3 · 2 = −5 → y = 3x − 5.' },
        ],
        commonMistakes: [
          { mistake: 'Die Steigung wird als Δx : Δy berechnet.', fix: 'Änderung von y oben, Änderung von x unten: m = Δy : Δx.' },
          { mistake: 'Für die Senkrechte wird m = −2 statt −1/2 genommen.', fix: 'Die orthogonale Steigung ist der negative Kehrwert: −1/2.' },
        ],
        practice: [
          { problem: 'Wie groß ist die Steigung zwischen (−1 | 4) und (3 | −4)?', solution: 'm = −2', steps: ['Δy = −4 − 4 = −8, Δx = 3 − (−1) = 4.', 'm = −8/4 = −2.'] },
          { problem: 'Eine Gerade hat m = −1/2 und geht durch (4 | 3). Bestimmen Sie c.', solution: 'c = 5', steps: ['3 = −1/2 · 4 + c = −2 + c.', 'c = 5 → y = −1/2 x + 5.'] },
          { problem: 'Welche Steigung hat eine Gerade, die senkrecht auf y = 2x + 1 steht?', solution: 'm = −1/2', steps: ['m₁ · m₂ = −1.', '2 · m₂ = −1 → m₂ = −1/2.'] },
        ],
      },
    },
    // ───────── 2. Linear and quadratic graphs
    {
      slug: 'g11-graphs-1-linear-quadratic',
      visuals: [{
        type: 'functionPlot', view: { xMin: -3, xMax: 6, yMin: -5, yMax: 9 }, height: 240,
        functions: [{ expr: 'x^2 - 2*x - 3', label: 'y = x² − 2x − 3' }, { expr: 'x + 1', label: 'y = x + 1', color: 'secondary' }],
        points: [{ at: [-1, 0], label: '(−1, 0)' }, { at: [4, 5], label: '(4, 5)' }],
        caption: alt('Parabola dhe drejtëza priten në x = −1 dhe x = 4: këto janë zgjidhjet e x² − 2x − 3 = x + 1.', 'The parabola and the line meet at x = −1 and x = 4: these solve x² − 2x − 3 = x + 1.', 'Parabel und Gerade schneiden sich bei x = −1 und x = 4: das sind die Lösungen von x² − 2x − 3 = x + 1.'),
        alt: alt('Parabola y = x² − 2x − 3 dhe drejtëza y = x + 1 që priten në (−1, 0) dhe (4, 5).', 'The parabola y = x² − 2x − 3 and the line y = x + 1 meeting at (−1, 0) and (4, 5).', 'Die Parabel y = x² − 2x − 3 und die Gerade y = x + 1 schneiden sich in (−1 | 0) und (4 | 5).'),
      }],
      answers: {
        examples: [[['(-1)^2 - 2*(-1) - 3', 0], ['1 - 2 - 3', -4]], [['4^2 - 3*4 - 4', 0, 0, '4'], ['(-1)^2 - 3*(-1) - 4', 0, 0, '-1']]],
        practice: [[['3 - 2*(-2)', 7]], [['0^2 - 2*0 - 3', -3]], [['3^2 - 2*3 - 3', 0, 0, '3'], ['(-1)^2 - 2*(-1) - 3', 0, 0, '-1']]],
      },
      al: {
        title: 'Funksionet lineare dhe kuadratike',
        objectives: ['Të ndërtoni tabelën e vlerave dhe grafikun e një funksioni linear ose kuadratik.', 'Të zgjidhni ekuacione grafikisht nga pikat e prerjes.'],
        theory: 'Funksioni linear y = mx + c ka grafik drejtëz; funksioni kuadratik y = ax² + bx + c ka grafik parabolë.\n\nPër grafikun bëjmë tabelë vlerash dhe i bashkojmë pikat: drejtëzën me vizore, parabolën me vijë të lakuar. Kujdes: (−1)² = 1.\n\nZgjidhja grafike: zgjidhjet e f(x) = g(x) janë vlerat x të pikave ku priten grafikët. Prerjet me boshtin x janë zgjidhjet e f(x) = 0; prerja me boshtin y është f(0).',
        keyPoints: ['Linear → drejtëz; kuadratik → parabolë', 'f(x) = g(x): x i pikave të prerjes', 'Prerja me boshtin y: f(0)'],
        examples: [
          { example: 'Plotësoni tabelën e y = x² − 2x − 3 për x = −1, 0, 1, 2, 3.', solution: 'y = 0, −3, −4, −3, 0.' },
          { example: 'Zgjidhni grafikisht x² − 2x − 3 = x + 1.', solution: 'Grafikët priten në x = −1 dhe x = 4 (kontroll: x² − 3x − 4 = (x − 4)(x + 1) = 0).' },
        ],
        commonMistakes: [
          { mistake: 'Në tabelë (−1)² shkruhet −1.', fix: 'Katrori i një numri negativ është pozitiv: (−1)² = 1.' },
          { mistake: 'Pikat e parabolës bashkohen me segmente të drejta.', fix: 'Parabola vizatohet me vijë të lakuar dhe të butë.' },
        ],
        practice: [
          { problem: 'Sa është y = 3 − 2x për x = −2?', solution: '7', steps: ['3 − 2 · (−2) = 3 + 4.', '= 7.'] },
          { problem: 'Ku e pret y = x² − 2x − 3 boshtin y?', solution: 'në (0, −3)', steps: ['Vendosim x = 0.', 'y = −3.'] },
          { problem: 'Ku e pret y = x² − 2x − 3 boshtin x?', solution: 'x = 3 dhe x = −1', steps: ['x² − 2x − 3 = (x − 3)(x + 1) = 0.', 'x = 3 ose x = −1.'] },
        ],
      },
      en: {
        title: 'Linear and quadratic functions',
        objectives: ['Draw up a table of values and the graph of a linear or quadratic function.', 'Solve equations graphically from points of intersection.'],
        theory: 'A linear function y = mx + c has a straight-line graph; a quadratic function y = ax² + bx + c has a parabola.\n\nTo draw a graph, make a table of values and join the points: a line with a ruler, a parabola with a smooth curve. Careful: (−1)² = 1.\n\nGraphical solution: the solutions of f(x) = g(x) are the x-values where the graphs cross. Crossings with the x-axis solve f(x) = 0; the crossing with the y-axis is f(0).',
        keyPoints: ['Linear → straight line; quadratic → parabola', 'f(x) = g(x): x of the crossing points', 'y-intercept: f(0)'],
        examples: [
          { example: 'Complete the table of y = x² − 2x − 3 for x = −1, 0, 1, 2, 3.', solution: 'y = 0, −3, −4, −3, 0.' },
          { example: 'Solve x² − 2x − 3 = x + 1 graphically.', solution: 'The graphs cross at x = −1 and x = 4 (check: x² − 3x − 4 = (x − 4)(x + 1) = 0).' },
        ],
        commonMistakes: [
          { mistake: 'In the table (−1)² is written as −1.', fix: 'The square of a negative number is positive: (−1)² = 1.' },
          { mistake: 'The points of a parabola are joined with straight segments.', fix: 'A parabola is drawn as a smooth curve.' },
        ],
        practice: [
          { problem: 'What is y = 3 − 2x at x = −2?', solution: '7', steps: ['3 − 2 · (−2) = 3 + 4.', '= 7.'] },
          { problem: 'Where does y = x² − 2x − 3 cross the y-axis?', solution: 'at (0, −3)', steps: ['Put x = 0.', 'y = −3.'] },
          { problem: 'Where does y = x² − 2x − 3 cross the x-axis?', solution: 'x = 3 and x = −1', steps: ['x² − 2x − 3 = (x − 3)(x + 1) = 0.', 'x = 3 or x = −1.'] },
        ],
      },
      de: {
        title: 'Lineare und quadratische Funktionen',
        objectives: ['Wertetabelle und Graph einer linearen oder quadratischen Funktion erstellen.', 'Gleichungen grafisch über Schnittpunkte lösen.'],
        theory: 'Eine lineare Funktion y = mx + c hat eine Gerade als Graph, eine quadratische Funktion y = ax² + bx + c eine Parabel.\n\nFür den Graphen erstellt man eine Wertetabelle und verbindet die Punkte: die Gerade mit dem Lineal, die Parabel mit einer glatten Kurve. Achtung: (−1)² = 1.\n\nGrafisches Lösen: Die Lösungen von f(x) = g(x) sind die x-Werte der Schnittpunkte der Graphen. Die Schnittpunkte mit der x-Achse lösen f(x) = 0; der Schnittpunkt mit der y-Achse ist f(0).',
        keyPoints: ['Linear → Gerade; quadratisch → Parabel', 'f(x) = g(x): x-Werte der Schnittpunkte', 'y-Achsenabschnitt: f(0)'],
        examples: [
          { example: 'Füllen Sie die Wertetabelle von y = x² − 2x − 3 für x = −1, 0, 1, 2, 3 aus.', solution: 'y = 0, −3, −4, −3, 0.' },
          { example: 'Lösen Sie x² − 2x − 3 = x + 1 grafisch.', solution: 'Die Graphen schneiden sich bei x = −1 und x = 4 (Probe: x² − 3x − 4 = (x − 4)(x + 1) = 0).' },
        ],
        commonMistakes: [
          { mistake: 'In der Tabelle wird (−1)² als −1 geschrieben.', fix: 'Das Quadrat einer negativen Zahl ist positiv: (−1)² = 1.' },
          { mistake: 'Die Punkte einer Parabel werden mit geraden Strecken verbunden.', fix: 'Eine Parabel zeichnet man als glatte Kurve.' },
        ],
        practice: [
          { problem: 'Wie groß ist y = 3 − 2x für x = −2?', solution: '7', steps: ['3 − 2 · (−2) = 3 + 4.', '= 7.'] },
          { problem: 'Wo schneidet y = x² − 2x − 3 die y-Achse?', solution: 'in (0 | −3)', steps: ['x = 0 einsetzen.', 'y = −3.'] },
          { problem: 'Wo schneidet y = x² − 2x − 3 die x-Achse?', solution: 'x = 3 und x = −1', steps: ['x² − 2x − 3 = (x − 3)(x + 1) = 0.', 'x = 3 oder x = −1.'] },
        ],
      },
    },
    // ───────── 3. Properties of the parabola
    {
      slug: 'g11-graphs-1-parabola-properties',
      visuals: [{
        type: 'functionPlot', view: { xMin: -2, xMax: 6, yMin: -4, yMax: 7 }, height: 230,
        functions: [{ expr: 'x^2 - 4*x + 1', label: 'y = x² − 4x + 1' }],
        points: [{ at: [2, -3], label: '(2, −3)' }, { at: [0, 1], label: '(0, 1)' }, { at: [4, 1], label: '(4, 1)' }],
        caption: alt('Kulmi (2, −3) është në boshtin e simetrisë x = 2; pikat (0, 1) dhe (4, 1) janë simetrike.', 'The vertex (2, −3) lies on the axis of symmetry x = 2; the points (0, 1) and (4, 1) are symmetric.', 'Der Scheitelpunkt (2 | −3) liegt auf der Symmetrieachse x = 2; die Punkte (0 | 1) und (4 | 1) liegen symmetrisch.'),
        alt: alt('Parabola y = x² − 4x + 1 me kulmin (2, −3) dhe pikat simetrike (0, 1) e (4, 1).', 'The parabola y = x² − 4x + 1 with vertex (2, −3) and the symmetric points (0, 1) and (4, 1).', 'Die Parabel y = x² − 4x + 1 mit Scheitelpunkt (2 | −3) und den symmetrischen Punkten (0 | 1) und (4 | 1).'),
      }],
      answers: {
        examples: [[['4 / (2*1)', 2], ['2^2 - 4*2 + 1', -3]], [['-8 / (2*(-2))', 2], ['-2*2^2 + 8*2', 8]]],
        practice: [[['-6 / 2', -3]], [['5 - 9', -4]], [['2*2^2 - 8*2 + 3', -5]]],
      },
      al: {
        title: 'Vetitë e parabolës',
        objectives: ['Të gjeni kulmin dhe boshtin e simetrisë së parabolës.', 'Ta shkruani y = ax² + bx + c në formën e kulmit me plotësim katrori.'],
        theory: 'Parabola y = ax² + bx + c hapet lart kur a > 0 (ka minimum) dhe poshtë kur a < 0 (ka maksimum).\n\nBoshti i simetrisë është x = −b/(2a); kulmi ka këtë x dhe y = f(x). Për y = x² − 4x + 1: x = 4/2 = 2, y = 4 − 8 + 1 = −3, kulmi (2, −3).\n\nMe plotësim katrori: x² − 4x + 1 = (x − 2)² − 4 + 1 = (x − 2)² − 3. Nga forma y = a(x − p)² + q lexojmë kulmin (p, q).',
        keyPoints: ['Boshti i simetrisë: x = −b/(2a)', 'Forma e kulmit: y = a(x − p)² + q → kulmi (p, q)', 'a > 0 minimum, a < 0 maksimum'],
        examples: [
          { example: 'Gjeni kulmin e y = x² − 4x + 1.', solution: 'x = 4/2 = 2; y = 4 − 8 + 1 = −3 → kulmi (2, −3), minimum.' },
          { example: 'Sa është vlera më e madhe e y = −2x² + 8x?', solution: 'a < 0; x = −8/(−4) = 2; y = −8 + 16 = 8 → maksimumi 8.' },
        ],
        commonMistakes: [
          { mistake: 'Boshti i simetrisë llogaritet x = b/(2a).', fix: 'Mos harroni minusin: x = −b/(2a).' },
          { mistake: 'Te y = −2x² + 8x kulmi quhet minimum.', fix: 'Kur a < 0 parabola hapet poshtë: kulmi është maksimum.' },
        ],
        practice: [
          { problem: 'Sa është boshti i simetrisë së y = x² + 6x + 5?', solution: 'x = −3', steps: ['x = −b/(2a) = −6/2.', 'x = −3.'] },
          { problem: 'Shkruajeni y = x² + 6x + 5 në formën (x + 3)² + q.', solution: 'y = (x + 3)² − 4', steps: ['(x + 3)² = x² + 6x + 9.', 'q = 5 − 9 = −4.'] },
          { problem: 'Sa është vlera më e vogël e y = 2x² − 8x + 3?', solution: '−5', steps: ['x = 8/4 = 2.', 'y = 8 − 16 + 3 = −5.'] },
        ],
      },
      en: {
        title: 'Properties of the parabola',
        objectives: ['Find the vertex and axis of symmetry of a parabola.', 'Write y = ax² + bx + c in vertex form by completing the square.'],
        theory: 'The parabola y = ax² + bx + c opens upwards when a > 0 (it has a minimum) and downwards when a < 0 (it has a maximum).\n\nThe axis of symmetry is x = −b/(2a); the vertex has this x and y = f(x). For y = x² − 4x + 1: x = 4/2 = 2, y = 4 − 8 + 1 = −3, vertex (2, −3).\n\nBy completing the square: x² − 4x + 1 = (x − 2)² − 4 + 1 = (x − 2)² − 3. From the form y = a(x − p)² + q read off the vertex (p, q).',
        keyPoints: ['Axis of symmetry: x = −b/(2a)', 'Vertex form: y = a(x − p)² + q → vertex (p, q)', 'a > 0 minimum, a < 0 maximum'],
        examples: [
          { example: 'Find the vertex of y = x² − 4x + 1.', solution: 'x = 4/2 = 2; y = 4 − 8 + 1 = −3 → vertex (2, −3), a minimum.' },
          { example: 'What is the greatest value of y = −2x² + 8x?', solution: 'a < 0; x = −8/(−4) = 2; y = −8 + 16 = 8 → maximum 8.' },
        ],
        commonMistakes: [
          { mistake: 'The axis of symmetry is worked out as x = b/(2a).', fix: 'Do not forget the minus: x = −b/(2a).' },
          { mistake: 'For y = −2x² + 8x the vertex is called a minimum.', fix: 'When a < 0 the parabola opens downwards: the vertex is a maximum.' },
        ],
        practice: [
          { problem: 'What is the axis of symmetry of y = x² + 6x + 5?', solution: 'x = −3', steps: ['x = −b/(2a) = −6/2.', 'x = −3.'] },
          { problem: 'Write y = x² + 6x + 5 in the form (x + 3)² + q.', solution: 'y = (x + 3)² − 4', steps: ['(x + 3)² = x² + 6x + 9.', 'q = 5 − 9 = −4.'] },
          { problem: 'What is the least value of y = 2x² − 8x + 3?', solution: '−5', steps: ['x = 8/4 = 2.', 'y = 8 − 16 + 3 = −5.'] },
        ],
      },
      de: {
        title: 'Eigenschaften der Parabel',
        objectives: ['Scheitelpunkt und Symmetrieachse einer Parabel bestimmen.', 'y = ax² + bx + c durch quadratische Ergänzung in die Scheitelpunktform bringen.'],
        theory: 'Die Parabel y = ax² + bx + c ist für a > 0 nach oben geöffnet (Minimum) und für a < 0 nach unten (Maximum).\n\nDie Symmetrieachse ist x = −b/(2a); der Scheitelpunkt hat diesen x-Wert und y = f(x). Für y = x² − 4x + 1: x = 4/2 = 2, y = 4 − 8 + 1 = −3, Scheitelpunkt (2 | −3).\n\nMit quadratischer Ergänzung: x² − 4x + 1 = (x − 2)² − 4 + 1 = (x − 2)² − 3. Aus der Form y = a(x − p)² + q liest man den Scheitelpunkt (p | q) ab.',
        keyPoints: ['Symmetrieachse: x = −b/(2a)', 'Scheitelpunktform: y = a(x − p)² + q → S(p | q)', 'a > 0 Minimum, a < 0 Maximum'],
        examples: [
          { example: 'Bestimmen Sie den Scheitelpunkt von y = x² − 4x + 1.', solution: 'x = 4/2 = 2; y = 4 − 8 + 1 = −3 → S(2 | −3), ein Minimum.' },
          { example: 'Welchen größten Wert hat y = −2x² + 8x?', solution: 'a < 0; x = −8/(−4) = 2; y = −8 + 16 = 8 → Maximum 8.' },
        ],
        commonMistakes: [
          { mistake: 'Die Symmetrieachse wird als x = b/(2a) berechnet.', fix: 'Das Minus nicht vergessen: x = −b/(2a).' },
          { mistake: 'Bei y = −2x² + 8x wird der Scheitelpunkt Minimum genannt.', fix: 'Für a < 0 ist die Parabel nach unten geöffnet: Der Scheitelpunkt ist ein Maximum.' },
        ],
        practice: [
          { problem: 'Wo liegt die Symmetrieachse von y = x² + 6x + 5?', solution: 'x = −3', steps: ['x = −b/(2a) = −6/2.', 'x = −3.'] },
          { problem: 'Schreiben Sie y = x² + 6x + 5 in der Form (x + 3)² + q.', solution: 'y = (x + 3)² − 4', steps: ['(x + 3)² = x² + 6x + 9.', 'q = 5 − 9 = −4.'] },
          { problem: 'Welchen kleinsten Wert hat y = 2x² − 8x + 3?', solution: '−5', steps: ['x = 8/4 = 2.', 'y = 8 − 16 + 3 = −5.'] },
        ],
      },
    },
    // ───────── 4. Motion graphs
    {
      slug: 'g11-graphs-1-motion-graphs',
      visuals: [{
        type: 'functionPlot', view: { xMin: 0, xMax: 4.2, yMin: 0, yMax: 140 }, height: 220,
        functions: [
          { expr: '80*x', domain: [0, 1.5], label: '80 km/h' },
          { expr: '120 + 0*x', domain: [1.5, 2], color: 'muted' },
          { expr: '120 - 60*(x - 2)', domain: [2, 4], color: 'secondary', label: '60 km/h' },
        ],
        points: [{ at: [1.5, 120], label: alt('(1,5; 120)', '(1.5, 120)', '(1,5 | 120)') }, { at: [2, 120] }, { at: [4, 0], label: '(4, 0)' }],
        caption: alt('Largësia (km) sipas kohës (h): 120 km për 1,5 h, pushim 0,5 h, kthim për 2 h.', 'Distance (km) against time (h): 120 km in 1.5 h, a 0.5 h stop, back in 2 h.', 'Entfernung (km) über der Zeit (h): 120 km in 1,5 h, 0,5 h Pause, Rückfahrt in 2 h.'),
        alt: alt('Grafiku largësi-kohë: rritje deri 120 km në 1,5 h, vijë horizontale deri 2 h, rënie në 0 te 4 h.', 'Distance–time graph: rising to 120 km at 1.5 h, flat until 2 h, falling to 0 at 4 h.', 'Weg-Zeit-Diagramm: Anstieg auf 120 km bei 1,5 h, waagerecht bis 2 h, Abfall auf 0 bei 4 h.'),
      }],
      answers: {
        examples: [[['120 / 1.5', 80]], [['20 / 8', 2.5], ['0.5 * 8 * 20', 80]]],
        practice: [[['120 / 2', 60]], [['240 / 4', 60]], [['30 / 6', 5], ['0.5 * 6 * 30', 90]]],
      },
      al: {
        title: 'Grafikët e lëvizjes',
        objectives: ['Të lexoni shpejtësinë nga grafiku largësi-kohë.', 'Të lexoni nxitimin dhe rrugën nga grafiku shpejtësi-kohë.'],
        theory: 'Te grafiku largësi-kohë, pjerrësia (koeficienti këndor) është shpejtësia: 120 km për 1,5 h → 80 km/h. Vija horizontale do të thotë se trupi qëndron; vija që zbret do të thotë kthim.\n\nTe grafiku shpejtësi-kohë, pjerrësia është nxitimi dhe syprina nën grafik është rruga e kaluar. Nga 0 në 20 m/s për 8 s: nxitimi 20/8 = 2,5 m/s², rruga = 1/2 · 8 · 20 = 80 m.\n\nShpejtësia mesatare = rruga e plotë : koha e plotë (përfshirë pushimet).',
        keyPoints: ['Largësi-kohë: pjerrësia = shpejtësia', 'Shpejtësi-kohë: pjerrësia = nxitimi', 'Shpejtësi-kohë: syprina = rruga'],
        examples: [
          { example: 'Një makinë bën 120 km për 1,5 orë. Sa është shpejtësia mesatare?', solution: '120 : 1,5 = 80 km/h.' },
          { example: 'Një makinë nga qetësia arrin 20 m/s për 8 s me nxitim të njëtrajtshëm. Sa është nxitimi dhe rruga?', solution: 'a = 20/8 = 2,5 m/s²; rruga = 1/2 · 8 · 20 = 80 m.' },
        ],
        commonMistakes: [
          { mistake: 'Vija horizontale te largësi-kohë lexohet si shpejtësi konstante.', fix: 'Largësia nuk ndryshon, pra trupi qëndron (shpejtësia 0).' },
          { mistake: 'Te shpejtësi-kohë rruga lexohet nga lartësia e grafikut.', fix: 'Rruga është syprina nën grafik.' },
        ],
        practice: [
          { problem: 'Kthimi prej 120 km zgjat 2 h. Sa është shpejtësia?', solution: '60 km/h', steps: ['120 : 2.', '= 60 km/h.'] },
          { problem: 'E gjithë rruga (vajtje-ardhje) 240 km zgjat 4 h me pushimin. Sa është shpejtësia mesatare?', solution: '60 km/h', steps: ['240 : 4.', '= 60 km/h.'] },
          { problem: 'Një makinë frenon nga 30 m/s në 0 për 6 s. Sa është ngadalësimi dhe rruga e frenimit?', solution: '5 m/s²; 90 m', steps: ['30 : 6 = 5 m/s².', '1/2 · 6 · 30 = 90 m.'] },
        ],
      },
      en: {
        title: 'Motion graphs',
        objectives: ['Read speed from a distance–time graph.', 'Read acceleration and distance from a speed–time graph.'],
        theory: 'On a distance–time graph, the gradient is the speed: 120 km in 1.5 h → 80 km/h. A horizontal line means the object is stopped; a line going down means it is coming back.\n\nOn a speed–time graph, the gradient is the acceleration and the area under the graph is the distance travelled. From 0 to 20 m/s in 8 s: acceleration 20/8 = 2.5 m/s², distance = 1/2 · 8 · 20 = 80 m.\n\nAverage speed = total distance ÷ total time (stops included).',
        keyPoints: ['Distance–time: gradient = speed', 'Speed–time: gradient = acceleration', 'Speed–time: area = distance'],
        examples: [
          { example: 'A car travels 120 km in 1.5 hours. What is its average speed?', solution: '120 ÷ 1.5 = 80 km/h.' },
          { example: 'A car starts from rest and reaches 20 m/s in 8 s with constant acceleration. What are the acceleration and the distance?', solution: 'a = 20/8 = 2.5 m/s²; distance = 1/2 · 8 · 20 = 80 m.' },
        ],
        commonMistakes: [
          { mistake: 'A horizontal line on a distance–time graph is read as constant speed.', fix: 'The distance does not change, so the object is stopped (speed 0).' },
          { mistake: 'On a speed–time graph the distance is read from the height of the graph.', fix: 'The distance is the area under the graph.' },
        ],
        practice: [
          { problem: 'The 120 km return trip takes 2 h. What is the speed?', solution: '60 km/h', steps: ['120 ÷ 2.', '= 60 km/h.'] },
          { problem: 'The whole round trip of 240 km takes 4 h including the stop. What is the average speed?', solution: '60 km/h', steps: ['240 ÷ 4.', '= 60 km/h.'] },
          { problem: 'A car brakes from 30 m/s to 0 in 6 s. What are the deceleration and the braking distance?', solution: '5 m/s²; 90 m', steps: ['30 ÷ 6 = 5 m/s².', '1/2 · 6 · 30 = 90 m.'] },
        ],
      },
      de: {
        title: 'Bewegungsdiagramme',
        objectives: ['Die Geschwindigkeit aus einem Weg-Zeit-Diagramm ablesen.', 'Beschleunigung und Weg aus einem Geschwindigkeit-Zeit-Diagramm bestimmen.'],
        theory: 'Im Weg-Zeit-Diagramm ist die Steigung die Geschwindigkeit: 120 km in 1,5 h → 80 km/h. Eine waagerechte Linie bedeutet Stillstand, eine fallende Linie die Rückfahrt.\n\nIm Geschwindigkeit-Zeit-Diagramm ist die Steigung die Beschleunigung und die Fläche unter dem Graphen der zurückgelegte Weg. Von 0 auf 20 m/s in 8 s: Beschleunigung 20/8 = 2,5 m/s², Weg = 1/2 · 8 · 20 = 80 m.\n\nDurchschnittsgeschwindigkeit = Gesamtweg : Gesamtzeit (Pausen eingeschlossen).',
        keyPoints: ['Weg-Zeit: Steigung = Geschwindigkeit', 'Geschwindigkeit-Zeit: Steigung = Beschleunigung', 'Geschwindigkeit-Zeit: Fläche = Weg'],
        examples: [
          { example: 'Ein Auto fährt 120 km in 1,5 Stunden. Wie groß ist die Durchschnittsgeschwindigkeit?', solution: '120 : 1,5 = 80 km/h.' },
          { example: 'Ein Auto beschleunigt gleichmäßig aus dem Stand in 8 s auf 20 m/s. Wie groß sind Beschleunigung und Weg?', solution: 'a = 20/8 = 2,5 m/s²; Weg = 1/2 · 8 · 20 = 80 m.' },
        ],
        commonMistakes: [
          { mistake: 'Eine waagerechte Linie im Weg-Zeit-Diagramm wird als konstante Geschwindigkeit gelesen.', fix: 'Der Weg ändert sich nicht, also steht der Körper (Geschwindigkeit 0).' },
          { mistake: 'Im Geschwindigkeit-Zeit-Diagramm wird der Weg an der Höhe des Graphen abgelesen.', fix: 'Der Weg ist die Fläche unter dem Graphen.' },
        ],
        practice: [
          { problem: 'Die Rückfahrt über 120 km dauert 2 h. Wie groß ist die Geschwindigkeit?', solution: '60 km/h', steps: ['120 : 2.', '= 60 km/h.'] },
          { problem: 'Die ganze Fahrt hin und zurück (240 km) dauert mit Pause 4 h. Wie groß ist die Durchschnittsgeschwindigkeit?', solution: '60 km/h', steps: ['240 : 4.', '= 60 km/h.'] },
          { problem: 'Ein Auto bremst in 6 s von 30 m/s auf 0. Wie groß sind Verzögerung und Bremsweg?', solution: '5 m/s²; 90 m', steps: ['30 : 6 = 5 m/s².', '1/2 · 6 · 30 = 90 m.'] },
        ],
      },
    },
  ],
};
