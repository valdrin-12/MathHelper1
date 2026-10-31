// Grade 8 · Theme 4 quiz: Plane geometry (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g8-plane-geometry-quiz',
  grade: 8,
  theme: 'g8-plane-geometry',
  order: 4,
  difficulty: 'intermediate',
  icon: '△',
  color: '#F4A261',
  i18n: {
    al: { title: 'Gjeometria në plan', category: 'Klasa 8 · Tema 4', duration: '10 min' },
    en: { title: 'Plane geometry', category: 'Grade 8 · Theme 4', duration: '10 min' },
    de: { title: 'Ebene Geometrie', category: 'Klasse 8 · Thema 4', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 1,
      verify: ['(180 - 40) / 2', 70],
      al: {
        question: 'Në trekëndëshin barakrahës këndi në kulm është 40°. Sa është secili kënd i bazës?', options: ['40°', '70°', '140°', '50°'],
        explanation: '(180° − 40°) : 2 = 70°.', hint: 'Këndet e bazës janë të barabarta.',
        whyWrong: ['Këndet e bazës nuk janë sa këndi në kulm.', null, 'Kjo është shuma e dy këndeve të bazës.', '90° − 40° = 50° nuk vlen këtu.'],
      },
      en: {
        question: 'In an isosceles triangle the apex angle is 40°. What is each base angle?', options: ['40°', '70°', '140°', '50°'],
        explanation: '(180° − 40°) ÷ 2 = 70°.', hint: 'The base angles are equal.',
        whyWrong: ['The base angles are not equal to the apex angle.', null, 'That is the sum of both base angles.', '90° − 40° = 50° does not apply here.'],
      },
      de: {
        question: 'In einem gleichschenkligen Dreieck ist der Winkel an der Spitze 40°. Wie groß ist jeder Basiswinkel?', options: ['40°', '70°', '140°', '50°'],
        explanation: '(180° − 40°) : 2 = 70°.', hint: 'Die Basiswinkel sind gleich.',
        whyWrong: ['Die Basiswinkel sind nicht gleich dem Winkel an der Spitze.', null, 'Das ist die Summe beider Basiswinkel.', '90° − 40° = 50° gilt hier nicht.'],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 55 },
      verify: ['110 / 2', 55],
      al: { question: 'Këndi qendror mbi harkun AB është 110°. Sa gradë është këndi periferik mbi të njëjtin hark?', explanation: '110° : 2 = 55°.', hint: 'Periferiku është gjysma e qendrorit.', unit: '°', commonMistakes: [{ value: 220, why: 'Periferiku është gjysma, jo dyfishi.' }, { value: 110, why: 'Ata nuk janë të barabartë.' }] },
      en: { question: 'The central angle on arc AB is 110°. How many degrees is the inscribed angle on the same arc?', explanation: '110° ÷ 2 = 55°.', hint: 'The inscribed angle is half the central angle.', unit: '°', commonMistakes: [{ value: 220, why: 'The inscribed angle is half, not double.' }, { value: 110, why: 'They are not equal.' }] },
      de: { question: 'Der Mittelpunktswinkel über dem Bogen AB ist 110°. Wie viel Grad hat der Umfangswinkel über demselben Bogen?', explanation: '110° : 2 = 55°.', hint: 'Der Umfangswinkel ist halb so groß.', unit: '°', commonMistakes: [{ value: 220, why: 'Der Umfangswinkel ist die Hälfte, nicht das Doppelte.' }, { value: 110, why: 'Sie sind nicht gleich groß.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: ['12 / 2 == 6', true],
      al: { question: 'Te trekëndëshi 30°–60°–90° me hipotenuzë 12 cm, kateta më e vogël është 6 cm.', explanation: 'E vërtetë: kateta përballë 30° është gjysma e hipotenuzës.', hint: 'Gjysma e trekëndëshit barabrinjës.', whyWrong: '12 : 2 = 6 cm.' },
      en: { question: 'In a 30°–60°–90° triangle with hypotenuse 12 cm, the short leg is 6 cm.', explanation: 'True: the leg opposite 30° is half the hypotenuse.', hint: 'Half an equilateral triangle.', whyWrong: '12 ÷ 2 = 6 cm.' },
      de: { question: 'Im 30°–60°–90°-Dreieck mit Hypotenuse 12 cm ist die kurze Kathete 6 cm.', explanation: 'Richtig: Die Kathete gegenüber 30° ist halb so lang wie die Hypotenuse.', hint: 'Halbes gleichseitiges Dreieck.', whyWrong: '12 : 2 = 6 cm.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 3,
      verify: ['180 - 65', 115],
      al: {
        question: 'a ∥ b; një kënd i njëanshëm i brendshëm është 65°. Sa është tjetri?', options: ['65°', '25°', '135°', '115°'],
        explanation: 'Të njëanshmit e brendshëm kanë shumën 180°: 180° − 65° = 115°.', hint: 'Ata janë shtues.',
        whyWrong: ['Të barabartë janë alternet, jo të njëanshmit.', 'Kjo do të ishte plotësuesi (90°).', 'Gabim në zbritje: 180 − 65 = 115.', null],
      },
      en: {
        question: 'a ∥ b; one co-interior angle is 65°. What is the other?', options: ['65°', '25°', '135°', '115°'],
        explanation: 'Co-interior angles add up to 180°: 180° − 65° = 115°.', hint: 'They are supplementary.',
        whyWrong: ['Alternate angles are equal, co-interior angles are not.', 'That would be the complement (90°).', 'Subtraction slip: 180 − 65 = 115.', null],
      },
      de: {
        question: 'a ∥ b; ein Nachbarwinkel an den Parallelen ist 65°. Wie groß ist der andere?', options: ['65°', '25°', '135°', '115°'],
        explanation: 'Nachbarwinkel an Parallelen ergeben 180°: 180° − 65° = 115°.', hint: 'Sie ergänzen sich zu 180°.',
        whyWrong: ['Gleich groß sind Wechselwinkel, nicht Nachbarwinkel.', 'Das wäre die Ergänzung zu 90°.', 'Rechenfehler: 180 − 65 = 115.', null],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 12 },
      verify: ['sqrt(13^2 - 5^2)', 12],
      al: { question: 'Rrezja e rrethit është 5 cm dhe OP = 13 cm. Sa cm është tangjentja nga P?', explanation: 'Tangjentja ⊥ rrezes: t = √(169 − 25) = 12 cm.', hint: 't² = OP² − r².', unit: 'cm', commonMistakes: [{ value: 8, why: 'Zbritët gjatësitë, jo katrorët.' }, { value: 13.93, why: 'OP është hipotenuza; katrorët zbriten.' }] },
      en: { question: 'The radius is 5 cm and OP = 13 cm. How many cm is the tangent from P?', explanation: 'Tangent ⊥ radius: t = √(169 − 25) = 12 cm.', hint: 't² = OP² − r².', unit: 'cm', commonMistakes: [{ value: 8, why: 'You subtracted the lengths, not the squares.' }, { value: 13.93, why: 'OP is the hypotenuse; subtract the squares.' }] },
      de: { question: 'Der Radius ist 5 cm und OP = 13 cm. Wie viele cm ist die Tangentenstrecke von P lang?', explanation: 'Tangente ⊥ Radius: t = √(169 − 25) = 12 cm.', hint: 't² = OP² − r².', unit: 'cm', commonMistakes: [{ value: 8, why: 'Sie haben die Längen subtrahiert, nicht die Quadrate.' }, { value: 13.93, why: 'OP ist die Hypotenuse; die Quadrate subtrahieren.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 0,
      verify: 'text',
      al: {
        question: 'AB = DE, ∠B = ∠E dhe BC = EF. Sipas cilit kriter △ABC ≅ △DEF?', options: ['BKB', 'BBB', 'KBK', 'KKK'],
        explanation: 'Dy brinjë dhe këndi ndërmjet tyre: BKB.', hint: 'Ku ndodhet këndi i dhënë?',
        whyWrong: [null, 'Nuk dimë brinjën e tretë.', 'Dimë vetëm një kënd.', 'KKK nuk është kriter kongruence.'],
      },
      en: {
        question: 'AB = DE, ∠B = ∠E and BC = EF. By which criterion is △ABC ≅ △DEF?', options: ['SAS', 'SSS', 'ASA', 'AAA'],
        explanation: 'Two sides and the angle between them: SAS.', hint: 'Where is the given angle?',
        whyWrong: [null, 'The third side is not known.', 'Only one angle is known.', 'AAA is not a congruence criterion.'],
      },
      de: {
        question: 'AB = DE, ∠B = ∠E und BC = EF. Nach welchem Satz ist △ABC ≅ △DEF?', options: ['SWS', 'SSS', 'WSW', 'WWW'],
        explanation: 'Zwei Seiten und der eingeschlossene Winkel: SWS.', hint: 'Wo liegt der gegebene Winkel?',
        whyWrong: [null, 'Die dritte Seite ist nicht bekannt.', 'Es ist nur ein Winkel bekannt.', 'WWW ist kein Kongruenzsatz.'],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: false,
      verify: 'text',
      al: { question: 'Dy trekëndësha me të njëjtat tri kënde janë gjithmonë kongruentë.', explanation: 'E gabuar: ata kanë të njëjtën formë, por njëri mund të jetë zmadhim i tjetrit.', hint: 'Mendoni një trekëndësh të vogël dhe një të madh barabrinjës.', whyWrong: 'KKK nuk e përcakton madhësinë.' },
      en: { question: 'Two triangles with the same three angles are always congruent.', explanation: 'False: they have the same shape, but one can be an enlargement of the other.', hint: 'Think of a small and a large equilateral triangle.', whyWrong: 'AAA does not fix the size.' },
      de: { question: 'Zwei Dreiecke mit denselben drei Winkeln sind immer kongruent.', explanation: 'Falsch: Sie haben dieselbe Form, aber eines kann eine Vergrößerung des anderen sein.', hint: 'Denken Sie an ein kleines und ein großes gleichseitiges Dreieck.', whyWrong: 'WWW legt die Größe nicht fest.' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 2,
      verify: ['sqrt(8^2 - 4^2)', '4 * sqrt(3)', 1e-9, '4√3'],
      al: {
        question: 'Sa është lartësia e trekëndëshit barabrinjës me brinjë 8 cm?', options: ['4 cm', '8√3 cm', '4√3 cm', '6 cm'],
        explanation: 'h = s√3/2 = 8√3/2 = 4√3 ≈ 6,93 cm.', hint: 'Lartësia e ndan atë në dy trekëndësha 30°–60°–90°.',
        whyWrong: ['4 cm është gjysma e brinjës, jo lartësia.', 'Harruat të pjesëtoni me 2.', null, '6 cm është vetëm afrim i papërshtatshëm.'],
      },
      en: {
        question: 'What is the height of an equilateral triangle with side 8 cm?', options: ['4 cm', '8√3 cm', '4√3 cm', '6 cm'],
        explanation: 'h = s√3/2 = 8√3/2 = 4√3 ≈ 6.93 cm.', hint: 'The height splits it into two 30°–60°–90° triangles.',
        whyWrong: ['4 cm is half the side, not the height.', 'You forgot to divide by 2.', null, '6 cm is only a rough guess.'],
      },
      de: {
        question: 'Wie hoch ist ein gleichseitiges Dreieck mit 8 cm Seitenlänge?', options: ['4 cm', '8√3 cm', '4√3 cm', '6 cm'],
        explanation: 'h = s√3/2 = 8√3/2 = 4√3 ≈ 6,93 cm.', hint: 'Die Höhe teilt es in zwei 30°–60°–90°-Dreiecke.',
        whyWrong: ['4 cm ist die halbe Seite, nicht die Höhe.', 'Die Division durch 2 fehlt.', null, '6 cm ist nur grob geschätzt.'],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 5 },
      verify: ['sqrt((4-1)^2 + (6-2)^2)', 5],
      al: { question: 'Sa është largësia ndërmjet pikave A(1, 2) dhe B(4, 6)?', explanation: 'Katetet 3 dhe 4: AB = √(9 + 16) = 5.', hint: 'Vizatoni trekëndëshin kënddrejtë.', commonMistakes: [{ value: 7, why: 'Mblodhët katetet; largësia është hipotenuzë.' }] },
      en: { question: 'What is the distance between the points A(1, 2) and B(4, 6)?', explanation: 'Legs 3 and 4: AB = √(9 + 16) = 5.', hint: 'Draw the right triangle.', commonMistakes: [{ value: 7, why: 'You added the legs; the distance is a hypotenuse.' }] },
      de: { question: 'Wie groß ist der Abstand der Punkte A(1 | 2) und B(4 | 6)?', explanation: 'Katheten 3 und 4: AB = √(9 + 16) = 5.', hint: 'Zeichnen Sie das rechtwinklige Dreieck.', commonMistakes: [{ value: 7, why: 'Sie haben die Katheten addiert; der Abstand ist eine Hypotenuse.' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 30 },
      verify: ['40 - 10', 30],
      al: { question: 'a ∥ b; dy kënde alterne të brendshme janë 3x + 10° dhe 2x + 40°. Sa është x?', explanation: '3x + 10 = 2x + 40, pra x = 30°.', hint: 'Alternet janë të barabarta.', unit: '°', commonMistakes: [{ value: 26, why: 'Shumën 180° e kanë të njëanshmit, jo alternet.' }] },
      en: { question: 'a ∥ b; two alternate interior angles are 3x + 10° and 2x + 40°. What is x?', explanation: '3x + 10 = 2x + 40, so x = 30°.', hint: 'Alternate angles are equal.', unit: '°', commonMistakes: [{ value: 26, why: 'Co-interior angles add to 180°, alternate angles are equal.' }] },
      de: { question: 'a ∥ b; zwei Wechselwinkel sind 3x + 10° und 2x + 40°. Wie groß ist x?', explanation: '3x + 10 = 2x + 40, also x = 30°.', hint: 'Wechselwinkel sind gleich groß.', unit: '°', commonMistakes: [{ value: 26, why: 'Nachbarwinkel ergeben 180°, Wechselwinkel sind gleich.' }] },
    },
  ],
};
