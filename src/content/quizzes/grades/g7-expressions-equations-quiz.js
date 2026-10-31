// Grade 7 · Theme 9 quiz: Expressions, equations, inequalities (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g7-expressions-equations-quiz',
  grade: 7,
  theme: 'g7-expressions-equations',
  order: 9,
  difficulty: 'beginner',
  icon: 'x',
  color: '#6D597A',
  i18n: {
    al: { title: 'Shprehjet, ekuacionet, inekuacionet', category: 'Klasa 7 · Tema 9', duration: '10 min' },
    en: { title: 'Expressions, equations, inequalities', category: 'Grade 7 · Theme 9', duration: '10 min' },
    de: { title: 'Terme, Gleichungen, Ungleichungen', category: 'Klasse 7 · Thema 9', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 2,
      verify: 'text',
      al: {
        question: 'Reduktoni 5x + 3y − 2x + y.', options: ['7xy', '3x + 3y', '3x + 4y', '7x + 4y'],
        explanation: '5x − 2x = 3x dhe 3y + y = 4y: 3x + 4y.', hint: 'Mblidhni vetëm kufizat e ngjashme.',
        whyWrong: ['x dhe y nuk janë kufiza të ngjashme.', 'y vlen 1y: 3y + y = 4y.', null, 'Te x duhej zbritur: 5x − 2x = 3x.'],
      },
      en: {
        question: 'Simplify 5x + 3y − 2x + y.', options: ['7xy', '3x + 3y', '3x + 4y', '7x + 4y'],
        explanation: '5x − 2x = 3x and 3y + y = 4y: 3x + 4y.', hint: 'Collect only like terms.',
        whyWrong: ['x and y are not like terms.', 'y means 1y: 3y + y = 4y.', null, 'The x terms subtract: 5x − 2x = 3x.'],
      },
      de: {
        question: 'Fassen Sie 5x + 3y − 2x + y zusammen.', options: ['7xy', '3x + 3y', '3x + 4y', '7x + 4y'],
        explanation: '5x − 2x = 3x und 3y + y = 4y: 3x + 4y.', hint: 'Nur gleichartige Glieder zusammenfassen.',
        whyWrong: ['x und y sind nicht gleichartig.', 'y heißt 1y: 3y + y = 4y.', null, 'Bei x wird subtrahiert: 5x − 2x = 3x.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 7 },
      verify: ['28 / 4', 7],
      al: { question: 'Zgjidhni 4x = 28. Sa është x?', explanation: 'x = 28 : 4 = 7.', hint: 'Pjesëtoni të dy anët me 4.', commonMistakes: [{ value: 24, why: '4x do të thotë 4 · x; pjesëtoni, mos zbritni.' }] },
      en: { question: 'Solve 4x = 28. What is x?', explanation: 'x = 28 ÷ 4 = 7.', hint: 'Divide both sides by 4.', commonMistakes: [{ value: 24, why: '4x means 4 · x; divide, do not subtract.' }] },
      de: { question: 'Lösen Sie 4x = 28. Wie groß ist x?', explanation: 'x = 28 : 4 = 7.', hint: 'Beide Seiten durch 4 teilen.', commonMistakes: [{ value: 24, why: '4x heißt 4 · x; teilen, nicht subtrahieren.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: ['3 * 12 - 7 == 2 * 12 + 5', true],
      al: { question: 'x = 12 është zgjidhje e ekuacionit 3x − 7 = 2x + 5.', explanation: 'E vërtetë: 36 − 7 = 29 dhe 24 + 5 = 29.', hint: 'Zëvendësoni x = 12 në të dy anët.', whyWrong: 'Të dy anët japin 29, pra x = 12 është zgjidhje.' },
      en: { question: 'x = 12 is a solution of 3x − 7 = 2x + 5.', explanation: 'True: 36 − 7 = 29 and 24 + 5 = 29.', hint: 'Substitute x = 12 on both sides.', whyWrong: 'Both sides give 29, so x = 12 is a solution.' },
      de: { question: 'x = 12 ist eine Lösung von 3x − 7 = 2x + 5.', explanation: 'Richtig: 36 − 7 = 29 und 24 + 5 = 29.', hint: 'Setzen Sie x = 12 auf beiden Seiten ein.', whyWrong: 'Beide Seiten ergeben 29, also ist x = 12 eine Lösung.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 0,
      verify: 'text',
      al: {
        question: 'Cila është zgjidhja e 2x + 3 < 11?', options: ['x < 4', 'x < 7', 'x > 4', 'x < 8'],
        explanation: '2x < 8, pra x < 4.', hint: 'Zbritni 3, pastaj pjesëtoni me 2.',
        whyWrong: [null, 'Pjesëtuat 14 me 2: duhej zbritur 3, jo shtuar.', 'Pjesëtimi me 2 (pozitiv) nuk e kthen shenjën.', 'Harruat të pjesëtoni me 2.'],
      },
      en: {
        question: 'What is the solution of 2x + 3 < 11?', options: ['x < 4', 'x < 7', 'x > 4', 'x < 8'],
        explanation: '2x < 8, so x < 4.', hint: 'Subtract 3, then divide by 2.',
        whyWrong: [null, 'You divided 14 by 2: subtract 3, do not add it.', 'Dividing by 2 (positive) does not flip the sign.', 'You forgot to divide by 2.'],
      },
      de: {
        question: 'Wie lautet die Lösung von 2x + 3 < 11?', options: ['x < 4', 'x < 7', 'x > 4', 'x < 8'],
        explanation: '2x < 8, also x < 4.', hint: '3 subtrahieren, dann durch 2 teilen.',
        whyWrong: [null, 'Sie haben 14 durch 2 geteilt: 3 subtrahieren, nicht addieren.', 'Division durch 2 (positiv) dreht das Zeichen nicht um.', 'Die Division durch 2 fehlt.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 7 },
      verify: ['(26 - 5) / 3', 7],
      al: { question: 'Trefishi i një numri i shtuar me 5 është 26. Cili është numri?', explanation: '3x + 5 = 26 → 3x = 21 → x = 7.', hint: 'Shkruani 3x + 5 = 26.', commonMistakes: [{ value: 10.33, why: 'Shtuat 5 në vend që ta zbritni.' }] },
      en: { question: 'Three times a number plus 5 is 26. What is the number?', explanation: '3x + 5 = 26 → 3x = 21 → x = 7.', hint: 'Write 3x + 5 = 26.', commonMistakes: [{ value: 10.33, why: 'You added 5 instead of subtracting it.' }] },
      de: { question: 'Das Dreifache einer Zahl plus 5 ergibt 26. Wie heißt die Zahl?', explanation: '3x + 5 = 26 → 3x = 21 → x = 7.', hint: 'Schreiben Sie 3x + 5 = 26.', commonMistakes: [{ value: 10.33, why: 'Sie haben 5 addiert statt subtrahiert.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 1,
      verify: ['2 * 3^2', 18],
      al: {
        question: 'Sa është vlera e 2a² për a = 3?', options: ['36', '18', '12', '9'],
        explanation: '2 · 3² = 2 · 9 = 18.', hint: 'Fillimisht fuqia, pastaj shumëzimi.',
        whyWrong: ['Ngritët në katror edhe 2: (2 · 3)².', null, 'a² nuk është a · 2.', 'Harruat koeficientin 2.'],
      },
      en: {
        question: 'What is the value of 2a² for a = 3?', options: ['36', '18', '12', '9'],
        explanation: '2 · 3² = 2 · 9 = 18.', hint: 'Power first, then multiply.',
        whyWrong: ['You squared the 2 as well: (2 · 3)².', null, 'a² is not a · 2.', 'You forgot the coefficient 2.'],
      },
      de: {
        question: 'Welchen Wert hat 2a² für a = 3?', options: ['36', '18', '12', '9'],
        explanation: '2 · 3² = 2 · 9 = 18.', hint: 'Zuerst die Potenz, dann multiplizieren.',
        whyWrong: ['Sie haben auch die 2 quadriert: (2 · 3)².', null, 'a² ist nicht a · 2.', 'Der Koeffizient 2 fehlt.'],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: false,
      verify: ['(-2) * (-4) < 6', false],
      al: { question: 'Nga −2x < 6 del x < −3.', explanation: 'E gabuar: pjesëtimi me −2 e kthen shenjën, x > −3. P.sh. x = −4 jep 8 < 6, që nuk vlen.', hint: 'Çfarë ndodh me shenjën kur pjesëtoni me numër negativ?', whyWrong: 'Shenja kthehet: x > −3.' },
      en: { question: 'From −2x < 6 it follows that x < −3.', explanation: 'False: dividing by −2 flips the sign, x > −3. E.g. x = −4 gives 8 < 6, which is not true.', hint: 'What happens to the sign when you divide by a negative number?', whyWrong: 'The sign flips: x > −3.' },
      de: { question: 'Aus −2x < 6 folgt x < −3.', explanation: 'Falsch: Die Division durch −2 dreht das Zeichen um, x > −3. Z. B. ergibt x = −4: 8 < 6, das stimmt nicht.', hint: 'Was passiert mit dem Zeichen bei Division durch eine negative Zahl?', whyWrong: 'Das Zeichen dreht sich um: x > −3.' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 3,
      verify: ['(30 - 6) / 4', 6],
      al: {
        question: 'Perimetri i drejtkëndëshit është 30 cm; gjatësia është 3 cm më e madhe se gjerësia. Sa është gjerësia?', options: ['7,5 cm', '13,5 cm', '9 cm', '6 cm'],
        explanation: '2(x + x + 3) = 30 → 4x + 6 = 30 → x = 6 cm.', hint: 'Gjerësia x, gjatësia x + 3.',
        whyWrong: ['30 : 4 do të vlente për katrorin.', 'Ky do të ishte rezultati sikur drejtkëndëshi të kishte vetëm dy brinjë.', 'Kjo është gjatësia, jo gjerësia.', null],
      },
      en: {
        question: 'A rectangle has a perimeter of 30 cm; its length is 3 cm more than its width. What is the width?', options: ['7.5 cm', '13.5 cm', '9 cm', '6 cm'],
        explanation: '2(x + x + 3) = 30 → 4x + 6 = 30 → x = 6 cm.', hint: 'Width x, length x + 3.',
        whyWrong: ['30 ÷ 4 would be right for a square.', 'That would be the answer if the rectangle had only two sides.', 'That is the length, not the width.', null],
      },
      de: {
        question: 'Ein Rechteck hat den Umfang 30 cm; die Länge ist 3 cm größer als die Breite. Wie breit ist es?', options: ['7,5 cm', '13,5 cm', '9 cm', '6 cm'],
        explanation: '2(x + x + 3) = 30 → 4x + 6 = 30 → x = 6 cm.', hint: 'Breite x, Länge x + 3.',
        whyWrong: ['30 : 4 gilt für ein Quadrat.', 'Das ergäbe sich, wenn das Rechteck nur zwei Seiten hätte.', 'Das ist die Länge, nicht die Breite.', null],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 5 },
      verify: ['(16 + 4) / (7 - 3)', 5],
      al: { question: 'Zgjidhni 7x − 4 = 3x + 16. Sa është x?', explanation: '4x = 20, x = 5.', hint: 'Kufizat me x majtas, numrat djathtas.', commonMistakes: [{ value: 3, why: '−4 kalon djathtas si +4: 16 + 4 = 20.' }, { value: 2, why: '−4 kalon djathtas si +4; 3x zbritet nga 7x.' }] },
      en: { question: 'Solve 7x − 4 = 3x + 16. What is x?', explanation: '4x = 20, x = 5.', hint: 'x terms on the left, numbers on the right.', commonMistakes: [{ value: 3, why: '−4 moves to the right as +4: 16 + 4 = 20.' }, { value: 2, why: '−4 moves to the right as +4; 3x is subtracted from 7x.' }] },
      de: { question: 'Lösen Sie 7x − 4 = 3x + 16. Wie groß ist x?', explanation: '4x = 20, x = 5.', hint: 'x-Glieder nach links, Zahlen nach rechts.', commonMistakes: [{ value: 3, why: '−4 wechselt als +4 nach rechts: 16 + 4 = 20.' }, { value: 2, why: '−4 wechselt als +4 nach rechts; 3x wird von 7x subtrahiert.' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 19 },
      verify: ['(50 - 12) / 2', 19],
      al: { question: 'Besa ka 12 € më shumë se Ana; së bashku kanë 50 €. Sa euro ka Ana?', explanation: 'x + (x + 12) = 50 → 2x = 38 → x = 19 €.', hint: 'Ana x, Besa x + 12.', unit: '€', commonMistakes: [{ value: 31, why: 'Kjo është shuma e Besës.' }, { value: 25, why: 'Ndatë në gjysmë, por Besa ka 12 € më shumë.' }] },
      en: { question: 'Besa has €12 more than Ana; together they have €50. How many euros does Ana have?', explanation: 'x + (x + 12) = 50 → 2x = 38 → x = €19.', hint: 'Ana x, Besa x + 12.', unit: '€', commonMistakes: [{ value: 31, why: 'That is Besa\'s amount.' }, { value: 25, why: 'You split it in half, but Besa has €12 more.' }] },
      de: { question: 'Besa hat 12 € mehr als Ana; zusammen haben sie 50 €. Wie viel Euro hat Ana?', explanation: 'x + (x + 12) = 50 → 2x = 38 → x = 19 €.', hint: 'Ana x, Besa x + 12.', unit: '€', commonMistakes: [{ value: 31, why: 'Das ist Besas Betrag.' }, { value: 25, why: 'Sie haben halbiert, aber Besa hat 12 € mehr.' }] },
    },
  ],
};
