// Grade 10 · Theme 3 quiz: Angles and polygons (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g10-angles-polygons-quiz',
  grade: 10,
  theme: 'g10-angles-polygons',
  order: 3,
  difficulty: 'intermediate',
  icon: '⬡',
  color: '#F4A261',
  i18n: {
    al: { title: 'Këndet dhe shumëkëndëshat', category: 'Klasa 10 · Tema 3', duration: '10 min' },
    en: { title: 'Angles and polygons', category: 'Grade 10 · Theme 3', duration: '10 min' },
    de: { title: 'Winkel und Vielecke', category: 'Klasse 10 · Thema 3', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 1,
      verify: ['(8 - 2) * 180 / 8', 135],
      al: {
        question: 'Sa është çdo kënd i brendshëm i tetëkëndëshit të rregullt?', options: ['120°', '135°', '140°', '45°'],
        explanation: '(8 − 2) · 180° : 8 = 135°.', hint: 'Shuma: (n − 2) · 180°.',
        whyWrong: ['Ky është gjashtëkëndëshi.', null, 'Ky është nëntëkëndëshi.', 'Ky është këndi i jashtëm.'],
      },
      en: {
        question: 'What is each interior angle of a regular octagon?', options: ['120°', '135°', '140°', '45°'],
        explanation: '(8 − 2) · 180° ÷ 8 = 135°.', hint: 'Sum: (n − 2) · 180°.',
        whyWrong: ['That is the hexagon.', null, 'That is the nonagon.', 'That is the exterior angle.'],
      },
      de: {
        question: 'Wie groß ist jeder Innenwinkel eines regelmäßigen Achtecks?', options: ['120°', '135°', '140°', '45°'],
        explanation: '(8 − 2) · 180° : 8 = 135°.', hint: 'Summe: (n − 2) · 180°.',
        whyWrong: ['Das gilt für das Sechseck.', null, 'Das gilt für das Neuneck.', 'Das ist der Außenwinkel.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 15 },
      verify: ['360 / 24', 15],
      al: { question: 'Këndi i jashtëm i një shumëkëndëshi të rregullt është 24°. Sa brinjë ka?', explanation: 'n = 360 : 24 = 15.', hint: 'Shuma e këndeve të jashtme është 360°.', commonMistakes: [{ value: 7.5, why: 'Përdorët 180° në vend të 360°.' }] },
      en: { question: 'The exterior angle of a regular polygon is 24°. How many sides does it have?', explanation: 'n = 360 ÷ 24 = 15.', hint: 'The exterior angles add up to 360°.', commonMistakes: [{ value: 7.5, why: 'You used 180° instead of 360°.' }] },
      de: { question: 'Der Außenwinkel eines regelmäßigen Vielecks ist 24°. Wie viele Ecken hat es?', explanation: 'n = 360 : 24 = 15.', hint: 'Die Außenwinkel ergeben 360°.', commonMistakes: [{ value: 7.5, why: 'Sie haben 180° statt 360° verwendet.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: ['(4 - 2) * 180 == 360', true],
      al: { question: 'Shuma e këndeve të brendshme të çdo katërkëndëshi është 360°.', explanation: 'E vërtetë: (4 − 2) · 180° = 360°.', hint: 'Dy trekëndësha.', whyWrong: 'Diagonalja e ndan në dy trekëndësha.' },
      en: { question: 'The interior angles of every quadrilateral add up to 360°.', explanation: 'True: (4 − 2) · 180° = 360°.', hint: 'Two triangles.', whyWrong: 'A diagonal splits it into two triangles.' },
      de: { question: 'Die Innenwinkel jedes Vierecks ergeben 360°.', explanation: 'Richtig: (4 − 2) · 180° = 360°.', hint: 'Zwei Dreiecke.', whyWrong: 'Eine Diagonale teilt es in zwei Dreiecke.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 2,
      verify: ['180 - 65', 115],
      al: {
        question: 'Paralelogrami ka një kënd 65°. Sa është këndi fqinj?', options: ['65°', '25°', '115°', '295°'],
        explanation: 'Këndet fqinje janë shtuese: 180° − 65° = 115°.', hint: 'Fqinjët kanë shumë 180°.',
        whyWrong: ['I barabartë është këndi i kundërt, jo fqinji.', 'Kjo do të ishte me 90°.', null, 'Kjo është 360° − 65°.'],
      },
      en: {
        question: 'A parallelogram has an angle of 65°. What is the neighbouring angle?', options: ['65°', '25°', '115°', '295°'],
        explanation: 'Neighbouring angles are supplementary: 180° − 65° = 115°.', hint: 'Neighbours add up to 180°.',
        whyWrong: ['The opposite angle is equal, not the neighbour.', 'That would use 90°.', null, 'That is 360° − 65°.'],
      },
      de: {
        question: 'Ein Parallelogramm hat einen Winkel von 65°. Wie groß ist der benachbarte Winkel?', options: ['65°', '25°', '115°', '295°'],
        explanation: 'Benachbarte Winkel ergänzen sich: 180° − 65° = 115°.', hint: 'Nachbarn ergeben 180°.',
        whyWrong: ['Gleich ist der Gegenwinkel, nicht der Nachbar.', 'Das wäre mit 90°.', null, 'Das ist 360° − 65°.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 50 },
      verify: ['(180 - 30) / 3', 50],
      al: { question: 'Dy kënde në një drejtëz janë x dhe 2x + 30°. Sa është x?', explanation: '3x + 30 = 180 → x = 50°.', hint: 'Shuma 180°.', unit: '°', commonMistakes: [{ value: 70, why: 'Përdorët 2x + 30 = 180 vetëm.' }] },
      en: { question: 'Two angles on a straight line are x and 2x + 30°. What is x?', explanation: '3x + 30 = 180 → x = 50°.', hint: 'They add up to 180°.', unit: '°', commonMistakes: [{ value: 70, why: 'You used only 2x + 30 = 180.' }] },
      de: { question: 'Zwei Winkel an einer Geraden sind x und 2x + 30°. Wie groß ist x?', explanation: '3x + 30 = 180 → x = 50°.', hint: 'Zusammen 180°.', unit: '°', commonMistakes: [{ value: 70, why: 'Sie haben nur 2x + 30 = 180 verwendet.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 0,
      verify: ['(6 - 2) * 180', 720],
      al: {
        question: 'Sa është shuma e këndeve të brendshme të gjashtëkëndëshit?', options: ['720°', '540°', '1 080°', '360°'],
        explanation: '(6 − 2) · 180° = 720°.', hint: '(n − 2) · 180°.',
        whyWrong: [null, 'Ky është pesëkëndëshi.', 'Ky është tetëkëndëshi.', 'Ky është katërkëndëshi (ose shuma e të jashtmeve).'],
      },
      en: {
        question: 'What is the interior angle sum of a hexagon?', options: ['720°', '540°', '1 080°', '360°'],
        explanation: '(6 − 2) · 180° = 720°.', hint: '(n − 2) · 180°.',
        whyWrong: [null, 'That is the pentagon.', 'That is the octagon.', 'That is the quadrilateral (or the exterior sum).'],
      },
      de: {
        question: 'Wie groß ist die Innenwinkelsumme eines Sechsecks?', options: ['720°', '540°', '1 080°', '360°'],
        explanation: '(6 − 2) · 180° = 720°.', hint: '(n − 2) · 180°.',
        whyWrong: [null, 'Das ist das Fünfeck.', 'Das ist das Achteck.', 'Das ist das Viereck (oder die Außenwinkelsumme).'],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: false,
      verify: 'text',
      al: { question: 'Shuma e këndeve të jashtme të një shumëkëndëshi rritet kur rritet numri i brinjëve.', explanation: 'E gabuar: shuma e këndeve të jashtme është gjithmonë 360°.', hint: 'Mendoni një rrotullim të plotë rreth figurës.', whyWrong: 'Duke ecur rreth figurës kthehesh një herë të plotë: 360°.' },
      en: { question: 'The exterior angles of a polygon add up to more when it has more sides.', explanation: 'False: the exterior angles always add up to 360°.', hint: 'Think of one full turn around the shape.', whyWrong: 'Walking around the shape you turn once completely: 360°.' },
      de: { question: 'Die Außenwinkelsumme eines Vielecks wird größer, wenn es mehr Ecken hat.', explanation: 'Falsch: Die Außenwinkel ergeben immer 360°.', hint: 'Denken Sie an eine volle Drehung um die Figur.', whyWrong: 'Beim Umlaufen dreht man sich genau einmal: 360°.' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 3,
      verify: ['8 * 9 / 6', 12],
      al: {
        question: 'Te trekëndëshat e ngjashëm brinja 6 i përgjigjet brinjës 9. Një brinjë tjetër e të voglit është 8. Sa është përkatësja?', options: ['11', '16', '10', '12'],
        explanation: 'k = 9/6 = 1,5; 8 · 1,5 = 12.', hint: 'Gjeni k.',
        whyWrong: ['U shtua 3 në vend që të shumëzohej me k.', 'Kjo do të ishte k = 2.', 'Kjo nuk del nga asnjë raport.', null],
      },
      en: {
        question: 'In similar triangles the side 6 matches the side 9. Another side of the small one is 8. What is the matching side?', options: ['11', '16', '10', '12'],
        explanation: 'k = 9/6 = 1.5; 8 · 1.5 = 12.', hint: 'Find k.',
        whyWrong: ['3 was added instead of multiplying by k.', 'That would be k = 2.', 'That does not come from any ratio.', null],
      },
      de: {
        question: 'In ähnlichen Dreiecken entspricht die Seite 6 der Seite 9. Eine andere Seite des kleinen ist 8. Wie lang ist die entsprechende?', options: ['11', '16', '10', '12'],
        explanation: 'k = 9/6 = 1,5; 8 · 1,5 = 12.', hint: 'k bestimmen.',
        whyWrong: ['Es wurde 3 addiert statt mit k multipliziert.', 'Das wäre k = 2.', 'Das ergibt sich aus keinem Verhältnis.', null],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 9 },
      verify: ['360 / (180 - 140)', 9],
      al: { question: 'Këndi i brendshëm i një shumëkëndëshi të rregullt është 140°. Sa brinjë ka?', explanation: 'I jashtmi 40°; n = 360 : 40 = 9.', hint: 'Fillimisht gjeni këndin e jashtëm.', commonMistakes: [{ value: 2.57, why: '360 : 140 nuk jep numrin e brinjëve; përdorni këndin e jashtëm.' }] },
      en: { question: 'The interior angle of a regular polygon is 140°. How many sides does it have?', explanation: 'Exterior 40°; n = 360 ÷ 40 = 9.', hint: 'Find the exterior angle first.', commonMistakes: [{ value: 2.57, why: '360 ÷ 140 is not the number of sides; use the exterior angle.' }] },
      de: { question: 'Der Innenwinkel eines regelmäßigen Vielecks ist 140°. Wie viele Ecken hat es?', explanation: 'Außenwinkel 40°; n = 360 : 40 = 9.', hint: 'Zuerst den Außenwinkel bestimmen.', commonMistakes: [{ value: 2.57, why: '360 : 140 ist nicht die Eckenzahl; den Außenwinkel verwenden.' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 18 },
      verify: ['1.5 * 24 / 2', 18],
      al: { question: 'Personi 1,5 m i gjatë hedh hije 2 m. Në të njëjtën kohë ndërtesa hedh hije 24 m. Sa metra e lartë është ndërtesa?', explanation: 'h/24 = 1,5/2 → h = 18 m.', hint: 'Trekëndësha të ngjashëm.', unit: 'm', commonMistakes: [{ value: 32, why: 'Raporti u kthye: h = 24 · 1,5/2.' }] },
      en: { question: 'A 1.5 m tall person casts a 2 m shadow. At the same time a building casts a 24 m shadow. How many metres tall is the building?', explanation: 'h/24 = 1.5/2 → h = 18 m.', hint: 'Similar triangles.', unit: 'm', commonMistakes: [{ value: 32, why: 'The ratio is upside down: h = 24 · 1.5/2.' }] },
      de: { question: 'Eine 1,5 m große Person wirft 2 m Schatten. Gleichzeitig wirft ein Gebäude 24 m Schatten. Wie viele Meter hoch ist es?', explanation: 'h/24 = 1,5/2 → h = 18 m.', hint: 'Ähnliche Dreiecke.', unit: 'm', commonMistakes: [{ value: 32, why: 'Das Verhältnis ist umgedreht: h = 24 · 1,5/2.' }] },
    },
  ],
};
