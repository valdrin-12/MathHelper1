// Grade 8 · Theme 1 quiz: Number sense (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g8-number-sense-quiz',
  grade: 8,
  theme: 'g8-number-sense',
  order: 1,
  difficulty: 'intermediate',
  icon: '∩',
  color: '#264653',
  i18n: {
    al: { title: 'Kuptimi i numrit', category: 'Klasa 8 · Tema 1', duration: '10 min' },
    en: { title: 'Number sense', category: 'Grade 8 · Theme 1', duration: '10 min' },
    de: { title: 'Zahlverständnis', category: 'Klasse 8 · Thema 1', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 1,
      verify: 'text',
      al: {
        question: 'A = {1, 2, 3, 4}, B = {3, 4, 5}. Sa është A ∩ B?', options: ['{1, 2, 3, 4, 5}', '{3, 4}', '{1, 2}', '{5}'],
        explanation: 'Elementet që janë në të dyja bashkësitë: 3 dhe 4.', hint: '∩ = në A dhe në B.',
        whyWrong: ['Ky është bashkimi A ∪ B.', null, 'Ky është ndryshimi A \\ B.', 'Ky është ndryshimi B \\ A.'],
      },
      en: {
        question: 'A = {1, 2, 3, 4}, B = {3, 4, 5}. What is A ∩ B?', options: ['{1, 2, 3, 4, 5}', '{3, 4}', '{1, 2}', '{5}'],
        explanation: 'The elements in both sets: 3 and 4.', hint: '∩ = in A and in B.',
        whyWrong: ['That is the union A ∪ B.', null, 'That is the difference A \\ B.', 'That is the difference B \\ A.'],
      },
      de: {
        question: 'A = {1, 2, 3, 4}, B = {3, 4, 5}. Was ist A ∩ B?', options: ['{1, 2, 3, 4, 5}', '{3, 4}', '{1, 2}', '{5}'],
        explanation: 'Die Elemente, die in beiden Mengen liegen: 3 und 4.', hint: '∩ = in A und in B.',
        whyWrong: ['Das ist die Vereinigung A ∪ B.', null, 'Das ist die Differenz A \\ B.', 'Das ist die Differenz B \\ A.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 0.125 },
      verify: ['2^-3', 0.125],
      al: { question: 'Llogaritni 2⁻³ (si numër dhjetor ose thyesë).', explanation: '2⁻³ = 1/2³ = 1/8 = 0,125.', hint: 'a⁻ⁿ = 1/aⁿ.', commonMistakes: [{ value: -8, why: 'Eksponenti negativ nuk e bën numrin negativ; jep të anasjelltin.' }, { value: -6, why: 'Fuqia nuk është shumëzim i bazës me eksponentin.' }] },
      en: { question: 'Work out 2⁻³ (as a decimal or a fraction).', explanation: '2⁻³ = 1/2³ = 1/8 = 0.125.', hint: 'a⁻ⁿ = 1/aⁿ.', commonMistakes: [{ value: -8, why: 'A negative exponent does not make the number negative; it gives the reciprocal.' }, { value: -6, why: 'A power is not base times exponent.' }] },
      de: { question: 'Berechnen Sie 2⁻³ (als Dezimalzahl oder Bruch).', explanation: '2⁻³ = 1/2³ = 1/8 = 0,125.', hint: 'a⁻ⁿ = 1/aⁿ.', commonMistakes: [{ value: -8, why: 'Ein negativer Exponent macht die Zahl nicht negativ; er ergibt den Kehrwert.' }, { value: -6, why: 'Eine Potenz ist nicht Basis mal Exponent.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: false,
      verify: ['7^0 == 0', false],
      al: { question: '7⁰ = 0', explanation: 'E gabuar: çdo numër jo zero në fuqinë 0 është 1, pra 7⁰ = 1.', hint: 'Mendoni 7² : 7² = 7⁰.', whyWrong: '7⁰ = 7² : 7² = 1.' },
      en: { question: '7⁰ = 0', explanation: 'False: any non-zero number to the power 0 is 1, so 7⁰ = 1.', hint: 'Think of 7² ÷ 7² = 7⁰.', whyWrong: '7⁰ = 7² ÷ 7² = 1.' },
      de: { question: '7⁰ = 0', explanation: 'Falsch: Jede Zahl ungleich null hoch 0 ist 1, also 7⁰ = 1.', hint: 'Denken Sie an 7² : 7² = 7⁰.', whyWrong: '7⁰ = 7² : 7² = 1.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 0,
      verify: ['7.2 * 10^-4', 0.00072, 1e-12, '7.2 · 10⁻⁴'],
      al: {
        question: 'Si shkruhet 0,00072 në trajtë shkencore?', options: ['7,2 · 10⁻⁴', '7,2 · 10⁴', '72 · 10⁻⁵', '7,2 · 10⁻³'],
        explanation: 'Presja lëviz 4 vende djathtas: 7,2 · 10⁻⁴.', hint: 'Numër më i vogël se 1 → eksponent negativ.',
        whyWrong: [null, 'Kjo është 72 000; eksponenti duhet negativ.', 'Vlera është e saktë, por a duhet të jetë ndërmjet 1 dhe 10.', 'Kjo është 0,0072; presja lëviz 4 vende.'],
      },
      en: {
        question: 'How is 0.00072 written in standard form?', options: ['7.2 · 10⁻⁴', '7.2 · 10⁴', '72 · 10⁻⁵', '7.2 · 10⁻³'],
        explanation: 'The point moves 4 places right: 7.2 · 10⁻⁴.', hint: 'Number less than 1 → negative exponent.',
        whyWrong: [null, 'That is 72 000; the exponent must be negative.', 'The value is right, but a must be between 1 and 10.', 'That is 0.0072; the point moves 4 places.'],
      },
      de: {
        question: 'Wie schreibt man 0,00072 in wissenschaftlicher Schreibweise?', options: ['7,2 · 10⁻⁴', '7,2 · 10⁴', '72 · 10⁻⁵', '7,2 · 10⁻³'],
        explanation: 'Das Komma rückt 4 Stellen nach rechts: 7,2 · 10⁻⁴.', hint: 'Zahl kleiner als 1 → negativer Exponent.',
        whyWrong: [null, 'Das sind 72 000; der Exponent muss negativ sein.', 'Der Wert stimmt, aber a muss zwischen 1 und 10 liegen.', 'Das ist 0,0072; das Komma rückt 4 Stellen.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 25 },
      verify: ['18 + 12 - 5', 25],
      al: { question: 'Në një klasë me 30 nxënës, 18 luajnë futboll, 12 basketboll dhe 5 të dyja. Sa nxënës luajnë të paktën një sport?', explanation: 'n(F ∪ B) = 18 + 12 − 5 = 25.', hint: 'n(A ∪ B) = n(A) + n(B) − n(A ∩ B).', commonMistakes: [{ value: 30, why: 'Mblodhët 18 + 12 pa zbritur ata që luajnë të dyja.' }, { value: 5, why: 'Kjo është numri i atyre që nuk luajnë asnjë.' }] },
      en: { question: 'In a class of 30 students, 18 play football, 12 play basketball and 5 play both. How many play at least one sport?', explanation: 'n(F ∪ B) = 18 + 12 − 5 = 25.', hint: 'n(A ∪ B) = n(A) + n(B) − n(A ∩ B).', commonMistakes: [{ value: 30, why: 'You added 18 + 12 without subtracting those who play both.' }, { value: 5, why: 'That is the number who play neither.' }] },
      de: { question: 'In einer Klasse mit 30 Schülern spielen 18 Fußball, 12 Basketball und 5 beides. Wie viele spielen mindestens eine Sportart?', explanation: 'n(F ∪ B) = 18 + 12 − 5 = 25.', hint: 'n(A ∪ B) = n(A) + n(B) − n(A ∩ B).', commonMistakes: [{ value: 30, why: 'Sie haben 18 + 12 gerechnet, ohne die doppelt Gezählten abzuziehen.' }, { value: 5, why: 'Das ist die Zahl derer, die keins spielen.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 1,
      verify: ['27 / 99', '3/11', 1e-9, '3/11'],
      al: {
        question: 'Cila thyesë është e barabartë me 0,(27) = 0,2727…?', options: ['27/100', '3/11', '27/90', '2/7'],
        explanation: '0,(27) = 27/99 = 3/11.', hint: 'Perioda me dy shifra mbi 99.',
        whyWrong: ['27/100 = 0,27 (pa periodë).', null, '27/90 = 0,3; emëruesi duhet 99.', '2/7 = 0,(285714).'],
      },
      en: {
        question: 'Which fraction equals 0.(27) = 0.2727…?', options: ['27/100', '3/11', '27/90', '2/7'],
        explanation: '0.(27) = 27/99 = 3/11.', hint: 'A two-digit period over 99.',
        whyWrong: ['27/100 = 0.27 (no period).', null, '27/90 = 0.3; the denominator must be 99.', '2/7 = 0.(285714).'],
      },
      de: {
        question: 'Welcher Bruch ist gleich 0,(27) = 0,2727…?', options: ['27/100', '3/11', '27/90', '2/7'],
        explanation: '0,(27) = 27/99 = 3/11.', hint: 'Zweistellige Periode durch 99.',
        whyWrong: ['27/100 = 0,27 (ohne Periode).', null, '27/90 = 0,3; der Nenner muss 99 sein.', '2/7 = 0,(285714).'],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: true,
      verify: ['3 / 9 == 1 / 3', true],
      al: { question: '0,(3) = 1/3', explanation: 'E vërtetë: 0,(3) = 3/9 = 1/3.', hint: 'Perioda me një shifër mbi 9.', whyWrong: '3/9 thjeshtohet në 1/3.' },
      en: { question: '0.(3) = 1/3', explanation: 'True: 0.(3) = 3/9 = 1/3.', hint: 'A one-digit period over 9.', whyWrong: '3/9 simplifies to 1/3.' },
      de: { question: '0,(3) = 1/3', explanation: 'Richtig: 0,(3) = 3/9 = 1/3.', hint: 'Einstellige Periode durch 9.', whyWrong: '3/9 lässt sich zu 1/3 kürzen.' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 3,
      verify: 'text',
      al: {
        question: 'Cili numër është iracional?', options: ['√16', '0,25', '−3', '√5'],
        explanation: '5 nuk është katror i plotë, prandaj √5 = 2,236… është iracional.', hint: 'Cili nuk mund të shkruhet si thyesë?',
        whyWrong: ['√16 = 4 është natyror.', '0,25 = 1/4 është racional.', '−3 është numër i plotë, pra racional.', null],
      },
      en: {
        question: 'Which number is irrational?', options: ['√16', '0.25', '−3', '√5'],
        explanation: '5 is not a perfect square, so √5 = 2.236… is irrational.', hint: 'Which cannot be written as a fraction?',
        whyWrong: ['√16 = 4 is natural.', '0.25 = 1/4 is rational.', '−3 is an integer, so rational.', null],
      },
      de: {
        question: 'Welche Zahl ist irrational?', options: ['√16', '0,25', '−3', '√5'],
        explanation: '5 ist keine Quadratzahl, also ist √5 = 2,236… irrational.', hint: 'Welche lässt sich nicht als Bruch schreiben?',
        whyWrong: ['√16 = 4 ist natürlich.', '0,25 = 1/4 ist rational.', '−3 ist ganz, also rational.', null],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 4 },
      verify: ['(1/2)^-2', 4],
      al: { question: 'Llogaritni (1/2)⁻².', explanation: '(1/2)⁻² = 2² = 4.', hint: 'Eksponenti negativ e kthen thyesën.', commonMistakes: [{ value: 0.25, why: 'Kjo është (1/2)²; eksponenti është negativ.' }, { value: -4, why: 'Eksponenti negativ nuk jep numër negativ.' }] },
      en: { question: 'Work out (1/2)⁻².', explanation: '(1/2)⁻² = 2² = 4.', hint: 'A negative exponent flips the fraction.', commonMistakes: [{ value: 0.25, why: 'That is (1/2)²; the exponent is negative.' }, { value: -4, why: 'A negative exponent does not give a negative number.' }] },
      de: { question: 'Berechnen Sie (1/2)⁻².', explanation: '(1/2)⁻² = 2² = 4.', hint: 'Ein negativer Exponent dreht den Bruch um.', commonMistakes: [{ value: 0.25, why: 'Das ist (1/2)²; der Exponent ist negativ.' }, { value: -4, why: 'Ein negativer Exponent ergibt keine negative Zahl.' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 40000 },
      verify: ['(8 * 10^6) / (2 * 10^2)', 40000],
      al: { question: 'Llogaritni (8 · 10⁶) : (2 · 10²) dhe shkruajeni si numër.', explanation: '8 : 2 = 4; 10⁶⁻² = 10⁴; 4 · 10⁴ = 40 000.', hint: 'Pjesëtoni numrat, zbritni eksponentët.', commonMistakes: [{ value: 4, why: 'Harruat fuqinë 10⁴.' }, { value: 400000000, why: 'Te pjesëtimi eksponentët zbriten, jo mblidhen.' }] },
      en: { question: 'Work out (8 · 10⁶) ÷ (2 · 10²) and write it as a number.', explanation: '8 ÷ 2 = 4; 10⁶⁻² = 10⁴; 4 · 10⁴ = 40 000.', hint: 'Divide the numbers, subtract the exponents.', commonMistakes: [{ value: 4, why: 'You forgot the factor 10⁴.' }, { value: 400000000, why: 'When dividing, the exponents subtract, not add.' }] },
      de: { question: 'Berechnen Sie (8 · 10⁶) : (2 · 10²) und schreiben Sie das Ergebnis als Zahl.', explanation: '8 : 2 = 4; 10⁶⁻² = 10⁴; 4 · 10⁴ = 40 000.', hint: 'Zahlen dividieren, Exponenten subtrahieren.', commonMistakes: [{ value: 4, why: 'Der Faktor 10⁴ fehlt.' }, { value: 400000000, why: 'Beim Dividieren werden die Exponenten subtrahiert, nicht addiert.' }] },
    },
  ],
};
