// Grade 11 · Theme 3 quiz: Solid geometry (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g11-solid-geometry-quiz',
  grade: 11,
  theme: 'g11-solid-geometry',
  order: 3,
  difficulty: 'advanced',
  icon: '🧊',
  color: '#8338EC',
  i18n: {
    al: { title: 'Gjeometria në hapësirë', category: 'Klasa 11 · Tema 3', duration: '12 min' },
    en: { title: 'Solid geometry', category: 'Grade 11 · Theme 3', duration: '12 min' },
    de: { title: 'Raumgeometrie', category: 'Klasse 11 · Thema 3', duration: '12 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 0,
      verify: ['8 + 6 - 2', 12],
      al: {
        question: 'Një shumëfaqësh ka 8 kulme dhe 6 faqe. Sa brinjë ka?', options: ['12', '14', '10', '16'],
        explanation: 'K − B + F = 2 → B = 8 + 6 − 2 = 12.', hint: 'Formula e Euler-it.',
        whyWrong: [null, 'U mblodhën kulmet dhe faqet pa zbritur 2.', 'U zbrit 4 në vend të 2.', 'U shtua 2 në vend që të zbritej.'],
      },
      en: {
        question: 'A polyhedron has 8 vertices and 6 faces. How many edges does it have?', options: ['12', '14', '10', '16'],
        explanation: 'V − E + F = 2 → E = 8 + 6 − 2 = 12.', hint: 'Euler\'s formula.',
        whyWrong: [null, 'Vertices and faces were added without taking off 2.', '4 was taken off instead of 2.', '2 was added instead of taken off.'],
      },
      de: {
        question: 'Ein Polyeder hat 8 Ecken und 6 Flächen. Wie viele Kanten hat es?', options: ['12', '14', '10', '16'],
        explanation: 'E − K + F = 2 → K = 8 + 6 − 2 = 12.', hint: 'Eulerscher Polyedersatz.',
        whyWrong: [null, 'Ecken und Flächen wurden addiert, ohne 2 abzuziehen.', 'Es wurde 4 statt 2 abgezogen.', 'Es wurde 2 addiert statt abgezogen.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 60 }, unit: 'cm³',
      verify: ['5 * 4 * 3', 60],
      al: { question: 'Sa është vëllimi i kuboidit 5 cm × 4 cm × 3 cm?', explanation: '5 · 4 · 3 = 60 cm³.', hint: 'Bazë · lartësi.', commonMistakes: [{ value: 94, why: 'Kjo është syprina e plotë, jo vëllimi.' }, { value: 12, why: 'U mblodhën përmasat në vend që të shumëzoheshin.' }] },
      en: { question: 'What is the volume of a 5 cm × 4 cm × 3 cm cuboid?', explanation: '5 · 4 · 3 = 60 cm³.', hint: 'Base · height.', commonMistakes: [{ value: 94, why: 'That is the surface area, not the volume.' }, { value: 12, why: 'The lengths were added instead of multiplied.' }] },
      de: { question: 'Wie groß ist das Volumen eines Quaders 5 cm × 4 cm × 3 cm?', explanation: '5 · 4 · 3 = 60 cm³.', hint: 'Grundfläche · Höhe.', commonMistakes: [{ value: 94, why: 'Das ist die Oberfläche, nicht das Volumen.' }, { value: 12, why: 'Die Längen wurden addiert statt multipliziert.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: 'text',
      al: { question: 'Vëllimi i konit është një e treta e vëllimit të cilindrit me të njëjtën bazë dhe lartësi.', explanation: 'E vërtetë: V(koni) = 1/3 · πr²h.', hint: 'Krahasoni formulat.', whyWrong: 'Cilindri πr²h, koni 1/3 · πr²h.' },
      en: { question: 'The volume of a cone is one third of the volume of a cylinder with the same base and height.', explanation: 'True: V(cone) = 1/3 · πr²h.', hint: 'Compare the formulas.', whyWrong: 'Cylinder πr²h, cone 1/3 · πr²h.' },
      de: { question: 'Das Volumen eines Kegels ist ein Drittel des Volumens eines Zylinders mit gleicher Grundfläche und Höhe.', explanation: 'Richtig: V(Kegel) = 1/3 · πr²h.', hint: 'Formeln vergleichen.', whyWrong: 'Zylinder πr²h, Kegel 1/3 · πr²h.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'medium', correct: 3,
      verify: ['0.5 * 6 * 4 * 10', 120],
      al: {
        question: 'Prizmi trekëndor ka bazë trekëndësh me brinjë 6 cm dhe lartësi 4 cm; gjatësia e prizmit është 10 cm. Sa është vëllimi?', options: ['240 cm³', '60 cm³', '12 cm³', '120 cm³'],
        explanation: 'B = 1/2 · 6 · 4 = 12 cm²; V = 12 · 10 = 120 cm³.', hint: 'Syprina e trekëndëshit ka 1/2.',
        whyWrong: ['U harrua 1/2 te syprina e trekëndëshit.', 'U shumëzua 6 · 10, pa lartësinë e trekëndëshit.', 'Kjo është vetëm syprina e bazës.', null],
      },
      en: {
        question: 'A triangular prism has a triangular base with side 6 cm and height 4 cm; the prism is 10 cm long. What is its volume?', options: ['240 cm³', '60 cm³', '12 cm³', '120 cm³'],
        explanation: 'B = 1/2 · 6 · 4 = 12 cm²; V = 12 · 10 = 120 cm³.', hint: 'A triangle\'s area has a 1/2.',
        whyWrong: ['The 1/2 in the triangle area was forgotten.', '6 · 10 was used, without the triangle\'s height.', 'That is only the base area.', null],
      },
      de: {
        question: 'Ein Dreiecksprisma hat eine dreieckige Grundfläche mit Seite 6 cm und Höhe 4 cm; das Prisma ist 10 cm lang. Wie groß ist das Volumen?', options: ['240 cm³', '60 cm³', '12 cm³', '120 cm³'],
        explanation: 'G = 1/2 · 6 · 4 = 12 cm²; V = 12 · 10 = 120 cm³.', hint: 'Die Dreiecksfläche hat den Faktor 1/2.',
        whyWrong: ['Der Faktor 1/2 der Dreiecksfläche fehlt.', 'Es wurde 6 · 10 gerechnet, ohne die Dreieckshöhe.', 'Das ist nur die Grundfläche.', null],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 113.1, tolerance: 0.1 }, unit: 'cm³',
      verify: ['4/3 * pi * 3^3', 113.1, 0.1],
      al: { question: 'Sa është vëllimi i sferës me rreze 3 cm? (1 dhjetore)', explanation: '4/3 · π · 27 = 36π ≈ 113,1 cm³.', hint: 'V = 4/3 πr³.', commonMistakes: [{ value: 84.8, why: 'U harrua 4/3: π · 27.' }, { value: 28.3, why: 'U përdor πr² në vend të 4/3 πr³.' }] },
      en: { question: 'What is the volume of a sphere with radius 3 cm? (1 d.p.)', explanation: '4/3 · π · 27 = 36π ≈ 113.1 cm³.', hint: 'V = 4/3 πr³.', commonMistakes: [{ value: 84.8, why: 'The 4/3 was forgotten: π · 27.' }, { value: 28.3, why: 'πr² was used instead of 4/3 πr³.' }] },
      de: { question: 'Wie groß ist das Volumen einer Kugel mit Radius 3 cm? (1 Dezimalstelle)', explanation: '4/3 · π · 27 = 36π ≈ 113,1 cm³.', hint: 'V = 4/3 πr³.', commonMistakes: [{ value: 84.8, why: 'Der Faktor 4/3 fehlt: π · 27.' }, { value: 28.3, why: 'Es wurde πr² statt 4/3 πr³ verwendet.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 2,
      verify: ['pi * 3^2 * 10', 282.74, 0.005],
      al: {
        question: 'Sa është vëllimi i cilindrit me r = 3 cm dhe h = 10 cm?', options: ['94,25 cm³', '188,50 cm³', '282,74 cm³', '1 130,97 cm³'],
        explanation: 'π · 9 · 10 = 90π ≈ 282,74 cm³.', hint: 'V = πr²h.',
        whyWrong: ['Rrezja nuk u ngrit në katror: π · 3 · 10.', 'Kjo është syprina anësore 2πrh.', null, 'U përdor diametri 6 si rreze.'],
      },
      en: {
        question: 'What is the volume of a cylinder with r = 3 cm and h = 10 cm?', options: ['94.25 cm³', '188.50 cm³', '282.74 cm³', '1 130.97 cm³'],
        explanation: 'π · 9 · 10 = 90π ≈ 282.74 cm³.', hint: 'V = πr²h.',
        whyWrong: ['The radius was not squared: π · 3 · 10.', 'That is the curved surface area 2πrh.', null, 'The diameter 6 was used as the radius.'],
      },
      de: {
        question: 'Wie groß ist das Volumen eines Zylinders mit r = 3 cm und h = 10 cm?', options: ['94,25 cm³', '188,50 cm³', '282,74 cm³', '1 130,97 cm³'],
        explanation: 'π · 9 · 10 = 90π ≈ 282,74 cm³.', hint: 'V = πr²h.',
        whyWrong: ['Der Radius wurde nicht quadriert: π · 3 · 10.', 'Das ist die Mantelfläche 2πrh.', null, 'Der Durchmesser 6 wurde als Radius genommen.'],
      },
    },
    {
      id: 7, type: 'choice', difficulty: 'medium', correct: 1,
      verify: ['pi * 4 * 10', 125.66, 0.005],
      al: {
        question: 'Sa është syprina anësore e konit me r = 4 cm dhe përftuese l = 10 cm?', options: ['40 cm²', '125,66 cm²', '251,33 cm²', '50,27 cm²'],
        explanation: 'πrl = π · 4 · 10 = 40π ≈ 125,66 cm².', hint: 'S anësore = πrl.',
        whyWrong: ['U harrua π.', null, 'U përdor 2πrl si te cilindri.', 'Kjo është syprina e bazës πr².'],
      },
      en: {
        question: 'What is the curved surface area of a cone with r = 4 cm and slant height l = 10 cm?', options: ['40 cm²', '125.66 cm²', '251.33 cm²', '50.27 cm²'],
        explanation: 'πrl = π · 4 · 10 = 40π ≈ 125.66 cm².', hint: 'Curved area = πrl.',
        whyWrong: ['π was forgotten.', null, '2πrl was used as for a cylinder.', 'That is the base area πr².'],
      },
      de: {
        question: 'Wie groß ist die Mantelfläche eines Kegels mit r = 4 cm und Mantellinie s = 10 cm?', options: ['40 cm²', '125,66 cm²', '251,33 cm²', '50,27 cm²'],
        explanation: 'πrs = π · 4 · 10 = 40π ≈ 125,66 cm².', hint: 'M = πrs.',
        whyWrong: ['π wurde vergessen.', null, 'Es wurde 2πrs wie beim Zylinder gerechnet.', 'Das ist die Grundfläche πr².'],
      },
    },
    {
      id: 8, type: 'input', difficulty: 'hard', answer: { value: 60 }, unit: 'cm³',
      verify: ['1/3 * 6^2 * 5', 60],
      al: { question: 'Piramida katrore ka brinjë baze 6 cm dhe lartësi 5 cm. Sa është vëllimi?', explanation: '1/3 · 36 · 5 = 60 cm³.', hint: 'V = 1/3 · B · h.', commonMistakes: [{ value: 180, why: 'U harrua 1/3.' }, { value: 10, why: 'Brinja e bazës nuk u ngrit në katror: 1/3 · 6 · 5.' }] },
      en: { question: 'A square pyramid has base edge 6 cm and height 5 cm. What is its volume?', explanation: '1/3 · 36 · 5 = 60 cm³.', hint: 'V = 1/3 · B · h.', commonMistakes: [{ value: 180, why: 'The 1/3 was forgotten.' }, { value: 10, why: 'The base edge was not squared: 1/3 · 6 · 5.' }] },
      de: { question: 'Eine quadratische Pyramide hat die Grundkante 6 cm und die Höhe 5 cm. Wie groß ist ihr Volumen?', explanation: '1/3 · 36 · 5 = 60 cm³.', hint: 'V = 1/3 · G · h.', commonMistakes: [{ value: 180, why: 'Der Faktor 1/3 fehlt.' }, { value: 10, why: 'Die Grundkante wurde nicht quadriert: 1/3 · 6 · 5.' }] },
    },
    {
      id: 9, type: 'truefalse', difficulty: 'hard', correct: false,
      verify: ['(4/3 * pi * 2^3) / (4/3 * pi * 1^3) == 2', false],
      al: { question: 'Nëse rrezja e sferës dyfishohet, edhe vëllimi dyfishohet.', explanation: 'E gabuar: V varet nga r³, pra vëllimi bëhet 2³ = 8 herë më i madh.', hint: 'Çfarë ndodh me r³?', whyWrong: '(2r)³ = 8r³.' },
      en: { question: 'If the radius of a sphere is doubled, its volume is doubled too.', explanation: 'False: V depends on r³, so the volume becomes 2³ = 8 times larger.', hint: 'What happens to r³?', whyWrong: '(2r)³ = 8r³.' },
      de: { question: 'Wird der Radius einer Kugel verdoppelt, verdoppelt sich auch ihr Volumen.', explanation: 'Falsch: V hängt von r³ ab, das Volumen wird also 2³ = 8-mal so groß.', hint: 'Was passiert mit r³?', whyWrong: '(2r)³ = 8r³.' },
    },
    {
      id: 10, type: 'choice', difficulty: 'hard', correct: 0,
      verify: ['pi * 0.5^2 * 2 * 1000', 1570.8, 0.5, '1 571'],
      al: {
        question: 'Një depozitë cilindrike ka r = 0,5 m dhe h = 2 m. Sa litra mban afërsisht?', options: ['≈ 1 571 l', '≈ 157 l', '≈ 3 142 l', '≈ 6 283 l'],
        explanation: 'V = π · 0,25 · 2 ≈ 1,571 m³ = 1 571 l.', hint: '1 m³ = 1 000 l.',
        whyWrong: [null, 'U përdor 1 m³ = 100 l.', 'Rrezja nuk u ngrit në katror: π · 0,5 · 2.', 'U përdor diametri 1 m si rreze.'],
      },
      en: {
        question: 'A cylindrical tank has r = 0.5 m and h = 2 m. About how many litres does it hold?', options: ['≈ 1 571 l', '≈ 157 l', '≈ 3 142 l', '≈ 6 283 l'],
        explanation: 'V = π · 0.25 · 2 ≈ 1.571 m³ = 1 571 l.', hint: '1 m³ = 1 000 l.',
        whyWrong: [null, '1 m³ = 100 l was used.', 'The radius was not squared: π · 0.5 · 2.', 'The diameter 1 m was used as the radius.'],
      },
      de: {
        question: 'Ein zylindrischer Tank hat r = 0,5 m und h = 2 m. Wie viele Liter fasst er ungefähr?', options: ['≈ 1 571 l', '≈ 157 l', '≈ 3 142 l', '≈ 6 283 l'],
        explanation: 'V = π · 0,25 · 2 ≈ 1,571 m³ = 1 571 l.', hint: '1 m³ = 1 000 l.',
        whyWrong: [null, 'Es wurde 1 m³ = 100 l gerechnet.', 'Der Radius wurde nicht quadriert: π · 0,5 · 2.', 'Der Durchmesser 1 m wurde als Radius genommen.'],
      },
    },
  ],
};
