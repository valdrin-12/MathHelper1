// Grade 11 · Theme 9 quiz: Sequences (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g11-sequences-quiz',
  grade: 11,
  theme: 'g11-sequences',
  order: 9,
  difficulty: 'advanced',
  icon: '🔁',
  color: '#8338EC',
  i18n: {
    al: { title: 'Vargjet', category: 'Klasa 11 · Tema 9', duration: '10 min' },
    en: { title: 'Sequences', category: 'Grade 11 · Theme 9', duration: '10 min' },
    de: { title: 'Folgen', category: 'Klasse 11 · Thema 9', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 1,
      verify: 'text',
      al: {
        question: 'Cila është kufiza e n-të e 5, 9, 13, 17, …?', options: ['n + 4', '4n + 1', '5n', '4n + 5'],
        explanation: 'd = 4, a₁ = 5: 5 + 4(n − 1) = 4n + 1.', hint: 'Ndryshimi shkon para n.',
        whyWrong: ['Kjo jep 5, 6, 7, …: rritet me 1, jo me 4.', null, 'Kjo jep 5, 10, 15: ndryshimi do të ishte 5.', 'Kjo jep 9 për n = 1, jo 5.'],
      },
      en: {
        question: 'What is the nth term of 5, 9, 13, 17, …?', options: ['n + 4', '4n + 1', '5n', '4n + 5'],
        explanation: 'd = 4, a₁ = 5: 5 + 4(n − 1) = 4n + 1.', hint: 'The difference goes in front of n.',
        whyWrong: ['That gives 5, 6, 7, …: it goes up by 1, not 4.', null, 'That gives 5, 10, 15: the difference would be 5.', 'That gives 9 for n = 1, not 5.'],
      },
      de: {
        question: 'Wie lautet das n-te Glied von 5, 9, 13, 17, …?', options: ['n + 4', '4n + 1', '5n', '4n + 5'],
        explanation: 'd = 4, a₁ = 5: 5 + 4(n − 1) = 4n + 1.', hint: 'Die Differenz steht vor n.',
        whyWrong: ['Das ergibt 5, 6, 7, …: Zuwachs 1 statt 4.', null, 'Das ergibt 5, 10, 15: Die Differenz wäre 5.', 'Das ergibt 9 für n = 1, nicht 5.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 21 },
      verify: ['17 + 4', 21],
      al: { question: 'Sa është kufiza e radhës e 5, 9, 13, 17, …?', explanation: '17 + 4 = 21.', hint: 'Shtoni ndryshimin.', commonMistakes: [{ value: 22, why: 'U shtua 5 në vend të 4.' }, { value: 18, why: 'U shtua 1.' }] },
      en: { question: 'What is the next term of 5, 9, 13, 17, …?', explanation: '17 + 4 = 21.', hint: 'Add the difference.', commonMistakes: [{ value: 22, why: '5 was added instead of 4.' }, { value: 18, why: '1 was added.' }] },
      de: { question: 'Wie lautet das nächste Glied von 5, 9, 13, 17, …?', explanation: '17 + 4 = 21.', hint: 'Die Differenz addieren.', commonMistakes: [{ value: 22, why: 'Es wurde 5 statt 4 addiert.' }, { value: 18, why: 'Es wurde 1 addiert.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: 'text',
      al: { question: 'Vargu 2, 5, 10, 17, … është kuadratik.', explanation: 'E vërtetë: ndryshimet 3, 5, 7 kanë ndryshim të dytë konstant 2.', hint: 'Ndryshimet e dyta.', whyWrong: 'Ndryshimet e dyta janë të gjitha 2.' },
      en: { question: 'The sequence 2, 5, 10, 17, … is quadratic.', explanation: 'True: the differences 3, 5, 7 have a constant second difference of 2.', hint: 'Second differences.', whyWrong: 'The second differences are all 2.' },
      de: { question: 'Die Folge 2, 5, 10, 17, … ist quadratisch.', explanation: 'Richtig: Die Differenzen 3, 5, 7 haben die konstante zweite Differenz 2.', hint: 'Zweite Differenzen.', whyWrong: 'Die zweiten Differenzen sind alle 2.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'medium', correct: 0,
      verify: ['4*30 + 1', 121],
      al: {
        question: 'Sa është kufiza e 30-të e vargut aₙ = 4n + 1?', options: ['121', '120', '125', '34'],
        explanation: '4 · 30 + 1 = 121.', hint: 'Vendosni n = 30.',
        whyWrong: [null, 'U harrua +1.', 'U llogarit 4 · 31 + 1.', 'U mblodh 30 + 4 në vend të 4 · 30.'],
      },
      en: {
        question: 'What is the 30th term of aₙ = 4n + 1?', options: ['121', '120', '125', '34'],
        explanation: '4 · 30 + 1 = 121.', hint: 'Put n = 30.',
        whyWrong: [null, 'The +1 was forgotten.', '4 · 31 + 1 was worked out.', '30 + 4 was used instead of 4 · 30.'],
      },
      de: {
        question: 'Wie lautet das 30. Glied von aₙ = 4n + 1?', options: ['121', '120', '125', '34'],
        explanation: '4 · 30 + 1 = 121.', hint: 'n = 30 einsetzen.',
        whyWrong: [null, 'Das +1 wurde vergessen.', 'Es wurde 4 · 31 + 1 gerechnet.', 'Es wurde 30 + 4 statt 4 · 30 gerechnet.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 230 },
      verify: ['10/2 * (2*5 + 9*4)', 230],
      al: { question: 'Sa është shuma e 10 kufizave të para të 5, 9, 13, …?', explanation: 'S₁₀ = 10/2 · (5 + 41) = 5 · 46 = 230.', hint: 'Sₙ = n/2 · (a₁ + aₙ).', commonMistakes: [{ value: 41, why: 'Kjo është kufiza e 10-të, jo shuma.' }, { value: 460, why: 'U harrua pjesëtimi me 2.' }] },
      en: { question: 'What is the sum of the first 10 terms of 5, 9, 13, …?', explanation: 'S₁₀ = 10/2 · (5 + 41) = 5 · 46 = 230.', hint: 'Sₙ = n/2 · (a₁ + aₙ).', commonMistakes: [{ value: 41, why: 'That is the 10th term, not the sum.' }, { value: 460, why: 'The division by 2 was forgotten.' }] },
      de: { question: 'Wie groß ist die Summe der ersten 10 Glieder von 5, 9, 13, …?', explanation: 'S₁₀ = 10/2 · (5 + 41) = 5 · 46 = 230.', hint: 'Sₙ = n/2 · (a₁ + aₙ).', commonMistakes: [{ value: 41, why: 'Das ist das 10. Glied, nicht die Summe.' }, { value: 460, why: 'Die Division durch 2 fehlt.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 2,
      verify: 'text',
      al: {
        question: 'Cila është kufiza e n-të e 2, 5, 10, 17, …?', options: ['3n − 1', '2n²', 'n² + 1', 'n² + 2'],
        explanation: 'Ndryshimi i dytë 2 → n²; kufiza − n² = 1 → n² + 1.', hint: 'Krahasoni me 1, 4, 9, 16.',
        whyWrong: ['Kjo është lineare: 2, 5, 8, 11.', 'Koeficienti u mor 2 në vend të 2 : 2 = 1.', null, 'Kjo jep 3, 6, 11, 18.'],
      },
      en: {
        question: 'What is the nth term of 2, 5, 10, 17, …?', options: ['3n − 1', '2n²', 'n² + 1', 'n² + 2'],
        explanation: 'Second difference 2 → n²; term − n² = 1 → n² + 1.', hint: 'Compare with 1, 4, 9, 16.',
        whyWrong: ['That is linear: 2, 5, 8, 11.', 'The coefficient was taken as 2 instead of 2 ÷ 2 = 1.', null, 'That gives 3, 6, 11, 18.'],
      },
      de: {
        question: 'Wie lautet das n-te Glied von 2, 5, 10, 17, …?', options: ['3n − 1', '2n²', 'n² + 1', 'n² + 2'],
        explanation: 'Zweite Differenz 2 → n²; Glied − n² = 1 → n² + 1.', hint: 'Mit 1, 4, 9, 16 vergleichen.',
        whyWrong: ['Das ist linear: 2, 5, 8, 11.', 'Der Koeffizient wurde 2 statt 2 : 2 = 1 gesetzt.', null, 'Das ergibt 3, 6, 11, 18.'],
      },
    },
    {
      id: 7, type: 'choice', difficulty: 'medium', correct: 3,
      verify: ['3 * 2^7', 384],
      al: {
        question: 'Sa është kufiza e 8-të e vargut gjeometrik 3, 6, 12, 24, …?', options: ['24', '45', '768', '384'],
        explanation: 'a₈ = 3 · 2⁷ = 384.', hint: 'aₙ = a₁ · rⁿ⁻¹.',
        whyWrong: ['Kjo është kufiza e 4-t.', 'Vargu u trajtua si aritmetik: 3 + 7 · 6.', 'U përdor 2⁸ në vend të 2⁷.', null],
      },
      en: {
        question: 'What is the 8th term of the geometric sequence 3, 6, 12, 24, …?', options: ['24', '45', '768', '384'],
        explanation: 'a₈ = 3 · 2⁷ = 384.', hint: 'aₙ = a₁ · rⁿ⁻¹.',
        whyWrong: ['That is the 4th term.', 'It was treated as arithmetic: 3 + 7 · 6.', '2⁸ was used instead of 2⁷.', null],
      },
      de: {
        question: 'Wie lautet das 8. Glied der geometrischen Folge 3, 6, 12, 24, …?', options: ['24', '45', '768', '384'],
        explanation: 'a₈ = 3 · 2⁷ = 384.', hint: 'aₙ = a₁ · qⁿ⁻¹.',
        whyWrong: ['Das ist das 4. Glied.', 'Die Folge wurde als arithmetisch behandelt: 3 + 7 · 6.', 'Es wurde 2⁸ statt 2⁷ verwendet.', null],
      },
    },
    {
      id: 8, type: 'input', difficulty: 'hard', answer: { value: 55 },
      verify: ['10 * 11 / 2', 55],
      al: { question: 'Sa është numri i 10-të trekëndor (1, 3, 6, 10, …)?', explanation: '10 · 11 / 2 = 55.', hint: 'n(n + 1)/2.', commonMistakes: [{ value: 110, why: 'U harrua pjesëtimi me 2.' }, { value: 100, why: 'Ky është katrori 10².' }] },
      en: { question: 'What is the 10th triangular number (1, 3, 6, 10, …)?', explanation: '10 · 11 / 2 = 55.', hint: 'n(n + 1)/2.', commonMistakes: [{ value: 110, why: 'The division by 2 was forgotten.' }, { value: 100, why: 'That is the square 10².' }] },
      de: { question: 'Wie lautet die 10. Dreieckszahl (1, 3, 6, 10, …)?', explanation: '10 · 11 / 2 = 55.', hint: 'n(n + 1)/2.', commonMistakes: [{ value: 110, why: 'Die Division durch 2 fehlt.' }, { value: 100, why: 'Das ist die Quadratzahl 10².' }] },
    },
    {
      id: 9, type: 'truefalse', difficulty: 'hard', correct: false,
      verify: ['mod(99 - 1, 4) == 0', false],
      al: { question: '99 është kufizë e vargut aₙ = 4n + 1.', explanation: 'E gabuar: 4n + 1 = 99 → n = 24,5, jo numër natyror.', hint: 'Zgjidhni 4n + 1 = 99.', whyWrong: 'Kufizat janë 97 (n = 24) dhe 101 (n = 25).' },
      en: { question: '99 is a term of the sequence aₙ = 4n + 1.', explanation: 'False: 4n + 1 = 99 → n = 24.5, not a whole number.', hint: 'Solve 4n + 1 = 99.', whyWrong: 'The terms are 97 (n = 24) and 101 (n = 25).' },
      de: { question: '99 ist ein Glied der Folge aₙ = 4n + 1.', explanation: 'Falsch: 4n + 1 = 99 → n = 24,5, keine natürliche Zahl.', hint: '4n + 1 = 99 lösen.', whyWrong: 'Die Glieder sind 97 (n = 24) und 101 (n = 25).' },
    },
    {
      id: 10, type: 'choice', difficulty: 'hard', correct: 0,
      verify: 'text',
      al: {
        question: 'Cila është kufiza e n-të e 3, 8, 15, 24, 35?', options: ['n² + 2n', '5n − 2', 'n² + 2', '2n² + 1'],
        explanation: 'Ndryshimi i dytë 2 → n²; mbetja 2, 4, 6, 8, 10 = 2n → n² + 2n.', hint: 'Zbritni n² dhe shikoni çfarë mbetet.',
        whyWrong: [null, 'Kjo është lineare: 3, 8, 13 — ndryshimet nuk janë konstante.', 'Mbetja nuk është konstante, por 2n.', 'Koeficienti i n² është 2 : 2 = 1, jo 2.'],
      },
      en: {
        question: 'What is the nth term of 3, 8, 15, 24, 35?', options: ['n² + 2n', '5n − 2', 'n² + 2', '2n² + 1'],
        explanation: 'Second difference 2 → n²; remainder 2, 4, 6, 8, 10 = 2n → n² + 2n.', hint: 'Subtract n² and look at what is left.',
        whyWrong: [null, 'That is linear: 3, 8, 13 — the differences are not constant.', 'The remainder is not constant, it is 2n.', 'The coefficient of n² is 2 ÷ 2 = 1, not 2.'],
      },
      de: {
        question: 'Wie lautet das n-te Glied von 3, 8, 15, 24, 35?', options: ['n² + 2n', '5n − 2', 'n² + 2', '2n² + 1'],
        explanation: 'Zweite Differenz 2 → n²; Rest 2, 4, 6, 8, 10 = 2n → n² + 2n.', hint: 'n² abziehen und den Rest betrachten.',
        whyWrong: [null, 'Das ist linear: 3, 8, 13 — die Differenzen sind nicht konstant.', 'Der Rest ist nicht konstant, sondern 2n.', 'Der Koeffizient von n² ist 2 : 2 = 1, nicht 2.'],
      },
    },
  ],
};
