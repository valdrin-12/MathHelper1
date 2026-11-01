// Grade 8 · Theme 7 quiz: Algebraic expressions (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g8-algebraic-expressions-quiz',
  grade: 8,
  theme: 'g8-algebraic-expressions',
  order: 7,
  difficulty: 'intermediate',
  icon: '(a+b)²',
  color: '#6D597A',
  i18n: {
    al: { title: 'Shprehjet shkronjore', category: 'Klasa 8 · Tema 7', duration: '10 min' },
    en: { title: 'Algebraic expressions', category: 'Grade 8 · Theme 7', duration: '10 min' },
    de: { title: 'Terme', category: 'Klasse 8 · Thema 7', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 1,
      verify: 'text',
      al: {
        question: 'Zbërtheni (2a − 3b)².', options: ['4a² − 9b²', '4a² − 12ab + 9b²', '4a² − 6ab + 9b²', '4a² + 9b²'],
        explanation: '(2a)² − 2 · 2a · 3b + (3b)² = 4a² − 12ab + 9b².', hint: 'Katrori i të parit, dyfishi i prodhimit, katrori i të dytit.',
        whyWrong: ['Kjo është (2a − 3b)(2a + 3b).', null, 'Kufiza e mesit është 2 · 2a · 3b = 12ab.', 'Mungon kufiza e mesit dhe shenja e saj.'],
      },
      en: {
        question: 'Expand (2a − 3b)².', options: ['4a² − 9b²', '4a² − 12ab + 9b²', '4a² − 6ab + 9b²', '4a² + 9b²'],
        explanation: '(2a)² − 2 · 2a · 3b + (3b)² = 4a² − 12ab + 9b².', hint: 'First squared, twice the product, second squared.',
        whyWrong: ['That is (2a − 3b)(2a + 3b).', null, 'The middle term is 2 · 2a · 3b = 12ab.', 'The middle term is missing.'],
      },
      de: {
        question: 'Multiplizieren Sie (2a − 3b)² aus.', options: ['4a² − 9b²', '4a² − 12ab + 9b²', '4a² − 6ab + 9b²', '4a² + 9b²'],
        explanation: '(2a)² − 2 · 2a · 3b + (3b)² = 4a² − 12ab + 9b².', hint: 'Erstes Quadrat, doppeltes Produkt, zweites Quadrat.',
        whyWrong: ['Das ist (2a − 3b)(2a + 3b).', null, 'Das mittlere Glied ist 2 · 2a · 3b = 12ab.', 'Das mittlere Glied fehlt.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 1681 },
      verify: ['41^2', 1681],
      al: { question: 'Llogaritni 41² me formulën (40 + 1)².', explanation: '1 600 + 80 + 1 = 1 681.', hint: 'a² + 2ab + b².', commonMistakes: [{ value: 1601, why: 'Mungon dyfishi i prodhimit 2 · 40 · 1 = 80.' }] },
      en: { question: 'Work out 41² using (40 + 1)².', explanation: '1 600 + 80 + 1 = 1 681.', hint: 'a² + 2ab + b².', commonMistakes: [{ value: 1601, why: 'Twice the product 2 · 40 · 1 = 80 is missing.' }] },
      de: { question: 'Berechnen Sie 41² mit (40 + 1)².', explanation: '1 600 + 80 + 1 = 1 681.', hint: 'a² + 2ab + b².', commonMistakes: [{ value: 1601, why: 'Das doppelte Produkt 2 · 40 · 1 = 80 fehlt.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: 'text',
      al: { question: '(x + 3)(x − 3) = x² − 9', explanation: 'E vërtetë: diferenca e katrorëve, kufizat e mesit shuhen.', hint: '(a + b)(a − b) = a² − b².', whyWrong: '−3x + 3x = 0, mbetet x² − 9.' },
      en: { question: '(x + 3)(x − 3) = x² − 9', explanation: 'True: a difference of squares, the middle terms cancel.', hint: '(a + b)(a − b) = a² − b².', whyWrong: '−3x + 3x = 0, leaving x² − 9.' },
      de: { question: '(x + 3)(x − 3) = x² − 9', explanation: 'Richtig: dritte binomische Formel, die mittleren Glieder heben sich auf.', hint: '(a + b)(a − b) = a² − b².', whyWrong: '−3x + 3x = 0, es bleibt x² − 9.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 3,
      verify: 'text',
      al: {
        question: 'Cili është faktorizimi i plotë i 6x²y − 9xy²?', options: ['3(2x²y − 3xy²)', 'xy(6x − 9y)', '3x(2xy − 3y²)', '3xy(2x − 3y)'],
        explanation: 'Faktori i përbashkët më i madh është 3xy: 3xy(2x − 3y).', hint: 'Merrni PMP-në e koeficientëve dhe fuqitë më të vogla.',
        whyWrong: ['E saktë, por mund të nxirret edhe xy.', 'E saktë, por mund të nxirret edhe 3.', 'E saktë, por mund të nxirret edhe y.', null],
      },
      en: {
        question: 'What is the full factorisation of 6x²y − 9xy²?', options: ['3(2x²y − 3xy²)', 'xy(6x − 9y)', '3x(2xy − 3y²)', '3xy(2x − 3y)'],
        explanation: 'The highest common factor is 3xy: 3xy(2x − 3y).', hint: 'Take the GCD of the coefficients and the lowest powers.',
        whyWrong: ['Correct, but xy can still come out.', 'Correct, but 3 can still come out.', 'Correct, but y can still come out.', null],
      },
      de: {
        question: 'Wie lautet die vollständige Faktorisierung von 6x²y − 9xy²?', options: ['3(2x²y − 3xy²)', 'xy(6x − 9y)', '3x(2xy − 3y²)', '3xy(2x − 3y)'],
        explanation: 'Der größte gemeinsame Faktor ist 3xy: 3xy(2x − 3y).', hint: 'ggT der Koeffizienten und die kleinsten Potenzen.',
        whyWrong: ['Richtig, aber xy lässt sich noch ausklammern.', 'Richtig, aber 3 lässt sich noch ausklammern.', 'Richtig, aber y lässt sich noch ausklammern.', null],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 2496 },
      verify: ['52 * 48', 2496],
      al: { question: 'Llogaritni 52 · 48 me diferencën e katrorëve.', explanation: '(50 + 2)(50 − 2) = 2 500 − 4 = 2 496.', hint: '(a + b)(a − b) = a² − b².', commonMistakes: [{ value: 2504, why: 'b² zbritet, nuk shtohet.' }] },
      en: { question: 'Work out 52 · 48 using the difference of two squares.', explanation: '(50 + 2)(50 − 2) = 2 500 − 4 = 2 496.', hint: '(a + b)(a − b) = a² − b².', commonMistakes: [{ value: 2504, why: 'b² is subtracted, not added.' }] },
      de: { question: 'Berechnen Sie 52 · 48 mit der dritten binomischen Formel.', explanation: '(50 + 2)(50 − 2) = 2 500 − 4 = 2 496.', hint: '(a + b)(a − b) = a² − b².', commonMistakes: [{ value: 2504, why: 'b² wird subtrahiert, nicht addiert.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 0,
      verify: 'text',
      al: {
        question: 'Shumëzoni (x + 3)(x − 5).', options: ['x² − 2x − 15', 'x² − 15', 'x² + 2x − 15', 'x² − 8x − 15'],
        explanation: 'x² − 5x + 3x − 15 = x² − 2x − 15.', hint: 'Çdo kufizë me çdo kufizë.',
        whyWrong: [null, 'Mungojnë kufizat e mesit.', 'Shenja e kufizës së mesit: −5x + 3x = −2x.', 'Kufizat e mesit mblidhen me shenjat e tyre: −5x + 3x.'],
      },
      en: {
        question: 'Multiply (x + 3)(x − 5).', options: ['x² − 2x − 15', 'x² − 15', 'x² + 2x − 15', 'x² − 8x − 15'],
        explanation: 'x² − 5x + 3x − 15 = x² − 2x − 15.', hint: 'Every term times every term.',
        whyWrong: [null, 'The middle terms are missing.', 'Sign of the middle term: −5x + 3x = −2x.', 'Add the middle terms with their signs: −5x + 3x.'],
      },
      de: {
        question: 'Multiplizieren Sie (x + 3)(x − 5).', options: ['x² − 2x − 15', 'x² − 15', 'x² + 2x − 15', 'x² − 8x − 15'],
        explanation: 'x² − 5x + 3x − 15 = x² − 2x − 15.', hint: 'Jedes Glied mal jedes Glied.',
        whyWrong: [null, 'Die mittleren Glieder fehlen.', 'Vorzeichen des mittleren Glieds: −5x + 3x = −2x.', 'Die mittleren Glieder mit ihren Vorzeichen addieren: −5x + 3x.'],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: false,
      verify: ['(2 + 3)^2 == 2^2 + 3^2', false],
      al: { question: '(a + b)² = a² + b²', explanation: 'E gabuar: (a + b)² = a² + 2ab + b². P.sh. (2 + 3)² = 25, kurse 2² + 3² = 13.', hint: 'Provoni me a = 2, b = 3.', whyWrong: 'Mungon 2ab.' },
      en: { question: '(a + b)² = a² + b²', explanation: 'False: (a + b)² = a² + 2ab + b². E.g. (2 + 3)² = 25, but 2² + 3² = 13.', hint: 'Try a = 2, b = 3.', whyWrong: 'The 2ab is missing.' },
      de: { question: '(a + b)² = a² + b²', explanation: 'Falsch: (a + b)² = a² + 2ab + b². Z. B. (2 + 3)² = 25, aber 2² + 3² = 13.', hint: 'Probieren Sie a = 2, b = 3.', whyWrong: 'Es fehlt 2ab.' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 2,
      verify: 'text',
      al: {
        question: 'Nga V = πr²h shprehni h.', options: ['h = V − πr²', 'h = V · πr²', 'h = V/(πr²)', 'h = πr²/V'],
        explanation: 'h është shumëzuar me πr²; pjesëtojmë: h = V/(πr²).', hint: 'Veprimi i kundërt i shumëzimit.',
        whyWrong: ['πr² është faktor, jo kufizë.', 'Duhet pjesëtuar, jo shumëzuar.', null, 'Pjesëtimi është përmbys.'],
      },
      en: {
        question: 'Make h the subject of V = πr²h.', options: ['h = V − πr²', 'h = V · πr²', 'h = V/(πr²)', 'h = πr²/V'],
        explanation: 'h has been multiplied by πr²; divide: h = V/(πr²).', hint: 'The inverse of multiplying.',
        whyWrong: ['πr² is a factor, not a term.', 'Divide, do not multiply.', null, 'The division is upside down.'],
      },
      de: {
        question: 'Lösen Sie V = πr²h nach h auf.', options: ['h = V − πr²', 'h = V · πr²', 'h = V/(πr²)', 'h = πr²/V'],
        explanation: 'h wurde mit πr² multipliziert; teilen: h = V/(πr²).', hint: 'Umkehrung des Multiplizierens.',
        whyWrong: ['πr² ist ein Faktor, kein Summand.', 'Teilen, nicht multiplizieren.', null, 'Der Bruch ist umgedreht.'],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 25 },
      verify: ['(77 - 32) / 1.8', 25],
      al: { question: 'F = 1,8C + 32. Sa °C janë 77 °F?', explanation: 'C = (77 − 32)/1,8 = 45/1,8 = 25 °C.', hint: 'Fillimisht zbritni 32.', unit: '°C', commonMistakes: [{ value: 10.78, why: 'Pjesëtuat para se të zbritnit 32.' }] },
      en: { question: 'F = 1.8C + 32. How many °C is 77 °F?', explanation: 'C = (77 − 32)/1.8 = 45/1.8 = 25 °C.', hint: 'Subtract 32 first.', unit: '°C', commonMistakes: [{ value: 10.78, why: 'You divided before subtracting 32.' }] },
      de: { question: 'F = 1,8C + 32. Wie viel °C sind 77 °F?', explanation: 'C = (77 − 32)/1,8 = 45/1,8 = 25 °C.', hint: 'Zuerst 32 subtrahieren.', unit: '°C', commonMistakes: [{ value: 10.78, why: 'Sie haben vor dem Subtrahieren geteilt.' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 400 },
      verify: ['25^2 - 15^2', 400],
      al: { question: 'Llogaritni 25² − 15² duke e faktorizuar.', explanation: '(25 − 15)(25 + 15) = 10 · 40 = 400.', hint: 'a² − b² = (a − b)(a + b).', commonMistakes: [{ value: 100, why: '(25 − 15)² ≠ 25² − 15².' }] },
      en: { question: 'Work out 25² − 15² by factorising.', explanation: '(25 − 15)(25 + 15) = 10 · 40 = 400.', hint: 'a² − b² = (a − b)(a + b).', commonMistakes: [{ value: 100, why: '(25 − 15)² ≠ 25² − 15².' }] },
      de: { question: 'Berechnen Sie 25² − 15² durch Faktorisieren.', explanation: '(25 − 15)(25 + 15) = 10 · 40 = 400.', hint: 'a² − b² = (a − b)(a + b).', commonMistakes: [{ value: 100, why: '(25 − 15)² ≠ 25² − 15².' }] },
    },
  ],
};
