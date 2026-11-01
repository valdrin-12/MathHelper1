// Grade 10 · Theme 1 quiz: Number operations (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g10-number-operations-quiz',
  grade: 10,
  theme: 'g10-number-operations',
  order: 1,
  difficulty: 'intermediate',
  icon: '≈',
  color: '#264653',
  i18n: {
    al: { title: 'Veprimet me numra', category: 'Klasa 10 · Tema 1', duration: '10 min' },
    en: { title: 'Number operations', category: 'Grade 10 · Theme 1', duration: '10 min' },
    de: { title: 'Rechnen mit Zahlen', category: 'Klasse 10 · Thema 1', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 2,
      verify: ['0.00458', 0.00458],
      al: {
        question: 'Rrumbullakoni 0,004582 në tri shifra të rëndësishme.', options: ['0,005', '0,0046', '0,00458', '0,004'],
        explanation: 'Shifrat e rëndësishme: 4, 5, 8; e katërta 2 < 5: 0,00458.', hint: 'Zerot para shifrës 4 nuk numërohen.',
        whyWrong: ['Kjo është 1 shifër e rëndësishme.', 'Kjo është 2 shifra të rëndësishme.', null, 'Kjo është prerje, jo rrumbullakim.'],
      },
      en: {
        question: 'Round 0.004582 to three significant figures.', options: ['0.005', '0.0046', '0.00458', '0.004'],
        explanation: 'Significant figures: 4, 5, 8; the fourth is 2 < 5: 0.00458.', hint: 'The zeros before the 4 do not count.',
        whyWrong: ['That is 1 significant figure.', 'That is 2 significant figures.', null, 'That is cutting off, not rounding.'],
      },
      de: {
        question: 'Runden Sie 0,004582 auf drei gültige Ziffern.', options: ['0,005', '0,0046', '0,00458', '0,004'],
        explanation: 'Gültige Ziffern: 4, 5, 8; die vierte ist 2 < 5: 0,00458.', hint: 'Die Nullen vor der 4 zählen nicht.',
        whyWrong: ['Das ist 1 gültige Ziffer.', 'Das sind 2 gültige Ziffern.', null, 'Das ist Abschneiden, nicht Runden.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 200 },
      verify: ['40 * 5', 200],
      al: { question: 'Vlerësoni 38,7 · 4,92 duke rrumbullakuar çdo numër në një shifër të rëndësishme.', explanation: '40 · 5 = 200.', hint: '38,7 ≈ 40; 4,92 ≈ 5.', commonMistakes: [{ value: 190.404, why: 'Kjo është vlera e saktë, jo vlerësimi.' }, { value: 160, why: '4,92 rrumbullakohet në 5, jo 4.' }] },
      en: { question: 'Estimate 38.7 · 4.92 by rounding each number to one significant figure.', explanation: '40 · 5 = 200.', hint: '38.7 ≈ 40; 4.92 ≈ 5.', commonMistakes: [{ value: 190.404, why: 'That is the exact value, not the estimate.' }, { value: 160, why: '4.92 rounds to 5, not 4.' }] },
      de: { question: 'Überschlagen Sie 38,7 · 4,92, indem Sie jede Zahl auf eine gültige Ziffer runden.', explanation: '40 · 5 = 200.', hint: '38,7 ≈ 40; 4,92 ≈ 5.', commonMistakes: [{ value: 190.404, why: 'Das ist der genaue Wert, kein Überschlag.' }, { value: 160, why: '4,92 wird auf 5 gerundet, nicht auf 4.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: ['round(45671 / 1000) * 1000 == 46000', true],
      al: { question: '45 671 e rrumbullakuar në 2 shifra të rëndësishme është 46 000.', explanation: 'E vërtetë: shifra e tretë 6 ≥ 5, pra 45 → 46, me zero: 46 000.', hint: 'Shikoni shifrën e tretë.', whyWrong: '45 671 → 46 000.' },
      en: { question: '45 671 rounded to 2 significant figures is 46 000.', explanation: 'True: the third digit 6 ≥ 5, so 45 → 46, with zeros: 46 000.', hint: 'Look at the third digit.', whyWrong: '45 671 → 46 000.' },
      de: { question: '45 671 auf 2 gültige Ziffern gerundet ergibt 46 000.', explanation: 'Richtig: Die dritte Ziffer 6 ≥ 5, also 45 → 46, mit Nullen: 46 000.', hint: 'Auf die dritte Ziffer schauen.', whyWrong: '45 671 → 46 000.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 1,
      verify: ['3.14', 3.14],
      al: {
        question: 'Rrumbullakoni 3,14159 në 2 dhjetore.', options: ['3,1', '3,14', '3,142', '3,15'],
        explanation: 'Shifra e tretë pas presjes 1 < 5: 3,14.', hint: 'Dy shifra pas presjes.',
        whyWrong: ['Kjo është 1 dhjetore.', null, 'Kjo është 3 dhjetore.', 'Rrumbullakuat lart pa arsye: 1 < 5.'],
      },
      en: {
        question: 'Round 3.14159 to 2 decimal places.', options: ['3.1', '3.14', '3.142', '3.15'],
        explanation: 'The third decimal 1 < 5: 3.14.', hint: 'Two digits after the point.',
        whyWrong: ['That is 1 decimal place.', null, 'That is 3 decimal places.', 'Rounded up for no reason: 1 < 5.'],
      },
      de: {
        question: 'Runden Sie 3,14159 auf 2 Dezimalen.', options: ['3,1', '3,14', '3,142', '3,15'],
        explanation: 'Die dritte Dezimale 1 < 5: 3,14.', hint: 'Zwei Stellen nach dem Komma.',
        whyWrong: ['Das ist 1 Dezimale.', null, 'Das sind 3 Dezimalen.', 'Ohne Grund aufgerundet: 1 < 5.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 6 },
      verify: ['2^3 - 4 * (3 - 5)^2 / 8', 6],
      al: { question: 'Llogaritni 2³ − 4 · (3 − 5)² : 8.', explanation: '8 − 4 · 4 : 8 = 8 − 2 = 6.', hint: 'Kllapat, fuqitë, pastaj · dhe :.', commonMistakes: [{ value: 2, why: 'Zbritja nuk bëhet para shumëzimit.' }, { value: 10, why: '(−2)² = 4, por −4 · 4 : 8 = −2, jo +2.' }] },
      en: { question: 'Work out 2³ − 4 · (3 − 5)² ÷ 8.', explanation: '8 − 4 · 4 ÷ 8 = 8 − 2 = 6.', hint: 'Brackets, powers, then · and ÷.', commonMistakes: [{ value: 2, why: 'Subtraction does not come before multiplication.' }, { value: 10, why: '(−2)² = 4, but −4 · 4 ÷ 8 = −2, not +2.' }] },
      de: { question: 'Berechnen Sie 2³ − 4 · (3 − 5)² : 8.', explanation: '8 − 4 · 4 : 8 = 8 − 2 = 6.', hint: 'Klammern, Potenzen, dann · und :.', commonMistakes: [{ value: 2, why: 'Strich- nicht vor Punktrechnung.' }, { value: 10, why: '(−2)² = 4, aber −4 · 4 : 8 = −2, nicht +2.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 0,
      verify: ['3.2e5 * 2.5e-2', 8000, 1e-9, '8 · 10³'],
      al: {
        question: 'Llogaritni (3,2 · 10⁵) · (2,5 · 10⁻²).', options: ['8 · 10³', '8 · 10⁻¹⁰', '5,7 · 10³', '8 · 10⁷'],
        explanation: '3,2 · 2,5 = 8; 10⁵⁻² = 10³.', hint: 'Shumëzoni numrat, mblidhni eksponentët.',
        whyWrong: [null, 'Eksponentët mblidhen, nuk shumëzohen.', 'Numrat shumëzohen, nuk mblidhen.', '5 + (−2) = 3, jo 7.'],
      },
      en: {
        question: 'Work out (3.2 · 10⁵) · (2.5 · 10⁻²).', options: ['8 · 10³', '8 · 10⁻¹⁰', '5.7 · 10³', '8 · 10⁷'],
        explanation: '3.2 · 2.5 = 8; 10⁵⁻² = 10³.', hint: 'Multiply the numbers, add the exponents.',
        whyWrong: [null, 'The exponents add, they do not multiply.', 'The numbers multiply, they do not add.', '5 + (−2) = 3, not 7.'],
      },
      de: {
        question: 'Berechnen Sie (3,2 · 10⁵) · (2,5 · 10⁻²).', options: ['8 · 10³', '8 · 10⁻¹⁰', '5,7 · 10³', '8 · 10⁷'],
        explanation: '3,2 · 2,5 = 8; 10⁵⁻² = 10³.', hint: 'Zahlen multiplizieren, Exponenten addieren.',
        whyWrong: [null, 'Die Exponenten werden addiert, nicht multipliziert.', 'Die Zahlen werden multipliziert, nicht addiert.', '5 + (−2) = 3, nicht 7.'],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: false,
      verify: ['-(2^2) == 4', false],
      al: { question: '−2² = 4', explanation: 'E gabuar: pa kllapa ngrihet në katror vetëm 2, pra −2² = −4.', hint: 'Ku janë kllapat?', whyWrong: '(−2)² = 4, por −2² = −4.' },
      en: { question: '−2² = 4', explanation: 'False: without brackets only 2 is squared, so −2² = −4.', hint: 'Where are the brackets?', whyWrong: '(−2)² = 4, but −2² = −4.' },
      de: { question: '−2² = 4', explanation: 'Falsch: Ohne Klammer wird nur 2 quadriert, also −2² = −4.', hint: 'Wo stehen Klammern?', whyWrong: '(−2)² = 4, aber −2² = −4.' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 3,
      verify: ['600 / 30', 20],
      al: {
        question: 'Cili është vlerësimi më i mirë për 612 : 29,8?', options: ['2', '200', '18', '20'],
        explanation: '600 : 30 = 20.', hint: 'Rrumbullakoni në një shifër të rëndësishme.',
        whyWrong: ['Gabim me një zero.', 'Gabim me një zero.', '18 nuk del nga rrumbullakimi i thjeshtë.', null],
      },
      en: {
        question: 'Which is the best estimate for 612 ÷ 29.8?', options: ['2', '200', '18', '20'],
        explanation: '600 ÷ 30 = 20.', hint: 'Round to one significant figure.',
        whyWrong: ['Off by a factor of 10.', 'Off by a factor of 10.', '18 does not come from simple rounding.', null],
      },
      de: {
        question: 'Welcher Überschlag passt am besten zu 612 : 29,8?', options: ['2', '200', '18', '20'],
        explanation: '600 : 30 = 20.', hint: 'Auf eine gültige Ziffer runden.',
        whyWrong: ['Um den Faktor 10 daneben.', 'Um den Faktor 10 daneben.', '18 ergibt sich nicht aus einfachem Runden.', null],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 4 },
      verify: ['sqrt(36 + 64) - sqrt(36)', 4],
      al: { question: 'Llogaritni √(36 + 64) − √36.', explanation: '√100 − 6 = 10 − 6 = 4.', hint: 'Mblidhni nën rrënjë para se ta nxirrni.', commonMistakes: [{ value: 8, why: '√(36 + 64) ≠ √36 + √64.' }] },
      en: { question: 'Work out √(36 + 64) − √36.', explanation: '√100 − 6 = 10 − 6 = 4.', hint: 'Add under the root before taking it.', commonMistakes: [{ value: 8, why: '√(36 + 64) ≠ √36 + √64.' }] },
      de: { question: 'Berechnen Sie √(36 + 64) − √36.', explanation: '√100 − 6 = 10 − 6 = 4.', hint: 'Unter der Wurzel erst addieren.', commonMistakes: [{ value: 8, why: '√(36 + 64) ≠ √36 + √64.' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 400000 },
      verify: ['6e8 / 1.5e3', 400000],
      al: { question: 'Llogaritni (6 · 10⁸) : (1,5 · 10³) dhe shkruajeni si numër.', explanation: '6 : 1,5 = 4; 10⁸⁻³ = 10⁵; 4 · 10⁵ = 400 000.', hint: 'Pjesëtoni numrat, zbritni eksponentët.', commonMistakes: [{ value: 4, why: 'Mungon fuqia 10⁵.' }, { value: 40000000000, why: 'Te pjesëtimi eksponentët zbriten.' }] },
      en: { question: 'Work out (6 · 10⁸) ÷ (1.5 · 10³) and write it as a number.', explanation: '6 ÷ 1.5 = 4; 10⁸⁻³ = 10⁵; 4 · 10⁵ = 400 000.', hint: 'Divide the numbers, subtract the exponents.', commonMistakes: [{ value: 4, why: 'The factor 10⁵ is missing.' }, { value: 40000000000, why: 'When dividing, the exponents subtract.' }] },
      de: { question: 'Berechnen Sie (6 · 10⁸) : (1,5 · 10³) und schreiben Sie das Ergebnis als Zahl.', explanation: '6 : 1,5 = 4; 10⁸⁻³ = 10⁵; 4 · 10⁵ = 400 000.', hint: 'Zahlen teilen, Exponenten subtrahieren.', commonMistakes: [{ value: 4, why: 'Der Faktor 10⁵ fehlt.' }, { value: 40000000000, why: 'Beim Dividieren werden die Exponenten subtrahiert.' }] },
    },
  ],
};
