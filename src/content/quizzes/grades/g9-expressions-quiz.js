// Grade 9 · Theme 2 quiz: Algebraic expressions (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g9-expressions-quiz',
  grade: 9,
  theme: 'g9-expressions',
  order: 2,
  difficulty: 'intermediate',
  icon: '(a+b)³',
  color: '#6D597A',
  i18n: {
    al: { title: 'Shprehjet me ndryshore', category: 'Klasa 9 · Tema 2', duration: '10 min' },
    en: { title: 'Algebraic expressions', category: 'Grade 9 · Theme 2', duration: '10 min' },
    de: { title: 'Terme mit Variablen', category: 'Klasse 9 · Thema 2', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 1,
      verify: 'text',
      al: {
        question: 'Zbërtheni (x + 3)².', options: ['x² + 9', 'x² + 6x + 9', 'x² + 3x + 9', '2x + 6'],
        explanation: 'x² + 2 · 3x + 9 = x² + 6x + 9.', hint: 'a² + 2ab + b².',
        whyWrong: ['Mungon kufiza e mesit 6x.', null, 'Kufiza e mesit është 2 · 3x, jo 3x.', 'Kjo është 2(x + 3), jo katrori.'],
      },
      en: {
        question: 'Expand (x + 3)².', options: ['x² + 9', 'x² + 6x + 9', 'x² + 3x + 9', '2x + 6'],
        explanation: 'x² + 2 · 3x + 9 = x² + 6x + 9.', hint: 'a² + 2ab + b².',
        whyWrong: ['The middle term 6x is missing.', null, 'The middle term is 2 · 3x, not 3x.', 'That is 2(x + 3), not the square.'],
      },
      de: {
        question: 'Multiplizieren Sie (x + 3)² aus.', options: ['x² + 9', 'x² + 6x + 9', 'x² + 3x + 9', '2x + 6'],
        explanation: 'x² + 2 · 3x + 9 = x² + 6x + 9.', hint: 'a² + 2ab + b².',
        whyWrong: ['Das mittlere Glied 6x fehlt.', null, 'Das mittlere Glied ist 2 · 3x, nicht 3x.', 'Das ist 2(x + 3), nicht das Quadrat.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 1331 },
      verify: ['11^3', 1331],
      al: { question: 'Llogaritni 11³ me (10 + 1)³.', explanation: '1 000 + 300 + 30 + 1 = 1 331.', hint: 'a³ + 3a²b + 3ab² + b³.', commonMistakes: [{ value: 1001, why: 'Mungojnë kufizat e mesit 300 dhe 30.' }, { value: 121, why: 'Ky është 11², jo 11³.' }] },
      en: { question: 'Work out 11³ using (10 + 1)³.', explanation: '1 000 + 300 + 30 + 1 = 1 331.', hint: 'a³ + 3a²b + 3ab² + b³.', commonMistakes: [{ value: 1001, why: 'The middle terms 300 and 30 are missing.' }, { value: 121, why: 'That is 11², not 11³.' }] },
      de: { question: 'Berechnen Sie 11³ mit (10 + 1)³.', explanation: '1 000 + 300 + 30 + 1 = 1 331.', hint: 'a³ + 3a²b + 3ab² + b³.', commonMistakes: [{ value: 1001, why: 'Die mittleren Glieder 300 und 30 fehlen.' }, { value: 121, why: 'Das ist 11², nicht 11³.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: 'text',
      al: { question: '9a² − 16 = (3a − 4)(3a + 4)', explanation: 'E vërtetë: (3a)² − 4² = (3a − 4)(3a + 4).', hint: 'Diferenca e katrorëve.', whyWrong: 'Shumëzoni: 9a² + 12a − 12a − 16 = 9a² − 16.' },
      en: { question: '9a² − 16 = (3a − 4)(3a + 4)', explanation: 'True: (3a)² − 4² = (3a − 4)(3a + 4).', hint: 'Difference of two squares.', whyWrong: 'Multiply out: 9a² + 12a − 12a − 16 = 9a² − 16.' },
      de: { question: '9a² − 16 = (3a − 4)(3a + 4)', explanation: 'Richtig: (3a)² − 4² = (3a − 4)(3a + 4).', hint: 'Dritte binomische Formel.', whyWrong: 'Ausmultiplizieren: 9a² + 12a − 12a − 16 = 9a² − 16.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 3,
      verify: 'text',
      al: {
        question: 'Faktorizoni x² − 5x + 6.', options: ['(x + 2)(x + 3)', '(x − 1)(x − 6)', '(x − 6)(x + 1)', '(x − 2)(x − 3)'],
        explanation: '(−2) · (−3) = 6 dhe −2 − 3 = −5.', hint: 'Prodhimi 6, shuma −5.',
        whyWrong: ['Shuma do të ishte +5.', 'Prodhimi 6, por shuma −7.', 'Prodhimi −6, jo 6.', null],
      },
      en: {
        question: 'Factorise x² − 5x + 6.', options: ['(x + 2)(x + 3)', '(x − 1)(x − 6)', '(x − 6)(x + 1)', '(x − 2)(x − 3)'],
        explanation: '(−2) · (−3) = 6 and −2 − 3 = −5.', hint: 'Product 6, sum −5.',
        whyWrong: ['The sum would be +5.', 'Product 6, but sum −7.', 'The product is −6, not 6.', null],
      },
      de: {
        question: 'Faktorisieren Sie x² − 5x + 6.', options: ['(x + 2)(x + 3)', '(x − 1)(x − 6)', '(x − 6)(x + 1)', '(x − 2)(x − 3)'],
        explanation: '(−2) · (−3) = 6 und −2 − 3 = −5.', hint: 'Produkt 6, Summe −5.',
        whyWrong: ['Die Summe wäre +5.', 'Produkt 6, aber Summe −7.', 'Das Produkt ist −6, nicht 6.', null],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 3 },
      verify: ['2*(-1)^3 - (-1) + 4', 3],
      al: { question: 'P(x) = 2x³ − x + 4. Sa është P(−1)?', explanation: '2 · (−1) − (−1) + 4 = −2 + 1 + 4 = 3.', hint: '(−1)³ = −1.', commonMistakes: [{ value: 5, why: '−x për x = −1 jep +1, jo −1.' }, { value: 7, why: '(−1)³ = −1, jo 1.' }] },
      en: { question: 'P(x) = 2x³ − x + 4. What is P(−1)?', explanation: '2 · (−1) − (−1) + 4 = −2 + 1 + 4 = 3.', hint: '(−1)³ = −1.', commonMistakes: [{ value: 5, why: '−x at x = −1 gives +1, not −1.' }, { value: 7, why: '(−1)³ = −1, not 1.' }] },
      de: { question: 'P(x) = 2x³ − x + 4. Wie groß ist P(−1)?', explanation: '2 · (−1) − (−1) + 4 = −2 + 1 + 4 = 3.', hint: '(−1)³ = −1.', commonMistakes: [{ value: 5, why: '−x ergibt für x = −1 den Wert +1, nicht −1.' }, { value: 7, why: '(−1)³ = −1, nicht 1.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 0,
      verify: 'text',
      al: {
        question: 'Thjeshtoni (x² − 4)/(x + 2) për x ≠ −2.', options: ['x − 2', 'x + 2', 'x² − 2', '−2'],
        explanation: '(x − 2)(x + 2)/(x + 2) = x − 2.', hint: 'Faktorizoni numëruesin.',
        whyWrong: [null, 'Thjeshtohet faktori (x + 2), mbetet (x − 2).', 'Thjeshtohen faktorët, jo kufizat.', 'x nuk thjeshtohet si kufizë.'],
      },
      en: {
        question: 'Simplify (x² − 4)/(x + 2) for x ≠ −2.', options: ['x − 2', 'x + 2', 'x² − 2', '−2'],
        explanation: '(x − 2)(x + 2)/(x + 2) = x − 2.', hint: 'Factorise the numerator.',
        whyWrong: [null, 'The factor (x + 2) cancels, (x − 2) is left.', 'Cancel factors, not terms.', 'x cannot be cancelled as a term.'],
      },
      de: {
        question: 'Kürzen Sie (x² − 4)/(x + 2) für x ≠ −2.', options: ['x − 2', 'x + 2', 'x² − 2', '−2'],
        explanation: '(x − 2)(x + 2)/(x + 2) = x − 2.', hint: 'Den Zähler faktorisieren.',
        whyWrong: [null, 'Der Faktor (x + 2) kürzt sich, (x − 2) bleibt.', 'Faktoren kürzen, keine Summanden.', 'x lässt sich als Summand nicht kürzen.'],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: false,
      verify: ['(1 + 2)^3 == 1^3 + 2^3', false],
      al: { question: '(a + b)³ = a³ + b³', explanation: 'E gabuar: (a + b)³ = a³ + 3a²b + 3ab² + b³. P.sh. (1 + 2)³ = 27, kurse 1 + 8 = 9.', hint: 'Provoni a = 1, b = 2.', whyWrong: 'Mungojnë 3a²b + 3ab².' },
      en: { question: '(a + b)³ = a³ + b³', explanation: 'False: (a + b)³ = a³ + 3a²b + 3ab² + b³. E.g. (1 + 2)³ = 27, but 1 + 8 = 9.', hint: 'Try a = 1, b = 2.', whyWrong: '3a²b + 3ab² is missing.' },
      de: { question: '(a + b)³ = a³ + b³', explanation: 'Falsch: (a + b)³ = a³ + 3a²b + 3ab² + b³. Z. B. (1 + 2)³ = 27, aber 1 + 8 = 9.', hint: 'Probieren Sie a = 1, b = 2.', whyWrong: 'Es fehlen 3a²b + 3ab².' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 2,
      verify: 'text',
      al: {
        question: 'Faktorizoni me grupim ax + ay + 2x + 2y.', options: ['(a + x)(2 + y)', 'a(x + y) + 2', '(x + y)(a + 2)', '(a + 2)xy'],
        explanation: 'a(x + y) + 2(x + y) = (x + y)(a + 2).', hint: 'Gruponi dy kufizat e para dhe dy të fundit.',
        whyWrong: ['Kjo jep a·2 + ay + 2x + xy.', 'Nuk është prodhim dhe mungon 2y.', null, 'Kjo jep axy + 2xy.'],
      },
      en: {
        question: 'Factorise by grouping: ax + ay + 2x + 2y.', options: ['(a + x)(2 + y)', 'a(x + y) + 2', '(x + y)(a + 2)', '(a + 2)xy'],
        explanation: 'a(x + y) + 2(x + y) = (x + y)(a + 2).', hint: 'Group the first two and the last two terms.',
        whyWrong: ['That gives 2a + ay + 2x + xy.', 'It is not a product and 2y is missing.', null, 'That gives axy + 2xy.'],
      },
      de: {
        question: 'Faktorisieren Sie durch Gruppieren: ax + ay + 2x + 2y.', options: ['(a + x)(2 + y)', 'a(x + y) + 2', '(x + y)(a + 2)', '(a + 2)xy'],
        explanation: 'a(x + y) + 2(x + y) = (x + y)(a + 2).', hint: 'Die ersten zwei und die letzten zwei Glieder gruppieren.',
        whyWrong: ['Das ergibt 2a + ay + 2x + xy.', 'Kein Produkt, und 2y fehlt.', null, 'Das ergibt axy + 2xy.'],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 9999 },
      verify: ['99 * 101', 9999],
      al: { question: 'Llogaritni 99 · 101 me diferencën e katrorëve.', explanation: '(100 − 1)(100 + 1) = 10 000 − 1 = 9 999.', hint: '(a − b)(a + b) = a² − b².', commonMistakes: [{ value: 10001, why: 'b² zbritet, nuk shtohet.' }] },
      en: { question: 'Work out 99 · 101 using the difference of squares.', explanation: '(100 − 1)(100 + 1) = 10 000 − 1 = 9 999.', hint: '(a − b)(a + b) = a² − b².', commonMistakes: [{ value: 10001, why: 'b² is subtracted, not added.' }] },
      de: { question: 'Berechnen Sie 99 · 101 mit der dritten binomischen Formel.', explanation: '(100 − 1)(100 + 1) = 10 000 − 1 = 9 999.', hint: '(a − b)(a + b) = a² − b².', commonMistakes: [{ value: 10001, why: 'b² wird subtrahiert, nicht addiert.' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 12 },
      verify: ['3 * 2^2', 12],
      al: { question: 'Sa është koeficienti i x në zbërthimin e (x + 2)³?', explanation: '(x + 2)³ = x³ + 6x² + 12x + 8; koeficienti i x është 3 · 2² = 12.', hint: 'Kufiza 3ab² me a = x, b = 2.', commonMistakes: [{ value: 6, why: '6 është koeficienti i x².' }, { value: 8, why: '8 është kufiza e lirë.' }] },
      en: { question: 'What is the coefficient of x when (x + 2)³ is expanded?', explanation: '(x + 2)³ = x³ + 6x² + 12x + 8; the coefficient of x is 3 · 2² = 12.', hint: 'The term 3ab² with a = x, b = 2.', commonMistakes: [{ value: 6, why: '6 is the coefficient of x².' }, { value: 8, why: '8 is the constant term.' }] },
      de: { question: 'Welchen Koeffizienten hat x in (x + 2)³ nach dem Ausmultiplizieren?', explanation: '(x + 2)³ = x³ + 6x² + 12x + 8; der Koeffizient von x ist 3 · 2² = 12.', hint: 'Das Glied 3ab² mit a = x, b = 2.', commonMistakes: [{ value: 6, why: '6 ist der Koeffizient von x².' }, { value: 8, why: '8 ist das absolute Glied.' }] },
    },
  ],
};
