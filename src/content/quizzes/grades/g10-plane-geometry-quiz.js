// Grade 10 · Theme 7 quiz: Plane geometry (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g10-plane-geometry-quiz',
  grade: 10,
  theme: 'g10-plane-geometry',
  order: 7,
  difficulty: 'intermediate',
  icon: '◯',
  color: '#457B9D',
  i18n: {
    al: { title: 'Gjeometria në plan', category: 'Klasa 10 · Tema 7', duration: '10 min' },
    en: { title: 'Plane geometry', category: 'Grade 10 · Theme 7', duration: '10 min' },
    de: { title: 'Ebene Geometrie', category: 'Klasse 10 · Thema 7', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 1,
      verify: ['pi * 7^2', '49 * pi', 1e-9, '49π'],
      al: {
        question: 'Sa është sipërfaqja e qarkut me rreze 7 cm?', options: ['14π cm²', '49π cm²', '7π cm²', '98π cm²'],
        explanation: 'πr² = 49π ≈ 153,9 cm².', hint: 'S = πr².',
        whyWrong: ['Ky është perimetri 2πr.', null, 'Rrezja duhet ngritur në katror.', 'Ky është 2πr².'],
      },
      en: {
        question: 'What is the area of a circle with radius 7 cm?', options: ['14π cm²', '49π cm²', '7π cm²', '98π cm²'],
        explanation: 'πr² = 49π ≈ 153.9 cm².', hint: 'A = πr².',
        whyWrong: ['That is the circumference 2πr.', null, 'The radius must be squared.', 'That is 2πr².'],
      },
      de: {
        question: 'Wie groß ist die Fläche eines Kreises mit Radius 7 cm?', options: ['14π cm²', '49π cm²', '7π cm²', '98π cm²'],
        explanation: 'πr² = 49π ≈ 153,9 cm².', hint: 'A = πr².',
        whyWrong: ['Das ist der Umfang 2πr.', null, 'Der Radius muss quadriert werden.', 'Das ist 2πr².'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 24000 },
      verify: ['2.4 * 10000', 24000],
      al: { question: 'Sa cm² janë 2,4 m²?', explanation: '1 m² = 10 000 cm²; 2,4 · 10 000 = 24 000.', hint: 'Faktori për sipërfaqe është 100².', unit: 'cm²', commonMistakes: [{ value: 240, why: 'Për sipërfaqe faktori është 10 000, jo 100.' }] },
      en: { question: 'How many cm² are 2.4 m²?', explanation: '1 m² = 10 000 cm²; 2.4 · 10 000 = 24 000.', hint: 'The area factor is 100².', unit: 'cm²', commonMistakes: [{ value: 240, why: 'For area the factor is 10 000, not 100.' }] },
      de: { question: 'Wie viele cm² sind 2,4 m²?', explanation: '1 m² = 10 000 cm²; 2,4 · 10 000 = 24 000.', hint: 'Der Flächenfaktor ist 100².', unit: 'cm²', commonMistakes: [{ value: 240, why: 'Bei Flächen ist der Faktor 10 000, nicht 100.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: ['1 + 2 == 3 and 1 - 3 == -2', true],
      al: { question: 'Zhvendosja me vektorin (2, −3) e çon pikën (1, 1) në (3, −2).', explanation: 'E vërtetë: (1 + 2, 1 − 3) = (3, −2).', hint: 'Shtoni vektorin.', whyWrong: 'x + 2 dhe y − 3.' },
      en: { question: 'The translation by the vector (2, −3) takes the point (1, 1) to (3, −2).', explanation: 'True: (1 + 2, 1 − 3) = (3, −2).', hint: 'Add the vector.', whyWrong: 'x + 2 and y − 3.' },
      de: { question: 'Die Verschiebung um (2 | −3) bildet (1 | 1) auf (3 | −2) ab.', explanation: 'Richtig: (1 + 2 | 1 − 3) = (3 | −2).', hint: 'Den Vektor addieren.', whyWrong: 'x + 2 und y − 3.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 2,
      verify: ['60 + 180', 240],
      al: {
        question: 'Azimuti i B nga A është 060°. Sa është azimuti i A nga B?', options: ['120°', '300°', '240°', '060°'],
        explanation: '060° + 180° = 240°.', hint: 'Drejtimi i kundërt: ± 180°.',
        whyWrong: ['Kjo është 180° − 60°.', 'Kjo është 360° − 60°.', null, 'Drejtimi i kthimit ndryshon me 180°.'],
      },
      en: {
        question: 'The bearing of B from A is 060°. What is the bearing of A from B?', options: ['120°', '300°', '240°', '060°'],
        explanation: '060° + 180° = 240°.', hint: 'The opposite direction: ± 180°.',
        whyWrong: ['That is 180° − 60°.', 'That is 360° − 60°.', null, 'The back bearing differs by 180°.'],
      },
      de: {
        question: 'Der Kurs von A nach B ist 060°. Wie lautet der Kurs von B nach A?', options: ['120°', '300°', '240°', '060°'],
        explanation: '060° + 180° = 240°.', hint: 'Entgegengesetzte Richtung: ± 180°.',
        whyWrong: ['Das ist 180° − 60°.', 'Das ist 360° − 60°.', null, 'Der Gegenkurs unterscheidet sich um 180°.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 74.14, tolerance: 0.05 },
      verify: ['10 * 6 + 0.5 * pi * 3^2', 74.14, 0.005],
      al: { question: 'Drejtkëndëshi 10 × 6 cm ka një gjysmërreth me diametër 6 cm në njërën anë. Sa cm² është sipërfaqja gjithsej? (dy dhjetore)', explanation: '60 + ½π · 3² ≈ 74,14 cm².', hint: 'r = 3.', unit: 'cm²', commonMistakes: [{ value: 116.55, why: 'Përdorët r = 6.' }, { value: 88.27, why: 'U shtua qarku i plotë, jo gjysma.' }] },
      en: { question: 'A 10 × 6 cm rectangle has a semicircle of diameter 6 cm on one side. How many cm² is the total area? (two decimal places)', explanation: '60 + ½π · 3² ≈ 74.14 cm².', hint: 'r = 3.', unit: 'cm²', commonMistakes: [{ value: 116.55, why: 'You used r = 6.' }, { value: 88.27, why: 'You added the full circle, not half.' }] },
      de: { question: 'Ein Rechteck 10 × 6 cm hat an einer Seite einen Halbkreis mit 6 cm Durchmesser. Wie viele cm² beträgt die Gesamtfläche? (zwei Dezimalen)', explanation: '60 + ½π · 3² ≈ 74,14 cm².', hint: 'r = 3.', unit: 'cm²', commonMistakes: [{ value: 116.55, why: 'Sie haben r = 6 verwendet.' }, { value: 88.27, why: 'Sie haben den ganzen Kreis addiert, nicht den halben.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 0,
      verify: 'text',
      al: {
        question: 'Rrotulloni pikën (2, 5) me 180° rreth origjinës.', options: ['(−2, −5)', '(5, 2)', '(−5, 2)', '(2, −5)'],
        explanation: '180°: (x, y) → (−x, −y).', hint: 'Ndryshojnë të dyja shenjat.',
        whyWrong: [null, 'Ky është pasqyrimi në y = x.', 'Ky është rrotullimi 90°.', 'Ky është pasqyrimi në boshtin x.'],
      },
      en: {
        question: 'Rotate the point (2, 5) by 180° about the origin.', options: ['(−2, −5)', '(5, 2)', '(−5, 2)', '(2, −5)'],
        explanation: '180°: (x, y) → (−x, −y).', hint: 'Both signs change.',
        whyWrong: [null, 'That is the reflection in y = x.', 'That is the 90° rotation.', 'That is the reflection in the x-axis.'],
      },
      de: {
        question: 'Drehen Sie den Punkt (2 | 5) um 180° um den Ursprung.', options: ['(−2 | −5)', '(5 | 2)', '(−5 | 2)', '(2 | −5)'],
        explanation: '180°: (x | y) → (−x | −y).', hint: 'Beide Vorzeichen ändern sich.',
        whyWrong: [null, 'Das ist die Spiegelung an y = x.', 'Das ist die Drehung um 90°.', 'Das ist die Spiegelung an der x-Achse.'],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: false,
      verify: ['100^2 == 100', false],
      al: { question: '1 m² = 100 cm²', explanation: 'E gabuar: 1 m² = 100 cm · 100 cm = 10 000 cm².', hint: 'Një katror 1 m × 1 m.', whyWrong: 'Faktori i gjatësisë ngrihet në katror.' },
      en: { question: '1 m² = 100 cm²', explanation: 'False: 1 m² = 100 cm · 100 cm = 10 000 cm².', hint: 'A 1 m × 1 m square.', whyWrong: 'The length factor is squared.' },
      de: { question: '1 m² = 100 cm²', explanation: 'Falsch: 1 m² = 100 cm · 100 cm = 10 000 cm².', hint: 'Ein Quadrat 1 m × 1 m.', whyWrong: 'Der Längenfaktor wird quadriert.' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 3,
      verify: ['pi * (5^2 - 3^2)', '16 * pi', 1e-9, '16π'],
      al: {
        question: 'Sa është sipërfaqja e unazës me R = 5 cm dhe r = 3 cm?', options: ['4π cm²', '2π cm²', '34π cm²', '16π cm²'],
        explanation: 'π(25 − 9) = 16π cm².', hint: 'Qarku i madh minus i vogli.',
        whyWrong: ['Kjo është π(5 − 3)², jo π(R² − r²).', 'Kjo është π(5 − 3).', 'Sipërfaqet mblodhët në vend që t\'i zbritni.', null],
      },
      en: {
        question: 'What is the area of a ring with R = 5 cm and r = 3 cm?', options: ['4π cm²', '2π cm²', '34π cm²', '16π cm²'],
        explanation: 'π(25 − 9) = 16π cm².', hint: 'Big circle minus small circle.',
        whyWrong: ['That is π(5 − 3)², not π(R² − r²).', 'That is π(5 − 3).', 'You added the areas instead of subtracting.', null],
      },
      de: {
        question: 'Wie groß ist die Fläche eines Kreisrings mit R = 5 cm und r = 3 cm?', options: ['4π cm²', '2π cm²', '34π cm²', '16π cm²'],
        explanation: 'π(25 − 9) = 16π cm².', hint: 'Großer Kreis minus kleiner Kreis.',
        whyWrong: ['Das ist π(5 − 3)², nicht π(R² − r²).', 'Das ist π(5 − 3).', 'Sie haben die Flächen addiert statt subtrahiert.', null],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 750 },
      verify: ['0.75 * 1000', 750],
      al: { question: 'Sa litra janë 0,75 m³?', explanation: '1 m³ = 1 000 l; 0,75 · 1 000 = 750 l.', hint: '1 l = 1 dm³.', unit: 'l', commonMistakes: [{ value: 75, why: '1 m³ = 1 000 l, jo 100 l.' }, { value: 750000, why: 'Kjo është në cm³, jo në litra.' }] },
      en: { question: 'How many litres are 0.75 m³?', explanation: '1 m³ = 1 000 l; 0.75 · 1 000 = 750 l.', hint: '1 l = 1 dm³.', unit: 'l', commonMistakes: [{ value: 75, why: '1 m³ = 1 000 l, not 100 l.' }, { value: 750000, why: 'That is in cm³, not litres.' }] },
      de: { question: 'Wie viele Liter sind 0,75 m³?', explanation: '1 m³ = 1 000 l; 0,75 · 1 000 = 750 l.', hint: '1 l = 1 dm³.', unit: 'l', commonMistakes: [{ value: 75, why: '1 m³ = 1 000 l, nicht 100 l.' }, { value: 750000, why: 'Das ist in cm³, nicht in Litern.' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 50 },
      verify: ['(8 + 12) / 2 * 5', 50],
      al: { question: 'Trapezi ka bazat 8 cm dhe 12 cm dhe lartësinë 5 cm. Sa cm² është sipërfaqja?', explanation: '(8 + 12)/2 · 5 = 50 cm².', hint: 'Mesatarja e bazave herë lartësia.', unit: 'cm²', commonMistakes: [{ value: 100, why: 'Harruat të pjesëtoni me 2.' }, { value: 480, why: 'Bazat mblidhen, nuk shumëzohen.' }] },
      en: { question: 'A trapezium has parallel sides 8 cm and 12 cm and height 5 cm. How many cm² is its area?', explanation: '(8 + 12)/2 · 5 = 50 cm².', hint: 'The mean of the parallel sides times the height.', unit: 'cm²', commonMistakes: [{ value: 100, why: 'You forgot to divide by 2.' }, { value: 480, why: 'The parallel sides are added, not multiplied.' }] },
      de: { question: 'Ein Trapez hat die parallelen Seiten 8 cm und 12 cm und die Höhe 5 cm. Wie viele cm² hat es?', explanation: '(8 + 12)/2 · 5 = 50 cm².', hint: 'Mittel der parallelen Seiten mal Höhe.', unit: 'cm²', commonMistakes: [{ value: 100, why: 'Die Division durch 2 fehlt.' }, { value: 480, why: 'Die parallelen Seiten werden addiert, nicht multipliziert.' }] },
    },
  ],
};
