// Grade 11 · Theme 1 quiz: Factors, powers and roots (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g11-factors-powers-roots-quiz',
  grade: 11,
  theme: 'g11-factors-powers-roots',
  order: 1,
  difficulty: 'advanced',
  icon: '🔢',
  color: '#3A86FF',
  i18n: {
    al: { title: 'Faktorët, fuqitë dhe rrënjët', category: 'Klasa 11 · Tema 1', duration: '10 min' },
    en: { title: 'Factors, powers and roots', category: 'Grade 11 · Theme 1', duration: '10 min' },
    de: { title: 'Teiler, Potenzen und Wurzeln', category: 'Klasse 11 · Thema 1', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 0,
      verify: ['gcd(84, 120)', 12],
      al: {
        question: 'Sa është PMP(84, 120)?', options: ['12', '6', '24', '840'],
        explanation: '84 = 2² · 3 · 7, 120 = 2³ · 3 · 5 → PMP = 2² · 3 = 12.', hint: 'Faktorët e përbashkët me fuqinë më të vogël.',
        whyWrong: [null, '6 është faktor i përbashkët, por jo më i madhi.', '24 nuk e pjesëton 84.', '840 është SHVP, jo PMP.'],
      },
      en: {
        question: 'What is GCD(84, 120)?', options: ['12', '6', '24', '840'],
        explanation: '84 = 2² · 3 · 7, 120 = 2³ · 3 · 5 → GCD = 2² · 3 = 12.', hint: 'Common primes with the lowest power.',
        whyWrong: [null, '6 is a common divisor, but not the greatest.', '24 does not divide 84.', '840 is the LCM, not the GCD.'],
      },
      de: {
        question: 'Wie groß ist ggT(84, 120)?', options: ['12', '6', '24', '840'],
        explanation: '84 = 2² · 3 · 7, 120 = 2³ · 3 · 5 → ggT = 2² · 3 = 12.', hint: 'Gemeinsame Primfaktoren mit der kleinsten Potenz.',
        whyWrong: [null, '6 ist ein gemeinsamer Teiler, aber nicht der größte.', '24 teilt 84 nicht.', '840 ist das kgV, nicht der ggT.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 840 },
      verify: ['lcm(84, 120)', 840],
      al: { question: 'Sa është SHVP(84, 120)?', explanation: '2³ · 3 · 5 · 7 = 840.', hint: 'Të gjithë faktorët me fuqinë më të madhe.', commonMistakes: [{ value: 10080, why: 'Ky është prodhimi 84 · 120, jo shumëfishi më i vogël.' }, { value: 12, why: 'Ky është PMP.' }] },
      en: { question: 'What is LCM(84, 120)?', explanation: '2³ · 3 · 5 · 7 = 840.', hint: 'Every prime with the highest power.', commonMistakes: [{ value: 10080, why: 'That is the product 84 · 120, not the lowest multiple.' }, { value: 12, why: 'That is the GCD.' }] },
      de: { question: 'Wie groß ist kgV(84, 120)?', explanation: '2³ · 3 · 5 · 7 = 840.', hint: 'Alle Primfaktoren mit der größten Potenz.', commonMistakes: [{ value: 10080, why: 'Das ist das Produkt 84 · 120, nicht das kleinste Vielfache.' }, { value: 12, why: 'Das ist der ggT.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: false,
      verify: 'text',
      al: { question: '√16 është numër irracional.', explanation: 'E gabuar: √16 = 4 = 4/1, numër racional.', hint: 'A është 16 katror i plotë?', whyWrong: '16 = 4², pra √16 = 4.' },
      en: { question: '√16 is an irrational number.', explanation: 'False: √16 = 4 = 4/1, a rational number.', hint: 'Is 16 a perfect square?', whyWrong: '16 = 4², so √16 = 4.' },
      de: { question: '√16 ist eine irrationale Zahl.', explanation: 'Falsch: √16 = 4 = 4/1, eine rationale Zahl.', hint: 'Ist 16 eine Quadratzahl?', whyWrong: '16 = 4², also √16 = 4.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'medium', correct: 2,
      verify: ['27^(2/3)', 9],
      al: {
        question: 'Sa është 27^(2/3)?', options: ['18', '6', '9', '729'],
        explanation: '(∛27)² = 3² = 9.', hint: 'Emëruesi = rrënja, numëruesi = fuqia.',
        whyWrong: ['U shumëzua 27 · 2/3.', 'U mor ∛27 · 2 në vend të (∛27)².', null, 'Ky është 27², pa nxjerrë rrënjën e tretë.'],
      },
      en: {
        question: 'What is 27^(2/3)?', options: ['18', '6', '9', '729'],
        explanation: '(∛27)² = 3² = 9.', hint: 'Denominator = root, numerator = power.',
        whyWrong: ['27 was multiplied by 2/3.', '∛27 · 2 was used instead of (∛27)².', null, 'That is 27², without the cube root.'],
      },
      de: {
        question: 'Wie viel ist 27^(2/3)?', options: ['18', '6', '9', '729'],
        explanation: '(∛27)² = 3² = 9.', hint: 'Nenner = Wurzel, Zähler = Potenz.',
        whyWrong: ['Es wurde 27 · 2/3 gerechnet.', 'Es wurde ∛27 · 2 statt (∛27)² gerechnet.', null, 'Das ist 27², ohne die dritte Wurzel.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 0.25 },
      verify: ['16^(-1/2)', 0.25],
      al: { question: 'Sa është 16^(−1/2)? Shkruajeni si dhjetore.', explanation: '1/√16 = 1/4 = 0,25.', hint: 'Treguesi negativ jep të anasjelltën.', commonMistakes: [{ value: -4, why: 'Treguesi negativ nuk e bën numrin negativ.' }, { value: 4, why: 'Harroi të anasjelltën: √16 = 4, por duhet 1/4.' }] },
      en: { question: 'What is 16^(−1/2)? Give it as a decimal.', explanation: '1/√16 = 1/4 = 0.25.', hint: 'A negative index gives the reciprocal.', commonMistakes: [{ value: -4, why: 'A negative index does not make the number negative.' }, { value: 4, why: 'The reciprocal is missing: √16 = 4, but it should be 1/4.' }] },
      de: { question: 'Wie viel ist 16^(−1/2)? Als Dezimalzahl.', explanation: '1/√16 = 1/4 = 0,25.', hint: 'Ein negativer Exponent ergibt den Kehrwert.', commonMistakes: [{ value: -4, why: 'Ein negativer Exponent macht die Zahl nicht negativ.' }, { value: 4, why: 'Der Kehrwert fehlt: √16 = 4, gesucht ist 1/4.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 1,
      verify: 'text',
      al: {
        question: 'Cili nga këta numra është irracional?', options: ['√49', '√12', '0,(3)', '22/7'],
        explanation: '12 nuk është katror i plotë, pra √12 = 2√3 është irracional.', hint: 'Cili nuk shkruhet si thyesë?',
        whyWrong: ['√49 = 7, numër i plotë.', null, '0,(3) = 1/3 është periodike, pra racionale.', '22/7 është thyesë, pra racionale.'],
      },
      en: {
        question: 'Which of these numbers is irrational?', options: ['√49', '√12', '0.(3)', '22/7'],
        explanation: '12 is not a perfect square, so √12 = 2√3 is irrational.', hint: 'Which one cannot be written as a fraction?',
        whyWrong: ['√49 = 7, a whole number.', null, '0.(3) = 1/3 recurs, so it is rational.', '22/7 is a fraction, so it is rational.'],
      },
      de: {
        question: 'Welche dieser Zahlen ist irrational?', options: ['√49', '√12', '0,(3)', '22/7'],
        explanation: '12 ist keine Quadratzahl, also ist √12 = 2√3 irrational.', hint: 'Welche lässt sich nicht als Bruch schreiben?',
        whyWrong: ['√49 = 7, eine ganze Zahl.', null, '0,(3) = 1/3 ist periodisch, also rational.', '22/7 ist ein Bruch, also rational.'],
      },
    },
    {
      id: 7, type: 'choice', difficulty: 'medium', correct: 3,
      verify: ['36 / 99', '4/11', 0, '4/11'],
      al: {
        question: 'Cila thyesë është e barabartë me 0,(36) = 0,3636…?', options: ['36/100', '9/25', '36/90', '4/11'],
        explanation: '99x = 36 → x = 36/99 = 4/11.', hint: '100x − x.',
        whyWrong: ['Kjo është 0,36, jo periodike.', '9/25 = 0,36, jo periodike.', 'Duhet pjesëtuar me 99, sepse perioda ka 2 shifra.', null],
      },
      en: {
        question: 'Which fraction equals 0.(36) = 0.3636…?', options: ['36/100', '9/25', '36/90', '4/11'],
        explanation: '99x = 36 → x = 36/99 = 4/11.', hint: '100x − x.',
        whyWrong: ['That is 0.36, not recurring.', '9/25 = 0.36, not recurring.', 'Divide by 99, because the repeating block has 2 digits.', null],
      },
      de: {
        question: 'Welcher Bruch ist gleich 0,(36) = 0,3636…?', options: ['36/100', '9/25', '36/90', '4/11'],
        explanation: '99x = 36 → x = 36/99 = 4/11.', hint: '100x − x.',
        whyWrong: ['Das ist 0,36, nicht periodisch.', '9/25 = 0,36, nicht periodisch.', 'Durch 99 teilen, weil die Periode 2 Ziffern hat.', null],
      },
    },
    {
      id: 8, type: 'input', difficulty: 'hard', answer: { value: 8 },
      verify: ['32^(3/5)', 8],
      al: { question: 'Sa është 32^(3/5)?', explanation: '⁵√32 = 2, pastaj 2³ = 8.', hint: 'Së pari rrënja e pestë.', commonMistakes: [{ value: 19.2, why: 'U shumëzua 32 · 3/5.' }, { value: 2, why: 'U nxor vetëm rrënja, pa e ngritur në fuqinë 3.' }] },
      en: { question: 'What is 32^(3/5)?', explanation: '⁵√32 = 2, then 2³ = 8.', hint: 'Fifth root first.', commonMistakes: [{ value: 19.2, why: '32 was multiplied by 3/5.' }, { value: 2, why: 'Only the root was taken, without cubing.' }] },
      de: { question: 'Wie viel ist 32^(3/5)?', explanation: '⁵√32 = 2, dann 2³ = 8.', hint: 'Zuerst die fünfte Wurzel.', commonMistakes: [{ value: 19.2, why: 'Es wurde 32 · 3/5 gerechnet.' }, { value: 2, why: 'Nur die Wurzel, ohne hoch 3.' }] },
    },
    {
      id: 9, type: 'truefalse', difficulty: 'hard', correct: true,
      verify: ['sqrt(2 * 8) == 4', true],
      al: { question: 'Prodhimi √2 · √8 është numër racional.', explanation: 'E vërtetë: √2 · √8 = √16 = 4.', hint: '√a · √b = √(ab).', whyWrong: 'Dy numra irracionalë mund të japin prodhim racional: √16 = 4.' },
      en: { question: 'The product √2 · √8 is a rational number.', explanation: 'True: √2 · √8 = √16 = 4.', hint: '√a · √b = √(ab).', whyWrong: 'Two irrational numbers can have a rational product: √16 = 4.' },
      de: { question: 'Das Produkt √2 · √8 ist eine rationale Zahl.', explanation: 'Richtig: √2 · √8 = √16 = 4.', hint: '√a · √b = √(ab).', whyWrong: 'Zwei irrationale Zahlen können ein rationales Produkt haben: √16 = 4.' },
    },
    {
      id: 10, type: 'choice', difficulty: 'hard', correct: 0,
      verify: ['gcd(240, 180)', 60],
      al: {
        question: 'Dyshemeja 240 cm × 180 cm shtrohet me pllaka katrore sa më të mëdha pa i prerë. Sa është brinja e pllakës?', options: ['60 cm', '30 cm', '20 cm', '720 cm'],
        explanation: 'PMP(240, 180) = 60 cm.', hint: 'Brinja duhet të pjesëtojë të dyja gjatësitë.',
        whyWrong: [null, '30 pjesëton të dyja, por nuk është më i madhi.', '20 pjesëton të dyja, por nuk është më i madhi.', '720 është SHVP; pllaka do të ishte më e madhe se dyshemeja.'],
      },
      en: {
        question: 'A 240 cm × 180 cm floor is covered with the largest possible square tiles without cutting. What is the side of a tile?', options: ['60 cm', '30 cm', '20 cm', '720 cm'],
        explanation: 'GCD(240, 180) = 60 cm.', hint: 'The side must divide both lengths.',
        whyWrong: [null, '30 divides both, but it is not the largest.', '20 divides both, but it is not the largest.', '720 is the LCM; the tile would be bigger than the floor.'],
      },
      de: {
        question: 'Ein Boden von 240 cm × 180 cm wird mit möglichst großen quadratischen Fliesen ohne Zuschnitt belegt. Wie lang ist eine Fliesenseite?', options: ['60 cm', '30 cm', '20 cm', '720 cm'],
        explanation: 'ggT(240, 180) = 60 cm.', hint: 'Die Seite muss beide Längen teilen.',
        whyWrong: [null, '30 teilt beide, ist aber nicht der größte Teiler.', '20 teilt beide, ist aber nicht der größte Teiler.', '720 ist das kgV; die Fliese wäre größer als der Boden.'],
      },
    },
  ],
};
