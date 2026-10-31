// Grade 7 · Theme 8 quiz: Pythagoras' theorem (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g7-pythagoras-quiz',
  grade: 7,
  theme: 'g7-pythagoras',
  order: 8,
  difficulty: 'beginner',
  icon: '📐',
  color: '#E76F51',
  i18n: {
    al: { title: 'Teorema e Pitagorës', category: 'Klasa 7 · Tema 8', duration: '10 min' },
    en: { title: 'Pythagoras\' theorem', category: 'Grade 7 · Theme 8', duration: '10 min' },
    de: { title: 'Satz des Pythagoras', category: 'Klasse 7 · Thema 8', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 1,
      verify: ['sqrt(6^2 + 8^2)', 10],
      visual: {
        type: 'geoFigure', view: { xMin: -1, xMax: 9, yMin: -1.2, yMax: 6.8 }, height: 170,
        shapes: [
          { kind: 'polygon', points: [[0, 0], [8, 0], [0, 6]], fill: true, color: 'primary' },
          { kind: 'angle', vertex: [0, 0], from: [8, 0], to: [0, 6], right: true },
          { kind: 'label', at: [4, -0.6], text: '8 cm' },
          { kind: 'label', at: [-0.6, 3], text: '6 cm' },
          { kind: 'label', at: [4.6, 3.4], text: 'c = ?', color: 'secondary' },
        ],
        alt: { al: 'Trekëndësh kënddrejtë me katete 6 cm dhe 8 cm; hipotenuza e panjohur.', en: 'A right triangle with legs 6 cm and 8 cm; the hypotenuse is unknown.', de: 'Rechtwinkliges Dreieck mit den Katheten 6 cm und 8 cm; die Hypotenuse ist gesucht.' },
      },
      al: {
        question: 'Katetet e një trekëndëshi kënddrejtë janë 6 cm dhe 8 cm. Sa është hipotenuza?', options: ['14 cm', '10 cm', '100 cm', '7 cm'],
        explanation: 'c² = 36 + 64 = 100, c = 10 cm.', hint: 'a² + b² = c².',
        whyWrong: ['Mblodhët brinjët, jo katrorët e tyre.', null, '100 është c², jo c.', 'Ky është mesatarja e kateteve.'],
      },
      en: {
        question: 'The legs of a right triangle are 6 cm and 8 cm. How long is the hypotenuse?', options: ['14 cm', '10 cm', '100 cm', '7 cm'],
        explanation: 'c² = 36 + 64 = 100, c = 10 cm.', hint: 'a² + b² = c².',
        whyWrong: ['You added the sides, not their squares.', null, '100 is c², not c.', 'That is the average of the legs.'],
      },
      de: {
        question: 'Die Katheten eines rechtwinkligen Dreiecks sind 6 cm und 8 cm lang. Wie lang ist die Hypotenuse?', options: ['14 cm', '10 cm', '100 cm', '7 cm'],
        explanation: 'c² = 36 + 64 = 100, c = 10 cm.', hint: 'a² + b² = c².',
        whyWrong: ['Sie haben die Seiten addiert, nicht ihre Quadrate.', null, '100 ist c², nicht c.', 'Das ist der Mittelwert der Katheten.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 31.4 },
      verify: ['2 * 3.14 * 5', 31.4],
      al: { question: 'Një rreth ka rreze 5 cm. Sa cm është perimetri i tij (π ≈ 3,14)?', explanation: 'P = 2πr = 2 · 3,14 · 5 = 31,4 cm.', hint: 'P = 2πr.', unit: 'cm', commonMistakes: [{ value: 15.7, why: 'Harruat faktorin 2.' }, { value: 78.5, why: 'Kjo është sipërfaqja πr².' }] },
      en: { question: 'A circle has radius 5 cm. How many cm is its circumference (π ≈ 3.14)?', explanation: 'C = 2πr = 2 · 3.14 · 5 = 31.4 cm.', hint: 'C = 2πr.', unit: 'cm', commonMistakes: [{ value: 15.7, why: 'You forgot the factor 2.' }, { value: 78.5, why: 'That is the area πr².' }] },
      de: { question: 'Ein Kreis hat den Radius 5 cm. Wie viele cm misst sein Umfang (π ≈ 3,14)?', explanation: 'u = 2πr = 2 · 3,14 · 5 = 31,4 cm.', hint: 'u = 2πr.', unit: 'cm', commonMistakes: [{ value: 15.7, why: 'Der Faktor 2 fehlt.' }, { value: 78.5, why: 'Das ist der Flächeninhalt πr².' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: ['5^2 + 12^2 == 13^2', true],
      al: { question: 'Trekëndëshi me brinjë 5, 12 dhe 13 është kënddrejtë.', explanation: 'E vërtetë: 25 + 144 = 169 = 13².', hint: 'Provoni a² + b² = c² me c më të gjatën.', whyWrong: '5² + 12² = 13², pra sipas të anasjelltës është kënddrejtë.' },
      en: { question: 'The triangle with sides 5, 12 and 13 is right-angled.', explanation: 'True: 25 + 144 = 169 = 13².', hint: 'Test a² + b² = c² with c the longest.', whyWrong: '5² + 12² = 13², so by the converse it is right-angled.' },
      de: { question: 'Das Dreieck mit den Seiten 5, 12 und 13 ist rechtwinklig.', explanation: 'Richtig: 25 + 144 = 169 = 13².', hint: 'Prüfen Sie a² + b² = c² mit der längsten Seite c.', whyWrong: '5² + 12² = 13², nach der Umkehrung also rechtwinklig.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 3,
      verify: ['2 * (8 + 5)', 26],
      al: {
        question: 'Sa është perimetri i drejtkëndëshit 8 cm × 5 cm?', options: ['13 cm', '40 cm', '21 cm', '26 cm'],
        explanation: 'P = 2 · (8 + 5) = 26 cm.', hint: 'Mblidhni të katër brinjët.',
        whyWrong: ['Mblodhët vetëm dy brinjë.', 'Kjo është sipërfaqja (cm²).', 'Harruat një brinjë.', null],
      },
      en: {
        question: 'What is the perimeter of an 8 cm × 5 cm rectangle?', options: ['13 cm', '40 cm', '21 cm', '26 cm'],
        explanation: 'P = 2 · (8 + 5) = 26 cm.', hint: 'Add all four sides.',
        whyWrong: ['You added only two sides.', 'That is the area (cm²).', 'You left out one side.', null],
      },
      de: {
        question: 'Wie groß ist der Umfang eines Rechtecks 8 cm × 5 cm?', options: ['13 cm', '40 cm', '21 cm', '26 cm'],
        explanation: 'u = 2 · (8 + 5) = 26 cm.', hint: 'Alle vier Seiten addieren.',
        whyWrong: ['Sie haben nur zwei Seiten addiert.', 'Das ist der Flächeninhalt (cm²).', 'Eine Seite fehlt.', null],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 12 },
      verify: ['sqrt(13^2 - 5^2)', 12],
      al: { question: 'Hipotenuza është 13 cm, njëra katetë 5 cm. Sa cm është kateta tjetër?', explanation: 'b² = 169 − 25 = 144, b = 12 cm.', hint: 'Për katetën: b² = c² − a².', unit: 'cm', commonMistakes: [{ value: 8, why: 'Zbritët brinjët, jo katrorët.' }] },
      en: { question: 'The hypotenuse is 13 cm and one leg is 5 cm. How many cm is the other leg?', explanation: 'b² = 169 − 25 = 144, b = 12 cm.', hint: 'For a leg: b² = c² − a².', unit: 'cm', commonMistakes: [{ value: 8, why: 'You subtracted the sides, not the squares.' }] },
      de: { question: 'Die Hypotenuse ist 13 cm, eine Kathete 5 cm lang. Wie viele cm misst die andere Kathete?', explanation: 'b² = 169 − 25 = 144, b = 12 cm.', hint: 'Für eine Kathete: b² = c² − a².', unit: 'cm', commonMistakes: [{ value: 8, why: 'Sie haben die Seiten subtrahiert, nicht die Quadrate.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 0,
      verify: ['sqrt(5^2 - 3^2)', 4],
      al: {
        question: 'Një shkallë 5 m mbështetet në mur, me këmbën 3 m larg murit. Sa lart arrin?', options: ['4 m', '2 m', '8 m', '5,83 m'],
        explanation: 'Shkalla është hipotenuza: h = √(25 − 9) = 4 m.', hint: 'Cila brinjë është përballë këndit të drejtë?',
        whyWrong: [null, 'Zbritët gjatësitë, jo katrorët.', 'Mblodhët gjatësitë.', 'Mblodhët katrorët; shkalla është hipotenuza.'],
      },
      en: {
        question: 'A 5 m ladder leans against a wall with its foot 3 m from the wall. How high does it reach?', options: ['4 m', '2 m', '8 m', '5.83 m'],
        explanation: 'The ladder is the hypotenuse: h = √(25 − 9) = 4 m.', hint: 'Which side is opposite the right angle?',
        whyWrong: [null, 'You subtracted the lengths, not the squares.', 'You added the lengths.', 'You added the squares; the ladder is the hypotenuse.'],
      },
      de: {
        question: 'Eine 5 m lange Leiter lehnt an einer Wand, ihr Fuß steht 3 m davor. Wie hoch reicht sie?', options: ['4 m', '2 m', '8 m', '5,83 m'],
        explanation: 'Die Leiter ist die Hypotenuse: h = √(25 − 9) = 4 m.', hint: 'Welche Seite liegt dem rechten Winkel gegenüber?',
        whyWrong: [null, 'Sie haben die Längen subtrahiert, nicht die Quadrate.', 'Sie haben die Längen addiert.', 'Sie haben die Quadrate addiert; die Leiter ist die Hypotenuse.'],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: false,
      verify: ['7^2 + 8^2 == 11^2', false],
      al: { question: 'Trekëndëshi me brinjë 7, 8 dhe 11 është kënddrejtë.', explanation: 'E gabuar: 49 + 64 = 113, kurse 11² = 121.', hint: 'Krahasoni a² + b² me c².', whyWrong: '113 ≠ 121, pra trekëndëshi nuk është kënddrejtë.' },
      en: { question: 'The triangle with sides 7, 8 and 11 is right-angled.', explanation: 'False: 49 + 64 = 113, but 11² = 121.', hint: 'Compare a² + b² with c².', whyWrong: '113 ≠ 121, so the triangle is not right-angled.' },
      de: { question: 'Das Dreieck mit den Seiten 7, 8 und 11 ist rechtwinklig.', explanation: 'Falsch: 49 + 64 = 113, aber 11² = 121.', hint: 'Vergleichen Sie a² + b² mit c².', whyWrong: '113 ≠ 121, das Dreieck ist nicht rechtwinklig.' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 2,
      verify: ['sqrt(12^2 + 5^2)', 13],
      al: {
        question: 'Sa është diagonalja e drejtkëndëshit 12 cm × 5 cm?', options: ['17 cm', '7 cm', '13 cm', '60 cm'],
        explanation: 'd = √(144 + 25) = √169 = 13 cm.', hint: 'Diagonalja është hipotenuzë.',
        whyWrong: ['Mblodhët brinjët.', 'Zbritët brinjët.', null, 'Kjo është sipërfaqja.'],
      },
      en: {
        question: 'How long is the diagonal of a 12 cm × 5 cm rectangle?', options: ['17 cm', '7 cm', '13 cm', '60 cm'],
        explanation: 'd = √(144 + 25) = √169 = 13 cm.', hint: 'The diagonal is a hypotenuse.',
        whyWrong: ['You added the sides.', 'You subtracted the sides.', null, 'That is the area.'],
      },
      de: {
        question: 'Wie lang ist die Diagonale eines Rechtecks 12 cm × 5 cm?', options: ['17 cm', '7 cm', '13 cm', '60 cm'],
        explanation: 'd = √(144 + 25) = √169 = 13 cm.', hint: 'Die Diagonale ist eine Hypotenuse.',
        whyWrong: ['Sie haben die Seiten addiert.', 'Sie haben die Seiten subtrahiert.', null, 'Das ist der Flächeninhalt.'],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 40 },
      verify: ['sqrt(32^2 + 24^2)', 40],
      al: { question: 'Ekrani i një televizori është 32 cm × 24 cm. Sa cm është diagonalja?', explanation: 'd² = 1 024 + 576 = 1 600, d = 40 cm.', hint: 'd = √(a² + b²).', unit: 'cm', commonMistakes: [{ value: 56, why: 'Mblodhët brinjët.' }] },
      en: { question: 'A TV screen is 32 cm × 24 cm. How many cm is the diagonal?', explanation: 'd² = 1 024 + 576 = 1 600, d = 40 cm.', hint: 'd = √(a² + b²).', unit: 'cm', commonMistakes: [{ value: 56, why: 'You added the sides.' }] },
      de: { question: 'Ein Fernsehbildschirm ist 32 cm × 24 cm groß. Wie viele cm misst die Diagonale?', explanation: 'd² = 1 024 + 576 = 1 600, d = 40 cm.', hint: 'd = √(a² + b²).', unit: 'cm', commonMistakes: [{ value: 56, why: 'Sie haben die Seiten addiert.' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 12 },
      verify: ['sqrt(13^2 - 5^2)', 12],
      al: { question: 'Trekëndëshi barakrahës ka bazë 10 cm dhe krahë 13 cm. Sa cm është lartësia mbi bazë?', explanation: 'Lartësia e ndan bazën në 5 + 5: h = √(169 − 25) = 12 cm.', hint: 'Lartësia formon trekëndësh kënddrejtë me gjysmën e bazës.', unit: 'cm', commonMistakes: [{ value: 8.31, why: 'Përdorët gjithë bazën (10) në vend të gjysmës.' }] },
      en: { question: 'An isosceles triangle has base 10 cm and equal sides 13 cm. How many cm is the height to the base?', explanation: 'The height splits the base into 5 + 5: h = √(169 − 25) = 12 cm.', hint: 'The height forms a right triangle with half the base.', unit: 'cm', commonMistakes: [{ value: 8.31, why: 'You used the whole base (10) instead of half.' }] },
      de: { question: 'Ein gleichschenkliges Dreieck hat die Basis 10 cm und Schenkel von 13 cm. Wie viele cm misst die Höhe auf die Basis?', explanation: 'Die Höhe teilt die Basis in 5 + 5: h = √(169 − 25) = 12 cm.', hint: 'Die Höhe bildet mit der halben Basis ein rechtwinkliges Dreieck.', unit: 'cm', commonMistakes: [{ value: 8.31, why: 'Sie haben die ganze Basis (10) statt der Hälfte verwendet.' }] },
    },
  ],
};
