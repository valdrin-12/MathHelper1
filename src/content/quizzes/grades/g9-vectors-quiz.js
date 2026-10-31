// Grade 9 · Theme 7 quiz: Vectors (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g9-vectors-quiz',
  grade: 9,
  theme: 'g9-vectors',
  order: 7,
  difficulty: 'intermediate',
  icon: '→',
  color: '#E76F51',
  i18n: {
    al: { title: 'Vektorët', category: 'Klasa 9 · Tema 7', duration: '10 min' },
    en: { title: 'Vectors', category: 'Grade 9 · Theme 7', duration: '10 min' },
    de: { title: 'Vektoren', category: 'Klasse 9 · Thema 7', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 1,
      verify: 'text',
      al: {
        question: 'Në paralelogramin ABCD, me çfarë është i barabartë vektori AC?', options: ['AB − AD', 'AB + AD', 'AD − AB', '2AB'],
        explanation: 'Rregulla e paralelogramit: AC = AB + AD.', hint: 'Diagonalja nga A.',
        whyWrong: ['Ky është vektori DB.', null, 'Ky është vektori BD.', 'Kjo do të vlente vetëm nëse AD = AB.'],
      },
      en: {
        question: 'In parallelogram ABCD, what does the vector AC equal?', options: ['AB − AD', 'AB + AD', 'AD − AB', '2AB'],
        explanation: 'Parallelogram rule: AC = AB + AD.', hint: 'The diagonal from A.',
        whyWrong: ['That is the vector DB.', null, 'That is the vector BD.', 'Only true if AD = AB.'],
      },
      de: {
        question: 'Wem ist der Vektor AC im Parallelogramm ABCD gleich?', options: ['AB − AD', 'AB + AD', 'AD − AB', '2AB'],
        explanation: 'Parallelogrammregel: AC = AB + AD.', hint: 'Die Diagonale von A aus.',
        whyWrong: ['Das ist der Vektor DB.', null, 'Das ist der Vektor BD.', 'Nur wenn AD = AB wäre.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 13 },
      verify: ['sqrt(5^2 + 12^2)', 13],
      al: { question: 'Sa është gjatësia e vektorit (5, 12)?', explanation: '√(25 + 144) = √169 = 13.', hint: '|(a, b)| = √(a² + b²).', commonMistakes: [{ value: 17, why: 'Mblodhët përbërëset; gjatësia del nga Pitagora.' }] },
      en: { question: 'What is the length of the vector (5, 12)?', explanation: '√(25 + 144) = √169 = 13.', hint: '|(a, b)| = √(a² + b²).', commonMistakes: [{ value: 17, why: 'You added the components; the length comes from Pythagoras.' }] },
      de: { question: 'Wie lang ist der Vektor (5 | 12)?', explanation: '√(25 + 144) = √169 = 13.', hint: '|(a | b)| = √(a² + b²).', commonMistakes: [{ value: 17, why: 'Sie haben die Koordinaten addiert; die Länge kommt aus Pythagoras.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: 'text',
      al: { question: 'Nëse v = 3u, atëherë u dhe v janë bashkëvizorë dhe me të njëjtin kah.', explanation: 'E vërtetë: k = 3 > 0.', hint: 'Shenja e koeficientit.', whyWrong: 'v = k · u me k > 0.' },
      en: { question: 'If v = 3u, then u and v are collinear with the same sense.', explanation: 'True: k = 3 > 0.', hint: 'The sign of the factor.', whyWrong: 'v = k · u with k > 0.' },
      de: { question: 'Ist v = 3u, so sind u und v kollinear und gleich orientiert.', explanation: 'Richtig: k = 3 > 0.', hint: 'Das Vorzeichen des Faktors.', whyWrong: 'v = k · u mit k > 0.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 2,
      verify: 'text',
      al: {
        question: 'Cili është vektori i kundërt i (3, −2)?', options: ['(3, 2)', '(−3, −2)', '(−3, 2)', '(2, −3)'],
        explanation: '−(3, −2) = (−3, 2).', hint: 'Ndryshojnë të dyja shenjat.',
        whyWrong: ['Ndryshoi vetëm shenja e dytë.', 'Ndryshoi vetëm shenja e parë.', null, 'Përbërëset nuk ndërrojnë vend.'],
      },
      en: {
        question: 'What is the opposite of the vector (3, −2)?', options: ['(3, 2)', '(−3, −2)', '(−3, 2)', '(2, −3)'],
        explanation: '−(3, −2) = (−3, 2).', hint: 'Both signs change.',
        whyWrong: ['Only the second sign changed.', 'Only the first sign changed.', null, 'The components do not swap.'],
      },
      de: {
        question: 'Welcher ist der Gegenvektor von (3 | −2)?', options: ['(3 | 2)', '(−3 | −2)', '(−3 | 2)', '(2 | −3)'],
        explanation: '−(3 | −2) = (−3 | 2).', hint: 'Beide Vorzeichen ändern sich.',
        whyWrong: ['Nur das zweite Vorzeichen hat sich geändert.', 'Nur das erste Vorzeichen hat sich geändert.', null, 'Die Koordinaten tauschen nicht.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 10 },
      verify: ['5 * 4 / 2', 10],
      al: { question: 'Për çfarë m është (4, m) bashkëvizor me (2, 5)?', explanation: '4 · 5 = 2 · m → m = 10.', hint: 'Përbërëset në përpjesëtim.', commonMistakes: [{ value: 7, why: 'Nuk shtohet; përbërëset shumëzohen me të njëjtin numër (2).' }] },
      en: { question: 'For which m is (4, m) collinear with (2, 5)?', explanation: '4 · 5 = 2 · m → m = 10.', hint: 'The components are proportional.', commonMistakes: [{ value: 7, why: 'Do not add; both components are multiplied by the same number (2).' }] },
      de: { question: 'Für welches m ist (4 | m) kollinear zu (2 | 5)?', explanation: '4 · 5 = 2 · m → m = 10.', hint: 'Die Koordinaten sind proportional.', commonMistakes: [{ value: 7, why: 'Nicht addieren; beide Koordinaten werden mit derselben Zahl (2) multipliziert.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 0,
      verify: 'text',
      al: {
        question: 'u = (2, 1), v = (1, 3). Sa është u + v?', options: ['(3, 4)', '(2, 3)', '(1, −2)', '(3, 3)'],
        explanation: '(2 + 1, 1 + 3) = (3, 4).', hint: 'Mblidhni përbërëse me përbërëse.',
        whyWrong: [null, 'Shumëzuat përbërëset.', 'Kjo është u − v.', 'Gabim te përbërësja e dytë: 1 + 3 = 4.'],
      },
      en: {
        question: 'u = (2, 1), v = (1, 3). What is u + v?', options: ['(3, 4)', '(2, 3)', '(1, −2)', '(3, 3)'],
        explanation: '(2 + 1, 1 + 3) = (3, 4).', hint: 'Add component by component.',
        whyWrong: [null, 'You multiplied the components.', 'That is u − v.', 'Slip in the second component: 1 + 3 = 4.'],
      },
      de: {
        question: 'u = (2 | 1), v = (1 | 3). Was ist u + v?', options: ['(3 | 4)', '(2 | 3)', '(1 | −2)', '(3 | 3)'],
        explanation: '(2 + 1 | 1 + 3) = (3 | 4).', hint: 'Koordinatenweise addieren.',
        whyWrong: [null, 'Sie haben die Koordinaten multipliziert.', 'Das ist u − v.', 'Fehler bei der zweiten Koordinate: 1 + 3 = 4.'],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: false,
      verify: ['2 * 8 == 3 * 6', false],
      al: { question: 'Vektorët (2, 3) dhe (6, 8) janë bashkëvizorë.', explanation: 'E gabuar: 2 · 8 = 16 ≠ 18 = 3 · 6.', hint: 'Kontrolloni ad = bc.', whyWrong: '6 = 3 · 2, por 8 ≠ 3 · 3.' },
      en: { question: 'The vectors (2, 3) and (6, 8) are collinear.', explanation: 'False: 2 · 8 = 16 ≠ 18 = 3 · 6.', hint: 'Check ad = bc.', whyWrong: '6 = 3 · 2, but 8 ≠ 3 · 3.' },
      de: { question: 'Die Vektoren (2 | 3) und (6 | 8) sind kollinear.', explanation: 'Falsch: 2 · 8 = 16 ≠ 18 = 3 · 6.', hint: 'Prüfen Sie ad = bc.', whyWrong: '6 = 3 · 2, aber 8 ≠ 3 · 3.' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 3,
      verify: 'text',
      al: {
        question: 'u = (1, 3), v = (−2, 1). Sa është 2u − v?', options: ['(0, 5)', '(4, 7)', '(3, 2)', '(4, 5)'],
        explanation: '(2, 6) − (−2, 1) = (4, 5).', hint: 'Fillimisht 2u, pastaj zbritni v.',
        whyWrong: ['Mblodhët v në vend që ta zbritni.', 'Gabim te përbërësja e dytë: 6 − 1 = 5.', 'Kjo është u − v.', null],
      },
      en: {
        question: 'u = (1, 3), v = (−2, 1). What is 2u − v?', options: ['(0, 5)', '(4, 7)', '(3, 2)', '(4, 5)'],
        explanation: '(2, 6) − (−2, 1) = (4, 5).', hint: 'First 2u, then subtract v.',
        whyWrong: ['You added v instead of subtracting it.', 'Slip in the second component: 6 − 1 = 5.', 'That is u − v.', null],
      },
      de: {
        question: 'u = (1 | 3), v = (−2 | 1). Was ist 2u − v?', options: ['(0 | 5)', '(4 | 7)', '(3 | 2)', '(4 | 5)'],
        explanation: '(2 | 6) − (−2 | 1) = (4 | 5).', hint: 'Erst 2u, dann v subtrahieren.',
        whyWrong: ['Sie haben v addiert statt subtrahiert.', 'Fehler bei der zweiten Koordinate: 6 − 1 = 5.', 'Das ist u − v.', null],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 5 },
      verify: ['sqrt((5 - 1)^2 + (2 + 1)^2)', 5],
      al: { question: 'u = (5, 2), v = (1, −1). Sa është gjatësia e u − v?', explanation: 'u − v = (4, 3); √(16 + 9) = 5.', hint: 'Fillimisht zbritni, pastaj gjatësia.', commonMistakes: [{ value: 4.12, why: 'Kjo është gjatësia e (4, 1); 2 − (−1) = 3.' }] },
      en: { question: 'u = (5, 2), v = (1, −1). What is the length of u − v?', explanation: 'u − v = (4, 3); √(16 + 9) = 5.', hint: 'Subtract first, then the length.', commonMistakes: [{ value: 4.12, why: 'That is the length of (4, 1); 2 − (−1) = 3.' }] },
      de: { question: 'u = (5 | 2), v = (1 | −1). Wie lang ist u − v?', explanation: 'u − v = (4 | 3); √(16 + 9) = 5.', hint: 'Erst subtrahieren, dann die Länge.', commonMistakes: [{ value: 4.12, why: 'Das ist die Länge von (4 | 1); 2 − (−1) = 3.' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 10 },
      verify: ['sqrt((7 - 1)^2 + (9 - 1)^2)', 10],
      al: { question: 'A(1, 1), B(7, 9). Sa është gjatësia e vektorit AB?', explanation: 'AB = (6, 8); √(36 + 64) = 10.', hint: 'AB = B − A.', commonMistakes: [{ value: 14, why: 'Mblodhët përbërëset 6 + 8.' }] },
      en: { question: 'A(1, 1), B(7, 9). What is the length of the vector AB?', explanation: 'AB = (6, 8); √(36 + 64) = 10.', hint: 'AB = B − A.', commonMistakes: [{ value: 14, why: 'You added the components 6 + 8.' }] },
      de: { question: 'A(1 | 1), B(7 | 9). Wie lang ist der Vektor AB?', explanation: 'AB = (6 | 8); √(36 + 64) = 10.', hint: 'AB = B − A.', commonMistakes: [{ value: 14, why: 'Sie haben die Koordinaten 6 + 8 addiert.' }] },
    },
  ],
};
