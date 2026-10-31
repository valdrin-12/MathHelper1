// Grade 7 · Theme 5 quiz: Polygons (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g7-polygons-quiz',
  grade: 7,
  theme: 'g7-polygons',
  order: 5,
  difficulty: 'beginner',
  icon: '⬡',
  color: '#4ECDC4',
  i18n: {
    al: { title: 'Shumëkëndëshat', category: 'Klasa 7 · Tema 5', duration: '10 min' },
    en: { title: 'Polygons', category: 'Grade 7 · Theme 5', duration: '10 min' },
    de: { title: 'Vielecke', category: 'Klasse 7 · Thema 5', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'input', difficulty: 'easy', answer: { value: 720 },
      verify: ['(6 - 2) * 180', 720],
      al: { question: 'Sa gradë është shuma e këndeve të brendshme të gjashtëkëndëshit?', explanation: '(6 − 2) · 180° = 720°.', hint: 'S = (n − 2) · 180°.', unit: '°', commonMistakes: [{ value: 1080, why: 'Morët n · 180°; duhet (n − 2) · 180°.' }, { value: 360, why: 'Kjo është shuma e katërkëndëshit.' }] },
      en: { question: 'How many degrees is the interior angle sum of a hexagon?', explanation: '(6 − 2) · 180° = 720°.', hint: 'S = (n − 2) · 180°.', unit: '°', commonMistakes: [{ value: 1080, why: 'You used n · 180°; it is (n − 2) · 180°.' }, { value: 360, why: 'That is the sum for a quadrilateral.' }] },
      de: { question: 'Wie groß ist die Innenwinkelsumme eines Sechsecks (in Grad)?', explanation: '(6 − 2) · 180° = 720°.', hint: 'S = (n − 2) · 180°.', unit: '°', commonMistakes: [{ value: 1080, why: 'Sie haben n · 180° gerechnet; richtig ist (n − 2) · 180°.' }, { value: 360, why: 'Das ist die Winkelsumme eines Vierecks.' }] },
    },
    {
      id: 2, type: 'choice', difficulty: 'easy', correct: 1,
      verify: ['5 * (5 - 3) / 2', 5],
      al: {
        question: 'Sa diagonale ka një pesëkëndësh?', options: ['10', '5', '2', '3'],
        explanation: '5 · (5 − 3) : 2 = 5.', hint: 'n(n − 3) : 2.',
        whyWrong: ['Harruat të pjesëtonit me 2.', null, 'Këto janë diagonalet nga një kulm.', 'Kaq trekëndësha krijohen nga një kulm, jo diagonale.'],
      },
      en: {
        question: 'How many diagonals does a pentagon have?', options: ['10', '5', '2', '3'],
        explanation: '5 · (5 − 3) ÷ 2 = 5.', hint: 'n(n − 3) ÷ 2.',
        whyWrong: ['You forgot to divide by 2.', null, 'Those are the diagonals from one vertex.', 'That is the number of triangles from one vertex, not diagonals.'],
      },
      de: {
        question: 'Wie viele Diagonalen hat ein Fünfeck?', options: ['10', '5', '2', '3'],
        explanation: '5 · (5 − 3) : 2 = 5.', hint: 'n(n − 3) : 2.',
        whyWrong: ['Sie haben vergessen, durch 2 zu teilen.', null, 'Das sind die Diagonalen von einer Ecke aus.', 'So viele Dreiecke entstehen von einer Ecke aus, nicht Diagonalen.'],
      },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: false,
      verify: 'text',
      al: { question: 'Çdo romb është shumëkëndësh i rregullt.', explanation: 'E gabuar: rombi ka brinjë të barabarta, por këndet jo domosdoshmërisht; vetëm katrori është romb i rregullt.', hint: 'Çfarë kërkohet përveç brinjëve të barabarta?', whyWrong: 'Për shumëkëndësh të rregullt duhen edhe kënde të barabarta, që rombi zakonisht nuk i ka.' },
      en: { question: 'Every rhombus is a regular polygon.', explanation: 'False: a rhombus has equal sides but not necessarily equal angles; only the square is a regular rhombus.', hint: 'What is needed besides equal sides?', whyWrong: 'A regular polygon also needs equal angles, which a rhombus usually does not have.' },
      de: { question: 'Jede Raute ist ein regelmäßiges Vieleck.', explanation: 'Falsch: Eine Raute hat gleich lange Seiten, aber nicht unbedingt gleiche Winkel; nur das Quadrat ist eine regelmäßige Raute.', hint: 'Was braucht man außer gleich langen Seiten?', whyWrong: 'Ein regelmäßiges Vieleck braucht auch gleich große Winkel, die eine Raute meist nicht hat.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 0,
      verify: ['(10 + 6) * 4 / 2', 32],
      visual: {
        type: 'geoFigure', view: { xMin: -0.5, xMax: 10.5, yMin: -1.2, yMax: 5 }, grid: true, height: 150,
        shapes: [
          { kind: 'polygon', points: [[0, 0], [10, 0], [8, 4], [2, 4]], fill: true, color: 'primary' },
          { kind: 'segment', from: [2, 4], to: [2, 0], color: 'secondary', dashed: true, label: '4 cm' },
          { kind: 'label', at: [5, -0.7], text: '10 cm' }, { kind: 'label', at: [5, 4.5], text: '6 cm' },
        ],
        alt: { al: 'Trapez me baza 10 cm dhe 6 cm dhe lartësi 4 cm.', en: 'A trapezium with bases 10 cm and 6 cm and height 4 cm.', de: 'Ein Trapez mit den parallelen Seiten 10 cm und 6 cm und der Höhe 4 cm.' },
      },
      al: {
        question: 'Sa është sipërfaqja e trapezit në figurë?', options: ['32 cm²', '64 cm²', '240 cm²', '20 cm²'],
        explanation: '(10 + 6) · 4 : 2 = 32 cm².', hint: 'S = (a + b) · h : 2.',
        whyWrong: [null, 'Harruat pjesëtimin me 2.', 'Shumëzuat të tria numrat.', 'Mblodhët numrat.'],
      },
      en: {
        question: 'What is the area of the trapezium in the figure?', options: ['32 cm²', '64 cm²', '240 cm²', '20 cm²'],
        explanation: '(10 + 6) · 4 ÷ 2 = 32 cm².', hint: 'A = (a + b) · h ÷ 2.',
        whyWrong: [null, 'You forgot to divide by 2.', 'You multiplied all three numbers.', 'You added the numbers.'],
      },
      de: {
        question: 'Wie groß ist der Flächeninhalt des Trapezes in der Abbildung?', options: ['32 cm²', '64 cm²', '240 cm²', '20 cm²'],
        explanation: '(10 + 6) · 4 : 2 = 32 cm².', hint: 'A = (a + c) · h : 2.',
        whyWrong: [null, 'Sie haben das Halbieren vergessen.', 'Sie haben alle drei Zahlen multipliziert.', 'Sie haben die Zahlen addiert.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 108 },
      verify: ['(5 - 2) * 180 / 5', 108],
      al: { question: 'Sa gradë është çdo kënd i brendshëm i pesëkëndëshit të rregullt?', explanation: '540° : 5 = 108°.', hint: 'Shuma : numri i këndeve.', unit: '°', commonMistakes: [{ value: 72, why: 'Ky është këndi i jashtëm.' }, { value: 540, why: 'Kjo është shuma e të gjithë këndeve.' }] },
      en: { question: 'How many degrees is each interior angle of a regular pentagon?', explanation: '540° ÷ 5 = 108°.', hint: 'Sum ÷ number of angles.', unit: '°', commonMistakes: [{ value: 72, why: 'That is the exterior angle.' }, { value: 540, why: 'That is the sum of all the angles.' }] },
      de: { question: 'Wie groß ist jeder Innenwinkel eines regelmäßigen Fünfecks (in Grad)?', explanation: '540° : 5 = 108°.', hint: 'Winkelsumme : Anzahl der Winkel.', unit: '°', commonMistakes: [{ value: 72, why: 'Das ist der Außenwinkel.' }, { value: 540, why: 'Das ist die Summe aller Winkel.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 3,
      verify: ['360 / 30', 12],
      al: {
        question: 'Këndi i jashtëm i një shumëkëndëshi të rregullt është 30°. Sa brinjë ka?', options: ['6', '30', '10', '12'],
        explanation: '360° : 30° = 12.', hint: 'Shuma e këndeve të jashtme është 360°.',
        whyWrong: ['Gjashtëkëndëshi ka kënd të jashtëm 60°.', 'Ky është vetë këndi.', 'Dhjetëkëndëshi ka kënd të jashtëm 36°.', null],
      },
      en: {
        question: 'The exterior angle of a regular polygon is 30°. How many sides does it have?', options: ['6', '30', '10', '12'],
        explanation: '360° ÷ 30° = 12.', hint: 'The exterior angles add up to 360°.',
        whyWrong: ['A hexagon has an exterior angle of 60°.', 'That is the angle itself.', 'A decagon has an exterior angle of 36°.', null],
      },
      de: {
        question: 'Der Außenwinkel eines regelmäßigen Vielecks ist 30°. Wie viele Ecken hat es?', options: ['6', '30', '10', '12'],
        explanation: '360° : 30° = 12.', hint: 'Die Außenwinkel ergeben zusammen 360°.',
        whyWrong: ['Ein Sechseck hat einen Außenwinkel von 60°.', 'Das ist der Winkel selbst.', 'Ein Zehneck hat einen Außenwinkel von 36°.', null],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: true,
      verify: ['6 * 8 / 2 == 24', true],
      al: { question: 'Rombi me diagonale 6 cm dhe 8 cm ka sipërfaqe 24 cm².', explanation: 'E vërtetë: 6 · 8 : 2 = 24 cm².', hint: 'S = d₁ · d₂ : 2.', whyWrong: 'Formula e rombit jep pikërisht 24 cm².' },
      en: { question: 'A rhombus with diagonals of 6 cm and 8 cm has an area of 24 cm².', explanation: 'True: 6 · 8 ÷ 2 = 24 cm².', hint: 'A = d₁ · d₂ ÷ 2.', whyWrong: 'The rhombus formula gives exactly 24 cm².' },
      de: { question: 'Eine Raute mit den Diagonalen 6 cm und 8 cm hat den Flächeninhalt 24 cm².', explanation: 'Richtig: 6 · 8 : 2 = 24 cm².', hint: 'A = e · f : 2.', whyWrong: 'Die Rautenformel ergibt genau 24 cm².' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 2,
      verify: ['2 * pi * 5', '10 * pi', 0, '10π'],
      al: {
        question: 'Sa është perimetri i rrethit me rreze 5 cm?', options: ['25π cm', '5π cm', '10π cm', '100π cm'],
        explanation: 'C = 2πr = 2π · 5 = 10π ≈ 31,4 cm.', hint: 'C = 2πr.',
        whyWrong: ['Kjo është sipërfaqja (πr²), në cm².', 'Harruat faktorin 2.', null, 'Përdorët diametrin në formulën e sipërfaqes.'],
      },
      en: {
        question: 'What is the circumference of a circle with radius 5 cm?', options: ['25π cm', '5π cm', '10π cm', '100π cm'],
        explanation: 'C = 2πr = 2π · 5 = 10π ≈ 31.4 cm.', hint: 'C = 2πr.',
        whyWrong: ['That is the area (πr²), in cm².', 'You forgot the factor 2.', null, 'You used the diameter in the area formula.'],
      },
      de: {
        question: 'Wie groß ist der Umfang eines Kreises mit Radius 5 cm?', options: ['25π cm', '5π cm', '10π cm', '100π cm'],
        explanation: 'u = 2πr = 2π · 5 = 10π ≈ 31,4 cm.', hint: 'u = 2πr.',
        whyWrong: ['Das ist der Flächeninhalt (πr²), in cm².', 'Sie haben den Faktor 2 vergessen.', null, 'Sie haben den Durchmesser in die Flächenformel eingesetzt.'],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 9 },
      verify: ['1260 / 180 + 2', 9],
      al: { question: 'Shuma e këndeve të një shumëkëndëshi është 1260°. Sa brinjë ka?', explanation: '(n − 2) · 180 = 1260 → n − 2 = 7 → n = 9.', hint: 'Pjesëtoni me 180°, pastaj shtoni 2.', commonMistakes: [{ value: 7, why: 'Ky është numri i trekëndëshave; brinjët janë 2 më shumë.' }] },
      en: { question: 'The angle sum of a polygon is 1260°. How many sides does it have?', explanation: '(n − 2) · 180 = 1260 → n − 2 = 7 → n = 9.', hint: 'Divide by 180°, then add 2.', commonMistakes: [{ value: 7, why: 'That is the number of triangles; there are 2 more sides.' }] },
      de: { question: 'Die Winkelsumme eines Vielecks ist 1260°. Wie viele Ecken hat es?', explanation: '(n − 2) · 180 = 1260 → n − 2 = 7 → n = 9.', hint: 'Durch 180° teilen, dann 2 addieren.', commonMistakes: [{ value: 7, why: 'Das ist die Anzahl der Dreiecke; es sind 2 Ecken mehr.' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 28.3, tolerance: 0.1 },
      verify: ['pi * 3 * 3', 28.27, 0.05],
      al: { question: 'Sa cm² është sipërfaqja e qarkut me rreze 3 cm? (π ≈ 3,14; një shifër pas presjes)', explanation: 'S = π · 3 · 3 = 9π ≈ 28,3 cm².', hint: 'S = πr².', unit: 'cm²', commonMistakes: [{ value: 18.8, why: 'Kjo është perimetri (2πr).' }, { value: 113.1, why: 'Përdorët diametrin 6 në vend të rrezes.' }] },
      en: { question: 'How many cm² is the area of a circle with radius 3 cm? (π ≈ 3.14; one decimal place)', explanation: 'A = π · 3 · 3 = 9π ≈ 28.3 cm².', hint: 'A = πr².', unit: 'cm²', commonMistakes: [{ value: 18.8, why: 'That is the circumference (2πr).' }, { value: 113.1, why: 'You used the diameter 6 instead of the radius.' }] },
      de: { question: 'Wie viele cm² beträgt der Flächeninhalt eines Kreises mit Radius 3 cm? (π ≈ 3,14; eine Nachkommastelle)', explanation: 'A = π · 3 · 3 = 9π ≈ 28,3 cm².', hint: 'A = πr².', unit: 'cm²', commonMistakes: [{ value: 18.8, why: 'Das ist der Umfang (2πr).' }, { value: 113.1, why: 'Sie haben den Durchmesser 6 statt des Radius benutzt.' }] },
    },
  ],
};
