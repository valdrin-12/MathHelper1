// Grade 8 · Theme 6 quiz: Solid geometry (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g8-solid-geometry-quiz',
  grade: 8,
  theme: 'g8-solid-geometry',
  order: 6,
  difficulty: 'intermediate',
  icon: '🧊',
  color: '#457B9D',
  i18n: {
    al: { title: 'Gjeometria në hapësirë', category: 'Klasa 8 · Tema 6', duration: '10 min' },
    en: { title: 'Solid geometry', category: 'Grade 8 · Theme 6', duration: '10 min' },
    de: { title: 'Raumgeometrie', category: 'Klasse 8 · Thema 6', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 2,
      verify: ['2 * (5*4 + 4*3 + 5*3)', 94],
      al: {
        question: 'Sa është sipërfaqja e plotë e kuboidit 5 × 4 × 3 cm?', options: ['60 cm²', '47 cm²', '94 cm²', '120 cm²'],
        explanation: 'S = 2(20 + 12 + 15) = 94 cm².', hint: 'S = 2(ab + bc + ac).',
        whyWrong: ['Ky është vëllimi (cm³).', 'Harruat të shumëzoni me 2.', null, 'Ky është dyfishi i vëllimit.'],
      },
      en: {
        question: 'What is the total surface area of a 5 × 4 × 3 cm cuboid?', options: ['60 cm²', '47 cm²', '94 cm²', '120 cm²'],
        explanation: 'S = 2(20 + 12 + 15) = 94 cm².', hint: 'S = 2(ab + bc + ac).',
        whyWrong: ['That is the volume (cm³).', 'You forgot to multiply by 2.', null, 'That is twice the volume.'],
      },
      de: {
        question: 'Wie groß ist die Oberfläche eines Quaders 5 × 4 × 3 cm?', options: ['60 cm²', '47 cm²', '94 cm²', '120 cm²'],
        explanation: 'O = 2(20 + 12 + 15) = 94 cm².', hint: 'O = 2(ab + bc + ac).',
        whyWrong: ['Das ist das Volumen (cm³).', 'Die Multiplikation mit 2 fehlt.', null, 'Das ist das doppelte Volumen.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 3.46, tolerance: 0.01 },
      verify: ['2 * sqrt(3)', 3.46, 0.005],
      al: { question: 'Sa cm është diagonalja e trupit të kubit me brinjë 2 cm? (dy dhjetore)', explanation: 'd = a√3 = 2√3 ≈ 3,46 cm.', hint: 'd = √(a² + a² + a²).', unit: 'cm', commonMistakes: [{ value: 2.83, why: 'Kjo është diagonalja e faqes (2√2).' }] },
      en: { question: 'How many cm is the space diagonal of a cube with edge 2 cm? (two decimal places)', explanation: 'd = a√3 = 2√3 ≈ 3.46 cm.', hint: 'd = √(a² + a² + a²).', unit: 'cm', commonMistakes: [{ value: 2.83, why: 'That is the face diagonal (2√2).' }] },
      de: { question: 'Wie viele cm misst die Raumdiagonale eines Würfels mit 2 cm Kantenlänge? (zwei Dezimalstellen)', explanation: 'd = a√3 = 2√3 ≈ 3,46 cm.', hint: 'd = √(a² + a² + a²).', unit: 'cm', commonMistakes: [{ value: 2.83, why: 'Das ist die Flächendiagonale (2√2).' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: 'text',
      al: { question: 'Në kubin ABCDEFGH, brinjët AB dhe CG janë të kryqëzuara.', explanation: 'E vërtetë: nuk priten dhe nuk janë paralele, pra nuk shtrihen në një plan.', hint: 'A priten? A janë paralele?', whyWrong: 'AB është horizontale në bazë, CG vertikale në anën tjetër: as priten, as janë paralele.' },
      en: { question: 'In the cube ABCDEFGH, the edges AB and CG are skew.', explanation: 'True: they do not meet and are not parallel, so they do not lie in one plane.', hint: 'Do they meet? Are they parallel?', whyWrong: 'AB is horizontal on the base, CG vertical on the other side: they neither meet nor are parallel.' },
      de: { question: 'Im Würfel ABCDEFGH sind die Kanten AB und CG windschief.', explanation: 'Richtig: Sie schneiden sich nicht und sind nicht parallel, liegen also nicht in einer Ebene.', hint: 'Schneiden sie sich? Sind sie parallel?', whyWrong: 'AB liegt waagerecht in der Grundfläche, CG senkrecht auf der anderen Seite: weder Schnitt noch parallel.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 1,
      verify: 'text',
      al: {
        question: 'Sa plane kalojnë nëpër tri pika që nuk shtrihen në një drejtëz?', options: ['Asnjë', 'Saktësisht një', 'Tre', 'Pafund shumë'],
        explanation: 'Tri pika jo në një drejtëz përcaktojnë një plan të vetëm.', hint: 'Si qëndron një tavolinë me tri këmbë?',
        whyWrong: ['Gjithmonë ka të paktën një plan.', null, 'Pikat nuk përcaktojnë një plan për çdo çift.', 'Pafund shumë plane kalojnë vetëm nëpër pika në një drejtëz.'],
      },
      en: {
        question: 'How many planes pass through three points that are not on one line?', options: ['None', 'Exactly one', 'Three', 'Infinitely many'],
        explanation: 'Three points not on one line fix a single plane.', hint: 'Why does a three-legged stool never wobble?',
        whyWrong: ['There is always at least one plane.', null, 'The points do not give a plane for each pair.', 'Infinitely many planes only pass through points on one line.'],
      },
      de: {
        question: 'Wie viele Ebenen gehen durch drei Punkte, die nicht auf einer Geraden liegen?', options: ['Keine', 'Genau eine', 'Drei', 'Unendlich viele'],
        explanation: 'Drei Punkte, die nicht auf einer Geraden liegen, legen genau eine Ebene fest.', hint: 'Warum wackelt ein dreibeiniger Hocker nie?',
        whyWrong: ['Es gibt immer mindestens eine Ebene.', null, 'Nicht jedes Punktepaar ergibt eine eigene Ebene.', 'Unendlich viele Ebenen gibt es nur durch Punkte auf einer Geraden.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 13 },
      verify: ['sqrt(3^2 + 4^2 + 12^2)', 13],
      al: { question: 'Sa cm është diagonalja e kuboidit 3 × 4 × 12 cm?', explanation: 'd = √(9 + 16 + 144) = √169 = 13 cm.', hint: 'd = √(a² + b² + c²).', unit: 'cm', commonMistakes: [{ value: 5, why: 'Kjo është diagonalja e faqes 3 × 4.' }, { value: 19, why: 'Mblodhët brinjët.' }] },
      en: { question: 'How many cm is the space diagonal of a 3 × 4 × 12 cm cuboid?', explanation: 'd = √(9 + 16 + 144) = √169 = 13 cm.', hint: 'd = √(a² + b² + c²).', unit: 'cm', commonMistakes: [{ value: 5, why: 'That is the diagonal of the 3 × 4 face.' }, { value: 19, why: 'You added the edges.' }] },
      de: { question: 'Wie viele cm misst die Raumdiagonale eines Quaders 3 × 4 × 12 cm?', explanation: 'd = √(9 + 16 + 144) = √169 = 13 cm.', hint: 'd = √(a² + b² + c²).', unit: 'cm', commonMistakes: [{ value: 5, why: 'Das ist die Diagonale der Fläche 3 × 4.' }, { value: 19, why: 'Sie haben die Kanten addiert.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 0,
      verify: ['sqrt(150 / 6)', 5],
      al: {
        question: 'Kubi ka sipërfaqe 150 cm². Sa është brinja?', options: ['5 cm', '25 cm', '√150 cm', '6 cm'],
        explanation: '6a² = 150 → a² = 25 → a = 5 cm.', hint: 'S = 6a².',
        whyWrong: [null, '25 është a², jo a.', 'Harruat të pjesëtoni me 6.', 'Kubi ka 6 faqe, por brinja nuk është 6.'],
      },
      en: {
        question: 'A cube has a surface area of 150 cm². How long is an edge?', options: ['5 cm', '25 cm', '√150 cm', '6 cm'],
        explanation: '6a² = 150 → a² = 25 → a = 5 cm.', hint: 'S = 6a².',
        whyWrong: [null, '25 is a², not a.', 'You forgot to divide by 6.', 'A cube has 6 faces, but the edge is not 6.'],
      },
      de: {
        question: 'Ein Würfel hat 150 cm² Oberfläche. Wie lang ist eine Kante?', options: ['5 cm', '25 cm', '√150 cm', '6 cm'],
        explanation: '6a² = 150 → a² = 25 → a = 5 cm.', hint: 'O = 6a².',
        whyWrong: [null, '25 ist a², nicht a.', 'Die Division durch 6 fehlt.', 'Ein Würfel hat 6 Flächen, aber die Kante ist nicht 6.'],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: false,
      verify: 'text',
      al: { question: 'Dy plane të ndryshme mund të priten në një pikë të vetme.', explanation: 'E gabuar: dy plane ose janë paralele, ose priten sipas një drejtëze.', hint: 'Mendoni murin dhe dyshemenë.', whyWrong: 'Nëse kanë një pikë të përbashkët, kanë një drejtëz të tërë të përbashkët.' },
      en: { question: 'Two different planes can meet in a single point.', explanation: 'False: two planes are either parallel or meet in a line.', hint: 'Think of a wall and the floor.', whyWrong: 'If they share one point, they share a whole line.' },
      de: { question: 'Zwei verschiedene Ebenen können sich in einem einzigen Punkt schneiden.', explanation: 'Falsch: Zwei Ebenen sind parallel oder schneiden sich in einer Geraden.', hint: 'Denken Sie an Wand und Fußboden.', whyWrong: 'Haben sie einen Punkt gemeinsam, dann eine ganze Gerade.' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 3,
      verify: ['8^2 + 4 * (8 * 5 / 2)', 144],
      al: {
        question: 'Piramida katërkëndore e rregullt ka brinjë bazë 8 cm dhe apotemë 5 cm. Sa është sipërfaqja e plotë?', options: ['104 cm²', '64 cm²', '224 cm²', '144 cm²'],
        explanation: 'S = 64 + 4 · (8 · 5 / 2) = 64 + 80 = 144 cm².', hint: 'Baza dhe katër trekëndësha.',
        whyWrong: ['Llogaritët vetëm dy faqe anësore.', 'Kjo është vetëm baza.', 'Faqet anësore janë trekëndësha: pjesëtoni me 2.', null],
      },
      en: {
        question: 'A regular square pyramid has base edge 8 cm and slant height 5 cm. What is the total surface area?', options: ['104 cm²', '64 cm²', '224 cm²', '144 cm²'],
        explanation: 'S = 64 + 4 · (8 · 5 / 2) = 64 + 80 = 144 cm².', hint: 'The base and four triangles.',
        whyWrong: ['You counted only two lateral faces.', 'That is only the base.', 'The lateral faces are triangles: divide by 2.', null],
      },
      de: {
        question: 'Eine regelmäßige quadratische Pyramide hat die Grundkante 8 cm und die Seitenhöhe 5 cm. Wie groß ist die Oberfläche?', options: ['104 cm²', '64 cm²', '224 cm²', '144 cm²'],
        explanation: 'O = 64 + 4 · (8 · 5 / 2) = 64 + 80 = 144 cm².', hint: 'Grundfläche und vier Dreiecke.',
        whyWrong: ['Sie haben nur zwei Seitenflächen gerechnet.', 'Das ist nur die Grundfläche.', 'Die Seitenflächen sind Dreiecke: durch 2 teilen.', null],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 132 },
      verify: ['2 * (3 * 4 / 2) + (3 + 4 + 5) * 10', 132],
      al: { question: 'Prizmi trekëndor ka bazë trekëndësh kënddrejtë me brinjë 3, 4, 5 cm dhe lartësi 10 cm. Sa cm² është sipërfaqja e plotë?', explanation: 'B = 6; M = 12 · 10 = 120; S = 2 · 6 + 120 = 132 cm².', hint: 'S = 2B + P · h.', unit: 'cm²', commonMistakes: [{ value: 126, why: 'Numëruat vetëm një bazë.' }, { value: 120, why: 'Kjo është vetëm sipërfaqja anësore.' }] },
      en: { question: 'A triangular prism has a right-triangle base with sides 3, 4, 5 cm and height 10 cm. How many cm² is the total surface area?', explanation: 'B = 6; L = 12 · 10 = 120; S = 2 · 6 + 120 = 132 cm².', hint: 'S = 2B + P · h.', unit: 'cm²', commonMistakes: [{ value: 126, why: 'You counted only one base.' }, { value: 120, why: 'That is only the lateral area.' }] },
      de: { question: 'Ein dreiseitiges Prisma hat ein rechtwinkliges Grunddreieck mit den Seiten 3, 4, 5 cm und die Höhe 10 cm. Wie viele cm² beträgt die Oberfläche?', explanation: 'G = 6; M = 12 · 10 = 120; O = 2 · 6 + 120 = 132 cm².', hint: 'O = 2G + u · h.', unit: 'cm²', commonMistakes: [{ value: 126, why: 'Sie haben nur eine Grundfläche gezählt.' }, { value: 120, why: 'Das ist nur die Mantelfläche.' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 4 },
      verify: ['12 - 1 - 3 - 4', 4],
      al: { question: 'Kubi ka 12 brinjë. Sa prej tyre janë të kryqëzuara me një brinjë të dhënë?', explanation: 'Nga 11 brinjët e tjera: 3 paralele, 4 që e presin, 4 të kryqëzuara.', hint: 'Numëroni paralelet dhe ato që e prekin.', commonMistakes: [{ value: 3, why: '3 janë paralelet.' }, { value: 8, why: 'Ndër 8 brinjët jo-paralele, 4 e presin brinjën.' }] },
      en: { question: 'A cube has 12 edges. How many of them are skew to a given edge?', explanation: 'Of the other 11 edges: 3 are parallel, 4 meet it, 4 are skew.', hint: 'Count the parallel ones and the ones touching it.', commonMistakes: [{ value: 3, why: '3 are the parallel ones.' }, { value: 8, why: 'Of the 8 non-parallel edges, 4 meet the edge.' }] },
      de: { question: 'Ein Würfel hat 12 Kanten. Wie viele davon sind windschief zu einer gegebenen Kante?', explanation: 'Von den anderen 11 Kanten: 3 parallel, 4 schneiden sie, 4 windschief.', hint: 'Zählen Sie die parallelen und die anstoßenden Kanten.', commonMistakes: [{ value: 3, why: '3 sind die parallelen.' }, { value: 8, why: 'Von den 8 nicht parallelen Kanten schneiden 4 die Kante.' }] },
    },
  ],
};
