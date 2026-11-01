// Grade 11 · Theme 2 quiz: Graphs 1 (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g11-graphs-1-quiz',
  grade: 11,
  theme: 'g11-graphs-1',
  order: 2,
  difficulty: 'advanced',
  icon: '📈',
  color: '#2A9D8F',
  i18n: {
    al: { title: 'Grafikët 1', category: 'Klasa 11 · Tema 2', duration: '12 min' },
    en: { title: 'Graphs 1', category: 'Grade 11 · Theme 2', duration: '12 min' },
    de: { title: 'Graphen 1', category: 'Klasse 11 · Thema 2', duration: '12 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 3,
      verify: ['(9 - 3) / (4 - 1)', 2],
      al: {
        question: 'Sa është koeficienti këndor i drejtëzës nëpër (1, 3) dhe (4, 9)?', options: ['1/2', '6', '3', '2'],
        explanation: 'm = (9 − 3)/(4 − 1) = 6/3 = 2.', hint: 'Δy : Δx.',
        whyWrong: ['Thyesa u kthye: Δx : Δy.', 'Ky është vetëm Δy.', 'Ky është vetëm Δx.', null],
      },
      en: {
        question: 'What is the gradient of the line through (1, 3) and (4, 9)?', options: ['1/2', '6', '3', '2'],
        explanation: 'm = (9 − 3)/(4 − 1) = 6/3 = 2.', hint: 'Δy ÷ Δx.',
        whyWrong: ['The fraction is upside down: Δx ÷ Δy.', 'That is only Δy.', 'That is only Δx.', null],
      },
      de: {
        question: 'Welche Steigung hat die Gerade durch (1 | 3) und (4 | 9)?', options: ['1/2', '6', '3', '2'],
        explanation: 'm = (9 − 3)/(4 − 1) = 6/3 = 2.', hint: 'Δy : Δx.',
        whyWrong: ['Der Bruch ist umgedreht: Δx : Δy.', 'Das ist nur Δy.', 'Das ist nur Δx.', null],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 1 },
      verify: ['3 - 2*1', 1],
      al: { question: 'Drejtëza nëpër (1, 3) dhe (4, 9) ka m = 2. Ku e pret boshtin y (c = ?)', explanation: '3 = 2 · 1 + c → c = 1.', hint: 'Vendosni njërën pikë te y = 2x + c.', commonMistakes: [{ value: 3, why: 'Kjo është y e pikës (1, 3), jo c.' }, { value: 2, why: 'Ky është koeficienti këndor.' }] },
      en: { question: 'The line through (1, 3) and (4, 9) has m = 2. Where does it cross the y-axis (c = ?)', explanation: '3 = 2 · 1 + c → c = 1.', hint: 'Put one point into y = 2x + c.', commonMistakes: [{ value: 3, why: 'That is the y of the point (1, 3), not c.' }, { value: 2, why: 'That is the gradient.' }] },
      de: { question: 'Die Gerade durch (1 | 3) und (4 | 9) hat m = 2. Wo schneidet sie die y-Achse (c = ?)', explanation: '3 = 2 · 1 + c → c = 1.', hint: 'Einen Punkt in y = 2x + c einsetzen.', commonMistakes: [{ value: 3, why: 'Das ist der y-Wert des Punktes (1 | 3), nicht c.' }, { value: 2, why: 'Das ist die Steigung.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: 'text',
      al: { question: 'Drejtëzat y = 3x − 2 dhe y = 3x + 5 janë paralele.', explanation: 'E vërtetë: kanë të njëjtin koeficient këndor 3.', hint: 'Krahasoni m.', whyWrong: 'Të dyja kanë m = 3.' },
      en: { question: 'The lines y = 3x − 2 and y = 3x + 5 are parallel.', explanation: 'True: they have the same gradient 3.', hint: 'Compare m.', whyWrong: 'Both have m = 3.' },
      de: { question: 'Die Geraden y = 3x − 2 und y = 3x + 5 sind parallel.', explanation: 'Richtig: Sie haben dieselbe Steigung 3.', hint: 'm vergleichen.', whyWrong: 'Beide haben m = 3.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'medium', correct: 1,
      verify: ['2^2 - 4*2 + 1', -3],
      al: {
        question: 'Cili është kulmi i parabolës y = x² − 4x + 1?', options: ['(−2, 13)', '(2, −3)', '(4, 1)', '(2, 1)'],
        explanation: 'x = 4/2 = 2; y = 4 − 8 + 1 = −3.', hint: 'x = −b/(2a).',
        whyWrong: ['U harrua minusi te x = −b/(2a).', null, 'x = 4 është pika simetrike e (0, 1), jo kulmi.', 'U mor y = c në vend që të llogaritej f(2).'],
      },
      en: {
        question: 'What is the vertex of the parabola y = x² − 4x + 1?', options: ['(−2, 13)', '(2, −3)', '(4, 1)', '(2, 1)'],
        explanation: 'x = 4/2 = 2; y = 4 − 8 + 1 = −3.', hint: 'x = −b/(2a).',
        whyWrong: ['The minus in x = −b/(2a) was forgotten.', null, 'x = 4 gives the mirror point of (0, 1), not the vertex.', 'y = c was taken instead of working out f(2).'],
      },
      de: {
        question: 'Wo liegt der Scheitelpunkt der Parabel y = x² − 4x + 1?', options: ['(−2 | 13)', '(2 | −3)', '(4 | 1)', '(2 | 1)'],
        explanation: 'x = 4/2 = 2; y = 4 − 8 + 1 = −3.', hint: 'x = −b/(2a).',
        whyWrong: ['Das Minus in x = −b/(2a) wurde vergessen.', null, 'x = 4 ist der Spiegelpunkt von (0 | 1), nicht der Scheitel.', 'Es wurde y = c genommen statt f(2) zu berechnen.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 80 }, unit: 'km/h',
      verify: ['120 / 1.5', 80],
      al: { question: 'Një makinë bën 120 km për 1,5 orë. Sa është shpejtësia mesatare?', explanation: '120 : 1,5 = 80 km/h.', hint: 'Rruga : koha.', commonMistakes: [{ value: 180, why: 'U shumëzua në vend që të pjesëtohej.' }, { value: 60, why: 'U pjesëtua me 2 orë, jo me 1,5.' }] },
      en: { question: 'A car travels 120 km in 1.5 hours. What is its average speed?', explanation: '120 ÷ 1.5 = 80 km/h.', hint: 'Distance ÷ time.', commonMistakes: [{ value: 180, why: 'It was multiplied instead of divided.' }, { value: 60, why: 'It was divided by 2 hours, not 1.5.' }] },
      de: { question: 'Ein Auto fährt 120 km in 1,5 Stunden. Wie groß ist die Durchschnittsgeschwindigkeit?', explanation: '120 : 1,5 = 80 km/h.', hint: 'Weg : Zeit.', commonMistakes: [{ value: 180, why: 'Es wurde multipliziert statt dividiert.' }, { value: 60, why: 'Es wurde durch 2 Stunden geteilt, nicht durch 1,5.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 0,
      verify: ['-1/2', '-1/2', 0, '-1/2'],
      al: {
        question: 'Sa është koeficienti këndor i drejtëzës pingule me y = 2x + 1?', options: ['−1/2', '1/2', '−2', '2'],
        explanation: 'm₁ · m₂ = −1 → m₂ = −1/2.', hint: 'I anasjellti me shenjë të kundërt.',
        whyWrong: [null, 'U mor i anasjellti, por pa ndërruar shenjën.', 'U ndërrua shenja, por pa marrë të anasjelltin.', 'Ky është koeficienti i një drejtëze paralele.'],
      },
      en: {
        question: 'What is the gradient of a line perpendicular to y = 2x + 1?', options: ['−1/2', '1/2', '−2', '2'],
        explanation: 'm₁ · m₂ = −1 → m₂ = −1/2.', hint: 'The negative reciprocal.',
        whyWrong: [null, 'The reciprocal was taken but the sign was not changed.', 'The sign was changed but the reciprocal was not taken.', 'That is the gradient of a parallel line.'],
      },
      de: {
        question: 'Welche Steigung hat eine Gerade, die senkrecht auf y = 2x + 1 steht?', options: ['−1/2', '1/2', '−2', '2'],
        explanation: 'm₁ · m₂ = −1 → m₂ = −1/2.', hint: 'Der negative Kehrwert.',
        whyWrong: [null, 'Kehrwert gebildet, aber das Vorzeichen nicht gewechselt.', 'Vorzeichen gewechselt, aber keinen Kehrwert gebildet.', 'Das ist die Steigung einer Parallelen.'],
      },
    },
    {
      id: 7, type: 'choice', difficulty: 'medium', correct: 2,
      verify: ['-6 / 2', -3],
      al: {
        question: 'Cili është boshti i simetrisë së y = x² + 6x + 5?', options: ['x = 3', 'x = 6', 'x = −3', 'x = −5'],
        explanation: 'x = −b/(2a) = −6/2 = −3.', hint: 'x = −b/(2a).',
        whyWrong: ['U harrua minusi.', 'U mor vetëm b, pa e pjesëtuar me 2a.', null, '−5 është njëra nga prerjet me boshtin x, jo boshti i simetrisë.'],
      },
      en: {
        question: 'What is the axis of symmetry of y = x² + 6x + 5?', options: ['x = 3', 'x = 6', 'x = −3', 'x = −5'],
        explanation: 'x = −b/(2a) = −6/2 = −3.', hint: 'x = −b/(2a).',
        whyWrong: ['The minus was forgotten.', 'Only b was taken, not divided by 2a.', null, '−5 is one of the x-intercepts, not the axis of symmetry.'],
      },
      de: {
        question: 'Wo liegt die Symmetrieachse von y = x² + 6x + 5?', options: ['x = 3', 'x = 6', 'x = −3', 'x = −5'],
        explanation: 'x = −b/(2a) = −6/2 = −3.', hint: 'x = −b/(2a).',
        whyWrong: ['Das Minus wurde vergessen.', 'Es wurde nur b genommen, ohne durch 2a zu teilen.', null, '−5 ist eine Nullstelle, nicht die Symmetrieachse.'],
      },
    },
    {
      id: 8, type: 'input', difficulty: 'hard', answer: { value: 80 }, unit: 'm',
      verify: ['0.5 * 8 * 20', 80],
      al: { question: 'Një makinë nga qetësia arrin 20 m/s për 8 s me nxitim të njëtrajtshëm. Sa metra kalon në këtë kohë?', explanation: 'Syprina e trekëndëshit nën grafikun shpejtësi-kohë: 1/2 · 8 · 20 = 80 m.', hint: 'Rruga = syprina nën grafik.', commonMistakes: [{ value: 160, why: 'U mor drejtkëndëshi 8 · 20; shpejtësia nuk ishte gjithmonë 20 m/s.' }, { value: 2.5, why: 'Ky është nxitimi, jo rruga.' }] },
      en: { question: 'A car starts from rest and reaches 20 m/s in 8 s with constant acceleration. How many metres does it travel in that time?', explanation: 'Area of the triangle under the speed–time graph: 1/2 · 8 · 20 = 80 m.', hint: 'Distance = area under the graph.', commonMistakes: [{ value: 160, why: 'The rectangle 8 · 20 was used; the speed was not 20 m/s the whole time.' }, { value: 2.5, why: 'That is the acceleration, not the distance.' }] },
      de: { question: 'Ein Auto beschleunigt gleichmäßig aus dem Stand in 8 s auf 20 m/s. Wie viele Meter legt es dabei zurück?', explanation: 'Dreiecksfläche unter dem Geschwindigkeit-Zeit-Graphen: 1/2 · 8 · 20 = 80 m.', hint: 'Weg = Fläche unter dem Graphen.', commonMistakes: [{ value: 160, why: 'Es wurde das Rechteck 8 · 20 genommen; die Geschwindigkeit war nicht immer 20 m/s.' }, { value: 2.5, why: 'Das ist die Beschleunigung, nicht der Weg.' }] },
    },
    {
      id: 9, type: 'truefalse', difficulty: 'hard', correct: false,
      verify: 'text',
      al: { question: 'Parabola y = −2x² + 8x ka vlerë më të vogël (minimum) 8.', explanation: 'E gabuar: a = −2 < 0, parabola hapet poshtë; 8 është vlera më e madhe (maksimum).', hint: 'Shikoni shenjën e a.', whyWrong: 'Kur a < 0 kulmi është maksimum.' },
      en: { question: 'The parabola y = −2x² + 8x has a least value (minimum) of 8.', explanation: 'False: a = −2 < 0, the parabola opens downwards; 8 is the greatest value (maximum).', hint: 'Look at the sign of a.', whyWrong: 'When a < 0 the vertex is a maximum.' },
      de: { question: 'Die Parabel y = −2x² + 8x hat den kleinsten Wert (Minimum) 8.', explanation: 'Falsch: a = −2 < 0, die Parabel ist nach unten geöffnet; 8 ist der größte Wert (Maximum).', hint: 'Auf das Vorzeichen von a achten.', whyWrong: 'Für a < 0 ist der Scheitelpunkt ein Maximum.' },
    },
    {
      id: 10, type: 'choice', difficulty: 'hard', correct: 2,
      verify: ['4^2 - 3*4 - 4', 0, 0, '4'],
      al: {
        question: 'Për cilat x priten y = x² − 2x − 3 dhe y = x + 1?', options: ['1 dhe −3', '3 dhe −1', '4 dhe −1', '−4 dhe 1'],
        explanation: 'x² − 2x − 3 = x + 1 → x² − 3x − 4 = 0 → (x − 4)(x + 1) = 0 → x = 4 ose x = −1.', hint: 'Barazoni të dyja dhe sillni gjithçka në një anë.',
        whyWrong: ['Shenjat e zgjidhjeve të x² − 2x − 3 = 0 u ndërruan.', 'Këto janë prerjet e parabolës me boshtin x, jo me drejtëzën.', null, 'Shenjat u ndërruan: nga (x − 4)(x + 1) dalin 4 dhe −1.'],
      },
      en: {
        question: 'For which x do y = x² − 2x − 3 and y = x + 1 meet?', options: ['1 and −3', '3 and −1', '4 and −1', '−4 and 1'],
        explanation: 'x² − 2x − 3 = x + 1 → x² − 3x − 4 = 0 → (x − 4)(x + 1) = 0 → x = 4 or x = −1.', hint: 'Set them equal and bring everything to one side.',
        whyWrong: ['The signs of the solutions of x² − 2x − 3 = 0 were swapped.', 'Those are where the parabola meets the x-axis, not the line.', null, 'The signs were swapped: (x − 4)(x + 1) gives 4 and −1.'],
      },
      de: {
        question: 'Für welche x schneiden sich y = x² − 2x − 3 und y = x + 1?', options: ['1 und −3', '3 und −1', '4 und −1', '−4 und 1'],
        explanation: 'x² − 2x − 3 = x + 1 → x² − 3x − 4 = 0 → (x − 4)(x + 1) = 0 → x = 4 oder x = −1.', hint: 'Gleichsetzen und alles auf eine Seite bringen.',
        whyWrong: ['Die Vorzeichen der Lösungen von x² − 2x − 3 = 0 wurden vertauscht.', 'Das sind die Nullstellen der Parabel, nicht die Schnittpunkte mit der Geraden.', null, 'Die Vorzeichen sind vertauscht: (x − 4)(x + 1) ergibt 4 und −1.'],
      },
    },
  ],
};
