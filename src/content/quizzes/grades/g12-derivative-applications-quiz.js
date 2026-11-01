// Grade 12 · Theme 10 quiz: Applications of derivatives (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g12-derivative-applications-quiz',
  grade: 12,
  theme: 'g12-derivative-applications',
  order: 8,
  difficulty: 'advanced',
  icon: '⛰️',
  color: '#8338EC',
  i18n: {
    al: { title: 'Zbatimet e derivateve', category: 'Klasa 12 · Tema 10', duration: '12 min' },
    en: { title: 'Applications of derivatives', category: 'Grade 12 · Theme 10', duration: '12 min' },
    de: { title: 'Anwendungen der Ableitung', category: 'Klasse 12 · Thema 10', duration: '12 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 2,
      verify: 'text',
      explainVisual: {
    type: 'functionPlot', view: { xMin: -2.5, xMax: 2.5, yMin: -4, yMax: 4 },
    functions: [{ expr: 'x^3 - 3*x', label: 'f(x) = x³ − 3x' }, { expr: '(3*a^2 - 3)*(x - a) + (a^3 - 3*a)', color: 'secondary', dashed: true, label: { al: 'tangjentja', en: 'tangent', de: 'Tangente' } }],
    points: [{ at: ['a', 'a^3 - 3*a'], label: '({a}, {a^3 - 3*a})', color: 'secondary' }],
    sliders: [{ name: 'a', min: -2, max: 2, step: 0.5, value: -1 }],
    readouts: [
      { text: { al: 'f′({a}) = {3*a^2 - 3} = pjerrësia e tangjentes; tangjentja: y = {3*a^2 - 3}x {+a^3 - 3*a - (3*a^2 - 3)*a}', en: 'f′({a}) = {3*a^2 - 3} = gradient of the tangent; tangent: y = {3*a^2 - 3}x {+a^3 - 3*a - (3*a^2 - 3)*a}', de: 'f′({a}) = {3*a^2 - 3} = Tangentensteigung; Tangente: y = {3*a^2 - 3}x {+a^3 - 3*a - (3*a^2 - 3)*a}' } },
      { cases: [{ when: '3*a^2 - 3 > 0', text: { al: 'f′ > 0: funksioni është rritës këtu.', en: 'f′ > 0: the function is increasing here.', de: 'f′ > 0: Die Funktion steigt hier.' } }, { when: '3*a^2 - 3 < 0', text: { al: 'f′ < 0: funksioni është zbritës këtu.', en: 'f′ < 0: the function is decreasing here.', de: 'f′ < 0: Die Funktion fällt hier.' } }, { text: { al: 'f′ = 0: tangjentja horizontale (pikë kritike).', en: 'f′ = 0: horizontal tangent (critical point).', de: 'f′ = 0: waagerechte Tangente (kritische Stelle).' } }] },
    ],
    alt: { al: 'Grafiku i funksionit me një pikë që lëviz dhe tangjenten në të.', en: 'The graph of the function with a moving point and the tangent there.', de: 'Der Graph der Funktion mit einem beweglichen Punkt und der Tangente dort.' },
  },
      al: {
        question: 'Ku ka maksimum lokal f(x) = x³ − 3x?', options: ['x = 1', 'x = 0', 'x = −1', 'x = 3'],
        explanation: 'f′ = 3(x − 1)(x + 1); te x = −1 f′ kalon nga + në −.', hint: 'f′ = 0 dhe ndryshimi i shenjës.',
        whyWrong: ['Te x = 1 f′ kalon nga − në +: minimum.', 'f′(0) = −3 ≠ 0.', null, 'f′(3) = 24 ≠ 0.'],
      },
      en: {
        question: 'Where does f(x) = x³ − 3x have a local maximum?', options: ['x = 1', 'x = 0', 'x = −1', 'x = 3'],
        explanation: 'f′ = 3(x − 1)(x + 1); at x = −1 f′ changes from + to −.', hint: 'f′ = 0 and a change of sign.',
        whyWrong: ['At x = 1 f′ goes from − to +: a minimum.', 'f′(0) = −3 ≠ 0.', null, 'f′(3) = 24 ≠ 0.'],
      },
      de: {
        question: 'Wo hat f(x) = x³ − 3x einen Hochpunkt?', options: ['x = 1', 'x = 0', 'x = −1', 'x = 3'],
        explanation: 'f′ = 3(x − 1)(x + 1); bei x = −1 wechselt f′ von + nach −.', hint: 'f′ = 0 und Vorzeichenwechsel.',
        whyWrong: ['Bei x = 1 wechselt f′ von − nach +: Tiefpunkt.', 'f′(0) = −3 ≠ 0.', null, 'f′(3) = 24 ≠ 0.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 100 }, unit: 'm²',
      verify: ['10 * (20 - 10)', 100],
      al: { question: 'Me 40 m tel rrethojmë një drejtkëndësh. Sa është syprina më e madhe e mundshme?', explanation: 'A = x(20 − x), maks te x = 10: 100 m².', hint: 'Shprehni syprinën me një ndryshore.', commonMistakes: [{ value: 400, why: 'U përdor 20 · 20; brinjët e katrorit janë 10 m.' }, { value: 40, why: 'Ky është perimetri.' }] },
      en: { question: 'A rectangle is fenced with 40 m of wire. What is the greatest possible area?', explanation: 'A = x(20 − x), max at x = 10: 100 m².', hint: 'Write the area in one variable.', commonMistakes: [{ value: 400, why: '20 · 20 was used; the square has sides of 10 m.' }, { value: 40, why: 'That is the perimeter.' }] },
      de: { question: 'Ein Rechteck wird mit 40 m Draht eingezäunt. Wie groß ist der größtmögliche Flächeninhalt?', explanation: 'A = x(20 − x), Max bei x = 10: 100 m².', hint: 'Den Flächeninhalt mit einer Variablen ausdrücken.', commonMistakes: [{ value: 400, why: 'Es wurde 20 · 20 gerechnet; das Quadrat hat 10 m Seitenlänge.' }, { value: 40, why: 'Das ist der Umfang.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: 'text',
      al: { question: 'Nëse f′(x) > 0 në një interval, atëherë f është rritës në atë interval.', explanation: 'E vërtetë: derivati pozitiv do të thotë pjerrësi pozitive kudo.', hint: 'Shenja e f′.', whyWrong: 'Tangjentet ngjiten, pra edhe grafiku.' },
      en: { question: 'If f′(x) > 0 on an interval, then f is increasing on that interval.', explanation: 'True: a positive derivative means a positive gradient everywhere.', hint: 'The sign of f′.', whyWrong: 'The tangents rise, so the graph does too.' },
      de: { question: 'Ist f′(x) > 0 auf einem Intervall, dann ist f dort steigend.', explanation: 'Richtig: Positive Ableitung heißt überall positive Steigung.', hint: 'Vorzeichen von f′.', whyWrong: 'Die Tangenten steigen, also auch der Graph.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'medium', correct: 0,
      verify: 'text',
      al: {
        question: 'Cila është pika e infleksionit e y = x³ − 6x²?', options: ['(2, −16)', '(4, −32)', '(0, 0)', '(2, 16)'],
        explanation: 'y″ = 6x − 12 = 0 → x = 2; y = 8 − 24 = −16.', hint: 'y″ = 0 dhe ndryshim shenje.',
        whyWrong: [null, 'Te x = 4 y′ = 0: ky është minimumi, jo infleksioni.', 'Te x = 0 y′ = 0: ky është maksimumi.', 'y(2) = 8 − 24 = −16, jo 16.'],
      },
      en: {
        question: 'What is the point of inflection of y = x³ − 6x²?', options: ['(2, −16)', '(4, −32)', '(0, 0)', '(2, 16)'],
        explanation: 'y″ = 6x − 12 = 0 → x = 2; y = 8 − 24 = −16.', hint: 'y″ = 0 and a sign change.',
        whyWrong: [null, 'At x = 4 y′ = 0: that is the minimum, not the inflection.', 'At x = 0 y′ = 0: that is the maximum.', 'y(2) = 8 − 24 = −16, not 16.'],
      },
      de: {
        question: 'Wo liegt der Wendepunkt von y = x³ − 6x²?', options: ['(2 | −16)', '(4 | −32)', '(0 | 0)', '(2 | 16)'],
        explanation: 'y″ = 6x − 12 = 0 → x = 2; y = 8 − 24 = −16.', hint: 'y″ = 0 und Vorzeichenwechsel.',
        whyWrong: [null, 'Bei x = 4 ist y′ = 0: das ist der Tiefpunkt, nicht der Wendepunkt.', 'Bei x = 0 ist y′ = 0: das ist der Hochpunkt.', 'y(2) = 8 − 24 = −16, nicht 16.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: -2 },
      verify: ['1^3 - 3*1', -2],
      explainVisual: {
    type: 'functionPlot', view: { xMin: -0.5, xMax: 2.5, yMin: -3, yMax: 3 },
    functions: [{ expr: 'x^3 - 3*x', label: 'f(x) = x³ − 3x' }, { expr: '(3*a^2 - 3)*(x - a) + (a^3 - 3*a)', color: 'secondary', dashed: true, label: { al: 'tangjentja', en: 'tangent', de: 'Tangente' } }],
    points: [{ at: ['a', 'a^3 - 3*a'], label: '({a}, {a^3 - 3*a})', color: 'secondary' }],
    sliders: [{ name: 'a', min: 0, max: 2, step: 0.5, value: 1 }],
    readouts: [
      { text: { al: 'f′({a}) = {3*a^2 - 3} = pjerrësia e tangjentes; tangjentja: y = {3*a^2 - 3}x {+a^3 - 3*a - (3*a^2 - 3)*a}', en: 'f′({a}) = {3*a^2 - 3} = gradient of the tangent; tangent: y = {3*a^2 - 3}x {+a^3 - 3*a - (3*a^2 - 3)*a}', de: 'f′({a}) = {3*a^2 - 3} = Tangentensteigung; Tangente: y = {3*a^2 - 3}x {+a^3 - 3*a - (3*a^2 - 3)*a}' } },
      { cases: [{ when: '3*a^2 - 3 > 0', text: { al: 'f′ > 0: funksioni është rritës këtu.', en: 'f′ > 0: the function is increasing here.', de: 'f′ > 0: Die Funktion steigt hier.' } }, { when: '3*a^2 - 3 < 0', text: { al: 'f′ < 0: funksioni është zbritës këtu.', en: 'f′ < 0: the function is decreasing here.', de: 'f′ < 0: Die Funktion fällt hier.' } }, { text: { al: 'f′ = 0: tangjentja horizontale (pikë kritike).', en: 'f′ = 0: horizontal tangent (critical point).', de: 'f′ = 0: waagerechte Tangente (kritische Stelle).' } }] },
    ],
    alt: { al: 'Grafiku i funksionit me një pikë që lëviz dhe tangjenten në të.', en: 'The graph of the function with a moving point and the tangent there.', de: 'Der Graph der Funktion mit einem beweglichen Punkt und der Tangente dort.' },
  },
      al: { question: 'Sa është vlera më e vogël e f(x) = x³ − 3x në [0, 2]?', explanation: 'f(0) = 0, f(1) = −2, f(2) = 2 → min −2.', hint: 'Pikat kritike dhe skajet.', commonMistakes: [{ value: 0, why: 'U shikuan vetëm skajet.' }, { value: 1, why: 'Ky është x i minimumit, jo vlera.' }] },
      en: { question: 'What is the least value of f(x) = x³ − 3x on [0, 2]?', explanation: 'f(0) = 0, f(1) = −2, f(2) = 2 → min −2.', hint: 'Critical points and end points.', commonMistakes: [{ value: 0, why: 'Only the end points were checked.' }, { value: 1, why: 'That is the x of the minimum, not the value.' }] },
      de: { question: 'Welchen kleinsten Wert hat f(x) = x³ − 3x auf [0, 2]?', explanation: 'f(0) = 0, f(1) = −2, f(2) = 2 → Min −2.', hint: 'Kritische Stellen und Ränder.', commonMistakes: [{ value: 0, why: 'Es wurden nur die Ränder geprüft.' }, { value: 1, why: 'Das ist die Stelle x, nicht der Wert.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 3,
      verify: 'text',
      explainVisual: {
    type: 'functionPlot', view: { xMin: -2.5, xMax: 2.5, yMin: -4, yMax: 4 },
    functions: [{ expr: 'x^3 - 3*x', label: 'f(x) = x³ − 3x' }, { expr: '(3*a^2 - 3)*(x - a) + (a^3 - 3*a)', color: 'secondary', dashed: true, label: { al: 'tangjentja', en: 'tangent', de: 'Tangente' } }],
    points: [{ at: ['a', 'a^3 - 3*a'], label: '({a}, {a^3 - 3*a})', color: 'secondary' }],
    sliders: [{ name: 'a', min: -2, max: 2, step: 0.5, value: 0 }],
    readouts: [
      { text: { al: 'f′({a}) = {3*a^2 - 3} = pjerrësia e tangjentes; tangjentja: y = {3*a^2 - 3}x {+a^3 - 3*a - (3*a^2 - 3)*a}', en: 'f′({a}) = {3*a^2 - 3} = gradient of the tangent; tangent: y = {3*a^2 - 3}x {+a^3 - 3*a - (3*a^2 - 3)*a}', de: 'f′({a}) = {3*a^2 - 3} = Tangentensteigung; Tangente: y = {3*a^2 - 3}x {+a^3 - 3*a - (3*a^2 - 3)*a}' } },
      { cases: [{ when: '3*a^2 - 3 > 0', text: { al: 'f′ > 0: funksioni është rritës këtu.', en: 'f′ > 0: the function is increasing here.', de: 'f′ > 0: Die Funktion steigt hier.' } }, { when: '3*a^2 - 3 < 0', text: { al: 'f′ < 0: funksioni është zbritës këtu.', en: 'f′ < 0: the function is decreasing here.', de: 'f′ < 0: Die Funktion fällt hier.' } }, { text: { al: 'f′ = 0: tangjentja horizontale (pikë kritike).', en: 'f′ = 0: horizontal tangent (critical point).', de: 'f′ = 0: waagerechte Tangente (kritische Stelle).' } }] },
    ],
    alt: { al: 'Grafiku i funksionit me një pikë që lëviz dhe tangjenten në të.', en: 'The graph of the function with a moving point and the tangent there.', de: 'Der Graph der Funktion mit einem beweglichen Punkt und der Tangente dort.' },
  },
      al: {
        question: 'Ku është zbritës f(x) = x³ − 3x?', options: ['x < −1', 'x > 1', 'x < 1', '−1 < x < 1'],
        explanation: 'f′ = 3(x − 1)(x + 1) < 0 vetëm për −1 < x < 1.', hint: 'Tabela e shenjave të f′.',
        whyWrong: ['Aty f′ > 0: rritës.', 'Aty f′ > 0: rritës.', 'Për x < −1 f′ > 0, pra jo i gjithë intervali.', null],
      },
      en: {
        question: 'Where is f(x) = x³ − 3x decreasing?', options: ['x < −1', 'x > 1', 'x < 1', '−1 < x < 1'],
        explanation: 'f′ = 3(x − 1)(x + 1) < 0 only for −1 < x < 1.', hint: 'The sign table of f′.',
        whyWrong: ['There f′ > 0: increasing.', 'There f′ > 0: increasing.', 'For x < −1, f′ > 0, so not the whole interval.', null],
      },
      de: {
        question: 'Wo ist f(x) = x³ − 3x fallend?', options: ['x < −1', 'x > 1', 'x < 1', '−1 < x < 1'],
        explanation: 'f′ = 3(x − 1)(x + 1) < 0 nur für −1 < x < 1.', hint: 'Vorzeichentabelle von f′.',
        whyWrong: ['Dort ist f′ > 0: steigend.', 'Dort ist f′ > 0: steigend.', 'Für x < −1 ist f′ > 0, also nicht das ganze Intervall.', null],
      },
    },
    {
      id: 7, type: 'choice', difficulty: 'medium', correct: 1,
      verify: ['(4 - 0) / (2 - 0) / 2', 1],
      al: {
        question: 'Për f(x) = x² në [0, 2], cila është pika c e teoremës së Lagranzhit?', options: ['0', '1', '2', '4'],
        explanation: 'f′(c) = 2c = (4 − 0)/2 = 2 → c = 1.', hint: 'f′(c) = pjerrësia e sekantes.',
        whyWrong: ['c duhet të jetë brenda (0, 2), jo skaj.', null, 'c duhet të jetë brenda (0, 2), jo skaj.', 'Kjo është f(2), jo c.'],
      },
      en: {
        question: 'For f(x) = x² on [0, 2], what is the point c of the mean value theorem?', options: ['0', '1', '2', '4'],
        explanation: 'f′(c) = 2c = (4 − 0)/2 = 2 → c = 1.', hint: 'f′(c) = gradient of the secant.',
        whyWrong: ['c must lie inside (0, 2), not at an end.', null, 'c must lie inside (0, 2), not at an end.', 'That is f(2), not c.'],
      },
      de: {
        question: 'Welche Stelle c liefert der Mittelwertsatz für f(x) = x² auf [0, 2]?', options: ['0', '1', '2', '4'],
        explanation: 'f′(c) = 2c = (4 − 0)/2 = 2 → c = 1.', hint: 'f′(c) = Sekantensteigung.',
        whyWrong: ['c muss im Inneren (0, 2) liegen, nicht am Rand.', null, 'c muss im Inneren (0, 2) liegen, nicht am Rand.', 'Das ist f(2), nicht c.'],
      },
    },
    {
      id: 8, type: 'input', difficulty: 'hard', answer: { value: 128 }, unit: 'cm³',
      verify: ['2 * (12 - 2*2)^2', 128],
      al: { question: 'Nga një fletë 12 × 12 cm priten katrorë në qoshe dhe bëhet kuti pa kapak. Sa është vëllimi më i madh?', explanation: 'V = x(12 − 2x)², maks te x = 2: V = 2 · 8² = 128 cm³.', hint: 'V′ = (12 − 2x)(12 − 6x).', commonMistakes: [{ value: 144, why: 'Kjo është syprina e fletës.' }, { value: 100, why: 'U llogarit x = 1: 1 · 10².' }] },
      en: { question: 'Squares are cut from the corners of a 12 × 12 cm sheet to make an open box. What is the greatest volume?', explanation: 'V = x(12 − 2x)², max at x = 2: V = 2 · 8² = 128 cm³.', hint: 'V′ = (12 − 2x)(12 − 6x).', commonMistakes: [{ value: 144, why: 'That is the area of the sheet.' }, { value: 100, why: 'x = 1 was used: 1 · 10².' }] },
      de: { question: 'Aus einem 12 × 12 cm Blatt werden an den Ecken Quadrate ausgeschnitten und eine offene Schachtel gefaltet. Wie groß ist das größte Volumen?', explanation: 'V = x(12 − 2x)², Max bei x = 2: V = 2 · 8² = 128 cm³.', hint: 'V′ = (12 − 2x)(12 − 6x).', commonMistakes: [{ value: 144, why: 'Das ist die Fläche des Blattes.' }, { value: 100, why: 'Es wurde x = 1 genommen: 1 · 10².' }] },
    },
    {
      id: 9, type: 'truefalse', difficulty: 'hard', correct: false,
      verify: 'text',
      al: { question: 'Nëse f′(a) = 0, atëherë f ka patjetër ekstremum në a.', explanation: 'E gabuar: f(x) = x³ ka f′(0) = 0, por nuk ka ekstremum.', hint: 'Shenja e f′ duhet të ndryshojë.', whyWrong: 'f′ = 3x² ≥ 0 nga të dy anët e 0.' },
      en: { question: 'If f′(a) = 0, then f certainly has an extremum at a.', explanation: 'False: f(x) = x³ has f′(0) = 0 but no extremum.', hint: 'The sign of f′ must change.', whyWrong: 'f′ = 3x² ≥ 0 on both sides of 0.' },
      de: { question: 'Ist f′(a) = 0, dann hat f bei a sicher ein Extremum.', explanation: 'Falsch: f(x) = x³ hat f′(0) = 0, aber kein Extremum.', hint: 'f′ muss das Vorzeichen wechseln.', whyWrong: 'f′ = 3x² ≥ 0 auf beiden Seiten von 0.' },
    },
    {
      id: 10, type: 'choice', difficulty: 'hard', correct: 0,
      verify: ['2*(-1)^3 - 3*(-1)^2 - 12*(-1)', 7],
      al: {
        question: 'Cili është maksimumi lokal i f(x) = 2x³ − 3x² − 12x?', options: ['7 te x = −1', '−20 te x = 2', '7 te x = 2', '0 te x = 0'],
        explanation: 'f′ = 6(x − 2)(x + 1); maks te x = −1: f = −2 − 3 + 12 = 7.', hint: 'f″(−1) = −18 < 0.',
        whyWrong: [null, 'Ky është minimumi lokal.', 'Vlera 7 arrihet te x = −1, jo te 2.', 'f′(0) = −12 ≠ 0.'],
      },
      en: {
        question: 'What is the local maximum of f(x) = 2x³ − 3x² − 12x?', options: ['7 at x = −1', '−20 at x = 2', '7 at x = 2', '0 at x = 0'],
        explanation: 'f′ = 6(x − 2)(x + 1); max at x = −1: f = −2 − 3 + 12 = 7.', hint: 'f″(−1) = −18 < 0.',
        whyWrong: [null, 'That is the local minimum.', 'The value 7 occurs at x = −1, not at 2.', 'f′(0) = −12 ≠ 0.'],
      },
      de: {
        question: 'Wie lautet das lokale Maximum von f(x) = 2x³ − 3x² − 12x?', options: ['7 bei x = −1', '−20 bei x = 2', '7 bei x = 2', '0 bei x = 0'],
        explanation: 'f′ = 6(x − 2)(x + 1); Max bei x = −1: f = −2 − 3 + 12 = 7.', hint: 'f″(−1) = −18 < 0.',
        whyWrong: [null, 'Das ist das lokale Minimum.', 'Der Wert 7 wird bei x = −1 angenommen, nicht bei 2.', 'f′(0) = −12 ≠ 0.'],
      },
    },
  ],
};
