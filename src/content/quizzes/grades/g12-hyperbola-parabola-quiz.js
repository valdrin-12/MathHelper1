// Grade 12 · Theme 11 quiz: Hyperbola and parabola (format: see g6-natural-numbers-quiz.js)
// Interactive picture shown after answering in practice mode ("Show graph")
const parabolaLine = (n) => ({
  type: 'functionPlot', equal: true, view: { xMin: -4, xMax: 10, yMin: -9, yMax: 9 },
  curves: [{ x: 't^2/8', y: 't', t: [-9, 9], label: 'y² = 8x' }],
  functions: [{ expr: 'x + n', color: 'secondary', label: 'y = x {+n}' }],
  sliders: [{ name: 'n', min: -4, max: 6, step: 0.5, value: n }],
  readouts: [
    { text: { al: '(x + n)² = 8x → x² + (2n − 8)x + n² = 0, D = 64 − 32n = {64 - 32*n}', en: '(x + n)² = 8x → x² + (2n − 8)x + n² = 0, D = 64 − 32n = {64 - 32*n}', de: '(x + n)² = 8x → x² + (2n − 8)x + n² = 0, D = 64 − 32n = {64 - 32*n}' } },
    { cases: [
      { when: 'abs(n - 2) < 0.01', text: { al: 'D = 0: tangjente, në pikën (2, 4).', en: 'D = 0: tangent, at the point (2, 4).', de: 'D = 0: Tangente im Punkt (2 | 4).' } },
      { when: 'n < 2', text: { al: 'D > 0: dy pika prerjeje.', en: 'D > 0: two points of intersection.', de: 'D > 0: zwei Schnittpunkte.' } },
      { text: { al: 'D < 0: nuk kanë pika të përbashkëta.', en: 'D < 0: no common points.', de: 'D < 0: keine gemeinsamen Punkte.' } },
    ] },
  ],
  alt: { al: 'Parabola y² = 8x dhe drejtëza y = x + n me rrëshqitës për n.', en: 'The parabola y² = 8x and the line y = x + n with a slider for n.', de: 'Die Parabel y² = 8x und die Gerade y = x + n mit Schieberegler für n.' },
});

