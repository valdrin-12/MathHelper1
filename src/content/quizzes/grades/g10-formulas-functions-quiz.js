// Grade 10 · Theme 6 quiz: Formulas and functions (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g10-formulas-functions-quiz',
  grade: 10,
  theme: 'g10-formulas-functions',
  order: 6,
  difficulty: 'intermediate',
  icon: 'f(x)',
  color: '#3A86FF',
  i18n: {
    al: { title: 'Formulat dhe funksionet', category: 'Klasa 10 · Tema 6', duration: '10 min' },
    en: { title: 'Formulas and functions', category: 'Grade 10 · Theme 6', duration: '10 min' },
    de: { title: 'Formeln und Funktionen', category: 'Klasse 10 · Thema 6', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 0,
      verify: 'text',
      al: {
        question: 'Nga v = u + at shprehni a.', options: ['a = (v − u)/t', 'a = v − u − t', 'a = (v + u)/t', 'a = t/(v − u)'],
        explanation: 'v − u = at → a = (v − u)/t.', hint: 'Fillimisht zbritni u, pastaj pjesëtoni me t.',
        whyWrong: [null, 't është faktor; pjesëtohet, nuk zbritet.', 'u zbritet, nuk shtohet.', 'Thyesa është përmbys.'],
      },
      en: {
        question: 'Make a the subject of v = u + at.', options: ['a = (v − u)/t', 'a = v − u − t', 'a = (v + u)/t', 'a = t/(v − u)'],
        explanation: 'v − u = at → a = (v − u)/t.', hint: 'Subtract u first, then divide by t.',
        whyWrong: [null, 't is a factor; divide, do not subtract.', 'u is subtracted, not added.', 'The fraction is upside down.'],
      },
      de: {
        question: 'Stellen Sie v = u + at nach a um.', options: ['a = (v − u)/t', 'a = v − u − t', 'a = (v + u)/t', 'a = t/(v − u)'],
        explanation: 'v − u = at → a = (v − u)/t.', hint: 'Erst u subtrahieren, dann durch t teilen.',
        whyWrong: [null, 't ist ein Faktor; teilen, nicht subtrahieren.', 'u wird subtrahiert, nicht addiert.', 'Der Bruch ist umgedreht.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 10 },
      verify: ['3 * 4 - 2', 10],
      al: { question: 'f(x) = 3x − 2. Sa është f(4)?', explanation: 'f(4) = 12 − 2 = 10.', hint: 'Zëvendësoni x = 4.', commonMistakes: [{ value: 4, why: 'Kjo është x; kërkohet f(4).' }, { value: 6, why: '3 · 4 = 12, jo 8.' }] },
      en: { question: 'f(x) = 3x − 2. What is f(4)?', explanation: 'f(4) = 12 − 2 = 10.', hint: 'Substitute x = 4.', commonMistakes: [{ value: 4, why: 'That is x; f(4) is asked.' }, { value: 6, why: '3 · 4 = 12, not 8.' }] },
      de: { question: 'f(x) = 3x − 2. Wie groß ist f(4)?', explanation: 'f(4) = 12 − 2 = 10.', hint: 'x = 4 einsetzen.', commonMistakes: [{ value: 4, why: 'Das ist x; gefragt ist f(4).' }, { value: 6, why: '3 · 4 = 12, nicht 8.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: 'text',
      al: { question: '2x² + 7x + 3 = (2x + 1)(x + 3)', explanation: 'E vërtetë: 2x² + 6x + x + 3 = 2x² + 7x + 3.', hint: 'Zbërtheni anën e djathtë.', whyWrong: '6x + x = 7x.' },
      en: { question: '2x² + 7x + 3 = (2x + 1)(x + 3)', explanation: 'True: 2x² + 6x + x + 3 = 2x² + 7x + 3.', hint: 'Expand the right side.', whyWrong: '6x + x = 7x.' },
      de: { question: '2x² + 7x + 3 = (2x + 1)(x + 3)', explanation: 'Richtig: 2x² + 6x + x + 3 = 2x² + 7x + 3.', hint: 'Die rechte Seite ausmultiplizieren.', whyWrong: '6x + x = 7x.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 1,
      verify: ['(10 + 2) / 3', 4],
      al: {
        question: 'f(x) = 3x − 2. Për cilin x është f(x) = 10?', options: ['x = 28', 'x = 4', 'x = 8/3', 'x = 10'],
        explanation: '3x − 2 = 10 → x = 4.', hint: 'Zgjidhni ekuacionin.',
        whyWrong: ['Kjo është f(10).', null, '−2 duhet shtuar, jo zbritur: 3x = 12.', '10 është vlera e funksionit, jo x.'],
      },
      en: {
        question: 'f(x) = 3x − 2. For which x is f(x) = 10?', options: ['x = 28', 'x = 4', 'x = 8/3', 'x = 10'],
        explanation: '3x − 2 = 10 → x = 4.', hint: 'Solve the equation.',
        whyWrong: ['That is f(10).', null, 'Add 2, do not subtract it: 3x = 12.', '10 is the function value, not x.'],
      },
      de: {
        question: 'f(x) = 3x − 2. Für welches x ist f(x) = 10?', options: ['x = 28', 'x = 4', 'x = 8/3', 'x = 10'],
        explanation: '3x − 2 = 10 → x = 4.', hint: 'Die Gleichung lösen.',
        whyWrong: ['Das ist f(10).', null, '2 addieren, nicht subtrahieren: 3x = 12.', '10 ist der Funktionswert, nicht x.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 8 },
      verify: ['(-3)^2 - 1', 8],
      al: { question: 'g(x) = x² − 1. Sa është g(−3)?', explanation: '(−3)² − 1 = 9 − 1 = 8.', hint: '(−3)² = 9.', commonMistakes: [{ value: -10, why: '(−3)² = +9, jo −9.' }] },
      en: { question: 'g(x) = x² − 1. What is g(−3)?', explanation: '(−3)² − 1 = 9 − 1 = 8.', hint: '(−3)² = 9.', commonMistakes: [{ value: -10, why: '(−3)² = +9, not −9.' }] },
      de: { question: 'g(x) = x² − 1. Wie groß ist g(−3)?', explanation: '(−3)² − 1 = 9 − 1 = 8.', hint: '(−3)² = 9.', commonMistakes: [{ value: -10, why: '(−3)² = +9, nicht −9.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 2,
      verify: 'text',
      al: {
        question: 'Faktorizoni 3x² − 10x + 8.', options: ['(3x + 4)(x + 2)', '(3x − 2)(x − 4)', '(3x − 4)(x − 2)', '(x − 4)(x − 2)'],
        explanation: 'a · c = 24: −6 dhe −4; (3x − 4)(x − 2).', hint: 'Metoda a · c.',
        whyWrong: ['Shenjat: kufiza e mesit duhet −10x.', 'Zbërtheni: 3x² − 14x + 8.', null, 'Mungon koeficienti 3 te x².'],
      },
      en: {
        question: 'Factorise 3x² − 10x + 8.', options: ['(3x + 4)(x + 2)', '(3x − 2)(x − 4)', '(3x − 4)(x − 2)', '(x − 4)(x − 2)'],
        explanation: 'a · c = 24: −6 and −4; (3x − 4)(x − 2).', hint: 'The a · c method.',
        whyWrong: ['Signs: the middle term must be −10x.', 'Expand: 3x² − 14x + 8.', null, 'The coefficient 3 of x² is missing.'],
      },
      de: {
        question: 'Faktorisieren Sie 3x² − 10x + 8.', options: ['(3x + 4)(x + 2)', '(3x − 2)(x − 4)', '(3x − 4)(x − 2)', '(x − 4)(x − 2)'],
        explanation: 'a · c = 24: −6 und −4; (3x − 4)(x − 2).', hint: 'Die a · c-Methode.',
        whyWrong: ['Vorzeichen: Das mittlere Glied muss −10x sein.', 'Ausmultiplizieren: 3x² − 14x + 8.', null, 'Der Koeffizient 3 bei x² fehlt.'],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: false,
      verify: 'text',
      al: { question: 'x + 3 = 7 është identitet.', explanation: 'E gabuar: vlen vetëm për x = 4, pra është ekuacion.', hint: 'Provoni x = 0.', whyWrong: 'Për x = 0: 3 ≠ 7.' },
      en: { question: 'x + 3 = 7 is an identity.', explanation: 'False: it is true only for x = 4, so it is an equation.', hint: 'Try x = 0.', whyWrong: 'For x = 0: 3 ≠ 7.' },
      de: { question: 'x + 3 = 7 ist eine Identität.', explanation: 'Falsch: Sie gilt nur für x = 4, ist also eine Gleichung.', hint: 'Probieren Sie x = 0.', whyWrong: 'Für x = 0: 3 ≠ 7.' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 3,
      verify: 'text',
      al: {
        question: '(x + p)² + q ≡ x² + 6x + 11. Gjeni p dhe q.', options: ['p = 6, q = 11', 'p = 3, q = 11', 'p = 3, q = 20', 'p = 3, q = 2'],
        explanation: '2p = 6 → p = 3; 9 + q = 11 → q = 2.', hint: 'Zbërtheni (x + p)².',
        whyWrong: ['Koeficienti i x është 2p, jo p.', 'Harruat p² = 9 te kufiza e lirë.', '9 duhet zbritur, jo shtuar.', null],
      },
      en: {
        question: '(x + p)² + q ≡ x² + 6x + 11. Find p and q.', options: ['p = 6, q = 11', 'p = 3, q = 11', 'p = 3, q = 20', 'p = 3, q = 2'],
        explanation: '2p = 6 → p = 3; 9 + q = 11 → q = 2.', hint: 'Expand (x + p)².',
        whyWrong: ['The coefficient of x is 2p, not p.', 'You forgot p² = 9 in the constant term.', 'Subtract 9, do not add it.', null],
      },
      de: {
        question: '(x + p)² + q ≡ x² + 6x + 11. Bestimmen Sie p und q.', options: ['p = 6, q = 11', 'p = 3, q = 11', 'p = 3, q = 20', 'p = 3, q = 2'],
        explanation: '2p = 6 → p = 3; 9 + q = 11 → q = 2.', hint: '(x + p)² ausmultiplizieren.',
        whyWrong: ['Der Koeffizient von x ist 2p, nicht p.', 'p² = 9 im absoluten Glied vergessen.', '9 subtrahieren, nicht addieren.', null],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 5 },
      verify: ['sqrt(2 * 100 / 8)', 5],
      al: { question: 'E = ½mv². Sa është v për E = 100 dhe m = 8 (v > 0)?', explanation: 'v = √(2E/m) = √25 = 5.', hint: 'Veçoni v², pastaj rrënja.', commonMistakes: [{ value: 25, why: 'Ky është v²; nxirrni rrënjën.' }, { value: 3.54, why: 'Harruat faktorin 2: v² = 2E/m.' }] },
      en: { question: 'E = ½mv². What is v for E = 100 and m = 8 (v > 0)?', explanation: 'v = √(2E/m) = √25 = 5.', hint: 'Isolate v², then take the root.', commonMistakes: [{ value: 25, why: 'That is v²; take the root.' }, { value: 3.54, why: 'You forgot the factor 2: v² = 2E/m.' }] },
      de: { question: 'E = ½mv². Wie groß ist v für E = 100 und m = 8 (v > 0)?', explanation: 'v = √(2E/m) = √25 = 5.', hint: 'v² isolieren, dann Wurzel ziehen.', commonMistakes: [{ value: 25, why: 'Das ist v²; die Wurzel ziehen.' }, { value: 3.54, why: 'Der Faktor 2 fehlt: v² = 2E/m.' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 24 },
      verify: ['2 * 3 + 0.5 * 4 * 3^2', 24],
      al: { question: 's = ut + ½at². Gjeni s për u = 2, t = 3, a = 4.', explanation: '2 · 3 + ½ · 4 · 9 = 6 + 18 = 24.', hint: 'Fuqia vetëm te t.', commonMistakes: [{ value: 42, why: '½ · 4 · 3² = 18, jo (½ · 4 · 3)² = 36.' }, { value: 12, why: 't² = 9, jo 3.' }] },
      en: { question: 's = ut + ½at². Find s for u = 2, t = 3, a = 4.', explanation: '2 · 3 + ½ · 4 · 9 = 6 + 18 = 24.', hint: 'Only t is squared.', commonMistakes: [{ value: 42, why: '½ · 4 · 3² = 18, not (½ · 4 · 3)² = 36.' }, { value: 12, why: 't² = 9, not 3.' }] },
      de: { question: 's = ut + ½at². Bestimmen Sie s für u = 2, t = 3, a = 4.', explanation: '2 · 3 + ½ · 4 · 9 = 6 + 18 = 24.', hint: 'Nur t wird quadriert.', commonMistakes: [{ value: 42, why: '½ · 4 · 3² = 18, nicht (½ · 4 · 3)² = 36.' }, { value: 12, why: 't² = 9, nicht 3.' }] },
    },
  ],
};
