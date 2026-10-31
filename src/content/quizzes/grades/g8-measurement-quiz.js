// Grade 8 · Theme 3 quiz: Measurement (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g8-measurement-quiz',
  grade: 8,
  theme: 'g8-measurement',
  order: 3,
  difficulty: 'intermediate',
  icon: '◔',
  color: '#E9C46A',
  i18n: {
    al: { title: 'Matja', category: 'Klasa 8 · Tema 3', duration: '10 min' },
    en: { title: 'Measurement', category: 'Grade 8 · Theme 3', duration: '10 min' },
    de: { title: 'Messen', category: 'Klasse 8 · Thema 3', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 1,
      verify: ['90 / 360 * 2 * pi * 8', '4 * pi', 1e-9, '4π'],
      al: {
        question: 'Sa është gjatësia e harkut 90° në rrethin me rreze 8 cm?', options: ['8π cm', '4π cm', '16π cm', '2π cm'],
        explanation: 'l = 90/360 · 2π · 8 = 1/4 · 16π = 4π cm.', hint: '90° është 1/4 e rrethit.',
        whyWrong: ['Ky është gjysmërrethi (180°).', null, 'Ky është i gjithë perimetri.', 'Ky është harku i 45°.'],
      },
      en: {
        question: 'What is the length of a 90° arc in a circle with radius 8 cm?', options: ['8π cm', '4π cm', '16π cm', '2π cm'],
        explanation: 'l = 90/360 · 2π · 8 = 1/4 · 16π = 4π cm.', hint: '90° is 1/4 of the circle.',
        whyWrong: ['That is a semicircle (180°).', null, 'That is the whole circumference.', 'That is the 45° arc.'],
      },
      de: {
        question: 'Wie lang ist der 90°-Bogen in einem Kreis mit Radius 8 cm?', options: ['8π cm', '4π cm', '16π cm', '2π cm'],
        explanation: 'b = 90/360 · 2π · 8 = 1/4 · 16π = 4π cm.', hint: '90° ist 1/4 des Kreises.',
        whyWrong: ['Das ist ein Halbkreis (180°).', null, 'Das ist der ganze Umfang.', 'Das ist der 45°-Bogen.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 282.7, tolerance: 0.5 },
      verify: ['pi * 3^2 * 10', 282.7, 0.05],
      al: { question: 'Sa cm³ është vëllimi i cilindrit me r = 3 cm dhe h = 10 cm? (rrumbullakoni në një dhjetore)', explanation: 'V = π · 9 · 10 = 90π ≈ 282,7 cm³.', hint: 'V = πr²h.', unit: 'cm³', commonMistakes: [{ value: 188.5, why: 'Përdorët 2πr në vend të πr².' }, { value: 94.2, why: 'Harruat të ngrini rrezen në katror.' }] },
      en: { question: 'How many cm³ is the volume of a cylinder with r = 3 cm and h = 10 cm? (to one decimal place)', explanation: 'V = π · 9 · 10 = 90π ≈ 282.7 cm³.', hint: 'V = πr²h.', unit: 'cm³', commonMistakes: [{ value: 188.5, why: 'You used 2πr instead of πr².' }, { value: 94.2, why: 'You forgot to square the radius.' }] },
      de: { question: 'Wie viele cm³ beträgt das Volumen eines Zylinders mit r = 3 cm und h = 10 cm? (auf eine Dezimalstelle)', explanation: 'V = π · 9 · 10 = 90π ≈ 282,7 cm³.', hint: 'V = πr²h.', unit: 'cm³', commonMistakes: [{ value: 188.5, why: 'Sie haben 2πr statt πr² verwendet.' }, { value: 94.2, why: 'Der Radius wurde nicht quadriert.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: ['60 * 36 / 360 == 6', true],
      al: { question: 'Sipërfaqja e sektorit 60° me rreze 6 cm është 6π cm².', explanation: 'E vërtetë: 60/360 · π · 36 = 6π cm².', hint: 'S = α/360° · πr².', whyWrong: '1/6 · 36π = 6π.' },
      en: { question: 'The area of a 60° sector with radius 6 cm is 6π cm².', explanation: 'True: 60/360 · π · 36 = 6π cm².', hint: 'A = α/360° · πr².', whyWrong: '1/6 · 36π = 6π.' },
      de: { question: 'Der Flächeninhalt eines 60°-Kreisausschnitts mit Radius 6 cm ist 6π cm².', explanation: 'Richtig: 60/360 · π · 36 = 6π cm².', hint: 'A = α/360° · πr².', whyWrong: '1/6 · 36π = 6π.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 3,
      verify: ['10 + pi * 5', 25.7, 0.05, '25.7'],
      al: {
        question: 'Sa është perimetri i gjysmërrethit me diametër 10 cm?', options: ['≈ 15,7 cm', '≈ 31,4 cm', '≈ 20,7 cm', '≈ 25,7 cm'],
        explanation: 'Harku π · 10/2 ≈ 15,7 cm plus diametri 10 cm: ≈ 25,7 cm.', hint: 'Kufiri ka hark dhe diametër.',
        whyWrong: ['Ky është vetëm harku; mungon diametri.', 'Ky është perimetri i rrethit të plotë.', 'Shtuat rrezen (5) në vend të diametrit.', null],
      },
      en: {
        question: 'What is the perimeter of a semicircle with diameter 10 cm?', options: ['≈ 15.7 cm', '≈ 31.4 cm', '≈ 20.7 cm', '≈ 25.7 cm'],
        explanation: 'The arc π · 10/2 ≈ 15.7 cm plus the diameter 10 cm: ≈ 25.7 cm.', hint: 'The boundary has an arc and a diameter.',
        whyWrong: ['That is only the arc; the diameter is missing.', 'That is the full circle.', 'You added the radius (5) instead of the diameter.', null],
      },
      de: {
        question: 'Wie groß ist der Umfang eines Halbkreises mit Durchmesser 10 cm?', options: ['≈ 15,7 cm', '≈ 31,4 cm', '≈ 20,7 cm', '≈ 25,7 cm'],
        explanation: 'Bogen π · 10/2 ≈ 15,7 cm plus Durchmesser 10 cm: ≈ 25,7 cm.', hint: 'Der Rand besteht aus Bogen und Durchmesser.',
        whyWrong: ['Das ist nur der Bogen; der Durchmesser fehlt.', 'Das ist der ganze Kreis.', 'Sie haben den Radius (5) statt des Durchmessers addiert.', null],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 12.57, tolerance: 0.1 },
      verify: ['90 / 360 * pi * 4^2', 12.57, 0.01],
      al: { question: 'Sa cm² është sipërfaqja e sektorit 90° me rreze 4 cm? (dy dhjetore)', explanation: 'S = 1/4 · π · 16 = 4π ≈ 12,57 cm².', hint: 'S = α/360° · πr².', unit: 'cm²', commonMistakes: [{ value: 6.28, why: 'Kjo është gjatësia e harkut, jo sipërfaqja.' }, { value: 50.27, why: 'Kjo është sipërfaqja e qarkut të plotë.' }] },
      en: { question: 'How many cm² is the area of a 90° sector with radius 4 cm? (two decimal places)', explanation: 'A = 1/4 · π · 16 = 4π ≈ 12.57 cm².', hint: 'A = α/360° · πr².', unit: 'cm²', commonMistakes: [{ value: 6.28, why: 'That is the arc length, not the area.' }, { value: 50.27, why: 'That is the area of the whole circle.' }] },
      de: { question: 'Wie viele cm² hat ein 90°-Kreisausschnitt mit Radius 4 cm? (zwei Dezimalstellen)', explanation: 'A = 1/4 · π · 16 = 4π ≈ 12,57 cm².', hint: 'A = α/360° · πr².', unit: 'cm²', commonMistakes: [{ value: 6.28, why: 'Das ist die Bogenlänge, nicht die Fläche.' }, { value: 50.27, why: 'Das ist die ganze Kreisfläche.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 2,
      verify: ['8 * 6 / 2', 24],
      al: {
        question: 'Diagonalet e rombit janë 8 cm dhe 6 cm. Sa është sipërfaqja?', options: ['48 cm²', '14 cm²', '24 cm²', '28 cm²'],
        explanation: 'S = d₁ · d₂ / 2 = 48 / 2 = 24 cm².', hint: 'Gjysma e prodhimit të diagonaleve.',
        whyWrong: ['Harruat të pjesëtoni me 2.', 'Mblodhët diagonalet.', null, 'Shumëzuat shumën e diagonaleve me 2.'],
      },
      en: {
        question: 'The diagonals of a rhombus are 8 cm and 6 cm. What is its area?', options: ['48 cm²', '14 cm²', '24 cm²', '28 cm²'],
        explanation: 'A = d₁ · d₂ / 2 = 48 / 2 = 24 cm².', hint: 'Half the product of the diagonals.',
        whyWrong: ['You forgot to divide by 2.', 'You added the diagonals.', null, 'You doubled the sum of the diagonals.'],
      },
      de: {
        question: 'Die Diagonalen einer Raute sind 8 cm und 6 cm lang. Wie groß ist der Flächeninhalt?', options: ['48 cm²', '14 cm²', '24 cm²', '28 cm²'],
        explanation: 'A = e · f / 2 = 48 / 2 = 24 cm².', hint: 'Halbes Produkt der Diagonalen.',
        whyWrong: ['Die Division durch 2 fehlt.', 'Sie haben die Diagonalen addiert.', null, 'Sie haben die Summe der Diagonalen verdoppelt.'],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: false,
      verify: ['pi * 2^2 * 1 == 2 * pi * 1^2 * 1', false],
      al: { question: 'Nëse rrezja e cilindrit dyfishohet (h e njëjtë), edhe vëllimi dyfishohet.', explanation: 'E gabuar: r hyn në katror, pra vëllimi bëhet 2² = 4 herë më i madh.', hint: 'V = πr²h.', whyWrong: 'π(2r)²h = 4πr²h: katër herë, jo dy herë.' },
      en: { question: 'If the radius of a cylinder is doubled (same h), the volume is doubled too.', explanation: 'False: r is squared, so the volume becomes 2² = 4 times larger.', hint: 'V = πr²h.', whyWrong: 'π(2r)²h = 4πr²h: four times, not twice.' },
      de: { question: 'Verdoppelt man den Radius eines Zylinders (gleiches h), verdoppelt sich auch das Volumen.', explanation: 'Falsch: r steht im Quadrat, das Volumen wird also 2² = 4-mal so groß.', hint: 'V = πr²h.', whyWrong: 'π(2r)²h = 4πr²h: viermal, nicht doppelt.' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 0,
      verify: ['4 * 5 * 9 / 3', 60],
      al: {
        question: 'Piramida ka bazë drejtkëndësh 4 cm × 5 cm dhe lartësi 9 cm. Sa është vëllimi?', options: ['60 cm³', '180 cm³', '90 cm³', '20 cm³'],
        explanation: 'V = 20 · 9 / 3 = 60 cm³.', hint: 'V = B · h / 3.',
        whyWrong: [null, 'Harruat të pjesëtoni me 3.', 'Pjesëtuat me 2 në vend të 3.', 'Kjo është vetëm sipërfaqja e bazës.'],
      },
      en: {
        question: 'A pyramid has a 4 cm × 5 cm rectangular base and height 9 cm. What is its volume?', options: ['60 cm³', '180 cm³', '90 cm³', '20 cm³'],
        explanation: 'V = 20 · 9 / 3 = 60 cm³.', hint: 'V = B · h / 3.',
        whyWrong: [null, 'You forgot to divide by 3.', 'You divided by 2 instead of 3.', 'That is only the base area.'],
      },
      de: {
        question: 'Eine Pyramide hat eine rechteckige Grundfläche 4 cm × 5 cm und die Höhe 9 cm. Wie groß ist das Volumen?', options: ['60 cm³', '180 cm³', '90 cm³', '20 cm³'],
        explanation: 'V = 20 · 9 / 3 = 60 cm³.', hint: 'V = G · h / 3.',
        whyWrong: [null, 'Die Division durch 3 fehlt.', 'Sie haben durch 2 statt durch 3 geteilt.', 'Das ist nur die Grundfläche.'],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 90 },
      verify: ['10 * pi / (2 * pi * 20) * 360', 90],
      al: { question: 'Në rrethin me rreze 20 cm harku është 10π cm. Sa gradë është këndi qendror?', explanation: 'Perimetri 40π; 10π/40π = 1/4; 1/4 · 360° = 90°.', hint: 'α = l/(2πr) · 360°.', unit: '°', commonMistakes: [{ value: 180, why: 'Përdorët πr në vend të 2πr.' }] },
      en: { question: 'In a circle with radius 20 cm the arc is 10π cm. How many degrees is the angle at the centre?', explanation: 'Circumference 40π; 10π/40π = 1/4; 1/4 · 360° = 90°.', hint: 'α = l/(2πr) · 360°.', unit: '°', commonMistakes: [{ value: 180, why: 'You used πr instead of 2πr.' }] },
      de: { question: 'In einem Kreis mit Radius 20 cm ist der Bogen 10π cm lang. Wie viel Grad hat der Mittelpunktswinkel?', explanation: 'Umfang 40π; 10π/40π = 1/4; 1/4 · 360° = 90°.', hint: 'α = b/(2πr) · 360°.', unit: '°', commonMistakes: [{ value: 180, why: 'Sie haben πr statt 2πr verwendet.' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 388.5, tolerance: 0.5 },
      verify: ['200 + pi * 60', 388.5, 0.05],
      al: { question: 'Pista ka dy drejtëza 100 m dhe dy gjysmërrethë me diametër 60 m. Sa metra është një xhiro? (një dhjetore)', explanation: '2 · 100 + π · 60 ≈ 388,5 m.', hint: 'Dy gjysmërrethë = një rreth i plotë.', unit: 'm', commonMistakes: [{ value: 294.2, why: 'Gjysmërrethët bashkë bëjnë një rreth me diametër 60: π · 60.' }, { value: 577, why: 'Përdorët 60 si rreze, por është diametër.' }] },
      en: { question: 'A track has two 100 m straights and two semicircles of diameter 60 m. How many metres is one lap? (one decimal place)', explanation: '2 · 100 + π · 60 ≈ 388.5 m.', hint: 'Two semicircles = one full circle.', unit: 'm', commonMistakes: [{ value: 294.2, why: 'The two semicircles make one circle of diameter 60: π · 60.' }, { value: 577, why: 'You used 60 as the radius, but it is the diameter.' }] },
      de: { question: 'Eine Laufbahn hat zwei Geraden von 100 m und zwei Halbkreise mit 60 m Durchmesser. Wie viele Meter ist eine Runde? (eine Dezimalstelle)', explanation: '2 · 100 + π · 60 ≈ 388,5 m.', hint: 'Zwei Halbkreise = ein ganzer Kreis.', unit: 'm', commonMistakes: [{ value: 294.2, why: 'Die zwei Halbkreise ergeben einen Kreis mit 60 m Durchmesser: π · 60.' }, { value: 577, why: 'Sie haben 60 als Radius genommen, es ist aber der Durchmesser.' }] },
    },
  ],
};
