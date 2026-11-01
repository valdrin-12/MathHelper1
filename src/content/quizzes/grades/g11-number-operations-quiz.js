// Grade 11 · Theme 5 quiz: Number operations (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g11-number-operations-quiz',
  grade: 11,
  theme: 'g11-number-operations',
  order: 5,
  difficulty: 'advanced',
  icon: '√',
  color: '#E76F51',
  i18n: {
    al: { title: 'Veprimet me numra', category: 'Klasa 11 · Tema 5', duration: '10 min' },
    en: { title: 'Number operations', category: 'Grade 11 · Theme 5', duration: '10 min' },
    de: { title: 'Rechnen mit Zahlen', category: 'Klasse 11 · Thema 5', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 2,
      verify: ['sqrt(50) + sqrt(18)', '8 * sqrt(2)', 1e-9, '8√2'],
      al: {
        question: 'Thjeshtoni √50 + √18.', options: ['√68', '8√4', '8√2', '15√2'],
        explanation: '5√2 + 3√2 = 8√2.', hint: 'Nxirrni faktorët katrorë 25 dhe 9.',
        whyWrong: ['Rrënjët nuk mblidhen nën një rrënjë.', 'U mblodhën koeficientët, por rrënja u ndryshua.', null, 'Koeficientët 5 dhe 3 u shumëzuan në vend që të mblidheshin.'],
      },
      en: {
        question: 'Simplify √50 + √18.', options: ['√68', '8√4', '8√2', '15√2'],
        explanation: '5√2 + 3√2 = 8√2.', hint: 'Take out the square factors 25 and 9.',
        whyWrong: ['Surds are not added under one root.', 'The coefficients were added, but the root was changed.', null, 'The coefficients 5 and 3 were multiplied instead of added.'],
      },
      de: {
        question: 'Vereinfachen Sie √50 + √18.', options: ['√68', '8√4', '8√2', '15√2'],
        explanation: '5√2 + 3√2 = 8√2.', hint: 'Die Quadratfaktoren 25 und 9 herausziehen.',
        whyWrong: ['Wurzeln werden nicht unter einer Wurzel addiert.', 'Die Koeffizienten wurden addiert, aber die Wurzel verändert.', null, 'Die Koeffizienten 5 und 3 wurden multipliziert statt addiert.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 6 },
      verify: ['sqrt(12) * sqrt(3)', 6],
      al: { question: 'Sa është √12 · √3?', explanation: '√36 = 6.', hint: '√a · √b = √(ab).', commonMistakes: [{ value: 36, why: 'U harrua rrënja: √36 = 6.' }, { value: 15, why: 'Numrat u mblodhën nën rrënjë dhe pastaj u hoq rrënja.' }] },
      en: { question: 'What is √12 · √3?', explanation: '√36 = 6.', hint: '√a · √b = √(ab).', commonMistakes: [{ value: 36, why: 'The root was forgotten: √36 = 6.' }, { value: 15, why: 'The numbers were added and the root dropped.' }] },
      de: { question: 'Wie viel ist √12 · √3?', explanation: '√36 = 6.', hint: '√a · √b = √(ab).', commonMistakes: [{ value: 36, why: 'Die Wurzel wurde vergessen: √36 = 6.' }, { value: 15, why: 'Die Zahlen wurden addiert und die Wurzel weggelassen.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: false,
      verify: ['sqrt(9) + sqrt(16) == sqrt(25)', false],
      al: { question: '√9 + √16 = √25.', explanation: 'E gabuar: 3 + 4 = 7, ndërsa √25 = 5.', hint: 'Llogaritni secilën rrënjë.', whyWrong: 'Rrënja e shumës nuk është shuma e rrënjëve.' },
      en: { question: '√9 + √16 = √25.', explanation: 'False: 3 + 4 = 7, while √25 = 5.', hint: 'Work out each root.', whyWrong: 'The root of a sum is not the sum of the roots.' },
      de: { question: '√9 + √16 = √25.', explanation: 'Falsch: 3 + 4 = 7, aber √25 = 5.', hint: 'Jede Wurzel einzeln berechnen.', whyWrong: 'Die Wurzel einer Summe ist nicht die Summe der Wurzeln.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'medium', correct: 0,
      verify: ['6 / sqrt(3)', '2 * sqrt(3)', 1e-9, '2√3'],
      al: {
        question: 'Racionalizoni 6/√3.', options: ['2√3', '6√3', '√3/2', '2/√3'],
        explanation: '6√3/3 = 2√3.', hint: 'Shumëzoni me √3/√3.',
        whyWrong: [null, 'U shumëzua vetëm numëruesi me √3.', 'Thyesa u kthye.', 'Rrënja mbeti në emërues.'],
      },
      en: {
        question: 'Rationalise 6/√3.', options: ['2√3', '6√3', '√3/2', '2/√3'],
        explanation: '6√3/3 = 2√3.', hint: 'Multiply by √3/√3.',
        whyWrong: [null, 'Only the numerator was multiplied by √3.', 'The fraction was turned upside down.', 'The root is still in the denominator.'],
      },
      de: {
        question: 'Machen Sie den Nenner von 6/√3 rational.', options: ['2√3', '6√3', '√3/2', '2/√3'],
        explanation: '6√3/3 = 2√3.', hint: 'Mit √3 erweitern.',
        whyWrong: [null, 'Nur der Zähler wurde mit √3 multipliziert.', 'Der Bruch wurde umgedreht.', 'Die Wurzel steht noch im Nenner.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 7 },
      verify: ['(3 + sqrt(2)) * (3 - sqrt(2))', 7],
      al: { question: 'Sa është (3 + √2)(3 − √2)?', explanation: '9 − 2 = 7.', hint: '(a + b)(a − b) = a² − b².', commonMistakes: [{ value: 11, why: 'U mblodh (√2)² në vend që të zbritej.' }, { value: 9, why: 'U harrua termi (√2)² = 2.' }] },
      en: { question: 'What is (3 + √2)(3 − √2)?', explanation: '9 − 2 = 7.', hint: '(a + b)(a − b) = a² − b².', commonMistakes: [{ value: 11, why: '(√2)² was added instead of subtracted.' }, { value: 9, why: 'The term (√2)² = 2 was forgotten.' }] },
      de: { question: 'Wie viel ist (3 + √2)(3 − √2)?', explanation: '9 − 2 = 7.', hint: '(a + b)(a − b) = a² − b².', commonMistakes: [{ value: 11, why: '(√2)² wurde addiert statt subtrahiert.' }, { value: 9, why: 'Der Term (√2)² = 2 fehlt.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 1,
      verify: ['sqrt(72)', '6 * sqrt(2)', 1e-9, '6√2'],
      al: {
        question: 'Cila është forma më e thjeshtë e √72?', options: ['3√8', '6√2', '2√18', '36√2'],
        explanation: '72 = 36 · 2 → √72 = 6√2.', hint: 'Faktori katror më i madh i 72.',
        whyWrong: ['E barabartë, por jo e thjeshtuar plotësisht: √8 = 2√2.', null, 'E barabartë, por jo e thjeshtuar plotësisht: √18 = 3√2.', '36 duhet të dalë si √36 = 6.'],
      },
      en: {
        question: 'What is √72 in its simplest form?', options: ['3√8', '6√2', '2√18', '36√2'],
        explanation: '72 = 36 · 2 → √72 = 6√2.', hint: 'The largest square factor of 72.',
        whyWrong: ['Equal, but not fully simplified: √8 = 2√2.', null, 'Equal, but not fully simplified: √18 = 3√2.', '36 comes out as √36 = 6.'],
      },
      de: {
        question: 'Wie lautet √72 in einfachster Form?', options: ['3√8', '6√2', '2√18', '36√2'],
        explanation: '72 = 36 · 2 → √72 = 6√2.', hint: 'Der größte Quadratfaktor von 72.',
        whyWrong: ['Gleich groß, aber nicht ganz vereinfacht: √8 = 2√2.', null, 'Gleich groß, aber nicht ganz vereinfacht: √18 = 3√2.', 'Aus 36 wird √36 = 6.'],
      },
    },
    {
      id: 7, type: 'choice', difficulty: 'medium', correct: 3,
      verify: ['(1 + sqrt(3))^2', '4 + 2 * sqrt(3)', 1e-9, '4 + 2√3'],
      al: {
        question: 'Hapni (1 + √3)².', options: ['4', '2 + 2√3', '4 + √3', '4 + 2√3'],
        explanation: '1 + 2√3 + 3 = 4 + 2√3.', hint: '(a + b)² = a² + 2ab + b².',
        whyWrong: ['U harrua termi i mesit 2√3.', '(√3)² u mor 1 në vend të 3.', 'Termi i mesit duhet 2ab = 2√3.', null],
      },
      en: {
        question: 'Expand (1 + √3)².', options: ['4', '2 + 2√3', '4 + √3', '4 + 2√3'],
        explanation: '1 + 2√3 + 3 = 4 + 2√3.', hint: '(a + b)² = a² + 2ab + b².',
        whyWrong: ['The middle term 2√3 was forgotten.', '(√3)² was taken as 1 instead of 3.', 'The middle term is 2ab = 2√3.', null],
      },
      de: {
        question: 'Lösen Sie (1 + √3)² auf.', options: ['4', '2 + 2√3', '4 + √3', '4 + 2√3'],
        explanation: '1 + 2√3 + 3 = 4 + 2√3.', hint: '(a + b)² = a² + 2ab + b².',
        whyWrong: ['Das Mittelglied 2√3 fehlt.', '(√3)² wurde als 1 statt 3 genommen.', 'Das Mittelglied ist 2ab = 2√3.', null],
      },
    },
    {
      id: 8, type: 'input', difficulty: 'hard', answer: { value: 20 },
      verify: ['(2 * sqrt(5))^2', 20],
      al: { question: 'Sa është (2√5)²?', explanation: '2² · 5 = 4 · 5 = 20.', hint: 'Ngrini në katror të dy faktorët.', commonMistakes: [{ value: 10, why: 'U ngrit në katror vetëm √5.' }, { value: 100, why: 'U llogarit (2 · 5)².' }] },
      en: { question: 'What is (2√5)²?', explanation: '2² · 5 = 4 · 5 = 20.', hint: 'Square both factors.', commonMistakes: [{ value: 10, why: 'Only √5 was squared.' }, { value: 100, why: '(2 · 5)² was worked out.' }] },
      de: { question: 'Wie viel ist (2√5)²?', explanation: '2² · 5 = 4 · 5 = 20.', hint: 'Beide Faktoren quadrieren.', commonMistakes: [{ value: 10, why: 'Nur √5 wurde quadriert.' }, { value: 100, why: 'Es wurde (2 · 5)² gerechnet.' }] },
    },
    {
      id: 9, type: 'truefalse', difficulty: 'hard', correct: true,
      verify: ['abs(1 / (sqrt(5) - 2) - (sqrt(5) + 2)) < 1e-9', true],
      al: { question: '1/(√5 − 2) = √5 + 2.', explanation: 'E vërtetë: (√5 + 2)/((√5 − 2)(√5 + 2)) = (√5 + 2)/(5 − 4) = √5 + 2.', hint: 'Shumëzoni me të konjuguarën.', whyWrong: 'Emëruesi bëhet 5 − 4 = 1.' },
      en: { question: '1/(√5 − 2) = √5 + 2.', explanation: 'True: (√5 + 2)/((√5 − 2)(√5 + 2)) = (√5 + 2)/(5 − 4) = √5 + 2.', hint: 'Multiply by the conjugate.', whyWrong: 'The denominator becomes 5 − 4 = 1.' },
      de: { question: '1/(√5 − 2) = √5 + 2.', explanation: 'Richtig: (√5 + 2)/((√5 − 2)(√5 + 2)) = (√5 + 2)/(5 − 4) = √5 + 2.', hint: 'Mit dem konjugierten Ausdruck erweitern.', whyWrong: 'Der Nenner wird 5 − 4 = 1.' },
    },
    {
      id: 10, type: 'choice', difficulty: 'hard', correct: 2,
      verify: ['sqrt(2^2 + 4^2)', '2 * sqrt(5)', 1e-9, '2√5'],
      al: {
        question: 'Katetet janë 2 cm dhe 4 cm. Sa është hipotenuza saktësisht?', options: ['6 cm', '4,47 cm', '2√5 cm', '√6 cm'],
        explanation: '√(4 + 16) = √20 = 2√5 cm.', hint: 'Pitagora, pa rrumbullakim.',
        whyWrong: ['Katetet u mblodhën: 2 + 4.', 'Kjo është e rrumbullakuar; kërkohet vlera e saktë.', null, 'U nxor rrënja e 2 + 4, pa katrorët.'],
      },
      en: {
        question: 'The legs are 2 cm and 4 cm. What is the exact hypotenuse?', options: ['6 cm', '4.47 cm', '2√5 cm', '√6 cm'],
        explanation: '√(4 + 16) = √20 = 2√5 cm.', hint: 'Pythagoras, no rounding.',
        whyWrong: ['The legs were added: 2 + 4.', 'That is rounded; the exact value is asked for.', null, 'The root of 2 + 4 was taken, without squaring.'],
      },
      de: {
        question: 'Die Katheten sind 2 cm und 4 cm. Wie lang ist die Hypotenuse exakt?', options: ['6 cm', '4,47 cm', '2√5 cm', '√6 cm'],
        explanation: '√(4 + 16) = √20 = 2√5 cm.', hint: 'Pythagoras, ohne Runden.',
        whyWrong: ['Die Katheten wurden addiert: 2 + 4.', 'Das ist gerundet; gesucht ist der exakte Wert.', null, 'Es wurde die Wurzel aus 2 + 4 gezogen, ohne zu quadrieren.'],
      },
    },
  ],
};
