// Grade 8 · Theme 2 quiz: Operations with numbers (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g8-number-operations-quiz',
  grade: 8,
  theme: 'g8-number-operations',
  order: 2,
  difficulty: 'intermediate',
  icon: '±',
  color: '#2A9D8F',
  i18n: {
    al: { title: 'Veprimet me numra', category: 'Klasa 8 · Tema 2', duration: '10 min' },
    en: { title: 'Operations with numbers', category: 'Grade 8 · Theme 2', duration: '10 min' },
    de: { title: 'Rechnen mit Zahlen', category: 'Klasse 8 · Thema 2', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 1,
      verify: ['-3 * (2 - 5)^2 + 4', -23],
      al: {
        question: 'Sa është −3 · (2 − 5)² + 4?', options: ['31', '−23', '13', '85'],
        explanation: '(2 − 5)² = 9; −3 · 9 = −27; −27 + 4 = −23.', hint: 'Kllapat, pastaj fuqia, pastaj shumëzimi.',
        whyWrong: ['(−3)² = 9, jo −9.', null, 'Harruat katrorin: (−3)² = 9.', 'Shumëzuat para se të ngrinit në katror.'],
      },
      en: {
        question: 'What is −3 · (2 − 5)² + 4?', options: ['31', '−23', '13', '85'],
        explanation: '(2 − 5)² = 9; −3 · 9 = −27; −27 + 4 = −23.', hint: 'Brackets, then the power, then multiply.',
        whyWrong: ['(−3)² = 9, not −9.', null, 'You forgot the square: (−3)² = 9.', 'You multiplied before squaring.'],
      },
      de: {
        question: 'Wie viel ist −3 · (2 − 5)² + 4?', options: ['31', '−23', '13', '85'],
        explanation: '(2 − 5)² = 9; −3 · 9 = −27; −27 + 4 = −23.', hint: 'Klammer, dann Potenz, dann multiplizieren.',
        whyWrong: ['(−3)² = 9, nicht −9.', null, 'Das Quadrat fehlt: (−3)² = 9.', 'Sie haben vor dem Quadrieren multipliziert.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: -0.125 },
      verify: ['(-1/2)^3', -0.125],
      al: { question: 'Llogaritni (−1/2)³ (si numër dhjetor ose thyesë).', explanation: '(−1)³/2³ = −1/8 = −0,125.', hint: 'Eksponent tek → shenja mbetet minus.', commonMistakes: [{ value: 0.125, why: 'Eksponenti 3 është tek; shenja minus mbetet.' }, { value: -1.5, why: 'Shumëzuat me 3 në vend që ta ngrini në fuqi.' }] },
      en: { question: 'Work out (−1/2)³ (as a decimal or a fraction).', explanation: '(−1)³/2³ = −1/8 = −0.125.', hint: 'Odd exponent → the minus stays.', commonMistakes: [{ value: 0.125, why: 'The exponent 3 is odd; the minus stays.' }, { value: -1.5, why: 'You multiplied by 3 instead of cubing.' }] },
      de: { question: 'Berechnen Sie (−1/2)³ (als Dezimalzahl oder Bruch).', explanation: '(−1)³/2³ = −1/8 = −0,125.', hint: 'Ungerader Exponent → das Minus bleibt.', commonMistakes: [{ value: 0.125, why: 'Der Exponent 3 ist ungerade; das Minus bleibt.' }, { value: -1.5, why: 'Sie haben mit 3 multipliziert statt hoch 3 gerechnet.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: ['(5^3 * 5^-1) / 5^2 == 1', true],
      al: { question: '(5³ · 5⁻¹) : 5² = 1', explanation: 'E vërtetë: 5³ · 5⁻¹ = 5², dhe 5² : 5² = 5⁰ = 1.', hint: 'Mblidhni, pastaj zbritni eksponentët.', whyWrong: '3 − 1 − 2 = 0 dhe 5⁰ = 1.' },
      en: { question: '(5³ · 5⁻¹) ÷ 5² = 1', explanation: 'True: 5³ · 5⁻¹ = 5², and 5² ÷ 5² = 5⁰ = 1.', hint: 'Add, then subtract the exponents.', whyWrong: '3 − 1 − 2 = 0 and 5⁰ = 1.' },
      de: { question: '(5³ · 5⁻¹) : 5² = 1', explanation: 'Richtig: 5³ · 5⁻¹ = 5², und 5² : 5² = 5⁰ = 1.', hint: 'Exponenten addieren, dann subtrahieren.', whyWrong: '3 − 1 − 2 = 0 und 5⁰ = 1.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 2,
      verify: ['sqrt(50)', '5 * sqrt(2)', 1e-9, '5√2'],
      al: {
        question: 'Si thjeshtohet √50?', options: ['25√2', '2√5', '5√2', '10√5'],
        explanation: '√50 = √(25 · 2) = 5√2.', hint: 'Gjeni katrorin e plotë më të madh në 50.',
        whyWrong: ['Jashtë rrënjës del √25 = 5, jo 25.', '2√5 = √20.', null, '10√5 = √500.'],
      },
      en: {
        question: 'How does √50 simplify?', options: ['25√2', '2√5', '5√2', '10√5'],
        explanation: '√50 = √(25 · 2) = 5√2.', hint: 'Find the largest perfect square in 50.',
        whyWrong: ['√25 = 5 comes out, not 25.', '2√5 = √20.', null, '10√5 = √500.'],
      },
      de: {
        question: 'Wie lässt sich √50 vereinfachen?', options: ['25√2', '2√5', '5√2', '10√5'],
        explanation: '√50 = √(25 · 2) = 5√2.', hint: 'Suchen Sie die größte Quadratzahl in 50.',
        whyWrong: ['Vor die Wurzel kommt √25 = 5, nicht 25.', '2√5 = √20.', null, '10√5 = √500.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: -17 },
      verify: ['(-2)^3 - (-3)^2', -17],
      al: { question: 'Llogaritni (−2)³ − (−3)².', explanation: '(−2)³ = −8; (−3)² = 9; −8 − 9 = −17.', hint: 'Kujdes me shenjat e fuqive.', commonMistakes: [{ value: 1, why: '(−3)² = 9, dhe −8 − 9 = −17.' }, { value: -1, why: '(−2)³ = −8, jo 8.' }] },
      en: { question: 'Work out (−2)³ − (−3)².', explanation: '(−2)³ = −8; (−3)² = 9; −8 − 9 = −17.', hint: 'Watch the signs of the powers.', commonMistakes: [{ value: 1, why: '(−3)² = 9, and −8 − 9 = −17.' }, { value: -1, why: '(−2)³ = −8, not 8.' }] },
      de: { question: 'Berechnen Sie (−2)³ − (−3)².', explanation: '(−2)³ = −8; (−3)² = 9; −8 − 9 = −17.', hint: 'Achten Sie auf die Vorzeichen der Potenzen.', commonMistakes: [{ value: 1, why: '(−3)² = 9, und −8 − 9 = −17.' }, { value: -1, why: '(−2)³ = −8, nicht 8.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 0,
      verify: ['sqrt(2) * sqrt(8)', 4],
      al: {
        question: 'Sa është √2 · √8?', options: ['4', '√10', '16', '2√5'],
        explanation: '√2 · √8 = √16 = 4.', hint: '√a · √b = √(ab).',
        whyWrong: [null, 'Mblodhët nën rrënjë; duhet shumëzuar.', '16 është nën rrënjë: √16 = 4.', '2√5 = √20.'],
      },
      en: {
        question: 'What is √2 · √8?', options: ['4', '√10', '16', '2√5'],
        explanation: '√2 · √8 = √16 = 4.', hint: '√a · √b = √(ab).',
        whyWrong: [null, 'You added under the root; multiply instead.', '16 is under the root: √16 = 4.', '2√5 = √20.'],
      },
      de: {
        question: 'Wie viel ist √2 · √8?', options: ['4', '√10', '16', '2√5'],
        explanation: '√2 · √8 = √16 = 4.', hint: '√a · √b = √(ab).',
        whyWrong: [null, 'Sie haben unter der Wurzel addiert; multiplizieren.', '16 steht unter der Wurzel: √16 = 4.', '2√5 = √20.'],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: false,
      verify: ['sqrt(9 + 16) == sqrt(9) + sqrt(16)', false],
      al: { question: '√(9 + 16) = √9 + √16', explanation: 'E gabuar: √(9 + 16) = √25 = 5, kurse √9 + √16 = 3 + 4 = 7.', hint: 'Llogaritni të dyja anët.', whyWrong: 'Rrënja e shumës nuk është shuma e rrënjëve: 5 ≠ 7.' },
      en: { question: '√(9 + 16) = √9 + √16', explanation: 'False: √(9 + 16) = √25 = 5, but √9 + √16 = 3 + 4 = 7.', hint: 'Work out both sides.', whyWrong: 'The root of a sum is not the sum of the roots: 5 ≠ 7.' },
      de: { question: '√(9 + 16) = √9 + √16', explanation: 'Falsch: √(9 + 16) = √25 = 5, aber √9 + √16 = 3 + 4 = 7.', hint: 'Berechnen Sie beide Seiten.', whyWrong: 'Die Wurzel einer Summe ist nicht die Summe der Wurzeln: 5 ≠ 7.' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 3,
      verify: ['(-2/5) / (4/15)', '-3/2', 1e-9, '−3/2'],
      al: {
        question: 'Sa është (−2/5) : (4/15)?', options: ['−8/75', '3/2', '−2/3', '−3/2'],
        explanation: '(−2/5) · (15/4) = −30/20 = −3/2.', hint: 'Shumëzoni me të anasjelltën e pjesëtuesit.',
        whyWrong: ['Shumëzuat në vend që të pjesëtonit.', 'Humbët shenjën minus.', 'Kjo është e anasjellta e rezultatit.', null],
      },
      en: {
        question: 'What is (−2/5) ÷ (4/15)?', options: ['−8/75', '3/2', '−2/3', '−3/2'],
        explanation: '(−2/5) · (15/4) = −30/20 = −3/2.', hint: 'Multiply by the reciprocal of the divisor.',
        whyWrong: ['You multiplied instead of dividing.', 'You lost the minus sign.', 'That is the reciprocal of the answer.', null],
      },
      de: {
        question: 'Wie viel ist (−2/5) : (4/15)?', options: ['−8/75', '3/2', '−2/3', '−3/2'],
        explanation: '(−2/5) · (15/4) = −30/20 = −3/2.', hint: 'Mit dem Kehrwert des Divisors multiplizieren.',
        whyWrong: ['Sie haben multipliziert statt dividiert.', 'Das Minuszeichen fehlt.', 'Das ist der Kehrwert des Ergebnisses.', null],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: -0.25 },
      verify: ['(-1/2)^2 + (3/4) / (-3/2)', -0.25],
      al: { question: 'Llogaritni (−1/2)² + 3/4 : (−3/2).', explanation: '1/4 + (−1/2) = −1/4 = −0,25.', hint: 'Fuqia dhe pjesëtimi para mbledhjes.', commonMistakes: [{ value: 0.75, why: '3/4 : (−3/2) = −1/2, jo +1/2.' }, { value: -0.75, why: '(−1/2)² = +1/4.' }] },
      en: { question: 'Work out (−1/2)² + 3/4 ÷ (−3/2).', explanation: '1/4 + (−1/2) = −1/4 = −0.25.', hint: 'Power and division before addition.', commonMistakes: [{ value: 0.75, why: '3/4 ÷ (−3/2) = −1/2, not +1/2.' }, { value: -0.75, why: '(−1/2)² = +1/4.' }] },
      de: { question: 'Berechnen Sie (−1/2)² + 3/4 : (−3/2).', explanation: '1/4 + (−1/2) = −1/4 = −0,25.', hint: 'Potenz und Division vor der Addition.', commonMistakes: [{ value: 0.75, why: '3/4 : (−3/2) = −1/2, nicht +1/2.' }, { value: -0.75, why: '(−1/2)² = +1/4.' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 4 },
      verify: ['(2^3)^2 * 2^-4', 4],
      al: { question: 'Llogaritni (2³)² · 2⁻⁴.', explanation: '(2³)² = 2⁶; 2⁶ · 2⁻⁴ = 2² = 4.', hint: 'Fuqi në fuqi: shumëzoni eksponentët.', commonMistakes: [{ value: 2, why: '(2³)² = 2⁶, jo 2⁵.' }, { value: 0.25, why: '6 + (−4) = 2, jo −2.' }] },
      en: { question: 'Work out (2³)² · 2⁻⁴.', explanation: '(2³)² = 2⁶; 2⁶ · 2⁻⁴ = 2² = 4.', hint: 'Power of a power: multiply the exponents.', commonMistakes: [{ value: 2, why: '(2³)² = 2⁶, not 2⁵.' }, { value: 0.25, why: '6 + (−4) = 2, not −2.' }] },
      de: { question: 'Berechnen Sie (2³)² · 2⁻⁴.', explanation: '(2³)² = 2⁶; 2⁶ · 2⁻⁴ = 2² = 4.', hint: 'Potenz einer Potenz: Exponenten multiplizieren.', commonMistakes: [{ value: 2, why: '(2³)² = 2⁶, nicht 2⁵.' }, { value: 0.25, why: '6 + (−4) = 2, nicht −2.' }] },
    },
  ],
};
