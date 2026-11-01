// Grade 10 · Theme 2 quiz: Algebraic expressions (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g10-algebraic-expressions-quiz',
  grade: 10,
  theme: 'g10-algebraic-expressions',
  order: 2,
  difficulty: 'intermediate',
  icon: 'x³',
  color: '#6D597A',
  i18n: {
    al: { title: 'Shprehjet algjebrike', category: 'Klasa 10 · Tema 2', duration: '10 min' },
    en: { title: 'Algebraic expressions', category: 'Grade 10 · Theme 2', duration: '10 min' },
    de: { title: 'Algebraische Terme', category: 'Klasse 10 · Thema 2', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 2,
      verify: 'text',
      al: {
        question: 'Thjeshtoni (3x²y)³.', options: ['9x⁶y³', '27x⁵y³', '27x⁶y³', '3x⁶y³'],
        explanation: '3³ = 27, (x²)³ = x⁶, y³: 27x⁶y³.', hint: 'Çdo faktor ngrihet në kub.',
        whyWrong: ['3³ = 27, jo 9.', 'Fuqi e fuqisë: 2 · 3 = 6, jo 2 + 3.', null, 'Edhe koeficienti 3 ngrihet në kub.'],
      },
      en: {
        question: 'Simplify (3x²y)³.', options: ['9x⁶y³', '27x⁵y³', '27x⁶y³', '3x⁶y³'],
        explanation: '3³ = 27, (x²)³ = x⁶, y³: 27x⁶y³.', hint: 'Every factor is cubed.',
        whyWrong: ['3³ = 27, not 9.', 'Power of a power: 2 · 3 = 6, not 2 + 3.', null, 'The coefficient 3 is cubed too.'],
      },
      de: {
        question: 'Vereinfachen Sie (3x²y)³.', options: ['9x⁶y³', '27x⁵y³', '27x⁶y³', '3x⁶y³'],
        explanation: '3³ = 27, (x²)³ = x⁶, y³: 27x⁶y³.', hint: 'Jeder Faktor wird hoch 3 genommen.',
        whyWrong: ['3³ = 27, nicht 9.', 'Potenz einer Potenz: 2 · 3 = 6, nicht 2 + 3.', null, 'Auch der Koeffizient 3 wird potenziert.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 3 },
      verify: ['4 * 2 + 5 * (-1)', 3],
      al: { question: 'Njehsoni 4x + 5y për x = 2 dhe y = −1.', explanation: '8 − 5 = 3.', hint: 'Vendosni −1 në kllapa.', commonMistakes: [{ value: 13, why: '5 · (−1) = −5, jo +5.' }] },
      en: { question: 'Evaluate 4x + 5y for x = 2 and y = −1.', explanation: '8 − 5 = 3.', hint: 'Put −1 in brackets.', commonMistakes: [{ value: 13, why: '5 · (−1) = −5, not +5.' }] },
      de: { question: 'Berechnen Sie 4x + 5y für x = 2 und y = −1.', explanation: '8 − 5 = 3.', hint: '−1 in Klammern setzen.', commonMistakes: [{ value: 13, why: '5 · (−1) = −5, nicht +5.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: 'text',
      al: { question: '(2x − 1)(x + 4) = 2x² + 7x − 4', explanation: 'E vërtetë: 2x² + 8x − x − 4 = 2x² + 7x − 4.', hint: 'Shumëzoni çdo kufizë me çdo kufizë.', whyWrong: '8x − x = 7x.' },
      en: { question: '(2x − 1)(x + 4) = 2x² + 7x − 4', explanation: 'True: 2x² + 8x − x − 4 = 2x² + 7x − 4.', hint: 'Multiply every term by every term.', whyWrong: '8x − x = 7x.' },
      de: { question: '(2x − 1)(x + 4) = 2x² + 7x − 4', explanation: 'Richtig: 2x² + 8x − x − 4 = 2x² + 7x − 4.', hint: 'Jedes Glied mit jedem multiplizieren.', whyWrong: '8x − x = 7x.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 3,
      verify: 'text',
      al: {
        question: 'Thjeshtoni 2/x + 3/(2x).', options: ['5/(3x)', '5/(2x)', '7/x', '7/(2x)'],
        explanation: '4/(2x) + 3/(2x) = 7/(2x).', hint: 'Emëruesi i përbashkët është 2x.',
        whyWrong: ['Emëruesit nuk mblidhen.', '2/x duhet zgjeruar në 4/(2x).', 'Emëruesi i përbashkët është 2x, jo x.', null],
      },
      en: {
        question: 'Simplify 2/x + 3/(2x).', options: ['5/(3x)', '5/(2x)', '7/x', '7/(2x)'],
        explanation: '4/(2x) + 3/(2x) = 7/(2x).', hint: 'The common denominator is 2x.',
        whyWrong: ['Denominators are not added.', '2/x must become 4/(2x).', 'The common denominator is 2x, not x.', null],
      },
      de: {
        question: 'Vereinfachen Sie 2/x + 3/(2x).', options: ['5/(3x)', '5/(2x)', '7/x', '7/(2x)'],
        explanation: '4/(2x) + 3/(2x) = 7/(2x).', hint: 'Der Hauptnenner ist 2x.',
        whyWrong: ['Nenner werden nicht addiert.', '2/x muss zu 4/(2x) erweitert werden.', 'Der Hauptnenner ist 2x, nicht x.', null],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 8 },
      verify: ['2^5 * 2^-2', 8],
      al: { question: 'Llogaritni 2⁵ · 2⁻².', explanation: '2⁵⁻² = 2³ = 8.', hint: 'Mblidhni eksponentët.', commonMistakes: [{ value: 0.125, why: '5 + (−2) = 3, jo −3.' }, { value: 128, why: 'Eksponentët mblidhen me shenjat e tyre.' }] },
      en: { question: 'Work out 2⁵ · 2⁻².', explanation: '2⁵⁻² = 2³ = 8.', hint: 'Add the exponents.', commonMistakes: [{ value: 0.125, why: '5 + (−2) = 3, not −3.' }, { value: 128, why: 'Add the exponents with their signs.' }] },
      de: { question: 'Berechnen Sie 2⁵ · 2⁻².', explanation: '2⁵⁻² = 2³ = 8.', hint: 'Exponenten addieren.', commonMistakes: [{ value: 0.125, why: '5 + (−2) = 3, nicht −3.' }, { value: 128, why: 'Exponenten mit Vorzeichen addieren.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 0,
      verify: 'text',
      al: {
        question: 'Faktorizoni x² − 7x + 12.', options: ['(x − 3)(x − 4)', '(x + 3)(x + 4)', '(x − 2)(x − 6)', '(x − 12)(x + 1)'],
        explanation: '(−3)(−4) = 12 dhe −3 − 4 = −7.', hint: 'Prodhimi 12, shuma −7.',
        whyWrong: [null, 'Shuma do të ishte +7.', 'Prodhimi 12, por shuma −8.', 'Prodhimi −12, jo 12.'],
      },
      en: {
        question: 'Factorise x² − 7x + 12.', options: ['(x − 3)(x − 4)', '(x + 3)(x + 4)', '(x − 2)(x − 6)', '(x − 12)(x + 1)'],
        explanation: '(−3)(−4) = 12 and −3 − 4 = −7.', hint: 'Product 12, sum −7.',
        whyWrong: [null, 'The sum would be +7.', 'Product 12, but sum −8.', 'The product is −12, not 12.'],
      },
      de: {
        question: 'Faktorisieren Sie x² − 7x + 12.', options: ['(x − 3)(x − 4)', '(x + 3)(x + 4)', '(x − 2)(x − 6)', '(x − 12)(x + 1)'],
        explanation: '(−3)(−4) = 12 und −3 − 4 = −7.', hint: 'Produkt 12, Summe −7.',
        whyWrong: [null, 'Die Summe wäre +7.', 'Produkt 12, aber Summe −8.', 'Das Produkt ist −12, nicht 12.'],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: false,
      verify: ['(1 + 3)^2 == 1^2 + 9', false],
      al: { question: '(x + 3)² = x² + 9', explanation: 'E gabuar: (x + 3)² = x² + 6x + 9. P.sh. për x = 1: 16 ≠ 10.', hint: 'Provoni x = 1.', whyWrong: 'Mungon 2 · 3 · x = 6x.' },
      en: { question: '(x + 3)² = x² + 9', explanation: 'False: (x + 3)² = x² + 6x + 9. E.g. for x = 1: 16 ≠ 10.', hint: 'Try x = 1.', whyWrong: '2 · 3 · x = 6x is missing.' },
      de: { question: '(x + 3)² = x² + 9', explanation: 'Falsch: (x + 3)² = x² + 6x + 9. Z. B. für x = 1: 16 ≠ 10.', hint: 'Probieren Sie x = 1.', whyWrong: 'Es fehlt 2 · 3 · x = 6x.' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 1,
      verify: 'text',
      al: {
        question: 'Thjeshtoni 3(2x − y) − 2(x − 4y).', options: ['4x − 11y', '4x + 5y', '4x − 5y', '8x + 5y'],
        explanation: '6x − 3y − 2x + 8y = 4x + 5y.', hint: '−2 · (−4y) = +8y.',
        whyWrong: ['−2 · (−4y) duhet +8y, jo −8y.', null, 'Gabim shenje te y.', '6x − 2x = 4x, jo 8x.'],
      },
      en: {
        question: 'Simplify 3(2x − y) − 2(x − 4y).', options: ['4x − 11y', '4x + 5y', '4x − 5y', '8x + 5y'],
        explanation: '6x − 3y − 2x + 8y = 4x + 5y.', hint: '−2 · (−4y) = +8y.',
        whyWrong: ['−2 · (−4y) must be +8y, not −8y.', null, 'Sign slip in y.', '6x − 2x = 4x, not 8x.'],
      },
      de: {
        question: 'Vereinfachen Sie 3(2x − y) − 2(x − 4y).', options: ['4x − 11y', '4x + 5y', '4x − 5y', '8x + 5y'],
        explanation: '6x − 3y − 2x + 8y = 4x + 5y.', hint: '−2 · (−4y) = +8y.',
        whyWrong: ['−2 · (−4y) muss +8y sein, nicht −8y.', null, 'Vorzeichenfehler bei y.', '6x − 2x = 4x, nicht 8x.'],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 8 },
      verify: ['2 * (-1)^2 - 3 * (-1) * 2', 8],
      al: { question: 'Njehsoni 2a² − 3ab për a = −1 dhe b = 2.', explanation: '2 · 1 − 3 · (−1) · 2 = 2 + 6 = 8.', hint: '(−1)² = 1.', commonMistakes: [{ value: -4, why: '−3 · (−1) · 2 = +6, jo −6.' }, { value: 4, why: '2a² = 2 · 1 = 2, jo −2.' }] },
      en: { question: 'Evaluate 2a² − 3ab for a = −1 and b = 2.', explanation: '2 · 1 − 3 · (−1) · 2 = 2 + 6 = 8.', hint: '(−1)² = 1.', commonMistakes: [{ value: -4, why: '−3 · (−1) · 2 = +6, not −6.' }, { value: 4, why: '2a² = 2 · 1 = 2, not −2.' }] },
      de: { question: 'Berechnen Sie 2a² − 3ab für a = −1 und b = 2.', explanation: '2 · 1 − 3 · (−1) · 2 = 2 + 6 = 8.', hint: '(−1)² = 1.', commonMistakes: [{ value: -4, why: '−3 · (−1) · 2 = +6, nicht −6.' }, { value: 4, why: '2a² = 2 · 1 = 2, nicht −2.' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 24 },
      verify: ['(2 + 3)^2 - (2 - 3)^2', 24],
      al: { question: 'Njehsoni (x + 3)² − (x − 3)² për x = 2.', explanation: 'Shprehja është 12x; për x = 2: 24 (ose 25 − 1).', hint: 'Thjeshtoni fillimisht ose zëvendësoni drejtpërdrejt.', commonMistakes: [{ value: 26, why: '(2 − 3)² = 1, jo −1.' }] },
      en: { question: 'Evaluate (x + 3)² − (x − 3)² for x = 2.', explanation: 'The expression is 12x; for x = 2: 24 (or 25 − 1).', hint: 'Simplify first or substitute directly.', commonMistakes: [{ value: 26, why: '(2 − 3)² = 1, not −1.' }] },
      de: { question: 'Berechnen Sie (x + 3)² − (x − 3)² für x = 2.', explanation: 'Der Term ist 12x; für x = 2: 24 (oder 25 − 1).', hint: 'Erst vereinfachen oder direkt einsetzen.', commonMistakes: [{ value: 26, why: '(2 − 3)² = 1, nicht −1.' }] },
    },
  ],
};
