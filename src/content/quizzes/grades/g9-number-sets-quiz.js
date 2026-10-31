// Grade 9 · Theme 1 quiz: Number sets (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g9-number-sets-quiz',
  grade: 9,
  theme: 'g9-number-sets',
  order: 1,
  difficulty: 'intermediate',
  icon: 'ℝ',
  color: '#264653',
  i18n: {
    al: { title: 'Bashkësitë numerike', category: 'Klasa 9 · Tema 1', duration: '10 min' },
    en: { title: 'Number sets', category: 'Grade 9 · Theme 1', duration: '10 min' },
    de: { title: 'Zahlenmengen', category: 'Klasse 9 · Thema 1', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 3,
      verify: 'text',
      al: {
        question: 'Cili numër është iracional?', options: ['0,25', '√9', '3/8', '√7'],
        explanation: '7 nuk është katror i plotë, prandaj √7 është iracional.', hint: 'Cili nuk mund të shkruhet si thyesë?',
        whyWrong: ['0,25 = 1/4.', '√9 = 3.', '3/8 është vetë thyesë.', null],
      },
      en: {
        question: 'Which number is irrational?', options: ['0.25', '√9', '3/8', '√7'],
        explanation: '7 is not a perfect square, so √7 is irrational.', hint: 'Which cannot be written as a fraction?',
        whyWrong: ['0.25 = 1/4.', '√9 = 3.', '3/8 is a fraction already.', null],
      },
      de: {
        question: 'Welche Zahl ist irrational?', options: ['0,25', '√9', '3/8', '√7'],
        explanation: '7 ist keine Quadratzahl, also ist √7 irrational.', hint: 'Welche lässt sich nicht als Bruch schreiben?',
        whyWrong: ['0,25 = 1/4.', '√9 = 3.', '3/8 ist bereits ein Bruch.', null],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 12 },
      verify: ['abs(-7) + abs(3 - 8)', 12],
      al: { question: 'Llogaritni |−7| + |3 − 8|.', explanation: '7 + 5 = 12.', hint: 'Vlera absolute nuk është kurrë negative.', commonMistakes: [{ value: 2, why: '|3 − 8| = 5, jo −5.' }, { value: -12, why: 'Vlerat absolute janë pozitive.' }] },
      en: { question: 'Work out |−7| + |3 − 8|.', explanation: '7 + 5 = 12.', hint: 'An absolute value is never negative.', commonMistakes: [{ value: 2, why: '|3 − 8| = 5, not −5.' }, { value: -12, why: 'Absolute values are positive.' }] },
      de: { question: 'Berechnen Sie |−7| + |3 − 8|.', explanation: '7 + 5 = 12.', hint: 'Ein Betrag ist nie negativ.', commonMistakes: [{ value: 2, why: '|3 − 8| = 5, nicht −5.' }, { value: -12, why: 'Beträge sind positiv.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: ['sqrt(12) == 2 * sqrt(3)', true],
      al: { question: '√12 = 2√3', explanation: 'E vërtetë: √12 = √(4 · 3) = 2√3.', hint: 'Gjeni katrorin e plotë në 12.', whyWrong: '12 = 4 · 3 dhe √4 = 2.' },
      en: { question: '√12 = 2√3', explanation: 'True: √12 = √(4 · 3) = 2√3.', hint: 'Find the perfect square in 12.', whyWrong: '12 = 4 · 3 and √4 = 2.' },
      de: { question: '√12 = 2√3', explanation: 'Richtig: √12 = √(4 · 3) = 2√3.', hint: 'Suchen Sie die Quadratzahl in 12.', whyWrong: '12 = 4 · 3 und √4 = 2.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 0,
      verify: 'text',
      al: {
        question: 'Sa është [−2, 5) ∩ (1, 8]?', options: ['(1, 5)', '[−2, 8]', '[1, 5]', '(1, 5]'],
        explanation: 'Pjesa e përbashkët: nga 1 (pa të) deri 5 (pa të).', hint: 'Vizatoni të dy intervalet në bosht.',
        whyWrong: [null, 'Ky është bashkimi.', '1 nuk bën pjesë në (1, 8].', '5 nuk bën pjesë në [−2, 5).'],
      },
      en: {
        question: 'What is [−2, 5) ∩ (1, 8]?', options: ['(1, 5)', '[−2, 8]', '[1, 5]', '(1, 5]'],
        explanation: 'The overlap: from 1 (excluded) to 5 (excluded).', hint: 'Draw both intervals on a number line.',
        whyWrong: [null, 'That is the union.', '1 is not in (1, 8].', '5 is not in [−2, 5).'],
      },
      de: {
        question: 'Was ist [−2, 5) ∩ (1, 8]?', options: ['(1, 5)', '[−2, 8]', '[1, 5]', '(1, 5]'],
        explanation: 'Die Überlappung: von 1 (ohne) bis 5 (ohne).', hint: 'Zeichnen Sie beide Intervalle auf die Zahlengerade.',
        whyWrong: [null, 'Das ist die Vereinigung.', '1 liegt nicht in (1, 8].', '5 liegt nicht in [−2, 5).'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 0.1667, tolerance: 0.001 },
      verify: ['15 / 90', 0.1667, 0.0001],
      al: { question: 'Shkruani 0,1(6) = 0,1666… si thyesë (ose numër dhjetor me 4 shifra).', explanation: '100x − 10x = 15 → x = 15/90 = 1/6 ≈ 0,1667.', hint: 'Shumëzoni me 100 dhe me 10, pastaj zbritni.', commonMistakes: [{ value: 0.1616, why: '16/99 do të ishte 0,(16), jo 0,1(6).' }] },
      en: { question: 'Write 0.1(6) = 0.1666… as a fraction (or a decimal to 4 places).', explanation: '100x − 10x = 15 → x = 15/90 = 1/6 ≈ 0.1667.', hint: 'Multiply by 100 and by 10, then subtract.', commonMistakes: [{ value: 0.1616, why: '16/99 would be 0.(16), not 0.1(6).' }] },
      de: { question: 'Schreiben Sie 0,1(6) = 0,1666… als Bruch (oder Dezimalzahl mit 4 Stellen).', explanation: '100x − 10x = 15 → x = 15/90 = 1/6 ≈ 0,1667.', hint: 'Mit 100 und mit 10 multiplizieren, dann subtrahieren.', commonMistakes: [{ value: 0.1616, why: '16/99 wäre 0,(16), nicht 0,1(6).' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 1,
      verify: 'text',
      al: {
        question: 'Zgjidhni |x − 2| = 3.', options: ['x = 5', 'x = 5 ose x = −1', 'x = 1 ose x = 5', 'x = ±3'],
        explanation: 'x − 2 = 3 ose x − 2 = −3: x = 5 ose x = −1.', hint: 'Pikat në largësi 3 nga 2.',
        whyWrong: ['Mungon zgjidhja x = −1.', null, '|1 − 2| = 1 ≠ 3.', 'Kjo do të vlente për |x| = 3.'],
      },
      en: {
        question: 'Solve |x − 2| = 3.', options: ['x = 5', 'x = 5 or x = −1', 'x = 1 or x = 5', 'x = ±3'],
        explanation: 'x − 2 = 3 or x − 2 = −3: x = 5 or x = −1.', hint: 'The points at distance 3 from 2.',
        whyWrong: ['The solution x = −1 is missing.', null, '|1 − 2| = 1 ≠ 3.', 'That would be right for |x| = 3.'],
      },
      de: {
        question: 'Lösen Sie |x − 2| = 3.', options: ['x = 5', 'x = 5 oder x = −1', 'x = 1 oder x = 5', 'x = ±3'],
        explanation: 'x − 2 = 3 oder x − 2 = −3: x = 5 oder x = −1.', hint: 'Die Punkte im Abstand 3 von 2.',
        whyWrong: ['Die Lösung x = −1 fehlt.', null, '|1 − 2| = 1 ≠ 3.', 'Das gilt für |x| = 3.'],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: false,
      verify: ['sqrt(2) + sqrt(3) == sqrt(5)', false],
      al: { question: '√2 + √3 = √5', explanation: 'E gabuar: √2 + √3 ≈ 3,15, kurse √5 ≈ 2,24.', hint: 'Llogaritni të dyja anët përafërsisht.', whyWrong: 'Rrënjët nuk mblidhen nën një rrënjë.' },
      en: { question: '√2 + √3 = √5', explanation: 'False: √2 + √3 ≈ 3.15, but √5 ≈ 2.24.', hint: 'Estimate both sides.', whyWrong: 'Roots do not add under one root.' },
      de: { question: '√2 + √3 = √5', explanation: 'Falsch: √2 + √3 ≈ 3,15, aber √5 ≈ 2,24.', hint: 'Schätzen Sie beide Seiten ab.', whyWrong: 'Wurzeln lassen sich nicht unter einer Wurzel addieren.' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 2,
      verify: 'text',
      al: {
        question: 'Cili numër është më i madhi?', options: ['√10', 'π', '3,2', '3,15'],
        explanation: '√10 ≈ 3,162; π ≈ 3,142; 3,15; 3,2 është më i madhi.', hint: 'Krahasoni katrorët ose përafrimet.',
        whyWrong: ['3,2² = 10,24 > 10, pra √10 < 3,2.', 'π ≈ 3,14 < 3,2.', null, '3,15 < 3,2.'],
      },
      en: {
        question: 'Which number is the largest?', options: ['√10', 'π', '3.2', '3.15'],
        explanation: '√10 ≈ 3.162; π ≈ 3.142; 3.15; 3.2 is the largest.', hint: 'Compare squares or approximations.',
        whyWrong: ['3.2² = 10.24 > 10, so √10 < 3.2.', 'π ≈ 3.14 < 3.2.', null, '3.15 < 3.2.'],
      },
      de: {
        question: 'Welche Zahl ist die größte?', options: ['√10', 'π', '3,2', '3,15'],
        explanation: '√10 ≈ 3,162; π ≈ 3,142; 3,15; 3,2 ist am größten.', hint: 'Quadrate oder Näherungswerte vergleichen.',
        whyWrong: ['3,2² = 10,24 > 10, also √10 < 3,2.', 'π ≈ 3,14 < 3,2.', null, '3,15 < 3,2.'],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 5 },
      verify: ['3 - (-2)', 5],
      al: { question: 'Sa numra të plotë ndodhen në intervalin (−2, 3]?', explanation: '−1, 0, 1, 2, 3: gjithsej 5.', hint: '−2 nuk bën pjesë, 3 po.', commonMistakes: [{ value: 6, why: '−2 nuk bën pjesë (kllapë e hapur).' }, { value: 4, why: '3 bën pjesë (kllapë e mbyllur).' }] },
      en: { question: 'How many integers lie in the interval (−2, 3]?', explanation: '−1, 0, 1, 2, 3: 5 in total.', hint: '−2 is excluded, 3 is included.', commonMistakes: [{ value: 6, why: '−2 is excluded (open bracket).' }, { value: 4, why: '3 is included (closed bracket).' }] },
      de: { question: 'Wie viele ganze Zahlen liegen im Intervall (−2, 3]?', explanation: '−1, 0, 1, 2, 3: insgesamt 5.', hint: '−2 gehört nicht dazu, 3 schon.', commonMistakes: [{ value: 6, why: '−2 gehört nicht dazu (runde Klammer).' }, { value: 4, why: '3 gehört dazu (eckige Klammer).' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 8.66, tolerance: 0.01 },
      verify: ['sqrt(12) + sqrt(27)', 8.66, 0.005],
      al: { question: 'Llogaritni √12 + √27 (dy dhjetore).', explanation: '2√3 + 3√3 = 5√3 ≈ 8,66.', hint: 'Thjeshtoni secilën rrënjë.', commonMistakes: [{ value: 6.24, why: '√12 + √27 ≠ √39.' }] },
      en: { question: 'Work out √12 + √27 (two decimal places).', explanation: '2√3 + 3√3 = 5√3 ≈ 8.66.', hint: 'Simplify each root first.', commonMistakes: [{ value: 6.24, why: '√12 + √27 ≠ √39.' }] },
      de: { question: 'Berechnen Sie √12 + √27 (zwei Dezimalstellen).', explanation: '2√3 + 3√3 = 5√3 ≈ 8,66.', hint: 'Jede Wurzel zuerst vereinfachen.', commonMistakes: [{ value: 6.24, why: '√12 + √27 ≠ √39.' }] },
    },
  ],
};
