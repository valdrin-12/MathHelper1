// Grade 11 · Theme 7 quiz: Pythagoras, trigonometry and vectors (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g11-pythagoras-trig-vectors-quiz',
  grade: 11,
  theme: 'g11-pythagoras-trig-vectors',
  order: 7,
  difficulty: 'advanced',
  icon: '📐',
  color: '#2A9D8F',
  i18n: {
    al: { title: 'Pitagora, trigonometria dhe vektorët', category: 'Klasa 11 · Tema 7', duration: '12 min' },
    en: { title: 'Pythagoras, trigonometry and vectors', category: 'Grade 11 · Theme 7', duration: '12 min' },
    de: { title: 'Pythagoras, Trigonometrie und Vektoren', category: 'Klasse 11 · Thema 7', duration: '12 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 1,
      verify: ['sqrt(6^2 + 8^2)', 10],
      al: {
        question: 'Katetet janë 6 cm dhe 8 cm. Sa është hipotenuza?', options: ['14 cm', '10 cm', '√28 cm', '48 cm'],
        explanation: '√(36 + 64) = √100 = 10 cm.', hint: 'a² + b² = c².',
        whyWrong: ['Katetet u mblodhën pa i ngritur në katror.', null, 'U nxor rrënja e 6 + 8, pa katrorët.', 'Kjo është 6 · 8.'],
      },
      en: {
        question: 'The legs are 6 cm and 8 cm. How long is the hypotenuse?', options: ['14 cm', '10 cm', '√28 cm', '48 cm'],
        explanation: '√(36 + 64) = √100 = 10 cm.', hint: 'a² + b² = c².',
        whyWrong: ['The legs were added without squaring.', null, 'The root of 6 + 8 was taken, without squares.', 'That is 6 · 8.'],
      },
      de: {
        question: 'Die Katheten sind 6 cm und 8 cm lang. Wie lang ist die Hypotenuse?', options: ['14 cm', '10 cm', '√28 cm', '48 cm'],
        explanation: '√(36 + 64) = √100 = 10 cm.', hint: 'a² + b² = c².',
        whyWrong: ['Die Katheten wurden ohne Quadrieren addiert.', null, 'Es wurde die Wurzel aus 6 + 8 gezogen, ohne Quadrate.', 'Das ist 6 · 8.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 4.8 }, unit: 'm',
      verify: ['sqrt(25 - 1.96)', 4.8],
      al: { question: 'Një shkallë 5 m mbështetet në mur me këmbën 1,4 m larg murit. Në çfarë lartësie arrin?', explanation: '√(25 − 1,96) = √23,04 = 4,8 m.', hint: 'Shkalla është hipotenuza.', commonMistakes: [{ value: 5.19, why: 'Katrorët u mblodhën; shkalla është hipotenuza.' }, { value: 3.6, why: 'Gjatësitë u zbritën direkt: 5 − 1,4.' }] },
      en: { question: 'A 5 m ladder leans on a wall with its foot 1.4 m from the wall. How high does it reach?', explanation: '√(25 − 1.96) = √23.04 = 4.8 m.', hint: 'The ladder is the hypotenuse.', commonMistakes: [{ value: 5.19, why: 'The squares were added; the ladder is the hypotenuse.' }, { value: 3.6, why: 'The lengths were subtracted directly: 5 − 1.4.' }] },
      de: { question: 'Eine 5 m lange Leiter lehnt an einer Wand, ihr Fuß steht 1,4 m von der Wand entfernt. Wie hoch reicht sie?', explanation: '√(25 − 1,96) = √23,04 = 4,8 m.', hint: 'Die Leiter ist die Hypotenuse.', commonMistakes: [{ value: 5.19, why: 'Die Quadrate wurden addiert; die Leiter ist die Hypotenuse.' }, { value: 3.6, why: 'Die Längen wurden direkt subtrahiert: 5 − 1,4.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: ['9^2 + 40^2 == 41^2', true],
      al: { question: 'Trekëndëshi me brinjë 9, 40 dhe 41 është kënddrejtë.', explanation: 'E vërtetë: 81 + 1 600 = 1 681 = 41².', hint: 'E anasjellta e Pitagorës.', whyWrong: '9² + 40² = 41².' },
      en: { question: 'The triangle with sides 9, 40 and 41 is right-angled.', explanation: 'True: 81 + 1 600 = 1 681 = 41².', hint: 'The converse of Pythagoras.', whyWrong: '9² + 40² = 41².' },
      de: { question: 'Das Dreieck mit den Seiten 9, 40 und 41 ist rechtwinklig.', explanation: 'Richtig: 81 + 1 600 = 1 681 = 41².', hint: 'Umkehrung des Pythagoras.', whyWrong: '9² + 40² = 41².' },
    },
    {
      id: 4, type: 'choice', difficulty: 'medium', correct: 0,
      verify: ['10 * sin(35 deg)', 5.74, 0.005],
      al: {
        question: 'Hipotenuza është 10 cm dhe këndi 35°. Sa është kateti përballë këndit?', options: ['5,74 cm', '8,19 cm', '7,00 cm', '−4,28 cm'],
        explanation: '10 · sin 35° ≈ 5,74 cm.', hint: 'E kundërt dhe hipotenuzë → sin.',
        whyWrong: [null, 'Ky është kateti i afërt: 10 · cos 35°.', 'U përdor tg: 10 · tg 35°.', 'Makina ishte në radianë.'],
      },
      en: {
        question: 'The hypotenuse is 10 cm and the angle is 35°. How long is the side opposite the angle?', options: ['5.74 cm', '8.19 cm', '7.00 cm', '−4.28 cm'],
        explanation: '10 · sin 35° ≈ 5.74 cm.', hint: 'Opposite and hypotenuse → sin.',
        whyWrong: [null, 'That is the adjacent side: 10 · cos 35°.', 'tan was used: 10 · tan 35°.', 'The calculator was in radians.'],
      },
      de: {
        question: 'Die Hypotenuse ist 10 cm, der Winkel 35°. Wie lang ist die Gegenkathete?', options: ['5,74 cm', '8,19 cm', '7,00 cm', '−4,28 cm'],
        explanation: '10 · sin 35° ≈ 5,74 cm.', hint: 'Gegenkathete und Hypotenuse → sin.',
        whyWrong: [null, 'Das ist die Ankathete: 10 · cos 35°.', 'Es wurde tan verwendet: 10 · tan 35°.', 'Der Rechner stand auf Bogenmaß.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 6.24, tolerance: 0.01 },
      verify: ['sqrt(49 + 25 - 70 * cos(60 deg))', 6.24, 0.01],
      al: { question: 'Në trekëndëshin ABC, a = 7, b = 5, C = 60°. Gjeni c (2 dhjetore).', explanation: 'c² = 49 + 25 − 35 = 39 → c ≈ 6,24.', hint: 'Teorema e kosinusit.', commonMistakes: [{ value: 8.6, why: 'U harrua termi −2ab · cos C: √74.' }, { value: 2, why: 'U harrua cos C: √(74 − 70) = 2.' }] },
      en: { question: 'In triangle ABC, a = 7, b = 5, C = 60°. Find c (2 d.p.).', explanation: 'c² = 49 + 25 − 35 = 39 → c ≈ 6.24.', hint: 'The cosine rule.', commonMistakes: [{ value: 8.6, why: 'The term −2ab · cos C was forgotten: √74.' }, { value: 2, why: 'cos C was forgotten: √(74 − 70) = 2.' }] },
      de: { question: 'Im Dreieck ABC ist a = 7, b = 5, γ = 60°. Berechnen Sie c (2 Dezimalstellen).', explanation: 'c² = 49 + 25 − 35 = 39 → c ≈ 6,24.', hint: 'Kosinussatz.', commonMistakes: [{ value: 8.6, why: 'Der Term −2ab · cos γ fehlt: √74.' }, { value: 2, why: 'cos γ wurde vergessen: √(74 − 70) = 2.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 3,
      verify: ['3 + 2*4', 11],
      al: {
        question: 'a = (2, 3), b = (−1, 4). Sa është a + 2b?', options: ['(1, 7)', '(4, 11)', '(0, 7)', '(0, 11)'],
        explanation: '2b = (−2, 8); a + 2b = (0, 11).', hint: 'Shumëzoni të dyja koordinatat e b me 2.',
        whyWrong: ['Kjo është a + b, pa e dyfishuar b.', 'U harrua shenja minus te −1.', 'U dyfishua vetëm koordinata e parë e b.', null],
      },
      en: {
        question: 'a = (2, 3), b = (−1, 4). What is a + 2b?', options: ['(1, 7)', '(4, 11)', '(0, 7)', '(0, 11)'],
        explanation: '2b = (−2, 8); a + 2b = (0, 11).', hint: 'Multiply both components of b by 2.',
        whyWrong: ['That is a + b, with b not doubled.', 'The minus sign of −1 was lost.', 'Only the first component of b was doubled.', null],
      },
      de: {
        question: 'a = (2 | 3), b = (−1 | 4). Wie lautet a + 2b?', options: ['(1 | 7)', '(4 | 11)', '(0 | 7)', '(0 | 11)'],
        explanation: '2b = (−2 | 8); a + 2b = (0 | 11).', hint: 'Beide Koordinaten von b mit 2 multiplizieren.',
        whyWrong: ['Das ist a + b, b wurde nicht verdoppelt.', 'Das Minus von −1 ging verloren.', 'Nur die erste Koordinate von b wurde verdoppelt.', null],
      },
    },
    {
      id: 7, type: 'choice', difficulty: 'medium', correct: 2,
      verify: ['0.5 * 8 * 6 * sin(30 deg)', 12],
      al: {
        question: 'Sa është syprina e trekëndëshit me brinjë 8 dhe 6 dhe kënd 30° ndërmjet tyre?', options: ['48', '24', '12', '20,78'],
        explanation: '1/2 · 8 · 6 · sin 30° = 24 · 0,5 = 12.', hint: 'S = 1/2 · ab · sin C.',
        whyWrong: ['U harruan 1/2 dhe sin 30°.', 'U harrua sin 30°.', null, 'U përdor cos 30° në vend të sin 30°.'],
      },
      en: {
        question: 'What is the area of the triangle with sides 8 and 6 and an angle of 30° between them?', options: ['48', '24', '12', '20.78'],
        explanation: '1/2 · 8 · 6 · sin 30° = 24 · 0.5 = 12.', hint: 'Area = 1/2 · ab · sin C.',
        whyWrong: ['The 1/2 and sin 30° were forgotten.', 'sin 30° was forgotten.', null, 'cos 30° was used instead of sin 30°.'],
      },
      de: {
        question: 'Wie groß ist der Flächeninhalt des Dreiecks mit den Seiten 8 und 6 und dem eingeschlossenen Winkel 30°?', options: ['48', '24', '12', '20,78'],
        explanation: '1/2 · 8 · 6 · sin 30° = 24 · 0,5 = 12.', hint: 'A = 1/2 · ab · sin γ.',
        whyWrong: ['1/2 und sin 30° fehlen.', 'sin 30° fehlt.', null, 'Es wurde cos 30° statt sin 30° verwendet.'],
      },
    },
    {
      id: 8, type: 'input', difficulty: 'hard', answer: { value: 5 },
      verify: ['sqrt((4 - 1)^2 + (6 - 2)^2)', 5],
      al: { question: 'A(1, 2) dhe B(4, 6). Sa është gjatësia e vektorit AB?', explanation: 'AB = (3, 4); |AB| = √(9 + 16) = 5.', hint: 'AB = B − A, pastaj Pitagora.', commonMistakes: [{ value: 7, why: 'Koordinatat u mblodhën: 3 + 4.' }, { value: 25, why: 'U harrua rrënja katrore.' }] },
      en: { question: 'A(1, 2) and B(4, 6). What is the length of the vector AB?', explanation: 'AB = (3, 4); |AB| = √(9 + 16) = 5.', hint: 'AB = B − A, then Pythagoras.', commonMistakes: [{ value: 7, why: 'The components were added: 3 + 4.' }, { value: 25, why: 'The square root was forgotten.' }] },
      de: { question: 'A(1 | 2) und B(4 | 6). Wie lang ist der Vektor AB?', explanation: 'AB = (3 | 4); |AB| = √(9 + 16) = 5.', hint: 'AB = B − A, dann Pythagoras.', commonMistakes: [{ value: 7, why: 'Die Koordinaten wurden addiert: 3 + 4.' }, { value: 25, why: 'Die Wurzel wurde vergessen.' }] },
    },
    {
      id: 9, type: 'truefalse', difficulty: 'hard', correct: false,
      verify: 'text',
      al: { question: 'Në çdo trekëndësh vlen c² = a² + b².', explanation: 'E gabuar: kjo vlen vetëm kur C = 90°; në përgjithësi c² = a² + b² − 2ab · cos C.', hint: 'Teorema e kosinusit.', whyWrong: 'Termi −2ab · cos C zhduket vetëm kur cos C = 0.' },
      en: { question: 'In every triangle c² = a² + b².', explanation: 'False: this only holds when C = 90°; in general c² = a² + b² − 2ab · cos C.', hint: 'The cosine rule.', whyWrong: 'The term −2ab · cos C vanishes only when cos C = 0.' },
      de: { question: 'In jedem Dreieck gilt c² = a² + b².', explanation: 'Falsch: Das gilt nur für γ = 90°; allgemein gilt c² = a² + b² − 2ab · cos γ.', hint: 'Kosinussatz.', whyWrong: 'Der Term −2ab · cos γ fällt nur für cos γ = 0 weg.' },
    },
    {
      id: 10, type: 'choice', difficulty: 'hard', correct: 1,
      verify: ['50 * tan(32 deg)', 31.24, 0.005],
      al: {
        question: 'Nga 50 m larg, maja e një kulle shihet me kënd ngritjeje 32°. Sa e lartë është kulla?', options: ['26,50 m', '31,24 m', '42,40 m', '80,02 m'],
        explanation: 'h = 50 · tg 32° ≈ 31,24 m.', hint: 'E kundërt dhe e afërt → tg.',
        whyWrong: ['U përdor sin: 50 · sin 32°.', null, 'U përdor cos: 50 · cos 32°.', 'U pjesëtua: 50 : tg 32°.'],
      },
      en: {
        question: 'From 50 m away, the top of a tower is seen at an angle of elevation of 32°. How tall is the tower?', options: ['26.50 m', '31.24 m', '42.40 m', '80.02 m'],
        explanation: 'h = 50 · tan 32° ≈ 31.24 m.', hint: 'Opposite and adjacent → tan.',
        whyWrong: ['sin was used: 50 · sin 32°.', null, 'cos was used: 50 · cos 32°.', 'It was divided: 50 ÷ tan 32°.'],
      },
      de: {
        question: 'Aus 50 m Entfernung sieht man die Turmspitze unter einem Höhenwinkel von 32°. Wie hoch ist der Turm?', options: ['26,50 m', '31,24 m', '42,40 m', '80,02 m'],
        explanation: 'h = 50 · tan 32° ≈ 31,24 m.', hint: 'Gegenkathete und Ankathete → tan.',
        whyWrong: ['Es wurde sin verwendet: 50 · sin 32°.', null, 'Es wurde cos verwendet: 50 · cos 32°.', 'Es wurde dividiert: 50 : tan 32°.'],
      },
    },
  ],
};
