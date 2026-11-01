// Grade 9 · Theme 9 quiz: Right-triangle trigonometry (format: see g6-natural-numbers-quiz.js)
export default {
  id: 'g9-right-triangle-trig-quiz',
  grade: 9,
  theme: 'g9-right-triangle-trig',
  order: 9,
  difficulty: 'intermediate',
  icon: 'sin',
  color: '#3A86FF',
  i18n: {
    al: { title: 'Trigonometria në trekëndëshin kënddrejtë', category: 'Klasa 9 · Tema 9', duration: '10 min' },
    en: { title: 'Right-triangle trigonometry', category: 'Grade 9 · Theme 9', duration: '10 min' },
    de: { title: 'Trigonometrie im rechtwinkligen Dreieck', category: 'Klasse 9 · Thema 9', duration: '10 min' },
  },
  questions: [
    {
      id: 1, type: 'choice', difficulty: 'easy', correct: 3,
      verify: ['3/5', '3/5', 1e-9, '3/5'],
      al: {
        question: 'Kateta përballë α është 3 dhe hipotenuza 5. Sa është sin α?', options: ['3/4', '4/5', '5/3', '3/5'],
        explanation: 'sin α = përballë/hipotenuzë = 3/5.', hint: 'sin = përballë/hipotenuzë.',
        whyWrong: ['Ky është tg α.', 'Ky është cos α.', 'Raporti u kthye; sin ≤ 1.', null],
      },
      en: {
        question: 'The leg opposite α is 3 and the hypotenuse is 5. What is sin α?', options: ['3/4', '4/5', '5/3', '3/5'],
        explanation: 'sin α = opposite/hypotenuse = 3/5.', hint: 'sin = opposite/hypotenuse.',
        whyWrong: ['That is tan α.', 'That is cos α.', 'Upside down; sin ≤ 1.', null],
      },
      de: {
        question: 'Die Gegenkathete von α ist 3, die Hypotenuse 5. Wie groß ist sin α?', options: ['3/4', '4/5', '5/3', '3/5'],
        explanation: 'sin α = Gegenkathete/Hypotenuse = 3/5.', hint: 'sin = Gegenkathete/Hypotenuse.',
        whyWrong: ['Das ist tan α.', 'Das ist cos α.', 'Umgedreht; sin ≤ 1.', null],
      },
    },
    {
      id: 2, type: 'input', difficulty: 'easy', answer: { value: 1 },
      verify: ['sin(30 deg) + cos(60 deg)', 1],
      explainVisual: { type: 'unitCircle', angle: 30, marks: [60], alt: { al: 'Rrethi njësi me një kënd që ndryshon me rrëshqitës; tregohen sin, cos dhe tg.', en: 'The unit circle with an angle on a slider; sin, cos and tan are shown.', de: 'Der Einheitskreis mit einem Winkel als Schieberegler; sin, cos und tan werden angezeigt.' } },
      al: { question: 'Llogaritni sin 30° + cos 60°.', explanation: '1/2 + 1/2 = 1.', hint: 'sin 30° = cos 60° = 1/2.', commonMistakes: [{ value: 0.5, why: 'Të dy vlerat janë 1/2; shuma është 1.' }] },
      en: { question: 'Work out sin 30° + cos 60°.', explanation: '1/2 + 1/2 = 1.', hint: 'sin 30° = cos 60° = 1/2.', commonMistakes: [{ value: 0.5, why: 'Both values are 1/2; the sum is 1.' }] },
      de: { question: 'Berechnen Sie sin 30° + cos 60°.', explanation: '1/2 + 1/2 = 1.', hint: 'sin 30° = cos 60° = 1/2.', commonMistakes: [{ value: 0.5, why: 'Beide Werte sind 1/2; die Summe ist 1.' }] },
    },
    {
      id: 3, type: 'truefalse', difficulty: 'easy', correct: true,
      verify: ['abs(sin(40 deg) - cos(50 deg)) < 1e-9', true],
      explainVisual: { type: 'unitCircle', angle: 40, marks: [50], alt: { al: 'Rrethi njësi me një kënd që ndryshon me rrëshqitës; tregohen sin, cos dhe tg.', en: 'The unit circle with an angle on a slider; sin, cos and tan are shown.', de: 'Der Einheitskreis mit einem Winkel als Schieberegler; sin, cos und tan werden angezeigt.' } },
      al: { question: 'sin 40° = cos 50°', explanation: 'E vërtetë: 40° + 50° = 90°, pra janë kënde komplementare.', hint: 'sin α = cos(90° − α).', whyWrong: 'cos 50° = sin(90° − 50°) = sin 40°.' },
      en: { question: 'sin 40° = cos 50°', explanation: 'True: 40° + 50° = 90°, so they are complementary angles.', hint: 'sin α = cos(90° − α).', whyWrong: 'cos 50° = sin(90° − 50°) = sin 40°.' },
      de: { question: 'sin 40° = cos 50°', explanation: 'Richtig: 40° + 50° = 90°, es sind Komplementwinkel.', hint: 'sin α = cos(90° − α).', whyWrong: 'cos 50° = sin(90° − 50°) = sin 40°.' },
    },
    {
      id: 4, type: 'choice', difficulty: 'easy', correct: 2,
      verify: ['tan(45 deg)', 1],
      explainVisual: { type: 'unitCircle', angle: 45, alt: { al: 'Rrethi njësi me një kënd që ndryshon me rrëshqitës; tregohen sin, cos dhe tg.', en: 'The unit circle with an angle on a slider; sin, cos and tan are shown.', de: 'Der Einheitskreis mit einem Winkel als Schieberegler; sin, cos und tan werden angezeigt.' } },
      al: {
        question: 'Sa është tg 45°?', options: ['0', '1/2', '1', '√3'],
        explanation: 'Te trekëndëshi 45°–45°–90° katetet janë të barabarta: tg 45° = 1.', hint: 'Përballë = e afërt.',
        whyWrong: ['tg 0° = 0.', '1/2 është sin 30°.', null, '√3 është tg 60°.'],
      },
      en: {
        question: 'What is tan 45°?', options: ['0', '1/2', '1', '√3'],
        explanation: 'In the 45°–45°–90° triangle the legs are equal: tan 45° = 1.', hint: 'Opposite = adjacent.',
        whyWrong: ['tan 0° = 0.', '1/2 is sin 30°.', null, '√3 is tan 60°.'],
      },
      de: {
        question: 'Wie groß ist tan 45°?', options: ['0', '1/2', '1', '√3'],
        explanation: 'Im 45°–45°–90°-Dreieck sind die Katheten gleich: tan 45° = 1.', hint: 'Gegenkathete = Ankathete.',
        whyWrong: ['tan 0° = 0.', '1/2 ist sin 30°.', null, '√3 ist tan 60°.'],
      },
    },
    {
      id: 5, type: 'input', difficulty: 'medium', answer: { value: 5.2, tolerance: 0.05 },
      verify: ['6 * sin(60 deg)', 5.2, 0.05],
      al: { question: 'Një shkallë 6 m bën kënd 60° me tokën. Sa metra lart arrin në mur? (një dhjetore)', explanation: 'h = 6 · sin 60° = 3√3 ≈ 5,2 m.', hint: 'Lartësia është përballë këndit 60°.', unit: 'm', commonMistakes: [{ value: 3, why: 'Kjo është 6 · cos 60°, largësia në tokë.' }] },
      en: { question: 'A 6 m ladder makes 60° with the ground. How many metres up the wall does it reach? (one decimal place)', explanation: 'h = 6 · sin 60° = 3√3 ≈ 5.2 m.', hint: 'The height is opposite the 60° angle.', unit: 'm', commonMistakes: [{ value: 3, why: 'That is 6 · cos 60°, the distance on the ground.' }] },
      de: { question: 'Eine 6 m lange Leiter bildet mit dem Boden 60°. Wie viele Meter hoch reicht sie an der Wand? (eine Dezimalstelle)', explanation: 'h = 6 · sin 60° = 3√3 ≈ 5,2 m.', hint: 'Die Höhe liegt dem 60°-Winkel gegenüber.', unit: 'm', commonMistakes: [{ value: 3, why: 'Das ist 6 · cos 60°, der Abstand am Boden.' }] },
    },
    {
      id: 6, type: 'choice', difficulty: 'medium', correct: 0,
      verify: ['sqrt(1 - (3/5)^2)', '4/5', 1e-9, '4/5'],
      al: {
        question: 'sin α = 3/5 dhe α është i ngushtë. Sa është cos α?', options: ['4/5', '2/5', '5/4', '3/4'],
        explanation: 'cos α = √(1 − 9/25) = 4/5.', hint: 'sin²α + cos²α = 1.',
        whyWrong: [null, 'cos α ≠ 1 − sin α.', 'cos ≤ 1.', 'Ky është tg α.'],
      },
      en: {
        question: 'sin α = 3/5 and α is acute. What is cos α?', options: ['4/5', '2/5', '5/4', '3/4'],
        explanation: 'cos α = √(1 − 9/25) = 4/5.', hint: 'sin²α + cos²α = 1.',
        whyWrong: [null, 'cos α ≠ 1 − sin α.', 'cos ≤ 1.', 'That is tan α.'],
      },
      de: {
        question: 'sin α = 3/5, α spitz. Wie groß ist cos α?', options: ['4/5', '2/5', '5/4', '3/4'],
        explanation: 'cos α = √(1 − 9/25) = 4/5.', hint: 'sin²α + cos²α = 1.',
        whyWrong: [null, 'cos α ≠ 1 − sin α.', 'cos ≤ 1.', 'Das ist tan α.'],
      },
    },
    {
      id: 7, type: 'truefalse', difficulty: 'medium', correct: false,
      verify: ['1.2 <= 1', false],
      al: { question: 'Për një kënd të ngushtë mund të jetë sin α = 1,2.', explanation: 'E gabuar: kateta është më e shkurtër se hipotenuza, prandaj 0 < sin α < 1.', hint: 'sin = përballë/hipotenuzë.', whyWrong: 'Hipotenuza është brinja më e gjatë.' },
      en: { question: 'For an acute angle, sin α can be 1.2.', explanation: 'False: a leg is shorter than the hypotenuse, so 0 < sin α < 1.', hint: 'sin = opposite/hypotenuse.', whyWrong: 'The hypotenuse is the longest side.' },
      de: { question: 'Für einen spitzen Winkel kann sin α = 1,2 sein.', explanation: 'Falsch: Eine Kathete ist kürzer als die Hypotenuse, also 0 < sin α < 1.', hint: 'sin = Gegenkathete/Hypotenuse.', whyWrong: 'Die Hypotenuse ist die längste Seite.' },
    },
    {
      id: 8, type: 'choice', difficulty: 'medium', correct: 1,
      verify: ['8/6', '4/3', 1e-9, '4/3'],
      al: {
        question: 'Kateta përballë α është 8, e afërta 6. Sa është tg α?', options: ['3/4', '4/3', '3/5', '4/5'],
        explanation: 'tg α = 8/6 = 4/3.', hint: 'tg = përballë/e afërt.',
        whyWrong: ['Ky është cotg α.', null, 'Ky është cos α (6/10).', 'Ky është sin α (8/10).'],
      },
      en: {
        question: 'The leg opposite α is 8, the adjacent leg 6. What is tan α?', options: ['3/4', '4/3', '3/5', '4/5'],
        explanation: 'tan α = 8/6 = 4/3.', hint: 'tan = opposite/adjacent.',
        whyWrong: ['That is cot α.', null, 'That is cos α (6/10).', 'That is sin α (8/10).'],
      },
      de: {
        question: 'Die Gegenkathete von α ist 8, die Ankathete 6. Wie groß ist tan α?', options: ['3/4', '4/3', '3/5', '4/5'],
        explanation: 'tan α = 8/6 = 4/3.', hint: 'tan = Gegenkathete/Ankathete.',
        whyWrong: ['Das ist cot α.', null, 'Das ist cos α (6/10).', 'Das ist sin α (8/10).'],
      },
    },
    {
      id: 9, type: 'input', difficulty: 'hard', answer: { value: 36.9, tolerance: 0.1 },
      verify: ['atan(3/4) * 180 / pi', 36.9, 0.05],
      al: { question: 'Katetet janë 3 dhe 4. Sa gradë është këndi përballë katetës 3? (një dhjetore)', explanation: 'tg α = 3/4 → α ≈ 36,9°.', hint: 'Përdorni tg⁻¹ në makinë llogaritëse (në gradë).', unit: '°', commonMistakes: [{ value: 53.1, why: 'Ky është këndi tjetër, përballë katetës 4.' }, { value: 0.64, why: 'Makina është në radianë.' }] },
      en: { question: 'The legs are 3 and 4. How many degrees is the angle opposite the leg 3? (one decimal place)', explanation: 'tan α = 3/4 → α ≈ 36.9°.', hint: 'Use tan⁻¹ on a calculator (in degrees).', unit: '°', commonMistakes: [{ value: 53.1, why: 'That is the other angle, opposite the leg 4.' }, { value: 0.64, why: 'The calculator is in radians.' }] },
      de: { question: 'Die Katheten sind 3 und 4. Wie viel Grad hat der Winkel gegenüber der Kathete 3? (eine Dezimalstelle)', explanation: 'tan α = 3/4 → α ≈ 36,9°.', hint: 'tan⁻¹ am Taschenrechner (in Grad).', unit: '°', commonMistakes: [{ value: 53.1, why: 'Das ist der andere Winkel, gegenüber der Kathete 4.' }, { value: 0.64, why: 'Der Rechner steht auf Bogenmaß.' }] },
    },
    {
      id: 10, type: 'input', difficulty: 'hard', answer: { value: 5 },
      verify: ['10 * sin(30 deg)', 5],
      al: { question: 'Hipotenuza është 10 cm dhe këndi 30°. Sa cm është kateta përballë këndit?', explanation: '10 · sin 30° = 10 · 1/2 = 5 cm.', hint: 'përballë = hipotenuzë · sin α.', unit: 'cm', commonMistakes: [{ value: 8.66, why: 'Ky është 10 · cos 30°, kateta e afërt.' }] },
      en: { question: 'The hypotenuse is 10 cm and the angle 30°. How many cm is the leg opposite the angle?', explanation: '10 · sin 30° = 10 · 1/2 = 5 cm.', hint: 'opposite = hypotenuse · sin α.', unit: 'cm', commonMistakes: [{ value: 8.66, why: 'That is 10 · cos 30°, the adjacent leg.' }] },
      de: { question: 'Die Hypotenuse ist 10 cm, der Winkel 30°. Wie viele cm misst die Gegenkathete?', explanation: '10 · sin 30° = 10 · 1/2 = 5 cm.', hint: 'Gegenkathete = Hypotenuse · sin α.', unit: 'cm', commonMistakes: [{ value: 8.66, why: 'Das ist 10 · cos 30°, die Ankathete.' }] },
    },
  ],
};
