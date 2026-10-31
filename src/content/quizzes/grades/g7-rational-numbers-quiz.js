// Grade 7 · Theme 4 quiz: Rational numbers (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g7-rational-numbers-quiz',
  grade: 7,
  theme: 'g7-rational-numbers',
  order: 4,
  difficulty: 'beginner',
  icon: '🔀',
  color: '#DDA15E',
  i18n: {
    al: { title: 'Numrat racionalë', category: 'Klasa 7 · Tema 4', duration: '10 min' },
    en: { title: 'Rational numbers', category: 'Grade 7 · Theme 4', duration: '10 min' },
    de: { title: 'Rationale Zahlen', category: 'Klasse 7 · Thema 4', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'input', difficulty: 'easy', answer: { value: 3.5 },
      verify: ['abs(-3.5)', 3.5],
      al: { question: 'Sa është |−3,5|?', explanation: 'Vlera absolute është largësia nga zero: 3,5.', hint: 'Sa larg zeros është −3,5?', commonMistakes: [{ value: -3.5, why: 'Vlera absolute nuk është negative.' }] },
      en: { question: 'What is |−3.5|?', explanation: 'Absolute value is the distance from zero: 3.5.', hint: 'How far from zero is −3.5?', commonMistakes: [{ value: -3.5, why: 'Absolute value is never negative.' }] },
      de: { question: 'Wie groß ist |−3,5|?', explanation: 'Der Betrag ist der Abstand von null: 3,5.', hint: 'Wie weit ist −3,5 von null entfernt?', commonMistakes: [{ value: -3.5, why: 'Ein Betrag ist nie negativ.' }] },
    },
    {
      id: 2, type: 'choice', difficulty: 'easy', correct: 2,
      verify: 'text',
      al: {
        question: 'Renditni nga më i madhi: −0,5; −3/4; 0,2.', options: ['−3/4; −0,5; 0,2', '0,2; −3/4; −0,5', '0,2; −0,5; −3/4', '−0,5; 0,2; −3/4'],
        explanation: '−3/4 = −0,75. Renditja: 0,2 > −0,5 > −0,75.', hint: 'Shndërroni −3/4 në numër dhjetor.',
        whyWrong: ['Kjo është nga më i vogli.', '−0,5 > −0,75, sepse është më afër zeros.', null, '0,2 është i vetmi pozitiv, pra më i madhi.'],
      },
      en: {
        question: 'Order from largest: −0.5; −3/4; 0.2.', options: ['−3/4; −0.5; 0.2', '0.2; −3/4; −0.5', '0.2; −0.5; −3/4', '−0.5; 0.2; −3/4'],
        explanation: '−3/4 = −0.75. Order: 0.2 > −0.5 > −0.75.', hint: 'Change −3/4 into a decimal.',
        whyWrong: ['That goes from smallest.', '−0.5 > −0.75, because it is closer to zero.', null, '0.2 is the only positive number, so it is the largest.'],
      },
      de: {
        question: 'Ordnen Sie absteigend: −0,5; −3/4; 0,2.', options: ['−3/4; −0,5; 0,2', '0,2; −3/4; −0,5', '0,2; −0,5; −3/4', '−0,5; 0,2; −3/4'],
        explanation: '−3/4 = −0,75. Reihenfolge: 0,2 > −0,5 > −0,75.', hint: 'Wandeln Sie −3/4 in eine Dezimalzahl um.',
        whyWrong: ['Das ist aufsteigend.', '−0,5 > −0,75, weil es näher an der Null liegt.', null, '0,2 ist die einzige positive Zahl, also die größte.'],
      },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: false,
      verify: ['-0.75 > -0.5', false],
      al: { question: '−0,75 > −0,5', explanation: 'E gabuar: −0,75 është më larg zeros, pra më i vogël.', hint: 'Cili është më djathtas në bosht?', whyWrong: 'Te negativët, vlera absolute më e madhe do të thotë numër më i vogël.' },
      en: { question: '−0.75 > −0.5', explanation: 'False: −0.75 is further from zero, so it is smaller.', hint: 'Which is further right on the number line?', whyWrong: 'For negatives, a larger absolute value means a smaller number.' },
      de: { question: '−0,75 > −0,5', explanation: 'Falsch: −0,75 liegt weiter von null entfernt und ist daher kleiner.', hint: 'Welche Zahl liegt weiter rechts?', whyWrong: 'Bei negativen Zahlen heißt größerer Betrag kleinere Zahl.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'medium', correct: 1,
      verify: ['-2/3 * 9/4', '-3/2'],
      al: {
        question: 'Sa është −2/3 · 9/4?', options: ['3/2', '−3/2', '−11/7', '−8/27'],
        explanation: 'Shenja −; 18/12 = 3/2. Rezultati −3/2.', hint: 'Përcaktoni shenjën, pastaj shumëzoni.',
        whyWrong: ['Shenja të ndryshme japin minus.', null, 'Mblodhët numëruesit dhe emëruesit.', 'Pjesëtuat në vend që të shumëzonit.'],
      },
      en: {
        question: 'What is −2/3 · 9/4?', options: ['3/2', '−3/2', '−11/7', '−8/27'],
        explanation: 'Sign −; 18/12 = 3/2. Result −3/2.', hint: 'Decide the sign, then multiply.',
        whyWrong: ['Different signs give minus.', null, 'You added tops and bottoms.', 'You divided instead of multiplying.'],
      },
      de: {
        question: 'Wie viel ist −2/3 · 9/4?', options: ['3/2', '−3/2', '−11/7', '−8/27'],
        explanation: 'Vorzeichen −; 18/12 = 3/2. Ergebnis −3/2.', hint: 'Vorzeichen bestimmen, dann multiplizieren.',
        whyWrong: ['Verschiedene Vorzeichen ergeben minus.', null, 'Sie haben Zähler und Nenner addiert.', 'Sie haben dividiert statt multipliziert.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 0.25 },
      verify: ['-1/2 + 3/4', 0.25],
      al: { question: 'Llogaritni −1/2 + 3/4 (si thyesë ose numër dhjetor).', explanation: '−2/4 + 3/4 = 1/4 = 0,25.', hint: 'Shkruani −1/2 si −2/4.', commonMistakes: [{ value: -1.25, why: 'Mblodhët vlerat dhe morët shenjën minus.' }, { value: 0.3333333333, why: 'Mblodhët numëruesit dhe emëruesit (2/6).' }] },
      en: { question: 'Work out −1/2 + 3/4 (as a fraction or decimal).', explanation: '−2/4 + 3/4 = 1/4 = 0.25.', hint: 'Write −1/2 as −2/4.', commonMistakes: [{ value: -1.25, why: 'You added the sizes and kept the minus.' }, { value: 0.3333333333, why: 'You added tops and bottoms (2/6).' }] },
      de: { question: 'Berechnen Sie −1/2 + 3/4 (als Bruch oder Dezimalzahl).', explanation: '−2/4 + 3/4 = 1/4 = 0,25.', hint: 'Schreiben Sie −1/2 als −2/4.', commonMistakes: [{ value: -1.25, why: 'Sie haben die Beträge addiert und das Minus behalten.' }, { value: 0.3333333333, why: 'Sie haben Zähler und Nenner addiert (2/6).' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 0,
      verify: ['2 - 3 * (-0.5)', 3.5],
      al: {
        question: 'Sa është 2 − 3 · (−0,5)?', options: ['3,5', '0,5', '−3,5', '−1,5'],
        explanation: '3 · (−0,5) = −1,5; 2 − (−1,5) = 3,5.', hint: 'Shumëzimi para zbritjes.',
        whyWrong: [null, 'Zbritët para shumëzimit: (2 − 3) · (−0,5).', 'Gabuat shenjën: zbritja e −1,5 është mbledhje.', 'Kjo është vetëm 3 · (−0,5); duhet edhe ta zbritni nga 2.'],
      },
      en: {
        question: 'What is 2 − 3 · (−0.5)?', options: ['3.5', '0.5', '−3.5', '−1.5'],
        explanation: '3 · (−0.5) = −1.5; 2 − (−1.5) = 3.5.', hint: 'Multiplication before subtraction.',
        whyWrong: [null, 'You subtracted first: (2 − 3) · (−0.5).', 'Sign slip: subtracting −1.5 is adding.', 'That is only 3 · (−0.5); you still have to subtract it from 2.'],
      },
      de: {
        question: 'Wie viel ist 2 − 3 · (−0,5)?', options: ['3,5', '0,5', '−3,5', '−1,5'],
        explanation: '3 · (−0,5) = −1,5; 2 − (−1,5) = 3,5.', hint: 'Punkt vor Strich.',
        whyWrong: [null, 'Sie haben zuerst subtrahiert: (2 − 3) · (−0,5).', 'Vorzeichenfehler: −1,5 subtrahieren heißt addieren.', 'Das ist nur 3 · (−0,5); es muss noch von 2 abgezogen werden.'],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: true,
      verify: ['(-0.6) / 0.2 == -3', true],
      al: { question: '(−0,6) : 0,2 = −3', explanation: 'E vërtetë: 0,6 : 0,2 = 3, shenja të ndryshme → −3.', hint: 'Pjesëtoni vlerat, pastaj vendosni shenjën.', whyWrong: '0,6 : 0,2 = 3 dhe shenjat janë të ndryshme, pra −3 është e saktë.' },
      en: { question: '(−0.6) ÷ 0.2 = −3', explanation: 'True: 0.6 ÷ 0.2 = 3, different signs → −3.', hint: 'Divide the sizes, then decide the sign.', whyWrong: '0.6 ÷ 0.2 = 3 and the signs differ, so −3 is correct.' },
      de: { question: '(−0,6) : 0,2 = −3', explanation: 'Richtig: 0,6 : 0,2 = 3, verschiedene Vorzeichen → −3.', hint: 'Beträge dividieren, dann Vorzeichen setzen.', whyWrong: '0,6 : 0,2 = 3 und die Vorzeichen sind verschieden, also stimmt −3.' },
    },
    {
      id: 8, type: 'input', difficulty: 'hard', answer: { value: 3 },
      verify: ['(2/3 - 1) * (-9)', 3],
      al: { question: 'Llogaritni (2/3 − 1) · (−9).', explanation: 'Kllapat: −1/3; −1/3 · (−9) = 3.', hint: 'Llogaritni kllapat së pari.', commonMistakes: [{ value: -3, why: 'Dy negativë të shumëzuar japin pozitiv.' }, { value: -15, why: 'Shumëzuat vetëm 2/3 · (−9) dhe zbritët 1·(−9) gabim.' }] },
      en: { question: 'Work out (2/3 − 1) · (−9).', explanation: 'Brackets: −1/3; −1/3 · (−9) = 3.', hint: 'Work out the brackets first.', commonMistakes: [{ value: -3, why: 'Two negatives multiplied give a positive.' }, { value: -15, why: 'You expanded the brackets with a sign slip.' }] },
      de: { question: 'Berechnen Sie (2/3 − 1) · (−9).', explanation: 'Klammer: −1/3; −1/3 · (−9) = 3.', hint: 'Zuerst die Klammer berechnen.', commonMistakes: [{ value: -3, why: 'Zwei negative Faktoren ergeben ein positives Produkt.' }, { value: -15, why: 'Sie haben die Klammer mit einem Vorzeichenfehler ausmultipliziert.' }] },
    },
    {
      id: 9, type: 'choice', difficulty: 'hard', correct: 3,
      verify: ['max(-0.3, -0.03, -3)', -0.03],
      al: {
        question: 'Cili është numri më i madh: −0,3; −0,03; −3?', options: ['−3', '−0,3', 'janë të barabartë', '−0,03'],
        explanation: '−0,03 ka vlerën absolute më të vogël, pra është më afër zeros.', hint: 'Cili është më afër zeros?',
        whyWrong: ['−3 është më larg zeros, pra më i vogli.', '−0,3 < −0,03.', 'Ata kanë vlera të ndryshme.', null],
      },
      en: {
        question: 'Which number is the largest: −0.3; −0.03; −3?', options: ['−3', '−0.3', 'they are equal', '−0.03'],
        explanation: '−0.03 has the smallest absolute value, so it is closest to zero.', hint: 'Which is closest to zero?',
        whyWrong: ['−3 is furthest from zero, so it is the smallest.', '−0.3 < −0.03.', 'They have different values.', null],
      },
      de: {
        question: 'Welche Zahl ist die größte: −0,3; −0,03; −3?', options: ['−3', '−0,3', 'alle gleich', '−0,03'],
        explanation: '−0,03 hat den kleinsten Betrag und liegt am nächsten an der Null.', hint: 'Welche liegt am nächsten an der Null?',
        whyWrong: ['−3 liegt am weitesten von null entfernt, ist also die kleinste.', '−0,3 < −0,03.', 'Sie haben verschiedene Werte.', null],
      },
    },
    {
      id: 10, type: 'choice', difficulty: 'hard', correct: 1,
      verify: ['(-3/4) / (3/8)', -2],
      al: {
        question: 'Sa është (−3/4) : (3/8)?', options: ['2', '−2', '−9/32', '−1/2'],
        explanation: '(−3/4) · (8/3) = −24/12 = −2.', hint: 'Shumëzoni me të anasjelltën e 3/8.',
        whyWrong: ['Shenja të ndryshme japin minus.', null, 'Shumëzuat në vend që të pjesëtonit.', 'Kthyet thyesën e parë në vend të së dytës.'],
      },
      en: {
        question: 'What is (−3/4) ÷ (3/8)?', options: ['2', '−2', '−9/32', '−1/2'],
        explanation: '(−3/4) · (8/3) = −24/12 = −2.', hint: 'Multiply by the reciprocal of 3/8.',
        whyWrong: ['Different signs give minus.', null, 'You multiplied instead of dividing.', 'You flipped the first fraction instead of the second.'],
      },
      de: {
        question: 'Wie viel ist (−3/4) : (3/8)?', options: ['2', '−2', '−9/32', '−1/2'],
        explanation: '(−3/4) · (8/3) = −24/12 = −2.', hint: 'Mit dem Kehrwert von 3/8 multiplizieren.',
        whyWrong: ['Verschiedene Vorzeichen ergeben minus.', null, 'Sie haben multipliziert statt dividiert.', 'Sie haben den ersten statt den zweiten Bruch umgekehrt.'],
      },
    },
  ],
};