export default {
  id: 'g12-hyperbola-parabola-quiz',
  grade: 12,
  theme: 'g12-hyperbola-parabola',
  order: 9,
  difficulty: 'advanced',
  icon: '⌒',
  color: '#FB8500',
  i18n: {
    al: { title: 'Hiperbola dhe parabola', category: 'Klasa 12 · Tema 11', duration: '12 min' },
    en: { title: 'Hyperbola and parabola', category: 'Grade 12 · Theme 11', duration: '12 min' },
    de: { title: 'Hyperbel und Parabel', category: 'Klasse 12 · Thema 11', duration: '12 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 0,
      verify: 'text',
      al: {
        question: 'Cilat janë asimptotat e x²/16 − y²/9 = 1?', options: ['y = ±3x/4', 'y = ±4x/3', 'y = ±9x/16', 'y = ±x'],
        explanation: 'a = 4, b = 3: y = ±(b/a)x = ±3x/4.', hint: 'y = ±(b/a)x.',
        whyWrong: [null, 'Raporti u kthye: a/b.', 'U morën a² dhe b² në vend të a dhe b.', 'a dhe b nuk janë të barabartë.'],
      },
      en: {
        question: 'What are the asymptotes of x²/16 − y²/9 = 1?', options: ['y = ±3x/4', 'y = ±4x/3', 'y = ±9x/16', 'y = ±x'],
        explanation: 'a = 4, b = 3: y = ±(b/a)x = ±3x/4.', hint: 'y = ±(b/a)x.',
        whyWrong: [null, 'The ratio was turned over: a/b.', 'a² and b² were used instead of a and b.', 'a and b are not equal.'],
      },
      de: {
        question: 'Welche Asymptoten hat x²/16 − y²/9 = 1?', options: ['y = ±3x/4', 'y = ±4x/3', 'y = ±9x/16', 'y = ±x'],
        explanation: 'a = 4, b = 3: y = ±(b/a)x = ±3x/4.', hint: 'y = ±(b/a)x.',
        whyWrong: [null, 'Der Quotient wurde umgedreht: a/b.', 'Es wurden a² und b² statt a und b genommen.', 'a und b sind nicht gleich.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 2 },
      verify: ['8 / 4', 2],
      al: { question: 'Vatra e parabolës y² = 8x është (?, 0). Sa është abshisa?', explanation: '2p = 8 → p = 4, vatra p/2 = 2.', hint: 'y² = 2px, F(p/2, 0).', commonMistakes: [{ value: 8, why: 'Ky është 2p, jo p/2.' }, { value: 4, why: 'Ky është p, jo p/2.' }] },
      en: { question: 'The focus of the parabola y² = 8x is (?, 0). What is its x-coordinate?', explanation: '2p = 8 → p = 4, focus at p/2 = 2.', hint: 'y² = 2px, F(p/2, 0).', commonMistakes: [{ value: 8, why: 'That is 2p, not p/2.' }, { value: 4, why: 'That is p, not p/2.' }] },
      de: { question: 'Der Brennpunkt der Parabel y² = 8x ist (? | 0). Wie lautet die x-Koordinate?', explanation: '2p = 8 → p = 4, Brennpunkt bei p/2 = 2.', hint: 'y² = 2px, F(p/2 | 0).', commonMistakes: [{ value: 8, why: 'Das ist 2p, nicht p/2.' }, { value: 4, why: 'Das ist p, nicht p/2.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: 'text',
      al: { question: 'Te hiperbola x²/a² − y²/b² = 1 vlen c² = a² + b².', explanation: 'E vërtetë: te hiperbola mblidhen, te elipsa zbriten.', hint: 'Krahasoni me elipsën.', whyWrong: 'P.sh. x²/16 − y²/9 = 1: c = 5.' },
      en: { question: 'For the hyperbola x²/a² − y²/b² = 1, c² = a² + b².', explanation: 'True: for the hyperbola they add, for the ellipse they subtract.', hint: 'Compare with the ellipse.', whyWrong: 'E.g. x²/16 − y²/9 = 1: c = 5.' },
      de: { question: 'Für die Hyperbel x²/a² − y²/b² = 1 gilt e² = a² + b².', explanation: 'Richtig: Bei der Hyperbel wird addiert, bei der Ellipse subtrahiert.', hint: 'Mit der Ellipse vergleichen.', whyWrong: 'Z. B. x²/16 − y²/9 = 1: e = 5.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'medium', correct: 3,
      verify: 'text',
      al: {
        question: 'Cilat janë vatrat e x²/16 − y²/9 = 1?', options: ['(±√7, 0)', '(±4, 0)', '(±3, 0)', '(±5, 0)'],
        explanation: 'c = √(16 + 9) = 5.', hint: 'c² = a² + b².',
        whyWrong: ['U zbrit si te elipsa: √(16 − 9).', 'Këto janë kulmet (±a, 0).', 'U mor b në vend të c.', null],
      },
      en: {
        question: 'What are the foci of x²/16 − y²/9 = 1?', options: ['(±√7, 0)', '(±4, 0)', '(±3, 0)', '(±5, 0)'],
        explanation: 'c = √(16 + 9) = 5.', hint: 'c² = a² + b².',
        whyWrong: ['It was subtracted as for an ellipse: √(16 − 9).', 'Those are the vertices (±a, 0).', 'b was taken instead of c.', null],
      },
      de: {
        question: 'Welche Brennpunkte hat x²/16 − y²/9 = 1?', options: ['(±√7 | 0)', '(±4 | 0)', '(±3 | 0)', '(±5 | 0)'],
        explanation: 'e = √(16 + 9) = 5.', hint: 'e² = a² + b².',
        whyWrong: ['Es wurde wie bei der Ellipse subtrahiert: √(16 − 9).', 'Das sind die Scheitel (±a | 0).', 'Es wurde b statt e genommen.', null],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 8 },
      verify: ['2 * 4', 8],
      al: { question: 'Sa është |r₁ − r₂| për çdo pikë të hiperbolës x²/16 − y²/9 = 1?', explanation: '|r₁ − r₂| = 2a = 8.', hint: 'Vetia themelore e hiperbolës.', commonMistakes: [{ value: 4, why: 'Ky është a, jo 2a.' }, { value: 10, why: 'Kjo është 2c, largësia midis vatrave.' }] },
      en: { question: 'What is |r₁ − r₂| for every point of the hyperbola x²/16 − y²/9 = 1?', explanation: '|r₁ − r₂| = 2a = 8.', hint: 'The key property of a hyperbola.', commonMistakes: [{ value: 4, why: 'That is a, not 2a.' }, { value: 10, why: 'That is 2c, the distance between the foci.' }] },
      de: { question: 'Wie groß ist |r₁ − r₂| für jeden Punkt der Hyperbel x²/16 − y²/9 = 1?', explanation: '|r₁ − r₂| = 2a = 8.', hint: 'Grundeigenschaft der Hyperbel.', commonMistakes: [{ value: 4, why: 'Das ist a, nicht 2a.' }, { value: 10, why: 'Das ist 2e, der Abstand der Brennpunkte.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 1,
      verify: 'text',
      explainVisual: parabolaLine(2),
      al: {
        question: 'Si qëndron drejtëza y = x + 2 ndaj parabolës y² = 8x?', options: ['e pret në dy pika', 'tangjente në (2, 4)', 'nuk kanë pika të përbashkëta', 'tangjente në (4, 2)'],
        explanation: '(x + 2)² = 8x → x² − 4x + 4 = 0, D = 0 → x = 2, y = 4.', hint: 'Zëvendësoni dhe shikoni D.',
        whyWrong: ['Kjo do të kërkonte D > 0.', null, 'Kjo do të kërkonte D < 0.', 'Koordinatat u ndërruan: (4, 2) nuk është në parabolë.'],
      },
      en: {
        question: 'How does the line y = x + 2 lie relative to the parabola y² = 8x?', options: ['cuts it at two points', 'tangent at (2, 4)', 'no common points', 'tangent at (4, 2)'],
        explanation: '(x + 2)² = 8x → x² − 4x + 4 = 0, D = 0 → x = 2, y = 4.', hint: 'Substitute and look at D.',
        whyWrong: ['That would need D > 0.', null, 'That would need D < 0.', 'The coordinates were swapped: (4, 2) is not on the parabola.'],
      },
      de: {
        question: 'Welche Lage hat die Gerade y = x + 2 zur Parabel y² = 8x?', options: ['Sekante (zwei Punkte)', 'Tangente in (2 | 4)', 'keine gemeinsamen Punkte', 'Tangente in (4 | 2)'],
        explanation: '(x + 2)² = 8x → x² − 4x + 4 = 0, D = 0 → x = 2, y = 4.', hint: 'Einsetzen und D betrachten.',
        whyWrong: ['Dafür müsste D > 0 sein.', null, 'Dafür müsste D < 0 sein.', 'Die Koordinaten sind vertauscht: (4 | 2) liegt nicht auf der Parabel.'],
      },
    },
    {
      id: 7, type: 'choice', difficulty: 'medium', correct: 2,
      verify: 'text',
      al: {
        question: 'Cila parabolë e formës y² = 2px ka vatrën (5, 0)?', options: ['y² = 5x', 'y² = 10x', 'y² = 20x', 'x² = 20y'],
        explanation: 'p/2 = 5 → p = 10 → y² = 20x.', hint: 'F(p/2, 0).',
        whyWrong: ['Vatra e kësaj është (1,25; 0).', 'Kjo ka p = 5, vatra (2,5; 0).', null, 'Kjo hapet lart, vatra (0, 5).'],
      },
      en: {
        question: 'Which parabola of the form y² = 2px has focus (5, 0)?', options: ['y² = 5x', 'y² = 10x', 'y² = 20x', 'x² = 20y'],
        explanation: 'p/2 = 5 → p = 10 → y² = 20x.', hint: 'F(p/2, 0).',
        whyWrong: ['Its focus is (1.25, 0).', 'That has p = 5, focus (2.5, 0).', null, 'That opens upwards, focus (0, 5).'],
      },
      de: {
        question: 'Welche Parabel der Form y² = 2px hat den Brennpunkt (5 | 0)?', options: ['y² = 5x', 'y² = 10x', 'y² = 20x', 'x² = 20y'],
        explanation: 'p/2 = 5 → p = 10 → y² = 20x.', hint: 'F(p/2 | 0).',
        whyWrong: ['Ihr Brennpunkt ist (1,25 | 0).', 'Hier ist p = 5, Brennpunkt (2,5 | 0).', null, 'Sie ist nach oben geöffnet, Brennpunkt (0 | 5).'],
      },
    },
    {
      id: 8, type: 'input', difficulty: 'hard', answer: { value: 2 },
      verify: ['64 / 32', 2],
      explainVisual: parabolaLine(0),
      al: { question: 'Për çfarë n është drejtëza y = x + n tangjente e y² = 8x?', explanation: 'x² + (2n − 8)x + n² = 0, D = 64 − 32n = 0 → n = 2.', hint: 'Kushti D = 0.', commonMistakes: [{ value: 4, why: 'U mor 64/16; D = (2n − 8)² − 4n² = 64 − 32n.' }, { value: -2, why: 'Gabim në shenjë.' }] },
      en: { question: 'For which n is the line y = x + n a tangent to y² = 8x?', explanation: 'x² + (2n − 8)x + n² = 0, D = 64 − 32n = 0 → n = 2.', hint: 'The condition D = 0.', commonMistakes: [{ value: 4, why: '64/16 was used; D = (2n − 8)² − 4n² = 64 − 32n.' }, { value: -2, why: 'A sign slip.' }] },
      de: { question: 'Für welches n ist die Gerade y = x + n Tangente an y² = 8x?', explanation: 'x² + (2n − 8)x + n² = 0, D = 64 − 32n = 0 → n = 2.', hint: 'Bedingung D = 0.', commonMistakes: [{ value: 4, why: 'Es wurde 64/16 gerechnet; D = (2n − 8)² − 4n² = 64 − 32n.' }, { value: -2, why: 'Vorzeichenfehler.' }] },
    },
    {
      id: 9, type: 'truefalse', difficulty: 'hard', correct: false,
      verify: ['4 - 36 > 0', false],
      explainVisual: parabolaLine(3),
      al: { question: 'Drejtëza y = x + 3 e pret parabolën y² = 8x në dy pika.', explanation: 'E gabuar: x² − 2x + 9 = 0, D = 4 − 36 < 0, asnjë pikë.', hint: 'Llogaritni diskriminantin.', whyWrong: 'D = −32 < 0.' },
      en: { question: 'The line y = x + 3 cuts the parabola y² = 8x at two points.', explanation: 'False: x² − 2x + 9 = 0, D = 4 − 36 < 0, no points.', hint: 'Work out the discriminant.', whyWrong: 'D = −32 < 0.' },
      de: { question: 'Die Gerade y = x + 3 schneidet die Parabel y² = 8x in zwei Punkten.', explanation: 'Falsch: x² − 2x + 9 = 0, D = 4 − 36 < 0, keine Punkte.', hint: 'Diskriminante berechnen.', whyWrong: 'D = −32 < 0.' },
    },
    {
      id: 10, type: 'choice', difficulty: 'hard', correct: 0,
      verify: 'text',
      explainVisual: parabolaLine(2),
      al: {
        question: 'Cila është tangjentja e y² = 8x në pikën (2, 4)?', options: ['y = x + 2', 'y = 2x', 'y = 4x − 4', 'y = x + 4'],
        explanation: 'p = 4: 4y = 4(x + 2) → y = x + 2.', hint: 'y₀y = p(x + x₀).',
        whyWrong: [null, 'Drejtëza kalon nëpër pikë, por nuk është tangjente.', 'Kjo është tangjentja e y = x², jo e kësaj parabole.', 'Kjo drejtëz nuk kalon nëpër (2, 4).'],
      },
      en: {
        question: 'What is the tangent to y² = 8x at the point (2, 4)?', options: ['y = x + 2', 'y = 2x', 'y = 4x − 4', 'y = x + 4'],
        explanation: 'p = 4: 4y = 4(x + 2) → y = x + 2.', hint: 'y₀y = p(x + x₀).',
        whyWrong: [null, 'The line passes through the point but is not a tangent.', 'That is the tangent to y = x², not to this parabola.', 'That line does not pass through (2, 4).'],
      },
      de: {
        question: 'Wie lautet die Tangente an y² = 8x im Punkt (2 | 4)?', options: ['y = x + 2', 'y = 2x', 'y = 4x − 4', 'y = x + 4'],
        explanation: 'p = 4: 4y = 4(x + 2) → y = x + 2.', hint: 'y₀y = p(x + x₀).',
        whyWrong: [null, 'Die Gerade geht durch den Punkt, ist aber keine Tangente.', 'Das ist die Tangente an y = x², nicht an diese Parabel.', 'Diese Gerade geht nicht durch (2 | 4).'],
      },
    },
  ],
};
