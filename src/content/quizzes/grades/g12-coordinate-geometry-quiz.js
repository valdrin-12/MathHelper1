// Grade 12 · Theme 5 quiz: Points and lines in the coordinate plane (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g12-coordinate-geometry-quiz',
  grade: 12,
  theme: 'g12-coordinate-geometry',
  order: 4,
  difficulty: 'advanced',
  icon: '📍',
  color: '#FB8500',
  i18n: {
    al: { title: 'Pika dhe drejtëza në plan', category: 'Klasa 12 · Tema 5', duration: '12 min' },
    en: { title: 'Points and lines in the plane', category: 'Grade 12 · Theme 5', duration: '12 min' },
    de: { title: 'Punkte und Geraden in der Ebene', category: 'Klasse 12 · Thema 5', duration: '12 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 0,
      verify: ['(2 + 6) / 2', 4],
      al: {
        question: 'Cili është mesi i segmentit A(2, −4), B(6, 8)?', options: ['(4, 2)', '(2, 6)', '(8, 4)', '(4, −6)'],
        explanation: '((2 + 6)/2, (−4 + 8)/2) = (4, 2).', hint: 'Mesatarja e koordinatave.',
        whyWrong: [null, 'U morën gjysmat e ndryshimeve, jo mesataret.', 'U mblodhën koordinatat pa pjesëtuar me 2.', 'Te y u zbrit 8 në vend që të mblidhej.'],
      },
      en: {
        question: 'What is the midpoint of A(2, −4), B(6, 8)?', options: ['(4, 2)', '(2, 6)', '(8, 4)', '(4, −6)'],
        explanation: '((2 + 6)/2, (−4 + 8)/2) = (4, 2).', hint: 'The mean of the coordinates.',
        whyWrong: [null, 'Half of the differences was taken, not the means.', 'The coordinates were added but not halved.', 'For y, 8 was subtracted instead of added.'],
      },
      de: {
        question: 'Welcher Punkt ist der Mittelpunkt von A(2 | −4), B(6 | 8)?', options: ['(4 | 2)', '(2 | 6)', '(8 | 4)', '(4 | −6)'],
        explanation: '((2 + 6)/2 | (−4 + 8)/2) = (4 | 2).', hint: 'Mittelwert der Koordinaten.',
        whyWrong: [null, 'Es wurden die halben Differenzen genommen, nicht die Mittelwerte.', 'Die Koordinaten wurden addiert, aber nicht halbiert.', 'Bei y wurde 8 subtrahiert statt addiert.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 5 },
      verify: ['3*1 + 1*2', 5],
      al: { question: 'Sa është prodhimi skalar i a = (3, 1) dhe b = (1, 2)?', explanation: '3 · 1 + 1 · 2 = 5.', hint: 'x₁x₂ + y₁y₂.', commonMistakes: [{ value: 7, why: 'U mblodhën të gjitha koordinatat.' }, { value: 6, why: 'U shumëzuan të gjitha koordinatat.' }] },
      en: { question: 'What is the dot product of a = (3, 1) and b = (1, 2)?', explanation: '3 · 1 + 1 · 2 = 5.', hint: 'x₁x₂ + y₁y₂.', commonMistakes: [{ value: 7, why: 'All the components were added.' }, { value: 6, why: 'All the components were multiplied.' }] },
      de: { question: 'Wie groß ist das Skalarprodukt von a = (3 | 1) und b = (1 | 2)?', explanation: '3 · 1 + 1 · 2 = 5.', hint: 'x₁x₂ + y₁y₂.', commonMistakes: [{ value: 7, why: 'Alle Koordinaten wurden addiert.' }, { value: 6, why: 'Alle Koordinaten wurden multipliziert.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: ['2*3 + 3*(-2) == 0', true],
      al: { question: 'Vektorët (2, 3) dhe (3, −2) janë pingulë.', explanation: 'E vërtetë: 6 − 6 = 0.', hint: 'Prodhimi skalar.', whyWrong: 'Prodhimi skalar është 0.' },
      en: { question: 'The vectors (2, 3) and (3, −2) are perpendicular.', explanation: 'True: 6 − 6 = 0.', hint: 'The dot product.', whyWrong: 'The dot product is 0.' },
      de: { question: 'Die Vektoren (2 | 3) und (3 | −2) sind orthogonal.', explanation: 'Richtig: 6 − 6 = 0.', hint: 'Das Skalarprodukt.', whyWrong: 'Das Skalarprodukt ist 0.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'medium', correct: 3,
      verify: ['abs(9 + 16 - 5) / 5', 4],
      al: {
        question: 'Sa është largësia e pikës (3, 4) nga drejtëza 3x + 4y − 5 = 0?', options: ['20', '5', '25', '4'],
        explanation: '|9 + 16 − 5|/√(9 + 16) = 20/5 = 4.', hint: 'd = |ax₀ + by₀ + c|/√(a² + b²).',
        whyWrong: ['U harrua pjesëtimi me √(a² + b²).', 'Kjo është largësia e pikës nga origjina.', 'U llogarit vetëm 9 + 16.', null],
      },
      en: {
        question: 'What is the distance from the point (3, 4) to the line 3x + 4y − 5 = 0?', options: ['20', '5', '25', '4'],
        explanation: '|9 + 16 − 5|/√(9 + 16) = 20/5 = 4.', hint: 'd = |ax₀ + by₀ + c|/√(a² + b²).',
        whyWrong: ['The division by √(a² + b²) was forgotten.', 'That is the distance of the point from the origin.', 'Only 9 + 16 was worked out.', null],
      },
      de: {
        question: 'Wie groß ist der Abstand des Punktes (3 | 4) von der Geraden 3x + 4y − 5 = 0?', options: ['20', '5', '25', '4'],
        explanation: '|9 + 16 − 5|/√(9 + 16) = 20/5 = 4.', hint: 'd = |ax₀ + by₀ + c|/√(a² + b²).',
        whyWrong: ['Die Division durch √(a² + b²) fehlt.', 'Das ist der Abstand des Punktes vom Ursprung.', 'Es wurde nur 9 + 16 gerechnet.', null],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 7.5 },
      verify: ['0.5 * abs(1*(2-5) + 5*(5-1) + 2*(1-2))', 7.5],
      al: { question: 'Sa është syprina e trekëndëshit A(1, 1), B(5, 2), C(2, 5)?', explanation: '1/2 · |−3 + 20 − 2| = 7,5.', hint: 'Formula me koordinata dhe 1/2.', commonMistakes: [{ value: 15, why: 'U harrua 1/2.' }, { value: 12.5, why: 'Gabim në shenja te një kllapë.' }] },
      en: { question: 'What is the area of triangle A(1, 1), B(5, 2), C(2, 5)?', explanation: '1/2 · |−3 + 20 − 2| = 7.5.', hint: 'The coordinate formula with 1/2.', commonMistakes: [{ value: 15, why: 'The 1/2 was forgotten.' }, { value: 12.5, why: 'A sign slip in one bracket.' }] },
      de: { question: 'Wie groß ist der Flächeninhalt des Dreiecks A(1 | 1), B(5 | 2), C(2 | 5)?', explanation: '1/2 · |−3 + 20 − 2| = 7,5.', hint: 'Koordinatenformel mit 1/2.', commonMistakes: [{ value: 15, why: 'Der Faktor 1/2 fehlt.' }, { value: 12.5, why: 'Vorzeichenfehler in einer Klammer.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 1,
      verify: 'text',
      al: {
        question: 'Cila drejtëz kalon nëpër (1, 2) dhe është pingule me y = 2x + 3?', options: ['y = 2x', 'y = −x/2 + 5/2', 'y = −x/2 + 2', 'y = −2x + 4'],
        explanation: 'k = −1/2; 2 = −1/2 + n → n = 5/2.', hint: 'k₁ · k₂ = −1, pastaj vendosni pikën.',
        whyWrong: ['Kjo është paralele, jo pingule.', null, 'Koeficienti është i saktë, por n = 2 nuk e kalon pikën (1, 2).', 'U ndërrua shenja pa marrë të anasjelltin.'],
      },
      en: {
        question: 'Which line passes through (1, 2) and is perpendicular to y = 2x + 3?', options: ['y = 2x', 'y = −x/2 + 5/2', 'y = −x/2 + 2', 'y = −2x + 4'],
        explanation: 'k = −1/2; 2 = −1/2 + n → n = 5/2.', hint: 'k₁ · k₂ = −1, then put in the point.',
        whyWrong: ['That one is parallel, not perpendicular.', null, 'The gradient is right, but n = 2 misses the point (1, 2).', 'The sign was changed but the reciprocal was not taken.'],
      },
      de: {
        question: 'Welche Gerade geht durch (1 | 2) und steht senkrecht auf y = 2x + 3?', options: ['y = 2x', 'y = −x/2 + 5/2', 'y = −x/2 + 2', 'y = −2x + 4'],
        explanation: 'k = −1/2; 2 = −1/2 + n → n = 5/2.', hint: 'k₁ · k₂ = −1, dann den Punkt einsetzen.',
        whyWrong: ['Diese ist parallel, nicht orthogonal.', null, 'Die Steigung stimmt, aber n = 2 verfehlt den Punkt (1 | 2).', 'Das Vorzeichen wurde gewechselt, aber kein Kehrwert gebildet.'],
      },
    },
    {
      id: 7, type: 'choice', difficulty: 'medium', correct: 2,
      verify: ['-3 / 2', -1.5, 0, '-3/2'],
      al: {
        question: 'Sa është koeficienti këndor i 3x + 2y − 6 = 0?', options: ['3/2', '2/3', '−3/2', '−2/3'],
        explanation: 'y = −3/2 x + 3 → k = −3/2.', hint: 'Zgjidhni për y.',
        whyWrong: ['U harrua shenja minus.', 'Thyesa u kthye dhe shenja u harrua.', null, 'Thyesa u kthye: duhet −a/b.'],
      },
      en: {
        question: 'What is the gradient of 3x + 2y − 6 = 0?', options: ['3/2', '2/3', '−3/2', '−2/3'],
        explanation: 'y = −3/2 x + 3 → k = −3/2.', hint: 'Solve for y.',
        whyWrong: ['The minus sign was forgotten.', 'The fraction was turned over and the sign lost.', null, 'The fraction was turned over: it is −a/b.'],
      },
      de: {
        question: 'Welche Steigung hat 3x + 2y − 6 = 0?', options: ['3/2', '2/3', '−3/2', '−2/3'],
        explanation: 'y = −3/2 x + 3 → k = −3/2.', hint: 'Nach y auflösen.',
        whyWrong: ['Das Minuszeichen fehlt.', 'Der Bruch wurde umgedreht und das Vorzeichen vergessen.', null, 'Der Bruch wurde umgedreht: es gilt −a/b.'],
      },
    },
    {
      id: 8, type: 'input', difficulty: 'hard', answer: { value: 4 },
      verify: ['12 / 3', 4],
      al: { question: 'Për cilin k janë pingulë vektorët (k, 2) dhe (3, −6)?', explanation: '3k − 12 = 0 → k = 4.', hint: 'Prodhimi skalar = 0.', commonMistakes: [{ value: -4, why: 'Gabim në shenjë: 3k + 12 = 0.' }, { value: 1, why: 'U përdor një kusht i gabuar në vend të prodhimit skalar.' }] },
      en: { question: 'For which k are the vectors (k, 2) and (3, −6) perpendicular?', explanation: '3k − 12 = 0 → k = 4.', hint: 'Dot product = 0.', commonMistakes: [{ value: -4, why: 'A sign slip: 3k + 12 = 0.' }, { value: 1, why: 'A wrong condition was used instead of the dot product.' }] },
      de: { question: 'Für welches k sind die Vektoren (k | 2) und (3 | −6) orthogonal?', explanation: '3k − 12 = 0 → k = 4.', hint: 'Skalarprodukt = 0.', commonMistakes: [{ value: -4, why: 'Vorzeichenfehler: 3k + 12 = 0.' }, { value: 1, why: 'Es wurde eine falsche Bedingung statt des Skalarprodukts verwendet.' }] },
    },
    {
      id: 9, type: 'truefalse', difficulty: 'hard', correct: false,
      verify: ['2 * (-2) == -1', false],
      al: { question: 'Drejtëzat y = 2x + 1 dhe y = −2x + 1 janë pingule.', explanation: 'E gabuar: 2 · (−2) = −4 ≠ −1.', hint: 'k₁ · k₂ = −1?', whyWrong: 'Pingulja me k = 2 ka k = −1/2.' },
      en: { question: 'The lines y = 2x + 1 and y = −2x + 1 are perpendicular.', explanation: 'False: 2 · (−2) = −4 ≠ −1.', hint: 'k₁ · k₂ = −1?', whyWrong: 'The perpendicular to k = 2 has k = −1/2.' },
      de: { question: 'Die Geraden y = 2x + 1 und y = −2x + 1 sind orthogonal.', explanation: 'Falsch: 2 · (−2) = −4 ≠ −1.', hint: 'k₁ · k₂ = −1?', whyWrong: 'Die Senkrechte zu k = 2 hat k = −1/2.' },
    },
    {
      id: 10, type: 'choice', difficulty: 'hard', correct: 0,
      verify: ['2*4 - 1', 7],
      al: {
        question: 'A(1, 2) dhe mesi i AB është M(4, 5). Cili është B?', options: ['(7, 8)', '(2,5; 3,5)', '(3, 3)', '(5, 7)'],
        explanation: 'B = (2 · 4 − 1, 2 · 5 − 2) = (7, 8).', hint: 'B = 2M − A.',
        whyWrong: [null, 'Ky është mesi i A dhe M.', 'Ky është ndryshimi M − A.', 'U mblodhën A dhe M.'],
      },
      en: {
        question: 'A(1, 2) and the midpoint of AB is M(4, 5). What is B?', options: ['(7, 8)', '(2.5, 3.5)', '(3, 3)', '(5, 7)'],
        explanation: 'B = (2 · 4 − 1, 2 · 5 − 2) = (7, 8).', hint: 'B = 2M − A.',
        whyWrong: [null, 'That is the midpoint of A and M.', 'That is the difference M − A.', 'A and M were added.'],
      },
      de: {
        question: 'A(1 | 2) und der Mittelpunkt von AB ist M(4 | 5). Wie lautet B?', options: ['(7 | 8)', '(2,5 | 3,5)', '(3 | 3)', '(5 | 7)'],
        explanation: 'B = (2 · 4 − 1 | 2 · 5 − 2) = (7 | 8).', hint: 'B = 2M − A.',
        whyWrong: [null, 'Das ist der Mittelpunkt von A und M.', 'Das ist die Differenz M − A.', 'A und M wurden addiert.'],
      },
    },
  ],
};
