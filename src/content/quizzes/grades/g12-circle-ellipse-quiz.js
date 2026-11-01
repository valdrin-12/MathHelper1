// Grade 12 · Theme 9 quiz: Circle and ellipse (format: see g6-natural-numbers-quiz.js)
// Interactive pictures shown after answering in practice mode ("Show graph")
const circleLine = (n) => ({
  type: 'functionPlot', equal: true, view: { xMin: -9, xMax: 9, yMin: -9, yMax: 9 },
  curves: [{ x: '5*cos(t)', y: '5*sin(t)', label: 'x² + y² = 25' }],
  functions: [{ expr: 'x + n', color: 'secondary', label: 'y = x + {n}' }],
  sliders: [{ name: 'n', min: -10, max: 10, step: 0.5, value: n }],
  readouts: [
    { text: { al: 'Largësia e qendrës nga drejtëza: d = |n|/√2 = {abs(n)/sqrt(2)}; rrezja r = 5.', en: 'Distance from the centre to the line: d = |n|/√2 = {abs(n)/sqrt(2)}; radius r = 5.', de: 'Abstand des Mittelpunkts von der Geraden: d = |n|/√2 = {abs(n)/sqrt(2)}; Radius r = 5.' } },
    { cases: [
      { when: 'abs(abs(n)/sqrt(2) - 5) < 0.02', text: { al: 'd = r: drejtëza është tangjente (një pikë).', en: 'd = r: the line is a tangent (one point).', de: 'd = r: Die Gerade ist Tangente (ein Punkt).' } },
      { when: 'abs(n)/sqrt(2) < 5', text: { al: 'd < r: drejtëza e pret rrethin në dy pika.', en: 'd < r: the line cuts the circle at two points.', de: 'd < r: Die Gerade schneidet den Kreis in zwei Punkten.' } },
      { text: { al: 'd > r: nuk kanë pika të përbashkëta.', en: 'd > r: no common points.', de: 'd > r: keine gemeinsamen Punkte.' } },
    ] },
  ],
  alt: { al: 'Rrethi x² + y² = 25 dhe drejtëza y = x + n me rrëshqitës për n.', en: 'The circle x² + y² = 25 and the line y = x + n with a slider for n.', de: 'Der Kreis x² + y² = 25 und die Gerade y = x + n mit Schieberegler für n.' },
});
const ellipse = (a, b, size) => ({
  type: 'functionPlot', equal: true, view: { xMin: -size, xMax: size, yMin: -size * 0.75, yMax: size * 0.75 },
  curves: [{ x: 'a*cos(t)', y: 'b*sin(t)', label: 'x²/{a^2} + y²/{b^2} = 1' }],
  points: [{ at: ['-sqrt(a^2 - b^2)', 0], label: 'F₁', color: 'secondary' }, { at: ['sqrt(a^2 - b^2)', 0], label: 'F₂', color: 'secondary' }],
  sliders: [{ name: 'a', min: 1, max: 14, step: 1, value: a }, { name: 'b', min: 1, max: 13, step: 1, value: b }],
  readouts: [{ cases: [
    { when: 'a > b', text: { al: 'c = √(a² − b²) = {sqrt(a^2 - b^2)}; jashtëqendërsia ε = c/a = {sqrt(a^2 - b^2)/a}; r₁ + r₂ = 2a = {2*a}.', en: 'c = √(a² − b²) = {sqrt(a^2 - b^2)}; eccentricity e = c/a = {sqrt(a^2 - b^2)/a}; r₁ + r₂ = 2a = {2*a}.', de: 'e = √(a² − b²) = {sqrt(a^2 - b^2)}; numerische Exzentrizität ε = e/a = {sqrt(a^2 - b^2)/a}; r₁ + r₂ = 2a = {2*a}.' } },
    { text: { al: 'Me a ≤ b boshti i madh nuk është më te x: zgjidhni a > b.', en: 'With a ≤ b the major axis is no longer on x: choose a > b.', de: 'Mit a ≤ b liegt die Hauptachse nicht mehr auf x: a > b wählen.' } },
  ] }],
  alt: { al: 'Elipsa me gjysmëboshte a dhe b me rrëshqitës dhe vatrat e saj.', en: 'An ellipse with semi-axes a and b on sliders and its foci.', de: 'Eine Ellipse mit Halbachsen a und b als Schieberegler und ihren Brennpunkten.' },
});

