// Grade 10 · Theme 11 quiz: Circle and loci (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g10-circle-loci-quiz',
  grade: 10,
  theme: 'g10-circle-loci',
  order: 11,
  difficulty: 'intermediate',
  icon: '⭕',
  color: '#8338EC',
  i18n: {
    al: { title: 'Rrethi dhe vendet gjeometrike', category: 'Klasa 10 · Tema 11', duration: '10 min' },
    en: { title: 'Circle and loci', category: 'Grade 10 · Theme 11', duration: '10 min' },
    de: { title: 'Kreis und Ortslinien', category: 'Klasse 10 · Thema 11', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 3,
      verify: ['110 / 2', 55],
      al: {
        question: 'Këndi qendror mbi harkun AB është 110°. Sa është këndi periferik mbi të njëjtin hark?', options: ['110°', '220°', '70°', '55°'],
        explanation: 'Periferiku është gjysma e qendrorit: 110° : 2 = 55°.', hint: 'Periferik = qendror : 2.',
        whyWrong: ['Këndet nuk janë të barabarta.', 'U dyfishua në vend që të përgjysmohej.', 'Kjo është 180° − 110°.', null],
      },
      en: {
        question: 'The angle at the centre on arc AB is 110°. What is the angle at the circumference on the same arc?', options: ['110°', '220°', '70°', '55°'],
        explanation: 'It is half the angle at the centre: 110° ÷ 2 = 55°.', hint: 'Circumference angle = centre angle ÷ 2.',
        whyWrong: ['The angles are not equal.', 'It was doubled instead of halved.', 'That is 180° − 110°.', null],
      },
      de: {
        question: 'Der Mittelpunktswinkel über dem Bogen AB ist 110°. Wie groß ist der Umfangswinkel über demselben Bogen?', options: ['110°', '220°', '70°', '55°'],
        explanation: 'Er ist halb so groß: 110° : 2 = 55°.', hint: 'Umfangswinkel = Mittelpunktswinkel : 2.',
        whyWrong: ['Die Winkel sind nicht gleich groß.', 'Es wurde verdoppelt statt halbiert.', 'Das ist 180° − 110°.', null],
      },
    },
    {
      id: 2, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: 'text',
      al: { question: 'Këndi periferik mbi diametër është gjithmonë 90°.', explanation: 'E vërtetë: këndi qendror mbi diametër është 180°, gjysma e tij 90°.', hint: 'Këndi në gjysmërreth.', whyWrong: '180° : 2 = 90°.' },
      en: { question: 'The angle at the circumference standing on a diameter is always 90°.', explanation: 'True: the angle at the centre on a diameter is 180°, half of it is 90°.', hint: 'The angle in a semicircle.', whyWrong: '180° ÷ 2 = 90°.' },
      de: { question: 'Ein Umfangswinkel über einem Durchmesser ist immer 90°.', explanation: 'Richtig (Satz des Thales): Der Mittelpunktswinkel ist 180°, die Hälfte 90°.', hint: 'Winkel im Halbkreis.', whyWrong: '180° : 2 = 90°.' },
    },
    {
      id: 3, type: 'input', difficulty: 'easy', answer: { value: 6.28, tolerance: 0.01 }, unit: 'cm',
      verify: ['60/360 * 2 * pi * 6', 6.28, 0.01],
      al: { question: 'Sa është gjatësia e harkut me r = 6 cm dhe kënd qendror 60°? (2 dhjetore)', explanation: '60/360 · 2π · 6 = 2π ≈ 6,28 cm.', hint: 'l = α/360 · 2πr.', commonMistakes: [{ value: 18.85, why: 'U përdor πr² (syprina e sektorit).' }, { value: 12.57, why: 'U përdor diametri 12 si rreze.' }] },
      en: { question: 'What is the length of an arc with r = 6 cm and centre angle 60°? (2 d.p.)', explanation: '60/360 · 2π · 6 = 2π ≈ 6.28 cm.', hint: 'l = α/360 · 2πr.', commonMistakes: [{ value: 18.85, why: 'πr² was used (that is the sector area).' }, { value: 12.57, why: 'The diameter 12 was used as the radius.' }] },
      de: { question: 'Wie lang ist ein Bogen mit r = 6 cm und Mittelpunktswinkel 60°? (2 Dezimalstellen)', explanation: '60/360 · 2π · 6 = 2π ≈ 6,28 cm.', hint: 'b = α/360 · 2πr.', commonMistakes: [{ value: 18.85, why: 'Es wurde πr² verwendet (das ist die Sektorfläche).' }, { value: 12.57, why: 'Der Durchmesser 12 wurde als Radius genommen.' }] },
    },
    {
      id: 4, type: 'choice', difficulty: 'medium', correct: 0,
      verify: ['sqrt(13^2 - 5^2)', 12],
      al: {
        question: 'Nga pika P, me OP = 13 cm, hiqet tangjentja PT te rrethi me r = 5 cm. Sa është PT?', options: ['12 cm', '8 cm', '18 cm', '13,9 cm'],
        explanation: 'OT ⊥ PT: PT = √(13² − 5²) = √144 = 12 cm.', hint: 'Tangjentja është pingule me rrezen.',
        whyWrong: [null, 'Gjatësitë u zbritën direkt: 13 − 5.', 'Gjatësitë u mblodhën: 13 + 5.', 'Katrorët u mblodhën: OP është hipotenuza, jo katet.'],
      },
      en: {
        question: 'From a point P with OP = 13 cm, a tangent PT is drawn to a circle with r = 5 cm. How long is PT?', options: ['12 cm', '8 cm', '18 cm', '13.9 cm'],
        explanation: 'OT ⊥ PT: PT = √(13² − 5²) = √144 = 12 cm.', hint: 'The tangent is perpendicular to the radius.',
        whyWrong: [null, 'The lengths were subtracted directly: 13 − 5.', 'The lengths were added: 13 + 5.', 'The squares were added: OP is the hypotenuse, not a leg.'],
      },
      de: {
        question: 'Von einem Punkt P mit OP = 13 cm wird eine Tangente PT an einen Kreis mit r = 5 cm gelegt. Wie lang ist PT?', options: ['12 cm', '8 cm', '18 cm', '13,9 cm'],
        explanation: 'OT ⊥ PT: PT = √(13² − 5²) = √144 = 12 cm.', hint: 'Die Tangente steht senkrecht auf dem Radius.',
        whyWrong: [null, 'Die Längen wurden direkt subtrahiert: 13 − 5.', 'Die Längen wurden addiert: 13 + 5.', 'Die Quadrate wurden addiert: OP ist die Hypotenuse, keine Kathete.'],
      },
    },
    {
      id: 5, type: 'choice', difficulty: 'medium', correct: 2,
      verify: ['180 - 75', 105],
      al: {
        question: 'Në katërkëndëshin kordal ABCD, ∠A = 75°. Sa është ∠C?', options: ['75°', '15°', '105°', '285°'],
        explanation: 'Këndet e kundërta kanë shumën 180°: 180° − 75° = 105°.', hint: 'Këndet e kundërta në katërkëndëshin kordal.',
        whyWrong: ['Këndet e kundërta nuk janë të barabarta, por plotësuese.', 'Kjo është 90° − 75°.', null, 'Kjo është 360° − 75°.'],
      },
      en: {
        question: 'In the cyclic quadrilateral ABCD, ∠A = 75°. What is ∠C?', options: ['75°', '15°', '105°', '285°'],
        explanation: 'Opposite angles add up to 180°: 180° − 75° = 105°.', hint: 'Opposite angles of a cyclic quadrilateral.',
        whyWrong: ['Opposite angles are not equal, they are supplementary.', 'That is 90° − 75°.', null, 'That is 360° − 75°.'],
      },
      de: {
        question: 'Im Sehnenviereck ABCD ist ∠A = 75°. Wie groß ist ∠C?', options: ['75°', '15°', '105°', '285°'],
        explanation: 'Gegenüberliegende Winkel ergeben 180°: 180° − 75° = 105°.', hint: 'Gegenüberliegende Winkel im Sehnenviereck.',
        whyWrong: ['Gegenüberliegende Winkel sind nicht gleich, sie ergänzen sich zu 180°.', 'Das ist 90° − 75°.', null, 'Das ist 360° − 75°.'],
      },
    },
    {
      id: 6, type: 'input', difficulty: 'medium', answer: { value: 62.83, tolerance: 0.01 }, unit: 'cm²',
      verify: ['72/360 * pi * 10^2', 62.83, 0.01],
      al: { question: 'Sa është syprina e sektorit me r = 10 cm dhe kënd qendror 72°? (2 dhjetore)', explanation: '72/360 · π · 100 = 20π ≈ 62,83 cm².', hint: 'S = α/360 · πr².', commonMistakes: [{ value: 12.57, why: 'Kjo është gjatësia e harkut.' }, { value: 314.16, why: 'Kjo është syprina e gjithë rrethit.' }] },
      en: { question: 'What is the area of a sector with r = 10 cm and centre angle 72°? (2 d.p.)', explanation: '72/360 · π · 100 = 20π ≈ 62.83 cm².', hint: 'A = α/360 · πr².', commonMistakes: [{ value: 12.57, why: 'That is the arc length.' }, { value: 314.16, why: 'That is the area of the whole circle.' }] },
      de: { question: 'Wie groß ist ein Sektor mit r = 10 cm und Mittelpunktswinkel 72°? (2 Dezimalstellen)', explanation: '72/360 · π · 100 = 20π ≈ 62,83 cm².', hint: 'A = α/360 · πr².', commonMistakes: [{ value: 12.57, why: 'Das ist die Bogenlänge.' }, { value: 314.16, why: 'Das ist die Fläche des ganzen Kreises.' }] },
    },
    {
      id: 7, type: 'choice', difficulty: 'medium', correct: 1,
      verify: 'text',
      al: {
        question: 'Cili është vendi gjeometrik i pikave që janë njësoj larg nga pikat A dhe B?', options: ['mesi i segmentit AB', 'simetralja e segmentit AB', 'rrethi me diametër AB', 'drejtëza AB'],
        explanation: 'Të gjitha pikat njësoj larg nga A dhe B shtrihen në simetralen e AB.', hint: 'Jo vetëm një pikë.',
        whyWrong: ['Mesi është vetëm njëra nga këto pika.', null, 'Pikat e këtij rrethi zakonisht nuk janë njësoj larg nga A dhe B.', 'Në drejtëzën AB vetëm mesi plotëson kushtin.'],
      },
      en: {
        question: 'What is the locus of points that are the same distance from A and B?', options: ['the midpoint of AB', 'the perpendicular bisector of AB', 'the circle with diameter AB', 'the line AB'],
        explanation: 'All points equidistant from A and B lie on the perpendicular bisector of AB.', hint: 'Not just one point.',
        whyWrong: ['The midpoint is only one of these points.', null, 'Points on that circle are usually not equidistant from A and B.', 'On the line AB only the midpoint works.'],
      },
      de: {
        question: 'Welche Ortslinie bilden alle Punkte, die von A und B gleich weit entfernt sind?', options: ['der Mittelpunkt von AB', 'die Mittelsenkrechte von AB', 'der Kreis mit Durchmesser AB', 'die Gerade AB'],
        explanation: 'Alle Punkte mit gleichem Abstand von A und B liegen auf der Mittelsenkrechten von AB.', hint: 'Nicht nur ein Punkt.',
        whyWrong: ['Der Mittelpunkt ist nur einer dieser Punkte.', null, 'Punkte dieses Kreises sind meist nicht gleich weit von A und B entfernt.', 'Auf der Geraden AB erfüllt nur der Mittelpunkt die Bedingung.'],
      },
    },
    {
      id: 8, type: 'choice', difficulty: 'hard', correct: 3,
      verify: ['(180 - 130) / 2', 25],
      al: {
        question: 'O është qendra, A dhe B pika në rreth, ∠AOB = 130°. Sa është ∠OAB?', options: ['130°', '50°', '65°', '25°'],
        explanation: 'OA = OB, pra trekëndëshi është dybrinjënjëshëm: (180° − 130°) : 2 = 25°.', hint: 'Dy rreze janë të barabarta.',
        whyWrong: ['Ky është këndi në qendër.', 'Kjo është 180° − 130°, pa e ndarë në dy kënde.', 'Kjo është gjysma e 130° (këndi periferik), jo ∠OAB.', null],
      },
      en: {
        question: 'O is the centre, A and B are on the circle, ∠AOB = 130°. What is ∠OAB?', options: ['130°', '50°', '65°', '25°'],
        explanation: 'OA = OB, so the triangle is isosceles: (180° − 130°) ÷ 2 = 25°.', hint: 'Two radii are equal.',
        whyWrong: ['That is the angle at the centre.', 'That is 180° − 130°, not shared between two angles.', 'That is half of 130° (an angle at the circumference), not ∠OAB.', null],
      },
      de: {
        question: 'O ist der Mittelpunkt, A und B liegen auf dem Kreis, ∠AOB = 130°. Wie groß ist ∠OAB?', options: ['130°', '50°', '65°', '25°'],
        explanation: 'OA = OB, das Dreieck ist gleichschenklig: (180° − 130°) : 2 = 25°.', hint: 'Zwei Radien sind gleich lang.',
        whyWrong: ['Das ist der Mittelpunktswinkel.', 'Das ist 180° − 130°, nicht auf zwei Winkel verteilt.', 'Das ist die Hälfte von 130° (ein Umfangswinkel), nicht ∠OAB.', null],
      },
    },
    {
      id: 9, type: 'truefalse', difficulty: 'hard', correct: false,
      verify: 'text',
      al: { question: 'Pikat njësoj larg nga dy drejtëza që priten shtrihen në simetralen e një segmenti.', explanation: 'E gabuar: ato shtrihen në përgjysmoret e këndeve midis drejtëzave.', hint: 'Largësia nga një drejtëz, jo nga një pikë.', whyWrong: 'Njësoj larg nga dy drejtëza → përgjysmorja e këndit.' },
      en: { question: 'The points the same distance from two intersecting lines lie on the perpendicular bisector of a segment.', explanation: 'False: they lie on the bisectors of the angles between the lines.', hint: 'Distance from a line, not from a point.', whyWrong: 'Equidistant from two lines → the angle bisector.' },
      de: { question: 'Die Punkte, die von zwei sich schneidenden Geraden gleich weit entfernt sind, liegen auf der Mittelsenkrechten einer Strecke.', explanation: 'Falsch: Sie liegen auf den Winkelhalbierenden der Winkel zwischen den Geraden.', hint: 'Abstand von einer Geraden, nicht von einem Punkt.', whyWrong: 'Gleich weit von zwei Geraden → Winkelhalbierende.' },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 37.7, tolerance: 0.01 }, unit: 'm²',
      verify: ['3/4 * pi * 4^2', 37.7, 0.01],
      al: { question: 'Një qen është lidhur me litar 4 m te këndi i jashtëm i një depoje drejtkëndëshe; depoja i zë 1/4 e rrethit. Sa m² mund të arrijë qeni? (2 dhjetore)', explanation: '3/4 · π · 4² = 12π ≈ 37,70 m².', hint: 'Mbeten 3/4 e rrethit.', commonMistakes: [{ value: 50.27, why: 'Kjo është syprina e gjithë rrethit; depoja zë një çerek.' }, { value: 12.57, why: 'Ky është vetëm çereku që zë depoja.' }] },
      en: { question: 'A dog is tied with a 4 m rope to the outside corner of a rectangular shed; the shed takes up 1/4 of the circle. How many m² can the dog reach? (2 d.p.)', explanation: '3/4 · π · 4² = 12π ≈ 37.70 m².', hint: '3/4 of the circle is left.', commonMistakes: [{ value: 50.27, why: 'That is the whole circle; the shed takes a quarter.' }, { value: 12.57, why: 'That is only the quarter the shed takes up.' }] },
      de: { question: 'Ein Hund ist mit einem 4 m langen Seil an die äußere Ecke eines rechteckigen Schuppens gebunden; der Schuppen nimmt 1/4 des Kreises ein. Wie viele m² erreicht der Hund? (2 Dezimalstellen)', explanation: '3/4 · π · 4² = 12π ≈ 37,70 m².', hint: 'Es bleiben 3/4 des Kreises.', commonMistakes: [{ value: 50.27, why: 'Das ist der ganze Kreis; der Schuppen nimmt ein Viertel ein.' }, { value: 12.57, why: 'Das ist nur das Viertel, das der Schuppen einnimmt.' }] },
    },
  ],
};
