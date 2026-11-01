// Grade 12 · Theme 8 quiz: Derivatives (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g12-derivatives-quiz',
  grade: 12,
  theme: 'g12-derivatives',
  order: 6,
  difficulty: 'advanced',
  icon: '📉',
  color: '#3A86FF',
  i18n: {
    al: { title: 'Derivatet', category: 'Klasa 12 · Tema 8', duration: '12 min' },
    en: { title: 'Derivatives', category: 'Grade 12 · Theme 8', duration: '12 min' },
    de: { title: 'Ableitungen', category: 'Klasse 12 · Thema 8', duration: '12 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 0,
      verify: 'text',
      al: {
        question: 'Cili është derivati i f(x) = 4x³ − 2x + 7?', options: ['12x² − 2', '12x² − 2x', '4x² − 2', '12x² + 5'],
        explanation: '(4x³)′ = 12x², (−2x)′ = −2, (7)′ = 0.', hint: '(xⁿ)′ = n · xⁿ⁻¹.',
        whyWrong: [null, '(−2x)′ = −2, jo −2x.', 'Treguesi duhet të shumëzojë koeficientin: 3 · 4 = 12.', 'Derivati i konstantes 7 është 0.'],
      },
      en: {
        question: 'What is the derivative of f(x) = 4x³ − 2x + 7?', options: ['12x² − 2', '12x² − 2x', '4x² − 2', '12x² + 5'],
        explanation: '(4x³)′ = 12x², (−2x)′ = −2, (7)′ = 0.', hint: '(xⁿ)′ = n · xⁿ⁻¹.',
        whyWrong: [null, '(−2x)′ = −2, not −2x.', 'The power must multiply the coefficient: 3 · 4 = 12.', 'The derivative of the constant 7 is 0.'],
      },
      de: {
        question: 'Wie lautet die Ableitung von f(x) = 4x³ − 2x + 7?', options: ['12x² − 2', '12x² − 2x', '4x² − 2', '12x² + 5'],
        explanation: '(4x³)′ = 12x², (−2x)′ = −2, (7)′ = 0.', hint: '(xⁿ)′ = n · xⁿ⁻¹.',
        whyWrong: [null, '(−2x)′ = −2, nicht −2x.', 'Der Exponent muss den Koeffizienten multiplizieren: 3 · 4 = 12.', 'Die Ableitung der Konstanten 7 ist 0.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 6 },
      verify: ['2 * 3', 6],
      explainVisual: {
    type: 'functionPlot', view: { xMin: -1, xMax: 5, yMin: -4, yMax: 20 },
    functions: [{ expr: 'x^2', label: 'f(x) = x²' }, { expr: '(2*a)*(x - a) + (a^2)', color: 'secondary', dashed: true, label: { al: 'tangjentja', en: 'tangent', de: 'Tangente' } }],
    points: [{ at: ['a', 'a^2'], label: '({a}, {a^2})', color: 'secondary' }],
    sliders: [{ name: 'a', min: -1, max: 4, step: 0.5, value: 3 }],
    readouts: [
      { text: { al: 'f′({a}) = {2*a} = pjerrësia e tangjentes; tangjentja: y = {2*a}x {+a^2 - (2*a)*a}', en: 'f′({a}) = {2*a} = gradient of the tangent; tangent: y = {2*a}x {+a^2 - (2*a)*a}', de: 'f′({a}) = {2*a} = Tangentensteigung; Tangente: y = {2*a}x {+a^2 - (2*a)*a}' } },
      { cases: [{ when: '2*a > 0', text: { al: 'f′ > 0: funksioni është rritës këtu.', en: 'f′ > 0: the function is increasing here.', de: 'f′ > 0: Die Funktion steigt hier.' } }, { when: '2*a < 0', text: { al: 'f′ < 0: funksioni është zbritës këtu.', en: 'f′ < 0: the function is decreasing here.', de: 'f′ < 0: Die Funktion fällt hier.' } }, { text: { al: 'f′ = 0: tangjentja horizontale (pikë kritike).', en: 'f′ = 0: horizontal tangent (critical point).', de: 'f′ = 0: waagerechte Tangente (kritische Stelle).' } }] },
    ],
    alt: { al: 'Grafiku i funksionit me një pikë që lëviz dhe tangjenten në të.', en: 'The graph of the function with a moving point and the tangent there.', de: 'Der Graph der Funktion mit einem beweglichen Punkt und der Tangente dort.' },
  },
      al: { question: 'f(x) = x². Sa është f′(3)?', explanation: 'f′(x) = 2x → f′(3) = 6.', hint: '(x²)′ = 2x.', commonMistakes: [{ value: 9, why: 'Kjo është f(3), jo f′(3).' }, { value: 3, why: 'U harrua faktori 2.' }] },
      en: { question: 'f(x) = x². What is f′(3)?', explanation: 'f′(x) = 2x → f′(3) = 6.', hint: '(x²)′ = 2x.', commonMistakes: [{ value: 9, why: 'That is f(3), not f′(3).' }, { value: 3, why: 'The factor 2 was forgotten.' }] },
      de: { question: 'f(x) = x². Wie groß ist f′(3)?', explanation: 'f′(x) = 2x → f′(3) = 6.', hint: '(x²)′ = 2x.', commonMistakes: [{ value: 9, why: 'Das ist f(3), nicht f′(3).' }, { value: 3, why: 'Der Faktor 2 fehlt.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: 'text',
      al: { question: 'Derivati i eˣ është eˣ.', explanation: 'E vërtetë: eˣ është funksioni që është i barabartë me derivatin e vet.', hint: 'Derivatet bazë.', whyWrong: '(eˣ)′ = eˣ.' },
      en: { question: 'The derivative of eˣ is eˣ.', explanation: 'True: eˣ is the function that equals its own derivative.', hint: 'Basic derivatives.', whyWrong: '(eˣ)′ = eˣ.' },
      de: { question: 'Die Ableitung von eˣ ist eˣ.', explanation: 'Richtig: eˣ ist die Funktion, die gleich ihrer eigenen Ableitung ist.', hint: 'Grundableitungen.', whyWrong: '(eˣ)′ = eˣ.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'medium', correct: 2,
      verify: 'text',
      explainVisual: {
    type: 'functionPlot', view: { xMin: -1, xMax: 5, yMin: -6, yMax: 14 },
    functions: [{ expr: 'x^2', label: 'f(x) = x²' }, { expr: '(2*a)*(x - a) + (a^2)', color: 'secondary', dashed: true, label: { al: 'tangjentja', en: 'tangent', de: 'Tangente' } }],
    points: [{ at: ['a', 'a^2'], label: '({a}, {a^2})', color: 'secondary' }],
    sliders: [{ name: 'a', min: -1, max: 4, step: 0.5, value: 2 }],
    readouts: [
      { text: { al: 'f′({a}) = {2*a} = pjerrësia e tangjentes; tangjentja: y = {2*a}x {+a^2 - (2*a)*a}', en: 'f′({a}) = {2*a} = gradient of the tangent; tangent: y = {2*a}x {+a^2 - (2*a)*a}', de: 'f′({a}) = {2*a} = Tangentensteigung; Tangente: y = {2*a}x {+a^2 - (2*a)*a}' } },
      { cases: [{ when: '2*a > 0', text: { al: 'f′ > 0: funksioni është rritës këtu.', en: 'f′ > 0: the function is increasing here.', de: 'f′ > 0: Die Funktion steigt hier.' } }, { when: '2*a < 0', text: { al: 'f′ < 0: funksioni është zbritës këtu.', en: 'f′ < 0: the function is decreasing here.', de: 'f′ < 0: Die Funktion fällt hier.' } }, { text: { al: 'f′ = 0: tangjentja horizontale (pikë kritike).', en: 'f′ = 0: horizontal tangent (critical point).', de: 'f′ = 0: waagerechte Tangente (kritische Stelle).' } }] },
    ],
    alt: { al: 'Grafiku i funksionit me një pikë që lëviz dhe tangjenten në të.', en: 'The graph of the function with a moving point and the tangent there.', de: 'Der Graph der Funktion mit einem beweglichen Punkt und der Tangente dort.' },
  },
      al: {
        question: 'Cila është tangjentja e y = x² në pikën (2, 4)?', options: ['y = 2x', 'y = 4x', 'y = 4x − 4', 'y = 2x + 4'],
        explanation: 'f′(2) = 4; y = 4 + 4(x − 2) = 4x − 4.', hint: 'y = f(a) + f′(a)(x − a).',
        whyWrong: ['U mor pjerrësia 2 (= a) në vend të f′(2) = 4.', 'Pjerrësia është e saktë, por drejtëza nuk kalon nëpër (2, 4).', null, 'Pjerrësia duhet f′(2) = 4.'],
      },
      en: {
        question: 'What is the tangent to y = x² at the point (2, 4)?', options: ['y = 2x', 'y = 4x', 'y = 4x − 4', 'y = 2x + 4'],
        explanation: 'f′(2) = 4; y = 4 + 4(x − 2) = 4x − 4.', hint: 'y = f(a) + f′(a)(x − a).',
        whyWrong: ['The gradient 2 (= a) was used instead of f′(2) = 4.', 'The gradient is right, but the line misses (2, 4).', null, 'The gradient must be f′(2) = 4.'],
      },
      de: {
        question: 'Wie lautet die Tangente an y = x² im Punkt (2 | 4)?', options: ['y = 2x', 'y = 4x', 'y = 4x − 4', 'y = 2x + 4'],
        explanation: 'f′(2) = 4; y = 4 + 4(x − 2) = 4x − 4.', hint: 'y = f(a) + f′(a)(x − a).',
        whyWrong: ['Es wurde die Steigung 2 (= a) statt f′(2) = 4 genommen.', 'Die Steigung stimmt, aber die Gerade geht nicht durch (2 | 4).', null, 'Die Steigung muss f′(2) = 4 sein.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 30 }, unit: 'm/s',
      verify: ['10 * 3', 30],
      al: { question: 'Rruga është s(t) = 5t² (m). Sa është shpejtësia në çastin t = 3 s?', explanation: 'v = s′(t) = 10t → 30 m/s.', hint: 'Shpejtësia = derivati i rrugës.', commonMistakes: [{ value: 45, why: 'Kjo është rruga s(3).' }, { value: 15, why: 'Kjo është s(3)/3, shpejtësia mesatare nga 0.' }] },
      en: { question: 'The distance is s(t) = 5t² (m). What is the velocity at the instant t = 3 s?', explanation: 'v = s′(t) = 10t → 30 m/s.', hint: 'Velocity = derivative of distance.', commonMistakes: [{ value: 45, why: 'That is the distance s(3).' }, { value: 15, why: 'That is s(3)/3, the average velocity from 0.' }] },
      de: { question: 'Der Weg ist s(t) = 5t² (m). Wie groß ist die Geschwindigkeit im Moment t = 3 s?', explanation: 'v = s′(t) = 10t → 30 m/s.', hint: 'Geschwindigkeit = Ableitung des Weges.', commonMistakes: [{ value: 45, why: 'Das ist der Weg s(3).' }, { value: 15, why: 'Das ist s(3)/3, die Durchschnittsgeschwindigkeit ab 0.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 1,
      verify: 'text',
      al: {
        question: 'Cili është derivati i f(x) = x² · eˣ?', options: ['2x · eˣ', 'eˣ(x² + 2x)', 'x² · eˣ', '2x + eˣ'],
        explanation: '2x · eˣ + x² · eˣ = eˣ(x² + 2x).', hint: 'Rregulla e prodhimit.',
        whyWrong: ['U shumëzuan derivatet: (fg)′ ≠ f′g′.', null, 'U derivua vetëm eˣ.', 'U mblodhën derivatet në vend të rregullës së prodhimit.'],
      },
      en: {
        question: 'What is the derivative of f(x) = x² · eˣ?', options: ['2x · eˣ', 'eˣ(x² + 2x)', 'x² · eˣ', '2x + eˣ'],
        explanation: '2x · eˣ + x² · eˣ = eˣ(x² + 2x).', hint: 'The product rule.',
        whyWrong: ['The derivatives were multiplied: (fg)′ ≠ f′g′.', null, 'Only eˣ was differentiated.', 'The derivatives were added instead of using the product rule.'],
      },
      de: {
        question: 'Wie lautet die Ableitung von f(x) = x² · eˣ?', options: ['2x · eˣ', 'eˣ(x² + 2x)', 'x² · eˣ', '2x + eˣ'],
        explanation: '2x · eˣ + x² · eˣ = eˣ(x² + 2x).', hint: 'Produktregel.',
        whyWrong: ['Die Ableitungen wurden multipliziert: (fg)′ ≠ f′g′.', null, 'Nur eˣ wurde abgeleitet.', 'Die Ableitungen wurden addiert statt die Produktregel anzuwenden.'],
      },
    },
    {
      id: 7, type: 'choice', difficulty: 'medium', correct: 3,
      verify: 'text',
      al: {
        question: 'Cili është derivati i f(x) = sin(3x²)?', options: ['cos(3x²)', '6x sin(3x²)', 'cos(6x)', '6x cos(3x²)'],
        explanation: 'cos(3x²) · (3x²)′ = 6x cos(3x²).', hint: 'Rregulla zinxhir.',
        whyWrong: ['Mungon derivati i brendshëm 6x.', '(sin)′ është cos, jo sin.', 'U derivua vetëm brenda, pa e lënë 3x² te cos.', null],
      },
      en: {
        question: 'What is the derivative of f(x) = sin(3x²)?', options: ['cos(3x²)', '6x sin(3x²)', 'cos(6x)', '6x cos(3x²)'],
        explanation: 'cos(3x²) · (3x²)′ = 6x cos(3x²).', hint: 'The chain rule.',
        whyWrong: ['The inner derivative 6x is missing.', '(sin)′ is cos, not sin.', 'The inside was differentiated instead of being kept in cos.', null],
      },
      de: {
        question: 'Wie lautet die Ableitung von f(x) = sin(3x²)?', options: ['cos(3x²)', '6x sin(3x²)', 'cos(6x)', '6x cos(3x²)'],
        explanation: 'cos(3x²) · (3x²)′ = 6x cos(3x²).', hint: 'Kettenregel.',
        whyWrong: ['Die innere Ableitung 6x fehlt.', '(sin)′ ist cos, nicht sin.', 'Das Innere wurde abgeleitet statt im cos zu bleiben.', null],
      },
    },
    {
      id: 8, type: 'input', difficulty: 'hard', answer: { value: 10 },
      verify: ['10 * (2*0 + 1)^4', 10],
      al: { question: 'f(x) = (2x + 1)⁵. Sa është f′(0)?', explanation: 'f′ = 5(2x + 1)⁴ · 2 = 10(2x + 1)⁴ → 10.', hint: 'Mos harroni derivatin e brendshëm 2.', commonMistakes: [{ value: 5, why: 'U harrua faktori 2 i brendshëm.' }, { value: 1, why: 'Kjo është f(0).' }] },
      en: { question: 'f(x) = (2x + 1)⁵. What is f′(0)?', explanation: 'f′ = 5(2x + 1)⁴ · 2 = 10(2x + 1)⁴ → 10.', hint: 'Do not forget the inner derivative 2.', commonMistakes: [{ value: 5, why: 'The inner factor 2 was forgotten.' }, { value: 1, why: 'That is f(0).' }] },
      de: { question: 'f(x) = (2x + 1)⁵. Wie groß ist f′(0)?', explanation: 'f′ = 5(2x + 1)⁴ · 2 = 10(2x + 1)⁴ → 10.', hint: 'Die innere Ableitung 2 nicht vergessen.', commonMistakes: [{ value: 5, why: 'Der innere Faktor 2 fehlt.' }, { value: 1, why: 'Das ist f(0).' }] },
    },
    {
      id: 9, type: 'truefalse', difficulty: 'hard', correct: false,
      verify: 'text',
      al: { question: 'Derivati i cos x është sin x.', explanation: 'E gabuar: (cos x)′ = −sin x.', hint: 'Shikoni shenjën.', whyWrong: 'Te x = π/2 cos zbret, pra derivati duhet negativ: −sin(π/2) = −1.' },
      en: { question: 'The derivative of cos x is sin x.', explanation: 'False: (cos x)′ = −sin x.', hint: 'Look at the sign.', whyWrong: 'At x = π/2 cos is falling, so the derivative must be negative: −sin(π/2) = −1.' },
      de: { question: 'Die Ableitung von cos x ist sin x.', explanation: 'Falsch: (cos x)′ = −sin x.', hint: 'Auf das Vorzeichen achten.', whyWrong: 'Bei x = π/2 fällt cos, die Ableitung muss negativ sein: −sin(π/2) = −1.' },
    },
    {
      id: 10, type: 'choice', difficulty: 'hard', correct: 0,
      verify: ['3*2^2 - 6*2 + 1', 1],
      al: {
        question: 'f(x) = (x² + 1)(x − 3). Sa është f′(2)?', options: ['1', '4', '−4', '−5'],
        explanation: 'f′ = 2x(x − 3) + (x² + 1) → 2 · 2 · (−1) + 5 = 1.', hint: '(fg)′ = f′g + fg′.',
        whyWrong: [null, 'U shumëzuan derivatet 2x · 1.', 'U mor vetëm pjesa e parë f′g.', 'Kjo është f(2), jo f′(2).'],
      },
      en: {
        question: 'f(x) = (x² + 1)(x − 3). What is f′(2)?', options: ['1', '4', '−4', '−5'],
        explanation: 'f′ = 2x(x − 3) + (x² + 1) → 2 · 2 · (−1) + 5 = 1.', hint: '(fg)′ = f′g + fg′.',
        whyWrong: [null, 'The derivatives 2x · 1 were multiplied.', 'Only the first part f′g was taken.', 'That is f(2), not f′(2).'],
      },
      de: {
        question: 'f(x) = (x² + 1)(x − 3). Wie groß ist f′(2)?', options: ['1', '4', '−4', '−5'],
        explanation: 'f′ = 2x(x − 3) + (x² + 1) → 2 · 2 · (−1) + 5 = 1.', hint: '(fg)′ = f′g + fg′.',
        whyWrong: [null, 'Die Ableitungen 2x · 1 wurden multipliziert.', 'Es wurde nur der erste Teil f′g genommen.', 'Das ist f(2), nicht f′(2).'],
      },
    },
  ],
};