export default {
  id: 'g12-circle-ellipse-quiz',
  grade: 12,
  theme: 'g12-circle-ellipse',
  order: 7,
  difficulty: 'advanced',
  icon: '⬭',
  color: '#2A9D8F',
  i18n: {
    al: { title: 'Rrethi dhe elipsa', category: 'Klasa 12 · Tema 9', duration: '12 min' },
    en: { title: 'Circle and ellipse', category: 'Grade 12 · Theme 9', duration: '12 min' },
    de: { title: 'Kreis und Ellipse', category: 'Klasse 12 · Thema 9', duration: '12 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 1,
      verify: 'text',
      explainVisual: {
    type: 'functionPlot', equal: true, view: { xMin: -9, xMax: 9, yMin: -9, yMax: 9 },
    curves: [{ x: 'a + r*cos(t)', y: 'b + r*sin(t)' }],
    points: [{ at: ['a', 'b'], label: 'S({a}, {b})', color: 'secondary' }],
    segments: [{ from: ['a', 'b'], to: ['a + r', 'b'], color: 'secondary', label: 'r = {r}' }],
    sliders: [{ name: 'a', min: -5, max: 5, step: 1, value: 3 }, { name: 'b', min: -5, max: 5, step: 1, value: -2 }, { name: 'r', min: 1, max: 6, step: 0.5, value: 4 }],
    readouts: [{ text: { al: '(x − a)² + (y − b)² = r²: qendra ({a}, {b}), r² = {r^2}.', en: '(x − a)² + (y − b)² = r²: centre ({a}, {b}), r² = {r^2}.', de: '(x − a)² + (y − b)² = r²: Mittelpunkt ({a} | {b}), r² = {r^2}.' } }],
    alt: { al: 'Rreth me qendër (a, b) dhe rreze r me rrëshqitës.', en: 'A circle with centre (a, b) and radius r on sliders.', de: 'Ein Kreis mit Mittelpunkt (a, b) und Radius r als Schieberegler.' },
  },
      al: {
        question: 'Cila është qendra dhe rrezja e x² + y² − 6x + 4y − 3 = 0?', options: ['(−3, 2); 4', '(3, −2); 4', '(3, −2); 16', '(6, −4); 3'],
        explanation: '(x − 3)² + (y + 2)² = 16 → S(3, −2), r = 4.', hint: 'Plotësoni katrorët.',
        whyWrong: ['Shenjat e qendrës u ndërruan.', null, '16 është r², jo r.', 'U morën koeficientët −6 dhe 4 pa i pjesëtuar me −2.'],
      },
      en: {
        question: 'What are the centre and radius of x² + y² − 6x + 4y − 3 = 0?', options: ['(−3, 2); 4', '(3, −2); 4', '(3, −2); 16', '(6, −4); 3'],
        explanation: '(x − 3)² + (y + 2)² = 16 → S(3, −2), r = 4.', hint: 'Complete the squares.',
        whyWrong: ['The signs of the centre were swapped.', null, '16 is r², not r.', 'The coefficients −6 and 4 were used without dividing by −2.'],
      },
      de: {
        question: 'Welchen Mittelpunkt und Radius hat x² + y² − 6x + 4y − 3 = 0?', options: ['(−3 | 2); 4', '(3 | −2); 4', '(3 | −2); 16', '(6 | −4); 3'],
        explanation: '(x − 3)² + (y + 2)² = 16 → M(3 | −2), r = 4.', hint: 'Quadratisch ergänzen.',
        whyWrong: ['Die Vorzeichen des Mittelpunkts sind vertauscht.', null, '16 ist r², nicht r.', 'Die Koeffizienten −6 und 4 wurden nicht durch −2 geteilt.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 4 },
      verify: ['sqrt(25 - 9)', 4],
      explainVisual: ellipse(5, 3, 7),
      al: { question: 'Elipsa x²/25 + y²/9 = 1 ka vatrat (±c, 0). Sa është c?', explanation: 'c = √(25 − 9) = 4.', hint: 'c² = a² − b².', commonMistakes: [{ value: 16, why: 'Ky është c², jo c.' }, { value: 5.83, why: 'U mblodhën: √(25 + 9).' }] },
      en: { question: 'The ellipse x²/25 + y²/9 = 1 has foci (±c, 0). What is c?', explanation: 'c = √(25 − 9) = 4.', hint: 'c² = a² − b².', commonMistakes: [{ value: 16, why: 'That is c², not c.' }, { value: 5.83, why: 'They were added: √(25 + 9).' }] },
      de: { question: 'Die Ellipse x²/25 + y²/9 = 1 hat die Brennpunkte (±e | 0). Wie groß ist e?', explanation: 'e = √(25 − 9) = 4.', hint: 'e² = a² − b².', commonMistakes: [{ value: 16, why: 'Das ist e², nicht e.' }, { value: 5.83, why: 'Es wurde addiert: √(25 + 9).' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: 'text',
      al: { question: 'Jashtëqendërsia e çdo elipse është 0 ≤ ε < 1.', explanation: 'E vërtetë: ε = c/a dhe 0 ≤ c < a.', hint: 'ε = c/a.', whyWrong: 'c është gjithmonë më i vogël se a.' },
      en: { question: 'The eccentricity of every ellipse satisfies 0 ≤ e < 1.', explanation: 'True: e = c/a and 0 ≤ c < a.', hint: 'e = c/a.', whyWrong: 'c is always smaller than a.' },
      de: { question: 'Für die numerische Exzentrizität jeder Ellipse gilt 0 ≤ ε < 1.', explanation: 'Richtig: ε = e/a und 0 ≤ e < a.', hint: 'ε = e/a.', whyWrong: 'e ist immer kleiner als a.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'medium', correct: 0,
      verify: 'text',
      explainVisual: {
    type: 'functionPlot', equal: true, view: { xMin: -9, xMax: 9, yMin: -9, yMax: 9 },
    curves: [
      { x: '5*cos(t)', y: '5*sin(t)' },
      { x: '5*cos(a deg) - t*sin(a deg)', y: '5*sin(a deg) + t*cos(a deg)', t: [-14, 14], color: 'secondary' },
    ],
    segments: [{ from: [0, 0], to: ['5*cos(a deg)', '5*sin(a deg)'], color: 'muted', dashed: true }],
    points: [{ at: ['5*cos(a deg)', '5*sin(a deg)'], label: '({5*cos(a deg)}, {5*sin(a deg)})', color: 'secondary' }],
    sliders: [{ name: 'a', label: { al: 'këndi', en: 'angle', de: 'Winkel' }, min: 0, max: 360, step: 1, value: 53.13 }],
    readouts: [{ text: { al: 'Tangjentja: {5*cos(a deg)}·x + {5*sin(a deg)}·y = 25 (pingule me rrezen).', en: 'Tangent: {5*cos(a deg)}·x + {5*sin(a deg)}·y = 25 (perpendicular to the radius).', de: 'Tangente: {5*cos(a deg)}·x + {5*sin(a deg)}·y = 25 (senkrecht zum Radius).' } }],
    alt: { al: 'Rrethi x² + y² = 25 me një pikë që lëviz në rreth dhe tangjenten në të.', en: 'The circle x² + y² = 25 with a point moving on it and the tangent there.', de: 'Der Kreis x² + y² = 25 mit einem Punkt, der sich auf ihm bewegt, und der Tangente dort.' },
  },
      al: {
        question: 'Cila është tangjentja e x² + y² = 25 në pikën (3, 4)?', options: ['3x + 4y = 25', '4x + 3y = 25', '3x + 4y = 5', 'y = 4x/3'],
        explanation: 'x₀x + y₀y = r² → 3x + 4y = 25.', hint: 'x₀x + y₀y = r².',
        whyWrong: [null, 'Koordinatat u ndërruan.', 'Në të djathtë duhet r² = 25, jo r.', 'Kjo është drejtëza e rrezes, jo tangjentja.'],
      },
      en: {
        question: 'What is the tangent to x² + y² = 25 at the point (3, 4)?', options: ['3x + 4y = 25', '4x + 3y = 25', '3x + 4y = 5', 'y = 4x/3'],
        explanation: 'x₀x + y₀y = r² → 3x + 4y = 25.', hint: 'x₀x + y₀y = r².',
        whyWrong: [null, 'The coordinates were swapped.', 'The right-hand side is r² = 25, not r.', 'That is the line of the radius, not the tangent.'],
      },
      de: {
        question: 'Wie lautet die Tangente an x² + y² = 25 im Punkt (3 | 4)?', options: ['3x + 4y = 25', '4x + 3y = 25', '3x + 4y = 5', 'y = 4x/3'],
        explanation: 'x₀x + y₀y = r² → 3x + 4y = 25.', hint: 'x₀x + y₀y = r².',
        whyWrong: [null, 'Die Koordinaten wurden vertauscht.', 'Rechts steht r² = 25, nicht r.', 'Das ist die Gerade des Radius, nicht die Tangente.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 0.8 },
      verify: ['4 / 5', 0.8],
      al: { question: 'Sa është jashtëqendërsia e x²/25 + y²/9 = 1? (si dhjetore)', explanation: 'c = 4, a = 5: ε = 4/5 = 0,8.', hint: 'ε = c/a.', commonMistakes: [{ value: 0.6, why: 'Kjo është b/a.' }, { value: 1.25, why: 'Thyesa u kthye: a/c.' }] },
      en: { question: 'What is the eccentricity of x²/25 + y²/9 = 1? (as a decimal)', explanation: 'c = 4, a = 5: e = 4/5 = 0.8.', hint: 'e = c/a.', commonMistakes: [{ value: 0.6, why: 'That is b/a.' }, { value: 1.25, why: 'The fraction is upside down: a/c.' }] },
      de: { question: 'Wie groß ist die numerische Exzentrizität von x²/25 + y²/9 = 1? (als Dezimalzahl)', explanation: 'e = 4, a = 5: ε = 4/5 = 0,8.', hint: 'ε = e/a.', commonMistakes: [{ value: 0.6, why: 'Das ist b/a.' }, { value: 1.25, why: 'Der Bruch ist umgedreht: a/e.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 3,
      verify: ['2 * 5', 10],
      al: {
        question: 'Sa është shuma e rrezeve vatrore për çdo pikë të x²/25 + y²/9 = 1?', options: ['5', '8', '6', '10'],
        explanation: 'r₁ + r₂ = 2a = 10.', hint: 'Vetia themelore e elipsës.',
        whyWrong: ['Ky është a, jo 2a.', 'Kjo është 2c, largësia midis vatrave.', 'Kjo është 2b.', null],
      },
      en: {
        question: 'What is the sum of the focal radii for every point of x²/25 + y²/9 = 1?', options: ['5', '8', '6', '10'],
        explanation: 'r₁ + r₂ = 2a = 10.', hint: 'The key property of an ellipse.',
        whyWrong: ['That is a, not 2a.', 'That is 2c, the distance between the foci.', 'That is 2b.', null],
      },
      de: {
        question: 'Wie groß ist die Summe der Brennstrahlen für jeden Punkt von x²/25 + y²/9 = 1?', options: ['5', '8', '6', '10'],
        explanation: 'r₁ + r₂ = 2a = 10.', hint: 'Grundeigenschaft der Ellipse.',
        whyWrong: ['Das ist a, nicht 2a.', 'Das ist 2e, der Abstand der Brennpunkte.', 'Das ist 2b.', null],
      },
    },
    {
      id: 7, type: 'choice', difficulty: 'medium', correct: 2,
      verify: 'text',
      explainVisual: circleLine(8),
      al: {
        question: 'Si qëndron drejtëza y = x + 8 ndaj rrethit x² + y² = 25?', options: ['e pret në dy pika', 'është tangjente', 'nuk kanë pika të përbashkëta', 'kalon nëpër qendër'],
        explanation: 'd = 8/√2 ≈ 5,66 > r = 5.', hint: 'Krahasoni d me r.',
        whyWrong: ['Kjo ndodh kur d < r.', 'Kjo ndodh kur d = r.', null, 'Qendra (0, 0) nuk e plotëson y = x + 8.'],
      },
      en: {
        question: 'How does the line y = x + 8 lie relative to the circle x² + y² = 25?', options: ['it cuts it at two points', 'it is a tangent', 'no common points', 'it passes through the centre'],
        explanation: 'd = 8/√2 ≈ 5.66 > r = 5.', hint: 'Compare d with r.',
        whyWrong: ['That happens when d < r.', 'That happens when d = r.', null, 'The centre (0, 0) does not satisfy y = x + 8.'],
      },
      de: {
        question: 'Welche Lage hat die Gerade y = x + 8 zum Kreis x² + y² = 25?', options: ['Sekante (zwei Schnittpunkte)', 'Tangente', 'keine gemeinsamen Punkte', 'geht durch den Mittelpunkt'],
        explanation: 'd = 8/√2 ≈ 5,66 > r = 5.', hint: 'd mit r vergleichen.',
        whyWrong: ['Das gilt für d < r.', 'Das gilt für d = r.', null, 'Der Mittelpunkt (0 | 0) erfüllt y = x + 8 nicht.'],
      },
    },
    {
      id: 8, type: 'input', difficulty: 'hard', answer: { value: 5 },
      verify: ['sqrt(169 - 144)', 5],
      explainVisual: ellipse(13, 5, 15),
      al: { question: 'Një elipsë ka a = 13 dhe c = 12. Sa është b?', explanation: 'b² = 169 − 144 = 25 → b = 5.', hint: 'b² = a² − c².', commonMistakes: [{ value: 1, why: 'U zbritën gjatësitë, jo katrorët.' }, { value: 25, why: 'Ky është b², jo b.' }] },
      en: { question: 'An ellipse has a = 13 and c = 12. What is b?', explanation: 'b² = 169 − 144 = 25 → b = 5.', hint: 'b² = a² − c².', commonMistakes: [{ value: 1, why: 'The lengths were subtracted, not the squares.' }, { value: 25, why: 'That is b², not b.' }] },
      de: { question: 'Eine Ellipse hat a = 13 und e = 12. Wie groß ist b?', explanation: 'b² = 169 − 144 = 25 → b = 5.', hint: 'b² = a² − e².', commonMistakes: [{ value: 1, why: 'Es wurden die Längen subtrahiert, nicht die Quadrate.' }, { value: 25, why: 'Das ist b², nicht b.' }] },
    },
    {
      id: 9, type: 'truefalse', difficulty: 'hard', correct: false,
      verify: ['(6 - 3)^2 + (2 + 2)^2 < 16', false],
      explainVisual: {
    type: 'functionPlot', equal: true, view: { xMin: -4, xMax: 10, yMin: -9, yMax: 5 },
    curves: [{ x: '3 + 4*cos(t)', y: '-2 + 4*sin(t)' }],
    points: [{ at: [3, -2], label: 'S', color: 'muted' }, { at: ['p', 'q'], label: 'P({p}, {q})', color: 'secondary' }],
    segments: [{ from: [3, -2], to: ['p', 'q'], color: 'secondary', dashed: true }],
    sliders: [{ name: 'p', min: -4, max: 10, step: 0.5, value: 6 }, { name: 'q', min: -9, max: 5, step: 0.5, value: 2 }],
    readouts: [
      { text: { al: 'Largësia nga qendra deri te P në katror: {(p - 3)^2 + (q + 2)^2}; r² = 16.', en: 'Squared distance from the centre to P: {(p - 3)^2 + (q + 2)^2}; r² = 16.', de: 'Quadrierter Abstand vom Mittelpunkt zu P: {(p - 3)^2 + (q + 2)^2}; r² = 16.' } },
      { cases: [
        { when: 'abs((p - 3)^2 + (q + 2)^2 - 16) < 0.001', text: { al: '= r²: P ndodhet në rreth.', en: '= r²: P lies on the circle.', de: '= r²: P liegt auf dem Kreis.' } },
        { when: '(p - 3)^2 + (q + 2)^2 < 16', text: { al: '< r²: P ndodhet brenda rrethit.', en: '< r²: P lies inside the circle.', de: '< r²: P liegt innerhalb des Kreises.' } },
        { text: { al: '> r²: P ndodhet jashtë rrethit.', en: '> r²: P lies outside the circle.', de: '> r²: P liegt außerhalb des Kreises.' } },
      ] },
    ],
    alt: { al: 'Rrethi me qendër S(3, -2) dhe rreze 4, me pikën P që lëviz me rrëshqitës.', en: 'The circle with centre S(3, -2) and radius 4, with a point P moved by sliders.', de: 'Der Kreis mit Mittelpunkt S(3 | -2) und Radius 4 mit einem Punkt P, der mit Schiebereglern bewegt wird.' },
  },
      al: { question: 'Pika (6, 2) ndodhet brenda rrethit (x − 3)² + (y + 2)² = 16.', explanation: 'E gabuar: 9 + 16 = 25 > 16, pra jashtë.', hint: 'Krahasoni me r² = 16.', whyWrong: '(6 − 3)² + (2 + 2)² = 25.' },
      en: { question: 'The point (6, 2) lies inside the circle (x − 3)² + (y + 2)² = 16.', explanation: 'False: 9 + 16 = 25 > 16, so outside.', hint: 'Compare with r² = 16.', whyWrong: '(6 − 3)² + (2 + 2)² = 25.' },
      de: { question: 'Der Punkt (6 | 2) liegt innerhalb des Kreises (x − 3)² + (y + 2)² = 16.', explanation: 'Falsch: 9 + 16 = 25 > 16, also außerhalb.', hint: 'Mit r² = 16 vergleichen.', whyWrong: '(6 − 3)² + (2 + 2)² = 25.' },
    },
    {
      id: 10, type: 'choice', difficulty: 'hard', correct: 0,
      verify: 'text',
      explainVisual: ellipse(5, 4, 7),
      al: {
        question: 'Vatrat janë (±3, 0) dhe shuma e rrezeve vatrore 10. Cila është elipsa?', options: ['x²/25 + y²/16 = 1', 'x²/25 + y²/9 = 1', 'x²/100 + y²/91 = 1', 'x²/9 + y²/16 = 1'],
        explanation: 'a = 5, c = 3, b = 4 → x²/25 + y²/16 = 1.', hint: '2a = 10, b² = a² − c².',
        whyWrong: [null, 'Nën y² duhet b² = 16, jo c² = 9.', 'U mor a = 10 në vend të 2a = 10.', 'a dhe b u ndërruan: boshti i madh është te x.'],
      },
      en: {
        question: 'The foci are (±3, 0) and the sum of the focal radii is 10. Which is the ellipse?', options: ['x²/25 + y²/16 = 1', 'x²/25 + y²/9 = 1', 'x²/100 + y²/91 = 1', 'x²/9 + y²/16 = 1'],
        explanation: 'a = 5, c = 3, b = 4 → x²/25 + y²/16 = 1.', hint: '2a = 10, b² = a² − c².',
        whyWrong: [null, 'Under y² goes b² = 16, not c² = 9.', 'a = 10 was taken instead of 2a = 10.', 'a and b were swapped: the major axis is on x.'],
      },
      de: {
        question: 'Die Brennpunkte sind (±3 | 0), die Summe der Brennstrahlen ist 10. Welche Ellipse ist es?', options: ['x²/25 + y²/16 = 1', 'x²/25 + y²/9 = 1', 'x²/100 + y²/91 = 1', 'x²/9 + y²/16 = 1'],
        explanation: 'a = 5, e = 3, b = 4 → x²/25 + y²/16 = 1.', hint: '2a = 10, b² = a² − e².',
        whyWrong: [null, 'Unter y² steht b² = 16, nicht e² = 9.', 'Es wurde a = 10 statt 2a = 10 genommen.', 'a und b sind vertauscht: Die Hauptachse liegt auf x.'],
      },
    },
  ],
};
