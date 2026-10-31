// Grade 9 · Theme 4 quiz: Plane geometry (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g9-plane-geometry-quiz',
  grade: 9,
  theme: 'g9-plane-geometry',
  order: 4,
  difficulty: 'intermediate',
  icon: '△',
  color: '#F4A261',
  i18n: {
    al: { title: 'Gjeometria në rrafsh', category: 'Klasa 9 · Tema 4', duration: '10 min' },
    en: { title: 'Plane geometry', category: 'Grade 9 · Theme 4', duration: '10 min' },
    de: { title: 'Ebene Geometrie', category: 'Klasse 9 · Thema 4', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 0,
      verify: ['180 - 48 - 67', 65],
      al: {
        question: 'Dy kënde të trekëndëshit janë 48° dhe 67°. Sa është i treti?', options: ['65°', '75°', '115°', '245°'],
        explanation: '180° − 48° − 67° = 65°.', hint: 'Shuma e këndeve është 180°.',
        whyWrong: [null, 'Gabim në zbritje.', 'Ky është këndi i jashtëm.', 'Shuma është 180°, jo 360°.'],
      },
      en: {
        question: 'Two angles of a triangle are 48° and 67°. What is the third?', options: ['65°', '75°', '115°', '245°'],
        explanation: '180° − 48° − 67° = 65°.', hint: 'The angles add up to 180°.',
        whyWrong: [null, 'Subtraction slip.', 'That is the exterior angle.', 'The sum is 180°, not 360°.'],
      },
      de: {
        question: 'Zwei Winkel eines Dreiecks sind 48° und 67°. Wie groß ist der dritte?', options: ['65°', '75°', '115°', '245°'],
        explanation: '180° − 48° − 67° = 65°.', hint: 'Die Winkelsumme ist 180°.',
        whyWrong: [null, 'Rechenfehler.', 'Das ist der Außenwinkel.', 'Die Summe ist 180°, nicht 360°.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 110 },
      verify: ['50 + 60', 110],
      al: { question: 'Në △ABC, ∠A = 50° dhe ∠B = 60°. Sa gradë është këndi i jashtëm te C?', explanation: '50° + 60° = 110°.', hint: 'Shuma e dy këndeve jo fqinje.', unit: '°', commonMistakes: [{ value: 70, why: 'Ky është këndi i brendshëm te C.' }] },
      en: { question: 'In △ABC, ∠A = 50° and ∠B = 60°. How many degrees is the exterior angle at C?', explanation: '50° + 60° = 110°.', hint: 'Sum of the two non-adjacent angles.', unit: '°', commonMistakes: [{ value: 70, why: 'That is the interior angle at C.' }] },
      de: { question: 'Im △ABC ist ∠A = 50° und ∠B = 60°. Wie viel Grad hat der Außenwinkel bei C?', explanation: '50° + 60° = 110°.', hint: 'Summe der zwei nicht anliegenden Winkel.', unit: '°', commonMistakes: [{ value: 70, why: 'Das ist der Innenwinkel bei C.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: false,
      verify: ['3 + 4 > 8', false],
      al: { question: 'Numrat 3, 4 dhe 8 mund të jenë brinjët e një trekëndëshi.', explanation: 'E gabuar: 3 + 4 = 7 < 8.', hint: 'Mosbarazimi i trekëndëshit.', whyWrong: 'Dy brinjët më të vogla nuk e kalojnë të tretën.' },
      en: { question: 'The numbers 3, 4 and 8 can be the sides of a triangle.', explanation: 'False: 3 + 4 = 7 < 8.', hint: 'The triangle inequality.', whyWrong: 'The two shorter sides do not add up to more than the third.' },
      de: { question: 'Die Zahlen 3, 4 und 8 können Seiten eines Dreiecks sein.', explanation: 'Falsch: 3 + 4 = 7 < 8.', hint: 'Dreiecksungleichung.', whyWrong: 'Die beiden kürzeren Seiten sind zusammen nicht länger als die dritte.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 2,
      verify: 'text',
      al: {
        question: 'Cili rast kongruence përdoret kur njihen dy brinjë dhe këndi ndërmjet tyre?', options: ['BBB', 'KBK', 'BKB', 'KKK'],
        explanation: 'Brinjë–kënd–brinjë: BKB.', hint: 'Ku ndodhet këndi?',
        whyWrong: ['Kërkon tri brinjë.', 'Kërkon dy kënde dhe brinjën ndërmjet tyre.', null, 'KKK nuk është rast kongruence.'],
      },
      en: {
        question: 'Which congruence criterion is used when two sides and the angle between them are known?', options: ['SSS', 'ASA', 'SAS', 'AAA'],
        explanation: 'Side–angle–side: SAS.', hint: 'Where is the angle?',
        whyWrong: ['It needs three sides.', 'It needs two angles and the side between them.', null, 'AAA is not a congruence criterion.'],
      },
      de: {
        question: 'Welcher Kongruenzsatz gilt, wenn zwei Seiten und der eingeschlossene Winkel bekannt sind?', options: ['SSS', 'WSW', 'SWS', 'WWW'],
        explanation: 'Seite–Winkel–Seite: SWS.', hint: 'Wo liegt der Winkel?',
        whyWrong: ['Braucht drei Seiten.', 'Braucht zwei Winkel und die Seite dazwischen.', null, 'WWW ist kein Kongruenzsatz.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 8 },
      verify: ['12 * 2 / 3', 8],
      al: { question: 'Mesorja ka gjatësi 12 cm. Sa cm larg nga kulmi është qendra e rëndesës?', explanation: 'G e ndan mesoren 2 : 1; 2/3 · 12 = 8 cm.', hint: 'Dy të tretat nga kulmi.', unit: 'cm', commonMistakes: [{ value: 6, why: 'G nuk është në mesin e mesores.' }, { value: 4, why: 'Kjo është largësia nga mesi i brinjës.' }] },
      en: { question: 'A median is 12 cm long. How many cm from the vertex is the centroid?', explanation: 'G divides the median 2 : 1; 2/3 · 12 = 8 cm.', hint: 'Two thirds from the vertex.', unit: 'cm', commonMistakes: [{ value: 6, why: 'G is not at the middle of the median.' }, { value: 4, why: 'That is the distance from the midpoint of the side.' }] },
      de: { question: 'Eine Seitenhalbierende ist 12 cm lang. Wie viele cm ist der Schwerpunkt von der Ecke entfernt?', explanation: 'G teilt sie 2 : 1; 2/3 · 12 = 8 cm.', hint: 'Zwei Drittel von der Ecke aus.', unit: 'cm', commonMistakes: [{ value: 6, why: 'G liegt nicht in der Mitte.' }, { value: 4, why: 'Das ist der Abstand zum Seitenmittelpunkt.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 3,
      verify: 'text',
      al: {
        question: 'Cili është vendi gjeometrik i pikave njësoj larg nga dy pika A dhe B?', options: ['Rrethi me qendër A', 'Drejtëza AB', 'Vetëm mesi i AB', 'Simetralja e AB'],
        explanation: 'Të gjitha pikat me PA = PB shtrihen në simetralen e AB.', hint: 'Mesi është vetëm një nga këto pika.',
        whyWrong: ['Pikat e rrethit janë njësoj larg vetëm nga A.', 'Në drejtëzën AB vetëm mesi ka PA = PB.', 'Ka edhe pika të tjera me PA = PB.', null],
      },
      en: {
        question: 'What is the locus of points equally far from two points A and B?', options: ['The circle with centre A', 'The line AB', 'Only the midpoint of AB', 'The perpendicular bisector of AB'],
        explanation: 'All points with PA = PB lie on the perpendicular bisector of AB.', hint: 'The midpoint is just one of these points.',
        whyWrong: ['Points on the circle are equally far from A only.', 'On line AB only the midpoint has PA = PB.', 'There are other points with PA = PB.', null],
      },
      de: {
        question: 'Welche Ortslinie bilden die Punkte mit gleichem Abstand zu zwei Punkten A und B?', options: ['Der Kreis um A', 'Die Gerade AB', 'Nur der Mittelpunkt von AB', 'Die Mittelsenkrechte von AB'],
        explanation: 'Alle Punkte mit PA = PB liegen auf der Mittelsenkrechten von AB.', hint: 'Der Mittelpunkt ist nur einer dieser Punkte.',
        whyWrong: ['Kreispunkte haben nur zu A gleichen Abstand.', 'Auf AB hat nur der Mittelpunkt PA = PB.', 'Es gibt weitere Punkte mit PA = PB.', null],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: true,
      verify: 'text',
      al: { question: 'Vija e mesme e trekëndëshit është paralele me brinjën e tretë dhe sa gjysma e saj.', explanation: 'E vërtetë: kjo është teorema e vijës së mesme.', hint: 'Lidh meset e dy brinjëve.', whyWrong: 'P.sh. me brinjë 10 cm, vija e mesme paralele me të është 5 cm.' },
      en: { question: 'A midsegment of a triangle is parallel to the third side and half as long.', explanation: 'True: this is the midsegment theorem.', hint: 'It joins the midpoints of two sides.', whyWrong: 'E.g. for a 10 cm side the parallel midsegment is 5 cm.' },
      de: { question: 'Eine Mittellinie im Dreieck ist parallel zur dritten Seite und halb so lang.', explanation: 'Richtig: Das ist der Mittellinien-Satz.', hint: 'Sie verbindet die Mittelpunkte zweier Seiten.', whyWrong: 'Z. B. ist bei einer 10-cm-Seite die parallele Mittellinie 5 cm lang.' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 1,
      verify: ['3 * 180 / 6', 90],
      al: {
        question: 'Këndet e trekëndëshit janë në raportin 1 : 2 : 3. Sa është këndi më i madh?', options: ['60°', '90°', '120°', '30°'],
        explanation: '6 pjesë = 180°, 1 pjesë = 30°, më i madhi 3 · 30° = 90°.', hint: 'Shuma e pjesëve është 6.',
        whyWrong: ['Ky është këndi i mesëm.', null, 'Pjesëtuat 360° në vend të 180°.', 'Ky është këndi më i vogël.'],
      },
      en: {
        question: 'The angles of a triangle are in the ratio 1 : 2 : 3. What is the largest angle?', options: ['60°', '90°', '120°', '30°'],
        explanation: '6 parts = 180°, 1 part = 30°, largest 3 · 30° = 90°.', hint: 'The parts add up to 6.',
        whyWrong: ['That is the middle angle.', null, 'You shared 360° instead of 180°.', 'That is the smallest angle.'],
      },
      de: {
        question: 'Die Winkel eines Dreiecks stehen im Verhältnis 1 : 2 : 3. Wie groß ist der größte Winkel?', options: ['60°', '90°', '120°', '30°'],
        explanation: '6 Teile = 180°, 1 Teil = 30°, größter 3 · 30° = 90°.', hint: 'Die Teile ergeben 6.',
        whyWrong: ['Das ist der mittlere Winkel.', null, 'Sie haben 360° statt 180° aufgeteilt.', 'Das ist der kleinste Winkel.'],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 13 },
      verify: ['5 + 9 - 1', 13],
      al: { question: 'Dy brinjë të trekëndëshit janë 5 cm dhe 9 cm. Sa është gjatësia më e madhe e plotë (në cm) e brinjës së tretë?', explanation: 'c < 5 + 9 = 14, pra më e madhja e plotë është 13 cm.', hint: 'c < a + b (rreptësisht).', unit: 'cm', commonMistakes: [{ value: 14, why: 'Me 14 cm trekëndëshi rrafshohet: duhet c < 14.' }] },
      en: { question: 'Two sides of a triangle are 5 cm and 9 cm. What is the largest whole-number length (in cm) of the third side?', explanation: 'c < 5 + 9 = 14, so the largest whole number is 13 cm.', hint: 'c < a + b (strictly).', unit: 'cm', commonMistakes: [{ value: 14, why: 'At 14 cm the triangle goes flat: c < 14 is needed.' }] },
      de: { question: 'Zwei Seiten eines Dreiecks sind 5 cm und 9 cm lang. Welche ist die größte ganzzahlige Länge (in cm) der dritten Seite?', explanation: 'c < 5 + 9 = 14, also höchstens 13 cm.', hint: 'c < a + b (echt kleiner).', unit: 'cm', commonMistakes: [{ value: 14, why: 'Bei 14 cm wird das Dreieck flach: c < 14 ist nötig.' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 36 },
      verify: ['180 - 2 * 72', 36],
      al: { question: 'Në trekëndëshin barakrahës këndi i bazës është 72°. Sa gradë është këndi në kulm?', explanation: '180° − 2 · 72° = 36°.', hint: 'Këndet e bazës janë të barabarta.', unit: '°', commonMistakes: [{ value: 108, why: 'Zbritët vetëm një kënd të bazës.' }] },
      en: { question: 'In an isosceles triangle the base angle is 72°. How many degrees is the apex angle?', explanation: '180° − 2 · 72° = 36°.', hint: 'The base angles are equal.', unit: '°', commonMistakes: [{ value: 108, why: 'You subtracted only one base angle.' }] },
      de: { question: 'Im gleichschenkligen Dreieck ist ein Basiswinkel 72°. Wie viel Grad hat der Winkel an der Spitze?', explanation: '180° − 2 · 72° = 36°.', hint: 'Die Basiswinkel sind gleich.', unit: '°', commonMistakes: [{ value: 108, why: 'Sie haben nur einen Basiswinkel abgezogen.' }] },
    },
  ],
};
