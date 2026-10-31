// Grade 9 · Theme 3 quiz: Equations and inequalities (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g9-equations-inequalities-quiz',
  grade: 9,
  theme: 'g9-equations-inequalities',
  order: 3,
  difficulty: 'intermediate',
  icon: '≤',
  color: '#3A86FF',
  i18n: {
    al: { title: 'Ekuacionet dhe inekuacionet', category: 'Klasa 9 · Tema 3', duration: '10 min' },
    en: { title: 'Equations and inequalities', category: 'Grade 9 · Theme 3', duration: '10 min' },
    de: { title: 'Gleichungen und Ungleichungen', category: 'Klasse 9 · Thema 3', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 1,
      verify: ['(4 + 10) / (5 - 3)', 7],
      al: {
        question: 'Zgjidhni 5(x − 2) = 3x + 4.', options: ['x = 3', 'x = 7', 'x = −7', 'x = 1,5'],
        explanation: '5x − 10 = 3x + 4 → 2x = 14 → x = 7.', hint: 'Hiqni kllapat me kujdes.',
        whyWrong: ['5(x − 2) = 5x − 10, jo 5x − 2.', null, 'Gabim shenje gjatë bartjes.', 'Nuk duhej pjesëtuar 3 me 2.'],
      },
      en: {
        question: 'Solve 5(x − 2) = 3x + 4.', options: ['x = 3', 'x = 7', 'x = −7', 'x = 1.5'],
        explanation: '5x − 10 = 3x + 4 → 2x = 14 → x = 7.', hint: 'Remove the brackets carefully.',
        whyWrong: ['5(x − 2) = 5x − 10, not 5x − 2.', null, 'Sign slip when moving terms.', 'You should not divide 3 by 2.'],
      },
      de: {
        question: 'Lösen Sie 5(x − 2) = 3x + 4.', options: ['x = 3', 'x = 7', 'x = −7', 'x = 1,5'],
        explanation: '5x − 10 = 3x + 4 → 2x = 14 → x = 7.', hint: 'Klammern sorgfältig auflösen.',
        whyWrong: ['5(x − 2) = 5x − 10, nicht 5x − 2.', null, 'Vorzeichenfehler beim Umstellen.', 'Man teilt nicht 3 durch 2.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 7 },
      verify: ['sqrt(49)', 7],
      al: { question: 'Cila është zgjidhja pozitive e x² − 49 = 0?', explanation: '(x − 7)(x + 7) = 0 → x = 7 ose x = −7; pozitive është 7.', hint: 'Diferenca e katrorëve.', commonMistakes: [{ value: 49, why: 'x² = 49, pra x = √49.' }, { value: 24.5, why: 'Nuk pjesëtohet me 2; merret rrënja.' }] },
      en: { question: 'What is the positive solution of x² − 49 = 0?', explanation: '(x − 7)(x + 7) = 0 → x = 7 or x = −7; the positive one is 7.', hint: 'Difference of two squares.', commonMistakes: [{ value: 49, why: 'x² = 49, so x = √49.' }, { value: 24.5, why: 'Do not halve; take the root.' }] },
      de: { question: 'Welche ist die positive Lösung von x² − 49 = 0?', explanation: '(x − 7)(x + 7) = 0 → x = 7 oder x = −7; positiv ist 7.', hint: 'Dritte binomische Formel.', commonMistakes: [{ value: 49, why: 'x² = 49, also x = √49.' }, { value: 24.5, why: 'Nicht halbieren; die Wurzel ziehen.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: 'text',
      al: { question: 'Zgjidhja e |x − 3| < 2 është 1 < x < 5.', explanation: 'E vërtetë: numrat më afër se 2 nga 3.', hint: '3 − 2 dhe 3 + 2.', whyWrong: '|x − a| < r ⟺ a − r < x < a + r.' },
      en: { question: 'The solution of |x − 3| < 2 is 1 < x < 5.', explanation: 'True: the numbers closer than 2 to 3.', hint: '3 − 2 and 3 + 2.', whyWrong: '|x − a| < r ⟺ a − r < x < a + r.' },
      de: { question: 'Die Lösung von |x − 3| < 2 ist 1 < x < 5.', explanation: 'Richtig: die Zahlen mit Abstand kleiner als 2 von 3.', hint: '3 − 2 und 3 + 2.', whyWrong: '|x − a| < r ⟺ a − r < x < a + r.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 3,
      verify: 'text',
      al: {
        question: 'Nga P = 2(a + b) shprehni b.', options: ['b = P − 2a', 'b = 2P − a', 'b = (P − a)/2', 'b = P/2 − a'],
        explanation: 'P/2 = a + b → b = P/2 − a.', hint: 'Pjesëtoni me 2, pastaj zbritni a.',
        whyWrong: ['P − 2a = 2b, jo b.', 'Duhet pjesëtuar me 2, jo shumëzuar.', 'Para pjesëtimit zbritet 2a, jo a.', null],
      },
      en: {
        question: 'Make b the subject of P = 2(a + b).', options: ['b = P − 2a', 'b = 2P − a', 'b = (P − a)/2', 'b = P/2 − a'],
        explanation: 'P/2 = a + b → b = P/2 − a.', hint: 'Divide by 2, then subtract a.',
        whyWrong: ['P − 2a = 2b, not b.', 'Divide by 2, do not multiply.', 'Subtract 2a, not a, before dividing.', null],
      },
      de: {
        question: 'Lösen Sie u = 2(a + b) nach b auf.', options: ['b = u − 2a', 'b = 2u − a', 'b = (u − a)/2', 'b = u/2 − a'],
        explanation: 'u/2 = a + b → b = u/2 − a.', hint: 'Durch 2 teilen, dann a subtrahieren.',
        whyWrong: ['u − 2a = 2b, nicht b.', 'Teilen, nicht multiplizieren.', 'Vor dem Teilen 2a abziehen, nicht a.', null],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 11 },
      verify: ['(6 + 2 + 3) / (4 - 3)', 11],
      al: { question: 'Zgjidhni (2x − 1)/3 − (x + 1)/2 = 1.', explanation: '· 6: 4x − 2 − 3x − 3 = 6 → x = 11.', hint: 'Shumëzoni çdo kufizë me 6.', commonMistakes: [{ value: 5, why: 'Edhe 1 duhet shumëzuar me 6.' }] },
      en: { question: 'Solve (2x − 1)/3 − (x + 1)/2 = 1.', explanation: '× 6: 4x − 2 − 3x − 3 = 6 → x = 11.', hint: 'Multiply every term by 6.', commonMistakes: [{ value: 5, why: 'The 1 must be multiplied by 6 as well.' }] },
      de: { question: 'Lösen Sie (2x − 1)/3 − (x + 1)/2 = 1.', explanation: '· 6: 4x − 2 − 3x − 3 = 6 → x = 11.', hint: 'Jedes Glied mit 6 multiplizieren.', commonMistakes: [{ value: 5, why: 'Auch die 1 muss mit 6 multipliziert werden.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 0,
      verify: 'text',
      al: {
        question: 'Zgjidhni −3 < 2x + 1 ≤ 9.', options: ['−2 < x ≤ 4', '−1 < x ≤ 5', '−2 ≤ x < 4', 'x ≤ 4'],
        explanation: '−4 < 2x ≤ 8 → −2 < x ≤ 4.', hint: 'Zbritni 1 dhe pjesëtoni me 2 në të tri pjesët.',
        whyWrong: [null, 'Harruat të pjesëtoni me 2.', 'Shenjat < dhe ≤ nuk ndërrojnë vend.', 'Mungon kufiri i poshtëm.'],
      },
      en: {
        question: 'Solve −3 < 2x + 1 ≤ 9.', options: ['−2 < x ≤ 4', '−1 < x ≤ 5', '−2 ≤ x < 4', 'x ≤ 4'],
        explanation: '−4 < 2x ≤ 8 → −2 < x ≤ 4.', hint: 'Subtract 1 and divide by 2 in all three parts.',
        whyWrong: [null, 'You forgot to divide by 2.', 'The signs < and ≤ do not swap.', 'The lower bound is missing.'],
      },
      de: {
        question: 'Lösen Sie −3 < 2x + 1 ≤ 9.', options: ['−2 < x ≤ 4', '−1 < x ≤ 5', '−2 ≤ x < 4', 'x ≤ 4'],
        explanation: '−4 < 2x ≤ 8 → −2 < x ≤ 4.', hint: 'In allen drei Teilen 1 abziehen und durch 2 teilen.',
        whyWrong: [null, 'Die Division durch 2 fehlt.', 'Die Zeichen < und ≤ tauschen nicht.', 'Die untere Grenze fehlt.'],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: false,
      verify: 'text',
      al: { question: 'Ekuacioni 2(x + 3) = 2x + 5 ka saktësisht një zgjidhje.', explanation: 'E gabuar: 2x + 6 = 2x + 5 jep 0 · x = −1, pra nuk ka zgjidhje.', hint: 'Hiqni kllapat dhe krahasoni.', whyWrong: '6 ≠ 5 për çdo x.' },
      en: { question: 'The equation 2(x + 3) = 2x + 5 has exactly one solution.', explanation: 'False: 2x + 6 = 2x + 5 gives 0 · x = −1, so there is no solution.', hint: 'Remove the brackets and compare.', whyWrong: '6 ≠ 5 for every x.' },
      de: { question: 'Die Gleichung 2(x + 3) = 2x + 5 hat genau eine Lösung.', explanation: 'Falsch: 2x + 6 = 2x + 5 ergibt 0 · x = −1, also keine Lösung.', hint: 'Klammer auflösen und vergleichen.', whyWrong: '6 ≠ 5 für jedes x.' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 2,
      verify: 'text',
      al: {
        question: 'Zgjidhni x² = 3x.', options: ['x = 3', 'x = 0', 'x = 0 ose x = 3', 'x = ±3'],
        explanation: 'x² − 3x = 0 → x(x − 3) = 0 → x = 0 ose x = 3.', hint: 'Mos pjesëtoni me x.',
        whyWrong: ['Pjesëtimi me x humbi x = 0.', 'Mungon x = 3.', null, '(−3)² = 9, por 3 · (−3) = −9.'],
      },
      en: {
        question: 'Solve x² = 3x.', options: ['x = 3', 'x = 0', 'x = 0 or x = 3', 'x = ±3'],
        explanation: 'x² − 3x = 0 → x(x − 3) = 0 → x = 0 or x = 3.', hint: 'Do not divide by x.',
        whyWrong: ['Dividing by x lost x = 0.', 'x = 3 is missing.', null, '(−3)² = 9, but 3 · (−3) = −9.'],
      },
      de: {
        question: 'Lösen Sie x² = 3x.', options: ['x = 3', 'x = 0', 'x = 0 oder x = 3', 'x = ±3'],
        explanation: 'x² − 3x = 0 → x(x − 3) = 0 → x = 0 oder x = 3.', hint: 'Nicht durch x teilen.',
        whyWrong: ['Durch das Teilen ging x = 0 verloren.', 'x = 3 fehlt.', null, '(−3)² = 9, aber 3 · (−3) = −9.'],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 4 },
      verify: ['ceil(7 / 2 + 0.01)', 4],
      al: { question: 'Cili është numri më i vogël i plotë që plotëson 2x − 7 > 0?', explanation: 'x > 3,5; numri më i vogël i plotë është 4.', hint: 'Zgjidhni inekuacionin, pastaj shikoni numrat e plotë.', commonMistakes: [{ value: 3, why: '3 nuk është më i madh se 3,5.' }, { value: 3.5, why: '3,5 nuk është numër i plotë dhe nuk e plotëson >.' }] },
      en: { question: 'What is the smallest integer that satisfies 2x − 7 > 0?', explanation: 'x > 3.5; the smallest integer is 4.', hint: 'Solve the inequality, then look at the integers.', commonMistakes: [{ value: 3, why: '3 is not greater than 3.5.' }, { value: 3.5, why: '3.5 is not an integer and does not satisfy >.' }] },
      de: { question: 'Welche ist die kleinste ganze Zahl, die 2x − 7 > 0 erfüllt?', explanation: 'x > 3,5; die kleinste ganze Zahl ist 4.', hint: 'Ungleichung lösen, dann die ganzen Zahlen betrachten.', commonMistakes: [{ value: 3, why: '3 ist nicht größer als 3,5.' }, { value: 3.5, why: '3,5 ist nicht ganz und erfüllt > nicht.' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 3 },
      verify: ['3', 3],
      al: { question: 'Sa numra të plotë plotësojnë |x − 3| < 2?', explanation: '1 < x < 5: numrat 2, 3, 4.', hint: 'Shkruajeni si inekuacion të dyfishtë.', commonMistakes: [{ value: 5, why: '1 dhe 5 nuk bëjnë pjesë (<, jo ≤).' }, { value: 4, why: 'Numërohen 2, 3, 4: tre numra.' }] },
      en: { question: 'How many integers satisfy |x − 3| < 2?', explanation: '1 < x < 5: the integers 2, 3, 4.', hint: 'Write it as a double inequality.', commonMistakes: [{ value: 5, why: '1 and 5 are not included (<, not ≤).' }, { value: 4, why: 'Count 2, 3, 4: three integers.' }] },
      de: { question: 'Wie viele ganze Zahlen erfüllen |x − 3| < 2?', explanation: '1 < x < 5: die Zahlen 2, 3, 4.', hint: 'Als Doppelungleichung schreiben.', commonMistakes: [{ value: 5, why: '1 und 5 gehören nicht dazu (<, nicht ≤).' }, { value: 4, why: 'Gezählt werden 2, 3, 4: drei Zahlen.' }] },
    },
  ],
};
