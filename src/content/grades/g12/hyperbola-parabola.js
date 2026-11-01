// Grade 12 · Theme 11: Second-degree curves – hyperbola and parabola
const alt = (al, en, de) => ({ al, en, de });
const PARABOLA = [
  { expr: 'sqrt(8*x)', domain: [0, 7], label: 'y² = 8x' },
  { expr: '-sqrt(8*x)', domain: [0, 7] },
];

export default {
  id: 'g12-hyperbola-parabola',
  i18n: {
    al: { title: 'Vijat e gradës së dytë: hiperbola dhe parabola', description: 'Hiperbola, vatrat dhe asimptotat, parabola me vatrën dhe drejtëzën drejtuese, pozita e drejtëzës ndaj konikëve dhe tangjentja.' },
    en: { title: 'Conics: hyperbola and parabola', description: 'The hyperbola, its foci and asymptotes, the parabola with focus and directrix, the position of a line relative to a conic, and tangents.' },
    de: { title: 'Kegelschnitte: Hyperbel und Parabel', description: 'Die Hyperbel mit Brennpunkten und Asymptoten, die Parabel mit Brennpunkt und Leitgerade, Lage einer Geraden zum Kegelschnitt und Tangenten.' },
  },
  lessons: [
    // ───────── 1. Hyperbola
    {
      slug: 'g12-hyperbola-parabola-hyperbola',
      visuals: [{
        type: 'functionPlot', view: { xMin: -9, xMax: 9, yMin: -6, yMax: 6 }, height: 230,
        functions: [
          { expr: '3*sqrt(x^2/16 - 1)', domain: [4, 9], label: 'x²/16 − y²/9 = 1' },
          { expr: '-3*sqrt(x^2/16 - 1)', domain: [4, 9] },
          { expr: '3*sqrt(x^2/16 - 1)', domain: [-9, -4] },
          { expr: '-3*sqrt(x^2/16 - 1)', domain: [-9, -4] },
          { expr: '0.75*x', color: 'muted', dashed: true, label: 'y = 3x/4' },
          { expr: '-0.75*x', color: 'muted', dashed: true },
        ],
        points: [{ at: [-5, 0], label: 'F₁' }, { at: [5, 0], label: 'F₂' }],
        caption: alt('a = 4, b = 3, c = √(16 + 9) = 5; asimptotat y = ±3x/4.', 'a = 4, b = 3, c = √(16 + 9) = 5; asymptotes y = ±3x/4.', 'a = 4, b = 3, e = √(16 + 9) = 5; Asymptoten y = ±3x/4.'),
        alt: alt('Hiperbola x²/16 − y²/9 = 1 me dy degë, asimptotat e ndërprera dhe vatrat (±5, 0).', 'The hyperbola x²/16 − y²/9 = 1 with two branches, dashed asymptotes and foci (±5, 0).', 'Die Hyperbel x²/16 − y²/9 = 1 mit zwei Ästen, gestrichelten Asymptoten und Brennpunkten (±5 | 0).'),
      }],
      answers: {
        examples: [[['3 / 4', 0.75, 0, '3x/4']], [['sqrt(16 + 9)', 5]]],
        practice: [[['sqrt(9 + 16)', 5]], 'text', [['2 * 4', 8]]],
      },
      al: {
        title: 'Hiperbola dhe asimptotat',
        objectives: ['Të lexoni a, b, vatrat dhe asimptotat nga ekuacioni kanonik i hiperbolës.', 'Të përdorni vetinë |r₁ − r₂| = 2a.'],
        theory: 'Hiperbola është bashkësia e pikave për të cilat diferenca e largësive nga dy vatra është konstante: |r₁ − r₂| = 2a.\n\nEkuacioni kanonik: x²/a² − y²/b² = 1. Kulmet (±a, 0), vatrat (±c, 0) me c² = a² + b², jashtëqendërsia ε = c/a > 1.\nAsimptotat: y = ±(b/a)x – degët afrohen pa fund te këto drejtëza.\n\nx²/16 − y²/9 = 1: a = 4, b = 3, c = 5, asimptotat y = ±3x/4.',
        keyPoints: ['x²/a² − y²/b² = 1', 'c² = a² + b²', 'Asimptotat y = ±(b/a)x'],
        examples: [
          { example: 'Gjeni asimptotat e hiperbolës x²/16 − y²/9 = 1.', solution: 'b/a = 3/4 → y = ±3x/4.' },
          { example: 'Gjeni vatrat e saj.', solution: 'c = √(16 + 9) = 5 → F(±5, 0).' },
        ],
        commonMistakes: [
          { mistake: 'Te hiperbola c² = a² − b².', fix: 'Te hiperbola mblidhen: c² = a² + b² (te elipsa zbriten).' },
          { mistake: 'Asimptotat shkruhen y = ±(a/b)x.', fix: 'Pjerrësia është b/a: y = ±3x/4.' },
        ],
        practice: [
          { problem: 'Gjeni c për x²/9 − y²/16 = 1.', solution: 'c = 5', steps: ['c² = 9 + 16 = 25.', 'c = 5.'] },
          { problem: 'Gjeni asimptotat e x²/4 − y² = 1.', solution: 'y = ±x/2', steps: ['a = 2, b = 1.', 'y = ±(1/2)x.'] },
          { problem: 'Sa është |r₁ − r₂| për çdo pikë të x²/16 − y²/9 = 1?', solution: '8', steps: ['|r₁ − r₂| = 2a.', '2 · 4 = 8.'] },
        ],
      },
      en: {
        title: 'The hyperbola and its asymptotes',
        objectives: ['Read a, b, the foci and the asymptotes from the standard equation of a hyperbola.', 'Use the property |r₁ − r₂| = 2a.'],
        theory: 'A hyperbola is the set of points whose distances from two foci differ by a constant: |r₁ − r₂| = 2a.\n\nStandard equation: x²/a² − y²/b² = 1. Vertices (±a, 0), foci (±c, 0) with c² = a² + b², eccentricity e = c/a > 1.\nAsymptotes: y = ±(b/a)x – the branches get ever closer to these lines.\n\nx²/16 − y²/9 = 1: a = 4, b = 3, c = 5, asymptotes y = ±3x/4.',
        keyPoints: ['x²/a² − y²/b² = 1', 'c² = a² + b²', 'Asymptotes y = ±(b/a)x'],
        examples: [
          { example: 'Find the asymptotes of the hyperbola x²/16 − y²/9 = 1.', solution: 'b/a = 3/4 → y = ±3x/4.' },
          { example: 'Find its foci.', solution: 'c = √(16 + 9) = 5 → F(±5, 0).' },
        ],
        commonMistakes: [
          { mistake: 'For a hyperbola c² = a² − b².', fix: 'For a hyperbola they add: c² = a² + b² (for an ellipse they subtract).' },
          { mistake: 'The asymptotes are written y = ±(a/b)x.', fix: 'The gradient is b/a: y = ±3x/4.' },
        ],
        practice: [
          { problem: 'Find c for x²/9 − y²/16 = 1.', solution: 'c = 5', steps: ['c² = 9 + 16 = 25.', 'c = 5.'] },
          { problem: 'Find the asymptotes of x²/4 − y² = 1.', solution: 'y = ±x/2', steps: ['a = 2, b = 1.', 'y = ±(1/2)x.'] },
          { problem: 'What is |r₁ − r₂| for every point of x²/16 − y²/9 = 1?', solution: '8', steps: ['|r₁ − r₂| = 2a.', '2 · 4 = 8.'] },
        ],
      },
      de: {
        title: 'Die Hyperbel und ihre Asymptoten',
        objectives: ['a, b, Brennpunkte und Asymptoten aus der Mittelpunktsgleichung der Hyperbel ablesen.', 'Die Eigenschaft |r₁ − r₂| = 2a nutzen.'],
        theory: 'Eine Hyperbel ist die Menge aller Punkte, deren Abstände von zwei Brennpunkten sich um eine Konstante unterscheiden: |r₁ − r₂| = 2a.\n\nMittelpunktsgleichung: x²/a² − y²/b² = 1. Scheitel (±a | 0), Brennpunkte (±e | 0) mit e² = a² + b², numerische Exzentrizität ε = e/a > 1.\nAsymptoten: y = ±(b/a)x – die Äste nähern sich diesen Geraden beliebig.\n\nx²/16 − y²/9 = 1: a = 4, b = 3, e = 5, Asymptoten y = ±3x/4.',
        keyPoints: ['x²/a² − y²/b² = 1', 'e² = a² + b²', 'Asymptoten y = ±(b/a)x'],
        examples: [
          { example: 'Bestimmen Sie die Asymptoten der Hyperbel x²/16 − y²/9 = 1.', solution: 'b/a = 3/4 → y = ±3x/4.' },
          { example: 'Bestimmen Sie ihre Brennpunkte.', solution: 'e = √(16 + 9) = 5 → F(±5 | 0).' },
        ],
        commonMistakes: [
          { mistake: 'Bei der Hyperbel gilt e² = a² − b².', fix: 'Bei der Hyperbel wird addiert: e² = a² + b² (bei der Ellipse subtrahiert).' },
          { mistake: 'Die Asymptoten werden y = ±(a/b)x geschrieben.', fix: 'Die Steigung ist b/a: y = ±3x/4.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie e für x²/9 − y²/16 = 1.', solution: 'e = 5', steps: ['e² = 9 + 16 = 25.', 'e = 5.'] },
          { problem: 'Bestimmen Sie die Asymptoten von x²/4 − y² = 1.', solution: 'y = ±x/2', steps: ['a = 2, b = 1.', 'y = ±(1/2)x.'] },
          { problem: 'Wie groß ist |r₁ − r₂| für jeden Punkt von x²/16 − y²/9 = 1?', solution: '8', steps: ['|r₁ − r₂| = 2a.', '2 · 4 = 8.'] },
        ],
      },
    },
    // ───────── 2. Parabola
    {
      slug: 'g12-hyperbola-parabola-parabola',
      visuals: [{
        type: 'functionPlot', view: { xMin: -3, xMax: 7, yMin: -8, yMax: 8 }, height: 230,
        functions: PARABOLA,
        points: [{ at: [2, 0], label: 'F(2, 0)' }, { at: [2, 4], label: '(2, 4)' }],
        caption: alt('y² = 8x: 2p = 8, p = 4; vatra F(2, 0), drejtëza drejtuese x = −2.', 'y² = 8x: 2p = 8, p = 4; focus F(2, 0), directrix x = −2.', 'y² = 8x: 2p = 8, p = 4; Brennpunkt F(2 | 0), Leitgerade x = −2.'),
        alt: alt('Parabola y² = 8x e hapur djathtas me vatrën (2, 0).', 'The parabola y² = 8x opening to the right with focus (2, 0).', 'Die nach rechts geöffnete Parabel y² = 8x mit Brennpunkt (2 | 0).'),
      }],
      answers: {
        examples: [[['8 / 4', 2]], [['2 + 2', 4]]],
        practice: [[['12 / 4', 3]], [['4 * 5', 20]], [['8 / 4', 2]]],
      },
      al: {
        title: 'Parabola',
        objectives: ['Të gjeni vatrën dhe drejtëzën drejtuese të parabolës y² = 2px.', 'Të përdorni vetinë: largësia nga vatra = largësia nga drejtëza drejtuese.'],
        theory: 'Parabola është bashkësia e pikave që janë njësoj larg nga një pikë F (vatra) dhe nga një drejtëz d (drejtëza drejtuese).\n\nEkuacioni kanonik: y² = 2px (p > 0). Vatra F(p/2, 0), drejtëza drejtuese x = −p/2, kulmi në origjinë.\n\ny² = 8x: 2p = 8 → p = 4, F(2, 0), d: x = −2. Për pikën (2, 4): largësia nga d është 2 + 2 = 4, sa largësia nga F.\nNgjashëm x² = 2py ka vatrën (0, p/2).',
        keyPoints: ['y² = 2px', 'F(p/2, 0), d: x = −p/2', '|PF| = largësia e P nga d'],
        examples: [
          { example: 'Gjeni vatrën dhe drejtëzën drejtuese të y² = 8x.', solution: '2p = 8 → p = 4: F(2, 0), x = −2.' },
          { example: 'Sa larg nga vatra është pika (2, 4) e kësaj parabole?', solution: 'Sa nga drejtëza drejtuese: 2 − (−2) = 2 + 2 = 4.' },
        ],
        commonMistakes: [
          { mistake: 'Te y² = 8x vatra merret (8, 0).', fix: '2p = 8, vatra është në p/2 = 2.' },
        ],
        practice: [
          { problem: 'Gjeni vatrën e y² = 12x.', solution: 'F(3, 0)', steps: ['2p = 12 → p = 6.', 'p/2 = 3 → F(3, 0).'] },
          { problem: 'Shkruani parabolën y² = 2px me vatër (5, 0).', solution: 'y² = 20x', steps: ['p/2 = 5 → p = 10.', '2p = 20 → y² = 20x.'] },
          { problem: 'Gjeni vatrën e x² = 8y.', solution: 'F(0, 2)', steps: ['2p = 8 → p = 4.', 'p/2 = 2 → F(0, 2).'] },
        ],
      },
      en: {
        title: 'The parabola',
        objectives: ['Find the focus and directrix of the parabola y² = 2px.', 'Use the property: distance to the focus = distance to the directrix.'],
        theory: 'A parabola is the set of points equidistant from a point F (the focus) and a line d (the directrix).\n\nStandard equation: y² = 2px (p > 0). Focus F(p/2, 0), directrix x = −p/2, vertex at the origin.\n\ny² = 8x: 2p = 8 → p = 4, F(2, 0), d: x = −2. For the point (2, 4): distance to d is 2 + 2 = 4, the same as to F.\nSimilarly x² = 2py has focus (0, p/2).',
        keyPoints: ['y² = 2px', 'F(p/2, 0), d: x = −p/2', '|PF| = distance from P to d'],
        examples: [
          { example: 'Find the focus and directrix of y² = 8x.', solution: '2p = 8 → p = 4: F(2, 0), x = −2.' },
          { example: 'How far is the point (2, 4) of this parabola from the focus?', solution: 'As far as from the directrix: 2 − (−2) = 2 + 2 = 4.' },
        ],
        commonMistakes: [
          { mistake: 'For y² = 8x the focus is taken as (8, 0).', fix: '2p = 8, the focus is at p/2 = 2.' },
        ],
        practice: [
          { problem: 'Find the focus of y² = 12x.', solution: 'F(3, 0)', steps: ['2p = 12 → p = 6.', 'p/2 = 3 → F(3, 0).'] },
          { problem: 'Write the parabola y² = 2px with focus (5, 0).', solution: 'y² = 20x', steps: ['p/2 = 5 → p = 10.', '2p = 20 → y² = 20x.'] },
          { problem: 'Find the focus of x² = 8y.', solution: 'F(0, 2)', steps: ['2p = 8 → p = 4.', 'p/2 = 2 → F(0, 2).'] },
        ],
      },
      de: {
        title: 'Die Parabel',
        objectives: ['Brennpunkt und Leitgerade der Parabel y² = 2px bestimmen.', 'Die Eigenschaft nutzen: Abstand zum Brennpunkt = Abstand zur Leitgeraden.'],
        theory: 'Eine Parabel ist die Menge aller Punkte, die von einem Punkt F (Brennpunkt) und einer Geraden l (Leitgerade) gleich weit entfernt sind.\n\nScheitelgleichung: y² = 2px (p > 0). Brennpunkt F(p/2 | 0), Leitgerade x = −p/2, Scheitel im Ursprung.\n\ny² = 8x: 2p = 8 → p = 4, F(2 | 0), l: x = −2. Für den Punkt (2 | 4): Abstand zu l ist 2 + 2 = 4, ebenso zu F.\nEntsprechend hat x² = 2py den Brennpunkt (0 | p/2).',
        keyPoints: ['y² = 2px', 'F(p/2 | 0), l: x = −p/2', '|PF| = Abstand von P zu l'],
        examples: [
          { example: 'Bestimmen Sie Brennpunkt und Leitgerade von y² = 8x.', solution: '2p = 8 → p = 4: F(2 | 0), x = −2.' },
          { example: 'Wie weit ist der Parabelpunkt (2 | 4) vom Brennpunkt entfernt?', solution: 'So weit wie von der Leitgeraden: 2 − (−2) = 2 + 2 = 4.' },
        ],
        commonMistakes: [
          { mistake: 'Bei y² = 8x wird der Brennpunkt (8 | 0) genommen.', fix: '2p = 8, der Brennpunkt liegt bei p/2 = 2.' },
        ],
        practice: [
          { problem: 'Bestimmen Sie den Brennpunkt von y² = 12x.', solution: 'F(3 | 0)', steps: ['2p = 12 → p = 6.', 'p/2 = 3 → F(3 | 0).'] },
          { problem: 'Stellen Sie die Parabel y² = 2px mit Brennpunkt (5 | 0) auf.', solution: 'y² = 20x', steps: ['p/2 = 5 → p = 10.', '2p = 20 → y² = 20x.'] },
          { problem: 'Bestimmen Sie den Brennpunkt von x² = 8y.', solution: 'F(0 | 2)', steps: ['2p = 8 → p = 4.', 'p/2 = 2 → F(0 | 2).'] },
        ],
      },
    },
    // ───────── 3. Position of a line relative to a conic
    {
      slug: 'g12-hyperbola-parabola-line-conic',
      visuals: [{
        type: 'functionPlot', view: { xMin: -3, xMax: 7, yMin: -8, yMax: 8 }, height: 230,
        functions: [
          ...PARABOLA,
          { expr: 'x + 1', domain: [-3, 7], color: 'secondary', label: 'y = x + 1' },
          { expr: 'x + 2', domain: [-3, 6], color: 'success', dashed: true, label: 'y = x + 2' },
        ],
        points: [{ at: [2, 4], label: '(2, 4)' }],
        caption: alt('y = x + 1 e pret parabolën në dy pika (D > 0); y = x + 2 e prek në (2, 4) (D = 0).', 'y = x + 1 cuts the parabola at two points (D > 0); y = x + 2 touches it at (2, 4) (D = 0).', 'y = x + 1 schneidet die Parabel zweimal (D > 0); y = x + 2 berührt sie in (2 | 4) (D = 0).'),
        alt: alt('Parabola y² = 8x me drejtëzat y = x + 1 dhe y = x + 2.', 'The parabola y² = 8x with the lines y = x + 1 and y = x + 2.', 'Die Parabel y² = 8x mit den Geraden y = x + 1 und y = x + 2.'),
      }],
      answers: {
        examples: [[['36 - 4', 32]], [['16 - 16', 0]]],
        practice: [[['sqrt(32)', 5.66, 0.005]], [['4 - 36', -32]], [['64 / 32', 2]]],
      },
      al: {
        title: 'Pozita e drejtëzës ndaj konikëve',
        objectives: ['Të gjeni pikat e prerjes së drejtëzës me një konik duke zëvendësuar.', 'Të përcaktoni pozitën me diskriminantin e ekuacionit të fituar.'],
        theory: 'Zëvendësojmë drejtëzën te ekuacioni i konikut dhe fitojmë ekuacion të fuqisë së dytë. Diskriminanti D tregon pozitën:\n• D > 0: dy pika prerjeje (sekante);\n• D = 0: një pikë (tangjente);\n• D < 0: asnjë pikë e përbashkët.\n\ny = x + 1 dhe y² = 8x: (x + 1)² = 8x → x² − 6x + 1 = 0, D = 36 − 4 = 32 > 0.\ny = x + 2: x² − 4x + 4 = 0, D = 0 → x = 2, y = 4: tangjente në (2, 4).',
        keyPoints: ['Zëvendëso drejtëzën te koniku', 'D > 0 dy pika, D = 0 tangjente, D < 0 asnjë', 'Kusht tangjence: D = 0'],
        examples: [
          { example: 'Si qëndron y = x + 1 ndaj y² = 8x?', solution: 'x² − 6x + 1 = 0, D = 36 − 4 = 32 > 0 → dy pika prerjeje.' },
          { example: 'Si qëndron y = x + 2 ndaj y² = 8x?', solution: 'x² − 4x + 4 = 0, D = 16 − 16 = 0 → tangjente në (2, 4).' },
        ],
        commonMistakes: [
          { mistake: 'Pas zëvendësimit harrohet të hapet (x + 1)².', fix: '(x + 1)² = x² + 2x + 1, jo x² + 1.' },
        ],
        practice: [
          { problem: 'Ku e pret y = 3 hiperbolën x²/16 − y²/9 = 1?', solution: 'x = ±4√2 ≈ ±5,66', steps: ['x²/16 − 1 = 1 → x² = 32.', 'x = ±√32 ≈ ±5,66.'] },
          { problem: 'A e pret y = x + 3 parabolën y² = 8x?', solution: 'Jo', steps: ['(x + 3)² = 8x → x² − 2x + 9 = 0.', 'D = 4 − 36 = −32 < 0 → asnjë pikë.'] },
          { problem: 'Për çfarë n është y = x + n tangjente e y² = 8x?', solution: 'n = 2', steps: ['x² + (2n − 8)x + n² = 0; D = (2n − 8)² − 4n² = 64 − 32n.', 'D = 0 → n = 64/32 = 2.'] },
        ],
      },
      en: {
        title: 'Position of a line relative to a conic',
        objectives: ['Find where a line meets a conic by substitution.', 'Decide the position using the discriminant of the resulting equation.'],
        theory: 'Substitute the line into the equation of the conic to get a quadratic equation. Its discriminant D shows the position:\n• D > 0: two points of intersection (secant);\n• D = 0: one point (tangent);\n• D < 0: no common points.\n\ny = x + 1 and y² = 8x: (x + 1)² = 8x → x² − 6x + 1 = 0, D = 36 − 4 = 32 > 0.\ny = x + 2: x² − 4x + 4 = 0, D = 0 → x = 2, y = 4: tangent at (2, 4).',
        keyPoints: ['Substitute the line into the conic', 'D > 0 two points, D = 0 tangent, D < 0 none', 'Tangency condition: D = 0'],
        examples: [
          { example: 'How does y = x + 1 lie relative to y² = 8x?', solution: 'x² − 6x + 1 = 0, D = 36 − 4 = 32 > 0 → two points of intersection.' },
          { example: 'How does y = x + 2 lie relative to y² = 8x?', solution: 'x² − 4x + 4 = 0, D = 16 − 16 = 0 → tangent at (2, 4).' },
        ],
        commonMistakes: [
          { mistake: 'After substituting, (x + 1)² is not expanded properly.', fix: '(x + 1)² = x² + 2x + 1, not x² + 1.' },
        ],
        practice: [
          { problem: 'Where does y = 3 meet the hyperbola x²/16 − y²/9 = 1?', solution: 'x = ±4√2 ≈ ±5.66', steps: ['x²/16 − 1 = 1 → x² = 32.', 'x = ±√32 ≈ ±5.66.'] },
          { problem: 'Does y = x + 3 meet the parabola y² = 8x?', solution: 'No', steps: ['(x + 3)² = 8x → x² − 2x + 9 = 0.', 'D = 4 − 36 = −32 < 0 → no points.'] },
          { problem: 'For which n is y = x + n a tangent to y² = 8x?', solution: 'n = 2', steps: ['x² + (2n − 8)x + n² = 0; D = (2n − 8)² − 4n² = 64 − 32n.', 'D = 0 → n = 64/32 = 2.'] },
        ],
      },
      de: {
        title: 'Lage einer Geraden zum Kegelschnitt',
        objectives: ['Schnittpunkte einer Geraden mit einem Kegelschnitt durch Einsetzen bestimmen.', 'Die Lage über die Diskriminante der entstehenden Gleichung bestimmen.'],
        theory: 'Man setzt die Gerade in die Gleichung des Kegelschnitts ein und erhält eine quadratische Gleichung. Ihre Diskriminante D zeigt die Lage:\n• D > 0: zwei Schnittpunkte (Sekante);\n• D = 0: ein Berührpunkt (Tangente);\n• D < 0: keine gemeinsamen Punkte (Passante).\n\ny = x + 1 und y² = 8x: (x + 1)² = 8x → x² − 6x + 1 = 0, D = 36 − 4 = 32 > 0.\ny = x + 2: x² − 4x + 4 = 0, D = 0 → x = 2, y = 4: Tangente in (2 | 4).',
        keyPoints: ['Gerade in den Kegelschnitt einsetzen', 'D > 0 zwei Punkte, D = 0 Tangente, D < 0 keine', 'Berührbedingung: D = 0'],
        examples: [
          { example: 'Welche Lage hat y = x + 1 zu y² = 8x?', solution: 'x² − 6x + 1 = 0, D = 36 − 4 = 32 > 0 → zwei Schnittpunkte.' },
          { example: 'Welche Lage hat y = x + 2 zu y² = 8x?', solution: 'x² − 4x + 4 = 0, D = 16 − 16 = 0 → Tangente in (2 | 4).' },
        ],
        commonMistakes: [
          { mistake: 'Nach dem Einsetzen wird (x + 1)² falsch aufgelöst.', fix: '(x + 1)² = x² + 2x + 1, nicht x² + 1.' },
        ],
        practice: [
          { problem: 'Wo schneidet y = 3 die Hyperbel x²/16 − y²/9 = 1?', solution: 'x = ±4√2 ≈ ±5,66', steps: ['x²/16 − 1 = 1 → x² = 32.', 'x = ±√32 ≈ ±5,66.'] },
          { problem: 'Schneidet y = x + 3 die Parabel y² = 8x?', solution: 'Nein', steps: ['(x + 3)² = 8x → x² − 2x + 9 = 0.', 'D = 4 − 36 = −32 < 0 → keine Punkte.'] },
          { problem: 'Für welches n ist y = x + n Tangente an y² = 8x?', solution: 'n = 2', steps: ['x² + (2n − 8)x + n² = 0; D = (2n − 8)² − 4n² = 64 − 32n.', 'D = 0 → n = 64/32 = 2.'] },
        ],
      },
    },
    // ───────── 4. Tangents to conics
    {
      slug: 'g12-hyperbola-parabola-tangent',
      visuals: [{
        type: 'functionPlot', view: { xMin: -3, xMax: 7, yMin: -8, yMax: 8 }, height: 230,
        functions: [...PARABOLA, { expr: 'x + 2', domain: [-3, 6], color: 'secondary', label: 'y = x + 2' }],
        points: [{ at: [2, 4], label: '(2, 4)' }],
        caption: alt('Tangjentja e y² = 8x (p = 4) në (2, 4): 4y = 4(x + 2), pra y = x + 2.', 'The tangent to y² = 8x (p = 4) at (2, 4): 4y = 4(x + 2), so y = x + 2.', 'Die Tangente an y² = 8x (p = 4) in (2 | 4): 4y = 4(x + 2), also y = x + 2.'),
        alt: alt('Parabola y² = 8x me tangjenten y = x + 2 në pikën (2, 4).', 'The parabola y² = 8x with the tangent y = x + 2 at the point (2, 4).', 'Die Parabel y² = 8x mit der Tangente y = x + 2 im Punkt (2 | 4).'),
      }],
      answers: {
        examples: [[['4 * (0 + 2) / 4', 2]], [['5 / 4', 1.25, 0, '5x/4'], ['-4', -4, 0, '-4']]],
        practice: ['text', 'text', [['4 / 8', 0.5, 0, '1/2']]],
      },
      al: {
        title: 'Tangjentja e konikëve',
        objectives: ['Të shkruani tangjenten e parabolës, elipsës dhe hiperbolës në një pikë të tyre.', 'Të lexoni koeficientin këndor të tangjentes.'],
        theory: 'Tangjentja në pikën (x₀, y₀) të konikut fitohet duke "ndarë" katrorët:\n• parabola y² = 2px: y₀y = p(x + x₀);\n• elipsa x²/a² + y²/b² = 1: x₀x/a² + y₀y/b² = 1;\n• hiperbola x²/a² − y²/b² = 1: x₀x/a² − y₀y/b² = 1.\n\ny² = 8x (p = 4) në (2, 4): 4y = 4(x + 2) → y = x + 2.\nHiperbola x²/16 − y²/9 = 1 në (5, 9/4): 5x/16 − (9/4)y/9 = 1 → y = 5x/4 − 4.',
        keyPoints: ['Parabola: y₀y = p(x + x₀)', 'Elipsa: x₀x/a² + y₀y/b² = 1', 'Hiperbola: x₀x/a² − y₀y/b² = 1'],
        examples: [
          { example: 'Gjeni tangjenten e y² = 8x në (2, 4).', solution: 'p = 4: 4y = 4(x + 2) → y = x + 2.' },
          { example: 'Gjeni tangjenten e x²/16 − y²/9 = 1 në (5, 9/4).', solution: '5x/16 − y/4 = 1 → y = 5x/4 − 4.' },
        ],
        commonMistakes: [
          { mistake: 'Te parabola shkruhet y₀y = 2p(x + x₀).', fix: 'Me y² = 2px formula është y₀y = p(x + x₀).' },
        ],
        practice: [
          { problem: 'Gjeni tangjenten e y² = 4x në (1, 2).', solution: 'y = x + 1', steps: ['2p = 4 → p = 2: 2y = 2(x + 1).', 'y = x + 1.'] },
          { problem: 'Gjeni tangjenten e x²/25 + y²/9 = 1 në kulmin (5, 0).', solution: 'x = 5', steps: ['5x/25 + 0 = 1.', 'x = 5 (drejtëz vertikale).'] },
          { problem: 'Sa është koeficienti këndor i tangjentes së y² = 8x në (8, 8)?', solution: '1/2', steps: ['8y = 4(x + 8) → y = x/2 + 4.', 'k = 4/8 = 1/2.'] },
        ],
      },
      en: {
        title: 'Tangents to conics',
        objectives: ['Write the tangent to a parabola, ellipse or hyperbola at one of its points.', 'Read off the gradient of the tangent.'],
        theory: 'The tangent at the point (x₀, y₀) of a conic is found by "splitting" the squares:\n• parabola y² = 2px: y₀y = p(x + x₀);\n• ellipse x²/a² + y²/b² = 1: x₀x/a² + y₀y/b² = 1;\n• hyperbola x²/a² − y²/b² = 1: x₀x/a² − y₀y/b² = 1.\n\ny² = 8x (p = 4) at (2, 4): 4y = 4(x + 2) → y = x + 2.\nHyperbola x²/16 − y²/9 = 1 at (5, 9/4): 5x/16 − (9/4)y/9 = 1 → y = 5x/4 − 4.',
        keyPoints: ['Parabola: y₀y = p(x + x₀)', 'Ellipse: x₀x/a² + y₀y/b² = 1', 'Hyperbola: x₀x/a² − y₀y/b² = 1'],
        examples: [
          { example: 'Find the tangent to y² = 8x at (2, 4).', solution: 'p = 4: 4y = 4(x + 2) → y = x + 2.' },
          { example: 'Find the tangent to x²/16 − y²/9 = 1 at (5, 9/4).', solution: '5x/16 − y/4 = 1 → y = 5x/4 − 4.' },
        ],
        commonMistakes: [
          { mistake: 'For the parabola y₀y = 2p(x + x₀) is written.', fix: 'With y² = 2px the formula is y₀y = p(x + x₀).' },
        ],
        practice: [
          { problem: 'Find the tangent to y² = 4x at (1, 2).', solution: 'y = x + 1', steps: ['2p = 4 → p = 2: 2y = 2(x + 1).', 'y = x + 1.'] },
          { problem: 'Find the tangent to x²/25 + y²/9 = 1 at the vertex (5, 0).', solution: 'x = 5', steps: ['5x/25 + 0 = 1.', 'x = 5 (a vertical line).'] },
          { problem: 'What is the gradient of the tangent to y² = 8x at (8, 8)?', solution: '1/2', steps: ['8y = 4(x + 8) → y = x/2 + 4.', 'k = 4/8 = 1/2.'] },
        ],
      },
      de: {
        title: 'Tangenten an Kegelschnitte',
        objectives: ['Die Tangente an Parabel, Ellipse oder Hyperbel in einem ihrer Punkte aufstellen.', 'Die Steigung der Tangente ablesen.'],
        theory: 'Die Tangente im Punkt (x₀ | y₀) eines Kegelschnitts erhält man durch „Aufspalten“ der Quadrate:\n• Parabel y² = 2px: y₀y = p(x + x₀);\n• Ellipse x²/a² + y²/b² = 1: x₀x/a² + y₀y/b² = 1;\n• Hyperbel x²/a² − y²/b² = 1: x₀x/a² − y₀y/b² = 1.\n\ny² = 8x (p = 4) in (2 | 4): 4y = 4(x + 2) → y = x + 2.\nHyperbel x²/16 − y²/9 = 1 in (5 | 9/4): 5x/16 − (9/4)y/9 = 1 → y = 5x/4 − 4.',
        keyPoints: ['Parabel: y₀y = p(x + x₀)', 'Ellipse: x₀x/a² + y₀y/b² = 1', 'Hyperbel: x₀x/a² − y₀y/b² = 1'],
        examples: [
          { example: 'Bestimmen Sie die Tangente an y² = 8x in (2 | 4).', solution: 'p = 4: 4y = 4(x + 2) → y = x + 2.' },
          { example: 'Bestimmen Sie die Tangente an x²/16 − y²/9 = 1 in (5 | 9/4).', solution: '5x/16 − y/4 = 1 → y = 5x/4 − 4.' },
        ],
        commonMistakes: [
          { mistake: 'Bei der Parabel wird y₀y = 2p(x + x₀) geschrieben.', fix: 'Mit y² = 2px lautet die Formel y₀y = p(x + x₀).' },
        ],
        practice: [
          { problem: 'Bestimmen Sie die Tangente an y² = 4x in (1 | 2).', solution: 'y = x + 1', steps: ['2p = 4 → p = 2: 2y = 2(x + 1).', 'y = x + 1.'] },
          { problem: 'Bestimmen Sie die Tangente an x²/25 + y²/9 = 1 im Scheitel (5 | 0).', solution: 'x = 5', steps: ['5x/25 + 0 = 1.', 'x = 5 (senkrechte Gerade).'] },
          { problem: 'Welche Steigung hat die Tangente an y² = 8x in (8 | 8)?', solution: '1/2', steps: ['8y = 4(x + 8) → y = x/2 + 4.', 'k = 4/8 = 1/2.'] },
        ],
      },
    },
  ],
};
