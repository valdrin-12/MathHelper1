// Grade 7 · Theme 11 quiz: Functions (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g7-function-quiz',
  grade: 7,
  theme: 'g7-function',
  order: 11,
  difficulty: 'beginner',
  icon: '📈',
  color: '#3A86FF',
  i18n: {
    al: { title: 'Funksioni', category: 'Klasa 7 · Tema 11', duration: '10 min' },
    en: { title: 'Functions', category: 'Grade 7 · Theme 11', duration: '10 min' },
    de: { title: 'Funktionen', category: 'Klasse 7 · Thema 11', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 3,
      verify: ['3 * 2', 6],
      al: {
        question: 'Për y = 3x, sa është y kur x = 2?', options: ['5', '8', '9', '6'],
        explanation: 'y = 3 · 2 = 6.', hint: 'Zëvendësoni x = 2.',
        whyWrong: ['Mblodhët 3 + 2; 3x do të thotë 3 · x.', 'Kjo është 2³, jo 3 · 2.', 'Kjo është 3², jo 3 · 2.', null],
      },
      en: {
        question: 'For y = 3x, what is y when x = 2?', options: ['5', '8', '9', '6'],
        explanation: 'y = 3 · 2 = 6.', hint: 'Substitute x = 2.',
        whyWrong: ['You added 3 + 2; 3x means 3 · x.', 'That is 2³, not 3 · 2.', 'That is 3², not 3 · 2.', null],
      },
      de: {
        question: 'Für y = 3x: Wie groß ist y bei x = 2?', options: ['5', '8', '9', '6'],
        explanation: 'y = 3 · 2 = 6.', hint: 'Setzen Sie x = 2 ein.',
        whyWrong: ['Sie haben 3 + 2 gerechnet; 3x heißt 3 · x.', 'Das ist 2³, nicht 3 · 2.', 'Das ist 3², nicht 3 · 2.', null],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 7 },
      verify: ['2 * 3 + 1', 7],
      al: { question: 'Për y = 2x + 1, sa është y kur x = 3?', explanation: 'y = 2 · 3 + 1 = 7.', hint: 'Fillimisht shumëzimi, pastaj mbledhja.', commonMistakes: [{ value: 6, why: 'Harruat + 1.' }, { value: 8, why: 'Llogaritët 2 · (3 + 1); fillimisht shumëzohet.' }] },
      en: { question: 'For y = 2x + 1, what is y when x = 3?', explanation: 'y = 2 · 3 + 1 = 7.', hint: 'Multiply first, then add.', commonMistakes: [{ value: 6, why: 'You forgot the + 1.' }, { value: 8, why: 'You worked out 2 · (3 + 1); multiply first.' }] },
      de: { question: 'Für y = 2x + 1: Wie groß ist y bei x = 3?', explanation: 'y = 2 · 3 + 1 = 7.', hint: 'Erst multiplizieren, dann addieren.', commonMistakes: [{ value: 6, why: 'Das + 1 fehlt.' }, { value: 8, why: 'Sie haben 2 · (3 + 1) gerechnet; erst multiplizieren.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: ['-2 * 2 == -4', true],
      explainVisual: {
    type: 'functionPlot', view: { xMin: -5, xMax: 5, yMin: -8, yMax: 8 },
    functions: [{ expr: 'k*x + 0', label: 'y = {k}x' }],
    points: [{ at: [2, -4], label: '(2, −4)', color: 'secondary' }],
    sliders: [{ name: 'k', min: -4, max: 4, step: 0.5, value: -2 }],
    readouts: [
      { cases: [{ when: 'k > 0', text: { al: 'k = {k} > 0: drejtëza ngjitet.', en: 'k = {k} > 0: the line goes up.', de: 'k = {k} > 0: Die Gerade steigt.' } }, { when: 'k < 0', text: { al: 'k = {k} < 0: drejtëza zbret.', en: 'k = {k} < 0: the line goes down.', de: 'k = {k} < 0: Die Gerade fällt.' } }, { text: { al: 'k = 0: drejtëza është horizontale.', en: 'k = 0: the line is horizontal.', de: 'k = 0: Die Gerade ist waagerecht.' } }] },
      { cases: [
        { when: 'abs(k*2 - (-4)) < 0.001', text: { al: 'Drejtëza kalon nëpër (2, −4).', en: 'The line passes through (2, −4).', de: 'Die Gerade geht durch (2 | −4).' } },
        { text: { al: 'Drejtëza nuk kalon nëpër (2, −4): te x = 2 ajo ka y = {k*2}.', en: 'The line misses (2, −4): at x = 2 it has y = {k*2}.', de: 'Die Gerade verfehlt (2 | −4): bei x = 2 ist y = {k*2}.' } },
      ] }
    ],
    alt: { al: 'Drejtëza y = kx + n me rrëshqitës për koeficientët.', en: 'The line y = kx + n with sliders for the coefficients.', de: 'Die Gerade y = kx + n mit Schiebereglern für die Koeffizienten.' },
  },
      al: { question: 'Grafiku i y = −2x kalon nëpër pikën (2, −4).', explanation: 'E vërtetë: për x = 2, y = −2 · 2 = −4.', hint: 'Zëvendësoni x = 2.', whyWrong: 'Formula jep −4 për x = 2, pra pika është në grafik.' },
      en: { question: 'The graph of y = −2x passes through the point (2, −4).', explanation: 'True: for x = 2, y = −2 · 2 = −4.', hint: 'Substitute x = 2.', whyWrong: 'The formula gives −4 for x = 2, so the point is on the graph.' },
      de: { question: 'Der Graph von y = −2x geht durch den Punkt (2 | −4).', explanation: 'Richtig: Für x = 2 ist y = −2 · 2 = −4.', hint: 'Setzen Sie x = 2 ein.', whyWrong: 'Der Term ergibt −4 für x = 2, der Punkt liegt also auf dem Graphen.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 1,
      verify: 'text',
      al: {
        question: 'Cili funksion paraqet varësi të drejtë?', options: ['y = x + 2', 'y = 5x', 'y = x²', 'y = 10 − x'],
        explanation: 'Vetëm y = 5x ka trajtën y = kx; grafiku i saj kalon nëpër origjinë.', hint: 'Varësia e drejtë: y = kx.',
        whyWrong: ['Për x = 0 jep y = 2; nuk kalon nëpër origjinë.', null, 'Herësi y : x nuk është konstant.', 'Për x = 0 jep y = 10; nuk kalon nëpër origjinë.'],
      },
      en: {
        question: 'Which function is a direct proportion?', options: ['y = x + 2', 'y = 5x', 'y = x²', 'y = 10 − x'],
        explanation: 'Only y = 5x has the form y = kx; its graph passes through the origin.', hint: 'Direct proportion: y = kx.',
        whyWrong: ['For x = 0 it gives y = 2; it misses the origin.', null, 'The quotient y ÷ x is not constant.', 'For x = 0 it gives y = 10; it misses the origin.'],
      },
      de: {
        question: 'Welche Funktion ist proportional?', options: ['y = x + 2', 'y = 5x', 'y = x²', 'y = 10 − x'],
        explanation: 'Nur y = 5x hat die Form y = kx; ihr Graph geht durch den Ursprung.', hint: 'Proportional: y = kx.',
        whyWrong: ['Für x = 0 ergibt sich y = 2; nicht durch den Ursprung.', null, 'Der Quotient y : x ist nicht konstant.', 'Für x = 0 ergibt sich y = 10; nicht durch den Ursprung.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 4 },
      verify: ['12 / 3', 4],
      explainVisual: {
    type: 'functionPlot', view: { xMin: -2, xMax: 5, yMin: -4, yMax: 16 },
    functions: [{ expr: 'k*x + 0', label: 'y = {k}x' }],
    points: [{ at: [3, 12], label: '(3, 12)', color: 'secondary' }],
    sliders: [{ name: 'k', min: -5, max: 6, step: 0.5, value: 4 }],
    readouts: [
      { cases: [{ when: 'k > 0', text: { al: 'k = {k} > 0: drejtëza ngjitet.', en: 'k = {k} > 0: the line goes up.', de: 'k = {k} > 0: Die Gerade steigt.' } }, { when: 'k < 0', text: { al: 'k = {k} < 0: drejtëza zbret.', en: 'k = {k} < 0: the line goes down.', de: 'k = {k} < 0: Die Gerade fällt.' } }, { text: { al: 'k = 0: drejtëza është horizontale.', en: 'k = 0: the line is horizontal.', de: 'k = 0: Die Gerade ist waagerecht.' } }] },
      { cases: [
        { when: 'abs(k*3 - (12)) < 0.001', text: { al: 'Drejtëza kalon nëpër (3, 12).', en: 'The line passes through (3, 12).', de: 'Die Gerade geht durch (3 | 12).' } },
        { text: { al: 'Drejtëza nuk kalon nëpër (3, 12): te x = 3 ajo ka y = {k*3}.', en: 'The line misses (3, 12): at x = 3 it has y = {k*3}.', de: 'Die Gerade verfehlt (3 | 12): bei x = 3 ist y = {k*3}.' } },
      ] }
    ],
    alt: { al: 'Drejtëza y = kx + n me rrëshqitës për koeficientët.', en: 'The line y = kx + n with sliders for the coefficients.', de: 'Die Gerade y = kx + n mit Schiebereglern für die Koeffizienten.' },
  },
      al: { question: 'Grafiku i y = kx kalon nëpër pikën (3, 12). Sa është k?', explanation: 'k = y : x = 12 : 3 = 4.', hint: 'k = y : x.', commonMistakes: [{ value: 36, why: 'Shumëzuat; k = y : x.' }, { value: 0.25, why: 'Pjesëtuat x me y; k = y : x.' }] },
      en: { question: 'The graph of y = kx passes through the point (3, 12). What is k?', explanation: 'k = y ÷ x = 12 ÷ 3 = 4.', hint: 'k = y ÷ x.', commonMistakes: [{ value: 36, why: 'You multiplied; k = y ÷ x.' }, { value: 0.25, why: 'You divided x by y; k = y ÷ x.' }] },
      de: { question: 'Der Graph von y = kx geht durch den Punkt (3 | 12). Wie groß ist k?', explanation: 'k = y : x = 12 : 3 = 4.', hint: 'k = y : x.', commonMistakes: [{ value: 36, why: 'Sie haben multipliziert; k = y : x.' }, { value: 0.25, why: 'Sie haben x durch y geteilt; k = y : x.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 2,
      verify: 'text',
      visual: {
        type: 'valueTable',
        rows: [{ head: 'x', cells: ['1', '2', '3'] }, { head: 'y', cells: ['4', '8', '12'] }],
        alt: { al: 'Tabela: x = 1, 2, 3 dhe y = 4, 8, 12.', en: 'Table: x = 1, 2, 3 and y = 4, 8, 12.', de: 'Tabelle: x = 1, 2, 3 und y = 4, 8, 12.' },
      },
      al: {
        question: 'Cila formulë i përshtatet tabelës?', options: ['y = x + 3', 'y = x + 4', 'y = 4x', 'y = 2x + 2'],
        explanation: 'Çdo y është 4 herë x: 4 · 1 = 4, 4 · 2 = 8, 4 · 3 = 12.', hint: 'Provoni formulën për të gjitha kolonat.',
        whyWrong: ['Vlen vetëm për x = 1.', 'Për x = 1 jep 5, jo 4.', null, 'Për x = 2 jep 6, jo 8.'],
      },
      en: {
        question: 'Which formula fits the table?', options: ['y = x + 3', 'y = x + 4', 'y = 4x', 'y = 2x + 2'],
        explanation: 'Each y is 4 times x: 4 · 1 = 4, 4 · 2 = 8, 4 · 3 = 12.', hint: 'Test the formula on every column.',
        whyWrong: ['It works only for x = 1.', 'For x = 1 it gives 5, not 4.', null, 'For x = 2 it gives 6, not 8.'],
      },
      de: {
        question: 'Welcher Term passt zur Tabelle?', options: ['y = x + 3', 'y = x + 4', 'y = 4x', 'y = 2x + 2'],
        explanation: 'Jedes y ist das 4-Fache von x: 4 · 1 = 4, 4 · 2 = 8, 4 · 3 = 12.', hint: 'Prüfen Sie den Term an jeder Spalte.',
        whyWrong: ['Er passt nur für x = 1.', 'Für x = 1 ergibt er 5, nicht 4.', null, 'Für x = 2 ergibt er 6, nicht 8.'],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: false,
      verify: ['3 * 0 + 1 == 0', false],
      explainVisual: {
    type: 'functionPlot', view: { xMin: -5, xMax: 5, yMin: -8, yMax: 8 },
    functions: [{ expr: 'k*x + n', label: 'y = {k}x {+n}' }],
    points: [{ at: [0, 0], label: '(0, 0)', color: 'secondary' }],
    sliders: [{ name: 'k', min: -4, max: 4, step: 0.5, value: 3 }, { name: 'n', min: -6, max: 6, step: 0.5, value: 1 }],
    readouts: [
      { cases: [{ when: 'k > 0', text: { al: 'k = {k} > 0: drejtëza ngjitet.', en: 'k = {k} > 0: the line goes up.', de: 'k = {k} > 0: Die Gerade steigt.' } }, { when: 'k < 0', text: { al: 'k = {k} < 0: drejtëza zbret.', en: 'k = {k} < 0: the line goes down.', de: 'k = {k} < 0: Die Gerade fällt.' } }, { text: { al: 'k = 0: drejtëza është horizontale.', en: 'k = 0: the line is horizontal.', de: 'k = 0: Die Gerade ist waagerecht.' } }] },
      { cases: [
        { when: 'abs(k*0 + n - (0)) < 0.001', text: { al: 'Drejtëza kalon nëpër (0, 0).', en: 'The line passes through (0, 0).', de: 'Die Gerade geht durch (0 | 0).' } },
        { text: { al: 'Drejtëza nuk kalon nëpër (0, 0): te x = 0 ajo ka y = {k*0 + n}.', en: 'The line misses (0, 0): at x = 0 it has y = {k*0 + n}.', de: 'Die Gerade verfehlt (0 | 0): bei x = 0 ist y = {k*0 + n}.' } },
      ] }
    ],
    alt: { al: 'Drejtëza y = kx + n me rrëshqitës për koeficientët.', en: 'The line y = kx + n with sliders for the coefficients.', de: 'Die Gerade y = kx + n mit Schiebereglern für die Koeffizienten.' },
  },
      al: { question: 'Grafiku i y = 3x + 1 kalon nëpër origjinë.', explanation: 'E gabuar: për x = 0 del y = 1, jo 0.', hint: 'Zëvendësoni x = 0.', whyWrong: 'Pika (0, 0) nuk është në grafik, sepse y(0) = 1.' },
      en: { question: 'The graph of y = 3x + 1 passes through the origin.', explanation: 'False: for x = 0 we get y = 1, not 0.', hint: 'Substitute x = 0.', whyWrong: 'The point (0, 0) is not on the graph, because y(0) = 1.' },
      de: { question: 'Der Graph von y = 3x + 1 geht durch den Ursprung.', explanation: 'Falsch: Für x = 0 ergibt sich y = 1, nicht 0.', hint: 'Setzen Sie x = 0 ein.', whyWrong: 'Der Punkt (0 | 0) liegt nicht auf dem Graphen, denn y(0) = 1.' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 0,
      verify: 'text',
      explainVisual: {
    type: 'functionPlot', view: { xMin: -5, xMax: 5, yMin: -8, yMax: 8 },
    functions: [{ expr: 'k*x + 0', label: 'y = {k}x' }],
    sliders: [{ name: 'k', min: -4, max: 4, step: 0.5, value: -1.5 }],
    readouts: [
      { cases: [{ when: 'k > 0', text: { al: 'k = {k} > 0: drejtëza ngjitet.', en: 'k = {k} > 0: the line goes up.', de: 'k = {k} > 0: Die Gerade steigt.' } }, { when: 'k < 0', text: { al: 'k = {k} < 0: drejtëza zbret.', en: 'k = {k} < 0: the line goes down.', de: 'k = {k} < 0: Die Gerade fällt.' } }, { text: { al: 'k = 0: drejtëza është horizontale.', en: 'k = 0: the line is horizontal.', de: 'k = 0: Die Gerade ist waagerecht.' } }] }
    ],
    alt: { al: 'Drejtëza y = kx + n me rrëshqitës për koeficientët.', en: 'The line y = kx + n with sliders for the coefficients.', de: 'Die Gerade y = kx + n mit Schiebereglern für die Koeffizienten.' },
  },
      al: {
        question: 'Si duket grafiku i y = kx kur k < 0?', options: ['Drejtëz nëpër origjinë që zbret', 'Drejtëz nëpër origjinë që rritet', 'Drejtëz horizontale', 'Drejtëz që nuk kalon nëpër origjinë'],
        explanation: 'y = kx kalon gjithmonë nëpër O; me k < 0 zbret nga e majta në të djathtë.', hint: 'Provoni y = −2x për x = 1 dhe x = 2.',
        whyWrong: [null, 'Kështu është kur k > 0.', 'Drejtëza horizontale do të kishte k = 0.', 'Për x = 0 gjithmonë y = 0.'],
      },
      en: {
        question: 'What does the graph of y = kx look like when k < 0?', options: ['A falling line through the origin', 'A rising line through the origin', 'A horizontal line', 'A line that misses the origin'],
        explanation: 'y = kx always passes through O; with k < 0 it falls from left to right.', hint: 'Try y = −2x for x = 1 and x = 2.',
        whyWrong: [null, 'That is the case when k > 0.', 'A horizontal line would have k = 0.', 'For x = 0, y is always 0.'],
      },
      de: {
        question: 'Wie sieht der Graph von y = kx bei k < 0 aus?', options: ['Eine fallende Gerade durch den Ursprung', 'Eine steigende Gerade durch den Ursprung', 'Eine waagerechte Gerade', 'Eine Gerade, die nicht durch den Ursprung geht'],
        explanation: 'y = kx geht immer durch O; bei k < 0 fällt die Gerade von links nach rechts.', hint: 'Probieren Sie y = −2x für x = 1 und x = 2.',
        whyWrong: [null, 'So ist es bei k > 0.', 'Eine waagerechte Gerade hätte k = 0.', 'Für x = 0 ist immer y = 0.'],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 12 },
      verify: ['2.4 * 5', 12],
      al: { question: '1 kg mollë kushton 2,40 €. Sipas y = 2,4x, sa euro kushtojnë 5 kg?', explanation: 'y = 2,4 · 5 = 12 €.', hint: 'Zëvendësoni x = 5.', unit: '€', commonMistakes: [{ value: 7.4, why: 'Mblodhët 2,4 + 5; duhet shumëzuar.' }] },
      en: { question: '1 kg of apples costs €2.40. Using y = 2.4x, how many euros do 5 kg cost?', explanation: 'y = 2.4 · 5 = €12.', hint: 'Substitute x = 5.', unit: '€', commonMistakes: [{ value: 7.4, why: 'You added 2.4 + 5; multiply instead.' }] },
      de: { question: '1 kg Äpfel kostet 2,40 €. Wie viel Euro kosten 5 kg nach y = 2,4x?', explanation: 'y = 2,4 · 5 = 12 €.', hint: 'Setzen Sie x = 5 ein.', unit: '€', commonMistakes: [{ value: 7.4, why: 'Sie haben 2,4 + 5 gerechnet; multiplizieren.' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 5 },
      verify: ['(9 + 1) / 2', 5],
      al: { question: 'Për y = 2x − 1, për cilin x është y = 9?', explanation: '2x − 1 = 9 → 2x = 10 → x = 5.', hint: 'Zgjidhni ekuacionin 2x − 1 = 9.', commonMistakes: [{ value: 17, why: 'Zëvendësuat 9 si x; këtu 9 është y.' }, { value: 4, why: '−1 kalon në anën tjetër si +1: 2x = 10.' }] },
      en: { question: 'For y = 2x − 1, for which x is y = 9?', explanation: '2x − 1 = 9 → 2x = 10 → x = 5.', hint: 'Solve the equation 2x − 1 = 9.', commonMistakes: [{ value: 17, why: 'You put in 9 as x; here 9 is y.' }, { value: 4, why: '−1 moves across as +1: 2x = 10.' }] },
      de: { question: 'Für y = 2x − 1: Bei welchem x ist y = 9?', explanation: '2x − 1 = 9 → 2x = 10 → x = 5.', hint: 'Lösen Sie die Gleichung 2x − 1 = 9.', commonMistakes: [{ value: 17, why: 'Sie haben 9 als x eingesetzt; hier ist 9 der y-Wert.' }, { value: 4, why: '−1 wechselt als +1 die Seite: 2x = 10.' }] },
    },
  ],
};
