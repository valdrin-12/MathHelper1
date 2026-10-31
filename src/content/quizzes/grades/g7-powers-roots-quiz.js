// Grade 7 · Theme 6 quiz: Powers and square roots (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g7-powers-roots-quiz',
  grade: 7,
  theme: 'g7-powers-roots',
  order: 6,
  difficulty: 'beginner',
  icon: 'x²',
  color: '#DDA15E',
  i18n: {
    al: { title: 'Fuqitë dhe rrënja katrore', category: 'Klasa 7 · Tema 6', duration: '10 min' },
    en: { title: 'Powers and square roots', category: 'Grade 7 · Theme 6', duration: '10 min' },
    de: { title: 'Potenzen und Quadratwurzeln', category: 'Klasse 7 · Thema 6', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 2,
      verify: ['2^3 * 2^4', 128],
      al: {
        question: 'Sa është 2³ · 2⁴?', options: ['4⁷', '2¹²', '2⁷ = 128', '64'],
        explanation: 'Eksponentët mblidhen: 2⁷ = 128.', hint: 'aᵐ · aⁿ = aᵐ⁺ⁿ.',
        whyWrong: ['Baza nuk ndryshon.', 'Eksponentët mblidhen, nuk shumëzohen.', null, '64 = 2⁶; eksponentët janë 3 + 4 = 7.'],
      },
      en: {
        question: 'What is 2³ · 2⁴?', options: ['4⁷', '2¹²', '2⁷ = 128', '64'],
        explanation: 'The exponents add: 2⁷ = 128.', hint: 'aᵐ · aⁿ = aᵐ⁺ⁿ.',
        whyWrong: ['The base does not change.', 'The exponents add, they do not multiply.', null, '64 = 2⁶; the exponents give 3 + 4 = 7.'],
      },
      de: {
        question: 'Wie viel ist 2³ · 2⁴?', options: ['4⁷', '2¹²', '2⁷ = 128', '64'],
        explanation: 'Die Exponenten werden addiert: 2⁷ = 128.', hint: 'aᵐ · aⁿ = aᵐ⁺ⁿ.',
        whyWrong: ['Die Basis ändert sich nicht.', 'Die Exponenten werden addiert, nicht multipliziert.', null, '64 = 2⁶; die Exponenten ergeben 3 + 4 = 7.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 14 },
      verify: ['sqrt(196)', 14],
      al: { question: 'Gjeni √196.', explanation: '14 · 14 = 196, pra √196 = 14.', hint: 'Cili numër në katror jep 196?', commonMistakes: [{ value: 98, why: 'Rrënja nuk është gjysma e numrit.' }] },
      en: { question: 'Find √196.', explanation: '14 · 14 = 196, so √196 = 14.', hint: 'Which number squared gives 196?', commonMistakes: [{ value: 98, why: 'The root is not half the number.' }] },
      de: { question: 'Bestimmen Sie √196.', explanation: '14 · 14 = 196, also √196 = 14.', hint: 'Welche Zahl ergibt quadriert 196?', commonMistakes: [{ value: 98, why: 'Die Wurzel ist nicht die Hälfte der Zahl.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: false,
      verify: ['-(3^2) == 9', false],
      al: { question: '−3² = 9', explanation: 'E gabuar: pa kllapa katrorohet vetëm 3, pra −3² = −9. (−3)² = 9.', hint: 'Ku janë kllapat?', whyWrong: 'Minusi është jashtë fuqisë: −(3 · 3) = −9.' },
      en: { question: '−3² = 9', explanation: 'False: without brackets only 3 is squared, so −3² = −9. (−3)² = 9.', hint: 'Where are the brackets?', whyWrong: 'The minus is outside the power: −(3 · 3) = −9.' },
      de: { question: '−3² = 9', explanation: 'Falsch: Ohne Klammer wird nur 3 quadriert, also −3² = −9. (−3)² = 9.', hint: 'Wo stehen die Klammern?', whyWrong: 'Das Minus steht außerhalb der Potenz: −(3 · 3) = −9.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 0,
      verify: ['4.5 * 10^7', 45000000, undefined, '4.5 · 10⁷'],
      al: {
        question: 'Si shkruhet 45 000 000 në trajtë shkencore?', options: ['4,5 · 10⁷', '45 · 10⁷', '4,5 · 10⁶', '0,45 · 10⁸'],
        explanation: 'Presja lëviz 7 vende: 4,5 · 10⁷.', hint: 'Para presjes duhet një shifër e vetme (1–9).',
        whyWrong: [null, 'Kjo është 450 000 000.', 'Kjo është 4 500 000.', 'Vlera është e saktë, por a duhet të jetë ndërmjet 1 dhe 10.'],
      },
      en: {
        question: 'How is 45 000 000 written in standard form?', options: ['4.5 · 10⁷', '45 · 10⁷', '4.5 · 10⁶', '0.45 · 10⁸'],
        explanation: 'The point moves 7 places: 4.5 · 10⁷.', hint: 'There must be a single digit (1–9) before the point.',
        whyWrong: [null, 'That is 450 000 000.', 'That is 4 500 000.', 'The value is right, but a must be between 1 and 10.'],
      },
      de: {
        question: 'Wie schreibt man 45 000 000 in wissenschaftlicher Schreibweise?', options: ['4,5 · 10⁷', '45 · 10⁷', '4,5 · 10⁶', '0,45 · 10⁸'],
        explanation: 'Das Komma rückt 7 Stellen: 4,5 · 10⁷.', hint: 'Vor dem Komma muss genau eine Ziffer (1–9) stehen.',
        whyWrong: [null, 'Das sind 450 000 000.', 'Das sind 4 500 000.', 'Der Wert stimmt, aber a muss zwischen 1 und 10 liegen.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 27 },
      verify: ['3^5 / 3^2', 27],
      al: { question: 'Llogaritni 3⁵ : 3².', explanation: '3⁵ : 3² = 3³ = 27.', hint: 'Eksponentët zbriten.', commonMistakes: [{ value: 3.5, why: 'Pjesëtuat eksponentët; ata zbriten.' }, { value: 9, why: 'Kjo është 3²; eksponenti është 5 − 2 = 3.' }] },
      en: { question: 'Work out 3⁵ ÷ 3².', explanation: '3⁵ ÷ 3² = 3³ = 27.', hint: 'The exponents subtract.', commonMistakes: [{ value: 3.5, why: 'You divided the exponents; they subtract.' }, { value: 9, why: 'That is 3²; the exponent is 5 − 2 = 3.' }] },
      de: { question: 'Berechnen Sie 3⁵ : 3².', explanation: '3⁵ : 3² = 3³ = 27.', hint: 'Die Exponenten werden subtrahiert.', commonMistakes: [{ value: 3.5, why: 'Sie haben die Exponenten dividiert; sie werden subtrahiert.' }, { value: 9, why: 'Das ist 3²; der Exponent ist 5 − 2 = 3.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 3,
      verify: ['(-2)^3', -8],
      al: {
        question: 'Sa është (−2)³?', options: ['8', '−6', '6', '−8'],
        explanation: '(−2) · (−2) · (−2) = −8: bazë negative, eksponent tek.', hint: 'Numër tek faktorësh negativë jep …',
        whyWrong: ['Tre faktorë negativë japin minus.', 'Shumëzuat bazën me eksponentin.', 'Shumëzuat bazën me eksponentin dhe humbët shenjën.', null],
      },
      en: {
        question: 'What is (−2)³?', options: ['8', '−6', '6', '−8'],
        explanation: '(−2) · (−2) · (−2) = −8: negative base, odd exponent.', hint: 'An odd number of negative factors gives …',
        whyWrong: ['Three negative factors give minus.', 'You multiplied the base by the exponent.', 'You multiplied the base by the exponent and lost the sign.', null],
      },
      de: {
        question: 'Wie viel ist (−2)³?', options: ['8', '−6', '6', '−8'],
        explanation: '(−2) · (−2) · (−2) = −8: negative Basis, ungerader Exponent.', hint: 'Eine ungerade Anzahl negativer Faktoren ergibt …',
        whyWrong: ['Drei negative Faktoren ergeben minus.', 'Sie haben Basis mal Exponent gerechnet.', 'Sie haben Basis mal Exponent gerechnet und das Vorzeichen verloren.', null],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: true,
      verify: ['7 < sqrt(50) and sqrt(50) < 8', true],
      al: { question: '√50 ndodhet ndërmjet 7 dhe 8.', explanation: 'E vërtetë: 7² = 49 < 50 < 64 = 8².', hint: 'Cilët katrorë të plotë janë rreth 50?', whyWrong: '49 < 50 < 64, prandaj 7 < √50 < 8.' },
      en: { question: '√50 lies between 7 and 8.', explanation: 'True: 7² = 49 < 50 < 64 = 8².', hint: 'Which perfect squares are near 50?', whyWrong: '49 < 50 < 64, so 7 < √50 < 8.' },
      de: { question: '√50 liegt zwischen 7 und 8.', explanation: 'Richtig: 7² = 49 < 50 < 64 = 8².', hint: 'Welche Quadratzahlen liegen bei 50?', whyWrong: '49 < 50 < 64, also 7 < √50 < 8.' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 1,
      verify: ['3.2 * 10^5', 320000],
      al: {
        question: 'Si shkruhet 3,2 · 10⁵ si numër?', options: ['3 200 000', '320 000', '32 000', '3,200 000'],
        explanation: 'Presja lëviz 5 vende djathtas: 320 000.', hint: 'Lëvizni presjen sa eksponenti.',
        whyWrong: ['Lëvizët presjen 6 vende.', null, 'Lëvizët presjen 4 vende.', 'Shkrim i pasaktë; numri është 320 000.'],
      },
      en: {
        question: 'How is 3.2 · 10⁵ written as a number?', options: ['3 200 000', '320 000', '32 000', '3.200 000'],
        explanation: 'The point moves 5 places right: 320 000.', hint: 'Move the point as many places as the exponent.',
        whyWrong: ['You moved the point 6 places.', null, 'You moved the point 4 places.', 'Not a valid way to write the number; it is 320 000.'],
      },
      de: {
        question: 'Wie schreibt man 3,2 · 10⁵ als Zahl?', options: ['3 200 000', '320 000', '32 000', '3,200 000'],
        explanation: 'Das Komma rückt 5 Stellen nach rechts: 320 000.', hint: 'Das Komma um so viele Stellen verschieben, wie der Exponent angibt.',
        whyWrong: ['Sie haben das Komma 6 Stellen verschoben.', null, 'Sie haben das Komma 4 Stellen verschoben.', 'Keine gültige Schreibweise; die Zahl ist 320 000.'],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 15625 },
      verify: ['(5^2)^3', 15625],
      al: { question: 'Llogaritni (5²)³.', explanation: '(5²)³ = 5⁶ = 15 625.', hint: 'Fuqi në fuqi: eksponentët shumëzohen.', commonMistakes: [{ value: 3125, why: 'Mblodhët eksponentët (5⁵); te fuqia në fuqi ata shumëzohen.' }] },
      en: { question: 'Work out (5²)³.', explanation: '(5²)³ = 5⁶ = 15 625.', hint: 'Power of a power: multiply the exponents.', commonMistakes: [{ value: 3125, why: 'You added the exponents (5⁵); for a power of a power they multiply.' }] },
      de: { question: 'Berechnen Sie (5²)³.', explanation: '(5²)³ = 5⁶ = 15 625.', hint: 'Potenz einer Potenz: Exponenten multiplizieren.', commonMistakes: [{ value: 3125, why: 'Sie haben die Exponenten addiert (5⁵); hier werden sie multipliziert.' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 9 },
      verify: ['sqrt(81)', 9],
      al: { question: 'Një katror ka sipërfaqe 81 cm². Sa cm është brinja?', explanation: 'a = √81 = 9 cm.', hint: 'S = a · a.', unit: 'cm', commonMistakes: [{ value: 20.25, why: 'Pjesëtuat me 4; kjo do të vlente për perimetrin.' }, { value: 40.5, why: 'Rrënja nuk është gjysma.' }] },
      en: { question: 'A square has an area of 81 cm². How many cm is a side?', explanation: 'a = √81 = 9 cm.', hint: 'A = a · a.', unit: 'cm', commonMistakes: [{ value: 20.25, why: 'You divided by 4; that would work for the perimeter.' }, { value: 40.5, why: 'The root is not half the number.' }] },
      de: { question: 'Ein Quadrat hat den Flächeninhalt 81 cm². Wie viele cm ist eine Seite lang?', explanation: 'a = √81 = 9 cm.', hint: 'A = a · a.', unit: 'cm', commonMistakes: [{ value: 20.25, why: 'Sie haben durch 4 geteilt; das gilt für den Umfang.' }, { value: 40.5, why: 'Die Wurzel ist nicht die Hälfte.' }] },
    },
  ],
};
