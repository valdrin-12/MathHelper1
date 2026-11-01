// Grade 7 · Theme 10 quiz: Transformations and solids (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g7-transformations-solids-quiz',
  grade: 7,
  theme: 'g7-transformations-solids',
  order: 10,
  difficulty: 'beginner',
  icon: '🔺',
  color: '#457B9D',
  i18n: {
    al: { title: 'Shndërrimet dhe trupat', category: 'Klasa 7 · Tema 10', duration: '10 min' },
    en: { title: 'Transformations and solids', category: 'Grade 7 · Theme 10', duration: '10 min' },
    de: { title: 'Abbildungen und Körper', category: 'Klasse 7 · Thema 10', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 1,
      verify: 'text',
      explainVisual: {
    type: 'functionPlot', equal: true, view: { xMin: -7, xMax: 7, yMin: -7, yMax: 7 }, xStep: 1, yStep: 1,
    points: [{ at: ['p', 'q'], label: 'P({p}, {q})', color: 'primary' }, { at: ['p', '-q'], label: 'P′({p}, {-q})', color: 'secondary' }],
    segments: [{ from: ['p', 'q'], to: ['p', '-q'], color: 'muted', dashed: true }],
    sliders: [{ name: 'p', label: 'x', min: -6, max: 6, step: 1, value: 3 }, { name: 'q', label: 'y', min: -6, max: 6, step: 1, value: -2 }],
    readouts: [{ text: { al: 'Pasqyrimi ndaj boshtit x: (x, y) → (x, −y)', en: 'Reflection in the x-axis: (x, y) → (x, −y)', de: 'Spiegelung an der x-Achse: (x | y) → (x | −y)' } }],
    alt: { al: 'Një pikë P që lëviz me rrëshqitës dhe figura e saj P′.', en: 'A point P moved by sliders and its image P′.', de: 'Ein Punkt P, der mit Schiebereglern bewegt wird, und sein Bild P′.' },
  },
      al: {
        question: 'Cila është pasqyra e pikës A(3, −2) në boshtin x?', options: ['(−3, −2)', '(3, 2)', '(−3, 2)', '(−2, 3)'],
        explanation: 'Në boshtin x ndryshon vetëm shenja e y: (3, 2).', hint: 'Pika lëviz lart-poshtë.',
        whyWrong: ['Kjo është pasqyra në boshtin y.', null, 'Kjo është simetria ndaj origjinës.', 'Koordinatat nuk ndërrojnë vendet.'],
      },
      en: {
        question: 'What is the reflection of A(3, −2) in the x-axis?', options: ['(−3, −2)', '(3, 2)', '(−3, 2)', '(−2, 3)'],
        explanation: 'In the x-axis only the sign of y changes: (3, 2).', hint: 'The point moves up or down.',
        whyWrong: ['That is the reflection in the y-axis.', null, 'That is point symmetry about the origin.', 'The coordinates do not swap places.'],
      },
      de: {
        question: 'Welcher Punkt entsteht, wenn A(3 | −2) an der x-Achse gespiegelt wird?', options: ['(−3 | −2)', '(3 | 2)', '(−3 | 2)', '(−2 | 3)'],
        explanation: 'An der x-Achse ändert sich nur das Vorzeichen von y: (3 | 2).', hint: 'Der Punkt wandert nach oben oder unten.',
        whyWrong: ['Das ist die Spiegelung an der y-Achse.', null, 'Das ist die Punktspiegelung am Ursprung.', 'Die Koordinaten tauschen nicht die Plätze.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 60 },
      verify: ['12 * 5', 60],
      al: { question: 'Prizmi ka bazë 12 cm² dhe lartësi 5 cm. Sa cm³ është vëllimi?', explanation: 'V = B · H = 12 · 5 = 60 cm³.', hint: 'V = B · H.', unit: 'cm³', commonMistakes: [{ value: 20, why: 'Pjesëtuat me 3; kjo vlen për piramidën.' }] },
      en: { question: 'A prism has a base of 12 cm² and a height of 5 cm. How many cm³ is its volume?', explanation: 'V = B · H = 12 · 5 = 60 cm³.', hint: 'V = B · H.', unit: 'cm³', commonMistakes: [{ value: 20, why: 'You divided by 3; that is for a pyramid.' }] },
      de: { question: 'Ein Prisma hat die Grundfläche 12 cm² und die Höhe 5 cm. Wie viele cm³ beträgt sein Volumen?', explanation: 'V = G · H = 12 · 5 = 60 cm³.', hint: 'V = G · H.', unit: 'cm³', commonMistakes: [{ value: 20, why: 'Sie haben durch 3 geteilt; das gilt für die Pyramide.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: false,
      verify: ['3 * 3 == 6', false],
      al: { question: 'Prizmi trekëndor ka 6 brinjë.', explanation: 'E gabuar: ka 3 · 3 = 9 brinjë (3 te secila bazë dhe 3 anësore) dhe 6 kulme.', hint: 'Numëroni brinjët e dy bazave dhe ato anësore.', whyWrong: 'Me n = 3 prizmi ka 3n = 9 brinjë; 6 janë kulmet.' },
      en: { question: 'A triangular prism has 6 edges.', explanation: 'False: it has 3 · 3 = 9 edges (3 on each base and 3 lateral) and 6 vertices.', hint: 'Count the edges of both bases and the lateral ones.', whyWrong: 'With n = 3 the prism has 3n = 9 edges; 6 is the number of vertices.' },
      de: { question: 'Ein dreiseitiges Prisma hat 6 Kanten.', explanation: 'Falsch: Es hat 3 · 3 = 9 Kanten (je 3 an den Grundflächen und 3 Seitenkanten) und 6 Ecken.', hint: 'Zählen Sie die Kanten beider Grundflächen und die Seitenkanten.', whyWrong: 'Mit n = 3 hat das Prisma 3n = 9 Kanten; 6 ist die Zahl der Ecken.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 2,
      verify: 'text',
      al: {
        question: 'Zhvendosni pikën B(−1, 2) 3 njësi djathtas dhe 2 njësi lart.', options: ['(−4, 4)', '(1, 5)', '(2, 4)', '(2, 0)'],
        explanation: 'x: −1 + 3 = 2; y: 2 + 2 = 4 → (2, 4).', hint: 'Djathtas ndryshon x, lart ndryshon y.',
        whyWrong: ['Djathtas do të thotë + 3, jo − 3.', 'Ngatërruat cila lëvizje i përket cilës koordinatë.', null, 'Lart do të thotë + 2, jo − 2.'],
      },
      en: {
        question: 'Translate the point B(−1, 2) 3 units right and 2 units up.', options: ['(−4, 4)', '(1, 5)', '(2, 4)', '(2, 0)'],
        explanation: 'x: −1 + 3 = 2; y: 2 + 2 = 4 → (2, 4).', hint: 'Right changes x, up changes y.',
        whyWrong: ['Right means + 3, not − 3.', 'You mixed up which move belongs to which coordinate.', null, 'Up means + 2, not − 2.'],
      },
      de: {
        question: 'Verschieben Sie den Punkt B(−1 | 2) um 3 Einheiten nach rechts und 2 nach oben.', options: ['(−4 | 4)', '(1 | 5)', '(2 | 4)', '(2 | 0)'],
        explanation: 'x: −1 + 3 = 2; y: 2 + 2 = 4 → (2 | 4).', hint: 'Rechts ändert x, oben ändert y.',
        whyWrong: ['Rechts heißt + 3, nicht − 3.', 'Sie haben die Bewegungen den falschen Koordinaten zugeordnet.', null, 'Oben heißt + 2, nicht − 2.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 120 },
      verify: ['6^2 * 10 / 3', 120],
      al: { question: 'Piramida ka bazë katror me brinjë 6 cm dhe lartësi 10 cm. Sa cm³ është vëllimi?', explanation: 'B = 36 cm²; V = 36 · 10 : 3 = 120 cm³.', hint: 'V = B · H : 3.', unit: 'cm³', commonMistakes: [{ value: 360, why: 'Harruat të pjesëtoni me 3.' }, { value: 20, why: 'B = 6 · 6 = 36, jo 6.' }] },
      en: { question: 'A pyramid has a square base with side 6 cm and a height of 10 cm. How many cm³ is its volume?', explanation: 'B = 36 cm²; V = 36 · 10 ÷ 3 = 120 cm³.', hint: 'V = B · H ÷ 3.', unit: 'cm³', commonMistakes: [{ value: 360, why: 'You forgot to divide by 3.' }, { value: 20, why: 'B = 6 · 6 = 36, not 6.' }] },
      de: { question: 'Eine Pyramide hat eine quadratische Grundfläche mit 6 cm Seitenlänge und die Höhe 10 cm. Wie viele cm³ beträgt ihr Volumen?', explanation: 'G = 36 cm²; V = 36 · 10 : 3 = 120 cm³.', hint: 'V = G · H : 3.', unit: 'cm³', commonMistakes: [{ value: 360, why: 'Die Division durch 3 fehlt.' }, { value: 20, why: 'G = 6 · 6 = 36, nicht 6.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 0,
      verify: ['2 * (5*3 + 3*2 + 5*2)', 62],
      al: {
        question: 'Sa është sipërfaqja e kuboidit 5 cm × 3 cm × 2 cm?', options: ['62 cm²', '30 cm²', '31 cm²', '40 cm²'],
        explanation: 'S = 2(15 + 6 + 10) = 62 cm².', hint: 'S = 2(ab + bc + ac).',
        whyWrong: [null, 'Ky është vëllimi (cm³).', 'Harruat të shumëzoni me 2.', 'Llogaritët vetëm faqet anësore.'],
      },
      en: {
        question: 'What is the surface area of a 5 cm × 3 cm × 2 cm cuboid?', options: ['62 cm²', '30 cm²', '31 cm²', '40 cm²'],
        explanation: 'S = 2(15 + 6 + 10) = 62 cm².', hint: 'S = 2(ab + bc + ac).',
        whyWrong: [null, 'That is the volume (cm³).', 'You forgot to multiply by 2.', 'You counted only the lateral faces.'],
      },
      de: {
        question: 'Wie groß ist der Oberflächeninhalt eines Quaders 5 cm × 3 cm × 2 cm?', options: ['62 cm²', '30 cm²', '31 cm²', '40 cm²'],
        explanation: 'O = 2(15 + 6 + 10) = 62 cm².', hint: 'O = 2(ab + bc + ac).',
        whyWrong: [null, 'Das ist das Volumen (cm³).', 'Die Multiplikation mit 2 fehlt.', 'Sie haben nur die Mantelfläche gerechnet.'],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: true,
      verify: ['-(2) == -2 and -(-6) == 6', true],
      al: { question: 'Simetrikja e D(2, −6) ndaj origjinës është (−2, 6).', explanation: 'E vërtetë: te simetria qendrore ndryshojnë të dyja shenjat.', hint: '(x, y) → (−x, −y).', whyWrong: 'Të dyja shenjat ndryshojnë: (2, −6) → (−2, 6).' },
      en: { question: 'The image of D(2, −6) under point symmetry about the origin is (−2, 6).', explanation: 'True: point symmetry changes both signs.', hint: '(x, y) → (−x, −y).', whyWrong: 'Both signs change: (2, −6) → (−2, 6).' },
      de: { question: 'Das Bild von D(2 | −6) bei der Punktspiegelung am Ursprung ist (−2 | 6).', explanation: 'Richtig: Die Punktspiegelung ändert beide Vorzeichen.', hint: '(x | y) → (−x | −y).', whyWrong: 'Beide Vorzeichen ändern sich: (2 | −6) → (−2 | 6).' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 3,
      verify: [['4 + 1', 5], ['2 * 4', 8]],
      al: {
        question: 'Sa faqe dhe brinjë ka piramida katërkëndore?', options: ['4 faqe, 8 brinjë', '6 faqe, 12 brinjë', '5 faqe, 6 brinjë', '5 faqe, 8 brinjë'],
        explanation: 'n = 4: 4 + 1 = 5 faqe (baza + 4 trekëndësha), 2 · 4 = 8 brinjë.', hint: 'Mos harroni bazën.',
        whyWrong: ['Harruat bazën si faqe.', 'Ky është kubi.', 'Brinjët janë 4 te baza dhe 4 anësore.', null],
      },
      en: {
        question: 'How many faces and edges does a square pyramid have?', options: ['4 faces, 8 edges', '6 faces, 12 edges', '5 faces, 6 edges', '5 faces, 8 edges'],
        explanation: 'n = 4: 4 + 1 = 5 faces (base + 4 triangles), 2 · 4 = 8 edges.', hint: 'Do not forget the base.',
        whyWrong: ['You did not count the base as a face.', 'That is a cube.', 'There are 4 base edges and 4 lateral edges.', null],
      },
      de: {
        question: 'Wie viele Flächen und Kanten hat eine quadratische Pyramide?', options: ['4 Flächen, 8 Kanten', '6 Flächen, 12 Kanten', '5 Flächen, 6 Kanten', '5 Flächen, 8 Kanten'],
        explanation: 'n = 4: 4 + 1 = 5 Flächen (Grundfläche + 4 Dreiecke), 2 · 4 = 8 Kanten.', hint: 'Die Grundfläche nicht vergessen.',
        whyWrong: ['Die Grundfläche wurde nicht mitgezählt.', 'Das ist ein Würfel.', 'Es gibt 4 Grundkanten und 4 Seitenkanten.', null],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 96 },
      verify: ['6^2 + 4 * (6 * 5 / 2)', 96],
      al: { question: 'Piramida katërkëndore e rregullt ka brinjën e bazës 6 cm dhe lartësinë e faqes anësore 5 cm. Sa cm² është sipërfaqja?', explanation: 'B = 36; 4 faqe · (6 · 5 : 2) = 60; S = 96 cm².', hint: 'S = B + 4 · (a · h : 2).', unit: 'cm²', commonMistakes: [{ value: 60, why: 'Harruat bazën.' }, { value: 156, why: 'Faqet anësore janë trekëndësha: pjesëtoni me 2.' }] },
      en: { question: 'A regular square pyramid has base side 6 cm and slant height 5 cm. How many cm² is its surface area?', explanation: 'B = 36; 4 faces · (6 · 5 ÷ 2) = 60; S = 96 cm².', hint: 'S = B + 4 · (a · h ÷ 2).', unit: 'cm²', commonMistakes: [{ value: 60, why: 'You forgot the base.' }, { value: 156, why: 'The lateral faces are triangles: divide by 2.' }] },
      de: { question: 'Eine regelmäßige quadratische Pyramide hat die Grundkante 6 cm und die Seitenhöhe 5 cm. Wie viele cm² beträgt ihr Oberflächeninhalt?', explanation: 'G = 36; 4 Seitendreiecke · (6 · 5 : 2) = 60; O = 96 cm².', hint: 'O = G + 4 · (a · h : 2).', unit: 'cm²', commonMistakes: [{ value: 60, why: 'Die Grundfläche fehlt.' }, { value: 156, why: 'Die Seitenflächen sind Dreiecke: durch 2 teilen.' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 48 },
      verify: ['(3 * 4 / 2) * 8', 48],
      al: { question: 'Prizmi trekëndor ka si bazë trekëndësh kënddrejtë me katete 3 cm dhe 4 cm, dhe lartësi 8 cm. Sa cm³ është vëllimi?', explanation: 'B = 3 · 4 : 2 = 6 cm²; V = 6 · 8 = 48 cm³.', hint: 'Sipërfaqja e trekëndëshit kënddrejtë = a · b : 2.', unit: 'cm³', commonMistakes: [{ value: 96, why: 'Sipërfaqja e trekëndëshit kërkon pjesëtim me 2.' }, { value: 16, why: 'Pjesëtuat me 3; ky është prizëm, jo piramidë.' }] },
      en: { question: 'A triangular prism has a right triangle with legs 3 cm and 4 cm as its base and a height of 8 cm. How many cm³ is its volume?', explanation: 'B = 3 · 4 ÷ 2 = 6 cm²; V = 6 · 8 = 48 cm³.', hint: 'Area of a right triangle = a · b ÷ 2.', unit: 'cm³', commonMistakes: [{ value: 96, why: 'The triangle\'s area needs dividing by 2.' }, { value: 16, why: 'You divided by 3; this is a prism, not a pyramid.' }] },
      de: { question: 'Ein dreiseitiges Prisma hat als Grundfläche ein rechtwinkliges Dreieck mit den Katheten 3 cm und 4 cm und die Höhe 8 cm. Wie viele cm³ beträgt das Volumen?', explanation: 'G = 3 · 4 : 2 = 6 cm²; V = 6 · 8 = 48 cm³.', hint: 'Fläche des rechtwinkligen Dreiecks = a · b : 2.', unit: 'cm³', commonMistakes: [{ value: 96, why: 'Die Dreiecksfläche muss durch 2 geteilt werden.' }, { value: 16, why: 'Sie haben durch 3 geteilt; das ist ein Prisma, keine Pyramide.' }] },
    },
  ],
};
